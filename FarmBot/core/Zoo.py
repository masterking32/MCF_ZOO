from dataclasses import dataclass
from typing import Optional, Union, List, Dict, Tuple
from datetime import datetime, timezone
import time, random
from logging import Logger
from utilities import utilities as utils, zsutils
from .Requests import Requests
from .MCFAPI import MCFAPI
from .User import User


@dataclass
class AnimalMdl:
    key: Optional[str] = None
    name: Optional[str] = None
    crnt_lvl: Optional[int] = None
    next_lvl: Optional[int] = None
    next_lvl_price: Optional[int] = None
    next_lvl_profit: Optional[int] = None
    position: Optional[int] = None
    owned: Optional[bool] = None
    upgradable: Optional[bool] = None
    date_start: Optional[str] = None
    date_end: Optional[str] = None

    @classmethod
    def from_dict(cls, data: Optional[dict]):
        if data is None:
            return cls()
        return cls(
            key=data.get("key"),
            name=data.get("name"),
            crnt_lvl=data.get("crnt_lvl"),
            next_lvl=data.get("next_lvl"),
            next_lvl_price=data.get("next_lvl_price"),
            next_lvl_profit=data.get("next_lvl_profit"),
            position=data.get("position"),
            owned=data.get("owned"),
            upgradable=data.get("upgradable"),
            date_start=data.get("date_start"),
            date_end=data.get("date_end"),
        )


@dataclass
class FeedMdl:
    key: Optional[str] = None
    price_in_tph: Optional[float] = None
    food_price: Optional[int] = None
    duration: Optional[int] = None

    @classmethod
    def from_dict(cls, data: Optional[dict]):
        if data is None:
            return cls()
        return cls(
            key=data.get("key"),
            price_in_tph=data.get("priceInTph"),
            food_price=data.get("fixPrice"),
            duration=data.get("time"),
        )


