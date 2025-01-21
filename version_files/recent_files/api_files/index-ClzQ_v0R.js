const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/Home-9oBqpd-f.js", "assets/Alliance-C7lt8_Bv.js", "assets/Alliance-BkDyrW8l.css", "assets/Boost-BD61D_sP.js", "assets/Boost-CeTnVcsX.css", "assets/Home-DE7GTGId.css", "assets/Rating-CByLJUYg.js", "assets/Rating-DRysk5eI.css", "assets/Communities-nSy_nKUm.js", "assets/Communities-DpnpFDuu.css", "assets/ReferralCommission-BcKq0kcE.js", "assets/ReferralCommission-DcL3Imm7.css"]))) => i.map(i => d[i]);
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

function pl() {}
const ke = Object.assign,
  Vt = typeof window < "u",
  wn = e => e !== null && typeof e == "object",
  Fe = e => e != null,
  ci = e => typeof e == "function",
  Gl = e => wn(e) && ci(e.then) && ci(e.catch),
  Qi = e => Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime());

function hd(e) {
  return e = e.replace(/[^-|\d]/g, ""), /^((\+86)|(86))?(1)\d{10}$/.test(e) || /^0[0-9-]{10,13}$/.test(e)
}
const md = e => typeof e == "number" || /^\d+(\.\d+)?$/.test(e),
  Wm = () => Vt ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;

function Xr(e, t) {
  const n = t.split(".");
  let o = e;
  return n.forEach(s => {
    var a;
    o = wn(o) && (a = o[s]) != null ? a : ""
  }), o
}

function ze(e, t, n) {
  return t.reduce((o, s) => ((!n || e[s] !== void 0) && (o[s] = e[s]), o), {})
}
const pn = (e, t) => JSON.stringify(e) === JSON.stringify(t),
  Us = e => Array.isArray(e) ? e : [e],
  jm = e => e.reduce((t, n) => t.concat(n), []),
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
  Ze = () => ({
    type: Array,
    default: () => []
  }),
  lt = e => ({
    type: Number,
    default: e
  }),
  he = e => ({
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
function Zl(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return n => n in t
}
const Ke = {},
  ei = [],
  bn = () => {},
  Qm = () => !1,
  sa = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Xl = e => e.startsWith("onUpdate:"),
  ft = Object.assign,
  Jl = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
  },
  Km = Object.prototype.hasOwnProperty,
  We = (e, t) => Km.call(e, t),
  xe = Array.isArray,
  ti = e => aa(e) === "[object Map]",
  gd = e => aa(e) === "[object Set]",
  Ae = e => typeof e == "function",
  tt = e => typeof e == "string",
  fo = e => typeof e == "symbol",
  Xe = e => e !== null && typeof e == "object",
  vd = e => (Xe(e) || Ae(e)) && Ae(e.then) && Ae(e.catch),
  yd = Object.prototype.toString,
  aa = e => yd.call(e),
  Ym = e => aa(e).slice(8, -1),
  pd = e => aa(e) === "[object Object]",
  er = e => tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Bi = Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  la = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
  },
  qm = /-(\w)/g,
  Qt = la(e => e.replace(qm, (t, n) => n ? n.toUpperCase() : "")),
  Gm = /\B([A-Z])/g,
  Vn = la(e => e.replace(Gm, "-$1").toLowerCase()),
  ra = la(e => e.charAt(0).toUpperCase() + e.slice(1)),
  Ba = la(e => e ? `on${ra(e)}` : ""),
  ro = (e, t) => !Object.is(e, t),
  $a = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  bd = (e, t, n, o = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: o,
      value: n
    })
  },
  Zm = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
  },
  Xm = e => {
    const t = tt(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
  };
let Jr;
const wd = () => Jr || (Jr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function an(e) {
  if (xe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        s = tt(o) ? ng(o) : an(o);
      if (s)
        for (const a in s) t[a] = s[a]
    }
    return t
  } else if (tt(e) || Xe(e)) return e
}
const Jm = /;(?![^(]*\))/g,
  eg = /:([^]+)/,
  tg = /\/\*[^]*?\*\//g;

function ng(e) {
  const t = {};
  return e.replace(tg, "").split(Jm).forEach(n => {
    if (n) {
      const o = n.split(eg);
      o.length > 1 && (t[o[0].trim()] = o[1].trim())
    }
  }), t
}

function og(e) {
  let t = "";
  if (!e || tt(e)) return t;
  for (const n in e) {
    const o = e[n];
    if (tt(o) || typeof o == "number") {
      const s = n.startsWith("--") ? n : Vn(n);
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
    } else if (Xe(e))
      for (const n in e) e[n] && (t += n + " ");
  return t.trim()
}
const ig = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  sg = Zl(ig);

function Cd(e) {
  return !!e || e === ""
}
const _d = e => !!(e && e.__v_isRef === !0),
  $ = e => tt(e) ? e : e == null ? "" : xe(e) || Xe(e) && (e.toString === yd || !Ae(e.toString)) ? _d(e) ? $(e.value) : JSON.stringify(e, kd, 2) : String(e),
  kd = (e, t) => _d(t) ? kd(e, t.value) : ti(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, s], a) => (n[Ma(o, a) + " =>"] = s, n), {})
  } : gd(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => Ma(n))
  } : fo(t) ? Ma(t) : Xe(t) && !xe(t) && !pd(t) ? String(t) : t,
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
class Sd {
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

function Td(e) {
  return new Sd(e)
}

function xd() {
  return Pt
}

function ag(e, t = !1) {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Id(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, ec(this), Pd(this);
    const t = qe,
      n = Jt;
    qe = this, Jt = !0;
    try {
      return this.fn()
    } finally {
      Od(this), qe = t, Jt = n, this.flags &= -3
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) or(t);
      this.deps = this.depsTail = void 0, ec(this), this.onStop && this.onStop(), this.flags &= -2
    }
  }
  trigger() {
    this.flags & 64 ? La.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    bl(this) && this.run()
  }
  get dirty() {
    return bl(this)
  }
}
let Ad = 0,
  $i, Mi;

function Id(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mi, Mi = e;
    return
  }
  e.next = $i, $i = e
}

function tr() {
  Ad++
}

function nr() {
  if (--Ad > 0) return;
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

function Pd(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function Od(e) {
  let t, n = e.depsTail,
    o = n;
  for (; o;) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), or(o), lg(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s
  }
  e.deps = t, e.depsTail = n
}

function bl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Rd(t.dep.computed) || t.dep.version !== t.version)) return !0;
  return !!e._dirty
}

function Rd(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ki)) return;
  e.globalVersion = Ki;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !bl(e)) {
    e.flags &= -3;
    return
  }
  const n = qe,
    o = Jt;
  qe = e, Jt = !0;
  try {
    Pd(e);
    const s = e.fn(e._value);
    (t.version === 0 || ro(s, e._value)) && (e._value = s, t.version++)
  } catch (s) {
    throw t.version++, s
  } finally {
    qe = n, Jt = o, Od(e), e.flags &= -3
  }
}

function or(e, t = !1) {
  const {
    dep: n,
    prevSub: o,
    nextSub: s
  } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), n.subs === e && (n.subs = o), !n.subs && n.computed) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep) or(a, !0)
  }!t && !--n.sc && n.map && n.map.delete(n.key)
}

function lg(e) {
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

function ec(e) {
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
class rg {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
  }
}
class ir {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0
  }
  track(t) {
    if (!qe || !Jt || qe === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== qe) n = this.activeLink = new rg(qe, this), qe.deps ? (n.prevDep = qe.depsTail, qe.depsTail.nextDep = n, qe.depsTail = n) : qe.deps = qe.depsTail = n, Bd(n);
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
    tr();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      nr()
    }
  }
}

function Bd(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep) Bd(o)
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
  }
}
const Ws = new WeakMap,
  Io = Symbol(""),
  wl = Symbol(""),
  Yi = Symbol("");

function _t(e, t, n) {
  if (Jt && qe) {
    let o = Ws.get(e);
    o || Ws.set(e, o = new Map);
    let s = o.get(n);
    s || (o.set(n, s = new ir), s.map = o, s.key = n), s.track()
  }
}

function Dn(e, t, n, o, s, a) {
  const l = Ws.get(e);
  if (!l) {
    Ki++;
    return
  }
  const r = c => {
    c && c.trigger()
  };
  if (tr(), t === "clear") l.forEach(r);
  else {
    const c = xe(e),
      u = c && er(n);
    if (c && n === "length") {
      const d = Number(o);
      l.forEach((f, m) => {
        (m === "length" || m === Yi || !fo(m) && m >= d) && r(f)
      })
    } else switch (n !== void 0 && r(l.get(n)), u && r(l.get(Yi)), t) {
      case "add":
        c ? u && r(l.get("length")) : (r(l.get(Io)), ti(e) && r(l.get(wl)));
        break;
      case "delete":
        c || (r(l.get(Io)), ti(e) && r(l.get(wl)));
        break;
      case "set":
        ti(e) && r(l.get(Io));
        break
    }
  }
  nr()
}

function cg(e, t) {
  const n = Ws.get(e);
  return n && n.get(t)
}

function No(e) {
  const t = He(e);
  return t === e ? t : (_t(t, "iterate", Yi), Wt(e) ? t : t.map(wt))
}

function ca(e) {
  return _t(e = He(e), "iterate", Yi), e
}
const ug = {
  __proto__: null,
  [Symbol.iterator]() {
    return Na(this, Symbol.iterator, wt)
  },
  concat(...e) {
    return No(this).concat(...e.map(t => xe(t) ? No(t) : t))
  },
  entries() {
    return Na(this, "entries", e => (e[1] = wt(e[1]), e))
  },
  every(e, t) {
    return Sn(this, "every", e, t, void 0, arguments)
  },
  filter(e, t) {
    return Sn(this, "filter", e, t, n => n.map(wt), arguments)
  },
  find(e, t) {
    return Sn(this, "find", e, t, wt, arguments)
  },
  findIndex(e, t) {
    return Sn(this, "findIndex", e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Sn(this, "findLast", e, t, wt, arguments)
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
    return tc(this, "reduce", e, t)
  },
  reduceRight(e, ...t) {
    return tc(this, "reduceRight", e, t)
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
    return Na(this, "values", wt)
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
const dg = Array.prototype;

function Sn(e, t, n, o, s, a) {
  const l = ca(e),
    r = l !== e && !Wt(e),
    c = l[t];
  if (c !== dg[t]) {
    const f = c.apply(e, a);
    return r ? wt(f) : f
  }
  let u = n;
  l !== e && (r ? u = function(f, m) {
    return n.call(this, wt(f), m, e)
  } : n.length > 2 && (u = function(f, m) {
    return n.call(this, f, m, e)
  }));
  const d = c.call(l, u, o);
  return r && s ? s(d) : d
}

function tc(e, t, n, o) {
  const s = ca(e);
  let a = n;
  return s !== e && (Wt(e) ? n.length > 3 && (a = function(l, r, c) {
    return n.call(this, l, r, c, e)
  }) : a = function(l, r, c) {
    return n.call(this, l, wt(r), c, e)
  }), s[t](a, ...o)
}

function Fa(e, t, n) {
  const o = He(e);
  _t(o, "iterate", Yi);
  const s = o[t](...n);
  return (s === -1 || s === !1) && rr(n[0]) ? (n[0] = He(n[0]), o[t](...n)) : s
}

function _i(e, t, n = []) {
  ho(), tr();
  const o = He(e)[t].apply(e, n);
  return nr(), mo(), o
}
const fg = Zl("__proto__,__v_isRef,__isVue"),
  $d = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(fo));

function hg(e) {
  fo(e) || (e = String(e));
  const t = He(this);
  return _t(t, "has", e), t.hasOwnProperty(e)
}
class Md {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n
  }
  get(t, n, o) {
    const s = this._isReadonly,
      a = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return a;
    if (n === "__v_raw") return o === (s ? a ? xg : Vd : a ? Fd : Nd).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const l = xe(t);
    if (!s) {
      let c;
      if (l && (c = ug[n])) return c;
      if (n === "hasOwnProperty") return hg
    }
    const r = Reflect.get(t, n, it(t) ? t : o);
    return (fo(n) ? $d.has(n) : fg(n)) || (s || _t(t, "get", n), a) ? r : it(r) ? l && er(n) ? r : r.value : Xe(r) ? s ? Hd(r) : Je(r) : r
  }
}
class Ld extends Md {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, o, s) {
    let a = t[n];
    if (!this._isShallow) {
      const c = Do(a);
      if (!Wt(o) && !Do(o) && (a = He(a), o = He(o)), !xe(t) && it(a) && !it(o)) return c ? !1 : (a.value = o, !0)
    }
    const l = xe(t) && er(n) ? Number(n) < t.length : We(t, n),
      r = Reflect.set(t, n, o, it(t) ? t : s);
    return t === He(s) && (l ? ro(o, a) && Dn(t, "set", n, o) : Dn(t, "add", n, o)), r
  }
  deleteProperty(t, n) {
    const o = We(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && o && Dn(t, "delete", n, void 0), s
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!fo(n) || !$d.has(n)) && _t(t, "has", n), o
  }
  ownKeys(t) {
    return _t(t, "iterate", xe(t) ? "length" : Io), Reflect.ownKeys(t)
  }
}
class mg extends Md {
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
const gg = new Ld,
  vg = new mg,
  yg = new Ld(!0);
const sr = e => e,
  ua = e => Reflect.getPrototypeOf(e);

function rs(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = He(e),
    a = He(t);
  n || (ro(t, a) && _t(s, "get", t), _t(s, "get", a));
  const {
    has: l
  } = ua(s), r = o ? sr : n ? ur : wt;
  if (l.call(s, t)) return r(e.get(t));
  if (l.call(s, a)) return r(e.get(a));
  e !== s && e.get(t)
}

function cs(e, t = !1) {
  const n = this.__v_raw,
    o = He(n),
    s = He(e);
  return t || (ro(e, s) && _t(o, "has", e), _t(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s)
}

function us(e, t = !1) {
  return e = e.__v_raw, !t && _t(He(e), "iterate", Io), Reflect.get(e, "size", e)
}

function nc(e, t = !1) {
  !t && !Wt(e) && !Do(e) && (e = He(e));
  const n = He(this);
  return ua(n).has.call(n, e) || (n.add(e), Dn(n, "add", e, e)), this
}

function oc(e, t, n = !1) {
  !n && !Wt(t) && !Do(t) && (t = He(t));
  const o = He(this),
    {
      has: s,
      get: a
    } = ua(o);
  let l = s.call(o, e);
  l || (e = He(e), l = s.call(o, e));
  const r = a.call(o, e);
  return o.set(e, t), l ? ro(t, r) && Dn(o, "set", e, t) : Dn(o, "add", e, t), this
}

function ic(e) {
  const t = He(this),
    {
      has: n,
      get: o
    } = ua(t);
  let s = n.call(t, e);
  s || (e = He(e), s = n.call(t, e)), o && o.call(t, e);
  const a = t.delete(e);
  return s && Dn(t, "delete", e, void 0), a
}

function sc() {
  const e = He(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Dn(e, "clear", void 0, void 0), n
}

function ds(e, t) {
  return function(o, s) {
    const a = this,
      l = a.__v_raw,
      r = He(l),
      c = t ? sr : e ? ur : wt;
    return !e && _t(r, "iterate", Io), l.forEach((u, d) => o.call(s, c(u), c(d), a))
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
      d = n ? sr : t ? ur : wt;
    return !t && _t(a, "iterate", c ? wl : Io), {
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

function pg() {
  const e = {
      get(a) {
        return rs(this, a)
      },
      get size() {
        return us(this)
      },
      has: cs,
      add: nc,
      set: oc,
      delete: ic,
      clear: sc,
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
        return nc.call(this, a, !0)
      },
      set(a, l) {
        return oc.call(this, a, l, !0)
      },
      delete: ic,
      clear: sc,
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
const [bg, wg, Cg, _g] = pg();

function ar(e, t) {
  const n = t ? e ? _g : Cg : e ? wg : bg;
  return (o, s, a) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(We(n, s) && s in o ? n : o, s, a)
}
const kg = {
    get: ar(!1, !1)
  },
  Sg = {
    get: ar(!1, !0)
  },
  Tg = {
    get: ar(!0, !1)
  };
const Nd = new WeakMap,
  Fd = new WeakMap,
  Vd = new WeakMap,
  xg = new WeakMap;

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

function Ag(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Eg(Ym(e))
}

function Je(e) {
  return Do(e) ? e : lr(e, !1, gg, kg, Nd)
}

function zd(e) {
  return lr(e, !1, yg, Sg, Fd)
}

function Hd(e) {
  return lr(e, !0, vg, Tg, Vd)
}

function lr(e, t, n, o, s) {
  if (!Xe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const a = s.get(e);
  if (a) return a;
  const l = Ag(e);
  if (l === 0) return e;
  const r = new Proxy(e, l === 2 ? o : n);
  return s.set(e, r), r
}

function lo(e) {
  return Do(e) ? lo(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Do(e) {
  return !!(e && e.__v_isReadonly)
}

function Wt(e) {
  return !!(e && e.__v_isShallow)
}

function rr(e) {
  return e ? !!e.__v_raw : !1
}

function He(e) {
  const t = e && e.__v_raw;
  return t ? He(t) : e
}

function cr(e) {
  return !We(e, "__v_skip") && Object.isExtensible(e) && bd(e, "__v_skip", !0), e
}
const wt = e => Xe(e) ? Je(e) : e,
  ur = e => Xe(e) ? Hd(e) : e;

function it(e) {
  return e ? e.__v_isRef === !0 : !1
}

function F(e) {
  return Ud(e, !1)
}

function Ig(e) {
  return Ud(e, !0)
}

function Ud(e, t) {
  return it(e) ? e : new Pg(e, t)
}
class Pg {
  constructor(t, n) {
    this.dep = new ir, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : He(t), this._value = n ? t : wt(t), this.__v_isShallow = n
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      o = this.__v_isShallow || Wt(t) || Do(t);
    t = o ? t : He(t), ro(t, n) && (this._rawValue = t, this._value = o ? t : wt(t), this.dep.trigger())
  }
}

function en(e) {
  return it(e) ? e.value : e
}
const Og = {
  get: (e, t, n) => t === "__v_raw" ? e : en(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return it(s) && !it(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o)
  }
};

function Wd(e) {
  return lo(e) ? e : new Proxy(e, Og)
}

function Rg(e) {
  const t = xe(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Bg(e, n);
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
    return cg(He(this._object), this._key)
  }
}

function Bg(e, t, n) {
  const o = e[t];
  return it(o) ? o : new Dg(e, t, n)
}
class $g {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ir(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ki - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && qe !== this) return Id(this, !0), !0
  }
  get value() {
    const t = this.dep.track();
    return Rd(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}

function Mg(e, t, n = !1) {
  let o, s;
  return Ae(e) ? o = e : (o = e.get, s = e.set), new $g(o, s, n)
}
const hs = {},
  js = new WeakMap;
let xo;

function Lg(e, t = !1, n = xo) {
  if (n) {
    let o = js.get(n);
    o || js.set(n, o = []), o.push(e)
  }
}

function Ng(e, t, n = Ke) {
  const {
    immediate: o,
    deep: s,
    once: a,
    scheduler: l,
    augmentJob: r,
    call: c
  } = n, u = _ => s ? _ : Wt(_) || s === !1 || s === 0 ? On(_, 1) : On(_);
  let d, f, m, g, y = !1,
    p = !1;
  if (it(e) ? (f = () => e.value, y = Wt(e)) : lo(e) ? (f = () => u(e), y = !0) : xe(e) ? (p = !0, y = e.some(_ => lo(_) || Wt(_)), f = () => e.map(_ => {
      if (it(_)) return _.value;
      if (lo(_)) return u(_);
      if (Ae(_)) return c ? c(_, 2) : _()
    })) : Ae(e) ? t ? f = c ? () => c(e, 2) : e : f = () => {
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
  const b = xd(),
    w = () => {
      d.stop(), b && Jl(b.effects, d)
    };
  if (a && t) {
    const _ = t;
    t = (...k) => {
      _(...k), w()
    }
  }
  let v = p ? new Array(e.length).fill(hs) : hs;
  const C = _ => {
    if (!(!(d.flags & 1) || !d.dirty && !_))
      if (t) {
        const k = d.run();
        if (s || y || (p ? k.some((I, B) => ro(I, v[B])) : ro(k, v))) {
          m && m();
          const I = xo;
          xo = d;
          try {
            const B = [k, v === hs ? void 0 : p && v[0] === hs ? [] : v, g];
            c ? c(t, 3, B) : t(...B), v = k
          } finally {
            xo = I
          }
        }
      } else d.run()
  };
  return r && r(C), d = new Ed(f), d.scheduler = l ? () => l(C, !1) : C, g = _ => Lg(_, !1, d), m = d.onStop = () => {
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
  if (t <= 0 || !Xe(e) || e.__v_skip || (n = n || new Set, n.has(e))) return e;
  if (n.add(e), t--, it(e)) On(e.value, t, n);
  else if (xe(e))
    for (let o = 0; o < e.length; o++) On(e[o], t, n);
  else if (gd(e) || ti(e)) e.forEach(o => {
    On(o, t, n)
  });
  else if (pd(e)) {
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
  if (Ae(e)) {
    const s = is(e, t, n, o);
    return s && vd(s) && s.catch(a => {
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
  Fg(e, n, s, o, l)
}

function Fg(e, t, n, o = !0, s = !1) {
  if (s) throw e;
  console.error(e)
}
const Ot = [];
let vn = -1;
const ni = [];
let to = null,
  Xo = 0;
const jd = Promise.resolve();
let Qs = null;

function Oe(e) {
  const t = Qs || jd;
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

function dr(e) {
  if (!(e.flags & 1)) {
    const t = qi(e),
      n = Ot[Ot.length - 1];
    !n || !(e.flags & 2) && t >= qi(n) ? Ot.push(e) : Ot.splice(Vg(t), 0, e), e.flags |= 1, Qd()
  }
}

function Qd() {
  Qs || (Qs = jd.then(Yd))
}

function zg(e) {
  xe(e) ? ni.push(...e) : to && e.id === -1 ? to.splice(Xo + 1, 0, e) : e.flags & 1 || (ni.push(e), e.flags |= 1), Qd()
}

function ac(e, t, n = vn + 1) {
  for (; n < Ot.length; n++) {
    const o = Ot[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid) continue;
      Ot.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2)
    }
  }
}

function Kd(e) {
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

function Yd(e) {
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
    vn = -1, Ot.length = 0, Kd(), Qs = null, (Ot.length || ni.length) && Yd()
  }
}
let ut = null,
  qd = null;

function Ks(e) {
  const t = ut;
  return ut = e, qd = e && e.type.__scopeId || null, t
}

function le(e, t = ut, n) {
  if (!t || e._n) return e;
  const o = (...s) => {
    o._d && pc(-1);
    const a = Ks(t);
    let l;
    try {
      l = e(...s)
    } finally {
      Ks(a), o._d && pc(1)
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
    a && (Ae(a) && (a = {
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
const Gd = Symbol("_vte"),
  Zd = e => e.__isTeleport,
  Li = e => e && (e.disabled || e.disabled === ""),
  Hg = e => e && (e.defer || e.defer === ""),
  lc = e => typeof SVGElement < "u" && e instanceof SVGElement,
  rc = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
  Cl = (e, t) => {
    const n = e && e.to;
    return tt(n) ? t ? t(n) : null : n
  },
  Ug = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, o, s, a, l, r, c, u) {
      const {
        mc: d,
        pc: f,
        pbc: m,
        o: {
          insert: g,
          querySelector: y,
          createText: p,
          createComment: b
        }
      } = u, w = Li(t.props);
      let {
        shapeFlag: v,
        children: C,
        dynamicChildren: _
      } = t;
      if (e == null) {
        const k = t.el = p(""),
          I = t.anchor = p("");
        g(k, n, o), g(I, n, o);
        const B = (R, D) => {
            v & 16 && (s && s.isCE && (s.ce._teleportTarget = R), d(C, R, D, s, a, l, r, c))
          },
          S = () => {
            const R = t.target = Cl(t.props, y),
              D = Xd(R, t, p, g);
            R && (l !== "svg" && lc(R) ? l = "svg" : l !== "mathml" && rc(R) && (l = "mathml"), w || (B(R, D), Ms(t)))
          };
        w && (B(n, I), Ms(t)), Hg(t.props) ? Dt(S, a) : S()
      } else {
        t.el = e.el, t.targetStart = e.targetStart;
        const k = t.anchor = e.anchor,
          I = t.target = e.target,
          B = t.targetAnchor = e.targetAnchor,
          S = Li(e.props),
          R = S ? n : I,
          D = S ? k : B;
        if (l === "svg" || lc(I) ? l = "svg" : (l === "mathml" || rc(I)) && (l = "mathml"), _ ? (m(e.dynamicChildren, _, R, s, a, l, r), mr(e, t, !0)) : c || f(e, t, R, D, s, a, l, r, !1), w) S ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ms(t, n, k, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const T = t.target = Cl(t.props, y);
          T && ms(t, T, null, u, 0)
        } else S && ms(t, I, B, u, 1);
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
        for (let y = 0; y < r.length; y++) {
          const p = r[y];
          o(p, t, n, g, !!p.dynamicChildren)
        }
      }
    },
    move: ms,
    hydrate: Wg
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

function Wg(e, t, n, o, s, a, {
  o: {
    nextSibling: l,
    parentNode: r,
    querySelector: c,
    insert: u,
    createText: d
  }
}, f) {
  const m = t.target = Cl(t.props, c);
  if (m) {
    const g = m._lpa || m.firstChild;
    if (t.shapeFlag & 16)
      if (Li(t.props)) t.anchor = f(l(e), t, r(e), n, o, s, a), t.targetStart = g, t.targetAnchor = g && l(g);
      else {
        t.anchor = l(e);
        let y = g;
        for (; y;) {
          if (y && y.nodeType === 8) {
            if (y.data === "teleport start anchor") t.targetStart = y;
            else if (y.data === "teleport anchor") {
              t.targetAnchor = y, m._lpa = t.targetAnchor && l(t.targetAnchor);
              break
            }
          }
          y = l(y)
        }
        t.targetAnchor || Xd(m, t, d, u), f(g && l(g), t, m, n, o, s, a)
      } Ms(t)
  }
  return t.anchor && l(t.anchor)
}
const $o = Ug;

function Ms(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.targetStart;
    for (; n && n !== e.targetAnchor;) n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut()
  }
}

function Xd(e, t, n, o) {
  const s = t.targetStart = n(""),
    a = t.targetAnchor = n("");
  return s[Gd] = a, e && (o(s, e), o(a, e)), a
}
const no = Symbol("_leaveCb"),
  gs = Symbol("_enterCb");

function jg() {
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
const zt = [Function, Array],
  Jd = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: zt,
    onEnter: zt,
    onAfterEnter: zt,
    onEnterCancelled: zt,
    onBeforeLeave: zt,
    onLeave: zt,
    onAfterLeave: zt,
    onLeaveCancelled: zt,
    onBeforeAppear: zt,
    onAppear: zt,
    onAfterAppear: zt,
    onAppearCancelled: zt
  },
  ef = e => {
    const t = e.subTree;
    return t.component ? ef(t.component) : t
  },
  Qg = {
    name: "BaseTransition",
    props: Jd,
    setup(e, {
      slots: t
    }) {
      const n = ln(),
        o = jg();
      return () => {
        const s = t.default && of(t.default(), !0);
        if (!s || !s.length) return;
        const a = tf(s),
          l = He(e),
          {
            mode: r
          } = l;
        if (o.isLeaving) return Va(a);
        const c = cc(a);
        if (!c) return Va(a);
        let u = _l(c, l, o, n, m => u = m);
        c.type !== vt && Gi(c, u);
        const d = n.subTree,
          f = d && cc(d);
        if (f && f.type !== vt && !Eo(c, f) && ef(n).type !== vt) {
          const m = _l(f, l, o, n);
          if (Gi(f, m), r === "out-in" && c.type !== vt) return o.isLeaving = !0, m.afterLeave = () => {
            o.isLeaving = !1, n.job.flags & 8 || n.update(), delete m.afterLeave
          }, Va(a);
          r === "in-out" && c.type !== vt && (m.delayLeave = (g, y, p) => {
            const b = nf(o, f);
            b[String(f.key)] = f, g[no] = () => {
              y(), g[no] = void 0, delete u.delayedLeave
            }, u.delayedLeave = p
          })
        }
        return a
      }
    }
  };

function tf(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== vt) {
        t = n;
        break
      }
  }
  return t
}
const Kg = Qg;

function nf(e, t) {
  const {
    leavingVNodes: n
  } = e;
  let o = n.get(t.type);
  return o || (o = Object.create(null), n.set(t.type, o)), o
}

function _l(e, t, n, o, s) {
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
    onAfterLeave: y,
    onLeaveCancelled: p,
    onBeforeAppear: b,
    onAppear: w,
    onAfterAppear: v,
    onAppearCancelled: C
  } = t, _ = String(e.key), k = nf(n, e), I = (R, D) => {
    R && on(R, o, 9, D)
  }, B = (R, D) => {
    const T = D[1];
    I(R, D), xe(R) ? R.every(P => P.length <= 1) && T() : R.length <= 1 && T()
  }, S = {
    mode: l,
    persisted: r,
    beforeEnter(R) {
      let D = c;
      if (!n.isMounted)
        if (a) D = b || c;
        else return;
      R[no] && R[no](!0);
      const T = k[_];
      T && Eo(e, T) && T.el[no] && T.el[no](), I(D, [R])
    },
    enter(R) {
      let D = u,
        T = d,
        P = f;
      if (!n.isMounted)
        if (a) D = w || u, T = v || d, P = C || f;
        else return;
      let M = !1;
      const J = R[gs] = ce => {
        M || (M = !0, ce ? I(P, [R]) : I(T, [R]), S.delayedLeave && S.delayedLeave(), R[gs] = void 0)
      };
      D ? B(D, [R, J]) : J()
    },
    leave(R, D) {
      const T = String(e.key);
      if (R[gs] && R[gs](!0), n.isUnmounting) return D();
      I(m, [R]);
      let P = !1;
      const M = R[no] = J => {
        P || (P = !0, D(), J ? I(p, [R]) : I(y, [R]), R[no] = void 0, k[T] === e && delete k[T])
      };
      k[T] = e, g ? B(g, [R, M]) : M()
    },
    clone(R) {
      const D = _l(R, t, n, o, s);
      return s && s(D), D
    }
  };
  return S
}

function Va(e) {
  if (fa(e)) return e = co(e), e.children = null, e
}

function cc(e) {
  if (!fa(e)) return Zd(e.type) && e.children ? tf(e.children) : e;
  const {
    shapeFlag: t,
    children: n
  } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Ae(n.default)) return n.default()
  }
}

function Gi(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Gi(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function of(e, t = !1, n) {
  let o = [],
    s = 0;
  for (let a = 0; a < e.length; a++) {
    let l = e[a];
    const r = n == null ? l.key : String(n) + String(l.key != null ? l.key : a);
    l.type === Re ? (l.patchFlag & 128 && s++, o = o.concat(of(l.children, t, r))) : (t || l.type !== vt) && o.push(r != null ? co(l, {
      key: r
    }) : l)
  }
  if (s > 1)
    for (let a = 0; a < o.length; a++) o[a].patchFlag = -2;
  return o
} /*! #__NO_SIDE_EFFECTS__ */
function K(e, t) {
  return Ae(e) ? ft({
    name: e.name
  }, t, {
    setup: e
  }) : e
}

function sf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function kl(e, t, n, o, s = !1) {
  if (xe(e)) {
    e.forEach((y, p) => kl(y, t && (xe(t) ? t[p] : t), n, o, s));
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
    g = f === Ke ? () => !1 : y => We(m, y);
  if (u != null && u !== c && (tt(u) ? (d[u] = null, g(u) && (f[u] = null)) : it(u) && (u.value = null)), Ae(c)) is(c, r, 12, [l, d]);
  else {
    const y = tt(c),
      p = it(c);
    if (y || p) {
      const b = () => {
        if (e.f) {
          const w = y ? g(c) ? f[c] : d[c] : c.value;
          s ? xe(w) && Jl(w, a) : xe(w) ? w.includes(a) || w.push(a) : y ? (d[c] = [a], g(c) && (f[c] = d[c])) : (c.value = [a], e.k && (d[e.k] = c.value))
        } else y ? (d[c] = l, g(c) && (f[c] = l)) : p && (c.value = l, e.k && (d[e.k] = l))
      };
      l ? (b.id = -1, Dt(b, n)) : b()
    }
  }
}
const oi = e => !!e.type.__asyncLoader,
  fa = e => e.type.__isKeepAlive;

function Cn(e, t) {
  af(e, "a", t)
}

function _n(e, t) {
  af(e, "da", t)
}

function af(e, t, n = mt) {
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
    for (; s && s.parent;) fa(s.parent.vnode) && Yg(o, t, n, s), s = s.parent
  }
}

function Yg(e, t, n, o) {
  const s = ha(t, e, o, !0);
  gi(() => {
    Jl(o[t], s)
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
const zn = e => (t, n = mt) => {
    (!ga || e === "sp") && ha(e, (...o) => t(...o), n)
  },
  qg = zn("bm"),
  at = zn("m"),
  lf = zn("bu"),
  rf = zn("u"),
  kn = zn("bum"),
  gi = zn("um"),
  Gg = zn("sp"),
  Zg = zn("rtg"),
  Xg = zn("rtc");

function Jg(e, t = mt) {
  ha("ec", e, t)
}
const cf = "components",
  ev = "directives";

function ge(e, t) {
  return uf(cf, e, !0, t) || e
}
const tv = Symbol.for("v-ndc");

function nv(e) {
  return uf(ev, e)
}

function uf(e, t, n = !0, o = !1) {
  const s = ut || mt;
  if (s) {
    const a = s.type;
    if (e === cf) {
      const r = Uv(a, !1);
      if (r && (r === t || r === Qt(t) || r === ra(Qt(t)))) return a
    }
    const l = uc(s[e] || a[e], t) || uc(s.appContext[e], t);
    return !l && o ? a : l
  }
}

function uc(e, t) {
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
    for (let u = 0, d = e.length; u < d; u++) s[u] = t(c ? wt(e[u]) : e[u], u, void 0, a)
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let r = 0; r < e; r++) s[r] = t(r + 1, r, void 0, a)
  } else if (Xe(e))
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

function df(e, t) {
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

function za(e, t, n = {}, o, s) {
  if (ut.ce || ut.parent && oi(ut.parent) && ut.parent.ce) return t !== "default" && (n.name = t), z(), Me(Re, null, [h("slot", n, o)], 64);
  let a = e[t];
  a && a._c && (a._d = !1), z();
  const l = a && ff(a(n)),
    r = Me(Re, {
      key: (n.key || l && l.key || `_${t}`) + (!l && o ? "_fb" : "")
    }, l || [], l && e._ === 1 ? 64 : -2);
  return a && a._c && (a._d = !0), r
}

function ff(e) {
  return e.some(t => ui(t) ? !(t.type === vt || t.type === Re && !ff(t.children)) : !0) ? e : null
}
const Sl = e => e ? Pf(e) ? va(e) : Sl(e.parent) : null,
  Ni = ft(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Sl(e.parent),
    $root: e => Sl(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => fr(e),
    $forceUpdate: e => e.f || (e.f = () => {
      dr(e.update)
    }),
    $nextTick: e => e.n || (e.n = Oe.bind(e.proxy)),
    $watch: e => Sv.bind(e)
  }),
  Ha = (e, t) => e !== Ke && !e.__isScriptSetup && We(e, t),
  ov = {
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
          Tl && (l[t] = 0)
        }
      }
      const d = Ni[t];
      let f, m;
      if (d) return t === "$attrs" && _t(e.attrs, "get", ""), d(e);
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

function dc(e) {
  return xe(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}
let Tl = !0;

function iv(e) {
  const t = fr(e),
    n = e.proxy,
    o = e.ctx;
  Tl = !1, t.beforeCreate && fc(t.beforeCreate, e, "bc");
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
    updated: y,
    activated: p,
    deactivated: b,
    beforeDestroy: w,
    beforeUnmount: v,
    destroyed: C,
    unmounted: _,
    render: k,
    renderTracked: I,
    renderTriggered: B,
    errorCaptured: S,
    serverPrefetch: R,
    expose: D,
    inheritAttrs: T,
    components: P,
    directives: M,
    filters: J
  } = t;
  if (u && sv(u, o, null), l)
    for (const ne in l) {
      const ue = l[ne];
      Ae(ue) && (o[ne] = ue.bind(n))
    }
  if (s) {
    const ne = s.call(n, n);
    Xe(ne) && (e.data = Je(ne))
  }
  if (Tl = !0, a)
    for (const ne in a) {
      const ue = a[ne],
        De = Ae(ue) ? ue.bind(n, n) : Ae(ue.get) ? ue.get.bind(n, n) : bn,
        Ne = !Ae(ue) && Ae(ue.set) ? ue.set.bind(n) : bn,
        V = N({
          get: De,
          set: Ne
        });
      Object.defineProperty(o, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => V.value,
        set: X => V.value = X
      })
    }
  if (r)
    for (const ne in r) hf(r[ne], o, n, ne);
  if (c) {
    const ne = Ae(c) ? c.call(n) : c;
    Reflect.ownKeys(ne).forEach(ue => {
      Bn(ue, ne[ue])
    })
  }
  d && fc(d, e, "c");

  function W(ne, ue) {
    xe(ue) ? ue.forEach(De => ne(De.bind(n))) : ue && ne(ue.bind(n))
  }
  if (W(qg, f), W(at, m), W(lf, g), W(rf, y), W(Cn, p), W(_n, b), W(Jg, S), W(Xg, I), W(Zg, B), W(kn, v), W(gi, _), W(Gg, R), xe(D))
    if (D.length) {
      const ne = e.exposed || (e.exposed = {});
      D.forEach(ue => {
        Object.defineProperty(ne, ue, {
          get: () => n[ue],
          set: De => n[ue] = De
        })
      })
    } else e.exposed || (e.exposed = {});
  k && e.render === bn && (e.render = k), T != null && (e.inheritAttrs = T), P && (e.components = P), M && (e.directives = M), R && sf(e)
}

function sv(e, t, n = bn) {
  xe(e) && (e = xl(e));
  for (const o in e) {
    const s = e[o];
    let a;
    Xe(s) ? "default" in s ? a = Rt(s.from || o, s.default, !0) : a = Rt(s.from || o) : a = Rt(s), it(a) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: l => a.value = l
    }) : t[o] = a
  }
}

function fc(e, t, n) {
  on(xe(e) ? e.map(o => o.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function hf(e, t, n, o) {
  let s = o.includes(".") ? Tf(n, o) : () => n[o];
  if (tt(e)) {
    const a = t[e];
    Ae(a) && re(s, a)
  } else if (Ae(e)) re(s, e.bind(n));
  else if (Xe(e))
    if (xe(e)) e.forEach(a => hf(a, t, n, o));
    else {
      const a = Ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ae(a) && re(s, a, e)
    }
}

function fr(e) {
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
  return r ? c = r : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(u => Ys(c, u, l, !0)), Ys(c, t, l)), Xe(t) && a.set(t, c), c
}

function Ys(e, t, n, o = !1) {
  const {
    mixins: s,
    extends: a
  } = t;
  a && Ys(e, a, n, !0), s && s.forEach(l => Ys(e, l, n, !0));
  for (const l in t)
    if (!(o && l === "expose")) {
      const r = av[l] || n && n[l];
      e[l] = r ? r(e[l], t[l]) : t[l]
    } return e
}
const av = {
  data: hc,
  props: mc,
  emits: mc,
  methods: Di,
  computed: Di,
  beforeCreate: At,
  created: At,
  beforeMount: At,
  mounted: At,
  beforeUpdate: At,
  updated: At,
  beforeDestroy: At,
  beforeUnmount: At,
  destroyed: At,
  unmounted: At,
  activated: At,
  deactivated: At,
  errorCaptured: At,
  serverPrefetch: At,
  components: Di,
  directives: Di,
  watch: rv,
  provide: hc,
  inject: lv
};

function hc(e, t) {
  return t ? e ? function() {
    return ft(Ae(e) ? e.call(this, this) : e, Ae(t) ? t.call(this, this) : t)
  } : t : e
}

function lv(e, t) {
  return Di(xl(e), xl(t))
}

function xl(e) {
  if (xe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t
  }
  return e
}

function At(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}

function Di(e, t) {
  return e ? ft(Object.create(null), e, t) : t
}

function mc(e, t) {
  return e ? xe(e) && xe(t) ? [...new Set([...e, ...t])] : ft(Object.create(null), dc(e), dc(t ?? {})) : t
}

function rv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ft(Object.create(null), e);
  for (const o in t) n[o] = At(e[o], t[o]);
  return n
}

function mf() {
  return {
    app: null,
    config: {
      isNativeTag: Qm,
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
let cv = 0;

function uv(e, t) {
  return function(o, s = null) {
    Ae(o) || (o = ft({}, o)), s != null && !Xe(s) && (s = null);
    const a = mf(),
      l = new WeakSet,
      r = [];
    let c = !1;
    const u = a.app = {
      _uid: cv++,
      _component: o,
      _props: s,
      _container: null,
      _context: a,
      _instance: null,
      version: jv,
      get config() {
        return a.config
      },
      set config(d) {},
      use(d, ...f) {
        return l.has(d) || (d && Ae(d.install) ? (l.add(d), d.install(u, ...f)) : Ae(d) && (l.add(d), d(u, ...f))), u
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

function Bn(e, t) {
  if (mt) {
    let n = mt.provides;
    const o = mt.parent && mt.parent.provides;
    o === n && (n = mt.provides = Object.create(o)), n[e] = t
  }
}

function Rt(e, t, n = !1) {
  const o = mt || ut;
  if (o || Po) {
    const s = Po ? Po._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && Ae(t) ? t.call(o && o.proxy) : t
  }
}

function dv() {
  return !!(mt || ut || Po)
}
const gf = {},
  vf = () => Object.create(gf),
  yf = e => Object.getPrototypeOf(e) === gf;

function fv(e, t, n, o = !1) {
  const s = {},
    a = vf();
  e.propsDefaults = Object.create(null), pf(e, t, s, a);
  for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
  n ? e.props = o ? s : zd(s) : e.type.props ? e.props = s : e.props = a, e.attrs = a
}

function hv(e, t, n, o) {
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
            const y = Qt(m);
            s[y] = El(c, r, y, g, e, !1)
          }
        else g !== a[m] && (a[m] = g, u = !0)
      }
    }
  } else {
    pf(e, t, s, a) && (u = !0);
    let d;
    for (const f in r)(!t || !We(t, f) && ((d = Vn(f)) === f || !We(t, d))) && (c ? n && (n[f] !== void 0 || n[d] !== void 0) && (s[f] = El(c, r, f, void 0, e, !0)) : delete s[f]);
    if (a !== r)
      for (const f in a)(!t || !We(t, f)) && (delete a[f], u = !0)
  }
  u && Dn(e.attrs, "set", "")
}

function pf(e, t, n, o) {
  const [s, a] = e.propsOptions;
  let l = !1,
    r;
  if (t)
    for (let c in t) {
      if (Bi(c)) continue;
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
      if (l.type !== Function && !l.skipFactory && Ae(c)) {
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
    l[0] && (a && !r ? o = !1 : l[1] && (o === "" || o === Vn(n)) && (o = !0))
  }
  return o
}
const mv = new WeakMap;

function bf(e, t, n = !1) {
  const o = n ? mv : t.propsCache,
    s = o.get(e);
  if (s) return s;
  const a = e.props,
    l = {},
    r = [];
  let c = !1;
  if (!Ae(e)) {
    const d = f => {
      c = !0;
      const [m, g] = bf(f, t, !0);
      ft(l, m), g && r.push(...g)
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d)
  }
  if (!a && !c) return Xe(e) && o.set(e, ei), ei;
  if (xe(a))
    for (let d = 0; d < a.length; d++) {
      const f = Qt(a[d]);
      gc(f) && (l[f] = Ke)
    } else if (a)
      for (const d in a) {
        const f = Qt(d);
        if (gc(f)) {
          const m = a[d],
            g = l[f] = xe(m) || Ae(m) ? {
              type: m
            } : ft({}, m),
            y = g.type;
          let p = !1,
            b = !0;
          if (xe(y))
            for (let w = 0; w < y.length; ++w) {
              const v = y[w],
                C = Ae(v) && v.name;
              if (C === "Boolean") {
                p = !0;
                break
              } else C === "String" && (b = !1)
            } else p = Ae(y) && y.name === "Boolean";
          g[0] = p, g[1] = b, (p || We(g, "default")) && r.push(f)
        }
      }
  const u = [l, r];
  return Xe(e) && o.set(e, u), u
}

function gc(e) {
  return e[0] !== "$" && !Bi(e)
}
const wf = e => e[0] === "_" || e === "$stable",
  hr = e => xe(e) ? e.map(yn) : [yn(e)],
  gv = (e, t, n) => {
    if (t._n) return t;
    const o = le((...s) => hr(t(...s)), n);
    return o._c = !1, o
  },
  Cf = (e, t, n) => {
    const o = e._ctx;
    for (const s in e) {
      if (wf(s)) continue;
      const a = e[s];
      if (Ae(a)) t[s] = gv(s, a, o);
      else if (a != null) {
        const l = hr(a);
        t[s] = () => l
      }
    }
  },
  _f = (e, t) => {
    const n = hr(t);
    e.slots.default = () => n
  },
  kf = (e, t, n) => {
    for (const o in t)(n || o !== "_") && (e[o] = t[o])
  },
  vv = (e, t, n) => {
    const o = e.slots = vf();
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (kf(o, t, n), n && bd(o, "_", s, !0)) : Cf(t, o)
    } else t && _f(e, t)
  },
  yv = (e, t, n) => {
    const {
      vnode: o,
      slots: s
    } = e;
    let a = !0,
      l = Ke;
    if (o.shapeFlag & 32) {
      const r = t._;
      r ? n && r === 1 ? a = !1 : kf(s, t, n) : (a = !t.$stable, Cf(t, s)), l = t
    } else t && (_f(e, t), l = {
      default: 1
    });
    if (a)
      for (const r in s) !wf(r) && l[r] == null && delete s[r]
  },
  Dt = Ov;

function pv(e) {
  return bv(e)
}

function bv(e, t) {
  const n = wd();
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
    insertStaticContent: y
  } = e, p = (x, O, L, q = null, Q = null, ie = null, me = void 0, fe = null, de = !!O.dynamicChildren) => {
    if (x === O) return;
    x && !Eo(x, O) && (q = A(x), X(x, Q, ie, !0), x = null), O.patchFlag === -2 && (de = !1, O.dynamicChildren = null);
    const {
      type: se,
      ref: Te,
      shapeFlag: be
    } = O;
    switch (se) {
      case ss:
        b(x, O, L, q);
        break;
      case vt:
        w(x, O, L, q);
        break;
      case Ls:
        x == null && v(O, L, q, me);
        break;
      case Re:
        P(x, O, L, q, Q, ie, me, fe, de);
        break;
      default:
        be & 1 ? k(x, O, L, q, Q, ie, me, fe, de) : be & 6 ? M(x, O, L, q, Q, ie, me, fe, de) : (be & 64 || be & 128) && se.process(x, O, L, q, Q, ie, me, fe, de, oe)
    }
    Te != null && Q && kl(Te, x && x.ref, ie, O || x, !O)
  }, b = (x, O, L, q) => {
    if (x == null) o(O.el = r(O.children), L, q);
    else {
      const Q = O.el = x.el;
      O.children !== x.children && u(Q, O.children)
    }
  }, w = (x, O, L, q) => {
    x == null ? o(O.el = c(O.children || ""), L, q) : O.el = x.el
  }, v = (x, O, L, q) => {
    [x.el, x.anchor] = y(x.children, O, L, q, x.el, x.anchor)
  }, C = ({
    el: x,
    anchor: O
  }, L, q) => {
    let Q;
    for (; x && x !== O;) Q = m(x), o(x, L, q), x = Q;
    o(O, L, q)
  }, _ = ({
    el: x,
    anchor: O
  }) => {
    let L;
    for (; x && x !== O;) L = m(x), s(x), x = L;
    s(O)
  }, k = (x, O, L, q, Q, ie, me, fe, de) => {
    O.type === "svg" ? me = "svg" : O.type === "math" && (me = "mathml"), x == null ? I(O, L, q, Q, ie, me, fe, de) : R(x, O, Q, ie, me, fe, de)
  }, I = (x, O, L, q, Q, ie, me, fe) => {
    let de, se;
    const {
      props: Te,
      shapeFlag: be,
      transition: _e,
      dirs: Ee
    } = x;
    if (de = x.el = l(x.type, ie, Te && Te.is, Te), be & 8 ? d(de, x.children) : be & 16 && S(x.children, de, null, q, Q, Ua(x, ie), me, fe), Ee && wo(x, null, q, "created"), B(de, x, x.scopeId, me, q), Te) {
      for (const Ye in Te) Ye !== "value" && !Bi(Ye) && a(de, Ye, null, Te[Ye], ie, q);
      "value" in Te && a(de, "value", null, Te.value, ie), (se = Te.onVnodeBeforeMount) && hn(se, q, x)
    }
    Ee && wo(x, null, q, "beforeMount");
    const Ve = wv(Q, _e);
    Ve && _e.beforeEnter(de), o(de, O, L), ((se = Te && Te.onVnodeMounted) || Ve || Ee) && Dt(() => {
      se && hn(se, q, x), Ve && _e.enter(de), Ee && wo(x, null, q, "mounted")
    }, Q)
  }, B = (x, O, L, q, Q) => {
    if (L && g(x, L), q)
      for (let ie = 0; ie < q.length; ie++) g(x, q[ie]);
    if (Q) {
      let ie = Q.subTree;
      if (O === ie || Ef(ie.type) && (ie.ssContent === O || ie.ssFallback === O)) {
        const me = Q.vnode;
        B(x, me, me.scopeId, me.slotScopeIds, Q.parent)
      }
    }
  }, S = (x, O, L, q, Q, ie, me, fe, de = 0) => {
    for (let se = de; se < x.length; se++) {
      const Te = x[se] = fe ? oo(x[se]) : yn(x[se]);
      p(null, Te, O, L, q, Q, ie, me, fe)
    }
  }, R = (x, O, L, q, Q, ie, me) => {
    const fe = O.el = x.el;
    let {
      patchFlag: de,
      dynamicChildren: se,
      dirs: Te
    } = O;
    de |= x.patchFlag & 16;
    const be = x.props || Ke,
      _e = O.props || Ke;
    let Ee;
    if (L && Co(L, !1), (Ee = _e.onVnodeBeforeUpdate) && hn(Ee, L, O, x), Te && wo(O, x, L, "beforeUpdate"), L && Co(L, !0), (be.innerHTML && _e.innerHTML == null || be.textContent && _e.textContent == null) && d(fe, ""), se ? D(x.dynamicChildren, se, fe, L, q, Ua(O, Q), ie) : me || ue(x, O, fe, null, L, q, Ua(O, Q), ie, !1), de > 0) {
      if (de & 16) T(fe, be, _e, L, Q);
      else if (de & 2 && be.class !== _e.class && a(fe, "class", null, _e.class, Q), de & 4 && a(fe, "style", be.style, _e.style, Q), de & 8) {
        const Ve = O.dynamicProps;
        for (let Ye = 0; Ye < Ve.length; Ye++) {
          const je = Ve[Ye],
            $t = be[je],
            bt = _e[je];
          (bt !== $t || je === "value") && a(fe, je, $t, bt, Q, L)
        }
      }
      de & 1 && x.children !== O.children && d(fe, O.children)
    } else !me && se == null && T(fe, be, _e, L, Q);
    ((Ee = _e.onVnodeUpdated) || Te) && Dt(() => {
      Ee && hn(Ee, L, O, x), Te && wo(O, x, L, "updated")
    }, q)
  }, D = (x, O, L, q, Q, ie, me) => {
    for (let fe = 0; fe < O.length; fe++) {
      const de = x[fe],
        se = O[fe],
        Te = de.el && (de.type === Re || !Eo(de, se) || de.shapeFlag & 70) ? f(de.el) : L;
      p(de, se, Te, null, q, Q, ie, me, !0)
    }
  }, T = (x, O, L, q, Q) => {
    if (O !== L) {
      if (O !== Ke)
        for (const ie in O) !Bi(ie) && !(ie in L) && a(x, ie, O[ie], null, Q, q);
      for (const ie in L) {
        if (Bi(ie)) continue;
        const me = L[ie],
          fe = O[ie];
        me !== fe && ie !== "value" && a(x, ie, fe, me, Q, q)
      }
      "value" in L && a(x, "value", O.value, L.value, Q)
    }
  }, P = (x, O, L, q, Q, ie, me, fe, de) => {
    const se = O.el = x ? x.el : r(""),
      Te = O.anchor = x ? x.anchor : r("");
    let {
      patchFlag: be,
      dynamicChildren: _e,
      slotScopeIds: Ee
    } = O;
    Ee && (fe = fe ? fe.concat(Ee) : Ee), x == null ? (o(se, L, q), o(Te, L, q), S(O.children || [], L, Te, Q, ie, me, fe, de)) : be > 0 && be & 64 && _e && x.dynamicChildren ? (D(x.dynamicChildren, _e, L, Q, ie, me, fe), (O.key != null || Q && O === Q.subTree) && mr(x, O, !0)) : ue(x, O, L, Te, Q, ie, me, fe, de)
  }, M = (x, O, L, q, Q, ie, me, fe, de) => {
    O.slotScopeIds = fe, x == null ? O.shapeFlag & 512 ? Q.ctx.activate(O, L, q, me, de) : J(O, L, q, Q, ie, me, de) : ce(x, O, de)
  }, J = (x, O, L, q, Q, ie, me) => {
    const fe = x.component = Nv(x, q, Q);
    if (fa(x) && (fe.ctx.renderer = oe), Fv(fe, !1, me), fe.asyncDep) {
      if (Q && Q.registerDep(fe, W, me), !x.el) {
        const de = fe.subTree = h(vt);
        w(null, de, O, L)
      }
    } else W(fe, x, O, L, Q, ie, me)
  }, ce = (x, O, L) => {
    const q = O.component = x.component;
    if (Iv(x, O, L))
      if (q.asyncDep && !q.asyncResolved) {
        ne(q, O, L);
        return
      } else q.next = O, q.update();
    else O.el = x.el, q.vnode = O
  }, W = (x, O, L, q, Q, ie, me) => {
    const fe = () => {
      if (x.isMounted) {
        let {
          next: be,
          bu: _e,
          u: Ee,
          parent: Ve,
          vnode: Ye
        } = x;
        {
          const Mt = Sf(x);
          if (Mt) {
            be && (be.el = Ye.el, ne(x, be, me)), Mt.asyncDep.then(() => {
              x.isUnmounted || fe()
            });
            return
          }
        }
        let je = be,
          $t;
        Co(x, !1), be ? (be.el = Ye.el, ne(x, be, me)) : be = Ye, _e && $a(_e), ($t = be.props && be.props.onVnodeBeforeUpdate) && hn($t, Ve, be, Ye), Co(x, !0);
        const bt = Wa(x),
          Yt = x.subTree;
        x.subTree = bt, p(Yt, bt, f(Yt.el), A(Yt), x, Q, ie), be.el = bt.el, je === null && Pv(x, bt.el), Ee && Dt(Ee, Q), ($t = be.props && be.props.onVnodeUpdated) && Dt(() => hn($t, Ve, be, Ye), Q)
      } else {
        let be;
        const {
          el: _e,
          props: Ee
        } = O, {
          bm: Ve,
          m: Ye,
          parent: je,
          root: $t,
          type: bt
        } = x, Yt = oi(O);
        if (Co(x, !1), Ve && $a(Ve), !Yt && (be = Ee && Ee.onVnodeBeforeMount) && hn(be, je, O), Co(x, !0), _e && Le) {
          const Mt = () => {
            x.subTree = Wa(x), Le(_e, x.subTree, x, Q, null)
          };
          Yt && bt.__asyncHydrate ? bt.__asyncHydrate(_e, x, Mt) : Mt()
        } else {
          $t.ce && $t.ce._injectChildStyle(bt);
          const Mt = x.subTree = Wa(x);
          p(null, Mt, L, q, x, Q, ie), O.el = Mt.el
        }
        if (Ye && Dt(Ye, Q), !Yt && (be = Ee && Ee.onVnodeMounted)) {
          const Mt = O;
          Dt(() => hn(be, je, Mt), Q)
        }(O.shapeFlag & 256 || je && oi(je.vnode) && je.vnode.shapeFlag & 256) && x.a && Dt(x.a, Q), x.isMounted = !0, O = L = q = null
      }
    };
    x.scope.on();
    const de = x.effect = new Ed(fe);
    x.scope.off();
    const se = x.update = de.run.bind(de),
      Te = x.job = de.runIfDirty.bind(de);
    Te.i = x, Te.id = x.uid, de.scheduler = () => dr(Te), Co(x, !0), se()
  }, ne = (x, O, L) => {
    O.component = x;
    const q = x.vnode.props;
    x.vnode = O, x.next = null, hv(x, O.props, q, L), yv(x, O.children, L), ho(), ac(x), mo()
  }, ue = (x, O, L, q, Q, ie, me, fe, de = !1) => {
    const se = x && x.children,
      Te = x ? x.shapeFlag : 0,
      be = O.children,
      {
        patchFlag: _e,
        shapeFlag: Ee
      } = O;
    if (_e > 0) {
      if (_e & 128) {
        Ne(se, be, L, q, Q, ie, me, fe, de);
        return
      } else if (_e & 256) {
        De(se, be, L, q, Q, ie, me, fe, de);
        return
      }
    }
    Ee & 8 ? (Te & 16 && ye(se, Q, ie), be !== se && d(L, be)) : Te & 16 ? Ee & 16 ? Ne(se, be, L, q, Q, ie, me, fe, de) : ye(se, Q, ie, !0) : (Te & 8 && d(L, ""), Ee & 16 && S(be, L, q, Q, ie, me, fe, de))
  }, De = (x, O, L, q, Q, ie, me, fe, de) => {
    x = x || ei, O = O || ei;
    const se = x.length,
      Te = O.length,
      be = Math.min(se, Te);
    let _e;
    for (_e = 0; _e < be; _e++) {
      const Ee = O[_e] = de ? oo(O[_e]) : yn(O[_e]);
      p(x[_e], Ee, L, null, Q, ie, me, fe, de)
    }
    se > Te ? ye(x, Q, ie, !0, !1, be) : S(O, L, q, Q, ie, me, fe, de, be)
  }, Ne = (x, O, L, q, Q, ie, me, fe, de) => {
    let se = 0;
    const Te = O.length;
    let be = x.length - 1,
      _e = Te - 1;
    for (; se <= be && se <= _e;) {
      const Ee = x[se],
        Ve = O[se] = de ? oo(O[se]) : yn(O[se]);
      if (Eo(Ee, Ve)) p(Ee, Ve, L, null, Q, ie, me, fe, de);
      else break;
      se++
    }
    for (; se <= be && se <= _e;) {
      const Ee = x[be],
        Ve = O[_e] = de ? oo(O[_e]) : yn(O[_e]);
      if (Eo(Ee, Ve)) p(Ee, Ve, L, null, Q, ie, me, fe, de);
      else break;
      be--, _e--
    }
    if (se > be) {
      if (se <= _e) {
        const Ee = _e + 1,
          Ve = Ee < Te ? O[Ee].el : q;
        for (; se <= _e;) p(null, O[se] = de ? oo(O[se]) : yn(O[se]), L, Ve, Q, ie, me, fe, de), se++
      }
    } else if (se > _e)
      for (; se <= be;) X(x[se], Q, ie, !0), se++;
    else {
      const Ee = se,
        Ve = se,
        Ye = new Map;
      for (se = Ve; se <= _e; se++) {
        const Lt = O[se] = de ? oo(O[se]) : yn(O[se]);
        Lt.key != null && Ye.set(Lt.key, se)
      }
      let je, $t = 0;
      const bt = _e - Ve + 1;
      let Yt = !1,
        Mt = 0;
      const Ci = new Array(bt);
      for (se = 0; se < bt; se++) Ci[se] = 0;
      for (se = Ee; se <= be; se++) {
        const Lt = x[se];
        if ($t >= bt) {
          X(Lt, Q, ie, !0);
          continue
        }
        let fn;
        if (Lt.key != null) fn = Ye.get(Lt.key);
        else
          for (je = Ve; je <= _e; je++)
            if (Ci[je - Ve] === 0 && Eo(Lt, O[je])) {
              fn = je;
              break
            } fn === void 0 ? X(Lt, Q, ie, !0) : (Ci[fn - Ve] = se + 1, fn >= Mt ? Mt = fn : Yt = !0, p(Lt, O[fn], L, null, Q, ie, me, fe, de), $t++)
      }
      const Gr = Yt ? Cv(Ci) : ei;
      for (je = Gr.length - 1, se = bt - 1; se >= 0; se--) {
        const Lt = Ve + se,
          fn = O[Lt],
          Zr = Lt + 1 < Te ? O[Lt + 1].el : q;
        Ci[se] === 0 ? p(null, fn, L, Zr, Q, ie, me, fe, de) : Yt && (je < 0 || se !== Gr[je] ? V(fn, L, Zr, 2) : je--)
      }
    }
  }, V = (x, O, L, q, Q = null) => {
    const {
      el: ie,
      type: me,
      transition: fe,
      children: de,
      shapeFlag: se
    } = x;
    if (se & 6) {
      V(x.component.subTree, O, L, q);
      return
    }
    if (se & 128) {
      x.suspense.move(O, L, q);
      return
    }
    if (se & 64) {
      me.move(x, O, L, oe);
      return
    }
    if (me === Re) {
      o(ie, O, L);
      for (let be = 0; be < de.length; be++) V(de[be], O, L, q);
      o(x.anchor, O, L);
      return
    }
    if (me === Ls) {
      C(x, O, L);
      return
    }
    if (q !== 2 && se & 1 && fe)
      if (q === 0) fe.beforeEnter(ie), o(ie, O, L), Dt(() => fe.enter(ie), Q);
      else {
        const {
          leave: be,
          delayLeave: _e,
          afterLeave: Ee
        } = fe, Ve = () => o(ie, O, L), Ye = () => {
          be(ie, () => {
            Ve(), Ee && Ee()
          })
        };
        _e ? _e(ie, Ve, Ye) : Ye()
      }
    else o(ie, O, L)
  }, X = (x, O, L, q = !1, Q = !1) => {
    const {
      type: ie,
      props: me,
      ref: fe,
      children: de,
      dynamicChildren: se,
      shapeFlag: Te,
      patchFlag: be,
      dirs: _e,
      cacheIndex: Ee
    } = x;
    if (be === -2 && (Q = !1), fe != null && kl(fe, null, L, x, !0), Ee != null && (O.renderCache[Ee] = void 0), Te & 256) {
      O.ctx.deactivate(x);
      return
    }
    const Ve = Te & 1 && _e,
      Ye = !oi(x);
    let je;
    if (Ye && (je = me && me.onVnodeBeforeUnmount) && hn(je, O, x), Te & 6) ae(x.component, L, q);
    else {
      if (Te & 128) {
        x.suspense.unmount(L, q);
        return
      }
      Ve && wo(x, null, O, "beforeUnmount"), Te & 64 ? x.type.remove(x, O, L, oe, q) : se && !se.hasOnce && (ie !== Re || be > 0 && be & 64) ? ye(se, O, L, !1, !0) : (ie === Re && be & 384 || !Q && Te & 16) && ye(de, O, L), q && ve(x)
    }(Ye && (je = me && me.onVnodeUnmounted) || Ve) && Dt(() => {
      je && hn(je, O, x), Ve && wo(x, null, O, "unmounted")
    }, L)
  }, ve = x => {
    const {
      type: O,
      el: L,
      anchor: q,
      transition: Q
    } = x;
    if (O === Re) {
      we(L, q);
      return
    }
    if (O === Ls) {
      _(x);
      return
    }
    const ie = () => {
      s(L), Q && !Q.persisted && Q.afterLeave && Q.afterLeave()
    };
    if (x.shapeFlag & 1 && Q && !Q.persisted) {
      const {
        leave: me,
        delayLeave: fe
      } = Q, de = () => me(L, ie);
      fe ? fe(x.el, ie, de) : de()
    } else ie()
  }, we = (x, O) => {
    let L;
    for (; x !== O;) L = m(x), s(x), x = L;
    s(O)
  }, ae = (x, O, L) => {
    const {
      bum: q,
      scope: Q,
      job: ie,
      subTree: me,
      um: fe,
      m: de,
      a: se
    } = x;
    vc(de), vc(se), q && $a(q), Q.stop(), ie && (ie.flags |= 8, X(me, x, O, L)), fe && Dt(fe, O), Dt(() => {
      x.isUnmounted = !0
    }, O), O && O.pendingBranch && !O.isUnmounted && x.asyncDep && !x.asyncResolved && x.suspenseId === O.pendingId && (O.deps--, O.deps === 0 && O.resolve())
  }, ye = (x, O, L, q = !1, Q = !1, ie = 0) => {
    for (let me = ie; me < x.length; me++) X(x[me], O, L, q, Q)
  }, A = x => {
    if (x.shapeFlag & 6) return A(x.component.subTree);
    if (x.shapeFlag & 128) return x.suspense.next();
    const O = m(x.anchor || x.el),
      L = O && O[Gd];
    return L ? m(L) : O
  };
  let H = !1;
  const U = (x, O, L) => {
      x == null ? O._vnode && X(O._vnode, null, null, !0) : p(O._vnode || null, x, O, null, null, null, L), O._vnode = x, H || (H = !0, ac(), Kd(), H = !1)
    },
    oe = {
      p,
      um: X,
      m: V,
      r: ve,
      mt: J,
      mc: S,
      pc: ue,
      pbc: D,
      n: A,
      o: e
    };
  let Se, Le;
  return {
    render: U,
    hydrate: Se,
    createApp: uv(U, Se)
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

function wv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function mr(e, t, n = !1) {
  const o = e.children,
    s = t.children;
  if (xe(o) && xe(s))
    for (let a = 0; a < o.length; a++) {
      const l = o[a];
      let r = s[a];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = s[a] = oo(s[a]), r.el = l.el), !n && r.patchFlag !== -2 && mr(l, r)), r.type === ss && (r.el = l.el)
    }
}

function Cv(e) {
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

function Sf(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Sf(t)
}

function vc(e) {
  if (e)
    for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const _v = Symbol.for("v-scx"),
  kv = () => Rt(_v);

function vi(e, t) {
  return gr(e, null, t)
}

function re(e, t, n) {
  return gr(e, t, n)
}

function gr(e, t, n = Ke) {
  const {
    immediate: o,
    deep: s,
    flush: a,
    once: l
  } = n, r = ft({}, n);
  let c;
  if (ga)
    if (a === "sync") {
      const m = kv();
      c = m.__watcherHandles || (m.__watcherHandles = [])
    } else if (!t || o) r.once = !0;
  else {
    const m = () => {};
    return m.stop = bn, m.resume = bn, m.pause = bn, m
  }
  const u = mt;
  r.call = (m, g, y) => on(m, u, g, y);
  let d = !1;
  a === "post" ? r.scheduler = m => {
    Dt(m, u && u.suspense)
  } : a !== "sync" && (d = !0, r.scheduler = (m, g) => {
    g ? m() : dr(m)
  }), r.augmentJob = m => {
    t && (m.flags |= 4), d && (m.flags |= 2, u && (m.id = u.uid, m.i = u))
  };
  const f = Ng(e, t, r);
  return c && c.push(f), f
}

function Sv(e, t, n) {
  const o = this.proxy,
    s = tt(e) ? e.includes(".") ? Tf(o, e) : () => o[e] : e.bind(o, o);
  let a;
  Ae(t) ? a = t : (a = t.handler, n = t);
  const l = as(this),
    r = gr(s, a.bind(o), n);
  return l(), r
}

function Tf(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++) o = o[n[s]];
    return o
  }
}
const Tv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qt(t)}Modifiers`] || e[`${Vn(t)}Modifiers`];

function xv(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Ke;
  let s = n;
  const a = t.startsWith("update:"),
    l = a && Tv(o, t.slice(7));
  l && (l.trim && (s = n.map(d => tt(d) ? d.trim() : d)), l.number && (s = n.map(Zm)));
  let r, c = o[r = Ba(t)] || o[r = Ba(Qt(t))];
  !c && a && (c = o[r = Ba(Vn(t))]), c && on(c, e, 6, s);
  const u = o[r + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    e.emitted[r] = !0, on(u, e, 6, s)
  }
}

function xf(e, t, n = !1) {
  const o = t.emitsCache,
    s = o.get(e);
  if (s !== void 0) return s;
  const a = e.emits;
  let l = {},
    r = !1;
  if (!Ae(e)) {
    const c = u => {
      const d = xf(u, t, !0);
      d && (r = !0, ft(l, d))
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
  }
  return !a && !r ? (Xe(e) && o.set(e, null), null) : (xe(a) ? a.forEach(c => l[c] = null) : ft(l, a), Xe(e) && o.set(e, l), l)
}

function ma(e, t) {
  return !e || !sa(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), We(e, t[0].toLowerCase() + t.slice(1)) || We(e, Vn(t)) || We(e, t))
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
    ctx: y,
    inheritAttrs: p
  } = e, b = Ks(e);
  let w, v;
  try {
    if (n.shapeFlag & 4) {
      const _ = s || o,
        k = _;
      w = yn(u.call(k, _, d, f, g, m, y)), v = r
    } else {
      const _ = t;
      w = yn(_.length > 1 ? _(f, {
        attrs: r,
        slots: l,
        emit: c
      }) : _(f, null)), v = t.props ? r : Ev(r)
    }
  } catch (_) {
    Fi.length = 0, da(_, e, 1), w = h(vt)
  }
  let C = w;
  if (v && p !== !1) {
    const _ = Object.keys(v),
      {
        shapeFlag: k
      } = C;
    _.length && k & 7 && (a && _.some(Xl) && (v = Av(v, a)), C = co(C, v, !1, !0))
  }
  return n.dirs && (C = co(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && Gi(C, n.transition), w = C, Ks(b), w
}
const Ev = e => {
    let t;
    for (const n in e)(n === "class" || n === "style" || sa(n)) && ((t || (t = {}))[n] = e[n]);
    return t
  },
  Av = (e, t) => {
    const n = {};
    for (const o in e)(!Xl(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
    return n
  };

function Iv(e, t, n) {
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
    if (c & 16) return o ? yc(o, l, u) : !!l;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const m = d[f];
        if (l[m] !== o[m] && !ma(u, m)) return !0
      }
    }
  } else return (s || r) && (!r || !r.$stable) ? !0 : o === l ? !1 : o ? l ? yc(o, l, u) : !0 : !!l;
  return !1
}

function yc(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < o.length; s++) {
    const a = o[s];
    if (t[a] !== e[a] && !ma(n, a)) return !0
  }
  return !1
}

function Pv({
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

function Ov(e, t) {
  t && t.pendingBranch ? xe(e) ? t.effects.push(...e) : t.effects.push(e) : zg(e)
}
const Re = Symbol.for("v-fgt"),
  ss = Symbol.for("v-txt"),
  vt = Symbol.for("v-cmt"),
  Ls = Symbol.for("v-stc"),
  Fi = [];
let Nt = null;

function z(e = !1) {
  Fi.push(Nt = e ? null : [])
}

function Rv() {
  Fi.pop(), Nt = Fi[Fi.length - 1] || null
}
let Zi = 1;

function pc(e) {
  Zi += e, e < 0 && Nt && (Nt.hasOnce = !0)
}

function Af(e) {
  return e.dynamicChildren = Zi > 0 ? Nt || ei : null, Rv(), Zi > 0 && Nt && Nt.push(e), e
}

function G(e, t, n, o, s, a) {
  return Af(E(e, t, n, o, s, a, !0))
}

function Me(e, t, n, o, s) {
  return Af(h(e, t, n, o, s, !0))
}

function ui(e) {
  return e ? e.__v_isVNode === !0 : !1
}

function Eo(e, t) {
  return e.type === t.type && e.key === t.key
}
const If = ({
    key: e
  }) => e ?? null,
  Ns = ({
    ref: e,
    ref_key: t,
    ref_for: n
  }) => (typeof e == "number" && (e = "" + e), e != null ? tt(e) || it(e) || Ae(e) ? {
    i: ut,
    r: e,
    k: t,
    f: !!n
  } : e : null);

function E(e, t = null, n = null, o = 0, s = null, a = e === Re ? 0 : 1, l = !1, r = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && If(t),
    ref: t && Ns(t),
    scopeId: qd,
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
  return r ? (vr(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= tt(n) ? 8 : 16), Zi > 0 && !l && Nt && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Nt.push(c), c
}
const h = Dv;

function Dv(e, t = null, n = null, o = 0, s = null, a = !1) {
  if ((!e || e === tv) && (e = vt), ui(e)) {
    const r = co(e, t, !0);
    return n && vr(r, n), Zi > 0 && !a && Nt && (r.shapeFlag & 6 ? Nt[Nt.indexOf(e)] = r : Nt.push(r)), r.patchFlag = -2, r
  }
  if (Wv(e) && (e = e.__vccOpts), t) {
    t = Bv(t);
    let {
      class: r,
      style: c
    } = t;
    r && !tt(r) && (t.class = ot(r)), Xe(c) && (rr(c) && !xe(c) && (c = ft({}, c)), t.style = an(c))
  }
  const l = tt(e) ? 1 : Ef(e) ? 128 : Zd(e) ? 64 : Xe(e) ? 4 : Ae(e) ? 2 : 0;
  return E(e, t, n, o, s, l, a, !0)
}

function Bv(e) {
  return e ? rr(e) || yf(e) ? ft({}, e) : e : null
}

function co(e, t, n = !1, o = !1) {
  const {
    props: s,
    ref: a,
    patchFlag: l,
    children: r,
    transition: c
  } = e, u = t ? Be(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && If(u),
    ref: t && t.ref ? n && a ? xe(a) ? a.concat(Ns(t)) : [a, Ns(t)] : Ns(t) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Re ? l === -1 ? 16 : l | 16 : l,
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

function pe(e = " ", t = 0) {
  return h(ss, null, e, t)
}

function $v(e, t) {
  const n = h(Ls, null, e);
  return n.staticCount = t, n
}

function Ce(e = "", t = !1) {
  return t ? (z(), Me(vt, null, e)) : h(vt, null, e)
}

function yn(e) {
  return e == null || typeof e == "boolean" ? h(vt) : xe(e) ? h(Re, null, e.slice()) : ui(e) ? oo(e) : h(ss, null, String(e))
}

function oo(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : co(e)
}

function vr(e, t) {
  let n = 0;
  const {
    shapeFlag: o
  } = e;
  if (t == null) t = null;
  else if (xe(t)) n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), vr(e, s()), s._c && (s._d = !0));
      return
    } else {
      n = 32;
      const s = t._;
      !s && !yf(t) ? t._ctx = ut : s === 3 && ut && (ut.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    }
  else Ae(t) ? (t = {
    default: t,
    _ctx: ut
  }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [pe(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n
}

function Be(...e) {
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
const Mv = mf();
let Lv = 0;

function Nv(e, t, n) {
  const o = e.type,
    s = (t ? t.appContext : e.appContext) || Mv,
    a = {
      uid: Lv++,
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
      scope: new Sd(!0),
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
      propsOptions: bf(o, s),
      emitsOptions: xf(o, s),
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
  }, a.root = t ? t.root : a, a.emit = xv.bind(null, a), e.ce && e.ce(a), a
}
let mt = null;
const ln = () => mt || ut;
let qs, Al;
{
  const e = wd(),
    t = (n, o) => {
      let s;
      return (s = e[n]) || (s = e[n] = []), s.push(o), a => {
        s.length > 1 ? s.forEach(l => l(a)) : s[0](a)
      }
    };
  qs = t("__VUE_INSTANCE_SETTERS__", n => mt = n), Al = t("__VUE_SSR_SETTERS__", n => ga = n)
}
const as = e => {
    const t = mt;
    return qs(e), e.scope.on(), () => {
      e.scope.off(), qs(t)
    }
  },
  bc = () => {
    mt && mt.scope.off(), qs(null)
  };

function Pf(e) {
  return e.vnode.shapeFlag & 4
}
let ga = !1;

function Fv(e, t = !1, n = !1) {
  t && Al(t);
  const {
    props: o,
    children: s
  } = e.vnode, a = Pf(e);
  fv(e, o, a, t), vv(e, s, n);
  const l = a ? Vv(e, t) : void 0;
  return t && Al(!1), l
}

function Vv(e, t) {
  const n = e.type;
  e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, ov);
  const {
    setup: o
  } = n;
  if (o) {
    const s = e.setupContext = o.length > 1 ? Hv(e) : null,
      a = as(e);
    ho();
    const l = is(o, e, 0, [e.props, s]);
    if (mo(), a(), vd(l)) {
      if (oi(e) || sf(e), l.then(bc, bc), t) return l.then(r => {
        wc(e, r, t)
      }).catch(r => {
        da(r, e, 0)
      });
      e.asyncDep = l
    } else wc(e, l, t)
  } else Of(e, t)
}

function wc(e, t, n) {
  Ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Xe(t) && (e.setupState = Wd(t)), Of(e, n)
}
let Cc;

function Of(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Cc && !o.render) {
      const s = o.template || fr(e).template;
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
        o.render = Cc(s, u)
      }
    }
    e.render = o.render || bn
  } {
    const s = as(e);
    ho();
    try {
      iv(e)
    } finally {
      mo(), s()
    }
  }
}
const zv = {
  get(e, t) {
    return _t(e, "get", ""), e[t]
  }
};

function Hv(e) {
  const t = n => {
    e.exposed = n || {}
  };
  return {
    attrs: new Proxy(e.attrs, zv),
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}

function va(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wd(cr(e.exposed)), {
    get(t, n) {
      if (n in t) return t[n];
      if (n in Ni) return Ni[n](e)
    },
    has(t, n) {
      return n in t || n in Ni
    }
  })) : e.proxy
}

function Uv(e, t = !0) {
  return Ae(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Wv(e) {
  return Ae(e) && "__vccOpts" in e
}
const N = (e, t) => Mg(e, t, ga);

function yr(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Xe(t) && !xe(t) ? ui(t) ? h(e, null, [t]) : h(e, t) : h(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && ui(n) && (n = [n]), h(e, t, n))
}
const jv = "3.5.11";
/**
 * @vue/runtime-dom v3.5.11
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Il;
const _c = typeof window < "u" && window.trustedTypes;
if (_c) try {
  Il = _c.createPolicy("vue", {
    createHTML: e => e
  })
} catch {}
const Rf = Il ? e => Il.createHTML(e) : e => e,
  Qv = "http://www.w3.org/2000/svg",
  Kv = "http://www.w3.org/1998/Math/MathML",
  Pn = typeof document < "u" ? document : null,
  kc = Pn && Pn.createElement("template"),
  Yv = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: e => {
      const t = e.parentNode;
      t && t.removeChild(e)
    },
    createElement: (e, t, n, o) => {
      const s = t === "svg" ? Pn.createElementNS(Qv, e) : t === "mathml" ? Pn.createElementNS(Kv, e) : n ? Pn.createElement(e, {
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
        kc.innerHTML = Rf(o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e);
        const r = kc.content;
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
  qv = ft({}, Jd, Df),
  Gv = e => (e.displayName = "Transition", e.props = qv, e),
  ya = Gv((e, {
    slots: t
  }) => yr(Kg, Zv(e), t)),
  _o = (e, t = []) => {
    xe(e) ? e.forEach(n => n(...t)) : e && e(...t)
  },
  Sc = e => e ? xe(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Zv(e) {
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
  } = e, y = Xv(s), p = y && y[0], b = y && y[1], {
    onBeforeEnter: w,
    onEnter: v,
    onEnterCancelled: C,
    onLeave: _,
    onLeaveCancelled: k,
    onBeforeAppear: I = w,
    onAppear: B = v,
    onAppearCancelled: S = C
  } = t, R = (P, M, J) => {
    ko(P, M ? d : r), ko(P, M ? u : l), J && J()
  }, D = (P, M) => {
    P._isLeaving = !1, ko(P, f), ko(P, g), ko(P, m), M && M()
  }, T = P => (M, J) => {
    const ce = P ? B : v,
      W = () => R(M, P, J);
    _o(ce, [M, W]), Tc(() => {
      ko(M, P ? c : a), Kn(M, P ? d : r), Sc(ce) || xc(M, o, p, W)
    })
  };
  return ft(t, {
    onBeforeEnter(P) {
      _o(w, [P]), Kn(P, a), Kn(P, l)
    },
    onBeforeAppear(P) {
      _o(I, [P]), Kn(P, c), Kn(P, u)
    },
    onEnter: T(!1),
    onAppear: T(!0),
    onLeave(P, M) {
      P._isLeaving = !0;
      const J = () => D(P, M);
      Kn(P, f), Kn(P, m), ty(), Tc(() => {
        P._isLeaving && (ko(P, f), Kn(P, g), Sc(_) || xc(P, o, b, J))
      }), _o(_, [P, J])
    },
    onEnterCancelled(P) {
      R(P, !1), _o(C, [P])
    },
    onAppearCancelled(P) {
      R(P, !0), _o(S, [P])
    },
    onLeaveCancelled(P) {
      D(P), _o(k, [P])
    }
  })
}

function Xv(e) {
  if (e == null) return null;
  if (Xe(e)) return [ja(e.enter), ja(e.leave)];
  {
    const t = ja(e);
    return [t, t]
  }
}

function ja(e) {
  return Xm(e)
}

function Kn(e, t) {
  t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[Xi] || (e[Xi] = new Set)).add(t)
}

function ko(e, t) {
  t.split(/\s+/).forEach(o => o && e.classList.remove(o));
  const n = e[Xi];
  n && (n.delete(t), n.size || (e[Xi] = void 0))
}

function Tc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Jv = 0;

function xc(e, t, n, o) {
  const s = e._endId = ++Jv,
    a = () => {
      s === e._endId && o()
    };
  if (n != null) return setTimeout(a, n);
  const {
    type: l,
    timeout: r,
    propCount: c
  } = ey(e, t);
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

function ey(e, t) {
  const n = window.getComputedStyle(e),
    o = y => (n[y] || "").split(", "),
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
  return Math.max(...t.map((n, o) => Ac(n) + Ac(e[o])))
}

function Ac(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function ty() {
  return document.body.offsetHeight
}

function ny(e, t, n) {
  const o = e[Xi];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Gs = Symbol("_vod"),
  Bf = Symbol("_vsh"),
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
  e.style.display = t ? e[Gs] : "none", e[Bf] = !t
}
const oy = Symbol(""),
  iy = /(^|;)\s*display\s*:/;

function sy(e, t, n) {
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
      const l = o[oy];
      l && (n += ";" + l), o.cssText = n, a = iy.test(n)
    }
  } else t && e.removeAttribute("style");
  Gs in e && (e[Gs] = a ? o.display : "", e[Bf] && (o.display = "none"))
}
const Ic = /\s*!important$/;

function Fs(e, t, n) {
  if (xe(n)) n.forEach(o => Fs(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const o = ay(e, t);
    Ic.test(n) ? e.setProperty(Vn(o), n.replace(Ic, ""), "important") : e[o] = n
  }
}
const Pc = ["Webkit", "Moz", "ms"],
  Qa = {};

function ay(e, t) {
  const n = Qa[t];
  if (n) return n;
  let o = Qt(t);
  if (o !== "filter" && o in e) return Qa[t] = o;
  o = ra(o);
  for (let s = 0; s < Pc.length; s++) {
    const a = Pc[s] + o;
    if (a in e) return Qa[t] = a
  }
  return t
}
const Oc = "http://www.w3.org/1999/xlink";

function Rc(e, t, n, o, s, a = sg(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Oc, t.slice(6, t.length)) : e.setAttributeNS(Oc, t, n) : n == null || a && !Cd(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : fo(n) ? String(n) : n)
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
    l === "boolean" ? n = Cd(n) : n == null && l === "string" ? (n = "", a = !0) : l === "number" && (n = 0, a = !0)
  }
  try {
    e[t] = n
  } catch {}
  a && e.removeAttribute(t)
}

function ly(e, t, n, o) {
  e.addEventListener(t, n, o)
}

function ry(e, t, n, o) {
  e.removeEventListener(t, n, o)
}
const Bc = Symbol("_vei");

function cy(e, t, n, o, s = null) {
  const a = e[Bc] || (e[Bc] = {}),
    l = a[t];
  if (o && l) l.value = o;
  else {
    const [r, c] = uy(t);
    if (o) {
      const u = a[t] = hy(o, s);
      ly(e, r, u, c)
    } else l && (ry(e, r, l, c), a[t] = void 0)
  }
}
const $c = /(?:Once|Passive|Capture)$/;

function uy(e) {
  let t;
  if ($c.test(e)) {
    t = {};
    let o;
    for (; o = e.match($c);) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0
  }
  return [e[2] === ":" ? e.slice(3) : Vn(e.slice(2)), t]
}
let Ka = 0;
const dy = Promise.resolve(),
  fy = () => Ka || (dy.then(() => Ka = 0), Ka = Date.now());

function hy(e, t) {
  const n = o => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= n.attached) return;
    on(my(o, n.value), t, 5, [o])
  };
  return n.value = e, n.attached = fy(), n
}

function my(e, t) {
  if (xe(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0
    }, t.map(o => s => !s._stopped && o && o(s))
  } else return t
}
const Mc = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
  gy = (e, t, n, o, s, a) => {
    const l = s === "svg";
    t === "class" ? ny(e, o, l) : t === "style" ? sy(e, n, o) : sa(t) ? Xl(t) || cy(e, t, n, o, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : vy(e, t, o, l)) ? (Dc(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Rc(e, t, o, l, a, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !tt(o)) ? Dc(e, Qt(t), o) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Rc(e, t, o, l))
  };

function vy(e, t, n, o) {
  if (o) return !!(t === "innerHTML" || t === "textContent" || t in e && Mc(t) && Ae(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
  }
  return Mc(t) && tt(n) ? !1 : t in e
}
const yy = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  },
  py = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      o = t.join(".");
    return n[o] || (n[o] = s => {
      if (!("key" in s)) return;
      const a = Vn(s.key);
      if (t.some(l => l === a || yy[l] === a)) return e(s)
    })
  },
  by = ft({
    patchProp: gy
  }, Yv);
let Lc;

function wy() {
  return Lc || (Lc = pv(by))
}
const $f = (...e) => {
  const t = wy().createApp(...e),
    {
      mount: n
    } = t;
  return t.mount = o => {
    const s = _y(o);
    if (!s) return;
    const a = t._component;
    !Ae(a) && !a.render && !a.template && (a.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const l = n(s, !1, Cy(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l
  }, t
};

function Cy(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function _y(e) {
  return tt(e) ? document.querySelector(e) : e
}
var go = typeof window < "u";

function Ct(e) {
  return go ? requestAnimationFrame(e) : -1
}

function pa(e) {
  go && cancelAnimationFrame(e)
}

function so(e) {
  Ct(() => Ct(e))
}
var ky = e => e === window,
  Nc = (e, t) => ({
    top: 0,
    left: 0,
    right: e,
    bottom: t,
    width: e,
    height: t
  }),
  Ue = e => {
    const t = en(e);
    if (ky(t)) {
      const n = t.innerWidth,
        o = t.innerHeight;
      return Nc(n, o)
    }
    return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : Nc(0, 0)
  };

function Sy(e = !1) {
  const t = F(e);
  return [t, (o = !t.value) => {
    t.value = o
  }]
}

function yt(e) {
  const t = Rt(e, null);
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

function Ty(e) {
  const t = [],
    n = o => {
      Array.isArray(o) && o.forEach(s => {
        var a;
        ui(s) && (t.push(s), (a = s.component) != null && a.subTree && (t.push(s.component.subTree), n(s.component.subTree.children)), s.children && n(s.children))
      })
    };
  return n(e), t
}
var Fc = (e, t) => {
  const n = e.indexOf(t);
  return n === -1 ? e.findIndex(o => t.key !== void 0 && t.key !== null && o.type === t.type && o.key === t.key) : n
};

function xy(e, t, n) {
  const o = Ty(e.subTree.children);
  n.sort((a, l) => Fc(o, a.vnode) - Fc(o, l.vnode));
  const s = n.map(a => a.proxy);
  t.sort((a, l) => {
    const r = s.indexOf(a),
      c = s.indexOf(l);
    return r - c
  })
}

function Tt(e) {
  const t = Je([]),
    n = Je([]),
    o = ln();
  return {
    children: t,
    linkChildren: a => {
      Bn(e, Object.assign({
        link: c => {
          c.proxy && (n.push(c), t.push(c.proxy), xy(o, t, n))
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
var Pl = 1e3,
  Ol = 60 * Pl,
  Rl = 60 * Ol,
  Vc = 24 * Rl;

function Ey(e) {
  const t = Math.floor(e / Vc),
    n = Math.floor(e % Vc / Rl),
    o = Math.floor(e % Rl / Ol),
    s = Math.floor(e % Ol / Pl),
    a = Math.floor(e % Pl);
  return {
    total: e,
    days: t,
    hours: n,
    minutes: o,
    seconds: s,
    milliseconds: a
  }
}

function Ay(e, t) {
  return Math.floor(e / 1e3) === Math.floor(t / 1e3)
}

function Iy(e) {
  let t, n, o, s;
  const a = F(e.time),
    l = N(() => Ey(a.value)),
    r = () => {
      o = !1, pa(t)
    },
    c = () => Math.max(n - Date.now(), 0),
    u = p => {
      var b, w;
      a.value = p, (b = e.onChange) == null || b.call(e, l.value), p === 0 && (r(), (w = e.onFinish) == null || w.call(e))
    },
    d = () => {
      t = Ct(() => {
        o && (u(c()), a.value > 0 && d())
      })
    },
    f = () => {
      t = Ct(() => {
        if (o) {
          const p = c();
          (!Ay(p, a.value) || p === 0) && u(p), a.value > 0 && f()
        }
      })
    },
    m = () => {
      go && (e.millisecond ? d() : f())
    },
    g = () => {
      o || (n = Date.now() + a.value, o = !0, m())
    },
    y = (p = e.time) => {
      r(), a.value = p
    };
  return kn(r), Cn(() => {
    s && (o = !0, s = !1, m())
  }), _n(() => {
    o && (r(), s = !0)
  }), {
    start: g,
    pause: r,
    reset: y,
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

function Py() {
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
var Oy = /scroll|auto|overlay/i,
  Mf = go ? window : void 0;

function Ry(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1
}

function pr(e, t = Mf) {
  let n = e;
  for (; n && n !== t && Ry(n);) {
    const {
      overflowY: o
    } = window.getComputedStyle(n);
    if (Oy.test(o)) return n;
    n = n.parentNode
  }
  return t
}

function pi(e, t = Mf) {
  const n = F();
  return at(() => {
    e.value && (n.value = pr(e.value, t))
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
var Lf = Symbol("van-field");

function vo(e) {
  const t = Rt(Lf, null);
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

function zc(e, t) {
  if (e === window) return 0;
  const n = t ? Ln(t) : Oo();
  return Ue(e).top + n
}
const By = Wm();

function Nf() {
  By && Ji(Oo())
}
const br = e => e.stopPropagation();

function Ge(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && br(e)
}

function Bo(e) {
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
} = Py();

function $y(e) {
  const t = window.getComputedStyle(e);
  return t.transform !== "none" || t.perspective !== "none" || ["transform", "perspective", "filter"].some(n => (t.willChange || "").includes(n))
}

function My(e) {
  let t = e.parentElement;
  for (; t;) {
    if (t && t.tagName !== "HTML" && t.tagName !== "BODY" && $y(t)) return t;
    t = t.parentElement
  }
  return null
}

function Ie(e) {
  if (Fe(e)) return md(e) ? `${e}px` : String(e)
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

function Ly() {
  if (!qa) {
    const e = document.documentElement,
      t = e.style.fontSize || window.getComputedStyle(e).fontSize;
    qa = parseFloat(t)
  }
  return qa
}

function Ny(e) {
  return e = e.replace(/rem/g, ""), +e * Ly()
}

function Fy(e) {
  return e = e.replace(/vw/g, ""), +e * tn.value / 100
}

function Vy(e) {
  return e = e.replace(/vh/g, ""), +e * jt.value / 100
}

function wr(e) {
  if (typeof e == "number") return e;
  if (Vt) {
    if (e.includes("rem")) return Ny(e);
    if (e.includes("vw")) return Fy(e);
    if (e.includes("vh")) return Vy(e)
  }
  return parseFloat(e)
}
const zy = /-(\w)/g,
  Ff = e => e.replace(zy, (t, n) => n.toUpperCase()),
  Hy = e => e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");

function Xt(e, t = 2) {
  let n = e + "";
  for (; n.length < t;) n = "0" + n;
  return n
}
const ht = (e, t, n) => Math.min(Math.max(e, t), n);

function Hc(e, t, n) {
  const o = e.indexOf(t);
  return o === -1 ? e : t === "-" && o !== 0 ? e.slice(0, o) : e.slice(0, o + 1) + e.slice(o).replace(n, "")
}

function Dl(e, t = !0, n = !0) {
  t ? e = Hc(e, ".", /\./g) : e = e.split(".")[0], n ? e = Hc(e, "-", /-/g) : e = e.replace(/-/, "");
  const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(o, "")
}

function Vf(e, t) {
  return Math.round((e + t) * 1e10) / 1e10
}
const {
  hasOwnProperty: Uy
} = Object.prototype;

function Wy(e, t, n) {
  const o = t[n];
  Fe(o) && (!Uy.call(e, n) || !wn(o) ? e[n] = o : e[n] = zf(Object(e[n]), o))
}

function zf(e, t) {
  return Object.keys(t).forEach(n => {
    Wy(e, t, n)
  }), e
}
var jy = {
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
const Uc = F("zh-CN"),
  Wc = Je({
    "zh-CN": jy
  }),
  Hf = {
    messages() {
      return Wc[Uc.value]
    },
    use(e, t) {
      Uc.value = e, this.add({
        [e]: t
      })
    },
    add(e = {}) {
      zf(Wc, e)
    }
  };
var Qy = Hf;

function Ky(e) {
  const t = Ff(e) + ".";
  return (n, ...o) => {
    const s = Qy.messages(),
      a = Xr(s, t + n) || Xr(s, n);
    return ci(a) ? a(...o) : a
  }
}

function Bl(e, t) {
  return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce((n, o) => n + Bl(e, o), "") : Object.keys(t).reduce((n, o) => n + (t[o] ? Bl(e, o) : ""), "") : ""
}

function Yy(e) {
  return (t, n) => (t && typeof t != "string" && (n = t, t = ""), t = t ? `${e}__${t}` : e, `${t}${Bl(t,n)}`)
}

function Y(e) {
  const t = `van-${e}`;
  return [t, Yy(t), Ky(t)]
}
const Wn = "van-hairline",
  Uf = `${Wn}--top`,
  Wf = `${Wn}--left`,
  qy = `${Wn}--right`,
  Cr = `${Wn}--bottom`,
  Vi = `${Wn}--surround`,
  wa = `${Wn}--top-bottom`,
  Gy = `${Wn}-unset--top-bottom`,
  kt = "van-haptics-feedback",
  jf = Symbol("van-form"),
  Qf = 500,
  jc = 5;

function yo(e, {
  args: t = [],
  done: n,
  canceled: o,
  error: s
}) {
  if (e) {
    const a = e.apply(null, t);
    Gl(a) ? a.then(l => {
      l ? n() : o && o()
    }).catch(s || pl) : a ? n() : o && o()
  } else n()
}

function ee(e) {
  return e.install = t => {
    const {
      name: n
    } = e;
    n && (t.component(n, e), t.component(Ff(`-${n}`), e))
  }, e
}

function Xs(e, t) {
  return e.reduce((n, o) => Math.abs(n - t) < Math.abs(o - t) ? n : o)
}
const Kf = Symbol();

function Ca(e) {
  const t = Rt(Kf, null);
  t && re(t, n => {
    n && e()
  })
}
const Yf = (e, t) => {
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
  const n = Yf(e, !0);
  return o => h("div", {
    class: t("placeholder"),
    style: {
      height: n.value ? `${n.value}px` : void 0
    }
  }, [o()])
}
const [qf, Qc] = Y("action-bar"), _r = Symbol(qf), Zy = {
  placeholder: Boolean,
  safeAreaInsetBottom: j
};
var Xy = K({
  name: qf,
  props: Zy,
  setup(e, {
    slots: t
  }) {
    const n = F(),
      o = _a(n, Qc),
      {
        linkChildren: s
      } = Tt(_r);
    s();
    const a = () => {
      var l;
      return h("div", {
        ref: n,
        class: [Qc(), {
          "van-safe-area-bottom": e.safeAreaInsetBottom
        }]
      }, [(l = t.default) == null ? void 0 : l.call(t)])
    };
    return () => e.placeholder ? o(a) : a()
  }
});
const Gf = ee(Xy);

function $e(e) {
  const t = ln();
  t && ke(t.proxy, e)
}
const po = {
  to: [String, Object],
  url: String,
  replace: Boolean
};

function Zf({
  to: e,
  url: t,
  replace: n,
  $router: o
}) {
  e && o ? o[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t)
}

function Mo() {
  const e = ln().proxy;
  return () => Zf(e)
}
const [Jy, Kc] = Y("badge"), ep = {
  dot: Boolean,
  max: Z,
  tag: te("div"),
  color: String,
  offset: Array,
  content: Z,
  showZero: j,
  position: te("top-right")
};
var tp = K({
  name: Jy,
  props: ep,
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
        if (!r && n()) return t.content ? t.content() : Fe(c) && md(u) && +u > +c ? `${c}+` : u
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
          class: Kc([e.position, {
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
          class: Kc("wrapper")
        }, {
          default: () => [t.default(), l()]
        })
      }
      return l()
    }
  }
});
const Lo = ee(tp);
let Xf = 2e3;
const np = () => ++Xf,
  op = e => {
    Xf = e
  },
  [Jf, ip] = Y("config-provider"),
  eh = Symbol(Jf),
  sp = {
    tag: te("div"),
    theme: te("light"),
    zIndex: Number,
    themeVars: Object,
    themeVarsDark: Object,
    themeVarsLight: Object,
    themeVarsScope: te("local"),
    iconPrefix: String
  };

function ap(e) {
  return e.replace(/([a-zA-Z])(\d)/g, "$1-$2")
}

function lp(e) {
  const t = {};
  return Object.keys(e).forEach(n => {
    const o = ap(Hy(n));
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
var rp = K({
  name: Jf,
  props: sp,
  setup(e, {
    slots: t
  }) {
    const n = N(() => lp(ke({}, e.themeVars, e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight)));
    if (Vt) {
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
    return Bn(eh, e), vi(() => {
      e.zIndex !== void 0 && op(e.zIndex)
    }), () => h(e.tag, {
      class: ip(),
      style: e.themeVarsScope === "local" ? n.value : void 0
    }, {
      default: () => {
        var o;
        return [(o = t.default) == null ? void 0 : o.call(t)]
      }
    })
  }
});
const [cp, Yc] = Y("icon"), up = e => e == null ? void 0 : e.includes("/"), dp = {
  dot: Boolean,
  tag: te("i"),
  name: String,
  size: Z,
  badge: Z,
  color: String,
  badgeProps: Object,
  classPrefix: String
};
var fp = K({
  name: cp,
  props: dp,
  setup(e, {
    slots: t
  }) {
    const n = Rt(eh, null),
      o = N(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || Yc());
    return () => {
      const {
        tag: s,
        dot: a,
        name: l,
        size: r,
        badge: c,
        color: u
      } = e, d = up(l);
      return h(Lo, Be({
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
            class: Yc("image"),
            src: l
          }, null)]
        }
      })
    }
  }
});
const Pe = ee(fp);
var hp = Pe;
const [mp, zi] = Y("loading"), gp = Array(12).fill(null).map((e, t) => h("i", {
  class: zi("line", String(t + 1))
}, null)), vp = h("svg", {
  class: zi("circular"),
  viewBox: "25 25 50 50"
}, [h("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
}, null)]), yp = {
  size: Z,
  type: te("circular"),
  color: String,
  vertical: Boolean,
  textSize: Z,
  textColor: String
};
var pp = K({
  name: mp,
  props: yp,
  setup(e, {
    slots: t
  }) {
    const n = N(() => ke({
        color: e.color
      }, Hn(e.size))),
      o = () => {
        const a = e.type === "spinner" ? gp : vp;
        return h("span", {
          class: zi("spinner", e.type),
          style: n.value
        }, [t.icon ? t.icon() : a])
      },
      s = () => {
        var a;
        if (t.default) return h("span", {
          class: zi("text"),
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
        class: zi([a, {
          vertical: l
        }]),
        "aria-live": "polite",
        "aria-busy": !0
      }, [o(), s()])
    }
  }
});
const rn = ee(pp),
  [bp, Fo] = Y("button"),
  wp = ke({}, po, {
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
var Cp = K({
  name: bp,
  props: wp,
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
        plain: y,
        square: p,
        loading: b,
        disabled: w,
        hairline: v,
        nativeType: C,
        iconPosition: _
      } = e, k = [Fo([d, f, {
        plain: y,
        block: m,
        round: g,
        square: p,
        loading: b,
        disabled: w,
        hairline: v
      }]), {
        [Vi]: v
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
const St = ee(Cp),
  [_p, kp] = Y("action-bar-button"),
  Sp = ke({}, po, {
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
  });
var Tp = K({
  name: _p,
  props: Sp,
  setup(e, {
    slots: t
  }) {
    const n = Mo(),
      {
        parent: o,
        index: s
      } = yt(_r),
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
      return h(St, {
        class: kp([r, {
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
const $l = ee(Tp),
  [xp, Ga] = Y("action-bar-icon"),
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
var Ap = K({
  name: xp,
  props: Ep,
  setup(e, {
    slots: t
  }) {
    const n = Mo();
    yt(_r);
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
      return t.icon ? h(Lo, Be({
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
const Ip = ee(Ap),
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
  kr = Object.keys(bi);

function Pp(e, t) {
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
      const y = g.touches[0];
      n.value = (y.clientX < 0 ? 0 : y.clientX) - e.value, o.value = y.clientY - t.value, s.value = Math.abs(n.value), a.value = Math.abs(o.value);
      const p = 10;
      (!l.value || s.value < p && a.value < p) && (l.value = Pp(s.value, a.value)), r.value && (s.value > jc || a.value > jc) && (r.value = !1)
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
const qc = "van-overflow-hidden";

function th(e, t) {
  const n = Kt(),
    o = "01",
    s = "10",
    a = d => {
      n.move(d);
      const f = n.deltaY.value > 0 ? s : o,
        m = pr(d.target, e.value),
        {
          scrollHeight: g,
          offsetHeight: y,
          scrollTop: p
        } = m;
      let b = "11";
      p === 0 ? b = y >= g ? "00" : "01" : p + y >= g && (b = "10"), b !== "11" && n.isVertical() && !(parseInt(b, 2) & parseInt(f, 2)) && Ge(d, !0)
    },
    l = () => {
      document.addEventListener("touchstart", n.start), document.addEventListener("touchmove", a, {
        passive: !1
      }), Ti || document.body.classList.add(qc), Ti++
    },
    r = () => {
      Ti && (document.removeEventListener("touchstart", n.start), document.removeEventListener("touchmove", a), Ti--, Ti || document.body.classList.remove(qc))
    },
    c = () => t() && l(),
    u = () => t() && r();
  yi(c), _n(u), kn(u), re(t, d => {
    d ? l() : r()
  })
}

function Sr(e) {
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
  [Op, Rp] = Y("overlay"),
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
var Bp = K({
  name: Op,
  props: Dp,
  setup(e, {
    slots: t
  }) {
    const n = F(),
      o = Sr(() => e.show || !e.lazyRender),
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
const nh = ee(Bp),
  $p = ke({}, bi, {
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
  [Mp, Gc] = Y("popup");
var Lp = K({
  name: Mp,
  inheritAttrs: !1,
  props: $p,
  emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
  setup(e, {
    emit: t,
    attrs: n,
    slots: o
  }) {
    let s, a;
    const l = F(),
      r = F(),
      c = Sr(() => e.show || !e.lazyRender),
      u = N(() => {
        const I = {
          zIndex: l.value
        };
        if (Fe(e.duration)) {
          const B = e.position === "center" ? "animationDuration" : "transitionDuration";
          I[B] = `${e.duration}s`
        }
        return I
      }),
      d = () => {
        s || (s = !0, l.value = e.zIndex !== void 0 ? +e.zIndex : np(), t("open"))
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
        if (e.overlay) return h(nh, Be({
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
      y = I => {
        t("clickCloseIcon", I), f()
      },
      p = () => {
        if (e.closeable) return h(Pe, {
          role: "button",
          tabindex: 0,
          name: e.closeIcon,
          class: [Gc("close-icon", e.closeIconPosition), kt],
          classPrefix: e.iconPrefix,
          onClick: y
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
          round: B,
          position: S,
          safeAreaInsetTop: R,
          safeAreaInsetBottom: D
        } = e;
        return rt(h("div", Be({
          ref: r,
          style: u.value,
          role: "dialog",
          tabindex: 0,
          class: [Gc({
            round: B,
            [S]: S
          }), {
            "van-safe-area-top": R,
            "van-safe-area-bottom": D
          }],
          onKeydown: C
        }, n, Js()), [(I = o.default) == null ? void 0 : I.call(o), p()]), [
          [dt, e.show]
        ])
      }),
      k = () => {
        const {
          position: I,
          transition: B,
          transitionAppear: S
        } = e, R = I === "center" ? "van-fade" : `van-popup-slide-${I}`;
        return h(ya, {
          name: B || R,
          appear: S,
          onAfterEnter: w,
          onAfterLeave: v
        }, {
          default: _
        })
      };
    return re(() => e.show, I => {
      I && !s && (d(), n.tabindex === 0 && Oe(() => {
        var B;
        (B = r.value) == null || B.focus()
      })), !I && s && (s = !1, t("close"))
    }), $e({
      popupRef: r
    }), th(r, () => e.show && e.lockScroll), st("popstate", () => {
      e.closeOnPopstate && (f(), a = !1)
    }), at(() => {
      e.show && d()
    }), Cn(() => {
      a && (t("update:show", !0), a = !1)
    }), _n(() => {
      e.show && e.teleport && (f(), a = !0)
    }), Bn(Kf, () => e.show), () => e.teleport ? h($o, {
      to: e.teleport
    }, {
      default: () => [g(), k()]
    }) : h(Re, null, [g(), k()])
  }
});
const cn = ee(Lp),
  [Np, Ht] = Y("action-sheet"),
  Fp = ke({}, bi, {
    title: String,
    round: j,
    actions: Ze(),
    closeIcon: te("cross"),
    closeable: j,
    cancelText: String,
    description: String,
    closeOnPopstate: j,
    closeOnClickAction: Boolean,
    safeAreaInsetBottom: j
  }),
  Vp = [...kr, "round", "closeOnPopstate", "safeAreaInsetBottom"];
var zp = K({
  name: Np,
  props: Fp,
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
          class: [Ht("close"), kt],
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
          loading: y,
          callback: p,
          disabled: b,
          className: w
        } = f, v = () => {
          b || y || (p && p(f), e.closeOnClickAction && o(!1), Oe(() => n("select", f, m)))
        };
        return h("button", {
          type: "button",
          style: {
            color: g
          },
          class: [Ht("item", {
            loading: y,
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
    return () => h(cn, Be({
      class: Ht(),
      position: "bottom",
      "onUpdate:show": o
    }, ze(e, Vp)), {
      default: () => {
        var f;
        return [a(), d(), h("div", {
          class: Ht("content")
        }, [e.actions.map(u), (f = t.default) == null ? void 0 : f.call(t)]), l()]
      }
    })
  }
});
const Hp = ee(zp),
  [Up, Rn, Zc] = Y("picker"),
  oh = e => e.find(t => !t.disabled) || e[0];

function Wp(e, t) {
  const n = e[0];
  if (n) {
    if (Array.isArray(n)) return "multiple";
    if (t.children in n) return "cascade"
  }
  return "default"
}

function Vs(e, t) {
  t = ht(t, 0, e.length);
  for (let n = t; n < e.length; n++)
    if (!e[n].disabled) return n;
  for (let n = t - 1; n >= 0; n--)
    if (!e[n].disabled) return n;
  return 0
}
const Xc = (e, t, n) => t !== void 0 && !!e.find(o => o[n.value] === t);

function Ml(e, t, n) {
  const o = e.findIndex(a => a[n.value] === t),
    s = Vs(e, o);
  return e[s]
}

function jp(e, t, n) {
  const o = [];
  let s = {
      [t.children]: e
    },
    a = 0;
  for (; s && s[t.children];) {
    const l = s[t.children],
      r = n.value[a];
    if (s = Fe(r) ? Ml(l, r, t) : void 0, !s && l.length) {
      const c = oh(l)[t.value];
      s = Ml(l, c, t)
    }
    a++, o.push(l)
  }
  return o
}

function Qp(e) {
  const {
    transform: t
  } = window.getComputedStyle(e), n = t.slice(7, t.length - 1).split(", ")[5];
  return Number(n)
}

function Kp(e) {
  return ke({
    text: "text",
    value: "value",
    children: "children"
  }, e)
}
const Jc = 200,
  eu = 300,
  Yp = 15,
  [ih, Za] = Y("picker-column"),
  sh = Symbol(ih);
var qp = K({
  name: ih,
  props: {
    value: Z,
    fields: gt(Object),
    options: Ze(),
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
      y = () => e.optionHeight * (+e.visibleOptionNum - 1) / 2,
      p = D => {
        let T = Vs(e.options, D);
        const P = -T * e.optionHeight,
          M = () => {
            T > g() - 1 && (T = Vs(e.options, D));
            const J = e.options[T][e.fields.value];
            J !== e.value && t("change", J)
          };
        o && P !== d.value ? r = M : M(), d.value = P
      },
      b = () => e.readonly || !e.options.length,
      w = D => {
        o || b() || (r = null, f.value = Jc, p(D), t("clickOption", e.options[D]))
      },
      v = D => ht(Math.round(-D / e.optionHeight), 0, g() - 1),
      C = N(() => v(d.value)),
      _ = (D, T) => {
        const P = Math.abs(D / T);
        D = d.value + P / .003 * (D < 0 ? -1 : 1);
        const M = v(D);
        f.value = +e.swipeDuration, p(M)
      },
      k = () => {
        o = !1, f.value = 0, r && (r(), r = null)
      },
      I = D => {
        if (!b()) {
          if (m.start(D), o) {
            const T = Qp(u.value);
            d.value = Math.min(0, T - y())
          }
          f.value = 0, s = d.value, a = Date.now(), l = s, r = null
        }
      },
      B = D => {
        if (b()) return;
        m.move(D), m.isVertical() && (o = !0, Ge(D, !0));
        const T = ht(s + m.deltaY.value, -(g() * e.optionHeight), e.optionHeight),
          P = v(T);
        P !== C.value && t("scrollInto", e.options[P]), d.value = T;
        const M = Date.now();
        M - a > eu && (a = M, l = T)
      },
      S = () => {
        if (b()) return;
        const D = d.value - l,
          T = Date.now() - a;
        if (T < eu && Math.abs(D) > Yp) {
          _(D, T);
          return
        }
        const M = v(d.value);
        f.value = Jc, p(M), setTimeout(() => {
          o = !1
        }, 0)
      },
      R = () => {
        const D = {
          height: `${e.optionHeight}px`
        };
        return e.options.map((T, P) => {
          const M = T[e.fields.text],
            {
              disabled: J
            } = T,
            ce = T[e.fields.value],
            W = {
              role: "button",
              style: D,
              tabindex: J ? -1 : 0,
              class: [Za("item", {
                disabled: J,
                selected: ce === e.value
              }), T.className],
              onClick: () => w(P)
            },
            ne = {
              class: "van-ellipsis",
              [e.allowHtml ? "innerHTML" : "textContent"]: M
            };
          return h("li", W, [n.option ? n.option(T, P) : h("div", ne, null)])
        })
      };
    return yt(sh), $e({
      stopMomentum: k
    }), vi(() => {
      const D = o ? Math.floor(-d.value / e.optionHeight) : e.options.findIndex(M => M[e.fields.value] === e.value),
        T = Vs(e.options, D),
        P = -T * e.optionHeight;
      o && T < D && k(), d.value = P
    }), st("touchmove", B, {
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
        transform: `translate3d(0, ${d.value+y()}px, 0)`,
        transitionDuration: `${f.value}ms`,
        transitionProperty: f.value ? "all" : "none"
      },
      class: Za("wrapper"),
      onTransitionend: k
    }, [R()])])
  }
});
const [Gp] = Y("picker-toolbar"), ka = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String
}, ah = ["cancel", "confirm", "title", "toolbar"], Zp = Object.keys(ka);
var lh = K({
  name: Gp,
  props: ka,
  emits: ["confirm", "cancel"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = () => {
        if (n.title) return n.title();
        if (e.title) return h("div", {
          class: [Rn("title"), "van-ellipsis"]
        }, [e.title])
      },
      s = () => t("cancel"),
      a = () => t("confirm"),
      l = () => {
        var c;
        const u = (c = e.cancelButtonText) != null ? c : Zc("cancel");
        if (!(!n.cancel && !u)) return h("button", {
          type: "button",
          class: [Rn("cancel"), kt],
          onClick: s
        }, [n.cancel ? n.cancel() : u])
      },
      r = () => {
        var c;
        const u = (c = e.confirmButtonText) != null ? c : Zc("confirm");
        if (!(!n.confirm && !u)) return h("button", {
          type: "button",
          class: [Rn("confirm"), kt],
          onClick: a
        }, [n.confirm ? n.confirm() : u])
      };
    return () => h("div", {
      class: Rn("toolbar")
    }, [n.toolbar ? n.toolbar() : [l(), o(), r()]])
  }
});
const Tr = (e, t) => {
  const n = F(e());
  return re(e, o => {
    o !== n.value && (n.value = o)
  }), re(n, o => {
    o !== e() && t(o)
  }), n
};

function Xp(e, t, n) {
  let o, s = 0;
  const a = e.scrollLeft,
    l = n === 0 ? 1 : Math.round(n * 1e3 / 16);
  let r = a;

  function c() {
    pa(o)
  }

  function u() {
    r += (t - a) / l, e.scrollLeft = r, ++s < l && (o = Ct(u))
  }
  return u(), c
}

function Jp(e, t, n, o) {
  let s, a = Ln(e);
  const l = a < t,
    r = n === 0 ? 1 : Math.round(n * 1e3 / 16),
    c = (t - a) / r;

  function u() {
    pa(s)
  }

  function d() {
    a += c, (l && a > t || !l && a < t) && (a = t), Zs(e, a), l && a < t || !l && a > t ? s = Ct(d) : o && (s = Ct(o))
  }
  return d(), u
}
let e0 = 0;

function wi() {
  const e = ln(),
    {
      name: t = "unknown"
    } = (e == null ? void 0 : e.type) || {};
  return `${t}-${++e0}`
}

function ls() {
  const e = F([]),
    t = [];
  return lf(() => {
    e.value = []
  }), [e, o => (t[o] || (t[o] = s => {
    e.value[o] = s
  }), t[o])]
}

function rh(e, t) {
  if (!Vt || !window.IntersectionObserver) return;
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
const [t0, n0] = Y("sticky"), o0 = {
  zIndex: Z,
  position: te("top"),
  container: Object,
  offsetTop: he(0),
  offsetBottom: he(0)
};
var i0 = K({
  name: t0,
  props: o0,
  emits: ["scroll", "change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = pi(o),
      a = Je({
        fixed: !1,
        width: 0,
        height: 0,
        transform: 0
      }),
      l = F(!1),
      r = N(() => wr(e.position === "top" ? e.offsetTop : e.offsetBottom)),
      c = N(() => {
        if (l.value) return;
        const {
          fixed: m,
          height: g,
          width: y
        } = a;
        if (m) return {
          width: `${y}px`,
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
        if (!o.value || Bo(o)) return;
        const {
          container: m,
          position: g
        } = e, y = Ue(o), p = Ln(window);
        if (a.width = y.width, a.height = y.height, g === "top")
          if (m) {
            const b = Ue(m),
              w = b.bottom - r.value - a.height;
            a.fixed = r.value > y.top && b.bottom > 0, a.transform = w < 0 ? w : 0
          } else a.fixed = r.value > y.top;
        else {
          const {
            clientHeight: b
          } = document.documentElement;
          if (m) {
            const w = Ue(m),
              v = b - w.top - r.value - a.height;
            a.fixed = b - r.value < y.bottom && b > w.top, a.transform = v < 0 ? -v : 0
          } else a.fixed = b - r.value < y.bottom
        }
        d(p)
      };
    return re(() => a.fixed, m => t("change", m)), st("scroll", f, {
      target: s,
      passive: !0
    }), rh(o, f), re([tn, jt], () => {
      !o.value || Bo(o) || !a.fixed || (l.value = !0, Oe(() => {
        const m = Ue(o);
        a.width = m.width, a.height = m.height, l.value = !1
      }))
    }), () => {
      var m;
      return h("div", {
        ref: o,
        style: c.value
      }, [h("div", {
        class: n0({
          fixed: a.fixed && !l.value
        }),
        style: u.value
      }, [(m = n.default) == null ? void 0 : m.call(n)])])
    }
  }
});
const ch = ee(i0),
  [uh, bs] = Y("swipe"),
  s0 = {
    loop: j,
    width: Z,
    height: Z,
    vertical: Boolean,
    autoplay: he(0),
    duration: he(500),
    touchable: j,
    lazyRender: Boolean,
    initialSwipe: he(0),
    indicatorColor: String,
    showIndicators: j,
    stopPropagation: j
  },
  dh = Symbol(uh);
var a0 = K({
  name: uh,
  props: s0,
  emits: ["change", "dragStart", "dragEnd"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = F(),
      a = Je({
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
      } = Tt(dh),
      d = N(() => c.length),
      f = N(() => a[e.vertical ? "height" : "width"]),
      m = N(() => e.vertical ? r.deltaY.value : r.deltaX.value),
      g = N(() => a.rect ? (e.vertical ? a.rect.height : a.rect.width) - f.value * d.value : 0),
      y = N(() => f.value ? Math.ceil(Math.abs(g.value) / f.value) : d.value),
      p = N(() => d.value * f.value),
      b = N(() => (a.active + d.value) % d.value),
      w = N(() => {
        const V = e.vertical ? "vertical" : "horizontal";
        return r.direction.value === V
      }),
      v = N(() => {
        const V = {
          transitionDuration: `${a.swiping?0:e.duration}ms`,
          transform: `translate${e.vertical?"Y":"X"}(${+a.offset.toFixed(2)}px)`
        };
        if (f.value) {
          const X = e.vertical ? "height" : "width",
            ve = e.vertical ? "width" : "height";
          V[X] = `${p.value}px`, V[ve] = e[ve] ? `${e[ve]}px` : ""
        }
        return V
      }),
      C = V => {
        const {
          active: X
        } = a;
        return V ? e.loop ? ht(X + V, -1, d.value) : ht(X + V, 0, y.value) : X
      },
      _ = (V, X = 0) => {
        let ve = V * f.value;
        e.loop || (ve = Math.min(ve, -g.value));
        let we = X - ve;
        return e.loop || (we = ht(we, g.value, 0)), we
      },
      k = ({
        pace: V = 0,
        offset: X = 0,
        emitChange: ve
      }) => {
        if (d.value <= 1) return;
        const {
          active: we
        } = a, ae = C(V), ye = _(ae, X);
        if (e.loop) {
          if (c[0] && ye !== g.value) {
            const A = ye < g.value;
            c[0].setOffset(A ? p.value : 0)
          }
          if (c[d.value - 1] && ye !== 0) {
            const A = ye > 0;
            c[d.value - 1].setOffset(A ? -p.value : 0)
          }
        }
        a.active = ae, a.offset = ye, ve && ae !== we && t("change", b.value)
      },
      I = () => {
        a.swiping = !0, a.active <= -1 ? k({
          pace: d.value
        }) : a.active >= d.value && k({
          pace: -d.value
        })
      },
      B = () => {
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
    let R;
    const D = () => clearTimeout(R),
      T = () => {
        D(), +e.autoplay > 0 && d.value > 1 && (R = setTimeout(() => {
          S(), T()
        }, +e.autoplay))
      },
      P = (V = +e.initialSwipe) => {
        if (!o.value) return;
        const X = () => {
          var ve, we;
          if (!Bo(o)) {
            const ae = {
              width: o.value.offsetWidth,
              height: o.value.offsetHeight
            };
            a.rect = ae, a.width = +((ve = e.width) != null ? ve : ae.width), a.height = +((we = e.height) != null ? we : ae.height)
          }
          d.value && (V = Math.min(d.value - 1, V), V === -1 && (V = d.value - 1)), a.active = V, a.swiping = !0, a.offset = _(V), c.forEach(ae => {
            ae.setOffset(0)
          }), T()
        };
        Bo(o) ? Oe().then(X) : X()
      },
      M = () => P(a.active);
    let J;
    const ce = V => {
        !e.touchable || V.touches.length > 1 || (r.start(V), l = !1, J = Date.now(), D(), I())
      },
      W = V => {
        e.touchable && a.swiping && (r.move(V), w.value && (!e.loop && (a.active === 0 && m.value > 0 || a.active === d.value - 1 && m.value < 0) || (Ge(V, e.stopPropagation), k({
          offset: m.value
        }), l || (t("dragStart", {
          index: b.value
        }), l = !0))))
      },
      ne = () => {
        if (!e.touchable || !a.swiping) return;
        const V = Date.now() - J,
          X = m.value / V;
        if ((Math.abs(X) > .25 || Math.abs(m.value) > f.value / 2) && w.value) {
          const we = e.vertical ? r.offsetY.value : r.offsetX.value;
          let ae = 0;
          e.loop ? ae = we > 0 ? m.value > 0 ? -1 : 1 : 0 : ae = -Math[m.value > 0 ? "ceil" : "floor"](m.value / f.value), k({
            pace: ae,
            emitChange: !0
          })
        } else m.value && k({
          pace: 0
        });
        l = !1, a.swiping = !1, t("dragEnd", {
          index: b.value
        }), T()
      },
      ue = (V, X = {}) => {
        I(), r.reset(), so(() => {
          let ve;
          e.loop && V === d.value ? ve = a.active === 0 ? 0 : V : ve = V % d.value, X.immediate ? so(() => {
            a.swiping = !1
          }) : a.swiping = !1, k({
            pace: ve - a.active,
            emitChange: !0
          })
        })
      },
      De = (V, X) => {
        const ve = X === b.value,
          we = ve ? {
            backgroundColor: e.indicatorColor
          } : void 0;
        return h("i", {
          style: we,
          class: bs("indicator", {
            active: ve
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
        }, [Array(d.value).fill("").map(De)])
      };
    return $e({
      prev: B,
      next: S,
      state: a,
      resize: M,
      swipeTo: ue
    }), u({
      size: f,
      props: e,
      count: d,
      activeIndicator: b
    }), re(() => e.initialSwipe, V => P(+V)), re(d, () => P(a.active)), re(() => e.autoplay, T), re([tn, jt, () => e.width, () => e.height], M), re(Dy(), V => {
      V === "visible" ? T() : D()
    }), at(P), Cn(() => P(a.active)), Ca(() => P(a.active)), _n(D), kn(D), st("touchmove", W, {
      target: s
    }), () => {
      var V;
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
      }, [(V = n.default) == null ? void 0 : V.call(n)]), Ne()])
    }
  }
});
const xr = ee(a0),
  [l0, tu] = Y("tabs");
var r0 = K({
  name: l0,
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
        return e.animated || e.swipeable ? h(xr, {
          ref: o,
          loop: !1,
          class: tu("track"),
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
      class: tu("content", {
        animated: e.animated || e.swipeable
      })
    }, [a()])
  }
});
const [fh, ws] = Y("tabs"), c0 = {
  type: te("line"),
  color: String,
  border: Boolean,
  sticky: Boolean,
  shrink: Boolean,
  active: he(0),
  duration: he(.3),
  animated: Boolean,
  ellipsis: j,
  swipeable: Boolean,
  scrollspy: Boolean,
  offsetTop: he(0),
  background: String,
  lazyRender: j,
  showHeader: j,
  lineWidth: Z,
  lineHeight: Z,
  beforeChange: Function,
  swipeThreshold: he(5),
  titleActiveColor: String,
  titleInactiveColor: String
}, hh = Symbol(fh);
var u0 = K({
  name: fh,
  props: c0,
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
      [y, p] = ls(),
      {
        children: b,
        linkChildren: w
      } = Tt(hh),
      v = Je({
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
      k = (ae, ye) => {
        var A;
        return (A = ae.name) != null ? A : ye
      },
      I = N(() => {
        const ae = b[v.currentIndex];
        if (ae) return k(ae, v.currentIndex)
      }),
      B = N(() => wr(e.offsetTop)),
      S = N(() => e.sticky ? B.value + o : 0),
      R = ae => {
        const ye = u.value,
          A = y.value;
        if (!C.value || !ye || !A || !A[v.currentIndex]) return;
        const H = A[v.currentIndex].$el,
          U = H.offsetLeft - (ye.offsetWidth - H.offsetWidth) / 2;
        l && l(), l = Xp(ye, U, ae ? 0 : +e.duration)
      },
      D = () => {
        const ae = v.inited;
        Oe(() => {
          const ye = y.value;
          if (!ye || !ye[v.currentIndex] || e.type !== "line" || Bo(c.value)) return;
          const A = ye[v.currentIndex].$el,
            {
              lineWidth: H,
              lineHeight: U
            } = e,
            oe = A.offsetLeft + A.offsetWidth / 2,
            Se = {
              width: Ie(H),
              backgroundColor: e.color,
              transform: `translateX(${oe}px) translateX(-50%)`
            };
          if (ae && (Se.transitionDuration = `${e.duration}s`), Fe(U)) {
            const Le = Ie(U);
            Se.height = Le, Se.borderRadius = Le
          }
          v.lineStyle = Se
        })
      },
      T = ae => {
        const ye = ae < v.currentIndex ? -1 : 1;
        for (; ae >= 0 && ae < b.length;) {
          if (!b[ae].disabled) return ae;
          ae += ye
        }
      },
      P = (ae, ye) => {
        const A = T(ae);
        if (!Fe(A)) return;
        const H = b[A],
          U = k(H, A),
          oe = v.currentIndex !== null;
        v.currentIndex !== A && (v.currentIndex = A, ye || R(), D()), U !== e.active && (t("update:active", U), oe && t("change", U, H.title)), a && !e.scrollspy && Ji(Math.ceil(zc(c.value) - B.value))
      },
      M = (ae, ye) => {
        const A = b.find((U, oe) => k(U, oe) === ae),
          H = A ? b.indexOf(A) : 0;
        P(H, ye)
      },
      J = (ae = !1) => {
        if (e.scrollspy) {
          const ye = b[v.currentIndex].$el;
          if (ye && g.value) {
            const A = zc(ye, g.value) - S.value;
            s = !0, r && r(), r = Jp(g.value, A, ae ? 0 : +e.duration, () => {
              s = !1
            })
          }
        }
      },
      ce = (ae, ye, A) => {
        const {
          title: H,
          disabled: U
        } = b[ye], oe = k(b[ye], ye);
        U || (yo(e.beforeChange, {
          args: [oe],
          done: () => {
            P(ye), J()
          }
        }), Zf(ae)), t("clickTab", {
          name: oe,
          title: H,
          event: A,
          disabled: U
        })
      },
      W = ae => {
        a = ae.isFixed, t("scroll", ae)
      },
      ne = ae => {
        Oe(() => {
          M(ae), J(!0)
        })
      },
      ue = () => {
        for (let ae = 0; ae < b.length; ae++) {
          const {
            top: ye
          } = Ue(b[ae].$el);
          if (ye > S.value) return ae === 0 ? 0 : ae - 1
        }
        return b.length - 1
      },
      De = () => {
        if (e.scrollspy && !s) {
          const ae = ue();
          P(ae)
        }
      },
      Ne = () => {
        if (e.type === "line" && b.length) return h("div", {
          class: ws("line"),
          style: v.lineStyle
        }, null)
      },
      V = () => {
        var ae, ye, A;
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
        }, [(ae = n["nav-left"]) == null ? void 0 : ae.call(n), b.map(Le => Le.renderTitle(ce)), Ne(), (ye = n["nav-right"]) == null ? void 0 : ye.call(n)])]), (A = n["nav-bottom"]) == null ? void 0 : A.call(n)];
        return oe ? h("div", {
          ref: d
        }, [Se]) : Se
      },
      X = () => {
        D(), Oe(() => {
          var ae, ye;
          R(!0), (ye = (ae = f.value) == null ? void 0 : ae.swipeRef.value) == null || ye.resize()
        })
      };
    re(() => [e.color, e.duration, e.lineWidth, e.lineHeight], D), re(tn, X), re(() => e.active, ae => {
      ae !== I.value && M(ae)
    }), re(() => b.length, () => {
      v.inited && (M(e.active), D(), Oe(() => {
        R(!0)
      }))
    });
    const ve = () => {
        M(e.active, !0), Oe(() => {
          v.inited = !0, d.value && (o = Ue(d.value).height), R(!0)
        })
      },
      we = (ae, ye) => t("rendered", ae, ye);
    return $e({
      resize: X,
      scrollTo: ne
    }), Cn(D), Ca(D), yi(ve), rh(c, D), st("scroll", De, {
      target: g,
      passive: !0
    }), w({
      id: m,
      props: e,
      setLine: D,
      scrollable: C,
      onRendered: we,
      currentName: I,
      setTitleRefs: p,
      scrollIntoView: R
    }), () => h("div", {
      ref: c,
      class: ws([e.type])
    }, [e.showHeader ? e.sticky ? h(ch, {
      container: c.value,
      offsetTop: B.value,
      onScroll: W
    }, {
      default: () => [V()]
    }) : V() : null, h(r0, {
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
        var ae;
        return [(ae = n.default) == null ? void 0 : ae.call(n)]
      }
    })])
  }
});
const mh = Symbol(),
  d0 = () => Rt(mh, null),
  [f0, nu] = Y("tab"),
  h0 = K({
    name: f0,
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
            class: nu("text", {
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
        class: [nu([e.type, {
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
  [m0, g0] = Y("swipe-item");
var v0 = K({
  name: m0,
  setup(e, {
    slots: t
  }) {
    let n;
    const o = Je({
        offset: 0,
        inited: !1,
        mounted: !1
      }),
      {
        parent: s,
        index: a
      } = yt(dh);
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
          y = f === m && u ? 0 : f + 1;
        return n = a.value === f || a.value === g || a.value === y, n
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
        class: g0(),
        style: l.value
      }, [r.value ? (u = t.default) == null ? void 0 : u.call(t) : null])
    }
  }
});
const Er = ee(v0),
  [y0, Xa] = Y("tab"),
  p0 = ke({}, po, {
    dot: Boolean,
    name: Z,
    badge: Z,
    title: String,
    disabled: Boolean,
    titleClass: et,
    titleStyle: [String, Object],
    showZeroBadge: j
  });
var b0 = K({
  name: y0,
  props: p0,
  setup(e, {
    slots: t
  }) {
    const n = wi(),
      o = F(!1),
      s = ln(),
      {
        parent: a,
        index: l
      } = yt(hh);
    if (!a) return;
    const r = () => {
        var y;
        return (y = e.name) != null ? y : l.value
      },
      c = () => {
        o.value = !0, a.props.lazyRender && Oe(() => {
          a.onRendered(r(), e.title)
        })
      },
      u = N(() => {
        const y = r() === a.currentName.value;
        return y && !o.value && c(), y
      }),
      d = F(""),
      f = F("");
    vi(() => {
      const {
        titleClass: y,
        titleStyle: p
      } = e;
      d.value = y ? ot(y) : "", f.value = p && typeof p != "string" ? og(an(p)) : p
    });
    const m = y => h(h0, Be({
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
        onClick: p => y(s.proxy, l.value, p)
      }, ze(a.props, ["type", "color", "shrink"]), ze(e, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
        title: t.title
      }),
      g = F(!u.value);
    return re(u, y => {
      y ? g.value = !1 : so(() => {
        g.value = !0
      })
    }), re(() => e.title, () => {
      a.setLine(), a.scrollIntoView()
    }), Bn(mh, u), $e({
      id: n,
      renderTitle: m
    }), () => {
      var y;
      const p = `${a.id}-${l.value}`,
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
        "aria-labelledby": p,
        "data-allow-mismatch": "attribute"
      }, {
        default: () => {
          var B;
          return [h("div", {
            class: Xa("panel")
          }, [(B = t.default) == null ? void 0 : B.call(t)])]
        }
      });
      const I = o.value || v || !C ? (y = t.default) == null ? void 0 : y.call(t) : null;
      return rt(h("div", {
        id: n,
        role: "tabpanel",
        class: Xa("panel"),
        tabindex: _ ? 0 : -1,
        "aria-labelledby": p,
        "data-allow-mismatch": "attribute"
      }, [I]), [
        [dt, _]
      ])
    }
  }
});
const es = ee(b0),
  Sa = ee(u0),
  [gh, Ja] = Y("picker-group"),
  vh = Symbol(gh),
  w0 = ke({
    tabs: Ze(),
    activeTab: he(0),
    nextStepText: String,
    showToolbar: j
  }, ka);
var C0 = K({
  name: gh,
  props: w0,
  emits: ["confirm", "cancel", "update:activeTab"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = Tr(() => e.activeTab, u => t("update:activeTab", u)),
      {
        children: s,
        linkChildren: a
      } = Tt(vh);
    a();
    const l = () => +o.value < e.tabs.length - 1 && e.nextStepText,
      r = () => {
        l() ? o.value = +o.value + 1 : t("confirm", s.map(u => u.confirm()))
      },
      c = () => t("cancel");
    return () => {
      var u, d;
      let f = (d = (u = n.default) == null ? void 0 : u.call(n)) == null ? void 0 : d.filter(g => g.type !== vt).map(g => g.type === Re ? g.children : g);
      f && (f = jm(f));
      const m = l() ? e.nextStepText : e.confirmButtonText;
      return h("div", {
        class: Ja()
      }, [e.showToolbar ? h(lh, {
        title: e.title,
        cancelButtonText: e.cancelButtonText,
        confirmButtonText: m,
        onConfirm: r,
        onCancel: c
      }, ze(n, ah)) : null, h(Sa, {
        active: o.value,
        "onUpdate:active": g => o.value = g,
        class: Ja("tabs"),
        shrink: !0,
        animated: !0,
        lazyRender: !1
      }, {
        default: () => [e.tabs.map((g, y) => h(es, {
          title: g,
          titleClass: Ja("tab-title")
        }, {
          default: () => [f == null ? void 0 : f[y]]
        }))]
      })])
    }
  }
});
const Ta = ke({
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: he(44),
    showToolbar: j,
    swipeDuration: he(1e3),
    visibleOptionNum: he(6)
  }, ka),
  _0 = ke({}, Ta, {
    columns: Ze(),
    modelValue: Ze(),
    toolbarPosition: te("top"),
    columnsFieldNames: Object
  });
var k0 = K({
  name: Up,
  props: _0,
  emits: ["confirm", "cancel", "change", "scrollInto", "clickOption", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = F(e.modelValue.slice(0)),
      {
        parent: a
      } = yt(vh),
      {
        children: l,
        linkChildren: r
      } = Tt(sh);
    r();
    const c = N(() => Kp(e.columnsFieldNames)),
      u = N(() => wr(e.optionHeight)),
      d = N(() => Wp(e.columns, c.value)),
      f = N(() => {
        const {
          columns: T
        } = e;
        switch (d.value) {
          case "multiple":
            return T;
          case "cascade":
            return jp(T, c.value, s);
          default:
            return [T]
        }
      }),
      m = N(() => f.value.some(T => T.length)),
      g = N(() => f.value.map((T, P) => Ml(T, s.value[P], c.value))),
      y = N(() => f.value.map((T, P) => T.findIndex(M => M[c.value.value] === s.value[P]))),
      p = (T, P) => {
        if (s.value[T] !== P) {
          const M = s.value.slice(0);
          M[T] = P, s.value = M
        }
      },
      b = () => ({
        selectedValues: s.value.slice(0),
        selectedOptions: g.value,
        selectedIndexes: y.value
      }),
      w = (T, P) => {
        p(P, T), d.value === "cascade" && s.value.forEach((M, J) => {
          const ce = f.value[J];
          Xc(ce, M, c.value) || p(J, ce.length ? ce[0][c.value.value] : void 0)
        }), Oe(() => {
          t("change", ke({
            columnIndex: P
          }, b()))
        })
      },
      v = (T, P) => {
        const M = {
          columnIndex: P,
          currentOption: T
        };
        t("clickOption", ke(b(), M)), t("scrollInto", M)
      },
      C = () => {
        l.forEach(P => P.stopMomentum());
        const T = b();
        return Oe(() => {
          t("confirm", T)
        }), T
      },
      _ = () => t("cancel", b()),
      k = () => f.value.map((T, P) => h(qp, {
        value: s.value[P],
        fields: c.value,
        options: T,
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
      I = T => {
        if (m.value) {
          const P = {
              height: `${u.value}px`
            },
            M = {
              backgroundSize: `100% ${(T-u.value)/2}px`
            };
          return [h("div", {
            class: Rn("mask"),
            style: M
          }, null), h("div", {
            class: [Gy, Rn("frame")],
            style: P
          }, null)]
        }
      },
      B = () => {
        const T = u.value * +e.visibleOptionNum,
          P = {
            height: `${T}px`
          };
        return h("div", {
          ref: o,
          class: Rn("columns"),
          style: P
        }, [k(), I(T)])
      },
      S = () => {
        if (e.showToolbar && !a) return h(lh, Be(ze(e, Zp), {
          onConfirm: C,
          onCancel: _
        }), ze(n, ah))
      };
    re(f, T => {
      T.forEach((P, M) => {
        P.length && !Xc(P, s.value[M], c.value) && p(M, oh(P)[c.value.value])
      })
    }, {
      immediate: !0
    });
    let R;
    return re(() => e.modelValue, T => {
      !pn(T, s.value) && !pn(T, R) && (s.value = T.slice(0), R = T.slice(0))
    }, {
      deep: !0
    }), re(s, T => {
      pn(T, e.modelValue) || (R = T.slice(0), t("update:modelValue", R))
    }, {
      immediate: !0
    }), st("touchmove", Ge, {
      target: o
    }), $e({
      confirm: C,
      getSelectedOptions: () => g.value
    }), () => {
      var T, P;
      return h("div", {
        class: Rn()
      }, [e.toolbarPosition === "top" ? S() : null, e.loading ? h(rn, {
        class: Rn("loading")
      }, null) : null, (T = n["columns-top"]) == null ? void 0 : T.call(n), B(), (P = n["columns-bottom"]) == null ? void 0 : P.call(n), e.toolbarPosition === "bottom" ? S() : null])
    }
  }
});
const ii = "000000",
  S0 = ["title", "cancel", "confirm", "toolbar", "columns-top", "columns-bottom"],
  yh = ["title", "loading", "readonly", "optionHeight", "swipeDuration", "visibleOptionNum", "cancelButtonText", "confirmButtonText"],
  Yn = (e = "", t = ii, n = void 0) => ({
    text: e,
    value: t,
    children: n
  });

function T0({
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
      const y = Yn(o[g], g, m());
      d.set(g.slice(0, 4), y);
      const p = u.get(g.slice(0, 2));
      p && p.children.push(y)
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
const xa = ee(k0),
  [x0, E0] = Y("area"),
  A0 = ke({}, ze(Ta, yh), {
    modelValue: String,
    columnsNum: he(3),
    columnsPlaceholder: Ze(),
    areaList: {
      type: Object,
      default: () => ({})
    }
  });
var I0 = K({
  name: x0,
  props: A0,
  emits: ["change", "confirm", "cancel", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F([]),
      s = F(),
      a = N(() => T0(e)),
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
    }), () => h(xa, Be({
      ref: s,
      modelValue: o.value,
      "onUpdate:modelValue": u => o.value = u,
      class: E0(),
      columns: a.value,
      onChange: l,
      onCancel: r,
      onConfirm: c
    }, ze(e, yh)), ze(n, S0))
  }
});
const ph = ee(I0),
  [P0, Vo] = Y("cell"),
  Ea = {
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
  O0 = ke({}, Ea, po);
var R0 = K({
  name: P0,
  props: O0,
  setup(e, {
    slots: t
  }) {
    const n = Mo(),
      o = () => {
        if (t.label || Fe(e.label)) return h("div", {
          class: [Vo("label"), e.labelClass]
        }, [t.label ? t.label() : e.label])
      },
      s = () => {
        var c;
        if (t.title || Fe(e.title)) {
          const u = (c = t.title) == null ? void 0 : c.call(t);
          return Array.isArray(u) && u.length === 0 ? void 0 : h("div", {
            class: [Vo("title"), e.titleClass],
            style: e.titleStyle
          }, [u || h("span", null, [e.title]), o()])
        }
      },
      a = () => {
        const c = t.value || t.default;
        if (c || Fe(e.value)) return h("div", {
          class: [Vo("value"), e.valueClass]
        }, [c ? c() : h("span", null, [e.value])])
      },
      l = () => {
        if (t.icon) return t.icon();
        if (e.icon) return h(Pe, {
          name: e.icon,
          class: Vo("left-icon"),
          classPrefix: e.iconPrefix
        }, null)
      },
      r = () => {
        if (t["right-icon"]) return t["right-icon"]();
        if (e.isLink) {
          const c = e.arrowDirection && e.arrowDirection !== "right" ? `arrow-${e.arrowDirection}` : "arrow";
          return h(Pe, {
            name: c,
            class: Vo("right-icon")
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
        required: y
      } = e, p = (c = e.clickable) != null ? c : g, b = {
        center: f,
        required: !!y,
        clickable: p,
        borderless: !m
      };
      return d && (b[d] = !!d), h(u, {
        class: Vo(b),
        role: p ? "button" : void 0,
        tabindex: p ? 0 : void 0,
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
  [D0, B0] = Y("form"),
  $0 = {
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
var M0 = K({
  name: D0,
  props: $0,
  emits: ["submit", "failed"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      children: o,
      linkChildren: s
    } = Tt(jf), a = b => b ? o.filter(w => b.includes(w.name)) : o, l = b => new Promise((w, v) => {
      const C = [];
      a(b).reduce((k, I) => k.then(() => {
        if (!C.length) return I.validate().then(B => {
          B && C.push(B)
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
    }, g = () => o.reduce((b, w) => (w.name !== void 0 && (b[w.name] = w.formValue.value), b), {}), y = () => {
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
    }, p = b => {
      Ge(b), y()
    };
    return s({
      props: e
    }), $e({
      submit: y,
      validate: u,
      getValues: g,
      scrollToField: m,
      resetValidation: d,
      getValidationStatus: f
    }), () => {
      var b;
      return h("form", {
        class: B0(),
        onSubmit: p
      }, [(b = n.default) == null ? void 0 : b.call(n)])
    }
  }
});
const Ar = ee(M0);

function bh(e) {
  return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e
}

function L0(e, t) {
  if (bh(e)) {
    if (t.required) return !1;
    if (t.validateEmpty === !1) return !0
  }
  return !(t.pattern && !t.pattern.test(String(e)))
}

function N0(e, t) {
  return new Promise(n => {
    const o = t.validator(e, t);
    if (Gl(o)) {
      o.then(n);
      return
    }
    n(o)
  })
}

function ou(e, t) {
  const {
    message: n
  } = t;
  return ci(n) ? n(e, t) : n || ""
}

function F0({
  target: e
}) {
  e.composing = !0
}

function iu({
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

function z0(e) {
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
const [H0, Ut] = Y("field"), Ir = {
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
  modelValue: he(""),
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
}, U0 = ke({}, Ea, Ir, {
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
var W0 = K({
  name: H0,
  props: U0,
  emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = wi(),
      s = Je({
        status: "unvalidated",
        focused: !1,
        validateMessage: ""
      }),
      a = F(),
      l = F(),
      r = F(),
      {
        parent: c
      } = yt(jf),
      u = () => {
        var A;
        return String((A = e.modelValue) != null ? A : "")
      },
      d = A => {
        if (Fe(e[A])) return e[A];
        if (c && Fe(c.props[A])) return c.props[A]
      },
      f = N(() => {
        const A = d("readonly");
        if (e.clearable && !A) {
          const H = u() !== "",
            U = e.clearTrigger === "always" || e.clearTrigger === "focus" && s.focused;
          return H && U
        }
        return !1
      }),
      m = N(() => r.value && n.input ? r.value() : e.modelValue),
      g = N(() => {
        var A;
        const H = d("required");
        return H === "auto" ? (A = e.rules) == null ? void 0 : A.some(U => U.required) : H
      }),
      y = A => A.reduce((H, U) => H.then(() => {
        if (s.status === "failed") return;
        let {
          value: oe
        } = m;
        if (U.formatter && (oe = U.formatter(oe, U)), !L0(oe, U)) {
          s.status = "failed", s.validateMessage = ou(oe, U);
          return
        }
        if (U.validator) return bh(oe) && U.validateEmpty === !1 ? void 0 : N0(oe, U).then(Se => {
          Se && typeof Se == "string" ? (s.status = "failed", s.validateMessage = Se) : Se === !1 && (s.status = "failed", s.validateMessage = ou(oe, U))
        })
      }), Promise.resolve()),
      p = () => {
        s.status = "unvalidated", s.validateMessage = ""
      },
      b = () => t("endValidate", {
        status: s.status,
        message: s.validateMessage
      }),
      w = (A = e.rules) => new Promise(H => {
        p(), A ? (t("startValidate"), y(A).then(() => {
          s.status === "failed" ? (H({
            name: e.name,
            message: s.validateMessage
          }), b()) : (s.status = "passed", H(), b())
        })) : H()
      }),
      v = A => {
        if (c && e.rules) {
          const {
            validateTrigger: H
          } = c.props, U = Us(H).includes(A), oe = e.rules.filter(Se => Se.trigger ? Us(Se.trigger).includes(A) : U);
          oe.length && w(oe)
        }
      },
      C = A => {
        var H;
        const {
          maxlength: U
        } = e;
        if (Fe(U) && Tn(A) > +U) {
          const oe = u();
          if (oe && Tn(oe) === +U) return oe;
          const Se = (H = a.value) == null ? void 0 : H.selectionEnd;
          if (s.focused && Se) {
            const Le = [...A],
              x = Le.length - +U;
            return Le.splice(Se - x, x), Le.join("")
          }
          return el(A, +U)
        }
        return A
      },
      _ = (A, H = "onChange") => {
        var U, oe;
        const Se = A;
        A = C(A);
        const Le = Tn(Se) - Tn(A);
        if (e.type === "number" || e.type === "digit") {
          const O = e.type === "number";
          A = Dl(A, O, O), H === "onBlur" && A !== "" && (A = ht(+A, (U = e.min) != null ? U : -1 / 0, (oe = e.max) != null ? oe : 1 / 0).toString())
        }
        let x = 0;
        if (e.formatter && H === e.formatTrigger) {
          const {
            formatter: O,
            maxlength: L
          } = e;
          if (A = O(A), Fe(L) && Tn(A) > +L && (A = el(A, +L)), a.value && s.focused) {
            const {
              selectionEnd: q
            } = a.value, Q = el(Se, q);
            x = Tn(O(Q)) - Tn(Q)
          }
        }
        if (a.value && a.value.value !== A)
          if (s.focused) {
            let {
              selectionStart: O,
              selectionEnd: L
            } = a.value;
            if (a.value.value = A, Fe(O) && Fe(L)) {
              const q = Tn(A);
              Le ? (O -= Le, L -= Le) : x && (O += x, L += x), a.value.setSelectionRange(Math.min(O, q), Math.min(L, q))
            }
          } else a.value.value = A;
        A !== e.modelValue && t("update:modelValue", A)
      },
      k = A => {
        A.target.composing || _(A.target.value)
      },
      I = () => {
        var A;
        return (A = a.value) == null ? void 0 : A.blur()
      },
      B = () => {
        var A;
        return (A = a.value) == null ? void 0 : A.focus()
      },
      S = () => {
        const A = a.value;
        e.type === "textarea" && e.autosize && A && V0(A, e.autosize)
      },
      R = A => {
        s.focused = !0, t("focus", A), Oe(S), d("readonly") && I()
      },
      D = A => {
        s.focused = !1, _(u(), "onBlur"), t("blur", A), !d("readonly") && (v("onBlur"), Oe(S), Nf())
      },
      T = A => t("clickInput", A),
      P = A => t("clickLeftIcon", A),
      M = A => t("clickRightIcon", A),
      J = A => {
        Ge(A), t("update:modelValue", ""), t("clear", A)
      },
      ce = N(() => {
        if (typeof e.error == "boolean") return e.error;
        if (c && c.props.showError && s.status === "failed") return !0
      }),
      W = N(() => {
        const A = d("labelWidth"),
          H = d("labelAlign");
        if (A && H !== "top") return {
          width: Ie(A)
        }
      }),
      ne = A => {
        A.keyCode === 13 && (!(c && c.props.submitOnEnter) && e.type !== "textarea" && Ge(A), e.type === "search" && I()), t("keypress", A)
      },
      ue = () => e.id || `${o}-input`,
      De = () => s.status,
      Ne = () => {
        const A = Ut("control", [d("inputAlign"), {
          error: ce.value,
          custom: !!n.input,
          "min-height": e.type === "textarea" && !e.autosize
        }]);
        if (n.input) return h("div", {
          class: A,
          onClick: T
        }, [n.input()]);
        const H = {
          id: ue(),
          ref: a,
          name: e.name,
          rows: e.rows !== void 0 ? +e.rows : void 0,
          class: A,
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
          onBlur: D,
          onFocus: R,
          onInput: k,
          onClick: T,
          onChange: iu,
          onKeypress: ne,
          onCompositionend: iu,
          onCompositionstart: F0
        };
        return e.type === "textarea" ? h("textarea", H, null) : h("input", Be(z0(e.type), H), null)
      },
      V = () => {
        const A = n["left-icon"];
        if (e.leftIcon || A) return h("div", {
          class: Ut("left-icon"),
          onClick: P
        }, [A ? A() : h(Pe, {
          name: e.leftIcon,
          classPrefix: e.iconPrefix
        }, null)])
      },
      X = () => {
        const A = n["right-icon"];
        if (e.rightIcon || A) return h("div", {
          class: Ut("right-icon"),
          onClick: M
        }, [A ? A() : h(Pe, {
          name: e.rightIcon,
          classPrefix: e.iconPrefix
        }, null)])
      },
      ve = () => {
        if (e.showWordLimit && e.maxlength) {
          const A = Tn(u());
          return h("div", {
            class: Ut("word-limit")
          }, [h("span", {
            class: Ut("word-num")
          }, [A]), pe("/"), e.maxlength])
        }
      },
      we = () => {
        if (c && c.props.showErrorMessage === !1) return;
        const A = e.errorMessage || s.validateMessage;
        if (A) {
          const H = n["error-message"],
            U = d("errorMessageAlign");
          return h("div", {
            class: Ut("error-message", U)
          }, [H ? H({
            message: A
          }) : A])
        }
      },
      ae = () => {
        const A = d("labelWidth"),
          H = d("labelAlign"),
          U = d("colon") ? ":" : "";
        if (n.label) return [n.label(), U];
        if (e.label) return h("label", {
          id: `${o}-label`,
          for: n.input ? void 0 : ue(),
          "data-allow-mismatch": "attribute",
          onClick: oe => {
            Ge(oe), B()
          },
          style: H === "top" && A ? {
            width: Ie(A)
          } : void 0
        }, [e.label + U])
      },
      ye = () => [h("div", {
        class: Ut("body")
      }, [Ne(), f.value && h(Pe, {
        ref: l,
        name: e.clearIcon,
        class: Ut("clear")
      }, null), X(), n.button && h("div", {
        class: Ut("button")
      }, [n.button()])]), ve(), we()];
    return $e({
      blur: I,
      focus: B,
      validate: w,
      formValue: m,
      resetValidation: p,
      getValidationStatus: De
    }), Bn(Lf, {
      customValue: r,
      resetValidation: p,
      validateWithTrigger: v
    }), re(() => e.modelValue, () => {
      _(u()), p(), v("onChange"), Oe(S)
    }), at(() => {
      _(u(), e.formatTrigger), Oe(S)
    }), st("touchstart", J, {
      target: N(() => {
        var A;
        return (A = l.value) == null ? void 0 : A.$el
      })
    }), () => {
      const A = d("disabled"),
        H = d("labelAlign"),
        U = V(),
        oe = () => {
          const Se = ae();
          return H === "top" ? [U, Se].filter(Boolean) : Se || []
        };
      return h(un, {
        size: e.size,
        class: Ut({
          error: ce.value,
          disabled: A,
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
        value: ye,
        extra: n.extra
      })
    }
  }
});
const $n = ee(W0);
let xi = 0;

function j0(e) {
  e ? (xi || document.body.classList.add("van-toast--unclickable"), xi++) : xi && (xi--, xi || document.body.classList.remove("van-toast--unclickable"))
}
const [Q0, zo] = Y("toast"), K0 = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay", "zIndex"], Y0 = {
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
var wh = K({
  name: Q0,
  props: Y0,
  emits: ["update:show"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o, s = !1;
    const a = () => {
        const f = e.show && e.forbidClick;
        s !== f && (s = f, j0(s))
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
          iconPrefix: y,
          loadingType: p
        } = e;
        if (f || m === "success" || m === "fail") return h(Pe, {
          name: f || m,
          size: g,
          class: zo("icon"),
          classPrefix: y
        }, null);
        if (m === "loading") return h(rn, {
          class: zo("loading"),
          size: g,
          type: p
        }, null)
      },
      d = () => {
        const {
          type: f,
          message: m
        } = e;
        if (n.message) return h("div", {
          class: zo("text")
        }, [n.message()]);
        if (Fe(m) && m !== "") return f === "html" ? h("div", {
          key: 0,
          class: zo("text"),
          innerHTML: String(m)
        }, null) : h("div", {
          class: zo("text")
        }, [m])
      };
    return re(() => [e.show, e.forbidClick], a), re(() => [e.show, e.type, e.message, e.duration], () => {
      c(), e.show && e.duration > 0 && (o = setTimeout(() => {
        l(!1)
      }, e.duration))
    }), at(a), gi(a), () => h(cn, Be({
      class: [zo([e.position, e.wordBreak === "normal" ? "break-normal" : e.wordBreak, {
        [e.type]: !e.icon
      }]), e.className],
      lockScroll: !1,
      onClick: r,
      onClosed: c,
      "onUpdate:show": l
    }, ze(e, K0)), {
      default: () => [u(), d()]
    })
  }
});

function Pr() {
  const e = Je({
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

function Or(e) {
  const t = $f(e),
    n = document.createElement("div");
  return document.body.appendChild(n), {
    instance: t.mount(n),
    unmount() {
      t.unmount(), document.body.removeChild(n)
    }
  }
}
const q0 = {
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
  G0 = !1,
  su = ke({}, q0);
const Z0 = new Map;

function X0(e) {
  return wn(e) ? e : {
    message: e
  }
}

function J0() {
  const {
    instance: e,
    unmount: t
  } = Or({
    setup() {
      const n = F(""),
        {
          open: o,
          state: s,
          close: a,
          toggle: l
        } = Pr(),
        r = () => {},
        c = () => h(wh, Be(s, {
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

function eb() {
  if (!Cs.length || G0) {
    const e = J0();
    Cs.push(e)
  }
  return Cs[Cs.length - 1]
}

function Ll(e = {}) {
  if (!Vt) return {};
  const t = eb(),
    n = X0(e);
  return t.open(ke({}, su, Z0.get(n.type || su.type), n)), t
}
const tb = ee(wh),
  [nb, tl] = Y("switch"),
  ob = {
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
var ib = K({
  name: nb,
  props: ob,
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
const Rr = ee(ib),
  [sb, au] = Y("address-edit-detail"),
  lu = Y("address-edit")[2];
var ab = K({
  name: sb,
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
          class: au("search-item"),
          border: !1,
          onClick: () => s(d)
        }, null))
      },
      l = u => t("blur", u),
      r = u => t("focus", u),
      c = u => t("input", u);
    return () => {
      if (e.show) return h(Re, null, [h($n, {
        autosize: !0,
        clearable: !0,
        ref: n,
        class: au(),
        rows: e.rows,
        type: "textarea",
        rules: e.rules,
        label: lu("addressDetail"),
        border: !o(),
        maxlength: e.maxlength,
        modelValue: e.value,
        placeholder: lu("addressDetail"),
        onBlur: l,
        onFocus: r,
        "onUpdate:modelValue": c
      }, null), a()])
    }
  }
});
const [lb, Ho, xt] = Y("address-edit"), Ch = {
  name: "",
  tel: "",
  city: "",
  county: "",
  country: "",
  province: "",
  areaCode: "",
  isDefault: !1,
  addressDetail: ""
}, rb = {
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
  detailRows: he(1),
  detailMaxlength: he(200),
  areaColumnsPlaceholder: Ze(),
  addressInfo: {
    type: Object,
    default: () => ke({}, Ch)
  },
  telValidator: {
    type: Function,
    default: hd
  }
};
var cb = K({
  name: lb,
  props: rb,
  emits: ["save", "focus", "change", "delete", "clickArea", "changeArea", "changeDetail", "selectSearch", "changeDefault"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = Je({}),
      a = F(!1),
      l = F(!1),
      r = N(() => wn(e.areaList) && Object.keys(e.areaList).length),
      c = N(() => {
        const {
          province: I,
          city: B,
          county: S,
          areaCode: R
        } = s;
        if (R) {
          const D = [I, B, S];
          return I && I === B && D.splice(1, 1), D.filter(Boolean).join("/")
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
      f = (I, B) => {
        t("change", {
          key: I,
          value: B
        })
      },
      m = N(() => {
        const {
          validator: I,
          telValidator: B
        } = e, S = (R, D) => ({
          validator: T => {
            if (I) {
              const P = I(R, T);
              if (P) return P
            }
            return T ? !0 : D
          }
        });
        return {
          name: [S("name", xt("nameEmpty"))],
          tel: [S("tel", xt("telInvalid")), {
            validator: B,
            message: xt("telInvalid")
          }],
          areaCode: [S("areaCode", xt("areaEmpty"))],
          addressDetail: [S("addressDetail", xt("addressEmpty"))]
        }
      }),
      g = () => t("save", s),
      y = I => {
        s.addressDetail = I, t("changeDetail", I)
      },
      p = I => {
        s.province = I[0].text, s.city = I[1].text, s.county = I[2].text
      },
      b = ({
        selectedValues: I,
        selectedOptions: B
      }) => {
        I.some(S => S === ii) ? Ll(xt("areaEmpty")) : (a.value = !1, p(B), t("changeArea", B))
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
              "onUpdate:modelValue": B => s.isDefault = B,
              onChange: B => t("changeDefault", B)
            }, null)
          };
          return rt(h(un, {
            center: !0,
            border: !1,
            title: xt("defaultAddress"),
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
      ke(s, Ch, I), Oe(() => {
        var B;
        const S = (B = o.value) == null ? void 0 : B.getSelectedOptions();
        S && S.every(R => R && R.value !== ii) && p(S)
      })
    }, {
      deep: !0,
      immediate: !0
    }), () => {
      const {
        disableArea: I
      } = e;
      return h(Ar, {
        class: Ho(),
        onSubmit: g
      }, {
        default: () => {
          var B;
          return [h("div", {
            class: Ho("fields")
          }, [h($n, {
            modelValue: s.name,
            "onUpdate:modelValue": [S => s.name = S, S => f("name", S)],
            clearable: !0,
            label: xt("name"),
            rules: m.value.name,
            placeholder: xt("name"),
            onFocus: () => d("name")
          }, null), h($n, {
            modelValue: s.tel,
            "onUpdate:modelValue": [S => s.tel = S, S => f("tel", S)],
            clearable: !0,
            type: "tel",
            label: xt("tel"),
            rules: m.value.tel,
            maxlength: e.telMaxlength,
            placeholder: xt("tel"),
            onFocus: () => d("tel")
          }, null), rt(h($n, {
            readonly: !0,
            label: xt("area"),
            "is-link": !I,
            modelValue: c.value,
            rules: e.showArea ? m.value.areaCode : void 0,
            placeholder: e.areaPlaceholder || xt("area"),
            onFocus: () => d("areaCode"),
            onClick: () => {
              t("clickArea"), a.value = !I
            }
          }, null), [
            [dt, e.showArea]
          ]), h(ab, {
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
            onInput: y,
            onSelectSearch: S => t("selectSearch", S)
          }, null), (B = n.default) == null ? void 0 : B.call(n)]), k(), rt(h("div", {
            class: Ho("buttons")
          }, [h(St, {
            block: !0,
            round: !0,
            type: "primary",
            text: e.saveButtonText || xt("save"),
            class: Ho("button"),
            loading: e.isSaving,
            nativeType: "submit"
          }, null), e.showDelete && h(St, {
            block: !0,
            round: !0,
            class: Ho("button"),
            loading: e.isDeleting,
            text: e.deleteButtonText || xt("delete"),
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
            default: () => [h(ph, {
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
const ub = ee(cb),
  [_h, db] = Y("radio-group"),
  fb = {
    shape: String,
    disabled: Boolean,
    iconSize: Z,
    direction: String,
    modelValue: et,
    checkedColor: String
  },
  kh = Symbol(_h);
var hb = K({
  name: _h,
  props: fb,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      linkChildren: o
    } = Tt(kh), s = a => t("update:modelValue", a);
    return re(() => e.modelValue, a => t("change", a)), o({
      props: e,
      updateValue: s
    }), vo(() => e.modelValue), () => {
      var a;
      return h("div", {
        class: db([e.direction]),
        role: "radiogroup"
      }, [(a = n.default) == null ? void 0 : a.call(n)])
    }
  }
});
const Dr = ee(hb),
  [Sh, mb] = Y("checkbox-group"),
  gb = {
    max: Z,
    shape: te("round"),
    disabled: Boolean,
    iconSize: Z,
    direction: String,
    modelValue: Ze(),
    checkedColor: String
  },
  Th = Symbol(Sh);
var vb = K({
  name: Sh,
  props: gb,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      children: o,
      linkChildren: s
    } = Tt(Th), a = r => t("update:modelValue", r), l = (r = {}) => {
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
        class: mb([e.direction])
      }, [(r = n.default) == null ? void 0 : r.call(n)])
    }
  }
});
const xh = ee(vb),
  [yb, ru] = Y("tag"),
  pb = {
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
var bb = K({
  name: yb,
  props: pb,
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
        const y = m && h(Pe, {
          name: "cross",
          class: [ru("close"), kt],
          onClick: o
        }, null);
        return h("span", {
          style: s(),
          class: ru([g, r])
        }, [(l = t.default) == null ? void 0 : l.call(t), y])
      };
    return () => h(ya, {
      name: e.closeable ? "van-fade" : void 0
    }, {
      default: () => [e.show ? a() : null]
    })
  }
});
const Aa = ee(bb),
  Br = {
    name: et,
    disabled: Boolean,
    iconSize: Z,
    modelValue: et,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean
  };
var Eh = K({
  props: ke({}, Br, {
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
              y = s("max"),
              p = y && g >= +y;
            return m || p && !e.checked
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
        } = m, y = o.value, p = y === g || (y == null ? void 0 : y.contains(g));
        !a.value && (p || !e.labelDisabled) && t("toggle"), t("click", m)
      },
      d = () => {
        var m, g;
        const {
          bem: y,
          checked: p,
          indeterminate: b
        } = e, w = e.iconSize || s("iconSize");
        return h("div", {
          ref: o,
          class: y("icon", [c.value, {
            disabled: a.value,
            checked: p,
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
          checked: p,
          disabled: a.value
        }) : c.value !== "dot" ? h(Pe, {
          name: b ? "minus" : "success",
          style: r.value
        }, null) : h("div", {
          class: y("icon--dot__icon"),
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
const wb = ke({}, Br, {
    shape: String
  }),
  [Cb, _b] = Y("radio");
var kb = K({
  name: Cb,
  props: wb,
  emits: ["update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      parent: o
    } = yt(kh), s = () => (o ? o.props.modelValue : e.modelValue) === e.name, a = () => {
      o ? o.updateValue(e.name) : t("update:modelValue", e.name)
    };
    return () => h(Eh, Be({
      bem: _b,
      role: "radio",
      parent: o,
      checked: s(),
      onToggle: a
    }, e), ze(n, ["default", "icon"]))
  }
});
const $r = ee(kb),
  [Sb, Tb] = Y("checkbox"),
  xb = ke({}, Br, {
    shape: String,
    bindGroup: j,
    indeterminate: {
      type: Boolean,
      default: null
    }
  });
var Eb = K({
  name: Sb,
  props: xb,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      parent: o
    } = yt(Th), s = r => {
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
    }), vo(() => e.modelValue), () => h(Eh, Be({
      bem: Tb,
      role: "checkbox",
      parent: o,
      checked: a.value,
      onToggle: l
    }, e), ze(n, ["default", "icon"]))
  }
});
const Mr = ee(Eb),
  [Ab, Uo] = Y("address-item");
var Ib = K({
  name: Ab,
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
        if (e.address.isDefault && e.defaultTagText) return h(Aa, {
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
        return u && !c ? d ? h($r, {
          name: r.id,
          iconSize: 18
        }, {
          default: () => [f]
        }) : h(Mr, {
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
const [Pb, _s, Ob] = Y("address-list"), Rb = {
  list: Ze(),
  modelValue: [...Z, Array],
  switchable: j,
  disabledText: String,
  disabledList: Ze(),
  showAddButton: j,
  addButtonText: String,
  defaultTagText: String,
  rightIcon: te("edit")
};
var Db = K({
  name: Pb,
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
                g.includes(r.id) ? n("update:modelValue", g.filter(y => y !== r.id)) : n("update:modelValue", [...g, r.id])
              }
          };
        return h(Ib, {
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
      }, [h(St, {
        round: !0,
        block: !0,
        type: "primary",
        text: e.addButtonText || Ob("add"),
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
      }, [(r = t.top) == null ? void 0 : r.call(t), !o.value && Array.isArray(e.modelValue) ? h(xh, {
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
const Bb = ee(Db);

function $b(e, t) {
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
const [Mb, nl] = Y("back-top"), Lb = {
  right: Z,
  bottom: Z,
  zIndex: Z,
  target: [String, Object],
  offset: he(200),
  immediate: Boolean,
  teleport: {
    type: [String, Object],
    default: "body"
  }
};
var Nb = K({
  name: Mb,
  inheritAttrs: !1,
  props: Lb,
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
        var y;
        t("click", g), (y = r.value) == null || y.scrollTo({
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
          const y = document.querySelector(g);
          if (y) return y
        } else return g
      },
      m = () => {
        Vt && Oe(() => {
          r.value = e.target ? f() : pr(l.value), d()
        })
      };
    return st("scroll", $b(d, 100), {
      target: r
    }), at(m), Cn(() => {
      s && (a.value = !0, s = !1)
    }), _n(() => {
      a.value && e.teleport && (a.value = !1, s = !0)
    }), re(() => e.target, m), () => {
      const g = h("div", Be({
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
const Fb = ee(Nb);
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
const zb = {
    top: he(10),
    rows: he(4),
    duration: he(4e3),
    autoPlay: j,
    delay: lt(300),
    modelValue: Ze()
  },
  [Hb, cu] = Y("barrage");
var Ub = K({
  name: Hb,
  props: zb,
  emits: ["update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = cu("item"),
      a = F(0),
      l = [],
      r = (p, b = e.delay) => {
        const w = document.createElement("span");
        return w.className = s, w.innerText = String(p), w.style.animationDuration = `${e.duration}ms`, w.style.animationDelay = `${b}ms`, w.style.animationName = "van-barrage", w.style.animationTimingFunction = "linear", w
      },
      c = F(!0),
      u = F(e.autoPlay),
      d = ({
        id: p,
        text: b
      }, w) => {
        var v;
        const C = r(b, c.value ? w * e.delay : void 0);
        !e.autoPlay && u.value === !1 && (C.style.animationPlayState = "paused"), (v = o.value) == null || v.append(C), a.value++;
        const _ = (a.value - 1) % +e.rows * C.offsetHeight + +e.top;
        C.style.top = `${_}px`, C.dataset.id = String(p), l.push(C), C.addEventListener("animationend", () => {
          t("update:modelValue", [...e.modelValue].filter(k => String(k.id) !== C.dataset.id))
        })
      },
      f = (p, b) => {
        const w = new Map(b.map(v => [v.id, v]));
        p.forEach((v, C) => {
          w.has(v.id) ? w.delete(v.id) : d(v, C)
        }), w.forEach(v => {
          const C = l.findIndex(_ => _.dataset.id === String(v.id));
          C > -1 && (l[C].remove(), l.splice(C, 1))
        }), c.value = !1
      };
    re(() => e.modelValue.slice(), (p, b) => f(p ?? [], b ?? []), {
      deep: !0
    });
    const m = F({});
    return at(() => Vb(this, null, function*() {
      var p;
      m.value["--move-distance"] = `-${(p=o.value)==null?void 0:p.offsetWidth}px`, yield Oe(), f(e.modelValue, [])
    })), $e({
      play: () => {
        u.value = !0, l.forEach(p => {
          p.style.animationPlayState = "running"
        })
      },
      pause: () => {
        u.value = !1, l.forEach(p => {
          p.style.animationPlayState = "paused"
        })
      }
    }), () => {
      var p;
      return h("div", {
        class: cu(),
        ref: o,
        style: m.value
      }, [(p = n.default) == null ? void 0 : p.call(n)])
    }
  }
});
const Wb = ee(Ub),
  [jb, nt, Mn] = Y("calendar"),
  Qb = e => Mn("monthTitle", e.getFullYear(), e.getMonth() + 1);

function Ao(e, t) {
  const n = e.getFullYear(),
    o = t.getFullYear();
  if (n === o) {
    const s = e.getMonth(),
      a = t.getMonth();
    return s === a ? 0 : s > a ? 1 : -1
  }
  return n > o ? 1 : -1
}

function Bt(e, t) {
  const n = Ao(e, t);
  if (n === 0) {
    const o = e.getDate(),
      s = t.getDate();
    return o === s ? 0 : o > s ? 1 : -1
  }
  return n
}
const di = e => new Date(e),
  uu = e => Array.isArray(e) ? e.map(di) : di(e);

function Lr(e, t) {
  const n = di(e);
  return n.setDate(n.getDate() + t), n
}

function Nr(e, t) {
  const n = di(e);
  return n.setMonth(n.getMonth() + t), n.getDate() !== e.getDate() && n.setDate(0), n
}

function Ah(e, t) {
  const n = di(e);
  return n.setFullYear(n.getFullYear() + t), n.getDate() !== e.getDate() && n.setDate(0), n
}
const Nl = e => Lr(e, -1),
  Fl = e => Lr(e, 1),
  du = e => Nr(e, -1),
  fu = e => Nr(e, 1),
  hu = e => Ah(e, -1),
  mu = e => Ah(e, 1),
  ks = () => {
    const e = new Date;
    return e.setHours(0, 0, 0, 0), e
  };

function Kb(e) {
  const t = e[0].getTime();
  return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1
}
const Ih = ke({}, Ta, {
    modelValue: Ze(),
    filter: Function,
    formatter: {
      type: Function,
      default: (e, t) => t
    }
  }),
  Ph = Object.keys(Ta);

function Yb(e, t) {
  if (e < 0) return [];
  const n = Array(e);
  let o = -1;
  for (; ++o < e;) n[o] = t(o);
  return n
}
const Oh = (e, t) => 32 - new Date(e, t - 1, 32).getDate(),
  si = (e, t, n, o, s, a) => {
    const l = Yb(t - e + 1, r => {
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
  [qb] = Y("calendar-day");
var Gb = K({
  name: qb,
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
        } = e, y = {
          height: g
        };
        if (u.type === "placeholder") return y.width = "100%", y;
        if (d === 0 && (y.marginLeft = `${100*m/7}%`), f) switch (u.type) {
          case "end":
          case "start":
          case "start-end":
          case "multiple-middle":
          case "multiple-selected":
            y.background = f;
            break;
          case "middle":
            y.color = f;
            break
        }
        return m + (((c = u.date) == null ? void 0 : c.getDate()) || 1) > 28 && (y.marginBottom = 0), y
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
const [Zb] = Y("calendar-month"), Xb = {
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
var Jb = K({
  name: Zb,
  props: Xb,
  emits: ["click", "clickDisabledDate"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const [o, s] = Sy(), a = F(), l = F(), r = Yf(l), c = N(() => Qb(e.date)), u = N(() => Ie(e.rowHeight)), d = N(() => {
      const D = e.date.getDate(),
        P = (e.date.getDay() - D % 7 + 8) % 7;
      return e.firstDayOfWeek ? (P + 7 - e.firstDayOfWeek) % 7 : P
    }), f = N(() => Oh(e.date.getFullYear(), e.date.getMonth() + 1)), m = N(() => o.value || !e.lazyRender), g = () => c.value, y = D => {
      const T = P => e.currentDate.some(M => Bt(M, P) === 0);
      if (T(D)) {
        const P = Nl(D),
          M = Fl(D),
          J = T(P),
          ce = T(M);
        return J && ce ? "multiple-middle" : J ? "end" : ce ? "start" : "multiple-selected"
      }
      return ""
    }, p = D => {
      const [T, P] = e.currentDate;
      if (!T) return "";
      const M = Bt(D, T);
      if (!P) return M === 0 ? "start" : "";
      const J = Bt(D, P);
      return e.allowSameDay && M === 0 && J === 0 ? "start-end" : M === 0 ? "start" : J === 0 ? "end" : M > 0 && J < 0 ? "middle" : ""
    }, b = D => {
      const {
        type: T,
        minDate: P,
        maxDate: M,
        currentDate: J
      } = e;
      if (P && Bt(D, P) < 0 || M && Bt(D, M) > 0) return "disabled";
      if (J === null) return "";
      if (Array.isArray(J)) {
        if (T === "multiple") return y(D);
        if (T === "range") return p(D)
      } else if (T === "single") return Bt(D, J) === 0 ? "selected" : "";
      return ""
    }, w = D => {
      if (e.type === "range") {
        if (D === "start" || D === "end") return Mn(D);
        if (D === "start-end") return `${Mn("start")}/${Mn("end")}`
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
      const D = Math.ceil((f.value + d.value) / 7);
      return Array(D).fill({
        type: "placeholder"
      })
    }), k = N(() => {
      const D = [],
        T = e.date.getFullYear(),
        P = e.date.getMonth();
      for (let M = 1; M <= f.value; M++) {
        const J = new Date(T, P, M),
          ce = b(J);
        let W = {
          date: J,
          type: ce,
          text: M,
          bottomInfo: w(ce)
        };
        e.formatter && (W = e.formatter(W)), D.push(W)
      }
      return D
    }), I = N(() => k.value.filter(D => D.type === "disabled")), B = (D, T) => {
      if (a.value) {
        const P = Ue(a.value),
          M = _.value.length,
          ce = (Math.ceil((T.getDate() + d.value) / 7) - 1) * P.height / M;
        Zs(D, P.top + ce + D.scrollTop - Ue(D).top)
      }
    }, S = (D, T) => h(Gb, {
      item: D,
      index: T,
      color: e.color,
      offset: d.value,
      rowHeight: u.value,
      onClick: P => t("click", P),
      onClickDisabledDate: P => t("clickDisabledDate", P)
    }, ze(n, ["top-info", "bottom-info"])), R = () => h("div", {
      ref: a,
      role: "grid",
      class: nt("days")
    }, [C(), (m.value ? k : _).value.map(S)]);
    return $e({
      getTitle: g,
      getHeight: () => r.value,
      setVisible: s,
      scrollToDate: B,
      disabledDays: I
    }), () => h("div", {
      class: nt("month"),
      ref: l
    }, [v(), R()])
  }
});
const [e1] = Y("calendar-header");
var t1 = K({
  name: e1,
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
    const o = N(() => e.date && e.minDate && Ao(du(e.date), e.minDate) < 0),
      s = N(() => e.date && e.minDate && Ao(hu(e.date), e.minDate) < 0),
      a = N(() => e.date && e.maxDate && Ao(fu(e.date), e.maxDate) > 0),
      l = N(() => e.date && e.maxDate && Ao(mu(e.date), e.maxDate) > 0),
      r = () => {
        if (e.showTitle) {
          const g = e.title || Mn("title"),
            y = t.title ? t.title() : g;
          return h("div", {
            class: nt("header-title")
          }, [y])
        }
      },
      c = g => n("clickSubtitle", g),
      u = g => n("panelChange", g),
      d = g => {
        const y = e.switchMode === "year-month",
          p = t[g ? "next-month" : "prev-month"],
          b = t[g ? "next-year" : "prev-year"],
          w = g ? a.value : o.value,
          v = g ? l.value : s.value,
          C = g ? "arrow" : "arrow-left",
          _ = g ? "arrow-double-right" : "arrow-double-left",
          k = () => u((g ? fu : du)(e.date)),
          I = () => u((g ? mu : hu)(e.date)),
          B = h("view", {
            class: nt("header-action", {
              disabled: w
            }),
            onClick: w ? void 0 : k
          }, [p ? p({
            disabled: w
          }) : h(Pe, {
            class: {
              [kt]: !w
            },
            name: C
          }, null)]),
          S = y && h("view", {
            class: nt("header-action", {
              disabled: v
            }),
            onClick: v ? void 0 : I
          }, [b ? b({
            disabled: v
          }) : h(Pe, {
            class: {
              [kt]: !v
            },
            name: _
          }, null)]);
        return g ? [B, S] : [S, B]
      },
      f = () => {
        if (e.showSubtitle) {
          const g = t.subtitle ? t.subtitle({
              date: e.date,
              text: e.subtitle
            }) : e.subtitle,
            y = e.switchMode !== "none";
          return h("div", {
            class: nt("header-subtitle", {
              "with-swicth": y
            }),
            onClick: c
          }, [y ? [d(), h("div", {
            class: nt("header-subtitle-text")
          }, [g]), d(!0)] : g])
        }
      },
      m = () => {
        const {
          firstDayOfWeek: g
        } = e, y = Mn("weekdays"), p = [...y.slice(g, 7), ...y.slice(0, g)];
        return h("div", {
          class: nt("weekdays")
        }, [p.map(b => h("span", {
          class: nt("weekday")
        }, [b]))])
      };
    return () => h("div", {
      class: nt("header")
    }, [r(), f(), m()])
  }
});
const n1 = {
  show: Boolean,
  type: te("single"),
  switchMode: te("none"),
  title: String,
  color: String,
  round: j,
  readonly: Boolean,
  poppable: j,
  maxRange: he(null),
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
var o1 = K({
  name: jb,
  props: n1,
  emits: ["select", "confirm", "unselect", "monthShow", "overRange", "update:show", "clickSubtitle", "clickDisabledDate", "panelChange"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = N(() => e.switchMode !== "none"),
      s = N(() => !e.minDate && !o.value ? ks() : e.minDate),
      a = N(() => !e.maxDate && !o.value ? Nr(ks(), 6) : e.maxDate),
      l = (V, X = s.value, ve = a.value) => X && Bt(V, X) === -1 ? X : ve && Bt(V, ve) === 1 ? ve : V,
      r = (V = e.defaultDate) => {
        const {
          type: X,
          allowSameDay: ve
        } = e;
        if (V === null) return V;
        const we = ks();
        if (X === "range") {
          Array.isArray(V) || (V = []), V.length === 1 && Bt(V[0], we) === 1 && (V = []);
          const ae = s.value,
            ye = a.value,
            A = l(V[0] || we, ae, ye ? ve ? ye : Nl(ye) : void 0),
            H = l(V[1] || (ve ? we : Fl(we)), ae ? ve ? ae : Fl(ae) : void 0);
          return [A, H]
        }
        return X === "multiple" ? Array.isArray(V) ? V.map(ae => l(ae)) : [l(we)] : ((!V || Array.isArray(V)) && (V = we), l(V))
      },
      c = () => {
        const V = Array.isArray(f.value) ? f.value[0] : f.value;
        return V || l(ks())
      };
    let u;
    const d = F(),
      f = F(r()),
      m = F(c()),
      g = F(),
      [y, p] = ls(),
      b = N(() => e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0),
      w = N(() => {
        const V = [];
        if (!s.value || !a.value) return V;
        const X = new Date(s.value);
        X.setDate(1);
        do V.push(new Date(X)), X.setMonth(X.getMonth() + 1); while (Ao(X, a.value) !== 1);
        return V
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
        const V = Ln(d.value),
          X = V + u,
          ve = w.value.map((H, U) => y.value[U].getHeight()),
          we = ve.reduce((H, U) => H + U, 0);
        if (X > we && V > 0) return;
        let ae = 0,
          ye;
        const A = [-1, -1];
        for (let H = 0; H < w.value.length; H++) {
          const U = y.value[H];
          ae <= X && ae + ve[H] >= V && (A[1] = H, ye || (ye = U, A[0] = H), y.value[H].showed || (y.value[H].showed = !0, t("monthShow", {
            date: U.date,
            title: U.getTitle()
          }))), ae += ve[H]
        }
        w.value.forEach((H, U) => {
          const oe = U >= A[0] - 1 && U <= A[1] + 1;
          y.value[U].setVisible(oe)
        }), ye && (g.value = ye)
      },
      k = V => {
        o.value ? m.value = V : Ct(() => {
          w.value.some((X, ve) => Ao(X, V) === 0 ? (d.value && y.value[ve].scrollToDate(d.value, V), !0) : !1), _()
        })
      },
      I = () => {
        if (!(e.poppable && !e.show))
          if (f.value) {
            const V = e.type === "single" ? f.value : f.value[0];
            Qi(V) && k(V)
          } else o.value || Ct(_)
      },
      B = () => {
        e.poppable && !e.show || (o.value || Ct(() => {
          u = Math.floor(Ue(d).height)
        }), I())
      },
      S = (V = r()) => {
        f.value = V, I()
      },
      R = V => {
        const {
          maxRange: X,
          rangePrompt: ve,
          showRangePrompt: we
        } = e;
        return X && Kb(V) > +X ? (we && Ll(ve || Mn("rangePrompt", X)), t("overRange"), !1) : !0
      },
      D = V => {
        m.value = V, t("panelChange", {
          date: V
        })
      },
      T = () => {
        var V;
        return t("confirm", (V = f.value) != null ? V : uu(f.value))
      },
      P = (V, X) => {
        const ve = we => {
          f.value = we, t("select", uu(we))
        };
        if (X && e.type === "range" && !R(V)) {
          ve([V[0], Lr(V[0], +e.maxRange - 1)]);
          return
        }
        ve(V), X && !e.showConfirm && T()
      },
      M = (V, X, ve) => {
        var we;
        return (we = V.find(ae => Bt(X, ae.date) === -1 && Bt(ae.date, ve) === -1)) == null ? void 0 : we.date
      },
      J = N(() => y.value.reduce((V, X) => {
        var ve, we;
        return V.push(...(we = (ve = X.disabledDays) == null ? void 0 : ve.value) != null ? we : []), V
      }, [])),
      ce = V => {
        if (e.readonly || !V.date) return;
        const {
          date: X
        } = V, {
          type: ve
        } = e;
        if (ve === "range") {
          if (!f.value) {
            P([X]);
            return
          }
          const [we, ae] = f.value;
          if (we && !ae) {
            const ye = Bt(X, we);
            if (ye === 1) {
              const A = M(J.value, we, X);
              if (A) {
                const H = Nl(A);
                Bt(we, H) === -1 ? P([we, H]) : P([X])
              } else P([we, X], !0)
            } else ye === -1 ? P([X]) : e.allowSameDay && P([X, X], !0)
          } else P([X])
        } else if (ve === "multiple") {
          if (!f.value) {
            P([X]);
            return
          }
          const we = f.value,
            ae = we.findIndex(ye => Bt(ye, X) === 0);
          if (ae !== -1) {
            const [ye] = we.splice(ae, 1);
            t("unselect", di(ye))
          } else e.maxRange && we.length >= +e.maxRange ? Ll(e.rangePrompt || Mn("rangePrompt", e.maxRange)) : P([...we, X])
        } else P(X, !0)
      },
      W = V => t("update:show", V),
      ne = (V, X) => {
        const ve = X !== 0 || !e.showSubtitle;
        return h(Jb, Be({
          ref: o.value ? g : p(X),
          date: V,
          currentDate: f.value,
          showMonthTitle: ve,
          firstDayOfWeek: b.value,
          lazyRender: o.value ? !1 : e.lazyRender,
          maxDate: a.value,
          minDate: s.value
        }, ze(e, ["type", "color", "showMark", "formatter", "rowHeight", "showSubtitle", "allowSameDay"]), {
          onClick: ce,
          onClickDisabledDate: we => t("clickDisabledDate", we)
        }), ze(n, ["top-info", "bottom-info", "month-title"]))
      },
      ue = () => {
        if (n.footer) return n.footer();
        if (e.showConfirm) {
          const V = n["confirm-text"],
            X = v.value,
            ve = X ? e.confirmDisabledText : e.confirmText;
          return h(St, {
            round: !0,
            block: !0,
            type: "primary",
            color: e.color,
            class: nt("confirm"),
            disabled: X,
            nativeType: "button",
            onClick: T
          }, {
            default: () => [V ? V({
              disabled: X
            }) : ve || Mn("confirm")]
          })
        }
      },
      De = () => h("div", {
        class: [nt("footer"), {
          "van-safe-area-bottom": e.safeAreaInsetBottom
        }]
      }, [ue()]),
      Ne = () => {
        var V, X;
        return h("div", {
          class: nt()
        }, [h(t1, {
          date: (V = g.value) == null ? void 0 : V.date,
          maxDate: a.value,
          minDate: s.value,
          title: e.title,
          subtitle: (X = g.value) == null ? void 0 : X.getTitle(),
          showTitle: e.showTitle,
          showSubtitle: e.showSubtitle,
          switchMode: e.switchMode,
          firstDayOfWeek: b.value,
          onClickSubtitle: ve => t("clickSubtitle", ve),
          onPanelChange: D
        }, ze(n, ["title", "subtitle", "prev-month", "prev-year", "next-month", "next-year"])), h("div", {
          ref: d,
          class: nt("body"),
          onScroll: o.value ? void 0 : _
        }, [o.value ? ne(m.value, 0) : w.value.map(ne)]), De()])
      };
    return re(() => e.show, B), re(() => [e.type, e.minDate, e.maxDate, e.switchMode], () => S(r(f.value))), re(() => e.defaultDate, V => {
      S(V)
    }), $e({
      reset: S,
      scrollToDate: k,
      getSelectedDate: C
    }), yi(B), () => e.poppable ? h(cn, {
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
const i1 = ee(o1),
  [s1, Wo] = Y("image"),
  a1 = {
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
var l1 = K({
  name: s1,
  props: a1,
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
        return e.lazyLoad ? rt(h("img", Be({
          ref: a
        }, b), null), [
          [nv("lazy"), e.src]
        ]) : h("img", Be({
          ref: a,
          src: e.src,
          onLoad: c,
          onError: d
        }, b), null)
      },
      y = ({
        el: b
      }) => {
        const w = () => {
          b === a.value && s.value && u()
        };
        a.value ? w() : Oe(w)
      },
      p = ({
        el: b
      }) => {
        b === a.value && !o.value && d()
      };
    return l && Vt && (l.$on("loaded", y), l.$on("error", p), kn(() => {
      l.$off("loaded", y), l.$off("error", p)
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
const Ia = ee(l1),
  [r1, Et] = Y("card"),
  c1 = {
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
var u1 = K({
  name: r1,
  props: c1,
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
        }, [t.tag ? t.tag() : h(Aa, {
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
        }, [u[0]]), u.length > 1 && h(Re, null, [pe("."), h("span", {
          class: Et("price-decimal")
        }, [u[1]])])])
      };
    return () => {
      var u, d, f;
      const m = t.num || Fe(e.num),
        g = t.price || Fe(e.price),
        y = t["origin-price"] || Fe(e.originPrice),
        p = m || g || y || t.bottom,
        b = g && h("div", {
          class: Et("price")
        }, [t.price ? t.price() : c()]),
        w = y && h("div", {
          class: Et("origin-price")
        }, [t["origin-price"] ? t["origin-price"]() : `${e.currency} ${e.originPrice}`]),
        v = m && h("div", {
          class: Et("num")
        }, [t.num ? t.num() : `x${e.num}`]),
        C = t.footer && h("div", {
          class: Et("footer")
        }, [t.footer()]),
        _ = p && h("div", {
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
const d1 = ee(u1),
  [f1, xn, h1] = Y("cascader"),
  m1 = {
    title: String,
    options: Ze(),
    closeable: j,
    swipeable: j,
    closeIcon: te("cross"),
    showHeader: j,
    modelValue: Z,
    fieldNames: Object,
    placeholder: String,
    activeColor: String
  };
var g1 = K({
  name: f1,
  props: m1,
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
        for (const B of k) {
          if (B[c] === I) return [B];
          if (B[u]) {
            const S = d(B[u], I);
            if (S) return [B, ...S]
          }
        }
      },
      f = () => {
        const {
          options: k,
          modelValue: I
        } = e;
        if (I !== void 0) {
          const B = d(k, I);
          if (B) {
            let S = k;
            o.value = B.map(R => {
              const D = {
                  options: S,
                  selected: R
                },
                T = S.find(P => P[c] === R[c]);
              return T && (S = T[u]), D
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
          const R = {
            options: k[u],
            selected: null
          };
          o.value[I + 1] ? o.value[I + 1] = R : o.value.push(R), Oe(() => {
            s.value++
          })
        }
        const B = o.value.map(R => R.selected).filter(Boolean);
        n("update:modelValue", k[c]);
        const S = {
          value: k[c],
          tabIndex: I,
          selectedOptions: B
        };
        n("change", S), k[u] || n("finish", S)
      },
      g = () => n("close"),
      y = ({
        name: k,
        title: I
      }) => n("clickTab", k, I),
      p = () => e.showHeader ? h("div", {
        class: xn("header")
      }, [h("h2", {
        class: xn("title")
      }, [t.title ? t.title() : e.title]), e.closeable ? h(Pe, {
        name: e.closeIcon,
        class: [xn("close-icon"), kt],
        onClick: g
      }, null) : null]) : null,
      b = (k, I, B) => {
        const {
          disabled: S
        } = k, R = !!(I && k[c] === I[c]), D = k.color || (R ? e.activeColor : void 0), T = t.option ? t.option({
          option: k,
          selected: R
        }) : h("span", null, [k[r]]);
        return h("li", {
          ref: R ? l(B) : void 0,
          role: "menuitemradio",
          class: [xn("option", {
            selected: R,
            disabled: S
          }), k.className],
          style: {
            color: D
          },
          tabindex: S ? void 0 : R ? 0 : -1,
          "aria-checked": R,
          "aria-disabled": S || void 0,
          onClick: () => m(k, B)
        }, [T, R ? h(Pe, {
          name: "success",
          class: xn("selected-icon")
        }, null) : null])
      },
      w = (k, I, B) => h("ul", {
        role: "menu",
        class: xn("options")
      }, [k.map(S => b(S, I, B))]),
      v = (k, I) => {
        const {
          options: B,
          selected: S
        } = k, R = e.placeholder || h1("select"), D = S ? S[r] : R;
        return h(es, {
          title: D,
          titleClass: xn("tab", {
            unselected: !S
          })
        }, {
          default: () => {
            var T, P;
            return [(T = t["options-top"]) == null ? void 0 : T.call(t, {
              tabIndex: I
            }), w(B, S, I), (P = t["options-bottom"]) == null ? void 0 : P.call(t, {
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
        onClickTab: y
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
      k !== void 0 && o.value.map(B => {
        var S;
        return (S = B.selected) == null ? void 0 : S[c]
      }).includes(k) || f()
    }), () => h("div", {
      class: xn()
    }, [p(), C()])
  }
});
const v1 = ee(g1),
  [y1, gu] = Y("cell-group"),
  p1 = {
    title: String,
    inset: Boolean,
    border: j
  };
var b1 = K({
  name: y1,
  inheritAttrs: !1,
  props: p1,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const o = () => {
        var a;
        return h("div", Be({
          class: [gu({
            inset: e.inset
          }), {
            [wa]: e.border && !e.inset
          }]
        }, n, Js()), [(a = t.default) == null ? void 0 : a.call(t)])
      },
      s = () => h("div", {
        class: gu("title", {
          inset: e.inset
        })
      }, [t.title ? t.title() : e.title]);
    return () => e.title || t.title ? h(Re, null, [s(), o()]) : o()
  }
});
const w1 = ee(b1),
  [C1, Ss] = Y("circle");
let _1 = 0;
const vu = e => Math.min(Math.max(+e, 0), 100);

function k1(e, t) {
  const n = e ? 1 : 0;
  return `M ${t/2} ${t/2} m 0, -500 a 500, 500 0 1, ${n} 0, 1000 a 500, 500 0 1, ${n} 0, -1000`
}
const S1 = {
  text: String,
  size: Z,
  fill: te("none"),
  rate: he(100),
  speed: he(0),
  color: [String, Object],
  clockwise: j,
  layerColor: String,
  currentRate: lt(0),
  strokeWidth: he(40),
  strokeLinecap: String,
  startPosition: te("top")
};
var T1 = K({
  name: C1,
  props: S1,
  emits: ["update:currentRate"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = `van-circle-${_1++}`,
      s = N(() => +e.strokeWidth + 1e3),
      a = N(() => k1(e.clockwise, s.value)),
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
        y = e.currentRate,
        p = vu(f),
        b = Math.abs((y - p) * 1e3 / +e.speed),
        w = () => {
          const v = Date.now(),
            _ = Math.min((v - g) / b, 1) * (p - y) + y;
          t("update:currentRate", vu(parseFloat(_.toFixed(1)))), (p > y ? _ < p : _ > p) && (m = Ct(w))
        };
      e.speed ? (m && pa(m), m = Ct(w)) : t("update:currentRate", p)
    }, {
      immediate: !0
    });
    const r = () => {
        const {
          strokeWidth: m,
          currentRate: g,
          strokeLinecap: y
        } = e, p = 3140 * g / 100, b = wn(e.color) ? `url(#${o})` : e.color, w = {
          stroke: b,
          strokeWidth: `${+m+1}px`,
          strokeLinecap: y,
          strokeDasharray: `${p}px 3140px`
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
        const m = Object.keys(f).sort((g, y) => parseFloat(g) - parseFloat(y)).map((g, y) => h("stop", {
          key: y,
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
const x1 = ee(T1),
  [Dh, E1] = Y("row"),
  Bh = Symbol(Dh),
  A1 = {
    tag: te("div"),
    wrap: j,
    align: String,
    gutter: {
      type: [String, Number, Array],
      default: 0
    },
    justify: String
  };
var I1 = K({
  name: Dh,
  props: A1,
  setup(e, {
    slots: t
  }) {
    const {
      children: n,
      linkChildren: o
    } = Tt(Bh), s = N(() => {
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
              y = d - g;
            c.push({
              left: g,
              right: y
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
const [P1, O1] = Y("col"), R1 = {
  tag: te("div"),
  span: he(0),
  offset: Z
};
var D1 = K({
  name: P1,
  props: R1,
  setup(e, {
    slots: t
  }) {
    const {
      parent: n,
      index: o
    } = yt(Bh), s = N(() => {
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
        class: O1({
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
const B1 = ee(D1),
  [$h, $1] = Y("collapse"),
  Mh = Symbol($h),
  M1 = {
    border: j,
    accordion: Boolean,
    modelValue: {
      type: [String, Number, Array],
      default: ""
    }
  };
var L1 = K({
  name: $h,
  props: M1,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      linkChildren: o,
      children: s
    } = Tt(Mh), a = u => {
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
      } = u, g = s.filter(y => y.disabled && f ? y.expanded.value : d ?? !y.expanded.value).map(y => y.itemName.value);
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
        class: [$1(), {
          [wa]: e.border
        }]
      }, [(u = n.default) == null ? void 0 : u.call(n)])
    }
  }
});
const N1 = ee(L1),
  [F1, Ts] = Y("collapse-item"),
  V1 = ["icon", "title", "value", "label", "right-icon"],
  z1 = ke({}, Ea, {
    name: Z,
    isLink: j,
    disabled: Boolean,
    readonly: Boolean,
    lazyRender: j
  });
var H1 = K({
  name: F1,
  props: z1,
  setup(e, {
    slots: t
  }) {
    const n = F(),
      o = F(),
      {
        parent: s,
        index: a
      } = yt(Mh);
    if (!s) return;
    const l = N(() => {
        var p;
        return (p = e.name) != null ? p : a.value
      }),
      r = N(() => s.isExpanded(l.value)),
      c = F(r.value),
      u = Sr(() => c.value || !e.lazyRender),
      d = () => {
        r.value ? n.value && (n.value.style.height = "") : c.value = !1
      };
    re(r, (p, b) => {
      if (b === null) return;
      p && (c.value = !0), (p ? Oe : Ct)(() => {
        if (!o.value || !n.value) return;
        const {
          offsetHeight: v
        } = o.value;
        if (v) {
          const C = `${v}px`;
          n.value.style.height = p ? "0" : C, so(() => {
            n.value && (n.value.style.height = p ? C : "0")
          })
        } else d()
      })
    });
    const f = (p = !r.value) => {
        s.toggle(l.value, p)
      },
      m = () => {
        !e.disabled && !e.readonly && f()
      },
      g = () => {
        const {
          border: p,
          disabled: b,
          readonly: w
        } = e, v = ze(e, Object.keys(Ea));
        return w && (v.isLink = !1), (b || w) && (v.clickable = !1), h(un, Be({
          role: "button",
          class: Ts("title", {
            disabled: b,
            expanded: r.value,
            borderless: !p
          }),
          "aria-expanded": String(r.value),
          onClick: m
        }, v), ze(t, V1))
      },
      y = u(() => {
        var p;
        return rt(h("div", {
          ref: n,
          class: Ts("wrapper"),
          onTransitionend: d
        }, [h("div", {
          ref: o,
          class: Ts("content")
        }, [(p = t.default) == null ? void 0 : p.call(t)])]), [
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
    }, [g(), y()])
  }
});
const U1 = ee(H1),
  W1 = ee(rp),
  [j1, yu, ol] = Y("contact-card"),
  Q1 = {
    tel: String,
    name: String,
    type: te("add"),
    addText: String,
    editable: j
  };
var K1 = K({
  name: j1,
  props: Q1,
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
      class: yu([e.type]),
      border: !1,
      isLink: e.editable,
      titleClass: yu("title"),
      onClick: n
    }, {
      title: o
    })
  }
});
const Y1 = ee(K1),
  [q1, jo, qn] = Y("contact-edit"),
  Vl = {
    tel: "",
    name: ""
  },
  G1 = {
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
      default: hd
    }
  };
var Z1 = K({
  name: q1,
  props: G1,
  emits: ["save", "delete", "changeDefault"],
  setup(e, {
    emit: t
  }) {
    const n = Je(ke({}, Vl, e.contactInfo)),
      o = () => {
        e.isSaving || t("save", n)
      },
      s = () => t("delete", n),
      a = () => h("div", {
        class: jo("buttons")
      }, [h(St, {
        block: !0,
        round: !0,
        type: "primary",
        text: qn("save"),
        class: jo("button"),
        loading: e.isSaving,
        nativeType: "submit"
      }, null), e.isEdit && h(St, {
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
    return re(() => e.contactInfo, c => ke(n, Vl, c)), () => h(Ar, {
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
const X1 = ee(Z1),
  [J1, En, ew] = Y("contact-list"),
  tw = {
    list: Array,
    addText: String,
    modelValue: et,
    defaultTagText: String
  };
var nw = K({
  name: J1,
  props: tw,
  emits: ["add", "edit", "select", "update:modelValue"],
  setup(e, {
    emit: t
  }) {
    const n = (o, s) => {
      const a = () => {
          t("update:modelValue", o.id), t("select", o, s)
        },
        l = () => h($r, {
          class: En("radio"),
          name: o.id,
          iconSize: 18
        }, null),
        r = () => h(Pe, {
          name: "edit",
          class: En("edit"),
          onClick: u => {
            u.stopPropagation(), t("edit", o, s)
          }
        }, null),
        c = () => {
          const u = [`${o.name}，${o.tel}`];
          return o.isDefault && e.defaultTagText && u.push(h(Aa, {
            type: "primary",
            round: !0,
            class: En("item-tag")
          }, {
            default: () => [e.defaultTagText]
          })), u
        };
      return h(un, {
        key: o.id,
        isLink: !0,
        center: !0,
        class: En("item"),
        titleClass: En("item-title"),
        onClick: a
      }, {
        icon: r,
        title: c,
        "right-icon": l
      })
    };
    return () => h("div", {
      class: En()
    }, [h(Dr, {
      modelValue: e.modelValue,
      class: En("group")
    }, {
      default: () => [e.list && e.list.map(n)]
    }), h("div", {
      class: [En("bottom"), "van-safe-area-bottom"]
    }, [h(St, {
      round: !0,
      block: !0,
      type: "primary",
      class: En("add"),
      text: e.addText || ew("addContact"),
      onClick: () => t("add")
    }, null)])])
  }
});
const ow = ee(nw);

function iw(e, t) {
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
const [sw, aw] = Y("count-down"), lw = {
  time: he(0),
  format: te("HH:mm:ss"),
  autoStart: j,
  millisecond: Boolean
};
var rw = K({
  name: sw,
  props: lw,
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
    } = Iy({
      time: +e.time,
      millisecond: e.millisecond,
      onChange: u => t("change", u),
      onFinish: () => t("finish")
    }), r = N(() => iw(e.format, l.value)), c = () => {
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
      class: aw()
    }, [n.default ? n.default(l.value) : r.value])
  }
});
const cw = ee(rw);

function pu(e) {
  const t = new Date(e * 1e3);
  return `${t.getFullYear()}.${Xt(t.getMonth()+1)}.${Xt(t.getDate())}`
}
const uw = e => (e / 10).toFixed(e % 10 === 0 ? 0 : 1),
  bu = e => (e / 100).toFixed(e % 100 === 0 ? 0 : e % 10 === 0 ? 1 : 2),
  [dw, mn, il] = Y("coupon");
var fw = K({
  name: dw,
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
        return `${pu(s)} - ${pu(a)}`
      }),
      n = N(() => {
        const {
          coupon: s,
          currency: a
        } = e;
        if (s.valueDesc) return [s.valueDesc, h("span", null, [s.unitDesc || ""])];
        if (s.denominations) {
          const l = bu(s.denominations);
          return [h("span", null, [a]), ` ${l}`]
        }
        return s.discount ? il("discount", uw(s.discount)) : ""
      }),
      o = N(() => {
        const s = bu(e.coupon.originCondition || 0);
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
      }, [t.value]), !l && h(Mr, {
        class: mn("corner"),
        modelValue: s
      }, null)])]), r && h("p", {
        class: mn("description")
      }, [r])])
    }
  }
});
const zl = ee(fw),
  [hw, wu, Hl] = Y("coupon-cell"),
  mw = {
    title: String,
    border: j,
    editable: j,
    coupons: Ze(),
    currency: te("¥"),
    chosenCoupon: {
      type: [Number, Array],
      default: -1
    }
  },
  gw = e => {
    const {
      value: t,
      denominations: n
    } = e;
    return Fe(t) ? t : Fe(n) ? n : 0
  };

function vw({
  coupons: e,
  chosenCoupon: t,
  currency: n
}) {
  let o = 0,
    s = !1;
  return (Array.isArray(t) ? t : [t]).forEach(a => {
    const l = e[+a];
    l && (s = !0, o += gw(l))
  }), s ? `-${n} ${(o/100).toFixed(2)}` : e.length === 0 ? Hl("noCoupon") : Hl("count", e.length)
}
var yw = K({
  name: hw,
  props: mw,
  setup(e) {
    return () => {
      const t = Array.isArray(e.chosenCoupon) ? e.chosenCoupon.length : e.coupons[+e.chosenCoupon];
      return h(un, {
        class: wu(),
        value: vw(e),
        title: e.title || Hl("title"),
        border: e.border,
        isLink: e.editable,
        valueClass: wu("value", {
          selected: t
        })
      }, null)
    }
  }
});
const pw = ee(yw),
  [bw, xs] = Y("empty"),
  ww = {
    image: te("default"),
    imageSize: [Number, String, Array],
    description: String
  };
var Cw = K({
  name: bw,
  props: ww,
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
      y = () => h("svg", {
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
      p = () => h("svg", {
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
          error: y,
          search: p,
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
const Lh = ee(Cw),
  [_w, gn, Qo] = Y("coupon-list"),
  kw = {
    code: te(""),
    coupons: Ze(),
    currency: te("¥"),
    showCount: j,
    emptyImage: String,
    enabledTitle: String,
    disabledTitle: String,
    disabledCoupons: Ze(),
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
var Sw = K({
  name: _w,
  props: kw,
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
    }, y = () => h(Lh, {
      image: e.emptyImage
    }, {
      default: () => [h("p", {
        class: gn("empty-tip")
      }, [Qo("noCoupon")])]
    }), p = () => {
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
      }, null), h(St, {
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
      } = e, _ = e.showCount ? ` (${v.length})` : "", k = (e.enabledTitle || Qo("enable")) + _, I = (B = [], S = 0) => B.includes(S) ? B.filter(R => R !== S) : [...B, S];
      return h(es, {
        title: k
      }, {
        default: () => {
          var B;
          return [h("div", {
            class: gn("list", {
              "with-bottom": e.showCloseButton
            }),
            style: {
              height: `${c.value}px`
            }
          }, [v.map((S, R) => h(zl, {
            key: S.id,
            ref: s(R),
            coupon: S,
            chosen: Array.isArray(C) ? C.includes(R) : R === C,
            currency: e.currency,
            onClick: () => t("change", Array.isArray(C) ? I(C, R) : R)
          }, null)), !v.length && y(), (B = n["list-footer"]) == null ? void 0 : B.call(n)])]
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
          }, [v.map(I => h(zl, {
            disabled: !0,
            key: I.id,
            coupon: I,
            currency: e.currency
          }, null)), !v.length && y(), (k = n["disabled-list-footer"]) == null ? void 0 : k.call(n)])]
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
    }, [p(), h(Sa, {
      active: r.value,
      "onUpdate:active": v => r.value = v,
      class: gn("tab")
    }, {
      default: () => [b(), w()]
    }), h("div", {
      class: gn("bottom")
    }, [n["list-button"] ? n["list-button"]() : rt(h(St, {
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
const Tw = ee(Sw),
  Cu = new Date().getFullYear(),
  [xw] = Y("date-picker"),
  Ew = ke({}, Ih, {
    columnsType: {
      type: Array,
      default: () => ["year", "month", "day"]
    },
    minDate: {
      type: Date,
      default: () => new Date(Cu - 10, 0, 1),
      validator: Qi
    },
    maxDate: {
      type: Date,
      default: () => new Date(Cu + 10, 11, 31),
      validator: Qi
    }
  });
var Aw = K({
  name: xw,
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
        } = e, B = I.indexOf(_), S = s.value ? e.modelValue[B] : o.value[B];
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
          B = c(_) && d(k) ? e.maxDate.getDate() : Oh(_, k);
        return si(I, B, "day", e.formatter, e.filter)
      },
      y = () => {
        var _;
        return (_ = a.value) == null ? void 0 : _.confirm()
      },
      p = () => o.value,
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
      confirm: y,
      getSelectedDate: p
    }), () => h(xa, Be({
      ref: a,
      modelValue: o.value,
      "onUpdate:modelValue": _ => o.value = _,
      columns: b.value,
      onChange: w,
      onCancel: v,
      onConfirm: C
    }, ze(e, Ph)), n)
  }
});
const Iw = ee(Aw),
  [Pw, qt, Es] = Y("dialog"),
  Ow = ke({}, bi, {
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
  Rw = [...kr, "transition", "closeOnPopstate"];
var Dw = K({
  name: Pw,
  props: Ow,
  emits: ["confirm", "cancel", "keydown", "update:show"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = Je({
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
      d = py(w => {
        var v, C;
        if (w.target !== ((C = (v = o.value) == null ? void 0 : v.popupRef) == null ? void 0 : C.value)) return;
        ({
          Enter: e.showConfirmButton ? u : pl,
          Escape: e.showCancelButton ? c : pl
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
      y = () => h("div", {
        class: [Uf, qt("footer")]
      }, [e.showCancelButton && h(St, {
        size: "large",
        text: e.cancelButtonText || Es("cancel"),
        class: qt("cancel"),
        style: {
          color: e.cancelButtonColor
        },
        loading: s.cancel,
        disabled: e.cancelButtonDisabled,
        onClick: c
      }, null), e.showConfirmButton && h(St, {
        size: "large",
        text: e.confirmButtonText || Es("confirm"),
        class: [qt("confirm"), {
          [Wf]: e.showCancelButton
        }],
        style: {
          color: e.confirmButtonColor
        },
        loading: s.confirm,
        disabled: e.confirmButtonDisabled,
        onClick: u
      }, null)]),
      p = () => h(Gf, {
        class: qt("footer")
      }, {
        default: () => [e.showCancelButton && h($l, {
          type: "warning",
          text: e.cancelButtonText || Es("cancel"),
          class: qt("cancel"),
          color: e.cancelButtonColor,
          loading: s.cancel,
          disabled: e.cancelButtonDisabled,
          onClick: c
        }, null), e.showConfirmButton && h($l, {
          type: "danger",
          text: e.confirmButtonText || Es("confirm"),
          class: qt("confirm"),
          color: e.confirmButtonColor,
          loading: s.confirm,
          disabled: e.confirmButtonDisabled,
          onClick: u
        }, null)]
      }),
      b = () => n.footer ? n.footer() : e.theme === "round-button" ? p() : y();
    return () => {
      const {
        width: w,
        title: v,
        theme: C,
        message: _,
        className: k
      } = e;
      return h(cn, Be({
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
      }, ze(e, Rw)), {
        default: () => [f(), g(), b()]
      })
    }
  }
});
const Bw = ee(Dw),
  [$w, Mw] = Y("divider"),
  Lw = {
    dashed: Boolean,
    hairline: j,
    vertical: Boolean,
    contentPosition: te("center")
  };
var Nw = K({
  name: $w,
  props: Lw,
  setup(e, {
    slots: t
  }) {
    return () => {
      var n;
      return h("div", {
        role: "separator",
        class: Mw({
          dashed: e.dashed,
          hairline: e.hairline,
          vertical: e.vertical,
          [`content-${e.contentPosition}`]: !!t.default && !e.vertical
        })
      }, [!e.vertical && ((n = t.default) == null ? void 0 : n.call(t))])
    }
  }
});
const Fw = ee(Nw),
  [Nh, As] = Y("dropdown-menu"),
  Vw = {
    overlay: j,
    zIndex: Z,
    duration: he(.2),
    direction: te("down"),
    activeColor: String,
    autoLocate: Boolean,
    closeOnClickOutside: j,
    closeOnClickOverlay: j,
    swipeThreshold: Z
  },
  Fh = Symbol(Nh);
var zw = K({
  name: Nh,
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
      } = Tt(Fh),
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
      y = () => {
        if (s.value) {
          const v = Ue(s);
          e.direction === "down" ? a.value = v.bottom : a.value = jt.value - v.top
        }
      },
      p = () => {
        u.value && y()
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
          class: [As("item", {
            disabled: k,
            grow: d.value
          }), {
            [kt]: !k
          }],
          onClick: () => {
            k || b(C)
          }
        }, [h("span", {
          class: [As("title", {
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
      updateOffset: y
    }), ba(o, g), st("scroll", p, {
      target: c,
      passive: !0
    }), () => {
      var v;
      return h("div", {
        ref: o,
        class: As()
      }, [h("div", {
        ref: s,
        style: f.value,
        class: As("bar", {
          opened: u.value,
          scrollable: d.value
        })
      }, [l.map(w)]), (v = t.default) == null ? void 0 : v.call(t)])
    }
  }
});
const [Hw, Is] = Y("dropdown-item"), Uw = {
  title: String,
  options: Ze(),
  disabled: Boolean,
  teleport: [String, Object],
  lazyRender: j,
  modelValue: et,
  titleClass: et
};
var Ww = K({
  name: Hw,
  inheritAttrs: !1,
  props: Uw,
  emits: ["open", "opened", "close", "closed", "change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n,
    attrs: o
  }) {
    const s = Je({
        showPopup: !1,
        transition: !0,
        showWrapper: !1
      }),
      a = F(),
      {
        parent: l,
        index: r
      } = yt(Fh);
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
      y = (v = !s.showPopup, C = {}) => {
        v !== s.showPopup && (s.showPopup = v, s.transition = !C.immediate, v && (l.updateOffset(), s.showWrapper = !0))
      },
      p = () => {
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
        }, B = () => {
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
          value: B
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
          direction: B,
          closeOnClickOverlay: S
        } = l.props, R = Un(_);
        let D = v.value;
        if (C && a.value) {
          const T = My(a.value);
          T && (D -= Ue(T).top)
        }
        return B === "down" ? R.top = `${D}px` : R.bottom = `${D}px`, rt(h("div", Be({
          ref: a,
          style: R,
          class: Is([B]),
          onClick: g
        }, o), [h(cn, {
          show: s.showPopup,
          "onUpdate:show": T => s.showPopup = T,
          role: "menu",
          class: Is("content"),
          overlay: k,
          position: B === "down" ? "top" : "bottom",
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
            var T;
            return [e.options.map(b), (T = n.default) == null ? void 0 : T.call(n)]
          }
        })]), [
          [dt, s.showWrapper]
        ])
      };
    return $e({
      state: s,
      toggle: y,
      renderTitle: p
    }), () => e.teleport ? h($o, {
      to: e.teleport
    }, {
      default: () => [w()]
    }) : w()
  }
});
const jw = ee(Ww),
  Qw = ee(zw),
  Kw = {
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
  [Yw, _u] = Y("floating-bubble");
var qw = K({
  name: Yw,
  inheritAttrs: !1,
  props: Kw,
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
    const y = C => {
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
        const _ = ze(a.value, ["x", "y"]);
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
            const C = ze(a.value, ["x", "y"]);
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
      const C = rt(h("div", Be({
        class: _u(),
        ref: s,
        onTouchstartPassive: y,
        onTouchend: b,
        onTouchcancel: b,
        onClickCapture: w,
        style: u.value
      }, o), [t.default ? t.default() : h(hp, {
        name: e.icon,
        class: _u("icon")
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
const Gw = ee(qw),
  Zw = {
    height: he(0),
    anchors: Ze(),
    duration: he(.3),
    contentDraggable: j,
    lockScroll: Boolean,
    safeAreaInsetBottom: j
  },
  [Xw, Ps] = Y("floating-panel");
var Jw = K({
  name: Xw,
  props: Zw,
  emits: ["heightChange", "update:height"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const s = F(),
      a = F(),
      l = Tr(() => +e.height, C => t("update:height", C)),
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
    const y = Kt(),
      p = C => {
        y.start(C), u.value = !0, m = -l.value, g = -1
      },
      b = C => {
        var _;
        y.move(C);
        const k = C.target;
        if (a.value === k || (_ = a.value) != null && _.contains(k)) {
          const {
            scrollTop: B
          } = a.value;
          if (g = Math.max(g, B), !e.contentDraggable) return;
          if (-m < r.value.max) Ge(C, !0);
          else if (!(B <= 0 && y.deltaY.value > 0) || g > 0) return
        }
        const I = y.deltaY.value + m;
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
    }), th(s, () => e.lockScroll || u.value), st("touchmove", b, {
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
        onTouchstartPassive: p,
        onTouchend: w,
        onTouchcancel: w
      }, [v(), h("div", {
        class: Ps("content"),
        ref: a
      }, [(C = n.default) == null ? void 0 : C.call(n)])])
    }
  }
});
const eC = ee(Jw),
  [Vh, tC] = Y("grid"),
  nC = {
    square: Boolean,
    center: j,
    border: j,
    gutter: Z,
    reverse: Boolean,
    iconSize: Z,
    direction: String,
    clickable: Boolean,
    columnNum: he(4)
  },
  zh = Symbol(Vh);
var oC = K({
  name: Vh,
  props: nC,
  setup(e, {
    slots: t
  }) {
    const {
      linkChildren: n
    } = Tt(zh);
    return n({
      props: e
    }), () => {
      var o;
      return h("div", {
        style: {
          paddingLeft: Ie(e.gutter)
        },
        class: [tC(), {
          [Uf]: e.border && !e.gutter
        }]
      }, [(o = t.default) == null ? void 0 : o.call(t)])
    }
  }
});
const iC = ee(oC),
  [sC, Os] = Y("grid-item"),
  aC = ke({}, po, {
    dot: Boolean,
    text: String,
    icon: String,
    badge: Z,
    iconColor: String,
    iconPrefix: String,
    badgeProps: Object
  });
var lC = K({
  name: sC,
  props: aC,
  setup(e, {
    slots: t
  }) {
    const {
      parent: n,
      index: o
    } = yt(zh), s = Mo();
    if (!n) return;
    const a = N(() => {
        const {
          square: d,
          gutter: f,
          columnNum: m
        } = n.props, g = `${100/+m}%`, y = {
          flexBasis: g
        };
        if (d) y.paddingTop = g;
        else if (f) {
          const p = Ie(f);
          y.paddingRight = p, o.value >= +m && (y.marginTop = p)
        }
        return y
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
        if (t.icon) return h(Lo, Be({
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
        reverse: y,
        direction: p,
        clickable: b
      } = n.props, w = [Os("content", [p, {
        center: d,
        square: m,
        reverse: y,
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
const rC = ee(lC),
  [cC, ku] = Y("highlight"),
  uC = {
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
var dC = K({
  name: cC,
  props: uC,
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
          let y;
          for (; y = g.exec(l);) {
            const p = y.index,
              b = g.lastIndex;
            if (p >= b) {
              g.lastIndex++;
              continue
            }
            f.push({
              start: p,
              end: b,
              highlight: !0
            })
          }
          return f
        }, []);
        u = u.sort((f, m) => f.start - m.start).reduce((f, m) => {
          const g = f[f.length - 1];
          if (!g || m.start > g.end) {
            const y = g ? g.end : 0,
              p = m.start;
            y !== p && f.push({
              start: y,
              end: p,
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
            class: [ku("tag"), s]
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
        class: ku()
      }, {
        default: () => [n()]
      })
    }
  }
});
const fC = ee(dC),
  Su = e => Math.sqrt((e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2),
  hC = e => ({
    x: (e[0].clientX + e[1].clientX) / 2,
    y: (e[0].clientY + e[1].clientY) / 2
  }),
  sl = Y("image-preview")[1],
  Tu = 2.6,
  mC = {
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
var gC = K({
  props: mC,
  emits: ["scale", "close", "longPress"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = Je({
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
          moving: De,
          zooming: Ne,
          initializing: V
        } = o, X = {
          transitionDuration: Ne || De || V ? "0s" : ".3s"
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
          const De = W / o.scale;
          if (o.scale = W, ne) {
            const Ne = Ue((ue = a.value) == null ? void 0 : ue.$el),
              V = {
                x: Ne.width * .5,
                y: Ne.height * .5
              },
              X = o.moveX - (ne.x - Ne.left - V.x) * (De - 1),
              ve = o.moveY - (ne.y - Ne.top - V.y) * (De - 1);
            o.moveX = ht(X, -f.value, f.value), o.moveY = ht(ve, -m.value, m.value)
          } else o.moveX = 0, o.moveY = c.value ? u : 0;
          t("scale", {
            scale: W,
            index: e.active
          })
        }
      },
      y = () => {
        g(1)
      },
      p = () => {
        const W = o.scale > 1 ? 1 : 2;
        g(W, W === 2 || c.value ? {
          x: s.startX.value,
          y: s.startY.value
        } : void 0)
      };
    let b, w, v, C, _, k, I, B, S = !1;
    const R = W => {
        const {
          touches: ne
        } = W;
        if (b = ne.length, b === 2 && e.disableZoom) return;
        const {
          offsetX: ue
        } = s;
        s.start(W), w = o.moveX, v = o.moveY, B = Date.now(), S = !1, o.moving = b === 1 && (o.scale !== 1 || c.value), o.zooming = b === 2 && !ue.value, o.zooming && (C = o.scale, _ = Su(ne))
      },
      D = W => {
        const {
          touches: ne
        } = W;
        if (s.move(W), o.moving) {
          const {
            deltaX: ue,
            deltaY: De
          } = s, Ne = ue.value + w, V = De.value + v;
          if ((e.vertical ? s.isVertical() && Math.abs(V) > m.value : s.isHorizontal() && Math.abs(Ne) > f.value) && !S) {
            o.moving = !1;
            return
          }
          S = !0, Ge(W, !0), o.moveX = ht(Ne, -f.value, f.value), o.moveY = ht(V, -m.value, m.value)
        }
        if (o.zooming && (Ge(W, !0), ne.length === 2)) {
          const ue = Su(ne),
            De = C * ue / _;
          k = hC(ne), g(De, k)
        }
      },
      T = W => {
        var ne;
        const ue = (ne = l.value) == null ? void 0 : ne.$el;
        if (!ue) return;
        const De = ue.firstElementChild,
          Ne = W.target === ue,
          V = De == null ? void 0 : De.contains(W.target);
        !e.closeOnClickImage && V || !e.closeOnClickOverlay && Ne || t("close")
      },
      P = W => {
        if (b > 1) return;
        const ne = Date.now() - B,
          ue = 250;
        s.isTap.value && (ne < ue ? e.doubleScale ? I ? (clearTimeout(I), I = null, p()) : I = setTimeout(() => {
          T(W), I = null
        }, ue) : T(W) : ne > Qf && t("longPress"))
      },
      M = W => {
        let ne = !1;
        if ((o.moving || o.zooming) && (ne = !0, o.moving && w === o.moveX && v === o.moveY && (ne = !1), !W.touches.length)) {
          o.zooming && (o.moveX = ht(o.moveX, -f.value, f.value), o.moveY = ht(o.moveY, -m.value, m.value), o.zooming = !1), o.moving = !1, w = 0, v = 0, C = 1, o.scale < 1 && y();
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
          imageRatio: De
        } = o;
        r.value = o.imageRatio > ue && De < Tu, c.value = o.imageRatio > ue && De >= Tu, c.value && (u = (De * W - ne) / 2, o.moveY = u, o.initializing = !0, Ct(() => {
          o.initializing = !1
        })), y()
      },
      ce = W => {
        const {
          naturalWidth: ne,
          naturalHeight: ue
        } = W.target;
        o.imageRatio = ue / ne, J()
      };
    return re(() => e.active, y), re(() => e.show, W => {
      W || y()
    }), re(() => [e.rootWidth, e.rootHeight], J), st("touchmove", D, {
      target: N(() => {
        var W;
        return (W = l.value) == null ? void 0 : W.$el
      })
    }), $e({
      resetScale: y
    }), () => {
      const W = {
        loading: () => h(rn, {
          type: "spinner"
        }, null)
      };
      return h(Er, {
        ref: l,
        class: sl("swipe-item"),
        onTouchstartPassive: R,
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
const [vC, Ko] = Y("image-preview"), yC = ["show", "teleport", "transition", "overlayStyle", "closeOnPopstate"], pC = {
  show: Boolean,
  loop: j,
  images: Ze(),
  minZoom: he(1 / 3),
  maxZoom: he(3),
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
  swipeDuration: he(300),
  startPosition: he(0),
  showIndicators: Boolean,
  closeOnPopstate: j,
  closeOnClickImage: j,
  closeOnClickOverlay: j,
  closeIconPosition: te("top-right"),
  teleport: [String, Object]
};
var Hh = K({
  name: vC,
  props: pC,
  emits: ["scale", "close", "closed", "change", "longPress", "update:show"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = F(),
      a = Je({
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
      y = () => {
        a.disableZoom = !1
      },
      p = () => h(xr, {
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
        onDragEnd: y,
        onDragStart: g
      }, {
        default: () => [e.images.map((C, _) => h(gC, {
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
          class: [Ko("close-icon", e.closeIconPosition), kt],
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
    }), () => h(cn, Be({
      class: [Ko(), e.className],
      overlayClass: [Ko("overlay"), e.overlayClass],
      onClosed: w,
      "onUpdate:show": c
    }, ze(e, yC)), {
      default: () => [b(), p(), f(), m()]
    })
  }
});
let zs;
const bC = {
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

function wC() {
  ({
    instance: zs
  } = Or({
    setup() {
      const {
        state: e,
        toggle: t
      } = Pr(), n = () => {
        e.images = []
      };
      return () => h(Hh, Be(e, {
        onClosed: n,
        "onUpdate:show": t
      }), null)
    }
  }))
}
const CC = (e, t = 0) => {
    if (Vt) return zs || wC(), e = Array.isArray(e) ? {
      images: e,
      startPosition: t
    } : e, zs.open(ke({}, bC, e)), zs
  },
  _C = ee(Hh);

function kC() {
  return Array(26).fill("").map((n, o) => String.fromCharCode(65 + o))
}
const [Uh, al] = Y("index-bar"), SC = {
  sticky: j,
  zIndex: Z,
  teleport: [String, Object],
  highlightColor: String,
  stickyOffsetTop: lt(0),
  indexList: {
    type: Array,
    default: kC
  }
}, Wh = Symbol(Uh);
var TC = K({
  name: Uh,
  props: SC,
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
      } = Tt(Wh);
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
      g = (S, R) => {
        for (let D = c.length - 1; D >= 0; D--) {
          const T = D > 0 ? R[D - 1].height : 0,
            P = e.sticky ? T + e.stickyOffsetTop : 0;
          if (S + P >= R[D].top) return D
        }
        return -1
      },
      y = S => c.find(R => String(R.index) === S),
      p = () => {
        if (Bo(o)) return;
        const {
          sticky: S,
          indexList: R
        } = e, D = Ln(r.value), T = Ue(r), P = c.map(J => J.getRect(r.value, T));
        let M = -1;
        if (d) {
          const J = y(d);
          if (J) {
            const ce = J.getRect(r.value, T);
            e.sticky && e.stickyOffsetTop ? M = g(ce.top - e.stickyOffsetTop, P) : M = g(ce.top, P)
          }
        } else M = g(D, P);
        a.value = R[M], S && c.forEach((J, ce) => {
          const {
            state: W,
            $el: ne
          } = J;
          if (ce === M || ce === M - 1) {
            const ue = ne.getBoundingClientRect();
            W.left = ue.left, W.width = ue.width
          } else W.left = null, W.width = null;
          if (ce === M) W.active = !0, W.top = Math.max(e.stickyOffsetTop, P[ce].top - D) + T.top;
          else if (ce === M - 1 && d === "") {
            const ue = P[M].top - D;
            W.active = ue > 0, W.top = ue + T.top - P[ce].height
          } else W.active = !1
        }), d = ""
      },
      b = () => {
        Oe(p)
      };
    st("scroll", p, {
      target: r,
      passive: !0
    }), at(b), re(() => e.indexList, b), re(a, S => {
      S && t("change", S)
    });
    const w = () => e.indexList.map(S => {
        const R = S === a.value;
        return h("span", {
          class: al("index", {
            active: R
          }),
          style: R ? m.value : void 0,
          "data-index": S
        }, [S])
      }),
      v = S => {
        d = String(S);
        const R = y(d);
        if (R) {
          const D = Ln(r.value),
            T = Ue(r),
            {
              offsetHeight: P
            } = document.documentElement;
          if (R.$el.scrollIntoView(), D === P - T.height) {
            p();
            return
          }
          e.sticky && e.stickyOffsetTop && (Oo() === P - T.height ? Ji(Oo()) : Ji(Oo() - e.stickyOffsetTop)), t("select", R.index)
        }
      },
      C = S => {
        const {
          index: R
        } = S.dataset;
        R && v(R)
      },
      _ = S => {
        C(S.target)
      };
    let k;
    const I = S => {
        if (l.move(S), l.isVertical()) {
          Ge(S);
          const {
            clientX: R,
            clientY: D
          } = S.touches[0], T = document.elementFromPoint(R, D);
          if (T) {
            const {
              index: P
            } = T.dataset;
            P && k !== P && (k = P, C(T))
          }
        }
      },
      B = () => h("div", {
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
        default: () => [B()]
      }) : B(), (S = n.default) == null ? void 0 : S.call(n)])
    }
  }
});
const [xC, EC] = Y("index-anchor"), AC = {
  index: Z
};
var IC = K({
  name: xC,
  props: AC,
  setup(e, {
    slots: t
  }) {
    const n = Je({
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
      } = yt(Wh);
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
          [Cr]: c
        }]
      }, [t.default ? t.default() : e.index])])
    }
  }
});
const PC = ee(IC),
  OC = ee(TC),
  [RC, Yo, DC] = Y("list"),
  BC = {
    error: Boolean,
    offset: he(300),
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
var $C = K({
  name: RC,
  props: BC,
  emits: ["load", "update:error", "update:loading"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(e.loading),
      s = F(),
      a = F(),
      l = d0(),
      r = pi(s),
      c = N(() => e.scroller || r.value),
      u = () => {
        Oe(() => {
          if (o.value || e.finished || e.disabled || e.error || (l == null ? void 0 : l.value) === !1) return;
          const {
            direction: y
          } = e, p = +e.offset, b = Ue(c);
          if (!b.height || Bo(s)) return;
          let w = !1;
          const v = Ue(a);
          y === "up" ? w = b.top - v.top <= p : w = v.bottom - b.bottom <= p, w && (o.value = !0, t("update:loading", !0), t("load"))
        })
      },
      d = () => {
        if (e.finished) {
          const y = n.finished ? n.finished() : e.finishedText;
          if (y) return h("div", {
            class: Yo("finished-text")
          }, [y])
        }
      },
      f = () => {
        t("update:error", !1), u()
      },
      m = () => {
        if (e.error) {
          const y = n.error ? n.error() : e.errorText;
          if (y) return h("div", {
            role: "button",
            class: Yo("error-text"),
            tabindex: 0,
            onClick: f
          }, [y])
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
    return re(() => [e.loading, e.finished, e.error], u), l && re(l, y => {
      y && u()
    }), rf(() => {
      o.value = e.loading
    }), at(() => {
      e.immediateCheck && u()
    }), $e({
      check: u
    }), st("scroll", u, {
      target: c,
      passive: !0
    }), () => {
      var y;
      const p = (y = n.default) == null ? void 0 : y.call(n),
        b = h("div", {
          ref: a,
          class: Yo("placeholder")
        }, null);
      return h("div", {
        ref: s,
        role: "feed",
        class: Yo(),
        "aria-busy": o.value
      }, [e.direction === "down" ? p : b, g(), d(), m(), e.direction === "up" ? p : b])
    }
  }
});
const MC = ee($C),
  [LC, An] = Y("nav-bar"),
  NC = {
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
var FC = K({
  name: LC,
  props: NC,
  emits: ["clickLeft", "clickRight"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = _a(o, An),
      a = d => {
        e.leftDisabled || t("clickLeft", d)
      },
      l = d => {
        e.rightDisabled || t("clickRight", d)
      },
      r = () => n.left ? n.left() : [e.leftArrow && h(Pe, {
        class: An("arrow"),
        name: "arrow-left"
      }, null), e.leftText && h("span", {
        class: An("text")
      }, [e.leftText])],
      c = () => n.right ? n.right() : h("span", {
        class: An("text")
      }, [e.rightText]),
      u = () => {
        const {
          title: d,
          fixed: f,
          border: m,
          zIndex: g
        } = e, y = Un(g), p = e.leftArrow || e.leftText || n.left, b = e.rightText || n.right;
        return h("div", {
          ref: o,
          style: y,
          class: [An({
            fixed: f
          }), {
            [Cr]: m,
            "van-safe-area-top": e.safeAreaInsetTop
          }]
        }, [h("div", {
          class: An("content")
        }, [p && h("div", {
          class: [An("left", {
            disabled: e.leftDisabled
          }), e.clickable && !e.leftDisabled ? kt : ""],
          onClick: a
        }, [r()]), h("div", {
          class: [An("title"), "van-ellipsis"]
        }, [n.title ? n.title() : d]), b && h("div", {
          class: [An("right", {
            disabled: e.rightDisabled
          }), e.clickable && !e.rightDisabled ? kt : ""],
          onClick: l
        }, [c()])])])
      };
    return () => e.fixed && e.placeholder ? s(u) : u()
  }
});
const VC = ee(FC),
  [zC, Ei] = Y("notice-bar"),
  HC = {
    text: String,
    mode: String,
    color: String,
    delay: he(1),
    speed: he(60),
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    scrollable: {
      type: Boolean,
      default: null
    }
  };
var UC = K({
  name: zC,
  props: HC,
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
      c = Je({
        show: !0,
        offset: 0,
        duration: 0
      }),
      u = () => {
        if (n["left-icon"]) return n["left-icon"]();
        if (e.leftIcon) return h(Pe, {
          class: Ei("left-icon"),
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
          class: Ei("right-icon"),
          onClick: f
        }, null)
      },
      g = () => {
        c.offset = o, c.duration = 0, Ct(() => {
          so(() => {
            c.offset = -s, c.duration = (s + o) / +e.speed, t("replay")
          })
        })
      },
      y = () => {
        const b = e.scrollable === !1 && !e.wrapable,
          w = {
            transform: c.offset ? `translateX(${c.offset}px)` : "",
            transitionDuration: `${c.duration}s`
          };
        return h("div", {
          ref: l,
          role: "marquee",
          class: Ei("wrap")
        }, [h("div", {
          ref: r,
          style: w,
          class: [Ei("content"), {
            "van-ellipsis": b
          }],
          onTransitionend: g
        }, [n.default ? n.default() : e.text])])
      },
      p = () => {
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
    return Ca(p), yi(p), st("pageshow", p), $e({
      reset: p
    }), re(() => [e.text, e.scrollable], p), () => {
      const {
        color: b,
        wrapable: w,
        background: v
      } = e;
      return rt(h("div", {
        role: "alert",
        class: Ei({
          wrapable: w
        }),
        style: {
          color: b,
          background: v
        }
      }, [u(), y(), m()]), [
        [dt, c.show]
      ])
    }
  }
});
const WC = ee(UC),
  [jC, QC] = Y("notify"),
  KC = ["lockScroll", "position", "show", "teleport", "zIndex"],
  YC = ke({}, bi, {
    type: te("danger"),
    color: String,
    message: Z,
    position: te("top"),
    className: et,
    background: String,
    lockScroll: Boolean
  });
var jh = K({
  name: jC,
  props: YC,
  emits: ["update:show"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = s => t("update:show", s);
    return () => h(cn, Be({
      class: [QC([e.type]), e.className],
      style: {
        color: e.color,
        background: e.background
      },
      overlay: !1,
      duration: .2,
      "onUpdate:show": o
    }, ze(e, KC)), {
      default: () => [n.default ? n.default() : e.message]
    })
  }
});
let xu, ai;
const qC = e => wn(e) ? e : {
  message: e
};

function GC() {
  ({
    instance: ai
  } = Or({
    setup() {
      const {
        state: e,
        toggle: t
      } = Pr();
      return () => h(jh, Be(e, {
        "onUpdate:show": t
      }), null)
    }
  }))
}
const ZC = () => ({
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
let XC = ZC();
const JC = () => {
  ai && ai.toggle(!1)
};

function uo(e) {
  if (Vt) return ai || GC(), e = ke({}, XC, qC(e)), ai.open(e), clearTimeout(xu), e.duration > 0 && (xu = setTimeout(JC, e.duration)), ai
}
const e_ = ee(jh),
  [t_, Hi] = Y("key"),
  n_ = h("svg", {
    class: Hi("collapse-icon"),
    viewBox: "0 0 30 24"
  }, [h("path", {
    d: "M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",
    fill: "currentColor"
  }, null)]),
  o_ = h("svg", {
    class: Hi("delete-icon"),
    viewBox: "0 0 32 22"
  }, [h("path", {
    d: "M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",
    fill: "currentColor"
  }, null)]);
var ll = K({
  name: t_,
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
            return u || o_;
          case "extra":
            return u || n_;
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
const [i_, Gn] = Y("number-keyboard"), s_ = {
  show: Boolean,
  title: String,
  theme: te("default"),
  zIndex: Z,
  teleport: [String, Object],
  maxlength: he(1 / 0),
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

function a_(e) {
  for (let t = e.length - 1; t > 0; t--) {
    const n = Math.floor(Math.random() * (t + 1)),
      o = e[t];
    e[t] = e[n], e[n] = o
  }
  return e
}
var l_ = K({
  name: i_,
  inheritAttrs: !1,
  props: s_,
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
        return e.randomKeyOrder && a_(b), b
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
          class: [Gn("close"), kt],
          onClick: d
        }, [v])])
      },
      y = () => c.value.map(b => {
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
      p = () => {
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
          default: () => [rt(h("div", Be({
            ref: s,
            style: Un(e.zIndex),
            class: Gn({
              unfit: !e.safeAreaInsetBottom,
              "with-title": !!b
            }),
            onAnimationend: f,
            onTouchstartPassive: br
          }, o), [b, h("div", {
            class: Gn("body")
          }, [h("div", {
            class: Gn("keys")
          }, [y()]), p()])]), [
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
const r_ = ee(l_),
  [c_, qo, Eu] = Y("pagination"),
  rl = (e, t, n) => ({
    number: e,
    text: t,
    active: n
  }),
  u_ = {
    mode: te("multi"),
    prevText: String,
    nextText: String,
    pageCount: he(0),
    modelValue: lt(0),
    totalItems: he(0),
    showPageSize: he(5),
    itemsPerPage: he(10),
    forceEllipses: Boolean,
    showPrevButton: j,
    showNextButton: j
  };
var d_ = K({
  name: c_,
  props: u_,
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
            forceEllipses: y
          } = e;
        let p = 1,
          b = f;
        const w = m < f;
        w && (p = Math.max(g - Math.floor(m / 2), 1), b = p + m - 1, b > f && (b = f, p = b - m + 1));
        for (let v = p; v <= b; v++) {
          const C = rl(v, v, v === g);
          d.push(C)
        }
        if (w && m > 0 && y) {
          if (p > 1) {
            const v = rl(p - 1, "...");
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
          y = f === 1;
        return h("li", {
          class: [qo("item", {
            disabled: y,
            border: d === "simple",
            prev: !0
          }), Vi]
        }, [h("button", {
          type: "button",
          disabled: y,
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
          y = f === o.value;
        return h("li", {
          class: [qo("item", {
            disabled: y,
            border: d === "simple",
            next: !0
          }), Vi]
        }, [h("button", {
          type: "button",
          disabled: y,
          onClick: () => a(f + 1, !0)
        }, [g ? g() : e.nextText || Eu("next")])])
      },
      u = () => s.value.map(d => h("li", {
        class: [qo("item", {
          active: d.active,
          page: !0
        }), Vi]
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
const f_ = ee(d_),
  [h_, Ai] = Y("password-input"),
  m_ = {
    info: String,
    mask: j,
    value: te(""),
    gutter: Z,
    length: he(6),
    focused: Boolean,
    errorInfo: String
  };
var g_ = K({
  name: h_,
  props: m_,
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
          let y;
          d !== 0 && r && (y = {
            marginLeft: Ie(r)
          }), s.push(h("li", {
            class: [{
              [Wf]: m
            }, Ai("item", {
              focus: g
            })],
            style: y
          }, [a ? h("i", {
            style: {
              visibility: f ? "visible" : "hidden"
            }
          }, null) : f, g && h("div", {
            class: Ai("cursor")
          }, null)]))
        }
        return s
      };
    return () => {
      const s = e.errorInfo || e.info;
      return h("div", {
        class: Ai()
      }, [h("ul", {
        class: [Ai("security"), {
          [Vi]: !e.gutter
        }],
        onTouchstartPassive: n
      }, [o()]), s && h("div", {
        class: Ai(e.errorInfo ? "error-info" : "info")
      }, [s])])
    }
  }
});
const v_ = ee(g_),
  y_ = ee(C0);

function dn(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window
  }
  return e
}

function Fr(e) {
  var t = dn(e).Element;
  return e instanceof t || e instanceof Element
}

function nn(e) {
  var t = dn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement
}

function Qh(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = dn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot
}
var fi = Math.round;

function Ul() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version
  }).join(" ") : navigator.userAgent
}

function p_() {
  return !/^((?!chrome|android).)*safari/i.test(Ul())
}

function ea(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(),
    s = 1,
    a = 1;
  t && nn(e) && (s = e.offsetWidth > 0 && fi(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && fi(o.height) / e.offsetHeight || 1);
  var l = Fr(e) ? dn(e) : window,
    r = l.visualViewport,
    c = !p_() && n,
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

function Kh(e) {
  var t = dn(e),
    n = t.pageXOffset,
    o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  }
}

function b_(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  }
}

function w_(e) {
  return e === dn(e) || !nn(e) ? Kh(e) : b_(e)
}

function Nn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null
}

function Pa(e) {
  return ((Fr(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function C_(e) {
  return ea(Pa(e)).left + Kh(e).scrollLeft
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

function __(e) {
  var t = e.getBoundingClientRect(),
    n = fi(t.width) / e.offsetWidth || 1,
    o = fi(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1
}

function k_(e, t, n) {
  n === void 0 && (n = !1);
  var o = nn(t),
    s = nn(t) && __(t),
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
  return (o || !o && !n) && ((Nn(t) !== "body" || Vr(a)) && (r = w_(t)), nn(t) ? (c = ea(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = C_(a))), {
    x: l.left + r.scrollLeft - c.x,
    y: l.top + r.scrollTop - c.y,
    width: l.width,
    height: l.height
  }
}

function S_(e) {
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

function zr(e) {
  return Nn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Qh(e) ? e.host : null) || Pa(e)
}

function Yh(e) {
  return ["html", "body", "#document"].indexOf(Nn(e)) >= 0 ? e.ownerDocument.body : nn(e) && Vr(e) ? e : Yh(zr(e))
}

function Hs(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Yh(e),
    s = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
    a = dn(o),
    l = s ? [a].concat(a.visualViewport || [], Vr(o) ? o : []) : o,
    r = t.concat(l);
  return s ? r : r.concat(Hs(zr(l)))
}

function T_(e) {
  return ["table", "td", "th"].indexOf(Nn(e)) >= 0
}

function Au(e) {
  return !nn(e) || Fn(e).position === "fixed" ? null : e.offsetParent
}

function x_(e) {
  var t = /firefox/i.test(Ul()),
    n = /Trident/i.test(Ul());
  if (n && nn(e)) {
    var o = Fn(e);
    if (o.position === "fixed") return null
  }
  var s = zr(e);
  for (Qh(s) && (s = s.host); nn(s) && ["html", "body"].indexOf(Nn(s)) < 0;) {
    var a = Fn(s);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return s;
    s = s.parentNode
  }
  return null
}

function qh(e) {
  for (var t = dn(e), n = Au(e); n && T_(n) && Fn(n).position === "static";) n = Au(n);
  return n && (Nn(n) === "html" || Nn(n) === "body" && Fn(n).position === "static") ? t : n || x_(e) || t
}
var li = "top",
  ta = "bottom",
  ts = "right",
  Ro = "left",
  Gh = "auto",
  E_ = [li, ta, ts, Ro],
  Zh = "start",
  na = "end",
  A_ = [].concat(E_, [Gh]).reduce(function(e, t) {
    return e.concat([t, t + "-" + Zh, t + "-" + na])
  }, []),
  I_ = "beforeRead",
  P_ = "read",
  O_ = "afterRead",
  R_ = "beforeMain",
  D_ = "main",
  B_ = "afterMain",
  $_ = "beforeWrite",
  M_ = "write",
  L_ = "afterWrite",
  Wl = [I_, P_, O_, R_, D_, B_, $_, M_, L_];

function N_(e) {
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

function F_(e) {
  var t = N_(e);
  return Wl.reduce(function(n, o) {
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
  z_ = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
  Iu = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];

function H_(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Iu).filter(function(n, o, s) {
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
          Wl.indexOf(t.phase) < 0 && console.error(Zn(So, t.name, '"phase"', "either " + Wl.join(", "), '"' + String(t.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Iu.map(function(o) {
            return '"' + o + '"'
          }).join(", ") + '; but "' + n + '" was provided.')
      }
      t.requires && t.requires.forEach(function(o) {
        e.find(function(s) {
          return s.name === o
        }) == null && console.error(Zn(z_, String(t.name), o, o))
      })
    })
  })
}

function U_(e, t) {
  var n = new Set;
  return e.filter(function(o) {
    var s = t(o);
    if (!n.has(s)) return n.add(s), !0
  })
}

function Oa(e) {
  return e.split("-")[0]
}

function W_(e) {
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

function Xh(e) {
  return e.split("-")[1]
}

function j_(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function Q_(e) {
  var t = e.reference,
    n = e.element,
    o = e.placement,
    s = o ? Oa(o) : null,
    a = o ? Xh(o) : null,
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
    case Ro:
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
  var u = s ? j_(s) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Zh:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case na:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break
    }
  }
  return c
}
var Pu = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",
  K_ = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",
  Ou = {
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

function Y_(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    o = n === void 0 ? [] : n,
    s = t.defaultOptions,
    a = s === void 0 ? Ou : s;
  return function(r, c, u) {
    u === void 0 && (u = a);
    var d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Ou, a),
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
          p(), d.options = Object.assign({}, a, d.options, v), d.scrollParents = {
            reference: Fr(r) ? Hs(r) : r.contextElement ? Hs(r.contextElement) : [],
            popper: Hs(c)
          };
          var C = F_(W_([].concat(o, d.options.modifiers)));
          d.orderedModifiers = C.filter(function(T) {
            return T.enabled
          });
          {
            var _ = U_([].concat(C, d.options.modifiers), function(T) {
              var P = T.name;
              return P
            });
            if (H_(_), Oa(d.options.placement) === Gh) {
              var k = d.orderedModifiers.find(function(T) {
                var P = T.name;
                return P === "flip"
              });
              k || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "))
            }
            var I = Fn(c),
              B = I.marginTop,
              S = I.marginRight,
              R = I.marginBottom,
              D = I.marginLeft;
            [B, S, R, D].some(function(T) {
              return parseFloat(T)
            }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "))
          }
          return y(), g.update()
        },
        forceUpdate: function() {
          if (!m) {
            var w = d.elements,
              v = w.reference,
              C = w.popper;
            if (!Ru(v, C)) {
              console.error(Pu);
              return
            }
            d.rects = {
              reference: k_(v, qh(C), d.options.strategy === "fixed"),
              popper: S_(C)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(T) {
              return d.modifiersData[T.name] = Object.assign({}, T.data)
            });
            for (var _ = 0, k = 0; k < d.orderedModifiers.length; k++) {
              if (_ += 1, _ > 100) {
                console.error(K_);
                break
              }
              if (d.reset === !0) {
                d.reset = !1, k = -1;
                continue
              }
              var I = d.orderedModifiers[k],
                B = I.fn,
                S = I.options,
                R = S === void 0 ? {} : S,
                D = I.name;
              typeof B == "function" && (d = B({
                state: d,
                options: R,
                name: D,
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
          p(), m = !0
        }
      };
    if (!Ru(r, c)) return console.error(Pu), g;
    g.setOptions(u).then(function(b) {
      !m && u.onFirstUpdate && u.onFirstUpdate(b)
    });

    function y() {
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

    function p() {
      f.forEach(function(b) {
        return b()
      }), f = []
    }
    return g
  }
}
var Rs = {
  passive: !0
};

function q_(e) {
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
      d.addEventListener("scroll", n.update, Rs)
    }), r && c.addEventListener("resize", n.update, Rs),
    function() {
      a && u.forEach(function(d) {
        d.removeEventListener("scroll", n.update, Rs)
      }), r && c.removeEventListener("resize", n.update, Rs)
    }
}
var G_ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {},
  effect: q_,
  data: {}
};

function Z_(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Q_({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  })
}
var X_ = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Z_,
    data: {}
  },
  J_ = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

function ek(e) {
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
    y = l.y,
    p = y === void 0 ? 0 : y,
    b = typeof d == "function" ? d({
      x: g,
      y: p
    }) : {
      x: g,
      y: p
    };
  g = b.x, p = b.y;
  var w = l.hasOwnProperty("x"),
    v = l.hasOwnProperty("y"),
    C = Ro,
    _ = li,
    k = window;
  if (u) {
    var I = qh(n),
      B = "clientHeight",
      S = "clientWidth";
    if (I === dn(n) && (I = Pa(n), Fn(I).position !== "static" && r === "absolute" && (B = "scrollHeight", S = "scrollWidth")), I = I, s === li || (s === Ro || s === ts) && a === na) {
      _ = ta;
      var R = f && I === k && k.visualViewport ? k.visualViewport.height : I[B];
      p -= R - o.height, p *= c ? 1 : -1
    }
    if (s === Ro || (s === li || s === ta) && a === na) {
      C = ts;
      var D = f && I === k && k.visualViewport ? k.visualViewport.width : I[S];
      g -= D - o.width, g *= c ? 1 : -1
    }
  }
  var T = Object.assign({
      position: r
    }, u && J_),
    P = d === !0 ? ek({
      x: g,
      y: p
    }) : {
      x: g,
      y: p
    };
  if (g = P.x, p = P.y, c) {
    var M;
    return Object.assign({}, T, (M = {}, M[_] = v ? "0" : "", M[C] = w ? "0" : "", M.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + p + "px)" : "translate3d(" + g + "px, " + p + "px, 0)", M))
  }
  return Object.assign({}, T, (t = {}, t[_] = v ? p + "px" : "", t[C] = w ? g + "px" : "", t.transform = "", t))
}

function tk(e) {
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
    variation: Xh(t.placement),
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
var nk = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: tk,
  data: {}
};

function ok(e) {
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

function ik(e) {
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
var sk = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: ok,
    effect: ik,
    requires: ["computeStyles"]
  },
  ak = [G_, X_, nk, sk],
  lk = Y_({
    defaultModifiers: ak
  });

function rk(e, t, n) {
  var o = Oa(e),
    s = [Ro, li].indexOf(o) >= 0 ? -1 : 1,
    a = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n,
    l = a[0],
    r = a[1];
  return l = l || 0, r = (r || 0) * s, [Ro, ts].indexOf(o) >= 0 ? {
    x: r,
    y: l
  } : {
    x: l,
    y: r
  }
}

function ck(e) {
  var t = e.state,
    n = e.options,
    o = e.name,
    s = n.offset,
    a = s === void 0 ? [0, 0] : s,
    l = A_.reduce(function(d, f) {
      return d[f] = rk(f, t.rects, a), d
    }, {}),
    r = l[t.placement],
    c = r.x,
    u = r.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = l
}
var uk = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ck
};
const [dk, To] = Y("popover"), fk = ["overlay", "duration", "teleport", "overlayStyle", "overlayClass", "closeOnClickOverlay"], hk = {
  show: Boolean,
  theme: te("light"),
  overlay: Boolean,
  actions: Ze(),
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
var mk = K({
  name: dk,
  props: hk,
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
      c = Tr(() => e.show, v => t("update:show", v)),
      u = () => ({
        placement: e.placement,
        modifiers: [{
          name: "computeStyles",
          options: {
            adaptive: !1,
            gpuAcceleration: !1
          }
        }, ke({}, uk, {
          options: {
            offset: e.offset
          }
        })]
      }),
      d = () => l.value && r.value ? lk(l.value, r.value.popupRef.value, u()) : null,
      f = () => {
        Oe(() => {
          c.value && (s ? s.setOptions(u()) : (s = d(), Vt && (window.addEventListener("animationend", f), window.addEventListener("transitionend", f))))
        })
      },
      m = v => {
        c.value = v
      },
      g = () => {
        e.trigger === "click" && (c.value = !c.value)
      },
      y = (v, C) => {
        v.disabled || (t("select", v, C), e.closeOnClickAction && (c.value = !1))
      },
      p = () => {
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
          [Cr]: e.actionsDirection === "vertical"
        }]
      }, [v.text])],
      w = (v, C) => {
        const {
          icon: _,
          color: k,
          disabled: I,
          className: B
        } = v;
        return h("div", {
          role: "menuitem",
          class: [To("action", {
            disabled: I,
            "with-icon": _
          }), {
            [qy]: e.actionsDirection === "horizontal"
          }, B],
          style: {
            color: k
          },
          tabindex: I ? void 0 : 0,
          "aria-disabled": I || void 0,
          onClick: () => y(v, C)
        }, [b(v, C)])
      };
    return at(() => {
      f(), vi(() => {
        var v;
        a.value = (v = r.value) == null ? void 0 : v.popupRef.value
      })
    }), kn(() => {
      s && (Vt && (window.removeEventListener("animationend", f), window.removeEventListener("transitionend", f)), s.destroy(), s = null)
    }), re(() => [c.value, e.offset, e.placement], f), ba([l, a], p, {
      eventName: "touchstart"
    }), () => {
      var v;
      return h(Re, null, [h("span", {
        ref: l,
        class: To("wrapper"),
        onClick: g
      }, [(v = n.reference) == null ? void 0 : v.call(n)]), h(cn, Be({
        ref: r,
        show: c.value,
        class: To([e.theme]),
        position: "",
        transition: "van-popover-zoom",
        lockScroll: !1,
        "onUpdate:show": m
      }, o, Js(), ze(e, fk)), {
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
const gk = ee(mk),
  [vk, cl] = Y("progress"),
  yk = {
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
var pk = K({
  name: vk,
  props: yk,
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
const bk = ee(pk),
  [wk, Ii, Ck] = Y("pull-refresh"),
  Jh = 50,
  _k = ["pulling", "loosing", "success"],
  kk = {
    disabled: Boolean,
    modelValue: Boolean,
    headHeight: he(Jh),
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    pullDistance: Z,
    successDuration: he(500),
    animationDuration: he(300)
  };
var Sk = K({
  name: wk,
  props: kk,
  emits: ["change", "refresh", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o;
    const s = F(),
      a = F(),
      l = pi(s),
      r = Je({
        status: "normal",
        distance: 0,
        duration: 0
      }),
      c = Kt(),
      u = () => {
        if (e.headHeight !== Jh) return {
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
        return _ === "normal" ? "" : e[`${_}Text`] || Ck(_)
      },
      y = () => {
        const {
          status: _,
          distance: k
        } = r;
        if (n[_]) return n[_]({
          distance: k
        });
        const I = [];
        return _k.includes(_) && I.push(h("div", {
          class: Ii("text")
        }, [g()])), _ === "loading" && I.push(h(rn, {
          class: Ii("loading")
        }, {
          default: g
        })), I
      },
      p = () => {
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
      r.duration = +e.animationDuration, _ ? m(+e.headHeight, !0) : n.success || e.successText ? p() : m(0, !1)
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
      }, [y()]), (_ = n.default) == null ? void 0 : _.call(n)])])
    }
  }
});
const Tk = ee(Sk),
  [xk, Ds] = Y("rate");

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
const Ak = {
  size: Z,
  icon: te("star"),
  color: String,
  count: he(5),
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
var Ik = K({
  name: xk,
  props: Ak,
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
      y = (C, _) => {
        for (let k = u.length - 1; k > 0; k--)
          if (_ >= d.top && _ <= d.bottom) {
            if (C > u[k].left && _ >= u[k].top && _ <= u[k].top + u[k].height) return u[k].score
          } else {
            const I = _ < d.top ? f : m;
            if (C > u[k].left && u[k].top === I) return u[k].score
          } return e.allowHalf ? .5 : 1
      },
      p = C => {
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
          Ge(C), p(y(_, k))
        }
      },
      v = (C, _) => {
        const {
          icon: k,
          size: I,
          color: B,
          count: S,
          gutter: R,
          voidIcon: D,
          disabled: T,
          voidColor: P,
          allowHalf: M,
          iconPrefix: J,
          disabledColor: ce
        } = e, W = _ + 1, ne = C.status === "full", ue = C.status === "void", De = M && C.value > 0 && C.value < 1;
        let Ne;
        R && W !== +S && (Ne = {
          paddingRight: Ie(R)
        });
        const V = X => {
          g();
          let ve = M ? y(X.clientX, X.clientY) : W;
          e.clearable && n.isTap.value && ve === e.modelValue && (ve = 0), p(ve)
        };
        return h("div", {
          key: _,
          ref: s(_),
          role: "radio",
          style: Ne,
          class: Ds("item"),
          tabindex: T ? void 0 : 0,
          "aria-setsize": S,
          "aria-posinset": W,
          "aria-checked": !ue,
          onClick: V
        }, [h(Pe, {
          size: I,
          name: ne ? k : D,
          class: Ds("icon", {
            disabled: T,
            full: ne
          }),
          color: T ? ce : ne ? B : P,
          classPrefix: J
        }, null), De && h(Pe, {
          size: I,
          style: {
            width: C.value + "em"
          },
          name: ue ? D : k,
          class: Ds("icon", ["half", {
            disabled: T,
            full: !ue
          }]),
          color: T ? ce : ue ? P : B,
          classPrefix: J
        }, null)])
      };
    return vo(() => e.modelValue), st("touchmove", w, {
      target: a
    }), () => h("div", {
      ref: a,
      role: "radiogroup",
      class: Ds({
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
const Pk = ee(Ik),
  Ok = {
    figureArr: Ze(),
    delay: Number,
    duration: lt(2),
    isStart: Boolean,
    direction: te("down"),
    height: lt(40)
  },
  [Rk, ul] = Y("rolling-text-item");
var Dk = K({
  name: Rk,
  props: Ok,
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
const [Bk, $k] = Y("rolling-text"), Mk = {
  startNum: lt(0),
  targetNum: Number,
  textList: Ze(),
  duration: lt(2),
  autoStart: j,
  direction: te("down"),
  stopOrder: te("ltr"),
  height: lt(40)
}, Lk = 2;
var Nk = K({
  name: Bk,
  props: Mk,
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
          y = [];
        for (let p = m; p <= 9; p++) y.push(p);
        for (let p = 0; p <= Lk; p++)
          for (let b = 0; b <= 9; b++) y.push(b);
        for (let p = 0; p <= g; p++) y.push(p);
        return y
      },
      r = (f, m) => e.stopOrder === "ltr" ? .2 * f : .2 * (m - 1 - f),
      c = F(e.autoStart),
      u = () => {
        c.value = !0
      },
      d = () => {
        c.value = !1, e.autoStart && Ct(() => u())
      };
    return re(() => e.autoStart, f => {
      f && u()
    }), $e({
      start: u,
      reset: d
    }), () => h("div", {
      class: $k()
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
const Fk = ee(Nk),
  Vk = ee(I1),
  [zk, Pi, Hk] = Y("search"),
  Uk = ke({}, Ir, {
    label: String,
    shape: te("square"),
    leftIcon: te("search"),
    clearable: j,
    actionText: String,
    background: String,
    showAction: Boolean
  });
var Wk = K({
  name: zk,
  props: Uk,
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
          const k = e.actionText || Hk("cancel");
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
      y = k => t("focus", k),
      p = k => t("clear", k),
      b = k => t("clickInput", k),
      w = k => t("clickLeftIcon", k),
      v = k => t("clickRightIcon", k),
      C = Object.keys(Ir),
      _ = () => {
        const k = ke({}, o, ze(e, C), {
            id: c()
          }),
          I = B => t("update:modelValue", B);
        return h($n, Be({
          ref: a,
          type: "search",
          class: Pi("field", {
            "with-message": k.errorMessage
          }),
          border: !1,
          onBlur: g,
          onFocus: y,
          onClear: p,
          onKeypress: r,
          onClickInput: b,
          onClickLeftIcon: w,
          onClickRightIcon: v,
          "onUpdate:modelValue": I
        }, k), ze(n, ["left-icon", "right-icon"]))
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
const jk = ee(Wk),
  Qk = e => e == null ? void 0 : e.includes("/"),
  Kk = [...kr, "round", "closeOnPopstate", "safeAreaInsetBottom"],
  Yk = {
    qq: "qq",
    link: "link-o",
    weibo: "weibo",
    qrcode: "qr",
    poster: "photo-o",
    wechat: "wechat",
    "weapp-qrcode": "miniprogram-o",
    "wechat-moments": "wechat-moments"
  },
  [qk, Gt, Gk] = Y("share-sheet"),
  Zk = ke({}, bi, {
    title: String,
    round: j,
    options: Ze(),
    cancelText: String,
    description: String,
    closeOnPopstate: j,
    safeAreaInsetBottom: j
  });
var Xk = K({
  name: qk,
  props: Zk,
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
      r = m => Qk(m) ? h("img", {
        src: m,
        class: Gt("image-icon")
      }, null) : h("div", {
        class: Gt("icon", [m])
      }, [h(Pe, {
        name: Yk[m] || m
      }, null)]),
      c = (m, g) => {
        const {
          name: y,
          icon: p,
          className: b,
          description: w
        } = m;
        return h("div", {
          role: "button",
          tabindex: 0,
          class: [Gt("option"), b, kt],
          onClick: () => a(m, g)
        }, [r(p), y && h("span", {
          class: Gt("name")
        }, [y]), w && h("span", {
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
        return Array.isArray(m[0]) ? m.map((g, y) => u(g, y !== 0)) : u(m)
      },
      f = () => {
        var m;
        const g = (m = e.cancelText) != null ? m : Gk("cancel");
        if (n.cancel || g) return h("button", {
          type: "button",
          class: Gt("cancel"),
          onClick: s
        }, [n.cancel ? n.cancel() : g])
      };
    return () => h(cn, Be({
      class: Gt(),
      position: "bottom",
      "onUpdate:show": o
    }, ze(e, Kk)), {
      default: () => [l(), d(), f()]
    })
  }
});
const Jk = ee(Xk),
  [em, eS] = Y("sidebar"),
  tm = Symbol(em),
  tS = {
    modelValue: he(0)
  };
var nS = K({
  name: em,
  props: tS,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      linkChildren: o
    } = Tt(tm), s = () => +e.modelValue;
    return o({
      getActive: s,
      setActive: l => {
        l !== s() && (t("update:modelValue", l), t("change", l))
      }
    }), () => {
      var l;
      return h("div", {
        role: "tablist",
        class: eS()
      }, [(l = n.default) == null ? void 0 : l.call(n)])
    }
  }
});
const nm = ee(nS),
  [oS, Bu] = Y("sidebar-item"),
  iS = ke({}, po, {
    dot: Boolean,
    title: String,
    badge: Z,
    disabled: Boolean,
    badgeProps: Object
  });
var sS = K({
  name: oS,
  props: iS,
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = Mo(),
      {
        parent: s,
        index: a
      } = yt(tm);
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
        class: Bu({
          select: f,
          disabled: d
        }),
        tabindex: d ? void 0 : 0,
        "aria-selected": f,
        onClick: l
      }, [h(Lo, Be({
        dot: r,
        class: Bu("text"),
        content: c
      }, e.badgeProps), {
        default: () => [n.title ? n.title() : u]
      })])
    }
  }
});
const om = ee(sS),
  [aS, dl, $u] = Y("signature"),
  lS = {
    tips: String,
    type: te("png"),
    penColor: te("#000"),
    lineWidth: lt(3),
    clearButtonText: String,
    backgroundColor: te(""),
    confirmButtonText: String
  },
  rS = () => {
    var e;
    const t = document.createElement("canvas");
    return !!((e = t.getContext) != null && e.call(t, "2d"))
  };
var cS = K({
  name: aS,
  props: lS,
  emits: ["submit", "clear", "start", "end", "signing"],
  setup(e, {
    emit: t
  }) {
    const n = F(),
      o = F(),
      s = N(() => n.value ? n.value.getContext("2d") : null),
      a = Vt ? rS() : !0;
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
      y = () => {
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
      p = () => {
        s.value && (s.value.clearRect(0, 0, l, r), s.value.closePath(), g(s.value)), t("clear")
      },
      b = () => {
        var v, C, _;
        if (a && n.value) {
          const k = n.value,
            I = Vt ? window.devicePixelRatio : 1;
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
      clear: p,
      submit: y
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
    }, [h(St, {
      size: "small",
      onClick: p
    }, {
      default: () => [e.clearButtonText || $u("clear")]
    }), h(St, {
      type: "primary",
      size: "small",
      onClick: y
    }, {
      default: () => [e.confirmButtonText || $u("confirm")]
    })])])
  }
});
const uS = ee(cS),
  [dS, fS] = Y("skeleton-title"),
  hS = {
    round: Boolean,
    titleWidth: Z
  };
var mS = K({
  name: dS,
  props: hS,
  setup(e) {
    return () => h("h3", {
      class: fS([{
        round: e.round
      }]),
      style: {
        width: Ie(e.titleWidth)
      }
    }, null)
  }
});
const im = ee(mS);
var gS = im;
const [vS, yS] = Y("skeleton-avatar"), pS = {
  avatarSize: Z,
  avatarShape: te("round")
};
var bS = K({
  name: vS,
  props: pS,
  setup(e) {
    return () => h("div", {
      class: yS([e.avatarShape]),
      style: Hn(e.avatarSize)
    }, null)
  }
});
const sm = ee(bS);
var wS = sm;
const Hr = "100%",
  CS = {
    round: Boolean,
    rowWidth: {
      type: Z,
      default: Hr
    }
  },
  [_S, kS] = Y("skeleton-paragraph");
var SS = K({
  name: _S,
  props: CS,
  setup(e) {
    return () => h("div", {
      class: kS([{
        round: e.round
      }]),
      style: {
        width: e.rowWidth
      }
    }, null)
  }
});
const am = ee(SS);
var TS = am;
const [xS, Mu] = Y("skeleton"), ES = "60%", AS = {
  row: he(0),
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
    default: Hr
  }
};
var IS = K({
  name: xS,
  inheritAttrs: !1,
  props: AS,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const o = () => {
        if (e.avatar) return h(wS, {
          avatarShape: e.avatarShape,
          avatarSize: e.avatarSize
        }, null)
      },
      s = () => {
        if (e.title) return h(gS, {
          round: e.round,
          titleWidth: e.titleWidth
        }, null)
      },
      a = c => {
        const {
          rowWidth: u
        } = e;
        return u === Hr && c === +e.row - 1 ? ES : Array.isArray(u) ? u[c] : u
      },
      l = () => Array(+e.row).fill("").map((c, u) => h(TS, {
        key: u,
        round: e.round,
        rowWidth: Ie(a(u))
      }, null)),
      r = () => t.template ? t.template() : h(Re, null, [o(), h("div", {
        class: Mu("content")
      }, [s(), l()])]);
    return () => {
      var c;
      return e.loading ? h("div", Be({
        class: Mu({
          animate: e.animate,
          round: e.round
        })
      }, n), [r()]) : (c = t.default) == null ? void 0 : c.call(t)
    }
  }
});
const PS = ee(IS),
  [OS, Lu] = Y("skeleton-image"),
  RS = {
    imageSize: Z,
    imageShape: te("square")
  };
var DS = K({
  name: OS,
  props: RS,
  setup(e) {
    return () => h("div", {
      class: Lu([e.imageShape]),
      style: Hn(e.imageSize)
    }, [h(Pe, {
      name: "photo",
      class: Lu("icon")
    }, null)])
  }
});
const BS = ee(DS),
  [$S, Oi] = Y("slider"),
  MS = {
    min: he(0),
    max: he(100),
    step: he(1),
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
var LS = K({
  name: $S,
  props: MS,
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
        const T = e.vertical ? "width" : "height";
        return {
          background: e.inactiveColor,
          [T]: Ie(e.barHeight)
        }
      }),
      m = T => e.range && Array.isArray(T),
      g = () => {
        const {
          modelValue: T,
          min: P
        } = e;
        return m(T) ? `${(T[1]-T[0])*100/d.value}%` : `${(T-Number(P))*100/d.value}%`
      },
      y = () => {
        const {
          modelValue: T,
          min: P
        } = e;
        return m(T) ? `${(T[0]-Number(P))*100/d.value}%` : "0%"
      },
      p = N(() => {
        const P = {
          [e.vertical ? "height" : "width"]: g(),
          background: e.activeColor
        };
        c.value && (P.transition = "none");
        const M = () => e.vertical ? e.reverse ? "bottom" : "top" : e.reverse ? "right" : "left";
        return P[M()] = y(), P
      }),
      b = T => {
        const P = +e.min,
          M = +e.max,
          J = +e.step;
        T = ht(T, P, M);
        const ce = Math.round((T - P) / J) * J;
        return Vf(P, ce)
      },
      w = () => {
        const T = e.modelValue;
        m(T) ? a = T.map(b) : a = b(T)
      },
      v = T => {
        var P, M;
        const J = (P = T[0]) != null ? P : Number(e.min),
          ce = (M = T[1]) != null ? M : Number(e.max);
        return J > ce ? [ce, J] : [J, ce]
      },
      C = (T, P) => {
        m(T) ? T = v(T).map(b) : T = b(T), pn(T, e.modelValue) || t("update:modelValue", T), P && !pn(T, a) && t("change", T)
      },
      _ = T => {
        if (T.stopPropagation(), e.disabled || e.readonly) return;
        w();
        const {
          min: P,
          reverse: M,
          vertical: J,
          modelValue: ce
        } = e, W = Ue(l), ne = () => J ? M ? W.bottom - T.clientY : T.clientY - W.top : M ? W.right - T.clientX : T.clientX - W.left, ue = J ? W.height : W.width, De = Number(P) + ne() / ue * d.value;
        if (m(ce)) {
          const [Ne, V] = ce, X = (Ne + V) / 2;
          De <= X ? C([De, V], !0) : C([Ne, De], !0)
        } else C(De, !0)
      },
      k = T => {
        e.disabled || e.readonly || (u.start(T), s = e.modelValue, w(), c.value = "start")
      },
      I = T => {
        if (e.disabled || e.readonly) return;
        c.value === "start" && t("dragStart", T), Ge(T, !0), u.move(T), c.value = "dragging";
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
      B = T => {
        e.disabled || e.readonly || (c.value === "dragging" && (C(s, !0), t("dragEnd", T)), c.value = "")
      },
      S = T => typeof T == "number" ? Oi("button-wrapper", ["left", "right"][T]) : Oi("button-wrapper", e.reverse ? "left" : "right"),
      R = (T, P) => {
        const M = c.value === "dragging";
        if (typeof P == "number") {
          const J = n[P === 0 ? "left-button" : "right-button"];
          let ce;
          if (M && Array.isArray(s) && (ce = s[0] > s[1] ? o ^ 1 : o), J) return J({
            value: T,
            dragging: M,
            dragIndex: ce
          })
        }
        return n.button ? n.button({
          value: T,
          dragging: M
        }) : h("div", {
          class: Oi("button"),
          style: Hn(e.buttonSize)
        }, null)
      },
      D = T => {
        const P = typeof T == "number" ? e.modelValue[T] : e.modelValue;
        return h("div", {
          ref: r[T ?? 0],
          role: "slider",
          class: S(T),
          tabindex: e.disabled ? void 0 : 0,
          "aria-valuemin": e.min,
          "aria-valuenow": P,
          "aria-valuemax": e.max,
          "aria-disabled": e.disabled || void 0,
          "aria-readonly": e.readonly || void 0,
          "aria-orientation": e.vertical ? "vertical" : "horizontal",
          onTouchstartPassive: M => {
            typeof T == "number" && (o = T), k(M)
          },
          onTouchend: B,
          onTouchcancel: B,
          onClick: br
        }, [R(P, T)])
      };
    return C(e.modelValue), vo(() => e.modelValue), r.forEach(T => {
      st("touchmove", I, {
        target: T
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
      style: p.value
    }, [e.range ? [D(0), D(1)] : D()])])
  }
});
const NS = ee(LS),
  [Nu, FS] = Y("space"),
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

function lm(e = []) {
  const t = [];
  return e.forEach(n => {
    Array.isArray(n) ? t.push(...n) : n.type === Re ? t.push(...lm(n.children)) : t.push(n)
  }), t.filter(n => {
    var o;
    return !(n && (n.type === vt || n.type === Re && ((o = n.children) == null ? void 0 : o.length) === 0 || n.type === ss && n.children.trim() === ""))
  })
}
var zS = K({
  name: Nu,
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
      const l = lm((a = t.default) == null ? void 0 : a.call(t));
      return h("div", {
        class: [FS({
          [e.direction]: e.direction,
          [`align-${n.value}`]: n.value,
          wrap: e.wrap,
          fill: e.fill
        })]
      }, [l.map((r, c) => h("div", {
        key: `item-${c}`,
        class: `${Nu}-item`,
        style: s(c === l.length - 1)
      }, [r]))])
    }
  }
});
const HS = ee(zS),
  [rm, Fu] = Y("steps"),
  US = {
    active: he(0),
    direction: te("horizontal"),
    activeIcon: te("checked"),
    iconPrefix: String,
    finishIcon: String,
    activeColor: String,
    inactiveIcon: String,
    inactiveColor: String
  },
  cm = Symbol(rm);
var WS = K({
  name: rm,
  props: US,
  emits: ["clickStep"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      linkChildren: o
    } = Tt(cm);
    return o({
      props: e,
      onClickStep: a => t("clickStep", a)
    }), () => {
      var a;
      return h("div", {
        class: Fu([e.direction])
      }, [h("div", {
        class: Fu("items")
      }, [(a = n.default) == null ? void 0 : a.call(n)])])
    }
  }
});
const [jS, Xn] = Y("step");
var QS = K({
  name: jS,
  setup(e, {
    slots: t
  }) {
    const {
      parent: n,
      index: o
    } = yt(cm);
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
          activeColor: y,
          inactiveIcon: p
        } = s;
        return l() ? t["active-icon"] ? t["active-icon"]() : h(Pe, {
          class: Xn("icon", "active"),
          name: g,
          color: y,
          classPrefix: f
        }, null) : a() === "finish" && (m || t["finish-icon"]) ? t["finish-icon"] ? t["finish-icon"]() : h(Pe, {
          class: Xn("icon", "finish"),
          name: m,
          color: y,
          classPrefix: f
        }, null) : t["inactive-icon"] ? t["inactive-icon"]() : p ? h(Pe, {
          class: Xn("icon"),
          name: p,
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
const KS = ee(QS),
  [YS, Bs] = Y("stepper"),
  qS = 200,
  $s = (e, t) => String(e) === String(t),
  GS = {
    min: he(1),
    max: he(1 / 0),
    name: he(""),
    step: he(1),
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
    defaultValue: he(1),
    decimalLength: Z
  };
var ZS = K({
  name: YS,
  props: GS,
  emits: ["plus", "blur", "minus", "focus", "change", "overlimit", "update:modelValue"],
  setup(e, {
    emit: t
  }) {
    const n = (S, R = !0) => {
        const {
          min: D,
          max: T,
          allowEmpty: P,
          decimalLength: M
        } = e;
        return P && S === "" || (S = Dl(String(S), !e.integer), S = S === "" ? 0 : +S, S = Number.isNaN(S) ? +D : S, S = R ? Math.max(Math.min(+T, S), +D) : S, Fe(M) && (S = S.toFixed(+M))), S
      },
      o = () => {
        var S;
        const R = (S = e.modelValue) != null ? S : e.defaultValue,
          D = n(R);
        return $s(D, e.modelValue) || t("update:modelValue", D), D
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
          R = n(Vf(+l.value, S));
        m(R), t(s)
      },
      y = S => {
        const R = S.target,
          {
            value: D
          } = R,
          {
            decimalLength: T
          } = e;
        let P = Dl(String(D), !e.integer);
        if (Fe(T) && P.includes(".")) {
          const J = P.split(".");
          P = `${J[0]}.${J[1].slice(0,+T)}`
        }
        e.beforeChange ? R.value = String(l.value) : $s(D, P) || (R.value = P);
        const M = P === String(+P);
        m(M ? +P : P)
      },
      p = S => {
        var R;
        e.disableInput ? (R = a.value) == null || R.blur() : t("focus", S)
      },
      b = S => {
        const R = S.target,
          D = n(R.value, e.autoFixed);
        R.value = String(D), l.value = D, Oe(() => {
          t("blur", S), Nf()
        })
      };
    let w, v;
    const C = () => {
        v = setTimeout(() => {
          g(), C()
        }, qS)
      },
      _ = () => {
        e.longPress && (w = !1, clearTimeout(v), v = setTimeout(() => {
          w = !0, g(), C()
        }, Qf))
      },
      k = S => {
        e.longPress && (clearTimeout(v), w && Ge(S))
      },
      I = S => {
        e.disableInput && Ge(S)
      },
      B = S => ({
        onClick: R => {
          Ge(R), s = S, g()
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
      class: Bs([e.theme])
    }, [rt(h("button", Be({
      type: "button",
      style: d.value,
      class: [Bs("minus", {
        disabled: r.value
      }), {
        [kt]: !r.value
      }],
      "aria-disabled": r.value || void 0
    }, B("minus")), null), [
      [dt, e.showMinus]
    ]), rt(h("input", {
      ref: a,
      type: e.integer ? "tel" : "text",
      role: "spinbutton",
      class: Bs("input"),
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
      onInput: y,
      onFocus: p,
      onMousedown: I
    }, null), [
      [dt, e.showInput]
    ]), rt(h("button", Be({
      type: "button",
      style: d.value,
      class: [Bs("plus", {
        disabled: c.value
      }), {
        [kt]: !c.value
      }],
      "aria-disabled": c.value || void 0
    }, B("plus")), null), [
      [dt, e.showPlus]
    ])])
  }
});
const XS = ee(ZS),
  JS = ee(WS),
  [eT, Zt, tT] = Y("submit-bar"),
  nT = {
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
    decimalLength: he(2),
    safeAreaInsetBottom: j
  };
var oT = K({
  name: eT,
  props: nT,
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
          suffixLabel: y,
          decimalLength: p
        } = e;
        if (typeof d == "number") {
          const b = (d / 100).toFixed(+p).split("."),
            w = p ? `.${b[1]}` : "";
          return h("div", {
            class: Zt("text"),
            style: {
              textAlign: g
            }
          }, [h("span", null, [f || tT("label")]), h("span", {
            class: Zt("price")
          }, [m, h("span", {
            class: Zt("price-integer")
          }, [b[0]]), w]), y && h("span", {
            class: Zt("suffix-label")
          }, [y])])
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
      c = () => n.button ? n.button() : h(St, {
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
const iT = ee(oT),
  [sT, fl] = Y("swipe-cell"),
  aT = {
    name: he(""),
    disabled: Boolean,
    leftWidth: Z,
    rightWidth: Z,
    beforeClose: Function,
    stopPropagation: Boolean
  };
var lT = K({
  name: sT,
  props: aT,
  emits: ["open", "close", "click"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o, s, a, l;
    const r = F(),
      c = F(),
      u = F(),
      d = Je({
        offset: 0,
        dragging: !1
      }),
      f = Kt(),
      m = S => S.value ? Ue(S).width : 0,
      g = N(() => Fe(e.leftWidth) ? +e.leftWidth : m(c)),
      y = N(() => Fe(e.rightWidth) ? +e.rightWidth : m(u)),
      p = S => {
        d.offset = S === "left" ? g.value : -y.value, o || (o = !0, t("open", {
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
        const R = Math.abs(d.offset),
          D = .15,
          T = o ? 1 - D : D,
          P = S === "left" ? g.value : y.value;
        P && R > P * T ? p(S) : b(S)
      },
      v = S => {
        e.disabled || (a = d.offset, f.start(S))
      },
      C = S => {
        if (e.disabled) return;
        const {
          deltaX: R
        } = f;
        f.move(S), f.isHorizontal() && (s = !0, d.dragging = !0, (!o || R.value * a < 0) && Ge(S, e.stopPropagation), d.offset = ht(R.value + a, -y.value, g.value))
      },
      _ = () => {
        d.dragging && (d.dragging = !1, w(d.offset > 0 ? "left" : "right"), setTimeout(() => {
          s = !1
        }, 0))
      },
      k = (S = "outside", R) => {
        l || (t("click", S), o && !s && (l = !0, yo(e.beforeClose, {
          args: [{
            event: R,
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
      I = (S, R) => D => {
        R && D.stopPropagation(), !s && k(S, D)
      },
      B = (S, R) => {
        const D = n[S];
        if (D) return h("div", {
          ref: R,
          class: fl(S),
          onClick: I(S, !0)
        }, [D()])
      };
    return $e({
      open: p,
      close: b
    }), ba(r, S => k("outside", S), {
      eventName: "touchstart"
    }), st("touchmove", C, {
      target: r
    }), () => {
      var S;
      const R = {
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
        style: R
      }, [B("left", c), (S = n.default) == null ? void 0 : S.call(n), B("right", u)])])
    }
  }
});
const rT = ee(lT),
  [um, Vu] = Y("tabbar"),
  cT = {
    route: Boolean,
    fixed: j,
    border: j,
    zIndex: Z,
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    modelValue: he(0),
    safeAreaInsetBottom: {
      type: Boolean,
      default: null
    }
  },
  dm = Symbol(um);
var uT = K({
  name: um,
  props: cT,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      {
        linkChildren: s
      } = Tt(dm),
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
const dT = ee(uT),
  [fT, hl] = Y("tabbar-item"),
  hT = ke({}, po, {
    dot: Boolean,
    icon: String,
    name: Z,
    badge: Z,
    badgeProps: Object,
    iconPrefix: String
  });
var mT = K({
  name: fT,
  props: hT,
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
      } = yt(dm);
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
            to: y
          } = e, p = wn(y) ? y : {
            path: y
          };
          return !!g.matched.find(b => {
            const w = "path" in p && p.path === b.path,
              v = "name" in p && p.name === b.name;
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
        inactiveColor: y
      } = a.props, p = r.value ? g : y;
      return h("div", {
        role: "tab",
        class: hl({
          active: r.value
        }),
        style: {
          color: p
        },
        tabindex: 0,
        "aria-selected": r.value,
        onClick: c
      }, [h(Lo, Be({
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
const gT = ee(mT),
  [vT, zu] = Y("text-ellipsis"),
  yT = {
    rows: he(1),
    dots: te("..."),
    content: te(""),
    expandText: te(""),
    collapseText: te(""),
    position: te("end")
  };
var pT = K({
  name: vT,
  props: yT,
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
          dots: B
        } = e, S = k.length, R = 0 + S >> 1, D = n.action ? (_ = (C = r.value) == null ? void 0 : C.outerHTML) != null ? _ : "" : e.expandText, T = () => {
          const M = (J, ce) => {
            if (ce - J <= 1) return I === "end" ? k.slice(0, J) + B : B + k.slice(ce, S);
            const W = Math.round((J + ce) / 2);
            return I === "end" ? w.innerText = k.slice(0, W) + B : w.innerText = B + k.slice(W, S), w.innerHTML += D, w.offsetHeight > v ? I === "end" ? M(J, W) : M(W, ce) : I === "end" ? M(W, ce) : M(J, W)
          };
          return M(0, S)
        }, P = (M, J) => {
          if (M[1] - M[0] <= 1 && J[1] - J[0] <= 1) return k.slice(0, M[0]) + B + k.slice(J[1], S);
          const ce = Math.floor((M[0] + M[1]) / 2),
            W = Math.ceil((J[0] + J[1]) / 2);
          return w.innerText = e.content.slice(0, ce) + e.dots + e.content.slice(W, S), w.innerHTML += D, w.offsetHeight >= v ? P([M[0], ce], [W, J[1]]) : P([ce, M[1]], [J[0], W])
        };
        return e.position === "middle" ? P([0, R], [R, S]) : T()
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
      y = (w = !s.value) => {
        s.value = w
      },
      p = w => {
        y(), t("clickAction", w)
      },
      b = () => {
        const w = n.action ? n.action({
          expanded: s.value
        }) : u.value;
        return h("span", {
          ref: r,
          class: zu("action"),
          onClick: p
        }, [w])
      };
    return at(() => {
      g(), n.action && Oe(g)
    }), Cn(() => {
      c && (c = !1, g())
    }), re([tn, () => [e.content, e.rows, e.position]], g), $e({
      toggle: y
    }), () => h("div", {
      ref: l,
      class: zu()
    }, [s.value ? e.content : o.value, a.value ? b() : null])
  }
});
const bT = ee(pT),
  [wT] = Y("time-picker"),
  Hu = e => /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(e),
  CT = ["hour", "minute", "second"],
  _T = ke({}, Ih, {
    minHour: he(0),
    maxHour: he(23),
    minMinute: he(0),
    maxMinute: he(59),
    minSecond: he(0),
    maxSecond: he(59),
    minTime: {
      type: String,
      validator: Hu
    },
    maxTime: {
      type: String,
      validator: Hu
    },
    columnsType: {
      type: Array,
      default: () => ["hour", "minute"]
    },
    filter: Function
  });
var kT = K({
  name: wT,
  props: _T,
  emits: ["confirm", "cancel", "change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(e.modelValue),
      s = F(),
      a = m => {
        const g = m.split(":");
        return CT.map((y, p) => e.columnsType.includes(y) ? g[p] : "00")
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
          minMinute: y,
          maxMinute: p,
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
            var B;
            v[k] = (B = o.value[I]) != null ? B : 0
          });
          const {
            hour: C,
            minute: _
          } = v;
          if (e.minTime) {
            const [k, I, B] = a(e.minTime);
            m = k, y = +C <= +m ? I : "00", b = +C <= +m && +_ <= +y ? B : "00"
          }
          if (e.maxTime) {
            const [k, I, B] = a(e.maxTime);
            g = k, p = +C >= +g ? I : "59", w = +C >= +g && +_ >= +p ? B : "59"
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
              return si(+y, +p, v, _, C, o.value);
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
    }), () => h(xa, Be({
      ref: s,
      modelValue: o.value,
      "onUpdate:modelValue": m => o.value = m,
      columns: c.value,
      onChange: u,
      onCancel: d,
      onConfirm: f
    }, ze(e, Ph)), n)
  }
});
const ST = ee(kT),
  [TT, Go] = Y("tree-select"),
  xT = {
    max: he(1 / 0),
    items: Ze(),
    height: he(300),
    selectedIcon: te("success"),
    mainActiveIndex: he(0),
    activeId: {
      type: [Number, String, Array],
      default: 0
    }
  };
var ET = K({
  name: TT,
  props: xT,
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
        const u = e.items.map(d => h(om, {
          dot: d.dot,
          badge: d.badge,
          class: [Go("nav-item"), d.className],
          disabled: d.disabled,
          onClick: l
        }, {
          title: () => n["nav-text"] ? n["nav-text"](d) : d.text
        }));
        return h(nm, {
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
const AT = ee(ET),
  [IT, ct, PT] = Y("uploader");

function Uu(e, t) {
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

function fm(e, t) {
  return Us(e).some(n => n.file ? ci(t) ? t(n.file) : n.file.size > +t : !1)
}

function OT(e, t) {
  const n = [],
    o = [];
  return e.forEach(s => {
    fm(s, t) ? o.push(s) : n.push(s)
  }), {
    valid: n,
    invalid: o
  }
}
const RT = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,
  DT = e => RT.test(e);

function hm(e) {
  return e.isImage ? !0 : e.file && e.file.type ? e.file.type.indexOf("image") === 0 : e.url ? DT(e.url) : typeof e.content == "string" ? e.content.indexOf("data:image") === 0 : !1
}
var BT = K({
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
          beforeDelete: y
        } = e;
        d.stopPropagation(), yo(y, {
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
            "aria-label": PT("delete"),
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
          reupload: y
        } = e;
        return hm(d) ? h(Ia, {
          fit: m,
          src: d.objectUrl || d.content || d.url,
          class: ct("preview-image"),
          width: Array.isArray(g) ? g[0] : g,
          height: Array.isArray(g) ? g[1] : g,
          lazyLoad: f,
          onClick: y ? l : a
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
const $T = {
  name: he(""),
  accept: te("image/*"),
  capture: String,
  multiple: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  lazyLoad: Boolean,
  maxCount: he(1 / 0),
  imageFit: te("cover"),
  resultType: te("dataUrl"),
  uploadIcon: te("photograph"),
  uploadText: String,
  deletable: j,
  reupload: Boolean,
  afterRead: Function,
  showUpload: j,
  modelValue: Ze(),
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
var MT = K({
  name: IT,
  props: $T,
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
        if (c(), fm(S, e.maxSize))
          if (Array.isArray(S)) {
            const R = OT(S, e.maxSize);
            if (S = R.valid, t("oversize", R.invalid, r()), !S.length) return
          } else {
            t("oversize", S, r());
            return
          } if (S = Je(S), a.value > -1) {
          const R = [...e.modelValue];
          R.splice(a.value, 1, S), t("update:modelValue", R), a.value = -1
        } else t("update:modelValue", [...e.modelValue, ...Us(S)]);
        e.afterRead && e.afterRead(S, r())
      },
      d = S => {
        const {
          maxCount: R,
          modelValue: D,
          resultType: T
        } = e;
        if (Array.isArray(S)) {
          const P = +R - D.length;
          S.length > P && (S = S.slice(0, P)), Promise.all(S.map(M => Uu(M, T))).then(M => {
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
        } else Uu(S, T).then(P => {
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
          files: R
        } = S.target;
        if (e.disabled || !R || !R.length) return;
        const D = R.length === 1 ? R[0] : [].slice.call(R);
        if (e.beforeRead) {
          const T = e.beforeRead(D, r());
          if (!T) {
            c();
            return
          }
          if (Gl(T)) {
            T.then(P => {
              d(P || D)
            }).catch(c);
            return
          }
        }
        d(D)
      };
    let m;
    const g = () => t("closePreview"),
      y = S => {
        if (e.previewFullImage) {
          const R = e.modelValue.filter(hm),
            D = R.map(T => (T.objectUrl && !T.url && T.status !== "failed" && (T.url = T.objectUrl, s.push(T.url)), T.url)).filter(Boolean);
          m = CC(ke({
            images: D,
            startPosition: R.indexOf(S),
            onClose: g
          }, e.previewOptions))
        }
      },
      p = () => {
        m && m.close()
      },
      b = (S, R) => {
        const D = e.modelValue.slice(0);
        D.splice(R, 1), t("update:modelValue", D), t("delete", S, r(R))
      },
      w = S => {
        l.value = !0, a.value = S, Oe(() => B())
      },
      v = () => {
        l.value || (a.value = -1), l.value = !1
      },
      C = (S, R) => {
        const D = ["imageFit", "deletable", "reupload", "previewSize", "beforeDelete"],
          T = ke(ze(e, D), ze(S, D, !0));
        return h(BT, Be({
          item: S,
          index: R,
          onClick: () => t(e.reupload ? "clickReupload" : "clickPreview", S, r(R)),
          onDelete: () => b(S, R),
          onPreview: () => y(S),
          onReupload: () => w(R)
        }, ze(e, ["name", "lazyLoad"]), T), ze(n, ["preview-cover", "preview-delete"]))
      },
      _ = () => {
        if (e.previewImage) return e.modelValue.map(C)
      },
      k = S => t("clickUpload", S),
      I = () => {
        const S = e.modelValue.length < +e.maxCount,
          R = e.readonly ? null : h("input", {
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
        }, [n.default(), R]), [
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
        }, [e.uploadText]), R]), [
          [dt, e.showUpload && S]
        ])
      },
      B = () => {
        o.value && !e.disabled && o.value.click()
      };
    return kn(() => {
      s.forEach(S => URL.revokeObjectURL(S))
    }), $e({
      chooseFile: B,
      reuploadFile: w,
      closeImagePreview: p
    }), vo(() => e.modelValue), () => h("div", {
      class: ct()
    }, [h("div", {
      class: ct("wrapper", {
        disabled: e.disabled
      })
    }, [_(), I()])])
  }
});
const LT = ee(MT),
  [NT, Wu] = Y("watermark"),
  FT = {
    gapX: lt(0),
    gapY: lt(0),
    image: String,
    width: lt(100),
    height: lt(100),
    rotate: he(-22),
    zIndex: Z,
    content: String,
    opacity: Z,
    fullPage: j,
    textColor: te("#dcdee0")
  };
var VT = K({
  name: NT,
  props: FT,
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
        class: Wu({
          full: e.fullPage
        }),
        style: c
      }, [h("div", {
        class: Wu("wrapper"),
        ref: n
      }, [a()])])
    }
  }
});
const zT = ee(VT),
  HT = "4.9.7";

function UT(e) {
  [Gf, $l, Ip, Hp, ub, Bb, ph, Fb, Lo, Wb, St, i1, d1, v1, un, w1, Mr, xh, x1, B1, N1, U1, W1, Y1, X1, ow, cw, zl, pw, Tw, Iw, Bw, Fw, jw, Qw, Lh, $n, Gw, eC, Ar, iC, rC, fC, Pe, Ia, _C, PC, OC, MC, rn, Hf, VC, WC, e_, r_, nh, f_, v_, xa, y_, gk, cn, bk, Tk, $r, Dr, Pk, Fk, Vk, jk, Jk, nm, om, uS, PS, sm, BS, am, im, NS, HS, KS, XS, JS, ch, iT, xr, rT, Er, Rr, es, dT, gT, Sa, Aa, bT, ST, tb, AT, LT, zT].forEach(n => {
    n.install ? e.use(n) : n.name && e.component(n.name, n)
  })
}
var WT = {
  install: UT,
  version: HT
};
const jT = "modulepreload",
  QT = function(e) {
    return "/" + e
  },
  ju = {},
  It = function(t, n, o) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const l = document.querySelector("meta[property=csp-nonce]"),
        r = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
      s = Promise.allSettled(n.map(c => {
        if (c = QT(c), c in ju) return;
        ju[c] = !0;
        const u = c.endsWith(".css"),
          d = u ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${c}"]${d}`)) return;
        const f = document.createElement("link");
        if (f.rel = u ? "stylesheet" : jT, u || (f.as = "script"), f.crossOrigin = "", f.href = c, r && f.setAttribute("nonce", r), document.head.appendChild(f), u) return new Promise((m, g) => {
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
  pt = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, s] of t) n[o] = s;
    return n
  },
  KT = {
    name: "TermsOfUse"
  },
  YT = {
    class: "container",
    style: {
      "padding-bottom": "100px"
    }
  };

function qT(e, t, n, o, s, a) {
  return z(), G("div", YT, t[0] || (t[0] = [$v('<h1 class="center" data-v-6ae2a584>Zoo Terms of Use</h1><div class="center" data-v-6ae2a584>Last Updated: 12/12/2024</div><h2 data-v-6ae2a584>1. Definitions</h2> The following sections define the capitalised definitions of expressions that begin with capital letters. These definitions should be applied consistently, regardless of whether the expressions are presented in the singular or plural: <br data-v-6ae2a584>• Zoo / The App - is a Mini App available on Telegram, named Zoo, with its usage rules outlined in this document. <br data-v-6ae2a584>• Company - the legal entity named Zorimal Ltd (#2166965, Intershore Chambers, Road Town, Tortola, VG1110). <br data-v-6ae2a584>• Airdrop - the distribution of Tokens to Users of the App, carried out at the Company&#39;s discretion. In case of Token withdrawal after Airdrop, a fee will be deducted by Third-Party Services (e.g., blockchain fee and other fees). The Airdrop is not intended for financial benefit, as the App serves an entertainment purpose and may be discontinued at any time. <br data-v-6ae2a584>• Alliance - consolidation of the App Users in the App. <br data-v-6ae2a584>• In-game Coin «Animal Feed» / Coin - a coin that Users may obtain by engaging with the App&#39;s functionality and/or purchasing them with Telegram Stars. These In-game Coins are designed solely for use within the App, with their usage governed by the Terms and the App&#39;s mechanics. <br data-v-6ae2a584>• Friend - a Telegram messenger user who received an invitation link from you and who is not a member of the App at the time of clicking the invitation link. <br data-v-6ae2a584>• Interface - the visible part of the App. <br data-v-6ae2a584>• Token Zoo / $ZOO - a token that the User can get in case of Airdrop. <br data-v-6ae2a584>• Task - instructions and/or tasks given to Users for the purpose of completing them and obtaining rewards in the form of In-game Coin in the App in accordance with the Terms. <br data-v-6ae2a584>• Third-Party Services - all third-party services to which the Zoo provides access. <br data-v-6ae2a584>• You / you / User - the individual accessing or using the Zoo. Each User is permitted to create and maintain only one account in the App. <h2 data-v-6ae2a584>2. Acceptance of Terms</h2> These Zoo Terms of Use, and any additional policies or terms mentioned in them, establish a legally binding agreement (collectively, the ‘Terms’) between you and Zorimal Ltd, a company incorporated in the British Virgin Islands (#2166965, Intershore Chambers, Road Town, Tortola, VG1110). This agreement regulates your access to and use of the App. <br data-v-6ae2a584>By accessing or using Zoo, you acknowledge that you have read, understood and agreed to be bound by these Terms, including our Privacy Policy. Your continued use of the App serves to confirm your agreement to these Terms and any subsequent changes or updates to them. <br data-v-6ae2a584>The App is not intended for distribution or use by individuals or entities in jurisdictions where such actions would breach local laws or regulations or impose registration or compliance obligations on us. As a result, it is your sole responsibility to ensure that your use of the App complies with all applicable laws in your jurisdiction. <br data-v-6ae2a584>You understand and agree that the use of multiple accounts for a single User is strictly prohibited. Violation of this rule may result in suspension or permanent banning of all associated accounts. <br data-v-6ae2a584>You agree to obtain prior approval before sending a Telegram user an invitation link to our App as well as other promotional links to our App. The Company is not responsible for the actions of Users who violate this requirement. <br data-v-6ae2a584>Use of the App by residents of the United States is strictly prohibited. By accessing or using the App, you certify that you are not a resident of the United States. If you become a resident of the United States or become aware of anyone using the App in the United States, you should immediately report it to us. <br data-v-6ae2a584>You acknowledge and accept that if it is discovered you have misrepresented your residency, citizenship, or location, the Company reserves the right to take appropriate actions, including but not limited to, immediate termination of your access to the App. Furthermore, you accept full responsibility for any failure to disclose your U.S. location and agree to bear any consequences arising from regulatory claims or actions brought by U.S. authorities against the Company. <h2 data-v-6ae2a584>3. The App&#39;s Mechanics</h2><h3 data-v-6ae2a584>3.1 General</h3> Zoo is a Mini App on Telegram that allows Users to create their own in-game zoo by purchasing in-game animals. The User is given the ability to join Alliances, invite Friends and complete Tasks. The User has the ability to earn Token Zoo and receive In-game Coin “Animal Feed” in the ways described below. <h3 data-v-6ae2a584>3.2 In-game Coin “Animal Feed”</h3> Using In-game Coin “Animal Feed” the User can realize the main functionality of the App - to develop the game zoo by purchasing animals and increasing the level of their enclosures. The User can use other functionality of the App with the help of Coin, which is displayed in the App Interface. The User Coin balance is displayed in the App Interface. <br data-v-6ae2a584>In-game Coin “Animal Feed” can be obtained in the following ways: <br data-v-6ae2a584>• Inviting Friends: The User can receive In-game Coins “Animal Feed” by sending an invitation link to a Friend who followed the link in the App. The number of Coins and the conditions for receiving them for inviting friends is displayed in the App Interface. <br data-v-6ae2a584>• Completion of Tasks: The User can receive In-game Coin “Animal Feed” by completing certain Tasks. Tasks are displayed in the App Interface. <br data-v-6ae2a584>• Development of the Alliance: The User can create an Alliance or join an existing Alliance by paying In-game Coin “Animal Feed”. For the development of the Alliance, the User can receive In-game Coin “Animal Feed”. <br data-v-6ae2a584>• Purchase using Telegram Stars: The User buys In-game Coins “Animal Feed” through Telegram Stars. The cost of buying Сoins is displayed in the App Interface. <br data-v-6ae2a584>• The amount of Coins you can get with the above actions is displayed in the App Interface. In-game Coins are not cash and their use is limited by the Terms and App mechanics. <br data-v-6ae2a584>Purchase using Telegram Stars: The User buys In-game Coins “Animal Feed” through Telegram Stars. The cost of buying Сoins is displayed in the App Interface. The User is strictly forbidden to refund by any technical means to Telegram Stars that the User spent on in-app purchases. <h3 data-v-6ae2a584>3.3 Token Zoo</h3> The amount of Tokens Zoo of the User depends on the number and level of animal’s enclosures in zoo, as well as on the level of Alliance in which User can be a member. Each animal brings a certain amount of Tokens Zoo in a certain amount of time depending on the level of animal’s enclosures. The User Token Zoo balance is displayed in the App Interface. <br data-v-6ae2a584>The User can increase the number of Tokens Zoo earned from each animal enclosure in the following ways: <br data-v-6ae2a584>• Increasing level of animal’s enclosures: The User can upgrade the level of the animal enclosure with In-game Coins “Animal Feed”. Each new level increases the number of Tokens Zoo that can be obtained. <br data-v-6ae2a584>• Join the Alliance: Alliances are divided by levels. The level of an Alliance in which the User participates affects the number of bonuses that increase your Token Zoo accumulation. A User can only be a member of one Alliance. The list of Alliances and the amount of bonuses from participation in them is displayed in the App Interface. <br data-v-6ae2a584>• Using boosts: Boosts allow the User to increase the number of Tokens Zoo earned from animal enclosures for a certain amount of time. The boost conditions are displayed in the App Interface. <br data-v-6ae2a584>You can receive earned Tokens Zoo during the Airdrop, which will happen on dates determined by the Company. The number of Tokens Zoo does not depend on the number of your In-game Coins in the App. <h2 data-v-6ae2a584>4. Prohibited Activities</h2> Using of any form of technical automation, including but not limited to bots, scripts, or other automated tools, to interact with or manipulate the App is strictly prohibited. Using of any other form of disruption to the mechanics of the App, including but not limited to refunding Telegram Stars for in-app purchases, is also strictly prohibited. Such actions may lead to immediate account suspension or a permanent ban without prior notice. <h2 data-v-6ae2a584>5. In-App Purchases</h2> All In-App purchases are for entertainment purposes only. By making a purchase, you do so on a voluntary basis and take full responsibility for your decisions. The App disclaims any responsibility for financial or other consequences caused by in-app purchases. <h2 data-v-6ae2a584>6. Changes to Features and Balances</h2> We reserve the right to modify, adjust, or remove any App features, mechanics, balances, or other functionalities at any time without prior notice. Such changes are made at our sole discretion to improve the App or ensure fair usage. Continued use of the App following any changes constitutes your acceptance of the updated features or mechanics. <h2 data-v-6ae2a584>7. Intellectual Property</h2> Unless explicitly stated otherwise, the App, along with all content and materials within it —including but not limited to designs (structural or landscape), text, graphics (static or animated), pictures, data, software, sound files (including music and recordings), audiovisual effects, and their arrangement — are the proprietary property of the Company, its affiliates, licensors, or users, as applicable. <br data-v-6ae2a584>The Zoo logo, as well as the names, services, logos, slogans, and trade names associated with Zorimal Ltd products, are either owned by the Company or used under license and are safeguarded by copyright, trademark laws, and international intellectual property agreements. <br data-v-6ae2a584>Unless explicitly authorized by these Terms, no part of the App or its content may be duplicated, reproduced, compiled, republished, uploaded, shared, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise used for commercial purposes without obtaining prior written consent from the Company. Any mention of products, services, trademarks, manufacturers, or suppliers is provided solely for reference and does not signify endorsement, sponsorship, or recommendation by Zorimal Ltd. <h2 data-v-6ae2a584>8. Disclaimer</h2> General Disclaimer: Zoo is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without any guarantees or assurances, whether explicit or implied, regarding its functionality, information, content, materials, or products contained within. By using the App, you acknowledge and agree that you do so entirely at your own risk and solely for entertainment purposes. <br data-v-6ae2a584>No Warranty for Performance: Zorimal Ltd makes no guarantees that the App will fulfill your particular needs, operate without interruption, be timely, secure, or free from errors. We also do not guarantee the outcomes from using the App or the accuracy and reliability of any information obtained through it. <br data-v-6ae2a584>No Warranty for Technical Issues: Zorimal Ltd assumes no liability for any technical issues, including but not limited to problems with blockchain technology, server failures, software glitches, artificial intelligence errors, or connectivity disruptions that could impact the App&#39;s performance or availability. <br data-v-6ae2a584>No Liability for User Conduct: Zorimal Ltd does not support, guarantee, or take responsibility for the actions or conduct of App users. The Company is not accountable for any content created by users or their activities within the App. <br data-v-6ae2a584>No Warranty for Third-Party Services: The App may contain links to third-party websites or services that are not owned or managed by Zorimal Ltd. The Company has no control over and accepts no responsibility for the content, privacy policies, or practices of these external websites or services. We advise you to review the terms and policies of any third-party services you engage with. By using such links, you acknowledge and agree that Zorimal Ltd is not liable for any damages or losses arising from your use of or reliance on the content, products, or services provided by these third parties. <br data-v-6ae2a584>Limitation of Liability for Damages: To the maximum extent allowed by law, Zorimal Ltd disclaims liability for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, goodwill, data, or other intangible losses. This limitation applies to damages resulting from (i) your use or inability to use the App, (ii) unauthorized access to or modification of your data or transmissions, (iii) actions or statements by third parties within the App, or (iv) any other matter related to the App. <h2 data-v-6ae2a584>9. Privacy</h2> Details about how we collect and use your personal information are outlined in our Privacy Policy. By using the App, you agree to the collection and use of your personal information as described in the Privacy Policy. <h2 data-v-6ae2a584>10. Termination</h2> We reserve the right to revoke or suspend your access to the App at any time, without prior notice or responsibility, for any reason, including but not limited to violations of these Terms. Once terminated, your permission to use the App will cease immediately. Any in-game purchases and achievements will be cancelled and unavailable to you. Any sections of these Terms that are meant to remain in effect after termination will continue to apply, including but not limited to provisions on ownership rights, disclaimers of warranties, indemnity obligations, and limitations of liability. <h2 data-v-6ae2a584>11. Indemnification</h2> You agree to defend, indemnify, and protect the Company, along with its officers, directors, employees, and agents, from any claims, liabilities, damages, losses, or costs — such as reasonable legal and accounting expenses — that result from or relate to your use of the App or any breach of these Terms on your part. <h2 data-v-6ae2a584>12. Governing Law</h2> This Terms is governed by the laws of the British Virgin Islands and will be interpreted in accordance with those laws, without regard to their conflict-of-law rules. <h2 data-v-6ae2a584>13. Dispute Resolution</h2> In case of a dispute, you agree to first attempt to resolve the issue amicably by submitting your complaint to us at dispute@zoo.team. We will provide a response within 30 calendar days. If the matter cannot be resolved through negotiation, it will be decided in the courts of the British Virgin Islands. <h2 data-v-6ae2a584>14. Changes to Terms</h2> We retain the right to revise or amend these terms at any time. By continuing to use or access the App after the updated terms take effect, you acknowledge and accept the changes. <h2 data-v-6ae2a584>15. Binding Terms of Use</h2> By accepting these Terms, you also agree to comply with the <a href="https://telegram.org/tos/mini-apps" data-v-6ae2a584>Telegram Mini App Terms of Use</a>. <h2 data-v-6ae2a584>16. Contact Us</h2> For any questions about these Terms or to share ideas, suggestions, or feedback, please contact us at support@zoo.team. ', 113)]))
}
const GT = pt(KT, [
    ["render", qT],
    ["__scopeId", "data-v-6ae2a584"]
  ]),
  ZT = "/assets/onboarding_1-C7MzEQXq.jpg",
  XT = "/assets/onboarding_2-UoTZ07w1.jpg",
  JT = "/assets/onboarding_3-CzE3Yyga.jpg",
  e2 = {
    components: {
      TermsOfUse: GT
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
  t2 = {
    class: "onboardingStart center",
    style: {
      direction: "ltr"
    }
  },
  n2 = {
    class: "con"
  },
  o2 = {
    class: "zTextShadow2white"
  },
  i2 = {
    class: "panel"
  },
  s2 = {
    class: "center buttonNextContainer"
  },
  a2 = {
    class: "con"
  },
  l2 = {
    class: "zTextShadow2white"
  },
  r2 = {
    class: "panel"
  },
  c2 = {
    class: "center buttonNextContainer"
  },
  u2 = {
    class: "con"
  },
  d2 = {
    class: "panel"
  },
  f2 = {
    class: "center buttonNextContainer"
  },
  h2 = {
    class: "con"
  },
  m2 = {
    class: "zTextShadow2white"
  },
  g2 = {
    class: "flyBtn",
    style: {
      "margin-bottom": "-20px",
      "z-index": "10"
    }
  },
  v2 = {
    class: "flyBtnTitle"
  },
  y2 = {
    class: "panel"
  },
  p2 = {
    class: "center buttonNextContainer"
  },
  b2 = {
    class: "con"
  },
  w2 = {
    class: "zTextShadow2white"
  },
  C2 = {
    class: "panel"
  },
  _2 = {
    class: "center buttonNextContainer"
  },
  k2 = {
    class: "termsOfUse"
  },
  S2 = {
    class: "termsContainer"
  };

function T2(e, t, n, o, s, a) {
  const l = ge("van-button"),
    r = ge("van-swipe-item"),
    c = ge("van-checkbox"),
    u = ge("van-swipe"),
    d = ge("TermsOfUse"),
    f = ge("van-popup");
  return z(), G("div", t2, [h(u, {
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
    default: le(() => [h(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: le(() => [E("div", n2, [E("h2", o2, $(e.t("Welcome to Zoo!")), 1), t[4] || (t[4] = E("img", {
        src: ZT,
        alt: "",
        width: "100%"
      }, null, -1)), E("p", i2, $(e.t("Here, you'll build your very own Zoo!")), 1)]), E("div", s2, [h(l, {
        class: "buttonNext",
        icon: "arrow",
        "icon-position": "right",
        onClick: a.next,
        type: "success",
        round: ""
      }, {
        default: le(() => [pe($(e.t("Next")), 1)]),
        _: 1
      }, 8, ["onClick"])])]),
      _: 1
    }, 8, ["class"]), h(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: le(() => [E("div", a2, [E("h2", l2, $(e.t("Earn coins and upgrade your Zoo")), 1), t[5] || (t[5] = E("img", {
        src: XT,
        alt: "",
        width: "100%"
      }, null, -1)), E("p", r2, $(e.t("The bigger and better your Zoo, the more it mines {TOKEN_NAME}.", {
        TOKEN_NAME: e.TOKEN_NAME
      })), 1)]), E("div", c2, [h(l, {
        class: "buttonNext",
        icon: "arrow",
        "icon-position": "right",
        onClick: a.next,
        type: "success",
        round: ""
      }, {
        default: le(() => [pe($(e.t("Next")), 1)]),
        _: 1
      }, 8, ["onClick"])])]),
      _: 1
    }, 8, ["class"]), h(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: le(() => [E("div", u2, [t[6] || (t[6] = E("h2", {
        class: "zTextShadow2white"
      }, "Airdrop", -1)), t[7] || (t[7] = E("img", {
        src: JT,
        alt: "",
        width: "100%"
      }, null, -1)), E("p", d2, $(e.t("Earn {TOKEN_NAME} tokens through Airdrop based on your progress.", {
        TOKEN_NAME: e.TOKEN_NAME
      })), 1)]), E("div", f2, [h(l, {
        class: "buttonNext",
        icon: "arrow",
        "icon-position": "right",
        onClick: a.next,
        type: "success",
        round: ""
      }, {
        default: le(() => [pe($(e.t("Next")), 1)]),
        _: 1
      }, 8, ["onClick"])])]),
      _: 1
    }, 8, ["class"]), h(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: le(() => [E("div", h2, [E("h2", m2, $(e.t("Create or Join an Alliance")), 1), E("div", g2, [t[8] || (t[8] = E("div", {
        class: "flyBtnCont"
      }, [E("div", {
        class: "flyBtnIcon",
        style: {
          "background-image": "url('/assets/img/decor/icon_ali.png')"
        }
      })], -1)), E("div", v2, $(e.t("Alliance")), 1)]), E("p", y2, $(e.t("Alliance owners receive {PERCENT}% of all contributions, and members gain significant advantages in mining {TOKEN_NAME} tokens.", {
        PERCENT: e.gameConfig["alliance.bonus.founder"],
        TOKEN_NAME: e.TOKEN_NAME
      })), 1)]), E("div", p2, [h(l, {
        class: "buttonNext",
        icon: "arrow",
        "icon-position": "right",
        onClick: a.next,
        type: "success",
        round: ""
      }, {
        default: le(() => [pe($(e.t("Next")), 1)]),
        _: 1
      }, 8, ["onClick"])])]),
      _: 1
    }, 8, ["class"]), h(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: le(() => [E("div", b2, [E("h2", w2, $(e.t("We're having fun together")), 1), E("p", C2, $(e.t("Grow your Zoo, complete quests, invite friends, and take part in the {Airdrop}!")), 1)]), E("div", _2, [E("div", k2, [h(c, {
        modelValue: e.isUserAcceptTermsOfUse,
        "onUpdate:modelValue": t[1] || (t[1] = m => e.isUserAcceptTermsOfUse = m)
      }, {
        default: le(() => [t[9] || (t[9] = pe(" I accept the ")), E("span", {
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
        default: le(() => [pe($(e.t("Start")), 1)]),
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
    default: le(() => [E("div", S2, [h(d)])]),
    _: 1
  }, 8, ["show"])])
}
const x2 = pt(e2, [
  ["render", T2],
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

function A2(e) {
  return Array.from(e).map(t => t.toString(16).padStart(2, "0")).join("")
}

function I2(e) {
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
      let c = I2(String.fromCharCode.apply(null, r));
      return n && (c = c.replace(/\+/g, "-").replace(/\//g, "_")), c
    }
    return this.wc + ":" + A2(this.hashPart)
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
const P2 = {
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
  O2 = {
    class: "contentWrapper"
  },
  R2 = {
    class: "content"
  },
  D2 = {
    key: 1
  },
  B2 = {
    key: 3
  },
  $2 = {
    key: 0,
    class: "imgWrapper"
  };

function M2(e, t, n, o, s, a) {
  const l = ge("van-popup");
  return z(), Me(l, {
    "close-icon": "cross",
    class: ot(["gamePopup", {
      withImg: n.imgUrl
    }]),
    round: n.rounded,
    closeable: n.closeable,
    position: n.position,
    duration: n.duration
  }, {
    default: le(() => [E("div", O2, [E("div", R2, [n.title ? Ce("", !0) : za(e.$slots, "title", {
      key: 0
    }, void 0, !0), n.title ? (z(), G("h1", D2, $(n.title), 1)) : Ce("", !0), n.subtitle ? Ce("", !0) : za(e.$slots, "subtitle", {
      key: 2
    }, void 0, !0), n.subtitle ? (z(), G("h2", B2, $(n.subtitle), 1)) : Ce("", !0), za(e.$slots, "default", {}, void 0, !0)])]), n.imgUrl ? (z(), G("div", $2, [E("div", {
      class: "imgTitle",
      style: an({
        backgroundImage: `url(${n.imgUrl})`
      })
    }, null, 4)])) : Ce("", !0)]),
    _: 3
  }, 8, ["class", "round", "closeable", "position", "duration"])
}
const mm = pt(P2, [
    ["render", M2],
    ["__scopeId", "data-v-5796a2f7"]
  ]),
  Ur = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28%2056C43.464%2056%2056%2043.464%2056%2028C56%2012.536%2043.464%200%2028%200C12.536%200%200%2012.536%200%2028C0%2043.464%2012.536%2056%2028%2056Z'%20fill='%230098EA'/%3e%3cpath%20d='M37.5603%2015.6277H18.4386C14.9228%2015.6277%2012.6944%2019.4202%2014.4632%2022.4861L26.2644%2042.9409C27.0345%2044.2765%2028.9644%2044.2765%2029.7345%2042.9409L41.5381%2022.4861C43.3045%2019.4251%2041.0761%2015.6277%2037.5627%2015.6277H37.5603ZM26.2548%2036.8068L23.6847%2031.8327L17.4833%2020.7414C17.0742%2020.0315%2017.5795%2019.1218%2018.4362%2019.1218H26.2524V36.8092L26.2548%2036.8068ZM38.5108%2020.739L32.3118%2031.8351L29.7417%2036.8068V19.1194H37.5579C38.4146%2019.1194%2038.9199%2020.0291%2038.5108%2020.739Z'%20fill='white'/%3e%3c/svg%3e",
  L2 = {
    components: {
      GamePopup: mm
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
  N2 = {
    class: "ton-wallet"
  },
  F2 = {
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
  z2 = {
    class: "wallet-address"
  },
  H2 = {
    style: {
      margin: "0 10px"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "29",
    viewBox: "0 0 28 29",
    fill: "none"
  };

function U2(e, t, n, o, s, a) {
  const l = ge("van-icon"),
    r = ge("van-button"),
    c = ge("game-popup");
  return z(), G("div", N2, [E("div", F2, [a.showTransactionButton ? Ce("", !0) : (z(), Me(r, {
    key: 0,
    onClick: a.handleClick,
    round: "",
    size: "large",
    loading: n.loading,
    "icon-position": "right",
    type: a.isConnected ? "success" : "warning"
  }, {
    icon: le(() => [(z(), G("svg", V2, t[1] || (t[1] = [E("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z",
      fill: "#FFFFFF"
    }, null, -1)])))]),
    default: le(() => [a.isConnected ? (z(), Me(l, {
      key: 0,
      name: "checked"
    })) : Ce("", !0), pe(" " + $(a.isConnected ? a.addressNonBounceableMedium : e.t("Connect wallet")), 1)]),
    _: 1
  }, 8, ["onClick", "loading", "type"])), a.showTransactionButton ? (z(), Me(r, {
    key: 1,
    round: "",
    type: "success",
    onClick: a.pay,
    loading: n.loading
  }, df({
    default: le(() => [pe(" " + $(n.transactionBtnText ? n.transactionBtnText : e.t("Make a TON transaction")), 1)]),
    _: 2
  }, [n.isShowTransactionIcon ? {
    name: "icon",
    fn: le(() => [t[2] || (t[2] = E("img", {
      src: Ur,
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
    default: le(() => [E("div", z2, [(z(), G("svg", H2, t[3] || (t[3] = [E("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z",
      fill: "#FFFFFF"
    }, null, -1)]))), pe(" " + $(a.addressNonBounceableMedium), 1)]), h(r, {
      round: "",
      onClick: a.connectWallet,
      type: "warning",
      icon: "link-o",
      style: {
        margin: "20px 0 40px 0"
      },
      size: "small"
    }, {
      default: le(() => [pe($(e.t("Connect different wallet")), 1)]),
      _: 1
    }, 8, ["onClick"])]),
    _: 1
  }, 8, ["show", "title"])])
}
const Wr = pt(L2, [
    ["render", U2],
    ["__scopeId", "data-v-49c142f1"]
  ]),
  W2 = {
    components: {
      TonWallet: Wr
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
        this._openUrl(this.openedQuest.actionUrl), await this._delay(500), this.openedQuest.isActionButtonClicked = !0
      },
      async actionCheck(e) {
        this.checkErrorText = null, this.openedQuest.isCheckProgress = !0, e > 0 && await this._delay(e);
        let t = !1;
        if (this.openedQuest.checkRetryCount || (this.openedQuest.checkRetryCount = 1), ["donate_ton", "ton_wallet_transaction"].includes(this.openedQuest.key) && !this.isWalletQuestComplete && this.isWalletConnected && await this.apiCall("saveTonWallet", {
            wallet: (await window.tonConnectUI()).wallet
          }), this.openedQuest.checkType === "fakeCheck") await new Promise(n => setTimeout(n, 1500)), t = !0;
        else
          for (let n = 0; n < this.openedQuest.checkRetryCount; n++) try {
            if (t = (await this.apiCall("checkQuest", [this.openedQuest.key, this.questCheckValueTrimmed], !1)).result, t) break;
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
  j2 = {
    class: "questChallenge"
  },
  Q2 = ["src"],
  K2 = {
    class: "goldLightText"
  },
  Y2 = {
    class: "white"
  },
  q2 = ["src"],
  G2 = {
    class: "container",
    style: {
      "margin-bottom": "40px"
    }
  },
  Z2 = {
    style: {
      display: "flex",
      margin: "20px 0",
      "align-items": "center"
    }
  },
  X2 = ["src"],
  J2 = {
    style: {
      "font-size": "1.2em",
      "font-weight": "bold"
    }
  },
  ex = {
    key: 0
  },
  tx = ["innerHTML"],
  nx = {
    key: 2,
    style: {
      "font-size": "20px",
      "margin-bottom": "20px"
    }
  },
  ox = {
    class: "goldText"
  },
  ix = {
    key: 3
  },
  sx = ["src"],
  ax = {
    key: 4,
    style: {
      margin: "20px 0"
    }
  },
  lx = {
    key: 5,
    style: {
      margin: "20px 0"
    }
  },
  rx = {
    key: 0
  },
  cx = {
    key: 6,
    style: {
      margin: "20px 0"
    }
  },
  ux = {
    key: 7,
    style: {
      "padding-top": "20px"
    }
  },
  dx = {
    key: 0,
    style: {
      margin: "20px 0"
    }
  },
  fx = {
    style: {
      color: "#fff"
    }
  },
  hx = {
    key: 1,
    style: {
      margin: "20px 0"
    }
  },
  mx = {
    style: {
      color: "#fff"
    }
  },
  gx = {
    key: 2
  },
  vx = {
    key: 3,
    style: {
      color: "red"
    }
  },
  yx = {
    key: 8,
    style: {
      margin: "20px 0"
    }
  },
  px = {
    key: 0,
    class: "center",
    style: {
      background: "#afc4f0",
      "border-radius": "8px",
      "margin-bottom": "10px"
    }
  },
  bx = ["src"],
  wx = {
    style: {
      color: "#fff",
      "margin-bottom": "5px"
    }
  },
  Cx = {
    class: "tips"
  },
  _x = {
    key: 9
  },
  kx = {
    key: 0,
    style: {
      color: "red"
    }
  },
  Sx = {
    key: 10
  },
  Tx = {
    key: 11
  };

function xx(e, t, n, o, s, a) {
  const l = ge("van-icon"),
    r = ge("van-badge"),
    c = ge("van-cell"),
    u = ge("van-cell-group"),
    d = ge("van-button"),
    f = ge("ton-wallet"),
    m = ge("van-field"),
    g = ge("van-popup");
  return z(), G("div", j2, [s.extendQuestsProgress.length ? (z(), Me(u, {
    key: 0,
    inset: ""
  }, {
    default: le(() => [(z(!0), G(Re, null, Ft(s.extendQuestsProgress, y => (z(), Me(c, {
      key: y.key,
      onClick: p => a.openQuest(y),
      title: y.title,
      size: "large",
      center: "",
      "is-link": ""
    }, df({
      icon: le(() => [E("img", {
        src: e._getQuestImg(y.key),
        class: "questImg",
        alt: ""
      }, null, 8, Q2)]),
      label: le(() => [E("span", {
        class: ot({
          goldLightText: y.status === "complete"
        })
      }, [pe("+" + $(e._number(y.reward)) + " ", 1), t[8] || (t[8] = E("span", {
        class: "coin25"
      }, null, -1))], 2)]),
      _: 2
    }, [y.status === "complete" ? {
      name: "right-icon",
      fn: le(() => [h(r, {
        dot: ""
      }, {
        default: le(() => [E("span", K2, [pe($(e.t("Take")) + " ", 1), h(l, {
          name: "arrow"
        })])]),
        _: 1
      })]),
      key: "0"
    } : void 0]), 1032, ["onClick", "title"]))), 128))]),
    _: 1
  })) : Ce("", !0), t[20] || (t[20] = E("br", null, null, -1)), s.extendQuestsFinished.length ? (z(), Me(u, {
    key: 1,
    inset: "",
    style: {
      "margin-bottom": "50px"
    }
  }, {
    title: le(() => [E("span", Y2, $(e.t("Completed Tasks")), 1)]),
    default: le(() => [(z(!0), G(Re, null, Ft(s.extendQuestsFinished, y => (z(), Me(c, {
      key: y.key,
      onClick: p => a.openQuest(y),
      size: "large",
      center: "",
      class: "finished"
    }, {
      title: le(() => [pe($(y.title), 1)]),
      icon: le(() => [E("img", {
        src: e._getQuestImg(y.key),
        class: "questImg",
        alt: ""
      }, null, 8, q2)]),
      "right-icon": le(() => [E("span", null, [pe(" +" + $(e._number(y.reward)) + " ", 1), h(l, {
        name: "checked"
      })])]),
      _: 2
    }, 1032, ["onClick"]))), 128))]),
    _: 1
  })) : Ce("", !0), h(g, {
    show: s.isShowQuest,
    "onUpdate:show": t[7] || (t[7] = y => s.isShowQuest = y),
    closeable: "",
    "close-icon": "cross",
    position: "bottom",
    round: ""
  }, {
    default: le(() => [E("div", G2, [E("div", Z2, [E("img", {
      src: e._getQuestImg(s.openedQuest.key),
      class: "questImg",
      alt: ""
    }, null, 8, X2), E("div", null, [E("div", J2, $(s.openedQuest.title), 1), E("div", null, [pe(" +" + $(e._number(s.openedQuest.reward)) + " ", 1), t[9] || (t[9] = E("span", {
      class: "coin25"
    }, null, -1))])])]), s.openedQuest.key.includes("riddle_") ? (z(), G("p", ex, '"' + $(s.openedQuest.desc) + '"', 1)) : (z(), G("p", {
      key: 1,
      innerHTML: s.openedQuest.desc.replace(/\n/g, "<br />").replace("{reward}", e._number(s.openedQuest.reward))
    }, null, 8, tx)), s.openedQuest.status === "finished" && (s.openedQuest.key.includes("rebus_") || s.openedQuest.key.includes("riddle_")) ? (z(), G("div", nx, [t[10] || (t[10] = pe(" ✅ ")), E("span", ox, $(s.openedQuest.checkData), 1)])) : Ce("", !0), s.openedQuest.checkType === "multiQuest" ? (z(), G("div", ix, [E("div", null, $(e.t("To get the reward complete the quests:")), 1), (z(!0), G(Re, null, Ft(s.openedQuest.multiQuests, y => (z(), G("div", {
      key: "subQuest" + y.key,
      class: ot(["subQuest", y.isComplete ? "subQuestDone" : ""])
    }, [E("img", {
      src: e._getQuestImg(y.key),
      alt: ""
    }, null, 8, sx), y.isComplete ? (z(), Me(l, {
      key: 0,
      name: "checked",
      style: {
        margin: "0 5px"
      }
    })) : Ce("", !0), t[11] || (t[11] = pe()), E("span", null, $(y.title), 1)], 2))), 128))])) : Ce("", !0), E("div", null, [s.openedQuest.actionUrl ? (z(), Me(d, {
      key: 0,
      type: s.openedQuest.status === "complete" ? "success" : "warning",
      round: "",
      onClick: a.actionButtonClick,
      size: "large"
    }, {
      default: le(() => [pe($(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["type", "onClick"])) : Ce("", !0), s.openedQuest.actionTo ? (z(), Me(d, {
      key: 1,
      type: s.openedQuest.status === "complete" ? "success" : "warning",
      round: "",
      to: s.openedQuest.actionTo,
      size: "large"
    }, {
      default: le(() => [pe($(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["type", "to"])) : Ce("", !0), s.openedQuest.checkType === "invite" ? (z(), Me(d, {
      key: 2,
      type: s.openedQuest.status === "complete" ? "success" : "warning",
      round: "",
      size: "large",
      onClick: e._shareBtnClick
    }, {
      default: le(() => [pe($(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["type", "onClick"])) : Ce("", !0)]), s.openedQuest.status === "new" && s.openedQuest.key.includes("ton_wallet_") ? (z(), G("div", ax, [h(f, {
      "transaction-value": s.openedQuest.isCheckProgress ? 0 : s.openedQuest.tonTransactionValue,
      "saved-wallet": s.connectedWallet,
      onWalletConnectHandler: a.tonConnectStatusHandler,
      onPaid: t[0] || (t[0] = y => a.actionCheck(5e3)),
      loading: s.openedQuest.isCheckProgress
    }, null, 8, ["transaction-value", "saved-wallet", "onWalletConnectHandler", "loading"])])) : Ce("", !0), s.openedQuest.status === "new" && s.openedQuest.key.includes("donate_ton") ? (z(), G("div", lx, [h(f, {
      onError: t[1] || (t[1] = y => s.isTransactionError = !0),
      "transaction-value": s.openedQuest.isCheckProgress ? 0 : s.openedQuest.checkCount,
      "saved-wallet": s.connectedWallet,
      onWalletConnectHandler: a.tonConnectStatusHandler,
      "transaction-address": e.uTonDonateAddress,
      onPaid: t[2] || (t[2] = y => a.actionCheck(5e3)),
      loading: s.openedQuest.isCheckProgress
    }, null, 8, ["transaction-value", "saved-wallet", "onWalletConnectHandler", "transaction-address", "loading"]), s.isTransactionError ? (z(), G("div", rx, [E("p", null, $(e.t("Encountered an error? Reconnect the wallet and try again.")), 1), h(d, {
      color: "darkorange",
      size: "small",
      round: "",
      onClick: a.reconnectWallet
    }, {
      default: le(() => [pe($(e.t("Reconnect wallet")), 1)]),
      _: 1
    }, 8, ["onClick"])])) : Ce("", !0)])) : Ce("", !0), s.openedQuest.status === "new" && s.openedQuest.key.includes("tg_story") ? (z(), G("div", cx, [h(d, {
      type: "success",
      size: "small",
      round: "",
      onClick: e.shareStory,
      loading: s.openedQuest.isCheckProgress
    }, {
      default: le(() => [pe($(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["onClick", "loading"])])) : Ce("", !0), s.openedQuest.needCheck && s.openedQuest.status === "new" && s.openedQuest.isActionButtonClicked && a.showWalletCheckButton ? (z(), G("div", ux, [
      ["bybit", "bybit_kyc", "bybit_deposit"].includes(s.openedQuest.checkType) ? (z(), G("div", dx, [E("p", null, [E("span", fx, $(e.t("Enter your {Bybit} UID")), 1), t[12] || (t[12] = E("br", null, null, -1)), pe(" " + $(e.t("Only accounts registered using the button above or entering the code: 86127 during registration can participate.")), 1)]), h(m, {
        modelValue: s.questCheckValue,
        "onUpdate:modelValue": t[3] || (t[3] = y => s.questCheckValue = y),
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
      }, null, 8, ["modelValue", "placeholder"])])) : s.openedQuest.checkType === "checkCode" ? (z(), G("div", hx, [E("p", mx, $(e.t("Enter code")), 1), h(m, {
        modelValue: s.questCheckValue,
        "onUpdate:modelValue": t[4] || (t[4] = y => s.questCheckValue = y),
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
      }, null, 8, ["modelValue", "placeholder"])])) : (z(), G("p", gx, $(e.t("After this action, click Check action.")), 1)), h(d, {
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
        default: le(() => [pe($(e.t("Check action")), 1)]),
        _: 1
      }, 8, ["onClick", "loading", "loading-text"]), s.checkErrorText ? (z(), G("div", vx, $(s.checkErrorText), 1)) : Ce("", !0)
    ])) : s.openedQuest.status === "new" && (s.openedQuest.key.includes("rebus_") || s.openedQuest.key.includes("riddle_")) ? (z(), G("div", yx, [s.openedQuest.key.includes("rebus_") ? (z(), G("div", px, [E("img", {
      src: a.getRebusImg(s.openedQuest.key),
      alt: "",
      style: {
        "max-height": "150px"
      }
    }, null, 8, bx)])) : Ce("", !0), E("div", wx, $(e.t("Enter answer:")), 1), h(m, {
      modelValue: s.questCheckValue,
      "onUpdate:modelValue": t[5] || (t[5] = y => s.questCheckValue = y),
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
    }, null, 8, ["modelValue", "placeholder"]), t[14] || (t[14] = E("br", null, null, -1)), E("div", Cx, [pe($(e.t("Write the answer in English.")), 1), t[13] || (t[13] = E("br", null, null, -1)), pe(" " + $(e.t("If it's difficult for you, look for communities where they can help you.")), 1)])])) : Ce("", !0), s.openedQuest.status === "new" && s.openedQuest.key !== "tg_story" && !s.openedQuest.actionTo && !s.openedQuest.actionUrl && (s.openedQuest.checkType === "fakeCheck" || s.openedQuest.checkType === "checkCode") ? (z(), G("div", _x, [h(d, {
      type: "success",
      round: "",
      onClick: a.actionCheck,
      loading: s.openedQuest.isCheckProgress,
      "loading-text": e.t("Checking...")
    }, {
      default: le(() => [pe($(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["onClick", "loading", "loading-text"]), s.checkErrorText ? (z(), G("div", kx, $(s.checkErrorText), 1)) : Ce("", !0)])) : Ce("", !0), s.openedQuest.key.includes("name_check") ? (z(), G("div", Sx, [t[15] || (t[15] = E("br", null, null, -1)), t[16] || (t[16] = E("br", null, null, -1)), h(d, {
      icon: "link-o",
      onClick: t[6] || (t[6] = y => e._copyToClipboard(s.openedQuest.checkData)),
      round: "",
      loading: s.isQuestsUpdate,
      size: "large",
      type: "success"
    }, {
      default: le(() => [pe($(e.t("Copy emoji {emoji}", {
        emoji: s.openedQuest.checkData
      })), 1)]),
      _: 1
    }, 8, ["loading"])])) : Ce("", !0), !s.openedQuest.needCheck && s.openedQuest.status === "new" ? (z(), G("div", Tx, [t[17] || (t[17] = E("br", null, null, -1)), t[18] || (t[18] = E("br", null, null, -1)), h(d, {
      icon: "replay",
      onClick: a.updateQuestStatus,
      round: "",
      loading: s.isQuestsUpdate,
      "loading-text": e.t("Updating..."),
      size: "mini",
      type: "success"
    }, {
      default: le(() => [pe($(e.t("Update status")), 1)]),
      _: 1
    }, 8, ["onClick", "loading", "loading-text"])])) : Ce("", !0), s.openedQuest.status === "complete" ? (z(), Me(d, {
      key: 12,
      type: "warning",
      round: "",
      class: "btnFinish btnShadow clicked",
      size: "large",
      onClick: a.claimQuest,
      loading: s.isClaimLoading
    }, {
      default: le(() => [pe($(e.t("Take")) + " +" + $(e._number(s.openedQuest.reward)) + " ", 1), t[19] || (t[19] = E("span", {
        class: "coin25"
      }, null, -1))]),
      _: 1
    }, 8, ["onClick", "loading"])) : Ce("", !0)])]),
    _: 1
  }, 8, ["show"])])
}
const Ex = pt(W2, [
    ["render", xx],
    ["__scopeId", "data-v-78a6c881"]
  ]),
  Ax = {
    components: {
      GamePopup: mm
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
  Ix = {
    class: "content"
  },
  Px = {
    style: {
      "font-size": "1.2em",
      "margin-bottom": "10px"
    }
  },
  Ox = {
    key: 0
  },
  Rx = {
    key: 1
  },
  Dx = {
    class: "action"
  },
  Bx = {
    key: 1
  },
  $x = {
    class: "center"
  },
  Mx = {
    class: "timer",
    style: {
      display: "inline-block",
      "font-size": "1.3em",
      "font-weight": "800"
    }
  },
  Lx = {
    class: "dailyRewardGrid"
  },
  Nx = ["onClick"],
  Fx = {
    class: "day"
  },
  Vx = {
    class: "reward zTextShadow2white",
    style: {
      "font-weight": "800",
      "font-size": "1.4em"
    }
  },
  zx = {
    key: 0,
    class: "dailyRewardPopupBottomClaim"
  };

function Hx(e, t, n, o, s, a) {
  const l = ge("van-count-down"),
    r = ge("van-icon"),
    c = ge("van-badge"),
    u = ge("van-button"),
    d = ge("van-popup");
  return z(), G("div", null, [E("div", {
    class: ot(["dailyReward clicked", {
      grayscale: !a.isDailyCanTake
    }]),
    onClick: t[0] || (t[0] = f => s.isShowDailyReward = !0)
  }, [t[4] || (t[4] = E("div", {
    class: "icon"
  }, [E("div", {
    class: "img"
  }, [E("span", {
    class: "coin60"
  })])], -1)), E("div", Ix, [E("div", Px, $(e.t("Daily reward")), 1), E("div", null, [a.isDailyCanTake ? (z(), G("span", Rx, $(e.t("Hurry up and get it")), 1)) : (z(), G("span", Ox, $(e.t("Can be claim in")), 1)), t[3] || (t[3] = pe("  ")), h(l, {
    time: s.timeToNextDay,
    class: "countDown",
    style: {
      color: "#fff",
      "font-weight": "bold",
      width: "7ch",
      display: "inline-block"
    }
  }, null, 8, ["time"])])]), E("div", Dx, [a.isDailyCanTake ? (z(), Me(c, {
    key: 0,
    dot: "",
    style: {
      "white-space": "nowrap"
    }
  }, {
    default: le(() => [pe($(e.t("Claim")) + " ", 1), h(r, {
      name: "arrow"
    })]),
    _: 1
  })) : (z(), G("div", Bx, [h(r, {
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
    default: le(() => [E("div", $x, [E("h1", null, $(e.t("Daily reward")), 1), E("p", null, $(e.t("If you miss a day, you start all over again")), 1), E("div", Mx, [pe($(e.t("Until the next day:")) + " ", 1), h(l, {
      time: s.timeToNextDay,
      style: {
        display: "inline-block",
        "padding-right": "5px",
        "font-size": "1.3em",
        width: "7ch"
      }
    }, null, 8, ["time"])])]), t[6] || (t[6] = E("br", null, null, -1)), E("div", Lx, [(z(!0), G(Re, null, Ft(a.rewardsExtend, f => (z(), G("div", {
      class: ot(["rewardItem", {
        isTaken: !f.isTaken,
        isCanTake: f.isCanTake,
        clicked: f.isCanTake
      }]),
      key: f.key,
      onClick: m => f.isCanTake ? a.claimDailyReward(f) : ""
    }, [E("div", Fx, $(e.t("Day")) + " " + $(f.key), 1), t[5] || (t[5] = E("div", {
      class: "rewardIcon"
    }, null, -1)), E("div", Vx, $(e._numberShort(f.rewardMoney)), 1), f.isTaken ? (z(), Me(r, {
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
    })) : Ce("", !0)], 10, Nx))), 128))]), a.isDailyCanTake ? (z(), G("div", zx, [h(u, {
      type: "warning",
      size: "large",
      round: "",
      style: {
        "font-size": "1.2em"
      },
      loading: s.isClaimLoading,
      onClick: t[1] || (t[1] = f => a.claimDailyReward(s.lastDailyRewardCanTake))
    }, {
      default: le(() => [pe($(e.t("Claim Reward")), 1)]),
      _: 1
    }, 8, ["loading"])])) : Ce("", !0)]),
    _: 1
  }, 8, ["show", "style"])])
}
const Ux = pt(Ax, [
  ["render", Hx],
  ["__scopeId", "data-v-8158abb7"]
]);
var Wx = !1;
/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
let gm;
const Ra = e => gm = e,
  vm = Symbol();

function jl(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var Ui;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})(Ui || (Ui = {}));

function jx() {
  const e = Td(!0),
    t = e.run(() => F({}));
  let n = [],
    o = [];
  const s = cr({
    install(a) {
      Ra(s), s._a = a, a.provide(vm, s), a.config.globalProperties.$pinia = s, o.forEach(l => n.push(l)), o = []
    },
    use(a) {
      return !this._a && !Wx ? o.push(a) : n.push(a), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map,
    state: t
  });
  return s
}
const ym = () => {};

function Qu(e, t, n, o = ym) {
  e.push(t);
  const s = () => {
    const a = e.indexOf(t);
    a > -1 && (e.splice(a, 1), o())
  };
  return !n && xd() && ag(s), s
}

function Zo(e, ...t) {
  e.slice().forEach(n => {
    n(...t)
  })
}
const Qx = e => e(),
  Ku = Symbol(),
  ml = Symbol();

function Ql(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, o) => e.set(o, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const o = t[n],
      s = e[n];
    jl(s) && jl(o) && e.hasOwnProperty(n) && !it(o) && !lo(o) ? e[n] = Ql(s, o) : e[n] = o
  }
  return e
}
const Kx = Symbol();

function Yx(e) {
  return !jl(e) || !e.hasOwnProperty(Kx)
}
const {
  assign: eo
} = Object;

function qx(e) {
  return !!(it(e) && e.effect)
}

function Gx(e, t, n, o) {
  const {
    state: s,
    actions: a,
    getters: l
  } = t, r = n.state.value[e];
  let c;

  function u() {
    r || (n.state.value[e] = s ? s() : {});
    const d = Rg(n.state.value[e]);
    return eo(d, a, Object.keys(l || {}).reduce((f, m) => (f[m] = cr(N(() => {
      Ra(n);
      const g = n._s.get(e);
      return l[m].call(g, g)
    })), f), {}))
  }
  return c = pm(e, u, t, n, o, !0), c
}

function pm(e, t, n = {}, o, s, a) {
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
  const y = o.state.value[e];
  !a && !y && (o.state.value[e] = {}), F({});
  let p;

  function b(S) {
    let R;
    u = d = !1, typeof S == "function" ? (S(o.state.value[e]), R = {
      type: Ui.patchFunction,
      storeId: e,
      events: g
    }) : (Ql(o.state.value[e], S), R = {
      type: Ui.patchObject,
      payload: S,
      storeId: e,
      events: g
    });
    const D = p = Symbol();
    Oe().then(() => {
      p === D && (u = !0)
    }), d = !0, Zo(f, R, o.state.value[e])
  }
  const w = a ? function() {
    const {
      state: R
    } = n, D = R ? R() : {};
    this.$patch(T => {
      eo(T, D)
    })
  } : ym;

  function v() {
    l.stop(), f = [], m = [], o._s.delete(e)
  }
  const C = (S, R = "") => {
      if (Ku in S) return S[ml] = R, S;
      const D = function() {
        Ra(o);
        const T = Array.from(arguments),
          P = [],
          M = [];

        function J(ne) {
          P.push(ne)
        }

        function ce(ne) {
          M.push(ne)
        }
        Zo(m, {
          args: T,
          name: D[ml],
          store: k,
          after: J,
          onError: ce
        });
        let W;
        try {
          W = S.apply(this && this.$id === e ? this : k, T)
        } catch (ne) {
          throw Zo(M, ne), ne
        }
        return W instanceof Promise ? W.then(ne => (Zo(P, ne), ne)).catch(ne => (Zo(M, ne), Promise.reject(ne))) : (Zo(P, W), W)
      };
      return D[Ku] = !0, D[ml] = R, D
    },
    _ = {
      _p: o,
      $id: e,
      $onAction: Qu.bind(null, m),
      $patch: b,
      $reset: w,
      $subscribe(S, R = {}) {
        const D = Qu(f, S, R.detached, () => T()),
          T = l.run(() => re(() => o.state.value[e], P => {
            (R.flush === "sync" ? d : u) && S({
              storeId: e,
              type: Ui.direct,
              events: g
            }, P)
          }, eo({}, c, R)));
        return D
      },
      $dispose: v
    },
    k = Je(_);
  o._s.set(e, k);
  const B = (o._a && o._a.runWithContext || Qx)(() => o._e.run(() => (l = Td()).run(() => t({
    action: C
  }))));
  for (const S in B) {
    const R = B[S];
    if (it(R) && !qx(R) || lo(R)) a || (y && Yx(R) && (it(R) ? R.value = y[S] : Ql(R, y[S])), o.state.value[e][S] = R);
    else if (typeof R == "function") {
      const D = C(R, S);
      B[S] = D, r.actions[S] = R
    }
  }
  return eo(k, B), eo(He(k), B), Object.defineProperty(k, "$state", {
    get: () => o.state.value[e],
    set: S => {
      b(R => {
        eo(R, S)
      })
    }
  }), o._p.forEach(S => {
    eo(k, l.run(() => S({
      store: k,
      app: o._a,
      pinia: o,
      options: r
    })))
  }), y && a && n.hydrate && n.hydrate(k.$state, y), u = !0, d = !0, k
}

function jr(e, t, n) {
  let o, s;
  const a = typeof t == "function";
  typeof e == "string" ? (o = e, s = a ? n : t) : (s = e, o = e.id);

  function l(r, c) {
    const u = dv();
    return r = r || (u ? Rt(vm, null) : null), r && Ra(r), r = gm, r._s.has(o) || (a ? pm(o, t, s, r) : Gx(o, s, r)), r._s.get(o)
  }
  return l.$id = o, l
}
const ao = jr("user", {
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
  Qr = jr("state", {
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
  bm = jr("db", {
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
  wm = "api.zoo.team",
  Cm = "game.zoo.team",
  _m = function(e) {
    let t = document.cookie.split(";");
    for (let n = 0; n < t.length; n++) {
      let o = t[n].split("=");
      if (e === o[0].trim()) return decodeURIComponent(o[1])
    }
    return null
  },
  km = function(e) {
    const t = function(g) {
      var y = n(s(a(o(g), 8 * g.length)));
      return y.toLowerCase()
    };

    function n(g) {
      for (var y, p = "0123456789ABCDEF", b = "", w = 0; w < g.length; w++) y = g.charCodeAt(w), b += p.charAt(y >>> 4 & 15) + p.charAt(15 & y);
      return b
    }

    function o(g) {
      for (var y = Array(g.length >> 2), p = 0; p < y.length; p++) y[p] = 0;
      for (p = 0; p < 8 * g.length; p += 8) y[p >> 5] |= (255 & g.charCodeAt(p / 8)) << p % 32;
      return y
    }

    function s(g) {
      for (var y = "", p = 0; p < 32 * g.length; p += 8) y += String.fromCharCode(g[p >> 5] >>> p % 32 & 255);
      return y
    }

    function a(g, y) {
      g[y >> 5] |= 128 << y % 32, g[14 + (y + 64 >>> 9 << 4)] = y;
      for (var p = 1732584193, b = -271733879, w = -1732584194, v = 271733878, C = 0; C < g.length; C += 16) {
        var _ = p,
          k = b,
          I = w,
          B = v;
        b = d(b = d(b = d(b = d(b = u(b = u(b = u(b = u(b = c(b = c(b = c(b = c(b = r(b = r(b = r(b = r(b, w = r(w, v = r(v, p = r(p, b, w, v, g[C + 0], 7, -680876936), b, w, g[C + 1], 12, -389564586), p, b, g[C + 2], 17, 606105819), v, p, g[C + 3], 22, -1044525330), w = r(w, v = r(v, p = r(p, b, w, v, g[C + 4], 7, -176418897), b, w, g[C + 5], 12, 1200080426), p, b, g[C + 6], 17, -1473231341), v, p, g[C + 7], 22, -45705983), w = r(w, v = r(v, p = r(p, b, w, v, g[C + 8], 7, 1770035416), b, w, g[C + 9], 12, -1958414417), p, b, g[C + 10], 17, -42063), v, p, g[C + 11], 22, -1990404162), w = r(w, v = r(v, p = r(p, b, w, v, g[C + 12], 7, 1804603682), b, w, g[C + 13], 12, -40341101), p, b, g[C + 14], 17, -1502002290), v, p, g[C + 15], 22, 1236535329), w = c(w, v = c(v, p = c(p, b, w, v, g[C + 1], 5, -165796510), b, w, g[C + 6], 9, -1069501632), p, b, g[C + 11], 14, 643717713), v, p, g[C + 0], 20, -373897302), w = c(w, v = c(v, p = c(p, b, w, v, g[C + 5], 5, -701558691), b, w, g[C + 10], 9, 38016083), p, b, g[C + 15], 14, -660478335), v, p, g[C + 4], 20, -405537848), w = c(w, v = c(v, p = c(p, b, w, v, g[C + 9], 5, 568446438), b, w, g[C + 14], 9, -1019803690), p, b, g[C + 3], 14, -187363961), v, p, g[C + 8], 20, 1163531501), w = c(w, v = c(v, p = c(p, b, w, v, g[C + 13], 5, -1444681467), b, w, g[C + 2], 9, -51403784), p, b, g[C + 7], 14, 1735328473), v, p, g[C + 12], 20, -1926607734), w = u(w, v = u(v, p = u(p, b, w, v, g[C + 5], 4, -378558), b, w, g[C + 8], 11, -2022574463), p, b, g[C + 11], 16, 1839030562), v, p, g[C + 14], 23, -35309556), w = u(w, v = u(v, p = u(p, b, w, v, g[C + 1], 4, -1530992060), b, w, g[C + 4], 11, 1272893353), p, b, g[C + 7], 16, -155497632), v, p, g[C + 10], 23, -1094730640), w = u(w, v = u(v, p = u(p, b, w, v, g[C + 13], 4, 681279174), b, w, g[C + 0], 11, -358537222), p, b, g[C + 3], 16, -722521979), v, p, g[C + 6], 23, 76029189), w = u(w, v = u(v, p = u(p, b, w, v, g[C + 9], 4, -640364487), b, w, g[C + 12], 11, -421815835), p, b, g[C + 15], 16, 530742520), v, p, g[C + 2], 23, -995338651), w = d(w, v = d(v, p = d(p, b, w, v, g[C + 0], 6, -198630844), b, w, g[C + 7], 10, 1126891415), p, b, g[C + 14], 15, -1416354905), v, p, g[C + 5], 21, -57434055), w = d(w, v = d(v, p = d(p, b, w, v, g[C + 12], 6, 1700485571), b, w, g[C + 3], 10, -1894986606), p, b, g[C + 10], 15, -1051523), v, p, g[C + 1], 21, -2054922799), w = d(w, v = d(v, p = d(p, b, w, v, g[C + 8], 6, 1873313359), b, w, g[C + 15], 10, -30611744), p, b, g[C + 6], 15, -1560198380), v, p, g[C + 13], 21, 1309151649), w = d(w, v = d(v, p = d(p, b, w, v, g[C + 4], 6, -145523070), b, w, g[C + 11], 10, -1120210379), p, b, g[C + 2], 15, 718787259), v, p, g[C + 9], 21, -343485551), p = f(p, _), b = f(b, k), w = f(w, I), v = f(v, B)
      }
      return Array(p, b, w, v)
    }

    function l(g, y, p, b, w, v) {
      return f(m(f(f(y, g), f(b, v)), w), p)
    }

    function r(g, y, p, b, w, v, C) {
      return l(y & p | ~y & b, g, y, w, v, C)
    }

    function c(g, y, p, b, w, v, C) {
      return l(y & b | p & ~b, g, y, w, v, C)
    }

    function u(g, y, p, b, w, v, C) {
      return l(y ^ p ^ b, g, y, w, v, C)
    }

    function d(g, y, p, b, w, v, C) {
      return l(p ^ (y | ~b), g, y, w, v, C)
    }

    function f(g, y) {
      var p = (65535 & g) + (65535 & y);
      return (g >> 16) + (y >> 16) + (p >> 16) << 16 | 65535 & p
    }

    function m(g, y) {
      return g << y | g >>> 32 - y
    }
    return t(e)
  },
  Yu = function(e, t) {
    return Object.keys(t).length === 0 ? e : e + "?" + (void 0)(t, {
      arrayFormat: "bracket"
    })
  },
  Zx = function() {
    return Date.now()
  },
  Xx = function() {
    return 1e3
  },
  Jx = function() {
    return Math.floor(Zx() / Xx())
  },
  eE = function(e, t) {
    return km(encodeURIComponent(`${e}_${t}`))
  },
  tE = function(e, t) {
    const n = ao(),
      o = !!e;
    e instanceof Object && (e = JSON.stringify(e));
    const s = Jx(),
      a = eE(s, o ? e : "");
    return {
      method: o ? "post" : "get",
      credentials: "include",
      ...t,
      headers: {
        "Content-Type": "application/json",
        "Api-Key": n.authHash ?? "empty",
        "Api-Time": s,
        "Api-Hash": a,
        "Is-Beta-Server": _m("is_beta_server")
      },
      body: o ? e : null
    }
  },
  nE = async function(e, t, n) {
    const o = `https://${wm}${e}`;
    let s = null,
      a = 1e3,
      l = null;
    try {
      s = await (await fetch(Yu(o, t), tE(n))).json()
    } catch (r) {
      await new Promise(c => setTimeout(c, a * Math.pow(1.8, i))), console.error(r + ": " + Yu(o, t)), l = r
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
      a = await nE(s, {}, {
        data: t
      });
    if (a.success) console.log(`>>> api: ${e} response: %o`, a.data);
    else throw ao().authHash && n && uo({
      type: "danger",
      message: a.error ? a.error : "Some problem... please repeat"
    }), a.error;
    return a.data
  }, oE = {
    data() {
      return {
        stores: {
          user: ao(),
          state: Qr(),
          db: bm()
        }
      }
    },
    methods: {
      apiCall: oa
    }
  }, iE = {
    methods: {}
  }, sE = {
    key: 0,
    class: "panelBrown",
    style: {
      "margin-bottom": "15px"
    }
  }, aE = {
    class: "flexLeft",
    style: {
      "margin-bottom": "10px"
    }
  }, lE = {
    style: {
      margin: "0 15px"
    }
  }, rE = {
    class: "noMargin"
  }, cE = {
    class: "white"
  };

function uE(e, t, n, o, s, a) {
  return e.stores.state.luckyHourTimerStr ? (z(), G("div", sE, [E("div", aE, [t[0] || (t[0] = E("div", {
    style: {
      "font-size": "3em",
      "padding-top": "5px"
    }
  }, "🎁", -1)), E("div", lE, [E("h1", rE, $(e.t("Happy hour")), 1), E("div", cE, $(e.t("Ending in {time}", {
    time: e.stores.state.luckyHourTimerStr
  })), 1)])]), E("div", null, $(e.t("When buying Animal Feed during happy hours, you can get a random bonus of up to {count}%. Minimum bonus {minBonus}%.", {
    count: 1e3,
    minBonus: 10
  })), 1)])) : Ce("", !0)
}
const dE = pt(iE, [
    ["render", uE]
  ]),
  fE = {
    props: {
      lackOfCoin: {
        type: Number,
        default: 0
      }
    },
    components: {
      LuckyHoursInform: dE,
      TonWallet: Wr
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
  hE = {
    key: 0
  },
  mE = ["innerHTML"],
  gE = {
    style: {
      "font-size": "1.3em",
      "font-weight": "700",
      "margin-bottom": "10px"
    }
  },
  vE = {
    key: 1,
    class: "panelBrown flexLeft",
    style: {
      margin: "10px 0"
    }
  },
  yE = {
    style: {
      padding: "0 10px"
    }
  },
  pE = {
    style: {
      "font-size": "1.4em",
      "font-weight": "700"
    }
  },
  bE = {
    style: {
      color: "var(--van-text-color-2)"
    },
    class: "flexRight"
  },
  wE = {
    key: 0
  },
  CE = {
    key: 1
  },
  _E = {
    class: "flexCenter"
  },
  kE = {
    class: "flexLeft"
  },
  SE = {
    style: {
      margin: "0 10px"
    }
  },
  TE = {
    key: 0,
    class: "center"
  },
  xE = {
    key: 0
  },
  EE = {
    class: "tableHistory"
  },
  AE = {
    key: 0,
    src: Ur,
    alt: "TON Logo",
    width: "15px"
  },
  IE = ["onClick"],
  PE = {
    style: {
      "border-bottom": "1px dashed #fff"
    }
  },
  OE = {
    key: 0,
    style: {
      "margin-top": "10px"
    }
  },
  RE = {
    key: 1,
    class: "center"
  };

function DE(e, t, n, o, s, a) {
  const l = ge("lucky-hours-inform"),
    r = ge("van-tab"),
    c = ge("van-tabs"),
    u = ge("van-icon"),
    d = ge("van-button"),
    f = ge("van-badge"),
    m = ge("van-cell"),
    g = ge("van-cell-group"),
    y = ge("van-loading");
  return z(), G("div", null, [n.lackOfCoin > 0 ? (z(), G("div", hE, [E("h1", {
    innerHTML: e.t("You are {count} {IMG_COIN} short to make this purchase", {
      count: e._number(n.lackOfCoin),
      IMG_COIN: e.IMG_COIN
    })
  }, null, 8, mE), E("div", gE, $(e.t("Top up your balance:")), 1)])) : Ce("", !0), h(l), h(c, {
    active: e.paymentType,
    "onUpdate:active": t[0] || (t[0] = p => e.paymentType = p),
    type: "card",
    ellipsis: !1,
    style: {
      "margin-bottom": "5px"
    }
  }, {
    default: le(() => [h(r, {
      name: "stars",
      title: e.t("Stars")
    }, null, 8, ["title"]), h(r, {
      name: "ton",
      title: "TON",
      dot: !e._isOnboardingComplete(e.onBoard.buyTon)
    }, null, 8, ["dot"])]),
    _: 1
  }, 8, ["active"]), e.paymentType === "ton" && e.isTonLoading ? (z(), G("div", vE, [h(u, {
    name: "warning-o"
  }), E("div", yE, [pe(" • " + $(e.t("Transaction processing may take a few minutes.")) + " ", 1), t[1] || (t[1] = E("br", null, null, -1)), pe(" • " + $(e.t("You can leave this page, {COIN_NAME} will be credited automatically.", {
    COIN_NAME: e.COIN_NAME
  })), 1), t[2] || (t[2] = E("br", null, null, -1)), pe(" • " + $(e.t("You can view the list of processed transactions in the history section at the bottom.")), 1)])])) : Ce("", !0), h(g, {
    inset: "",
    class: "noMargin"
  }, {
    default: le(() => [(z(!0), G(Re, null, Ft(e.dbPurchase, p => (z(), Me(m, {
      key: p.coins + "_" + p.price,
      center: ""
    }, {
      title: le(() => [t[3] || (t[3] = E("span", {
        class: "coin33"
      }, null, -1)), t[4] || (t[4] = pe()), E("span", pE, $(e._number(p.coins)), 1)]),
      "right-icon": le(() => [E("div", bE, [p.key === 1e4 ? (z(), G("span", wE, $(e.t("Most popular!")), 1)) : Ce("", !0), p.key === 25e4 ? (z(), G("span", CE, $(e.t("Best Price!")), 1)) : Ce("", !0), e.paymentType === "stars" ? (z(), Me(d, {
        key: 2,
        type: "success",
        size: "small",
        style: {
          "margin-left": "10px"
        },
        onClick: b => a.buyStars(p),
        loading: e.isBuyLoading
      }, {
        default: le(() => [pe("⭐️ " + $(e._number(p.price)), 1)]),
        _: 2
      }, 1032, ["onClick", "loading"])) : Ce("", !0), e.paymentType === "ton" ? (z(), Me(d, {
        key: 3,
        type: "success",
        size: "small",
        style: {
          "margin-left": "10px"
        },
        onClick: b => a.buyTon(p),
        loading: e.isTonLoading
      }, {
        default: le(() => [h(f, {
          dot: !e._isOnboardingComplete(e.onBoard.buyTon)
        }, {
          default: le(() => [E("div", _E, [t[5] || (t[5] = E("img", {
            src: Ur,
            alt: "",
            width: "15px"
          }, null, -1)), pe("️ " + $(e._numberExact(p.priceTon)), 1)])]),
          _: 2
        }, 1032, ["dot"])]),
        _: 2
      }, 1032, ["onClick", "loading"])) : Ce("", !0)])]),
      _: 2
    }, 1024))), 128))]),
    _: 1
  }), E("div", null, [E("h2", kE, [h(d, {
    size: "small",
    type: "warning",
    loading: e.isHistoryLoading,
    onClick: a.loadHistory
  }, {
    default: le(() => [h(u, {
      name: "replay"
    })]),
    _: 1
  }, 8, ["loading", "onClick"]), E("span", SE, $(e.t("History")), 1)]), e.isHistoryLoading ? (z(), G("div", TE, [h(y)])) : (z(), G(Re, {
    key: 1
  }, [e.transactionsHistory.length > 0 ? (z(), G("div", xE, [E("table", EE, [E("tbody", null, [E("tr", null, [E("td", null, $(e.t("Date")), 1), t[6] || (t[6] = E("td", null, [E("span", {
    class: "coin25"
  })], -1)), t[7] || (t[7] = E("td", null, "Price", -1)), t[8] || (t[8] = E("td", null, "Type", -1)), t[9] || (t[9] = E("td", null, "tx", -1))]), (z(!0), G(Re, null, Ft(e.transactionsHistory, p => (z(), G("tr", null, [E("td", null, $(new Date(p.date.replace(" ", "T") + "Z").toLocaleString()), 1), E("td", null, $(e._numberShort(p.coins)), 1), E("td", null, $(p.type !== "luckyHours" ? p.price : ""), 1), E("td", null, [p.type === "ton" ? (z(), G("img", AE)) : p.type === "stars" ? (z(), G(Re, {
    key: 1
  }, [pe(" ⭐️ ")], 64)) : p.type === "luckyHours" ? (z(), G(Re, {
    key: 2
  }, [pe(" lucky hours ")], 64)) : (z(), G(Re, {
    key: 3
  }, [], 64))]), p.type === "ton" ? (z(), G("td", {
    key: 0,
    onClick: b => e._openUrl("https://tonscan.org/tx/" + p.trx)
  }, [E("span", PE, "..." + $(p.trx.slice(-8)), 1)], 8, IE)) : Ce("", !0)]))), 256))])]), e.transactionsHistory.length === 10 ? (z(), G("div", OE, $(e.t("The last {count} transactions are displayed", {
    count: 10
  })), 1)) : Ce("", !0)])) : (z(), G("p", RE, $(e.t("No transactions found")), 1))], 64))])])
}
const Sm = pt(fE, [
    ["render", DE],
    ["__scopeId", "data-v-891859f4"]
  ]),
  BE = {
    components: {
      Topup: Sm
    },
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
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen, this.isMenuOpen || (this.isShowLangPicker = !1)
      },
      async showTphPopup() {
        this.isShowTphPopup = !0, await this._completeOnboarding(this.onBoard.token)
      },
      async showCoinPopup() {
        this.isShowCoinPopup = !0, await this._completeOnboarding(this.onBoard.coin)
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
  $E = {
    style: {
      padding: "15px 15px 0 15px"
    }
  },
  ME = {
    width: "100%"
  },
  LE = {
    style: {
      width: "100%",
      display: "flex",
      "align-items": "center"
    }
  },
  NE = {
    key: 0,
    style: {
      "font-size": "0.8em"
    }
  },
  FE = {
    key: 0,
    class: "panelRed",
    style: {
      margin: "30px 0"
    }
  },
  VE = {
    style: {
      "font-weight": "800",
      "font-size": "1.4em"
    }
  },
  zE = {
    class: "white"
  },
  HE = {
    class: "flexLeft",
    style: {
      margin: "0 0 0 -5px"
    }
  },
  UE = {
    style: {
      "margin-left": "5px"
    }
  },
  WE = {
    class: "zTextShadow2sweet",
    style: {
      "font-weight": "800",
      "font-size": "1.5em"
    }
  },
  jE = {
    style: {
      "font-weight": "800",
      color: "#FFC04A",
      "font-size": "1.5em"
    }
  },
  QE = {
    class: "list"
  },
  KE = {
    class: "flexLeft",
    style: {
      margin: "30px 0 0 -5px"
    }
  },
  YE = {
    style: {
      "margin-left": "5px"
    }
  },
  qE = {
    class: "zTextShadow2sweet",
    style: {
      "font-weight": "800",
      "font-size": "1.5em"
    }
  },
  GE = {
    style: {
      "font-weight": "800",
      color: "#FFC04A",
      "font-size": "1.5em"
    }
  },
  ZE = {
    key: 0,
    style: {
      color: "#fff",
      "font-size": "1.3em"
    }
  },
  XE = {
    key: 0
  },
  JE = {
    key: 1
  },
  eA = {
    class: "list"
  },
  tA = {
    style: {
      color: "#fff",
      "font-size": "1.3em",
      "font-weight": "bold",
      margin: "0 20px"
    },
    class: "zTextShadow2white"
  },
  nA = {
    key: 0
  },
  oA = {
    class: "flexLeft",
    style: {
      margin: "-10px 0 0 -5px"
    }
  },
  iA = {
    style: {
      "margin-left": "5px"
    }
  },
  sA = {
    class: "zTextShadow2sweet",
    style: {
      "font-weight": "800",
      "font-size": "1.5em"
    }
  },
  aA = {
    style: {
      "font-weight": "800",
      color: "#FFC04A"
    }
  },
  lA = {
    class: "list"
  },
  rA = {
    class: "container"
  },
  cA = {
    style: {
      height: "calc(100vh - 60px)",
      "overflow-y": "scroll"
    }
  },
  uA = {
    style: {
      "font-size": "2em"
    }
  },
  dA = {
    style: {
      "font-size": "2em"
    }
  },
  fA = {
    style: {
      margin: "20px 0 10px 15px"
    }
  },
  hA = {
    style: {
      "font-size": "2em"
    }
  };

function mA(e, t, n, o, s, a) {
  const l = ge("van-icon"),
    r = ge("van-button"),
    c = ge("van-popup"),
    u = ge("topup"),
    d = ge("van-cell"),
    f = ge("van-cell-group");
  return z(), G("div", {
    class: ot(["topBar", {
      needBg: a.isNeedBg,
      noBg: a.isNoBg && !a.isNeedBg,
      staticBg: n.staticBg
    }])
  }, [E("div", $E, [E("table", ME, [E("tbody", null, [E("tr", null, [E("td", LE, [E("div", {
    class: ot(["metric token nowrap panelBrown", [e.uFeed.isNeedFeed ? "panelRed" : "panelBrown"]]),
    id: "tokens",
    onClick: t[0] || (t[0] = (...m) => a.showTphPopup && a.showTphPopup(...m))
  }, [t[13] || (t[13] = E("div", {
    class: "token30",
    style: {
      margin: "0 10px 0 -8px"
    }
  }, null, -1)), e.uFeed.isNeedFeed ? (z(), G("span", NE, $(e.t("Mining stopped")), 1)) : (z(), G("span", {
    key: 1,
    style: an([{
      "font-size": "1.3em",
      "font-weight": "800"
    }, {
      width: e.uHero.tokens.toString().length + 1 + "ch"
    }]),
    class: "zTextShadow2sweet center"
  }, $(e._numberShort(e.uHero.tokens)), 5)), e._isOnboardingComplete(e.onBoard.token) ? Ce("", !0) : (z(), Me(l, {
    key: 2,
    name: "question"
  }))], 2), h(c, {
    show: e.isShowTphPopup,
    "onUpdate:show": t[1] || (t[1] = m => e.isShowTphPopup = m),
    round: "",
    position: "top",
    class: "metricPopUp",
    closeable: ""
  }, {
    default: le(() => [e.uFeed.isNeedFeed ? (z(), G("div", FE, [E("div", VE, $(e.t("Token mining has stopped. ")), 1), E("div", zE, $(e.t("The animals need to be fed.")), 1), h(r, {
      type: "warning",
      size: "large",
      onClick: a.seeFeedDetails,
      style: {
        "margin-top": "10px"
      }
    }, {
      default: le(() => [pe($(e.t("See details")), 1)]),
      _: 1
    }, 8, ["onClick"])])) : Ce("", !0), E("div", HE, [t[14] || (t[14] = E("span", {
      class: "token50"
    }, null, -1)), E("div", UE, [E("div", WE, $(e.t("{TOKEN_NAME} tokens", {
      TOKEN_NAME: e.TOKEN_NAME
    })), 1), E("div", jE, $(e._number(e.uHero.tokens)), 1)])]), E("ul", QE, [E("li", null, $(e.t("This is the number of tokens you'll get from the AirDrop.")), 1)]), E("div", KE, [t[18] || (t[18] = E("span", {
      class: "tph50"
    }, null, -1)), E("div", YE, [E("div", qE, $(e.t("Tokens per Hour")), 1), E("div", null, [E("span", GE, $(e._number(e.uHero.tph)), 1), e.uHero.tphBoost || e.uHero.tphAlliance ? (z(), G("span", ZE, [pe(" (" + $(e._number(e.uHero.tphBase)) + " ", 1), e.uHero.tphBoost ? (z(), G("span", XE, [pe("+ " + $(e._number(e.uHero.tphBoost)) + " ", 1), t[15] || (t[15] = E("span", {
      class: "tphIcon",
      style: {
        "background-image": "url('/assets/img/decor/icon_boost.png')"
      }
    }, null, -1))])) : Ce("", !0), e.uHero.tphAlliance ? (z(), G("span", JE, [pe("+ " + $(e._number(e.uHero.tphAlliance)) + " ", 1), t[16] || (t[16] = E("span", {
      class: "tphIcon",
      style: {
        "background-image": "url('/assets/img/decor/icon_ali.png')"
      }
    }, null, -1))])) : Ce("", !0), t[17] || (t[17] = pe(") "))])) : Ce("", !0)])])]), E("ul", eA, [E("li", null, $(e.t("Tokens are added automatically, even when you're offline.")), 1), E("li", null, $(e.t("Buy new animals, level them up, and boost your hourly income to earn more {TOKEN_NAME} tokens.", {
      TOKEN_NAME: e.TOKEN_NAME
    })), 1), E("li", null, $(e.t("The level of your alliance also increases your hourly earnings.")), 1), E("li", null, $(e.t("You can increase your hourly earnings by buying a boost.")), 1)])]),
    _: 1
  }, 8, ["show"]), E("div", {
    class: "metric coin nowrap",
    id: "coins",
    onClick: t[2] || (t[2] = (...m) => a.showCoinPopup && a.showCoinPopup(...m))
  }, [t[19] || (t[19] = E("div", {
    class: "coin38",
    style: {
      margin: "0 -10px"
    }
  }, null, -1)), E("span", tA, [pe($(e._numberShort(e.uHero.coins)) + " ", 1), e.stores.state.luckyHourTimerStr ? (z(), G("span", nA, "🎁")) : Ce("", !0)]), h(r, {
    type: "success",
    size: "small",
    style: {
      "aspect-ratio": "1",
      margin: "0 -10px"
    },
    icon: "plus"
  }), e._isOnboardingComplete(e.onBoard.coin) ? Ce("", !0) : (z(), Me(l, {
    key: 0,
    name: "question"
  }))]), h(c, {
    show: e.isShowCoinPopup,
    "onUpdate:show": t[3] || (t[3] = m => e.isShowCoinPopup = m),
    round: "",
    position: "top",
    class: "metricPopUp",
    closeable: ""
  }, {
    default: le(() => [E("div", oA, [t[20] || (t[20] = E("span", {
      class: "coin60"
    }, null, -1)), E("div", iA, [E("div", sA, $(e.COIN_NAME), 1), E("div", aA, $(e._number(e.uHero.coins)), 1)])]), E("ul", lA, [E("li", null, $(e.t("This is the in-game currency.")), 1), E("li", null, $(e.t("Complete quests and invite friends to earn more coins!")), 1)]), E("p", null, $(e.t("Or you can buy them!")), 1), h(u)]),
    _: 1
  }, 8, ["show"])]), E("td", {
    style: {
      width: "40px",
      position: "relative"
    },
    class: ot({
      menuOpen: e.isMenuOpen
    })
  }, [rt(h(l, {
    name: "wap-nav",
    onClick: a.toggleMenu,
    class: "menuBtn"
  }, null, 8, ["onClick"]), [
    [dt, !e.isMenuOpen && !e.isShowLangPicker]
  ]), h(c, {
    show: e.isMenuOpen,
    "onUpdate:show": t[9] || (t[9] = m => e.isMenuOpen = m),
    round: "",
    position: "top",
    closeable: ""
  }, {
    default: le(() => [h(f, {
      inset: "",
      style: {
        "margin-top": "50px"
      }
    }, {
      default: le(() => [h(d, {
        center: "",
        title: " 🌐 " + e.t("Language"),
        value: e.dbLangByKey[e.localSettings.lang].title,
        "is-link": "",
        "arrow-direction": "right",
        onClick: t[4] || (t[4] = m => e.isShowLangPicker = !0),
        size: "large"
      }, null, 8, ["title", "value"])]),
      _: 1
    }), h(f, {
      inset: "",
      style: {
        "margin-top": "20px"
      }
    }, {
      default: le(() => [h(d, {
        center: "",
        title: " 🏆 " + e.t("Player Rankings"),
        "is-link": "",
        onClick: t[5] || (t[5] = m => e.$router.push("/rating")),
        size: "large"
      }, null, 8, ["title"]), e.uProfile.isAlfaTester || e.gameConfig["referral.commission.friend_count"] > 0 && e.uProfile.friends >= e.gameConfig["referral.commission.friend_count"] ? (z(), Me(d, {
        key: 0,
        center: "",
        title: " 💰 " + e.t("Referral commission"),
        "is-link": "",
        to: "/referral/commission",
        onClick: t[6] || (t[6] = m => {
          e.isMenuOpen = !1
        }),
        size: "large"
      }, null, 8, ["title"])) : Ce("", !0)]),
      _: 1
    }), h(f, {
      inset: "",
      style: {
        "margin-top": "20px"
      }
    }, {
      default: le(() => [h(d, {
        center: "",
        title: " 💬 " + e.t("Our Telegram channel"),
        "is-link": "",
        onClick: e._ourTgClick,
        size: "large"
      }, null, 8, ["title", "onClick"]), h(d, {
        center: "",
        title: " 🛠️ " + e.t("Support"),
        "is-link": "",
        to: "/support",
        onClick: t[7] || (t[7] = m => {
          e.isMenuOpen = !1
        }),
        size: "large"
      }, null, 8, ["title"]), h(d, {
        center: "",
        title: " ⚖️ " + e.t("Terms of use"),
        "is-link": "",
        onClick: t[8] || (t[8] = m => e.$router.push("/terms")),
        size: "large"
      }, null, 8, ["title"])]),
      _: 1
    }), t[21] || (t[21] = E("br", null, null, -1))]),
    _: 1
  }, 8, ["show"]), h(c, {
    show: e.isShowLangPicker,
    "onUpdate:show": t[12] || (t[12] = m => e.isShowLangPicker = m),
    position: "top",
    closeable: ""
  }, {
    default: le(() => [E("h2", rA, $(e.t("Select language")), 1), E("div", cA, [h(f, {
      inset: ""
    }, {
      default: le(() => [h(d, {
        title: a.firstLang.title,
        "is-link": "",
        value: a.firstLang.key,
        center: "",
        onClick: t[10] || (t[10] = m => a.onLangSelect(a.firstLang.key))
      }, {
        icon: le(() => [E("span", uA, $(a.firstLang.icon) + " ", 1)]),
        _: 1
      }, 8, ["title", "value"]), a.userLang ? (z(), Me(d, {
        key: 0,
        title: a.userLang.title,
        "is-link": "",
        value: a.userLang.key,
        center: "",
        onClick: t[11] || (t[11] = m => a.onLangSelect(a.userLang.key))
      }, {
        icon: le(() => [E("span", dA, $(a.userLang.icon) + " ", 1)]),
        _: 1
      }, 8, ["title", "value"])) : Ce("", !0)]),
      _: 1
    }), (z(!0), G(Re, null, Ft(a.langByFirstLetter, (m, g) => (z(), G(Re, {
      key: g
    }, [E("div", fA, $(g), 1), h(f, {
      inset: ""
    }, {
      default: le(() => [(z(!0), G(Re, null, Ft(m, y => (z(), Me(d, {
        key: y.key,
        title: y.title,
        label: y.titleEn,
        "is-link": "",
        value: y.key,
        center: "",
        onClick: p => a.onLangSelect(y.key)
      }, {
        icon: le(() => [E("span", hA, $(y.icon) + " ", 1)]),
        _: 2
      }, 1032, ["title", "label", "value", "onClick"]))), 128))]),
      _: 2
    }, 1024)], 64))), 128))])]),
    _: 1
  }, 8, ["show"])], 2)])])])])], 2)
}
const Kr = pt(BE, [
    ["render", mA],
    ["__scopeId", "data-v-1b6c22bb"]
  ]),
  gA = {
    name: "Quests-g",
    components: {
      TopBar: Kr,
      QuestChallenge: Ex,
      QuestDailyReward: Ux
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
  vA = {
    class: "quests"
  },
  yA = {
    class: "pageContainer"
  },
  pA = {
    class: "aniH1",
    style: {
      margin: "15px 15px 0 15px"
    }
  },
  bA = {
    style: {
      margin: "0 15px 25px 15px"
    }
  };

function wA(e, t, n, o, s, a) {
  const l = ge("QuestDailyReward"),
    r = ge("QuestChallenge");
  return z(), G("div", vA, [E("div", yA, [E("h1", pA, $(e.t("Tasks")), 1), E("div", bA, $(e.t("Do tasks and earn more {COIN_NAME}", {
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
const Tm = pt(gA, [
    ["render", wA]
  ]),
  CA = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Tm
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  _A = {
    name: "Airdrop-g",
    components: {
      TopBar: Kr,
      TonWallet: Wr
    },
    async created() {
      await window.listenTonConnect()
    },
    async mounted() {
      this.firstLoading && await this.loadTonWallet(), this.firstLoading = !1
    },
    unmounted() {},
    data() {
      return {
        firstLoading: !0,
        transactionLoading: !1,
        isTransactionSendHere: !1,
        connectedWallet: ""
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
      }
    }
  },
  kA = {
    class: "airdrop container pageContainer"
  },
  SA = {
    style: {
      "font-size": "1.1em",
      "margin-bottom": "15px",
      "font-weight": "bold"
    }
  },
  TA = {
    style: {
      "padding-left": "5px",
      "margin-bottom": "15px"
    }
  },
  xA = {
    style: {
      "margin-bottom": "30px"
    }
  },
  EA = {
    class: "panelBrown",
    style: {
      "margin-top": "10px"
    }
  },
  AA = {
    style: {
      "margin-top": "5px"
    }
  },
  IA = {
    key: 0
  },
  PA = {
    key: 0,
    style: {
      "font-size": "1.3em"
    }
  },
  OA = {
    key: 1
  },
  RA = {
    key: 0
  },
  DA = {
    key: 0,
    class: "tips"
  },
  BA = {
    key: 1,
    class: "tips"
  },
  $A = {
    key: 1
  },
  MA = {
    style: {
      "margin-top": "50px"
    }
  };

function LA(e, t, n, o, s, a) {
  const l = ge("ton-wallet"),
    r = ge("van-icon");
  return z(), G("div", kA, [t[0] || (t[0] = E("h1", {
    class: "aniH1"
  }, "Airdrop", -1)), E("div", null, [E("div", SA, $(e.t("Task for participating in {Airdrop}:")), 1), E("div", null, [E("ol", TA, [E("li", xA, [pe($(e.t("1. Connect a wallet:")) + " ", 1), E("div", null, [h(l, {
    loading: s.firstLoading,
    onWalletConnectHandler: a.tonConnectStatusHandler,
    "saved-wallet": s.connectedWallet,
    style: {
      "margin-top": "5px"
    }
  }, null, 8, ["loading", "onWalletConnectHandler", "saved-wallet"])]), E("div", EA, [E("div", null, [h(r, {
    name: "warning-o"
  }), pe(" " + $(e.t("A wallet can only be connected to one account.")), 1)])])]), E("li", null, [pe($(e.t("2. Complete a TON transaction to verify that you are not a bot:")) + " ", 1), E("div", AA, [a.isWalletConnected ? (z(), G("span", IA, [a.isTonTransactionCompleted ? (z(), G("span", PA, [h(r, {
    name: "checked"
  }), pe(" " + $(e.t("Transaction has been sent.")), 1)])) : (z(), G("span", OA, [a.isTransactionSend ? Ce("", !0) : (z(), G("div", RA, [h(l, {
    "transaction-value": e.uProfile.isAlfaTester ? .01 : e.gameConfig["ton.test_transaction_value"] ?? .5,
    "saved-wallet": s.connectedWallet,
    onPaid: a.handlePaid,
    loading: s.transactionLoading
  }, null, 8, ["transaction-value", "saved-wallet", "onPaid", "loading"]), s.transactionLoading ? Ce("", !0) : (z(), G("span", DA, " *" + $(e.t("If you have already sent a transaction, go to the quest and click «Check Action» there.")), 1))])), s.transactionLoading ? (z(), G("span", BA, $(e.t("Waiting blockchain, it could take few minutes...")), 1)) : Ce("", !0)]))])) : (z(), G("span", $A, $(e.t("Please connect your wallet first.")), 1))])])])])]), E("div", MA, [E("p", null, $(e.t("An {airdrop} is the distribution of tokens to players wallets. These tokens will be traded on top exchanges, and you can either sell or hold them.")), 1), E("p", null, $(e.t("We are currently in the mining phase where all players earn more {TOKEN_NAME} for the {airdrop}.", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), E("p", null, $(e.t("The date and conditions for receiving the {Airdrop} will be announced soon in our telegram channel.")), 1)])])
}
const xm = pt(_A, [
    ["render", LA],
    ["__scopeId", "data-v-73f357d7"]
  ]),
  NA = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: xm
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  FA = {
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
  VA = {
    class: "friends"
  },
  zA = {
    class: "pageContainer container"
  },
  HA = {
    class: "",
    style: {
      "padding-bottom": "50px"
    }
  },
  UA = ["innerHTML"],
  WA = {
    class: "reward-list"
  },
  jA = ["innerHTML"],
  QA = ["innerHTML"],
  KA = ["innerHTML"],
  YA = ["innerHTML"],
  qA = ["innerHTML"],
  GA = ["innerHTML"],
  ZA = ["innerHTML"],
  XA = ["innerHTML"],
  JA = {
    key: 0,
    class: "panelBrown"
  },
  eI = ["innerHTML"],
  tI = {
    key: 0,
    class: "right"
  },
  nI = {
    key: 1,
    style: {
      "font-size": "0.7em"
    }
  };

function oI(e, t, n, o, s, a) {
  const l = ge("van-icon"),
    r = ge("van-badge"),
    c = ge("van-button"),
    u = ge("van-sticky"),
    d = ge("van-cell"),
    f = ge("van-cell-group"),
    m = ge("van-back-top");
  return z(), G("div", VA, [E("div", zA, [E("div", HA, [E("div", null, [E("h1", null, $(e.t("Invite Friends!")), 1), E("span", {
    onClick: t[0] || (t[0] = g => {
      this.isListVisible = !this.isListVisible
    }),
    style: {
      "border-bottom": "1px dashed #FFFFFF"
    }
  }, [E("span", {
    innerHTML: e.t("You can earn up to {COUNT} {IMG_COIN} {COIN_NAME} per friend:", {
      MIN: 1,
      MAX: 5,
      COUNT: e._number(1e4),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, UA), s.isListVisible ? (z(), Me(l, {
    key: 0,
    name: "arrow-down"
  })) : (z(), Me(l, {
    key: 1,
    name: "arrow"
  }))]), rt(E("ul", WA, [E("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 1,
      MAX: 5,
      COUNT: e._number(1e4),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, jA), E("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 6,
      MAX: 10,
      COUNT: e._number(5e3),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, QA), E("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 11,
      MAX: 20,
      COUNT: e._number(3e3),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, KA), E("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 21,
      MAX: 50,
      COUNT: e._number(1e3),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, YA), E("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 51,
      MAX: 100,
      COUNT: e._number(500),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, qA), E("li", {
    innerHTML: e.t("- Over {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MAX: 100,
      COUNT: e._number(50),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, GA)], 512), [
    [dt, s.isListVisible]
  ]), E("p", {
    innerHTML: e.t("If your friend has Telegram Premium, your bonus triples!", {
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, ZA), E("p", {
    innerHTML: e.t("Your friend get {BONUS_FRIEND}  {IMG_COIN} {COIN_NAME} or {BONUS_FRIEND_PREMIUM} {IMG_COIN} {COIN_NAME} if friend has Telegram Premium.", {
      COIN_NAME: e.COIN_NAME,
      BONUS_FRIEND: e.gameConfig["ref.bonus.basic"],
      BONUS_FRIEND_PREMIUM: e.gameConfig["ref.bonus.premium"],
      IMG_COIN: e.IMG_COIN
    })
  }, null, 8, XA), e.gameConfig["referral.commission.friend_count"] > 0 && e.uProfile.friends >= e.gameConfig["referral.commission.friend_count"] ? (z(), G("p", JA, [pe($(e.t("You have access to earning {PERCENT}% referral commissions from your friends payments.", {
    PERCENT: 30
  })) + " ", 1), E("span", {
    onClick: t[1] || (t[1] = g => e.$router.push("/referral/commission")),
    style: {
      "border-bottom": "1px dashed #FFC04A"
    }
  }, $(e.t("Check this out.")), 1)])) : Ce("", !0), t[2] || (t[2] = E("br", null, null, -1))]), h(u, {
    "offset-top": "15",
    onChange: e._stickyChange
  }, {
    default: le(() => [E("div", {
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
      default: le(() => [h(r, {
        dot: e.uProfile.friends < 1 && !e._isOnboardingComplete(e.onBoard.friendInvite)
      }, {
        default: le(() => [pe($(e.t("Invite friends")), 1)]),
        _: 1
      }, 8, ["dot"])]),
      _: 1
    }, 8, ["onClick"])], 4)]),
    _: 1
  }, 8, ["onChange"]), t[4] || (t[4] = E("br", null, null, -1)), t[5] || (t[5] = E("br", null, null, -1)), t[6] || (t[6] = E("br", null, null, -1)), a.friendsCount > 0 ? (z(), G("div", {
    key: 0,
    class: ot({
      blur: !e.stores.state.isAfterDataLoaded
    })
  }, [E("div", {
    style: {
      "margin-bottom": "5px"
    },
    innerHTML: e.t(a.friendsCount === 1 ? "You have {friendsCount} friend." : "You have {friendsCount} friends.", {
      friendsCount: "<b>" + a.friendsCount + "</b>"
    })
  }, null, 8, eI), h(f, {
    inset: "",
    style: {
      margin: "0"
    }
  }, {
    default: le(() => [(z(!0), G(Re, null, Ft(e.uFriends, g => (z(), Me(d, {
      key: g.id,
      title: g.name,
      size: "large",
      center: ""
    }, {
      "right-icon": le(() => [g.coins > 0 ? (z(), G("div", tI, [pe("+" + $(e._number(g.coins)) + " ", 1), t[3] || (t[3] = E("span", {
        class: "coin25"
      }, null, -1))])) : (z(), G("div", nI, $(e.t("Task not completed")), 1))]),
      _: 2
    }, 1032, ["title"]))), 128))]),
    _: 1
  })], 2)) : Ce("", !0)]), h(m, {
    bottom: "140"
  })])])
}
const Em = pt(FA, [
    ["render", oI],
    ["__scopeId", "data-v-b743d51c"]
  ]),
  iI = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Em
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  sI = {
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
          })) + "&user_id=" + this.uProfile.id + "&hash=" + km(this.uProfile.registrationDate);
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
  aI = {
    class: "test",
    style: {
      direction: "ltr"
    }
  },
  lI = {
    class: "con"
  },
  rI = {
    class: "zTextShadow2white center"
  },
  cI = {
    class: "options"
  },
  uI = ["onClick"],
  dI = {
    class: "con container",
    style: {
      display: "flex",
      "align-items": "center",
      "justify-content": "space-between",
      height: "100%"
    }
  },
  fI = {
    class: "zTextShadow2white center",
    style: {
      "padding-top": "50px",
      margin: "0"
    }
  },
  hI = {
    class: "",
    style: {
      "padding-bottom": "30px"
    }
  },
  mI = {
    class: "panel"
  };

function gI(e, t, n, o, s, a) {
  const l = ge("van-icon"),
    r = ge("van-swipe-item"),
    c = ge("van-badge"),
    u = ge("van-button"),
    d = ge("van-swipe");
  return z(), G("div", aI, [h(d, {
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
    default: le(() => [(z(!0), G(Re, null, Ft(n.quiz.questions, (f, m) => (z(), Me(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: le(() => [E("div", lI, [E("h2", rI, $(f.desc), 1), E("div", cI, [(z(!0), G(Re, null, Ft(f.options, g => (z(), G("div", {
        class: "option",
        onClick: y => a.setAnswer(m, g)
      }, [e.selectedValues[m] === JSON.stringify(g.animals) ? (z(), Me(l, {
        key: 0,
        size: "30",
        name: "checked"
      })) : (z(), Me(l, {
        key: 1,
        size: "30",
        name: "circle"
      })), E("div", null, $(g.desc), 1)], 8, uI))), 256)), m > 0 ? (z(), G("div", {
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
      default: le(() => {
        var f, m;
        return [E("div", dI, [E("h2", fI, $(n.quiz.title), 1), E("div", hI, [E("p", mI, $((f = a.answerData) == null ? void 0 : f.title) + " - " + $((m = a.answerData) == null ? void 0 : m.desc), 1), h(u, {
          onClick: a.shareStory,
          loading: e.isSharesLoading,
          type: "success",
          size: "large"
        }, {
          default: le(() => [pe($(e.t("Share to your story")) + " ", 1), n.quiz.isRewarded ? Ce("", !0) : (z(), Me(c, {
            key: 0,
            dot: ""
          }, {
            default: le(() => [pe($(n.quiz.reward) + " ", 1), t[2] || (t[2] = E("span", {
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
          default: le(() => [h(l, {
            name: "revoke"
          }), pe(" " + $(e.t("Retake the quiz!")), 1)]),
          _: 1
        }, 8, ["onClick"])])])]
      }),
      _: 1
    }, 8, ["class", "style"])]),
    _: 1
  }, 8, ["duration"]), E("div", {
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
  }), pe(" " + $(e.t("Back to quiz selection")), 1)])])
}
const Am = pt(sI, [
    ["render", gI],
    ["__scopeId", "data-v-ac2bbb0f"]
  ]),
  vI = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Am
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  yI = "/assets/paw-5F38omYJ.png",
  pI = {
    name: "Test-g",
    components: {
      TestProcess: Am
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
  bI = {
    key: 0,
    class: "Test"
  },
  wI = {
    class: "pageContainer container"
  },
  CI = {
    style: {
      "margin-bottom": "0"
    }
  },
  _I = {
    class: "zTextShadow2white"
  },
  kI = {
    class: "testList"
  },
  SI = ["onClick"],
  TI = {
    class: "title"
  },
  xI = {
    key: 0,
    class: "zTextShadow2white",
    style: {
      width: "100%"
    }
  },
  EI = {
    style: {
      "font-size": "1.5em"
    }
  },
  AI = {
    key: 1,
    style: {
      width: "100%"
    }
  };

function II(e, t, n, o, s, a) {
  const l = ge("van-badge"),
    r = ge("van-button"),
    c = ge("test-process");
  return s.openedQuiz ? (z(), Me(c, {
    key: 1,
    quiz: s.openedQuiz,
    onBackToList: a.backToList
  }, null, 8, ["quiz", "onBackToList"])) : (z(), G("div", bI, [E("div", wI, [E("h1", CI, $(e.t("Take the quiz and find out which animal you are!")), 1), E("div", _I, $(e.t("And get your reward!")), 1), t[3] || (t[3] = E("br", null, null, -1)), E("div", kI, [(z(!0), G(Re, null, Ft(a.tests, u => {
    var d;
    return z(), G("div", {
      key: u.key,
      class: "testItem panelBrown",
      onClick: f => a.openQuiz(u),
      style: an(u.result ? {
        backgroundImage: "url(" + e._getQuizImg(u.key, u.result) + ")",
        backgroundPosition: "0 -20px"
      } : "")
    }, [E("div", TI, $(u.title), 1), u.result ? (z(), G("div", xI, [u.isRewarded ? Ce("", !0) : (z(), Me(r, {
      key: 0,
      type: "success",
      size: "small"
    }, {
      default: le(() => [h(l, {
        dot: ""
      }, {
        default: le(() => [pe($(e.t("Claim")) + " " + $(e._number(u.reward)) + " ", 1), t[0] || (t[0] = E("span", {
          class: "coin25"
        }, null, -1))]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1024)), E("div", EI, $((d = u.answers[u.result]) == null ? void 0 : d.title), 1)])) : (z(), G("div", AI, [t[1] || (t[1] = E("img", {
      src: yI,
      alt: "",
      style: {
        width: "60%",
        margin: "15px 0"
      }
    }, null, -1)), h(r, {
      type: "success",
      size: "large"
    }, {
      default: le(() => [h(l, {
        dot: ""
      }, {
        default: le(() => [pe($(e.t("Take the quiz!")), 1)]),
        _: 1
      })]),
      _: 1
    }), pe(" " + $(e.t("and get {count}", {
      count: e._number(u.reward)
    })) + " ", 1), t[2] || (t[2] = E("span", {
      class: "coin25"
    }, null, -1))]))], 12, SI)
  }), 128))])])]))
}
const Im = pt(pI, [
    ["render", II],
    ["__scopeId", "data-v-130bb5a5"]
  ]),
  PI = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Im
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  OI = {
    components: {
      TestG: Im,
      FriendsG: Em,
      AirdropG: xm,
      QuestsG: Tm
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
        return this.$route.path === "/" || this.$route.path === "home"
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
  RI = ["onClick"],
  DI = {
    class: "flyBtnCont"
  },
  BI = {
    class: "flyBtnTitle"
  },
  $I = {
    class: "flyBtnCont"
  },
  MI = {
    class: "flyBtnTitle"
  };

function LI(e, t, n, o, s, a) {
  const l = ge("van-badge"),
    r = ge("airdrop-g"),
    c = ge("van-popup"),
    u = ge("friends-g"),
    d = ge("quests-g"),
    f = ge("test-g"),
    m = ge("van-icon");
  return a.isMainPage ? (z(), G("div", {
    key: 0,
    class: ot(["BottomBar", {
      zIndexFix: a.isShowCloseBtn
    }])
  }, [(z(!0), G(Re, null, Ft(a.menuItems, g => (z(), G("div", {
    class: "flyBtn",
    key: g.key,
    onClick: y => s.isShowPopup[g.key] = !0
  }, [h(l, {
    dot: g.isDot
  }, {
    default: le(() => [E("div", DI, [E("div", {
      class: "flyBtnIcon",
      style: an({
        backgroundImage: `url(${g.image})`
      })
    }, null, 4)]), E("div", BI, $(g.title), 1)]),
    _: 2
  }, 1032, ["dot"])], 8, RI))), 128)), h(c, {
    show: s.isShowPopup.airdrop,
    "onUpdate:show": t[0] || (t[0] = g => s.isShowPopup.airdrop = g),
    position: "bottom",
    class: "popup",
    round: "",
    duration: .15,
    closeable: ""
  }, {
    default: le(() => [h(r)]),
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
    default: le(() => [h(u)]),
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
    default: le(() => [h(d)]),
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
    default: le(() => [h(f)]),
    _: 1
  }, 8, ["show"])], 2)) : (z(), G("div", {
    key: 1,
    class: "flyBtn BottomBar",
    onClick: t[4] || (t[4] = g => e.$router.push("/"))
  }, [E("div", $I, [h(m, {
    name: "wap-home",
    color: "#FFEDD9"
  })]), E("div", MI, $(e.t("Home")), 1)]))
}
const NI = pt(OI, [
    ["render", LI],
    ["__scopeId", "data-v-2386ef5b"]
  ]),
  FI = new Error("request for lock canceled");
var VI = function(e, t, n, o) {
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
class zI {
  constructor(t, n = FI) {
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
        l = Pm(this._queue, r => n <= r.priority);
      l === -1 && t <= this._value ? this._dispatchItem(a) : this._queue.splice(l + 1, 0, a)
    })
  }
  runExclusive(t) {
    return VI(this, arguments, void 0, function*(n, o = 1, s = 0) {
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
      this._weightedWaiters[t - 1] || (this._weightedWaiters[t - 1] = []), HI(this._weightedWaiters[t - 1], {
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

function HI(e, t) {
  const n = Pm(e, o => t.priority <= o.priority);
  e.splice(n + 1, 0, t)
}

function Pm(e, t) {
  for (let n = e.length - 1; n >= 0; n--)
    if (t(e[n])) return n;
  return -1
}
var UI = function(e, t, n, o) {
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
class WI {
  constructor(t) {
    this._semaphore = new zI(1, t)
  }
  acquire() {
    return UI(this, arguments, void 0, function*(t = 0) {
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
const jI = {
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
  QI = {
    class: "flexBeetween",
    style: {
      margin: "-20px 0 20px 0"
    }
  },
  KI = {
    key: 0
  };

function YI(e, t, n, o, s, a) {
  const l = ge("van-icon"),
    r = ge("van-button");
  return z(), G("div", null, [E("h1", null, $(n.allianceData.name), 1), E("div", QI, [E("div", null, $(e.t("Founder:")) + " " + $(n.allianceData.ownerName), 1), E("div", null, "id:" + $(n.allianceData.id), 1)]), n.allianceData.channelLink ? (z(), G("div", KI, [pe($(e.t("Channel:")) + " ", 1), E("span", {
    onClick: t[0] || (t[0] = c => e._openUrl("https://" + n.allianceData.channelLink)),
    style: {
      "border-bottom": "1px dashed #fff"
    }
  }, $(n.allianceData.channelLink), 1)])) : Ce("", !0), E("div", null, $(e.t("Level:")) + " " + $(n.allianceData.level), 1), E("div", null, [pe($(e.t("Members:")) + " " + $(e._number(n.allianceData.members)) + " ", 1), h(l, {
    name: "friends"
  })]), E("div", null, [pe($(e.t("Enter Fee:")) + " " + $(e._number(n.allianceData.enterFee)) + " ", 1), t[2] || (t[2] = E("span", {
    class: "coin25"
  }, null, -1))]), t[5] || (t[5] = E("br", null, null, -1)), E("div", null, [pe($(e.t("Token per Hour bonus:")) + " +" + $(e.dbAllianceByLevel[n.allianceData.level].bonus) + "% ", 1), t[3] || (t[3] = E("span", {
    class: "tph24"
  }, null, -1))]), t[6] || (t[6] = E("br", null, null, -1)), e.uAlliance.id ? Ce("", !0) : (z(), Me(r, {
    key: 1,
    size: "large",
    type: "success",
    loading: s.isJoinLoading,
    onClick: t[1] || (t[1] = c => a.joinToAlliance(n.allianceData.id, n.allianceData.enterFee))
  }, {
    default: le(() => [pe($(e.t("Join")) + " " + $(e._number(n.allianceData.enterFee)) + " ", 1), t[4] || (t[4] = E("span", {
      class: "coin25"
    }, null, -1))]),
    _: 1
  }, 8, ["loading"]))])
}
const qI = pt(jI, [
    ["render", YI],
    ["__scopeId", "data-v-e3c39631"]
  ]),
  GI = new WI,
  ZI = {
    components: {
      AllianceInfo: qI,
      Topup: Sm,
      TopBar: Kr,
      BottomBar: NI,
      OnboardingStart: x2
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
          return this._tonConnectUI ? this._tonConnectUI : await GI.runExclusive(async () => {
            if (this._tonConnectUI) return this._tonConnectUI;
            const {
              TonConnectUI: t
            } = await It(async () => {
              const {
                TonConnectUI: n
              } = await import("./index-DR1bxtYK.js");
              return {
                TonConnectUI: n
              }
            }, []);
            return this._tonConnectUI = new t({
              manifestUrl: `https://${Cm}/tonconnect-manifest.json`
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
        invitedRefAllianceData: null
      }
    },
    computed: {
      msLeftForMining() {
        const e = new Date(Date.UTC(2025, 0, 31, 23, 59, 0)),
          t = new Date,
          n = new Date(t.getTime() + t.getTimezoneOffset() * 6e4);
        return e - n
      },
      textLeft() {
        if (this.msLeftForMining < 0) return "The mining phase is complete";
        const e = Math.floor(this.msLeftForMining / (1e3 * 60 * 60 * 24));
        return e > 1 ? e + " days left for mining" : e === 1 ? "2 days left for mining" : "1 day left for mining"
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
  XI = {
    key: 0,
    class: "loadingScreen"
  },
  JI = {
    style: {
      "font-weight": "700",
      "font-size": "1.2em"
    }
  },
  eP = {
    id: "scrollable",
    class: "scrollable"
  },
  tP = {
    class: "panelBrown",
    style: {
      margin: "10px"
    }
  },
  nP = {
    class: "container"
  };

function oP(e, t, n, o, s, a) {
  const l = ge("OnboardingStart"),
    r = ge("RouterView"),
    c = ge("BottomBar"),
    u = ge("alliance-info"),
    d = ge("van-popup"),
    f = ge("topup");
  return z(), G("div", null, [s.dbLoaded ? e._isOnboardingComplete(e.onBoard.start) ? (z(), G(Re, {
    key: 2
  }, [E("div", eP, [h(r)]), h(c), h(d, {
    show: s.isShowInviteRefAlliance,
    "onUpdate:show": t[0] || (t[0] = m => s.isShowInviteRefAlliance = m),
    round: "",
    closeable: "",
    style: {
      "min-width": "90%"
    },
    duration: "0.15"
  }, {
    default: le(() => [E("div", tP, $(e.t("You are invited to join an alliance.")), 1), h(u, {
      "alliance-data": s.invitedRefAllianceData,
      class: "container"
    }, null, 8, ["alliance-data"])]),
    _: 1
  }, 8, ["show"])], 64)) : (z(), Me(l, {
    key: 1
  })) : (z(), G("div", XI, [E("div", JI, $(a.textLeft), 1), t[2] || (t[2] = E("div", {
    class: "progressBar"
  }, [E("div", {
    class: "progressResult"
  })], -1))])), h(d, {
    show: this.stores.state.isShowTopup,
    position: "center",
    closeable: "",
    round: "",
    style: {
      width: "90%"
    },
    onClose: t[1] || (t[1] = m => e.stores.state.setIsShowTopUp(!1))
  }, {
    default: le(() => [E("div", nP, [h(f, {
      "lack-of-coin": this.stores.state.lackOfCoin
    }, null, 8, ["lack-of-coin"])])]),
    _: 1
  }, 8, ["show"])])
}
const iP = pt(ZI, [
  ["render", oP],
  ["__scopeId", "data-v-04184050"]
]);
/*!
 * vue-router v4.4.5
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
const Jo = typeof document < "u";

function Om(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function sP(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Om(e.default)
}
const Qe = Object.assign;

function gl(e, t) {
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
  aP = /&/g,
  lP = /\//g,
  rP = /=/g,
  cP = /\?/g,
  Dm = /\+/g,
  uP = /%5B/g,
  dP = /%5D/g,
  Bm = /%5E/g,
  fP = /%60/g,
  $m = /%7B/g,
  hP = /%7C/g,
  Mm = /%7D/g,
  mP = /%20/g;

function Yr(e) {
  return encodeURI("" + e).replace(hP, "|").replace(uP, "[").replace(dP, "]")
}

function gP(e) {
  return Yr(e).replace($m, "{").replace(Mm, "}").replace(Bm, "^")
}

function Kl(e) {
  return Yr(e).replace(Dm, "%2B").replace(mP, "+").replace(Rm, "%23").replace(aP, "%26").replace(fP, "`").replace($m, "{").replace(Mm, "}").replace(Bm, "^")
}

function vP(e) {
  return Kl(e).replace(rP, "%3D")
}

function yP(e) {
  return Yr(e).replace(Rm, "%23").replace(cP, "%3F")
}

function pP(e) {
  return e == null ? "" : yP(e).replace(lP, "%2F")
}

function ns(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
const bP = /\/$/,
  wP = e => e.replace(bP, "");

function vl(e, t, n = "/") {
  let o, s = {},
    a = "",
    l = "";
  const r = t.indexOf("#");
  let c = t.indexOf("?");
  return r < c && r >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), a = t.slice(c + 1, r > -1 ? r : t.length), s = e(a)), r > -1 && (o = o || t.slice(0, r), l = t.slice(r, t.length)), o = SP(o ?? t, n), {
    fullPath: o + (a && "?") + a + l,
    path: o,
    query: s,
    hash: ns(l)
  }
}

function CP(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "")
}

function qu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function _P(e, t, n) {
  const o = t.matched.length - 1,
    s = n.matched.length - 1;
  return o > -1 && o === s && hi(t.matched[o], n.matched[s]) && Lm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function hi(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}

function Lm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e)
    if (!kP(e[n], t[n])) return !1;
  return !0
}

function kP(e, t) {
  return sn(e) ? Gu(e, t) : sn(t) ? Gu(t, e) : e === t
}

function Gu(e, t) {
  return sn(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t
}

function SP(e, t) {
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

function TP(e) {
  if (!e)
    if (Jo) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), wP(e)
}
const xP = /^[^#]+#/;

function EP(e, t) {
  return e.replace(xP, "#") + t
}

function AP(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  }
}
const Da = () => ({
  left: window.scrollX,
  top: window.scrollY
});

function IP(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      o = typeof n == "string" && n.startsWith("#"),
      s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) return;
    t = AP(s, e)
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function Zu(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Yl = new Map;

function PP(e, t) {
  Yl.set(e, t)
}

function OP(e) {
  const t = Yl.get(e);
  return Yl.delete(e), t
}
let RP = () => location.protocol + "//" + location.host;

function Nm(e, t) {
  const {
    pathname: n,
    search: o,
    hash: s
  } = t, a = e.indexOf("#");
  if (a > -1) {
    let r = s.includes(e.slice(a)) ? e.slice(a).length : 1,
      c = s.slice(r);
    return c[0] !== "/" && (c = "/" + c), qu(c, "")
  }
  return qu(n, e) + o + s
}

function DP(e, t, n, o) {
  let s = [],
    a = [],
    l = null;
  const r = ({
    state: m
  }) => {
    const g = Nm(e, location),
      y = n.value,
      p = t.value;
    let b = 0;
    if (m) {
      if (n.value = g, t.value = m, l && l === y) {
        l = null;
        return
      }
      b = p ? m.position - p.position : 0
    } else o(g);
    s.forEach(w => {
      w(n.value, y, {
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
      const y = s.indexOf(m);
      y > -1 && s.splice(y, 1)
    };
    return a.push(g), g
  }

  function d() {
    const {
      history: m
    } = window;
    m.state && m.replaceState(Qe({}, m.state, {
      scroll: Da()
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

function Xu(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Da() : null
  }
}

function BP(e) {
  const {
    history: t,
    location: n
  } = window, o = {
    value: Nm(e, n)
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
      m = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + c : RP() + e + c;
    try {
      t[d ? "replaceState" : "pushState"](u, "", m), s.value = u
    } catch (g) {
      console.error(g), n[d ? "replace" : "assign"](m)
    }
  }

  function l(c, u) {
    const d = Qe({}, t.state, Xu(s.value.back, c, s.value.forward, !0), u, {
      position: s.value.position
    });
    a(c, d, !0), o.value = c
  }

  function r(c, u) {
    const d = Qe({}, s.value, t.state, {
      forward: c,
      scroll: Da()
    });
    a(d.current, d, !0);
    const f = Qe({}, Xu(o.value, c, null), {
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

function $P(e) {
  e = TP(e);
  const t = BP(e),
    n = DP(e, t.state, t.location, t.replace);

  function o(a, l = !0) {
    l || n.pauseListeners(), history.go(a)
  }
  const s = Qe({
    location: "",
    base: e,
    go: o,
    createHref: EP.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s
}

function MP(e) {
  return typeof e == "string" || e && typeof e == "object"
}

function Fm(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const Vm = Symbol("");
var Ju;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(Ju || (Ju = {}));

function mi(e, t) {
  return Qe(new Error, {
    type: e,
    [Vm]: !0
  }, t)
}

function In(e, t) {
  return e instanceof Error && Vm in e && (t == null || !!(e.type & t))
}
const ed = "[^/]+?",
  LP = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  },
  NP = /[.+*?^${}()[\]/\\]/g;

function FP(e, t) {
  const n = Qe({}, LP, t),
    o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const u of e) {
    const d = u.length ? [] : [90];
    n.strict && !u.length && (s += "/");
    for (let f = 0; f < u.length; f++) {
      const m = u[f];
      let g = 40 + (n.sensitive ? .25 : 0);
      if (m.type === 0) f || (s += "/"), s += m.value.replace(NP, "\\$&"), g += 40;
      else if (m.type === 1) {
        const {
          value: y,
          repeatable: p,
          optional: b,
          regexp: w
        } = m;
        a.push({
          name: y,
          repeatable: p,
          optional: b
        });
        const v = w || ed;
        if (v !== ed) {
          g += 10;
          try {
            new RegExp(`(${v})`)
          } catch (_) {
            throw new Error(`Invalid custom RegExp for param "${y}" (${v}): ` + _.message)
          }
        }
        let C = p ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        f || (C = b && u.length < 2 ? `(?:/${C})` : "/" + C), b && (C += "?"), s += C, g += 20, b && (g += -8), p && (g += -20), v === ".*" && (g += -50)
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
        y = a[m - 1];
      f[y.name] = g && y.repeatable ? g.split("/") : g
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
          value: y,
          repeatable: p,
          optional: b
        } = g, w = y in u ? u[y] : "";
        if (sn(w) && !p) throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);
        const v = sn(w) ? w.join("/") : w;
        if (!v)
          if (b) m.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : f = !0);
          else throw new Error(`Missing required param "${y}"`);
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

function VP(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length;) {
    const o = t[n] - e[n];
    if (o) return o;
    n++
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function zm(e, t) {
  let n = 0;
  const o = e.score,
    s = t.score;
  for (; n < o.length && n < s.length;) {
    const a = VP(o[n], s[n]);
    if (a) return a;
    n++
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (td(o)) return 1;
    if (td(s)) return -1
  }
  return s.length - o.length
}

function td(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0
}
const zP = {
    type: 0,
    value: ""
  },
  HP = /[a-zA-Z0-9_]/;

function UP(e) {
  if (!e) return [
    []
  ];
  if (e === "/") return [
    [zP]
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
        c === "(" ? n = 2 : HP.test(c) ? m() : (f(), n = 0, c !== "*" && c !== "?" && c !== "+" && r--);
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

function WP(e, t, n) {
  const o = FP(UP(e.path), n),
    s = Qe(o, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}

function jP(e, t) {
  const n = [],
    o = new Map;
  t = sd({
    strict: !1,
    end: !0,
    sensitive: !1
  }, t);

  function s(f) {
    return o.get(f)
  }

  function a(f, m, g) {
    const y = !g,
      p = od(f);
    p.aliasOf = g && g.record;
    const b = sd(t, f),
      w = [p];
    if ("alias" in f) {
      const _ = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const k of _) w.push(od(Qe({}, p, {
        components: g ? g.record.components : p.components,
        path: k,
        aliasOf: g ? g.record : p
      })))
    }
    let v, C;
    for (const _ of w) {
      const {
        path: k
      } = _;
      if (m && k[0] !== "/") {
        const I = m.record.path,
          B = I[I.length - 1] === "/" ? "" : "/";
        _.path = m.record.path + (k && B + k)
      }
      if (v = WP(_, m, b), g ? g.alias.push(v) : (C = C || v, C !== v && C.alias.push(v), y && f.name && !id(v) && l(f.name)), Hm(v) && c(v), p.children) {
        const I = p.children;
        for (let B = 0; B < I.length; B++) a(I[B], v, g && g.children[B])
      }
      g = g || v
    }
    return C ? () => {
      l(C)
    } : Wi
  }

  function l(f) {
    if (Fm(f)) {
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
    const m = YP(f, n);
    n.splice(m, 0, f), f.record.name && !id(f) && o.set(f.record.name, f)
  }

  function u(f, m) {
    let g, y = {},
      p, b;
    if ("name" in f && f.name) {
      if (g = o.get(f.name), !g) throw mi(1, {
        location: f
      });
      b = g.record.name, y = Qe(nd(m.params, g.keys.filter(C => !C.optional).concat(g.parent ? g.parent.keys.filter(C => C.optional) : []).map(C => C.name)), f.params && nd(f.params, g.keys.map(C => C.name))), p = g.stringify(y)
    } else if (f.path != null) p = f.path, g = n.find(C => C.re.test(p)), g && (y = g.parse(p), b = g.record.name);
    else {
      if (g = m.name ? o.get(m.name) : n.find(C => C.re.test(m.path)), !g) throw mi(1, {
        location: f,
        currentLocation: m
      });
      b = g.record.name, y = Qe({}, m.params, f.params), p = g.stringify(y)
    }
    const w = [];
    let v = g;
    for (; v;) w.unshift(v.record), v = v.parent;
    return {
      name: b,
      path: p,
      params: y,
      matched: w,
      meta: KP(w)
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

function nd(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n
}

function od(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: QP(e),
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

function QP(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else
    for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n;
  return t
}

function id(e) {
  for (; e;) {
    if (e.record.aliasOf) return !0;
    e = e.parent
  }
  return !1
}

function KP(e) {
  return e.reduce((t, n) => Qe(t, n.meta), {})
}

function sd(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n
}

function YP(e, t) {
  let n = 0,
    o = t.length;
  for (; n !== o;) {
    const a = n + o >> 1;
    zm(e, t[a]) < 0 ? o = a : n = a + 1
  }
  const s = qP(e);
  return s && (o = t.lastIndexOf(s, o - 1)), o
}

function qP(e) {
  let t = e;
  for (; t = t.parent;)
    if (Hm(t) && zm(e, t) === 0) return t
}

function Hm({
  record: e
}) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function GP(e) {
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

function ad(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = vP(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue
    }(sn(o) ? o.map(a => a && Kl(a)) : [o && Kl(o)]).forEach(a => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a))
    })
  }
  return t
}

function ZP(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = sn(o) ? o.map(s => s == null ? null : "" + s) : o == null ? o : "" + o)
  }
  return t
}
const XP = Symbol(""),
  ld = Symbol(""),
  qr = Symbol(""),
  Um = Symbol(""),
  ql = Symbol("");

function Ri() {
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
        })) : m instanceof Error ? c(m) : MP(m) ? c(mi(2, {
          from: t,
          to: m
        })) : (l && o.enterCallbacks[s] === l && typeof m == "function" && l.push(m), r())
      },
      d = a(() => e.call(o && o.instances[s], t, n, u));
    let f = Promise.resolve(d);
    e.length < 3 && (f = f.then(u)), f.catch(m => c(m))
  })
}

function yl(e, t, n, o, s = a => a()) {
  const a = [];
  for (const l of e)
    for (const r in l.components) {
      let c = l.components[r];
      if (!(t !== "beforeRouteEnter" && !l.instances[r]))
        if (Om(c)) {
          const d = (c.__vccOpts || c)[t];
          d && a.push(io(d, n, o, l, r, s))
        } else {
          let u = c();
          a.push(() => u.then(d => {
            if (!d) throw new Error(`Couldn't resolve component "${r}" at "${l.path}"`);
            const f = sP(d) ? d.default : d;
            l.mods[r] = d, l.components[r] = f;
            const g = (f.__vccOpts || f)[t];
            return g && io(g, n, o, l, r, s)()
          }))
        }
    }
  return a
}

function rd(e) {
  const t = Rt(qr),
    n = Rt(Um),
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
      const g = cd(c[u - 2]);
      return u > 1 && cd(d) === g && f[f.length - 1].path !== g ? f.findIndex(hi.bind(null, c[u - 2])) : m
    }),
    a = N(() => s.value > -1 && nO(n.params, o.value.params)),
    l = N(() => s.value > -1 && s.value === n.matched.length - 1 && Lm(n.params, o.value.params));

  function r(c = {}) {
    return tO(c) ? t[en(e.replace) ? "replace" : "push"](en(e.to)).catch(Wi) : Promise.resolve()
  }
  return {
    route: o,
    href: N(() => o.value.href),
    isActive: a,
    isExactActive: l,
    navigate: r
  }
}
const JP = K({
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
    useLink: rd,
    setup(e, {
      slots: t
    }) {
      const n = Je(rd(e)),
        {
          options: o
        } = Rt(qr),
        s = N(() => ({
          [ud(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
          [ud(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
      return () => {
        const a = t.default && t.default(n);
        return e.custom ? a : yr("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: s.value
        }, a)
      }
    }
  }),
  eO = JP;

function tO(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}

function nO(e, t) {
  for (const n in t) {
    const o = t[n],
      s = e[n];
    if (typeof o == "string") {
      if (o !== s) return !1
    } else if (!sn(s) || s.length !== o.length || o.some((a, l) => a !== s[l])) return !1
  }
  return !0
}

function cd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const ud = (e, t, n) => e ?? t ?? n,
  oO = K({
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
      const o = Rt(ql),
        s = N(() => e.route || o.value),
        a = Rt(ld, 0),
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
      Bn(ld, N(() => l.value + 1)), Bn(XP, r), Bn(ql, s);
      const c = F();
      return re(() => [c.value, r.value, e.name], ([u, d, f], [m, g, y]) => {
        d && (d.instances[f] = u, g && g !== d && u && u === m && (d.leaveGuards.size || (d.leaveGuards = g.leaveGuards), d.updateGuards.size || (d.updateGuards = g.updateGuards))), u && d && (!g || !hi(d, g) || !m) && (d.enterCallbacks[f] || []).forEach(p => p(u))
      }, {
        flush: "post"
      }), () => {
        const u = s.value,
          d = e.name,
          f = r.value,
          m = f && f.components[d];
        if (!m) return dd(n.default, {
          Component: m,
          route: u
        });
        const g = f.props[d],
          y = g ? g === !0 ? u.params : typeof g == "function" ? g(u) : g : null,
          b = yr(m, Qe({}, y, t, {
            onVnodeUnmounted: w => {
              w.component.isUnmounted && (f.instances[d] = null)
            },
            ref: c
          }));
        return dd(n.default, {
          Component: b,
          route: u
        }) || b
      }
    }
  });

function dd(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n
}
const iO = oO;

function sO(e) {
  const t = jP(e.routes, e),
    n = e.parseQuery || GP,
    o = e.stringifyQuery || ad,
    s = e.history,
    a = Ri(),
    l = Ri(),
    r = Ri(),
    c = Ig(Jn);
  let u = Jn;
  Jo && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const d = gl.bind(null, A => "" + A),
    f = gl.bind(null, pP),
    m = gl.bind(null, ns);

  function g(A, H) {
    let U, oe;
    return Fm(A) ? (U = t.getRecordMatcher(A), oe = H) : oe = A, t.addRoute(oe, U)
  }

  function y(A) {
    const H = t.getRecordMatcher(A);
    H && t.removeRoute(H)
  }

  function p() {
    return t.getRoutes().map(A => A.record)
  }

  function b(A) {
    return !!t.getRecordMatcher(A)
  }

  function w(A, H) {
    if (H = Qe({}, H || c.value), typeof A == "string") {
      const O = vl(n, A, H.path),
        L = t.resolve({
          path: O.path
        }, H),
        q = s.createHref(O.fullPath);
      return Qe(O, L, {
        params: m(L.params),
        hash: ns(O.hash),
        redirectedFrom: void 0,
        href: q
      })
    }
    let U;
    if (A.path != null) U = Qe({}, A, {
      path: vl(n, A.path, H.path).path
    });
    else {
      const O = Qe({}, A.params);
      for (const L in O) O[L] == null && delete O[L];
      U = Qe({}, A, {
        params: f(O)
      }), H.params = f(H.params)
    }
    const oe = t.resolve(U, H),
      Se = A.hash || "";
    oe.params = d(m(oe.params));
    const Le = CP(o, Qe({}, A, {
        hash: gP(Se),
        path: oe.path
      })),
      x = s.createHref(Le);
    return Qe({
      fullPath: Le,
      hash: Se,
      query: o === ad ? ZP(A.query) : A.query || {}
    }, oe, {
      redirectedFrom: void 0,
      href: x
    })
  }

  function v(A) {
    return typeof A == "string" ? vl(n, A, c.value.path) : Qe({}, A)
  }

  function C(A, H) {
    if (u !== A) return mi(8, {
      from: H,
      to: A
    })
  }

  function _(A) {
    return B(A)
  }

  function k(A) {
    return _(Qe(v(A), {
      replace: !0
    }))
  }

  function I(A) {
    const H = A.matched[A.matched.length - 1];
    if (H && H.redirect) {
      const {
        redirect: U
      } = H;
      let oe = typeof U == "function" ? U(A) : U;
      return typeof oe == "string" && (oe = oe.includes("?") || oe.includes("#") ? oe = v(oe) : {
        path: oe
      }, oe.params = {}), Qe({
        query: A.query,
        hash: A.hash,
        params: oe.path != null ? {} : A.params
      }, oe)
    }
  }

  function B(A, H) {
    const U = u = w(A),
      oe = c.value,
      Se = A.state,
      Le = A.force,
      x = A.replace === !0,
      O = I(U);
    if (O) return B(Qe(v(O), {
      state: typeof O == "object" ? Qe({}, Se, O.state) : Se,
      force: Le,
      replace: x
    }), H || U);
    const L = U;
    L.redirectedFrom = H;
    let q;
    return !Le && _P(o, oe, U) && (q = mi(16, {
      to: L,
      from: oe
    }), V(oe, oe, !0, !1)), (q ? Promise.resolve(q) : D(L, oe)).catch(Q => In(Q) ? In(Q, 2) ? Q : Ne(Q) : ue(Q, L, oe)).then(Q => {
      if (Q) {
        if (In(Q, 2)) return B(Qe({
          replace: x
        }, v(Q.to), {
          state: typeof Q.to == "object" ? Qe({}, Se, Q.to.state) : Se,
          force: Le
        }), H || L)
      } else Q = P(L, oe, !0, x, Se);
      return T(L, oe, Q), Q
    })
  }

  function S(A, H) {
    const U = C(A, H);
    return U ? Promise.reject(U) : Promise.resolve()
  }

  function R(A) {
    const H = we.values().next().value;
    return H && typeof H.runWithContext == "function" ? H.runWithContext(A) : A()
  }

  function D(A, H) {
    let U;
    const [oe, Se, Le] = aO(A, H);
    U = yl(oe.reverse(), "beforeRouteLeave", A, H);
    for (const O of oe) O.leaveGuards.forEach(L => {
      U.push(io(L, A, H))
    });
    const x = S.bind(null, A, H);
    return U.push(x), ye(U).then(() => {
      U = [];
      for (const O of a.list()) U.push(io(O, A, H));
      return U.push(x), ye(U)
    }).then(() => {
      U = yl(Se, "beforeRouteUpdate", A, H);
      for (const O of Se) O.updateGuards.forEach(L => {
        U.push(io(L, A, H))
      });
      return U.push(x), ye(U)
    }).then(() => {
      U = [];
      for (const O of Le)
        if (O.beforeEnter)
          if (sn(O.beforeEnter))
            for (const L of O.beforeEnter) U.push(io(L, A, H));
          else U.push(io(O.beforeEnter, A, H));
      return U.push(x), ye(U)
    }).then(() => (A.matched.forEach(O => O.enterCallbacks = {}), U = yl(Le, "beforeRouteEnter", A, H, R), U.push(x), ye(U))).then(() => {
      U = [];
      for (const O of l.list()) U.push(io(O, A, H));
      return U.push(x), ye(U)
    }).catch(O => In(O, 8) ? O : Promise.reject(O))
  }

  function T(A, H, U) {
    r.list().forEach(oe => R(() => oe(A, H, U)))
  }

  function P(A, H, U, oe, Se) {
    const Le = C(A, H);
    if (Le) return Le;
    const x = H === Jn,
      O = Jo ? history.state : {};
    U && (oe || x ? s.replace(A.fullPath, Qe({
      scroll: x && O && O.scroll
    }, Se)) : s.push(A.fullPath, Se)), c.value = A, V(A, H, U, x), Ne()
  }
  let M;

  function J() {
    M || (M = s.listen((A, H, U) => {
      if (!ae.listening) return;
      const oe = w(A),
        Se = I(oe);
      if (Se) {
        B(Qe(Se, {
          replace: !0
        }), oe).catch(Wi);
        return
      }
      u = oe;
      const Le = c.value;
      Jo && PP(Zu(Le.fullPath, U.delta), Da()), D(oe, Le).catch(x => In(x, 12) ? x : In(x, 2) ? (B(x.to, oe).then(O => {
        In(O, 20) && !U.delta && U.type === os.pop && s.go(-1, !1)
      }).catch(Wi), Promise.reject()) : (U.delta && s.go(-U.delta, !1), ue(x, oe, Le))).then(x => {
        x = x || P(oe, Le, !1), x && (U.delta && !In(x, 8) ? s.go(-U.delta, !1) : U.type === os.pop && In(x, 20) && s.go(-1, !1)), T(oe, Le, x)
      }).catch(Wi)
    }))
  }
  let ce = Ri(),
    W = Ri(),
    ne;

  function ue(A, H, U) {
    Ne(A);
    const oe = W.list();
    return oe.length ? oe.forEach(Se => Se(A, H, U)) : console.error(A), Promise.reject(A)
  }

  function De() {
    return ne && c.value !== Jn ? Promise.resolve() : new Promise((A, H) => {
      ce.add([A, H])
    })
  }

  function Ne(A) {
    return ne || (ne = !A, J(), ce.list().forEach(([H, U]) => A ? U(A) : H()), ce.reset()), A
  }

  function V(A, H, U, oe) {
    const {
      scrollBehavior: Se
    } = e;
    if (!Jo || !Se) return Promise.resolve();
    const Le = !U && OP(Zu(A.fullPath, 0)) || (oe || !U) && history.state && history.state.scroll || null;
    return Oe().then(() => Se(A, H, Le)).then(x => x && IP(x)).catch(x => ue(x, A, H))
  }
  const X = A => s.go(A);
  let ve;
  const we = new Set,
    ae = {
      currentRoute: c,
      listening: !0,
      addRoute: g,
      removeRoute: y,
      clearRoutes: t.clearRoutes,
      hasRoute: b,
      getRoutes: p,
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
      isReady: De,
      install(A) {
        const H = this;
        A.component("RouterLink", eO), A.component("RouterView", iO), A.config.globalProperties.$router = H, Object.defineProperty(A.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => en(c)
        }), Jo && !ve && c.value === Jn && (ve = !0, _(s.location).catch(Se => {}));
        const U = {};
        for (const Se in Jn) Object.defineProperty(U, Se, {
          get: () => c.value[Se],
          enumerable: !0
        });
        A.provide(qr, H), A.provide(Um, zd(U)), A.provide(ql, c);
        const oe = A.unmount;
        we.add(A), A.unmount = function() {
          we.delete(A), we.size < 1 && (u = Jn, M && M(), M = null, c.value = Jn, ve = !1, ne = !1), oe()
        }
      }
    };

  function ye(A) {
    return A.reduce((H, U) => H.then(() => R(U)), Promise.resolve())
  }
  return ae
}

function aO(e, t) {
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
const ia = sO({
    history: $P("/"),
    routes: [{
      path: "/",
      component: () => It(() => import("./Home-9oBqpd-f.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5]))
    }, {
      path: "/home",
      component: () => It(() => import("./Home-9oBqpd-f.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5]))
    }, {
      path: "/airdrop",
      component: () => It(() => Promise.resolve().then(() => NA), void 0)
    }, {
      path: "/terms",
      component: () => It(() => import("./Terms-DP40Fzms.js"), [])
    }, {
      path: "/quests",
      component: () => It(() => Promise.resolve().then(() => CA), void 0)
    }, {
      path: "/rating",
      component: () => It(() => import("./Rating-CByLJUYg.js"), __vite__mapDeps([6, 7]))
    }, {
      path: "/friends",
      component: () => It(() => Promise.resolve().then(() => iI), void 0)
    }, {
      path: "/communities",
      component: () => It(() => import("./Communities-nSy_nKUm.js"), __vite__mapDeps([8, 9]))
    }, {
      path: "/alliance",
      component: () => It(() => import("./Alliance-C7lt8_Bv.js"), __vite__mapDeps([1, 2]))
    }, {
      path: "/boost",
      component: () => It(() => import("./Boost-BD61D_sP.js"), __vite__mapDeps([3, 4]))
    }, {
      path: "/support",
      component: () => It(() => import("./Support-BiYslhgj.js"), [])
    }, {
      path: "/test",
      component: () => It(() => Promise.resolve().then(() => PI), void 0)
    }, {
      path: "/test2",
      component: () => It(() => Promise.resolve().then(() => vI), void 0)
    }, {
      path: "/referral/commission",
      component: () => It(() => import("./ReferralCommission-BcKq0kcE.js"), __vite__mapDeps([10, 11]))
    }]
  }),
  lO = {
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
  rO = {
    methods: {
      async auth() {
        const e = ao();
        try {
          const t = _m("user_auth_hash");
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
          t = Qr(),
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
  cO = {
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
          friendTaskPopup: ["70"]
        },
        isFixed: !1,
        GAME_DOMAIN: Cm,
        API_DOMAIN: wm,
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
          const y = this._rand(500, a),
            p = this._rand(0, l);
          u.style.animation = `${o} ${y}ms ease ${p}ms 1 normal forwards`, u.style.animationFillMode = "forwards", document.body.appendChild(u);
          const b = y + p;
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
  bo = $f(iP),
  uO = jx();
let fd = !1;
ia.afterEach(function() {
  ia.options.history.state.current !== "/" && fd ? window.Telegram.WebApp.BackButton.show() : window.Telegram.WebApp.BackButton.hide(), fd = !0
});
window.Telegram.WebApp.onEvent("backButtonClicked", function() {
  window.history.state && window.history.state.popup && history.back(), ia.push("/")
});
bo.use(uO);
bo.use(ia);
bo.use(WT);
bo.mixin(lO);
bo.mixin(rO);
bo.mixin(cO);
bo.mixin(oE);
bo.mount("#app");
window.userStore = ao();
window.stateStore = Qr();
window.dbStore = bm();
export {
  qI as A, Re as F, dE as L, Kr as T, pt as _, E as a, h as b, G as c, pe as d, Ce as e, Me as f, ge as g, ot as h, rt as i, GT as j, za as k, $v as l, an as n, z as o, Ft as r, uo as s, $ as t, Py as u, dt as v, le as w
};