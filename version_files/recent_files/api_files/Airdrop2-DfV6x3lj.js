import {
  _ as B,
  G as V,
  j as z,
  A as Y,
  g as y,
  c as u,
  t as o,
  a as s,
  b as d,
  w as a,
  d as l,
  e as m,
  F as b,
  f as v,
  h as P,
  r as p,
  o as r,
  k as R
} from "./index-BqTnrUKT.js";
const Z = {
    name: "Airdrop2-g",
    components: {
      GamePopup: V,
      TonWallet: z
    },
    async created() {
      await window.listenTonConnect()
    },
    async mounted() {
      this.stores.state.setPageSettings({
        bg: "url(/assets/img/decor/finish_bg.jpg?v=3) no-repeat center center / cover fixed, #2e3c63"
      }), this.isPageLoading = !0;
      try {
        const e = await this.apiCall("airdropData");
        this.selectedMethod = e.method, this.selectedMethodData = e.data, this.tokens = e.tokens, this.wallet = (await window.tonConnectUI()).wallet, this.unsubscribe = (await window.tonConnectUI()).onStatusChange(t => this.wallet = t)
      } catch (e) {
        this._catchError(e)
      }
      this.isPageLoading = !1
    },
    async unmounted() {
      this.unsubscribe && this.unsubscribe()
    },
    data() {
      return {
        isPageLoading: !1,
        selectedMethod: null,
        selectedMethodData: null,
        activeSelectedExchange: {},
        isExchangeInfoPopupShow: !1,
        isDepositPopupShow: !1,
        depositFormInputsValue: {},
        isResetPopupShow: !1,
        isShowCharityProgram: !1,
        charityFieldType: "charity",
        charityFieldCount: 0,
        wallet: null,
        unsubscribe: null,
        faqValue: [],
        tokens: {},
        isCharityLoading: !1,
        isDonateConfirmShow: !1
      }
    },
    watch: {
      tokens(e) {
        this.charityFieldCount = Math.round(e.total / 2)
      }
    },
    computed: {
      tokensToAirdropClaim() {
        return this.tokens.airdrops.reduce((e, t) => e + t, 0)
      },
      tokensTotal() {
        return this.tokens.total > 0 ? this.tokens.total : 0
      },
      tokensFromGame() {
        let e = this.tokens.phase1 + this.tokens.phase2 + this.tokens.not + this.tokens.blum - this.tokens.nftTokens;
        return e < 1 ? 0 : e
      },
      isMaintenance() {
        return this.tokens.isMaintenance
      },
      isNormalTokensCase() {
        return !this.tokens.isAllInNFT && !(this.tokensTotal === 0 && this.tokens.charity > 0 && !this.tokens.sentToCex.tokens) && !(this.tokensTotal === 0 && !this.tokens.sentToCex.tokens)
      },
      cexText() {
        let e = "";
        this.tokens.sentToCex.method_wallet && this.tokens.sentToCex.method_wallet.length > 0 && (e = " | " + this.tokens.sentToCex.method_wallet.substring(0, 5) + "...." + this.tokens.sentToCex.method_wallet.substring(this.tokens.sentToCex.method_wallet.length - 5));
        let t = "";
        this.tokens.sentToCex.method_uid && this.tokens.sentToCex.method_uid.length > 0 && (t = " | uid: " + this.tokens.sentToCex.method_uid);
        let h = "";
        return this.tokens.sentToCex.method_memo && this.tokens.sentToCex.method_memo.length > 0 && (h = " | memo: " + this.tokens.sentToCex.method_memo), `${this.tokens.sentToCex.method_key||""} ${e} ${t} ${h}`
      },
      dbExchangeOnChain() {
        return [{
          key: "onchain_airdrop",
          title: "On-chain Airdrop",
          uid_title: "",
          kycStatus: "notNeeded",
          isExchange: !1,
          isNeedGas: !0,
          refCode: "",
          registerLink: "",
          datesInfo: [{
            date: "2025-02-17T18:00:00.000Z",
            title: "Start  of collection of withdrawal requests in on-chain"
          }, {
            date: "2025-02-25T12:00:00.000Z",
            title: "First On-chain Distribution"
          }, {
            date: "2025-02-28T12:00:00.000Z",
            title: "End of collection of withdrawal requests in on-chain"
          }]
        }]
      },
      dbExchange() {
        var e;
        return (e = this.tokens) != null && e.isCexFinish ? this.dbExchangeOnChain : [{
          key: "bitget",
          title: "Bitget Exchange",
          uid_title: "Bitget UID",
          kycStatus: "need",
          isExchange: !0,
          isNeedGas: !1,
          inputs: ["uid", "deposit_address"],
          registerLink: "https://partner.bitget.com/bg/XEmpirexBITGET",
          datesInfo: [{
            date: "2025-02-22T09:00:00.000Z",
            title: "Deposit end"
          }, {
            date: "2025-02-24T18:00:00.000Z",
            title: "Bitget confirmation/decline"
          }, {
            date: "2025-02-25T12:00:00.000Z",
            title: "You'll get your Airdrop"
          }],
          docLink: "https://docs.google.com/document/d/1PvpEwvVeiFRUdx05cPVOGdsL33FNUR8i6lvNTpVNHYE/edit"
        }, {
          key: "okx",
          title: "OKX Exchange",
          uid_title: "OKX UID",
          kycStatus: "need",
          isExchange: !0,
          isNeedGas: !1,
          inputs: ["uid", "deposit_address", "memo"],
          registerLink: "https://www.okx.com/join/EMPIREX",
          datesInfo: [{
            date: "2025-02-22T09:00:00.000Z",
            title: "Deposit end"
          }, {
            date: "2025-02-24T18:00:00.000Z",
            title: "OKX confirmation/decline"
          }, {
            date: "2025-02-25T12:00:00.000Z",
            title: "You'll get your Airdrop"
          }]
        }, {
          key: "bybit",
          title: "Bybit Exchange",
          uid_title: "Bybit UID",
          kycStatus: "need",
          isExchange: !0,
          isNeedGas: !1,
          inputs: ["uid", "deposit_address", "memo"],
          registerLink: "https://partner.bybit.com/b/86127",
          datesInfo: [{
            date: "2025-02-22T09:00:00.000Z",
            title: "Deposit end"
          }, {
            date: "2025-02-24T18:00:00.000Z",
            title: "Bybit confirmation/decline"
          }, {
            date: "2025-02-25T12:00:00.000Z",
            title: "You'll get your Airdrop"
          }]
        }, {
          key: "onchain_airdrop",
          title: "On-chain Airdrop",
          uid_title: "",
          kycStatus: "notNeeded",
          isExchange: !1,
          isNeedGas: !0,
          refCode: "",
          registerLink: "",
          datesInfo: [{
            date: "2025-02-25T12:00:00.000Z",
            title: "First On-chain Distribution"
          }, {
            date: "2025-02-28T12:00:00.000Z",
            title: "End of collection of withdrawal requests in on-chain"
          }]
        }]
      },
      isExchangeSaveButtonDisabled() {
        return !!(Object.values(this.depositFormInputsValue).some(t => !t) || this.isPageLoading)
      },
      getExchangeDescription() {
        switch (this.activeSelectedExchange.key) {
          case "binance":
            return this.t("Trade on the go. Anywhere, anytime. Over 220M users trust {Binance}");
          case "okx":
            return this.t("Unlock new trading possibilities with {OKX}. Trusted by traders worldwide—trade anytime, from anywhere.");
          case "bybit":
            return this.t("{Bybit} brings you closer to the market. Trade confidently, wherever you are, and shape the future of trading.");
          case "bitget":
            return this.t("Trade smarter. Trade on {Bitget}.");
          case "telegram_wallet":
            return this.t("Wallet inside Telegram. Get tokens in two clicks.");
          case "onchain_airdrop":
            return this.t("Get it on any {TON} wallet. You'll have to pay a fee to receive it.");
          case "ebi":
            return this.t("{ebi.xyz} is a decentralized platform with a non-custodial limit-order book designed for trading perpetual futures contracts.")
        }
        return ""
      }
    },
    methods: {
      getAddressNonBounceableMedium(e) {
        if (!e || e.length < 1) return "";
        const h = new Y(e).toString(!0, !0, !1, !1);
        return h.substring(0, 8) + "...." + h.substring(h.length - 8)
      },
      async tonConnectStatusHandler(e) {
        if (this.wallet = e, !this.selectedMethod && e) {
          const t = {
            method: "onchain_airdrop",
            data: {
              deposit_address: e.account.address
            }
          };
          try {
            const h = await this.apiCall("airdropSave", t);
            this.selectedMethod = h.method, this.selectedMethodData = h.data, this.tokens = h.tokens
          } catch (h) {
            this._catchError(h)
          }
        }
      },
      async handleResetOptions() {
        this.isPageLoading = !0, this.isResetPopupShow = !1;
        try {
          const e = await this.apiCall("airdropReset");
          this.selectedMethod = e.method, this.selectedMethodData = e.data, this.tokens = e.tokens, this.wallet && this.unsubscribe && (await (await window.tonConnectUI()).disconnect(), this.unsubscribe(), this.wallet = null, this.unsubscribe = null)
        } catch (e) {
          this._catchError(e)
        }
        this.isPageLoading = !1
      },
      async onSubmit() {
        this.isPageLoading = !0;
        const e = {
          method: this.activeSelectedExchange.key,
          data: this.depositFormInputsValue
        };
        try {
          const t = await this.apiCall("airdropSave", e);
          this.selectedMethod = t.method, this.selectedMethodData = t.data, this.tokens = t.tokens
        } catch (t) {
          this._catchError(t)
        }
        this.isPageLoading = !1, this.isResetPopupShow = !1
      },
      getImage(e) {
        return "/assets/img/airdrop/" + e + ".jpg?v=1"
      },
      getKycTagStatus(e) {
        switch (e) {
          case "need":
            return {
              color: "#ee8893", text: "KYC Needed"
            };
          case "notNeeded":
            return {
              color: "#5eb23c", text: "No KYC"
            };
          case "optional":
            return {
              color: "#eda257", text: "Light KYC"
            };
          default:
            return {
              color: "#5eb23c", text: "No KYC"
            }
        }
      },
      showExchangeInfo(e) {
        this.activeSelectedExchange = e, e.isExchange && !this.selectedMethod ? this.isExchangeInfoPopupShow = !0 : (this.depositFormInputsValue = this._cloneObject(this.selectedMethodData), this.isDepositPopupShow = !0)
      },
      getInputTitle(e, t) {
        if (e === "uid") return t.uid_title ? t.uid_title : "UID";
        const h = {
          memo: "Memo",
          deposit_address: "$ZOO Deposit Address"
        };
        return e in h ? h[e] : e
      },
      getNormalizedDates(e) {
        return e.map(t => {
          const h = new Date(t.date),
            S = {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              timeZone: "UTC"
            };
          return `${h.toLocaleString("en-US",S).replace(",","")} UTC - ${t.title}`
        })
      },
      async showDepositInfo() {
        this.isExchangeInfoPopupShow = !1, this.isDepositPopupShow = !0, this.depositFormInputsValue = {}, this.activeSelectedExchange.inputs.forEach(e => {
          this.depositFormInputsValue[e] = ""
        })
      }
    }
  },
  q = {
    key: 1,
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%, -50%, 0)"
    }
  },
  G = {
    key: 2
  },
  j = {
    style: {
      padding: "30% 0",
      "text-align": "center"
    }
  },
  H = {
    key: 3,
    class: "container"
  },
  W = {
    class: "",
    style: {
      color: "#fff"
    }
  },
  X = {
    class: "",
    style: {
      color: "#fff"
    }
  },
  K = {
    class: "date center"
  },
  Q = {
    class: "tokenCount"
  },
  J = {
    class: "tips"
  },
  $ = {
    class: "title"
  },
  ee = {
    key: 0
  },
  te = {
    style: {
      "font-size": "0.7em"
    }
  },
  oe = {
    key: 0,
    style: {
      "line-height": "1",
      padding: "5px 10px"
    }
  },
  se = {
    class: "tips"
  },
  ne = {
    key: 0,
    class: "preTitle",
    style: {
      color: "#3ed966",
      "margin-top": "30px"
    }
  },
  ie = {
    key: 1,
    class: "preTitle"
  },
  ae = ["src", "alt"],
  le = {
    style: {
      margin: "0 10px"
    }
  },
  re = {
    key: 1
  },
  de = {
    key: 2,
    style: {
      margin: "40px 0"
    }
  },
  ue = {
    style: {
      margin: "40px 0",
      "padding-bottom": "40px"
    }
  },
  he = {
    class: "faqItemContent"
  },
  ce = {
    class: "faqItemContent"
  },
  pe = {
    class: "faqItemContent"
  },
  ge = {
    class: "faqItemContent"
  },
  me = {
    class: "faqItemContent"
  },
  fe = {
    class: "resetOptionsPopup container"
  },
  ye = {
    class: "title"
  },
  ke = {
    class: "exchangeInfoPopup container center"
  },
  be = {
    class: "depositPopup container"
  },
  we = {
    class: "info"
  },
  ve = ["src", "alt"],
  _e = {
    class: "title"
  },
  Ce = {
    class: "description"
  },
  Te = {
    class: "walletButtons"
  },
  Se = {
    class: "panelBrown",
    style: {
      "margin-top": "30px"
    }
  },
  Ee = {
    class: "depositFields"
  },
  Ie = {
    class: "label"
  },
  xe = {
    style: {
      display: "inline-block",
      "border-bottom": "1px dashed #ccc"
    }
  },
  Pe = {
    class: "center",
    style: {
      "font-size": "1.3em",
      color: "#3ed966",
      "font-weight": "bold",
      "margin-top": "20px"
    }
  };