class Zoo:
    def __init__(self, requests: Requests, mcf_api: MCFAPI, user: User):
        self.log: Logger = mcf_api.log
        self.requests: Requests = requests
        self.mcf_api: MCFAPI = mcf_api
        self.user: User = user
        self.buy_new_disabled_once = False
        self.upgrade_disabled_once = False
        self.feed_status = user.data.get("feed")
        self.feed_data = [
            FeedMdl.from_dict(feed_type)
            for feed_type in user.data.get("dbData", {}).get("dbAutoFeed", [])
        ]

    def _find_by_key(self, collection, key):
        return next((item for item in collection if item["key"] == key), None)

    def _prepare(self):
        owned_animals = self.user.animals
        prepared_animals: list[AnimalMdl] = []
        max_position = 34

        total_positions = set(range(1, max_position + 1))
        occupied_positions = {o["position"] for o in owned_animals}
        free_positions = iter(sorted(total_positions - occupied_positions))

        for animal_data in self.user.animals_data:
            key = animal_data["key"]
            name = animal_data["title"]
            owned_animal = self._find_by_key(owned_animals, key)

            if owned_animal:
                position = owned_animal["position"]
            else:
                try:
                    position = next(free_positions)
                except Exception:
                    self.log.info(
                        f"🟠 <c>{self.mcf_api.account_name}</c> | <y>No available positions.</y>"
                    )
                    break

            crnt_level = owned_animal["level"] if owned_animal else 0
            next_level = crnt_level + 1

            levels = animal_data["levels"]
            next_level_data = next(
                (lvl for lvl in levels if lvl["level"] == next_level), {}
            )

            data = {
                "key": key,
                "name": name,
                "crnt_lvl": crnt_level,
                "next_lvl": next_level_data.get("level", 0),
                "next_lvl_price": next_level_data.get("price", 0),
                "next_lvl_profit": next_level_data.get("profit", 0),
                "position": position,
                "owned": crnt_level > 0,
                "upgradable": crnt_level > 0 and next_level_data.get("level", 0) > 0,
                "date_start": animal_data.get("dateStart"),
                "date_end": animal_data.get("dateEnd"),
            }

            prepared_animals.append(AnimalMdl.from_dict(data))

        return prepared_animals

    def _buy_animal(self, animal: AnimalMdl):
        try:
            payload = {
                "position": animal.position,
                "animalKey": animal.key,
            }

            resp = self.requests.post_request(
                "/animal/buy",
                payload,
            )

            if resp is None or not resp.get("success"):
                raise Exception(
                    f"Failed to buy animal <c>{animal.name}</c> with payload: <c>{payload}/<c>, response: <m>{resp}</m>"
                )

            success = resp.get("success")
            if not success:
                raise Exception(
                    f"Failed to buy animal <c>{animal.name}</c> with payload: <c>{payload}/<c>, response: <m>{resp}</m>"
                )

            data = resp.get("data", {})
            self.user.animals = data.get("animals", [])
            self.user.hero = data.get("hero", {})
            action = (
                f"<g>upgraded</g> to lvl <y>{animal.next_lvl}</y>"
                if animal.crnt_lvl > 0
                else "bought"
            )
            self.log.info(
                f"🟢 <c>{self.mcf_api.account_name}</c> | Animal <c>{animal.name}</c> {action} for <c>{zsutils.rnd(animal.next_lvl_price)}</c> food."
            )

            return success
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    def _upgrade_animals(self):
        animals = self._prepare()
        animals = [animal for animal in animals if animal.upgradable]
        animals.sort(key=lambda animal: animal.next_lvl_price)
        for animal in animals:
            balance = self.user.hero.get("coins", 0)
            if animal.next_lvl_price > balance:
                break
            if self._buy_animal(animal):
                return self._upgrade_animals()

    def _buy_new_animals(self):
        animals = self._prepare()
        animals = [
            animal
            for animal in animals
            if not animal.owned and not animal.date_start and not animal.date_end
        ]
        animals.sort(key=lambda animal: animal.next_lvl_price)
        for animal in animals:
            balance = self.user.hero.get("coins", 0)
            if animal.next_lvl_price > balance:
                break
            if self._buy_animal(animal):
                animals.remove(animal)
                if utils.getConfig("auto_buy_animals_one", True):
                    break
            else:
                break

    def perform_animals(self):
        can_buy = utils.getConfig("auto_buy_animals", True)
        can_upgrade = utils.getConfig("auto_upgrade_animals", True)
        if not can_buy and not can_upgrade:
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto buy and upgrade animals <r>DISABLED</r></y>"
            )
            return
        if not can_buy:
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto buy animals <r>DISABLED</r></y>"
            )
        else:
            self.log.info(
                f"🟡 <c>{self.mcf_api.account_name}</c> | Checking animals for buying..."
            )
            self._buy_new_animals()

        if not can_upgrade:
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto upgrade animals <r>DISABLED</r></y>"
            )
        else:
            self.log.info(
                f"🟡 <c>{self.mcf_api.account_name}</c> | Checking animals for upgrading..."
            )
            self._upgrade_animals()

    def buy_special(self):
        if not utils.getConfig("auto_buy_special_animals", True):
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto buy special animals <r>DISABLED</r></y>"
            )
            return

        animals = self._prepare()
        animals = [
            animal
            for animal in animals
            if not animal.owned and animal.date_start and animal.date_end
        ]
        animals.sort(key=lambda animal: animal.next_lvl_price)
        for animal in animals:
            if animal.date_start and animal.date_end:
                if not self._can_buy_special(animal):
                    continue
                if self._buy_animal(animal):
                    animals.remove(animal)
                else:
                    break

    def _can_buy_special(self, animal: AnimalMdl):
        start_time = datetime.strptime(animal.date_start, "%Y-%m-%d %H:%M:%S").replace(
            tzinfo=timezone.utc
        )
        end_time = datetime.strptime(animal.date_end, "%Y-%m-%d %H:%M:%S").replace(
            tzinfo=timezone.utc
        )
        local_start_time = start_time.astimezone()
        local_end_time = end_time.astimezone()
        start_timestamp = int(start_time.timestamp())
        end_timestamp = int(end_time.timestamp())
        current_timestamp = int(datetime.now().timestamp())
        balance = self.user.hero.get("coins", 0)
        if current_timestamp > end_timestamp:
            return False
        elif start_timestamp <= current_timestamp <= end_timestamp:
            if animal.next_lvl_price > balance:
                self.log.info(
                    f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Isufficient balance to buy special <c>{animal.name}</c>, Yours: <c>{zsutils.rnd(balance)}</c>, Required: <c>{zsutils.rnd(animal.next_lvl_price)}</c></y>"
                )
                return False
            else:
                return True
        else:
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>You can't buy special <c>{animal.name}</c> now.</y>"
            )
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Purchase available between <c>{local_start_time}</c> and <c>{local_end_time}</c></y>"
            )
            if animal.next_lvl_price > balance:
                self.log.info(
                    f"🟠 <c>{self.mcf_api.account_name}</c> | <y>But you have an insufficient balance. Yours: <c>{zsutils.rnd(balance)}</c>, Required: <c>{zsutils.rnd(animal.next_lvl_price)}</c></y>"
                )
            return False

    def _is_feed_required(self):
        return self.feed_status.get("isNeedFeed", False)

    def _feed_animal(self, feed: FeedMdl):
        try:
            self.log.info(
                f"🟡 <c>{self.mcf_api.account_name}</c> | <y>Trying to feed the animals.</y>"
            )
            resp = self.requests.post_request(
                "/autofeed/buy",
                feed.key,
            )

            if resp is None or not resp.get("success"):
                raise Exception(f"Failed to feed animals, response: <m>{resp}</m>")

            is_success = resp.get("success")

            data = resp.get("data", {})
            self.feed_status = data.get("feed", {})
            self.user.hero = data.get("hero", {})
            self.log.info(
                f"🟢 <c>{self.mcf_api.account_name}</c> | <g>The animals are fed successfully.</g>"
            )
            self._feed_time_log()

            return is_success
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    def _feed_time_log(self):
        try:
            auto_feed_end = zsutils.get_time(
                self.feed_status.get("autoFeedEndDate", "")
            )
            next_feed_time = zsutils.get_time(self.feed_status.get("nextFeedTime", ""))
            utc = auto_feed_end.get("utc")
            local = auto_feed_end.get("local")
            self.log.info(
                f"🟡 <c>{self.mcf_api.account_name}</c> | <y>Auto feed end:  UTC: <c>{utc}</c> | LOCAL: <c>{local}</c></y>"
            )
            utc = next_feed_time.get("utc")
            local = next_feed_time.get("local")
            self.log.info(
                f"🟡 <c>{self.mcf_api.account_name}</c> | <y>Next feed time: UTC: <c>{utc}</c> | LOCAL: <c>{local}</c></y>"
            )
        except Exception:
            pass

    def feed_animals(self):
        if not self._is_feed_required():
            self.log.info(
                f"🟢 <c>{self.mcf_api.account_name}</c> | Animals don't need feeding."
            )
            self._feed_time_log()
            return
        self.log.info(
            f"🟡 <c>{self.mcf_api.account_name}</c> | <y>The animals need to be fed, the mining has been stopped..</y>"
        )
        if not utils.getConfig("auto_feed_animals", True):
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto feed animals <r>DISABLED</r></y>"
            )
            self._feed_time_log()
            return

        one_time_feed = next(feed for feed in self.feed_data if feed.duration == 0)
        tph = self.user.hero.get("tph", 0)
        food_balance = self.user.hero.get("coins", 0)
        price = tph * one_time_feed.price_in_tph
        price = int(price) + (1 if price > int(price) else 0)
        if price > food_balance:
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Insufficient food balance (<c>{food_balance}</c>) to feed animals, required <c>{price}</c> food.</y>"
            )
            return
        self.log.info(
            f"🟡 <c>{self.mcf_api.account_name}</c> | <y>Animal feed price: {price} food</y>"
        )
        self._feed_animal(one_time_feed)

    def change_position(self, animal: AnimalMdl, new_pos: int):
        try:
            old_pos = animal.position
            self.log.info(
                f"🟡 <c>{self.mcf_api.account_name}</c> | <y>Changing position for <c>{animal.name}</c> from <c>{old_pos}</c> to <g>{new_pos}</g>.</y>"
            )
            payload = {
                "animalKey": animal.key,
                "position": new_pos,
            }
            resp = self.requests.post_request(
                "/animal/position",
                payload,
            )

            if resp is None or not resp.get("success"):
                raise Exception(
                    f"Failed to change position for <c>{animal.name}</c> from <c>{old_pos}</c> to <g>{new_pos}</g>, response: <m>{resp}</m>"
                )

            is_success = resp.get("success")

            if is_success:
                self.log.info(
                    f"🟢 <c>{self.mcf_api.account_name}</c> | <g>Position changed for <c>{animal.name}</c> from <c>{old_pos}</c> to <g>{new_pos}</g>.</g>"
                )

            return is_success
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False
