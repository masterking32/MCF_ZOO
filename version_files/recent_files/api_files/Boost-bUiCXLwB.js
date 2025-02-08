import {
  _ as H,
  c as r,
  a as s,
  d as h,
  t as o,
  e as b,
  b as p,
  w as l,
  r as u,
  o as a,
  F as f,
  f as v,
  g,
  h as M
} from "./index-hhInX-NY.js";
const C = {
    name: "Boost-g",
    components: {},
    async created() {},
    data() {
      return {
        activeTab: 0,
        isBuyLoading: !1,
        superOfferKeys: ["100_boost_for_24_hours", "200_boost_for_3_days", "500_boost_for_7_days"]
      }
    },
    computed: {
      extDbBoost() {
        return this._groupBy(this.dbBoost, "days")
      }
    },
    watch: {},
    methods: {
      async buyBoost(e) {
        if (e.price > this.uHero.coins) {
          this.stores.state.setLackOfCoin(e.price - this.uHero.coins), this.stores.state.setIsShowTopUp(!0);
          return
        }
        try {
          this.isBuyLoading = !0;
          const t = await this.apiCall("boostBuy", e.key);
          this.stores.user.setHero(t.hero)
        } catch (t) {
          this._catchError(t)
        }
        this.isBuyLoading = !1
      }
    }
  },
  I = {
    class: "container",
    style: {
      "padding-bottom": "90px"
    }
  },
  L = {
    class: "aniH1",
    style: {
      "line-height": "normal"
    }
  },
  O = {
    key: 0,
    class: "panelBrown center",
    style: {
      "margin-bottom": "20px"
    }
  },
  P = {
    style: {
      "font-weight": "800",
      "font-size": "1.4em"
    }
  },
  N = {
    class: "white"
  },
  G = {
    class: "list"
  },
  E = ["innerHTML"],
  S = ["innerHTML"],
  U = {
    key: 2
  };

function D(e, t, F, K, i, _) {
  var y;
  const m = u("van-button"),
    T = u("van-cell"),
    k = u("van-cell-group"),
    B = u("van-tab"),
    w = u("van-tabs");
  return a(), r("div", I, [s("h1", L, [h(o(e.t("Boost your profit per hour")) + " ", 1), t[1] || (t[1] = s("span", {
    class: "tph40"
  }, null, -1))]), ((y = e.uHero) == null ? void 0 : y.boostPercent) > 0 ? (a(), r("div", O, [s("div", P, o(e.t("Boost {COUNT}% working now!", {
    COUNT: e.uHero.boostPercent
  })), 1), s("div", N, [s("div", null, o(e.t("Time Remaining: {TIME}", {
    TIME: e.uHero.boostShortDateStr
  })), 1)])])) : b("", !0), s("ul", G, [s("li", null, o(e.t("Only one boost will work at a time — they don't stack.")), 1), s("li", null, o(e.t("The boost purchased last will be the one that remains active.")), 1), s("li", null, o(e.t("The boost starts working immediately after purchase.")), 1)]), p(w, {
    active: i.activeTab,
    "onUpdate:active": t[0] || (t[0] = c => i.activeTab = c),
    swipeable: !e.isRtl,
    type: "card",
    ellipsis: !1
  }, {
    default: l(() => [(a(!0), r(f, null, v(_.extDbBoost, (c, d) => (a(), g(B, null, {
      title: l(() => [s("span", null, o(d) + " " + o(Number(d) === 1 ? e.t("day") : e.t("days")), 1)]),
      default: l(() => [p(k, {
        inset: "",
        class: "noMargin",
        style: {
          "margin-top": "5px"
        }
      }, {
        default: l(() => [(a(!0), r(f, null, v(c, n => (a(), g(T, {
          key: n.key,
          center: "",
          class: M({
            bold: i.superOfferKeys.includes(n.key)
          })
        }, {
          title: l(() => [Number(d) === 1 ? (a(), r("div", {
            key: 0,
            innerHTML: e.t("+{value}% {IMG_TPH} boost for 1 day", {
              value: n.boost,
              IMG_TPH: e.IMG_TPH
            })
          }, null, 8, E)) : (a(), r("div", {
            key: 1,
            innerHTML: e.t("+{value}% {IMG_TPH} boost for {days} days", {
              value: n.boost,
              days: n.days,
              IMG_TPH: e.IMG_TPH
            })
          }, null, 8, S)), i.superOfferKeys.includes(n.key) ? (a(), r("span", U, o(e.t("SUPER OFFER")), 1)) : b("", !0)]),
          "right-icon": l(() => [p(m, {
            type: i.superOfferKeys.includes(n.key) ? "warning" : "success",
            size: "small",
            onClick: R => _.buyBoost(n),
            loading: i.isBuyLoading
          }, {
            default: l(() => [t[2] || (t[2] = s("span", {
              class: "coin25"
            }, null, -1)), h(" " + o(e._number(n.price)), 1)]),
            _: 2
          }, 1032, ["type", "onClick", "loading"])]),
          _: 2
        }, 1032, ["class"]))), 128))]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1024))), 256))]),
    _: 1
  }, 8, ["active", "swipeable"])])
}
const z = H(C, [
  ["render", D],
  ["__scopeId", "data-v-b8c1e105"]
]);
export {
  z as
  default
};