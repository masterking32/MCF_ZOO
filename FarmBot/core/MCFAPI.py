from mcf_utils.api import API
from logging import Logger
import time, urllib.parse, random, time
from mcf_utils.tgAccount import tgAccount as TG
from utilities import utilities as utils, zsutils
from datetime import datetime, timedelta, timezone


class MCFAPI:
    def __init__(
        self,
        log: Logger,
        bot_globals: dict,
        account_name: str,
        proxy: str,
        user_agent: str,
        tgAccount: TG,
        web_app_query: str,
    ):
        self.log: Logger = log
        self.bot_globals: dict = bot_globals
        self.account_name: str = account_name
        self.proxy: str = proxy
        self.user_agent: str = user_agent
        self.tgAccount: TG = tgAccount
        self.web_app_query: str = web_app_query
        self.license_key: str = self.bot_globals.get("license", "")
        self.start_param = ""
        self.ref_code = ""
        self.WAD = zsutils.wad_to_json(web_app_query)
        self.API_KEY = self.WAD.get("hash", "empty")
        self.account_type = "SESSION account" if self.tgAccount else "WAD account"

        if self.tgAccount:
            self.ref_code = self.tgAccount.ReferralToken
        else:
            ref = utils.getConfig("referral_token", "")
            ref = (
                ref
                if ref and "ref" in ref
                else random.choice(
                    [
                        "ref95736407",
                        "ref365560315",
                        "ref504844459",
                    ]
                )
            )
            self.ref_code = ref

        if self.ref_code:
            self.start_param += f"?tgWebAppStartParam={self.ref_code}"

    def can_use_module(self):
        offset_value = utils.getConfig("auto_disable_module", 7)
        days_offset = int(offset_value)
        if days_offset == 0:
            return True

        key_timestamp = 1738281600  # Fri Jan 31 2025 00:00:00 GMT+0000
        target_timestamp = key_timestamp - (86400 * days_offset)

        current_timestamp = int(time.time())

        if current_timestamp >= target_timestamp:
            diff = int((key_timestamp - current_timestamp) / 86400)
            self.log.info(
                f"🟠 <c>{self.account_name}</c> | <r>Using module is suspended because there are <y>~{diff} day{'s' if diff > 1 else ''}</y> left until the key date.</r>"
            )
            self.log.info(
                f"🟠 <c>{self.account_name}</c> | <r>You chose to suspend in <y>{days_offset}</y> days.</r>"
            )
            return False
        return True

    def _api_request(self, action: str, data: dict = {}):
        if self.license_key is None:
            return None
        apiObj = API(self.log)
        data["game_name"] = self.bot_globals.get("module_name", "").lower()
        data["action"] = action
        response = apiObj.get_task_answer(self.license_key, data)
        time.sleep(3)
        if "error" in response:
            self.log.error(
                f"🔴 <c>{self.account_name}</c> | <r>API Error: {response['error']}</r>"
            )
            return None
        elif response.get("status") == "success":
            return response
        elif response.get("status") == "error" and response.get("message"):
            self.log.info(
                f"🟠 <c>{self.account_name}</c> | <y>{response.get('message')}</y>"
            )
            return None
        else:
            self.log.error(
                f"🔴 <c>{self.account_name}</c> | <r>Unable to get task answer, please try again later</r>"
            )
            return None

    def get_task_keyword(self, task_id, task_title):
        try:
            data = {
                "task_type": "keyword",
                "task_id": task_id,
                "task_name": task_title,
            }
            resp = self._api_request("get_task", data)
            if not resp or not resp.get("answer"):
                return None
            return resp.get("answer")
        except Exception as e:
            self.log.error(
                f"🔴 <c>{self.account_name}</c> | <r>Error getting task keyword: {str(e)}</r>"
            )
            return None

    def get_invite_link(self, url):
        try:
            data = {
                "task_type": "invite",
                "task_data": url,
            }
            resp = self._api_request("get_task", data)
            if resp is None or "status" not in resp or resp["status"] != "success":
                return None
            return resp
        except Exception as e:
            self.log.error(
                f"🔴 <c>{self.account_name}</c> | <r>Error getting invite link: {str(e)}</r>"
            )
            return None

    async def start_bot(self, bot_id, ref_link):
        try:
            tg = TG(
                bot_globals=self.bot_globals,
                log=self.log,
                accountName=self.account_name,
                proxy=self.proxy,
                BotID=bot_id,
                ReferralToken=ref_link,
                MuteBot=True,
            )
            await tg.getWebViewData()
            self.log.info(
                f"🟢 <c>{self.account_name}</c> | Bot <c>{bot_id}</c> started successfully!"
            )
            return True
        except Exception as e:
            self.log.error(
                f"🔴 <c>{self.account_name}</c> | <r>Error starting bot <c>{bot_id}</c>: {str(e)}</r>"
            )
            return False

    async def set_name(self, checkData):
        tgMe = self.tgAccount.me if self.tgAccount.me else None
        if tgMe is None:
            raise Exception("Telegram account not found")
        try:
            tgMe.first_name = tgMe.first_name or ""
            tgMe.last_name = tgMe.last_name or ""
            if checkData not in tgMe.last_name and checkData not in tgMe.first_name:
                await self.tgAccount.setName(
                    tgMe.first_name, tgMe.last_name + checkData
                )
            self.log.info(
                f"🟢 <c>{self.account_name}</c> | <g>Name set successfully!</g>"
            )
            return True
        except Exception as e:
            self.log.error(
                f"🔴 <c>{self.account_name}</c> | <r>Error setting name: {str(e)}</r>"
            )
            return False

    async def join_chat(self, channel_url):
        try:
            channel_url = channel_url
            if "+" not in channel_url:
                channel_url = (
                    channel_url.replace("https://t.me/", "")
                    .replace("@", "")
                    .replace("boost/", "")
                )
            channel_url = (
                channel_url.split("/")[0] if "/" in channel_url else channel_url
            )
            await self.tgAccount.joinChat(channel_url)
            self.log.info(
                f"🟢 <c>{self.account_name}</c> | <g>Joined chat: {channel_url}</g>"
            )
            return True
        except Exception as e:
            self.log.error(
                f"🔴 <c>{self.account_name}</c> | <r>Error joining chat: {str(e)}</r>"
            )
            return False
