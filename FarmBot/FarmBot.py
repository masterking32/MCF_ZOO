# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot
import random
import sys
import os
import time
from datetime import datetime
import asyncio

from logging import Logger
from utilities import zsutils, utilities as utils
from .core.MCFAPI import MCFAPI
from .core.HttpRequest import HttpRequest
from .core.Requests import Requests
from .core.User import User
from .core.Task import Task
from .core.Quiz import Quiz
from .core.Zoo import Zoo
from .core.Alliance import Alliance
from .core.Boost import Boost

MasterCryptoFarmBot_Dir = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__ + "/../../"))
)
sys.path.append(MasterCryptoFarmBot_Dir)


class FarmBot:
    def __init__(
        self,
        log: Logger,
        bot_globals,
        account_name,
        web_app_query,
        proxy=None,
        user_agent=None,
        isPyrogram=False,
        tgAccount=None,
    ):
        self.log: Logger = log
        self.mcf_api: MCFAPI = MCFAPI(
            log, bot_globals, account_name, proxy, user_agent, tgAccount, web_app_query
        )
        self.http: HttpRequest = HttpRequest(self.mcf_api)
        self.requests: Requests = Requests(self.http, self.mcf_api)

    async def run(self):
        try:
            self.save_balance_for_joining = False
            if not self.mcf_api.can_use_module():
                return

            self.log.info(
                f"🤖 <g><c>{self.mcf_api.account_name}</c> | Starting to farm <c>Zoo</c>...</g>"
            )

            self.user = User(self.requests, self.mcf_api)

            user_data = self.user.login()
            if not user_data:
                utils.add_account_to_display_data(
                    "display_data_bot_issues.json", self.mcf_api.account_name
                )
                return
            
            if not self.user.alliance and utils.getConfig("save_balance_for_joining", False):
                self.save_balance_for_joining = True

            self.taks = Task(self.requests, self.mcf_api, self.user)

            self.taks.perform_daily_reward()

            await self.taks.perform_tasks()

            self.taks.claim_chests()

            self.quiz = Quiz(self.requests, self.mcf_api, self.user)
            self.quiz.play_quiz()

            if not self.save_balance_for_joining:
                self.zoo = Zoo(self.requests, self.mcf_api, self.user)
                self.zoo.feed_animals()
                self.zoo.buy_special()
                self.zoo.perform_animals()

            self.alliance = Alliance(self.requests, self.mcf_api, self.user)
            self.alliance.auto_join_alliance()
            self.alliance.donate_alliance()

            if not self.save_balance_for_joining:
                self.boost = Boost(self.requests, self.mcf_api, self.user)
                self.boost.auto_buy_boost()

            self.log.info(
                f"🤖 <c>{self.mcf_api.account_name}</c><g> | Finished farming <c>Zoo</c>!</g>"
            )
            utils.add_account_to_display_data(
                "display_data_success_accounts.json",
                self.mcf_api.account_name,
                "TPH:" + zsutils.rnd(self.user.hero.get("tph", 0)),
                zsutils.rnd(self.user.hero.get("tokens", 0)),
            )

            utils.inc_display_data(
                "display_data.json",
                "success_accounts",
                {"title": "Successfull farm finished accounts", "name": "count"},
            )
        except Exception as e:
            utils.add_account_to_display_data(
                "display_data_bot_issues.json", self.mcf_api.account_name
            )
            self.log.error(
                f"🔴 <c>{self.mcf_api.account_name}</c><r> | Failed to farm!</r>"
            )
            if str(e):
                self.log.error(
                    f"🔴 <c>{self.mcf_api.account_name}</c><r> | Error: {str(e)}</r>"
                )
            return
        finally:
            delay_between_accounts = utils.getConfig("delay_between_accounts", 60)
            random_sleep = random.randint(0, 20) + delay_between_accounts
            self.log.info(
                f"⌛ <g>Farming for <c>{self.mcf_api.account_name}</c> completed. Waiting for <c>{random_sleep}</c> seconds before running the next account...</g>"
            )
            time.sleep(random_sleep)
