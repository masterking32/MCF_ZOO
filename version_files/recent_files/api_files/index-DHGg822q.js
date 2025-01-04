const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/Home-CpSyrNiT.js", "assets/Alliance-BKCaqSrB.js", "assets/Alliance-BkDyrW8l.css", "assets/Boost-DeN6WRJo.js", "assets/Boost-DDb4GCY_.css", "assets/Home-BE5w9kLX.css", "assets/Rating-D-Tw8VAq.js", "assets/Rating-DRysk5eI.css", "assets/Communities-HzpwRlfZ.js", "assets/Communities-DpnpFDuu.css", "assets/ReferralCommission-BMARXG0k.js", "assets/ReferralCommission-BKmif7ej.css"]))) => i.map(i => d[i]);
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
const _e = Object.assign,
  Vt = typeof window < "u",
  wn = e => e !== null && typeof e == "object",
  Fe = e => e != null,
  ci = e => typeof e == "function",
  Gl = e => wn(e) && ci(e.then) && ci(e.catch),
  Qi = e => Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime());

function fd(e) {
  return e = e.replace(/[^-|\d]/g, ""), /^((\+86)|(86))?(1)\d{10}$/.test(e) || /^0[0-9-]{10,13}$/.test(e)
}
const hd = e => typeof e == "number" || /^\d+(\.\d+)?$/.test(e),
  Wm = () => Vt ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;

function Zr(e, t) {
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
  G = [Number, String],
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
    type: G,
    default: e
  }),
  ee = e => ({
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
  md = e => aa(e) === "[object Set]",
  Ee = e => typeof e == "function",
  tt = e => typeof e == "string",
  uo = e => typeof e == "symbol",
  Xe = e => e !== null && typeof e == "object",
  gd = e => (Xe(e) || Ee(e)) && Ee(e.then) && Ee(e.catch),
  vd = Object.prototype.toString,
  aa = e => vd.call(e),
  Ym = e => aa(e).slice(8, -1),
  yd = e => aa(e) === "[object Object]",
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
  pd = (e, t, n, o = !1) => {
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
let Xr;
const bd = () => Xr || (Xr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

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

function wd(e) {
  return !!e || e === ""
}
const Cd = e => !!(e && e.__v_isRef === !0),
  M = e => tt(e) ? e : e == null ? "" : xe(e) || Xe(e) && (e.toString === vd || !Ee(e.toString)) ? Cd(e) ? M(e.value) : JSON.stringify(e, _d, 2) : String(e),
  _d = (e, t) => Cd(t) ? _d(e, t.value) : ti(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, s], a) => (n[Ma(o, a) + " =>"] = s, n), {})
  } : md(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => Ma(n))
  } : uo(t) ? Ma(t) : Xe(t) && !xe(t) && !yd(t) ? String(t) : t,
  Ma = (e, t = "") => {
    var n;
    return uo(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
  };
/**
 * @vue/reactivity v3.5.11
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Pt;
class kd {
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
  return new kd(e)
}

function Sd() {
  return Pt
}

function ag(e, t = !1) {
  Pt && Pt.cleanups.push(e)
}
let qe;
const La = new WeakSet;
class xd {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ed(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Jr(this), Id(this);
    const t = qe,
      n = Jt;
    qe = this, Jt = !0;
    try {
      return this.fn()
    } finally {
      Pd(this), qe = t, Jt = n, this.flags &= -3
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) or(t);
      this.deps = this.depsTail = void 0, Jr(this), this.onStop && this.onStop(), this.flags &= -2
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

function Ed(e, t = !1) {
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

function Id(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function Pd(e) {
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
    if (t.dep.version !== t.version || t.dep.computed && (Od(t.dep.computed) || t.dep.version !== t.version)) return !0;
  return !!e._dirty
}

function Od(e) {
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
    Id(e);
    const s = e.fn(e._value);
    (t.version === 0 || ro(s, e._value)) && (e._value = s, t.version++)
  } catch (s) {
    throw t.version++, s
  } finally {
    qe = n, Jt = o, Pd(e), e.flags &= -3
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
const Rd = [];

function fo() {
  Rd.push(Jt), Jt = !1
}

function ho() {
  const e = Rd.pop();
  Jt = e === void 0 ? !0 : e
}

function Jr(e) {
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
    if (n === void 0 || n.sub !== qe) n = this.activeLink = new rg(qe, this), qe.deps ? (n.prevDep = qe.depsTail, qe.depsTail.nextDep = n, qe.depsTail = n) : qe.deps = qe.depsTail = n, Dd(n);
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

function Dd(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep) Dd(o)
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
  }
}
const Ws = new WeakMap,
  Eo = Symbol(""),
  wl = Symbol(""),
  Yi = Symbol("");

function Ct(e, t, n) {
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
        (m === "length" || m === Yi || !uo(m) && m >= d) && r(f)
      })
    } else switch (n !== void 0 && r(l.get(n)), u && r(l.get(Yi)), t) {
      case "add":
        c ? u && r(l.get("length")) : (r(l.get(Eo)), ti(e) && r(l.get(wl)));
        break;
      case "delete":
        c || (r(l.get(Eo)), ti(e) && r(l.get(wl)));
        break;
      case "set":
        ti(e) && r(l.get(Eo));
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
  return t === e ? t : (Ct(t, "iterate", Yi), Wt(e) ? t : t.map(bt))
}

function ca(e) {
  return Ct(e = He(e), "iterate", Yi), e
}
const ug = {
  __proto__: null,
  [Symbol.iterator]() {
    return Na(this, Symbol.iterator, bt)
  },
  concat(...e) {
    return No(this).concat(...e.map(t => xe(t) ? No(t) : t))
  },
  entries() {
    return Na(this, "entries", e => (e[1] = bt(e[1]), e))
  },
  every(e, t) {
    return Tn(this, "every", e, t, void 0, arguments)
  },
  filter(e, t) {
    return Tn(this, "filter", e, t, n => n.map(bt), arguments)
  },
  find(e, t) {
    return Tn(this, "find", e, t, bt, arguments)
  },
  findIndex(e, t) {
    return Tn(this, "findIndex", e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Tn(this, "findLast", e, t, bt, arguments)
  },
  findLastIndex(e, t) {
    return Tn(this, "findLastIndex", e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Tn(this, "forEach", e, t, void 0, arguments)
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
    return Tn(this, "map", e, t, void 0, arguments)
  },
  pop() {
    return _i(this, "pop")
  },
  push(...e) {
    return _i(this, "push", e)
  },
  reduce(e, ...t) {
    return ec(this, "reduce", e, t)
  },
  reduceRight(e, ...t) {
    return ec(this, "reduceRight", e, t)
  },
  shift() {
    return _i(this, "shift")
  },
  some(e, t) {
    return Tn(this, "some", e, t, void 0, arguments)
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
    return Na(this, "values", bt)
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

function Tn(e, t, n, o, s, a) {
  const l = ca(e),
    r = l !== e && !Wt(e),
    c = l[t];
  if (c !== dg[t]) {
    const f = c.apply(e, a);
    return r ? bt(f) : f
  }
  let u = n;
  l !== e && (r ? u = function(f, m) {
    return n.call(this, bt(f), m, e)
  } : n.length > 2 && (u = function(f, m) {
    return n.call(this, f, m, e)
  }));
  const d = c.call(l, u, o);
  return r && s ? s(d) : d
}

function ec(e, t, n, o) {
  const s = ca(e);
  let a = n;
  return s !== e && (Wt(e) ? n.length > 3 && (a = function(l, r, c) {
    return n.call(this, l, r, c, e)
  }) : a = function(l, r, c) {
    return n.call(this, l, bt(r), c, e)
  }), s[t](a, ...o)
}

function Fa(e, t, n) {
  const o = He(e);
  Ct(o, "iterate", Yi);
  const s = o[t](...n);
  return (s === -1 || s === !1) && rr(n[0]) ? (n[0] = He(n[0]), o[t](...n)) : s
}

function _i(e, t, n = []) {
  fo(), tr();
  const o = He(e)[t].apply(e, n);
  return nr(), ho(), o
}
const fg = Zl("__proto__,__v_isRef,__isVue"),
  Bd = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(uo));

function hg(e) {
  uo(e) || (e = String(e));
  const t = He(this);
  return Ct(t, "has", e), t.hasOwnProperty(e)
}
class $d {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n
  }
  get(t, n, o) {
    const s = this._isReadonly,
      a = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return a;
    if (n === "__v_raw") return o === (s ? a ? xg : Fd : a ? Nd : Ld).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const l = xe(t);
    if (!s) {
      let c;
      if (l && (c = ug[n])) return c;
      if (n === "hasOwnProperty") return hg
    }
    const r = Reflect.get(t, n, it(t) ? t : o);
    return (uo(n) ? Bd.has(n) : fg(n)) || (s || Ct(t, "get", n), a) ? r : it(r) ? l && er(n) ? r : r.value : Xe(r) ? s ? zd(r) : Je(r) : r
  }
}
class Md extends $d {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, o, s) {
    let a = t[n];
    if (!this._isShallow) {
      const c = Ro(a);
      if (!Wt(o) && !Ro(o) && (a = He(a), o = He(o)), !xe(t) && it(a) && !it(o)) return c ? !1 : (a.value = o, !0)
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
    return (!uo(n) || !Bd.has(n)) && Ct(t, "has", n), o
  }
  ownKeys(t) {
    return Ct(t, "iterate", xe(t) ? "length" : Eo), Reflect.ownKeys(t)
  }
}
class mg extends $d {
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
const gg = new Md,
  vg = new mg,
  yg = new Md(!0);
const sr = e => e,
  ua = e => Reflect.getPrototypeOf(e);

function rs(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = He(e),
    a = He(t);
  n || (ro(t, a) && Ct(s, "get", t), Ct(s, "get", a));
  const {
    has: l
  } = ua(s), r = o ? sr : n ? ur : bt;
  if (l.call(s, t)) return r(e.get(t));
  if (l.call(s, a)) return r(e.get(a));
  e !== s && e.get(t)
}

function cs(e, t = !1) {
  const n = this.__v_raw,
    o = He(n),
    s = He(e);
  return t || (ro(e, s) && Ct(o, "has", e), Ct(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s)
}

function us(e, t = !1) {
  return e = e.__v_raw, !t && Ct(He(e), "iterate", Eo), Reflect.get(e, "size", e)
}

function tc(e, t = !1) {
  !t && !Wt(e) && !Ro(e) && (e = He(e));
  const n = He(this);
  return ua(n).has.call(n, e) || (n.add(e), Dn(n, "add", e, e)), this
}

function nc(e, t, n = !1) {
  !n && !Wt(t) && !Ro(t) && (t = He(t));
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

function oc(e) {
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

function ic() {
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
      c = t ? sr : e ? ur : bt;
    return !e && Ct(r, "iterate", Eo), l.forEach((u, d) => o.call(s, c(u), c(d), a))
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
      d = n ? sr : t ? ur : bt;
    return !t && Ct(a, "iterate", c ? wl : Eo), {
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
      add: tc,
      set: nc,
      delete: oc,
      clear: ic,
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
        return tc.call(this, a, !0)
      },
      set(a, l) {
        return nc.call(this, a, l, !0)
      },
      delete: oc,
      clear: ic,
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
  Tg = {
    get: ar(!1, !0)
  },
  Sg = {
    get: ar(!0, !1)
  };
const Ld = new WeakMap,
  Nd = new WeakMap,
  Fd = new WeakMap,
  xg = new WeakMap;

function Ag(e) {
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

function Eg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ag(Ym(e))
}

function Je(e) {
  return Ro(e) ? e : lr(e, !1, gg, kg, Ld)
}

function Vd(e) {
  return lr(e, !1, yg, Tg, Nd)
}

function zd(e) {
  return lr(e, !0, vg, Sg, Fd)
}

function lr(e, t, n, o, s) {
  if (!Xe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const a = s.get(e);
  if (a) return a;
  const l = Eg(e);
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

function rr(e) {
  return e ? !!e.__v_raw : !1
}

function He(e) {
  const t = e && e.__v_raw;
  return t ? He(t) : e
}

function cr(e) {
  return !We(e, "__v_skip") && Object.isExtensible(e) && pd(e, "__v_skip", !0), e
}
const bt = e => Xe(e) ? Je(e) : e,
  ur = e => Xe(e) ? zd(e) : e;

function it(e) {
  return e ? e.__v_isRef === !0 : !1
}

function F(e) {
  return Hd(e, !1)
}

function Ig(e) {
  return Hd(e, !0)
}

function Hd(e, t) {
  return it(e) ? e : new Pg(e, t)
}
class Pg {
  constructor(t, n) {
    this.dep = new ir, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : He(t), this._value = n ? t : bt(t), this.__v_isShallow = n
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      o = this.__v_isShallow || Wt(t) || Ro(t);
    t = o ? t : He(t), ro(t, n) && (this._rawValue = t, this._value = o ? t : bt(t), this.dep.trigger())
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

function Ud(e) {
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
    if (this.flags |= 16, !(this.flags & 8) && qe !== this) return Ed(this, !0), !0
  }
  get value() {
    const t = this.dep.track();
    return Od(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}

function Mg(e, t, n = !1) {
  let o, s;
  return Ee(e) ? o = e : (o = e.get, s = e.set), new $g(o, s, n)
}
const hs = {},
  js = new WeakMap;
let So;

function Lg(e, t = !1, n = So) {
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
  let d, f, m, g, v = !1,
    b = !1;
  if (it(e) ? (f = () => e.value, v = Wt(e)) : lo(e) ? (f = () => u(e), v = !0) : xe(e) ? (b = !0, v = e.some(_ => lo(_) || Wt(_)), f = () => e.map(_ => {
      if (it(_)) return _.value;
      if (lo(_)) return u(_);
      if (Ee(_)) return c ? c(_, 2) : _()
    })) : Ee(e) ? t ? f = c ? () => c(e, 2) : e : f = () => {
      if (m) {
        fo();
        try {
          m()
        } finally {
          ho()
        }
      }
      const _ = So;
      So = d;
      try {
        return c ? c(e, 3, [g]) : e(g)
      } finally {
        So = _
      }
    } : f = bn, t && s) {
    const _ = f,
      k = s === !0 ? 1 / 0 : s;
    f = () => On(_(), k)
  }
  const p = Sd(),
    w = () => {
      d.stop(), p && Jl(p.effects, d)
    };
  if (a && t) {
    const _ = t;
    t = (...k) => {
      _(...k), w()
    }
  }
  let y = b ? new Array(e.length).fill(hs) : hs;
  const C = _ => {
    if (!(!(d.flags & 1) || !d.dirty && !_))
      if (t) {
        const k = d.run();
        if (s || v || (b ? k.some((E, B) => ro(E, y[B])) : ro(k, y))) {
          m && m();
          const E = So;
          So = d;
          try {
            const B = [k, y === hs ? void 0 : b && y[0] === hs ? [] : y, g];
            c ? c(t, 3, B) : t(...B), y = k
          } finally {
            So = E
          }
        }
      } else d.run()
  };
  return r && r(C), d = new xd(f), d.scheduler = l ? () => l(C, !1) : C, g = _ => Lg(_, !1, d), m = d.onStop = () => {
    const _ = js.get(d);
    if (_) {
      if (c) c(_, 4);
      else
        for (const k of _) k();
      js.delete(d)
    }
  }, t ? o ? C(!0) : y = d.run() : l ? l(C.bind(null, !0), !0) : d.run(), w.pause = d.pause.bind(d), w.resume = d.resume.bind(d), w.stop = w, w
}

function On(e, t = 1 / 0, n) {
  if (t <= 0 || !Xe(e) || e.__v_skip || (n = n || new Set, n.has(e))) return e;
  if (n.add(e), t--, it(e)) On(e.value, t, n);
  else if (xe(e))
    for (let o = 0; o < e.length; o++) On(e[o], t, n);
  else if (md(e) || ti(e)) e.forEach(o => {
    On(o, t, n)
  });
  else if (yd(e)) {
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
    return s && gd(s) && s.catch(a => {
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
      fo(), is(a, null, 10, [e, c, u]), ho();
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
const Wd = Promise.resolve();
let Qs = null;

function Oe(e) {
  const t = Qs || Wd;
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
    !n || !(e.flags & 2) && t >= qi(n) ? Ot.push(e) : Ot.splice(Vg(t), 0, e), e.flags |= 1, jd()
  }
}

function jd() {
  Qs || (Qs = Wd.then(Kd))
}

function zg(e) {
  xe(e) ? ni.push(...e) : to && e.id === -1 ? to.splice(Xo + 1, 0, e) : e.flags & 1 || (ni.push(e), e.flags |= 1), jd()
}

function sc(e, t, n = vn + 1) {
  for (; n < Ot.length; n++) {
    const o = Ot[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid) continue;
      Ot.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2)
    }
  }
}

function Qd(e) {
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

function Kd(e) {
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
    vn = -1, Ot.length = 0, Qd(), Qs = null, (Ot.length || ni.length) && Kd()
  }
}
let ut = null,
  Yd = null;

function Ks(e) {
  const t = ut;
  return ut = e, Yd = e && e.type.__scopeId || null, t
}

function le(e, t = ut, n) {
  if (!t || e._n) return e;
  const o = (...s) => {
    o._d && yc(-1);
    const a = Ks(t);
    let l;
    try {
      l = e(...s)
    } finally {
      Ks(a), o._d && yc(1)
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

function bo(e, t, n, o) {
  const s = e.dirs,
    a = t && t.dirs;
  for (let l = 0; l < s.length; l++) {
    const r = s[l];
    a && (r.oldValue = a[l].value);
    let c = r.dir[o];
    c && (fo(), on(c, n, 8, [e.el, r, e, t]), ho())
  }
}
const qd = Symbol("_vte"),
  Gd = e => e.__isTeleport,
  Li = e => e && (e.disabled || e.disabled === ""),
  Hg = e => e && (e.defer || e.defer === ""),
  ac = e => typeof SVGElement < "u" && e instanceof SVGElement,
  lc = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
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
          querySelector: v,
          createText: b,
          createComment: p
        }
      } = u, w = Li(t.props);
      let {
        shapeFlag: y,
        children: C,
        dynamicChildren: _
      } = t;
      if (e == null) {
        const k = t.el = b(""),
          E = t.anchor = b("");
        g(k, n, o), g(E, n, o);
        const B = (R, D) => {
            y & 16 && (s && s.isCE && (s.ce._teleportTarget = R), d(C, R, D, s, a, l, r, c))
          },
          T = () => {
            const R = t.target = Cl(t.props, v),
              D = Zd(R, t, b, g);
            R && (l !== "svg" && ac(R) ? l = "svg" : l !== "mathml" && lc(R) && (l = "mathml"), w || (B(R, D), Ms(t)))
          };
        w && (B(n, E), Ms(t)), Hg(t.props) ? Dt(T, a) : T()
      } else {
        t.el = e.el, t.targetStart = e.targetStart;
        const k = t.anchor = e.anchor,
          E = t.target = e.target,
          B = t.targetAnchor = e.targetAnchor,
          T = Li(e.props),
          R = T ? n : E,
          D = T ? k : B;
        if (l === "svg" || ac(E) ? l = "svg" : (l === "mathml" || lc(E)) && (l = "mathml"), _ ? (m(e.dynamicChildren, _, R, s, a, l, r), mr(e, t, !0)) : c || f(e, t, R, D, s, a, l, r, !1), w) T ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ms(t, n, k, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const S = t.target = Cl(t.props, v);
          S && ms(t, S, null, u, 0)
        } else T && ms(t, E, B, u, 1);
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
        for (let v = 0; v < r.length; v++) {
          const b = r[v];
          o(b, t, n, g, !!b.dynamicChildren)
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
        let v = g;
        for (; v;) {
          if (v && v.nodeType === 8) {
            if (v.data === "teleport start anchor") t.targetStart = v;
            else if (v.data === "teleport anchor") {
              t.targetAnchor = v, m._lpa = t.targetAnchor && l(t.targetAnchor);
              break
            }
          }
          v = l(v)
        }
        t.targetAnchor || Zd(m, t, d, u), f(g && l(g), t, m, n, o, s, a)
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

function Zd(e, t, n, o) {
  const s = t.targetStart = n(""),
    a = t.targetAnchor = n("");
  return s[qd] = a, e && (o(s, e), o(a, e)), a
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
  Xd = {
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
  Jd = e => {
    const t = e.subTree;
    return t.component ? Jd(t.component) : t
  },
  Qg = {
    name: "BaseTransition",
    props: Xd,
    setup(e, {
      slots: t
    }) {
      const n = ln(),
        o = jg();
      return () => {
        const s = t.default && nf(t.default(), !0);
        if (!s || !s.length) return;
        const a = ef(s),
          l = He(e),
          {
            mode: r
          } = l;
        if (o.isLeaving) return Va(a);
        const c = rc(a);
        if (!c) return Va(a);
        let u = _l(c, l, o, n, m => u = m);
        c.type !== vt && Gi(c, u);
        const d = n.subTree,
          f = d && rc(d);
        if (f && f.type !== vt && !xo(c, f) && Jd(n).type !== vt) {
          const m = _l(f, l, o, n);
          if (Gi(f, m), r === "out-in" && c.type !== vt) return o.isLeaving = !0, m.afterLeave = () => {
            o.isLeaving = !1, n.job.flags & 8 || n.update(), delete m.afterLeave
          }, Va(a);
          r === "in-out" && c.type !== vt && (m.delayLeave = (g, v, b) => {
            const p = tf(o, f);
            p[String(f.key)] = f, g[no] = () => {
              v(), g[no] = void 0, delete u.delayedLeave
            }, u.delayedLeave = b
          })
        }
        return a
      }
    }
  };

function ef(e) {
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

function tf(e, t) {
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
    onAfterLeave: v,
    onLeaveCancelled: b,
    onBeforeAppear: p,
    onAppear: w,
    onAfterAppear: y,
    onAppearCancelled: C
  } = t, _ = String(e.key), k = tf(n, e), E = (R, D) => {
    R && on(R, o, 9, D)
  }, B = (R, D) => {
    const S = D[1];
    E(R, D), xe(R) ? R.every(I => I.length <= 1) && S() : R.length <= 1 && S()
  }, T = {
    mode: l,
    persisted: r,
    beforeEnter(R) {
      let D = c;
      if (!n.isMounted)
        if (a) D = p || c;
        else return;
      R[no] && R[no](!0);
      const S = k[_];
      S && xo(e, S) && S.el[no] && S.el[no](), E(D, [R])
    },
    enter(R) {
      let D = u,
        S = d,
        I = f;
      if (!n.isMounted)
        if (a) D = w || u, S = y || d, I = C || f;
        else return;
      let $ = !1;
      const X = R[gs] = ce => {
        $ || ($ = !0, ce ? E(I, [R]) : E(S, [R]), T.delayedLeave && T.delayedLeave(), R[gs] = void 0)
      };
      D ? B(D, [R, X]) : X()
    },
    leave(R, D) {
      const S = String(e.key);
      if (R[gs] && R[gs](!0), n.isUnmounting) return D();
      E(m, [R]);
      let I = !1;
      const $ = R[no] = X => {
        I || (I = !0, D(), X ? E(b, [R]) : E(v, [R]), R[no] = void 0, k[S] === e && delete k[S])
      };
      k[S] = e, g ? B(g, [R, $]) : $()
    },
    clone(R) {
      const D = _l(R, t, n, o, s);
      return s && s(D), D
    }
  };
  return T
}

function Va(e) {
  if (fa(e)) return e = co(e), e.children = null, e
}

function rc(e) {
  if (!fa(e)) return Gd(e.type) && e.children ? ef(e.children) : e;
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

function nf(e, t = !1, n) {
  let o = [],
    s = 0;
  for (let a = 0; a < e.length; a++) {
    let l = e[a];
    const r = n == null ? l.key : String(n) + String(l.key != null ? l.key : a);
    l.type === Be ? (l.patchFlag & 128 && s++, o = o.concat(nf(l.children, t, r))) : (t || l.type !== vt) && o.push(r != null ? co(l, {
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

function of(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function kl(e, t, n, o, s = !1) {
  if (xe(e)) {
    e.forEach((v, b) => kl(v, t && (xe(t) ? t[b] : t), n, o, s));
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
    g = f === Ke ? () => !1 : v => We(m, v);
  if (u != null && u !== c && (tt(u) ? (d[u] = null, g(u) && (f[u] = null)) : it(u) && (u.value = null)), Ee(c)) is(c, r, 12, [l, d]);
  else {
    const v = tt(c),
      b = it(c);
    if (v || b) {
      const p = () => {
        if (e.f) {
          const w = v ? g(c) ? f[c] : d[c] : c.value;
          s ? xe(w) && Jl(w, a) : xe(w) ? w.includes(a) || w.push(a) : v ? (d[c] = [a], g(c) && (f[c] = d[c])) : (c.value = [a], e.k && (d[e.k] = c.value))
        } else v ? (d[c] = l, g(c) && (f[c] = l)) : b && (c.value = l, e.k && (d[e.k] = l))
      };
      l ? (p.id = -1, Dt(p, n)) : p()
    }
  }
}
const oi = e => !!e.type.__asyncLoader,
  fa = e => e.type.__isKeepAlive;

function Cn(e, t) {
  sf(e, "a", t)
}

function _n(e, t) {
  sf(e, "da", t)
}

function sf(e, t, n = mt) {
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
        fo();
        const r = as(n),
          c = on(t, n, e, l);
        return r(), ho(), c
      });
    return o ? s.unshift(a) : s.push(a), a
  }
}
const zn = e => (t, n = mt) => {
    (!ga || e === "sp") && ha(e, (...o) => t(...o), n)
  },
  qg = zn("bm"),
  at = zn("m"),
  af = zn("bu"),
  lf = zn("u"),
  kn = zn("bum"),
  gi = zn("um"),
  Gg = zn("sp"),
  Zg = zn("rtg"),
  Xg = zn("rtc");

function Jg(e, t = mt) {
  ha("ec", e, t)
}
const rf = "components",
  ev = "directives";

function ge(e, t) {
  return cf(rf, e, !0, t) || e
}
const tv = Symbol.for("v-ndc");

function nv(e) {
  return cf(ev, e)
}

function cf(e, t, n = !0, o = !1) {
  const s = ut || mt;
  if (s) {
    const a = s.type;
    if (e === rf) {
      const r = Uv(a, !1);
      if (r && (r === t || r === Qt(t) || r === ra(Qt(t)))) return a
    }
    const l = cc(s[e] || a[e], t) || cc(s.appContext[e], t);
    return !l && o ? a : l
  }
}

function cc(e, t) {
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
    for (let u = 0, d = e.length; u < d; u++) s[u] = t(c ? bt(e[u]) : e[u], u, void 0, a)
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

function uf(e, t) {
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
  if (ut.ce || ut.parent && oi(ut.parent) && ut.parent.ce) return t !== "default" && (n.name = t), W(), Me(Be, null, [h("slot", n, o)], 64);
  let a = e[t];
  a && a._c && (a._d = !1), W();
  const l = a && df(a(n)),
    r = Me(Be, {
      key: (n.key || l && l.key || `_${t}`) + (!l && o ? "_fb" : "")
    }, l || [], l && e._ === 1 ? 64 : -2);
  return a && a._c && (a._d = !0), r
}

function df(e) {
  return e.some(t => ui(t) ? !(t.type === vt || t.type === Be && !df(t.children)) : !0) ? e : null
}
const Tl = e => e ? If(e) ? va(e) : Tl(e.parent) : null,
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
    $options: e => fr(e),
    $forceUpdate: e => e.f || (e.f = () => {
      dr(e.update)
    }),
    $nextTick: e => e.n || (e.n = Oe.bind(e.proxy)),
    $watch: e => Tv.bind(e)
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
          Sl && (l[t] = 0)
        }
      }
      const d = Ni[t];
      let f, m;
      if (d) return t === "$attrs" && Ct(e.attrs, "get", ""), d(e);
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

function uc(e) {
  return xe(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}
let Sl = !0;

function iv(e) {
  const t = fr(e),
    n = e.proxy,
    o = e.ctx;
  Sl = !1, t.beforeCreate && dc(t.beforeCreate, e, "bc");
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
    updated: v,
    activated: b,
    deactivated: p,
    beforeDestroy: w,
    beforeUnmount: y,
    destroyed: C,
    unmounted: _,
    render: k,
    renderTracked: E,
    renderTriggered: B,
    errorCaptured: T,
    serverPrefetch: R,
    expose: D,
    inheritAttrs: S,
    components: I,
    directives: $,
    filters: X
  } = t;
  if (u && sv(u, o, null), l)
    for (const te in l) {
      const ue = l[te];
      Ee(ue) && (o[te] = ue.bind(n))
    }
  if (s) {
    const te = s.call(n, n);
    Xe(te) && (e.data = Je(te))
  }
  if (Sl = !0, a)
    for (const te in a) {
      const ue = a[te],
        Re = Ee(ue) ? ue.bind(n, n) : Ee(ue.get) ? ue.get.bind(n, n) : bn,
        Ne = !Ee(ue) && Ee(ue.set) ? ue.set.bind(n) : bn,
        V = N({
          get: Re,
          set: Ne
        });
      Object.defineProperty(o, te, {
        enumerable: !0,
        configurable: !0,
        get: () => V.value,
        set: Z => V.value = Z
      })
    }
  if (r)
    for (const te in r) ff(r[te], o, n, te);
  if (c) {
    const te = Ee(c) ? c.call(n) : c;
    Reflect.ownKeys(te).forEach(ue => {
      Bn(ue, te[ue])
    })
  }
  d && dc(d, e, "c");

  function U(te, ue) {
    xe(ue) ? ue.forEach(Re => te(Re.bind(n))) : ue && te(ue.bind(n))
  }
  if (U(qg, f), U(at, m), U(af, g), U(lf, v), U(Cn, b), U(_n, p), U(Jg, T), U(Xg, E), U(Zg, B), U(kn, y), U(gi, _), U(Gg, R), xe(D))
    if (D.length) {
      const te = e.exposed || (e.exposed = {});
      D.forEach(ue => {
        Object.defineProperty(te, ue, {
          get: () => n[ue],
          set: Re => n[ue] = Re
        })
      })
    } else e.exposed || (e.exposed = {});
  k && e.render === bn && (e.render = k), S != null && (e.inheritAttrs = S), I && (e.components = I), $ && (e.directives = $), R && of(e)
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

function dc(e, t, n) {
  on(xe(e) ? e.map(o => o.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function ff(e, t, n, o) {
  let s = o.includes(".") ? Tf(n, o) : () => n[o];
  if (tt(e)) {
    const a = t[e];
    Ee(a) && re(s, a)
  } else if (Ee(e)) re(s, e.bind(n));
  else if (Xe(e))
    if (xe(e)) e.forEach(a => ff(a, t, n, o));
    else {
      const a = Ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ee(a) && re(s, a, e)
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
  data: fc,
  props: hc,
  emits: hc,
  methods: Di,
  computed: Di,
  beforeCreate: Et,
  created: Et,
  beforeMount: Et,
  mounted: Et,
  beforeUpdate: Et,
  updated: Et,
  beforeDestroy: Et,
  beforeUnmount: Et,
  destroyed: Et,
  unmounted: Et,
  activated: Et,
  deactivated: Et,
  errorCaptured: Et,
  serverPrefetch: Et,
  components: Di,
  directives: Di,
  watch: rv,
  provide: fc,
  inject: lv
};

function fc(e, t) {
  return t ? e ? function() {
    return ft(Ee(e) ? e.call(this, this) : e, Ee(t) ? t.call(this, this) : t)
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

function Et(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}

function Di(e, t) {
  return e ? ft(Object.create(null), e, t) : t
}

function hc(e, t) {
  return e ? xe(e) && xe(t) ? [...new Set([...e, ...t])] : ft(Object.create(null), uc(e), uc(t ?? {})) : t
}

function rv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ft(Object.create(null), e);
  for (const o in t) n[o] = Et(e[o], t[o]);
  return n
}

function hf() {
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
    Ee(o) || (o = ft({}, o)), s != null && !Xe(s) && (s = null);
    const a = hf(),
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
        const f = Io;
        Io = u;
        try {
          return d()
        } finally {
          Io = f
        }
      }
    };
    return u
  }
}
let Io = null;

function Bn(e, t) {
  if (mt) {
    let n = mt.provides;
    const o = mt.parent && mt.parent.provides;
    o === n && (n = mt.provides = Object.create(o)), n[e] = t
  }
}

function Rt(e, t, n = !1) {
  const o = mt || ut;
  if (o || Io) {
    const s = Io ? Io._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && Ee(t) ? t.call(o && o.proxy) : t
  }
}

function dv() {
  return !!(mt || ut || Io)
}
const mf = {},
  gf = () => Object.create(mf),
  vf = e => Object.getPrototypeOf(e) === mf;

function fv(e, t, n, o = !1) {
  const s = {},
    a = gf();
  e.propsDefaults = Object.create(null), yf(e, t, s, a);
  for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
  n ? e.props = o ? s : Vd(s) : e.type.props ? e.props = s : e.props = a, e.attrs = a
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
            const v = Qt(m);
            s[v] = Al(c, r, v, g, e, !1)
          }
        else g !== a[m] && (a[m] = g, u = !0)
      }
    }
  } else {
    yf(e, t, s, a) && (u = !0);
    let d;
    for (const f in r)(!t || !We(t, f) && ((d = Vn(f)) === f || !We(t, d))) && (c ? n && (n[f] !== void 0 || n[d] !== void 0) && (s[f] = Al(c, r, f, void 0, e, !0)) : delete s[f]);
    if (a !== r)
      for (const f in a)(!t || !We(t, f)) && (delete a[f], u = !0)
  }
  u && Dn(e.attrs, "set", "")
}

function yf(e, t, n, o) {
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
      n[f] = Al(s, c, f, u[f], e, !We(u, f))
    }
  }
  return l
}

function Al(e, t, n, o, s, a) {
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
    l[0] && (a && !r ? o = !1 : l[1] && (o === "" || o === Vn(n)) && (o = !0))
  }
  return o
}
const mv = new WeakMap;

function pf(e, t, n = !1) {
  const o = n ? mv : t.propsCache,
    s = o.get(e);
  if (s) return s;
  const a = e.props,
    l = {},
    r = [];
  let c = !1;
  if (!Ee(e)) {
    const d = f => {
      c = !0;
      const [m, g] = pf(f, t, !0);
      ft(l, m), g && r.push(...g)
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d)
  }
  if (!a && !c) return Xe(e) && o.set(e, ei), ei;
  if (xe(a))
    for (let d = 0; d < a.length; d++) {
      const f = Qt(a[d]);
      mc(f) && (l[f] = Ke)
    } else if (a)
      for (const d in a) {
        const f = Qt(d);
        if (mc(f)) {
          const m = a[d],
            g = l[f] = xe(m) || Ee(m) ? {
              type: m
            } : ft({}, m),
            v = g.type;
          let b = !1,
            p = !0;
          if (xe(v))
            for (let w = 0; w < v.length; ++w) {
              const y = v[w],
                C = Ee(y) && y.name;
              if (C === "Boolean") {
                b = !0;
                break
              } else C === "String" && (p = !1)
            } else b = Ee(v) && v.name === "Boolean";
          g[0] = b, g[1] = p, (b || We(g, "default")) && r.push(f)
        }
      }
  const u = [l, r];
  return Xe(e) && o.set(e, u), u
}

function mc(e) {
  return e[0] !== "$" && !Bi(e)
}
const bf = e => e[0] === "_" || e === "$stable",
  hr = e => xe(e) ? e.map(yn) : [yn(e)],
  gv = (e, t, n) => {
    if (t._n) return t;
    const o = le((...s) => hr(t(...s)), n);
    return o._c = !1, o
  },
  wf = (e, t, n) => {
    const o = e._ctx;
    for (const s in e) {
      if (bf(s)) continue;
      const a = e[s];
      if (Ee(a)) t[s] = gv(s, a, o);
      else if (a != null) {
        const l = hr(a);
        t[s] = () => l
      }
    }
  },
  Cf = (e, t) => {
    const n = hr(t);
    e.slots.default = () => n
  },
  _f = (e, t, n) => {
    for (const o in t)(n || o !== "_") && (e[o] = t[o])
  },
  vv = (e, t, n) => {
    const o = e.slots = gf();
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (_f(o, t, n), n && pd(o, "_", s, !0)) : wf(t, o)
    } else t && Cf(e, t)
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
      r ? n && r === 1 ? a = !1 : _f(s, t, n) : (a = !t.$stable, wf(t, s)), l = t
    } else t && (Cf(e, t), l = {
      default: 1
    });
    if (a)
      for (const r in s) !bf(r) && l[r] == null && delete s[r]
  },
  Dt = Ov;

function pv(e) {
  return bv(e)
}

function bv(e, t) {
  const n = bd();
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
    insertStaticContent: v
  } = e, b = (x, O, L, q = null, Q = null, oe = null, me = void 0, fe = null, de = !!O.dynamicChildren) => {
    if (x === O) return;
    x && !xo(x, O) && (q = A(x), Z(x, Q, oe, !0), x = null), O.patchFlag === -2 && (de = !1, O.dynamicChildren = null);
    const {
      type: ie,
      ref: Se,
      shapeFlag: pe
    } = O;
    switch (ie) {
      case ss:
        p(x, O, L, q);
        break;
      case vt:
        w(x, O, L, q);
        break;
      case Ls:
        x == null && y(O, L, q, me);
        break;
      case Be:
        I(x, O, L, q, Q, oe, me, fe, de);
        break;
      default:
        pe & 1 ? k(x, O, L, q, Q, oe, me, fe, de) : pe & 6 ? $(x, O, L, q, Q, oe, me, fe, de) : (pe & 64 || pe & 128) && ie.process(x, O, L, q, Q, oe, me, fe, de, ne)
    }
    Se != null && Q && kl(Se, x && x.ref, oe, O || x, !O)
  }, p = (x, O, L, q) => {
    if (x == null) o(O.el = r(O.children), L, q);
    else {
      const Q = O.el = x.el;
      O.children !== x.children && u(Q, O.children)
    }
  }, w = (x, O, L, q) => {
    x == null ? o(O.el = c(O.children || ""), L, q) : O.el = x.el
  }, y = (x, O, L, q) => {
    [x.el, x.anchor] = v(x.children, O, L, q, x.el, x.anchor)
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
  }, k = (x, O, L, q, Q, oe, me, fe, de) => {
    O.type === "svg" ? me = "svg" : O.type === "math" && (me = "mathml"), x == null ? E(O, L, q, Q, oe, me, fe, de) : R(x, O, Q, oe, me, fe, de)
  }, E = (x, O, L, q, Q, oe, me, fe) => {
    let de, ie;
    const {
      props: Se,
      shapeFlag: pe,
      transition: Ce,
      dirs: Ae
    } = x;
    if (de = x.el = l(x.type, oe, Se && Se.is, Se), pe & 8 ? d(de, x.children) : pe & 16 && T(x.children, de, null, q, Q, Ua(x, oe), me, fe), Ae && bo(x, null, q, "created"), B(de, x, x.scopeId, me, q), Se) {
      for (const Ye in Se) Ye !== "value" && !Bi(Ye) && a(de, Ye, null, Se[Ye], oe, q);
      "value" in Se && a(de, "value", null, Se.value, oe), (ie = Se.onVnodeBeforeMount) && hn(ie, q, x)
    }
    Ae && bo(x, null, q, "beforeMount");
    const Ve = wv(Q, Ce);
    Ve && Ce.beforeEnter(de), o(de, O, L), ((ie = Se && Se.onVnodeMounted) || Ve || Ae) && Dt(() => {
      ie && hn(ie, q, x), Ve && Ce.enter(de), Ae && bo(x, null, q, "mounted")
    }, Q)
  }, B = (x, O, L, q, Q) => {
    if (L && g(x, L), q)
      for (let oe = 0; oe < q.length; oe++) g(x, q[oe]);
    if (Q) {
      let oe = Q.subTree;
      if (O === oe || xf(oe.type) && (oe.ssContent === O || oe.ssFallback === O)) {
        const me = Q.vnode;
        B(x, me, me.scopeId, me.slotScopeIds, Q.parent)
      }
    }
  }, T = (x, O, L, q, Q, oe, me, fe, de = 0) => {
    for (let ie = de; ie < x.length; ie++) {
      const Se = x[ie] = fe ? oo(x[ie]) : yn(x[ie]);
      b(null, Se, O, L, q, Q, oe, me, fe)
    }
  }, R = (x, O, L, q, Q, oe, me) => {
    const fe = O.el = x.el;
    let {
      patchFlag: de,
      dynamicChildren: ie,
      dirs: Se
    } = O;
    de |= x.patchFlag & 16;
    const pe = x.props || Ke,
      Ce = O.props || Ke;
    let Ae;
    if (L && wo(L, !1), (Ae = Ce.onVnodeBeforeUpdate) && hn(Ae, L, O, x), Se && bo(O, x, L, "beforeUpdate"), L && wo(L, !0), (pe.innerHTML && Ce.innerHTML == null || pe.textContent && Ce.textContent == null) && d(fe, ""), ie ? D(x.dynamicChildren, ie, fe, L, q, Ua(O, Q), oe) : me || ue(x, O, fe, null, L, q, Ua(O, Q), oe, !1), de > 0) {
      if (de & 16) S(fe, pe, Ce, L, Q);
      else if (de & 2 && pe.class !== Ce.class && a(fe, "class", null, Ce.class, Q), de & 4 && a(fe, "style", pe.style, Ce.style, Q), de & 8) {
        const Ve = O.dynamicProps;
        for (let Ye = 0; Ye < Ve.length; Ye++) {
          const je = Ve[Ye],
            $t = pe[je],
            pt = Ce[je];
          (pt !== $t || je === "value") && a(fe, je, $t, pt, Q, L)
        }
      }
      de & 1 && x.children !== O.children && d(fe, O.children)
    } else !me && ie == null && S(fe, pe, Ce, L, Q);
    ((Ae = Ce.onVnodeUpdated) || Se) && Dt(() => {
      Ae && hn(Ae, L, O, x), Se && bo(O, x, L, "updated")
    }, q)
  }, D = (x, O, L, q, Q, oe, me) => {
    for (let fe = 0; fe < O.length; fe++) {
      const de = x[fe],
        ie = O[fe],
        Se = de.el && (de.type === Be || !xo(de, ie) || de.shapeFlag & 70) ? f(de.el) : L;
      b(de, ie, Se, null, q, Q, oe, me, !0)
    }
  }, S = (x, O, L, q, Q) => {
    if (O !== L) {
      if (O !== Ke)
        for (const oe in O) !Bi(oe) && !(oe in L) && a(x, oe, O[oe], null, Q, q);
      for (const oe in L) {
        if (Bi(oe)) continue;
        const me = L[oe],
          fe = O[oe];
        me !== fe && oe !== "value" && a(x, oe, fe, me, Q, q)
      }
      "value" in L && a(x, "value", O.value, L.value, Q)
    }
  }, I = (x, O, L, q, Q, oe, me, fe, de) => {
    const ie = O.el = x ? x.el : r(""),
      Se = O.anchor = x ? x.anchor : r("");
    let {
      patchFlag: pe,
      dynamicChildren: Ce,
      slotScopeIds: Ae
    } = O;
    Ae && (fe = fe ? fe.concat(Ae) : Ae), x == null ? (o(ie, L, q), o(Se, L, q), T(O.children || [], L, Se, Q, oe, me, fe, de)) : pe > 0 && pe & 64 && Ce && x.dynamicChildren ? (D(x.dynamicChildren, Ce, L, Q, oe, me, fe), (O.key != null || Q && O === Q.subTree) && mr(x, O, !0)) : ue(x, O, L, Se, Q, oe, me, fe, de)
  }, $ = (x, O, L, q, Q, oe, me, fe, de) => {
    O.slotScopeIds = fe, x == null ? O.shapeFlag & 512 ? Q.ctx.activate(O, L, q, me, de) : X(O, L, q, Q, oe, me, de) : ce(x, O, de)
  }, X = (x, O, L, q, Q, oe, me) => {
    const fe = x.component = Nv(x, q, Q);
    if (fa(x) && (fe.ctx.renderer = ne), Fv(fe, !1, me), fe.asyncDep) {
      if (Q && Q.registerDep(fe, U, me), !x.el) {
        const de = fe.subTree = h(vt);
        w(null, de, O, L)
      }
    } else U(fe, x, O, L, Q, oe, me)
  }, ce = (x, O, L) => {
    const q = O.component = x.component;
    if (Iv(x, O, L))
      if (q.asyncDep && !q.asyncResolved) {
        te(q, O, L);
        return
      } else q.next = O, q.update();
    else O.el = x.el, q.vnode = O
  }, U = (x, O, L, q, Q, oe, me) => {
    const fe = () => {
      if (x.isMounted) {
        let {
          next: pe,
          bu: Ce,
          u: Ae,
          parent: Ve,
          vnode: Ye
        } = x;
        {
          const Mt = kf(x);
          if (Mt) {
            pe && (pe.el = Ye.el, te(x, pe, me)), Mt.asyncDep.then(() => {
              x.isUnmounted || fe()
            });
            return
          }
        }
        let je = pe,
          $t;
        wo(x, !1), pe ? (pe.el = Ye.el, te(x, pe, me)) : pe = Ye, Ce && $a(Ce), ($t = pe.props && pe.props.onVnodeBeforeUpdate) && hn($t, Ve, pe, Ye), wo(x, !0);
        const pt = Wa(x),
          Yt = x.subTree;
        x.subTree = pt, b(Yt, pt, f(Yt.el), A(Yt), x, Q, oe), pe.el = pt.el, je === null && Pv(x, pt.el), Ae && Dt(Ae, Q), ($t = pe.props && pe.props.onVnodeUpdated) && Dt(() => hn($t, Ve, pe, Ye), Q)
      } else {
        let pe;
        const {
          el: Ce,
          props: Ae
        } = O, {
          bm: Ve,
          m: Ye,
          parent: je,
          root: $t,
          type: pt
        } = x, Yt = oi(O);
        if (wo(x, !1), Ve && $a(Ve), !Yt && (pe = Ae && Ae.onVnodeBeforeMount) && hn(pe, je, O), wo(x, !0), Ce && Le) {
          const Mt = () => {
            x.subTree = Wa(x), Le(Ce, x.subTree, x, Q, null)
          };
          Yt && pt.__asyncHydrate ? pt.__asyncHydrate(Ce, x, Mt) : Mt()
        } else {
          $t.ce && $t.ce._injectChildStyle(pt);
          const Mt = x.subTree = Wa(x);
          b(null, Mt, L, q, x, Q, oe), O.el = Mt.el
        }
        if (Ye && Dt(Ye, Q), !Yt && (pe = Ae && Ae.onVnodeMounted)) {
          const Mt = O;
          Dt(() => hn(pe, je, Mt), Q)
        }(O.shapeFlag & 256 || je && oi(je.vnode) && je.vnode.shapeFlag & 256) && x.a && Dt(x.a, Q), x.isMounted = !0, O = L = q = null
      }
    };
    x.scope.on();
    const de = x.effect = new xd(fe);
    x.scope.off();
    const ie = x.update = de.run.bind(de),
      Se = x.job = de.runIfDirty.bind(de);
    Se.i = x, Se.id = x.uid, de.scheduler = () => dr(Se), wo(x, !0), ie()
  }, te = (x, O, L) => {
    O.component = x;
    const q = x.vnode.props;
    x.vnode = O, x.next = null, hv(x, O.props, q, L), yv(x, O.children, L), fo(), sc(x), ho()
  }, ue = (x, O, L, q, Q, oe, me, fe, de = !1) => {
    const ie = x && x.children,
      Se = x ? x.shapeFlag : 0,
      pe = O.children,
      {
        patchFlag: Ce,
        shapeFlag: Ae
      } = O;
    if (Ce > 0) {
      if (Ce & 128) {
        Ne(ie, pe, L, q, Q, oe, me, fe, de);
        return
      } else if (Ce & 256) {
        Re(ie, pe, L, q, Q, oe, me, fe, de);
        return
      }
    }
    Ae & 8 ? (Se & 16 && ye(ie, Q, oe), pe !== ie && d(L, pe)) : Se & 16 ? Ae & 16 ? Ne(ie, pe, L, q, Q, oe, me, fe, de) : ye(ie, Q, oe, !0) : (Se & 8 && d(L, ""), Ae & 16 && T(pe, L, q, Q, oe, me, fe, de))
  }, Re = (x, O, L, q, Q, oe, me, fe, de) => {
    x = x || ei, O = O || ei;
    const ie = x.length,
      Se = O.length,
      pe = Math.min(ie, Se);
    let Ce;
    for (Ce = 0; Ce < pe; Ce++) {
      const Ae = O[Ce] = de ? oo(O[Ce]) : yn(O[Ce]);
      b(x[Ce], Ae, L, null, Q, oe, me, fe, de)
    }
    ie > Se ? ye(x, Q, oe, !0, !1, pe) : T(O, L, q, Q, oe, me, fe, de, pe)
  }, Ne = (x, O, L, q, Q, oe, me, fe, de) => {
    let ie = 0;
    const Se = O.length;
    let pe = x.length - 1,
      Ce = Se - 1;
    for (; ie <= pe && ie <= Ce;) {
      const Ae = x[ie],
        Ve = O[ie] = de ? oo(O[ie]) : yn(O[ie]);
      if (xo(Ae, Ve)) b(Ae, Ve, L, null, Q, oe, me, fe, de);
      else break;
      ie++
    }
    for (; ie <= pe && ie <= Ce;) {
      const Ae = x[pe],
        Ve = O[Ce] = de ? oo(O[Ce]) : yn(O[Ce]);
      if (xo(Ae, Ve)) b(Ae, Ve, L, null, Q, oe, me, fe, de);
      else break;
      pe--, Ce--
    }
    if (ie > pe) {
      if (ie <= Ce) {
        const Ae = Ce + 1,
          Ve = Ae < Se ? O[Ae].el : q;
        for (; ie <= Ce;) b(null, O[ie] = de ? oo(O[ie]) : yn(O[ie]), L, Ve, Q, oe, me, fe, de), ie++
      }
    } else if (ie > Ce)
      for (; ie <= pe;) Z(x[ie], Q, oe, !0), ie++;
    else {
      const Ae = ie,
        Ve = ie,
        Ye = new Map;
      for (ie = Ve; ie <= Ce; ie++) {
        const Lt = O[ie] = de ? oo(O[ie]) : yn(O[ie]);
        Lt.key != null && Ye.set(Lt.key, ie)
      }
      let je, $t = 0;
      const pt = Ce - Ve + 1;
      let Yt = !1,
        Mt = 0;
      const Ci = new Array(pt);
      for (ie = 0; ie < pt; ie++) Ci[ie] = 0;
      for (ie = Ae; ie <= pe; ie++) {
        const Lt = x[ie];
        if ($t >= pt) {
          Z(Lt, Q, oe, !0);
          continue
        }
        let fn;
        if (Lt.key != null) fn = Ye.get(Lt.key);
        else
          for (je = Ve; je <= Ce; je++)
            if (Ci[je - Ve] === 0 && xo(Lt, O[je])) {
              fn = je;
              break
            } fn === void 0 ? Z(Lt, Q, oe, !0) : (Ci[fn - Ve] = ie + 1, fn >= Mt ? Mt = fn : Yt = !0, b(Lt, O[fn], L, null, Q, oe, me, fe, de), $t++)
      }
      const qr = Yt ? Cv(Ci) : ei;
      for (je = qr.length - 1, ie = pt - 1; ie >= 0; ie--) {
        const Lt = Ve + ie,
          fn = O[Lt],
          Gr = Lt + 1 < Se ? O[Lt + 1].el : q;
        Ci[ie] === 0 ? b(null, fn, L, Gr, Q, oe, me, fe, de) : Yt && (je < 0 || ie !== qr[je] ? V(fn, L, Gr, 2) : je--)
      }
    }
  }, V = (x, O, L, q, Q = null) => {
    const {
      el: oe,
      type: me,
      transition: fe,
      children: de,
      shapeFlag: ie
    } = x;
    if (ie & 6) {
      V(x.component.subTree, O, L, q);
      return
    }
    if (ie & 128) {
      x.suspense.move(O, L, q);
      return
    }
    if (ie & 64) {
      me.move(x, O, L, ne);
      return
    }
    if (me === Be) {
      o(oe, O, L);
      for (let pe = 0; pe < de.length; pe++) V(de[pe], O, L, q);
      o(x.anchor, O, L);
      return
    }
    if (me === Ls) {
      C(x, O, L);
      return
    }
    if (q !== 2 && ie & 1 && fe)
      if (q === 0) fe.beforeEnter(oe), o(oe, O, L), Dt(() => fe.enter(oe), Q);
      else {
        const {
          leave: pe,
          delayLeave: Ce,
          afterLeave: Ae
        } = fe, Ve = () => o(oe, O, L), Ye = () => {
          pe(oe, () => {
            Ve(), Ae && Ae()
          })
        };
        Ce ? Ce(oe, Ve, Ye) : Ye()
      }
    else o(oe, O, L)
  }, Z = (x, O, L, q = !1, Q = !1) => {
    const {
      type: oe,
      props: me,
      ref: fe,
      children: de,
      dynamicChildren: ie,
      shapeFlag: Se,
      patchFlag: pe,
      dirs: Ce,
      cacheIndex: Ae
    } = x;
    if (pe === -2 && (Q = !1), fe != null && kl(fe, null, L, x, !0), Ae != null && (O.renderCache[Ae] = void 0), Se & 256) {
      O.ctx.deactivate(x);
      return
    }
    const Ve = Se & 1 && Ce,
      Ye = !oi(x);
    let je;
    if (Ye && (je = me && me.onVnodeBeforeUnmount) && hn(je, O, x), Se & 6) se(x.component, L, q);
    else {
      if (Se & 128) {
        x.suspense.unmount(L, q);
        return
      }
      Ve && bo(x, null, O, "beforeUnmount"), Se & 64 ? x.type.remove(x, O, L, ne, q) : ie && !ie.hasOnce && (oe !== Be || pe > 0 && pe & 64) ? ye(ie, O, L, !1, !0) : (oe === Be && pe & 384 || !Q && Se & 16) && ye(de, O, L), q && ve(x)
    }(Ye && (je = me && me.onVnodeUnmounted) || Ve) && Dt(() => {
      je && hn(je, O, x), Ve && bo(x, null, O, "unmounted")
    }, L)
  }, ve = x => {
    const {
      type: O,
      el: L,
      anchor: q,
      transition: Q
    } = x;
    if (O === Be) {
      we(L, q);
      return
    }
    if (O === Ls) {
      _(x);
      return
    }
    const oe = () => {
      s(L), Q && !Q.persisted && Q.afterLeave && Q.afterLeave()
    };
    if (x.shapeFlag & 1 && Q && !Q.persisted) {
      const {
        leave: me,
        delayLeave: fe
      } = Q, de = () => me(L, oe);
      fe ? fe(x.el, oe, de) : de()
    } else oe()
  }, we = (x, O) => {
    let L;
    for (; x !== O;) L = m(x), s(x), x = L;
    s(O)
  }, se = (x, O, L) => {
    const {
      bum: q,
      scope: Q,
      job: oe,
      subTree: me,
      um: fe,
      m: de,
      a: ie
    } = x;
    gc(de), gc(ie), q && $a(q), Q.stop(), oe && (oe.flags |= 8, Z(me, x, O, L)), fe && Dt(fe, O), Dt(() => {
      x.isUnmounted = !0
    }, O), O && O.pendingBranch && !O.isUnmounted && x.asyncDep && !x.asyncResolved && x.suspenseId === O.pendingId && (O.deps--, O.deps === 0 && O.resolve())
  }, ye = (x, O, L, q = !1, Q = !1, oe = 0) => {
    for (let me = oe; me < x.length; me++) Z(x[me], O, L, q, Q)
  }, A = x => {
    if (x.shapeFlag & 6) return A(x.component.subTree);
    if (x.shapeFlag & 128) return x.suspense.next();
    const O = m(x.anchor || x.el),
      L = O && O[qd];
    return L ? m(L) : O
  };
  let z = !1;
  const H = (x, O, L) => {
      x == null ? O._vnode && Z(O._vnode, null, null, !0) : b(O._vnode || null, x, O, null, null, null, L), O._vnode = x, z || (z = !0, sc(), Qd(), z = !1)
    },
    ne = {
      p: b,
      um: Z,
      m: V,
      r: ve,
      mt: X,
      mc: T,
      pc: ue,
      pbc: D,
      n: A,
      o: e
    };
  let ke, Le;
  return {
    render: H,
    hydrate: ke,
    createApp: uv(H, ke)
  }
}

function Ua({
  type: e,
  props: t
}, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function wo({
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

function kf(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : kf(t)
}

function gc(e) {
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
  r.call = (m, g, v) => on(m, u, g, v);
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

function Tv(e, t, n) {
  const o = this.proxy,
    s = tt(e) ? e.includes(".") ? Tf(o, e) : () => o[e] : e.bind(o, o);
  let a;
  Ee(t) ? a = t : (a = t.handler, n = t);
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
const Sv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qt(t)}Modifiers`] || e[`${Vn(t)}Modifiers`];

function xv(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Ke;
  let s = n;
  const a = t.startsWith("update:"),
    l = a && Sv(o, t.slice(7));
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

function Sf(e, t, n = !1) {
  const o = t.emitsCache,
    s = o.get(e);
  if (s !== void 0) return s;
  const a = e.emits;
  let l = {},
    r = !1;
  if (!Ee(e)) {
    const c = u => {
      const d = Sf(u, t, !0);
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
    ctx: v,
    inheritAttrs: b
  } = e, p = Ks(e);
  let w, y;
  try {
    if (n.shapeFlag & 4) {
      const _ = s || o,
        k = _;
      w = yn(u.call(k, _, d, f, g, m, v)), y = r
    } else {
      const _ = t;
      w = yn(_.length > 1 ? _(f, {
        attrs: r,
        slots: l,
        emit: c
      }) : _(f, null)), y = t.props ? r : Av(r)
    }
  } catch (_) {
    Fi.length = 0, da(_, e, 1), w = h(vt)
  }
  let C = w;
  if (y && b !== !1) {
    const _ = Object.keys(y),
      {
        shapeFlag: k
      } = C;
    _.length && k & 7 && (a && _.some(Xl) && (y = Ev(y, a)), C = co(C, y, !1, !0))
  }
  return n.dirs && (C = co(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && Gi(C, n.transition), w = C, Ks(p), w
}
const Av = e => {
    let t;
    for (const n in e)(n === "class" || n === "style" || sa(n)) && ((t || (t = {}))[n] = e[n]);
    return t
  },
  Ev = (e, t) => {
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
    if (c & 16) return o ? vc(o, l, u) : !!l;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const m = d[f];
        if (l[m] !== o[m] && !ma(u, m)) return !0
      }
    }
  } else return (s || r) && (!r || !r.$stable) ? !0 : o === l ? !1 : o ? l ? vc(o, l, u) : !0 : !!l;
  return !1
}

function vc(e, t, n) {
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
const xf = e => e.__isSuspense;

function Ov(e, t) {
  t && t.pendingBranch ? xe(e) ? t.effects.push(...e) : t.effects.push(e) : zg(e)
}
const Be = Symbol.for("v-fgt"),
  ss = Symbol.for("v-txt"),
  vt = Symbol.for("v-cmt"),
  Ls = Symbol.for("v-stc"),
  Fi = [];
let Nt = null;

function W(e = !1) {
  Fi.push(Nt = e ? null : [])
}

function Rv() {
  Fi.pop(), Nt = Fi[Fi.length - 1] || null
}
let Zi = 1;

function yc(e) {
  Zi += e, e < 0 && Nt && (Nt.hasOnce = !0)
}

function Af(e) {
  return e.dynamicChildren = Zi > 0 ? Nt || ei : null, Rv(), Zi > 0 && Nt && Nt.push(e), e
}

function ae(e, t, n, o, s, a) {
  return Af(P(e, t, n, o, s, a, !0))
}

function Me(e, t, n, o, s) {
  return Af(h(e, t, n, o, s, !0))
}

function ui(e) {
  return e ? e.__v_isVNode === !0 : !1
}

function xo(e, t) {
  return e.type === t.type && e.key === t.key
}
const Ef = ({
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

function P(e, t = null, n = null, o = 0, s = null, a = e === Be ? 0 : 1, l = !1, r = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ef(t),
    ref: t && Ns(t),
    scopeId: Yd,
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
  const l = tt(e) ? 1 : xf(e) ? 128 : Gd(e) ? 64 : Xe(e) ? 4 : Ee(e) ? 2 : 0;
  return P(e, t, n, o, s, l, a, !0)
}

function Bv(e) {
  return e ? rr(e) || vf(e) ? ft({}, e) : e : null
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
    key: u && Ef(u),
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

function be(e = " ", t = 0) {
  return h(ss, null, e, t)
}

function $v(e, t) {
  const n = h(Ls, null, e);
  return n.staticCount = t, n
}

function Te(e = "", t = !1) {
  return t ? (W(), Me(vt, null, e)) : h(vt, null, e)
}

function yn(e) {
  return e == null || typeof e == "boolean" ? h(vt) : xe(e) ? h(Be, null, e.slice()) : ui(e) ? oo(e) : h(ss, null, String(e))
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
      !s && !vf(t) ? t._ctx = ut : s === 3 && ut && (ut.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    }
  else Ee(t) ? (t = {
    default: t,
    _ctx: ut
  }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [be(t)]) : n = 8);
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
const Mv = hf();
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
      scope: new kd(!0),
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
      propsOptions: pf(o, s),
      emitsOptions: Sf(o, s),
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
let qs, El;
{
  const e = bd(),
    t = (n, o) => {
      let s;
      return (s = e[n]) || (s = e[n] = []), s.push(o), a => {
        s.length > 1 ? s.forEach(l => l(a)) : s[0](a)
      }
    };
  qs = t("__VUE_INSTANCE_SETTERS__", n => mt = n), El = t("__VUE_SSR_SETTERS__", n => ga = n)
}
const as = e => {
    const t = mt;
    return qs(e), e.scope.on(), () => {
      e.scope.off(), qs(t)
    }
  },
  pc = () => {
    mt && mt.scope.off(), qs(null)
  };

function If(e) {
  return e.vnode.shapeFlag & 4
}
let ga = !1;

function Fv(e, t = !1, n = !1) {
  t && El(t);
  const {
    props: o,
    children: s
  } = e.vnode, a = If(e);
  fv(e, o, a, t), vv(e, s, n);
  const l = a ? Vv(e, t) : void 0;
  return t && El(!1), l
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
    fo();
    const l = is(o, e, 0, [e.props, s]);
    if (ho(), a(), gd(l)) {
      if (oi(e) || of(e), l.then(pc, pc), t) return l.then(r => {
        bc(e, r, t)
      }).catch(r => {
        da(r, e, 0)
      });
      e.asyncDep = l
    } else bc(e, l, t)
  } else Pf(e, t)
}

function bc(e, t, n) {
  Ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Xe(t) && (e.setupState = Ud(t)), Pf(e, n)
}
let wc;

function Pf(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && wc && !o.render) {
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
        o.render = wc(s, u)
      }
    }
    e.render = o.render || bn
  } {
    const s = as(e);
    fo();
    try {
      iv(e)
    } finally {
      ho(), s()
    }
  }
}
const zv = {
  get(e, t) {
    return Ct(e, "get", ""), e[t]
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
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ud(cr(e.exposed)), {
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
  return Ee(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Wv(e) {
  return Ee(e) && "__vccOpts" in e
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
const Cc = typeof window < "u" && window.trustedTypes;
if (Cc) try {
  Il = Cc.createPolicy("vue", {
    createHTML: e => e
  })
} catch {}
const Of = Il ? e => Il.createHTML(e) : e => e,
  Qv = "http://www.w3.org/2000/svg",
  Kv = "http://www.w3.org/1998/Math/MathML",
  Pn = typeof document < "u" ? document : null,
  _c = Pn && Pn.createElement("template"),
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
        _c.innerHTML = Of(o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e);
        const r = _c.content;
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
  Rf = {
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
  qv = ft({}, Xd, Rf),
  Gv = e => (e.displayName = "Transition", e.props = qv, e),
  ya = Gv((e, {
    slots: t
  }) => yr(Kg, Zv(e), t)),
  Co = (e, t = []) => {
    xe(e) ? e.forEach(n => n(...t)) : e && e(...t)
  },
  kc = e => e ? xe(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Zv(e) {
  const t = {};
  for (const I in e) I in Rf || (t[I] = e[I]);
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
  } = e, v = Xv(s), b = v && v[0], p = v && v[1], {
    onBeforeEnter: w,
    onEnter: y,
    onEnterCancelled: C,
    onLeave: _,
    onLeaveCancelled: k,
    onBeforeAppear: E = w,
    onAppear: B = y,
    onAppearCancelled: T = C
  } = t, R = (I, $, X) => {
    _o(I, $ ? d : r), _o(I, $ ? u : l), X && X()
  }, D = (I, $) => {
    I._isLeaving = !1, _o(I, f), _o(I, g), _o(I, m), $ && $()
  }, S = I => ($, X) => {
    const ce = I ? B : y,
      U = () => R($, I, X);
    Co(ce, [$, U]), Tc(() => {
      _o($, I ? c : a), Kn($, I ? d : r), kc(ce) || Sc($, o, b, U)
    })
  };
  return ft(t, {
    onBeforeEnter(I) {
      Co(w, [I]), Kn(I, a), Kn(I, l)
    },
    onBeforeAppear(I) {
      Co(E, [I]), Kn(I, c), Kn(I, u)
    },
    onEnter: S(!1),
    onAppear: S(!0),
    onLeave(I, $) {
      I._isLeaving = !0;
      const X = () => D(I, $);
      Kn(I, f), Kn(I, m), ty(), Tc(() => {
        I._isLeaving && (_o(I, f), Kn(I, g), kc(_) || Sc(I, o, p, X))
      }), Co(_, [I, X])
    },
    onEnterCancelled(I) {
      R(I, !1), Co(C, [I])
    },
    onAppearCancelled(I) {
      R(I, !0), Co(T, [I])
    },
    onLeaveCancelled(I) {
      D(I), Co(k, [I])
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

function _o(e, t) {
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

function Sc(e, t, n, o) {
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
    o = v => (n[v] || "").split(", "),
    s = o(`${Qn}Delay`),
    a = o(`${Qn}Duration`),
    l = xc(s, a),
    r = o(`${ki}Delay`),
    c = o(`${ki}Duration`),
    u = xc(r, c);
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

function xc(e, t) {
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
  Df = Symbol("_vsh"),
  dt = {
    beforeMount(e, {
      value: t
    }, {
      transition: n
    }) {
      e[Gs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ti(e, t)
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
      !t != !n && (o ? t ? (o.beforeEnter(e), Ti(e, !0), o.enter(e)) : o.leave(e, () => {
        Ti(e, !1)
      }) : Ti(e, t))
    },
    beforeUnmount(e, {
      value: t
    }) {
      Ti(e, t)
    }
  };

function Ti(e, t) {
  e.style.display = t ? e[Gs] : "none", e[Df] = !t
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
  Gs in e && (e[Gs] = a ? o.display : "", e[Df] && (o.display = "none"))
}
const Ec = /\s*!important$/;

function Fs(e, t, n) {
  if (xe(n)) n.forEach(o => Fs(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const o = ay(e, t);
    Ec.test(n) ? e.setProperty(Vn(o), n.replace(Ec, ""), "important") : e[o] = n
  }
}
const Ic = ["Webkit", "Moz", "ms"],
  Qa = {};

function ay(e, t) {
  const n = Qa[t];
  if (n) return n;
  let o = Qt(t);
  if (o !== "filter" && o in e) return Qa[t] = o;
  o = ra(o);
  for (let s = 0; s < Ic.length; s++) {
    const a = Ic[s] + o;
    if (a in e) return Qa[t] = a
  }
  return t
}
const Pc = "http://www.w3.org/1999/xlink";

function Oc(e, t, n, o, s, a = sg(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Pc, t.slice(6, t.length)) : e.setAttributeNS(Pc, t, n) : n == null || a && !wd(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : uo(n) ? String(n) : n)
}

function Rc(e, t, n, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Of(n) : n);
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
    l === "boolean" ? n = wd(n) : n == null && l === "string" ? (n = "", a = !0) : l === "number" && (n = 0, a = !0)
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
const Dc = Symbol("_vei");

function cy(e, t, n, o, s = null) {
  const a = e[Dc] || (e[Dc] = {}),
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
const Bc = /(?:Once|Passive|Capture)$/;

function uy(e) {
  let t;
  if (Bc.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Bc);) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0
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
const $c = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
  gy = (e, t, n, o, s, a) => {
    const l = s === "svg";
    t === "class" ? ny(e, o, l) : t === "style" ? sy(e, n, o) : sa(t) ? Xl(t) || cy(e, t, n, o, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : vy(e, t, o, l)) ? (Rc(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Oc(e, t, o, l, a, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !tt(o)) ? Rc(e, Qt(t), o) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Oc(e, t, o, l))
  };

function vy(e, t, n, o) {
  if (o) return !!(t === "innerHTML" || t === "textContent" || t in e && $c(t) && Ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
  }
  return $c(t) && tt(n) ? !1 : t in e
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
let Mc;

function wy() {
  return Mc || (Mc = pv(by))
}
const Bf = (...e) => {
  const t = wy().createApp(...e),
    {
      mount: n
    } = t;
  return t.mount = o => {
    const s = _y(o);
    if (!s) return;
    const a = t._component;
    !Ee(a) && !a.render && !a.template && (a.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
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
var mo = typeof window < "u";

function wt(e) {
  return mo ? requestAnimationFrame(e) : -1
}

function pa(e) {
  mo && cancelAnimationFrame(e)
}

function so(e) {
  wt(() => wt(e))
}
var ky = e => e === window,
  Lc = (e, t) => ({
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
      return Lc(n, o)
    }
    return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : Lc(0, 0)
  };

function Ty(e = !1) {
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

function Sy(e) {
  const t = [],
    n = o => {
      Array.isArray(o) && o.forEach(s => {
        var a;
        ui(s) && (t.push(s), (a = s.component) != null && a.subTree && (t.push(s.component.subTree), n(s.component.subTree.children)), s.children && n(s.children))
      })
    };
  return n(e), t
}
var Nc = (e, t) => {
  const n = e.indexOf(t);
  return n === -1 ? e.findIndex(o => t.key !== void 0 && t.key !== null && o.type === t.type && o.key === t.key) : n
};

function xy(e, t, n) {
  const o = Sy(e.subTree.children);
  n.sort((a, l) => Nc(o, a.vnode) - Nc(o, l.vnode));
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
  Fc = 24 * Rl;

function Ay(e) {
  const t = Math.floor(e / Fc),
    n = Math.floor(e % Fc / Rl),
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

function Ey(e, t) {
  return Math.floor(e / 1e3) === Math.floor(t / 1e3)
}

function Iy(e) {
  let t, n, o, s;
  const a = F(e.time),
    l = N(() => Ay(a.value)),
    r = () => {
      o = !1, pa(t)
    },
    c = () => Math.max(n - Date.now(), 0),
    u = b => {
      var p, w;
      a.value = b, (p = e.onChange) == null || p.call(e, l.value), b === 0 && (r(), (w = e.onFinish) == null || w.call(e))
    },
    d = () => {
      t = wt(() => {
        o && (u(c()), a.value > 0 && d())
      })
    },
    f = () => {
      t = wt(() => {
        if (o) {
          const b = c();
          (!Ey(b, a.value) || b === 0) && u(b), a.value > 0 && f()
        }
      })
    },
    m = () => {
      mo && (e.millisecond ? d() : f())
    },
    g = () => {
      o || (n = Date.now() + a.value, o = !0, m())
    },
    v = (b = e.time) => {
      r(), a.value = b
    };
  return kn(r), Cn(() => {
    s && (o = !0, s = !1, m())
  }), _n(() => {
    o && (r(), s = !0)
  }), {
    start: g,
    pause: r,
    reset: v,
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
  if (!mo) return;
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
  if (!mo) return;
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
  if (!vs && (vs = F(0), Ya = F(0), mo)) {
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
  $f = mo ? window : void 0;

function Ry(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1
}

function pr(e, t = $f) {
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

function pi(e, t = $f) {
  const n = F();
  return at(() => {
    e.value && (n.value = pr(e.value, t))
  }), n
}
var ys;

function Dy() {
  if (!ys && (ys = F("visible"), mo)) {
    const e = () => {
      ys.value = document.hidden ? "hidden" : "visible"
    };
    e(), window.addEventListener("visibilitychange", e)
  }
  return ys
}
var Mf = Symbol("van-field");

function go(e) {
  const t = Rt(Mf, null);
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

function Po() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}

function Ji(e) {
  Zs(window, e), Zs(document.body, e)
}

function Vc(e, t) {
  if (e === window) return 0;
  const n = t ? Ln(t) : Po();
  return Ue(e).top + n
}
const By = Wm();

function Lf() {
  By && Ji(Po())
}
const br = e => e.stopPropagation();

function Ge(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && br(e)
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
  if (Fe(e)) return hd(e) ? `${e}px` : String(e)
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
  Nf = e => e.replace(zy, (t, n) => n.toUpperCase()),
  Hy = e => e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");

function Xt(e, t = 2) {
  let n = e + "";
  for (; n.length < t;) n = "0" + n;
  return n
}
const ht = (e, t, n) => Math.min(Math.max(e, t), n);

function zc(e, t, n) {
  const o = e.indexOf(t);
  return o === -1 ? e : t === "-" && o !== 0 ? e.slice(0, o) : e.slice(0, o + 1) + e.slice(o).replace(n, "")
}

function Dl(e, t = !0, n = !0) {
  t ? e = zc(e, ".", /\./g) : e = e.split(".")[0], n ? e = zc(e, "-", /-/g) : e = e.replace(/-/, "");
  const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(o, "")
}

function Ff(e, t) {
  return Math.round((e + t) * 1e10) / 1e10
}
const {
  hasOwnProperty: Uy
} = Object.prototype;

function Wy(e, t, n) {
  const o = t[n];
  Fe(o) && (!Uy.call(e, n) || !wn(o) ? e[n] = o : e[n] = Vf(Object(e[n]), o))
}

function Vf(e, t) {
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
const Hc = F("zh-CN"),
  Uc = Je({
    "zh-CN": jy
  }),
  zf = {
    messages() {
      return Uc[Hc.value]
    },
    use(e, t) {
      Hc.value = e, this.add({
        [e]: t
      })
    },
    add(e = {}) {
      Vf(Uc, e)
    }
  };
var Qy = zf;

function Ky(e) {
  const t = Nf(e) + ".";
  return (n, ...o) => {
    const s = Qy.messages(),
      a = Zr(s, t + n) || Zr(s, n);
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
  Hf = `${Wn}--top`,
  Uf = `${Wn}--left`,
  qy = `${Wn}--right`,
  Cr = `${Wn}--bottom`,
  Vi = `${Wn}--surround`,
  wa = `${Wn}--top-bottom`,
  Gy = `${Wn}-unset--top-bottom`,
  _t = "van-haptics-feedback",
  Wf = Symbol("van-form"),
  jf = 500,
  Wc = 5;

function vo(e, {
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

function J(e) {
  return e.install = t => {
    const {
      name: n
    } = e;
    n && (t.component(n, e), t.component(Nf(`-${n}`), e))
  }, e
}

function Xs(e, t) {
  return e.reduce((n, o) => Math.abs(n - t) < Math.abs(o - t) ? n : o)
}
const Qf = Symbol();

function Ca(e) {
  const t = Rt(Qf, null);
  t && re(t, n => {
    n && e()
  })
}
const Kf = (e, t) => {
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
  const n = Kf(e, !0);
  return o => h("div", {
    class: t("placeholder"),
    style: {
      height: n.value ? `${n.value}px` : void 0
    }
  }, [o()])
}
const [Yf, jc] = Y("action-bar"), _r = Symbol(Yf), Zy = {
  placeholder: Boolean,
  safeAreaInsetBottom: j
};
var Xy = K({
  name: Yf,
  props: Zy,
  setup(e, {
    slots: t
  }) {
    const n = F(),
      o = _a(n, jc),
      {
        linkChildren: s
      } = Tt(_r);
    s();
    const a = () => {
      var l;
      return h("div", {
        ref: n,
        class: [jc(), {
          "van-safe-area-bottom": e.safeAreaInsetBottom
        }]
      }, [(l = t.default) == null ? void 0 : l.call(t)])
    };
    return () => e.placeholder ? o(a) : a()
  }
});
const qf = J(Xy);

function $e(e) {
  const t = ln();
  t && _e(t.proxy, e)
}
const yo = {
  to: [String, Object],
  url: String,
  replace: Boolean
};

function Gf({
  to: e,
  url: t,
  replace: n,
  $router: o
}) {
  e && o ? o[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t)
}

function Mo() {
  const e = ln().proxy;
  return () => Gf(e)
}
const [Jy, Qc] = Y("badge"), ep = {
  dot: Boolean,
  max: G,
  tag: ee("div"),
  color: String,
  offset: Array,
  content: G,
  showZero: j,
  position: ee("top-right")
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
        if (!r && n()) return t.content ? t.content() : Fe(c) && hd(u) && +u > +c ? `${c}+` : u
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
          class: Qc([e.position, {
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
          class: Qc("wrapper")
        }, {
          default: () => [t.default(), l()]
        })
      }
      return l()
    }
  }
});
const Lo = J(tp);
let Zf = 2e3;
const np = () => ++Zf,
  op = e => {
    Zf = e
  },
  [Xf, ip] = Y("config-provider"),
  Jf = Symbol(Xf),
  sp = {
    tag: ee("div"),
    theme: ee("light"),
    zIndex: Number,
    themeVars: Object,
    themeVarsDark: Object,
    themeVarsLight: Object,
    themeVarsScope: ee("local"),
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
  name: Xf,
  props: sp,
  setup(e, {
    slots: t
  }) {
    const n = N(() => lp(_e({}, e.themeVars, e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight)));
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
    return Bn(Jf, e), vi(() => {
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
const [cp, Kc] = Y("icon"), up = e => e == null ? void 0 : e.includes("/"), dp = {
  dot: Boolean,
  tag: ee("i"),
  name: String,
  size: G,
  badge: G,
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
    const n = Rt(Jf, null),
      o = N(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || Kc());
    return () => {
      const {
        tag: s,
        dot: a,
        name: l,
        size: r,
        badge: c,
        color: u
      } = e, d = up(l);
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
            class: Kc("image"),
            src: l
          }, null)]
        }
      })
    }
  }
});
const Pe = J(fp);
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
  size: G,
  type: ee("circular"),
  color: String,
  vertical: Boolean,
  textSize: G,
  textColor: String
};
var pp = K({
  name: mp,
  props: yp,
  setup(e, {
    slots: t
  }) {
    const n = N(() => _e({
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
const rn = J(pp),
  [bp, Fo] = Y("button"),
  wp = _e({}, yo, {
    tag: ee("button"),
    text: String,
    icon: String,
    type: ee("default"),
    size: ee("normal"),
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    nativeType: ee("button"),
    loadingSize: G,
    loadingText: String,
    loadingType: String,
    iconPosition: ee("left")
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
        plain: v,
        square: b,
        loading: p,
        disabled: w,
        hairline: y,
        nativeType: C,
        iconPosition: _
      } = e, k = [Fo([d, f, {
        plain: v,
        block: m,
        round: g,
        square: b,
        loading: p,
        disabled: w,
        hairline: y
      }]), {
        [Vi]: y
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
const kt = J(Cp),
  [_p, kp] = Y("action-bar-button"),
  Tp = _e({}, yo, {
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
  });
var Sp = K({
  name: _p,
  props: Tp,
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
      return h(kt, {
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
const $l = J(Sp),
  [xp, Ga] = Y("action-bar-icon"),
  Ap = _e({}, yo, {
    dot: Boolean,
    text: String,
    icon: String,
    color: String,
    badge: G,
    iconClass: et,
    badgeProps: Object,
    iconPrefix: String
  });
var Ep = K({
  name: xp,
  props: Ap,
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
const Ip = J(Ep),
  bi = {
    show: Boolean,
    zIndex: G,
    overlay: j,
    duration: G,
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
      const v = g.touches[0];
      n.value = (v.clientX < 0 ? 0 : v.clientX) - e.value, o.value = v.clientY - t.value, s.value = Math.abs(n.value), a.value = Math.abs(o.value);
      const b = 10;
      (!l.value || s.value < b && a.value < b) && (l.value = Pp(s.value, a.value)), r.value && (s.value > Wc || a.value > Wc) && (r.value = !1)
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
let Si = 0;
const Yc = "van-overflow-hidden";

function eh(e, t) {
  const n = Kt(),
    o = "01",
    s = "10",
    a = d => {
      n.move(d);
      const f = n.deltaY.value > 0 ? s : o,
        m = pr(d.target, e.value),
        {
          scrollHeight: g,
          offsetHeight: v,
          scrollTop: b
        } = m;
      let p = "11";
      b === 0 ? p = v >= g ? "00" : "01" : b + v >= g && (p = "10"), p !== "11" && n.isVertical() && !(parseInt(p, 2) & parseInt(f, 2)) && Ge(d, !0)
    },
    l = () => {
      document.addEventListener("touchstart", n.start), document.addEventListener("touchmove", a, {
        passive: !1
      }), Si || document.body.classList.add(Yc), Si++
    },
    r = () => {
      Si && (document.removeEventListener("touchstart", n.start), document.removeEventListener("touchmove", a), Si--, Si || document.body.classList.remove(Yc))
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
  [Op, Rp] = Y("overlay"),
  Dp = {
    show: Boolean,
    zIndex: G,
    duration: G,
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
      o = Tr(() => e.show || !e.lazyRender),
      s = l => {
        e.lockScroll && Ge(l, !0)
      },
      a = o(() => {
        var l;
        const r = _e(Un(e.zIndex), e.customStyle);
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
const th = J(Bp),
  $p = _e({}, bi, {
    round: Boolean,
    position: ee("center"),
    closeIcon: ee("cross"),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: ee("top-right"),
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean
  }),
  [Mp, qc] = Y("popup");
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
      c = Tr(() => e.show || !e.lazyRender),
      u = N(() => {
        const E = {
          zIndex: l.value
        };
        if (Fe(e.duration)) {
          const B = e.position === "center" ? "animationDuration" : "transitionDuration";
          E[B] = `${e.duration}s`
        }
        return E
      }),
      d = () => {
        s || (s = !0, l.value = e.zIndex !== void 0 ? +e.zIndex : np(), t("open"))
      },
      f = () => {
        s && vo(e.beforeClose, {
          done() {
            s = !1, t("close"), t("update:show", !1)
          }
        })
      },
      m = E => {
        t("clickOverlay", E), e.closeOnClickOverlay && f()
      },
      g = () => {
        if (e.overlay) return h(th, De({
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
      v = E => {
        t("clickCloseIcon", E), f()
      },
      b = () => {
        if (e.closeable) return h(Pe, {
          role: "button",
          tabindex: 0,
          name: e.closeIcon,
          class: [qc("close-icon", e.closeIconPosition), _t],
          classPrefix: e.iconPrefix,
          onClick: v
        }, null)
      };
    let p;
    const w = () => {
        p && clearTimeout(p), p = setTimeout(() => {
          t("opened")
        })
      },
      y = () => t("closed"),
      C = E => t("keydown", E),
      _ = c(() => {
        var E;
        const {
          round: B,
          position: T,
          safeAreaInsetTop: R,
          safeAreaInsetBottom: D
        } = e;
        return rt(h("div", De({
          ref: r,
          style: u.value,
          role: "dialog",
          tabindex: 0,
          class: [qc({
            round: B,
            [T]: T
          }), {
            "van-safe-area-top": R,
            "van-safe-area-bottom": D
          }],
          onKeydown: C
        }, n, Js()), [(E = o.default) == null ? void 0 : E.call(o), b()]), [
          [dt, e.show]
        ])
      }),
      k = () => {
        const {
          position: E,
          transition: B,
          transitionAppear: T
        } = e, R = E === "center" ? "van-fade" : `van-popup-slide-${E}`;
        return h(ya, {
          name: B || R,
          appear: T,
          onAfterEnter: w,
          onAfterLeave: y
        }, {
          default: _
        })
      };
    return re(() => e.show, E => {
      E && !s && (d(), n.tabindex === 0 && Oe(() => {
        var B;
        (B = r.value) == null || B.focus()
      })), !E && s && (s = !1, t("close"))
    }), $e({
      popupRef: r
    }), eh(r, () => e.show && e.lockScroll), st("popstate", () => {
      e.closeOnPopstate && (f(), a = !1)
    }), at(() => {
      e.show && d()
    }), Cn(() => {
      a && (t("update:show", !0), a = !1)
    }), _n(() => {
      e.show && e.teleport && (f(), a = !0)
    }), Bn(Qf, () => e.show), () => e.teleport ? h($o, {
      to: e.teleport
    }, {
      default: () => [g(), k()]
    }) : h(Be, null, [g(), k()])
  }
});
const cn = J(Lp),
  [Np, Ht] = Y("action-sheet"),
  Fp = _e({}, bi, {
    title: String,
    round: j,
    actions: Ze(),
    closeIcon: ee("cross"),
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
          class: [Ht("close"), _t],
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
          loading: v,
          callback: b,
          disabled: p,
          className: w
        } = f, y = () => {
          p || v || (b && b(f), e.closeOnClickAction && o(!1), Oe(() => n("select", f, m)))
        };
        return h("button", {
          type: "button",
          style: {
            color: g
          },
          class: [Ht("item", {
            loading: v,
            disabled: p
          }), w],
          onClick: y
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
const Hp = J(zp),
  [Up, Rn, Gc] = Y("picker"),
  nh = e => e.find(t => !t.disabled) || e[0];

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
const Zc = (e, t, n) => t !== void 0 && !!e.find(o => o[n.value] === t);

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
      const c = nh(l)[t.value];
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
  return _e({
    text: "text",
    value: "value",
    children: "children"
  }, e)
}
const Xc = 200,
  Jc = 300,
  Yp = 15,
  [oh, Za] = Y("picker-column"),
  ih = Symbol(oh);
var qp = K({
  name: oh,
  props: {
    value: G,
    fields: gt(Object),
    options: Ze(),
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: gt(Number),
    swipeDuration: gt(G),
    visibleOptionNum: gt(G)
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
      v = () => e.optionHeight * (+e.visibleOptionNum - 1) / 2,
      b = D => {
        let S = Vs(e.options, D);
        const I = -S * e.optionHeight,
          $ = () => {
            S > g() - 1 && (S = Vs(e.options, D));
            const X = e.options[S][e.fields.value];
            X !== e.value && t("change", X)
          };
        o && I !== d.value ? r = $ : $(), d.value = I
      },
      p = () => e.readonly || !e.options.length,
      w = D => {
        o || p() || (r = null, f.value = Xc, b(D), t("clickOption", e.options[D]))
      },
      y = D => ht(Math.round(-D / e.optionHeight), 0, g() - 1),
      C = N(() => y(d.value)),
      _ = (D, S) => {
        const I = Math.abs(D / S);
        D = d.value + I / .003 * (D < 0 ? -1 : 1);
        const $ = y(D);
        f.value = +e.swipeDuration, b($)
      },
      k = () => {
        o = !1, f.value = 0, r && (r(), r = null)
      },
      E = D => {
        if (!p()) {
          if (m.start(D), o) {
            const S = Qp(u.value);
            d.value = Math.min(0, S - v())
          }
          f.value = 0, s = d.value, a = Date.now(), l = s, r = null
        }
      },
      B = D => {
        if (p()) return;
        m.move(D), m.isVertical() && (o = !0, Ge(D, !0));
        const S = ht(s + m.deltaY.value, -(g() * e.optionHeight), e.optionHeight),
          I = y(S);
        I !== C.value && t("scrollInto", e.options[I]), d.value = S;
        const $ = Date.now();
        $ - a > Jc && (a = $, l = S)
      },
      T = () => {
        if (p()) return;
        const D = d.value - l,
          S = Date.now() - a;
        if (S < Jc && Math.abs(D) > Yp) {
          _(D, S);
          return
        }
        const $ = y(d.value);
        f.value = Xc, b($), setTimeout(() => {
          o = !1
        }, 0)
      },
      R = () => {
        const D = {
          height: `${e.optionHeight}px`
        };
        return e.options.map((S, I) => {
          const $ = S[e.fields.text],
            {
              disabled: X
            } = S,
            ce = S[e.fields.value],
            U = {
              role: "button",
              style: D,
              tabindex: X ? -1 : 0,
              class: [Za("item", {
                disabled: X,
                selected: ce === e.value
              }), S.className],
              onClick: () => w(I)
            },
            te = {
              class: "van-ellipsis",
              [e.allowHtml ? "innerHTML" : "textContent"]: $
            };
          return h("li", U, [n.option ? n.option(S, I) : h("div", te, null)])
        })
      };
    return yt(ih), $e({
      stopMomentum: k
    }), vi(() => {
      const D = o ? Math.floor(-d.value / e.optionHeight) : e.options.findIndex($ => $[e.fields.value] === e.value),
        S = Vs(e.options, D),
        I = -S * e.optionHeight;
      o && S < D && k(), d.value = I
    }), st("touchmove", B, {
      target: c
    }), () => h("div", {
      ref: c,
      class: Za(),
      onTouchstartPassive: E,
      onTouchend: T,
      onTouchcancel: T
    }, [h("ul", {
      ref: u,
      style: {
        transform: `translate3d(0, ${d.value+v()}px, 0)`,
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
}, sh = ["cancel", "confirm", "title", "toolbar"], Zp = Object.keys(ka);
var ah = K({
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
        const u = (c = e.cancelButtonText) != null ? c : Gc("cancel");
        if (!(!n.cancel && !u)) return h("button", {
          type: "button",
          class: [Rn("cancel"), _t],
          onClick: s
        }, [n.cancel ? n.cancel() : u])
      },
      r = () => {
        var c;
        const u = (c = e.confirmButtonText) != null ? c : Gc("confirm");
        if (!(!n.confirm && !u)) return h("button", {
          type: "button",
          class: [Rn("confirm"), _t],
          onClick: a
        }, [n.confirm ? n.confirm() : u])
      };
    return () => h("div", {
      class: Rn("toolbar")
    }, [n.toolbar ? n.toolbar() : [l(), o(), r()]])
  }
});
const Sr = (e, t) => {
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
    r += (t - a) / l, e.scrollLeft = r, ++s < l && (o = wt(u))
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
    a += c, (l && a > t || !l && a < t) && (a = t), Zs(e, a), l && a < t || !l && a > t ? s = wt(d) : o && (s = wt(o))
  }
  return d(), u
}
let eb = 0;

function wi() {
  const e = ln(),
    {
      name: t = "unknown"
    } = (e == null ? void 0 : e.type) || {};
  return `${t}-${++eb}`
}

function ls() {
  const e = F([]),
    t = [];
  return af(() => {
    e.value = []
  }), [e, o => (t[o] || (t[o] = s => {
    e.value[o] = s
  }), t[o])]
}

function lh(e, t) {
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
const [tb, nb] = Y("sticky"), ob = {
  zIndex: G,
  position: ee("top"),
  container: Object,
  offsetTop: he(0),
  offsetBottom: he(0)
};
var ib = K({
  name: tb,
  props: ob,
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
          width: v
        } = a;
        if (m) return {
          width: `${v}px`,
          height: `${g}px`
        }
      }),
      u = N(() => {
        if (!a.fixed || l.value) return;
        const m = _e(Un(e.zIndex), {
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
        } = e, v = Ue(o), b = Ln(window);
        if (a.width = v.width, a.height = v.height, g === "top")
          if (m) {
            const p = Ue(m),
              w = p.bottom - r.value - a.height;
            a.fixed = r.value > v.top && p.bottom > 0, a.transform = w < 0 ? w : 0
          } else a.fixed = r.value > v.top;
        else {
          const {
            clientHeight: p
          } = document.documentElement;
          if (m) {
            const w = Ue(m),
              y = p - w.top - r.value - a.height;
            a.fixed = p - r.value < v.bottom && p > w.top, a.transform = y < 0 ? -y : 0
          } else a.fixed = p - r.value < v.bottom
        }
        d(b)
      };
    return re(() => a.fixed, m => t("change", m)), st("scroll", f, {
      target: s,
      passive: !0
    }), lh(o, f), re([tn, jt], () => {
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
        class: nb({
          fixed: a.fixed && !l.value
        }),
        style: u.value
      }, [(m = n.default) == null ? void 0 : m.call(n)])])
    }
  }
});
const rh = J(ib),
  [ch, bs] = Y("swipe"),
  sb = {
    loop: j,
    width: G,
    height: G,
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
  uh = Symbol(ch);
var ab = K({
  name: ch,
  props: sb,
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
      } = Tt(uh),
      d = N(() => c.length),
      f = N(() => a[e.vertical ? "height" : "width"]),
      m = N(() => e.vertical ? r.deltaY.value : r.deltaX.value),
      g = N(() => a.rect ? (e.vertical ? a.rect.height : a.rect.width) - f.value * d.value : 0),
      v = N(() => f.value ? Math.ceil(Math.abs(g.value) / f.value) : d.value),
      b = N(() => d.value * f.value),
      p = N(() => (a.active + d.value) % d.value),
      w = N(() => {
        const V = e.vertical ? "vertical" : "horizontal";
        return r.direction.value === V
      }),
      y = N(() => {
        const V = {
          transitionDuration: `${a.swiping?0:e.duration}ms`,
          transform: `translate${e.vertical?"Y":"X"}(${+a.offset.toFixed(2)}px)`
        };
        if (f.value) {
          const Z = e.vertical ? "height" : "width",
            ve = e.vertical ? "width" : "height";
          V[Z] = `${b.value}px`, V[ve] = e[ve] ? `${e[ve]}px` : ""
        }
        return V
      }),
      C = V => {
        const {
          active: Z
        } = a;
        return V ? e.loop ? ht(Z + V, -1, d.value) : ht(Z + V, 0, v.value) : Z
      },
      _ = (V, Z = 0) => {
        let ve = V * f.value;
        e.loop || (ve = Math.min(ve, -g.value));
        let we = Z - ve;
        return e.loop || (we = ht(we, g.value, 0)), we
      },
      k = ({
        pace: V = 0,
        offset: Z = 0,
        emitChange: ve
      }) => {
        if (d.value <= 1) return;
        const {
          active: we
        } = a, se = C(V), ye = _(se, Z);
        if (e.loop) {
          if (c[0] && ye !== g.value) {
            const A = ye < g.value;
            c[0].setOffset(A ? b.value : 0)
          }
          if (c[d.value - 1] && ye !== 0) {
            const A = ye > 0;
            c[d.value - 1].setOffset(A ? -b.value : 0)
          }
        }
        a.active = se, a.offset = ye, ve && se !== we && t("change", p.value)
      },
      E = () => {
        a.swiping = !0, a.active <= -1 ? k({
          pace: d.value
        }) : a.active >= d.value && k({
          pace: -d.value
        })
      },
      B = () => {
        E(), r.reset(), so(() => {
          a.swiping = !1, k({
            pace: -1,
            emitChange: !0
          })
        })
      },
      T = () => {
        E(), r.reset(), so(() => {
          a.swiping = !1, k({
            pace: 1,
            emitChange: !0
          })
        })
      };
    let R;
    const D = () => clearTimeout(R),
      S = () => {
        D(), +e.autoplay > 0 && d.value > 1 && (R = setTimeout(() => {
          T(), S()
        }, +e.autoplay))
      },
      I = (V = +e.initialSwipe) => {
        if (!o.value) return;
        const Z = () => {
          var ve, we;
          if (!Do(o)) {
            const se = {
              width: o.value.offsetWidth,
              height: o.value.offsetHeight
            };
            a.rect = se, a.width = +((ve = e.width) != null ? ve : se.width), a.height = +((we = e.height) != null ? we : se.height)
          }
          d.value && (V = Math.min(d.value - 1, V), V === -1 && (V = d.value - 1)), a.active = V, a.swiping = !0, a.offset = _(V), c.forEach(se => {
            se.setOffset(0)
          }), S()
        };
        Do(o) ? Oe().then(Z) : Z()
      },
      $ = () => I(a.active);
    let X;
    const ce = V => {
        !e.touchable || V.touches.length > 1 || (r.start(V), l = !1, X = Date.now(), D(), E())
      },
      U = V => {
        e.touchable && a.swiping && (r.move(V), w.value && (!e.loop && (a.active === 0 && m.value > 0 || a.active === d.value - 1 && m.value < 0) || (Ge(V, e.stopPropagation), k({
          offset: m.value
        }), l || (t("dragStart", {
          index: p.value
        }), l = !0))))
      },
      te = () => {
        if (!e.touchable || !a.swiping) return;
        const V = Date.now() - X,
          Z = m.value / V;
        if ((Math.abs(Z) > .25 || Math.abs(m.value) > f.value / 2) && w.value) {
          const we = e.vertical ? r.offsetY.value : r.offsetX.value;
          let se = 0;
          e.loop ? se = we > 0 ? m.value > 0 ? -1 : 1 : 0 : se = -Math[m.value > 0 ? "ceil" : "floor"](m.value / f.value), k({
            pace: se,
            emitChange: !0
          })
        } else m.value && k({
          pace: 0
        });
        l = !1, a.swiping = !1, t("dragEnd", {
          index: p.value
        }), S()
      },
      ue = (V, Z = {}) => {
        E(), r.reset(), so(() => {
          let ve;
          e.loop && V === d.value ? ve = a.active === 0 ? 0 : V : ve = V % d.value, Z.immediate ? so(() => {
            a.swiping = !1
          }) : a.swiping = !1, k({
            pace: ve - a.active,
            emitChange: !0
          })
        })
      },
      Re = (V, Z) => {
        const ve = Z === p.value,
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
          active: p.value,
          total: d.value
        });
        if (e.showIndicators && d.value > 1) return h("div", {
          class: bs("indicators", {
            vertical: e.vertical
          })
        }, [Array(d.value).fill("").map(Re)])
      };
    return $e({
      prev: B,
      next: T,
      state: a,
      resize: $,
      swipeTo: ue
    }), u({
      size: f,
      props: e,
      count: d,
      activeIndicator: p
    }), re(() => e.initialSwipe, V => I(+V)), re(d, () => I(a.active)), re(() => e.autoplay, S), re([tn, jt, () => e.width, () => e.height], $), re(Dy(), V => {
      V === "visible" ? S() : D()
    }), at(I), Cn(() => I(a.active)), Ca(() => I(a.active)), _n(D), kn(D), st("touchmove", U, {
      target: s
    }), () => {
      var V;
      return h("div", {
        ref: o,
        class: bs()
      }, [h("div", {
        ref: s,
        style: y.value,
        class: bs("track", {
          vertical: e.vertical
        }),
        onTouchstartPassive: ce,
        onTouchend: te,
        onTouchcancel: te
      }, [(V = n.default) == null ? void 0 : V.call(n)]), Ne()])
    }
  }
});
const xr = J(ab),
  [lb, eu] = Y("tabs");
var rb = K({
  name: lb,
  props: {
    count: gt(Number),
    inited: Boolean,
    animated: Boolean,
    duration: gt(G),
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
          class: eu("track"),
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
      class: eu("content", {
        animated: e.animated || e.swipeable
      })
    }, [a()])
  }
});
const [dh, ws] = Y("tabs"), cb = {
  type: ee("line"),
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
  lineWidth: G,
  lineHeight: G,
  beforeChange: Function,
  swipeThreshold: he(5),
  titleActiveColor: String,
  titleInactiveColor: String
}, fh = Symbol(dh);
var ub = K({
  name: dh,
  props: cb,
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
      [v, b] = ls(),
      {
        children: p,
        linkChildren: w
      } = Tt(fh),
      y = Je({
        inited: !1,
        position: "",
        lineStyle: {},
        currentIndex: -1
      }),
      C = N(() => p.length > +e.swipeThreshold || !e.ellipsis || e.shrink),
      _ = N(() => ({
        borderColor: e.color,
        background: e.background
      })),
      k = (se, ye) => {
        var A;
        return (A = se.name) != null ? A : ye
      },
      E = N(() => {
        const se = p[y.currentIndex];
        if (se) return k(se, y.currentIndex)
      }),
      B = N(() => wr(e.offsetTop)),
      T = N(() => e.sticky ? B.value + o : 0),
      R = se => {
        const ye = u.value,
          A = v.value;
        if (!C.value || !ye || !A || !A[y.currentIndex]) return;
        const z = A[y.currentIndex].$el,
          H = z.offsetLeft - (ye.offsetWidth - z.offsetWidth) / 2;
        l && l(), l = Xp(ye, H, se ? 0 : +e.duration)
      },
      D = () => {
        const se = y.inited;
        Oe(() => {
          const ye = v.value;
          if (!ye || !ye[y.currentIndex] || e.type !== "line" || Do(c.value)) return;
          const A = ye[y.currentIndex].$el,
            {
              lineWidth: z,
              lineHeight: H
            } = e,
            ne = A.offsetLeft + A.offsetWidth / 2,
            ke = {
              width: Ie(z),
              backgroundColor: e.color,
              transform: `translateX(${ne}px) translateX(-50%)`
            };
          if (se && (ke.transitionDuration = `${e.duration}s`), Fe(H)) {
            const Le = Ie(H);
            ke.height = Le, ke.borderRadius = Le
          }
          y.lineStyle = ke
        })
      },
      S = se => {
        const ye = se < y.currentIndex ? -1 : 1;
        for (; se >= 0 && se < p.length;) {
          if (!p[se].disabled) return se;
          se += ye
        }
      },
      I = (se, ye) => {
        const A = S(se);
        if (!Fe(A)) return;
        const z = p[A],
          H = k(z, A),
          ne = y.currentIndex !== null;
        y.currentIndex !== A && (y.currentIndex = A, ye || R(), D()), H !== e.active && (t("update:active", H), ne && t("change", H, z.title)), a && !e.scrollspy && Ji(Math.ceil(Vc(c.value) - B.value))
      },
      $ = (se, ye) => {
        const A = p.find((H, ne) => k(H, ne) === se),
          z = A ? p.indexOf(A) : 0;
        I(z, ye)
      },
      X = (se = !1) => {
        if (e.scrollspy) {
          const ye = p[y.currentIndex].$el;
          if (ye && g.value) {
            const A = Vc(ye, g.value) - T.value;
            s = !0, r && r(), r = Jp(g.value, A, se ? 0 : +e.duration, () => {
              s = !1
            })
          }
        }
      },
      ce = (se, ye, A) => {
        const {
          title: z,
          disabled: H
        } = p[ye], ne = k(p[ye], ye);
        H || (vo(e.beforeChange, {
          args: [ne],
          done: () => {
            I(ye), X()
          }
        }), Gf(se)), t("clickTab", {
          name: ne,
          title: z,
          event: A,
          disabled: H
        })
      },
      U = se => {
        a = se.isFixed, t("scroll", se)
      },
      te = se => {
        Oe(() => {
          $(se), X(!0)
        })
      },
      ue = () => {
        for (let se = 0; se < p.length; se++) {
          const {
            top: ye
          } = Ue(p[se].$el);
          if (ye > T.value) return se === 0 ? 0 : se - 1
        }
        return p.length - 1
      },
      Re = () => {
        if (e.scrollspy && !s) {
          const se = ue();
          I(se)
        }
      },
      Ne = () => {
        if (e.type === "line" && p.length) return h("div", {
          class: ws("line"),
          style: y.lineStyle
        }, null)
      },
      V = () => {
        var se, ye, A;
        const {
          type: z,
          border: H,
          sticky: ne
        } = e, ke = [h("div", {
          ref: ne ? void 0 : d,
          class: [ws("wrap"), {
            [wa]: z === "line" && H
          }]
        }, [h("div", {
          ref: u,
          role: "tablist",
          class: ws("nav", [z, {
            shrink: e.shrink,
            complete: C.value
          }]),
          style: _.value,
          "aria-orientation": "horizontal"
        }, [(se = n["nav-left"]) == null ? void 0 : se.call(n), p.map(Le => Le.renderTitle(ce)), Ne(), (ye = n["nav-right"]) == null ? void 0 : ye.call(n)])]), (A = n["nav-bottom"]) == null ? void 0 : A.call(n)];
        return ne ? h("div", {
          ref: d
        }, [ke]) : ke
      },
      Z = () => {
        D(), Oe(() => {
          var se, ye;
          R(!0), (ye = (se = f.value) == null ? void 0 : se.swipeRef.value) == null || ye.resize()
        })
      };
    re(() => [e.color, e.duration, e.lineWidth, e.lineHeight], D), re(tn, Z), re(() => e.active, se => {
      se !== E.value && $(se)
    }), re(() => p.length, () => {
      y.inited && ($(e.active), D(), Oe(() => {
        R(!0)
      }))
    });
    const ve = () => {
        $(e.active, !0), Oe(() => {
          y.inited = !0, d.value && (o = Ue(d.value).height), R(!0)
        })
      },
      we = (se, ye) => t("rendered", se, ye);
    return $e({
      resize: Z,
      scrollTo: te
    }), Cn(D), Ca(D), yi(ve), lh(c, D), st("scroll", Re, {
      target: g,
      passive: !0
    }), w({
      id: m,
      props: e,
      setLine: D,
      scrollable: C,
      onRendered: we,
      currentName: E,
      setTitleRefs: b,
      scrollIntoView: R
    }), () => h("div", {
      ref: c,
      class: ws([e.type])
    }, [e.showHeader ? e.sticky ? h(rh, {
      container: c.value,
      offsetTop: B.value,
      onScroll: U
    }, {
      default: () => [V()]
    }) : V() : null, h(rb, {
      ref: f,
      count: p.length,
      inited: y.inited,
      animated: e.animated,
      duration: e.duration,
      swipeable: e.swipeable,
      lazyRender: e.lazyRender,
      currentIndex: y.currentIndex,
      onChange: I
    }, {
      default: () => {
        var se;
        return [(se = n.default) == null ? void 0 : se.call(n)]
      }
    })])
  }
});
const hh = Symbol(),
  db = () => Rt(hh, null),
  [fb, tu] = Y("tab"),
  hb = K({
    name: fb,
    props: {
      id: String,
      dot: Boolean,
      type: String,
      color: String,
      title: String,
      badge: G,
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
            class: tu("text", {
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
        class: [tu([e.type, {
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
  [mb, gb] = Y("swipe-item");
var vb = K({
  name: mb,
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
      } = yt(uh);
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
          v = f === m && u ? 0 : f + 1;
        return n = a.value === f || a.value === g || a.value === v, n
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
        class: gb(),
        style: l.value
      }, [r.value ? (u = t.default) == null ? void 0 : u.call(t) : null])
    }
  }
});
const Ar = J(vb),
  [yb, Xa] = Y("tab"),
  pb = _e({}, yo, {
    dot: Boolean,
    name: G,
    badge: G,
    title: String,
    disabled: Boolean,
    titleClass: et,
    titleStyle: [String, Object],
    showZeroBadge: j
  });
var bb = K({
  name: yb,
  props: pb,
  setup(e, {
    slots: t
  }) {
    const n = wi(),
      o = F(!1),
      s = ln(),
      {
        parent: a,
        index: l
      } = yt(fh);
    if (!a) return;
    const r = () => {
        var v;
        return (v = e.name) != null ? v : l.value
      },
      c = () => {
        o.value = !0, a.props.lazyRender && Oe(() => {
          a.onRendered(r(), e.title)
        })
      },
      u = N(() => {
        const v = r() === a.currentName.value;
        return v && !o.value && c(), v
      }),
      d = F(""),
      f = F("");
    vi(() => {
      const {
        titleClass: v,
        titleStyle: b
      } = e;
      d.value = v ? ot(v) : "", f.value = b && typeof b != "string" ? og(an(b)) : b
    });
    const m = v => h(hb, De({
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
        onClick: b => v(s.proxy, l.value, b)
      }, ze(a.props, ["type", "color", "shrink"]), ze(e, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
        title: t.title
      }),
      g = F(!u.value);
    return re(u, v => {
      v ? g.value = !1 : so(() => {
        g.value = !0
      })
    }), re(() => e.title, () => {
      a.setLine(), a.scrollIntoView()
    }), Bn(hh, u), $e({
      id: n,
      renderTitle: m
    }), () => {
      var v;
      const b = `${a.id}-${l.value}`,
        {
          animated: p,
          swipeable: w,
          scrollspy: y,
          lazyRender: C
        } = a.props;
      if (!t.default && !p) return;
      const _ = y || u.value;
      if (p || w) return h(Ar, {
        id: n,
        role: "tabpanel",
        class: Xa("panel-wrapper", {
          inactive: g.value
        }),
        tabindex: u.value ? 0 : -1,
        "aria-hidden": !u.value,
        "aria-labelledby": b,
        "data-allow-mismatch": "attribute"
      }, {
        default: () => {
          var B;
          return [h("div", {
            class: Xa("panel")
          }, [(B = t.default) == null ? void 0 : B.call(t)])]
        }
      });
      const E = o.value || y || !C ? (v = t.default) == null ? void 0 : v.call(t) : null;
      return rt(h("div", {
        id: n,
        role: "tabpanel",
        class: Xa("panel"),
        tabindex: _ ? 0 : -1,
        "aria-labelledby": b,
        "data-allow-mismatch": "attribute"
      }, [E]), [
        [dt, _]
      ])
    }
  }
});
const es = J(bb),
  Ta = J(ub),
  [mh, Ja] = Y("picker-group"),
  gh = Symbol(mh),
  wb = _e({
    tabs: Ze(),
    activeTab: he(0),
    nextStepText: String,
    showToolbar: j
  }, ka);
var Cb = K({
  name: mh,
  props: wb,
  emits: ["confirm", "cancel", "update:activeTab"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = Sr(() => e.activeTab, u => t("update:activeTab", u)),
      {
        children: s,
        linkChildren: a
      } = Tt(gh);
    a();
    const l = () => +o.value < e.tabs.length - 1 && e.nextStepText,
      r = () => {
        l() ? o.value = +o.value + 1 : t("confirm", s.map(u => u.confirm()))
      },
      c = () => t("cancel");
    return () => {
      var u, d;
      let f = (d = (u = n.default) == null ? void 0 : u.call(n)) == null ? void 0 : d.filter(g => g.type !== vt).map(g => g.type === Be ? g.children : g);
      f && (f = jm(f));
      const m = l() ? e.nextStepText : e.confirmButtonText;
      return h("div", {
        class: Ja()
      }, [e.showToolbar ? h(ah, {
        title: e.title,
        cancelButtonText: e.cancelButtonText,
        confirmButtonText: m,
        onConfirm: r,
        onCancel: c
      }, ze(n, sh)) : null, h(Ta, {
        active: o.value,
        "onUpdate:active": g => o.value = g,
        class: Ja("tabs"),
        shrink: !0,
        animated: !0,
        lazyRender: !1
      }, {
        default: () => [e.tabs.map((g, v) => h(es, {
          title: g,
          titleClass: Ja("tab-title")
        }, {
          default: () => [f == null ? void 0 : f[v]]
        }))]
      })])
    }
  }
});
const Sa = _e({
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: he(44),
    showToolbar: j,
    swipeDuration: he(1e3),
    visibleOptionNum: he(6)
  }, ka),
  _b = _e({}, Sa, {
    columns: Ze(),
    modelValue: Ze(),
    toolbarPosition: ee("top"),
    columnsFieldNames: Object
  });
var kb = K({
  name: Up,
  props: _b,
  emits: ["confirm", "cancel", "change", "scrollInto", "clickOption", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = F(e.modelValue.slice(0)),
      {
        parent: a
      } = yt(gh),
      {
        children: l,
        linkChildren: r
      } = Tt(ih);
    r();
    const c = N(() => Kp(e.columnsFieldNames)),
      u = N(() => wr(e.optionHeight)),
      d = N(() => Wp(e.columns, c.value)),
      f = N(() => {
        const {
          columns: S
        } = e;
        switch (d.value) {
          case "multiple":
            return S;
          case "cascade":
            return jp(S, c.value, s);
          default:
            return [S]
        }
      }),
      m = N(() => f.value.some(S => S.length)),
      g = N(() => f.value.map((S, I) => Ml(S, s.value[I], c.value))),
      v = N(() => f.value.map((S, I) => S.findIndex($ => $[c.value.value] === s.value[I]))),
      b = (S, I) => {
        if (s.value[S] !== I) {
          const $ = s.value.slice(0);
          $[S] = I, s.value = $
        }
      },
      p = () => ({
        selectedValues: s.value.slice(0),
        selectedOptions: g.value,
        selectedIndexes: v.value
      }),
      w = (S, I) => {
        b(I, S), d.value === "cascade" && s.value.forEach(($, X) => {
          const ce = f.value[X];
          Zc(ce, $, c.value) || b(X, ce.length ? ce[0][c.value.value] : void 0)
        }), Oe(() => {
          t("change", _e({
            columnIndex: I
          }, p()))
        })
      },
      y = (S, I) => {
        const $ = {
          columnIndex: I,
          currentOption: S
        };
        t("clickOption", _e(p(), $)), t("scrollInto", $)
      },
      C = () => {
        l.forEach(I => I.stopMomentum());
        const S = p();
        return Oe(() => {
          t("confirm", S)
        }), S
      },
      _ = () => t("cancel", p()),
      k = () => f.value.map((S, I) => h(qp, {
        value: s.value[I],
        fields: c.value,
        options: S,
        readonly: e.readonly,
        allowHtml: e.allowHtml,
        optionHeight: u.value,
        swipeDuration: e.swipeDuration,
        visibleOptionNum: e.visibleOptionNum,
        onChange: $ => w($, I),
        onClickOption: $ => y($, I),
        onScrollInto: $ => {
          t("scrollInto", {
            currentOption: $,
            columnIndex: I
          })
        }
      }, {
        option: n.option
      })),
      E = S => {
        if (m.value) {
          const I = {
              height: `${u.value}px`
            },
            $ = {
              backgroundSize: `100% ${(S-u.value)/2}px`
            };
          return [h("div", {
            class: Rn("mask"),
            style: $
          }, null), h("div", {
            class: [Gy, Rn("frame")],
            style: I
          }, null)]
        }
      },
      B = () => {
        const S = u.value * +e.visibleOptionNum,
          I = {
            height: `${S}px`
          };
        return h("div", {
          ref: o,
          class: Rn("columns"),
          style: I
        }, [k(), E(S)])
      },
      T = () => {
        if (e.showToolbar && !a) return h(ah, De(ze(e, Zp), {
          onConfirm: C,
          onCancel: _
        }), ze(n, sh))
      };
    re(f, S => {
      S.forEach((I, $) => {
        I.length && !Zc(I, s.value[$], c.value) && b($, nh(I)[c.value.value])
      })
    }, {
      immediate: !0
    });
    let R;
    return re(() => e.modelValue, S => {
      !pn(S, s.value) && !pn(S, R) && (s.value = S.slice(0), R = S.slice(0))
    }, {
      deep: !0
    }), re(s, S => {
      pn(S, e.modelValue) || (R = S.slice(0), t("update:modelValue", R))
    }, {
      immediate: !0
    }), st("touchmove", Ge, {
      target: o
    }), $e({
      confirm: C,
      getSelectedOptions: () => g.value
    }), () => {
      var S, I;
      return h("div", {
        class: Rn()
      }, [e.toolbarPosition === "top" ? T() : null, e.loading ? h(rn, {
        class: Rn("loading")
      }, null) : null, (S = n["columns-top"]) == null ? void 0 : S.call(n), B(), (I = n["columns-bottom"]) == null ? void 0 : I.call(n), e.toolbarPosition === "bottom" ? T() : null])
    }
  }
});
const ii = "000000",
  Tb = ["title", "cancel", "confirm", "toolbar", "columns-top", "columns-bottom"],
  vh = ["title", "loading", "readonly", "optionHeight", "swipeDuration", "visibleOptionNum", "cancelButtonText", "confirmButtonText"],
  Yn = (e = "", t = ii, n = void 0) => ({
    text: e,
    value: t,
    children: n
  });

function Sb({
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
      const v = Yn(o[g], g, m());
      d.set(g.slice(0, 4), v);
      const b = u.get(g.slice(0, 2));
      b && b.children.push(v)
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
const xa = J(kb),
  [xb, Ab] = Y("area"),
  Eb = _e({}, ze(Sa, vh), {
    modelValue: String,
    columnsNum: he(3),
    columnsPlaceholder: Ze(),
    areaList: {
      type: Object,
      default: () => ({})
    }
  });
var Ib = K({
  name: xb,
  props: Eb,
  emits: ["change", "confirm", "cancel", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F([]),
      s = F(),
      a = N(() => Sb(e)),
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
      class: Ab(),
      columns: a.value,
      onChange: l,
      onCancel: r,
      onConfirm: c
    }, ze(e, vh)), ze(n, Tb))
  }
});
const yh = J(Ib),
  [Pb, Vo] = Y("cell"),
  Aa = {
    tag: ee("div"),
    icon: String,
    size: String,
    title: G,
    value: G,
    label: G,
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
  Ob = _e({}, Aa, yo);
var Rb = K({
  name: Pb,
  props: Ob,
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
        required: v
      } = e, b = (c = e.clickable) != null ? c : g, p = {
        center: f,
        required: !!v,
        clickable: b,
        borderless: !m
      };
      return d && (p[d] = !!d), h(u, {
        class: Vo(p),
        role: b ? "button" : void 0,
        tabindex: b ? 0 : void 0,
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
const un = J(Rb),
  [Db, Bb] = Y("form"),
  $b = {
    colon: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    required: [Boolean, String],
    showError: Boolean,
    labelWidth: G,
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
var Mb = K({
  name: Db,
  props: $b,
  emits: ["submit", "failed"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      children: o,
      linkChildren: s
    } = Tt(Wf), a = p => p ? o.filter(w => p.includes(w.name)) : o, l = p => new Promise((w, y) => {
      const C = [];
      a(p).reduce((k, E) => k.then(() => {
        if (!C.length) return E.validate().then(B => {
          B && C.push(B)
        })
      }), Promise.resolve()).then(() => {
        C.length ? y(C) : w()
      })
    }), r = p => new Promise((w, y) => {
      const C = a(p);
      Promise.all(C.map(_ => _.validate())).then(_ => {
        _ = _.filter(Boolean), _.length ? y(_) : w()
      })
    }), c = p => {
      const w = o.find(y => y.name === p);
      return w ? new Promise((y, C) => {
        w.validate().then(_ => {
          _ ? C(_) : y()
        })
      }) : Promise.reject()
    }, u = p => typeof p == "string" ? c(p) : e.validateFirst ? l(p) : r(p), d = p => {
      typeof p == "string" && (p = [p]), a(p).forEach(y => {
        y.resetValidation()
      })
    }, f = () => o.reduce((p, w) => (p[w.name] = w.getValidationStatus(), p), {}), m = (p, w) => {
      o.some(y => y.name === p ? (y.$el.scrollIntoView(w), !0) : !1)
    }, g = () => o.reduce((p, w) => (w.name !== void 0 && (p[w.name] = w.formValue.value), p), {}), v = () => {
      const p = g();
      u().then(() => t("submit", p)).catch(w => {
        t("failed", {
          values: p,
          errors: w
        });
        const {
          scrollToError: y,
          scrollToErrorPosition: C
        } = e;
        y && w[0].name && m(w[0].name, C ? {
          block: C
        } : void 0)
      })
    }, b = p => {
      Ge(p), v()
    };
    return s({
      props: e
    }), $e({
      submit: v,
      validate: u,
      getValues: g,
      scrollToField: m,
      resetValidation: d,
      getValidationStatus: f
    }), () => {
      var p;
      return h("form", {
        class: Bb(),
        onSubmit: b
      }, [(p = n.default) == null ? void 0 : p.call(n)])
    }
  }
});
const Er = J(Mb);

function ph(e) {
  return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e
}

function Lb(e, t) {
  if (ph(e)) {
    if (t.required) return !1;
    if (t.validateEmpty === !1) return !0
  }
  return !(t.pattern && !t.pattern.test(String(e)))
}

function Nb(e, t) {
  return new Promise(n => {
    const o = t.validator(e, t);
    if (Gl(o)) {
      o.then(n);
      return
    }
    n(o)
  })
}

function nu(e, t) {
  const {
    message: n
  } = t;
  return ci(n) ? n(e, t) : n || ""
}

function Fb({
  target: e
}) {
  e.composing = !0
}

function ou({
  target: e
}) {
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
}

function Vb(e, t) {
  const n = Po();
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

function zb(e) {
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

function Sn(e) {
  return [...e].length
}

function el(e, t) {
  return [...e].slice(0, t).join("")
}
const [Hb, Ut] = Y("field"), Ir = {
  id: String,
  name: String,
  leftIcon: String,
  rightIcon: String,
  autofocus: Boolean,
  clearable: Boolean,
  maxlength: G,
  max: Number,
  min: Number,
  formatter: Function,
  clearIcon: ee("clear"),
  modelValue: he(""),
  inputAlign: String,
  placeholder: String,
  autocomplete: String,
  autocapitalize: String,
  autocorrect: String,
  errorMessage: String,
  enterkeyhint: String,
  clearTrigger: ee("focus"),
  formatTrigger: ee("onChange"),
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
}, Ub = _e({}, Aa, Ir, {
  rows: G,
  type: ee("text"),
  rules: Array,
  autosize: [Boolean, Object],
  labelWidth: G,
  labelClass: et,
  labelAlign: String,
  showWordLimit: Boolean,
  errorMessageAlign: String,
  colon: {
    type: Boolean,
    default: null
  }
});
var Wb = K({
  name: Hb,
  props: Ub,
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
      } = yt(Wf),
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
          const z = u() !== "",
            H = e.clearTrigger === "always" || e.clearTrigger === "focus" && s.focused;
          return z && H
        }
        return !1
      }),
      m = N(() => r.value && n.input ? r.value() : e.modelValue),
      g = N(() => {
        var A;
        const z = d("required");
        return z === "auto" ? (A = e.rules) == null ? void 0 : A.some(H => H.required) : z
      }),
      v = A => A.reduce((z, H) => z.then(() => {
        if (s.status === "failed") return;
        let {
          value: ne
        } = m;
        if (H.formatter && (ne = H.formatter(ne, H)), !Lb(ne, H)) {
          s.status = "failed", s.validateMessage = nu(ne, H);
          return
        }
        if (H.validator) return ph(ne) && H.validateEmpty === !1 ? void 0 : Nb(ne, H).then(ke => {
          ke && typeof ke == "string" ? (s.status = "failed", s.validateMessage = ke) : ke === !1 && (s.status = "failed", s.validateMessage = nu(ne, H))
        })
      }), Promise.resolve()),
      b = () => {
        s.status = "unvalidated", s.validateMessage = ""
      },
      p = () => t("endValidate", {
        status: s.status,
        message: s.validateMessage
      }),
      w = (A = e.rules) => new Promise(z => {
        b(), A ? (t("startValidate"), v(A).then(() => {
          s.status === "failed" ? (z({
            name: e.name,
            message: s.validateMessage
          }), p()) : (s.status = "passed", z(), p())
        })) : z()
      }),
      y = A => {
        if (c && e.rules) {
          const {
            validateTrigger: z
          } = c.props, H = Us(z).includes(A), ne = e.rules.filter(ke => ke.trigger ? Us(ke.trigger).includes(A) : H);
          ne.length && w(ne)
        }
      },
      C = A => {
        var z;
        const {
          maxlength: H
        } = e;
        if (Fe(H) && Sn(A) > +H) {
          const ne = u();
          if (ne && Sn(ne) === +H) return ne;
          const ke = (z = a.value) == null ? void 0 : z.selectionEnd;
          if (s.focused && ke) {
            const Le = [...A],
              x = Le.length - +H;
            return Le.splice(ke - x, x), Le.join("")
          }
          return el(A, +H)
        }
        return A
      },
      _ = (A, z = "onChange") => {
        var H, ne;
        const ke = A;
        A = C(A);
        const Le = Sn(ke) - Sn(A);
        if (e.type === "number" || e.type === "digit") {
          const O = e.type === "number";
          A = Dl(A, O, O), z === "onBlur" && A !== "" && (A = ht(+A, (H = e.min) != null ? H : -1 / 0, (ne = e.max) != null ? ne : 1 / 0).toString())
        }
        let x = 0;
        if (e.formatter && z === e.formatTrigger) {
          const {
            formatter: O,
            maxlength: L
          } = e;
          if (A = O(A), Fe(L) && Sn(A) > +L && (A = el(A, +L)), a.value && s.focused) {
            const {
              selectionEnd: q
            } = a.value, Q = el(ke, q);
            x = Sn(O(Q)) - Sn(Q)
          }
        }
        if (a.value && a.value.value !== A)
          if (s.focused) {
            let {
              selectionStart: O,
              selectionEnd: L
            } = a.value;
            if (a.value.value = A, Fe(O) && Fe(L)) {
              const q = Sn(A);
              Le ? (O -= Le, L -= Le) : x && (O += x, L += x), a.value.setSelectionRange(Math.min(O, q), Math.min(L, q))
            }
          } else a.value.value = A;
        A !== e.modelValue && t("update:modelValue", A)
      },
      k = A => {
        A.target.composing || _(A.target.value)
      },
      E = () => {
        var A;
        return (A = a.value) == null ? void 0 : A.blur()
      },
      B = () => {
        var A;
        return (A = a.value) == null ? void 0 : A.focus()
      },
      T = () => {
        const A = a.value;
        e.type === "textarea" && e.autosize && A && Vb(A, e.autosize)
      },
      R = A => {
        s.focused = !0, t("focus", A), Oe(T), d("readonly") && E()
      },
      D = A => {
        s.focused = !1, _(u(), "onBlur"), t("blur", A), !d("readonly") && (y("onBlur"), Oe(T), Lf())
      },
      S = A => t("clickInput", A),
      I = A => t("clickLeftIcon", A),
      $ = A => t("clickRightIcon", A),
      X = A => {
        Ge(A), t("update:modelValue", ""), t("clear", A)
      },
      ce = N(() => {
        if (typeof e.error == "boolean") return e.error;
        if (c && c.props.showError && s.status === "failed") return !0
      }),
      U = N(() => {
        const A = d("labelWidth"),
          z = d("labelAlign");
        if (A && z !== "top") return {
          width: Ie(A)
        }
      }),
      te = A => {
        A.keyCode === 13 && (!(c && c.props.submitOnEnter) && e.type !== "textarea" && Ge(A), e.type === "search" && E()), t("keypress", A)
      },
      ue = () => e.id || `${o}-input`,
      Re = () => s.status,
      Ne = () => {
        const A = Ut("control", [d("inputAlign"), {
          error: ce.value,
          custom: !!n.input,
          "min-height": e.type === "textarea" && !e.autosize
        }]);
        if (n.input) return h("div", {
          class: A,
          onClick: S
        }, [n.input()]);
        const z = {
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
          onClick: S,
          onChange: ou,
          onKeypress: te,
          onCompositionend: ou,
          onCompositionstart: Fb
        };
        return e.type === "textarea" ? h("textarea", z, null) : h("input", De(zb(e.type), z), null)
      },
      V = () => {
        const A = n["left-icon"];
        if (e.leftIcon || A) return h("div", {
          class: Ut("left-icon"),
          onClick: I
        }, [A ? A() : h(Pe, {
          name: e.leftIcon,
          classPrefix: e.iconPrefix
        }, null)])
      },
      Z = () => {
        const A = n["right-icon"];
        if (e.rightIcon || A) return h("div", {
          class: Ut("right-icon"),
          onClick: $
        }, [A ? A() : h(Pe, {
          name: e.rightIcon,
          classPrefix: e.iconPrefix
        }, null)])
      },
      ve = () => {
        if (e.showWordLimit && e.maxlength) {
          const A = Sn(u());
          return h("div", {
            class: Ut("word-limit")
          }, [h("span", {
            class: Ut("word-num")
          }, [A]), be("/"), e.maxlength])
        }
      },
      we = () => {
        if (c && c.props.showErrorMessage === !1) return;
        const A = e.errorMessage || s.validateMessage;
        if (A) {
          const z = n["error-message"],
            H = d("errorMessageAlign");
          return h("div", {
            class: Ut("error-message", H)
          }, [z ? z({
            message: A
          }) : A])
        }
      },
      se = () => {
        const A = d("labelWidth"),
          z = d("labelAlign"),
          H = d("colon") ? ":" : "";
        if (n.label) return [n.label(), H];
        if (e.label) return h("label", {
          id: `${o}-label`,
          for: n.input ? void 0 : ue(),
          "data-allow-mismatch": "attribute",
          onClick: ne => {
            Ge(ne), B()
          },
          style: z === "top" && A ? {
            width: Ie(A)
          } : void 0
        }, [e.label + H])
      },
      ye = () => [h("div", {
        class: Ut("body")
      }, [Ne(), f.value && h(Pe, {
        ref: l,
        name: e.clearIcon,
        class: Ut("clear")
      }, null), Z(), n.button && h("div", {
        class: Ut("button")
      }, [n.button()])]), ve(), we()];
    return $e({
      blur: E,
      focus: B,
      validate: w,
      formValue: m,
      resetValidation: b,
      getValidationStatus: Re
    }), Bn(Mf, {
      customValue: r,
      resetValidation: b,
      validateWithTrigger: y
    }), re(() => e.modelValue, () => {
      _(u()), b(), y("onChange"), Oe(T)
    }), at(() => {
      _(u(), e.formatTrigger), Oe(T)
    }), st("touchstart", X, {
      target: N(() => {
        var A;
        return (A = l.value) == null ? void 0 : A.$el
      })
    }), () => {
      const A = d("disabled"),
        z = d("labelAlign"),
        H = V(),
        ne = () => {
          const ke = se();
          return z === "top" ? [H, ke].filter(Boolean) : ke || []
        };
      return h(un, {
        size: e.size,
        class: Ut({
          error: ce.value,
          disabled: A,
          [`label-${z}`]: z
        }),
        center: e.center,
        border: e.border,
        isLink: e.isLink,
        clickable: e.clickable,
        titleStyle: U.value,
        valueClass: Ut("value"),
        titleClass: [Ut("label", [z, {
          required: g.value
        }]), e.labelClass],
        arrowDirection: e.arrowDirection
      }, {
        icon: H && z !== "top" ? () => H : null,
        title: ne,
        value: ye,
        extra: n.extra
      })
    }
  }
});
const $n = J(Wb);
let xi = 0;

function jb(e) {
  e ? (xi || document.body.classList.add("van-toast--unclickable"), xi++) : xi && (xi--, xi || document.body.classList.remove("van-toast--unclickable"))
}
const [Qb, zo] = Y("toast"), Kb = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay", "zIndex"], Yb = {
  icon: String,
  show: Boolean,
  type: ee("text"),
  overlay: Boolean,
  message: G,
  iconSize: G,
  duration: lt(2e3),
  position: ee("middle"),
  teleport: [String, Object],
  wordBreak: String,
  className: et,
  iconPrefix: String,
  transition: ee("van-fade"),
  loadingType: String,
  forbidClick: Boolean,
  overlayClass: et,
  overlayStyle: Object,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean,
  zIndex: G
};
var bh = K({
  name: Qb,
  props: Yb,
  emits: ["update:show"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o, s = !1;
    const a = () => {
        const f = e.show && e.forbidClick;
        s !== f && (s = f, jb(s))
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
          iconPrefix: v,
          loadingType: b
        } = e;
        if (f || m === "success" || m === "fail") return h(Pe, {
          name: f || m,
          size: g,
          class: zo("icon"),
          classPrefix: v
        }, null);
        if (m === "loading") return h(rn, {
          class: zo("loading"),
          size: g,
          type: b
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
    }), at(a), gi(a), () => h(cn, De({
      class: [zo([e.position, e.wordBreak === "normal" ? "break-normal" : e.wordBreak, {
        [e.type]: !e.icon
      }]), e.className],
      lockScroll: !1,
      onClick: r,
      onClosed: c,
      "onUpdate:show": l
    }, ze(e, Kb)), {
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
      _e(e, s, {
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
  const t = Bf(e),
    n = document.createElement("div");
  return document.body.appendChild(n), {
    instance: t.mount(n),
    unmount() {
      t.unmount(), document.body.removeChild(n)
    }
  }
}
const qb = {
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
  Gb = !1,
  iu = _e({}, qb);
const Zb = new Map;

function Xb(e) {
  return wn(e) ? e : {
    message: e
  }
}

function Jb() {
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
        c = () => h(bh, De(s, {
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

function e0() {
  if (!Cs.length || Gb) {
    const e = Jb();
    Cs.push(e)
  }
  return Cs[Cs.length - 1]
}

function Ll(e = {}) {
  if (!Vt) return {};
  const t = e0(),
    n = Xb(e);
  return t.open(_e({}, iu, Zb.get(n.type || iu.type), n)), t
}
const t0 = J(bh),
  [n0, tl] = Y("switch"),
  o0 = {
    size: G,
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
var i0 = K({
  name: n0,
  props: o0,
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
    return go(() => e.modelValue), () => {
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
const Rr = J(i0),
  [s0, su] = Y("address-edit-detail"),
  au = Y("address-edit")[2];
var a0 = K({
  name: s0,
  props: {
    show: Boolean,
    rows: G,
    value: String,
    rules: Array,
    focused: Boolean,
    maxlength: G,
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
          class: su("search-item"),
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
        class: su(),
        rows: e.rows,
        type: "textarea",
        rules: e.rules,
        label: au("addressDetail"),
        border: !o(),
        maxlength: e.maxlength,
        modelValue: e.value,
        placeholder: au("addressDetail"),
        onBlur: l,
        onFocus: r,
        "onUpdate:modelValue": c
      }, null), a()])
    }
  }
});
const [l0, Ho, xt] = Y("address-edit"), wh = {
  name: "",
  tel: "",
  city: "",
  county: "",
  country: "",
  province: "",
  areaCode: "",
  isDefault: !1,
  addressDetail: ""
}, r0 = {
  areaList: Object,
  isSaving: Boolean,
  isDeleting: Boolean,
  validator: Function,
  showArea: j,
  showDetail: j,
  showDelete: Boolean,
  disableArea: Boolean,
  searchResult: Array,
  telMaxlength: G,
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
    default: () => _e({}, wh)
  },
  telValidator: {
    type: Function,
    default: fd
  }
};
var c0 = K({
  name: l0,
  props: r0,
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
          province: E,
          city: B,
          county: T,
          areaCode: R
        } = s;
        if (R) {
          const D = [E, B, T];
          return E && E === B && D.splice(1, 1), D.filter(Boolean).join("/")
        }
        return ""
      }),
      u = N(() => {
        var E;
        return ((E = e.searchResult) == null ? void 0 : E.length) && l.value
      }),
      d = E => {
        l.value = E === "addressDetail", t("focus", E)
      },
      f = (E, B) => {
        t("change", {
          key: E,
          value: B
        })
      },
      m = N(() => {
        const {
          validator: E,
          telValidator: B
        } = e, T = (R, D) => ({
          validator: S => {
            if (E) {
              const I = E(R, S);
              if (I) return I
            }
            return S ? !0 : D
          }
        });
        return {
          name: [T("name", xt("nameEmpty"))],
          tel: [T("tel", xt("telInvalid")), {
            validator: B,
            message: xt("telInvalid")
          }],
          areaCode: [T("areaCode", xt("areaEmpty"))],
          addressDetail: [T("addressDetail", xt("addressEmpty"))]
        }
      }),
      g = () => t("save", s),
      v = E => {
        s.addressDetail = E, t("changeDetail", E)
      },
      b = E => {
        s.province = E[0].text, s.city = E[1].text, s.county = E[2].text
      },
      p = ({
        selectedValues: E,
        selectedOptions: B
      }) => {
        E.some(T => T === ii) ? Ll(xt("areaEmpty")) : (a.value = !1, b(B), t("changeArea", B))
      },
      w = () => t("delete", s),
      y = E => {
        s.areaCode = E || ""
      },
      C = () => {
        setTimeout(() => {
          l.value = !1
        })
      },
      _ = E => {
        s.addressDetail = E
      },
      k = () => {
        if (e.showSetDefault) {
          const E = {
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
          }, E), [
            [dt, !u.value]
          ])
        }
      };
    return $e({
      setAreaCode: y,
      setAddressDetail: _
    }), re(() => e.addressInfo, E => {
      _e(s, wh, E), Oe(() => {
        var B;
        const T = (B = o.value) == null ? void 0 : B.getSelectedOptions();
        T && T.every(R => R && R.value !== ii) && b(T)
      })
    }, {
      deep: !0,
      immediate: !0
    }), () => {
      const {
        disableArea: E
      } = e;
      return h(Er, {
        class: Ho(),
        onSubmit: g
      }, {
        default: () => {
          var B;
          return [h("div", {
            class: Ho("fields")
          }, [h($n, {
            modelValue: s.name,
            "onUpdate:modelValue": [T => s.name = T, T => f("name", T)],
            clearable: !0,
            label: xt("name"),
            rules: m.value.name,
            placeholder: xt("name"),
            onFocus: () => d("name")
          }, null), h($n, {
            modelValue: s.tel,
            "onUpdate:modelValue": [T => s.tel = T, T => f("tel", T)],
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
            "is-link": !E,
            modelValue: c.value,
            rules: e.showArea ? m.value.areaCode : void 0,
            placeholder: e.areaPlaceholder || xt("area"),
            onFocus: () => d("areaCode"),
            onClick: () => {
              t("clickArea"), a.value = !E
            }
          }, null), [
            [dt, e.showArea]
          ]), h(a0, {
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
            onInput: v,
            onSelectSearch: T => t("selectSearch", T)
          }, null), (B = n.default) == null ? void 0 : B.call(n)]), k(), rt(h("div", {
            class: Ho("buttons")
          }, [h(kt, {
            block: !0,
            round: !0,
            type: "primary",
            text: e.saveButtonText || xt("save"),
            class: Ho("button"),
            loading: e.isSaving,
            nativeType: "submit"
          }, null), e.showDelete && h(kt, {
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
            "onUpdate:show": T => a.value = T,
            round: !0,
            teleport: "body",
            position: "bottom",
            lazyRender: !1
          }, {
            default: () => [h(yh, {
              modelValue: s.areaCode,
              "onUpdate:modelValue": T => s.areaCode = T,
              ref: o,
              loading: !r.value,
              areaList: e.areaList,
              columnsPlaceholder: e.areaColumnsPlaceholder,
              onConfirm: p,
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
const u0 = J(c0),
  [Ch, d0] = Y("radio-group"),
  f0 = {
    shape: String,
    disabled: Boolean,
    iconSize: G,
    direction: String,
    modelValue: et,
    checkedColor: String
  },
  _h = Symbol(Ch);
var h0 = K({
  name: Ch,
  props: f0,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      linkChildren: o
    } = Tt(_h), s = a => t("update:modelValue", a);
    return re(() => e.modelValue, a => t("change", a)), o({
      props: e,
      updateValue: s
    }), go(() => e.modelValue), () => {
      var a;
      return h("div", {
        class: d0([e.direction]),
        role: "radiogroup"
      }, [(a = n.default) == null ? void 0 : a.call(n)])
    }
  }
});
const Dr = J(h0),
  [kh, m0] = Y("checkbox-group"),
  g0 = {
    max: G,
    shape: ee("round"),
    disabled: Boolean,
    iconSize: G,
    direction: String,
    modelValue: Ze(),
    checkedColor: String
  },
  Th = Symbol(kh);
var v0 = K({
  name: kh,
  props: g0,
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
    }), go(() => e.modelValue), s({
      props: e,
      updateValue: a
    }), () => {
      var r;
      return h("div", {
        class: m0([e.direction])
      }, [(r = n.default) == null ? void 0 : r.call(n)])
    }
  }
});
const Sh = J(v0),
  [y0, lu] = Y("tag"),
  p0 = {
    size: String,
    mark: Boolean,
    show: j,
    type: ee("default"),
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean
  };
var b0 = K({
  name: y0,
  props: p0,
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
        const v = m && h(Pe, {
          name: "cross",
          class: [lu("close"), _t],
          onClick: o
        }, null);
        return h("span", {
          style: s(),
          class: lu([g, r])
        }, [(l = t.default) == null ? void 0 : l.call(t), v])
      };
    return () => h(ya, {
      name: e.closeable ? "van-fade" : void 0
    }, {
      default: () => [e.show ? a() : null]
    })
  }
});
const Ea = J(b0),
  Br = {
    name: et,
    disabled: Boolean,
    iconSize: G,
    modelValue: et,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean
  };
var xh = K({
  props: _e({}, Br, {
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
              v = s("max"),
              b = v && g >= +v;
            return m || b && !e.checked
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
        } = m, v = o.value, b = v === g || (v == null ? void 0 : v.contains(g));
        !a.value && (b || !e.labelDisabled) && t("toggle"), t("click", m)
      },
      d = () => {
        var m, g;
        const {
          bem: v,
          checked: b,
          indeterminate: p
        } = e, w = e.iconSize || s("iconSize");
        return h("div", {
          ref: o,
          class: v("icon", [c.value, {
            disabled: a.value,
            checked: b,
            indeterminate: p
          }]),
          style: c.value !== "dot" ? {
            fontSize: Ie(w)
          } : {
            width: Ie(w),
            height: Ie(w),
            borderColor: (m = r.value) == null ? void 0 : m.borderColor
          }
        }, [n.icon ? n.icon({
          checked: b,
          disabled: a.value
        }) : c.value !== "dot" ? h(Pe, {
          name: p ? "minus" : "success",
          style: r.value
        }, null) : h("div", {
          class: v("icon--dot__icon"),
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
const w0 = _e({}, Br, {
    shape: String
  }),
  [C0, _0] = Y("radio");
var k0 = K({
  name: C0,
  props: w0,
  emits: ["update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      parent: o
    } = yt(_h), s = () => (o ? o.props.modelValue : e.modelValue) === e.name, a = () => {
      o ? o.updateValue(e.name) : t("update:modelValue", e.name)
    };
    return () => h(xh, De({
      bem: _0,
      role: "radio",
      parent: o,
      checked: s(),
      onToggle: a
    }, e), ze(n, ["default", "icon"]))
  }
});
const $r = J(k0),
  [T0, S0] = Y("checkbox"),
  x0 = _e({}, Br, {
    shape: String,
    bindGroup: j,
    indeterminate: {
      type: Boolean,
      default: null
    }
  });
var A0 = K({
  name: T0,
  props: x0,
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
    }), go(() => e.modelValue), () => h(xh, De({
      bem: S0,
      role: "checkbox",
      parent: o,
      checked: a.value,
      onToggle: l
    }, e), ze(n, ["default", "icon"]))
  }
});
const Mr = J(A0),
  [E0, Uo] = Y("address-item");
var I0 = K({
  name: E0,
  props: {
    address: gt(Object),
    disabled: Boolean,
    switchable: Boolean,
    singleChoice: Boolean,
    defaultTagText: String,
    rightIcon: ee("edit")
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
      }), (r = t.bottom) == null ? void 0 : r.call(t, _e({}, e.address, {
        disabled: c
      }))])
    }
  }
});
const [P0, _s, O0] = Y("address-list"), R0 = {
  list: Ze(),
  modelValue: [...G, Array],
  switchable: j,
  disabledText: String,
  disabledList: Ze(),
  showAddButton: j,
  addButtonText: String,
  defaultTagText: String,
  rightIcon: ee("edit")
};
var D0 = K({
  name: P0,
  props: R0,
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
                g.includes(r.id) ? n("update:modelValue", g.filter(v => v !== r.id)) : n("update:modelValue", [...g, r.id])
              }
          };
        return h(I0, {
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
      }, [h(kt, {
        round: !0,
        block: !0,
        type: "primary",
        text: e.addButtonText || O0("add"),
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
      }, [(r = t.top) == null ? void 0 : r.call(t), !o.value && Array.isArray(e.modelValue) ? h(Sh, {
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
const B0 = J(D0);

function $0(e, t) {
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
const [M0, nl] = Y("back-top"), L0 = {
  right: G,
  bottom: G,
  zIndex: G,
  target: [String, Object],
  offset: he(200),
  immediate: Boolean,
  teleport: {
    type: [String, Object],
    default: "body"
  }
};
var N0 = K({
  name: M0,
  inheritAttrs: !1,
  props: L0,
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
      c = N(() => _e(Un(e.zIndex), {
        right: Ie(e.right),
        bottom: Ie(e.bottom)
      })),
      u = g => {
        var v;
        t("click", g), (v = r.value) == null || v.scrollTo({
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
          const v = document.querySelector(g);
          if (v) return v
        } else return g
      },
      m = () => {
        Vt && Oe(() => {
          r.value = e.target ? f() : pr(l.value), d()
        })
      };
    return st("scroll", $0(d, 100), {
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
const F0 = J(N0);
var V0 = (e, t, n) => new Promise((o, s) => {
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
const z0 = {
    top: he(10),
    rows: he(4),
    duration: he(4e3),
    autoPlay: j,
    delay: lt(300),
    modelValue: Ze()
  },
  [H0, ru] = Y("barrage");
var U0 = K({
  name: H0,
  props: z0,
  emits: ["update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = ru("item"),
      a = F(0),
      l = [],
      r = (b, p = e.delay) => {
        const w = document.createElement("span");
        return w.className = s, w.innerText = String(b), w.style.animationDuration = `${e.duration}ms`, w.style.animationDelay = `${p}ms`, w.style.animationName = "van-barrage", w.style.animationTimingFunction = "linear", w
      },
      c = F(!0),
      u = F(e.autoPlay),
      d = ({
        id: b,
        text: p
      }, w) => {
        var y;
        const C = r(p, c.value ? w * e.delay : void 0);
        !e.autoPlay && u.value === !1 && (C.style.animationPlayState = "paused"), (y = o.value) == null || y.append(C), a.value++;
        const _ = (a.value - 1) % +e.rows * C.offsetHeight + +e.top;
        C.style.top = `${_}px`, C.dataset.id = String(b), l.push(C), C.addEventListener("animationend", () => {
          t("update:modelValue", [...e.modelValue].filter(k => String(k.id) !== C.dataset.id))
        })
      },
      f = (b, p) => {
        const w = new Map(p.map(y => [y.id, y]));
        b.forEach((y, C) => {
          w.has(y.id) ? w.delete(y.id) : d(y, C)
        }), w.forEach(y => {
          const C = l.findIndex(_ => _.dataset.id === String(y.id));
          C > -1 && (l[C].remove(), l.splice(C, 1))
        }), c.value = !1
      };
    re(() => e.modelValue.slice(), (b, p) => f(b ?? [], p ?? []), {
      deep: !0
    });
    const m = F({});
    return at(() => V0(this, null, function*() {
      var b;
      m.value["--move-distance"] = `-${(b=o.value)==null?void 0:b.offsetWidth}px`, yield Oe(), f(e.modelValue, [])
    })), $e({
      play: () => {
        u.value = !0, l.forEach(b => {
          b.style.animationPlayState = "running"
        })
      },
      pause: () => {
        u.value = !1, l.forEach(b => {
          b.style.animationPlayState = "paused"
        })
      }
    }), () => {
      var b;
      return h("div", {
        class: ru(),
        ref: o,
        style: m.value
      }, [(b = n.default) == null ? void 0 : b.call(n)])
    }
  }
});
const W0 = J(U0),
  [j0, nt, Mn] = Y("calendar"),
  Q0 = e => Mn("monthTitle", e.getFullYear(), e.getMonth() + 1);

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
  cu = e => Array.isArray(e) ? e.map(di) : di(e);

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
  uu = e => Nr(e, -1),
  du = e => Nr(e, 1),
  fu = e => Ah(e, -1),
  hu = e => Ah(e, 1),
  ks = () => {
    const e = new Date;
    return e.setHours(0, 0, 0, 0), e
  };

function K0(e) {
  const t = e[0].getTime();
  return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1
}
const Eh = _e({}, Sa, {
    modelValue: Ze(),
    filter: Function,
    formatter: {
      type: Function,
      default: (e, t) => t
    }
  }),
  Ih = Object.keys(Sa);

function Y0(e, t) {
  if (e < 0) return [];
  const n = Array(e);
  let o = -1;
  for (; ++o < e;) n[o] = t(o);
  return n
}
const Ph = (e, t) => 32 - new Date(e, t - 1, 32).getDate(),
  si = (e, t, n, o, s, a) => {
    const l = Y0(t - e + 1, r => {
      const c = Xt(e + r);
      return o(n, {
        text: c,
        value: c
      })
    });
    return s ? s(n, l, a) : l
  },
  Oh = (e, t) => e.map((n, o) => {
    const s = t[o];
    if (s.length) {
      const a = +s[0].value,
        l = +s[s.length - 1].value;
      return Xt(ht(+n, a, l))
    }
    return n
  }),
  [q0] = Y("calendar-day");
var G0 = K({
  name: q0,
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
        } = e, v = {
          height: g
        };
        if (u.type === "placeholder") return v.width = "100%", v;
        if (d === 0 && (v.marginLeft = `${100*m/7}%`), f) switch (u.type) {
          case "end":
          case "start":
          case "start-end":
          case "multiple-middle":
          case "multiple-selected":
            v.background = f;
            break;
          case "middle":
            v.color = f;
            break
        }
        return m + (((c = u.date) == null ? void 0 : c.getDate()) || 1) > 28 && (v.marginBottom = 0), v
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
const [Z0] = Y("calendar-month"), X0 = {
  date: gt(Date),
  type: String,
  color: String,
  minDate: Date,
  maxDate: Date,
  showMark: Boolean,
  rowHeight: G,
  formatter: Function,
  lazyRender: Boolean,
  currentDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: Boolean,
  showMonthTitle: Boolean,
  firstDayOfWeek: Number
};
var J0 = K({
  name: Z0,
  props: X0,
  emits: ["click", "clickDisabledDate"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const [o, s] = Ty(), a = F(), l = F(), r = Kf(l), c = N(() => Q0(e.date)), u = N(() => Ie(e.rowHeight)), d = N(() => {
      const D = e.date.getDate(),
        I = (e.date.getDay() - D % 7 + 8) % 7;
      return e.firstDayOfWeek ? (I + 7 - e.firstDayOfWeek) % 7 : I
    }), f = N(() => Ph(e.date.getFullYear(), e.date.getMonth() + 1)), m = N(() => o.value || !e.lazyRender), g = () => c.value, v = D => {
      const S = I => e.currentDate.some($ => Bt($, I) === 0);
      if (S(D)) {
        const I = Nl(D),
          $ = Fl(D),
          X = S(I),
          ce = S($);
        return X && ce ? "multiple-middle" : X ? "end" : ce ? "start" : "multiple-selected"
      }
      return ""
    }, b = D => {
      const [S, I] = e.currentDate;
      if (!S) return "";
      const $ = Bt(D, S);
      if (!I) return $ === 0 ? "start" : "";
      const X = Bt(D, I);
      return e.allowSameDay && $ === 0 && X === 0 ? "start-end" : $ === 0 ? "start" : X === 0 ? "end" : $ > 0 && X < 0 ? "middle" : ""
    }, p = D => {
      const {
        type: S,
        minDate: I,
        maxDate: $,
        currentDate: X
      } = e;
      if (I && Bt(D, I) < 0 || $ && Bt(D, $) > 0) return "disabled";
      if (X === null) return "";
      if (Array.isArray(X)) {
        if (S === "multiple") return v(D);
        if (S === "range") return b(D)
      } else if (S === "single") return Bt(D, X) === 0 ? "selected" : "";
      return ""
    }, w = D => {
      if (e.type === "range") {
        if (D === "start" || D === "end") return Mn(D);
        if (D === "start-end") return `${Mn("start")}/${Mn("end")}`
      }
    }, y = () => {
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
        S = e.date.getFullYear(),
        I = e.date.getMonth();
      for (let $ = 1; $ <= f.value; $++) {
        const X = new Date(S, I, $),
          ce = p(X);
        let U = {
          date: X,
          type: ce,
          text: $,
          bottomInfo: w(ce)
        };
        e.formatter && (U = e.formatter(U)), D.push(U)
      }
      return D
    }), E = N(() => k.value.filter(D => D.type === "disabled")), B = (D, S) => {
      if (a.value) {
        const I = Ue(a.value),
          $ = _.value.length,
          ce = (Math.ceil((S.getDate() + d.value) / 7) - 1) * I.height / $;
        Zs(D, I.top + ce + D.scrollTop - Ue(D).top)
      }
    }, T = (D, S) => h(G0, {
      item: D,
      index: S,
      color: e.color,
      offset: d.value,
      rowHeight: u.value,
      onClick: I => t("click", I),
      onClickDisabledDate: I => t("clickDisabledDate", I)
    }, ze(n, ["top-info", "bottom-info"])), R = () => h("div", {
      ref: a,
      role: "grid",
      class: nt("days")
    }, [C(), (m.value ? k : _).value.map(T)]);
    return $e({
      getTitle: g,
      getHeight: () => r.value,
      setVisible: s,
      scrollToDate: B,
      disabledDays: E
    }), () => h("div", {
      class: nt("month"),
      ref: l
    }, [y(), R()])
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
    switchMode: ee("none")
  },
  emits: ["clickSubtitle", "panelChange"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const o = N(() => e.date && e.minDate && Ao(uu(e.date), e.minDate) < 0),
      s = N(() => e.date && e.minDate && Ao(fu(e.date), e.minDate) < 0),
      a = N(() => e.date && e.maxDate && Ao(du(e.date), e.maxDate) > 0),
      l = N(() => e.date && e.maxDate && Ao(hu(e.date), e.maxDate) > 0),
      r = () => {
        if (e.showTitle) {
          const g = e.title || Mn("title"),
            v = t.title ? t.title() : g;
          return h("div", {
            class: nt("header-title")
          }, [v])
        }
      },
      c = g => n("clickSubtitle", g),
      u = g => n("panelChange", g),
      d = g => {
        const v = e.switchMode === "year-month",
          b = t[g ? "next-month" : "prev-month"],
          p = t[g ? "next-year" : "prev-year"],
          w = g ? a.value : o.value,
          y = g ? l.value : s.value,
          C = g ? "arrow" : "arrow-left",
          _ = g ? "arrow-double-right" : "arrow-double-left",
          k = () => u((g ? du : uu)(e.date)),
          E = () => u((g ? hu : fu)(e.date)),
          B = h("view", {
            class: nt("header-action", {
              disabled: w
            }),
            onClick: w ? void 0 : k
          }, [b ? b({
            disabled: w
          }) : h(Pe, {
            class: {
              [_t]: !w
            },
            name: C
          }, null)]),
          T = v && h("view", {
            class: nt("header-action", {
              disabled: y
            }),
            onClick: y ? void 0 : E
          }, [p ? p({
            disabled: y
          }) : h(Pe, {
            class: {
              [_t]: !y
            },
            name: _
          }, null)]);
        return g ? [B, T] : [T, B]
      },
      f = () => {
        if (e.showSubtitle) {
          const g = t.subtitle ? t.subtitle({
              date: e.date,
              text: e.subtitle
            }) : e.subtitle,
            v = e.switchMode !== "none";
          return h("div", {
            class: nt("header-subtitle", {
              "with-swicth": v
            }),
            onClick: c
          }, [v ? [d(), h("div", {
            class: nt("header-subtitle-text")
          }, [g]), d(!0)] : g])
        }
      },
      m = () => {
        const {
          firstDayOfWeek: g
        } = e, v = Mn("weekdays"), b = [...v.slice(g, 7), ...v.slice(0, g)];
        return h("div", {
          class: nt("weekdays")
        }, [b.map(p => h("span", {
          class: nt("weekday")
        }, [p]))])
      };
    return () => h("div", {
      class: nt("header")
    }, [r(), f(), m()])
  }
});
const n1 = {
  show: Boolean,
  type: ee("single"),
  switchMode: ee("none"),
  title: String,
  color: String,
  round: j,
  readonly: Boolean,
  poppable: j,
  maxRange: he(null),
  position: ee("bottom"),
  teleport: [String, Object],
  showMark: j,
  showTitle: j,
  formatter: Function,
  rowHeight: G,
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
    type: G,
    default: 0,
    validator: e => e >= 0 && e <= 6
  }
};
var o1 = K({
  name: j0,
  props: n1,
  emits: ["select", "confirm", "unselect", "monthShow", "overRange", "update:show", "clickSubtitle", "clickDisabledDate", "panelChange"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = N(() => e.switchMode !== "none"),
      s = N(() => !e.minDate && !o.value ? ks() : e.minDate),
      a = N(() => !e.maxDate && !o.value ? Nr(ks(), 6) : e.maxDate),
      l = (V, Z = s.value, ve = a.value) => Z && Bt(V, Z) === -1 ? Z : ve && Bt(V, ve) === 1 ? ve : V,
      r = (V = e.defaultDate) => {
        const {
          type: Z,
          allowSameDay: ve
        } = e;
        if (V === null) return V;
        const we = ks();
        if (Z === "range") {
          Array.isArray(V) || (V = []), V.length === 1 && Bt(V[0], we) === 1 && (V = []);
          const se = s.value,
            ye = a.value,
            A = l(V[0] || we, se, ye ? ve ? ye : Nl(ye) : void 0),
            z = l(V[1] || (ve ? we : Fl(we)), se ? ve ? se : Fl(se) : void 0);
          return [A, z]
        }
        return Z === "multiple" ? Array.isArray(V) ? V.map(se => l(se)) : [l(we)] : ((!V || Array.isArray(V)) && (V = we), l(V))
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
      [v, b] = ls(),
      p = N(() => e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0),
      w = N(() => {
        const V = [];
        if (!s.value || !a.value) return V;
        const Z = new Date(s.value);
        Z.setDate(1);
        do V.push(new Date(Z)), Z.setMonth(Z.getMonth() + 1); while (Ao(Z, a.value) !== 1);
        return V
      }),
      y = N(() => {
        if (f.value) {
          if (e.type === "range") return !f.value[0] || !f.value[1];
          if (e.type === "multiple") return !f.value.length
        }
        return !f.value
      }),
      C = () => f.value,
      _ = () => {
        const V = Ln(d.value),
          Z = V + u,
          ve = w.value.map((z, H) => v.value[H].getHeight()),
          we = ve.reduce((z, H) => z + H, 0);
        if (Z > we && V > 0) return;
        let se = 0,
          ye;
        const A = [-1, -1];
        for (let z = 0; z < w.value.length; z++) {
          const H = v.value[z];
          se <= Z && se + ve[z] >= V && (A[1] = z, ye || (ye = H, A[0] = z), v.value[z].showed || (v.value[z].showed = !0, t("monthShow", {
            date: H.date,
            title: H.getTitle()
          }))), se += ve[z]
        }
        w.value.forEach((z, H) => {
          const ne = H >= A[0] - 1 && H <= A[1] + 1;
          v.value[H].setVisible(ne)
        }), ye && (g.value = ye)
      },
      k = V => {
        o.value ? m.value = V : wt(() => {
          w.value.some((Z, ve) => Ao(Z, V) === 0 ? (d.value && v.value[ve].scrollToDate(d.value, V), !0) : !1), _()
        })
      },
      E = () => {
        if (!(e.poppable && !e.show))
          if (f.value) {
            const V = e.type === "single" ? f.value : f.value[0];
            Qi(V) && k(V)
          } else o.value || wt(_)
      },
      B = () => {
        e.poppable && !e.show || (o.value || wt(() => {
          u = Math.floor(Ue(d).height)
        }), E())
      },
      T = (V = r()) => {
        f.value = V, E()
      },
      R = V => {
        const {
          maxRange: Z,
          rangePrompt: ve,
          showRangePrompt: we
        } = e;
        return Z && K0(V) > +Z ? (we && Ll(ve || Mn("rangePrompt", Z)), t("overRange"), !1) : !0
      },
      D = V => {
        m.value = V, t("panelChange", {
          date: V
        })
      },
      S = () => {
        var V;
        return t("confirm", (V = f.value) != null ? V : cu(f.value))
      },
      I = (V, Z) => {
        const ve = we => {
          f.value = we, t("select", cu(we))
        };
        if (Z && e.type === "range" && !R(V)) {
          ve([V[0], Lr(V[0], +e.maxRange - 1)]);
          return
        }
        ve(V), Z && !e.showConfirm && S()
      },
      $ = (V, Z, ve) => {
        var we;
        return (we = V.find(se => Bt(Z, se.date) === -1 && Bt(se.date, ve) === -1)) == null ? void 0 : we.date
      },
      X = N(() => v.value.reduce((V, Z) => {
        var ve, we;
        return V.push(...(we = (ve = Z.disabledDays) == null ? void 0 : ve.value) != null ? we : []), V
      }, [])),
      ce = V => {
        if (e.readonly || !V.date) return;
        const {
          date: Z
        } = V, {
          type: ve
        } = e;
        if (ve === "range") {
          if (!f.value) {
            I([Z]);
            return
          }
          const [we, se] = f.value;
          if (we && !se) {
            const ye = Bt(Z, we);
            if (ye === 1) {
              const A = $(X.value, we, Z);
              if (A) {
                const z = Nl(A);
                Bt(we, z) === -1 ? I([we, z]) : I([Z])
              } else I([we, Z], !0)
            } else ye === -1 ? I([Z]) : e.allowSameDay && I([Z, Z], !0)
          } else I([Z])
        } else if (ve === "multiple") {
          if (!f.value) {
            I([Z]);
            return
          }
          const we = f.value,
            se = we.findIndex(ye => Bt(ye, Z) === 0);
          if (se !== -1) {
            const [ye] = we.splice(se, 1);
            t("unselect", di(ye))
          } else e.maxRange && we.length >= +e.maxRange ? Ll(e.rangePrompt || Mn("rangePrompt", e.maxRange)) : I([...we, Z])
        } else I(Z, !0)
      },
      U = V => t("update:show", V),
      te = (V, Z) => {
        const ve = Z !== 0 || !e.showSubtitle;
        return h(J0, De({
          ref: o.value ? g : b(Z),
          date: V,
          currentDate: f.value,
          showMonthTitle: ve,
          firstDayOfWeek: p.value,
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
            Z = y.value,
            ve = Z ? e.confirmDisabledText : e.confirmText;
          return h(kt, {
            round: !0,
            block: !0,
            type: "primary",
            color: e.color,
            class: nt("confirm"),
            disabled: Z,
            nativeType: "button",
            onClick: S
          }, {
            default: () => [V ? V({
              disabled: Z
            }) : ve || Mn("confirm")]
          })
        }
      },
      Re = () => h("div", {
        class: [nt("footer"), {
          "van-safe-area-bottom": e.safeAreaInsetBottom
        }]
      }, [ue()]),
      Ne = () => {
        var V, Z;
        return h("div", {
          class: nt()
        }, [h(t1, {
          date: (V = g.value) == null ? void 0 : V.date,
          maxDate: a.value,
          minDate: s.value,
          title: e.title,
          subtitle: (Z = g.value) == null ? void 0 : Z.getTitle(),
          showTitle: e.showTitle,
          showSubtitle: e.showSubtitle,
          switchMode: e.switchMode,
          firstDayOfWeek: p.value,
          onClickSubtitle: ve => t("clickSubtitle", ve),
          onPanelChange: D
        }, ze(n, ["title", "subtitle", "prev-month", "prev-year", "next-month", "next-year"])), h("div", {
          ref: d,
          class: nt("body"),
          onScroll: o.value ? void 0 : _
        }, [o.value ? te(m.value, 0) : w.value.map(te)]), Re()])
      };
    return re(() => e.show, B), re(() => [e.type, e.minDate, e.maxDate, e.switchMode], () => T(r(f.value))), re(() => e.defaultDate, V => {
      T(V)
    }), $e({
      reset: T,
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
      "onUpdate:show": U
    }, {
      default: Ne
    }) : Ne()
  }
});
const i1 = J(o1),
  [s1, Wo] = Y("image"),
  a1 = {
    src: String,
    alt: String,
    fit: String,
    position: String,
    round: Boolean,
    block: Boolean,
    width: G,
    height: G,
    radius: G,
    lazyLoad: Boolean,
    iconSize: G,
    showError: j,
    errorIcon: ee("photo-fail"),
    iconPrefix: String,
    showLoading: j,
    loadingIcon: ee("photo"),
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
        const p = {
          width: Ie(e.width),
          height: Ie(e.height)
        };
        return Fe(e.radius) && (p.overflow = "hidden", p.borderRadius = Ie(e.radius)), p
      });
    re(() => e.src, () => {
      o.value = !1, s.value = !0
    });
    const c = p => {
        s.value && (s.value = !1, t("load", p))
      },
      u = () => {
        const p = new Event("load");
        Object.defineProperty(p, "target", {
          value: a.value,
          enumerable: !0
        }), c(p)
      },
      d = p => {
        o.value = !0, s.value = !1, t("error", p)
      },
      f = (p, w, y) => y ? y() : h(Pe, {
        name: p,
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
        const p = {
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
        }, p), null), [
          [nv("lazy"), e.src]
        ]) : h("img", De({
          ref: a,
          src: e.src,
          onLoad: c,
          onError: d
        }, p), null)
      },
      v = ({
        el: p
      }) => {
        const w = () => {
          p === a.value && s.value && u()
        };
        a.value ? w() : Oe(w)
      },
      b = ({
        el: p
      }) => {
        p === a.value && !o.value && d()
      };
    return l && Vt && (l.$on("loaded", v), l.$on("error", b), kn(() => {
      l.$off("loaded", v), l.$off("error", b)
    })), at(() => {
      Oe(() => {
        var p;
        (p = a.value) != null && p.complete && !e.lazyLoad && u()
      })
    }), () => {
      var p;
      return h("div", {
        class: Wo({
          round: e.round,
          block: e.block
        }),
        style: r.value
      }, [g(), m(), (p = n.default) == null ? void 0 : p.call(n)])
    }
  }
});
const Ia = J(l1),
  [r1, At] = Y("card"),
  c1 = {
    tag: String,
    num: G,
    desc: String,
    thumb: String,
    title: String,
    price: G,
    centered: Boolean,
    lazyLoad: Boolean,
    currency: ee("¥"),
    thumbLink: String,
    originPrice: G
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
          class: [At("title"), "van-multi-ellipsis--l2"]
        }, [e.title])
      },
      s = () => {
        if (t.tag || e.tag) return h("div", {
          class: At("tag")
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
          class: At("thumb"),
          onClick: u => n("clickThumb", u)
        }, [a(), s()])
      },
      r = () => {
        if (t.desc) return t.desc();
        if (e.desc) return h("div", {
          class: [At("desc"), "van-ellipsis"]
        }, [e.desc])
      },
      c = () => {
        const u = e.price.toString().split(".");
        return h("div", null, [h("span", {
          class: At("price-currency")
        }, [e.currency]), h("span", {
          class: At("price-integer")
        }, [u[0]]), u.length > 1 && h(Be, null, [be("."), h("span", {
          class: At("price-decimal")
        }, [u[1]])])])
      };
    return () => {
      var u, d, f;
      const m = t.num || Fe(e.num),
        g = t.price || Fe(e.price),
        v = t["origin-price"] || Fe(e.originPrice),
        b = m || g || v || t.bottom,
        p = g && h("div", {
          class: At("price")
        }, [t.price ? t.price() : c()]),
        w = v && h("div", {
          class: At("origin-price")
        }, [t["origin-price"] ? t["origin-price"]() : `${e.currency} ${e.originPrice}`]),
        y = m && h("div", {
          class: At("num")
        }, [t.num ? t.num() : `x${e.num}`]),
        C = t.footer && h("div", {
          class: At("footer")
        }, [t.footer()]),
        _ = b && h("div", {
          class: At("bottom")
        }, [(u = t["price-top"]) == null ? void 0 : u.call(t), p, w, y, (d = t.bottom) == null ? void 0 : d.call(t)]);
      return h("div", {
        class: At()
      }, [h("div", {
        class: At("header")
      }, [l(), h("div", {
        class: At("content", {
          centered: e.centered
        })
      }, [h("div", null, [o(), r(), (f = t.tags) == null ? void 0 : f.call(t)]), _])]), C])
    }
  }
});
const d1 = J(u1),
  [f1, xn, h1] = Y("cascader"),
  m1 = {
    title: String,
    options: Ze(),
    closeable: j,
    swipeable: j,
    closeIcon: ee("cross"),
    showHeader: j,
    modelValue: G,
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
      } = _e({
        text: "text",
        value: "value",
        children: "children"
      }, e.fieldNames),
      d = (k, E) => {
        for (const B of k) {
          if (B[c] === E) return [B];
          if (B[u]) {
            const T = d(B[u], E);
            if (T) return [B, ...T]
          }
        }
      },
      f = () => {
        const {
          options: k,
          modelValue: E
        } = e;
        if (E !== void 0) {
          const B = d(k, E);
          if (B) {
            let T = k;
            o.value = B.map(R => {
              const D = {
                  options: T,
                  selected: R
                },
                S = T.find(I => I[c] === R[c]);
              return S && (T = S[u]), D
            }), T && o.value.push({
              options: T,
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
      m = (k, E) => {
        if (k.disabled) return;
        if (o.value[E].selected = k, o.value.length > E + 1 && (o.value = o.value.slice(0, E + 1)), k[u]) {
          const R = {
            options: k[u],
            selected: null
          };
          o.value[E + 1] ? o.value[E + 1] = R : o.value.push(R), Oe(() => {
            s.value++
          })
        }
        const B = o.value.map(R => R.selected).filter(Boolean);
        n("update:modelValue", k[c]);
        const T = {
          value: k[c],
          tabIndex: E,
          selectedOptions: B
        };
        n("change", T), k[u] || n("finish", T)
      },
      g = () => n("close"),
      v = ({
        name: k,
        title: E
      }) => n("clickTab", k, E),
      b = () => e.showHeader ? h("div", {
        class: xn("header")
      }, [h("h2", {
        class: xn("title")
      }, [t.title ? t.title() : e.title]), e.closeable ? h(Pe, {
        name: e.closeIcon,
        class: [xn("close-icon"), _t],
        onClick: g
      }, null) : null]) : null,
      p = (k, E, B) => {
        const {
          disabled: T
        } = k, R = !!(E && k[c] === E[c]), D = k.color || (R ? e.activeColor : void 0), S = t.option ? t.option({
          option: k,
          selected: R
        }) : h("span", null, [k[r]]);
        return h("li", {
          ref: R ? l(B) : void 0,
          role: "menuitemradio",
          class: [xn("option", {
            selected: R,
            disabled: T
          }), k.className],
          style: {
            color: D
          },
          tabindex: T ? void 0 : R ? 0 : -1,
          "aria-checked": R,
          "aria-disabled": T || void 0,
          onClick: () => m(k, B)
        }, [S, R ? h(Pe, {
          name: "success",
          class: xn("selected-icon")
        }, null) : null])
      },
      w = (k, E, B) => h("ul", {
        role: "menu",
        class: xn("options")
      }, [k.map(T => p(T, E, B))]),
      y = (k, E) => {
        const {
          options: B,
          selected: T
        } = k, R = e.placeholder || h1("select"), D = T ? T[r] : R;
        return h(es, {
          title: D,
          titleClass: xn("tab", {
            unselected: !T
          })
        }, {
          default: () => {
            var S, I;
            return [(S = t["options-top"]) == null ? void 0 : S.call(t, {
              tabIndex: E
            }), w(B, T, E), (I = t["options-bottom"]) == null ? void 0 : I.call(t, {
              tabIndex: E
            })]
          }
        })
      },
      C = () => h(Ta, {
        active: s.value,
        "onUpdate:active": k => s.value = k,
        shrink: !0,
        animated: !0,
        class: xn("tabs"),
        color: e.activeColor,
        swipeable: e.swipeable,
        onClickTab: v
      }, {
        default: () => [o.value.map(y)]
      }),
      _ = k => {
        const E = k.parentElement;
        E && (E.scrollTop = k.offsetTop - (E.offsetHeight - k.offsetHeight) / 2)
      };
    return f(), re(s, k => {
      const E = a.value[k];
      E && _(E)
    }), re(() => e.options, f, {
      deep: !0
    }), re(() => e.modelValue, k => {
      k !== void 0 && o.value.map(B => {
        var T;
        return (T = B.selected) == null ? void 0 : T[c]
      }).includes(k) || f()
    }), () => h("div", {
      class: xn()
    }, [b(), C()])
  }
});
const v1 = J(g1),
  [y1, mu] = Y("cell-group"),
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
        return h("div", De({
          class: [mu({
            inset: e.inset
          }), {
            [wa]: e.border && !e.inset
          }]
        }, n, Js()), [(a = t.default) == null ? void 0 : a.call(t)])
      },
      s = () => h("div", {
        class: mu("title", {
          inset: e.inset
        })
      }, [t.title ? t.title() : e.title]);
    return () => e.title || t.title ? h(Be, null, [s(), o()]) : o()
  }
});
const w1 = J(b1),
  [C1, Ts] = Y("circle");
let _1 = 0;
const gu = e => Math.min(Math.max(+e, 0), 100);

function k1(e, t) {
  const n = e ? 1 : 0;
  return `M ${t/2} ${t/2} m 0, -500 a 500, 500 0 1, ${n} 0, 1000 a 500, 500 0 1, ${n} 0, -1000`
}
const T1 = {
  text: String,
  size: G,
  fill: ee("none"),
  rate: he(100),
  speed: he(0),
  color: [String, Object],
  clockwise: j,
  layerColor: String,
  currentRate: lt(0),
  strokeWidth: he(40),
  strokeLinecap: String,
  startPosition: ee("top")
};
var S1 = K({
  name: C1,
  props: T1,
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
        v = e.currentRate,
        b = gu(f),
        p = Math.abs((v - b) * 1e3 / +e.speed),
        w = () => {
          const y = Date.now(),
            _ = Math.min((y - g) / p, 1) * (b - v) + v;
          t("update:currentRate", gu(parseFloat(_.toFixed(1)))), (b > v ? _ < b : _ > b) && (m = wt(w))
        };
      e.speed ? (m && pa(m), m = wt(w)) : t("update:currentRate", b)
    }, {
      immediate: !0
    });
    const r = () => {
        const {
          strokeWidth: m,
          currentRate: g,
          strokeLinecap: v
        } = e, b = 3140 * g / 100, p = wn(e.color) ? `url(#${o})` : e.color, w = {
          stroke: p,
          strokeWidth: `${+m+1}px`,
          strokeLinecap: v,
          strokeDasharray: `${b}px 3140px`
        };
        return h("path", {
          d: a.value,
          style: w,
          class: Ts("hover"),
          stroke: p
        }, null)
      },
      c = () => {
        const f = {
          fill: e.fill,
          stroke: e.layerColor,
          strokeWidth: `${e.strokeWidth}px`
        };
        return h("path", {
          class: Ts("layer"),
          style: f,
          d: a.value
        }, null)
      },
      u = () => {
        const {
          color: f
        } = e;
        if (!wn(f)) return;
        const m = Object.keys(f).sort((g, v) => parseFloat(g) - parseFloat(v)).map((g, v) => h("stop", {
          key: v,
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
          class: Ts("text")
        }, [e.text])
      };
    return () => h("div", {
      class: Ts(),
      style: Hn(e.size)
    }, [h("svg", {
      viewBox: `0 0 ${s.value} ${s.value}`,
      style: l.value
    }, [u(), c(), r()]), d()])
  }
});
const x1 = J(S1),
  [Rh, A1] = Y("row"),
  Dh = Symbol(Rh),
  E1 = {
    tag: ee("div"),
    wrap: j,
    align: String,
    gutter: {
      type: [String, Number, Array],
      default: 0
    },
    justify: String
  };
var I1 = K({
  name: Rh,
  props: E1,
  setup(e, {
    slots: t
  }) {
    const {
      children: n,
      linkChildren: o
    } = Tt(Dh), s = N(() => {
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
              v = d - g;
            c.push({
              left: g,
              right: v
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
        class: A1({
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
  tag: ee("div"),
  span: he(0),
  offset: G
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
    } = yt(Dh), s = N(() => {
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
      return _e(r, {
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
const B1 = J(D1),
  [Bh, $1] = Y("collapse"),
  $h = Symbol(Bh),
  M1 = {
    border: j,
    accordion: Boolean,
    modelValue: {
      type: [String, Number, Array],
      default: ""
    }
  };
var L1 = K({
  name: Bh,
  props: M1,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      linkChildren: o,
      children: s
    } = Tt($h), a = u => {
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
      } = u, g = s.filter(v => v.disabled && f ? v.expanded.value : d ?? !v.expanded.value).map(v => v.itemName.value);
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
const N1 = J(L1),
  [F1, Ss] = Y("collapse-item"),
  V1 = ["icon", "title", "value", "label", "right-icon"],
  z1 = _e({}, Aa, {
    name: G,
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
      } = yt($h);
    if (!s) return;
    const l = N(() => {
        var b;
        return (b = e.name) != null ? b : a.value
      }),
      r = N(() => s.isExpanded(l.value)),
      c = F(r.value),
      u = Tr(() => c.value || !e.lazyRender),
      d = () => {
        r.value ? n.value && (n.value.style.height = "") : c.value = !1
      };
    re(r, (b, p) => {
      if (p === null) return;
      b && (c.value = !0), (b ? Oe : wt)(() => {
        if (!o.value || !n.value) return;
        const {
          offsetHeight: y
        } = o.value;
        if (y) {
          const C = `${y}px`;
          n.value.style.height = b ? "0" : C, so(() => {
            n.value && (n.value.style.height = b ? C : "0")
          })
        } else d()
      })
    });
    const f = (b = !r.value) => {
        s.toggle(l.value, b)
      },
      m = () => {
        !e.disabled && !e.readonly && f()
      },
      g = () => {
        const {
          border: b,
          disabled: p,
          readonly: w
        } = e, y = ze(e, Object.keys(Aa));
        return w && (y.isLink = !1), (p || w) && (y.clickable = !1), h(un, De({
          role: "button",
          class: Ss("title", {
            disabled: p,
            expanded: r.value,
            borderless: !b
          }),
          "aria-expanded": String(r.value),
          onClick: m
        }, y), ze(t, V1))
      },
      v = u(() => {
        var b;
        return rt(h("div", {
          ref: n,
          class: Ss("wrapper"),
          onTransitionend: d
        }, [h("div", {
          ref: o,
          class: Ss("content")
        }, [(b = t.default) == null ? void 0 : b.call(t)])]), [
          [dt, c.value]
        ])
      });
    return $e({
      toggle: f,
      expanded: r,
      itemName: l
    }), () => h("div", {
      class: [Ss({
        border: a.value && e.border
      })]
    }, [g(), v()])
  }
});
const U1 = J(H1),
  W1 = J(rp),
  [j1, vu, ol] = Y("contact-card"),
  Q1 = {
    tel: String,
    name: String,
    type: ee("add"),
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
      class: vu([e.type]),
      border: !1,
      isLink: e.editable,
      titleClass: vu("title"),
      onClick: n
    }, {
      title: o
    })
  }
});
const Y1 = J(K1),
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
      default: () => _e({}, Vl)
    },
    telValidator: {
      type: Function,
      default: fd
    }
  };
var Z1 = K({
  name: q1,
  props: G1,
  emits: ["save", "delete", "changeDefault"],
  setup(e, {
    emit: t
  }) {
    const n = Je(_e({}, Vl, e.contactInfo)),
      o = () => {
        e.isSaving || t("save", n)
      },
      s = () => t("delete", n),
      a = () => h("div", {
        class: jo("buttons")
      }, [h(kt, {
        block: !0,
        round: !0,
        type: "primary",
        text: qn("save"),
        class: jo("button"),
        loading: e.isSaving,
        nativeType: "submit"
      }, null), e.isEdit && h(kt, {
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
    return re(() => e.contactInfo, c => _e(n, Vl, c)), () => h(Er, {
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
const X1 = J(Z1),
  [J1, An, ew] = Y("contact-list"),
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
    }, [h(kt, {
      round: !0,
      block: !0,
      type: "primary",
      class: An("add"),
      text: e.addText || ew("addContact"),
      onClick: () => t("add")
    }, null)])])
  }
});
const ow = J(nw);

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
  format: ee("HH:mm:ss"),
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
const cw = J(rw);

function yu(e) {
  const t = new Date(e * 1e3);
  return `${t.getFullYear()}.${Xt(t.getMonth()+1)}.${Xt(t.getDate())}`
}
const uw = e => (e / 10).toFixed(e % 10 === 0 ? 0 : 1),
  pu = e => (e / 100).toFixed(e % 100 === 0 ? 0 : e % 10 === 0 ? 1 : 2),
  [dw, mn, il] = Y("coupon");
var fw = K({
  name: dw,
  props: {
    chosen: Boolean,
    coupon: gt(Object),
    disabled: Boolean,
    currency: ee("¥")
  },
  setup(e) {
    const t = N(() => {
        const {
          startAt: s,
          endAt: a
        } = e.coupon;
        return `${yu(s)} - ${yu(a)}`
      }),
      n = N(() => {
        const {
          coupon: s,
          currency: a
        } = e;
        if (s.valueDesc) return [s.valueDesc, h("span", null, [s.unitDesc || ""])];
        if (s.denominations) {
          const l = pu(s.denominations);
          return [h("span", null, [a]), ` ${l}`]
        }
        return s.discount ? il("discount", uw(s.discount)) : ""
      }),
      o = N(() => {
        const s = pu(e.coupon.originCondition || 0);
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
const zl = J(fw),
  [hw, bu, Hl] = Y("coupon-cell"),
  mw = {
    title: String,
    border: j,
    editable: j,
    coupons: Ze(),
    currency: ee("¥"),
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
        class: bu(),
        value: vw(e),
        title: e.title || Hl("title"),
        border: e.border,
        isLink: e.editable,
        valueClass: bu("value", {
          selected: t
        })
      }, null)
    }
  }
});
const pw = J(yw),
  [bw, xs] = Y("empty"),
  ww = {
    image: ee("default"),
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
      r = (w, y, C) => h("stop", {
        "stop-color": w,
        offset: `${y}%`,
        "stop-opacity": C
      }, null),
      c = (w, y) => [r(w, 0), r(y, 100)],
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
      v = () => h("svg", {
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
      b = () => h("svg", {
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
      p = () => {
        var w;
        if (t.image) return t.image();
        const y = {
          error: v,
          search: b,
          network: m,
          default: g
        };
        return ((w = y[e.image]) == null ? void 0 : w.call(y)) || h("img", {
          src: e.image
        }, null)
      };
    return () => h("div", {
      class: xs()
    }, [h("div", {
      class: xs("image"),
      style: Hn(e.imageSize)
    }, [p()]), n(), o()])
  }
});
const Mh = J(Cw),
  [_w, gn, Qo] = Y("coupon-list"),
  kw = {
    code: ee(""),
    coupons: Ze(),
    currency: ee("¥"),
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
var Tw = K({
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
    }, g = y => {
      Oe(() => {
        var C;
        return (C = o.value[y]) == null ? void 0 : C.scrollIntoView()
      })
    }, v = () => h(Mh, {
      image: e.emptyImage
    }, {
      default: () => [h("p", {
        class: gn("empty-tip")
      }, [Qo("noCoupon")])]
    }), b = () => {
      if (e.showExchangeBar) return h("div", {
        ref: l,
        class: gn("exchange-bar")
      }, [h($n, {
        modelValue: u.value,
        "onUpdate:modelValue": y => u.value = y,
        clearable: !0,
        border: !1,
        class: gn("field"),
        placeholder: e.inputPlaceholder || Qo("placeholder"),
        maxlength: "20"
      }, null), h(kt, {
        plain: !0,
        type: "primary",
        class: gn("exchange"),
        text: e.exchangeButtonText || Qo("exchange"),
        loading: e.exchangeButtonLoading,
        disabled: d.value,
        onClick: m
      }, null)])
    }, p = () => {
      const {
        coupons: y,
        chosenCoupon: C
      } = e, _ = e.showCount ? ` (${y.length})` : "", k = (e.enabledTitle || Qo("enable")) + _, E = (B = [], T = 0) => B.includes(T) ? B.filter(R => R !== T) : [...B, T];
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
          }, [y.map((T, R) => h(zl, {
            key: T.id,
            ref: s(R),
            coupon: T,
            chosen: Array.isArray(C) ? C.includes(R) : R === C,
            currency: e.currency,
            onClick: () => t("change", Array.isArray(C) ? E(C, R) : R)
          }, null)), !y.length && v(), (B = n["list-footer"]) == null ? void 0 : B.call(n)])]
        }
      })
    }, w = () => {
      const {
        disabledCoupons: y
      } = e, C = e.showCount ? ` (${y.length})` : "", _ = (e.disabledTitle || Qo("disabled")) + C;
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
          }, [y.map(E => h(zl, {
            disabled: !0,
            key: E.id,
            coupon: E,
            currency: e.currency
          }, null)), !y.length && v(), (k = n["disabled-list-footer"]) == null ? void 0 : k.call(n)])]
        }
      })
    };
    return re(() => e.code, y => {
      u.value = y
    }), re(jt, f), re(u, y => t("update:code", y)), re(() => e.displayedCouponIndex, g), at(() => {
      f(), g(e.displayedCouponIndex)
    }), () => h("div", {
      ref: a,
      class: gn()
    }, [b(), h(Ta, {
      active: r.value,
      "onUpdate:active": y => r.value = y,
      class: gn("tab")
    }, {
      default: () => [p(), w()]
    }), h("div", {
      class: gn("bottom")
    }, [n["list-button"] ? n["list-button"]() : rt(h(kt, {
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
const Sw = J(Tw),
  wu = new Date().getFullYear(),
  [xw] = Y("date-picker"),
  Aw = _e({}, Eh, {
    columnsType: {
      type: Array,
      default: () => ["year", "month", "day"]
    },
    minDate: {
      type: Date,
      default: () => new Date(wu - 10, 0, 1),
      validator: Qi
    },
    maxDate: {
      type: Date,
      default: () => new Date(wu + 10, 11, 31),
      validator: Qi
    }
  });
var Ew = K({
  name: xw,
  props: Aw,
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
          columnsType: E
        } = e, B = E.indexOf(_), T = s.value ? e.modelValue[B] : o.value[B];
        if (T) return +T;
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
          E = c(_) ? e.maxDate.getMonth() + 1 : 12;
        return si(k, E, "month", e.formatter, e.filter)
      },
      g = () => {
        const _ = f("year"),
          k = f("month"),
          E = r(_) && u(k) ? e.minDate.getDate() : 1,
          B = c(_) && d(k) ? e.maxDate.getDate() : Ph(_, k);
        return si(E, B, "day", e.formatter, e.filter)
      },
      v = () => {
        var _;
        return (_ = a.value) == null ? void 0 : _.confirm()
      },
      b = () => o.value,
      p = N(() => e.columnsType.map(_ => {
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
      s.value = pn(k, o.value), _ = Oh(_, p.value), pn(_, o.value) || (o.value = _), s.value = !1
    }, {
      immediate: !0
    });
    const w = (..._) => t("change", ..._),
      y = (..._) => t("cancel", ..._),
      C = (..._) => t("confirm", ..._);
    return $e({
      confirm: v,
      getSelectedDate: b
    }), () => h(xa, De({
      ref: a,
      modelValue: o.value,
      "onUpdate:modelValue": _ => o.value = _,
      columns: p.value,
      onChange: w,
      onCancel: y,
      onConfirm: C
    }, ze(e, Ih)), n)
  }
});
const Iw = J(Ew),
  [Pw, qt, As] = Y("dialog"),
  Ow = _e({}, bi, {
    title: String,
    theme: String,
    width: G,
    message: [String, Function],
    callback: Function,
    allowHtml: Boolean,
    className: et,
    transition: ee("van-dialog-bounce"),
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
        var y;
        a(!1), (y = e.callback) == null || y.call(e, w)
      },
      r = w => () => {
        e.show && (t(w), e.beforeClose ? (s[w] = !0, vo(e.beforeClose, {
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
        var y, C;
        if (w.target !== ((C = (y = o.value) == null ? void 0 : y.popupRef) == null ? void 0 : C.value)) return;
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
          message: y,
          allowHtml: C,
          messageAlign: _
        } = e, k = qt("message", {
          "has-title": w,
          [_]: _
        }), E = ci(y) ? y() : y;
        return C && typeof E == "string" ? h("div", {
          class: k,
          innerHTML: E
        }, null) : h("div", {
          class: k
        }, [E])
      },
      g = () => {
        if (n.default) return h("div", {
          class: qt("content")
        }, [n.default()]);
        const {
          title: w,
          message: y,
          allowHtml: C
        } = e;
        if (y) {
          const _ = !!(w || n.title);
          return h("div", {
            key: C ? 1 : 0,
            class: qt("content", {
              isolated: !_
            })
          }, [m(_)])
        }
      },
      v = () => h("div", {
        class: [Hf, qt("footer")]
      }, [e.showCancelButton && h(kt, {
        size: "large",
        text: e.cancelButtonText || As("cancel"),
        class: qt("cancel"),
        style: {
          color: e.cancelButtonColor
        },
        loading: s.cancel,
        disabled: e.cancelButtonDisabled,
        onClick: c
      }, null), e.showConfirmButton && h(kt, {
        size: "large",
        text: e.confirmButtonText || As("confirm"),
        class: [qt("confirm"), {
          [Uf]: e.showCancelButton
        }],
        style: {
          color: e.confirmButtonColor
        },
        loading: s.confirm,
        disabled: e.confirmButtonDisabled,
        onClick: u
      }, null)]),
      b = () => h(qf, {
        class: qt("footer")
      }, {
        default: () => [e.showCancelButton && h($l, {
          type: "warning",
          text: e.cancelButtonText || As("cancel"),
          class: qt("cancel"),
          color: e.cancelButtonColor,
          loading: s.cancel,
          disabled: e.cancelButtonDisabled,
          onClick: c
        }, null), e.showConfirmButton && h($l, {
          type: "danger",
          text: e.confirmButtonText || As("confirm"),
          class: qt("confirm"),
          color: e.confirmButtonColor,
          loading: s.confirm,
          disabled: e.confirmButtonDisabled,
          onClick: u
        }, null)]
      }),
      p = () => n.footer ? n.footer() : e.theme === "round-button" ? b() : v();
    return () => {
      const {
        width: w,
        title: y,
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
        "aria-labelledby": y || _,
        onKeydown: d,
        "onUpdate:show": a
      }, ze(e, Rw)), {
        default: () => [f(), g(), p()]
      })
    }
  }
});
const Bw = J(Dw),
  [$w, Mw] = Y("divider"),
  Lw = {
    dashed: Boolean,
    hairline: j,
    vertical: Boolean,
    contentPosition: ee("center")
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
const Fw = J(Nw),
  [Lh, Es] = Y("dropdown-menu"),
  Vw = {
    overlay: j,
    zIndex: G,
    duration: he(.2),
    direction: ee("down"),
    activeColor: String,
    autoLocate: Boolean,
    closeOnClickOutside: j,
    closeOnClickOverlay: j,
    swipeThreshold: G
  },
  Nh = Symbol(Lh);
var zw = K({
  name: Lh,
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
      } = Tt(Nh),
      c = pi(o),
      u = N(() => l.some(y => y.state.showWrapper)),
      d = N(() => e.swipeThreshold && l.length > +e.swipeThreshold),
      f = N(() => {
        if (u.value && Fe(e.zIndex)) return {
          zIndex: +e.zIndex + 1
        }
      }),
      m = () => {
        l.forEach(y => {
          y.toggle(!1)
        })
      },
      g = () => {
        e.closeOnClickOutside && m()
      },
      v = () => {
        if (s.value) {
          const y = Ue(s);
          e.direction === "down" ? a.value = y.bottom : a.value = jt.value - y.top
        }
      },
      b = () => {
        u.value && v()
      },
      p = y => {
        l.forEach((C, _) => {
          _ === y ? C.toggle() : C.state.showPopup && C.toggle(!1, {
            immediate: !0
          })
        })
      },
      w = (y, C) => {
        const {
          showPopup: _
        } = y.state, {
          disabled: k,
          titleClass: E
        } = y;
        return h("div", {
          id: `${n}-${C}`,
          role: "button",
          tabindex: k ? void 0 : 0,
          "data-allow-mismatch": "attribute",
          class: [Es("item", {
            disabled: k,
            grow: d.value
          }), {
            [_t]: !k
          }],
          onClick: () => {
            k || p(C)
          }
        }, [h("span", {
          class: [Es("title", {
            down: _ === (e.direction === "down"),
            active: _
          }), E],
          style: {
            color: _ ? e.activeColor : ""
          }
        }, [h("div", {
          class: "van-ellipsis"
        }, [y.renderTitle()])])])
      };
    return $e({
      close: m
    }), r({
      id: n,
      props: e,
      offset: a,
      updateOffset: v
    }), ba(o, g), st("scroll", b, {
      target: c,
      passive: !0
    }), () => {
      var y;
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
      }, [l.map(w)]), (y = t.default) == null ? void 0 : y.call(t)])
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
      } = yt(Nh);
    if (!l) return;
    const c = y => () => t(y),
      u = c("open"),
      d = c("close"),
      f = c("opened"),
      m = () => {
        s.showWrapper = !1, t("closed")
      },
      g = y => {
        e.teleport && y.stopPropagation()
      },
      v = (y = !s.showPopup, C = {}) => {
        y !== s.showPopup && (s.showPopup = y, s.transition = !C.immediate, y && (l.updateOffset(), s.showWrapper = !0))
      },
      b = () => {
        if (n.title) return n.title();
        if (e.title) return e.title;
        const y = e.options.find(C => C.value === e.modelValue);
        return y ? y.text : ""
      },
      p = y => {
        const {
          activeColor: C
        } = l.props, {
          disabled: _
        } = y, k = y.value === e.modelValue, E = () => {
          _ || (s.showPopup = !1, y.value !== e.modelValue && (t("update:modelValue", y.value), t("change", y.value)))
        }, B = () => {
          if (k) return h(Pe, {
            class: Is("icon"),
            color: _ ? void 0 : C,
            name: "success"
          }, null)
        };
        return h(un, {
          role: "menuitem",
          key: String(y.value),
          icon: y.icon,
          title: y.text,
          class: Is("option", {
            active: k,
            disabled: _
          }),
          style: {
            color: k ? C : ""
          },
          tabindex: k ? 0 : -1,
          clickable: !_,
          onClick: E
        }, {
          value: B
        })
      },
      w = () => {
        const {
          offset: y
        } = l, {
          autoLocate: C,
          zIndex: _,
          overlay: k,
          duration: E,
          direction: B,
          closeOnClickOverlay: T
        } = l.props, R = Un(_);
        let D = y.value;
        if (C && a.value) {
          const S = My(a.value);
          S && (D -= Ue(S).top)
        }
        return B === "down" ? R.top = `${D}px` : R.bottom = `${D}px`, rt(h("div", De({
          ref: a,
          style: R,
          class: Is([B]),
          onClick: g
        }, o), [h(cn, {
          show: s.showPopup,
          "onUpdate:show": S => s.showPopup = S,
          role: "menu",
          class: Is("content"),
          overlay: k,
          position: B === "down" ? "top" : "bottom",
          duration: s.transition ? E : 0,
          lazyRender: e.lazyRender,
          overlayStyle: {
            position: "absolute"
          },
          "aria-labelledby": `${l.id}-${r.value}`,
          "data-allow-mismatch": "attribute",
          closeOnClickOverlay: T,
          onOpen: u,
          onClose: d,
          onOpened: f,
          onClosed: m
        }, {
          default: () => {
            var S;
            return [e.options.map(p), (S = n.default) == null ? void 0 : S.call(n)]
          }
        })]), [
          [dt, s.showWrapper]
        ])
      };
    return $e({
      state: s,
      toggle: v,
      renderTitle: b
    }), () => e.teleport ? h($o, {
      to: e.teleport
    }, {
      default: () => [w()]
    }) : w()
  }
});
const jw = J(Ww),
  Qw = J(zw),
  Kw = {
    gap: lt(24),
    icon: String,
    axis: ee("y"),
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
  [Yw, Cu] = Y("floating-bubble");
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
        if (!y.value) return;
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
    const v = C => {
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
    const p = () => {
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
    const y = F(!0);
    return Cn(() => {
      y.value = !0
    }), _n(() => {
      e.teleport && (y.value = !1)
    }), () => {
      const C = rt(h("div", De({
        class: Cu(),
        ref: s,
        onTouchstartPassive: v,
        onTouchend: p,
        onTouchcancel: p,
        onClickCapture: w,
        style: u.value
      }, o), [t.default ? t.default() : h(hp, {
        name: e.icon,
        class: Cu("icon")
      }, null)]), [
        [dt, y.value]
      ]);
      return e.teleport ? h($o, {
        to: e.teleport
      }, {
        default: () => [C]
      }) : C
    }
  }
});
const Gw = J(qw),
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
      l = Sr(() => +e.height, C => t("update:height", C)),
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
            max: E
          } = r.value;
        return _ > E ? -(E + (_ - E) * .2) : _ < k ? -(k - (k - _) * .2) : C
      };
    let m, g = -1;
    const v = Kt(),
      b = C => {
        v.start(C), u.value = !0, m = -l.value, g = -1
      },
      p = C => {
        var _;
        v.move(C);
        const k = C.target;
        if (a.value === k || (_ = a.value) != null && _.contains(k)) {
          const {
            scrollTop: B
          } = a.value;
          if (g = Math.max(g, B), !e.contentDraggable) return;
          if (-m < r.value.max) Ge(C, !0);
          else if (!(B <= 0 && v.deltaY.value > 0) || g > 0) return
        }
        const E = v.deltaY.value + m;
        l.value = -f(E)
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
    }), eh(s, () => e.lockScroll || u.value), st("touchmove", p, {
      target: s
    });
    const y = () => n.header ? n.header() : h("div", {
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
        onTouchstartPassive: b,
        onTouchend: w,
        onTouchcancel: w
      }, [y(), h("div", {
        class: Ps("content"),
        ref: a
      }, [(C = n.default) == null ? void 0 : C.call(n)])])
    }
  }
});
const eC = J(Jw),
  [Fh, tC] = Y("grid"),
  nC = {
    square: Boolean,
    center: j,
    border: j,
    gutter: G,
    reverse: Boolean,
    iconSize: G,
    direction: String,
    clickable: Boolean,
    columnNum: he(4)
  },
  Vh = Symbol(Fh);
var oC = K({
  name: Fh,
  props: nC,
  setup(e, {
    slots: t
  }) {
    const {
      linkChildren: n
    } = Tt(Vh);
    return n({
      props: e
    }), () => {
      var o;
      return h("div", {
        style: {
          paddingLeft: Ie(e.gutter)
        },
        class: [tC(), {
          [Hf]: e.border && !e.gutter
        }]
      }, [(o = t.default) == null ? void 0 : o.call(t)])
    }
  }
});
const iC = J(oC),
  [sC, Os] = Y("grid-item"),
  aC = _e({}, yo, {
    dot: Boolean,
    text: String,
    icon: String,
    badge: G,
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
    } = yt(Vh), s = Mo();
    if (!n) return;
    const a = N(() => {
        const {
          square: d,
          gutter: f,
          columnNum: m
        } = n.props, g = `${100/+m}%`, v = {
          flexBasis: g
        };
        if (d) v.paddingTop = g;
        else if (f) {
          const b = Ie(f);
          v.paddingRight = b, o.value >= +m && (v.marginTop = b)
        }
        return v
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
        reverse: v,
        direction: b,
        clickable: p
      } = n.props, w = [Os("content", [b, {
        center: d,
        square: m,
        reverse: v,
        clickable: p,
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
        role: p ? "button" : void 0,
        class: w,
        style: l.value,
        tabindex: p ? 0 : void 0,
        onClick: s
      }, [u()])])
    }
  }
});
const rC = J(lC),
  [cC, _u] = Y("highlight"),
  uC = {
    autoEscape: j,
    caseSensitive: Boolean,
    highlightClass: String,
    highlightTag: ee("span"),
    keywords: gt([String, Array]),
    sourceString: ee(""),
    tag: ee("div"),
    unhighlightClass: String,
    unhighlightTag: ee("span")
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
          let v;
          for (; v = g.exec(l);) {
            const b = v.index,
              p = g.lastIndex;
            if (b >= p) {
              g.lastIndex++;
              continue
            }
            f.push({
              start: b,
              end: p,
              highlight: !0
            })
          }
          return f
        }, []);
        u = u.sort((f, m) => f.start - m.start).reduce((f, m) => {
          const g = f[f.length - 1];
          if (!g || m.start > g.end) {
            const v = g ? g.end : 0,
              b = m.start;
            v !== b && f.push({
              start: v,
              end: b,
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
            class: [_u("tag"), s]
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
        class: _u()
      }, {
        default: () => [n()]
      })
    }
  }
});
const fC = J(dC),
  ku = e => Math.sqrt((e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2),
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
    minZoom: gt(G),
    maxZoom: gt(G),
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
          scale: U,
          moveX: te,
          moveY: ue,
          moving: Re,
          zooming: Ne,
          initializing: V
        } = o, Z = {
          transitionDuration: Ne || Re || V ? "0s" : ".3s"
        };
        return (U !== 1 || c.value) && (Z.transform = `matrix(${U}, 0, 0, ${U}, ${te}, ${ue})`), Z
      }),
      f = N(() => {
        if (o.imageRatio) {
          const {
            rootWidth: U,
            rootHeight: te
          } = e, ue = r.value ? te / o.imageRatio : U;
          return Math.max(0, (o.scale * ue - U) / 2)
        }
        return 0
      }),
      m = N(() => {
        if (o.imageRatio) {
          const {
            rootWidth: U,
            rootHeight: te
          } = e, ue = r.value ? te : U * o.imageRatio;
          return Math.max(0, (o.scale * ue - te) / 2)
        }
        return 0
      }),
      g = (U, te) => {
        var ue;
        if (U = ht(U, +e.minZoom, +e.maxZoom + 1), U !== o.scale) {
          const Re = U / o.scale;
          if (o.scale = U, te) {
            const Ne = Ue((ue = a.value) == null ? void 0 : ue.$el),
              V = {
                x: Ne.width * .5,
                y: Ne.height * .5
              },
              Z = o.moveX - (te.x - Ne.left - V.x) * (Re - 1),
              ve = o.moveY - (te.y - Ne.top - V.y) * (Re - 1);
            o.moveX = ht(Z, -f.value, f.value), o.moveY = ht(ve, -m.value, m.value)
          } else o.moveX = 0, o.moveY = c.value ? u : 0;
          t("scale", {
            scale: U,
            index: e.active
          })
        }
      },
      v = () => {
        g(1)
      },
      b = () => {
        const U = o.scale > 1 ? 1 : 2;
        g(U, U === 2 || c.value ? {
          x: s.startX.value,
          y: s.startY.value
        } : void 0)
      };
    let p, w, y, C, _, k, E, B, T = !1;
    const R = U => {
        const {
          touches: te
        } = U;
        if (p = te.length, p === 2 && e.disableZoom) return;
        const {
          offsetX: ue
        } = s;
        s.start(U), w = o.moveX, y = o.moveY, B = Date.now(), T = !1, o.moving = p === 1 && (o.scale !== 1 || c.value), o.zooming = p === 2 && !ue.value, o.zooming && (C = o.scale, _ = ku(te))
      },
      D = U => {
        const {
          touches: te
        } = U;
        if (s.move(U), o.moving) {
          const {
            deltaX: ue,
            deltaY: Re
          } = s, Ne = ue.value + w, V = Re.value + y;
          if ((e.vertical ? s.isVertical() && Math.abs(V) > m.value : s.isHorizontal() && Math.abs(Ne) > f.value) && !T) {
            o.moving = !1;
            return
          }
          T = !0, Ge(U, !0), o.moveX = ht(Ne, -f.value, f.value), o.moveY = ht(V, -m.value, m.value)
        }
        if (o.zooming && (Ge(U, !0), te.length === 2)) {
          const ue = ku(te),
            Re = C * ue / _;
          k = hC(te), g(Re, k)
        }
      },
      S = U => {
        var te;
        const ue = (te = l.value) == null ? void 0 : te.$el;
        if (!ue) return;
        const Re = ue.firstElementChild,
          Ne = U.target === ue,
          V = Re == null ? void 0 : Re.contains(U.target);
        !e.closeOnClickImage && V || !e.closeOnClickOverlay && Ne || t("close")
      },
      I = U => {
        if (p > 1) return;
        const te = Date.now() - B,
          ue = 250;
        s.isTap.value && (te < ue ? e.doubleScale ? E ? (clearTimeout(E), E = null, b()) : E = setTimeout(() => {
          S(U), E = null
        }, ue) : S(U) : te > jf && t("longPress"))
      },
      $ = U => {
        let te = !1;
        if ((o.moving || o.zooming) && (te = !0, o.moving && w === o.moveX && y === o.moveY && (te = !1), !U.touches.length)) {
          o.zooming && (o.moveX = ht(o.moveX, -f.value, f.value), o.moveY = ht(o.moveY, -m.value, m.value), o.zooming = !1), o.moving = !1, w = 0, y = 0, C = 1, o.scale < 1 && v();
          const ue = +e.maxZoom;
          o.scale > ue && g(ue, k)
        }
        Ge(U, te), I(U), s.reset()
      },
      X = () => {
        const {
          rootWidth: U,
          rootHeight: te
        } = e, ue = te / U, {
          imageRatio: Re
        } = o;
        r.value = o.imageRatio > ue && Re < Tu, c.value = o.imageRatio > ue && Re >= Tu, c.value && (u = (Re * U - te) / 2, o.moveY = u, o.initializing = !0, wt(() => {
          o.initializing = !1
        })), v()
      },
      ce = U => {
        const {
          naturalWidth: te,
          naturalHeight: ue
        } = U.target;
        o.imageRatio = ue / te, X()
      };
    return re(() => e.active, v), re(() => e.show, U => {
      U || v()
    }), re(() => [e.rootWidth, e.rootHeight], X), st("touchmove", D, {
      target: N(() => {
        var U;
        return (U = l.value) == null ? void 0 : U.$el
      })
    }), $e({
      resetScale: v
    }), () => {
      const U = {
        loading: () => h(rn, {
          type: "spinner"
        }, null)
      };
      return h(Ar, {
        ref: l,
        class: sl("swipe-item"),
        onTouchstartPassive: R,
        onTouchend: $,
        onTouchcancel: $
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
        }, U)]
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
  closeIcon: ee("clear"),
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
  closeIconPosition: ee("top-right"),
  teleport: [String, Object]
};
var zh = K({
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
        vo(e.beforeClose, {
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
      v = () => {
        a.disableZoom = !1
      },
      b = () => h(xr, {
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
        onDragEnd: v,
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
      p = () => {
        if (e.closeable) return h(Pe, {
          role: "button",
          name: e.closeIcon,
          class: [Ko("close-icon", e.closeIconPosition), _t],
          onClick: u
        }, null)
      },
      w = () => t("closed"),
      y = (C, _) => {
        var k;
        return (k = o.value) == null ? void 0 : k.swipeTo(C, _)
      };
    return $e({
      resetScale: () => {
        var C;
        (C = s.value) == null || C.resetScale()
      },
      swipeTo: y
    }), at(l), re([tn, jt], l), re(() => e.startPosition, C => d(+C)), re(() => e.show, C => {
      const {
        images: _,
        startPosition: k
      } = e;
      C ? (d(+k), Oe(() => {
        l(), y(+k, {
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
    }, ze(e, yC)), {
      default: () => [p(), b(), f(), m()]
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
      return () => h(zh, De(e, {
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
    } : e, zs.open(_e({}, bC, e)), zs
  },
  _C = J(zh);

function kC() {
  return Array(26).fill("").map((n, o) => String.fromCharCode(65 + o))
}
const [Hh, al] = Y("index-bar"), TC = {
  sticky: j,
  zIndex: G,
  teleport: [String, Object],
  highlightColor: String,
  stickyOffsetTop: lt(0),
  indexList: {
    type: Array,
    default: kC
  }
}, Uh = Symbol(Hh);
var SC = K({
  name: Hh,
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
      } = Tt(Uh);
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
      g = (T, R) => {
        for (let D = c.length - 1; D >= 0; D--) {
          const S = D > 0 ? R[D - 1].height : 0,
            I = e.sticky ? S + e.stickyOffsetTop : 0;
          if (T + I >= R[D].top) return D
        }
        return -1
      },
      v = T => c.find(R => String(R.index) === T),
      b = () => {
        if (Do(o)) return;
        const {
          sticky: T,
          indexList: R
        } = e, D = Ln(r.value), S = Ue(r), I = c.map(X => X.getRect(r.value, S));
        let $ = -1;
        if (d) {
          const X = v(d);
          if (X) {
            const ce = X.getRect(r.value, S);
            e.sticky && e.stickyOffsetTop ? $ = g(ce.top - e.stickyOffsetTop, I) : $ = g(ce.top, I)
          }
        } else $ = g(D, I);
        a.value = R[$], T && c.forEach((X, ce) => {
          const {
            state: U,
            $el: te
          } = X;
          if (ce === $ || ce === $ - 1) {
            const ue = te.getBoundingClientRect();
            U.left = ue.left, U.width = ue.width
          } else U.left = null, U.width = null;
          if (ce === $) U.active = !0, U.top = Math.max(e.stickyOffsetTop, I[ce].top - D) + S.top;
          else if (ce === $ - 1 && d === "") {
            const ue = I[$].top - D;
            U.active = ue > 0, U.top = ue + S.top - I[ce].height
          } else U.active = !1
        }), d = ""
      },
      p = () => {
        Oe(b)
      };
    st("scroll", b, {
      target: r,
      passive: !0
    }), at(p), re(() => e.indexList, p), re(a, T => {
      T && t("change", T)
    });
    const w = () => e.indexList.map(T => {
        const R = T === a.value;
        return h("span", {
          class: al("index", {
            active: R
          }),
          style: R ? m.value : void 0,
          "data-index": T
        }, [T])
      }),
      y = T => {
        d = String(T);
        const R = v(d);
        if (R) {
          const D = Ln(r.value),
            S = Ue(r),
            {
              offsetHeight: I
            } = document.documentElement;
          if (R.$el.scrollIntoView(), D === I - S.height) {
            b();
            return
          }
          e.sticky && e.stickyOffsetTop && (Po() === I - S.height ? Ji(Po()) : Ji(Po() - e.stickyOffsetTop)), t("select", R.index)
        }
      },
      C = T => {
        const {
          index: R
        } = T.dataset;
        R && y(R)
      },
      _ = T => {
        C(T.target)
      };
    let k;
    const E = T => {
        if (l.move(T), l.isVertical()) {
          Ge(T);
          const {
            clientX: R,
            clientY: D
          } = T.touches[0], S = document.elementFromPoint(R, D);
          if (S) {
            const {
              index: I
            } = S.dataset;
            I && k !== I && (k = I, C(S))
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
      scrollTo: y
    }), st("touchmove", E, {
      target: s
    }), () => {
      var T;
      return h("div", {
        ref: o,
        class: al()
      }, [e.teleport ? h($o, {
        to: e.teleport
      }, {
        default: () => [B()]
      }) : B(), (T = n.default) == null ? void 0 : T.call(n)])
    }
  }
});
const [xC, AC] = Y("index-anchor"), EC = {
  index: G
};
var IC = K({
  name: xC,
  props: EC,
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
      } = yt(Uh);
    if (!s) return;
    const a = () => n.active && s.props.sticky,
      l = N(() => {
        const {
          zIndex: c,
          highlightColor: u
        } = s.props;
        if (a()) return _e(Un(c), {
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
        return n.rect.height = d.height, c === window || c === document.body ? n.rect.top = d.top + Po() : n.rect.top = d.top + Ln(c) - u.top, n.rect
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
        class: [AC({
          sticky: c
        }), {
          [Cr]: c
        }]
      }, [t.default ? t.default() : e.index])])
    }
  }
});
const PC = J(IC),
  OC = J(SC),
  [RC, Yo, DC] = Y("list"),
  BC = {
    error: Boolean,
    offset: he(300),
    loading: Boolean,
    disabled: Boolean,
    finished: Boolean,
    scroller: Object,
    errorText: String,
    direction: ee("down"),
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
      l = db(),
      r = pi(s),
      c = N(() => e.scroller || r.value),
      u = () => {
        Oe(() => {
          if (o.value || e.finished || e.disabled || e.error || (l == null ? void 0 : l.value) === !1) return;
          const {
            direction: v
          } = e, b = +e.offset, p = Ue(c);
          if (!p.height || Do(s)) return;
          let w = !1;
          const y = Ue(a);
          v === "up" ? w = p.top - y.top <= b : w = y.bottom - p.bottom <= b, w && (o.value = !0, t("update:loading", !0), t("load"))
        })
      },
      d = () => {
        if (e.finished) {
          const v = n.finished ? n.finished() : e.finishedText;
          if (v) return h("div", {
            class: Yo("finished-text")
          }, [v])
        }
      },
      f = () => {
        t("update:error", !1), u()
      },
      m = () => {
        if (e.error) {
          const v = n.error ? n.error() : e.errorText;
          if (v) return h("div", {
            role: "button",
            class: Yo("error-text"),
            tabindex: 0,
            onClick: f
          }, [v])
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
    return re(() => [e.loading, e.finished, e.error], u), l && re(l, v => {
      v && u()
    }), lf(() => {
      o.value = e.loading
    }), at(() => {
      e.immediateCheck && u()
    }), $e({
      check: u
    }), st("scroll", u, {
      target: c,
      passive: !0
    }), () => {
      var v;
      const b = (v = n.default) == null ? void 0 : v.call(n),
        p = h("div", {
          ref: a,
          class: Yo("placeholder")
        }, null);
      return h("div", {
        ref: s,
        role: "feed",
        class: Yo(),
        "aria-busy": o.value
      }, [e.direction === "down" ? b : p, g(), d(), m(), e.direction === "up" ? b : p])
    }
  }
});
const MC = J($C),
  [LC, En] = Y("nav-bar"),
  NC = {
    title: String,
    fixed: Boolean,
    zIndex: G,
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
        } = e, v = Un(g), b = e.leftArrow || e.leftText || n.left, p = e.rightText || n.right;
        return h("div", {
          ref: o,
          style: v,
          class: [En({
            fixed: f
          }), {
            [Cr]: m,
            "van-safe-area-top": e.safeAreaInsetTop
          }]
        }, [h("div", {
          class: En("content")
        }, [b && h("div", {
          class: [En("left", {
            disabled: e.leftDisabled
          }), e.clickable && !e.leftDisabled ? _t : ""],
          onClick: a
        }, [r()]), h("div", {
          class: [En("title"), "van-ellipsis"]
        }, [n.title ? n.title() : d]), p && h("div", {
          class: [En("right", {
            disabled: e.rightDisabled
          }), e.clickable && !e.rightDisabled ? _t : ""],
          onClick: l
        }, [c()])])])
      };
    return () => e.fixed && e.placeholder ? s(u) : u()
  }
});
const VC = J(FC),
  [zC, Ai] = Y("notice-bar"),
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
          class: Ai("left-icon"),
          name: e.leftIcon
        }, null)
      },
      d = () => {
        if (e.mode === "closeable") return "cross";
        if (e.mode === "link") return "arrow"
      },
      f = p => {
        e.mode === "closeable" && (c.show = !1, t("close", p))
      },
      m = () => {
        if (n["right-icon"]) return n["right-icon"]();
        const p = d();
        if (p) return h(Pe, {
          name: p,
          class: Ai("right-icon"),
          onClick: f
        }, null)
      },
      g = () => {
        c.offset = o, c.duration = 0, wt(() => {
          so(() => {
            c.offset = -s, c.duration = (s + o) / +e.speed, t("replay")
          })
        })
      },
      v = () => {
        const p = e.scrollable === !1 && !e.wrapable,
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
            "van-ellipsis": p
          }],
          onTransitionend: g
        }, [n.default ? n.default() : e.text])])
      },
      b = () => {
        const {
          delay: p,
          speed: w,
          scrollable: y
        } = e, C = Fe(p) ? +p * 1e3 : 0;
        o = 0, s = 0, c.offset = 0, c.duration = 0, clearTimeout(a), a = setTimeout(() => {
          if (!l.value || !r.value || y === !1) return;
          const _ = Ue(l).width,
            k = Ue(r).width;
          (y || k > _) && so(() => {
            o = _, s = k, c.offset = -s, c.duration = s / +w
          })
        }, C)
      };
    return Ca(b), yi(b), st("pageshow", b), $e({
      reset: b
    }), re(() => [e.text, e.scrollable], b), () => {
      const {
        color: p,
        wrapable: w,
        background: y
      } = e;
      return rt(h("div", {
        role: "alert",
        class: Ai({
          wrapable: w
        }),
        style: {
          color: p,
          background: y
        }
      }, [u(), v(), m()]), [
        [dt, c.show]
      ])
    }
  }
});
const WC = J(UC),
  [jC, QC] = Y("notify"),
  KC = ["lockScroll", "position", "show", "teleport", "zIndex"],
  YC = _e({}, bi, {
    type: ee("danger"),
    color: String,
    message: G,
    position: ee("top"),
    className: et,
    background: String,
    lockScroll: Boolean
  });
var Wh = K({
  name: jC,
  props: YC,
  emits: ["update:show"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = s => t("update:show", s);
    return () => h(cn, De({
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
let Su, ai;
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
      return () => h(Wh, De(e, {
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

function Bo(e) {
  if (Vt) return ai || GC(), e = _e({}, XC, qC(e)), ai.open(e), clearTimeout(Su), e.duration > 0 && (Su = setTimeout(JC, e.duration)), ai
}
const e_ = J(Wh),
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
    text: G,
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
  theme: ee("default"),
  zIndex: G,
  teleport: [String, Object],
  maxlength: he(1 / 0),
  modelValue: ee(""),
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
        const p = Array(9).fill("").map((w, y) => ({
          text: y + 1
        }));
        return e.randomKeyOrder && a_(p), p
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
        const p = a(),
          {
            extraKey: w
          } = e,
          y = Array.isArray(w) ? w : [w];
        return y.length === 0 ? p.push({
          text: 0,
          wider: !0
        }) : y.length === 1 ? p.push({
          text: 0,
          wider: !0
        }, {
          text: y[0],
          type: "extra"
        }) : y.length === 2 && p.push({
          text: y[0],
          type: "extra"
        }, {
          text: 0
        }, {
          text: y[1],
          type: "extra"
        }), p
      },
      c = N(() => e.theme === "custom" ? r() : l()),
      u = () => {
        e.show && t("blur")
      },
      d = () => {
        t("close"), e.blurOnClose && u()
      },
      f = () => t(e.show ? "show" : "hide"),
      m = (p, w) => {
        if (p === "") {
          w === "extra" && u();
          return
        }
        const y = e.modelValue;
        w === "delete" ? (t("delete"), t("update:modelValue", y.slice(0, y.length - 1))) : w === "close" ? d() : y.length < +e.maxlength && (t("input", p), t("update:modelValue", y + p))
      },
      g = () => {
        const {
          title: p,
          theme: w,
          closeButtonText: y
        } = e, C = n["title-left"], _ = y && w === "default";
        if (p || _ || C) return h("div", {
          class: Gn("header")
        }, [C && h("span", {
          class: Gn("title-left")
        }, [C()]), p && h("h2", {
          class: Gn("title")
        }, [p]), _ && h("button", {
          type: "button",
          class: [Gn("close"), _t],
          onClick: d
        }, [y])])
      },
      v = () => c.value.map(p => {
        const w = {};
        return p.type === "delete" && (w.default = n.delete), p.type === "extra" && (w.default = n["extra-key"]), h(ll, {
          key: p.text,
          text: p.text,
          type: p.type,
          wider: p.wider,
          color: p.color,
          onPress: m
        }, w)
      }),
      b = () => {
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
    return re(() => e.show, p => {
      e.transition || t(p ? "show" : "hide")
    }), e.hideOnClickOutside && ba(s, u, {
      eventName: "touchstart"
    }), () => {
      const p = g(),
        w = h(ya, {
          name: e.transition ? "van-slide-up" : ""
        }, {
          default: () => [rt(h("div", De({
            ref: s,
            style: Un(e.zIndex),
            class: Gn({
              unfit: !e.safeAreaInsetBottom,
              "with-title": !!p
            }),
            onAnimationend: f,
            onTouchstartPassive: br
          }, o), [p, h("div", {
            class: Gn("body")
          }, [h("div", {
            class: Gn("keys")
          }, [v()]), b()])]), [
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
const r_ = J(l_),
  [c_, qo, xu] = Y("pagination"),
  rl = (e, t, n) => ({
    number: e,
    text: t,
    active: n
  }),
  u_ = {
    mode: ee("multi"),
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
            forceEllipses: v
          } = e;
        let b = 1,
          p = f;
        const w = m < f;
        w && (b = Math.max(g - Math.floor(m / 2), 1), p = b + m - 1, p > f && (p = f, b = p - m + 1));
        for (let y = b; y <= p; y++) {
          const C = rl(y, y, y === g);
          d.push(C)
        }
        if (w && m > 0 && v) {
          if (b > 1) {
            const y = rl(b - 1, "...");
            d.unshift(y)
          }
          if (p < f) {
            const y = rl(p + 1, "...");
            d.push(y)
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
          v = f === 1;
        return h("li", {
          class: [qo("item", {
            disabled: v,
            border: d === "simple",
            prev: !0
          }), Vi]
        }, [h("button", {
          type: "button",
          disabled: v,
          onClick: () => a(f - 1, !0)
        }, [g ? g() : e.prevText || xu("prev")])])
      },
      c = () => {
        const {
          mode: d,
          modelValue: f,
          showNextButton: m
        } = e;
        if (!m) return;
        const g = n["next-text"],
          v = f === o.value;
        return h("li", {
          class: [qo("item", {
            disabled: v,
            border: d === "simple",
            next: !0
          }), Vi]
        }, [h("button", {
          type: "button",
          disabled: v,
          onClick: () => a(f + 1, !0)
        }, [g ? g() : e.nextText || xu("next")])])
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
const f_ = J(d_),
  [h_, Ei] = Y("password-input"),
  m_ = {
    info: String,
    mask: j,
    value: ee(""),
    gutter: G,
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
          let v;
          d !== 0 && r && (v = {
            marginLeft: Ie(r)
          }), s.push(h("li", {
            class: [{
              [Uf]: m
            }, Ei("item", {
              focus: g
            })],
            style: v
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
          [Vi]: !e.gutter
        }],
        onTouchstartPassive: n
      }, [o()]), s && h("div", {
        class: Ei(e.errorInfo ? "error-info" : "info")
      }, [s])])
    }
  }
});
const v_ = J(g_),
  y_ = J(Cb);

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

function jh(e) {
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

function Qh(e) {
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
  return e === dn(e) || !nn(e) ? Qh(e) : b_(e)
}

function Nn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null
}

function Pa(e) {
  return ((Fr(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function C_(e) {
  return ea(Pa(e)).left + Qh(e).scrollLeft
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

function zr(e) {
  return Nn(e) === "html" ? e : e.assignedSlot || e.parentNode || (jh(e) ? e.host : null) || Pa(e)
}

function Kh(e) {
  return ["html", "body", "#document"].indexOf(Nn(e)) >= 0 ? e.ownerDocument.body : nn(e) && Vr(e) ? e : Kh(zr(e))
}

function Hs(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Kh(e),
    s = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
    a = dn(o),
    l = s ? [a].concat(a.visualViewport || [], Vr(o) ? o : []) : o,
    r = t.concat(l);
  return s ? r : r.concat(Hs(zr(l)))
}

function S_(e) {
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
  for (jh(s) && (s = s.host); nn(s) && ["html", "body"].indexOf(Nn(s)) < 0;) {
    var a = Fn(s);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return s;
    s = s.parentNode
  }
  return null
}

function Yh(e) {
  for (var t = dn(e), n = Au(e); n && S_(n) && Fn(n).position === "static";) n = Au(n);
  return n && (Nn(n) === "html" || Nn(n) === "body" && Fn(n).position === "static") ? t : n || x_(e) || t
}
var li = "top",
  ta = "bottom",
  ts = "right",
  Oo = "left",
  qh = "auto",
  A_ = [li, ta, ts, Oo],
  Gh = "start",
  na = "end",
  E_ = [].concat(A_, [qh]).reduce(function(e, t) {
    return e.concat([t, t + "-" + Gh, t + "-" + na])
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
var ko = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
  z_ = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
  Eu = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];

function H_(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Eu).filter(function(n, o, s) {
      return s.indexOf(n) === o
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(Zn(ko, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Zn(ko, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Wl.indexOf(t.phase) < 0 && console.error(Zn(ko, t.name, '"phase"', "either " + Wl.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Zn(ko, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Zn(ko, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Zn(ko, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Zn(ko, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Eu.map(function(o) {
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

function Zh(e) {
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
    a = o ? Zh(o) : null,
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
    case Oo:
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
      case Gh:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case na:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break
    }
  }
  return c
}
var Iu = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",
  K_ = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",
  Pu = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

function Ou() {
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
    a = s === void 0 ? Pu : s;
  return function(r, c, u) {
    u === void 0 && (u = a);
    var d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Pu, a),
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
          var y = typeof w == "function" ? w(d.options) : w;
          b(), d.options = Object.assign({}, a, d.options, y), d.scrollParents = {
            reference: Fr(r) ? Hs(r) : r.contextElement ? Hs(r.contextElement) : [],
            popper: Hs(c)
          };
          var C = F_(W_([].concat(o, d.options.modifiers)));
          d.orderedModifiers = C.filter(function(S) {
            return S.enabled
          });
          {
            var _ = U_([].concat(C, d.options.modifiers), function(S) {
              var I = S.name;
              return I
            });
            if (H_(_), Oa(d.options.placement) === qh) {
              var k = d.orderedModifiers.find(function(S) {
                var I = S.name;
                return I === "flip"
              });
              k || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "))
            }
            var E = Fn(c),
              B = E.marginTop,
              T = E.marginRight,
              R = E.marginBottom,
              D = E.marginLeft;
            [B, T, R, D].some(function(S) {
              return parseFloat(S)
            }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "))
          }
          return v(), g.update()
        },
        forceUpdate: function() {
          if (!m) {
            var w = d.elements,
              y = w.reference,
              C = w.popper;
            if (!Ou(y, C)) {
              console.error(Iu);
              return
            }
            d.rects = {
              reference: k_(y, Yh(C), d.options.strategy === "fixed"),
              popper: T_(C)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(S) {
              return d.modifiersData[S.name] = Object.assign({}, S.data)
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
              var E = d.orderedModifiers[k],
                B = E.fn,
                T = E.options,
                R = T === void 0 ? {} : T,
                D = E.name;
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
          return new Promise(function(p) {
            g.forceUpdate(), p(d)
          })
        }),
        destroy: function() {
          b(), m = !0
        }
      };
    if (!Ou(r, c)) return console.error(Iu), g;
    g.setOptions(u).then(function(p) {
      !m && u.onFirstUpdate && u.onFirstUpdate(p)
    });

    function v() {
      d.orderedModifiers.forEach(function(p) {
        var w = p.name,
          y = p.options,
          C = y === void 0 ? {} : y,
          _ = p.effect;
        if (typeof _ == "function") {
          var k = _({
              state: d,
              name: w,
              instance: g,
              options: C
            }),
            E = function() {};
          f.push(k || E)
        }
      })
    }

    function b() {
      f.forEach(function(p) {
        return p()
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

function Ru(e) {
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
    v = l.y,
    b = v === void 0 ? 0 : v,
    p = typeof d == "function" ? d({
      x: g,
      y: b
    }) : {
      x: g,
      y: b
    };
  g = p.x, b = p.y;
  var w = l.hasOwnProperty("x"),
    y = l.hasOwnProperty("y"),
    C = Oo,
    _ = li,
    k = window;
  if (u) {
    var E = Yh(n),
      B = "clientHeight",
      T = "clientWidth";
    if (E === dn(n) && (E = Pa(n), Fn(E).position !== "static" && r === "absolute" && (B = "scrollHeight", T = "scrollWidth")), E = E, s === li || (s === Oo || s === ts) && a === na) {
      _ = ta;
      var R = f && E === k && k.visualViewport ? k.visualViewport.height : E[B];
      b -= R - o.height, b *= c ? 1 : -1
    }
    if (s === Oo || (s === li || s === ta) && a === na) {
      C = ts;
      var D = f && E === k && k.visualViewport ? k.visualViewport.width : E[T];
      g -= D - o.width, g *= c ? 1 : -1
    }
  }
  var S = Object.assign({
      position: r
    }, u && J_),
    I = d === !0 ? ek({
      x: g,
      y: b
    }) : {
      x: g,
      y: b
    };
  if (g = I.x, b = I.y, c) {
    var $;
    return Object.assign({}, S, ($ = {}, $[_] = y ? "0" : "", $[C] = w ? "0" : "", $.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + b + "px)" : "translate3d(" + g + "px, " + b + "px, 0)", $))
  }
  return Object.assign({}, S, (t = {}, t[_] = y ? b + "px" : "", t[C] = w ? g + "px" : "", t.transform = "", t))
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
    variation: Zh(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ru(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ru(Object.assign({}, d, {
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
    s = [Oo, li].indexOf(o) >= 0 ? -1 : 1,
    a = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n,
    l = a[0],
    r = a[1];
  return l = l || 0, r = (r || 0) * s, [Oo, ts].indexOf(o) >= 0 ? {
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
    l = E_.reduce(function(d, f) {
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
  theme: ee("light"),
  overlay: Boolean,
  actions: Ze(),
  actionsDirection: ee("vertical"),
  trigger: ee("click"),
  duration: G,
  showArrow: j,
  placement: ee("bottom"),
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
      c = Sr(() => e.show, y => t("update:show", y)),
      u = () => ({
        placement: e.placement,
        modifiers: [{
          name: "computeStyles",
          options: {
            adaptive: !1,
            gpuAcceleration: !1
          }
        }, _e({}, uk, {
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
      m = y => {
        c.value = y
      },
      g = () => {
        e.trigger === "click" && (c.value = !c.value)
      },
      v = (y, C) => {
        y.disabled || (t("select", y, C), e.closeOnClickAction && (c.value = !1))
      },
      b = () => {
        c.value && e.closeOnClickOutside && (!e.overlay || e.closeOnClickOverlay) && (c.value = !1)
      },
      p = (y, C) => n.action ? n.action({
        action: y,
        index: C
      }) : [y.icon && h(Pe, {
        name: y.icon,
        classPrefix: e.iconPrefix,
        class: To("action-icon")
      }, null), h("div", {
        class: [To("action-text"), {
          [Cr]: e.actionsDirection === "vertical"
        }]
      }, [y.text])],
      w = (y, C) => {
        const {
          icon: _,
          color: k,
          disabled: E,
          className: B
        } = y;
        return h("div", {
          role: "menuitem",
          class: [To("action", {
            disabled: E,
            "with-icon": _
          }), {
            [qy]: e.actionsDirection === "horizontal"
          }, B],
          style: {
            color: k
          },
          tabindex: E ? void 0 : 0,
          "aria-disabled": E || void 0,
          onClick: () => v(y, C)
        }, [p(y, C)])
      };
    return at(() => {
      f(), vi(() => {
        var y;
        a.value = (y = r.value) == null ? void 0 : y.popupRef.value
      })
    }), kn(() => {
      s && (Vt && (window.removeEventListener("animationend", f), window.removeEventListener("transitionend", f)), s.destroy(), s = null)
    }), re(() => [c.value, e.offset, e.placement], f), ba([l, a], b, {
      eventName: "touchstart"
    }), () => {
      var y;
      return h(Be, null, [h("span", {
        ref: l,
        class: To("wrapper"),
        onClick: g
      }, [(y = n.reference) == null ? void 0 : y.call(n)]), h(cn, De({
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
const gk = J(mk),
  [vk, cl] = Y("progress"),
  yk = {
    color: String,
    inactive: Boolean,
    pivotText: String,
    textColor: String,
    showPivot: j,
    pivotColor: String,
    trackColor: String,
    strokeWidth: G,
    percentage: {
      type: G,
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
const bk = J(pk),
  [wk, Ii, Ck] = Y("pull-refresh"),
  Xh = 50,
  _k = ["pulling", "loosing", "success"],
  kk = {
    disabled: Boolean,
    modelValue: Boolean,
    headHeight: he(Xh),
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    pullDistance: G,
    successDuration: he(500),
    animationDuration: he(300)
  };
var Tk = K({
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
        if (e.headHeight !== Xh) return {
          height: `${e.headHeight}px`
        }
      },
      d = () => r.status !== "loading" && r.status !== "success" && !e.disabled,
      f = _ => {
        const k = +(e.pullDistance || e.headHeight);
        return _ > k && (_ < k * 2 ? _ = k + (_ - k) / 2 : _ = k * 1.5 + (_ - k * 2) / 4), Math.round(_)
      },
      m = (_, k) => {
        const E = +(e.pullDistance || e.headHeight);
        r.distance = _, k ? r.status = "loading" : _ === 0 ? r.status = "normal" : _ < E ? r.status = "pulling" : r.status = "loosing", t("change", {
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
      v = () => {
        const {
          status: _,
          distance: k
        } = r;
        if (n[_]) return n[_]({
          distance: k
        });
        const E = [];
        return _k.includes(_) && E.push(h("div", {
          class: Ii("text")
        }, [g()])), _ === "loading" && E.push(h(rn, {
          class: Ii("loading")
        }, {
          default: g
        })), E
      },
      b = () => {
        r.status = "success", setTimeout(() => {
          m(0)
        }, +e.successDuration)
      },
      p = _ => {
        o = Ln(l.value) === 0, o && (r.duration = 0, c.start(_))
      },
      w = _ => {
        d() && p(_)
      },
      y = _ => {
        if (d()) {
          o || p(_);
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
      r.duration = +e.animationDuration, _ ? m(+e.headHeight, !0) : n.success || e.successText ? b() : m(0, !1)
    }), st("touchmove", y, {
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
      }, [v()]), (_ = n.default) == null ? void 0 : _.call(n)])])
    }
  }
});
const Sk = J(Tk),
  [xk, Ds] = Y("rate");

function Ak(e, t, n, o) {
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
const Ek = {
  size: G,
  icon: ee("star"),
  color: String,
  count: he(5),
  gutter: G,
  clearable: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  voidIcon: ee("star-o"),
  allowHalf: Boolean,
  voidColor: String,
  touchable: j,
  iconPrefix: String,
  modelValue: lt(0),
  disabledColor: String
};
var Ik = K({
  name: xk,
  props: Ek,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t
  }) {
    const n = Kt(),
      [o, s] = ls(),
      a = F(),
      l = N(() => e.readonly || e.disabled),
      r = N(() => l.value || !e.touchable),
      c = N(() => Array(+e.count).fill("").map((C, _) => Ak(e.modelValue, _ + 1, e.allowHalf, e.readonly)));
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
      v = (C, _) => {
        for (let k = u.length - 1; k > 0; k--)
          if (_ >= d.top && _ <= d.bottom) {
            if (C > u[k].left && _ >= u[k].top && _ <= u[k].top + u[k].height) return u[k].score
          } else {
            const E = _ < d.top ? f : m;
            if (C > u[k].left && u[k].top === E) return u[k].score
          } return e.allowHalf ? .5 : 1
      },
      b = C => {
        l.value || C === e.modelValue || (t("update:modelValue", C), t("change", C))
      },
      p = C => {
        r.value || (n.start(C), g())
      },
      w = C => {
        if (!r.value && (n.move(C), n.isHorizontal() && !n.isTap.value)) {
          const {
            clientX: _,
            clientY: k
          } = C.touches[0];
          Ge(C), b(v(_, k))
        }
      },
      y = (C, _) => {
        const {
          icon: k,
          size: E,
          color: B,
          count: T,
          gutter: R,
          voidIcon: D,
          disabled: S,
          voidColor: I,
          allowHalf: $,
          iconPrefix: X,
          disabledColor: ce
        } = e, U = _ + 1, te = C.status === "full", ue = C.status === "void", Re = $ && C.value > 0 && C.value < 1;
        let Ne;
        R && U !== +T && (Ne = {
          paddingRight: Ie(R)
        });
        const V = Z => {
          g();
          let ve = $ ? v(Z.clientX, Z.clientY) : U;
          e.clearable && n.isTap.value && ve === e.modelValue && (ve = 0), b(ve)
        };
        return h("div", {
          key: _,
          ref: s(_),
          role: "radio",
          style: Ne,
          class: Ds("item"),
          tabindex: S ? void 0 : 0,
          "aria-setsize": T,
          "aria-posinset": U,
          "aria-checked": !ue,
          onClick: V
        }, [h(Pe, {
          size: E,
          name: te ? k : D,
          class: Ds("icon", {
            disabled: S,
            full: te
          }),
          color: S ? ce : te ? B : I,
          classPrefix: X
        }, null), Re && h(Pe, {
          size: E,
          style: {
            width: C.value + "em"
          },
          name: ue ? D : k,
          class: Ds("icon", ["half", {
            disabled: S,
            full: !ue
          }]),
          color: S ? ce : ue ? I : B,
          classPrefix: X
        }, null)])
      };
    return go(() => e.modelValue), st("touchmove", w, {
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
      onTouchstartPassive: p
    }, [c.value.map(y)])
  }
});
const Pk = J(Ik),
  Ok = {
    figureArr: Ze(),
    delay: Number,
    duration: lt(2),
    isStart: Boolean,
    direction: ee("down"),
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
  direction: ee("down"),
  stopOrder: ee("ltr"),
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
          v = [];
        for (let b = m; b <= 9; b++) v.push(b);
        for (let b = 0; b <= Lk; b++)
          for (let p = 0; p <= 9; p++) v.push(p);
        for (let b = 0; b <= g; b++) v.push(b);
        return v
      },
      r = (f, m) => e.stopOrder === "ltr" ? .2 * f : .2 * (m - 1 - f),
      c = F(e.autoStart),
      u = () => {
        c.value = !0
      },
      d = () => {
        c.value = !1, e.autoStart && wt(() => u())
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
const Fk = J(Nk),
  Vk = J(I1),
  [zk, Pi, Hk] = Y("search"),
  Uk = _e({}, Ir, {
    label: String,
    shape: ee("square"),
    leftIcon: ee("search"),
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
      v = k => t("focus", k),
      b = k => t("clear", k),
      p = k => t("clickInput", k),
      w = k => t("clickLeftIcon", k),
      y = k => t("clickRightIcon", k),
      C = Object.keys(Ir),
      _ = () => {
        const k = _e({}, o, ze(e, C), {
            id: c()
          }),
          E = B => t("update:modelValue", B);
        return h($n, De({
          ref: a,
          type: "search",
          class: Pi("field", {
            "with-message": k.errorMessage
          }),
          border: !1,
          onBlur: g,
          onFocus: v,
          onClear: b,
          onKeypress: r,
          onClickInput: p,
          onClickLeftIcon: w,
          onClickRightIcon: y,
          "onUpdate:modelValue": E
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
const jk = J(Wk),
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
  Zk = _e({}, bi, {
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
          name: v,
          icon: b,
          className: p,
          description: w
        } = m;
        return h("div", {
          role: "button",
          tabindex: 0,
          class: [Gt("option"), p, _t],
          onClick: () => a(m, g)
        }, [r(b), v && h("span", {
          class: Gt("name")
        }, [v]), w && h("span", {
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
        return Array.isArray(m[0]) ? m.map((g, v) => u(g, v !== 0)) : u(m)
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
    return () => h(cn, De({
      class: Gt(),
      position: "bottom",
      "onUpdate:show": o
    }, ze(e, Kk)), {
      default: () => [l(), d(), f()]
    })
  }
});
const Jk = J(Xk),
  [Jh, eT] = Y("sidebar"),
  em = Symbol(Jh),
  tT = {
    modelValue: he(0)
  };
var nT = K({
  name: Jh,
  props: tT,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      linkChildren: o
    } = Tt(em), s = () => +e.modelValue;
    return o({
      getActive: s,
      setActive: l => {
        l !== s() && (t("update:modelValue", l), t("change", l))
      }
    }), () => {
      var l;
      return h("div", {
        role: "tablist",
        class: eT()
      }, [(l = n.default) == null ? void 0 : l.call(n)])
    }
  }
});
const tm = J(nT),
  [oT, Du] = Y("sidebar-item"),
  iT = _e({}, yo, {
    dot: Boolean,
    title: String,
    badge: G,
    disabled: Boolean,
    badgeProps: Object
  });
var sT = K({
  name: oT,
  props: iT,
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = Mo(),
      {
        parent: s,
        index: a
      } = yt(em);
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
        class: Du({
          select: f,
          disabled: d
        }),
        tabindex: d ? void 0 : 0,
        "aria-selected": f,
        onClick: l
      }, [h(Lo, De({
        dot: r,
        class: Du("text"),
        content: c
      }, e.badgeProps), {
        default: () => [n.title ? n.title() : u]
      })])
    }
  }
});
const nm = J(sT),
  [aT, dl, Bu] = Y("signature"),
  lT = {
    tips: String,
    type: ee("png"),
    penColor: ee("#000"),
    lineWidth: lt(3),
    clearButtonText: String,
    backgroundColor: ee(""),
    confirmButtonText: String
  },
  rT = () => {
    var e;
    const t = document.createElement("canvas");
    return !!((e = t.getContext) != null && e.call(t, "2d"))
  };
var cT = K({
  name: aT,
  props: lT,
  emits: ["submit", "clear", "start", "end", "signing"],
  setup(e, {
    emit: t
  }) {
    const n = F(),
      o = F(),
      s = N(() => n.value ? n.value.getContext("2d") : null),
      a = Vt ? rT() : !0;
    let l = 0,
      r = 0,
      c;
    const u = () => {
        if (!s.value) return !1;
        s.value.beginPath(), s.value.lineWidth = e.lineWidth, s.value.strokeStyle = e.penColor, c = Ue(n), t("start")
      },
      d = y => {
        if (!s.value) return !1;
        Ge(y);
        const C = y.touches[0],
          _ = C.clientX - ((c == null ? void 0 : c.left) || 0),
          k = C.clientY - ((c == null ? void 0 : c.top) || 0);
        s.value.lineCap = "round", s.value.lineJoin = "round", s.value.lineTo(_, k), s.value.stroke(), t("signing", y)
      },
      f = y => {
        Ge(y), t("end")
      },
      m = y => {
        const C = document.createElement("canvas");
        if (C.width = y.width, C.height = y.height, e.backgroundColor) {
          const _ = C.getContext("2d");
          g(_)
        }
        return y.toDataURL() === C.toDataURL()
      },
      g = y => {
        y && e.backgroundColor && (y.fillStyle = e.backgroundColor, y.fillRect(0, 0, l, r))
      },
      v = () => {
        var y, C;
        const _ = n.value;
        if (!_) return;
        const E = m(_) ? "" : ((C = (y = {
          jpg: () => _.toDataURL("image/jpeg", .8),
          jpeg: () => _.toDataURL("image/jpeg", .8)
        })[e.type]) == null ? void 0 : C.call(y)) || _.toDataURL(`image/${e.type}`);
        t("submit", {
          image: E,
          canvas: _
        })
      },
      b = () => {
        s.value && (s.value.clearRect(0, 0, l, r), s.value.closePath(), g(s.value)), t("clear")
      },
      p = () => {
        var y, C, _;
        if (a && n.value) {
          const k = n.value,
            E = Vt ? window.devicePixelRatio : 1;
          l = k.width = (((y = o.value) == null ? void 0 : y.offsetWidth) || 0) * E, r = k.height = (((C = o.value) == null ? void 0 : C.offsetHeight) || 0) * E, (_ = s.value) == null || _.scale(E, E), g(s.value)
        }
      },
      w = () => {
        if (s.value) {
          const y = s.value.getImageData(0, 0, l, r);
          p(), s.value.putImageData(y, 0, 0)
        }
      };
    return re(tn, w), at(p), $e({
      resize: w,
      clear: b,
      submit: v
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
    }, [h(kt, {
      size: "small",
      onClick: b
    }, {
      default: () => [e.clearButtonText || Bu("clear")]
    }), h(kt, {
      type: "primary",
      size: "small",
      onClick: v
    }, {
      default: () => [e.confirmButtonText || Bu("confirm")]
    })])])
  }
});
const uT = J(cT),
  [dT, fT] = Y("skeleton-title"),
  hT = {
    round: Boolean,
    titleWidth: G
  };
var mT = K({
  name: dT,
  props: hT,
  setup(e) {
    return () => h("h3", {
      class: fT([{
        round: e.round
      }]),
      style: {
        width: Ie(e.titleWidth)
      }
    }, null)
  }
});
const om = J(mT);
var gT = om;
const [vT, yT] = Y("skeleton-avatar"), pT = {
  avatarSize: G,
  avatarShape: ee("round")
};
var bT = K({
  name: vT,
  props: pT,
  setup(e) {
    return () => h("div", {
      class: yT([e.avatarShape]),
      style: Hn(e.avatarSize)
    }, null)
  }
});
const im = J(bT);
var wT = im;
const Hr = "100%",
  CT = {
    round: Boolean,
    rowWidth: {
      type: G,
      default: Hr
    }
  },
  [_T, kT] = Y("skeleton-paragraph");
var TT = K({
  name: _T,
  props: CT,
  setup(e) {
    return () => h("div", {
      class: kT([{
        round: e.round
      }]),
      style: {
        width: e.rowWidth
      }
    }, null)
  }
});
const sm = J(TT);
var ST = sm;
const [xT, $u] = Y("skeleton"), AT = "60%", ET = {
  row: he(0),
  round: Boolean,
  title: Boolean,
  titleWidth: G,
  avatar: Boolean,
  avatarSize: G,
  avatarShape: ee("round"),
  loading: j,
  animate: j,
  rowWidth: {
    type: [Number, String, Array],
    default: Hr
  }
};
var IT = K({
  name: xT,
  inheritAttrs: !1,
  props: ET,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const o = () => {
        if (e.avatar) return h(wT, {
          avatarShape: e.avatarShape,
          avatarSize: e.avatarSize
        }, null)
      },
      s = () => {
        if (e.title) return h(gT, {
          round: e.round,
          titleWidth: e.titleWidth
        }, null)
      },
      a = c => {
        const {
          rowWidth: u
        } = e;
        return u === Hr && c === +e.row - 1 ? AT : Array.isArray(u) ? u[c] : u
      },
      l = () => Array(+e.row).fill("").map((c, u) => h(ST, {
        key: u,
        round: e.round,
        rowWidth: Ie(a(u))
      }, null)),
      r = () => t.template ? t.template() : h(Be, null, [o(), h("div", {
        class: $u("content")
      }, [s(), l()])]);
    return () => {
      var c;
      return e.loading ? h("div", De({
        class: $u({
          animate: e.animate,
          round: e.round
        })
      }, n), [r()]) : (c = t.default) == null ? void 0 : c.call(t)
    }
  }
});
const PT = J(IT),
  [OT, Mu] = Y("skeleton-image"),
  RT = {
    imageSize: G,
    imageShape: ee("square")
  };
var DT = K({
  name: OT,
  props: RT,
  setup(e) {
    return () => h("div", {
      class: Mu([e.imageShape]),
      style: Hn(e.imageSize)
    }, [h(Pe, {
      name: "photo",
      class: Mu("icon")
    }, null)])
  }
});
const BT = J(DT),
  [$T, Oi] = Y("slider"),
  MT = {
    min: he(0),
    max: he(100),
    step: he(1),
    range: Boolean,
    reverse: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    vertical: Boolean,
    barHeight: G,
    buttonSize: G,
    activeColor: String,
    inactiveColor: String,
    modelValue: {
      type: [Number, Array],
      default: 0
    }
  };
var LT = K({
  name: $T,
  props: MT,
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
        const S = e.vertical ? "width" : "height";
        return {
          background: e.inactiveColor,
          [S]: Ie(e.barHeight)
        }
      }),
      m = S => e.range && Array.isArray(S),
      g = () => {
        const {
          modelValue: S,
          min: I
        } = e;
        return m(S) ? `${(S[1]-S[0])*100/d.value}%` : `${(S-Number(I))*100/d.value}%`
      },
      v = () => {
        const {
          modelValue: S,
          min: I
        } = e;
        return m(S) ? `${(S[0]-Number(I))*100/d.value}%` : "0%"
      },
      b = N(() => {
        const I = {
          [e.vertical ? "height" : "width"]: g(),
          background: e.activeColor
        };
        c.value && (I.transition = "none");
        const $ = () => e.vertical ? e.reverse ? "bottom" : "top" : e.reverse ? "right" : "left";
        return I[$()] = v(), I
      }),
      p = S => {
        const I = +e.min,
          $ = +e.max,
          X = +e.step;
        S = ht(S, I, $);
        const ce = Math.round((S - I) / X) * X;
        return Ff(I, ce)
      },
      w = () => {
        const S = e.modelValue;
        m(S) ? a = S.map(p) : a = p(S)
      },
      y = S => {
        var I, $;
        const X = (I = S[0]) != null ? I : Number(e.min),
          ce = ($ = S[1]) != null ? $ : Number(e.max);
        return X > ce ? [ce, X] : [X, ce]
      },
      C = (S, I) => {
        m(S) ? S = y(S).map(p) : S = p(S), pn(S, e.modelValue) || t("update:modelValue", S), I && !pn(S, a) && t("change", S)
      },
      _ = S => {
        if (S.stopPropagation(), e.disabled || e.readonly) return;
        w();
        const {
          min: I,
          reverse: $,
          vertical: X,
          modelValue: ce
        } = e, U = Ue(l), te = () => X ? $ ? U.bottom - S.clientY : S.clientY - U.top : $ ? U.right - S.clientX : S.clientX - U.left, ue = X ? U.height : U.width, Re = Number(I) + te() / ue * d.value;
        if (m(ce)) {
          const [Ne, V] = ce, Z = (Ne + V) / 2;
          Re <= Z ? C([Re, V], !0) : C([Ne, Re], !0)
        } else C(Re, !0)
      },
      k = S => {
        e.disabled || e.readonly || (u.start(S), s = e.modelValue, w(), c.value = "start")
      },
      E = S => {
        if (e.disabled || e.readonly) return;
        c.value === "start" && t("dragStart", S), Ge(S, !0), u.move(S), c.value = "dragging";
        const I = Ue(l),
          $ = e.vertical ? u.deltaY.value : u.deltaX.value,
          X = e.vertical ? I.height : I.width;
        let ce = $ / X * d.value;
        if (e.reverse && (ce = -ce), m(a)) {
          const U = e.reverse ? 1 - o : o;
          s[U] = a[U] + ce
        } else s = a + ce;
        C(s)
      },
      B = S => {
        e.disabled || e.readonly || (c.value === "dragging" && (C(s, !0), t("dragEnd", S)), c.value = "")
      },
      T = S => typeof S == "number" ? Oi("button-wrapper", ["left", "right"][S]) : Oi("button-wrapper", e.reverse ? "left" : "right"),
      R = (S, I) => {
        const $ = c.value === "dragging";
        if (typeof I == "number") {
          const X = n[I === 0 ? "left-button" : "right-button"];
          let ce;
          if ($ && Array.isArray(s) && (ce = s[0] > s[1] ? o ^ 1 : o), X) return X({
            value: S,
            dragging: $,
            dragIndex: ce
          })
        }
        return n.button ? n.button({
          value: S,
          dragging: $
        }) : h("div", {
          class: Oi("button"),
          style: Hn(e.buttonSize)
        }, null)
      },
      D = S => {
        const I = typeof S == "number" ? e.modelValue[S] : e.modelValue;
        return h("div", {
          ref: r[S ?? 0],
          role: "slider",
          class: T(S),
          tabindex: e.disabled ? void 0 : 0,
          "aria-valuemin": e.min,
          "aria-valuenow": I,
          "aria-valuemax": e.max,
          "aria-disabled": e.disabled || void 0,
          "aria-readonly": e.readonly || void 0,
          "aria-orientation": e.vertical ? "vertical" : "horizontal",
          onTouchstartPassive: $ => {
            typeof S == "number" && (o = S), k($)
          },
          onTouchend: B,
          onTouchcancel: B,
          onClick: br
        }, [R(I, S)])
      };
    return C(e.modelValue), go(() => e.modelValue), r.forEach(S => {
      st("touchmove", E, {
        target: S
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
      style: b.value
    }, [e.range ? [D(0), D(1)] : D()])])
  }
});
const NT = J(LT),
  [Lu, FT] = Y("space"),
  VT = {
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

function am(e = []) {
  const t = [];
  return e.forEach(n => {
    Array.isArray(n) ? t.push(...n) : n.type === Be ? t.push(...am(n.children)) : t.push(n)
  }), t.filter(n => {
    var o;
    return !(n && (n.type === vt || n.type === Be && ((o = n.children) == null ? void 0 : o.length) === 0 || n.type === ss && n.children.trim() === ""))
  })
}
var zT = K({
  name: Lu,
  props: VT,
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
      const l = am((a = t.default) == null ? void 0 : a.call(t));
      return h("div", {
        class: [FT({
          [e.direction]: e.direction,
          [`align-${n.value}`]: n.value,
          wrap: e.wrap,
          fill: e.fill
        })]
      }, [l.map((r, c) => h("div", {
        key: `item-${c}`,
        class: `${Lu}-item`,
        style: s(c === l.length - 1)
      }, [r]))])
    }
  }
});
const HT = J(zT),
  [lm, Nu] = Y("steps"),
  UT = {
    active: he(0),
    direction: ee("horizontal"),
    activeIcon: ee("checked"),
    iconPrefix: String,
    finishIcon: String,
    activeColor: String,
    inactiveIcon: String,
    inactiveColor: String
  },
  rm = Symbol(lm);
var WT = K({
  name: lm,
  props: UT,
  emits: ["clickStep"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      linkChildren: o
    } = Tt(rm);
    return o({
      props: e,
      onClickStep: a => t("clickStep", a)
    }), () => {
      var a;
      return h("div", {
        class: Nu([e.direction])
      }, [h("div", {
        class: Nu("items")
      }, [(a = n.default) == null ? void 0 : a.call(n)])])
    }
  }
});
const [jT, Xn] = Y("step");
var QT = K({
  name: jT,
  setup(e, {
    slots: t
  }) {
    const {
      parent: n,
      index: o
    } = yt(rm);
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
          activeColor: v,
          inactiveIcon: b
        } = s;
        return l() ? t["active-icon"] ? t["active-icon"]() : h(Pe, {
          class: Xn("icon", "active"),
          name: g,
          color: v,
          classPrefix: f
        }, null) : a() === "finish" && (m || t["finish-icon"]) ? t["finish-icon"] ? t["finish-icon"]() : h(Pe, {
          class: Xn("icon", "finish"),
          name: m,
          color: v,
          classPrefix: f
        }, null) : t["inactive-icon"] ? t["inactive-icon"]() : b ? h(Pe, {
          class: Xn("icon"),
          name: b,
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
const KT = J(QT),
  [YT, Bs] = Y("stepper"),
  qT = 200,
  $s = (e, t) => String(e) === String(t),
  GT = {
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
    modelValue: G,
    inputWidth: G,
    buttonSize: G,
    placeholder: String,
    disablePlus: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean,
    beforeChange: Function,
    defaultValue: he(1),
    decimalLength: G
  };
var ZT = K({
  name: YT,
  props: GT,
  emits: ["plus", "blur", "minus", "focus", "change", "overlimit", "update:modelValue"],
  setup(e, {
    emit: t
  }) {
    const n = (T, R = !0) => {
        const {
          min: D,
          max: S,
          allowEmpty: I,
          decimalLength: $
        } = e;
        return I && T === "" || (T = Dl(String(T), !e.integer), T = T === "" ? 0 : +T, T = Number.isNaN(T) ? +D : T, T = R ? Math.max(Math.min(+S, T), +D) : T, Fe($) && (T = T.toFixed(+$))), T
      },
      o = () => {
        var T;
        const R = (T = e.modelValue) != null ? T : e.defaultValue,
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
        const T = n(l.value);
        $s(T, l.value) || (l.value = T)
      },
      m = T => {
        e.beforeChange ? vo(e.beforeChange, {
          args: [T],
          done() {
            l.value = T
          }
        }) : l.value = T
      },
      g = () => {
        if (s === "plus" && c.value || s === "minus" && r.value) {
          t("overlimit", s);
          return
        }
        const T = s === "minus" ? -e.step : +e.step,
          R = n(Ff(+l.value, T));
        m(R), t(s)
      },
      v = T => {
        const R = T.target,
          {
            value: D
          } = R,
          {
            decimalLength: S
          } = e;
        let I = Dl(String(D), !e.integer);
        if (Fe(S) && I.includes(".")) {
          const X = I.split(".");
          I = `${X[0]}.${X[1].slice(0,+S)}`
        }
        e.beforeChange ? R.value = String(l.value) : $s(D, I) || (R.value = I);
        const $ = I === String(+I);
        m($ ? +I : I)
      },
      b = T => {
        var R;
        e.disableInput ? (R = a.value) == null || R.blur() : t("focus", T)
      },
      p = T => {
        const R = T.target,
          D = n(R.value, e.autoFixed);
        R.value = String(D), l.value = D, Oe(() => {
          t("blur", T), Lf()
        })
      };
    let w, y;
    const C = () => {
        y = setTimeout(() => {
          g(), C()
        }, qT)
      },
      _ = () => {
        e.longPress && (w = !1, clearTimeout(y), y = setTimeout(() => {
          w = !0, g(), C()
        }, jf))
      },
      k = T => {
        e.longPress && (clearTimeout(y), w && Ge(T))
      },
      E = T => {
        e.disableInput && Ge(T)
      },
      B = T => ({
        onClick: R => {
          Ge(R), s = T, g()
        },
        onTouchstartPassive: () => {
          s = T, _()
        },
        onTouchend: k,
        onTouchcancel: k
      });
    return re(() => [e.max, e.min, e.integer, e.decimalLength], f), re(() => e.modelValue, T => {
      $s(T, l.value) || (l.value = n(T))
    }), re(l, T => {
      t("update:modelValue", T), t("change", T, {
        name: e.name
      })
    }), go(() => e.modelValue), () => h("div", {
      role: "group",
      class: Bs([e.theme])
    }, [rt(h("button", De({
      type: "button",
      style: d.value,
      class: [Bs("minus", {
        disabled: r.value
      }), {
        [_t]: !r.value
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
      onBlur: p,
      onInput: v,
      onFocus: b,
      onMousedown: E
    }, null), [
      [dt, e.showInput]
    ]), rt(h("button", De({
      type: "button",
      style: d.value,
      class: [Bs("plus", {
        disabled: c.value
      }), {
        [_t]: !c.value
      }],
      "aria-disabled": c.value || void 0
    }, B("plus")), null), [
      [dt, e.showPlus]
    ])])
  }
});
const XT = J(ZT),
  JT = J(WT),
  [eS, Zt, tS] = Y("submit-bar"),
  nS = {
    tip: String,
    label: String,
    price: Number,
    tipIcon: String,
    loading: Boolean,
    currency: ee("¥"),
    disabled: Boolean,
    textAlign: String,
    buttonText: String,
    buttonType: ee("danger"),
    buttonColor: String,
    suffixLabel: String,
    placeholder: Boolean,
    decimalLength: he(2),
    safeAreaInsetBottom: j
  };
var oS = K({
  name: eS,
  props: nS,
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
          suffixLabel: v,
          decimalLength: b
        } = e;
        if (typeof d == "number") {
          const p = (d / 100).toFixed(+b).split("."),
            w = b ? `.${p[1]}` : "";
          return h("div", {
            class: Zt("text"),
            style: {
              textAlign: g
            }
          }, [h("span", null, [f || tS("label")]), h("span", {
            class: Zt("price")
          }, [m, h("span", {
            class: Zt("price-integer")
          }, [p[0]]), w]), v && h("span", {
            class: Zt("suffix-label")
          }, [v])])
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
      c = () => n.button ? n.button() : h(kt, {
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
const iS = J(oS),
  [sS, fl] = Y("swipe-cell"),
  aS = {
    name: he(""),
    disabled: Boolean,
    leftWidth: G,
    rightWidth: G,
    beforeClose: Function,
    stopPropagation: Boolean
  };
var lS = K({
  name: sS,
  props: aS,
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
      m = T => T.value ? Ue(T).width : 0,
      g = N(() => Fe(e.leftWidth) ? +e.leftWidth : m(c)),
      v = N(() => Fe(e.rightWidth) ? +e.rightWidth : m(u)),
      b = T => {
        d.offset = T === "left" ? g.value : -v.value, o || (o = !0, t("open", {
          name: e.name,
          position: T
        }))
      },
      p = T => {
        d.offset = 0, o && (o = !1, t("close", {
          name: e.name,
          position: T
        }))
      },
      w = T => {
        const R = Math.abs(d.offset),
          D = .15,
          S = o ? 1 - D : D,
          I = T === "left" ? g.value : v.value;
        I && R > I * S ? b(T) : p(T)
      },
      y = T => {
        e.disabled || (a = d.offset, f.start(T))
      },
      C = T => {
        if (e.disabled) return;
        const {
          deltaX: R
        } = f;
        f.move(T), f.isHorizontal() && (s = !0, d.dragging = !0, (!o || R.value * a < 0) && Ge(T, e.stopPropagation), d.offset = ht(R.value + a, -v.value, g.value))
      },
      _ = () => {
        d.dragging && (d.dragging = !1, w(d.offset > 0 ? "left" : "right"), setTimeout(() => {
          s = !1
        }, 0))
      },
      k = (T = "outside", R) => {
        l || (t("click", T), o && !s && (l = !0, vo(e.beforeClose, {
          args: [{
            event: R,
            name: e.name,
            position: T
          }],
          done: () => {
            l = !1, p(T)
          },
          canceled: () => l = !1,
          error: () => l = !1
        })))
      },
      E = (T, R) => D => {
        R && D.stopPropagation(), !s && k(T, D)
      },
      B = (T, R) => {
        const D = n[T];
        if (D) return h("div", {
          ref: R,
          class: fl(T),
          onClick: E(T, !0)
        }, [D()])
      };
    return $e({
      open: b,
      close: p
    }), ba(r, T => k("outside", T), {
      eventName: "touchstart"
    }), st("touchmove", C, {
      target: r
    }), () => {
      var T;
      const R = {
        transform: `translate3d(${d.offset}px, 0, 0)`,
        transitionDuration: d.dragging ? "0s" : ".6s"
      };
      return h("div", {
        ref: r,
        class: fl(),
        onClick: E("cell", s),
        onTouchstartPassive: y,
        onTouchend: _,
        onTouchcancel: _
      }, [h("div", {
        class: fl("wrapper"),
        style: R
      }, [B("left", c), (T = n.default) == null ? void 0 : T.call(n), B("right", u)])])
    }
  }
});
const rS = J(lS),
  [cm, Fu] = Y("tabbar"),
  cS = {
    route: Boolean,
    fixed: j,
    border: j,
    zIndex: G,
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
  um = Symbol(cm);
var uS = K({
  name: cm,
  props: cS,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      {
        linkChildren: s
      } = Tt(um),
      a = _a(o, Fu),
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
          class: [Fu({
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
        vo(e.beforeChange, {
          args: [u],
          done() {
            t("update:modelValue", u), t("change", u), d()
          }
        })
      }
    }), () => e.fixed && e.placeholder ? a(r) : r()
  }
});
const dS = J(uS),
  [fS, hl] = Y("tabbar-item"),
  hS = _e({}, yo, {
    dot: Boolean,
    icon: String,
    name: G,
    badge: G,
    badgeProps: Object,
    iconPrefix: String
  });
var mS = K({
  name: fS,
  props: hS,
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
      } = yt(um);
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
            to: v
          } = e, b = wn(v) ? v : {
            path: v
          };
          return !!g.matched.find(p => {
            const w = "path" in b && b.path === p.path,
              y = "name" in b && b.name === p.name;
            return w || y
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
        inactiveColor: v
      } = a.props, b = r.value ? g : v;
      return h("div", {
        role: "tab",
        class: hl({
          active: r.value
        }),
        style: {
          color: b
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
const gS = J(mS),
  [vS, Vu] = Y("text-ellipsis"),
  yS = {
    rows: he(1),
    dots: ee("..."),
    content: ee(""),
    expandText: ee(""),
    collapseText: ee(""),
    position: ee("end")
  };
var pS = K({
  name: vS,
  props: yS,
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
        const y = w.match(/^\d*(\.\d*)?/);
        return y ? Number(y[0]) : 0
      },
      f = () => {
        if (!l.value || !l.value.isConnected) return;
        const w = window.getComputedStyle(l.value),
          y = document.createElement("div");
        return Array.prototype.slice.apply(w).forEach(_ => {
          y.style.setProperty(_, w.getPropertyValue(_))
        }), y.style.position = "fixed", y.style.zIndex = "-9999", y.style.top = "-9999px", y.style.height = "auto", y.style.minHeight = "auto", y.style.maxHeight = "auto", y.innerText = e.content, document.body.appendChild(y), y
      },
      m = (w, y) => {
        var C, _;
        const {
          content: k,
          position: E,
          dots: B
        } = e, T = k.length, R = 0 + T >> 1, D = n.action ? (_ = (C = r.value) == null ? void 0 : C.outerHTML) != null ? _ : "" : e.expandText, S = () => {
          const $ = (X, ce) => {
            if (ce - X <= 1) return E === "end" ? k.slice(0, X) + B : B + k.slice(ce, T);
            const U = Math.round((X + ce) / 2);
            return E === "end" ? w.innerText = k.slice(0, U) + B : w.innerText = B + k.slice(U, T), w.innerHTML += D, w.offsetHeight > y ? E === "end" ? $(X, U) : $(U, ce) : E === "end" ? $(U, ce) : $(X, U)
          };
          return $(0, T)
        }, I = ($, X) => {
          if ($[1] - $[0] <= 1 && X[1] - X[0] <= 1) return k.slice(0, $[0]) + B + k.slice(X[1], T);
          const ce = Math.floor(($[0] + $[1]) / 2),
            U = Math.ceil((X[0] + X[1]) / 2);
          return w.innerText = e.content.slice(0, ce) + e.dots + e.content.slice(U, T), w.innerHTML += D, w.offsetHeight >= y ? I([$[0], ce], [U, X[1]]) : I([ce, $[1]], [X[0], U])
        };
        return e.position === "middle" ? I([0, R], [R, T]) : S()
      },
      g = () => {
        const w = f();
        if (!w) {
          c = !0;
          return
        }
        const {
          paddingBottom: y,
          paddingTop: C,
          lineHeight: _
        } = w.style, k = Math.ceil((Number(e.rows) + .5) * d(_) + d(C) + d(y));
        k < w.offsetHeight ? (a.value = !0, o.value = m(w, k)) : (a.value = !1, o.value = e.content), document.body.removeChild(w)
      },
      v = (w = !s.value) => {
        s.value = w
      },
      b = w => {
        v(), t("clickAction", w)
      },
      p = () => {
        const w = n.action ? n.action({
          expanded: s.value
        }) : u.value;
        return h("span", {
          ref: r,
          class: Vu("action"),
          onClick: b
        }, [w])
      };
    return at(() => {
      g(), n.action && Oe(g)
    }), Cn(() => {
      c && (c = !1, g())
    }), re([tn, () => [e.content, e.rows, e.position]], g), $e({
      toggle: v
    }), () => h("div", {
      ref: l,
      class: Vu()
    }, [s.value ? e.content : o.value, a.value ? p() : null])
  }
});
const bS = J(pS),
  [wS] = Y("time-picker"),
  zu = e => /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(e),
  CS = ["hour", "minute", "second"],
  _S = _e({}, Eh, {
    minHour: he(0),
    maxHour: he(23),
    minMinute: he(0),
    maxMinute: he(59),
    minSecond: he(0),
    maxSecond: he(59),
    minTime: {
      type: String,
      validator: zu
    },
    maxTime: {
      type: String,
      validator: zu
    },
    columnsType: {
      type: Array,
      default: () => ["hour", "minute"]
    },
    filter: Function
  });
var kS = K({
  name: wS,
  props: _S,
  emits: ["confirm", "cancel", "change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(e.modelValue),
      s = F(),
      a = m => {
        const g = m.split(":");
        return CS.map((v, b) => e.columnsType.includes(v) ? g[b] : "00")
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
          minMinute: v,
          maxMinute: b,
          minSecond: p,
          maxSecond: w
        } = e;
        if (e.minTime || e.maxTime) {
          const y = {
            hour: 0,
            minute: 0,
            second: 0
          };
          e.columnsType.forEach((k, E) => {
            var B;
            y[k] = (B = o.value[E]) != null ? B : 0
          });
          const {
            hour: C,
            minute: _
          } = y;
          if (e.minTime) {
            const [k, E, B] = a(e.minTime);
            m = k, v = +C <= +m ? E : "00", p = +C <= +m && +_ <= +v ? B : "00"
          }
          if (e.maxTime) {
            const [k, E, B] = a(e.maxTime);
            g = k, b = +C >= +g ? E : "59", w = +C >= +g && +_ >= +b ? B : "59"
          }
        }
        return e.columnsType.map(y => {
          const {
            filter: C,
            formatter: _
          } = e;
          switch (y) {
            case "hour":
              return si(+m, +g, y, _, C, o.value);
            case "minute":
              return si(+v, +b, y, _, C, o.value);
            case "second":
              return si(+p, +w, y, _, C, o.value);
            default:
              return []
          }
        })
      });
    re(o, m => {
      pn(m, e.modelValue) || t("update:modelValue", m)
    }), re(() => e.modelValue, m => {
      m = Oh(m, c.value), pn(m, o.value) || (o.value = m)
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
    }, ze(e, Ih)), n)
  }
});
const TS = J(kS),
  [SS, Go] = Y("tree-select"),
  xS = {
    max: he(1 / 0),
    items: Ze(),
    height: he(300),
    selectedIcon: ee("success"),
    mainActiveIndex: he(0),
    activeId: {
      type: [Number, String, Array],
      default: 0
    }
  };
var AS = K({
  name: SS,
  props: xS,
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
        const u = e.items.map(d => h(nm, {
          dot: d.dot,
          badge: d.badge,
          class: [Go("nav-item"), d.className],
          disabled: d.disabled,
          onClick: l
        }, {
          title: () => n["nav-text"] ? n["nav-text"](d) : d.text
        }));
        return h(tm, {
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
const ES = J(AS),
  [IS, ct, PS] = Y("uploader");

function Hu(e, t) {
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

function dm(e, t) {
  return Us(e).some(n => n.file ? ci(t) ? t(n.file) : n.file.size > +t : !1)
}

function OS(e, t) {
  const n = [],
    o = [];
  return e.forEach(s => {
    dm(s, t) ? o.push(s) : n.push(s)
  }), {
    valid: n,
    invalid: o
  }
}
const RS = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,
  DS = e => RS.test(e);

function fm(e) {
  return e.isImage ? !0 : e.file && e.file.type ? e.file.type.indexOf("image") === 0 : e.url ? DS(e.url) : typeof e.content == "string" ? e.content.indexOf("data:image") === 0 : !1
}
var BS = K({
  props: {
    name: G,
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
          beforeDelete: v
        } = e;
        d.stopPropagation(), vo(v, {
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
            "aria-label": PS("delete"),
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
          }, [n["preview-cover"](_e({
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
          reupload: v
        } = e;
        return fm(d) ? h(Ia, {
          fit: m,
          src: d.objectUrl || d.content || d.url,
          class: ct("preview-image"),
          width: Array.isArray(g) ? g[0] : g,
          height: Array.isArray(g) ? g[1] : g,
          lazyLoad: f,
          onClick: v ? l : a
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
const $S = {
  name: he(""),
  accept: ee("image/*"),
  capture: String,
  multiple: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  lazyLoad: Boolean,
  maxCount: he(1 / 0),
  imageFit: ee("cover"),
  resultType: ee("dataUrl"),
  uploadIcon: ee("photograph"),
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
var MS = K({
  name: IS,
  props: $S,
  emits: ["delete", "oversize", "clickUpload", "closePreview", "clickPreview", "clickReupload", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = F(),
      s = [],
      a = F(-1),
      l = F(!1),
      r = (T = e.modelValue.length) => ({
        name: e.name,
        index: T
      }),
      c = () => {
        o.value && (o.value.value = "")
      },
      u = T => {
        if (c(), dm(T, e.maxSize))
          if (Array.isArray(T)) {
            const R = OS(T, e.maxSize);
            if (T = R.valid, t("oversize", R.invalid, r()), !T.length) return
          } else {
            t("oversize", T, r());
            return
          } if (T = Je(T), a.value > -1) {
          const R = [...e.modelValue];
          R.splice(a.value, 1, T), t("update:modelValue", R), a.value = -1
        } else t("update:modelValue", [...e.modelValue, ...Us(T)]);
        e.afterRead && e.afterRead(T, r())
      },
      d = T => {
        const {
          maxCount: R,
          modelValue: D,
          resultType: S
        } = e;
        if (Array.isArray(T)) {
          const I = +R - D.length;
          T.length > I && (T = T.slice(0, I)), Promise.all(T.map($ => Hu($, S))).then($ => {
            const X = T.map((ce, U) => {
              const te = {
                file: ce,
                status: "",
                message: "",
                objectUrl: URL.createObjectURL(ce)
              };
              return $[U] && (te.content = $[U]), te
            });
            u(X)
          })
        } else Hu(T, S).then(I => {
          const $ = {
            file: T,
            status: "",
            message: "",
            objectUrl: URL.createObjectURL(T)
          };
          I && ($.content = I), u($)
        })
      },
      f = T => {
        const {
          files: R
        } = T.target;
        if (e.disabled || !R || !R.length) return;
        const D = R.length === 1 ? R[0] : [].slice.call(R);
        if (e.beforeRead) {
          const S = e.beforeRead(D, r());
          if (!S) {
            c();
            return
          }
          if (Gl(S)) {
            S.then(I => {
              d(I || D)
            }).catch(c);
            return
          }
        }
        d(D)
      };
    let m;
    const g = () => t("closePreview"),
      v = T => {
        if (e.previewFullImage) {
          const R = e.modelValue.filter(fm),
            D = R.map(S => (S.objectUrl && !S.url && S.status !== "failed" && (S.url = S.objectUrl, s.push(S.url)), S.url)).filter(Boolean);
          m = CC(_e({
            images: D,
            startPosition: R.indexOf(T),
            onClose: g
          }, e.previewOptions))
        }
      },
      b = () => {
        m && m.close()
      },
      p = (T, R) => {
        const D = e.modelValue.slice(0);
        D.splice(R, 1), t("update:modelValue", D), t("delete", T, r(R))
      },
      w = T => {
        l.value = !0, a.value = T, Oe(() => B())
      },
      y = () => {
        l.value || (a.value = -1), l.value = !1
      },
      C = (T, R) => {
        const D = ["imageFit", "deletable", "reupload", "previewSize", "beforeDelete"],
          S = _e(ze(e, D), ze(T, D, !0));
        return h(BS, De({
          item: T,
          index: R,
          onClick: () => t(e.reupload ? "clickReupload" : "clickPreview", T, r(R)),
          onDelete: () => p(T, R),
          onPreview: () => v(T),
          onReupload: () => w(R)
        }, ze(e, ["name", "lazyLoad"]), S), ze(n, ["preview-cover", "preview-delete"]))
      },
      _ = () => {
        if (e.previewImage) return e.modelValue.map(C)
      },
      k = T => t("clickUpload", T),
      E = () => {
        const T = e.modelValue.length < +e.maxCount,
          R = e.readonly ? null : h("input", {
            ref: o,
            type: "file",
            class: ct("input"),
            accept: e.accept,
            capture: e.capture,
            multiple: e.multiple && a.value === -1,
            disabled: e.disabled,
            onChange: f,
            onClick: y
          }, null);
        return n.default ? rt(h("div", {
          class: ct("input-wrapper"),
          onClick: k
        }, [n.default(), R]), [
          [dt, T]
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
          [dt, e.showUpload && T]
        ])
      },
      B = () => {
        o.value && !e.disabled && o.value.click()
      };
    return kn(() => {
      s.forEach(T => URL.revokeObjectURL(T))
    }), $e({
      chooseFile: B,
      reuploadFile: w,
      closeImagePreview: b
    }), go(() => e.modelValue), () => h("div", {
      class: ct()
    }, [h("div", {
      class: ct("wrapper", {
        disabled: e.disabled
      })
    }, [_(), E()])])
  }
});
const LS = J(MS),
  [NS, Uu] = Y("watermark"),
  FS = {
    gapX: lt(0),
    gapY: lt(0),
    image: String,
    width: lt(100),
    height: lt(100),
    rotate: he(-22),
    zIndex: G,
    content: String,
    opacity: G,
    fullPage: j,
    textColor: ee("#dcdee0")
  };
var VS = K({
  name: NS,
  props: FS,
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
      const c = _e({
        backgroundImage: `url(${o.value})`
      }, Un(e.zIndex));
      return h("div", {
        class: Uu({
          full: e.fullPage
        }),
        style: c
      }, [h("div", {
        class: Uu("wrapper"),
        ref: n
      }, [a()])])
    }
  }
});
const zS = J(VS),
  HS = "4.9.7";

function US(e) {
  [qf, $l, Ip, Hp, u0, B0, yh, F0, Lo, W0, kt, i1, d1, v1, un, w1, Mr, Sh, x1, B1, N1, U1, W1, Y1, X1, ow, cw, zl, pw, Sw, Iw, Bw, Fw, jw, Qw, Mh, $n, Gw, eC, Er, iC, rC, fC, Pe, Ia, _C, PC, OC, MC, rn, zf, VC, WC, e_, r_, th, f_, v_, xa, y_, gk, cn, bk, Sk, $r, Dr, Pk, Fk, Vk, jk, Jk, tm, nm, uT, PT, im, BT, sm, om, NT, HT, KT, XT, JT, rh, iS, xr, rS, Ar, Rr, es, dS, gS, Ta, Ea, bS, TS, t0, ES, LS, zS].forEach(n => {
    n.install ? e.use(n) : n.name && e.component(n.name, n)
  })
}
var WS = {
  install: US,
  version: HS
};
const jS = "modulepreload",
  QS = function(e) {
    return "/" + e
  },
  Wu = {},
  It = function(t, n, o) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const l = document.querySelector("meta[property=csp-nonce]"),
        r = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
      s = Promise.allSettled(n.map(c => {
        if (c = QS(c), c in Wu) return;
        Wu[c] = !0;
        const u = c.endsWith(".css"),
          d = u ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${c}"]${d}`)) return;
        const f = document.createElement("link");
        if (f.rel = u ? "stylesheet" : jS, u || (f.as = "script"), f.crossOrigin = "", f.href = c, r && f.setAttribute("nonce", r), document.head.appendChild(f), u) return new Promise((m, g) => {
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
  St = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, s] of t) n[o] = s;
    return n
  },
  KS = {
    name: "TermsOfUse"
  },
  YS = {
    class: "container",
    style: {
      "padding-bottom": "100px"
    }
  };

function qS(e, t, n, o, s, a) {
  return W(), ae("div", YS, t[0] || (t[0] = [$v('<h1 class="center" data-v-8a4f7e00>Zoo Terms of Use</h1><div class="center" data-v-8a4f7e00>Last Updated: 12/12/2024</div><h2 data-v-8a4f7e00>1. Definitions</h2> The following sections define the capitalised definitions of expressions that begin with capital letters. These definitions should be applied consistently, regardless of whether the expressions are presented in the singular or plural: <br data-v-8a4f7e00>• Zoo / The App - is a Mini App available on Telegram, named Zoo, with its usage rules outlined in this document. <br data-v-8a4f7e00>• Company - the legal entity named Zorimal Ltd. <br data-v-8a4f7e00>• Airdrop - the distribution of Tokens to Users of the App, carried out at the Company&#39;s discretion. In case of Token withdrawal after Airdrop, a fee will be deducted by Third-Party Services (e.g., blockchain fee and other fees). The Airdrop is not intended for financial benefit, as the App serves an entertainment purpose and may be discontinued at any time. <br data-v-8a4f7e00>• Alliance - consolidation of the App Users in the App. <br data-v-8a4f7e00>• In-game Coin «Animal Feed» / Coin - a coin that Users may obtain by engaging with the App&#39;s functionality and/or purchasing them with Telegram Stars. These In-game Coins are designed solely for use within the App, with their usage governed by the Terms and the App&#39;s mechanics. <br data-v-8a4f7e00>• Friend - a Telegram messenger user who received an invitation link from you and who is not a member of the App at the time of clicking the invitation link. <br data-v-8a4f7e00>• Interface - the visible part of the App. <br data-v-8a4f7e00>• Token Zoo / $ZOO - a token that the User can get in case of Airdrop. <br data-v-8a4f7e00>• Task - instructions and/or tasks given to Users for the purpose of completing them and obtaining rewards in the form of In-game Coin in the App in accordance with the Terms. <br data-v-8a4f7e00>• Third-Party Services - all third-party services to which the Zoo provides access. <br data-v-8a4f7e00>• You / you / User - the individual accessing or using the Zoo. Each User is permitted to create and maintain only one account in the App. <h2 data-v-8a4f7e00>2. Acceptance of Terms</h2> These Zoo Terms of Use, and any additional policies or terms mentioned in them, establish a legally binding agreement (collectively, the ‘Terms’) between you and Zorimal Ltd, a company incorporated in the British Virgin Islands. This agreement regulates your access to and use of the App. <br data-v-8a4f7e00>By accessing or using Zoo, you acknowledge that you have read, understood and agreed to be bound by these Terms, including our Privacy Policy. Your continued use of the App serves to confirm your agreement to these Terms and any subsequent changes or updates to them. <br data-v-8a4f7e00>The App is not intended for distribution or use by individuals or entities in jurisdictions where such actions would breach local laws or regulations or impose registration or compliance obligations on us. As a result, it is your sole responsibility to ensure that your use of the App complies with all applicable laws in your jurisdiction. <br data-v-8a4f7e00>You understand and agree that the use of multiple accounts for a single User is strictly prohibited. Violation of this rule may result in suspension or permanent banning of all associated accounts. <br data-v-8a4f7e00>You agree to obtain prior approval before sending a Telegram user an invitation link to our App as well as other promotional links to our App. The Company is not responsible for the actions of Users who violate this requirement. <br data-v-8a4f7e00>Use of the App by residents of the United States is strictly prohibited. By accessing or using the App, you certify that you are not a resident of the United States. If you become a resident of the United States or become aware of anyone using the App in the United States, you should immediately report it to us. <br data-v-8a4f7e00>You acknowledge and accept that if it is discovered you have misrepresented your residency, citizenship, or location, the Company reserves the right to take appropriate actions, including but not limited to, immediate termination of your access to the App. Furthermore, you accept full responsibility for any failure to disclose your U.S. location and agree to bear any consequences arising from regulatory claims or actions brought by U.S. authorities against the Company. <h2 data-v-8a4f7e00>3. The App&#39;s Mechanics</h2><h3 data-v-8a4f7e00>3.1 General</h3> Zoo is a Mini App on Telegram that allows Users to create their own in-game zoo by purchasing in-game animals. The User is given the ability to join Alliances, invite Friends and complete Tasks. The User has the ability to earn Token Zoo and receive In-game Coin “Animal Feed” in the ways described below. <h3 data-v-8a4f7e00>3.2 In-game Coin “Animal Feed”</h3> Using In-game Coin “Animal Feed” the User can realize the main functionality of the App - to develop the game zoo by purchasing animals and increasing the level of their enclosures. The User can use other functionality of the App with the help of Coin, which is displayed in the App Interface. The User Coin balance is displayed in the App Interface. <br data-v-8a4f7e00>In-game Coin “Animal Feed” can be obtained in the following ways: <br data-v-8a4f7e00>• Inviting Friends: The User can receive In-game Coins “Animal Feed” by sending an invitation link to a Friend who followed the link in the App. The number of Coins and the conditions for receiving them for inviting friends is displayed in the App Interface. <br data-v-8a4f7e00>• Completion of Tasks: The User can receive In-game Coin “Animal Feed” by completing certain Tasks. Tasks are displayed in the App Interface. <br data-v-8a4f7e00>• Development of the Alliance: The User can create an Alliance or join an existing Alliance by paying In-game Coin “Animal Feed”. For the development of the Alliance, the User can receive In-game Coin “Animal Feed”. <br data-v-8a4f7e00>• Purchase using Telegram Stars: The User buys In-game Coins “Animal Feed” through Telegram Stars. The cost of buying Сoins is displayed in the App Interface. <br data-v-8a4f7e00>• The amount of Coins you can get with the above actions is displayed in the App Interface. In-game Coins are not cash and their use is limited by the Terms and App mechanics. <br data-v-8a4f7e00>Purchase using Telegram Stars: The User buys In-game Coins “Animal Feed” through Telegram Stars. The cost of buying Сoins is displayed in the App Interface. The User is strictly forbidden to refund by any technical means to Telegram Stars that the User spent on in-app purchases. <h3 data-v-8a4f7e00>3.3 Token Zoo</h3> The amount of Tokens Zoo of the User depends on the number and level of animal’s enclosures in zoo, as well as on the level of Alliance in which User can be a member. Each animal brings a certain amount of Tokens Zoo in a certain amount of time depending on the level of animal’s enclosures. The User Token Zoo balance is displayed in the App Interface. <br data-v-8a4f7e00>The User can increase the number of Tokens Zoo earned from each animal enclosure in the following ways: <br data-v-8a4f7e00>• Increasing level of animal’s enclosures: The User can upgrade the level of the animal enclosure with In-game Coins “Animal Feed”. Each new level increases the number of Tokens Zoo that can be obtained. <br data-v-8a4f7e00>• Join the Alliance: Alliances are divided by levels. The level of an Alliance in which the User participates affects the number of bonuses that increase your Token Zoo accumulation. A User can only be a member of one Alliance. The list of Alliances and the amount of bonuses from participation in them is displayed in the App Interface. <br data-v-8a4f7e00>• Using boosts: Boosts allow the User to increase the number of Tokens Zoo earned from animal enclosures for a certain amount of time. The boost conditions are displayed in the App Interface. <br data-v-8a4f7e00>You can receive earned Tokens Zoo during the Airdrop, which will happen on dates determined by the Company. The number of Tokens Zoo does not depend on the number of your In-game Coins in the App. <h2 data-v-8a4f7e00>4. Prohibited Activities</h2> Using of any form of technical automation, including but not limited to bots, scripts, or other automated tools, to interact with or manipulate the App is strictly prohibited. Using of any other form of disruption to the mechanics of the App, including but not limited to refunding Telegram Stars for in-app purchases, is also strictly prohibited. Such actions may lead to immediate account suspension or a permanent ban without prior notice. <h2 data-v-8a4f7e00>5. In-App Purchases</h2> All In-App purchases are for entertainment purposes only. By making a purchase, you do so on a voluntary basis and take full responsibility for your decisions. The App disclaims any responsibility for financial or other consequences caused by in-app purchases. <h2 data-v-8a4f7e00>6. Changes to Features and Balances</h2> We reserve the right to modify, adjust, or remove any App features, mechanics, balances, or other functionalities at any time without prior notice. Such changes are made at our sole discretion to improve the App or ensure fair usage. Continued use of the App following any changes constitutes your acceptance of the updated features or mechanics. <h2 data-v-8a4f7e00>7. Intellectual Property</h2> Unless explicitly stated otherwise, the App, along with all content and materials within it —including but not limited to designs (structural or landscape), text, graphics (static or animated), pictures, data, software, sound files (including music and recordings), audiovisual effects, and their arrangement — are the proprietary property of the Company, its affiliates, licensors, or users, as applicable. <br data-v-8a4f7e00>The Zoo logo, as well as the names, services, logos, slogans, and trade names associated with Zorimal Ltd products, are either owned by the Company or used under license and are safeguarded by copyright, trademark laws, and international intellectual property agreements. <br data-v-8a4f7e00>Unless explicitly authorized by these Terms, no part of the App or its content may be duplicated, reproduced, compiled, republished, uploaded, shared, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise used for commercial purposes without obtaining prior written consent from the Company. Any mention of products, services, trademarks, manufacturers, or suppliers is provided solely for reference and does not signify endorsement, sponsorship, or recommendation by Zorimal Ltd. <h2 data-v-8a4f7e00>8. Disclaimer</h2> General Disclaimer: Zoo is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without any guarantees or assurances, whether explicit or implied, regarding its functionality, information, content, materials, or products contained within. By using the App, you acknowledge and agree that you do so entirely at your own risk and solely for entertainment purposes. <br data-v-8a4f7e00>No Warranty for Performance: Zorimal Ltd makes no guarantees that the App will fulfill your particular needs, operate without interruption, be timely, secure, or free from errors. We also do not guarantee the outcomes from using the App or the accuracy and reliability of any information obtained through it. <br data-v-8a4f7e00>No Warranty for Technical Issues: Zorimal Ltd assumes no liability for any technical issues, including but not limited to problems with blockchain technology, server failures, software glitches, artificial intelligence errors, or connectivity disruptions that could impact the App&#39;s performance or availability. <br data-v-8a4f7e00>No Liability for User Conduct: Zorimal Ltd does not support, guarantee, or take responsibility for the actions or conduct of App users. The Company is not accountable for any content created by users or their activities within the App. <br data-v-8a4f7e00>No Warranty for Third-Party Services: The App may contain links to third-party websites or services that are not owned or managed by Zorimal Ltd. The Company has no control over and accepts no responsibility for the content, privacy policies, or practices of these external websites or services. We advise you to review the terms and policies of any third-party services you engage with. By using such links, you acknowledge and agree that Zorimal Ltd is not liable for any damages or losses arising from your use of or reliance on the content, products, or services provided by these third parties. <br data-v-8a4f7e00>Limitation of Liability for Damages: To the maximum extent allowed by law, Zorimal Ltd disclaims liability for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, goodwill, data, or other intangible losses. This limitation applies to damages resulting from (i) your use or inability to use the App, (ii) unauthorized access to or modification of your data or transmissions, (iii) actions or statements by third parties within the App, or (iv) any other matter related to the App. <h2 data-v-8a4f7e00>9. Privacy</h2> Details about how we collect and use your personal information are outlined in our Privacy Policy. By using the App, you agree to the collection and use of your personal information as described in the Privacy Policy. <h2 data-v-8a4f7e00>10. Termination</h2> We reserve the right to revoke or suspend your access to the App at any time, without prior notice or responsibility, for any reason, including but not limited to violations of these Terms. Once terminated, your permission to use the App will cease immediately. Any in-game purchases and achievements will be cancelled and unavailable to you. Any sections of these Terms that are meant to remain in effect after termination will continue to apply, including but not limited to provisions on ownership rights, disclaimers of warranties, indemnity obligations, and limitations of liability. <h2 data-v-8a4f7e00>11. Indemnification</h2> You agree to defend, indemnify, and protect the Company, along with its officers, directors, employees, and agents, from any claims, liabilities, damages, losses, or costs — such as reasonable legal and accounting expenses — that result from or relate to your use of the App or any breach of these Terms on your part. <h2 data-v-8a4f7e00>12. Governing Law</h2> This Terms is governed by the laws of the British Virgin Islands and will be interpreted in accordance with those laws, without regard to their conflict-of-law rules. <h2 data-v-8a4f7e00>13. Dispute Resolution</h2> In case of a dispute, you agree to first attempt to resolve the issue amicably by submitting your complaint to us at dispute@zoo.team. We will provide a response within 30 calendar days. If the matter cannot be resolved through negotiation, it will be decided in the courts of the British Virgin Islands. <h2 data-v-8a4f7e00>14. Changes to Terms</h2> We retain the right to revise or amend these terms at any time. By continuing to use or access the App after the updated terms take effect, you acknowledge and accept the changes. <h2 data-v-8a4f7e00>15. Binding Terms of Use</h2> By accepting these Terms, you also agree to comply with the <a href="https://telegram.org/tos/mini-apps" data-v-8a4f7e00>Telegram Mini App Terms of Use</a>. <h2 data-v-8a4f7e00>16. Contact Us</h2> For any questions about these Terms or to share ideas, suggestions, or feedback, please contact us at support@zoo.team. ', 113)]))
}
const GS = St(KS, [
    ["render", qS],
    ["__scopeId", "data-v-8a4f7e00"]
  ]),
  ZS = "/assets/onboarding_1-C7MzEQXq.jpg",
  XS = "/assets/onboarding_2-UoTZ07w1.jpg",
  JS = "/assets/onboarding_3-CzE3Yyga.jpg",
  ex = {
    components: {
      TermsOfUse: GS
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
  tx = {
    class: "onboardingStart center",
    style: {
      direction: "ltr"
    }
  },
  nx = {
    class: "con"
  },
  ox = {
    class: "zTextShadow2white"
  },
  ix = {
    class: "panel"
  },
  sx = {
    class: "center buttonNextContainer"
  },
  ax = {
    class: "con"
  },
  lx = {
    class: "zTextShadow2white"
  },
  rx = {
    class: "panel"
  },
  cx = {
    class: "center buttonNextContainer"
  },
  ux = {
    class: "con"
  },
  dx = {
    class: "panel"
  },
  fx = {
    class: "center buttonNextContainer"
  },
  hx = {
    class: "con"
  },
  mx = {
    class: "zTextShadow2white"
  },
  gx = {
    class: "flyBtn",
    style: {
      "margin-bottom": "-20px",
      "z-index": "10"
    }
  },
  vx = {
    class: "flyBtnTitle"
  },
  yx = {
    class: "panel"
  },
  px = {
    class: "center buttonNextContainer"
  },
  bx = {
    class: "con"
  },
  wx = {
    class: "zTextShadow2white"
  },
  Cx = {
    class: "panel"
  },
  _x = {
    class: "center buttonNextContainer"
  },
  kx = {
    class: "termsOfUse"
  },
  Tx = {
    class: "termsContainer"
  };

function Sx(e, t, n, o, s, a) {
  const l = ge("van-button"),
    r = ge("van-swipe-item"),
    c = ge("van-checkbox"),
    u = ge("van-swipe"),
    d = ge("TermsOfUse"),
    f = ge("van-popup");
  return W(), ae("div", tx, [h(u, {
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
      default: le(() => [P("div", nx, [P("h2", ox, M(e.t("Welcome to Zoo!")), 1), t[4] || (t[4] = P("img", {
        src: ZS,
        alt: "",
        width: "100%"
      }, null, -1)), P("p", ix, M(e.t("Here, you'll build your very own Zoo!")), 1)]), P("div", sx, [h(l, {
        class: "buttonNext",
        icon: "arrow",
        "icon-position": "right",
        onClick: a.next,
        type: "success",
        round: ""
      }, {
        default: le(() => [be(M(e.t("Next")), 1)]),
        _: 1
      }, 8, ["onClick"])])]),
      _: 1
    }, 8, ["class"]), h(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: le(() => [P("div", ax, [P("h2", lx, M(e.t("Earn coins and upgrade your Zoo")), 1), t[5] || (t[5] = P("img", {
        src: XS,
        alt: "",
        width: "100%"
      }, null, -1)), P("p", rx, M(e.t("The bigger and better your Zoo, the more it mines {TOKEN_NAME}.", {
        TOKEN_NAME: e.TOKEN_NAME
      })), 1)]), P("div", cx, [h(l, {
        class: "buttonNext",
        icon: "arrow",
        "icon-position": "right",
        onClick: a.next,
        type: "success",
        round: ""
      }, {
        default: le(() => [be(M(e.t("Next")), 1)]),
        _: 1
      }, 8, ["onClick"])])]),
      _: 1
    }, 8, ["class"]), h(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: le(() => [P("div", ux, [t[6] || (t[6] = P("h2", {
        class: "zTextShadow2white"
      }, "Airdrop", -1)), t[7] || (t[7] = P("img", {
        src: JS,
        alt: "",
        width: "100%"
      }, null, -1)), P("p", dx, M(e.t("Earn {TOKEN_NAME} tokens through Airdrop based on your progress.", {
        TOKEN_NAME: e.TOKEN_NAME
      })), 1)]), P("div", fx, [h(l, {
        class: "buttonNext",
        icon: "arrow",
        "icon-position": "right",
        onClick: a.next,
        type: "success",
        round: ""
      }, {
        default: le(() => [be(M(e.t("Next")), 1)]),
        _: 1
      }, 8, ["onClick"])])]),
      _: 1
    }, 8, ["class"]), h(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: le(() => [P("div", hx, [P("h2", mx, M(e.t("Create or Join an Alliance")), 1), P("div", gx, [t[8] || (t[8] = P("div", {
        class: "flyBtnCont"
      }, [P("div", {
        class: "flyBtnIcon",
        style: {
          "background-image": "url('/assets/img/decor/icon_ali.png')"
        }
      })], -1)), P("div", vx, M(e.t("Alliance")), 1)]), P("p", yx, M(e.t("Alliance owners receive {PERCENT}% of all contributions, and members gain significant advantages in mining {TOKEN_NAME} tokens.", {
        PERCENT: e.gameConfig["alliance.bonus.founder"],
        TOKEN_NAME: e.TOKEN_NAME
      })), 1)]), P("div", px, [h(l, {
        class: "buttonNext",
        icon: "arrow",
        "icon-position": "right",
        onClick: a.next,
        type: "success",
        round: ""
      }, {
        default: le(() => [be(M(e.t("Next")), 1)]),
        _: 1
      }, 8, ["onClick"])])]),
      _: 1
    }, 8, ["class"]), h(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: le(() => [P("div", bx, [P("h2", wx, M(e.t("We're having fun together")), 1), P("p", Cx, M(e.t("Grow your Zoo, complete quests, invite friends, and take part in the {Airdrop}!")), 1)]), P("div", _x, [P("div", kx, [h(c, {
        modelValue: e.isUserAcceptTermsOfUse,
        "onUpdate:modelValue": t[1] || (t[1] = m => e.isUserAcceptTermsOfUse = m)
      }, {
        default: le(() => [t[9] || (t[9] = be(" I accept the ")), P("span", {
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
        default: le(() => [be(M(e.t("Start")), 1)]),
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
    default: le(() => [P("div", Tx, [h(d)])]),
    _: 1
  }, 8, ["show"])])
}
const xx = St(ex, [
  ["render", Sx],
  ["__scopeId", "data-v-630ce1d4"]
]);

function Ax(e) {
  let t = 0;
  const n = new Uint8Array(e.length + 2);
  n.set(e);
  for (let o of n) {
    let s = 128;
    for (; s > 0;) t <<= 1, o & s && (t += 1), s >>= 1, t > 65535 && (t &= 65535, t ^= 4129)
  }
  return new Uint8Array([Math.floor(t / 256), t % 256])
}

function Ex(e) {
  return Array.from(e).map(t => t.toString(16).padStart(2, "0")).join("")
}

function Ix(e) {
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
      r.set(l), r.set(Ax(l), 34);
      let c = Ix(String.fromCharCode.apply(null, r));
      return n && (c = c.replace(/\+/g, "-").replace(/\//g, "_")), c
    }
    return this.wc + ":" + Ex(this.hashPart)
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
const Px = {
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
  Ox = {
    class: "contentWrapper"
  },
  Rx = {
    class: "content"
  },
  Dx = {
    key: 1
  },
  Bx = {
    key: 3
  },
  $x = {
    key: 0,
    class: "imgWrapper"
  };

function Mx(e, t, n, o, s, a) {
  const l = ge("van-popup");
  return W(), Me(l, {
    "close-icon": "cross",
    class: ot(["gamePopup", {
      withImg: n.imgUrl
    }]),
    round: n.rounded,
    closeable: n.closeable,
    position: n.position,
    duration: n.duration
  }, {
    default: le(() => [P("div", Ox, [P("div", Rx, [n.title ? Te("", !0) : za(e.$slots, "title", {
      key: 0
    }, void 0, !0), n.title ? (W(), ae("h1", Dx, M(n.title), 1)) : Te("", !0), n.subtitle ? Te("", !0) : za(e.$slots, "subtitle", {
      key: 2
    }, void 0, !0), n.subtitle ? (W(), ae("h2", Bx, M(n.subtitle), 1)) : Te("", !0), za(e.$slots, "default", {}, void 0, !0)])]), n.imgUrl ? (W(), ae("div", $x, [P("div", {
      class: "imgTitle",
      style: an({
        backgroundImage: `url(${n.imgUrl})`
      })
    }, null, 4)])) : Te("", !0)]),
    _: 3
  }, 8, ["class", "round", "closeable", "position", "duration"])
}
const hm = St(Px, [
    ["render", Mx],
    ["__scopeId", "data-v-5796a2f7"]
  ]),
  mm = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28%2056C43.464%2056%2056%2043.464%2056%2028C56%2012.536%2043.464%200%2028%200C12.536%200%200%2012.536%200%2028C0%2043.464%2012.536%2056%2028%2056Z'%20fill='%230098EA'/%3e%3cpath%20d='M37.5603%2015.6277H18.4386C14.9228%2015.6277%2012.6944%2019.4202%2014.4632%2022.4861L26.2644%2042.9409C27.0345%2044.2765%2028.9644%2044.2765%2029.7345%2042.9409L41.5381%2022.4861C43.3045%2019.4251%2041.0761%2015.6277%2037.5627%2015.6277H37.5603ZM26.2548%2036.8068L23.6847%2031.8327L17.4833%2020.7414C17.0742%2020.0315%2017.5795%2019.1218%2018.4362%2019.1218H26.2524V36.8092L26.2548%2036.8068ZM38.5108%2020.739L32.3118%2031.8351L29.7417%2036.8068V19.1194H37.5579C38.4146%2019.1194%2038.9199%2020.0291%2038.5108%2020.739Z'%20fill='white'/%3e%3c/svg%3e",
  Lx = {
    components: {
      GamePopup: hm
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
  Nx = {
    class: "ton-wallet"
  },
  Fx = {
    class: "ton-wallet-button-wrapper"
  },
  Vx = {
    style: {
      margin: "0 10px"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "29",
    viewBox: "0 0 28 29",
    fill: "none"
  },
  zx = {
    class: "wallet-address"
  },
  Hx = {
    style: {
      margin: "0 10px"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "29",
    viewBox: "0 0 28 29",
    fill: "none"
  };

function Ux(e, t, n, o, s, a) {
  const l = ge("van-icon"),
    r = ge("van-button"),
    c = ge("game-popup");
  return W(), ae("div", Nx, [P("div", Fx, [a.showTransactionButton ? Te("", !0) : (W(), Me(r, {
    key: 0,
    onClick: a.handleClick,
    round: "",
    size: "large",
    loading: n.loading,
    "icon-position": "right",
    type: a.isConnected ? "success" : "warning"
  }, {
    icon: le(() => [(W(), ae("svg", Vx, t[1] || (t[1] = [P("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z",
      fill: "#FFFFFF"
    }, null, -1)])))]),
    default: le(() => [a.isConnected ? (W(), Me(l, {
      key: 0,
      name: "checked"
    })) : Te("", !0), be(" " + M(a.isConnected ? a.addressNonBounceableMedium : e.t("Connect wallet")), 1)]),
    _: 1
  }, 8, ["onClick", "loading", "type"])), a.showTransactionButton ? (W(), Me(r, {
    key: 1,
    round: "",
    type: "success",
    onClick: a.pay,
    loading: n.loading
  }, uf({
    default: le(() => [be(" " + M(n.transactionBtnText ? n.transactionBtnText : e.t("Make a TON transaction")), 1)]),
    _: 2
  }, [n.isShowTransactionIcon ? {
    name: "icon",
    fn: le(() => [t[2] || (t[2] = P("img", {
      src: mm,
      alt: "",
      width: "30px",
      style: {
        margin: "0 10px"
      }
    }, null, -1))]),
    key: "0"
  } : void 0]), 1032, ["onClick", "loading"])) : Te("", !0)]), h(c, {
    show: e.isPopupVisible,
    "onUpdate:show": t[0] || (t[0] = u => e.isPopupVisible = u),
    rounded: "",
    closeable: "",
    title: e.t("Connected Wallet")
  }, {
    default: le(() => [P("div", zx, [(W(), ae("svg", Hx, t[3] || (t[3] = [P("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z",
      fill: "#FFFFFF"
    }, null, -1)]))), be(" " + M(a.addressNonBounceableMedium), 1)]), h(r, {
      round: "",
      onClick: a.connectWallet,
      type: "warning",
      icon: "link-o",
      style: {
        margin: "20px 0 40px 0"
      },
      size: "small"
    }, {
      default: le(() => [be(M(e.t("Connect different wallet")), 1)]),
      _: 1
    }, 8, ["onClick"])]),
    _: 1
  }, 8, ["show", "title"])])
}
const Ur = St(Lx, [
    ["render", Ux],
    ["__scopeId", "data-v-49c142f1"]
  ]),
  Wx = {
    components: {
      TonWallet: Ur
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
          return o.key === "donate_ton_06" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_01")), o.key === "donate_ton_1" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_06")), o.key === "donate_ton_3" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_1")), o.key === "donate_ton_5" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_3")), o.key === "donate_ton_10" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_5")), o.key === "donate_ton_25" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_10")), o.key === "donate_ton_50" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_25")), o.key === "donate_ton_75" && (o.isArchived = !this.uQuests.find(a => a.key === "donate_ton_50")), o
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
  jx = {
    class: "questChallenge"
  },
  Qx = ["src"],
  Kx = {
    class: "goldLightText"
  },
  Yx = {
    class: "white"
  },
  qx = ["src"],
  Gx = {
    class: "container",
    style: {
      "margin-bottom": "40px"
    }
  },
  Zx = {
    style: {
      display: "flex",
      margin: "20px 0",
      "align-items": "center"
    }
  },
  Xx = ["src"],
  Jx = {
    style: {
      "font-size": "1.2em",
      "font-weight": "bold"
    }
  },
  e2 = {
    key: 0
  },
  t2 = ["innerHTML"],
  n2 = {
    key: 2,
    style: {
      "font-size": "20px",
      "margin-bottom": "20px"
    }
  },
  o2 = {
    class: "goldText"
  },
  i2 = {
    key: 3
  },
  s2 = ["src"],
  a2 = {
    key: 4,
    style: {
      margin: "20px 0"
    }
  },
  l2 = {
    key: 5,
    style: {
      margin: "20px 0"
    }
  },
  r2 = {
    key: 0
  },
  c2 = {
    key: 6,
    style: {
      margin: "20px 0"
    }
  },
  u2 = {
    key: 7,
    style: {
      "padding-top": "20px"
    }
  },
  d2 = {
    key: 0,
    style: {
      margin: "20px 0"
    }
  },
  f2 = {
    style: {
      color: "#fff"
    }
  },
  h2 = {
    key: 1,
    style: {
      margin: "20px 0"
    }
  },
  m2 = {
    style: {
      color: "#fff"
    }
  },
  g2 = {
    key: 2
  },
  v2 = {
    key: 3,
    style: {
      color: "red"
    }
  },
  y2 = {
    key: 8,
    style: {
      margin: "20px 0"
    }
  },
  p2 = {
    key: 0,
    class: "center",
    style: {
      background: "#afc4f0",
      "border-radius": "8px",
      "margin-bottom": "10px"
    }
  },
  b2 = ["src"],
  w2 = {
    style: {
      color: "#fff",
      "margin-bottom": "5px"
    }
  },
  C2 = {
    class: "tips"
  },
  _2 = {
    key: 9
  },
  k2 = {
    key: 0,
    style: {
      color: "red"
    }
  },
  T2 = {
    key: 10
  },
  S2 = {
    key: 11
  };

function x2(e, t, n, o, s, a) {
  const l = ge("van-icon"),
    r = ge("van-badge"),
    c = ge("van-cell"),
    u = ge("van-cell-group"),
    d = ge("van-button"),
    f = ge("ton-wallet"),
    m = ge("van-field"),
    g = ge("van-popup");
  return W(), ae("div", jx, [s.extendQuestsProgress.length ? (W(), Me(u, {
    key: 0,
    inset: ""
  }, {
    default: le(() => [(W(!0), ae(Be, null, Ft(s.extendQuestsProgress, v => (W(), Me(c, {
      key: v.key,
      onClick: b => a.openQuest(v),
      title: v.title,
      size: "large",
      center: "",
      "is-link": ""
    }, uf({
      icon: le(() => [P("img", {
        src: e._getQuestImg(v.key),
        class: "questImg",
        alt: ""
      }, null, 8, Qx)]),
      label: le(() => [P("span", {
        class: ot({
          goldLightText: v.status === "complete"
        })
      }, [be("+" + M(e._number(v.reward)) + " ", 1), t[8] || (t[8] = P("span", {
        class: "coin25"
      }, null, -1))], 2)]),
      _: 2
    }, [v.status === "complete" ? {
      name: "right-icon",
      fn: le(() => [h(r, {
        dot: ""
      }, {
        default: le(() => [P("span", Kx, [be(M(e.t("Take")) + " ", 1), h(l, {
          name: "arrow"
        })])]),
        _: 1
      })]),
      key: "0"
    } : void 0]), 1032, ["onClick", "title"]))), 128))]),
    _: 1
  })) : Te("", !0), t[20] || (t[20] = P("br", null, null, -1)), s.extendQuestsFinished.length ? (W(), Me(u, {
    key: 1,
    inset: "",
    style: {
      "margin-bottom": "50px"
    }
  }, {
    title: le(() => [P("span", Yx, M(e.t("Completed Tasks")), 1)]),
    default: le(() => [(W(!0), ae(Be, null, Ft(s.extendQuestsFinished, v => (W(), Me(c, {
      key: v.key,
      onClick: b => a.openQuest(v),
      size: "large",
      center: "",
      class: "finished"
    }, {
      title: le(() => [be(M(v.title), 1)]),
      icon: le(() => [P("img", {
        src: e._getQuestImg(v.key),
        class: "questImg",
        alt: ""
      }, null, 8, qx)]),
      "right-icon": le(() => [P("span", null, [be(" +" + M(e._number(v.reward)) + " ", 1), h(l, {
        name: "checked"
      })])]),
      _: 2
    }, 1032, ["onClick"]))), 128))]),
    _: 1
  })) : Te("", !0), h(g, {
    show: s.isShowQuest,
    "onUpdate:show": t[7] || (t[7] = v => s.isShowQuest = v),
    closeable: "",
    "close-icon": "cross",
    position: "bottom",
    round: ""
  }, {
    default: le(() => [P("div", Gx, [P("div", Zx, [P("img", {
      src: e._getQuestImg(s.openedQuest.key),
      class: "questImg",
      alt: ""
    }, null, 8, Xx), P("div", null, [P("div", Jx, M(s.openedQuest.title), 1), P("div", null, [be(" +" + M(e._number(s.openedQuest.reward)) + " ", 1), t[9] || (t[9] = P("span", {
      class: "coin25"
    }, null, -1))])])]), s.openedQuest.key.includes("riddle_") ? (W(), ae("p", e2, '"' + M(s.openedQuest.desc) + '"', 1)) : (W(), ae("p", {
      key: 1,
      innerHTML: s.openedQuest.desc.replace(/\n/g, "<br />").replace("{reward}", e._number(s.openedQuest.reward))
    }, null, 8, t2)), s.openedQuest.status === "finished" && (s.openedQuest.key.includes("rebus_") || s.openedQuest.key.includes("riddle_")) ? (W(), ae("div", n2, [t[10] || (t[10] = be(" ✅ ")), P("span", o2, M(s.openedQuest.checkData), 1)])) : Te("", !0), s.openedQuest.checkType === "multiQuest" ? (W(), ae("div", i2, [P("div", null, M(e.t("To get the reward complete the quests:")), 1), (W(!0), ae(Be, null, Ft(s.openedQuest.multiQuests, v => (W(), ae("div", {
      key: "subQuest" + v.key,
      class: ot(["subQuest", v.isComplete ? "subQuestDone" : ""])
    }, [P("img", {
      src: e._getQuestImg(v.key),
      alt: ""
    }, null, 8, s2), v.isComplete ? (W(), Me(l, {
      key: 0,
      name: "checked",
      style: {
        margin: "0 5px"
      }
    })) : Te("", !0), t[11] || (t[11] = be()), P("span", null, M(v.title), 1)], 2))), 128))])) : Te("", !0), P("div", null, [s.openedQuest.actionUrl ? (W(), Me(d, {
      key: 0,
      type: s.openedQuest.status === "complete" ? "success" : "warning",
      round: "",
      onClick: a.actionButtonClick,
      size: "large"
    }, {
      default: le(() => [be(M(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["type", "onClick"])) : Te("", !0), s.openedQuest.actionTo ? (W(), Me(d, {
      key: 1,
      type: s.openedQuest.status === "complete" ? "success" : "warning",
      round: "",
      to: s.openedQuest.actionTo,
      size: "large"
    }, {
      default: le(() => [be(M(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["type", "to"])) : Te("", !0), s.openedQuest.checkType === "invite" ? (W(), Me(d, {
      key: 2,
      type: s.openedQuest.status === "complete" ? "success" : "warning",
      round: "",
      size: "large",
      onClick: e._shareBtnClick
    }, {
      default: le(() => [be(M(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["type", "onClick"])) : Te("", !0)]), s.openedQuest.status === "new" && s.openedQuest.key.includes("ton_wallet_") ? (W(), ae("div", a2, [h(f, {
      "transaction-value": s.openedQuest.isCheckProgress ? 0 : s.openedQuest.tonTransactionValue,
      "saved-wallet": s.connectedWallet,
      onWalletConnectHandler: a.tonConnectStatusHandler,
      onPaid: t[0] || (t[0] = v => a.actionCheck(5e3)),
      loading: s.openedQuest.isCheckProgress
    }, null, 8, ["transaction-value", "saved-wallet", "onWalletConnectHandler", "loading"])])) : Te("", !0), s.openedQuest.status === "new" && s.openedQuest.key.includes("donate_ton") ? (W(), ae("div", l2, [h(f, {
      onError: t[1] || (t[1] = v => s.isTransactionError = !0),
      "transaction-value": s.openedQuest.isCheckProgress ? 0 : s.openedQuest.checkCount,
      "saved-wallet": s.connectedWallet,
      onWalletConnectHandler: a.tonConnectStatusHandler,
      "transaction-address": e.uTonDonateAddress,
      onPaid: t[2] || (t[2] = v => a.actionCheck(5e3)),
      loading: s.openedQuest.isCheckProgress
    }, null, 8, ["transaction-value", "saved-wallet", "onWalletConnectHandler", "transaction-address", "loading"]), s.isTransactionError ? (W(), ae("div", r2, [P("p", null, M(e.t("Encountered an error? Reconnect the wallet and try again.")), 1), h(d, {
      color: "darkorange",
      size: "small",
      round: "",
      onClick: a.reconnectWallet
    }, {
      default: le(() => [be(M(e.t("Reconnect wallet")), 1)]),
      _: 1
    }, 8, ["onClick"])])) : Te("", !0)])) : Te("", !0), s.openedQuest.status === "new" && s.openedQuest.key.includes("tg_story") ? (W(), ae("div", c2, [h(d, {
      type: "success",
      size: "small",
      round: "",
      onClick: e.shareStory,
      loading: s.openedQuest.isCheckProgress
    }, {
      default: le(() => [be(M(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["onClick", "loading"])])) : Te("", !0), s.openedQuest.needCheck && s.openedQuest.status === "new" && s.openedQuest.isActionButtonClicked && a.showWalletCheckButton ? (W(), ae("div", u2, [
      ["bybit", "bybit_kyc", "bybit_deposit"].includes(s.openedQuest.checkType) ? (W(), ae("div", d2, [P("p", null, [P("span", f2, M(e.t("Enter your {Bybit} UID")), 1), t[12] || (t[12] = P("br", null, null, -1)), be(" " + M(e.t("Only accounts registered using the button above or entering the code: 86127 during registration can participate.")), 1)]), h(m, {
        modelValue: s.questCheckValue,
        "onUpdate:modelValue": t[3] || (t[3] = v => s.questCheckValue = v),
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
      }, null, 8, ["modelValue", "placeholder"])])) : s.openedQuest.checkType === "checkCode" ? (W(), ae("div", h2, [P("p", m2, M(e.t("Enter code")), 1), h(m, {
        modelValue: s.questCheckValue,
        "onUpdate:modelValue": t[4] || (t[4] = v => s.questCheckValue = v),
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
      }, null, 8, ["modelValue", "placeholder"])])) : (W(), ae("p", g2, M(e.t("After this action, click Check action.")), 1)), h(d, {
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
        default: le(() => [be(M(e.t("Check action")), 1)]),
        _: 1
      }, 8, ["onClick", "loading", "loading-text"]), s.checkErrorText ? (W(), ae("div", v2, M(s.checkErrorText), 1)) : Te("", !0)
    ])) : s.openedQuest.status === "new" && (s.openedQuest.key.includes("rebus_") || s.openedQuest.key.includes("riddle_")) ? (W(), ae("div", y2, [s.openedQuest.key.includes("rebus_") ? (W(), ae("div", p2, [P("img", {
      src: a.getRebusImg(s.openedQuest.key),
      alt: "",
      style: {
        "max-height": "150px"
      }
    }, null, 8, b2)])) : Te("", !0), P("div", w2, M(e.t("Enter answer:")), 1), h(m, {
      modelValue: s.questCheckValue,
      "onUpdate:modelValue": t[5] || (t[5] = v => s.questCheckValue = v),
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
    }, null, 8, ["modelValue", "placeholder"]), t[14] || (t[14] = P("br", null, null, -1)), P("div", C2, [be(M(e.t("Write the answer in English.")), 1), t[13] || (t[13] = P("br", null, null, -1)), be(" " + M(e.t("If it's difficult for you, look for communities where they can help you.")), 1)])])) : Te("", !0), s.openedQuest.status === "new" && s.openedQuest.key !== "tg_story" && !s.openedQuest.actionTo && !s.openedQuest.actionUrl && (s.openedQuest.checkType === "fakeCheck" || s.openedQuest.checkType === "checkCode") ? (W(), ae("div", _2, [h(d, {
      type: "success",
      round: "",
      onClick: a.actionCheck,
      loading: s.openedQuest.isCheckProgress,
      "loading-text": e.t("Checking...")
    }, {
      default: le(() => [be(M(s.openedQuest.actionText), 1)]),
      _: 1
    }, 8, ["onClick", "loading", "loading-text"]), s.checkErrorText ? (W(), ae("div", k2, M(s.checkErrorText), 1)) : Te("", !0)])) : Te("", !0), s.openedQuest.key.includes("name_check") ? (W(), ae("div", T2, [t[15] || (t[15] = P("br", null, null, -1)), t[16] || (t[16] = P("br", null, null, -1)), h(d, {
      icon: "link-o",
      onClick: t[6] || (t[6] = v => e._copyToClipboard(s.openedQuest.checkData)),
      round: "",
      loading: s.isQuestsUpdate,
      size: "large",
      type: "success"
    }, {
      default: le(() => [be(M(e.t("Copy emoji {emoji}", {
        emoji: s.openedQuest.checkData
      })), 1)]),
      _: 1
    }, 8, ["loading"])])) : Te("", !0), !s.openedQuest.needCheck && s.openedQuest.status === "new" ? (W(), ae("div", S2, [t[17] || (t[17] = P("br", null, null, -1)), t[18] || (t[18] = P("br", null, null, -1)), h(d, {
      icon: "replay",
      onClick: a.updateQuestStatus,
      round: "",
      loading: s.isQuestsUpdate,
      "loading-text": e.t("Updating..."),
      size: "mini",
      type: "success"
    }, {
      default: le(() => [be(M(e.t("Update status")), 1)]),
      _: 1
    }, 8, ["onClick", "loading", "loading-text"])])) : Te("", !0), s.openedQuest.status === "complete" ? (W(), Me(d, {
      key: 12,
      type: "warning",
      round: "",
      class: "btnFinish btnShadow clicked",
      size: "large",
      onClick: a.claimQuest,
      loading: s.isClaimLoading
    }, {
      default: le(() => [be(M(e.t("Take")) + " +" + M(e._number(s.openedQuest.reward)) + " ", 1), t[19] || (t[19] = P("span", {
        class: "coin25"
      }, null, -1))]),
      _: 1
    }, 8, ["onClick", "loading"])) : Te("", !0)])]),
    _: 1
  }, 8, ["show"])])
}
const A2 = St(Wx, [
    ["render", x2],
    ["__scopeId", "data-v-4beec549"]
  ]),
  E2 = {
    components: {
      GamePopup: hm
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
  I2 = {
    class: "content"
  },
  P2 = {
    style: {
      "font-size": "1.2em",
      "margin-bottom": "10px"
    }
  },
  O2 = {
    key: 0
  },
  R2 = {
    key: 1
  },
  D2 = {
    class: "action"
  },
  B2 = {
    key: 1
  },
  $2 = {
    class: "center"
  },
  M2 = {
    class: "timer",
    style: {
      display: "inline-block",
      "font-size": "1.3em",
      "font-weight": "800"
    }
  },
  L2 = {
    class: "dailyRewardGrid"
  },
  N2 = ["onClick"],
  F2 = {
    class: "day"
  },
  V2 = {
    class: "reward zTextShadow2white",
    style: {
      "font-weight": "800",
      "font-size": "1.4em"
    }
  },
  z2 = {
    key: 0,
    class: "dailyRewardPopupBottomClaim"
  };

function H2(e, t, n, o, s, a) {
  const l = ge("van-count-down"),
    r = ge("van-icon"),
    c = ge("van-badge"),
    u = ge("van-button"),
    d = ge("van-popup");
  return W(), ae("div", null, [P("div", {
    class: ot(["dailyReward clicked", {
      grayscale: !a.isDailyCanTake
    }]),
    onClick: t[0] || (t[0] = f => s.isShowDailyReward = !0)
  }, [t[4] || (t[4] = P("div", {
    class: "icon"
  }, [P("div", {
    class: "img"
  }, [P("span", {
    class: "coin60"
  })])], -1)), P("div", I2, [P("div", P2, M(e.t("Daily reward")), 1), P("div", null, [a.isDailyCanTake ? (W(), ae("span", R2, M(e.t("Hurry up and get it")), 1)) : (W(), ae("span", O2, M(e.t("Can be claim in")), 1)), t[3] || (t[3] = be("  ")), h(l, {
    time: s.timeToNextDay,
    class: "countDown",
    style: {
      color: "#fff",
      "font-weight": "bold",
      width: "7ch",
      display: "inline-block"
    }
  }, null, 8, ["time"])])]), P("div", D2, [a.isDailyCanTake ? (W(), Me(c, {
    key: 0,
    dot: "",
    style: {
      "white-space": "nowrap"
    }
  }, {
    default: le(() => [be(M(e.t("Claim")) + " ", 1), h(r, {
      name: "arrow"
    })]),
    _: 1
  })) : (W(), ae("div", B2, [h(r, {
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
    default: le(() => [P("div", $2, [P("h1", null, M(e.t("Daily reward")), 1), P("p", null, M(e.t("If you miss a day, you start all over again")), 1), P("div", M2, [be(M(e.t("Until the next day:")) + " ", 1), h(l, {
      time: s.timeToNextDay,
      style: {
        display: "inline-block",
        "padding-right": "5px",
        "font-size": "1.3em",
        width: "7ch"
      }
    }, null, 8, ["time"])])]), t[6] || (t[6] = P("br", null, null, -1)), P("div", L2, [(W(!0), ae(Be, null, Ft(a.rewardsExtend, f => (W(), ae("div", {
      class: ot(["rewardItem", {
        isTaken: !f.isTaken,
        isCanTake: f.isCanTake,
        clicked: f.isCanTake
      }]),
      key: f.key,
      onClick: m => f.isCanTake ? a.claimDailyReward(f) : ""
    }, [P("div", F2, M(e.t("Day")) + " " + M(f.key), 1), t[5] || (t[5] = P("div", {
      class: "rewardIcon"
    }, null, -1)), P("div", V2, M(e._numberShort(f.rewardMoney)), 1), f.isTaken ? (W(), Me(r, {
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
    })) : Te("", !0)], 10, N2))), 128))]), a.isDailyCanTake ? (W(), ae("div", z2, [h(u, {
      type: "warning",
      size: "large",
      round: "",
      style: {
        "font-size": "1.2em"
      },
      loading: s.isClaimLoading,
      onClick: t[1] || (t[1] = f => a.claimDailyReward(s.lastDailyRewardCanTake))
    }, {
      default: le(() => [be(M(e.t("Claim Reward")), 1)]),
      _: 1
    }, 8, ["loading"])])) : Te("", !0)]),
    _: 1
  }, 8, ["show", "style"])])
}
const U2 = St(E2, [
  ["render", H2],
  ["__scopeId", "data-v-8158abb7"]
]);
var W2 = !1;
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

function j2() {
  const e = Td(!0),
    t = e.run(() => F({}));
  let n = [],
    o = [];
  const s = cr({
    install(a) {
      Ra(s), s._a = a, a.provide(vm, s), a.config.globalProperties.$pinia = s, o.forEach(l => n.push(l)), o = []
    },
    use(a) {
      return !this._a && !W2 ? o.push(a) : n.push(a), this
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

function ju(e, t, n, o = ym) {
  e.push(t);
  const s = () => {
    const a = e.indexOf(t);
    a > -1 && (e.splice(a, 1), o())
  };
  return !n && Sd() && ag(s), s
}

function Zo(e, ...t) {
  e.slice().forEach(n => {
    n(...t)
  })
}
const Q2 = e => e(),
  Qu = Symbol(),
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
const K2 = Symbol();

function Y2(e) {
  return !jl(e) || !e.hasOwnProperty(K2)
}
const {
  assign: eo
} = Object;

function q2(e) {
  return !!(it(e) && e.effect)
}

function G2(e, t, n, o) {
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
  const v = o.state.value[e];
  !a && !v && (o.state.value[e] = {}), F({});
  let b;

  function p(T) {
    let R;
    u = d = !1, typeof T == "function" ? (T(o.state.value[e]), R = {
      type: Ui.patchFunction,
      storeId: e,
      events: g
    }) : (Ql(o.state.value[e], T), R = {
      type: Ui.patchObject,
      payload: T,
      storeId: e,
      events: g
    });
    const D = b = Symbol();
    Oe().then(() => {
      b === D && (u = !0)
    }), d = !0, Zo(f, R, o.state.value[e])
  }
  const w = a ? function() {
    const {
      state: R
    } = n, D = R ? R() : {};
    this.$patch(S => {
      eo(S, D)
    })
  } : ym;

  function y() {
    l.stop(), f = [], m = [], o._s.delete(e)
  }
  const C = (T, R = "") => {
      if (Qu in T) return T[ml] = R, T;
      const D = function() {
        Ra(o);
        const S = Array.from(arguments),
          I = [],
          $ = [];

        function X(te) {
          I.push(te)
        }

        function ce(te) {
          $.push(te)
        }
        Zo(m, {
          args: S,
          name: D[ml],
          store: k,
          after: X,
          onError: ce
        });
        let U;
        try {
          U = T.apply(this && this.$id === e ? this : k, S)
        } catch (te) {
          throw Zo($, te), te
        }
        return U instanceof Promise ? U.then(te => (Zo(I, te), te)).catch(te => (Zo($, te), Promise.reject(te))) : (Zo(I, U), U)
      };
      return D[Qu] = !0, D[ml] = R, D
    },
    _ = {
      _p: o,
      $id: e,
      $onAction: ju.bind(null, m),
      $patch: p,
      $reset: w,
      $subscribe(T, R = {}) {
        const D = ju(f, T, R.detached, () => S()),
          S = l.run(() => re(() => o.state.value[e], I => {
            (R.flush === "sync" ? d : u) && T({
              storeId: e,
              type: Ui.direct,
              events: g
            }, I)
          }, eo({}, c, R)));
        return D
      },
      $dispose: y
    },
    k = Je(_);
  o._s.set(e, k);
  const B = (o._a && o._a.runWithContext || Q2)(() => o._e.run(() => (l = Td()).run(() => t({
    action: C
  }))));
  for (const T in B) {
    const R = B[T];
    if (it(R) && !q2(R) || lo(R)) a || (v && Y2(R) && (it(R) ? R.value = v[T] : Ql(R, v[T])), o.state.value[e][T] = R);
    else if (typeof R == "function") {
      const D = C(R, T);
      B[T] = D, r.actions[T] = R
    }
  }
  return eo(k, B), eo(He(k), B), Object.defineProperty(k, "$state", {
    get: () => o.state.value[e],
    set: T => {
      p(R => {
        eo(R, T)
      })
    }
  }), o._p.forEach(T => {
    eo(k, l.run(() => T({
      store: k,
      app: o._a,
      pinia: o,
      options: r
    })))
  }), v && a && n.hydrate && n.hydrate(k.$state, v), u = !0, d = !0, k
}

function Wr(e, t, n) {
  let o, s;
  const a = typeof t == "function";
  typeof e == "string" ? (o = e, s = a ? n : t) : (s = e, o = e.id);

  function l(r, c) {
    const u = dv();
    return r = r || (u ? Rt(vm, null) : null), r && Ra(r), r = gm, r._s.has(o) || (a ? pm(o, t, s, r) : G2(o, s, r)), r._s.get(o)
  }
  return l.$id = o, l
}
const ao = Wr("user", {
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
  jr = Wr("state", {
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
      isAfterDataLoaded: !1
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
      }
    },
    getters: {
      selectedTheme() {
        return this.isDarkMode ? "dark" : "light"
      }
    }
  }),
  bm = Wr("db", {
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
      var v = n(s(a(o(g), 8 * g.length)));
      return v.toLowerCase()
    };

    function n(g) {
      for (var v, b = "0123456789ABCDEF", p = "", w = 0; w < g.length; w++) v = g.charCodeAt(w), p += b.charAt(v >>> 4 & 15) + b.charAt(15 & v);
      return p
    }

    function o(g) {
      for (var v = Array(g.length >> 2), b = 0; b < v.length; b++) v[b] = 0;
      for (b = 0; b < 8 * g.length; b += 8) v[b >> 5] |= (255 & g.charCodeAt(b / 8)) << b % 32;
      return v
    }

    function s(g) {
      for (var v = "", b = 0; b < 32 * g.length; b += 8) v += String.fromCharCode(g[b >> 5] >>> b % 32 & 255);
      return v
    }

    function a(g, v) {
      g[v >> 5] |= 128 << v % 32, g[14 + (v + 64 >>> 9 << 4)] = v;
      for (var b = 1732584193, p = -271733879, w = -1732584194, y = 271733878, C = 0; C < g.length; C += 16) {
        var _ = b,
          k = p,
          E = w,
          B = y;
        p = d(p = d(p = d(p = d(p = u(p = u(p = u(p = u(p = c(p = c(p = c(p = c(p = r(p = r(p = r(p = r(p, w = r(w, y = r(y, b = r(b, p, w, y, g[C + 0], 7, -680876936), p, w, g[C + 1], 12, -389564586), b, p, g[C + 2], 17, 606105819), y, b, g[C + 3], 22, -1044525330), w = r(w, y = r(y, b = r(b, p, w, y, g[C + 4], 7, -176418897), p, w, g[C + 5], 12, 1200080426), b, p, g[C + 6], 17, -1473231341), y, b, g[C + 7], 22, -45705983), w = r(w, y = r(y, b = r(b, p, w, y, g[C + 8], 7, 1770035416), p, w, g[C + 9], 12, -1958414417), b, p, g[C + 10], 17, -42063), y, b, g[C + 11], 22, -1990404162), w = r(w, y = r(y, b = r(b, p, w, y, g[C + 12], 7, 1804603682), p, w, g[C + 13], 12, -40341101), b, p, g[C + 14], 17, -1502002290), y, b, g[C + 15], 22, 1236535329), w = c(w, y = c(y, b = c(b, p, w, y, g[C + 1], 5, -165796510), p, w, g[C + 6], 9, -1069501632), b, p, g[C + 11], 14, 643717713), y, b, g[C + 0], 20, -373897302), w = c(w, y = c(y, b = c(b, p, w, y, g[C + 5], 5, -701558691), p, w, g[C + 10], 9, 38016083), b, p, g[C + 15], 14, -660478335), y, b, g[C + 4], 20, -405537848), w = c(w, y = c(y, b = c(b, p, w, y, g[C + 9], 5, 568446438), p, w, g[C + 14], 9, -1019803690), b, p, g[C + 3], 14, -187363961), y, b, g[C + 8], 20, 1163531501), w = c(w, y = c(y, b = c(b, p, w, y, g[C + 13], 5, -1444681467), p, w, g[C + 2], 9, -51403784), b, p, g[C + 7], 14, 1735328473), y, b, g[C + 12], 20, -1926607734), w = u(w, y = u(y, b = u(b, p, w, y, g[C + 5], 4, -378558), p, w, g[C + 8], 11, -2022574463), b, p, g[C + 11], 16, 1839030562), y, b, g[C + 14], 23, -35309556), w = u(w, y = u(y, b = u(b, p, w, y, g[C + 1], 4, -1530992060), p, w, g[C + 4], 11, 1272893353), b, p, g[C + 7], 16, -155497632), y, b, g[C + 10], 23, -1094730640), w = u(w, y = u(y, b = u(b, p, w, y, g[C + 13], 4, 681279174), p, w, g[C + 0], 11, -358537222), b, p, g[C + 3], 16, -722521979), y, b, g[C + 6], 23, 76029189), w = u(w, y = u(y, b = u(b, p, w, y, g[C + 9], 4, -640364487), p, w, g[C + 12], 11, -421815835), b, p, g[C + 15], 16, 530742520), y, b, g[C + 2], 23, -995338651), w = d(w, y = d(y, b = d(b, p, w, y, g[C + 0], 6, -198630844), p, w, g[C + 7], 10, 1126891415), b, p, g[C + 14], 15, -1416354905), y, b, g[C + 5], 21, -57434055), w = d(w, y = d(y, b = d(b, p, w, y, g[C + 12], 6, 1700485571), p, w, g[C + 3], 10, -1894986606), b, p, g[C + 10], 15, -1051523), y, b, g[C + 1], 21, -2054922799), w = d(w, y = d(y, b = d(b, p, w, y, g[C + 8], 6, 1873313359), p, w, g[C + 15], 10, -30611744), b, p, g[C + 6], 15, -1560198380), y, b, g[C + 13], 21, 1309151649), w = d(w, y = d(y, b = d(b, p, w, y, g[C + 4], 6, -145523070), p, w, g[C + 11], 10, -1120210379), b, p, g[C + 2], 15, 718787259), y, b, g[C + 9], 21, -343485551), b = f(b, _), p = f(p, k), w = f(w, E), y = f(y, B)
      }
      return Array(b, p, w, y)
    }

    function l(g, v, b, p, w, y) {
      return f(m(f(f(v, g), f(p, y)), w), b)
    }

    function r(g, v, b, p, w, y, C) {
      return l(v & b | ~v & p, g, v, w, y, C)
    }

    function c(g, v, b, p, w, y, C) {
      return l(v & p | b & ~p, g, v, w, y, C)
    }

    function u(g, v, b, p, w, y, C) {
      return l(v ^ b ^ p, g, v, w, y, C)
    }

    function d(g, v, b, p, w, y, C) {
      return l(b ^ (v | ~p), g, v, w, y, C)
    }

    function f(g, v) {
      var b = (65535 & g) + (65535 & v);
      return (g >> 16) + (v >> 16) + (b >> 16) << 16 | 65535 & b
    }

    function m(g, v) {
      return g << v | g >>> 32 - v
    }
    return t(e)
  },
  Ku = function(e, t) {
    return Object.keys(t).length === 0 ? e : e + "?" + (void 0)(t, {
      arrayFormat: "bracket"
    })
  },
  Z2 = function() {
    return Date.now()
  },
  X2 = function() {
    return 1e3
  },
  J2 = function() {
    return Math.floor(Z2() / X2())
  },
  eA = function(e, t) {
    return km(encodeURIComponent(`${e}_${t}`))
  },
  tA = function(e, t) {
    const n = ao(),
      o = !!e;
    e instanceof Object && (e = JSON.stringify(e));
    const s = J2(),
      a = eA(s, o ? e : "");
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
  nA = async function(e, t, n) {
    const o = `https://${wm}${e}`;
    let s = null,
      a = 1e3,
      l = null;
    try {
      s = await (await fetch(Ku(o, t), tA(n))).json()
    } catch (r) {
      await new Promise(c => setTimeout(c, a * Math.pow(1.8, i))), console.error(r + ": " + Ku(o, t)), l = r
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
        tonTransactions: "/coins/ton/transactions",
        quizResultSet: "/quiz/result/set",
        quizClaim: "/quiz/claim",
        autoFeedBuy: "/autofeed/buy"
      } [e],
      a = await nA(s, {}, {
        data: t
      });
    if (a.success) console.log(`>>> api: ${e} response: %o`, a.data);
    else throw ao().authHash && n && Bo({
      type: "danger",
      message: a.error ? a.error : "Some problem... please repeat"
    }), a.error;
    return a.data
  }, oA = {
    data() {
      return {
        stores: {
          user: ao(),
          state: jr(),
          db: bm()
        }
      }
    },
    methods: {
      apiCall: oa
    }
  }, iA = {
    props: {
      lackOfCoin: {
        type: Number,
        default: 0
      }
    },
    components: {
      TonWallet: Ur
    },
    async mounted() {
      await this.loadTonWallet()
    },
    watch: {
      async paymentType(e) {
        e === "ton" && await this.loadTonHistory()
      }
    },
    data: function() {
      return {
        isBuyLoading: !1,
        paymentType: "stars",
        isTonLoading: !1,
        connectedWallet: "",
        connectedWalletFirstLoaded: !1,
        tonTransactions: [],
        isHistoryLoading: !1
      }
    },
    methods: {
      async loadTonHistory() {
        this.isHistoryLoading = !0;
        const e = await oa("tonTransactions");
        this.tonTransactions = e.transactions, this.isHistoryLoading = !1, this.tonTransactions.length > 0 && await this._completeOnboarding(this.onBoard.buyTon)
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
            await this._delay(1e3), await this.loadHero(), this._animateMoneyFromCenter(e.coins), await this.loadTonHistory()
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
              await this._completeOnboarding(this.onBoard.buyTon), this._animateMoneyFromCenter(e.coins);
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
  }, sA = {
    key: 0
  }, aA = ["innerHTML"], lA = {
    style: {
      "font-size": "1.3em",
      "font-weight": "700",
      "margin-bottom": "10px"
    }
  }, rA = {
    key: 1,
    class: "panelBrown flexLeft",
    style: {
      margin: "10px 0"
    }
  }, cA = {
    style: {
      padding: "0 10px"
    }
  }, uA = {
    style: {
      "font-size": "1.4em",
      "font-weight": "700"
    }
  }, dA = {
    style: {
      color: "var(--van-text-color-2)"
    },
    class: "flexRight"
  }, fA = {
    key: 0
  }, hA = {
    key: 1
  }, mA = {
    class: "flexCenter"
  }, gA = {
    key: 2
  }, vA = {
    class: "flexLeft"
  }, yA = {
    style: {
      margin: "0 10px"
    }
  }, pA = {
    key: 0,
    class: "center"
  }, bA = {
    key: 0
  }, wA = {
    class: "tableHistory"
  }, CA = ["onClick"], _A = {
    style: {
      "border-bottom": "1px dashed #fff"
    }
  }, kA = {
    key: 0,
    style: {
      "margin-top": "10px"
    }
  }, TA = {
    key: 1,
    class: "center"
  };

function SA(e, t, n, o, s, a) {
  const l = ge("van-tab"),
    r = ge("van-tabs"),
    c = ge("van-icon"),
    u = ge("van-button"),
    d = ge("van-badge"),
    f = ge("van-cell"),
    m = ge("van-cell-group"),
    g = ge("van-loading");
  return W(), ae("div", null, [n.lackOfCoin > 0 ? (W(), ae("div", sA, [P("h1", {
    innerHTML: e.t("You are {count} {IMG_COIN} short to make this purchase", {
      count: e._number(n.lackOfCoin),
      IMG_COIN: e.IMG_COIN
    })
  }, null, 8, aA), P("div", lA, M(e.t("Top up your balance:")), 1)])) : Te("", !0), h(r, {
    active: e.paymentType,
    "onUpdate:active": t[0] || (t[0] = v => e.paymentType = v),
    type: "card",
    ellipsis: !1,
    style: {
      "margin-bottom": "5px"
    }
  }, {
    default: le(() => [h(l, {
      name: "stars",
      title: e.t("Stars")
    }, null, 8, ["title"]), h(l, {
      name: "ton",
      title: "TON",
      dot: !e._isOnboardingComplete(e.onBoard.buyTon)
    }, null, 8, ["dot"])]),
    _: 1
  }, 8, ["active"]), e.paymentType === "ton" && e.isTonLoading ? (W(), ae("div", rA, [h(c, {
    name: "warning-o"
  }), P("div", cA, [be(" • " + M(e.t("Transaction processing may take a few minutes.")) + " ", 1), t[1] || (t[1] = P("br", null, null, -1)), be(" • " + M(e.t("You can leave this page, {COIN_NAME} will be credited automatically.", {
    COIN_NAME: e.COIN_NAME
  })), 1), t[2] || (t[2] = P("br", null, null, -1)), be(" • " + M(e.t("You can view the list of processed transactions in the history section at the bottom.")), 1)])])) : Te("", !0), h(m, {
    inset: "",
    class: "noMargin"
  }, {
    default: le(() => [(W(!0), ae(Be, null, Ft(e.dbPurchase, v => (W(), Me(f, {
      key: v.coins + "_" + v.price,
      center: ""
    }, {
      title: le(() => [t[3] || (t[3] = P("span", {
        class: "coin33"
      }, null, -1)), t[4] || (t[4] = be()), P("span", uA, M(e._number(v.coins)), 1)]),
      "right-icon": le(() => [P("div", dA, [v.key === 1e4 ? (W(), ae("span", fA, M(e.t("Most popular!")), 1)) : Te("", !0), v.key === 25e4 ? (W(), ae("span", hA, M(e.t("Best Price!")), 1)) : Te("", !0), e.paymentType === "stars" ? (W(), Me(u, {
        key: 2,
        type: "success",
        size: "small",
        style: {
          "margin-left": "10px"
        },
        onClick: b => a.buyStars(v),
        loading: e.isBuyLoading
      }, {
        default: le(() => [be("⭐️ " + M(e._number(v.price)), 1)]),
        _: 2
      }, 1032, ["onClick", "loading"])) : Te("", !0), e.paymentType === "ton" ? (W(), Me(u, {
        key: 3,
        type: "success",
        size: "small",
        style: {
          "margin-left": "10px"
        },
        onClick: b => a.buyTon(v),
        loading: e.isTonLoading
      }, {
        default: le(() => [h(d, {
          dot: !e._isOnboardingComplete(e.onBoard.buyTon)
        }, {
          default: le(() => [P("div", mA, [t[5] || (t[5] = P("img", {
            src: mm,
            alt: "",
            width: "15px"
          }, null, -1)), be("️ " + M(e._numberExact(v.priceTon)), 1)])]),
          _: 2
        }, 1032, ["dot"])]),
        _: 2
      }, 1032, ["onClick", "loading"])) : Te("", !0)])]),
      _: 2
    }, 1024))), 128))]),
    _: 1
  }), e.paymentType === "ton" ? (W(), ae("div", gA, [P("h2", vA, [h(u, {
    size: "small",
    type: "warning",
    loading: e.isHistoryLoading,
    onClick: a.loadTonHistory
  }, {
    default: le(() => [h(c, {
      name: "replay"
    })]),
    _: 1
  }, 8, ["loading", "onClick"]), P("span", yA, M(e.t("History")), 1)]), e.isHistoryLoading ? (W(), ae("div", pA, [h(g)])) : (W(), ae(Be, {
    key: 1
  }, [e.tonTransactions.length > 0 ? (W(), ae("div", bA, [P("table", wA, [P("tbody", null, [P("tr", null, [P("td", null, M(e.t("Date")), 1), t[6] || (t[6] = P("td", null, [P("span", {
    class: "coin25"
  })], -1)), t[7] || (t[7] = P("td", null, "TON", -1)), t[8] || (t[8] = P("td", null, "tx", -1))]), (W(!0), ae(Be, null, Ft(e.tonTransactions, v => (W(), ae("tr", null, [P("td", null, M(new Date(v.date.replace(" ", "T") + "Z").toLocaleString()), 1), P("td", null, M(e._numberShort(v.coins)), 1), P("td", null, M(v.ton), 1), P("td", {
    onClick: b => e._openUrl("https://tonscan.org/tx/" + v.trx)
  }, [P("span", _A, "..." + M(v.trx.slice(-8)), 1)], 8, CA)]))), 256))])]), e.tonTransactions.length === 10 ? (W(), ae("div", kA, M(e.t("The last {count} transactions are displayed", {
    count: 10
  })), 1)) : Te("", !0)])) : (W(), ae("p", TA, M(e.t("No transactions found")), 1))], 64))])) : Te("", !0)])
}
const Tm = St(iA, [
    ["render", SA],
    ["__scopeId", "data-v-2c069f70"]
  ]),
  xA = {
    components: {
      Topup: Tm
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
  AA = {
    style: {
      padding: "15px 15px 0 15px"
    }
  },
  EA = {
    width: "100%"
  },
  IA = {
    style: {
      width: "100%",
      display: "flex",
      "align-items": "center"
    }
  },
  PA = {
    key: 0,
    style: {
      "font-size": "0.8em"
    }
  },
  OA = {
    key: 0,
    class: "panelRed",
    style: {
      margin: "30px 0"
    }
  },
  RA = {
    style: {
      "font-weight": "800",
      "font-size": "1.4em"
    }
  },
  DA = {
    class: "white"
  },
  BA = {
    class: "flexLeft",
    style: {
      margin: "0 0 0 -5px"
    }
  },
  $A = {
    style: {
      "margin-left": "5px"
    }
  },
  MA = {
    class: "zTextShadow2sweet",
    style: {
      "font-weight": "800",
      "font-size": "1.5em"
    }
  },
  LA = {
    style: {
      "font-weight": "800",
      color: "#FFC04A",
      "font-size": "1.5em"
    }
  },
  NA = {
    class: "list"
  },
  FA = {
    class: "flexLeft",
    style: {
      margin: "30px 0 0 -5px"
    }
  },
  VA = {
    style: {
      "margin-left": "5px"
    }
  },
  zA = {
    class: "zTextShadow2sweet",
    style: {
      "font-weight": "800",
      "font-size": "1.5em"
    }
  },
  HA = {
    style: {
      "font-weight": "800",
      color: "#FFC04A",
      "font-size": "1.5em"
    }
  },
  UA = {
    key: 0,
    style: {
      color: "#fff",
      "font-size": "1.3em"
    }
  },
  WA = {
    key: 0
  },
  jA = {
    key: 1
  },
  QA = {
    class: "list"
  },
  KA = {
    style: {
      color: "#fff",
      "font-size": "1.3em",
      "font-weight": "bold",
      margin: "0 20px"
    },
    class: "zTextShadow2white"
  },
  YA = {
    class: "flexLeft",
    style: {
      margin: "-10px 0 0 -5px"
    }
  },
  qA = {
    style: {
      "margin-left": "5px"
    }
  },
  GA = {
    class: "zTextShadow2sweet",
    style: {
      "font-weight": "800",
      "font-size": "1.5em"
    }
  },
  ZA = {
    style: {
      "font-weight": "800",
      color: "#FFC04A"
    }
  },
  XA = {
    class: "list"
  },
  JA = {
    class: "container"
  },
  eE = {
    style: {
      height: "calc(100vh - 60px)",
      "overflow-y": "scroll"
    }
  },
  tE = {
    style: {
      "font-size": "2em"
    }
  },
  nE = {
    style: {
      "font-size": "2em"
    }
  },
  oE = {
    style: {
      margin: "20px 0 10px 15px"
    }
  },
  iE = {
    style: {
      "font-size": "2em"
    }
  };

function sE(e, t, n, o, s, a) {
  const l = ge("van-icon"),
    r = ge("van-button"),
    c = ge("van-popup"),
    u = ge("topup"),
    d = ge("van-cell"),
    f = ge("van-cell-group");
  return W(), ae("div", {
    class: ot(["topBar", {
      needBg: a.isNeedBg,
      noBg: a.isNoBg && !a.isNeedBg,
      staticBg: n.staticBg
    }])
  }, [P("div", AA, [P("table", EA, [P("tbody", null, [P("tr", null, [P("td", IA, [P("div", {
    class: ot(["metric token nowrap panelBrown", [e.uFeed.isNeedFeed ? "panelRed" : "panelBrown"]]),
    id: "tokens",
    onClick: t[0] || (t[0] = (...m) => a.showTphPopup && a.showTphPopup(...m))
  }, [t[13] || (t[13] = P("div", {
    class: "token30",
    style: {
      margin: "0 10px 0 -8px"
    }
  }, null, -1)), e.uFeed.isNeedFeed ? (W(), ae("span", PA, M(e.t("Mining stopped")), 1)) : (W(), ae("span", {
    key: 1,
    style: an([{
      "font-size": "1.3em",
      "font-weight": "800"
    }, {
      width: e.uHero.tokens.toString().length + 1 + "ch"
    }]),
    class: "zTextShadow2sweet center"
  }, M(e._numberShort(e.uHero.tokens)), 5)), e._isOnboardingComplete(e.onBoard.token) ? Te("", !0) : (W(), Me(l, {
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
    default: le(() => [e.uFeed.isNeedFeed ? (W(), ae("div", OA, [P("div", RA, M(e.t("Token mining has stopped. ")), 1), P("div", DA, M(e.t("The animals need to be fed.")), 1), h(r, {
      type: "warning",
      size: "large",
      onClick: a.seeFeedDetails,
      style: {
        "margin-top": "10px"
      }
    }, {
      default: le(() => [be(M(e.t("See details")), 1)]),
      _: 1
    }, 8, ["onClick"])])) : Te("", !0), P("div", BA, [t[14] || (t[14] = P("span", {
      class: "token50"
    }, null, -1)), P("div", $A, [P("div", MA, M(e.t("{TOKEN_NAME} tokens", {
      TOKEN_NAME: e.TOKEN_NAME
    })), 1), P("div", LA, M(e._number(e.uHero.tokens)), 1)])]), P("ul", NA, [P("li", null, M(e.t("This is the number of tokens you'll get from the AirDrop.")), 1)]), P("div", FA, [t[18] || (t[18] = P("span", {
      class: "tph50"
    }, null, -1)), P("div", VA, [P("div", zA, M(e.t("Tokens per Hour")), 1), P("div", null, [P("span", HA, M(e._number(e.uHero.tph)), 1), e.uHero.tphBoost || e.uHero.tphAlliance ? (W(), ae("span", UA, [be(" (" + M(e._number(e.uHero.tphBase)) + " ", 1), e.uHero.tphBoost ? (W(), ae("span", WA, [be("+ " + M(e._number(e.uHero.tphBoost)) + " ", 1), t[15] || (t[15] = P("span", {
      class: "tphIcon",
      style: {
        "background-image": "url('/assets/img/decor/icon_boost.png')"
      }
    }, null, -1))])) : Te("", !0), e.uHero.tphAlliance ? (W(), ae("span", jA, [be("+ " + M(e._number(e.uHero.tphAlliance)) + " ", 1), t[16] || (t[16] = P("span", {
      class: "tphIcon",
      style: {
        "background-image": "url('/assets/img/decor/icon_ali.png')"
      }
    }, null, -1))])) : Te("", !0), t[17] || (t[17] = be(") "))])) : Te("", !0)])])]), P("ul", QA, [P("li", null, M(e.t("Tokens are added automatically, even when you're offline.")), 1), P("li", null, M(e.t("Buy new animals, level them up, and boost your hourly income to earn more {TOKEN_NAME} tokens.", {
      TOKEN_NAME: e.TOKEN_NAME
    })), 1), P("li", null, M(e.t("The level of your alliance also increases your hourly earnings.")), 1), P("li", null, M(e.t("You can increase your hourly earnings by buying a boost.")), 1)])]),
    _: 1
  }, 8, ["show"]), P("div", {
    class: "metric coin nowrap",
    id: "coins",
    onClick: t[2] || (t[2] = (...m) => a.showCoinPopup && a.showCoinPopup(...m))
  }, [t[19] || (t[19] = P("div", {
    class: "coin38",
    style: {
      margin: "0 -10px"
    }
  }, null, -1)), P("span", KA, M(e._numberShort(e.uHero.coins)), 1), h(r, {
    type: "success",
    size: "small",
    style: {
      "aspect-ratio": "1",
      margin: "0 -10px"
    },
    icon: "plus"
  }), e._isOnboardingComplete(e.onBoard.coin) ? Te("", !0) : (W(), Me(l, {
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
    default: le(() => [P("div", YA, [t[20] || (t[20] = P("span", {
      class: "coin60"
    }, null, -1)), P("div", qA, [P("div", GA, M(e.COIN_NAME), 1), P("div", ZA, M(e._number(e.uHero.coins)), 1)])]), P("ul", XA, [P("li", null, M(e.t("This is the in-game currency.")), 1), P("li", null, M(e.t("Complete quests and invite friends to earn more coins!")), 1)]), P("p", null, M(e.t("Or you can buy them!")), 1), h(u)]),
    _: 1
  }, 8, ["show"])]), P("td", {
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
      }, null, 8, ["title"]), e.uProfile.isAlfaTester || e.gameConfig["referral.commission.friend_count"] > 0 && e.uProfile.friends >= e.gameConfig["referral.commission.friend_count"] ? (W(), Me(d, {
        key: 0,
        center: "",
        title: " 💰 " + e.t("Referral commission"),
        "is-link": "",
        to: "/referral/commission",
        onClick: t[6] || (t[6] = m => {
          e.isMenuOpen = !1
        }),
        size: "large"
      }, null, 8, ["title"])) : Te("", !0)]),
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
    }), t[21] || (t[21] = P("br", null, null, -1))]),
    _: 1
  }, 8, ["show"]), h(c, {
    show: e.isShowLangPicker,
    "onUpdate:show": t[12] || (t[12] = m => e.isShowLangPicker = m),
    position: "top",
    closeable: ""
  }, {
    default: le(() => [P("h2", JA, M(e.t("Select language")), 1), P("div", eE, [h(f, {
      inset: ""
    }, {
      default: le(() => [h(d, {
        title: a.firstLang.title,
        "is-link": "",
        value: a.firstLang.key,
        center: "",
        onClick: t[10] || (t[10] = m => a.onLangSelect(a.firstLang.key))
      }, {
        icon: le(() => [P("span", tE, M(a.firstLang.icon) + " ", 1)]),
        _: 1
      }, 8, ["title", "value"]), a.userLang ? (W(), Me(d, {
        key: 0,
        title: a.userLang.title,
        "is-link": "",
        value: a.userLang.key,
        center: "",
        onClick: t[11] || (t[11] = m => a.onLangSelect(a.userLang.key))
      }, {
        icon: le(() => [P("span", nE, M(a.userLang.icon) + " ", 1)]),
        _: 1
      }, 8, ["title", "value"])) : Te("", !0)]),
      _: 1
    }), (W(!0), ae(Be, null, Ft(a.langByFirstLetter, (m, g) => (W(), ae(Be, {
      key: g
    }, [P("div", oE, M(g), 1), h(f, {
      inset: ""
    }, {
      default: le(() => [(W(!0), ae(Be, null, Ft(m, v => (W(), Me(d, {
        key: v.key,
        title: v.title,
        label: v.titleEn,
        "is-link": "",
        value: v.key,
        center: "",
        onClick: b => a.onLangSelect(v.key)
      }, {
        icon: le(() => [P("span", iE, M(v.icon) + " ", 1)]),
        _: 2
      }, 1032, ["title", "label", "value", "onClick"]))), 128))]),
      _: 2
    }, 1024)], 64))), 128))])]),
    _: 1
  }, 8, ["show"])], 2)])])])])], 2)
}
const Qr = St(xA, [
    ["render", sE],
    ["__scopeId", "data-v-92220881"]
  ]),
  aE = {
    name: "Quests-g",
    components: {
      TopBar: Qr,
      QuestChallenge: A2,
      QuestDailyReward: U2
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
  lE = {
    class: "quests"
  },
  rE = {
    class: "pageContainer"
  },
  cE = {
    class: "aniH1",
    style: {
      margin: "15px 15px 0 15px"
    }
  },
  uE = {
    style: {
      margin: "0 15px 25px 15px"
    }
  };

function dE(e, t, n, o, s, a) {
  const l = ge("QuestDailyReward"),
    r = ge("QuestChallenge");
  return W(), ae("div", lE, [P("div", rE, [P("h1", cE, M(e.t("Tasks")), 1), P("div", uE, M(e.t("Do tasks and earn more {COIN_NAME}", {
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
const Sm = St(aE, [
    ["render", dE]
  ]),
  fE = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Sm
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  hE = {
    name: "Airdrop-g",
    components: {
      TopBar: Qr,
      TonWallet: Ur
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
    computed: {},
    watch: {},
    methods: {
      async loadTonWallet() {
        const e = await this.apiCall("infoTonWallet");
        this.connectedWallet = e.wallet ? e.wallet : ""
      },
      async tonConnectStatusHandler(e) {
        this.firstLoading || (await this._delay(1e3), await this.loadTonWallet())
      }
    }
  },
  mE = {
    class: "airdrop container pageContainer"
  },
  gE = {
    style: {
      "font-size": "1.1em",
      "margin-bottom": "15px",
      "font-weight": "bold"
    }
  },
  vE = {
    class: "panelBrown",
    style: {
      "margin-top": "10px"
    }
  },
  yE = {
    style: {
      "margin-top": "50px"
    }
  };

function pE(e, t, n, o, s, a) {
  const l = ge("ton-wallet"),
    r = ge("van-icon");
  return W(), ae("div", mE, [t[0] || (t[0] = P("h1", {
    class: "aniH1"
  }, "Airdrop", -1)), P("div", null, [P("div", gE, M(e.t("Task for participating in {Airdrop}:")), 1), P("div", null, [h(l, {
    loading: s.firstLoading,
    onWalletConnectHandler: a.tonConnectStatusHandler,
    "saved-wallet": s.connectedWallet,
    style: {
      "margin-top": "5px"
    }
  }, null, 8, ["loading", "onWalletConnectHandler", "saved-wallet"])])]), P("div", vE, [P("div", null, [h(r, {
    name: "warning-o"
  }), be(" " + M(e.t("A wallet can only be connected to one account.")), 1)])]), P("div", yE, [P("p", null, M(e.t("An {airdrop} is the distribution of tokens to players wallets. These tokens will be traded on top exchanges, and you can either sell or hold them.")), 1), P("p", null, M(e.t("We are currently in the mining phase where all players earn more {TOKEN_NAME} for the {airdrop}.", {
    TOKEN_NAME: e.TOKEN_NAME
  })), 1), P("p", null, M(e.t("The date and conditions for receiving the {Airdrop} will be announced soon in our telegram channel.")), 1)])])
}
const xm = St(hE, [
    ["render", pE],
    ["__scopeId", "data-v-93cff513"]
  ]),
  bE = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: xm
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  wE = {
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
  CE = {
    class: "friends"
  },
  _E = {
    class: "pageContainer container"
  },
  kE = {
    class: "",
    style: {
      "padding-bottom": "50px"
    }
  },
  TE = ["innerHTML"],
  SE = {
    class: "reward-list"
  },
  xE = ["innerHTML"],
  AE = ["innerHTML"],
  EE = ["innerHTML"],
  IE = ["innerHTML"],
  PE = ["innerHTML"],
  OE = ["innerHTML"],
  RE = ["innerHTML"],
  DE = ["innerHTML"],
  BE = {
    key: 0,
    class: "panelBrown"
  },
  $E = ["innerHTML"],
  ME = {
    key: 0,
    class: "right"
  },
  LE = {
    key: 1,
    style: {
      "font-size": "0.7em"
    }
  };

function NE(e, t, n, o, s, a) {
  const l = ge("van-icon"),
    r = ge("van-badge"),
    c = ge("van-button"),
    u = ge("van-sticky"),
    d = ge("van-cell"),
    f = ge("van-cell-group"),
    m = ge("van-back-top");
  return W(), ae("div", CE, [P("div", _E, [P("div", kE, [P("div", null, [P("h1", null, M(e.t("Invite Friends!")), 1), P("span", {
    onClick: t[0] || (t[0] = g => {
      this.isListVisible = !this.isListVisible
    }),
    style: {
      "border-bottom": "1px dashed #FFFFFF"
    }
  }, [P("span", {
    innerHTML: e.t("You can earn up to {COUNT} {IMG_COIN} {COIN_NAME} per friend:", {
      MIN: 1,
      MAX: 5,
      COUNT: e._number(1e4),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, TE), s.isListVisible ? (W(), Me(l, {
    key: 0,
    name: "arrow-down"
  })) : (W(), Me(l, {
    key: 1,
    name: "arrow"
  }))]), rt(P("ul", SE, [P("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 1,
      MAX: 5,
      COUNT: e._number(1e4),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, xE), P("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 6,
      MAX: 10,
      COUNT: e._number(5e3),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, AE), P("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 11,
      MAX: 20,
      COUNT: e._number(3e3),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, EE), P("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 21,
      MAX: 50,
      COUNT: e._number(1e3),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, IE), P("li", {
    innerHTML: e.t("- from {MIN} to {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MIN: 51,
      MAX: 100,
      COUNT: e._number(500),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, PE), P("li", {
    innerHTML: e.t("- Over {MAX} friends: {COUNT} {IMG_COIN} {COIN_NAME} per friend", {
      MAX: 100,
      COUNT: e._number(50),
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, OE)], 512), [
    [dt, s.isListVisible]
  ]), P("p", {
    innerHTML: e.t("If your friend has Telegram Premium, your bonus triples!", {
      IMG_COIN: e.IMG_COIN,
      COIN_NAME: e.COIN_NAME
    })
  }, null, 8, RE), P("p", {
    innerHTML: e.t("Your friend get {BONUS_FRIEND}  {IMG_COIN} {COIN_NAME} or {BONUS_FRIEND_PREMIUM} {IMG_COIN} {COIN_NAME} if friend has Telegram Premium.", {
      COIN_NAME: e.COIN_NAME,
      BONUS_FRIEND: e.gameConfig["ref.bonus.basic"],
      BONUS_FRIEND_PREMIUM: e.gameConfig["ref.bonus.premium"],
      IMG_COIN: e.IMG_COIN
    })
  }, null, 8, DE), e.gameConfig["referral.commission.friend_count"] > 0 && e.uProfile.friends >= e.gameConfig["referral.commission.friend_count"] ? (W(), ae("p", BE, [be(M(e.t("You have access to earning {PERCENT}% referral commissions from your friends payments.", {
    PERCENT: 30
  })) + " ", 1), P("span", {
    onClick: t[1] || (t[1] = g => e.$router.push("/referral/commission")),
    style: {
      "border-bottom": "1px dashed #FFC04A"
    }
  }, M(e.t("Check this out.")), 1)])) : Te("", !0), t[2] || (t[2] = P("br", null, null, -1))]), h(u, {
    "offset-top": "15",
    onChange: e._stickyChange
  }, {
    default: le(() => [P("div", {
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
        default: le(() => [be(M(e.t("Invite friends")), 1)]),
        _: 1
      }, 8, ["dot"])]),
      _: 1
    }, 8, ["onClick"])], 4)]),
    _: 1
  }, 8, ["onChange"]), t[4] || (t[4] = P("br", null, null, -1)), t[5] || (t[5] = P("br", null, null, -1)), t[6] || (t[6] = P("br", null, null, -1)), a.friendsCount > 0 ? (W(), ae("div", {
    key: 0,
    class: ot({
      blur: !e.stores.state.isAfterDataLoaded
    })
  }, [P("div", {
    style: {
      "margin-bottom": "5px"
    },
    innerHTML: e.t(a.friendsCount === 1 ? "You have {friendsCount} friend." : "You have {friendsCount} friends.", {
      friendsCount: "<b>" + a.friendsCount + "</b>"
    })
  }, null, 8, $E), h(f, {
    inset: "",
    style: {
      margin: "0"
    }
  }, {
    default: le(() => [(W(!0), ae(Be, null, Ft(e.uFriends, g => (W(), Me(d, {
      key: g.id,
      title: g.name,
      size: "large",
      center: ""
    }, {
      "right-icon": le(() => [g.coins > 0 ? (W(), ae("div", ME, [be("+" + M(e._number(g.coins)) + " ", 1), t[3] || (t[3] = P("span", {
        class: "coin25"
      }, null, -1))])) : (W(), ae("div", LE, M(e.t("Task not completed")), 1))]),
      _: 2
    }, 1032, ["title"]))), 128))]),
    _: 1
  })], 2)) : Te("", !0)]), h(m, {
    bottom: "140"
  })])])
}
const Am = St(wE, [
    ["render", NE],
    ["__scopeId", "data-v-b743d51c"]
  ]),
  FE = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Am
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  VE = {
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
          throw Bo({
            type: "danger",
            position: "bottom",
            message: this.t("Stories can only be created from a mobile device"),
            duration: 6e3
          }), await this._delay(3e3), this.isSharesLoading = !1, t
        }
      }
    }
  },
  zE = {
    class: "test",
    style: {
      direction: "ltr"
    }
  },
  HE = {
    class: "con"
  },
  UE = {
    class: "zTextShadow2white center"
  },
  WE = {
    class: "options"
  },
  jE = ["onClick"],
  QE = {
    class: "con container",
    style: {
      display: "flex",
      "align-items": "center",
      "justify-content": "space-between",
      height: "100%"
    }
  },
  KE = {
    class: "zTextShadow2white center",
    style: {
      "padding-top": "50px",
      margin: "0"
    }
  },
  YE = {
    class: "",
    style: {
      "padding-bottom": "30px"
    }
  },
  qE = {
    class: "panel"
  };

function GE(e, t, n, o, s, a) {
  const l = ge("van-icon"),
    r = ge("van-swipe-item"),
    c = ge("van-badge"),
    u = ge("van-button"),
    d = ge("van-swipe");
  return W(), ae("div", zE, [h(d, {
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
    default: le(() => [(W(!0), ae(Be, null, Ft(n.quiz.questions, (f, m) => (W(), Me(r, {
      class: ot(["item", {
        rtl: e.isRtl
      }])
    }, {
      default: le(() => [P("div", HE, [P("h2", UE, M(f.desc), 1), P("div", WE, [(W(!0), ae(Be, null, Ft(f.options, g => (W(), ae("div", {
        class: "option",
        onClick: v => a.setAnswer(m, g)
      }, [e.selectedValues[m] === JSON.stringify(g.animals) ? (W(), Me(l, {
        key: 0,
        size: "30",
        name: "checked"
      })) : (W(), Me(l, {
        key: 1,
        size: "30",
        name: "circle"
      })), P("div", null, M(g.desc), 1)], 8, jE))), 256)), m > 0 ? (W(), ae("div", {
        key: 0,
        class: "option",
        onClick: t[0] || (t[0] = (...g) => a.prev && a.prev(...g)),
        style: {
          "margin-top": "30px",
          "max-width": "40%"
        }
      }, M(e.t("Back")), 1)) : Te("", !0)])])]),
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
        return [P("div", QE, [P("h2", KE, M(n.quiz.title), 1), P("div", YE, [P("p", qE, M((f = a.answerData) == null ? void 0 : f.title) + " - " + M((m = a.answerData) == null ? void 0 : m.desc), 1), h(u, {
          onClick: a.shareStory,
          loading: e.isSharesLoading,
          type: "success",
          size: "large"
        }, {
          default: le(() => [be(M(e.t("Share to your story")) + " ", 1), n.quiz.isRewarded ? Te("", !0) : (W(), Me(c, {
            key: 0,
            dot: ""
          }, {
            default: le(() => [be(M(n.quiz.reward) + " ", 1), t[2] || (t[2] = P("span", {
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
          }), be(" " + M(e.t("Retake the quiz!")), 1)]),
          _: 1
        }, 8, ["onClick"])])])]
      }),
      _: 1
    }, 8, ["class", "style"])]),
    _: 1
  }, 8, ["duration"]), P("div", {
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
  }), be(" " + M(e.t("Back to quiz selection")), 1)])])
}
const Em = St(VE, [
    ["render", GE],
    ["__scopeId", "data-v-ac2bbb0f"]
  ]),
  ZE = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Em
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  XE = "/assets/paw-5F38omYJ.png",
  JE = {
    name: "Test-g",
    components: {
      TestProcess: Em
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
  eI = {
    key: 0,
    class: "Test"
  },
  tI = {
    class: "pageContainer container"
  },
  nI = {
    style: {
      "margin-bottom": "0"
    }
  },
  oI = {
    class: "zTextShadow2white"
  },
  iI = {
    class: "testList"
  },
  sI = ["onClick"],
  aI = {
    class: "title"
  },
  lI = {
    key: 0,
    class: "zTextShadow2white",
    style: {
      width: "100%"
    }
  },
  rI = {
    style: {
      "font-size": "1.5em"
    }
  },
  cI = {
    key: 1,
    style: {
      width: "100%"
    }
  };

function uI(e, t, n, o, s, a) {
  const l = ge("van-badge"),
    r = ge("van-button"),
    c = ge("test-process");
  return s.openedQuiz ? (W(), Me(c, {
    key: 1,
    quiz: s.openedQuiz,
    onBackToList: a.backToList
  }, null, 8, ["quiz", "onBackToList"])) : (W(), ae("div", eI, [P("div", tI, [P("h1", nI, M(e.t("Take the quiz and find out which animal you are!")), 1), P("div", oI, M(e.t("And get your reward!")), 1), t[3] || (t[3] = P("br", null, null, -1)), P("div", iI, [(W(!0), ae(Be, null, Ft(a.tests, u => {
    var d;
    return W(), ae("div", {
      key: u.key,
      class: "testItem panelBrown",
      onClick: f => a.openQuiz(u),
      style: an(u.result ? {
        backgroundImage: "url(" + e._getQuizImg(u.key, u.result) + ")",
        backgroundPosition: "0 -20px"
      } : "")
    }, [P("div", aI, M(u.title), 1), u.result ? (W(), ae("div", lI, [u.isRewarded ? Te("", !0) : (W(), Me(r, {
      key: 0,
      type: "success",
      size: "small"
    }, {
      default: le(() => [h(l, {
        dot: ""
      }, {
        default: le(() => [be(M(e.t("Claim")) + " " + M(e._number(u.reward)) + " ", 1), t[0] || (t[0] = P("span", {
          class: "coin25"
        }, null, -1))]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1024)), P("div", rI, M((d = u.answers[u.result]) == null ? void 0 : d.title), 1)])) : (W(), ae("div", cI, [t[1] || (t[1] = P("img", {
      src: XE,
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
        default: le(() => [be(M(e.t("Take the quiz!")), 1)]),
        _: 1
      })]),
      _: 1
    }), be(" " + M(e.t("and get {count}", {
      count: e._number(u.reward)
    })) + " ", 1), t[2] || (t[2] = P("span", {
      class: "coin25"
    }, null, -1))]))], 12, sI)
  }), 128))])])]))
}
const Im = St(JE, [
    ["render", uI],
    ["__scopeId", "data-v-130bb5a5"]
  ]),
  dI = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Im
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  fI = {
    components: {
      TestG: Im,
      FriendsG: Am,
      AirdropG: xm,
      QuestsG: Sm
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
  hI = ["onClick"],
  mI = {
    class: "flyBtnCont"
  },
  gI = {
    class: "flyBtnTitle"
  },
  vI = {
    class: "flyBtnCont"
  },
  yI = {
    class: "flyBtnTitle"
  };

function pI(e, t, n, o, s, a) {
  const l = ge("van-badge"),
    r = ge("airdrop-g"),
    c = ge("van-popup"),
    u = ge("friends-g"),
    d = ge("quests-g"),
    f = ge("test-g"),
    m = ge("van-icon");
  return a.isMainPage ? (W(), ae("div", {
    key: 0,
    class: ot(["BottomBar", {
      zIndexFix: a.isShowCloseBtn
    }])
  }, [(W(!0), ae(Be, null, Ft(a.menuItems, g => (W(), ae("div", {
    class: "flyBtn",
    key: g.key,
    onClick: v => s.isShowPopup[g.key] = !0
  }, [h(l, {
    dot: g.isDot
  }, {
    default: le(() => [P("div", mI, [P("div", {
      class: "flyBtnIcon",
      style: an({
        backgroundImage: `url(${g.image})`
      })
    }, null, 4)]), P("div", gI, M(g.title), 1)]),
    _: 2
  }, 1032, ["dot"])], 8, hI))), 128)), h(c, {
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
  }, 8, ["show"])], 2)) : (W(), ae("div", {
    key: 1,
    class: "flyBtn BottomBar",
    onClick: t[4] || (t[4] = g => e.$router.push("/"))
  }, [P("div", vI, [h(m, {
    name: "wap-home",
    color: "#FFEDD9"
  })]), P("div", yI, M(e.t("Home")), 1)]))
}
const bI = St(fI, [
    ["render", pI],
    ["__scopeId", "data-v-2386ef5b"]
  ]),
  wI = new Error("request for lock canceled");
var CI = function(e, t, n, o) {
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
class _I {
  constructor(t, n = wI) {
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
    return CI(this, arguments, void 0, function*(n, o = 1, s = 0) {
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
      this._weightedWaiters[t - 1] || (this._weightedWaiters[t - 1] = []), kI(this._weightedWaiters[t - 1], {
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

function kI(e, t) {
  const n = Pm(e, o => t.priority <= o.priority);
  e.splice(n + 1, 0, t)
}

function Pm(e, t) {
  for (let n = e.length - 1; n >= 0; n--)
    if (t(e[n])) return n;
  return -1
}
var TI = function(e, t, n, o) {
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
class SI {
  constructor(t) {
    this._semaphore = new _I(1, t)
  }
  acquire() {
    return TI(this, arguments, void 0, function*(t = 0) {
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
const xI = {
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
  AI = {
    class: "flexBeetween",
    style: {
      margin: "-20px 0 20px 0"
    }
  },
  EI = {
    key: 0
  };

function II(e, t, n, o, s, a) {
  const l = ge("van-icon"),
    r = ge("van-button");
  return W(), ae("div", null, [P("h1", null, M(n.allianceData.name), 1), P("div", AI, [P("div", null, M(e.t("Founder:")) + " " + M(n.allianceData.ownerName), 1), P("div", null, "id:" + M(n.allianceData.id), 1)]), n.allianceData.channelLink ? (W(), ae("div", EI, [be(M(e.t("Channel:")) + " ", 1), P("span", {
    onClick: t[0] || (t[0] = c => e._openUrl("https://" + n.allianceData.channelLink)),
    style: {
      "border-bottom": "1px dashed #fff"
    }
  }, M(n.allianceData.channelLink), 1)])) : Te("", !0), P("div", null, M(e.t("Level:")) + " " + M(n.allianceData.level), 1), P("div", null, [be(M(e.t("Members:")) + " " + M(e._number(n.allianceData.members)) + " ", 1), h(l, {
    name: "friends"
  })]), P("div", null, [be(M(e.t("Enter Fee:")) + " " + M(e._number(n.allianceData.enterFee)) + " ", 1), t[2] || (t[2] = P("span", {
    class: "coin25"
  }, null, -1))]), t[5] || (t[5] = P("br", null, null, -1)), P("div", null, [be(M(e.t("Token per Hour bonus:")) + " +" + M(e.dbAllianceByLevel[n.allianceData.level].bonus) + "% ", 1), t[3] || (t[3] = P("span", {
    class: "tph24"
  }, null, -1))]), t[6] || (t[6] = P("br", null, null, -1)), e.uAlliance.id ? Te("", !0) : (W(), Me(r, {
    key: 1,
    size: "large",
    type: "success",
    loading: s.isJoinLoading,
    onClick: t[1] || (t[1] = c => a.joinToAlliance(n.allianceData.id, n.allianceData.enterFee))
  }, {
    default: le(() => [be(M(e.t("Join")) + " " + M(e._number(n.allianceData.enterFee)) + " ", 1), t[4] || (t[4] = P("span", {
      class: "coin25"
    }, null, -1))]),
    _: 1
  }, 8, ["loading"]))])
}
const PI = St(xI, [
    ["render", II],
    ["__scopeId", "data-v-e3c39631"]
  ]),
  OI = new SI,
  RI = {
    components: {
      AllianceInfo: PI,
      Topup: Tm,
      TopBar: Qr,
      BottomBar: bI,
      OnboardingStart: xx
    },
    async created() {
      window.location.href.endsWith("?popup") && (this.$router.push("/"), history.replaceState(null, "", "/"));
      try {
        if (await Promise.all([await this.auth(), this.loadPageData(), this._delay(500)]), this.dbLoaded = !0, await this.loadPageDataAfter(), this.stores.user.startParam && !this.uAlliance.id) {
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
          return this._tonConnectUI ? this._tonConnectUI : await OI.runExclusive(async () => {
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
        this.uFeed.isNeedFeed || this.stores.user.setHeroTokens()
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
        const e = "#7fb036";
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
          throw Bo({
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
      }
    }
  },
  DI = {
    key: 0,
    class: "loadingScreen"
  },
  BI = {
    style: {
      "font-weight": "700",
      "font-size": "1.2em"
    }
  },
  $I = {
    id: "scrollable",
    class: "scrollable"
  },
  MI = {
    class: "panelBrown",
    style: {
      margin: "10px"
    }
  },
  LI = {
    class: "container"
  };

function NI(e, t, n, o, s, a) {
  const l = ge("OnboardingStart"),
    r = ge("RouterView"),
    c = ge("BottomBar"),
    u = ge("alliance-info"),
    d = ge("van-popup"),
    f = ge("topup");
  return W(), ae("div", null, [s.dbLoaded ? e._isOnboardingComplete(e.onBoard.start) ? (W(), ae(Be, {
    key: 2
  }, [P("div", $I, [h(r)]), h(c), h(d, {
    show: s.isShowInviteRefAlliance,
    "onUpdate:show": t[0] || (t[0] = m => s.isShowInviteRefAlliance = m),
    round: "",
    closeable: "",
    style: {
      "min-width": "90%"
    },
    duration: "0.15"
  }, {
    default: le(() => [P("div", MI, M(e.t("You are invited to join an alliance.")), 1), h(u, {
      "alliance-data": s.invitedRefAllianceData,
      class: "container"
    }, null, 8, ["alliance-data"])]),
    _: 1
  }, 8, ["show"])], 64)) : (W(), Me(l, {
    key: 1
  })) : (W(), ae("div", DI, [P("div", BI, M(a.textLeft), 1), t[2] || (t[2] = P("div", {
    class: "progressBar"
  }, [P("div", {
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
    default: le(() => [P("div", LI, [h(f, {
      "lack-of-coin": this.stores.state.lackOfCoin
    }, null, 8, ["lack-of-coin"])])]),
    _: 1
  }, 8, ["show"])])
}
const FI = St(RI, [
  ["render", NI],
  ["__scopeId", "data-v-fe07dd4e"]
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

function VI(e) {
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
  zI = /&/g,
  HI = /\//g,
  UI = /=/g,
  WI = /\?/g,
  Dm = /\+/g,
  jI = /%5B/g,
  QI = /%5D/g,
  Bm = /%5E/g,
  KI = /%60/g,
  $m = /%7B/g,
  YI = /%7C/g,
  Mm = /%7D/g,
  qI = /%20/g;

function Kr(e) {
  return encodeURI("" + e).replace(YI, "|").replace(jI, "[").replace(QI, "]")
}

function GI(e) {
  return Kr(e).replace($m, "{").replace(Mm, "}").replace(Bm, "^")
}

function Kl(e) {
  return Kr(e).replace(Dm, "%2B").replace(qI, "+").replace(Rm, "%23").replace(zI, "%26").replace(KI, "`").replace($m, "{").replace(Mm, "}").replace(Bm, "^")
}

function ZI(e) {
  return Kl(e).replace(UI, "%3D")
}

function XI(e) {
  return Kr(e).replace(Rm, "%23").replace(WI, "%3F")
}

function JI(e) {
  return e == null ? "" : XI(e).replace(HI, "%2F")
}

function ns(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
const eP = /\/$/,
  tP = e => e.replace(eP, "");

function vl(e, t, n = "/") {
  let o, s = {},
    a = "",
    l = "";
  const r = t.indexOf("#");
  let c = t.indexOf("?");
  return r < c && r >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), a = t.slice(c + 1, r > -1 ? r : t.length), s = e(a)), r > -1 && (o = o || t.slice(0, r), l = t.slice(r, t.length)), o = sP(o ?? t, n), {
    fullPath: o + (a && "?") + a + l,
    path: o,
    query: s,
    hash: ns(l)
  }
}

function nP(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "")
}

function Yu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function oP(e, t, n) {
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
    if (!iP(e[n], t[n])) return !1;
  return !0
}

function iP(e, t) {
  return sn(e) ? qu(e, t) : sn(t) ? qu(t, e) : e === t
}

function qu(e, t) {
  return sn(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t
}

function sP(e, t) {
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

function aP(e) {
  if (!e)
    if (Jo) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), tP(e)
}
const lP = /^[^#]+#/;

function rP(e, t) {
  return e.replace(lP, "#") + t
}

function cP(e, t) {
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

function uP(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      o = typeof n == "string" && n.startsWith("#"),
      s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) return;
    t = cP(s, e)
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function Gu(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Yl = new Map;

function dP(e, t) {
  Yl.set(e, t)
}

function fP(e) {
  const t = Yl.get(e);
  return Yl.delete(e), t
}
let hP = () => location.protocol + "//" + location.host;

function Nm(e, t) {
  const {
    pathname: n,
    search: o,
    hash: s
  } = t, a = e.indexOf("#");
  if (a > -1) {
    let r = s.includes(e.slice(a)) ? e.slice(a).length : 1,
      c = s.slice(r);
    return c[0] !== "/" && (c = "/" + c), Yu(c, "")
  }
  return Yu(n, e) + o + s
}

function mP(e, t, n, o) {
  let s = [],
    a = [],
    l = null;
  const r = ({
    state: m
  }) => {
    const g = Nm(e, location),
      v = n.value,
      b = t.value;
    let p = 0;
    if (m) {
      if (n.value = g, t.value = m, l && l === v) {
        l = null;
        return
      }
      p = b ? m.position - b.position : 0
    } else o(g);
    s.forEach(w => {
      w(n.value, v, {
        delta: p,
        type: os.pop,
        direction: p ? p > 0 ? ji.forward : ji.back : ji.unknown
      })
    })
  };

  function c() {
    l = n.value
  }

  function u(m) {
    s.push(m);
    const g = () => {
      const v = s.indexOf(m);
      v > -1 && s.splice(v, 1)
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

function Zu(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Da() : null
  }
}

function gP(e) {
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
      m = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + c : hP() + e + c;
    try {
      t[d ? "replaceState" : "pushState"](u, "", m), s.value = u
    } catch (g) {
      console.error(g), n[d ? "replace" : "assign"](m)
    }
  }

  function l(c, u) {
    const d = Qe({}, t.state, Zu(s.value.back, c, s.value.forward, !0), u, {
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
    const f = Qe({}, Zu(o.value, c, null), {
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

function vP(e) {
  e = aP(e);
  const t = gP(e),
    n = mP(e, t.state, t.location, t.replace);

  function o(a, l = !0) {
    l || n.pauseListeners(), history.go(a)
  }
  const s = Qe({
    location: "",
    base: e,
    go: o,
    createHref: rP.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s
}

function yP(e) {
  return typeof e == "string" || e && typeof e == "object"
}

function Fm(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const Vm = Symbol("");
var Xu;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(Xu || (Xu = {}));

function mi(e, t) {
  return Qe(new Error, {
    type: e,
    [Vm]: !0
  }, t)
}

function In(e, t) {
  return e instanceof Error && Vm in e && (t == null || !!(e.type & t))
}
const Ju = "[^/]+?",
  pP = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  },
  bP = /[.+*?^${}()[\]/\\]/g;

function wP(e, t) {
  const n = Qe({}, pP, t),
    o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const u of e) {
    const d = u.length ? [] : [90];
    n.strict && !u.length && (s += "/");
    for (let f = 0; f < u.length; f++) {
      const m = u[f];
      let g = 40 + (n.sensitive ? .25 : 0);
      if (m.type === 0) f || (s += "/"), s += m.value.replace(bP, "\\$&"), g += 40;
      else if (m.type === 1) {
        const {
          value: v,
          repeatable: b,
          optional: p,
          regexp: w
        } = m;
        a.push({
          name: v,
          repeatable: b,
          optional: p
        });
        const y = w || Ju;
        if (y !== Ju) {
          g += 10;
          try {
            new RegExp(`(${y})`)
          } catch (_) {
            throw new Error(`Invalid custom RegExp for param "${v}" (${y}): ` + _.message)
          }
        }
        let C = b ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        f || (C = p && u.length < 2 ? `(?:/${C})` : "/" + C), p && (C += "?"), s += C, g += 20, p && (g += -8), b && (g += -20), y === ".*" && (g += -50)
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
        v = a[m - 1];
      f[v.name] = g && v.repeatable ? g.split("/") : g
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
          value: v,
          repeatable: b,
          optional: p
        } = g, w = v in u ? u[v] : "";
        if (sn(w) && !b) throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);
        const y = sn(w) ? w.join("/") : w;
        if (!y)
          if (p) m.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : f = !0);
          else throw new Error(`Missing required param "${v}"`);
        d += y
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

function CP(e, t) {
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
    const a = CP(o[n], s[n]);
    if (a) return a;
    n++
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (ed(o)) return 1;
    if (ed(s)) return -1
  }
  return s.length - o.length
}

function ed(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0
}
const _P = {
    type: 0,
    value: ""
  },
  kP = /[a-zA-Z0-9_]/;

function TP(e) {
  if (!e) return [
    []
  ];
  if (e === "/") return [
    [_P]
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
        c === "(" ? n = 2 : kP.test(c) ? m() : (f(), n = 0, c !== "*" && c !== "?" && c !== "+" && r--);
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

function SP(e, t, n) {
  const o = wP(TP(e.path), n),
    s = Qe(o, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}

function xP(e, t) {
  const n = [],
    o = new Map;
  t = id({
    strict: !1,
    end: !0,
    sensitive: !1
  }, t);

  function s(f) {
    return o.get(f)
  }

  function a(f, m, g) {
    const v = !g,
      b = nd(f);
    b.aliasOf = g && g.record;
    const p = id(t, f),
      w = [b];
    if ("alias" in f) {
      const _ = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const k of _) w.push(nd(Qe({}, b, {
        components: g ? g.record.components : b.components,
        path: k,
        aliasOf: g ? g.record : b
      })))
    }
    let y, C;
    for (const _ of w) {
      const {
        path: k
      } = _;
      if (m && k[0] !== "/") {
        const E = m.record.path,
          B = E[E.length - 1] === "/" ? "" : "/";
        _.path = m.record.path + (k && B + k)
      }
      if (y = SP(_, m, p), g ? g.alias.push(y) : (C = C || y, C !== y && C.alias.push(y), v && f.name && !od(y) && l(f.name)), Hm(y) && c(y), b.children) {
        const E = b.children;
        for (let B = 0; B < E.length; B++) a(E[B], y, g && g.children[B])
      }
      g = g || y
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
    const m = IP(f, n);
    n.splice(m, 0, f), f.record.name && !od(f) && o.set(f.record.name, f)
  }

  function u(f, m) {
    let g, v = {},
      b, p;
    if ("name" in f && f.name) {
      if (g = o.get(f.name), !g) throw mi(1, {
        location: f
      });
      p = g.record.name, v = Qe(td(m.params, g.keys.filter(C => !C.optional).concat(g.parent ? g.parent.keys.filter(C => C.optional) : []).map(C => C.name)), f.params && td(f.params, g.keys.map(C => C.name))), b = g.stringify(v)
    } else if (f.path != null) b = f.path, g = n.find(C => C.re.test(b)), g && (v = g.parse(b), p = g.record.name);
    else {
      if (g = m.name ? o.get(m.name) : n.find(C => C.re.test(m.path)), !g) throw mi(1, {
        location: f,
        currentLocation: m
      });
      p = g.record.name, v = Qe({}, m.params, f.params), b = g.stringify(v)
    }
    const w = [];
    let y = g;
    for (; y;) w.unshift(y.record), y = y.parent;
    return {
      name: p,
      path: b,
      params: v,
      matched: w,
      meta: EP(w)
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

function td(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n
}

function nd(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: AP(e),
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

function AP(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else
    for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n;
  return t
}

function od(e) {
  for (; e;) {
    if (e.record.aliasOf) return !0;
    e = e.parent
  }
  return !1
}

function EP(e) {
  return e.reduce((t, n) => Qe(t, n.meta), {})
}

function id(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n
}

function IP(e, t) {
  let n = 0,
    o = t.length;
  for (; n !== o;) {
    const a = n + o >> 1;
    zm(e, t[a]) < 0 ? o = a : n = a + 1
  }
  const s = PP(e);
  return s && (o = t.lastIndexOf(s, o - 1)), o
}

function PP(e) {
  let t = e;
  for (; t = t.parent;)
    if (Hm(t) && zm(e, t) === 0) return t
}

function Hm({
  record: e
}) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function OP(e) {
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

function sd(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = ZI(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue
    }(sn(o) ? o.map(a => a && Kl(a)) : [o && Kl(o)]).forEach(a => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a))
    })
  }
  return t
}

function RP(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = sn(o) ? o.map(s => s == null ? null : "" + s) : o == null ? o : "" + o)
  }
  return t
}
const DP = Symbol(""),
  ad = Symbol(""),
  Yr = Symbol(""),
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
        })) : m instanceof Error ? c(m) : yP(m) ? c(mi(2, {
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
            const f = VI(d) ? d.default : d;
            l.mods[r] = d, l.components[r] = f;
            const g = (f.__vccOpts || f)[t];
            return g && io(g, n, o, l, r, s)()
          }))
        }
    }
  return a
}

function ld(e) {
  const t = Rt(Yr),
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
      const g = rd(c[u - 2]);
      return u > 1 && rd(d) === g && f[f.length - 1].path !== g ? f.findIndex(hi.bind(null, c[u - 2])) : m
    }),
    a = N(() => s.value > -1 && LP(n.params, o.value.params)),
    l = N(() => s.value > -1 && s.value === n.matched.length - 1 && Lm(n.params, o.value.params));

  function r(c = {}) {
    return MP(c) ? t[en(e.replace) ? "replace" : "push"](en(e.to)).catch(Wi) : Promise.resolve()
  }
  return {
    route: o,
    href: N(() => o.value.href),
    isActive: a,
    isExactActive: l,
    navigate: r
  }
}
const BP = K({
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
    useLink: ld,
    setup(e, {
      slots: t
    }) {
      const n = Je(ld(e)),
        {
          options: o
        } = Rt(Yr),
        s = N(() => ({
          [cd(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
          [cd(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
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
  $P = BP;

function MP(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}

function LP(e, t) {
  for (const n in t) {
    const o = t[n],
      s = e[n];
    if (typeof o == "string") {
      if (o !== s) return !1
    } else if (!sn(s) || s.length !== o.length || o.some((a, l) => a !== s[l])) return !1
  }
  return !0
}

function rd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const cd = (e, t, n) => e ?? t ?? n,
  NP = K({
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
        a = Rt(ad, 0),
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
      Bn(ad, N(() => l.value + 1)), Bn(DP, r), Bn(ql, s);
      const c = F();
      return re(() => [c.value, r.value, e.name], ([u, d, f], [m, g, v]) => {
        d && (d.instances[f] = u, g && g !== d && u && u === m && (d.leaveGuards.size || (d.leaveGuards = g.leaveGuards), d.updateGuards.size || (d.updateGuards = g.updateGuards))), u && d && (!g || !hi(d, g) || !m) && (d.enterCallbacks[f] || []).forEach(b => b(u))
      }, {
        flush: "post"
      }), () => {
        const u = s.value,
          d = e.name,
          f = r.value,
          m = f && f.components[d];
        if (!m) return ud(n.default, {
          Component: m,
          route: u
        });
        const g = f.props[d],
          v = g ? g === !0 ? u.params : typeof g == "function" ? g(u) : g : null,
          p = yr(m, Qe({}, v, t, {
            onVnodeUnmounted: w => {
              w.component.isUnmounted && (f.instances[d] = null)
            },
            ref: c
          }));
        return ud(n.default, {
          Component: p,
          route: u
        }) || p
      }
    }
  });

function ud(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n
}
const FP = NP;

function VP(e) {
  const t = xP(e.routes, e),
    n = e.parseQuery || OP,
    o = e.stringifyQuery || sd,
    s = e.history,
    a = Ri(),
    l = Ri(),
    r = Ri(),
    c = Ig(Jn);
  let u = Jn;
  Jo && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const d = gl.bind(null, A => "" + A),
    f = gl.bind(null, JI),
    m = gl.bind(null, ns);

  function g(A, z) {
    let H, ne;
    return Fm(A) ? (H = t.getRecordMatcher(A), ne = z) : ne = A, t.addRoute(ne, H)
  }

  function v(A) {
    const z = t.getRecordMatcher(A);
    z && t.removeRoute(z)
  }

  function b() {
    return t.getRoutes().map(A => A.record)
  }

  function p(A) {
    return !!t.getRecordMatcher(A)
  }

  function w(A, z) {
    if (z = Qe({}, z || c.value), typeof A == "string") {
      const O = vl(n, A, z.path),
        L = t.resolve({
          path: O.path
        }, z),
        q = s.createHref(O.fullPath);
      return Qe(O, L, {
        params: m(L.params),
        hash: ns(O.hash),
        redirectedFrom: void 0,
        href: q
      })
    }
    let H;
    if (A.path != null) H = Qe({}, A, {
      path: vl(n, A.path, z.path).path
    });
    else {
      const O = Qe({}, A.params);
      for (const L in O) O[L] == null && delete O[L];
      H = Qe({}, A, {
        params: f(O)
      }), z.params = f(z.params)
    }
    const ne = t.resolve(H, z),
      ke = A.hash || "";
    ne.params = d(m(ne.params));
    const Le = nP(o, Qe({}, A, {
        hash: GI(ke),
        path: ne.path
      })),
      x = s.createHref(Le);
    return Qe({
      fullPath: Le,
      hash: ke,
      query: o === sd ? RP(A.query) : A.query || {}
    }, ne, {
      redirectedFrom: void 0,
      href: x
    })
  }

  function y(A) {
    return typeof A == "string" ? vl(n, A, c.value.path) : Qe({}, A)
  }

  function C(A, z) {
    if (u !== A) return mi(8, {
      from: z,
      to: A
    })
  }

  function _(A) {
    return B(A)
  }

  function k(A) {
    return _(Qe(y(A), {
      replace: !0
    }))
  }

  function E(A) {
    const z = A.matched[A.matched.length - 1];
    if (z && z.redirect) {
      const {
        redirect: H
      } = z;
      let ne = typeof H == "function" ? H(A) : H;
      return typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = y(ne) : {
        path: ne
      }, ne.params = {}), Qe({
        query: A.query,
        hash: A.hash,
        params: ne.path != null ? {} : A.params
      }, ne)
    }
  }

  function B(A, z) {
    const H = u = w(A),
      ne = c.value,
      ke = A.state,
      Le = A.force,
      x = A.replace === !0,
      O = E(H);
    if (O) return B(Qe(y(O), {
      state: typeof O == "object" ? Qe({}, ke, O.state) : ke,
      force: Le,
      replace: x
    }), z || H);
    const L = H;
    L.redirectedFrom = z;
    let q;
    return !Le && oP(o, ne, H) && (q = mi(16, {
      to: L,
      from: ne
    }), V(ne, ne, !0, !1)), (q ? Promise.resolve(q) : D(L, ne)).catch(Q => In(Q) ? In(Q, 2) ? Q : Ne(Q) : ue(Q, L, ne)).then(Q => {
      if (Q) {
        if (In(Q, 2)) return B(Qe({
          replace: x
        }, y(Q.to), {
          state: typeof Q.to == "object" ? Qe({}, ke, Q.to.state) : ke,
          force: Le
        }), z || L)
      } else Q = I(L, ne, !0, x, ke);
      return S(L, ne, Q), Q
    })
  }

  function T(A, z) {
    const H = C(A, z);
    return H ? Promise.reject(H) : Promise.resolve()
  }

  function R(A) {
    const z = we.values().next().value;
    return z && typeof z.runWithContext == "function" ? z.runWithContext(A) : A()
  }

  function D(A, z) {
    let H;
    const [ne, ke, Le] = zP(A, z);
    H = yl(ne.reverse(), "beforeRouteLeave", A, z);
    for (const O of ne) O.leaveGuards.forEach(L => {
      H.push(io(L, A, z))
    });
    const x = T.bind(null, A, z);
    return H.push(x), ye(H).then(() => {
      H = [];
      for (const O of a.list()) H.push(io(O, A, z));
      return H.push(x), ye(H)
    }).then(() => {
      H = yl(ke, "beforeRouteUpdate", A, z);
      for (const O of ke) O.updateGuards.forEach(L => {
        H.push(io(L, A, z))
      });
      return H.push(x), ye(H)
    }).then(() => {
      H = [];
      for (const O of Le)
        if (O.beforeEnter)
          if (sn(O.beforeEnter))
            for (const L of O.beforeEnter) H.push(io(L, A, z));
          else H.push(io(O.beforeEnter, A, z));
      return H.push(x), ye(H)
    }).then(() => (A.matched.forEach(O => O.enterCallbacks = {}), H = yl(Le, "beforeRouteEnter", A, z, R), H.push(x), ye(H))).then(() => {
      H = [];
      for (const O of l.list()) H.push(io(O, A, z));
      return H.push(x), ye(H)
    }).catch(O => In(O, 8) ? O : Promise.reject(O))
  }

  function S(A, z, H) {
    r.list().forEach(ne => R(() => ne(A, z, H)))
  }

  function I(A, z, H, ne, ke) {
    const Le = C(A, z);
    if (Le) return Le;
    const x = z === Jn,
      O = Jo ? history.state : {};
    H && (ne || x ? s.replace(A.fullPath, Qe({
      scroll: x && O && O.scroll
    }, ke)) : s.push(A.fullPath, ke)), c.value = A, V(A, z, H, x), Ne()
  }
  let $;

  function X() {
    $ || ($ = s.listen((A, z, H) => {
      if (!se.listening) return;
      const ne = w(A),
        ke = E(ne);
      if (ke) {
        B(Qe(ke, {
          replace: !0
        }), ne).catch(Wi);
        return
      }
      u = ne;
      const Le = c.value;
      Jo && dP(Gu(Le.fullPath, H.delta), Da()), D(ne, Le).catch(x => In(x, 12) ? x : In(x, 2) ? (B(x.to, ne).then(O => {
        In(O, 20) && !H.delta && H.type === os.pop && s.go(-1, !1)
      }).catch(Wi), Promise.reject()) : (H.delta && s.go(-H.delta, !1), ue(x, ne, Le))).then(x => {
        x = x || I(ne, Le, !1), x && (H.delta && !In(x, 8) ? s.go(-H.delta, !1) : H.type === os.pop && In(x, 20) && s.go(-1, !1)), S(ne, Le, x)
      }).catch(Wi)
    }))
  }
  let ce = Ri(),
    U = Ri(),
    te;

  function ue(A, z, H) {
    Ne(A);
    const ne = U.list();
    return ne.length ? ne.forEach(ke => ke(A, z, H)) : console.error(A), Promise.reject(A)
  }

  function Re() {
    return te && c.value !== Jn ? Promise.resolve() : new Promise((A, z) => {
      ce.add([A, z])
    })
  }

  function Ne(A) {
    return te || (te = !A, X(), ce.list().forEach(([z, H]) => A ? H(A) : z()), ce.reset()), A
  }

  function V(A, z, H, ne) {
    const {
      scrollBehavior: ke
    } = e;
    if (!Jo || !ke) return Promise.resolve();
    const Le = !H && fP(Gu(A.fullPath, 0)) || (ne || !H) && history.state && history.state.scroll || null;
    return Oe().then(() => ke(A, z, Le)).then(x => x && uP(x)).catch(x => ue(x, A, z))
  }
  const Z = A => s.go(A);
  let ve;
  const we = new Set,
    se = {
      currentRoute: c,
      listening: !0,
      addRoute: g,
      removeRoute: v,
      clearRoutes: t.clearRoutes,
      hasRoute: p,
      getRoutes: b,
      resolve: w,
      options: e,
      push: _,
      replace: k,
      go: Z,
      back: () => Z(-1),
      forward: () => Z(1),
      beforeEach: a.add,
      beforeResolve: l.add,
      afterEach: r.add,
      onError: U.add,
      isReady: Re,
      install(A) {
        const z = this;
        A.component("RouterLink", $P), A.component("RouterView", FP), A.config.globalProperties.$router = z, Object.defineProperty(A.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => en(c)
        }), Jo && !ve && c.value === Jn && (ve = !0, _(s.location).catch(ke => {}));
        const H = {};
        for (const ke in Jn) Object.defineProperty(H, ke, {
          get: () => c.value[ke],
          enumerable: !0
        });
        A.provide(Yr, z), A.provide(Um, Vd(H)), A.provide(ql, c);
        const ne = A.unmount;
        we.add(A), A.unmount = function() {
          we.delete(A), we.size < 1 && (u = Jn, $ && $(), $ = null, c.value = Jn, ve = !1, te = !1), ne()
        }
      }
    };

  function ye(A) {
    return A.reduce((z, H) => z.then(() => R(H)), Promise.resolve())
  }
  return se
}

function zP(e, t) {
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
const ia = VP({
    history: vP("/"),
    routes: [{
      path: "/",
      component: () => It(() => import("./Home-CpSyrNiT.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5]))
    }, {
      path: "/home",
      component: () => It(() => import("./Home-CpSyrNiT.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5]))
    }, {
      path: "/airdrop",
      component: () => It(() => Promise.resolve().then(() => bE), void 0)
    }, {
      path: "/terms",
      component: () => It(() => import("./Terms-Dw-Z9-z7.js"), [])
    }, {
      path: "/quests",
      component: () => It(() => Promise.resolve().then(() => fE), void 0)
    }, {
      path: "/rating",
      component: () => It(() => import("./Rating-D-Tw8VAq.js"), __vite__mapDeps([6, 7]))
    }, {
      path: "/friends",
      component: () => It(() => Promise.resolve().then(() => FE), void 0)
    }, {
      path: "/communities",
      component: () => It(() => import("./Communities-HzpwRlfZ.js"), __vite__mapDeps([8, 9]))
    }, {
      path: "/alliance",
      component: () => It(() => import("./Alliance-BKCaqSrB.js"), __vite__mapDeps([1, 2]))
    }, {
      path: "/boost",
      component: () => It(() => import("./Boost-DeN6WRJo.js"), __vite__mapDeps([3, 4]))
    }, {
      path: "/support",
      component: () => It(() => import("./Support-DkKcikDL.js"), [])
    }, {
      path: "/test",
      component: () => It(() => Promise.resolve().then(() => dI), void 0)
    }, {
      path: "/test2",
      component: () => It(() => Promise.resolve().then(() => ZE), void 0)
    }, {
      path: "/referral/commission",
      component: () => It(() => import("./ReferralCommission-BMARXG0k.js"), __vite__mapDeps([10, 11]))
    }]
  }),
  HP = {
    methods: {
      async dbLoadDbData(e = ["all"]) {
        try {
          let t;
          [t] = await Promise.all([this.apiCall("loadDb", {
            dbs: e,
            lang: this.stores.user.settings.lang
          })]), this.dbStoreDbs(t)
        } catch (t) {
          Bo({
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
  UP = {
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
          console.log("Error auth: %o", t), Bo({
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
          t = jr(),
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
  WP = {
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
          buyTon: ["60"]
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
          const v = this._rand(500, a),
            b = this._rand(0, l);
          u.style.animation = `${o} ${v}ms ease ${b}ms 1 normal forwards`, u.style.animationFillMode = "forwards", document.body.appendChild(u);
          const p = v + b;
          setTimeout(() => {
            u.style.visibility = "hidden", u.remove()
          }, p), c % 30 === 0 && this._vibrate("soft")
        }
        setTimeout(() => {
          s && s.classList.remove("aniVibration")
        }, a + Math.round(l / 2))
      },
      _catchError(e) {
        this._vibrate("error"), console.log("Error: %o", e), Bo({
          type: "danger",
          message: typeof e == "string" ? e : this.t("Some problem... please repeat")
        })
      },
      _getQuestImg(e) {
        return e.includes("riddle_") ? "/assets/img/quests/riddle.jpg?v=2" : e.includes("rebus_") ? "/assets/img/quests/rebus.jpg?v=2" : e.includes("donate_ton_") ? "/assets/img/quests/donate_ton.jpg?v=2" : "/assets/img/quests/" + e + ".jpg?v=2"
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
        Bo({
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
  po = Bf(FI),
  jP = j2();
let dd = !1;
ia.afterEach(function() {
  ia.options.history.state.current !== "/" && dd ? window.Telegram.WebApp.BackButton.show() : window.Telegram.WebApp.BackButton.hide(), dd = !0
});
window.Telegram.WebApp.onEvent("backButtonClicked", function() {
  window.history.state && window.history.state.popup && history.back(), ia.push("/")
});
po.use(jP);
po.use(ia);
po.use(WS);
po.mixin(HP);
po.mixin(UP);
po.mixin(WP);
po.mixin(oA);
po.mount("#app");
window.userStore = ao();
window.stateStore = jr();
window.dbStore = bm();
export {
  PI as A, Be as F, Qr as T, St as _, P as a, h as b, ae as c, be as d, Te as e, Me as f, ge as g, ot as h, rt as i, GS as j, za as k, $v as l, an as n, W as o, Ft as r, Bo as s, M as t, Py as u, dt as v, le as w
};