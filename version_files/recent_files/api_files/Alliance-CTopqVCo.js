import {
  _ as L,
  o as r,
  c as p,
  a as t,
  k as U,
  h as T,
  n as k,
  b as a,
  f as x,
  e as E,
  w as o,
  d as u,
  t as l,
  g as c,
  A as N,
  F as S,
  r as I
} from "./index-ZMNZZISQ.js";
const M = {
  name: "Progressbar-g",
  props: {
    height: {
      type: Number,
      default: 15
    },
    percent: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: "#008C00FF"
    },
    bgColor: {
      type: String,
      default: "#b6b6b6"
    }
  },
  data() {
    return {}
  },
  methods: {
    toggleTooltip() {}
  }
};

function F(e, n, h, _, i, s) {
  return r(), p("div", {
    class: "progressBar txtShd",
    style: k({
      height: h.height + "px",
      background: h.bgColor
    })
  }, [t("div", {
    class: T(["text", {
      withRtl: e.isRtl
    }]),
    style: k({
      lineHeight: Math.round(h.height * 1) + "px",
      fontSize: Math.round(h.height * .8) + "px"
    })
  }, [U(e.$slots, "default", {}, void 0)], 6), t("div", {
    class: "bar",
    style: k({
      width: `${h.percent}%`,
      height: h.height + "px",
      background: h.color
    })
  }, null, 4)], 4)
}
const B = L(M, [
    ["render", F],
    ["__scopeId", "data-v-3882ba1e"]
  ]),
  z = {
    name: "AllianceMy",
    components: {
      ProgressbarG: B
    },
    async created() {},
    mounted() {
      this.maxBet = this.uHero.coins, this.donateCount = Math.round(this.uHero.coins / 2)
    },
    data() {
      return {
        isShowEdit: !1,
        isShowDonate: !1,
        isShowLeave: !1,
        donateCount: 0,
        minBet: 1,
        maxBet: 2,
        isDonateLoading: !1,
        isSaveLoading: !1,
        isLeaveLoading: !1,
        allianceEditableInfo: {
          id: null,
          name: "",
          enterFee: 1e3,
          channelLink: ""
        }
      }
    },
    watch: {},
    computed: {
      stepCount() {
        return this.allianceEditableInfo.enterFee < 25e3 ? 1e3 : this.allianceEditableInfo.enterFee < 1e5 ? 5e3 : this.allianceEditableInfo.enterFee < 3e5 ? 1e4 : this.allianceEditableInfo.enterFee < 5e5 ? 5e4 : 1e5
      },
      extUAlliance() {
        if (!this.uAlliance.id) return this.uAlliance;
        let e = this.uAlliance;
        e.isMaxLevel = !1;
        let n = Number(e.level) + 1;
        if (!(n in this.dbAllianceByLevel)) return e.isMaxLevel = !0, e;
        e.nextLevel = n, e.expToNexLevel = this.dbAllianceByLevel[n].exp - e.exp;
        const h = this.uAlliance.level;
        return e.currentLevelBonus = this.dbAllianceByLevel[h].bonus, e.nextLevelBonus = this.dbAllianceByLevel[n].bonus, e.levelPercent = this._getAllianceLevelProgress(e.exp), e
      }
    },
    methods: {
      async leave() {
        try {
          this.isLeaveLoading = !0;
          const e = await this.apiCall("allianceLeave", {});
          this.stores.user.setAlliance(e.alliance), this.stores.user.setHero(e.hero), this.isShowLeave = !1
        } catch (e) {
          this._catchError(e)
        }
        this.isLeaveLoading = !1
      },
      openEditPopup() {
        var e;
        this.allianceEditableInfo = {
          id: this.uAlliance.id,
          name: this.uAlliance.name,
          enterFee: this.uAlliance.enterFee,
          channelLink: ((e = this.uAlliance) == null ? void 0 : e.channelLink) ?? ""
        }, this.isShowEdit = !0
      },
      async save() {
        try {
          this.isSaveLoading = !0;
          const e = await this.apiCall("allianceSave", this.allianceEditableInfo);
          this.stores.user.setAlliance(e.alliance), this.isShowEdit = !1
        } catch (e) {
          this._catchError(e)
        }
        this.isSaveLoading = !1
      },
      async donate() {
        try {
          this.isDonateLoading = !0;
          const e = await this.apiCall("allianceDonate", this.donateCount);
          this.stores.user.setHero(e.hero), this.stores.user.setAlliance(e.alliance), this._animateMoneyFromCenter(this.donateCount, "tph"), this.isShowDonate = !1
        } catch (e) {
          this._catchError(e)
        }
        this.isDonateLoading = !1
      }
    }
  },
  V = {
    class: "panelBrown",
    style: {
      position: "relative"
    }
  },
  D = {
    class: "flexBeetween"
  },
  H = {
    style: {
      "font-size": "1.6em",
      "font-weight": "800"
    }
  },
  O = {
    style: {},
    class: "flexRight"
  },
  P = {
    class: "white"
  },
  G = {
    class: "flexBeetween",
    style: {
      "font-size": "0.8em",
      "margin-bottom": "10px"
    }
  },
  R = {
    key: 0
  },
  q = {
    style: {
      "border-bottom": "1px dashed #fff"
    }
  },
  j = {
    key: 1
  },
  K = {
    style: {
      "font-size": "0.7em",
      color: "#fff"
    }
  },
  Y = {
    style: {
      margin: "15px 0"
    }
  },
  J = {
    class: "white"
  },
  Q = {
    style: {
      padding: "30px 35px",
      overflow: "hidden",
      margin: "0 -15px"
    }
  },
  W = {
    class: "betSelectorLabel"
  },
  X = {
    key: 0
  },
  Z = {
    key: 1
  };

