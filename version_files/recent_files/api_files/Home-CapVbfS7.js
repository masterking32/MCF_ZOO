import {
  _ as T,
  o as r,
  c as d,
  a as t,
  t as i,
  b as u,
  w as p,
  d as c,
  e as L,
  F as _,
  r as b,
  f as S,
  g,
  T as x,
  u as N,
  n as k,
  h as B,
  i as D,
  v as K
} from "./index-DDuDMKTN.js";
import H from "./Alliance-CJSgxW18.js";
import I from "./Boost-CCLkynU4.js";
const z = {
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
        return Math.round(e.priceInTph * this.uHero.tphBase)
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
  V = {
    key: 1,
    class: "panelBrown center",
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
  R = {
    class: "white"
  },
  q = {
    class: "list",
    style: {
      "margin-top": "5px"
    }
  },
  Z = {
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
    class: "list",
    style: {
      "margin-top": "5px"
    }
  };

function ee(e, s, a, h, l, o) {
  var A, f;
  const m = g("van-button"),
    v = g("van-cell"),
    C = g("van-cell-group");
  return r(), d("div", O, [t("h1", U, i(e.t("Feed the animals to keep token {TOKEN_NAME} mining going!", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), (A = e.uFeed) != null && A.isNeedFeed ? (r(), d("div", W, [t("div", G, i(e.t("Token mining has stopped. ")), 1), t("div", Q, i(e.t("The animals need to be fed.")), 1), u(m, {
    type: "warning",
    size: "large",
    onClick: s[0] || (s[0] = y => o.buyAutoFeed(o.instantItem)),
    loading: l.isBuyLoading,
    style: {
      "margin-top": "10px"
    }
  }, {
    default: p(() => [c(i(e.t("Feed the animals")) + " ", 1), s[1] || (s[1] = t("span", {
      class: "coin25"
    }, null, -1)), c(" " + i(e._number(o.calcPrice(o.instantItem))), 1)]),
    _: 1
  }, 8, ["loading"])])) : (f = e.uFeed) != null && f.autoFeedEndDateStr ? (r(), d("div", V, [t("div", Y, i(e.t("Automatic animal feeding is active")), 1), t("div", R, i(e.t("Time Remaining: {TIME}", {
    TIME: e.uFeed.autoFeedEndDateStr
  })), 1)])) : L("", !0), t("ul", q, [t("li", null, i(e.t("To keep your animals mining {TOKEN_NAME} tokens, you need to feed them regularly.", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), t("li", null, i(e.t("Feeding time occurs once at a random time during the day.")), 1), t("li", null, i(e.t("{TOKEN_NAME} token mining will resume after you feed your animals.", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), t("li", null, i(e.t("Check on your zoo often, and don't let your animals go hungry!")), 1)]), s[3] || (s[3] = t("br", null, null, -1)), s[4] || (s[4] = t("br", null, null, -1)), t("h2", Z, i(e.t("Buy automatic animal feeding")), 1), t("div", j, i(e.t("You can buy automatic feeding, and while it’s active, token mining will not stop.")), 1), u(C, {
    inset: "",
    class: "noMargin",
    style: {
      "margin-top": "5px"
    }
  }, {
    default: p(() => [(r(!0), d(_, null, b(e.dbAutoFeed.filter(y => y.time > 1), y => (r(), S(v, {
      key: y.key,
      center: ""
    }, {
      title: p(() => [+(y.time === 172800) == 1 ? (r(), d("div", {
        key: 0,
        innerHTML: e.t("1 day")
      }, null, 8, J)) : (r(), d("div", {
        key: 1,
        innerHTML: e.t("{days} days", {
          days: Math.round(y.time / (24 * 3600))
        })
      }, null, 8, X))]),
      "right-icon": p(() => [u(m, {
        type: "success",
        size: "small",
        onClick: P => o.buyAutoFeed(y),
        loading: l.isBuyLoading
      }, {
        default: p(() => [s[2] || (s[2] = t("span", {
          class: "coin25"
        }, null, -1)), c(" " + i(e._number(o.calcPrice(y))), 1)]),
        _: 2
      }, 1032, ["onClick", "loading"])]),
      _: 2
    }, 1024))), 128))]),
    _: 1
  }), t("ul", $, [t("li", null, i(e.t("Automatic feeding works one at a time — purchases do not stack.")), 1), t("li", null, i(e.t("If you buy a second one, the one that lasts longer will remain active.")), 1), t("li", null, i(e.t("It starts working immediately after purchase.")), 1), t("li", null, i(e.t("The amount of food needed for feeding depends on your Tokens per hour")), 1), t("li", null, i(e.t("When you buy automatic feeding, no additional food will be deducted.")), 1)])])
}
const se = T(z, [
    ["render", ee],
    ["__scopeId", "data-v-038a1553"]
  ]),
  te = {
    name: "Home-g",
    components: {
      BoostG: I,
      AllianceG: H,
      FeedG: se,
      TopBar: x
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
        let a = 1,
          h = 1;
        switch (e) {
          case 1:
          case 2:
            a = 1, h = 5;
            break;
          case 3:
            a = 2, h = 3;
            break;
          case 4:
          case 5:
          case 6:
            a = 4, h = 2;
            break;
          default:
            a = 7, h = 1;
            break
        }
        this.tick % h === 0 && (this.animateAnimalKeys.push(s.key), this.animateAnimalKeys.length > a && this.animateAnimalKeys.shift())
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
        let e = N();
        return (e.width.value > 768 ? 768 : e.width.value) / this.map.w
      },
      animalByPosition() {
        return this._arrayByKey(this.uAnimals, "position")
      },
      extPoints() {
        let e = this._cloneObject(this.points);
        return e.map(s => {
          if (s.x = Math.round(s.x * this.k), s.y = Math.round(s.y * this.k), s.position in this.animalByPosition) {
            const a = this.animalByPosition[s.position];
            if (a.key in this.dbAnimalsByKey) {
              s.animalKey = a.key, s.animalLevel = a.level, s.isAnimalCanBuy = !1;
              const h = this.dbAnimalsByKey[a.key].levels.find(o => o.level === a.level),
                l = this.dbAnimalsByKey[a.key].levels.find(o => o.level === a.level + 1);
              l && l.price <= this.uHero.coins && (s.isAnimalCanBuy = !0), s.animalProfit = h.profit
            }
          }
          return s
        }), e
      },
      freePoints() {
        return this.extPoints.filter(e => !e.animalKey).map(e => e.position)
      },
      availableForBuyAnimalList() {
        let e = this.dbAnimals.filter(s => !this.uAnimals.some(a => a.key === s.key));
        return e = e.map(s => {
          const a = s.levels.find(h => h.level === 1);
          return s.level1data = a, s
        }), e
      },
      openAnimal() {
        if (!("animalKey" in this.openPoint)) return null;
        let e = {};
        e = this.dbAnimalsByKey[this.openPoint.animalKey];
        const s = this.uAnimalsByKey[this.openPoint.animalKey].level,
          a = s + 1,
          h = this._arrayByKey(e.levels, "level"),
          l = h[s],
          o = !(a in h);
        let m = null;
        return o || (m = h[a]), e.isMaxLevel = o, e.currentLevelData = l, e.nextLevelData = m, e
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
      }
    },
    methods: {
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
        this.dbQuests.filter(a => a.key.includes("chest_")).forEach(a => {
          const h = new Date(a.actionTo.replace(" ", "T") + "Z"),
            l = new Date;
          if (h < l) {
            let o = e[Number(a.checkData) - 1] || null;
            if (o && !this.uQuests.find(m => m.key === a.key)) {
              a.x = Math.round(o.x * this.k), a.y = Math.round(o.y * this.k);
              const m = a.dateEnd.replace(" ", "T") + "Z",
                v = new Date(m);
              a.countdown = v - l;
              const C = a.key.includes("chest_s") ? "chest_s" : a.key.includes("chest_m") ? "chest_m" : "chest_l";
              a.img = "/assets/img/decor/" + C + ".png?v1", a.countdown > 0 && s.push(a)
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
      async buy(e, s, a = !1) {
        if (s > this.uHero.coins) {
          this.stores.state.setLackOfCoin(s - this.uHero.coins), this.stores.state.setIsShowTopUp(!0);
          return
        }
        this._vibrate("soft");
        try {
          this.isBuyLoading = !0;
          const h = await this.apiCall("buyAnimal", {
            position: this.openPoint.position,
            animalKey: e
          });
          this.stores.user.setHero(h.hero), this.stores.user.setAnimals(h.animals), this._animateMoneyFromCenter(s, "tph")
        } catch (h) {
          this._catchError(h)
        }
        a && (this.isBuyPopupShow = !1, this.isUpgradePopupShow = !1), this.isBuyLoading = !1
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
  ne = {
    key: 0
  },
  oe = ["src"],
  ie = {
    key: 0,
    class: "tph24"
  },
  le = ["onClick"],
  ae = ["onClick"],
  re = ["src"],
  de = {
    class: "container center"
  },
  ue = ["src"],
  he = {
    key: 1,
    class: "flexCenter"
  },
  pe = {
    style: {
      "font-size": "3em",
      "font-weight": "800"
    },
    class: "zTextShadow2sweet"
  },
  ce = {
    style: {
      "font-size": "0.8em",
      "margin-top": "10px"
    }
  },
  ye = {
    class: "header"
  },
  ge = {
    style: {
      padding: "5px",
      opacity: "0.5"
    }
  },
  me = {
    key: 0,
    class: "container"
  },
  ve = {
    style: {
      display: "flex",
      "column-gap": "10px",
      "align-items": "flex-end",
      "margin-top": "-30px"
    }
  },
  fe = {
    class: "title panelBrown",
    style: {
      "font-size": "2.5em",
      "font-weight": "800"
    }
  },
  we = ["src"],
  _e = {
    class: "desc"
  },
  ke = {
    class: "title"
  },
  be = {
    style: {
      "font-size": "0.8em"
    }
  },
  Ce = {
    class: ""
  },
  Le = {
    style: {
      "font-size": "0.7em"
    }
  },
  Ae = {
    key: 1,
    class: "container"
  },
  Be = {
    class: "header"
  },
  Se = {
    style: {
      opacity: "0.5"
    }
  },
  Pe = ["src"],
  Fe = {
    class: "container"
  },
  Te = {
    style: {
      display: "flex",
      "column-gap": "10px",
      "align-items": "flex-end",
      "margin-top": "-30px"
    }
  },
  Me = {
    class: "title panelBrown",
    style: {
      "font-size": "2.5em",
      "font-weight": "800"
    }
  },
  Ee = {
    class: "level"
  },
  xe = {
    key: 0
  },
  Ne = {
    key: 1,
    class: "white"
  },
  De = {
    style: {
      "margin-top": "30px"
    }
  },
  Ke = {
    style: {},
    class: "center"
  },
  He = {
    class: "zTextShadow2white",
    style: {
      "font-size": "3em",
      "font-weight": "800"
    }
  },
  Ie = {
    class: "flexCenter"
  },
  ze = {
    class: "container"
  },
  Oe = {
    key: 0
  },
  Ue = {
    class: "flexCenter",
    style: {
      "flex-wrap": "wrap",
      "column-gap": "10px",
      "row-gap": "10px"
    }
  },
  We = ["onClick"],
  Ge = {
    style: {
      "font-size": "0.8em",
      "margin-top": "10px"
    }
  },
  Qe = {
    key: 1
  },
  Ve = {
    class: "boostBtns"
  },
  Ye = {
    class: "flyBtnCont"
  },
  Re = {
    key: 0,
    style: {
      "font-weight": "800",
      "padding-bottom": "5px",
      color: "#daae7d"
    }
  },
  qe = {
    key: 1,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_ali.png')"
    }
  },
  Ze = {
    class: "flyBtnTitle"
  },
  je = {
    class: "flyBtnCont"
  },
  Je = {
    key: 0,
    style: {
      "font-weight": "800",
      "padding-bottom": "5px",
      color: "#daae7d"
    }
  },
  Xe = {
    key: 1,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_boost.png')"
    }
  },
  $e = {
    class: "flyBtnTitle nowrap"
  },
  es = {
    class: "flyBtnCont"
  },
  ss = {
    key: 0,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_feed_need.png')"
    }
  },
  ts = {
    key: 1,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_feed_on.png')"
    }
  },
  ns = {
    key: 2,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_feed_off.png')"
    }
  },
  os = {
    class: "flyBtnTitle nowrap"
  };

function is(e, s, a, h, l, o) {
  var F;
  const m = g("top-bar"),
    v = g("van-badge"),
    C = g("van-count-down"),
    A = g("van-loading"),
    f = g("van-popup"),
    y = g("van-button"),
    P = g("alliance-g"),
    M = g("boost-g"),
    E = g("feed-g");
  return r(), d("div", null, [u(m, {
    onOpenFeedDetails: o.openFeedDetails
  }, null, 8, ["onOpenFeedDetails"]), t("div", {
    class: "globalMap",
    style: k({
      height: Math.round(l.map.h * o.k) + "px"
    }),
    onPointerdown: s[0] || (s[0] = (...n) => o.mapClick && o.mapClick(...n)),
    id: "globalMap"
  }, [(r(!0), d(_, null, b(o.extPoints, n => (r(), d("div", {
    key: n.position,
    class: "point",
    style: k({
      left: n.x + "px",
      top: n.y + ((n == null ? void 0 : n.animalLevel) > 0 ? Math.round(-25 * o.k) : 0) + "px"
    })
  }, [(n == null ? void 0 : n.animalLevel) > 0 ? (r(), d("div", ne, [t("img", {
    class: "buildingImg",
    src: o.getBuildingImg(n.animalKey, n.animalLevel),
    alt: "",
    style: k({
      width: Math.round(220 * o.k) + "px"
    })
  }, null, 12, oe), t("div", {
    class: B(["level", {
      aniLevel: l.animateAnimalKeys.includes(n.animalKey)
    }])
  }, [u(v, {
    dot: n.isAnimalCanBuy,
    style: {
      padding: "3px 0"
    }
  }, {
    default: p(() => [c(" +" + i(e._numberShort(n.animalProfit)), 1)]),
    _: 2
  }, 1032, ["dot"]), l.animateAnimalKeys.includes(n.animalKey) ? (r(), d("span", ie)) : L("", !0)], 2)])) : (r(), d("div", {
    key: 1,
    class: B(["emptySlot", {
      winter: n.isWinter
    }]),
    style: k({
      width: Math.round(210 * o.k) + "px"
    })
  }, null, 6))], 4))), 128)), (r(!0), d(_, null, b(o.extPoints, n => (r(), d("div", {
    key: n.position,
    class: "pointClick",
    style: k({
      left: n.x + "px",
      top: n.y + "px",
      width: Math.round(210 * o.k) + "px"
    }),
    onClick: w => (n == null ? void 0 : n.animalLevel) > 0 ? o.upgradePopup(n) : o.buyPopup(n)
  }, null, 12, le))), 128)), (r(!0), d(_, null, b(l.chests, n => D((r(), d("div", {
    key: n.key,
    class: "pointChest center",
    onClick: w => o.openChest(n),
    style: k({
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
  }, null, 8, re), u(C, {
    time: n.countdown,
    class: "timer",
    format: "mm:ss",
    onFinish: w => n.countdown = 0
  }, null, 8, ["time", "onFinish"])], 12, ae)), [
    [K, n.countdown > 0]
  ])), 128))], 36), u(f, {
    show: l.isShowChest,
    "onUpdate:show": s[1] || (s[1] = n => l.isShowChest = n),
    closeable: "",
    round: "",
    style: {
      "min-width": "90%"
    },
    duration: .15
  }, {
    default: p(() => [t("div", de, [t("h1", null, i(e.t("Congratulations! You found it.")), 1), t("img", {
      src: l.activeChest.img,
      alt: "",
      style: {
        width: "100%",
        margin: "-30px 0"
      }
    }, null, 8, ue), l.isClaimChestLoading ? (r(), S(A, {
      key: 0
    })) : (r(), d("div", he, [t("span", pe, i(e._number(l.activeChest.reward)), 1), s[13] || (s[13] = c("  ")), s[14] || (s[14] = t("span", {
      class: "coin60"
    }, null, -1))])), t("div", ce, [t("div", null, i(e.t("Surprises may appear on the map throughout the day. Be quick to collect them!")), 1)])])]),
    _: 1
  }, 8, ["show"]), u(f, {
    show: l.isBuyPopupShow,
    "onUpdate:show": s[2] || (s[2] = n => l.isBuyPopupShow = n),
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
    default: p(() => [t("div", ye, [t("div", ge, "#" + i(l.openPoint.position), 1)]), o.availableForBuyAnimalList.length > 0 ? (r(), d("div", me, [t("div", ve, [t("div", fe, i(e.t("Select animal")), 1)]), (r(!0), d(_, null, b(o.availableForBuyAnimalList, n => (r(), d("div", {
      key: n.key,
      class: "animalForBuy"
    }, [t("div", null, [t("img", {
      src: "/assets/img/animals/" + n.key + ".png",
      alt: "",
      style: {
        width: "100px"
      }
    }, null, 8, we)]), t("div", _e, [t("div", ke, i(n.title), 1), t("div", null, [c("+" + i(e._number(n.level1data.profit)) + " ", 1), s[15] || (s[15] = t("span", {
      class: "tph24"
    }, null, -1)), s[16] || (s[16] = c()), t("span", be, i(e.t("Tokens per Hour")), 1)])]), t("div", null, [u(y, {
      round: "",
      type: "success",
      onClick: w => o.buy(n.key, n.level1data.price, !0),
      loading: l.isBuyLoading
    }, {
      default: p(() => [t("div", Ce, [t("span", Le, i(e.t("Buy animal")), 1), s[17] || (s[17] = c()), s[18] || (s[18] = t("br", null, null, -1)), s[19] || (s[19] = t("span", {
        class: "coin25"
      }, null, -1)), c("  " + i(e._number(n.level1data.price)), 1)])]),
      _: 2
    }, 1032, ["onClick", "loading"])])]))), 128))])) : (r(), d("div", Ae, [t("h1", null, i(e.t("New animals coming soon - follow our telegram channel.")), 1), u(y, {
      size: "large",
      type: "warning",
      onClick: e._ourTgClick
    }, {
      default: p(() => [c(i(e.t("Follow our channel")), 1)]),
      _: 1
    }, 8, ["onClick"])]))]),
    _: 1
  }, 8, ["show"]), u(f, {
    show: l.isUpgradePopupShow,
    "onUpdate:show": s[6] || (s[6] = n => l.isUpgradePopupShow = n),
    position: "bottom",
    closeable: "",
    round: "",
    class: "pointPopup",
    style: {
      border: "none"
    },
    duration: .15
  }, {
    default: p(() => [t("div", Be, [t("div", {
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        padding: "10px 20px 20px 10px",
        display: "inline-block"
      },
      onClick: s[3] || (s[3] = (...n) => o.showChangeLocation && o.showChangeLocation(...n))
    }, [u(v, {
      dot: !e._isOnboardingComplete(e.onBoard.changeLocation)
    }, {
      default: p(() => [t("span", Se, i(e.t("Change location")), 1)]),
      _: 1
    }, 8, ["dot"])]), t("img", {
      class: "buildingImg",
      src: o.getBuildingImg(o.openAnimal.key, o.openAnimal.currentLevelData.level),
      alt: "",
      style: k([{
        width: Math.round(600 * o.k) + "px",
        top: Math.round(-80 * o.k) + "px",
        right: Math.round(10 * o.k) + "px"
      }, {
        position: "absolute"
      }])
    }, null, 12, Pe)]), t("div", Fe, [t("div", Te, [t("div", Me, i(o.openAnimal.title), 1)]), t("div", null, [t("div", Ee, i(e.t("Level")) + " " + i(o.openAnimal.currentLevelData.level), 1), t("div", null, [c(i(e.t("Current {TOKEN_NAME} per hour:", {
      TOKEN_NAME: e.TOKEN_NAME
    })) + " ", 1), s[20] || (s[20] = t("span", {
      class: "tph24"
    }, null, -1)), c(i(e._number(o.openAnimal.currentLevelData.profit)), 1)]), o.openAnimal.isMaxLevel ? (r(), d("div", xe, i(e.t("This is the maximum level.")), 1)) : L("", !0), o.openAnimal.isMaxLevel ? L("", !0) : (r(), d("div", Ne, [t("div", null, [c(i(e.t("Next level {TOKEN_NAME} per hour:", {
      TOKEN_NAME: e.TOKEN_NAME
    })) + " ", 1), s[21] || (s[21] = t("span", {
      class: "tph24"
    }, null, -1)), c(i(e._number(o.openAnimal.nextLevelData.profit)), 1)]), t("div", De, [t("div", Ke, [c(i(e.t("Increase at the next level: ")) + " ", 1), s[22] || (s[22] = t("br", null, null, -1)), s[23] || (s[23] = t("span", {
      class: "tph50"
    }, null, -1)), t("span", He, "+" + i(e._number(o.openAnimal.nextLevelData.profit - o.openAnimal.currentLevelData.profit)), 1)]), u(y, {
      type: "success",
      size: "large",
      onClick: s[4] || (s[4] = n => o.buy(o.openAnimal.key, o.openAnimal.nextLevelData.price)),
      loading: l.isBuyLoading,
      style: {
        "margin-top": "15px"
      }
    }, {
      default: p(() => [u(v, {
        dot: o.openAnimal.nextLevelData.price <= e.uHero.coins
      }, {
        default: p(() => [t("div", Ie, [c(i(e.t("Level up ")) + "  ", 1), s[24] || (s[24] = t("span", {
          class: "coin33"
        }, null, -1)), c("  " + i(e._number(o.openAnimal.nextLevelData.price)), 1)])]),
        _: 1
      }, 8, ["dot"])]),
      _: 1
    }, 8, ["loading"])])]))])]), u(f, {
      show: l.isShowChangeLocation,
      "onUpdate:show": s[5] || (s[5] = n => l.isShowChangeLocation = n),
      closeable: "",
      round: ""
    }, {
      default: p(() => [t("div", ze, [t("h2", null, i(e.t("Change location for {animalTitle}", {
        animalTitle: o.openAnimal.title
      })), 1), o.freePoints.length > 0 ? (r(), d("div", Oe, [t("div", Ue, [(r(!0), d(_, null, b(o.freePoints, n => (r(), d("div", {
        class: B(["freePoint clicked flexCenter", {
          active: l.newLocation === n
        }]),
        onClick: w => l.newLocation = n
      }, i(n), 11, We))), 256))]), s[26] || (s[26] = t("br", null, null, -1)), u(y, {
        type: "success",
        size: "large",
        onClick: o.changeLocation,
        loading: l.isChangeLocationLoading
      }, {
        default: p(() => [c(i(e.t("Change")) + " " + i(e._number(o.priceChangeLocation)) + " ", 1), s[25] || (s[25] = t("span", {
          class: "coin25"
        }, null, -1))]),
        _: 1
      }, 8, ["onClick", "loading"]), t("div", Ge, [t("div", null, "• " + i(e.t("You can see the location number in the upper left corner when viewing the location.")), 1), t("div", null, "• " + i(e.t("You can only change to an empty location.")), 1), t("div", null, "• " + i(e.t("The cost of transfer depends on the level of the building.")), 1)])])) : (r(), d("div", Qe, i(e.t("Тo location available")), 1))])]),
      _: 1
    }, 8, ["show"])]),
    _: 1
  }, 8, ["show"]), t("div", Ve, [u(v, {
    dot: !e.uAlliance.id
  }, {
    default: p(() => [t("div", {
      class: "flyBtn",
      onClick: s[7] || (s[7] = n => l.isShowAlliance = !0)
    }, [t("div", Ye, [e.uAlliance.id ? (r(), d("span", Re, "+" + i(e.dbAllianceByLevel[e.uAlliance.level].bonus) + "%", 1)) : (r(), d("div", qe))]), t("div", Ze, i(e.t("Alliance")), 1)])]),
    _: 1
  }, 8, ["dot"]), u(v, {
    dot: !((F = e.uHero) != null && F.boostPercent)
  }, {
    default: p(() => {
      var n;
      return [t("div", {
        class: "flyBtn",
        onClick: s[8] || (s[8] = w => l.isShowBoost = !0)
      }, [t("div", je, [((n = e.uHero) == null ? void 0 : n.boostPercent) > 0 ? (r(), d("span", Je, "+" + i(e.uHero.boostPercent) + "%", 1)) : (r(), d("div", Xe))]), t("div", $e, i(e.uHero.boostShortDateStr ? e.uHero.boostShortDateStr : e.t("Boost")), 1)])]
    }),
    _: 1
  }, 8, ["dot"]), e.uProfile.isAlfaTester ? (r(), S(v, {
    key: 0,
    dot: !e.uFeed.autoFeedEndDateStr
  }, {
    default: p(() => {
      var n, w;
      return [t("div", {
        class: "flyBtn",
        onClick: s[9] || (s[9] = ls => l.isShowFeed = !0)
      }, [t("div", es, [(n = e.uFeed) != null && n.isNeedFeed ? (r(), d("div", ss)) : (w = e.uFeed) != null && w.autoFeedEndDateStr ? (r(), d("div", ts)) : (r(), d("div", ns))]), t("div", os, [e.uFeed.isNeedFeed ? (r(), d(_, {
        key: 0
      }, [c(i(e.t("HUNGER")), 1)], 64)) : (r(), d(_, {
        key: 1
      }, [c(i(e.uFeed.autoFeedEndDateStr ? e.uFeed.autoFeedEndDateStr : e.t("Feeding")), 1)], 64))])])]
    }),
    _: 1
  }, 8, ["dot"])) : L("", !0)]), u(f, {
    show: l.isShowAlliance,
    "onUpdate:show": s[10] || (s[10] = n => l.isShowAlliance = n),
    position: "right",
    closeable: "",
    round: "",
    style: {
      width: "calc(100vw)"
    },
    duration: .15
  }, {
    default: p(() => [u(P)]),
    _: 1
  }, 8, ["show"]), u(f, {
    show: l.isShowBoost,
    "onUpdate:show": s[11] || (s[11] = n => l.isShowBoost = n),
    position: "right",
    closeable: "",
    round: "",
    style: {
      width: "calc(100vw)"
    },
    duration: .15
  }, {
    default: p(() => [u(M)]),
    _: 1
  }, 8, ["show"]), u(f, {
    show: l.isShowFeed,
    "onUpdate:show": s[12] || (s[12] = n => l.isShowFeed = n),
    position: "right",
    closeable: "",
    round: "",
    style: {
      width: "calc(100vw)"
    },
    duration: .15
  }, {
    default: p(() => [u(E)]),
    _: 1
  }, 8, ["show"])])
}
const us = T(te, [
  ["render", is],
  ["__scopeId", "data-v-ba1669bd"]
]);
export {
  us as
  default
};