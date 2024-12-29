import {
  _ as P,
  o as l,
  c as a,
  a as t,
  t as i,
  b as h,
  w as p,
  d as u,
  e as k,
  F as v,
  r as _,
  f as S,
  g,
  T as N,
  u as D,
  n as A,
  h as L,
  i as x,
  v as H
} from "./index-D3gLHzfn.js";
import K from "./Alliance-D8tcRg2D.js";
import z from "./Boost-etLs0EzH.js";
const I = {
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
  O = {
    class: "container",
    style: {
      "padding-bottom": "90px"
    }
  },
  U = {
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
  G = {
    style: {
      "font-weight": "800",
      "font-size": "1.4em"
    }
  },
  Q = {
    class: "white"
  },
  R = {
    key: 1,
    class: "panelBrown center",
    style: {
      "margin-bottom": "20px"
    }
  },
  V = {
    style: {
      "font-weight": "800",
      "font-size": "1.4em"
    }
  },
  Y = {
    class: "white"
  },
  Z = {
    class: "list",
    style: {
      "margin-top": "5px"
    }
  },
  q = {
    class: "zTextShadow2white noMargin"
  },
  j = {
    style: {
      "font-size": "0.9em"
    }
  },
  J = ["innerHTML"],
  X = ["innerHTML"],
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
  var B, w;
  const m = g("van-button"),
    f = g("van-cell"),
    C = g("van-cell-group");
  return l(), a("div", O, [t("h1", U, i(e.t("Feed the animals to keep token {TOKEN_NAME} mining going!", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), (B = e.uFeed) != null && B.isNeedFeed ? (l(), a("div", W, [t("div", G, i(e.t("Token mining has stopped. ")), 1), t("div", Q, i(e.t("The animals need to be fed.")), 1), h(m, {
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
  }, 8, ["loading"])])) : (w = e.uFeed) != null && w.autoFeedEndDateStr ? (l(), a("div", R, [t("div", V, i(e.t("Automatic animal feeding is active")), 1), t("div", Y, i(e.t("Time Remaining: {TIME}", {
    TIME: e.uFeed.autoFeedEndDateStr
  })), 1)])) : k("", !0), t("ul", Z, [t("li", null, i(e.t("To keep your animals mining {TOKEN_NAME} tokens, you need to feed them regularly.", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), t("li", null, i(e.t("Feeding time occurs six times at random intervals throughout the day.")), 1), t("li", null, i(e.t("{TOKEN_NAME} token mining will resume after you feed your animals.", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), t("li", null, i(e.t("Check on your zoo often, and don't let your animals go hungry!")), 1)]), s[3] || (s[3] = t("br", null, null, -1)), s[4] || (s[4] = t("br", null, null, -1)), t("h2", q, i(e.t("Buy automatic animal feeding")), 1), e.uHero.tph > 500 ? (l(), a(v, {
    key: 2
  }, [t("div", j, i(e.t("You can buy automatic feeding, and while it’s active, token mining will not stop.")), 1), h(C, {
    inset: "",
    class: "noMargin",
    style: {
      "margin-top": "5px"
    }
  }, {
    default: p(() => [(l(!0), a(v, null, _(e.dbAutoFeed.filter(y => y.time > 1), y => (l(), S(f, {
      key: y.key,
      center: ""
    }, {
      title: p(() => [Number(y.time) === 86400 ? (l(), a("div", {
        key: 0,
        innerHTML: e.t("1 day")
      }, null, 8, J)) : (l(), a("div", {
        key: 1,
        innerHTML: e.t("{days} days", {
          days: Math.round(y.time / (24 * 3600))
        })
      }, null, 8, X))]),
      "right-icon": p(() => [Number(y.time) === 86400 || Number(y.time) === 172800 && o.calcPrice(y) > 1e3 || Number(y.time) > 172800 && o.calcPrice(y) > 3e3 ? (l(), S(m, {
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
const ne = P(I, [
    ["render", te],
    ["__scopeId", "data-v-42d02697"]
  ]),
  ie = {
    name: "Home-g",
    components: {
      BoostG: z,
      AllianceG: K,
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
        let e = D();
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
  oe = {
    key: 0
  },
  le = ["src"],
  ae = {
    key: 0,
    class: "tph24"
  },
  re = ["onClick"],
  de = ["onClick"],
  ue = ["src"],
  he = {
    class: "container center"
  },
  pe = ["src"],
  ce = {
    key: 1,
    class: "flexCenter"
  },
  ye = {
    style: {
      "font-size": "3em",
      "font-weight": "800"
    },
    class: "zTextShadow2sweet"
  },
  ge = {
    style: {
      "font-size": "0.8em",
      "margin-top": "10px"
    }
  },
  me = {
    style: {
      padding: "5px 5px 0 5px",
      opacity: "0.5"
    }
  },
  ve = {
    key: 0,
    class: "container"
  },
  fe = {
    class: "title panelBrown",
    style: {
      "font-size": "2.5em",
      "font-weight": "800",
      display: "inline-block",
      "margin-top": "15px"
    }
  },
  we = ["src"],
  be = {
    class: "desc"
  },
  ke = {
    class: "title"
  },
  _e = {
    style: {
      "font-size": "0.8em"
    }
  },
  Ce = {
    class: ""
  },
  Ae = {
    style: {
      "font-size": "0.7em"
    }
  },
  Se = {
    key: 1,
    class: "container"
  },
  Be = {
    class: "title panelBrown",
    style: {
      "font-size": "2.5em",
      "font-weight": "800",
      display: "inline-block",
      margin: "15px 0 15px 0"
    }
  },
  Le = ["src"],
  Te = {
    class: "desc"
  },
  Fe = {
    class: "title"
  },
  Pe = {
    style: {
      "font-size": "0.8em"
    }
  },
  Ee = {
    class: ""
  },
  Me = {
    style: {
      "font-size": "0.7em"
    }
  },
  Ne = {
    key: 2,
    class: "container"
  },
  De = {
    key: 3,
    class: "container",
    style: {
      filter: "grayscale(1)"
    }
  },
  xe = {
    class: "title panelBrown",
    style: {
      "font-size": "2.5em",
      "font-weight": "800",
      display: "inline-block",
      "margin-top": "30px"
    }
  },
  He = ["src"],
  Ke = {
    class: "desc"
  },
  ze = {
    class: "title"
  },
  Ie = {
    style: {
      "font-size": "0.8em"
    }
  },
  Oe = {
    key: 0
  },
  Ue = {
    key: 1
  },
  We = {
    class: "header"
  },
  Ge = {
    style: {
      opacity: "0.5"
    }
  },
  Qe = ["src"],
  Re = {
    class: "container",
    style: {
      "border-top": "2px solid #D6A36C"
    }
  },
  Ve = {
    style: {
      display: "flex",
      "column-gap": "10px",
      "align-items": "flex-end",
      "margin-top": "-30px"
    }
  },
  Ye = {
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
  je = {
    key: 1,
    class: "white"
  },
  Je = {
    style: {
      "margin-top": "30px"
    }
  },
  Xe = {
    style: {},
    class: "center"
  },
  $e = {
    class: "zTextShadow2white",
    style: {
      "font-size": "3em",
      "font-weight": "800"
    }
  },
  es = {
    class: "flexCenter"
  },
  ss = {
    class: "container"
  },
  ts = {
    key: 0
  },
  ns = {
    class: "flexCenter",
    style: {
      "flex-wrap": "wrap",
      "column-gap": "10px",
      "row-gap": "10px"
    }
  },
  is = ["onClick"],
  os = {
    style: {
      "font-size": "0.8em",
      "margin-top": "10px"
    }
  },
  ls = {
    key: 1
  },
  as = {
    class: "boostBtns"
  },
  rs = {
    class: "flyBtnCont"
  },
  ds = {
    key: 0,
    style: {
      "font-weight": "800",
      "padding-bottom": "5px",
      color: "#daae7d"
    }
  },
  us = {
    key: 1,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_ali.png')"
    }
  },
  hs = {
    class: "flyBtnTitle"
  },
  ps = {
    class: "flyBtnCont"
  },
  cs = {
    key: 0,
    style: {
      "font-weight": "800",
      "padding-bottom": "5px",
      color: "#daae7d"
    }
  },
  ys = {
    key: 1,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_boost.png')"
    }
  },
  gs = {
    class: "flyBtnTitle nowrap"
  },
  ms = {
    class: "flyBtnCont"
  },
  vs = {
    key: 0,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_feed_need.png')"
    }
  },
  fs = {
    key: 1,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_feed_on.png')"
    }
  },
  ws = {
    key: 2,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_feed_off.png')"
    }
  },
  bs = {
    class: "flyBtnTitle nowrap"
  };

function ks(e, s, d, c, r, o) {
  var F;
  const m = g("top-bar"),
    f = g("van-badge"),
    C = g("van-count-down"),
    B = g("van-loading"),
    w = g("van-popup"),
    y = g("van-button"),
    T = g("alliance-g"),
    E = g("boost-g"),
    M = g("feed-g");
  return l(), a("div", null, [h(m, {
    onOpenFeedDetails: o.openFeedDetails
  }, null, 8, ["onOpenFeedDetails"]), t("div", {
    class: "globalMap",
    style: A({
      height: Math.round(r.map.h * o.k) + "px"
    }),
    onPointerdown: s[0] || (s[0] = (...n) => o.mapClick && o.mapClick(...n)),
    id: "globalMap"
  }, [(l(!0), a(v, null, _(o.extPoints, n => (l(), a("div", {
    key: n.position,
    class: "point",
    style: A({
      left: n.x + "px",
      top: n.y + ((n == null ? void 0 : n.animalLevel) > 0 ? Math.round(-25 * o.k) : 0) + "px"
    })
  }, [(n == null ? void 0 : n.animalLevel) > 0 ? (l(), a("div", oe, [t("img", {
    class: "buildingImg",
    src: o.getBuildingImg(n.animalKey, n.animalLevel),
    alt: "",
    style: A({
      width: Math.round(220 * o.k) + "px"
    })
  }, null, 12, le), t("div", {
    class: L(["level", {
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
  }, 1032, ["dot"]), r.animateAnimalKeys.includes(n.animalKey) ? (l(), a("span", ae)) : k("", !0)], 2)])) : (l(), a("div", {
    key: 1,
    class: L(["emptySlot", {
      winter: n.isWinter
    }]),
    style: A({
      width: Math.round(210 * o.k) + "px"
    })
  }, null, 6))], 4))), 128)), (l(!0), a(v, null, _(o.extPoints, n => (l(), a("div", {
    key: n.position,
    class: "pointClick",
    style: A({
      left: n.x + "px",
      top: n.y + "px",
      width: Math.round(210 * o.k) + "px"
    }),
    onClick: b => (n == null ? void 0 : n.animalLevel) > 0 ? o.upgradePopup(n) : o.buyPopup(n)
  }, null, 12, re))), 128)), (l(!0), a(v, null, _(r.chests, n => x((l(), a("div", {
    key: n.key,
    class: "pointChest center",
    onClick: b => o.openChest(n),
    style: A({
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
  }, null, 8, ue), h(C, {
    time: n.countdown,
    class: "timer",
    format: "mm:ss",
    onFinish: b => n.countdown = 0
  }, null, 8, ["time", "onFinish"])], 12, de)), [
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
    default: p(() => [t("div", he, [t("h1", null, i(e.t("Congratulations! You found it.")), 1), t("img", {
      src: r.activeChest.img,
      alt: "",
      style: {
        width: "100%",
        margin: "-30px 0"
      }
    }, null, 8, pe), r.isClaimChestLoading ? (l(), S(B, {
      key: 0
    })) : (l(), a("div", ce, [t("span", ye, i(e._number(r.activeChest.reward)), 1), s[13] || (s[13] = u("  ")), s[14] || (s[14] = t("span", {
      class: "coin60"
    }, null, -1))])), t("div", ge, [t("div", null, i(e.t("Surprises may appear on the map throughout the day. Be quick to collect them!")), 1)])])]),
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
    default: p(() => [t("div", me, "#" + i(r.openPoint.position), 1), o.availableForBuySpecial.length > 0 ? (l(), a("div", ve, [t("div", fe, i(e.t("Special Time Offer")), 1), (l(!0), a(v, null, _(o.availableForBuySpecial, n => (l(), a("div", {
      key: n.key,
      class: "animalForBuy"
    }, [t("div", null, [t("img", {
      src: "/assets/img/animals/" + n.key + ".png",
      alt: "",
      style: {
        width: "100px"
      }
    }, null, 8, we)]), t("div", be, [t("div", ke, i(n.title), 1), t("div", null, [u("+" + i(e._number(n.level1data.profit)) + " ", 1), s[15] || (s[15] = t("span", {
      class: "tph24"
    }, null, -1)), s[16] || (s[16] = u()), t("span", _e, i(e.t("Tokens per Hour")), 1)])]), t("div", null, [h(y, {
      round: "",
      type: "success",
      onClick: b => o.buy(n.key, n.level1data.price, !0),
      loading: r.isBuyLoading
    }, {
      default: p(() => [t("div", Ce, [t("span", Ae, i(e.t("Buy animal")), 1), s[17] || (s[17] = u()), s[18] || (s[18] = t("br", null, null, -1)), s[19] || (s[19] = t("span", {
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
    }, null, 8, ["time", "onFinish"])])]))), 128))])) : k("", !0), o.availableForBuyAnimalList.length > 0 ? (l(), a("div", Se, [t("div", Be, i(e.t("Select animal")), 1), (l(!0), a(v, null, _(o.availableForBuyAnimalList, n => (l(), a("div", {
      key: n.key,
      class: "animalForBuy"
    }, [t("div", null, [t("img", {
      src: "/assets/img/animals/" + n.key + ".png",
      alt: "",
      style: {
        width: "100px"
      }
    }, null, 8, Le)]), t("div", Te, [t("div", Fe, i(n.title), 1), t("div", null, [u("+" + i(e._number(n.level1data.profit)) + " ", 1), s[20] || (s[20] = t("span", {
      class: "tph24"
    }, null, -1)), s[21] || (s[21] = u()), t("span", Pe, i(e.t("Tokens per Hour")), 1)])]), t("div", null, [h(y, {
      round: "",
      type: "success",
      onClick: b => o.buy(n.key, n.level1data.price, !0),
      loading: r.isBuyLoading
    }, {
      default: p(() => [t("div", Ee, [t("span", Me, i(e.t("Buy animal")), 1), s[22] || (s[22] = u()), s[23] || (s[23] = t("br", null, null, -1)), s[24] || (s[24] = t("span", {
        class: "coin25"
      }, null, -1)), u("  " + i(e._number(n.level1data.price)), 1)])]),
      _: 2
    }, 1032, ["onClick", "loading"])])]))), 128))])) : (l(), a("div", Ne, [t("h1", null, i(e.t("New animals coming soon - follow our telegram channel.")), 1), h(y, {
      size: "large",
      type: "warning",
      onClick: e._ourTgClick
    }, {
      default: p(() => [u(i(e.t("Follow our channel")), 1)]),
      _: 1
    }, 8, ["onClick"])])), o.notAvailableForBuySpecial.length > 0 ? (l(), a("div", De, [t("div", xe, i(e.t("Unavailable offers")), 1), (l(!0), a(v, null, _(o.notAvailableForBuySpecial, n => (l(), a("div", {
      key: n.key,
      class: "animalForBuy"
    }, [t("div", null, [t("img", {
      src: "/assets/img/animals/" + n.key + ".png",
      alt: "",
      style: {
        width: "100px"
      }
    }, null, 8, He)]), t("div", Ke, [t("div", ze, i(n.title), 1), t("div", null, [u("+" + i(e._number(n.level1data.profit)) + " ", 1), s[25] || (s[25] = t("span", {
      class: "tph24"
    }, null, -1)), s[26] || (s[26] = u()), t("span", Ie, i(e.t("Tokens per Hour")), 1)])]), t("div", null, [n.timeToStart > 0 ? (l(), a("div", Oe, [s[27] || (s[27] = t("span", {
      class: "coin25"
    }, null, -1)), u("  " + i(e._number(n.level1data.price)) + " ", 1), s[28] || (s[28] = t("br", null, null, -1)), u(" " + i(e.t("Sales start in")) + " ", 1), h(C, {
      time: n.timeToStart,
      format: "mm:ss",
      onFinish: o.calcUnboughtAnimals,
      class: "center",
      style: {
        "margin-top": "5px",
        "font-weight": "700"
      }
    }, null, 8, ["time", "onFinish"])])) : (l(), a("div", Ue, i(e.t("Missed offer")), 1))])]))), 128))])) : k("", !0)]),
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
    default: p(() => [t("div", We, [t("div", {
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
      default: p(() => [t("span", Ge, i(e.t("Change location")), 1)]),
      _: 1
    }, 8, ["dot"])]), t("img", {
      class: "buildingImg",
      src: o.getBuildingImg(o.openAnimal.key, o.openAnimal.currentLevelData.level),
      alt: "",
      style: A([{
        width: Math.round(600 * o.k) + "px",
        top: Math.round(-80 * o.k) + "px",
        right: Math.round(10 * o.k) + "px"
      }, {
        position: "absolute"
      }])
    }, null, 12, Qe)]), t("div", Re, [t("div", Ve, [t("div", Ye, i(o.openAnimal.title), 1)]), t("div", null, [t("div", Ze, i(e.t("Level")) + " " + i(o.openAnimal.currentLevelData.level), 1), t("div", null, [u(i(e.t("Current {TOKEN_NAME} per hour:", {
      TOKEN_NAME: e.TOKEN_NAME
    })) + " ", 1), s[29] || (s[29] = t("span", {
      class: "tph24"
    }, null, -1)), u(i(e._number(o.openAnimal.currentLevelData.profit)), 1)]), o.openAnimal.isMaxLevel ? (l(), a("div", qe, i(e.t("This is the maximum level.")), 1)) : k("", !0), o.openAnimal.isMaxLevel ? k("", !0) : (l(), a("div", je, [t("div", null, [u(i(e.t("Next level {TOKEN_NAME} per hour:", {
      TOKEN_NAME: e.TOKEN_NAME
    })) + " ", 1), s[30] || (s[30] = t("span", {
      class: "tph24"
    }, null, -1)), u(i(e._number(o.openAnimal.nextLevelData.profit)), 1)]), t("div", Je, [t("div", Xe, [u(i(e.t("Increase at the next level: ")) + " ", 1), s[31] || (s[31] = t("br", null, null, -1)), s[32] || (s[32] = t("span", {
      class: "tph50"
    }, null, -1)), t("span", $e, "+" + i(e._number(o.openAnimal.nextLevelData.profit - o.openAnimal.currentLevelData.profit)), 1)]), h(y, {
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
        default: p(() => [t("div", es, [u(i(e.t("Level up ")) + "  ", 1), s[33] || (s[33] = t("span", {
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
      default: p(() => [t("div", ss, [t("h2", null, i(e.t("Change location for {animalTitle}", {
        animalTitle: o.openAnimal.title
      })), 1), o.freePoints.length > 0 ? (l(), a("div", ts, [t("div", ns, [(l(!0), a(v, null, _(o.freePoints, n => (l(), a("div", {
        class: L(["freePoint clicked flexCenter", {
          active: r.newLocation === n
        }]),
        onClick: b => r.newLocation = n
      }, i(n), 11, is))), 256))]), s[35] || (s[35] = t("br", null, null, -1)), h(y, {
        type: "success",
        size: "large",
        onClick: o.changeLocation,
        loading: r.isChangeLocationLoading
      }, {
        default: p(() => [u(i(e.t("Change")) + " " + i(e._number(o.priceChangeLocation)) + " ", 1), s[34] || (s[34] = t("span", {
          class: "coin25"
        }, null, -1))]),
        _: 1
      }, 8, ["onClick", "loading"]), t("div", os, [t("div", null, "• " + i(e.t("You can see the location number in the upper left corner when viewing the location.")), 1), t("div", null, "• " + i(e.t("You can only change to an empty location.")), 1), t("div", null, "• " + i(e.t("The cost of transfer depends on the level of the building.")), 1)])])) : (l(), a("div", ls, i(e.t("Тo location available")), 1))])]),
      _: 1
    }, 8, ["show"])]),
    _: 1
  }, 8, ["show"]), t("div", as, [h(f, {
    dot: !e.uAlliance.id
  }, {
    default: p(() => [t("div", {
      class: "flyBtn",
      onClick: s[7] || (s[7] = n => r.isShowAlliance = !0)
    }, [t("div", rs, [e.uAlliance.id ? (l(), a("span", ds, "+" + i(e.dbAllianceByLevel[e.uAlliance.level].bonus) + "%", 1)) : (l(), a("div", us))]), t("div", hs, i(e.t("Alliance")), 1)])]),
    _: 1
  }, 8, ["dot"]), e.uHero.tph > 0 ? (l(), S(f, {
    key: 0,
    dot: !((F = e.uHero) != null && F.boostPercent)
  }, {
    default: p(() => {
      var n;
      return [t("div", {
        class: "flyBtn",
        onClick: s[8] || (s[8] = b => r.isShowBoost = !0)
      }, [t("div", ps, [((n = e.uHero) == null ? void 0 : n.boostPercent) > 0 ? (l(), a("span", cs, "+" + i(e.uHero.boostPercent) + "%", 1)) : (l(), a("div", ys))]), t("div", gs, i(e.uHero.boostShortDateStr ? e.uHero.boostShortDateStr : e.t("Boost")), 1)])]
    }),
    _: 1
  }, 8, ["dot"])) : k("", !0), e.uHero.tph > 0 ? (l(), S(f, {
    key: 1,
    dot: !e.uFeed.autoFeedEndDateStr && e.uHero.tph > 1e3
  }, {
    default: p(() => {
      var n, b;
      return [t("div", {
        class: "flyBtn",
        onClick: s[9] || (s[9] = _s => r.isShowFeed = !0)
      }, [t("div", ms, [(n = e.uFeed) != null && n.isNeedFeed ? (l(), a("div", vs)) : (b = e.uFeed) != null && b.autoFeedEndDateStr ? (l(), a("div", fs)) : (l(), a("div", ws))]), t("div", bs, [e.uFeed.isNeedFeed ? (l(), a(v, {
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
    default: p(() => [h(E)]),
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
const Bs = P(ie, [
  ["render", ks],
  ["__scopeId", "data-v-e2e4e85b"]
]);
export {
  Bs as
  default
};