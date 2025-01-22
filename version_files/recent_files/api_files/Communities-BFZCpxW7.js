import {
  _ as w,
  o as i,
  f as u,
  w as n,
  a as d,
  d as C,
  t as m,
  e as p,
  c as y,
  b as a,
  k as F,
  h as N,
  g as s,
  T as j,
  s as x,
  F as k,
  r as E
} from "./index-DqDqX7ZU.js";
const B = {
    props: {
      clickable: Boolean,
      community: {
        type: Object,
        required: !0
      }
    },
    methods: {
      getCommunityPhotoUrl(e) {
        return "https://" + this.GAME_DOMAIN + "/community/photo/" + e.channel_photo_hash + "?id=" + e.id
      }
    }
  },
  P = {
    style: {
      display: "flex"
    }
  },
  U = {
    style: {
      flex: "1",
      "white-space": "nowrap",
      overflow: "hidden",
      "text-overflow": "ellipsis"
    }
  },
  q = ["src"],
  K = {
    key: 1,
    class: "channel-photo",
    src: "/assets/img/decor/city1.jpg"
  };

function D(e, t, c, V, o, r) {
  const _ = s("van-tag"),
    h = s("van-icon"),
    g = s("van-space"),
    f = s("van-cell");
  return i(), u(f, {
    center: "",
    border: !1,
    style: {
      "border-radius": "10px"
    },
    class: N({
      isMine: c.community.isMine
    }),
    clickable: c.clickable,
    "title-style": {
      overflow: "hidden",
      "padding-right": "6px"
    },
    size: "large"
  }, {
    title: n(() => [d("div", P, [c.community.is_self ? (i(), u(_, {
      key: 0,
      style: {
        "margin-right": "4px"
      },
      color: "darkorange",
      type: "primary"
    }, {
      default: n(() => [C(m(e.t("You")), 1)]),
      _: 1
    })) : p("", !0), d("div", U, m(c.community.channel_name), 1)])]),
    icon: n(() => [c.community.channel_photo_hash ? (i(), y("img", {
      key: 0,
      class: "channel-photo",
      loading: "lazy",
      src: r.getCommunityPhotoUrl(c.community)
    }, null, 8, q)) : (i(), y("img", K)), a(h, {
      class: "tg-item",
      color: "#ffffff",
      name: "guide-o",
      size: "10"
    })]),
    label: n(() => [a(g, {
      size: "4px"
    }, {
      default: n(() => [C(m(e._number(c.community.bonus_total)) + " " + m(e.TOKEN_NAME), 1)]),
      _: 1
    })]),
    "right-icon": n(() => [F(e.$slots, "right-icon", {}, void 0, !0)]),
    _: 3
  }, 8, ["class", "clickable"])
}
const G = w(B, [
    ["render", D],
    ["__scopeId", "data-v-85ec3cd1"]
  ]),
  R = {
    name: "GameTabs"
  };

