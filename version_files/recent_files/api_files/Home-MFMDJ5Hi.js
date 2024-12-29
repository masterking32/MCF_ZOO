import {
  _,
  o as l,
  c as a,
  a as t,
  t as i,
  b as h,
  w as p,
  d as u,
  e as k,
  F as v,
  r as b,
  f as B,
  g,
  T as N,
  u as P,
  n as S,
  h as E,
  i as I,
  v as H
} from "./index-x5wtfx79.js";
import z from "./Alliance-uzpdkCTe.js";
import K from "./Boost-BrWA0jhx.js";
const x = {
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
        return Math.ceil(e.priceInTph * this.uHero.tphBase)
      },
      async buyAutoFeed(e) {
        if (this.calcPrice(e), e.price > this.uHero.coins) {
          this.stores.state.setLackOfCoin(e.price - this.uHero.coins), this.stores.state.setIsShowTopUp(!0);
          return
        }
        try {
          this.isBuyLoading = !0;
          const s = await this.apiCall("autoFeedBuy", e.key);
          this.stores.user.setFeed(s.feed), this.stores.user.setHero(s.hero)
        } catch (s) {
          this._catchError(s)
        }
        this.isBuyLoading = !1
      }
    }
  },
  U = {
    class: "container",
    style: {
      "padding-bottom": "90px"
    }
  },
  O = {
    class: "aniH1",
    style: {
      "line-height": "normal"
    }
  },
  W = {
    key: 0,
    class: "panelRed center",
    style: {
      "margin-bottom": "20px"
    }
  },
  Y = {
    style: {
      "font-weight": "800",
      "font-size": "1.4em"
    }
  },
  Q = {
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
  G = {
    class: "list",
    style: {
      "margin-top": "5px"
    }
  },
  J = {
    class: "zTextShadow2white noMargin"
  },
  Z = {
    style: {
      "font-size": "0.9em"
    }
  },
  q = ["innerHTML"],
  V = ["innerHTML"],
  $ = {
    key: 1,
    style: {
      "font-size": "0.7em"
    }
  },
  ee = {
    class: "list",
    style: {
      "margin-top": "5px"
    }
  },
  se = {
    key: 3
  };

function te(e, s, d, c, r, o) {
  var L, w;
  const m = g("van-button"),
    f = g("van-cell"),
    C = g("van-cell-group");
  return l(), a("div", U, [t("h1", O, i(e.t("Feed the animals to keep token {TOKEN_NAME} mining going!", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), (L = e.uFeed) != null && L.isNeedFeed ? (l(), a("div", W, [t("div", Y, i(e.t("Token mining has stopped. ")), 1), t("div", Q, i(e.t("The animals need to be fed.")), 1), h(m, {
    type: "warning",
    size: "large",
    onClick: s[0] || (s[0] = y => o.buyAutoFeed(o.instantItem)),
    loading: r.isBuyLoading,
    style: {
      "margin-top": "10px"
    }
  }, {
    default: p(() => [u(i(e.t("Feed the animals")) + " ", 1), s[1] || (s[1] = t("span", {
      class: "coin25"
    }, null, -1)), u(" " + i(e._number(o.calcPrice(o.instantItem))), 1)]),
    _: 1
  }, 8, ["loading"])])) : (w = e.uFeed) != null && w.autoFeedEndDateStr ? (l(), a("div", X, [t("div", R, i(e.t("Automatic animal feeding is active")), 1), t("div", j, i(e.t("Time Remaining: {TIME}", {
    TIME: e.uFeed.autoFeedEndDateStr
  })), 1)])) : k("", !0), t("ul", G, [t("li", null, i(e.t("To keep your animals mining {TOKEN_NAME} tokens, you need to feed them regularly.", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), t("li", null, i(e.t("Feeding time occurs six times at random intervals throughout the day.")), 1), t("li", null, i(e.t("{TOKEN_NAME} token mining will resume after you feed your animals.", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), t("li", null, i(e.t("Check on your zoo often, and don't let your animals go hungry!")), 1)]), s[3] || (s[3] = t("br", null, null, -1)), s[4] || (s[4] = t("br", null, null, -1)), t("h2", J, i(e.t("Buy automatic animal feeding")), 1), e.uHero.tph > 500 ? (l(), a(v, {
    key: 2
  }, [t("div", Z, i(e.t("You can buy automatic feeding, and while it’s active, token mining will not stop.")), 1), h(C, {
    inset: "",
    class: "noMargin",
    style: {
      "margin-top": "5px"
    }
  }, {
    default: p(() => [(l(!0), a(v, null, b(e.dbAutoFeed.filter(y => y.time > 1), y => (l(), B(f, {
      key: y.key,
      center: ""
    }, {
      title: p(() => [Number(y.time) === 86400 ? (l(), a("div", {
        key: 0,
        innerHTML: e.t("1 day")
      }, null, 8, q)) : (l(), a("div", {
        key: 1,
        innerHTML: e.t("{days} days", {
          days: Math.round(y.time / (24 * 3600))
        })
      }, null, 8, V))]),
      "right-icon": p(() => [Number(y.time) === 86400 || Number(y.time) === 172800 && o.calcPrice(y) > 1e3 || Number(y.time) > 172800 && o.calcPrice(y) > 3e3 ? (l(), B(m, {
        key: 0,
        type: "success",
        size: "small",
        onClick: T => o.buyAutoFeed(y),
        loading: r.isBuyLoading
      }, {
        default: p(() => [s[2] || (s[2] = t("span", {
          class: "coin25"
        }, null, -1)), u(" " + i(e._number(o.calcPrice(y))), 1)]),
        _: 2
      }, 1032, ["onClick", "loading"])) : (l(), a("span", $, i(e.t("Need more Tokens per Hour")), 1))]),
      _: 2
    }, 1024))), 128))]),
    _: 1
  }), t("ul", ee, [t("li", null, i(e.t("Automatic feeding works one at a time — purchases do not stack.")), 1), t("li", null, i(e.t("If you buy a second one, the one that lasts longer will remain active.")), 1), t("li", null, i(e.t("It starts working immediately after purchase.")), 1), t("li", null, i(e.t("The amount of food needed for feeding depends on your Tokens per hour")), 1), t("li", null, i(e.t("When you buy automatic feeding, no additional food will be deducted.")), 1)])], 64)) : (l(), a("p", se, i(e.t("The option for automatic feeding will become available when your Tokens per Hour exceeds {count}.", {
    count: 1e3
  })), 1))])
}
const ne = _(x, [
    ["render", te],
    ["__scopeId", "data-v-42d02697"]
  ]),
  ie = "data:image/png;base64,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",
  oe = {
    name: "Home-g",
    components: {
      BoostG: K,
      AllianceG: z,
      FeedG: ne,
      TopBar: N
    },
    async created() {
      this.stores.state.setPageSettings()
    },
    mounted() {
      setInterval((function() {
        if (this.uAnimals.length < 1) return;
        this.tick++;
        const e = this.uAnimals.length,
          s = this.uAnimals[Math.floor(Math.random() * e)];
        let d = 1,
          c = 1;
        switch (e) {
          case 1:
          case 2:
            d = 1, c = 5;
            break;
          case 3:
            d = 2, c = 3;
            break;
          case 4:
          case 5:
          case 6:
            d = 4, c = 2;
            break;
          default:
            d = 7, c = 1;
            break
        }
        this.tick % c === 0 && (this.animateAnimalKeys.push(s.key), this.animateAnimalKeys.length > d && this.animateAnimalKeys.shift())
      }).bind(this), 500), this.calcChests(), setInterval((function() {
        this.calcChests()
      }).bind(this), 5e3)
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
        map: {
          w: 768,
          h: 4132
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
          x: 630,
          y: 2455
        }, {
          position: 24,
          x: 438,
          y: 2625
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
        let e = P();
        return (e.width.value > 768 ? 768 : e.width.value) / this.map.w
      },
      animalByPosition() {
        return this._arrayByKey(this.uAnimals, "position")
      },
      extPoints() {
        let e = this._cloneObject(this.points);
        return e.map(s => {
          if (s.x = Math.round(s.x * this.k), s.y = Math.round(s.y * this.k), s.position in this.animalByPosition) {
            const d = this.animalByPosition[s.position];
            if (d.key in this.dbAnimalsByKey) {
              s.animalKey = d.key, s.animalLevel = d.level, s.isAnimalCanBuy = !1;
              const c = this.dbAnimalsByKey[d.key].levels.find(o => o.level === d.level),
                r = this.dbAnimalsByKey[d.key].levels.find(o => o.level === d.level + 1);
              r && r.price <= this.uHero.coins && (s.isAnimalCanBuy = !0), s.animalProfit = c.profit
            }
          }
          return s
        }), e
      },
      freePoints() {
        return this.extPoints.filter(e => !e.animalKey).map(e => e.position)
      },
      availableForBuySpecial() {
        return this.unboughtAnimals.filter(e => e.isSpecial && e.timeToStart < 0 && e.timeToEnd > 0)
      },
      notAvailableForBuySpecial() {
        return this.unboughtAnimals.filter(e => e.isSpecial && !(e.timeToStart < 0 && e.timeToEnd > 0))
      },
      availableForBuyAnimalList() {
        return this.unboughtAnimals.filter(e => !e.isSpecial)
      },
      openAnimal() {
        if (!("animalKey" in this.openPoint)) return null;
        let e = {};
        e = this.dbAnimalsByKey[this.openPoint.animalKey];
        const s = this.uAnimalsByKey[this.openPoint.animalKey].level,
          d = s + 1,
          c = this._arrayByKey(e.levels, "level"),
          r = c[s],
          o = !(d in c);
        let m = null;
        return o || (m = c[d]), e.isMaxLevel = o, e.currentLevelData = r, e.nextLevelData = m, e
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
        let e = this.dbAnimals.filter(s => !this.uAnimals.some(d => d.key === s.key));
        e = e.map(s => (s.level1data = s.levels.find(d => d.level === 1), s.isSpecial = s.dateStart && s.dateEnd, s.isSpecial && (s.timeToStart = new Date(s.dateStart.replace(" ", "T") + "Z") - new Date + 5e3, s.timeToEnd = new Date(s.dateEnd.replace(" ", "T") + "Z") - new Date - 5e3), s)), this.unboughtAnimals = e
      },
      openFeedDetails() {
        this.isShowFeed = !0
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
        let s = [];
        this.dbQuests.filter(d => d.key.includes("chest_")).forEach(d => {
          const c = new Date(d.actionTo.replace(" ", "T") + "Z"),
            r = new Date;
          if (c < r) {
            let o = e[Number(d.checkData) - 1] || null;
            if (o && !this.uQuests.find(m => m.key === d.key)) {
              d.x = Math.round(o.x * this.k), d.y = Math.round(o.y * this.k);
              const m = d.dateEnd.replace(" ", "T") + "Z",
                f = new Date(m);
              d.countdown = f - r;
              const C = d.key.includes("chest_s") ? "chest_s" : d.key.includes("chest_m") ? "chest_m" : "chest_l";
              d.img = "/assets/img/decor/" + C + ".png?v1", d.countdown > 0 && s.push(d)
            }
          }
        }), this.chests = s
      },
      async openChest(e) {
        if (!(this.isShowChest || this.isClaimChestLoading)) {
          this.activeChest = e, this.isShowChest = !0;
          try {
            this.isClaimChestLoading = !0;
            const s = await this.apiCall("claimQuest", [e.key]);
            this._animateMoneyFromCenter(e.reward), this.stores.user.setHero(s.hero), this.stores.user.setQuests(s.quests)
          } catch (s) {
            this._catchError(s)
          }
          this.isClaimChestLoading = !1
        }
      },
      async showChangeLocation() {
        this.isShowChangeLocation = !0, await this._completeOnboarding(this.onBoard.changeLocation)
      },
      getBuildingImg(e, s = 1) {
        return ["doge", "pepe", "capybara", "platypus"].includes(e) ? "/assets/img/buildings/special/" + e + ".png?v2" : s <= 10 ? "/assets/img/buildings/" + s + "/" + e + ".png?v2" : "/assets/img/buildings/10/" + e + ".png?v2"
      },
      buyPopup(e) {
        this.openPoint = e, this.isBuyPopupShow = !0
      },
      upgradePopup(e) {
        this.openPoint = e, this.isUpgradePopupShow = !0
      },
      async buy(e, s, d = !1) {
        if (s > this.uHero.coins) {
          this.stores.state.setLackOfCoin(s - this.uHero.coins), this.stores.state.setIsShowTopUp(!0);
          return
        }
        this._vibrate("soft");
        try {
          this.isBuyLoading = !0;
          const c = await this.apiCall("buyAnimal", {
            position: this.openPoint.position,
            animalKey: e
          });
          this.stores.user.setHero(c.hero), this.stores.user.setAnimals(c.animals), this._animateMoneyFromCenter(s, "tph")
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
          const s = await this.apiCall("animalChangePosition", {
            animalKey: this.openAnimal.key,
            position: this.newLocation
          });
          this.stores.user.setHero(s.hero), this.stores.user.setAnimals(s.animals), this._vibrate("success"), this.isShowChangeLocation = !1
        } catch (s) {
          this._catchError(s)
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
  le = {
    key: 0
  },
  ae = ["src"],
  re = {
    key: 0,
    class: "level"
  },
  de = {
    key: 0,
    class: "tph24"
  },
  ue = ["onClick"],
  he = ["onClick"],
  pe = ["src"],
  ce = {
    class: "container center"
  },
  ye = ["src"],
  ge = {
    key: 1,
    class: "flexCenter"
  },
  me = {
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
  fe = {
    style: {
      padding: "5px 5px 0 5px",
      opacity: "0.5"
    }
  },
  we = {
    key: 0,
    class: "container"
  },
  Ae = {
    class: "title panelBrown",
    style: {
      "font-size": "2.5em",
      "font-weight": "800",
      display: "inline-block",
      "margin-top": "15px"
    }
  },
  ke = ["src"],
  be = {
    class: "desc"
  },
  Ce = {
    class: "title"
  },
  Se = {
    style: {
      "font-size": "0.8em"
    }
  },
  Be = {
    class: ""
  },
  Le = {
    style: {
      "font-size": "0.7em"
    }
  },
  Ee = {
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
  _e = {
    class: "desc"
  },
  De = {
    class: "title"
  },
  Me = {
    style: {
      "font-size": "0.8em"
    }
  },
  Ne = {
    class: ""
  },
  Pe = {
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
  Ke = ["src"],
  xe = {
    class: "desc"
  },
  Ue = {
    class: "title"
  },
  Oe = {
    style: {
      "font-size": "0.8em"
    }
  },
  We = {
    key: 0
  },
  Ye = {
    key: 1
  },
  Qe = {
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
  Ge = {
    style: {
      display: "flex",
      "column-gap": "10px",
      "align-items": "flex-end",
      "margin-top": "-30px"
    }
  },
  Je = {
    class: "title panelBrown",
    style: {
      "font-size": "2.5em",
      "font-weight": "800"
    }
  },
  Ze = {
    class: "level"
  },
  qe = {
    key: 0
  },
  Ve = {
    key: 1,
    class: "white"
  },
  $e = {
    style: {
      "margin-top": "30px"
    }
  },
  es = {
    style: {},
    class: "center"
  },
  ss = {
    class: "zTextShadow2white",
    style: {
      "font-size": "3em",
      "font-weight": "800"
    }
  },
  ts = {
    class: "flexCenter"
  },
  ns = {
    class: "container"
  },
  is = {
    key: 0
  },
  os = {
    class: "flexCenter",
    style: {
      "flex-wrap": "wrap",
      "column-gap": "10px",
      "row-gap": "10px"
    }
  },
  ls = ["onClick"],
  as = {
    style: {
      "font-size": "0.8em",
      "margin-top": "10px"
    }
  },
  rs = {
    key: 1
  },
  ds = {
    class: "boostBtns"
  },
  us = {
    class: "flyBtnCont"
  },
  hs = {
    key: 0,
    style: {
      "font-weight": "800",
      "padding-bottom": "5px",
      color: "#daae7d"
    }
  },
  ps = {
    key: 1,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_ali.png')"
    }
  },
  cs = {
    class: "flyBtnTitle"
  },
  ys = {
    class: "flyBtnCont"
  },
  gs = {
    key: 0,
    style: {
      "font-weight": "800",
      "padding-bottom": "5px",
      color: "#daae7d"
    }
  },
  ms = {
    key: 1,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_boost.png')"
    }
  },
  vs = {
    class: "flyBtnTitle nowrap"
  },
  fs = {
    class: "flyBtnCont"
  },
  ws = {
    key: 0,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_feed_need.png')"
    }
  },
  As = {
    key: 1,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_feed_on.png')"
    }
  },
  ks = {
    key: 2,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_feed_off.png')"
    }
  },
  bs = {
    class: "flyBtnTitle nowrap"
  };

function Cs(e, s, d, c, r, o) {
  var F;
  const m = g("top-bar"),
    f = g("van-badge"),
    C = g("van-count-down"),
    L = g("van-loading"),
    w = g("van-popup"),
    y = g("van-button"),
    T = g("alliance-g"),
    D = g("boost-g"),
    M = g("feed-g");
  return l(), a("div", null, [h(m, {
    onOpenFeedDetails: o.openFeedDetails
  }, null, 8, ["onOpenFeedDetails"]), t("div", {
    class: "globalMap",
    style: S({
      height: Math.round(r.map.h * o.k) + "px"
    }),
    onPointerdown: s[0] || (s[0] = (...n) => o.mapClick && o.mapClick(...n)),
    id: "globalMap"
  }, [(l(!0), a(v, null, b(o.extPoints, n => (l(), a("div", {
    key: n.position,
    class: "point",
    style: S({
      left: n.x + "px",
      top: n.y + ((n == null ? void 0 : n.animalLevel) > 0 ? Math.round(-25 * o.k) : 0) + "px"
    })
  }, [(n == null ? void 0 : n.animalLevel) > 0 ? (l(), a("div", le, [t("img", {
    class: "buildingImg",
    src: o.getBuildingImg(n.animalKey, n.animalLevel),
    alt: "",
    style: S({
      width: Math.round(220 * o.k) + "px"
    })
  }, null, 12, ae), e.uFeed.isNeedFeed ? (l(), a("div", re, s[13] || (s[13] = [t("img", {
    src: ie,
    alt: "",
    style: {
      width: "25px"
    }
  }, null, -1)]))) : (l(), a("div", {
    key: 1,
    class: E(["level", {
      aniLevel: r.animateAnimalKeys.includes(n.animalKey)
    }])
  }, [h(f, {
    dot: n.isAnimalCanBuy,
    style: {
      padding: "3px 0"
    }
  }, {
    default: p(() => [u(" +" + i(e._numberShort(n.animalProfit)), 1)]),
    _: 2
  }, 1032, ["dot"]), r.animateAnimalKeys.includes(n.animalKey) ? (l(), a("span", de)) : k("", !0)], 2))])) : (l(), a("div", {
    key: 1,
    class: E(["emptySlot", {
      winter: n.isWinter
    }]),
    style: S({
      width: Math.round(210 * o.k) + "px"
    })
  }, null, 6))], 4))), 128)), (l(!0), a(v, null, b(o.extPoints, n => (l(), a("div", {
    key: n.position,
    class: "pointClick",
    style: S({
      left: n.x + "px",
      top: n.y + "px",
      width: Math.round(210 * o.k) + "px"
    }),
    onClick: A => (n == null ? void 0 : n.animalLevel) > 0 ? o.upgradePopup(n) : o.buyPopup(n)
  }, null, 12, ue))), 128)), (l(!0), a(v, null, b(r.chests, n => I((l(), a("div", {
    key: n.key,
    class: "pointChest center",
    onClick: A => o.openChest(n),
    style: S({
      left: n.x + "px",
      top: n.y + "px",
      width: Math.round(130 * o.k) + "px"
    })
  }, [t("img", {
    src: n.img,
    alt: "",
    style: {
      width: "100%"
    }
  }, null, 8, pe), h(C, {
    time: n.countdown,
    class: "timer",
    format: "mm:ss",
    onFinish: A => n.countdown = 0
  }, null, 8, ["time", "onFinish"])], 12, he)), [
    [H, n.countdown > 0]
  ])), 128))], 36), h(w, {
    show: r.isShowChest,
    "onUpdate:show": s[1] || (s[1] = n => r.isShowChest = n),
    closeable: "",
    round: "",
    style: {
      "min-width": "90%"
    },
    duration: .15
  }, {
    default: p(() => [t("div", ce, [t("h1", null, i(e.t("Congratulations! You found it.")), 1), t("img", {
      src: r.activeChest.img,
      alt: "",
      style: {
        width: "100%",
        margin: "-30px 0"
      }
    }, null, 8, ye), r.isClaimChestLoading ? (l(), B(L, {
      key: 0
    })) : (l(), a("div", ge, [t("span", me, i(e._number(r.activeChest.reward)), 1), s[14] || (s[14] = u("  ")), s[15] || (s[15] = t("span", {
      class: "coin60"
    }, null, -1))])), t("div", ve, [t("div", null, i(e.t("Surprises may appear on the map throughout the day. Be quick to collect them!")), 1)])])]),
    _: 1
  }, 8, ["show"]), h(w, {
    show: r.isBuyPopupShow,
    "onUpdate:show": s[2] || (s[2] = n => r.isBuyPopupShow = n),
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
    default: p(() => [t("div", fe, "#" + i(r.openPoint.position), 1), o.availableForBuySpecial.length > 0 ? (l(), a("div", we, [t("div", Ae, i(e.t("Special Time Offer")), 1), (l(!0), a(v, null, b(o.availableForBuySpecial, n => (l(), a("div", {
      key: n.key,
      class: "animalForBuy"
    }, [t("div", null, [t("img", {
      src: "/assets/img/animals/" + n.key + ".png",
      alt: "",
      style: {
        width: "100px"
      }
    }, null, 8, ke)]), t("div", be, [t("div", Ce, i(n.title), 1), t("div", null, [u("+" + i(e._number(n.level1data.profit)) + " ", 1), s[16] || (s[16] = t("span", {
      class: "tph24"
    }, null, -1)), s[17] || (s[17] = u()), t("span", Se, i(e.t("Tokens per Hour")), 1)])]), t("div", null, [h(y, {
      round: "",
      type: "success",
      onClick: A => o.buy(n.key, n.level1data.price, !0),
      loading: r.isBuyLoading
    }, {
      default: p(() => [t("div", Be, [t("span", Le, i(e.t("Buy animal")), 1), s[18] || (s[18] = u()), s[19] || (s[19] = t("br", null, null, -1)), s[20] || (s[20] = t("span", {
        class: "coin25"
      }, null, -1)), u("  " + i(e._number(n.level1data.price)), 1)])]),
      _: 2
    }, 1032, ["onClick", "loading"]), h(C, {
      time: n.timeToEnd,
      class: "panelRed center",
      format: "mm:ss",
      onFinish: o.calcUnboughtAnimals,
      style: {
        "font-size": "1.5em",
        "margin-top": "5px",
        "font-weight": "700"
      }
    }, null, 8, ["time", "onFinish"])])]))), 128))])) : k("", !0), o.availableForBuyAnimalList.length > 0 ? (l(), a("div", Ee, [t("div", Te, i(e.t("Select animal")), 1), (l(!0), a(v, null, b(o.availableForBuyAnimalList, n => (l(), a("div", {
      key: n.key,
      class: "animalForBuy"
    }, [t("div", null, [t("img", {
      src: "/assets/img/animals/" + n.key + ".png",
      alt: "",
      style: {
        width: "100px"
      }
    }, null, 8, Fe)]), t("div", _e, [t("div", De, i(n.title), 1), t("div", null, [u("+" + i(e._number(n.level1data.profit)) + " ", 1), s[21] || (s[21] = t("span", {
      class: "tph24"
    }, null, -1)), s[22] || (s[22] = u()), t("span", Me, i(e.t("Tokens per Hour")), 1)])]), t("div", null, [h(y, {
      round: "",
      type: "success",
      onClick: A => o.buy(n.key, n.level1data.price, !0),
      loading: r.isBuyLoading
    }, {
      default: p(() => [t("div", Ne, [t("span", Pe, i(e.t("Buy animal")), 1), s[23] || (s[23] = u()), s[24] || (s[24] = t("br", null, null, -1)), s[25] || (s[25] = t("span", {
        class: "coin25"
      }, null, -1)), u("  " + i(e._number(n.level1data.price)), 1)])]),
      _: 2
    }, 1032, ["onClick", "loading"])])]))), 128))])) : (l(), a("div", Ie, [t("h1", null, i(e.t("New animals coming soon - follow our telegram channel.")), 1), h(y, {
      size: "large",
      type: "warning",
      onClick: e._ourTgClick
    }, {
      default: p(() => [u(i(e.t("Follow our channel")), 1)]),
      _: 1
    }, 8, ["onClick"])])), o.notAvailableForBuySpecial.length > 0 ? (l(), a("div", He, [t("div", ze, i(e.t("Unavailable offers")), 1), (l(!0), a(v, null, b(o.notAvailableForBuySpecial, n => (l(), a("div", {
      key: n.key,
      class: "animalForBuy"
    }, [t("div", null, [t("img", {
      src: "/assets/img/animals/" + n.key + ".png",
      alt: "",
      style: {
        width: "100px"
      }
    }, null, 8, Ke)]), t("div", xe, [t("div", Ue, i(n.title), 1), t("div", null, [u("+" + i(e._number(n.level1data.profit)) + " ", 1), s[26] || (s[26] = t("span", {
      class: "tph24"
    }, null, -1)), s[27] || (s[27] = u()), t("span", Oe, i(e.t("Tokens per Hour")), 1)])]), t("div", null, [n.timeToStart > 0 ? (l(), a("div", We, [s[28] || (s[28] = t("span", {
      class: "coin25"
    }, null, -1)), u("  " + i(e._number(n.level1data.price)) + " ", 1), s[29] || (s[29] = t("br", null, null, -1)), u(" " + i(e.t("Sales start in")) + " ", 1), h(C, {
      time: n.timeToStart,
      format: "mm:ss",
      onFinish: o.calcUnboughtAnimals,
      class: "center",
      style: {
        "margin-top": "5px",
        "font-weight": "700"
      }
    }, null, 8, ["time", "onFinish"])])) : (l(), a("div", Ye, i(e.t("Missed offer")), 1))])]))), 128))])) : k("", !0)]),
    _: 1
  }, 8, ["show"]), h(w, {
    show: r.isUpgradePopupShow,
    "onUpdate:show": s[6] || (s[6] = n => r.isUpgradePopupShow = n),
    position: "bottom",
    closeable: "",
    round: "",
    class: "pointPopup",
    style: {
      border: "none"
    },
    duration: .15
  }, {
    default: p(() => [t("div", Qe, [t("div", {
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        padding: "10px 20px 20px 10px",
        display: "inline-block"
      },
      onClick: s[3] || (s[3] = (...n) => o.showChangeLocation && o.showChangeLocation(...n))
    }, [h(f, {
      dot: !e._isOnboardingComplete(e.onBoard.changeLocation)
    }, {
      default: p(() => [t("span", Xe, i(e.t("Change location")), 1)]),
      _: 1
    }, 8, ["dot"])]), t("img", {
      class: "buildingImg",
      src: o.getBuildingImg(o.openAnimal.key, o.openAnimal.currentLevelData.level),
      alt: "",
      style: S([{
        width: Math.round(600 * o.k) + "px",
        top: Math.round(-80 * o.k) + "px",
        right: Math.round(10 * o.k) + "px"
      }, {
        position: "absolute"
      }])
    }, null, 12, Re)]), t("div", je, [t("div", Ge, [t("div", Je, i(o.openAnimal.title), 1)]), t("div", null, [t("div", Ze, i(e.t("Level")) + " " + i(o.openAnimal.currentLevelData.level), 1), t("div", null, [u(i(e.t("Current {TOKEN_NAME} per hour:", {
      TOKEN_NAME: e.TOKEN_NAME
    })) + " ", 1), s[30] || (s[30] = t("span", {
      class: "tph24"
    }, null, -1)), u(i(e._number(o.openAnimal.currentLevelData.profit)), 1)]), o.openAnimal.isMaxLevel ? (l(), a("div", qe, i(e.t("This is the maximum level.")), 1)) : k("", !0), o.openAnimal.isMaxLevel ? k("", !0) : (l(), a("div", Ve, [t("div", null, [u(i(e.t("Next level {TOKEN_NAME} per hour:", {
      TOKEN_NAME: e.TOKEN_NAME
    })) + " ", 1), s[31] || (s[31] = t("span", {
      class: "tph24"
    }, null, -1)), u(i(e._number(o.openAnimal.nextLevelData.profit)), 1)]), t("div", $e, [t("div", es, [u(i(e.t("Increase at the next level: ")) + " ", 1), s[32] || (s[32] = t("br", null, null, -1)), s[33] || (s[33] = t("span", {
      class: "tph50"
    }, null, -1)), t("span", ss, "+" + i(e._number(o.openAnimal.nextLevelData.profit - o.openAnimal.currentLevelData.profit)), 1)]), h(y, {
      type: "success",
      size: "large",
      onClick: s[4] || (s[4] = n => o.buy(o.openAnimal.key, o.openAnimal.nextLevelData.price)),
      loading: r.isBuyLoading,
      style: {
        "margin-top": "15px"
      }
    }, {
      default: p(() => [h(f, {
        dot: o.openAnimal.nextLevelData.price <= e.uHero.coins
      }, {
        default: p(() => [t("div", ts, [u(i(e.t("Level up ")) + "  ", 1), s[34] || (s[34] = t("span", {
          class: "coin33"
        }, null, -1)), u("  " + i(e._number(o.openAnimal.nextLevelData.price)), 1)])]),
        _: 1
      }, 8, ["dot"])]),
      _: 1
    }, 8, ["loading"])])]))])]), h(w, {
      show: r.isShowChangeLocation,
      "onUpdate:show": s[5] || (s[5] = n => r.isShowChangeLocation = n),
      closeable: "",
      round: ""
    }, {
      default: p(() => [t("div", ns, [t("h2", null, i(e.t("Change location for {animalTitle}", {
        animalTitle: o.openAnimal.title
      })), 1), o.freePoints.length > 0 ? (l(), a("div", is, [t("div", os, [(l(!0), a(v, null, b(o.freePoints, n => (l(), a("div", {
        class: E(["freePoint clicked flexCenter", {
          active: r.newLocation === n
        }]),
        onClick: A => r.newLocation = n
      }, i(n), 11, ls))), 256))]), s[36] || (s[36] = t("br", null, null, -1)), h(y, {
        type: "success",
        size: "large",
        onClick: o.changeLocation,
        loading: r.isChangeLocationLoading
      }, {
        default: p(() => [u(i(e.t("Change")) + " " + i(e._number(o.priceChangeLocation)) + " ", 1), s[35] || (s[35] = t("span", {
          class: "coin25"
        }, null, -1))]),
        _: 1
      }, 8, ["onClick", "loading"]), t("div", as, [t("div", null, "• " + i(e.t("You can see the location number in the upper left corner when viewing the location.")), 1), t("div", null, "• " + i(e.t("You can only change to an empty location.")), 1), t("div", null, "• " + i(e.t("The cost of transfer depends on the level of the building.")), 1)])])) : (l(), a("div", rs, i(e.t("Тo location available")), 1))])]),
      _: 1
    }, 8, ["show"])]),
    _: 1
  }, 8, ["show"]), t("div", ds, [h(f, {
    dot: !e.uAlliance.id
  }, {
    default: p(() => [t("div", {
      class: "flyBtn",
      onClick: s[7] || (s[7] = n => r.isShowAlliance = !0)
    }, [t("div", us, [e.uAlliance.id ? (l(), a("span", hs, "+" + i(e.dbAllianceByLevel[e.uAlliance.level].bonus) + "%", 1)) : (l(), a("div", ps))]), t("div", cs, i(e.t("Alliance")), 1)])]),
    _: 1
  }, 8, ["dot"]), e.uHero.tph > 0 ? (l(), B(f, {
    key: 0,
    dot: !((F = e.uHero) != null && F.boostPercent)
  }, {
    default: p(() => {
      var n;
      return [t("div", {
        class: "flyBtn",
        onClick: s[8] || (s[8] = A => r.isShowBoost = !0)
      }, [t("div", ys, [((n = e.uHero) == null ? void 0 : n.boostPercent) > 0 ? (l(), a("span", gs, "+" + i(e.uHero.boostPercent) + "%", 1)) : (l(), a("div", ms))]), t("div", vs, i(e.uHero.boostShortDateStr ? e.uHero.boostShortDateStr : e.t("Boost")), 1)])]
    }),
    _: 1
  }, 8, ["dot"])) : k("", !0), e.uHero.tph > 0 ? (l(), B(f, {
    key: 1,
    dot: !e.uFeed.autoFeedEndDateStr && e.uHero.tph > 1e3
  }, {
    default: p(() => {
      var n, A;
      return [t("div", {
        class: "flyBtn",
        onClick: s[9] || (s[9] = Ss => r.isShowFeed = !0)
      }, [t("div", fs, [(n = e.uFeed) != null && n.isNeedFeed ? (l(), a("div", ws)) : (A = e.uFeed) != null && A.autoFeedEndDateStr ? (l(), a("div", As)) : (l(), a("div", ks))]), t("div", bs, [e.uFeed.isNeedFeed ? (l(), a(v, {
        key: 0
      }, [u(i(e.t("HUNGER")), 1)], 64)) : (l(), a(v, {
        key: 1
      }, [u(i(e.uFeed.autoFeedEndDateStr ? e.uFeed.autoFeedEndDateStr : e.t("Feeding")), 1)], 64))])])]
    }),
    _: 1
  }, 8, ["dot"])) : k("", !0)]), h(w, {
    show: r.isShowAlliance,
    "onUpdate:show": s[10] || (s[10] = n => r.isShowAlliance = n),
    position: "right",
    closeable: "",
    round: "",
    style: {
      width: "calc(100vw)"
    },
    duration: .15
  }, {
    default: p(() => [h(T)]),
    _: 1
  }, 8, ["show"]), h(w, {
    show: r.isShowBoost,
    "onUpdate:show": s[11] || (s[11] = n => r.isShowBoost = n),
    position: "right",
    closeable: "",
    round: "",
    style: {
      width: "calc(100vw)"
    },
    duration: .15
  }, {
    default: p(() => [h(D)]),
    _: 1
  }, 8, ["show"]), h(w, {
    show: r.isShowFeed,
    "onUpdate:show": s[12] || (s[12] = n => r.isShowFeed = n),
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
  }, 8, ["show"])])
}
const Ts = _(oe, [
  ["render", Cs],
  ["__scopeId", "data-v-41de9b0b"]
]);
export {
  Ts as
  default
};