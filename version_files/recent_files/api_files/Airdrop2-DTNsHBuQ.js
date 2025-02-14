import {
  _ as B,
  G as Y,
  j as Z,
  M as q,
  A as G,
  c as u,
  a as o,
  b as d,
  g as y,
  t as n,
  w as l,
  h as D,
  d as a,
  e as p,
  F as k,
  f as _,
  r as g,
  o as r,
  k as R
} from "./index-D2TINnM-.js";
const W = {
    name: "Airdrop2-g",
    components: {
      GamePopup: Y,
      TonWallet: Z,
      Menu: q
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
          registerLink: "https://bitget.com/",
          datesInfo: [{
            date: "2025-02-22T09:00:00.000Z",
            title: "Deposit end"
          }, {
            date: "2025-02-24T18:00:00.000Z",
            title: "Bitget confirmation/decline"
          }, {
            date: "2025-02-25T12:00:00.000Z",
            title: "You'll get your Airdrop"
          }]
        }, {
          key: "gate",
          title: "Gate.io Exchange",
          uid_title: "Gate UID",
          kycStatus: "need",
          isExchange: !0,
          isNeedGas: !1,
          inputs: ["uid", "deposit_address", "memo"],
          registerLink: "https://www.gate.io/signup",
          datesInfo: [{
            date: "2025-02-22T09:00:00.000Z",
            title: "Deposit end"
          }, {
            date: "2025-02-24T18:00:00.000Z",
            title: "Gate.io confirmation/decline"
          }, {
            date: "2025-02-25T12:00:00.000Z",
            title: "You'll get your Airdrop"
          }]
        }, {
          key: "kucoin",
          title: "KuCoin Exchange",
          uid_title: "KuCoin UID",
          kycStatus: "need",
          isExchange: !0,
          isNeedGas: !1,
          inputs: ["uid", "deposit_address", "memo"],
          registerLink: "https://www.kucoin.com/ucenter/signup",
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
        const h = new G(e).toString(!0, !0, !1, !1);
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
  H = {
    key: 1,
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%, -50%, 0)"
    }
  },
  K = {
    key: 2
  },
  Q = {
    style: {
      padding: "30% 0",
      "text-align": "center"
    }
  },
  X = {
    key: 3,
    class: "container"
  },
  J = {
    class: "",
    style: {
      color: "#fff"
    }
  },
  $ = {
    class: "",
    style: {
      color: "#fff"
    }
  },
  ee = {
    class: "date center"
  },
  te = {
    class: "tokenCount"
  },
  oe = {
    class: "tips"
  },
  ne = {
    class: "title"
  },
  se = {
    key: 0
  },
  ie = {
    style: {
      "font-size": "0.7em"
    }
  },
  ae = {
    key: 0,
    style: {
      "line-height": "1",
      padding: "5px 10px"
    }
  },
  le = {
    class: "tips"
  },
  re = {
    key: 0,
    class: "preTitle center"
  },
  de = ["src", "alt"],
  ue = {
    style: {
      margin: "0 10px"
    }
  },
  he = {
    style: {
      margin: "0 10px"
    }
  },
  ce = {
    key: 1
  },
  pe = {
    style: {
      "font-size": "1.3em",
      "font-weight": "700"
    }
  },
  ge = {
    style: {
      "font-size": "1.3em",
      "font-weight": "700"
    }
  },
  me = {
    key: 2,
    style: {
      margin: "40px 0"
    }
  },
  fe = {
    style: {
      margin: "40px 0",
      "padding-bottom": "40px"
    }
  },
  ye = {
    class: "faqItemContent"
  },
  ke = {
    class: "faqItemContent"
  },
  we = {
    class: "faqItemContent"
  },
  be = {
    class: "faqItemContent"
  },
  ve = {
    class: "faqItemContent"
  },
  _e = {
    class: "resetOptionsPopup container"
  },
  Ce = {
    class: "title"
  },
  Te = {
    class: "exchangeInfoPopup container center"
  },
  Se = {
    class: "depositPopup container"
  },
  Ie = {
    class: "info"
  },
  Ee = ["src", "alt"],
  xe = {
    class: "title"
  },
  Me = {
    class: "description"
  },
  De = {
    class: "walletButtons"
  },
  Pe = {
    class: "panelBrown",
    style: {
      "margin-top": "30px"
    }
  },
  Fe = {
    class: "depositFields"
  },
  Oe = {
    class: "label"
  },
  Ne = {
    style: {
      display: "inline-block",
      "border-bottom": "1px dashed #ccc"
    }
  },
  Ue = {
    class: "center",
    style: {
      "font-size": "1.3em",
      color: "#3ed966",
      "font-weight": "bold",
      "margin-top": "20px"
    }
  };

