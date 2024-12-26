import re, urllib.parse, json, time, random
from logging import Logger
from .HttpRequest import HttpRequest
from .MCFAPI import MCFAPI
from utilities import utilities as utils, zsutils


class Requests:
    def __init__(self, httpRequest: HttpRequest, mcf_api: MCFAPI):
        self.log: Logger = mcf_api.log
        self.http: HttpRequest = httpRequest
        self.mcf_api: MCFAPI = mcf_api
        self.authorized = False

    def get_main_page(self):
        try:
            resp = self.http.get(
                url=f"/{self.mcf_api.start_param}",
                domain="app",
                auth_header=False,
                send_option_request=False,
                only_json_response=False,
            )

            if resp is None:
                raise Exception("Failed to get the main page.")

            return True
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return False

    def get_request(self, url):
        try:
            api_time = zsutils.get_api_time()
            api_hash = zsutils.get_api_hash(api_time, "{}")
            api_key = self.mcf_api.API_KEY if self.authorized else "empty"
            headers = {
                "Api-Hash": api_hash,
                "Api-Key": api_key,
                "Api-Time": f"{api_time}",
            }
            resp = self.http.get(
                url=url,
                domain="api",
                auth_header=False,
                headers=headers,
                display_errors=True,
            )

            if resp is None:
                raise Exception(f"Failed to send GET request to {url}.")

            time.sleep(random.randint(1, 3))

            return resp
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return None

    def post_request(self, url, payload=None):
        try:
            payload = {"data": payload}
            api_time = zsutils.get_api_time()
            api_hash = zsutils.get_api_hash(api_time, payload)
            api_key = self.mcf_api.API_KEY if self.authorized else "empty"
            headers = {
                "Api-Hash": api_hash,
                "Api-Key": api_key,
                "Api-Time": f"{api_time}",
            }

            resp = self.http.post(
                url=url,
                domain="api",
                data=json.dumps(payload),
                auth_header=False,
                headers=headers,
                display_errors=True,
            )

            if resp is None:
                raise Exception(f"Failed to send POST request to {url}.")

            time.sleep(random.randint(1, 3))

            return resp
        except Exception as e:
            msg = str(e) if str(e) else "Unknown error."
            self.log.error(f"🔴 <c>{self.mcf_api.account_name}</c> | <r>{msg}</r>")
            return None
