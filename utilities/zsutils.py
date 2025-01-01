# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


from datetime import datetime
from pathlib import Path
from datetime import datetime, timezone
import sys
import urllib.parse
import json
import time
import hashlib
from hashlib import md5

MODULE_DIR = Path(__file__).resolve().parents[1]
MASTER_CRYPTO_FARM_BOT_DIR = Path(__file__).resolve().parents[3]
sys.path.append(str(MASTER_CRYPTO_FARM_BOT_DIR))


def get_time(time: str):
    if time == "":
        return None
    utc_time = datetime.strptime(time, "%Y-%m-%d %H:%M:%S").replace(tzinfo=timezone.utc)
    local_time = utc_time.astimezone()
    timestamp = int(utc_time.timestamp())
    return {
        "utc": utc_time,
        "local": local_time,
        "timestamp": timestamp,
    }


def wad_to_json(input_string):
    parsed_data = urllib.parse.parse_qs(input_string)

    result = {}
    for key, value in parsed_data.items():
        decoded_value = value[0]
        if key == "user":
            result[key] = json.loads(urllib.parse.unquote(decoded_value))
            continue
        result[key] = urllib.parse.unquote(decoded_value)

    return result


def get_api_time():
    return int(time.time())


def get_api_hash(timestamp, payload):
    payload = json.dumps(payload)
    encoded = urllib.parse.quote(f"{timestamp}_{payload}")
    hash = md5(encoded.encode("utf-8")).hexdigest()
    return hash


def gen_md5(data: str):
    md5 = hashlib.md5()

    md5.update(data.encode("utf-8"))

    digest = md5.digest()

    return digest.hex()


def rnd(num):
    num = int(num)
    if num < 1000:
        return str(num)
    elif num < 1000000:
        return str(round(num / 1000, 2)) + "k"
    elif num < 1000000000:
        return str(round(num / 1000000, 2)) + "m"
    elif num < 1000000000000:
        return str(round(num / 1000000000, 2)) + "b"
    else:
        return str(round(num / 1000000000000, 2)) + "t"