function Le(e, t, h, S, s, c) {
  var I, E, x;
  const P = g("Menu"),
    F = g("van-loading"),
    f = g("van-button"),
    b = g("van-icon"),
    O = g("van-cell"),
    N = g("van-cell-group"),
    C = g("van-notice-bar"),
    v = g("van-collapse-item"),
    U = g("van-collapse"),
    T = g("van-popup"),
    L = g("ton-wallet"),
    A = g("van-field"),
    V = g("van-form");
  return r(), u(k, null, [o("div", j, [d(P)]), s.isPageLoading ? (r(), y(F, {
    key: 0,
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%, -50%, 0)"
    }
  })) : isNaN(s.tokens.total) ? (r(), u("div", H, n(e.t("Please reload page")), 1)) : c.isMaintenance ? (r(), u("div", K, [o("div", Q, [o("p", null, n(e.t("We are currently making the snapshot of the data to make {on-chain} airdrop.")), 1), o("p", null, n(e.t("It could take several minutes.")), 1), o("p", null, n(e.t("Try again later.")), 1)])])) : s.tokens.total ? (r(), u("div", {
    key: 4,
    class: D(["airdrop container pageContainer", {
      blur: s.isPageLoading
    }]),
    style: {
      "padding-top": "20px"
    }
  }, [t[23] || (t[23] = o("h1", {
    class: "center aniH1 goldText"
  }, "Airdrop", -1)), o("h2", ee, n(e.t("February 25, 2025. 12:00 UTC")), 1), o("div", te, [o("div", oe, n(e.t("Tokens")), 1), o("div", ne, n(e._number(c.tokensTotal)) + " $ZOO", 1), o("table", null, [o("tbody", null, [((I = s.tokens.sentToCex) == null ? void 0 : I.tokens) > 0 ? (r(), u("tr", se, [o("td", ie, [a(n(e.t("Sent to {cex}", {
    cex: c.cexText
  })) + " ", 1), t[11] || (t[11] = o("br", null, null, -1)), a(" " + n(e.t("You will be able to see your balance on 25 February at 12:00 UTC")), 1)])])) : p("", !0), (r(!0), u(k, null, _(s.tokens.airdropsData, (i, w) => (r(), u("tr", {
    key: `airdrop_tokens_${w}`
  }, [(i == null ? void 0 : i.tokens) > 0 ? (r(), u("td", ae, [a(" On-Chain Airdrop #" + n(w + 1) + " ", 1), o("div", le, n(c.getAddressNonBounceableMedium(i == null ? void 0 : i.method_wallet)), 1)])) : p("", !0)]))), 128))])])]), (E = this.tokens) != null && E.isCexFinish && s.selectedMethod && s.selectedMethod !== "onchain_airdrop" ? p("", !0) : (r(), u(k, {
    key: 0
  }, [s.selectedMethod ? p("", !0) : (r(), u("div", re, n(e.t("Choose withdrawal option:")), 1)), d(N, {
    inset: "",
    style: {
      margin: "10px 0 0 0"
    },
    class: "exchanges"
  }, {
    default: l(() => [(r(!0), u(k, null, _(c.dbExchange, i => (r(), y(O, {
      key: i == null ? void 0 : i.key,
      class: D(["exchange", {
        bold: (i == null ? void 0 : i.key) === "onchain_airdrop",
        disabled: s.selectedMethod && i.key !== s.selectedMethod
      }]),
      onClick: w => c.showExchangeInfo(i),
      size: "large",
      center: "",
      "is-link": ""
    }, R({
      icon: l(() => [o("img", {
        class: "image",
        src: c.getImage(i == null ? void 0 : i.key),
        alt: i.key,
        style: {
          width: "40px",
          "border-radius": "100px"
        }
      }, null, 8, de)]),
      title: l(() => [o("span", ue, n(i.title), 1)]),
      _: 2
    }, [s.selectedMethod ? {
      name: "label",
      fn: l(() => [o("span", he, n(e.t("This method is chosen")), 1)]),
      key: "0"
    } : void 0, s.selectedMethod ? {
      name: "right-icon",
      fn: l(() => [o("span", null, [a(n(e.t("Connected")) + "   ", 1), d(b, {
        name: "checked"
      })])]),
      key: "1"
    } : void 0]), 1032, ["class", "onClick"]))), 128))]),
    _: 1
  })], 64)), s.selectedMethod ? (r(), u("div", ce, [s.selectedMethod === "onchain_airdrop" ? (r(), y(C, {
    key: 0,
    wrapable: "",
    scrollable: !1,
    style: {
      "border-radius": "10px",
      "margin-top": "10px",
      "line-height": "normal"
    }
  }, {
    default: l(() => [o("div", pe, [d(b, {
      name: "warning-o"
    }), a(" " + n(e.t("Warning:")), 1)]), a(" • " + n(e.t("The tokens will not appear automatically in your wallet.")) + " ", 1), t[12] || (t[12] = o("br", null, null, -1)), a(" • " + n(e.t("You will need to collect them manually by paying a fee of about 0.1 TON.")), 1), t[13] || (t[13] = o("br", null, null, -1)), a(" • " + n(e.t("The button to collect the tokens will appear on 25 February at 12:00 {UTC} on this page")), 1), t[14] || (t[14] = o("br", null, null, -1)), a(" • " + n(e.t("You can pick them up between 25th and 28th February 12:00 {UTC}")), 1), t[15] || (t[15] = o("br", null, null, -1)), a(" • " + n(e.t("It will not be possible to collect later than this interval.")), 1)]),
    _: 1
  })) : (r(), y(C, {
    key: 1,
    wrapable: "",
    scrollable: !1,
    style: {
      "border-radius": "10px",
      "margin-top": "10px",
      "line-height": "normal"
    }
  }, {
    default: l(() => [o("div", ge, [d(b, {
      name: "warning-o"
    }), a(" " + n(e.t("Warning:")), 1)]), a(" • " + n(e.t("If you have entered incorrect data, you will not be able to get tokens and we will not be able to help you in any way.")) + " ", 1), t[16] || (t[16] = o("br", null, null, -1)), a(" • " + n(e.t("Exchange details can only be used once.")) + " ", 1), t[17] || (t[17] = o("br", null, null, -1)), a(" • " + n(e.t("For various reasons, the exchange may refuse to receive tokens for your data.")) + " ", 1), t[18] || (t[18] = o("br", null, null, -1)), a(" • " + n(e.t("If on 25 February at 12:00 {UTC} you have reset the type of claim you need to select {On-chain}.")) + " ", 1), t[19] || (t[19] = o("br", null, null, -1))]),
    _: 1
  })), (x = this.tokens) != null && x.isCexFinish && s.selectedMethod && s.selectedMethod !== "onchain_airdrop" ? p("", !0) : (r(), y(f, {
    key: 2,
    loading: s.isPageLoading,
    onClick: t[0] || (t[0] = i => s.isResetPopupShow = !0),
    class: "saveButton",
    size: "large",
    round: "",
    type: "danger",
    icon: "replay",
    style: {
      "margin-bottom": "30px"
    }
  }, {
    default: l(() => [a(n(e.t("Reset withdrawal option")), 1)]),
    _: 1
  }, 8, ["loading"]))])) : p("", !0), s.tokens.isOnChainStarted && s.selectedMethod === "onchain_airdrop" && c.tokensToAirdropClaim ? (r(), u("div", me, [d(f, {
    type: "success",
    size: "large",
    round: "",
    onClick: t[1] || (t[1] = i => e.$router.push("/on-chain-airdrop"))
  }, {
    default: l(() => [a(n(e.t("Go to claim page")), 1)]),
    _: 1
  })])) : p("", !0), s.tokens.isOnChainStarted && s.selectedMethod === "onchain_airdrop" && !c.tokensToAirdropClaim && s.tokens.total > 0 ? (r(), y(C, {
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
    default: l(() => [a(n(e.t("Your {on-chain} withdrawal request is in the processing queue. Please come back later to collect your tokens.")), 1)]),
    _: 1
  })) : p("", !0), o("div", fe, [t[20] || (t[20] = o("h2", null, "FAQ", -1)), d(U, {
    modelValue: s.faqValue,
    "onUpdate:modelValue": t[2] || (t[2] = i => s.faqValue = i),
    style: {
      "border-radius": "10px",
      overflow: "hidden"
    }
  }, {
    default: l(() => [d(v, {
      name: "1",
      border: !1
    }, {
      title: l(() => [a(n(e.t("When will I receive my tokens?")), 1)]),
      default: l(() => [o("div", ye, [o("p", null, n(e.t("If you have submitted an application and CEX has approved it, the tokens will appear in your account on the selected exchange at the time of listing. There may be slight delays in token distribution on the exchange side.")) + " " + n(e.t("You will be able to collect {on-chain} tokens from 25 February 12:00 utc, but the speed depends on network load and technical issues.")), 1)])]),
      _: 1
    }), d(v, {
      name: "2",
      border: !1
    }, {
      title: l(() => [a(n(e.t("What is the difference between Off-Chain and On-Chain Claim?")), 1)]),
      default: l(() => [o("div", ke, [o("p", null, n(e.t("An {Off-Chain} transaction does not require you to pay gas fees, and the claim will occur on your selected exchange for free. This feature is available to you only until February 22, 2025, 09:00 UTC, and works exclusively with the list of exchanges mentioned above.")), 1), o("p", null, n(e.t("An {On-Chain} transaction will require you to have gas (approximately 0.1 {TON}). You will receive the tokens only a few hours after the listing, depending on the load on the {TON} network.")), 1)])]),
      _: 1
    }), d(v, {
      name: "3",
      border: !1
    }, {
      title: l(() => [a(n(e.t("Can I change the exchange if I have already chosen one?")), 1)]),
      default: l(() => [o("div", we, [o("p", null, n(e.t("Yes, you can change the platform for token withdrawal until February 22, 2025, 09:00 UTC.")), 1)])]),
      _: 1
    }), d(v, {
      name: "4",
      border: !1
    }, {
      title: l(() => [a(n(e.t("Until what date can I withdraw tokens from {Zoo}?")), 1)]),
      default: l(() => [o("div", be, [o("p", null, n(e.t("Token withdrawals will be available until February 28, 2025, 12:00 UTC.")), 1)])]),
      _: 1
    }), d(v, {
      name: "11",
      border: !1
    }, {
      title: l(() => [a(n(e.t("Important notes")), 1)]),
      default: l(() => [o("div", ve, [o("p", null, n(e.t("In some cases, the exchange may refuse your token claim (if you provided incorrect account details, the account is blocked or unverified, etc.). In this case, the tokens will be returned to our app, and you will be able to claim them again, but only via {On-Chain}.")), 1)])]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"])]), d(T, {
    show: s.isResetPopupShow,
    "onUpdate:show": t[4] || (t[4] = i => s.isResetPopupShow = i),
    round: "",
    closeable: "",
    position: "center"
  }, {
    default: l(() => [o("div", _e, [o("h3", Ce, n(e.t("Are you sure you want to reset your withdrawal options?")), 1), o("p", null, n(e.t("All information about deposit addresses, UID, and memo will be deleted. This action cannot be undone. You will be able to reenter all data.")), 1), d(f, {
      class: "resetButton",
      type: "danger",
      size: "large",
      onClick: c.handleResetOptions
    }, {
      default: l(() => [a(n(e.t("Reset and choose another option")), 1)]),
      _: 1
    }, 8, ["onClick"]), d(f, {
      size: "large",
      onClick: t[3] || (t[3] = i => s.isResetPopupShow = !1),
      type: "warning"
    }, {
      default: l(() => [a(n(e.t("Cancel")), 1)]),
      _: 1
    })])]),
    _: 1
  }, 8, ["show"]), d(T, {
    show: s.isExchangeInfoPopupShow,
    "onUpdate:show": t[6] || (t[6] = i => s.isExchangeInfoPopupShow = i),
    round: "",
    closeable: "",
    position: "bottom"
  }, {
    default: l(() => [o("div", Te, [o("h1", null, n(s.activeSelectedExchange.title), 1), o("p", null, n(e.t("Do you have a {exchange} account?", {
      exchange: s.activeSelectedExchange.title.replace("Exchange", "")
    })), 1), d(f, {
      onClick: t[5] || (t[5] = i => e._openUrl(s.activeSelectedExchange.registerLink)),
      type: "warning",
      round: "",
      size: "normal"
    }, {
      default: l(() => [a(n(e.t("No, let's create it")), 1)]),
      _: 1
    }), d(f, {
      class: "confirmButton",
      type: "success",
      round: "",
      size: "large",
      onClick: c.showDepositInfo
    }, {
      default: l(() => [a(n(e.t("Yes, I have it")), 1)]),
      _: 1
    }, 8, ["onClick"])])]),
    _: 1
  }, 8, ["show"]), d(T, {
    show: s.isDepositPopupShow,
    "onUpdate:show": t[9] || (t[9] = i => s.isDepositPopupShow = i),
    round: "",
    closeable: "",
    position: "bottom"
  }, {
    default: l(() => {
      var i, w;
      return [o("div", Se, [o("div", Ie, [o("img", {
        class: "image",
        src: c.getImage((i = s.activeSelectedExchange) == null ? void 0 : i.key),
        alt: s.activeSelectedExchange.key
      }, null, 8, Ee), o("h2", xe, n(s.activeSelectedExchange.title), 1)]), o("p", Me, n(c.getExchangeDescription), 1), o("div", De, [this.activeSelectedExchange.key === "onchain_airdrop" ? (r(), y(L, {
        key: 0,
        onWalletConnectHandler: c.tonConnectStatusHandler,
        "saved-wallet": s.selectedMethodData.deposit_address ? s.selectedMethodData.deposit_address : ""
      }, null, 8, ["onWalletConnectHandler", "saved-wallet"])) : p("", !0)]), o("div", Pe, [(r(!0), u(k, null, _(c.getNormalizedDates(s.activeSelectedExchange.datesInfo), m => (r(), u("div", {
        key: m,
        style: {
          "font-size": "0.8em"
        }
      }, [t[21] || (t[21] = a(" • ")), o("span", null, n(m), 1)]))), 128))]), ((w = s.activeSelectedExchange.inputs) == null ? void 0 : w.length) > 0 ? (r(), y(V, {
        key: 0,
        onSubmit: c.onSubmit
      }, {
        default: l(() => [o("div", Fe, [(r(!0), u(k, null, _(s.activeSelectedExchange.inputs, m => {
          var M;
          return r(), u("div", {
            key: m
          }, [o("p", Oe, n(c.getInputTitle(m, s.activeSelectedExchange)) + ":", 1), d(A, {
            modelValue: s.depositFormInputsValue[m],
            "onUpdate:modelValue": z => s.depositFormInputsValue[m] = z,
            center: "",
            autofocus: !0,
            clearable: "",
            color: "#fff",
            style: {
              "font-size": "1.1em"
            },
            border: !1,
            disabled: !!((M = s.selectedMethodData) != null && M[m] || s.isPageLoading)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])
        }), 128))]), s.activeSelectedExchange.docLink ? (r(), u("div", {
          key: 0,
          onClick: t[7] || (t[7] = m => e._openUrl(s.activeSelectedExchange.docLink)),
          style: {
            padding: "15px 0"
          }
        }, [d(b, {
          name: "question-o"
        }), t[22] || (t[22] = a("  ")), o("span", Ne, n(e.t("See instructions on how to find these fields.")), 1)])) : p("", !0), s.selectedMethod ? p("", !0) : (r(), y(f, {
          key: 1,
          loading: s.isPageLoading,
          class: "saveButton",
          "native-type": "submit",
          type: "success",
          size: "large",
          disabled: c.isExchangeSaveButtonDisabled
        }, {
          default: l(() => [a(n(e.t("Save and choose")), 1)]),
          _: 1
        }, 8, ["loading", "disabled"]))]),
        _: 1
      }, 8, ["onSubmit"])) : p("", !0), s.selectedMethod ? (r(), u(k, {
        key: 1
      }, [o("div", Ue, [d(b, {
        name: "success"
      }), a(" " + n(e.t("This method is chosen to withdraw tokens.")), 1)]), d(f, {
        loading: s.isPageLoading,
        onClick: t[8] || (t[8] = m => s.isResetPopupShow = !0),
        class: "saveButton",
        type: "danger",
        size: "large",
        icon: "replay"
      }, {
        default: l(() => [a(n(e.t("Reset withdrawal option")), 1)]),
        _: 1
      }, 8, ["loading"])], 64)) : p("", !0)])]
    }),
    _: 1
  }, 8, ["show"])], 2)) : (r(), u("div", X, [t[10] || (t[10] = o("h1", {
    class: "center aniH1 goldText"
  }, "Airdrop", -1)), o("p", J, n(e.t("You have not mined tokens in the mining phase.")), 1), o("p", $, n(e.t("Subscribe to our Telegram channel, there will be announcements of other projects.")), 1), d(f, {
    size: "large",
    type: "warning",
    onClick: e._ourTgClick,
    style: {
      "margin-top": "15px"
    }
  }, {
    default: l(() => [a(n(e.t("Follow our channel")), 1)]),
    _: 1
  }, 8, ["onClick"])]))], 64)
}
const Ve = B(W, [
  ["render", Le],
  ["__scopeId", "data-v-573030b1"]
]);
export {
  Ve as
  default
};