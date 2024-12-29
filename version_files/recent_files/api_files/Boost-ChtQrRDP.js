import {
  _ as k,
  c as i,
  a as t,
  d as b,
  t as s,
  e as w,
  b as p,
  w as a,
  g as l,
  o as n,
  F as _,
  r as v,
  f as m
} from "./index-66seyjvw.js";
const M = {
    name: "Boost-g",
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
          const o = await this.apiCall("boostBuy", e.key);
          this.stores.user.setHero(o.hero)
        } catch (o) {
          this._catchError(o)
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
  C = {
    key: 0,
    class: "panelBrown center",
    style: {
      "margin-bottom": "20px"
    }
  },
  N = {
    style: {
      "font-weight": "800",
      "font-size": "1.4em"
    }
  },
  P = {
    class: "white"
  },
  G = {
    class: "list"
  },
  D = ["innerHTML"],
  E = ["innerHTML"];

function O(e, o, S, U, u, y) {
  var h;
  const g = l("van-button"),
    f = l("van-cell"),
    T = l("van-cell-group"),
    B = l("van-tab"),
    H = l("van-tabs");
  return n(), i("div", I, [t("h1", L, [b(s(e.t("Boost your profit per hour")) + " ", 1), o[1] || (o[1] = t("span", {
    class: "tph40"
  }, null, -1))]), ((h = e.uHero) == null ? void 0 : h.boostPercent) > 0 ? (n(), i("div", C, [t("div", N, s(e.t("Boost {COUNT}% working now!", {
    COUNT: e.uHero.boostPercent
  })), 1), t("div", P, [t("div", null, s(e.t("Time Remaining: {TIME}", {
    TIME: e.uHero.boostShortDateStr
  })), 1)])])) : w("", !0), t("ul", G, [t("li", null, s(e.t("Only one boost will work at a time — they don't stack.")), 1), t("li", null, s(e.t("If you buy a second one, the one that lasts longer will remain active.")), 1), t("li", null, s(e.t("The boost starts working immediately after purchase.")), 1)]), p(H, {
    active: u.activeTab,
    "onUpdate:active": o[0] || (o[0] = c => u.activeTab = c),
    swipeable: !e.isRtl,
    type: "card",
    ellipsis: !1
  }, {
    default: a(() => [(n(!0), i(_, null, v(y.extDbBoost, (c, d) => (n(), m(B, null, {
      title: a(() => [t("span", null, s(d) + " " + s(Number(d) === 1 ? e.t("day") : e.t("days")), 1)]),
      default: a(() => [p(T, {
        inset: "",
        class: "noMargin",
        style: {
          "margin-top": "5px"
        }
      }, {
        default: a(() => [(n(!0), i(_, null, v(c, r => (n(), m(f, {
          key: r.key,
          center: ""
        }, {
          title: a(() => [Number(d) === 1 ? (n(), i("div", {
            key: 0,
            innerHTML: e.t("+{value}% {IMG_TPH} boost for 1 day", {
              value: r.boost,
              IMG_TPH: e.IMG_TPH
            })
          }, null, 8, D)) : (n(), i("div", {
            key: 1,
            innerHTML: e.t("+{value}% {IMG_TPH} boost for {days} days", {
              value: r.boost,
              days: r.days,
              IMG_TPH: e.IMG_TPH
            })
          }, null, 8, E))]),
          "right-icon": a(() => [p(g, {
            type: "success",
            size: "small",
            onClick: V => y.buyBoost(r),
            loading: u.isBuyLoading
          }, {
            default: a(() => [o[2] || (o[2] = t("span", {
              class: "coin25"
            }, null, -1)), b(" " + s(e._number(r.price)), 1)]),
            _: 2
          }, 1032, ["onClick", "loading"])]),
          _: 2
        }, 1024))), 128))]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1024))), 256))]),
    _: 1
  }, 8, ["active", "swipeable"])])
}
const F = k(M, [
  ["render", O],
  ["__scopeId", "data-v-465c0bc8"]
]);
export {
  F as
  default
};