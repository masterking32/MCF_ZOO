import {
  _ as d,
  M as r,
  c,
  a as t,
  b as o,
  t as n,
  w as l,
  r as s,
  o as p,
  d as u
} from "./index-DMjixcsE.js";
const _ = {
    name: "Empty-g",
    components: {
      Menu: r
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
  h = {
    style: {
      position: "fixed",
      top: "10px",
      right: "10px",
      "z-index": "1"
    }
  },
  g = {
    class: "center",
    style: {
      padding: "50px 15px 0 15px"
    }
  },
  m = {
    style: {
      "font-size": "2em",
      "font-weight": "700"
    },
    class: "zTextShadow2white"
  },
  f = {
    style: {
      "margin-top": "30px"
    }
  },
  v = {
    style: {
      "font-size": "1em",
      "font-weight": "700"
    }
  },
  y = {
    style: {
      "margin-top": "50px"
    }
  };

function N(e, w, E, M, b, T) {
  const i = s("Menu"),
    a = s("van-button");
  return p(), c("div", null, [t("div", h, [o(i)]), t("div", g, [t("h1", null, n(e.t("Mining has ended.")), 1), t("div", null, n(e.t("You've mined:")), 1), t("div", m, n(e._number(e.uHero.tokens)) + " " + n(e.TOKEN_NAME), 1), t("div", f, n(e.t("Bonus {TOKEN_NAME} for activity: ", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), t("div", v, n(e.t("calculation in progress")), 1), t("div", y, n(e.t("Listing details will be announced soon in the official channel.")), 1), o(a, {
    size: "large",
    type: "warning",
    onClick: e._ourTgClick,
    style: {
      "margin-top": "15px"
    }
  }, {
    default: l(() => [u(n(e.t("Follow our channel")), 1)]),
    _: 1
  }, 8, ["onClick"])])])
}
const x = d(_, [
  ["render", N],
  ["__scopeId", "data-v-bdeefe56"]
]);
export {
  x as
  default
};