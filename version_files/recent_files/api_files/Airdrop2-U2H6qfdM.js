import {
  _ as Z,
  G as q,
  j as R,
  g as k,
  c as h,
  t as s,
  a as n,
  b as d,
  w as i,
  d as r,
  e as g,
  F as b,
  f as _,
  h as O,
  r as p,
  o as l,
  k as Y
} from "./index-C82cJFWI.js";
const G = {
    name: "Airdrop2-g",
    components: {
      GamePopup: q,
      TonWallet: R
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
        let u = "";
        return this.tokens.sentToCex.method_memo && this.tokens.sentToCex.method_memo.length > 0 && (u = " | memo: " + this.tokens.sentToCex.method_memo), `${this.tokens.sentToCex.method_key||""} ${e} ${t} ${u}`
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
            date: "2024-10-18T18:00:00.000Z",
            title: "Start  of collection of withdrawal requests in on-chain"
          }, {
            date: "2024-10-24T12:00:00.000Z",
            title: "First On-chain Distribution"
          }, {
            date: "2024-10-31T12:00:00.000Z",
            title: "End of collection of withdrawal requests in on-chain"
          }]
        }]
      },
      dbExchange() {
        var e, t, u, v, o, c;
        return ((e = this.tokens) == null ? void 0 : e.phase1) === 0 && ((t = this.tokens) == null ? void 0 : t.phase2) === 0 || ((u = this.tokens) == null ? void 0 : u.total) - ((v = this.tokens) == null ? void 0 : v.not) - ((o = this.tokens) == null ? void 0 : o.blum) < 1 || (c = this.tokens) != null && c.isCexFinish ? this.dbExchangeOnChain : [{
          key: "okx",
          title: "OKX Exchange",
          uid_title: "OKX UID",
          kycStatus: "need",
          isExchange: !0,
          isNeedGas: !1,
          inputs: ["uid", "deposit_address", "memo"],
          registerLink: "https://www.okx.com/join/EMPIREX",
          datesInfo: [{
            date: "2024-10-18T18:00:00.000Z",
            title: "Deposit start"
          }, {
            date: "2024-10-23T09:00:00.000Z",
            title: "Deposit end"
          }, {
            date: "2024-10-23T18:00:00.000Z",
            title: "OKX confirmation/decline"
          }, {
            date: "2024-10-24T12:00:00.000Z",
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
            date: "2024-10-18T18:00:00.000Z",
            title: "Deposit start"
          }, {
            date: "2024-10-23T09:00:00.000Z",
            title: "Deposit end"
          }, {
            date: "2024-10-23T18:00:00.000Z",
            title: "Bybit confirmation/decline"
          }, {
            date: "2024-10-24T12:00:00.000Z",
            title: "You'll get your Airdrop"
          }]
        }, {
          key: "bitget",
          title: "Bitget Exchange",
          uid_title: "Bitget UID",
          kycStatus: "need",
          isExchange: !0,
          isNeedGas: !1,
          inputs: ["uid", "deposit_address"],
          registerLink: "https://partner.bitget.com/bg/XEmpirexBITGET",
          datesInfo: [{
            date: "2024-10-18T18:00:00.000Z",
            title: "Deposit start"
          }, {
            date: "2024-10-23T09:00:00.000Z",
            title: "Deposit end"
          }, {
            date: "2024-10-23T18:00:00.000Z",
            title: "Bitget confirmation/decline"
          }, {
            date: "2024-10-24T12:00:00.000Z",
            title: "You'll get your Airdrop"
          }],
          docLink: "https://docs.google.com/document/d/1PvpEwvVeiFRUdx05cPVOGdsL33FNUR8i6lvNTpVNHYE/edit"
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
            date: "2024-10-18T18:00:00.000Z",
            title: "Start  of collection of withdrawal requests in on-chain"
          }, {
            date: "2024-10-24T12:00:00.000Z",
            title: "First On-chain Distribution"
          }, {
            date: "2024-10-31T12:00:00.000Z",
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
      async tonConnectStatusHandler(e) {
        if (this.wallet = e, !this.selectedMethod && e) {
          const t = {
            method: "onchain_airdrop",
            data: {
              deposit_address: e.account.address
            }
          };
          try {
            const u = await this.apiCall("airdropSave", t);
            this.selectedMethod = u.method, this.selectedMethodData = u.data, this.tokens = u.tokens
          } catch (u) {
            this._catchError(u)
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
        const u = {
          memo: "Memo",
          deposit_address: "$X Deposit Address"
        };
        return e in u ? u[e] : e
      },
      getNormalizedDates(e) {
        return e.map(t => {
          const u = new Date(t.date),
            v = {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              timeZone: "UTC"
            };
          return `${u.toLocaleString("en-US",v).replace(",","")} UTC - ${t.title}`
        })
      },
      async showDepositInfo() {
        this.isExchangeInfoPopupShow = !1, this.isDepositPopupShow = !0, this.depositFormInputsValue = {}, this.activeSelectedExchange.inputs.forEach(e => {
          this.depositFormInputsValue[e] = ""
        })
      }
    }
  },
  X = {
    key: 1,
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%, -50%, 0)"
    }
  },
  j = {
    key: 2
  },
  W = {
    style: {
      padding: "30% 0",
      "text-align": "center"
    }
  },
  H = {
    key: 3,
    class: "container"
  },
  K = {
    class: "",
    style: {
      color: "#fff"
    }
  },
  Q = {
    class: "",
    style: {
      color: "#fff"
    }
  },
  J = {
    class: "date center"
  },
  $ = {
    class: "tokenCount"
  },
  ee = {
    class: "tips"
  },
  te = {
    class: "title"
  },
  oe = {
    key: 0,
    style: {
      "font-weight": "normal",
      "font-size": "12px"
    }
  },
  se = {
    class: "tips"
  },
  ne = {
    key: 0
  },
  ie = {
    class: "right"
  },
  ae = {
    style: {
      "font-size": "0.7em"
    }
  },
  le = {
    class: "right"
  },
  re = {
    key: 0,
    class: "preTitle",
    style: {
      color: "#3ed966",
      "margin-top": "30px"
    }
  },
  de = {
    key: 1,
    class: "preTitle"
  },
  ce = ["src", "alt"],
  he = {
    style: {
      margin: "0 10px"
    }
  },
  ue = {
    key: 3,
    style: {
      margin: "40px 0"
    }
  },
  pe = {
    style: {
      margin: "40px 0",
      "padding-bottom": "40px"
    }
  },
  me = {
    class: "faqItemContent"
  },
  ge = {
    class: "faqItemContent"
  },
  fe = {
    class: "faqItemContent"
  },
  ke = {
    class: "faqItemContent"
  },
  ye = {
    class: "faqItemContent"
  },
  we = {
    class: "faqItemContent"
  },
  be = {
    class: "resetOptionsPopup container"
  },
  ve = {
    class: "title"
  },
  _e = {
    class: "exchangeInfoPopup container center"
  },
  Ce = {
    class: "depositPopup container"
  },
  Te = {
    class: "info"
  },
  Se = ["src", "alt"],
  Ee = {
    class: "title"
  },
  Ie = {
    class: "description"
  },
  xe = {
    class: "walletButtons"
  },
  De = {
    class: "panelBrown",
    style: {
      "margin-top": "30px"
    }
  },
  Pe = {
    class: "depositFields"
  },
  Oe = {
    class: "label"
  },
  Me = {
    style: {
      display: "inline-block",
      "border-bottom": "1px dashed #ccc"
    }
  },
  Le = {
    class: "center",
    style: {
      "font-size": "1.3em",
      color: "#3ed966",
      "font-weight": "bold",
      "margin-top": "20px"
    }
  };

function Ue(e, t, u, v, o, c) {
  var S, E, I, x, D;
  const M = p("van-loading"),
    f = p("van-button"),
    C = p("van-icon"),
    L = p("van-cell"),
    U = p("van-cell-group"),
    N = p("van-notice-bar"),
    y = p("van-collapse-item"),
    V = p("van-collapse"),
    T = p("van-popup"),
    F = p("ton-wallet"),
    A = p("van-field"),
    B = p("van-form");
  return o.isPageLoading ? (l(), k(M, {
    key: 0,
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%, -50%, 0)"
    }
  })) : isNaN(o.tokens.total) ? (l(), h("div", X, s(e.t("Please reload page")), 1)) : c.isMaintenance ? (l(), h("div", j, [n("div", W, [n("p", null, s(e.t("We are currently making the snapshot of the data to make {on-chain} airdrop.")), 1), n("p", null, s(e.t("It could take several minutes.")), 1), n("p", null, s(e.t("Try again later.")), 1)])])) : o.tokens.total ? (l(), h("div", {
    key: 4,
    class: O(["airdrop container pageContainer", {
      blur: o.isPageLoading
    }]),
    style: {
      "padding-top": "20px"
    }
  }, [t[16] || (t[16] = n("h1", {
    class: "center aniH1 goldText"
  }, "Airdrop", -1)), n("h2", J, s(e.t("February 25, 2025. 12:00 UTC")), 1), n("div", $, [n("div", ee, s(e.t("Tokens")), 1), n("div", te, [r(s(e._number(c.tokensTotal)) + " $ZOO ", 1), (S = o.tokens.sentToCex) != null && S.tokens ? (l(), h("span", oe, "(" + s(e._number((E = o.tokens.sentToCex) == null ? void 0 : E.tokens)) + " $X sent to " + s(((I = o.tokens.sentToCex) == null ? void 0 : I.method_key) || "CEX") + ")", 1)) : g("", !0)]), n("div", se, s(e.t("Details:")), 1), n("table", null, [n("tbody", null, [((x = o.tokens.sentToCex) == null ? void 0 : x.tokens) > 0 ? (l(), h("tr", ne, [n("td", ie, "-" + s(e._number((D = o.tokens.sentToCex) == null ? void 0 : D.tokens)), 1), n("td", ae, [r(s(e.t("Sent to {cex}", {
    cex: c.cexText
  })) + " ", 1), t[12] || (t[12] = n("br", null, null, -1)), r(" " + s(e.t("You will be able to see your balance on 24 October at 12:00 UTC")), 1)])])) : g("", !0), (l(!0), h(b, null, _(o.tokens.airdrops, (a, w) => (l(), h("tr", {
    key: `airdtop_tokens_${w}`
  }, [a > 0 ? (l(), h(b, {
    key: 0
  }, [n("td", le, "-" + s(e._number(a)), 1), n("td", null, " On-Chain Airdrop #" + s(w + 1), 1)], 64)) : g("", !0)]))), 128))])])]), o.selectedMethod ? (l(), h("div", re, s(e.t("This method is chosen to withdraw tokens:")), 1)) : (l(), h("div", de, s(e.t("Choose withdrawal option:")), 1)), d(U, {
    inset: "",
    style: {
      margin: "10px 0 0 0"
    },
    class: "exchanges"
  }, {
    default: i(() => [(l(!0), h(b, null, _(c.dbExchange, a => (l(), k(L, {
      key: a == null ? void 0 : a.key,
      class: O(["exchange", {
        bold: (a == null ? void 0 : a.key) === "onchain_airdrop",
        disabled: o.selectedMethod && a.key !== o.selectedMethod
      }]),
      onClick: w => c.showExchangeInfo(a),
      size: "large",
      center: "",
      "is-link": ""
    }, Y({
      icon: i(() => [n("img", {
        class: "image",
        src: c.getImage(a == null ? void 0 : a.key),
        alt: a.key,
        style: {
          width: "40px",
          "border-radius": "100px"
        }
      }, null, 8, ce)]),
      title: i(() => [n("span", he, s(a.title), 1)]),
      _: 2
    }, [o.selectedMethod ? {
      name: "right-icon",
      fn: i(() => [n("span", null, [r(s(e.t("Connected")) + "   ", 1), d(C, {
        name: "checked"
      })])]),
      key: "0"
    } : void 0]), 1032, ["class", "onClick"]))), 128))]),
    _: 1
  }), o.selectedMethod ? (l(), k(f, {
    key: 2,
    loading: o.isPageLoading,
    onClick: t[0] || (t[0] = a => o.isResetPopupShow = !0),
    class: "saveButton",
    size: "large",
    round: "",
    type: "danger",
    icon: "replay",
    style: {
      "margin-bottom": "30px"
    }
  }, {
    default: i(() => [r(s(e.t("Reset withdrawal option")), 1)]),
    _: 1
  }, 8, ["loading"])) : g("", !0), o.tokens.isOnChainStarted && o.selectedMethod && c.tokensToAirdropClaim ? (l(), h("div", ue, [d(f, {
    type: "success",
    size: "large",
    round: "",
    onClick: t[1] || (t[1] = a => e.$router.push("/on-chain-airdrop"))
  }, {
    default: i(() => [r(s(e.t("Go to claim page")), 1)]),
    _: 1
  })])) : g("", !0), o.tokens.isOnChainStarted && o.selectedMethod && !c.tokensToAirdropClaim && o.tokens.total > 0 ? (l(), k(N, {
    key: 4,
    wrapable: "",
    scrollable: !1,
    "left-icon": "warning",
    style: {
      "border-radius": "10px",
      "margin-top": "10px",
      "line-height": "normal"
    }
  }, {
    default: i(() => [r(s(e.t("Your {on-chain} withdrawal request is in the processing queue. Please come back later to collect your tokens.")), 1)]),
    _: 1
  })) : g("", !0), n("div", pe, [t[13] || (t[13] = n("h2", null, "FAQ", -1)), d(V, {
    modelValue: o.faqValue,
    "onUpdate:modelValue": t[2] || (t[2] = a => o.faqValue = a),
    style: {
      "border-radius": "10px",
      overflow: "hidden"
    }
  }, {
    default: i(() => [d(y, {
      name: "1",
      border: !1
    }, {
      title: i(() => [r(s(e.t("When will I receive my tokens?")), 1)]),
      default: i(() => [n("div", me, [n("p", null, s(e.t("If you have made a claim, the tokens will appear in your account on the chosen exchange at the time of listing. There may be slight delays in token distribution on the exchange side.")) + " " + s(e.t("You will be able to collect {on-chain} tokens from 24 October 12:00 utc, but the speed depends on network load and technical issues.")), 1)])]),
      _: 1
    }), d(y, {
      name: "2",
      border: !1
    }, {
      title: i(() => [r(s(e.t("What is the difference between Off-Chain and On-Chain Claim?")), 1)]),
      default: i(() => [n("div", ge, [n("p", null, s(e.t("An {Off-Chain} transaction does not require you to pay gas fees, and the claim will occur on your selected exchange for free. This feature is available to you only until October 23, 2024, 09:00 UTC, and works exclusively with the list of exchanges mentioned above.")), 1), n("p", null, s(e.t("An {On-Chain} transaction will require you to have gas (approximately 0.1 {TON}). You will receive the tokens only a few hours after the listing, depending on the load on the {TON} network.")), 1)])]),
      _: 1
    }), d(y, {
      name: "3",
      border: !1
    }, {
      title: i(() => [r(s(e.t("Can I change the exchange if I have already chosen one?")), 1)]),
      default: i(() => [n("div", fe, [n("p", null, s(e.t("Yes, you can change the platform for token withdrawal until October 23, 2024, 09:00 UTC.")), 1)])]),
      _: 1
    }), d(y, {
      name: "4",
      border: !1
    }, {
      title: i(() => [r(s(e.t("Until what date can I withdraw tokens from {X Empire}?")), 1)]),
      default: i(() => [n("div", ke, [n("p", null, s(e.t("Token withdrawals will be available for one week after the listing, until October 31, 2024, 12:00 UTC.")), 1)])]),
      _: 1
    }), d(y, {
      name: "5",
      border: !1
    }, {
      title: i(() => [r(s(e.t("Why should I hold or buy the {$X} token?")), 1)]),
      default: i(() => [n("div", ye, [n("p", null, s(e.t("{$X} token holders will participate in token drops of partner projects, meaning you will receive tokens from third-party projects that will be listing, free of charge. A list of these applications can be found in the menu, which will be updated regularly. Additionally, {$X} token holders will receive premium services and privileges in our utility apps, and this list can also be found in the menu, which will be expanded.")), 1)])]),
      _: 1
    }), d(y, {
      name: "11",
      border: !1
    }, {
      title: i(() => [r(s(e.t("Important notes")), 1)]),
      default: i(() => [n("div", we, [n("p", null, s(e.t("In some cases, the exchange may refuse your token claim (if you provided incorrect account details, the account is blocked or unverified, etc.). In this case, the tokens will be returned to our app, and you will be able to claim them again, but only via {On-Chain}.")), 1)])]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"])]), d(T, {
    show: o.isResetPopupShow,
    "onUpdate:show": t[4] || (t[4] = a => o.isResetPopupShow = a),
    round: "",
    closeable: "",
    position: "center"
  }, {
    default: i(() => [n("div", be, [n("h3", ve, s(e.t("Are you sure you want to reset your withdrawal options?")), 1), n("p", null, s(e.t("All information about deposit addresses, UID, and memo will be deleted. This action cannot be undone. You will be able to reenter all data.")), 1), d(f, {
      class: "resetButton",
      type: "danger",
      size: "large",
      onClick: c.handleResetOptions
    }, {
      default: i(() => [r(s(e.t("Reset and choose another option")), 1)]),
      _: 1
    }, 8, ["onClick"]), d(f, {
      size: "large",
      onClick: t[3] || (t[3] = a => o.isResetPopupShow = !1),
      type: "warning"
    }, {
      default: i(() => [r(s(e.t("Cancel")), 1)]),
      _: 1
    })])]),
    _: 1
  }, 8, ["show"]), d(T, {
    show: o.isExchangeInfoPopupShow,
    "onUpdate:show": t[6] || (t[6] = a => o.isExchangeInfoPopupShow = a),
    round: "",
    closeable: "",
    position: "bottom"
  }, {
    default: i(() => [n("div", _e, [n("h1", null, s(o.activeSelectedExchange.title), 1), n("p", null, s(e.t("Do you have a {exchange} account?", {
      exchange: o.activeSelectedExchange.title.replace("Exchange", "")
    })), 1), d(f, {
      onClick: t[5] || (t[5] = a => e._openUrl(o.activeSelectedExchange.registerLink)),
      type: "warning",
      round: "",
      size: "normal"
    }, {
      default: i(() => [r(s(e.t("No, let's create it")), 1)]),
      _: 1
    }), d(f, {
      class: "confirmButton",
      type: "success",
      round: "",
      size: "large",
      onClick: c.showDepositInfo
    }, {
      default: i(() => [r(s(e.t("Yes, I have it")), 1)]),
      _: 1
    }, 8, ["onClick"])])]),
    _: 1
  }, 8, ["show"]), d(T, {
    show: o.isDepositPopupShow,
    "onUpdate:show": t[10] || (t[10] = a => o.isDepositPopupShow = a),
    round: "",
    closeable: "",
    position: "bottom"
  }, {
    default: i(() => {
      var a, w;
      return [n("div", Ce, [n("div", Te, [n("img", {
        class: "image",
        src: c.getImage((a = o.activeSelectedExchange) == null ? void 0 : a.key),
        alt: o.activeSelectedExchange.key
      }, null, 8, Se), n("h2", Ee, s(o.activeSelectedExchange.title), 1)]), n("p", Ie, s(c.getExchangeDescription), 1), n("div", xe, [this.activeSelectedExchange.key === "onchain_airdrop" ? (l(), k(F, {
        key: 0,
        onWalletConnectHandler: c.tonConnectStatusHandler,
        "saved-wallet": o.selectedMethodData.deposit_address ? o.selectedMethodData.deposit_address : ""
      }, null, 8, ["onWalletConnectHandler", "saved-wallet"])) : o.selectedMethod ? g("", !0) : (l(), k(f, {
        key: 1,
        onClick: t[7] || (t[7] = m => e._openUrl(this.activeSelectedExchange.registerLink)),
        type: "warning",
        round: "",
        size: "normal"
      }, {
        default: i(() => [r(s(e.t("Register")), 1)]),
        _: 1
      }))]), n("div", De, [(l(!0), h(b, null, _(c.getNormalizedDates(o.activeSelectedExchange.datesInfo), m => (l(), h("div", {
        key: m,
        style: {
          "font-size": "0.8em"
        }
      }, [t[14] || (t[14] = r(" • ")), n("span", null, s(m), 1)]))), 128))]), ((w = o.activeSelectedExchange.inputs) == null ? void 0 : w.length) > 0 ? (l(), k(B, {
        key: 0,
        onSubmit: c.onSubmit
      }, {
        default: i(() => [n("div", Pe, [(l(!0), h(b, null, _(o.activeSelectedExchange.inputs, m => {
          var P;
          return l(), h("div", {
            key: m
          }, [n("p", Oe, s(c.getInputTitle(m, o.activeSelectedExchange)) + ":", 1), d(A, {
            modelValue: o.depositFormInputsValue[m],
            "onUpdate:modelValue": z => o.depositFormInputsValue[m] = z,
            center: "",
            autofocus: !0,
            clearable: "",
            color: "#fff",
            style: {
              "font-size": "1.1em"
            },
            border: !1,
            disabled: !!((P = o.selectedMethodData) != null && P[m] || o.isPageLoading)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])
        }), 128))]), o.activeSelectedExchange.docLink ? (l(), h("div", {
          key: 0,
          onClick: t[8] || (t[8] = m => e._openUrl(o.activeSelectedExchange.docLink)),
          style: {
            padding: "15px 0"
          }
        }, [d(C, {
          name: "question-o"
        }), t[15] || (t[15] = r("  ")), n("span", Me, s(e.t("See instructions on how to find these fields.")), 1)])) : g("", !0), o.selectedMethod ? g("", !0) : (l(), k(f, {
          key: 1,
          loading: o.isPageLoading,
          class: "saveButton",
          "native-type": "submit",
          type: "success",
          size: "large",
          disabled: c.isExchangeSaveButtonDisabled
        }, {
          default: i(() => [r(s(e.t("Save and choose")), 1)]),
          _: 1
        }, 8, ["loading", "disabled"]))]),
        _: 1
      }, 8, ["onSubmit"])) : g("", !0), o.selectedMethod ? (l(), h(b, {
        key: 1
      }, [n("div", Le, [d(C, {
        name: "success"
      }), r(" " + s(e.t("This method is chosen to withdraw tokens.")), 1)]), d(f, {
        loading: o.isPageLoading,
        onClick: t[9] || (t[9] = m => o.isResetPopupShow = !0),
        class: "saveButton",
        type: "danger",
        size: "large",
        icon: "replay"
      }, {
        default: i(() => [r(s(e.t("Reset withdrawal option")), 1)]),
        _: 1
      }, 8, ["loading"])], 64)) : g("", !0)])]
    }),
    _: 1
  }, 8, ["show"])], 2)) : (l(), h("div", H, [t[11] || (t[11] = n("h1", {
    class: "center aniH1 goldText"
  }, "Airdrop", -1)), n("p", K, s(e.t("You have not mined tokens in the mining phase.")), 1), n("p", Q, s(e.t("Subscribe to our Telegram channel, there will be announcements of other projects.")), 1), d(f, {
    size: "large",
    type: "warning",
    onClick: e._ourTgClick,
    style: {
      "margin-top": "15px"
    }
  }, {
    default: i(() => [r(s(e.t("Follow our channel")), 1)]),
    _: 1
  }, 8, ["onClick"])]))
}
const Ve = Z(G, [
  ["render", Ue],
  ["__scopeId", "data-v-1c90c2e3"]
]);
export {
  Ve as
  default
};