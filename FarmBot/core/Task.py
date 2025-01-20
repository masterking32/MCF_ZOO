import time, random
from datetime import datetime, timezone
from logging import Logger
from utilities import zsutils, utilities as utils
from .Requests import Requests
from .MCFAPI import MCFAPI
from .User import User


class Task:
    def __init__(self, requests: Requests, mcf_api: MCFAPI, user: User):
        self.log: Logger = mcf_api.log
        self.requests: Requests = requests
        self.mcf_api: MCFAPI = mcf_api
        self.user: User = user

    def _check_daily_reward(self):
        data = self.user.daily_rewards
        can_take_keys = [int(key) for key, value in data.items() if value == "canTake"]
        taken_keys = [int(key) for key, value in data.items() if value == "taken"]

        can_take = max(can_take_keys, default=None)
        taken = max(taken_keys, default=None)

        if can_take:
            self._claim_daily_reward(can_take)
        else:
            self.log.info(
                f"🟢 <c>{self.mcf_api.account_name}</c> | Daily reward already claimed, <c>{taken}</c> days."
            )

    def _claim_daily_reward(self, task_id):
        try:
            resp = self.requests.post_request(
                "/quests/daily/claim",
                task_id,
            )

            if resp is None or not resp.get("success"):
                raise Exception(
                    f"Failed to claim daily reward, response: <m>{resp}</m>"
                )

            success = resp.get("success")

            reward = next(
                (
                    item["rewardMoney"]
                    for item in self.user.daily_reward_data
                    if item["key"] == task_id
                ),
                None,
            )

            if reward:
                reward = zsutils.rnd(reward)
            else:
                reward = "<r>DATA NOT FOUND</r>"

            self.log.info(
                f"🟢 <c>{self.mcf_api.account_name}</c> | <g>Daily reward claimed: <y>{reward}</y>, day: <c>{task_id}</c></g>"
            )
            data = resp.get("data", {})
            self.user.daily_rewards = data.get("dailyRewards", {})
            self.user.hero = data.get("hero", {})

            return True
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    def perform_daily_reward(self):
        if not utils.getConfig("auto_daily_reward", True):
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto claim daily reward <r>DISABLED</r></y>"
            )
            return True
        return self._check_daily_reward()

    def _check_task(self, task, answer=None):
        try:
            task_key = task.get("key", "")
            payload = [f"{task_key}", answer]
            resp = self.requests.post_request(
                "/quests/check",
                payload,
            )

            if resp is None or not resp.get("success"):
                raise Exception(
                    f"Failed to check task <c>{task_key}</c>, response: <m>{resp}</m>"
                )

            success = resp.get("success")

            data = resp.get("data", {})
            result = data.get("result")

            time.sleep(random.randint(1, 3))

            if result:
                return self._claim_task(task, answer)
            return result
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    def _claim_task(self, task, answer=None):
        try:
            task_key = task.get("key", "")
            payload = [f"{task_key}", answer]
            resp = self.requests.post_request(
                "/quests/claim",
                payload,
            )

            if resp is None or not resp.get("success"):
                raise Exception(
                    f"Failed to check task <c>{task_key}</c>, response: <m>{resp}</m>"
                )

            success = resp.get("success")

            data = resp.get("data", {})
            self.user.hero = data.get("hero", {})
            self.user.completed_tasks = data.get("quests", [])

            self._log_task_reward(task)

            time.sleep(random.randint(1, 3))

            return success
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    def _log_task_reward(self, task):
        reward = zsutils.rnd(task.get("reward", 0))

        if "chest_" in task.get("key", ""):
            chest_size = self._get_chest_size(task)
            self.log.info(
                f"🟢 <c>{self.mcf_api.account_name}</c> | Reward <c>{reward}</c> food for claiming <y>{chest_size}</y> chest"
            )
        else:
            task_name = task.get("title", "").strip()
            if task_name == "":
                task_name = task.get("key", "")
            self.log.info(
                f"🟢 <c>{self.mcf_api.account_name}</c> | Reward <c>{reward}</c> food for completion <y>{task_name}</y> task"
            )

    def _update_progress(self):
        try:
            resp = self.requests.post_request(
                "/quests/progress",
                "",
            )

            if resp is None or not resp.get("success"):
                raise Exception(
                    f"Failed to update taskss progress, response: <m>{resp}</m>"
                )

            success = resp.get("success")

            data = resp.get("data", {})
            self.user.completed_tasks = data

            time.sleep(random.randint(1, 3))

            return True
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    async def perform_tasks(self):
        if not utils.getConfig("auto_complete_tasks", True):
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto complete tasks <r>DISABLED</r></y>"
            )
            return True
        completed_keys = {
            task["key"]
            for task in self.user.completed_tasks
            if task["isRewarded"] == True
        }
        pending_tasks = [
            task
            for task in self.user.tasks_data
            if task["key"] not in completed_keys and "chest_" not in task["key"]
        ]

        for task in pending_tasks:
            task_key = task.get("key", "")
            task_name = task.get("title", "Unknown")
            if not task_key:
                self.log.error(
                    f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Failed to get task key: {task}</y>"
                )
                continue

            if (
                "boost_" in task_key
                or "donate_ton" in task_key
                or "ton_wallet_" in task_key
            ):
                continue

            self.log.info(
                f"🔵 <c>{self.mcf_api.account_name}</c> | Performing task <c>{task_name}</c>"
            )

            if task.get("checkType") == "invite":
                try:
                    friends_count = self.user.profile.get("friends", -1)
                    required = task.get("checkCount", 0)
                    if not friends_count >= required:
                        self.log.info(
                            f"🟠 <c>{self.mcf_api.account_name}</c> | Insufficient friends. Requires <y>{required}</y>, yours is <y>{friends_count}</y>"
                        )
                        continue
                    self._claim_task(task)
                except Exception as e:
                    pass
                continue

            if task_key == "join_tg":
                if not self.mcf_api.tgAccount:
                    continue
                if not utils.getConfig("auto_join_channels", True):
                    self.log.info(
                        f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto join channels <r>DISABLED</r></y>"
                    )
                    continue
                url = task.get("actionUrl", "")
                if not await self.mcf_api.join_chat(url):
                    continue
                if not self._check_task(task):
                    continue
                continue

            if task_key in ["name_check_giraffe", "name_check_snake"]:
                if not utils.getConfig("auto_change_name", True):
                    self.log.info(
                        f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto change name <r>DISABLED</r></y>"
                    )
                    continue
                f_name = self.user.profile.get("firstName", "")
                l_name = self.user.profile.get("lastName", "")
                check_data = task.get("checkData")
                if check_data in f_name or check_data in l_name:
                    if not self._claim_task(task):
                        continue
                    continue

                if not self.mcf_api.tgAccount:
                    self.log.warning(
                        f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Cannot change name for a non-session account.</y>"
                    )
                    continue

                if not await self.mcf_api.set_name(check_data):
                    self.log.warning(
                        f"🟠 <c>{self.mcf_api.account_name}</c> | <r>Failed to set name.</r>"
                    )
                    continue

                self.log.info(
                    f"🟢 <c>{self.mcf_api.account_name}</c> | Added <c>{check_data}</c> to last name."
                )
                self.log.info(
                    f"🟢 <c>{self.mcf_api.account_name}</c> | Task will be completed on the next run!"
                )
                continue

            if "riddle_" in task_key.lower() or "rebus_" in task_key.lower():
                check_data = task.get("checkData")
                if not check_data:
                    self.log.info(
                        f"🟠 <c>{self.mcf_api.account_name}</c> | <r>Task object does not contain an answer.</r>"
                    )
                    continue
                task_type = task_key.lower().split("_")[0]
                self.log.info(
                    f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Attempting to answer the {task_type}: <c>{check_data}</c></y>"
                )
                self._check_task(task, check_data)
                continue

            if task_key in ["join_x", "special_x", "special_hrum"]:
                self._claim_task(task)
                continue

            if task_key == "ton_wallet_connect":
                for c_task in self.user.completed_tasks:
                    if c_task["key"] == task_key and not bool(c_task["isRewarded"]):
                        self._claim_task(task)
                        continue
                continue

            if task_key == "ton_wallet_transaction":
                continue

            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Task <c>{task_name}</c> unsupported right now. Devs check required.</y>"
            )

    def claim_chests(self):
        if not utils.getConfig("auto_claim_chests", True):
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto claim chests <r>DISABLED</r></y>"
            )
            return True

        self.log.info(f"🔵 <c>{self.mcf_api.account_name}</c> | Checking for chests")

        completed_keys = {
            task["key"]
            for task in self.user.completed_tasks
            if "chest_" in task["key"] and task["isRewarded"] == True
        }
        pending_chests = [
            task
            for task in self.user.tasks_data
            if task["key"] not in completed_keys and "chest_" in task["key"]
        ]
        claimed = False
        for chest in pending_chests:
            while self._can_claim_chest(chest) and not claimed:
                claimed = self._claim_task(chest)
            claimed = False
            continue

    def _can_claim_chest(self, chest: dict):
        start_time = datetime.strptime(chest["actionTo"], "%Y-%m-%d %H:%M:%S").replace(
            tzinfo=timezone.utc
        )
        end_time = datetime.strptime(chest["dateEnd"], "%Y-%m-%d %H:%M:%S").replace(
            tzinfo=timezone.utc
        )
        local_start_time = start_time.astimezone()
        local_end_time = end_time.astimezone()
        start_timestamp = int(start_time.timestamp())
        end_timestamp = int(end_time.timestamp())
        current_timestamp = int(datetime.now().timestamp())
        reward = chest.get("reward", -1)
        chest_size = self._get_chest_size(chest)
        if current_timestamp > end_timestamp:
            return False
        elif start_timestamp <= current_timestamp <= end_timestamp:
            return True
        elif current_timestamp < start_timestamp:
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Claim <c>{chest_size}</c> chest available between <c>{local_start_time}</c> and <c>{local_end_time}</c></y>"
            )
            return False

    def _get_chest_size(self, chest: dict):
        chest_key = chest.get("key", "")
        chest_size = "Unknown"
        if "_s_" in chest_key:
            chest_size = "Small"
        elif "_m_" in chest_key:
            chest_size = "Medium"
        elif "_l_" in chest_key:
            chest_size = "Large"
        return chest_size
