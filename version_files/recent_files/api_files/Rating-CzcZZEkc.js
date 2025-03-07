import {
  _ as R,
  i as N,
  c as p,
  a as o,
  t as s,
  b as i,
  w as e,
  d as g,
  g as r,
  o as l,
  k as f,
  e as u,
  F as k,
  r as b,
  n as w
} from "./index-l9GcNg0h.js";
const C = {
    name: "Rating-o",
    components: {
      TopBar: N
    },
    async created() {},
    async mounted() {
      try {
        this.topList = await this.apiCall("getRatings"), this.isTopListLoading = !1
      } catch (t) {
        this._catchError(t)
      }
    },
    data() {
      return {
        topListByLevel: {},
        isTopListLoading: !0,
        topList: []
      }
    },
    watch: {},
    computed: {
      myRating() {
        const t = this.topList.find(n => n.isSelf);
        return t ? this.getRatingIcon(t.rating) : "> " + this.topList.length
      }
    },
    methods: {
      getRatingIcon(t) {
        return t = Number(t), t === 1 ? "🥇" : t === 2 ? "🥈" : t === 3 ? "🥉" : "#" + t
      }
    }
  },
  T = {
    class: "rating"
  },
  B = {
    class: "pageContainer"
  },
  E = {
    class: "container"
  },
  F = {
    key: 1
  };

function I(t, n, S, M, d, c) {
  const h = r("van-loading"),
    m = r("van-cell"),
    _ = r("van-cell-group"),
    v = r("van-sticky"),
    y = r("van-skeleton-paragraph"),
    L = r("van-back-top");
  return l(), p("div", T, [o("div", B, [o("div", E, [o("h1", null, s(t.t("Player Rankings")), 1), i(v, {
    "offset-top": "0",
    onChange: t._stickyChange
  }, {
    default: e(() => [i(_, {
      inset: !t.isFixed,
      style: f({
        margin: t.isFixed ? "0 -15px" : 0
      })
    }, {
      default: e(() => [i(m, {
        size: "large",
        center: "",
        class: "isMe",
        style: f({
          borderRadius: t.isFixed ? 0 : "10px"
        })
      }, {
        title: e(() => [u(s(t.uProfile.firstName) + " " + s(t.uProfile.lastName), 1)]),
        label: e(() => [u(s(t._number(t.uHero.tokens)) + " " + s(t.TOKEN_NAME), 1)]),
        "right-icon": e(() => [d.isTopListLoading ? (l(), g(h, {
          key: 0,
          style: {
            margin: "0 auto"
          }
        })) : (l(), p("span", F, s(c.myRating), 1))]),
        _: 1
      }, 8, ["style"])]),
      _: 1
    }, 8, ["inset", "style"])]),
    _: 1
  }, 8, ["onChange"]), n[0] || (n[0] = o("br", null, null, -1)), n[1] || (n[1] = o("br", null, null, -1)), d.isTopListLoading ? (l(), g(_, {
    key: 1,
    inset: "",
    style: {
      margin: "0"
    }
  }, {
    default: e(() => [(l(), p(k, null, b(15, a => i(m, {
      center: "",
      key: "top" + a,
      style: {
        height: "66px"
      }
    }, {
      title: e(() => [i(y, {
        "row-width": "40px"
      })]),
      label: e(() => [i(y, {
        "row-width": "10px"
      })]),
      "right-icon": e(() => [u(s(c.getRatingIcon(a)), 1)]),
      _: 2
    }, 1024)), 64))]),
    _: 1
  })) : (l(), g(_, {
    key: 0,
    inset: "",
    style: {
      margin: "0"
    }
  }, {
    default: e(() => [(l(!0), p(k, null, b(d.topList, a => (l(), g(m, {
      center: "",
      key: "top" + a.rating,
      class: w({
        isMe: a.isSelf
      })
    }, {
      title: e(() => [u(s(a.name), 1)]),
      label: e(() => [u(s(t._numberShort(a.tokens)) + " " + s(t.TOKEN_NAME), 1)]),
      "right-icon": e(() => [u(s(c.getRatingIcon(a.rating)), 1)]),
      _: 2
    }, 1032, ["class"]))), 128))]),
    _: 1
  })), i(L, {
    bottom: "100px"
  }), n[2] || (n[2] = o("br", null, null, -1)), n[3] || (n[3] = o("br", null, null, -1)), n[4] || (n[4] = o("br", null, null, -1)), n[5] || (n[5] = o("br", null, null, -1)), n[6] || (n[6] = o("br", null, null, -1))])])])
}
const P = R(C, [
  ["render", I],
  ["__scopeId", "data-v-d33cf167"]
]);
export {
  P as
  default
};