import {
  _ as Y,
  G as q,
  T as G,
  M as R,
  A as H,
  c as u,
  a as o,
  b as d,
  d as f,
  t as n,
  w as a,
  n as P,
  e as l,
  f as m,
  F as w,
  r as _,
  g as p,
  o as r,
  h as W
} from "./index-5EZhtzKk.js";
const K = {
    name: "Airdrop2-g",
    components: {
      GamePopup: q,
      TonWallet: G,
      Menu: R
    },
    async created() {
      await window.listenTonConnect(), this.wallet = (await window.tonConnectUI()).wallet, this.unsubscribe = (await window.tonConnectUI()).onStatusChange(e => this.wallet = e)
    },
    async mounted() {
      this.stores.state.setPageSettings({
        bg: "url(/assets/img/decor/finish_bg.jpg?v=3) no-repeat center center / cover fixed, #2e3c63"
      }), this.isPageLoading = !0;
      try {
        const e = await this.apiCall("airdropData");
        this.selectedMethod = e.method, this.selectedMethodData = e.data, this.tokens = e.tokens
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
          registerLink: "https://partner.bitget.com/bg/ZOOxBITGET",
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
          docLink: "https://docs.google.com/document/d/1y9DLt8Wn5KfLh8scSvNAoNlc4yU91BvnrvNim8vc6ko/edit?usp=sharing"
        }, {
          key: "gate",
          title: "Gate.io Exchange",
          uid_title: "Gate UID",
          kycStatus: "need",
          isExchange: !0,
          isNeedGas: !1,
          inputs: ["uid", "deposit_address", "memo"],
          registerLink: "https://www.gate.io/signup?ch=signupZOO",
          datesInfo: [{
            date: "2025-02-22T09:00:00.000Z",
            title: "Deposit end"
          }, {
            date: "2025-02-24T18:00:00.000Z",
            title: "Gate.io confirmation/decline"
          }, {
            date: "2025-02-25T12:00:00.000Z",
            title: "You'll get your Airdrop"
          }],
          registerHelp: "https://www.gate.io/help/guide/register_install/22296"
        }, {
          key: "kucoin",
          title: "KuCoin Exchange",
          uid_title: "KuCoin UID",
          kycStatus: "need",
          isExchange: !0,
          isNeedGas: !1,
          inputs: ["uid", "deposit_address", "memo"],
          registerLink: "https://www.kucoin.com/r/af/rE35ETZ",
          datesInfo: [{
            date: "2025-02-22T09:00:00.000Z",
            title: "Deposit end"
          }, {
            date: "2025-02-24T18:00:00.000Z",
            title: "KuCoin confirmation/decline"
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
          case "bitget":
            return this.t("Trade smarter. Trade on {Bitget}.");
          case "kucoin":
            return this.t("Find the Next Crypto Gem on {KuCoin}. 1 Out of 4 Crypto Holders Worldwide Is with KuCoin");
          case "gate":
            return this.t("Gateway to Crypto. Trade over 3,600 cryptocurrencies safely, quickly, and easily");
          case "onchain_airdrop":
            return this.t("Get it on any {TON} wallet. You'll have to pay a fee to receive it.")
        }
        return ""
      }
    },
    methods: {
      getAddressNonBounceableMedium(e) {
        if (!e || e.length < 1) return "";
        const h = new H(e).toString(!0, !0, !1, !1);
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
  j = {
    style: {
      position: "fixed",
      top: "10px",
      right: "10px",
      "z-index": "1"
    }
  },
  Q = {
    key: 1,
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%, -50%, 0)"
    }
  },
  X = {
    key: 2
  },
  J = {
    style: {
      padding: "30% 0",
      "text-align": "center"
    }
  },
  $ = {
    key: 3,
    class: "container"
  },
  ee = {
    class: "",
    style: {
      color: "#fff"
    }
  },
  te = {
    class: "",
    style: {
      color: "#fff"
    }
  },
  oe = {
    class: "date center"
  },
  ne = {
    class: "tokenCount"
  },
  se = {
    class: "tips"
  },
  ie = {
    class: "title"
  },
  le = {
    style: {
      color: "#000",
      padding: "15px"
    }
  },
  ae = {
    class: "zTextShadow2white"
  },
  re = {
    key: 0
  },
  de = {
    style: {
      "font-size": "0.7em"
    }
  },
  ue = {
    key: 0,
    style: {
      "line-height": "1",
      padding: "5px 10px"
    }
  },
  he = {
    class: "tips"
  },
  ce = {
    key: 0,
    class: "preTitle center"
  },
  pe = ["src", "alt"],
  me = {
    style: {
      margin: "0 10px"
    }
  },
  ge = {
    style: {
      margin: "0 10px"
    }
  },
  fe = {
    key: 0
  },
  ye = {
    key: 1
  },
  ke = {
    style: {
      "font-size": "1.3em",
      "font-weight": "700"
    }
  },
  we = {
    style: {
      "font-size": "1.3em",
      "font-weight": "700"
    }
  },
  be = {
    key: 2,
    style: {
      margin: "40px 0"
    }
  },
  ve = {
    style: {
      margin: "40px 0",
      "padding-bottom": "40px"
    }
  },
  _e = {
    class: "faqItemContent"
  },
  Ce = {
    class: "faqItemContent"
  },
  Te = {
    class: "faqItemContent"
  },
  Se = {
    class: "faqItemContent"
  },
  Ie = {
    class: "faqItemContent"
  },
  Ee = {
    class: "resetOptionsPopup container"
  },
  xe = {
    class: "title"
  },
  Me = {
    class: "exchangeInfoPopup container center"
  },
  De = {
    class: "depositPopup container"
  },
  Pe = {
    class: "info"
  },
  Fe = ["src", "alt"],
  Ne = {
    class: "title"
  },
  Oe = {
    class: "description"
  },
  Ue = {
    class: "walletButtons"
  },
  Le = {
    class: "panelBrown",
    style: {
      "margin-top": "30px"
    }
  },
  Ae = {
    class: "depositFields"
  },
  ze = {
    class: "label"
  },
  Ve = {
    style: {
      display: "inline-block",
      "border-bottom": "1px dashed #ccc"
    }
  },
  Be = {
    class: "center",
    style: {
      "font-size": "1.3em",
      color: "#3ed966",
      "font-weight": "bold",
      "margin-top": "20px"
    }
  };

function Ze(e, t, h, S, s, c) {
  var E, x, M;
  const F = p("Menu"),
    N = p("van-loading"),
    y = p("van-button"),
    b = p("van-icon"),
    O = p("van-popover"),
    I = p("van-tag"),
    U = p("van-cell"),
    L = p("van-cell-group"),
    C = p("van-notice-bar"),
    v = p("van-collapse-item"),
    A = p("van-collapse"),
    T = p("van-popup"),
    z = p("ton-wallet"),
    V = p("van-field"),
    B = p("van-form");
  return r(), u(w, null, [o("div", j, [d(F)]), s.isPageLoading ? (r(), f(N, {
    key: 0,
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%, -50%, 0)"
    }
  })) : isNaN(s.tokens.total) ? (r(), u("div", Q, n(e.t("Please reload page")), 1)) : c.isMaintenance ? (r(), u("div", X, [o("div", J, [o("p", null, n(e.t("We are currently making the snapshot of the data to make {on-chain} airdrop.")), 1), o("p", null, n(e.t("It could take several minutes.")), 1), o("p", null, n(e.t("Try again later.")), 1)])])) : s.tokens.total ? (r(), u("div", {
    key: 4,
    class: P(["airdrop container pageContainer", {
      blur: s.isPageLoading
    }]),
    style: {
      "padding-top": "20px"
    }
  }, [t[30] || (t[30] = o("h1", {
    class: "center aniH1 goldText"
  }, "Airdrop", -1)), o("h2", oe, n(e.t("February 25, 2025. 12:00 UTC")), 1), o("div", ne, [o("div", se, n(e.t("Tokens")), 1), o("div", ie, [d(O, {
    style: {
      "max-width": "calc(100% - 20px)"
    }
  }, {
    reference: a(() => [o("div", ae, [l(n(e._number(Math.ceil(c.tokensTotal / 1e3))) + " $ZOO ", 1), d(b, {
      name: "question-o",
      style: {
        "font-size": "0.9em"
      }
    })])]),
    default: a(() => [o("div", le, [l(n(e.t("The displayed token amount reflects the post-denomination value. The rounding was done upward.")) + " " + n(e.t("You can read more about the denomination in our Telegram channel.")), 1), t[13] || (t[13] = o("br", null, null, -1)), d(y, {
      type: "warning",
      onClick: t[0] || (t[0] = i => e._openUrl("https://t.me/zoo_story/315")),
      style: {
        "margin-top": "15px"
      }
    }, {
      default: a(() => [l(n(e.t("News here")), 1)]),
      _: 1
    })])]),
    _: 1
  })]), o("table", null, [o("tbody", null, [((E = s.tokens.sentToCex) == null ? void 0 : E.tokens) > 0 ? (r(), u("tr", re, [o("td", de, [l(n(e.t("Sent to {cex}", {
    cex: c.cexText
  })) + " ", 1), t[14] || (t[14] = o("br", null, null, -1)), l(" " + n(e.t("You will be able to see your balance on 25 February at 12:00 UTC")), 1)])])) : m("", !0), (r(!0), u(w, null, _(s.tokens.airdropsData, (i, k) => (r(), u("tr", {
    key: `airdrop_tokens_${k}`
  }, [(i == null ? void 0 : i.tokens) > 0 ? (r(), u("td", ue, [l(" On-Chain Airdrop #" + n(k + 1) + " ", 1), o("div", he, n(c.getAddressNonBounceableMedium(i == null ? void 0 : i.method_wallet)), 1)])) : m("", !0)]))), 128))])])]), (x = this.tokens) != null && x.isCexFinish && s.selectedMethod && s.selectedMethod !== "onchain_airdrop" ? m("", !0) : (r(), u(w, {
    key: 0
  }, [s.selectedMethod ? m("", !0) : (r(), u("div", ce, n(e.t("Choose withdrawal option:")), 1)), d(L, {
    inset: "",
    style: {
      margin: "10px 0 0 0"
    },
    class: "exchanges"
  }, {
    default: a(() => [(r(!0), u(w, null, _(c.dbExchange, i => (r(), f(U, {
      key: i == null ? void 0 : i.key,
      class: P(["exchange", {
        bold: (i == null ? void 0 : i.key) === "onchain_airdrop",
        disabled: s.selectedMethod && i.key !== s.selectedMethod
      }]),
      size: "large",
      center: "",
      "is-link": "",
      onClick: k => c.showExchangeInfo(i)
    }, W({
      icon: a(() => [o("img", {
        class: "image",
        src: c.getImage(i == null ? void 0 : i.key),
        alt: i.key,
        style: {
          width: "40px",
          "border-radius": "100px"
        }
      }, null, 8, pe)]),
      title: a(() => [o("span", me, n(i.title), 1)]),
      "right-icon": a(() => [s.selectedMethod ? (r(), u("span", fe, [l(n(e.t("Connected")) + "   ", 1), d(b, {
        name: "checked"
      })])) : (r(), u(w, {
        key: 1
      }, [(i == null ? void 0 : i.key) === "onchain_airdrop" ? (r(), f(I, {
        key: 0,
        type: "primary",
        color: "#99723b"
      }, {
        default: a(() => t[15] || (t[15] = [l("No KYC")])),
        _: 1
      })) : (r(), f(I, {
        key: 1,
        type: "primary",
        color: "#99723b"
      }, {
        default: a(() => t[16] || (t[16] = [l("No Gas Fee")])),
        _: 1
      })), t[17] || (t[17] = l("   ")), d(b, {
        name: "arrow",
        color: "#969799"
      })], 64))]),
      _: 2
    }, [s.selectedMethod ? {
      name: "label",
      fn: a(() => [o("span", ge, n(e.t("This method is chosen")), 1)]),
      key: "0"
    } : void 0]), 1032, ["class", "onClick"]))), 128))]),
    _: 1
  })], 64)), s.selectedMethod ? (r(), u("div", ye, [s.selectedMethod === "onchain_airdrop" ? (r(), f(C, {
    key: 0,
    wrapable: "",
    scrollable: !1,
    style: {
      "border-radius": "10px",
      "margin-top": "10px",
      "line-height": "normal"
    }
  }, {
    default: a(() => [o("div", ke, [d(b, {
      name: "warning-o"
    }), l(" " + n(e.t("Warning:")), 1)]), l(" • " + n(e.t("The tokens will not appear automatically in your wallet.")) + " ", 1), t[18] || (t[18] = o("br", null, null, -1)), l(" • " + n(e.t("You will need to collect them manually by paying a fee of about 0.1 TON.")), 1), t[19] || (t[19] = o("br", null, null, -1)), l(" • " + n(e.t("The button to collect the tokens will appear on 25 February at 12:00 {UTC} on this page")), 1), t[20] || (t[20] = o("br", null, null, -1)), l(" • " + n(e.t("You can pick them up between 25th and 28th February 12:00 {UTC}")), 1), t[21] || (t[21] = o("br", null, null, -1)), l(" • " + n(e.t("It will not be possible to collect later than this interval.")), 1)]),
    _: 1
  })) : (r(), f(C, {
    key: 1,
    wrapable: "",
    scrollable: !1,
    style: {
      "border-radius": "10px",
      "margin-top": "10px",
      "line-height": "normal"
    }
  }, {
    default: a(() => [o("div", we, [d(b, {
      name: "warning-o"
    }), l(" " + n(e.t("Warning:")), 1)]), l(" • " + n(e.t("If you have entered incorrect data, you will not be able to get tokens and we will not be able to help you in any way.")) + " ", 1), t[22] || (t[22] = o("br", null, null, -1)), l(" • " + n(e.t("Exchange details can only be used once.")) + " ", 1), t[23] || (t[23] = o("br", null, null, -1)), l(" • " + n(e.t("For various reasons, the exchange may refuse to receive tokens for your data.")) + " ", 1), t[24] || (t[24] = o("br", null, null, -1)), l(" • " + n(e.t("If on 25 February at 12:00 {UTC} you have reset the type of claim you need to select {On-chain}.")) + " ", 1), t[25] || (t[25] = o("br", null, null, -1))]),
    _: 1
  })), (M = this.tokens) != null && M.isCexFinish && s.selectedMethod && s.selectedMethod !== "onchain_airdrop" ? m("", !0) : (r(), f(y, {
    key: 2,
    loading: s.isPageLoading,
    onClick: t[1] || (t[1] = i => s.isResetPopupShow = !0),
    class: "saveButton",
    size: "large",
    round: "",
    type: "danger",
    icon: "replay",
    style: {
      "margin-bottom": "30px"
    }
  }, {
    default: a(() => [l(n(e.t("Reset withdrawal option")), 1)]),
    _: 1
  }, 8, ["loading"]))])) : m("", !0), s.tokens.isOnChainStarted && s.selectedMethod === "onchain_airdrop" && c.tokensToAirdropClaim ? (r(), u("div", be, [d(y, {
    type: "success",
    size: "large",
    round: "",
    onClick: t[2] || (t[2] = i => e.$router.push("/on-chain-airdrop"))
  }, {
    default: a(() => [l(n(e.t("Go to claim page")), 1)]),
    _: 1
  })])) : m("", !0), s.tokens.isOnChainStarted && s.selectedMethod === "onchain_airdrop" && !c.tokensToAirdropClaim && s.tokens.total > 0 ? (r(), f(C, {
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
    default: a(() => [l(n(e.t("Your {on-chain} withdrawal request is in the processing queue. Please come back later to collect your tokens.")), 1)]),
    _: 1
  })) : m("", !0), o("div", ve, [t[26] || (t[26] = o("h2", null, "FAQ", -1)), d(A, {
    modelValue: s.faqValue,
    "onUpdate:modelValue": t[3] || (t[3] = i => s.faqValue = i),
    style: {
      "border-radius": "10px",
      overflow: "hidden"
    }
  }, {
    default: a(() => [d(v, {
      name: "1",
      border: !1
    }, {
      title: a(() => [l(n(e.t("When will I receive my tokens?")), 1)]),
      default: a(() => [o("div", _e, [o("p", null, n(e.t("If you have submitted an application and CEX has approved it, the tokens will appear in your account on the selected exchange at the time of listing. There may be slight delays in token distribution on the exchange side.")) + " " + n(e.t("You will be able to collect {on-chain} tokens from 25 February 12:00 utc, but the speed depends on network load and technical issues.")), 1)])]),
      _: 1
    }), d(v, {
      name: "2",
      border: !1
    }, {
      title: a(() => [l(n(e.t("What is the difference between Off-Chain and On-Chain Claim?")), 1)]),
      default: a(() => [o("div", Ce, [o("p", null, n(e.t("An {Off-Chain} transaction does not require you to pay gas fees, and the claim will occur on your selected exchange for free. This feature is available to you only until February 22, 2025, 09:00 UTC, and works exclusively with the list of exchanges mentioned above.")), 1), o("p", null, n(e.t("An {On-Chain} transaction will require you to have fee (approximately 0.1 {TON}). You will receive the tokens only a few hours after the listing, depending on the load on the {TON} network.")), 1)])]),
      _: 1
    }), d(v, {
      name: "3",
      border: !1
    }, {
      title: a(() => [l(n(e.t("Can I change the exchange if I have already chosen one?")), 1)]),
      default: a(() => [o("div", Te, [o("p", null, n(e.t("Yes, you can change the platform for token withdrawal until February 22, 2025, 09:00 UTC.")), 1)])]),
      _: 1
    }), d(v, {
      name: "4",
      border: !1
    }, {
      title: a(() => [l(n(e.t("Until what date can I withdraw tokens from {Zoo}?")), 1)]),
      default: a(() => [o("div", Se, [o("p", null, n(e.t("Token withdrawals will be available until February 28, 2025, 12:00 UTC.")), 1)])]),
      _: 1
    }), d(v, {
      name: "11",
      border: !1
    }, {
      title: a(() => [l(n(e.t("Important notes")), 1)]),
      default: a(() => [o("div", Ie, [o("p", null, n(e.t("In some cases, the exchange may refuse your token claim (if you provided incorrect account details, the account is blocked or unverified, etc.). In this case, the tokens will be returned to our app, and you will be able to claim them again, but only via {On-Chain}.")), 1)])]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"])]), d(T, {
    show: s.isResetPopupShow,
    "onUpdate:show": t[5] || (t[5] = i => s.isResetPopupShow = i),
    round: "",
    closeable: "",
    position: "center"
  }, {
    default: a(() => [o("div", Ee, [o("h3", xe, n(e.t("Are you sure you want to reset your withdrawal options?")), 1), o("p", null, n(e.t("All information about deposit addresses, UID, and memo will be deleted. This action cannot be undone. You will be able to reenter all data.")), 1), d(y, {
      class: "resetButton",
      type: "danger",
      size: "large",
      onClick: c.handleResetOptions
    }, {
      default: a(() => [l(n(e.t("Reset and choose another option")), 1)]),
      _: 1
    }, 8, ["onClick"]), d(y, {
      size: "large",
      onClick: t[4] || (t[4] = i => s.isResetPopupShow = !1),
      type: "warning"
    }, {
      default: a(() => [l(n(e.t("Cancel")), 1)]),
      _: 1
    })])]),
    _: 1
  }, 8, ["show"]), d(T, {
    show: s.isExchangeInfoPopupShow,
    "onUpdate:show": t[8] || (t[8] = i => s.isExchangeInfoPopupShow = i),
    round: "",
    closeable: "",
    position: "bottom"
  }, {
    default: a(() => {
      var i;
      return [o("div", Me, [o("h1", null, n(s.activeSelectedExchange.title), 1), o("p", null, n(e.t("Do you have a {exchange} account?", {
        exchange: s.activeSelectedExchange.title.replace("Exchange", "")
      })), 1), d(y, {
        onClick: t[6] || (t[6] = k => e._openUrl(s.activeSelectedExchange.registerLink)),
        type: "warning",
        round: "",
        size: "normal"
      }, {
        default: a(() => [l(n(e.t("No, let's create it")), 1)]),
        _: 1
      }), t[27] || (t[27] = o("br", null, null, -1)), (i = s.activeSelectedExchange) != null && i.registerHelp ? (r(), u("span", {
        key: 0,
        style: {
          "font-size": "0.9em",
          "border-bottom": "1px dashed #fff"
        },
        onClick: t[7] || (t[7] = k => {
          var g;
          return e._openUrl((g = s.activeSelectedExchange) == null ? void 0 : g.registerHelp)
        })
      }, n(e.t("View instructions on how to register.")), 1)) : m("", !0), d(y, {
        class: "confirmButton",
        type: "success",
        round: "",
        size: "large",
        onClick: c.showDepositInfo
      }, {
        default: a(() => [l(n(e.t("Yes, I have it")), 1)]),
        _: 1
      }, 8, ["onClick"])])]
    }),
    _: 1
  }, 8, ["show"]), d(T, {
    show: s.isDepositPopupShow,
    "onUpdate:show": t[11] || (t[11] = i => s.isDepositPopupShow = i),
    round: "",
    closeable: "",
    position: "bottom"
  }, {
    default: a(() => {
      var i, k;
      return [o("div", De, [o("div", Pe, [o("img", {
        class: "image",
        src: c.getImage((i = s.activeSelectedExchange) == null ? void 0 : i.key),
        alt: s.activeSelectedExchange.key
      }, null, 8, Fe), o("h2", Ne, n(s.activeSelectedExchange.title), 1)]), o("p", Oe, n(c.getExchangeDescription), 1), o("div", Ue, [this.activeSelectedExchange.key === "onchain_airdrop" ? (r(), f(z, {
        key: 0,
        onWalletConnectHandler: c.tonConnectStatusHandler,
        "saved-wallet": s.selectedMethodData.deposit_address ? s.selectedMethodData.deposit_address : ""
      }, null, 8, ["onWalletConnectHandler", "saved-wallet"])) : m("", !0)]), o("div", Le, [(r(!0), u(w, null, _(c.getNormalizedDates(s.activeSelectedExchange.datesInfo), g => (r(), u("div", {
        key: g,
        style: {
          "font-size": "0.8em"
        }
      }, [t[28] || (t[28] = l(" • ")), o("span", null, n(g), 1)]))), 128))]), ((k = s.activeSelectedExchange.inputs) == null ? void 0 : k.length) > 0 ? (r(), f(B, {
        key: 0,
        onSubmit: c.onSubmit
      }, {
        default: a(() => [o("div", Ae, [(r(!0), u(w, null, _(s.activeSelectedExchange.inputs, g => {
          var D;
          return r(), u("div", {
            key: g
          }, [o("p", ze, n(c.getInputTitle(g, s.activeSelectedExchange)) + ":", 1), d(V, {
            modelValue: s.depositFormInputsValue[g],
            "onUpdate:modelValue": Z => s.depositFormInputsValue[g] = Z,
            center: "",
            autofocus: !0,
            clearable: "",
            color: "#fff",
            style: {
              "font-size": "1.1em"
            },
            border: !1,
            disabled: !!((D = s.selectedMethodData) != null && D[g] || s.isPageLoading)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])
        }), 128))]), s.activeSelectedExchange.docLink ? (r(), u("div", {
          key: 0,
          onClick: t[9] || (t[9] = g => e._openUrl(s.activeSelectedExchange.docLink)),
          style: {
            padding: "15px 0"
          }
        }, [d(b, {
          name: "question-o"
        }), t[29] || (t[29] = l("  ")), o("span", Ve, n(e.t("See instructions on how to find these fields.")), 1)])) : m("", !0), s.selectedMethod ? m("", !0) : (r(), f(y, {
          key: 1,
          loading: s.isPageLoading,
          class: "saveButton",
          "native-type": "submit",
          type: "success",
          size: "large",
          disabled: c.isExchangeSaveButtonDisabled
        }, {
          default: a(() => [l(n(e.t("Save and choose")), 1)]),
          _: 1
        }, 8, ["loading", "disabled"]))]),
        _: 1
      }, 8, ["onSubmit"])) : m("", !0), s.selectedMethod ? (r(), u(w, {
        key: 1
      }, [o("div", Be, [d(b, {
        name: "success"
      }), l(" " + n(e.t("This method is chosen to withdraw tokens.")), 1)]), d(y, {
        loading: s.isPageLoading,
        onClick: t[10] || (t[10] = g => s.isResetPopupShow = !0),
        class: "saveButton",
        type: "danger",
        size: "large",
        icon: "replay"
      }, {
        default: a(() => [l(n(e.t("Reset withdrawal option")), 1)]),
        _: 1
      }, 8, ["loading"])], 64)) : m("", !0)])]
    }),
    _: 1
  }, 8, ["show"])], 2)) : (r(), u("div", $, [t[12] || (t[12] = o("h1", {
    class: "center aniH1 goldText"
  }, "Airdrop", -1)), o("p", ee, n(e.t("You have not mined tokens in the mining phase.")), 1), o("p", te, n(e.t("Subscribe to our Telegram channel, there will be announcements of other projects.")), 1), d(y, {
    size: "large",
    type: "warning",
    onClick: e._ourTgClick,
    style: {
      "margin-top": "15px"
    }
  }, {
    default: a(() => [l(n(e.t("Follow our channel")), 1)]),
    _: 1
  }, 8, ["onClick"])]))], 64)
}
const qe = Y(K, [
  ["render", Ze],
  ["__scopeId", "data-v-290516d5"]
]);
export {
  qe as
  default
};