function $(e, n, h, _, i, s) {
  const m = c("van-text-ellipsis"),
    v = c("van-button"),
    b = c("progressbar-g"),
    y = c("van-field"),
    A = c("van-stepper"),
    w = c("van-cell-group"),
    C = c("van-form"),
    g = c("van-popup"),
    f = c("van-slider");
  return r(), p("div", V, [t("div", D, [t("div", H, [a(m, {
    content: s.extUAlliance.name
  }, null, 8, ["content"])]), t("div", O, [s.extUAlliance.isOwner ? (r(), x(v, {
    key: 0,
    size: "small",
    type: "warning",
    icon: "edit",
    onClick: s.openEditPopup,
    style: {
      margin: "0 10px"
    }
  }, null, 8, ["onClick"])) : E("", !0), a(v, {
    size: "small",
    type: "danger",
    icon: "exit",
    onClick: n[0] || (n[0] = d => i.isShowLeave = !0)
  }, {
    default: o(() => [u(l(e.t("Leave")), 1)]),
    _: 1
  })])]), t("div", P, [t("div", G, [t("div", null, l(e.t("Founder:")) + " " + l(s.extUAlliance.ownerName), 1), t("div", null, "#" + l(s.extUAlliance.id), 1)]), s.extUAlliance.channelLink || s.extUAlliance.isOwner ? (r(), p("div", R, [u(l(e.t("Channel:")) + " ", 1), t("span", q, [s.extUAlliance.channelLink ? (r(), p("span", {
    key: 0,
    onClick: n[1] || (n[1] = d => e._openUrl("https://" + s.extUAlliance.channelLink))
  }, l(s.extUAlliance.channelLink), 1)) : (r(), p("span", {
    key: 1,
    onClick: n[2] || (n[2] = (...d) => s.openEditPopup && s.openEditPopup(...d))
  }, l(e.t("Tap to edit")), 1))])])) : E("", !0), t("div", null, l(e.t("Level:")) + " " + l(s.extUAlliance.level), 1), t("div", null, l(e.t("Members:")) + " " + l(e._number(s.extUAlliance.members)), 1), t("div", null, [u(l(e.t("Enter Fee:")) + " " + l(e._number(s.extUAlliance.enterFee)) + " ", 1), n[12] || (n[12] = t("span", {
    class: "coin25"
  }, null, -1))]), n[16] || (n[16] = t("br", null, null, -1)), t("div", null, [u(l(e.t("Token per Hour bonus:")) + " +" + l(s.extUAlliance.currentLevelBonus) + "% ", 1), n[13] || (n[13] = t("span", {
    class: "tph24"
  }, null, -1))]), s.extUAlliance.isMaxLevel ? E("", !0) : (r(), p("div", j, [a(b, {
    height: 30,
    percent: s.extUAlliance.levelPercent,
    color: "#203AA1",
    style: {
      margin: "10px 0",
      "border-radius": "6px",
      overflow: "hidden"
    }
  }, {
    default: o(() => [t("div", K, [n[14] || (n[14] = t("span", {
      class: "coin25"
    }, null, -1)), u(" " + l(e.t("{count} to next bonus +{nextBonus}%", {
      count: e._numberShort(s.extUAlliance.expToNexLevel),
      nextBonus: s.extUAlliance.nextLevelBonus
    })) + " ", 1), n[15] || (n[15] = t("span", {
      class: "tph24"
    }, null, -1))])]),
    _: 1
  }, 8, ["percent"]), a(v, {
    size: "large",
    type: "success",
    onClick: n[3] || (n[3] = d => i.isShowDonate = !0)
  }, {
    default: o(() => [u(l(e.t("Make donation for level up")), 1)]),
    _: 1
  })]))]), a(g, {
    show: i.isShowEdit,
    "onUpdate:show": n[7] || (n[7] = d => i.isShowEdit = d),
    position: "top",
    closeable: "",
    class: "container",
    round: ""
  }, {
    default: o(() => [t("h1", null, l(e.t("Edit Alliance info")), 1), a(C, {
      onSubmit: s.save
    }, {
      default: o(() => [a(w, {
        inset: "",
        class: "noMargin",
        style: {
          "font-size": "1.3em"
        }
      }, {
        default: o(() => [a(y, {
          modelValue: i.allianceEditableInfo.name,
          "onUpdate:modelValue": n[4] || (n[4] = d => i.allianceEditableInfo.name = d),
          name: "name",
          label: e.t("Name"),
          placeholder: "Name",
          size: "large",
          rules: [{
            required: !0,
            message: e.t("Is required")
          }]
        }, null, 8, ["modelValue", "label", "rules"]), a(y, {
          modelValue: i.allianceEditableInfo.channelLink,
          "onUpdate:modelValue": n[5] || (n[5] = d => i.allianceEditableInfo.channelLink = d),
          name: "channelLink",
          label: e.t("Telegram Channel"),
          placeholder: "@my_super_channel",
          size: "large"
        }, null, 8, ["modelValue", "label"]), a(y, {
          name: "enterFee",
          rules: [{
            required: !0,
            message: e.t("Is required")
          }],
          size: "large"
        }, {
          label: o(() => [u(l(e.t("Enter Fee")) + " ", 1), n[17] || (n[17] = t("span", {
            class: "coin25"
          }, null, -1))]),
          input: o(() => [a(A, {
            modelValue: i.allianceEditableInfo.enterFee,
            "onUpdate:modelValue": n[6] || (n[6] = d => i.allianceEditableInfo.enterFee = d),
            min: e.gameConfig["alliance.fee.enter"] ?? 1e3,
            step: s.stepCount,
            "input-width": "60px",
            integer: "",
            "disable-input": ""
          }, null, 8, ["modelValue", "min", "step"])]),
          _: 1
        }, 8, ["rules"])]),
        _: 1
      }), t("div", Y, [a(v, {
        size: "large",
        type: "warning",
        loading: i.isSaveLoading,
        "native-type": "submit"
      }, {
        default: o(() => [u(l(e.t("Save")), 1)]),
        _: 1
      }, 8, ["loading"])])]),
      _: 1
    }, 8, ["onSubmit"])]),
    _: 1
  }, 8, ["show"]), a(g, {
    show: i.isShowDonate,
    "onUpdate:show": n[9] || (n[9] = d => i.isShowDonate = d),
    position: "bottom",
    closeable: "",
    class: "container",
    round: "",
    style: {
      "padding-bottom": "50px"
    }
  }, {
    default: o(() => [t("h1", null, l(e.t("Donation to Alliance")), 1), t("p", J, l(e.t("By investing money in the alliance, you help it level up. A higher level gives bigger bonuses for Tokens per hour.")), 1), t("div", Q, [a(f, {
      modelValue: i.donateCount,
      "onUpdate:modelValue": n[8] || (n[8] = d => i.donateCount = d),
      step: i.minBet,
      "bar-height": "20px",
      "active-color": "linear-gradient(90deg, #fff4d6, #fbcc54)",
      min: i.minBet,
      max: i.maxBet
    }, {
      button: o(() => [t("div", W, [n[18] || (n[18] = t("span", {
        class: "coin25"
      }, null, -1)), n[19] || (n[19] = u()), n[20] || (n[20] = t("br", null, null, -1)), u(" " + l(e._numberShort(i.donateCount)), 1)])]),
      _: 1
    }, 8, ["modelValue", "step", "min", "max"])]), a(v, {
      size: "large",
      type: "success",
      onClick: s.donate,
      loading: i.isDonateLoading
    }, {
      default: o(() => [u(l(e.t("Donate {count}", {
        count: e._number(i.donateCount)
      })) + " ", 1), n[21] || (n[21] = t("span", {
        class: "coin25"
      }, null, -1))]),
      _: 1
    }, 8, ["onClick", "loading"])]),
    _: 1
  }, 8, ["show"]), a(g, {
    show: i.isShowLeave,
    "onUpdate:show": n[11] || (n[11] = d => i.isShowLeave = d),
    class: "container center",
    round: ""
  }, {
    default: o(() => [t("h1", null, l(e.t("Leave the alliance?")), 1), s.extUAlliance.isOwner ? (r(), p("p", X, l(e.t("You are the founder of the alliance. If you leave, it will remain without an owner. Members will still be able to upgrade it and earn bonuses.")), 1)) : (r(), p("p", Z, l(e.t("By leaving the alliance, you won't be able to reclaim your donations or entry fee. To rejoin, you'll need to pay the entry fee again.")), 1)), a(v, {
      type: "danger",
      onClick: s.leave,
      loading: i.isLeaveLoading
    }, {
      default: o(() => [u(l(e.t("Leave")), 1)]),
      _: 1
    }, 8, ["onClick", "loading"]), n[22] || (n[22] = u("    ")), a(v, {
      type: "success",
      onClick: n[10] || (n[10] = d => i.isShowLeave = !1)
    }, {
      default: o(() => [u(l(e.t("No")), 1)]),
      _: 1
    })]),
    _: 1
  }, 8, ["show"])])
}
const ee = L(z, [
    ["render", $],
    ["__scopeId", "data-v-95b76a4a"]
  ]),
  ne = {
    name: "AllianceRatingAll",
    components: {
      ProgressbarG: B,
      AllianceInfo: N
    },
    async created() {
      await this.loadTopList()
    },
    data() {
      return {
        topList: [],
        isTopListLoading: !1,
        isShowAllianceInfo: !1,
        selectedAlliance: null
      }
    },
    watch: {
      async uAlliance(e, n) {
        e.level !== n.level && await this.loadTopList()
      }
    },
    computed: {
      sortedLevels() {
        return Object.keys(this.topListByLevel).sort((e, n) => n - e)
      },
      topListByLevel() {
        let e = this.topList.map(n => (n.level = this.getAllianceLevelByExp(n.exp), n));
        return this._groupBy(e, "level")
      }
    },
    methods: {
      getAllianceLevelByExp(e) {
        return this.dbAlliance.filter(n => n.exp <= e).length
      },
      async loadTopList() {
        this.isTopListLoading = !0;
        try {
          this.topList = await this.apiCall("allianceRating")
        } catch (e) {
          this._catchError(e)
        }
        this.isTopListLoading = !1
      },
      showAllianceInfo(e) {
        this.selectedAlliance = e, this.isShowAllianceInfo = !0
      }
    }
  },
  le = {
    key: 0
  },
  te = {
    style: {
      margin: "15px 0 3px 0"
    }
  },
  ie = {
    style: {
      "font-weight": "500",
      "font-size": "1.2em"
    }
  },
  se = {
    class: "white"
  },
  ae = {
    key: 1
  },
  oe = {
    key: 1,
    class: "center"
  };

