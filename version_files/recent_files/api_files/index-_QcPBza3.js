const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/Home-BQLRKRBM.js", "assets/Alliance-BGOFugoY.js", "assets/Alliance-BkDyrW8l.css", "assets/Boost-DYAc-yhn.js", "assets/Boost-CeTnVcsX.css", "assets/Home-BT9Zzn6w.css", "assets/Finish-D1NSHFjb.js", "assets/Finish-CWRl7QfM.css", "assets/Rating-B824hl3V.js", "assets/Rating-DRysk5eI.css", "assets/Communities-R735ME58.js", "assets/Communities-DpnpFDuu.css", "assets/ReferralCommission-GYPH-IKY.js", "assets/ReferralCommission-DcL3Imm7.css"]))) => i.map(i => d[i]);
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver(s => {
    for (const a of s)
      if (a.type === "childList")
        for (const l of a.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && o(l)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function n(s) {
    const a = {};
    return s.integrity && (a.integrity = s.integrity), s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? a.credentials = "include" : s.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
  }

  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const a = n(s);
    fetch(s.href, a)
  }
})();

function bl() {}
const ke = Object.assign,
  zt = typeof window < "u",
  wn = e => e !== null && typeof e == "object",
  Fe = e => e != null,
  ci = e => typeof e == "function",
  Zl = e => wn(e) && ci(e.then) && ci(e.catch),
  Qi = e => Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime());

function md(e) {
  return e = e.replace(/[^-|\d]/g, ""), /^((\+86)|(86))?(1)\d{10}$/.test(e) || /^0[0-9-]{10,13}$/.test(e)
}
const gd = e => typeof e == "number" || /^\d+(\.\d+)?$/.test(e),
  jm = () => zt ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;

function Jr(e, t) {
  const n = t.split(".");
  let o = e;
  return n.forEach(s => {
    var a;
    o = wn(o) && (a = o[s]) != null ? a : ""
  }), o
}

function Ve(e, t, n) {
  return t.reduce((o, s) => ((!n || e[s] !== void 0) && (o[s] = e[s]), o), {})
}
const pn = (e, t) => JSON.stringify(e) === JSON.stringify(t),
  Us = e => Array.isArray(e) ? e : [e],
  Qm = e => e.reduce((t, n) => t.concat(n), []),
  et = null,
  Z = [Number, String],
  j = {
    type: Boolean,
    default: !0
  },
  gt = e => ({
    type: e,
    required: !0
  }),
  Xe = () => ({
    type: Array,
    default: () => []
  }),
  lt = e => ({
    type: Number,
    default: e
  }),
  ge = e => ({
    type: Z,
    default: e
  }),
  te = e => ({
    type: String,
    default: e
  });
/**
 * @vue/shared v3.5.11
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function Xl(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return n => n in t
}
const Ke = {},
  ei = [],
  bn = () => {},
  Km = () => !1,
  sa = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Jl = e => e.startsWith("onUpdate:"),
  ft = Object.assign,
  er = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
  },
  Ym = Object.prototype.hasOwnProperty,
  We = (e, t) => Ym.call(e, t),
  xe = Array.isArray,
  ti = e => aa(e) === "[object Map]",
  vd = e => aa(e) === "[object Set]",
  Ee = e => typeof e == "function",
  tt = e => typeof e == "string",
  fo = e => typeof e == "symbol",
  Je = e => e !== null && typeof e == "object",
  yd = e => (Je(e) || Ee(e)) && Ee(e.then) && Ee(e.catch),
  pd = Object.prototype.toString,
  aa = e => pd.call(e),
  qm = e => aa(e).slice(8, -1),
  bd = e => aa(e) === "[object Object]",
  tr = e => tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Di = Xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  la = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
  },
  Gm = /-(\w)/g,
  Qt = la(e => e.replace(Gm, (t, n) => n ? n.toUpperCase() : "")),
  Zm = /\B([A-Z])/g,
  zn = la(e => e.replace(Zm, "-$1").toLowerCase()),
  ra = la(e => e.charAt(0).toUpperCase() + e.slice(1)),
  Da = la(e => e ? `on${ra(e)}` : ""),
  ro = (e, t) => !Object.is(e, t),
  $a = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  wd = (e, t, n, o = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: o,
      value: n
    })
  },
  Xm = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
  },
  Jm = e => {
    const t = tt(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
  };
let ec;
const Cd = () => ec || (ec = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function an(e) {
  if (xe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        s = tt(o) ? og(o) : an(o);
      if (s)
        for (const a in s) t[a] = s[a]
    }
    return t
  } else if (tt(e) || Je(e)) return e
}
const eg = /;(?![^(]*\))/g,
  tg = /:([^]+)/,
  ng = /\/\*[^]*?\*\//g;

function og(e) {
  const t = {};
  return e.replace(ng, "").split(eg).forEach(n => {
    if (n) {
      const o = n.split(tg);
      o.length > 1 && (t[o[0].trim()] = o[1].trim())
    }
  }), t
}

function ig(e) {
  let t = "";
  if (!e || tt(e)) return t;
  for (const n in e) {
    const o = e[n];
    if (tt(o) || typeof o == "number") {
      const s = n.startsWith("--") ? n : zn(n);
      t += `${s}:${o};`
    }
  }
  return t
}

function ot(e) {
  let t = "";
  if (tt(e)) t = e;
  else if (xe(e))
    for (let n = 0; n < e.length; n++) {
      const o = ot(e[n]);
      o && (t += o + " ")
    } else if (Je(e))
      for (const n in e) e[n] && (t += n + " ");
  return t.trim()
}
const sg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ag = Xl(sg);

function _d(e) {
  return !!e || e === ""
}
const kd = e => !!(e && e.__v_isRef === !0),
  $ = e => tt(e) ? e : e == null ? "" : xe(e) || Je(e) && (e.toString === pd || !Ee(e.toString)) ? kd(e) ? $(e.value) : JSON.stringify(e, Sd, 2) : String(e),
  Sd = (e, t) => kd(t) ? Sd(e, t.value) : ti(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, s], a) => (n[Ma(o, a) + " =>"] = s, n), {})
  } : vd(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => Ma(n))
  } : fo(t) ? Ma(t) : Je(t) && !xe(t) && !bd(t) ? String(t) : t,
  Ma = (e, t = "") => {
    var n;
    return fo(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
  };
/**
 * @vue/reactivity v3.5.11
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Pt;
class Td {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Pt, !t && Pt && (this.index = (Pt.scopes || (Pt.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = Pt;
      try {
        return Pt = this, t()
      } finally {
        Pt = n
      }
    }
  }
  on() {
    Pt = this
  }
  off() {
    Pt = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
      }
      this.parent = void 0, this._active = !1
    }
  }
}

function xd(e) {
  return new Td(e)
}

function Ad() {
  return Pt
}

function lg(e, t = !1) {
  Pt && Pt.cleanups.push(e)
}
let qe;
const La = new WeakSet;
class Ed {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Pt && Pt.active && Pt.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, La.has(this) && (La.delete(this), this.trigger()))
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Pd(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, tc(this), Od(this);
    const t = qe,
      n = Jt;
    qe = this, Jt = !0;
    try {
      return this.fn()
    } finally {
      Bd(this), qe = t, Jt = n, this.flags &= -3
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) ir(t);
      this.deps = this.depsTail = void 0, tc(this), this.onStop && this.onStop(), this.flags &= -2
    }
  }
  trigger() {
    this.flags & 64 ? La.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    wl(this) && this.run()
  }
  get dirty() {
    return wl(this)
  }
}
let Id = 0,
  $i, Mi;

function Pd(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mi, Mi = e;
    return
  }
  e.next = $i, $i = e
}

function nr() {
  Id++
}

function or() {
  if (--Id > 0) return;
  if (Mi) {
    let t = Mi;
    for (Mi = void 0; t;) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n
    }
  }
  let e;
  for (; $i;) {
    let t = $i;
    for ($i = void 0; t;) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
        t.trigger()
      } catch (o) {
        e || (e = o)
      }
      t = n
    }
  }
  if (e) throw e
}

function Od(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function Bd(e) {
  let t, n = e.depsTail,
    o = n;
  for (; o;) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), ir(o), rg(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s
  }
  e.deps = t, e.depsTail = n
}

function wl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Rd(t.dep.computed) || t.dep.version !== t.version)) return !0;
  return !!e._dirty
}

function Rd(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ki)) return;
  e.globalVersion = Ki;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !wl(e)) {
    e.flags &= -3;
    return
  }
  const n = qe,
    o = Jt;
  qe = e, Jt = !0;
  try {
    Od(e);
    const s = e.fn(e._value);
    (t.version === 0 || ro(s, e._value)) && (e._value = s, t.version++)
  } catch (s) {
    throw t.version++, s
  } finally {
    qe = n, Jt = o, Bd(e), e.flags &= -3
  }
}

function ir(e, t = !1) {
  const {
    dep: n,
    prevSub: o,
    nextSub: s
  } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), n.subs === e && (n.subs = o), !n.subs && n.computed) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep) ir(a, !0)
  }!t && !--n.sc && n.map && n.map.delete(n.key)
}

function rg(e) {
  const {
    prevDep: t,
    nextDep: n
  } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}
let Jt = !0;
const Dd = [];

function ho() {
  Dd.push(Jt), Jt = !1
}

function mo() {
  const e = Dd.pop();
  Jt = e === void 0 ? !0 : e
}

function tc(e) {
  const {
    cleanup: t
  } = e;
  if (e.cleanup = void 0, t) {
    const n = qe;
    qe = void 0;
    try {
      t()
    } finally {
      qe = n
    }
  }
}
let Ki = 0;
class cg {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
  }
}
class sr {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0
  }
  track(t) {
    if (!qe || !Jt || qe === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== qe) n = this.activeLink = new cg(qe, this), qe.deps ? (n.prevDep = qe.depsTail, qe.depsTail.nextDep = n, qe.depsTail = n) : qe.deps = qe.depsTail = n, $d(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = qe.depsTail, n.nextDep = void 0, qe.depsTail.nextDep = n, qe.depsTail = n, qe.deps === n && (qe.deps = o)
    }
    return n
  }
  trigger(t) {
    this.version++, Ki++, this.notify(t)
  }
  notify(t) {
    nr();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      or()
    }
  }
}

function $d(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep) $d(o)
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
  }
}
const Ws = new WeakMap,
  Io = Symbol(""),
  Cl = Symbol(""),
  Yi = Symbol("");

function kt(e, t, n) {
  if (Jt && qe) {
    let o = Ws.get(e);
    o || Ws.set(e, o = new Map);
    let s = o.get(n);
    s || (o.set(n, s = new sr), s.map = o, s.key = n), s.track()
  }
}

function Rn(e, t, n, o, s, a) {
  const l = Ws.get(e);
  if (!l) {
    Ki++;
    return
  }
  const r = c => {
    c && c.trigger()
  };
  if (nr(), t === "clear") l.forEach(r);
  else {
    const c = xe(e),
      u = c && tr(n);
    if (c && n === "length") {
      const d = Number(o);
      l.forEach((f, m) => {
        (m === "length" || m === Yi || !fo(m) && m >= d) && r(f)
      })
    } else switch (n !== void 0 && r(l.get(n)), u && r(l.get(Yi)), t) {
      case "add":
        c ? u && r(l.get("length")) : (r(l.get(Io)), ti(e) && r(l.get(Cl)));
        break;
      case "delete":
        c || (r(l.get(Io)), ti(e) && r(l.get(Cl)));
        break;
      case "set":
        ti(e) && r(l.get(Io));
        break
    }
  }
  or()
}

function ug(e, t) {
  const n = Ws.get(e);
  return n && n.get(t)
}

function No(e) {
  const t = He(e);
  return t === e ? t : (kt(t, "iterate", Yi), Wt(e) ? t : t.map(Ct))
}

function ca(e) {
  return kt(e = He(e), "iterate", Yi), e
}
const dg = {
  __proto__: null,
  [Symbol.iterator]() {
    return Na(this, Symbol.iterator, Ct)
  },
  concat(...e) {
    return No(this).concat(...e.map(t => xe(t) ? No(t) : t))
  },
  entries() {
    return Na(this, "entries", e => (e[1] = Ct(e[1]), e))
  },
  every(e, t) {
    return Sn(this, "every", e, t, void 0, arguments)
  },
  filter(e, t) {
    return Sn(this, "filter", e, t, n => n.map(Ct), arguments)
  },
  find(e, t) {
    return Sn(this, "find", e, t, Ct, arguments)
  },
  findIndex(e, t) {
    return Sn(this, "findIndex", e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Sn(this, "findLast", e, t, Ct, arguments)
  },
  findLastIndex(e, t) {
    return Sn(this, "findLastIndex", e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Sn(this, "forEach", e, t, void 0, arguments)
  },
  includes(...e) {
    return Fa(this, "includes", e)
  },
  indexOf(...e) {
    return Fa(this, "indexOf", e)
  },
  join(e) {
    return No(this).join(e)
  },
  lastIndexOf(...e) {
    return Fa(this, "lastIndexOf", e)
  },
  map(e, t) {
    return Sn(this, "map", e, t, void 0, arguments)
  },
  pop() {
    return _i(this, "pop")
  },
  push(...e) {
    return _i(this, "push", e)
  },
  reduce(e, ...t) {
    return nc(this, "reduce", e, t)
  },
  reduceRight(e, ...t) {
    return nc(this, "reduceRight", e, t)
  },
  shift() {
    return _i(this, "shift")
  },
  some(e, t) {
    return Sn(this, "some", e, t, void 0, arguments)
  },
  splice(...e) {
    return _i(this, "splice", e)
  },
  toReversed() {
    return No(this).toReversed()
  },
  toSorted(e) {
    return No(this).toSorted(e)
  },
  toSpliced(...e) {
    return No(this).toSpliced(...e)
  },
  unshift(...e) {
    return _i(this, "unshift", e)
  },
  values() {
    return Na(this, "values", Ct)
  }
};

function Na(e, t, n) {
  const o = ca(e),
    s = o[t]();
  return o !== e && !Wt(e) && (s._next = s.next, s.next = () => {
    const a = s._next();
    return a.value && (a.value = n(a.value)), a
  }), s
}
const fg = Array.prototype;

function Sn(e, t, n, o, s, a) {
  const l = ca(e),
    r = l !== e && !Wt(e),
    c = l[t];
  if (c !== fg[t]) {
    const f = c.apply(e, a);
    return r ? Ct(f) : f
  }
  let u = n;
  l !== e && (r ? u = function(f, m) {
    return n.call(this, Ct(f), m, e)
  } : n.length > 2 && (u = function(f, m) {
    return n.call(this, f, m, e)
  }));
  const d = c.call(l, u, o);
  return r && s ? s(d) : d
}

function nc(e, t, n, o) {
  const s = ca(e);
  let a = n;
  return s !== e && (Wt(e) ? n.length > 3 && (a = function(l, r, c) {
    return n.call(this, l, r, c, e)
  }) : a = function(l, r, c) {
    return n.call(this, l, Ct(r), c, e)
  }), s[t](a, ...o)
}

function Fa(e, t, n) {
  const o = He(e);
  kt(o, "iterate", Yi);
  const s = o[t](...n);
  return (s === -1 || s === !1) && cr(n[0]) ? (n[0] = He(n[0]), o[t](...n)) : s
}

function _i(e, t, n = []) {
  ho(), nr();
  const o = He(e)[t].apply(e, n);
  return or(), mo(), o
}
const hg = Xl("__proto__,__v_isRef,__isVue"),
  Md = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(fo));

function mg(e) {
  fo(e) || (e = String(e));
  const t = He(this);
  return kt(t, "has", e), t.hasOwnProperty(e)
}
class Ld {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n
  }
  get(t, n, o) {
    const s = this._isReadonly,
      a = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return a;
    if (n === "__v_raw") return o === (s ? a ? Ag : Vd : a ? zd : Fd).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const l = xe(t);
    if (!s) {
      let c;
      if (l && (c = dg[n])) return c;
      if (n === "hasOwnProperty") return mg
    }
    const r = Reflect.get(t, n, it(t) ? t : o);
    return (fo(n) ? Md.has(n) : hg(n)) || (s || kt(t, "get", n), a) ? r : it(r) ? l && tr(n) ? r : r.value : Je(r) ? s ? Ud(r) : Ze(r) : r
  }
}
class Nd extends Ld {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, o, s) {
    let a = t[n];
    if (!this._isShallow) {
      const c = Ro(a);
      if (!Wt(o) && !Ro(o) && (a = He(a), o = He(o)), !xe(t) && it(a) && !it(o)) return c ? !1 : (a.value = o, !0)
    }
    const l = xe(t) && tr(n) ? Number(n) < t.length : We(t, n),
      r = Reflect.set(t, n, o, it(t) ? t : s);
    return t === He(s) && (l ? ro(o, a) && Rn(t, "set", n, o) : Rn(t, "add", n, o)), r
  }
  deleteProperty(t, n) {
    const o = We(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && o && Rn(t, "delete", n, void 0), s
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!fo(n) || !Md.has(n)) && kt(t, "has", n), o
  }
  ownKeys(t) {
    return kt(t, "iterate", xe(t) ? "length" : Io), Reflect.ownKeys(t)
  }
}
class gg extends Ld {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const vg = new Nd,
  yg = new gg,
  pg = new Nd(!0);
const ar = e => e,
  ua = e => Reflect.getPrototypeOf(e);

function rs(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = He(e),
    a = He(t);
  n || (ro(t, a) && kt(s, "get", t), kt(s, "get", a));
  const {
    has: l
  } = ua(s), r = o ? ar : n ? dr : Ct;
  if (l.call(s, t)) return r(e.get(t));
  if (l.call(s, a)) return r(e.get(a));
  e !== s && e.get(t)
}

function cs(e, t = !1) {
  const n = this.__v_raw,
    o = He(n),
    s = He(e);
  return t || (ro(e, s) && kt(o, "has", e), kt(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s)
}

function us(e, t = !1) {
  return e = e.__v_raw, !t && kt(He(e), "iterate", Io), Reflect.get(e, "size", e)
}

function oc(e, t = !1) {
  !t && !Wt(e) && !Ro(e) && (e = He(e));
  const n = He(this);
  return ua(n).has.call(n, e) || (n.add(e), Rn(n, "add", e, e)), this
}

function ic(e, t, n = !1) {
  !n && !Wt(t) && !Ro(t) && (t = He(t));
  const o = He(this),
    {
      has: s,
      get: a
    } = ua(o);
  let l = s.call(o, e);
  l || (e = He(e), l = s.call(o, e));
  const r = a.call(o, e);
  return o.set(e, t), l ? ro(t, r) && Rn(o, "set", e, t) : Rn(o, "add", e, t), this
}

function sc(e) {
  const t = He(this),
    {
      has: n,
      get: o
    } = ua(t);
  let s = n.call(t, e);
  s || (e = He(e), s = n.call(t, e)), o && o.call(t, e);
  const a = t.delete(e);
  return s && Rn(t, "delete", e, void 0), a
}

function ac() {
  const e = He(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Rn(e, "clear", void 0, void 0), n
}

function ds(e, t) {
  return function(o, s) {
    const a = this,
      l = a.__v_raw,
      r = He(l),
      c = t ? ar : e ? dr : Ct;
    return !e && kt(r, "iterate", Io), l.forEach((u, d) => o.call(s, c(u), c(d), a))
  }
}

function fs(e, t, n) {
  return function(...o) {
    const s = this.__v_raw,
      a = He(s),
      l = ti(a),
      r = e === "entries" || e === Symbol.iterator && l,
      c = e === "keys" && l,
      u = s[e](...o),
      d = n ? ar : t ? dr : Ct;
    return !t && kt(a, "iterate", c ? Cl : Io), {
      next() {
        const {
          value: f,
          done: m
        } = u.next();
        return m ? {
          value: f,
          done: m
        } : {
          value: r ? [d(f[0]), d(f[1])] : d(f),
          done: m
        }
      },
      [Symbol.iterator]() {
        return this
      }
    }
  }
}

function jn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}

function bg() {
  const e = {
      get(a) {
        return rs(this, a)
      },
      get size() {
        return us(this)
      },
      has: cs,
      add: oc,
      set: ic,
      delete: sc,
      clear: ac,
      forEach: ds(!1, !1)
    },
    t = {
      get(a) {
        return rs(this, a, !1, !0)
      },
      get size() {
        return us(this)
      },
      has: cs,
      add(a) {
        return oc.call(this, a, !0)
      },
      set(a, l) {
        return ic.call(this, a, l, !0)
      },
      delete: sc,
      clear: ac,
      forEach: ds(!1, !0)
    },
    n = {
      get(a) {
        return rs(this, a, !0)
      },
      get size() {
        return us(this, !0)
      },
      has(a) {
        return cs.call(this, a, !0)
      },
      add: jn("add"),
      set: jn("set"),
      delete: jn("delete"),
      clear: jn("clear"),
      forEach: ds(!0, !1)
    },
    o = {
      get(a) {
        return rs(this, a, !0, !0)
      },
      get size() {
        return us(this, !0)
      },
      has(a) {
        return cs.call(this, a, !0)
      },
      add: jn("add"),
      set: jn("set"),
      delete: jn("delete"),
      clear: jn("clear"),
      forEach: ds(!0, !0)
    };
  return ["keys", "values", "entries", Symbol.iterator].forEach(a => {
    e[a] = fs(a, !1, !1), n[a] = fs(a, !0, !1), t[a] = fs(a, !1, !0), o[a] = fs(a, !0, !0)
  }), [e, n, t, o]
}
const [wg, Cg, _g, kg] = bg();

function lr(e, t) {
  const n = t ? e ? kg : _g : e ? Cg : wg;
  return (o, s, a) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(We(n, s) && s in o ? n : o, s, a)
}
const Sg = {
    get: lr(!1, !1)
  },
  Tg = {
    get: lr(!1, !0)
  },
  xg = {
    get: lr(!0, !1)
  };
const Fd = new WeakMap,
  zd = new WeakMap,
  Vd = new WeakMap,
  Ag = new WeakMap;

function Eg(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0
  }
}

function Ig(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Eg(qm(e))
}

function Ze(e) {
  return Ro(e) ? e : rr(e, !1, vg, Sg, Fd)
}

function Hd(e) {
  return rr(e, !1, pg, Tg, zd)
}

function Ud(e) {
  return rr(e, !0, yg, xg, Vd)
}

function rr(e, t, n, o, s) {
  if (!Je(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const a = s.get(e);
  if (a) return a;
  const l = Ig(e);
  if (l === 0) return e;
  const r = new Proxy(e, l === 2 ? o : n);
  return s.set(e, r), r
}

function lo(e) {
  return Ro(e) ? lo(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Ro(e) {
  return !!(e && e.__v_isReadonly)
}

function Wt(e) {
  return !!(e && e.__v_isShallow)
}

function cr(e) {
  return e ? !!e.__v_raw : !1
}

function He(e) {
  const t = e && e.__v_raw;
  return t ? He(t) : e
}

function ur(e) {
  return !We(e, "__v_skip") && Object.isExtensible(e) && wd(e, "__v_skip", !0), e
}
const Ct = e => Je(e) ? Ze(e) : e,
  dr = e => Je(e) ? Ud(e) : e;

function it(e) {
  return e ? e.__v_isRef === !0 : !1
}

function F(e) {
  return Wd(e, !1)
}

function Pg(e) {
  return Wd(e, !0)
}

function Wd(e, t) {
  return it(e) ? e : new Og(e, t)
}
class Og {
  constructor(t, n) {
    this.dep = new sr, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : He(t), this._value = n ? t : Ct(t), this.__v_isShallow = n
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      o = this.__v_isShallow || Wt(t) || Ro(t);
    t = o ? t : He(t), ro(t, n) && (this._rawValue = t, this._value = o ? t : Ct(t), this.dep.trigger())
  }
}

function en(e) {
  return it(e) ? e.value : e
}
const Bg = {
  get: (e, t, n) => t === "__v_raw" ? e : en(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return it(s) && !it(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o)
  }
};

function jd(e) {
  return lo(e) ? e : new Proxy(e, Bg)
}

function Rg(e) {
  const t = xe(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = $g(e, n);
  return t
}
class Dg {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0, this._value = void 0
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return ug(He(this._object), this._key)
  }
}

function $g(e, t, n) {
  const o = e[t];
  return it(o) ? o : new Dg(e, t, n)
}
class Mg {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new sr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ki - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && qe !== this) return Pd(this, !0), !0
  }
  get value() {
    const t = this.dep.track();
    return Rd(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}

function Lg(e, t, n = !1) {
  let o, s;
  return Ee(e) ? o = e : (o = e.get, s = e.set), new Mg(o, s, n)
}
const hs = {},
  js = new WeakMap;
let xo;

function Ng(e, t = !1, n = xo) {
  if (n) {
    let o = js.get(n);
    o || js.set(n, o = []), o.push(e)
  }
}

function Fg(e, t, n = Ke) {
  const {
    immediate: o,
    deep: s,
    once: a,
    scheduler: l,
    augmentJob: r,
    call: c
  } = n, u = _ => s ? _ : Wt(_) || s === !1 || s === 0 ? On(_, 1) : On(_);
  let d, f, m, g, p = !1,
    y = !1;
  if (it(e) ? (f = () => e.value, p = Wt(e)) : lo(e) ? (f = () => u(e), p = !0) : xe(e) ? (y = !0, p = e.some(_ => lo(_) || Wt(_)), f = () => e.map(_ => {
      if (it(_)) return _.value;
      if (lo(_)) return u(_);
      if (Ee(_)) return c ? c(_, 2) : _()
    })) : Ee(e) ? t ? f = c ? () => c(e, 2) : e : f = () => {
      if (m) {
        ho();
        try {
          m()
        } finally {
          mo()
        }
      }
      const _ = xo;
      xo = d;
      try {
        return c ? c(e, 3, [g]) : e(g)
      } finally {
        xo = _
      }
    } : f = bn, t && s) {
    const _ = f,
      k = s === !0 ? 1 / 0 : s;
    f = () => On(_(), k)
  }
  const b = Ad(),
    w = () => {
      d.stop(), b && er(b.effects, d)
    };
  if (a && t) {
    const _ = t;
    t = (...k) => {
      _(...k), w()
    }
  }
  let v = y ? new Array(e.length).fill(hs) : hs;
  const C = _ => {
    if (!(!(d.flags & 1) || !d.dirty && !_))
      if (t) {
        const k = d.run();
        if (s || p || (y ? k.some((I, D) => ro(I, v[D])) : ro(k, v))) {
          m && m();
          const I = xo;
          xo = d;
          try {
            const D = [k, v === hs ? void 0 : y && v[0] === hs ? [] : v, g];
            c ? c(t, 3, D) : t(...D), v = k
          } finally {
            xo = I
          }
        }
      } else d.run()
  };
  return r && r(C), d = new Ed(f), d.scheduler = l ? () => l(C, !1) : C, g = _ => Ng(_, !1, d), m = d.onStop = () => {
    const _ = js.get(d);
    if (_) {
      if (c) c(_, 4);
      else
        for (const k of _) k();
      js.delete(d)
    }
  }, t ? o ? C(!0) : v = d.run() : l ? l(C.bind(null, !0), !0) : d.run(), w.pause = d.pause.bind(d), w.resume = d.resume.bind(d), w.stop = w, w
}

function On(e, t = 1 / 0, n) {
  if (t <= 0 || !Je(e) || e.__v_skip || (n = n || new Set, n.has(e))) return e;
  if (n.add(e), t--, it(e)) On(e.value, t, n);
  else if (xe(e))
    for (let o = 0; o < e.length; o++) On(e[o], t, n);
  else if (vd(e) || ti(e)) e.forEach(o => {
    On(o, t, n)
  });
  else if (bd(e)) {
    for (const o in e) On(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, o) && On(e[o], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.11
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function is(e, t, n, o) {
  try {
    return o ? e(...o) : e()
  } catch (s) {
    da(s, t, n)
  }
}

function on(e, t, n, o) {
  if (Ee(e)) {
    const s = is(e, t, n, o);
    return s && yd(s) && s.catch(a => {
      da(a, t, n)
    }), s
  }
  if (xe(e)) {
    const s = [];
    for (let a = 0; a < e.length; a++) s.push(on(e[a], t, n, o));
    return s
  }
}

function da(e, t, n, o = !0) {
  const s = t ? t.vnode : null,
    {
      errorHandler: a,
      throwUnhandledErrorInProduction: l
    } = t && t.appContext.config || Ke;
  if (t) {
    let r = t.parent;
    const c = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r;) {
      const d = r.ec;
      if (d) {
        for (let f = 0; f < d.length; f++)
          if (d[f](e, c, u) === !1) return
      }
      r = r.parent
    }
    if (a) {
      ho(), is(a, null, 10, [e, c, u]), mo();
      return
    }
  }
  zg(e, n, s, o, l)
}

function zg(e, t, n, o = !0, s = !1) {
  if (s) throw e;
  console.error(e)
}
const Ot = [];
let vn = -1;
const ni = [];
let to = null,
  Xo = 0;
const Qd = Promise.resolve();
let Qs = null;

function Oe(e) {
  const t = Qs || Qd;
  return e ? t.then(this ? e.bind(this) : e) : t
}

function Vg(e) {
  let t = vn + 1,
    n = Ot.length;
  for (; t < n;) {
    const o = t + n >>> 1,
      s = Ot[o],
      a = qi(s);
    a < e || a === e && s.flags & 2 ? t = o + 1 : n = o
  }
  return t
}

function fr(e) {
  if (!(e.flags & 1)) {
    const t = qi(e),
      n = Ot[Ot.length - 1];
    !n || !(e.flags & 2) && t >= qi(n) ? Ot.push(e) : Ot.splice(Vg(t), 0, e), e.flags |= 1, Kd()
  }
}

function Kd() {
  Qs || (Qs = Qd.then(qd))
}

function Hg(e) {
  xe(e) ? ni.push(...e) : to && e.id === -1 ? to.splice(Xo + 1, 0, e) : e.flags & 1 || (ni.push(e), e.flags |= 1), Kd()
}

function lc(e, t, n = vn + 1) {
  for (; n < Ot.length; n++) {
    const o = Ot[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid) continue;
      Ot.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2)
    }
  }
}

function Yd(e) {
  if (ni.length) {
    const t = [...new Set(ni)].sort((n, o) => qi(n) - qi(o));
    if (ni.length = 0, to) {
      to.push(...t);
      return
    }
    for (to = t, Xo = 0; Xo < to.length; Xo++) {
      const n = to[Xo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
    }
    to = null, Xo = 0
  }
}
const qi = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function qd(e) {
  try {
    for (vn = 0; vn < Ot.length; vn++) {
      const t = Ot[vn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), is(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; vn < Ot.length; vn++) {
      const t = Ot[vn];
      t && (t.flags &= -2)
    }
    vn = -1, Ot.length = 0, Yd(), Qs = null, (Ot.length || ni.length) && qd()
  }
}
let ut = null,
  Gd = null;

function Ks(e) {
  const t = ut;
  return ut = e, Gd = e && e.type.__scopeId || null, t
}

function ae(e, t = ut, n) {
  if (!t || e._n) return e;
  const o = (...s) => {
    o._d && bc(-1);
    const a = Ks(t);
    let l;
    try {
      l = e(...s)
    } finally {
      Ks(a), o._d && bc(1)
    }
    return l
  };
  return o._n = !0, o._c = !0, o._d = !0, o
}

function rt(e, t) {
  if (ut === null) return e;
  const n = va(ut),
    o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [a, l, r, c = Ke] = t[s];
    a && (Ee(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && On(l), o.push({
      dir: a,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: r,
      modifiers: c
    }))
  }
  return e
}

function wo(e, t, n, o) {
  const s = e.dirs,
    a = t && t.dirs;
  for (let l = 0; l < s.length; l++) {
    const r = s[l];
    a && (r.oldValue = a[l].value);
    let c = r.dir[o];
    c && (ho(), on(c, n, 8, [e.el, r, e, t]), mo())
  }
}
const Zd = Symbol("_vte"),
  Xd = e => e.__isTeleport,
  Li = e => e && (e.disabled || e.disabled === ""),
  Ug = e => e && (e.defer || e.defer === ""),
  rc = e => typeof SVGElement < "u" && e instanceof SVGElement,
  cc = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
  _l = (e, t) => {
    const n = e && e.to;
    return tt(n) ? t ? t(n) : null : n
  },
  Wg = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, o, s, a, l, r, c, u) {
      const {
        mc: d,
        pc: f,
        pbc: m,
        o: {
          insert: g,
          querySelector: p,
          createText: y,
          createComment: b
        }
      } = u, w = Li(t.props);
      let {
        shapeFlag: v,
        children: C,
        dynamicChildren: _
      } = t;
      if (e == null) {
        const k = t.el = y(""),
          I = t.anchor = y("");
        g(k, n, o), g(I, n, o);
        const D = (B, R) => {
            v & 16 && (s && s.isCE && (s.ce._teleportTarget = B), d(C, B, R, s, a, l, r, c))
          },
          S = () => {
            const B = t.target = _l(t.props, p),
              R = Jd(B, t, y, g);
            B && (l !== "svg" && rc(B) ? l = "svg" : l !== "mathml" && cc(B) && (l = "mathml"), w || (D(B, R), Ms(t)))
          };
        w && (D(n, I), Ms(t)), Ug(t.props) ? Rt(S, a) : S()
      } else {
        t.el = e.el, t.targetStart = e.targetStart;
        const k = t.anchor = e.anchor,
          I = t.target = e.target,
          D = t.targetAnchor = e.targetAnchor,
          S = Li(e.props),
          B = S ? n : I,
          R = S ? k : D;
        if (l === "svg" || rc(I) ? l = "svg" : (l === "mathml" || cc(I)) && (l = "mathml"), _ ? (m(e.dynamicChildren, _, B, s, a, l, r), gr(e, t, !0)) : c || f(e, t, B, R, s, a, l, r, !1), w) S ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ms(t, n, k, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const x = t.target = _l(t.props, p);
          x && ms(t, x, null, u, 0)
        } else S && ms(t, I, D, u, 1);
        Ms(t)
      }
    },
    remove(e, t, n, {
      um: o,
      o: {
        remove: s
      }
    }, a) {
      const {
        shapeFlag: l,
        children: r,
        anchor: c,
        targetStart: u,
        targetAnchor: d,
        target: f,
        props: m
      } = e;
      if (f && (s(u), s(d)), a && s(c), l & 16) {
        const g = a || !Li(m);
        for (let p = 0; p < r.length; p++) {
          const y = r[p];
          o(y, t, n, g, !!y.dynamicChildren)
        }
      }
    },
    move: ms,
    hydrate: jg
  };

function ms(e, t, n, {
  o: {
    insert: o
  },
  m: s
}, a = 2) {
  a === 0 && o(e.targetAnchor, t, n);
  const {
    el: l,
    anchor: r,
    shapeFlag: c,
    children: u,
    props: d
  } = e, f = a === 2;
  if (f && o(l, t, n), (!f || Li(d)) && c & 16)
    for (let m = 0; m < u.length; m++) s(u[m], t, n, 2);
  f && o(r, t, n)
}

function jg(e, t, n, o, s, a, {
  o: {
    nextSibling: l,
    parentNode: r,
    querySelector: c,
    insert: u,
    createText: d
  }
}, f) {
  const m = t.target = _l(t.props, c);
  if (m) {
    const g = m._lpa || m.firstChild;
    if (t.shapeFlag & 16)
      if (Li(t.props)) t.anchor = f(l(e), t, r(e), n, o, s, a), t.targetStart = g, t.targetAnchor = g && l(g);
      else {
        t.anchor = l(e);
        let p = g;
        for (; p;) {
          if (p && p.nodeType === 8) {
            if (p.data === "teleport start anchor") t.targetStart = p;
            else if (p.data === "teleport anchor") {
              t.targetAnchor = p, m._lpa = t.targetAnchor && l(t.targetAnchor);
              break
            }
          }
          p = l(p)
        }
        t.targetAnchor || Jd(m, t, d, u), f(g && l(g), t, m, n, o, s, a)
      } Ms(t)
  }
  return t.anchor && l(t.anchor)
}
const $o = Wg;

function Ms(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.targetStart;
    for (; n && n !== e.targetAnchor;) n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut()
  }
}

function Jd(e, t, n, o) {
  const s = t.targetStart = n(""),
    a = t.targetAnchor = n("");
  return s[Zd] = a, e && (o(s, e), o(a, e)), a
}
const no = Symbol("_leaveCb"),
  gs = Symbol("_enterCb");

function Qg() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map
  };
  return at(() => {
    e.isMounted = !0
  }), kn(() => {
    e.isUnmounting = !0
  }), e
}
const Vt = [Function, Array],
  ef = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Vt,
    onEnter: Vt,
    onAfterEnter: Vt,
    onEnterCancelled: Vt,
    onBeforeLeave: Vt,
    onLeave: Vt,
    onAfterLeave: Vt,
    onLeaveCancelled: Vt,
    onBeforeAppear: Vt,
    onAppear: Vt,
    onAfterAppear: Vt,
    onAppearCancelled: Vt
  },
  tf = e => {
    const t = e.subTree;
    return t.component ? tf(t.component) : t
  },
  Kg = {
    name: "BaseTransition",
    props: ef,
    setup(e, {
      slots: t
    }) {
      const n = ln(),
        o = Qg();
      return () => {
        const s = t.default && sf(t.default(), !0);
        if (!s || !s.length) return;
        const a = nf(s),
          l = He(e),
          {
            mode: r
          } = l;
        if (o.isLeaving) return za(a);
        const c = uc(a);
        if (!c) return za(a);
        let u = kl(c, l, o, n, m => u = m);
        c.type !== yt && Gi(c, u);
        const d = n.subTree,
          f = d && uc(d);
        if (f && f.type !== yt && !Ao(c, f) && tf(n).type !== yt) {
          const m = kl(f, l, o, n);
          if (Gi(f, m), r === "out-in" && c.type !== yt) return o.isLeaving = !0, m.afterLeave = () => {
            o.isLeaving = !1, n.job.flags & 8 || n.update(), delete m.afterLeave
          }, za(a);
          r === "in-out" && c.type !== yt && (m.delayLeave = (g, p, y) => {
            const b = of(o, f);
            b[String(f.key)] = f, g[no] = () => {
              p(), g[no] = void 0, delete u.delayedLeave
            }, u.delayedLeave = y
          })
        }
        return a
      }
    }
  };

function nf(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== yt) {
        t = n;
        break
      }
  }
  return t
}
const Yg = Kg;

function of(e, t) {
  const {
    leavingVNodes: n
  } = e;
  let o = n.get(t.type);
  return o || (o = Object.create(null), n.set(t.type, o)), o
}

function kl(e, t, n, o, s) {
  const {
    appear: a,
    mode: l,
    persisted: r = !1,
    onBeforeEnter: c,
    onEnter: u,
    onAfterEnter: d,
    onEnterCancelled: f,
    onBeforeLeave: m,
    onLeave: g,
    onAfterLeave: p,
    onLeaveCancelled: y,
    onBeforeAppear: b,
    onAppear: w,
    onAfterAppear: v,
    onAppearCancelled: C
  } = t, _ = String(e.key), k = of(n, e), I = (B, R) => {
    B && on(B, o, 9, R)
  }, D = (B, R) => {
    const x = R[1];
    I(B, R), xe(B) ? B.every(P => P.length <= 1) && x() : B.length <= 1 && x()
  }, S = {
    mode: l,
    persisted: r,
    beforeEnter(B) {
      let R = c;
      if (!n.isMounted)
        if (a) R = b || c;
        else return;
      B[no] && B[no](!0);
      const x = k[_];
      x && Ao(e, x) && x.el[no] && x.el[no](), I(R, [B])
    },
    enter(B) {
      let R = u,
        x = d,
        P = f;
      if (!n.isMounted)
        if (a) R = w || u, x = v || d, P = C || f;
        else return;
      let M = !1;
      const J = B[gs] = ce => {
        M || (M = !0, ce ? I(P, [B]) : I(x, [B]), S.delayedLeave && S.delayedLeave(), B[gs] = void 0)
      };
      R ? D(R, [B, J]) : J()
    },
    leave(B, R) {
      const x = String(e.key);
      if (B[gs] && B[gs](!0), n.isUnmounting) return R();
      I(m, [B]);
      let P = !1;
      const M = B[no] = J => {
        P || (P = !0, R(), J ? I(y, [B]) : I(p, [B]), B[no] = void 0, k[x] === e && delete k[x])
      };
      k[x] = e, g ? D(g, [B, M]) : M()
    },
    clone(B) {
      const R = kl(B, t, n, o, s);
      return s && s(R), R
    }
  };
  return S
}

function za(e) {
  if (fa(e)) return e = co(e), e.children = null, e
}

function uc(e) {
  if (!fa(e)) return Xd(e.type) && e.children ? nf(e.children) : e;
  const {
    shapeFlag: t,
    children: n
  } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Ee(n.default)) return n.default()
  }
}

function Gi(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Gi(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function sf(e, t = !1, n) {
  let o = [],
    s = 0;
  for (let a = 0; a < e.length; a++) {
    let l = e[a];
    const r = n == null ? l.key : String(n) + String(l.key != null ? l.key : a);
    l.type === Be ? (l.patchFlag & 128 && s++, o = o.concat(sf(l.children, t, r))) : (t || l.type !== yt) && o.push(r != null ? co(l, {
      key: r
    }) : l)
  }
  if (s > 1)
    for (let a = 0; a < o.length; a++) o[a].patchFlag = -2;
  return o
} /*! #__NO_SIDE_EFFECTS__ */
function K(e, t) {
  return Ee(e) ? ft({
    name: e.name
  }, t, {
    setup: e
  }) : e
}

function af(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function Sl(e, t, n, o, s = !1) {
  if (xe(e)) {
    e.forEach((p, y) => Sl(p, t && (xe(t) ? t[y] : t), n, o, s));
    return
  }
  if (oi(o) && !s) return;
  const a = o.shapeFlag & 4 ? va(o.component) : o.el,
    l = s ? null : a,
    {
      i: r,
      r: c
    } = e,
    u = t && t.r,
    d = r.refs === Ke ? r.refs = {} : r.refs,
    f = r.setupState,
    m = He(f),
    g = f === Ke ? () => !1 : p => We(m, p);
  if (u != null && u !== c && (tt(u) ? (d[u] = null, g(u) && (f[u] = null)) : it(u) && (u.value = null)), Ee(c)) is(c, r, 12, [l, d]);
  else {
    const p = tt(c),
      y = it(c);
    if (p || y) {
      const b = () => {
        if (e.f) {
          const w = p ? g(c) ? f[c] : d[c] : c.value;
          s ? xe(w) && er(w, a) : xe(w) ? w.includes(a) || w.push(a) : p ? (d[c] = [a], g(c) && (f[c] = d[c])) : (c.value = [a], e.k && (d[e.k] = c.value))
        } else p ? (d[c] = l, g(c) && (f[c] = l)) : y && (c.value = l, e.k && (d[e.k] = l))
      };
      l ? (b.id = -1, Rt(b, n)) : b()
    }
  }
}
const oi = e => !!e.type.__asyncLoader,
  fa = e => e.type.__isKeepAlive;

function Cn(e, t) {
  lf(e, "a", t)
}

function _n(e, t) {
  lf(e, "da", t)
}

function lf(e, t, n = mt) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s;) {
      if (s.isDeactivated) return;
      s = s.parent
    }
    return e()
  });
  if (ha(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent;) fa(s.parent.vnode) && qg(o, t, n, s), s = s.parent
  }
}

function qg(e, t, n, o) {
  const s = ha(t, e, o, !0);
  gi(() => {
    er(o[t], s)
  }, n)
}

function ha(e, t, n = mt, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      a = t.__weh || (t.__weh = (...l) => {
        ho();
        const r = as(n),
          c = on(t, n, e, l);
        return r(), mo(), c
      });
    return o ? s.unshift(a) : s.push(a), a
  }
}
const Vn = e => (t, n = mt) => {
    (!ga || e === "sp") && ha(e, (...o) => t(...o), n)
  },
  Gg = Vn("bm"),
  at = Vn("m"),
  rf = Vn("bu"),
  cf = Vn("u"),
  kn = Vn("bum"),
  gi = Vn("um"),
  Zg = Vn("sp"),
  Xg = Vn("rtg"),
  Jg = Vn("rtc");

function ev(e, t = mt) {
  ha("ec", e, t)
}
const uf = "components",
  tv = "directives";

function me(e, t) {
  return df(uf, e, !0, t) || e
}
const nv = Symbol.for("v-ndc");

function ov(e) {
  return df(tv, e)
}

function df(e, t, n = !0, o = !1) {
  const s = ut || mt;
  if (s) {
    const a = s.type;
    if (e === uf) {
      const r = Wv(a, !1);
      if (r && (r === t || r === Qt(t) || r === ra(Qt(t)))) return a
    }
    const l = dc(s[e] || a[e], t) || dc(s.appContext[e], t);
    return !l && o ? a : l
  }
}

function dc(e, t) {
  return e && (e[t] || e[Qt(t)] || e[ra(Qt(t))])
}

function Ft(e, t, n, o) {
  let s;
  const a = n,
    l = xe(e);
  if (l || tt(e)) {
    const r = l && lo(e);
    let c = !1;
    r && (c = !Wt(e), e = ca(e)), s = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++) s[u] = t(c ? Ct(e[u]) : e[u], u, void 0, a)
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let r = 0; r < e; r++) s[r] = t(r + 1, r, void 0, a)
  } else if (Je(e))
    if (e[Symbol.iterator]) s = Array.from(e, (r, c) => t(r, c, void 0, a));
    else {
      const r = Object.keys(e);
      s = new Array(r.length);
      for (let c = 0, u = r.length; c < u; c++) {
        const d = r[c];
        s[c] = t(e[d], d, c, a)
      }
    }
  else s = [];
  return s
}

function ff(e, t) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (xe(o))
      for (let s = 0; s < o.length; s++) e[o[s].name] = o[s].fn;
    else o && (e[o.name] = o.key ? (...s) => {
      const a = o.fn(...s);
      return a && (a.key = o.key), a
    } : o.fn)
  }
  return e
}

function Va(e, t, n = {}, o, s) {
  if (ut.ce || ut.parent && oi(ut.parent) && ut.parent.ce) return t !== "default" && (n.name = t), V(), Me(Be, null, [h("slot", n, o)], 64);
  let a = e[t];
  a && a._c && (a._d = !1), V();
  const l = a && hf(a(n)),
    r = Me(Be, {
      key: (n.key || l && l.key || `_${t}`) + (!l && o ? "_fb" : "")
    }, l || [], l && e._ === 1 ? 64 : -2);
  return a && a._c && (a._d = !0), r
}

function hf(e) {
  return e.some(t => ui(t) ? !(t.type === yt || t.type === Be && !hf(t.children)) : !0) ? e : null
}
const Tl = e => e ? Of(e) ? va(e) : Tl(e.parent) : null,
  Ni = ft(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Tl(e.parent),
    $root: e => Tl(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => hr(e),
    $forceUpdate: e => e.f || (e.f = () => {
      fr(e.update)
    }),
    $nextTick: e => e.n || (e.n = Oe.bind(e.proxy)),
    $watch: e => Tv.bind(e)
  }),
  Ha = (e, t) => e !== Ke && !e.__isScriptSetup && We(e, t),
  iv = {
    get({
      _: e
    }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: o,
        data: s,
        props: a,
        accessCache: l,
        type: r,
        appContext: c
      } = e;
      let u;
      if (t[0] !== "$") {
        const g = l[t];
        if (g !== void 0) switch (g) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return a[t]
        } else {
          if (Ha(o, t)) return l[t] = 1, o[t];
          if (s !== Ke && We(s, t)) return l[t] = 2, s[t];
          if ((u = e.propsOptions[0]) && We(u, t)) return l[t] = 3, a[t];
          if (n !== Ke && We(n, t)) return l[t] = 4, n[t];
          xl && (l[t] = 0)
        }
      }
      const d = Ni[t];
      let f, m;
      if (d) return t === "$attrs" && kt(e.attrs, "get", ""), d(e);
      if ((f = r.__cssModules) && (f = f[t])) return f;
      if (n !== Ke && We(n, t)) return l[t] = 4, n[t];
      if (m = c.config.globalProperties, We(m, t)) return m[t]
    },
    set({
      _: e
    }, t, n) {
      const {
        data: o,
        setupState: s,
        ctx: a
      } = e;
      return Ha(s, t) ? (s[t] = n, !0) : o !== Ke && We(o, t) ? (o[t] = n, !0) : We(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0)
    },
    has({
      _: {
        data: e,
        setupState: t,
        accessCache: n,
        ctx: o,
        appContext: s,
        propsOptions: a
      }
    }, l) {
      let r;
      return !!n[l] || e !== Ke && We(e, l) || Ha(t, l) || (r = a[0]) && We(r, l) || We(o, l) || We(Ni, l) || We(s.config.globalProperties, l)
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : We(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
  };

function fc(e) {
  return xe(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}
let xl = !0;

function sv(e) {
  const t = hr(e),
    n = e.proxy,
    o = e.ctx;
  xl = !1, t.beforeCreate && hc(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: a,
    methods: l,
    watch: r,
    provide: c,
    inject: u,
    created: d,
    beforeMount: f,
    mounted: m,
    beforeUpdate: g,
    updated: p,
    activated: y,
    deactivated: b,
    beforeDestroy: w,
    beforeUnmount: v,
    destroyed: C,
    unmounted: _,
    render: k,
    renderTracked: I,
    renderTriggered: D,
    errorCaptured: S,
    serverPrefetch: B,
    expose: R,
    inheritAttrs: x,
    components: P,
    directives: M,
    filters: J
  } = t;
  if (u && av(u, o, null), l)
    for (const ne in l) {
      const ue = l[ne];
      Ee(ue) && (o[ne] = ue.bind(n))
    }
  if (s) {
    const ne = s.call(n, n);
    Je(ne) && (e.data = Ze(ne))
  }
  if (xl = !0, a)
    for (const ne in a) {
      const ue = a[ne],
        Re = Ee(ue) ? ue.bind(n, n) : Ee(ue.get) ? ue.get.bind(n, n) : bn,
        Ne = !Ee(ue) && Ee(ue.set) ? ue.set.bind(n) : bn,
        z = N({
          get: Re,
          set: Ne
        });
      Object.defineProperty(o, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => z.value,
        set: X => z.value = X
      })
    }
  if (r)
    for (const ne in r) mf(r[ne], o, n, ne);
  if (c) {
    const ne = Ee(c) ? c.call(n) : c;
    Reflect.ownKeys(ne).forEach(ue => {
      Dn(ue, ne[ue])
    })
  }
  d && hc(d, e, "c");

  function W(ne, ue) {
    xe(ue) ? ue.forEach(Re => ne(Re.bind(n))) : ue && ne(ue.bind(n))
  }
  if (W(Gg, f), W(at, m), W(rf, g), W(cf, p), W(Cn, y), W(_n, b), W(ev, S), W(Jg, I), W(Xg, D), W(kn, v), W(gi, _), W(Zg, B), xe(R))
    if (R.length) {
      const ne = e.exposed || (e.exposed = {});
      R.forEach(ue => {
        Object.defineProperty(ne, ue, {
          get: () => n[ue],
          set: Re => n[ue] = Re
        })
      })
    } else e.exposed || (e.exposed = {});
  k && e.render === bn && (e.render = k), x != null && (e.inheritAttrs = x), P && (e.components = P), M && (e.directives = M), B && af(e)
}

function av(e, t, n = bn) {
  xe(e) && (e = Al(e));
  for (const o in e) {
    const s = e[o];
    let a;
    Je(s) ? "default" in s ? a = Bt(s.from || o, s.default, !0) : a = Bt(s.from || o) : a = Bt(s), it(a) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: l => a.value = l
    }) : t[o] = a
  }
}

function hc(e, t, n) {
  on(xe(e) ? e.map(o => o.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function mf(e, t, n, o) {
  let s = o.includes(".") ? xf(n, o) : () => n[o];
  if (tt(e)) {
    const a = t[e];
    Ee(a) && re(s, a)
  } else if (Ee(e)) re(s, e.bind(n));
  else if (Je(e))
    if (xe(e)) e.forEach(a => mf(a, t, n, o));
    else {
      const a = Ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ee(a) && re(s, a, e)
    }
}

function hr(e) {
  const t = e.type,
    {
      mixins: n,
      extends: o
    } = t,
    {
      mixins: s,
      optionsCache: a,
      config: {
        optionMergeStrategies: l
      }
    } = e.appContext,
    r = a.get(t);
  let c;
  return r ? c = r : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(u => Ys(c, u, l, !0)), Ys(c, t, l)), Je(t) && a.set(t, c), c
}

function Ys(e, t, n, o = !1) {
  const {
    mixins: s,
    extends: a
  } = t;
  a && Ys(e, a, n, !0), s && s.forEach(l => Ys(e, l, n, !0));
  for (const l in t)
    if (!(o && l === "expose")) {
      const r = lv[l] || n && n[l];
      e[l] = r ? r(e[l], t[l]) : t[l]
    } return e
}
const lv = {
  data: mc,
  props: gc,
  emits: gc,
  methods: Ri,
  computed: Ri,
  beforeCreate: It,
  created: It,
  beforeMount: It,
  mounted: It,
  beforeUpdate: It,
  updated: It,
  beforeDestroy: It,
  beforeUnmount: It,
  destroyed: It,
  unmounted: It,
  activated: It,
  deactivated: It,
  errorCaptured: It,
  serverPrefetch: It,
  components: Ri,
  directives: Ri,
  watch: cv,
  provide: mc,
  inject: rv
};

function mc(e, t) {
  return t ? e ? function() {
    return ft(Ee(e) ? e.call(this, this) : e, Ee(t) ? t.call(this, this) : t)
  } : t : e
}

function rv(e, t) {
  return Ri(Al(e), Al(t))
}

function Al(e) {
  if (xe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t
  }
  return e
}

function It(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}

function Ri(e, t) {
  return e ? ft(Object.create(null), e, t) : t
}

function gc(e, t) {
  return e ? xe(e) && xe(t) ? [...new Set([...e, ...t])] : ft(Object.create(null), fc(e), fc(t ?? {})) : t
}

function cv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ft(Object.create(null), e);
  for (const o in t) n[o] = It(e[o], t[o]);
  return n
}

function gf() {
  return {
    app: null,
    config: {
      isNativeTag: Km,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap,
    propsCache: new WeakMap,
    emitsCache: new WeakMap
  }
}
let uv = 0;

function dv(e, t) {
  return function(o, s = null) {
    Ee(o) || (o = ft({}, o)), s != null && !Je(s) && (s = null);
    const a = gf(),
      l = new WeakSet,
      r = [];
    let c = !1;
    const u = a.app = {
      _uid: uv++,
      _component: o,
      _props: s,
      _container: null,
      _context: a,
      _instance: null,
      version: Qv,
      get config() {
        return a.config
      },
      set config(d) {},
      use(d, ...f) {
        return l.has(d) || (d && Ee(d.install) ? (l.add(d), d.install(u, ...f)) : Ee(d) && (l.add(d), d(u, ...f))), u
      },
      mixin(d) {
        return a.mixins.includes(d) || a.mixins.push(d), u
      },
      component(d, f) {
        return f ? (a.components[d] = f, u) : a.components[d]
      },
      directive(d, f) {
        return f ? (a.directives[d] = f, u) : a.directives[d]
      },
      mount(d, f, m) {
        if (!c) {
          const g = u._ceVNode || h(o, s);
          return g.appContext = a, m === !0 ? m = "svg" : m === !1 && (m = void 0), f && t ? t(g, d) : e(g, d, m), c = !0, u._container = d, d.__vue_app__ = u, va(g.component)
        }
      },
      onUnmount(d) {
        r.push(d)
      },
      unmount() {
        c && (on(r, u._instance, 16), e(null, u._container), delete u._container.__vue_app__)
      },
      provide(d, f) {
        return a.provides[d] = f, u
      },
      runWithContext(d) {
        const f = Po;
        Po = u;
        try {
          return d()
        } finally {
          Po = f
        }
      }
    };
    return u
  }
}
let Po = null;

function Dn(e, t) {
  if (mt) {
    let n = mt.provides;
    const o = mt.parent && mt.parent.provides;
    o === n && (n = mt.provides = Object.create(o)), n[e] = t
  }
}

function Bt(e, t, n = !1) {
  const o = mt || ut;
  if (o || Po) {
    const s = Po ? Po._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && Ee(t) ? t.call(o && o.proxy) : t
  }
}

function fv() {
  return !!(mt || ut || Po)
}
const vf = {},
  yf = () => Object.create(vf),
  pf = e => Object.getPrototypeOf(e) === vf;

function hv(e, t, n, o = !1) {
  const s = {},
    a = yf();
  e.propsDefaults = Object.create(null), bf(e, t, s, a);
  for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
  n ? e.props = o ? s : Hd(s) : e.type.props ? e.props = s : e.props = a, e.attrs = a
}

function mv(e, t, n, o) {
  const {
    props: s,
    attrs: a,
    vnode: {
      patchFlag: l
    }
  } = e, r = He(s), [c] = e.propsOptions;
  let u = !1;
  if ((o || l > 0) && !(l & 16)) {
    if (l & 8) {
      const d = e.vnode.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        let m = d[f];
        if (ma(e.emitsOptions, m)) continue;
        const g = t[m];
        if (c)
          if (We(a, m)) g !== a[m] && (a[m] = g, u = !0);
          else {
            const p = Qt(m);
            s[p] = El(c, r, p, g, e, !1)
          }
        else g !== a[m] && (a[m] = g, u = !0)
      }
    }
  } else {
    bf(e, t, s, a) && (u = !0);
    let d;
    for (const f in r)(!t || !We(t, f) && ((d = zn(f)) === f || !We(t, d))) && (c ? n && (n[f] !== void 0 || n[d] !== void 0) && (s[f] = El(c, r, f, void 0, e, !0)) : delete s[f]);
    if (a !== r)
      for (const f in a)(!t || !We(t, f)) && (delete a[f], u = !0)
  }
  u && Rn(e.attrs, "set", "")
}

function bf(e, t, n, o) {
  const [s, a] = e.propsOptions;
  let l = !1,
    r;
  if (t)
    for (let c in t) {
      if (Di(c)) continue;
      const u = t[c];
      let d;
      s && We(s, d = Qt(c)) ? !a || !a.includes(d) ? n[d] = u : (r || (r = {}))[d] = u : ma(e.emitsOptions, c) || (!(c in o) || u !== o[c]) && (o[c] = u, l = !0)
    }
  if (a) {
    const c = He(n),
      u = r || Ke;
    for (let d = 0; d < a.length; d++) {
      const f = a[d];
      n[f] = El(s, c, f, u[f], e, !We(u, f))
    }
  }
  return l
}

function El(e, t, n, o, s, a) {
  const l = e[n];
  if (l != null) {
    const r = We(l, "default");
    if (r && o === void 0) {
      const c = l.default;
      if (l.type !== Function && !l.skipFactory && Ee(c)) {
        const {
          propsDefaults: u
        } = s;
        if (n in u) o = u[n];
        else {
          const d = as(s);
          o = u[n] = c.call(null, t), d()
        }
      } else o = c;
      s.ce && s.ce._setProp(n, o)
    }
    l[0] && (a && !r ? o = !1 : l[1] && (o === "" || o === zn(n)) && (o = !0))
  }
  return o
}
const gv = new WeakMap;

function wf(e, t, n = !1) {
  const o = n ? gv : t.propsCache,
    s = o.get(e);
  if (s) return s;
  const a = e.props,
    l = {},
    r = [];
  let c = !1;
  if (!Ee(e)) {
    const d = f => {
      c = !0;
      const [m, g] = wf(f, t, !0);
      ft(l, m), g && r.push(...g)
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d)
  }
  if (!a && !c) return Je(e) && o.set(e, ei), ei;
  if (xe(a))
    for (let d = 0; d < a.length; d++) {
      const f = Qt(a[d]);
      vc(f) && (l[f] = Ke)
    } else if (a)
      for (const d in a) {
        const f = Qt(d);
        if (vc(f)) {
          const m = a[d],
            g = l[f] = xe(m) || Ee(m) ? {
              type: m
            } : ft({}, m),
            p = g.type;
          let y = !1,
            b = !0;
          if (xe(p))
            for (let w = 0; w < p.length; ++w) {
              const v = p[w],
                C = Ee(v) && v.name;
              if (C === "Boolean") {
                y = !0;
                break
              } else C === "String" && (b = !1)
            } else y = Ee(p) && p.name === "Boolean";
          g[0] = y, g[1] = b, (y || We(g, "default")) && r.push(f)
        }
      }
  const u = [l, r];
  return Je(e) && o.set(e, u), u
}

function vc(e) {
  return e[0] !== "$" && !Di(e)
}
const Cf = e => e[0] === "_" || e === "$stable",
  mr = e => xe(e) ? e.map(yn) : [yn(e)],
  vv = (e, t, n) => {
    if (t._n) return t;
    const o = ae((...s) => mr(t(...s)), n);
    return o._c = !1, o
  },
  _f = (e, t, n) => {
    const o = e._ctx;
    for (const s in e) {
      if (Cf(s)) continue;
      const a = e[s];
      if (Ee(a)) t[s] = vv(s, a, o);
      else if (a != null) {
        const l = mr(a);
        t[s] = () => l
      }
    }
  },
  kf = (e, t) => {
    const n = mr(t);
    e.slots.default = () => n
  },
  Sf = (e, t, n) => {
    for (const o in t)(n || o !== "_") && (e[o] = t[o])
  },
  yv = (e, t, n) => {
    const o = e.slots = yf();
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (Sf(o, t, n), n && wd(o, "_", s, !0)) : _f(t, o)
    } else t && kf(e, t)
  },
  pv = (e, t, n) => {
    const {
      vnode: o,
      slots: s
    } = e;
    let a = !0,
      l = Ke;
    if (o.shapeFlag & 32) {
      const r = t._;
      r ? n && r === 1 ? a = !1 : Sf(s, t, n) : (a = !t.$stable, _f(t, s)), l = t
    } else t && (kf(e, t), l = {
      default: 1
    });
    if (a)
      for (const r in s) !Cf(r) && l[r] == null && delete s[r]
  },
  Rt = Bv;

function bv(e) {
  return wv(e)
}

function wv(e, t) {
  const n = Cd();
  n.__VUE__ = !0;
  const {
    insert: o,
    remove: s,
    patchProp: a,
    createElement: l,
    createText: r,
    createComment: c,
    setText: u,
    setElementText: d,
    parentNode: f,
    nextSibling: m,
    setScopeId: g = bn,
    insertStaticContent: p
  } = e, y = (A, O, L, G = null, Q = null, ie = null, ve = void 0, fe = null, de = !!O.dynamicChildren) => {
    if (A === O) return;
    A && !Ao(A, O) && (G = E(A), X(A, Q, ie, !0), A = null), O.patchFlag === -2 && (de = !1, O.dynamicChildren = null);
    const {
      type: se,
      ref: Te,
      shapeFlag: be
    } = O;
    switch (se) {
      case ss:
        b(A, O, L, G);
        break;
      case yt:
        w(A, O, L, G);
        break;
      case Ls:
        A == null && v(O, L, G, ve);
        break;
      case Be:
        P(A, O, L, G, Q, ie, ve, fe, de);
        break;
      default:
        be & 1 ? k(A, O, L, G, Q, ie, ve, fe, de) : be & 6 ? M(A, O, L, G, Q, ie, ve, fe, de) : (be & 64 || be & 128) && se.process(A, O, L, G, Q, ie, ve, fe, de, oe)
    }
    Te != null && Q && Sl(Te, A && A.ref, ie, O || A, !O)
  }, b = (A, O, L, G) => {
    if (A == null) o(O.el = r(O.children), L, G);
    else {
      const Q = O.el = A.el;
      O.children !== A.children && u(Q, O.children)
    }
  }, w = (A, O, L, G) => {
    A == null ? o(O.el = c(O.children || ""), L, G) : O.el = A.el
  }, v = (A, O, L, G) => {
    [A.el, A.anchor] = p(A.children, O, L, G, A.el, A.anchor)
  }, C = ({
    el: A,
    anchor: O
  }, L, G) => {
    let Q;
    for (; A && A !== O;) Q = m(A), o(A, L, G), A = Q;
    o(O, L, G)
  }, _ = ({
    el: A,
    anchor: O
  }) => {
    let L;
    for (; A && A !== O;) L = m(A), s(A), A = L;
    s(O)
  }, k = (A, O, L, G, Q, ie, ve, fe, de) => {
    O.type === "svg" ? ve = "svg" : O.type === "math" && (ve = "mathml"), A == null ? I(O, L, G, Q, ie, ve, fe, de) : B(A, O, Q, ie, ve, fe, de)
  }, I = (A, O, L, G, Q, ie, ve, fe) => {
    let de, se;
    const {
      props: Te,
      shapeFlag: be,
      transition: _e,
      dirs: Ae
    } = A;
    if (de = A.el = l(A.type, ie, Te && Te.is, Te), be & 8 ? d(de, A.children) : be & 16 && S(A.children, de, null, G, Q, Ua(A, ie), ve, fe), Ae && wo(A, null, G, "created"), D(de, A, A.scopeId, ve, G), Te) {
      for (const Ye in Te) Ye !== "value" && !Di(Ye) && a(de, Ye, null, Te[Ye], ie, G);
      "value" in Te && a(de, "value", null, Te.value, ie), (se = Te.onVnodeBeforeMount) && hn(se, G, A)
    }
    Ae && wo(A, null, G, "beforeMount");
    const ze = Cv(Q, _e);
    ze && _e.beforeEnter(de), o(de, O, L), ((se = Te && Te.onVnodeMounted) || ze || Ae) && Rt(() => {
      se && hn(se, G, A), ze && _e.enter(de), Ae && wo(A, null, G, "mounted")
    }, Q)
  }, D = (A, O, L, G, Q) => {
    if (L && g(A, L), G)
      for (let ie = 0; ie < G.length; ie++) g(A, G[ie]);
    if (Q) {
      let ie = Q.subTree;
      if (O === ie || Ef(ie.type) && (ie.ssContent === O || ie.ssFallback === O)) {
        const ve = Q.vnode;
        D(A, ve, ve.scopeId, ve.slotScopeIds, Q.parent)
      }
    }
  }, S = (A, O, L, G, Q, ie, ve, fe, de = 0) => {
    for (let se = de; se < A.length; se++) {
      const Te = A[se] = fe ? oo(A[se]) : yn(A[se]);
      y(null, Te, O, L, G, Q, ie, ve, fe)
    }
  }, B = (A, O, L, G, Q, ie, ve) => {
    const fe = O.el = A.el;
    let {
      patchFlag: de,
      dynamicChildren: se,
      dirs: Te
    } = O;
    de |= A.patchFlag & 16;
    const be = A.props || Ke,
      _e = O.props || Ke;
    let Ae;
    if (L && Co(L, !1), (Ae = _e.onVnodeBeforeUpdate) && hn(Ae, L, O, A), Te && wo(O, A, L, "beforeUpdate"), L && Co(L, !0), (be.innerHTML && _e.innerHTML == null || be.textContent && _e.textContent == null) && d(fe, ""), se ? R(A.dynamicChildren, se, fe, L, G, Ua(O, Q), ie) : ve || ue(A, O, fe, null, L, G, Ua(O, Q), ie, !1), de > 0) {
      if (de & 16) x(fe, be, _e, L, Q);
      else if (de & 2 && be.class !== _e.class && a(fe, "class", null, _e.class, Q), de & 4 && a(fe, "style", be.style, _e.style, Q), de & 8) {
        const ze = O.dynamicProps;
        for (let Ye = 0; Ye < ze.length; Ye++) {
          const je = ze[Ye],
            $t = be[je],
            bt = _e[je];
          (bt !== $t || je === "value") && a(fe, je, $t, bt, Q, L)
        }
      }
      de & 1 && A.children !== O.children && d(fe, O.children)
    } else !ve && se == null && x(fe, be, _e, L, Q);
    ((Ae = _e.onVnodeUpdated) || Te) && Rt(() => {
      Ae && hn(Ae, L, O, A), Te && wo(O, A, L, "updated")
    }, G)
  }, R = (A, O, L, G, Q, ie, ve) => {
    for (let fe = 0; fe < O.length; fe++) {
      const de = A[fe],
        se = O[fe],
        Te = de.el && (de.type === Be || !Ao(de, se) || de.shapeFlag & 70) ? f(de.el) : L;
      y(de, se, Te, null, G, Q, ie, ve, !0)
    }
  }, x = (A, O, L, G, Q) => {
    if (O !== L) {
      if (O !== Ke)
        for (const ie in O) !Di(ie) && !(ie in L) && a(A, ie, O[ie], null, Q, G);
      for (const ie in L) {
        if (Di(ie)) continue;
        const ve = L[ie],
          fe = O[ie];
        ve !== fe && ie !== "value" && a(A, ie, fe, ve, Q, G)
      }
      "value" in L && a(A, "value", O.value, L.value, Q)
    }
  }, P = (A, O, L, G, Q, ie, ve, fe, de) => {
    const se = O.el = A ? A.el : r(""),
      Te = O.anchor = A ? A.anchor : r("");
    let {
      patchFlag: be,
      dynamicChildren: _e,
      slotScopeIds: Ae
    } = O;
    Ae && (fe = fe ? fe.concat(Ae) : Ae), A == null ? (o(se, L, G), o(Te, L, G), S(O.children || [], L, Te, Q, ie, ve, fe, de)) : be > 0 && be & 64 && _e && A.dynamicChildren ? (R(A.dynamicChildren, _e, L, Q, ie, ve, fe), (O.key != null || Q && O === Q.subTree) && gr(A, O, !0)) : ue(A, O, L, Te, Q, ie, ve, fe, de)
  }, M = (A, O, L, G, Q, ie, ve, fe, de) => {
    O.slotScopeIds = fe, A == null ? O.shapeFlag & 512 ? Q.ctx.activate(O, L, G, ve, de) : J(O, L, G, Q, ie, ve, de) : ce(A, O, de)
  }, J = (A, O, L, G, Q, ie, ve) => {
    const fe = A.component = Fv(A, G, Q);
    if (fa(A) && (fe.ctx.renderer = oe), zv(fe, !1, ve), fe.asyncDep) {
      if (Q && Q.registerDep(fe, W, ve), !A.el) {
        const de = fe.subTree = h(yt);
        w(null, de, O, L)
      }
    } else W(fe, A, O, L, Q, ie, ve)
  }, ce = (A, O, L) => {
    const G = O.component = A.component;
    if (Pv(A, O, L))
      if (G.asyncDep && !G.asyncResolved) {
        ne(G, O, L);
        return
      } else G.next = O, G.update();
    else O.el = A.el, G.vnode = O
  }, W = (A, O, L, G, Q, ie, ve) => {
    const fe = () => {
      if (A.isMounted) {
        let {
          next: be,
          bu: _e,
          u: Ae,
          parent: ze,
          vnode: Ye
        } = A;
        {
          const Mt = Tf(A);
          if (Mt) {
            be && (be.el = Ye.el, ne(A, be, ve)), Mt.asyncDep.then(() => {
              A.isUnmounted || fe()
            });
            return
          }
        }
        let je = be,
          $t;
        Co(A, !1), be ? (be.el = Ye.el, ne(A, be, ve)) : be = Ye, _e && $a(_e), ($t = be.props && be.props.onVnodeBeforeUpdate) && hn($t, ze, be, Ye), Co(A, !0);
        const bt = Wa(A),
          Yt = A.subTree;
        A.subTree = bt, y(Yt, bt, f(Yt.el), E(Yt), A, Q, ie), be.el = bt.el, je === null && Ov(A, bt.el), Ae && Rt(Ae, Q), ($t = be.props && be.props.onVnodeUpdated) && Rt(() => hn($t, ze, be, Ye), Q)
      } else {
        let be;
        const {
          el: _e,
          props: Ae
        } = O, {
          bm: ze,
          m: Ye,
          parent: je,
          root: $t,
          type: bt
        } = A, Yt = oi(O);
        if (Co(A, !1), ze && $a(ze), !Yt && (be = Ae && Ae.onVnodeBeforeMount) && hn(be, je, O), Co(A, !0), _e && Le) {
          const Mt = () => {
            A.subTree = Wa(A), Le(_e, A.subTree, A, Q, null)
          };
          Yt && bt.__asyncHydrate ? bt.__asyncHydrate(_e, A, Mt) : Mt()
        } else {
          $t.ce && $t.ce._injectChildStyle(bt);
          const Mt = A.subTree = Wa(A);
          y(null, Mt, L, G, A, Q, ie), O.el = Mt.el
        }
        if (Ye && Rt(Ye, Q), !Yt && (be = Ae && Ae.onVnodeMounted)) {
          const Mt = O;
          Rt(() => hn(be, je, Mt), Q)
        }(O.shapeFlag & 256 || je && oi(je.vnode) && je.vnode.shapeFlag & 256) && A.a && Rt(A.a, Q), A.isMounted = !0, O = L = G = null
      }
    };
    A.scope.on();
    const de = A.effect = new Ed(fe);
    A.scope.off();
    const se = A.update = de.run.bind(de),
      Te = A.job = de.runIfDirty.bind(de);
    Te.i = A, Te.id = A.uid, de.scheduler = () => fr(Te), Co(A, !0), se()
  }, ne = (A, O, L) => {
    O.component = A;
    const G = A.vnode.props;
    A.vnode = O, A.next = null, mv(A, O.props, G, L), pv(A, O.children, L), ho(), lc(A), mo()
  }, ue = (A, O, L, G, Q, ie, ve, fe, de = !1) => {
    const se = A && A.children,
      Te = A ? A.shapeFlag : 0,
      be = O.children,
      {
        patchFlag: _e,
        shapeFlag: Ae
      } = O;
    if (_e > 0) {
      if (_e & 128) {
        Ne(se, be, L, G, Q, ie, ve, fe, de);
        return
      } else if (_e & 256) {
        Re(se, be, L, G, Q, ie, ve, fe, de);
        return
      }
    }
    Ae & 8 ? (Te & 16 && pe(se, Q, ie), be !== se && d(L, be)) : Te & 16 ? Ae & 16 ? Ne(se, be, L, G, Q, ie, ve, fe, de) : pe(se, Q, ie, !0) : (Te & 8 && d(L, ""), Ae & 16 && S(be, L, G, Q, ie, ve, fe, de))
  }, Re = (A, O, L, G, Q, ie, ve, fe, de) => {
    A = A || ei, O = O || ei;
    const se = A.length,
      Te = O.length,
      be = Math.min(se, Te);
    let _e;
    for (_e = 0; _e < be; _e++) {
      const Ae = O[_e] = de ? oo(O[_e]) : yn(O[_e]);
      y(A[_e], Ae, L, null, Q, ie, ve, fe, de)
    }
    se > Te ? pe(A, Q, ie, !0, !1, be) : S(O, L, G, Q, ie, ve, fe, de, be)
  }, Ne = (A, O, L, G, Q, ie, ve, fe, de) => {
    let se = 0;
    const Te = O.length;
    let be = A.length - 1,
      _e = Te - 1;
    for (; se <= be && se <= _e;) {
      const Ae = A[se],
        ze = O[se] = de ? oo(O[se]) : yn(O[se]);
      if (Ao(Ae, ze)) y(Ae, ze, L, null, Q, ie, ve, fe, de);
      else break;
      se++
    }
    for (; se <= be && se <= _e;) {
      const Ae = A[be],
        ze = O[_e] = de ? oo(O[_e]) : yn(O[_e]);
      if (Ao(Ae, ze)) y(Ae, ze, L, null, Q, ie, ve, fe, de);
      else break;
      be--, _e--
    }
    if (se > be) {
      if (se <= _e) {
        const Ae = _e + 1,
          ze = Ae < Te ? O[Ae].el : G;
        for (; se <= _e;) y(null, O[se] = de ? oo(O[se]) : yn(O[se]), L, ze, Q, ie, ve, fe, de), se++
      }
    } else if (se > _e)
      for (; se <= be;) X(A[se], Q, ie, !0), se++;
    else {
      const Ae = se,
        ze = se,
        Ye = new Map;
      for (se = ze; se <= _e; se++) {
        const Lt = O[se] = de ? oo(O[se]) : yn(O[se]);
        Lt.key != null && Ye.set(Lt.key, se)
      }
      let je, $t = 0;
      const bt = _e - ze + 1;
      let Yt = !1,
        Mt = 0;
      const Ci = new Array(bt);
      for (se = 0; se < bt; se++) Ci[se] = 0;
      for (se = Ae; se <= be; se++) {
        const Lt = A[se];
        if ($t >= bt) {
          X(Lt, Q, ie, !0);
          continue
        }
        let fn;
        if (Lt.key != null) fn = Ye.get(Lt.key);
        else
          for (je = ze; je <= _e; je++)
            if (Ci[je - ze] === 0 && Ao(Lt, O[je])) {
              fn = je;
              break
            } fn === void 0 ? X(Lt, Q, ie, !0) : (Ci[fn - ze] = se + 1, fn >= Mt ? Mt = fn : Yt = !0, y(Lt, O[fn], L, null, Q, ie, ve, fe, de), $t++)
      }
      const Zr = Yt ? _v(Ci) : ei;
      for (je = Zr.length - 1, se = bt - 1; se >= 0; se--) {
        const Lt = ze + se,
          fn = O[Lt],
          Xr = Lt + 1 < Te ? O[Lt + 1].el : G;
        Ci[se] === 0 ? y(null, fn, L, Xr, Q, ie, ve, fe, de) : Yt && (je < 0 || se !== Zr[je] ? z(fn, L, Xr, 2) : je--)
      }
    }
  }, z = (A, O, L, G, Q = null) => {
    const {
      el: ie,
      type: ve,
      transition: fe,
      children: de,
      shapeFlag: se
    } = A;
    if (se & 6) {
      z(A.component.subTree, O, L, G);
      return
    }
    if (se & 128) {
      A.suspense.move(O, L, G);
      return
    }
    if (se & 64) {
      ve.move(A, O, L, oe);
      return
    }
    if (ve === Be) {
      o(ie, O, L);
      for (let be = 0; be < de.length; be++) z(de[be], O, L, G);
      o(A.anchor, O, L);
      return
    }
    if (ve === Ls) {
      C(A, O, L);
      return
    }
    if (G !== 2 && se & 1 && fe)
      if (G === 0) fe.beforeEnter(ie), o(ie, O, L), Rt(() => fe.enter(ie), Q);
      else {
        const {
          leave: be,
          delayLeave: _e,
          afterLeave: Ae
        } = fe, ze = () => o(ie, O, L), Ye = () => {
          be(ie, () => {
            ze(), Ae && Ae()
          })
        };
        _e ? _e(ie, ze, Ye) : Ye()
      }
    else o(ie, O, L)
  }, X = (A, O, L, G = !1, Q = !1) => {
    const {
      type: ie,
      props: ve,
      ref: fe,
      children: de,
      dynamicChildren: se,
      shapeFlag: Te,
      patchFlag: be,
      dirs: _e,
      cacheIndex: Ae
    } = A;
    if (be === -2 && (Q = !1), fe != null && Sl(fe, null, L, A, !0), Ae != null && (O.renderCache[Ae] = void 0), Te & 256) {
      O.ctx.deactivate(A);
      return
    }
    const ze = Te & 1 && _e,
      Ye = !oi(A);
    let je;
    if (Ye && (je = ve && ve.onVnodeBeforeUnmount) && hn(je, O, A), Te & 6) le(A.component, L, G);
    else {
      if (Te & 128) {
        A.suspense.unmount(L, G);
        return
      }
      ze && wo(A, null, O, "beforeUnmount"), Te & 64 ? A.type.remove(A, O, L, oe, G) : se && !se.hasOnce && (ie !== Be || be > 0 && be & 64) ? pe(se, O, L, !1, !0) : (ie === Be && be & 384 || !Q && Te & 16) && pe(de, O, L), G && ye(A)
    }(Ye && (je = ve && ve.onVnodeUnmounted) || ze) && Rt(() => {
      je && hn(je, O, A), ze && wo(A, null, O, "unmounted")
    }, L)
  }, ye = A => {
    const {
      type: O,
      el: L,
      anchor: G,
      transition: Q
    } = A;
    if (O === Be) {
      we(L, G);
      return
    }
    if (O === Ls) {
      _(A);
      return
    }
    const ie = () => {
      s(L), Q && !Q.persisted && Q.afterLeave && Q.afterLeave()
    };
    if (A.shapeFlag & 1 && Q && !Q.persisted) {
      const {
        leave: ve,
        delayLeave: fe
      } = Q, de = () => ve(L, ie);
      fe ? fe(A.el, ie, de) : de()
    } else ie()
  }, we = (A, O) => {
    let L;
    for (; A !== O;) L = m(A), s(A), A = L;
    s(O)
  }, le = (A, O, L) => {
    const {
      bum: G,
      scope: Q,
      job: ie,
      subTree: ve,
      um: fe,
      m: de,
      a: se
    } = A;
    yc(de), yc(se), G && $a(G), Q.stop(), ie && (ie.flags |= 8, X(ve, A, O, L)), fe && Rt(fe, O), Rt(() => {
      A.isUnmounted = !0
    }, O), O && O.pendingBranch && !O.isUnmounted && A.asyncDep && !A.asyncResolved && A.suspenseId === O.pendingId && (O.deps--, O.deps === 0 && O.resolve())
  }, pe = (A, O, L, G = !1, Q = !1, ie = 0) => {
    for (let ve = ie; ve < A.length; ve++) X(A[ve], O, L, G, Q)
  }, E = A => {
    if (A.shapeFlag & 6) return E(A.component.subTree);
    if (A.shapeFlag & 128) return A.suspense.next();
    const O = m(A.anchor || A.el),
      L = O && O[Zd];
    return L ? m(L) : O
  };
  let H = !1;
  const U = (A, O, L) => {
      A == null ? O._vnode && X(O._vnode, null, null, !0) : y(O._vnode || null, A, O, null, null, null, L), O._vnode = A, H || (H = !0, lc(), Yd(), H = !1)
    },
    oe = {
      p: y,
      um: X,
      m: z,
      r: ye,
      mt: J,
      mc: S,
      pc: ue,
      pbc: R,
      n: E,
      o: e
    };
  let Se, Le;
  return {
    render: U,
    hydrate: Se,
    createApp: dv(U, Se)
  }
}

function Ua({
  type: e,
  props: t
}, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function Co({
  effect: e,
  job: t
}, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function Cv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function gr(e, t, n = !1) {
  const o = e.children,
    s = t.children;
  if (xe(o) && xe(s))
    for (let a = 0; a < o.length; a++) {
      const l = o[a];
      let r = s[a];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = s[a] = oo(s[a]), r.el = l.el), !n && r.patchFlag !== -2 && gr(l, r)), r.type === ss && (r.el = l.el)
    }
}

function _v(e) {
  const t = e.slice(),
    n = [0];
  let o, s, a, l, r;
  const c = e.length;
  for (o = 0; o < c; o++) {
    const u = e[o];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[o] = s, n.push(o);
        continue
      }
      for (a = 0, l = n.length - 1; a < l;) r = a + l >> 1, e[n[r]] < u ? a = r + 1 : l = r;
      u < e[n[a]] && (a > 0 && (t[o] = n[a - 1]), n[a] = o)
    }
  }
  for (a = n.length, l = n[a - 1]; a-- > 0;) n[a] = l, l = t[l];
  return n
}

function Tf(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Tf(t)
}

function yc(e) {
  if (e)
    for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const kv = Symbol.for("v-scx"),
  Sv = () => Bt(kv);

function vi(e, t) {
  return vr(e, null, t)
}

function re(e, t, n) {
  return vr(e, t, n)
}

function vr(e, t, n = Ke) {
  const {
    immediate: o,
    deep: s,
    flush: a,
    once: l
  } = n, r = ft({}, n);
  let c;
  if (ga)
    if (a === "sync") {
      const m = Sv();
      c = m.__watcherHandles || (m.__watcherHandles = [])
    } else if (!t || o) r.once = !0;
  else {
    const m = () => {};
    return m.stop = bn, m.resume = bn, m.pause = bn, m
  }
  const u = mt;
  r.call = (m, g, p) => on(m, u, g, p);
  let d = !1;
  a === "post" ? r.scheduler = m => {
    Rt(m, u && u.suspense)
  } : a !== "sync" && (d = !0, r.scheduler = (m, g) => {
    g ? m() : fr(m)
  }), r.augmentJob = m => {
    t && (m.flags |= 4), d && (m.flags |= 2, u && (m.id = u.uid, m.i = u))
  };
  const f = Fg(e, t, r);
  return c && c.push(f), f
}

function Tv(e, t, n) {
  const o = this.proxy,
    s = tt(e) ? e.includes(".") ? xf(o, e) : () => o[e] : e.bind(o, o);
  let a;
  Ee(t) ? a = t : (a = t.handler, n = t);
  const l = as(this),
    r = vr(s, a.bind(o), n);
  return l(), r
}

function xf(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++) o = o[n[s]];
    return o
  }
}
const xv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qt(t)}Modifiers`] || e[`${zn(t)}Modifiers`];

function Av(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Ke;
  let s = n;
  const a = t.startsWith("update:"),
    l = a && xv(o, t.slice(7));
  l && (l.trim && (s = n.map(d => tt(d) ? d.trim() : d)), l.number && (s = n.map(Xm)));
  let r, c = o[r = Da(t)] || o[r = Da(Qt(t))];
  !c && a && (c = o[r = Da(zn(t))]), c && on(c, e, 6, s);
  const u = o[r + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    e.emitted[r] = !0, on(u, e, 6, s)
  }
}

function Af(e, t, n = !1) {
  const o = t.emitsCache,
    s = o.get(e);
  if (s !== void 0) return s;
  const a = e.emits;
  let l = {},
    r = !1;
  if (!Ee(e)) {
    const c = u => {
      const d = Af(u, t, !0);
      d && (r = !0, ft(l, d))
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
  }
  return !a && !r ? (Je(e) && o.set(e, null), null) : (xe(a) ? a.forEach(c => l[c] = null) : ft(l, a), Je(e) && o.set(e, l), l)
}

function ma(e, t) {
  return !e || !sa(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), We(e, t[0].toLowerCase() + t.slice(1)) || We(e, zn(t)) || We(e, t))
}

function Wa(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [a],
    slots: l,
    attrs: r,
    emit: c,
    render: u,
    renderCache: d,
    props: f,
    data: m,
    setupState: g,
    ctx: p,
    inheritAttrs: y
  } = e, b = Ks(e);
  let w, v;
  try {
    if (n.shapeFlag & 4) {
      const _ = s || o,
        k = _;
      w = yn(u.call(k, _, d, f, g, m, p)), v = r
    } else {
      const _ = t;
      w = yn(_.length > 1 ? _(f, {
        attrs: r,
        slots: l,
        emit: c
      }) : _(f, null)), v = t.props ? r : Ev(r)
    }
  } catch (_) {
    Fi.length = 0, da(_, e, 1), w = h(yt)
  }
  let C = w;
  if (v && y !== !1) {
    const _ = Object.keys(v),
      {
        shapeFlag: k
      } = C;
    _.length && k & 7 && (a && _.some(Jl) && (v = Iv(v, a)), C = co(C, v, !1, !0))
  }
  return n.dirs && (C = co(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && Gi(C, n.transition), w = C, Ks(b), w
}
const Ev = e => {
    let t;
    for (const n in e)(n === "class" || n === "style" || sa(n)) && ((t || (t = {}))[n] = e[n]);
    return t
  },
  Iv = (e, t) => {
    const n = {};
    for (const o in e)(!Jl(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
    return n
  };

function Pv(e, t, n) {
  const {
    props: o,
    children: s,
    component: a
  } = e, {
    props: l,
    children: r,
    patchFlag: c
  } = t, u = a.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return o ? pc(o, l, u) : !!l;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const m = d[f];
        if (l[m] !== o[m] && !ma(u, m)) return !0
      }
    }
  } else return (s || r) && (!r || !r.$stable) ? !0 : o === l ? !1 : o ? l ? pc(o, l, u) : !0 : !!l;
  return !1
}

function pc(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < o.length; s++) {
    const a = o[s];
    if (t[a] !== e[a] && !ma(n, a)) return !0
  }
  return !1
}

function Ov({
  vnode: e,
  parent: t
}, n) {
  for (; t;) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)(e = t.vnode).el = n, t = t.parent;
    else break
  }
}
const Ef = e => e.__isSuspense;

function Bv(e, t) {
  t && t.pendingBranch ? xe(e) ? t.effects.push(...e) : t.effects.push(e) : Hg(e)
}
const Be = Symbol.for("v-fgt"),
  ss = Symbol.for("v-txt"),
  yt = Symbol.for("v-cmt"),
  Ls = Symbol.for("v-stc"),
  Fi = [];
let Nt = null;

function V(e = !1) {
  Fi.push(Nt = e ? null : [])
}

function Rv() {
  Fi.pop(), Nt = Fi[Fi.length - 1] || null
}
let Zi = 1;

function bc(e) {
  Zi += e, e < 0 && Nt && (Nt.hasOnce = !0)
}

function If(e) {
  return e.dynamicChildren = Zi > 0 ? Nt || ei : null, Rv(), Zi > 0 && Nt && Nt.push(e), e
}

function q(e, t, n, o, s, a) {
  return If(T(e, t, n, o, s, a, !0))
}

function Me(e, t, n, o, s) {
  return If(h(e, t, n, o, s, !0))
}

function ui(e) {
  return e ? e.__v_isVNode === !0 : !1
}

function Ao(e, t) {
  return e.type === t.type && e.key === t.key
}
const Pf = ({
    key: e
  }) => e ?? null,
  Ns = ({
    ref: e,
    ref_key: t,
    ref_for: n
  }) => (typeof e == "number" && (e = "" + e), e != null ? tt(e) || it(e) || Ee(e) ? {
    i: ut,
    r: e,
    k: t,
    f: !!n
  } : e : null);

function T(e, t = null, n = null, o = 0, s = null, a = e === Be ? 0 : 1, l = !1, r = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Pf(t),
    ref: t && Ns(t),
    scopeId: Gd,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ut
  };
  return r ? (yr(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= tt(n) ? 8 : 16), Zi > 0 && !l && Nt && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Nt.push(c), c
}
const h = Dv;

function Dv(e, t = null, n = null, o = 0, s = null, a = !1) {
  if ((!e || e === nv) && (e = yt), ui(e)) {
    const r = co(e, t, !0);
    return n && yr(r, n), Zi > 0 && !a && Nt && (r.shapeFlag & 6 ? Nt[Nt.indexOf(e)] = r : Nt.push(r)), r.patchFlag = -2, r
  }
  if (jv(e) && (e = e.__vccOpts), t) {
    t = $v(t);
    let {
      class: r,
      style: c
    } = t;
    r && !tt(r) && (t.class = ot(r)), Je(c) && (cr(c) && !xe(c) && (c = ft({}, c)), t.style = an(c))
  }
  const l = tt(e) ? 1 : Ef(e) ? 128 : Xd(e) ? 64 : Je(e) ? 4 : Ee(e) ? 2 : 0;
  return T(e, t, n, o, s, l, a, !0)
}

function $v(e) {
  return e ? cr(e) || pf(e) ? ft({}, e) : e : null
}

function co(e, t, n = !1, o = !1) {
  const {
    props: s,
    ref: a,
    patchFlag: l,
    children: r,
    transition: c
  } = e, u = t ? De(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Pf(u),
    ref: t && t.ref ? n && a ? xe(a) ? a.concat(Ns(t)) : [a, Ns(t)] : Ns(t) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Be ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && co(e.ssContent),
    ssFallback: e.ssFallback && co(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && o && Gi(d, c.clone(d)), d
}

function he(e = " ", t = 0) {
  return h(ss, null, e, t)
}

function Mv(e, t) {
  const n = h(Ls, null, e);
  return n.staticCount = t, n
}

function Ce(e = "", t = !1) {
  return t ? (V(), Me(yt, null, e)) : h(yt, null, e)
}

function yn(e) {
  return e == null || typeof e == "boolean" ? h(yt) : xe(e) ? h(Be, null, e.slice()) : ui(e) ? oo(e) : h(ss, null, String(e))
}

function oo(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : co(e)
}

function yr(e, t) {
  let n = 0;
  const {
    shapeFlag: o
  } = e;
  if (t == null) t = null;
  else if (xe(t)) n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), yr(e, s()), s._c && (s._d = !0));
      return
    } else {
      n = 32;
      const s = t._;
      !s && !pf(t) ? t._ctx = ut : s === 3 && ut && (ut.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    }
  else Ee(t) ? (t = {
    default: t,
    _ctx: ut
  }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [he(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n
}

function De(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class") t.class !== o.class && (t.class = ot([t.class, o.class]));
      else if (s === "style") t.style = an([t.style, o.style]);
    else if (sa(s)) {
      const a = t[s],
        l = o[s];
      l && a !== l && !(xe(a) && a.includes(l)) && (t[s] = a ? [].concat(a, l) : l)
    } else s !== "" && (t[s] = o[s])
  }
  return t
}

function hn(e, t, n, o = null) {
  on(e, t, 7, [n, o])
}
const Lv = gf();
let Nv = 0;

function Fv(e, t, n) {
  const o = e.type,
    s = (t ? t.appContext : e.appContext) || Lv,
    a = {
      uid: Nv++,
      vnode: e,
      type: o,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Td(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: wf(o, s),
      emitsOptions: Af(o, s),
      emit: null,
      emitted: null,
      propsDefaults: Ke,
      inheritAttrs: o.inheritAttrs,
      ctx: Ke,
      data: Ke,
      props: Ke,
      attrs: Ke,
      slots: Ke,
      refs: Ke,
      setupState: Ke,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
  return a.ctx = {
    _: a
  }, a.root = t ? t.root : a, a.emit = Av.bind(null, a), e.ce && e.ce(a), a
}
let mt = null;
const ln = () => mt || ut;
let qs, Il;
{
  const e = Cd(),
    t = (n, o) => {
      let s;
      return (s = e[n]) || (s = e[n] = []), s.push(o), a => {
        s.length > 1 ? s.forEach(l => l(a)) : s[0](a)
      }
    };
  qs = t("__VUE_INSTANCE_SETTERS__", n => mt = n), Il = t("__VUE_SSR_SETTERS__", n => ga = n)
}
const as = e => {
    const t = mt;
    return qs(e), e.scope.on(), () => {
      e.scope.off(), qs(t)
    }
  },
  wc = () => {
    mt && mt.scope.off(), qs(null)
  };

function Of(e) {
  return e.vnode.shapeFlag & 4
}
let ga = !1;

function zv(e, t = !1, n = !1) {
  t && Il(t);
  const {
    props: o,
    children: s
  } = e.vnode, a = Of(e);
  hv(e, o, a, t), yv(e, s, n);
  const l = a ? Vv(e, t) : void 0;
  return t && Il(!1), l
}

function Vv(e, t) {
  const n = e.type;
  e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, iv);
  const {
    setup: o
  } = n;
  if (o) {
    const s = e.setupContext = o.length > 1 ? Uv(e) : null,
      a = as(e);
    ho();
    const l = is(o, e, 0, [e.props, s]);
    if (mo(), a(), yd(l)) {
      if (oi(e) || af(e), l.then(wc, wc), t) return l.then(r => {
        Cc(e, r, t)
      }).catch(r => {
        da(r, e, 0)
      });
      e.asyncDep = l
    } else Cc(e, l, t)
  } else Bf(e, t)
}

function Cc(e, t, n) {
  Ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) && (e.setupState = jd(t)), Bf(e, n)
}
let _c;

function Bf(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && _c && !o.render) {
      const s = o.template || hr(e).template;
      if (s) {
        const {
          isCustomElement: a,
          compilerOptions: l
        } = e.appContext.config, {
          delimiters: r,
          compilerOptions: c
        } = o, u = ft(ft({
          isCustomElement: a,
          delimiters: r
        }, l), c);
        o.render = _c(s, u)
      }
    }
    e.render = o.render || bn
  } {
    const s = as(e);
    ho();
    try {
      sv(e)
    } finally {
      mo(), s()
    }
  }
}
const Hv = {
  get(e, t) {
    return kt(e, "get", ""), e[t]
  }
};

function Uv(e) {
  const t = n => {
    e.exposed = n || {}
  };
  return {
    attrs: new Proxy(e.attrs, Hv),
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}

function va(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(jd(ur(e.exposed)), {
    get(t, n) {
      if (n in t) return t[n];
      if (n in Ni) return Ni[n](e)
    },
    has(t, n) {
      return n in t || n in Ni
    }
  })) : e.proxy
}

function Wv(e, t = !0) {
  return Ee(e) ? e.displayName || e.name : e.name || t && e.__name
}

function jv(e) {
  return Ee(e) && "__vccOpts" in e
}
const N = (e, t) => Lg(e, t, ga);

function pr(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Je(t) && !xe(t) ? ui(t) ? h(e, null, [t]) : h(e, t) : h(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && ui(n) && (n = [n]), h(e, t, n))
}
const Qv = "3.5.11";
/**
 * @vue/runtime-dom v3.5.11
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Pl;
const kc = typeof window < "u" && window.trustedTypes;
if (kc) try {
  Pl = kc.createPolicy("vue", {
    createHTML: e => e
  })
} catch {}
const Rf = Pl ? e => Pl.createHTML(e) : e => e,
  Kv = "http://www.w3.org/2000/svg",
  Yv = "http://www.w3.org/1998/Math/MathML",
  Pn = typeof document < "u" ? document : null,
  Sc = Pn && Pn.createElement("template"),
  qv = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: e => {
      const t = e.parentNode;
      t && t.removeChild(e)
    },
    createElement: (e, t, n, o) => {
      const s = t === "svg" ? Pn.createElementNS(Kv, e) : t === "mathml" ? Pn.createElementNS(Yv, e) : n ? Pn.createElement(e, {
        is: n
      }) : Pn.createElement(e);
      return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s
    },
    createText: e => Pn.createTextNode(e),
    createComment: e => Pn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Pn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, o, s, a) {
      const l = n ? n.previousSibling : t.lastChild;
      if (s && (s === a || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === a || !(s = s.nextSibling)););
      else {
        Sc.innerHTML = Rf(o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e);
        const r = Sc.content;
        if (o === "svg" || o === "mathml") {
          const c = r.firstChild;
          for (; c.firstChild;) r.appendChild(c.firstChild);
          r.removeChild(c)
        }
        t.insertBefore(r, n)
      }
      return [l ? l.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  },
  Qn = "transition",
  ki = "animation",
  Xi = Symbol("_vtc"),
  Df = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  },
  Gv = ft({}, ef, Df),
  Zv = e => (e.displayName = "Transition", e.props = Gv, e),
  ya = Zv((e, {
    slots: t
  }) => pr(Yg, Xv(e), t)),
  _o = (e, t = []) => {
    xe(e) ? e.forEach(n => n(...t)) : e && e(...t)
  },
  Tc = e => e ? xe(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Xv(e) {
  const t = {};
  for (const P in e) P in Df || (t[P] = e[P]);
  if (e.css === !1) return t;
  const {
    name: n = "v",
    type: o,
    duration: s,
    enterFromClass: a = `${n}-enter-from`,
    enterActiveClass: l = `${n}-enter-active`,
    enterToClass: r = `${n}-enter-to`,
    appearFromClass: c = a,
    appearActiveClass: u = l,
    appearToClass: d = r,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: m = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, p = Jv(s), y = p && p[0], b = p && p[1], {
    onBeforeEnter: w,
    onEnter: v,
    onEnterCancelled: C,
    onLeave: _,
    onLeaveCancelled: k,
    onBeforeAppear: I = w,
    onAppear: D = v,
    onAppearCancelled: S = C
  } = t, B = (P, M, J) => {
    ko(P, M ? d : r), ko(P, M ? u : l), J && J()
  }, R = (P, M) => {
    P._isLeaving = !1, ko(P, f), ko(P, g), ko(P, m), M && M()
  }, x = P => (M, J) => {
    const ce = P ? D : v,
      W = () => B(M, P, J);
    _o(ce, [M, W]), xc(() => {
      ko(M, P ? c : a), Kn(M, P ? d : r), Tc(ce) || Ac(M, o, y, W)
    })
  };
  return ft(t, {
    onBeforeEnter(P) {
      _o(w, [P]), Kn(P, a), Kn(P, l)
    },
    onBeforeAppear(P) {
      _o(I, [P]), Kn(P, c), Kn(P, u)
    },
    onEnter: x(!1),
    onAppear: x(!0),
    onLeave(P, M) {
      P._isLeaving = !0;
      const J = () => R(P, M);
      Kn(P, f), Kn(P, m), ny(), xc(() => {
        P._isLeaving && (ko(P, f), Kn(P, g), Tc(_) || Ac(P, o, b, J))
      }), _o(_, [P, J])
    },
    onEnterCancelled(P) {
      B(P, !1), _o(C, [P])
    },
    onAppearCancelled(P) {
      B(P, !0), _o(S, [P])
    },
    onLeaveCancelled(P) {
      R(P), _o(k, [P])
    }
  })
}

function Jv(e) {
  if (e == null) return null;
  if (Je(e)) return [ja(e.enter), ja(e.leave)];
  {
    const t = ja(e);
    return [t, t]
  }
}

function ja(e) {
  return Jm(e)
}

function Kn(e, t) {
  t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[Xi] || (e[Xi] = new Set)).add(t)
}

function ko(e, t) {
  t.split(/\s+/).forEach(o => o && e.classList.remove(o));
  const n = e[Xi];
  n && (n.delete(t), n.size || (e[Xi] = void 0))
}

function xc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let ey = 0;

function Ac(e, t, n, o) {
  const s = e._endId = ++ey,
    a = () => {
      s === e._endId && o()
    };
  if (n != null) return setTimeout(a, n);
  const {
    type: l,
    timeout: r,
    propCount: c
  } = ty(e, t);
  if (!l) return o();
  const u = l + "end";
  let d = 0;
  const f = () => {
      e.removeEventListener(u, m), a()
    },
    m = g => {
      g.target === e && ++d >= c && f()
    };
  setTimeout(() => {
    d < c && f()
  }, r + 1), e.addEventListener(u, m)
}

function ty(e, t) {
  const n = window.getComputedStyle(e),
    o = p => (n[p] || "").split(", "),
    s = o(`${Qn}Delay`),
    a = o(`${Qn}Duration`),
    l = Ec(s, a),
    r = o(`${ki}Delay`),
    c = o(`${ki}Duration`),
    u = Ec(r, c);
  let d = null,
    f = 0,
    m = 0;
  t === Qn ? l > 0 && (d = Qn, f = l, m = a.length) : t === ki ? u > 0 && (d = ki, f = u, m = c.length) : (f = Math.max(l, u), d = f > 0 ? l > u ? Qn : ki : null, m = d ? d === Qn ? a.length : c.length : 0);
  const g = d === Qn && /\b(transform|all)(,|$)/.test(o(`${Qn}Property`).toString());
  return {
    type: d,
    timeout: f,
    propCount: m,
    hasTransform: g
  }
}

function Ec(e, t) {
  for (; e.length < t.length;) e = e.concat(e);
  return Math.max(...t.map((n, o) => Ic(n) + Ic(e[o])))
}

function Ic(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function ny() {
  return document.body.offsetHeight
}

function oy(e, t, n) {
  const o = e[Xi];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Gs = Symbol("_vod"),
  $f = Symbol("_vsh"),
  dt = {
    beforeMount(e, {
      value: t
    }, {
      transition: n
    }) {
      e[Gs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Si(e, t)
    },
    mounted(e, {
      value: t
    }, {
      transition: n
    }) {
      n && t && n.enter(e)
    },
    updated(e, {
      value: t,
      oldValue: n
    }, {
      transition: o
    }) {
      !t != !n && (o ? t ? (o.beforeEnter(e), Si(e, !0), o.enter(e)) : o.leave(e, () => {
        Si(e, !1)
      }) : Si(e, t))
    },
    beforeUnmount(e, {
      value: t
    }) {
      Si(e, t)
    }
  };

function Si(e, t) {
  e.style.display = t ? e[Gs] : "none", e[$f] = !t
}
const iy = Symbol(""),
  sy = /(^|;)\s*display\s*:/;

function ay(e, t, n) {
  const o = e.style,
    s = tt(n);
  let a = !1;
  if (n && !s) {
    if (t)
      if (tt(t))
        for (const l of t.split(";")) {
          const r = l.slice(0, l.indexOf(":")).trim();
          n[r] == null && Fs(o, r, "")
        } else
          for (const l in t) n[l] == null && Fs(o, l, "");
    for (const l in n) l === "display" && (a = !0), Fs(o, l, n[l])
  } else if (s) {
    if (t !== n) {
      const l = o[iy];
      l && (n += ";" + l), o.cssText = n, a = sy.test(n)
    }
  } else t && e.removeAttribute("style");
  Gs in e && (e[Gs] = a ? o.display : "", e[$f] && (o.display = "none"))
}
const Pc = /\s*!important$/;

function Fs(e, t, n) {
  if (xe(n)) n.forEach(o => Fs(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const o = ly(e, t);
    Pc.test(n) ? e.setProperty(zn(o), n.replace(Pc, ""), "important") : e[o] = n
  }
}
const Oc = ["Webkit", "Moz", "ms"],
  Qa = {};

function ly(e, t) {
  const n = Qa[t];
  if (n) return n;
  let o = Qt(t);
  if (o !== "filter" && o in e) return Qa[t] = o;
  o = ra(o);
  for (let s = 0; s < Oc.length; s++) {
    const a = Oc[s] + o;
    if (a in e) return Qa[t] = a
  }
  return t
}
const Bc = "http://www.w3.org/1999/xlink";

function Rc(e, t, n, o, s, a = ag(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Bc, t.slice(6, t.length)) : e.setAttributeNS(Bc, t, n) : n == null || a && !_d(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : fo(n) ? String(n) : n)
}

function Dc(e, t, n, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Rf(n) : n);
    return
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value,
      r = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (l !== r || !("_value" in e)) && (e.value = r), n == null && e.removeAttribute(t), e._value = n;
    return
  }
  let a = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = _d(n) : n == null && l === "string" ? (n = "", a = !0) : l === "number" && (n = 0, a = !0)
  }
  try {
    e[t] = n
  } catch {}
  a && e.removeAttribute(t)
}

function ry(e, t, n, o) {
  e.addEventListener(t, n, o)
}

function cy(e, t, n, o) {
  e.removeEventListener(t, n, o)
}
const $c = Symbol("_vei");

function uy(e, t, n, o, s = null) {
  const a = e[$c] || (e[$c] = {}),
    l = a[t];
  if (o && l) l.value = o;
  else {
    const [r, c] = dy(t);
    if (o) {
      const u = a[t] = my(o, s);
      ry(e, r, u, c)
    } else l && (cy(e, r, l, c), a[t] = void 0)
  }
}
const Mc = /(?:Once|Passive|Capture)$/;

function dy(e) {
  let t;
  if (Mc.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Mc);) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0
  }
  return [e[2] === ":" ? e.slice(3) : zn(e.slice(2)), t]
}
let Ka = 0;
const fy = Promise.resolve(),
  hy = () => Ka || (fy.then(() => Ka = 0), Ka = Date.now());

function my(e, t) {
  const n = o => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= n.attached) return;
    on(gy(o, n.value), t, 5, [o])
  };
  return n.value = e, n.attached = hy(), n
}

function gy(e, t) {
  if (xe(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0
    }, t.map(o => s => !s._stopped && o && o(s))
  } else return t
}
const Lc = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
  vy = (e, t, n, o, s, a) => {
    const l = s === "svg";
    t === "class" ? oy(e, o, l) : t === "style" ? ay(e, n, o) : sa(t) ? Jl(t) || uy(e, t, n, o, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : yy(e, t, o, l)) ? (Dc(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Rc(e, t, o, l, a, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !tt(o)) ? Dc(e, Qt(t), o) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Rc(e, t, o, l))
  };

function yy(e, t, n, o) {
  if (o) return !!(t === "innerHTML" || t === "textContent" || t in e && Lc(t) && Ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
  }
  return Lc(t) && tt(n) ? !1 : t in e
}
const py = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  },
  by = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      o = t.join(".");
    return n[o] || (n[o] = s => {
      if (!("key" in s)) return;
      const a = zn(s.key);
      if (t.some(l => l === a || py[l] === a)) return e(s)
    })
  },
  wy = ft({
    patchProp: vy
  }, qv);
let Nc;

function Cy() {
  return Nc || (Nc = bv(wy))
}
const Mf = (...e) => {
  const t = Cy().createApp(...e),
    {
      mount: n
    } = t;
  return t.mount = o => {
    const s = ky(o);
    if (!s) return;
    const a = t._component;
    !Ee(a) && !a.render && !a.template && (a.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const l = n(s, !1, _y(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l
  }, t
};

function _y(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function ky(e) {
  return tt(e) ? document.querySelector(e) : e
}
var go = typeof window < "u";

function _t(e) {
  return go ? requestAnimationFrame(e) : -1
}

function pa(e) {
  go && cancelAnimationFrame(e)
}

function so(e) {
  _t(() => _t(e))
}
var Sy = e => e === window,
  Fc = (e, t) => ({
    top: 0,
    left: 0,
    right: e,
    bottom: t,
    width: e,
    height: t
  }),
  Ue = e => {
    const t = en(e);
    if (Sy(t)) {
      const n = t.innerWidth,
        o = t.innerHeight;
      return Fc(n, o)
    }
    return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : Fc(0, 0)
  };

function Ty(e = !1) {
  const t = F(e);
  return [t, (o = !t.value) => {
    t.value = o
  }]
}

function pt(e) {
  const t = Bt(e, null);
  if (t) {
    const n = ln(),
      {
        link: o,
        unlink: s,
        internalChildren: a
      } = t;
    o(n), gi(() => s(n));
    const l = N(() => a.indexOf(n));
    return {
      parent: t,
      index: l
    }
  }
  return {
    parent: null,
    index: F(-1)
  }
}

function xy(e) {
  const t = [],
    n = o => {
      Array.isArray(o) && o.forEach(s => {
        var a;
        ui(s) && (t.push(s), (a = s.component) != null && a.subTree && (t.push(s.component.subTree), n(s.component.subTree.children)), s.children && n(s.children))
      })
    };
  return n(e), t
}
var zc = (e, t) => {
  const n = e.indexOf(t);
  return n === -1 ? e.findIndex(o => t.key !== void 0 && t.key !== null && o.type === t.type && o.key === t.key) : n
};

function Ay(e, t, n) {
  const o = xy(e.subTree.children);
  n.sort((a, l) => zc(o, a.vnode) - zc(o, l.vnode));
  const s = n.map(a => a.proxy);
  t.sort((a, l) => {
    const r = s.indexOf(a),
      c = s.indexOf(l);
    return r - c
  })
}

function xt(e) {
  const t = Ze([]),
    n = Ze([]),
    o = ln();
  return {
    children: t,
    linkChildren: a => {
      Dn(e, Object.assign({
        link: c => {
          c.proxy && (n.push(c), t.push(c.proxy), Ay(o, t, n))
        },
        unlink: c => {
          const u = n.indexOf(c);
          t.splice(u, 1), n.splice(u, 1)
        },
        children: t,
        internalChildren: n
      }, a))
    }
  }
}
var Ol = 1e3,
  Bl = 60 * Ol,
  Rl = 60 * Bl,
  Vc = 24 * Rl;

function Ey(e) {
  const t = Math.floor(e / Vc),
    n = Math.floor(e % Vc / Rl),
    o = Math.floor(e % Rl / Bl),
    s = Math.floor(e % Bl / Ol),
    a = Math.floor(e % Ol);
  return {
    total: e,
    days: t,
    hours: n,
    minutes: o,
    seconds: s,
    milliseconds: a
  }
}

function Iy(e, t) {
  return Math.floor(e / 1e3) === Math.floor(t / 1e3)
}

function Py(e) {
  let t, n, o, s;
  const a = F(e.time),
    l = N(() => Ey(a.value)),
    r = () => {
      o = !1, pa(t)
    },
    c = () => Math.max(n - Date.now(), 0),
    u = y => {
      var b, w;
      a.value = y, (b = e.onChange) == null || b.call(e, l.value), y === 0 && (r(), (w = e.onFinish) == null || w.call(e))
    },
    d = () => {
      t = _t(() => {
        o && (u(c()), a.value > 0 && d())
      })
    },
    f = () => {
      t = _t(() => {
        if (o) {
          const y = c();
          (!Iy(y, a.value) || y === 0) && u(y), a.value > 0 && f()
        }
      })
    },
    m = () => {
      go && (e.millisecond ? d() : f())
    },
    g = () => {
      o || (n = Date.now() + a.value, o = !0, m())
    },
    p = (y = e.time) => {
      r(), a.value = y
    };
  return kn(r), Cn(() => {
    s && (o = !0, s = !1, m())
  }), _n(() => {
    o && (r(), s = !0)
  }), {
    start: g,
    pause: r,
    reset: p,
    current: l
  }
}

function yi(e) {
  let t;
  at(() => {
    e(), Oe(() => {
      t = !0
    })
  }), Cn(() => {
    t && e()
  })
}

function st(e, t, n = {}) {
  if (!go) return;
  const {
    target: o = window,
    passive: s = !1,
    capture: a = !1
  } = n;
  let l = !1,
    r;
  const c = f => {
      if (l) return;
      const m = en(f);
      m && !r && (m.addEventListener(e, t, {
        capture: a,
        passive: s
      }), r = !0)
    },
    u = f => {
      if (l) return;
      const m = en(f);
      m && r && (m.removeEventListener(e, t, a), r = !1)
    };
  gi(() => u(o)), _n(() => u(o)), yi(() => c(o));
  let d;
  return it(o) && (d = re(o, (f, m) => {
    u(m), c(f)
  })), () => {
    d == null || d(), u(o), l = !0
  }
}

function ba(e, t, n = {}) {
  if (!go) return;
  const {
    eventName: o = "click"
  } = n;
  st(o, a => {
    (Array.isArray(e) ? e : [e]).every(c => {
      const u = en(c);
      return u && !u.contains(a.target)
    }) && t(a)
  }, {
    target: document
  })
}
var vs, Ya;

function Oy() {
  if (!vs && (vs = F(0), Ya = F(0), go)) {
    const e = () => {
      vs.value = window.innerWidth, Ya.value = window.innerHeight
    };
    e(), window.addEventListener("resize", e, {
      passive: !0
    }), window.addEventListener("orientationchange", e, {
      passive: !0
    })
  }
  return {
    width: vs,
    height: Ya
  }
}
var By = /scroll|auto|overlay/i,
  Lf = go ? window : void 0;

function Ry(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1
}

function br(e, t = Lf) {
  let n = e;
  for (; n && n !== t && Ry(n);) {
    const {
      overflowY: o
    } = window.getComputedStyle(n);
    if (By.test(o)) return n;
    n = n.parentNode
  }
  return t
}

function pi(e, t = Lf) {
  const n = F();
  return at(() => {
    e.value && (n.value = br(e.value, t))
  }), n
}
var ys;

function Dy() {
  if (!ys && (ys = F("visible"), go)) {
    const e = () => {
      ys.value = document.hidden ? "hidden" : "visible"
    };
    e(), window.addEventListener("visibilitychange", e)
  }
  return ys
}
var Nf = Symbol("van-field");

function vo(e) {
  const t = Bt(Nf, null);
  t && !t.customValue.value && (t.customValue.value = e, re(e, () => {
    t.resetValidation(), t.validateWithTrigger("onChange")
  }))
}

function Ln(e) {
  const t = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(t, 0)
}

function Zs(e, t) {
  "scrollTop" in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t)
}

function Oo() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}

function Ji(e) {
  Zs(window, e), Zs(document.body, e)
}

function Hc(e, t) {
  if (e === window) return 0;
  const n = t ? Ln(t) : Oo();
  return Ue(e).top + n
}
const $y = jm();

function Ff() {
  $y && Ji(Oo())
}
const wr = e => e.stopPropagation();

function Ge(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && wr(e)
}

function Do(e) {
  const t = en(e);
  if (!t) return !1;
  const n = window.getComputedStyle(t),
    o = n.display === "none",
    s = t.offsetParent === null && n.position !== "fixed";
  return o || s
}
const {
  width: tn,
  height: jt
} = Oy();

function My(e) {
  const t = window.getComputedStyle(e);
  return t.transform !== "none" || t.perspective !== "none" || ["transform", "perspective", "filter"].some(n => (t.willChange || "").includes(n))
}

function Ly(e) {
  let t = e.parentElement;
  for (; t;) {
    if (t && t.tagName !== "HTML" && t.tagName !== "BODY" && My(t)) return t;
    t = t.parentElement
  }
  return null
}

function Ie(e) {
  if (Fe(e)) return gd(e) ? `${e}px` : String(e)
}

function Hn(e) {
  if (Fe(e)) {
    if (Array.isArray(e)) return {
      width: Ie(e[0]),
      height: Ie(e[1])
    };
    const t = Ie(e);
    return {
      width: t,
      height: t
    }
  }
}

function Un(e) {
  const t = {};
  return e !== void 0 && (t.zIndex = +e), t
}
let qa;

function Ny() {
  if (!qa) {
    const e = document.documentElement,
      t = e.style.fontSize || window.getComputedStyle(e).fontSize;
    qa = parseFloat(t)
  }
  return qa
}

function Fy(e) {
  return e = e.replace(/rem/g, ""), +e * Ny()
}

function zy(e) {
  return e = e.replace(/vw/g, ""), +e * tn.value / 100
}

function Vy(e) {
  return e = e.replace(/vh/g, ""), +e * jt.value / 100
}

function Cr(e) {
  if (typeof e == "number") return e;
  if (zt) {
    if (e.includes("rem")) return Fy(e);
    if (e.includes("vw")) return zy(e);
    if (e.includes("vh")) return Vy(e)
  }
  return parseFloat(e)
}
const Hy = /-(\w)/g,
  zf = e => e.replace(Hy, (t, n) => n.toUpperCase()),
  Uy = e => e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");

function Xt(e, t = 2) {
  let n = e + "";
  for (; n.length < t;) n = "0" + n;
  return n
}
const ht = (e, t, n) => Math.min(Math.max(e, t), n);

function Uc(e, t, n) {
  const o = e.indexOf(t);
  return o === -1 ? e : t === "-" && o !== 0 ? e.slice(0, o) : e.slice(0, o + 1) + e.slice(o).replace(n, "")
}

function Dl(e, t = !0, n = !0) {
  t ? e = Uc(e, ".", /\./g) : e = e.split(".")[0], n ? e = Uc(e, "-", /-/g) : e = e.replace(/-/, "");
  const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(o, "")
}

function Vf(e, t) {
  return Math.round((e + t) * 1e10) / 1e10
}
const {
  hasOwnProperty: Wy
} = Object.prototype;

function jy(e, t, n) {
  const o = t[n];
  Fe(o) && (!Wy.call(e, n) || !wn(o) ? e[n] = o : e[n] = Hf(Object(e[n]), o))
}

function Hf(e, t) {
  return Object.keys(t).forEach(n => {
    jy(e, t, n)
  }), e
}
var Qy = {
  name: "姓名",
  tel: "电话",
  save: "保存",
  clear: "清空",
  cancel: "取消",
  confirm: "确认",
  delete: "删除",
  loading: "加载中...",
  noCoupon: "暂无优惠券",
  nameEmpty: "请填写姓名",
  addContact: "添加联系人",
  telInvalid: "请填写正确的电话",
  vanCalendar: {
    end: "结束",
    start: "开始",
    title: "日期选择",
    weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    monthTitle: (e, t) => `${e}年${t}月`,
    rangePrompt: e => `最多选择 ${e} 天`
  },
  vanCascader: {
    select: "请选择"
  },
  vanPagination: {
    prev: "上一页",
    next: "下一页"
  },
  vanPullRefresh: {
    pulling: "下拉即可刷新...",
    loosing: "释放即可刷新..."
  },
  vanSubmitBar: {
    label: "合计:"
  },
  vanCoupon: {
    unlimited: "无门槛",
    discount: e => `${e}折`,
    condition: e => `满${e}元可用`
  },
  vanCouponCell: {
    title: "优惠券",
    count: e => `${e}张可用`
  },
  vanCouponList: {
    exchange: "兑换",
    close: "不使用",
    enable: "可用",
    disabled: "不可用",
    placeholder: "输入优惠码"
  },
  vanAddressEdit: {
    area: "地区",
    areaEmpty: "请选择地区",
    addressEmpty: "请填写详细地址",
    addressDetail: "详细地址",
    defaultAddress: "设为默认收货地址"
  },
  vanAddressList: {
    add: "新增地址"
  }
};
const Wc = F("zh-CN"),
  jc = Ze({
    "zh-CN": Qy
  }),
  Uf = {
    messages() {
      return jc[Wc.value]
    },
    use(e, t) {
      Wc.value = e, this.add({
        [e]: t
      })
    },
    add(e = {}) {
      Hf(jc, e)
    }
  };
var Ky = Uf;

function Yy(e) {
  const t = zf(e) + ".";
  return (n, ...o) => {
    const s = Ky.messages(),
      a = Jr(s, t + n) || Jr(s, n);
    return ci(a) ? a(...o) : a
  }
}

function $l(e, t) {
  return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce((n, o) => n + $l(e, o), "") : Object.keys(t).reduce((n, o) => n + (t[o] ? $l(e, o) : ""), "") : ""
}

function qy(e) {
  return (t, n) => (t && typeof t != "string" && (n = t, t = ""), t = t ? `${e}__${t}` : e, `${t}${$l(t,n)}`)
}

function Y(e) {
  const t = `van-${e}`;
  return [t, qy(t), Yy(t)]
}
const Wn = "van-hairline",
  Wf = `${Wn}--top`,
  jf = `${Wn}--left`,
  Gy = `${Wn}--right`,
  _r = `${Wn}--bottom`,
  zi = `${Wn}--surround`,
  wa = `${Wn}--top-bottom`,
  Zy = `${Wn}-unset--top-bottom`,
  St = "van-haptics-feedback",
  Qf = Symbol("van-form"),
  Kf = 500,
  Qc = 5;

function yo(e, {
  args: t = [],
  done: n,
  canceled: o,
  error: s
}) {
  if (e) {
    const a = e.apply(null, t);
    Zl(a) ? a.then(l => {
      l ? n() : o && o()
    }).catch(s || bl) : a ? n() : o && o()
  } else n()
}

function ee(e) {
  return e.install = t => {
    const {
      name: n
    } = e;
    n && (t.component(n, e), t.component(zf(`-${n}`), e))
  }, e
}

function Xs(e, t) {
  return e.reduce((n, o) => Math.abs(n - t) < Math.abs(o - t) ? n : o)
}
const Yf = Symbol();

function Ca(e) {
  const t = Bt(Yf, null);
  t && re(t, n => {
    n && e()
  })
}
const qf = (e, t) => {
  const n = F(),
    o = () => {
      n.value = Ue(e).height
    };
  return at(() => {
    if (Oe(o), t)
      for (let s = 1; s <= 3; s++) setTimeout(o, 100 * s)
  }), Ca(() => Oe(o)), re([tn, jt], o), n
};

function _a(e, t) {
  const n = qf(e, !0);
  return o => h("div", {
    class: t("placeholder"),
    style: {
      height: n.value ? `${n.value}px` : void 0
    }
  }, [o()])
}
const [Gf, Kc] = Y("action-bar"), kr = Symbol(Gf), Xy = {
  placeholder: Boolean,
  safeAreaInsetBottom: j
};
var Jy = K({
  name: Gf,
  props: Xy,
  setup(e, {
    slots: t
  }) {
    const n = F(),
      o = _a(n, Kc),
      {
        linkChildren: s
      } = xt(kr);
    s();
    const a = () => {
      var l;
      return h("div", {
        ref: n,
        class: [Kc(), {
          "van-safe-area-bottom": e.safeAreaInsetBottom
        }]
      }, [(l = t.default) == null ? void 0 : l.call(t)])
    };
    return () => e.placeholder ? o(a) : a()
  }
});
const Zf = ee(Jy);

function $e(e) {
  const t = ln();
  t && ke(t.proxy, e)
}
const po = {
  to: [String, Object],
  url: String,
  replace: Boolean
};

function Xf({
  to: e,
  url: t,
  replace: n,
  $router: o
}) {
  e && o ? o[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t)
}

function Mo() {
  const e = ln().proxy;
  return () => Xf(e)
}
const [ep, Yc] = Y("badge"), tp = {
  dot: Boolean,
  max: Z,
  tag: te("div"),
  color: String,
  offset: Array,
  content: Z,
  showZero: j,
  position: te("top-right")
};
var np = K({
  name: ep,
  props: tp,
  setup(e, {
    slots: t
  }) {
    const n = () => {
        if (t.content) return !0;
        const {
          content: r,
          showZero: c
        } = e;
        return Fe(r) && r !== "" && (c || r !== 0 && r !== "0")
      },
      o = () => {
        const {
          dot: r,
          max: c,
          content: u
        } = e;
        if (!r && n()) return t.content ? t.content() : Fe(c) && gd(u) && +u > +c ? `${c}+` : u
      },
      s = r => r.startsWith("-") ? r.replace("-", "") : `-${r}`,
      a = N(() => {
        const r = {
          background: e.color
        };
        if (e.offset) {
          const [c, u] = e.offset, {
            position: d
          } = e, [f, m] = d.split("-");
          t.default ? (typeof u == "number" ? r[f] = Ie(f === "top" ? u : -u) : r[f] = f === "top" ? Ie(u) : s(u), typeof c == "number" ? r[m] = Ie(m === "left" ? c : -c) : r[m] = m === "left" ? Ie(c) : s(c)) : (r.marginTop = Ie(u), r.marginLeft = Ie(c))
        }
        return r
      }),
      l = () => {
        if (n() || e.dot) return h("div", {
          class: Yc([e.position, {
            dot: e.dot,
            fixed: !!t.default
          }]),
          style: a.value
        }, [o()])
      };
    return () => {
      if (t.default) {
        const {
          tag: r
        } = e;
        return h(r, {
          class: Yc("wrapper")
        }, {
          default: () => [t.default(), l()]
        })
      }
      return l()
    }
  }
});
const Lo = ee(np);
let Jf = 2e3;
const op = () => ++Jf,
  ip = e => {
    Jf = e
  },
  [eh, sp] = Y("config-provider"),
  th = Symbol(eh),
  ap = {
    tag: te("div"),
    theme: te("light"),
    zIndex: Number,
    themeVars: Object,
    themeVarsDark: Object,
    themeVarsLight: Object,
    themeVarsScope: te("local"),
    iconPrefix: String
  };

function lp(e) {
  return e.replace(/([a-zA-Z])(\d)/g, "$1-$2")
}

function rp(e) {
  const t = {};
  return Object.keys(e).forEach(n => {
    const o = lp(Uy(n));
    t[`--van-${o}`] = e[n]
  }), t
}

function ps(e = {}, t = {}) {
  Object.keys(e).forEach(n => {
    e[n] !== t[n] && document.documentElement.style.setProperty(n, e[n])
  }), Object.keys(t).forEach(n => {
    e[n] || document.documentElement.style.removeProperty(n)
  })
}
var cp = K({
  name: eh,
  props: ap,
  setup(e, {
    slots: t
  }) {
    const n = N(() => rp(ke({}, e.themeVars, e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight)));
    if (zt) {
      const o = () => {
          document.documentElement.classList.add(`van-theme-${e.theme}`)
        },
        s = (a = e.theme) => {
          document.documentElement.classList.remove(`van-theme-${a}`)
        };
      re(() => e.theme, (a, l) => {
        l && s(l), o()
      }, {
        immediate: !0
      }), Cn(o), _n(s), kn(s), re(n, (a, l) => {
        e.themeVarsScope === "global" && ps(a, l)
      }), re(() => e.themeVarsScope, (a, l) => {
        l === "global" && ps({}, n.value), a === "global" && ps(n.value, {})
      }), e.themeVarsScope === "global" && ps(n.value, {})
    }
    return Dn(th, e), vi(() => {
      e.zIndex !== void 0 && ip(e.zIndex)
    }), () => h(e.tag, {
      class: sp(),
      style: e.themeVarsScope === "local" ? n.value : void 0
    }, {
      default: () => {
        var o;
        return [(o = t.default) == null ? void 0 : o.call(t)]
      }
    })
  }
});
const [up, qc] = Y("icon"), dp = e => e == null ? void 0 : e.includes("/"), fp = {
  dot: Boolean,
  tag: te("i"),
  name: String,
  size: Z,
  badge: Z,
  color: String,
  badgeProps: Object,
  classPrefix: String
};
var hp = K({
  name: up,
  props: fp,
  setup(e, {
    slots: t
  }) {
    const n = Bt(th, null),
      o = N(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || qc());
    return () => {
      const {
        tag: s,
        dot: a,
        name: l,
        size: r,
        badge: c,
        color: u
      } = e, d = dp(l);
      return h(Lo, De({
        dot: a,
        tag: s,
        class: [o.value, d ? "" : `${o.value}-${l}`],
        style: {
          color: u,
          fontSize: Ie(r)
        },
        content: c
      }, e.badgeProps), {
        default: () => {
          var f;
          return [(f = t.default) == null ? void 0 : f.call(t), d && h("img", {
            class: qc("image"),
            src: l
          }, null)]
        }
      })
    }
  }
});
const Pe = ee(hp);
var mp = Pe;
const [gp, Vi] = Y("loading"), vp = Array(12).fill(null).map((e, t) => h("i", {
  class: Vi("line", String(t + 1))
}, null)), yp = h("svg", {
  class: Vi("circular"),
  viewBox: "25 25 50 50"
}, [h("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
}, null)]), pp = {
  size: Z,
  type: te("circular"),
  color: String,
  vertical: Boolean,
  textSize: Z,
  textColor: String
};
var bp = K({
  name: gp,
  props: pp,
  setup(e, {
    slots: t
  }) {
    const n = N(() => ke({
        color: e.color
      }, Hn(e.size))),
      o = () => {
        const a = e.type === "spinner" ? vp : yp;
        return h("span", {
          class: Vi("spinner", e.type),
          style: n.value
        }, [t.icon ? t.icon() : a])
      },
      s = () => {
        var a;
        if (t.default) return h("span", {
          class: Vi("text"),
          style: {
            fontSize: Ie(e.textSize),
            color: (a = e.textColor) != null ? a : e.color
          }
        }, [t.default()])
      };
    return () => {
      const {
        type: a,
        vertical: l
      } = e;
      return h("div", {
        class: Vi([a, {
          vertical: l
        }]),
        "aria-live": "polite",
        "aria-busy": !0
      }, [o(), s()])
    }
  }
});
const rn = ee(bp),
  [wp, Fo] = Y("button"),
  Cp = ke({}, po, {
    tag: te("button"),
    text: String,
    icon: String,
    type: te("default"),
    size: te("normal"),
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    nativeType: te("button"),
    loadingSize: Z,
    loadingText: String,
    loadingType: String,
    iconPosition: te("left")
  });
var _p = K({
  name: wp,
  props: Cp,
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = Mo(),
      s = () => n.loading ? n.loading() : h(rn, {
        size: e.loadingSize,
        type: e.loadingType,
        class: Fo("loading")
      }, null),
      a = () => {
        if (e.loading) return s();
        if (n.icon) return h("div", {
          class: Fo("icon")
        }, [n.icon()]);
        if (e.icon) return h(Pe, {
          name: e.icon,
          class: Fo("icon"),
          classPrefix: e.iconPrefix
        }, null)
      },
      l = () => {
        let u;
        if (e.loading ? u = e.loadingText : u = n.default ? n.default() : e.text, u) return h("span", {
          class: Fo("text")
        }, [u])
      },
      r = () => {
        const {
          color: u,
          plain: d
        } = e;
        if (u) {
          const f = {
            color: d ? u : "white"
          };
          return d || (f.background = u), u.includes("gradient") ? f.border = 0 : f.borderColor = u, f
        }
      },
      c = u => {
        e.loading ? Ge(u) : e.disabled || (t("click", u), o())
      };
    return () => {
      const {
        tag: u,
        type: d,
        size: f,
        block: m,
        round: g,
        plain: p,
        square: y,
        loading: b,
        disabled: w,
        hairline: v,
        nativeType: C,
        iconPosition: _
      } = e, k = [Fo([d, f, {
        plain: p,
        block: m,
        round: g,
        square: y,
        loading: b,
        disabled: w,
        hairline: v
      }]), {
        [zi]: v
      }];
      return h(u, {
        type: C,
        class: k,
        style: r(),
        disabled: w,
        onClick: c
      }, {
        default: () => [h("div", {
          class: Fo("content")
        }, [_ === "left" && a(), l(), _ === "right" && a()])]
      })
    }
  }
});
const Tt = ee(_p),
  [kp, Sp] = Y("action-bar-button"),
  Tp = ke({}, po, {
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
  });
var xp = K({
  name: kp,
  props: Tp,
  setup(e, {
    slots: t
  }) {
    const n = Mo(),
      {
        parent: o,
        index: s
      } = pt(kr),
      a = N(() => {
        if (o) {
          const r = o.children[s.value - 1];
          return !(r && "isButton" in r)
        }
      }),
      l = N(() => {
        if (o) {
          const r = o.children[s.value + 1];
          return !(r && "isButton" in r)
        }
      });
    return $e({
      isButton: !0
    }), () => {
      const {
        type: r,
        icon: c,
        text: u,
        color: d,
        loading: f,
        disabled: m
      } = e;
      return h(Tt, {
        class: Sp([r, {
          last: l.value,
          first: a.value
        }]),
        size: "large",
        type: r,
        icon: c,
        color: d,
        loading: f,
        disabled: m,
        onClick: n
      }, {
        default: () => [t.default ? t.default() : u]
      })
    }
  }
});
const Ml = ee(xp),
  [Ap, Ga] = Y("action-bar-icon"),
  Ep = ke({}, po, {
    dot: Boolean,
    text: String,
    icon: String,
    color: String,
    badge: Z,
    iconClass: et,
    badgeProps: Object,
    iconPrefix: String
  });
var Ip = K({
  name: Ap,
  props: Ep,
  setup(e, {
    slots: t
  }) {
    const n = Mo();
    pt(kr);
    const o = () => {
      const {
        dot: s,
        badge: a,
        icon: l,
        color: r,
        iconClass: c,
        badgeProps: u,
        iconPrefix: d
      } = e;
      return t.icon ? h(Lo, De({
        dot: s,
        class: Ga("icon"),
        content: a
      }, u), {
        default: t.icon
      }) : h(Pe, {
        tag: "div",
        dot: s,
        name: l,
        badge: a,
        color: r,
        class: [Ga("icon"), c],
        badgeProps: u,
        classPrefix: d
      }, null)
    };
    return () => h("div", {
      role: "button",
      class: Ga(),
      tabindex: 0,
      onClick: n
    }, [o(), t.default ? t.default() : e.text])
  }
});
const Pp = ee(Ip),
  bi = {
    show: Boolean,
    zIndex: Z,
    overlay: j,
    duration: Z,
    teleport: [String, Object],
    lockScroll: j,
    lazyRender: j,
    beforeClose: Function,
    overlayStyle: Object,
    overlayClass: et,
    transitionAppear: Boolean,
    closeOnClickOverlay: j
  },
  Sr = Object.keys(bi);

function Op(e, t) {
  return e > t ? "horizontal" : t > e ? "vertical" : ""
}

function Kt() {
  const e = F(0),
    t = F(0),
    n = F(0),
    o = F(0),
    s = F(0),
    a = F(0),
    l = F(""),
    r = F(!0),
    c = () => l.value === "vertical",
    u = () => l.value === "horizontal",
    d = () => {
      n.value = 0, o.value = 0, s.value = 0, a.value = 0, l.value = "", r.value = !0
    };
  return {
    move: g => {
      const p = g.touches[0];
      n.value = (p.clientX < 0 ? 0 : p.clientX) - e.value, o.value = p.clientY - t.value, s.value = Math.abs(n.value), a.value = Math.abs(o.value);
      const y = 10;
      (!l.value || s.value < y && a.value < y) && (l.value = Op(s.value, a.value)), r.value && (s.value > Qc || a.value > Qc) && (r.value = !1)
    },
    start: g => {
      d(), e.value = g.touches[0].clientX, t.value = g.touches[0].clientY
    },
    reset: d,
    startX: e,
    startY: t,
    deltaX: n,
    deltaY: o,
    offsetX: s,
    offsetY: a,
    direction: l,
    isVertical: c,
    isHorizontal: u,
    isTap: r
  }
}
let Ti = 0;
const Gc = "van-overflow-hidden";

function nh(e, t) {
  const n = Kt(),
    o = "01",
    s = "10",
    a = d => {
      n.move(d);
      const f = n.deltaY.value > 0 ? s : o,
        m = br(d.target, e.value),
        {
          scrollHeight: g,
          offsetHeight: p,
          scrollTop: y
        } = m;
      let b = "11";
      y === 0 ? b = p >= g ? "00" : "01" : y + p >= g && (b = "10"), b !== "11" && n.isVertical() && !(parseInt(b, 2) & parseInt(f, 2)) && Ge(d, !0)
    },
    l = () => {
      document.addEventListener("touchstart", n.start), document.addEventListener("touchmove", a, {
        passive: !1
      }), Ti || document.body.classList.add(Gc), Ti++
    },
    r = () => {
      Ti && (document.removeEventListener("touchstart", n.start), document.removeEventListener("touchmove", a), Ti--, Ti || document.body.classList.remove(Gc))
    },
    c = () => t() && l(),
    u = () => t() && r();
  yi(c), _n(u), kn(u), re(t, d => {
    d ? l() : r()
  })
}

function Tr(e) {
  const t = F(!1);
  return re(e, n => {
    n && (t.value = n)
  }, {
    immediate: !0
  }), n => () => t.value ? n() : null
}
const Js = () => {
    var e;
    const {
      scopeId: t
    } = ((e = ln()) == null ? void 0 : e.vnode) || {};
    return t ? {
      [t]: ""
    } : null
  },
  [Bp, Rp] = Y("overlay"),
  Dp = {
    show: Boolean,
    zIndex: Z,
    duration: Z,
    className: et,
    lockScroll: j,
    lazyRender: j,
    customStyle: Object,
    teleport: [String, Object]
  };
var $p = K({
  name: Bp,
  props: Dp,
  setup(e, {
    slots: t
  }) {
    const n = F(),
      o = Tr(() => e.show || !e.lazyRender),
      s = l => {
        e.lockScroll && Ge(l, !0)
      },
      a = o(() => {
        var l;
        const r = ke(Un(e.zIndex), e.customStyle);
        return Fe(e.duration) && (r.animationDuration = `${e.duration}s`), rt(h("div", {
          ref: n,
          style: r,
          class: [Rp(), e.className]
        }, [(l = t.default) == null ? void 0 : l.call(t)]), [
          [dt, e.show]
        ])
      });
    return st("touchmove", s, {
      target: n
    }), () => {
      const l = h(ya, {
        name: "van-fade",
        appear: !0
      }, {
        default: a
      });
      return e.teleport ? h($o, {
        to: e.teleport
      }, {
        default: () => [l]
      }) : l
    }
  }
});
const oh = ee($p),
  Mp = ke({}, bi, {
    round: Boolean,
    position: te("center"),
    closeIcon: te("cross"),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: te("top-right"),
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean
  }),
  [Lp, Zc] = Y("popup");
var Np = K({
  name: Lp,
  inheritAttrs: !1,
  props: Mp,
  emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
  setup(e, {
    emit: t,
    attrs: n,
    slots: o
  }) {
    let s, a;
    const l = F(),
      r = F(),
      c = Tr(() => e.show || !e.lazyRender),
      u = N(() => {
        const I = {
          zIndex: l.value
        };
        if (Fe(e.duration)) {
          const D = e.position === "center" ? "animationDuration" : "transitionDuration";
          I[D] = `${e.duration}s`
        }
        return I
      }),
      d = () => {
        s || (s = !0, l.value = e.zIndex !== void 0 ? +e.zIndex : op(), t("open"))
      },
      f = () => {
        s && yo(e.beforeClose, {
          done() {
            s = !1, t("close"), t("update:show", !1)
          }
        })
      },
      m = I => {
        t("clickOverlay", I), e.closeOnClickOverlay && f()
      },
      g = () => {
        if (e.overlay) return h(oh, De({
          show: e.show,
          class: e.overlayClass,
          zIndex: l.value,
          duration: e.duration,
          customStyle: e.overlayStyle,
          role: e.closeOnClickOverlay ? "button" : void 0,
          tabindex: e.closeOnClickOverlay ? 0 : void 0
        }, Js(), {
          onClick: m
        }), {
          default: o["overlay-content"]
        })
      },
      p = I => {
        t("clickCloseIcon", I), f()
      },
      y = () => {
        if (e.closeable) return h(Pe, {
          role: "button",
          tabindex: 0,
          name: e.closeIcon,
          class: [Zc("close-icon", e.closeIconPosition), St],
          classPrefix: e.iconPrefix,
          onClick: p
        }, null)
      };
    let b;
    const w = () => {
        b && clearTimeout(b), b = setTimeout(() => {
          t("opened")
        })
      },
      v = () => t("closed"),
      C = I => t("keydown", I),
      _ = c(() => {
        var I;
        const {
          round: D,
          position: S,
          safeAreaInsetTop: B,
          safeAreaInsetBottom: R
        } = e;
        return rt(h("div", De({
          ref: r,
          style: u.value,
          role: "dialog",
          tabindex: 0,
          class: [Zc({
            round: D,
            [S]: S
          }), {
            "van-safe-area-top": B,
            "van-safe-area-bottom": R
          }],
          onKeydown: C
        }, n, Js()), [(I = o.default) == null ? void 0 : I.call(o), y()]), [
          [dt, e.show]
        ])
      }),
      k = () => {
        const {
          position: I,
          transition: D,
          transitionAppear: S
        } = e, B = I === "center" ? "van-fade" : `van-popup-slide-${I}`;
        return h(ya, {
          name: D || B,
          appear: S,
          onAfterEnter: w,
          onAfterLeave: v
        }, {
          default: _
        })
      };
    return re(() => e.show, I => {
      I && !s && (d(), n.tabindex === 0 && Oe(() => {
        var D;
        (D = r.value) == null || D.focus()
      })), !I && s && (s = !1, t("close"))
    }), $e({
      popupRef: r
    }), nh(r, () => e.show && e.lockScroll), st("popstate", () => {
      e.closeOnPopstate && (f(), a = !1)
    }), at(() => {
      e.show && d()
    }), Cn(() => {
      a && (t("update:show", !0), a = !1)
    }), _n(() => {
      e.show && e.teleport && (f(), a = !0)
    }), Dn(Yf, () => e.show), () => e.teleport ? h($o, {
      to: e.teleport
    }, {
      default: () => [g(), k()]
    }) : h(Be, null, [g(), k()])
  }
});
const cn = ee(Np),
  [Fp, Ht] = Y("action-sheet"),
  zp = ke({}, bi, {
    title: String,
    round: j,
    actions: Xe(),
    closeIcon: te("cross"),
    closeable: j,
    cancelText: String,
    description: String,
    closeOnPopstate: j,
    closeOnClickAction: Boolean,
    safeAreaInsetBottom: j
  }),
  Vp = [...Sr, "round", "closeOnPopstate", "safeAreaInsetBottom"];
var Hp = K({
  name: Fp,
  props: zp,
  emits: ["select", "cancel", "update:show"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const o = f => n("update:show", f),
      s = () => {
        o(!1), n("cancel")
      },
      a = () => {
        if (e.title) return h("div", {
          class: Ht("header")
        }, [e.title, e.closeable && h(Pe, {
          name: e.closeIcon,
          class: [Ht("close"), St],
          onClick: s
        }, null)])
      },
      l = () => {
        if (t.cancel || e.cancelText) return [h("div", {
          class: Ht("gap")
        }, null), h("button", {
          type: "button",
          class: Ht("cancel"),
          onClick: s
        }, [t.cancel ? t.cancel() : e.cancelText])]
      },
      r = f => {
        if (f.icon) return h(Pe, {
          class: Ht("item-icon"),
          name: f.icon
        }, null)
      },
      c = (f, m) => f.loading ? h(rn, {
        class: Ht("loading-icon")
      }, null) : t.action ? t.action({
        action: f,
        index: m
      }) : [h("span", {
        class: Ht("name")
      }, [f.name]), f.subname && h("div", {
        class: Ht("subname")
      }, [f.subname])],
      u = (f, m) => {
        const {
          color: g,
          loading: p,
          callback: y,
          disabled: b,
          className: w
        } = f, v = () => {
          b || p || (y && y(f), e.closeOnClickAction && o(!1), Oe(() => n("select", f, m)))
        };
        return h("button", {
          type: "button",
          style: {
            color: g
          },
          class: [Ht("item", {
            loading: p,
            disabled: b
          }), w],
          onClick: v
        }, [r(f), c(f, m)])
      },
      d = () => {
        if (e.description || t.description) {
          const f = t.description ? t.description() : e.description;
          return h("div", {
            class: Ht("description")
          }, [f])
        }
      };
    return () => h(cn, De({
      class: Ht(),
      position: "bottom",
      "onUpdate:show": o
    }, Ve(e, Vp)), {
      default: () => {
        var f;
        return [a(), d(), h("div", {
          class: Ht("content")
        }, [e.actions.map(u), (f = t.default) == null ? void 0 : f.call(t)]), l()]
      }
    })
  }
});
const Up = ee(Hp),
  [Wp, Bn, Xc] = Y("picker"),
  ih = e => e.find(t => !t.disabled) || e[0];

function jp(e, t) {
  const n = e[0];
  if (n) {
    if (Array.isArray(n)) return "multiple";
    if (t.children in n) return "cascade"
  }
  return "default"
}

function zs(e, t) {
  t = ht(t, 0, e.length);
  for (let n = t; n < e.length; n++)
    if (!e[n].disabled) return n;
  for (let n = t - 1; n >= 0; n--)
    if (!e[n].disabled) return n;
  return 0
}
const Jc = (e, t, n) => t !== void 0 && !!e.find(o => o[n.value] === t);

function Ll(e, t, n) {
  const o = e.findIndex(a => a[n.value] === t),
    s = zs(e, o);
  return e[s]
}

function Qp(e, t, n) {
  const o = [];
  let s = {
      [t.children]: e
    },
    a = 0;
  for (; s && s[t.children];) {
    const l = s[t.children],
      r = n.value[a];
    if (s = Fe(r) ? Ll(l, r, t) : void 0, !s && l.length) {
      const c = ih(l)[t.value];
      s = Ll(l, c, t)
    }
    a++, o.push(l)
  }
  return o
}

function Kp(e) {
  const {
    transform: t
  } = window.getComputedStyle(e), n = t.slice(7, t.length - 1).split(", ")[5];
  return Number(n)
}

function Yp(e) {
  return ke({
    text: "text",
    value: "value",
    children: "children"
  }, e)
}
const eu = 200,
  tu = 300,
  qp = 15,
  [sh, Za] = Y("picker-column"),
  ah = Symbol(sh);
var Gp = K({
  name: sh,
  props: {
    value: Z,
    fields: gt(Object),
    options: Xe(),
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: gt(Number),
    swipeDuration: gt(Z),
    visibleOptionNum: gt(Z)
  },
  emits: ["change", "clickOption", "scrollInto"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o, s, a, l, r;
    const c = F(),
      u = F(),
      d = F(0),
      f = F(0),
      m = Kt(),
      g = () => e.options.length,
      p = () => e.optionHeight * (+e.visibleOptionNum - 1) / 2,
      y = R => {
        let x = zs(e.options, R);
        const P = -x * e.optionHeight,
          M = () => {
            x > g() - 1 && (x = zs(e.options, R));
            const J = e.options[x][e.fields.value];
            J !== e.value && t("change", J)
          };
        o && P !== d.value ? r = M : M(), d.value = P
      },
      b = () => e.readonly || !e.options.length,
      w = R => {
        o || b() || (r = null, f.value = eu, y(R), t("clickOption", e.options[R]))
      },
      v = R => ht(Math.round(-R / e.optionHeight), 0, g() - 1),
      C = N(() => v(d.value)),
      _ = (R, x) => {
        const P = Math.abs(R / x);
        R = d.value + P / .003 * (R < 0 ? -1 : 1);
        const M = v(R);
        f.value = +e.swipeDuration, y(M)
      },
      k = () => {
        o = !1, f.value = 0, r && (r(), r = null)
      },
      I = R => {
        if (!b()) {
          if (m.start(R), o) {
            const x = Kp(u.value);
            d.value = Math.min(0, x - p())
          }
          f.value = 0, s = d.value, a = Date.now(), l = s, r = null
        }
      },
      D = R => {
        if (b()) return;
        m.move(R), m.isVertical() && (o = !0, Ge(R, !0));
        const x = ht(s + m.deltaY.value, -(g() * e.optionHeight), e.optionHeight),
          P = v(x);
        P !== C.value && t("scrollInto", e.options[P]), d.value = x;
        const M = Date.now();
        M - a > tu && (a = M, l = x)
      },
      S = () => {
        if (b()) return;
        const R = d.value - l,
          x = Date.now() - a;
        if (x < tu && Math.abs(R) > qp) {
          _(R, x);
          return
        }
        const M = v(d.value);
        f.value = eu, y(M), setTimeout(() => {
          o = !1
        }, 0)
      },
      B = () => {
        const R = {
          height: `${e.optionHeight}px`
        };
        return e.options.map((x, P) => {
          const M = x[e.fields.text],
            {
              disabled: J
            } = x,
            ce = x[e.fields.value],
            W = {
              role: "button",
              style: R,
              tabindex: J ? -1 : 0,
              class: [Za("item", {
                disabled: J,
                selected: ce === e.value
              }), x.className],
              onClick: () => w(P)
            },
            ne = {
              class: "van-ellipsis",
              [e.allowHtml ? "innerHTML" : "textContent"]: M
            };
          return h("li", W, [n.option ? n.option(x, P) : h("div", ne, null)])
        })
      };
    return pt(ah), $e({
      stopMomentum: k
    }), vi(() => {
      const R = o ? Math.floor(-d.value / e.optionHeight) : e.options.findIndex(M => M[e.fields.value] === e.value),
        x = zs(e.options, R),
        P = -x * e.optionHeight;
      o && x < R && k(), d.value = P
    }), st("touchmove", D, {
      target: c
    }), () => h("div", {
      ref: c,
      class: Za(),
      onTouchstartPassive: I,
      onTouchend: S,
      onTouchcancel: S
    }, [h("ul", {
      ref: u,
      style: {
        transform: `translate3d(0, ${d.value+p()}px, 0)`,
        transitionDuration: `${f.value}ms`,
        transitionProperty: f.value ? "all" : "none"
      },
      class: Za("wrapper"),
      onTransitionend: k
    }, [B()])])
  }
});
const [Zp] = Y("picker-toolbar"), ka = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String
}, lh = ["cancel", "confirm", "title", "toolbar"], Xp = Object.keys(ka);
var rh = K({
  name: Zp,
  props: ka,
  emits: ["confirm", "cancel"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = () => {
        if (n.title) return n.title();
        if (e.title) return h("div", {
          class: [Bn("title"), "van-ellipsis"]
        }, [e.title])
      },
      s = () => t("cancel"),
      a = () => t("confirm"),
      l = () => {
        var c;
        const u = (c = e.cancelButtonText) != null ? c : Xc("cancel");
        if (!(!n.cancel && !u)) return h("button", {
          type: "button",
          class: [Bn("cancel"), St],
          onClick: s
        }, [n.cancel ? n.cancel() : u])
      },
      r = () => {
        var c;
        const u = (c = e.confirmButtonText) != null ? c : Xc("confirm");
        if (!(!n.confirm && !u)) return h("button", {
          type: "button",
          class: [Bn("confirm"), St],
          onClick: a
        }, [n.confirm ? n.confirm() : u])
      };
    return () => h("div", {
      class: Bn("toolbar")
    }, [n.toolbar ? n.toolbar() : [l(), o(), r()]])
  }
});
const xr = (e, t) => {
  const n = F(e());
  return re(e, o => {
    o !== n.value && (n.value = o)
  }), re(n, o => {
    o !== e() && t(o)
  }), n
};

function Jp(e, t, n) {
  let o, s = 0;
  const a = e.scrollLeft,
    l = n === 0 ? 1 : Math.round(n * 1e3 / 16);
  let r = a;

  function c() {
    pa(o)
  }

  function u() {
    r += (t - a) / l, e.scrollLeft = r, ++s < l && (o = _t(u))
  }
  return u(), c
}

function e0(e, t, n, o) {
  let s, a = Ln(e);
  const l = a < t,
    r = n === 0 ? 1 : Math.round(n * 1e3 / 16),
    c = (t - a) / r;

  function u() {
    pa(s)
  }

  function d() {
    a += c, (l && a > t || !l && a < t) && (a = t), Zs(e, a), l && a < t || !l && a > t ? s = _t(d) : o && (s = _t(o))
  }
  return d(), u
}
let t0 = 0;

function wi() {
  const e = ln(),
    {
      name: t = "unknown"
    } = (e == null ? void 0 : e.type) || {};
  return `${t}-${++t0}`
}

function ls() {
  const e = F([]),
    t = [];
  return rf(() => {
    e.value = []
  }), [e, o => (t[o] || (t[o] = s => {
    e.value[o] = s
  }), t[o])]
}

function ch(e, t) {
  if (!zt || !window.IntersectionObserver) return;
  const n = new IntersectionObserver(a => {
      t(a[0].intersectionRatio > 0)
    }, {
      root: document.body
    }),
    o = () => {
      e.value && n.observe(e.value)
    },
    s = () => {
      e.value && n.unobserve(e.value)
    };
  _n(s), kn(s), yi(o)
}
const [n0, o0] = Y("sticky"), i0 = {
  zIndex: Z,
  position: te("top"),
  container: Object,
  offsetTop: ge(0),
  offsetBottom: ge(0)
};
var s0 = K({
  name: n0,
  props: i0,
  emits: ["scroll", "change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = pi(o),
      a = Ze({
        fixed: !1,
        width: 0,
        height: 0,
        transform: 0
      }),
      l = F(!1),
      r = N(() => Cr(e.position === "top" ? e.offsetTop : e.offsetBottom)),
      c = N(() => {
        if (l.value) return;
        const {
          fixed: m,
          height: g,
          width: p
        } = a;
        if (m) return {
          width: `${p}px`,
          height: `${g}px`
        }
      }),
      u = N(() => {
        if (!a.fixed || l.value) return;
        const m = ke(Un(e.zIndex), {
          width: `${a.width}px`,
          height: `${a.height}px`,
          [e.position]: `${r.value}px`
        });
        return a.transform && (m.transform = `translate3d(0, ${a.transform}px, 0)`), m
      }),
      d = m => t("scroll", {
        scrollTop: m,
        isFixed: a.fixed
      }),
      f = () => {
        if (!o.value || Do(o)) return;
        const {
          container: m,
          position: g
        } = e, p = Ue(o), y = Ln(window);
        if (a.width = p.width, a.height = p.height, g === "top")
          if (m) {
            const b = Ue(m),
              w = b.bottom - r.value - a.height;
            a.fixed = r.value > p.top && b.bottom > 0, a.transform = w < 0 ? w : 0
          } else a.fixed = r.value > p.top;
        else {
          const {
            clientHeight: b
          } = document.documentElement;
          if (m) {
            const w = Ue(m),
              v = b - w.top - r.value - a.height;
            a.fixed = b - r.value < p.bottom && b > w.top, a.transform = v < 0 ? -v : 0
          } else a.fixed = b - r.value < p.bottom
        }
        d(y)
      };
    return re(() => a.fixed, m => t("change", m)), st("scroll", f, {
      target: s,
      passive: !0
    }), ch(o, f), re([tn, jt], () => {
      !o.value || Do(o) || !a.fixed || (l.value = !0, Oe(() => {
        const m = Ue(o);
        a.width = m.width, a.height = m.height, l.value = !1
      }))
    }), () => {
      var m;
      return h("div", {
        ref: o,
        style: c.value
      }, [h("div", {
        class: o0({
          fixed: a.fixed && !l.value
        }),
        style: u.value
      }, [(m = n.default) == null ? void 0 : m.call(n)])])
    }
  }
});
const uh = ee(s0),
  [dh, bs] = Y("swipe"),
  a0 = {
    loop: j,
    width: Z,
    height: Z,
    vertical: Boolean,
    autoplay: ge(0),
    duration: ge(500),
    touchable: j,
    lazyRender: Boolean,
    initialSwipe: ge(0),
    indicatorColor: String,
    showIndicators: j,
    stopPropagation: j
  },
  fh = Symbol(dh);
var l0 = K({
  name: dh,
  props: a0,
  emits: ["change", "dragStart", "dragEnd"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = F(),
      a = Ze({
        rect: null,
        width: 0,
        height: 0,
        offset: 0,
        active: 0,
        swiping: !1
      });
    let l = !1;
    const r = Kt(),
      {
        children: c,
        linkChildren: u
      } = xt(fh),
      d = N(() => c.length),
      f = N(() => a[e.vertical ? "height" : "width"]),
      m = N(() => e.vertical ? r.deltaY.value : r.deltaX.value),
      g = N(() => a.rect ? (e.vertical ? a.rect.height : a.rect.width) - f.value * d.value : 0),
      p = N(() => f.value ? Math.ceil(Math.abs(g.value) / f.value) : d.value),
      y = N(() => d.value * f.value),
      b = N(() => (a.active + d.value) % d.value),
      w = N(() => {
        const z = e.vertical ? "vertical" : "horizontal";
        return r.direction.value === z
      }),
      v = N(() => {
        const z = {
          transitionDuration: `${a.swiping?0:e.duration}ms`,
          transform: `translate${e.vertical?"Y":"X"}(${+a.offset.toFixed(2)}px)`
        };
        if (f.value) {
          const X = e.vertical ? "height" : "width",
            ye = e.vertical ? "width" : "height";
          z[X] = `${y.value}px`, z[ye] = e[ye] ? `${e[ye]}px` : ""
        }
        return z
      }),
      C = z => {
        const {
          active: X
        } = a;
        return z ? e.loop ? ht(X + z, -1, d.value) : ht(X + z, 0, p.value) : X
      },
      _ = (z, X = 0) => {
        let ye = z * f.value;
        e.loop || (ye = Math.min(ye, -g.value));
        let we = X - ye;
        return e.loop || (we = ht(we, g.value, 0)), we
      },
      k = ({
        pace: z = 0,
        offset: X = 0,
        emitChange: ye
      }) => {
        if (d.value <= 1) return;
        const {
          active: we
        } = a, le = C(z), pe = _(le, X);
        if (e.loop) {
          if (c[0] && pe !== g.value) {
            const E = pe < g.value;
            c[0].setOffset(E ? y.value : 0)
          }
          if (c[d.value - 1] && pe !== 0) {
            const E = pe > 0;
            c[d.value - 1].setOffset(E ? -y.value : 0)
          }
        }
        a.active = le, a.offset = pe, ye && le !== we && t("change", b.value)
      },
      I = () => {
        a.swiping = !0, a.active <= -1 ? k({
          pace: d.value
        }) : a.active >= d.value && k({
          pace: -d.value
        })
      },
      D = () => {
        I(), r.reset(), so(() => {
          a.swiping = !1, k({
            pace: -1,
            emitChange: !0
          })
        })
      },
      S = () => {
        I(), r.reset(), so(() => {
          a.swiping = !1, k({
            pace: 1,
            emitChange: !0
          })
        })
      };
    let B;
    const R = () => clearTimeout(B),
      x = () => {
        R(), +e.autoplay > 0 && d.value > 1 && (B = setTimeout(() => {
          S(), x()
        }, +e.autoplay))
      },
      P = (z = +e.initialSwipe) => {
        if (!o.value) return;
        const X = () => {
          var ye, we;
          if (!Do(o)) {
            const le = {
              width: o.value.offsetWidth,
              height: o.value.offsetHeight
            };
            a.rect = le, a.width = +((ye = e.width) != null ? ye : le.width), a.height = +((we = e.height) != null ? we : le.height)
          }
          d.value && (z = Math.min(d.value - 1, z), z === -1 && (z = d.value - 1)), a.active = z, a.swiping = !0, a.offset = _(z), c.forEach(le => {
            le.setOffset(0)
          }), x()
        };
        Do(o) ? Oe().then(X) : X()
      },
      M = () => P(a.active);
    let J;
    const ce = z => {
        !e.touchable || z.touches.length > 1 || (r.start(z), l = !1, J = Date.now(), R(), I())
      },
      W = z => {
        e.touchable && a.swiping && (r.move(z), w.value && (!e.loop && (a.active === 0 && m.value > 0 || a.active === d.value - 1 && m.value < 0) || (Ge(z, e.stopPropagation), k({
          offset: m.value
        }), l || (t("dragStart", {
          index: b.value
        }), l = !0))))
      },
      ne = () => {
        if (!e.touchable || !a.swiping) return;
        const z = Date.now() - J,
          X = m.value / z;
        if ((Math.abs(X) > .25 || Math.abs(m.value) > f.value / 2) && w.value) {
          const we = e.vertical ? r.offsetY.value : r.offsetX.value;
          let le = 0;
          e.loop ? le = we > 0 ? m.value > 0 ? -1 : 1 : 0 : le = -Math[m.value > 0 ? "ceil" : "floor"](m.value / f.value), k({
            pace: le,
            emitChange: !0
          })
        } else m.value && k({
          pace: 0
        });
        l = !1, a.swiping = !1, t("dragEnd", {
          index: b.value
        }), x()
      },
      ue = (z, X = {}) => {
        I(), r.reset(), so(() => {
          let ye;
          e.loop && z === d.value ? ye = a.active === 0 ? 0 : z : ye = z % d.value, X.immediate ? so(() => {
            a.swiping = !1
          }) : a.swiping = !1, k({
            pace: ye - a.active,
            emitChange: !0
          })
        })
      },
      Re = (z, X) => {
        const ye = X === b.value,
          we = ye ? {
            backgroundColor: e.indicatorColor
          } : void 0;
        return h("i", {
          style: we,
          class: bs("indicator", {
            active: ye
          })
        }, null)
      },
      Ne = () => {
        if (n.indicator) return n.indicator({
          active: b.value,
          total: d.value
        });
        if (e.showIndicators && d.value > 1) return h("div", {
          class: bs("indicators", {
            vertical: e.vertical
          })
        }, [Array(d.value).fill("").map(Re)])
      };
    return $e({
      prev: D,
      next: S,
      state: a,
      resize: M,
      swipeTo: ue
    }), u({
      size: f,
      props: e,
      count: d,
      activeIndicator: b
    }), re(() => e.initialSwipe, z => P(+z)), re(d, () => P(a.active)), re(() => e.autoplay, x), re([tn, jt, () => e.width, () => e.height], M), re(Dy(), z => {
      z === "visible" ? x() : R()
    }), at(P), Cn(() => P(a.active)), Ca(() => P(a.active)), _n(R), kn(R), st("touchmove", W, {
      target: s
    }), () => {
      var z;
      return h("div", {
        ref: o,
        class: bs()
      }, [h("div", {
        ref: s,
        style: v.value,
        class: bs("track", {
          vertical: e.vertical
        }),
        onTouchstartPassive: ce,
        onTouchend: ne,
        onTouchcancel: ne
      }, [(z = n.default) == null ? void 0 : z.call(n)]), Ne()])
    }
  }
});
const Ar = ee(l0),
  [r0, nu] = Y("tabs");
var c0 = K({
  name: r0,
  props: {
    count: gt(Number),
    inited: Boolean,
    animated: Boolean,
    duration: gt(Z),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: gt(Number)
  },
  emits: ["change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = r => t("change", r),
      a = () => {
        var r;
        const c = (r = n.default) == null ? void 0 : r.call(n);
        return e.animated || e.swipeable ? h(Ar, {
          ref: o,
          loop: !1,
          class: nu("track"),
          duration: +e.duration * 1e3,
          touchable: e.swipeable,
          lazyRender: e.lazyRender,
          showIndicators: !1,
          onChange: s
        }, {
          default: () => [c]
        }) : c
      },
      l = r => {
        const c = o.value;
        c && c.state.active !== r && c.swipeTo(r, {
          immediate: !e.inited
        })
      };
    return re(() => e.currentIndex, l), at(() => {
      l(e.currentIndex)
    }), $e({
      swipeRef: o
    }), () => h("div", {
      class: nu("content", {
        animated: e.animated || e.swipeable
      })
    }, [a()])
  }
});
const [hh, ws] = Y("tabs"), u0 = {
  type: te("line"),
  color: String,
  border: Boolean,
  sticky: Boolean,
  shrink: Boolean,
  active: ge(0),
  duration: ge(.3),
  animated: Boolean,
  ellipsis: j,
  swipeable: Boolean,
  scrollspy: Boolean,
  offsetTop: ge(0),
  background: String,
  lazyRender: j,
  showHeader: j,
  lineWidth: Z,
  lineHeight: Z,
  beforeChange: Function,
  swipeThreshold: ge(5),
  titleActiveColor: String,
  titleInactiveColor: String
}, mh = Symbol(hh);
var d0 = K({
  name: hh,
  props: u0,
  emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o, s, a, l, r;
    const c = F(),
      u = F(),
      d = F(),
      f = F(),
      m = wi(),
      g = pi(c),
      [p, y] = ls(),
      {
        children: b,
        linkChildren: w
      } = xt(mh),
      v = Ze({
        inited: !1,
        position: "",
        lineStyle: {},
        currentIndex: -1
      }),
      C = N(() => b.length > +e.swipeThreshold || !e.ellipsis || e.shrink),
      _ = N(() => ({
        borderColor: e.color,
        background: e.background
      })),
      k = (le, pe) => {
        var E;
        return (E = le.name) != null ? E : pe
      },
      I = N(() => {
        const le = b[v.currentIndex];
        if (le) return k(le, v.currentIndex)
      }),
      D = N(() => Cr(e.offsetTop)),
      S = N(() => e.sticky ? D.value + o : 0),
      B = le => {
        const pe = u.value,
          E = p.value;
        if (!C.value || !pe || !E || !E[v.currentIndex]) return;
        const H = E[v.currentIndex].$el,
          U = H.offsetLeft - (pe.offsetWidth - H.offsetWidth) / 2;
        l && l(), l = Jp(pe, U, le ? 0 : +e.duration)
      },
      R = () => {
        const le = v.inited;
        Oe(() => {
          const pe = p.value;
          if (!pe || !pe[v.currentIndex] || e.type !== "line" || Do(c.value)) return;
          const E = pe[v.currentIndex].$el,
            {
              lineWidth: H,
              lineHeight: U
            } = e,
            oe = E.offsetLeft + E.offsetWidth / 2,
            Se = {
              width: Ie(H),
              backgroundColor: e.color,
              transform: `translateX(${oe}px) translateX(-50%)`
            };
          if (le && (Se.transitionDuration = `${e.duration}s`), Fe(U)) {
            const Le = Ie(U);
            Se.height = Le, Se.borderRadius = Le
          }
          v.lineStyle = Se
        })
      },
      x = le => {
        const pe = le < v.currentIndex ? -1 : 1;
        for (; le >= 0 && le < b.length;) {
          if (!b[le].disabled) return le;
          le += pe
        }
      },
      P = (le, pe) => {
        const E = x(le);
        if (!Fe(E)) return;
        const H = b[E],
          U = k(H, E),
          oe = v.currentIndex !== null;
        v.currentIndex !== E && (v.currentIndex = E, pe || B(), R()), U !== e.active && (t("update:active", U), oe && t("change", U, H.title)), a && !e.scrollspy && Ji(Math.ceil(Hc(c.value) - D.value))
      },
      M = (le, pe) => {
        const E = b.find((U, oe) => k(U, oe) === le),
          H = E ? b.indexOf(E) : 0;
        P(H, pe)
      },
      J = (le = !1) => {
        if (e.scrollspy) {
          const pe = b[v.currentIndex].$el;
          if (pe && g.value) {
            const E = Hc(pe, g.value) - S.value;
            s = !0, r && r(), r = e0(g.value, E, le ? 0 : +e.duration, () => {
              s = !1
            })
          }
        }
      },
      ce = (le, pe, E) => {
        const {
          title: H,
          disabled: U
        } = b[pe], oe = k(b[pe], pe);
        U || (yo(e.beforeChange, {
          args: [oe],
          done: () => {
            P(pe), J()
          }
        }), Xf(le)), t("clickTab", {
          name: oe,
          title: H,
          event: E,
          disabled: U
        })
      },
      W = le => {
        a = le.isFixed, t("scroll", le)
      },
      ne = le => {
        Oe(() => {
          M(le), J(!0)
        })
      },
      ue = () => {
        for (let le = 0; le < b.length; le++) {
          const {
            top: pe
          } = Ue(b[le].$el);
          if (pe > S.value) return le === 0 ? 0 : le - 1
        }
        return b.length - 1
      },
      Re = () => {
        if (e.scrollspy && !s) {
          const le = ue();
          P(le)
        }
      },
      Ne = () => {
        if (e.type === "line" && b.length) return h("div", {
          class: ws("line"),
          style: v.lineStyle
        }, null)
      },
      z = () => {
        var le, pe, E;
        const {
          type: H,
          border: U,
          sticky: oe
        } = e, Se = [h("div", {
          ref: oe ? void 0 : d,
          class: [ws("wrap"), {
            [wa]: H === "line" && U
          }]
        }, [h("div", {
          ref: u,
          role: "tablist",
          class: ws("nav", [H, {
            shrink: e.shrink,
            complete: C.value
          }]),
          style: _.value,
          "aria-orientation": "horizontal"
        }, [(le = n["nav-left"]) == null ? void 0 : le.call(n), b.map(Le => Le.renderTitle(ce)), Ne(), (pe = n["nav-right"]) == null ? void 0 : pe.call(n)])]), (E = n["nav-bottom"]) == null ? void 0 : E.call(n)];
        return oe ? h("div", {
          ref: d
        }, [Se]) : Se
      },
      X = () => {
        R(), Oe(() => {
          var le, pe;
          B(!0), (pe = (le = f.value) == null ? void 0 : le.swipeRef.value) == null || pe.resize()
        })
      };
    re(() => [e.color, e.duration, e.lineWidth, e.lineHeight], R), re(tn, X), re(() => e.active, le => {
      le !== I.value && M(le)
    }), re(() => b.length, () => {
      v.inited && (M(e.active), R(), Oe(() => {
        B(!0)
      }))
    });
    const ye = () => {
        M(e.active, !0), Oe(() => {
          v.inited = !0, d.value && (o = Ue(d.value).height), B(!0)
        })
      },
      we = (le, pe) => t("rendered", le, pe);
    return $e({
      resize: X,
      scrollTo: ne
    }), Cn(R), Ca(R), yi(ye), ch(c, R), st("scroll", Re, {
      target: g,
      passive: !0
    }), w({
      id: m,
      props: e,
      setLine: R,
      scrollable: C,
      onRendered: we,
      currentName: I,
      setTitleRefs: y,
      scrollIntoView: B
    }), () => h("div", {
      ref: c,
      class: ws([e.type])
    }, [e.showHeader ? e.sticky ? h(uh, {
      container: c.value,
      offsetTop: D.value,
      onScroll: W
    }, {
      default: () => [z()]
    }) : z() : null, h(c0, {
      ref: f,
      count: b.length,
      inited: v.inited,
      animated: e.animated,
      duration: e.duration,
      swipeable: e.swipeable,
      lazyRender: e.lazyRender,
      currentIndex: v.currentIndex,
      onChange: P
    }, {
      default: () => {
        var le;
        return [(le = n.default) == null ? void 0 : le.call(n)]
      }
    })])
  }
});
const gh = Symbol(),
  f0 = () => Bt(gh, null),
  [h0, ou] = Y("tab"),
  m0 = K({
    name: h0,
    props: {
      id: String,
      dot: Boolean,
      type: String,
      color: String,
      title: String,
      badge: Z,
      shrink: Boolean,
      isActive: Boolean,
      disabled: Boolean,
      controls: String,
      scrollable: Boolean,
      activeColor: String,
      inactiveColor: String,
      showZeroBadge: j
    },
    setup(e, {
      slots: t
    }) {
      const n = N(() => {
          const s = {},
            {
              type: a,
              color: l,
              disabled: r,
              isActive: c,
              activeColor: u,
              inactiveColor: d
            } = e;
          l && a === "card" && (s.borderColor = l, r || (c ? s.backgroundColor = l : s.color = l));
          const m = c ? u : d;
          return m && (s.color = m), s
        }),
        o = () => {
          const s = h("span", {
            class: ou("text", {
              ellipsis: !e.scrollable
            })
          }, [t.title ? t.title() : e.title]);
          return e.dot || Fe(e.badge) && e.badge !== "" ? h(Lo, {
            dot: e.dot,
            content: e.badge,
            showZero: e.showZeroBadge
          }, {
            default: () => [s]
          }) : s
        };
      return () => h("div", {
        id: e.id,
        role: "tab",
        class: [ou([e.type, {
          grow: e.scrollable && !e.shrink,
          shrink: e.shrink,
          active: e.isActive,
          disabled: e.disabled
        }])],
        style: n.value,
        tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
        "aria-selected": e.isActive,
        "aria-disabled": e.disabled || void 0,
        "aria-controls": e.controls,
        "data-allow-mismatch": "attribute"
      }, [o()])
    }
  }),
  [g0, v0] = Y("swipe-item");
var y0 = K({
  name: g0,
  setup(e, {
    slots: t
  }) {
    let n;
    const o = Ze({
        offset: 0,
        inited: !1,
        mounted: !1
      }),
      {
        parent: s,
        index: a
      } = pt(fh);
    if (!s) return;
    const l = N(() => {
        const u = {},
          {
            vertical: d
          } = s.props;
        return s.size.value && (u[d ? "height" : "width"] = `${s.size.value}px`), o.offset && (u.transform = `translate${d?"Y":"X"}(${o.offset}px)`), u
      }),
      r = N(() => {
        const {
          loop: u,
          lazyRender: d
        } = s.props;
        if (!d || n) return !0;
        if (!o.mounted) return !1;
        const f = s.activeIndicator.value,
          m = s.count.value - 1,
          g = f === 0 && u ? m : f - 1,
          p = f === m && u ? 0 : f + 1;
        return n = a.value === f || a.value === g || a.value === p, n
      }),
      c = u => {
        o.offset = u
      };
    return at(() => {
      Oe(() => {
        o.mounted = !0
      })
    }), $e({
      setOffset: c
    }), () => {
      var u;
      return h("div", {
        class: v0(),
        style: l.value
      }, [r.value ? (u = t.default) == null ? void 0 : u.call(t) : null])
    }
  }
});
const Er = ee(y0),
  [p0, Xa] = Y("tab"),
  b0 = ke({}, po, {
    dot: Boolean,
    name: Z,
    badge: Z,
    title: String,
    disabled: Boolean,
    titleClass: et,
    titleStyle: [String, Object],
    showZeroBadge: j
  });
var w0 = K({
  name: p0,
  props: b0,
  setup(e, {
    slots: t
  }) {
    const n = wi(),
      o = F(!1),
      s = ln(),
      {
        parent: a,
        index: l
      } = pt(mh);
    if (!a) return;
    const r = () => {
        var p;
        return (p = e.name) != null ? p : l.value
      },
      c = () => {
        o.value = !0, a.props.lazyRender && Oe(() => {
          a.onRendered(r(), e.title)
        })
      },
      u = N(() => {
        const p = r() === a.currentName.value;
        return p && !o.value && c(), p
      }),
      d = F(""),
      f = F("");
    vi(() => {
      const {
        titleClass: p,
        titleStyle: y
      } = e;
      d.value = p ? ot(p) : "", f.value = y && typeof y != "string" ? ig(an(y)) : y
    });
    const m = p => h(m0, De({
        key: n,
        id: `${a.id}-${l.value}`,
        ref: a.setTitleRefs(l.value),
        style: f.value,
        class: d.value,
        isActive: u.value,
        controls: n,
        scrollable: a.scrollable.value,
        activeColor: a.props.titleActiveColor,
        inactiveColor: a.props.titleInactiveColor,
        onClick: y => p(s.proxy, l.value, y)
      }, Ve(a.props, ["type", "color", "shrink"]), Ve(e, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
        title: t.title
      }),
      g = F(!u.value);
    return re(u, p => {
      p ? g.value = !1 : so(() => {
        g.value = !0
      })
    }), re(() => e.title, () => {
      a.setLine(), a.scrollIntoView()
    }), Dn(gh, u), $e({
      id: n,
      renderTitle: m
    }), () => {
      var p;
      const y = `${a.id}-${l.value}`,
        {
          animated: b,
          swipeable: w,
          scrollspy: v,
          lazyRender: C
        } = a.props;
      if (!t.default && !b) return;
      const _ = v || u.value;
      if (b || w) return h(Er, {
        id: n,
        role: "tabpanel",
        class: Xa("panel-wrapper", {
          inactive: g.value
        }),
        tabindex: u.value ? 0 : -1,
        "aria-hidden": !u.value,
        "aria-labelledby": y,
        "data-allow-mismatch": "attribute"
      }, {
        default: () => {
          var D;
          return [h("div", {
            class: Xa("panel")
          }, [(D = t.default) == null ? void 0 : D.call(t)])]
        }
      });
      const I = o.value || v || !C ? (p = t.default) == null ? void 0 : p.call(t) : null;
      return rt(h("div", {
        id: n,
        role: "tabpanel",
        class: Xa("panel"),
        tabindex: _ ? 0 : -1,
        "aria-labelledby": y,
        "data-allow-mismatch": "attribute"
      }, [I]), [
        [dt, _]
      ])
    }
  }
});
const es = ee(w0),
  Sa = ee(d0),
  [vh, Ja] = Y("picker-group"),
  yh = Symbol(vh),
  C0 = ke({
    tabs: Xe(),
    activeTab: ge(0),
    nextStepText: String,
    showToolbar: j
  }, ka);
var _0 = K({
  name: vh,
  props: C0,
  emits: ["confirm", "cancel", "update:activeTab"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = xr(() => e.activeTab, u => t("update:activeTab", u)),
      {
        children: s,
        linkChildren: a
      } = xt(yh);
    a();
    const l = () => +o.value < e.tabs.length - 1 && e.nextStepText,
      r = () => {
        l() ? o.value = +o.value + 1 : t("confirm", s.map(u => u.confirm()))
      },
      c = () => t("cancel");
    return () => {
      var u, d;
      let f = (d = (u = n.default) == null ? void 0 : u.call(n)) == null ? void 0 : d.filter(g => g.type !== yt).map(g => g.type === Be ? g.children : g);
      f && (f = Qm(f));
      const m = l() ? e.nextStepText : e.confirmButtonText;
      return h("div", {
        class: Ja()
      }, [e.showToolbar ? h(rh, {
        title: e.title,
        cancelButtonText: e.cancelButtonText,
        confirmButtonText: m,
        onConfirm: r,
        onCancel: c
      }, Ve(n, lh)) : null, h(Sa, {
        active: o.value,
        "onUpdate:active": g => o.value = g,
        class: Ja("tabs"),
        shrink: !0,
        animated: !0,
        lazyRender: !1
      }, {
        default: () => [e.tabs.map((g, p) => h(es, {
          title: g,
          titleClass: Ja("tab-title")
        }, {
          default: () => [f == null ? void 0 : f[p]]
        }))]
      })])
    }
  }
});
const Ta = ke({
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: ge(44),
    showToolbar: j,
    swipeDuration: ge(1e3),
    visibleOptionNum: ge(6)
  }, ka),
  k0 = ke({}, Ta, {
    columns: Xe(),
    modelValue: Xe(),
    toolbarPosition: te("top"),
    columnsFieldNames: Object
  });
var S0 = K({
  name: Wp,
  props: k0,
  emits: ["confirm", "cancel", "change", "scrollInto", "clickOption", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = F(e.modelValue.slice(0)),
      {
        parent: a
      } = pt(yh),
      {
        children: l,
        linkChildren: r
      } = xt(ah);
    r();
    const c = N(() => Yp(e.columnsFieldNames)),
      u = N(() => Cr(e.optionHeight)),
      d = N(() => jp(e.columns, c.value)),
      f = N(() => {
        const {
          columns: x
        } = e;
        switch (d.value) {
          case "multiple":
            return x;
          case "cascade":
            return Qp(x, c.value, s);
          default:
            return [x]
        }
      }),
      m = N(() => f.value.some(x => x.length)),
      g = N(() => f.value.map((x, P) => Ll(x, s.value[P], c.value))),
      p = N(() => f.value.map((x, P) => x.findIndex(M => M[c.value.value] === s.value[P]))),
      y = (x, P) => {
        if (s.value[x] !== P) {
          const M = s.value.slice(0);
          M[x] = P, s.value = M
        }
      },
      b = () => ({
        selectedValues: s.value.slice(0),
        selectedOptions: g.value,
        selectedIndexes: p.value
      }),
      w = (x, P) => {
        y(P, x), d.value === "cascade" && s.value.forEach((M, J) => {
          const ce = f.value[J];
          Jc(ce, M, c.value) || y(J, ce.length ? ce[0][c.value.value] : void 0)
        }), Oe(() => {
          t("change", ke({
            columnIndex: P
          }, b()))
        })
      },
      v = (x, P) => {
        const M = {
          columnIndex: P,
          currentOption: x
        };
        t("clickOption", ke(b(), M)), t("scrollInto", M)
      },
      C = () => {
        l.forEach(P => P.stopMomentum());
        const x = b();
        return Oe(() => {
          t("confirm", x)
        }), x
      },
      _ = () => t("cancel", b()),
      k = () => f.value.map((x, P) => h(Gp, {
        value: s.value[P],
        fields: c.value,
        options: x,
        readonly: e.readonly,
        allowHtml: e.allowHtml,
        optionHeight: u.value,
        swipeDuration: e.swipeDuration,
        visibleOptionNum: e.visibleOptionNum,
        onChange: M => w(M, P),
        onClickOption: M => v(M, P),
        onScrollInto: M => {
          t("scrollInto", {
            currentOption: M,
            columnIndex: P
          })
        }
      }, {
        option: n.option
      })),
      I = x => {
        if (m.value) {
          const P = {
              height: `${u.value}px`
            },
            M = {
              backgroundSize: `100% ${(x-u.value)/2}px`
            };
          return [h("div", {
            class: Bn("mask"),
            style: M
          }, null), h("div", {
            class: [Zy, Bn("frame")],
            style: P
          }, null)]
        }
      },
      D = () => {
        const x = u.value * +e.visibleOptionNum,
          P = {
            height: `${x}px`
          };
        return h("div", {
          ref: o,
          class: Bn("columns"),
          style: P
        }, [k(), I(x)])
      },
      S = () => {
        if (e.showToolbar && !a) return h(rh, De(Ve(e, Xp), {
          onConfirm: C,
          onCancel: _
        }), Ve(n, lh))
      };
    re(f, x => {
      x.forEach((P, M) => {
        P.length && !Jc(P, s.value[M], c.value) && y(M, ih(P)[c.value.value])
      })
    }, {
      immediate: !0
    });
    let B;
    return re(() => e.modelValue, x => {
      !pn(x, s.value) && !pn(x, B) && (s.value = x.slice(0), B = x.slice(0))
    }, {
      deep: !0
    }), re(s, x => {
      pn(x, e.modelValue) || (B = x.slice(0), t("update:modelValue", B))
    }, {
      immediate: !0
    }), st("touchmove", Ge, {
      target: o
    }), $e({
      confirm: C,
      getSelectedOptions: () => g.value
    }), () => {
      var x, P;
      return h("div", {
        class: Bn()
      }, [e.toolbarPosition === "top" ? S() : null, e.loading ? h(rn, {
        class: Bn("loading")
      }, null) : null, (x = n["columns-top"]) == null ? void 0 : x.call(n), D(), (P = n["columns-bottom"]) == null ? void 0 : P.call(n), e.toolbarPosition === "bottom" ? S() : null])
    }
  }
});
const ii = "000000",
  T0 = ["title", "cancel", "confirm", "toolbar", "columns-top", "columns-bottom"],
  ph = ["title", "loading", "readonly", "optionHeight", "swipeDuration", "visibleOptionNum", "cancelButtonText", "confirmButtonText"],
  Yn = (e = "", t = ii, n = void 0) => ({
    text: e,
    value: t,
    children: n
  });

function x0({
  areaList: e,
  columnsNum: t,
  columnsPlaceholder: n
}) {
  const {
    city_list: o = {},
    county_list: s = {},
    province_list: a = {}
  } = e, l = +t > 1, r = +t > 2, c = () => {
    if (l) return n.length > 1 ? [Yn(n[1], ii, r ? [] : void 0)] : []
  }, u = new Map;
  Object.keys(a).forEach(m => {
    u.set(m.slice(0, 2), Yn(a[m], m, c()))
  });
  const d = new Map;
  if (l) {
    const m = () => {
      if (r) return n.length > 2 ? [Yn(n[2])] : []
    };
    Object.keys(o).forEach(g => {
      const p = Yn(o[g], g, m());
      d.set(g.slice(0, 4), p);
      const y = u.get(g.slice(0, 2));
      y && y.children.push(p)
    })
  }
  r && Object.keys(s).forEach(m => {
    const g = d.get(m.slice(0, 4));
    g && g.children.push(Yn(s[m], m))
  });
  const f = Array.from(u.values());
  if (n.length) {
    const m = r ? [Yn(n[2])] : void 0,
      g = l ? [Yn(n[1], ii, m)] : void 0;
    f.unshift(Yn(n[0], ii, g))
  }
  return f
}
const xa = ee(S0),
  [A0, E0] = Y("area"),
  I0 = ke({}, Ve(Ta, ph), {
    modelValue: String,
    columnsNum: ge(3),
    columnsPlaceholder: Xe(),
    areaList: {
      type: Object,
      default: () => ({})
    }
  });
var P0 = K({
  name: A0,
  props: I0,
  emits: ["change", "confirm", "cancel", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F([]),
      s = F(),
      a = N(() => x0(e)),
      l = (...u) => t("change", ...u),
      r = (...u) => t("cancel", ...u),
      c = (...u) => t("confirm", ...u);
    return re(o, u => {
      const d = u.length ? u[u.length - 1] : "";
      d && d !== e.modelValue && t("update:modelValue", d)
    }, {
      deep: !0
    }), re(() => e.modelValue, u => {
      if (u) {
        const d = o.value.length ? o.value[o.value.length - 1] : "";
        u !== d && (o.value = [`${u.slice(0,2)}0000`, `${u.slice(0,4)}00`, u].slice(0, +e.columnsNum))
      } else o.value = []
    }, {
      immediate: !0
    }), $e({
      confirm: () => {
        var u;
        return (u = s.value) == null ? void 0 : u.confirm()
      },
      getSelectedOptions: () => {
        var u;
        return ((u = s.value) == null ? void 0 : u.getSelectedOptions()) || []
      }
    }), () => h(xa, De({
      ref: s,
      modelValue: o.value,
      "onUpdate:modelValue": u => o.value = u,
      class: E0(),
      columns: a.value,
      onChange: l,
      onCancel: r,
      onConfirm: c
    }, Ve(e, ph)), Ve(n, T0))
  }
});
const bh = ee(P0),
  [O0, zo] = Y("cell"),
  Aa = {
    tag: te("div"),
    icon: String,
    size: String,
    title: Z,
    value: Z,
    label: Z,
    center: Boolean,
    isLink: Boolean,
    border: j,
    iconPrefix: String,
    valueClass: et,
    labelClass: et,
    titleClass: et,
    titleStyle: null,
    arrowDirection: String,
    required: {
      type: [Boolean, String],
      default: null
    },
    clickable: {
      type: Boolean,
      default: null
    }
  },
  B0 = ke({}, Aa, po);
var R0 = K({
  name: O0,
  props: B0,
  setup(e, {
    slots: t
  }) {
    const n = Mo(),
      o = () => {
        if (t.label || Fe(e.label)) return h("div", {
          class: [zo("label"), e.labelClass]
        }, [t.label ? t.label() : e.label])
      },
      s = () => {
        var c;
        if (t.title || Fe(e.title)) {
          const u = (c = t.title) == null ? void 0 : c.call(t);
          return Array.isArray(u) && u.length === 0 ? void 0 : h("div", {
            class: [zo("title"), e.titleClass],
            style: e.titleStyle
          }, [u || h("span", null, [e.title]), o()])
        }
      },
      a = () => {
        const c = t.value || t.default;
        if (c || Fe(e.value)) return h("div", {
          class: [zo("value"), e.valueClass]
        }, [c ? c() : h("span", null, [e.value])])
      },
      l = () => {
        if (t.icon) return t.icon();
        if (e.icon) return h(Pe, {
          name: e.icon,
          class: zo("left-icon"),
          classPrefix: e.iconPrefix
        }, null)
      },
      r = () => {
        if (t["right-icon"]) return t["right-icon"]();
        if (e.isLink) {
          const c = e.arrowDirection && e.arrowDirection !== "right" ? `arrow-${e.arrowDirection}` : "arrow";
          return h(Pe, {
            name: c,
            class: zo("right-icon")
          }, null)
        }
      };
    return () => {
      var c;
      const {
        tag: u,
        size: d,
        center: f,
        border: m,
        isLink: g,
        required: p
      } = e, y = (c = e.clickable) != null ? c : g, b = {
        center: f,
        required: !!p,
        clickable: y,
        borderless: !m
      };
      return d && (b[d] = !!d), h(u, {
        class: zo(b),
        role: y ? "button" : void 0,
        tabindex: y ? 0 : void 0,
        onClick: n
      }, {
        default: () => {
          var w;
          return [l(), s(), a(), r(), (w = t.extra) == null ? void 0 : w.call(t)]
        }
      })
    }
  }
});
const un = ee(R0),
  [D0, $0] = Y("form"),
  M0 = {
    colon: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    required: [Boolean, String],
    showError: Boolean,
    labelWidth: Z,
    labelAlign: String,
    inputAlign: String,
    scrollToError: Boolean,
    scrollToErrorPosition: String,
    validateFirst: Boolean,
    submitOnEnter: j,
    showErrorMessage: j,
    errorMessageAlign: String,
    validateTrigger: {
      type: [String, Array],
      default: "onBlur"
    }
  };
var L0 = K({
  name: D0,
  props: M0,
  emits: ["submit", "failed"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      children: o,
      linkChildren: s
    } = xt(Qf), a = b => b ? o.filter(w => b.includes(w.name)) : o, l = b => new Promise((w, v) => {
      const C = [];
      a(b).reduce((k, I) => k.then(() => {
        if (!C.length) return I.validate().then(D => {
          D && C.push(D)
        })
      }), Promise.resolve()).then(() => {
        C.length ? v(C) : w()
      })
    }), r = b => new Promise((w, v) => {
      const C = a(b);
      Promise.all(C.map(_ => _.validate())).then(_ => {
        _ = _.filter(Boolean), _.length ? v(_) : w()
      })
    }), c = b => {
      const w = o.find(v => v.name === b);
      return w ? new Promise((v, C) => {
        w.validate().then(_ => {
          _ ? C(_) : v()
        })
      }) : Promise.reject()
    }, u = b => typeof b == "string" ? c(b) : e.validateFirst ? l(b) : r(b), d = b => {
      typeof b == "string" && (b = [b]), a(b).forEach(v => {
        v.resetValidation()
      })
    }, f = () => o.reduce((b, w) => (b[w.name] = w.getValidationStatus(), b), {}), m = (b, w) => {
      o.some(v => v.name === b ? (v.$el.scrollIntoView(w), !0) : !1)
    }, g = () => o.reduce((b, w) => (w.name !== void 0 && (b[w.name] = w.formValue.value), b), {}), p = () => {
      const b = g();
      u().then(() => t("submit", b)).catch(w => {
        t("failed", {
          values: b,
          errors: w
        });
        const {
          scrollToError: v,
          scrollToErrorPosition: C
        } = e;
        v && w[0].name && m(w[0].name, C ? {
          block: C
        } : void 0)
      })
    }, y = b => {
      Ge(b), p()
    };
    return s({
      props: e
    }), $e({
      submit: p,
      validate: u,
      getValues: g,
      scrollToField: m,
      resetValidation: d,
      getValidationStatus: f
    }), () => {
      var b;
      return h("form", {
        class: $0(),
        onSubmit: y
      }, [(b = n.default) == null ? void 0 : b.call(n)])
    }
  }
});
const Ir = ee(L0);

function wh(e) {
  return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e
}

function N0(e, t) {
  if (wh(e)) {
    if (t.required) return !1;
    if (t.validateEmpty === !1) return !0
  }
  return !(t.pattern && !t.pattern.test(String(e)))
}

function F0(e, t) {
  return new Promise(n => {
    const o = t.validator(e, t);
    if (Zl(o)) {
      o.then(n);
      return
    }
    n(o)
  })
}

function iu(e, t) {
  const {
    message: n
  } = t;
  return ci(n) ? n(e, t) : n || ""
}

function z0({
  target: e
}) {
  e.composing = !0
}

function su({
  target: e
}) {
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
}

function V0(e, t) {
  const n = Oo();
  e.style.height = "auto";
  let o = e.scrollHeight;
  if (wn(t)) {
    const {
      maxHeight: s,
      minHeight: a
    } = t;
    s !== void 0 && (o = Math.min(o, s)), a !== void 0 && (o = Math.max(o, a))
  }
  o && (e.style.height = `${o}px`, Ji(n))
}

function H0(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : {
    type: e
  }
}

function Tn(e) {
  return [...e].length
}

function el(e, t) {
  return [...e].slice(0, t).join("")
}
const [U0, Ut] = Y("field"), Pr = {
  id: String,
  name: String,
  leftIcon: String,
  rightIcon: String,
  autofocus: Boolean,
  clearable: Boolean,
  maxlength: Z,
  max: Number,
  min: Number,
  formatter: Function,
  clearIcon: te("clear"),
  modelValue: ge(""),
  inputAlign: String,
  placeholder: String,
  autocomplete: String,
  autocapitalize: String,
  autocorrect: String,
  errorMessage: String,
  enterkeyhint: String,
  clearTrigger: te("focus"),
  formatTrigger: te("onChange"),
  spellcheck: {
    type: Boolean,
    default: null
  },
  error: {
    type: Boolean,
    default: null
  },
  disabled: {
    type: Boolean,
    default: null
  },
  readonly: {
    type: Boolean,
    default: null
  }
}, W0 = ke({}, Aa, Pr, {
  rows: Z,
  type: te("text"),
  rules: Array,
  autosize: [Boolean, Object],
  labelWidth: Z,
  labelClass: et,
  labelAlign: String,
  showWordLimit: Boolean,
  errorMessageAlign: String,
  colon: {
    type: Boolean,
    default: null
  }
});
var j0 = K({
  name: U0,
  props: W0,
  emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = wi(),
      s = Ze({
        status: "unvalidated",
        focused: !1,
        validateMessage: ""
      }),
      a = F(),
      l = F(),
      r = F(),
      {
        parent: c
      } = pt(Qf),
      u = () => {
        var E;
        return String((E = e.modelValue) != null ? E : "")
      },
      d = E => {
        if (Fe(e[E])) return e[E];
        if (c && Fe(c.props[E])) return c.props[E]
      },
      f = N(() => {
        const E = d("readonly");
        if (e.clearable && !E) {
          const H = u() !== "",
            U = e.clearTrigger === "always" || e.clearTrigger === "focus" && s.focused;
          return H && U
        }
        return !1
      }),
      m = N(() => r.value && n.input ? r.value() : e.modelValue),
      g = N(() => {
        var E;
        const H = d("required");
        return H === "auto" ? (E = e.rules) == null ? void 0 : E.some(U => U.required) : H
      }),
      p = E => E.reduce((H, U) => H.then(() => {
        if (s.status === "failed") return;
        let {
          value: oe
        } = m;
        if (U.formatter && (oe = U.formatter(oe, U)), !N0(oe, U)) {
          s.status = "failed", s.validateMessage = iu(oe, U);
          return
        }
        if (U.validator) return wh(oe) && U.validateEmpty === !1 ? void 0 : F0(oe, U).then(Se => {
          Se && typeof Se == "string" ? (s.status = "failed", s.validateMessage = Se) : Se === !1 && (s.status = "failed", s.validateMessage = iu(oe, U))
        })
      }), Promise.resolve()),
      y = () => {
        s.status = "unvalidated", s.validateMessage = ""
      },
      b = () => t("endValidate", {
        status: s.status,
        message: s.validateMessage
      }),
      w = (E = e.rules) => new Promise(H => {
        y(), E ? (t("startValidate"), p(E).then(() => {
          s.status === "failed" ? (H({
            name: e.name,
            message: s.validateMessage
          }), b()) : (s.status = "passed", H(), b())
        })) : H()
      }),
      v = E => {
        if (c && e.rules) {
          const {
            validateTrigger: H
          } = c.props, U = Us(H).includes(E), oe = e.rules.filter(Se => Se.trigger ? Us(Se.trigger).includes(E) : U);
          oe.length && w(oe)
        }
      },
      C = E => {
        var H;
        const {
          maxlength: U
        } = e;
        if (Fe(U) && Tn(E) > +U) {
          const oe = u();
          if (oe && Tn(oe) === +U) return oe;
          const Se = (H = a.value) == null ? void 0 : H.selectionEnd;
          if (s.focused && Se) {
            const Le = [...E],
              A = Le.length - +U;
            return Le.splice(Se - A, A), Le.join("")
          }
          return el(E, +U)
        }
        return E
      },
      _ = (E, H = "onChange") => {
        var U, oe;
        const Se = E;
        E = C(E);
        const Le = Tn(Se) - Tn(E);
        if (e.type === "number" || e.type === "digit") {
          const O = e.type === "number";
          E = Dl(E, O, O), H === "onBlur" && E !== "" && (E = ht(+E, (U = e.min) != null ? U : -1 / 0, (oe = e.max) != null ? oe : 1 / 0).toString())
        }
        let A = 0;
        if (e.formatter && H === e.formatTrigger) {
          const {
            formatter: O,
            maxlength: L
          } = e;
          if (E = O(E), Fe(L) && Tn(E) > +L && (E = el(E, +L)), a.value && s.focused) {
            const {
              selectionEnd: G
            } = a.value, Q = el(Se, G);
            A = Tn(O(Q)) - Tn(Q)
          }
        }
        if (a.value && a.value.value !== E)
          if (s.focused) {
            let {
              selectionStart: O,
              selectionEnd: L
            } = a.value;
            if (a.value.value = E, Fe(O) && Fe(L)) {
              const G = Tn(E);
              Le ? (O -= Le, L -= Le) : A && (O += A, L += A), a.value.setSelectionRange(Math.min(O, G), Math.min(L, G))
            }
          } else a.value.value = E;
        E !== e.modelValue && t("update:modelValue", E)
      },
      k = E => {
        E.target.composing || _(E.target.value)
      },
      I = () => {
        var E;
        return (E = a.value) == null ? void 0 : E.blur()
      },
      D = () => {
        var E;
        return (E = a.value) == null ? void 0 : E.focus()
      },
      S = () => {
        const E = a.value;
        e.type === "textarea" && e.autosize && E && V0(E, e.autosize)
      },
      B = E => {
        s.focused = !0, t("focus", E), Oe(S), d("readonly") && I()
      },
      R = E => {
        s.focused = !1, _(u(), "onBlur"), t("blur", E), !d("readonly") && (v("onBlur"), Oe(S), Ff())
      },
      x = E => t("clickInput", E),
      P = E => t("clickLeftIcon", E),
      M = E => t("clickRightIcon", E),
      J = E => {
        Ge(E), t("update:modelValue", ""), t("clear", E)
      },
      ce = N(() => {
        if (typeof e.error == "boolean") return e.error;
        if (c && c.props.showError && s.status === "failed") return !0
      }),
      W = N(() => {
        const E = d("labelWidth"),
          H = d("labelAlign");
        if (E && H !== "top") return {
          width: Ie(E)
        }
      }),
      ne = E => {
        E.keyCode === 13 && (!(c && c.props.submitOnEnter) && e.type !== "textarea" && Ge(E), e.type === "search" && I()), t("keypress", E)
      },
      ue = () => e.id || `${o}-input`,
      Re = () => s.status,
      Ne = () => {
        const E = Ut("control", [d("inputAlign"), {
          error: ce.value,
          custom: !!n.input,
          "min-height": e.type === "textarea" && !e.autosize
        }]);
        if (n.input) return h("div", {
          class: E,
          onClick: x
        }, [n.input()]);
        const H = {
          id: ue(),
          ref: a,
          name: e.name,
          rows: e.rows !== void 0 ? +e.rows : void 0,
          class: E,
          disabled: d("disabled"),
          readonly: d("readonly"),
          autofocus: e.autofocus,
          placeholder: e.placeholder,
          autocomplete: e.autocomplete,
          autocapitalize: e.autocapitalize,
          autocorrect: e.autocorrect,
          enterkeyhint: e.enterkeyhint,
          spellcheck: e.spellcheck,
          "aria-labelledby": e.label ? `${o}-label` : void 0,
          "data-allow-mismatch": "attribute",
          onBlur: R,
          onFocus: B,
          onInput: k,
          onClick: x,
          onChange: su,
          onKeypress: ne,
          onCompositionend: su,
          onCompositionstart: z0
        };
        return e.type === "textarea" ? h("textarea", H, null) : h("input", De(H0(e.type), H), null)
      },
      z = () => {
        const E = n["left-icon"];
        if (e.leftIcon || E) return h("div", {
          class: Ut("left-icon"),
          onClick: P
        }, [E ? E() : h(Pe, {
          name: e.leftIcon,
          classPrefix: e.iconPrefix
        }, null)])
      },
      X = () => {
        const E = n["right-icon"];
        if (e.rightIcon || E) return h("div", {
          class: Ut("right-icon"),
          onClick: M
        }, [E ? E() : h(Pe, {
          name: e.rightIcon,
          classPrefix: e.iconPrefix
        }, null)])
      },
      ye = () => {
        if (e.showWordLimit && e.maxlength) {
          const E = Tn(u());
          return h("div", {
            class: Ut("word-limit")
          }, [h("span", {
            class: Ut("word-num")
          }, [E]), he("/"), e.maxlength])
        }
      },
      we = () => {
        if (c && c.props.showErrorMessage === !1) return;
        const E = e.errorMessage || s.validateMessage;
        if (E) {
          const H = n["error-message"],
            U = d("errorMessageAlign");
          return h("div", {
            class: Ut("error-message", U)
          }, [H ? H({
            message: E
          }) : E])
        }
      },
      le = () => {
        const E = d("labelWidth"),
          H = d("labelAlign"),
          U = d("colon") ? ":" : "";
        if (n.label) return [n.label(), U];
        if (e.label) return h("label", {
          id: `${o}-label`,
          for: n.input ? void 0 : ue(),
          "data-allow-mismatch": "attribute",
          onClick: oe => {
            Ge(oe), D()
          },
          style: H === "top" && E ? {
            width: Ie(E)
          } : void 0
        }, [e.label + U])
      },
      pe = () => [h("div", {
        class: Ut("body")
      }, [Ne(), f.value && h(Pe, {
        ref: l,
        name: e.clearIcon,
        class: Ut("clear")
      }, null), X(), n.button && h("div", {
        class: Ut("button")
      }, [n.button()])]), ye(), we()];
    return $e({
      blur: I,
      focus: D,
      validate: w,
      formValue: m,
      resetValidation: y,
      getValidationStatus: Re
    }), Dn(Nf, {
      customValue: r,
      resetValidation: y,
      validateWithTrigger: v
    }), re(() => e.modelValue, () => {
      _(u()), y(), v("onChange"), Oe(S)
    }), at(() => {
      _(u(), e.formatTrigger), Oe(S)
    }), st("touchstart", J, {
      target: N(() => {
        var E;
        return (E = l.value) == null ? void 0 : E.$el
      })
    }), () => {
      const E = d("disabled"),
        H = d("labelAlign"),
        U = z(),
        oe = () => {
          const Se = le();
          return H === "top" ? [U, Se].filter(Boolean) : Se || []
        };
      return h(un, {
        size: e.size,
        class: Ut({
          error: ce.value,
          disabled: E,
          [`label-${H}`]: H
        }),
        center: e.center,
        border: e.border,
        isLink: e.isLink,
        clickable: e.clickable,
        titleStyle: W.value,
        valueClass: Ut("value"),
        titleClass: [Ut("label", [H, {
          required: g.value
        }]), e.labelClass],
        arrowDirection: e.arrowDirection
      }, {
        icon: U && H !== "top" ? () => U : null,
        title: oe,
        value: pe,
        extra: n.extra
      })
    }
  }
});
const $n = ee(j0);
let xi = 0;

function Q0(e) {
  e ? (xi || document.body.classList.add("van-toast--unclickable"), xi++) : xi && (xi--, xi || document.body.classList.remove("van-toast--unclickable"))
}
const [K0, Vo] = Y("toast"), Y0 = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay", "zIndex"], q0 = {
  icon: String,
  show: Boolean,
  type: te("text"),
  overlay: Boolean,
  message: Z,
  iconSize: Z,
  duration: lt(2e3),
  position: te("middle"),
  teleport: [String, Object],
  wordBreak: String,
  className: et,
  iconPrefix: String,
  transition: te("van-fade"),
  loadingType: String,
  forbidClick: Boolean,
  overlayClass: et,
  overlayStyle: Object,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean,
  zIndex: Z
};
var Ch = K({
  name: K0,
  props: q0,
  emits: ["update:show"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o, s = !1;
    const a = () => {
        const f = e.show && e.forbidClick;
        s !== f && (s = f, Q0(s))
      },
      l = f => t("update:show", f),
      r = () => {
        e.closeOnClick && l(!1)
      },
      c = () => clearTimeout(o),
      u = () => {
        const {
          icon: f,
          type: m,
          iconSize: g,
          iconPrefix: p,
          loadingType: y
        } = e;
        if (f || m === "success" || m === "fail") return h(Pe, {
          name: f || m,
          size: g,
          class: Vo("icon"),
          classPrefix: p
        }, null);
        if (m === "loading") return h(rn, {
          class: Vo("loading"),
          size: g,
          type: y
        }, null)
      },
      d = () => {
        const {
          type: f,
          message: m
        } = e;
        if (n.message) return h("div", {
          class: Vo("text")
        }, [n.message()]);
        if (Fe(m) && m !== "") return f === "html" ? h("div", {
          key: 0,
          class: Vo("text"),
          innerHTML: String(m)
        }, null) : h("div", {
          class: Vo("text")
        }, [m])
      };
    return re(() => [e.show, e.forbidClick], a), re(() => [e.show, e.type, e.message, e.duration], () => {
      c(), e.show && e.duration > 0 && (o = setTimeout(() => {
        l(!1)
      }, e.duration))
    }), at(a), gi(a), () => h(cn, De({
      class: [Vo([e.position, e.wordBreak === "normal" ? "break-normal" : e.wordBreak, {
        [e.type]: !e.icon
      }]), e.className],
      lockScroll: !1,
      onClick: r,
      onClosed: c,
      "onUpdate:show": l
    }, Ve(e, Y0)), {
      default: () => [u(), d()]
    })
  }
});

function Or() {
  const e = Ze({
      show: !1
    }),
    t = s => {
      e.show = s
    },
    n = s => {
      ke(e, s, {
        transitionAppear: !0
      }), t(!0)
    },
    o = () => t(!1);
  return $e({
    open: n,
    close: o,
    toggle: t
  }), {
    open: n,
    close: o,
    state: e,
    toggle: t
  }
}

function Br(e) {
  const t = Mf(e),
    n = document.createElement("div");
  return document.body.appendChild(n), {
    instance: t.mount(n),
    unmount() {
      t.unmount(), document.body.removeChild(n)
    }
  }
}
const G0 = {
  icon: "",
  type: "text",
  message: "",
  className: "",
  overlay: !1,
  onClose: void 0,
  onOpened: void 0,
  duration: 2e3,
  teleport: "body",
  iconSize: void 0,
  iconPrefix: void 0,
  position: "middle",
  transition: "van-fade",
  forbidClick: !1,
  loadingType: void 0,
  overlayClass: "",
  overlayStyle: void 0,
  closeOnClick: !1,
  closeOnClickOverlay: !1
};
let Cs = [],
  Z0 = !1,
  au = ke({}, G0);
const X0 = new Map;

function J0(e) {
  return wn(e) ? e : {
    message: e
  }
}

function eb() {
  const {
    instance: e,
    unmount: t
  } = Br({
    setup() {
      const n = F(""),
        {
          open: o,
          state: s,
          close: a,
          toggle: l
        } = Or(),
        r = () => {},
        c = () => h(Ch, De(s, {
          onClosed: r,
          "onUpdate:show": l
        }), null);
      return re(n, u => {
        s.message = u
      }), ln().render = c, {
        open: o,
        close: a,
        message: n
      }
    }
  });
  return e
}

function tb() {
  if (!Cs.length || Z0) {
    const e = eb();
    Cs.push(e)
  }
  return Cs[Cs.length - 1]
}

function Nl(e = {}) {
  if (!zt) return {};
  const t = tb(),
    n = J0(e);
  return t.open(ke({}, au, X0.get(n.type || au.type), n)), t
}
const nb = ee(Ch),
  [ob, tl] = Y("switch"),
  ib = {
    size: Z,
    loading: Boolean,
    disabled: Boolean,
    modelValue: et,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: et,
      default: !0
    },
    inactiveValue: {
      type: et,
      default: !1
    }
  };
var sb = K({
  name: ob,
  props: ib,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = () => e.modelValue === e.activeValue,
      s = () => {
        if (!e.disabled && !e.loading) {
          const l = o() ? e.inactiveValue : e.activeValue;
          t("update:modelValue", l), t("change", l)
        }
      },
      a = () => {
        if (e.loading) {
          const l = o() ? e.activeColor : e.inactiveColor;
          return h(rn, {
            class: tl("loading"),
            color: l
          }, null)
        }
        if (n.node) return n.node()
      };
    return vo(() => e.modelValue), () => {
      var l;
      const {
        size: r,
        loading: c,
        disabled: u,
        activeColor: d,
        inactiveColor: f
      } = e, m = o(), g = {
        fontSize: Ie(r),
        backgroundColor: m ? d : f
      };
      return h("div", {
        role: "switch",
        class: tl({
          on: m,
          loading: c,
          disabled: u
        }),
        style: g,
        tabindex: u ? void 0 : 0,
        "aria-checked": m,
        onClick: s
      }, [h("div", {
        class: tl("node")
      }, [a()]), (l = n.background) == null ? void 0 : l.call(n)])
    }
  }
});
const Rr = ee(sb),
  [ab, lu] = Y("address-edit-detail"),
  ru = Y("address-edit")[2];
var lb = K({
  name: ab,
  props: {
    show: Boolean,
    rows: Z,
    value: String,
    rules: Array,
    focused: Boolean,
    maxlength: Z,
    searchResult: Array,
    showSearchResult: Boolean
  },
  emits: ["blur", "focus", "input", "selectSearch"],
  setup(e, {
    emit: t
  }) {
    const n = F(),
      o = () => e.focused && e.searchResult && e.showSearchResult,
      s = u => {
        t("selectSearch", u), t("input", `${u.address||""} ${u.name||""}`.trim())
      },
      a = () => {
        if (!o()) return;
        const {
          searchResult: u
        } = e;
        return u.map(d => h(un, {
          clickable: !0,
          key: (d.name || "") + (d.address || ""),
          icon: "location-o",
          title: d.name,
          label: d.address,
          class: lu("search-item"),
          border: !1,
          onClick: () => s(d)
        }, null))
      },
      l = u => t("blur", u),
      r = u => t("focus", u),
      c = u => t("input", u);
    return () => {
      if (e.show) return h(Be, null, [h($n, {
        autosize: !0,
        clearable: !0,
        ref: n,
        class: lu(),
        rows: e.rows,
        type: "textarea",
        rules: e.rules,
        label: ru("addressDetail"),
        border: !o(),
        maxlength: e.maxlength,
        modelValue: e.value,
        placeholder: ru("addressDetail"),
        onBlur: l,
        onFocus: r,
        "onUpdate:modelValue": c
      }, null), a()])
    }
  }
});
const [rb, Ho, At] = Y("address-edit"), _h = {
  name: "",
  tel: "",
  city: "",
  county: "",
  country: "",
  province: "",
  areaCode: "",
  isDefault: !1,
  addressDetail: ""
}, cb = {
  areaList: Object,
  isSaving: Boolean,
  isDeleting: Boolean,
  validator: Function,
  showArea: j,
  showDetail: j,
  showDelete: Boolean,
  disableArea: Boolean,
  searchResult: Array,
  telMaxlength: Z,
  showSetDefault: Boolean,
  saveButtonText: String,
  areaPlaceholder: String,
  deleteButtonText: String,
  showSearchResult: Boolean,
  detailRows: ge(1),
  detailMaxlength: ge(200),
  areaColumnsPlaceholder: Xe(),
  addressInfo: {
    type: Object,
    default: () => ke({}, _h)
  },
  telValidator: {
    type: Function,
    default: md
  }
};
var ub = K({
  name: rb,
  props: cb,
  emits: ["save", "focus", "change", "delete", "clickArea", "changeArea", "changeDetail", "selectSearch", "changeDefault"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = Ze({}),
      a = F(!1),
      l = F(!1),
      r = N(() => wn(e.areaList) && Object.keys(e.areaList).length),
      c = N(() => {
        const {
          province: I,
          city: D,
          county: S,
          areaCode: B
        } = s;
        if (B) {
          const R = [I, D, S];
          return I && I === D && R.splice(1, 1), R.filter(Boolean).join("/")
        }
        return ""
      }),
      u = N(() => {
        var I;
        return ((I = e.searchResult) == null ? void 0 : I.length) && l.value
      }),
      d = I => {
        l.value = I === "addressDetail", t("focus", I)
      },
      f = (I, D) => {
        t("change", {
          key: I,
          value: D
        })
      },
      m = N(() => {
        const {
          validator: I,
          telValidator: D
        } = e, S = (B, R) => ({
          validator: x => {
            if (I) {
              const P = I(B, x);
              if (P) return P
            }
            return x ? !0 : R
          }
        });
        return {
          name: [S("name", At("nameEmpty"))],
          tel: [S("tel", At("telInvalid")), {
            validator: D,
            message: At("telInvalid")
          }],
          areaCode: [S("areaCode", At("areaEmpty"))],
          addressDetail: [S("addressDetail", At("addressEmpty"))]
        }
      }),
      g = () => t("save", s),
      p = I => {
        s.addressDetail = I, t("changeDetail", I)
      },
      y = I => {
        s.province = I[0].text, s.city = I[1].text, s.county = I[2].text
      },
      b = ({
        selectedValues: I,
        selectedOptions: D
      }) => {
        I.some(S => S === ii) ? Nl(At("areaEmpty")) : (a.value = !1, y(D), t("changeArea", D))
      },
      w = () => t("delete", s),
      v = I => {
        s.areaCode = I || ""
      },
      C = () => {
        setTimeout(() => {
          l.value = !1
        })
      },
      _ = I => {
        s.addressDetail = I
      },
      k = () => {
        if (e.showSetDefault) {
          const I = {
            "right-icon": () => h(Rr, {
              modelValue: s.isDefault,
              "onUpdate:modelValue": D => s.isDefault = D,
              onChange: D => t("changeDefault", D)
            }, null)
          };
          return rt(h(un, {
            center: !0,
            border: !1,
            title: At("defaultAddress"),
            class: Ho("default")
          }, I), [
            [dt, !u.value]
          ])
        }
      };
    return $e({
      setAreaCode: v,
      setAddressDetail: _
    }), re(() => e.addressInfo, I => {
      ke(s, _h, I), Oe(() => {
        var D;
        const S = (D = o.value) == null ? void 0 : D.getSelectedOptions();
        S && S.every(B => B && B.value !== ii) && y(S)
      })
    }, {
      deep: !0,
      immediate: !0
    }), () => {
      const {
        disableArea: I
      } = e;
      return h(Ir, {
        class: Ho(),
        onSubmit: g
      }, {
        default: () => {
          var D;
          return [h("div", {
            class: Ho("fields")
          }, [h($n, {
            modelValue: s.name,
            "onUpdate:modelValue": [S => s.name = S, S => f("name", S)],
            clearable: !0,
            label: At("name"),
            rules: m.value.name,
            placeholder: At("name"),
            onFocus: () => d("name")
          }, null), h($n, {
            modelValue: s.tel,
            "onUpdate:modelValue": [S => s.tel = S, S => f("tel", S)],
            clearable: !0,
            type: "tel",
            label: At("tel"),
            rules: m.value.tel,
            maxlength: e.telMaxlength,
            placeholder: At("tel"),
            onFocus: () => d("tel")
          }, null), rt(h($n, {
            readonly: !0,
            label: At("area"),
            "is-link": !I,
            modelValue: c.value,
            rules: e.showArea ? m.value.areaCode : void 0,
            placeholder: e.areaPlaceholder || At("area"),
            onFocus: () => d("areaCode"),
            onClick: () => {
              t("clickArea"), a.value = !I
            }
          }, null), [
            [dt, e.showArea]
          ]), h(lb, {
            show: e.showDetail,
            rows: e.detailRows,
            rules: m.value.addressDetail,
            value: s.addressDetail,
            focused: l.value,
            maxlength: e.detailMaxlength,
            searchResult: e.searchResult,
            showSearchResult: e.showSearchResult,
            onBlur: C,
            onFocus: () => d("addressDetail"),
            onInput: p,
            onSelectSearch: S => t("selectSearch", S)
          }, null), (D = n.default) == null ? void 0 : D.call(n)]), k(), rt(h("div", {
            class: Ho("buttons")
          }, [h(Tt, {
            block: !0,
            round: !0,
            type: "primary",
            text: e.saveButtonText || At("save"),
            class: Ho("button"),
            loading: e.isSaving,
            nativeType: "submit"
          }, null), e.showDelete && h(Tt, {
            block: !0,
            round: !0,
            class: Ho("button"),
            loading: e.isDeleting,
            text: e.deleteButtonText || At("delete"),
            onClick: w
          }, null)]), [
            [dt, !u.value]
          ]), h(cn, {
            show: a.value,
            "onUpdate:show": S => a.value = S,
            round: !0,
            teleport: "body",
            position: "bottom",
            lazyRender: !1
          }, {
            default: () => [h(bh, {
              modelValue: s.areaCode,
              "onUpdate:modelValue": S => s.areaCode = S,
              ref: o,
              loading: !r.value,
              areaList: e.areaList,
              columnsPlaceholder: e.areaColumnsPlaceholder,
              onConfirm: b,
              onCancel: () => {
                a.value = !1
              }
            }, null)]
          })]
        }
      })
    }
  }
});
const db = ee(ub),
  [kh, fb] = Y("radio-group"),
  hb = {
    shape: String,
    disabled: Boolean,
    iconSize: Z,
    direction: String,
    modelValue: et,
    checkedColor: String
  },
  Sh = Symbol(kh);
var mb = K({
  name: kh,
  props: hb,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      linkChildren: o
    } = xt(Sh), s = a => t("update:modelValue", a);
    return re(() => e.modelValue, a => t("change", a)), o({
      props: e,
      updateValue: s
    }), vo(() => e.modelValue), () => {
      var a;
      return h("div", {
        class: fb([e.direction]),
        role: "radiogroup"
      }, [(a = n.default) == null ? void 0 : a.call(n)])
    }
  }
});
const Dr = ee(mb),
  [Th, gb] = Y("checkbox-group"),
  vb = {
    max: Z,
    shape: te("round"),
    disabled: Boolean,
    iconSize: Z,
    direction: String,
    modelValue: Xe(),
    checkedColor: String
  },
  xh = Symbol(Th);
var yb = K({
  name: Th,
  props: vb,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      children: o,
      linkChildren: s
    } = xt(xh), a = r => t("update:modelValue", r), l = (r = {}) => {
      typeof r == "boolean" && (r = {
        checked: r
      });
      const {
        checked: c,
        skipDisabled: u
      } = r, f = o.filter(m => m.props.bindGroup ? m.props.disabled && u ? m.checked.value : c ?? !m.checked.value : !1).map(m => m.name);
      a(f)
    };
    return re(() => e.modelValue, r => t("change", r)), $e({
      toggleAll: l
    }), vo(() => e.modelValue), s({
      props: e,
      updateValue: a
    }), () => {
      var r;
      return h("div", {
        class: gb([e.direction])
      }, [(r = n.default) == null ? void 0 : r.call(n)])
    }
  }
});
const Ah = ee(yb),
  [pb, cu] = Y("tag"),
  bb = {
    size: String,
    mark: Boolean,
    show: j,
    type: te("default"),
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean
  };
var wb = K({
  name: pb,
  props: bb,
  emits: ["close"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const o = l => {
        l.stopPropagation(), n("close", l)
      },
      s = () => e.plain ? {
        color: e.textColor || e.color,
        borderColor: e.color
      } : {
        color: e.textColor,
        background: e.color
      },
      a = () => {
        var l;
        const {
          type: r,
          mark: c,
          plain: u,
          round: d,
          size: f,
          closeable: m
        } = e, g = {
          mark: c,
          plain: u,
          round: d
        };
        f && (g[f] = f);
        const p = m && h(Pe, {
          name: "cross",
          class: [cu("close"), St],
          onClick: o
        }, null);
        return h("span", {
          style: s(),
          class: cu([g, r])
        }, [(l = t.default) == null ? void 0 : l.call(t), p])
      };
    return () => h(ya, {
      name: e.closeable ? "van-fade" : void 0
    }, {
      default: () => [e.show ? a() : null]
    })
  }
});
const Ea = ee(wb),
  $r = {
    name: et,
    disabled: Boolean,
    iconSize: Z,
    modelValue: et,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean
  };
var Eh = K({
  props: ke({}, $r, {
    bem: gt(Function),
    role: String,
    shape: String,
    parent: Object,
    checked: Boolean,
    bindGroup: j,
    indeterminate: {
      type: Boolean,
      default: null
    }
  }),
  emits: ["click", "toggle"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = m => {
        if (e.parent && e.bindGroup) return e.parent.props[m]
      },
      a = N(() => {
        if (e.parent && e.bindGroup) {
          const m = s("disabled") || e.disabled;
          if (e.role === "checkbox") {
            const g = s("modelValue").length,
              p = s("max"),
              y = p && g >= +p;
            return m || y && !e.checked
          }
          return m
        }
        return e.disabled
      }),
      l = N(() => s("direction")),
      r = N(() => {
        const m = e.checkedColor || s("checkedColor");
        if (m && e.checked && !a.value) return {
          borderColor: m,
          backgroundColor: m
        }
      }),
      c = N(() => e.shape || s("shape") || "round"),
      u = m => {
        const {
          target: g
        } = m, p = o.value, y = p === g || (p == null ? void 0 : p.contains(g));
        !a.value && (y || !e.labelDisabled) && t("toggle"), t("click", m)
      },
      d = () => {
        var m, g;
        const {
          bem: p,
          checked: y,
          indeterminate: b
        } = e, w = e.iconSize || s("iconSize");
        return h("div", {
          ref: o,
          class: p("icon", [c.value, {
            disabled: a.value,
            checked: y,
            indeterminate: b
          }]),
          style: c.value !== "dot" ? {
            fontSize: Ie(w)
          } : {
            width: Ie(w),
            height: Ie(w),
            borderColor: (m = r.value) == null ? void 0 : m.borderColor
          }
        }, [n.icon ? n.icon({
          checked: y,
          disabled: a.value
        }) : c.value !== "dot" ? h(Pe, {
          name: b ? "minus" : "success",
          style: r.value
        }, null) : h("div", {
          class: p("icon--dot__icon"),
          style: {
            backgroundColor: (g = r.value) == null ? void 0 : g.backgroundColor
          }
        }, null)])
      },
      f = () => {
        const {
          checked: m
        } = e;
        if (n.default) return h("span", {
          class: e.bem("label", [e.labelPosition, {
            disabled: a.value
          }])
        }, [n.default({
          checked: m,
          disabled: a.value
        })])
      };
    return () => {
      const m = e.labelPosition === "left" ? [f(), d()] : [d(), f()];
      return h("div", {
        role: e.role,
        class: e.bem([{
          disabled: a.value,
          "label-disabled": e.labelDisabled
        }, l.value]),
        tabindex: a.value ? void 0 : 0,
        "aria-checked": e.checked,
        onClick: u
      }, [m])
    }
  }
});
const Cb = ke({}, $r, {
    shape: String
  }),
  [_b, kb] = Y("radio");
var Sb = K({
  name: _b,
  props: Cb,
  emits: ["update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      parent: o
    } = pt(Sh), s = () => (o ? o.props.modelValue : e.modelValue) === e.name, a = () => {
      o ? o.updateValue(e.name) : t("update:modelValue", e.name)
    };
    return () => h(Eh, De({
      bem: kb,
      role: "radio",
      parent: o,
      checked: s(),
      onToggle: a
    }, e), Ve(n, ["default", "icon"]))
  }
});
const Mr = ee(Sb),
  [Tb, xb] = Y("checkbox"),
  Ab = ke({}, $r, {
    shape: String,
    bindGroup: j,
    indeterminate: {
      type: Boolean,
      default: null
    }
  });
var Eb = K({
  name: Tb,
  props: Ab,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      parent: o
    } = pt(xh), s = r => {
      const {
        name: c
      } = e, {
        max: u,
        modelValue: d
      } = o.props, f = d.slice();
      if (r) !(u && f.length >= +u) && !f.includes(c) && (f.push(c), e.bindGroup && o.updateValue(f));
      else {
        const m = f.indexOf(c);
        m !== -1 && (f.splice(m, 1), e.bindGroup && o.updateValue(f))
      }
    }, a = N(() => o && e.bindGroup ? o.props.modelValue.indexOf(e.name) !== -1 : !!e.modelValue), l = (r = !a.value) => {
      o && e.bindGroup ? s(r) : t("update:modelValue", r), e.indeterminate !== null && t("change", r)
    };
    return re(() => e.modelValue, r => {
      e.indeterminate === null && t("change", r)
    }), $e({
      toggle: l,
      props: e,
      checked: a
    }), vo(() => e.modelValue), () => h(Eh, De({
      bem: xb,
      role: "checkbox",
      parent: o,
      checked: a.value,
      onToggle: l
    }, e), Ve(n, ["default", "icon"]))
  }
});
const Lr = ee(Eb),
  [Ib, Uo] = Y("address-item");
var Pb = K({
  name: Ib,
  props: {
    address: gt(Object),
    disabled: Boolean,
    switchable: Boolean,
    singleChoice: Boolean,
    defaultTagText: String,
    rightIcon: te("edit")
  },
  emits: ["edit", "click", "select"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const o = r => {
        e.switchable && n("select"), n("click", r)
      },
      s = () => h(Pe, {
        name: e.rightIcon,
        class: Uo("edit"),
        onClick: r => {
          r.stopPropagation(), n("edit"), n("click", r)
        }
      }, null),
      a = () => {
        if (t.tag) return t.tag(e.address);
        if (e.address.isDefault && e.defaultTagText) return h(Ea, {
          type: "primary",
          round: !0,
          class: Uo("tag")
        }, {
          default: () => [e.defaultTagText]
        })
      },
      l = () => {
        const {
          address: r,
          disabled: c,
          switchable: u,
          singleChoice: d
        } = e, f = [h("div", {
          class: Uo("name")
        }, [`${r.name} ${r.tel}`, a()]), h("div", {
          class: Uo("address")
        }, [r.address])];
        return u && !c ? d ? h(Mr, {
          name: r.id,
          iconSize: 18
        }, {
          default: () => [f]
        }) : h(Lr, {
          name: r.id,
          iconSize: 18
        }, {
          default: () => [f]
        }) : f
      };
    return () => {
      var r;
      const {
        disabled: c
      } = e;
      return h("div", {
        class: Uo({
          disabled: c
        }),
        onClick: o
      }, [h(un, {
        border: !1,
        titleClass: Uo("title")
      }, {
        title: l,
        "right-icon": s
      }), (r = t.bottom) == null ? void 0 : r.call(t, ke({}, e.address, {
        disabled: c
      }))])
    }
  }
});
const [Ob, _s, Bb] = Y("address-list"), Rb = {
  list: Xe(),
  modelValue: [...Z, Array],
  switchable: j,
  disabledText: String,
  disabledList: Xe(),
  showAddButton: j,
  addButtonText: String,
  defaultTagText: String,
  rightIcon: te("edit")
};
var Db = K({
  name: Ob,
  props: Rb,
  emits: ["add", "edit", "select", "clickItem", "editDisabled", "selectDisabled", "update:modelValue"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const o = N(() => !Array.isArray(e.modelValue)),
      s = (r, c, u) => {
        const d = () => n(u ? "editDisabled" : "edit", r, c),
          f = g => n("clickItem", r, c, {
            event: g
          }),
          m = () => {
            if (n(u ? "selectDisabled" : "select", r, c), !u)
              if (o.value) n("update:modelValue", r.id);
              else {
                const g = e.modelValue;
                g.includes(r.id) ? n("update:modelValue", g.filter(p => p !== r.id)) : n("update:modelValue", [...g, r.id])
              }
          };
        return h(Pb, {
          key: r.id,
          address: r,
          disabled: u,
          switchable: e.switchable,
          singleChoice: o.value,
          defaultTagText: e.defaultTagText,
          rightIcon: e.rightIcon,
          onEdit: d,
          onClick: f,
          onSelect: m
        }, {
          bottom: t["item-bottom"],
          tag: t.tag
        })
      },
      a = (r, c) => {
        if (r) return r.map((u, d) => s(u, d, c))
      },
      l = () => e.showAddButton ? h("div", {
        class: [_s("bottom"), "van-safe-area-bottom"]
      }, [h(Tt, {
        round: !0,
        block: !0,
        type: "primary",
        text: e.addButtonText || Bb("add"),
        class: _s("add"),
        onClick: () => n("add")
      }, null)]) : void 0;
    return () => {
      var r, c;
      const u = a(e.list),
        d = a(e.disabledList, !0),
        f = e.disabledText && h("div", {
          class: _s("disabled-text")
        }, [e.disabledText]);
      return h("div", {
        class: _s()
      }, [(r = t.top) == null ? void 0 : r.call(t), !o.value && Array.isArray(e.modelValue) ? h(Ah, {
        modelValue: e.modelValue
      }, {
        default: () => [u]
      }) : h(Dr, {
        modelValue: e.modelValue
      }, {
        default: () => [u]
      }), f, d, (c = t.default) == null ? void 0 : c.call(t), l()])
    }
  }
});
const $b = ee(Db);

function Mb(e, t) {
  let n = null,
    o = 0;
  return function(...s) {
    if (n) return;
    const a = Date.now() - o,
      l = () => {
        o = Date.now(), n = !1, e.apply(this, s)
      };
    a >= t ? l() : n = setTimeout(l, t)
  }
}
const [Lb, nl] = Y("back-top"), Nb = {
  right: Z,
  bottom: Z,
  zIndex: Z,
  target: [String, Object],
  offset: ge(200),
  immediate: Boolean,
  teleport: {
    type: [String, Object],
    default: "body"
  }
};
var Fb = K({
  name: Lb,
  inheritAttrs: !1,
  props: Nb,
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: n,
    attrs: o
  }) {
    let s = !1;
    const a = F(!1),
      l = F(),
      r = F(),
      c = N(() => ke(Un(e.zIndex), {
        right: Ie(e.right),
        bottom: Ie(e.bottom)
      })),
      u = g => {
        var p;
        t("click", g), (p = r.value) == null || p.scrollTo({
          top: 0,
          behavior: e.immediate ? "auto" : "smooth"
        })
      },
      d = () => {
        a.value = r.value ? Ln(r.value) >= +e.offset : !1
      },
      f = () => {
        const {
          target: g
        } = e;
        if (typeof g == "string") {
          const p = document.querySelector(g);
          if (p) return p
        } else return g
      },
      m = () => {
        zt && Oe(() => {
          r.value = e.target ? f() : br(l.value), d()
        })
      };
    return st("scroll", Mb(d, 100), {
      target: r
    }), at(m), Cn(() => {
      s && (a.value = !0, s = !1)
    }), _n(() => {
      a.value && e.teleport && (a.value = !1, s = !0)
    }), re(() => e.target, m), () => {
      const g = h("div", De({
        ref: e.teleport ? void 0 : l,
        class: nl({
          active: a.value
        }),
        style: c.value,
        onClick: u
      }, o), [n.default ? n.default() : h(Pe, {
        name: "back-top",
        class: nl("icon")
      }, null)]);
      return e.teleport ? [h("div", {
        ref: l,
        class: nl("placeholder")
      }, null), h($o, {
        to: e.teleport
      }, {
        default: () => [g]
      })] : g
    }
  }
});
const zb = ee(Fb);
var Vb = (e, t, n) => new Promise((o, s) => {
  var a = c => {
      try {
        r(n.next(c))
      } catch (u) {
        s(u)
      }
    },
    l = c => {
      try {
        r(n.throw(c))
      } catch (u) {
        s(u)
      }
    },
    r = c => c.done ? o(c.value) : Promise.resolve(c.value).then(a, l);
  r((n = n.apply(e, t)).next())
});
const Hb = {
    top: ge(10),
    rows: ge(4),
    duration: ge(4e3),
    autoPlay: j,
    delay: lt(300),
    modelValue: Xe()
  },
  [Ub, uu] = Y("barrage");
var Wb = K({
  name: Ub,
  props: Hb,
  emits: ["update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = uu("item"),
      a = F(0),
      l = [],
      r = (y, b = e.delay) => {
        const w = document.createElement("span");
        return w.className = s, w.innerText = String(y), w.style.animationDuration = `${e.duration}ms`, w.style.animationDelay = `${b}ms`, w.style.animationName = "van-barrage", w.style.animationTimingFunction = "linear", w
      },
      c = F(!0),
      u = F(e.autoPlay),
      d = ({
        id: y,
        text: b
      }, w) => {
        var v;
        const C = r(b, c.value ? w * e.delay : void 0);
        !e.autoPlay && u.value === !1 && (C.style.animationPlayState = "paused"), (v = o.value) == null || v.append(C), a.value++;
        const _ = (a.value - 1) % +e.rows * C.offsetHeight + +e.top;
        C.style.top = `${_}px`, C.dataset.id = String(y), l.push(C), C.addEventListener("animationend", () => {
          t("update:modelValue", [...e.modelValue].filter(k => String(k.id) !== C.dataset.id))
        })
      },
      f = (y, b) => {
        const w = new Map(b.map(v => [v.id, v]));
        y.forEach((v, C) => {
          w.has(v.id) ? w.delete(v.id) : d(v, C)
        }), w.forEach(v => {
          const C = l.findIndex(_ => _.dataset.id === String(v.id));
          C > -1 && (l[C].remove(), l.splice(C, 1))
        }), c.value = !1
      };
    re(() => e.modelValue.slice(), (y, b) => f(y ?? [], b ?? []), {
      deep: !0
    });
    const m = F({});
    return at(() => Vb(this, null, function*() {
      var y;
      m.value["--move-distance"] = `-${(y=o.value)==null?void 0:y.offsetWidth}px`, yield Oe(), f(e.modelValue, [])
    })), $e({
      play: () => {
        u.value = !0, l.forEach(y => {
          y.style.animationPlayState = "running"
        })
      },
      pause: () => {
        u.value = !1, l.forEach(y => {
          y.style.animationPlayState = "paused"
        })
      }
    }), () => {
      var y;
      return h("div", {
        class: uu(),
        ref: o,
        style: m.value
      }, [(y = n.default) == null ? void 0 : y.call(n)])
    }
  }
});
const jb = ee(Wb),
  [Qb, nt, Mn] = Y("calendar"),
  Kb = e => Mn("monthTitle", e.getFullYear(), e.getMonth() + 1);

function Eo(e, t) {
  const n = e.getFullYear(),
    o = t.getFullYear();
  if (n === o) {
    const s = e.getMonth(),
      a = t.getMonth();
    return s === a ? 0 : s > a ? 1 : -1
  }
  return n > o ? 1 : -1
}

function Dt(e, t) {
  const n = Eo(e, t);
  if (n === 0) {
    const o = e.getDate(),
      s = t.getDate();
    return o === s ? 0 : o > s ? 1 : -1
  }
  return n
}
const di = e => new Date(e),
  du = e => Array.isArray(e) ? e.map(di) : di(e);

function Nr(e, t) {
  const n = di(e);
  return n.setDate(n.getDate() + t), n
}

function Fr(e, t) {
  const n = di(e);
  return n.setMonth(n.getMonth() + t), n.getDate() !== e.getDate() && n.setDate(0), n
}

function Ih(e, t) {
  const n = di(e);
  return n.setFullYear(n.getFullYear() + t), n.getDate() !== e.getDate() && n.setDate(0), n
}
const Fl = e => Nr(e, -1),
  zl = e => Nr(e, 1),
  fu = e => Fr(e, -1),
  hu = e => Fr(e, 1),
  mu = e => Ih(e, -1),
  gu = e => Ih(e, 1),
  ks = () => {
    const e = new Date;
    return e.setHours(0, 0, 0, 0), e
  };

function Yb(e) {
  const t = e[0].getTime();
  return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1
}
const Ph = ke({}, Ta, {
    modelValue: Xe(),
    filter: Function,
    formatter: {
      type: Function,
      default: (e, t) => t
    }
  }),
  Oh = Object.keys(Ta);

function qb(e, t) {
  if (e < 0) return [];
  const n = Array(e);
  let o = -1;
  for (; ++o < e;) n[o] = t(o);
  return n
}
const Bh = (e, t) => 32 - new Date(e, t - 1, 32).getDate(),
  si = (e, t, n, o, s, a) => {
    const l = qb(t - e + 1, r => {
      const c = Xt(e + r);
      return o(n, {
        text: c,
        value: c
      })
    });
    return s ? s(n, l, a) : l
  },
  Rh = (e, t) => e.map((n, o) => {
    const s = t[o];
    if (s.length) {
      const a = +s[0].value,
        l = +s[s.length - 1].value;
      return Xt(ht(+n, a, l))
    }
    return n
  }),
  [Gb] = Y("calendar-day");
var Zb = K({
  name: Gb,
  props: {
    item: gt(Object),
    color: String,
    index: Number,
    offset: lt(0),
    rowHeight: String
  },
  emits: ["click", "clickDisabledDate"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = N(() => {
        var c;
        const {
          item: u,
          index: d,
          color: f,
          offset: m,
          rowHeight: g
        } = e, p = {
          height: g
        };
        if (u.type === "placeholder") return p.width = "100%", p;
        if (d === 0 && (p.marginLeft = `${100*m/7}%`), f) switch (u.type) {
          case "end":
          case "start":
          case "start-end":
          case "multiple-middle":
          case "multiple-selected":
            p.background = f;
            break;
          case "middle":
            p.color = f;
            break
        }
        return m + (((c = u.date) == null ? void 0 : c.getDate()) || 1) > 28 && (p.marginBottom = 0), p
      }),
      s = () => {
        e.item.type !== "disabled" ? t("click", e.item) : t("clickDisabledDate", e.item)
      },
      a = () => {
        const {
          topInfo: c
        } = e.item;
        if (c || n["top-info"]) return h("div", {
          class: nt("top-info")
        }, [n["top-info"] ? n["top-info"](e.item) : c])
      },
      l = () => {
        const {
          bottomInfo: c
        } = e.item;
        if (c || n["bottom-info"]) return h("div", {
          class: nt("bottom-info")
        }, [n["bottom-info"] ? n["bottom-info"](e.item) : c])
      },
      r = () => {
        const {
          item: c,
          color: u,
          rowHeight: d
        } = e, {
          type: f,
          text: m
        } = c, g = [a(), m, l()];
        return f === "selected" ? h("div", {
          class: nt("selected-day"),
          style: {
            width: d,
            height: d,
            background: u
          }
        }, [g]) : g
      };
    return () => {
      const {
        type: c,
        className: u
      } = e.item;
      return c === "placeholder" ? h("div", {
        class: nt("day"),
        style: o.value
      }, null) : h("div", {
        role: "gridcell",
        style: o.value,
        class: [nt("day", c), u],
        tabindex: c === "disabled" ? void 0 : -1,
        onClick: s
      }, [r()])
    }
  }
});
const [Xb] = Y("calendar-month"), Jb = {
  date: gt(Date),
  type: String,
  color: String,
  minDate: Date,
  maxDate: Date,
  showMark: Boolean,
  rowHeight: Z,
  formatter: Function,
  lazyRender: Boolean,
  currentDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: Boolean,
  showMonthTitle: Boolean,
  firstDayOfWeek: Number
};
var e1 = K({
  name: Xb,
  props: Jb,
  emits: ["click", "clickDisabledDate"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const [o, s] = Ty(), a = F(), l = F(), r = qf(l), c = N(() => Kb(e.date)), u = N(() => Ie(e.rowHeight)), d = N(() => {
      const R = e.date.getDate(),
        P = (e.date.getDay() - R % 7 + 8) % 7;
      return e.firstDayOfWeek ? (P + 7 - e.firstDayOfWeek) % 7 : P
    }), f = N(() => Bh(e.date.getFullYear(), e.date.getMonth() + 1)), m = N(() => o.value || !e.lazyRender), g = () => c.value, p = R => {
      const x = P => e.currentDate.some(M => Dt(M, P) === 0);
      if (x(R)) {
        const P = Fl(R),
          M = zl(R),
          J = x(P),
          ce = x(M);
        return J && ce ? "multiple-middle" : J ? "end" : ce ? "start" : "multiple-selected"
      }
      return ""
    }, y = R => {
      const [x, P] = e.currentDate;
      if (!x) return "";
      const M = Dt(R, x);
      if (!P) return M === 0 ? "start" : "";
      const J = Dt(R, P);
      return e.allowSameDay && M === 0 && J === 0 ? "start-end" : M === 0 ? "start" : J === 0 ? "end" : M > 0 && J < 0 ? "middle" : ""
    }, b = R => {
      const {
        type: x,
        minDate: P,
        maxDate: M,
        currentDate: J
      } = e;
      if (P && Dt(R, P) < 0 || M && Dt(R, M) > 0) return "disabled";
      if (J === null) return "";
      if (Array.isArray(J)) {
        if (x === "multiple") return p(R);
        if (x === "range") return y(R)
      } else if (x === "single") return Dt(R, J) === 0 ? "selected" : "";
      return ""
    }, w = R => {
      if (e.type === "range") {
        if (R === "start" || R === "end") return Mn(R);
        if (R === "start-end") return `${Mn("start")}/${Mn("end")}`
      }
    }, v = () => {
      if (e.showMonthTitle) return h("div", {
        class: nt("month-title")
      }, [n["month-title"] ? n["month-title"]({
        date: e.date,
        text: c.value
      }) : c.value])
    }, C = () => {
      if (e.showMark && m.value) return h("div", {
        class: nt("month-mark")
      }, [e.date.getMonth() + 1])
    }, _ = N(() => {
      const R = Math.ceil((f.value + d.value) / 7);
      return Array(R).fill({
        type: "placeholder"
      })
    }), k = N(() => {
      const R = [],
        x = e.date.getFullYear(),
        P = e.date.getMonth();
      for (let M = 1; M <= f.value; M++) {
        const J = new Date(x, P, M),
          ce = b(J);
        let W = {
          date: J,
          type: ce,
          text: M,
          bottomInfo: w(ce)
        };
        e.formatter && (W = e.formatter(W)), R.push(W)
      }
      return R
    }), I = N(() => k.value.filter(R => R.type === "disabled")), D = (R, x) => {
      if (a.value) {
        const P = Ue(a.value),
          M = _.value.length,
          ce = (Math.ceil((x.getDate() + d.value) / 7) - 1) * P.height / M;
        Zs(R, P.top + ce + R.scrollTop - Ue(R).top)
      }
    }, S = (R, x) => h(Zb, {
      item: R,
      index: x,
      color: e.color,
      offset: d.value,
      rowHeight: u.value,
      onClick: P => t("click", P),
      onClickDisabledDate: P => t("clickDisabledDate", P)
    }, Ve(n, ["top-info", "bottom-info"])), B = () => h("div", {
      ref: a,
      role: "grid",
      class: nt("days")
    }, [C(), (m.value ? k : _).value.map(S)]);
    return $e({
      getTitle: g,
      getHeight: () => r.value,
      setVisible: s,
      scrollToDate: D,
      disabledDays: I
    }), () => h("div", {
      class: nt("month"),
      ref: l
    }, [v(), B()])
  }
});
const [t1] = Y("calendar-header");
var n1 = K({
  name: t1,
  props: {
    date: Date,
    minDate: Date,
    maxDate: Date,
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number,
    switchMode: te("none")
  },
  emits: ["clickSubtitle", "panelChange"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const o = N(() => e.date && e.minDate && Eo(fu(e.date), e.minDate) < 0),
      s = N(() => e.date && e.minDate && Eo(mu(e.date), e.minDate) < 0),
      a = N(() => e.date && e.maxDate && Eo(hu(e.date), e.maxDate) > 0),
      l = N(() => e.date && e.maxDate && Eo(gu(e.date), e.maxDate) > 0),
      r = () => {
        if (e.showTitle) {
          const g = e.title || Mn("title"),
            p = t.title ? t.title() : g;
          return h("div", {
            class: nt("header-title")
          }, [p])
        }
      },
      c = g => n("clickSubtitle", g),
      u = g => n("panelChange", g),
      d = g => {
        const p = e.switchMode === "year-month",
          y = t[g ? "next-month" : "prev-month"],
          b = t[g ? "next-year" : "prev-year"],
          w = g ? a.value : o.value,
          v = g ? l.value : s.value,
          C = g ? "arrow" : "arrow-left",
          _ = g ? "arrow-double-right" : "arrow-double-left",
          k = () => u((g ? hu : fu)(e.date)),
          I = () => u((g ? gu : mu)(e.date)),
          D = h("view", {
            class: nt("header-action", {
              disabled: w
            }),
            onClick: w ? void 0 : k
          }, [y ? y({
            disabled: w
          }) : h(Pe, {
            class: {
              [St]: !w
            },
            name: C
          }, null)]),
          S = p && h("view", {
            class: nt("header-action", {
              disabled: v
            }),
            onClick: v ? void 0 : I
          }, [b ? b({
            disabled: v
          }) : h(Pe, {
            class: {
              [St]: !v
            },
            name: _
          }, null)]);
        return g ? [D, S] : [S, D]
      },
      f = () => {
        if (e.showSubtitle) {
          const g = t.subtitle ? t.subtitle({
              date: e.date,
              text: e.subtitle
            }) : e.subtitle,
            p = e.switchMode !== "none";
          return h("div", {
            class: nt("header-subtitle", {
              "with-swicth": p
            }),
            onClick: c
          }, [p ? [d(), h("div", {
            class: nt("header-subtitle-text")
          }, [g]), d(!0)] : g])
        }
      },
      m = () => {
        const {
          firstDayOfWeek: g
        } = e, p = Mn("weekdays"), y = [...p.slice(g, 7), ...p.slice(0, g)];
        return h("div", {
          class: nt("weekdays")
        }, [y.map(b => h("span", {
          class: nt("weekday")
        }, [b]))])
      };
    return () => h("div", {
      class: nt("header")
    }, [r(), f(), m()])
  }
});
const o1 = {
  show: Boolean,
  type: te("single"),
  switchMode: te("none"),
  title: String,
  color: String,
  round: j,
  readonly: Boolean,
  poppable: j,
  maxRange: ge(null),
  position: te("bottom"),
  teleport: [String, Object],
  showMark: j,
  showTitle: j,
  formatter: Function,
  rowHeight: Z,
  confirmText: String,
  rangePrompt: String,
  lazyRender: j,
  showConfirm: j,
  defaultDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: j,
  closeOnPopstate: j,
  showRangePrompt: j,
  confirmDisabledText: String,
  closeOnClickOverlay: j,
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: j,
  minDate: {
    type: Date,
    validator: Qi
  },
  maxDate: {
    type: Date,
    validator: Qi
  },
  firstDayOfWeek: {
    type: Z,
    default: 0,
    validator: e => e >= 0 && e <= 6
  }
};
var i1 = K({
  name: Qb,
  props: o1,
  emits: ["select", "confirm", "unselect", "monthShow", "overRange", "update:show", "clickSubtitle", "clickDisabledDate", "panelChange"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = N(() => e.switchMode !== "none"),
      s = N(() => !e.minDate && !o.value ? ks() : e.minDate),
      a = N(() => !e.maxDate && !o.value ? Fr(ks(), 6) : e.maxDate),
      l = (z, X = s.value, ye = a.value) => X && Dt(z, X) === -1 ? X : ye && Dt(z, ye) === 1 ? ye : z,
      r = (z = e.defaultDate) => {
        const {
          type: X,
          allowSameDay: ye
        } = e;
        if (z === null) return z;
        const we = ks();
        if (X === "range") {
          Array.isArray(z) || (z = []), z.length === 1 && Dt(z[0], we) === 1 && (z = []);
          const le = s.value,
            pe = a.value,
            E = l(z[0] || we, le, pe ? ye ? pe : Fl(pe) : void 0),
            H = l(z[1] || (ye ? we : zl(we)), le ? ye ? le : zl(le) : void 0);
          return [E, H]
        }
        return X === "multiple" ? Array.isArray(z) ? z.map(le => l(le)) : [l(we)] : ((!z || Array.isArray(z)) && (z = we), l(z))
      },
      c = () => {
        const z = Array.isArray(f.value) ? f.value[0] : f.value;
        return z || l(ks())
      };
    let u;
    const d = F(),
      f = F(r()),
      m = F(c()),
      g = F(),
      [p, y] = ls(),
      b = N(() => e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0),
      w = N(() => {
        const z = [];
        if (!s.value || !a.value) return z;
        const X = new Date(s.value);
        X.setDate(1);
        do z.push(new Date(X)), X.setMonth(X.getMonth() + 1); while (Eo(X, a.value) !== 1);
        return z
      }),
      v = N(() => {
        if (f.value) {
          if (e.type === "range") return !f.value[0] || !f.value[1];
          if (e.type === "multiple") return !f.value.length
        }
        return !f.value
      }),
      C = () => f.value,
      _ = () => {
        const z = Ln(d.value),
          X = z + u,
          ye = w.value.map((H, U) => p.value[U].getHeight()),
          we = ye.reduce((H, U) => H + U, 0);
        if (X > we && z > 0) return;
        let le = 0,
          pe;
        const E = [-1, -1];
        for (let H = 0; H < w.value.length; H++) {
          const U = p.value[H];
          le <= X && le + ye[H] >= z && (E[1] = H, pe || (pe = U, E[0] = H), p.value[H].showed || (p.value[H].showed = !0, t("monthShow", {
            date: U.date,
            title: U.getTitle()
          }))), le += ye[H]
        }
        w.value.forEach((H, U) => {
          const oe = U >= E[0] - 1 && U <= E[1] + 1;
          p.value[U].setVisible(oe)
        }), pe && (g.value = pe)
      },
      k = z => {
        o.value ? m.value = z : _t(() => {
          w.value.some((X, ye) => Eo(X, z) === 0 ? (d.value && p.value[ye].scrollToDate(d.value, z), !0) : !1), _()
        })
      },
      I = () => {
        if (!(e.poppable && !e.show))
          if (f.value) {
            const z = e.type === "single" ? f.value : f.value[0];
            Qi(z) && k(z)
          } else o.value || _t(_)
      },
      D = () => {
        e.poppable && !e.show || (o.value || _t(() => {
          u = Math.floor(Ue(d).height)
        }), I())
      },
      S = (z = r()) => {
        f.value = z, I()
      },
      B = z => {
        const {
          maxRange: X,
          rangePrompt: ye,
          showRangePrompt: we
        } = e;
        return X && Yb(z) > +X ? (we && Nl(ye || Mn("rangePrompt", X)), t("overRange"), !1) : !0
      },
      R = z => {
        m.value = z, t("panelChange", {
          date: z
        })
      },
      x = () => {
        var z;
        return t("confirm", (z = f.value) != null ? z : du(f.value))
      },
      P = (z, X) => {
        const ye = we => {
          f.value = we, t("select", du(we))
        };
        if (X && e.type === "range" && !B(z)) {
          ye([z[0], Nr(z[0], +e.maxRange - 1)]);
          return
        }
        ye(z), X && !e.showConfirm && x()
      },
      M = (z, X, ye) => {
        var we;
        return (we = z.find(le => Dt(X, le.date) === -1 && Dt(le.date, ye) === -1)) == null ? void 0 : we.date
      },
      J = N(() => p.value.reduce((z, X) => {
        var ye, we;
        return z.push(...(we = (ye = X.disabledDays) == null ? void 0 : ye.value) != null ? we : []), z
      }, [])),
      ce = z => {
        if (e.readonly || !z.date) return;
        const {
          date: X
        } = z, {
          type: ye
        } = e;
        if (ye === "range") {
          if (!f.value) {
            P([X]);
            return
          }
          const [we, le] = f.value;
          if (we && !le) {
            const pe = Dt(X, we);
            if (pe === 1) {
              const E = M(J.value, we, X);
              if (E) {
                const H = Fl(E);
                Dt(we, H) === -1 ? P([we, H]) : P([X])
              } else P([we, X], !0)
            } else pe === -1 ? P([X]) : e.allowSameDay && P([X, X], !0)
          } else P([X])
        } else if (ye === "multiple") {
          if (!f.value) {
            P([X]);
            return
          }
          const we = f.value,
            le = we.findIndex(pe => Dt(pe, X) === 0);
          if (le !== -1) {
            const [pe] = we.splice(le, 1);
            t("unselect", di(pe))
          } else e.maxRange && we.length >= +e.maxRange ? Nl(e.rangePrompt || Mn("rangePrompt", e.maxRange)) : P([...we, X])
        } else P(X, !0)
      },
      W = z => t("update:show", z),
      ne = (z, X) => {
        const ye = X !== 0 || !e.showSubtitle;
        return h(e1, De({
          ref: o.value ? g : y(X),
          date: z,
          currentDate: f.value,
          showMonthTitle: ye,
          firstDayOfWeek: b.value,
          lazyRender: o.value ? !1 : e.lazyRender,
          maxDate: a.value,
          minDate: s.value
        }, Ve(e, ["type", "color", "showMark", "formatter", "rowHeight", "showSubtitle", "allowSameDay"]), {
          onClick: ce,
          onClickDisabledDate: we => t("clickDisabledDate", we)
        }), Ve(n, ["top-info", "bottom-info", "month-title"]))
      },
      ue = () => {
        if (n.footer) return n.footer();
        if (e.showConfirm) {
          const z = n["confirm-text"],
            X = v.value,
            ye = X ? e.confirmDisabledText : e.confirmText;
          return h(Tt, {
            round: !0,
            block: !0,
            type: "primary",
            color: e.color,
            class: nt("confirm"),
            disabled: X,
            nativeType: "button",
            onClick: x
          }, {
            default: () => [z ? z({
              disabled: X
            }) : ye || Mn("confirm")]
          })
        }
      },
      Re = () => h("div", {
        class: [nt("footer"), {
          "van-safe-area-bottom": e.safeAreaInsetBottom
        }]
      }, [ue()]),
      Ne = () => {
        var z, X;
        return h("div", {
          class: nt()
        }, [h(n1, {
          date: (z = g.value) == null ? void 0 : z.date,
          maxDate: a.value,
          minDate: s.value,
          title: e.title,
          subtitle: (X = g.value) == null ? void 0 : X.getTitle(),
          showTitle: e.showTitle,
          showSubtitle: e.showSubtitle,
          switchMode: e.switchMode,
          firstDayOfWeek: b.value,
          onClickSubtitle: ye => t("clickSubtitle", ye),
          onPanelChange: R
        }, Ve(n, ["title", "subtitle", "prev-month", "prev-year", "next-month", "next-year"])), h("div", {
          ref: d,
          class: nt("body"),
          onScroll: o.value ? void 0 : _
        }, [o.value ? ne(m.value, 0) : w.value.map(ne)]), Re()])
      };
    return re(() => e.show, D), re(() => [e.type, e.minDate, e.maxDate, e.switchMode], () => S(r(f.value))), re(() => e.defaultDate, z => {
      S(z)
    }), $e({
      reset: S,
      scrollToDate: k,
      getSelectedDate: C
    }), yi(D), () => e.poppable ? h(cn, {
      show: e.show,
      class: nt("popup"),
      round: e.round,
      position: e.position,
      closeable: e.showTitle || e.showSubtitle,
      teleport: e.teleport,
      closeOnPopstate: e.closeOnPopstate,
      safeAreaInsetTop: e.safeAreaInsetTop,
      closeOnClickOverlay: e.closeOnClickOverlay,
      "onUpdate:show": W
    }, {
      default: Ne
    }) : Ne()
  }
});
const s1 = ee(i1),
  [a1, Wo] = Y("image"),
  l1 = {
    src: String,
    alt: String,
    fit: String,
    position: String,
    round: Boolean,
    block: Boolean,
    width: Z,
    height: Z,
    radius: Z,
    lazyLoad: Boolean,
    iconSize: Z,
    showError: j,
    errorIcon: te("photo-fail"),
    iconPrefix: String,
    showLoading: j,
    loadingIcon: te("photo"),
    crossorigin: String,
    referrerpolicy: String
  };
var r1 = K({
  name: a1,
  props: l1,
  emits: ["load", "error"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(!1),
      s = F(!0),
      a = F(),
      {
        $Lazyload: l
      } = ln().proxy,
      r = N(() => {
        const b = {
          width: Ie(e.width),
          height: Ie(e.height)
        };
        return Fe(e.radius) && (b.overflow = "hidden", b.borderRadius = Ie(e.radius)), b
      });
    re(() => e.src, () => {
      o.value = !1, s.value = !0
    });
    const c = b => {
        s.value && (s.value = !1, t("load", b))
      },
      u = () => {
        const b = new Event("load");
        Object.defineProperty(b, "target", {
          value: a.value,
          enumerable: !0
        }), c(b)
      },
      d = b => {
        o.value = !0, s.value = !1, t("error", b)
      },
      f = (b, w, v) => v ? v() : h(Pe, {
        name: b,
        size: e.iconSize,
        class: w,
        classPrefix: e.iconPrefix
      }, null),
      m = () => {
        if (s.value && e.showLoading) return h("div", {
          class: Wo("loading")
        }, [f(e.loadingIcon, Wo("loading-icon"), n.loading)]);
        if (o.value && e.showError) return h("div", {
          class: Wo("error")
        }, [f(e.errorIcon, Wo("error-icon"), n.error)])
      },
      g = () => {
        if (o.value || !e.src) return;
        const b = {
          alt: e.alt,
          class: Wo("img"),
          style: {
            objectFit: e.fit,
            objectPosition: e.position
          },
          crossorigin: e.crossorigin,
          referrerpolicy: e.referrerpolicy
        };
        return e.lazyLoad ? rt(h("img", De({
          ref: a
        }, b), null), [
          [ov("lazy"), e.src]
        ]) : h("img", De({
          ref: a,
          src: e.src,
          onLoad: c,
          onError: d
        }, b), null)
      },
      p = ({
        el: b
      }) => {
        const w = () => {
          b === a.value && s.value && u()
        };
        a.value ? w() : Oe(w)
      },
      y = ({
        el: b
      }) => {
        b === a.value && !o.value && d()
      };
    return l && zt && (l.$on("loaded", p), l.$on("error", y), kn(() => {
      l.$off("loaded", p), l.$off("error", y)
    })), at(() => {
      Oe(() => {
        var b;
        (b = a.value) != null && b.complete && !e.lazyLoad && u()
      })
    }), () => {
      var b;
      return h("div", {
        class: Wo({
          round: e.round,
          block: e.block
        }),
        style: r.value
      }, [g(), m(), (b = n.default) == null ? void 0 : b.call(n)])
    }
  }
});
const Ia = ee(r1),
  [c1, Et] = Y("card"),
  u1 = {
    tag: String,
    num: Z,
    desc: String,
    thumb: String,
    title: String,
    price: Z,
    centered: Boolean,
    lazyLoad: Boolean,
    currency: te("¥"),
    thumbLink: String,
    originPrice: Z
  };
var d1 = K({
  name: c1,
  props: u1,
  emits: ["clickThumb"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const o = () => {
        if (t.title) return t.title();
        if (e.title) return h("div", {
          class: [Et("title"), "van-multi-ellipsis--l2"]
        }, [e.title])
      },
      s = () => {
        if (t.tag || e.tag) return h("div", {
          class: Et("tag")
        }, [t.tag ? t.tag() : h(Ea, {
          mark: !0,
          type: "primary"
        }, {
          default: () => [e.tag]
        })])
      },
      a = () => t.thumb ? t.thumb() : h(Ia, {
        src: e.thumb,
        fit: "cover",
        width: "100%",
        height: "100%",
        lazyLoad: e.lazyLoad
      }, null),
      l = () => {
        if (t.thumb || e.thumb) return h("a", {
          href: e.thumbLink,
          class: Et("thumb"),
          onClick: u => n("clickThumb", u)
        }, [a(), s()])
      },
      r = () => {
        if (t.desc) return t.desc();
        if (e.desc) return h("div", {
          class: [Et("desc"), "van-ellipsis"]
        }, [e.desc])
      },
      c = () => {
        const u = e.price.toString().split(".");
        return h("div", null, [h("span", {
          class: Et("price-currency")
        }, [e.currency]), h("span", {
          class: Et("price-integer")
        }, [u[0]]), u.length > 1 && h(Be, null, [he("."), h("span", {
          class: Et("price-decimal")
        }, [u[1]])])])
      };
    return () => {
      var u, d, f;
      const m = t.num || Fe(e.num),
        g = t.price || Fe(e.price),
        p = t["origin-price"] || Fe(e.originPrice),
        y = m || g || p || t.bottom,
        b = g && h("div", {
          class: Et("price")
        }, [t.price ? t.price() : c()]),
        w = p && h("div", {
          class: Et("origin-price")
        }, [t["origin-price"] ? t["origin-price"]() : `${e.currency} ${e.originPrice}`]),
        v = m && h("div", {
          class: Et("num")
        }, [t.num ? t.num() : `x${e.num}`]),
        C = t.footer && h("div", {
          class: Et("footer")
        }, [t.footer()]),
        _ = y && h("div", {
          class: Et("bottom")
        }, [(u = t["price-top"]) == null ? void 0 : u.call(t), b, w, v, (d = t.bottom) == null ? void 0 : d.call(t)]);
      return h("div", {
        class: Et()
      }, [h("div", {
        class: Et("header")
      }, [l(), h("div", {
        class: Et("content", {
          centered: e.centered
        })
      }, [h("div", null, [o(), r(), (f = t.tags) == null ? void 0 : f.call(t)]), _])]), C])
    }
  }
});
const f1 = ee(d1),
  [h1, xn, m1] = Y("cascader"),
  g1 = {
    title: String,
    options: Xe(),
    closeable: j,
    swipeable: j,
    closeIcon: te("cross"),
    showHeader: j,
    modelValue: Z,
    fieldNames: Object,
    placeholder: String,
    activeColor: String
  };
var v1 = K({
  name: h1,
  props: g1,
  emits: ["close", "change", "finish", "clickTab", "update:modelValue"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const o = F([]),
      s = F(0),
      [a, l] = ls(),
      {
        text: r,
        value: c,
        children: u
      } = ke({
        text: "text",
        value: "value",
        children: "children"
      }, e.fieldNames),
      d = (k, I) => {
        for (const D of k) {
          if (D[c] === I) return [D];
          if (D[u]) {
            const S = d(D[u], I);
            if (S) return [D, ...S]
          }
        }
      },
      f = () => {
        const {
          options: k,
          modelValue: I
        } = e;
        if (I !== void 0) {
          const D = d(k, I);
          if (D) {
            let S = k;
            o.value = D.map(B => {
              const R = {
                  options: S,
                  selected: B
                },
                x = S.find(P => P[c] === B[c]);
              return x && (S = x[u]), R
            }), S && o.value.push({
              options: S,
              selected: null
            }), Oe(() => {
              s.value = o.value.length - 1
            });
            return
          }
        }
        o.value = [{
          options: k,
          selected: null
        }]
      },
      m = (k, I) => {
        if (k.disabled) return;
        if (o.value[I].selected = k, o.value.length > I + 1 && (o.value = o.value.slice(0, I + 1)), k[u]) {
          const B = {
            options: k[u],
            selected: null
          };
          o.value[I + 1] ? o.value[I + 1] = B : o.value.push(B), Oe(() => {
            s.value++
          })
        }
        const D = o.value.map(B => B.selected).filter(Boolean);
        n("update:modelValue", k[c]);
        const S = {
          value: k[c],
          tabIndex: I,
          selectedOptions: D
        };
        n("change", S), k[u] || n("finish", S)
      },
      g = () => n("close"),
      p = ({
        name: k,
        title: I
      }) => n("clickTab", k, I),
      y = () => e.showHeader ? h("div", {
        class: xn("header")
      }, [h("h2", {
        class: xn("title")
      }, [t.title ? t.title() : e.title]), e.closeable ? h(Pe, {
        name: e.closeIcon,
        class: [xn("close-icon"), St],
        onClick: g
      }, null) : null]) : null,
      b = (k, I, D) => {
        const {
          disabled: S
        } = k, B = !!(I && k[c] === I[c]), R = k.color || (B ? e.activeColor : void 0), x = t.option ? t.option({
          option: k,
          selected: B
        }) : h("span", null, [k[r]]);
        return h("li", {
          ref: B ? l(D) : void 0,
          role: "menuitemradio",
          class: [xn("option", {
            selected: B,
            disabled: S
          }), k.className],
          style: {
            color: R
          },
          tabindex: S ? void 0 : B ? 0 : -1,
          "aria-checked": B,
          "aria-disabled": S || void 0,
          onClick: () => m(k, D)
        }, [x, B ? h(Pe, {
          name: "success",
          class: xn("selected-icon")
        }, null) : null])
      },
      w = (k, I, D) => h("ul", {
        role: "menu",
        class: xn("options")
      }, [k.map(S => b(S, I, D))]),
      v = (k, I) => {
        const {
          options: D,
          selected: S
        } = k, B = e.placeholder || m1("select"), R = S ? S[r] : B;
        return h(es, {
          title: R,
          titleClass: xn("tab", {
            unselected: !S
          })
        }, {
          default: () => {
            var x, P;
            return [(x = t["options-top"]) == null ? void 0 : x.call(t, {
              tabIndex: I
            }), w(D, S, I), (P = t["options-bottom"]) == null ? void 0 : P.call(t, {
              tabIndex: I
            })]
          }
        })
      },
      C = () => h(Sa, {
        active: s.value,
        "onUpdate:active": k => s.value = k,
        shrink: !0,
        animated: !0,
        class: xn("tabs"),
        color: e.activeColor,
        swipeable: e.swipeable,
        onClickTab: p
      }, {
        default: () => [o.value.map(v)]
      }),
      _ = k => {
        const I = k.parentElement;
        I && (I.scrollTop = k.offsetTop - (I.offsetHeight - k.offsetHeight) / 2)
      };
    return f(), re(s, k => {
      const I = a.value[k];
      I && _(I)
    }), re(() => e.options, f, {
      deep: !0
    }), re(() => e.modelValue, k => {
      k !== void 0 && o.value.map(D => {
        var S;
        return (S = D.selected) == null ? void 0 : S[c]
      }).includes(k) || f()
    }), () => h("div", {
      class: xn()
    }, [y(), C()])
  }
});
const y1 = ee(v1),
  [p1, vu] = Y("cell-group"),
  b1 = {
    title: String,
    inset: Boolean,
    border: j
  };
var w1 = K({
  name: p1,
  inheritAttrs: !1,
  props: b1,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const o = () => {
        var a;
        return h("div", De({
          class: [vu({
            inset: e.inset
          }), {
            [wa]: e.border && !e.inset
          }]
        }, n, Js()), [(a = t.default) == null ? void 0 : a.call(t)])
      },
      s = () => h("div", {
        class: vu("title", {
          inset: e.inset
        })
      }, [t.title ? t.title() : e.title]);
    return () => e.title || t.title ? h(Be, null, [s(), o()]) : o()
  }
});
const C1 = ee(w1),
  [_1, Ss] = Y("circle");
let k1 = 0;
const yu = e => Math.min(Math.max(+e, 0), 100);

function S1(e, t) {
  const n = e ? 1 : 0;
  return `M ${t/2} ${t/2} m 0, -500 a 500, 500 0 1, ${n} 0, 1000 a 500, 500 0 1, ${n} 0, -1000`
}
const T1 = {
  text: String,
  size: Z,
  fill: te("none"),
  rate: ge(100),
  speed: ge(0),
  color: [String, Object],
  clockwise: j,
  layerColor: String,
  currentRate: lt(0),
  strokeWidth: ge(40),
  strokeLinecap: String,
  startPosition: te("top")
};
var x1 = K({
  name: _1,
  props: T1,
  emits: ["update:currentRate"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = `van-circle-${k1++}`,
      s = N(() => +e.strokeWidth + 1e3),
      a = N(() => S1(e.clockwise, s.value)),
      l = N(() => {
        const m = {
          top: 0,
          right: 90,
          bottom: 180,
          left: 270
        } [e.startPosition];
        if (m) return {
          transform: `rotate(${m}deg)`
        }
      });
    re(() => e.rate, f => {
      let m;
      const g = Date.now(),
        p = e.currentRate,
        y = yu(f),
        b = Math.abs((p - y) * 1e3 / +e.speed),
        w = () => {
          const v = Date.now(),
            _ = Math.min((v - g) / b, 1) * (y - p) + p;
          t("update:currentRate", yu(parseFloat(_.toFixed(1)))), (y > p ? _ < y : _ > y) && (m = _t(w))
        };
      e.speed ? (m && pa(m), m = _t(w)) : t("update:currentRate", y)
    }, {
      immediate: !0
    });
    const r = () => {
        const {
          strokeWidth: m,
          currentRate: g,
          strokeLinecap: p
        } = e, y = 3140 * g / 100, b = wn(e.color) ? `url(#${o})` : e.color, w = {
          stroke: b,
          strokeWidth: `${+m+1}px`,
          strokeLinecap: p,
          strokeDasharray: `${y}px 3140px`
        };
        return h("path", {
          d: a.value,
          style: w,
          class: Ss("hover"),
          stroke: b
        }, null)
      },
      c = () => {
        const f = {
          fill: e.fill,
          stroke: e.layerColor,
          strokeWidth: `${e.strokeWidth}px`
        };
        return h("path", {
          class: Ss("layer"),
          style: f,
          d: a.value
        }, null)
      },
      u = () => {
        const {
          color: f
        } = e;
        if (!wn(f)) return;
        const m = Object.keys(f).sort((g, p) => parseFloat(g) - parseFloat(p)).map((g, p) => h("stop", {
          key: p,
          offset: g,
          "stop-color": f[g]
        }, null));
        return h("defs", null, [h("linearGradient", {
          id: o,
          x1: "100%",
          y1: "0%",
          x2: "0%",
          y2: "0%"
        }, [m])])
      },
      d = () => {
        if (n.default) return n.default();
        if (e.text) return h("div", {
          class: Ss("text")
        }, [e.text])
      };
    return () => h("div", {
      class: Ss(),
      style: Hn(e.size)
    }, [h("svg", {
      viewBox: `0 0 ${s.value} ${s.value}`,
      style: l.value
    }, [u(), c(), r()]), d()])
  }
});
const A1 = ee(x1),
  [Dh, E1] = Y("row"),
  $h = Symbol(Dh),
  I1 = {
    tag: te("div"),
    wrap: j,
    align: String,
    gutter: {
      type: [String, Number, Array],
      default: 0
    },
    justify: String
  };
var P1 = K({
  name: Dh,
  props: I1,
  setup(e, {
    slots: t
  }) {
    const {
      children: n,
      linkChildren: o
    } = xt($h), s = N(() => {
      const r = [
        []
      ];
      let c = 0;
      return n.forEach((u, d) => {
        c += Number(u.span), c > 24 ? (r.push([d]), c -= 24) : r[r.length - 1].push(d)
      }), r
    }), a = N(() => {
      let r = 0;
      Array.isArray(e.gutter) ? r = Number(e.gutter[0]) || 0 : r = Number(e.gutter);
      const c = [];
      return r && s.value.forEach(u => {
        const d = r * (u.length - 1) / u.length;
        u.forEach((f, m) => {
          if (m === 0) c.push({
            right: d
          });
          else {
            const g = r - c[f - 1].right,
              p = d - g;
            c.push({
              left: g,
              right: p
            })
          }
        })
      }), c
    }), l = N(() => {
      const {
        gutter: r
      } = e, c = [];
      if (Array.isArray(r) && r.length > 1) {
        const u = Number(r[1]) || 0;
        if (u <= 0) return c;
        s.value.forEach((d, f) => {
          f !== s.value.length - 1 && d.forEach(() => {
            c.push({
              bottom: u
            })
          })
        })
      }
      return c
    });
    return o({
      spaces: a,
      verticalSpaces: l
    }), () => {
      const {
        tag: r,
        wrap: c,
        align: u,
        justify: d
      } = e;
      return h(r, {
        class: E1({
          [`align-${u}`]: u,
          [`justify-${d}`]: d,
          nowrap: !c
        })
      }, {
        default: () => {
          var f;
          return [(f = t.default) == null ? void 0 : f.call(t)]
        }
      })
    }
  }
});
const [O1, B1] = Y("col"), R1 = {
  tag: te("div"),
  span: ge(0),
  offset: Z
};
var D1 = K({
  name: O1,
  props: R1,
  setup(e, {
    slots: t
  }) {
    const {
      parent: n,
      index: o
    } = pt($h), s = N(() => {
      if (!n) return;
      const {
        spaces: a,
        verticalSpaces: l
      } = n;
      let r = {};
      if (a && a.value && a.value[o.value]) {
        const {
          left: u,
          right: d
        } = a.value[o.value];
        r = {
          paddingLeft: u ? `${u}px` : null,
          paddingRight: d ? `${d}px` : null
        }
      }
      const {
        bottom: c
      } = l.value[o.value] || {};
      return ke(r, {
        marginBottom: c ? `${c}px` : null
      })
    });
    return () => {
      const {
        tag: a,
        span: l,
        offset: r
      } = e;
      return h(a, {
        style: s.value,
        class: B1({
          [l]: l,
          [`offset-${r}`]: r
        })
      }, {
        default: () => {
          var c;
          return [(c = t.default) == null ? void 0 : c.call(t)]
        }
      })
    }
  }
});
const $1 = ee(D1),
  [Mh, M1] = Y("collapse"),
  Lh = Symbol(Mh),
  L1 = {
    border: j,
    accordion: Boolean,
    modelValue: {
      type: [String, Number, Array],
      default: ""
    }
  };
var N1 = K({
  name: Mh,
  props: L1,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      linkChildren: o,
      children: s
    } = xt(Lh), a = u => {
      t("change", u), t("update:modelValue", u)
    }, l = (u, d) => {
      const {
        accordion: f,
        modelValue: m
      } = e;
      a(f ? u === m ? "" : u : d ? m.concat(u) : m.filter(g => g !== u))
    }, r = (u = {}) => {
      if (e.accordion) return;
      typeof u == "boolean" && (u = {
        expanded: u
      });
      const {
        expanded: d,
        skipDisabled: f
      } = u, g = s.filter(p => p.disabled && f ? p.expanded.value : d ?? !p.expanded.value).map(p => p.itemName.value);
      a(g)
    }, c = u => {
      const {
        accordion: d,
        modelValue: f
      } = e;
      return d ? f === u : f.includes(u)
    };
    return $e({
      toggleAll: r
    }), o({
      toggle: l,
      isExpanded: c
    }), () => {
      var u;
      return h("div", {
        class: [M1(), {
          [wa]: e.border
        }]
      }, [(u = n.default) == null ? void 0 : u.call(n)])
    }
  }
});
const F1 = ee(N1),
  [z1, Ts] = Y("collapse-item"),
  V1 = ["icon", "title", "value", "label", "right-icon"],
  H1 = ke({}, Aa, {
    name: Z,
    isLink: j,
    disabled: Boolean,
    readonly: Boolean,
    lazyRender: j
  });
var U1 = K({
  name: z1,
  props: H1,
  setup(e, {
    slots: t
  }) {
    const n = F(),
      o = F(),
      {
        parent: s,
        index: a
      } = pt(Lh);
    if (!s) return;
    const l = N(() => {
        var y;
        return (y = e.name) != null ? y : a.value
      }),
      r = N(() => s.isExpanded(l.value)),
      c = F(r.value),
      u = Tr(() => c.value || !e.lazyRender),
      d = () => {
        r.value ? n.value && (n.value.style.height = "") : c.value = !1
      };
    re(r, (y, b) => {
      if (b === null) return;
      y && (c.value = !0), (y ? Oe : _t)(() => {
        if (!o.value || !n.value) return;
        const {
          offsetHeight: v
        } = o.value;
        if (v) {
          const C = `${v}px`;
          n.value.style.height = y ? "0" : C, so(() => {
            n.value && (n.value.style.height = y ? C : "0")
          })
        } else d()
      })
    });
    const f = (y = !r.value) => {
        s.toggle(l.value, y)
      },
      m = () => {
        !e.disabled && !e.readonly && f()
      },
      g = () => {
        const {
          border: y,
          disabled: b,
          readonly: w
        } = e, v = Ve(e, Object.keys(Aa));
        return w && (v.isLink = !1), (b || w) && (v.clickable = !1), h(un, De({
          role: "button",
          class: Ts("title", {
            disabled: b,
            expanded: r.value,
            borderless: !y
          }),
          "aria-expanded": String(r.value),
          onClick: m
        }, v), Ve(t, V1))
      },
      p = u(() => {
        var y;
        return rt(h("div", {
          ref: n,
          class: Ts("wrapper"),
          onTransitionend: d
        }, [h("div", {
          ref: o,
          class: Ts("content")
        }, [(y = t.default) == null ? void 0 : y.call(t)])]), [
          [dt, c.value]
        ])
      });
    return $e({
      toggle: f,
      expanded: r,
      itemName: l
    }), () => h("div", {
      class: [Ts({
        border: a.value && e.border
      })]
    }, [g(), p()])
  }
});
const W1 = ee(U1),
  j1 = ee(cp),
  [Q1, pu, ol] = Y("contact-card"),
  K1 = {
    tel: String,
    name: String,
    type: te("add"),
    addText: String,
    editable: j
  };
var Y1 = K({
  name: Q1,
  props: K1,
  emits: ["click"],
  setup(e, {
    emit: t
  }) {
    const n = s => {
        e.editable && t("click", s)
      },
      o = () => e.type === "add" ? e.addText || ol("addContact") : [h("div", null, [`${ol("name")}：${e.name}`]), h("div", null, [`${ol("tel")}：${e.tel}`])];
    return () => h(un, {
      center: !0,
      icon: e.type === "edit" ? "contact" : "add-square",
      class: pu([e.type]),
      border: !1,
      isLink: e.editable,
      titleClass: pu("title"),
      onClick: n
    }, {
      title: o
    })
  }
});
const q1 = ee(Y1),
  [G1, jo, qn] = Y("contact-edit"),
  Vl = {
    tel: "",
    name: ""
  },
  Z1 = {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    showSetDefault: Boolean,
    setDefaultLabel: String,
    contactInfo: {
      type: Object,
      default: () => ke({}, Vl)
    },
    telValidator: {
      type: Function,
      default: md
    }
  };
var X1 = K({
  name: G1,
  props: Z1,
  emits: ["save", "delete", "changeDefault"],
  setup(e, {
    emit: t
  }) {
    const n = Ze(ke({}, Vl, e.contactInfo)),
      o = () => {
        e.isSaving || t("save", n)
      },
      s = () => t("delete", n),
      a = () => h("div", {
        class: jo("buttons")
      }, [h(Tt, {
        block: !0,
        round: !0,
        type: "primary",
        text: qn("save"),
        class: jo("button"),
        loading: e.isSaving,
        nativeType: "submit"
      }, null), e.isEdit && h(Tt, {
        block: !0,
        round: !0,
        text: qn("delete"),
        class: jo("button"),
        loading: e.isDeleting,
        onClick: s
      }, null)]),
      l = () => h(Rr, {
        modelValue: n.isDefault,
        "onUpdate:modelValue": c => n.isDefault = c,
        onChange: c => t("changeDefault", c)
      }, null),
      r = () => {
        if (e.showSetDefault) return h(un, {
          title: e.setDefaultLabel,
          class: jo("switch-cell"),
          border: !1
        }, {
          "right-icon": l
        })
      };
    return re(() => e.contactInfo, c => ke(n, Vl, c)), () => h(Ir, {
      class: jo(),
      onSubmit: o
    }, {
      default: () => [h("div", {
        class: jo("fields")
      }, [h($n, {
        modelValue: n.name,
        "onUpdate:modelValue": c => n.name = c,
        clearable: !0,
        label: qn("name"),
        rules: [{
          required: !0,
          message: qn("nameEmpty")
        }],
        maxlength: "30",
        placeholder: qn("name")
      }, null), h($n, {
        modelValue: n.tel,
        "onUpdate:modelValue": c => n.tel = c,
        clearable: !0,
        type: "tel",
        label: qn("tel"),
        rules: [{
          validator: e.telValidator,
          message: qn("telInvalid")
        }],
        placeholder: qn("tel")
      }, null)]), r(), a()]
    })
  }
});
const J1 = ee(X1),
  [ew, An, tw] = Y("contact-list"),
  nw = {
    list: Array,
    addText: String,
    modelValue: et,
    defaultTagText: String
  };
var ow = K({
  name: ew,
  props: nw,
  emits: ["add", "edit", "select", "update:modelValue"],
  setup(e, {
    emit: t
  }) {
    const n = (o, s) => {
      const a = () => {
          t("update:modelValue", o.id), t("select", o, s)
        },
        l = () => h(Mr, {
          class: An("radio"),
          name: o.id,
          iconSize: 18
        }, null),
        r = () => h(Pe, {
          name: "edit",
          class: An("edit"),
          onClick: u => {
            u.stopPropagation(), t("edit", o, s)
          }
        }, null),
        c = () => {
          const u = [`${o.name}，${o.tel}`];
          return o.isDefault && e.defaultTagText && u.push(h(Ea, {
            type: "primary",
            round: !0,
            class: An("item-tag")
          }, {
            default: () => [e.defaultTagText]
          })), u
        };
      return h(un, {
        key: o.id,
        isLink: !0,
        center: !0,
        class: An("item"),
        titleClass: An("item-title"),
        onClick: a
      }, {
        icon: r,
        title: c,
        "right-icon": l
      })
    };
    return () => h("div", {
      class: An()
    }, [h(Dr, {
      modelValue: e.modelValue,
      class: An("group")
    }, {
      default: () => [e.list && e.list.map(n)]
    }), h("div", {
      class: [An("bottom"), "van-safe-area-bottom"]
    }, [h(Tt, {
      round: !0,
      block: !0,
      type: "primary",
      class: An("add"),
      text: e.addText || tw("addContact"),
      onClick: () => t("add")
    }, null)])])
  }
});
const iw = ee(ow);

function sw(e, t) {
  const {
    days: n
  } = t;
  let {
    hours: o,
    minutes: s,
    seconds: a,
    milliseconds: l
  } = t;
  if (e.includes("DD") ? e = e.replace("DD", Xt(n)) : o += n * 24, e.includes("HH") ? e = e.replace("HH", Xt(o)) : s += o * 60, e.includes("mm") ? e = e.replace("mm", Xt(s)) : a += s * 60, e.includes("ss") ? e = e.replace("ss", Xt(a)) : l += a * 1e3, e.includes("S")) {
    const r = Xt(l, 3);
    e.includes("SSS") ? e = e.replace("SSS", r) : e.includes("SS") ? e = e.replace("SS", r.slice(0, 2)) : e = e.replace("S", r.charAt(0))
  }
  return e
}
const [aw, lw] = Y("count-down"), rw = {
  time: ge(0),
  format: te("HH:mm:ss"),
  autoStart: j,
  millisecond: Boolean
};
var cw = K({
  name: aw,
  props: rw,
  emits: ["change", "finish"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      start: o,
      pause: s,
      reset: a,
      current: l
    } = Py({
      time: +e.time,
      millisecond: e.millisecond,
      onChange: u => t("change", u),
      onFinish: () => t("finish")
    }), r = N(() => sw(e.format, l.value)), c = () => {
      a(+e.time), e.autoStart && o()
    };
    return re(() => e.time, c, {
      immediate: !0
    }), $e({
      start: o,
      pause: s,
      reset: c
    }), () => h("div", {
      role: "timer",
      class: lw()
    }, [n.default ? n.default(l.value) : r.value])
  }
});
const uw = ee(cw);

function bu(e) {
  const t = new Date(e * 1e3);
  return `${t.getFullYear()}.${Xt(t.getMonth()+1)}.${Xt(t.getDate())}`
}
const dw = e => (e / 10).toFixed(e % 10 === 0 ? 0 : 1),
  wu = e => (e / 100).toFixed(e % 100 === 0 ? 0 : e % 10 === 0 ? 1 : 2),
  [fw, mn, il] = Y("coupon");
var hw = K({
  name: fw,
  props: {
    chosen: Boolean,
    coupon: gt(Object),
    disabled: Boolean,
    currency: te("¥")
  },
  setup(e) {
    const t = N(() => {
        const {
          startAt: s,
          endAt: a
        } = e.coupon;
        return `${bu(s)} - ${bu(a)}`
      }),
      n = N(() => {
        const {
          coupon: s,
          currency: a
        } = e;
        if (s.valueDesc) return [s.valueDesc, h("span", null, [s.unitDesc || ""])];
        if (s.denominations) {
          const l = wu(s.denominations);
          return [h("span", null, [a]), ` ${l}`]
        }
        return s.discount ? il("discount", dw(s.discount)) : ""
      }),
      o = N(() => {
        const s = wu(e.coupon.originCondition || 0);
        return s === "0" ? il("unlimited") : il("condition", s)
      });
    return () => {
      const {
        chosen: s,
        coupon: a,
        disabled: l
      } = e, r = l && a.reason || a.description;
      return h("div", {
        class: mn({
          disabled: l
        })
      }, [h("div", {
        class: mn("content")
      }, [h("div", {
        class: mn("head")
      }, [h("h2", {
        class: mn("amount")
      }, [n.value]), h("p", {
        class: mn("condition")
      }, [a.condition || o.value])]), h("div", {
        class: mn("body")
      }, [h("p", {
        class: mn("name")
      }, [a.name]), h("p", {
        class: mn("valid")
      }, [t.value]), !l && h(Lr, {
        class: mn("corner"),
        modelValue: s
      }, null)])]), r && h("p", {
        class: mn("description")
      }, [r])])
    }
  }
});
const Hl = ee(hw),
  [mw, Cu, Ul] = Y("coupon-cell"),
  gw = {
    title: String,
    border: j,
    editable: j,
    coupons: Xe(),
    currency: te("¥"),
    chosenCoupon: {
      type: [Number, Array],
      default: -1
    }
  },
  vw = e => {
    const {
      value: t,
      denominations: n
    } = e;
    return Fe(t) ? t : Fe(n) ? n : 0
  };

function yw({
  coupons: e,
  chosenCoupon: t,
  currency: n
}) {
  let o = 0,
    s = !1;
  return (Array.isArray(t) ? t : [t]).forEach(a => {
    const l = e[+a];
    l && (s = !0, o += vw(l))
  }), s ? `-${n} ${(o/100).toFixed(2)}` : e.length === 0 ? Ul("noCoupon") : Ul("count", e.length)
}
var pw = K({
  name: mw,
  props: gw,
  setup(e) {
    return () => {
      const t = Array.isArray(e.chosenCoupon) ? e.chosenCoupon.length : e.coupons[+e.chosenCoupon];
      return h(un, {
        class: Cu(),
        value: yw(e),
        title: e.title || Ul("title"),
        border: e.border,
        isLink: e.editable,
        valueClass: Cu("value", {
          selected: t
        })
      }, null)
    }
  }
});
const bw = ee(pw),
  [ww, xs] = Y("empty"),
  Cw = {
    image: te("default"),
    imageSize: [Number, String, Array],
    description: String
  };
var _w = K({
  name: ww,
  props: Cw,
  setup(e, {
    slots: t
  }) {
    const n = () => {
        const w = t.description ? t.description() : e.description;
        if (w) return h("p", {
          class: xs("description")
        }, [w])
      },
      o = () => {
        if (t.default) return h("div", {
          class: xs("bottom")
        }, [t.default()])
      },
      s = wi(),
      a = w => `${s}-${w}`,
      l = w => `url(#${a(w)})`,
      r = (w, v, C) => h("stop", {
        "stop-color": w,
        offset: `${v}%`,
        "stop-opacity": C
      }, null),
      c = (w, v) => [r(w, 0), r(v, 100)],
      u = w => [h("defs", null, [h("radialGradient", {
        id: a(w),
        cx: "50%",
        cy: "54%",
        fx: "50%",
        fy: "54%",
        r: "297%",
        gradientTransform: "matrix(-.16 0 0 -.33 .58 .72)",
        "data-allow-mismatch": "attribute"
      }, [r("#EBEDF0", 0), r("#F2F3F5", 100, .3)])]), h("ellipse", {
        fill: l(w),
        opacity: ".8",
        cx: "80",
        cy: "140",
        rx: "46",
        ry: "8",
        "data-allow-mismatch": "attribute"
      }, null)],
      d = () => [h("defs", null, [h("linearGradient", {
        id: a("a"),
        x1: "64%",
        y1: "100%",
        x2: "64%",
        "data-allow-mismatch": "attribute"
      }, [r("#FFF", 0, .5), r("#F2F3F5", 100)])]), h("g", {
        opacity: ".8",
        "data-allow-mismatch": "children"
      }, [h("path", {
        d: "M36 131V53H16v20H2v58h34z",
        fill: l("a")
      }, null), h("path", {
        d: "M123 15h22v14h9v77h-31V15z",
        fill: l("a")
      }, null)])],
      f = () => [h("defs", null, [h("linearGradient", {
        id: a("b"),
        x1: "64%",
        y1: "97%",
        x2: "64%",
        y2: "0%",
        "data-allow-mismatch": "attribute"
      }, [r("#F2F3F5", 0, .3), r("#F2F3F5", 100)])]), h("g", {
        opacity: ".8",
        "data-allow-mismatch": "children"
      }, [h("path", {
        d: "M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",
        fill: l("b")
      }, null), h("path", {
        d: "M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",
        fill: l("b")
      }, null)])],
      m = () => h("svg", {
        viewBox: "0 0 160 160"
      }, [h("defs", {
        "data-allow-mismatch": "children"
      }, [h("linearGradient", {
        id: a(1),
        x1: "64%",
        y1: "100%",
        x2: "64%"
      }, [r("#FFF", 0, .5), r("#F2F3F5", 100)]), h("linearGradient", {
        id: a(2),
        x1: "50%",
        x2: "50%",
        y2: "84%"
      }, [r("#EBEDF0", 0), r("#DCDEE0", 100, 0)]), h("linearGradient", {
        id: a(3),
        x1: "100%",
        x2: "100%",
        y2: "100%"
      }, [c("#EAEDF0", "#DCDEE0")]), h("radialGradient", {
        id: a(4),
        cx: "50%",
        cy: "0%",
        fx: "50%",
        fy: "0%",
        r: "100%",
        gradientTransform: "matrix(0 1 -.54 0 .5 -.5)"
      }, [r("#EBEDF0", 0), r("#FFF", 100, 0)])]), h("g", {
        fill: "none"
      }, [d(), h("path", {
        fill: l(4),
        d: "M0 139h160v21H0z",
        "data-allow-mismatch": "attribute"
      }, null), h("path", {
        d: "M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",
        fill: l(2),
        "data-allow-mismatch": "attribute"
      }, null), h("g", {
        opacity: ".6",
        "stroke-linecap": "round",
        "stroke-width": "7",
        "data-allow-mismatch": "children"
      }, [h("path", {
        d: "M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",
        stroke: l(3)
      }, null), h("path", {
        d: "M53 36a34 34 0 0 0 0 48",
        stroke: l(3)
      }, null), h("path", {
        d: "M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",
        stroke: l(3)
      }, null), h("path", {
        d: "M106 84a34 34 0 0 0 0-48",
        stroke: l(3)
      }, null)]), h("g", {
        transform: "translate(31 105)"
      }, [h("rect", {
        fill: "#EBEDF0",
        width: "98",
        height: "34",
        rx: "2"
      }, null), h("rect", {
        fill: "#FFF",
        x: "9",
        y: "8",
        width: "80",
        height: "18",
        rx: "1.1"
      }, null), h("rect", {
        fill: "#EBEDF0",
        x: "15",
        y: "12",
        width: "18",
        height: "6",
        rx: "1.1"
      }, null)])])]),
      g = () => h("svg", {
        viewBox: "0 0 160 160"
      }, [h("defs", {
        "data-allow-mismatch": "children"
      }, [h("linearGradient", {
        x1: "50%",
        x2: "50%",
        y2: "100%",
        id: a(5)
      }, [c("#F2F3F5", "#DCDEE0")]), h("linearGradient", {
        x1: "95%",
        y1: "48%",
        x2: "5.5%",
        y2: "51%",
        id: a(6)
      }, [c("#EAEDF1", "#DCDEE0")]), h("linearGradient", {
        y1: "45%",
        x2: "100%",
        y2: "54%",
        id: a(7)
      }, [c("#EAEDF1", "#DCDEE0")])]), d(), f(), h("g", {
        transform: "translate(36 50)",
        fill: "none"
      }, [h("g", {
        transform: "translate(8)"
      }, [h("rect", {
        fill: "#EBEDF0",
        opacity: ".6",
        x: "38",
        y: "13",
        width: "36",
        height: "53",
        rx: "2"
      }, null), h("rect", {
        fill: l(5),
        width: "64",
        height: "66",
        rx: "2",
        "data-allow-mismatch": "attribute"
      }, null), h("rect", {
        fill: "#FFF",
        x: "6",
        y: "6",
        width: "52",
        height: "55",
        rx: "1"
      }, null), h("g", {
        transform: "translate(15 17)",
        fill: l(6),
        "data-allow-mismatch": "attribute"
      }, [h("rect", {
        width: "34",
        height: "6",
        rx: "1"
      }, null), h("path", {
        d: "M0 14h34v6H0z"
      }, null), h("rect", {
        y: "28",
        width: "34",
        height: "6",
        rx: "1"
      }, null)])]), h("rect", {
        fill: l(7),
        y: "61",
        width: "88",
        height: "28",
        rx: "1",
        "data-allow-mismatch": "attribute"
      }, null), h("rect", {
        fill: "#F7F8FA",
        x: "29",
        y: "72",
        width: "30",
        height: "6",
        rx: "1"
      }, null)])]),
      p = () => h("svg", {
        viewBox: "0 0 160 160"
      }, [h("defs", null, [h("linearGradient", {
        x1: "50%",
        x2: "50%",
        y2: "100%",
        id: a(8),
        "data-allow-mismatch": "attribute"
      }, [c("#EAEDF1", "#DCDEE0")])]), d(), f(), u("c"), h("path", {
        d: "m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",
        fill: l(8),
        "data-allow-mismatch": "attribute"
      }, null)]),
      y = () => h("svg", {
        viewBox: "0 0 160 160"
      }, [h("defs", {
        "data-allow-mismatch": "children"
      }, [h("linearGradient", {
        x1: "50%",
        y1: "100%",
        x2: "50%",
        id: a(9)
      }, [c("#EEE", "#D8D8D8")]), h("linearGradient", {
        x1: "100%",
        y1: "50%",
        y2: "50%",
        id: a(10)
      }, [c("#F2F3F5", "#DCDEE0")]), h("linearGradient", {
        x1: "50%",
        x2: "50%",
        y2: "100%",
        id: a(11)
      }, [c("#F2F3F5", "#DCDEE0")]), h("linearGradient", {
        x1: "50%",
        x2: "50%",
        y2: "100%",
        id: a(12)
      }, [c("#FFF", "#F7F8FA")])]), d(), f(), u("d"), h("g", {
        transform: "rotate(-45 113 -4)",
        fill: "none",
        "data-allow-mismatch": "children"
      }, [h("rect", {
        fill: l(9),
        x: "24",
        y: "52.8",
        width: "5.8",
        height: "19",
        rx: "1"
      }, null), h("rect", {
        fill: l(10),
        x: "22.1",
        y: "67.3",
        width: "9.9",
        height: "28",
        rx: "1"
      }, null), h("circle", {
        stroke: l(11),
        "stroke-width": "8",
        cx: "27",
        cy: "27",
        r: "27"
      }, null), h("circle", {
        fill: l(12),
        cx: "27",
        cy: "27",
        r: "16"
      }, null), h("path", {
        d: "M37 7c-8 0-15 5-16 12",
        stroke: l(11),
        "stroke-width": "3",
        opacity: ".5",
        "stroke-linecap": "round",
        transform: "rotate(45 29 13)"
      }, null)])]),
      b = () => {
        var w;
        if (t.image) return t.image();
        const v = {
          error: p,
          search: y,
          network: m,
          default: g
        };
        return ((w = v[e.image]) == null ? void 0 : w.call(v)) || h("img", {
          src: e.image
        }, null)
      };
    return () => h("div", {
      class: xs()
    }, [h("div", {
      class: xs("image"),
      style: Hn(e.imageSize)
    }, [b()]), n(), o()])
  }
});
const Nh = ee(_w),
  [kw, gn, Qo] = Y("coupon-list"),
  Sw = {
    code: te(""),
    coupons: Xe(),
    currency: te("¥"),
    showCount: j,
    emptyImage: String,
    enabledTitle: String,
    disabledTitle: String,
    disabledCoupons: Xe(),
    showExchangeBar: j,
    showCloseButton: j,
    closeButtonText: String,
    inputPlaceholder: String,
    exchangeMinLength: lt(1),
    exchangeButtonText: String,
    displayedCouponIndex: lt(-1),
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    chosenCoupon: {
      type: [Number, Array],
      default: -1
    }
  };
var Tw = K({
  name: kw,
  props: Sw,
  emits: ["change", "exchange", "update:code"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const [o, s] = ls(), a = F(), l = F(), r = F(0), c = F(0), u = F(e.code), d = N(() => !e.exchangeButtonLoading && (e.exchangeButtonDisabled || !u.value || u.value.length < e.exchangeMinLength)), f = () => {
      const C = Ue(a).height,
        _ = Ue(l).height + 44;
      c.value = (C > _ ? C : jt.value) - _
    }, m = () => {
      t("exchange", u.value), e.code || (u.value = "")
    }, g = v => {
      Oe(() => {
        var C;
        return (C = o.value[v]) == null ? void 0 : C.scrollIntoView()
      })
    }, p = () => h(Nh, {
      image: e.emptyImage
    }, {
      default: () => [h("p", {
        class: gn("empty-tip")
      }, [Qo("noCoupon")])]
    }), y = () => {
      if (e.showExchangeBar) return h("div", {
        ref: l,
        class: gn("exchange-bar")
      }, [h($n, {
        modelValue: u.value,
        "onUpdate:modelValue": v => u.value = v,
        clearable: !0,
        border: !1,
        class: gn("field"),
        placeholder: e.inputPlaceholder || Qo("placeholder"),
        maxlength: "20"
      }, null), h(Tt, {
        plain: !0,
        type: "primary",
        class: gn("exchange"),
        text: e.exchangeButtonText || Qo("exchange"),
        loading: e.exchangeButtonLoading,
        disabled: d.value,
        onClick: m
      }, null)])
    }, b = () => {
      const {
        coupons: v,
        chosenCoupon: C
      } = e, _ = e.showCount ? ` (${v.length})` : "", k = (e.enabledTitle || Qo("enable")) + _, I = (D = [], S = 0) => D.includes(S) ? D.filter(B => B !== S) : [...D, S];
      return h(es, {
        title: k
      }, {
        default: () => {
          var D;
          return [h("div", {
            class: gn("list", {
              "with-bottom": e.showCloseButton
            }),
            style: {
              height: `${c.value}px`
            }
          }, [v.map((S, B) => h(Hl, {
            key: S.id,
            ref: s(B),
            coupon: S,
            chosen: Array.isArray(C) ? C.includes(B) : B === C,
            currency: e.currency,
            onClick: () => t("change", Array.isArray(C) ? I(C, B) : B)
          }, null)), !v.length && p(), (D = n["list-footer"]) == null ? void 0 : D.call(n)])]
        }
      })
    }, w = () => {
      const {
        disabledCoupons: v
      } = e, C = e.showCount ? ` (${v.length})` : "", _ = (e.disabledTitle || Qo("disabled")) + C;
      return h(es, {
        title: _
      }, {
        default: () => {
          var k;
          return [h("div", {
            class: gn("list", {
              "with-bottom": e.showCloseButton
            }),
            style: {
              height: `${c.value}px`
            }
          }, [v.map(I => h(Hl, {
            disabled: !0,
            key: I.id,
            coupon: I,
            currency: e.currency
          }, null)), !v.length && p(), (k = n["disabled-list-footer"]) == null ? void 0 : k.call(n)])]
        }
      })
    };
    return re(() => e.code, v => {
      u.value = v
    }), re(jt, f), re(u, v => t("update:code", v)), re(() => e.displayedCouponIndex, g), at(() => {
      f(), g(e.displayedCouponIndex)
    }), () => h("div", {
      ref: a,
      class: gn()
    }, [y(), h(Sa, {
      active: r.value,
      "onUpdate:active": v => r.value = v,
      class: gn("tab")
    }, {
      default: () => [b(), w()]
    }), h("div", {
      class: gn("bottom")
    }, [n["list-button"] ? n["list-button"]() : rt(h(Tt, {
      round: !0,
      block: !0,
      type: "primary",
      class: gn("close"),
      text: e.closeButtonText || Qo("close"),
      onClick: () => t("change", Array.isArray(e.chosenCoupon) ? [] : -1)
    }, null), [
      [dt, e.showCloseButton]
    ])])])
  }
});
const xw = ee(Tw),
  _u = new Date().getFullYear(),
  [Aw] = Y("date-picker"),
  Ew = ke({}, Ph, {
    columnsType: {
      type: Array,
      default: () => ["year", "month", "day"]
    },
    minDate: {
      type: Date,
      default: () => new Date(_u - 10, 0, 1),
      validator: Qi
    },
    maxDate: {
      type: Date,
      default: () => new Date(_u + 10, 11, 31),
      validator: Qi
    }
  });
var Iw = K({
  name: Aw,
  props: Ew,
  emits: ["confirm", "cancel", "change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(e.modelValue),
      s = F(!1),
      a = F(),
      l = () => {
        const _ = e.minDate.getFullYear(),
          k = e.maxDate.getFullYear();
        return si(_, k, "year", e.formatter, e.filter)
      },
      r = _ => _ === e.minDate.getFullYear(),
      c = _ => _ === e.maxDate.getFullYear(),
      u = _ => _ === e.minDate.getMonth() + 1,
      d = _ => _ === e.maxDate.getMonth() + 1,
      f = _ => {
        const {
          minDate: k,
          columnsType: I
        } = e, D = I.indexOf(_), S = s.value ? e.modelValue[D] : o.value[D];
        if (S) return +S;
        switch (_) {
          case "year":
            return k.getFullYear();
          case "month":
            return k.getMonth() + 1;
          case "day":
            return k.getDate()
        }
      },
      m = () => {
        const _ = f("year"),
          k = r(_) ? e.minDate.getMonth() + 1 : 1,
          I = c(_) ? e.maxDate.getMonth() + 1 : 12;
        return si(k, I, "month", e.formatter, e.filter)
      },
      g = () => {
        const _ = f("year"),
          k = f("month"),
          I = r(_) && u(k) ? e.minDate.getDate() : 1,
          D = c(_) && d(k) ? e.maxDate.getDate() : Bh(_, k);
        return si(I, D, "day", e.formatter, e.filter)
      },
      p = () => {
        var _;
        return (_ = a.value) == null ? void 0 : _.confirm()
      },
      y = () => o.value,
      b = N(() => e.columnsType.map(_ => {
        switch (_) {
          case "year":
            return l();
          case "month":
            return m();
          case "day":
            return g();
          default:
            return []
        }
      }));
    re(o, _ => {
      pn(_, e.modelValue) || t("update:modelValue", _)
    }), re(() => e.modelValue, (_, k) => {
      s.value = pn(k, o.value), _ = Rh(_, b.value), pn(_, o.value) || (o.value = _), s.value = !1
    }, {
      immediate: !0
    });
    const w = (..._) => t("change", ..._),
      v = (..._) => t("cancel", ..._),
      C = (..._) => t("confirm", ..._);
    return $e({
      confirm: p,
      getSelectedDate: y
    }), () => h(xa, De({
      ref: a,
      modelValue: o.value,
      "onUpdate:modelValue": _ => o.value = _,
      columns: b.value,
      onChange: w,
      onCancel: v,
      onConfirm: C
    }, Ve(e, Oh)), n)
  }
});
const Pw = ee(Iw),
  [Ow, qt, As] = Y("dialog"),
  Bw = ke({}, bi, {
    title: String,
    theme: String,
    width: Z,
    message: [String, Function],
    callback: Function,
    allowHtml: Boolean,
    className: et,
    transition: te("van-dialog-bounce"),
    messageAlign: String,
    closeOnPopstate: j,
    showCancelButton: Boolean,
    cancelButtonText: String,
    cancelButtonColor: String,
    cancelButtonDisabled: Boolean,
    confirmButtonText: String,
    confirmButtonColor: String,
    confirmButtonDisabled: Boolean,
    showConfirmButton: j,
    closeOnClickOverlay: Boolean
  }),
  Rw = [...Sr, "transition", "closeOnPopstate"];
var Dw = K({
  name: Ow,
  props: Bw,
  emits: ["confirm", "cancel", "keydown", "update:show"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = Ze({
        confirm: !1,
        cancel: !1
      }),
      a = w => t("update:show", w),
      l = w => {
        var v;
        a(!1), (v = e.callback) == null || v.call(e, w)
      },
      r = w => () => {
        e.show && (t(w), e.beforeClose ? (s[w] = !0, yo(e.beforeClose, {
          args: [w],
          done() {
            l(w), s[w] = !1
          },
          canceled() {
            s[w] = !1
          }
        })) : l(w))
      },
      c = r("cancel"),
      u = r("confirm"),
      d = by(w => {
        var v, C;
        if (w.target !== ((C = (v = o.value) == null ? void 0 : v.popupRef) == null ? void 0 : C.value)) return;
        ({
          Enter: e.showConfirmButton ? u : bl,
          Escape: e.showCancelButton ? c : bl
        })[w.key](), t("keydown", w)
      }, ["enter", "esc"]),
      f = () => {
        const w = n.title ? n.title() : e.title;
        if (w) return h("div", {
          class: qt("header", {
            isolated: !e.message && !n.default
          })
        }, [w])
      },
      m = w => {
        const {
          message: v,
          allowHtml: C,
          messageAlign: _
        } = e, k = qt("message", {
          "has-title": w,
          [_]: _
        }), I = ci(v) ? v() : v;
        return C && typeof I == "string" ? h("div", {
          class: k,
          innerHTML: I
        }, null) : h("div", {
          class: k
        }, [I])
      },
      g = () => {
        if (n.default) return h("div", {
          class: qt("content")
        }, [n.default()]);
        const {
          title: w,
          message: v,
          allowHtml: C
        } = e;
        if (v) {
          const _ = !!(w || n.title);
          return h("div", {
            key: C ? 1 : 0,
            class: qt("content", {
              isolated: !_
            })
          }, [m(_)])
        }
      },
      p = () => h("div", {
        class: [Wf, qt("footer")]
      }, [e.showCancelButton && h(Tt, {
        size: "large",
        text: e.cancelButtonText || As("cancel"),
        class: qt("cancel"),
        style: {
          color: e.cancelButtonColor
        },
        loading: s.cancel,
        disabled: e.cancelButtonDisabled,
        onClick: c
      }, null), e.showConfirmButton && h(Tt, {
        size: "large",
        text: e.confirmButtonText || As("confirm"),
        class: [qt("confirm"), {
          [jf]: e.showCancelButton
        }],
        style: {
          color: e.confirmButtonColor
        },
        loading: s.confirm,
        disabled: e.confirmButtonDisabled,
        onClick: u
      }, null)]),
      y = () => h(Zf, {
        class: qt("footer")
      }, {
        default: () => [e.showCancelButton && h(Ml, {
          type: "warning",
          text: e.cancelButtonText || As("cancel"),
          class: qt("cancel"),
          color: e.cancelButtonColor,
          loading: s.cancel,
          disabled: e.cancelButtonDisabled,
          onClick: c
        }, null), e.showConfirmButton && h(Ml, {
          type: "danger",
          text: e.confirmButtonText || As("confirm"),
          class: qt("confirm"),
          color: e.confirmButtonColor,
          loading: s.confirm,
          disabled: e.confirmButtonDisabled,
          onClick: u
        }, null)]
      }),
      b = () => n.footer ? n.footer() : e.theme === "round-button" ? y() : p();
    return () => {
      const {
        width: w,
        title: v,
        theme: C,
        message: _,
        className: k
      } = e;
      return h(cn, De({
        ref: o,
        role: "dialog",
        class: [qt([C]), k],
        style: {
          width: Ie(w)
        },
        tabindex: 0,
        "aria-labelledby": v || _,
        onKeydown: d,
        "onUpdate:show": a
      }, Ve(e, Rw)), {
        default: () => [f(), g(), b()]
      })
    }
  }
});
const $w = ee(Dw),
  [Mw, Lw] = Y("divider"),
  Nw = {
    dashed: Boolean,
    hairline: j,
    vertical: Boolean,
    contentPosition: te("center")
  };
var Fw = K({
  name: Mw,
  props: Nw,
  setup(e, {
    slots: t
  }) {
    return () => {
      var n;
      return h("div", {
        role: "separator",
        class: Lw({
          dashed: e.dashed,
          hairline: e.hairline,
          vertical: e.vertical,
          [`content-${e.contentPosition}`]: !!t.default && !e.vertical
        })
      }, [!e.vertical && ((n = t.default) == null ? void 0 : n.call(t))])
    }
  }
});
const zw = ee(Fw),
  [Fh, Es] = Y("dropdown-menu"),
  Vw = {
    overlay: j,
    zIndex: Z,
    duration: ge(.2),
    direction: te("down"),
    activeColor: String,
    autoLocate: Boolean,
    closeOnClickOutside: j,
    closeOnClickOverlay: j,
    swipeThreshold: Z
  },
  zh = Symbol(Fh);
var Hw = K({
  name: Fh,
  props: Vw,
  setup(e, {
    slots: t
  }) {
    const n = wi(),
      o = F(),
      s = F(),
      a = F(0),
      {
        children: l,
        linkChildren: r
      } = xt(zh),
      c = pi(o),
      u = N(() => l.some(v => v.state.showWrapper)),
      d = N(() => e.swipeThreshold && l.length > +e.swipeThreshold),
      f = N(() => {
        if (u.value && Fe(e.zIndex)) return {
          zIndex: +e.zIndex + 1
        }
      }),
      m = () => {
        l.forEach(v => {
          v.toggle(!1)
        })
      },
      g = () => {
        e.closeOnClickOutside && m()
      },
      p = () => {
        if (s.value) {
          const v = Ue(s);
          e.direction === "down" ? a.value = v.bottom : a.value = jt.value - v.top
        }
      },
      y = () => {
        u.value && p()
      },
      b = v => {
        l.forEach((C, _) => {
          _ === v ? C.toggle() : C.state.showPopup && C.toggle(!1, {
            immediate: !0
          })
        })
      },
      w = (v, C) => {
        const {
          showPopup: _
        } = v.state, {
          disabled: k,
          titleClass: I
        } = v;
        return h("div", {
          id: `${n}-${C}`,
          role: "button",
          tabindex: k ? void 0 : 0,
          "data-allow-mismatch": "attribute",
          class: [Es("item", {
            disabled: k,
            grow: d.value
          }), {
            [St]: !k
          }],
          onClick: () => {
            k || b(C)
          }
        }, [h("span", {
          class: [Es("title", {
            down: _ === (e.direction === "down"),
            active: _
          }), I],
          style: {
            color: _ ? e.activeColor : ""
          }
        }, [h("div", {
          class: "van-ellipsis"
        }, [v.renderTitle()])])])
      };
    return $e({
      close: m
    }), r({
      id: n,
      props: e,
      offset: a,
      updateOffset: p
    }), ba(o, g), st("scroll", y, {
      target: c,
      passive: !0
    }), () => {
      var v;
      return h("div", {
        ref: o,
        class: Es()
      }, [h("div", {
        ref: s,
        style: f.value,
        class: Es("bar", {
          opened: u.value,
          scrollable: d.value
        })
      }, [l.map(w)]), (v = t.default) == null ? void 0 : v.call(t)])
    }
  }
});
const [Uw, Is] = Y("dropdown-item"), Ww = {
  title: String,
  options: Xe(),
  disabled: Boolean,
  teleport: [String, Object],
  lazyRender: j,
  modelValue: et,
  titleClass: et
};
var jw = K({
  name: Uw,
  inheritAttrs: !1,
  props: Ww,
  emits: ["open", "opened", "close", "closed", "change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n,
    attrs: o
  }) {
    const s = Ze({
        showPopup: !1,
        transition: !0,
        showWrapper: !1
      }),
      a = F(),
      {
        parent: l,
        index: r
      } = pt(zh);
    if (!l) return;
    const c = v => () => t(v),
      u = c("open"),
      d = c("close"),
      f = c("opened"),
      m = () => {
        s.showWrapper = !1, t("closed")
      },
      g = v => {
        e.teleport && v.stopPropagation()
      },
      p = (v = !s.showPopup, C = {}) => {
        v !== s.showPopup && (s.showPopup = v, s.transition = !C.immediate, v && (l.updateOffset(), s.showWrapper = !0))
      },
      y = () => {
        if (n.title) return n.title();
        if (e.title) return e.title;
        const v = e.options.find(C => C.value === e.modelValue);
        return v ? v.text : ""
      },
      b = v => {
        const {
          activeColor: C
        } = l.props, {
          disabled: _
        } = v, k = v.value === e.modelValue, I = () => {
          _ || (s.showPopup = !1, v.value !== e.modelValue && (t("update:modelValue", v.value), t("change", v.value)))
        }, D = () => {
          if (k) return h(Pe, {
            class: Is("icon"),
            color: _ ? void 0 : C,
            name: "success"
          }, null)
        };
        return h(un, {
          role: "menuitem",
          key: String(v.value),
          icon: v.icon,
          title: v.text,
          class: Is("option", {
            active: k,
            disabled: _
          }),
          style: {
            color: k ? C : ""
          },
          tabindex: k ? 0 : -1,
          clickable: !_,
          onClick: I
        }, {
          value: D
        })
      },
      w = () => {
        const {
          offset: v
        } = l, {
          autoLocate: C,
          zIndex: _,
          overlay: k,
          duration: I,
          direction: D,
          closeOnClickOverlay: S
        } = l.props, B = Un(_);
        let R = v.value;
        if (C && a.value) {
          const x = Ly(a.value);
          x && (R -= Ue(x).top)
        }
        return D === "down" ? B.top = `${R}px` : B.bottom = `${R}px`, rt(h("div", De({
          ref: a,
          style: B,
          class: Is([D]),
          onClick: g
        }, o), [h(cn, {
          show: s.showPopup,
          "onUpdate:show": x => s.showPopup = x,
          role: "menu",
          class: Is("content"),
          overlay: k,
          position: D === "down" ? "top" : "bottom",
          duration: s.transition ? I : 0,
          lazyRender: e.lazyRender,
          overlayStyle: {
            position: "absolute"
          },
          "aria-labelledby": `${l.id}-${r.value}`,
          "data-allow-mismatch": "attribute",
          closeOnClickOverlay: S,
          onOpen: u,
          onClose: d,
          onOpened: f,
          onClosed: m
        }, {
          default: () => {
            var x;
            return [e.options.map(b), (x = n.default) == null ? void 0 : x.call(n)]
          }
        })]), [
          [dt, s.showWrapper]
        ])
      };
    return $e({
      state: s,
      toggle: p,
      renderTitle: y
    }), () => e.teleport ? h($o, {
      to: e.teleport
    }, {
      default: () => [w()]
    }) : w()
  }
});
const Qw = ee(jw),
  Kw = ee(Hw),
  Yw = {
    gap: lt(24),
    icon: String,
    axis: te("y"),
    magnetic: String,
    offset: {
      type: Object,
      default: () => ({
        x: -1,
        y: -1
      })
    },
    teleport: {
      type: [String, Object],
      default: "body"
    }
  },
  [qw, ku] = Y("floating-bubble");
var Gw = K({
  name: qw,
  inheritAttrs: !1,
  props: Yw,
  emits: ["click", "update:offset", "offsetChange"],
  setup(e, {
    slots: t,
    emit: n,
    attrs: o
  }) {
    const s = F(),
      a = F({
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }),
      l = N(() => ({
        top: e.gap,
        right: tn.value - a.value.width - e.gap,
        bottom: jt.value - a.value.height - e.gap,
        left: e.gap
      })),
      r = F(!1);
    let c = !1;
    const u = N(() => {
        const C = {},
          _ = Ie(a.value.x),
          k = Ie(a.value.y);
        return C.transform = `translate3d(${_}, ${k}, 0)`, (r.value || !c) && (C.transition = "none"), C
      }),
      d = () => {
        if (!v.value) return;
        const {
          width: C,
          height: _
        } = Ue(s.value), {
          offset: k
        } = e;
        a.value = {
          x: k.x > -1 ? k.x : tn.value - C - e.gap,
          y: k.y > -1 ? k.y : jt.value - _ - e.gap,
          width: C,
          height: _
        }
      },
      f = Kt();
    let m = 0,
      g = 0;
    const p = C => {
      f.start(C), r.value = !0, m = a.value.x, g = a.value.y
    };
    st("touchmove", C => {
      if (C.preventDefault(), f.move(C), e.axis !== "lock" && !f.isTap.value) {
        if (e.axis === "x" || e.axis === "xy") {
          let k = m + f.deltaX.value;
          k < l.value.left && (k = l.value.left), k > l.value.right && (k = l.value.right), a.value.x = k
        }
        if (e.axis === "y" || e.axis === "xy") {
          let k = g + f.deltaY.value;
          k < l.value.top && (k = l.value.top), k > l.value.bottom && (k = l.value.bottom), a.value.y = k
        }
        const _ = Ve(a.value, ["x", "y"]);
        n("update:offset", _)
      }
    }, {
      target: s
    });
    const b = () => {
        r.value = !1, Oe(() => {
          if (e.magnetic === "x") {
            const C = Xs([l.value.left, l.value.right], a.value.x);
            a.value.x = C
          }
          if (e.magnetic === "y") {
            const C = Xs([l.value.top, l.value.bottom], a.value.y);
            a.value.y = C
          }
          if (!f.isTap.value) {
            const C = Ve(a.value, ["x", "y"]);
            n("update:offset", C), (m !== C.x || g !== C.y) && n("offsetChange", C)
          }
        })
      },
      w = C => {
        f.isTap.value ? n("click", C) : C.stopPropagation()
      };
    at(() => {
      d(), Oe(() => {
        c = !0
      })
    }), re([tn, jt, () => e.gap, () => e.offset], d, {
      deep: !0
    });
    const v = F(!0);
    return Cn(() => {
      v.value = !0
    }), _n(() => {
      e.teleport && (v.value = !1)
    }), () => {
      const C = rt(h("div", De({
        class: ku(),
        ref: s,
        onTouchstartPassive: p,
        onTouchend: b,
        onTouchcancel: b,
        onClickCapture: w,
        style: u.value
      }, o), [t.default ? t.default() : h(mp, {
        name: e.icon,
        class: ku("icon")
      }, null)]), [
        [dt, v.value]
      ]);
      return e.teleport ? h($o, {
        to: e.teleport
      }, {
        default: () => [C]
      }) : C
    }
  }
});
const Zw = ee(Gw),
  Xw = {
    height: ge(0),
    anchors: Xe(),
    duration: ge(.3),
    contentDraggable: j,
    lockScroll: Boolean,
    safeAreaInsetBottom: j
  },
  [Jw, Ps] = Y("floating-panel");
var eC = K({
  name: Jw,
  props: Xw,
  emits: ["heightChange", "update:height"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const s = F(),
      a = F(),
      l = xr(() => +e.height, C => t("update:height", C)),
      r = N(() => {
        var C, _;
        return {
          min: (C = e.anchors[0]) != null ? C : 100,
          max: (_ = e.anchors[e.anchors.length - 1]) != null ? _ : Math.round(jt.value * .6)
        }
      }),
      c = N(() => e.anchors.length >= 2 ? e.anchors : [r.value.min, r.value.max]),
      u = F(!1),
      d = N(() => ({
        height: Ie(r.value.max),
        transform: `translateY(calc(100% + ${Ie(-l.value)}))`,
        transition: u.value ? "none" : `transform ${e.duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28)`
      })),
      f = C => {
        const _ = Math.abs(C),
          {
            min: k,
            max: I
          } = r.value;
        return _ > I ? -(I + (_ - I) * .2) : _ < k ? -(k - (k - _) * .2) : C
      };
    let m, g = -1;
    const p = Kt(),
      y = C => {
        p.start(C), u.value = !0, m = -l.value, g = -1
      },
      b = C => {
        var _;
        p.move(C);
        const k = C.target;
        if (a.value === k || (_ = a.value) != null && _.contains(k)) {
          const {
            scrollTop: D
          } = a.value;
          if (g = Math.max(g, D), !e.contentDraggable) return;
          if (-m < r.value.max) Ge(C, !0);
          else if (!(D <= 0 && p.deltaY.value > 0) || g > 0) return
        }
        const I = p.deltaY.value + m;
        l.value = -f(I)
      },
      w = () => {
        g = -1, u.value = !1, l.value = Xs(c.value, l.value), l.value !== -m && t("heightChange", {
          height: l.value
        })
      };
    re(r, () => {
      l.value = Xs(c.value, l.value)
    }, {
      immediate: !0
    }), nh(s, () => e.lockScroll || u.value), st("touchmove", b, {
      target: s
    });
    const v = () => n.header ? n.header() : h("div", {
      class: Ps("header")
    }, [h("div", {
      class: Ps("header-bar")
    }, null)]);
    return () => {
      var C;
      return h("div", {
        class: [Ps(), {
          "van-safe-area-bottom": e.safeAreaInsetBottom
        }],
        ref: s,
        style: d.value,
        onTouchstartPassive: y,
        onTouchend: w,
        onTouchcancel: w
      }, [v(), h("div", {
        class: Ps("content"),
        ref: a
      }, [(C = n.default) == null ? void 0 : C.call(n)])])
    }
  }
});
const tC = ee(eC),
  [Vh, nC] = Y("grid"),
  oC = {
    square: Boolean,
    center: j,
    border: j,
    gutter: Z,
    reverse: Boolean,
    iconSize: Z,
    direction: String,
    clickable: Boolean,
    columnNum: ge(4)
  },
  Hh = Symbol(Vh);
var iC = K({
  name: Vh,
  props: oC,
  setup(e, {
    slots: t
  }) {
    const {
      linkChildren: n
    } = xt(Hh);
    return n({
      props: e
    }), () => {
      var o;
      return h("div", {
        style: {
          paddingLeft: Ie(e.gutter)
        },
        class: [nC(), {
          [Wf]: e.border && !e.gutter
        }]
      }, [(o = t.default) == null ? void 0 : o.call(t)])
    }
  }
});
const sC = ee(iC),
  [aC, Os] = Y("grid-item"),
  lC = ke({}, po, {
    dot: Boolean,
    text: String,
    icon: String,
    badge: Z,
    iconColor: String,
    iconPrefix: String,
    badgeProps: Object
  });
var rC = K({
  name: aC,
  props: lC,
  setup(e, {
    slots: t
  }) {
    const {
      parent: n,
      index: o
    } = pt(Hh), s = Mo();
    if (!n) return;
    const a = N(() => {
        const {
          square: d,
          gutter: f,
          columnNum: m
        } = n.props, g = `${100/+m}%`, p = {
          flexBasis: g
        };
        if (d) p.paddingTop = g;
        else if (f) {
          const y = Ie(f);
          p.paddingRight = y, o.value >= +m && (p.marginTop = y)
        }
        return p
      }),
      l = N(() => {
        const {
          square: d,
          gutter: f
        } = n.props;
        if (d && f) {
          const m = Ie(f);
          return {
            right: m,
            bottom: m,
            height: "auto"
          }
        }
      }),
      r = () => {
        if (t.icon) return h(Lo, De({
          dot: e.dot,
          content: e.badge
        }, e.badgeProps), {
          default: t.icon
        });
        if (e.icon) return h(Pe, {
          dot: e.dot,
          name: e.icon,
          size: n.props.iconSize,
          badge: e.badge,
          class: Os("icon"),
          color: e.iconColor,
          badgeProps: e.badgeProps,
          classPrefix: e.iconPrefix
        }, null)
      },
      c = () => {
        if (t.text) return t.text();
        if (e.text) return h("span", {
          class: Os("text")
        }, [e.text])
      },
      u = () => t.default ? t.default() : [r(), c()];
    return () => {
      const {
        center: d,
        border: f,
        square: m,
        gutter: g,
        reverse: p,
        direction: y,
        clickable: b
      } = n.props, w = [Os("content", [y, {
        center: d,
        square: m,
        reverse: p,
        clickable: b,
        surround: f && g
      }]), {
        [Wn]: f
      }];
      return h("div", {
        class: [Os({
          square: m
        })],
        style: a.value
      }, [h("div", {
        role: b ? "button" : void 0,
        class: w,
        style: l.value,
        tabindex: b ? 0 : void 0,
        onClick: s
      }, [u()])])
    }
  }
});
const cC = ee(rC),
  [uC, Su] = Y("highlight"),
  dC = {
    autoEscape: j,
    caseSensitive: Boolean,
    highlightClass: String,
    highlightTag: te("span"),
    keywords: gt([String, Array]),
    sourceString: te(""),
    tag: te("div"),
    unhighlightClass: String,
    unhighlightTag: te("span")
  };
var fC = K({
  name: uC,
  props: dC,
  setup(e) {
    const t = N(() => {
        const {
          autoEscape: o,
          caseSensitive: s,
          keywords: a,
          sourceString: l
        } = e, r = s ? "g" : "gi";
        let u = (Array.isArray(a) ? a : [a]).filter(f => f).reduce((f, m) => {
          o && (m = m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
          const g = new RegExp(m, r);
          let p;
          for (; p = g.exec(l);) {
            const y = p.index,
              b = g.lastIndex;
            if (y >= b) {
              g.lastIndex++;
              continue
            }
            f.push({
              start: y,
              end: b,
              highlight: !0
            })
          }
          return f
        }, []);
        u = u.sort((f, m) => f.start - m.start).reduce((f, m) => {
          const g = f[f.length - 1];
          if (!g || m.start > g.end) {
            const p = g ? g.end : 0,
              y = m.start;
            p !== y && f.push({
              start: p,
              end: y,
              highlight: !1
            }), f.push(m)
          } else g.end = Math.max(g.end, m.end);
          return f
        }, []);
        const d = u[u.length - 1];
        return d || u.push({
          start: 0,
          end: l.length,
          highlight: !1
        }), d && d.end < l.length && u.push({
          start: d.end,
          end: l.length,
          highlight: !1
        }), u
      }),
      n = () => {
        const {
          sourceString: o,
          highlightClass: s,
          unhighlightClass: a,
          highlightTag: l,
          unhighlightTag: r
        } = e;
        return t.value.map(c => {
          const {
            start: u,
            end: d,
            highlight: f
          } = c, m = o.slice(u, d);
          return f ? h(l, {
            class: [Su("tag"), s]
          }, {
            default: () => [m]
          }) : h(r, {
            class: a
          }, {
            default: () => [m]
          })
        })
      };
    return () => {
      const {
        tag: o
      } = e;
      return h(o, {
        class: Su()
      }, {
        default: () => [n()]
      })
    }
  }
});
const hC = ee(fC),
  Tu = e => Math.sqrt((e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2),
  mC = e => ({
    x: (e[0].clientX + e[1].clientX) / 2,
    y: (e[0].clientY + e[1].clientY) / 2
  }),
  sl = Y("image-preview")[1],
  xu = 2.6,
  gC = {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: gt(Z),
    maxZoom: gt(Z),
    rootWidth: gt(Number),
    rootHeight: gt(Number),
    disableZoom: Boolean,
    doubleScale: Boolean,
    closeOnClickImage: Boolean,
    closeOnClickOverlay: Boolean,
    vertical: Boolean
  };
var vC = K({
  props: gC,
  emits: ["scale", "close", "longPress"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = Ze({
        scale: 1,
        moveX: 0,
        moveY: 0,
        moving: !1,
        zooming: !1,
        initializing: !1,
        imageRatio: 0
      }),
      s = Kt(),
      a = F(),
      l = F(),
      r = F(!1),
      c = F(!1);
    let u = 0;
    const d = N(() => {
        const {
          scale: W,
          moveX: ne,
          moveY: ue,
          moving: Re,
          zooming: Ne,
          initializing: z
        } = o, X = {
          transitionDuration: Ne || Re || z ? "0s" : ".3s"
        };
        return (W !== 1 || c.value) && (X.transform = `matrix(${W}, 0, 0, ${W}, ${ne}, ${ue})`), X
      }),
      f = N(() => {
        if (o.imageRatio) {
          const {
            rootWidth: W,
            rootHeight: ne
          } = e, ue = r.value ? ne / o.imageRatio : W;
          return Math.max(0, (o.scale * ue - W) / 2)
        }
        return 0
      }),
      m = N(() => {
        if (o.imageRatio) {
          const {
            rootWidth: W,
            rootHeight: ne
          } = e, ue = r.value ? ne : W * o.imageRatio;
          return Math.max(0, (o.scale * ue - ne) / 2)
        }
        return 0
      }),
      g = (W, ne) => {
        var ue;
        if (W = ht(W, +e.minZoom, +e.maxZoom + 1), W !== o.scale) {
          const Re = W / o.scale;
          if (o.scale = W, ne) {
            const Ne = Ue((ue = a.value) == null ? void 0 : ue.$el),
              z = {
                x: Ne.width * .5,
                y: Ne.height * .5
              },
              X = o.moveX - (ne.x - Ne.left - z.x) * (Re - 1),
              ye = o.moveY - (ne.y - Ne.top - z.y) * (Re - 1);
            o.moveX = ht(X, -f.value, f.value), o.moveY = ht(ye, -m.value, m.value)
          } else o.moveX = 0, o.moveY = c.value ? u : 0;
          t("scale", {
            scale: W,
            index: e.active
          })
        }
      },
      p = () => {
        g(1)
      },
      y = () => {
        const W = o.scale > 1 ? 1 : 2;
        g(W, W === 2 || c.value ? {
          x: s.startX.value,
          y: s.startY.value
        } : void 0)
      };
    let b, w, v, C, _, k, I, D, S = !1;
    const B = W => {
        const {
          touches: ne
        } = W;
        if (b = ne.length, b === 2 && e.disableZoom) return;
        const {
          offsetX: ue
        } = s;
        s.start(W), w = o.moveX, v = o.moveY, D = Date.now(), S = !1, o.moving = b === 1 && (o.scale !== 1 || c.value), o.zooming = b === 2 && !ue.value, o.zooming && (C = o.scale, _ = Tu(ne))
      },
      R = W => {
        const {
          touches: ne
        } = W;
        if (s.move(W), o.moving) {
          const {
            deltaX: ue,
            deltaY: Re
          } = s, Ne = ue.value + w, z = Re.value + v;
          if ((e.vertical ? s.isVertical() && Math.abs(z) > m.value : s.isHorizontal() && Math.abs(Ne) > f.value) && !S) {
            o.moving = !1;
            return
          }
          S = !0, Ge(W, !0), o.moveX = ht(Ne, -f.value, f.value), o.moveY = ht(z, -m.value, m.value)
        }
        if (o.zooming && (Ge(W, !0), ne.length === 2)) {
          const ue = Tu(ne),
            Re = C * ue / _;
          k = mC(ne), g(Re, k)
        }
      },
      x = W => {
        var ne;
        const ue = (ne = l.value) == null ? void 0 : ne.$el;
        if (!ue) return;
        const Re = ue.firstElementChild,
          Ne = W.target === ue,
          z = Re == null ? void 0 : Re.contains(W.target);
        !e.closeOnClickImage && z || !e.closeOnClickOverlay && Ne || t("close")
      },
      P = W => {
        if (b > 1) return;
        const ne = Date.now() - D,
          ue = 250;
        s.isTap.value && (ne < ue ? e.doubleScale ? I ? (clearTimeout(I), I = null, y()) : I = setTimeout(() => {
          x(W), I = null
        }, ue) : x(W) : ne > Kf && t("longPress"))
      },
      M = W => {
        let ne = !1;
        if ((o.moving || o.zooming) && (ne = !0, o.moving && w === o.moveX && v === o.moveY && (ne = !1), !W.touches.length)) {
          o.zooming && (o.moveX = ht(o.moveX, -f.value, f.value), o.moveY = ht(o.moveY, -m.value, m.value), o.zooming = !1), o.moving = !1, w = 0, v = 0, C = 1, o.scale < 1 && p();
          const ue = +e.maxZoom;
          o.scale > ue && g(ue, k)
        }
        Ge(W, ne), P(W), s.reset()
      },
      J = () => {
        const {
          rootWidth: W,
          rootHeight: ne
        } = e, ue = ne / W, {
          imageRatio: Re
        } = o;
        r.value = o.imageRatio > ue && Re < xu, c.value = o.imageRatio > ue && Re >= xu, c.value && (u = (Re * W - ne) / 2, o.moveY = u, o.initializing = !0, _t(() => {
          o.initializing = !1
        })), p()
      },
      ce = W => {
        const {
          naturalWidth: ne,
          naturalHeight: ue
        } = W.target;
        o.imageRatio = ue / ne, J()
      };
    return re(() => e.active, p), re(() => e.show, W => {
      W || p()
    }), re(() => [e.rootWidth, e.rootHeight], J), st("touchmove", R, {
      target: N(() => {
        var W;
        return (W = l.value) == null ? void 0 : W.$el
      })
    }), $e({
      resetScale: p
    }), () => {
      const W = {
        loading: () => h(rn, {
          type: "spinner"
        }, null)
      };
      return h(Er, {
        ref: l,
        class: sl("swipe-item"),
        onTouchstartPassive: B,
        onTouchend: M,
        onTouchcancel: M
      }, {
        default: () => [n.image ? h("div", {
          class: sl("image-wrap")
        }, [n.image({
          src: e.src,
          onLoad: ce,
          style: d.value
        })]) : h(Ia, {
          ref: a,
          src: e.src,
          fit: "contain",
          class: sl("image", {
            vertical: r.value
          }),
          style: d.value,
          onLoad: ce
        }, W)]
      })
    }
  }
});
const [yC, Ko] = Y("image-preview"), pC = ["show", "teleport", "transition", "overlayStyle", "closeOnPopstate"], bC = {
  show: Boolean,
  loop: j,
  images: Xe(),
  minZoom: ge(1 / 3),
  maxZoom: ge(3),
  overlay: j,
  vertical: Boolean,
  closeable: Boolean,
  showIndex: j,
  className: et,
  closeIcon: te("clear"),
  transition: String,
  beforeClose: Function,
  doubleScale: j,
  overlayClass: et,
  overlayStyle: Object,
  swipeDuration: ge(300),
  startPosition: ge(0),
  showIndicators: Boolean,
  closeOnPopstate: j,
  closeOnClickImage: j,
  closeOnClickOverlay: j,
  closeIconPosition: te("top-right"),
  teleport: [String, Object]
};
var Uh = K({
  name: yC,
  props: bC,
  emits: ["scale", "close", "closed", "change", "longPress", "update:show"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = F(),
      a = Ze({
        active: 0,
        rootWidth: 0,
        rootHeight: 0,
        disableZoom: !1
      }),
      l = () => {
        if (o.value) {
          const C = Ue(o.value.$el);
          a.rootWidth = C.width, a.rootHeight = C.height, o.value.resize()
        }
      },
      r = C => t("scale", C),
      c = C => t("update:show", C),
      u = () => {
        yo(e.beforeClose, {
          args: [a.active],
          done: () => c(!1)
        })
      },
      d = C => {
        C !== a.active && (a.active = C, t("change", C))
      },
      f = () => {
        if (e.showIndex) return h("div", {
          class: Ko("index")
        }, [n.index ? n.index({
          index: a.active
        }) : `${a.active+1} / ${e.images.length}`])
      },
      m = () => {
        if (n.cover) return h("div", {
          class: Ko("cover")
        }, [n.cover()])
      },
      g = () => {
        a.disableZoom = !0
      },
      p = () => {
        a.disableZoom = !1
      },
      y = () => h(Ar, {
        ref: o,
        lazyRender: !0,
        loop: e.loop,
        class: Ko("swipe"),
        vertical: e.vertical,
        duration: e.swipeDuration,
        initialSwipe: e.startPosition,
        showIndicators: e.showIndicators,
        indicatorColor: "white",
        onChange: d,
        onDragEnd: p,
        onDragStart: g
      }, {
        default: () => [e.images.map((C, _) => h(vC, {
          ref: k => {
            _ === a.active && (s.value = k)
          },
          src: C,
          show: e.show,
          active: a.active,
          maxZoom: e.maxZoom,
          minZoom: e.minZoom,
          rootWidth: a.rootWidth,
          rootHeight: a.rootHeight,
          disableZoom: a.disableZoom,
          doubleScale: e.doubleScale,
          closeOnClickImage: e.closeOnClickImage,
          closeOnClickOverlay: e.closeOnClickOverlay,
          vertical: e.vertical,
          onScale: r,
          onClose: u,
          onLongPress: () => t("longPress", {
            index: _
          })
        }, {
          image: n.image
        }))]
      }),
      b = () => {
        if (e.closeable) return h(Pe, {
          role: "button",
          name: e.closeIcon,
          class: [Ko("close-icon", e.closeIconPosition), St],
          onClick: u
        }, null)
      },
      w = () => t("closed"),
      v = (C, _) => {
        var k;
        return (k = o.value) == null ? void 0 : k.swipeTo(C, _)
      };
    return $e({
      resetScale: () => {
        var C;
        (C = s.value) == null || C.resetScale()
      },
      swipeTo: v
    }), at(l), re([tn, jt], l), re(() => e.startPosition, C => d(+C)), re(() => e.show, C => {
      const {
        images: _,
        startPosition: k
      } = e;
      C ? (d(+k), Oe(() => {
        l(), v(+k, {
          immediate: !0
        })
      })) : t("close", {
        index: a.active,
        url: _[a.active]
      })
    }), () => h(cn, De({
      class: [Ko(), e.className],
      overlayClass: [Ko("overlay"), e.overlayClass],
      onClosed: w,
      "onUpdate:show": c
    }, Ve(e, pC)), {
      default: () => [b(), y(), f(), m()]
    })
  }
});
let Vs;
const wC = {
  loop: !0,
  images: [],
  maxZoom: 3,
  minZoom: 1 / 3,
  onScale: void 0,
  onClose: void 0,
  onChange: void 0,
  vertical: !1,
  teleport: "body",
  className: "",
  showIndex: !0,
  closeable: !1,
  closeIcon: "clear",
  transition: void 0,
  beforeClose: void 0,
  doubleScale: !0,
  overlayStyle: void 0,
  overlayClass: void 0,
  startPosition: 0,
  swipeDuration: 300,
  showIndicators: !1,
  closeOnPopstate: !0,
  closeOnClickOverlay: !0,
  closeIconPosition: "top-right"
};

function CC() {
  ({
    instance: Vs
  } = Br({
    setup() {
      const {
        state: e,
        toggle: t
      } = Or(), n = () => {
        e.images = []
      };
      return () => h(Uh, De(e, {
        onClosed: n,
        "onUpdate:show": t
      }), null)
    }
  }))
}
const _C = (e, t = 0) => {
    if (zt) return Vs || CC(), e = Array.isArray(e) ? {
      images: e,
      startPosition: t
    } : e, Vs.open(ke({}, wC, e)), Vs
  },
  kC = ee(Uh);

function SC() {
  return Array(26).fill("").map((n, o) => String.fromCharCode(65 + o))
}
const [Wh, al] = Y("index-bar"), TC = {
  sticky: j,
  zIndex: Z,
  teleport: [String, Object],
  highlightColor: String,
  stickyOffsetTop: lt(0),
  indexList: {
    type: Array,
    default: SC
  }
}, jh = Symbol(Wh);
var xC = K({
  name: Wh,
  props: TC,
  emits: ["select", "change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = F(),
      a = F(""),
      l = Kt(),
      r = pi(o),
      {
        children: c,
        linkChildren: u
      } = xt(jh);
    let d;
    u({
      props: e
    });
    const f = N(() => {
        if (Fe(e.zIndex)) return {
          zIndex: +e.zIndex + 1
        }
      }),
      m = N(() => {
        if (e.highlightColor) return {
          color: e.highlightColor
        }
      }),
      g = (S, B) => {
        for (let R = c.length - 1; R >= 0; R--) {
          const x = R > 0 ? B[R - 1].height : 0,
            P = e.sticky ? x + e.stickyOffsetTop : 0;
          if (S + P >= B[R].top) return R
        }
        return -1
      },
      p = S => c.find(B => String(B.index) === S),
      y = () => {
        if (Do(o)) return;
        const {
          sticky: S,
          indexList: B
        } = e, R = Ln(r.value), x = Ue(r), P = c.map(J => J.getRect(r.value, x));
        let M = -1;
        if (d) {
          const J = p(d);
          if (J) {
            const ce = J.getRect(r.value, x);
            e.sticky && e.stickyOffsetTop ? M = g(ce.top - e.stickyOffsetTop, P) : M = g(ce.top, P)
          }
        } else M = g(R, P);
        a.value = B[M], S && c.forEach((J, ce) => {
          const {
            state: W,
            $el: ne
          } = J;
          if (ce === M || ce === M - 1) {
            const ue = ne.getBoundingClientRect();
            W.left = ue.left, W.width = ue.width
          } else W.left = null, W.width = null;
          if (ce === M) W.active = !0, W.top = Math.max(e.stickyOffsetTop, P[ce].top - R) + x.top;
          else if (ce === M - 1 && d === "") {
            const ue = P[M].top - R;
            W.active = ue > 0, W.top = ue + x.top - P[ce].height
          } else W.active = !1
        }), d = ""
      },
      b = () => {
        Oe(y)
      };
    st("scroll", y, {
      target: r,
      passive: !0
    }), at(b), re(() => e.indexList, b), re(a, S => {
      S && t("change", S)
    });
    const w = () => e.indexList.map(S => {
        const B = S === a.value;
        return h("span", {
          class: al("index", {
            active: B
          }),
          style: B ? m.value : void 0,
          "data-index": S
        }, [S])
      }),
      v = S => {
        d = String(S);
        const B = p(d);
        if (B) {
          const R = Ln(r.value),
            x = Ue(r),
            {
              offsetHeight: P
            } = document.documentElement;
          if (B.$el.scrollIntoView(), R === P - x.height) {
            y();
            return
          }
          e.sticky && e.stickyOffsetTop && (Oo() === P - x.height ? Ji(Oo()) : Ji(Oo() - e.stickyOffsetTop)), t("select", B.index)
        }
      },
      C = S => {
        const {
          index: B
        } = S.dataset;
        B && v(B)
      },
      _ = S => {
        C(S.target)
      };
    let k;
    const I = S => {
        if (l.move(S), l.isVertical()) {
          Ge(S);
          const {
            clientX: B,
            clientY: R
          } = S.touches[0], x = document.elementFromPoint(B, R);
          if (x) {
            const {
              index: P
            } = x.dataset;
            P && k !== P && (k = P, C(x))
          }
        }
      },
      D = () => h("div", {
        ref: s,
        class: al("sidebar"),
        style: f.value,
        onClick: _,
        onTouchstartPassive: l.start
      }, [w()]);
    return $e({
      scrollTo: v
    }), st("touchmove", I, {
      target: s
    }), () => {
      var S;
      return h("div", {
        ref: o,
        class: al()
      }, [e.teleport ? h($o, {
        to: e.teleport
      }, {
        default: () => [D()]
      }) : D(), (S = n.default) == null ? void 0 : S.call(n)])
    }
  }
});
const [AC, EC] = Y("index-anchor"), IC = {
  index: Z
};
var PC = K({
  name: AC,
  props: IC,
  setup(e, {
    slots: t
  }) {
    const n = Ze({
        top: 0,
        left: null,
        rect: {
          top: 0,
          height: 0
        },
        width: null,
        active: !1
      }),
      o = F(),
      {
        parent: s
      } = pt(jh);
    if (!s) return;
    const a = () => n.active && s.props.sticky,
      l = N(() => {
        const {
          zIndex: c,
          highlightColor: u
        } = s.props;
        if (a()) return ke(Un(c), {
          left: n.left ? `${n.left}px` : void 0,
          width: n.width ? `${n.width}px` : void 0,
          transform: n.top ? `translate3d(0, ${n.top}px, 0)` : void 0,
          color: u
        })
      });
    return $e({
      state: n,
      getRect: (c, u) => {
        const d = Ue(o);
        return n.rect.height = d.height, c === window || c === document.body ? n.rect.top = d.top + Oo() : n.rect.top = d.top + Ln(c) - u.top, n.rect
      }
    }), () => {
      const c = a();
      return h("div", {
        ref: o,
        style: {
          height: c ? `${n.rect.height}px` : void 0
        }
      }, [h("div", {
        style: l.value,
        class: [EC({
          sticky: c
        }), {
          [_r]: c
        }]
      }, [t.default ? t.default() : e.index])])
    }
  }
});
const OC = ee(PC),
  BC = ee(xC),
  [RC, Yo, DC] = Y("list"),
  $C = {
    error: Boolean,
    offset: ge(300),
    loading: Boolean,
    disabled: Boolean,
    finished: Boolean,
    scroller: Object,
    errorText: String,
    direction: te("down"),
    loadingText: String,
    finishedText: String,
    immediateCheck: j
  };
var MC = K({
  name: RC,
  props: $C,
  emits: ["load", "update:error", "update:loading"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(e.loading),
      s = F(),
      a = F(),
      l = f0(),
      r = pi(s),
      c = N(() => e.scroller || r.value),
      u = () => {
        Oe(() => {
          if (o.value || e.finished || e.disabled || e.error || (l == null ? void 0 : l.value) === !1) return;
          const {
            direction: p
          } = e, y = +e.offset, b = Ue(c);
          if (!b.height || Do(s)) return;
          let w = !1;
          const v = Ue(a);
          p === "up" ? w = b.top - v.top <= y : w = v.bottom - b.bottom <= y, w && (o.value = !0, t("update:loading", !0), t("load"))
        })
      },
      d = () => {
        if (e.finished) {
          const p = n.finished ? n.finished() : e.finishedText;
          if (p) return h("div", {
            class: Yo("finished-text")
          }, [p])
        }
      },
      f = () => {
        t("update:error", !1), u()
      },
      m = () => {
        if (e.error) {
          const p = n.error ? n.error() : e.errorText;
          if (p) return h("div", {
            role: "button",
            class: Yo("error-text"),
            tabindex: 0,
            onClick: f
          }, [p])
        }
      },
      g = () => {
        if (o.value && !e.finished && !e.disabled) return h("div", {
          class: Yo("loading")
        }, [n.loading ? n.loading() : h(rn, {
          class: Yo("loading-icon")
        }, {
          default: () => [e.loadingText || DC("loading")]
        })])
      };
    return re(() => [e.loading, e.finished, e.error], u), l && re(l, p => {
      p && u()
    }), cf(() => {
      o.value = e.loading
    }), at(() => {
      e.immediateCheck && u()
    }), $e({
      check: u
    }), st("scroll", u, {
      target: c,
      passive: !0
    }), () => {
      var p;
      const y = (p = n.default) == null ? void 0 : p.call(n),
        b = h("div", {
          ref: a,
          class: Yo("placeholder")
        }, null);
      return h("div", {
        ref: s,
        role: "feed",
        class: Yo(),
        "aria-busy": o.value
      }, [e.direction === "down" ? y : b, g(), d(), m(), e.direction === "up" ? y : b])
    }
  }
});
const LC = ee(MC),
  [NC, En] = Y("nav-bar"),
  FC = {
    title: String,
    fixed: Boolean,
    zIndex: Z,
    border: j,
    leftText: String,
    rightText: String,
    leftDisabled: Boolean,
    rightDisabled: Boolean,
    leftArrow: Boolean,
    placeholder: Boolean,
    safeAreaInsetTop: Boolean,
    clickable: j
  };
var zC = K({
  name: NC,
  props: FC,
  emits: ["clickLeft", "clickRight"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = _a(o, En),
      a = d => {
        e.leftDisabled || t("clickLeft", d)
      },
      l = d => {
        e.rightDisabled || t("clickRight", d)
      },
      r = () => n.left ? n.left() : [e.leftArrow && h(Pe, {
        class: En("arrow"),
        name: "arrow-left"
      }, null), e.leftText && h("span", {
        class: En("text")
      }, [e.leftText])],
      c = () => n.right ? n.right() : h("span", {
        class: En("text")
      }, [e.rightText]),
      u = () => {
        const {
          title: d,
          fixed: f,
          border: m,
          zIndex: g
        } = e, p = Un(g), y = e.leftArrow || e.leftText || n.left, b = e.rightText || n.right;
        return h("div", {
          ref: o,
          style: p,
          class: [En({
            fixed: f
          }), {
            [_r]: m,
            "van-safe-area-top": e.safeAreaInsetTop
          }]
        }, [h("div", {
          class: En("content")
        }, [y && h("div", {
          class: [En("left", {
            disabled: e.leftDisabled
          }), e.clickable && !e.leftDisabled ? St : ""],
          onClick: a
        }, [r()]), h("div", {
          class: [En("title"), "van-ellipsis"]
        }, [n.title ? n.title() : d]), b && h("div", {
          class: [En("right", {
            disabled: e.rightDisabled
          }), e.clickable && !e.rightDisabled ? St : ""],
          onClick: l
        }, [c()])])])
      };
    return () => e.fixed && e.placeholder ? s(u) : u()
  }
});
const VC = ee(zC),
  [HC, Ai] = Y("notice-bar"),
  UC = {
    text: String,
    mode: String,
    color: String,
    delay: ge(1),
    speed: ge(60),
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    scrollable: {
      type: Boolean,
      default: null
    }
  };
var WC = K({
  name: HC,
  props: UC,
  emits: ["close", "replay"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o = 0,
      s = 0,
      a;
    const l = F(),
      r = F(),
      c = Ze({
        show: !0,
        offset: 0,
        duration: 0
      }),
      u = () => {
        if (n["left-icon"]) return n["left-icon"]();
        if (e.leftIcon) return h(Pe, {
          class: Ai("left-icon"),
          name: e.leftIcon
        }, null)
      },
      d = () => {
        if (e.mode === "closeable") return "cross";
        if (e.mode === "link") return "arrow"
      },
      f = b => {
        e.mode === "closeable" && (c.show = !1, t("close", b))
      },
      m = () => {
        if (n["right-icon"]) return n["right-icon"]();
        const b = d();
        if (b) return h(Pe, {
          name: b,
          class: Ai("right-icon"),
          onClick: f
        }, null)
      },
      g = () => {
        c.offset = o, c.duration = 0, _t(() => {
          so(() => {
            c.offset = -s, c.duration = (s + o) / +e.speed, t("replay")
          })
        })
      },
      p = () => {
        const b = e.scrollable === !1 && !e.wrapable,
          w = {
            transform: c.offset ? `translateX(${c.offset}px)` : "",
            transitionDuration: `${c.duration}s`
          };
        return h("div", {
          ref: l,
          role: "marquee",
          class: Ai("wrap")
        }, [h("div", {
          ref: r,
          style: w,
          class: [Ai("content"), {
            "van-ellipsis": b
          }],
          onTransitionend: g
        }, [n.default ? n.default() : e.text])])
      },
      y = () => {
        const {
          delay: b,
          speed: w,
          scrollable: v
        } = e, C = Fe(b) ? +b * 1e3 : 0;
        o = 0, s = 0, c.offset = 0, c.duration = 0, clearTimeout(a), a = setTimeout(() => {
          if (!l.value || !r.value || v === !1) return;
          const _ = Ue(l).width,
            k = Ue(r).width;
          (v || k > _) && so(() => {
            o = _, s = k, c.offset = -s, c.duration = s / +w
          })
        }, C)
      };
    return Ca(y), yi(y), st("pageshow", y), $e({
      reset: y
    }), re(() => [e.text, e.scrollable], y), () => {
      const {
        color: b,
        wrapable: w,
        background: v
      } = e;
      return rt(h("div", {
        role: "alert",
        class: Ai({
          wrapable: w
        }),
        style: {
          color: b,
          background: v
        }
      }, [u(), p(), m()]), [
        [dt, c.show]
      ])
    }
  }
});
const jC = ee(WC),
  [QC, KC] = Y("notify"),
  YC = ["lockScroll", "position", "show", "teleport", "zIndex"],
  qC = ke({}, bi, {
    type: te("danger"),
    color: String,
    message: Z,
    position: te("top"),
    className: et,
    background: String,
    lockScroll: Boolean
  });
var Qh = K({
  name: QC,
  props: qC,
  emits: ["update:show"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = s => t("update:show", s);
    return () => h(cn, De({
      class: [KC([e.type]), e.className],
      style: {
        color: e.color,
        background: e.background
      },
      overlay: !1,
      duration: .2,
      "onUpdate:show": o
    }, Ve(e, YC)), {
      default: () => [n.default ? n.default() : e.message]
    })
  }
});
let Au, ai;
const GC = e => wn(e) ? e : {
  message: e
};

function ZC() {
  ({
    instance: ai
  } = Br({
    setup() {
      const {
        state: e,
        toggle: t
      } = Or();
      return () => h(Qh, De(e, {
        "onUpdate:show": t
      }), null)
    }
  }))
}
const XC = () => ({
  type: "danger",
  color: void 0,
  message: "",
  onClose: void 0,
  onClick: void 0,
  onOpened: void 0,
  duration: 3e3,
  position: void 0,
  className: "",
  lockScroll: !1,
  background: void 0
});
let JC = XC();
const e_ = () => {
  ai && ai.toggle(!1)
};

function uo(e) {
  if (zt) return ai || ZC(), e = ke({}, JC, GC(e)), ai.open(e), clearTimeout(Au), e.duration > 0 && (Au = setTimeout(e_, e.duration)), ai
}
const t_ = ee(Qh),
  [n_, Hi] = Y("key"),
  o_ = h("svg", {
    class: Hi("collapse-icon"),
    viewBox: "0 0 30 24"
  }, [h("path", {
    d: "M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",
    fill: "currentColor"
  }, null)]),
  i_ = h("svg", {
    class: Hi("delete-icon"),
    viewBox: "0 0 32 22"
  }, [h("path", {
    d: "M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",
    fill: "currentColor"
  }, null)]);
var ll = K({
  name: n_,
  props: {
    type: String,
    text: Z,
    color: String,
    wider: Boolean,
    large: Boolean,
    loading: Boolean
  },
  emits: ["press"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(!1),
      s = Kt(),
      a = u => {
        s.start(u), o.value = !0
      },
      l = u => {
        s.move(u), s.direction.value && (o.value = !1)
      },
      r = u => {
        o.value && (n.default || Ge(u), o.value = !1, t("press", e.text, e.type))
      },
      c = () => {
        if (e.loading) return h(rn, {
          class: Hi("loading-icon")
        }, null);
        const u = n.default ? n.default() : e.text;
        switch (e.type) {
          case "delete":
            return u || i_;
          case "extra":
            return u || o_;
          default:
            return u
        }
      };
    return () => h("div", {
      class: Hi("wrapper", {
        wider: e.wider
      }),
      onTouchstartPassive: a,
      onTouchmovePassive: l,
      onTouchend: r,
      onTouchcancel: r
    }, [h("div", {
      role: "button",
      tabindex: 0,
      class: Hi([e.color, {
        large: e.large,
        active: o.value,
        delete: e.type === "delete"
      }])
    }, [c()])])
  }
});
const [s_, Gn] = Y("number-keyboard"), a_ = {
  show: Boolean,
  title: String,
  theme: te("default"),
  zIndex: Z,
  teleport: [String, Object],
  maxlength: ge(1 / 0),
  modelValue: te(""),
  transition: j,
  blurOnClose: j,
  showDeleteKey: j,
  randomKeyOrder: Boolean,
  closeButtonText: String,
  deleteButtonText: String,
  closeButtonLoading: Boolean,
  hideOnClickOutside: j,
  safeAreaInsetBottom: j,
  extraKey: {
    type: [String, Array],
    default: ""
  }
};

function l_(e) {
  for (let t = e.length - 1; t > 0; t--) {
    const n = Math.floor(Math.random() * (t + 1)),
      o = e[t];
    e[t] = e[n], e[n] = o
  }
  return e
}
var r_ = K({
  name: s_,
  inheritAttrs: !1,
  props: a_,
  emits: ["show", "hide", "blur", "input", "close", "delete", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n,
    attrs: o
  }) {
    const s = F(),
      a = () => {
        const b = Array(9).fill("").map((w, v) => ({
          text: v + 1
        }));
        return e.randomKeyOrder && l_(b), b
      },
      l = () => [...a(), {
        text: e.extraKey,
        type: "extra"
      }, {
        text: 0
      }, {
        text: e.showDeleteKey ? e.deleteButtonText : "",
        type: e.showDeleteKey ? "delete" : ""
      }],
      r = () => {
        const b = a(),
          {
            extraKey: w
          } = e,
          v = Array.isArray(w) ? w : [w];
        return v.length === 0 ? b.push({
          text: 0,
          wider: !0
        }) : v.length === 1 ? b.push({
          text: 0,
          wider: !0
        }, {
          text: v[0],
          type: "extra"
        }) : v.length === 2 && b.push({
          text: v[0],
          type: "extra"
        }, {
          text: 0
        }, {
          text: v[1],
          type: "extra"
        }), b
      },
      c = N(() => e.theme === "custom" ? r() : l()),
      u = () => {
        e.show && t("blur")
      },
      d = () => {
        t("close"), e.blurOnClose && u()
      },
      f = () => t(e.show ? "show" : "hide"),
      m = (b, w) => {
        if (b === "") {
          w === "extra" && u();
          return
        }
        const v = e.modelValue;
        w === "delete" ? (t("delete"), t("update:modelValue", v.slice(0, v.length - 1))) : w === "close" ? d() : v.length < +e.maxlength && (t("input", b), t("update:modelValue", v + b))
      },
      g = () => {
        const {
          title: b,
          theme: w,
          closeButtonText: v
        } = e, C = n["title-left"], _ = v && w === "default";
        if (b || _ || C) return h("div", {
          class: Gn("header")
        }, [C && h("span", {
          class: Gn("title-left")
        }, [C()]), b && h("h2", {
          class: Gn("title")
        }, [b]), _ && h("button", {
          type: "button",
          class: [Gn("close"), St],
          onClick: d
        }, [v])])
      },
      p = () => c.value.map(b => {
        const w = {};
        return b.type === "delete" && (w.default = n.delete), b.type === "extra" && (w.default = n["extra-key"]), h(ll, {
          key: b.text,
          text: b.text,
          type: b.type,
          wider: b.wider,
          color: b.color,
          onPress: m
        }, w)
      }),
      y = () => {
        if (e.theme === "custom") return h("div", {
          class: Gn("sidebar")
        }, [e.showDeleteKey && h(ll, {
          large: !0,
          text: e.deleteButtonText,
          type: "delete",
          onPress: m
        }, {
          default: n.delete
        }), h(ll, {
          large: !0,
          text: e.closeButtonText,
          type: "close",
          color: "blue",
          loading: e.closeButtonLoading,
          onPress: m
        }, null)])
      };
    return re(() => e.show, b => {
      e.transition || t(b ? "show" : "hide")
    }), e.hideOnClickOutside && ba(s, u, {
      eventName: "touchstart"
    }), () => {
      const b = g(),
        w = h(ya, {
          name: e.transition ? "van-slide-up" : ""
        }, {
          default: () => [rt(h("div", De({
            ref: s,
            style: Un(e.zIndex),
            class: Gn({
              unfit: !e.safeAreaInsetBottom,
              "with-title": !!b
            }),
            onAnimationend: f,
            onTouchstartPassive: wr
          }, o), [b, h("div", {
            class: Gn("body")
          }, [h("div", {
            class: Gn("keys")
          }, [p()]), y()])]), [
            [dt, e.show]
          ])]
        });
      return e.teleport ? h($o, {
        to: e.teleport
      }, {
        default: () => [w]
      }) : w
    }
  }
});
const c_ = ee(r_),
  [u_, qo, Eu] = Y("pagination"),
  rl = (e, t, n) => ({
    number: e,
    text: t,
    active: n
  }),
  d_ = {
    mode: te("multi"),
    prevText: String,
    nextText: String,
    pageCount: ge(0),
    modelValue: lt(0),
    totalItems: ge(0),
    showPageSize: ge(5),
    itemsPerPage: ge(10),
    forceEllipses: Boolean,
    showPrevButton: j,
    showNextButton: j
  };
var f_ = K({
  name: u_,
  props: d_,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = N(() => {
        const {
          pageCount: d,
          totalItems: f,
          itemsPerPage: m
        } = e, g = +d || Math.ceil(+f / +m);
        return Math.max(1, g)
      }),
      s = N(() => {
        const d = [],
          f = o.value,
          m = +e.showPageSize,
          {
            modelValue: g,
            forceEllipses: p
          } = e;
        let y = 1,
          b = f;
        const w = m < f;
        w && (y = Math.max(g - Math.floor(m / 2), 1), b = y + m - 1, b > f && (b = f, y = b - m + 1));
        for (let v = y; v <= b; v++) {
          const C = rl(v, v, v === g);
          d.push(C)
        }
        if (w && m > 0 && p) {
          if (y > 1) {
            const v = rl(y - 1, "...");
            d.unshift(v)
          }
          if (b < f) {
            const v = rl(b + 1, "...");
            d.push(v)
          }
        }
        return d
      }),
      a = (d, f) => {
        d = ht(d, 1, o.value), e.modelValue !== d && (t("update:modelValue", d), f && t("change", d))
      };
    vi(() => a(e.modelValue));
    const l = () => h("li", {
        class: qo("page-desc")
      }, [n.pageDesc ? n.pageDesc() : `${e.modelValue}/${o.value}`]),
      r = () => {
        const {
          mode: d,
          modelValue: f,
          showPrevButton: m
        } = e;
        if (!m) return;
        const g = n["prev-text"],
          p = f === 1;
        return h("li", {
          class: [qo("item", {
            disabled: p,
            border: d === "simple",
            prev: !0
          }), zi]
        }, [h("button", {
          type: "button",
          disabled: p,
          onClick: () => a(f - 1, !0)
        }, [g ? g() : e.prevText || Eu("prev")])])
      },
      c = () => {
        const {
          mode: d,
          modelValue: f,
          showNextButton: m
        } = e;
        if (!m) return;
        const g = n["next-text"],
          p = f === o.value;
        return h("li", {
          class: [qo("item", {
            disabled: p,
            border: d === "simple",
            next: !0
          }), zi]
        }, [h("button", {
          type: "button",
          disabled: p,
          onClick: () => a(f + 1, !0)
        }, [g ? g() : e.nextText || Eu("next")])])
      },
      u = () => s.value.map(d => h("li", {
        class: [qo("item", {
          active: d.active,
          page: !0
        }), zi]
      }, [h("button", {
        type: "button",
        "aria-current": d.active || void 0,
        onClick: () => a(d.number, !0)
      }, [n.page ? n.page(d) : d.text])]));
    return () => h("nav", {
      role: "navigation",
      class: qo()
    }, [h("ul", {
      class: qo("items")
    }, [r(), e.mode === "simple" ? l() : u(), c()])])
  }
});
const h_ = ee(f_),
  [m_, Ei] = Y("password-input"),
  g_ = {
    info: String,
    mask: j,
    value: te(""),
    gutter: Z,
    length: ge(6),
    focused: Boolean,
    errorInfo: String
  };
var v_ = K({
  name: m_,
  props: g_,
  emits: ["focus"],
  setup(e, {
    emit: t
  }) {
    const n = s => {
        s.stopPropagation(), t("focus", s)
      },
      o = () => {
        const s = [],
          {
            mask: a,
            value: l,
            gutter: r,
            focused: c
          } = e,
          u = +e.length;
        for (let d = 0; d < u; d++) {
          const f = l[d],
            m = d !== 0 && !r,
            g = c && d === l.length;
          let p;
          d !== 0 && r && (p = {
            marginLeft: Ie(r)
          }), s.push(h("li", {
            class: [{
              [jf]: m
            }, Ei("item", {
              focus: g
            })],
            style: p
          }, [a ? h("i", {
            style: {
              visibility: f ? "visible" : "hidden"
            }
          }, null) : f, g && h("div", {
            class: Ei("cursor")
          }, null)]))
        }
        return s
      };
    return () => {
      const s = e.errorInfo || e.info;
      return h("div", {
        class: Ei()
      }, [h("ul", {
        class: [Ei("security"), {
          [zi]: !e.gutter
        }],
        onTouchstartPassive: n
      }, [o()]), s && h("div", {
        class: Ei(e.errorInfo ? "error-info" : "info")
      }, [s])])
    }
  }
});
const y_ = ee(v_),
  p_ = ee(_0);

function dn(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window
  }
  return e
}

function zr(e) {
  var t = dn(e).Element;
  return e instanceof t || e instanceof Element
}

function nn(e) {
  var t = dn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement
}

function Kh(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = dn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot
}
var fi = Math.round;

function Wl() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version
  }).join(" ") : navigator.userAgent
}

function b_() {
  return !/^((?!chrome|android).)*safari/i.test(Wl())
}

function ea(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(),
    s = 1,
    a = 1;
  t && nn(e) && (s = e.offsetWidth > 0 && fi(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && fi(o.height) / e.offsetHeight || 1);
  var l = zr(e) ? dn(e) : window,
    r = l.visualViewport,
    c = !b_() && n,
    u = (o.left + (c && r ? r.offsetLeft : 0)) / s,
    d = (o.top + (c && r ? r.offsetTop : 0)) / a,
    f = o.width / s,
    m = o.height / a;
  return {
    width: f,
    height: m,
    top: d,
    right: u + f,
    bottom: d + m,
    left: u,
    x: u,
    y: d
  }
}

function Yh(e) {
  var t = dn(e),
    n = t.pageXOffset,
    o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  }
}

function w_(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  }
}

function C_(e) {
  return e === dn(e) || !nn(e) ? Yh(e) : w_(e)
}

function Nn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null
}

function Pa(e) {
  return ((zr(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function __(e) {
  return ea(Pa(e)).left + Yh(e).scrollLeft
}

function Fn(e) {
  return dn(e).getComputedStyle(e)
}

function Vr(e) {
  var t = Fn(e),
    n = t.overflow,
    o = t.overflowX,
    s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + o)
}

function k_(e) {
  var t = e.getBoundingClientRect(),
    n = fi(t.width) / e.offsetWidth || 1,
    o = fi(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1
}

function S_(e, t, n) {
  n === void 0 && (n = !1);
  var o = nn(t),
    s = nn(t) && k_(t),
    a = Pa(t),
    l = ea(e, s, n),
    r = {
      scrollLeft: 0,
      scrollTop: 0
    },
    c = {
      x: 0,
      y: 0
    };
  return (o || !o && !n) && ((Nn(t) !== "body" || Vr(a)) && (r = C_(t)), nn(t) ? (c = ea(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = __(a))), {
    x: l.left + r.scrollLeft - c.x,
    y: l.top + r.scrollTop - c.y,
    width: l.width,
    height: l.height
  }
}

function T_(e) {
  var t = ea(e),
    n = e.offsetWidth,
    o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  }
}

function Hr(e) {
  return Nn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Kh(e) ? e.host : null) || Pa(e)
}

function qh(e) {
  return ["html", "body", "#document"].indexOf(Nn(e)) >= 0 ? e.ownerDocument.body : nn(e) && Vr(e) ? e : qh(Hr(e))
}

function Hs(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = qh(e),
    s = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
    a = dn(o),
    l = s ? [a].concat(a.visualViewport || [], Vr(o) ? o : []) : o,
    r = t.concat(l);
  return s ? r : r.concat(Hs(Hr(l)))
}

function x_(e) {
  return ["table", "td", "th"].indexOf(Nn(e)) >= 0
}

function Iu(e) {
  return !nn(e) || Fn(e).position === "fixed" ? null : e.offsetParent
}

function A_(e) {
  var t = /firefox/i.test(Wl()),
    n = /Trident/i.test(Wl());
  if (n && nn(e)) {
    var o = Fn(e);
    if (o.position === "fixed") return null
  }
  var s = Hr(e);
  for (Kh(s) && (s = s.host); nn(s) && ["html", "body"].indexOf(Nn(s)) < 0;) {
    var a = Fn(s);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return s;
    s = s.parentNode
  }
  return null
}

function Gh(e) {
  for (var t = dn(e), n = Iu(e); n && x_(n) && Fn(n).position === "static";) n = Iu(n);
  return n && (Nn(n) === "html" || Nn(n) === "body" && Fn(n).position === "static") ? t : n || A_(e) || t
}
var li = "top",
  ta = "bottom",
  ts = "right",
  Bo = "left",
  Zh = "auto",
  E_ = [li, ta, ts, Bo],
  Xh = "start",
  na = "end",
  I_ = [].concat(E_, [Zh]).reduce(function(e, t) {
    return e.concat([t, t + "-" + Xh, t + "-" + na])
  }, []),
  P_ = "beforeRead",
  O_ = "read",
  B_ = "afterRead",
  R_ = "beforeMain",
  D_ = "main",
  $_ = "afterMain",
  M_ = "beforeWrite",
  L_ = "write",
  N_ = "afterWrite",
  jl = [P_, O_, B_, R_, D_, $_, M_, L_, N_];

function F_(e) {
  var t = new Map,
    n = new Set,
    o = [];
  e.forEach(function(a) {
    t.set(a.name, a)
  });

  function s(a) {
    n.add(a.name);
    var l = [].concat(a.requires || [], a.requiresIfExists || []);
    l.forEach(function(r) {
      if (!n.has(r)) {
        var c = t.get(r);
        c && s(c)
      }
    }), o.push(a)
  }
  return e.forEach(function(a) {
    n.has(a.name) || s(a)
  }), o
}

function z_(e) {
  var t = F_(e);
  return jl.reduce(function(n, o) {
    return n.concat(t.filter(function(s) {
      return s.phase === o
    }))
  }, [])
}

function V_(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e())
      })
    })), t
  }
}

function Zn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
  return [].concat(n).reduce(function(s, a) {
    return s.replace(/%s/, a)
  }, e)
}
var So = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
  H_ = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
  Pu = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];

function U_(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Pu).filter(function(n, o, s) {
      return s.indexOf(n) === o
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(Zn(So, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Zn(So, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          jl.indexOf(t.phase) < 0 && console.error(Zn(So, t.name, '"phase"', "either " + jl.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Zn(So, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Zn(So, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Zn(So, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Zn(So, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Pu.map(function(o) {
            return '"' + o + '"'
          }).join(", ") + '; but "' + n + '" was provided.')
      }
      t.requires && t.requires.forEach(function(o) {
        e.find(function(s) {
          return s.name === o
        }) == null && console.error(Zn(H_, String(t.name), o, o))
      })
    })
  })
}

function W_(e, t) {
  var n = new Set;
  return e.filter(function(o) {
    var s = t(o);
    if (!n.has(s)) return n.add(s), !0
  })
}

function Oa(e) {
  return e.split("-")[0]
}

function j_(e) {
  var t = e.reduce(function(n, o) {
    var s = n[o.name];
    return n[o.name] = s ? Object.assign({}, s, o, {
      options: Object.assign({}, s.options, o.options),
      data: Object.assign({}, s.data, o.data)
    }) : o, n
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n]
  })
}

function Jh(e) {
  return e.split("-")[1]
}

function Q_(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function K_(e) {
  var t = e.reference,
    n = e.element,
    o = e.placement,
    s = o ? Oa(o) : null,
    a = o ? Jh(o) : null,
    l = t.x + t.width / 2 - n.width / 2,
    r = t.y + t.height / 2 - n.height / 2,
    c;
  switch (s) {
    case li:
      c = {
        x: l,
        y: t.y - n.height
      };
      break;
    case ta:
      c = {
        x: l,
        y: t.y + t.height
      };
      break;
    case ts:
      c = {
        x: t.x + t.width,
        y: r
      };
      break;
    case Bo:
      c = {
        x: t.x - n.width,
        y: r
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      }
  }
  var u = s ? Q_(s) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Xh:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case na:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break
    }
  }
  return c
}
var Ou = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",
  Y_ = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",
  Bu = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

function Ru() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function")
  })
}

function q_(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    o = n === void 0 ? [] : n,
    s = t.defaultOptions,
    a = s === void 0 ? Bu : s;
  return function(r, c, u) {
    u === void 0 && (u = a);
    var d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Bu, a),
        modifiersData: {},
        elements: {
          reference: r,
          popper: c
        },
        attributes: {},
        styles: {}
      },
      f = [],
      m = !1,
      g = {
        state: d,
        setOptions: function(w) {
          var v = typeof w == "function" ? w(d.options) : w;
          y(), d.options = Object.assign({}, a, d.options, v), d.scrollParents = {
            reference: zr(r) ? Hs(r) : r.contextElement ? Hs(r.contextElement) : [],
            popper: Hs(c)
          };
          var C = z_(j_([].concat(o, d.options.modifiers)));
          d.orderedModifiers = C.filter(function(x) {
            return x.enabled
          });
          {
            var _ = W_([].concat(C, d.options.modifiers), function(x) {
              var P = x.name;
              return P
            });
            if (U_(_), Oa(d.options.placement) === Zh) {
              var k = d.orderedModifiers.find(function(x) {
                var P = x.name;
                return P === "flip"
              });
              k || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "))
            }
            var I = Fn(c),
              D = I.marginTop,
              S = I.marginRight,
              B = I.marginBottom,
              R = I.marginLeft;
            [D, S, B, R].some(function(x) {
              return parseFloat(x)
            }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "))
          }
          return p(), g.update()
        },
        forceUpdate: function() {
          if (!m) {
            var w = d.elements,
              v = w.reference,
              C = w.popper;
            if (!Ru(v, C)) {
              console.error(Ou);
              return
            }
            d.rects = {
              reference: S_(v, Gh(C), d.options.strategy === "fixed"),
              popper: T_(C)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(x) {
              return d.modifiersData[x.name] = Object.assign({}, x.data)
            });
            for (var _ = 0, k = 0; k < d.orderedModifiers.length; k++) {
              if (_ += 1, _ > 100) {
                console.error(Y_);
                break
              }
              if (d.reset === !0) {
                d.reset = !1, k = -1;
                continue
              }
              var I = d.orderedModifiers[k],
                D = I.fn,
                S = I.options,
                B = S === void 0 ? {} : S,
                R = I.name;
              typeof D == "function" && (d = D({
                state: d,
                options: B,
                name: R,
                instance: g
              }) || d)
            }
          }
        },
        update: V_(function() {
          return new Promise(function(b) {
            g.forceUpdate(), b(d)
          })
        }),
        destroy: function() {
          y(), m = !0
        }
      };
    if (!Ru(r, c)) return console.error(Ou), g;
    g.setOptions(u).then(function(b) {
      !m && u.onFirstUpdate && u.onFirstUpdate(b)
    });

    function p() {
      d.orderedModifiers.forEach(function(b) {
        var w = b.name,
          v = b.options,
          C = v === void 0 ? {} : v,
          _ = b.effect;
        if (typeof _ == "function") {
          var k = _({
              state: d,
              name: w,
              instance: g,
              options: C
            }),
            I = function() {};
          f.push(k || I)
        }
      })
    }

    function y() {
      f.forEach(function(b) {
        return b()
      }), f = []
    }
    return g
  }
}
var Bs = {
  passive: !0
};

function G_(e) {
  var t = e.state,
    n = e.instance,
    o = e.options,
    s = o.scroll,
    a = s === void 0 ? !0 : s,
    l = o.resize,
    r = l === void 0 ? !0 : l,
    c = dn(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
      d.addEventListener("scroll", n.update, Bs)
    }), r && c.addEventListener("resize", n.update, Bs),
    function() {
      a && u.forEach(function(d) {
        d.removeEventListener("scroll", n.update, Bs)
      }), r && c.removeEventListener("resize", n.update, Bs)
    }
}
var Z_ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {},
  effect: G_,
  data: {}
};

function X_(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = K_({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  })
}
var J_ = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: X_,
    data: {}
  },
  ek = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

function tk(e) {
  var t = e.x,
    n = e.y,
    o = window,
    s = o.devicePixelRatio || 1;
  return {
    x: fi(t * s) / s || 0,
    y: fi(n * s) / s || 0
  }
}

function Du(e) {
  var t, n = e.popper,
    o = e.popperRect,
    s = e.placement,
    a = e.variation,
    l = e.offsets,
    r = e.position,
    c = e.gpuAcceleration,
    u = e.adaptive,
    d = e.roundOffsets,
    f = e.isFixed,
    m = l.x,
    g = m === void 0 ? 0 : m,
    p = l.y,
    y = p === void 0 ? 0 : p,
    b = typeof d == "function" ? d({
      x: g,
      y
    }) : {
      x: g,
      y
    };
  g = b.x, y = b.y;
  var w = l.hasOwnProperty("x"),
    v = l.hasOwnProperty("y"),
    C = Bo,
    _ = li,
    k = window;
  if (u) {
    var I = Gh(n),
      D = "clientHeight",
      S = "clientWidth";
    if (I === dn(n) && (I = Pa(n), Fn(I).position !== "static" && r === "absolute" && (D = "scrollHeight", S = "scrollWidth")), I = I, s === li || (s === Bo || s === ts) && a === na) {
      _ = ta;
      var B = f && I === k && k.visualViewport ? k.visualViewport.height : I[D];
      y -= B - o.height, y *= c ? 1 : -1
    }
    if (s === Bo || (s === li || s === ta) && a === na) {
      C = ts;
      var R = f && I === k && k.visualViewport ? k.visualViewport.width : I[S];
      g -= R - o.width, g *= c ? 1 : -1
    }
  }
  var x = Object.assign({
      position: r
    }, u && ek),
    P = d === !0 ? tk({
      x: g,
      y
    }) : {
      x: g,
      y
    };
  if (g = P.x, y = P.y, c) {
    var M;
    return Object.assign({}, x, (M = {}, M[_] = v ? "0" : "", M[C] = w ? "0" : "", M.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + y + "px)" : "translate3d(" + g + "px, " + y + "px, 0)", M))
  }
  return Object.assign({}, x, (t = {}, t[_] = v ? y + "px" : "", t[C] = w ? g + "px" : "", t.transform = "", t))
}

function nk(e) {
  var t = e.state,
    n = e.options,
    o = n.gpuAcceleration,
    s = o === void 0 ? !0 : o,
    a = n.adaptive,
    l = a === void 0 ? !0 : a,
    r = n.roundOffsets,
    c = r === void 0 ? !0 : r;
  {
    var u = Fn(t.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "))
  }
  var d = {
    placement: Oa(t.placement),
    variation: Jh(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Du(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Du(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  })
}
var ok = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: nk,
  data: {}
};

function ik(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {},
      s = t.attributes[n] || {},
      a = t.elements[n];
    !nn(a) || !Nn(a) || (Object.assign(a.style, o), Object.keys(s).forEach(function(l) {
      var r = s[l];
      r === !1 ? a.removeAttribute(l) : a.setAttribute(l, r === !0 ? "" : r)
    }))
  })
}

function sk(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function() {
      Object.keys(t.elements).forEach(function(o) {
        var s = t.elements[o],
          a = t.attributes[o] || {},
          l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]),
          r = l.reduce(function(c, u) {
            return c[u] = "", c
          }, {});
        !nn(s) || !Nn(s) || (Object.assign(s.style, r), Object.keys(a).forEach(function(c) {
          s.removeAttribute(c)
        }))
      })
    }
}
var ak = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: ik,
    effect: sk,
    requires: ["computeStyles"]
  },
  lk = [Z_, J_, ok, ak],
  rk = q_({
    defaultModifiers: lk
  });

function ck(e, t, n) {
  var o = Oa(e),
    s = [Bo, li].indexOf(o) >= 0 ? -1 : 1,
    a = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n,
    l = a[0],
    r = a[1];
  return l = l || 0, r = (r || 0) * s, [Bo, ts].indexOf(o) >= 0 ? {
    x: r,
    y: l
  } : {
    x: l,
    y: r
  }
}

function uk(e) {
  var t = e.state,
    n = e.options,
    o = e.name,
    s = n.offset,
    a = s === void 0 ? [0, 0] : s,
    l = I_.reduce(function(d, f) {
      return d[f] = ck(f, t.rects, a), d
    }, {}),
    r = l[t.placement],
    c = r.x,
    u = r.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = l
}
var dk = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: uk
};
const [fk, To] = Y("popover"), hk = ["overlay", "duration", "teleport", "overlayStyle", "overlayClass", "closeOnClickOverlay"], mk = {
  show: Boolean,
  theme: te("light"),
  overlay: Boolean,
  actions: Xe(),
  actionsDirection: te("vertical"),
  trigger: te("click"),
  duration: Z,
  showArrow: j,
  placement: te("bottom"),
  iconPrefix: String,
  overlayClass: et,
  overlayStyle: Object,
  closeOnClickAction: j,
  closeOnClickOverlay: j,
  closeOnClickOutside: j,
  offset: {
    type: Array,
    default: () => [0, 8]
  },
  teleport: {
    type: [String, Object],
    default: "body"
  }
};
var gk = K({
  name: fk,
  props: mk,
  emits: ["select", "touchstart", "update:show"],
  setup(e, {
    emit: t,
    slots: n,
    attrs: o
  }) {
    let s;
    const a = F(),
      l = F(),
      r = F(),
      c = xr(() => e.show, v => t("update:show", v)),
      u = () => ({
        placement: e.placement,
        modifiers: [{
          name: "computeStyles",
          options: {
            adaptive: !1,
            gpuAcceleration: !1
          }
        }, ke({}, dk, {
          options: {
            offset: e.offset
          }
        })]
      }),
      d = () => l.value && r.value ? rk(l.value, r.value.popupRef.value, u()) : null,
      f = () => {
        Oe(() => {
          c.value && (s ? s.setOptions(u()) : (s = d(), zt && (window.addEventListener("animationend", f), window.addEventListener("transitionend", f))))
        })
      },
      m = v => {
        c.value = v
      },
      g = () => {
        e.trigger === "click" && (c.value = !c.value)
      },
      p = (v, C) => {
        v.disabled || (t("select", v, C), e.closeOnClickAction && (c.value = !1))
      },
      y = () => {
        c.value && e.closeOnClickOutside && (!e.overlay || e.closeOnClickOverlay) && (c.value = !1)
      },
      b = (v, C) => n.action ? n.action({
        action: v,
        index: C
      }) : [v.icon && h(Pe, {
        name: v.icon,
        classPrefix: e.iconPrefix,
        class: To("action-icon")
      }, null), h("div", {
        class: [To("action-text"), {
          [_r]: e.actionsDirection === "vertical"
        }]
      }, [v.text])],
      w = (v, C) => {
        const {
          icon: _,
          color: k,
          disabled: I,
          className: D
        } = v;
        return h("div", {
          role: "menuitem",
          class: [To("action", {
            disabled: I,
            "with-icon": _
          }), {
            [Gy]: e.actionsDirection === "horizontal"
          }, D],
          style: {
            color: k
          },
          tabindex: I ? void 0 : 0,
          "aria-disabled": I || void 0,
          onClick: () => p(v, C)
        }, [b(v, C)])
      };
    return at(() => {
      f(), vi(() => {
        var v;
        a.value = (v = r.value) == null ? void 0 : v.popupRef.value
      })
    }), kn(() => {
      s && (zt && (window.removeEventListener("animationend", f), window.removeEventListener("transitionend", f)), s.destroy(), s = null)
    }), re(() => [c.value, e.offset, e.placement], f), ba([l, a], y, {
      eventName: "touchstart"
    }), () => {
      var v;
      return h(Be, null, [h("span", {
        ref: l,
        class: To("wrapper"),
        onClick: g
      }, [(v = n.reference) == null ? void 0 : v.call(n)]), h(cn, De({
        ref: r,
        show: c.value,
        class: To([e.theme]),
        position: "",
        transition: "van-popover-zoom",
        lockScroll: !1,
        "onUpdate:show": m
      }, o, Js(), Ve(e, hk)), {
        default: () => [e.showArrow && h("div", {
          class: To("arrow")
        }, null), h("div", {
          role: "menu",
          class: To("content", e.actionsDirection)
        }, [n.default ? n.default() : e.actions.map(w)])]
      })])
    }
  }
});
const vk = ee(gk),
  [yk, cl] = Y("progress"),
  pk = {
    color: String,
    inactive: Boolean,
    pivotText: String,
    textColor: String,
    showPivot: j,
    pivotColor: String,
    trackColor: String,
    strokeWidth: Z,
    percentage: {
      type: Z,
      default: 0,
      validator: e => +e >= 0 && +e <= 100
    }
  };
var bk = K({
  name: yk,
  props: pk,
  setup(e) {
    const t = N(() => e.inactive ? void 0 : e.color),
      n = () => {
        const {
          textColor: o,
          pivotText: s,
          pivotColor: a,
          percentage: l
        } = e, r = s ?? `${l}%`;
        if (e.showPivot && r) {
          const c = {
            color: o,
            left: `${+l}%`,
            transform: `translate(-${+l}%,-50%)`,
            background: a || t.value
          };
          return h("span", {
            style: c,
            class: cl("pivot", {
              inactive: e.inactive
            })
          }, [r])
        }
      };
    return () => {
      const {
        trackColor: o,
        percentage: s,
        strokeWidth: a
      } = e, l = {
        background: o,
        height: Ie(a)
      }, r = {
        width: `${s}%`,
        background: t.value
      };
      return h("div", {
        class: cl(),
        style: l
      }, [h("span", {
        class: cl("portion", {
          inactive: e.inactive
        }),
        style: r
      }, null), n()])
    }
  }
});
const wk = ee(bk),
  [Ck, Ii, _k] = Y("pull-refresh"),
  em = 50,
  kk = ["pulling", "loosing", "success"],
  Sk = {
    disabled: Boolean,
    modelValue: Boolean,
    headHeight: ge(em),
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    pullDistance: Z,
    successDuration: ge(500),
    animationDuration: ge(300)
  };
var Tk = K({
  name: Ck,
  props: Sk,
  emits: ["change", "refresh", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o;
    const s = F(),
      a = F(),
      l = pi(s),
      r = Ze({
        status: "normal",
        distance: 0,
        duration: 0
      }),
      c = Kt(),
      u = () => {
        if (e.headHeight !== em) return {
          height: `${e.headHeight}px`
        }
      },
      d = () => r.status !== "loading" && r.status !== "success" && !e.disabled,
      f = _ => {
        const k = +(e.pullDistance || e.headHeight);
        return _ > k && (_ < k * 2 ? _ = k + (_ - k) / 2 : _ = k * 1.5 + (_ - k * 2) / 4), Math.round(_)
      },
      m = (_, k) => {
        const I = +(e.pullDistance || e.headHeight);
        r.distance = _, k ? r.status = "loading" : _ === 0 ? r.status = "normal" : _ < I ? r.status = "pulling" : r.status = "loosing", t("change", {
          status: r.status,
          distance: _
        })
      },
      g = () => {
        const {
          status: _
        } = r;
        return _ === "normal" ? "" : e[`${_}Text`] || _k(_)
      },
      p = () => {
        const {
          status: _,
          distance: k
        } = r;
        if (n[_]) return n[_]({
          distance: k
        });
        const I = [];
        return kk.includes(_) && I.push(h("div", {
          class: Ii("text")
        }, [g()])), _ === "loading" && I.push(h(rn, {
          class: Ii("loading")
        }, {
          default: g
        })), I
      },
      y = () => {
        r.status = "success", setTimeout(() => {
          m(0)
        }, +e.successDuration)
      },
      b = _ => {
        o = Ln(l.value) === 0, o && (r.duration = 0, c.start(_))
      },
      w = _ => {
        d() && b(_)
      },
      v = _ => {
        if (d()) {
          o || b(_);
          const {
            deltaY: k
          } = c;
          c.move(_), o && k.value >= 0 && c.isVertical() && (Ge(_), m(f(k.value)))
        }
      },
      C = () => {
        o && c.deltaY.value && d() && (r.duration = +e.animationDuration, r.status === "loosing" ? (m(+e.headHeight, !0), t("update:modelValue", !0), Oe(() => t("refresh"))) : m(0))
      };
    return re(() => e.modelValue, _ => {
      r.duration = +e.animationDuration, _ ? m(+e.headHeight, !0) : n.success || e.successText ? y() : m(0, !1)
    }), st("touchmove", v, {
      target: a
    }), () => {
      var _;
      const k = {
        transitionDuration: `${r.duration}ms`,
        transform: r.distance ? `translate3d(0,${r.distance}px, 0)` : ""
      };
      return h("div", {
        ref: s,
        class: Ii()
      }, [h("div", {
        ref: a,
        class: Ii("track"),
        style: k,
        onTouchstartPassive: w,
        onTouchend: C,
        onTouchcancel: C
      }, [h("div", {
        class: Ii("head"),
        style: u()
      }, [p()]), (_ = n.default) == null ? void 0 : _.call(n)])])
    }
  }
});
const xk = ee(Tk),
  [Ak, Rs] = Y("rate");

function Ek(e, t, n, o) {
  return e >= t ? {
    status: "full",
    value: 1
  } : e + .5 >= t && n && !o ? {
    status: "half",
    value: .5
  } : e + 1 >= t && n && o ? {
    status: "half",
    value: Math.round((e - t + 1) * 1e10) / 1e10
  } : {
    status: "void",
    value: 0
  }
}
const Ik = {
  size: Z,
  icon: te("star"),
  color: String,
  count: ge(5),
  gutter: Z,
  clearable: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  voidIcon: te("star-o"),
  allowHalf: Boolean,
  voidColor: String,
  touchable: j,
  iconPrefix: String,
  modelValue: lt(0),
  disabledColor: String
};
var Pk = K({
  name: Ak,
  props: Ik,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t
  }) {
    const n = Kt(),
      [o, s] = ls(),
      a = F(),
      l = N(() => e.readonly || e.disabled),
      r = N(() => l.value || !e.touchable),
      c = N(() => Array(+e.count).fill("").map((C, _) => Ek(e.modelValue, _ + 1, e.allowHalf, e.readonly)));
    let u, d, f = Number.MAX_SAFE_INTEGER,
      m = Number.MIN_SAFE_INTEGER;
    const g = () => {
        d = Ue(a);
        const C = o.value.map(Ue);
        u = [], C.forEach((_, k) => {
          f = Math.min(_.top, f), m = Math.max(_.top, m), e.allowHalf ? u.push({
            score: k + .5,
            left: _.left,
            top: _.top,
            height: _.height
          }, {
            score: k + 1,
            left: _.left + _.width / 2,
            top: _.top,
            height: _.height
          }) : u.push({
            score: k + 1,
            left: _.left,
            top: _.top,
            height: _.height
          })
        })
      },
      p = (C, _) => {
        for (let k = u.length - 1; k > 0; k--)
          if (_ >= d.top && _ <= d.bottom) {
            if (C > u[k].left && _ >= u[k].top && _ <= u[k].top + u[k].height) return u[k].score
          } else {
            const I = _ < d.top ? f : m;
            if (C > u[k].left && u[k].top === I) return u[k].score
          } return e.allowHalf ? .5 : 1
      },
      y = C => {
        l.value || C === e.modelValue || (t("update:modelValue", C), t("change", C))
      },
      b = C => {
        r.value || (n.start(C), g())
      },
      w = C => {
        if (!r.value && (n.move(C), n.isHorizontal() && !n.isTap.value)) {
          const {
            clientX: _,
            clientY: k
          } = C.touches[0];
          Ge(C), y(p(_, k))
        }
      },
      v = (C, _) => {
        const {
          icon: k,
          size: I,
          color: D,
          count: S,
          gutter: B,
          voidIcon: R,
          disabled: x,
          voidColor: P,
          allowHalf: M,
          iconPrefix: J,
          disabledColor: ce
        } = e, W = _ + 1, ne = C.status === "full", ue = C.status === "void", Re = M && C.value > 0 && C.value < 1;
        let Ne;
        B && W !== +S && (Ne = {
          paddingRight: Ie(B)
        });
        const z = X => {
          g();
          let ye = M ? p(X.clientX, X.clientY) : W;
          e.clearable && n.isTap.value && ye === e.modelValue && (ye = 0), y(ye)
        };
        return h("div", {
          key: _,
          ref: s(_),
          role: "radio",
          style: Ne,
          class: Rs("item"),
          tabindex: x ? void 0 : 0,
          "aria-setsize": S,
          "aria-posinset": W,
          "aria-checked": !ue,
          onClick: z
        }, [h(Pe, {
          size: I,
          name: ne ? k : R,
          class: Rs("icon", {
            disabled: x,
            full: ne
          }),
          color: x ? ce : ne ? D : P,
          classPrefix: J
        }, null), Re && h(Pe, {
          size: I,
          style: {
            width: C.value + "em"
          },
          name: ue ? R : k,
          class: Rs("icon", ["half", {
            disabled: x,
            full: !ue
          }]),
          color: x ? ce : ue ? P : D,
          classPrefix: J
        }, null)])
      };
    return vo(() => e.modelValue), st("touchmove", w, {
      target: a
    }), () => h("div", {
      ref: a,
      role: "radiogroup",
      class: Rs({
        readonly: e.readonly,
        disabled: e.disabled
      }),
      tabindex: e.disabled ? void 0 : 0,
      "aria-disabled": e.disabled,
      "aria-readonly": e.readonly,
      onTouchstartPassive: b
    }, [c.value.map(v)])
  }
});
const Ok = ee(Pk),
  Bk = {
    figureArr: Xe(),
    delay: Number,
    duration: lt(2),
    isStart: Boolean,
    direction: te("down"),
    height: lt(40)
  },
  [Rk, ul] = Y("rolling-text-item");
var Dk = K({
  name: Rk,
  props: Bk,
  setup(e) {
    const t = N(() => e.direction === "down" ? e.figureArr.slice().reverse() : e.figureArr),
      n = N(() => `-${e.height*(e.figureArr.length-1)}px`),
      o = N(() => ({
        lineHeight: Ie(e.height)
      })),
      s = N(() => ({
        height: Ie(e.height),
        "--van-translate": n.value,
        "--van-duration": e.duration + "s",
        "--van-delay": e.delay + "s"
      }));
    return () => h("div", {
      class: ul([e.direction]),
      style: s.value
    }, [h("div", {
      class: ul("box", {
        animate: e.isStart
      })
    }, [Array.isArray(t.value) && t.value.map(a => h("div", {
      class: ul("item"),
      style: o.value
    }, [a]))])])
  }
});
const [$k, Mk] = Y("rolling-text"), Lk = {
  startNum: lt(0),
  targetNum: Number,
  textList: Xe(),
  duration: lt(2),
  autoStart: j,
  direction: te("down"),
  stopOrder: te("ltr"),
  height: lt(40)
}, Nk = 2;
var Fk = K({
  name: $k,
  props: Lk,
  setup(e) {
    const t = N(() => Array.isArray(e.textList) && e.textList.length),
      n = N(() => t.value ? e.textList[0].length : `${Math.max(e.startNum,e.targetNum)}`.length),
      o = f => {
        const m = [];
        for (let g = 0; g < e.textList.length; g++) m.push(e.textList[g][f]);
        return m
      },
      s = N(() => t.value ? new Array(n.value).fill("") : Xt(e.targetNum, n.value).split("")),
      a = N(() => Xt(e.startNum, n.value).split("")),
      l = f => {
        const m = +a.value[f],
          g = +s.value[f],
          p = [];
        for (let y = m; y <= 9; y++) p.push(y);
        for (let y = 0; y <= Nk; y++)
          for (let b = 0; b <= 9; b++) p.push(b);
        for (let y = 0; y <= g; y++) p.push(y);
        return p
      },
      r = (f, m) => e.stopOrder === "ltr" ? .2 * f : .2 * (m - 1 - f),
      c = F(e.autoStart),
      u = () => {
        c.value = !0
      },
      d = () => {
        c.value = !1, e.autoStart && _t(() => u())
      };
    return re(() => e.autoStart, f => {
      f && u()
    }), $e({
      start: u,
      reset: d
    }), () => h("div", {
      class: Mk()
    }, [s.value.map((f, m) => h(Dk, {
      figureArr: t.value ? o(m) : l(m),
      duration: e.duration,
      direction: e.direction,
      isStart: c.value,
      height: e.height,
      delay: r(m, n.value)
    }, null))])
  }
});
const zk = ee(Fk),
  Vk = ee(P1),
  [Hk, Pi, Uk] = Y("search"),
  Wk = ke({}, Pr, {
    label: String,
    shape: te("square"),
    leftIcon: te("search"),
    clearable: j,
    actionText: String,
    background: String,
    showAction: Boolean
  });
var jk = K({
  name: Hk,
  props: Wk,
  emits: ["blur", "focus", "clear", "search", "cancel", "clickInput", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n,
    attrs: o
  }) {
    const s = wi(),
      a = F(),
      l = () => {
        n.action || (t("update:modelValue", ""), t("cancel"))
      },
      r = k => {
        k.keyCode === 13 && (Ge(k), t("search", e.modelValue))
      },
      c = () => e.id || `${s}-input`,
      u = () => {
        if (n.label || e.label) return h("label", {
          class: Pi("label"),
          for: c(),
          "data-allow-mismatch": "attribute"
        }, [n.label ? n.label() : e.label])
      },
      d = () => {
        if (e.showAction) {
          const k = e.actionText || Uk("cancel");
          return h("div", {
            class: Pi("action"),
            role: "button",
            tabindex: 0,
            onClick: l
          }, [n.action ? n.action() : k])
        }
      },
      f = () => {
        var k;
        return (k = a.value) == null ? void 0 : k.blur()
      },
      m = () => {
        var k;
        return (k = a.value) == null ? void 0 : k.focus()
      },
      g = k => t("blur", k),
      p = k => t("focus", k),
      y = k => t("clear", k),
      b = k => t("clickInput", k),
      w = k => t("clickLeftIcon", k),
      v = k => t("clickRightIcon", k),
      C = Object.keys(Pr),
      _ = () => {
        const k = ke({}, o, Ve(e, C), {
            id: c()
          }),
          I = D => t("update:modelValue", D);
        return h($n, De({
          ref: a,
          type: "search",
          class: Pi("field", {
            "with-message": k.errorMessage
          }),
          border: !1,
          onBlur: g,
          onFocus: p,
          onClear: y,
          onKeypress: r,
          onClickInput: b,
          onClickLeftIcon: w,
          onClickRightIcon: v,
          "onUpdate:modelValue": I
        }, k), Ve(n, ["left-icon", "right-icon"]))
      };
    return $e({
      focus: m,
      blur: f
    }), () => {
      var k;
      return h("div", {
        class: Pi({
          "show-action": e.showAction
        }),
        style: {
          background: e.background
        }
      }, [(k = n.left) == null ? void 0 : k.call(n), h("div", {
        class: Pi("content", e.shape)
      }, [u(), _()]), d()])
    }
  }
});
const Qk = ee(jk),
  Kk = e => e == null ? void 0 : e.includes("/"),
  Yk = [...Sr, "round", "closeOnPopstate", "safeAreaInsetBottom"],
  qk = {
    qq: "qq",
    link: "link-o",
    weibo: "weibo",
    qrcode: "qr",
    poster: "photo-o",
    wechat: "wechat",
    "weapp-qrcode": "miniprogram-o",
    "wechat-moments": "wechat-moments"
  },
  [Gk, Gt, Zk] = Y("share-sheet"),
  Xk = ke({}, bi, {
    title: String,
    round: j,
    options: Xe(),
    cancelText: String,
    description: String,
    closeOnPopstate: j,
    safeAreaInsetBottom: j
  });
var Jk = K({
  name: Gk,
  props: Xk,
  emits: ["cancel", "select", "update:show"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = m => t("update:show", m),
      s = () => {
        o(!1), t("cancel")
      },
      a = (m, g) => t("select", m, g),
      l = () => {
        const m = n.title ? n.title() : e.title,
          g = n.description ? n.description() : e.description;
        if (m || g) return h("div", {
          class: Gt("header")
        }, [m && h("h2", {
          class: Gt("title")
        }, [m]), g && h("span", {
          class: Gt("description")
        }, [g])])
      },
      r = m => Kk(m) ? h("img", {
        src: m,
        class: Gt("image-icon")
      }, null) : h("div", {
        class: Gt("icon", [m])
      }, [h(Pe, {
        name: qk[m] || m
      }, null)]),
      c = (m, g) => {
        const {
          name: p,
          icon: y,
          className: b,
          description: w
        } = m;
        return h("div", {
          role: "button",
          tabindex: 0,
          class: [Gt("option"), b, St],
          onClick: () => a(m, g)
        }, [r(y), p && h("span", {
          class: Gt("name")
        }, [p]), w && h("span", {
          class: Gt("option-description")
        }, [w])])
      },
      u = (m, g) => h("div", {
        class: Gt("options", {
          border: g
        })
      }, [m.map(c)]),
      d = () => {
        const {
          options: m
        } = e;
        return Array.isArray(m[0]) ? m.map((g, p) => u(g, p !== 0)) : u(m)
      },
      f = () => {
        var m;
        const g = (m = e.cancelText) != null ? m : Zk("cancel");
        if (n.cancel || g) return h("button", {
          type: "button",
          class: Gt("cancel"),
          onClick: s
        }, [n.cancel ? n.cancel() : g])
      };
    return () => h(cn, De({
      class: Gt(),
      position: "bottom",
      "onUpdate:show": o
    }, Ve(e, Yk)), {
      default: () => [l(), d(), f()]
    })
  }
});
const eS = ee(Jk),
  [tm, tS] = Y("sidebar"),
  nm = Symbol(tm),
  nS = {
    modelValue: ge(0)
  };
var oS = K({
  name: tm,
  props: nS,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      linkChildren: o
    } = xt(nm), s = () => +e.modelValue;
    return o({
      getActive: s,
      setActive: l => {
        l !== s() && (t("update:modelValue", l), t("change", l))
      }
    }), () => {
      var l;
      return h("div", {
        role: "tablist",
        class: tS()
      }, [(l = n.default) == null ? void 0 : l.call(n)])
    }
  }
});
const om = ee(oS),
  [iS, $u] = Y("sidebar-item"),
  sS = ke({}, po, {
    dot: Boolean,
    title: String,
    badge: Z,
    disabled: Boolean,
    badgeProps: Object
  });
var aS = K({
  name: iS,
  props: sS,
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = Mo(),
      {
        parent: s,
        index: a
      } = pt(nm);
    if (!s) return;
    const l = () => {
      e.disabled || (t("click", a.value), s.setActive(a.value), o())
    };
    return () => {
      const {
        dot: r,
        badge: c,
        title: u,
        disabled: d
      } = e, f = a.value === s.getActive();
      return h("div", {
        role: "tab",
        class: $u({
          select: f,
          disabled: d
        }),
        tabindex: d ? void 0 : 0,
        "aria-selected": f,
        onClick: l
      }, [h(Lo, De({
        dot: r,
        class: $u("text"),
        content: c
      }, e.badgeProps), {
        default: () => [n.title ? n.title() : u]
      })])
    }
  }
});
const im = ee(aS),
  [lS, dl, Mu] = Y("signature"),
  rS = {
    tips: String,
    type: te("png"),
    penColor: te("#000"),
    lineWidth: lt(3),
    clearButtonText: String,
    backgroundColor: te(""),
    confirmButtonText: String
  },
  cS = () => {
    var e;
    const t = document.createElement("canvas");
    return !!((e = t.getContext) != null && e.call(t, "2d"))
  };
var uS = K({
  name: lS,
  props: rS,
  emits: ["submit", "clear", "start", "end", "signing"],
  setup(e, {
    emit: t
  }) {
    const n = F(),
      o = F(),
      s = N(() => n.value ? n.value.getContext("2d") : null),
      a = zt ? cS() : !0;
    let l = 0,
      r = 0,
      c;
    const u = () => {
        if (!s.value) return !1;
        s.value.beginPath(), s.value.lineWidth = e.lineWidth, s.value.strokeStyle = e.penColor, c = Ue(n), t("start")
      },
      d = v => {
        if (!s.value) return !1;
        Ge(v);
        const C = v.touches[0],
          _ = C.clientX - ((c == null ? void 0 : c.left) || 0),
          k = C.clientY - ((c == null ? void 0 : c.top) || 0);
        s.value.lineCap = "round", s.value.lineJoin = "round", s.value.lineTo(_, k), s.value.stroke(), t("signing", v)
      },
      f = v => {
        Ge(v), t("end")
      },
      m = v => {
        const C = document.createElement("canvas");
        if (C.width = v.width, C.height = v.height, e.backgroundColor) {
          const _ = C.getContext("2d");
          g(_)
        }
        return v.toDataURL() === C.toDataURL()
      },
      g = v => {
        v && e.backgroundColor && (v.fillStyle = e.backgroundColor, v.fillRect(0, 0, l, r))
      },
      p = () => {
        var v, C;
        const _ = n.value;
        if (!_) return;
        const I = m(_) ? "" : ((C = (v = {
          jpg: () => _.toDataURL("image/jpeg", .8),
          jpeg: () => _.toDataURL("image/jpeg", .8)
        })[e.type]) == null ? void 0 : C.call(v)) || _.toDataURL(`image/${e.type}`);
        t("submit", {
          image: I,
          canvas: _
        })
      },
      y = () => {
        s.value && (s.value.clearRect(0, 0, l, r), s.value.closePath(), g(s.value)), t("clear")
      },
      b = () => {
        var v, C, _;
        if (a && n.value) {
          const k = n.value,
            I = zt ? window.devicePixelRatio : 1;
          l = k.width = (((v = o.value) == null ? void 0 : v.offsetWidth) || 0) * I, r = k.height = (((C = o.value) == null ? void 0 : C.offsetHeight) || 0) * I, (_ = s.value) == null || _.scale(I, I), g(s.value)
        }
      },
      w = () => {
        if (s.value) {
          const v = s.value.getImageData(0, 0, l, r);
          b(), s.value.putImageData(v, 0, 0)
        }
      };
    return re(tn, w), at(b), $e({
      resize: w,
      clear: y,
      submit: p
    }), () => h("div", {
      class: dl()
    }, [h("div", {
      class: dl("content"),
      ref: o
    }, [a ? h("canvas", {
      ref: n,
      onTouchstartPassive: u,
      onTouchmove: d,
      onTouchend: f
    }, null) : h("p", null, [e.tips])]), h("div", {
      class: dl("footer")
    }, [h(Tt, {
      size: "small",
      onClick: y
    }, {
      default: () => [e.clearButtonText || Mu("clear")]
    }), h(Tt, {
      type: "primary",
      size: "small",
      onClick: p
    }, {
      default: () => [e.confirmButtonText || Mu("confirm")]
    })])])
  }
});
const dS = ee(uS),
  [fS, hS] = Y("skeleton-title"),
  mS = {
    round: Boolean,
    titleWidth: Z
  };
var gS = K({
  name: fS,
  props: mS,
  setup(e) {
    return () => h("h3", {
      class: hS([{
        round: e.round
      }]),
      style: {
        width: Ie(e.titleWidth)
      }
    }, null)
  }
});
const sm = ee(gS);
var vS = sm;
const [yS, pS] = Y("skeleton-avatar"), bS = {
  avatarSize: Z,
  avatarShape: te("round")
};
var wS = K({
  name: yS,
  props: bS,
  setup(e) {
    return () => h("div", {
      class: pS([e.avatarShape]),
      style: Hn(e.avatarSize)
    }, null)
  }
});
const am = ee(wS);
var CS = am;
const Ur = "100%",
  _S = {
    round: Boolean,
    rowWidth: {
      type: Z,
      default: Ur
    }
  },
  [kS, SS] = Y("skeleton-paragraph");
var TS = K({
  name: kS,
  props: _S,
  setup(e) {
    return () => h("div", {
      class: SS([{
        round: e.round
      }]),
      style: {
        width: e.rowWidth
      }
    }, null)
  }
});
const lm = ee(TS);
var xS = lm;
const [AS, Lu] = Y("skeleton"), ES = "60%", IS = {
  row: ge(0),
  round: Boolean,
  title: Boolean,
  titleWidth: Z,
  avatar: Boolean,
  avatarSize: Z,
  avatarShape: te("round"),
  loading: j,
  animate: j,
  rowWidth: {
    type: [Number, String, Array],
    default: Ur
  }
};
var PS = K({
  name: AS,
  inheritAttrs: !1,
  props: IS,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const o = () => {
        if (e.avatar) return h(CS, {
          avatarShape: e.avatarShape,
          avatarSize: e.avatarSize
        }, null)
      },
      s = () => {
        if (e.title) return h(vS, {
          round: e.round,
          titleWidth: e.titleWidth
        }, null)
      },
      a = c => {
        const {
          rowWidth: u
        } = e;
        return u === Ur && c === +e.row - 1 ? ES : Array.isArray(u) ? u[c] : u
      },
      l = () => Array(+e.row).fill("").map((c, u) => h(xS, {
        key: u,
        round: e.round,
        rowWidth: Ie(a(u))
      }, null)),
      r = () => t.template ? t.template() : h(Be, null, [o(), h("div", {
        class: Lu("content")
      }, [s(), l()])]);
    return () => {
      var c;
      return e.loading ? h("div", De({
        class: Lu({
          animate: e.animate,
          round: e.round
        })
      }, n), [r()]) : (c = t.default) == null ? void 0 : c.call(t)
    }
  }
});
const OS = ee(PS),
  [BS, Nu] = Y("skeleton-image"),
  RS = {
    imageSize: Z,
    imageShape: te("square")
  };
var DS = K({
  name: BS,
  props: RS,
  setup(e) {
    return () => h("div", {
      class: Nu([e.imageShape]),
      style: Hn(e.imageSize)
    }, [h(Pe, {
      name: "photo",
      class: Nu("icon")
    }, null)])
  }
});
const $S = ee(DS),
  [MS, Oi] = Y("slider"),
  LS = {
    min: ge(0),
    max: ge(100),
    step: ge(1),
    range: Boolean,
    reverse: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    vertical: Boolean,
    barHeight: Z,
    buttonSize: Z,
    activeColor: String,
    inactiveColor: String,
    modelValue: {
      type: [Number, Array],
      default: 0
    }
  };
var NS = K({
  name: MS,
  props: LS,
  emits: ["change", "dragEnd", "dragStart", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o, s, a;
    const l = F(),
      r = [F(), F()],
      c = F(),
      u = Kt(),
      d = N(() => Number(e.max) - Number(e.min)),
      f = N(() => {
        const x = e.vertical ? "width" : "height";
        return {
          background: e.inactiveColor,
          [x]: Ie(e.barHeight)
        }
      }),
      m = x => e.range && Array.isArray(x),
      g = () => {
        const {
          modelValue: x,
          min: P
        } = e;
        return m(x) ? `${(x[1]-x[0])*100/d.value}%` : `${(x-Number(P))*100/d.value}%`
      },
      p = () => {
        const {
          modelValue: x,
          min: P
        } = e;
        return m(x) ? `${(x[0]-Number(P))*100/d.value}%` : "0%"
      },
      y = N(() => {
        const P = {
          [e.vertical ? "height" : "width"]: g(),
          background: e.activeColor
        };
        c.value && (P.transition = "none");
        const M = () => e.vertical ? e.reverse ? "bottom" : "top" : e.reverse ? "right" : "left";
        return P[M()] = p(), P
      }),
      b = x => {
        const P = +e.min,
          M = +e.max,
          J = +e.step;
        x = ht(x, P, M);
        const ce = Math.round((x - P) / J) * J;
        return Vf(P, ce)
      },
      w = () => {
        const x = e.modelValue;
        m(x) ? a = x.map(b) : a = b(x)
      },
      v = x => {
        var P, M;
        const J = (P = x[0]) != null ? P : Number(e.min),
          ce = (M = x[1]) != null ? M : Number(e.max);
        return J > ce ? [ce, J] : [J, ce]
      },
      C = (x, P) => {
        m(x) ? x = v(x).map(b) : x = b(x), pn(x, e.modelValue) || t("update:modelValue", x), P && !pn(x, a) && t("change", x)
      },
      _ = x => {
        if (x.stopPropagation(), e.disabled || e.readonly) return;
        w();
        const {
          min: P,
          reverse: M,
          vertical: J,
          modelValue: ce
        } = e, W = Ue(l), ne = () => J ? M ? W.bottom - x.clientY : x.clientY - W.top : M ? W.right - x.clientX : x.clientX - W.left, ue = J ? W.height : W.width, Re = Number(P) + ne() / ue * d.value;
        if (m(ce)) {
          const [Ne, z] = ce, X = (Ne + z) / 2;
          Re <= X ? C([Re, z], !0) : C([Ne, Re], !0)
        } else C(Re, !0)
      },
      k = x => {
        e.disabled || e.readonly || (u.start(x), s = e.modelValue, w(), c.value = "start")
      },
      I = x => {
        if (e.disabled || e.readonly) return;
        c.value === "start" && t("dragStart", x), Ge(x, !0), u.move(x), c.value = "dragging";
        const P = Ue(l),
          M = e.vertical ? u.deltaY.value : u.deltaX.value,
          J = e.vertical ? P.height : P.width;
        let ce = M / J * d.value;
        if (e.reverse && (ce = -ce), m(a)) {
          const W = e.reverse ? 1 - o : o;
          s[W] = a[W] + ce
        } else s = a + ce;
        C(s)
      },
      D = x => {
        e.disabled || e.readonly || (c.value === "dragging" && (C(s, !0), t("dragEnd", x)), c.value = "")
      },
      S = x => typeof x == "number" ? Oi("button-wrapper", ["left", "right"][x]) : Oi("button-wrapper", e.reverse ? "left" : "right"),
      B = (x, P) => {
        const M = c.value === "dragging";
        if (typeof P == "number") {
          const J = n[P === 0 ? "left-button" : "right-button"];
          let ce;
          if (M && Array.isArray(s) && (ce = s[0] > s[1] ? o ^ 1 : o), J) return J({
            value: x,
            dragging: M,
            dragIndex: ce
          })
        }
        return n.button ? n.button({
          value: x,
          dragging: M
        }) : h("div", {
          class: Oi("button"),
          style: Hn(e.buttonSize)
        }, null)
      },
      R = x => {
        const P = typeof x == "number" ? e.modelValue[x] : e.modelValue;
        return h("div", {
          ref: r[x ?? 0],
          role: "slider",
          class: S(x),
          tabindex: e.disabled ? void 0 : 0,
          "aria-valuemin": e.min,
          "aria-valuenow": P,
          "aria-valuemax": e.max,
          "aria-disabled": e.disabled || void 0,
          "aria-readonly": e.readonly || void 0,
          "aria-orientation": e.vertical ? "vertical" : "horizontal",
          onTouchstartPassive: M => {
            typeof x == "number" && (o = x), k(M)
          },
          onTouchend: D,
          onTouchcancel: D,
          onClick: wr
        }, [B(P, x)])
      };
    return C(e.modelValue), vo(() => e.modelValue), r.forEach(x => {
      st("touchmove", I, {
        target: x
      })
    }), () => h("div", {
      ref: l,
      style: f.value,
      class: Oi({
        vertical: e.vertical,
        disabled: e.disabled
      }),
      onClick: _
    }, [h("div", {
      class: Oi("bar"),
      style: y.value
    }, [e.range ? [R(0), R(1)] : R()])])
  }
});
const FS = ee(NS),
  [Fu, zS] = Y("space"),
  VS = {
    align: String,
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: [Number, String, Array],
      default: 8
    },
    wrap: Boolean,
    fill: Boolean
  };

function rm(e = []) {
  const t = [];
  return e.forEach(n => {
    Array.isArray(n) ? t.push(...n) : n.type === Be ? t.push(...rm(n.children)) : t.push(n)
  }), t.filter(n => {
    var o;
    return !(n && (n.type === yt || n.type === Be && ((o = n.children) == null ? void 0 : o.length) === 0 || n.type === ss && n.children.trim() === ""))
  })
}
var HS = K({
  name: Fu,
  props: VS,
  setup(e, {
    slots: t
  }) {
    const n = N(() => {
        var a;
        return (a = e.align) != null ? a : e.direction === "horizontal" ? "center" : ""
      }),
      o = a => typeof a == "number" ? a + "px" : a,
      s = a => {
        const l = {},
          r = `${o(Array.isArray(e.size)?e.size[0]:e.size)}`,
          c = `${o(Array.isArray(e.size)?e.size[1]:e.size)}`;
        return a ? e.wrap ? {
          marginBottom: c
        } : {} : (e.direction === "horizontal" && (l.marginRight = r), (e.direction === "vertical" || e.wrap) && (l.marginBottom = c), l)
      };
    return () => {
      var a;
      const l = rm((a = t.default) == null ? void 0 : a.call(t));
      return h("div", {
        class: [zS({
          [e.direction]: e.direction,
          [`align-${n.value}`]: n.value,
          wrap: e.wrap,
          fill: e.fill
        })]
      }, [l.map((r, c) => h("div", {
        key: `item-${c}`,
        class: `${Fu}-item`,
        style: s(c === l.length - 1)
      }, [r]))])
    }
  }
});
const US = ee(HS),
  [cm, zu] = Y("steps"),
  WS = {
    active: ge(0),
    direction: te("horizontal"),
    activeIcon: te("checked"),
    iconPrefix: String,
    finishIcon: String,
    activeColor: String,
    inactiveIcon: String,
    inactiveColor: String
  },
  um = Symbol(cm);
var jS = K({
  name: cm,
  props: WS,
  emits: ["clickStep"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      linkChildren: o
    } = xt(um);
    return o({
      props: e,
      onClickStep: a => t("clickStep", a)
    }), () => {
      var a;
      return h("div", {
        class: zu([e.direction])
      }, [h("div", {
        class: zu("items")
      }, [(a = n.default) == null ? void 0 : a.call(n)])])
    }
  }
});
const [QS, Xn] = Y("step");
var KS = K({
  name: QS,
  setup(e, {
    slots: t
  }) {
    const {
      parent: n,
      index: o
    } = pt(um);
    if (!n) return;
    const s = n.props,
      a = () => {
        const f = +s.active;
        return o.value < f ? "finish" : o.value === f ? "process" : "waiting"
      },
      l = () => a() === "process",
      r = N(() => ({
        background: a() === "finish" ? s.activeColor : s.inactiveColor
      })),
      c = N(() => {
        if (l()) return {
          color: s.activeColor
        };
        if (a() === "waiting") return {
          color: s.inactiveColor
        }
      }),
      u = () => n.onClickStep(o.value),
      d = () => {
        const {
          iconPrefix: f,
          finishIcon: m,
          activeIcon: g,
          activeColor: p,
          inactiveIcon: y
        } = s;
        return l() ? t["active-icon"] ? t["active-icon"]() : h(Pe, {
          class: Xn("icon", "active"),
          name: g,
          color: p,
          classPrefix: f
        }, null) : a() === "finish" && (m || t["finish-icon"]) ? t["finish-icon"] ? t["finish-icon"]() : h(Pe, {
          class: Xn("icon", "finish"),
          name: m,
          color: p,
          classPrefix: f
        }, null) : t["inactive-icon"] ? t["inactive-icon"]() : y ? h(Pe, {
          class: Xn("icon"),
          name: y,
          classPrefix: f
        }, null) : h("i", {
          class: Xn("circle"),
          style: r.value
        }, null)
      };
    return () => {
      var f;
      const m = a();
      return h("div", {
        class: [Wn, Xn([s.direction, {
          [m]: m
        }])]
      }, [h("div", {
        class: Xn("title", {
          active: l()
        }),
        style: c.value,
        onClick: u
      }, [(f = t.default) == null ? void 0 : f.call(t)]), h("div", {
        class: Xn("circle-container"),
        onClick: u
      }, [d()]), h("div", {
        class: Xn("line"),
        style: r.value
      }, null)])
    }
  }
});
const YS = ee(KS),
  [qS, Ds] = Y("stepper"),
  GS = 200,
  $s = (e, t) => String(e) === String(t),
  ZS = {
    min: ge(1),
    max: ge(1 / 0),
    name: ge(""),
    step: ge(1),
    theme: String,
    integer: Boolean,
    disabled: Boolean,
    showPlus: j,
    showMinus: j,
    showInput: j,
    longPress: j,
    autoFixed: j,
    allowEmpty: Boolean,
    modelValue: Z,
    inputWidth: Z,
    buttonSize: Z,
    placeholder: String,
    disablePlus: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean,
    beforeChange: Function,
    defaultValue: ge(1),
    decimalLength: Z
  };
var XS = K({
  name: qS,
  props: ZS,
  emits: ["plus", "blur", "minus", "focus", "change", "overlimit", "update:modelValue"],
  setup(e, {
    emit: t
  }) {
    const n = (S, B = !0) => {
        const {
          min: R,
          max: x,
          allowEmpty: P,
          decimalLength: M
        } = e;
        return P && S === "" || (S = Dl(String(S), !e.integer), S = S === "" ? 0 : +S, S = Number.isNaN(S) ? +R : S, S = B ? Math.max(Math.min(+x, S), +R) : S, Fe(M) && (S = S.toFixed(+M))), S
      },
      o = () => {
        var S;
        const B = (S = e.modelValue) != null ? S : e.defaultValue,
          R = n(B);
        return $s(R, e.modelValue) || t("update:modelValue", R), R
      };
    let s;
    const a = F(),
      l = F(o()),
      r = N(() => e.disabled || e.disableMinus || +l.value <= +e.min),
      c = N(() => e.disabled || e.disablePlus || +l.value >= +e.max),
      u = N(() => ({
        width: Ie(e.inputWidth),
        height: Ie(e.buttonSize)
      })),
      d = N(() => Hn(e.buttonSize)),
      f = () => {
        const S = n(l.value);
        $s(S, l.value) || (l.value = S)
      },
      m = S => {
        e.beforeChange ? yo(e.beforeChange, {
          args: [S],
          done() {
            l.value = S
          }
        }) : l.value = S
      },
      g = () => {
        if (s === "plus" && c.value || s === "minus" && r.value) {
          t("overlimit", s);
          return
        }
        const S = s === "minus" ? -e.step : +e.step,
          B = n(Vf(+l.value, S));
        m(B), t(s)
      },
      p = S => {
        const B = S.target,
          {
            value: R
          } = B,
          {
            decimalLength: x
          } = e;
        let P = Dl(String(R), !e.integer);
        if (Fe(x) && P.includes(".")) {
          const J = P.split(".");
          P = `${J[0]}.${J[1].slice(0,+x)}`
        }
        e.beforeChange ? B.value = String(l.value) : $s(R, P) || (B.value = P);
        const M = P === String(+P);
        m(M ? +P : P)
      },
      y = S => {
        var B;
        e.disableInput ? (B = a.value) == null || B.blur() : t("focus", S)
      },
      b = S => {
        const B = S.target,
          R = n(B.value, e.autoFixed);
        B.value = String(R), l.value = R, Oe(() => {
          t("blur", S), Ff()
        })
      };
    let w, v;
    const C = () => {
        v = setTimeout(() => {
          g(), C()
        }, GS)
      },
      _ = () => {
        e.longPress && (w = !1, clearTimeout(v), v = setTimeout(() => {
          w = !0, g(), C()
        }, Kf))
      },
      k = S => {
        e.longPress && (clearTimeout(v), w && Ge(S))
      },
      I = S => {
        e.disableInput && Ge(S)
      },
      D = S => ({
        onClick: B => {
          Ge(B), s = S, g()
        },
        onTouchstartPassive: () => {
          s = S, _()
        },
        onTouchend: k,
        onTouchcancel: k
      });
    return re(() => [e.max, e.min, e.integer, e.decimalLength], f), re(() => e.modelValue, S => {
      $s(S, l.value) || (l.value = n(S))
    }), re(l, S => {
      t("update:modelValue", S), t("change", S, {
        name: e.name
      })
    }), vo(() => e.modelValue), () => h("div", {
      role: "group",
      class: Ds([e.theme])
    }, [rt(h("button", De({
      type: "button",
      style: d.value,
      class: [Ds("minus", {
        disabled: r.value
      }), {
        [St]: !r.value
      }],
      "aria-disabled": r.value || void 0
    }, D("minus")), null), [
      [dt, e.showMinus]
    ]), rt(h("input", {
      ref: a,
      type: e.integer ? "tel" : "text",
      role: "spinbutton",
      class: Ds("input"),
      value: l.value,
      style: u.value,
      disabled: e.disabled,
      readonly: e.disableInput,
      inputmode: e.integer ? "numeric" : "decimal",
      placeholder: e.placeholder,
      autocomplete: "off",
      "aria-valuemax": e.max,
      "aria-valuemin": e.min,
      "aria-valuenow": l.value,
      onBlur: b,
      onInput: p,
      onFocus: y,
      onMousedown: I
    }, null), [
      [dt, e.showInput]
    ]), rt(h("button", De({
      type: "button",
      style: d.value,
      class: [Ds("plus", {
        disabled: c.value
      }), {
        [St]: !c.value
      }],
      "aria-disabled": c.value || void 0
    }, D("plus")), null), [
      [dt, e.showPlus]
    ])])
  }
});
const JS = ee(XS),
  eT = ee(jS),
  [tT, Zt, nT] = Y("submit-bar"),
  oT = {
    tip: String,
    label: String,
    price: Number,
    tipIcon: String,
    loading: Boolean,
    currency: te("¥"),
    disabled: Boolean,
    textAlign: String,
    buttonText: String,
    buttonType: te("danger"),
    buttonColor: String,
    suffixLabel: String,
    placeholder: Boolean,
    decimalLength: ge(2),
    safeAreaInsetBottom: j
  };
var iT = K({
  name: tT,
  props: oT,
  emits: ["submit"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = _a(o, Zt),
      a = () => {
        const {
          price: d,
          label: f,
          currency: m,
          textAlign: g,
          suffixLabel: p,
          decimalLength: y
        } = e;
        if (typeof d == "number") {
          const b = (d / 100).toFixed(+y).split("."),
            w = y ? `.${b[1]}` : "";
          return h("div", {
            class: Zt("text"),
            style: {
              textAlign: g
            }
          }, [h("span", null, [f || nT("label")]), h("span", {
            class: Zt("price")
          }, [m, h("span", {
            class: Zt("price-integer")
          }, [b[0]]), w]), p && h("span", {
            class: Zt("suffix-label")
          }, [p])])
        }
      },
      l = () => {
        var d;
        const {
          tip: f,
          tipIcon: m
        } = e;
        if (n.tip || f) return h("div", {
          class: Zt("tip")
        }, [m && h(Pe, {
          class: Zt("tip-icon"),
          name: m
        }, null), f && h("span", {
          class: Zt("tip-text")
        }, [f]), (d = n.tip) == null ? void 0 : d.call(n)])
      },
      r = () => t("submit"),
      c = () => n.button ? n.button() : h(Tt, {
        round: !0,
        type: e.buttonType,
        text: e.buttonText,
        class: Zt("button", e.buttonType),
        color: e.buttonColor,
        loading: e.loading,
        disabled: e.disabled,
        onClick: r
      }, null),
      u = () => {
        var d, f;
        return h("div", {
          ref: o,
          class: [Zt(), {
            "van-safe-area-bottom": e.safeAreaInsetBottom
          }]
        }, [(d = n.top) == null ? void 0 : d.call(n), l(), h("div", {
          class: Zt("bar")
        }, [(f = n.default) == null ? void 0 : f.call(n), a(), c()])])
      };
    return () => e.placeholder ? s(u) : u()
  }
});
const sT = ee(iT),
  [aT, fl] = Y("swipe-cell"),
  lT = {
    name: ge(""),
    disabled: Boolean,
    leftWidth: Z,
    rightWidth: Z,
    beforeClose: Function,
    stopPropagation: Boolean
  };
var rT = K({
  name: aT,
  props: lT,
  emits: ["open", "close", "click"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o, s, a, l;
    const r = F(),
      c = F(),
      u = F(),
      d = Ze({
        offset: 0,
        dragging: !1
      }),
      f = Kt(),
      m = S => S.value ? Ue(S).width : 0,
      g = N(() => Fe(e.leftWidth) ? +e.leftWidth : m(c)),
      p = N(() => Fe(e.rightWidth) ? +e.rightWidth : m(u)),
      y = S => {
        d.offset = S === "left" ? g.value : -p.value, o || (o = !0, t("open", {
          name: e.name,
          position: S
        }))
      },
      b = S => {
        d.offset = 0, o && (o = !1, t("close", {
          name: e.name,
          position: S
        }))
      },
      w = S => {
        const B = Math.abs(d.offset),
          R = .15,
          x = o ? 1 - R : R,
          P = S === "left" ? g.value : p.value;
        P && B > P * x ? y(S) : b(S)
      },
      v = S => {
        e.disabled || (a = d.offset, f.start(S))
      },
      C = S => {
        if (e.disabled) return;
        const {
          deltaX: B
        } = f;
        f.move(S), f.isHorizontal() && (s = !0, d.dragging = !0, (!o || B.value * a < 0) && Ge(S, e.stopPropagation), d.offset = ht(B.value + a, -p.value, g.value))
      },
      _ = () => {
        d.dragging && (d.dragging = !1, w(d.offset > 0 ? "left" : "right"), setTimeout(() => {
          s = !1
        }, 0))
      },
      k = (S = "outside", B) => {
        l || (t("click", S), o && !s && (l = !0, yo(e.beforeClose, {
          args: [{
            event: B,
            name: e.name,
            position: S
          }],
          done: () => {
            l = !1, b(S)
          },
          canceled: () => l = !1,
          error: () => l = !1
        })))
      },
      I = (S, B) => R => {
        B && R.stopPropagation(), !s && k(S, R)
      },
      D = (S, B) => {
        const R = n[S];
        if (R) return h("div", {
          ref: B,
          class: fl(S),
          onClick: I(S, !0)
        }, [R()])
      };
    return $e({
      open: y,
      close: b
    }), ba(r, S => k("outside", S), {
      eventName: "touchstart"
    }), st("touchmove", C, {
      target: r
    }), () => {
      var S;
      const B = {
        transform: `translate3d(${d.offset}px, 0, 0)`,
        transitionDuration: d.dragging ? "0s" : ".6s"
      };
      return h("div", {
        ref: r,
        class: fl(),
        onClick: I("cell", s),
        onTouchstartPassive: v,
        onTouchend: _,
        onTouchcancel: _
      }, [h("div", {
        class: fl("wrapper"),
        style: B
      }, [D("left", c), (S = n.default) == null ? void 0 : S.call(n), D("right", u)])])
    }
  }
});
const cT = ee(rT),
  [dm, Vu] = Y("tabbar"),
  uT = {
    route: Boolean,
    fixed: j,
    border: j,
    zIndex: Z,
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    modelValue: ge(0),
    safeAreaInsetBottom: {
      type: Boolean,
      default: null
    }
  },
  fm = Symbol(dm);
var dT = K({
  name: dm,
  props: uT,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      {
        linkChildren: s
      } = xt(fm),
      a = _a(o, Vu),
      l = () => {
        var u;
        return (u = e.safeAreaInsetBottom) != null ? u : e.fixed
      },
      r = () => {
        var u;
        const {
          fixed: d,
          zIndex: f,
          border: m
        } = e;
        return h("div", {
          ref: o,
          role: "tablist",
          style: Un(f),
          class: [Vu({
            fixed: d
          }), {
            [wa]: m,
            "van-safe-area-bottom": l()
          }]
        }, [(u = n.default) == null ? void 0 : u.call(n)])
      };
    return s({
      props: e,
      setActive: (u, d) => {
        yo(e.beforeChange, {
          args: [u],
          done() {
            t("update:modelValue", u), t("change", u), d()
          }
        })
      }
    }), () => e.fixed && e.placeholder ? a(r) : r()
  }
});
const fT = ee(dT),
  [hT, hl] = Y("tabbar-item"),
  mT = ke({}, po, {
    dot: Boolean,
    icon: String,
    name: Z,
    badge: Z,
    badgeProps: Object,
    iconPrefix: String
  });
var gT = K({
  name: hT,
  props: mT,
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = Mo(),
      s = ln().proxy,
      {
        parent: a,
        index: l
      } = pt(fm);
    if (!a) return;
    const r = N(() => {
        var d;
        const {
          route: f,
          modelValue: m
        } = a.props;
        if (f && "$route" in s) {
          const {
            $route: g
          } = s, {
            to: p
          } = e, y = wn(p) ? p : {
            path: p
          };
          return !!g.matched.find(b => {
            const w = "path" in y && y.path === b.path,
              v = "name" in y && y.name === b.name;
            return w || v
          })
        }
        return ((d = e.name) != null ? d : l.value) === m
      }),
      c = d => {
        var f;
        r.value || a.setActive((f = e.name) != null ? f : l.value, o), t("click", d)
      },
      u = () => {
        if (n.icon) return n.icon({
          active: r.value
        });
        if (e.icon) return h(Pe, {
          name: e.icon,
          classPrefix: e.iconPrefix
        }, null)
      };
    return () => {
      var d;
      const {
        dot: f,
        badge: m
      } = e, {
        activeColor: g,
        inactiveColor: p
      } = a.props, y = r.value ? g : p;
      return h("div", {
        role: "tab",
        class: hl({
          active: r.value
        }),
        style: {
          color: y
        },
        tabindex: 0,
        "aria-selected": r.value,
        onClick: c
      }, [h(Lo, De({
        dot: f,
        class: hl("icon"),
        content: m
      }, e.badgeProps), {
        default: u
      }), h("div", {
        class: hl("text")
      }, [(d = n.default) == null ? void 0 : d.call(n, {
        active: r.value
      })])])
    }
  }
});
const vT = ee(gT),
  [yT, Hu] = Y("text-ellipsis"),
  pT = {
    rows: ge(1),
    dots: te("..."),
    content: te(""),
    expandText: te(""),
    collapseText: te(""),
    position: te("end")
  };
var bT = K({
  name: yT,
  props: pT,
  emits: ["clickAction"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(e.content),
      s = F(!1),
      a = F(!1),
      l = F(),
      r = F();
    let c = !1;
    const u = N(() => s.value ? e.collapseText : e.expandText),
      d = w => {
        if (!w) return 0;
        const v = w.match(/^\d*(\.\d*)?/);
        return v ? Number(v[0]) : 0
      },
      f = () => {
        if (!l.value || !l.value.isConnected) return;
        const w = window.getComputedStyle(l.value),
          v = document.createElement("div");
        return Array.prototype.slice.apply(w).forEach(_ => {
          v.style.setProperty(_, w.getPropertyValue(_))
        }), v.style.position = "fixed", v.style.zIndex = "-9999", v.style.top = "-9999px", v.style.height = "auto", v.style.minHeight = "auto", v.style.maxHeight = "auto", v.innerText = e.content, document.body.appendChild(v), v
      },
      m = (w, v) => {
        var C, _;
        const {
          content: k,
          position: I,
          dots: D
        } = e, S = k.length, B = 0 + S >> 1, R = n.action ? (_ = (C = r.value) == null ? void 0 : C.outerHTML) != null ? _ : "" : e.expandText, x = () => {
          const M = (J, ce) => {
            if (ce - J <= 1) return I === "end" ? k.slice(0, J) + D : D + k.slice(ce, S);
            const W = Math.round((J + ce) / 2);
            return I === "end" ? w.innerText = k.slice(0, W) + D : w.innerText = D + k.slice(W, S), w.innerHTML += R, w.offsetHeight > v ? I === "end" ? M(J, W) : M(W, ce) : I === "end" ? M(W, ce) : M(J, W)
          };
          return M(0, S)
        }, P = (M, J) => {
          if (M[1] - M[0] <= 1 && J[1] - J[0] <= 1) return k.slice(0, M[0]) + D + k.slice(J[1], S);
          const ce = Math.floor((M[0] + M[1]) / 2),
            W = Math.ceil((J[0] + J[1]) / 2);
          return w.innerText = e.content.slice(0, ce) + e.dots + e.content.slice(W, S), w.innerHTML += R, w.offsetHeight >= v ? P([M[0], ce], [W, J[1]]) : P([ce, M[1]], [J[0], W])
        };
        return e.position === "middle" ? P([0, B], [B, S]) : x()
      },
      g = () => {
        const w = f();
        if (!w) {
          c = !0;
          return
        }
        const {
          paddingBottom: v,
          paddingTop: C,
          lineHeight: _
        } = w.style, k = Math.ceil((Number(e.rows) + .5) * d(_) + d(C) + d(v));
        k < w.offsetHeight ? (a.value = !0, o.value = m(w, k)) : (a.value = !1, o.value = e.content), document.body.removeChild(w)
      },
      p = (w = !s.value) => {
        s.value = w
      },
      y = w => {
        p(), t("clickAction", w)
      },
      b = () => {
        const w = n.action ? n.action({
          expanded: s.value
        }) : u.value;
        return h("span", {
          ref: r,
          class: Hu("action"),
          onClick: y
        }, [w])
      };
    return at(() => {
      g(), n.action && Oe(g)
    }), Cn(() => {
      c && (c = !1, g())
    }), re([tn, () => [e.content, e.rows, e.position]], g), $e({
      toggle: p
    }), () => h("div", {
      ref: l,
      class: Hu()
    }, [s.value ? e.content : o.value, a.value ? b() : null])
  }
});
const wT = ee(bT),
  [CT] = Y("time-picker"),
  Uu = e => /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(e),
  _T = ["hour", "minute", "second"],
  kT = ke({}, Ph, {
    minHour: ge(0),
    maxHour: ge(23),
    minMinute: ge(0),
    maxMinute: ge(59),
    minSecond: ge(0),
    maxSecond: ge(59),
    minTime: {
      type: String,
      validator: Uu
    },
    maxTime: {
      type: String,
      validator: Uu
    },
    columnsType: {
      type: Array,
      default: () => ["hour", "minute"]
    },
    filter: Function
  });
var ST = K({
  name: CT,
  props: kT,
  emits: ["confirm", "cancel", "change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(e.modelValue),
      s = F(),
      a = m => {
        const g = m.split(":");
        return _T.map((p, y) => e.columnsType.includes(p) ? g[y] : "00")
      },
      l = () => {
        var m;
        return (m = s.value) == null ? void 0 : m.confirm()
      },
      r = () => o.value,
      c = N(() => {
        let {
          minHour: m,
          maxHour: g,
          minMinute: p,
          maxMinute: y,
          minSecond: b,
          maxSecond: w
        } = e;
        if (e.minTime || e.maxTime) {
          const v = {
            hour: 0,
            minute: 0,
            second: 0
          };
          e.columnsType.forEach((k, I) => {
            var D;
            v[k] = (D = o.value[I]) != null ? D : 0
          });
          const {
            hour: C,
            minute: _
          } = v;
          if (e.minTime) {
            const [k, I, D] = a(e.minTime);
            m = k, p = +C <= +m ? I : "00", b = +C <= +m && +_ <= +p ? D : "00"
          }
          if (e.maxTime) {
            const [k, I, D] = a(e.maxTime);
            g = k, y = +C >= +g ? I : "59", w = +C >= +g && +_ >= +y ? D : "59"
          }
        }
        return e.columnsType.map(v => {
          const {
            filter: C,
            formatter: _
          } = e;
          switch (v) {
            case "hour":
              return si(+m, +g, v, _, C, o.value);
            case "minute":
              return si(+p, +y, v, _, C, o.value);
            case "second":
              return si(+b, +w, v, _, C, o.value);
            default:
              return []
          }
        })
      });
    re(o, m => {
      pn(m, e.modelValue) || t("update:modelValue", m)
    }), re(() => e.modelValue, m => {
      m = Rh(m, c.value), pn(m, o.value) || (o.value = m)
    }, {
      immediate: !0
    });
    const u = (...m) => t("change", ...m),
      d = (...m) => t("cancel", ...m),
      f = (...m) => t("confirm", ...m);
    return $e({
      confirm: l,
      getSelectedTime: r
    }), () => h(xa, De({
      ref: s,
      modelValue: o.value,
      "onUpdate:modelValue": m => o.value = m,
      columns: c.value,
      onChange: u,
      onCancel: d,
      onConfirm: f
    }, Ve(e, Oh)), n)
  }
});
const TT = ee(ST),
  [xT, Go] = Y("tree-select"),
  AT = {
    max: ge(1 / 0),
    items: Xe(),
    height: ge(300),
    selectedIcon: te("success"),
    mainActiveIndex: ge(0),
    activeId: {
      type: [Number, String, Array],
      default: 0
    }
  };
var ET = K({
  name: xT,
  props: AT,
  emits: ["clickNav", "clickItem", "update:activeId", "update:mainActiveIndex"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = u => Array.isArray(e.activeId) ? e.activeId.includes(u) : e.activeId === u,
      s = u => {
        const d = () => {
          if (u.disabled) return;
          let f;
          if (Array.isArray(e.activeId)) {
            f = e.activeId.slice();
            const m = f.indexOf(u.id);
            m !== -1 ? f.splice(m, 1) : f.length < +e.max && f.push(u.id)
          } else f = u.id;
          t("update:activeId", f), t("clickItem", u)
        };
        return h("div", {
          key: u.id,
          class: ["van-ellipsis", Go("item", {
            active: o(u.id),
            disabled: u.disabled
          })],
          onClick: d
        }, [u.text, o(u.id) && h(Pe, {
          name: e.selectedIcon,
          class: Go("selected")
        }, null)])
      },
      a = u => {
        t("update:mainActiveIndex", u)
      },
      l = u => t("clickNav", u),
      r = () => {
        const u = e.items.map(d => h(im, {
          dot: d.dot,
          badge: d.badge,
          class: [Go("nav-item"), d.className],
          disabled: d.disabled,
          onClick: l
        }, {
          title: () => n["nav-text"] ? n["nav-text"](d) : d.text
        }));
        return h(om, {
          class: Go("nav"),
          modelValue: e.mainActiveIndex,
          onChange: a
        }, {
          default: () => [u]
        })
      },
      c = () => {
        if (n.content) return n.content();
        const u = e.items[+e.mainActiveIndex] || {};
        if (u.children) return u.children.map(s)
      };
    return () => h("div", {
      class: Go(),
      style: {
        height: Ie(e.height)
      }
    }, [r(), h("div", {
      class: Go("content")
    }, [c()])])
  }
});
const IT = ee(ET),
  [PT, ct, OT] = Y("uploader");

function Wu(e, t) {
  return new Promise(n => {
    if (t === "file") {
      n();
      return
    }
    const o = new FileReader;
    o.onload = s => {
      n(s.target.result)
    }, t === "dataUrl" ? o.readAsDataURL(e) : t === "text" && o.readAsText(e)
  })
}

function hm(e, t) {
  return Us(e).some(n => n.file ? ci(t) ? t(n.file) : n.file.size > +t : !1)
}

function BT(e, t) {
  const n = [],
    o = [];
  return e.forEach(s => {
    hm(s, t) ? o.push(s) : n.push(s)
  }), {
    valid: n,
    invalid: o
  }
}
const RT = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,
  DT = e => RT.test(e);

function mm(e) {
  return e.isImage ? !0 : e.file && e.file.type ? e.file.type.indexOf("image") === 0 : e.url ? DT(e.url) : typeof e.content == "string" ? e.content.indexOf("data:image") === 0 : !1
}
var $T = K({
  props: {
    name: Z,
    item: gt(Object),
    index: Number,
    imageFit: String,
    lazyLoad: Boolean,
    deletable: Boolean,
    reupload: Boolean,
    previewSize: [Number, String, Array],
    beforeDelete: Function
  },
  emits: ["delete", "preview", "reupload"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = () => {
        const {
          status: d,
          message: f
        } = e.item;
        if (d === "uploading" || d === "failed") {
          const m = d === "failed" ? h(Pe, {
              name: "close",
              class: ct("mask-icon")
            }, null) : h(rn, {
              class: ct("loading")
            }, null),
            g = Fe(f) && f !== "";
          return h("div", {
            class: ct("mask")
          }, [m, g && h("div", {
            class: ct("mask-message")
          }, [f])])
        }
      },
      s = d => {
        const {
          name: f,
          item: m,
          index: g,
          beforeDelete: p
        } = e;
        d.stopPropagation(), yo(p, {
          args: [m, {
            name: f,
            index: g
          }],
          done: () => t("delete")
        })
      },
      a = () => t("preview"),
      l = () => t("reupload"),
      r = () => {
        if (e.deletable && e.item.status !== "uploading") {
          const d = n["preview-delete"];
          return h("div", {
            role: "button",
            class: ct("preview-delete", {
              shadow: !d
            }),
            tabindex: 0,
            "aria-label": OT("delete"),
            onClick: s
          }, [d ? d() : h(Pe, {
            name: "cross",
            class: ct("preview-delete-icon")
          }, null)])
        }
      },
      c = () => {
        if (n["preview-cover"]) {
          const {
            index: d,
            item: f
          } = e;
          return h("div", {
            class: ct("preview-cover")
          }, [n["preview-cover"](ke({
            index: d
          }, f))])
        }
      },
      u = () => {
        const {
          item: d,
          lazyLoad: f,
          imageFit: m,
          previewSize: g,
          reupload: p
        } = e;
        return mm(d) ? h(Ia, {
          fit: m,
          src: d.objectUrl || d.content || d.url,
          class: ct("preview-image"),
          width: Array.isArray(g) ? g[0] : g,
          height: Array.isArray(g) ? g[1] : g,
          lazyLoad: f,
          onClick: p ? l : a
        }, {
          default: c
        }) : h("div", {
          class: ct("file"),
          style: Hn(e.previewSize)
        }, [h(Pe, {
          class: ct("file-icon"),
          name: "description"
        }, null), h("div", {
          class: [ct("file-name"), "van-ellipsis"]
        }, [d.file ? d.file.name : d.url]), c()])
      };
    return () => h("div", {
      class: ct("preview")
    }, [u(), o(), r()])
  }
});
const MT = {
  name: ge(""),
  accept: te("image/*"),
  capture: String,
  multiple: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  lazyLoad: Boolean,
  maxCount: ge(1 / 0),
  imageFit: te("cover"),
  resultType: te("dataUrl"),
  uploadIcon: te("photograph"),
  uploadText: String,
  deletable: j,
  reupload: Boolean,
  afterRead: Function,
  showUpload: j,
  modelValue: Xe(),
  beforeRead: Function,
  beforeDelete: Function,
  previewSize: [Number, String, Array],
  previewImage: j,
  previewOptions: Object,
  previewFullImage: j,
  maxSize: {
    type: [Number, String, Function],
    default: 1 / 0
  }
};
var LT = K({
  name: PT,
  props: MT,
  emits: ["delete", "oversize", "clickUpload", "closePreview", "clickPreview", "clickReupload", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = [],
      a = F(-1),
      l = F(!1),
      r = (S = e.modelValue.length) => ({
        name: e.name,
        index: S
      }),
      c = () => {
        o.value && (o.value.value = "")
      },
      u = S => {
        if (c(), hm(S, e.maxSize))
          if (Array.isArray(S)) {
            const B = BT(S, e.maxSize);
            if (S = B.valid, t("oversize", B.invalid, r()), !S.length) return
          } else {
            t("oversize", S, r());
            return
          } if (S = Ze(S), a.value > -1) {
          const B = [...e.modelValue];
          B.splice(a.value, 1, S), t("update:modelValue", B), a.value = -1
        } else t("update:modelValue", [...e.modelValue, ...Us(S)]);
        e.afterRead && e.afterRead(S, r())
      },
      d = S => {
        const {
          maxCount: B,
          modelValue: R,
          resultType: x
        } = e;
        if (Array.isArray(S)) {
          const P = +B - R.length;
          S.length > P && (S = S.slice(0, P)), Promise.all(S.map(M => Wu(M, x))).then(M => {
            const J = S.map((ce, W) => {
              const ne = {
                file: ce,
                status: "",
                message: "",
                objectUrl: URL.createObjectURL(ce)
              };
              return M[W] && (ne.content = M[W]), ne
            });
            u(J)
          })
        } else Wu(S, x).then(P => {
          const M = {
            file: S,
            status: "",
            message: "",
            objectUrl: URL.createObjectURL(S)
          };
          P && (M.content = P), u(M)
        })
      },
      f = S => {
        const {
          files: B
        } = S.target;
        if (e.disabled || !B || !B.length) return;
        const R = B.length === 1 ? B[0] : [].slice.call(B);
        if (e.beforeRead) {
          const x = e.beforeRead(R, r());
          if (!x) {
            c();
            return
          }
          if (Zl(x)) {
            x.then(P => {
              d(P || R)
            }).catch(c);
            return
          }
        }
        d(R)
      };
    let m;
    const g = () => t("closePreview"),
      p = S => {
        if (e.previewFullImage) {
          const B = e.modelValue.filter(mm),
            R = B.map(x => (x.objectUrl && !x.url && x.status !== "failed" && (x.url = x.objectUrl, s.push(x.url)), x.url)).filter(Boolean);
          m = _C(ke({
            images: R,
            startPosition: B.indexOf(S),
            onClose: g
          }, e.previewOptions))
        }
      },
      y = () => {
        m && m.close()
      },
      b = (S, B) => {
        const R = e.modelValue.slice(0);
        R.splice(B, 1), t("update:modelValue", R), t("delete", S, r(B))
      },
      w = S => {
        l.value = !0, a.value = S, Oe(() => D())
      },
      v = () => {
        l.value || (a.value = -1), l.value = !1
      },
      C = (S, B) => {
        const R = ["imageFit", "deletable", "reupload", "previewSize", "beforeDelete"],
          x = ke(Ve(e, R), Ve(S, R, !0));
        return h($T, De({
          item: S,
          index: B,
          onClick: () => t(e.reupload ? "clickReupload" : "clickPreview", S, r(B)),
          onDelete: () => b(S, B),
          onPreview: () => p(S),
          onReupload: () => w(B)
        }, Ve(e, ["name", "lazyLoad"]), x), Ve(n, ["preview-cover", "preview-delete"]))
      },
      _ = () => {
        if (e.previewImage) return e.modelValue.map(C)
      },
      k = S => t("clickUpload", S),
      I = () => {
        const S = e.modelValue.length < +e.maxCount,
          B = e.readonly ? null : h("input", {
            ref: o,
            type: "file",
            class: ct("input"),
            accept: e.accept,
            capture: e.capture,
            multiple: e.multiple && a.value === -1,
            disabled: e.disabled,
            onChange: f,
            onClick: v
          }, null);
        return n.default ? rt(h("div", {
          class: ct("input-wrapper"),
          onClick: k
        }, [n.default(), B]), [
          [dt, S]
        ]) : rt(h("div", {
          class: ct("upload", {
            readonly: e.readonly
          }),
          style: Hn(e.previewSize),
          onClick: k
        }, [h(Pe, {
          name: e.uploadIcon,
          class: ct("upload-icon")
        }, null), e.uploadText && h("span", {
          class: ct("upload-text")
        }, [e.uploadText]), B]), [
          [dt, e.showUpload && S]
        ])
      },
      D = () => {
        o.value && !e.disabled && o.value.click()
      };
    return kn(() => {
      s.forEach(S => URL.revokeObjectURL(S))
    }), $e({
      chooseFile: D,
      reuploadFile: w,
      closeImagePreview: y
    }), vo(() => e.modelValue), () => h("div", {
      class: ct()
    }, [h("div", {
      class: ct("wrapper", {
        disabled: e.disabled
      })
    }, [_(), I()])])
  }
});
const NT = ee(LT),
  [FT, ju] = Y("watermark"),
  zT = {
    gapX: lt(0),
    gapY: lt(0),
    image: String,
    width: lt(100),
    height: lt(100),
    rotate: ge(-22),
    zIndex: Z,
    content: String,
    opacity: Z,
    fullPage: j,
    textColor: te("#dcdee0")
  };
var VT = K({
  name: FT,
  props: zT,
  setup(e, {
    slots: t
  }) {
    const n = F(),
      o = F(""),
      s = F(""),
      a = () => {
        const c = {
            transformOrigin: "center",
            transform: `rotate(${e.rotate}deg)`
          },
          u = () => e.image && !t.content ? h("image", {
            href: s.value,
            "xlink:href": s.value,
            x: "0",
            y: "0",
            width: e.width,
            height: e.height,
            style: c
          }, null) : h("foreignObject", {
            x: "0",
            y: "0",
            width: e.width,
            height: e.height
          }, [h("div", {
            xmlns: "http://www.w3.org/1999/xhtml",
            style: c
          }, [t.content ? t.content() : h("span", {
            style: {
              color: e.textColor
            }
          }, [e.content])])]),
          d = e.width + e.gapX,
          f = e.height + e.gapY;
        return h("svg", {
          viewBox: `0 0 ${d} ${f}`,
          width: d,
          height: f,
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          style: {
            padding: `0 ${e.gapX}px ${e.gapY}px 0`,
            opacity: e.opacity
          }
        }, [u()])
      },
      l = c => {
        const u = document.createElement("canvas"),
          d = new Image;
        d.crossOrigin = "anonymous", d.referrerPolicy = "no-referrer", d.onload = () => {
          u.width = d.naturalWidth, u.height = d.naturalHeight;
          const f = u.getContext("2d");
          f == null || f.drawImage(d, 0, 0), s.value = u.toDataURL()
        }, d.src = c
      },
      r = c => {
        const u = new Blob([c], {
          type: "image/svg+xml"
        });
        return URL.createObjectURL(u)
      };
    return vi(() => {
      e.image && l(e.image)
    }), re(() => [s.value, e.content, e.textColor, e.height, e.width, e.rotate, e.gapX, e.gapY], () => {
      Oe(() => {
        n.value && (o.value && URL.revokeObjectURL(o.value), o.value = r(n.value.innerHTML))
      })
    }, {
      immediate: !0
    }), gi(() => {
      o.value && URL.revokeObjectURL(o.value)
    }), () => {
      const c = ke({
        backgroundImage: `url(${o.value})`
      }, Un(e.zIndex));
      return h("div", {
        class: ju({
          full: e.fullPage
        }),
        style: c
      }, [h("div", {
        class: ju("wrapper"),
        ref: n
      }, [a()])])
    }
  }
});
const HT = ee(VT),
  UT = "4.9.7";

function WT(e) {
  [Zf, Ml, Pp, Up, db, $b, bh, zb, Lo, jb, Tt, s1, f1, y1, un, C1, Lr, Ah, A1, $1, F1, W1, j1, q1, J1, iw, uw, Hl, bw, xw, Pw, $w, zw, Qw, Kw, Nh, $n, Zw, tC, Ir, sC, cC, hC, Pe, Ia, kC, OC, BC, LC, rn, Uf, VC, jC, t_, c_, oh, h_, y_, xa, p_, vk, cn, wk, xk, Mr, Dr, Ok, zk, Vk, Qk, eS, om, im, dS, OS, am, $S, lm, sm, FS, US, YS, JS, eT, uh, sT, Ar, cT, Er, Rr, es, fT, vT, Sa, Ea, wT, TT, nb, IT, NT, HT].forEach(n => {
    n.install ? e.use(n) : n.name && e.component(n.name, n)
  })
}
var jT = {
  install: WT,
  version: UT
};
const QT = "modulepreload",
  KT = function(e) {
    return "/" + e
  },
  Qu = {},
  wt = function(t, n, o) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const l = document.querySelector("meta[property=csp-nonce]"),
        r = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
      s = Promise.allSettled(n.map(c => {
        if (c = KT(c), c in Qu) return;
        Qu[c] = !0;
        const u = c.endsWith(".css"),
          d = u ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${c}"]${d}`)) return;
        const f = document.createElement("link");
        if (f.rel = u ? "stylesheet" : QT, u || (f.as = "script"), f.crossOrigin = "", f.href = c, r && f.setAttribute("nonce", r), document.head.appendChild(f), u) return new Promise((m, g) => {
          f.addEventListener("load", m), f.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${c}`)))
        })
      }))
    }

    function a(l) {
      const r = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (r.payload = l, window.dispatchEvent(r), !r.defaultPrevented) throw l
    }
    return s.then(l => {
      for (const r of l || []) r.status === "rejected" && a(r.reason);
      return t().catch(a)
    })
  },
  vt = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, s] of t) n[o] = s;
    return n
  },
  YT = {
    name: "TermsOfUse"
  },
  qT = {
    class: "container",
    style: {
      "padding-bottom": "100px"
    }
  };

function GT(e, t, n, o, s, a) {
  return V(), q("div", qT, t[0] || (t[0] = [Mv('<h1 class="center" data-v-926f3a68>Zoo Terms of Use</h1><div class="center" data-v-926f3a68>Last Updated: 12/12/2024</div><h2 data-v-926f3a68>1. Definitions</h2> The following sections define the capitalised definitions of expressions that begin with capital letters. These definitions should be applied consistently, regardless of whether the expressions are presented in the singular or plural: <br data-v-926f3a68>• Zoo / The App - is a Mini App available on Telegram, named Zoo, with its usage rules outlined in this document. <br data-v-926f3a68>• Company - the legal entity named Zorimal Ltd (#2166965, Intershore Chambers, Road Town, Tortola, VG1110). <br data-v-926f3a68>• Airdrop - the distribution of Tokens to Users of the App, carried out at the Company&#39;s discretion. In case of Token withdrawal after Airdrop, a fee will be deducted by Third-Party Services (e.g., blockchain fee and other fees). The Airdrop is not intended for financial benefit, as the App serves an entertainment purpose and may be discontinued at any time. <br data-v-926f3a68>• Alliance - consolidation of the App Users in the App. <br data-v-926f3a68>• In-game Coin «Animal Feed» / Coin - a coin that Users may obtain by engaging with the App&#39;s functionality and/or purchasing them with Telegram Stars. These In-game Coins are designed solely for use within the App, with their usage governed by the Terms and the App&#39;s mechanics. <br data-v-926f3a68>• Friend - a Telegram messenger user who received an invitation link from you and who is not a member of the App at the time of clicking the invitation link. <br data-v-926f3a68>• Interface - the visible part of the App. <br data-v-926f3a68>• Token Zoo / $ZOO - a token that the User can get in case of Airdrop. <br data-v-926f3a68>• Task - instructions and/or tasks given to Users for the purpose of completing them and obtaining rewards in the form of In-game Coin in the App in accordance with the Terms. <br data-v-926f3a68>• Third-Party Services - all third-party services to which the Zoo provides access. <br data-v-926f3a68>• You / you / User - the individual accessing or using the Zoo. Each User is permitted to create and maintain only one account in the App. <h2 data-v-926f3a68>2. Acceptance of Terms</h2> These Zoo Terms of Use, and any additional policies or terms mentioned in them, establish a legally binding agreement (collectively, the ‘Terms’) between you and Zorimal Ltd, a company incorporated in the British Virgin Islands (#2166965, Intershore Chambers, Road Town, Tortola, VG1110). This agreement regulates your access to and use of the App. <br data-v-926f3a68>By accessing or using Zoo, you acknowledge that you have read, understood and agreed to be bound by these Terms, including our Privacy Policy. Your continued use of the App serves to confirm your agreement to these Terms and any subsequent changes or updates to them. <br data-v-926f3a68>The App is not intended for distribution or use by individuals or entities in jurisdictions where such actions would breach local laws or regulations or impose registration or compliance obligations on us. As a result, it is your sole responsibility to ensure that your use of the App complies with all applicable laws in your jurisdiction. <br data-v-926f3a68>You understand and agree that the use of multiple accounts for a single User is strictly prohibited. Violation of this rule may result in suspension or permanent banning of all associated accounts. <br data-v-926f3a68>You agree to obtain prior approval before sending a Telegram user an invitation link to our App as well as other promotional links to our App. The Company is not responsible for the actions of Users who violate this requirement. <br data-v-926f3a68>Use of the App by residents of the United States is strictly prohibited. By accessing or using the App, you certify that you are not a resident of the United States. If you become a resident of the United States or become aware of anyone using the App in the United States, you should immediately report it to us. <br data-v-926f3a68>You acknowledge and accept that if it is discovered you have misrepresented your residency, citizenship, or location, the Company reserves the right to take appropriate actions, including but not limited to, immediate termination of your access to the App. Furthermore, you accept full responsibility for any failure to disclose your U.S. location and agree to bear any consequences arising from regulatory claims or actions brought by U.S. authorities against the Company. <h2 data-v-926f3a68>3. The App&#39;s Mechanics</h2><h3 data-v-926f3a68>3.1 General</h3> Zoo is a Mini App on Telegram that allows Users to create their own in-game zoo by purchasing in-game animals. The User is given the ability to join Alliances, invite Friends and complete Tasks. The User has the ability to earn Token Zoo and receive In-game Coin “Animal Feed” in the ways described below. <h3 data-v-926f3a68>3.2 In-game Coin “Animal Feed”</h3> Using In-game Coin “Animal Feed” the User can realize the main functionality of the App - to develop the game zoo by purchasing animals and increasing the level of their enclosures. The User can use other functionality of the App with the help of Coin, which is displayed in the App Interface. The User Coin balance is displayed in the App Interface. <br data-v-926f3a68>In-game Coin “Animal Feed” can be obtained in the following ways: <br data-v-926f3a68>• Inviting Friends: The User can receive In-game Coins “Animal Feed” by sending an invitation link to a Friend who followed the link in the App. The number of Coins and the conditions for receiving them for inviting friends is displayed in the App Interface. <br data-v-926f3a68>• Completion of Tasks: The User can receive In-game Coin “Animal Feed” by completing certain Tasks. Tasks are displayed in the App Interface. <br data-v-926f3a68>• Development of the Alliance: The User can create an Alliance or join an existing Alliance by paying In-game Coin “Animal Feed”. For the development of the Alliance, the User can receive In-game Coin “Animal Feed”. <br data-v-926f3a68>• Purchase using Telegram Stars: The User buys In-game Coins “Animal Feed” through Telegram Stars. The cost of buying Сoins is displayed in the App Interface. <br data-v-926f3a68>• The amount of Coins you can get with the above actions is displayed in the App Interface. In-game Coins are not cash and their use is limited by the Terms and App mechanics. <br data-v-926f3a68>Purchase using Telegram Stars: The User buys In-game Coins “Animal Feed” through Telegram Stars. The cost of buying Сoins is displayed in the App Interface. The User is strictly forbidden to refund by any technical means to Telegram Stars that the User spent on in-app purchases. <h3 data-v-926f3a68>3.3 Token Zoo</h3> The amount of Tokens Zoo of the User depends on the number and level of animal’s enclosures in zoo, as well as on the level of Alliance in which User can be a member. Each animal brings a certain amount of Tokens Zoo in a certain amount of time depending on the level of animal’s enclosures. The User Token Zoo balance is displayed in the App Interface. <br data-v-926f3a68>The User can increase the number of Tokens Zoo earned from each animal enclosure in the following ways: <br data-v-926f3a68>• Increasing level of animal’s enclosures: The User can upgrade the level of the animal enclosure with In-game Coins “Animal Feed”. Each new level increases the number of Tokens Zoo that can be obtained. <br data-v-926f3a68>• Join the Alliance: Alliances are divided by levels. The level of an Alliance in which the User participates affects the number of bonuses that increase your Token Zoo accumulation. A User can only be a member of one Alliance. The list of Alliances and the amount of bonuses from participation in them is displayed in the App Interface. <br data-v-926f3a68>• Using boosts: Boosts allow the User to increase the number of Tokens Zoo earned from animal enclosures for a certain amount of time. The boost conditions are displayed in the App Interface. <br data-v-926f3a68>You can receive earned Tokens Zoo during the Airdrop, which will happen on dates determined by the Company. The number of Tokens Zoo does not depend on the number of your In-game Coins in the App. <h2 data-v-926f3a68>4. Prohibited Activities</h2> Any form of technical automation, including but not limited to bots, scripts, or other automated tools, used to interact with, manipulate, or exploit the App is strictly prohibited. This includes, but is not limited to, launching bot farms, automated systems, or coordinated accounts to generate resources for the purpose of unfairly benefiting another account or alliance. Actions intended to obscure violations, such as funneling resources or benefits to a main account while maintaining the appearance of compliance, are likewise prohibited. Any disruption to the mechanics of the App, including practices such as refunding Telegram Stars for in-app purchases or similar exploits, will result in immediate account suspension or permanent ban without prior notice. <h2 data-v-926f3a68>5. In-App Purchases</h2> All In-App purchases are for entertainment purposes only. By making a purchase, you do so on a voluntary basis and take full responsibility for your decisions. The App disclaims any responsibility for financial or other consequences caused by in-app purchases. <h2 data-v-926f3a68>6. Changes to Features and Balances</h2> We reserve the right to modify, adjust, or remove any App features, mechanics, balances, or other functionalities at any time without prior notice. Such changes are made at our sole discretion to improve the App or ensure fair usage. Continued use of the App following any changes constitutes your acceptance of the updated features or mechanics. <h2 data-v-926f3a68>7. Intellectual Property</h2> Unless explicitly stated otherwise, the App, along with all content and materials within it —including but not limited to designs (structural or landscape), text, graphics (static or animated), pictures, data, software, sound files (including music and recordings), audiovisual effects, and their arrangement — are the proprietary property of the Company, its affiliates, licensors, or users, as applicable. <br data-v-926f3a68>The Zoo logo, as well as the names, services, logos, slogans, and trade names associated with Zorimal Ltd products, are either owned by the Company or used under license and are safeguarded by copyright, trademark laws, and international intellectual property agreements. <br data-v-926f3a68>Unless explicitly authorized by these Terms, no part of the App or its content may be duplicated, reproduced, compiled, republished, uploaded, shared, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise used for commercial purposes without obtaining prior written consent from the Company. Any mention of products, services, trademarks, manufacturers, or suppliers is provided solely for reference and does not signify endorsement, sponsorship, or recommendation by Zorimal Ltd. <h2 data-v-926f3a68>8. Disclaimer</h2> General Disclaimer: Zoo is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without any guarantees or assurances, whether explicit or implied, regarding its functionality, information, content, materials, or products contained within. By using the App, you acknowledge and agree that you do so entirely at your own risk and solely for entertainment purposes. <br data-v-926f3a68>No Warranty for Performance: Zorimal Ltd makes no guarantees that the App will fulfill your particular needs, operate without interruption, be timely, secure, or free from errors. We also do not guarantee the outcomes from using the App or the accuracy and reliability of any information obtained through it. <br data-v-926f3a68>No Warranty for Technical Issues: Zorimal Ltd assumes no liability for any technical issues, including but not limited to problems with blockchain technology, server failures, software glitches, artificial intelligence errors, or connectivity disruptions that could impact the App&#39;s performance or availability. <br data-v-926f3a68>No Liability for User Conduct: Zorimal Ltd does not support, guarantee, or take responsibility for the actions or conduct of App users. The Company is not accountable for any content created by users or their activities within the App. <br data-v-926f3a68>No Warranty for Third-Party Services: The App may contain links to third-party websites or services that are not owned or managed by Zorimal Ltd. The Company has no control over and accepts no responsibility for the content, privacy policies, or practices of these external websites or services. We advise you to review the terms and policies of any third-party services you engage with. By using such links, you acknowledge and agree that Zorimal Ltd is not liable for any damages or losses arising from your use of or reliance on the content, products, or services provided by these third parties. <br data-v-926f3a68>Limitation of Liability for Damages: To the maximum extent allowed by law, Zorimal Ltd disclaims liability for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, goodwill, data, or other intangible losses. This limitation applies to damages resulting from (i) your use or inability to use the App, (ii) unauthorized access to or modification of your data or transmissions, (iii) actions or statements by third parties within the App, or (iv) any other matter related to the App. <h2 data-v-926f3a68>9. Privacy</h2> Details about how we collect and use your personal information are outlined in our Privacy Policy. By using the App, you agree to the collection and use of your personal information as described in the Privacy Policy. <h2 data-v-926f3a68>10. Termination</h2> We reserve the right to revoke or suspend your access to the App at any time, without prior notice or responsibility, for any reason, including but not limited to violations of these Terms. Once terminated, your permission to use the App will cease immediately. Any in-game purchases and achievements will be cancelled and unavailable to you. Any sections of these Terms that are meant to remain in effect after termination will continue to apply, including but not limited to provisions on ownership rights, disclaimers of warranties, indemnity obligations, and limitations of liability. <h2 data-v-926f3a68>11. Indemnification</h2> You agree to defend, indemnify, and protect the Company, along with its officers, directors, employees, and agents, from any claims, liabilities, damages, losses, or costs — such as reasonable legal and accounting expenses — that result from or relate to your use of the App or any breach of these Terms on your part. <h2 data-v-926f3a68>12. Governing Law</h2> This Terms is governed by the laws of the British Virgin Islands and will be interpreted in accordance with those laws, without regard to their conflict-of-law rules. <h2 data-v-926f3a68>13. Dispute Resolution</h2> In case of a dispute, you agree to first attempt to resolve the issue amicably by submitting your complaint to us at dispute@zoo.team. We will provide a response within 30 calendar days. If the matter cannot be resolved through negotiation, it will be decided in the courts of the British Virgin Islands. <h2 data-v-926f3a68>14. Changes to Terms</h2> We retain the right to revise or amend these terms at any time. By continuing to use or access the App after the updated terms take effect, you acknowledge and accept the changes. <h2 data-v-926f3a68>15. Binding Terms of Use</h2> By accepting these Terms, you also agree to comply with the <a href="https://telegram.org/tos/mini-apps" data-v-926f3a68>Telegram Mini App Terms of Use</a>. <h2 data-v-926f3a68>16. Contact Us</h2> For any questions about these Terms or to share ideas, suggestions, or feedback, please contact us at support@zoo.team. ', 113)]))
}
const ZT = vt(YT, [
    ["render", GT],
    ["__scopeId", "data-v-926f3a68"]
  ]),
  XT = "/assets/onboarding_1-C7MzEQXq.jpg",
  JT = "/assets/onboarding_2-UoTZ07w1.jpg",
  e2 = "/assets/onboarding_3-CzE3Yyga.jpg",
  t2 = {
    components: {
      TermsOfUse: ZT
    },
    async created() {},
    props: {},
    data: function() {
      return {
        isUserAcceptTermsOfUse: !1,
        isShowTermsOfUse: !1
      }
    },
    computed: {
      isEnglish() {
        return this.uSettings.lang === "en"
      }
    },
    watch: {},
    methods: {
      next() {
        this.$refs.swipeOnboardingStart.next()
      }
    }
  },
  n2 = {
    class: "onboardingStart center",
    style: {
      direction: "ltr"
    }
  },
  o2 = {
    class: "con"
  },
  i2 = {
    class: "zTextShadow2white"
  },
  s2 = {
    class: "panel"
  },
  a2 = {
    class: "center buttonNextContainer"
  },
  l2 = {
    class: "con"
  },
  r2 = {
    class: "zTextShadow2white"
  },
  c2 = {
    class: "panel"
  },
  u2 = {
    class: "center buttonNextContainer"
  },
  d2 = {
    class: "con"
  },
  f2 = {
    class: "panel"
  },
  h2 = {
    class: "center buttonNextContainer"
  },
  m2 = {
    class: "con"
  },
  g2 = {
    class: "zTextShadow2white"
  },
  v2 = {
    class: "flyBtn",
    style: {
      "margin-bottom": "-20px",
      "z-index": "10"
    }
  },
  y2 = {
    class: "flyBtnTitle"
  },
  p2 = {
    class: "panel"
  },
  b2 = {
    class: "center buttonNextContainer"
  },
  w2 = {
    class: "con"
  },
  C2 = {
    class: "zTextShadow2white"
  },
  _2 = {
    class: "panel"
  },
  k2 = {
    class: "center buttonNextContainer"
  },
  S2 = {
    class: "termsOfUse"
  },
  T2 = {
    class: "termsContainer"
  };

function x2(e, t, n, o, s, a) {
  const l = me("van-button"),
    r = me("van-swipe-item"),
    c = me("van-checkbox"),
    u = me("van-swipe"),
    d = me("TermsOfUse"),
    f = me("van-popup");
  return V(), q("div", n2, [h(u, {
    class: "onboardingSwipe",
    autoplay: 0,
    loop: !1,
    ref: "swipeOnboardingStart",
    style: {
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: "0",
      left: "0"
    },
    duration: e.isRtl ? 0 : 500,
    touchable: !e.isRtl
  }, {
    default: ae(() => [h(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: ae(() => [T("div", o2, [T("h2", i2, $(e.t("Welcome to Zoo!")), 1), t[4] || (t[4] = T("img", {
        src: XT,
        alt: "",
        width: "100%"
      }, null, -1)), T("p", s2, $(e.t("Here, you'll build your very own Zoo!")), 1)]), T("div", a2, [h(l, {
        class: "buttonNext",
        icon: "arrow",
        "icon-position": "right",
        onClick: a.next,
        type: "success",
        round: ""
      }, {
        default: ae(() => [he($(e.t("Next")), 1)]),
        _: 1
      }, 8, ["onClick"])])]),
      _: 1
    }, 8, ["class"]), h(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: ae(() => [T("div", l2, [T("h2", r2, $(e.t("Earn coins and upgrade your Zoo")), 1), t[5] || (t[5] = T("img", {
        src: JT,
        alt: "",
        width: "100%"
      }, null, -1)), T("p", c2, $(e.t("The bigger and better your Zoo, the more it mines {TOKEN_NAME}.", {
        TOKEN_NAME: e.TOKEN_NAME
      })), 1)]), T("div", u2, [h(l, {
        class: "buttonNext",
        icon: "arrow",
        "icon-position": "right",
        onClick: a.next,
        type: "success",
        round: ""
      }, {
        default: ae(() => [he($(e.t("Next")), 1)]),
        _: 1
      }, 8, ["onClick"])])]),
      _: 1
    }, 8, ["class"]), h(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: ae(() => [T("div", d2, [t[6] || (t[6] = T("h2", {
        class: "zTextShadow2white"
      }, "Airdrop", -1)), t[7] || (t[7] = T("img", {
        src: e2,
        alt: "",
        width: "100%"
      }, null, -1)), T("p", f2, $(e.t("Earn {TOKEN_NAME} tokens through Airdrop based on your progress.", {
        TOKEN_NAME: e.TOKEN_NAME
      })), 1)]), T("div", h2, [h(l, {
        class: "buttonNext",
        icon: "arrow",
        "icon-position": "right",
        onClick: a.next,
        type: "success",
        round: ""
      }, {
        default: ae(() => [he($(e.t("Next")), 1)]),
        _: 1
      }, 8, ["onClick"])])]),
      _: 1
    }, 8, ["class"]), h(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: ae(() => [T("div", m2, [T("h2", g2, $(e.t("Create or Join an Alliance")), 1), T("div", v2, [t[8] || (t[8] = T("div", {
        class: "flyBtnCont"
      }, [T("div", {
        class: "flyBtnIcon",
        style: {
          "background-image": "url('/assets/img/decor/icon_ali.png')"
        }
      })], -1)), T("div", y2, $(e.t("Alliance")), 1)]), T("p", p2, $(e.t("Alliance owners receive {PERCENT}% of all contributions, and members gain significant advantages in mining {TOKEN_NAME} tokens.", {
        PERCENT: e.gameConfig["alliance.bonus.founder"],
        TOKEN_NAME: e.TOKEN_NAME
      })), 1)]), T("div", b2, [h(l, {
        class: "buttonNext",
        icon: "arrow",
        "icon-position": "right",
        onClick: a.next,
        type: "success",
        round: ""
      }, {
        default: ae(() => [he($(e.t("Next")), 1)]),
        _: 1
      }, 8, ["onClick"])])]),
      _: 1
    }, 8, ["class"]), h(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: ae(() => [T("div", w2, [T("h2", C2, $(e.t("We're having fun together")), 1), T("p", _2, $(e.t("Grow your Zoo, complete quests, invite friends, and take part in the {Airdrop}!")), 1)]), T("div", k2, [T("div", S2, [h(c, {
        modelValue: e.isUserAcceptTermsOfUse,
        "onUpdate:modelValue": t[1] || (t[1] = m => e.isUserAcceptTermsOfUse = m)
      }, {
        default: ae(() => [t[9] || (t[9] = he(" I accept the ")), T("span", {
          class: "termsOfUseTitle",
          onClick: t[0] || (t[0] = m => e.isShowTermsOfUse = !0)
        }, "Terms of Use")]),
        _: 1
      }, 8, ["modelValue"])]), h(l, {
        type: "warning",
        round: "",
        icon: "arrow",
        "icon-position": "right",
        onClick: t[2] || (t[2] = m => e._completeOnboarding(e.onBoard.start)),
        disabled: !e.isUserAcceptTermsOfUse
      }, {
        default: ae(() => [he($(e.t("Start")), 1)]),
        _: 1
      }, 8, ["disabled"])])]),
      _: 1
    }, 8, ["class"])]),
    _: 1
  }, 8, ["duration", "touchable"]), h(f, {
    show: e.isShowTermsOfUse,
    "onUpdate:show": t[3] || (t[3] = m => e.isShowTermsOfUse = m),
    class: "termsPopup",
    position: "center",
    closeable: ""
  }, {
    default: ae(() => [T("div", T2, [h(d)])]),
    _: 1
  }, 8, ["show"])])
}
const A2 = vt(t2, [
  ["render", x2],
  ["__scopeId", "data-v-630ce1d4"]
]);

function E2(e) {
  let t = 0;
  const n = new Uint8Array(e.length + 2);
  n.set(e);
  for (let o of n) {
    let s = 128;
    for (; s > 0;) t <<= 1, o & s && (t += 1), s >>= 1, t > 65535 && (t &= 65535, t ^= 4129)
  }
  return new Uint8Array([Math.floor(t / 256), t % 256])
}

function I2(e) {
  return Array.from(e).map(t => t.toString(16).padStart(2, "0")).join("")
}

function P2(e) {
  return btoa(e)
}
class ri {
  constructor(t, n) {
    if (typeof t == "string") {
      const o = ri.parseFriendlyAddress(t);
      t = o.address, n = o.wc
    }
    if (t instanceof Uint8Array || Array.isArray(t)) {
      if (t.length !== 32) throw new Error("Invalid address length");
      this.hashPart = new Uint8Array(t)
    } else if (typeof t == "object" && t.bounceable !== void 0 && t.testOnly !== void 0) this.hashPart = t;
    else throw new Error("Invalid address");
    this.wc = n || 0
  }
  toString(t = this.isUserFriendly, n = this.isUrlSafe, o = this.isBounceable, s = this.isTestOnly) {
    if (t) {
      let a = o ? 17 : 81;
      s && (a |= 128);
      const l = new Uint8Array(34);
      l[0] = a, l[1] = this.wc, l.set(this.hashPart, 2);
      const r = new Uint8Array(36);
      r.set(l), r.set(E2(l), 34);
      let c = P2(String.fromCharCode.apply(null, r));
      return n && (c = c.replace(/\+/g, "-").replace(/\//g, "_")), c
    }
    return this.wc + ":" + I2(this.hashPart)
  }
  static parseFriendlyAddress(t) {
    const n = t.split(":");
    if (n.length !== 2) throw new Error("Invalid address format");
    const o = parseInt(n[0], 10),
      s = ri.parseHex(n[1]);
    return {
      wc: o,
      address: s
    }
  }
  static parseHex(t) {
    if (t.length !== 64) throw new Error("Invalid hex length");
    const n = new Uint8Array(32);
    for (let o = 0; o < 32; o++) n[o] = parseInt(t.substr(o * 2, 2), 16);
    return n
  }
  static toFriendlyAddress(t, n) {
    return `${n}:${ri.toHex(t)}`
  }
  static toHex(t) {
    let n = "";
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      n += (s < 16 ? "0" : "") + s.toString(16)
    }
    return n
  }
}
const O2 = {
    name: "GamePopup",
    props: {
      imgUrl: {
        type: String
      },
      title: {
        type: String
      },
      subtitle: {
        type: String
      },
      closeable: {
        type: Boolean,
        default: !1
      },
      position: {
        type: String,
        default: "bottom"
      },
      rounded: {
        type: Boolean,
        default: !1
      },
      duration: {
        type: Number
      }
    }
  },
  B2 = {
    class: "contentWrapper"
  },
  R2 = {
    class: "content"
  },
  D2 = {
    key: 1
  },
  $2 = {
    key: 3
  },
  M2 = {
    key: 0,
    class: "imgWrapper"
  };

function L2(e, t, n, o, s, a) {
  const l = me("van-popup");
  return V(), Me(l, {
    "close-icon": "cross",
    class: ot(["gamePopup", {
      withImg: n.imgUrl
    }]),
    round: n.rounded,
    closeable: n.closeable,
    position: n.position,
    duration: n.duration
  }, {
    default: ae(() => [T("div", B2, [T("div", R2, [n.title ? Ce("", !0) : Va(e.$slots, "title", {
      key: 0
    }, void 0, !0), n.title ? (V(), q("h1", D2, $(n.title), 1)) : Ce("", !0), n.subtitle ? Ce("", !0) : Va(e.$slots, "subtitle", {
      key: 2
    }, void 0, !0), n.subtitle ? (V(), q("h2", $2, $(n.subtitle), 1)) : Ce("", !0), Va(e.$slots, "default", {}, void 0, !0)])]), n.imgUrl ? (V(), q("div", M2, [T("div", {
      class: "imgTitle",
      style: an({
        backgroundImage: `url(${n.imgUrl})`
      })
    }, null, 4)])) : Ce("", !0)]),
    _: 3
  }, 8, ["class", "round", "closeable", "position", "duration"])
}
const gm = vt(O2, [
    ["render", L2],
    ["__scopeId", "data-v-5796a2f7"]
  ]),
  Wr = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28%2056C43.464%2056%2056%2043.464%2056%2028C56%2012.536%2043.464%200%2028%200C12.536%200%200%2012.536%200%2028C0%2043.464%2012.536%2056%2028%2056Z'%20fill='%230098EA'/%3e%3cpath%20d='M37.5603%2015.6277H18.4386C14.9228%2015.6277%2012.6944%2019.4202%2014.4632%2022.4861L26.2644%2042.9409C27.0345%2044.2765%2028.9644%2044.2765%2029.7345%2042.9409L41.5381%2022.4861C43.3045%2019.4251%2041.0761%2015.6277%2037.5627%2015.6277H37.5603ZM26.2548%2036.8068L23.6847%2031.8327L17.4833%2020.7414C17.0742%2020.0315%2017.5795%2019.1218%2018.4362%2019.1218H26.2524V36.8092L26.2548%2036.8068ZM38.5108%2020.739L32.3118%2031.8351L29.7417%2036.8068V19.1194H37.5579C38.4146%2019.1194%2038.9199%2020.0291%2038.5108%2020.739Z'%20fill='white'/%3e%3c/svg%3e",
  N2 = {
    components: {
      GamePopup: gm
    },
    props: {
      loading: {
        type: Boolean,
        default: !1
      },
      transactionValue: {
        type: Number
      },
      transactionAddress: {
        type: String,
        default: ""
      },
      transactionBtnText: {
        type: String
      },
      isShowTransactionIcon: {
        type: Boolean,
        default: !0
      },
      savedWallet: {
        type: String,
        default: null
      }
    },
    async created() {
      await window.listenTonConnect()
    },
    async mounted() {
      this.wallet = (await window.tonConnectUI()).wallet, this.unsubscribe = (await window.tonConnectUI()).onStatusChange(e => {
        this.wallet = e, this.$emit("wallet-connect-handler", this.wallet)
      })
    },
    async unmounted() {
      this.unsubscribe && this.unsubscribe()
    },
    data: function() {
      return {
        uniqueId: null,
        unsubscribe: null,
        wallet: null,
        isPopupVisible: !1,
        popupStyle: {
          popupBackground: "#fafafa"
        }
      }
    },
    computed: {
      isConnected() {
        return this.savedWallet && this.wallet && this.wallet.account.address === this.savedWallet
      },
      showTransactionButton() {
        var e;
        return this.isConnected && ((e = this.wallet) == null ? void 0 : e.device) && this.transactionValue > 0
      },
      address() {
        return this.isConnected ? this.savedWallet !== null ? this.savedWallet ? new ri(this.savedWallet) : "" : new ri(this.wallet.account.address) : ""
      },
      addressNonBounceable() {
        return this.address.toString(!0, !0, !1, !1)
      },
      addressNonBounceableShort() {
        return this.addressNonBounceable.substring(0, 3) + "...." + this.addressNonBounceable.substring(this.addressNonBounceable.length - 3)
      },
      addressNonBounceableMedium() {
        return this.addressNonBounceable.substring(0, 8) + "...." + this.addressNonBounceable.substring(this.addressNonBounceable.length - 8)
      }
    },
    methods: {
      async connectWallet() {
        this.wallet && await (await window.tonConnectUI()).disconnect(), this.isPopupVisible = !1, await (await window.tonConnectUI()).openModal()
      },
      async handleClick() {
        if (this.isConnected) {
          this.isPopupVisible = !0;
          return
        }
        this.wallet && await (await window.tonConnectUI()).disconnect(), await (await window.tonConnectUI()).openModal()
      },
      async pay() {
        const e = {
          validUntil: Math.floor(Date.now() / 1e3) + 120,
          messages: [{
            address: this.transactionAddress ? this.transactionAddress : this.uTonTransactionAddress,
            amount: (this.transactionValue * 1e9).toString()
          }]
        };
        console.info(">>> send ton transaction", JSON.stringify(e));
        try {
          await (await window.tonConnectUI()).sendTransaction(e), this.$emit("paid", e)
        } catch (t) {
          throw this.$emit("error", t), t
        }
      }
    }
  },
  F2 = {
    class: "ton-wallet"
  },
  z2 = {
    class: "ton-wallet-button-wrapper"
  },
  V2 = {
    style: {
      margin: "0 10px"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "29",
    viewBox: "0 0 28 29",
    fill: "none"
  },
  H2 = {
    class: "wallet-address"
  },
  U2 = {
    style: {
      margin: "0 10px"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "29",
    viewBox: "0 0 28 29",
    fill: "none"
  };

function W2(e, t, n, o, s, a) {
  const l = me("van-icon"),
    r = me("van-button"),
    c = me("game-popup");
  return V(), q("div", F2, [T("div", z2, [a.showTransactionButton ? Ce("", !0) : (V(), Me(r, {
    key: 0,
    onClick: a.handleClick,
    round: "",
    size: "large",
    loading: n.loading,
    "icon-position": "right",
    type: a.isConnected ? "success" : "warning"
  }, {
    icon: ae(() => [(V(), q("svg", V2, t[1] || (t[1] = [T("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z",
      fill: "#FFFFFF"
    }, null, -1)])))]),
    default: ae(() => [a.isConnected ? (V(), Me(l, {
      key: 0,
      name: "checked"
    })) : Ce("", !0), he(" " + $(a.isConnected ? a.addressNonBounceableMedium : e.t("Connect wallet")), 1)]),
    _: 1
  }, 8, ["onClick", "loading", "type"])), a.showTransactionButton ? (V(), Me(r, {
    key: 1,
    round: "",
    type: "success",
    onClick: a.pay,
    loading: n.loading
  }, ff({
    default: ae(() => [he(" " + $(n.transactionBtnText ? n.transactionBtnText : e.t("Make a TON transaction")), 1)]),
    _: 2
  }, [n.isShowTransactionIcon ? {
    name: "icon",
    fn: ae(() => [t[2] || (t[2] = T("img", {
      src: Wr,
      alt: "",
      width: "30px",
      style: {
        margin: "0 10px"
      }
    }, null, -1))]),
    key: "0"
  } : void 0]), 1032, ["onClick", "loading"])) : Ce("", !0)]), h(c, {
    show: e.isPopupVisible,
    "onUpdate:show": t[0] || (t[0] = u => e.isPopupVisible = u),
    rounded: "",
    closeable: "",
    title: e.t("Connected Wallet")
  }, {
    default: ae(() => [T("div", H2, [(V(), q("svg", U2, t[3] || (t[3] = [T("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z",
      fill: "#FFFFFF"
    }, null, -1)]))), he(" " + $(a.addressNonBounceableMedium), 1)]), h(r, {
      round: "",
      onClick: a.connectWallet,
      type: "warning",
      icon: "link-o",
      style: {
        margin: "20px 0 40px 0"
      },
      size: "small"
    }, {
      default: ae(() => [he($(e.t("Connect different wallet")), 1)]),
      _: 1
    }, 8, ["onClick"])]),
    _: 1
  }, 8, ["show", "title"])])
}
const jr = vt(N2, [
    ["render", W2],
    ["__scopeId", "data-v-49c142f1"]
  ]),
  j2 = {
    components: {
      TonWallet: jr
    },
    async created() {
      await this.calcQuestExtend(), await window.listenTonConnect(), await this.loadTonWallet()
    },
    mounted() {
      if (this.routeKey && this.routeKey.length > 0) {
        const e = this.extendQuestsAll.filter(t => t.key === this.routeKey)[0];
        e && this.openQuest(e)
      }
    },
    data() {
      return {
        isShowQuest: !1,
        isQuestsUpdate: !1,
        openedQuest: {},
        extendQuestsAll: [],
        extendQuestsProgress: [],
        extendQuestsFinished: [],
        questCheckValue: null,
        checkErrorText: null,
        isClaimLoading: !1,
        isTransactionError: !1,
        connectedWallet: "",
        connectedWalletFirstLoaded: !1
      }
    },
    computed: {
      routeKey() {
        return this.$route.params.routeKey
      },
      questCheckValueTrimmed() {
        return this.questCheckValue ? this.questCheckValue.trim() : null
      },
      showWalletCheckButton() {
        return this.openedQuest.key !== "ton_wallet_connect" || this.isWalletConnected
      },
      isWalletConnected() {
        return this.stores.state.isTonWalletConnected
      },
      isWalletQuestComplete() {
        return !!this.uQuests.find(e => e.key === "ton_wallet_connect")
      }
    },
    watch: {
      uQuests() {
        this.calcQuestExtend()
      },
      questCheckValue() {
        this.checkErrorText = null
      },
      isWalletConnected() {
        this.openedQuest.key === "ton_wallet_connect" && this.isWalletConnected && this.actionCheck(1e3)
      }
    },
    methods: {
      async tonConnectStatusHandler(e) {
        this.connectedWalletFirstLoaded && (await this._delay(1e3), await this.loadTonWallet())
      },
      async loadTonWallet() {
        this.connectedWalletFirstLoaded = !0;
        const e = await this.apiCall("infoTonWallet");
        this.connectedWallet = e.wallet ? e.wallet : ""
      },
      async reconnectWallet() {
        (await window.tonConnectUI()).disconnect(), this.isTransactionError = !1
      },
      getRebusImg(e) {
        return "/assets/img/quests/rebus/" + e + ".png?v=1"
      },
      async updateQuestStatus() {
        this.isQuestsUpdate = !0;
        const e = await this.apiCall("getQuests", "");
        this.isQuestsUpdate = !1, e && this.stores.user.setQuests(e)
      },
      async calcQuestExtend() {
        let e = this.dbQuests.map(o => {
          const s = this.uQuests.find(a => a.key === o.key);
          if (o.status = "new", o.multiQuests = [], o.checkType === "multiQuest") {
            const a = o.checkData.split(",").map(l => l.trim());
            a.length > 0 && (o.multiQuests = this.dbQuests.filter(l => a.includes(l.key)).map(l => {
              const r = this.uQuests.find(c => c.key === l.key);
              return l.isComplete = !!r, l
            }))
          }
          if (s && (s.isRewarded ? o.status = "finished" : o.status = "complete"), o.checkType.includes("ton_wallet_") && (o.isActionButtonClicked = !0), o.checkType === "ton_wallet_transaction" && (o.tonTransactionValue = this.gameConfig["ton.test_transaction_value"] ?? .5, o.checkRetryCount = 10), o.checkType === "donate_ton" && (o.isActionButtonClicked = !0, o.checkRetryCount = 10), o.key === "bybit_deposit_100" && !this.uQuests.find(a => a.key === "bybit_kyc") && (o.isArchived = !0), o.key === "bybit_kyc" && !this.uQuests.find(a => a.key === "bybit") && (o.isArchived = !0), o.key === "invite_10" && !this.uQuests.find(a => a.key === "invite_3") && (o.isArchived = !0), o.key === "donate_ton_05") {
            o.isArchived = !0;
            const a = this.uQuests.find(l => l.key === "donate_ton_01");
            a && (a == null ? void 0 : a.creationDate) < "2024-12-18 06:20:00" && (o.isArchived = !1)
          }
          return o.key === "donate_ton_06" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_01")), o.key === "donate_ton_1" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_06")), o.key === "donate_ton_3" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_1")), o.key === "donate_ton_5" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_3")), o.key === "donate_ton_10" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_5")), o.key === "donate_ton_25" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_10")), o.key === "donate_ton_50" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_25")), o.key === "donate_ton_75" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_50")), o.key === "donate_ton_100" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_75")), o.key === "donate_ton_125" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_100")), o.key === "donate_ton_150" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_125")), o
        }).filter(o => !o.key.includes("chest_")).filter(o => !(o.isArchived && (o.status === "new" || o.key.includes("rebus_") || o.key.includes("riddle_"))));
        this.extendQuestsAll = e, this.extendQuestsFinished = e.filter(o => o.status === "finished").sort((o, s) => s.reward - o.reward);
        const t = e.filter(o => o.status !== "finished"),
          n = ["complete", "new", " finished"];
        this.extendQuestsProgress = t.sort((o, s) => {
          const a = o.order || 0,
            l = s.order || 0;
          if (a !== l) return a - l;
          if (o.status === s.status) return o.reward - s.reward;
          const r = n.indexOf(o.status),
            c = n.indexOf(s.status),
            u = r === -1 ? n.length : r,
            d = c === -1 ? n.length : c;
          return u - d
        })
      },
      openQuest(e) {
        this.questCheckValue = "", this.openedQuest = e, this.isShowQuest = !0
      },
      async actionButtonClick() {
        this.openedQuest.status === "new" && this.markQuestActionButtonClicked(this.openedQuest.key), this._openUrl(this.openedQuest.actionUrl), await this._delay(500), this.openedQuest.isActionButtonClicked = !0
      },
      isQuestActionButtonClicked(e) {
        return localStorage.getItem("is_quest_action_button_clicked_" + this.uProfile.id + "_" + e)
      },
      markQuestActionButtonClicked(e) {
        localStorage.setItem("is_quest_action_button_clicked_" + this.uProfile.id + "_" + e, "1")
      },
      clearQuestActionButtonClicked(e) {
        localStorage.removeItem("is_quest_action_button_clicked_" + this.uProfile.id + "_" + e)
      },
      async actionCheck(e) {
        this.checkErrorText = null, this.openedQuest.isCheckProgress = !0, e > 0 && await this._delay(e);
        let t = !1;
        if (this.openedQuest.checkRetryCount || (this.openedQuest.checkRetryCount = 1), ["donate_ton", "ton_wallet_transaction"].includes(this.openedQuest.key) && !this.isWalletQuestComplete && this.isWalletConnected && await this.apiCall("saveTonWallet", {
            wallet: (await window.tonConnectUI()).wallet
          }), this.openedQuest.checkType === "fakeCheck") await new Promise(n => setTimeout(n, 1500)), t = !0;
        else
          for (let n = 0; n < this.openedQuest.checkRetryCount; n++) try {
            if (t = (await this.apiCall("checkQuest", [this.openedQuest.key, this.questCheckValueTrimmed], !1)).result, t) {
              this.clearQuestActionButtonClicked(this.openedQuest.key);
              break
            }
            await this.tryReSaveTonWallet(), await this.waitTillNextCheckTry()
          } catch (o) {
            console.log("Error: %o", o), await this.tryReSaveTonWallet(), await this.waitTillNextCheckTry(), n === this.openedQuest.checkRetryCount - 1 && (this.checkErrorText = this.t("Quest check error"))
          }
        t && (this.openedQuest.status = "complete"), this.openedQuest.isCheckProgress = !1
      },
      async waitTillNextCheckTry() {
        this.openedQuest.checkRetryCount > 1 && await this._delay(5e3)
      },
      async tryReSaveTonWallet() {
        this.openedQuest.key === "ton_wallet_connect" && (await window.tonConnectUI()).wallet !== null && (await this.apiCall("saveTonWallet", {
          wallet: (await window.tonConnectUI()).wallet
        }), this.openedQuest.checkRetryCount = 2)
      },
      async claimQuest() {
        try {
          this.isClaimLoading = !0;
          const e = await this.apiCall("claimQuest", [this.openedQuest.key, this.questCheckValueTrimmed]);
          this.isShowQuest = !1, this.stores.user.setHero(e.hero), this.stores.user.setQuests(e.quests), this._animateMoneyFromCenter()
        } catch (e) {
          this._catchError(e)
        }
        this.isClaimLoading = !1
      }
    }
  },
  Q2 = {
    class: "questChallenge"
  },
  K2 = ["src"],
  Y2 = {
    class: "goldLightText"
  },
  q2 = {
    class: "white"
  },
  G2 = ["src"],
  Z2 = {
    class: "container",
    style: {
      "margin-bottom": "40px"
    }
  },
  X2 = {
    style: {
      display: "flex",
      margin: "20px 0",
      "align-items": "center"
    }
  },
  J2 = ["src"],
  ex = {
    style: {
      "font-size": "1.2em",
      "font-weight": "bold"
    }
  },
  tx = {
    key: 0
  },
  nx = ["innerHTML"],
  ox = {
    key: 2,
    style: {
      "font-size": "20px",
      "margin-bottom": "20px"
    }
  },
  ix = {
    class: "goldText"
  },
  sx = {
    key: 3
  },
  ax = ["src"],
  lx = {
    key: 4,
    style: {
      margin: "20px 0"
    }
  },
  rx = {
    key: 5,
    style: {
      margin: "20px 0"
    }
  },
  cx = {
    key: 0
  },
  ux = {
    key: 6,
    style: {
      margin: "20px 0"
    }
  },
  dx = {
    key: 7,
    style: {
      "padding-top": "20px"
    }
  },
  fx = {
    key: 0,
    style: {
      margin: "20px 0"
    }
  },
  hx = {
    style: {
      color: "#fff"
    }
  },
  mx = {
    key: 1,
    style: {
      margin: "20px 0"
    }
  },
  gx = {
    style: {
      color: "#fff"
    }
  },
  vx = {
    key: 2
  },
  yx = {
    key: 3,
    style: {
      color: "red"
    }
  },
  px = {
    key: 8,
    style: {
      margin: "20px 0"
    }
  },
  bx = {
    key: 0,
    class: "center",
    style: {
      background: "#afc4f0",
      "border-radius": "8px",
      "margin-bottom": "10px"
    }
  },
  wx = ["src"],
  Cx = {
    style: {
      color: "#fff",
      "margin-bottom": "5px"
    }
  },
  _x = {
    class: "tips"
  },
  kx = {
    key: 9
  },
  Sx = {
    key: 0,
    style: {
      color: "red"
    }
  },
  Tx = {
    key: 10
  },
  xx = {
    key: 11
  };

function Ax(e, t, n, o, s, a) {
  const l = me("van-icon"),
    r = me("van-badge"),
    c = me("van-cell"),
    u = me("van-cell-group"),
    d = me("van-button"),
    f = me("ton-wallet"),
    m = me("van-field"),
    g = me("van-popup");
  return V(), q("div", Q2, [s.extendQuestsProgress.length ? (V(), Me(u, {
    key: 0,
    inset: ""
  }, {
    default: ae(() => [(V(!0), q(Be, null, Ft(s.extendQuestsProgress, p => (V(), Me(c, {
      key: p.key,
      onClick: y => a.openQuest(p),
      title: p.title,
      size: "large",
      center: "",
      "is-link": ""
    }, ff({
      icon: ae(() => [T("img", {
        src: e._getQuestImg(p.key),
        class: "questImg",
        alt: ""
      }, null, 8, K2)]),
      label: ae(() => [T("span", {
        class: ot({
          goldLightText: p.status === "complete"
        })
      }, [he("+" + $(e._number(p.reward)) + " ", 1), t[8] || (t[8] = T("span", {
        class: "coin25"
      }, null, -1))], 2)]),
      _: 2
    }, [p.status === "complete" ? {
      name: "right-icon",
      fn: ae(() => [h(r, {
        dot: ""
      }, {
        default: ae(() => [T("span", Y2, [he($(e.t("Take")) + " ", 1), h(l, {
          name: "arrow"
        })])]),
        _: 1
      })]),
      key: "0"
    } : void 0]), 1032, ["onClick", "title"]))), 128))]),
    _: 1
  })) : Ce("", !0), t[20] || (t[20] = T("br", null, null, -1)), s.extendQuestsFinished.length ? (V(), Me(u, {
    key: 1,
    inset: "",
    style: {
      "margin-bottom": "50px"
    }
  }, {
    title: ae(() => [T("span", q2, $(e.t("Completed Tasks")), 1)]),
    default: ae(() => [(V(!0), q(Be, null, Ft(s.extendQuestsFinished, p => (V(), Me(c, {
      key: p.key,
      onClick: y => a.openQuest(p),
      size: "large",
      center: "",
      class: "finished"
    }, {
      title: ae(() => [he($(p.title), 1)]),
      icon: ae(() => [T("img", {
        src: e._getQuestImg(p.key),
        class: "questImg",
        alt: ""
      }, null, 8, G2)]),
      "right-icon": ae(() => [T("span", null, [he(" +" + $(e._number(p.reward)) + " ", 1), h(l, {
        name: "checked"
      })])]),
      _: 2
    }, 1032, ["onClick"]))), 128))]),
    _: 1
  })) : Ce("", !0), h(g, {
    show: s.isShowQuest,
    "onUpdate:show": t[7] || (t[7] = p => s.isShowQuest = p),
    closeable: "",
    "close-icon": "cross",
    position: "bottom",
    round: ""
  }, {
    default: ae(() => [T("div", Z2, [T("div", X2, [T("img", {
      src: e._getQuestImg(s.openedQuest.key),
      class: "questImg",
      alt: ""
    }, null, 8, J2), T("div", null, [T("div", ex, $(s.openedQuest.title), 1), T("div", null, [he(" +" + $(e._number(s.openedQuest.reward)) + " ", 1), t[9] || (t[9] = T("span", {
      class: "coin25"
    }, null, -1))])])]), s.openedQuest.key.includes("riddle_") ? (V(), q("p", tx, '"' + $(s.openedQuest.desc) + '"', 1)) : (V(), q("p", {
      key: 1,
      innerHTML: s.openedQuest.desc.replace(/\n/g, "<br />").replace("{reward}", e._number(s.openedQuest.reward))
    }, null, 8, nx)), s.openedQuest.status === "finished" && (s.openedQuest.key.includes("rebus_") || s.openedQuest.key.includes("riddle_")) ? (V(), q("div", ox, [t[10] || (t[10] = he(" ✅ ")), T("span", ix, $(s.openedQuest.checkData), 1)])) : Ce("", !0), s.openedQuest.checkType === "multiQuest" ? (V(), q("div", sx, [T("div", null, $(e.t("To get the reward complete the quests:")), 1), (V(!0), q(Be, null, Ft(s.openedQuest.multiQuests, p => (V(), q("div", {
      key: "subQuest" + p.key,
      class: ot(["subQuest", p.isComplete ? "subQuestDone" : ""])
    }, [T("img", {
      src: e._getQuestImg(p.key),
      alt: ""
    }, null, 8, ax), p.isComplete ? (V(), Me(l, {
      key: 0,
      name: "checked",
      style: {
        margin: "0 5px"
      }
    })) : Ce("", !0), t[11] || (t[11] = he()), T("span", null, $(p.title), 1)], 2))), 128))])) : Ce("", !0), T("div", null, [s.openedQuest.actionUrl ? (V(), Me(d, {
      key: 0,
      type: s.openedQuest.status === "complete" ? "success" : "warning",
      round: "",
      onClick: a.actionButtonClick,
      size: "large"
    }, {
      default: ae(() => [he($(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["type", "onClick"])) : Ce("", !0), s.openedQuest.actionTo ? (V(), Me(d, {
      key: 1,
      type: s.openedQuest.status === "complete" ? "success" : "warning",
      round: "",
      to: s.openedQuest.actionTo,
      size: "large"
    }, {
      default: ae(() => [he($(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["type", "to"])) : Ce("", !0), s.openedQuest.checkType === "invite" ? (V(), Me(d, {
      key: 2,
      type: s.openedQuest.status === "complete" ? "success" : "warning",
      round: "",
      size: "large",
      onClick: e._shareBtnClick
    }, {
      default: ae(() => [he($(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["type", "onClick"])) : Ce("", !0)]), s.openedQuest.status === "new" && s.openedQuest.key.includes("ton_wallet_") ? (V(), q("div", lx, [h(f, {
      "transaction-value": s.openedQuest.isCheckProgress ? 0 : s.openedQuest.tonTransactionValue,
      "saved-wallet": s.connectedWallet,
      onWalletConnectHandler: a.tonConnectStatusHandler,
      onPaid: t[0] || (t[0] = p => a.actionCheck(5e3)),
      loading: s.openedQuest.isCheckProgress
    }, null, 8, ["transaction-value", "saved-wallet", "onWalletConnectHandler", "loading"])])) : Ce("", !0), s.openedQuest.status === "new" && s.openedQuest.key.includes("donate_ton") ? (V(), q("div", rx, [h(f, {
      onError: t[1] || (t[1] = p => s.isTransactionError = !0),
      "transaction-value": s.openedQuest.isCheckProgress ? 0 : s.openedQuest.checkCount,
      "saved-wallet": s.connectedWallet,
      onWalletConnectHandler: a.tonConnectStatusHandler,
      "transaction-address": e.uTonDonateAddress,
      onPaid: t[2] || (t[2] = p => a.actionCheck(5e3)),
      loading: s.openedQuest.isCheckProgress
    }, null, 8, ["transaction-value", "saved-wallet", "onWalletConnectHandler", "transaction-address", "loading"]), s.isTransactionError ? (V(), q("div", cx, [T("p", null, $(e.t("Encountered an error? Reconnect the wallet and try again.")), 1), h(d, {
      color: "darkorange",
      size: "small",
      round: "",
      onClick: a.reconnectWallet
    }, {
      default: ae(() => [he($(e.t("Reconnect wallet")), 1)]),
      _: 1
    }, 8, ["onClick"])])) : Ce("", !0)])) : Ce("", !0), s.openedQuest.status === "new" && s.openedQuest.key.includes("tg_story") ? (V(), q("div", ux, [h(d, {
      type: "success",
      size: "small",
      round: "",
      onClick: e.shareStory,
      loading: s.openedQuest.isCheckProgress
    }, {
      default: ae(() => [he($(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["onClick", "loading"])])) : Ce("", !0), s.openedQuest.needCheck && s.openedQuest.status === "new" && (s.openedQuest.isActionButtonClicked || this.isQuestActionButtonClicked(this.openedQuest.key)) && a.showWalletCheckButton ? (V(), q("div", dx, [
      ["bybit", "bybit_kyc", "bybit_deposit"].includes(s.openedQuest.checkType) ? (V(), q("div", fx, [T("p", null, [T("span", hx, $(e.t("Enter your {Bybit} UID")), 1), t[12] || (t[12] = T("br", null, null, -1)), he(" " + $(e.t("Only accounts registered using the button above or entering the code: 86127 during registration can participate.")), 1)]), h(m, {
        modelValue: s.questCheckValue,
        "onUpdate:modelValue": t[3] || (t[3] = p => s.questCheckValue = p),
        center: "",
        autofocus: !0,
        clearable: "",
        class: "questCheckInput",
        placeholder: e.t("Bybit UID"),
        style: {
          color: "#fff",
          "font-size": "1.1em"
        },
        border: !1
      }, null, 8, ["modelValue", "placeholder"])])) : s.openedQuest.checkType === "checkCode" ? (V(), q("div", mx, [T("p", gx, $(e.t("Enter code")), 1), h(m, {
        modelValue: s.questCheckValue,
        "onUpdate:modelValue": t[4] || (t[4] = p => s.questCheckValue = p),
        center: "",
        autofocus: !0,
        clearable: "",
        class: "questCheckInput",
        placeholder: e.t("Code"),
        style: {
          color: "#fff",
          "font-size": "1.1em"
        },
        border: !1
      }, null, 8, ["modelValue", "placeholder"])])) : (V(), q("p", vx, $(e.t("After this action, click Check action.")), 1)), h(d, {
        type: "success",
        round: "",
        icon: "warn-o",
        onClick: a.actionCheck,
        loading: s.openedQuest.isCheckProgress,
        "loading-text": e.t("Checking..."),
        style: {
          width: "100%"
        }
      }, {
        default: ae(() => [he($(e.t("Check action")), 1)]),
        _: 1
      }, 8, ["onClick", "loading", "loading-text"]), s.checkErrorText ? (V(), q("div", yx, $(s.checkErrorText), 1)) : Ce("", !0)
    ])) : s.openedQuest.status === "new" && (s.openedQuest.key.includes("rebus_") || s.openedQuest.key.includes("riddle_")) ? (V(), q("div", px, [s.openedQuest.key.includes("rebus_") ? (V(), q("div", bx, [T("img", {
      src: a.getRebusImg(s.openedQuest.key),
      alt: "",
      style: {
        "max-height": "150px"
      }
    }, null, 8, wx)])) : Ce("", !0), T("div", Cx, $(e.t("Enter answer:")), 1), h(m, {
      modelValue: s.questCheckValue,
      "onUpdate:modelValue": t[5] || (t[5] = p => s.questCheckValue = p),
      center: "",
      autofocus: !0,
      clearable: "",
      class: "questCheckInput",
      placeholder: e.t("Answer"),
      style: {
        color: "#fff",
        "font-size": "1.1em"
      },
      border: !1
    }, null, 8, ["modelValue", "placeholder"]), t[14] || (t[14] = T("br", null, null, -1)), T("div", _x, [he($(e.t("Write the answer in English.")), 1), t[13] || (t[13] = T("br", null, null, -1)), he(" " + $(e.t("If it's difficult for you, look for communities where they can help you.")), 1)])])) : Ce("", !0), s.openedQuest.status === "new" && s.openedQuest.key !== "tg_story" && !s.openedQuest.actionTo && !s.openedQuest.actionUrl && (s.openedQuest.checkType === "fakeCheck" || s.openedQuest.checkType === "checkCode") ? (V(), q("div", kx, [h(d, {
      type: "success",
      round: "",
      onClick: a.actionCheck,
      loading: s.openedQuest.isCheckProgress,
      "loading-text": e.t("Checking...")
    }, {
      default: ae(() => [he($(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["onClick", "loading", "loading-text"]), s.checkErrorText ? (V(), q("div", Sx, $(s.checkErrorText), 1)) : Ce("", !0)])) : Ce("", !0), s.openedQuest.key.includes("name_check") ? (V(), q("div", Tx, [t[15] || (t[15] = T("br", null, null, -1)), t[16] || (t[16] = T("br", null, null, -1)), h(d, {
      icon: "link-o",
      onClick: t[6] || (t[6] = p => e._copyToClipboard(s.openedQuest.checkData)),
      round: "",
      loading: s.isQuestsUpdate,
      size: "large",
      type: "success"
    }, {
      default: ae(() => [he($(e.t("Copy emoji {emoji}", {
        emoji: s.openedQuest.checkData
      })), 1)]),
      _: 1
    }, 8, ["loading"])])) : Ce("", !0), !s.openedQuest.needCheck && s.openedQuest.status === "new" ? (V(), q("div", xx, [t[17] || (t[17] = T("br", null, null, -1)), t[18] || (t[18] = T("br", null, null, -1)), h(d, {
      icon: "replay",
      onClick: a.updateQuestStatus,
      round: "",
      loading: s.isQuestsUpdate,
      "loading-text": e.t("Updating..."),
      size: "mini",
      type: "success"
    }, {
      default: ae(() => [he($(e.t("Update status")), 1)]),
      _: 1
    }, 8, ["onClick", "loading", "loading-text"])])) : Ce("", !0), s.openedQuest.status === "complete" ? (V(), Me(d, {
      key: 12,
      type: "warning",
      round: "",
      class: "btnFinish btnShadow clicked",
      size: "large",
      onClick: a.claimQuest,
      loading: s.isClaimLoading
    }, {
      default: ae(() => [he($(e.t("Take")) + " +" + $(e._number(s.openedQuest.reward)) + " ", 1), t[19] || (t[19] = T("span", {
        class: "coin25"
      }, null, -1))]),
      _: 1
    }, 8, ["onClick", "loading"])) : Ce("", !0)])]),
    _: 1
  }, 8, ["show"])])
}
const Ex = vt(j2, [
    ["render", Ax],
    ["__scopeId", "data-v-3263b0d9"]
  ]),
  Ix = {
    components: {
      GamePopup: gm
    },
    async created() {
      this.timeToNextDay = this._millisecondsUntilNextUTCHour(7)
    },
    mounted() {
      this.routeKey === "daily_open" && (this.isShowDailyReward = !0)
    },
    props: {},
    data() {
      return {
        isShowDailyReward: !1,
        lastDailyRewardCanTake: null,
        timeToNextDay: null,
        isClaimLoading: !1
      }
    },
    computed: {
      routeKey() {
        return this.$route.params.routeKey
      },
      rewardsExtend() {
        return this.dbDailyRewards.map(e => {
          const t = e.key in this.uDailyRewards ? this.uDailyRewards[e.key] : null;
          return e.isTaken = t === "taken", e.isCanTake = t === "canTake", e.isCanTake && (this.lastDailyRewardCanTake = e), e
        })
      },
      isDailyCanTake() {
        return Object.values(this.uDailyRewards).some(e => e === "canTake")
      }
    },
    methods: {
      async claimDailyReward(e) {
        if (e.isCanTake) {
          try {
            this.isClaimLoading = !0;
            const t = await this.apiCall("claimDailyReward", e.key);
            this.stores.user.setHero(t.hero), this.stores.user.setDailyRewards(t.dailyRewards), this._animateMoneyFromCenter(), this.isShowDailyReward = !1, this.lastDailyRewardCanTake = null
          } catch (t) {
            this._catchError(t)
          }
          this.isClaimLoading = !1
        }
      }
    }
  },
  Px = {
    class: "content"
  },
  Ox = {
    style: {
      "font-size": "1.2em",
      "margin-bottom": "10px"
    }
  },
  Bx = {
    key: 0
  },
  Rx = {
    key: 1
  },
  Dx = {
    class: "action"
  },
  $x = {
    key: 1
  },
  Mx = {
    class: "center"
  },
  Lx = {
    class: "timer",
    style: {
      display: "inline-block",
      "font-size": "1.3em",
      "font-weight": "800"
    }
  },
  Nx = {
    class: "dailyRewardGrid"
  },
  Fx = ["onClick"],
  zx = {
    class: "day"
  },
  Vx = {
    class: "reward zTextShadow2white",
    style: {
      "font-weight": "800",
      "font-size": "1.4em"
    }
  },
  Hx = {
    key: 0,
    class: "dailyRewardPopupBottomClaim"
  };

function Ux(e, t, n, o, s, a) {
  const l = me("van-count-down"),
    r = me("van-icon"),
    c = me("van-badge"),
    u = me("van-button"),
    d = me("van-popup");
  return V(), q("div", null, [T("div", {
    class: ot(["dailyReward clicked", {
      grayscale: !a.isDailyCanTake
    }]),
    onClick: t[0] || (t[0] = f => s.isShowDailyReward = !0)
  }, [t[4] || (t[4] = T("div", {
    class: "icon"
  }, [T("div", {
    class: "img"
  }, [T("span", {
    class: "coin60"
  })])], -1)), T("div", Px, [T("div", Ox, $(e.t("Daily reward")), 1), T("div", null, [a.isDailyCanTake ? (V(), q("span", Rx, $(e.t("Hurry up and get it")), 1)) : (V(), q("span", Bx, $(e.t("Can be claim in")), 1)), t[3] || (t[3] = he("  ")), h(l, {
    time: s.timeToNextDay,
    class: "countDown",
    style: {
      color: "#fff",
      "font-weight": "bold",
      width: "7ch",
      display: "inline-block"
    }
  }, null, 8, ["time"])])]), T("div", Dx, [a.isDailyCanTake ? (V(), Me(c, {
    key: 0,
    dot: "",
    style: {
      "white-space": "nowrap"
    }
  }, {
    default: ae(() => [he($(e.t("Claim")) + " ", 1), h(r, {
      name: "arrow"
    })]),
    _: 1
  })) : (V(), q("div", $x, [h(r, {
    name: "arrow"
  })]))])], 2), h(d, {
    show: s.isShowDailyReward,
    "onUpdate:show": t[2] || (t[2] = f => s.isShowDailyReward = f),
    closeable: "",
    position: "bottom",
    round: "",
    class: "container",
    style: an({
      height: "80%",
      "padding-bottom": a.isDailyCanTake ? "120px" : "80px"
    })
  }, {
    default: ae(() => [T("div", Mx, [T("h1", null, $(e.t("Daily reward")), 1), T("p", null, $(e.t("If you miss a day, you start all over again")), 1), T("div", Lx, [he($(e.t("Until the next day:")) + " ", 1), h(l, {
      time: s.timeToNextDay,
      style: {
        display: "inline-block",
        "padding-right": "5px",
        "font-size": "1.3em",
        width: "7ch"
      }
    }, null, 8, ["time"])])]), t[6] || (t[6] = T("br", null, null, -1)), T("div", Nx, [(V(!0), q(Be, null, Ft(a.rewardsExtend, f => (V(), q("div", {
      class: ot(["rewardItem", {
        isTaken: !f.isTaken,
        isCanTake: f.isCanTake,
        clicked: f.isCanTake
      }]),
      key: f.key,
      onClick: m => f.isCanTake ? a.claimDailyReward(f) : ""
    }, [T("div", zx, $(e.t("Day")) + " " + $(f.key), 1), t[5] || (t[5] = T("div", {
      class: "rewardIcon"
    }, null, -1)), T("div", Vx, $(e._numberShort(f.rewardMoney)), 1), f.isTaken ? (V(), Me(r, {
      key: 0,
      color: "#07c160",
      name: "success",
      size: "50",
      style: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        filter: "drop-shadow(2px 4px 6px yellow)"
      }
    })) : Ce("", !0)], 10, Fx))), 128))]), a.isDailyCanTake ? (V(), q("div", Hx, [h(u, {
      type: "warning",
      size: "large",
      round: "",
      style: {
        "font-size": "1.2em"
      },
      loading: s.isClaimLoading,
      onClick: t[1] || (t[1] = f => a.claimDailyReward(s.lastDailyRewardCanTake))
    }, {
      default: ae(() => [he($(e.t("Claim Reward")), 1)]),
      _: 1
    }, 8, ["loading"])])) : Ce("", !0)]),
    _: 1
  }, 8, ["show", "style"])])
}
const Wx = vt(Ix, [
  ["render", Ux],
  ["__scopeId", "data-v-8158abb7"]
]);
var jx = !1;
/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
let vm;
const Ba = e => vm = e,
  ym = Symbol();

function Ql(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var Ui;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})(Ui || (Ui = {}));

function Qx() {
  const e = xd(!0),
    t = e.run(() => F({}));
  let n = [],
    o = [];
  const s = ur({
    install(a) {
      Ba(s), s._a = a, a.provide(ym, s), a.config.globalProperties.$pinia = s, o.forEach(l => n.push(l)), o = []
    },
    use(a) {
      return !this._a && !jx ? o.push(a) : n.push(a), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map,
    state: t
  });
  return s
}
const pm = () => {};

function Ku(e, t, n, o = pm) {
  e.push(t);
  const s = () => {
    const a = e.indexOf(t);
    a > -1 && (e.splice(a, 1), o())
  };
  return !n && Ad() && lg(s), s
}

function Zo(e, ...t) {
  e.slice().forEach(n => {
    n(...t)
  })
}
const Kx = e => e(),
  Yu = Symbol(),
  ml = Symbol();

function Kl(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, o) => e.set(o, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const o = t[n],
      s = e[n];
    Ql(s) && Ql(o) && e.hasOwnProperty(n) && !it(o) && !lo(o) ? e[n] = Kl(s, o) : e[n] = o
  }
  return e
}
const Yx = Symbol();

function qx(e) {
  return !Ql(e) || !e.hasOwnProperty(Yx)
}
const {
  assign: eo
} = Object;

function Gx(e) {
  return !!(it(e) && e.effect)
}

function Zx(e, t, n, o) {
  const {
    state: s,
    actions: a,
    getters: l
  } = t, r = n.state.value[e];
  let c;

  function u() {
    r || (n.state.value[e] = s ? s() : {});
    const d = Rg(n.state.value[e]);
    return eo(d, a, Object.keys(l || {}).reduce((f, m) => (f[m] = ur(N(() => {
      Ba(n);
      const g = n._s.get(e);
      return l[m].call(g, g)
    })), f), {}))
  }
  return c = bm(e, u, t, n, o, !0), c
}

function bm(e, t, n = {}, o, s, a) {
  let l;
  const r = eo({
      actions: {}
    }, n),
    c = {
      deep: !0
    };
  let u, d, f = [],
    m = [],
    g;
  const p = o.state.value[e];
  !a && !p && (o.state.value[e] = {}), F({});
  let y;

  function b(S) {
    let B;
    u = d = !1, typeof S == "function" ? (S(o.state.value[e]), B = {
      type: Ui.patchFunction,
      storeId: e,
      events: g
    }) : (Kl(o.state.value[e], S), B = {
      type: Ui.patchObject,
      payload: S,
      storeId: e,
      events: g
    });
    const R = y = Symbol();
    Oe().then(() => {
      y === R && (u = !0)
    }), d = !0, Zo(f, B, o.state.value[e])
  }
  const w = a ? function() {
    const {
      state: B
    } = n, R = B ? B() : {};
    this.$patch(x => {
      eo(x, R)
    })
  } : pm;

  function v() {
    l.stop(), f = [], m = [], o._s.delete(e)
  }
  const C = (S, B = "") => {
      if (Yu in S) return S[ml] = B, S;
      const R = function() {
        Ba(o);
        const x = Array.from(arguments),
          P = [],
          M = [];

        function J(ne) {
          P.push(ne)
        }

        function ce(ne) {
          M.push(ne)
        }
        Zo(m, {
          args: x,
          name: R[ml],
          store: k,
          after: J,
          onError: ce
        });
        let W;
        try {
          W = S.apply(this && this.$id === e ? this : k, x)
        } catch (ne) {
          throw Zo(M, ne), ne
        }
        return W instanceof Promise ? W.then(ne => (Zo(P, ne), ne)).catch(ne => (Zo(M, ne), Promise.reject(ne))) : (Zo(P, W), W)
      };
      return R[Yu] = !0, R[ml] = B, R
    },
    _ = {
      _p: o,
      $id: e,
      $onAction: Ku.bind(null, m),
      $patch: b,
      $reset: w,
      $subscribe(S, B = {}) {
        const R = Ku(f, S, B.detached, () => x()),
          x = l.run(() => re(() => o.state.value[e], P => {
            (B.flush === "sync" ? d : u) && S({
              storeId: e,
              type: Ui.direct,
              events: g
            }, P)
          }, eo({}, c, B)));
        return R
      },
      $dispose: v
    },
    k = Ze(_);
  o._s.set(e, k);
  const D = (o._a && o._a.runWithContext || Kx)(() => o._e.run(() => (l = xd()).run(() => t({
    action: C
  }))));
  for (const S in D) {
    const B = D[S];
    if (it(B) && !Gx(B) || lo(B)) a || (p && qx(B) && (it(B) ? B.value = p[S] : Kl(B, p[S])), o.state.value[e][S] = B);
    else if (typeof B == "function") {
      const R = C(B, S);
      D[S] = R, r.actions[S] = B
    }
  }
  return eo(k, D), eo(He(k), D), Object.defineProperty(k, "$state", {
    get: () => o.state.value[e],
    set: S => {
      b(B => {
        eo(B, S)
      })
    }
  }), o._p.forEach(S => {
    eo(k, l.run(() => S({
      store: k,
      app: o._a,
      pinia: o,
      options: r
    })))
  }), p && a && n.hydrate && n.hydrate(k.$state, p), u = !0, d = !0, k
}

function Qr(e, t, n) {
  let o, s;
  const a = typeof t == "function";
  typeof e == "string" ? (o = e, s = a ? n : t) : (s = e, o = e.id);

  function l(r, c) {
    const u = fv();
    return r = r || (u ? Bt(ym, null) : null), r && Ba(r), r = vm, r._s.has(o) || (a ? bm(o, t, s, r) : Zx(o, s, r)), r._s.get(o)
  }
  return l.$id = o, l
}
const ao = Qr("user", {
    state: () => ({
      authHash: null,
      profile: null,
      purchase: {},
      hero: {},
      history: [],
      settings: {},
      dailyRewards: {},
      animals: {},
      subscriptions: [],
      friends: [],
      quests: [],
      alliance: {},
      quizzes: [],
      feed: {},
      startParam: null,
      lastHeroUpdateDate: null,
      originalHeroTokens: null,
      referralCommission: 0,
      tonTransactionAddress: null,
      tonDonateAddress: null,
      tonCoinAddress: null
    }),
    persistedState: {
      includePaths: []
    },
    actions: {
      setParam(e, t) {
        this[e] = t
      },
      setAuthHash(e) {
        this.authHash = e
      },
      setStartParam(e) {
        this.startParam = e
      },
      setPurchase(e) {
        this.purchase = e
      },
      setHero(e) {
        e && (this.hero = e, this.lastHeroUpdateDate = new Date, this.originalHeroTokens = this.hero.tokens, this.updateBoostData())
      },
      setProfile(e) {
        this.profile = e
      },
      setSettings(e) {
        this.settings = e
      },
      setDailyRewards(e) {
        this.dailyRewards = e
      },
      setReferralCommission(e) {
        this.referralCommission = e
      },
      setTonTransactionAddress(e) {
        this.tonTransactionAddress = e
      },
      setTonDonateAddress(e) {
        this.tonDonateAddress = e
      },
      setTonCoinAddress(e) {
        this.tonCoinAddress = e
      },
      setFriends(e) {
        this.friends = e
      },
      setAnimals(e) {
        this.animals = e
      },
      setQuests(e) {
        this.quests = e
      },
      setQuizzes(e) {
        this.quizzes = e
      },
      setFeed(e) {
        this.hero.tphBase === 0 && (e.isNeedFeed = !1), this.feed = e, this.updateFeedData()
      },
      setAlliance(e) {
        this.alliance = e
      },
      setHeroTokens() {
        if (!this.lastHeroUpdateDate) return;
        const e = new Date - this.lastHeroUpdateDate;
        this.hero.tokens = Math.floor(this.originalHeroTokens + e / (1e3 * 60 * 60) * this.hero.tph)
      },
      addHeroCoins(e) {
        this.hero.coins += e
      },
      updateBoostData() {
        var c;
        if (!((c = this.hero) != null && c.boostExpiredDate)) {
          this.hero.boostExpiredDate = null, this.hero.boostShortDateStr = null, this.hero.boostPercent = 0, this.hero.tphBoost = 0;
          return
        }
        let e = this.hero.boostExpiredDate;
        e = e.replace(" ", "T") + "Z";
        const o = new Date(e) - new Date;
        if (o <= 0) {
          this.hero.boostExpiredDate = null, this.hero.boostShortDateStr = null, this.hero.boostPercent = 0, this.hero.tphBoost = 0;
          return
        }
        const s = Math.floor(o / (1e3 * 60 * 60 * 24)),
          a = Math.floor(o / (1e3 * 60 * 60)) % 24,
          l = Math.floor(o / (1e3 * 60)) % 60;
        let r = s > 0 ? s + "d " : "";
        r += a > 0 ? a + "h " : "", r += l > 0 ? l + "m" : "", this.hero.boostShortDateStr = r
      },
      updateFeedData() {
        var t, n;
        const e = new Date;
        if (!((t = this.feed) != null && t.autoFeedEndDate)) this.feed.autoFeedEndDateStr = null;
        else {
          const s = new Date(this.feed.autoFeedEndDate.replace(" ", "T") + "Z") - e;
          if (s <= 0) this.feed.autoFeedEndDateStr = null;
          else {
            const a = Math.floor(s / 864e5),
              l = Math.floor(s / (1e3 * 60 * 60)) % 24,
              r = Math.floor(s / (1e3 * 60)) % 60;
            let c = a > 0 ? a + "d " : "";
            c += l > 0 ? l + "h " : "", c += r > 0 ? r + "m" : "", this.feed.autoFeedEndDateStr = c
          }
        }!this.feed.autoFeedEndDateStr && !this.feed.isNeedFeed && ((n = this.feed) != null && n.nextFeedTime) && new Date(this.feed.nextFeedTime.replace(" ", "T") + "Z") < e && (this.feed.isNeedFeed = !0)
      }
    },
    getters: {}
  }),
  Kr = Qr("state", {
    state: () => ({
      channelsInfoById: {},
      isDarkMode: !1,
      lackOfCoin: 0,
      isShowTopup: !1,
      topBar: {
        isNoBg: !1,
        isNeedBg: !1,
        isShowPph: !0,
        isShowMoney: !0,
        isShowLottery: !1,
        isShowAvatar: !0
      },
      isTonWalletConnected: !1,
      isAfterDataLoaded: !1,
      luckyHourTimerStr: null
    }),
    persistedState: {
      includePaths: ["isDarkMode"]
    },
    actions: {
      setIsTonWalletConnected(e) {
        this.isTonWalletConnected = e
      },
      addChannelInfoBatch(e) {
        e.forEach(t => {
          t.id in this.channelsInfoById || (this.channelsInfoById[t.id] = t)
        })
      },
      setIsAfterDataLoaded() {
        this.isAfterDataLoaded = !0
      },
      setPageSettings(e = null) {
        if (!e) {
          this.topBar = {
            isNoBg: !0,
            isNeedBg: !1,
            isShowPph: !1,
            isShowMoney: !1,
            isShowLottery: !1,
            isShowAvatar: !1
          }, document.documentElement.style.background = "", document.body.style.background = "";
          return
        }
        this.topBar = {
          isNoBg: "isNoBg" in e ? e.isNoBg : !0,
          isNeedBg: "isNeedBg" in e ? e.isNeedBg : !1,
          isShowPph: "isShowPph" in e ? e.isShowPph : !1,
          isShowMoney: "isShowMoney" in e ? e.isShowMoney : !1,
          isShowLottery: "isShowLottery" in e ? e.isShowLottery : !1,
          isShowAvatar: "isShowAvatar" in e ? e.isShowAvatar : !0
        }, document.documentElement.style.background = "bg" in e ? e.bg : "", document.body.style.background = "bgBody" in e ? e.bgBody : ""
      },
      setTopBarIsNeedBg(e) {
        this.topBar.isNeedBg = e
      },
      setDarkMode() {
        this.isDarkMode = !this.isDarkMode
      },
      setLackOfCoin(e) {
        this.lackOfCoin = e
      },
      setIsShowTopUp(e) {
        this.isShowTopup = e
      },
      setLuckyHourTimerStr(e) {
        this.luckyHourTimerStr = e
      }
    },
    getters: {
      selectedTheme() {
        return this.isDarkMode ? "dark" : "light"
      }
    }
  }),
  wm = Qr("db", {
    state: () => ({
      dbTranslation: [],
      dbLang: [],
      dbQuests: [],
      dbDailyRewards: [],
      dbAnimals: [],
      dbPurchase: [],
      dbBoost: [],
      dbAlliance: [],
      dbAutoFeed: []
    }),
    actions: {
      setParam(e, t) {
        this[e] = t
      }
    }
  }),
  Cm = "api.zoo.team",
  _m = "game.zoo.team",
  km = function(e) {
    let t = document.cookie.split(";");
    for (let n = 0; n < t.length; n++) {
      let o = t[n].split("=");
      if (e === o[0].trim()) return decodeURIComponent(o[1])
    }
    return null
  },
  Sm = function(e) {
    const t = function(g) {
      var p = n(s(a(o(g), 8 * g.length)));
      return p.toLowerCase()
    };

    function n(g) {
      for (var p, y = "0123456789ABCDEF", b = "", w = 0; w < g.length; w++) p = g.charCodeAt(w), b += y.charAt(p >>> 4 & 15) + y.charAt(15 & p);
      return b
    }

    function o(g) {
      for (var p = Array(g.length >> 2), y = 0; y < p.length; y++) p[y] = 0;
      for (y = 0; y < 8 * g.length; y += 8) p[y >> 5] |= (255 & g.charCodeAt(y / 8)) << y % 32;
      return p
    }

    function s(g) {
      for (var p = "", y = 0; y < 32 * g.length; y += 8) p += String.fromCharCode(g[y >> 5] >>> y % 32 & 255);
      return p
    }

    function a(g, p) {
      g[p >> 5] |= 128 << p % 32, g[14 + (p + 64 >>> 9 << 4)] = p;
      for (var y = 1732584193, b = -271733879, w = -1732584194, v = 271733878, C = 0; C < g.length; C += 16) {
        var _ = y,
          k = b,
          I = w,
          D = v;
        b = d(b = d(b = d(b = d(b = u(b = u(b = u(b = u(b = c(b = c(b = c(b = c(b = r(b = r(b = r(b = r(b, w = r(w, v = r(v, y = r(y, b, w, v, g[C + 0], 7, -680876936), b, w, g[C + 1], 12, -389564586), y, b, g[C + 2], 17, 606105819), v, y, g[C + 3], 22, -1044525330), w = r(w, v = r(v, y = r(y, b, w, v, g[C + 4], 7, -176418897), b, w, g[C + 5], 12, 1200080426), y, b, g[C + 6], 17, -1473231341), v, y, g[C + 7], 22, -45705983), w = r(w, v = r(v, y = r(y, b, w, v, g[C + 8], 7, 1770035416), b, w, g[C + 9], 12, -1958414417), y, b, g[C + 10], 17, -42063), v, y, g[C + 11], 22, -1990404162), w = r(w, v = r(v, y = r(y, b, w, v, g[C + 12], 7, 1804603682), b, w, g[C + 13], 12, -40341101), y, b, g[C + 14], 17, -1502002290), v, y, g[C + 15], 22, 1236535329), w = c(w, v = c(v, y = c(y, b, w, v, g[C + 1], 5, -165796510), b, w, g[C + 6], 9, -1069501632), y, b, g[C + 11], 14, 643717713), v, y, g[C + 0], 20, -373897302), w = c(w, v = c(v, y = c(y, b, w, v, g[C + 5], 5, -701558691), b, w, g[C + 10], 9, 38016083), y, b, g[C + 15], 14, -660478335), v, y, g[C + 4], 20, -405537848), w = c(w, v = c(v, y = c(y, b, w, v, g[C + 9], 5, 568446438), b, w, g[C + 14], 9, -1019803690), y, b, g[C + 3], 14, -187363961), v, y, g[C + 8], 20, 1163531501), w = c(w, v = c(v, y = c(y, b, w, v, g[C + 13], 5, -1444681467), b, w, g[C + 2], 9, -51403784), y, b, g[C + 7], 14, 1735328473), v, y, g[C + 12], 20, -1926607734), w = u(w, v = u(v, y = u(y, b, w, v, g[C + 5], 4, -378558), b, w, g[C + 8], 11, -2022574463), y, b, g[C + 11], 16, 1839030562), v, y, g[C + 14], 23, -35309556), w = u(w, v = u(v, y = u(y, b, w, v, g[C + 1], 4, -1530992060), b, w, g[C + 4], 11, 1272893353), y, b, g[C + 7], 16, -155497632), v, y, g[C + 10], 23, -1094730640), w = u(w, v = u(v, y = u(y, b, w, v, g[C + 13], 4, 681279174), b, w, g[C + 0], 11, -358537222), y, b, g[C + 3], 16, -722521979), v, y, g[C + 6], 23, 76029189), w = u(w, v = u(v, y = u(y, b, w, v, g[C + 9], 4, -640364487), b, w, g[C + 12], 11, -421815835), y, b, g[C + 15], 16, 530742520), v, y, g[C + 2], 23, -995338651), w = d(w, v = d(v, y = d(y, b, w, v, g[C + 0], 6, -198630844), b, w, g[C + 7], 10, 1126891415), y, b, g[C + 14], 15, -1416354905), v, y, g[C + 5], 21, -57434055), w = d(w, v = d(v, y = d(y, b, w, v, g[C + 12], 6, 1700485571), b, w, g[C + 3], 10, -1894986606), y, b, g[C + 10], 15, -1051523), v, y, g[C + 1], 21, -2054922799), w = d(w, v = d(v, y = d(y, b, w, v, g[C + 8], 6, 1873313359), b, w, g[C + 15], 10, -30611744), y, b, g[C + 6], 15, -1560198380), v, y, g[C + 13], 21, 1309151649), w = d(w, v = d(v, y = d(y, b, w, v, g[C + 4], 6, -145523070), b, w, g[C + 11], 10, -1120210379), y, b, g[C + 2], 15, 718787259), v, y, g[C + 9], 21, -343485551), y = f(y, _), b = f(b, k), w = f(w, I), v = f(v, D)
      }
      return Array(y, b, w, v)
    }

    function l(g, p, y, b, w, v) {
      return f(m(f(f(p, g), f(b, v)), w), y)
    }

    function r(g, p, y, b, w, v, C) {
      return l(p & y | ~p & b, g, p, w, v, C)
    }

    function c(g, p, y, b, w, v, C) {
      return l(p & b | y & ~b, g, p, w, v, C)
    }

    function u(g, p, y, b, w, v, C) {
      return l(p ^ y ^ b, g, p, w, v, C)
    }

    function d(g, p, y, b, w, v, C) {
      return l(y ^ (p | ~b), g, p, w, v, C)
    }

    function f(g, p) {
      var y = (65535 & g) + (65535 & p);
      return (g >> 16) + (p >> 16) + (y >> 16) << 16 | 65535 & y
    }

    function m(g, p) {
      return g << p | g >>> 32 - p
    }
    return t(e)
  },
  qu = function(e, t) {
    return Object.keys(t).length === 0 ? e : e + "?" + (void 0)(t, {
      arrayFormat: "bracket"
    })
  },
  Xx = function() {
    return Date.now()
  },
  Jx = function() {
    return 1e3
  },
  eA = function() {
    return Math.floor(Xx() / Jx())
  },
  tA = function(e, t) {
    return Sm(encodeURIComponent(`${e}_${t}`))
  },
  nA = function(e, t) {
    const n = ao(),
      o = !!e;
    e instanceof Object && (e = JSON.stringify(e));
    const s = eA(),
      a = tA(s, o ? e : "");
    return {
      method: o ? "post" : "get",
      credentials: "include",
      ...t,
      headers: {
        "Content-Type": "application/json",
        "Api-Key": n.authHash ?? "empty",
        "Api-Time": s,
        "Api-Hash": a,
        "Is-Beta-Server": km("is_beta_server")
      },
      body: o ? e : null
    }
  },
  oA = async function(e, t, n) {
    const o = `https://${Cm}${e}`;
    let s = null,
      a = 1e3,
      l = null;
    try {
      s = await (await fetch(qu(o, t), nA(n))).json()
    } catch (r) {
      await new Promise(c => setTimeout(c, a * Math.pow(1.8, i))), console.error(r + ": " + qu(o, t)), l = r
    }
    if (!s && l) throw new Error("Network connection problems. Please try again with or without VPN.");
    return s
  }, oa = async function(e, t, n = !0) {
    console.log(`>>> api: ${e} request: %o`, t);
    const s = {
        auth: "/telegram/auth",
        getProfile: "/profile/info",
        allUserData: "/user/data/all",
        allUserDataAfter: "/user/data/after",
        onboardingComplete: "/hero/onboarding/finish",
        resetOnboarding: "/hero/onboarding/reset",
        getHero: "/hero/info",
        getSettings: "/settings",
        setSettings: "/settings/save",
        loadDb: "/dbs",
        assets: "/assets",
        adminReset: "/admin/reset",
        getRatings: "/ratings",
        communityLeaderboard: "/community/leaderboard",
        communityCreate: "/community/create",
        getFriends: "/friends",
        getQuests: "/quests/progress",
        claimQuest: "/quests/claim",
        checkQuest: "/quests/check",
        getDailyRewards: "/quests/daily",
        claimDailyReward: "/quests/daily/claim",
        buyAnimal: "/animal/buy",
        animalChangePosition: "/animal/position",
        boostBuy: "/boost/buy",
        purchaseBuy: "/purchase/buy",
        allianceCreate: "/alliance/create",
        allianceRating: "/alliance/rating",
        allianceJoin: "/alliance/join",
        allianceSave: "/alliance/save",
        allianceDonate: "/alliance/donate",
        allianceLeave: "/alliance/leave",
        allianceInfoByUser: "/alliance/user/info",
        friendsReferralBalance: "/friends/balance/referral",
        referralBuyFeed: "/friends/balance/referral/feed/buy",
        saveTonWallet: "/ton/wallet/save",
        infoTonWallet: "/ton/wallet/info",
        validateTonWallet: "/ton/wallet/validate",
        checkTransaction: "/ton/wallet/transaction/check",
        coinsTransactions: "/coins/history",
        quizResultSet: "/quiz/result/set",
        quizClaim: "/quiz/claim",
        autoFeedBuy: "/autofeed/buy"
      } [e],
      a = await oA(s, {}, {
        data: t
      });
    if (a.success) console.log(`>>> api: ${e} response: %o`, a.data);
    else throw ao().authHash && n && uo({
      type: "danger",
      message: a.error ? a.error : "Some problem... please repeat"
    }), a.error;
    return a.data
  }, iA = {
    data() {
      return {
        stores: {
          user: ao(),
          state: Kr(),
          db: wm()
        }
      }
    },
    methods: {
      apiCall: oa
    }
  }, sA = {
    methods: {}
  }, aA = {
    key: 0,
    class: "panelBrown",
    style: {
      "margin-bottom": "15px"
    }
  }, lA = {
    class: "flexLeft",
    style: {
      "margin-bottom": "10px"
    }
  }, rA = {
    style: {
      margin: "0 15px"
    }
  }, cA = {
    class: "noMargin"
  }, uA = {
    class: "white"
  };

function dA(e, t, n, o, s, a) {
  return e.stores.state.luckyHourTimerStr ? (V(), q("div", aA, [T("div", lA, [t[0] || (t[0] = T("div", {
    style: {
      "font-size": "3em",
      "padding-top": "5px"
    }
  }, "🎁", -1)), T("div", rA, [T("h1", cA, $(e.t("Happy hour")), 1), T("div", uA, $(e.t("Ending in {time}", {
    time: e.stores.state.luckyHourTimerStr
  })), 1)])]), T("div", null, $(e.t("When buying Animal Feed during happy hours, you can get a random bonus of up to {count}%. Minimum bonus {minBonus}%.", {
    count: 1e3,
    minBonus: 10
  })), 1)])) : Ce("", !0)
}
const fA = vt(sA, [
    ["render", dA]
  ]),
  hA = {
    props: {
      lackOfCoin: {
        type: Number,
        default: 0
      }
    },
    components: {
      LuckyHoursInform: fA,
      TonWallet: jr
    },
    async mounted() {
      await this.loadTonWallet(), await this.loadHistory()
    },
    watch: {},
    data: function() {
      return {
        isBuyLoading: !1,
        paymentType: "stars",
        isTonLoading: !1,
        connectedWallet: "",
        connectedWalletFirstLoaded: !1,
        transactionsHistory: [],
        isHistoryLoading: !1,
        isStarsHistoryLoading: !1
      }
    },
    methods: {
      async loadHistory() {
        this.isHistoryLoading = !0;
        const e = await oa("coinsTransactions");
        this.transactionsHistory = e.transactions, this.isHistoryLoading = !1, this.transactionsHistory.some(t => t.type === "ton") && await this._completeOnboarding(this.onBoard.buyTon)
      },
      async actionCheck(e) {
        this.isTonLoading = !0, e > 0 && await this._delay(e)
      },
      async tonConnectStatusHandler(e) {
        this.connectedWalletFirstLoaded && (await this._delay(1e3), await this.loadTonWallet())
      },
      async loadTonWallet() {
        this.connectedWalletFirstLoaded = !0;
        const e = await this.apiCall("infoTonWallet");
        this.connectedWallet = e.wallet ? e.wallet : ""
      },
      async buyStars(e, t) {
        this.isBuyLoading = !0;
        try {
          const n = await this.apiCall("purchaseBuy", e.key);
          "link" in n && n.link.length > 0 && await window.Telegram.WebApp.openInvoice(n.link, async o => {
            if (o !== "paid") {
              this.isBuyLoading = !1;
              return
            }
            await this._delay(1e3), await this.loadHero(), this._animateMoneyFromCenter(e.coins), await this.loadHistory()
          }), t && await t()
        } catch (n) {
          this._catchError(n)
        }
        this.isBuyLoading = !1
      },
      async buyTon(e) {
        this.isTonLoading = !0;
        const t = this.uHero.coins;
        try {
          await this._payTon(this.uTonCoinAddress, e.priceTon)
        } catch (n) {
          console.log(n)
        }
        for (let n = 0; n < 12; n++) {
          await this._delay(5e3);
          try {
            if (await this.loadHero(), this.uHero.coins > t) {
              await this._completeOnboarding(this.onBoard.buyTon), this._animateMoneyFromCenter(e.coins), await this.loadHistory();
              break
            }
          } catch (o) {
            this._catchError(o)
          }
        }
        this.isTonLoading = !1
      }
    },
    computed: {}
  },
  mA = {
    key: 0
  },
  gA = ["innerHTML"],
  vA = {
    style: {
      "font-size": "1.3em",
      "font-weight": "700",
      "margin-bottom": "10px"
    }
  },
  yA = {
    key: 1,
    class: "panelBrown flexLeft",
    style: {
      margin: "10px 0"
    }
  },
  pA = {
    style: {
      padding: "0 10px"
    }
  },
  bA = {
    style: {
      "font-size": "1.4em",
      "font-weight": "700"
    }
  },
  wA = {
    style: {
      color: "var(--van-text-color-2)"
    },
    class: "flexRight"
  },
  CA = {
    key: 0
  },
  _A = {
    key: 1
  },
  kA = {
    class: "flexCenter"
  },
  SA = {
    class: "flexLeft"
  },
  TA = {
    style: {
      margin: "0 10px"
    }
  },
  xA = {
    key: 0,
    class: "center"
  },
  AA = {
    key: 0
  },
  EA = {
    class: "tableHistory"
  },
  IA = {
    key: 0,
    src: Wr,
    alt: "TON Logo",
    width: "15px"
  },
  PA = ["onClick"],
  OA = {
    style: {
      "border-bottom": "1px dashed #fff"
    }
  },
  BA = {
    key: 0,
    style: {
      "margin-top": "10px"
    }
  },
  RA = {
    key: 1,
    class: "center"
  };

function DA(e, t, n, o, s, a) {
  const l = me("lucky-hours-inform"),
    r = me("van-tab"),
    c = me("van-tabs"),
    u = me("van-icon"),
    d = me("van-button"),
    f = me("van-badge"),
    m = me("van-cell"),
    g = me("van-cell-group"),
    p = me("van-loading");
  return V(), q("div", null, [n.lackOfCoin > 0 ? (V(), q("div", mA, [T("h1", {
    innerHTML: e.t("You are {count} {IMG_COIN} short to make this purchase", {
      count: e._number(n.lackOfCoin),
      IMG_COIN: e.IMG_COIN
    })
  }, null, 8, gA), T("div", vA, $(e.t("Top up your balance:")), 1)])) : Ce("", !0), h(l), h(c, {
    active: e.paymentType,
    "onUpdate:active": t[0] || (t[0] = y => e.paymentType = y),
    type: "card",
    ellipsis: !1,
    style: {
      "margin-bottom": "5px"
    }
  }, {
    default: ae(() => [h(r, {
      name: "stars",
      title: e.t("Stars")
    }, null, 8, ["title"]), h(r, {
      name: "ton",
      title: "TON",
      dot: !e._isOnboardingComplete(e.onBoard.buyTon)
    }, null, 8, ["dot"])]),
    _: 1
  }, 8, ["active"]), e.paymentType === "ton" && e.isTonLoading ? (V(), q("div", yA, [h(u, {
    name: "warning-o"
  }), T("div", pA, [he(" • " + $(e.t("Transaction processing may take a few minutes.")) + " ", 1), t[1] || (t[1] = T("br", null, null, -1)), he(" • " + $(e.t("You can leave this page, {COIN_NAME} will be credited automatically.", {
    COIN_NAME: e.COIN_NAME
  })), 1), t[2] || (t[2] = T("br", null, null, -1)), he(" • " + $(e.t("You can view the list of processed transactions in the history section at the bottom.")), 1)])])) : Ce("", !0), h(g, {
    inset: "",
    class: "noMargin"
  }, {
    default: ae(() => [(V(!0), q(Be, null, Ft(e.dbPurchase, y => (V(), Me(m, {
      key: y.coins + "_" + y.price,
      center: ""
    }, {
      title: ae(() => [t[3] || (t[3] = T("span", {
        class: "coin33"
      }, null, -1)), t[4] || (t[4] = he()), T("span", bA, $(e._number(y.coins)), 1)]),
      "right-icon": ae(() => [T("div", wA, [y.key === 1e4 ? (V(), q("span", CA, $(e.t("Most popular!")), 1)) : Ce("", !0), y.key === 25e4 ? (V(), q("span", _A, $(e.t("Best Price!")), 1)) : Ce("", !0), e.paymentType === "stars" ? (V(), Me(d, {
        key: 2,
        type: "success",
        size: "small",
        style: {
          "margin-left": "10px"
        },
        onClick: b => a.buyStars(y),
        loading: e.isBuyLoading
      }, {
        default: ae(() => [he("⭐️ " + $(e._number(y.price)), 1)]),
        _: 2
      }, 1032, ["onClick", "loading"])) : Ce("", !0), e.paymentType === "ton" ? (V(), Me(d, {
        key: 3,
        type: "success",
        size: "small",
        style: {
          "margin-left": "10px"
        },
        onClick: b => a.buyTon(y),
        loading: e.isTonLoading
      }, {
        default: ae(() => [h(f, {
          dot: !e._isOnboardingComplete(e.onBoard.buyTon)
        }, {
          default: ae(() => [T("div", kA, [t[5] || (t[5] = T("img", {
            src: Wr,
            alt: "",
            width: "15px"
          }, null, -1)), he("️ " + $(e._numberExact(y.priceTon)), 1)])]),
          _: 2
        }, 1032, ["dot"])]),
        _: 2
      }, 1032, ["onClick", "loading"])) : Ce("", !0)])]),
      _: 2
    }, 1024))), 128))]),
    _: 1
  }), T("div", null, [T("h2", SA, [h(d, {
    size: "small",
    type: "warning",
    loading: e.isHistoryLoading,
    onClick: a.loadHistory
  }, {
    default: ae(() => [h(u, {
      name: "replay"
    })]),
    _: 1
  }, 8, ["loading", "onClick"]), T("span", TA, $(e.t("History")), 1)]), e.isHistoryLoading ? (V(), q("div", xA, [h(p)])) : (V(), q(Be, {
    key: 1
  }, [e.transactionsHistory.length > 0 ? (V(), q("div", AA, [T("table", EA, [T("tbody", null, [T("tr", null, [T("td", null, $(e.t("Date")), 1), t[6] || (t[6] = T("td", null, [T("span", {
    class: "coin25"
  })], -1)), t[7] || (t[7] = T("td", null, "Price", -1)), t[8] || (t[8] = T("td", null, "Type", -1)), t[9] || (t[9] = T("td", null, "tx", -1))]), (V(!0), q(Be, null, Ft(e.transactionsHistory, y => (V(), q("tr", null, [T("td", null, $(new Date(y.date.replace(" ", "T") + "Z").toLocaleString()), 1), T("td", null, $(e._numberShort(y.coins)), 1), T("td", null, $(y.type !== "luckyHours" ? y.price : ""), 1), T("td", null, [y.type === "ton" ? (V(), q("img", IA)) : y.type === "stars" ? (V(), q(Be, {
    key: 1
  }, [he(" ⭐️ ")], 64)) : y.type === "luckyHours" ? (V(), q(Be, {
    key: 2
  }, [he(" lucky hours ")], 64)) : (V(), q(Be, {
    key: 3
  }, [], 64))]), y.type === "ton" ? (V(), q("td", {
    key: 0,
    onClick: b => e._openUrl("https://tonscan.org/tx/" + y.trx)
  }, [T("span", OA, "..." + $(y.trx.slice(-8)), 1)], 8, PA)) : Ce("", !0)]))), 256))])]), e.transactionsHistory.length === 10 ? (V(), q("div", BA, $(e.t("The last {count} transactions are displayed", {
    count: 10
  })), 1)) : Ce("", !0)])) : (V(), q("p", RA, $(e.t("No transactions found")), 1))], 64))])])
}
const Tm = vt(hA, [
    ["render", DA],
    ["__scopeId", "data-v-891859f4"]
  ]),
  $A = {
    async created() {
      this.localSettings = this.uSettings
    },
    mounted() {},
    props: {
      staticBg: {
        type: Boolean,
        default: !1
      }
    },
    data: function() {
      return {
        isMenuOpen: !1,
        isShowTphPopup: !1,
        isShowCoinPopup: !1,
        localSettings: {},
        isShowLangPicker: !1
      }
    },
    computed: {
      isNoBg() {
        return this.stores.state.topBar.isNoBg
      },
      isNeedBg() {
        return this.stores.state.topBar.isNeedBg
      },
      isShowPph() {
        return this.stores.state.topBar.isShowPph
      },
      isShowMoney() {
        return this.stores.state.topBar.isShowMoney
      },
      firstLang() {
        return this.dbLangByKey.en
      },
      userLang() {
        var e, t;
        if (((e = window.Telegram.WebApp.WebAppUser) == null ? void 0 : e.language_code.length) > 0) {
          const n = (t = window.Telegram.WebApp.WebAppUser) == null ? void 0 : t.language_code.substring(0, 2);
          if (n in this.dbLangByKey) return this.dbLangByKey[n]
        }
        return null
      },
      langByFirstLetter() {
        let e = this.dbLang;
        return e.sort((t, n) => t.key.localeCompare(n.key)), e.reduce((t, n) => {
          const o = n.key[0];
          return t[o] || (t[o] = []), t[o].push(n), t
        }, {})
      }
    },
    watch: {},
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen, this.isMenuOpen || (this.isShowLangPicker = !1)
      },
      async onLangSelect(e) {
        this.localSettings.lang = e, this.isShowLangPicker = !1, e === "en" && (this.dbTranslation = []);
        try {
          await this.saveSetting();
          try {
            await this.dbLoadDbData(["dbTranslation"])
          } catch (t) {
            console.log("Error: %o", t)
          }
        } catch (t) {
          console.log("Error: %o", t)
        }
      },
      async saveSetting(e = "") {
        this.stores.user.setSettings(this.localSettings), await this.apiCall("setSettings", this.localSettings)
      }
    }
  },
  MA = {
    class: "container"
  },
  LA = {
    style: {
      height: "calc(100vh - 60px)",
      "overflow-y": "scroll"
    }
  },
  NA = {
    style: {
      "font-size": "2em"
    }
  },
  FA = {
    style: {
      "font-size": "2em"
    }
  },
  zA = {
    style: {
      margin: "20px 0 10px 15px"
    }
  },
  VA = {
    style: {
      "font-size": "2em"
    }
  };

function HA(e, t, n, o, s, a) {
  const l = me("van-icon"),
    r = me("van-cell"),
    c = me("van-cell-group"),
    u = me("van-popup");
  return V(), q("div", null, [rt(h(l, {
    name: "wap-nav",
    onClick: a.toggleMenu,
    class: "menuBtn"
  }, null, 8, ["onClick"]), [
    [dt, !e.isMenuOpen && !e.isShowLangPicker]
  ]), h(u, {
    show: e.isMenuOpen,
    "onUpdate:show": t[5] || (t[5] = d => e.isMenuOpen = d),
    round: "",
    position: "top",
    closeable: ""
  }, {
    default: ae(() => [h(c, {
      inset: "",
      style: {
        "margin-top": "50px"
      }
    }, {
      default: ae(() => [h(r, {
        center: "",
        title: " 🌐 " + e.t("Language"),
        value: e.dbLangByKey[e.localSettings.lang].title,
        "is-link": "",
        "arrow-direction": "right",
        onClick: t[0] || (t[0] = d => e.isShowLangPicker = !0),
        size: "large"
      }, null, 8, ["title", "value"])]),
      _: 1
    }), h(c, {
      inset: "",
      style: {
        "margin-top": "20px"
      }
    }, {
      default: ae(() => [h(r, {
        center: "",
        title: " 🏆 " + e.t("Player Rankings"),
        "is-link": "",
        onClick: t[1] || (t[1] = d => e.$router.push("/rating")),
        size: "large"
      }, null, 8, ["title"]), e.uProfile.isAlfaTester || e.gameConfig["referral.commission.friend_count"] > 0 && e.uProfile.friends >= e.gameConfig["referral.commission.friend_count"] ? (V(), Me(r, {
        key: 0,
        center: "",
        title: " 💰 " + e.t("Referral commission"),
        "is-link": "",
        to: "/referral/commission",
        onClick: t[2] || (t[2] = d => {
          e.isMenuOpen = !1
        }),
        size: "large"
      }, null, 8, ["title"])) : Ce("", !0)]),
      _: 1
    }), h(c, {
      inset: "",
      style: {
        "margin-top": "20px"
      }
    }, {
      default: ae(() => [h(r, {
        center: "",
        title: " 💬 " + e.t("Our Telegram channel"),
        "is-link": "",
        onClick: e._ourTgClick,
        size: "large"
      }, null, 8, ["title", "onClick"]), h(r, {
        center: "",
        title: " 🛠️ " + e.t("Support"),
        "is-link": "",
        to: "/support",
        onClick: t[3] || (t[3] = d => {
          e.isMenuOpen = !1
        }),
        size: "large"
      }, null, 8, ["title"]), h(r, {
        center: "",
        title: " ⚖️ " + e.t("Terms of use"),
        "is-link": "",
        onClick: t[4] || (t[4] = d => e.$router.push("/terms")),
        size: "large"
      }, null, 8, ["title"])]),
      _: 1
    }), t[9] || (t[9] = T("br", null, null, -1))]),
    _: 1
  }, 8, ["show"]), h(u, {
    show: e.isShowLangPicker,
    "onUpdate:show": t[8] || (t[8] = d => e.isShowLangPicker = d),
    position: "top",
    closeable: ""
  }, {
    default: ae(() => [T("h2", MA, $(e.t("Select language")), 1), T("div", LA, [h(c, {
      inset: ""
    }, {
      default: ae(() => [h(r, {
        title: a.firstLang.title,
        "is-link": "",
        value: a.firstLang.key,
        center: "",
        onClick: t[6] || (t[6] = d => a.onLangSelect(a.firstLang.key))
      }, {
        icon: ae(() => [T("span", NA, $(a.firstLang.icon) + " ", 1)]),
        _: 1
      }, 8, ["title", "value"]), a.userLang ? (V(), Me(r, {
        key: 0,
        title: a.userLang.title,
        "is-link": "",
        value: a.userLang.key,
        center: "",
        onClick: t[7] || (t[7] = d => a.onLangSelect(a.userLang.key))
      }, {
        icon: ae(() => [T("span", FA, $(a.userLang.icon) + " ", 1)]),
        _: 1
      }, 8, ["title", "value"])) : Ce("", !0)]),
      _: 1
    }), (V(!0), q(Be, null, Ft(a.langByFirstLetter, (d, f) => (V(), q(Be, {
      key: f
    }, [T("div", zA, $(f), 1), h(c, {
      inset: ""
    }, {
      default: ae(() => [(V(!0), q(Be, null, Ft(d, m => (V(), Me(r, {
        key: m.key,
        title: m.title,
        label: m.titleEn,
        "is-link": "",
        value: m.key,
        center: "",
        onClick: g => a.onLangSelect(m.key)
      }, {
        icon: ae(() => [T("span", VA, $(m.icon) + " ", 1)]),
        _: 2
      }, 1032, ["title", "label", "value", "onClick"]))), 128))]),
      _: 2
    }, 1024)], 64))), 128))])]),
    _: 1
  }, 8, ["show"])])
}
const UA = vt($A, [
    ["render", HA],
    ["__scopeId", "data-v-7fd7d871"]
  ]),
  WA = {
    components: {
      Topup: Tm,
      Menu: UA
    },
    async created() {},
    mounted() {},
    props: {
      staticBg: {
        type: Boolean,
        default: !1
      }
    },
    data: function() {
      return {
        isMenuOpen: !1,
        isShowTphPopup: !1,
        isShowCoinPopup: !1,
        isShowLangPicker: !1
      }
    },
    computed: {
      isNoBg() {
        return this.stores.state.topBar.isNoBg
      },
      isNeedBg() {
        return this.stores.state.topBar.isNeedBg
      },
      isShowPph() {
        return this.stores.state.topBar.isShowPph
      },
      isShowMoney() {
        return this.stores.state.topBar.isShowMoney
      }
    },
    watch: {
      isShowTphPopup(e) {
        this._vibratePopup(e)
      },
      isShowCoinPopup(e) {
        this._vibratePopup(e)
      },
      $route() {
        this.$route.path === "/" && (this.isShowTphPopup = !1, this.isShowCoinPopup = !1)
      }
    },
    methods: {
      seeFeedDetails() {
        this.$emit("openFeedDetails")
      },
      async showTphPopup() {
        this.isShowTphPopup = !0, await this._completeOnboarding(this.onBoard.token)
      },
      async showCoinPopup() {
        this.isShowCoinPopup = !0, await this._completeOnboarding(this.onBoard.coin)
      }
    }
  },
  jA = {
    style: {
      padding: "15px 15px 0 15px"
    }
  },
  QA = {
    width: "100%"
  },
  KA = {
    style: {
      width: "100%",
      display: "flex",
      "align-items": "center"
    }
  },
  YA = {
    key: 0,
    style: {
      "font-size": "0.8em"
    }
  },
  qA = {
    key: 0,
    class: "panelRed",
    style: {
      margin: "30px 0"
    }
  },
  GA = {
    style: {
      "font-weight": "800",
      "font-size": "1.4em"
    }
  },
  ZA = {
    class: "white"
  },
  XA = {
    class: "flexLeft",
    style: {
      margin: "0 0 0 -5px"
    }
  },
  JA = {
    style: {
      "margin-left": "5px"
    }
  },
  eE = {
    class: "zTextShadow2sweet",
    style: {
      "font-weight": "800",
      "font-size": "1.5em"
    }
  },
  tE = {
    style: {
      "font-weight": "800",
      color: "#FFC04A",
      "font-size": "1.5em"
    }
  },
  nE = {
    class: "list"
  },
  oE = {
    class: "flexLeft",
    style: {
      margin: "30px 0 0 -5px"
    }
  },
  iE = {
    style: {
      "margin-left": "5px"
    }
  },
  sE = {
    class: "zTextShadow2sweet",
    style: {
      "font-weight": "800",
      "font-size": "1.5em"
    }
  },
  aE = {
    style: {
      "font-weight": "800",
      color: "#FFC04A",
      "font-size": "1.5em"
    }
  },
  lE = {
    key: 0,
    style: {
      color: "#fff",
      "font-size": "1.3em"
    }
  },
  rE = {
    key: 0
  },
  cE = {
    key: 1
  },
  uE = {
    class: "list"
  },
  dE = {
    style: {
      color: "#fff",
      "font-size": "1.3em",
      "font-weight": "bold",
      margin: "0 20px"
    },
    class: "zTextShadow2white"
  },
  fE = {
    key: 0
  },
  hE = {
    class: "flexLeft",
    style: {
      margin: "-10px 0 0 -5px"
    }
  },
  mE = {
    style: {
      "margin-left": "5px"
    }
  },
  gE = {
    class: "zTextShadow2sweet",
    style: {
      "font-weight": "800",
      "font-size": "1.5em"
    }
  },
  vE = {
    style: {
      "font-weight": "800",
      color: "#FFC04A"
    }
  },
  yE = {
    class: "list"
  };

function pE(e, t, n, o, s, a) {
  const l = me("van-icon"),
    r = me("van-button"),
    c = me("van-popup"),
    u = me("topup"),
    d = me("Menu");
  return V(), q("div", {
    class: ot(["topBar", {
      needBg: a.isNeedBg,
      noBg: a.isNoBg && !a.isNeedBg,
      staticBg: n.staticBg
    }])
  }, [T("div", jA, [T("table", QA, [T("tbody", null, [T("tr", null, [T("td", KA, [T("div", {
    class: ot(["metric token nowrap panelBrown", [e.uFeed.isNeedFeed ? "panelRed" : "panelBrown"]]),
    id: "tokens",
    onClick: t[0] || (t[0] = (...f) => a.showTphPopup && a.showTphPopup(...f))
  }, [t[4] || (t[4] = T("div", {
    class: "token30",
    style: {
      margin: "0 10px 0 -8px"
    }
  }, null, -1)), e.uFeed.isNeedFeed ? (V(), q("span", YA, $(e.t("Mining stopped")), 1)) : (V(), q("span", {
    key: 1,
    style: an([{
      "font-size": "1.3em",
      "font-weight": "800"
    }, {
      width: e._numberShort(e.uHero.tokens).toString().length + 1 + "ch"
    }]),
    class: "zTextShadow2sweet center"
  }, $(e._numberShort(e.uHero.tokens)), 5)), e._isOnboardingComplete(e.onBoard.token) ? Ce("", !0) : (V(), Me(l, {
    key: 2,
    name: "question"
  }))], 2), h(c, {
    show: e.isShowTphPopup,
    "onUpdate:show": t[1] || (t[1] = f => e.isShowTphPopup = f),
    round: "",
    position: "top",
    class: "metricPopUp",
    closeable: ""
  }, {
    default: ae(() => [e.uFeed.isNeedFeed ? (V(), q("div", qA, [T("div", GA, $(e.t("Token mining has stopped. ")), 1), T("div", ZA, $(e.t("The animals need to be fed.")), 1), h(r, {
      type: "warning",
      size: "large",
      onClick: a.seeFeedDetails,
      style: {
        "margin-top": "10px"
      }
    }, {
      default: ae(() => [he($(e.t("See details")), 1)]),
      _: 1
    }, 8, ["onClick"])])) : Ce("", !0), T("div", XA, [t[5] || (t[5] = T("span", {
      class: "token50"
    }, null, -1)), T("div", JA, [T("div", eE, $(e.t("{TOKEN_NAME} tokens", {
      TOKEN_NAME: e.TOKEN_NAME
    })), 1), T("div", tE, $(e._number(e.uHero.tokens)), 1)])]), T("ul", nE, [T("li", null, $(e.t("This is the number of tokens you'll get from the AirDrop.")), 1)]), T("div", oE, [t[9] || (t[9] = T("span", {
      class: "tph50"
    }, null, -1)), T("div", iE, [T("div", sE, $(e.t("Tokens per Hour")), 1), T("div", null, [T("span", aE, $(e._number(e.uHero.tph)), 1), e.uHero.tphBoost || e.uHero.tphAlliance ? (V(), q("span", lE, [he(" (" + $(e._number(e.uHero.tphBase)) + " ", 1), e.uHero.tphBoost ? (V(), q("span", rE, [he("+ " + $(e._number(e.uHero.tphBoost)) + " ", 1), t[6] || (t[6] = T("span", {
      class: "tphIcon",
      style: {
        "background-image": "url('/assets/img/decor/icon_boost.png')"
      }
    }, null, -1))])) : Ce("", !0), e.uHero.tphAlliance ? (V(), q("span", cE, [he("+ " + $(e._number(e.uHero.tphAlliance)) + " ", 1), t[7] || (t[7] = T("span", {
      class: "tphIcon",
      style: {
        "background-image": "url('/assets/img/decor/icon_ali.png')"
      }
    }, null, -1))])) : Ce("", !0), t[8] || (t[8] = he(") "))])) : Ce("", !0)])])]), T("ul", uE, [T("li", null, $(e.t("Tokens are added automatically, even when you're offline.")), 1), T("li", null, $(e.t("Buy new animals, level them up, and boost your hourly income to earn more {TOKEN_NAME} tokens.", {
      TOKEN_NAME: e.TOKEN_NAME
    })), 1), T("li", null, $(e.t("The level of your alliance also increases your hourly earnings.")), 1), T("li", null, $(e.t("You can increase your hourly earnings by buying a boost.")), 1)])]),
    _: 1
  }, 8, ["show"]), T("div", {
    class: "metric coin nowrap",
    id: "coins",
    onClick: t[2] || (t[2] = (...f) => a.showCoinPopup && a.showCoinPopup(...f))
  }, [t[10] || (t[10] = T("div", {
    class: "coin38",
    style: {
      margin: "0 -10px"
    }
  }, null, -1)), T("span", dE, [he($(e._numberShort(e.uHero.coins)) + " ", 1), e.stores.state.luckyHourTimerStr ? (V(), q("span", fE, "🎁")) : Ce("", !0)]), h(r, {
    type: "success",
    size: "small",
    style: {
      "aspect-ratio": "1",
      margin: "0 -10px"
    },
    icon: "plus"
  }), e._isOnboardingComplete(e.onBoard.coin) ? Ce("", !0) : (V(), Me(l, {
    key: 0,
    name: "question"
  }))]), h(c, {
    show: e.isShowCoinPopup,
    "onUpdate:show": t[3] || (t[3] = f => e.isShowCoinPopup = f),
    round: "",
    position: "top",
    class: "metricPopUp",
    closeable: ""
  }, {
    default: ae(() => [T("div", hE, [t[11] || (t[11] = T("span", {
      class: "coin60"
    }, null, -1)), T("div", mE, [T("div", gE, $(e.COIN_NAME), 1), T("div", vE, $(e._number(e.uHero.coins)), 1)])]), T("ul", yE, [T("li", null, $(e.t("This is the in-game currency.")), 1), T("li", null, $(e.t("Complete quests and invite friends to earn more coins!")), 1)]), T("p", null, $(e.t("Or you can buy them!")), 1), h(u)]),
    _: 1
  }, 8, ["show"])]), T("td", {
    style: {
      width: "40px",
      position: "relative"
    },
    class: ot({
      menuOpen: e.isMenuOpen
    })
  }, [h(d)], 2)])])])])], 2)
}
const Yr = vt(WA, [
    ["render", pE],
    ["__scopeId", "data-v-562de27d"]
  ]),
  bE = {
    name: "Quests-g",
    components: {
      TopBar: Yr,
      QuestChallenge: Ex,
      QuestDailyReward: Wx
    },
    async created() {
      this.stores.state.setPageSettings()
    },
    data() {
      return {}
    },
    mounted() {},
    computed: {},
    watch: {},
    methods: {}
  },
  wE = {
    class: "quests"
  },
  CE = {
    class: "pageContainer"
  },
  _E = {
    class: "aniH1",
    style: {
      margin: "15px 15px 0 15px"
    }
  },
  kE = {
    style: {
      margin: "0 15px 25px 15px"
    }
  };

function SE(e, t, n, o, s, a) {
  const l = me("QuestDailyReward"),
    r = me("QuestChallenge");
  return V(), q("div", wE, [T("div", CE, [T("h1", _E, $(e.t("Tasks")), 1), T("div", kE, $(e.t("Do tasks and earn more {COIN_NAME}", {
    COIN_NAME: e.COIN_NAME
  })), 1), h(l, {
    class: "container"
  }), h(r, {
    style: {},
    class: ot({
      blur: !e.stores.state.isAfterDataLoaded
    })
  }, null, 8, ["class"])])])
}
const xm = vt(bE, [
    ["render", SE]
  ]),
  TE = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: xm
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  gl = Ze({
    events: {},
    on(e, t) {
      this.events[e] || (this.events[e] = []), this.events[e].push(t)
    },
    emit(e, t) {
      this.events[e] && this.events[e].forEach(n => n(t))
    },
    off(e, t) {
      this.events[e] && (this.events[e] = this.events[e].filter(n => n !== t))
    }
  }),
  xE = {
    name: "Airdrop-g",
    components: {
      TopBar: Yr,
      TonWallet: jr
    },
    async created() {
      await window.listenTonConnect()
    },
    async mounted() {
      this.firstLoading && await this.loadTonWallet(), this.firstLoading = !1, this.updateCountdown(), this.intervalId = setInterval(this.updateCountdown, 1e3)
    },
    beforeDestroy() {
      clearInterval(this.intervalId)
    },
    unmounted() {},
    data() {
      return {
        firstLoading: !0,
        transactionLoading: !1,
        isTransactionSendHere: !1,
        connectedWallet: "",
        countdown: "",
        intervalId: null
      }
    },
    computed: {
      isWalletConnected() {
        return this.stores.state.isTonWalletConnected
      },
      isTonTransactionCompleted() {
        return this.uQuests.find(e => e.key === "ton_wallet_transaction")
      },
      isTransactionSend() {
        return this.isTransactionSendHere || !!this.uQuests.find(e => e.key === "ton_wallet_transaction")
      }
    },
    watch: {},
    methods: {
      openAlliancePopup() {
        gl.emit("openAllianceDetails")
      },
      openBoostPopup() {
        gl.emit("openBoostDetails")
      },
      openFeedPopup() {
        gl.emit("openFeedDetails")
      },
      async loadTonWallet() {
        const e = await this.apiCall("infoTonWallet");
        this.connectedWallet = e.wallet ? e.wallet : ""
      },
      async tonConnectStatusHandler(e) {
        this.firstLoading || (await this._delay(1e3), await this.loadTonWallet())
      },
      async handlePaid() {
        this.transactionLoading = !0;
        let e = !1;
        const t = 50;
        for (let n = 0; n < t; n++) try {
          if (e = (await this.apiCall("checkQuest", ["ton_wallet_transaction", null], !1)).result, e) {
            this.isTransactionSendHere = !0;
            break
          }
          await this._delay(5e3)
        } catch (o) {
          if (console.log("Error: %o", o), n === t - 1) {
            uo({
              type: "danger",
              message: "Transaction not found. Please ask support for help"
            });
            return
          }
        }
        this.transactionLoading = !1
      },
      updateCountdown() {
        const e = this.msLeftForMining();
        if (e <= 0) {
          this.countdown = "00:00:00", clearInterval(this.intervalId);
          return
        }
        const t = Math.floor(e / 1e3) % 60,
          n = Math.floor(e / (1e3 * 60)) % 60,
          o = Math.floor(e / (1e3 * 60 * 60)) % 24,
          s = Math.floor(e / (1e3 * 60 * 60 * 24));
        this.countdown = `${s}d ${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(t).padStart(2,"0")}`
      },
      msLeftForMining() {
        const e = new Date(Date.UTC(2025, 0, 31, 23, 59, 0)),
          t = new Date,
          n = new Date(t.getTime() + t.getTimezoneOffset() * 6e4);
        return e - n
      }
    }
  },
  AE = {
    class: "airdrop container pageContainer"
  },
  EE = {
    style: {
      "text-align": "center",
      "margin-top": "5px",
      "font-size": "1.3em",
      color: "#ffcc80"
    }
  },
  IE = {
    style: {
      "margin-bottom": "2px"
    }
  },
  PE = {
    style: {
      "font-size": "1.3em",
      "font-weight": "bold"
    }
  },
  OE = {
    style: {
      "font-size": "1.1em",
      "margin-bottom": "10px",
      "font-weight": "bold"
    }
  },
  BE = {
    style: {
      "padding-left": "5px",
      "margin-bottom": "10px"
    }
  },
  RE = {
    style: {
      "margin-bottom": "10px"
    }
  },
  DE = {
    class: "panelBrown",
    style: {
      "margin-top": "10px"
    }
  },
  $E = {
    style: {
      "margin-top": "5px"
    }
  },
  ME = {
    key: 0
  },
  LE = {
    key: 0,
    style: {
      "font-size": "1.3em"
    }
  },
  NE = {
    key: 1
  },
  FE = {
    key: 0
  },
  zE = {
    key: 0,
    class: "tips"
  },
  VE = {
    key: 1,
    class: "tips"
  },
  HE = {
    key: 1
  },
  UE = {
    style: {
      "margin-top": "2px",
      "font-size": "1.1em",
      color: "#ffcc80"
    }
  },
  WE = {
    style: {
      "margin-bottom": "3px",
      "text-align": "center",
      "font-size": "1.2em",
      "font-weight": "bold"
    }
  },
  jE = {
    style: {
      "margin-left": "20px",
      padding: "0",
      "list-style-position": "inside",
      "font-size": "0.9em"
    }
  },
  QE = {
    style: {
      "margin-bottom": "5px"
    }
  },
  KE = {
    style: {
      "margin-bottom": "5px"
    }
  },
  YE = {
    style: {
      "margin-bottom": "5px"
    }
  },
  qE = {
    style: {
      "margin-bottom": "5px"
    }
  },
  GE = {
    style: {
      "margin-top": "20px"
    }
  };

function ZE(e, t, n, o, s, a) {
  const l = me("ton-wallet"),
    r = me("van-icon");
  return V(), q("div", AE, [t[9] || (t[9] = T("h1", {
    class: "aniH1"
  }, "Airdrop", -1)), T("div", EE, [T("div", IE, [T("span", null, $(e.t("Mining phase ends in:")), 1)]), T("div", PE, $(s.countdown), 1)]), t[10] || (t[10] = T("br", null, null, -1)), T("div", null, [T("div", OE, $(e.t("Task for participating in {Airdrop}:")), 1), T("div", null, [T("ol", BE, [T("li", RE, [he($(e.t("1. Connect a wallet:")) + " ", 1), T("div", null, [h(l, {
    loading: s.firstLoading,
    onWalletConnectHandler: a.tonConnectStatusHandler,
    "saved-wallet": s.connectedWallet,
    style: {
      "margin-top": "5px"
    }
  }, null, 8, ["loading", "onWalletConnectHandler", "saved-wallet"])]), T("div", DE, [T("div", null, [h(r, {
    name: "warning-o"
  }), he(" " + $(e.t("A wallet can only be connected to one account.")), 1)])])]), T("li", null, [he($(e.t("2. Complete a TON transaction to verify that you are not a bot:")) + " ", 1), T("div", $E, [a.isWalletConnected ? (V(), q("span", ME, [a.isTonTransactionCompleted ? (V(), q("span", LE, [h(r, {
    name: "checked"
  }), he(" " + $(e.t("Transaction has been sent.")), 1)])) : (V(), q("span", NE, [a.isTransactionSend ? Ce("", !0) : (V(), q("div", FE, [h(l, {
    "transaction-value": e.uProfile.isAlfaTester ? .01 : e.gameConfig["ton.test_transaction_value"] ?? .5,
    "saved-wallet": s.connectedWallet,
    onPaid: a.handlePaid,
    loading: s.transactionLoading
  }, null, 8, ["transaction-value", "saved-wallet", "onPaid", "loading"]), s.transactionLoading ? Ce("", !0) : (V(), q("span", zE, " *" + $(e.t("If you have already sent a transaction, go to the quest and click «Check Action» there.")), 1))])), s.transactionLoading ? (V(), q("span", VE, $(e.t("Waiting blockchain, it could take few minutes...")), 1)) : Ce("", !0)]))])) : (V(), q("span", HE, $(e.t("Please connect your wallet first.")), 1))])])])])]), T("div", UE, [T("p", WE, $(e.t("How to earn more $ZOO?")), 1), T("ul", jE, [T("li", QE, [t[3] || (t[3] = he(" — ")), T("span", {
    onClick: t[0] || (t[0] = (...c) => a.openAlliancePopup && a.openAlliancePopup(...c)),
    style: {
      cursor: "pointer",
      "text-decoration": "underline"
    }
  }, $(e.t("Join alliances")), 1), t[4] || (t[4] = he(". "))]), T("li", KE, [t[5] || (t[5] = he(" — ")), T("span", {
    onClick: t[1] || (t[1] = (...c) => a.openBoostPopup && a.openBoostPopup(...c)),
    style: {
      cursor: "pointer",
      "text-decoration": "underline"
    }
  }, $(e.t("Purchase a boost")), 1), t[6] || (t[6] = he(". "))]), T("li", YE, [t[7] || (t[7] = he(" — ")), T("span", {
    onClick: t[2] || (t[2] = (...c) => a.openFeedPopup && a.openFeedPopup(...c)),
    style: {
      cursor: "pointer",
      "text-decoration": "underline"
    }
  }, $(e.t("Get Automatic Animal Feeding")), 1), t[8] || (t[8] = he(". "))]), T("li", qE, $(e.t("— Buy animals and participate in drops for the most profitable enclosures.")), 1), T("li", null, $(e.t("— Complete quests and invite friends to earn more Animal Feed and enhance your zoo.")), 1)])]), T("div", GE, [T("p", null, $(e.t("An {airdrop} is the distribution of tokens to players wallets. These tokens will be traded on top exchanges, and you can either sell or hold them.")), 1), T("p", null, $(e.t("We are currently in the mining phase where all players earn more {TOKEN_NAME} for the {airdrop}.", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), T("p", null, $(e.t("The date and conditions for receiving the {Airdrop} will be announced soon in our telegram channel.")), 1)])])
}
const Am = vt(xE, [
    ["render", ZE],
    ["__scopeId", "data-v-3bb4ccfc"]
  ]),
  XE = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Am
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  JE = {
    name: "Friends-g",
    components: {},
    async created() {
      this.stores.state.setPageSettings()
    },
    data() {
      return {
        isTakingReward: {},
        isListVisible: !1
      }
    },
    computed: {
      friendsCount() {
        return Math.max(this.uProfile.friends, this.uFriends.length)
      },
      totalFriendsTokens() {
        return this.uFriends.reduce((e, t) => e + t.tokens, 0)
      }
    },
    methods: {
      async shareBtnClick() {
        this._shareBtnClick(), await this._completeOnboarding(this.onBoard.friendInvite)
      }
    }
  },
  eI = {
    class: "friends"
  },
  tI = {
    class: "pageContainer container"
  },
  nI = {
    class: "",
    style: {
      "padding-bottom": "50px"
    }
  },
  oI = ["innerHTML"],
  iI = {
    class: "reward-list"
  },
  sI = ["innerHTML"],
  aI = ["innerHTML"],
  lI = ["innerHTML"],
  rI = ["innerHTML"],
  cI = ["innerHTML"],
  uI = ["innerHTML"],
  dI = ["innerHTML"],
  fI = ["innerHTML"],
  hI = {
    key: 0,
    class: "panelBrown"
  },
  mI = ["innerHTML"],
  gI = {
    key: 0,
    class: "right"
  },
  vI = {
    key: 1,
    style: {
      "font-size": "0.7em"
    }
  };

function yI(e, t, n, o, s, a) {
  const l = me("van-icon"),
    r = me("van-badge"),
    c = me("van-button"),
    u = me("van-sticky"),
    d = me("van-cell"),
    f = me("van-cell-group"),
    m = me("van-back-top");
  return V(), q("div", eI, [T("div", tI, [T("div", nI, [T("div", null, [T("h1", null, $(e.t("Invite Friends!")), 1), T("span", {
    onClick: t[0] || (t[0] = g => {
      this.isListVisible = !this.isListVisible
    }),
    style: {
      "border-bottom": "1px dashed #FFFFFF"
    }
  }, [T("span", {
    innerHTML: e.t("You can earn up to {COUNT} {IMG_COIN} {COIN_NAME} per friend:", {
      MIN: 1,
      MAX: 5,
      COUNT: e._number(1e4),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, oI), s.isListVisible ? (V(), Me(l, {
    key: 0,
    name: "arrow-down"
  })) : (V(), Me(l, {
    key: 1,
    name: "arrow"
  }))]), rt(T("ul", iI, [T("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 1,
      MAX: 5,
      COUNT: e._number(1e4),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, sI), T("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 6,
      MAX: 10,
      COUNT: e._number(5e3),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, aI), T("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 11,
      MAX: 20,
      COUNT: e._number(3e3),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, lI), T("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 21,
      MAX: 50,
      COUNT: e._number(1e3),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, rI), T("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 51,
      MAX: 100,
      COUNT: e._number(500),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, cI), T("li", {
    innerHTML: e.t("- Over {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MAX: 100,
      COUNT: e._number(50),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, uI)], 512), [
    [dt, s.isListVisible]
  ]), T("p", {
    innerHTML: e.t("If your friend has Telegram Premium, your bonus triples!", {
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, dI), T("p", {
    innerHTML: e.t("Your friend get {BONUS_FRIEND}  {IMG_COIN} {COIN_NAME} or {BONUS_FRIEND_PREMIUM} {IMG_COIN} {COIN_NAME} if friend has Telegram Premium.", {
      COIN_NAME: e.COIN_NAME,
      BONUS_FRIEND: e.gameConfig["ref.bonus.basic"],
      BONUS_FRIEND_PREMIUM: e.gameConfig["ref.bonus.premium"],
      IMG_COIN: e.IMG_COIN
    })
  }, null, 8, fI), e.gameConfig["referral.commission.friend_count"] > 0 && e.uProfile.friends >= e.gameConfig["referral.commission.friend_count"] ? (V(), q("p", hI, [he($(e.t("You have access to earning {PERCENT}% referral commissions from your friends payments.", {
    PERCENT: 30
  })) + " ", 1), T("span", {
    onClick: t[1] || (t[1] = g => e.$router.push("/referral/commission")),
    style: {
      "border-bottom": "1px dashed #FFC04A"
    }
  }, $(e.t("Check this out.")), 1)])) : Ce("", !0), t[2] || (t[2] = T("br", null, null, -1))]), h(u, {
    "offset-top": "15",
    onChange: e._stickyChange
  }, {
    default: ae(() => [T("div", {
      style: an([{
        display: "flex",
        "justify-content": "space-between"
      }, {
        background: e.isFixed ? "var(--van-background)" : ""
      }])
    }, [h(c, {
      type: "warning",
      size: "large",
      onClick: a.shareBtnClick,
      round: "",
      icon: "link-o"
    }, {
      default: ae(() => [h(r, {
        dot: e.uProfile.friends < 1 && !e._isOnboardingComplete(e.onBoard.friendInvite)
      }, {
        default: ae(() => [he($(e.t("Invite friends")), 1)]),
        _: 1
      }, 8, ["dot"])]),
      _: 1
    }, 8, ["onClick"])], 4)]),
    _: 1
  }, 8, ["onChange"]), t[4] || (t[4] = T("br", null, null, -1)), t[5] || (t[5] = T("br", null, null, -1)), t[6] || (t[6] = T("br", null, null, -1)), a.friendsCount > 0 ? (V(), q("div", {
    key: 0,
    class: ot({
      blur: !e.stores.state.isAfterDataLoaded
    })
  }, [T("div", {
    style: {
      "margin-bottom": "5px"
    },
    innerHTML: e.t(a.friendsCount === 1 ? "You have {friendsCount} friend." : "You have {friendsCount} friends.", {
      friendsCount: "<b>" + a.friendsCount + "</b>"
    })
  }, null, 8, mI), h(f, {
    inset: "",
    style: {
      margin: "0"
    }
  }, {
    default: ae(() => [(V(!0), q(Be, null, Ft(e.uFriends, g => (V(), Me(d, {
      key: g.id,
      title: g.name,
      size: "large",
      center: ""
    }, {
      "right-icon": ae(() => [g.coins > 0 ? (V(), q("div", gI, [he("+" + $(e._number(g.coins)) + " ", 1), t[3] || (t[3] = T("span", {
        class: "coin25"
      }, null, -1))])) : (V(), q("div", vI, $(e.t("Task not completed")), 1))]),
      _: 2
    }, 1032, ["title"]))), 128))]),
    _: 1
  })], 2)) : Ce("", !0)]), h(m, {
    bottom: "140"
  })])])
}
const Em = vt(JE, [
    ["render", yI],
    ["__scopeId", "data-v-b743d51c"]
  ]),
  pI = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Em
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  bI = {
    components: {},
    async created() {},
    mounted() {
      this.quiz.result && this.$refs.swipeOnboardingStart.swipeTo(this.quiz.questions.length)
    },
    props: {
      quiz: {
        type: Object
      }
    },
    data: function() {
      return {
        isSharesLoading: !1,
        selectedValues: [],
        isAlreadyRewarded: !1
      }
    },
    computed: {
      answerData() {
        return this.calculatedResult ? this.quiz.answers.filter(e => e.key === this.calculatedResult)[0] : null
      },
      calculatedResult() {
        if (this.quiz.result && this.selectedValues.length === 0) return this.quiz.result;
        const e = {};
        return this.selectedValues.forEach(n => {
          const o = JSON.parse(n);
          for (const [s, a] of Object.entries(o)) e[s] = (e[s] || 0) + a
        }), console.log(e), Object.entries(e).reduce((n, [o, s]) => s > n.count ? {
          animal: o,
          count: s
        } : n, {
          animal: null,
          count: -1 / 0
        }).animal
      }
    },
    watch: {},
    methods: {
      next() {
        this.$refs.swipeOnboardingStart.next()
      },
      prev() {
        this.$refs.swipeOnboardingStart.prev()
      },
      first() {
        this.$refs.swipeOnboardingStart.swipeTo(0), this.selectedValues = []
      },
      backToList() {
        this.selectedValues = [], this.$refs.swipeOnboardingStart.swipeTo(0), this.$emit("backToList")
      },
      async setAnswer(e, t) {
        if (this.selectedValues[e] = JSON.stringify(t.animals), this.next(), e === this.quiz.questions.length - 1) try {
          const n = await this.apiCall("quizResultSet", {
            key: this.quiz.key,
            result: this.calculatedResult
          });
          this.stores.user.setQuizzes(n.quizzes)
        } catch (n) {
          this._catchError(n)
        }
      },
      async shareStory() {
        if (!this.quiz.isRewarded && !this.isAlreadyRewarded) {
          this.isSharesLoading = !0;
          try {
            await this.initTgStory();
            const e = await this.apiCall("quizClaim", {
              key: this.quiz.key
            });
            this.isAlreadyRewarded = !0, this.stores.user.setQuizzes(e.quizzes), this.stores.user.setHero(e.hero)
          } catch {}
          this.isSharesLoading = !1
        } else await this.initTgStory()
      },
      async initTgStory() {
        const e = {
          text: this.t("Find out which animal you are! Follow this link") + " " + (this.uProfile.isPremium ? this.uRefLink : "@" + this.BOT_NAME) + " " + this.HASH_TAG
        };
        this.uProfile.isPremium && (e.widget_link = {
          url: this.uRefLink,
          name: this.t("Go to Zoo")
        });
        try {
          const t = `https://${this.API_DOMAIN}/quiz/story/background?data=` + btoa(JSON.stringify({
            quizKey: this.quiz.key,
            result: this.calculatedResult
          })) + "&user_id=" + this.uProfile.id + "&hash=" + Sm(this.uProfile.registrationDate);
          console.log("share story", t, JSON.stringify(e)), window.Telegram.WebApp.shareToStory(t, e)
        } catch (t) {
          throw uo({
            type: "danger",
            position: "bottom",
            message: this.t("Stories can only be created from a mobile device"),
            duration: 6e3
          }), await this._delay(3e3), this.isSharesLoading = !1, t
        }
      }
    }
  },
  wI = {
    class: "test",
    style: {
      direction: "ltr"
    }
  },
  CI = {
    class: "con"
  },
  _I = {
    class: "zTextShadow2white center"
  },
  kI = {
    class: "options"
  },
  SI = ["onClick"],
  TI = {
    class: "con container",
    style: {
      display: "flex",
      "align-items": "center",
      "justify-content": "space-between",
      height: "100%"
    }
  },
  xI = {
    class: "zTextShadow2white center",
    style: {
      "padding-top": "50px",
      margin: "0"
    }
  },
  AI = {
    class: "",
    style: {
      "padding-bottom": "30px"
    }
  },
  EI = {
    class: "panel"
  };

function II(e, t, n, o, s, a) {
  const l = me("van-icon"),
    r = me("van-swipe-item"),
    c = me("van-badge"),
    u = me("van-button"),
    d = me("van-swipe");
  return V(), q("div", wI, [h(d, {
    class: "onboardingSwipe",
    autoplay: 0,
    "show-indicators": !1,
    loop: !1,
    ref: "swipeOnboardingStart",
    style: {
      width: "100%"
    },
    duration: e.isRtl ? 0 : 500,
    touchable: !1
  }, {
    default: ae(() => [(V(!0), q(Be, null, Ft(n.quiz.questions, (f, m) => (V(), Me(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: ae(() => [T("div", CI, [T("h2", _I, $(f.desc), 1), T("div", kI, [(V(!0), q(Be, null, Ft(f.options, g => (V(), q("div", {
        class: "option",
        onClick: p => a.setAnswer(m, g)
      }, [e.selectedValues[m] === JSON.stringify(g.animals) ? (V(), Me(l, {
        key: 0,
        size: "30",
        name: "checked"
      })) : (V(), Me(l, {
        key: 1,
        size: "30",
        name: "circle"
      })), T("div", null, $(g.desc), 1)], 8, SI))), 256)), m > 0 ? (V(), q("div", {
        key: 0,
        class: "option",
        onClick: t[0] || (t[0] = (...g) => a.prev && a.prev(...g)),
        style: {
          "margin-top": "30px",
          "max-width": "40%"
        }
      }, $(e.t("Back")), 1)) : Ce("", !0)])])]),
      _: 2
    }, 1032, ["class"]))), 256)), h(r, {
      class: ot(["item itemResult", {
        rtl: e.isRtl
      }]),
      style: an({
        backgroundImage: "url(" + e._getQuizImg(n.quiz.key, a.calculatedResult) + ")"
      })
    }, {
      default: ae(() => {
        var f, m;
        return [T("div", TI, [T("h2", xI, $(n.quiz.title), 1), T("div", AI, [T("p", EI, $((f = a.answerData) == null ? void 0 : f.title) + " - " + $((m = a.answerData) == null ? void 0 : m.desc), 1), h(u, {
          onClick: a.shareStory,
          loading: e.isSharesLoading,
          type: "success",
          size: "large"
        }, {
          default: ae(() => [he($(e.t("Share to your story")) + " ", 1), n.quiz.isRewarded ? Ce("", !0) : (V(), Me(c, {
            key: 0,
            dot: ""
          }, {
            default: ae(() => [he($(n.quiz.reward) + " ", 1), t[2] || (t[2] = T("span", {
              class: "coin25"
            }, null, -1))]),
            _: 1
          }))]),
          _: 1
        }, 8, ["onClick", "loading"]), h(u, {
          onClick: a.first,
          type: "warning",
          style: {
            "margin-top": "15px",
            width: "100%"
          }
        }, {
          default: ae(() => [h(l, {
            name: "revoke"
          }), he(" " + $(e.t("Retake the quiz!")), 1)]),
          _: 1
        }, 8, ["onClick"])])])]
      }),
      _: 1
    }, 8, ["class", "style"])]),
    _: 1
  }, 8, ["duration"]), T("div", {
    class: "center",
    onClick: t[1] || (t[1] = (...f) => a.backToList && a.backToList(...f)),
    style: {
      position: "absolute",
      top: "10px",
      left: "15px",
      "font-weight": "700",
      filter: "drop-shadow(0px 1px 2px #000)"
    }
  }, [h(l, {
    name: "arrow-left"
  }), he(" " + $(e.t("Back to quiz selection")), 1)])])
}
const Im = vt(bI, [
    ["render", II],
    ["__scopeId", "data-v-ac2bbb0f"]
  ]),
  PI = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Im
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  OI = "/assets/paw-5F38omYJ.png",
  BI = {
    name: "Test-g",
    components: {
      TestProcess: Im
    },
    async created() {
      this.stores.state.setPageSettings()
    },
    data() {
      return {
        openedQuiz: null
      }
    },
    computed: {
      uQuizzesByKey() {
        return this._arrayByKey(this.uQuizzes, "key")
      },
      tests() {
        let e = this.dbQuizzes.map(t => (t.key in this.uQuizzesByKey && (t.result = this.uQuizzesByKey[t.key].result, t.isRewarded = this.uQuizzesByKey[t.key].isRewarded), t.rank = t.result ? t.isRewarded ? 3 : 1 : 2, t));
        return e.sort((t, n) => t.rank - n.rank), e
      }
    },
    methods: {
      openQuiz(e) {
        this.openedQuiz = e
      },
      backToList() {
        this.openedQuiz = null
      }
    }
  },
  RI = {
    key: 0,
    class: "Test"
  },
  DI = {
    class: "pageContainer container"
  },
  $I = {
    style: {
      "margin-bottom": "0"
    }
  },
  MI = {
    class: "zTextShadow2white"
  },
  LI = {
    class: "testList"
  },
  NI = ["onClick"],
  FI = {
    class: "title"
  },
  zI = {
    key: 0,
    class: "zTextShadow2white",
    style: {
      width: "100%"
    }
  },
  VI = {
    style: {
      "font-size": "1.5em"
    }
  },
  HI = {
    key: 1,
    style: {
      width: "100%"
    }
  };

function UI(e, t, n, o, s, a) {
  const l = me("van-badge"),
    r = me("van-button"),
    c = me("test-process");
  return s.openedQuiz ? (V(), Me(c, {
    key: 1,
    quiz: s.openedQuiz,
    onBackToList: a.backToList
  }, null, 8, ["quiz", "onBackToList"])) : (V(), q("div", RI, [T("div", DI, [T("h1", $I, $(e.t("Take the quiz and find out which animal you are!")), 1), T("div", MI, $(e.t("And get your reward!")), 1), t[3] || (t[3] = T("br", null, null, -1)), T("div", LI, [(V(!0), q(Be, null, Ft(a.tests, u => {
    var d;
    return V(), q("div", {
      key: u.key,
      class: "testItem panelBrown",
      onClick: f => a.openQuiz(u),
      style: an(u.result ? {
        backgroundImage: "url(" + e._getQuizImg(u.key, u.result) + ")",
        backgroundPosition: "0 -20px"
      } : "")
    }, [T("div", FI, $(u.title), 1), u.result ? (V(), q("div", zI, [u.isRewarded ? Ce("", !0) : (V(), Me(r, {
      key: 0,
      type: "success",
      size: "small"
    }, {
      default: ae(() => [h(l, {
        dot: ""
      }, {
        default: ae(() => [he($(e.t("Claim")) + " " + $(e._number(u.reward)) + " ", 1), t[0] || (t[0] = T("span", {
          class: "coin25"
        }, null, -1))]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1024)), T("div", VI, $((d = u.answers[u.result]) == null ? void 0 : d.title), 1)])) : (V(), q("div", HI, [t[1] || (t[1] = T("img", {
      src: OI,
      alt: "",
      style: {
        width: "60%",
        margin: "15px 0"
      }
    }, null, -1)), h(r, {
      type: "success",
      size: "large"
    }, {
      default: ae(() => [h(l, {
        dot: ""
      }, {
        default: ae(() => [he($(e.t("Take the quiz!")), 1)]),
        _: 1
      })]),
      _: 1
    }), he(" " + $(e.t("and get {count}", {
      count: e._number(u.reward)
    })) + " ", 1), t[2] || (t[2] = T("span", {
      class: "coin25"
    }, null, -1))]))], 12, NI)
  }), 128))])])]))
}
const Pm = vt(BI, [
    ["render", UI],
    ["__scopeId", "data-v-130bb5a5"]
  ]),
  WI = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Pm
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  jI = {
    components: {
      TestG: Pm,
      FriendsG: Em,
      AirdropG: Am,
      QuestsG: xm
    },
    mounted() {},
    data() {
      return {
        isShowPopup: {
          airdrop: !1,
          friends: !1,
          quests: !1,
          test: !1
        }
      }
    },
    watch: {
      "isShowPopup.airdrop"(e) {
        this._vibratePopup(e)
      },
      "isShowPopup.friends"(e) {
        this._vibratePopup(e)
      },
      "isShowPopup.quests"(e) {
        this._vibratePopup(e)
      },
      "isShowPopup.test"(e) {
        this._vibratePopup(e)
      },
      $route() {
        this.$route.path === "/" && (this.isShowPopup = {
          airdrop: !1,
          friends: !1,
          quests: !1,
          test: !1
        })
      }
    },
    computed: {
      isMainPage() {
        return this.$route.path === "/" || this.$route.path === "/home" || this.$route.path === "/finish"
      },
      isShowCloseBtn() {
        return Object.values(this.isShowPopup).some(e => e === !0)
      },
      isCanTakeQuestRewards() {
        return Object.values(this.uDailyRewards).some(e => e === "canTake") || Object.values(this.uQuests).some(e => e.isRewarded === !1)
      },
      isCanDoQuiz() {
        return Object.values(this.uQuizzes).some(e => e.isRewarded === !1) || this.uQuizzes.length < this.dbQuizzes.length
      },
      menuItems() {
        return [{
          route: "/airdrop",
          key: "airdrop",
          title: "Airdrop",
          icon: "point-gift-o",
          image: "/assets/img/decor/icon_airdrop.png",
          isDot: this.stores.state.isAfterDataLoaded && !this.uQuests.find(t => t.key === "ton_wallet_connect")
        }, {
          route: "/friends",
          key: "friends",
          title: this.t("Friends"),
          icon: "friends-o",
          image: "/assets/img/decor/icon_friends.png",
          isDot: this.uProfile.friends < 1 && !this._isOnboardingComplete(this.onBoard.friendInvite)
        }, {
          route: "/quests",
          key: "quests",
          title: this.t("Tasks"),
          icon: "list-switch",
          isDot: this.isCanTakeQuestRewards,
          image: "/assets/img/decor/icon_task.png"
        }, {
          route: "/test",
          key: "test",
          title: this.t("Quiz"),
          icon: "list-switch",
          isDot: this.isCanDoQuiz,
          image: "/assets/img/decor/icon_quiz.png"
        }]
      }
    },
    methods: {}
  },
  QI = ["onClick"],
  KI = {
    class: "flyBtnCont"
  },
  YI = {
    class: "flyBtnTitle"
  },
  qI = {
    class: "flyBtnCont"
  },
  GI = {
    class: "flyBtnTitle"
  };

function ZI(e, t, n, o, s, a) {
  const l = me("van-badge"),
    r = me("airdrop-g"),
    c = me("van-popup"),
    u = me("friends-g"),
    d = me("quests-g"),
    f = me("test-g"),
    m = me("van-icon");
  return a.isMainPage ? (V(), q("div", {
    key: 0,
    class: ot(["BottomBar", {
      zIndexFix: a.isShowCloseBtn
    }])
  }, [(V(!0), q(Be, null, Ft(a.menuItems, g => (V(), q("div", {
    class: "flyBtn",
    key: g.key,
    onClick: p => s.isShowPopup[g.key] = !0
  }, [h(l, {
    dot: g.isDot
  }, {
    default: ae(() => [T("div", KI, [T("div", {
      class: "flyBtnIcon",
      style: an({
        backgroundImage: `url(${g.image})`
      })
    }, null, 4)]), T("div", YI, $(g.title), 1)]),
    _: 2
  }, 1032, ["dot"])], 8, QI))), 128)), h(c, {
    show: s.isShowPopup.airdrop,
    "onUpdate:show": t[0] || (t[0] = g => s.isShowPopup.airdrop = g),
    position: "bottom",
    class: "popup",
    round: "",
    duration: .15,
    closeable: ""
  }, {
    default: ae(() => [h(r)]),
    _: 1
  }, 8, ["show"]), h(c, {
    show: s.isShowPopup.friends,
    "onUpdate:show": t[1] || (t[1] = g => s.isShowPopup.friends = g),
    position: "bottom",
    class: "popup",
    round: "",
    duration: .15,
    closeable: ""
  }, {
    default: ae(() => [h(u)]),
    _: 1
  }, 8, ["show"]), h(c, {
    show: s.isShowPopup.quests,
    "onUpdate:show": t[2] || (t[2] = g => s.isShowPopup.quests = g),
    position: "bottom",
    class: "popup",
    round: "",
    duration: .15,
    closeable: ""
  }, {
    default: ae(() => [h(d)]),
    _: 1
  }, 8, ["show"]), h(c, {
    show: s.isShowPopup.test,
    "onUpdate:show": t[3] || (t[3] = g => s.isShowPopup.test = g),
    position: "bottom",
    class: "popup",
    round: "",
    duration: .15,
    closeable: ""
  }, {
    default: ae(() => [h(f)]),
    _: 1
  }, 8, ["show"])], 2)) : (V(), q("div", {
    key: 1,
    class: "flyBtn BottomBar",
    onClick: t[4] || (t[4] = g => e.$router.push("/"))
  }, [T("div", qI, [h(m, {
    name: "wap-home",
    color: "#FFEDD9"
  })]), T("div", GI, $(e.t("Home")), 1)]))
}
const XI = vt(jI, [
    ["render", ZI],
    ["__scopeId", "data-v-4853e413"]
  ]),
  JI = new Error("request for lock canceled");
var eP = function(e, t, n, o) {
  function s(a) {
    return a instanceof n ? a : new n(function(l) {
      l(a)
    })
  }
  return new(n || (n = Promise))(function(a, l) {
    function r(d) {
      try {
        u(o.next(d))
      } catch (f) {
        l(f)
      }
    }

    function c(d) {
      try {
        u(o.throw(d))
      } catch (f) {
        l(f)
      }
    }

    function u(d) {
      d.done ? a(d.value) : s(d.value).then(r, c)
    }
    u((o = o.apply(e, t || [])).next())
  })
};
class tP {
  constructor(t, n = JI) {
    this._value = t, this._cancelError = n, this._queue = [], this._weightedWaiters = []
  }
  acquire(t = 1, n = 0) {
    if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
    return new Promise((o, s) => {
      const a = {
          resolve: o,
          reject: s,
          weight: t,
          priority: n
        },
        l = Om(this._queue, r => n <= r.priority);
      l === -1 && t <= this._value ? this._dispatchItem(a) : this._queue.splice(l + 1, 0, a)
    })
  }
  runExclusive(t) {
    return eP(this, arguments, void 0, function*(n, o = 1, s = 0) {
      const [a, l] = yield this.acquire(o, s);
      try {
        return yield n(a)
      } finally {
        l()
      }
    })
  }
  waitForUnlock(t = 1, n = 0) {
    if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
    return this._couldLockImmediately(t, n) ? Promise.resolve() : new Promise(o => {
      this._weightedWaiters[t - 1] || (this._weightedWaiters[t - 1] = []), nP(this._weightedWaiters[t - 1], {
        resolve: o,
        priority: n
      })
    })
  }
  isLocked() {
    return this._value <= 0
  }
  getValue() {
    return this._value
  }
  setValue(t) {
    this._value = t, this._dispatchQueue()
  }
  release(t = 1) {
    if (t <= 0) throw new Error(`invalid weight ${t}: must be positive`);
    this._value += t, this._dispatchQueue()
  }
  cancel() {
    this._queue.forEach(t => t.reject(this._cancelError)), this._queue = []
  }
  _dispatchQueue() {
    for (this._drainUnlockWaiters(); this._queue.length > 0 && this._queue[0].weight <= this._value;) this._dispatchItem(this._queue.shift()), this._drainUnlockWaiters()
  }
  _dispatchItem(t) {
    const n = this._value;
    this._value -= t.weight, t.resolve([n, this._newReleaser(t.weight)])
  }
  _newReleaser(t) {
    let n = !1;
    return () => {
      n || (n = !0, this.release(t))
    }
  }
  _drainUnlockWaiters() {
    if (this._queue.length === 0)
      for (let t = this._value; t > 0; t--) {
        const n = this._weightedWaiters[t - 1];
        n && (n.forEach(o => o.resolve()), this._weightedWaiters[t - 1] = [])
      } else {
        const t = this._queue[0].priority;
        for (let n = this._value; n > 0; n--) {
          const o = this._weightedWaiters[n - 1];
          if (!o) continue;
          const s = o.findIndex(a => a.priority <= t);
          (s === -1 ? o : o.splice(0, s)).forEach(a => a.resolve())
        }
      }
  }
  _couldLockImmediately(t, n) {
    return (this._queue.length === 0 || this._queue[0].priority < n) && t <= this._value
  }
}

function nP(e, t) {
  const n = Om(e, o => t.priority <= o.priority);
  e.splice(n + 1, 0, t)
}

function Om(e, t) {
  for (let n = e.length - 1; n >= 0; n--)
    if (t(e[n])) return n;
  return -1
}
var oP = function(e, t, n, o) {
  function s(a) {
    return a instanceof n ? a : new n(function(l) {
      l(a)
    })
  }
  return new(n || (n = Promise))(function(a, l) {
    function r(d) {
      try {
        u(o.next(d))
      } catch (f) {
        l(f)
      }
    }

    function c(d) {
      try {
        u(o.throw(d))
      } catch (f) {
        l(f)
      }
    }

    function u(d) {
      d.done ? a(d.value) : s(d.value).then(r, c)
    }
    u((o = o.apply(e, t || [])).next())
  })
};
class iP {
  constructor(t) {
    this._semaphore = new tP(1, t)
  }
  acquire() {
    return oP(this, arguments, void 0, function*(t = 0) {
      const [, n] = yield this._semaphore.acquire(1, t);
      return n
    })
  }
  runExclusive(t, n = 0) {
    return this._semaphore.runExclusive(() => t(), 1, n)
  }
  isLocked() {
    return this._semaphore.isLocked()
  }
  waitForUnlock(t = 0) {
    return this._semaphore.waitForUnlock(1, t)
  }
  release() {
    this._semaphore.isLocked() && this._semaphore.release()
  }
  cancel() {
    return this._semaphore.cancel()
  }
}
const sP = {
    name: "AllianceInfo",
    props: {
      allianceData: {
        type: Object
      }
    },
    components: {},
    async created() {},
    data() {
      return {
        isJoinLoading: !1
      }
    },
    watch: {},
    computed: {},
    methods: {
      async joinToAlliance(e, t) {
        if (t > this.uHero.coins) {
          this.stores.state.setLackOfCoin(t - this.uHero.coins), this.stores.state.setIsShowTopUp(!0);
          return
        }
        try {
          this.isJoinLoading = !0;
          const n = await this.apiCall("allianceJoin", e);
          this.stores.user.setAlliance(n.alliance), this.stores.user.setHero(n.hero), this.isShowAllianceInfo = !1
        } catch (n) {
          this._catchError(n)
        }
        this.isJoinLoading = !1
      }
    }
  },
  aP = {
    class: "flexBeetween",
    style: {
      margin: "-20px 0 20px 0"
    }
  },
  lP = {
    key: 0
  };

function rP(e, t, n, o, s, a) {
  const l = me("van-icon"),
    r = me("van-button");
  return V(), q("div", null, [T("h1", null, $(n.allianceData.name), 1), T("div", aP, [T("div", null, $(e.t("Founder:")) + " " + $(n.allianceData.ownerName), 1), T("div", null, "id:" + $(n.allianceData.id), 1)]), n.allianceData.channelLink ? (V(), q("div", lP, [he($(e.t("Channel:")) + " ", 1), T("span", {
    onClick: t[0] || (t[0] = c => e._openUrl("https://" + n.allianceData.channelLink)),
    style: {
      "border-bottom": "1px dashed #fff"
    }
  }, $(n.allianceData.channelLink), 1)])) : Ce("", !0), T("div", null, $(e.t("Level:")) + " " + $(n.allianceData.level), 1), T("div", null, [he($(e.t("Members:")) + " " + $(e._number(n.allianceData.members)) + " ", 1), h(l, {
    name: "friends"
  })]), T("div", null, [he($(e.t("Enter Fee:")) + " " + $(e._number(n.allianceData.enterFee)) + " ", 1), t[2] || (t[2] = T("span", {
    class: "coin25"
  }, null, -1))]), t[5] || (t[5] = T("br", null, null, -1)), T("div", null, [he($(e.t("Token per Hour bonus:")) + " +" + $(e.dbAllianceByLevel[n.allianceData.level].bonus) + "% ", 1), t[3] || (t[3] = T("span", {
    class: "tph24"
  }, null, -1))]), t[6] || (t[6] = T("br", null, null, -1)), e.uAlliance.id ? Ce("", !0) : (V(), Me(r, {
    key: 1,
    size: "large",
    type: "success",
    loading: s.isJoinLoading,
    onClick: t[1] || (t[1] = c => a.joinToAlliance(n.allianceData.id, n.allianceData.enterFee))
  }, {
    default: ae(() => [he($(e.t("Join")) + " " + $(e._number(n.allianceData.enterFee)) + " ", 1), t[4] || (t[4] = T("span", {
      class: "coin25"
    }, null, -1))]),
    _: 1
  }, 8, ["loading"]))])
}
const cP = vt(sP, [
    ["render", rP],
    ["__scopeId", "data-v-e3c39631"]
  ]),
  uP = new iP,
  dP = {
    components: {
      AllianceInfo: cP,
      Topup: Tm,
      TopBar: Yr,
      BottomBar: XI,
      OnboardingStart: A2
    },
    async created() {
      window.location.href.endsWith("?popup") && (this.$router.push("/"), history.replaceState(null, "", "/"));
      try {
        if (await Promise.all([await this.auth(), this.loadPageData(), this._delay(2e3)]), this.dbLoaded = !0, await this.loadPageDataAfter(), this.stores.user.startParam && !this.uAlliance.id) {
          const t = this.stores.user.startParam.match(/ref(\d+)/);
          if (t) {
            const n = t[1];
            try {
              const o = await this.apiCall("allianceInfoByUser", n);
              o != null && o.isOwner && (this.invitedRefAllianceData = o, this.isShowInviteRefAlliance = !0)
            } catch (o) {
              this._catchError(o)
            }
          }
        }
        window.tonConnectUI = async function() {
          return this._tonConnectUI ? this._tonConnectUI : await uP.runExclusive(async () => {
            if (this._tonConnectUI) return this._tonConnectUI;
            const {
              TonConnectUI: t
            } = await wt(async () => {
              const {
                TonConnectUI: n
              } = await import("./index-DR1bxtYK.js");
              return {
                TonConnectUI: n
              }
            }, []);
            return this._tonConnectUI = new t({
              manifestUrl: `https://${_m}/tonconnect-manifest.json`
            }), this._tonConnectUI
          })
        };
        const e = this;
        window.listenTonConnect = (async function() {
          this._isTonConnectListenActive || (this._isTonConnectListenActive = !0, console.log("listening ton connect"), this._isUserAction = !1, this.loadTonWalletContext(), (await window.tonConnectUI()).onModalStateChange(() => this._isUserAction = !0), (await window.tonConnectUI()).onStatusChange(this.onWalletStatusChange))
        }).bind(e)
      } catch (e) {
        e === "platform" && (this.isPlatformOk = !1), this._catchError(e)
      }
    },
    async mounted() {
      this.$nextTick(function() {
        this.onLoaded(), this.updateTheme()
      }), setInterval((function() {
        this.uHero.boostPercent && this.stores.user.updateBoostData(), this.stores.user.updateFeedData()
      }).bind(this), 1e4), setInterval((function() {
        this.uFeed.isNeedFeed || this.stores.user.setHeroTokens(), this.calcLuckyTimerStr()
      }).bind(this), 1e3)
    },
    data() {
      return {
        isPlatformOk: !0,
        dbLoaded: !1,
        isShowInviteRefAlliance: !1,
        isShowFriendsTask: !1,
        invitedRefAllianceData: null
      }
    },
    computed: {
      textLeft() {
        const e = Date.UTC(2025, 0, 31, 23, 59, 59),
          t = Date.now(),
          n = e - t;
        return n < 0 ? "The mining phase is complete" : Math.floor(n / (1e3 * 60 * 60 * 24))
      }
    },
    methods: {
      onLoaded() {
        this._isIphone() ? document.documentElement.classList.add("isIphone") : (document.documentElement.classList.add("isNotIphone"), this.onScroll(), document.documentElement.addEventListener("touchstart", this.onScroll, {
          passive: !1
        }), document.documentElement.addEventListener("touchmove", this.onScroll, {
          passive: !1
        }), document.documentElement.addEventListener("scroll", this.onScroll, {
          passive: !1
        }))
      },
      onScroll() {
        window.scrollY <= 1 && window.scrollTo(0, 1)
      },
      updateTheme() {
        const e = "#8dc643";
        window.Telegram.WebApp.setHeaderColor(e), window.Telegram.WebApp.setBackgroundColor(e)
      },
      async onWalletStatusChange(e) {
        if (this.saveTonWalletContext(), this.stores.state.setIsTonWalletConnected(e !== null), e === null) return;
        if (!this._isUserAction) {
          await this.validateWalletOrDisconnect(e);
          return
        }
        try {
          this.markWalletAsValid(), await this.apiCall("saveTonWallet", {
            wallet: e
          }, !1)
        } catch (n) {
          throw uo({
            type: "danger",
            message: "wallet connection problem: " + n
          }), (await window.tonConnectUI()).disconnect(), n
        }
        await this.apiCall("checkQuest", ["ton_wallet_connect", null]);
        const t = await this.apiCall("getQuests", "");
        t && this.stores.user.setQuests(t)
      },
      async validateWalletOrDisconnect(e) {
        if (this.isWalletMarkedAsValid()) return;
        const {
          isValid: t
        } = await this.apiCall("validateTonWallet", {
          wallet: e
        });
        if (!t) {
          await (await window.tonConnectUI()).disconnect();
          return
        }
        this.markWalletAsValid()
      },
      isWalletMarkedAsValid() {
        return localStorage.getItem("is_ton_wallet_valid_" + this.uProfile.id)
      },
      markWalletAsValid() {
        localStorage.setItem("is_ton_wallet_valid_" + this.uProfile.id, "1")
      },
      loadTonWalletContext() {
        const e = "ton_context_" + this.uProfile.id + "__";
        Object.entries(localStorage).forEach(([t, n]) => {
          t.indexOf(e) === 0 && localStorage.setItem(t.replace(e, ""), n)
        })
      },
      saveTonWalletContext() {
        const e = "ton_context_" + this.uProfile.id + "__";
        if (localStorage.getItem("ton-connect-ui_wallet-info") === null) {
          this.clearTonWalletContext();
          return
        }
        Object.entries(localStorage).forEach(([t, n]) => {
          t.indexOf("ton-connect-") === 0 && localStorage.setItem(e + t, n)
        })
      },
      clearTonWalletContext() {
        const e = "ton_context_" + this.uProfile.id + "__";
        Object.entries(localStorage).forEach(([t]) => {
          t.indexOf(e) === 0 && localStorage.removeItem(t)
        })
      },
      calcLuckyTimerStr() {
        const e = new Date,
          t = e.toISOString().slice(0, 10);
        if (t in this.dbLuckyHoursByKey) {
          const n = new Date(this.dbLuckyHoursByKey[t].dateStart.replace(" ", "T") + "Z"),
            o = new Date(this.dbLuckyHoursByKey[t].dateEnd.replace(" ", "T") + "Z");
          if (e > n && e < o) {
            const s = o - e;
            if (s > 0) {
              const a = Math.floor(s / 6e4),
                l = Math.floor(s / 1e3) % 60;
              this.stores.state.setLuckyHourTimerStr(a + ":" + ("0" + l).slice(-2))
            } else this.stores.state.setLuckyHourTimerStr("1111")
          }
        }
      }
    }
  },
  fP = {
    key: 0,
    class: "loadingScreen"
  },
  hP = {
    id: "scrollable",
    class: "scrollable"
  },
  mP = {
    class: "panelBrown",
    style: {
      margin: "10px"
    }
  },
  gP = {
    class: "container"
  },
  vP = {
    class: "container"
  };

function yP(e, t, n, o, s, a) {
  const l = me("OnboardingStart"),
    r = me("RouterView"),
    c = me("BottomBar"),
    u = me("alliance-info"),
    d = me("van-popup"),
    f = me("van-badge"),
    m = me("van-button"),
    g = me("topup");
  return V(), q("div", null, [s.dbLoaded ? e._isOnboardingComplete(e.onBoard.start) ? (V(), q(Be, {
    key: 2
  }, [T("div", hP, [h(r)]), h(c), h(d, {
    show: s.isShowInviteRefAlliance,
    "onUpdate:show": t[0] || (t[0] = p => s.isShowInviteRefAlliance = p),
    round: "",
    closeable: "",
    style: {
      "min-width": "90%"
    },
    duration: "0.15"
  }, {
    default: ae(() => [T("div", mP, $(e.t("You are invited to join an alliance.")), 1), h(u, {
      "alliance-data": s.invitedRefAllianceData,
      class: "container"
    }, null, 8, ["alliance-data"])]),
    _: 1
  }, 8, ["show"]), h(d, {
    show: s.isShowFriendsTask,
    round: "",
    closeable: "",
    style: {
      "min-width": "90%"
    },
    duration: "0.15",
    onClose: t[1] || (t[1] = p => {
      s.isShowFriendsTask = !1, e._completeOnboarding(e.onBoard.friendTaskPopup2)
    })
  }, {
    default: ae(() => [T("div", gP, [T("h1", null, $(e.t("GET UNIQUE ANIMAL")), 1), t[4] || (t[4] = T("div", {
      class: "center"
    }, [T("img", {
      src: "/assets/img/buildings/special/special_snake_aspid.png",
      alt: "",
      style: {
        "max-width": "300px",
        margin: "-20px 0"
      }
    })], -1)), T("p", null, $(e.t("Invite 10 more friends by January 24th, 12:00 UTC, and claim a Aspid for only 1 Animal Feed!")), 1), T("p", null, $(e.t("Aspid generates {count} {TOKEN_NAME} per hour.", {
      count: e._number(77777),
      TOKEN_NAME: e.TOKEN_NAME
    })), 1), T("p", null, $(e.t("Don't wait — start inviting your friends now!")), 1), h(m, {
      type: "warning",
      size: "large",
      onClick: e._shareBtnClick,
      round: "",
      icon: "link-o"
    }, {
      default: ae(() => [h(f, null, {
        default: ae(() => [he($(e.t("Invite friends")), 1)]),
        _: 1
      })]),
      _: 1
    }, 8, ["onClick"])])]),
    _: 1
  }, 8, ["show"])], 64)) : (V(), Me(l, {
    key: 1
  })) : (V(), q("div", fP, t[3] || (t[3] = [T("div", {
    class: "center",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#47484c",
      "font-weight": "700",
      "font-size": "1.5em"
    }
  }, " Last day of mining ", -1), T("div", {
    class: "progressBar"
  }, [T("div", {
    class: "progressResult"
  })], -1)]))), h(d, {
    show: this.stores.state.isShowTopup,
    position: "center",
    closeable: "",
    round: "",
    style: {
      width: "90%"
    },
    onClose: t[2] || (t[2] = p => e.stores.state.setIsShowTopUp(!1))
  }, {
    default: ae(() => [T("div", vP, [h(g, {
      "lack-of-coin": this.stores.state.lackOfCoin
    }, null, 8, ["lack-of-coin"])])]),
    _: 1
  }, 8, ["show"])])
}
const pP = vt(dP, [
  ["render", yP],
  ["__scopeId", "data-v-a711c0e6"]
]);
/*!
 * vue-router v4.4.5
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
const Jo = typeof document < "u";

function Bm(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function bP(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Bm(e.default)
}
const Qe = Object.assign;

function vl(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = sn(s) ? s.map(e) : e(s)
  }
  return n
}
const Wi = () => {},
  sn = Array.isArray,
  Rm = /#/g,
  wP = /&/g,
  CP = /\//g,
  _P = /=/g,
  kP = /\?/g,
  Dm = /\+/g,
  SP = /%5B/g,
  TP = /%5D/g,
  $m = /%5E/g,
  xP = /%60/g,
  Mm = /%7B/g,
  AP = /%7C/g,
  Lm = /%7D/g,
  EP = /%20/g;

function qr(e) {
  return encodeURI("" + e).replace(AP, "|").replace(SP, "[").replace(TP, "]")
}

function IP(e) {
  return qr(e).replace(Mm, "{").replace(Lm, "}").replace($m, "^")
}

function Yl(e) {
  return qr(e).replace(Dm, "%2B").replace(EP, "+").replace(Rm, "%23").replace(wP, "%26").replace(xP, "`").replace(Mm, "{").replace(Lm, "}").replace($m, "^")
}

function PP(e) {
  return Yl(e).replace(_P, "%3D")
}

function OP(e) {
  return qr(e).replace(Rm, "%23").replace(kP, "%3F")
}

function BP(e) {
  return e == null ? "" : OP(e).replace(CP, "%2F")
}

function ns(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
const RP = /\/$/,
  DP = e => e.replace(RP, "");

function yl(e, t, n = "/") {
  let o, s = {},
    a = "",
    l = "";
  const r = t.indexOf("#");
  let c = t.indexOf("?");
  return r < c && r >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), a = t.slice(c + 1, r > -1 ? r : t.length), s = e(a)), r > -1 && (o = o || t.slice(0, r), l = t.slice(r, t.length)), o = NP(o ?? t, n), {
    fullPath: o + (a && "?") + a + l,
    path: o,
    query: s,
    hash: ns(l)
  }
}

function $P(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "")
}

function Gu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function MP(e, t, n) {
  const o = t.matched.length - 1,
    s = n.matched.length - 1;
  return o > -1 && o === s && hi(t.matched[o], n.matched[s]) && Nm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function hi(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}

function Nm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e)
    if (!LP(e[n], t[n])) return !1;
  return !0
}

function LP(e, t) {
  return sn(e) ? Zu(e, t) : sn(t) ? Zu(t, e) : e === t
}

function Zu(e, t) {
  return sn(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t
}

function NP(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    o = e.split("/"),
    s = o[o.length - 1];
  (s === ".." || s === ".") && o.push("");
  let a = n.length - 1,
    l, r;
  for (l = 0; l < o.length; l++)
    if (r = o[l], r !== ".")
      if (r === "..") a > 1 && a--;
      else break;
  return n.slice(0, a).join("/") + "/" + o.slice(l).join("/")
}
const Jn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var os;
(function(e) {
  e.pop = "pop", e.push = "push"
})(os || (os = {}));
var ji;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = ""
})(ji || (ji = {}));

function FP(e) {
  if (!e)
    if (Jo) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), DP(e)
}
const zP = /^[^#]+#/;

function VP(e, t) {
  return e.replace(zP, "#") + t
}

function HP(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  }
}
const Ra = () => ({
  left: window.scrollX,
  top: window.scrollY
});

function UP(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      o = typeof n == "string" && n.startsWith("#"),
      s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) return;
    t = HP(s, e)
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function Xu(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const ql = new Map;

function WP(e, t) {
  ql.set(e, t)
}

function jP(e) {
  const t = ql.get(e);
  return ql.delete(e), t
}
let QP = () => location.protocol + "//" + location.host;

function Fm(e, t) {
  const {
    pathname: n,
    search: o,
    hash: s
  } = t, a = e.indexOf("#");
  if (a > -1) {
    let r = s.includes(e.slice(a)) ? e.slice(a).length : 1,
      c = s.slice(r);
    return c[0] !== "/" && (c = "/" + c), Gu(c, "")
  }
  return Gu(n, e) + o + s
}

function KP(e, t, n, o) {
  let s = [],
    a = [],
    l = null;
  const r = ({
    state: m
  }) => {
    const g = Fm(e, location),
      p = n.value,
      y = t.value;
    let b = 0;
    if (m) {
      if (n.value = g, t.value = m, l && l === p) {
        l = null;
        return
      }
      b = y ? m.position - y.position : 0
    } else o(g);
    s.forEach(w => {
      w(n.value, p, {
        delta: b,
        type: os.pop,
        direction: b ? b > 0 ? ji.forward : ji.back : ji.unknown
      })
    })
  };

  function c() {
    l = n.value
  }

  function u(m) {
    s.push(m);
    const g = () => {
      const p = s.indexOf(m);
      p > -1 && s.splice(p, 1)
    };
    return a.push(g), g
  }

  function d() {
    const {
      history: m
    } = window;
    m.state && m.replaceState(Qe({}, m.state, {
      scroll: Ra()
    }), "")
  }

  function f() {
    for (const m of a) m();
    a = [], window.removeEventListener("popstate", r), window.removeEventListener("beforeunload", d)
  }
  return window.addEventListener("popstate", r), window.addEventListener("beforeunload", d, {
    passive: !0
  }), {
    pauseListeners: c,
    listen: u,
    destroy: f
  }
}

function Ju(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Ra() : null
  }
}

function YP(e) {
  const {
    history: t,
    location: n
  } = window, o = {
    value: Fm(e, n)
  }, s = {
    value: t.state
  };
  s.value || a(o.value, {
    back: null,
    current: o.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);

  function a(c, u, d) {
    const f = e.indexOf("#"),
      m = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + c : QP() + e + c;
    try {
      t[d ? "replaceState" : "pushState"](u, "", m), s.value = u
    } catch (g) {
      console.error(g), n[d ? "replace" : "assign"](m)
    }
  }

  function l(c, u) {
    const d = Qe({}, t.state, Ju(s.value.back, c, s.value.forward, !0), u, {
      position: s.value.position
    });
    a(c, d, !0), o.value = c
  }

  function r(c, u) {
    const d = Qe({}, s.value, t.state, {
      forward: c,
      scroll: Ra()
    });
    a(d.current, d, !0);
    const f = Qe({}, Ju(o.value, c, null), {
      position: d.position + 1
    }, u);
    a(c, f, !1), o.value = c
  }
  return {
    location: o,
    state: s,
    push: r,
    replace: l
  }
}

function qP(e) {
  e = FP(e);
  const t = YP(e),
    n = KP(e, t.state, t.location, t.replace);

  function o(a, l = !0) {
    l || n.pauseListeners(), history.go(a)
  }
  const s = Qe({
    location: "",
    base: e,
    go: o,
    createHref: VP.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s
}

function GP(e) {
  return typeof e == "string" || e && typeof e == "object"
}

function zm(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const Vm = Symbol("");
var ed;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(ed || (ed = {}));

function mi(e, t) {
  return Qe(new Error, {
    type: e,
    [Vm]: !0
  }, t)
}

function In(e, t) {
  return e instanceof Error && Vm in e && (t == null || !!(e.type & t))
}
const td = "[^/]+?",
  ZP = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  },
  XP = /[.+*?^${}()[\]/\\]/g;

function JP(e, t) {
  const n = Qe({}, ZP, t),
    o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const u of e) {
    const d = u.length ? [] : [90];
    n.strict && !u.length && (s += "/");
    for (let f = 0; f < u.length; f++) {
      const m = u[f];
      let g = 40 + (n.sensitive ? .25 : 0);
      if (m.type === 0) f || (s += "/"), s += m.value.replace(XP, "\\$&"), g += 40;
      else if (m.type === 1) {
        const {
          value: p,
          repeatable: y,
          optional: b,
          regexp: w
        } = m;
        a.push({
          name: p,
          repeatable: y,
          optional: b
        });
        const v = w || td;
        if (v !== td) {
          g += 10;
          try {
            new RegExp(`(${v})`)
          } catch (_) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${v}): ` + _.message)
          }
        }
        let C = y ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        f || (C = b && u.length < 2 ? `(?:/${C})` : "/" + C), b && (C += "?"), s += C, g += 20, b && (g += -8), y && (g += -20), v === ".*" && (g += -50)
      }
      d.push(g)
    }
    o.push(d)
  }
  if (n.strict && n.end) {
    const u = o.length - 1;
    o[u][o[u].length - 1] += .7000000000000001
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
  const l = new RegExp(s, n.sensitive ? "" : "i");

  function r(u) {
    const d = u.match(l),
      f = {};
    if (!d) return null;
    for (let m = 1; m < d.length; m++) {
      const g = d[m] || "",
        p = a[m - 1];
      f[p.name] = g && p.repeatable ? g.split("/") : g
    }
    return f
  }

  function c(u) {
    let d = "",
      f = !1;
    for (const m of e) {
      (!f || !d.endsWith("/")) && (d += "/"), f = !1;
      for (const g of m)
        if (g.type === 0) d += g.value;
        else if (g.type === 1) {
        const {
          value: p,
          repeatable: y,
          optional: b
        } = g, w = p in u ? u[p] : "";
        if (sn(w) && !y) throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
        const v = sn(w) ? w.join("/") : w;
        if (!v)
          if (b) m.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : f = !0);
          else throw new Error(`Missing required param "${p}"`);
        d += v
      }
    }
    return d || "/"
  }
  return {
    re: l,
    score: o,
    keys: a,
    parse: r,
    stringify: c
  }
}

function eO(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length;) {
    const o = t[n] - e[n];
    if (o) return o;
    n++
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function Hm(e, t) {
  let n = 0;
  const o = e.score,
    s = t.score;
  for (; n < o.length && n < s.length;) {
    const a = eO(o[n], s[n]);
    if (a) return a;
    n++
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (nd(o)) return 1;
    if (nd(s)) return -1
  }
  return s.length - o.length
}

function nd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0
}
const tO = {
    type: 0,
    value: ""
  },
  nO = /[a-zA-Z0-9_]/;

function oO(e) {
  if (!e) return [
    []
  ];
  if (e === "/") return [
    [tO]
  ];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

  function t(g) {
    throw new Error(`ERR (${n})/"${u}": ${g}`)
  }
  let n = 0,
    o = n;
  const s = [];
  let a;

  function l() {
    a && s.push(a), a = []
  }
  let r = 0,
    c, u = "",
    d = "";

  function f() {
    u && (n === 0 ? a.push({
      type: 0,
      value: u
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: u,
      regexp: d,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), u = "")
  }

  function m() {
    u += c
  }
  for (; r < e.length;) {
    if (c = e[r++], c === "\\" && n !== 2) {
      o = n, n = 4;
      continue
    }
    switch (n) {
      case 0:
        c === "/" ? (u && f(), l()) : c === ":" ? (f(), n = 1) : m();
        break;
      case 4:
        m(), n = o;
        break;
      case 1:
        c === "(" ? n = 2 : nO.test(c) ? m() : (f(), n = 0, c !== "*" && c !== "?" && c !== "+" && r--);
        break;
      case 2:
        c === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + c : n = 3 : d += c;
        break;
      case 3:
        f(), n = 0, c !== "*" && c !== "?" && c !== "+" && r--, d = "";
        break;
      default:
        t("Unknown state");
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), l(), s
}

function iO(e, t, n) {
  const o = JP(oO(e.path), n),
    s = Qe(o, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}

function sO(e, t) {
  const n = [],
    o = new Map;
  t = ad({
    strict: !1,
    end: !0,
    sensitive: !1
  }, t);

  function s(f) {
    return o.get(f)
  }

  function a(f, m, g) {
    const p = !g,
      y = id(f);
    y.aliasOf = g && g.record;
    const b = ad(t, f),
      w = [y];
    if ("alias" in f) {
      const _ = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const k of _) w.push(id(Qe({}, y, {
        components: g ? g.record.components : y.components,
        path: k,
        aliasOf: g ? g.record : y
      })))
    }
    let v, C;
    for (const _ of w) {
      const {
        path: k
      } = _;
      if (m && k[0] !== "/") {
        const I = m.record.path,
          D = I[I.length - 1] === "/" ? "" : "/";
        _.path = m.record.path + (k && D + k)
      }
      if (v = iO(_, m, b), g ? g.alias.push(v) : (C = C || v, C !== v && C.alias.push(v), p && f.name && !sd(v) && l(f.name)), Um(v) && c(v), y.children) {
        const I = y.children;
        for (let D = 0; D < I.length; D++) a(I[D], v, g && g.children[D])
      }
      g = g || v
    }
    return C ? () => {
      l(C)
    } : Wi
  }

  function l(f) {
    if (zm(f)) {
      const m = o.get(f);
      m && (o.delete(f), n.splice(n.indexOf(m), 1), m.children.forEach(l), m.alias.forEach(l))
    } else {
      const m = n.indexOf(f);
      m > -1 && (n.splice(m, 1), f.record.name && o.delete(f.record.name), f.children.forEach(l), f.alias.forEach(l))
    }
  }

  function r() {
    return n
  }

  function c(f) {
    const m = rO(f, n);
    n.splice(m, 0, f), f.record.name && !sd(f) && o.set(f.record.name, f)
  }

  function u(f, m) {
    let g, p = {},
      y, b;
    if ("name" in f && f.name) {
      if (g = o.get(f.name), !g) throw mi(1, {
        location: f
      });
      b = g.record.name, p = Qe(od(m.params, g.keys.filter(C => !C.optional).concat(g.parent ? g.parent.keys.filter(C => C.optional) : []).map(C => C.name)), f.params && od(f.params, g.keys.map(C => C.name))), y = g.stringify(p)
    } else if (f.path != null) y = f.path, g = n.find(C => C.re.test(y)), g && (p = g.parse(y), b = g.record.name);
    else {
      if (g = m.name ? o.get(m.name) : n.find(C => C.re.test(m.path)), !g) throw mi(1, {
        location: f,
        currentLocation: m
      });
      b = g.record.name, p = Qe({}, m.params, f.params), y = g.stringify(p)
    }
    const w = [];
    let v = g;
    for (; v;) w.unshift(v.record), v = v.parent;
    return {
      name: b,
      path: y,
      params: p,
      matched: w,
      meta: lO(w)
    }
  }
  e.forEach(f => a(f));

  function d() {
    n.length = 0, o.clear()
  }
  return {
    addRoute: a,
    resolve: u,
    removeRoute: l,
    clearRoutes: d,
    getRoutes: r,
    getRecordMatcher: s
  }
}

function od(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n
}

function id(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: aO(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set,
    updateGuards: new Set,
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && {
      default: e.component
    }
  };
  return Object.defineProperty(t, "mods", {
    value: {}
  }), t
}

function aO(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else
    for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n;
  return t
}

function sd(e) {
  for (; e;) {
    if (e.record.aliasOf) return !0;
    e = e.parent
  }
  return !1
}

function lO(e) {
  return e.reduce((t, n) => Qe(t, n.meta), {})
}

function ad(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n
}

function rO(e, t) {
  let n = 0,
    o = t.length;
  for (; n !== o;) {
    const a = n + o >> 1;
    Hm(e, t[a]) < 0 ? o = a : n = a + 1
  }
  const s = cO(e);
  return s && (o = t.lastIndexOf(s, o - 1)), o
}

function cO(e) {
  let t = e;
  for (; t = t.parent;)
    if (Um(t) && Hm(e, t) === 0) return t
}

function Um({
  record: e
}) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function uO(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(Dm, " "),
      l = a.indexOf("="),
      r = ns(l < 0 ? a : a.slice(0, l)),
      c = l < 0 ? null : ns(a.slice(l + 1));
    if (r in t) {
      let u = t[r];
      sn(u) || (u = t[r] = [u]), u.push(c)
    } else t[r] = c
  }
  return t
}

function ld(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = PP(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue
    }(sn(o) ? o.map(a => a && Yl(a)) : [o && Yl(o)]).forEach(a => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a))
    })
  }
  return t
}

function dO(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = sn(o) ? o.map(s => s == null ? null : "" + s) : o == null ? o : "" + o)
  }
  return t
}
const fO = Symbol(""),
  rd = Symbol(""),
  Gr = Symbol(""),
  Wm = Symbol(""),
  Gl = Symbol("");

function Bi() {
  let e = [];

  function t(o) {
    return e.push(o), () => {
      const s = e.indexOf(o);
      s > -1 && e.splice(s, 1)
    }
  }

  function n() {
    e = []
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  }
}

function io(e, t, n, o, s, a = l => l()) {
  const l = o && (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, c) => {
    const u = m => {
        m === !1 ? c(mi(4, {
          from: n,
          to: t
        })) : m instanceof Error ? c(m) : GP(m) ? c(mi(2, {
          from: t,
          to: m
        })) : (l && o.enterCallbacks[s] === l && typeof m == "function" && l.push(m), r())
      },
      d = a(() => e.call(o && o.instances[s], t, n, u));
    let f = Promise.resolve(d);
    e.length < 3 && (f = f.then(u)), f.catch(m => c(m))
  })
}

function pl(e, t, n, o, s = a => a()) {
  const a = [];
  for (const l of e)
    for (const r in l.components) {
      let c = l.components[r];
      if (!(t !== "beforeRouteEnter" && !l.instances[r]))
        if (Bm(c)) {
          const d = (c.__vccOpts || c)[t];
          d && a.push(io(d, n, o, l, r, s))
        } else {
          let u = c();
          a.push(() => u.then(d => {
            if (!d) throw new Error(`Couldn't resolve component "${r}" at "${l.path}"`);
            const f = bP(d) ? d.default : d;
            l.mods[r] = d, l.components[r] = f;
            const g = (f.__vccOpts || f)[t];
            return g && io(g, n, o, l, r, s)()
          }))
        }
    }
  return a
}

function cd(e) {
  const t = Bt(Gr),
    n = Bt(Wm),
    o = N(() => {
      const c = en(e.to);
      return t.resolve(c)
    }),
    s = N(() => {
      const {
        matched: c
      } = o.value, {
        length: u
      } = c, d = c[u - 1], f = n.matched;
      if (!d || !f.length) return -1;
      const m = f.findIndex(hi.bind(null, d));
      if (m > -1) return m;
      const g = ud(c[u - 2]);
      return u > 1 && ud(d) === g && f[f.length - 1].path !== g ? f.findIndex(hi.bind(null, c[u - 2])) : m
    }),
    a = N(() => s.value > -1 && vO(n.params, o.value.params)),
    l = N(() => s.value > -1 && s.value === n.matched.length - 1 && Nm(n.params, o.value.params));

  function r(c = {}) {
    return gO(c) ? t[en(e.replace) ? "replace" : "push"](en(e.to)).catch(Wi) : Promise.resolve()
  }
  return {
    route: o,
    href: N(() => o.value.href),
    isActive: a,
    isExactActive: l,
    navigate: r
  }
}
const hO = K({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [String, Object],
        required: !0
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink: cd,
    setup(e, {
      slots: t
    }) {
      const n = Ze(cd(e)),
        {
          options: o
        } = Bt(Gr),
        s = N(() => ({
          [dd(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
          [dd(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
      return () => {
        const a = t.default && t.default(n);
        return e.custom ? a : pr("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: s.value
        }, a)
      }
    }
  }),
  mO = hO;

function gO(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}

function vO(e, t) {
  for (const n in t) {
    const o = t[n],
      s = e[n];
    if (typeof o == "string") {
      if (o !== s) return !1
    } else if (!sn(s) || s.length !== o.length || o.some((a, l) => a !== s[l])) return !1
  }
  return !0
}

function ud(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const dd = (e, t, n) => e ?? t ?? n,
  yO = K({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(e, {
      attrs: t,
      slots: n
    }) {
      const o = Bt(Gl),
        s = N(() => e.route || o.value),
        a = Bt(rd, 0),
        l = N(() => {
          let u = en(a);
          const {
            matched: d
          } = s.value;
          let f;
          for (;
            (f = d[u]) && !f.components;) u++;
          return u
        }),
        r = N(() => s.value.matched[l.value]);
      Dn(rd, N(() => l.value + 1)), Dn(fO, r), Dn(Gl, s);
      const c = F();
      return re(() => [c.value, r.value, e.name], ([u, d, f], [m, g, p]) => {
        d && (d.instances[f] = u, g && g !== d && u && u === m && (d.leaveGuards.size || (d.leaveGuards = g.leaveGuards), d.updateGuards.size || (d.updateGuards = g.updateGuards))), u && d && (!g || !hi(d, g) || !m) && (d.enterCallbacks[f] || []).forEach(y => y(u))
      }, {
        flush: "post"
      }), () => {
        const u = s.value,
          d = e.name,
          f = r.value,
          m = f && f.components[d];
        if (!m) return fd(n.default, {
          Component: m,
          route: u
        });
        const g = f.props[d],
          p = g ? g === !0 ? u.params : typeof g == "function" ? g(u) : g : null,
          b = pr(m, Qe({}, p, t, {
            onVnodeUnmounted: w => {
              w.component.isUnmounted && (f.instances[d] = null)
            },
            ref: c
          }));
        return fd(n.default, {
          Component: b,
          route: u
        }) || b
      }
    }
  });

function fd(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n
}
const pO = yO;

function bO(e) {
  const t = sO(e.routes, e),
    n = e.parseQuery || uO,
    o = e.stringifyQuery || ld,
    s = e.history,
    a = Bi(),
    l = Bi(),
    r = Bi(),
    c = Pg(Jn);
  let u = Jn;
  Jo && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const d = vl.bind(null, E => "" + E),
    f = vl.bind(null, BP),
    m = vl.bind(null, ns);

  function g(E, H) {
    let U, oe;
    return zm(E) ? (U = t.getRecordMatcher(E), oe = H) : oe = E, t.addRoute(oe, U)
  }

  function p(E) {
    const H = t.getRecordMatcher(E);
    H && t.removeRoute(H)
  }

  function y() {
    return t.getRoutes().map(E => E.record)
  }

  function b(E) {
    return !!t.getRecordMatcher(E)
  }

  function w(E, H) {
    if (H = Qe({}, H || c.value), typeof E == "string") {
      const O = yl(n, E, H.path),
        L = t.resolve({
          path: O.path
        }, H),
        G = s.createHref(O.fullPath);
      return Qe(O, L, {
        params: m(L.params),
        hash: ns(O.hash),
        redirectedFrom: void 0,
        href: G
      })
    }
    let U;
    if (E.path != null) U = Qe({}, E, {
      path: yl(n, E.path, H.path).path
    });
    else {
      const O = Qe({}, E.params);
      for (const L in O) O[L] == null && delete O[L];
      U = Qe({}, E, {
        params: f(O)
      }), H.params = f(H.params)
    }
    const oe = t.resolve(U, H),
      Se = E.hash || "";
    oe.params = d(m(oe.params));
    const Le = $P(o, Qe({}, E, {
        hash: IP(Se),
        path: oe.path
      })),
      A = s.createHref(Le);
    return Qe({
      fullPath: Le,
      hash: Se,
      query: o === ld ? dO(E.query) : E.query || {}
    }, oe, {
      redirectedFrom: void 0,
      href: A
    })
  }

  function v(E) {
    return typeof E == "string" ? yl(n, E, c.value.path) : Qe({}, E)
  }

  function C(E, H) {
    if (u !== E) return mi(8, {
      from: H,
      to: E
    })
  }

  function _(E) {
    return D(E)
  }

  function k(E) {
    return _(Qe(v(E), {
      replace: !0
    }))
  }

  function I(E) {
    const H = E.matched[E.matched.length - 1];
    if (H && H.redirect) {
      const {
        redirect: U
      } = H;
      let oe = typeof U == "function" ? U(E) : U;
      return typeof oe == "string" && (oe = oe.includes("?") || oe.includes("#") ? oe = v(oe) : {
        path: oe
      }, oe.params = {}), Qe({
        query: E.query,
        hash: E.hash,
        params: oe.path != null ? {} : E.params
      }, oe)
    }
  }

  function D(E, H) {
    const U = u = w(E),
      oe = c.value,
      Se = E.state,
      Le = E.force,
      A = E.replace === !0,
      O = I(U);
    if (O) return D(Qe(v(O), {
      state: typeof O == "object" ? Qe({}, Se, O.state) : Se,
      force: Le,
      replace: A
    }), H || U);
    const L = U;
    L.redirectedFrom = H;
    let G;
    return !Le && MP(o, oe, U) && (G = mi(16, {
      to: L,
      from: oe
    }), z(oe, oe, !0, !1)), (G ? Promise.resolve(G) : R(L, oe)).catch(Q => In(Q) ? In(Q, 2) ? Q : Ne(Q) : ue(Q, L, oe)).then(Q => {
      if (Q) {
        if (In(Q, 2)) return D(Qe({
          replace: A
        }, v(Q.to), {
          state: typeof Q.to == "object" ? Qe({}, Se, Q.to.state) : Se,
          force: Le
        }), H || L)
      } else Q = P(L, oe, !0, A, Se);
      return x(L, oe, Q), Q
    })
  }

  function S(E, H) {
    const U = C(E, H);
    return U ? Promise.reject(U) : Promise.resolve()
  }

  function B(E) {
    const H = we.values().next().value;
    return H && typeof H.runWithContext == "function" ? H.runWithContext(E) : E()
  }

  function R(E, H) {
    let U;
    const [oe, Se, Le] = wO(E, H);
    U = pl(oe.reverse(), "beforeRouteLeave", E, H);
    for (const O of oe) O.leaveGuards.forEach(L => {
      U.push(io(L, E, H))
    });
    const A = S.bind(null, E, H);
    return U.push(A), pe(U).then(() => {
      U = [];
      for (const O of a.list()) U.push(io(O, E, H));
      return U.push(A), pe(U)
    }).then(() => {
      U = pl(Se, "beforeRouteUpdate", E, H);
      for (const O of Se) O.updateGuards.forEach(L => {
        U.push(io(L, E, H))
      });
      return U.push(A), pe(U)
    }).then(() => {
      U = [];
      for (const O of Le)
        if (O.beforeEnter)
          if (sn(O.beforeEnter))
            for (const L of O.beforeEnter) U.push(io(L, E, H));
          else U.push(io(O.beforeEnter, E, H));
      return U.push(A), pe(U)
    }).then(() => (E.matched.forEach(O => O.enterCallbacks = {}), U = pl(Le, "beforeRouteEnter", E, H, B), U.push(A), pe(U))).then(() => {
      U = [];
      for (const O of l.list()) U.push(io(O, E, H));
      return U.push(A), pe(U)
    }).catch(O => In(O, 8) ? O : Promise.reject(O))
  }

  function x(E, H, U) {
    r.list().forEach(oe => B(() => oe(E, H, U)))
  }

  function P(E, H, U, oe, Se) {
    const Le = C(E, H);
    if (Le) return Le;
    const A = H === Jn,
      O = Jo ? history.state : {};
    U && (oe || A ? s.replace(E.fullPath, Qe({
      scroll: A && O && O.scroll
    }, Se)) : s.push(E.fullPath, Se)), c.value = E, z(E, H, U, A), Ne()
  }
  let M;

  function J() {
    M || (M = s.listen((E, H, U) => {
      if (!le.listening) return;
      const oe = w(E),
        Se = I(oe);
      if (Se) {
        D(Qe(Se, {
          replace: !0
        }), oe).catch(Wi);
        return
      }
      u = oe;
      const Le = c.value;
      Jo && WP(Xu(Le.fullPath, U.delta), Ra()), R(oe, Le).catch(A => In(A, 12) ? A : In(A, 2) ? (D(A.to, oe).then(O => {
        In(O, 20) && !U.delta && U.type === os.pop && s.go(-1, !1)
      }).catch(Wi), Promise.reject()) : (U.delta && s.go(-U.delta, !1), ue(A, oe, Le))).then(A => {
        A = A || P(oe, Le, !1), A && (U.delta && !In(A, 8) ? s.go(-U.delta, !1) : U.type === os.pop && In(A, 20) && s.go(-1, !1)), x(oe, Le, A)
      }).catch(Wi)
    }))
  }
  let ce = Bi(),
    W = Bi(),
    ne;

  function ue(E, H, U) {
    Ne(E);
    const oe = W.list();
    return oe.length ? oe.forEach(Se => Se(E, H, U)) : console.error(E), Promise.reject(E)
  }

  function Re() {
    return ne && c.value !== Jn ? Promise.resolve() : new Promise((E, H) => {
      ce.add([E, H])
    })
  }

  function Ne(E) {
    return ne || (ne = !E, J(), ce.list().forEach(([H, U]) => E ? U(E) : H()), ce.reset()), E
  }

  function z(E, H, U, oe) {
    const {
      scrollBehavior: Se
    } = e;
    if (!Jo || !Se) return Promise.resolve();
    const Le = !U && jP(Xu(E.fullPath, 0)) || (oe || !U) && history.state && history.state.scroll || null;
    return Oe().then(() => Se(E, H, Le)).then(A => A && UP(A)).catch(A => ue(A, E, H))
  }
  const X = E => s.go(E);
  let ye;
  const we = new Set,
    le = {
      currentRoute: c,
      listening: !0,
      addRoute: g,
      removeRoute: p,
      clearRoutes: t.clearRoutes,
      hasRoute: b,
      getRoutes: y,
      resolve: w,
      options: e,
      push: _,
      replace: k,
      go: X,
      back: () => X(-1),
      forward: () => X(1),
      beforeEach: a.add,
      beforeResolve: l.add,
      afterEach: r.add,
      onError: W.add,
      isReady: Re,
      install(E) {
        const H = this;
        E.component("RouterLink", mO), E.component("RouterView", pO), E.config.globalProperties.$router = H, Object.defineProperty(E.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => en(c)
        }), Jo && !ye && c.value === Jn && (ye = !0, _(s.location).catch(Se => {}));
        const U = {};
        for (const Se in Jn) Object.defineProperty(U, Se, {
          get: () => c.value[Se],
          enumerable: !0
        });
        E.provide(Gr, H), E.provide(Wm, Hd(U)), E.provide(Gl, c);
        const oe = E.unmount;
        we.add(E), E.unmount = function() {
          we.delete(E), we.size < 1 && (u = Jn, M && M(), M = null, c.value = Jn, ye = !1, ne = !1), oe()
        }
      }
    };

  function pe(E) {
    return E.reduce((H, U) => H.then(() => B(U)), Promise.resolve())
  }
  return le
}

function wO(e, t) {
  const n = [],
    o = [],
    s = [],
    a = Math.max(t.matched.length, e.matched.length);
  for (let l = 0; l < a; l++) {
    const r = t.matched[l];
    r && (e.matched.find(u => hi(u, r)) ? o.push(r) : n.push(r));
    const c = e.matched[l];
    c && (t.matched.find(u => hi(u, c)) || s.push(c))
  }
  return [n, o, s]
}
const ia = bO({
    history: qP("/"),
    routes: [{
      path: "/",
      component: () => wt(() => import("./Home-BQLRKRBM.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5]))
    }, {
      path: "/finish",
      component: () => wt(() => import("./Finish-D1NSHFjb.js"), __vite__mapDeps([6, 7]))
    }, {
      path: "/home",
      component: () => wt(() => import("./Home-BQLRKRBM.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5]))
    }, {
      path: "/airdrop",
      component: () => wt(() => Promise.resolve().then(() => XE), void 0)
    }, {
      path: "/terms",
      component: () => wt(() => import("./Terms-CDpJBIM6.js"), [])
    }, {
      path: "/quests",
      component: () => wt(() => Promise.resolve().then(() => TE), void 0)
    }, {
      path: "/rating",
      component: () => wt(() => import("./Rating-B824hl3V.js"), __vite__mapDeps([8, 9]))
    }, {
      path: "/friends",
      component: () => wt(() => Promise.resolve().then(() => pI), void 0)
    }, {
      path: "/communities",
      component: () => wt(() => import("./Communities-R735ME58.js"), __vite__mapDeps([10, 11]))
    }, {
      path: "/alliance",
      component: () => wt(() => import("./Alliance-BGOFugoY.js"), __vite__mapDeps([1, 2]))
    }, {
      path: "/boost",
      component: () => wt(() => import("./Boost-DYAc-yhn.js"), __vite__mapDeps([3, 4]))
    }, {
      path: "/support",
      component: () => wt(() => import("./Support-DLTaqXrC.js"), [])
    }, {
      path: "/test",
      component: () => wt(() => Promise.resolve().then(() => WI), void 0)
    }, {
      path: "/test2",
      component: () => wt(() => Promise.resolve().then(() => PI), void 0)
    }, {
      path: "/referral/commission",
      component: () => wt(() => import("./ReferralCommission-GYPH-IKY.js"), __vite__mapDeps([12, 13]))
    }]
  }),
  CO = {
    methods: {
      async dbLoadDbData(e = ["all"]) {
        try {
          let t;
          [t] = await Promise.all([this.apiCall("loadDb", {
            dbs: e,
            lang: this.stores.user.settings.lang
          })]), this.dbStoreDbs(t)
        } catch (t) {
          uo({
            type: "danger",
            message: this.t("Problem with data loading. Please Reload Page. Error:") + " " + t
          })
        }
      },
      dbStoreDbs(e) {
        Object.keys(e).forEach(t => {
          switch (t) {
            case "dbQuests":
              const n = e[t].map(o => (o.title = o.title.replaceAll("{", "").replaceAll("}", ""), o.desc = o.desc.replaceAll("{", "").replaceAll("}", ""), o.actionText = o.actionText.replaceAll("{", "").replaceAll("}", ""), o));
              this.stores.db.setParam(t, n);
              break;
            case "gameConfig":
              window.gameConfig = e[t];
              break;
            default:
              this.stores.db.setParam(t, e[t]);
              break
          }
        })
      }
    },
    computed: {
      dbLangByKey() {
        return this._arrayByKey(this.dbLang, "key")
      },
      dbAnimalsByKey() {
        return this._arrayByKey(this.dbAnimals, "key")
      },
      dbQuestsByKey() {
        return this._arrayByKey(this.dbQuests, "key")
      },
      dbAllianceByLevel() {
        return this._arrayByKey(this.dbAlliance, "level")
      },
      dbLuckyHoursByKey() {
        return this._arrayByKey(this.dbLuckyHours, "key")
      },
      dbTranslation() {
        return this.stores.db.dbTranslation || []
      },
      gameConfig() {
        return window.gameConfig || {}
      },
      dbQuests() {
        return this.stores.db.dbQuests || []
      },
      dbDailyRewards() {
        return this.stores.db.dbDailyRewards || []
      },
      dbAnimals() {
        return this.stores.db.dbAnimals || []
      },
      dbPurchase() {
        return this.stores.db.dbPurchase || []
      },
      dbBoost() {
        return this.stores.db.dbBoost || []
      },
      dbAlliance() {
        return this.stores.db.dbAlliance || []
      },
      dbQuizzes() {
        return this.stores.db.dbQuizzes || []
      },
      dbAutoFeed() {
        return this.stores.db.dbAutoFeed || []
      },
      dbLuckyHours() {
        return [{
          key: "2025-01-17",
          dateStart: "2025-01-17 16:09:00",
          dateEnd: "2025-01-17 17:09:00"
        }, {
          key: "2025-01-18",
          dateStart: "2025-01-18 11:09:00",
          dateEnd: "2025-01-18 12:09:00"
        }, {
          key: "2025-01-19",
          dateStart: "2025-01-19 10:43:00",
          dateEnd: "2025-01-19 11:43:00"
        }, {
          key: "2025-01-20",
          dateStart: "2025-01-20 11:39:00",
          dateEnd: "2025-01-20 12:39:00"
        }, {
          key: "2025-01-21",
          dateStart: "2025-01-21 14:25:00",
          dateEnd: "2025-01-21 15:25:00"
        }, {
          key: "2025-01-22",
          dateStart: "2025-01-22 10:36:00",
          dateEnd: "2025-01-22 11:36:00"
        }, {
          key: "2025-01-23",
          dateStart: "2025-01-23 09:12:00",
          dateEnd: "2025-01-23 10:12:00"
        }, {
          key: "2025-01-24",
          dateStart: "2025-01-24 16:30:00",
          dateEnd: "2025-01-24 17:30:00"
        }, {
          key: "2025-01-25",
          dateStart: "2025-01-25 08:57:00",
          dateEnd: "2025-01-25 09:57:00"
        }, {
          key: "2025-01-26",
          dateStart: "2025-01-26 15:14:00",
          dateEnd: "2025-01-26 16:14:00"
        }, {
          key: "2025-01-27",
          dateStart: "2025-01-27 10:47:00",
          dateEnd: "2025-01-27 11:47:00"
        }, {
          key: "2025-01-28",
          dateStart: "2025-01-28 09:33:00",
          dateEnd: "2025-01-28 10:33:00"
        }, {
          key: "2025-01-29",
          dateStart: "2025-01-29 14:05:00",
          dateEnd: "2025-01-29 15:05:00"
        }, {
          key: "2025-01-30",
          dateStart: "2025-01-30 09:20:00",
          dateEnd: "2025-01-30 10:20:00"
        }, {
          key: "2025-01-31",
          dateStart: "2025-01-31 08:50:00",
          dateEnd: "2025-01-31 09:50:00"
        }]
      },
      dbLang() {
        return [{
          key: "en",
          title: "English",
          titleEn: "English",
          icon: "🇬🇧",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ru",
          title: "Русский",
          titleEn: "Russian",
          icon: "🇷🇺",
          isRtl: !1,
          hasCyrillic: !0
        }, {
          key: "es",
          title: "Español",
          titleEn: "Spanish",
          icon: "🇪🇸",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "zh",
          title: "中文",
          titleEn: "Chinese",
          icon: "🇨🇳",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "hi",
          title: "हिन्दी",
          titleEn: "Hindi",
          icon: "🇮🇳",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "pt",
          title: "Português",
          titleEn: "Portuguese",
          icon: "🇵🇹",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "bn",
          title: "বাংলা",
          titleEn: "Bengali",
          icon: "🇧🇩",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "fr",
          title: "Français",
          titleEn: "French",
          icon: "🇫🇷",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "de",
          title: "Deutsch",
          titleEn: "German",
          icon: "🇩🇪",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ja",
          title: "日本語",
          titleEn: "Japanese",
          icon: "🇯🇵",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ko",
          title: "한국어",
          titleEn: "Korean",
          icon: "🇰🇷",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "it",
          title: "Italiano",
          titleEn: "Italian",
          icon: "🇮🇹",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "tr",
          title: "Türkçe",
          titleEn: "Turkish",
          icon: "🇹🇷",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "vi",
          title: "Tiếng Việt",
          titleEn: "Vietnamese",
          icon: "🇻🇳",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "pl",
          title: "Polski",
          titleEn: "Polish",
          icon: "🇵🇱",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "uk",
          title: "Українська",
          titleEn: "Ukrainian",
          icon: "🇺🇦",
          isRtl: !1,
          hasCyrillic: !0
        }, {
          key: "ro",
          title: "Română",
          titleEn: "Romanian",
          icon: "🇷🇴",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "nl",
          title: "Nederlands",
          titleEn: "Dutch",
          icon: "🇳🇱",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "sv",
          title: "Svenska",
          titleEn: "Swedish",
          icon: "🇸🇪",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "fi",
          title: "Suomi",
          titleEn: "Finnish",
          icon: "🇫🇮",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "el",
          title: "Ελληνικά",
          titleEn: "Greek",
          icon: "🇬🇷",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ar",
          title: "العربية",
          titleEn: "Arabic",
          icon: "🇸🇦",
          isRtl: !0,
          hasCyrillic: !1
        }, {
          key: "he",
          title: "עברית",
          titleEn: "Hebrew",
          icon: "🇮🇱",
          isRtl: !0,
          hasCyrillic: !1
        }, {
          key: "fa",
          title: "فارسی",
          titleEn: "Persian",
          icon: "🇮🇷",
          isRtl: !0,
          hasCyrillic: !1
        }, {
          key: "ur",
          title: "اردو",
          titleEn: "Urdu",
          icon: "🇵🇰",
          isRtl: !0,
          hasCyrillic: !1
        }, {
          key: "sw",
          title: "Kiswahili",
          titleEn: "Swahili",
          icon: "🇰🇪",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ms",
          title: "Bahasa Melayu",
          titleEn: "Malay",
          icon: "🇲🇾",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "id",
          title: "Bahasa Indonesia",
          titleEn: "Indonesian",
          icon: "🇮🇩",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "th",
          title: "ภาษาไทย",
          titleEn: "Thai",
          icon: "🇹🇭",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "tl",
          title: "Filipino",
          titleEn: "Filipino",
          icon: "🇵🇭",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "hu",
          title: "Magyar",
          titleEn: "Hungarian",
          icon: "🇭🇺",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "cs",
          title: "Čeština",
          titleEn: "Czech",
          icon: "🇨🇿",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "da",
          title: "Dansk",
          titleEn: "Danish",
          icon: "🇩🇰",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "no",
          title: "Norsk",
          titleEn: "Norwegian",
          icon: "🇳🇴",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "sk",
          title: "Slovenčina",
          titleEn: "Slovak",
          icon: "🇸🇰",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "sl",
          title: "Slovenščina",
          titleEn: "Slovenian",
          icon: "🇸🇮",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "hr",
          title: "Hrvatski",
          titleEn: "Croatian",
          icon: "🇭🇷",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "bg",
          title: "Български",
          titleEn: "Bulgarian",
          icon: "🇧🇬",
          isRtl: !1,
          hasCyrillic: !0
        }, {
          key: "sr",
          title: "Српски",
          titleEn: "Serbian",
          icon: "🇷🇸",
          isRtl: !1,
          hasCyrillic: !0
        }, {
          key: "lv",
          title: "Latviešu",
          titleEn: "Latvian",
          icon: "🇱🇻",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "lt",
          title: "Lietuvių",
          titleEn: "Lithuanian",
          icon: "🇱🇹",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "et",
          title: "Eesti",
          titleEn: "Estonian",
          icon: "🇪🇪",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "sq",
          title: "Shqip",
          titleEn: "Albanian",
          icon: "🇦🇱",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "mk",
          title: "Македонски",
          titleEn: "Macedonian",
          icon: "🇲🇰",
          isRtl: !1,
          hasCyrillic: !0
        }, {
          key: "mt",
          title: "Malti",
          titleEn: "Maltese",
          icon: "🇲🇹",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "af",
          title: "Afrikaans",
          titleEn: "Afrikaans",
          icon: "🇿🇦",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "bs",
          title: "Bosanski",
          titleEn: "Bosnian",
          icon: "🇧🇦",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ca",
          title: "Català",
          titleEn: "Catalan",
          icon: "🇪🇸",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "eo",
          title: "Esperanto",
          titleEn: "Esperanto",
          icon: "🚩",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ga",
          title: "Gaeilge",
          titleEn: "Irish",
          icon: "🇮🇪",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "gl",
          title: "Galego",
          titleEn: "Galician",
          icon: "🇪🇸",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ka",
          title: "ქართული",
          titleEn: "Georgian",
          icon: "🇬🇪",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "lb",
          title: "Lëtzebuergesch",
          titleEn: "Luxembourgish",
          icon: "🇱🇺",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ne",
          title: "नेपाली",
          titleEn: "Nepali",
          icon: "🇳🇵",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "pa",
          title: "ਪੰਜਾਬੀ",
          titleEn: "Punjabi",
          icon: "🇮🇳",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "si",
          title: "සිංහල",
          titleEn: "Sinhala",
          icon: "🇱🇰",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ta",
          title: "தமிழ்",
          titleEn: "Tamil",
          icon: "🇮🇳",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "te",
          title: "తెలుగు",
          titleEn: "Telugu",
          icon: "🇮🇳",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "kk",
          title: "Қазақ",
          titleEn: "Kazakh",
          icon: "🇰🇿",
          isRtl: !1,
          hasCyrillic: !0
        }, {
          key: "hy",
          title: "Հայերեն",
          titleEn: "Armenian",
          icon: "🇦🇲",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "az",
          title: "Azərbaycan",
          titleEn: "Azerbaijani",
          icon: "🇦🇿",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ht",
          title: "Kreyòl Ayisyen",
          titleEn: "Haitian Creole",
          icon: "🇭🇹",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ky",
          title: "Кыргызча",
          titleEn: "Kyrgyz",
          icon: "🇰🇬",
          isRtl: !1,
          hasCyrillic: !0
        }, {
          key: "uz",
          title: "Oʻzbek",
          titleEn: "Uzbek",
          icon: "🇺🇿",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "am",
          title: "አማርኛ",
          titleEn: "Amharic",
          icon: "🇪🇹",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "zu",
          title: "isiZulu",
          titleEn: "Zulu",
          icon: "🇿🇦",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "xh",
          title: "isiXhosa",
          titleEn: "Xhosa",
          icon: "🇿🇦",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "yo",
          title: "Yorùbá",
          titleEn: "Yoruba",
          icon: "🇳🇬",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "mg",
          title: "Malagasy",
          titleEn: "Malagasy",
          icon: "🇲🇬",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "my",
          title: "မြန်မာစာ",
          titleEn: "Burmese",
          icon: "🇲🇲",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "km",
          title: "ភាសាខ្មែរ",
          titleEn: "Khmer",
          icon: "🇰🇭",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "lo",
          title: "ພາສາລາວ",
          titleEn: "Lao",
          icon: "🇱🇦",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "or",
          title: "ଓଡ଼ିଆ",
          titleEn: "Odia",
          icon: "🇮🇳",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "kn",
          title: "ಕನ್ನಡ",
          titleEn: "Kannada",
          icon: "🇮🇳",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ml",
          title: "മലയാളം",
          titleEn: "Malayalam",
          icon: "🇮🇳",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "mr",
          title: "मराठी",
          titleEn: "Marathi",
          icon: "🇮🇳",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "gu",
          title: "ગુજરાતી",
          titleEn: "Gujarati",
          icon: "🇮🇳",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "jv",
          title: "ꦧꦱꦗꦮ",
          titleEn: "Javanese",
          icon: "🇮🇩",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ha",
          title: "Hausa",
          titleEn: "Hausa",
          icon: "🇳🇬",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ps",
          title: "پښتو",
          titleEn: "Pashto",
          icon: "🇦🇫",
          isRtl: !0,
          hasCyrillic: !1
        }, {
          key: "st",
          title: "Sesotho",
          titleEn: "Sesotho",
          icon: "🇱🇸",
          isRtl: !1,
          hasCyrillic: !1
        }, {
          key: "ny",
          title: "Chichewa",
          titleEn: "Chichewa",
          icon: "🇲🇼",
          isRtl: !1,
          hasCyrillic: !1
        }]
      }
    },
    data() {
      return {}
    }
  },
  _O = {
    methods: {
      async auth() {
        const e = ao();
        try {
          const t = km("user_auth_hash");
          t && e.setAuthHash(t);
          const n = window.Telegram.WebApp.initData,
            o = window.Telegram.WebApp.initDataUnsafe.hash,
            s = window.Telegram.WebApp.initDataUnsafe.start_param,
            a = window.Telegram.WebApp.initDataUnsafe.chat ? window.Telegram.WebApp.initDataUnsafe.chat.id : "",
            l = window.Telegram.WebApp.initDataUnsafe.chat_type,
            r = window.Telegram.WebApp.initDataUnsafe.chat_instance,
            c = window.Telegram.WebApp.initDataUnsafe.user ? window.Telegram.WebApp.initDataUnsafe.user.photo_url : "",
            u = window.Telegram.WebApp.platform;
          await oa("auth", {
            initData: n,
            startParam: s,
            photoUrl: c,
            platform: u,
            chatId: a,
            chatType: l,
            chatInstance: r
          }), s && e.setStartParam(s), t || e.setAuthHash(o)
        } catch (t) {
          if (t === "platform") throw t;
          console.log("Error auth: %o", t), uo({
            type: "danger",
            message: this.t("Auth error") + ": " + t
          })
        }
      },
      async loadPageData() {
        const e = ao(),
          t = await this.apiCall("allUserData", {
            lang: e.settings.lang
          });
        this.dbStoreDbs(t.dbData), e.setHero(t.hero), e.setProfile(t.profile), e.setAnimals(t.animals), e.setAlliance(t.alliance), e.setSettings(t.settings), e.setFeed(t.feed)
      },
      async loadPageDataAfter() {
        const e = ao(),
          t = Kr(),
          n = await this.apiCall("allUserDataAfter", {
            lang: e.settings.lang
          });
        e.setFriends(n.friends), e.setQuests(n.quests), e.setQuizzes(n.quizzes), e.setDailyRewards(n.dailyRewards), e.setReferralCommission(n.referralCommission), e.setTonTransactionAddress(n.tonTransactionAddress), e.setTonDonateAddress(n.tonDonateAddress), e.setTonCoinAddress(n.tonCoinAddress), t.setIsAfterDataLoaded()
      },
      async loadHero() {
        const e = ao(),
          t = await oa("getHero", "");
        t && e.setHero(t)
      }
    },
    watch: {
      isRtl(e) {
        e ? window.document.body.classList.add("rtl") : window.document.body.classList.remove("rtl")
      }
    },
    computed: {
      uReferralCommission() {
        return this.stores.user.referralCommission || 0
      },
      uTonTransactionAddress() {
        return this.stores.user.tonTransactionAddress || 0
      },
      uTonDonateAddress() {
        return this.stores.user.tonDonateAddress || 0
      },
      uTonCoinAddress() {
        return this.stores.user.tonCoinAddress || 0
      },
      uAnimalsByKey() {
        return this._arrayByKey(this.uAnimals, "key")
      },
      uHero() {
        return this.stores.user.hero || {}
      },
      uProfile() {
        return this.stores.user.profile || {}
      },
      uSettings() {
        return this.stores.user.settings || {}
      },
      uFriends() {
        return this.stores.user.friends || []
      },
      uQuests() {
        return this.stores.user.quests || []
      },
      uAlliance() {
        return this.stores.user.alliance || {}
      },
      uQuizzes() {
        return this.stores.user.quizzes || []
      },
      uFeed() {
        return this.stores.user.feed || {}
      },
      uRefLink() {
        return `https://t.me/${this.BOT_NAME}/game?startapp=${this.uProfile.refCode}`
      },
      isRtl() {
        return "lang" in this.uSettings && this.uSettings.lang in this.dbLangByKey ? this.dbLangByKey[this.uSettings.lang].isRtl : !1
      },
      uDailyRewards() {
        return this.stores.user.dailyRewards || {}
      },
      uAnimals() {
        return this.stores.user.animals || {}
      }
    }
  },
  kO = {
    data: function() {
      return {
        TOKEN_NAME: "$ZOO",
        COIN_NAME: "Animal Feed",
        BOT_NAME: "zoo_story_bot",
        BOT_FULL_URL: "https://t.me/zoo_story_bot",
        CHANNEL_NAME: "zoo_story",
        HASH_TAG: "#zoo",
        onBoard: {
          start: ["1"],
          token: ["20", "21"],
          coin: ["30", "31"],
          changeLocation: ["40"],
          friendInvite: ["50"],
          buyTon: ["60"],
          friendTaskPopup: ["70"],
          friendTaskPopup2: ["80"]
        },
        isFixed: !1,
        GAME_DOMAIN: _m,
        API_DOMAIN: Cm,
        IMG_COIN: '<span class="coin25"></span>',
        IMG_TPH: '<span class="tph24"></span>'
      }
    },
    watch: {
      isFixed(e, t) {
        e !== t && this._stickyChange(e)
      }
    },
    methods: {
      async _payTon(e, t) {
        await window.listenTonConnect(), await this._delay(1e3), (await window.tonConnectUI()).connected || (console.log("Waiting to wallet connect"), await this._delay(5e3));
        const n = await window.tonConnectUI(),
          o = n.wallet && n.wallet.account ? n.wallet.account.address : null;
        let s = await this.apiCall("infoTonWallet"),
          a = s.wallet;
        if (!a && o && (await this.apiCall("saveTonWallet", {
            wallet: n.wallet
          }), s = await this.apiCall("infoTonWallet"), a = s.wallet), !a || !o || a !== o) {
          console.log(`_payTon: invalid wallet, need to connect, saved: ${a}, connected: ${o} ${n.connected}`), (await window.tonConnectUI()).wallet && await (await window.tonConnectUI()).disconnect(), await (await window.tonConnectUI()).openModal();
          return
        }
        const l = {
          validUntil: Math.floor(Date.now() / 1e3) + 120,
          messages: [{
            address: e,
            amount: (t * 1e9).toString()
          }]
        };
        console.info(">>> send ton transaction", JSON.stringify(l)), await n.sendTransaction(l)
      },
      _stickyChange(e) {
        this.isFixed = e, this.stores.state.setTopBarIsNeedBg(e)
      },
      _stickyScroll(e) {
        this.isFixed = !!e.isFixed
      },
      _animateMoneyFromCenter(e = 100, t = "coin") {
        const n = t === "coin" ? "coin38" : "tph40",
          o = "spreadFromCenter";
        let s = document.getElementById(t === "coin" ? "coins" : "tokens");
        s && s.classList.add("aniVibration");
        const a = 1e3,
          l = 100;
        let r = Math.round(1.98 * Math.pow(e, .4) + 16.85);
        r > 200 ? r = 200 : r < 10 && (r = 10);
        for (let c = 0; c < r; c++) {
          const u = document.createElement("div");
          u.classList.add("moneyFromCenter", n);
          const d = this._rand(-100, 100),
            f = this._rand(-100, 100);
          u.style.top = `calc(50% + ${f}px)`, u.style.left = `calc(45% + ${d}px)`, u.style.opacity = "0";
          const m = this._rand(-300, 300),
            g = this._rand(-400, 400);
          u.style.setProperty("--randomX", `${m}px`), u.style.setProperty("--randomY", `${g}px`);
          const p = this._rand(500, a),
            y = this._rand(0, l);
          u.style.animation = `${o} ${p}ms ease ${y}ms 1 normal forwards`, u.style.animationFillMode = "forwards", document.body.appendChild(u);
          const b = p + y;
          setTimeout(() => {
            u.style.visibility = "hidden", u.remove()
          }, b), c % 30 === 0 && this._vibrate("soft")
        }
        setTimeout(() => {
          s && s.classList.remove("aniVibration")
        }, a + Math.round(l / 2))
      },
      _catchError(e) {
        this._vibrate("error"), console.log("Error: %o", e), uo({
          type: "danger",
          message: typeof e == "string" ? e : this.t("Some problem... please repeat")
        })
      },
      _getQuestImg(e) {
        return e.includes("riddle_") ? "/assets/img/quests/riddle.jpg?v=3" : e.includes("rebus_") ? "/assets/img/quests/rebus.jpg?v=3" : e.includes("donate_ton_") ? "/assets/img/quests/donate_ton.jpg?v=3" : "/assets/img/quests/" + e + ".jpg?v=3"
      },
      _getQuizImg(e, t) {
        return "/assets/img/quiz/" + e + "/" + t + ".jpg?v=1"
      },
      async _delay(e) {
        await new Promise(t => setTimeout(t, e))
      },
      t(e, t) {
        const n = function(o, s) {
          let a = o;
          return s && typeof s == "object" && Object.keys(s).forEach(function(l) {
            a = a.replaceAll(`{${l}}`, s[l])
          }), a = a.replaceAll("{", "").replaceAll("}", ""), a
        };
        if (this.uSettings.lang !== "en") {
          const o = this.dbTranslation.find(s => s.key === e);
          if (o) return n(o.title || e, t)
        }
        return n(e, t)
      },
      async _completeOnboarding(e) {
        let t = this.uHero;
        "onboarding" in t || (t.onboarding = []);
        const n = e.filter(s => !t.onboarding.includes(s));
        if (n.length === 0) return;
        const o = n[0];
        t.onboarding.push(o);
        try {
          const s = await this.apiCall("onboardingComplete", parseInt(o));
          this.stores.user.setHero(s)
        } catch (s) {
          console.log("Error: %o", s)
        }
      },
      _isOnboardingComplete(...e) {
        return "onboarding" in this.uHero ? !e.some(t => t.filter(o => !this.uHero.onboarding.includes(o)).length > 0) : !1
      },
      async _resetOnboarding(e = []) {
        const t = await this.apiCall("resetOnboarding", e);
        this.stores.user.setHero(t.hero)
      },
      _cloneObject(e) {
        return JSON.parse(JSON.stringify(e))
      },
      _number(e) {
        return new Intl.NumberFormat().format(Math.round(e))
      },
      _numberExact(e) {
        return new Intl.NumberFormat().format(e)
      },
      _numberShort(e, t = !1) {
        const n = e >= 0 ? 1 : -1;
        if (e * n < 1e3) return Math.round(e);
        if (e * n >= 1e3 && e * n < 1e6) {
          const o = e / 1e3;
          return (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "K"
        }
        if (e * n >= 1e6 && e * n < 1e9) {
          const o = e / 1e6;
          return (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "M"
        }
        if (e * n >= 1e9 && e * n < 1e12) {
          const o = e / 1e9;
          return (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "B"
        }
        if (e * n >= 1e12) {
          const o = e / 1e12;
          return (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "T"
        }
      },
      _getAllianceLevelProgress(e) {
        let t = this.dbAlliance[0];
        for (let l = 1; l < this.dbAlliance.length && this.dbAlliance[l].exp <= e; l++) t = this.dbAlliance[l];
        const n = this.dbAlliance.find(l => l.exp > t.exp);
        if (!n) return 100;
        const o = t.exp,
          s = n.exp,
          a = (e - o) / (s - o) * 100;
        return Math.floor(Math.max(0, Math.min(100, a)))
      },
      _getRandomArrayElement(e) {
        const t = Math.floor(Math.random() * e.length);
        return e[t]
      },
      _isEmptyObject(e) {
        return Object.keys(e).length === 0
      },
      _rand(e, t = 0) {
        return t ? Math.floor(Math.random() * (t - e + 1)) + e : Math.floor(Math.random() * e)
      },
      _vibrate(e = "light") {
        this.uSettings.vibrate && (e in ["light", "medium", "heavy", "rigid", "soft"] ? window.Telegram.WebApp.HapticFeedback.impactOccurred(e) : e in ["error", "success", "warning"] ? window.Telegram.WebApp.HapticFeedback.notificationOccurred(e) : window.Telegram.WebApp.HapticFeedback.selectionChanged())
      },
      _vibratePopup(e) {
        e ? (this._vibrate("medium"), history.pushState({
          popup: !0
        }, "Popup Opened", "/?popup"), window.Telegram.WebApp.BackButton.show()) : (this._vibrate(), window.history.state && window.history.state.popup && history.back())
      },
      _isIphone() {
        return navigator.userAgent.includes("iPhone")
      },
      _shareBtnClick() {
        const e = encodeURIComponent(this.t(`🥳 Hey, want to visit the Zoo together? 
🦒 Here, you can buy animals, upgrade enclosures, and take part in an {Airdrop}!
🎁 Claim your welcome bonus and pick your first animal!`));
        window.Telegram.WebApp.openTelegramLink(`${this._refLink()}&text=${e}`)
      },
      _refLink() {
        return `https://t.me/share/url?url=t.me/${this.BOT_NAME}/game?startapp=${this.uProfile.refCode}`
      },
      _ourTgClick() {
        window.Telegram.WebApp.openTelegramLink("https://t.me/" + this.CHANNEL_NAME)
      },
      _openUrl(e) {
        e.includes("t.me/") ? window.Telegram.WebApp.openTelegramLink(e) : window.Telegram.WebApp.openLink(e)
      },
      _copyToClipboard(e) {
        uo({
          type: "primary",
          message: this.t("Copied to clipboard"),
          duration: 1e3,
          position: "bottom"
        }), navigator.clipboard.writeText(e)
      },
      _millisecondsUntilNextDayUTC() {
        const e = new Date,
          t = Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds());
        return Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() + 1) - t
      },
      _millisecondsUntilNextUTCHour(e) {
        const t = new Date,
          n = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds());
        let o;
        return t.getUTCHours() < e ? o = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), e) : o = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() + 1, e), o - n
      },
      _groupBy(e, t) {
        return e.reduce((n, o) => ((n[o[t]] = n[o[t]] || []).push(o), n), {})
      },
      _arrayByKey(e, t) {
        return e.reduce((n, o) => (n[o[t]] = o, n), {})
      },
      _filterByKey(e, t, n) {
        return e.filter(o => o[t] === n)
      },
      _getFirstFilteredByKey(e, t, n) {
        return e.filter(o => o[t] === n)[0]
      },
      _getValueFirstFilteredByKey(e, t, n, o) {
        return e.filter(a => `${a[t]}` == `${n}`)[0][o]
      }
    }
  },
  bo = Mf(pP),
  SO = Qx();
let hd = !1;
ia.afterEach(function() {
  ia.options.history.state.current !== "/" && hd ? window.Telegram.WebApp.BackButton.show() : window.Telegram.WebApp.BackButton.hide(), hd = !0
});
window.Telegram.WebApp.onEvent("backButtonClicked", function() {
  window.history.state && window.history.state.popup && history.back(), ia.push("/")
});
bo.use(SO);
bo.use(ia);
bo.use(jT);
bo.mixin(CO);
bo.mixin(_O);
bo.mixin(kO);
bo.mixin(iA);
bo.mount("#app");
window.userStore = ao();
window.stateStore = Kr();
window.dbStore = wm();
export {
  cP as A, gl as E, Be as F, fA as L, UA as M, Yr as T, vt as _, T as a, h as b, q as c, he as d, Ce as e, Me as f, me as g, ot as h, rt as i, ZT as j, Va as k, Mv as l, an as n, V as o, Ft as r, uo as s, $ as t, Oy as u, dt as v, ae as w
};