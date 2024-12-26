from dataclasses import dataclass
from typing import Optional, Union, List, Dict, Tuple
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
        )


class Zoo:
    def __init__(self, requests: Requests, mcf_api: MCFAPI, user: User):
        self.log: Logger = mcf_api.log
        self.requests: Requests = requests
        self.mcf_api: MCFAPI = mcf_api
        self.user: User = user
        self.buy_new_disabled_once = False
        self.upgrade_disabled_once = False

    def _find_by_key(self, collection, key):
        return next((item for item in collection if item["key"] == key), None)

    def _prepare(self):
        owned_animals = self.user.animals
        prepared_animals: list[AnimalMdl] = []
        for animal_data in self.user.animals_data:
            key = animal_data["key"]
            name = animal_data["title"]
            owned_animal = self._find_by_key(owned_animals, key)

            position = (
                owned_animal["position"]
                if owned_animal
                else (
                    max([o["position"] for o in owned_animals]) + 1
                    if owned_animals
                    else 1
                )
            )
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
        animals = [animal for animal in animals if not animal.owned]
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
