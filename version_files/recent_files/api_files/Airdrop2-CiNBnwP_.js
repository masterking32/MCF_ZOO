import {
  _ as R,
  G,
  j as q,
  s as M,
  g as y,
  c as d,
  t as n,
  a as s,
  d as h,
  F as w,
  b as r,
  e as u,
  f as E,
  w as l,
  h as B,
  r as k,
  o as i
} from "./index-qeLGY85n.js";
const H = {
    name: "Airdrop2-g",
    components: {
      GamePopup: G,
      TonWallet: q
    },
    async created() {
      await window.listenTonConnect()
    },
    async mounted() {
      this.stores.state.setPageSettings({
        isNoBg: !0
      }), this.isPageLoading = !0;
      try {
        const e = await this.apiCall("airdropData");
        this.selectedMethod = e.method, this.selectedMethodData = e.data, this.tokens = e.tokens, this.wallet = (await window.tonConnectUI()).wallet, this.unsubscribe = (await window.tonConnectUI()).onStatusChange(o => this.wallet = o)
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
        isDonateConfirmShow: !1,
        isNFTPopupShow: !1
      }
    },
    watch: {
      tokens(e) {
        this.charityFieldCount = Math.round(e.total / 2)
      }
    },
    computed: {
      tokensToAirdropClaim() {
        return this.tokens.airdrops.reduce((e, o) => e + o, 0)
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
        let o = "";
        this.tokens.sentToCex.method_uid && this.tokens.sentToCex.method_uid.length > 0 && (o = " | uid: " + this.tokens.sentToCex.method_uid);
        let p = "";
        return this.tokens.sentToCex.method_memo && this.tokens.sentToCex.method_memo.length > 0 && (p = " | memo: " + this.tokens.sentToCex.method_memo), `${this.tokens.sentToCex.method_key||""} ${e} ${o} ${p}`
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
        var o, p, T, t, c, _;
        return ((o = this.tokens) == null ? void 0 : o.phase1) === 0 && ((p = this.tokens) == null ? void 0 : p.phase2) === 0 || ((T = this.tokens) == null ? void 0 : T.total) - ((t = this.tokens) == null ? void 0 : t.not) - ((c = this.tokens) == null ? void 0 : c.blum) < 1 || (_ = this.tokens) != null && _.isCexFinish ? this.dbExchangeOnChain : ["NG", "IN", "BD", "PK", "US", "AF", "HT", "KP", "LR", "LY", "ML", "SO", "SS", "SY", "YE", "MM", "CU", "XK", "PR", "AS", "GU", "MP", "VI", "IR", "FR", "BE", "GB"].includes(this.uProfile.country) ? [{
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
          key: "ebi",
          title: "Ebi Exchange",
          uid_title: "Ebi UID",
          kycStatus: "notNeeded",
          isExchange: !0,
          isNeedGas: !1,
          inputs: ["uid"],
          refCode: "",
          registerLink: "https://ebi.xyz/en/xempire",
          datesInfo: [{
            date: "2024-10-18T18:00:00.000Z",
            title: "Deposit start"
          }, {
            date: "2024-10-23T09:00:00.000Z",
            title: "Deposit end"
          }, {
            date: "2024-10-23T18:00:00.000Z",
            title: "Ebi confirmation/decline"
          }, {
            date: "2024-10-24T12:00:00.000Z",
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
            date: "2024-10-18T18:00:00.000Z",
            title: "Start  of collection of withdrawal requests in on-chain"
          }, {
            date: "2024-10-24T12:00:00.000Z",
            title: "First On-chain Distribution"
          }, {
            date: "2024-10-31T12:00:00.000Z",
            title: "End of collection of withdrawal requests in on-chain"
          }]
        }] : [{
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
          key: "telegram_wallet",
          title: "Wallet in Telegram",
          uid_title: "",
          kycStatus: "notNeeded",
          isExchange: !1,
          isNeedGas: !1,
          registerLink: "https://t.me/wallet/start?startapp=crypto_onboarding-currency__X",
          datesInfo: [{
            date: "2024-10-18T18:00:00.000Z",
            title: "Deposit start"
          }, {
            date: "2024-10-23T09:00:00.000Z",
            title: "Deposit end"
          }, {
            date: "2024-10-23T18:00:00.000Z",
            title: "Telegram wallet confirmation/decline"
          }, {
            date: "2024-10-24T12:00:00.000Z",
            title: "You'll get your Airdrop"
          }]
        }, {
          key: "ebi",
          title: "Ebi Exchange",
          uid_title: "Ebi UID",
          kycStatus: "notNeeded",
          isExchange: !0,
          isNeedGas: !1,
          inputs: ["uid"],
          refCode: "",
          registerLink: "https://ebi.xyz/en/xempire",
          datesInfo: [{
            date: "2024-10-18T18:00:00.000Z",
            title: "Deposit start"
          }, {
            date: "2024-10-23T09:00:00.000Z",
            title: "Deposit end"
          }, {
            date: "2024-10-23T18:00:00.000Z",
            title: "Ebi confirmation/decline"
          }, {
            date: "2024-10-24T12:00:00.000Z",
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
        return !!(Object.values(this.depositFormInputsValue).some(o => !o) || this.isPageLoading)
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
      async takeBackDonation() {
        this.isCharityLoading = !0;
        const e = await this.apiCall("airdropCharityRemove", {});
        this.selectedMethod = e.method, this.selectedMethodData = e.data, this.tokens = e.tokens, this.isCharityLoading = !1, this.isDonateConfirmShow = !1, M({
          type: "success",
          message: this.t("Tokens have been returned.")
        })
      },
      async submitCharity() {
        this.isCharityLoading = !0;
        const e = await this.apiCall("airdropCharity", {
          type: this.charityFieldType,
          tokens: this.charityFieldCount
        });
        this.selectedMethod = e.method, this.selectedMethodData = e.data, this.tokens = e.tokens, this.isCharityLoading = !1, this.isDonateConfirmShow = !1, M({
          type: "success",
          position: "bottom",
          message: this.t("Thank you for your donation.")
        })
      },
      async tonConnectStatusHandler(e) {
        if (this.wallet = e, !this.selectedMethod && e) {
          const o = {
            method: "onchain_airdrop",
            data: {
              deposit_address: e.account.address
            }
          };
          try {
            const p = await this.apiCall("airdropSave", o);
            this.selectedMethod = p.method, this.selectedMethodData = p.data, this.tokens = p.tokens
          } catch (p) {
            this._catchError(p)
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
          const o = await this.apiCall("airdropSave", e);
          this.selectedMethod = o.method, this.selectedMethodData = o.data, this.tokens = o.tokens
        } catch (o) {
          this._catchError(o)
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
      getInputTitle(e, o) {
        if (e === "uid") return o.uid_title ? o.uid_title : "UID";
        const p = {
          memo: "Memo",
          deposit_address: "$X Deposit Address"
        };
        return e in p ? p[e] : e
      },
      getNormalizedDates(e) {
        return e.map(o => {
          const p = new Date(o.date),
            T = {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              timeZone: "UTC"
            };
          return `${p.toLocaleString("en-US",T).replace(",","")} UTC - ${o.title}`
        })
      },
      async showDepositInfo() {
        this.isExchangeInfoPopupShow = !1, this.isDepositPopupShow = !0, this.depositFormInputsValue = {}, this.activeSelectedExchange.inputs.forEach(e => {
          this.depositFormInputsValue[e] = ""
        })
      }
    }
  },
  K = {
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
  Q = {
    class: "date center"
  },
  J = {
    key: 0,
    class: "tokenCount"
  },
  $ = {
    class: "",
    style: {
      color: "#fff"
    }
  },
  ee = {
    class: "tokenCount"
  },
  te = {
    class: "",
    style: {
      color: "#fff"
    }
  },
  oe = {
    style: {
      display: "inline-block",
      "border-bottom": "1px dashed #ccc"
    }
  },
  se = {
    key: 2
  },
  ne = {
    class: "tokenCount"
  },
  ie = {
    class: "tips"
  },
  le = {
    class: "title"
  },
  ae = {
    key: 0,
    style: {
      "font-weight": "normal",
      "font-size": "12px"
    }
  },
  re = {
    class: "tips"
  },
  de = {
    class: "right"
  },
  he = {
    class: "right"
  },
  ce = {
    key: 0
  },
  ue = {
    key: 1
  },
  pe = {
    class: "right"
  },
  me = {
    key: 2
  },
  ke = {
    class: "right"
  },
  fe = {
    key: 3
  },
  ye = {
    class: "right"
  },
  ge = {
    style: {
      padding: "0 10px"
    }
  },
  we = {
    key: 4
  },
  be = {
    key: 5
  },
  ve = {
    class: "right"
  },
  Te = {
    class: ""
  },
  _e = {
    key: 6
  },
  Ce = {
    class: "right"
  },
  Se = {
    class: ""
  },
  Ee = {
    key: 7
  },
  Ie = {
    class: "right"
  },
  Ne = {
    style: {
      "font-size": "0.7em"
    }
  },
  De = {
    class: "right"
  },
  xe = {
    style: {
      display: "inline-block",
      "border-bottom": "1px dashed #ccc"
    }
  },
  Pe = {
    key: 3,
    class: "preTitle",
    style: {
      color: "#3ed966",
      "margin-top": "30px"
    }
  },
  Ue = {
    key: 4,
    class: "preTitle"
  },
  Fe = {
    style: {
      "margin-top": "40px"
    }
  },
  Oe = {
    class: "exchanges"
  },
  Le = ["onClick"],
  Ze = {
    class: "info"
  },
  Me = ["src", "alt"],
  Be = {
    key: 0,
    class: "title",
    style: {
      color: "#3ed966"
    }
  },
  Ae = {
    key: 1,
    class: "title"
  },
  ze = {
    class: "icons"
  },
  Ve = {
    key: 6,
    style: {
      margin: "40px 0"
    }
  },
  Ye = {
    style: {
      margin: "40px 0",
      background: "var(--van-background)",
      padding: "15px",
      "border-radius": "10px"
    }
  },
  Xe = {
    key: 0,
    class: "center"
  },
  Re = {
    class: "depositPopup"
  },
  Ge = {
    style: {
      "font-size": "14px"
    }
  },
  qe = {
    style: {
      "font-size": "14px"
    }
  },
  He = {
    style: {
      "font-size": "14px"
    }
  },
  Ke = {
    style: {
      margin: "40px 0",
      "padding-bottom": "40px"
    }
  },
  je = {
    class: "faqItemContent"
  },
  We = {
    class: "faqItemContent"
  },
  Qe = {
    class: "faqItemContent"
  },
  Je = {
    class: "faqItemContent"
  },
  $e = {
    class: "faqItemContent"
  },
  et = {
    class: "faqItemContent"
  },
  tt = {
    class: "resetOptionsPopup"
  },
  ot = {
    class: "title"
  },
  st = {
    class: "exchangeInfoPopup"
  },
  nt = {
    class: "depositPopup"
  },
  it = {
    class: "info"
  },
  lt = ["src", "alt"],
  at = {
    class: "title"
  },
  rt = {
    class: "description"
  },
  dt = {
    class: "walletButtons"
  },
  ht = {
    class: "depositFields"
  },
  ct = {
    class: "label"
  },
  ut = {
    style: {
      display: "inline-block",
      "border-bottom": "1px dashed #ccc"
    }
  },
  pt = {
    class: "center",
    style: {
      "font-size": "1.3em",
      color: "#3ed966",
      "font-weight": "bold",
      "margin-top": "20px"
    }
  };

function mt(e, o, p, T, t, c) {
  var D, x, P, U, F, O, L;
  const _ = k("van-loading"),
    g = k("van-icon"),
    I = k("van-notice-bar"),
    f = k("van-button"),
    C = k("van-step"),
    N = k("van-steps"),
    S = k("game-popup"),
    b = k("van-collapse-item"),
    A = k("van-collapse"),
    z = k("ton-wallet"),
    V = k("van-field"),
    Y = k("van-form");
  return t.isPageLoading ? (i(), y(_, {
    key: 0,
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%, -50%, 0)"
    }
  })) : isNaN(t.tokens.total) ? (i(), d("div", K, n(e.t("Please reload page")), 1)) : c.isMaintenance ? (i(), d("div", j, [s("div", W, [s("p", null, n(e.t("We are currently making the snapshot of the data to make {on-chain} airdrop.")), 1), s("p", null, n(e.t("It could take several minutes.")), 1), s("p", null, n(e.t("Try again later.")), 1)])])) : (i(), d("div", {
    key: 3,
    class: B(["airdrop container pageContainer", {
      blur: t.isPageLoading
    }]),
    style: {
      "padding-top": "20px"
    }
  }, [o[34] || (o[34] = s("h1", {
    class: "center aniH1 goldText"
  }, "Airdrop", -1)), s("h2", Q, n(e.t("October 24, 2024. 12:00 UTC")), 1), t.tokens.isAllInNFT ? (i(), d("div", J, [s("div", $, [h(n(e.t("Congratulations all your tokens you have received in the form of NFT.")), 1), o[17] || (o[17] = s("br", null, null, -1))])])) : !t.tokens.phase1 && !t.tokens.phase2 && !t.tokens.not && !t.tokens.blum && !t.tokens.convertedNftTokens && !t.tokens.charity ? (i(), d(w, {
    key: 1
  }, [s("div", ee, [s("div", te, n(e.t("Unfortunately your activity in the game was not enough to get the tokens.")), 1)]), s("div", {
    style: {
      margin: "10px 0",
      "font-size": "0.8em"
    },
    onClick: o[0] || (o[0] = a => e._openUrl("https://t.me/empirex/328"))
  }, [r(g, {
    name: "question"
  }), o[18] || (o[18] = h()), s("span", oe, n(e.t("View {Airdrop} criteria")), 1)])], 64)) : (i(), d("div", se, [s("div", ne, [s("div", ie, n(e.t("Tokens left")), 1), s("div", le, [h(n(e._number(c.tokensTotal)) + " $X ", 1), (D = t.tokens.sentToCex) != null && D.tokens ? (i(), d("span", ae, "(" + n(e._number((x = t.tokens.sentToCex) == null ? void 0 : x.tokens)) + " $X sent to " + n(((P = t.tokens.sentToCex) == null ? void 0 : P.method_key) || "CEX") + ")", 1)) : u("", !0)]), s("div", re, n(e.t("Details:")), 1), s("table", null, [s("tbody", null, [s("tr", null, [s("td", de, n(e._number(t.tokens.phase1)), 1), o[19] || (o[19] = s("td", {
    style: {
      width: "90%",
      padding: "0 10px"
    }
  }, "Phase 1", -1))]), s("tr", null, [s("td", he, n(e._number(t.tokens.phase2)), 1), o[20] || (o[20] = s("td", {
    style: {
      padding: "0 10px"
    }
  }, "Phase 2", -1))]), t.tokens.not || t.tokens.blum || t.tokens.convertedNftTokens ? (i(), d("tr", ce, o[21] || (o[21] = [s("td", {
    colspan: "2",
    style: {
      "border-bottom": "1px solid #ccc"
    }
  }, " ", -1)]))) : u("", !0), t.tokens.not ? (i(), d("tr", ue, [s("td", pe, n(e._number(t.tokens.not)), 1), o[22] || (o[22] = h()), o[23] || (o[23] = s("td", {
    style: {
      padding: "0 10px"
    }
  }, "NOTcoiners. On-chain only", -1))])) : u("", !0), t.tokens.blum ? (i(), d("tr", me, [s("td", ke, n(e._number(t.tokens.blum)), 1), o[24] || (o[24] = h()), o[25] || (o[25] = s("td", {
    style: {
      padding: "0 10px"
    }
  }, "BLUMers. On-chain only", -1))])) : u("", !0), t.tokens.convertedNftTokens ? (i(), d("tr", fe, [s("td", ye, n(e._number(t.tokens.convertedNftTokens)), 1), s("td", ge, n(t.tokens.convertedNftCount) + " converted NFT. On-chain only", 1)])) : u("", !0), t.tokens.nftTokens || t.tokens.charity || (U = t.tokens.sentToCex) != null && U.tokens ? (i(), d("tr", we, o[26] || (o[26] = [s("td", {
    colspan: "2",
    style: {
      "border-bottom": "1px solid #ccc"
    }
  }, " ", -1)]))) : u("", !0), t.tokens.nftTokens ? (i(), d("tr", be, [s("td", ve, "-" + n(e._number(t.tokens.nftTokens)), 1), s("td", Te, n(e.t("{count} nft minted", {
    count: t.tokens.nftCount
  })), 1)])) : u("", !0), t.tokens.charity ? (i(), d("tr", _e, [s("td", Ce, "-" + n(e._number(t.tokens.charity)), 1), s("td", Se, n(e.t("Donated to charity")), 1)])) : u("", !0), ((F = t.tokens.sentToCex) == null ? void 0 : F.tokens) > 0 ? (i(), d("tr", Ee, [s("td", Ie, "-" + n(e._number((O = t.tokens.sentToCex) == null ? void 0 : O.tokens)), 1), s("td", Ne, [h(n(e.t("Sent to {cex}", {
    cex: c.cexText
  })) + " ", 1), o[27] || (o[27] = s("br", null, null, -1)), h(" " + n(e.t("You will be able to see your balance on 24 October at 12:00 UTC")), 1)])])) : u("", !0), (i(!0), d(w, null, E(t.tokens.airdrops, (a, v) => (i(), d("tr", {
    key: `airdtop_tokens_${v}`
  }, [a > 0 ? (i(), d(w, {
    key: 0
  }, [s("td", De, "-" + n(e._number(a)), 1), s("td", null, " On-Chain Airdrop #" + n(v + 1), 1)], 64)) : u("", !0)]))), 128))])])]), ((L = t.tokens.sentToCex) == null ? void 0 : L.tokens) > 0 && t.tokens.total > 0 ? (i(), y(I, {
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
    default: l(() => [h(n(e.t("You will receive some tokens through the exchange, and tokens that are only available for withdrawal {on-chain} and you will be able to pick up {on-chain}.")), 1)]),
    _: 1
  })) : u("", !0), s("div", {
    style: {
      margin: "10px 0",
      "font-size": "0.8em"
    },
    onClick: o[1] || (o[1] = a => e._openUrl("https://t.me/empirex/328"))
  }, [r(g, {
    name: "question"
  }), o[28] || (o[28] = h()), s("span", xe, n(e.t("Why am I getting this amount of {airdrop}?")), 1)])])), t.selectedMethod ? (i(), d("div", Pe, n(e.t("This method is chosen to withdraw tokens:")), 1)) : (i(), d("div", Ue, n(e.t("Choose withdrawal option:")), 1)), s("div", Fe, [s("div", Oe, [(i(!0), d(w, null, E(c.dbExchange, a => (i(), d("div", {
    key: a == null ? void 0 : a.key,
    class: B(["exchange", {
      bold: (a == null ? void 0 : a.key) === "onchain_airdrop",
      disabled: t.selectedMethod && a.key !== t.selectedMethod
    }]),
    onClick: v => c.showExchangeInfo(a)
  }, [s("div", Ze, [s("img", {
    class: "image",
    src: c.getImage(a == null ? void 0 : a.key),
    alt: a.key
  }, null, 8, Me), s("div", null, [t.selectedMethod ? (i(), d("div", Be, [r(g, {
    name: "checked"
  }), h(" " + n(e.t("The wallet is connected")), 1)])) : (i(), d("div", Ae, n(e.t("Connect your wallet")), 1))])]), s("div", ze, [r(g, {
    name: "arrow"
  })])], 10, Le))), 128))])]), t.selectedMethod ? (i(), y(f, {
    key: 5,
    loading: t.isPageLoading,
    onClick: o[2] || (o[2] = a => t.isResetPopupShow = !0),
    class: "saveButton",
    size: "large",
    round: "",
    type: "default",
    icon: "replay",
    style: {
      "margin-bottom": "30px"
    }
  }, {
    default: l(() => [h(n(e.t("Reset withdrawal option")), 1)]),
    _: 1
  }, 8, ["loading"])) : u("", !0), t.tokens.isOnChainStarted && t.selectedMethod && (c.tokensToAirdropClaim || t.tokens.isAllInNFT && t.tokens.convertedNftTokens > 0) ? (i(), d("div", Ve, [r(f, {
    type: "success",
    size: "large",
    round: "",
    onClick: o[3] || (o[3] = a => e.$router.push("/on-chain-airdrop"))
  }, {
    default: l(() => [h(n(e.t("Go to claim page")), 1)]),
    _: 1
  })])) : u("", !0), t.tokens.isOnChainStarted && t.selectedMethod && !c.tokensToAirdropClaim && t.tokens.total > 0 ? (i(), y(I, {
    key: 7,
    wrapable: "",
    scrollable: !1,
    "left-icon": "warning",
    style: {
      "border-radius": "10px",
      "margin-top": "10px",
      "line-height": "normal"
    }
  }, {
    default: l(() => [h(n(e.t("Your {on-chain} withdrawal request is in the processing queue. Please come back later to collect your tokens.")), 1)]),
    _: 1
  })) : u("", !0), s("div", Ye, [r(f, {
    onClick: o[4] || (o[4] = a => t.isNFTPopupShow = !0),
    size: "large",
    round: "",
    type: "primary"
  }, {
    default: l(() => [h(n(e.t("Convert {NFT} to {$X}")), 1)]),
    _: 1
  }), t.tokens.isAllInNFT && t.tokens.convertedNftTokens > 0 ? (i(), d("p", Xe, n(e.t("{countNft} converted NFTs to {countTokens} {$X}", {
    countNft: e._number(t.tokens.convertedNftCount),
    countTokens: e._number(t.tokens.convertedNftTokens)
  })), 1)) : u("", !0), s("p", null, [r(g, {
    name: "warning"
  }), h(" " + n(e.t("If you want convert {NFT} to tokens you should connect the same wallet from which you sent {NFT}")), 1)])]), r(S, {
    show: t.isNFTPopupShow,
    "onUpdate:show": o[6] || (o[6] = a => t.isNFTPopupShow = a),
    title: e.t("How to convert {NFT} to {$X}"),
    round: "",
    closeable: "",
    duration: .1
  }, {
    default: l(() => [s("div", Re, [r(N, {
      style: {
        "background-color": "transparent"
      },
      direction: "vertical",
      active: 100,
      "inactive-color": "#fff"
    }, {
      default: l(() => [r(C, null, {
        default: l(() => [s("div", Ge, [s("span", null, "1. " + n(e.t("Send {NFT} voucher to the address")) + " (" + n(e.t("Click to copy")) + ")", 1), o[29] || (o[29] = s("br", null, null, -1)), o[30] || (o[30] = s("br", null, null, -1)), s("span", {
          style: {
            "font-size": "9px"
          },
          onClick: o[5] || (o[5] = a => e._copyToClipboard("UQCftzSPFjJU7m34InzUO3zHlBQH47Hjmn6MibEfKu8xh6du")),
          class: "clicked copyBlock"
        }, "UQCftzSPFjJU7m34InzUO3zHlBQH47Hjmn6MibEfKu8xh6du")])]),
        _: 1
      }), r(C, null, {
        default: l(() => [s("div", qe, " 2. " + n(e.t("You will see {$X} on your balance within an {count} hours after sending the voucher if the wallet from which you sent the {NFT} is connected to the {on-chain} claim.", {
          count: 24
        })), 1)]),
        _: 1
      }), r(C, null, {
        default: l(() => [s("div", He, " 3. " + n(e.t("You will be able to withdraw {$X} tokens from {NFT} only {on-chain} after 24 October 12:00 utc. The speed depends on network load and technical issues.")), 1)]),
        _: 1
      })]),
      _: 1
    }), o[31] || (o[31] = s("br", null, null, -1)), s("h3", null, n(e.t("Important")) + "!", 1), s("p", null, n(e.t("You must connect {on-chain} the same wallet which you use to transfer {NFT}. Otherwise you will not see the tokens on your balance.")), 1), s("p", null, n(e.t("If you want to withdraw part {off-chain} and part {on-chain}, first enter the information for the {off-chain} withdrawal. And after October 23, 9:00 utc, you will be able to select a wallet for the {on-chain} withdrawal.")), 1), s("p", null, n(e.t("If you want to receive all the tokens at once (both from the mining phases and from the {NFT}), this can only be done {on-chain}")), 1), s("p", null, n(e.t("We advise you to receive all the {$X} tokens from your {NFT} vouchers and only then order an {on-chain} withdrawal. This way you will spend less money on commissions and will take less time")), 1)])]),
    _: 1
  }, 8, ["show", "title"]), s("div", Ke, [o[32] || (o[32] = s("h2", null, "FAQ", -1)), r(A, {
    modelValue: t.faqValue,
    "onUpdate:modelValue": o[7] || (o[7] = a => t.faqValue = a)
  }, {
    default: l(() => [r(b, {
      name: "1",
      border: !1
    }, {
      title: l(() => [h(n(e.t("When will I receive my tokens?")), 1)]),
      default: l(() => [s("div", je, [s("p", null, n(e.t("If you have made a claim, the tokens will appear in your account on the chosen exchange at the time of listing. There may be slight delays in token distribution on the exchange side.")) + " " + n(e.t("You will be able to collect {on-chain} tokens from 24 October 12:00 utc, but the speed depends on network load and technical issues.")), 1)])]),
      _: 1
    }), r(b, {
      name: "2",
      border: !1
    }, {
      title: l(() => [h(n(e.t("What is the difference between Off-Chain and On-Chain Claim?")), 1)]),
      default: l(() => [s("div", We, [s("p", null, n(e.t("An {Off-Chain} transaction does not require you to pay gas fees, and the claim will occur on your selected exchange for free. This feature is available to you only until October 23, 2024, 09:00 UTC, and works exclusively with the list of exchanges mentioned above.")), 1), s("p", null, n(e.t("An {On-Chain} transaction will require you to have gas (approximately 0.1 {TON}). You will receive the tokens only a few hours after the listing, depending on the load on the {TON} network.")), 1)])]),
      _: 1
    }), r(b, {
      name: "3",
      border: !1
    }, {
      title: l(() => [h(n(e.t("Can I change the exchange if I have already chosen one?")), 1)]),
      default: l(() => [s("div", Qe, [s("p", null, n(e.t("Yes, you can change the platform for token withdrawal until October 23, 2024, 09:00 UTC.")), 1)])]),
      _: 1
    }), r(b, {
      name: "4",
      border: !1
    }, {
      title: l(() => [h(n(e.t("Until what date can I withdraw tokens from {X Empire}?")), 1)]),
      default: l(() => [s("div", Je, [s("p", null, n(e.t("Token withdrawals will be available for one week after the listing, until October 31, 2024, 12:00 UTC.")), 1)])]),
      _: 1
    }), r(b, {
      name: "5",
      border: !1
    }, {
      title: l(() => [h(n(e.t("Why should I hold or buy the {$X} token?")), 1)]),
      default: l(() => [s("div", $e, [s("p", null, n(e.t("{$X} token holders will participate in token drops of partner projects, meaning you will receive tokens from third-party projects that will be listing, free of charge. A list of these applications can be found in the menu, which will be updated regularly. Additionally, {$X} token holders will receive premium services and privileges in our utility apps, and this list can also be found in the menu, which will be expanded.")), 1)])]),
      _: 1
    }), r(b, {
      name: "11",
      border: !1
    }, {
      title: l(() => [h(n(e.t("Important notes")), 1)]),
      default: l(() => [s("div", et, [s("p", null, n(e.t("In some cases, the exchange may refuse your token claim (if you provided incorrect account details, the account is blocked or unverified, etc.). In this case, the tokens will be returned to our app, and you will be able to claim them again, but only via {On-Chain}.")), 1)])]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"])]), r(S, {
    show: t.isResetPopupShow,
    "onUpdate:show": o[9] || (o[9] = a => t.isResetPopupShow = a),
    round: "",
    closeable: "",
    duration: .1,
    position: "center"
  }, {
    default: l(() => [s("div", tt, [s("h3", ot, n(e.t("Are you sure you want to reset your withdrawal options?")), 1), s("p", null, n(e.t("All information about deposit addresses, UID, and memo will be deleted. This action cannot be undone. You will be able to reenter all data.")), 1), r(f, {
      class: "resetButton",
      type: "danger",
      size: "large",
      onClick: c.handleResetOptions
    }, {
      default: l(() => [h(n(e.t("Reset and choose another option")), 1)]),
      _: 1
    }, 8, ["onClick"]), r(f, {
      size: "large",
      onClick: o[8] || (o[8] = a => t.isResetPopupShow = !1)
    }, {
      default: l(() => [h(n(e.t("Cancel")), 1)]),
      _: 1
    })])]),
    _: 1
  }, 8, ["show"]), r(S, {
    show: t.isExchangeInfoPopupShow,
    "onUpdate:show": o[11] || (o[11] = a => t.isExchangeInfoPopupShow = a),
    title: t.activeSelectedExchange.title,
    imgUrl: c.getImage(t.activeSelectedExchange.key),
    closeable: "",
    duration: .1
  }, {
    default: l(() => [s("div", st, [s("p", null, n(e.t("Do you have a {exchange} account?", {
      exchange: t.activeSelectedExchange.title.replace("Exchange", "")
    })), 1), r(f, {
      onClick: o[10] || (o[10] = a => e._openUrl(t.activeSelectedExchange.registerLink)),
      class: "goldLightText",
      round: "",
      size: "normal"
    }, {
      default: l(() => [h(n(e.t("No, let's create it")), 1)]),
      _: 1
    }), r(f, {
      class: "confirmButton",
      type: "primary",
      round: "",
      size: "large",
      onClick: c.showDepositInfo
    }, {
      default: l(() => [h(n(e.t("Yes, I have it")), 1)]),
      _: 1
    }, 8, ["onClick"])])]),
    _: 1
  }, 8, ["show", "title", "imgUrl"]), r(S, {
    show: t.isDepositPopupShow,
    "onUpdate:show": o[16] || (o[16] = a => t.isDepositPopupShow = a),
    closeable: "",
    duration: .1
  }, {
    default: l(() => {
      var a, v;
      return [s("div", nt, [s("div", it, [s("img", {
        class: "image",
        src: c.getImage((a = t.activeSelectedExchange) == null ? void 0 : a.key),
        alt: t.activeSelectedExchange.key
      }, null, 8, lt), s("h2", at, n(t.activeSelectedExchange.title), 1)]), s("p", rt, n(c.getExchangeDescription), 1), s("div", dt, [this.activeSelectedExchange.key === "onchain_airdrop" ? (i(), y(z, {
        key: 0,
        onWalletConnectHandler: c.tonConnectStatusHandler,
        "saved-wallet": t.selectedMethodData.deposit_address ? t.selectedMethodData.deposit_address : ""
      }, null, 8, ["onWalletConnectHandler", "saved-wallet"])) : this.activeSelectedExchange.key === "telegram_wallet" && !t.selectedMethod ? (i(), y(f, {
        key: 1,
        onClick: o[12] || (o[12] = m => e._openUrl(this.activeSelectedExchange.registerLink)),
        type: "primary",
        round: "",
        size: "normal"
      }, {
        default: l(() => [h(n(e.t("Connect {Telegram Wallet}")) + " ", 1), r(g, {
          name: "arrow"
        })]),
        _: 1
      })) : t.selectedMethod ? u("", !0) : (i(), y(f, {
        key: 2,
        onClick: o[13] || (o[13] = m => e._openUrl(this.activeSelectedExchange.registerLink)),
        type: "primary",
        round: "",
        size: "normal"
      }, {
        default: l(() => [h(n(e.t("Register")) + " ", 1), r(g, {
          name: "arrow"
        })]),
        _: 1
      }))]), r(N, {
        style: {
          "background-color": "transparent"
        },
        direction: "vertical",
        active: 100,
        "inactive-color": "#fff"
      }, {
        default: l(() => [(i(!0), d(w, null, E(c.getNormalizedDates(t.activeSelectedExchange.datesInfo), m => (i(), y(C, {
          key: m
        }, {
          default: l(() => [s("span", null, n(m), 1)]),
          _: 2
        }, 1024))), 128))]),
        _: 1
      }), ((v = t.activeSelectedExchange.inputs) == null ? void 0 : v.length) > 0 ? (i(), y(Y, {
        key: 0,
        onSubmit: c.onSubmit
      }, {
        default: l(() => [s("div", ht, [(i(!0), d(w, null, E(t.activeSelectedExchange.inputs, m => {
          var Z;
          return i(), d("div", {
            key: m
          }, [s("p", ct, n(c.getInputTitle(m, t.activeSelectedExchange)) + ":", 1), r(V, {
            modelValue: t.depositFormInputsValue[m],
            "onUpdate:modelValue": X => t.depositFormInputsValue[m] = X,
            center: "",
            autofocus: !0,
            clearable: "",
            color: "#fff",
            style: {
              "font-size": "1.1em"
            },
            border: !1,
            disabled: !!((Z = t.selectedMethodData) != null && Z[m] || t.isPageLoading)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])
        }), 128))]), t.activeSelectedExchange.docLink ? (i(), d("div", {
          key: 0,
          onClick: o[14] || (o[14] = m => e._openUrl(t.activeSelectedExchange.docLink)),
          style: {
            padding: "15px 0"
          }
        }, [r(g, {
          name: "question-o"
        }), o[33] || (o[33] = h("  ")), s("span", ut, n(e.t("See instructions on how to find these fields.")), 1)])) : u("", !0), t.selectedMethod ? u("", !0) : (i(), y(f, {
          key: 1,
          loading: t.isPageLoading,
          class: "saveButton",
          "native-type": "submit",
          type: "primary",
          size: "large",
          round: "",
          disabled: c.isExchangeSaveButtonDisabled
        }, {
          default: l(() => [h(n(e.t("Save and choose")), 1)]),
          _: 1
        }, 8, ["loading", "disabled"]))]),
        _: 1
      }, 8, ["onSubmit"])) : u("", !0), t.selectedMethod ? (i(), d(w, {
        key: 1
      }, [s("div", pt, [r(g, {
        name: "success"
      }), h(" " + n(e.t("This method is chosen to withdraw tokens.")), 1)]), r(f, {
        loading: t.isPageLoading,
        onClick: o[15] || (o[15] = m => t.isResetPopupShow = !0),
        class: "saveButton",
        type: "default",
        size: "large",
        round: "",
        icon: "replay"
      }, {
        default: l(() => [h(n(e.t("Reset withdrawal option")), 1)]),
        _: 1
      }, 8, ["loading"])], 64)) : u("", !0)])]
    }),
    _: 1
  }, 8, ["show"])], 2))
}
const ft = R(H, [
  ["render", mt],
  ["__scopeId", "data-v-aca332f3"]
]);
export {
  ft as
  default
};