import {
  _ as T,
  o as r,
  c as d,
  a as s,
  t as i,
  b as u,
  w as p,
  d as c,
  e as k,
  F as b,
  r as C,
  f as S,
  g,
  T as E,
  u as N,
  n as _,
  h as B,
  i as D,
  v as K
} from "./index-CVidkp4S.js";
import H from "./Alliance-DSTEAJP_.js";
import z from "./Boost-DI0ENOhO.js";
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
        return Math.round(e.priceInTph * this.uHero.tphBase)
      },
      async buyAutoFeed(e) {
        if (this.calcPrice(e), e.price > this.uHero.coins) {
          this.stores.state.setLackOfCoin(e.price - this.uHero.coins), this.stores.state.setIsShowTopUp(!0);
          return
        }
        try {
          this.isBuyLoading = !0;
          const t = await this.apiCall("autoFeedBuy", e.key);
          this.stores.user.setFeed(t.feed), this.stores.user.setHero(t.hero)
        } catch (t) {
          this._catchError(t)
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
  Q = {
    style: {
      "font-weight": "800",
      "font-size": "1.4em"
    }
  },
  V = {
    class: "white"
  },
  Y = {
    key: 1,
    class: "panelBrown center",
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
  q = {
    class: "white"
  },
  R = {
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

function ee(e, t, a, h, l, o) {
  var A, f;
  const m = g("van-button"),
    v = g("van-cell"),
    L = g("van-cell-group");
  return r(), d("div", O, [s("h1", U, i(e.t("Feed the animals to keep token {TOKEN_NAME} mining going!", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), (A = e.uFeed) != null && A.isNeedFeed ? (r(), d("div", W, [s("div", Q, i(e.t("Token mining has stopped. ")), 1), s("div", V, i(e.t("The animals need to be fed.")), 1), u(m, {
    type: "warning",
    size: "large",
    onClick: t[0] || (t[0] = y => o.buyAutoFeed(o.instantItem)),
    loading: l.isBuyLoading,
    style: {
      "margin-top": "10px"
    }
  }, {
    default: p(() => [c(i(e.t("Feed the animals")) + " ", 1), t[1] || (t[1] = s("span", {
      class: "coin25"
    }, null, -1)), c(" " + i(e._number(o.calcPrice(o.instantItem))), 1)]),
    _: 1
  }, 8, ["loading"])])) : (f = e.uFeed) != null && f.autoFeedEndDateStr ? (r(), d("div", Y, [s("div", G, i(e.t("Automatic animal feeding is active")), 1), s("div", q, i(e.t("Time Remaining: {TIME}", {
    TIME: e.uFeed.autoFeedEndDateStr
  })), 1)])) : k("", !0), s("ul", R, [s("li", null, i(e.t("To keep your animals mining {TOKEN_NAME} tokens, you need to feed them regularly.", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), s("li", null, i(e.t("Feeding time occurs once at a random time during the day.")), 1), s("li", null, i(e.t("{TOKEN_NAME} token mining will resume after you feed your animals.", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), s("li", null, i(e.t("Check on your zoo often, and don't let your animals go hungry!")), 1)]), t[3] || (t[3] = s("br", null, null, -1)), t[4] || (t[4] = s("br", null, null, -1)), s("h2", Z, i(e.t("Buy automatic animal feeding")), 1), s("div", j, i(e.t("You can buy automatic feeding, and while it’s active, token mining will not stop.")), 1), u(L, {
    inset: "",
    class: "noMargin",
    style: {
      "margin-top": "5px"
    }
  }, {
    default: p(() => [(r(!0), d(b, null, C(e.dbAutoFeed.filter(y => y.time > 1), y => (r(), S(v, {
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
        default: p(() => [t[2] || (t[2] = s("span", {
          class: "coin25"
        }, null, -1)), c(" " + i(e._number(o.calcPrice(y))), 1)]),
        _: 2
      }, 1032, ["onClick", "loading"])]),
      _: 2
    }, 1024))), 128))]),
    _: 1
  }), s("ul", $, [s("li", null, i(e.t("Automatic feeding works one at a time — purchases do not stack.")), 1), s("li", null, i(e.t("If you buy a second one, the one that lasts longer will remain active.")), 1), s("li", null, i(e.t("It starts working immediately after purchase.")), 1), s("li", null, i(e.t("The amount of food needed for feeding depends on your Tokens per hour")), 1), s("li", null, i(e.t("When you buy automatic feeding, no additional food will be deducted.")), 1)])])
}
const te = T(I, [
    ["render", ee],
    ["__scopeId", "data-v-038a1553"]
  ]),
  se = {
    name: "Home-g",
    components: {
      BoostG: z,
      AllianceG: H,
      FeedG: te,
      TopBar: E
    },
    async created() {
      this.stores.state.setPageSettings()
    },
    mounted() {
      setInterval((function() {
        if (this.uAnimals.length < 1) return;
        this.tick++;
        const e = this.uAnimals.length,
          t = this.uAnimals[Math.floor(Math.random() * e)];
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
        this.tick % h === 0 && (this.animateAnimalKeys.push(t.key), this.animateAnimalKeys.length > a && this.animateAnimalKeys.shift())
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
        return e.map(t => {
          if (t.x = Math.round(t.x * this.k), t.y = Math.round(t.y * this.k), t.position in this.animalByPosition) {
            const a = this.animalByPosition[t.position];
            if (a.key in this.dbAnimalsByKey) {
              t.animalKey = a.key, t.animalLevel = a.level, t.isAnimalCanBuy = !1;
              const h = this.dbAnimalsByKey[a.key].levels.find(o => o.level === a.level),
                l = this.dbAnimalsByKey[a.key].levels.find(o => o.level === a.level + 1);
              l && l.price <= this.uHero.coins && (t.isAnimalCanBuy = !0), t.animalProfit = h.profit
            }
          }
          return t
        }), e
      },
      freePoints() {
        return this.extPoints.filter(e => !e.animalKey).map(e => e.position)
      },
      availableForBuyAnimalList() {
        let e = this.dbAnimals.filter(t => !this.uAnimals.some(a => a.key === t.key));
        return e = e.map(t => {
          const a = t.levels.find(h => h.level === 1);
          return t.level1data = a, t
        }), e
      },
      openAnimal() {
        if (!("animalKey" in this.openPoint)) return null;
        let e = {};
        e = this.dbAnimalsByKey[this.openPoint.animalKey];
        const t = this.uAnimalsByKey[this.openPoint.animalKey].level,
          a = t + 1,
          h = this._arrayByKey(e.levels, "level"),
          l = h[t],
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
        let t = [];
        this.dbQuests.filter(a => a.key.includes("chest_")).forEach(a => {
          const h = new Date(a.title.replace(" ", "T") + "Z"),
            l = new Date;
          if (h < l) {
            let o = e[Number(a.checkData) - 1] || null;
            if (o && !this.uQuests.find(m => m.key === a.key)) {
              a.x = Math.round(o.x * this.k), a.y = Math.round(o.y * this.k);
              const m = a.dateEnd.replace(" ", "T") + "Z",
                v = new Date(m);
              a.countdown = v - l;
              const L = a.key.includes("chest_s") ? "chest_s" : a.key.includes("chest_m") ? "chest_m" : "chest_l";
              a.img = "/assets/img/decor/" + L + ".png?v1", a.countdown > 0 && t.push(a)
            }
          }
        }), this.chests = t
      },
      async openChest(e) {
        this.activeChest = e, this.isShowChest = !0;
        try {
          this.isClaimChestLoading = !0;
          const t = await this.apiCall("claimQuest", [e.key]);
          this._animateMoneyFromCenter(e.reward), this.stores.user.setHero(t.hero), this.stores.user.setQuests(t.quests)
        } catch (t) {
          this._catchError(t)
        }
        this.isClaimChestLoading = !1
      },
      async showChangeLocation() {
        this.isShowChangeLocation = !0, await this._completeOnboarding(this.onBoard.changeLocation)
      },
      getBuildingImg(e, t = 1) {
        return ["doge", "pepe", "capybara", "platypus"].includes(e) ? "/assets/img/buildings/special/" + e + ".png?v2" : t <= 10 ? "/assets/img/buildings/" + t + "/" + e + ".png?v2" : "/assets/img/buildings/10/" + e + ".png?v2"
      },
      buyPopup(e) {
        this.openPoint = e, this.isBuyPopupShow = !0
      },
      upgradePopup(e) {
        this.openPoint = e, this.isUpgradePopupShow = !0
      },
      async buy(e, t, a = !1) {
        if (t > this.uHero.coins) {
          this.stores.state.setLackOfCoin(t - this.uHero.coins), this.stores.state.setIsShowTopUp(!0);
          return
        }
        this._vibrate("soft");
        try {
          this.isBuyLoading = !0;
          const h = await this.apiCall("buyAnimal", {
            position: this.openPoint.position,
            animalKey: e
          });
          this.stores.user.setHero(h.hero), this.stores.user.setAnimals(h.animals), this._animateMoneyFromCenter(t, "tph")
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
  xe = {
    class: "level"
  },
  Ee = {
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
  ze = {
    class: "flexCenter"
  },
  Ie = {
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
  Qe = {
    style: {
      "font-size": "0.8em",
      "margin-top": "10px"
    }
  },
  Ve = {
    key: 1
  },
  Ye = {
    class: "boostBtns"
  },
  Ge = {
    class: "flyBtnCont"
  },
  qe = {
    key: 0,
    style: {
      "font-weight": "800",
      "padding-bottom": "5px",
      color: "#daae7d"
    }
  },
  Re = {
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
  et = {
    class: "flyBtnCont"
  },
  tt = {
    key: 0,
    style: {
      "font-weight": "800",
      color: "red",
      "font-size": "0.9em"
    },
    class: "center"
  },
  st = {
    key: 1,
    style: {
      "font-weight": "800",
      "padding-bottom": "5px",
      color: "green"
    }
  },
  nt = {
    key: 2,
    class: "flyBtnIcon",
    style: {
      "background-image": "url('/assets/img/decor/icon_boost.png')"
    }
  },
  ot = {
    key: 0,
    class: "flyBtnTitle nowrap"
  };

function it(e, t, a, h, l, o) {
  var F;
  const m = g("top-bar"),
    v = g("van-badge"),
    L = g("van-count-down"),
    A = g("van-loading"),
    f = g("van-popup"),
    y = g("van-button"),
    P = g("alliance-g"),
    M = g("boost-g"),
    x = g("feed-g");
  return r(), d("div", null, [u(m, {
    onOpenFeedDetails: o.openFeedDetails
  }, null, 8, ["onOpenFeedDetails"]), s("div", {
    class: "globalMap",
    style: _({
      height: Math.round(l.map.h * o.k) + "px"
    }),
    onPointerdown: t[0] || (t[0] = (...n) => o.mapClick && o.mapClick(...n)),
    id: "globalMap"
  }, [(r(!0), d(b, null, C(o.extPoints, n => (r(), d("div", {
    key: n.position,
    class: "point",
    style: _({
      left: n.x + "px",
      top: n.y + ((n == null ? void 0 : n.animalLevel) > 0 ? Math.round(-25 * o.k) : 0) + "px"
    })
  }, [(n == null ? void 0 : n.animalLevel) > 0 ? (r(), d("div", ne, [s("img", {
    class: "buildingImg",
    src: o.getBuildingImg(n.animalKey, n.animalLevel),
    alt: "",
    style: _({
      width: Math.round(220 * o.k) + "px"
    })
  }, null, 12, oe), s("div", {
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
  }, 1032, ["dot"]), l.animateAnimalKeys.includes(n.animalKey) ? (r(), d("span", ie)) : k("", !0)], 2)])) : (r(), d("div", {
    key: 1,
    class: B(["emptySlot", {
      winter: n.isWinter
    }]),
    style: _({
      width: Math.round(210 * o.k) + "px"
    })
  }, null, 6))], 4))), 128)), (r(!0), d(b, null, C(o.extPoints, n => (r(), d("div", {
    key: n.position,
    class: "pointClick",
    style: _({
      left: n.x + "px",
      top: n.y + "px",
      width: Math.round(210 * o.k) + "px"
    }),
    onClick: w => (n == null ? void 0 : n.animalLevel) > 0 ? o.upgradePopup(n) : o.buyPopup(n)
  }, null, 12, le))), 128)), (r(!0), d(b, null, C(l.chests, n => D((r(), d("div", {
    key: n.key,
    class: "pointChest center",
    onClick: w => o.openChest(n),
    style: _({
      left: n.x + "px",
      top: n.y + "px",
      width: Math.round(130 * o.k) + "px"
    })
  }, [s("img", {
    src: n.img,
    alt: "",
    style: {
      width: "100%"
    }
  }, null, 8, re), u(L, {
    time: n.countdown,
    class: "timer",
    format: "mm:ss",
    onFinish: w => n.countdown = 0
  }, null, 8, ["time", "onFinish"])], 12, ae)), [
    [K, n.countdown > 0]
  ])), 128))], 36), u(f, {
    show: l.isShowChest,
    "onUpdate:show": t[1] || (t[1] = n => l.isShowChest = n),
    closeable: "",
    round: "",
    style: {
      "min-width": "90%"
    },
    duration: .15
  }, {
    default: p(() => [s("div", de, [s("h1", null, i(e.t("Congratulations! You found it.")), 1), s("img", {
      src: l.activeChest.img,
      alt: "",
      style: {
        width: "100%",
        margin: "-30px 0"
      }
    }, null, 8, ue), l.isClaimChestLoading ? (r(), S(A, {
      key: 0
    })) : (r(), d("div", he, [s("span", pe, i(e._number(l.activeChest.reward)), 1), t[13] || (t[13] = c("  ")), t[14] || (t[14] = s("span", {
      class: "coin60"
    }, null, -1))])), s("div", ce, [s("div", null, i(e.t("Surprises may appear on the map throughout the day. Be quick to collect them!")), 1)])])]),
    _: 1
  }, 8, ["show"]), u(f, {
    show: l.isBuyPopupShow,
    "onUpdate:show": t[2] || (t[2] = n => l.isBuyPopupShow = n),
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
    default: p(() => [s("div", ye, [s("div", ge, "#" + i(l.openPoint.position), 1)]), o.availableForBuyAnimalList.length > 0 ? (r(), d("div", me, [s("div", ve, [s("div", fe, i(e.t("Select animal")), 1)]), (r(!0), d(b, null, C(o.availableForBuyAnimalList, n => (r(), d("div", {
      key: n.key,
      class: "animalForBuy"
    }, [s("div", null, [s("img", {
      src: "/assets/img/animals/" + n.key + ".png",
      alt: "",
      style: {
        width: "100px"
      }
    }, null, 8, we)]), s("div", _e, [s("div", ke, i(n.title), 1), s("div", null, [c("+" + i(e._number(n.level1data.profit)) + " ", 1), t[15] || (t[15] = s("span", {
      class: "tph24"
    }, null, -1)), t[16] || (t[16] = c()), s("span", be, i(e.t("Tokens per Hour")), 1)])]), s("div", null, [u(y, {
      round: "",
      type: "success",
      onClick: w => o.buy(n.key, n.level1data.price, !0),
      loading: l.isBuyLoading
    }, {
      default: p(() => [s("div", Ce, [s("span", Le, i(e.t("Buy animal")), 1), t[17] || (t[17] = c()), t[18] || (t[18] = s("br", null, null, -1)), t[19] || (t[19] = s("span", {
        class: "coin25"
      }, null, -1)), c("  " + i(e._number(n.level1data.price)), 1)])]),
      _: 2
    }, 1032, ["onClick", "loading"])])]))), 128))])) : (r(), d("div", Ae, [s("h1", null, i(e.t("New animals coming soon - follow our telegram channel.")), 1), u(y, {
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
    "onUpdate:show": t[6] || (t[6] = n => l.isUpgradePopupShow = n),
    position: "bottom",
    closeable: "",
    round: "",
    class: "pointPopup",
    style: {
      border: "none"
    },
    duration: .15
  }, {
    default: p(() => [s("div", Be, [s("div", {
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        padding: "10px 20px 20px 10px",
        display: "inline-block"
      },
      onClick: t[3] || (t[3] = (...n) => o.showChangeLocation && o.showChangeLocation(...n))
    }, [u(v, {
      dot: !e._isOnboardingComplete(e.onBoard.changeLocation)
    }, {
      default: p(() => [s("span", Se, i(e.t("Change location")), 1)]),
      _: 1
    }, 8, ["dot"])]), s("img", {
      class: "buildingImg",
      src: o.getBuildingImg(o.openAnimal.key, o.openAnimal.currentLevelData.level),
      alt: "",
      style: _([{
        width: Math.round(600 * o.k) + "px",
        top: Math.round(-80 * o.k) + "px",
        right: Math.round(10 * o.k) + "px"
      }, {
        position: "absolute"
      }])
    }, null, 12, Pe)]), s("div", Fe, [s("div", Te, [s("div", Me, i(o.openAnimal.title), 1)]), s("div", null, [s("div", xe, i(e.t("Level")) + " " + i(o.openAnimal.currentLevelData.level), 1), s("div", null, [c(i(e.t("Current {TOKEN_NAME} per hour:", {
      TOKEN_NAME: e.TOKEN_NAME
    })) + " ", 1), t[20] || (t[20] = s("span", {
      class: "tph24"
    }, null, -1)), c(i(e._number(o.openAnimal.currentLevelData.profit)), 1)]), o.openAnimal.isMaxLevel ? (r(), d("div", Ee, i(e.t("This is the maximum level.")), 1)) : k("", !0), o.openAnimal.isMaxLevel ? k("", !0) : (r(), d("div", Ne, [s("div", null, [c(i(e.t("Next level {TOKEN_NAME} per hour:", {
      TOKEN_NAME: e.TOKEN_NAME
    })) + " ", 1), t[21] || (t[21] = s("span", {
      class: "tph24"
    }, null, -1)), c(i(e._number(o.openAnimal.nextLevelData.profit)), 1)]), s("div", De, [s("div", Ke, [c(i(e.t("Increase at the next level: ")) + " ", 1), t[22] || (t[22] = s("br", null, null, -1)), t[23] || (t[23] = s("span", {
      class: "tph50"
    }, null, -1)), s("span", He, "+" + i(e._number(o.openAnimal.nextLevelData.profit - o.openAnimal.currentLevelData.profit)), 1)]), u(y, {
      type: "success",
      size: "large",
      onClick: t[4] || (t[4] = n => o.buy(o.openAnimal.key, o.openAnimal.nextLevelData.price)),
      loading: l.isBuyLoading,
      style: {
        "margin-top": "15px"
      }
    }, {
      default: p(() => [u(v, {
        dot: o.openAnimal.nextLevelData.price <= e.uHero.coins
      }, {
        default: p(() => [s("div", ze, [c(i(e.t("Level up ")) + "  ", 1), t[24] || (t[24] = s("span", {
          class: "coin33"
        }, null, -1)), c("  " + i(e._number(o.openAnimal.nextLevelData.price)), 1)])]),
        _: 1
      }, 8, ["dot"])]),
      _: 1
    }, 8, ["loading"])])]))])]), u(f, {
      show: l.isShowChangeLocation,
      "onUpdate:show": t[5] || (t[5] = n => l.isShowChangeLocation = n),
      closeable: "",
      round: ""
    }, {
      default: p(() => [s("div", Ie, [s("h2", null, i(e.t("Change location for {animalTitle}", {
        animalTitle: o.openAnimal.title
      })), 1), o.freePoints.length > 0 ? (r(), d("div", Oe, [s("div", Ue, [(r(!0), d(b, null, C(o.freePoints, n => (r(), d("div", {
        class: B(["freePoint clicked flexCenter", {
          active: l.newLocation === n
        }]),
        onClick: w => l.newLocation = n
      }, i(n), 11, We))), 256))]), t[26] || (t[26] = s("br", null, null, -1)), u(y, {
        type: "success",
        size: "large",
        onClick: o.changeLocation,
        loading: l.isChangeLocationLoading
      }, {
        default: p(() => [c(i(e.t("Change")) + " " + i(e._number(o.priceChangeLocation)) + " ", 1), t[25] || (t[25] = s("span", {
          class: "coin25"
        }, null, -1))]),
        _: 1
      }, 8, ["onClick", "loading"]), s("div", Qe, [s("div", null, "• " + i(e.t("You can see the location number in the upper left corner when viewing the location.")), 1), s("div", null, "• " + i(e.t("You can only change to an empty location.")), 1), s("div", null, "• " + i(e.t("The cost of transfer depends on the level of the building.")), 1)])])) : (r(), d("div", Ve, i(e.t("Тo location available")), 1))])]),
      _: 1
    }, 8, ["show"])]),
    _: 1
  }, 8, ["show"]), s("div", Ye, [u(v, {
    dot: !e.uAlliance.id
  }, {
    default: p(() => [s("div", {
      class: "flyBtn",
      onClick: t[7] || (t[7] = n => l.isShowAlliance = !0)
    }, [s("div", Ge, [e.uAlliance.id ? (r(), d("span", qe, "+" + i(e.dbAllianceByLevel[e.uAlliance.level].bonus) + "%", 1)) : (r(), d("div", Re))]), s("div", Ze, i(e.t("Alliance")), 1)])]),
    _: 1
  }, 8, ["dot"]), u(v, {
    dot: !((F = e.uHero) != null && F.boostPercent)
  }, {
    default: p(() => {
      var n;
      return [s("div", {
        class: "flyBtn",
        onClick: t[8] || (t[8] = w => l.isShowBoost = !0)
      }, [s("div", je, [((n = e.uHero) == null ? void 0 : n.boostPercent) > 0 ? (r(), d("span", Je, "+" + i(e.uHero.boostPercent) + "%", 1)) : (r(), d("div", Xe))]), s("div", $e, i(e.uHero.boostShortDateStr ? e.uHero.boostShortDateStr : e.t("Boost")), 1)])]
    }),
    _: 1
  }, 8, ["dot"]), e.uProfile.isAlfaTester ? (r(), S(v, {
    key: 0,
    dot: !e.uFeed.autoFeedEndDateStr
  }, {
    default: p(() => {
      var n, w;
      return [s("div", {
        class: "flyBtn",
        onClick: t[9] || (t[9] = lt => l.isShowFeed = !0)
      }, [s("div", et, [(n = e.uFeed) != null && n.isNeedFeed ? (r(), d("span", tt, i(e.t("Needs feeding!")), 1)) : (w = e.uFeed) != null && w.autoFeedEndDateStr ? (r(), d("span", st, "Auto")) : (r(), d("div", nt))]), e.uFeed.isNeedFeed ? k("", !0) : (r(), d("div", ot, i(e.uFeed.autoFeedEndDateStr ? e.uFeed.autoFeedEndDateStr : e.t("Feeding")), 1))])]
    }),
    _: 1
  }, 8, ["dot"])) : k("", !0)]), u(f, {
    show: l.isShowAlliance,
    "onUpdate:show": t[10] || (t[10] = n => l.isShowAlliance = n),
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
    "onUpdate:show": t[11] || (t[11] = n => l.isShowBoost = n),
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
    "onUpdate:show": t[12] || (t[12] = n => l.isShowFeed = n),
    position: "right",
    closeable: "",
    round: "",
    style: {
      width: "calc(100vw)"
    },
    duration: .15
  }, {
    default: p(() => [u(x)]),
    _: 1
  }, 8, ["show"])])
}
const ut = T(se, [
  ["render", it],
  ["__scopeId", "data-v-0751f753"]
]);
export {
  ut as
  default
};