function re(e, n, h, _, i, s) {
  const m = c("progressbar-g"),
    v = c("van-icon"),
    b = c("van-cell"),
    y = c("van-cell-group"),
    A = c("van-loading"),
    w = c("alliance-info"),
    C = c("van-popup");
  return r(), p("div", null, [t("h3", null, l(e.t("Alliance List by Exp")), 1), i.isTopListLoading ? (r(), p("div", oe, [a(A)])) : (r(), p(S, {
    key: 0
  }, [i.topList.length ? (r(), p("div", le, [(r(!0), p(S, null, I(s.sortedLevels, g => (r(), p("div", {
    key: "level" + g
  }, [t("div", te, [t("div", ie, l(e.t("Level")) + " " + l(g), 1), t("div", null, [u(l(e.t("Token per Hour bonus:")) + " +" + l(e.dbAllianceByLevel[g].bonus) + "% ", 1), n[1] || (n[1] = t("span", {
    class: "tph24"
  }, null, -1))])]), a(y, {
    inset: "",
    class: "noMargin levelGroup"
  }, {
    default: o(() => [(r(!0), p(S, null, I(s.topListByLevel[g], f => (r(), x(b, {
      key: f.id,
      "is-link": "",
      center: "",
      onClick: d => s.showAllianceInfo(f)
    }, {
      title: o(() => [u("[" + l(f.level) + "] " + l(f.name), 1)]),
      label: o(() => [t("div", null, l(e.t("Founder:")) + " " + l(f.ownerName), 1), t("div", null, [a(m, {
        percent: e._getAllianceLevelProgress(f.exp),
        color: "#203AA1",
        style: {
          display: "inline-block",
          width: "50px",
          "border-radius": "2px",
          overflow: "hidden",
          margin: "0 10px -2px 0"
        }
      }, {
        default: o(() => [t("span", se, l(e._getAllianceLevelProgress(f.exp)) + "%", 1)]),
        _: 2
      }, 1032, ["percent"]), a(v, {
        name: "friends"
      }), u(" " + l(e._numberShort(f.members)) + "   ", 1), n[2] || (n[2] = t("span", {
        class: "coin15"
      }, null, -1)), u(" " + l(e._number(f.enterFee)), 1)])]),
      _: 2
    }, 1032, ["onClick"]))), 128))]),
    _: 2
  }, 1024)]))), 128))])) : (r(), p("div", ae, l(e.t("Nothing yet")), 1))], 64)), a(C, {
    show: i.isShowAllianceInfo,
    "onUpdate:show": n[0] || (n[0] = g => i.isShowAllianceInfo = g),
    round: "",
    closeable: "",
    style: {
      "min-width": "90%"
    }
  }, {
    default: o(() => [a(w, {
      "alliance-data": i.selectedAlliance,
      class: "container"
    }, null, 8, ["alliance-data"])]),
    _: 1
  }, 8, ["show"])])
}
const de = L(ne, [
    ["render", re],
    ["__scopeId", "data-v-aa0bf723"]
  ]),
  ue = {
    name: "Alliance-g",
    components: {
      AllianceRatingAll: de,
      AllianceMy: ee
    },
    async created() {},
    data() {
      return {
        isCreateLoading: !1
      }
    },
    watch: {},
    computed: {},
    methods: {
      async createAlliance() {
        if (gameConfig["alliance.fee.create"] > this.uHero.coins) {
          this.stores.state.setLackOfCoin(gameConfig["alliance.fee.create"] - this.uHero.coins), this.stores.state.setIsShowTopUp(!0);
          return
        }
        try {
          this.isCreateLoading = !0;
          const e = await this.apiCall("allianceCreate");
          this.stores.user.setAlliance(e.alliance), this.stores.user.setHero(e.hero)
        } catch (e) {
          this._catchError(e)
        }
        this.isCreateLoading = !1
      }
    }
  },
  ce = {
    class: "container",
    style: {
      "padding-bottom": "90px"
    }
  },
  pe = {
    class: "aniH1"
  },
  he = {
    key: 0
  },
  ve = ["innerHTML"];

