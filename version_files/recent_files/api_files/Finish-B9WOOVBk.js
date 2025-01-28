import {
  _ as s,
  M as a,
  c,
  a as n,
  b as i,
  t as o,
  o as r,
  g as p
} from "./index-2mYfktaD.js";
const d = {
    name: "Empty-g",
    components: {
      Menu: a
    },
    async created() {},
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {}
  },
  _ = {
    style: {
      position: "fixed",
      top: "10px",
      right: "10px",
      "z-index": "1"
    }
  },
  l = {
    class: "container"
  };

function u(e, m, f, h, M, g) {
  const t = p("Menu");
  return r(), c("div", null, [n("div", _, [i(t)]), n("div", l, [n("h1", null, o(e.t("Mining finish")), 1), n("p", null, o(e._number(e.uHero.tokens)) + " " + o(e.TOKEN_NAME), 1)])])
}
const y = s(d, [
  ["render", u],
  ["__scopeId", "data-v-f3b358f7"]
]);
export {
  y as
  default
};