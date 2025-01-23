from logging import Logger
from utilities import zsutils
from .Requests import Requests
from .MCFAPI import MCFAPI


class User:
    def __init__(self, requests: Requests, mcf_api: MCFAPI):
        self.log: Logger = mcf_api.log
        self.requests: Requests = requests
        self.mcf_api: MCFAPI = mcf_api
        self.data: dict = {}
        self.profile: dict = {}
        self.animals: list = []
        self.hero: dict = {}
        self.animals_data: list = []
        self.purchase_data: list = []
        self.alliance_data: list = []
        self.boosts_data: list = []
        self.tasks_data: list = []
        self.daily_reward_data: list = []
        self.game_config: dict = {}
        self.assets: list = []
        self.alliance: list = []
        self.after: dict = {}
        self.daily_rewards: dict = {}
        self.friends: list = []
        self.completed_tasks: list = []
        self.quiz_data: list = []
        self.completed_quizes: list = []

    def _authorize(self):
        try:
            payload = {
                "initData": self.mcf_api.web_app_query,
                "startParam": self.mcf_api.WAD.get("start_param"),
                "photoUrl": self.mcf_api.WAD.get("user").get("photo_url"),
                "platform": "android",
                "chatId": "",
                "chatType": self.mcf_api.WAD.get("chat_type"),
                "chatInstance": self.mcf_api.WAD.get("chat_instance"),
            }
            resp = self.requests.post_request(
                "/telegram/auth",
                payload,
            )
            if resp is None or not resp.get("success"):
                raise Exception(
                    f"Failed to authorize <c>{self.mcf_api.account_type}</c>, response: <m>{resp}</m>"
                )

            success = resp.get("success")

            self.log.info(
                f"🟢 <c>{self.mcf_api.account_name}</c> | Successfully authorized."
            )
            self.requests.authorized = True

            return True
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(
                f"🔴 <c>{self.mcf_api.account_name}</c> | Error authorizing: <r>{msg}</r>"
            )
            return False

    def _get_user(self):
        try:
            payload = {}
            resp = self.requests.post_request(
                "/user/data/all",
                payload,
            )

            if resp is None or not resp.get("success"):
                raise Exception(f"Failed to get user data, response: <m>{resp}</m>")

            success = resp.get("success")

            data = resp.get("data", {})
            self.data = data
            self.profile = self.data.get("profile", {})
            self.animals = self.data.get("animals", [])
            self.hero = self.data.get("hero", {})
            self.assets = self.data.get("dbAssets", [])
            self.alliance = self.data.get("alliance", [])

            db_data = self.data.get("dbData", {})
            self.animals_data = db_data.get("dbAnimals", [])
            self.purchase_data = db_data.get("dbPurchase", [])
            self.alliance_data = db_data.get("dbAlliance", [])
            self.boosts_data = db_data.get("dbBoost", [])
            self.tasks_data = db_data.get("dbQuests", [])
            self.daily_reward_data = db_data.get("dbDailyRewards", [])
            self.game_config = db_data.get("gameConfig", [])
            self.quiz_data = db_data.get("dbQuizzes", [])

            return True
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    def _get_after(self):
        try:
            payload = {
                "lang": self.mcf_api.WAD.get("language_code", "en"),
            }
            resp = self.requests.post_request(
                "/user/data/after",
                payload,
            )

            if resp is None or not resp.get("success"):
                raise Exception(f"Failed to get after data, response: <m>{resp}</m>")

            success = resp.get("success")

            data = resp.get("data", {})
            self.after = data

            self.daily_rewards = data.get("dailyRewards", {})
            self.friends = data.get("friends", [])
            self.completed_tasks = data.get("quests", [])
            self.completed_quizes = data.get("quizzes")

            return True
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False
        
    def _finish_onboard(self, id):
        try:
            resp = self.requests.post_request(
                "/hero/onboarding/finish",
                id,
            )

            if resp is None or not resp.get("success"):
                raise Exception(
                    f"Failed to finish onboard {id}, response: <m>{resp}</m>"
                )

            success = resp.get("success")
            data = resp.get("data", {})
            self.after = data

            return success
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return None

    def login(self):
        try:
            if not self.requests.get_main_page():
                return False
            if not self._authorize():
                return False
            if not self._get_user():
                return False
            if not self._get_after():
                return False
            if not "1" in self.hero.get("onboarding", []):
                if not self._finish_onboard(1):
                    return False
            if not "1" in self.hero.get("onboarding", []):
                self._finish_onboard(80)

            f_name = self.profile.get("firstName")
            l_name = self.profile.get("lastName")
            full_name = f"{f_name} {l_name}".strip()
            self.log.info(
                f"🟢 <c>{self.mcf_api.account_name}</c> | <g>Logged in as <c>{full_name}</c></g>"
            )

            tokens_balance = zsutils.rnd(self.hero.get("tokens", 0))
            coins_balance = zsutils.rnd(self.hero.get("coins", 0))
            tph = zsutils.rnd(self.hero.get("tph", 0))

            self.log.info(
                f"🟢 <c>{self.mcf_api.account_name}</c> | Tokens: <c>{tokens_balance}</c>"
            )
            self.log.info(
                f"🟢 <c>{self.mcf_api.account_name}</c> | Coins: <c>{coins_balance}</c>"
            )
            self.log.info(f"🟢 <c>{self.mcf_api.account_name}</c> | TPH: <c>{tph}</c>")

            return True
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return None
