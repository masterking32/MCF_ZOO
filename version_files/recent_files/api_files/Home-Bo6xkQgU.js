import {
  _ as x,
  o as l,
  c as a,
  a as s,
  t as i,
  b as h,
  w as p,
  d as u,
  e as C,
  F as m,
  f as k,
  g as E,
  r as y,
  T as P,
  E as _,
  u as N,
  n as B,
  h as T,
  i as I,
  v as H
} from "./index-BqTnrUKT.js";
import z from "./Alliance-CwynDYOC.js";
import U from "./Boost-luu4_0DB.js";
const K = {
    name: "Feed-g",
    components: {},
    async created() {},
    data() {
      return {
        activeTab: 0,
        isBuyLoading: !1
      }
    },
    computed: {
      extDbBoost() {
        return this._groupBy(this.dbBoost, "days")
      },
      instantItem() {
        return this.dbAutoFeed.filter(e => e.key === "instant")[0]
      }
    },
    watch: {},
    methods: {
      calcPrice(e) {
        return e.fixPrice && e.fixPrice > 0 ? e.fixPrice : Math.ceil(e.priceInTph * this.uHero.tph)
      },
      async buyAutoFeed(e) {
        const t = this.calcPrice(e);
        if (t > this.uHero.coins) {
          this.stores.state.setLackOfCoin(t - this.uHero.coins), this.stores.state.setIsShowTopUp(!0);
          return
        }
        try {
          this.isBuyLoading = !0;
          const d = await this.apiCall("autoFeedBuy", e.key);
          this.stores.user.setFeed(d.feed), this.stores.user.setHero(d.hero)
        } catch (d) {
          this._catchError(d)
        }
        this.isBuyLoading = !1
      }
    }
  },
  O = {
    class: "container",
    style: {
      "padding-bottom": "90px"
    }
  },
  W = {
    class: "aniH1",
    style: {
      "line-height": "normal"
    }
  },
  Y = {
    key: 0,
    class: "panelRed center",
    style: {
      "margin-bottom": "20px"
    }
  },
  Q = {
    style: {
      "font-weight": "800",
      "font-size": "1.4em"
    }
  },
  G = {
    class: "white"
  },
  X = {
    key: 1,
    class: "panelBrown center",
    style: {
      "margin-bottom": "20px"
    }
  },
  R = {
    style: {
      "font-weight": "800",
      "font-size": "1.4em"
    }
  },
  j = {
    class: "white"
  },
  J = {
    class: "list",
    style: {
      "margin-top": "5px"
    }
  },
  Z = ["innerHTML"],
  q = {
    class: "zTextShadow2white noMargin"
  },
  V = {
    style: {
      "font-size": "0.9em"
    }
  },
  $ = ["innerHTML"],
  ee = ["innerHTML"],
  te = {
    class: "list",
    style: {
      "margin-top": "5px"
    }
  },
  se = {
    key: 3
  };

