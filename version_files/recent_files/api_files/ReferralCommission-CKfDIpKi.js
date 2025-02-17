import {
  _ as h,
  L as k,
  c as i,
  a as s,
  t as a,
  p as C,
  n as T,
  e as o,
  f as u,
  b as p,
  w as d,
  g as f,
  o as r,
  F as S,
  r as D,
  d as L
} from "./index-4S2gbC6Z.js";
const B = {
    components: {
      LuckyHoursInform: k
    },
    async mounted() {
      await this.loadPageData()
    },
    data: function() {
      return {
        balance: 0,
        paid: 0,
        isLoading: !0,
        isBuyLoading: !1
      }
    },
    computed: {
      supportLink() {
        return "https://t.me/" + this.gameConfig["referral.support.channel"]
      },
      balanceUSDT() {
        const e = this.balance / 50 * .65;
        return e < 100 ? Math.round(e * 10) / 10 : Math.floor(e)
      },
      paidUSDT() {
        const e = this.paid / 50 * .65;
        return e < 100 ? Math.round(e * 10) / 10 : Math.floor(e)
      },
      availablePurchase() {
        return this.dbPurchase.filter(e => e.price <= this.balance)
      }
    },
    methods: {
      async loadPageData() {
        const {
          balance: e,
          paid: n
        } = await this.apiCall("friendsReferralBalance");
        this.balance = e, this.paid = n, this.isLoading = !1
      },
      async buyRefStars(e) {
        this.isBuyLoading = !0;
        try {
          const {
            balance: n,
            paid: m,
            hero: v
          } = await this.apiCall("referralBuyFeed", {
            key: e.key
          });
          this.balance = n, this.paid = m, this.stores.user.setHero(v), this._animateMoneyFromCenter(e.coins)
        } catch (n) {
          this._catchError(n)
        }
        this.isBuyLoading = !1
      }
    }
  },
  w = {
    key: 0,
    class: "container center"
  },
  P = {
    class: "balance"
  },
  U = {
    style: {
      "font-size": "0.8em",
      "margin-top": "5px"
    }
  },
  z = ["href"],
  M = {
    key: 0
  },
  R = {
    style: {
      "font-size": "0.8em",
      "margin-top": "5px"
    }
  },
  _ = {
    key: 1,
    class: "left"
  },
  F = {
    style: {
      "font-size": "1.4em",
      "font-weight": "700"
    }
  },
  N = {
    style: {
      color: "var(--van-text-color-2)"
    },
    class: "flexRight"
  },
  V = {
    key: 0
  };

function E(e, n, m, v, Y, t) {
  const c = f("lucky-hours-inform"),
    g = f("van-button"),
    y = f("van-cell"),
    b = f("van-cell-group");
  return e.uProfile.isAlfaTester || e.gameConfig["referral.commission.friend_count"] > 0 && e.uProfile.friends >= e.gameConfig["referral.commission.friend_count"] ? (r(), i("div", w, [s("h3", null, a(e.t("Your referral commission")), 1), n[4] || (n[4] = C('<br data-v-89f81142><div style="display:flex;align-items:baseline;gap:10px;" data-v-89f81142><div style="flex:1;" data-v-89f81142></div><div style="font-size:40px;" data-v-89f81142>⭐</div><div style="font-size:60px;" data-v-89f81142>⭐</div><div style="font-size:40px;" data-v-89f81142>⭐</div><div style="flex:1;" data-v-89f81142></div></div><br data-v-89f81142>', 3)), s("div", {
    class: T({
      blur: e.isLoading
    })
  }, [s("div", P, a(e._number(e.balance)), 1), n[0] || (n[0] = s("div", null, "Telegram Stars", -1)), s("div", U, "~" + a(t.balanceUSDT) + " USDT", 1)], 2), n[5] || (n[5] = s("br", null, null, -1)), n[6] || (n[6] = s("br", null, null, -1)), s("div", null, [o(a(e.t("You receive {n}% for each purchase made by your friends. To withdraw funds, please contact customer support.", {
    n: e.uReferralCommission
  })) + " ", 1), e.gameConfig["referral.support.channel"] ? (r(), i("a", {
    key: 0,
    href: t.supportLink
  }, "@" + a(e.gameConfig["referral.support.channel"]), 9, z)) : u("", !0), o(". " + a(e.t("The minimum withdrawal amount is {count} USDT.", {
    count: 50
  })), 1)]), n[7] || (n[7] = s("br", null, null, -1)), n[8] || (n[8] = s("br", null, null, -1)), s("div", null, [s("span", null, a(e.t("Exchange course {n} {stars} = 1 {USDT}.", {
    n: 50
  })), 1), n[1] || (n[1] = o()), s("span", null, a(e.t("Telegram is taking {n}% commission for exchange stars for {USDT}.", {
    n: 35
  })), 1)]), n[9] || (n[9] = s("br", null, null, -1)), n[10] || (n[10] = s("br", null, null, -1)), t.paidUSDT > 0 ? (r(), i("div", M, [s("div", null, a(e.t("Paid out {n} {stars}", {
    n: e.paid
  })), 1), s("div", R, "~" + a(t.paidUSDT) + " USDT", 1)])) : u("", !0), t.availablePurchase.length > 0 ? (r(), i("div", _, [s("h2", null, a(e.t("You can use these stars to buy {Animals Food}.")), 1), p(c), p(b, {
    inset: "",
    class: "noMargin left"
  }, {
    default: d(() => [(r(!0), i(S, null, D(t.availablePurchase, l => (r(), L(y, {
      key: l.coins + "_" + l.price,
      center: ""
    }, {
      title: d(() => [n[2] || (n[2] = s("span", {
        class: "coin33"
      }, null, -1)), n[3] || (n[3] = o()), s("span", F, a(e._number(l.coins)), 1)]),
      "right-icon": d(() => [s("div", N, [l.key === 25e4 ? (r(), i("span", V, a(e.t("Best Price!")), 1)) : u("", !0), p(g, {
        type: "success",
        size: "small",
        style: {
          "margin-left": "10px"
        },
        onClick: A => t.buyRefStars(l),
        loading: e.isBuyLoading
      }, {
        default: d(() => [o("⭐️ " + a(e._number(l.price)), 1)]),
        _: 2
      }, 1032, ["onClick", "loading"])])]),
      _: 2
    }, 1024))), 128))]),
    _: 1
  })])) : u("", !0), n[11] || (n[11] = s("br", null, null, -1)), n[12] || (n[12] = s("br", null, null, -1)), n[13] || (n[13] = s("br", null, null, -1))])) : u("", !0)
}
const I = h(B, [
  ["render", E],
  ["__scopeId", "data-v-89f81142"]
]);
export {
  I as
  default
};