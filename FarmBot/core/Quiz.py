from dataclasses import dataclass
from typing import Optional, Union, List, Dict, Tuple
import time, random
from logging import Logger
from utilities import utilities as utils, zsutils
from .Requests import Requests
from .MCFAPI import MCFAPI
from .User import User


@dataclass
class AnswerMdl:
    key: Optional[str] = None
    title: Optional[str] = None
    desc: Optional[str] = None

    @classmethod
    def from_dict(cls, data: Optional[dict]):
        if data is None:
            return cls()
        return cls(
            key=data.get("key"),
            title=data.get("title"),
            desc=data.get("desc"),
        )


@dataclass
class DataQuizMdl:
    key: Optional[str] = None
    title: Optional[int] = None
    reward: Optional[int] = None
    answers: Optional[list[AnswerMdl]] = None
    questions: Optional[list] = None

    @classmethod
    def from_dict(cls, data: Optional[dict]):
        if data is None:
            return cls()
        return cls(
            key=data.get("key"),
            title=data.get("title"),
            reward=data.get("reward"),
            answers=[AnswerMdl.from_dict(answer) for answer in data.get("answers")],
            questions=data.get("questions"),
        )


@dataclass
class CompletedQuizMdl:
    key: Optional[str] = None
    result: Optional[str] = None
    is_rewarded: Optional[bool] = None

    @classmethod
    def from_dict(cls, data: Optional[dict]):
        if data is None:
            return cls()
        return cls(
            key=data.get("key"),
            result=data.get("result"),
            is_rewarded=data.get("isRewarded"),
        )


class Quiz:
    def __init__(self, requests: Requests, mcf_api: MCFAPI, user: User):
        self.log: Logger = mcf_api.log
        self.requests: Requests = requests
        self.mcf_api: MCFAPI = mcf_api
        self.user: User = user
        self.quizzes_data = [DataQuizMdl.from_dict(dbQuiz) for dbQuiz in user.quiz_data]
        self.completed_quizzes = [
            CompletedQuizMdl.from_dict(quiz) for quiz in user.completed_quizes
        ]

    def play_quiz(self):
        if not utils.getConfig("auto_play_quizzes", True):
            self.log.info(
                f"🟠 <c>{self.mcf_api.account_name}</c> | <y>Auto play quizzes <r>DISABLED</r></y>"
            )
            return True

        for quiz in self.completed_quizzes:
            if not quiz.is_rewarded:
                if self._claim_quiz(quiz):
                    quiz.is_rewarded = True

        completed_quiz_keys = {quiz.key for quiz in self.completed_quizzes}

        pending_quizzes = [
            quiz for quiz in self.quizzes_data if quiz.key not in completed_quiz_keys
        ]

        if len(pending_quizzes) <= 0:
            self.log.info(
                f"🟢 <c>{self.mcf_api.account_name}</c> | There are no available quizzes."
            )
            return True

        for quiz in pending_quizzes:
            self.log.info(
                f"🔵 <c>{self.mcf_api.account_name}</c> | Playing quiz <c>{quiz.title}</c>"
            )
            questions_count = len(quiz.questions)
            while questions_count > 0:
                time.sleep(random.randint(1, 3))
                questions_count -= 1
            self._answer_quiz(quiz)

    def _answer_quiz(self, quiz: DataQuizMdl):
        try:
            answer = random.choice(quiz.answers)
            self.log.info(
                f"🟡 <c>{self.mcf_api.account_name}</c> | Answer the quiz <c>{quiz.title}</c>, answer is <y>{answer.title}</y>."
            )
            payload = {
                "key": quiz.key,
                "result": answer.key,
            }
            resp = self.requests.post_request(
                "/quiz/result/set",
                payload,
            )

            if resp is None:
                raise Exception(
                    f"Failed to answer quiz <c>{quiz.title}</c>, response: <m>{resp}</m>"
                )

            is_success = resp.get("success")

            if is_success:
                data = resp.get("data", {})
                self.user.completed_quizes = data.get("quizzes")
                self.log.info(
                    f"🟢 <c>{self.mcf_api.account_name}</c> | Quiz <c>{quiz.title}</c> has been successfully completed."
                )
                return self._claim_quiz(quiz)

            return is_success
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    def _claim_quiz(self, quiz: DataQuizMdl):
        try:
            self.log.info(
                f"🟡 <c>{self.mcf_api.account_name}</c> | Claiming the quiz <c>{quiz.title}</c>."
            )
            payload = {
                "key": quiz.key,
            }
            resp = self.requests.post_request(
                "/quiz/claim",
                payload,
            )

            if resp is None:
                raise Exception(
                    f"Failed to claim quiz <c>{quiz.title}</c>, response: <m>{resp}</m>"
                )

            is_success = resp.get("success")

            if is_success:
                data = resp.get("data", {})
                self.user.hero = data.get("hero")
                self.user.completed_quizes = data.get("quizzes")
                self.log.info(
                    f"🟢 <c>{self.mcf_api.account_name}</c> | Quiz <c>{quiz.title}</c> claimed, reward: <y>{zsutils.rnd(quiz.reward)}</y>."
                )

            return is_success
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False
