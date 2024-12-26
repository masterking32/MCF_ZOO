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
        if data is None:
            return cls()
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
        self.alliances = []

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
            self.alliances = data

            return self.alliances
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    def _join_alliance(self, alliance_id):
        try:
            resp = self.requests.post_request(
                "/alliance/rating",
                alliance_id,
            )

            if resp is None:
                raise Exception(
                    f"Failed to join to alliance, Looks like you don't have enough coins to join the alliance. response: <m>{resp}</m>"
                )

            success = resp.get("success")

            data = resp.get("data", {})
            self.user.alliance = AllianceMdl.from_dict(data.get("alliance"))
            self.user.hero = data.get("hero")

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
                raise Exception(f"Failed leave from alliances, response: <m>{resp}</m>")

            success = resp.get("success")

            data = resp.get("data", [])
            self.alliances = data

            return self.alliances
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
            return True
        if self.user.alliance:
            self._print_alliance_info(AllianceMdl.from_dict(self.user.alliance))
            return True
        target_alliance_id = utils.getConfig("user_alliance_id", 0)
        if target_alliance_id == 0:
            return True

        self._get_alliances()
        if self._join_alliance(target_alliance_id):
            self._get_alliances()
            self._print_alliance_info(AllianceMdl.from_dict(self.user.alliance))

    def donate_alliance(self):
        if not self.user.alliance:
            return True
        donation_percent = float(utils.getConfig("auto_donate_alliance", 1) / 100)
        if donation_percent <= 0:
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto food donation to the alliance <r>DISABLED</r></y>"
            )
            return True
        coins = self.user.hero.get("coins", 0)
        amount = int(coins * donation_percent)
        limit = utils.getConfig("donate_limit_balance", 1000)
        if coins < limit or coins - amount < limit:
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Donation canceled to preserve reserve balance (<c>{limit}</c>).</y>"
            )
            return True
        if amount <= 0:
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Insufficient food to donate to the alliance.</y>"
            )
            return True
        self._donate_food(amount)
        self._get_alliances()