function oe(e, t, d, c, r, n) {
  var f, S;
  const g = y("van-button"),
    v = y("van-badge"),
    A = y("van-cell"),
    L = y("van-cell-group");
  return l(), a("div", O, [s("h1", W, i(e.t("Feed the animals to keep token {TOKEN_NAME} mining going!", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), (f = e.uFeed) != null && f.isNeedFeed ? (l(), a("div", Y, [s("div", Q, i(e.t("Token mining has stopped. ")), 1), s("div", G, i(e.t("The animals need to be fed.")), 1), h(g, {
    type: "warning",
    size: "large",
    onClick: t[0] || (t[0] = w => n.buyAutoFeed(n.instantItem)),
    loading: r.isBuyLoading,
    style: {
      "margin-top": "10px"
    }
  }, {
    default: p(() => [u(i(e.t("Feed the animals")) + " ", 1), t[1] || (t[1] = s("span", {
      class: "coin25"
    }, null, -1)), u(" " + i(e._number(n.calcPrice(n.instantItem))), 1)]),
    _: 1
  }, 8, ["loading"])])) : (S = e.uFeed) != null && S.autoFeedEndDateStr ? (l(), a("div", X, [s("div", R, i(e.t("Automatic animal feeding is active")), 1), s("div", j, i(e.t("Time Remaining: {TIME}", {
    TIME: e.uFeed.autoFeedEndDateStr
  })), 1)])) : C("", !0), s("ul", J, [s("li", null, i(e.t("To keep your animals mining {TOKEN_NAME} tokens, you need to feed them regularly.", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), s("li", null, i(e.t("Feeding time occurs eight times at random intervals throughout the day.")), 1), s("li", {
    innerHTML: e.t("The cost of one feeding depends on the Tokens per Hour and is currently <b>{count} {IMG_COIN} {COIN_NAME}</b>.", {
      count: e._number(n.calcPrice(n.instantItem)),
      COIN_NAME: e.COIN_NAME,
      IMG_COIN: e.IMG_COIN
    })
  }, null, 8, Z), s("li", null, i(e.t("{TOKEN_NAME} token mining will resume after you feed your animals.", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), s("li", null, i(e.t("Check on your zoo often, and don't let your animals go hungry!")), 1)]), t[3] || (t[3] = s("br", null, null, -1)), t[4] || (t[4] = s("br", null, null, -1)), s("h2", q, i(e.t("Buy automatic animal feeding")), 1), e.uHero.tph > 300 ? (l(), a(m, {
    key: 2
  }, [s("div", V, i(e.t("You can buy automatic feeding, and while it’s active, token mining will not stop.")), 1), h(L, {
    inset: "",
    class: "noMargin",
    style: {
      "margin-top": "5px"
    }
  }, {
    default: p(() => [(l(!0), a(m, null, k(e.dbAutoFeed.filter(w => w.time > 1), w => (l(), E(A, {
      key: w.key,
      center: ""
    }, {
      title: p(() => [Number(w.time) === 86400 ? (l(), a("div", {
        key: 0,
        innerHTML: e.t("1 day")
      }, null, 8, $)) : (l(), a("div", {
        key: 1,
        innerHTML: e.t("{days} days", {
          days: Math.round(w.time / (24 * 3600))
        })
      }, null, 8, ee))]),
      "right-icon": p(() => [h(g, {
        type: "success",
        size: "small",
        onClick: F => n.buyAutoFeed(w),
        loading: r.isBuyLoading
      }, {
        default: p(() => [h(v, {
          dot: !e.uFeed.autoFeedEndDateStr
        }, {
          default: p(() => [t[2] || (t[2] = s("span", {
            class: "coin25"
          }, null, -1)), u(" " + i(e._number(n.calcPrice(w))), 1)]),
          _: 2
        }, 1032, ["dot"])]),
        _: 2
      }, 1032, ["onClick", "loading"])]),
      _: 2
    }, 1024))), 128))]),
    _: 1
  }), s("ul", te, [s("li", null, i(e.t("Automatic feeding works one at a time — purchases do not stack.")), 1), s("li", null, i(e.t("If you buy a second one, the one that lasts longer will remain active.")), 1), s("li", null, i(e.t("It starts working immediately after purchase.")), 1), s("li", null, i(e.t("The amount of food needed for feeding depends on your Tokens per hour")), 1), s("li", null, i(e.t("When you buy automatic feeding, no additional food will be deducted.")), 1), s("li", null, i(e.t("At a high Tokens per Hours, automation will be cheaper than manual feeding over the course of a day.")), 1)])], 64)) : (l(), a("p", se, i(e.t("The option for automatic feeding will become available when your Tokens per Hour exceeds {count}.", {
    count: 300
  })), 1))])
}
const ie = x(K, [
    ["render", oe],
    ["__scopeId", "data-v-8fd75eaa"]
  ]),
  ne = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABECAYAAAAx+DPIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA3+SURBVHgB7VsLcJXFFT7737zJ4wYSCI+QiyBKAHm0gjpJIdoZZXiIU0sfTjVYRsQHIVqh1LGGSmuLIlFkqHYs8TGOtuMDKqW1Uwh0eEmUoIGiVLgkIBBIchPMg0vyb7+z9/7Jn/v8bxIoHe83s7n77797/j1nd8+ec3ZDFEUUUUQRRRRRRBHFNxMi1MstDodD1/V7JNFcPE40vXKSEE6ScqNN096f4XQ66TLjPYfDHqfrRT59c6FflehXpdS0jbOdzvJwdAIKwMv4kyBeSBYAImWapq24HIIwMb4Ej/Yw1Z1CyhUza2rKglXwE8Cm7Oy5mhAbzMTTBwyggVlZlJySQvEJCRCwpHa3m86dPUu1Z85Q8/nz6mO6lMVzamrep0uEzQ7HRKnr7yHrEJpGg9CnjIEDKalfP4qJiSEMGrkvXKAzp0/TudpautDW5mFSiPfBU3GgAeomgM3Dh/Ool3gbKaZH5+ZSamoqhUI16B45fJjaWluZYMnM6uoV5vc8araOjunoxDTQdUCAPGXt1H0EXcQjxktL1zdqNlu5ucNgvgjMl3K/Bg8dSmPGj6cEDEYw8CAd+/JLOnrkiCEIJ4R2x0ynszKgAIwPcJ6lOWbcOBo+YoQvXabUiBSPlGZu3/z117Rv9271y0LQNW27puvTpBDT0ZvpvoSYEeKEjnJnA4GXFui8quiAJrcZN3EiDXc4fImdB5Fm5HikksyvWlpaqHLfPmqor+dHF4RQYBaCYoDXfIeu70fWDsnTlJtuogEZGWY6ZfjI62S37xAlJe1cIB96aAhp2hyU/wKP2Vx2Ectix9ataiaYkZKWRv2xjOzp6ZSUlET9kpMpLj7eIwRud/EitaKjrWjX5HJR3blz1IjfdpSbmKQpN95ImYMGGSUdSOuRXqPS0grQUlKUDz+cSzbbD5FdAKEMNuhX7NlD9aALOKG4C4zZpXqAqb/BUHiTpkyhIZhiXhyj9va7xLp1uykI5JIldnzodWRn8XNTYyPtLC+nNLudhmRnK1rMbKTo6OhQgqg5fpzOnDpFY8aOpRGjRhmvq7FM5oi1aw8E7deCBYMoOflJ9G2RIQTuF89QCLN81vHjBUoA3tE/xg/DcnJowuTJHgpCnMDffFFa6qQwkA8+OIBiY3fhY6P5mWdAQmIi9RXasIYTWIieZdMO6eSD+T3h2smSEo1crhfQrwf5mQW6d+dOwlInbJMFvE1q7brO2wlms0YjR482t/+JFeYZmCF16NTPjOe+ZF7RY2XnXS4826wwr/pVUqJTXNxytD3Kz7ys+/fv73kn5ZP8q4HsNM7wlE3G2vTi72C+nCwC664QEnyVLg/ulkVFa+TSpSlWKotVq85DAE8Yz1nG8oZi/ovDMV3DSwc/272SUdC0MrIAXv/ozFuoz3ZDOl0e2IiNoAsX9stHH73WUouGhnfJs4PRoC4lSkLXJ2qQhNqLU9PSuhq0tX0UjiZGfSQUESvHH9D/BiOhoHdjEBaEqyjKypj5TzifCKOJl7sqJ5rAM4ANkM5ChaSkplAE5SOPTECDPWhrbQQuHXgH+j1m4WILdV1GxmazdRYy18oo6LbnXryYFYwKmB8Nhfc3ZDPoygBzs0YuXnx/mHpqjSszvl2ZMoSt/4CGgu380NjY2FVViJsDUcC0HwbmtyKbRVcWeCaXyuLi2YFeymXL0vD+25xnO8WwPNmTxczXlPPSUFdHepdJugjMdnMA1J5qs/HID6UrE/HQSW/IRYuu8nvT0lIErmM4exZOkgKMIbYGNWUX4+F8UxPVGS+JrkXZcsW0gYaGp0BkLF3ZSMW+/4o0+ShYsjdg4JZynr3FE7AsVbkQymFTFXk/xJawjd3d/FtugXHQ2f4NtHoW3lEzfg/hOZb+P3Af0iakh5CKkfpx4ZdffEGHDx5UThY81vlc1snpBzk529g4GDJsGE26/nozsYtqp5AykyKBx0Nbi93iMwjvVyi5OoLWdWi7Cm1r8ctGzFUUGeCSCnYzO40lnvr7du1ixeeyCTGpmzPEUD6BlPvZLmA3mN1hdot7iArQmS9eeKGKH5TB0t7+b8uthVgMS3Stasu6SNOWIftz8uxaEeNkTQ19+sknagnAHZ6PZV9mvOskqCTiXRfVx47Rzm3b6DS8sAjRAhpPUXr6VIN5hQsI00QCKTu3JNj9TeL55x9HtgDlX1AEcDU00H7EAiorKhTzGP3nzcwr+r6NNufkvIdtggONFBsXR7fceivZrM2Ez9HBu8D4x+ZC5S4TvYN3N5N1nET9AtA64kdLyt8gez+FCegyPkKA5izCYwoIlsIFnuRbx48ztxDzYznKKqVjQGamVeYR0WjNEy+/rCIO8r77MigxMRdT93sQ/Y9QFJn+4K1W06rA8Jtov4ni46to1ar/CI/V+gDKB6B/88IRyRo82CMAhNmw7u8IVCegFI1ZMBbhJ4d/WCwYPkBiAUxA4kbhIraRgM1Ung3s1p4CQ/MggLRwjZqbm6n8ww85u3FWdfXcQHX8hpcDmAgYqMqZmREN3Cy6dODtN9ebVBzRCvrB8eHYBAI004LV8dOqMd5DhpjYWBW7ixhCuJF4JujUF5CyAfQOEivYHiDd4+bb2dYJ9N5/W9F1VTElxVK8wYx6dLQYllgGtrBMhMg4ILmalM/RY/wWIRymN47c7mHQC89QhEj2hvTZ9w/03k8AUAoO/o0PEXMPgM9hNEzGaB3Ffq+MFvHss7XYvjhM9hL1DH9G++VUX38vlN5qKMJ0sWYNm7RrIiHCy0D1x6Ob/OA/A4TI4R/LcT0OUko5G4zfjqeNmEE74ZV1hZfc7ohHTcFmexsu7tWg/wfQf4QMQTY2chi+1iqZOGzlDNj+1maAgXjroewt3v3asJ9hccjO9S/Wr2fNfYYihduNU5bmOvKGskBzEDs53ujOZqtkWJd52wfclYIKQGiWrc5P1V9dfxof+SO6uABr1uVTJ3IBpKZ2iFde4eOcJeobur5OdOkTyyaq6HLsHIHeB7VyOHYeBhWgzh1UpxUwWdlb/KkfnZdeiqVDh0ZRpGhu5hn1AfQAT31fPRKpcxQU/sMspXKYw5rvus72eSvqz4GSmhy03sGDLJQkihRCFAUqVsFYIe4kNrqk/DWF2WX0MAPpNwPYXeRJ4w4tALbMDqEDeehMLn53IDC5CjvBW2L1asMcjsWJRjHeP01dTLWrYzQhdhAfb/HWqWlJCLNleMNwt7MJ7umI/C5obsH7pfTcc1W0cGEMzGs20F7EO9YD6fjeO2jLR1w3Betohzf+Fwz+zlB2diE05oYU7J/fQXAkCNjDmIO0DB38E8T8trecxf0Vkps8ccOukZfyZXR4JQKujdDwk8FwFspqceC6Cyc4StGpCFRDw2PIPu3TtxbU5bifsTfz4efdSMfVqY+UQXea4/BsqypV3NcFc9jv7MJfB9hslWCIOETmxmmvsY34gE8XXsPHqzACt1GXouElNSxA/b9ip1goH3hgDAykKnQ4tdOcdblqELaajTV3AoJgrf87jDyr7qdM7ZNM3+CZtBx/V4LG40ghLcS6s2eNNpWB3vvpAG+MUGnxc0Zjf3BvrsXH70Td+RQOQryofmNibiDPGb4ZR0DnXryb0VmSmLguJD0ph6s7Sh6z/dFQVTkmoLogpTPQ+5jA9OWr4LCoBjES01F5zyGlZynYbG8hn4AZNgoMnEb6B5bAYWMJdKKtLZynlw46W8PUoXpEuvnegYKmbQ9UJ/A2yKFyXS/iUDknviPUK3h88XdgyvLNifUWWhSGrWGK9wUDB0ENYKqXB6oT0NpR18sQKudLCocPHaJeA5EimLW3W6paVDQV9Yupl+BLUrVGNAgmerAbbEHNPSNuztdK+KJRryHEa2DusW5nDb7fLCpaiB+e2qnUC/BtkE/37++iq2mlweqGjKsZoXLWwPkFBd1PkHuOz7zH6f/CkqjwGlEzsOS+j+9MoD7Ax3v30umvvlJ58xlAIIS9KWqEyvmWxtS8PHVXsA/QBGbfpZMnF9DQoXzbYzy+EflFogD47MABqj561PPgiQUWhLrAGTayapwacZ5tgqn5+WHvDYbAFjC6kvLy9op58zqMQllYmEBpaTOR/SXSddQDsMl7kJk38QqHbpLvvUBfhBUAY7PDUQjniKetci9zx4+n7JwcigASo/E4trxnYPiwkrsHZTd6v8/Gxh7lSfbvfwyW4EpiCzMCqLuAiP3zjmXA9wAkGGxkAW+6XJU/Tk/nc+XbWNJ8bY2txFS73drpkZT/pNLShbRpE19b47tE30Ia6E0OpDzohYUIrdsR8HgChhArm6nhyUo6dfKkWvPe67o87V1QejNmOZ2WruxamgEG1HKQcoPhsCQmJdGoa67xv7npD17zB9AuP1xF1NvuPYUOeQGDTXU+6DRtdcrc5fh/JJe2IxIAw3uvsATZe4wydpzGXHcdZWRkmAMQlwR80ZENnBPV1WS+YovcitnV1SUUIXrcW6UX+K6d4b6SRxAjRo6kgTiRiY/vE6WuoG6Nwi9xQruzf9ItWAODDaM+v6dX9Xs9XIEEwReuOB4/GEftfDmxJ1snxyP4cNaw6FgI3QDG2Viz8k8RodBn83WTwzHXBu1uHKyawSF2JQjMEN5CeTvlM0eOO/I07oDl1tLaSl9jXbfgOItvdvN1W79b5KzgWInCV+kt450kqY+h/jeAaLrGx2tCTDPPjB7BxDRiO5V3OJ0u6kNcWo1FHoHwcZvgpOsTpOdmKoeoHd1C1Z5bKC4o0UodcUlNykrff5qIIoooooiij/Fff7LySvy53LsAAAAASUVORK5CYII=",
  le = {
    name: "Home-g",
    components: {
      BoostG: U,
      AllianceG: z,
      FeedG: ie,
      TopBar: P
    },
    async created() {
      this.stores.state.setPageSettings()
    },
    mounted() {
      var e;
      _.on("openAllianceDetails", this.openAlliancePopup), _.on("openBoostDetails", this.openBoostPopup), _.on("openFeedDetails", this.openFeedDetails), setInterval((function() {
        if (this.uAnimals.length < 1) return;
        this.tick++;
        const t = this.uAnimals.length,
          d = this.uAnimals[Math.floor(Math.random() * t)];
        let c = 1,
          r = 1;
        switch (t) {
          case 1:
          case 2:
            c = 1, r = 5;
            break;
          case 3:
            c = 2, r = 3;
            break;
          case 4:
          case 5:
          case 6:
            c = 4, r = 2;
            break;
          default:
            c = 7, r = 1;
            break
        }
        this.tick % r === 0 && (this.animateAnimalKeys.push(d.key), this.animateAnimalKeys.length > c && this.animateAnimalKeys.shift())
      }).bind(this), 500), setInterval((function() {
        this.calcChests()
      }).bind(this), 5e3), this.isShowSpecialPromo = ((e = this.availableAndWillForBuySpecial) == null ? void 0 : e.length) > 0
    },
    beforeUnmount() {
      _.off("openAllianceDetails", this.openAlliancePopup), _.off("openBoostDetails", this.openBoostPopup), _.off("openFeedDetails", this.openFeedDetails)
    },
    data() {
      return {
        chests: [],
        isUpgradePopupShow: !1,
        isBuyPopupShow: !1,
        isBuyLoading: !1,
        isShowTopup: !1,
        isShowChest: !1,
        lackOfCoin: 0,
        tick: 0,
        isShowChangeLocation: !1,
        newLocation: null,
        isChangeLocationLoading: !1,
        isShowAlliance: !1,
        isShowBoost: !1,
        isShowFeed: !1,
        animateAnimalKeys: [],
        isClaimChestLoading: !1,
        activeChest: null,
        unboughtAnimals: [],
        isShowSpecialPromo: !1,
        map: {
          w: 768,
          h: 6820
        },
        points: [{
          position: 1,
          x: 316,
          y: 277
        }, {
          position: 2,
          x: 428,
          y: 410
        }, {
          position: 3,
          x: 260,
          y: 505
        }, {
          position: 4,
          x: 350,
          y: 640
        }, {
          position: 5,
          x: 465,
          y: 773
        }, {
          position: 6,
          x: 320,
          y: 850
        }, {
          position: 7,
          x: 620,
          y: 872
        }, {
          position: 8,
          x: 430,
          y: 980
        }, {
          position: 9,
          x: 243,
          y: 1085
        }, {
          position: 10,
          x: 187,
          y: 1255
        }, {
          position: 11,
          x: 356,
          y: 1355
        }, {
          position: 12,
          x: 450,
          y: 1565
        }, {
          position: 13,
          x: 248,
          y: 1633
        }, {
          position: 14,
          x: 625,
          y: 1684
        }, {
          position: 15,
          x: 358,
          y: 1840
        }, {
          position: 16,
          x: 185,
          y: 1955
        }, {
          position: 17,
          x: 556,
          y: 1933
        }, {
          position: 18,
          x: 395,
          y: 2070
        }, {
          position: 19,
          x: 225,
          y: 2180
        }, {
          position: 20,
          x: 670,
          y: 2120
        }, {
          position: 21,
          x: 487,
          y: 2270
        }, {
          position: 22,
          x: 287,
          y: 2450
        }, {
          position: 23,
          x: 660,
          y: 2395
        }, {
          position: 24,
          x: 450,
          y: 2665
        }, {
          position: 25,
          x: 236,
          y: 2746
        }, {
          position: 26,
          x: 638,
          y: 2740
        }, {
          position: 27,
          x: 438,
          y: 2860
        }, {
          position: 28,
          x: 325,
          y: 3356,
          isWinter: !0
        }, {
          position: 29,
          x: 608,
          y: 3405,
          isWinter: !0
        }, {
          position: 30,
          x: 240,
          y: 3582,
          isWinter: !0
        }, {
          position: 31,
          x: 620,
          y: 3630,
          isWinter: !0
        }, {
          position: 32,
          x: 387,
          y: 3745,
          isWinter: !0
        }, {
          position: 33,
          x: 190,
          y: 3886,
          isWinter: !0
        }, {
          position: 34,
          x: 600,
          y: 3823,
          isWinter: !0
        }, {
          position: 35,
          x: 147,
          y: 2540
        }, {
          position: 36,
          x: 546,
          y: 2510
        }, {
          position: 37,
          x: 120,
          y: 2870
        }, {
          position: 38,
          x: 650,
          y: 2920
        }, {
          position: 52,
          x: 435,
          y: 4e3,
          isWinter: !0
        }, {
          position: 39,
          x: 150,
          y: 4248
        }, {
          position: 40,
          x: 511,
          y: 4241
        }, {
          position: 41,
          x: 324,
          y: 4340
        }, {
          position: 42,
          x: 147,
          y: 4444
        }, {
          position: 43,
          x: 518,
          y: 4445
        }, {
          position: 44,
          x: 333,
          y: 4553
        }, {
          position: 45,
          x: 180,
          y: 4670
        }, {
          position: 46,
          x: 604,
          y: 4666
        }, {
          position: 47,
          x: 330,
          y: 4787
        }, {
          position: 48,
          x: 260,
          y: 4970
        }, {
          position: 49,
          x: 600,
          y: 4908
        }, {
          position: 50,
          x: 132,
          y: 5260
        }, {
          position: 51,
          x: 536,
          y: 5160
        }, {
          position: 53,
          x: 410,
          y: 5050
        }, {
          position: 54,
          x: 669,
          y: 5310
        }, {
          position: 55,
          x: 215,
          y: 5410
        }, {
          position: 56,
          x: 526,
          y: 5410
        }, {
          position: 57,
          x: 326,
          y: 5530
        }, {
          position: 58,
          x: 180,
          y: 5610
        }, {
          position: 59,
          x: 647,
          y: 5535
        }, {
          position: 60,
          x: 480,
          y: 5635
        }, {
          position: 61,
          x: 288,
          y: 5740
        }, {
          position: 62,
          x: 110,
          y: 5846
        }, {
          position: 63,
          x: 454,
          y: 5843
        }, {
          position: 64,
          x: 273,
          y: 5940
        }, {
          position: 65,
          x: 623,
          y: 5942
        }, {
          position: 66,
          x: 432,
          y: 6040
        }, {
          position: 67,
          x: 253,
          y: 6145
        }, {
          position: 68,
          x: 640,
          y: 6152
        }, {
          position: 69,
          x: 445,
          y: 6268
        }, {
          position: 70,
          x: 185,
          y: 6318
        }, {
          position: 71,
          x: 646,
          y: 6378
        }, {
          position: 72,
          x: 365,
          y: 6420
        }, {
          position: 73,
          x: 174,
          y: 6540
        }, {
          position: 74,
          x: 561,
          y: 6580
        }],
        openPoint: null
      }
    },
    computed: {
      priceChangeLocation() {
        var e;
        return "level" in ((e = this.openAnimal) == null ? void 0 : e.currentLevelData) ? this.openAnimal.currentLevelData.level * this.openAnimal.currentLevelData.level * (gameConfig["animal.min_change_position_price"] ?? 50) : null
      },
      k() {
        let e = N();
        return (e.width.value > 768 ? 768 : e.width.value) / this.map.w
      },
      animalByPosition() {
        return this._arrayByKey(this.uAnimals, "position")
      },
      extPoints() {
        let e = this._cloneObject(this.points);
        return e.map(t => {
          if (t.x = Math.round(t.x * this.k), t.y = Math.round(t.y * this.k), t.position in this.animalByPosition) {
            const d = this.animalByPosition[t.position];
            if (d.key in this.dbAnimalsByKey) {
              t.animalKey = d.key, t.animalLevel = d.level, t.isAnimalCanBuy = !1;
              const c = this.dbAnimalsByKey[d.key].levels.find(n => n.level === d.level),
                r = this.dbAnimalsByKey[d.key].levels.find(n => n.level === d.level + 1);
              r && r.price <= this.uHero.coins && (t.isAnimalCanBuy = !0), t.animalProfit = c.profit
            }
          }
          return t
        }), e
      },
      freePoints() {
        return this.extPoints.filter(e => !e.animalKey).map(e => e.position)
      },
      availableAndWillForBuySpecial() {
        return this.unboughtAnimals.filter(e => e.isSpecial && e.timeToEnd > 0)
      },
      availableForBuySpecial() {
        return this.unboughtAnimals.filter(e => e.isSpecial && e.timeToStart < 0 && e.timeToEnd > 0)
      },
      notAvailableForBuySpecial() {
        return this.unboughtAnimals.filter(e => e.isSpecial && !(e.timeToStart < 0 && e.timeToEnd > 0)).sort((e, t) => new Date(t.dateStart) - new Date(e.dateStart))
      },
      availableForBuyAnimalList() {
        return this.unboughtAnimals.filter(e => !e.isSpecial)
      },
      openAnimal() {
        if (!("animalKey" in this.openPoint)) return null;
        let e = {};
        e = this.dbAnimalsByKey[this.openPoint.animalKey];
        const t = this.uAnimalsByKey[this.openPoint.animalKey].level,
          d = t + 1,
          c = this._arrayByKey(e.levels, "level"),
          r = c[t],
          n = !(d in c);
        let g = null;
        return n || (g = c[d]), e.isMaxLevel = n, e.currentLevelData = r, e.nextLevelData = g, e
      }
    },
    watch: {
      isUpgradePopupShow(e) {
        this._vibratePopup(e)
      },
      isBuyPopupShow(e) {
        this._vibratePopup(e)
      },
      isShowAlliance(e) {
        this._vibratePopup(e)
      },
      isShowBoost(e) {
        this._vibratePopup(e)
      },
      isShowChest(e) {
        this._vibratePopup(e)
      },
      isShowFeed(e) {
        this._vibratePopup(e)
      },
      $route() {
        this.$route.path === "/" && (this.isUpgradePopupShow = !1, this.isBuyPopupShow = !1, this.isShowAlliance = !1, this.isShowBoost = !1, this.isShowChest = !1, this.isShowFeed = !1)
      },
      "uFeed.isNeedFeed"(e) {
        e && (this.isShowFeed = !0)
      },
      uAnimals: {
        handler() {
          this.calcUnboughtAnimals()
        },
        immediate: !0
      }
    },
    methods: {
      calcUnboughtAnimals() {
        let e = this.dbAnimals.filter(t => !this.uAnimals.some(d => d.key === t.key));
        e = e.map(t => (t.level1data = t.levels.find(d => d.level === 1), t.isSpecial = t.dateStart && t.dateEnd, t.isSpecial && (t.timeToStart = new Date(t.dateStart.replace(" ", "T") + "Z") - new Date + 5e3, t.timeToEnd = new Date(t.dateEnd.replace(" ", "T") + "Z") - new Date - 5e3), t)), this.unboughtAnimals = e
      },
      openFeedDetails() {
        this.isShowFeed = !0
      },
      openAlliancePopup() {
        this.isShowAlliance = !0
      },
      openBoostPopup() {
        this.isShowBoost = !0
      },
      calcChests() {
        this.stores.state.isAfterDataLoaded || (this.chests = []);
        const e = [{
          x: 590,
          y: 290
        }, {
          x: 185,
          y: 381
        }, {
          x: 180,
          y: 745
        }, {
          x: 160,
          y: 940
        }, {
          x: 656,
          y: 1090
        }, {
          x: 175,
          y: 1475
        }, {
          x: 610,
          y: 1336
        }, {
          x: 650,
          y: 1486
        }];
        let t = [];
        this.dbQuests.filter(d => d.key.includes("chest_")).forEach(d => {
          const c = new Date(d.actionTo.replace(" ", "T") + "Z"),
            r = new Date;
          if (c < r) {
            let n = e[Number(d.checkData) - 1] || null;
            if (n && !this.uQuests.find(g => g.key === d.key)) {
              d.x = Math.round(n.x * this.k), d.y = Math.round(n.y * this.k);
              const g = d.dateEnd.replace(" ", "T") + "Z",
                v = new Date(g);
              d.countdown = v - r;
              const A = d.key.includes("chest_s") ? "chest_s" : d.key.includes("chest_m") ? "chest_m" : "chest_l";
              d.img = "/assets/img/decor/" + A + ".png?v1", d.countdown > 0 && t.push(d)
            }
          }
        }), this.chests = t
      },
      async openChest(e) {
        if (!(this.isShowChest || this.isClaimChestLoading)) {
          this.activeChest = e, this.isShowChest = !0;
          try {
            this.isClaimChestLoading = !0;
            const t = await this.apiCall("claimQuest", [e.key]);
            this._animateMoneyFromCenter(e.reward), this.stores.user.setHero(t.hero), this.stores.user.setQuests(t.quests)
          } catch (t) {
            this._catchError(t)
          }
          this.isClaimChestLoading = !1
        }
      },
      async showChangeLocation() {
        this.isShowChangeLocation = !0, await this._completeOnboarding(this.onBoard.changeLocation)
      },
      getBuildingImg(e, t = 1) {
        return ["atm", "chameleon", "coffee_house", "fountain", "hawk", "lecture_theatre", "orlan", "waterfall", "souvenirs", "okx", "bybit", "bitget", "aquarium", "spider", "puma", "lizard", "lizard2", "leopard", "ticket_booth", "roller_coaster", "alpaca", "attraction", "bat", "camel", "capybara", "cat", "dog", "doge", "duck", "horse", "lemur", "mountain_goat", "ostrich", "owl", "peacock", "pepe", "platypus", "raccoon", "scorpion", "seahorse", "seal", "special_icecream", "special_snake_aspid", "special_snake_cobra", "special_snake_python", "starfish", "swan", "walrus"].includes(e) ? "/assets/img/buildings/special/" + e + ".png?v3" : t <= 10 ? "/assets/img/buildings/" + t + "/" + e + ".png?v2" : "/assets/img/buildings/10/" + e + ".png?v2"
      },
      buyPopup(e) {
        this.openPoint = e, this.isBuyPopupShow = !0
      },
      upgradePopup(e) {
        this.openPoint = e, this.isUpgradePopupShow = !0
      },
      async buy(e, t, d = !1) {
        if (t > this.uHero.coins) {
          this.stores.state.setLackOfCoin(t - this.uHero.coins), this.stores.state.setIsShowTopUp(!0);
          return
        }
        this._vibrate("soft");
        try {
          this.isBuyLoading = !0;
          const c = await this.apiCall("buyAnimal", {
            position: this.openPoint.position,
            animalKey: e
          });
          this.stores.user.setHero(c.hero), this.stores.user.setAnimals(c.animals), this._animateMoneyFromCenter(t, "tph")
        } catch (c) {
          this._catchError(c)
        }
        d && (this.isBuyPopupShow = !1, this.isUpgradePopupShow = !1), this.isBuyLoading = !1
      },
      async changeLocation() {
        const e = this.priceChangeLocation;
        if (e > this.uHero.coins) {
          this.stores.state.setLackOfCoin(e - this.uHero.coins), this.stores.state.setIsShowTopUp(!0);
          return
        }
        try {
          this.isChangeLocationLoading = !0;
          const t = await this.apiCall("animalChangePosition", {
            animalKey: this.openAnimal.key,
            position: this.newLocation
          });
          this.stores.user.setHero(t.hero), this.stores.user.setAnimals(t.animals), this._vibrate("success"), this.isShowChangeLocation = !1
        } catch (t) {
          this._catchError(t)
        }
        this.isChangeLocationLoading = !1
      },
      mapClick() {
        const e = document.getElementById("globalMap");
        e.classList.remove("aniSlot"), setTimeout(() => {
          e.classList.add("aniSlot")
        }, 10)
      }
    }
  },
  ae = {
    key: 0
  },
  re = ["src"],
  de = {
    key: 0,
    class: "level"
  },
  ue = {
    key: 0,
    class: "tph24"
  },
  he = ["onClick"],
  pe = ["onClick"],
  ce = ["src"],
  ye = {
    class: "container center"
  },
  me = ["src"],
  ge = {
    key: 1,
    class: "flexCenter"
  },
  fe = {
    style: {
      "font-size": "3em",
      "font-weight": "800"
    },
    class: "zTextShadow2sweet"
  },
  ve = {
    style: {
      "font-size": "0.8em",
      "margin-top": "10px"
    }
  },
  we = {
    style: {
      padding: "5px 5px 0 5px",
      opacity: "0.5"
    }
  },
  Ae = {
    key: 0,
    class: "container"
  },
  be = {
    class: "title panelBrown",
    style: {
      "font-size": "2.5em",
      "font-weight": "800",
      display: "inline-block",
      "margin-top": "15px"
    }
  },
  ke = ["src"],
  Se = {
    class: "desc"
  },
  Ce = {
    class: "title"
  },
  Be = {
    style: {
      "font-size": "0.8em"
    }
  },
  _e = {
    class: ""
  },
  Ee = {
    style: {
      "font-size": "0.7em"
    }
  },
  Le = {
    key: 1,
    class: "container"
  },
  Te = {
    class: "title panelBrown",
    style: {
      "font-size": "2.5em",
      "font-weight": "800",
      display: "inline-block",
      margin: "15px 0 15px 0"
    }
  },
  Fe = ["src"],
  De = {
    class: "desc"
  },
  xe = {
    class: "title"
  },
  Me = {
    style: {
      "font-size": "0.8em"
    }
  },
  Pe = {
    class: ""
  },
  Ne = {
    style: {
      "font-size": "0.7em"
    }
  },
  Ie = {
    key: 2,
    class: "container"
  },
  He = {
    key: 3,
    class: "container",
    style: {
      filter: "grayscale(1)"
    }
  },
  ze = {
    class: "title panelBrown",
    style: {
      "font-size": "2.5em",
      "font-weight": "800",
      display: "inline-block",
      "margin-top": "30px"
    }
  },
  Ue = ["src"],
  Ke = {
    class: "desc"
  },
  Oe = {
    class: "title"
  },
  We = {
    style: {
      "font-size": "0.8em"
    }
  },
  Ye = {
    key: 0
  },
  Qe = {
    key: 1
  },
  Ge = {
    class: "header"
  },
  Xe = {
    style: {
      opacity: "0.5"
    }
  },
  Re = ["src"],
  je = {
    class: "container",
    style: {
      "border-top": "2px solid #D6A36C"
    }
  },
  Je = {
    style: {
      display: "flex",
      "column-gap": "10px",
      "align-items": "flex-end",
      "margin-top": "-30px"
    }
  },
  Ze = {
    class: "title panelBrown",
    style: {
      "font-size": "2.5em",
      "font-weight": "800"
    }
  },
  qe = {
    class: "level"
  },
  Ve = {
    key: 0
  },
  $e = {
    key: 1,
    class: "white"
  },
  et = {
    style: {
      "margin-top": "30px"
    }
  },
  tt = {
    style: {},
    class: "center"
  },
  st = {
    class: "zTextShadow2white",
    style: {
      "font-size": "3em",
      "font-weight": "800"
    }
  },
  ot = {
    class: "flexCenter"
  },
  it = {
    class: "container"
  },
  nt = {
    key: 0
  },
  lt = {
    class: "flexCenter",
    style: {
      "flex-wrap": "wrap",
      "column-gap": "10px",
      "row-gap": "10px"
    }
  },
  at = ["onClick"],
  rt = {
    style: {
      "font-size": "0.8em",
      "margin-top": "10px"
    }
  },
  dt = {
    key: 1
  },
  ut = {
    class: "boostBtns"
  },
  ht = {
    class: "flyBtnCont"
  },
  pt = {
    key: 0,
    style: {
      "font-weight": "800",
      "padding-bottom": "5px",
      color: "#daae7d"
    }
  },
  ct = {
    key: 1,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_ali.png')"
    }
  },
  yt = {
    class: "flyBtnTitle"
  },
  mt = {
    class: "flyBtnCont"
  },
  gt = {
    key: 0,
    style: {
      "font-weight": "800",
      "padding-bottom": "5px",
      color: "#daae7d"
    }
  },
  ft = {
    key: 1,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_boost.png')"
    }
  },
  vt = {
    class: "flyBtnTitle nowrap"
  },
  wt = {
    class: "flyBtnCont"
  },
  At = {
    key: 0,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_feed_need.png')"
    }
  },
  bt = {
    key: 1,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_feed_on.png')"
    }
  },
  kt = {
    key: 2,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_feed_off.png')"
    }
  },
  St = {
    class: "flyBtnTitle nowrap"
  },
  Ct = {
    class: "container"
  },
  Bt = {
    class: "flexCenter",
    style: {
      "flex-wrap": "wrap",
      "margin-bottom": "20px"
    }
  },
  _t = ["src"],
  Et = {
    class: "desc"
  },
  Lt = {
    class: "title"
  },
  Tt = {
    style: {
      "font-size": "1.5em"
    }
  },
  Ft = {
    key: 0
  },
  Dt = {
    key: 1
  };

function xt(e, t, d, c, r, n) {
  var D;
  const g = y("top-bar"),
    v = y("van-badge"),
    A = y("van-count-down"),
    L = y("van-loading"),
    f = y("van-popup"),
    S = y("van-button"),
    w = y("alliance-g"),
    F = y("boost-g"),
    M = y("feed-g");
  return l(), a("div", null, [h(g, {
    onOpenFeedDetails: n.openFeedDetails
  }, null, 8, ["onOpenFeedDetails"]), s("div", {
    class: "globalMap",
    style: B({
      height: Math.round(r.map.h * n.k) + "px"
    }),
    onPointerdown: t[0] || (t[0] = (...o) => n.mapClick && n.mapClick(...o)),
    id: "globalMap"
  }, [(l(!0), a(m, null, k(n.extPoints, o => (l(), a("div", {
    key: o.position,
    class: "point",
    style: B({
      left: o.x + "px",
      top: o.y + ((o == null ? void 0 : o.animalLevel) > 0 ? Math.round(-25 * n.k) : 0) + "px"
    })
  }, [(o == null ? void 0 : o.animalLevel) > 0 ? (l(), a("div", ae, [s("img", {
    class: "buildingImg",
    src: n.getBuildingImg(o.animalKey, o.animalLevel),
    alt: "",
    style: B({
      width: Math.round(220 * n.k) + "px"
    })
  }, null, 12, re), e.uFeed.isNeedFeed ? (l(), a("div", de, t[14] || (t[14] = [s("img", {
    src: ne,
    alt: "",
    style: {
      width: "25px"
    }
  }, null, -1)]))) : (l(), a("div", {
    key: 1,
    class: T(["level", {
      aniLevel: r.animateAnimalKeys.includes(o.animalKey)
    }])
  }, [h(v, {
    dot: o.isAnimalCanBuy,
    style: {
      padding: "3px 0"
    }
  }, {
    default: p(() => [u(" +" + i(e._numberShort(o.animalProfit)), 1)]),
    _: 2
  }, 1032, ["dot"]), r.animateAnimalKeys.includes(o.animalKey) ? (l(), a("span", ue)) : C("", !0)], 2))])) : (l(), a("div", {
    key: 1,
    class: T(["emptySlot", {
      winter: o.isWinter
    }]),
    style: B({
      width: Math.round(210 * n.k) + "px"
    })
  }, null, 6))], 4))), 128)), (l(!0), a(m, null, k(n.extPoints, o => (l(), a("div", {
    key: o.position,
    class: "pointClick",
    style: B({
      left: o.x + "px",
      top: o.y + "px",
      width: Math.round(210 * n.k) + "px"
    }),
    onClick: b => (o == null ? void 0 : o.animalLevel) > 0 ? n.upgradePopup(o) : n.buyPopup(o)
  }, null, 12, he))), 128)), (l(!0), a(m, null, k(r.chests, o => I((l(), a("div", {
    key: o.key,
    class: "pointChest center",
    onClick: b => n.openChest(o),
    style: B({
      left: o.x + "px",
      top: o.y + "px",
      width: Math.round(130 * n.k) + "px"
    })
  }, [s("img", {
    src: o.img,
    alt: "",
    style: {
      width: "100%"
    }
  }, null, 8, ce), h(A, {
    time: o.countdown,
    class: "timer",
    format: "mm:ss",
    onFinish: b => o.countdown = 0
  }, null, 8, ["time", "onFinish"])], 12, pe)), [
    [H, o.countdown > 0]
  ])), 128))], 36), h(f, {
    show: r.isShowChest,
    "onUpdate:show": t[1] || (t[1] = o => r.isShowChest = o),
    closeable: "",
    round: "",
    style: {
      "min-width": "90%"
    },
    duration: .15
  }, {
    default: p(() => [s("div", ye, [s("h1", null, i(e.t("Congratulations! You found it.")), 1), s("img", {
      src: r.activeChest.img,
      alt: "",
      style: {
        width: "100%",
        margin: "-30px 0"
      }
    }, null, 8, me), r.isClaimChestLoading ? (l(), E(L, {
      key: 0
    })) : (l(), a("div", ge, [s("span", fe, i(e._number(r.activeChest.reward)), 1), t[15] || (t[15] = u("  ")), t[16] || (t[16] = s("span", {
      class: "coin60"
    }, null, -1))])), s("div", ve, [s("div", null, i(e.t("Surprises may appear on the map throughout the day. Be quick to collect them!")), 1)])])]),
    _: 1
  }, 8, ["show"]), h(f, {
    show: r.isBuyPopupShow,
    "onUpdate:show": t[2] || (t[2] = o => r.isBuyPopupShow = o),
    position: "bottom",
    round: "",
    closeable: "",
    class: "pointPopup",
    style: {
      border: "none",
      height: "90%"
    },
    duration: .15
  }, {
    default: p(() => [s("div", we, "#" + i(r.openPoint.position), 1), n.availableForBuySpecial.length > 0 ? (l(), a("div", Ae, [s("div", be, i(e.t("Special Time Offer")), 1), (l(!0), a(m, null, k(n.availableForBuySpecial, o => (l(), a("div", {
      key: o.key,
      class: "animalForBuy"
    }, [s("div", null, [s("img", {
      src: "/assets/img/animals/" + o.key + ".png",
      alt: "",
      style: {
        width: "100px"
      }
    }, null, 8, ke)]), s("div", Se, [s("div", Ce, i(o.title), 1), s("div", null, [u("+" + i(e._number(o.level1data.profit)) + " ", 1), t[17] || (t[17] = s("span", {
      class: "tph24"
    }, null, -1)), t[18] || (t[18] = u()), s("span", Be, i(e.t("Tokens per Hour")), 1)])]), s("div", null, [h(S, {
      round: "",
      type: "success",
      onClick: b => n.buy(o.key, o.level1data.price, !0),
      loading: r.isBuyLoading
    }, {
      default: p(() => [s("div", _e, [s("span", Ee, i(e.t("Buy animal")), 1), t[19] || (t[19] = u()), t[20] || (t[20] = s("br", null, null, -1)), t[21] || (t[21] = s("span", {
        class: "coin25"
      }, null, -1)), u("  " + i(e._number(o.level1data.price)), 1)])]),
      _: 2
    }, 1032, ["onClick", "loading"]), h(A, {
      time: o.timeToEnd,
      class: "panelRed center",
      format: o.timeToEnd > 6e4 ? "HH:mm:ss" : "mm:ss",
      onFinish: n.calcUnboughtAnimals,
      style: {
        "font-size": "1.5em",
        "margin-top": "5px",
        "font-weight": "700"
      }
    }, null, 8, ["time", "format", "onFinish"])])]))), 128))])) : C("", !0), n.availableForBuyAnimalList.length > 0 ? (l(), a("div", Le, [s("div", Te, i(e.t("Select animal")), 1), (l(!0), a(m, null, k(n.availableForBuyAnimalList, o => (l(), a("div", {
      key: o.key,
      class: "animalForBuy"
    }, [s("div", null, [s("img", {
      src: "/assets/img/animals/" + o.key + ".png",
      alt: "",
      style: {
        width: "100px"
      }
    }, null, 8, Fe)]), s("div", De, [s("div", xe, i(o.title), 1), s("div", null, [u("+" + i(e._number(o.level1data.profit)) + " ", 1), t[22] || (t[22] = s("span", {
      class: "tph24"
    }, null, -1)), t[23] || (t[23] = u()), s("span", Me, i(e.t("Tokens per Hour")), 1)])]), s("div", null, [h(S, {
      round: "",
      type: "success",
      onClick: b => n.buy(o.key, o.level1data.price, !0),
      loading: r.isBuyLoading
    }, {
      default: p(() => [s("div", Pe, [s("span", Ne, i(e.t("Buy animal")), 1), t[24] || (t[24] = u()), t[25] || (t[25] = s("br", null, null, -1)), t[26] || (t[26] = s("span", {
        class: "coin25"
      }, null, -1)), u("  " + i(e._number(o.level1data.price)), 1)])]),
      _: 2
    }, 1032, ["onClick", "loading"])])]))), 128))])) : (l(), a("div", Ie, [s("h1", null, i(e.t("New animals coming soon - follow our telegram channel.")), 1), h(S, {
      size: "large",
      type: "warning",
      onClick: e._ourTgClick
    }, {
      default: p(() => [u(i(e.t("Follow our channel")), 1)]),
      _: 1
    }, 8, ["onClick"])])), n.notAvailableForBuySpecial.length > 0 ? (l(), a("div", He, [s("div", ze, i(e.t("Unavailable offers")), 1), (l(!0), a(m, null, k(n.notAvailableForBuySpecial, o => (l(), a("div", {
      key: o.key,
      class: "animalForBuy"
    }, [s("div", null, [s("img", {
      src: "/assets/img/animals/" + o.key + ".png",
      alt: "",
      style: {
        width: "100px"
      }
    }, null, 8, Ue)]), s("div", Ke, [s("div", Oe, i(o.title), 1), s("div", null, [u("+" + i(e._number(o.level1data.profit)) + " ", 1), t[27] || (t[27] = s("span", {
      class: "tph24"
    }, null, -1)), t[28] || (t[28] = u()), s("span", We, i(e.t("Tokens per Hour")), 1)])]), s("div", null, [o.timeToStart > 0 ? (l(), a("div", Ye, [u(i(e.t("Sales start in")) + " ", 1), h(A, {
      time: o.timeToStart,
      format: o.timeToStart > 6e4 ? "HH:mm:ss" : "mm:ss",
      onFinish: n.calcUnboughtAnimals,
      class: "center",
      style: {
        "margin-top": "5px",
        "font-weight": "700"
      }
    }, null, 8, ["time", "format", "onFinish"])])) : (l(), a("div", Qe, i(e.t("Missed offer")), 1))])]))), 128))])) : C("", !0)]),
    _: 1
  }, 8, ["show"]), h(f, {
    show: r.isUpgradePopupShow,
    "onUpdate:show": t[6] || (t[6] = o => r.isUpgradePopupShow = o),
    position: "bottom",
    closeable: "",
    round: "",
    class: "pointPopup",
    style: {
      border: "none"
    },
    duration: .15
  }, {
    default: p(() => [s("div", Ge, [s("div", {
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        padding: "10px 20px 20px 10px",
        display: "inline-block"
      },
      onClick: t[3] || (t[3] = (...o) => n.showChangeLocation && n.showChangeLocation(...o))
    }, [h(v, {
      dot: !e._isOnboardingComplete(e.onBoard.changeLocation)
    }, {
      default: p(() => [s("span", Xe, i(e.t("Change location")), 1)]),
      _: 1
    }, 8, ["dot"])]), s("img", {
      class: "buildingImg",
      src: n.getBuildingImg(n.openAnimal.key, n.openAnimal.currentLevelData.level),
      alt: "",
      style: B([{
        width: Math.round(600 * n.k) + "px",
        top: Math.round(-80 * n.k) + "px",
        right: Math.round(10 * n.k) + "px"
      }, {
        position: "absolute"
      }])
    }, null, 12, Re)]), s("div", je, [s("div", Je, [s("div", Ze, i(n.openAnimal.title), 1)]), s("div", null, [s("div", qe, i(e.t("Level")) + " " + i(n.openAnimal.currentLevelData.level), 1), s("div", null, [u(i(e.t("Current {TOKEN_NAME} per hour:", {
      TOKEN_NAME: e.TOKEN_NAME
    })) + " ", 1), t[29] || (t[29] = s("span", {
      class: "tph24"
    }, null, -1)), u(i(e._number(n.openAnimal.currentLevelData.profit)), 1)]), n.openAnimal.isMaxLevel ? (l(), a("div", Ve, i(e.t("This is the maximum level.")), 1)) : C("", !0), n.openAnimal.isMaxLevel ? C("", !0) : (l(), a("div", $e, [s("div", null, [u(i(e.t("Next level {TOKEN_NAME} per hour:", {
      TOKEN_NAME: e.TOKEN_NAME
    })) + " ", 1), t[30] || (t[30] = s("span", {
      class: "tph24"
    }, null, -1)), u(i(e._number(n.openAnimal.nextLevelData.profit)), 1)]), s("div", et, [s("div", tt, [u(i(e.t("Increase at the next level: ")) + " ", 1), t[31] || (t[31] = s("br", null, null, -1)), t[32] || (t[32] = s("span", {
      class: "tph50"
    }, null, -1)), s("span", st, "+" + i(e._number(n.openAnimal.nextLevelData.profit - n.openAnimal.currentLevelData.profit)), 1)]), h(S, {
      type: "success",
      size: "large",
      onClick: t[4] || (t[4] = o => n.buy(n.openAnimal.key, n.openAnimal.nextLevelData.price)),
      loading: r.isBuyLoading,
      style: {
        "margin-top": "15px"
      }
    }, {
      default: p(() => [h(v, {
        dot: n.openAnimal.nextLevelData.price <= e.uHero.coins
      }, {
        default: p(() => [s("div", ot, [u(i(e.t("Level up ")) + "  ", 1), t[33] || (t[33] = s("span", {
          class: "coin33"
        }, null, -1)), u("  " + i(e._number(n.openAnimal.nextLevelData.price)), 1)])]),
        _: 1
      }, 8, ["dot"])]),
      _: 1
    }, 8, ["loading"])])]))])]), h(f, {
      show: r.isShowChangeLocation,
      "onUpdate:show": t[5] || (t[5] = o => r.isShowChangeLocation = o),
      closeable: "",
      round: ""
    }, {
      default: p(() => [s("div", it, [s("h2", null, i(e.t("Change location for {animalTitle}", {
        animalTitle: n.openAnimal.title
      })), 1), n.freePoints.length > 0 ? (l(), a("div", nt, [s("div", lt, [(l(!0), a(m, null, k(n.freePoints, o => (l(), a("div", {
        class: T(["freePoint clicked flexCenter", {
          active: r.newLocation === o
        }]),
        onClick: b => r.newLocation = o
      }, i(o), 11, at))), 256))]), t[35] || (t[35] = s("br", null, null, -1)), h(S, {
        type: "success",
        size: "large",
        onClick: n.changeLocation,
        loading: r.isChangeLocationLoading
      }, {
        default: p(() => [u(i(e.t("Change")) + " " + i(e._number(n.priceChangeLocation)) + " ", 1), t[34] || (t[34] = s("span", {
          class: "coin25"
        }, null, -1))]),
        _: 1
      }, 8, ["onClick", "loading"]), s("div", rt, [s("div", null, "• " + i(e.t("You can see the location number in the upper left corner when viewing the location.")), 1), s("div", null, "• " + i(e.t("You can only change to an empty location.")), 1), s("div", null, "• " + i(e.t("The cost of transfer depends on the level of the building.")), 1)])])) : (l(), a("div", dt, i(e.t("Тo location available")), 1))])]),
      _: 1
    }, 8, ["show"])]),
    _: 1
  }, 8, ["show"]), s("div", ut, [h(v, {
    dot: !e.uAlliance.id
  }, {
    default: p(() => [s("div", {
      class: "flyBtn",
      onClick: t[7] || (t[7] = o => r.isShowAlliance = !0)
    }, [s("div", ht, [e.uAlliance.id ? (l(), a("span", pt, "+" + i(e.dbAllianceByLevel[e.uAlliance.level].bonus) + "%", 1)) : (l(), a("div", ct))]), s("div", yt, i(e.t("Alliance")), 1)])]),
    _: 1
  }, 8, ["dot"]), e.uHero.tph > 0 ? (l(), E(v, {
    key: 0,
    dot: !((D = e.uHero) != null && D.boostPercent)
  }, {
    default: p(() => {
      var o;
      return [s("div", {
        class: "flyBtn",
        onClick: t[8] || (t[8] = b => r.isShowBoost = !0)
      }, [s("div", mt, [((o = e.uHero) == null ? void 0 : o.boostPercent) > 0 ? (l(), a("span", gt, "+" + i(e.uHero.boostPercent) + "%", 1)) : (l(), a("div", ft))]), s("div", vt, i(e.uHero.boostShortDateStr ? e.uHero.boostShortDateStr : e.t("Boost")), 1)])]
    }),
    _: 1
  }, 8, ["dot"])) : C("", !0), e.uHero.tph > 0 ? (l(), E(v, {
    key: 1,
    dot: !e.uFeed.autoFeedEndDateStr && e.uHero.tph > 300
  }, {
    default: p(() => {
      var o, b;
      return [s("div", {
        class: "flyBtn",
        onClick: t[9] || (t[9] = Mt => r.isShowFeed = !0)
      }, [s("div", wt, [(o = e.uFeed) != null && o.isNeedFeed ? (l(), a("div", At)) : (b = e.uFeed) != null && b.autoFeedEndDateStr ? (l(), a("div", bt)) : (l(), a("div", kt))]), s("div", St, [e.uFeed.isNeedFeed ? (l(), a(m, {
        key: 0
      }, [u(i(e.t("HUNGER")), 1)], 64)) : (l(), a(m, {
        key: 1
      }, [u(i(e.uFeed.autoFeedEndDateStr ? e.uFeed.autoFeedEndDateStr : e.t("Feeding")), 1)], 64))])])]
    }),
    _: 1
  }, 8, ["dot"])) : C("", !0)]), h(f, {
    show: r.isShowAlliance,
    "onUpdate:show": t[10] || (t[10] = o => r.isShowAlliance = o),
    position: "right",
    closeable: "",
    round: "",
    style: {
      width: "calc(100vw)"
    },
    duration: .15
  }, {
    default: p(() => [h(w)]),
    _: 1
  }, 8, ["show"]), h(f, {
    show: r.isShowBoost,
    "onUpdate:show": t[11] || (t[11] = o => r.isShowBoost = o),
    position: "right",
    closeable: "",
    round: "",
    style: {
      width: "calc(100vw)"
    },
    duration: .15
  }, {
    default: p(() => [h(F)]),
    _: 1
  }, 8, ["show"]), h(f, {
    show: r.isShowFeed,
    "onUpdate:show": t[12] || (t[12] = o => r.isShowFeed = o),
    position: "right",
    closeable: "",
    round: "",
    style: {
      width: "calc(100vw)"
    },
    duration: .15
  }, {
    default: p(() => [h(M)]),
    _: 1
  }, 8, ["show"]), h(f, {
    show: r.isShowSpecialPromo,
    "onUpdate:show": t[13] || (t[13] = o => r.isShowSpecialPromo = o),
    closeable: "",
    round: "",
    style: {
      width: "90%"
    },
    duration: .15
  }, {
    default: p(() => [s("div", Ct, [s("h1", null, i(e.t("Special offer")), 1), s("p", null, i(e.t("Don't miss out on great deals with high yields!")), 1), s("div", Bt, [(l(!0), a(m, null, k(n.availableAndWillForBuySpecial, o => (l(), a("div", {
      key: o.key,
      class: "center",
      style: {
        "min-width": "50%"
      }
    }, [s("div", null, [s("img", {
      src: "/assets/img/animals/" + o.key + ".png",
      alt: "",
      style: {
        width: "100px"
      }
    }, null, 8, _t)]), s("div", Et, [s("div", Lt, i(o.title), 1), s("div", Tt, [u("+" + i(e._number(o.level1data.profit)) + " ", 1), t[36] || (t[36] = s("span", {
      class: "tph24"
    }, null, -1))])]), o.timeToStart > 0 ? (l(), a("div", Ft, [u(i(e.t("Sales start in")) + " ", 1), h(A, {
      time: o.timeToStart,
      format: o.timeToStart > 6e4 ? "HH:mm:ss" : "mm:ss",
      onFinish: n.calcUnboughtAnimals,
      class: "center",
      style: {
        "margin-top": "5px",
        "font-weight": "700"
      }
    }, null, 8, ["time", "format", "onFinish"])])) : (l(), a("div", Dt, [u(i(e.t("Time left")) + " ", 1), h(A, {
      time: o.timeToEnd,
      class: "panelRed center",
      format: o.timeToEnd > 6e4 ? "HH:mm:ss" : "mm:ss",
      onFinish: n.calcUnboughtAnimals,
      style: {
        "font-size": "1.5em",
        "margin-top": "5px",
        "font-weight": "700"
      }
    }, null, 8, ["time", "format", "onFinish"])]))]))), 128))])])]),
    _: 1
  }, 8, ["show"])])
}
const Ht = x(le, [
  ["render", xt],
  ["__scopeId", "data-v-9376cd16"]
]);
export {
  Ht as
  default
};