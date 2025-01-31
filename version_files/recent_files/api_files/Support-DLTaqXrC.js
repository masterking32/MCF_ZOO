import {
  _ as f,
  c as m,
  a as t,
  t as o,
  b as a,
  w as n,
  g as u,
  o as h,
  d as r
} from "./index-_QcPBza3.js";
const N = {
    name: "Support-o",
    components: {},
    data: function() {
      return {
        supportFaqValue: []
      }
    }
  },
  c = {
    class: "container faq"
  },
  y = {
    class: "faqItemContent"
  },
  g = {
    class: "faqItemContent"
  },
  E = {
    class: "faqItemContent"
  },
  v = {
    class: "faqItemContent"
  },
  A = {
    class: "faqItemContent"
  },
  C = {
    class: "faqItemContent"
  },
  I = {
    class: "faqItemContent"
  },
  _ = {
    class: "faqItemContent"
  },
  M = {
    class: "faqItemContent"
  },
  O = {
    class: "faqItemContent"
  },
  b = {
    class: "faqItemContent"
  };

function w(e, l, T, q, k, K) {
  const s = u("van-collapse-item"),
    d = u("van-button"),
    p = u("van-collapse");
  return h(), m("div", c, [l[5] || (l[5] = t("h2", {
    class: "center"
  }, "FAQ", -1)), t("p", null, o(e.t("Before contacting support, please check the FAQ section for your question.")), 1), t("p", null, o(e.t("Here, you'll find answers to the most frequently asked questions from users.")), 1), a(p, {
    modelValue: e.supportFaqValue,
    "onUpdate:modelValue": l[3] || (l[3] = i => e.supportFaqValue = i),
    style: {
      "border-radius": "10px",
      overflow: "hidden"
    }
  }, {
    default: n(() => [a(s, {
      name: "1",
      border: !1
    }, {
      title: n(() => [r(o(e.t("How to play?")), 1)]),
      default: n(() => [t("div", y, [t("p", null, o(e.t("1. Join the Zoo, acquire animals, and enhance your enclosures! Enclosures generate tokens, and the higher their level, the faster they mine {TOKEN_NAME} tokens.", {
        TOKEN_NAME: e.TOKEN_NAME
      })), 1), t("p", null, o(e.t("2. Invite friends — earn up to 500 {COIN_NAME} for each one. Complete quests to collect even more {COIN_NAME}!", {
        COIN_NAME: e.COIN_NAME
      })), 1), t("p", null, o(e.t("3. Use the {COIN_NAME} you earn to purchase new animals and upgrade your enclosures!", {
        COIN_NAME: e.COIN_NAME
      })), 1), t("p", null, o(e.t("4. Join alliances — the higher your alliance level, the faster you mine {TOKEN_NAME}! Plus, if you create your own alliance, you’ll earn {percent}% from membership fees and donations.", {
        TOKEN_NAME: e.TOKEN_NAME,
        percent: e.gameConfig["alliance.bonus.founder"]
      })), 1), t("p", null, o(e.t("5. Mine {TOKEN_NAME} and participate in the {Airdrop}. The amount of {TOKEN_NAME} you earn is exactly the amount of tokens you’ll receive during the {Airdrop}!", {
        TOKEN_NAME: e.TOKEN_NAME
      })), 1)])]),
      _: 1
    }), a(s, {
      name: "2",
      border: !1
    }, {
      title: n(() => l[4] || (l[4] = [r("Airdrop")])),
      default: n(() => [t("div", g, [t("p", null, [r(o(e.t("It's going to be a fast and exciting event — we won't keep you waiting! Stay tuned for updates on our official channel:")) + " ", 1), a(d, {
        size: "large",
        type: "warning",
        onClick: e._ourTgClick
      }, {
        default: n(() => [r(o(e.t("Follow our channel")), 1)]),
        _: 1
      }, 8, ["onClick"])])])]),
      _: 1
    }), a(s, {
      name: "3",
      border: !1
    }, {
      title: n(() => [r(o(e.t("Friends")), 1)]),
      default: n(() => [t("div", E, [t("p", null, o(e.t("Please note that new friends may appear in the list with a slight delay. If, after a considerable amount of time, your invited friend still doesn't show up in your list, it likely means they didn't join the game using your referral link.")), 1), t("p", null, o(e.t("To receive the reward for inviting a friend, they must complete the quest by subscribing to our channel.")), 1)])]),
      _: 1
    }), a(s, {
      name: "4",
      border: !1
    }, {
      title: n(() => [r(o(e.t("Animal Feed")), 1)]),
      default: n(() => [t("div", v, [t("p", null, o(e.t("If your in-game currency was incorrectly deducted or you encountered an issue purchasing Animal Feed with stars, please contact support and select the '{COIN_NAME}' option.", {
        COIN_NAME: e.COIN_NAME
      })), 1)])]),
      _: 1
    }), a(s, {
      name: "5",
      border: !1
    }, {
      title: n(() => [r(o(e.t("Buy {COIN_NAME}", {
        COIN_NAME: e.COIN_NAME
      })), 1)]),
      default: n(() => [t("div", A, [t("p", null, o(e.t("To purchase {COIN_NAME}, you need to buy Telegram Stars. You can do this directly in the Zoo app or through one of the provided links:", {
        COIN_NAME: e.COIN_NAME
      })), 1), t("p", null, [t("a", {
        href: "#",
        onClick: l[0] || (l[0] = i => e._openUrl("https://fragment.com/stars"))
      }, "https://fragment.com/stars")]), t("p", null, [t("a", {
        href: "#",
        onClick: l[1] || (l[1] = i => e._openUrl("https://t.me/PremiumBot"))
      }, "https://t.me/PremiumBot")])])]),
      _: 1
    }), a(s, {
      name: "6",
      border: !1
    }, {
      title: n(() => [r(o(e.t("Reward for 🦒 in name")), 1)]),
      default: n(() => [t("div", C, [t("p", null, o(e.t("If you haven't received your reward for having 🦒 in your name, try closing the app completely, restarting your device, and logging back into Zoo. The reward should then appear.")), 1)])]),
      _: 1
    }), a(s, {
      name: "7",
      border: !1
    }, {
      title: n(() => [r(o(e.t("How to get {TOKEN_NAME}?", {
        TOKEN_NAME: e.TOKEN_NAME
      })), 1)]),
      default: n(() => [t("div", I, [t("p", null, o(e.t("The {TOKEN_NAME} coin mining phase is currently ongoing. Upgrade your zoo to earn more coins.", {
        TOKEN_NAME: e.TOKEN_NAME
      })), 1), t("p", null, o(e.t("During the {Airdrop}, you will receive the exact amount of tokens you earned during the mining period.")), 1)])]),
      _: 1
    }), a(s, {
      name: "8",
      border: !1
    }, {
      title: n(() => [r(o(e.t("Game not loading")), 1)]),
      default: n(() => [t("div", _, [t("p", null, o(e.t("Try completely restarting Telegram, connecting to a different internet network, or toggling your VPN on and off.")), 1)])]),
      _: 1
    }), a(s, {
      name: "9",
      border: !1
    }, {
      title: n(() => [r(o(e.t("Bugs")), 1)]),
      default: n(() => [t("div", M, [t("p", null, o(e.t("If you encounter any bugs, please contact support, select the 'Bugs' option, and provide a detailed description of the issue. Be sure to include screenshots and screen recordings.")), 1)])]),
      _: 1
    }), a(s, {
      name: "10",
      border: !1
    }, {
      title: n(() => [r(o(e.t("How do I delete my account?")), 1)]),
      default: n(() => [t("div", O, [t("p", null, o(e.t("If you want to delete your game account, simply remove the bot from your chat list.")), 1)])]),
      _: 1
    }), a(s, {
      name: "11",
      border: !1
    }, {
      title: n(() => [r(o(e.t("I have another question")), 1)]),
      default: n(() => [t("div", b, [a(d, {
        onClick: l[2] || (l[2] = i => e._openUrl("https://t.me/zoo_support_bot")),
        type: "warning",
        round: ""
      }, {
        default: n(() => [r(o(e.t("Write to support")), 1)]),
        _: 1
      })])]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"])])
}
const V = f(N, [
  ["render", w]
]);
export {
  V as
  default
};