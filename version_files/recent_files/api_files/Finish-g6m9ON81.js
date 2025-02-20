import {
  _ as u,
  M as m,
  c as h,
  a as n,
  b as o,
  t,
  w as a,
  g as i,
  o as _,
  e as r
} from "./index-dYMJ6MmR.js";
const g = {
    name: "Empty-g",
    components: {
      Menu: m
    },
    async created() {},
    mounted() {
      this.stores.state.setPageSettings({
        bg: "url(/assets/img/decor/finish_bg.jpg?v=3) no-repeat center center / cover fixed, #2e3c63"
      })
    },
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {}
  },
  v = {
    style: {
      position: "fixed",
      top: "10px",
      right: "10px",
      "z-index": "1"
    }
  },
  f = {
    class: "center",
    style: {
      padding: "50px 15px 0 15px"
    }
  },
  y = {
    style: {
      color: "#000",
      padding: "15px"
    }
  },
  w = {
    style: {
      "font-size": "2em",
      "font-weight": "700"
    }
  },
  b = {
    class: "zTextShadow2white"
  },
  k = {
    style: {
      "margin-top": "50px"
    }
  };

function x(e, s, M, T, z, C) {
  const l = i("Menu"),
    d = i("van-button"),
    p = i("van-icon"),
    c = i("van-popover");
  return _(), h("div", null, [n("div", v, [o(l)]), n("div", f, [n("h1", null, t(e.t("Mining has ended.")), 1), n("div", null, t(e.t("You've tokens:")), 1), o(c, {
    style: {
      "max-width": "calc(100% - 20px)"
    }
  }, {
    reference: a(() => [n("div", w, [n("div", b, [r(t(e._number(Math.ceil(e.uHero.tokens / 1e3))) + " " + t(e.TOKEN_NAME) + " ", 1), o(p, {
      name: "question-o",
      style: {
        "font-size": "0.9em"
      }
    })])])]),
    default: a(() => [n("div", y, [r(t(e.t("The displayed token amount reflects the post-denomination value. The rounding was done upward.")) + " " + t(e.t("You can read more about the denomination in our Telegram channel.")), 1), s[1] || (s[1] = n("br", null, null, -1)), o(d, {
      type: "warning",
      onClick: s[0] || (s[0] = N => e._openUrl("https://t.me/zoo_story/315")),
      style: {
        "margin-top": "15px"
      }
    }, {
      default: a(() => [r(t(e.t("News here")), 1)]),
      _: 1
    })])]),
    _: 1
  }), n("div", k, t(e.t("Listing details will be announced soon in the official channel.")), 1), o(d, {
    size: "large",
    type: "warning",
    onClick: e._ourTgClick,
    style: {
      "margin-top": "15px"
    }
  }, {
    default: a(() => [r(t(e.t("Follow our channel")), 1)]),
    _: 1
  }, 8, ["onClick"])])])
}
const E = u(g, [
  ["render", x],
  ["__scopeId", "data-v-00873b88"]
]);
export {
  E as
  default
};