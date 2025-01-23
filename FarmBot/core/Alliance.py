from dataclasses import dataclass
from typing import Optional, Union, List, Dict, Tuple
import time, random
from logging import Logger
from utilities import utilities as utils, zsutils
from .Requests import Requests
from .MCFAPI import MCFAPI
from .User import User


@dataclass
class AllianceMdl:
    id: Optional[int] = None
    owner_id: Optional[int] = None
    name: Optional[str] = None
    exp: Optional[int] = None
    enter_fee: Optional[int] = None
    channel_link: Optional[str] = None
    members_count: Optional[int] = None
    creation_date: Optional[str] = None
    owner_name: Optional[str] = None
    level: Optional[int] = None

    @classmethod
    def from_dict(cls, data: Optional[dict]):
        if data is None or not isinstance(data, dict):
            return None
        return cls(
            id=data.get("id"),
            owner_id=data.get("ownerId"),
            name=data.get("name"),
            exp=data.get("exp"),
            enter_fee=data.get("enterFee"),
            channel_link=data.get("channelLink"),
            members_count=data.get("members"),
            creation_date=data.get("creationDate"),
            owner_name=data.get("ownerName"),
            level=data.get("level"),
        )


class Alliance:
    def __init__(self, requests: Requests, mcf_api: MCFAPI, user: User):
        self.log: Logger = mcf_api.log
        self.requests: Requests = requests
        self.mcf_api: MCFAPI = mcf_api
        self.user: User = user
        self.alliances: list[AllianceMdl] = []

    def _get_alliances(self):
        try:
            payload = {}

            resp = self.requests.post_request(
                "/alliance/rating",
                payload,
            )

            if resp is None:
                raise Exception(f"Failed to get alliances, response: <m>{resp}</m>")

            success = resp.get("success")

            data = resp.get("data", [])
            self.alliances = [AllianceMdl.from_dict(al) for al in data]

            return self.alliances
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    def _join_alliance(self, alliance_id):
        try:
            resp = self.requests.post_request(
                "/alliance/join",
                alliance_id,
            )

            if resp is None:
                raise Exception(
                    f"Failed to join to alliance, Looks like you don't have enough coins to join the alliance. response: <m>{resp}</m>"
                )

            success = resp.get("success")

            data = resp.get("data", {})
            self.user.alliance = data.get("alliance")
            self.user.hero = data.get("hero")

            if success:
                name = self.user.alliance.get("name", "Unknown")
                self.log.info(
                    f"🟢 <c>{self.mcf_api.account_name}</c> | You have joined the <c>{name}</c> alliance."
                )

            return success
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    def _donate_food(self, amount):
        try:
            resp = self.requests.post_request(
                "/alliance/donate",
                amount,
            )

            if resp is None:
                raise Exception(
                    f"Failed donate {amount} food to alliance, response: <m>{resp}</m>"
                )

            success = resp.get("success")
            self.log.info(
                f"🟢 <c>{self.mcf_api.account_name}</c> | You donate <c>{amount}</c> food to the alliance."
            )

            data = resp.get("data", {})
            self.user.alliance = data.get("alliance")
            self.user.hero = data.get("hero")

            return success
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    def _leave_alliance(self):
        try:
            payload = {}

            resp = self.requests.post_request(
                "/alliance/leave",
                payload,
            )

            if resp is None:
                raise Exception(f"Failed leave from alliance, response: <m>{resp}</m>")

            is_success = resp.get("success")

            data = resp.get("data", [])
            self.alliances = [AllianceMdl.from_dict(al) for al in data]

            return is_success
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    def _print_alliance_info(self, alliance: AllianceMdl):
        self.log.info(
            f"🟢 <c>{self.mcf_api.account_name}</c> | Alliance: <c>{alliance.name}</c>"
        )
        if alliance.level:
            self.log.info(
                f"🟢 <c>{self.mcf_api.account_name}</c> | Lvl: <c>{alliance.level}</c>"
            )
        self.log.info(
            f"🟢 <c>{self.mcf_api.account_name}</c> | Exp: <c>{zsutils.rnd(alliance.exp)}</c>"
        )
        self.log.info(
            f"🟢 <c>{self.mcf_api.account_name}</c> | Members: <c>{zsutils.rnd(alliance.members_count)}</c>"
        )

    def auto_join_alliance(self):
        if not utils.getConfig("auto_join_alliance", True):
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto join alliance <r>DISABLED</r></y>"
            )
            return
        self._get_alliances()
        target_alliance_id = utils.getConfig("user_alliance_id", 178)
        target_alliance = next(
            (al for al in self.alliances if al.id == target_alliance_id),
            None,
        )
        if not target_alliance:
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Target alliance to join is not found in alliances list, auto join alliance <r>CANCELLED</r></y>"
            )
            return
        current_alliance = AllianceMdl.from_dict(self.user.alliance)
        if current_alliance:
            if current_alliance.id == target_alliance.id:
                self._print_alliance_info(current_alliance)
                return
            coins = self.user.hero.get("coins", 0)
            if coins < target_alliance.enter_fee:
                self.log.info(
                    f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Insufficient balance to join an alliance. Yours: <c>{zsutils.rnd(coins)}</c>, Required: <c>{zsutils.rnd(target_alliance.enter_fee)}</c></y>"
                )
                self.log.info(
                    f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto join alliance <r>CANCELED</r></y>"
                )
                return
            if not utils.getConfig("auto_leave_alliance", False):
                self.log.info(
                    f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Target alliance ID does not match the current alliance.</y>"
                )
                self.log.info(
                    f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto join alliance <r>CANCELED</r> because auto leave alliance <r>DISABLED</r></y>"
                )
                self._print_alliance_info(current_alliance)
                return
            if not self._leave_alliance():
                return

        self._get_alliances()
        if self._join_alliance(target_alliance.id):
            self._get_alliances()
            self._print_alliance_info(AllianceMdl.from_dict(self.user.alliance))

    def donate_alliance(self):
        if not self.user.alliance:
            return True

        if not utils.getConfig("auto_donate_alliance", True):
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto food donation to the alliance <r>DISABLED</r></y>"
            )
            return True
        donation_percent = utils.getConfig("donate_amount", 1)
        if donation_percent <= 0:
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto food donation to the alliance <r>DISABLED</r></y>"
            )
            return True

        donation_percent = float(donation_percent / 100)
        coins = self.user.hero.get("coins", 0)
        amount = int(coins * donation_percent)
        if amount <= 0:
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Insufficient food to donate to the alliance.</y>"
            )
            return True
        self._donate_food(amount)
        self._get_alliances()
