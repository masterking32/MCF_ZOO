import {
  _ as k,
  c as i,
  a as e,
  d as y,
  t as o,
  e as w,
  b as p,
  w as a,
  g as l,
  o as n,
  F as _,
  r as v,
  f as m
} from "./index-B1StPXNy.js";
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
      async buyBoost(t) {
        if (t.price > this.uHero.coins) {
          this.stores.state.setLackOfCoin(t.price - this.uHero.coins), this.stores.state.setIsShowTopUp(!0);
          return
        }
        try {
          this.isBuyLoading = !0;
          const s = await this.apiCall("boostBuy", t.key);
          this.stores.user.setHero(s.hero)
        } catch (s) {
          this._catchError(s)
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

function O(t, s, S, U, u, h) {
  var b;
  const f = l("van-button"),
    g = l("van-cell"),
    T = l("van-cell-group"),
    B = l("van-tab"),
    H = l("van-tabs");
  return n(), i("div", I, [e("h1", L, [y(o(t.t("Boost your profit per hour")) + " ", 1), s[1] || (s[1] = e("span", {
    class: "tph40"
  }, null, -1))]), ((b = t.uHero) == null ? void 0 : b.boostPercent) > 0 ? (n(), i("div", C, [e("div", N, o(t.t("Boost {COUNT}% working now!", {
    COUNT: t.uHero.boostPercent
  })), 1), e("div", P, [e("div", null, o(t.t("Time Remaining: {TIME}", {
    TIME: t.uHero.boostShortDateStr
  })), 1)])])) : w("", !0), e("ul", G, [e("li", null, o(t.t("Only one boost will work at a time — they don't stack.")), 1), e("li", null, o(t.t("The boost purchased last will be the one that remains active.")), 1), e("li", null, o(t.t("The boost starts working immediately after purchase.")), 1)]), p(H, {
    active: u.activeTab,
    "onUpdate:active": s[0] || (s[0] = c => u.activeTab = c),
    swipeable: !t.isRtl,
    type: "card",
    ellipsis: !1
  }, {
    default: a(() => [(n(!0), i(_, null, v(h.extDbBoost, (c, d) => (n(), m(B, null, {
      title: a(() => [e("span", null, o(d) + " " + o(Number(d) === 1 ? t.t("day") : t.t("days")), 1)]),
      default: a(() => [p(T, {
        inset: "",
        class: "noMargin",
        style: {
          "margin-top": "5px"
        }
      }, {
        default: a(() => [(n(!0), i(_, null, v(c, r => (n(), m(g, {
          key: r.key,
          center: ""
        }, {
          title: a(() => [Number(d) === 1 ? (n(), i("div", {
            key: 0,
            innerHTML: t.t("+{value}% {IMG_TPH} boost for 1 day", {
              value: r.boost,
              IMG_TPH: t.IMG_TPH
            })
          }, null, 8, D)) : (n(), i("div", {
            key: 1,
            innerHTML: t.t("+{value}% {IMG_TPH} boost for {days} days", {
              value: r.boost,
              days: r.days,
              IMG_TPH: t.IMG_TPH
            })
          }, null, 8, E))]),
          "right-icon": a(() => [p(f, {
            type: "success",
            size: "small",
            onClick: V => h.buyBoost(r),
            loading: u.isBuyLoading
          }, {
            default: a(() => [s[2] || (s[2] = e("span", {
              class: "coin25"
            }, null, -1)), y(" " + o(t._number(r.price)), 1)]),
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
  ["__scopeId", "data-v-f1abaa69"]
]);
export {
  F as
  default
};