function W(e, t, c, V, o, r) {
  const _ = s("van-tabs");
  return i(), u(_, {
    class: N(["gameTabs", {
      tabsWithRtl: e.isRtl
    }]),
    sticky: "",
    "offset-top": "0",
    onScroll: e._stickyScroll,
    swipeable: !e.isRtl
  }, {
    default: n(() => [F(e.$slots, "default", {}, void 0, !0)]),
    _: 3
  }, 8, ["class", "onScroll", "swipeable"])
}
const J = w(R, [
    ["render", W],
    ["__scopeId", "data-v-908001b0"]
  ]),
  Y = {
    components: {
      TopBar: j,
      CommunityCell: G,
      GameTabs: J
    },
    mounted() {
      this.stores.state.setPageSettings(), this.loadCommunities(this.currentInterval)
    },
    data() {
      return {
        communities: {},
        isLoading: {},
        currentInterval: "day",
        isFormVisible: !1,
        channelName: "",
        isCreatingCommunity: !1,
        previousMyCommunity: null
      }
    },
    computed: {
      intervals() {
        return [{
          key: "day",
          title: this.t("Day")
        }, {
          key: "week",
          title: this.t("Week")
        }, {
          key: "all_time",
          title: this.t("All time")
        }]
      },
      currentCommunities() {
        return this.communities[this.currentInterval] || []
      },
      myCommunity() {
        return this.currentCommunities.find(e => e.is_self)
      },
      myCommunityIndex() {
        return this.currentCommunities.indexOf(e => e.channel_url === this.myCommunity.channel_url)
      },
      hasCommunity() {
        return this.myCommunity !== void 0
      }
    },
    watch: {
      isFormVisible() {
        this.isFormVisible && this.hasCommunity && (this.channelName = this.myCommunity.channel_url.replace("https://t.me/", ""))
      }
    },
    methods: {
      openChannel(e) {
        window.Telegram.WebApp.openTelegramLink(e.channel_url)
      },
      async createCommunity() {
        if (!this.isCreatingCommunity) {
          this.isCreatingCommunity = !0;
          try {
            await this.apiCall("communityCreate", {
              channel: this.channelName
            }), this.communities = {}, await this.loadCommunities(this.currentInterval), this.isFormVisible = !1
          } catch (e) {
            console.log("Error: %o", e), x({
              type: "danger",
              message: this.t("Error while creating community, make sure username is correct") + ` (${e})`
            })
          } finally {
            this.isCreatingCommunity = !1
          }
        }
      },
      async loadCommunities(e) {
        if (this.communities[e]) return;
        this.isLoading[e] = !0, this.communities[e] = [];
        let t = await this.apiCall("communityLeaderboard", {
          interval: e
        });
        this.communities[e] = t.filter(c => !c.channel_url.includes("blumcrypto")), delete this.isLoading[e]
      }
    }
  },
  H = {
    class: "pageContainer"
  },
  Q = {
    style: {
      margin: "var(--van-cell-group-inset-padding)"
    }
  },
  X = {
    key: 0
  },
  Z = {
    class: "text-center"
  },
  $ = {
    key: 1,
    style: {
      "min-width": "26px",
      "text-align": "center"
    }
  },
  ee = {
    key: 2,
    class: "text-center"
  };

