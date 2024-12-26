from dataclasses import dataclass
from typing import Optional, Union, List, Dict, Tuple
import time, random
from logging import Logger
from utilities import utilities as utils, zsutils
from .Requests import Requests
from .MCFAPI import MCFAPI
from .User import User

{"key": "5_boost_for_24_hours", "price": 50, "boost": 5, "days": 1}


@dataclass
class BoostMdl:
    key: Optional[str] = None
    price: Optional[int] = None
    value: Optional[int] = None
    duration: Optional[int] = None

    @classmethod
    def from_dict(cls, data: Optional[dict]):
        if data is None:
            return cls()
        return cls(
            key=data.get("key"),
            price=data.get("price"),
            value=data.get("boost"),
            duration=data.get("days"),
        )


class Boost:
    def __init__(self, requests: Requests, mcf_api: MCFAPI, user: User):
        self.log: Logger = mcf_api.log
        self.requests: Requests = requests
        self.mcf_api: MCFAPI = mcf_api
        self.user: User = user
        self.boosts = [BoostMdl.from_dict(bst) for bst in self.user.boosts_data]

    def _buy_boost(self, boost: BoostMdl):
        try:
            resp = self.requests.post_request(
                "/boost/buy",
                boost.key,
            )

            if resp is None:
                raise Exception(
                    f"Failed to buy boost <c>{boost.key}</c>, response: <m>{resp}</m>"
                )

            success = resp.get("success")

            if success:
                data = resp.get("data", {})
                self.user.hero = data.get("hero")
                self.log.info(
                    f"🟢 <c>{self.mcf_api.account_name}</c> | Boost <c>+{boost.value}%</c> for 24 hours successfully bought."
                )

            return success
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    def auto_buy_boost(self):
        selected_value = int(utils.getConfig("auto_buy_boost", 0))
        if selected_value == 0:
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto buy boost <r>DISABLED</r></y>"
            )
            return True

        if self.user.hero.get("tphBoost", 0) > 0:
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Boost already active.</y>"
            )
            return True

        selected_boost = next(
            (boost for boost in self.boosts if boost.value == selected_value), None
        )
        if selected_boost:
            if self.user.hero.get("coins", 0) < selected_boost.price:
                self.log.info(
                    f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Insufficient food to buy boost.</y>"
                )
                return True
            self._buy_boost(selected_boost)