function De(e, t, h, S, n, c) {
  var E, I;
  const D = p("van-loading"),
    f = p("van-button"),
    _ = p("van-icon"),
    M = p("van-cell"),
    O = p("van-cell-group"),
    C = p("van-notice-bar"),
    w = p("van-collapse-item"),
    F = p("van-collapse"),
    T = p("van-popup"),
    U = p("ton-wallet"),
    N = p("van-field"),
    L = p("van-form");
  return n.isPageLoading ? (r(), y(D, {
    key: 0,
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%, -50%, 0)"
    }
  })) : isNaN(n.tokens.total) ? (r(), u("div", q, o(e.t("Please reload page")), 1)) : c.isMaintenance ? (r(), u("div", G, [s("div", j, [s("p", null, o(e.t("We are currently making the snapshot of the data to make {on-chain} airdrop.")), 1), s("p", null, o(e.t("It could take several minutes.")), 1), s("p", null, o(e.t("Try again later.")), 1)])])) : n.tokens.total ? (r(), u("div", {
    key: 4,
    class: P(["airdrop container pageContainer", {
      blur: n.isPageLoading
    }]),
    style: {
      "padding-top": "20px"
    }
  }, [t[23] || (t[23] = s("h1", {
    class: "center aniH1 goldText"
  }, "Airdrop", -1)), s("h2", K, o(e.t("February 25, 2025. 12:00 UTC")), 1), s("div", Q, [s("div", J, o(e.t("Tokens")), 1), s("div", $, o(e._number(c.tokensTotal)) + " $ZOO", 1), s("table", null, [s("tbody", null, [((E = n.tokens.sentToCex) == null ? void 0 : E.tokens) > 0 ? (r(), u("tr", ee, [s("td", te, [l(o(e.t("Sent to {cex}", {
    cex: c.cexText
  })) + " ", 1), t[12] || (t[12] = s("br", null, null, -1)), l(" " + o(e.t("You will be able to see your balance on 25 February at 12:00 UTC")), 1)])])) : m("", !0), (r(!0), u(b, null, v(n.tokens.airdropsData, (i, k) => (r(), u("tr", {
    key: `airdrop_tokens_${k}`
  }, [(i == null ? void 0 : i.tokens) > 0 ? (r(), u("td", oe, [l(" On-Chain Airdrop #" + o(k + 1) + " ", 1), s("div", se, o(c.getAddressNonBounceableMedium(i == null ? void 0 : i.method_wallet)), 1)])) : m("", !0)]))), 128))])])]), (I = this.tokens) != null && I.isCexFinish && n.selectedMethod && n.selectedMethod !== "onchain_airdrop" ? m("", !0) : (r(), u(b, {
    key: 0
  }, [n.selectedMethod ? (r(), u("div", ne, o(e.t("This method is chosen to withdraw tokens:")), 1)) : (r(), u("div", ie, o(e.t("Choose withdrawal option:")), 1)), d(O, {
    inset: "",
    style: {
      margin: "10px 0 0 0"
    },
    class: "exchanges"
  }, {
    default: a(() => [(r(!0), u(b, null, v(c.dbExchange, i => (r(), y(M, {
      key: i == null ? void 0 : i.key,
      class: P(["exchange", {
        bold: (i == null ? void 0 : i.key) === "onchain_airdrop",
        disabled: n.selectedMethod && i.key !== n.selectedMethod
      }]),
      onClick: k => c.showExchangeInfo(i),
      size: "large",
      center: "",
      "is-link": ""
    }, R({
      icon: a(() => [s("img", {
        class: "image",
        src: c.getImage(i == null ? void 0 : i.key),
        alt: i.key,
        style: {
          width: "40px",
          "border-radius": "100px"
        }
      }, null, 8, ae)]),
      title: a(() => [s("span", le, o(i.title), 1)]),
      _: 2
    }, [n.selectedMethod ? {
      name: "right-icon",
      fn: a(() => [s("span", null, [l(o(e.t("Connected")) + "   ", 1), d(_, {
        name: "checked"
      })])]),
      key: "0"
    } : void 0]), 1032, ["class", "onClick"]))), 128))]),
    _: 1
  })], 64)), n.selectedMethod ? (r(), u("div", re, [n.selectedMethod === "onchain_airdrop" ? (r(), y(C, {
    key: 0,
    wrapable: "",
    scrollable: !1,
    "left-icon": "warning",
    style: {
      "border-radius": "10px",
      "margin-top": "10px",
      "line-height": "normal"
    }
  }, {
    default: a(() => [l(" • " + o(e.t("The tokens will not appear automatically in your wallet.")) + " ", 1), t[13] || (t[13] = s("br", null, null, -1)), l(" • " + o(e.t("You will need to collect them manually by paying a fee of about 0.1 TON.")), 1), t[14] || (t[14] = s("br", null, null, -1)), l(" • " + o(e.t("The button to collect the tokens will appear on 25 February at 12:00 {UTC} on this page")), 1), t[15] || (t[15] = s("br", null, null, -1)), l(" • " + o(e.t("You can pick them up between 25th and 28th February 12:00 {UTC}")), 1), t[16] || (t[16] = s("br", null, null, -1)), l(" • " + o(e.t("It will not be possible to collect later than this interval.")), 1)]),
    _: 1
  })) : (r(), y(C, {
    key: 1,
    wrapable: "",
    scrollable: !1,
    "left-icon": "warning",
    style: {
      "border-radius": "10px",
      "margin-top": "10px",
      "line-height": "normal"
    }
  }, {
    default: a(() => [l(" • " + o(e.t("If you have entered incorrect data, you will not be able to get tokens and we will not be able to help you in any way.")) + " ", 1), t[17] || (t[17] = s("br", null, null, -1)), l(" • " + o(e.t("For various reasons, the exchange may refuse to receive tokens for your data.")) + " ", 1), t[18] || (t[18] = s("br", null, null, -1)), l(" • " + o(e.t("If on 25 February at 12:00 {UTC} you have reset the type of claim you need to select {On-chain}.")) + " ", 1), t[19] || (t[19] = s("br", null, null, -1))]),
    _: 1
  })), d(f, {
    loading: n.isPageLoading,
    onClick: t[0] || (t[0] = i => n.isResetPopupShow = !0),
    class: "saveButton",
    size: "large",
    round: "",
    type: "danger",
    icon: "replay",
    style: {
      "margin-bottom": "30px"
    }
  }, {
    default: a(() => [l(o(e.t("Reset withdrawal option")), 1)]),
    _: 1
  }, 8, ["loading"])])) : m("", !0), n.tokens.isOnChainStarted && n.selectedMethod === "onchain_airdrop" && c.tokensToAirdropClaim ? (r(), u("div", de, [d(f, {
    type: "success",
    size: "large",
    round: "",
    onClick: t[1] || (t[1] = i => e.$router.push("/on-chain-airdrop"))
  }, {
    default: a(() => [l(o(e.t("Go to claim page")), 1)]),
    _: 1
  })])) : m("", !0), n.tokens.isOnChainStarted && n.selectedMethod === "onchain_airdrop" && !c.tokensToAirdropClaim && n.tokens.total > 0 ? (r(), y(C, {
    key: 3,
    wrapable: "",
    scrollable: !1,
    "left-icon": "warning",
    style: {
      "border-radius": "10px",
      "margin-top": "10px",
      "line-height": "normal"
    }
  }, {
    default: a(() => [l(o(e.t("Your {on-chain} withdrawal request is in the processing queue. Please come back later to collect your tokens.")), 1)]),
    _: 1
  })) : m("", !0), s("div", ue, [t[20] || (t[20] = s("h2", null, "FAQ", -1)), d(F, {
    modelValue: n.faqValue,
    "onUpdate:modelValue": t[2] || (t[2] = i => n.faqValue = i),
    style: {
      "border-radius": "10px",
      overflow: "hidden"
    }
  }, {
    default: a(() => [d(w, {
      name: "1",
      border: !1
    }, {
      title: a(() => [l(o(e.t("When will I receive my tokens?")), 1)]),
      default: a(() => [s("div", he, [s("p", null, o(e.t("If you have submitted an application and CEX has approved it, the tokens will appear in your account on the selected exchange at the time of listing. There may be slight delays in token distribution on the exchange side.")) + " " + o(e.t("You will be able to collect {on-chain} tokens from 25 February 12:00 utc, but the speed depends on network load and technical issues.")), 1)])]),
      _: 1
    }), d(w, {
      name: "2",
      border: !1
    }, {
      title: a(() => [l(o(e.t("What is the difference between Off-Chain and On-Chain Claim?")), 1)]),
      default: a(() => [s("div", ce, [s("p", null, o(e.t("An {Off-Chain} transaction does not require you to pay gas fees, and the claim will occur on your selected exchange for free. This feature is available to you only until February 22, 2025, 09:00 UTC, and works exclusively with the list of exchanges mentioned above.")), 1), s("p", null, o(e.t("An {On-Chain} transaction will require you to have gas (approximately 0.1 {TON}). You will receive the tokens only a few hours after the listing, depending on the load on the {TON} network.")), 1)])]),
      _: 1
    }), d(w, {
      name: "3",
      border: !1
    }, {
      title: a(() => [l(o(e.t("Can I change the exchange if I have already chosen one?")), 1)]),
      default: a(() => [s("div", pe, [s("p", null, o(e.t("Yes, you can change the platform for token withdrawal until February 22, 2025, 09:00 UTC.")), 1)])]),
      _: 1
    }), d(w, {
      name: "4",
      border: !1
    }, {
      title: a(() => [l(o(e.t("Until what date can I withdraw tokens from {Zoo}?")), 1)]),
      default: a(() => [s("div", ge, [s("p", null, o(e.t("Token withdrawals will be available until February 28, 2025, 12:00 UTC.")), 1)])]),
      _: 1
    }), d(w, {
      name: "11",
      border: !1
    }, {
      title: a(() => [l(o(e.t("Important notes")), 1)]),
      default: a(() => [s("div", me, [s("p", null, o(e.t("In some cases, the exchange may refuse your token claim (if you provided incorrect account details, the account is blocked or unverified, etc.). In this case, the tokens will be returned to our app, and you will be able to claim them again, but only via {On-Chain}.")), 1)])]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"])]), d(T, {
    show: n.isResetPopupShow,
    "onUpdate:show": t[4] || (t[4] = i => n.isResetPopupShow = i),
    round: "",
    closeable: "",
    position: "center"
  }, {
    default: a(() => [s("div", fe, [s("h3", ye, o(e.t("Are you sure you want to reset your withdrawal options?")), 1), s("p", null, o(e.t("All information about deposit addresses, UID, and memo will be deleted. This action cannot be undone. You will be able to reenter all data.")), 1), d(f, {
      class: "resetButton",
      type: "danger",
      size: "large",
      onClick: c.handleResetOptions
    }, {
      default: a(() => [l(o(e.t("Reset and choose another option")), 1)]),
      _: 1
    }, 8, ["onClick"]), d(f, {
      size: "large",
      onClick: t[3] || (t[3] = i => n.isResetPopupShow = !1),
      type: "warning"
    }, {
      default: a(() => [l(o(e.t("Cancel")), 1)]),
      _: 1
    })])]),
    _: 1
  }, 8, ["show"]), d(T, {
    show: n.isExchangeInfoPopupShow,
    "onUpdate:show": t[6] || (t[6] = i => n.isExchangeInfoPopupShow = i),
    round: "",
    closeable: "",
    position: "bottom"
  }, {
    default: a(() => [s("div", ke, [s("h1", null, o(n.activeSelectedExchange.title), 1), s("p", null, o(e.t("Do you have a {exchange} account?", {
      exchange: n.activeSelectedExchange.title.replace("Exchange", "")
    })), 1), d(f, {
      onClick: t[5] || (t[5] = i => e._openUrl(n.activeSelectedExchange.registerLink)),
      type: "warning",
      round: "",
      size: "normal"
    }, {
      default: a(() => [l(o(e.t("No, let's create it")), 1)]),
      _: 1
    }), d(f, {
      class: "confirmButton",
      type: "success",
      round: "",
      size: "large",
      onClick: c.showDepositInfo
    }, {
      default: a(() => [l(o(e.t("Yes, I have it")), 1)]),
      _: 1
    }, 8, ["onClick"])])]),
    _: 1
  }, 8, ["show"]), d(T, {
    show: n.isDepositPopupShow,
    "onUpdate:show": t[10] || (t[10] = i => n.isDepositPopupShow = i),
    round: "",
    closeable: "",
    position: "bottom"
  }, {
    default: a(() => {
      var i, k;
      return [s("div", be, [s("div", we, [s("img", {
        class: "image",
        src: c.getImage((i = n.activeSelectedExchange) == null ? void 0 : i.key),
        alt: n.activeSelectedExchange.key
      }, null, 8, ve), s("h2", _e, o(n.activeSelectedExchange.title), 1)]), s("p", Ce, o(c.getExchangeDescription), 1), s("div", Te, [this.activeSelectedExchange.key === "onchain_airdrop" ? (r(), y(U, {
        key: 0,
        onWalletConnectHandler: c.tonConnectStatusHandler,
        "saved-wallet": n.selectedMethodData.deposit_address ? n.selectedMethodData.deposit_address : ""
      }, null, 8, ["onWalletConnectHandler", "saved-wallet"])) : n.selectedMethod ? m("", !0) : (r(), y(f, {
        key: 1,
        onClick: t[7] || (t[7] = g => e._openUrl(this.activeSelectedExchange.registerLink)),
        type: "warning",
        round: "",
        size: "normal"
      }, {
        default: a(() => [l(o(e.t("Register")), 1)]),
        _: 1
      }))]), s("div", Se, [(r(!0), u(b, null, v(c.getNormalizedDates(n.activeSelectedExchange.datesInfo), g => (r(), u("div", {
        key: g,
        style: {
          "font-size": "0.8em"
        }
      }, [t[21] || (t[21] = l(" • ")), s("span", null, o(g), 1)]))), 128))]), ((k = n.activeSelectedExchange.inputs) == null ? void 0 : k.length) > 0 ? (r(), y(L, {
        key: 0,
        onSubmit: c.onSubmit
      }, {
        default: a(() => [s("div", Ee, [(r(!0), u(b, null, v(n.activeSelectedExchange.inputs, g => {
          var x;
          return r(), u("div", {
            key: g
          }, [s("p", Ie, o(c.getInputTitle(g, n.activeSelectedExchange)) + ":", 1), d(N, {
            modelValue: n.depositFormInputsValue[g],
            "onUpdate:modelValue": A => n.depositFormInputsValue[g] = A,
            center: "",
            autofocus: !0,
            clearable: "",
            color: "#fff",
            style: {
              "font-size": "1.1em"
            },
            border: !1,
            disabled: !!((x = n.selectedMethodData) != null && x[g] || n.isPageLoading)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])
        }), 128))]), n.activeSelectedExchange.docLink ? (r(), u("div", {
          key: 0,
          onClick: t[8] || (t[8] = g => e._openUrl(n.activeSelectedExchange.docLink)),
          style: {
            padding: "15px 0"
          }
        }, [d(_, {
          name: "question-o"
        }), t[22] || (t[22] = l("  ")), s("span", xe, o(e.t("See instructions on how to find these fields.")), 1)])) : m("", !0), n.selectedMethod ? m("", !0) : (r(), y(f, {
          key: 1,
          loading: n.isPageLoading,
          class: "saveButton",
          "native-type": "submit",
          type: "success",
          size: "large",
          disabled: c.isExchangeSaveButtonDisabled
        }, {
          default: a(() => [l(o(e.t("Save and choose")), 1)]),
          _: 1
        }, 8, ["loading", "disabled"]))]),
        _: 1
      }, 8, ["onSubmit"])) : m("", !0), n.selectedMethod ? (r(), u(b, {
        key: 1
      }, [s("div", Pe, [d(_, {
        name: "success"
      }), l(" " + o(e.t("This method is chosen to withdraw tokens.")), 1)]), d(f, {
        loading: n.isPageLoading,
        onClick: t[9] || (t[9] = g => n.isResetPopupShow = !0),
        class: "saveButton",
        type: "danger",
        size: "large",
        icon: "replay"
      }, {
        default: a(() => [l(o(e.t("Reset withdrawal option")), 1)]),
        _: 1
      }, 8, ["loading"])], 64)) : m("", !0)])]
    }),
    _: 1
  }, 8, ["show"])], 2)) : (r(), u("div", H, [t[11] || (t[11] = s("h1", {
    class: "center aniH1 goldText"
  }, "Airdrop", -1)), s("p", W, o(e.t("You have not mined tokens in the mining phase.")), 1), s("p", X, o(e.t("Subscribe to our Telegram channel, there will be announcements of other projects.")), 1), d(f, {
    size: "large",
    type: "warning",
    onClick: e._ourTgClick,
    style: {
      "margin-top": "15px"
    }
  }, {
    default: a(() => [l(o(e.t("Follow our channel")), 1)]),
    _: 1
  }, 8, ["onClick"])]))
}
const Oe = B(Z, [
  ["render", De],
  ["__scopeId", "data-v-5225df45"]
]);
export {
  Oe as
  default
};