import {
  _ as y,
  c as i,
  a as n,
  t as s,
  l as h,
  h as k,
  d as o,
  e as u,
  b as v,
  w as d,
  g as f,
  o as l,
  F as C,
  r as T,
  f as S
} from "./index-BXVzwBqk.js";
const D = {
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
          paid: a
        } = await this.apiCall("friendsReferralBalance");
        this.balance = e, this.paid = a, this.isLoading = !1
      },
      async buyRefStars(e) {
        this.isBuyLoading = !0;
        try {
          const {
            balance: a,
            paid: p,
            hero: m
          } = await this.apiCall("referralBuyFeed", {
            key: e.key
          });
          this.balance = a, this.paid = p, this.stores.user.setHero(m), this._animateMoneyFromCenter(e.coins)
        } catch (a) {
          this._catchError(a)
        }
        this.isBuyLoading = !1
      }
    }
  },
  B = {
    key: 0,
    class: "container center"
  },
  w = {
    class: "balance"
  },
  L = {
    style: {
      "font-size": "0.8em",
      "margin-top": "5px"
    }
  },
  P = ["href"],
  U = {
    key: 0
  },
  z = {
    style: {
      "font-size": "0.8em",
      "margin-top": "5px"
    }
  },
  M = {
    key: 1
  },
  R = {
    style: {
      "font-size": "1.4em",
      "font-weight": "700"
    }
  },
  F = {
    style: {
      color: "var(--van-text-color-2)"
    },
    class: "flexRight"
  },
  N = {
    key: 0
  };

function V(e, a, p, m, E, t) {
  const g = f("van-button"),
    b = f("van-cell"),
    c = f("van-cell-group");
  return e.uProfile.isAlfaTester || e.gameConfig["referral.commission.friend_count"] > 0 && e.uProfile.friends >= e.gameConfig["referral.commission.friend_count"] ? (l(), i("div", B, [n("h3", null, s(e.t("Your referral commission")), 1), a[4] || (a[4] = h('<br data-v-a909f900><div style="display:flex;align-items:baseline;gap:10px;" data-v-a909f900><div style="flex:1;" data-v-a909f900></div><div style="font-size:40px;" data-v-a909f900>⭐</div><div style="font-size:60px;" data-v-a909f900>⭐</div><div style="font-size:40px;" data-v-a909f900>⭐</div><div style="flex:1;" data-v-a909f900></div></div><br data-v-a909f900>', 3)), n("div", {
    class: k({
      blur: e.isLoading
    })
  }, [n("div", w, s(e._number(e.balance)), 1), a[0] || (a[0] = n("div", null, "Telegram Stars", -1)), n("div", L, "~" + s(t.balanceUSDT) + " USDT", 1)], 2), a[5] || (a[5] = n("br", null, null, -1)), a[6] || (a[6] = n("br", null, null, -1)), n("div", null, [o(s(e.t("You receive {n}% for each purchase made by your friends. To withdraw funds, please contact customer support.", {
    n: e.uReferralCommission
  })) + " ", 1), e.gameConfig["referral.support.channel"] ? (l(), i("a", {
    key: 0,
    href: t.supportLink
  }, "@" + s(e.gameConfig["referral.support.channel"]), 9, P)) : u("", !0), o(". " + s(e.t("The minimum withdrawal amount is {count} USDT.", {
    count: 50
  })), 1)]), a[7] || (a[7] = n("br", null, null, -1)), a[8] || (a[8] = n("br", null, null, -1)), n("div", null, [n("span", null, s(e.t("Exchange course {n} {stars} = 1 {USDT}.", {
    n: 50
  })), 1), a[1] || (a[1] = o()), n("span", null, s(e.t("Telegram is taking {n}% commission for exchange stars for {USDT}.", {
    n: 35
  })), 1)]), a[9] || (a[9] = n("br", null, null, -1)), a[10] || (a[10] = n("br", null, null, -1)), t.paidUSDT > 0 ? (l(), i("div", U, [n("div", null, s(e.t("Paid out {n} {stars}", {
    n: e.paid
  })), 1), n("div", z, "~" + s(t.paidUSDT) + " USDT", 1)])) : u("", !0), t.availablePurchase.length > 0 ? (l(), i("div", M, [n("h2", null, s(e.t("You can use these stars to buy {Animals Food}.")), 1), v(c, {
    inset: "",
    class: "noMargin left"
  }, {
    default: d(() => [(l(!0), i(C, null, T(t.availablePurchase, r => (l(), S(b, {
      key: r.coins + "_" + r.price,
      center: ""
    }, {
      title: d(() => [a[2] || (a[2] = n("span", {
        class: "coin33"
      }, null, -1)), a[3] || (a[3] = o()), n("span", R, s(e._number(r.coins)), 1)]),
      "right-icon": d(() => [n("div", F, [r.key === 25e4 ? (l(), i("span", N, s(e.t("Best Price!")), 1)) : u("", !0), v(g, {
        type: "success",
        size: "small",
        style: {
          "margin-left": "10px"
        },
        onClick: Y => t.buyRefStars(r),
        loading: e.isBuyLoading
      }, {
        default: d(() => [o("⭐️ " + s(e._number(r.price)), 1)]),
        _: 2
      }, 1032, ["onClick", "loading"])])]),
      _: 2
    }, 1024))), 128))]),
    _: 1
  })])) : u("", !0), a[11] || (a[11] = n("br", null, null, -1)), a[12] || (a[12] = n("br", null, null, -1)), a[13] || (a[13] = n("br", null, null, -1))])) : u("", !0)
}
const _ = y(D, [
  ["render", V],
  ["__scopeId", "data-v-a909f900"]
]);
export {
  _ as
  default
};