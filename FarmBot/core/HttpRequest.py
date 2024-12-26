# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot

import random
import string
import time
import requests
import datetime
from urllib.parse import urlparse
from logging import Logger
from .MCFAPI import MCFAPI


class HttpRequest:
    def __init__(self, mcf_api: MCFAPI):
        self.log: Logger = mcf_api.log
        self.mcf_api: MCFAPI = mcf_api
        self.game_url = {
            "api": "https://api.zoo.team",
            "app": "https://game.zoo.team",
        }
        self.auth_token = None

        if not self.mcf_api.user_agent or self.mcf_api.user_agent == "":
            self.mcf_api.user_agent = "Mozilla/5.0 (Linux; Android 9; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.81 Mobile Safari/537.36 Telegram-Android/11.5.3 (Oneplus NE2211; Android 9; SDK 28; AVERAGE)"

        if "windows" in self.mcf_api.user_agent.lower():
            self.log.warning(
                "🟡 <y>Windows User Agent detected, For safety please use mobile user-agent</y>"
            )

    def get(
        self,
        url,
        domain="api",
        headers=None,
        send_option_request=True,
        valid_response_code=[200],
        valid_option_response_code=[204],
        auth_header=True,
        return_headers=False,
        return_session=False,
        session=None,
        display_errors=True,
        only_json_response=True,
        retries=5,
    ):
        try:
            url = self._fix_url(url, domain)
            default_headers = self._get_default_headers(headers)

            if "app" in domain:
                default_headers["Accept"] = (
                    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
                )
                default_headers["Sec-Fetch-Dest"] = "document"
                default_headers["Sec-Fetch-Mode"] = "navigate"
                default_headers["Sec-Fetch-Site"] = "same-origin"
                default_headers["Sec-Fetch-User"] = "?1"
                default_headers["Upgrade-Insecure-Requests"] = "1"

                del default_headers["Origin"]
                del default_headers["Referer"]
                if "Api-Hash" in default_headers:
                    del default_headers["Api-Hash"]
                if "Api-Key" in default_headers:
                    del default_headers["Api-Key"]
                if "Api-Time" in default_headers:
                    del default_headers["Api-Time"]

            if headers is None:
                headers = {}

            if auth_header:
                default_headers["Authorization"] = f"Bearer {self.auth_token}"

            if headers:
                for key, value in headers.items():
                    default_headers[key] = value

            if send_option_request:
                self.options(
                    url=url,
                    method="GET",
                    headers=headers,
                    valid_response_code=valid_option_response_code,
                    display_errors=display_errors,
                )

            if session is None:
                session = requests.Session()

            response = session.get(
                url=url,
                headers=default_headers,
                proxies=self._get_proxy(),
                timeout=60,
            )

            if response.status_code not in valid_response_code:
                if display_errors:
                    self.log.error(
                        f"🔴 <red> GET Request Error: <y>{url}</y> Response code: {response.status_code}</red>"
                    )
                return (None, None) if return_headers else None

            if (
                "application/json" not in response.headers.get("Content-Type", "")
                and only_json_response is False
            ):
                return (
                    (response.text, response.headers)
                    if return_headers
                    else response.text
                )
            elif return_session is True:
                return session

            return (
                (response.json(), response.headers)
                if return_headers
                else response.json()
            )
        except Exception as e:
            if retries > 0:
                self.log.info(f"🟡 <y> Unable to send request, retrying...</y>")
                time.sleep(0.5)
                return self.get(
                    url=url,
                    domain=domain,
                    headers=headers,
                    send_option_request=send_option_request,
                    valid_response_code=valid_response_code,
                    valid_option_response_code=valid_option_response_code,
                    auth_header=auth_header,
                    return_headers=return_headers,
                    only_json_response=only_json_response,
                    retries=retries - 1,
                )
            if display_errors:
                self.log.error(f"🔴 <red> GET Request Error: <y>{url}</y> {e}</red>")
            return (None, None) if return_headers else None

    def put(
        self,
        url,
        domain="api",
        data=None,
        headers=None,
        send_option_request=True,
        valid_response_code=[204],
        valid_option_response_code=[204],
        auth_header=True,
        return_headers=False,
        display_errors=True,
        only_json_response=True,
        retries=3,
    ):
        try:
            url = self._fix_url(url, domain)
            default_headers = self._get_default_headers()

            if headers is None:
                headers = {}

            if auth_header:
                headers["Authorization"] = f"Bearer {self.auth_token}"

            if headers:
                for key, value in headers.items():
                    default_headers[key] = value

            if send_option_request:
                self.options(
                    url=url,
                    method="PUT",
                    headers=headers,
                    valid_response_code=valid_option_response_code,
                    display_errors=display_errors,
                )

            response = requests.put(
                url=url,
                headers=default_headers,
                data=data,
                proxies=self._get_proxy(),
                timeout=60,
            )

            if valid_response_code not in response.status_code:
                if display_errors:
                    self.log.error(
                        f"🔴 <red> PUT Request Error: <y>{url}</y> Response code: {response.status_code}</red>"
                    )
                return (None, None) if return_headers else None

            if (
                "application/json" not in response.headers.get("Content-Type", "")
                and only_json_response is False
            ):
                return (
                    (response.text, response.headers)
                    if return_headers
                    else response.text
                )

            return (
                (response.json(), response.headers)
                if return_headers
                else response.json()
            )
        except Exception as e:
            if retries > 0:
                self.log.info(f"🟡 <y> Unable to send request, retrying...</y>")
                time.sleep(0.5)
                return self.put(
                    url=url,
                    domain=domain,
                    data=data,
                    headers=headers,
                    send_option_request=send_option_request,
                    valid_response_code=valid_response_code,
                    valid_option_response_code=valid_option_response_code,
                    auth_header=auth_header,
                    return_headers=return_headers,
                    display_errors=display_errors,
                    only_json_response=only_json_response,
                    retries=retries - 1,
                )
            if display_errors:
                self.log.error(f"🔴 <red> PUT Request Error: <y>{url}</y> {e}</red>")
            return (None, None) if return_headers else None

    def post(
        self,
        url,
        domain="api",
        use_boundary=True,
        data=None,
        headers=None,
        send_option_request=True,
        valid_response_code=[200],
        valid_option_response_code=[204],
        auth_header=True,
        return_headers=False,
        only_json_response=True,
        display_errors=False,
        retries=5,
    ):
        try:
            url = self._fix_url(url, domain)
            default_headers = self._get_default_headers()

            if headers is None:
                headers = {}

            if auth_header:
                default_headers["Authorization"] = (
                    f'Bearer {self.auth_token if self.auth_token else "false"}'
                )

            if headers:
                for key, value in headers.items():
                    default_headers[key] = value

            if send_option_request:
                self.options(
                    url=url,
                    method="POST",
                    headers=headers,
                    valid_response_code=valid_option_response_code,
                    display_errors=display_errors,
                )
            response = None
            if data:
                default_headers["Content-Type"] = "application/json"
                response = requests.post(
                    url=url,
                    headers=default_headers,
                    data=data,
                    proxies=self._get_proxy(),
                    timeout=60,
                )
            else:
                response = requests.post(
                    url=url,
                    headers=default_headers,
                    proxies=self._get_proxy(),
                    timeout=60,
                )

            if response.status_code not in valid_response_code:
                if display_errors:
                    self.log.error(
                        f"🔴 <red> POST Request Error: <y>{url}</y> Response code: {response.status_code}</red>"
                    )
                return (None, None) if return_headers else None

            if (
                "application/json" not in response.headers.get("Content-Type", "")
                and only_json_response is False
            ):
                return (
                    (response.text, response.headers)
                    if return_headers
                    else response.text
                )

            return (
                (response.json(), response.headers)
                if return_headers
                else response.json()
            )
        except Exception as e:
            if retries > 0:
                self.log.info(f"🟡 <y> Unable to send request, retrying...</y>")
                time.sleep(0.5)
                return self.post(
                    url=url,
                    domain=domain,
                    use_boundary=use_boundary,
                    data=data,
                    headers=headers,
                    send_option_request=send_option_request,
                    valid_response_code=valid_response_code,
                    valid_option_response_code=valid_option_response_code,
                    auth_header=auth_header,
                    return_headers=return_headers,
                    only_json_response=only_json_response,
                    display_errors=display_errors,
                    retries=retries - 1,
                )

            if display_errors:
                self.log.error(f"🔴 <red> POST Request Error: <y>{url}</y> {e}</red>")
            return (None, None) if return_headers else None

    def options(
        self,
        url,
        domain=None,
        method="POST",
        headers=None,
        valid_response_code=[204],
        display_errors=True,
        retries=3,
    ):
        try:
            url = self._fix_url(url, domain)
            default_headers = self._get_option_headers(headers, method)

            if headers is None:
                headers = {}

            if headers:
                for key, value in headers.items():
                    if key in ["Api-Hash", "Api-Key", "Api-Time"]:
                        del default_headers[key]
                        continue
                    default_headers[key] = value

            response = requests.options(
                url=url,
                headers=default_headers,
                proxies=self._get_proxy(),
                timeout=60,
            )

            if response.status_code not in valid_response_code:
                if display_errors:
                    self.log.error(
                        f"🔴 <red> OPTIONS Request Error: <y>{url}</y> Response code: {response.status_code}</red>"
                    )
                return None

            return True
        except Exception as e:
            if retries > 0:
                self.log.info(f"🟡 <y> Unable to send option request, retrying...</y>")
                time.sleep(0.5)
                return self.options(
                    url=url,
                    domain=domain,
                    method=method,
                    headers=headers,
                    valid_response_code=valid_response_code,
                    display_errors=display_errors,
                    retries=retries - 1,
                )
            if display_errors:
                self.log.error(
                    f"🔴 <red> OPTIONS Request Error: <y>{url}</y> {e}</red>"
                )
            return None

    def _get_proxy(self):
        if self.mcf_api.proxy:
            return {"http": self.mcf_api.proxy, "https": self.mcf_api.proxy}

        return None

    def _fix_url(self, url, domain=None):
        if url.startswith("http") or domain is None:
            return url

        game_url = self.game_url.get(domain)
        if not game_url:
            return url

        if url.startswith("/"):
            return f"{game_url}{url}"

        return f"{game_url}/{url}"

    def _get_default_headers(self, headers: dict = None):
        default_headers = self._get_base_headers()

        default_headers["Is-Beta-Server"] = "null"
        if "android" in self.mcf_api.user_agent.lower():
            default_headers["sec-ch-ua-platform"] = '"Android"'
            default_headers["sec-ch-ua-mobile"] = "?1"
            default_headers["sec-ch-ua"] = (
                '"Android WebView";v="131", "Chromium";v="131", "Not_A Brand";v="24"'
            )

        if headers:
            for key, value in headers.items():
                default_headers[key] = value

        return default_headers

    def _get_option_headers(self, headers: dict = None, method="GET"):
        default_headers = self._get_base_headers()

        default_headers["Access-Control-Request-Method"] = method.upper()
        default_headers["Access-Control-Request-Headers"] = (
            "api-hash,api-key,api-time,content-type,is-beta-server"
        )

        if headers:
            for key, value in headers.items():
                default_headers[key] = value

        return default_headers

    def _get_base_headers(self):
        base_headers = {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
            "Connection": None,
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Priority": "u=0, i",
            "Origin": "https://game.zoo.team",
            "Referer": "https://game.zoo.team/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
            "User-agent": self.mcf_api.user_agent,
            "X-Requested-With": "org.telegram.messenger",
        }

        return base_headers