function ne(e, t, c, V, o, r) {
  const _ = s("van-row"),
    h = s("van-button"),
    g = s("community-cell"),
    f = s("van-cell-group"),
    T = s("van-space"),
    z = s("van-field"),
    A = s("van-config-provider"),
    M = s("van-loading"),
    L = s("van-col"),
    I = s("van-icon"),
    O = s("van-tab"),
    S = s("game-tabs");
  return i(), y("div", null, [d("div", H, [a(_, {
    class: "text-center",
    justify: "center"
  }, {
    default: n(() => [d("h1", Q, m(e.t("Join our largest communities.")), 1), d("p", null, m(e.t("The community ranking is determined by summing up the {TOKEN_NAME} earned by invited players over a certain period of time.", {
      TOKEN_NAME: e.TOKEN_NAME
    })), 1), e.uProfile.friends < e.gameConfig["community.friends_required"] ? (i(), y("p", X, m(e.t("A player who has invited more than {count} friends can create a community.", {
      count: e.gameConfig["community.friends_required"]
    })), 1)) : p("", !0)]),
    _: 1
  }), e.uProfile.friends >= e.gameConfig["community.friends_required"] ? (i(), y(k, {
    key: 0
  }, [!r.hasCommunity && !o.isLoading[this.currentInterval] && !o.isFormVisible ? (i(), u(_, {
    key: 0,
    justify: "center"
  }, {
    default: n(() => [a(h, {
      type: "warning",
      icon: "guide-o",
      onClick: t[0] || (t[0] = l => o.isFormVisible = !0)
    }, {
      default: n(() => [C(m(e.t("Create community")), 1)]),
      _: 1
    }), d("p", Z, m(e.t("As a major influencer, you can create your own community.")), 1)]),
    _: 1
  })) : p("", !0), r.myCommunity && !o.isFormVisible ? (i(), u(f, {
    key: 1,
    inset: ""
  }, {
    default: n(() => [a(g, {
      community: r.myCommunity,
      index: r.myCommunityIndex
    }, {
      "right-icon": n(() => [a(h, {
        icon: "edit",
        size: "small",
        type: "primary",
        onClick: t[1] || (t[1] = l => o.isFormVisible = !0)
      })]),
      _: 1
    }, 8, ["community", "index"])]),
    _: 1
  })) : p("", !0), o.isFormVisible ? (i(), u(f, {
    key: 2,
    inset: ""
  }, {
    default: n(() => [a(A, {
      "theme-vars": {
        "field-placeholder-text-color": "#8499a6"
      }
    }, {
      default: n(() => [a(z, {
        modelValue: o.channelName,
        "onUpdate:modelValue": t[3] || (t[3] = l => o.channelName = l),
        placeholder: e.t("Telegram channel beginning with {at}", {
          at: "@"
        }),
        center: "",
        clearable: "",
        label: "@",
        "label-align": "right",
        "label-width": "10px",
        style: {
          height: "64px"
        }
      }, {
        button: n(() => [a(T, null, {
          default: n(() => [a(h, {
            disabled: o.isCreatingCommunity,
            loading: o.isCreatingCommunity,
            size: "small",
            type: "primary",
            onClick: r.createCommunity
          }, {
            default: n(() => [C(m(r.myCommunity ? e.t("Update") : e.t("Create")), 1)]),
            _: 1
          }, 8, ["disabled", "loading", "onClick"]), a(h, {
            disabled: o.isCreatingCommunity,
            icon: "cross",
            size: "small",
            onClick: t[2] || (t[2] = l => o.isFormVisible = !1)
          }, null, 8, ["disabled"])]),
          _: 1
        })]),
        _: 1
      }, 8, ["modelValue", "placeholder"])]),
      _: 1
    })]),
    _: 1
  })) : p("", !0), t[5] || (t[5] = d("br", null, null, -1))], 64)) : p("", !0), a(S, {
    active: o.currentInterval,
    "onUpdate:active": t[4] || (t[4] = l => o.currentInterval = l),
    onChange: r.loadCommunities
  }, {
    default: n(() => [(i(!0), y(k, null, E(r.intervals, l => (i(), u(O, {
      key: l.key,
      name: l.key,
      title: l.title,
      style: {
        "min-height": "300px"
      }
    }, {
      default: n(() => [t[6] || (t[6] = d("br", null, null, -1)), o.isLoading[l.key] ? (i(), u(_, {
        key: 0,
        justify: "center"
      }, {
        default: n(() => [a(L, null, {
          default: n(() => [a(M, {
            size: "50"
          })]),
          _: 1
        })]),
        _: 1
      })) : (o.communities[l.key] || []).length > 0 ? (i(), u(f, {
        key: 1,
        inset: "",
        style: {
          background: "transparent"
        }
      }, {
        default: n(() => [(i(!0), y(k, null, E(o.communities[l.key], (b, v) => (i(), u(g, {
          community: b,
          key: b.channel_name,
          clickable: "",
          onClick: te => r.openChannel(b)
        }, {
          "right-icon": n(() => [a(T, {
            size: "4px"
          }, {
            default: n(() => [v < 3 ? (i(), u(I, {
              key: 0,
              class: N(["award-" + v, "award"]),
              name: "award",
              size: "20"
            }, null, 8, ["class"])) : (i(), y("span", $, "#" + m(v + 1), 1)), a(I, {
              name: "arrow"
            })]),
            _: 2
          }, 1024)]),
          _: 2
        }, 1032, ["community", "onClick"]))), 128))]),
        _: 2
      }, 1024)) : (i(), y("p", ee, m(e.t("Communities will be added soon. Stay tuned for updates!")), 1)), t[7] || (t[7] = d("br", null, null, -1))]),
      _: 2
    }, 1032, ["name", "title"]))), 128))]),
    _: 1
  }, 8, ["active", "onChange"])]), t[8] || (t[8] = d("div", {
    class: "background"
  }, null, -1))])
}
const oe = w(Y, [
  ["render", ne],
  ["__scopeId", "data-v-5d222ad7"]
]);
export {
  oe as
  default
};