function fe(e, n, h, _, i, s) {
  const m = c("van-button"),
    v = c("alliance-my"),
    b = c("alliance-rating-all");
  return r(), p("div", ce, [t("h1", pe, l(e.t("Alliance")), 1), e.uAlliance.id ? (r(), x(v, {
    key: 1,
    style: {
      "margin-bottom": "40px"
    }
  })) : (r(), p("div", he, [t("p", null, l(e.t("You can create an alliance or join an existing one.")), 1), t("p", null, l(e.t("The higher the alliance level, the bigger the bonus to your {TOKEN_NAME} earnings.", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), t("p", null, l(e.t("The alliance founder will receive {percent}% of all entry fees and donations.", {
    percent: e.gameConfig["alliance.bonus.founder"]
  })), 1), a(m, {
    type: "success",
    size: "large",
    onClick: s.createAlliance,
    loading: i.isCreateLoading
  }, {
    default: o(() => [t("div", {
      innerHTML: e.t("Create for {count} {IMG_COIN}", {
        count: e._number(e.gameConfig["alliance.fee.create"]),
        IMG_COIN: e.IMG_COIN
      })
    }, null, 8, ve)]),
    _: 1
  }, 8, ["onClick", "loading"]), n[0] || (n[0] = u("   "))])), a(b)])
}
const me = L(ue, [
  ["render", fe],
  ["__scopeId", "data-v-4eacc5ab"]
]);
export {
  me as
  default
};