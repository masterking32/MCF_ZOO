import {
  g as Zl,
  c as pe,
  n as Yo,
  C as ec
} from "./index-Duh1NKkB.js";
import {
  _ as tc,
  c as Ot,
  a as tt,
  t as wt,
  b as vt,
  w as $t,
  f as xt,
  d as hr,
  F as nc,
  e as pr,
  g as Ut,
  o as bt
} from "./index-5EZhtzKk.js";
var ra = {};
let d;
const Xo = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
}) : {
  decode: () => {
    throw Error("TextDecoder not available")
  }
};
typeof TextDecoder < "u" && Xo.decode();
let Ir = null;

function Jn() {
  return (Ir === null || Ir.byteLength === 0) && (Ir = new Uint8Array(d.memory.buffer)), Ir
}

function je(e, t) {
  return e = e >>> 0, Xo.decode(Jn().subarray(e, e + t))
}
const Lt = new Array(128).fill(void 0);
Lt.push(void 0, null, !0, !1);
let Tr = Lt.length;

function me(e) {
  Tr === Lt.length && Lt.push(Lt.length + 1);
  const t = Tr;
  return Tr = Lt[t], Lt[t] = e, t
}

function _e(e) {
  return Lt[e]
}

function De(e) {
  return e == null
}
let gn = null;

function $() {
  return (gn === null || gn.buffer.detached === !0 || gn.buffer.detached === void 0 && gn.buffer !== d.memory.buffer) && (gn = new DataView(d.memory.buffer)), gn
}
let fe = 0;
const Vr = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available")
    }
  },
  rc = typeof Vr.encodeInto == "function" ? function(e, t) {
    return Vr.encodeInto(e, t)
  } : function(e, t) {
    const n = Vr.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    }
  };

function ge(e, t, n) {
  if (n === void 0) {
    const s = Vr.encode(e),
      c = t(s.length, 1) >>> 0;
    return Jn().subarray(c, c + s.length).set(s), fe = s.length, c
  }
  let r = e.length,
    i = t(r, 1) >>> 0;
  const o = Jn();
  let a = 0;
  for (; a < r; a++) {
    const s = e.charCodeAt(a);
    if (s > 127) break;
    o[i + a] = s
  }
  if (a !== r) {
    a !== 0 && (e = e.slice(a)), i = n(i, r, r = a + e.length * 3, 1) >>> 0;
    const s = Jn().subarray(i + a, i + r),
      c = rc(e, s);
    a += c.written, i = n(i, r, a, 1) >>> 0
  }
  return fe = a, i
}

function ic(e) {
  e < 132 || (Lt[e] = Tr, Tr = e)
}

function oe(e) {
  const t = _e(e);
  return ic(e), t
}

function ia(e) {
  const t = typeof e;
  if (t == "number" || t == "boolean" || e == null) return `${e}`;
  if (t == "string") return `"${e}"`;
  if (t == "symbol") {
    const i = e.description;
    return i == null ? "Symbol" : `Symbol(${i})`
  }
  if (t == "function") {
    const i = e.name;
    return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function"
  }
  if (Array.isArray(e)) {
    const i = e.length;
    let o = "[";
    i > 0 && (o += ia(e[0]));
    for (let a = 1; a < i; a++) o += ", " + ia(e[a]);
    return o += "]", o
  }
  const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
  let r;
  if (n.length > 1) r = n[1];
  else return toString.call(e);
  if (r == "Object") try {
    return "Object(" + JSON.stringify(e) + ")"
  } catch {
    return "Object"
  }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r
}
const Ga = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(e => {
  d.__wbindgen_export_2.get(e.dtor)(e.a, e.b)
});

function ac(e, t, n, r) {
  const i = {
      a: e,
      b: t,
      cnt: 1,
      dtor: n
    },
    o = (...a) => {
      i.cnt++;
      const s = i.a;
      i.a = 0;
      try {
        return r(s, i.b, ...a)
      } finally {
        --i.cnt === 0 ? (d.__wbindgen_export_2.get(i.dtor)(s, i.b), Ga.unregister(i)) : i.a = s
      }
    };
  return o.original = i, Ga.register(o, i, i), o
}

function oc(e, t, n) {
  d._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0fff6d0ad1f7528f(e, t, me(n))
}

function sc(e, t) {
  return e = e >>> 0, Jn().subarray(e / 1, e / 1 + t)
}

function lc(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return Jn().set(e, n / 1), fe = e.length, n
}

function Xe(e, t) {
  try {
    return e.apply(this, t)
  } catch (n) {
    d.__wbindgen_exn_store(me(n))
  }
}

function At(e, t) {
  if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  return e.ptr
}

function cc(e) {
  const t = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
    n = fe;
  return d.checkAddress(t, n) !== 0
}

function uc(e) {
  let t, n;
  try {
    const f = d.__wbindgen_add_to_stack_pointer(-16),
      u = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      _ = fe;
    d.repackAddress(f, u, _);
    var r = $().getInt32(f + 4 * 0, !0),
      i = $().getInt32(f + 4 * 1, !0),
      o = $().getInt32(f + 4 * 2, !0),
      a = $().getInt32(f + 4 * 3, !0),
      s = r,
      c = i;
    if (a) throw s = 0, c = 0, oe(o);
    return t = s, n = c, je(s, c)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16), d.__wbindgen_free(t, n, 1)
  }
}

function dc(e, t, n, r, i, o, a) {
  try {
    const u = d.__wbindgen_add_to_stack_pointer(-16);
    At(e, zt);
    const _ = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      B = fe,
      y = ge(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
      S = fe,
      m = ge(r, d.__wbindgen_malloc, d.__wbindgen_realloc),
      v = fe;
    d.runLocal(u, e.__wbg_ptr, _, B, y, S, m, v, me(i), o, !De(a), De(a) ? 0 : a);
    var s = $().getInt32(u + 4 * 0, !0),
      c = $().getInt32(u + 4 * 1, !0),
      f = $().getInt32(u + 4 * 2, !0);
    if (f) throw oe(c);
    return oe(s)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function fc(e) {
  let t, n;
  try {
    const _ = d.__wbindgen_add_to_stack_pointer(-16);
    var r = De(e) ? 0 : ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      i = fe;
    d.makeFullAccountBoc(_, r, i);
    var o = $().getInt32(_ + 4 * 0, !0),
      a = $().getInt32(_ + 4 * 1, !0),
      s = $().getInt32(_ + 4 * 2, !0),
      c = $().getInt32(_ + 4 * 3, !0),
      f = o,
      u = a;
    if (c) throw f = 0, u = 0, oe(s);
    return t = f, n = u, je(f, u)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16), d.__wbindgen_free(t, n, 1)
  }
}

function hc(e) {
  try {
    const i = d.__wbindgen_add_to_stack_pointer(-16),
      o = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      a = fe;
    d.parseFullAccountBoc(i, o, a);
    var t = $().getInt32(i + 4 * 0, !0),
      n = $().getInt32(i + 4 * 1, !0),
      r = $().getInt32(i + 4 * 2, !0);
    if (r) throw oe(n);
    return oe(t)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function pc(e) {
  try {
    const o = d.__wbindgen_add_to_stack_pointer(-16),
      a = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      s = fe;
    d.parseFullAccountStateInit(o, a, s);
    var t = $().getInt32(o + 4 * 0, !0),
      n = $().getInt32(o + 4 * 1, !0),
      r = $().getInt32(o + 4 * 2, !0),
      i = $().getInt32(o + 4 * 3, !0);
    if (i) throw oe(r);
    let c;
    return t !== 0 && (c = je(t, n).slice(), d.__wbindgen_free(t, n * 1, 1)), c
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function gc(e, t, n, r) {
  try {
    const s = d.__wbindgen_add_to_stack_pointer(-16),
      c = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      f = fe,
      u = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      _ = fe;
    d.computeStorageFee(s, c, f, u, _, n, r);
    var i = $().getInt32(s + 4 * 0, !0),
      o = $().getInt32(s + 4 * 1, !0),
      a = $().getInt32(s + 4 * 2, !0);
    if (a) throw oe(o);
    return oe(i)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function mc(e, t, n, r, i, o, a) {
  try {
    const B = d.__wbindgen_add_to_stack_pointer(-16),
      y = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      S = fe,
      m = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      v = fe,
      x = ge(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
      M = fe;
    var s = De(o) ? 0 : ge(o, d.__wbindgen_malloc, d.__wbindgen_realloc),
      c = fe;
    d.executeLocal(B, y, S, m, v, x, M, r, i, s, c, !De(a), De(a) ? 0 : a);
    var f = $().getInt32(B + 4 * 0, !0),
      u = $().getInt32(B + 4 * 1, !0),
      _ = $().getInt32(B + 4 * 2, !0);
    if (_) throw oe(u);
    return oe(f)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function bc(e, t, n, r, i) {
  try {
    const u = d.__wbindgen_add_to_stack_pointer(-16),
      _ = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      B = fe,
      y = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      S = fe;
    var o = De(r) ? 0 : ge(r, d.__wbindgen_malloc, d.__wbindgen_realloc),
      a = fe;
    d.getExpectedAddress(u, _, B, y, S, n, o, a, me(i));
    var s = $().getInt32(u + 4 * 0, !0),
      c = $().getInt32(u + 4 * 1, !0),
      f = $().getInt32(u + 4 * 2, !0);
    if (f) throw oe(c);
    return oe(s)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function yc(e, t, n) {
  try {
    const a = d.__wbindgen_add_to_stack_pointer(-16),
      s = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      c = fe,
      f = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      u = fe;
    d.unpackContractFields(a, s, c, f, u, n);
    var r = $().getInt32(a + 4 * 0, !0),
      i = $().getInt32(a + 4 * 1, !0),
      o = $().getInt32(a + 4 * 2, !0);
    if (o) throw oe(i);
    return oe(r)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function _c(e, t) {
  try {
    const o = d.__wbindgen_add_to_stack_pointer(-16),
      a = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      s = fe,
      c = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      f = fe;
    d.unpackInitData(o, a, s, c, f);
    var n = $().getInt32(o + 4 * 0, !0),
      r = $().getInt32(o + 4 * 1, !0),
      i = $().getInt32(o + 4 * 2, !0);
    if (i) throw oe(r);
    return oe(n)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function wc(e) {
  let t, n;
  try {
    const f = d.__wbindgen_add_to_stack_pointer(-16),
      u = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      _ = fe;
    d.getBocHash(f, u, _);
    var r = $().getInt32(f + 4 * 0, !0),
      i = $().getInt32(f + 4 * 1, !0),
      o = $().getInt32(f + 4 * 2, !0),
      a = $().getInt32(f + 4 * 3, !0),
      s = r,
      c = i;
    if (a) throw s = 0, c = 0, oe(o);
    return t = s, n = c, je(s, c)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16), d.__wbindgen_free(t, n, 1)
  }
}

function vc(e, t, n) {
  try {
    const c = d.__wbindgen_add_to_stack_pointer(-16);
    var r = De(n) ? 0 : ge(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
      i = fe;
    d.packIntoCell(c, me(e), me(t), r, i);
    var o = $().getInt32(c + 4 * 0, !0),
      a = $().getInt32(c + 4 * 1, !0),
      s = $().getInt32(c + 4 * 2, !0);
    if (s) throw oe(a);
    return oe(o)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function kc(e, t, n, r) {
  try {
    const f = d.__wbindgen_add_to_stack_pointer(-16),
      u = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      _ = fe;
    var i = De(r) ? 0 : ge(r, d.__wbindgen_malloc, d.__wbindgen_realloc),
      o = fe;
    d.unpackFromCell(f, me(e), u, _, n, i, o);
    var a = $().getInt32(f + 4 * 0, !0),
      s = $().getInt32(f + 4 * 1, !0),
      c = $().getInt32(f + 4 * 2, !0);
    if (c) throw oe(s);
    return oe(a)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Sc(e) {
  try {
    const o = d.__wbindgen_add_to_stack_pointer(-16),
      a = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      s = fe;
    d.extractContractData(o, a, s);
    var t = $().getInt32(o + 4 * 0, !0),
      n = $().getInt32(o + 4 * 1, !0),
      r = $().getInt32(o + 4 * 2, !0),
      i = $().getInt32(o + 4 * 3, !0);
    if (i) throw oe(r);
    let c;
    return t !== 0 && (c = je(t, n).slice(), d.__wbindgen_free(t, n * 1, 1)), c
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Ac(e) {
  let t, n;
  try {
    const f = d.__wbindgen_add_to_stack_pointer(-16),
      u = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      _ = fe;
    d.extractPublicKey(f, u, _);
    var r = $().getInt32(f + 4 * 0, !0),
      i = $().getInt32(f + 4 * 1, !0),
      o = $().getInt32(f + 4 * 2, !0),
      a = $().getInt32(f + 4 * 3, !0),
      s = r,
      c = i;
    if (a) throw s = 0, c = 0, oe(o);
    return t = s, n = c, je(s, c)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16), d.__wbindgen_free(t, n, 1)
  }
}

function Ic(e) {
  try {
    const i = d.__wbindgen_add_to_stack_pointer(-16),
      o = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      a = fe;
    d.codeToTvc(i, o, a);
    var t = $().getInt32(i + 4 * 0, !0),
      n = $().getInt32(i + 4 * 1, !0),
      r = $().getInt32(i + 4 * 2, !0);
    if (r) throw oe(n);
    return oe(t)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Cc(e, t) {
  try {
    const o = d.__wbindgen_add_to_stack_pointer(-16),
      a = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      s = fe,
      c = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      f = fe;
    d.mergeTvc(o, a, s, c, f);
    var n = $().getInt32(o + 4 * 0, !0),
      r = $().getInt32(o + 4 * 1, !0),
      i = $().getInt32(o + 4 * 2, !0);
    if (i) throw oe(r);
    return oe(n)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Bc(e) {
  try {
    const i = d.__wbindgen_add_to_stack_pointer(-16),
      o = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      a = fe;
    d.splitTvc(i, o, a);
    var t = $().getInt32(i + 4 * 0, !0),
      n = $().getInt32(i + 4 * 1, !0),
      r = $().getInt32(i + 4 * 2, !0);
    if (r) throw oe(n);
    return oe(t)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Pc(e, t) {
  try {
    const o = d.__wbindgen_add_to_stack_pointer(-16),
      a = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      s = fe,
      c = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      f = fe;
    d.setCodeSalt(o, a, s, c, f);
    var n = $().getInt32(o + 4 * 0, !0),
      r = $().getInt32(o + 4 * 1, !0),
      i = $().getInt32(o + 4 * 2, !0);
    if (i) throw oe(r);
    return oe(n)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Mc(e) {
  try {
    const o = d.__wbindgen_add_to_stack_pointer(-16),
      a = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      s = fe;
    d.getCodeSalt(o, a, s);
    var t = $().getInt32(o + 4 * 0, !0),
      n = $().getInt32(o + 4 * 1, !0),
      r = $().getInt32(o + 4 * 2, !0),
      i = $().getInt32(o + 4 * 3, !0);
    if (i) throw oe(r);
    let c;
    return t !== 0 && (c = je(t, n).slice(), d.__wbindgen_free(t, n * 1, 1)), c
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Tc(e, t, n) {
  let r, i;
  try {
    const _ = d.__wbindgen_add_to_stack_pointer(-16),
      B = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      y = fe,
      S = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      m = fe;
    d.encodeInternalInput(_, B, y, S, m, me(n));
    var o = $().getInt32(_ + 4 * 0, !0),
      a = $().getInt32(_ + 4 * 1, !0),
      s = $().getInt32(_ + 4 * 2, !0),
      c = $().getInt32(_ + 4 * 3, !0),
      f = o,
      u = a;
    if (c) throw f = 0, u = 0, oe(s);
    return r = f, i = u, je(f, u)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16), d.__wbindgen_free(r, i, 1)
  }
}

function Ec(e, t, n, r, i, o, a) {
  let s, c;
  try {
    const P = d.__wbindgen_add_to_stack_pointer(-16);
    var f = De(e) ? 0 : ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      u = fe;
    const k = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      T = fe;
    var _ = De(r) ? 0 : ge(r, d.__wbindgen_malloc, d.__wbindgen_realloc),
      B = fe,
      y = De(i) ? 0 : ge(i, d.__wbindgen_malloc, d.__wbindgen_realloc),
      S = fe;
    const J = ge(o, d.__wbindgen_malloc, d.__wbindgen_realloc),
      ne = fe;
    d.encodeInternalMessage(P, f, u, k, T, n, _, B, y, S, J, ne, De(a) ? 16777215 : a ? 1 : 0);
    var m = $().getInt32(P + 4 * 0, !0),
      v = $().getInt32(P + 4 * 1, !0),
      x = $().getInt32(P + 4 * 2, !0),
      M = $().getInt32(P + 4 * 3, !0),
      p = m,
      h = v;
    if (M) throw p = 0, h = 0, oe(x);
    return s = p, c = h, je(p, h)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16), d.__wbindgen_free(s, c, 1)
  }
}

function Oc(e, t, n, r) {
  try {
    const s = d.__wbindgen_add_to_stack_pointer(-16),
      c = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      f = fe,
      u = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      _ = fe;
    d.decodeInput(s, c, f, u, _, me(n), r);
    var i = $().getInt32(s + 4 * 0, !0),
      o = $().getInt32(s + 4 * 1, !0),
      a = $().getInt32(s + 4 * 2, !0);
    if (a) throw oe(o);
    return oe(i)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function xc(e, t, n) {
  try {
    const a = d.__wbindgen_add_to_stack_pointer(-16),
      s = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      c = fe,
      f = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      u = fe;
    d.decodeEvent(a, s, c, f, u, me(n));
    var r = $().getInt32(a + 4 * 0, !0),
      i = $().getInt32(a + 4 * 1, !0),
      o = $().getInt32(a + 4 * 2, !0);
    if (o) throw oe(i);
    return oe(r)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Uc(e, t, n) {
  try {
    const a = d.__wbindgen_add_to_stack_pointer(-16),
      s = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      c = fe,
      f = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      u = fe;
    d.decodeOutput(a, s, c, f, u, me(n));
    var r = $().getInt32(a + 4 * 0, !0),
      i = $().getInt32(a + 4 * 1, !0),
      o = $().getInt32(a + 4 * 2, !0);
    if (o) throw oe(i);
    return oe(r)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Rc(e, t, n) {
  try {
    const a = d.__wbindgen_add_to_stack_pointer(-16),
      s = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      c = fe;
    d.decodeTransaction(a, me(e), s, c, me(n));
    var r = $().getInt32(a + 4 * 0, !0),
      i = $().getInt32(a + 4 * 1, !0),
      o = $().getInt32(a + 4 * 2, !0);
    if (o) throw oe(i);
    return oe(r)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function jc(e, t) {
  try {
    const o = d.__wbindgen_add_to_stack_pointer(-16),
      a = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      s = fe;
    d.decodeTransactionEvents(o, me(e), a, s);
    var n = $().getInt32(o + 4 * 0, !0),
      r = $().getInt32(o + 4 * 1, !0),
      i = $().getInt32(o + 4 * 2, !0);
    if (i) throw oe(r);
    return oe(n)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Lc(e) {
  try {
    const i = d.__wbindgen_add_to_stack_pointer(-16),
      o = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      a = fe;
    d.unpackTransactionTree(i, o, a);
    var t = $().getInt32(i + 4 * 0, !0),
      n = $().getInt32(i + 4 * 1, !0),
      r = $().getInt32(i + 4 * 2, !0);
    if (r) throw oe(n);
    return oe(t)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function zc(e) {
  let t, n;
  try {
    const f = d.__wbindgen_add_to_stack_pointer(-16),
      u = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      _ = fe;
    d.getDataHash(f, u, _);
    var r = $().getInt32(f + 4 * 0, !0),
      i = $().getInt32(f + 4 * 1, !0),
      o = $().getInt32(f + 4 * 2, !0),
      a = $().getInt32(f + 4 * 3, !0),
      s = r,
      c = i;
    if (a) throw s = 0, c = 0, oe(o);
    return t = s, n = c, je(s, c)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16), d.__wbindgen_free(t, n, 1)
  }
}

function Nc() {
  try {
    const r = d.__wbindgen_add_to_stack_pointer(-16);
    d.ed25519_generateKeyPair(r);
    var e = $().getInt32(r + 4 * 0, !0),
      t = $().getInt32(r + 4 * 1, !0),
      n = $().getInt32(r + 4 * 2, !0);
    if (n) throw oe(t);
    return oe(e)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Dc(e, t, n) {
  let r, i;
  try {
    const _ = d.__wbindgen_add_to_stack_pointer(-16),
      B = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      y = fe,
      S = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      m = fe;
    d.ed25519_sign(_, B, y, S, m, !De(n), De(n) ? 0 : n);
    var o = $().getInt32(_ + 4 * 0, !0),
      a = $().getInt32(_ + 4 * 1, !0),
      s = $().getInt32(_ + 4 * 2, !0),
      c = $().getInt32(_ + 4 * 3, !0),
      f = o,
      u = a;
    if (c) throw f = 0, u = 0, oe(s);
    return r = f, i = u, je(f, u)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16), d.__wbindgen_free(r, i, 1)
  }
}

function Fc(e) {
  try {
    const i = d.__wbindgen_add_to_stack_pointer(-16),
      o = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      a = fe;
    d.extendSignature(i, o, a);
    var t = $().getInt32(i + 4 * 0, !0),
      n = $().getInt32(i + 4 * 1, !0),
      r = $().getInt32(i + 4 * 2, !0);
    if (r) throw oe(n);
    return oe(t)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Kc(e, t, n, r) {
  try {
    const s = d.__wbindgen_add_to_stack_pointer(-16),
      c = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      f = fe,
      u = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      _ = fe,
      B = ge(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
      y = fe;
    d.verifySignature(s, c, f, u, _, B, y, !De(r), De(r) ? 0 : r);
    var i = $().getInt32(s + 4 * 0, !0),
      o = $().getInt32(s + 4 * 1, !0),
      a = $().getInt32(s + 4 * 2, !0);
    if (a) throw oe(o);
    return i !== 0
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function $c(e, t, n, r) {
  try {
    const _ = d.__wbindgen_add_to_stack_pointer(-16),
      B = ge(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      y = fe;
    var i = De(t) ? 0 : ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      o = fe,
      a = De(n) ? 0 : ge(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
      s = fe;
    d.createRawExternalMessage(_, B, y, i, o, a, s, r);
    var c = $().getInt32(_ + 4 * 0, !0),
      f = $().getInt32(_ + 4 * 1, !0),
      u = $().getInt32(_ + 4 * 2, !0);
    if (u) throw oe(f);
    return oe(c)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Hc(e, t, n, r, i, o, a) {
  try {
    const B = d.__wbindgen_add_to_stack_pointer(-16);
    At(e, zt);
    const y = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      S = fe,
      m = ge(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
      v = fe,
      x = ge(r, d.__wbindgen_malloc, d.__wbindgen_realloc),
      M = fe;
    var s = De(i) ? 0 : ge(i, d.__wbindgen_malloc, d.__wbindgen_realloc),
      c = fe;
    d.createExternalMessageWithoutSignature(B, e.__wbg_ptr, y, S, m, v, x, M, s, c, me(o), a);
    var f = $().getInt32(B + 4 * 0, !0),
      u = $().getInt32(B + 4 * 1, !0),
      _ = $().getInt32(B + 4 * 2, !0);
    if (_) throw oe(u);
    return oe(f)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Vc(e, t, n, r, i, o, a, s) {
  try {
    const y = d.__wbindgen_add_to_stack_pointer(-16);
    At(e, zt);
    const S = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      m = fe,
      v = ge(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
      x = fe,
      M = ge(r, d.__wbindgen_malloc, d.__wbindgen_realloc),
      p = fe;
    var c = De(i) ? 0 : ge(i, d.__wbindgen_malloc, d.__wbindgen_realloc),
      f = fe;
    const h = ge(a, d.__wbindgen_malloc, d.__wbindgen_realloc),
      P = fe;
    d.createExternalMessage(y, e.__wbg_ptr, S, m, v, x, M, p, c, f, me(o), h, P, s);
    var u = $().getInt32(y + 4 * 0, !0),
      _ = $().getInt32(y + 4 * 1, !0),
      B = $().getInt32(y + 4 * 2, !0);
    if (B) throw oe(_);
    return si.__wrap(u)
  } finally {
    d.__wbindgen_add_to_stack_pointer(16)
  }
}

function Gc(e, t, n, r) {
  d.wasm_bindgen__convert__closures__invoke2_mut__h5874b044d3e8a56e(e, t, me(n), me(r))
}
const Wa = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(e => d.__wbg_bytesquery_free(e >>> 0, 1));
class ai {
  static __wrap(t) {
    t = t >>> 0;
    const n = Object.create(ai.prototype);
    return n.__wbg_ptr = t, Wa.register(n, n.__wbg_ptr, n), n
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Wa.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    d.__wbg_bytesquery_free(t, 0)
  }
  onReceive(t) {
    const n = this.__destroy_into_raw(),
      r = lc(t, d.__wbindgen_malloc),
      i = fe;
    d.bytesquery_onReceive(n, r, i)
  }
  onError(t) {
    const n = this.__destroy_into_raw();
    d.bytesquery_onError(n, me(t))
  }
  onTimeout() {
    const t = this.__destroy_into_raw();
    d.bytesquery_onTimeout(t)
  }
}
const Ya = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(e => d.__wbg_clockwithoffset_free(e >>> 0, 1));
class zt {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ya.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    d.__wbg_clockwithoffset_free(t, 0)
  }
  constructor() {
    const t = d.clockwithoffset_new();
    return this.__wbg_ptr = t >>> 0, Ya.register(this, this.__wbg_ptr, this), this
  }
  get nowMs() {
    return d.clockwithoffset_nowMs(this.__wbg_ptr)
  }
  updateOffset(t) {
    d.clockwithoffset_updateOffset(this.__wbg_ptr, t)
  }
  offsetMs() {
    return d.clockwithoffset_offsetMs(this.__wbg_ptr)
  }
}
const Xa = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(e => d.__wbg_genericcontract_free(e >>> 0, 1));
class oi {
  static __wrap(t) {
    t = t >>> 0;
    const n = Object.create(oi.prototype);
    return n.__wbg_ptr = t, Xa.register(n, n.__wbg_ptr, n), n
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Xa.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    d.__wbg_genericcontract_free(t, 0)
  }
  get address() {
    let t, n;
    try {
      const o = d.__wbindgen_add_to_stack_pointer(-16);
      d.genericcontract_address(o, this.__wbg_ptr);
      var r = $().getInt32(o + 4 * 0, !0),
        i = $().getInt32(o + 4 * 1, !0);
      return t = r, n = i, je(r, i)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16), d.__wbindgen_free(t, n, 1)
    }
  }
  sendMessageLocally(t, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16);
      d.genericcontract_sendMessageLocally(a, this.__wbg_ptr, me(t), me(n));
      var r = $().getInt32(a + 4 * 0, !0),
        i = $().getInt32(a + 4 * 1, !0),
        o = $().getInt32(a + 4 * 2, !0);
      if (o) throw oe(i);
      return oe(r)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16)
    }
  }
  sendMessage(t) {
    try {
      const o = d.__wbindgen_add_to_stack_pointer(-16);
      d.genericcontract_sendMessage(o, this.__wbg_ptr, me(t));
      var n = $().getInt32(o + 4 * 0, !0),
        r = $().getInt32(o + 4 * 1, !0),
        i = $().getInt32(o + 4 * 2, !0);
      if (i) throw oe(r);
      return oe(n)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16)
    }
  }
  refresh() {
    const t = d.genericcontract_refresh(this.__wbg_ptr);
    return oe(t)
  }
  handleBlock(t) {
    const n = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      r = fe,
      i = d.genericcontract_handleBlock(this.__wbg_ptr, n, r);
    return oe(i)
  }
  preloadTransactions(t) {
    try {
      const o = d.__wbindgen_add_to_stack_pointer(-16),
        a = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
        s = fe;
      d.genericcontract_preloadTransactions(o, this.__wbg_ptr, a, s);
      var n = $().getInt32(o + 4 * 0, !0),
        r = $().getInt32(o + 4 * 1, !0),
        i = $().getInt32(o + 4 * 2, !0);
      if (i) throw oe(r);
      return oe(n)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16)
    }
  }
  get pollingMethod() {
    const t = d.genericcontract_pollingMethod(this.__wbg_ptr);
    return oe(t)
  }
}
const Ja = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(e => d.__wbg_gqlconnection_free(e >>> 0, 1));
class Jo {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ja.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    d.__wbg_gqlconnection_free(t, 0)
  }
  constructor(t) {
    const n = d.gqlconnection_new(me(t));
    return this.__wbg_ptr = n >>> 0, Ja.register(this, this.__wbg_ptr, this), this
  }
  getLatestBlock(t) {
    try {
      const o = d.__wbindgen_add_to_stack_pointer(-16),
        a = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
        s = fe;
      d.gqlconnection_getLatestBlock(o, this.__wbg_ptr, a, s);
      var n = $().getInt32(o + 4 * 0, !0),
        r = $().getInt32(o + 4 * 1, !0),
        i = $().getInt32(o + 4 * 2, !0);
      if (i) throw oe(r);
      return oe(n)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16)
    }
  }
  waitForNextBlock(t, n, r) {
    try {
      const s = d.__wbindgen_add_to_stack_pointer(-16),
        c = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
        f = fe,
        u = ge(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
        _ = fe;
      d.gqlconnection_waitForNextBlock(s, this.__wbg_ptr, c, f, u, _, r);
      var i = $().getInt32(s + 4 * 0, !0),
        o = $().getInt32(s + 4 * 1, !0),
        a = $().getInt32(s + 4 * 2, !0);
      if (a) throw oe(o);
      return oe(i)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
const Qa = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(e => d.__wbg_jrpcconnection_free(e >>> 0, 1));
class Qo {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Qa.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    d.__wbg_jrpcconnection_free(t, 0)
  }
  constructor(t) {
    const n = d.gqlconnection_new(me(t));
    return this.__wbg_ptr = n >>> 0, Qa.register(this, this.__wbg_ptr, this), this
  }
}
const qa = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(e => d.__wbg_protoconnection_free(e >>> 0, 1));
class qo {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, qa.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    d.__wbg_protoconnection_free(t, 0)
  }
  constructor(t) {
    const n = d.gqlconnection_new(me(t));
    return this.__wbg_ptr = n >>> 0, qa.register(this, this.__wbg_ptr, this), this
  }
}
const Za = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(e => d.__wbg_proxyconnection_free(e >>> 0, 1));
class Zo {
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Za.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    d.__wbg_proxyconnection_free(t, 0)
  }
  constructor(t) {
    const n = d.gqlconnection_new(me(t));
    return this.__wbg_ptr = n >>> 0, Za.register(this, this.__wbg_ptr, this), this
  }
}
const eo = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(e => d.__wbg_stringquery_free(e >>> 0, 1));
class Or {
  static __wrap(t) {
    t = t >>> 0;
    const n = Object.create(Or.prototype);
    return n.__wbg_ptr = t, eo.register(n, n.__wbg_ptr, n), n
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, eo.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    d.__wbg_stringquery_free(t, 0)
  }
  onReceive(t) {
    const n = this.__destroy_into_raw(),
      r = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
      i = fe;
    d.bytesquery_onReceive(n, r, i)
  }
  onError(t) {
    const n = this.__destroy_into_raw();
    d.bytesquery_onError(n, me(t))
  }
  onTimeout() {
    const t = this.__destroy_into_raw();
    d.bytesquery_onTimeout(t)
  }
}
const to = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(e => d.__wbg_transport_free(e >>> 0, 1));
class mn {
  static __wrap(t) {
    t = t >>> 0;
    const n = Object.create(mn.prototype);
    return n.__wbg_ptr = t, to.register(n, n.__wbg_ptr, n), n
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, to.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    d.__wbg_transport_free(t, 0)
  }
  static fromGqlConnection(t, n) {
    At(t, Jo), At(n, zt);
    const r = d.transport_fromGqlConnection(t.__wbg_ptr, n.__wbg_ptr);
    return mn.__wrap(r)
  }
  static fromJrpcConnection(t, n) {
    At(t, Qo), At(n, zt);
    const r = d.transport_fromJrpcConnection(t.__wbg_ptr, n.__wbg_ptr);
    return mn.__wrap(r)
  }
  static fromProtoConnection(t, n) {
    At(t, qo), At(n, zt);
    const r = d.transport_fromProtoConnection(t.__wbg_ptr, n.__wbg_ptr);
    return mn.__wrap(r)
  }
  static fromProxyConnection(t, n) {
    At(t, Zo), At(n, zt);
    const r = d.transport_fromProxyConnection(t.__wbg_ptr, n.__wbg_ptr);
    return mn.__wrap(r)
  }
  getNetworkDescription() {
    const t = d.transport_getNetworkDescription(this.__wbg_ptr);
    return oe(t)
  }
  getSignatureId() {
    const t = d.transport_getSignatureId(this.__wbg_ptr);
    return oe(t)
  }
  getBlockchainConfig(t) {
    const n = d.transport_getBlockchainConfig(this.__wbg_ptr, De(t) ? 16777215 : t ? 1 : 0);
    return oe(n)
  }
  subscribeToGenericContract(t, n) {
    try {
      const a = d.__wbindgen_add_to_stack_pointer(-16),
        s = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
        c = fe;
      d.transport_subscribeToGenericContract(a, this.__wbg_ptr, s, c, me(n));
      var r = $().getInt32(a + 4 * 0, !0),
        i = $().getInt32(a + 4 * 1, !0),
        o = $().getInt32(a + 4 * 2, !0);
      if (o) throw oe(i);
      return oe(r)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getFullContractState(t) {
    try {
      const o = d.__wbindgen_add_to_stack_pointer(-16),
        a = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
        s = fe;
      d.transport_getFullContractState(o, this.__wbg_ptr, a, s);
      var n = $().getInt32(o + 4 * 0, !0),
        r = $().getInt32(o + 4 * 1, !0),
        i = $().getInt32(o + 4 * 2, !0);
      if (i) throw oe(r);
      return oe(n)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getAccountsByCodeHash(t, n, r) {
    try {
      const f = d.__wbindgen_add_to_stack_pointer(-16),
        u = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
        _ = fe;
      var i = De(r) ? 0 : ge(r, d.__wbindgen_malloc, d.__wbindgen_realloc),
        o = fe;
      d.transport_getAccountsByCodeHash(f, this.__wbg_ptr, u, _, n, i, o);
      var a = $().getInt32(f + 4 * 0, !0),
        s = $().getInt32(f + 4 * 1, !0),
        c = $().getInt32(f + 4 * 2, !0);
      if (c) throw oe(s);
      return oe(a)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getTransactions(t, n, r) {
    try {
      const f = d.__wbindgen_add_to_stack_pointer(-16),
        u = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
        _ = fe;
      var i = De(n) ? 0 : ge(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
        o = fe;
      d.transport_getTransactions(f, this.__wbg_ptr, u, _, i, o, r);
      var a = $().getInt32(f + 4 * 0, !0),
        s = $().getInt32(f + 4 * 1, !0),
        c = $().getInt32(f + 4 * 2, !0);
      if (c) throw oe(s);
      return oe(a)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getTransaction(t) {
    try {
      const o = d.__wbindgen_add_to_stack_pointer(-16),
        a = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
        s = fe;
      d.transport_getTransaction(o, this.__wbg_ptr, a, s);
      var n = $().getInt32(o + 4 * 0, !0),
        r = $().getInt32(o + 4 * 1, !0),
        i = $().getInt32(o + 4 * 2, !0);
      if (i) throw oe(r);
      return oe(n)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16)
    }
  }
  getDstTransaction(t) {
    try {
      const o = d.__wbindgen_add_to_stack_pointer(-16),
        a = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
        s = fe;
      d.transport_getDstTransaction(o, this.__wbg_ptr, a, s);
      var n = $().getInt32(o + 4 * 0, !0),
        r = $().getInt32(o + 4 * 1, !0),
        i = $().getInt32(o + 4 * 2, !0);
      if (i) throw oe(r);
      return oe(n)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
const no = typeof FinalizationRegistry > "u" ? {
  register: () => {},
  unregister: () => {}
} : new FinalizationRegistry(e => d.__wbg_unsignedmessage_free(e >>> 0, 1));
class si {
  static __wrap(t) {
    t = t >>> 0;
    const n = Object.create(si.prototype);
    return n.__wbg_ptr = t, no.register(n, n.__wbg_ptr, n), n
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, no.unregister(this), t
  }
  free() {
    const t = this.__destroy_into_raw();
    d.__wbg_unsignedmessage_free(t, 0)
  }
  refreshTimeout(t) {
    At(t, zt), d.unsignedmessage_refreshTimeout(this.__wbg_ptr, t.__wbg_ptr)
  }
  expireAt() {
    return d.unsignedmessage_expireAt(this.__wbg_ptr) >>> 0
  }
  get hash() {
    let t, n;
    try {
      const o = d.__wbindgen_add_to_stack_pointer(-16);
      d.unsignedmessage_hash(o, this.__wbg_ptr);
      var r = $().getInt32(o + 4 * 0, !0),
        i = $().getInt32(o + 4 * 1, !0);
      return t = r, n = i, je(r, i)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16), d.__wbindgen_free(t, n, 1)
    }
  }
  sign(t) {
    try {
      const o = d.__wbindgen_add_to_stack_pointer(-16),
        a = ge(t, d.__wbindgen_malloc, d.__wbindgen_realloc),
        s = fe;
      d.unsignedmessage_sign(o, this.__wbg_ptr, a, s);
      var n = $().getInt32(o + 4 * 0, !0),
        r = $().getInt32(o + 4 * 1, !0),
        i = $().getInt32(o + 4 * 2, !0);
      if (i) throw oe(r);
      return oe(n)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16)
    }
  }
  signFake() {
    try {
      const i = d.__wbindgen_add_to_stack_pointer(-16);
      d.unsignedmessage_signFake(i, this.__wbg_ptr);
      var t = $().getInt32(i + 4 * 0, !0),
        n = $().getInt32(i + 4 * 1, !0),
        r = $().getInt32(i + 4 * 2, !0);
      if (r) throw oe(n);
      return oe(t)
    } finally {
      d.__wbindgen_add_to_stack_pointer(16)
    }
  }
}
async function Wc(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t)
    } catch (r) {
      if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r
    }
    const n = await e.arrayBuffer();
    return await WebAssembly.instantiate(n, t)
  } else {
    const n = await WebAssembly.instantiate(e, t);
    return n instanceof WebAssembly.Instance ? {
      instance: n,
      module: e
    } : n
  }
}

function es() {
  const e = {};
  return e.wbg = {}, e.wbg.__wbindgen_string_new = function(t, n) {
    const r = je(t, n);
    return me(r)
  }, e.wbg.__wbg_length_ae22078168b726f5 = function(t) {
    return _e(t).length
  }, e.wbg.__wbindgen_is_undefined = function(t) {
    return _e(t) === void 0
  }, e.wbg.__wbindgen_number_get = function(t, n) {
    const r = _e(n),
      i = typeof r == "number" ? r : void 0;
    $().setFloat64(t + 8 * 1, De(i) ? 0 : i, !0), $().setInt32(t + 4 * 0, !De(i), !0)
  }, e.wbg.__wbindgen_is_null = function(t) {
    return _e(t) === null
  }, e.wbg.__wbindgen_string_get = function(t, n) {
    const r = _e(n),
      i = typeof r == "string" ? r : void 0;
    var o = De(i) ? 0 : ge(i, d.__wbindgen_malloc, d.__wbindgen_realloc),
      a = fe;
    $().setInt32(t + 4 * 1, a, !0), $().setInt32(t + 4 * 0, o, !0)
  }, e.wbg.__wbindgen_is_object = function(t) {
    const n = _e(t);
    return typeof n == "object" && n !== null
  }, e.wbg.__wbindgen_is_string = function(t) {
    return typeof _e(t) == "string"
  }, e.wbg.__wbg_new_796382978dfd4fb0 = function(t, n) {
    const r = new Error(je(t, n));
    return me(r)
  }, e.wbg.__wbg_new_525245e2b9901204 = function() {
    const t = new Object;
    return me(t)
  }, e.wbg.__wbg_new_a220cf903aa02ca2 = function() {
    const t = new Array;
    return me(t)
  }, e.wbg.__wbg_push_37c89022f34c01ca = function(t, n) {
    return _e(t).push(_e(n))
  }, e.wbg.__wbg_genericcontract_new = function(t) {
    const n = oi.__wrap(t);
    return me(n)
  }, e.wbg.__wbg_instanceof_Error_69bde193b0cc95e3 = function(t) {
    let n;
    try {
      n = _e(t) instanceof Error
    } catch {
      n = !1
    }
    return n
  }, e.wbg.__wbg_name_ac78212e803c7941 = function(t) {
    const n = _e(t).name;
    return me(n)
  }, e.wbg.__wbg_message_e18bae0a0e2c097a = function(t) {
    const n = _e(t).message;
    return me(n)
  }, e.wbg.__wbg_toString_9d18e102ca933e68 = function(t) {
    const n = _e(t).toString();
    return me(n)
  }, e.wbg.__wbindgen_object_drop_ref = function(t) {
    oe(t)
  }, e.wbg.__wbindgen_number_new = function(t) {
    return me(t)
  }, e.wbg.__wbg_now_b7a162010a9e75b4 = function() {
    return Date.now()
  }, e.wbg.__wbg_onMessageSent_2c1ae08491ab9850 = function(t, n, r) {
    _e(t).onMessageSent(oe(n), oe(r))
  }, e.wbg.__wbg_onMessageExpired_25cd422e9328ee8a = function(t, n) {
    _e(t).onMessageExpired(oe(n))
  }, e.wbg.__wbg_onStateChanged_3d54166d152ed7c7 = function(t, n) {
    _e(t).onStateChanged(oe(n))
  }, e.wbg.__wbg_onTransactionsFound_bf3f4ff44694cccd = function(t, n, r) {
    _e(t).onTransactionsFound(oe(n), oe(r))
  }, e.wbg.__wbindgen_object_clone_ref = function(t) {
    const n = _e(t);
    return me(n)
  }, e.wbg.__wbg_keys_7840ae453e408eab = function(t) {
    const n = Object.keys(_e(t));
    return me(n)
  }, e.wbg.__wbindgen_boolean_get = function(t) {
    const n = _e(t);
    return typeof n == "boolean" ? n ? 1 : 0 : 2
  }, e.wbg.__wbg_get_3baa728f9d58d3f6 = function(t, n) {
    const r = _e(t)[n >>> 0];
    return me(r)
  }, e.wbg.__wbg_isLocal_c89a0f06d00eb44d = function(t) {
    return _e(t).isLocal()
  }, e.wbg.__wbg_send_3a6112602f38b674 = function(t, n, r, i, o) {
    _e(t).send(je(n, r), Or.__wrap(i), o !== 0)
  }, e.wbg.__wbg_send_bd8357f2e836b323 = function(t, n, r, i, o) {
    _e(t).send(je(n, r), Or.__wrap(i), o !== 0)
  }, e.wbg.__wbg_send_1699c4cfc0bbee60 = function(t, n, r, i, o) {
    _e(t).send(sc(n, r), ai.__wrap(i), o !== 0)
  }, e.wbg.__wbg_new_b85e72ed1bfd57f9 = function(t, n) {
    try {
      var r = {
          a: t,
          b: n
        },
        i = (a, s) => {
          const c = r.a;
          r.a = 0;
          try {
            return Gc(c, r.b, a, s)
          } finally {
            r.a = c
          }
        };
      const o = new Promise(i);
      return me(o)
    } finally {
      r.a = r.b = 0
    }
  }, e.wbg.__wbg_info_2ffec7e533c4f23d = function() {
    return Xe(function(t) {
      const n = _e(t).info();
      return me(n)
    }, arguments)
  }, e.wbg.__wbg_sendMessage_8d09b0e227438eb5 = function() {
    return Xe(function(t, n, r) {
      const i = _e(t).sendMessage(je(n, r));
      return me(i)
    }, arguments)
  }, e.wbg.__wbg_getContractState_a832ca559ffd8b92 = function() {
    return Xe(function(t, n, r) {
      const i = _e(t).getContractState(je(n, r));
      return me(i)
    }, arguments)
  }, e.wbg.__wbg_getAccountsByCodeHash_c75072db79c08409 = function() {
    return Xe(function(t, n, r, i, o, a) {
      let s;
      o !== 0 && (s = je(o, a).slice(), d.__wbindgen_free(o, a * 1, 1));
      const c = _e(t).getAccountsByCodeHash(je(n, r), i, s);
      return me(c)
    }, arguments)
  }, e.wbg.__wbg_getTransactions_eb09ca0ff4ac3072 = function() {
    return Xe(function(t, n, r, i, o, a) {
      const s = _e(t).getTransactions(je(n, r), je(i, o), a);
      return me(s)
    }, arguments)
  }, e.wbg.__wbg_getTransaction_c4bdcf967b80c793 = function() {
    return Xe(function(t, n, r) {
      const i = _e(t).getTransaction(je(n, r));
      return me(i)
    }, arguments)
  }, e.wbg.__wbg_getDstTransaction_84b6163592386f1b = function() {
    return Xe(function(t, n, r) {
      const i = _e(t).getDstTransaction(je(n, r));
      return me(i)
    }, arguments)
  }, e.wbg.__wbg_getLatestKeyBlock_934ef847dfb13892 = function() {
    return Xe(function(t) {
      const n = _e(t).getLatestKeyBlock();
      return me(n)
    }, arguments)
  }, e.wbg.__wbg_getCapabilities_b340b48cfe2a8c0d = function() {
    return Xe(function(t, n, r) {
      const i = _e(t).getCapabilities(je(n, r));
      return me(i)
    }, arguments)
  }, e.wbg.__wbg_getBlockchainConfig_c208c7ae79b4d1c0 = function() {
    return Xe(function(t, n, r) {
      const i = _e(t).getBlockchainConfig(je(n, r));
      return me(i)
    }, arguments)
  }, e.wbg.__wbindgen_memory = function() {
    const t = d.memory;
    return me(t)
  }, e.wbg.__wbg_buffer_b7b08af79b0b0974 = function(t) {
    const n = _e(t).buffer;
    return me(n)
  }, e.wbg.__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9 = function(t, n, r) {
    const i = new Uint8Array(_e(t), n >>> 0, r >>> 0);
    return me(i)
  }, e.wbg.__wbg_randomFillSync_dc1e9a60c158336d = function() {
    return Xe(function(t, n) {
      _e(t).randomFillSync(oe(n))
    }, arguments)
  }, e.wbg.__wbg_subarray_7c2e3576afe181d1 = function(t, n, r) {
    const i = _e(t).subarray(n >>> 0, r >>> 0);
    return me(i)
  }, e.wbg.__wbg_getRandomValues_37fa2ca9e4e07fab = function() {
    return Xe(function(t, n) {
      _e(t).getRandomValues(_e(n))
    }, arguments)
  }, e.wbg.__wbg_new_ea1883e1e5e86686 = function(t) {
    const n = new Uint8Array(_e(t));
    return me(n)
  }, e.wbg.__wbg_set_d1e79e2388520f18 = function(t, n, r) {
    _e(t).set(_e(n), r >>> 0)
  }, e.wbg.__wbg_crypto_c48a774b022d20ac = function(t) {
    const n = _e(t).crypto;
    return me(n)
  }, e.wbg.__wbg_process_298734cf255a885d = function(t) {
    const n = _e(t).process;
    return me(n)
  }, e.wbg.__wbg_versions_e2e78e134e3e5d01 = function(t) {
    const n = _e(t).versions;
    return me(n)
  }, e.wbg.__wbg_node_1cd7a5d853dbea79 = function(t) {
    const n = _e(t).node;
    return me(n)
  }, e.wbg.__wbg_require_8f08ceecec0f4fee = function() {
    return Xe(function() {
      const t = module.require;
      return me(t)
    }, arguments)
  }, e.wbg.__wbindgen_is_function = function(t) {
    return typeof _e(t) == "function"
  }, e.wbg.__wbg_msCrypto_bcb970640f50a1e8 = function(t) {
    const n = _e(t).msCrypto;
    return me(n)
  }, e.wbg.__wbg_newwithlength_ec548f448387c968 = function(t) {
    const n = new Uint8Array(t >>> 0);
    return me(n)
  }, e.wbg.__wbg_get_224d16597dbbfd96 = function() {
    return Xe(function(t, n) {
      const r = Reflect.get(_e(t), _e(n));
      return me(r)
    }, arguments)
  }, e.wbg.__wbg_self_3093d5d1f7bcb682 = function() {
    return Xe(function() {
      const t = self.self;
      return me(t)
    }, arguments)
  }, e.wbg.__wbg_window_3bcfc4d31bc012f8 = function() {
    return Xe(function() {
      const t = window.window;
      return me(t)
    }, arguments)
  }, e.wbg.__wbg_globalThis_86b222e13bdf32ed = function() {
    return Xe(function() {
      const t = globalThis.globalThis;
      return me(t)
    }, arguments)
  }, e.wbg.__wbg_global_e5a3fe56f8be9485 = function() {
    return Xe(function() {
      const t = global.global;
      return me(t)
    }, arguments)
  }, e.wbg.__wbg_newnoargs_76313bd6ff35d0f2 = function(t, n) {
    const r = new Function(je(t, n));
    return me(r)
  }, e.wbg.__wbg_call_1084a111329e68ce = function() {
    return Xe(function(t, n) {
      const r = _e(t).call(_e(n));
      return me(r)
    }, arguments)
  }, e.wbg.__wbg_isArray_8364a5371e9737d8 = function(t) {
    return Array.isArray(_e(t))
  }, e.wbg.__wbg_call_89af060b4e1523f2 = function() {
    return Xe(function(t, n, r) {
      const i = _e(t).call(_e(n), _e(r));
      return me(i)
    }, arguments)
  }, e.wbg.__wbg_set_eacc7d73fefaafdf = function() {
    return Xe(function(t, n, r) {
      return Reflect.set(_e(t), _e(n), _e(r))
    }, arguments)
  }, e.wbg.__wbg_stringify_bbf45426c92a6bf5 = function() {
    return Xe(function(t) {
      const n = JSON.stringify(_e(t));
      return me(n)
    }, arguments)
  }, e.wbg.__wbindgen_throw = function(t, n) {
    throw new Error(je(t, n))
  }, e.wbg.__wbindgen_debug_string = function(t, n) {
    const r = ia(_e(n)),
      i = ge(r, d.__wbindgen_malloc, d.__wbindgen_realloc),
      o = fe;
    $().setInt32(t + 4 * 1, o, !0), $().setInt32(t + 4 * 0, i, !0)
  }, e.wbg.__wbindgen_cb_drop = function(t) {
    const n = oe(t).original;
    return n.cnt-- == 1 ? (n.a = 0, !0) : !1
  }, e.wbg.__wbg_then_95e6edc0f89b73b1 = function(t, n) {
    const r = _e(t).then(_e(n));
    return me(r)
  }, e.wbg.__wbg_queueMicrotask_12a30234db4045d3 = function(t) {
    queueMicrotask(_e(t))
  }, e.wbg.__wbg_then_876bb3c633745cc6 = function(t, n, r) {
    const i = _e(t).then(_e(n), _e(r));
    return me(i)
  }, e.wbg.__wbg_queueMicrotask_48421b3cc9052b68 = function(t) {
    const n = _e(t).queueMicrotask;
    return me(n)
  }, e.wbg.__wbg_resolve_570458cb99d56a43 = function(t) {
    const n = Promise.resolve(_e(t));
    return me(n)
  }, e.wbg.__wbindgen_closure_wrapper5481 = function(t, n, r) {
    const i = ac(t, n, 981, oc);
    return me(i)
  }, e
}

function ts(e, t) {
  return d = e.exports, ns.__wbindgen_wasm_module = t, gn = null, Ir = null, d
}

function Yc(e) {
  if (d !== void 0) return d;
  typeof e < "u" && Object.getPrototypeOf(e) === Object.prototype ? {
    module: e
  } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead");
  const t = es();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return ts(n, e)
}
async function ns(e) {
  if (d !== void 0) return d;
  typeof e < "u" && Object.getPrototypeOf(e) === Object.prototype ? {
    module_or_path: e
  } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead"), typeof e > "u" && (e = new URL("/assets/nekoton_wasm_bg-CMYqFJ-k.wasm", import.meta.url));
  const t = es();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const {
    instance: n,
    module: r
  } = await Wc(await e, t);
  return ts(n, r)
}
const Xc = Object.freeze(Object.defineProperty({
    __proto__: null,
    BytesQuery: ai,
    ClockWithOffset: zt,
    GenericContract: oi,
    GqlConnection: Jo,
    JrpcConnection: Qo,
    ProtoConnection: qo,
    ProxyConnection: Zo,
    StringQuery: Or,
    Transport: mn,
    UnsignedMessage: si,
    checkAddress: cc,
    codeToTvc: Ic,
    computeStorageFee: gc,
    createExternalMessage: Vc,
    createExternalMessageWithoutSignature: Hc,
    createRawExternalMessage: $c,
    decodeEvent: xc,
    decodeInput: Oc,
    decodeOutput: Uc,
    decodeTransaction: Rc,
    decodeTransactionEvents: jc,
    default: ns,
    ed25519_generateKeyPair: Nc,
    ed25519_sign: Dc,
    encodeInternalInput: Tc,
    encodeInternalMessage: Ec,
    executeLocal: mc,
    extendSignature: Fc,
    extractContractData: Sc,
    extractPublicKey: Ac,
    getBocHash: wc,
    getCodeSalt: Mc,
    getDataHash: zc,
    getExpectedAddress: bc,
    initSync: Yc,
    makeFullAccountBoc: fc,
    mergeTvc: Cc,
    packIntoCell: vc,
    parseFullAccountBoc: hc,
    parseFullAccountStateInit: pc,
    repackAddress: uc,
    runLocal: dc,
    setCodeSalt: Pc,
    splitTvc: Bc,
    unpackContractFields: yc,
    unpackFromCell: kc,
    unpackInitData: _c,
    unpackTransactionTree: Lc,
    verifySignature: Kc
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Jc = Zl(Xc);
var St = {};
Object.defineProperty(St, "__esModule", {
  value: !0
});
const Qc = {
  ensureNekotonLoaded: void 0,
  nekoton: void 0,
  fetch: void 0,
  fetchAgent: () => {},
  debugLog: void 0
};
St.default = Qc;
var rs = {},
  qc = xr;
xr.default = xr;
xr.stable = os;
xr.stableStringify = os;
var Jr = "[...]",
  is = "[Circular]",
  _n = [],
  yn = [];

function as() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

function xr(e, t, n, r) {
  typeof r > "u" && (r = as()), aa(e, "", 0, [], void 0, 0, r);
  var i;
  try {
    yn.length === 0 ? i = JSON.stringify(e, t, n) : i = JSON.stringify(e, ss(t), n)
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; _n.length !== 0;) {
      var o = _n.pop();
      o.length === 4 ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2]
    }
  }
  return i
}

function Qn(e, t, n, r) {
  var i = Object.getOwnPropertyDescriptor(r, n);
  i.get !== void 0 ? i.configurable ? (Object.defineProperty(r, n, {
    value: e
  }), _n.push([r, n, t, i])) : yn.push([t, n, e]) : (r[n] = e, _n.push([r, n, t]))
}

function aa(e, t, n, r, i, o, a) {
  o += 1;
  var s;
  if (typeof e == "object" && e !== null) {
    for (s = 0; s < r.length; s++)
      if (r[s] === e) {
        Qn(is, e, t, i);
        return
      } if (typeof a.depthLimit < "u" && o > a.depthLimit) {
      Qn(Jr, e, t, i);
      return
    }
    if (typeof a.edgesLimit < "u" && n + 1 > a.edgesLimit) {
      Qn(Jr, e, t, i);
      return
    }
    if (r.push(e), Array.isArray(e))
      for (s = 0; s < e.length; s++) aa(e[s], s, s, r, e, o, a);
    else {
      var c = Object.keys(e);
      for (s = 0; s < c.length; s++) {
        var f = c[s];
        aa(e[f], f, s, r, e, o, a)
      }
    }
    r.pop()
  }
}

function Zc(e, t) {
  return e < t ? -1 : e > t ? 1 : 0
}

function os(e, t, n, r) {
  typeof r > "u" && (r = as());
  var i = oa(e, "", 0, [], void 0, 0, r) || e,
    o;
  try {
    yn.length === 0 ? o = JSON.stringify(i, t, n) : o = JSON.stringify(i, ss(t), n)
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; _n.length !== 0;) {
      var a = _n.pop();
      a.length === 4 ? Object.defineProperty(a[0], a[1], a[3]) : a[0][a[1]] = a[2]
    }
  }
  return o
}

function oa(e, t, n, r, i, o, a) {
  o += 1;
  var s;
  if (typeof e == "object" && e !== null) {
    for (s = 0; s < r.length; s++)
      if (r[s] === e) {
        Qn(is, e, t, i);
        return
      } try {
      if (typeof e.toJSON == "function") return
    } catch {
      return
    }
    if (typeof a.depthLimit < "u" && o > a.depthLimit) {
      Qn(Jr, e, t, i);
      return
    }
    if (typeof a.edgesLimit < "u" && n + 1 > a.edgesLimit) {
      Qn(Jr, e, t, i);
      return
    }
    if (r.push(e), Array.isArray(e))
      for (s = 0; s < e.length; s++) oa(e[s], s, s, r, e, o, a);
    else {
      var c = {},
        f = Object.keys(e).sort(Zc);
      for (s = 0; s < f.length; s++) {
        var u = f[s];
        oa(e[u], u, s, r, e, o, a), c[u] = e[u]
      }
      if (typeof i < "u") _n.push([i, t, e]), i[t] = c;
      else return c
    }
    r.pop()
  }
}

function ss(e) {
  return e = typeof e < "u" ? e : function(t, n) {
      return n
    },
    function(t, n) {
      if (yn.length > 0)
        for (var r = 0; r < yn.length; r++) {
          var i = yn[r];
          if (i[1] === t && i[0] === n) {
            n = i[2], yn.splice(r, 1);
            break
          }
        }
      return e.call(this, t, n)
    }
}
var pt = {},
  nn = {},
  Ye = {},
  Zn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getUniqueId = e.mergeTransactions = e.LT_COLLATOR = e.Semaphore = e.DelayedTransactions = e.MessageExpiredException = e.AddressLiteral = e.isAddressObject = e.Address = void 0;
  class t {
    constructor(S) {
      this.equals = m => this._equals(m), this._address = S
    }
    toString() {
      return this._address
    }
    toJSON() {
      return this._address
    }
    _equals(S) {
      return typeof S == "string" ? this._address === S : this._address === (S == null ? void 0 : S._address)
    }
  }
  e.Address = t;

  function n(y) {
    return y != null && (y instanceof t || Object.getPrototypeOf(y).constructor.name === t.prototype.constructor.name)
  }
  e.isAddressObject = n;
  class r extends t {
    constructor(S) {
      super(S)
    }
  }
  e.AddressLiteral = r;
  class i extends Error {
    constructor(S, m) {
      super("Message expired"), this.address = S, this.hash = m
    }
  }
  e.MessageExpiredException = i;
  class o {
    constructor() {
      this.transactions = new Map
    }
    async waitTransaction(S, m) {
      var v;
      let x = (v = this.transactions.get(m)) === null || v === void 0 ? void 0 : v.promise;
      if (x == null) {
        let p, h;
        x = new Promise((P, k) => {
          p = T => P(T), h = () => k()
        }), this.transactions.set(m, {
          promise: x,
          resolve: p,
          reject: h
        })
      }
      const M = await x;
      if (M == null) throw new i(S, m);
      return M
    }
    fillTransaction(S, m) {
      const v = this.transactions.get(S);
      v != null ? v.resolve(m) : this.transactions.set(S, {
        promise: Promise.resolve(m),
        resolve: () => {},
        reject: () => {}
      })
    }
  }
  e.DelayedTransactions = o;
  class a {
    constructor(S) {
      this.tasks = [], this.sched = () => {
        var m;
        this.count > 0 && this.tasks.length > 0 && (this.count--, (m = this.tasks.shift()) === null || m === void 0 || m())
      }, this.count = S
    }
    acquire() {
      return new Promise((S, m) => {
        this.tasks.push(() => {
          let v = !1;
          S(() => {
            v || (v = !0, this.count++, this.sched())
          })
        }), c(this.sched)
      })
    }
    releaseAll() {
      for (var S; this.tasks.length > 0;)(S = this.tasks.shift()) === null || S === void 0 || S()
    }
  }
  e.Semaphore = a;

  function s(y) {
    const S = document.createTextNode("");
    let m, v, x = 0,
      M = 0;
    return new y(function() {
        let p;
        if (m) v && (m = v.slice(M).concat(m));
        else {
          if (!v) return;
          m = v
        }
        if (v = m, m = null, M = 0, typeof v == "function") {
          p = v, v = null, p();
          return
        }
        for (S.data = x = ++x % 2; M < v.length;) p = v[M], M++, M === v.length && (v = null), p()
      }).observe(S, {
        characterData: !0
      }),
      function(p) {
        if (m) {
          typeof m == "function" ? m = [m, p] : m.push(p);
          return
        }
        m = p, S.data = x = ++x % 2
      }
  }
  const c = function() {
    if (typeof queueMicrotask == "function") return queueMicrotask;
    if (typeof document == "object" && document) {
      if (typeof MutationObserver == "function") return s(MutationObserver);
      if (typeof window.WebKitMutationObserver == "function") return s(window.WebKitMutationObserver)
    }
    if (typeof setImmediate == "function") return setImmediate;
    if (typeof setTimeout == "function" || typeof setTimeout == "object") return function(y) {
      setTimeout(y, 0)
    };
    throw new Error("No `nextTick` implementation found")
  }();
  e.LT_COLLATOR = new Intl.Collator(void 0, {
    numeric: !0,
    sensitivity: "base"
  });

  function f(y, S, m) {
    if (m.batchType === "old") return y.push(...S), y;
    if (y.length === 0) return y.push(...S), y;
    let v = 0;
    for (; v < y.length && e.LT_COLLATOR.compare(y[v].id.lt, m.maxLt) >= 0;) ++v;
    return y.splice(v, 0, ...S), y
  }
  e.mergeTransactions = f;
  const u = 4294967295;
  let _ = Math.floor(Math.random() * u);

  function B() {
    return _ = (_ + 1) % u, _
  }
  e.getUniqueId = B
})(Zn);
Object.defineProperty(Ye, "__esModule", {
  value: !0
});
Ye.parsePartialTokensObject = Ye.parseTokensObject = Ye.serializeTokensObject = Ye.parseAccountInteraction = Ye.parsePermissions = Ye.parseMessage = Ye.serializeMessage = Ye.parseTransaction = Ye.serializeTransaction = void 0;
const Ur = Zn;

function eu(e) {
  return {
    id: {
      hash: e.id.hash,
      lt: e.id.lt
    },
    prevTransactionId: e.prevTransactionId != null ? {
      hash: e.prevTransactionId.hash,
      lt: e.prevTransactionId.lt
    } : void 0,
    createdAt: e.createdAt,
    aborted: e.aborted,
    exitCode: e.exitCode,
    resultCode: e.resultCode,
    origStatus: e.origStatus,
    endStatus: e.endStatus,
    totalFees: e.totalFees,
    inMessage: sa(e.inMessage),
    outMessages: e.outMessages.map(sa)
  }
}
Ye.serializeTransaction = eu;

function tu(e) {
  return {
    ...e,
    inMessage: la(e.inMessage),
    outMessages: e.outMessages.map(la)
  }
}
Ye.parseTransaction = tu;

function sa(e) {
  return {
    hash: e.hash,
    src: e.src ? e.src.toString() : void 0,
    dst: e.dst ? e.dst.toString() : void 0,
    value: e.value,
    bounce: e.bounce,
    bounced: e.bounced,
    body: e.body,
    bodyHash: e.bodyHash
  }
}
Ye.serializeMessage = sa;

function la(e) {
  return {
    ...e,
    src: e.src ? new Ur.Address(e.src) : void 0,
    dst: e.dst ? new Ur.Address(e.dst) : void 0
  }
}
Ye.parseMessage = la;

function nu(e) {
  return {
    ...e,
    accountInteraction: e.accountInteraction ? ls(e.accountInteraction) : void 0
  }
}
Ye.parsePermissions = nu;

function ls(e) {
  return {
    ...e,
    address: new Ur.Address(e.address)
  }
}
Ye.parseAccountInteraction = ls;

function ru(e) {
  return ca(e)
}
Ye.serializeTokensObject = ru;

function ca(e) {
  if (typeof e == "object" && (0, Ur.isAddressObject)(e)) return e.toString();
  if (Array.isArray(e)) {
    const t = [];
    for (const n of e) t.push(ca(n));
    return t
  } else if (e != null && typeof e == "object") {
    const t = {};
    for (const [n, r] of Object.entries(e)) t[n] = ca(r);
    return t
  } else return e
}

function iu(e, t) {
  const n = {};
  for (const r of e) n[r.name] = bn(r, t[r.name]);
  return n
}
Ye.parseTokensObject = iu;

function au(e, t) {
  const n = {};
  for (const r of e) Object.prototype.hasOwnProperty.call(t, r.name) && (n[r.name] = bn(r, !t[r.name]));
  return n
}
Ye.parsePartialTokensObject = au;

function bn(e, t) {
  if (e.type.startsWith("map")) {
    const n = e.type.indexOf(","),
      r = e.type.slice(4, n),
      i = e.type.slice(n + 1, -1),
      o = [];
    for (const [a, s] of t) o.push([bn({
      name: "",
      type: r
    }, a), bn({
      name: "",
      type: i,
      components: e.components
    }, s)]);
    return o
  } else {
    const n = e.type.endsWith("[]"),
      r = !n && e.type.startsWith("optional"),
      i = n ? e.type.slice(0, -2) : r ? e.type.slice(9, -1) : e.type;
    if (n) {
      const o = {
          name: e.name,
          type: i,
          components: e.components
        },
        a = [];
      for (const s of t) a.push(bn(o, s));
      return a
    } else if (r) {
      if (t == null) return null;
      {
        const o = {
          name: e.name,
          type: i,
          components: e.components
        };
        return bn(o, t)
      }
    } else if (i === "tuple") {
      const o = {};
      if (e.components != null)
        for (const a of e.components) o[a.name] = bn(a, t[a.name]);
      return o
    } else return i === "address" ? new Ur.Address(t) : t
  }
}
var Rr = {};
Object.defineProperty(Rr, "__esModule", {
  value: !0
});
Rr.Subscriber = void 0;
const Er = Zn,
  ou = Ye;
class su {
  constructor(t) {
    this.provider = t, this.subscriptions = new Map, this.scanners = new Map, this.unsubscribe = async () => this._unsubscribe()
  }
  transactions(t) {
    return this._addSubscription("transactionsFound", t, !1)
  }
  trace(t) {
    const n = (0, Er.getUniqueId)();
    return new ut((r, i) => {
      const o = new cu(this.provider, {
        origin: t,
        onData: r,
        onEnd: a => {
          this.scanners.delete(n), i(a)
        }
      });
      return this.scanners.set(n, o), o.start(), Promise.resolve()
    }, async () => {
      const r = this.scanners.get(n);
      r != null && (this.scanners.delete(n), await r.stop())
    }, Xi, !0)
  }
  oldTransactions(t, n) {
    const r = (0, Er.getUniqueId)();
    return new ut((i, o) => {
      const a = new lu(this.provider, {
        address: t,
        onData: i,
        onEnd: s => {
          this.scanners.delete(r), o(s)
        },
        ...n
      });
      return this.scanners.set(r, a), a.start(), Promise.resolve()
    }, async () => {
      const i = this.scanners.get(r);
      i != null && (this.scanners.delete(r), await i.stop())
    }, Xi, !0)
  }
  states(t) {
    return this._addSubscription("contractStateChanged", t, !1)
  }
  async _unsubscribe() {
    const t = [];
    for (const n of this.subscriptions.values())
      for (const [r, i] of Object.entries(n)) delete n[r], i != null && t.push(i.subscription.then(o => o.unsubscribe()).catch(() => {}));
    this.subscriptions.clear();
    for (const n of this.scanners.values()) t.push(n.stop());
    this.scanners.clear(), await Promise.all(t)
  }
  _addSubscription(t, n, r) {
    const i = n.toString(),
      o = s => {
        const c = this.subscriptions.get(i);
        if (c == null) return;
        const f = c[t];
        if (f != null) {
          const u = f.handlers.get(s);
          if (u != null) {
            f.handlers.delete(s);
            const {
              queue: _,
              onEnd: B,
              state: y
            } = u;
            y.finished || (y.finished = !0, _.clear(), _.enqueue(async () => B(y.eof)))
          }
          if (f.handlers.size === 0) {
            const _ = f.subscription;
            delete c[t], _.then(B => B.unsubscribe()).catch(console.debug)
          }
        }
        c.contractStateChanged == null && c.transactionsFound == null && this.subscriptions.delete(i)
      },
      a = (0, Er.getUniqueId)();
    return new ut((s, c) => {
      const f = this.subscriptions.get(i);
      let u = f == null ? void 0 : f[t];
      const _ = {
          eof: !1,
          finished: !1
        },
        B = {
          onData: s,
          onEnd: c,
          queue: new Ca,
          state: _
        };
      if (u != null) return u.handlers.set(a, B), Promise.resolve();
      const y = new Map;
      y.set(a, B);
      const S = this.provider.subscribe(t, {
        address: n
      }).then(m => (m.on("data", v => {
        for (const {
            onData: x,
            queue: M,
            state: p
          }
          of y.values()) p.eof || p.finished || M.enqueue(async () => {
          await x(v) || (p.eof = !0, o(a))
        })
      }), m.on("unsubscribed", () => {
        for (const v of y.keys()) o(v)
      }), m)).catch(m => {
        console.error(m);
        for (const v of y.keys()) o(v);
        throw m
      });
      return u = {
        subscription: S,
        handlers: y
      }, f == null ? this.subscriptions.set(i, {
        [t]: u
      }) : f[t] = u, S.then(() => {})
    }, () => o(a), Xi, r)
  }
}
Rr.Subscriber = su;
async function Xi(e, t) {
  return t(e)
}
class ut {
  constructor(t, n, r, i) {
    this.makeProducer = t, this.stopProducer = n, this.extractor = r, this.isFinite = i, this.fold = this.onlyFinite((o, a, s) => {
      let c = o;
      return new Promise((f, u) => {
        const _ = this.makeProducer(B => this.extractor(B, async y => (c = await a(c, y), !0)), B => {
          B ? f(c) : u(new Error("Subscription closed"))
        });
        s != null && (s.subscribed = _)
      })
    }), this.finished = this.onlyFinite(o => new Promise((a, s) => {
      const c = this.makeProducer(f => this.extractor(f, u => !0), f => {
        f ? a(void 0) : s(new Error("Subscription closed"))
      });
      o != null && (o.subscribed = c)
    }))
  }
  async delayed(t) {
    const {
      subscribed: n,
      result: r
    } = t({
      first: () => {
        const i = {},
          o = this.first(i);
        return {
          subscribed: i.subscribed,
          result: o
        }
      },
      on: i => {
        const o = {};
        return this.on(i, o), {
          subscribed: o.subscribed,
          result: void 0
        }
      },
      fold: this.fold != null ? (i, o) => {
        const a = {},
          s = this.fold(i, o, a);
        return {
          subscribed: a.subscribed,
          result: s
        }
      } : void 0,
      finished: this.finished != null ? () => {
        const i = {},
          o = this.finished(i);
        return {
          subscribed: i.subscribed,
          result: o
        }
      } : void 0
    });
    return await n, () => r
  }
  first(t) {
    const n = {
      found: !1
    };
    return new Promise((r, i) => {
      const o = this.makeProducer(a => this.extractor(a, s => (Object.assign(n, {
        found: !0,
        result: s
      }), !1)), a => {
        a ? this.isFinite ? r(n.found ? n.result : void 0) : n.found ? r(n.result) : i(new Error("Unexpected end of stream")) : i(new Error("Subscription closed"))
      });
      t != null && (t.subscribed = o)
    })
  }
  on(t, n) {
    const r = this.makeProducer(i => this.extractor(i, async o => (await t(o), !0)), i => {});
    n != null && (n.subscribed = r)
  }
  merge(t) {
    return new ut((n, r) => {
      const i = {
          stopped: !1,
          counter: 0
        },
        o = a => {
          i.stopped || (++i.counter == 2 || !a) && (i.stopped = !0, r(a))
        };
      return Promise.all([this.makeProducer(n, o), t.makeProducer(n, o)]).then(() => {})
    }, () => {
      this.stopProducer(), t.stopProducer()
    }, this.extractor, this.isFinite && t.isFinite)
  }
  enumerate() {
    const t = {
      index: 0
    };
    return new ut(this.makeProducer, this.stopProducer, (n, r) => this.extractor(n, async i => r({
      index: t.index++,
      item: i
    })), this.isFinite)
  }
  tap(t) {
    return new ut(this.makeProducer, this.stopProducer, (n, r) => this.extractor(n, async i => (await t(i), r(i))), this.isFinite)
  }
  filter(t) {
    return new ut(this.makeProducer, this.stopProducer, (n, r) => this.extractor(n, async i => await t(i) ? r(i) : !0), this.isFinite)
  }
  filterMap(t) {
    return new ut(this.makeProducer, this.stopProducer, (n, r) => this.extractor(n, async i => {
      const o = await t(i);
      return o !== void 0 ? r(o) : !0
    }), this.isFinite)
  }
  map(t) {
    return new ut(this.makeProducer, this.stopProducer, (n, r) => this.extractor(n, async i => {
      const o = await t(i);
      return r(o)
    }), this.isFinite)
  }
  flatMap(t) {
    return new ut(this.makeProducer, this.stopProducer, (n, r) => this.extractor(n, async i => {
      const o = await t(i);
      for (const a of o)
        if (!await r(a)) return !1;
      return !0
    }), this.isFinite)
  }
  skip(t) {
    const n = {
      index: 0
    };
    return new ut(this.makeProducer, this.stopProducer, (r, i) => this.extractor(r, o => n.index >= t ? i(o) : (++n.index, !0)), this.isFinite)
  }
  skipWhile(t) {
    const n = {
      shouldSkip: !0
    };
    return new ut(this.makeProducer, this.stopProducer, (r, i) => this.extractor(r, async o => !n.shouldSkip || !await t(o) ? (n.shouldSkip = !1, i(o)) : !0), this.isFinite)
  }
  take(t) {
    const n = {
      index: 0
    };
    return new ut(this.makeProducer, this.stopProducer, (r, i) => this.extractor(r, o => n.index < t ? (++n.index, i(o) && n.index < t) : !1), !0)
  }
  takeWhile(t) {
    return new ut(this.makeProducer, this.stopProducer, (n, r) => this.extractor(n, async i => await t(i) ? r(i) : !1), !0)
  }
  takeWhileMap(t) {
    return new ut(this.makeProducer, this.stopProducer, (n, r) => this.extractor(n, async i => {
      const o = await t(i);
      return o !== void 0 ? r(o) : !1
    }), !0)
  }
  onlyFinite(t) {
    if (this.isFinite) return t
  }
}
class lu {
  constructor(t, n) {
    this.provider = t, this.params = n, this.queue = new Ca, this.isRunning = !1
  }
  start() {
    this.isRunning || this.promise != null || (this.isRunning = !0, this.promise = (async () => {
      const t = this.params,
        n = {
          complete: !1
        };
      for (; this.isRunning && !n.complete;) try {
        const {
          transactions: r,
          continuation: i
        } = await this.provider.getTransactions({
          address: this.params.address,
          continuation: this.continuation
        });
        if (n.complete = !n.complete && r.length == null, !this.isRunning || n.complete) break;
        const o = r.filter(s => (t.fromLt == null || Er.LT_COLLATOR.compare(s.id.lt, t.fromLt) > 0) && (t.fromUtime == null || s.createdAt > t.fromUtime));
        if (o.length == 0) {
          n.complete = !0;
          break
        }
        const a = {
          maxLt: o[0].id.lt,
          minLt: o[o.length - 1].id.lt,
          batchType: "old"
        };
        if (this.queue.enqueue(async () => {
            await this.params.onData({
              address: this.params.address,
              transactions: o,
              info: a
            }) || (n.complete = !0, this.isRunning = !1)
          }), i != null) this.continuation = i;
        else {
          n.complete = !0;
          break
        }
      } catch (r) {
        console.error(r)
      }
      this.queue.enqueue(async () => this.params.onEnd(n.complete)), this.isRunning = !1, this.continuation = void 0
    })())
  }
  async stop() {
    this.isRunning = !1, this.queue.clear(), this.promise != null ? await this.promise : this.params.onEnd(!1)
  }
}
class cu {
  constructor(t, n) {
    this.provider = t, this.params = n, this.queue = new Ca, this.isRunning = !1, this.semaphore = new Er.Semaphore(10)
  }
  start() {
    if (this.isRunning || this.promise != null) return;
    const t = this.provider;
    this.isRunning = !0, this.promise = (async () => {
      const n = {
          complete: !1
        },
        r = o => {
          const a = {
            stopped: !1
          };
          return {
            promise: (async () => {
              let f = 500;
              for (;;) {
                const u = await this.semaphore.acquire();
                if (a.stopped) {
                  u();
                  return
                }
                const _ = await t.rawApi.findTransaction({
                  inMessageHash: o
                }).catch(() => ({
                  transaction: void 0
                })).finally(() => u());
                if (a.stopped) return;
                if (_.transaction != null) {
                  const S = (0, ou.parseTransaction)(_.transaction);
                  return S.account = S.inMessage.dst, S
                }
                let B;
                const y = new Promise((S, m) => {
                  B = () => S(), a.reject = () => m()
                });
                if (a.timeout = setTimeout(B, f), await y, a.stopped) return;
                a.reject = void 0, f = Math.min(f * 2, 3e3)
              }
            })(),
            reject: () => {
              var f;
              a.stopped = !0, (f = a.reject) === null || f === void 0 || f.call(a), a.timeout != null && clearTimeout(a.timeout)
            }
          }
        },
        i = [this.params.origin];
      try {
        e: for (; this.isRunning;) {
          const o = i.shift();
          if (o == null) {
            n.complete = !0;
            break
          }
          const a = o.outMessages.filter(s => s.dst != null).map(s => {
            const c = s.hash;
            return r(c)
          });
          this.pendingTransactions = a;
          for (const {
              promise: s
            }
            of a) {
            const c = await s;
            if (!this.isRunning || n.complete || c == null) break e;
            this.queue.enqueue(async () => {
              await this.params.onData(c) || (n.complete = !0, this.isRunning = !1, this.rejectPendingTransactions())
            }), i.push(c)
          }
          this.pendingTransactions = void 0
        }
      }
      catch (o) {
        console.error(o)
      } finally {
        this.queue.enqueue(async () => this.params.onEnd(n.complete)), this.isRunning = !1, this.rejectPendingTransactions()
      }
    })()
  }
  async stop() {
    this.isRunning = !1, this.queue.clear(), this.rejectPendingTransactions(), this.promise != null ? await this.promise : this.params.onEnd(!1)
  }
  rejectPendingTransactions() {
    if (this.pendingTransactions != null) {
      for (const t of this.pendingTransactions) t.reject();
      this.pendingTransactions = void 0
    }
    this.semaphore.releaseAll()
  }
}
class Ca {
  constructor() {
    this.queue = [], this.workingOnPromise = !1
  }
  enqueue(t) {
    this.queue.push(t), this._dequeue().catch(() => {})
  }
  clear() {
    this.queue.length = 0
  }
  async _dequeue() {
    if (this.workingOnPromise) return;
    const t = this.queue.shift();
    t && (this.workingOnPromise = !0, t().then(() => {
      this.workingOnPromise = !1, this._dequeue()
    }).catch(() => {
      this.workingOnPromise = !1, this._dequeue()
    }))
  }
}
var wn = {};
Object.defineProperty(wn, "__esModule", {
  value: !0
});
wn.TvmException = wn.Contract = void 0;
const Yn = Zn,
  Je = Ye;
class uu {
  constructor(t, n, r) {
    if (!Array.isArray(n.functions)) throw new Error("Invalid abi. Functions array required");
    if (!Array.isArray(n.events)) throw new Error("Invalid abi. Events array required");
    this._provider = t, this._abi = JSON.stringify(n), this.methodsAbi = n.functions.reduce((i, o) => (o.inputs == null && (o.inputs = []), o.outputs == null && (o.outputs = []), i[o.name] = o, i), {}), this.eventsAbi = n.events.reduce((i, o) => (o.inputs == null && (o.inputs = []), i[o.name] = o, i), {}), this.fieldsAbi = n.fields, this._address = r, this._methods = new Proxy({}, {
      get: (i, o) => {
        const a = this.methodsAbi[o];
        return (s = {}) => new du(this._provider, a, this._abi, this._address, o, s)
      }
    }), this._fields = new Proxy({}, {
      get: (i, o) => async (a = {}) => {
        await this._provider.ensureInitialized();
        const {
          fields: s,
          state: c
        } = await this._provider.rawApi.getContractFields({
          address: this._address.toString(),
          abi: this._abi,
          cachedState: a == null ? void 0 : a.cachedState,
          allowPartial: (a == null ? void 0 : a.allowPartial) == null ? !1 : a.allowPartial
        });
        if (s == null) throw c == null ? new Error("Account does not exist") : c.isDeployed ? new Error("Invalid account data") : new Error("Account is not deployed");
        const f = (0, Je.parseTokensObject)(this.fieldsAbi, s);
        if (f == null || !Object.prototype.hasOwnProperty.call(f, o)) throw new Error("Unknown field");
        return f[o]
      }
    })
  }
  get methods() {
    return this._methods
  }
  get fields() {
    return this._fields
  }
  get address() {
    return this._address
  }
  get abi() {
    return this._abi
  }
  async getFullState() {
    return await this._provider.ensureInitialized(), await this._provider.rawApi.getFullContractState({
      address: this.address.toString()
    })
  }
  async getFields(t = {}) {
    await this._provider.ensureInitialized();
    const {
      fields: n,
      state: r
    } = await this._provider.rawApi.getContractFields({
      address: this.address.toString(),
      abi: this._abi,
      cachedState: t.cachedState,
      allowPartial: t.allowPartial == null ? !1 : t.allowPartial
    });
    return {
      fields: n != null ? (0, Je.parseTokensObject)(this.fieldsAbi, n) : void 0,
      state: r
    }
  }
  transactions(t) {
    return t.transactions(this._address).flatMap(({
      transactions: n
    }) => n)
  }
  events(t) {
    return t.transactions(this._address).flatMap(({
      transactions: n
    }) => n).flatMap(n => this.decodeTransactionEvents({
      transaction: n
    }).then(r => (r.forEach(i => i.transaction = n), r)))
  }
  async waitForEvent(t = {}) {
    const {
      range: n,
      filter: r
    } = t, i = typeof r == "string" ? ({
      event: c
    }) => c === r : r;
    let o = t.subscriber;
    const a = o == null;
    o == null && (o = new this._provider.Subscriber);
    const s = await ((n == null ? void 0 : n.fromLt) != null || (n == null ? void 0 : n.fromUtime) != null ? o.oldTransactions(this._address, n).merge(o.transactions(this._address)) : o.transactions(this.address)).flatMap(c => c.transactions).takeWhile(c => n == null || (n.fromLt == null || Yn.LT_COLLATOR.compare(c.id.lt, n.fromLt) > 0) && (n.fromUtime == null || c.createdAt > n.fromUtime) && (n.toLt == null || Yn.LT_COLLATOR.compare(c.id.lt, n.toLt) < 0) && (n.toUtime == null || c.createdAt < n.toUtime)).flatMap(c => this.decodeTransactionEvents({
      transaction: c
    }).then(f => (f.forEach(u => u.transaction = c), f))).filterMap(async c => {
      if (i == null || await i(c)) return c
    }).first();
    return a && await o.unsubscribe(), s
  }
  async getPastEvents(t) {
    const {
      range: n,
      filter: r,
      limit: i
    } = t, o = typeof r == "string" ? ({
      event: c
    }) => c === r : r, a = [];
    let s = t == null ? void 0 : t.continuation;
    e: for (;;) {
      const {
        transactions: c,
        continuation: f
      } = await this._provider.getTransactions({
        address: this._address,
        continuation: s
      });
      if (c.length === null) break;
      const u = c.filter(_ => ((n == null ? void 0 : n.fromLt) == null || Yn.LT_COLLATOR.compare(_.id.lt, n.fromLt) > 0) && ((n == null ? void 0 : n.fromUtime) == null || _.createdAt > n.fromUtime) && ((n == null ? void 0 : n.toLt) == null || Yn.LT_COLLATOR.compare(_.id.lt, n.toLt) < 0) && ((n == null ? void 0 : n.toUtime) == null || _.createdAt < n.toUtime));
      if (u.length > 0) {
        const _ = await Promise.all(u.map(async B => ({
          tx: B,
          events: await this.decodeTransactionEvents({
            transaction: B
          }).then(y => (y.forEach(S => S.transaction = B), y))
        })));
        for (let {
            tx: B,
            events: y
          }
          of _) {
          o != null && (y = await Promise.all(y.map(async S => await o(S) ? S : void 0)).then(S => S.filter(m => m != null))), s = B.id;
          for (const S of y) {
            if (i != null && a.length >= i) break e;
            a.push(S)
          }
          if (i != null && a.length >= i) break e
        }
      }
      if (s = f, s == null) break
    }
    return {
      events: a,
      continuation: s
    }
  }
  async decodeTransaction(t) {
    await this._provider.ensureInitialized();
    try {
      const n = await this._provider.rawApi.decodeTransaction({
        transaction: (0, Je.serializeTransaction)(t.transaction),
        abi: this._abi,
        method: t.methods
      });
      if (n == null) return;
      const {
        method: r,
        input: i,
        output: o
      } = n, a = this.methodsAbi[r];
      return {
        method: r,
        input: a.inputs != null ? (0, Je.parseTokensObject)(a.inputs, i) : {},
        output: a.outputs != null ? (0, Je.parseTokensObject)(a.outputs, o) : {}
      }
    } catch {
      return
    }
  }
  async decodeTransactionEvents(t) {
    await this._provider.ensureInitialized();
    try {
      const {
        events: n
      } = await this._provider.rawApi.decodeTransactionEvents({
        transaction: (0, Je.serializeTransaction)(t.transaction),
        abi: this._abi
      }), r = [];
      for (const {
          event: i,
          data: o
        }
        of n) {
        const a = this.eventsAbi[i];
        r.push({
          event: i,
          data: a.inputs != null ? (0, Je.parseTokensObject)(a.inputs, o) : {}
        })
      }
      return r
    } catch {
      return []
    }
  }
  async decodeInputMessage(t) {
    await this._provider.ensureInitialized();
    try {
      const n = await this._provider.rawApi.decodeInput({
        abi: this._abi,
        body: t.body,
        internal: t.internal,
        method: t.methods
      });
      if (n == null) return;
      const {
        method: r,
        input: i
      } = n, o = this.methodsAbi[r];
      return {
        method: r,
        input: o.inputs != null ? (0, Je.parseTokensObject)(o.inputs, i) : {}
      }
    } catch {
      return
    }
  }
  async decodeOutputMessage(t) {
    await this._provider.ensureInitialized();
    try {
      const n = await this._provider.rawApi.decodeOutput({
        abi: this._abi,
        body: t.body,
        method: t.methods
      });
      if (n == null) return;
      const {
        method: r,
        output: i
      } = n, o = this.methodsAbi[r];
      return {
        method: r,
        output: o.outputs != null ? (0, Je.parseTokensObject)(o.outputs, i) : {}
      }
    } catch {
      return
    }
  }
  async decodeEvent(t) {
    await this._provider.ensureInitialized();
    try {
      const n = await this._provider.rawApi.decodeEvent({
        abi: this.abi,
        body: t.body,
        event: t.events
      });
      if (n == null) return;
      const {
        event: r,
        data: i
      } = n, o = this.eventsAbi[r];
      return {
        event: r,
        data: o.inputs != null ? (0, Je.parseTokensObject)(o.inputs, i) : {}
      }
    } catch {
      return
    }
  }
}
wn.Contract = uu;
class cs extends Error {
  constructor(t) {
    super(`TvmException: ${t}`), this.code = t
  }
}
wn.TvmException = cs;
class du {
  constructor(t, n, r, i, o, a) {
    this.provider = t, this.functionAbi = n, this.abi = r, this.address = i, this.method = o, this.params = (0, Je.serializeTokensObject)(a)
  }
  async send(t) {
    await this.provider.ensureInitialized();
    const {
      transaction: n
    } = await this.provider.rawApi.sendMessage({
      sender: t.from.toString(),
      recipient: this.address.toString(),
      amount: t.amount,
      bounce: t.bounce == null ? !0 : t.bounce,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      stateInit: t.stateInit
    });
    return (0, Je.parseTransaction)(n)
  }
  async sendDelayed(t) {
    await this.provider.ensureInitialized();
    const n = new Yn.DelayedTransactions,
      r = await this.provider.subscribe("messageStatusUpdated");
    r.on("data", a => {
      a.address.equals(t.from) && n.fillTransaction(a.hash, a.transaction)
    });
    const {
      message: i
    } = await this.provider.rawApi.sendMessageDelayed({
      sender: t.from.toString(),
      recipient: this.address.toString(),
      amount: t.amount,
      bounce: t.bounce == null ? !0 : t.bounce,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      stateInit: t.stateInit
    }).catch(a => {
      throw r.unsubscribe().catch(console.error), a
    }), o = n.waitTransaction(this.address, i.hash).finally(() => r.unsubscribe().catch(console.error));
    return {
      messageHash: i.hash,
      expireAt: i.expireAt,
      transaction: o
    }
  }
  async sendWithResult(t) {
    await this.provider.ensureInitialized();
    let n = t.subscriber;
    const r = n == null;
    n == null && (n = new this.provider.Subscriber);
    try {
      let i, o;
      const a = new Promise(y => {
          o = S => y(S)
        }),
        s = [];
      n.transactions(this.address).flatMap(y => y.transactions).filter(y => {
        var S;
        return ((S = y.inMessage.src) === null || S === void 0 ? void 0 : S.equals(t.from)) || !1
      }).on(y => {
        i == null ? s.push(y) : i.possibleMessages.findIndex(S => S.hash == y.inMessage.hash) >= 0 && (o == null || o(y))
      });
      const c = await this.send(t),
        f = c.outMessages.filter(y => {
          var S;
          return ((S = y.dst) === null || S === void 0 ? void 0 : S.equals(this.address)) || !1
        });
      i = {
        transaction: c,
        possibleMessages: f
      };
      const u = s.find(y => f.findIndex(S => S.hash == y.inMessage.hash) >= 0);
      u != null && (o == null || o(u));
      const _ = await a;
      let B;
      try {
        const y = await this.provider.rawApi.decodeTransaction({
          transaction: (0, Je.serializeTransaction)(_),
          abi: this.abi,
          method: this.method
        });
        y != null && (B = this.functionAbi.outputs != null ? (0, Je.parseTokensObject)(this.functionAbi.outputs, y.output) : {})
      } catch (y) {
        console.error(y)
      }
      return {
        parentTransaction: i.transaction,
        childTransaction: _,
        output: B
      }
    } finally {
      r && await n.unsubscribe()
    }
  }
  async estimateFees(t) {
    await this.provider.ensureInitialized();
    const {
      fees: n
    } = await this.provider.rawApi.estimateFees({
      sender: t.from.toString(),
      recipient: this.address.toString(),
      amount: t.amount,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      stateInit: t.stateInit
    });
    return n
  }
  async sendExternal(t) {
    await this.provider.ensureInitialized();
    const n = t.withoutSignature === !0 ? this.provider.rawApi.sendUnsignedExternalMessage : this.provider.rawApi.sendExternalMessage,
      {
        transaction: r,
        output: i
      } = await n({
        publicKey: t.publicKey,
        recipient: this.address.toString(),
        stateInit: t.stateInit,
        payload: {
          abi: this.abi,
          method: this.method,
          params: this.params
        },
        local: t.local,
        executorParams: t.executorParams ? {
          disableSignatureCheck: t.executorParams.disableSignatureCheck,
          overrideBalance: t.executorParams.overrideBalance
        } : void 0
      });
    return {
      transaction: (0, Je.parseTransaction)(r),
      output: i != null ? (0, Je.parseTokensObject)(this.functionAbi.outputs, i) : void 0
    }
  }
  async sendExternalDelayed(t) {
    await this.provider.ensureInitialized();
    const n = new Yn.DelayedTransactions,
      r = await this.provider.subscribe("messageStatusUpdated");
    r.on("data", a => {
      a.address.equals(this.address) && n.fillTransaction(a.hash, a.transaction)
    });
    const {
      message: i
    } = await this.provider.rawApi.sendExternalMessageDelayed({
      publicKey: t.publicKey,
      recipient: this.address.toString(),
      stateInit: t.stateInit,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      }
    }).catch(a => {
      throw r.unsubscribe().catch(console.error), a
    }), o = n.waitTransaction(this.address, i.hash).finally(() => r.unsubscribe().catch(console.error));
    return {
      messageHash: i.hash,
      expireAt: i.expireAt,
      transaction: o
    }
  }
  async call(t = {}) {
    await this.provider.ensureInitialized();
    const {
      output: n,
      code: r
    } = await this.provider.rawApi.runLocal({
      address: this.address.toString(),
      cachedState: t.cachedState,
      responsible: t.responsible,
      functionCall: {
        abi: this.abi,
        method: this.method,
        params: this.params
      }
    });
    if (n == null || r != 0) throw new cs(r);
    return (0, Je.parseTokensObject)(this.functionAbi.outputs, n)
  }
  async executeExternal(t) {
    await this.provider.ensureInitialized();
    const {
      transaction: n,
      newState: r,
      output: i
    } = await this.provider.rawApi.executeLocal({
      address: this.address.toString(),
      cachedState: t.cachedState,
      stateInit: t.stateInit,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      messageHeader: {
        type: "external",
        publicKey: t.publicKey,
        withoutSignature: t.withoutSignature
      },
      executorParams: t.executorParams != null ? {
        disableSignatureCheck: t.executorParams.disableSignatureCheck,
        overrideBalance: t.executorParams.overrideBalance
      } : void 0
    });
    return {
      transaction: (0, Je.parseTransaction)(n),
      newState: r,
      output: i !== void 0 ? (0, Je.parseTokensObject)(this.functionAbi.outputs, i) : void 0
    }
  }
  async executeInternal(t) {
    await this.provider.ensureInitialized();
    const {
      transaction: n,
      newState: r,
      output: i
    } = await this.provider.rawApi.executeLocal({
      address: this.address.toString(),
      cachedState: t.cachedState,
      stateInit: t.stateInit,
      payload: {
        abi: this.abi,
        method: this.method,
        params: this.params
      },
      messageHeader: {
        type: "internal",
        sender: t.sender.toString(),
        amount: t.amount,
        bounce: t.bounce != null ? t.bounce : !1,
        bounced: t.bounced
      },
      executorParams: t.executorParams != null ? {
        disableSignatureCheck: t.executorParams.disableSignatureCheck,
        overrideBalance: t.executorParams.overrideBalance
      } : void 0
    });
    return {
      transaction: (0, Je.parseTransaction)(n),
      newState: r,
      output: i !== void 0 ? (0, Je.parseTokensObject)(this.functionAbi.outputs, i) : void 0
    }
  }
  async encodeInternal() {
    await this.provider.ensureInitialized();
    const {
      boc: t
    } = await this.provider.rawApi.encodeInternalInput({
      abi: this.abi,
      method: this.method,
      params: this.params
    });
    return t
  }
}
var us = {};
Object.defineProperty(us, "__esModule", {
  value: !0
});
(function(e) {
  var t = pe && pe.__createBinding || (Object.create ? function(p, h, P, k) {
      k === void 0 && (k = P);
      var T = Object.getOwnPropertyDescriptor(h, P);
      (!T || ("get" in T ? !h.__esModule : T.writable || T.configurable)) && (T = {
        enumerable: !0,
        get: function() {
          return h[P]
        }
      }), Object.defineProperty(p, k, T)
    } : function(p, h, P, k) {
      k === void 0 && (k = P), p[k] = h[P]
    }),
    n = pe && pe.__setModuleDefault || (Object.create ? function(p, h) {
      Object.defineProperty(p, "default", {
        enumerable: !0,
        value: h
      })
    } : function(p, h) {
      p.default = h
    }),
    r = pe && pe.__importStar || function(p) {
      if (p && p.__esModule) return p;
      var h = {};
      if (p != null)
        for (var P in p) P !== "default" && Object.prototype.hasOwnProperty.call(p, P) && t(h, p, P);
      return n(h, p), h
    },
    i = pe && pe.__exportStar || function(p, h) {
      for (var P in p) P !== "default" && !Object.prototype.hasOwnProperty.call(h, P) && t(h, p, P)
    };
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ProviderNotInitializedException = e.ProviderNotFoundException = e.ProviderRpcClient = e.hasEverscaleProvider = e.LT_COLLATOR = e.isAddressObject = e.mergeTransactions = e.MessageExpiredException = e.AddressLiteral = e.Address = e.Subscriber = void 0;
  const o = Ye,
    a = Zn,
    s = r(Rr),
    c = r(wn);
  i(us, e), i(Ye, e), i(wn, e);
  var f = Rr;
  Object.defineProperty(e, "Subscriber", {
    enumerable: !0,
    get: function() {
      return f.Subscriber
    }
  });
  var u = Zn;
  Object.defineProperty(e, "Address", {
    enumerable: !0,
    get: function() {
      return u.Address
    }
  }), Object.defineProperty(e, "AddressLiteral", {
    enumerable: !0,
    get: function() {
      return u.AddressLiteral
    }
  }), Object.defineProperty(e, "MessageExpiredException", {
    enumerable: !0,
    get: function() {
      return u.MessageExpiredException
    }
  }), Object.defineProperty(e, "mergeTransactions", {
    enumerable: !0,
    get: function() {
      return u.mergeTransactions
    }
  }), Object.defineProperty(e, "isAddressObject", {
    enumerable: !0,
    get: function() {
      return u.isAddressObject
    }
  }), Object.defineProperty(e, "LT_COLLATOR", {
    enumerable: !0,
    get: function() {
      return u.LT_COLLATOR
    }
  });
  const _ = typeof window < "u" && typeof window.document < "u";
  let B;
  !_ || document.readyState === "complete" ? B = Promise.resolve() : B = new Promise(p => {
    window.addEventListener("load", () => {
      p()
    })
  });
  const y = () => _ ? window.__ever || window.ton : void 0;
  async function S() {
    return _ ? (await B, window.__hasEverscaleProvider === !0 || window.hasTonProvider === !0) : !1
  }
  e.hasEverscaleProvider = S;
  class m {
    constructor(h = {}) {
      this._subscriptions = {
        connected: new Map,
        disconnected: new Map,
        transactionsFound: new Map,
        contractStateChanged: new Map,
        messageStatusUpdated: new Map,
        networkChanged: new Map,
        permissionsChanged: new Map,
        loggedOut: new Map
      }, this._contractSubscriptions = new Map, this._properties = h;
      const P = this;
      class k extends c.Contract {
        constructor(ne, q) {
          super(P, ne, q)
        }
      }
      this.Contract = k;
      class T extends s.Subscriber {
        constructor() {
          super(P)
        }
      }
      this.Subscriber = T, this._api = new Proxy({}, {
        get: (J, ne) => q => {
          if (this._provider != null) return this._provider.request({
            method: ne,
            params: q
          });
          throw new x
        }
      }), h.forceUseFallback === !0 ? this._initializationPromise = h.fallback != null ? h.fallback().then(J => {
        this._provider = J
      }) : Promise.resolve() : (this._provider = y(), this._provider != null ? this._initializationPromise = Promise.resolve() : this._initializationPromise = S().then(J => new Promise(ne => {
        if (!J) return ne();
        if (this._provider = y(), this._provider != null) ne();
        else {
          const q = window.__hasEverscaleProvider === !0 ? "ever#initialized" : "ton#initialized";
          window.addEventListener(q, we => {
            this._provider = y(), ne()
          })
        }
      })).then(async () => {
        this._provider == null && h.fallback != null && (this._provider = await h.fallback())
      })), this._initializationPromise.then(() => {
        this._provider != null && this._registerEventHandlers(this._provider)
      })
    }
    async hasProvider() {
      return this._properties.fallback != null ? !0 : S()
    }
    async ensureInitialized() {
      if (await this._initializationPromise, this._provider == null) throw new v
    }
    get isInitialized() {
      return this._provider != null
    }
    get raw() {
      if (this._provider != null) return this._provider;
      throw new x
    }
    get rawApi() {
      return this._api
    }
    createContract(h, P) {
      return new this.Contract(h, P)
    }
    createSubscriber() {
      return new this.Subscriber
    }
    async requestPermissions(h) {
      await this.ensureInitialized();
      const P = await this._api.requestPermissions({
        permissions: h.permissions
      });
      return (0, o.parsePermissions)(P)
    }
    async changeAccount() {
      await this.ensureInitialized(), await this._api.changeAccount()
    }
    async disconnect() {
      await this.ensureInitialized(), await this._api.disconnect()
    }
    async subscribe(h, P) {
      class k {
        constructor(q, we) {
          this._subscribe = q, this._unsubscribe = we, this._listeners = {
            data: [],
            subscribed: [],
            unsubscribed: []
          }, this._subscribed = !1, this.subscribe = async () => {
            if (!this._subscribed) {
              this._subscribed = !0, await this._subscribe(this);
              for (const ke of this._listeners.subscribed) ke()
            }
          }, this.unsubscribe = async () => {
            if (this._subscribed) {
              this._subscribed = !1, await this._unsubscribe();
              for (const ke of this._listeners.unsubscribed) ke()
            }
          }
        }
        on(q, we) {
          return this._listeners[q].push(we), this
        }
        notify(q) {
          for (const we of this._listeners.data) we(q)
        }
      }
      const T = this._subscriptions[h],
        J = (0, a.getUniqueId)();
      switch (h) {
        case "connected":
        case "disconnected":
        case "messageStatusUpdated":
        case "networkChanged":
        case "permissionsChanged":
        case "loggedOut": {
          const ne = new k(async q => {
            T.has(J) || T.set(J, we => {
              q.notify(we)
            })
          }, async () => {
            T.delete(J)
          });
          return await ne.subscribe(), ne
        }
        case "transactionsFound":
        case "contractStateChanged": {
          if (P == null) throw new Error("Address must be specified for the subscription");
          await this.ensureInitialized();
          const ne = P.address.toString(),
            q = new k(async we => {
              if (T.has(J)) return;
              T.set(J, ve => {
                ve.address.toString() === ne && we.notify(ve)
              });
              let ke = this._contractSubscriptions.get(ne);
              ke == null && (ke = new Map, this._contractSubscriptions.set(ne, ke));
              const V = {
                state: h === "contractStateChanged",
                transactions: h === "transactionsFound"
              };
              ke.set(J, V);
              const {
                total: z,
                withoutExcluded: ie
              } = M(ke.values(), V);
              try {
                (z.transactions !== ie.transactions || z.state !== ie.state) && await this.rawApi.subscribe({
                  address: ne,
                  subscriptions: z
                })
              } catch (ve) {
                throw T.delete(J), ke.delete(J), ve
              }
            }, async () => {
              T.delete(J);
              const we = this._contractSubscriptions.get(ne);
              if (we == null) return;
              const ke = we.get(J),
                {
                  total: V,
                  withoutExcluded: z
                } = M(we.values(), ke);
              we.delete(J), !z.transactions && !z.state ? await this.rawApi.unsubscribe({
                address: ne
              }) : (V.transactions !== z.transactions || V.state !== z.state) && await this.rawApi.subscribe({
                address: ne,
                subscriptions: z
              })
            });
          return await q.subscribe(), q
        }
        default:
          throw new Error(`Unknown event ${h}`)
      }
    }
    async getProviderState() {
      await this.ensureInitialized();
      const h = await this._api.getProviderState();
      return {
        ...h,
        permissions: (0, o.parsePermissions)(h.permissions)
      }
    }
    async getBalance(h) {
      const {
        state: P
      } = await this.getFullContractState({
        address: h
      });
      return P == null ? "0" : P == null ? void 0 : P.balance
    }
    async getFullContractState(h) {
      return await this.ensureInitialized(), await this._api.getFullContractState({
        address: h.address.toString()
      })
    }
    async computeStorageFee(h) {
      return await this.ensureInitialized(), await this._api.computeStorageFee({
        state: {
          boc: h.state.boc,
          balance: h.state.balance,
          genTimings: {
            ...h.state.genTimings
          },
          lastTransactionId: h.state.lastTransactionId != null ? {
            ...h.state.lastTransactionId
          } : void 0,
          isDeployed: h.state.isDeployed,
          codeHash: h.state.codeHash
        },
        masterchain: h.masterchain,
        timestamp: h.timestamp
      })
    }
    async getAccountsByCodeHash(h) {
      await this.ensureInitialized();
      const {
        accounts: P,
        continuation: k
      } = await this._api.getAccountsByCodeHash({
        ...h
      });
      return {
        accounts: P.map(T => new a.Address(T)),
        continuation: k
      }
    }
    async getTransactions(h) {
      await this.ensureInitialized();
      const {
        transactions: P,
        continuation: k,
        info: T
      } = await this._api.getTransactions({
        ...h,
        address: h.address.toString()
      });
      return {
        transactions: P.map(o.parseTransaction),
        continuation: k,
        info: T
      }
    }
    async getTransaction(h) {
      await this.ensureInitialized();
      const {
        transaction: P
      } = await this._api.getTransaction({
        ...h
      });
      return {
        transaction: P ? (0, o.parseTransaction)(P) : void 0
      }
    }
    async getExpectedAddress(h, P) {
      const {
        address: k
      } = await this.getStateInit(h, P);
      return k
    }
    async getStateInit(h, P) {
      await this.ensureInitialized();
      const {
        address: k,
        stateInit: T,
        hash: J
      } = await this._api.getExpectedAddress({
        abi: JSON.stringify(h),
        ...P,
        initParams: (0, o.serializeTokensObject)(P.initParams)
      });
      return {
        address: new a.Address(k),
        stateInit: T,
        hash: J
      }
    }
    async unpackInitData(h, P) {
      await this.ensureInitialized();
      const {
        publicKey: k,
        initParams: T
      } = await this._api.unpackInitData({
        abi: JSON.stringify(h),
        data: P
      });
      return {
        publicKey: k,
        initParams: (0, o.parsePartialTokensObject)(h.data, T)
      }
    }
    async getBocHash(h) {
      return await this.ensureInitialized(), await this._api.getBocHash({
        boc: h
      }).then(({
        hash: P
      }) => P)
    }
    async packIntoCell(h) {
      return await this.ensureInitialized(), await this._api.packIntoCell({
        abiVersion: h.abiVersion,
        structure: h.structure,
        data: (0, o.serializeTokensObject)(h.data)
      })
    }
    async unpackFromCell(h) {
      await this.ensureInitialized();
      const {
        data: P
      } = await this._api.unpackFromCell({
        ...h,
        structure: h.structure
      });
      return {
        data: (0, o.parseTokensObject)(h.structure, P)
      }
    }
    async extractPublicKey(h) {
      await this.ensureInitialized();
      const {
        publicKey: P
      } = await this._api.extractPublicKey({
        boc: h
      });
      return P
    }
    async codeToTvc(h) {
      await this.ensureInitialized();
      const {
        tvc: P
      } = await this._api.codeToTvc({
        code: h
      });
      return P
    }
    async mergeTvc(h) {
      return await this.ensureInitialized(), await this._api.mergeTvc(h)
    }
    async splitTvc(h) {
      return await this.ensureInitialized(), await this._api.splitTvc({
        tvc: h
      })
    }
    async setCodeSalt(h) {
      let P;
      if (typeof h.salt == "string") await this.ensureInitialized(), P = h.salt;
      else {
        const {
          boc: k
        } = await this.packIntoCell(h.salt);
        P = k
      }
      return await this._api.setCodeSalt({
        code: h.code,
        salt: P
      })
    }
    async getCodeSalt(h) {
      await this.ensureInitialized();
      const {
        salt: P
      } = await this.rawApi.getCodeSalt({
        code: h.code
      });
      return P
    }
    async addAsset(h) {
      await this.ensureInitialized();
      let P;
      switch (h.type) {
        case "tip3_token": {
          P = {
            rootContract: h.params.rootContract.toString()
          };
          break
        }
        default:
          throw new Error("Unknown asset type")
      }
      return await this._api.addAsset({
        account: h.account.toString(),
        type: h.type,
        params: P
      })
    }
    async verifySignature(h) {
      return await this.ensureInitialized(), await this._api.verifySignature(h)
    }
    async signData(h) {
      return await this.ensureInitialized(), await this._api.signData(h)
    }
    async signDataRaw(h) {
      return await this.ensureInitialized(), await this._api.signDataRaw(h)
    }
    async encryptData(h) {
      await this.ensureInitialized();
      const {
        encryptedData: P
      } = await this._api.encryptData(h);
      return P
    }
    async decryptData(h) {
      await this.ensureInitialized();
      const {
        data: P
      } = await this._api.decryptData({
        encryptedData: h
      });
      return P
    }
    async sendMessage(h) {
      await this.ensureInitialized();
      const {
        transaction: P
      } = await this._api.sendMessage({
        sender: h.sender.toString(),
        recipient: h.recipient.toString(),
        amount: h.amount,
        bounce: h.bounce,
        payload: h.payload ? {
          abi: h.payload.abi,
          method: h.payload.method,
          params: (0, o.serializeTokensObject)(h.payload.params)
        } : void 0,
        stateInit: h.stateInit
      });
      return {
        transaction: (0, o.parseTransaction)(P)
      }
    }
    async sendMessageDelayed(h) {
      await this.ensureInitialized();
      const P = new a.DelayedTransactions,
        k = await this.subscribe("messageStatusUpdated");
      k.on("data", ne => {
        ne.address.equals(h.sender) && P.fillTransaction(ne.hash, ne.transaction)
      });
      const {
        message: T
      } = await this._api.sendMessageDelayed({
        sender: h.sender.toString(),
        recipient: h.recipient.toString(),
        amount: h.amount,
        bounce: h.bounce,
        payload: h.payload ? {
          abi: h.payload.abi,
          method: h.payload.method,
          params: (0, o.serializeTokensObject)(h.payload.params)
        } : void 0,
        stateInit: h.stateInit
      }).catch(ne => {
        throw k.unsubscribe().catch(console.error), ne
      }), J = P.waitTransaction(h.sender, T.hash).finally(() => k.unsubscribe().catch(console.error));
      return {
        messageHash: T.hash,
        expireAt: T.expireAt,
        transaction: J
      }
    }
    async addNetwork(h) {
      return await this.ensureInitialized(), await this._api.addNetwork(h)
    }
    async changeNetwork(h) {
      return await this.ensureInitialized(), await this._api.changeNetwork(h)
    }
    _registerEventHandlers(h) {
      const P = {
        connected: k => k,
        disconnected: k => k,
        transactionsFound: k => ({
          address: new a.Address(k.address),
          transactions: k.transactions.map(o.parseTransaction),
          info: k.info
        }),
        contractStateChanged: k => ({
          address: new a.Address(k.address),
          state: k.state
        }),
        messageStatusUpdated: k => ({
          address: new a.Address(k.address),
          hash: k.hash,
          transaction: k.transaction != null ? (0, o.parseTransaction)(k.transaction) : void 0
        }),
        networkChanged: k => k,
        permissionsChanged: k => ({
          permissions: (0, o.parsePermissions)(k.permissions)
        }),
        loggedOut: k => k
      };
      for (const [k, T] of Object.entries(P)) h.addListener(k, J => {
        const ne = this._subscriptions[k],
          q = T(J);
        for (const we of ne.values()) we(q)
      })
    }
  }
  e.ProviderRpcClient = m;
  class v extends Error {
    constructor() {
      super("Everscale provider was not found")
    }
  }
  e.ProviderNotFoundException = v;
  class x extends Error {
    constructor() {
      super("Everscale provider was not initialized yet")
    }
  }
  e.ProviderNotInitializedException = x;

  function M(p, h) {
    const P = {
        state: !1,
        transactions: !1
      },
      k = Object.assign({}, P);
    for (const T of p) {
      if (k.transactions && k.state) break;
      P.state || (P.state = T.state), P.transactions || (P.transactions = T.transactions), T !== h && (k.state || (k.state = T.state), k.transactions || (k.transactions = T.transactions))
    }
    return {
      total: P,
      withoutExcluded: k
    }
  }
})(nn);
var Ba = {
    exports: {}
  },
  qn = typeof Reflect == "object" ? Reflect : null,
  ro = qn && typeof qn.apply == "function" ? qn.apply : function(t, n, r) {
    return Function.prototype.apply.call(t, n, r)
  },
  Gr;
qn && typeof qn.ownKeys == "function" ? Gr = qn.ownKeys : Object.getOwnPropertySymbols ? Gr = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
} : Gr = function(t) {
  return Object.getOwnPropertyNames(t)
};

function fu(e) {
  console && console.warn && console.warn(e)
}
var ds = Number.isNaN || function(t) {
  return t !== t
};

function ze() {
  ze.init.call(this)
}
Ba.exports = ze;
Ba.exports.once = mu;
ze.EventEmitter = ze;
ze.prototype._events = void 0;
ze.prototype._eventsCount = 0;
ze.prototype._maxListeners = void 0;
var io = 10;

function li(e) {
  if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
}
Object.defineProperty(ze, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return io
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || ds(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    io = e
  }
});
ze.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
ze.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || ds(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this
};

function fs(e) {
  return e._maxListeners === void 0 ? ze.defaultMaxListeners : e._maxListeners
}
ze.prototype.getMaxListeners = function() {
  return fs(this)
};
ze.prototype.emit = function(t) {
  for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
  var i = t === "error",
    o = this._events;
  if (o !== void 0) i = i && o.error === void 0;
  else if (!i) return !1;
  if (i) {
    var a;
    if (n.length > 0 && (a = n[0]), a instanceof Error) throw a;
    var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
    throw s.context = a, s
  }
  var c = o[t];
  if (c === void 0) return !1;
  if (typeof c == "function") ro(c, this, n);
  else
    for (var f = c.length, u = bs(c, f), r = 0; r < f; ++r) ro(u[r], this, n);
  return !0
};

function hs(e, t, n, r) {
  var i, o, a;
  if (li(n), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), a = o[t]), a === void 0) a = o[t] = n, ++e._eventsCount;
  else if (typeof a == "function" ? a = o[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), i = fs(e), i > 0 && a.length > i && !a.warned) {
    a.warned = !0;
    var s = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    s.name = "MaxListenersExceededWarning", s.emitter = e, s.type = t, s.count = a.length, fu(s)
  }
  return e
}
ze.prototype.addListener = function(t, n) {
  return hs(this, t, n, !1)
};
ze.prototype.on = ze.prototype.addListener;
ze.prototype.prependListener = function(t, n) {
  return hs(this, t, n, !0)
};

function hu() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function ps(e, t, n) {
  var r = {
      fired: !1,
      wrapFn: void 0,
      target: e,
      type: t,
      listener: n
    },
    i = hu.bind(r);
  return i.listener = n, r.wrapFn = i, i
}
ze.prototype.once = function(t, n) {
  return li(n), this.on(t, ps(this, t, n)), this
};
ze.prototype.prependOnceListener = function(t, n) {
  return li(n), this.prependListener(t, ps(this, t, n)), this
};
ze.prototype.removeListener = function(t, n) {
  var r, i, o, a, s;
  if (li(n), i = this._events, i === void 0) return this;
  if (r = i[t], r === void 0) return this;
  if (r === n || r.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || n));
  else if (typeof r != "function") {
    for (o = -1, a = r.length - 1; a >= 0; a--)
      if (r[a] === n || r[a].listener === n) {
        s = r[a].listener, o = a;
        break
      } if (o < 0) return this;
    o === 0 ? r.shift() : pu(r, o), r.length === 1 && (i[t] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", t, s || n)
  }
  return this
};
ze.prototype.off = ze.prototype.removeListener;
ze.prototype.removeAllListeners = function(t) {
  var n, r, i;
  if (r = this._events, r === void 0) return this;
  if (r.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[t]), this;
  if (arguments.length === 0) {
    var o = Object.keys(r),
      a;
    for (i = 0; i < o.length; ++i) a = o[i], a !== "removeListener" && this.removeAllListeners(a);
    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
  }
  if (n = r[t], typeof n == "function") this.removeListener(t, n);
  else if (n !== void 0)
    for (i = n.length - 1; i >= 0; i--) this.removeListener(t, n[i]);
  return this
};

function gs(e, t, n) {
  var r = e._events;
  if (r === void 0) return [];
  var i = r[t];
  return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? gu(i) : bs(i, i.length)
}
ze.prototype.listeners = function(t) {
  return gs(this, t, !0)
};
ze.prototype.rawListeners = function(t) {
  return gs(this, t, !1)
};
ze.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : ms.call(e, t)
};
ze.prototype.listenerCount = ms;

function ms(e) {
  var t = this._events;
  if (t !== void 0) {
    var n = t[e];
    if (typeof n == "function") return 1;
    if (n !== void 0) return n.length
  }
  return 0
}
ze.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Gr(this._events) : []
};

function bs(e, t) {
  for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
  return n
}

function pu(e, t) {
  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
  e.pop()
}

function gu(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
  return t
}

function mu(e, t) {
  return new Promise(function(n, r) {
    function i(a) {
      e.removeListener(t, o), r(a)
    }

    function o() {
      typeof e.removeListener == "function" && e.removeListener("error", i), n([].slice.call(arguments))
    }
    ys(e, t, o, {
      once: !0
    }), t !== "error" && bu(e, i, {
      once: !0
    })
  })
}

function bu(e, t, n) {
  typeof e.on == "function" && ys(e, "error", t, n)
}

function ys(e, t, n, r) {
  if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function") e.addEventListener(t, function i(o) {
    r.once && e.removeEventListener(t, i), n(o)
  });
  else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
}
var yu = Ba.exports;
Object.defineProperty(pt, "__esModule", {
  value: !0
});
pt.getUniqueId = pt.convertVersionToInt32 = pt.convertToAddressObject = pt.SafeEventEmitter = void 0;
const ao = nn,
  _u = yu;

function oo(e, t, n) {
  try {
    Reflect.apply(e, t, n)
  } catch (r) {
    setTimeout(() => {
      throw r
    })
  }
}

function wu(e) {
  const t = e.length,
    n = new Array(t);
  for (let r = 0; r < t; r += 1) n[r] = e[r];
  return n
}
class vu extends _u.EventEmitter {
  emit(t, ...n) {
    let r = t === "error";
    const i = this._events;
    if (i !== void 0) r = r && i.error === void 0;
    else if (!r) return !1;
    if (r) {
      let a;
      if (n.length > 0 && ([a] = n), a instanceof Error) throw a;
      const s = new Error(`Unhandled error.${a?` (${a.message})`:""}`);
      throw s.context = a, s
    }
    const o = i[t];
    if (o === void 0) return !1;
    if (typeof o == "function") oo(o, this, n);
    else {
      const a = o.length,
        s = wu(o);
      for (let c = 0; c < a; c += 1) oo(s[c], this, n)
    }
    return !0
  }
}
pt.SafeEventEmitter = vu;

function ku(e) {
  if (typeof e == "object" && !(0, ao.isAddressObject)(e)) throw new Error("Invalid address object");
  return typeof e == "object" ? e : new ao.Address(e)
}
pt.convertToAddressObject = ku;
const Su = e => {
  const t = e.split(".");
  if (t.length !== 3) throw new Error("Received invalid version string");
  t.forEach(i => {
    if (~~i > 999) throw new Error(`Version string invalid, ${i} is too large`)
  });
  let n = 1e6,
    r = 0;
  for (let i = 0; i < 3; i++) r += ~~t[i] * n, n /= 1e3;
  return r
};
pt.convertVersionToInt32 = Su;
const _s = 4294967295;
let Ji = Math.floor(Math.random() * _s);

function Au() {
  return Ji = (Ji + 1) % _s, Ji
}
pt.getUniqueId = Au;
var Wr = {},
  Zt = {};
Object.defineProperty(Zt, "__esModule", {
  value: !0
});
Zt.Mutex = Zt.Semaphore = void 0;

function Yr(e) {
  if (typeof e != "function") throw new TypeError(e + " is not a function");
  return e
}

function so(e) {
  const t = document.createTextNode("");
  let n, r, i = 0,
    o = 0;
  return new e(function() {
      let a;
      if (n) r && (n = r.slice(o).concat(n));
      else {
        if (!r) return;
        n = r
      }
      if (r = n, n = null, o = 0, typeof r == "function") {
        a = r, r = null, a();
        return
      }
      for (t.data = i = ++i % 2; o < r.length;) a = r[o], o++, o === r.length && (r = null), a()
    }).observe(t, {
      characterData: !0
    }),
    function(a) {
      if (Yr(a), n) {
        typeof n == "function" ? n = [n, a] : n.push(a);
        return
      }
      n = a, t.data = i = ++i % 2
    }
}
const Iu = function() {
  if (typeof queueMicrotask == "function") return function(e) {
    queueMicrotask(Yr(e))
  };
  if (typeof document == "object" && document) {
    if (typeof MutationObserver == "function") return so(MutationObserver);
    if (typeof window.WebKitMutationObserver == "function") return so(window.WebKitMutationObserver)
  }
  if (typeof setImmediate == "function") return function(e) {
    setImmediate(Yr(e))
  };
  if (typeof setTimeout == "function" || typeof setTimeout == "object") return function(e) {
    setTimeout(Yr(e), 0)
  };
  throw new Error("No `nextTick` implementation found")
}();
class ws {
  constructor(t) {
    this.tasks = [], this.count = t
  }
  sched() {
    if (this.count > 0 && this.tasks.length > 0) {
      this.count--;
      let t = this.tasks.shift();
      if (t === void 0) throw "Unexpected undefined value in tasks list";
      t()
    }
  }
  acquire() {
    return new Promise((t, n) => {
      const r = () => {
        let i = !1;
        t(() => {
          i || (i = !0, this.count++, this.sched())
        })
      };
      this.tasks.push(r), Iu(this.sched.bind(this))
    })
  }
  use(t) {
    return this.acquire().then(n => t().then(r => (n(), r)).catch(r => {
      throw n(), r
    }))
  }
}
Zt.Semaphore = ws;
class Cu extends ws {
  constructor() {
    super(1)
  }
}
Zt.Mutex = Cu;
var ci = {},
  Bu = pe && pe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
Object.defineProperty(ci, "__esModule", {
  value: !0
});
ci.GqlSocket = void 0;
const ua = Bu(St);
class jr {
  async connect(t) {
    class n {
      constructor(i) {
        this.nextLatencyDetectionTime = 0, this.local = i.local === !0, this.maxLatency = i.maxLatency || 6e4, this.latencyDetectionInterval = i.latencyDetectionInterval || 6e4, this.endpoints = i.endpoints.map(jr.expandAddress), this.endpoints.length == 1 && (this.currentEndpoint = this.endpoints[0], this.nextLatencyDetectionTime = Number.MAX_VALUE)
      }
      isLocal() {
        return this.local
      }
      send(i, o, a) {
        (async () => {
          const s = Date.now();
          try {
            let c;
            this.currentEndpoint != null && s < this.nextLatencyDetectionTime ? c = this.currentEndpoint : this.resolutionPromise != null ? (c = await this.resolutionPromise, delete this.resolutionPromise) : (delete this.currentEndpoint, this.resolutionPromise = this._selectQueryingEndpoint().then(u => (this.currentEndpoint = u, this.nextLatencyDetectionTime = Date.now() + this.latencyDetectionInterval, u)), c = await this.resolutionPromise, delete this.resolutionPromise);
            const f = await fetch(c.url, {
              method: "post",
              headers: Pu,
              body: i,
              agent: c.agent
            }).then(u => u.text());
            o.onReceive(f)
          } catch (c) {
            o.onError(c)
          }
        })()
      }
      async _selectQueryingEndpoint() {
        const i = this.maxLatency,
          o = this.endpoints.length;
        for (let a = 0; a < 5; ++a) {
          let s;
          const c = new Promise((_, B) => {
            s = {
              resolve: y => _(y),
              reject: () => B(void 0)
            }
          });
          let f = 0,
            u;
          for (const _ of this.endpoints) jr.checkLatency(_).then(B => {
            if (++f, B !== void 0 && B <= i) return s.resolve(_);
            (u === void 0 || u.latency === void 0 || B !== void 0 && B < u.latency) && (u = {
              endpoint: _,
              latency: B
            }), f >= o && ((u == null ? void 0 : u.latency) !== void 0 ? s.resolve(u.endpoint) : s.reject())
          });
          try {
            return await c
          } catch {
            let B;
            const y = new Promise(S => {
              B = () => S()
            });
            setTimeout(() => B(), Math.min(100 * a, 5e3)), await y
          }
        }
        throw new Error("Not available endpoint found")
      }
    }
    return new ua.default.nekoton.GqlConnection(new n(t))
  }
  static async checkLatency(t) {
    const n = await fetch(`${t.url}?query=%7Binfo%7Bversion%20time%20latency%7D%7D`, {
      method: "get",
      agent: t.agent
    }).then(a => a.json()).catch(a => {
      ua.default.debugLog(a)
    });
    if (typeof n != "object" || n == null) return;
    const r = n.data;
    if (typeof r != "object" || r == null) return;
    const i = r.info;
    if (typeof i != "object" || i == null) return;
    const o = i.latency;
    if (typeof o == "number") return o
  }
}
ci.GqlSocket = jr;
jr.expandAddress = e => {
  const t = e.lastIndexOf("/");
  e = t < 0 ? e : e.substring(0, t);
  let n;
  return e.startsWith("http://") || e.startsWith("https://") ? n = `${e}/graphql` : ["localhost", "127.0.0.1"].indexOf(e) >= 0 ? n = `http://${e}/graphql` : n = `https://${e}/graphql`, {
    url: n,
    agent: ua.default.fetchAgent(n)
  }
};
const Pu = {
  "Content-Type": "application/json"
};
var ui = {},
  Mu = pe && pe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
Object.defineProperty(ui, "__esModule", {
  value: !0
});
ui.JrpcSocket = void 0;
const Qi = Mu(St);
class Tu {
  async connect(t) {
    class n {
      constructor(i) {
        this.endpoint = i.endpoint, this.endpointAgent = Qi.default.fetchAgent(this.endpoint), this.alternativeEndpoint = i.alternativeEndpoint != null ? i.alternativeEndpoint : i.endpoint, this.alternativeEndpointAgent = Qi.default.fetchAgent(this.alternativeEndpoint)
      }
      send(i, o, a) {
        (async () => {
          try {
            const s = a ? this.endpoint : this.alternativeEndpoint,
              c = a ? this.endpointAgent : this.alternativeEndpointAgent,
              f = await fetch(s, {
                method: "post",
                headers: Eu,
                body: i,
                agent: c
              }).then(u => u.text());
            o.onReceive(f)
          } catch (s) {
            o.onError(s)
          }
        })()
      }
    }
    return new Qi.default.nekoton.JrpcConnection(new n(t))
  }
}
ui.JrpcSocket = Tu;
const Eu = {
  "Content-Type": "application/json"
};
var di = {},
  Ou = pe && pe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
Object.defineProperty(di, "__esModule", {
  value: !0
});
di.ProtoSocket = void 0;
const lo = Ou(St);
class xu {
  async connect(t) {
    class n {
      constructor(i) {
        this.endpoint = i.endpoint, this.endpointAgent = lo.default.fetchAgent(this.endpoint)
      }
      send(i, o, a) {
        (async () => {
          try {
            const s = await fetch(this.endpoint, {
              method: "post",
              headers: Uu,
              body: new Uint8Array(i),
              agent: this.endpointAgent
            }).then(c => c.arrayBuffer());
            o.onReceive(new Uint8Array(s))
          } catch (s) {
            o.onError(s)
          }
        })()
      }
    }
    return new lo.default.nekoton.ProtoConnection(new n(t))
  }
}
di.ProtoSocket = xu;
const Uu = {
  "Content-Type": "application/x-protobuf"
};
(function(e) {
  var t = pe && pe.__importDefault || function(m) {
    return m && m.__esModule ? m : {
      default: m
    }
  };
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ConnectionController = e.createConnectionController = e.ConnectionError = e.checkConnection = e.NETWORK_PRESETS = void 0;
  const n = Zt,
    r = t(St),
    i = ci,
    o = ui,
    a = di;
  e.NETWORK_PRESETS = {
    mainnetJrpc: {
      id: 1,
      type: "jrpc",
      data: {
        endpoint: "https://jrpc.everwallet.net/rpc"
      }
    },
    fld: {
      id: 10,
      type: "graphql",
      data: {
        endpoints: ["gql.custler.net"],
        local: !1
      }
    },
    local: {
      id: 31337,
      type: "graphql",
      data: {
        endpoints: ["127.0.0.1"],
        local: !0
      }
    }
  };
  const s = m => {
    switch (m) {
      case 1:
        return "mainnet";
      case 2:
        return "testnet";
      case 10:
        return "fld";
      case 31337:
        return "localnet";
      default:
        return `network${m}`
    }
  };

  function c(m) {
    if (typeof m == "string") {
      const v = e.NETWORK_PRESETS[m];
      if (v == null) throw new Error(`Target preset id not found: ${m}`);
      return v
    } else return m
  }
  async function f(m) {
    const v = c(m),
      x = new r.default.nekoton.ClockWithOffset;
    try {
      const M = new B(x);
      await M._connect(v), M._initializedTransport != null && y(M._initializedTransport)
    } catch (M) {
      throw new u(v, M.toString())
    } finally {
      x.free()
    }
  }
  e.checkConnection = f;
  class u extends Error {
    constructor(v, x) {
      super(x), this.params = v
    }
  }
  e.ConnectionError = u;
  async function _(m, v, x = !1) {
    const M = c(v);
    for (;;) try {
      const p = new B(m);
      return await p.startSwitchingNetwork(M).then(h => h.switch()), r.default.debugLog(`Successfully connected to ${M.group}`), p
    } catch (p) {
      if (x) console.error("Connection failed:", p), await new Promise(h => {
        setTimeout(() => h(), 5e3)
      }), r.default.debugLog("Restarting connection process");
      else throw p
    }
  }
  e.createConnectionController = _;
  class B {
    constructor(v) {
      this._networkMutex = new n.Mutex, this._acquiredTransportCounter = 0, this._clock = v
    }
    async acquire() {
      return S(this._initializedTransport), await this._acquireTransport(), {
        transport: this._initializedTransport,
        release: () => this._releaseTransport()
      }
    }
    async use(v) {
      return S(this._initializedTransport), await this._acquireTransport(), v(this._initializedTransport).finally(() => {
        this._releaseTransport()
      })
    }
    async startSwitchingNetwork(v) {
      var x;
      class M {
        constructor(P, k, T) {
          this._controller = P, this._release = k, this._params = T
        }
        async switch () {
          await this._controller._connect(this._params).finally(() => this._release())
        }
      }(x = this._cancelTestTransport) === null || x === void 0 || x.call(this);
      const p = await this._networkMutex.acquire();
      return new M(this, p, v)
    }
    get initializedTransport() {
      return this._initializedTransport
    }
    async _connect(v) {
      this._initializedTransport != null && y(this._initializedTransport), this._initializedTransport = void 0;
      let x;
      (function(p) {
        p[p.DONE = 0] = "DONE", p[p.CANCELLED = 1] = "CANCELLED"
      })(x || (x = {}));
      const M = async ({
        data: {
          transport: p
        }
      }, h) => new Promise((P, k) => {
        this._cancelTestTransport = () => P(x.CANCELLED), h ? p.getAccountsByCodeHash("4e92716de61d456e58f16e4e867e3e93a7548321eace86301b51c8b80ca6239b", 1).then(() => P(x.DONE)).catch(T => k(T)) : p.getFullContractState("-1:0000000000000000000000000000000000000000000000000000000000000000").then(() => P(x.DONE)).catch(T => k(T)), setTimeout(() => k(new Error("Connection timeout")), 1e4)
      }).finally(() => this._cancelTestTransport = void 0);
      try {
        const p = v.group != null ? v.group : s(v.id),
          {
            local: h,
            transportData: P
          } = await (async () => {
            switch (v.type) {
              case "graphql": {
                const k = new i.GqlSocket,
                  T = await k.connect(v.data),
                  J = r.default.nekoton.Transport.fromGqlConnection(T, this._clock),
                  ne = {
                    id: v.id,
                    group: p,
                    type: "graphql",
                    data: {
                      socket: k,
                      connection: T,
                      transport: J
                    }
                  };
                return {
                  local: v.data.local === !0,
                  transportData: ne
                }
              }
              case "jrpc": {
                const k = new o.JrpcSocket,
                  T = await k.connect(v.data),
                  J = r.default.nekoton.Transport.fromJrpcConnection(T, this._clock);
                return {
                  local: !1,
                  transportData: {
                    id: v.id,
                    group: p,
                    type: "jrpc",
                    data: {
                      socket: k,
                      connection: T,
                      transport: J
                    }
                  }
                }
              }
              case "proto": {
                const k = new a.ProtoSocket,
                  T = await k.connect(v.data),
                  J = r.default.nekoton.Transport.fromProtoConnection(T, this._clock);
                return {
                  local: !1,
                  transportData: {
                    id: v.id,
                    group: p,
                    type: "proto",
                    data: {
                      socket: k,
                      connection: T,
                      transport: J
                    }
                  }
                }
              }
              case "proxy": {
                const k = v.data.connectionFactory.create(this._clock);
                return {
                  local: !0,
                  transportData: {
                    id: v.id,
                    group: p,
                    type: "proxy",
                    data: {
                      connection: k,
                      transport: r.default.nekoton.Transport.fromProxyConnection(k, this._clock)
                    }
                  }
                }
              }
            }
          })();
        try {
          if (await M(P, h) == x.CANCELLED) {
            y(P);
            return
          }
        } catch (k) {
          throw y(P), k
        }
        this._initializedTransport = P
      } catch (p) {
        throw new Error(`Failed to create connection: ${p.toString()}`)
      }
    }
    async _acquireTransport() {
      r.default.debugLog("_acquireTransport"), this._acquiredTransportCounter > 0 ? (r.default.debugLog("_acquireTransport -> increase"), this._acquiredTransportCounter += 1) : (this._acquiredTransportCounter = 1, this._release != null ? console.warn("mutex is already acquired") : (r.default.debugLog("_acquireTransport -> await"), this._release = await this._networkMutex.acquire(), r.default.debugLog("_acquireTransport -> create")))
    }
    _releaseTransport() {
      var v;
      r.default.debugLog("_releaseTransport"), this._acquiredTransportCounter -= 1, this._acquiredTransportCounter <= 0 && (r.default.debugLog("_releaseTransport -> release"), (v = this._release) === null || v === void 0 || v.call(this), this._release = void 0)
    }
  }
  e.ConnectionController = B;

  function y(m) {
    m.data.transport.free(), m.data.connection.free()
  }

  function S(m) {
    if (m == null) throw new Error("Connection is not initialized")
  }
})(Wr);
var fi = {},
  hi = {},
  Ru = pe && pe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
Object.defineProperty(hi, "__esModule", {
  value: !0
});
hi.ContractSubscription = void 0;
const ju = Zt,
  ct = Ru(St);
class Pa {
  static async subscribe(t, n, r) {
    const {
      transport: {
        data: {
          connection: i,
          transport: o
        }
      },
      release: a
    } = await t.acquire();
    try {
      const s = await o.subscribeToGenericContract(n, r);
      if (s == null) throw new Error(`Failed to subscribe to contract: ${n}`);
      return new Pa(i, a, n, s)
    } catch (s) {
      throw a(), s
    }
  }
  constructor(t, n, r, i) {
    this._contractMutex = new ju.Mutex, this._pollingInterval = Nu, this._isRunning = !1, this._skipIteration = !1, this._connection = t, this._address = r, this._contract = i, this._releaseTransport = n, this._currentPollingMethod = i.pollingMethod
  }
  setPollingInterval(t) {
    this._pollingInterval = t
  }
  async start() {
    if (this._releaseTransport == null) throw new Error("Contract subscription must not be started after being closed");
    this._loopPromise && (ct.default.debugLog("ContractSubscription -> awaiting loop promise"), await this._loopPromise), ct.default.debugLog("ContractSubscription -> loop started"), this._loopPromise = (async () => {
      const t = !(this._connection instanceof ct.default.nekoton.GqlConnection),
        n = this._connection instanceof ct.default.nekoton.ProxyConnection;
      this._isRunning = !0;
      let r = this._currentPollingMethod;
      for (; this._isRunning;) {
        this._skipIteration = !1;
        const i = r != this._currentPollingMethod;
        if (r = this._currentPollingMethod, t || this._currentPollingMethod == "manual") {
          this._currentBlockId = void 0, ct.default.debugLog("ContractSubscription -> manual -> waiting begins");
          const o = this._currentPollingMethod == "manual" || n ? this._pollingInterval : zu;
          if (await new Promise(a => {
              const s = setTimeout(() => {
                this._refreshTimer = void 0, a()
              }, o);
              this._refreshTimer = [s, a]
            }), ct.default.debugLog("ContractSubscription -> manual -> waiting ends"), this._skipIteration) continue;
          if (!this._isRunning) break;
          ct.default.debugLog("ContractSubscription -> manual -> refreshing begins");
          try {
            this._currentPollingMethod = await this._contractMutex.use(async () => (await this._contract.refresh(), this._contract.pollingMethod))
          } catch (a) {
            ct.default.debugLog(`Error during account refresh (${this._address})`, a)
          }
          ct.default.debugLog("ContractSubscription -> manual -> refreshing ends")
        } else {
          const o = this._connection;
          ct.default.debugLog("ContractSubscription -> reliable start"), i && this._suggestedBlockId != null && (this._currentBlockId = this._suggestedBlockId), this._suggestedBlockId = void 0;
          let a;
          if (this._currentBlockId == null) {
            ct.default.debugLog("ContractSubscription -> starting reliable connection with unknown block");
            try {
              const s = await o.getLatestBlock(this._address);
              this._currentBlockId = s.id, a = this._currentBlockId
            } catch (s) {
              ct.default.debugLog(`Failed to get latest block for ${this._address}`, s);
              continue
            }
          } else try {
            a = await o.waitForNextBlock(this._currentBlockId, this._address, Lu)
          } catch {
            ct.default.debugLog(`Failed to wait for next block for ${this._address}`);
            continue
          }
          try {
            this._currentPollingMethod = await this._contractMutex.use(async () => (await this._contract.handleBlock(a), this._contract.pollingMethod)), this._currentBlockId = a
          } catch (s) {
            ct.default.debugLog(`Failed to handle block for ${this._address}`, s)
          }
        }
      }
      ct.default.debugLog("ContractSubscription -> loop finished")
    })()
  }
  skipRefreshTimer(t) {
    var n, r;
    t != null && (this._currentPollingMethod = t, this._skipIteration = !0), clearTimeout((n = this._refreshTimer) === null || n === void 0 ? void 0 : n[0]), (r = this._refreshTimer) === null || r === void 0 || r[1](), this._refreshTimer = void 0
  }
  async pause() {
    this._isRunning && (this._isRunning = !1, this.skipRefreshTimer(), await this._loopPromise, this._loopPromise = void 0, this._currentPollingMethod = await this._contractMutex.use(async () => this._contract.pollingMethod), this._currentBlockId = void 0, this._suggestedBlockId = void 0)
  }
  async stop() {
    var t;
    await this.pause(), this._contract.free(), (t = this._releaseTransport) === null || t === void 0 || t.call(this), this._releaseTransport = void 0
  }
  async prepareReliablePolling() {
    try {
      this._connection instanceof ct.default.nekoton.GqlConnection && (this._suggestedBlockId = (await this._connection.getLatestBlock(this._address)).id)
    } catch (t) {
      throw new Error(`Failed to prepare reliable polling: ${t.toString()}`)
    }
  }
  async use(t) {
    const n = await this._contractMutex.acquire();
    return t(this._contract).then(r => (n(), r)).catch(r => {
      throw n(), r
    })
  }
}
hi.ContractSubscription = Pa;
const Lu = 60,
  zu = 2e3,
  Nu = 6e4;
Object.defineProperty(fi, "__esModule", {
  value: !0
});
fi.SubscriptionController = void 0;
const Du = Zt,
  co = pt,
  Fu = hi,
  Ku = 1e4;
class $u {
  constructor(t, n) {
    this._subscriptions = new Map, this._subscriptionsMutex = new Du.Mutex, this._sendMessageRequests = new Map, this._subscriptionStates = new Map, this._pollingInterval = Ku, this._connectionController = t, this._notify = n
  }
  setPollingInterval(t) {
    this._pollingInterval = t
  }
  async sendMessageLocally(t, n, r) {
    const i = (0, co.getUniqueId)();
    try {
      await this.subscribeToContract(t, {
        state: !0
      }, i);
      const o = this._subscriptions.get(t);
      if (o == null) throw new Error("Failed to subscribe to contract");
      return await o.use(a => a.sendMessageLocally(n, r))
    } finally {
      this.unsubscribeFromContract(t, i).catch(console.error)
    }
  }
  sendMessage(t, n) {
    const r = n.hash;
    let i = this._sendMessageRequests.get(t);
    if (i == null) i = new Map, this._sendMessageRequests.set(t, i);
    else if (i.has(r)) throw new Error(`Trying to send a duplicate message with id '${r}'`);
    const o = (0, co.getUniqueId)();
    return new Promise((a, s) => {
      i.set(r, {
        resolve: a,
        reject: s
      }), this.subscribeToContract(t, {
        state: !0
      }, o).then(async () => {
        const c = this._subscriptions.get(t);
        if (c == null) throw new Error("Failed to subscribe to contract");
        await c.prepareReliablePolling(), await c.use(async f => {
          await f.sendMessage(n), c.skipRefreshTimer(f.pollingMethod)
        })
      }).catch(c => this._rejectMessageRequest(t, r, c)).finally(() => {
        this.unsubscribeFromContract(t, o).catch(console.error)
      })
    })
  }
  async subscribeToContract(t, n, r) {
    return this._subscriptionsMutex.use(async () => {
      const i = u => {
          const _ = {
            ...u
          };
          return Object.keys(_).map(B => {
            if (B !== "state" && B !== "transactions") throw new Error(`Unknown subscription topic: ${B}`);
            const y = n[B];
            if (typeof y == "boolean") _[B] = y;
            else {
              if (y == null) return;
              throw new Error(`Unknown subscription topic value ${B}: ${y}`)
            }
          }), _
        },
        o = this._subscriptionStates.get(t) || Hu();
      let a;
      if (r == null) a = i(o.client);
      else {
        const u = o.internal.get(r);
        u != null ? (a = i(u), uo(a) && o.internal.delete(r)) : a = i({
          state: !1,
          transactions: !1
        })
      }
      const s = {
        ...a
      };
      for (const u of o.internal.values()) s.state || (s.state = u.state), s.transactions || (s.transactions = u.transactions);
      if (uo(s)) return this._subscriptionStates.delete(t), await this._tryUnsubscribe(t), {
        ...s
      };
      let c = this._subscriptions.get(t);
      const f = c == null;
      return c == null && (c = await this._createSubscription(t)), r == null ? o.client = a : o.internal.set(r, a), this._subscriptionStates.set(t, o), f && await c.start(), {
        ...a
      }
    })
  }
  async unsubscribeFromContract(t, n) {
    await this.subscribeToContract(t, {
      state: !1,
      transactions: !1
    }, n)
  }
  async unsubscribeFromAllContracts(t) {
    for (const n of this._subscriptions.keys()) await this.unsubscribeFromContract(n, t)
  }
  get subscriptionStates() {
    const t = {};
    for (const [n, r] of this._subscriptionStates.entries()) t[n] = {
      ...r.client
    };
    return t
  }
  async _createSubscription(t) {
    class n {
      constructor(a, s) {
        this._enabled = !1, this._address = a, this._controller = s
      }
      enableNotifications() {
        this._enabled = !0
      }
      onMessageExpired(a) {
        this._controller._resolveMessageRequest(this._address, a.messageHash, void 0).catch(console.error)
      }
      onMessageSent(a, s) {
        this._controller._resolveMessageRequest(this._address, a.messageHash, s).catch(console.error)
      }
      onStateChanged(a) {
        this._enabled && this._controller._notifyStateChanged(this._address, a)
      }
      onTransactionsFound(a, s) {
        this._enabled && this._controller._notifyTransactionsFound(this._address, a, s)
      }
    }
    const r = new n(t, this),
      i = await Fu.ContractSubscription.subscribe(this._connectionController, t, r);
    return i.setPollingInterval(this._pollingInterval), r.enableNotifications(), this._subscriptions.set(t, i), i
  }
  async _tryUnsubscribe(t) {
    const n = this._subscriptionStates.get(t),
      r = this._sendMessageRequests.get(t);
    if (n == null && ((r == null ? void 0 : r.size) || 0) == 0) {
      const i = this._subscriptions.get(t);
      this._subscriptions.delete(t), await (i == null ? void 0 : i.stop())
    }
  }
  async _rejectMessageRequest(t, n, r) {
    this._deleteMessageRequestAndGetCallback(t, n).reject(r), await this._subscriptionsMutex.use(async () => this._tryUnsubscribe(t))
  }
  async _resolveMessageRequest(t, n, r) {
    this._deleteMessageRequestAndGetCallback(t, n).resolve(r), await this._subscriptionsMutex.use(async () => this._tryUnsubscribe(t))
  }
  _notifyStateChanged(t, n) {
    const r = this._subscriptionStates.get(t);
    r != null && r.client.state && this._notify("contractStateChanged", {
      address: t,
      state: n
    })
  }
  _notifyTransactionsFound(t, n, r) {
    const i = this._subscriptionStates.get(t);
    i != null && i.client.transactions && this._notify("transactionsFound", {
      address: t,
      transactions: n,
      info: r
    })
  }
  _deleteMessageRequestAndGetCallback(t, n) {
    var r;
    const i = (r = this._sendMessageRequests.get(t)) === null || r === void 0 ? void 0 : r.get(n);
    if (!i) throw new Error(`SendMessage request with id '${n}' not found`);
    return this._deleteMessageRequest(t, n), i
  }
  _deleteMessageRequest(t, n) {
    const r = this._sendMessageRequests.get(t);
    r && (r.delete(n), r.size == 0 && this._sendMessageRequests.delete(t))
  }
}
fi.SubscriptionController = $u;
const Hu = () => ({
    internal: new Map,
    client: {
      state: !1,
      transactions: !1
    }
  }),
  uo = e => !e.state && !e.transactions;
var da = {},
  pi = {};
Object.defineProperty(pi, "__esModule", {
  value: !0
});
pi.GiverAccount = void 0;
const Vu = pt;
class Lr {
  static fromVersion(t) {
    let n;
    switch (t) {
      case 2:
        n = "0:ece57bcc6c530283becbbd8a3b24d3c5987cdddc3c8b7b33be6e4a6312490415";
        break;
      case 3:
        n = "0:78fbd6980c10cf41401b32e9b51810415e7578b52403af80dae68ddf99714498";
        break;
      default:
        throw new Error("Unknown version")
    }
    return new Lr({
      address: n,
      publicKey: Lr.GIVER_KEY_PAIR.publicKey
    })
  }
  constructor(t) {
    this.address = (0, Vu.convertToAddressObject)(t.address), this.publicKey = t.publicKey
  }
  async fetchPublicKey(t) {
    return this.publicKey
  }
  async prepareMessage(t, n) {
    if (t.payload != null) throw new Error("Giver contract does not support payload in an internal message");
    if (t.stateInit != null) throw new Error("Giver contract does not support state init in an internal message");
    const r = await n.getSigner(this.publicKey);
    return await n.createExternalMessage({
      address: this.address,
      signer: r,
      timeout: t.timeout,
      abi: Gu,
      method: "sendTransaction",
      params: {
        dest: t.recipient,
        value: t.amount,
        bounce: t.bounce
      },
      signatureId: t.signatureId
    })
  }
}
pi.GiverAccount = Lr;
Lr.GIVER_KEY_PAIR = {
  secretKey: "172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3",
  publicKey: "2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16"
};
const Gu = `{
  "ABI version": 2,
  "header": ["time", "expire"],
  "functions": [{
    "name": "sendTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"}
    ],
    "outputs": []
  }],
  "events": []
}`;
var er = {};
Object.defineProperty(er, "__esModule", {
  value: !0
});
er.MsigAccount = er.GenericAccount = void 0;
const Wu = pt;
class vs {
  constructor(t) {
    this.address = (0, Wu.convertToAddressObject)(t.address), this.abi = typeof t.abi == "string" ? t.abi : JSON.stringify(t.abi), this.prepareMessageImpl = t.prepareMessage, this.publicKey = t.publicKey
  }
  async fetchPublicKey(t) {
    return this.publicKey != null ? this.publicKey : (this.publicKey = await t.fetchPublicKey(this.address), this.publicKey)
  }
  async prepareMessage(t, n) {
    const r = await this.fetchPublicKey(n),
      i = await n.getSigner(r),
      {
        method: o,
        params: a,
        stateInit: s
      } = await this.prepareMessageImpl(t, n);
    return n.createExternalMessage({
      address: this.address,
      signer: i,
      timeout: t.timeout,
      abi: this.abi,
      method: o,
      params: a,
      stateInit: s,
      signatureId: t.signatureId
    })
  }
}
er.GenericAccount = vs;
class Yu extends vs {
  constructor(t) {
    const n = t.type === "multisig2";
    super({
      address: t.address,
      publicKey: t.publicKey,
      abi: n ? Ju : Xu,
      prepareMessage: async (r, i) => {
        if (!n && r.stateInit != null) throw new Error("Old multisig contract does not support state init in an internal message");
        const o = r.payload ? i.encodeInternalInput(r.payload) : "";
        return n && r.stateInit != null ? {
          method: "submitTransaction",
          params: {
            dest: r.recipient,
            value: r.amount,
            bounce: r.bounce,
            allBalance: !1,
            payload: o,
            stateInit: r.stateInit
          }
        } : {
          method: "sendTransaction",
          params: {
            dest: r.recipient,
            value: r.amount,
            bounce: r.bounce,
            flags: 3,
            payload: o
          }
        }
      }
    })
  }
}
er.MsigAccount = Yu;
const Xu = `{
  "ABI version": 2,
  "header": ["pubkey", "time", "expire"],
  "functions": [{
    "name": "sendTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"},
      {"name":"flags","type":"uint8"},
      {"name":"payload","type":"cell"}
    ],
    "outputs": []
  }],
  "events": []
}`,
  Ju = `{
  "ABI version": 2,
  "version": "2.3",
  "header": ["pubkey", "time", "expire"],
  "functions": [{
    "name": "sendTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"},
      {"name":"flags","type":"uint8"},
      {"name":"payload","type":"cell"}
    ],
    "outputs": []
  }, {
    "name": "submitTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"},
      {"name":"allBalance","type":"bool"},
      {"name":"payload","type":"cell"},
      {"name":"stateInit","type":"optional(cell)"}
    ],
    "outputs": []
  }],
  "events": []
}`;
var gi = {},
  ks = {
    exports: {}
  };
(function(e) {
  (function(t) {
    var n, r = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
      i = Math.ceil,
      o = Math.floor,
      a = "[BigNumber Error] ",
      s = a + "Number primitive has more than 15 significant digits: ",
      c = 1e14,
      f = 14,
      u = 9007199254740991,
      _ = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
      B = 1e7,
      y = 1e9;

    function S(k) {
      var T, J, ne, q = he.prototype = {
          constructor: he,
          toString: null,
          valueOf: null
        },
        we = new he(1),
        ke = 20,
        V = 4,
        z = -7,
        ie = 21,
        ve = -1e7,
        Ce = 1e7,
        Ee = !1,
        F = 1,
        Ve = 0,
        Fe = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: " ",
          suffix: ""
        },
        gt = "0123456789abcdefghijklmnopqrstuvwxyz",
        on = !0;

      function he(w, C) {
        var O, W, N, H, X, L, K, Y, G = this;
        if (!(G instanceof he)) return new he(w, C);
        if (C == null) {
          if (w && w._isBigNumber === !0) {
            G.s = w.s, !w.c || w.e > Ce ? G.c = G.e = null : w.e < ve ? G.c = [G.e = 0] : (G.e = w.e, G.c = w.c.slice());
            return
          }
          if ((L = typeof w == "number") && w * 0 == 0) {
            if (G.s = 1 / w < 0 ? (w = -w, -1) : 1, w === ~~w) {
              for (H = 0, X = w; X >= 10; X /= 10, H++);
              H > Ce ? G.c = G.e = null : (G.e = H, G.c = [w]);
              return
            }
            Y = String(w)
          } else {
            if (!r.test(Y = String(w))) return ne(G, Y, L);
            G.s = Y.charCodeAt(0) == 45 ? (Y = Y.slice(1), -1) : 1
          }(H = Y.indexOf(".")) > -1 && (Y = Y.replace(".", "")), (X = Y.search(/e/i)) > 0 ? (H < 0 && (H = X), H += +Y.slice(X + 1), Y = Y.substring(0, X)) : H < 0 && (H = Y.length)
        } else {
          if (M(C, 2, gt.length, "Base"), C == 10 && on) return G = new he(w), st(G, ke + G.e + 1, V);
          if (Y = String(w), L = typeof w == "number") {
            if (w * 0 != 0) return ne(G, Y, L, C);
            if (G.s = 1 / w < 0 ? (Y = Y.slice(1), -1) : 1, he.DEBUG && Y.replace(/^0\.0*|\./, "").length > 15) throw Error(s + w)
          } else G.s = Y.charCodeAt(0) === 45 ? (Y = Y.slice(1), -1) : 1;
          for (O = gt.slice(0, C), H = X = 0, K = Y.length; X < K; X++)
            if (O.indexOf(W = Y.charAt(X)) < 0) {
              if (W == ".") {
                if (X > H) {
                  H = K;
                  continue
                }
              } else if (!N && (Y == Y.toUpperCase() && (Y = Y.toLowerCase()) || Y == Y.toLowerCase() && (Y = Y.toUpperCase()))) {
                N = !0, X = -1, H = 0;
                continue
              }
              return ne(G, String(w), L, C)
            } L = !1, Y = J(Y, C, 10, G.s), (H = Y.indexOf(".")) > -1 ? Y = Y.replace(".", "") : H = Y.length
        }
        for (X = 0; Y.charCodeAt(X) === 48; X++);
        for (K = Y.length; Y.charCodeAt(--K) === 48;);
        if (Y = Y.slice(X, ++K)) {
          if (K -= X, L && he.DEBUG && K > 15 && (w > u || w !== o(w))) throw Error(s + G.s * w);
          if ((H = H - X - 1) > Ce) G.c = G.e = null;
          else if (H < ve) G.c = [G.e = 0];
          else {
            if (G.e = H, G.c = [], X = (H + 1) % f, H < 0 && (X += f), X < K) {
              for (X && G.c.push(+Y.slice(0, X)), K -= f; X < K;) G.c.push(+Y.slice(X, X += f));
              X = f - (Y = Y.slice(X)).length
            } else X -= K;
            for (; X--; Y += "0");
            G.c.push(+Y)
          }
        } else G.c = [G.e = 0]
      }
      he.clone = S, he.ROUND_UP = 0, he.ROUND_DOWN = 1, he.ROUND_CEIL = 2, he.ROUND_FLOOR = 3, he.ROUND_HALF_UP = 4, he.ROUND_HALF_DOWN = 5, he.ROUND_HALF_EVEN = 6, he.ROUND_HALF_CEIL = 7, he.ROUND_HALF_FLOOR = 8, he.EUCLID = 9, he.config = he.set = function(w) {
        var C, O;
        if (w != null)
          if (typeof w == "object") {
            if (w.hasOwnProperty(C = "DECIMAL_PLACES") && (O = w[C], M(O, 0, y, C), ke = O), w.hasOwnProperty(C = "ROUNDING_MODE") && (O = w[C], M(O, 0, 8, C), V = O), w.hasOwnProperty(C = "EXPONENTIAL_AT") && (O = w[C], O && O.pop ? (M(O[0], -y, 0, C), M(O[1], 0, y, C), z = O[0], ie = O[1]) : (M(O, -y, y, C), z = -(ie = O < 0 ? -O : O))), w.hasOwnProperty(C = "RANGE"))
              if (O = w[C], O && O.pop) M(O[0], -y, -1, C), M(O[1], 1, y, C), ve = O[0], Ce = O[1];
              else if (M(O, -y, y, C), O) ve = -(Ce = O < 0 ? -O : O);
            else throw Error(a + C + " cannot be zero: " + O);
            if (w.hasOwnProperty(C = "CRYPTO"))
              if (O = w[C], O === !!O)
                if (O)
                  if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) Ee = O;
                  else throw Ee = !O, Error(a + "crypto unavailable");
            else Ee = O;
            else throw Error(a + C + " not true or false: " + O);
            if (w.hasOwnProperty(C = "MODULO_MODE") && (O = w[C], M(O, 0, 9, C), F = O), w.hasOwnProperty(C = "POW_PRECISION") && (O = w[C], M(O, 0, y, C), Ve = O), w.hasOwnProperty(C = "FORMAT"))
              if (O = w[C], typeof O == "object") Fe = O;
              else throw Error(a + C + " not an object: " + O);
            if (w.hasOwnProperty(C = "ALPHABET"))
              if (O = w[C], typeof O == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(O)) on = O.slice(0, 10) == "0123456789", gt = O;
              else throw Error(a + C + " invalid: " + O)
          } else throw Error(a + "Object expected: " + w);
        return {
          DECIMAL_PLACES: ke,
          ROUNDING_MODE: V,
          EXPONENTIAL_AT: [z, ie],
          RANGE: [ve, Ce],
          CRYPTO: Ee,
          MODULO_MODE: F,
          POW_PRECISION: Ve,
          FORMAT: Fe,
          ALPHABET: gt
        }
      }, he.isBigNumber = function(w) {
        if (!w || w._isBigNumber !== !0) return !1;
        if (!he.DEBUG) return !0;
        var C, O, W = w.c,
          N = w.e,
          H = w.s;
        e: if ({}.toString.call(W) == "[object Array]") {
          if ((H === 1 || H === -1) && N >= -y && N <= y && N === o(N)) {
            if (W[0] === 0) {
              if (N === 0 && W.length === 1) return !0;
              break e
            }
            if (C = (N + 1) % f, C < 1 && (C += f), String(W[0]).length == C) {
              for (C = 0; C < W.length; C++)
                if (O = W[C], O < 0 || O >= c || O !== o(O)) break e;
              if (O !== 0) return !0
            }
          }
        } else if (W === null && N === null && (H === null || H === 1 || H === -1)) return !0;
        throw Error(a + "Invalid BigNumber: " + w)
      }, he.maximum = he.max = function() {
        return ot(arguments, -1)
      }, he.minimum = he.min = function() {
        return ot(arguments, 1)
      }, he.random = function() {
        var w = 9007199254740992,
          C = Math.random() * w & 2097151 ? function() {
            return o(Math.random() * w)
          } : function() {
            return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
          };
        return function(O) {
          var W, N, H, X, L, K = 0,
            Y = [],
            G = new he(we);
          if (O == null ? O = ke : M(O, 0, y), X = i(O / f), Ee)
            if (crypto.getRandomValues) {
              for (W = crypto.getRandomValues(new Uint32Array(X *= 2)); K < X;) L = W[K] * 131072 + (W[K + 1] >>> 11), L >= 9e15 ? (N = crypto.getRandomValues(new Uint32Array(2)), W[K] = N[0], W[K + 1] = N[1]) : (Y.push(L % 1e14), K += 2);
              K = X / 2
            } else if (crypto.randomBytes) {
            for (W = crypto.randomBytes(X *= 7); K < X;) L = (W[K] & 31) * 281474976710656 + W[K + 1] * 1099511627776 + W[K + 2] * 4294967296 + W[K + 3] * 16777216 + (W[K + 4] << 16) + (W[K + 5] << 8) + W[K + 6], L >= 9e15 ? crypto.randomBytes(7).copy(W, K) : (Y.push(L % 1e14), K += 7);
            K = X / 7
          } else throw Ee = !1, Error(a + "crypto unavailable");
          if (!Ee)
            for (; K < X;) L = C(), L < 9e15 && (Y[K++] = L % 1e14);
          for (X = Y[--K], O %= f, X && O && (L = _[f - O], Y[K] = o(X / L) * L); Y[K] === 0; Y.pop(), K--);
          if (K < 0) Y = [H = 0];
          else {
            for (H = -1; Y[0] === 0; Y.splice(0, 1), H -= f);
            for (K = 1, L = Y[0]; L >= 10; L /= 10, K++);
            K < f && (H -= f - K)
          }
          return G.e = H, G.c = Y, G
        }
      }(), he.sum = function() {
        for (var w = 1, C = arguments, O = new he(C[0]); w < C.length;) O = O.plus(C[w++]);
        return O
      }, J = function() {
        var w = "0123456789";

        function C(O, W, N, H) {
          for (var X, L = [0], K, Y = 0, G = O.length; Y < G;) {
            for (K = L.length; K--; L[K] *= W);
            for (L[0] += H.indexOf(O.charAt(Y++)), X = 0; X < L.length; X++) L[X] > N - 1 && (L[X + 1] == null && (L[X + 1] = 0), L[X + 1] += L[X] / N | 0, L[X] %= N)
          }
          return L.reverse()
        }
        return function(O, W, N, H, X) {
          var L, K, Y, G, ee, Ae, be, Be, A = O.indexOf("."),
            g = ke,
            I = V;
          for (A >= 0 && (G = Ve, Ve = 0, O = O.replace(".", ""), Be = new he(W), Ae = Be.pow(O.length - A), Ve = G, Be.c = C(P(v(Ae.c), Ae.e, "0"), 10, N, w), Be.e = Be.c.length), be = C(O, W, N, X ? (L = gt, w) : (L = w, gt)), Y = G = be.length; be[--G] == 0; be.pop());
          if (!be[0]) return L.charAt(0);
          if (A < 0 ? --Y : (Ae.c = be, Ae.e = Y, Ae.s = H, Ae = T(Ae, Be, g, I, N), be = Ae.c, ee = Ae.r, Y = Ae.e), K = Y + g + 1, A = be[K], G = N / 2, ee = ee || K < 0 || be[K + 1] != null, ee = I < 4 ? (A != null || ee) && (I == 0 || I == (Ae.s < 0 ? 3 : 2)) : A > G || A == G && (I == 4 || ee || I == 6 && be[K - 1] & 1 || I == (Ae.s < 0 ? 8 : 7)), K < 1 || !be[0]) O = ee ? P(L.charAt(1), -g, L.charAt(0)) : L.charAt(0);
          else {
            if (be.length = K, ee)
              for (--N; ++be[--K] > N;) be[K] = 0, K || (++Y, be = [1].concat(be));
            for (G = be.length; !be[--G];);
            for (A = 0, O = ""; A <= G; O += L.charAt(be[A++]));
            O = P(O, Y, L.charAt(0))
          }
          return O
        }
      }(), T = function() {
        function w(W, N, H) {
          var X, L, K, Y, G = 0,
            ee = W.length,
            Ae = N % B,
            be = N / B | 0;
          for (W = W.slice(); ee--;) K = W[ee] % B, Y = W[ee] / B | 0, X = be * K + Y * Ae, L = Ae * K + X % B * B + G, G = (L / H | 0) + (X / B | 0) + be * Y, W[ee] = L % H;
          return G && (W = [G].concat(W)), W
        }

        function C(W, N, H, X) {
          var L, K;
          if (H != X) K = H > X ? 1 : -1;
          else
            for (L = K = 0; L < H; L++)
              if (W[L] != N[L]) {
                K = W[L] > N[L] ? 1 : -1;
                break
              } return K
        }

        function O(W, N, H, X) {
          for (var L = 0; H--;) W[H] -= L, L = W[H] < N[H] ? 1 : 0, W[H] = L * X + W[H] - N[H];
          for (; !W[0] && W.length > 1; W.splice(0, 1));
        }
        return function(W, N, H, X, L) {
          var K, Y, G, ee, Ae, be, Be, A, g, I, E, j, b, Q, te, re, se, ye = W.s == N.s ? 1 : -1,
            ae = W.c,
            le = N.c;
          if (!ae || !ae[0] || !le || !le[0]) return new he(!W.s || !N.s || (ae ? le && ae[0] == le[0] : !le) ? NaN : ae && ae[0] == 0 || !le ? ye * 0 : ye / 0);
          for (A = new he(ye), g = A.c = [], Y = W.e - N.e, ye = H + Y + 1, L || (L = c, Y = m(W.e / f) - m(N.e / f), ye = ye / f | 0), G = 0; le[G] == (ae[G] || 0); G++);
          if (le[G] > (ae[G] || 0) && Y--, ye < 0) g.push(1), ee = !0;
          else {
            for (Q = ae.length, re = le.length, G = 0, ye += 2, Ae = o(L / (le[0] + 1)), Ae > 1 && (le = w(le, Ae, L), ae = w(ae, Ae, L), re = le.length, Q = ae.length), b = re, I = ae.slice(0, re), E = I.length; E < re; I[E++] = 0);
            se = le.slice(), se = [0].concat(se), te = le[0], le[1] >= L / 2 && te++;
            do {
              if (Ae = 0, K = C(le, I, re, E), K < 0) {
                if (j = I[0], re != E && (j = j * L + (I[1] || 0)), Ae = o(j / te), Ae > 1)
                  for (Ae >= L && (Ae = L - 1), be = w(le, Ae, L), Be = be.length, E = I.length; C(be, I, Be, E) == 1;) Ae--, O(be, re < Be ? se : le, Be, L), Be = be.length, K = 1;
                else Ae == 0 && (K = Ae = 1), be = le.slice(), Be = be.length;
                if (Be < E && (be = [0].concat(be)), O(I, be, E, L), E = I.length, K == -1)
                  for (; C(le, I, re, E) < 1;) Ae++, O(I, re < E ? se : le, E, L), E = I.length
              } else K === 0 && (Ae++, I = [0]);
              g[G++] = Ae, I[0] ? I[E++] = ae[b] || 0 : (I = [ae[b]], E = 1)
            } while ((b++ < Q || I[0] != null) && ye--);
            ee = I[0] != null, g[0] || g.splice(0, 1)
          }
          if (L == c) {
            for (G = 1, ye = g[0]; ye >= 10; ye /= 10, G++);
            st(A, H + (A.e = G + Y * f - 1) + 1, X, ee)
          } else A.e = Y, A.r = +ee;
          return A
        }
      }();

      function sn(w, C, O, W) {
        var N, H, X, L, K;
        if (O == null ? O = V : M(O, 0, 8), !w.c) return w.toString();
        if (N = w.c[0], X = w.e, C == null) K = v(w.c), K = W == 1 || W == 2 && (X <= z || X >= ie) ? h(K, X) : P(K, X, "0");
        else if (w = st(new he(w), C, O), H = w.e, K = v(w.c), L = K.length, W == 1 || W == 2 && (C <= H || H <= z)) {
          for (; L < C; K += "0", L++);
          K = h(K, H)
        } else if (C -= X, K = P(K, H, "0"), H + 1 > L) {
          if (--C > 0)
            for (K += "."; C--; K += "0");
        } else if (C += H - L, C > 0)
          for (H + 1 == L && (K += "."); C--; K += "0");
        return w.s < 0 && N ? "-" + K : K
      }

      function ot(w, C) {
        for (var O, W, N = 1, H = new he(w[0]); N < w.length; N++) W = new he(w[N]), (!W.s || (O = x(H, W)) === C || O === 0 && H.s === C) && (H = W);
        return H
      }

      function ln(w, C, O) {
        for (var W = 1, N = C.length; !C[--N]; C.pop());
        for (N = C[0]; N >= 10; N /= 10, W++);
        return (O = W + O * f - 1) > Ce ? w.c = w.e = null : O < ve ? w.c = [w.e = 0] : (w.e = O, w.c = C), w
      }
      ne = function() {
        var w = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
          C = /^([^.]+)\.$/,
          O = /^\.([^.]+)$/,
          W = /^-?(Infinity|NaN)$/,
          N = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(H, X, L, K) {
          var Y, G = L ? X : X.replace(N, "");
          if (W.test(G)) H.s = isNaN(G) ? null : G < 0 ? -1 : 1;
          else {
            if (!L && (G = G.replace(w, function(ee, Ae, be) {
                return Y = (be = be.toLowerCase()) == "x" ? 16 : be == "b" ? 2 : 8, !K || K == Y ? Ae : ee
              }), K && (Y = K, G = G.replace(C, "$1").replace(O, "0.$1")), X != G)) return new he(G, Y);
            if (he.DEBUG) throw Error(a + "Not a" + (K ? " base " + K : "") + " number: " + X);
            H.s = null
          }
          H.c = H.e = null
        }
      }();

      function st(w, C, O, W) {
        var N, H, X, L, K, Y, G, ee = w.c,
          Ae = _;
        if (ee) {
          e: {
            for (N = 1, L = ee[0]; L >= 10; L /= 10, N++);
            if (H = C - N, H < 0) H += f,
            X = C,
            K = ee[Y = 0],
            G = o(K / Ae[N - X - 1] % 10);
            else if (Y = i((H + 1) / f), Y >= ee.length)
              if (W) {
                for (; ee.length <= Y; ee.push(0));
                K = G = 0, N = 1, H %= f, X = H - f + 1
              } else break e;
            else {
              for (K = L = ee[Y], N = 1; L >= 10; L /= 10, N++);
              H %= f, X = H - f + N, G = X < 0 ? 0 : o(K / Ae[N - X - 1] % 10)
            }
            if (W = W || C < 0 || ee[Y + 1] != null || (X < 0 ? K : K % Ae[N - X - 1]), W = O < 4 ? (G || W) && (O == 0 || O == (w.s < 0 ? 3 : 2)) : G > 5 || G == 5 && (O == 4 || W || O == 6 && (H > 0 ? X > 0 ? K / Ae[N - X] : 0 : ee[Y - 1]) % 10 & 1 || O == (w.s < 0 ? 8 : 7)), C < 1 || !ee[0]) return ee.length = 0,
            W ? (C -= w.e + 1, ee[0] = Ae[(f - C % f) % f], w.e = -C || 0) : ee[0] = w.e = 0,
            w;
            if (H == 0 ? (ee.length = Y, L = 1, Y--) : (ee.length = Y + 1, L = Ae[f - H], ee[Y] = X > 0 ? o(K / Ae[N - X] % Ae[X]) * L : 0), W)
              for (;;)
                if (Y == 0) {
                  for (H = 1, X = ee[0]; X >= 10; X /= 10, H++);
                  for (X = ee[0] += L, L = 1; X >= 10; X /= 10, L++);
                  H != L && (w.e++, ee[0] == c && (ee[0] = 1));
                  break
                } else {
                  if (ee[Y] += L, ee[Y] != c) break;
                  ee[Y--] = 0, L = 1
                } for (H = ee.length; ee[--H] === 0; ee.pop());
          }
          w.e > Ce ? w.c = w.e = null : w.e < ve && (w.c = [w.e = 0])
        }
        return w
      }

      function nt(w) {
        var C, O = w.e;
        return O === null ? w.toString() : (C = v(w.c), C = O <= z || O >= ie ? h(C, O) : P(C, O, "0"), w.s < 0 ? "-" + C : C)
      }
      return q.absoluteValue = q.abs = function() {
        var w = new he(this);
        return w.s < 0 && (w.s = 1), w
      }, q.comparedTo = function(w, C) {
        return x(this, new he(w, C))
      }, q.decimalPlaces = q.dp = function(w, C) {
        var O, W, N, H = this;
        if (w != null) return M(w, 0, y), C == null ? C = V : M(C, 0, 8), st(new he(H), w + H.e + 1, C);
        if (!(O = H.c)) return null;
        if (W = ((N = O.length - 1) - m(this.e / f)) * f, N = O[N])
          for (; N % 10 == 0; N /= 10, W--);
        return W < 0 && (W = 0), W
      }, q.dividedBy = q.div = function(w, C) {
        return T(this, new he(w, C), ke, V)
      }, q.dividedToIntegerBy = q.idiv = function(w, C) {
        return T(this, new he(w, C), 0, 1)
      }, q.exponentiatedBy = q.pow = function(w, C) {
        var O, W, N, H, X, L, K, Y, G, ee = this;
        if (w = new he(w), w.c && !w.isInteger()) throw Error(a + "Exponent not an integer: " + nt(w));
        if (C != null && (C = new he(C)), L = w.e > 14, !ee.c || !ee.c[0] || ee.c[0] == 1 && !ee.e && ee.c.length == 1 || !w.c || !w.c[0]) return G = new he(Math.pow(+nt(ee), L ? w.s * (2 - p(w)) : +nt(w))), C ? G.mod(C) : G;
        if (K = w.s < 0, C) {
          if (C.c ? !C.c[0] : !C.s) return new he(NaN);
          W = !K && ee.isInteger() && C.isInteger(), W && (ee = ee.mod(C))
        } else {
          if (w.e > 9 && (ee.e > 0 || ee.e < -1 || (ee.e == 0 ? ee.c[0] > 1 || L && ee.c[1] >= 24e7 : ee.c[0] < 8e13 || L && ee.c[0] <= 9999975e7))) return H = ee.s < 0 && p(w) ? -0 : 0, ee.e > -1 && (H = 1 / H), new he(K ? 1 / H : H);
          Ve && (H = i(Ve / f + 2))
        }
        for (L ? (O = new he(.5), K && (w.s = 1), Y = p(w)) : (N = Math.abs(+nt(w)), Y = N % 2), G = new he(we);;) {
          if (Y) {
            if (G = G.times(ee), !G.c) break;
            H ? G.c.length > H && (G.c.length = H) : W && (G = G.mod(C))
          }
          if (N) {
            if (N = o(N / 2), N === 0) break;
            Y = N % 2
          } else if (w = w.times(O), st(w, w.e + 1, 1), w.e > 14) Y = p(w);
          else {
            if (N = +nt(w), N === 0) break;
            Y = N % 2
          }
          ee = ee.times(ee), H ? ee.c && ee.c.length > H && (ee.c.length = H) : W && (ee = ee.mod(C))
        }
        return W ? G : (K && (G = we.div(G)), C ? G.mod(C) : H ? st(G, Ve, V, X) : G)
      }, q.integerValue = function(w) {
        var C = new he(this);
        return w == null ? w = V : M(w, 0, 8), st(C, C.e + 1, w)
      }, q.isEqualTo = q.eq = function(w, C) {
        return x(this, new he(w, C)) === 0
      }, q.isFinite = function() {
        return !!this.c
      }, q.isGreaterThan = q.gt = function(w, C) {
        return x(this, new he(w, C)) > 0
      }, q.isGreaterThanOrEqualTo = q.gte = function(w, C) {
        return (C = x(this, new he(w, C))) === 1 || C === 0
      }, q.isInteger = function() {
        return !!this.c && m(this.e / f) > this.c.length - 2
      }, q.isLessThan = q.lt = function(w, C) {
        return x(this, new he(w, C)) < 0
      }, q.isLessThanOrEqualTo = q.lte = function(w, C) {
        return (C = x(this, new he(w, C))) === -1 || C === 0
      }, q.isNaN = function() {
        return !this.s
      }, q.isNegative = function() {
        return this.s < 0
      }, q.isPositive = function() {
        return this.s > 0
      }, q.isZero = function() {
        return !!this.c && this.c[0] == 0
      }, q.minus = function(w, C) {
        var O, W, N, H, X = this,
          L = X.s;
        if (w = new he(w, C), C = w.s, !L || !C) return new he(NaN);
        if (L != C) return w.s = -C, X.plus(w);
        var K = X.e / f,
          Y = w.e / f,
          G = X.c,
          ee = w.c;
        if (!K || !Y) {
          if (!G || !ee) return G ? (w.s = -C, w) : new he(ee ? X : NaN);
          if (!G[0] || !ee[0]) return ee[0] ? (w.s = -C, w) : new he(G[0] ? X : V == 3 ? -0 : 0)
        }
        if (K = m(K), Y = m(Y), G = G.slice(), L = K - Y) {
          for ((H = L < 0) ? (L = -L, N = G) : (Y = K, N = ee), N.reverse(), C = L; C--; N.push(0));
          N.reverse()
        } else
          for (W = (H = (L = G.length) < (C = ee.length)) ? L : C, L = C = 0; C < W; C++)
            if (G[C] != ee[C]) {
              H = G[C] < ee[C];
              break
            } if (H && (N = G, G = ee, ee = N, w.s = -w.s), C = (W = ee.length) - (O = G.length), C > 0)
          for (; C--; G[O++] = 0);
        for (C = c - 1; W > L;) {
          if (G[--W] < ee[W]) {
            for (O = W; O && !G[--O]; G[O] = C);
            --G[O], G[W] += c
          }
          G[W] -= ee[W]
        }
        for (; G[0] == 0; G.splice(0, 1), --Y);
        return G[0] ? ln(w, G, Y) : (w.s = V == 3 ? -1 : 1, w.c = [w.e = 0], w)
      }, q.modulo = q.mod = function(w, C) {
        var O, W, N = this;
        return w = new he(w, C), !N.c || !w.s || w.c && !w.c[0] ? new he(NaN) : !w.c || N.c && !N.c[0] ? new he(N) : (F == 9 ? (W = w.s, w.s = 1, O = T(N, w, 0, 3), w.s = W, O.s *= W) : O = T(N, w, 0, F), w = N.minus(O.times(w)), !w.c[0] && F == 1 && (w.s = N.s), w)
      }, q.multipliedBy = q.times = function(w, C) {
        var O, W, N, H, X, L, K, Y, G, ee, Ae, be, Be, A, g, I = this,
          E = I.c,
          j = (w = new he(w, C)).c;
        if (!E || !j || !E[0] || !j[0]) return !I.s || !w.s || E && !E[0] && !j || j && !j[0] && !E ? w.c = w.e = w.s = null : (w.s *= I.s, !E || !j ? w.c = w.e = null : (w.c = [0], w.e = 0)), w;
        for (W = m(I.e / f) + m(w.e / f), w.s *= I.s, K = E.length, ee = j.length, K < ee && (Be = E, E = j, j = Be, N = K, K = ee, ee = N), N = K + ee, Be = []; N--; Be.push(0));
        for (A = c, g = B, N = ee; --N >= 0;) {
          for (O = 0, Ae = j[N] % g, be = j[N] / g | 0, X = K, H = N + X; H > N;) Y = E[--X] % g, G = E[X] / g | 0, L = be * Y + G * Ae, Y = Ae * Y + L % g * g + Be[H] + O, O = (Y / A | 0) + (L / g | 0) + be * G, Be[H--] = Y % A;
          Be[H] = O
        }
        return O ? ++W : Be.splice(0, 1), ln(w, Be, W)
      }, q.negated = function() {
        var w = new he(this);
        return w.s = -w.s || null, w
      }, q.plus = function(w, C) {
        var O, W = this,
          N = W.s;
        if (w = new he(w, C), C = w.s, !N || !C) return new he(NaN);
        if (N != C) return w.s = -C, W.minus(w);
        var H = W.e / f,
          X = w.e / f,
          L = W.c,
          K = w.c;
        if (!H || !X) {
          if (!L || !K) return new he(N / 0);
          if (!L[0] || !K[0]) return K[0] ? w : new he(L[0] ? W : N * 0)
        }
        if (H = m(H), X = m(X), L = L.slice(), N = H - X) {
          for (N > 0 ? (X = H, O = K) : (N = -N, O = L), O.reverse(); N--; O.push(0));
          O.reverse()
        }
        for (N = L.length, C = K.length, N - C < 0 && (O = K, K = L, L = O, C = N), N = 0; C;) N = (L[--C] = L[C] + K[C] + N) / c | 0, L[C] = c === L[C] ? 0 : L[C] % c;
        return N && (L = [N].concat(L), ++X), ln(w, L, X)
      }, q.precision = q.sd = function(w, C) {
        var O, W, N, H = this;
        if (w != null && w !== !!w) return M(w, 1, y), C == null ? C = V : M(C, 0, 8), st(new he(H), w, C);
        if (!(O = H.c)) return null;
        if (N = O.length - 1, W = N * f + 1, N = O[N]) {
          for (; N % 10 == 0; N /= 10, W--);
          for (N = O[0]; N >= 10; N /= 10, W++);
        }
        return w && H.e + 1 > W && (W = H.e + 1), W
      }, q.shiftedBy = function(w) {
        return M(w, -u, u), this.times("1e" + w)
      }, q.squareRoot = q.sqrt = function() {
        var w, C, O, W, N, H = this,
          X = H.c,
          L = H.s,
          K = H.e,
          Y = ke + 4,
          G = new he("0.5");
        if (L !== 1 || !X || !X[0]) return new he(!L || L < 0 && (!X || X[0]) ? NaN : X ? H : 1 / 0);
        if (L = Math.sqrt(+nt(H)), L == 0 || L == 1 / 0 ? (C = v(X), (C.length + K) % 2 == 0 && (C += "0"), L = Math.sqrt(+C), K = m((K + 1) / 2) - (K < 0 || K % 2), L == 1 / 0 ? C = "5e" + K : (C = L.toExponential(), C = C.slice(0, C.indexOf("e") + 1) + K), O = new he(C)) : O = new he(L + ""), O.c[0]) {
          for (K = O.e, L = K + Y, L < 3 && (L = 0);;)
            if (N = O, O = G.times(N.plus(T(H, N, Y, 1))), v(N.c).slice(0, L) === (C = v(O.c)).slice(0, L))
              if (O.e < K && --L, C = C.slice(L - 3, L + 1), C == "9999" || !W && C == "4999") {
                if (!W && (st(N, N.e + ke + 2, 0), N.times(N).eq(H))) {
                  O = N;
                  break
                }
                Y += 4, L += 4, W = 1
              } else {
                (!+C || !+C.slice(1) && C.charAt(0) == "5") && (st(O, O.e + ke + 2, 1), w = !O.times(O).eq(H));
                break
              }
        }
        return st(O, O.e + ke + 1, V, w)
      }, q.toExponential = function(w, C) {
        return w != null && (M(w, 0, y), w++), sn(this, w, C, 1)
      }, q.toFixed = function(w, C) {
        return w != null && (M(w, 0, y), w = w + this.e + 1), sn(this, w, C)
      }, q.toFormat = function(w, C, O) {
        var W, N = this;
        if (O == null) w != null && C && typeof C == "object" ? (O = C, C = null) : w && typeof w == "object" ? (O = w, w = C = null) : O = Fe;
        else if (typeof O != "object") throw Error(a + "Argument not an object: " + O);
        if (W = N.toFixed(w, C), N.c) {
          var H, X = W.split("."),
            L = +O.groupSize,
            K = +O.secondaryGroupSize,
            Y = O.groupSeparator || "",
            G = X[0],
            ee = X[1],
            Ae = N.s < 0,
            be = Ae ? G.slice(1) : G,
            Be = be.length;
          if (K && (H = L, L = K, K = H, Be -= H), L > 0 && Be > 0) {
            for (H = Be % L || L, G = be.substr(0, H); H < Be; H += L) G += Y + be.substr(H, L);
            K > 0 && (G += Y + be.slice(H)), Ae && (G = "-" + G)
          }
          W = ee ? G + (O.decimalSeparator || "") + ((K = +O.fractionGroupSize) ? ee.replace(new RegExp("\\d{" + K + "}\\B", "g"), "$&" + (O.fractionGroupSeparator || "")) : ee) : G
        }
        return (O.prefix || "") + W + (O.suffix || "")
      }, q.toFraction = function(w) {
        var C, O, W, N, H, X, L, K, Y, G, ee, Ae, be = this,
          Be = be.c;
        if (w != null && (L = new he(w), !L.isInteger() && (L.c || L.s !== 1) || L.lt(we))) throw Error(a + "Argument " + (L.isInteger() ? "out of range: " : "not an integer: ") + nt(L));
        if (!Be) return new he(be);
        for (C = new he(we), Y = O = new he(we), W = K = new he(we), Ae = v(Be), H = C.e = Ae.length - be.e - 1, C.c[0] = _[(X = H % f) < 0 ? f + X : X], w = !w || L.comparedTo(C) > 0 ? H > 0 ? C : Y : L, X = Ce, Ce = 1 / 0, L = new he(Ae), K.c[0] = 0; G = T(L, C, 0, 1), N = O.plus(G.times(W)), N.comparedTo(w) != 1;) O = W, W = N, Y = K.plus(G.times(N = Y)), K = N, C = L.minus(G.times(N = C)), L = N;
        return N = T(w.minus(O), W, 0, 1), K = K.plus(N.times(Y)), O = O.plus(N.times(W)), K.s = Y.s = be.s, H = H * 2, ee = T(Y, W, H, V).minus(be).abs().comparedTo(T(K, O, H, V).minus(be).abs()) < 1 ? [Y, W] : [K, O], Ce = X, ee
      }, q.toNumber = function() {
        return +nt(this)
      }, q.toPrecision = function(w, C) {
        return w != null && M(w, 1, y), sn(this, w, C, 2)
      }, q.toString = function(w) {
        var C, O = this,
          W = O.s,
          N = O.e;
        return N === null ? W ? (C = "Infinity", W < 0 && (C = "-" + C)) : C = "NaN" : (w == null ? C = N <= z || N >= ie ? h(v(O.c), N) : P(v(O.c), N, "0") : w === 10 && on ? (O = st(new he(O), ke + N + 1, V), C = P(v(O.c), O.e, "0")) : (M(w, 2, gt.length, "Base"), C = J(P(v(O.c), N, "0"), 10, w, W, !0)), W < 0 && O.c[0] && (C = "-" + C)), C
      }, q.valueOf = q.toJSON = function() {
        return nt(this)
      }, q._isBigNumber = !0, k != null && he.set(k), he
    }

    function m(k) {
      var T = k | 0;
      return k > 0 || k === T ? T : T - 1
    }

    function v(k) {
      for (var T, J, ne = 1, q = k.length, we = k[0] + ""; ne < q;) {
        for (T = k[ne++] + "", J = f - T.length; J--; T = "0" + T);
        we += T
      }
      for (q = we.length; we.charCodeAt(--q) === 48;);
      return we.slice(0, q + 1 || 1)
    }

    function x(k, T) {
      var J, ne, q = k.c,
        we = T.c,
        ke = k.s,
        V = T.s,
        z = k.e,
        ie = T.e;
      if (!ke || !V) return null;
      if (J = q && !q[0], ne = we && !we[0], J || ne) return J ? ne ? 0 : -V : ke;
      if (ke != V) return ke;
      if (J = ke < 0, ne = z == ie, !q || !we) return ne ? 0 : !q ^ J ? 1 : -1;
      if (!ne) return z > ie ^ J ? 1 : -1;
      for (V = (z = q.length) < (ie = we.length) ? z : ie, ke = 0; ke < V; ke++)
        if (q[ke] != we[ke]) return q[ke] > we[ke] ^ J ? 1 : -1;
      return z == ie ? 0 : z > ie ^ J ? 1 : -1
    }

    function M(k, T, J, ne) {
      if (k < T || k > J || k !== o(k)) throw Error(a + (ne || "Argument") + (typeof k == "number" ? k < T || k > J ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(k))
    }

    function p(k) {
      var T = k.c.length - 1;
      return m(k.e / f) == T && k.c[T] % 2 != 0
    }

    function h(k, T) {
      return (k.length > 1 ? k.charAt(0) + "." + k.slice(1) : k) + (T < 0 ? "e" : "e+") + T
    }

    function P(k, T, J) {
      var ne, q;
      if (T < 0) {
        for (q = J + "."; ++T; q += J);
        k = q + k
      } else if (ne = k.length, ++T > ne) {
        for (q = J, T -= ne; --T; q += J);
        k += q
      } else T < ne && (k = k.slice(0, T) + "." + k.slice(T));
      return k
    }
    n = S(), n.default = n.BigNumber = n, e.exports ? e.exports = n : (t || (t = typeof self < "u" && self ? self : window), t.BigNumber = n)
  })(pe)
})(ks);
var Ma = ks.exports,
  Ss = pe && pe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
Object.defineProperty(gi, "__esModule", {
  value: !0
});
gi.WalletV3Account = void 0;
const Qu = nn,
  Cr = Ss(Ma),
  fa = Ss(St);
class Qr {
  static async computeAddress(t) {
    await fa.default.ensureNekotonLoaded();
    const n = t.publicKey instanceof Cr.default ? t.publicKey : new Cr.default(`0x${t.publicKey}`),
      r = fo(n).hash;
    return new Qu.Address(`${t.workchain!=null?t.workchain:0}:${r}`)
  }
  static async fromPubkey(t) {
    const n = new Cr.default(`0x${t.publicKey}`),
      r = await Qr.computeAddress({
        publicKey: n,
        workchain: t.workchain
      }),
      i = new Qr(r);
    return i.publicKey = n, i
  }
  constructor(t) {
    this.address = t
  }
  async fetchPublicKey(t) {
    let n = this.publicKey;
    return n == null && (n = this.publicKey = await t.fetchPublicKey(this.address).then(r => new Cr.default(`0x${r}`))), n.toString(16).padStart(64, "0")
  }
  async prepareMessage(t, n) {
    const {
      seqno: r,
      publicKey: i,
      stateInit: o
    } = await this.fetchState(n), a = await n.getSigner(i), s = n.nowSec + t.timeout, c = t.payload ? n.encodeInternalInput(t.payload) : void 0, f = n.encodeInternalMessage({
      dst: t.recipient,
      bounce: t.bounce,
      stateInit: t.stateInit,
      body: c,
      amount: t.amount
    }), u = {
      walletId: Cs,
      expireAt: s,
      seqno: r,
      flags: 3,
      message: f
    }, _ = n.packIntoCell({
      structure: As,
      data: u
    }).hash, B = await a.sign(_, t.signatureId), {
      signatureParts: y
    } = n.extendSignature(B);
    u.signatureHigh = y.high, u.signatureLow = y.low;
    const S = n.packIntoCell({
      structure: Zu,
      data: u
    }).boc;
    return n.createRawExternalMessage({
      address: this.address,
      body: S,
      stateInit: o,
      expireAt: s
    })
  }
  async fetchState(t) {
    let n, r;
    const i = await t.getFullContractState(this.address);
    if (i == null || !i.isDeployed) {
      if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
      n = fo(this.publicKey).boc, r = {
        seqno: 0,
        publicKey: this.publicKey
      }
    } else {
      const o = t.extractContractData(i.boc);
      if (o == null) throw new Error("Failed to extract contract data");
      r = qu(t, o)
    }
    if (this.publicKey == null) this.publicKey = r.publicKey;
    else if (!this.publicKey.eq(r.publicKey)) throw new Error("Public key mismatch");
    return {
      seqno: r.seqno,
      publicKey: r.publicKey.toString(16).padStart(64, "0"),
      stateInit: n
    }
  }
}
gi.WalletV3Account = Qr;
const qu = (e, t) => {
    const n = e.unpackFromCell({
      structure: Is,
      boc: t,
      allowPartial: !1
    });
    if (typeof n != "object" || typeof n.seqno != "string" || typeof n.publicKey != "string") throw new Error("Invalid contract data ");
    return {
      seqno: parseInt(n.seqno),
      publicKey: new Cr.default(n.publicKey)
    }
  },
  fo = e => {
    const t = fa.default.nekoton.packIntoCell(Is, {
      seqno: 0,
      walletId: Cs,
      publicKey: e.toFixed(0)
    }).boc;
    return fa.default.nekoton.mergeTvc(ed, t)
  },
  As = [{
    name: "walletId",
    type: "uint32"
  }, {
    name: "expireAt",
    type: "uint32"
  }, {
    name: "seqno",
    type: "uint32"
  }, {
    name: "flags",
    type: "uint8"
  }, {
    name: "message",
    type: "cell"
  }],
  Zu = [{
    name: "signatureHigh",
    type: "uint256"
  }, {
    name: "signatureLow",
    type: "uint256"
  }, ...As],
  Is = [{
    name: "seqno",
    type: "uint32"
  }, {
    name: "walletId",
    type: "uint32"
  }, {
    name: "publicKey",
    type: "uint256"
  }],
  ed = "te6ccgEBAQEAcQAA3v8AIN0gggFMl7ohggEznLqxn3Gw7UTQ0x/THzHXC//jBOCk8mCDCNcYINMf0x/TH/gjE7vyY+1E0NMf0x/T/9FRMrryoVFEuvKiBPkBVBBV+RDyo/gAkyDXSpbTB9QC+wDo0QGkyMsfyx/L/8ntVA==",
  Cs = 1269378442;
var mi = {},
  Bs = pe && pe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
Object.defineProperty(mi, "__esModule", {
  value: !0
});
mi.HighloadWalletV2 = void 0;
const td = nn,
  Br = Bs(Ma),
  ha = Bs(St),
  nd = pt;
class qr {
  static async computeAddress(t) {
    await ha.default.ensureNekotonLoaded();
    const n = t.publicKey instanceof Br.default ? t.publicKey : new Br.default(`0x${t.publicKey}`),
      r = ho(n).hash;
    return new td.Address(`${t.workchain!=null?t.workchain:0}:${r}`)
  }
  static async fromPubkey(t) {
    const n = new Br.default(`0x${t.publicKey}`),
      r = await qr.computeAddress({
        publicKey: n,
        workchain: t.workchain
      }),
      i = new qr(r);
    return i.publicKey = n, i
  }
  constructor(t) {
    this.address = (0, nd.convertToAddressObject)(t)
  }
  async fetchPublicKey(t) {
    let n = this.publicKey;
    return n == null && (n = this.publicKey = await t.fetchPublicKey(this.address).then(r => new Br.default(`0x${r}`))), n.toString(16).padStart(64, "0")
  }
  async prepareMessage(t, n) {
    const {
      publicKey: r,
      stateInit: i
    } = await this.fetchState(n), o = await n.getSigner(r), a = n.nowSec + t.timeout, s = t.payload ? n.encodeInternalInput(t.payload) : void 0, f = {
      messages: [
        [0, {
          flags: 3,
          message: n.encodeInternalMessage({
            dst: t.recipient,
            bounce: t.bounce,
            stateInit: t.stateInit,
            body: s,
            amount: t.amount
          })
        }]
      ]
    }, {
      boc: u,
      hash: _
    } = n.packIntoCell({
      structure: Ps,
      data: f
    });
    f.walletId = Es, f.expireAt = a, f.messagesHash = `0x${_.slice(-8)}`;
    const B = n.packIntoCell({
        structure: Ms,
        data: f
      }).hash,
      y = await o.sign(B, t.signatureId),
      {
        signatureParts: S
      } = n.extendSignature(y);
    f.signatureHigh = S.high, f.signatureLow = S.low;
    const m = n.packIntoCell({
      structure: id,
      data: f
    }).boc;
    return n.createRawExternalMessage({
      address: this.address.toString(),
      body: m,
      stateInit: i,
      expireAt: a
    })
  }
  async fetchState(t) {
    let n, r;
    const i = await t.getFullContractState(this.address);
    if (i == null || !i.isDeployed) {
      if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
      n = ho(this.publicKey).boc, r = this.publicKey
    } else if (this.publicKey == null) {
      const o = t.extractContractData(i.boc);
      if (o == null) throw new Error("Failed to extract contract data");
      r = rd(t, o).publicKey
    } else r = this.publicKey;
    return this.publicKey == null && (this.publicKey = r), {
      publicKey: r.toString(16).padStart(64, "0"),
      stateInit: n
    }
  }
}
mi.HighloadWalletV2 = qr;
const rd = (e, t) => {
    const n = e.unpackFromCell({
      structure: Ts,
      boc: t,
      allowPartial: !0
    });
    if (typeof n != "object" || typeof n.publicKey != "string") throw new Error("Invalid contract data");
    return {
      publicKey: new Br.default(n.publicKey)
    }
  },
  ho = e => {
    const t = ha.default.nekoton.packIntoCell(Ts, {
      walletId: Es,
      lastCleaned: 0,
      publicKey: e.toFixed(0),
      queries: !1
    }).boc;
    return ha.default.nekoton.mergeTvc(ad, t)
  },
  Ps = [{
    name: "messages",
    type: "map(uint16,tuple)",
    components: [{
      name: "flags",
      type: "uint8"
    }, {
      name: "message",
      type: "cell"
    }]
  }],
  Ms = [{
    name: "walletId",
    type: "uint32"
  }, {
    name: "expireAt",
    type: "uint32"
  }, {
    name: "messagesHash",
    type: "uint32"
  }, ...Ps],
  id = [{
    name: "signatureHigh",
    type: "uint256"
  }, {
    name: "signatureLow",
    type: "uint256"
  }, ...Ms],
  Ts = [{
    name: "walletId",
    type: "uint32"
  }, {
    name: "lastCleaned",
    type: "uint64"
  }, {
    name: "publicKey",
    type: "uint256"
  }, {
    name: "queries",
    type: "bool"
  }],
  ad = "te6ccgEBCQEA5QABFP8A9KQT9LzyyAsBAgEgBAIB6vKDCNcYINMf0z/4I6ofUyC58mPtRNDTH9M/0//0BNFTYIBA9A5voTHyYFFzuvKiB/kBVBCH+RDyowL0BNH4AH+OFiGAEPR4b6UgmALTB9QwAfsAkTLiAbPmW4MlochANIBA9EOK5jHIEssfE8s/y//0AMntVAMANCCAQPSWb6UyURCUMFMDud4gkzM2AZIyMOKzAgFICAUCASAHBgBBvl+XaiaGmPmOmf6f+Y+gJoqRBAIHoHN9CYyS2/yV3R8UABe9nOdqJoaa+Y64X/wABNAw",
  Es = 0;
var bi = {},
  Os = pe && pe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
Object.defineProperty(bi, "__esModule", {
  value: !0
});
bi.EverWalletAccount = void 0;
const od = nn,
  gr = Os(Ma),
  Zr = Os(St);
class ei {
  static async computeAddress(t) {
    await Zr.default.ensureNekotonLoaded();
    const n = t.publicKey instanceof gr.default ? t.publicKey : new gr.default(`0x${t.publicKey}`),
      r = po(n, t.nonce).hash;
    return new od.Address(`${t.workchain!=null?t.workchain:0}:${r}`)
  }
  static async fromPubkey(t) {
    const n = new gr.default(`0x${t.publicKey}`),
      r = await ei.computeAddress({
        publicKey: n,
        workchain: t.workchain,
        nonce: t.nonce
      }),
      i = new ei(r);
    return i.publicKey = n, i.nonce = t.nonce, i
  }
  constructor(t) {
    this.address = t
  }
  async fetchPublicKey(t) {
    let n = this.publicKey;
    return n == null && (n = this.publicKey = await t.fetchPublicKey(this.address).then(r => new gr.default(`0x${r}`)), this.isDeployed = !0), n.toString(16).padStart(64, "0")
  }
  async prepareMessage(t, n) {
    const {
      publicKey: r,
      stateInit: i
    } = await this.fetchState(n), o = await n.getSigner(r), a = t.payload ? n.encodeInternalInput(t.payload) : "";
    let s, c, f;
    return t.stateInit == null ? (s = ud, c = "sendTransaction", f = {
      dest: t.recipient,
      value: t.amount,
      bounce: t.bounce,
      flags: 3,
      payload: a
    }) : (s = dd, c = "sendTransactionRaw", f = {
      flags: 3,
      message: n.encodeInternalMessage({
        dst: t.recipient,
        bounce: t.bounce,
        stateInit: t.stateInit,
        body: a,
        amount: t.amount
      })
    }), n.createExternalMessage({
      address: this.address,
      signer: o,
      timeout: t.timeout,
      abi: s,
      method: c,
      params: f,
      stateInit: i,
      signatureId: t.signatureId
    })
  }
  async fetchState(t) {
    let n, r;
    if (this.isDeployed === !0 && this.publicKey != null) r = this.publicKey;
    else {
      const i = await t.getFullContractState(this.address);
      if (i == null || !i.isDeployed) {
        if (this.publicKey == null) throw new Error("Contract not deployed and public key was not specified");
        n = po(this.publicKey, this.nonce).boc, r = this.publicKey
      } else this.isDeployed = !0, r = new gr.default(`0x${Zr.default.nekoton.extractPublicKey(i.boc)}`);
      this.publicKey == null && (this.publicKey = r)
    }
    return {
      publicKey: r.toString(16).padStart(64, "0"),
      stateInit: n
    }
  }
}
bi.EverWalletAccount = ei;
const po = (e, t) => {
    let n, r;
    t != null ? (n = ld, r = {
      publicKey: e.toFixed(0),
      timestamp: 0,
      nonce: t
    }) : (n = sd, r = {
      publicKey: e.toFixed(0),
      timestamp: 0
    });
    const i = Zr.default.nekoton.packIntoCell(n, r).boc;
    return Zr.default.nekoton.mergeTvc(cd, i)
  },
  sd = [{
    name: "publicKey",
    type: "uint256"
  }, {
    name: "timestamp",
    type: "uint64"
  }],
  ld = [{
    name: "publicKey",
    type: "uint256"
  }, {
    name: "timestamp",
    type: "uint64"
  }, {
    name: "nonce",
    type: "uint32"
  }],
  cd = "te6cckEBBgEA/AABFP8A9KQT9LzyyAsBAgEgAgMABNIwAubycdcBAcAA8nqDCNcY7UTQgwfXAdcLP8j4KM8WI88WyfkAA3HXAQHDAJqDB9cBURO68uBk3oBA1wGAINcBgCDXAVQWdfkQ8qj4I7vyeWa++COBBwiggQPoqFIgvLHydAIgghBM7mRsuuMPAcjL/8s/ye1UBAUAmDAC10zQ+kCDBtcBcdcBeNcB10z4AHCAEASqAhSxyMsFUAXPFlAD+gLLaSLQIc8xIddJoIQJuZgzcAHLAFjPFpcwcQHLABLM4skB+wAAPoIQFp4+EbqOEfgAApMg10qXeNcB1AL7AOjRkzLyPOI+zYS/",
  ud = `{
  "ABI version": 2,
  "version": "2.3",
  "header": ["pubkey", "time", "expire"],
  "functions": [{
    "name": "sendTransaction",
    "inputs": [
      {"name":"dest","type":"address"},
      {"name":"value","type":"uint128"},
      {"name":"bounce","type":"bool"},
      {"name":"flags","type":"uint8"},
      {"name":"payload","type":"cell"}
    ],
    "outputs": []
  }],
  "events": []
}`,
  dd = `{
  "ABI version": 2,
  "version": "2.3",
  "header": ["pubkey", "time", "expire"],
  "functions": [{
    "name": "sendTransactionRaw",
    "inputs": [
      {"name":"flags","type":"uint8"},
      {"name":"message","type":"cell"}
    ],
    "outputs": [],
    "id": "0x169e3e11"
  }],
  "events": []
}`;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.SimpleAccountsStorage = e.AccountsStorageContext = e.EverWalletAccount = e.HighloadWalletV2 = e.WalletV3Account = e.MsigAccount = e.GenericAccount = e.GiverAccount = void 0;
  const t = pt;
  var n = pi;
  Object.defineProperty(e, "GiverAccount", {
    enumerable: !0,
    get: function() {
      return n.GiverAccount
    }
  });
  var r = er;
  Object.defineProperty(e, "GenericAccount", {
    enumerable: !0,
    get: function() {
      return r.GenericAccount
    }
  }), Object.defineProperty(e, "MsigAccount", {
    enumerable: !0,
    get: function() {
      return r.MsigAccount
    }
  });
  var i = gi;
  Object.defineProperty(e, "WalletV3Account", {
    enumerable: !0,
    get: function() {
      return i.WalletV3Account
    }
  });
  var o = mi;
  Object.defineProperty(e, "HighloadWalletV2", {
    enumerable: !0,
    get: function() {
      return o.HighloadWalletV2
    }
  });
  var a = bi;
  Object.defineProperty(e, "EverWalletAccount", {
    enumerable: !0,
    get: function() {
      return a.EverWalletAccount
    }
  });
  class s {
    constructor(u, _, B, y) {
      this.clock = u, this.connectionController = _, this.nekoton = B, this.keystore = y
    }
    async getSigner(u) {
      if (this.keystore == null) throw new Error("Keystore not found");
      const _ = await this.keystore.getSigner(u);
      if (_ == null) throw new Error("Signer not found");
      return _
    }
    get nowMs() {
      return this.clock.nowMs
    }
    get nowSec() {
      return ~~(this.clock.nowMs / 1e3)
    }
    async fetchPublicKey(u) {
      const _ = await this.getFullContractState(u);
      if (_ == null || !_.isDeployed) throw new Error("Contract not deployed");
      return this.nekoton.extractPublicKey(_.boc)
    }
    async getFullContractState(u) {
      return this.connectionController.use(async ({
        data: {
          transport: _
        }
      }) => _.getFullContractState(u.toString()))
    }
    extractContractData(u) {
      return this.nekoton.extractContractData(u)
    }
    packIntoCell(u) {
      return this.nekoton.packIntoCell(u.structure, u.data, u.abiVersion)
    }
    unpackFromCell(u) {
      return this.nekoton.unpackFromCell(u.structure, u.boc, u.allowPartial, u.abiVersion)
    }
    getBocHash(u) {
      return this.nekoton.getBocHash(u)
    }
    extendSignature(u) {
      return this.nekoton.extendSignature(u)
    }
    encodeInternalInput(u) {
      return this.nekoton.encodeInternalInput(u.abi, u.method, u.params)
    }
    encodeInternalMessage(u) {
      return this.nekoton.encodeInternalMessage(u.src, u.dst, u.bounce, u.stateInit, u.body, u.amount)
    }
    async createExternalMessage(u) {
      const _ = this.nekoton.createExternalMessage(this.clock, u.address.toString(), u.abi, u.method, u.stateInit, u.params, u.signer.publicKey, u.timeout);
      try {
        const B = await u.signer.sign(_.hash, u.signatureId);
        return _.sign(B)
      } finally {
        _.free()
      }
    }
    createRawExternalMessage(u) {
      return this.nekoton.createRawExternalMessage(u.address.toString(), u.stateInit, u.body, u.expireAt)
    }
  }
  e.AccountsStorageContext = s;
  class c {
    constructor(u = {}) {
      if (this.accounts = new Map, u.entries != null)
        for (const _ of u.entries) this._defaultAccount == null && (this._defaultAccount = _.address), this.accounts.set(_.address.toString(), _);
      if (u.defaultAccount != null) {
        const _ = (0, t.convertToAddressObject)(u.defaultAccount);
        if (!this.accounts.has(_.toString())) throw new Error("Provided default account not found in storage");
        this._defaultAccount = _
      }
    }
    get defaultAccount() {
      return this._defaultAccount
    }
    set defaultAccount(u) {
      const _ = u == null ? void 0 : u.toString();
      if (_ != null && !this.accounts.has(_)) throw new Error("Account not found in storage");
      this._defaultAccount = u == null ? u : (0, t.convertToAddressObject)(u)
    }
    async getAccount(u) {
      return this.accounts.get(u.toString())
    }
    addAccount(u) {
      const _ = u.address;
      return this.accounts.set(_.toString(), u), _
    }
    hasAccount(u) {
      return this.accounts.has(u.toString())
    }
    removeAccount(u) {
      this.accounts.delete(u.toString())
    }
  }
  e.SimpleAccountsStorage = c
})(da);
var yi = {};
Object.defineProperty(yi, "__esModule", {
  value: !0
});
yi.ConnectionFactory = void 0;
class fd {}
yi.ConnectionFactory = fd;
var _i = {},
  hd = pe && pe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
Object.defineProperty(_i, "__esModule", {
  value: !0
});
_i.SimpleKeystore = void 0;
const xs = hd(St);
class Ta {
  constructor(t = {}) {
    this.signers = new Map, this.signersByPublicKey = new Map;
    for (const [n, r] of Object.entries(t)) this.addKeyPair(n, r)
  }
  static generateKeyPair() {
    return xs.default.nekoton.ed25519_generateKeyPair()
  }
  addKeyPair(t, n) {
    let r, i;
    typeof t == "string" ? (r = t, i = n) : (r = t.publicKey, i = t);
    const o = new pd(i);
    this.signers.set(r, o), this.signersByPublicKey.set(i.publicKey, o)
  }
  removeKeyPair(t) {
    const n = this.signers.get(t);
    n != null && (this.signers.delete(t), this.signersByPublicKey.delete(n.publicKey))
  }
  async withNewKey(t, n = {}) {
    const r = Ta.generateKeyPair(),
      i = n.keyId != null ? n.keyId : r.publicKey,
      o = n.keepOnError || !1;
    return this.addKeyPair(i, r), t(i).then(a => (a === !1 && this.removeKeyPair(i), i)).catch(a => {
      throw o || this.removeKeyPair(i), a
    })
  }
  async getSigner(t) {
    return this.signers.get(t) || this.signersByPublicKey.get(t)
  }
}
_i.SimpleKeystore = Ta;
class pd {
  constructor(t) {
    this.keyPair = t, this.publicKey = this.keyPair.publicKey
  }
  async sign(t, n) {
    return xs.default.nekoton.ed25519_sign(this.keyPair.secretKey, t, n)
  }
}
var wi = {};
Object.defineProperty(wi, "__esModule", {
  value: !0
});
wi.Clock = void 0;
class gd {
  constructor(t) {
    this.impls = [], this.currentOffset = 0, t != null && (this.currentOffset = t)
  }
  get offset() {
    return this.currentOffset
  }
  set offset(t) {
    this.currentOffset = t;
    for (const n of this.impls) n.updateOffset(this.currentOffset)
  }
  get time() {
    return new Date().getTime() + this.offset
  }
  detach() {
    this.impls = []
  }
}
wi.Clock = gd;
(function(e) {
  var t = pe && pe.__createBinding || (Object.create ? function(U, l, R, D) {
      D === void 0 && (D = R);
      var Z = Object.getOwnPropertyDescriptor(l, R);
      (!Z || ("get" in Z ? !l.__esModule : Z.writable || Z.configurable)) && (Z = {
        enumerable: !0,
        get: function() {
          return l[R]
        }
      }), Object.defineProperty(U, D, Z)
    } : function(U, l, R, D) {
      D === void 0 && (D = R), U[D] = l[R]
    }),
    n = pe && pe.__exportStar || function(U, l) {
      for (var R in U) R !== "default" && !Object.prototype.hasOwnProperty.call(l, R) && t(l, U, R)
    },
    r = pe && pe.__importDefault || function(U) {
      return U && U.__esModule ? U : {
        default: U
      }
    };
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.EverscaleStandaloneClient = e.SUPPORTED_PERMISSIONS = e.VERSION = e.Clock = e.SimpleKeystore = e.checkConnection = e.ConnectionError = e.NETWORK_PRESETS = void 0;
  const i = r(qc),
    o = r(St),
    a = pt,
    s = Wr,
    c = fi,
    f = da;
  n(yi, e);
  var u = Wr;
  Object.defineProperty(e, "NETWORK_PRESETS", {
    enumerable: !0,
    get: function() {
      return u.NETWORK_PRESETS
    }
  });
  var _ = Wr;
  Object.defineProperty(e, "ConnectionError", {
    enumerable: !0,
    get: function() {
      return _.ConnectionError
    }
  }), Object.defineProperty(e, "checkConnection", {
    enumerable: !0,
    get: function() {
      return _.checkConnection
    }
  }), n(da, e);
  var B = _i;
  Object.defineProperty(e, "SimpleKeystore", {
    enumerable: !0,
    get: function() {
      return B.SimpleKeystore
    }
  });
  var y = wi;
  Object.defineProperty(e, "Clock", {
    enumerable: !0,
    get: function() {
      return y.Clock
    }
  });

  function S(U) {
    const l = U || {};
    return {
      retryCount: l.retryCount != null ? Math.max(1, ~~l.retryCount) : 5,
      timeout: l.timeout != null ? Math.max(1, ~~l.timeout) : 60,
      timeoutGrowFactor: l.timeoutGrowFactor || 1.2,
      retryTransfers: !0
    }
  }
  e.VERSION = "0.2.25", e.SUPPORTED_PERMISSIONS = ["basic", "accountInteraction"];
  class m extends a.SafeEventEmitter {
    static async create(l = {}) {
      await o.default.ensureNekotonLoaded(l.initInput);
      const R = {},
        D = (ce, Ie) => {
          var Se;
          (Se = R.client) === null || Se === void 0 || Se.emit(ce, Ie)
        },
        Z = new o.default.nekoton.ClockWithOffset;
      l.clock != null && (l.clock.impls.push(Z), Z.updateOffset(l.clock.offset));
      try {
        const ce = l.connection != null ? await (0, s.createConnectionController)(Z, l.connection) : void 0,
          Ie = ce != null ? new c.SubscriptionController(ce, D) : void 0,
          Se = new m({
            permissions: {},
            connectionController: ce,
            subscriptionController: Ie,
            properties: {
              message: S(l.message)
            },
            keystore: l.keystore,
            accountsStorage: l.accountsStorage,
            clock: Z,
            notify: D
          });
        return R.client = Se, Se
      } catch (ce) {
        throw l.clock != null && l.clock.impls.pop(), Z.free(), ce
      }
    }
    static setDebugLogger(l) {
      o.default.debugLog = l
    }
    constructor(l) {
      super(), this._handlers = {
        requestPermissions: v,
        changeAccount: x,
        disconnect: M,
        subscribe: p,
        unsubscribe: h,
        unsubscribeAll: P,
        getProviderState: k,
        getFullContractState: T,
        computeStorageFee: J,
        getAccountsByCodeHash: ne,
        getTransactions: q,
        getTransaction: we,
        findTransaction: ke,
        runLocal: V,
        executeLocal: z,
        getExpectedAddress: ie,
        getContractFields: ve,
        unpackInitData: Ce,
        getBocHash: Ee,
        packIntoCell: F,
        unpackFromCell: Ve,
        extractPublicKey: Fe,
        codeToTvc: gt,
        mergeTvc: on,
        splitTvc: he,
        setCodeSalt: sn,
        getCodeSalt: ot,
        encodeInternalInput: ln,
        decodeInput: st,
        decodeOutput: nt,
        decodeEvent: w,
        decodeTransaction: C,
        decodeTransactionEvents: O,
        verifySignature: W,
        sendUnsignedExternalMessage: N,
        signData: H,
        signDataRaw: X,
        sendMessage: L,
        sendMessageDelayed: K,
        sendExternalMessage: Y,
        sendExternalMessageDelayed: G
      }, this.setPollingInterval = R => {
        var D;
        if (this._context.connectionController == null || this._context.subscriptionController == null) throw Error("Connection was not initialized");
        (D = this._context.subscriptionController) === null || D === void 0 || D.setPollingInterval(R)
      }, this._context = l
    }
    request(l) {
      const R = this._handlers[l.method];
      if (R == null) throw de(l, `Method '${l.method}' is not supported by standalone provider`);
      return R(this._context, l)
    }
    addListener(l, R) {
      return super.addListener(l, R)
    }
    removeListener(l, R) {
      return super.removeListener(l, R)
    }
    on(l, R) {
      return super.on(l, R)
    }
    once(l, R) {
      return super.once(l, R)
    }
    prependListener(l, R) {
      return super.prependListener(l, R)
    }
    prependOnceListener(l, R) {
      return super.prependOnceListener(l, R)
    }
  }
  e.EverscaleStandaloneClient = m;
  const v = async (U, l) => {
    A(l);
    const {
      permissions: R
    } = l.params;
    re(l, l.params, "permissions");
    const D = {
      ...U.permissions
    };
    for (const ce of R)
      if (ce === "basic" || ce === "tonClient") D.basic = !0;
      else if (ce === "accountInteraction") {
      if (D.accountInteraction != null) continue;
      D.accountInteraction = await Ne(l, U)
    } else throw de(l, `Permission '${ce}' is not supported by standalone provider`);
    U.permissions = D;
    const Z = JSON.parse(JSON.stringify(D));
    return U.notify("permissionsChanged", {
      permissions: Z
    }), Z
  }, x = async (U, l) => {
    Ae(l, U);
    const R = {
      ...U.permissions
    };
    R.accountInteraction = await Ne(l, U), U.permissions = R;
    const D = JSON.parse(JSON.stringify(R));
    return U.notify("permissionsChanged", {
      permissions: D
    }), D
  }, M = async (U, l) => {
    var R;
    U.permissions = {}, await ((R = U.subscriptionController) === null || R === void 0 ? void 0 : R.unsubscribeFromAllContracts()), U.notify("permissionsChanged", {
      permissions: {}
    })
  }, p = async (U, l) => {
    A(l), be(l, U);
    const {
      address: R,
      subscriptions: D
    } = l.params;
    b(l, l.params, "address"), I(l, l.params, "subscriptions");
    let Z;
    try {
      Z = o.default.nekoton.repackAddress(R)
    } catch (ce) {
      throw de(l, ce.toString())
    }
    try {
      return await U.subscriptionController.subscribeToContract(Z, D)
    } catch (ce) {
      throw de(l, ce.toString())
    }
  }, h = async (U, l) => {
    A(l), be(l, U);
    const {
      address: R
    } = l.params;
    b(l, l.params, "address");
    let D;
    try {
      D = o.default.nekoton.repackAddress(R)
    } catch (Z) {
      throw de(l, Z.toString())
    }
    await U.subscriptionController.unsubscribeFromContract(D)
  }, P = async (U, l) => {
    var R;
    await ((R = U.subscriptionController) === null || R === void 0 ? void 0 : R.unsubscribeFromAllContracts())
  }, k = async (U, l) => {
    var R, D;
    const Z = (R = U.connectionController) === null || R === void 0 ? void 0 : R.initializedTransport,
      ce = e.VERSION;
    return {
      version: ce,
      numericVersion: (0, a.convertVersionToInt32)(ce),
      networkId: Z != null ? Z.id : 0,
      selectedConnection: Z != null ? Z.group : "",
      supportedPermissions: [...e.SUPPORTED_PERMISSIONS],
      permissions: JSON.parse(JSON.stringify(U.permissions)),
      subscriptions: ((D = U.subscriptionController) === null || D === void 0 ? void 0 : D.subscriptionStates) || {}
    }
  }, T = async (U, l) => {
    A(l), be(l, U);
    const {
      address: R
    } = l.params;
    b(l, l.params, "address");
    const {
      connectionController: D
    } = U;
    try {
      return D.use(async ({
        data: {
          transport: Z
        }
      }) => ({
        state: await Z.getFullContractState(R)
      }))
    } catch (Z) {
      throw de(l, Z.toString())
    }
  }, J = async (U, l) => {
    A(l), be(l, U);
    const {
      state: R,
      masterchain: D,
      timestamp: Z
    } = l.params;
    Pe(l, l.params, "state"), j(l, l.params, "masterchain"), te(l, l.params, "timestamp");
    const {
      connectionController: ce
    } = U;
    try {
      const Ie = await ce.use(({
          data: {
            transport: Ue
          }
        }) => Ue.getBlockchainConfig()),
        Se = Z ?? ~~(U.clock.nowMs / 1e3);
      return o.default.nekoton.computeStorageFee(Ie, R.boc, Se, D || !1)
    } catch (Ie) {
      throw de(l, Ie.toString())
    }
  }, ne = async (U, l) => {
    A(l), be(l, U);
    const {
      codeHash: R,
      limit: D,
      continuation: Z
    } = l.params;
    b(l, l.params, "codeHash"), te(l, l.params, "limit"), Q(l, l.params, "continuation");
    const {
      connectionController: ce
    } = U;
    try {
      return ce.use(({
        data: {
          transport: Ie
        }
      }) => Ie.getAccountsByCodeHash(R, D || 50, Z))
    } catch (Ie) {
      throw de(l, Ie.toString())
    }
  }, q = async (U, l) => {
    A(l), be(l, U);
    const {
      address: R,
      continuation: D,
      limit: Z
    } = l.params;
    b(l, l.params, "address"), se(l, l.params, "continuation", ae), te(l, l.params, "limit");
    const {
      connectionController: ce
    } = U;
    try {
      return ce.use(({
        data: {
          transport: Ie
        }
      }) => Ie.getTransactions(R, D == null ? void 0 : D.lt, Z || 50))
    } catch (Ie) {
      throw de(l, Ie.toString())
    }
  }, we = async (U, l) => {
    A(l), be(l, U);
    const {
      hash: R
    } = l.params;
    b(l, l.params, "hash");
    const {
      connectionController: D
    } = U;
    try {
      return {
        transaction: await D.use(({
          data: {
            transport: Z
          }
        }) => Z.getTransaction(R))
      }
    } catch (Z) {
      throw de(l, Z.toString())
    }
  }, ke = async (U, l) => {
    A(l), be(l, U);
    const {
      inMessageHash: R
    } = l.params;
    se(l, l.params, "inMessageHash", b);
    const {
      connectionController: D
    } = U;
    if (R == null) return {
      transaction: void 0
    };
    try {
      return {
        transaction: await D.use(({
          data: {
            transport: Z
          }
        }) => Z.getDstTransaction(R))
      }
    } catch (Z) {
      throw de(l, Z.toString())
    }
  }, V = async (U, l) => {
    A(l);
    const {
      address: R,
      cachedState: D,
      responsible: Z,
      functionCall: ce,
      withSignatureId: Ie
    } = l.params;
    b(l, l.params, "address"), se(l, l.params, "cachedState", ue), j(l, l.params, "responsible"), Me(l, l.params, "functionCall"), ye(l, l.params, "withSignatureId");
    let Se = D;
    if (Se == null && (be(l, U), Se = await U.connectionController.use(async ({
        data: {
          transport: Ge
        }
      }) => Ge.getFullContractState(R))), Se == null) throw de(l, "Account not found");
    if (!Se.isDeployed || Se.lastTransactionId == null) throw de(l, "Account is not deployed");
    const Ue = await Be(l, U, Ie);
    try {
      const {
        output: Ge,
        code: We
      } = o.default.nekoton.runLocal(U.clock, Se.boc, ce.abi, ce.method, ce.params, Z || !1, Ue);
      return {
        output: Ge,
        code: We
      }
    } catch (Ge) {
      throw de(l, Ge.toString())
    }
  }, z = async (U, l) => {
    A(l), be(l, U);
    const {
      address: R,
      cachedState: D,
      stateInit: Z,
      payload: ce,
      executorParams: Ie,
      messageHeader: Se
    } = l.params;
    b(l, l.params, "address"), se(l, l.params, "cachedState", ue), Q(l, l.params, "stateInit"), Te(l, l.params, "payload"), I(l, l.params, "executorParams"), g(l, l.params, "messageHeader");
    const {
      clock: Ue,
      connectionController: Ge
    } = U;
    let We;
    try {
      We = o.default.nekoton.repackAddress(R)
    } catch (Re) {
      throw de(l, Re.toString())
    }
    const rt = ~~(Ue.nowMs / 1e3),
      mt = 60;
    let Qe;
    if (Se.type === "external")
      if (ce == null || typeof ce == "string") Qe = o.default.nekoton.createRawExternalMessage(We, Z, ce, rt + mt).boc;
      else if (Se.withoutSignature === !0) Qe = o.default.nekoton.createExternalMessageWithoutSignature(Ue, We, ce.abi, ce.method, Z, ce.params, mt).boc;
    else {
      const Re = o.default.nekoton.createExternalMessage(Ue, We, ce.abi, ce.method, Z, ce.params, Se.publicKey, mt);
      try {
        if ((Ie == null ? void 0 : Ie.disableSignatureCheck) === !0) Qe = Re.signFake().boc;
        else {
          ee(l, U);
          const Le = await Be(l, U),
            {
              keystore: Ke
            } = U,
            et = await Ke.getSigner(Se.publicKey);
          if (et == null) throw "Signer not found for public key";
          const xe = await et.sign(Re.hash, Le);
          Qe = Re.sign(xe).boc
        }
      } catch (Le) {
        throw de(l, Le.toString())
      } finally {
        Re.free()
      }
    } else if (Se.type === "internal") {
      b(l, Se, "sender"), b(l, Se, "amount"), E(l, Se, "bounce"), j(l, Se, "bounced");
      const Re = ce == null ? void 0 : typeof ce == "string" ? ce : o.default.nekoton.encodeInternalInput(ce.abi, ce.method, ce.params);
      Qe = o.default.nekoton.encodeInternalMessage(Se.sender, We, Se.bounce, Z, Re, Se.amount)
    } else throw de(l, "Unknown message type");
    try {
      const [Re, Le, Ke] = await Ge.use(({
        data: {
          transport: He
        }
      }) => Promise.all([D ?? He.getFullContractState(We), He.getBlockchainConfig(), He.getNetworkDescription()])), et = o.default.nekoton.makeFullAccountBoc(Re == null ? void 0 : Re.boc), xe = Ie == null ? void 0 : Ie.overrideBalance, Ze = o.default.nekoton.executeLocal(Le, et, Qe, rt, (Ie == null ? void 0 : Ie.disableSignatureCheck) === !0, xe != null ? xe.toString() : void 0, Ke.globalId);
      if (Ze.exitCode != null) throw new Error(`Contract did not accept the message. Exit code: ${Ze.exitCode}`);
      const lt = Ze,
        Wn = lt.transaction,
        it = o.default.nekoton.parseFullAccountBoc(lt.account);
      let at;
      try {
        if (typeof ce == "object" && typeof ce != null) {
          const He = o.default.nekoton.decodeTransaction(lt.transaction, ce.abi, ce.method);
          at = He == null ? void 0 : He.output
        }
      } catch {}
      return {
        transaction: Wn,
        newState: it,
        output: at
      }
    } catch (Re) {
      throw de(l, Re.toString())
    }
  }, ie = async (U, l) => {
    A(l);
    const {
      tvc: R,
      abi: D,
      workchain: Z,
      publicKey: ce,
      initParams: Ie
    } = l.params;
    b(l, l.params, "tvc"), b(l, l.params, "abi"), te(l, l.params, "workchain"), Q(l, l.params, "publicKey");
    try {
      return o.default.nekoton.getExpectedAddress(R, D, Z || 0, ce, Ie)
    } catch (Se) {
      throw de(l, Se.toString())
    }
  }, ve = async (U, l) => {
    A(l);
    const {
      address: R,
      abi: D,
      cachedState: Z,
      allowPartial: ce
    } = l.params;
    b(l, l.params, "address"), b(l, l.params, "abi"), se(l, l.params, "cachedState", ue), E(l, l.params, "allowPartial");
    let Ie;
    try {
      Ie = o.default.nekoton.repackAddress(R)
    } catch (Ue) {
      throw de(l, Ue.toString())
    }
    let Se = Z;
    if (Se == null && (be(l, U), Se = await U.connectionController.use(async ({
        data: {
          transport: Ue
        }
      }) => Ue.getFullContractState(Ie))), Se == null) return {
      fields: void 0,
      state: void 0
    };
    if (!Se.isDeployed || Se.lastTransactionId == null) return {
      fields: void 0,
      state: Se
    };
    try {
      return {
        fields: o.default.nekoton.unpackContractFields(D, Se.boc, ce),
        state: Se
      }
    } catch (Ue) {
      throw de(l, Ue.toString())
    }
  }, Ce = async (U, l) => {
    A(l);
    const {
      abi: R,
      data: D
    } = l.params;
    b(l, l.params, "abi"), b(l, l.params, "data");
    try {
      const {
        publicKey: Z,
        data: ce
      } = o.default.nekoton.unpackInitData(R, D);
      return {
        publicKey: Z,
        initParams: ce
      }
    } catch (Z) {
      throw de(l, Z.toString())
    }
  }, Ee = async (U, l) => {
    A(l);
    const {
      boc: R
    } = l.params;
    b(l, l.params, "boc");
    try {
      return {
        hash: o.default.nekoton.getBocHash(R)
      }
    } catch (D) {
      throw de(l, D.toString())
    }
  }, F = async (U, l) => {
    A(l);
    const {
      structure: R,
      data: D,
      abiVersion: Z
    } = l.params;
    re(l, l.params, "structure"), se(l, l.params, "abiVersion", b);
    try {
      return o.default.nekoton.packIntoCell(R, D, Z)
    } catch (ce) {
      throw de(l, ce.toString())
    }
  }, Ve = async (U, l) => {
    A(l);
    const {
      structure: R,
      boc: D,
      allowPartial: Z,
      abiVersion: ce
    } = l.params;
    re(l, l.params, "structure"), b(l, l.params, "boc"), E(l, l.params, "allowPartial"), se(l, l.params, "abiVersion", b);
    try {
      return {
        data: o.default.nekoton.unpackFromCell(R, D, Z, ce)
      }
    } catch (Ie) {
      throw de(l, Ie.toString())
    }
  }, Fe = async (U, l) => {
    A(l);
    const {
      boc: R
    } = l.params;
    b(l, l.params, "boc");
    try {
      return {
        publicKey: o.default.nekoton.extractPublicKey(R)
      }
    } catch (D) {
      throw de(l, D.toString())
    }
  }, gt = async (U, l) => {
    A(l);
    const {
      code: R
    } = l.params;
    b(l, l.params, "code");
    try {
      const {
        boc: D,
        hash: Z
      } = o.default.nekoton.codeToTvc(R);
      return {
        tvc: D,
        hash: Z
      }
    } catch (D) {
      throw de(l, D.toString())
    }
  }, on = async (U, l) => {
    A(l);
    const {
      code: R,
      data: D
    } = l.params;
    b(l, l.params, "code"), b(l, l.params, "data");
    try {
      const {
        boc: Z,
        hash: ce
      } = o.default.nekoton.mergeTvc(R, D);
      return {
        tvc: Z,
        hash: ce
      }
    } catch (Z) {
      throw de(l, Z.toString())
    }
  }, he = async (U, l) => {
    A(l);
    const {
      tvc: R
    } = l.params;
    b(l, l.params, "tvc");
    try {
      return o.default.nekoton.splitTvc(R)
    } catch (D) {
      throw de(l, D.toString())
    }
  }, sn = async (U, l) => {
    A(l);
    const {
      code: R,
      salt: D
    } = l.params;
    b(l, l.params, "code"), b(l, l.params, "salt");
    try {
      const {
        boc: Z,
        hash: ce
      } = o.default.nekoton.setCodeSalt(R, D);
      return {
        code: Z,
        hash: ce
      }
    } catch (Z) {
      throw de(l, Z.toString())
    }
  }, ot = async (U, l) => {
    A(l);
    const {
      code: R
    } = l.params;
    b(l, l.params, "code");
    try {
      return {
        salt: o.default.nekoton.getCodeSalt(R)
      }
    } catch (D) {
      throw de(l, D.toString())
    }
  }, ln = async (U, l) => {
    A(l), Me(l, l, "params");
    const {
      abi: R,
      method: D,
      params: Z
    } = l.params;
    try {
      return {
        boc: o.default.nekoton.encodeInternalInput(R, D, Z)
      }
    } catch (ce) {
      throw de(l, ce.toString())
    }
  }, st = async (U, l) => {
    A(l);
    const {
      body: R,
      abi: D,
      method: Z,
      internal: ce
    } = l.params;
    b(l, l.params, "body"), b(l, l.params, "abi"), Oe(l, l.params, "method"), E(l, l.params, "internal");
    try {
      return o.default.nekoton.decodeInput(R, D, Z, ce) || null
    } catch (Ie) {
      throw de(l, Ie.toString())
    }
  }, nt = async (U, l) => {
    A(l);
    const {
      body: R,
      abi: D,
      method: Z
    } = l.params;
    b(l, l.params, "body"), b(l, l.params, "abi"), Oe(l, l.params, "method");
    try {
      return o.default.nekoton.decodeOutput(R, D, Z) || null
    } catch (ce) {
      throw de(l, ce.toString())
    }
  }, w = async (U, l) => {
    A(l);
    const {
      body: R,
      abi: D,
      event: Z
    } = l.params;
    b(l, l.params, "body"), b(l, l.params, "abi"), Oe(l, l.params, "event");
    try {
      return o.default.nekoton.decodeEvent(R, D, Z) || null
    } catch (ce) {
      throw de(l, ce.toString())
    }
  }, C = async (U, l) => {
    A(l);
    const {
      transaction: R,
      abi: D,
      method: Z
    } = l.params;
    b(l, l.params, "abi"), Oe(l, l.params, "method");
    try {
      return o.default.nekoton.decodeTransaction(R, D, Z) || null
    } catch (ce) {
      throw de(l, ce.toString())
    }
  }, O = async (U, l) => {
    A(l);
    const {
      transaction: R,
      abi: D
    } = l.params;
    b(l, l.params, "abi");
    try {
      return {
        events: o.default.nekoton.decodeTransactionEvents(R, D)
      }
    } catch (Z) {
      throw de(l, Z.toString())
    }
  }, W = async (U, l) => {
    A(l);
    const {
      publicKey: R,
      dataHash: D,
      signature: Z,
      withSignatureId: ce
    } = l.params;
    b(l, l.params, "publicKey"), b(l, l.params, "dataHash"), b(l, l.params, "signature"), ye(l, l.params, "withSignatureId");
    const Ie = await Be(l, U, ce);
    try {
      return {
        isValid: o.default.nekoton.verifySignature(R, D, Z, Ie)
      }
    } catch (Se) {
      throw de(l, Se.toString())
    }
  }, N = async (U, l) => {
    A(l), be(l, U);
    const {
      recipient: R,
      stateInit: D,
      payload: Z,
      local: ce,
      executorParams: Ie
    } = l.params;
    b(l, l.params, "recipient"), Q(l, l.params, "stateInit"), Te(l, l.params, "payload"), j(l, l.params, "local"), I(l, l.params, "executorParams");
    let Se;
    try {
      Se = o.default.nekoton.repackAddress(R)
    } catch (xe) {
      throw de(l, xe.toString())
    }
    const {
      clock: Ue,
      subscriptionController: Ge,
      properties: We
    } = U, rt = xe => {
      try {
        if (typeof Z == "string" || Z == null) {
          const Ze = ~~(Ue.nowMs / 1e3) + xe;
          return o.default.nekoton.createRawExternalMessage(Se, D, Z, ~~Ze)
        } else return o.default.nekoton.createExternalMessageWithoutSignature(Ue, Se, Z.abi, Z.method, D, Z.params, ~~xe)
      } catch (Ze) {
        throw de(l, Ze.toString())
      }
    }, mt = xe => {
      let Ze;
      try {
        if (typeof Z == "object" && typeof Z != null) {
          const lt = o.default.nekoton.decodeTransaction(xe, Z.abi, Z.method);
          Ze = lt == null ? void 0 : lt.output
        }
      } catch {}
      return {
        transaction: xe,
        output: Ze
      }
    };
    if (ce === !0) {
      const xe = rt(60),
        Ze = await Ge.sendMessageLocally(Se, xe, Ie);
      return mt(Ze)
    }
    let Qe = We.message.timeout;
    for (let xe = 0; xe < We.message.retryCount; ++xe) {
      const Ze = rt(Qe),
        lt = await Ge.sendMessage(Se, Ze);
      if (lt == null) {
        Qe *= We.message.timeoutGrowFactor;
        continue
      }
      return mt(lt)
    }
    const Re = "Message expired",
      Le = rt(60),
      Ke = await Ge.sendMessageLocally(Se, Le).catch(xe => {
        throw de(l, `${Re}. ${xe.toString()}`)
      }),
      et = Ke.exitCode != null ? `. Possible exit code: ${Ke.exitCode}` : "";
    throw de(l, `${Re}${et}`)
  }, H = async (U, l) => {
    ee(l, U), A(l);
    const {
      publicKey: R,
      data: D,
      withSignatureId: Z
    } = l.params;
    b(l, l.params, "publicKey"), b(l, l.params, "data"), ye(l, l.params, "withSignatureId");
    const ce = await Be(l, U, Z),
      {
        keystore: Ie
      } = U,
      Se = await Ie.getSigner(R);
    if (Se == null) throw de(l, "Signer not found for public key");
    try {
      const Ue = o.default.nekoton.getDataHash(D);
      return {
        dataHash: Ue,
        ...await Se.sign(Ue, ce).then(o.default.nekoton.extendSignature)
      }
    } catch (Ue) {
      throw de(l, Ue.toString())
    }
  }, X = async (U, l) => {
    ee(l, U), A(l);
    const {
      publicKey: R,
      data: D,
      withSignatureId: Z
    } = l.params;
    b(l, l.params, "publicKey"), b(l, l.params, "data"), ye(l, l.params, "withSignatureId");
    const ce = await Be(l, U, Z),
      {
        keystore: Ie
      } = U,
      Se = await Ie.getSigner(R);
    if (Se == null) throw de(l, "Signer not found for public key");
    try {
      return await Se.sign(D, ce).then(o.default.nekoton.extendSignature)
    } catch (Ue) {
      throw de(l, Ue.toString())
    }
  }, L = async (U, l) => {
    ee(l, U), Ae(l, U), be(l, U), A(l);
    const {
      sender: R,
      recipient: D,
      amount: Z,
      bounce: ce,
      payload: Ie,
      stateInit: Se
    } = l.params;
    b(l, l.params, "sender"), b(l, l.params, "recipient"), b(l, l.params, "amount"), E(l, l.params, "bounce"), se(l, l.params, "payload", Me), Q(l, l.params, "stateInit");
    const Ue = await Be(l, U),
      {
        clock: Ge,
        properties: We,
        subscriptionController: rt,
        connectionController: mt,
        keystore: Qe,
        accountsStorage: Re
      } = U;
    let Le, Ke, et;
    try {
      Le = o.default.nekoton.repackAddress(R), Ke = o.default.nekoton.repackAddress(D), et = await Re.getAccount(Le).then(It => {
        if (It != null) return It;
        throw new Error("Sender not found")
      })
    } catch (It) {
      throw de(l, It.toString())
    }
    const xe = async It => {
      try {
        return et.prepareMessage({
          recipient: Ke,
          amount: Z,
          bounce: ce,
          payload: Ie,
          stateInit: Se,
          timeout: ~~It,
          signatureId: Ue
        }, new f.AccountsStorageContext(Ge, mt, o.default.nekoton, Qe))
      } catch (Yi) {
        throw de(l, Yi.toString())
      }
    };
    let Ze = We.message.timeout;
    const lt = We.message.retryTransfers !== !1 ? We.message.retryCount : 1;
    for (let It = 0; It < lt; ++It) {
      const Yi = await xe(Ze),
        Va = await rt.sendMessage(Le, Yi);
      if (Va == null) {
        Ze *= We.message.timeoutGrowFactor;
        continue
      }
      return {
        transaction: Va
      }
    }
    const Wn = "Message expired",
      it = await xe(60),
      at = await rt.sendMessageLocally(Le, it).catch(It => {
        throw de(l, `${Wn}. ${It.toString()}`)
      }),
      He = at.exitCode != null ? `. Possible exit code: ${at.exitCode}` : "";
    throw de(l, `${Wn}${He}`)
  }, K = async (U, l) => {
    ee(l, U), Ae(l, U), A(l), be(l, U);
    const {
      sender: R,
      recipient: D,
      amount: Z,
      bounce: ce,
      payload: Ie,
      stateInit: Se
    } = l.params;
    b(l, l.params, "sender"), b(l, l.params, "recipient"), b(l, l.params, "amount"), E(l, l.params, "bounce"), se(l, l.params, "payload", Me), Q(l, l.params, "stateInit");
    const Ue = await Be(l, U),
      {
        clock: Ge,
        subscriptionController: We,
        connectionController: rt,
        keystore: mt,
        accountsStorage: Qe,
        notify: Re
      } = U;
    let Le, Ke;
    try {
      Le = o.default.nekoton.repackAddress(R), Ke = o.default.nekoton.repackAddress(D)
    } catch (xe) {
      throw de(l, xe.toString())
    }
    let et;
    try {
      const xe = await Qe.getAccount(Le);
      if (xe == null) throw new Error("Sender not found");
      et = await xe.prepareMessage({
        recipient: Ke,
        amount: Z,
        bounce: ce,
        payload: Ie,
        stateInit: Se,
        timeout: 60,
        signatureId: Ue
      }, new f.AccountsStorageContext(Ge, rt, o.default.nekoton, mt))
    } catch (xe) {
      throw de(l, xe.toString())
    }
    return We.sendMessage(Le, et).then(xe => {
      Re("messageStatusUpdated", {
        address: Le,
        hash: et.hash,
        transaction: xe
      })
    }).catch(console.error), {
      message: {
        account: Le,
        hash: et.hash,
        expireAt: et.expireAt
      }
    }
  }, Y = async (U, l) => {
    ee(l, U), A(l), be(l, U);
    const {
      publicKey: R,
      recipient: D,
      stateInit: Z,
      payload: ce,
      local: Ie,
      executorParams: Se
    } = l.params;
    b(l, l.params, "publicKey"), b(l, l.params, "recipient"), Q(l, l.params, "stateInit"), Me(l, l.params, "payload"), j(l, l.params, "local"), I(l, l.params, "executorParams");
    const Ue = await Be(l, U);
    let Ge;
    try {
      Ge = o.default.nekoton.repackAddress(D)
    } catch (it) {
      throw de(l, it.toString())
    }
    const {
      clock: We,
      subscriptionController: rt,
      keystore: mt,
      properties: Qe
    } = U, Re = await mt.getSigner(R);
    if (Re == null) throw de(l, "Signer not found for public key");
    const Le = async it => {
      let at;
      try {
        at = o.default.nekoton.createExternalMessage(We, Ge, ce.abi, ce.method, Z, ce.params, R, ~~it)
      } catch (He) {
        throw de(l, He.toString())
      }
      try {
        const He = await Re.sign(at.hash, Ue);
        return at.sign(He)
      } catch (He) {
        throw de(l, He.toString())
      } finally {
        at.free()
      }
    }, Ke = it => {
      let at;
      try {
        const He = o.default.nekoton.decodeTransaction(it, ce.abi, ce.method);
        at = He == null ? void 0 : He.output
      } catch {}
      return {
        transaction: it,
        output: at
      }
    };
    if (Ie === !0) {
      const it = await Le(60),
        at = await rt.sendMessageLocally(Ge, it, Se);
      return Ke(at)
    }
    let et = Qe.message.timeout;
    for (let it = 0; it < Qe.message.retryCount; ++it) {
      const at = await Le(et),
        He = await rt.sendMessage(Ge, at);
      if (He == null) {
        et *= Qe.message.timeoutGrowFactor;
        continue
      }
      return Ke(He)
    }
    const xe = "Message expired",
      Ze = await Le(60),
      lt = await rt.sendMessageLocally(Ge, Ze).catch(it => {
        throw de(l, `${xe}. ${it.toString()}`)
      }),
      Wn = lt.exitCode != null ? `. Possible exit code: ${lt.exitCode}` : "";
    throw de(l, `${xe}${Wn}`)
  }, G = async (U, l) => {
    ee(l, U), A(l), be(l, U);
    const {
      publicKey: R,
      recipient: D,
      stateInit: Z,
      payload: ce
    } = l.params;
    b(l, l.params, "publicKey"), b(l, l.params, "recipient"), Q(l, l.params, "stateInit"), Me(l, l.params, "payload");
    const Ie = await Be(l, U);
    let Se;
    try {
      Se = o.default.nekoton.repackAddress(D)
    } catch (Ke) {
      throw de(l, Ke.toString())
    }
    const {
      clock: Ue,
      subscriptionController: Ge,
      keystore: We,
      properties: rt,
      notify: mt
    } = U, Qe = await We.getSigner(R);
    if (Qe == null) throw de(l, "Signer not found for public key");
    let Re;
    try {
      Re = o.default.nekoton.createExternalMessage(Ue, Se, ce.abi, ce.method, Z, ce.params, R, ~~rt.message.timeout)
    } catch (Ke) {
      throw de(l, Ke.toString())
    }
    let Le;
    try {
      const Ke = await Qe.sign(Re.hash, Ie);
      Le = Re.sign(Ke)
    } catch (Ke) {
      throw de(l, Ke.toString())
    } finally {
      Re.free()
    }
    return Ge.sendMessage(Se, Le).then(Ke => {
      mt("messageStatusUpdated", {
        address: Se,
        hash: Le.hash,
        transaction: Ke
      })
    }).catch(console.error), {
      message: {
        account: Se,
        hash: Le.hash,
        expireAt: Le.expireAt
      }
    }
  };

  function ee(U, l) {
    if (l.keystore == null) throw de(U, "Keystore not found")
  }

  function Ae(U, l) {
    if (l.accountsStorage == null) throw de(U, "AccountsStorage not found")
  }

  function be(U, l) {
    if (l.connectionController == null || l.subscriptionController == null) throw de(U, "Connection was not initialized")
  }
  async function Be(U, l, R) {
    if (R !== !1) {
      {
        if (typeof R == "number") return R;
        if (l.connectionController == null) return
      }
      return l.connectionController.use(async ({
        data: {
          transport: D
        }
      }) => D.getSignatureId()).catch(D => {
        throw de(U, "Failed to fetch signature id")
      })
    }
  }

  function A(U) {
    if (U.params == null || typeof U.params != "object") throw de(U, "required params object")
  }

  function g(U, l, R) {
    if (typeof l[R] != "object") throw de(U, `'${String(R)}' must be an object`)
  }

  function I(U, l, R) {
    const D = l[R];
    if (D != null && typeof D != "object") throw de(U, `'${String(R)}' must be an object if specified`)
  }

  function E(U, l, R) {
    if (typeof l[R] != "boolean") throw de(U, `'${String(R)}' must be a boolean`)
  }

  function j(U, l, R) {
    const D = l[R];
    if (D != null && typeof D != "boolean") throw de(U, `'${String(R)}' must be a boolean if specified`)
  }

  function b(U, l, R) {
    const D = l[R];
    if (typeof D != "string" || D.length === 0) throw de(U, `'${String(R)}' must be non-empty string`)
  }

  function Q(U, l, R) {
    const D = l[R];
    if (D != null && (typeof D != "string" || D.length === 0)) throw de(U, `'${String(R)}' must be a non-empty string if provided`)
  }

  function te(U, l, R) {
    const D = l[R];
    if (D != null && typeof D != "number") throw de(U, `'${String(R)}' must be a number if provider`)
  }

  function re(U, l, R) {
    const D = l[R];
    if (!Array.isArray(D)) throw de(U, `'${String(R)}' must be an array`)
  }

  function se(U, l, R, D) {
    l[R] != null && D(U, l, R)
  }

  function ye(U, l, R) {
    const D = l[R];
    if (D != null && typeof D != "boolean" && typeof D != "number") throw de(U, `'${String(R)}' must be an optional boolean or number`)
  }

  function ae(U, l, R) {
    g(U, l, R);
    const D = l[R];
    b(U, D, "lt"), b(U, D, "hash")
  }

  function le(U, l, R) {
    g(U, l, R);
    const D = l[R];
    E(U, D, "isExact"), b(U, D, "lt"), Q(U, D, "hash")
  }

  function Pe(U, l, R) {
    g(U, l, R);
    const D = l[R];
    b(U, D, "boc")
  }

  function ue(U, l, R) {
    g(U, l, R);
    const D = l[R];
    b(U, D, "balance"), se(U, D, "lastTransactionId", le), E(U, D, "isDeployed")
  }

  function Me(U, l, R) {
    g(U, l, R);
    const D = l[R];
    b(U, D, "abi"), b(U, D, "method"), g(U, D, "params")
  }

  function Te(U, l, R) {
    const D = l[R];
    if (!(typeof D == "string" || D == null))
      if (typeof D == "object") b(U, D, "abi"), b(U, D, "method"), g(U, D, "params");
      else throw de(U, `'${String(R)}' must be a function all or optional string`)
  }

  function Oe(U, l, R) {
    const D = l[R];
    if (D != null && typeof D != "string" && !Array.isArray(D)) throw de(U, `'${String(R)}' must be a method name or an array of possible names`)
  }
  async function Ne(U, l) {
    Ae(U, l), be(U, l);
    const R = l.accountsStorage.defaultAccount;
    if (R == null) throw de(U, "Default account not set in accounts storage");
    const D = await l.accountsStorage.getAccount(R);
    if (D == null) throw de(U, "Default account not found");
    const Z = await D.fetchPublicKey(new f.AccountsStorageContext(l.clock, l.connectionController, o.default.nekoton));
    return {
      address: D.address.toString(),
      publicKey: Z,
      contractType: "unknown"
    }
  }
  const de = (U, l, R) => new dt(2, `${U.method}: ${l}`, R);
  class dt extends Error {
    constructor(l, R, D) {
      if (!Number.isInteger(l)) throw new Error('"code" must be an integer');
      if (!R || typeof R != "string") throw new Error('"message" must be a nonempty string');
      super(R), this.code = l, this.data = D
    }
    serialize() {
      const l = {
        code: this.code,
        message: this.message
      };
      return this.data !== void 0 && (l.data = this.data), this.stack && (l.stack = this.stack), l
    }
    toString() {
      return (0, i.default)(this.serialize(), _t, 2)
    }
  }
  const _t = (U, l) => {
    if (l !== "[Circular]") return l
  }
})(rs);
(function(e) {
  var t = pe && pe.__createBinding || (Object.create ? function(B, y, S, m) {
      m === void 0 && (m = S);
      var v = Object.getOwnPropertyDescriptor(y, S);
      (!v || ("get" in v ? !y.__esModule : v.writable || v.configurable)) && (v = {
        enumerable: !0,
        get: function() {
          return y[S]
        }
      }), Object.defineProperty(B, m, v)
    } : function(B, y, S, m) {
      m === void 0 && (m = S), B[m] = y[S]
    }),
    n = pe && pe.__setModuleDefault || (Object.create ? function(B, y) {
      Object.defineProperty(B, "default", {
        enumerable: !0,
        value: y
      })
    } : function(B, y) {
      B.default = y
    }),
    r = pe && pe.__importStar || function(B) {
      if (B && B.__esModule) return B;
      var y = {};
      if (B != null)
        for (var S in B) S !== "default" && Object.prototype.hasOwnProperty.call(B, S) && t(y, B, S);
      return n(y, B), y
    },
    i = pe && pe.__exportStar || function(B, y) {
      for (var S in B) S !== "default" && !Object.prototype.hasOwnProperty.call(y, S) && t(y, B, S)
    },
    o = pe && pe.__importDefault || function(B) {
      return B && B.__esModule ? B : {
        default: B
      }
    };
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  const a = r(Jc),
    s = a,
    c = o(St);
  let f = !1,
    u;
  const _ = new Promise((B, y) => {
    u = {
      resolve: B,
      reject: y
    }
  });
  c.default.ensureNekotonLoaded = B => (f || (f = !0, (0, a.default)(B).then(u.resolve).catch(u.reject)), _), c.default.nekoton = s, c.default.fetch = fetch, c.default.debugLog = B => {}, i(rs, e)
})(ra);
var vi = {},
  kt = {};
const md = Symbol.for("nodejs.util.inspect.custom");
var ar = md,
  or = {};
Object.defineProperty(or, "__esModule", {
  value: !0
});
or.crc16 = void 0;

function bd(e) {
  let n = 0;
  const r = Buffer.alloc(e.length + 2);
  r.set(e);
  for (let i of r) {
    let o = 128;
    for (; o > 0;) n <<= 1, i & o && (n += 1), o >>= 1, n > 65535 && (n &= 65535, n ^= 4129)
  }
  return Buffer.from([Math.floor(n / 256), n % 256])
}
or.crc16 = bd;
var yd = pe && pe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  },
  Us;
Object.defineProperty(kt, "__esModule", {
  value: !0
});
kt.address = kt.Address = void 0;
const _d = yd(ar),
  Rs = or,
  pa = 17,
  js = 81,
  ga = 128;

function go(e) {
  if (typeof e == "string" && !Ct.isFriendly(e)) throw new Error("Unknown address type");
  const t = Buffer.isBuffer(e) ? e : Buffer.from(e, "base64");
  if (t.length !== 36) throw new Error("Unknown address type: byte length is not equal to 36");
  const n = t.subarray(0, 34),
    r = t.subarray(34, 36),
    i = (0, Rs.crc16)(n);
  if (!(i[0] === r[0] && i[1] === r[1])) throw new Error("Invalid checksum: " + e);
  let o = n[0],
    a = !1,
    s = !1;
  if (o & ga && (a = !0, o = o ^ ga), o !== pa && o !== js) throw "Unknown address tag";
  s = o === pa;
  let c = null;
  n[1] === 255 ? c = -1 : c = n[1];
  const f = n.subarray(2, 34);
  return {
    isTestOnly: a,
    isBounceable: s,
    workchain: c,
    hashPart: f
  }
}
class Ct {
  static isAddress(t) {
    return t instanceof Ct
  }
  static isFriendly(t) {
    return !(t.length !== 48 || !/[A-Za-z0-9+/_-]+/.test(t))
  }
  static isRaw(t) {
    if (t.indexOf(":") === -1) return !1;
    let [n, r] = t.split(":");
    return !(!Number.isInteger(parseFloat(n)) || !/[a-f0-9]+/.test(r.toLowerCase()) || r.length !== 64)
  }
  static normalize(t) {
    return typeof t == "string" ? Ct.parse(t).toString() : t.toString()
  }
  static parse(t) {
    if (Ct.isFriendly(t)) return this.parseFriendly(t).address;
    if (Ct.isRaw(t)) return this.parseRaw(t);
    throw new Error("Unknown address type: " + t)
  }
  static parseRaw(t) {
    let n = parseInt(t.split(":")[0]),
      r = Buffer.from(t.split(":")[1], "hex");
    return new Ct(n, r)
  }
  static parseFriendly(t) {
    if (Buffer.isBuffer(t)) {
      let n = go(t);
      return {
        isBounceable: n.isBounceable,
        isTestOnly: n.isTestOnly,
        address: new Ct(n.workchain, n.hashPart)
      }
    } else {
      let n = t.replace(/\-/g, "+").replace(/_/g, "/"),
        r = go(n);
      return {
        isBounceable: r.isBounceable,
        isTestOnly: r.isTestOnly,
        address: new Ct(r.workchain, r.hashPart)
      }
    }
  }
  constructor(t, n) {
    if (this.toRawString = () => this.workChain + ":" + this.hash.toString("hex"), this.toRaw = () => {
        const r = Buffer.alloc(36);
        return r.set(this.hash), r.set([this.workChain, this.workChain, this.workChain, this.workChain], 32), r
      }, this.toStringBuffer = r => {
        let i = r && r.testOnly !== void 0 ? r.testOnly : !1,
          a = (r && r.bounceable !== void 0 ? r.bounceable : !0) ? pa : js;
        i && (a |= ga);
        const s = Buffer.alloc(34);
        s[0] = a, s[1] = this.workChain, s.set(this.hash, 2);
        const c = Buffer.alloc(36);
        return c.set(s), c.set((0, Rs.crc16)(s), 34), c
      }, this.toString = r => {
        let i = r && r.urlSafe !== void 0 ? r.urlSafe : !0,
          o = this.toStringBuffer(r);
        return i ? o.toString("base64").replace(/\+/g, "-").replace(/\//g, "_") : o.toString("base64")
      }, this[Us] = () => this.toString(), n.length !== 32) throw new Error("Invalid address hash length: " + n.length);
    this.workChain = t, this.hash = n, Object.freeze(this)
  }
  equals(t) {
    return t.workChain !== this.workChain ? !1 : t.hash.equals(this.hash)
  }
}
kt.Address = Ct;
Us = _d.default;

function wd(e) {
  return Ct.parse(e)
}
kt.address = wd;
var sr = {},
  vd = pe && pe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  },
  Ls;
Object.defineProperty(sr, "__esModule", {
  value: !0
});
sr.ExternalAddress = void 0;
const kd = vd(ar);
class Ea {
  static isAddress(t) {
    return t instanceof Ea
  }
  constructor(t, n) {
    this[Ls] = () => this.toString(), this.value = t, this.bits = n
  }
  toString() {
    return `External<${this.bits}:${this.value}>`
  }
}
sr.ExternalAddress = Ea;
Ls = kd.default;
var ki = {},
  vn = {};
Object.defineProperty(vn, "__esModule", {
  value: !0
});
vn.base32Decode = vn.base32Encode = void 0;
const ma = "abcdefghijklmnopqrstuvwxyz234567";

function Sd(e) {
  const t = e.byteLength;
  let n = 0,
    r = 0,
    i = "";
  for (let o = 0; o < t; o++)
    for (r = r << 8 | e[o], n += 8; n >= 5;) i += ma[r >>> n - 5 & 31], n -= 5;
  return n > 0 && (i += ma[r << 5 - n & 31]), i
}
vn.base32Encode = Sd;

function Ad(e, t) {
  const n = e.indexOf(t);
  if (n === -1) throw new Error("Invalid character found: " + t);
  return n
}

function Id(e) {
  let t;
  t = e.toLowerCase();
  const {
    length: n
  } = t;
  let r = 0,
    i = 0,
    o = 0;
  const a = Buffer.alloc(n * 5 / 8 | 0);
  for (let s = 0; s < n; s++) i = i << 5 | Ad(ma, t[s]), r += 5, r >= 8 && (a[o++] = i >>> r - 8 & 255, r -= 8);
  return a
}
vn.base32Decode = Id;
var Cd = pe && pe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  },
  zs;
Object.defineProperty(ki, "__esModule", {
  value: !0
});
ki.ADNLAddress = void 0;
const Bd = Cd(ar),
  mo = vn,
  bo = or;
class ti {
  static parseFriendly(t) {
    if (t.length !== 55) throw Error("Invalid address");
    t = "f" + t;
    let n = (0, mo.base32Decode)(t);
    if (n[0] !== 45) throw Error("Invalid address");
    let r = n.slice(33);
    if (!(0, bo.crc16)(n.slice(0, 33)).equals(r)) throw Error("Invalid address");
    return new ti(n.slice(1, 33))
  }
  static parseRaw(t) {
    const n = Buffer.from(t, "base64");
    return new ti(n)
  }
  constructor(t) {
    if (this.toRaw = () => this.address.toString("hex").toUpperCase(), this.toString = () => {
        let n = Buffer.concat([Buffer.from([45]), this.address]),
          r = (0, bo.crc16)(n);
        return n = Buffer.concat([n, r]), (0, mo.base32Encode)(n).slice(1)
      }, this[zs] = () => this.toString(), t.length !== 32) throw Error("Invalid address");
    this.address = t
  }
  equals(t) {
    return this.address.equals(t.address)
  }
}
ki.ADNLAddress = ti;
zs = Bd.default;
var Si = {},
  cn = {},
  mr = {},
  br = {},
  un = {},
  yo;

function Ai() {
  if (yo) return un;
  yo = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.paddedBufferToBits = un.bitsToPaddedBuffer = void 0;
  const e = Ii(),
    t = rn();

  function n(i) {
    let o = new e.BitBuilder(Math.ceil(i.length / 8) * 8);
    o.writeBits(i);
    let a = Math.ceil(i.length / 8) * 8 - i.length;
    for (let s = 0; s < a; s++) s === 0 ? o.writeBit(1) : o.writeBit(0);
    return o.buffer()
  }
  un.bitsToPaddedBuffer = n;

  function r(i) {
    let o = 0;
    for (let a = i.length - 1; a >= 0; a--)
      if (i[a] !== 0) {
        const s = i[a];
        let c = s & -s;
        c & 1 || (c = Math.log2(c) + 1), a > 0 && (o = a << 3), o += 8 - c;
        break
      } return new t.BitString(i, 0, o)
  }
  return un.paddedBufferToBits = r, un
}
var _o;

function rn() {
  if (_o) return br;
  _o = 1;
  var e = pe && pe.__importDefault || function(o) {
      return o && o.__esModule ? o : {
        default: o
      }
    },
    t;
  Object.defineProperty(br, "__esModule", {
    value: !0
  }), br.BitString = void 0;
  const n = Ai(),
    r = e(ar);
  let i = class Xr {
    static isBitString(a) {
      return a instanceof Xr
    }
    constructor(a, s, c) {
      if (this[t] = () => this.toString(), c < 0) throw new Error(`Length ${c} is out of bounds`);
      this._length = c, this._data = a, this._offset = s
    }
    get length() {
      return this._length
    }
    at(a) {
      if (a >= this._length) throw new Error(`Index ${a} > ${this._length} is out of bounds`);
      if (a < 0) throw new Error(`Index ${a} < 0 is out of bounds`);
      let s = this._offset + a >> 3,
        c = 7 - (this._offset + a) % 8;
      return (this._data[s] & 1 << c) !== 0
    }
    substring(a, s) {
      if (a > this._length) throw new Error(`Offset(${a}) > ${this._length} is out of bounds`);
      if (a < 0) throw new Error(`Offset(${a}) < 0 is out of bounds`);
      if (s === 0) return Xr.EMPTY;
      if (a + s > this._length) throw new Error(`Offset ${a} + Length ${s} > ${this._length} is out of bounds`);
      return new Xr(this._data, this._offset + a, s)
    }
    subbuffer(a, s) {
      if (a > this._length) throw new Error(`Offset ${a} is out of bounds`);
      if (a < 0) throw new Error(`Offset ${a} is out of bounds`);
      if (a + s > this._length) throw new Error(`Offset + Lenght = ${a+s} is out of bounds`);
      if (s % 8 !== 0 || (this._offset + a) % 8 !== 0) return null;
      let c = this._offset + a >> 3,
        f = c + (s >> 3);
      return this._data.subarray(c, f)
    }
    equals(a) {
      if (this._length !== a._length) return !1;
      for (let s = 0; s < this._length; s++)
        if (this.at(s) !== a.at(s)) return !1;
      return !0
    }
    toString() {
      const a = (0, n.bitsToPaddedBuffer)(this);
      if (this._length % 4 === 0) {
        const s = a.subarray(0, Math.ceil(this._length / 8)).toString("hex").toUpperCase();
        return this._length % 8 === 0 ? s : s.substring(0, s.length - 1)
      } else {
        const s = a.toString("hex").toUpperCase();
        return this._length % 8 <= 4 ? s.substring(0, s.length - 1) + "_" : s + "_"
      }
    }
  };
  return br.BitString = i, t = r.default, i.EMPTY = new i(Buffer.alloc(0), 0, 0), br
}
var wo;

function Ii() {
  if (wo) return mr;
  wo = 1, Object.defineProperty(mr, "__esModule", {
    value: !0
  }), mr.BitBuilder = void 0;
  const e = kt,
    t = sr,
    n = rn();
  let r = class {
    constructor(o = 1023) {
      this._buffer = Buffer.alloc(Math.ceil(o / 8)), this._length = 0
    }
    get length() {
      return this._length
    }
    writeBit(o) {
      let a = this._length;
      if (a > this._buffer.length * 8) throw new Error("BitBuilder overflow");
      (typeof o == "boolean" && o === !0 || typeof o == "number" && o > 0) && (this._buffer[a / 8 | 0] |= 1 << 7 - a % 8), this._length++
    }
    writeBits(o) {
      for (let a = 0; a < o.length; a++) this.writeBit(o.at(a))
    }
    writeBuffer(o) {
      if (this._length % 8 === 0) {
        if (this._length + o.length * 8 > this._buffer.length * 8) throw new Error("BitBuilder overflow");
        o.copy(this._buffer, this._length / 8), this._length += o.length * 8
      } else
        for (let a = 0; a < o.length; a++) this.writeUint(o[a], 8)
    }
    writeUint(o, a) {
      if (a < 0 || !Number.isSafeInteger(a)) throw Error(`invalid bit length. Got ${a}`);
      const s = BigInt(o);
      if (a === 0) {
        if (s !== 0n) throw Error(`value is not zero for ${a} bits. Got ${o}`);
        return
      }
      const c = 1n << BigInt(a);
      if (s < 0 || s >= c) throw Error(`bitLength is too small for a value ${o}. Got ${a}`);
      if (this._length + a > this._buffer.length * 8) throw new Error("BitBuilder overflow");
      const f = 8 - this._length % 8;
      if (f > 0) {
        const u = Math.floor(this._length / 8);
        if (a < f) {
          const _ = Number(s);
          this._buffer[u] |= _ << f - a, this._length += a
        } else {
          const _ = Number(s >> BigInt(a - f));
          this._buffer[u] |= _, this._length += f
        }
      }
      for (a -= f; a > 0;) a >= 8 ? (this._buffer[this._length / 8] = Number(s >> BigInt(a - 8) & 0xffn), this._length += 8, a -= 8) : (this._buffer[this._length / 8] = Number(s << BigInt(8 - a) & 0xffn), this._length += a, a = 0)
    }
    writeInt(o, a) {
      let s = BigInt(o);
      if (a < 0 || !Number.isSafeInteger(a)) throw Error(`invalid bit length. Got ${a}`);
      if (a === 0) {
        if (o !== 0n) throw Error(`value is not zero for ${a} bits. Got ${o}`);
        return
      }
      if (a === 1) {
        if (o !== -1n && o !== 0n) throw Error(`value is not zero or -1 for ${a} bits. Got ${o}`);
        this.writeBit(o === -1n);
        return
      }
      let c = 1n << BigInt(a) - 1n;
      if (s < -c || s >= c) throw Error(`value is out of range for ${a} bits. Got ${o}`);
      s < 0 ? (this.writeBit(!0), s = c + s) : this.writeBit(!1), this.writeUint(s, a - 1)
    }
    writeVarUint(o, a) {
      let s = BigInt(o);
      if (a < 0 || !Number.isSafeInteger(a)) throw Error(`invalid bit length. Got ${a}`);
      if (s < 0) throw Error(`value is negative. Got ${o}`);
      if (s === 0n) {
        this.writeUint(0, a);
        return
      }
      const c = Math.ceil(s.toString(2).length / 8),
        f = c * 8;
      this.writeUint(c, a), this.writeUint(s, f)
    }
    writeVarInt(o, a) {
      let s = BigInt(o);
      if (a < 0 || !Number.isSafeInteger(a)) throw Error(`invalid bit length. Got ${a}`);
      if (s === 0n) {
        this.writeUint(0, a);
        return
      }
      let c = s > 0 ? s : -s;
      const f = Math.ceil((c.toString(2).length + 1) / 8),
        u = f * 8;
      this.writeUint(f, a), this.writeInt(s, u)
    }
    writeCoins(o) {
      this.writeVarUint(o, 4)
    }
    writeAddress(o) {
      if (o == null) {
        this.writeUint(0, 2);
        return
      }
      if (e.Address.isAddress(o)) {
        this.writeUint(2, 2), this.writeUint(0, 1), this.writeInt(o.workChain, 8), this.writeBuffer(o.hash);
        return
      }
      if (t.ExternalAddress.isAddress(o)) {
        this.writeUint(1, 2), this.writeUint(o.bits, 9), this.writeUint(o.value, o.bits);
        return
      }
      throw Error(`Invalid address. Got ${o}`)
    }
    build() {
      return new n.BitString(this._buffer, 0, this._length)
    }
    buffer() {
      if (this._length % 8 !== 0) throw new Error("BitBuilder buffer is not byte aligned");
      return this._buffer.subarray(0, this._length / 8)
    }
  };
  return mr.BitBuilder = r, mr
}
var yr = {},
  an = {};
Object.defineProperty(an, "__esModule", {
  value: !0
});
an.CellType = void 0;
var vo;
(function(e) {
  e[e.Ordinary = -1] = "Ordinary", e[e.PrunedBranch = 1] = "PrunedBranch", e[e.Library = 2] = "Library", e[e.MerkleProof = 3] = "MerkleProof", e[e.MerkleUpdate = 4] = "MerkleUpdate"
})(vo || (an.CellType = vo = {}));
var _r = {},
  wr = {},
  dn = {},
  Ci = {};
Object.defineProperty(Ci, "__esModule", {
  value: !0
});
Ci.readUnaryLength = void 0;

function Pd(e) {
  let t = 0;
  for (; e.loadBit();) t++;
  return t
}
Ci.readUnaryLength = Pd;
var fn = {},
  Bt = {};
Object.defineProperty(Bt, "__esModule", {
  value: !0
});
Bt.BitReader = void 0;
const Md = kt,
  Td = sr;
class Oa {
  constructor(t, n = 0) {
    this._checkpoints = [], this._bits = t, this._offset = n
  }
  get offset() {
    return this._offset
  }
  get remaining() {
    return this._bits.length - this._offset
  }
  skip(t) {
    if (t < 0 || this._offset + t > this._bits.length) throw new Error(`Index ${this._offset+t} is out of bounds`);
    this._offset += t
  }
  reset() {
    this._checkpoints.length > 0 ? this._offset = this._checkpoints.pop() : this._offset = 0
  }
  save() {
    this._checkpoints.push(this._offset)
  }
  loadBit() {
    let t = this._bits.at(this._offset);
    return this._offset++, t
  }
  preloadBit() {
    return this._bits.at(this._offset)
  }
  loadBits(t) {
    let n = this._bits.substring(this._offset, t);
    return this._offset += t, n
  }
  preloadBits(t) {
    return this._bits.substring(this._offset, t)
  }
  loadBuffer(t) {
    let n = this._preloadBuffer(t, this._offset);
    return this._offset += t * 8, n
  }
  preloadBuffer(t) {
    return this._preloadBuffer(t, this._offset)
  }
  loadUint(t) {
    return this._toSafeInteger(this.loadUintBig(t), "loadUintBig")
  }
  loadUintBig(t) {
    let n = this.preloadUintBig(t);
    return this._offset += t, n
  }
  preloadUint(t) {
    return this._toSafeInteger(this._preloadUint(t, this._offset), "preloadUintBig")
  }
  preloadUintBig(t) {
    return this._preloadUint(t, this._offset)
  }
  loadInt(t) {
    let n = this._preloadInt(t, this._offset);
    return this._offset += t, this._toSafeInteger(n, "loadUintBig")
  }
  loadIntBig(t) {
    let n = this._preloadInt(t, this._offset);
    return this._offset += t, n
  }
  preloadInt(t) {
    return this._toSafeInteger(this._preloadInt(t, this._offset), "preloadIntBig")
  }
  preloadIntBig(t) {
    return this._preloadInt(t, this._offset)
  }
  loadVarUint(t) {
    let n = Number(this.loadUint(t));
    return this._toSafeInteger(this.loadUintBig(n * 8), "loadVarUintBig")
  }
  loadVarUintBig(t) {
    let n = Number(this.loadUint(t));
    return this.loadUintBig(n * 8)
  }
  preloadVarUint(t) {
    let n = Number(this._preloadUint(t, this._offset));
    return this._toSafeInteger(this._preloadUint(n * 8, this._offset + t), "preloadVarUintBig")
  }
  preloadVarUintBig(t) {
    let n = Number(this._preloadUint(t, this._offset));
    return this._preloadUint(n * 8, this._offset + t)
  }
  loadVarInt(t) {
    let n = Number(this.loadUint(t));
    return this._toSafeInteger(this.loadIntBig(n * 8), "loadVarIntBig")
  }
  loadVarIntBig(t) {
    let n = Number(this.loadUint(t));
    return this.loadIntBig(n * 8)
  }
  preloadVarInt(t) {
    let n = Number(this._preloadUint(t, this._offset));
    return this._toSafeInteger(this._preloadInt(n * 8, this._offset + t), "preloadVarIntBig")
  }
  preloadVarIntBig(t) {
    let n = Number(this._preloadUint(t, this._offset));
    return this._preloadInt(n * 8, this._offset + t)
  }
  loadCoins() {
    return this.loadVarUintBig(4)
  }
  preloadCoins() {
    return this.preloadVarUintBig(4)
  }
  loadAddress() {
    let t = Number(this._preloadUint(2, this._offset));
    if (t === 2) return this._loadInternalAddress();
    throw new Error("Invalid address: " + t)
  }
  loadMaybeAddress() {
    let t = Number(this._preloadUint(2, this._offset));
    if (t === 0) return this._offset += 2, null;
    if (t === 2) return this._loadInternalAddress();
    throw new Error("Invalid address")
  }
  loadExternalAddress() {
    if (Number(this._preloadUint(2, this._offset)) === 1) return this._loadExternalAddress();
    throw new Error("Invalid address")
  }
  loadMaybeExternalAddress() {
    let t = Number(this._preloadUint(2, this._offset));
    if (t === 0) return this._offset += 2, null;
    if (t === 1) return this._loadExternalAddress();
    throw new Error("Invalid address")
  }
  loadAddressAny() {
    let t = Number(this._preloadUint(2, this._offset));
    if (t === 0) return this._offset += 2, null;
    if (t === 2) return this._loadInternalAddress();
    if (t === 1) return this._loadExternalAddress();
    throw Error(t === 3 ? "Unsupported" : "Unreachable")
  }
  loadPaddedBits(t) {
    if (t % 8 !== 0) throw new Error("Invalid number of bits");
    let n = t;
    for (;;)
      if (this._bits.at(this._offset + n - 1)) {
        n--;
        break
      } else n--;
    let r = this._bits.substring(this._offset, n);
    return this._offset += t, r
  }
  clone() {
    return new Oa(this._bits, this._offset)
  }
  _preloadInt(t, n) {
    if (t == 0) return 0n;
    let r = this._bits.at(n),
      i = 0n;
    for (let o = 0; o < t - 1; o++) this._bits.at(n + 1 + o) && (i += 1n << BigInt(t - o - 1 - 1));
    return r && (i = i - (1n << BigInt(t - 1))), i
  }
  _preloadUint(t, n) {
    if (t == 0) return 0n;
    let r = 0n;
    for (let i = 0; i < t; i++) this._bits.at(n + i) && (r += 1n << BigInt(t - i - 1));
    return r
  }
  _preloadBuffer(t, n) {
    let r = this._bits.subbuffer(n, t * 8);
    if (r) return r;
    let i = Buffer.alloc(t);
    for (let o = 0; o < t; o++) i[o] = Number(this._preloadUint(8, n + o * 8));
    return i
  }
  _loadInternalAddress() {
    if (Number(this._preloadUint(2, this._offset)) !== 2 || this._preloadUint(1, this._offset + 2) !== 0n) throw Error("Invalid address");
    let n = Number(this._preloadInt(8, this._offset + 3)),
      r = this._preloadBuffer(32, this._offset + 11);
    return this._offset += 267, new Md.Address(n, r)
  }
  _loadExternalAddress() {
    if (Number(this._preloadUint(2, this._offset)) !== 1) throw Error("Invalid address");
    let n = Number(this._preloadUint(9, this._offset + 2)),
      r = this._preloadUint(n, this._offset + 11);
    return this._offset += 11 + n, new Td.ExternalAddress(r, n)
  }
  _toSafeInteger(t, n) {
    if (BigInt(Number.MAX_SAFE_INTEGER) < t || t < BigInt(Number.MIN_SAFE_INTEGER)) throw new TypeError(`${t} is out of safe integer range. Use ${n} instead`);
    return Number(t)
  }
}
Bt.BitReader = Oa;
var ko;

function Bi() {
  if (ko) return fn;
  ko = 1, Object.defineProperty(fn, "__esModule", {
    value: !0
  }), fn.convertToMerkleProof = fn.exoticMerkleProof = void 0;
  const e = Bt,
    t = qe();

  function n(i, o) {
    const a = new e.BitReader(i);
    if (i.length !== 280) throw new Error(`Merkle Proof cell must have exactly (8 + 256 + 16) bits, got "${i.length}"`);
    if (o.length !== 1) throw new Error(`Merkle Proof cell must have exactly 1 ref, got "${o.length}"`);
    let c = a.loadUint(8);
    if (c !== 3) throw new Error(`Merkle Proof cell must have type 3, got "${c}"`);
    const f = a.loadBuffer(32),
      u = a.loadUint(16),
      _ = o[0].hash(0),
      B = o[0].depth(0);
    if (u !== B) throw new Error(`Merkle Proof cell ref depth must be exactly "${u}", got "${B}"`);
    if (!f.equals(_)) throw new Error(`Merkle Proof cell ref hash must be exactly "${f.toString("hex")}", got "${_.toString("hex")}"`);
    return {
      proofDepth: u,
      proofHash: f
    }
  }
  fn.exoticMerkleProof = n;

  function r(i) {
    return (0, t.beginCell)().storeUint(3, 8).storeBuffer(i.hash(0)).storeUint(i.depth(0), 16).storeRef(i).endCell({
      exotic: !0
    })
  }
  return fn.convertToMerkleProof = r, fn
}
var So;

function xa() {
  if (So) return dn;
  So = 1, Object.defineProperty(dn, "__esModule", {
    value: !0
  }), dn.generateMerkleProof = dn.generateMerkleProofDirect = void 0;
  const e = qe(),
    t = Ci,
    n = Bi();

  function r(s) {
    return (0, e.beginCell)().storeUint(1, 8).storeUint(1, 8).storeBuffer(s.hash(0)).storeUint(s.depth(0), 16).endCell({
      exotic: !0
    })
  }

  function i(s, c, f, u) {
    const _ = c.asCell();
    if (u.length == 0) return r(_);
    let B = c.loadBit() ? 1 : 0,
      y = 0,
      S = s;
    if (B === 0) {
      y = (0, t.readUnaryLength)(c);
      for (let m = 0; m < y; m++) S += c.loadBit() ? "1" : "0"
    } else if ((c.loadBit() ? 1 : 0) === 0) {
      y = c.loadUint(Math.ceil(Math.log2(f + 1)));
      for (let v = 0; v < y; v++) S += c.loadBit() ? "1" : "0"
    } else {
      let v = c.loadBit() ? "1" : "0";
      y = c.loadUint(Math.ceil(Math.log2(f + 1)));
      for (let x = 0; x < y; x++) S += v
    }
    if (f - y === 0) return _;
    {
      let m = _.beginParse(),
        v = m.loadRef(),
        x = m.loadRef();
      if (!v.isExotic) {
        const M = u.filter(p => S + "0" === p.slice(0, S.length + 1));
        v = i(S + "0", v.beginParse(), f - y - 1, M)
      }
      if (!x.isExotic) {
        const M = u.filter(p => S + "1" === p.slice(0, S.length + 1));
        x = i(S + "1", x.beginParse(), f - y - 1, M)
      }
      return (0, e.beginCell)().storeSlice(m).storeRef(v).storeRef(x).endCell()
    }
  }

  function o(s, c, f) {
    c.forEach(_ => {
      if (!s.has(_)) throw new Error(`Trying to generate merkle proof for a missing key "${_}"`)
    });
    const u = (0, e.beginCell)().storeDictDirect(s).asSlice();
    return i("", u, f.bits, c.map(_ => f.serialize(_).toString(2).padStart(f.bits, "0")))
  }
  dn.generateMerkleProofDirect = o;

  function a(s, c, f) {
    return (0, n.convertToMerkleProof)(o(s, c, f))
  }
  return dn.generateMerkleProof = a, dn
}
var vr = {},
  Ao;

function Ns() {
  if (Ao) return vr;
  Ao = 1, Object.defineProperty(vr, "__esModule", {
    value: !0
  }), vr.generateMerkleUpdate = void 0;
  const e = qe(),
    t = xa();

  function n(i, o) {
    return (0, e.beginCell)().storeUint(4, 8).storeBuffer(i.hash(0)).storeBuffer(o.hash(0)).storeUint(i.depth(0), 16).storeUint(o.depth(0), 16).storeRef(i).storeRef(o).endCell({
      exotic: !0
    })
  }

  function r(i, o, a, s) {
    const c = (0, t.generateMerkleProof)(i, [o], a).refs[0];
    i.set(o, s);
    const f = (0, t.generateMerkleProof)(i, [o], a).refs[0];
    return n(c, f)
  }
  return vr.generateMerkleUpdate = r, vr
}
var Pi = {};
Object.defineProperty(Pi, "__esModule", {
  value: !0
});
Pi.parseDict = void 0;

function Ed(e) {
  let t = 0;
  for (; e.loadBit();) t++;
  return t
}

function ba(e, t, n, r, i) {
  let o = t.loadBit() ? 1 : 0,
    a = 0,
    s = e;
  if (o === 0) {
    a = Ed(t);
    for (let c = 0; c < a; c++) s += t.loadBit() ? "1" : "0"
  } else if ((t.loadBit() ? 1 : 0) === 0) {
    a = t.loadUint(Math.ceil(Math.log2(n + 1)));
    for (let f = 0; f < a; f++) s += t.loadBit() ? "1" : "0"
  } else {
    let f = t.loadBit() ? "1" : "0";
    a = t.loadUint(Math.ceil(Math.log2(n + 1)));
    for (let u = 0; u < a; u++) s += f
  }
  if (n - a === 0) r.set(BigInt("0b" + s), i(t));
  else {
    let c = t.loadRef(),
      f = t.loadRef();
    c.isExotic || ba(s + "0", c.beginParse(), n - a - 1, r, i), f.isExotic || ba(s + "1", f.beginParse(), n - a - 1, r, i)
  }
}

function Od(e, t, n) {
  let r = new Map;
  return e && ba("", e, t, r, n), r
}
Pi.parseDict = Od;
var ft = {},
  Mi = {};
Object.defineProperty(Mi, "__esModule", {
  value: !0
});
Mi.findCommonPrefix = void 0;

function xd(e, t = 0) {
  if (e.length === 0) return "";
  let n = e[0].slice(t);
  for (let r = 1; r < e.length; r++) {
    const i = e[r];
    for (; i.indexOf(n, t) !== t;)
      if (n = n.substring(0, n.length - 1), n === "") return n
  }
  return n
}
Mi.findCommonPrefix = xd;
var Io;

function Ud() {
  if (Io) return ft;
  Io = 1, Object.defineProperty(ft, "__esModule", {
    value: !0
  }), ft.serializeDict = ft.detectLabelType = ft.writeLabelSame = ft.writeLabelLong = ft.writeLabelShort = ft.buildTree = void 0;
  const e = qe(),
    t = Mi;

  function n(p, h) {
    for (; p.length < h;) p = "0" + p;
    return p
  }

  function r(p, h) {
    if (p.size === 0) throw Error("Internal inconsistency");
    let P = new Map,
      k = new Map;
    for (let [T, J] of p.entries()) T[h] === "0" ? P.set(T, J) : k.set(T, J);
    if (P.size === 0) throw Error("Internal inconsistency. Left emtpy.");
    if (k.size === 0) throw Error("Internal inconsistency. Right emtpy.");
    return {
      left: P,
      right: k
    }
  }

  function i(p, h) {
    if (p.size === 0) throw Error("Internal inconsistency");
    if (p.size === 1) return {
      type: "leaf",
      value: Array.from(p.values())[0]
    };
    let {
      left: P,
      right: k
    } = r(p, h);
    return {
      type: "fork",
      left: o(P, h + 1),
      right: o(k, h + 1)
    }
  }

  function o(p, h = 0) {
    if (p.size === 0) throw Error("Internal inconsistency");
    const P = (0, t.findCommonPrefix)(Array.from(p.keys()), h);
    return {
      label: P,
      node: i(p, P.length + h)
    }
  }

  function a(p, h) {
    let P = new Map;
    for (let k of Array.from(p.keys())) {
      const T = n(k.toString(2), h);
      P.set(T, p.get(k))
    }
    return o(P)
  }
  ft.buildTree = a;

  function s(p, h) {
    h.storeBit(0);
    for (let P = 0; P < p.length; P++) h.storeBit(1);
    return h.storeBit(0), p.length > 0 && h.storeUint(BigInt("0b" + p), p.length), h
  }
  ft.writeLabelShort = s;

  function c(p) {
    return 1 + p.length + 1 + p.length
  }

  function f(p, h, P) {
    P.storeBit(1), P.storeBit(0);
    let k = Math.ceil(Math.log2(h + 1));
    return P.storeUint(p.length, k), p.length > 0 && P.storeUint(BigInt("0b" + p), p.length), P
  }
  ft.writeLabelLong = f;

  function u(p, h) {
    return 2 + Math.ceil(Math.log2(h + 1)) + p.length
  }

  function _(p, h, P, k) {
    k.storeBit(1), k.storeBit(1), k.storeBit(p);
    let T = Math.ceil(Math.log2(P + 1));
    k.storeUint(h, T)
  }
  ft.writeLabelSame = _;

  function B(p) {
    return 3 + Math.ceil(Math.log2(p + 1))
  }

  function y(p) {
    if (p.length === 0 || p.length === 1) return !0;
    for (let h = 1; h < p.length; h++)
      if (p[h] !== p[0]) return !1;
    return !0
  }

  function S(p, h) {
    let P = "short",
      k = c(p),
      T = u(p, h);
    if (T < k && (k = T, P = "long"), y(p)) {
      let J = B(h);
      J < k && (k = J, P = "same")
    }
    return P
  }
  ft.detectLabelType = S;

  function m(p, h, P) {
    let k = S(p, h);
    k === "short" ? s(p, P) : k === "long" ? f(p, h, P) : k === "same" && _(p[0] === "1", p.length, h, P)
  }

  function v(p, h, P, k) {
    if (p.type === "leaf" && P(p.value, k), p.type === "fork") {
      const T = (0, e.beginCell)(),
        J = (0, e.beginCell)();
      x(p.left, h - 1, P, T), x(p.right, h - 1, P, J), k.storeRef(T), k.storeRef(J)
    }
  }

  function x(p, h, P, k) {
    m(p.label, h, k), v(p.node, h - p.label.length, P, k)
  }

  function M(p, h, P, k) {
    const T = a(p, h);
    x(T, h, P, k)
  }
  return ft.serializeDict = M, ft
}
var tr = {};
Object.defineProperty(tr, "__esModule", {
  value: !0
});
tr.deserializeInternalKey = tr.serializeInternalKey = void 0;
const Ds = kt,
  ya = rn(),
  Rd = Ai();

function jd(e) {
  if (typeof e == "number") {
    if (!Number.isSafeInteger(e)) throw Error("Invalid key type: not a safe integer: " + e);
    return "n:" + e.toString(10)
  } else {
    if (typeof e == "bigint") return "b:" + e.toString(10);
    if (Ds.Address.isAddress(e)) return "a:" + e.toString();
    if (Buffer.isBuffer(e)) return "f:" + e.toString("hex");
    if (ya.BitString.isBitString(e)) return "B:" + e.toString();
    throw Error("Invalid key type")
  }
}
tr.serializeInternalKey = jd;

function Ld(e) {
  let t = e.slice(0, 2),
    n = e.slice(2);
  if (t === "n:") return parseInt(n, 10);
  if (t === "b:") return BigInt(n);
  if (t === "a:") return Ds.Address.parse(n);
  if (t === "f:") return Buffer.from(n, "hex");
  if (t === "B:") {
    const r = n.slice(-1) == "_";
    if (r || n.length % 2 != 0) {
      let o = r ? n.length - 1 : n.length;
      const a = n.substr(0, o) + "0";
      return !r && o & 1 ? new ya.BitString(Buffer.from(a, "hex"), 0, o << 2) : (0, Rd.paddedBufferToBits)(Buffer.from(a, "hex"))
    } else return new ya.BitString(Buffer.from(n, "hex"), 0, n.length << 2)
  }
  throw Error("Invalid key type: " + t)
}
tr.deserializeInternalKey = Ld;
var Co;

function Vn() {
  if (Co) return wr;
  Co = 1, Object.defineProperty(wr, "__esModule", {
    value: !0
  }), wr.Dictionary = void 0;
  const e = kt,
    t = qe(),
    n = Gn(),
    r = rn(),
    i = xa(),
    o = Ns(),
    a = Pi,
    s = Ud(),
    c = tr;
  let f = class Vt {
    static empty(z, ie) {
      return z && ie ? new Vt(new Map, z, ie) : new Vt(new Map, null, null)
    }
    static load(z, ie, ve) {
      let Ce;
      if (ve instanceof n.Cell) {
        if (ve.isExotic) return Vt.empty(z, ie);
        Ce = ve.beginParse()
      } else Ce = ve;
      let Ee = Ce.loadMaybeRef();
      return Ee && !Ee.isExotic ? Vt.loadDirect(z, ie, Ee.beginParse()) : Vt.empty(z, ie)
    }
    static loadDirect(z, ie, ve) {
      if (!ve) return Vt.empty(z, ie);
      let Ce;
      ve instanceof n.Cell ? Ce = ve.beginParse() : Ce = ve;
      let Ee = (0, a.parseDict)(Ce, z.bits, ie.parse),
        F = new Map;
      for (let [Ve, Fe] of Ee) F.set((0, c.serializeInternalKey)(z.parse(Ve)), Fe);
      return new Vt(F, z, ie)
    }
    constructor(z, ie, ve) {
      this._key = ie, this._value = ve, this._map = z
    }
    get size() {
      return this._map.size
    }
    get(z) {
      return this._map.get((0, c.serializeInternalKey)(z))
    }
    has(z) {
      return this._map.has((0, c.serializeInternalKey)(z))
    }
    set(z, ie) {
      return this._map.set((0, c.serializeInternalKey)(z), ie), this
    }
    delete(z) {
      const ie = (0, c.serializeInternalKey)(z);
      return this._map.delete(ie)
    }
    clear() {
      this._map.clear()
    }*[Symbol.iterator]() {
      for (const [z, ie] of this._map) yield [(0, c.deserializeInternalKey)(z), ie]
    }
    keys() {
      return Array.from(this._map.keys()).map(z => (0, c.deserializeInternalKey)(z))
    }
    values() {
      return Array.from(this._map.values())
    }
    store(z, ie, ve) {
      if (this._map.size === 0) z.storeBit(0);
      else {
        let Ce = this._key;
        ie != null && (Ce = ie);
        let Ee = this._value;
        if (ve != null && (Ee = ve), !Ce) throw Error("Key serializer is not defined");
        if (!Ee) throw Error("Value serializer is not defined");
        let F = new Map;
        for (const [Fe, gt] of this._map) F.set(Ce.serialize((0, c.deserializeInternalKey)(Fe)), gt);
        z.storeBit(1);
        let Ve = (0, t.beginCell)();
        (0, s.serializeDict)(F, Ce.bits, Ee.serialize, Ve), z.storeRef(Ve.endCell())
      }
    }
    storeDirect(z, ie, ve) {
      if (this._map.size === 0) throw Error("Cannot store empty dictionary directly");
      let Ce = this._key;
      ie != null && (Ce = ie);
      let Ee = this._value;
      if (ve != null && (Ee = ve), !Ce) throw Error("Key serializer is not defined");
      if (!Ee) throw Error("Value serializer is not defined");
      let F = new Map;
      for (const [Ve, Fe] of this._map) F.set(Ce.serialize((0, c.deserializeInternalKey)(Ve)), Fe);
      (0, s.serializeDict)(F, Ce.bits, Ee.serialize, z)
    }
    generateMerkleProof(z) {
      return (0, i.generateMerkleProof)(this, z, this._key)
    }
    generateMerkleProofDirect(z) {
      return (0, i.generateMerkleProofDirect)(this, z, this._key)
    }
    generateMerkleUpdate(z, ie) {
      return (0, o.generateMerkleUpdate)(this, z, this._key, ie)
    }
  };
  wr.Dictionary = f, f.Keys = {
    Address: () => u(),
    BigInt: V => _(V),
    Int: V => B(V),
    BigUint: V => y(V),
    Uint: V => S(V),
    Buffer: V => m(V),
    BitString: V => v(V)
  }, f.Values = {
    BigInt: V => M(V),
    Int: V => x(V),
    BigVarInt: V => p(V),
    BigUint: V => k(V),
    Uint: V => P(V),
    BigVarUint: V => h(V),
    Bool: () => T(),
    Address: () => J(),
    Cell: () => ne(),
    Buffer: V => we(V),
    BitString: V => ke(V),
    Dictionary: (V, z) => q(V, z)
  };

  function u() {
    return {
      bits: 267,
      serialize: V => {
        if (!e.Address.isAddress(V)) throw Error("Key is not an address");
        return (0, t.beginCell)().storeAddress(V).endCell().beginParse().preloadUintBig(267)
      },
      parse: V => (0, t.beginCell)().storeUint(V, 267).endCell().beginParse().loadAddress()
    }
  }

  function _(V) {
    return {
      bits: V,
      serialize: z => {
        if (typeof z != "bigint") throw Error("Key is not a bigint");
        return (0, t.beginCell)().storeInt(z, V).endCell().beginParse().loadUintBig(V)
      },
      parse: z => (0, t.beginCell)().storeUint(z, V).endCell().beginParse().loadIntBig(V)
    }
  }

  function B(V) {
    return {
      bits: V,
      serialize: z => {
        if (typeof z != "number") throw Error("Key is not a number");
        if (!Number.isSafeInteger(z)) throw Error("Key is not a safe integer: " + z);
        return (0, t.beginCell)().storeInt(z, V).endCell().beginParse().loadUintBig(V)
      },
      parse: z => (0, t.beginCell)().storeUint(z, V).endCell().beginParse().loadInt(V)
    }
  }

  function y(V) {
    return {
      bits: V,
      serialize: z => {
        if (typeof z != "bigint") throw Error("Key is not a bigint");
        if (z < 0) throw Error("Key is negative: " + z);
        return (0, t.beginCell)().storeUint(z, V).endCell().beginParse().loadUintBig(V)
      },
      parse: z => (0, t.beginCell)().storeUint(z, V).endCell().beginParse().loadUintBig(V)
    }
  }

  function S(V) {
    return {
      bits: V,
      serialize: z => {
        if (typeof z != "number") throw Error("Key is not a number");
        if (!Number.isSafeInteger(z)) throw Error("Key is not a safe integer: " + z);
        if (z < 0) throw Error("Key is negative: " + z);
        return (0, t.beginCell)().storeUint(z, V).endCell().beginParse().loadUintBig(V)
      },
      parse: z => Number((0, t.beginCell)().storeUint(z, V).endCell().beginParse().loadUint(V))
    }
  }

  function m(V) {
    return {
      bits: V * 8,
      serialize: z => {
        if (!Buffer.isBuffer(z)) throw Error("Key is not a buffer");
        return (0, t.beginCell)().storeBuffer(z).endCell().beginParse().loadUintBig(V * 8)
      },
      parse: z => (0, t.beginCell)().storeUint(z, V * 8).endCell().beginParse().loadBuffer(V)
    }
  }

  function v(V) {
    return {
      bits: V,
      serialize: z => {
        if (!r.BitString.isBitString(z)) throw Error("Key is not a BitString");
        return (0, t.beginCell)().storeBits(z).endCell().beginParse().loadUintBig(V)
      },
      parse: z => (0, t.beginCell)().storeUint(z, V).endCell().beginParse().loadBits(V)
    }
  }

  function x(V) {
    return {
      serialize: (z, ie) => {
        ie.storeInt(z, V)
      },
      parse: z => z.loadInt(V)
    }
  }

  function M(V) {
    return {
      serialize: (z, ie) => {
        ie.storeInt(z, V)
      },
      parse: z => z.loadIntBig(V)
    }
  }

  function p(V) {
    return {
      serialize: (z, ie) => {
        ie.storeVarInt(z, V)
      },
      parse: z => z.loadVarIntBig(V)
    }
  }

  function h(V) {
    return {
      serialize: (z, ie) => {
        ie.storeVarUint(z, V)
      },
      parse: z => z.loadVarUintBig(V)
    }
  }

  function P(V) {
    return {
      serialize: (z, ie) => {
        ie.storeUint(z, V)
      },
      parse: z => z.loadUint(V)
    }
  }

  function k(V) {
    return {
      serialize: (z, ie) => {
        ie.storeUint(z, V)
      },
      parse: z => z.loadUintBig(V)
    }
  }

  function T() {
    return {
      serialize: (V, z) => {
        z.storeBit(V)
      },
      parse: V => V.loadBit()
    }
  }

  function J() {
    return {
      serialize: (V, z) => {
        z.storeAddress(V)
      },
      parse: V => V.loadAddress()
    }
  }

  function ne() {
    return {
      serialize: (V, z) => {
        z.storeRef(V)
      },
      parse: V => V.loadRef()
    }
  }

  function q(V, z) {
    return {
      serialize: (ie, ve) => {
        ie.store(ve)
      },
      parse: ie => f.load(V, z, ie)
    }
  }

  function we(V) {
    return {
      serialize: (z, ie) => {
        if (z.length !== V) throw Error("Invalid buffer size");
        ie.storeBuffer(z)
      },
      parse: z => z.loadBuffer(V)
    }
  }

  function ke(V) {
    return {
      serialize: (z, ie) => {
        if (z.length !== V) throw Error("Invalid BitString size");
        ie.storeBits(z)
      },
      parse: z => z.loadBits(V)
    }
  }
  return wr
}
var Rt = {},
  Bo;

function Fs() {
  if (Bo) return Rt;
  Bo = 1, Object.defineProperty(Rt, "__esModule", {
    value: !0
  }), Rt.writeString = Rt.stringToCell = Rt.readString = void 0;
  const e = qe();

  function t(a) {
    if (a.remainingBits % 8 !== 0) throw new Error(`Invalid string length: ${a.remainingBits}`);
    if (a.remainingRefs !== 0 && a.remainingRefs !== 1) throw new Error(`invalid number of refs: ${a.remainingRefs}`);
    let s;
    return a.remainingBits === 0 ? s = Buffer.alloc(0) : s = a.loadBuffer(a.remainingBits / 8), a.remainingRefs === 1 && (s = Buffer.concat([s, t(a.loadRef().beginParse())])), s
  }

  function n(a) {
    return t(a).toString()
  }
  Rt.readString = n;

  function r(a, s) {
    if (a.length > 0) {
      let c = Math.floor(s.availableBits / 8);
      if (a.length > c) {
        let f = a.subarray(0, c),
          u = a.subarray(c);
        s = s.storeBuffer(f);
        let _ = (0, e.beginCell)();
        r(u, _), s = s.storeRef(_.endCell())
      } else s = s.storeBuffer(a)
    }
  }

  function i(a) {
    let s = (0, e.beginCell)();
    return r(Buffer.from(a), s), s.endCell()
  }
  Rt.stringToCell = i;

  function o(a, s) {
    r(Buffer.from(a), s)
  }
  return Rt.writeString = o, Rt
}
var Po;

function Ua() {
  if (Po) return _r;
  Po = 1;
  var e = pe && pe.__importDefault || function(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    },
    t;
  Object.defineProperty(_r, "__esModule", {
    value: !0
  }), _r.Slice = void 0;
  const n = e(ar),
    r = Vn(),
    i = qe(),
    o = Fs();
  let a = class _a {
    constructor(c, f) {
      this[t] = () => this.toString(), this._reader = c.clone(), this._refs = [...f], this._refsOffset = 0
    }
    get remainingBits() {
      return this._reader.remaining
    }
    get offsetBits() {
      return this._reader.offset
    }
    get remainingRefs() {
      return this._refs.length - this._refsOffset
    }
    get offsetRefs() {
      return this._refsOffset
    }
    skip(c) {
      return this._reader.skip(c), this
    }
    loadBit() {
      return this._reader.loadBit()
    }
    preloadBit() {
      return this._reader.preloadBit()
    }
    loadBoolean() {
      return this.loadBit()
    }
    loadMaybeBoolean() {
      return this.loadBit() ? this.loadBoolean() : null
    }
    loadBits(c) {
      return this._reader.loadBits(c)
    }
    preloadBits(c) {
      return this._reader.preloadBits(c)
    }
    loadUint(c) {
      return this._reader.loadUint(c)
    }
    loadUintBig(c) {
      return this._reader.loadUintBig(c)
    }
    preloadUint(c) {
      return this._reader.preloadUint(c)
    }
    preloadUintBig(c) {
      return this._reader.preloadUintBig(c)
    }
    loadMaybeUint(c) {
      return this.loadBit() ? this.loadUint(c) : null
    }
    loadMaybeUintBig(c) {
      return this.loadBit() ? this.loadUintBig(c) : null
    }
    loadInt(c) {
      return this._reader.loadInt(c)
    }
    loadIntBig(c) {
      return this._reader.loadIntBig(c)
    }
    preloadInt(c) {
      return this._reader.preloadInt(c)
    }
    preloadIntBig(c) {
      return this._reader.preloadIntBig(c)
    }
    loadMaybeInt(c) {
      return this.loadBit() ? this.loadInt(c) : null
    }
    loadMaybeIntBig(c) {
      return this.loadBit() ? this.loadIntBig(c) : null
    }
    loadVarUint(c) {
      return this._reader.loadVarUint(c)
    }
    loadVarUintBig(c) {
      return this._reader.loadVarUintBig(c)
    }
    preloadVarUint(c) {
      return this._reader.preloadVarUint(c)
    }
    preloadVarUintBig(c) {
      return this._reader.preloadVarUintBig(c)
    }
    loadVarInt(c) {
      return this._reader.loadVarInt(c)
    }
    loadVarIntBig(c) {
      return this._reader.loadVarIntBig(c)
    }
    preloadVarInt(c) {
      return this._reader.preloadVarInt(c)
    }
    preloadVarIntBig(c) {
      return this._reader.preloadVarIntBig(c)
    }
    loadCoins() {
      return this._reader.loadCoins()
    }
    preloadCoins() {
      return this._reader.preloadCoins()
    }
    loadMaybeCoins() {
      return this._reader.loadBit() ? this._reader.loadCoins() : null
    }
    loadAddress() {
      return this._reader.loadAddress()
    }
    loadMaybeAddress() {
      return this._reader.loadMaybeAddress()
    }
    loadExternalAddress() {
      return this._reader.loadExternalAddress()
    }
    loadMaybeExternalAddress() {
      return this._reader.loadMaybeExternalAddress()
    }
    loadAddressAny() {
      return this._reader.loadAddressAny()
    }
    loadRef() {
      if (this._refsOffset >= this._refs.length) throw new Error("No more references");
      return this._refs[this._refsOffset++]
    }
    preloadRef() {
      if (this._refsOffset >= this._refs.length) throw new Error("No more references");
      return this._refs[this._refsOffset]
    }
    loadMaybeRef() {
      return this.loadBit() ? this.loadRef() : null
    }
    preloadMaybeRef() {
      return this.preloadBit() ? this.preloadRef() : null
    }
    loadBuffer(c) {
      return this._reader.loadBuffer(c)
    }
    preloadBuffer(c) {
      return this._reader.preloadBuffer(c)
    }
    loadStringTail() {
      return (0, o.readString)(this)
    }
    loadMaybeStringTail() {
      return this.loadBit() ? (0, o.readString)(this) : null
    }
    loadStringRefTail() {
      return (0, o.readString)(this.loadRef().beginParse())
    }
    loadMaybeStringRefTail() {
      const c = this.loadMaybeRef();
      return c ? (0, o.readString)(c.beginParse()) : null
    }
    loadDict(c, f) {
      return r.Dictionary.load(c, f, this)
    }
    loadDictDirect(c, f) {
      return r.Dictionary.loadDirect(c, f, this)
    }
    endParse() {
      if (this.remainingBits > 0 || this.remainingRefs > 0) throw new Error("Slice is not empty")
    }
    asCell() {
      return (0, i.beginCell)().storeSlice(this).endCell()
    }
    asBuilder() {
      return (0, i.beginCell)().storeSlice(this)
    }
    clone(c = !1) {
      if (c) {
        let f = this._reader.clone();
        return f.reset(), new _a(f, this._refs)
      } else {
        let f = new _a(this._reader, this._refs);
        return f._refsOffset = this._refsOffset, f
      }
    }
    toString() {
      return this.asCell().toString()
    }
  };
  return _r.Slice = a, t = n.default, _r
}
var kr = {},
  Nr = {};
Object.defineProperty(Nr, "__esModule", {
  value: !0
});
Nr.exoticLibrary = void 0;
const zd = Bt;

function Nd(e, t) {
  const n = new zd.BitReader(e);
  if (e.length !== 264) throw new Error(`Library cell must have exactly (8 + 256) bits, got "${e.length}"`);
  let i = n.loadUint(8);
  if (i !== 2) throw new Error(`Library cell must have type 2, got "${i}"`);
  return {}
}
Nr.exoticLibrary = Nd;
var lr = {};
Object.defineProperty(lr, "__esModule", {
  value: !0
});
lr.exoticMerkleUpdate = void 0;
const Dd = Bt;

function Fd(e, t) {
  const n = new Dd.BitReader(e),
    r = 8 + 2 * 272;
  if (e.length !== r) throw new Error(`Merkle Update cell must have exactly (8 + (2 * (256 + 16))) bits, got "${e.length}"`);
  if (t.length !== 2) throw new Error(`Merkle Update cell must have exactly 2 refs, got "${t.length}"`);
  let i = n.loadUint(8);
  if (i !== 4) throw new Error(`Merkle Update cell type must be exactly 4, got "${i}"`);
  const o = n.loadBuffer(32),
    a = n.loadBuffer(32),
    s = n.loadUint(16),
    c = n.loadUint(16);
  if (s !== t[0].depth(0)) throw new Error(`Merkle Update cell ref depth must be exactly "${s}", got "${t[0].depth(0)}"`);
  if (!o.equals(t[0].hash(0))) throw new Error(`Merkle Update cell ref hash must be exactly "${o.toString("hex")}", got "${t[0].hash(0).toString("hex")}"`);
  if (c !== t[1].depth(0)) throw new Error(`Merkle Update cell ref depth must be exactly "${c}", got "${t[1].depth(0)}"`);
  if (!a.equals(t[1].hash(0))) throw new Error(`Merkle Update cell ref hash must be exactly "${a.toString("hex")}", got "${t[1].hash(0).toString("hex")}"`);
  return {
    proofDepth1: s,
    proofDepth2: c,
    proofHash1: o,
    proofHash2: a
  }
}
lr.exoticMerkleUpdate = Fd;
var cr = {},
  ur = {};
Object.defineProperty(ur, "__esModule", {
  value: !0
});
ur.LevelMask = void 0;
class Ra {
  constructor(t = 0) {
    this._mask = 0, this._mask = t, this._hashIndex = Kd(this._mask), this._hashCount = this._hashIndex + 1
  }
  get value() {
    return this._mask
  }
  get level() {
    return 32 - Math.clz32(this._mask)
  }
  get hashIndex() {
    return this._hashIndex
  }
  get hashCount() {
    return this._hashCount
  }
  apply(t) {
    return new Ra(this._mask & (1 << t) - 1)
  }
  isSignificant(t) {
    return t === 0 || (this._mask >> t - 1) % 2 !== 0
  }
}
ur.LevelMask = Ra;

function Kd(e) {
  return e = e - (e >> 1 & 1431655765), e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >> 24
}
Object.defineProperty(cr, "__esModule", {
  value: !0
});
cr.exoticPruned = void 0;
const $d = Bt,
  Mo = ur;

function Hd(e, t) {
  let n = new $d.BitReader(e),
    r = n.loadUint(8);
  if (r !== 1) throw new Error(`Pruned branch cell must have type 1, got "${r}"`);
  if (t.length !== 0) throw new Error(`Pruned Branch cell can't has refs, got "${t.length}"`);
  let i;
  if (e.length === 280) i = new Mo.LevelMask(1);
  else {
    if (i = new Mo.LevelMask(n.loadUint(8)), i.level < 1 || i.level > 3) throw new Error(`Pruned Branch cell level must be >= 1 and <= 3, got "${i.level}/${i.value}"`);
    const c = 16 + i.apply(i.level - 1).hashCount * 272;
    if (e.length !== c) throw new Error(`Pruned branch cell must have exactly ${c} bits, got "${e.length}"`)
  }
  let o = [],
    a = [],
    s = [];
  for (let c = 0; c < i.level; c++) a.push(n.loadBuffer(32));
  for (let c = 0; c < i.level; c++) s.push(n.loadUint(16));
  for (let c = 0; c < i.level; c++) o.push({
    depth: s[c],
    hash: a[c]
  });
  return {
    mask: i.value,
    pruned: o
  }
}
cr.exoticPruned = Hd;
var To;

function Vd() {
  if (To) return kr;
  To = 1, Object.defineProperty(kr, "__esModule", {
    value: !0
  }), kr.resolveExotic = void 0;
  const e = Bt,
    t = an,
    n = Nr,
    r = Bi(),
    i = lr,
    o = cr,
    a = ur;

  function s(B, y) {
    let S = (0, o.exoticPruned)(B, y),
      m = [],
      v = [],
      x = new a.LevelMask(S.mask);
    for (let M = 0; M < S.pruned.length; M++) m.push(S.pruned[M].depth), v.push(S.pruned[M].hash);
    return {
      type: t.CellType.PrunedBranch,
      depths: m,
      hashes: v,
      mask: x
    }
  }

  function c(B, y) {
    (0, n.exoticLibrary)(B, y);
    let S = [],
      m = [],
      v = new a.LevelMask;
    return {
      type: t.CellType.Library,
      depths: S,
      hashes: m,
      mask: v
    }
  }

  function f(B, y) {
    (0, r.exoticMerkleProof)(B, y);
    let S = [],
      m = [],
      v = new a.LevelMask(y[0].level() >> 1);
    return {
      type: t.CellType.MerkleProof,
      depths: S,
      hashes: m,
      mask: v
    }
  }

  function u(B, y) {
    (0, i.exoticMerkleUpdate)(B, y);
    let S = [],
      m = [],
      v = new a.LevelMask((y[0].level() | y[1].level()) >> 1);
    return {
      type: t.CellType.MerkleUpdate,
      depths: S,
      hashes: m,
      mask: v
    }
  }

  function _(B, y) {
    let m = new e.BitReader(B).preloadUint(8);
    if (m === 1) return s(B, y);
    if (m === 2) return c(B, y);
    if (m === 3) return f(B, y);
    if (m === 4) return u(B, y);
    throw Error("Invalid exotic cell type: " + m)
  }
  return kr.resolveExotic = _, kr
}
var Sr = {},
  Nt = {};
Object.defineProperty(Nt, "__esModule", {
  value: !0
});
Nt.getRepr = Nt.getBitsDescriptor = Nt.getRefsDescriptor = void 0;
const Pr = an,
  Gd = Ai();

function Ks(e, t, n) {
  return e.length + (n !== Pr.CellType.Ordinary ? 1 : 0) * 8 + t * 32
}
Nt.getRefsDescriptor = Ks;

function $s(e) {
  let t = e.length;
  return Math.ceil(t / 8) + Math.floor(t / 8)
}
Nt.getBitsDescriptor = $s;

function Wd(e, t, n, r, i, o) {
  const a = Math.ceil(t.length / 8),
    s = Buffer.alloc(2 + a + 34 * n.length);
  let c = 0;
  s[c++] = Ks(n, i, o), s[c++] = $s(e), (0, Gd.bitsToPaddedBuffer)(t).copy(s, c), c += a;
  for (const f of n) {
    let u;
    o == Pr.CellType.MerkleProof || o == Pr.CellType.MerkleUpdate ? u = f.depth(r + 1) : u = f.depth(r), s[c++] = Math.floor(u / 256), s[c++] = u % 256
  }
  for (const f of n) {
    let u;
    o == Pr.CellType.MerkleProof || o == Pr.CellType.MerkleUpdate ? u = f.hash(r + 1) : u = f.hash(r), u.copy(s, c), c += 32
  }
  return s
}
Nt.getRepr = Wd;
var qi = {},
  Gt = {},
  Hs = {
    exports: {}
  };
(function(e, t) {
  (function(n, r) {
    e.exports = r()
  })(pe, function() {
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    function r(A, g, I, E) {
      var j, b, Q, te = g || [0],
        re = (I = I || 0) >>> 3,
        se = E === -1 ? 3 : 0;
      for (j = 0; j < A.length; j += 1) b = (Q = j + re) >>> 2, te.length <= b && te.push(0), te[b] |= A[j] << 8 * (se + E * (Q % 4));
      return {
        value: te,
        binLen: 8 * A.length + I
      }
    }

    function i(A, g, I) {
      switch (g) {
        case "UTF8":
        case "UTF16BE":
        case "UTF16LE":
          break;
        default:
          throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")
      }
      switch (A) {
        case "HEX":
          return function(E, j, b) {
            return function(Q, te, re, se) {
              var ye, ae, le, Pe;
              if (Q.length % 2 != 0) throw new Error("String of HEX type must be in byte increments");
              var ue = te || [0],
                Me = (re = re || 0) >>> 3,
                Te = se === -1 ? 3 : 0;
              for (ye = 0; ye < Q.length; ye += 2) {
                if (ae = parseInt(Q.substr(ye, 2), 16), isNaN(ae)) throw new Error("String of HEX type contains invalid characters");
                for (le = (Pe = (ye >>> 1) + Me) >>> 2; ue.length <= le;) ue.push(0);
                ue[le] |= ae << 8 * (Te + se * (Pe % 4))
              }
              return {
                value: ue,
                binLen: 4 * Q.length + re
              }
            }(E, j, b, I)
          };
        case "TEXT":
          return function(E, j, b) {
            return function(Q, te, re, se, ye) {
              var ae, le, Pe, ue, Me, Te, Oe, Ne, de = 0,
                dt = re || [0],
                _t = (se = se || 0) >>> 3;
              if (te === "UTF8")
                for (Oe = ye === -1 ? 3 : 0, Pe = 0; Pe < Q.length; Pe += 1)
                  for (le = [], 128 > (ae = Q.charCodeAt(Pe)) ? le.push(ae) : 2048 > ae ? (le.push(192 | ae >>> 6), le.push(128 | 63 & ae)) : 55296 > ae || 57344 <= ae ? le.push(224 | ae >>> 12, 128 | ae >>> 6 & 63, 128 | 63 & ae) : (Pe += 1, ae = 65536 + ((1023 & ae) << 10 | 1023 & Q.charCodeAt(Pe)), le.push(240 | ae >>> 18, 128 | ae >>> 12 & 63, 128 | ae >>> 6 & 63, 128 | 63 & ae)), ue = 0; ue < le.length; ue += 1) {
                    for (Me = (Te = de + _t) >>> 2; dt.length <= Me;) dt.push(0);
                    dt[Me] |= le[ue] << 8 * (Oe + ye * (Te % 4)), de += 1
                  } else
                    for (Oe = ye === -1 ? 2 : 0, Ne = te === "UTF16LE" && ye !== 1 || te !== "UTF16LE" && ye === 1, Pe = 0; Pe < Q.length; Pe += 1) {
                      for (ae = Q.charCodeAt(Pe), Ne === !0 && (ae = (ue = 255 & ae) << 8 | ae >>> 8), Me = (Te = de + _t) >>> 2; dt.length <= Me;) dt.push(0);
                      dt[Me] |= ae << 8 * (Oe + ye * (Te % 4)), de += 2
                    }
              return {
                value: dt,
                binLen: 8 * de + se
              }
            }(E, g, j, b, I)
          };
        case "B64":
          return function(E, j, b) {
            return function(Q, te, re, se) {
              var ye, ae, le, Pe, ue, Me, Te = 0,
                Oe = te || [0],
                Ne = (re = re || 0) >>> 3,
                de = se === -1 ? 3 : 0,
                dt = Q.indexOf("=");
              if (Q.search(/^[a-zA-Z0-9=+/]+$/) === -1) throw new Error("Invalid character in base-64 string");
              if (Q = Q.replace(/=/g, ""), dt !== -1 && dt < Q.length) throw new Error("Invalid '=' found in base-64 string");
              for (ye = 0; ye < Q.length; ye += 4) {
                for (Pe = Q.substr(ye, 4), le = 0, ae = 0; ae < Pe.length; ae += 1) le |= n.indexOf(Pe.charAt(ae)) << 18 - 6 * ae;
                for (ae = 0; ae < Pe.length - 1; ae += 1) {
                  for (ue = (Me = Te + Ne) >>> 2; Oe.length <= ue;) Oe.push(0);
                  Oe[ue] |= (le >>> 16 - 8 * ae & 255) << 8 * (de + se * (Me % 4)), Te += 1
                }
              }
              return {
                value: Oe,
                binLen: 8 * Te + re
              }
            }(E, j, b, I)
          };
        case "BYTES":
          return function(E, j, b) {
            return function(Q, te, re, se) {
              var ye, ae, le, Pe, ue = te || [0],
                Me = (re = re || 0) >>> 3,
                Te = se === -1 ? 3 : 0;
              for (ae = 0; ae < Q.length; ae += 1) ye = Q.charCodeAt(ae), le = (Pe = ae + Me) >>> 2, ue.length <= le && ue.push(0), ue[le] |= ye << 8 * (Te + se * (Pe % 4));
              return {
                value: ue,
                binLen: 8 * Q.length + re
              }
            }(E, j, b, I)
          };
        case "ARRAYBUFFER":
          try {
            new ArrayBuffer(0)
          } catch {
            throw new Error("ARRAYBUFFER not supported by this environment")
          }
          return function(E, j, b) {
            return function(Q, te, re, se) {
              return r(new Uint8Array(Q), te, re, se)
            }(E, j, b, I)
          };
        case "UINT8ARRAY":
          try {
            new Uint8Array(0)
          } catch {
            throw new Error("UINT8ARRAY not supported by this environment")
          }
          return function(E, j, b) {
            return r(E, j, b, I)
          };
        default:
          throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")
      }
    }

    function o(A, g, I, E) {
      switch (A) {
        case "HEX":
          return function(j) {
            return function(b, Q, te, re) {
              var se, ye, ae = "",
                le = Q / 8,
                Pe = te === -1 ? 3 : 0;
              for (se = 0; se < le; se += 1) ye = b[se >>> 2] >>> 8 * (Pe + te * (se % 4)), ae += "0123456789abcdef".charAt(ye >>> 4 & 15) + "0123456789abcdef".charAt(15 & ye);
              return re.outputUpper ? ae.toUpperCase() : ae
            }(j, g, I, E)
          };
        case "B64":
          return function(j) {
            return function(b, Q, te, re) {
              var se, ye, ae, le, Pe, ue = "",
                Me = Q / 8,
                Te = te === -1 ? 3 : 0;
              for (se = 0; se < Me; se += 3)
                for (le = se + 1 < Me ? b[se + 1 >>> 2] : 0, Pe = se + 2 < Me ? b[se + 2 >>> 2] : 0, ae = (b[se >>> 2] >>> 8 * (Te + te * (se % 4)) & 255) << 16 | (le >>> 8 * (Te + te * ((se + 1) % 4)) & 255) << 8 | Pe >>> 8 * (Te + te * ((se + 2) % 4)) & 255, ye = 0; ye < 4; ye += 1) ue += 8 * se + 6 * ye <= Q ? n.charAt(ae >>> 6 * (3 - ye) & 63) : re.b64Pad;
              return ue
            }(j, g, I, E)
          };
        case "BYTES":
          return function(j) {
            return function(b, Q, te) {
              var re, se, ye = "",
                ae = Q / 8,
                le = te === -1 ? 3 : 0;
              for (re = 0; re < ae; re += 1) se = b[re >>> 2] >>> 8 * (le + te * (re % 4)) & 255, ye += String.fromCharCode(se);
              return ye
            }(j, g, I)
          };
        case "ARRAYBUFFER":
          try {
            new ArrayBuffer(0)
          } catch {
            throw new Error("ARRAYBUFFER not supported by this environment")
          }
          return function(j) {
            return function(b, Q, te) {
              var re, se = Q / 8,
                ye = new ArrayBuffer(se),
                ae = new Uint8Array(ye),
                le = te === -1 ? 3 : 0;
              for (re = 0; re < se; re += 1) ae[re] = b[re >>> 2] >>> 8 * (le + te * (re % 4)) & 255;
              return ye
            }(j, g, I)
          };
        case "UINT8ARRAY":
          try {
            new Uint8Array(0)
          } catch {
            throw new Error("UINT8ARRAY not supported by this environment")
          }
          return function(j) {
            return function(b, Q, te) {
              var re, se = Q / 8,
                ye = te === -1 ? 3 : 0,
                ae = new Uint8Array(se);
              for (re = 0; re < se; re += 1) ae[re] = b[re >>> 2] >>> 8 * (ye + te * (re % 4)) & 255;
              return ae
            }(j, g, I)
          };
        default:
          throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")
      }
    }
    var a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      s = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428],
      c = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
      f = "Chosen SHA variant is not supported";

    function u(A, g) {
      var I, E, j = A.binLen >>> 3,
        b = g.binLen >>> 3,
        Q = j << 3,
        te = 4 - j << 3;
      if (j % 4 != 0) {
        for (I = 0; I < b; I += 4) E = j + I >>> 2, A.value[E] |= g.value[I >>> 2] << Q, A.value.push(0), A.value[E + 1] |= g.value[I >>> 2] >>> te;
        return (A.value.length << 2) - 4 >= b + j && A.value.pop(), {
          value: A.value,
          binLen: A.binLen + g.binLen
        }
      }
      return {
        value: A.value.concat(g.value),
        binLen: A.binLen + g.binLen
      }
    }

    function _(A) {
      var g = {
          outputUpper: !1,
          b64Pad: "=",
          outputLen: -1
        },
        I = A || {},
        E = "Output length must be a multiple of 8";
      if (g.outputUpper = I.outputUpper || !1, I.b64Pad && (g.b64Pad = I.b64Pad), I.outputLen) {
        if (I.outputLen % 8 != 0) throw new Error(E);
        g.outputLen = I.outputLen
      } else if (I.shakeLen) {
        if (I.shakeLen % 8 != 0) throw new Error(E);
        g.outputLen = I.shakeLen
      }
      if (typeof g.outputUpper != "boolean") throw new Error("Invalid outputUpper formatting option");
      if (typeof g.b64Pad != "string") throw new Error("Invalid b64Pad formatting option");
      return g
    }

    function B(A, g, I, E) {
      var j = A + " must include a value and format";
      if (!g) {
        if (!E) throw new Error(j);
        return E
      }
      if (g.value === void 0 || !g.format) throw new Error(j);
      return i(g.format, g.encoding || "UTF8", I)(g.value)
    }
    var y = function() {
        function A(g, I, E) {
          var j = E || {};
          if (this.t = I, this.i = j.encoding || "UTF8", this.numRounds = j.numRounds || 1, isNaN(this.numRounds) || this.numRounds !== parseInt(this.numRounds, 10) || 1 > this.numRounds) throw new Error("numRounds must a integer >= 1");
          this.o = g, this.u = [], this.s = 0, this.h = !1, this.v = 0, this.A = !1, this.l = [], this.H = []
        }
        return A.prototype.update = function(g) {
          var I, E = 0,
            j = this.S >>> 5,
            b = this.p(g, this.u, this.s),
            Q = b.binLen,
            te = b.value,
            re = Q >>> 5;
          for (I = 0; I < re; I += j) E + this.S <= Q && (this.m = this.R(te.slice(I, I + j), this.m), E += this.S);
          this.v += E, this.u = te.slice(E >>> 5), this.s = Q % this.S, this.h = !0
        }, A.prototype.getHash = function(g, I) {
          var E, j, b = this.U,
            Q = _(I);
          if (this.T) {
            if (Q.outputLen === -1) throw new Error("Output length must be specified in options");
            b = Q.outputLen
          }
          var te = o(g, b, this.C, Q);
          if (this.A && this.F) return te(this.F(Q));
          for (j = this.K(this.u.slice(), this.s, this.v, this.B(this.m), b), E = 1; E < this.numRounds; E += 1) this.T && b % 32 != 0 && (j[j.length - 1] &= 16777215 >>> 24 - b % 32), j = this.K(j, b, 0, this.L(this.o), b);
          return te(j)
        }, A.prototype.setHMACKey = function(g, I, E) {
          if (!this.g) throw new Error("Variant does not support HMAC");
          if (this.h) throw new Error("Cannot set MAC key after calling update");
          var j = i(I, (E || {}).encoding || "UTF8", this.C);
          this.k(j(g))
        }, A.prototype.k = function(g) {
          var I, E = this.S >>> 3,
            j = E / 4 - 1;
          if (this.numRounds !== 1) throw new Error("Cannot set numRounds with MAC");
          if (this.A) throw new Error("MAC key already set");
          for (E < g.binLen / 8 && (g.value = this.K(g.value, g.binLen, 0, this.L(this.o), this.U)); g.value.length <= j;) g.value.push(0);
          for (I = 0; I <= j; I += 1) this.l[I] = 909522486 ^ g.value[I], this.H[I] = 1549556828 ^ g.value[I];
          this.m = this.R(this.l, this.m), this.v = this.S, this.A = !0
        }, A.prototype.getHMAC = function(g, I) {
          var E = _(I);
          return o(g, this.U, this.C, E)(this.Y())
        }, A.prototype.Y = function() {
          var g;
          if (!this.A) throw new Error("Cannot call getHMAC without first setting MAC key");
          var I = this.K(this.u.slice(), this.s, this.v, this.B(this.m), this.U);
          return g = this.R(this.H, this.L(this.o)), g = this.K(I, this.U, this.S, g, this.U)
        }, A
      }(),
      S = function(A, g) {
        return (S = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(I, E) {
            I.__proto__ = E
          } || function(I, E) {
            for (var j in E) Object.prototype.hasOwnProperty.call(E, j) && (I[j] = E[j])
          })(A, g)
      };

    function m(A, g) {
      function I() {
        this.constructor = A
      }
      S(A, g), A.prototype = g === null ? Object.create(g) : (I.prototype = g.prototype, new I)
    }

    function v(A, g) {
      return A << g | A >>> 32 - g
    }

    function x(A, g) {
      return A >>> g | A << 32 - g
    }

    function M(A, g) {
      return A >>> g
    }

    function p(A, g, I) {
      return A ^ g ^ I
    }

    function h(A, g, I) {
      return A & g ^ ~A & I
    }

    function P(A, g, I) {
      return A & g ^ A & I ^ g & I
    }

    function k(A) {
      return x(A, 2) ^ x(A, 13) ^ x(A, 22)
    }

    function T(A, g) {
      var I = (65535 & A) + (65535 & g);
      return (65535 & (A >>> 16) + (g >>> 16) + (I >>> 16)) << 16 | 65535 & I
    }

    function J(A, g, I, E) {
      var j = (65535 & A) + (65535 & g) + (65535 & I) + (65535 & E);
      return (65535 & (A >>> 16) + (g >>> 16) + (I >>> 16) + (E >>> 16) + (j >>> 16)) << 16 | 65535 & j
    }

    function ne(A, g, I, E, j) {
      var b = (65535 & A) + (65535 & g) + (65535 & I) + (65535 & E) + (65535 & j);
      return (65535 & (A >>> 16) + (g >>> 16) + (I >>> 16) + (E >>> 16) + (j >>> 16) + (b >>> 16)) << 16 | 65535 & b
    }

    function q(A) {
      return x(A, 7) ^ x(A, 18) ^ M(A, 3)
    }

    function we(A) {
      return x(A, 6) ^ x(A, 11) ^ x(A, 25)
    }

    function ke(A) {
      return [1732584193, 4023233417, 2562383102, 271733878, 3285377520]
    }

    function V(A, g) {
      var I, E, j, b, Q, te, re, se = [];
      for (I = g[0], E = g[1], j = g[2], b = g[3], Q = g[4], re = 0; re < 80; re += 1) se[re] = re < 16 ? A[re] : v(se[re - 3] ^ se[re - 8] ^ se[re - 14] ^ se[re - 16], 1), te = re < 20 ? ne(v(I, 5), h(E, j, b), Q, 1518500249, se[re]) : re < 40 ? ne(v(I, 5), p(E, j, b), Q, 1859775393, se[re]) : re < 60 ? ne(v(I, 5), P(E, j, b), Q, 2400959708, se[re]) : ne(v(I, 5), p(E, j, b), Q, 3395469782, se[re]), Q = b, b = j, j = v(E, 30), E = I, I = te;
      return g[0] = T(I, g[0]), g[1] = T(E, g[1]), g[2] = T(j, g[2]), g[3] = T(b, g[3]), g[4] = T(Q, g[4]), g
    }

    function z(A, g, I, E) {
      for (var j, b = 15 + (g + 65 >>> 9 << 4), Q = g + I; A.length <= b;) A.push(0);
      for (A[g >>> 5] |= 128 << 24 - g % 32, A[b] = 4294967295 & Q, A[b - 1] = Q / 4294967296 | 0, j = 0; j < A.length; j += 16) E = V(A.slice(j, j + 16), E);
      return E
    }
    var ie = function(A) {
      function g(I, E, j) {
        var b = this;
        if (I !== "SHA-1") throw new Error(f);
        var Q = j || {};
        return (b = A.call(this, I, E, j) || this).g = !0, b.F = b.Y, b.C = -1, b.p = i(b.t, b.i, b.C), b.R = V, b.B = function(te) {
          return te.slice()
        }, b.L = ke, b.K = z, b.m = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], b.S = 512, b.U = 160, b.T = !1, Q.hmacKey && b.k(B("hmacKey", Q.hmacKey, b.C)), b
      }
      return m(g, A), g
    }(y);

    function ve(A) {
      return A == "SHA-224" ? s.slice() : c.slice()
    }

    function Ce(A, g) {
      var I, E, j, b, Q, te, re, se, ye, ae, le, Pe, ue = [];
      for (I = g[0], E = g[1], j = g[2], b = g[3], Q = g[4], te = g[5], re = g[6], se = g[7], le = 0; le < 64; le += 1) ue[le] = le < 16 ? A[le] : J(x(Pe = ue[le - 2], 17) ^ x(Pe, 19) ^ M(Pe, 10), ue[le - 7], q(ue[le - 15]), ue[le - 16]), ye = ne(se, we(Q), h(Q, te, re), a[le], ue[le]), ae = T(k(I), P(I, E, j)), se = re, re = te, te = Q, Q = T(b, ye), b = j, j = E, E = I, I = T(ye, ae);
      return g[0] = T(I, g[0]), g[1] = T(E, g[1]), g[2] = T(j, g[2]), g[3] = T(b, g[3]), g[4] = T(Q, g[4]), g[5] = T(te, g[5]), g[6] = T(re, g[6]), g[7] = T(se, g[7]), g
    }
    var Ee = function(A) {
        function g(I, E, j) {
          var b = this;
          if (I !== "SHA-224" && I !== "SHA-256") throw new Error(f);
          var Q = j || {};
          return (b = A.call(this, I, E, j) || this).F = b.Y, b.g = !0, b.C = -1, b.p = i(b.t, b.i, b.C), b.R = Ce, b.B = function(te) {
            return te.slice()
          }, b.L = ve, b.K = function(te, re, se, ye) {
            return function(ae, le, Pe, ue, Me) {
              for (var Te, Oe = 15 + (le + 65 >>> 9 << 4), Ne = le + Pe; ae.length <= Oe;) ae.push(0);
              for (ae[le >>> 5] |= 128 << 24 - le % 32, ae[Oe] = 4294967295 & Ne, ae[Oe - 1] = Ne / 4294967296 | 0, Te = 0; Te < ae.length; Te += 16) ue = Ce(ae.slice(Te, Te + 16), ue);
              return Me === "SHA-224" ? [ue[0], ue[1], ue[2], ue[3], ue[4], ue[5], ue[6]] : ue
            }(te, re, se, ye, I)
          }, b.m = ve(I), b.S = 512, b.U = I === "SHA-224" ? 224 : 256, b.T = !1, Q.hmacKey && b.k(B("hmacKey", Q.hmacKey, b.C)), b
        }
        return m(g, A), g
      }(y),
      F = function(A, g) {
        this.N = A, this.I = g
      };

    function Ve(A, g) {
      var I;
      return g > 32 ? (I = 64 - g, new F(A.I << g | A.N >>> I, A.N << g | A.I >>> I)) : g !== 0 ? (I = 32 - g, new F(A.N << g | A.I >>> I, A.I << g | A.N >>> I)) : A
    }

    function Fe(A, g) {
      var I;
      return g < 32 ? (I = 32 - g, new F(A.N >>> g | A.I << I, A.I >>> g | A.N << I)) : (I = 64 - g, new F(A.I >>> g | A.N << I, A.N >>> g | A.I << I))
    }

    function gt(A, g) {
      return new F(A.N >>> g, A.I >>> g | A.N << 32 - g)
    }

    function on(A, g, I) {
      return new F(A.N & g.N ^ ~A.N & I.N, A.I & g.I ^ ~A.I & I.I)
    }

    function he(A, g, I) {
      return new F(A.N & g.N ^ A.N & I.N ^ g.N & I.N, A.I & g.I ^ A.I & I.I ^ g.I & I.I)
    }

    function sn(A) {
      var g = Fe(A, 28),
        I = Fe(A, 34),
        E = Fe(A, 39);
      return new F(g.N ^ I.N ^ E.N, g.I ^ I.I ^ E.I)
    }

    function ot(A, g) {
      var I, E;
      I = (65535 & A.I) + (65535 & g.I);
      var j = (65535 & (E = (A.I >>> 16) + (g.I >>> 16) + (I >>> 16))) << 16 | 65535 & I;
      return I = (65535 & A.N) + (65535 & g.N) + (E >>> 16), E = (A.N >>> 16) + (g.N >>> 16) + (I >>> 16), new F((65535 & E) << 16 | 65535 & I, j)
    }

    function ln(A, g, I, E) {
      var j, b;
      j = (65535 & A.I) + (65535 & g.I) + (65535 & I.I) + (65535 & E.I);
      var Q = (65535 & (b = (A.I >>> 16) + (g.I >>> 16) + (I.I >>> 16) + (E.I >>> 16) + (j >>> 16))) << 16 | 65535 & j;
      return j = (65535 & A.N) + (65535 & g.N) + (65535 & I.N) + (65535 & E.N) + (b >>> 16), b = (A.N >>> 16) + (g.N >>> 16) + (I.N >>> 16) + (E.N >>> 16) + (j >>> 16), new F((65535 & b) << 16 | 65535 & j, Q)
    }

    function st(A, g, I, E, j) {
      var b, Q;
      b = (65535 & A.I) + (65535 & g.I) + (65535 & I.I) + (65535 & E.I) + (65535 & j.I);
      var te = (65535 & (Q = (A.I >>> 16) + (g.I >>> 16) + (I.I >>> 16) + (E.I >>> 16) + (j.I >>> 16) + (b >>> 16))) << 16 | 65535 & b;
      return b = (65535 & A.N) + (65535 & g.N) + (65535 & I.N) + (65535 & E.N) + (65535 & j.N) + (Q >>> 16), Q = (A.N >>> 16) + (g.N >>> 16) + (I.N >>> 16) + (E.N >>> 16) + (j.N >>> 16) + (b >>> 16), new F((65535 & Q) << 16 | 65535 & b, te)
    }

    function nt(A, g) {
      return new F(A.N ^ g.N, A.I ^ g.I)
    }

    function w(A) {
      var g = Fe(A, 1),
        I = Fe(A, 8),
        E = gt(A, 7);
      return new F(g.N ^ I.N ^ E.N, g.I ^ I.I ^ E.I)
    }

    function C(A) {
      var g = Fe(A, 14),
        I = Fe(A, 18),
        E = Fe(A, 41);
      return new F(g.N ^ I.N ^ E.N, g.I ^ I.I ^ E.I)
    }
    var O = [new F(a[0], 3609767458), new F(a[1], 602891725), new F(a[2], 3964484399), new F(a[3], 2173295548), new F(a[4], 4081628472), new F(a[5], 3053834265), new F(a[6], 2937671579), new F(a[7], 3664609560), new F(a[8], 2734883394), new F(a[9], 1164996542), new F(a[10], 1323610764), new F(a[11], 3590304994), new F(a[12], 4068182383), new F(a[13], 991336113), new F(a[14], 633803317), new F(a[15], 3479774868), new F(a[16], 2666613458), new F(a[17], 944711139), new F(a[18], 2341262773), new F(a[19], 2007800933), new F(a[20], 1495990901), new F(a[21], 1856431235), new F(a[22], 3175218132), new F(a[23], 2198950837), new F(a[24], 3999719339), new F(a[25], 766784016), new F(a[26], 2566594879), new F(a[27], 3203337956), new F(a[28], 1034457026), new F(a[29], 2466948901), new F(a[30], 3758326383), new F(a[31], 168717936), new F(a[32], 1188179964), new F(a[33], 1546045734), new F(a[34], 1522805485), new F(a[35], 2643833823), new F(a[36], 2343527390), new F(a[37], 1014477480), new F(a[38], 1206759142), new F(a[39], 344077627), new F(a[40], 1290863460), new F(a[41], 3158454273), new F(a[42], 3505952657), new F(a[43], 106217008), new F(a[44], 3606008344), new F(a[45], 1432725776), new F(a[46], 1467031594), new F(a[47], 851169720), new F(a[48], 3100823752), new F(a[49], 1363258195), new F(a[50], 3750685593), new F(a[51], 3785050280), new F(a[52], 3318307427), new F(a[53], 3812723403), new F(a[54], 2003034995), new F(a[55], 3602036899), new F(a[56], 1575990012), new F(a[57], 1125592928), new F(a[58], 2716904306), new F(a[59], 442776044), new F(a[60], 593698344), new F(a[61], 3733110249), new F(a[62], 2999351573), new F(a[63], 3815920427), new F(3391569614, 3928383900), new F(3515267271, 566280711), new F(3940187606, 3454069534), new F(4118630271, 4000239992), new F(116418474, 1914138554), new F(174292421, 2731055270), new F(289380356, 3203993006), new F(460393269, 320620315), new F(685471733, 587496836), new F(852142971, 1086792851), new F(1017036298, 365543100), new F(1126000580, 2618297676), new F(1288033470, 3409855158), new F(1501505948, 4234509866), new F(1607167915, 987167468), new F(1816402316, 1246189591)];

    function W(A) {
      return A === "SHA-384" ? [new F(3418070365, s[0]), new F(1654270250, s[1]), new F(2438529370, s[2]), new F(355462360, s[3]), new F(1731405415, s[4]), new F(41048885895, s[5]), new F(3675008525, s[6]), new F(1203062813, s[7])] : [new F(c[0], 4089235720), new F(c[1], 2227873595), new F(c[2], 4271175723), new F(c[3], 1595750129), new F(c[4], 2917565137), new F(c[5], 725511199), new F(c[6], 4215389547), new F(c[7], 327033209)]
    }

    function N(A, g) {
      var I, E, j, b, Q, te, re, se, ye, ae, le, Pe, ue, Me, Te, Oe, Ne = [];
      for (I = g[0], E = g[1], j = g[2], b = g[3], Q = g[4], te = g[5], re = g[6], se = g[7], le = 0; le < 80; le += 1) le < 16 ? (Pe = 2 * le, Ne[le] = new F(A[Pe], A[Pe + 1])) : Ne[le] = ln((ue = Ne[le - 2], Me = void 0, Te = void 0, Oe = void 0, Me = Fe(ue, 19), Te = Fe(ue, 61), Oe = gt(ue, 6), new F(Me.N ^ Te.N ^ Oe.N, Me.I ^ Te.I ^ Oe.I)), Ne[le - 7], w(Ne[le - 15]), Ne[le - 16]), ye = st(se, C(Q), on(Q, te, re), O[le], Ne[le]), ae = ot(sn(I), he(I, E, j)), se = re, re = te, te = Q, Q = ot(b, ye), b = j, j = E, E = I, I = ot(ye, ae);
      return g[0] = ot(I, g[0]), g[1] = ot(E, g[1]), g[2] = ot(j, g[2]), g[3] = ot(b, g[3]), g[4] = ot(Q, g[4]), g[5] = ot(te, g[5]), g[6] = ot(re, g[6]), g[7] = ot(se, g[7]), g
    }
    var H = function(A) {
        function g(I, E, j) {
          var b = this;
          if (I !== "SHA-384" && I !== "SHA-512") throw new Error(f);
          var Q = j || {};
          return (b = A.call(this, I, E, j) || this).F = b.Y, b.g = !0, b.C = -1, b.p = i(b.t, b.i, b.C), b.R = N, b.B = function(te) {
            return te.slice()
          }, b.L = W, b.K = function(te, re, se, ye) {
            return function(ae, le, Pe, ue, Me) {
              for (var Te, Oe = 31 + (le + 129 >>> 10 << 5), Ne = le + Pe; ae.length <= Oe;) ae.push(0);
              for (ae[le >>> 5] |= 128 << 24 - le % 32, ae[Oe] = 4294967295 & Ne, ae[Oe - 1] = Ne / 4294967296 | 0, Te = 0; Te < ae.length; Te += 32) ue = N(ae.slice(Te, Te + 32), ue);
              return Me === "SHA-384" ? [(ue = ue)[0].N, ue[0].I, ue[1].N, ue[1].I, ue[2].N, ue[2].I, ue[3].N, ue[3].I, ue[4].N, ue[4].I, ue[5].N, ue[5].I] : [ue[0].N, ue[0].I, ue[1].N, ue[1].I, ue[2].N, ue[2].I, ue[3].N, ue[3].I, ue[4].N, ue[4].I, ue[5].N, ue[5].I, ue[6].N, ue[6].I, ue[7].N, ue[7].I]
            }(te, re, se, ye, I)
          }, b.m = W(I), b.S = 1024, b.U = I === "SHA-384" ? 384 : 512, b.T = !1, Q.hmacKey && b.k(B("hmacKey", Q.hmacKey, b.C)), b
        }
        return m(g, A), g
      }(y),
      X = [new F(0, 1), new F(0, 32898), new F(2147483648, 32906), new F(2147483648, 2147516416), new F(0, 32907), new F(0, 2147483649), new F(2147483648, 2147516545), new F(2147483648, 32777), new F(0, 138), new F(0, 136), new F(0, 2147516425), new F(0, 2147483658), new F(0, 2147516555), new F(2147483648, 139), new F(2147483648, 32905), new F(2147483648, 32771), new F(2147483648, 32770), new F(2147483648, 128), new F(0, 32778), new F(2147483648, 2147483658), new F(2147483648, 2147516545), new F(2147483648, 32896), new F(0, 2147483649), new F(2147483648, 2147516424)],
      L = [
        [0, 36, 3, 41, 18],
        [1, 44, 10, 45, 2],
        [62, 6, 43, 15, 61],
        [28, 55, 25, 21, 56],
        [27, 20, 39, 8, 14]
      ];

    function K(A) {
      var g, I = [];
      for (g = 0; g < 5; g += 1) I[g] = [new F(0, 0), new F(0, 0), new F(0, 0), new F(0, 0), new F(0, 0)];
      return I
    }

    function Y(A) {
      var g, I = [];
      for (g = 0; g < 5; g += 1) I[g] = A[g].slice();
      return I
    }

    function G(A, g) {
      var I, E, j, b, Q, te, re, se, ye, ae = [],
        le = [];
      if (A !== null)
        for (E = 0; E < A.length; E += 2) g[(E >>> 1) % 5][(E >>> 1) / 5 | 0] = nt(g[(E >>> 1) % 5][(E >>> 1) / 5 | 0], new F(A[E + 1], A[E]));
      for (I = 0; I < 24; I += 1) {
        for (b = K(), E = 0; E < 5; E += 1) ae[E] = (Q = g[E][0], te = g[E][1], re = g[E][2], se = g[E][3], ye = g[E][4], new F(Q.N ^ te.N ^ re.N ^ se.N ^ ye.N, Q.I ^ te.I ^ re.I ^ se.I ^ ye.I));
        for (E = 0; E < 5; E += 1) le[E] = nt(ae[(E + 4) % 5], Ve(ae[(E + 1) % 5], 1));
        for (E = 0; E < 5; E += 1)
          for (j = 0; j < 5; j += 1) g[E][j] = nt(g[E][j], le[E]);
        for (E = 0; E < 5; E += 1)
          for (j = 0; j < 5; j += 1) b[j][(2 * E + 3 * j) % 5] = Ve(g[E][j], L[E][j]);
        for (E = 0; E < 5; E += 1)
          for (j = 0; j < 5; j += 1) g[E][j] = nt(b[E][j], new F(~b[(E + 1) % 5][j].N & b[(E + 2) % 5][j].N, ~b[(E + 1) % 5][j].I & b[(E + 2) % 5][j].I));
        g[0][0] = nt(g[0][0], X[I])
      }
      return g
    }

    function ee(A) {
      var g, I, E = 0,
        j = [0, 0],
        b = [4294967295 & A, A / 4294967296 & 2097151];
      for (g = 6; g >= 0; g--)(I = b[g >> 2] >>> 8 * g & 255) === 0 && E === 0 || (j[E + 1 >> 2] |= I << 8 * (E + 1), E += 1);
      return E = E !== 0 ? E : 1, j[0] |= E, {
        value: E + 1 > 4 ? j : [j[0]],
        binLen: 8 + 8 * E
      }
    }

    function Ae(A) {
      return u(ee(A.binLen), A)
    }

    function be(A, g) {
      var I, E = ee(g),
        j = g >>> 2,
        b = (j - (E = u(E, A)).value.length % j) % j;
      for (I = 0; I < b; I++) E.value.push(0);
      return E.value
    }
    var Be = function(A) {
      function g(I, E, j) {
        var b = this,
          Q = 6,
          te = 0,
          re = j || {};
        if ((b = A.call(this, I, E, j) || this).numRounds !== 1) {
          if (re.kmacKey || re.hmacKey) throw new Error("Cannot set numRounds with MAC");
          if (b.o === "CSHAKE128" || b.o === "CSHAKE256") throw new Error("Cannot set numRounds for CSHAKE variants")
        }
        switch (b.C = 1, b.p = i(b.t, b.i, b.C), b.R = G, b.B = Y, b.L = K, b.m = K(), b.T = !1, I) {
          case "SHA3-224":
            b.S = te = 1152, b.U = 224, b.g = !0, b.F = b.Y;
            break;
          case "SHA3-256":
            b.S = te = 1088, b.U = 256, b.g = !0, b.F = b.Y;
            break;
          case "SHA3-384":
            b.S = te = 832, b.U = 384, b.g = !0, b.F = b.Y;
            break;
          case "SHA3-512":
            b.S = te = 576, b.U = 512, b.g = !0, b.F = b.Y;
            break;
          case "SHAKE128":
            Q = 31, b.S = te = 1344, b.U = -1, b.T = !0, b.g = !1, b.F = null;
            break;
          case "SHAKE256":
            Q = 31, b.S = te = 1088, b.U = -1, b.T = !0, b.g = !1, b.F = null;
            break;
          case "KMAC128":
            Q = 4, b.S = te = 1344, b.M(j), b.U = -1, b.T = !0, b.g = !1, b.F = b.X;
            break;
          case "KMAC256":
            Q = 4, b.S = te = 1088, b.M(j), b.U = -1, b.T = !0, b.g = !1, b.F = b.X;
            break;
          case "CSHAKE128":
            b.S = te = 1344, Q = b.O(j), b.U = -1, b.T = !0, b.g = !1, b.F = null;
            break;
          case "CSHAKE256":
            b.S = te = 1088, Q = b.O(j), b.U = -1, b.T = !0, b.g = !1, b.F = null;
            break;
          default:
            throw new Error(f)
        }
        return b.K = function(se, ye, ae, le, Pe) {
          return function(ue, Me, Te, Oe, Ne, de, dt) {
            var _t, U, l = 0,
              R = [],
              D = Ne >>> 5,
              Z = Me >>> 5;
            for (_t = 0; _t < Z && Me >= Ne; _t += D) Oe = G(ue.slice(_t, _t + D), Oe), Me -= Ne;
            for (ue = ue.slice(_t), Me %= Ne; ue.length < D;) ue.push(0);
            for (ue[(_t = Me >>> 3) >> 2] ^= de << _t % 4 * 8, ue[D - 1] ^= 2147483648, Oe = G(ue, Oe); 32 * R.length < dt && (U = Oe[l % 5][l / 5 | 0], R.push(U.I), !(32 * R.length >= dt));) R.push(U.N), 64 * (l += 1) % Ne == 0 && (G(null, Oe), l = 0);
            return R
          }(se, ye, 0, le, te, Q, Pe)
        }, re.hmacKey && b.k(B("hmacKey", re.hmacKey, b.C)), b
      }
      return m(g, A), g.prototype.O = function(I, E) {
        var j = function(re) {
          var se = re || {};
          return {
            funcName: B("funcName", se.funcName, 1, {
              value: [],
              binLen: 0
            }),
            customization: B("Customization", se.customization, 1, {
              value: [],
              binLen: 0
            })
          }
        }(I || {});
        E && (j.funcName = E);
        var b = u(Ae(j.funcName), Ae(j.customization));
        if (j.customization.binLen !== 0 || j.funcName.binLen !== 0) {
          for (var Q = be(b, this.S >>> 3), te = 0; te < Q.length; te += this.S >>> 5) this.m = this.R(Q.slice(te, te + (this.S >>> 5)), this.m), this.v += this.S;
          return 4
        }
        return 31
      }, g.prototype.M = function(I) {
        var E = function(Q) {
          var te = Q || {};
          return {
            kmacKey: B("kmacKey", te.kmacKey, 1),
            funcName: {
              value: [1128353099],
              binLen: 32
            },
            customization: B("Customization", te.customization, 1, {
              value: [],
              binLen: 0
            })
          }
        }(I || {});
        this.O(I, E.funcName);
        for (var j = be(Ae(E.kmacKey), this.S >>> 3), b = 0; b < j.length; b += this.S >>> 5) this.m = this.R(j.slice(b, b + (this.S >>> 5)), this.m), this.v += this.S;
        this.A = !0
      }, g.prototype.X = function(I) {
        var E = u({
          value: this.u.slice(),
          binLen: this.s
        }, function(j) {
          var b, Q, te = 0,
            re = [0, 0],
            se = [4294967295 & j, j / 4294967296 & 2097151];
          for (b = 6; b >= 0; b--)(Q = se[b >> 2] >>> 8 * b & 255) == 0 && te === 0 || (re[te >> 2] |= Q << 8 * te, te += 1);
          return re[(te = te !== 0 ? te : 1) >> 2] |= te << 8 * te, {
            value: te + 1 > 4 ? re : [re[0]],
            binLen: 8 + 8 * te
          }
        }(I.outputLen));
        return this.K(E.value, E.binLen, this.v, this.B(this.m), I.outputLen)
      }, g
    }(y);
    return function() {
      function A(g, I, E) {
        if (g == "SHA-1") this.j = new ie(g, I, E);
        else if (g == "SHA-224" || g == "SHA-256") this.j = new Ee(g, I, E);
        else if (g == "SHA-384" || g == "SHA-512") this.j = new H(g, I, E);
        else {
          if (g != "SHA3-224" && g != "SHA3-256" && g != "SHA3-384" && g != "SHA3-512" && g != "SHAKE128" && g != "SHAKE256" && g != "CSHAKE128" && g != "CSHAKE256" && g != "KMAC128" && g != "KMAC256") throw new Error(f);
          this.j = new Be(g, I, E)
        }
      }
      return A.prototype.update = function(g) {
        this.j.update(g)
      }, A.prototype.getHash = function(g, I) {
        return this.j.getHash(g, I)
      }, A.prototype.setHMACKey = function(g, I, E) {
        this.j.setHMACKey(g, I, E)
      }, A.prototype.getHMAC = function(g, I) {
        return this.j.getHMAC(g, I)
      }, A
    }()
  })
})(Hs);
var ja = Hs.exports,
  dr = {},
  nr = {};
Object.defineProperty(nr, "__esModule", {
  value: !0
});
nr.getSecureRandomWords = nr.getSecureRandomBytes = void 0;

function Yd(e) {
  return Buffer.from(window.crypto.getRandomValues(new Uint8Array(e)))
}
nr.getSecureRandomBytes = Yd;

function Xd(e) {
  return window.crypto.getRandomValues(new Uint16Array(e))
}
nr.getSecureRandomWords = Xd;
var Ti = {};
Object.defineProperty(Ti, "__esModule", {
  value: !0
});
Ti.hmac_sha512 = void 0;
async function Jd(e, t) {
  let n = typeof e == "string" ? Buffer.from(e, "utf-8") : e,
    r = typeof t == "string" ? Buffer.from(t, "utf-8") : t;
  const i = {
      name: "HMAC",
      hash: "SHA-512"
    },
    o = await window.crypto.subtle.importKey("raw", n, i, !1, ["sign"]);
  return Buffer.from(await crypto.subtle.sign(i, o, r))
}
Ti.hmac_sha512 = Jd;
var Ei = {};
Object.defineProperty(Ei, "__esModule", {
  value: !0
});
Ei.pbkdf2_sha512 = void 0;
async function Qd(e, t, n, r) {
  const i = typeof e == "string" ? Buffer.from(e, "utf-8") : e,
    o = typeof t == "string" ? Buffer.from(t, "utf-8") : t,
    a = await window.crypto.subtle.importKey("raw", i, {
      name: "PBKDF2"
    }, !1, ["deriveBits"]),
    s = await window.crypto.subtle.deriveBits({
      name: "PBKDF2",
      hash: "SHA-512",
      salt: o,
      iterations: n
    }, a, r * 8);
  return Buffer.from(s)
}
Ei.pbkdf2_sha512 = Qd;
var Oi = {};
Object.defineProperty(Oi, "__esModule", {
  value: !0
});
Oi.sha256 = void 0;
async function qd(e) {
  return typeof e == "string" ? Buffer.from(await crypto.subtle.digest("SHA-256", Buffer.from(e, "utf-8"))) : Buffer.from(await crypto.subtle.digest("SHA-256", e))
}
Oi.sha256 = qd;
var xi = {};
Object.defineProperty(xi, "__esModule", {
  value: !0
});
xi.sha512 = void 0;
async function Zd(e) {
  return typeof e == "string" ? Buffer.from(await crypto.subtle.digest("SHA-512", Buffer.from(e, "utf-8"))) : Buffer.from(await crypto.subtle.digest("SHA-512", e))
}
xi.sha512 = Zd;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.sha512 = e.sha256 = e.pbkdf2_sha512 = e.hmac_sha512 = e.getSecureRandomWords = e.getSecureRandomBytes = void 0;
  var t = nr;
  Object.defineProperty(e, "getSecureRandomBytes", {
    enumerable: !0,
    get: function() {
      return t.getSecureRandomBytes
    }
  }), Object.defineProperty(e, "getSecureRandomWords", {
    enumerable: !0,
    get: function() {
      return t.getSecureRandomWords
    }
  });
  var n = Ti;
  Object.defineProperty(e, "hmac_sha512", {
    enumerable: !0,
    get: function() {
      return n.hmac_sha512
    }
  });
  var r = Ei;
  Object.defineProperty(e, "pbkdf2_sha512", {
    enumerable: !0,
    get: function() {
      return r.pbkdf2_sha512
    }
  });
  var i = Oi;
  Object.defineProperty(e, "sha256", {
    enumerable: !0,
    get: function() {
      return i.sha256
    }
  });
  var o = xi;
  Object.defineProperty(e, "sha512", {
    enumerable: !0,
    get: function() {
      return o.sha512
    }
  })
})(dr);
var ef = pe && pe.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  }
};
Object.defineProperty(Gt, "__esModule", {
  value: !0
});
Gt.sha256 = Gt.sha256_fallback = Gt.sha256_sync = void 0;
const tf = ef(ja),
  nf = dr;

function Vs(e) {
  let t;
  typeof e == "string" ? t = Buffer.from(e, "utf-8").toString("hex") : t = e.toString("hex");
  let n = new tf.default("SHA-256", "HEX");
  n.update(t);
  let r = n.getHash("HEX");
  return Buffer.from(r, "hex")
}
Gt.sha256_sync = Vs;
async function rf(e) {
  return Vs(e)
}
Gt.sha256_fallback = rf;

function af(e) {
  return (0, nf.sha256)(e)
}
Gt.sha256 = af;
var Wt = {},
  of = pe && pe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
Object.defineProperty(Wt, "__esModule", {
  value: !0
});
Wt.sha512 = Wt.sha512_fallback = Wt.sha512_sync = void 0;
const sf = of(ja),
  lf = dr;

function Gs(e) {
  let t;
  typeof e == "string" ? t = Buffer.from(e, "utf-8").toString("hex") : t = e.toString("hex");
  let n = new sf.default("SHA-512", "HEX");
  n.update(t);
  let r = n.getHash("HEX");
  return Buffer.from(r, "hex")
}
Wt.sha512_sync = Gs;
async function cf(e) {
  return Gs(e)
}
Wt.sha512_fallback = cf;
async function uf(e) {
  return (0, lf.sha512)(e)
}
Wt.sha512 = uf;
var Dr = {};
Object.defineProperty(Dr, "__esModule", {
  value: !0
});
Dr.pbkdf2_sha512 = void 0;
const df = dr;

function ff(e, t, n, r) {
  return (0, df.pbkdf2_sha512)(e, t, n, r)
}
Dr.pbkdf2_sha512 = ff;
var Tt = {},
  hf = pe && pe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
Object.defineProperty(Tt, "__esModule", {
  value: !0
});
Tt.hmac_sha512 = Tt.hmac_sha512_fallback = void 0;
const pf = hf(ja),
  gf = dr;
async function mf(e, t) {
  let n = typeof e == "string" ? Buffer.from(e, "utf-8") : e,
    r = typeof t == "string" ? Buffer.from(t, "utf-8") : t;
  const i = new pf.default("SHA-512", "HEX", {
    hmacKey: {
      value: n.toString("hex"),
      format: "HEX"
    }
  });
  i.update(r.toString("hex"));
  const o = i.getHash("HEX");
  return Buffer.from(o, "hex")
}
Tt.hmac_sha512_fallback = mf;

function bf(e, t) {
  return (0, gf.hmac_sha512)(e, t)
}
Tt.hmac_sha512 = bf;
var Mt = {};
Object.defineProperty(Mt, "__esModule", {
  value: !0
});
Mt.getSecureRandomNumber = Mt.getSecureRandomWords = Mt.getSecureRandomBytes = void 0;
const yf = dr;
async function Ws(e) {
  return (0, yf.getSecureRandomBytes)(e)
}
Mt.getSecureRandomBytes = Ws;
async function Ys(e) {
  return Ys()
}
Mt.getSecureRandomWords = Ys;
async function _f(e, t) {
  let n = t - e;
  var r = Math.ceil(Math.log2(n));
  if (r > 53) throw new Error("Range is too large");
  for (var i = Math.ceil(r / 8), o = Math.pow(2, r) - 1;;) {
    let s = await Ws(r),
      c = (i - 1) * 8,
      f = 0;
    for (var a = 0; a < i; a++) f += s[a] * Math.pow(2, c), c -= 8;
    if (f = f & o, !(f >= n)) return e + f
  }
}
Mt.getSecureRandomNumber = _f;
var Ui = {},
  Ri = {};
Object.defineProperty(Ri, "__esModule", {
  value: !0
});
Ri.wordlist = void 0;
Ri.wordlist = ["abacus", "abdomen", "abdominal", "abide", "abiding", "ability", "ablaze", "able", "abnormal", "abrasion", "abrasive", "abreast", "abridge", "abroad", "abruptly", "absence", "absentee", "absently", "absinthe", "absolute", "absolve", "abstain", "abstract", "absurd", "accent", "acclaim", "acclimate", "accompany", "account", "accuracy", "accurate", "accustom", "acetone", "achiness", "aching", "acid", "acorn", "acquaint", "acquire", "acre", "acrobat", "acronym", "acting", "action", "activate", "activator", "active", "activism", "activist", "activity", "actress", "acts", "acutely", "acuteness", "aeration", "aerobics", "aerosol", "aerospace", "afar", "affair", "affected", "affecting", "affection", "affidavit", "affiliate", "affirm", "affix", "afflicted", "affluent", "afford", "affront", "aflame", "afloat", "aflutter", "afoot", "afraid", "afterglow", "afterlife", "aftermath", "aftermost", "afternoon", "aged", "ageless", "agency", "agenda", "agent", "aggregate", "aghast", "agile", "agility", "aging", "agnostic", "agonize", "agonizing", "agony", "agreeable", "agreeably", "agreed", "agreeing", "agreement", "aground", "ahead", "ahoy", "aide", "aids", "aim", "ajar", "alabaster", "alarm", "albatross", "album", "alfalfa", "algebra", "algorithm", "alias", "alibi", "alienable", "alienate", "aliens", "alike", "alive", "alkaline", "alkalize", "almanac", "almighty", "almost", "aloe", "aloft", "aloha", "alone", "alongside", "aloof", "alphabet", "alright", "although", "altitude", "alto", "aluminum", "alumni", "always", "amaretto", "amaze", "amazingly", "amber", "ambiance", "ambiguity", "ambiguous", "ambition", "ambitious", "ambulance", "ambush", "amendable", "amendment", "amends", "amenity", "amiable", "amicably", "amid", "amigo", "amino", "amiss", "ammonia", "ammonium", "amnesty", "amniotic", "among", "amount", "amperage", "ample", "amplifier", "amplify", "amply", "amuck", "amulet", "amusable", "amused", "amusement", "amuser", "amusing", "anaconda", "anaerobic", "anagram", "anatomist", "anatomy", "anchor", "anchovy", "ancient", "android", "anemia", "anemic", "aneurism", "anew", "angelfish", "angelic", "anger", "angled", "angler", "angles", "angling", "angrily", "angriness", "anguished", "angular", "animal", "animate", "animating", "animation", "animator", "anime", "animosity", "ankle", "annex", "annotate", "announcer", "annoying", "annually", "annuity", "anointer", "another", "answering", "antacid", "antarctic", "anteater", "antelope", "antennae", "anthem", "anthill", "anthology", "antibody", "antics", "antidote", "antihero", "antiquely", "antiques", "antiquity", "antirust", "antitoxic", "antitrust", "antiviral", "antivirus", "antler", "antonym", "antsy", "anvil", "anybody", "anyhow", "anymore", "anyone", "anyplace", "anything", "anytime", "anyway", "anywhere", "aorta", "apache", "apostle", "appealing", "appear", "appease", "appeasing", "appendage", "appendix", "appetite", "appetizer", "applaud", "applause", "apple", "appliance", "applicant", "applied", "apply", "appointee", "appraisal", "appraiser", "apprehend", "approach", "approval", "approve", "apricot", "april", "apron", "aptitude", "aptly", "aqua", "aqueduct", "arbitrary", "arbitrate", "ardently", "area", "arena", "arguable", "arguably", "argue", "arise", "armadillo", "armband", "armchair", "armed", "armful", "armhole", "arming", "armless", "armoire", "armored", "armory", "armrest", "army", "aroma", "arose", "around", "arousal", "arrange", "array", "arrest", "arrival", "arrive", "arrogance", "arrogant", "arson", "art", "ascend", "ascension", "ascent", "ascertain", "ashamed", "ashen", "ashes", "ashy", "aside", "askew", "asleep", "asparagus", "aspect", "aspirate", "aspire", "aspirin", "astonish", "astound", "astride", "astrology", "astronaut", "astronomy", "astute", "atlantic", "atlas", "atom", "atonable", "atop", "atrium", "atrocious", "atrophy", "attach", "attain", "attempt", "attendant", "attendee", "attention", "attentive", "attest", "attic", "attire", "attitude", "attractor", "attribute", "atypical", "auction", "audacious", "audacity", "audible", "audibly", "audience", "audio", "audition", "augmented", "august", "authentic", "author", "autism", "autistic", "autograph", "automaker", "automated", "automatic", "autopilot", "available", "avalanche", "avatar", "avenge", "avenging", "avenue", "average", "aversion", "avert", "aviation", "aviator", "avid", "avoid", "await", "awaken", "award", "aware", "awhile", "awkward", "awning", "awoke", "awry", "axis", "babble", "babbling", "babied", "baboon", "backache", "backboard", "backboned", "backdrop", "backed", "backer", "backfield", "backfire", "backhand", "backing", "backlands", "backlash", "backless", "backlight", "backlit", "backlog", "backpack", "backpedal", "backrest", "backroom", "backshift", "backside", "backslid", "backspace", "backspin", "backstab", "backstage", "backtalk", "backtrack", "backup", "backward", "backwash", "backwater", "backyard", "bacon", "bacteria", "bacterium", "badass", "badge", "badland", "badly", "badness", "baffle", "baffling", "bagel", "bagful", "baggage", "bagged", "baggie", "bagginess", "bagging", "baggy", "bagpipe", "baguette", "baked", "bakery", "bakeshop", "baking", "balance", "balancing", "balcony", "balmy", "balsamic", "bamboo", "banana", "banish", "banister", "banjo", "bankable", "bankbook", "banked", "banker", "banking", "banknote", "bankroll", "banner", "bannister", "banshee", "banter", "barbecue", "barbed", "barbell", "barber", "barcode", "barge", "bargraph", "barista", "baritone", "barley", "barmaid", "barman", "barn", "barometer", "barrack", "barracuda", "barrel", "barrette", "barricade", "barrier", "barstool", "bartender", "barterer", "bash", "basically", "basics", "basil", "basin", "basis", "basket", "batboy", "batch", "bath", "baton", "bats", "battalion", "battered", "battering", "battery", "batting", "battle", "bauble", "bazooka", "blabber", "bladder", "blade", "blah", "blame", "blaming", "blanching", "blandness", "blank", "blaspheme", "blasphemy", "blast", "blatancy", "blatantly", "blazer", "blazing", "bleach", "bleak", "bleep", "blemish", "blend", "bless", "blighted", "blimp", "bling", "blinked", "blinker", "blinking", "blinks", "blip", "blissful", "blitz", "blizzard", "bloated", "bloating", "blob", "blog", "bloomers", "blooming", "blooper", "blot", "blouse", "blubber", "bluff", "bluish", "blunderer", "blunt", "blurb", "blurred", "blurry", "blurt", "blush", "blustery", "boaster", "boastful", "boasting", "boat", "bobbed", "bobbing", "bobble", "bobcat", "bobsled", "bobtail", "bodacious", "body", "bogged", "boggle", "bogus", "boil", "bok", "bolster", "bolt", "bonanza", "bonded", "bonding", "bondless", "boned", "bonehead", "boneless", "bonelike", "boney", "bonfire", "bonnet", "bonsai", "bonus", "bony", "boogeyman", "boogieman", "book", "boondocks", "booted", "booth", "bootie", "booting", "bootlace", "bootleg", "boots", "boozy", "borax", "boring", "borough", "borrower", "borrowing", "boss", "botanical", "botanist", "botany", "botch", "both", "bottle", "bottling", "bottom", "bounce", "bouncing", "bouncy", "bounding", "boundless", "bountiful", "bovine", "boxcar", "boxer", "boxing", "boxlike", "boxy", "breach", "breath", "breeches", "breeching", "breeder", "breeding", "breeze", "breezy", "brethren", "brewery", "brewing", "briar", "bribe", "brick", "bride", "bridged", "brigade", "bright", "brilliant", "brim", "bring", "brink", "brisket", "briskly", "briskness", "bristle", "brittle", "broadband", "broadcast", "broaden", "broadly", "broadness", "broadside", "broadways", "broiler", "broiling", "broken", "broker", "bronchial", "bronco", "bronze", "bronzing", "brook", "broom", "brought", "browbeat", "brownnose", "browse", "browsing", "bruising", "brunch", "brunette", "brunt", "brush", "brussels", "brute", "brutishly", "bubble", "bubbling", "bubbly", "buccaneer", "bucked", "bucket", "buckle", "buckshot", "buckskin", "bucktooth", "buckwheat", "buddhism", "buddhist", "budding", "buddy", "budget", "buffalo", "buffed", "buffer", "buffing", "buffoon", "buggy", "bulb", "bulge", "bulginess", "bulgur", "bulk", "bulldog", "bulldozer", "bullfight", "bullfrog", "bullhorn", "bullion", "bullish", "bullpen", "bullring", "bullseye", "bullwhip", "bully", "bunch", "bundle", "bungee", "bunion", "bunkbed", "bunkhouse", "bunkmate", "bunny", "bunt", "busboy", "bush", "busily", "busload", "bust", "busybody", "buzz", "cabana", "cabbage", "cabbie", "cabdriver", "cable", "caboose", "cache", "cackle", "cacti", "cactus", "caddie", "caddy", "cadet", "cadillac", "cadmium", "cage", "cahoots", "cake", "calamari", "calamity", "calcium", "calculate", "calculus", "caliber", "calibrate", "calm", "caloric", "calorie", "calzone", "camcorder", "cameo", "camera", "camisole", "camper", "campfire", "camping", "campsite", "campus", "canal", "canary", "cancel", "candied", "candle", "candy", "cane", "canine", "canister", "cannabis", "canned", "canning", "cannon", "cannot", "canola", "canon", "canopener", "canopy", "canteen", "canyon", "capable", "capably", "capacity", "cape", "capillary", "capital", "capitol", "capped", "capricorn", "capsize", "capsule", "caption", "captivate", "captive", "captivity", "capture", "caramel", "carat", "caravan", "carbon", "cardboard", "carded", "cardiac", "cardigan", "cardinal", "cardstock", "carefully", "caregiver", "careless", "caress", "caretaker", "cargo", "caring", "carless", "carload", "carmaker", "carnage", "carnation", "carnival", "carnivore", "carol", "carpenter", "carpentry", "carpool", "carport", "carried", "carrot", "carrousel", "carry", "cartel", "cartload", "carton", "cartoon", "cartridge", "cartwheel", "carve", "carving", "carwash", "cascade", "case", "cash", "casing", "casino", "casket", "cassette", "casually", "casualty", "catacomb", "catalog", "catalyst", "catalyze", "catapult", "cataract", "catatonic", "catcall", "catchable", "catcher", "catching", "catchy", "caterer", "catering", "catfight", "catfish", "cathedral", "cathouse", "catlike", "catnap", "catnip", "catsup", "cattail", "cattishly", "cattle", "catty", "catwalk", "caucasian", "caucus", "causal", "causation", "cause", "causing", "cauterize", "caution", "cautious", "cavalier", "cavalry", "caviar", "cavity", "cedar", "celery", "celestial", "celibacy", "celibate", "celtic", "cement", "census", "ceramics", "ceremony", "certainly", "certainty", "certified", "certify", "cesarean", "cesspool", "chafe", "chaffing", "chain", "chair", "chalice", "challenge", "chamber", "chamomile", "champion", "chance", "change", "channel", "chant", "chaos", "chaperone", "chaplain", "chapped", "chaps", "chapter", "character", "charbroil", "charcoal", "charger", "charging", "chariot", "charity", "charm", "charred", "charter", "charting", "chase", "chasing", "chaste", "chastise", "chastity", "chatroom", "chatter", "chatting", "chatty", "cheating", "cheddar", "cheek", "cheer", "cheese", "cheesy", "chef", "chemicals", "chemist", "chemo", "cherisher", "cherub", "chess", "chest", "chevron", "chevy", "chewable", "chewer", "chewing", "chewy", "chief", "chihuahua", "childcare", "childhood", "childish", "childless", "childlike", "chili", "chill", "chimp", "chip", "chirping", "chirpy", "chitchat", "chivalry", "chive", "chloride", "chlorine", "choice", "chokehold", "choking", "chomp", "chooser", "choosing", "choosy", "chop", "chosen", "chowder", "chowtime", "chrome", "chubby", "chuck", "chug", "chummy", "chump", "chunk", "churn", "chute", "cider", "cilantro", "cinch", "cinema", "cinnamon", "circle", "circling", "circular", "circulate", "circus", "citable", "citadel", "citation", "citizen", "citric", "citrus", "city", "civic", "civil", "clad", "claim", "clambake", "clammy", "clamor", "clamp", "clamshell", "clang", "clanking", "clapped", "clapper", "clapping", "clarify", "clarinet", "clarity", "clash", "clasp", "class", "clatter", "clause", "clavicle", "claw", "clay", "clean", "clear", "cleat", "cleaver", "cleft", "clench", "clergyman", "clerical", "clerk", "clever", "clicker", "client", "climate", "climatic", "cling", "clinic", "clinking", "clip", "clique", "cloak", "clobber", "clock", "clone", "cloning", "closable", "closure", "clothes", "clothing", "cloud", "clover", "clubbed", "clubbing", "clubhouse", "clump", "clumsily", "clumsy", "clunky", "clustered", "clutch", "clutter", "coach", "coagulant", "coastal", "coaster", "coasting", "coastland", "coastline", "coat", "coauthor", "cobalt", "cobbler", "cobweb", "cocoa", "coconut", "cod", "coeditor", "coerce", "coexist", "coffee", "cofounder", "cognition", "cognitive", "cogwheel", "coherence", "coherent", "cohesive", "coil", "coke", "cola", "cold", "coleslaw", "coliseum", "collage", "collapse", "collar", "collected", "collector", "collide", "collie", "collision", "colonial", "colonist", "colonize", "colony", "colossal", "colt", "coma", "come", "comfort", "comfy", "comic", "coming", "comma", "commence", "commend", "comment", "commerce", "commode", "commodity", "commodore", "common", "commotion", "commute", "commuting", "compacted", "compacter", "compactly", "compactor", "companion", "company", "compare", "compel", "compile", "comply", "component", "composed", "composer", "composite", "compost", "composure", "compound", "compress", "comprised", "computer", "computing", "comrade", "concave", "conceal", "conceded", "concept", "concerned", "concert", "conch", "concierge", "concise", "conclude", "concrete", "concur", "condense", "condiment", "condition", "condone", "conducive", "conductor", "conduit", "cone", "confess", "confetti", "confidant", "confident", "confider", "confiding", "configure", "confined", "confining", "confirm", "conflict", "conform", "confound", "confront", "confused", "confusing", "confusion", "congenial", "congested", "congrats", "congress", "conical", "conjoined", "conjure", "conjuror", "connected", "connector", "consensus", "consent", "console", "consoling", "consonant", "constable", "constant", "constrain", "constrict", "construct", "consult", "consumer", "consuming", "contact", "container", "contempt", "contend", "contented", "contently", "contents", "contest", "context", "contort", "contour", "contrite", "control", "contusion", "convene", "convent", "copartner", "cope", "copied", "copier", "copilot", "coping", "copious", "copper", "copy", "coral", "cork", "cornball", "cornbread", "corncob", "cornea", "corned", "corner", "cornfield", "cornflake", "cornhusk", "cornmeal", "cornstalk", "corny", "coronary", "coroner", "corporal", "corporate", "corral", "correct", "corridor", "corrode", "corroding", "corrosive", "corsage", "corset", "cortex", "cosigner", "cosmetics", "cosmic", "cosmos", "cosponsor", "cost", "cottage", "cotton", "couch", "cough", "could", "countable", "countdown", "counting", "countless", "country", "county", "courier", "covenant", "cover", "coveted", "coveting", "coyness", "cozily", "coziness", "cozy", "crabbing", "crabgrass", "crablike", "crabmeat", "cradle", "cradling", "crafter", "craftily", "craftsman", "craftwork", "crafty", "cramp", "cranberry", "crane", "cranial", "cranium", "crank", "crate", "crave", "craving", "crawfish", "crawlers", "crawling", "crayfish", "crayon", "crazed", "crazily", "craziness", "crazy", "creamed", "creamer", "creamlike", "crease", "creasing", "creatable", "create", "creation", "creative", "creature", "credible", "credibly", "credit", "creed", "creme", "creole", "crepe", "crept", "crescent", "crested", "cresting", "crestless", "crevice", "crewless", "crewman", "crewmate", "crib", "cricket", "cried", "crier", "crimp", "crimson", "cringe", "cringing", "crinkle", "crinkly", "crisped", "crisping", "crisply", "crispness", "crispy", "criteria", "critter", "croak", "crock", "crook", "croon", "crop", "cross", "crouch", "crouton", "crowbar", "crowd", "crown", "crucial", "crudely", "crudeness", "cruelly", "cruelness", "cruelty", "crumb", "crummiest", "crummy", "crumpet", "crumpled", "cruncher", "crunching", "crunchy", "crusader", "crushable", "crushed", "crusher", "crushing", "crust", "crux", "crying", "cryptic", "crystal", "cubbyhole", "cube", "cubical", "cubicle", "cucumber", "cuddle", "cuddly", "cufflink", "culinary", "culminate", "culpable", "culprit", "cultivate", "cultural", "culture", "cupbearer", "cupcake", "cupid", "cupped", "cupping", "curable", "curator", "curdle", "cure", "curfew", "curing", "curled", "curler", "curliness", "curling", "curly", "curry", "curse", "cursive", "cursor", "curtain", "curtly", "curtsy", "curvature", "curve", "curvy", "cushy", "cusp", "cussed", "custard", "custodian", "custody", "customary", "customer", "customize", "customs", "cut", "cycle", "cyclic", "cycling", "cyclist", "cylinder", "cymbal", "cytoplasm", "cytoplast", "dab", "dad", "daffodil", "dagger", "daily", "daintily", "dainty", "dairy", "daisy", "dallying", "dance", "dancing", "dandelion", "dander", "dandruff", "dandy", "danger", "dangle", "dangling", "daredevil", "dares", "daringly", "darkened", "darkening", "darkish", "darkness", "darkroom", "darling", "darn", "dart", "darwinism", "dash", "dastardly", "data", "datebook", "dating", "daughter", "daunting", "dawdler", "dawn", "daybed", "daybreak", "daycare", "daydream", "daylight", "daylong", "dayroom", "daytime", "dazzler", "dazzling", "deacon", "deafening", "deafness", "dealer", "dealing", "dealmaker", "dealt", "dean", "debatable", "debate", "debating", "debit", "debrief", "debtless", "debtor", "debug", "debunk", "decade", "decaf", "decal", "decathlon", "decay", "deceased", "deceit", "deceiver", "deceiving", "december", "decency", "decent", "deception", "deceptive", "decibel", "decidable", "decimal", "decimeter", "decipher", "deck", "declared", "decline", "decode", "decompose", "decorated", "decorator", "decoy", "decrease", "decree", "dedicate", "dedicator", "deduce", "deduct", "deed", "deem", "deepen", "deeply", "deepness", "deface", "defacing", "defame", "default", "defeat", "defection", "defective", "defendant", "defender", "defense", "defensive", "deferral", "deferred", "defiance", "defiant", "defile", "defiling", "define", "definite", "deflate", "deflation", "deflator", "deflected", "deflector", "defog", "deforest", "defraud", "defrost", "deftly", "defuse", "defy", "degraded", "degrading", "degrease", "degree", "dehydrate", "deity", "dejected", "delay", "delegate", "delegator", "delete", "deletion", "delicacy", "delicate", "delicious", "delighted", "delirious", "delirium", "deliverer", "delivery", "delouse", "delta", "deluge", "delusion", "deluxe", "demanding", "demeaning", "demeanor", "demise", "democracy", "democrat", "demote", "demotion", "demystify", "denatured", "deniable", "denial", "denim", "denote", "dense", "density", "dental", "dentist", "denture", "deny", "deodorant", "deodorize", "departed", "departure", "depict", "deplete", "depletion", "deplored", "deploy", "deport", "depose", "depraved", "depravity", "deprecate", "depress", "deprive", "depth", "deputize", "deputy", "derail", "deranged", "derby", "derived", "desecrate", "deserve", "deserving", "designate", "designed", "designer", "designing", "deskbound", "desktop", "deskwork", "desolate", "despair", "despise", "despite", "destiny", "destitute", "destruct", "detached", "detail", "detection", "detective", "detector", "detention", "detergent", "detest", "detonate", "detonator", "detoxify", "detract", "deuce", "devalue", "deviancy", "deviant", "deviate", "deviation", "deviator", "device", "devious", "devotedly", "devotee", "devotion", "devourer", "devouring", "devoutly", "dexterity", "dexterous", "diabetes", "diabetic", "diabolic", "diagnoses", "diagnosis", "diagram", "dial", "diameter", "diaper", "diaphragm", "diary", "dice", "dicing", "dictate", "dictation", "dictator", "difficult", "diffused", "diffuser", "diffusion", "diffusive", "dig", "dilation", "diligence", "diligent", "dill", "dilute", "dime", "diminish", "dimly", "dimmed", "dimmer", "dimness", "dimple", "diner", "dingbat", "dinghy", "dinginess", "dingo", "dingy", "dining", "dinner", "diocese", "dioxide", "diploma", "dipped", "dipper", "dipping", "directed", "direction", "directive", "directly", "directory", "direness", "dirtiness", "disabled", "disagree", "disallow", "disarm", "disarray", "disaster", "disband", "disbelief", "disburse", "discard", "discern", "discharge", "disclose", "discolor", "discount", "discourse", "discover", "discuss", "disdain", "disengage", "disfigure", "disgrace", "dish", "disinfect", "disjoin", "disk", "dislike", "disliking", "dislocate", "dislodge", "disloyal", "dismantle", "dismay", "dismiss", "dismount", "disobey", "disorder", "disown", "disparate", "disparity", "dispatch", "dispense", "dispersal", "dispersed", "disperser", "displace", "display", "displease", "disposal", "dispose", "disprove", "dispute", "disregard", "disrupt", "dissuade", "distance", "distant", "distaste", "distill", "distinct", "distort", "distract", "distress", "district", "distrust", "ditch", "ditto", "ditzy", "dividable", "divided", "dividend", "dividers", "dividing", "divinely", "diving", "divinity", "divisible", "divisibly", "division", "divisive", "divorcee", "dizziness", "dizzy", "doable", "docile", "dock", "doctrine", "document", "dodge", "dodgy", "doily", "doing", "dole", "dollar", "dollhouse", "dollop", "dolly", "dolphin", "domain", "domelike", "domestic", "dominion", "dominoes", "donated", "donation", "donator", "donor", "donut", "doodle", "doorbell", "doorframe", "doorknob", "doorman", "doormat", "doornail", "doorpost", "doorstep", "doorstop", "doorway", "doozy", "dork", "dormitory", "dorsal", "dosage", "dose", "dotted", "doubling", "douche", "dove", "down", "dowry", "doze", "drab", "dragging", "dragonfly", "dragonish", "dragster", "drainable", "drainage", "drained", "drainer", "drainpipe", "dramatic", "dramatize", "drank", "drapery", "drastic", "draw", "dreaded", "dreadful", "dreadlock", "dreamboat", "dreamily", "dreamland", "dreamless", "dreamlike", "dreamt", "dreamy", "drearily", "dreary", "drench", "dress", "drew", "dribble", "dried", "drier", "drift", "driller", "drilling", "drinkable", "drinking", "dripping", "drippy", "drivable", "driven", "driver", "driveway", "driving", "drizzle", "drizzly", "drone", "drool", "droop", "drop-down", "dropbox", "dropkick", "droplet", "dropout", "dropper", "drove", "drown", "drowsily", "drudge", "drum", "dry", "dubbed", "dubiously", "duchess", "duckbill", "ducking", "duckling", "ducktail", "ducky", "duct", "dude", "duffel", "dugout", "duh", "duke", "duller", "dullness", "duly", "dumping", "dumpling", "dumpster", "duo", "dupe", "duplex", "duplicate", "duplicity", "durable", "durably", "duration", "duress", "during", "dusk", "dust", "dutiful", "duty", "duvet", "dwarf", "dweeb", "dwelled", "dweller", "dwelling", "dwindle", "dwindling", "dynamic", "dynamite", "dynasty", "dyslexia", "dyslexic", "each", "eagle", "earache", "eardrum", "earflap", "earful", "earlobe", "early", "earmark", "earmuff", "earphone", "earpiece", "earplugs", "earring", "earshot", "earthen", "earthlike", "earthling", "earthly", "earthworm", "earthy", "earwig", "easeful", "easel", "easiest", "easily", "easiness", "easing", "eastbound", "eastcoast", "easter", "eastward", "eatable", "eaten", "eatery", "eating", "eats", "ebay", "ebony", "ebook", "ecard", "eccentric", "echo", "eclair", "eclipse", "ecologist", "ecology", "economic", "economist", "economy", "ecosphere", "ecosystem", "edge", "edginess", "edging", "edgy", "edition", "editor", "educated", "education", "educator", "eel", "effective", "effects", "efficient", "effort", "eggbeater", "egging", "eggnog", "eggplant", "eggshell", "egomaniac", "egotism", "egotistic", "either", "eject", "elaborate", "elastic", "elated", "elbow", "eldercare", "elderly", "eldest", "electable", "election", "elective", "elephant", "elevate", "elevating", "elevation", "elevator", "eleven", "elf", "eligible", "eligibly", "eliminate", "elite", "elitism", "elixir", "elk", "ellipse", "elliptic", "elm", "elongated", "elope", "eloquence", "eloquent", "elsewhere", "elude", "elusive", "elves", "email", "embargo", "embark", "embassy", "embattled", "embellish", "ember", "embezzle", "emblaze", "emblem", "embody", "embolism", "emboss", "embroider", "emcee", "emerald", "emergency", "emission", "emit", "emote", "emoticon", "emotion", "empathic", "empathy", "emperor", "emphases", "emphasis", "emphasize", "emphatic", "empirical", "employed", "employee", "employer", "emporium", "empower", "emptier", "emptiness", "empty", "emu", "enable", "enactment", "enamel", "enchanted", "enchilada", "encircle", "enclose", "enclosure", "encode", "encore", "encounter", "encourage", "encroach", "encrust", "encrypt", "endanger", "endeared", "endearing", "ended", "ending", "endless", "endnote", "endocrine", "endorphin", "endorse", "endowment", "endpoint", "endurable", "endurance", "enduring", "energetic", "energize", "energy", "enforced", "enforcer", "engaged", "engaging", "engine", "engorge", "engraved", "engraver", "engraving", "engross", "engulf", "enhance", "enigmatic", "enjoyable", "enjoyably", "enjoyer", "enjoying", "enjoyment", "enlarged", "enlarging", "enlighten", "enlisted", "enquirer", "enrage", "enrich", "enroll", "enslave", "ensnare", "ensure", "entail", "entangled", "entering", "entertain", "enticing", "entire", "entitle", "entity", "entomb", "entourage", "entrap", "entree", "entrench", "entrust", "entryway", "entwine", "enunciate", "envelope", "enviable", "enviably", "envious", "envision", "envoy", "envy", "enzyme", "epic", "epidemic", "epidermal", "epidermis", "epidural", "epilepsy", "epileptic", "epilogue", "epiphany", "episode", "equal", "equate", "equation", "equator", "equinox", "equipment", "equity", "equivocal", "eradicate", "erasable", "erased", "eraser", "erasure", "ergonomic", "errand", "errant", "erratic", "error", "erupt", "escalate", "escalator", "escapable", "escapade", "escapist", "escargot", "eskimo", "esophagus", "espionage", "espresso", "esquire", "essay", "essence", "essential", "establish", "estate", "esteemed", "estimate", "estimator", "estranged", "estrogen", "etching", "eternal", "eternity", "ethanol", "ether", "ethically", "ethics", "euphemism", "evacuate", "evacuee", "evade", "evaluate", "evaluator", "evaporate", "evasion", "evasive", "even", "everglade", "evergreen", "everybody", "everyday", "everyone", "evict", "evidence", "evident", "evil", "evoke", "evolution", "evolve", "exact", "exalted", "example", "excavate", "excavator", "exceeding", "exception", "excess", "exchange", "excitable", "exciting", "exclaim", "exclude", "excluding", "exclusion", "exclusive", "excretion", "excretory", "excursion", "excusable", "excusably", "excuse", "exemplary", "exemplify", "exemption", "exerciser", "exert", "exes", "exfoliate", "exhale", "exhaust", "exhume", "exile", "existing", "exit", "exodus", "exonerate", "exorcism", "exorcist", "expand", "expanse", "expansion", "expansive", "expectant", "expedited", "expediter", "expel", "expend", "expenses", "expensive", "expert", "expire", "expiring", "explain", "expletive", "explicit", "explode", "exploit", "explore", "exploring", "exponent", "exporter", "exposable", "expose", "exposure", "express", "expulsion", "exquisite", "extended", "extending", "extent", "extenuate", "exterior", "external", "extinct", "extortion", "extradite", "extras", "extrovert", "extrude", "extruding", "exuberant", "fable", "fabric", "fabulous", "facebook", "facecloth", "facedown", "faceless", "facelift", "faceplate", "faceted", "facial", "facility", "facing", "facsimile", "faction", "factoid", "factor", "factsheet", "factual", "faculty", "fade", "fading", "failing", "falcon", "fall", "false", "falsify", "fame", "familiar", "family", "famine", "famished", "fanatic", "fancied", "fanciness", "fancy", "fanfare", "fang", "fanning", "fantasize", "fantastic", "fantasy", "fascism", "fastball", "faster", "fasting", "fastness", "faucet", "favorable", "favorably", "favored", "favoring", "favorite", "fax", "feast", "federal", "fedora", "feeble", "feed", "feel", "feisty", "feline", "felt-tip", "feminine", "feminism", "feminist", "feminize", "femur", "fence", "fencing", "fender", "ferment", "fernlike", "ferocious", "ferocity", "ferret", "ferris", "ferry", "fervor", "fester", "festival", "festive", "festivity", "fetal", "fetch", "fever", "fiber", "fiction", "fiddle", "fiddling", "fidelity", "fidgeting", "fidgety", "fifteen", "fifth", "fiftieth", "fifty", "figment", "figure", "figurine", "filing", "filled", "filler", "filling", "film", "filter", "filth", "filtrate", "finale", "finalist", "finalize", "finally", "finance", "financial", "finch", "fineness", "finer", "finicky", "finished", "finisher", "finishing", "finite", "finless", "finlike", "fiscally", "fit", "five", "flaccid", "flagman", "flagpole", "flagship", "flagstick", "flagstone", "flail", "flakily", "flaky", "flame", "flammable", "flanked", "flanking", "flannels", "flap", "flaring", "flashback", "flashbulb", "flashcard", "flashily", "flashing", "flashy", "flask", "flatbed", "flatfoot", "flatly", "flatness", "flatten", "flattered", "flatterer", "flattery", "flattop", "flatware", "flatworm", "flavored", "flavorful", "flavoring", "flaxseed", "fled", "fleshed", "fleshy", "flick", "flier", "flight", "flinch", "fling", "flint", "flip", "flirt", "float", "flock", "flogging", "flop", "floral", "florist", "floss", "flounder", "flyable", "flyaway", "flyer", "flying", "flyover", "flypaper", "foam", "foe", "fog", "foil", "folic", "folk", "follicle", "follow", "fondling", "fondly", "fondness", "fondue", "font", "food", "fool", "footage", "football", "footbath", "footboard", "footer", "footgear", "foothill", "foothold", "footing", "footless", "footman", "footnote", "footpad", "footpath", "footprint", "footrest", "footsie", "footsore", "footwear", "footwork", "fossil", "foster", "founder", "founding", "fountain", "fox", "foyer", "fraction", "fracture", "fragile", "fragility", "fragment", "fragrance", "fragrant", "frail", "frame", "framing", "frantic", "fraternal", "frayed", "fraying", "frays", "freckled", "freckles", "freebase", "freebee", "freebie", "freedom", "freefall", "freehand", "freeing", "freeload", "freely", "freemason", "freeness", "freestyle", "freeware", "freeway", "freewill", "freezable", "freezing", "freight", "french", "frenzied", "frenzy", "frequency", "frequent", "fresh", "fretful", "fretted", "friction", "friday", "fridge", "fried", "friend", "frighten", "frightful", "frigidity", "frigidly", "frill", "fringe", "frisbee", "frisk", "fritter", "frivolous", "frolic", "from", "front", "frostbite", "frosted", "frostily", "frosting", "frostlike", "frosty", "froth", "frown", "frozen", "fructose", "frugality", "frugally", "fruit", "frustrate", "frying", "gab", "gaffe", "gag", "gainfully", "gaining", "gains", "gala", "gallantly", "galleria", "gallery", "galley", "gallon", "gallows", "gallstone", "galore", "galvanize", "gambling", "game", "gaming", "gamma", "gander", "gangly", "gangrene", "gangway", "gap", "garage", "garbage", "garden", "gargle", "garland", "garlic", "garment", "garnet", "garnish", "garter", "gas", "gatherer", "gathering", "gating", "gauging", "gauntlet", "gauze", "gave", "gawk", "gazing", "gear", "gecko", "geek", "geiger", "gem", "gender", "generic", "generous", "genetics", "genre", "gentile", "gentleman", "gently", "gents", "geography", "geologic", "geologist", "geology", "geometric", "geometry", "geranium", "gerbil", "geriatric", "germicide", "germinate", "germless", "germproof", "gestate", "gestation", "gesture", "getaway", "getting", "getup", "giant", "gibberish", "giblet", "giddily", "giddiness", "giddy", "gift", "gigabyte", "gigahertz", "gigantic", "giggle", "giggling", "giggly", "gigolo", "gilled", "gills", "gimmick", "girdle", "giveaway", "given", "giver", "giving", "gizmo", "gizzard", "glacial", "glacier", "glade", "gladiator", "gladly", "glamorous", "glamour", "glance", "glancing", "glandular", "glare", "glaring", "glass", "glaucoma", "glazing", "gleaming", "gleeful", "glider", "gliding", "glimmer", "glimpse", "glisten", "glitch", "glitter", "glitzy", "gloater", "gloating", "gloomily", "gloomy", "glorified", "glorifier", "glorify", "glorious", "glory", "gloss", "glove", "glowing", "glowworm", "glucose", "glue", "gluten", "glutinous", "glutton", "gnarly", "gnat", "goal", "goatskin", "goes", "goggles", "going", "goldfish", "goldmine", "goldsmith", "golf", "goliath", "gonad", "gondola", "gone", "gong", "good", "gooey", "goofball", "goofiness", "goofy", "google", "goon", "gopher", "gore", "gorged", "gorgeous", "gory", "gosling", "gossip", "gothic", "gotten", "gout", "gown", "grab", "graceful", "graceless", "gracious", "gradation", "graded", "grader", "gradient", "grading", "gradually", "graduate", "graffiti", "grafted", "grafting", "grain", "granddad", "grandkid", "grandly", "grandma", "grandpa", "grandson", "granite", "granny", "granola", "grant", "granular", "grape", "graph", "grapple", "grappling", "grasp", "grass", "gratified", "gratify", "grating", "gratitude", "gratuity", "gravel", "graveness", "graves", "graveyard", "gravitate", "gravity", "gravy", "gray", "grazing", "greasily", "greedily", "greedless", "greedy", "green", "greeter", "greeting", "grew", "greyhound", "grid", "grief", "grievance", "grieving", "grievous", "grill", "grimace", "grimacing", "grime", "griminess", "grimy", "grinch", "grinning", "grip", "gristle", "grit", "groggily", "groggy", "groin", "groom", "groove", "grooving", "groovy", "grope", "ground", "grouped", "grout", "grove", "grower", "growing", "growl", "grub", "grudge", "grudging", "grueling", "gruffly", "grumble", "grumbling", "grumbly", "grumpily", "grunge", "grunt", "guacamole", "guidable", "guidance", "guide", "guiding", "guileless", "guise", "gulf", "gullible", "gully", "gulp", "gumball", "gumdrop", "gumminess", "gumming", "gummy", "gurgle", "gurgling", "guru", "gush", "gusto", "gusty", "gutless", "guts", "gutter", "guy", "guzzler", "gyration", "habitable", "habitant", "habitat", "habitual", "hacked", "hacker", "hacking", "hacksaw", "had", "haggler", "haiku", "half", "halogen", "halt", "halved", "halves", "hamburger", "hamlet", "hammock", "hamper", "hamster", "hamstring", "handbag", "handball", "handbook", "handbrake", "handcart", "handclap", "handclasp", "handcraft", "handcuff", "handed", "handful", "handgrip", "handgun", "handheld", "handiness", "handiwork", "handlebar", "handled", "handler", "handling", "handmade", "handoff", "handpick", "handprint", "handrail", "handsaw", "handset", "handsfree", "handshake", "handstand", "handwash", "handwork", "handwoven", "handwrite", "handyman", "hangnail", "hangout", "hangover", "hangup", "hankering", "hankie", "hanky", "haphazard", "happening", "happier", "happiest", "happily", "happiness", "happy", "harbor", "hardcopy", "hardcore", "hardcover", "harddisk", "hardened", "hardener", "hardening", "hardhat", "hardhead", "hardiness", "hardly", "hardness", "hardship", "hardware", "hardwired", "hardwood", "hardy", "harmful", "harmless", "harmonica", "harmonics", "harmonize", "harmony", "harness", "harpist", "harsh", "harvest", "hash", "hassle", "haste", "hastily", "hastiness", "hasty", "hatbox", "hatchback", "hatchery", "hatchet", "hatching", "hatchling", "hate", "hatless", "hatred", "haunt", "haven", "hazard", "hazelnut", "hazily", "haziness", "hazing", "hazy", "headache", "headband", "headboard", "headcount", "headdress", "headed", "header", "headfirst", "headgear", "heading", "headlamp", "headless", "headlock", "headphone", "headpiece", "headrest", "headroom", "headscarf", "headset", "headsman", "headstand", "headstone", "headway", "headwear", "heap", "heat", "heave", "heavily", "heaviness", "heaving", "hedge", "hedging", "heftiness", "hefty", "helium", "helmet", "helper", "helpful", "helping", "helpless", "helpline", "hemlock", "hemstitch", "hence", "henchman", "henna", "herald", "herbal", "herbicide", "herbs", "heritage", "hermit", "heroics", "heroism", "herring", "herself", "hertz", "hesitancy", "hesitant", "hesitate", "hexagon", "hexagram", "hubcap", "huddle", "huddling", "huff", "hug", "hula", "hulk", "hull", "human", "humble", "humbling", "humbly", "humid", "humiliate", "humility", "humming", "hummus", "humongous", "humorist", "humorless", "humorous", "humpback", "humped", "humvee", "hunchback", "hundredth", "hunger", "hungrily", "hungry", "hunk", "hunter", "hunting", "huntress", "huntsman", "hurdle", "hurled", "hurler", "hurling", "hurray", "hurricane", "hurried", "hurry", "hurt", "husband", "hush", "husked", "huskiness", "hut", "hybrid", "hydrant", "hydrated", "hydration", "hydrogen", "hydroxide", "hyperlink", "hypertext", "hyphen", "hypnoses", "hypnosis", "hypnotic", "hypnotism", "hypnotist", "hypnotize", "hypocrisy", "hypocrite", "ibuprofen", "ice", "iciness", "icing", "icky", "icon", "icy", "idealism", "idealist", "idealize", "ideally", "idealness", "identical", "identify", "identity", "ideology", "idiocy", "idiom", "idly", "igloo", "ignition", "ignore", "iguana", "illicitly", "illusion", "illusive", "image", "imaginary", "imagines", "imaging", "imbecile", "imitate", "imitation", "immature", "immerse", "immersion", "imminent", "immobile", "immodest", "immorally", "immortal", "immovable", "immovably", "immunity", "immunize", "impaired", "impale", "impart", "impatient", "impeach", "impeding", "impending", "imperfect", "imperial", "impish", "implant", "implement", "implicate", "implicit", "implode", "implosion", "implosive", "imply", "impolite", "important", "importer", "impose", "imposing", "impotence", "impotency", "impotent", "impound", "imprecise", "imprint", "imprison", "impromptu", "improper", "improve", "improving", "improvise", "imprudent", "impulse", "impulsive", "impure", "impurity", "iodine", "iodize", "ion", "ipad", "iphone", "ipod", "irate", "irk", "iron", "irregular", "irrigate", "irritable", "irritably", "irritant", "irritate", "islamic", "islamist", "isolated", "isolating", "isolation", "isotope", "issue", "issuing", "italicize", "italics", "item", "itinerary", "itunes", "ivory", "ivy", "jab", "jackal", "jacket", "jackknife", "jackpot", "jailbird", "jailbreak", "jailer", "jailhouse", "jalapeno", "jam", "janitor", "january", "jargon", "jarring", "jasmine", "jaundice", "jaunt", "java", "jawed", "jawless", "jawline", "jaws", "jaybird", "jaywalker", "jazz", "jeep", "jeeringly", "jellied", "jelly", "jersey", "jester", "jet", "jiffy", "jigsaw", "jimmy", "jingle", "jingling", "jinx", "jitters", "jittery", "job", "jockey", "jockstrap", "jogger", "jogging", "john", "joining", "jokester", "jokingly", "jolliness", "jolly", "jolt", "jot", "jovial", "joyfully", "joylessly", "joyous", "joyride", "joystick", "jubilance", "jubilant", "judge", "judgingly", "judicial", "judiciary", "judo", "juggle", "juggling", "jugular", "juice", "juiciness", "juicy", "jujitsu", "jukebox", "july", "jumble", "jumbo", "jump", "junction", "juncture", "june", "junior", "juniper", "junkie", "junkman", "junkyard", "jurist", "juror", "jury", "justice", "justifier", "justify", "justly", "justness", "juvenile", "kabob", "kangaroo", "karaoke", "karate", "karma", "kebab", "keenly", "keenness", "keep", "keg", "kelp", "kennel", "kept", "kerchief", "kerosene", "kettle", "kick", "kiln", "kilobyte", "kilogram", "kilometer", "kilowatt", "kilt", "kimono", "kindle", "kindling", "kindly", "kindness", "kindred", "kinetic", "kinfolk", "king", "kinship", "kinsman", "kinswoman", "kissable", "kisser", "kissing", "kitchen", "kite", "kitten", "kitty", "kiwi", "kleenex", "knapsack", "knee", "knelt", "knickers", "knoll", "koala", "kooky", "kosher", "krypton", "kudos", "kung", "labored", "laborer", "laboring", "laborious", "labrador", "ladder", "ladies", "ladle", "ladybug", "ladylike", "lagged", "lagging", "lagoon", "lair", "lake", "lance", "landed", "landfall", "landfill", "landing", "landlady", "landless", "landline", "landlord", "landmark", "landmass", "landmine", "landowner", "landscape", "landside", "landslide", "language", "lankiness", "lanky", "lantern", "lapdog", "lapel", "lapped", "lapping", "laptop", "lard", "large", "lark", "lash", "lasso", "last", "latch", "late", "lather", "latitude", "latrine", "latter", "latticed", "launch", "launder", "laundry", "laurel", "lavender", "lavish", "laxative", "lazily", "laziness", "lazy", "lecturer", "left", "legacy", "legal", "legend", "legged", "leggings", "legible", "legibly", "legislate", "lego", "legroom", "legume", "legwarmer", "legwork", "lemon", "lend", "length", "lens", "lent", "leotard", "lesser", "letdown", "lethargic", "lethargy", "letter", "lettuce", "level", "leverage", "levers", "levitate", "levitator", "liability", "liable", "liberty", "librarian", "library", "licking", "licorice", "lid", "life", "lifter", "lifting", "liftoff", "ligament", "likely", "likeness", "likewise", "liking", "lilac", "lilly", "lily", "limb", "limeade", "limelight", "limes", "limit", "limping", "limpness", "line", "lingo", "linguini", "linguist", "lining", "linked", "linoleum", "linseed", "lint", "lion", "lip", "liquefy", "liqueur", "liquid", "lisp", "list", "litigate", "litigator", "litmus", "litter", "little", "livable", "lived", "lively", "liver", "livestock", "lividly", "living", "lizard", "lubricant", "lubricate", "lucid", "luckily", "luckiness", "luckless", "lucrative", "ludicrous", "lugged", "lukewarm", "lullaby", "lumber", "luminance", "luminous", "lumpiness", "lumping", "lumpish", "lunacy", "lunar", "lunchbox", "luncheon", "lunchroom", "lunchtime", "lung", "lurch", "lure", "luridness", "lurk", "lushly", "lushness", "luster", "lustfully", "lustily", "lustiness", "lustrous", "lusty", "luxurious", "luxury", "lying", "lyrically", "lyricism", "lyricist", "lyrics", "macarena", "macaroni", "macaw", "mace", "machine", "machinist", "magazine", "magenta", "maggot", "magical", "magician", "magma", "magnesium", "magnetic", "magnetism", "magnetize", "magnifier", "magnify", "magnitude", "magnolia", "mahogany", "maimed", "majestic", "majesty", "majorette", "majority", "makeover", "maker", "makeshift", "making", "malformed", "malt", "mama", "mammal", "mammary", "mammogram", "manager", "managing", "manatee", "mandarin", "mandate", "mandatory", "mandolin", "manger", "mangle", "mango", "mangy", "manhandle", "manhole", "manhood", "manhunt", "manicotti", "manicure", "manifesto", "manila", "mankind", "manlike", "manliness", "manly", "manmade", "manned", "mannish", "manor", "manpower", "mantis", "mantra", "manual", "many", "map", "marathon", "marauding", "marbled", "marbles", "marbling", "march", "mardi", "margarine", "margarita", "margin", "marigold", "marina", "marine", "marital", "maritime", "marlin", "marmalade", "maroon", "married", "marrow", "marry", "marshland", "marshy", "marsupial", "marvelous", "marxism", "mascot", "masculine", "mashed", "mashing", "massager", "masses", "massive", "mastiff", "matador", "matchbook", "matchbox", "matcher", "matching", "matchless", "material", "maternal", "maternity", "math", "mating", "matriarch", "matrimony", "matrix", "matron", "matted", "matter", "maturely", "maturing", "maturity", "mauve", "maverick", "maximize", "maximum", "maybe", "mayday", "mayflower", "moaner", "moaning", "mobile", "mobility", "mobilize", "mobster", "mocha", "mocker", "mockup", "modified", "modify", "modular", "modulator", "module", "moisten", "moistness", "moisture", "molar", "molasses", "mold", "molecular", "molecule", "molehill", "mollusk", "mom", "monastery", "monday", "monetary", "monetize", "moneybags", "moneyless", "moneywise", "mongoose", "mongrel", "monitor", "monkhood", "monogamy", "monogram", "monologue", "monopoly", "monorail", "monotone", "monotype", "monoxide", "monsieur", "monsoon", "monstrous", "monthly", "monument", "moocher", "moodiness", "moody", "mooing", "moonbeam", "mooned", "moonlight", "moonlike", "moonlit", "moonrise", "moonscape", "moonshine", "moonstone", "moonwalk", "mop", "morale", "morality", "morally", "morbidity", "morbidly", "morphine", "morphing", "morse", "mortality", "mortally", "mortician", "mortified", "mortify", "mortuary", "mosaic", "mossy", "most", "mothball", "mothproof", "motion", "motivate", "motivator", "motive", "motocross", "motor", "motto", "mountable", "mountain", "mounted", "mounting", "mourner", "mournful", "mouse", "mousiness", "moustache", "mousy", "mouth", "movable", "move", "movie", "moving", "mower", "mowing", "much", "muck", "mud", "mug", "mulberry", "mulch", "mule", "mulled", "mullets", "multiple", "multiply", "multitask", "multitude", "mumble", "mumbling", "mumbo", "mummified", "mummify", "mummy", "mumps", "munchkin", "mundane", "municipal", "muppet", "mural", "murkiness", "murky", "murmuring", "muscular", "museum", "mushily", "mushiness", "mushroom", "mushy", "music", "musket", "muskiness", "musky", "mustang", "mustard", "muster", "mustiness", "musty", "mutable", "mutate", "mutation", "mute", "mutilated", "mutilator", "mutiny", "mutt", "mutual", "muzzle", "myself", "myspace", "mystified", "mystify", "myth", "nacho", "nag", "nail", "name", "naming", "nanny", "nanometer", "nape", "napkin", "napped", "napping", "nappy", "narrow", "nastily", "nastiness", "national", "native", "nativity", "natural", "nature", "naturist", "nautical", "navigate", "navigator", "navy", "nearby", "nearest", "nearly", "nearness", "neatly", "neatness", "nebula", "nebulizer", "nectar", "negate", "negation", "negative", "neglector", "negligee", "negligent", "negotiate", "nemeses", "nemesis", "neon", "nephew", "nerd", "nervous", "nervy", "nest", "net", "neurology", "neuron", "neurosis", "neurotic", "neuter", "neutron", "never", "next", "nibble", "nickname", "nicotine", "niece", "nifty", "nimble", "nimbly", "nineteen", "ninetieth", "ninja", "nintendo", "ninth", "nuclear", "nuclei", "nucleus", "nugget", "nullify", "number", "numbing", "numbly", "numbness", "numeral", "numerate", "numerator", "numeric", "numerous", "nuptials", "nursery", "nursing", "nurture", "nutcase", "nutlike", "nutmeg", "nutrient", "nutshell", "nuttiness", "nutty", "nuzzle", "nylon", "oaf", "oak", "oasis", "oat", "obedience", "obedient", "obituary", "object", "obligate", "obliged", "oblivion", "oblivious", "oblong", "obnoxious", "oboe", "obscure", "obscurity", "observant", "observer", "observing", "obsessed", "obsession", "obsessive", "obsolete", "obstacle", "obstinate", "obstruct", "obtain", "obtrusive", "obtuse", "obvious", "occultist", "occupancy", "occupant", "occupier", "occupy", "ocean", "ocelot", "octagon", "octane", "october", "octopus", "ogle", "oil", "oink", "ointment", "okay", "old", "olive", "olympics", "omega", "omen", "ominous", "omission", "omit", "omnivore", "onboard", "oncoming", "ongoing", "onion", "online", "onlooker", "only", "onscreen", "onset", "onshore", "onslaught", "onstage", "onto", "onward", "onyx", "oops", "ooze", "oozy", "opacity", "opal", "open", "operable", "operate", "operating", "operation", "operative", "operator", "opium", "opossum", "opponent", "oppose", "opposing", "opposite", "oppressed", "oppressor", "opt", "opulently", "osmosis", "other", "otter", "ouch", "ought", "ounce", "outage", "outback", "outbid", "outboard", "outbound", "outbreak", "outburst", "outcast", "outclass", "outcome", "outdated", "outdoors", "outer", "outfield", "outfit", "outflank", "outgoing", "outgrow", "outhouse", "outing", "outlast", "outlet", "outline", "outlook", "outlying", "outmatch", "outmost", "outnumber", "outplayed", "outpost", "outpour", "output", "outrage", "outrank", "outreach", "outright", "outscore", "outsell", "outshine", "outshoot", "outsider", "outskirts", "outsmart", "outsource", "outspoken", "outtakes", "outthink", "outward", "outweigh", "outwit", "oval", "ovary", "oven", "overact", "overall", "overarch", "overbid", "overbill", "overbite", "overblown", "overboard", "overbook", "overbuilt", "overcast", "overcoat", "overcome", "overcook", "overcrowd", "overdraft", "overdrawn", "overdress", "overdrive", "overdue", "overeager", "overeater", "overexert", "overfed", "overfeed", "overfill", "overflow", "overfull", "overgrown", "overhand", "overhang", "overhaul", "overhead", "overhear", "overheat", "overhung", "overjoyed", "overkill", "overlabor", "overlaid", "overlap", "overlay", "overload", "overlook", "overlord", "overlying", "overnight", "overpass", "overpay", "overplant", "overplay", "overpower", "overprice", "overrate", "overreach", "overreact", "override", "overripe", "overrule", "overrun", "overshoot", "overshot", "oversight", "oversized", "oversleep", "oversold", "overspend", "overstate", "overstay", "overstep", "overstock", "overstuff", "oversweet", "overtake", "overthrow", "overtime", "overtly", "overtone", "overture", "overturn", "overuse", "overvalue", "overview", "overwrite", "owl", "oxford", "oxidant", "oxidation", "oxidize", "oxidizing", "oxygen", "oxymoron", "oyster", "ozone", "paced", "pacemaker", "pacific", "pacifier", "pacifism", "pacifist", "pacify", "padded", "padding", "paddle", "paddling", "padlock", "pagan", "pager", "paging", "pajamas", "palace", "palatable", "palm", "palpable", "palpitate", "paltry", "pampered", "pamperer", "pampers", "pamphlet", "panama", "pancake", "pancreas", "panda", "pandemic", "pang", "panhandle", "panic", "panning", "panorama", "panoramic", "panther", "pantomime", "pantry", "pants", "pantyhose", "paparazzi", "papaya", "paper", "paprika", "papyrus", "parabola", "parachute", "parade", "paradox", "paragraph", "parakeet", "paralegal", "paralyses", "paralysis", "paralyze", "paramedic", "parameter", "paramount", "parasail", "parasite", "parasitic", "parcel", "parched", "parchment", "pardon", "parish", "parka", "parking", "parkway", "parlor", "parmesan", "parole", "parrot", "parsley", "parsnip", "partake", "parted", "parting", "partition", "partly", "partner", "partridge", "party", "passable", "passably", "passage", "passcode", "passenger", "passerby", "passing", "passion", "passive", "passivism", "passover", "passport", "password", "pasta", "pasted", "pastel", "pastime", "pastor", "pastrami", "pasture", "pasty", "patchwork", "patchy", "paternal", "paternity", "path", "patience", "patient", "patio", "patriarch", "patriot", "patrol", "patronage", "patronize", "pauper", "pavement", "paver", "pavestone", "pavilion", "paving", "pawing", "payable", "payback", "paycheck", "payday", "payee", "payer", "paying", "payment", "payphone", "payroll", "pebble", "pebbly", "pecan", "pectin", "peculiar", "peddling", "pediatric", "pedicure", "pedigree", "pedometer", "pegboard", "pelican", "pellet", "pelt", "pelvis", "penalize", "penalty", "pencil", "pendant", "pending", "penholder", "penknife", "pennant", "penniless", "penny", "penpal", "pension", "pentagon", "pentagram", "pep", "perceive", "percent", "perch", "percolate", "perennial", "perfected", "perfectly", "perfume", "periscope", "perish", "perjurer", "perjury", "perkiness", "perky", "perm", "peroxide", "perpetual", "perplexed", "persecute", "persevere", "persuaded", "persuader", "pesky", "peso", "pessimism", "pessimist", "pester", "pesticide", "petal", "petite", "petition", "petri", "petroleum", "petted", "petticoat", "pettiness", "petty", "petunia", "phantom", "phobia", "phoenix", "phonebook", "phoney", "phonics", "phoniness", "phony", "phosphate", "photo", "phrase", "phrasing", "placard", "placate", "placidly", "plank", "planner", "plant", "plasma", "plaster", "plastic", "plated", "platform", "plating", "platinum", "platonic", "platter", "platypus", "plausible", "plausibly", "playable", "playback", "player", "playful", "playgroup", "playhouse", "playing", "playlist", "playmaker", "playmate", "playoff", "playpen", "playroom", "playset", "plaything", "playtime", "plaza", "pleading", "pleat", "pledge", "plentiful", "plenty", "plethora", "plexiglas", "pliable", "plod", "plop", "plot", "plow", "ploy", "pluck", "plug", "plunder", "plunging", "plural", "plus", "plutonium", "plywood", "poach", "pod", "poem", "poet", "pogo", "pointed", "pointer", "pointing", "pointless", "pointy", "poise", "poison", "poker", "poking", "polar", "police", "policy", "polio", "polish", "politely", "polka", "polo", "polyester", "polygon", "polygraph", "polymer", "poncho", "pond", "pony", "popcorn", "pope", "poplar", "popper", "poppy", "popsicle", "populace", "popular", "populate", "porcupine", "pork", "porous", "porridge", "portable", "portal", "portfolio", "porthole", "portion", "portly", "portside", "poser", "posh", "posing", "possible", "possibly", "possum", "postage", "postal", "postbox", "postcard", "posted", "poster", "posting", "postnasal", "posture", "postwar", "pouch", "pounce", "pouncing", "pound", "pouring", "pout", "powdered", "powdering", "powdery", "power", "powwow", "pox", "praising", "prance", "prancing", "pranker", "prankish", "prankster", "prayer", "praying", "preacher", "preaching", "preachy", "preamble", "precinct", "precise", "precision", "precook", "precut", "predator", "predefine", "predict", "preface", "prefix", "preflight", "preformed", "pregame", "pregnancy", "pregnant", "preheated", "prelaunch", "prelaw", "prelude", "premiere", "premises", "premium", "prenatal", "preoccupy", "preorder", "prepaid", "prepay", "preplan", "preppy", "preschool", "prescribe", "preseason", "preset", "preshow", "president", "presoak", "press", "presume", "presuming", "preteen", "pretended", "pretender", "pretense", "pretext", "pretty", "pretzel", "prevail", "prevalent", "prevent", "preview", "previous", "prewar", "prewashed", "prideful", "pried", "primal", "primarily", "primary", "primate", "primer", "primp", "princess", "print", "prior", "prism", "prison", "prissy", "pristine", "privacy", "private", "privatize", "prize", "proactive", "probable", "probably", "probation", "probe", "probing", "probiotic", "problem", "procedure", "process", "proclaim", "procreate", "procurer", "prodigal", "prodigy", "produce", "product", "profane", "profanity", "professed", "professor", "profile", "profound", "profusely", "progeny", "prognosis", "program", "progress", "projector", "prologue", "prolonged", "promenade", "prominent", "promoter", "promotion", "prompter", "promptly", "prone", "prong", "pronounce", "pronto", "proofing", "proofread", "proofs", "propeller", "properly", "property", "proponent", "proposal", "propose", "props", "prorate", "protector", "protegee", "proton", "prototype", "protozoan", "protract", "protrude", "proud", "provable", "proved", "proven", "provided", "provider", "providing", "province", "proving", "provoke", "provoking", "provolone", "prowess", "prowler", "prowling", "proximity", "proxy", "prozac", "prude", "prudishly", "prune", "pruning", "pry", "psychic", "public", "publisher", "pucker", "pueblo", "pug", "pull", "pulmonary", "pulp", "pulsate", "pulse", "pulverize", "puma", "pumice", "pummel", "punch", "punctual", "punctuate", "punctured", "pungent", "punisher", "punk", "pupil", "puppet", "puppy", "purchase", "pureblood", "purebred", "purely", "pureness", "purgatory", "purge", "purging", "purifier", "purify", "purist", "puritan", "purity", "purple", "purplish", "purposely", "purr", "purse", "pursuable", "pursuant", "pursuit", "purveyor", "pushcart", "pushchair", "pusher", "pushiness", "pushing", "pushover", "pushpin", "pushup", "pushy", "putdown", "putt", "puzzle", "puzzling", "pyramid", "pyromania", "python", "quack", "quadrant", "quail", "quaintly", "quake", "quaking", "qualified", "qualifier", "qualify", "quality", "qualm", "quantum", "quarrel", "quarry", "quartered", "quarterly", "quarters", "quartet", "quench", "query", "quicken", "quickly", "quickness", "quicksand", "quickstep", "quiet", "quill", "quilt", "quintet", "quintuple", "quirk", "quit", "quiver", "quizzical", "quotable", "quotation", "quote", "rabid", "race", "racing", "racism", "rack", "racoon", "radar", "radial", "radiance", "radiantly", "radiated", "radiation", "radiator", "radio", "radish", "raffle", "raft", "rage", "ragged", "raging", "ragweed", "raider", "railcar", "railing", "railroad", "railway", "raisin", "rake", "raking", "rally", "ramble", "rambling", "ramp", "ramrod", "ranch", "rancidity", "random", "ranged", "ranger", "ranging", "ranked", "ranking", "ransack", "ranting", "rants", "rare", "rarity", "rascal", "rash", "rasping", "ravage", "raven", "ravine", "raving", "ravioli", "ravishing", "reabsorb", "reach", "reacquire", "reaction", "reactive", "reactor", "reaffirm", "ream", "reanalyze", "reappear", "reapply", "reappoint", "reapprove", "rearrange", "rearview", "reason", "reassign", "reassure", "reattach", "reawake", "rebalance", "rebate", "rebel", "rebirth", "reboot", "reborn", "rebound", "rebuff", "rebuild", "rebuilt", "reburial", "rebuttal", "recall", "recant", "recapture", "recast", "recede", "recent", "recess", "recharger", "recipient", "recital", "recite", "reckless", "reclaim", "recliner", "reclining", "recluse", "reclusive", "recognize", "recoil", "recollect", "recolor", "reconcile", "reconfirm", "reconvene", "recopy", "record", "recount", "recoup", "recovery", "recreate", "rectal", "rectangle", "rectified", "rectify", "recycled", "recycler", "recycling", "reemerge", "reenact", "reenter", "reentry", "reexamine", "referable", "referee", "reference", "refill", "refinance", "refined", "refinery", "refining", "refinish", "reflected", "reflector", "reflex", "reflux", "refocus", "refold", "reforest", "reformat", "reformed", "reformer", "reformist", "refract", "refrain", "refreeze", "refresh", "refried", "refueling", "refund", "refurbish", "refurnish", "refusal", "refuse", "refusing", "refutable", "refute", "regain", "regalia", "regally", "reggae", "regime", "region", "register", "registrar", "registry", "regress", "regretful", "regroup", "regular", "regulate", "regulator", "rehab", "reheat", "rehire", "rehydrate", "reimburse", "reissue", "reiterate", "rejoice", "rejoicing", "rejoin", "rekindle", "relapse", "relapsing", "relatable", "related", "relation", "relative", "relax", "relay", "relearn", "release", "relenting", "reliable", "reliably", "reliance", "reliant", "relic", "relieve", "relieving", "relight", "relish", "relive", "reload", "relocate", "relock", "reluctant", "rely", "remake", "remark", "remarry", "rematch", "remedial", "remedy", "remember", "reminder", "remindful", "remission", "remix", "remnant", "remodeler", "remold", "remorse", "remote", "removable", "removal", "removed", "remover", "removing", "rename", "renderer", "rendering", "rendition", "renegade", "renewable", "renewably", "renewal", "renewed", "renounce", "renovate", "renovator", "rentable", "rental", "rented", "renter", "reoccupy", "reoccur", "reopen", "reorder", "repackage", "repacking", "repaint", "repair", "repave", "repaying", "repayment", "repeal", "repeated", "repeater", "repent", "rephrase", "replace", "replay", "replica", "reply", "reporter", "repose", "repossess", "repost", "repressed", "reprimand", "reprint", "reprise", "reproach", "reprocess", "reproduce", "reprogram", "reps", "reptile", "reptilian", "repugnant", "repulsion", "repulsive", "repurpose", "reputable", "reputably", "request", "require", "requisite", "reroute", "rerun", "resale", "resample", "rescuer", "reseal", "research", "reselect", "reseller", "resemble", "resend", "resent", "reset", "reshape", "reshoot", "reshuffle", "residence", "residency", "resident", "residual", "residue", "resigned", "resilient", "resistant", "resisting", "resize", "resolute", "resolved", "resonant", "resonate", "resort", "resource", "respect", "resubmit", "result", "resume", "resupply", "resurface", "resurrect", "retail", "retainer", "retaining", "retake", "retaliate", "retention", "rethink", "retinal", "retired", "retiree", "retiring", "retold", "retool", "retorted", "retouch", "retrace", "retract", "retrain", "retread", "retreat", "retrial", "retrieval", "retriever", "retry", "return", "retying", "retype", "reunion", "reunite", "reusable", "reuse", "reveal", "reveler", "revenge", "revenue", "reverb", "revered", "reverence", "reverend", "reversal", "reverse", "reversing", "reversion", "revert", "revisable", "revise", "revision", "revisit", "revivable", "revival", "reviver", "reviving", "revocable", "revoke", "revolt", "revolver", "revolving", "reward", "rewash", "rewind", "rewire", "reword", "rework", "rewrap", "rewrite", "rhyme", "ribbon", "ribcage", "rice", "riches", "richly", "richness", "rickety", "ricotta", "riddance", "ridden", "ride", "riding", "rifling", "rift", "rigging", "rigid", "rigor", "rimless", "rimmed", "rind", "rink", "rinse", "rinsing", "riot", "ripcord", "ripeness", "ripening", "ripping", "ripple", "rippling", "riptide", "rise", "rising", "risk", "risotto", "ritalin", "ritzy", "rival", "riverbank", "riverbed", "riverboat", "riverside", "riveter", "riveting", "roamer", "roaming", "roast", "robbing", "robe", "robin", "robotics", "robust", "rockband", "rocker", "rocket", "rockfish", "rockiness", "rocking", "rocklike", "rockslide", "rockstar", "rocky", "rogue", "roman", "romp", "rope", "roping", "roster", "rosy", "rotten", "rotting", "rotunda", "roulette", "rounding", "roundish", "roundness", "roundup", "roundworm", "routine", "routing", "rover", "roving", "royal", "rubbed", "rubber", "rubbing", "rubble", "rubdown", "ruby", "ruckus", "rudder", "rug", "ruined", "rule", "rumble", "rumbling", "rummage", "rumor", "runaround", "rundown", "runner", "running", "runny", "runt", "runway", "rupture", "rural", "ruse", "rush", "rust", "rut", "sabbath", "sabotage", "sacrament", "sacred", "sacrifice", "sadden", "saddlebag", "saddled", "saddling", "sadly", "sadness", "safari", "safeguard", "safehouse", "safely", "safeness", "saffron", "saga", "sage", "sagging", "saggy", "said", "saint", "sake", "salad", "salami", "salaried", "salary", "saline", "salon", "saloon", "salsa", "salt", "salutary", "salute", "salvage", "salvaging", "salvation", "same", "sample", "sampling", "sanction", "sanctity", "sanctuary", "sandal", "sandbag", "sandbank", "sandbar", "sandblast", "sandbox", "sanded", "sandfish", "sanding", "sandlot", "sandpaper", "sandpit", "sandstone", "sandstorm", "sandworm", "sandy", "sanitary", "sanitizer", "sank", "santa", "sapling", "sappiness", "sappy", "sarcasm", "sarcastic", "sardine", "sash", "sasquatch", "sassy", "satchel", "satiable", "satin", "satirical", "satisfied", "satisfy", "saturate", "saturday", "sauciness", "saucy", "sauna", "savage", "savanna", "saved", "savings", "savior", "savor", "saxophone", "say", "scabbed", "scabby", "scalded", "scalding", "scale", "scaling", "scallion", "scallop", "scalping", "scam", "scandal", "scanner", "scanning", "scant", "scapegoat", "scarce", "scarcity", "scarecrow", "scared", "scarf", "scarily", "scariness", "scarring", "scary", "scavenger", "scenic", "schedule", "schematic", "scheme", "scheming", "schilling", "schnapps", "scholar", "science", "scientist", "scion", "scoff", "scolding", "scone", "scoop", "scooter", "scope", "scorch", "scorebook", "scorecard", "scored", "scoreless", "scorer", "scoring", "scorn", "scorpion", "scotch", "scoundrel", "scoured", "scouring", "scouting", "scouts", "scowling", "scrabble", "scraggly", "scrambled", "scrambler", "scrap", "scratch", "scrawny", "screen", "scribble", "scribe", "scribing", "scrimmage", "script", "scroll", "scrooge", "scrounger", "scrubbed", "scrubber", "scruffy", "scrunch", "scrutiny", "scuba", "scuff", "sculptor", "sculpture", "scurvy", "scuttle", "secluded", "secluding", "seclusion", "second", "secrecy", "secret", "sectional", "sector", "secular", "securely", "security", "sedan", "sedate", "sedation", "sedative", "sediment", "seduce", "seducing", "segment", "seismic", "seizing", "seldom", "selected", "selection", "selective", "selector", "self", "seltzer", "semantic", "semester", "semicolon", "semifinal", "seminar", "semisoft", "semisweet", "senate", "senator", "send", "senior", "senorita", "sensation", "sensitive", "sensitize", "sensually", "sensuous", "sepia", "september", "septic", "septum", "sequel", "sequence", "sequester", "series", "sermon", "serotonin", "serpent", "serrated", "serve", "service", "serving", "sesame", "sessions", "setback", "setting", "settle", "settling", "setup", "sevenfold", "seventeen", "seventh", "seventy", "severity", "shabby", "shack", "shaded", "shadily", "shadiness", "shading", "shadow", "shady", "shaft", "shakable", "shakily", "shakiness", "shaking", "shaky", "shale", "shallot", "shallow", "shame", "shampoo", "shamrock", "shank", "shanty", "shape", "shaping", "share", "sharpener", "sharper", "sharpie", "sharply", "sharpness", "shawl", "sheath", "shed", "sheep", "sheet", "shelf", "shell", "shelter", "shelve", "shelving", "sherry", "shield", "shifter", "shifting", "shiftless", "shifty", "shimmer", "shimmy", "shindig", "shine", "shingle", "shininess", "shining", "shiny", "ship", "shirt", "shivering", "shock", "shone", "shoplift", "shopper", "shopping", "shoptalk", "shore", "shortage", "shortcake", "shortcut", "shorten", "shorter", "shorthand", "shortlist", "shortly", "shortness", "shorts", "shortwave", "shorty", "shout", "shove", "showbiz", "showcase", "showdown", "shower", "showgirl", "showing", "showman", "shown", "showoff", "showpiece", "showplace", "showroom", "showy", "shrank", "shrapnel", "shredder", "shredding", "shrewdly", "shriek", "shrill", "shrimp", "shrine", "shrink", "shrivel", "shrouded", "shrubbery", "shrubs", "shrug", "shrunk", "shucking", "shudder", "shuffle", "shuffling", "shun", "shush", "shut", "shy", "siamese", "siberian", "sibling", "siding", "sierra", "siesta", "sift", "sighing", "silenced", "silencer", "silent", "silica", "silicon", "silk", "silliness", "silly", "silo", "silt", "silver", "similarly", "simile", "simmering", "simple", "simplify", "simply", "sincere", "sincerity", "singer", "singing", "single", "singular", "sinister", "sinless", "sinner", "sinuous", "sip", "siren", "sister", "sitcom", "sitter", "sitting", "situated", "situation", "sixfold", "sixteen", "sixth", "sixties", "sixtieth", "sixtyfold", "sizable", "sizably", "size", "sizing", "sizzle", "sizzling", "skater", "skating", "skedaddle", "skeletal", "skeleton", "skeptic", "sketch", "skewed", "skewer", "skid", "skied", "skier", "skies", "skiing", "skilled", "skillet", "skillful", "skimmed", "skimmer", "skimming", "skimpily", "skincare", "skinhead", "skinless", "skinning", "skinny", "skintight", "skipper", "skipping", "skirmish", "skirt", "skittle", "skydiver", "skylight", "skyline", "skype", "skyrocket", "skyward", "slab", "slacked", "slacker", "slacking", "slackness", "slacks", "slain", "slam", "slander", "slang", "slapping", "slapstick", "slashed", "slashing", "slate", "slather", "slaw", "sled", "sleek", "sleep", "sleet", "sleeve", "slept", "sliceable", "sliced", "slicer", "slicing", "slick", "slider", "slideshow", "sliding", "slighted", "slighting", "slightly", "slimness", "slimy", "slinging", "slingshot", "slinky", "slip", "slit", "sliver", "slobbery", "slogan", "sloped", "sloping", "sloppily", "sloppy", "slot", "slouching", "slouchy", "sludge", "slug", "slum", "slurp", "slush", "sly", "small", "smartly", "smartness", "smasher", "smashing", "smashup", "smell", "smelting", "smile", "smilingly", "smirk", "smite", "smith", "smitten", "smock", "smog", "smoked", "smokeless", "smokiness", "smoking", "smoky", "smolder", "smooth", "smother", "smudge", "smudgy", "smuggler", "smuggling", "smugly", "smugness", "snack", "snagged", "snaking", "snap", "snare", "snarl", "snazzy", "sneak", "sneer", "sneeze", "sneezing", "snide", "sniff", "snippet", "snipping", "snitch", "snooper", "snooze", "snore", "snoring", "snorkel", "snort", "snout", "snowbird", "snowboard", "snowbound", "snowcap", "snowdrift", "snowdrop", "snowfall", "snowfield", "snowflake", "snowiness", "snowless", "snowman", "snowplow", "snowshoe", "snowstorm", "snowsuit", "snowy", "snub", "snuff", "snuggle", "snugly", "snugness", "speak", "spearfish", "spearhead", "spearman", "spearmint", "species", "specimen", "specked", "speckled", "specks", "spectacle", "spectator", "spectrum", "speculate", "speech", "speed", "spellbind", "speller", "spelling", "spendable", "spender", "spending", "spent", "spew", "sphere", "spherical", "sphinx", "spider", "spied", "spiffy", "spill", "spilt", "spinach", "spinal", "spindle", "spinner", "spinning", "spinout", "spinster", "spiny", "spiral", "spirited", "spiritism", "spirits", "spiritual", "splashed", "splashing", "splashy", "splatter", "spleen", "splendid", "splendor", "splice", "splicing", "splinter", "splotchy", "splurge", "spoilage", "spoiled", "spoiler", "spoiling", "spoils", "spoken", "spokesman", "sponge", "spongy", "sponsor", "spoof", "spookily", "spooky", "spool", "spoon", "spore", "sporting", "sports", "sporty", "spotless", "spotlight", "spotted", "spotter", "spotting", "spotty", "spousal", "spouse", "spout", "sprain", "sprang", "sprawl", "spray", "spree", "sprig", "spring", "sprinkled", "sprinkler", "sprint", "sprite", "sprout", "spruce", "sprung", "spry", "spud", "spur", "sputter", "spyglass", "squabble", "squad", "squall", "squander", "squash", "squatted", "squatter", "squatting", "squeak", "squealer", "squealing", "squeamish", "squeegee", "squeeze", "squeezing", "squid", "squiggle", "squiggly", "squint", "squire", "squirt", "squishier", "squishy", "stability", "stabilize", "stable", "stack", "stadium", "staff", "stage", "staging", "stagnant", "stagnate", "stainable", "stained", "staining", "stainless", "stalemate", "staleness", "stalling", "stallion", "stamina", "stammer", "stamp", "stand", "stank", "staple", "stapling", "starboard", "starch", "stardom", "stardust", "starfish", "stargazer", "staring", "stark", "starless", "starlet", "starlight", "starlit", "starring", "starry", "starship", "starter", "starting", "startle", "startling", "startup", "starved", "starving", "stash", "state", "static", "statistic", "statue", "stature", "status", "statute", "statutory", "staunch", "stays", "steadfast", "steadier", "steadily", "steadying", "steam", "steed", "steep", "steerable", "steering", "steersman", "stegosaur", "stellar", "stem", "stench", "stencil", "step", "stereo", "sterile", "sterility", "sterilize", "sterling", "sternness", "sternum", "stew", "stick", "stiffen", "stiffly", "stiffness", "stifle", "stifling", "stillness", "stilt", "stimulant", "stimulate", "stimuli", "stimulus", "stinger", "stingily", "stinging", "stingray", "stingy", "stinking", "stinky", "stipend", "stipulate", "stir", "stitch", "stock", "stoic", "stoke", "stole", "stomp", "stonewall", "stoneware", "stonework", "stoning", "stony", "stood", "stooge", "stool", "stoop", "stoplight", "stoppable", "stoppage", "stopped", "stopper", "stopping", "stopwatch", "storable", "storage", "storeroom", "storewide", "storm", "stout", "stove", "stowaway", "stowing", "straddle", "straggler", "strained", "strainer", "straining", "strangely", "stranger", "strangle", "strategic", "strategy", "stratus", "straw", "stray", "streak", "stream", "street", "strength", "strenuous", "strep", "stress", "stretch", "strewn", "stricken", "strict", "stride", "strife", "strike", "striking", "strive", "striving", "strobe", "strode", "stroller", "strongbox", "strongly", "strongman", "struck", "structure", "strudel", "struggle", "strum", "strung", "strut", "stubbed", "stubble", "stubbly", "stubborn", "stucco", "stuck", "student", "studied", "studio", "study", "stuffed", "stuffing", "stuffy", "stumble", "stumbling", "stump", "stung", "stunned", "stunner", "stunning", "stunt", "stupor", "sturdily", "sturdy", "styling", "stylishly", "stylist", "stylized", "stylus", "suave", "subarctic", "subatomic", "subdivide", "subdued", "subduing", "subfloor", "subgroup", "subheader", "subject", "sublease", "sublet", "sublevel", "sublime", "submarine", "submerge", "submersed", "submitter", "subpanel", "subpar", "subplot", "subprime", "subscribe", "subscript", "subsector", "subside", "subsiding", "subsidize", "subsidy", "subsoil", "subsonic", "substance", "subsystem", "subtext", "subtitle", "subtly", "subtotal", "subtract", "subtype", "suburb", "subway", "subwoofer", "subzero", "succulent", "such", "suction", "sudden", "sudoku", "suds", "sufferer", "suffering", "suffice", "suffix", "suffocate", "suffrage", "sugar", "suggest", "suing", "suitable", "suitably", "suitcase", "suitor", "sulfate", "sulfide", "sulfite", "sulfur", "sulk", "sullen", "sulphate", "sulphuric", "sultry", "superbowl", "superglue", "superhero", "superior", "superjet", "superman", "supermom", "supernova", "supervise", "supper", "supplier", "supply", "support", "supremacy", "supreme", "surcharge", "surely", "sureness", "surface", "surfacing", "surfboard", "surfer", "surgery", "surgical", "surging", "surname", "surpass", "surplus", "surprise", "surreal", "surrender", "surrogate", "surround", "survey", "survival", "survive", "surviving", "survivor", "sushi", "suspect", "suspend", "suspense", "sustained", "sustainer", "swab", "swaddling", "swagger", "swampland", "swan", "swapping", "swarm", "sway", "swear", "sweat", "sweep", "swell", "swept", "swerve", "swifter", "swiftly", "swiftness", "swimmable", "swimmer", "swimming", "swimsuit", "swimwear", "swinger", "swinging", "swipe", "swirl", "switch", "swivel", "swizzle", "swooned", "swoop", "swoosh", "swore", "sworn", "swung", "sycamore", "sympathy", "symphonic", "symphony", "symptom", "synapse", "syndrome", "synergy", "synopses", "synopsis", "synthesis", "synthetic", "syrup", "system", "t-shirt", "tabasco", "tabby", "tableful", "tables", "tablet", "tableware", "tabloid", "tackiness", "tacking", "tackle", "tackling", "tacky", "taco", "tactful", "tactical", "tactics", "tactile", "tactless", "tadpole", "taekwondo", "tag", "tainted", "take", "taking", "talcum", "talisman", "tall", "talon", "tamale", "tameness", "tamer", "tamper", "tank", "tanned", "tannery", "tanning", "tantrum", "tapeless", "tapered", "tapering", "tapestry", "tapioca", "tapping", "taps", "tarantula", "target", "tarmac", "tarnish", "tarot", "tartar", "tartly", "tartness", "task", "tassel", "taste", "tastiness", "tasting", "tasty", "tattered", "tattle", "tattling", "tattoo", "taunt", "tavern", "thank", "that", "thaw", "theater", "theatrics", "thee", "theft", "theme", "theology", "theorize", "thermal", "thermos", "thesaurus", "these", "thesis", "thespian", "thicken", "thicket", "thickness", "thieving", "thievish", "thigh", "thimble", "thing", "think", "thinly", "thinner", "thinness", "thinning", "thirstily", "thirsting", "thirsty", "thirteen", "thirty", "thong", "thorn", "those", "thousand", "thrash", "thread", "threaten", "threefold", "thrift", "thrill", "thrive", "thriving", "throat", "throbbing", "throng", "throttle", "throwaway", "throwback", "thrower", "throwing", "thud", "thumb", "thumping", "thursday", "thus", "thwarting", "thyself", "tiara", "tibia", "tidal", "tidbit", "tidiness", "tidings", "tidy", "tiger", "tighten", "tightly", "tightness", "tightrope", "tightwad", "tigress", "tile", "tiling", "till", "tilt", "timid", "timing", "timothy", "tinderbox", "tinfoil", "tingle", "tingling", "tingly", "tinker", "tinkling", "tinsel", "tinsmith", "tint", "tinwork", "tiny", "tipoff", "tipped", "tipper", "tipping", "tiptoeing", "tiptop", "tiring", "tissue", "trace", "tracing", "track", "traction", "tractor", "trade", "trading", "tradition", "traffic", "tragedy", "trailing", "trailside", "train", "traitor", "trance", "tranquil", "transfer", "transform", "translate", "transpire", "transport", "transpose", "trapdoor", "trapeze", "trapezoid", "trapped", "trapper", "trapping", "traps", "trash", "travel", "traverse", "travesty", "tray", "treachery", "treading", "treadmill", "treason", "treat", "treble", "tree", "trekker", "tremble", "trembling", "tremor", "trench", "trend", "trespass", "triage", "trial", "triangle", "tribesman", "tribunal", "tribune", "tributary", "tribute", "triceps", "trickery", "trickily", "tricking", "trickle", "trickster", "tricky", "tricolor", "tricycle", "trident", "tried", "trifle", "trifocals", "trillion", "trilogy", "trimester", "trimmer", "trimming", "trimness", "trinity", "trio", "tripod", "tripping", "triumph", "trivial", "trodden", "trolling", "trombone", "trophy", "tropical", "tropics", "trouble", "troubling", "trough", "trousers", "trout", "trowel", "truce", "truck", "truffle", "trump", "trunks", "trustable", "trustee", "trustful", "trusting", "trustless", "truth", "try", "tubby", "tubeless", "tubular", "tucking", "tuesday", "tug", "tuition", "tulip", "tumble", "tumbling", "tummy", "turban", "turbine", "turbofan", "turbojet", "turbulent", "turf", "turkey", "turmoil", "turret", "turtle", "tusk", "tutor", "tutu", "tux", "tweak", "tweed", "tweet", "tweezers", "twelve", "twentieth", "twenty", "twerp", "twice", "twiddle", "twiddling", "twig", "twilight", "twine", "twins", "twirl", "twistable", "twisted", "twister", "twisting", "twisty", "twitch", "twitter", "tycoon", "tying", "tyke", "udder", "ultimate", "ultimatum", "ultra", "umbilical", "umbrella", "umpire", "unabashed", "unable", "unadorned", "unadvised", "unafraid", "unaired", "unaligned", "unaltered", "unarmored", "unashamed", "unaudited", "unawake", "unaware", "unbaked", "unbalance", "unbeaten", "unbend", "unbent", "unbiased", "unbitten", "unblended", "unblessed", "unblock", "unbolted", "unbounded", "unboxed", "unbraided", "unbridle", "unbroken", "unbuckled", "unbundle", "unburned", "unbutton", "uncanny", "uncapped", "uncaring", "uncertain", "unchain", "unchanged", "uncharted", "uncheck", "uncivil", "unclad", "unclaimed", "unclamped", "unclasp", "uncle", "unclip", "uncloak", "unclog", "unclothed", "uncoated", "uncoiled", "uncolored", "uncombed", "uncommon", "uncooked", "uncork", "uncorrupt", "uncounted", "uncouple", "uncouth", "uncover", "uncross", "uncrown", "uncrushed", "uncured", "uncurious", "uncurled", "uncut", "undamaged", "undated", "undaunted", "undead", "undecided", "undefined", "underage", "underarm", "undercoat", "undercook", "undercut", "underdog", "underdone", "underfed", "underfeed", "underfoot", "undergo", "undergrad", "underhand", "underline", "underling", "undermine", "undermost", "underpaid", "underpass", "underpay", "underrate", "undertake", "undertone", "undertook", "undertow", "underuse", "underwear", "underwent", "underwire", "undesired", "undiluted", "undivided", "undocked", "undoing", "undone", "undrafted", "undress", "undrilled", "undusted", "undying", "unearned", "unearth", "unease", "uneasily", "uneasy", "uneatable", "uneaten", "unedited", "unelected", "unending", "unengaged", "unenvied", "unequal", "unethical", "uneven", "unexpired", "unexposed", "unfailing", "unfair", "unfasten", "unfazed", "unfeeling", "unfiled", "unfilled", "unfitted", "unfitting", "unfixable", "unfixed", "unflawed", "unfocused", "unfold", "unfounded", "unframed", "unfreeze", "unfrosted", "unfrozen", "unfunded", "unglazed", "ungloved", "unglue", "ungodly", "ungraded", "ungreased", "unguarded", "unguided", "unhappily", "unhappy", "unharmed", "unhealthy", "unheard", "unhearing", "unheated", "unhelpful", "unhidden", "unhinge", "unhitched", "unholy", "unhook", "unicorn", "unicycle", "unified", "unifier", "uniformed", "uniformly", "unify", "unimpeded", "uninjured", "uninstall", "uninsured", "uninvited", "union", "uniquely", "unisexual", "unison", "unissued", "unit", "universal", "universe", "unjustly", "unkempt", "unkind", "unknotted", "unknowing", "unknown", "unlaced", "unlatch", "unlawful", "unleaded", "unlearned", "unleash", "unless", "unleveled", "unlighted", "unlikable", "unlimited", "unlined", "unlinked", "unlisted", "unlit", "unlivable", "unloaded", "unloader", "unlocked", "unlocking", "unlovable", "unloved", "unlovely", "unloving", "unluckily", "unlucky", "unmade", "unmanaged", "unmanned", "unmapped", "unmarked", "unmasked", "unmasking", "unmatched", "unmindful", "unmixable", "unmixed", "unmolded", "unmoral", "unmovable", "unmoved", "unmoving", "unnamable", "unnamed", "unnatural", "unneeded", "unnerve", "unnerving", "unnoticed", "unopened", "unopposed", "unpack", "unpadded", "unpaid", "unpainted", "unpaired", "unpaved", "unpeeled", "unpicked", "unpiloted", "unpinned", "unplanned", "unplanted", "unpleased", "unpledged", "unplowed", "unplug", "unpopular", "unproven", "unquote", "unranked", "unrated", "unraveled", "unreached", "unread", "unreal", "unreeling", "unrefined", "unrelated", "unrented", "unrest", "unretired", "unrevised", "unrigged", "unripe", "unrivaled", "unroasted", "unrobed", "unroll", "unruffled", "unruly", "unrushed", "unsaddle", "unsafe", "unsaid", "unsalted", "unsaved", "unsavory", "unscathed", "unscented", "unscrew", "unsealed", "unseated", "unsecured", "unseeing", "unseemly", "unseen", "unselect", "unselfish", "unsent", "unsettled", "unshackle", "unshaken", "unshaved", "unshaven", "unsheathe", "unshipped", "unsightly", "unsigned", "unskilled", "unsliced", "unsmooth", "unsnap", "unsocial", "unsoiled", "unsold", "unsolved", "unsorted", "unspoiled", "unspoken", "unstable", "unstaffed", "unstamped", "unsteady", "unsterile", "unstirred", "unstitch", "unstopped", "unstuck", "unstuffed", "unstylish", "unsubtle", "unsubtly", "unsuited", "unsure", "unsworn", "untagged", "untainted", "untaken", "untamed", "untangled", "untapped", "untaxed", "unthawed", "unthread", "untidy", "untie", "until", "untimed", "untimely", "untitled", "untoasted", "untold", "untouched", "untracked", "untrained", "untreated", "untried", "untrimmed", "untrue", "untruth", "unturned", "untwist", "untying", "unusable", "unused", "unusual", "unvalued", "unvaried", "unvarying", "unveiled", "unveiling", "unvented", "unviable", "unvisited", "unvocal", "unwanted", "unwarlike", "unwary", "unwashed", "unwatched", "unweave", "unwed", "unwelcome", "unwell", "unwieldy", "unwilling", "unwind", "unwired", "unwitting", "unwomanly", "unworldly", "unworn", "unworried", "unworthy", "unwound", "unwoven", "unwrapped", "unwritten", "unzip", "upbeat", "upchuck", "upcoming", "upcountry", "update", "upfront", "upgrade", "upheaval", "upheld", "uphill", "uphold", "uplifted", "uplifting", "upload", "upon", "upper", "upright", "uprising", "upriver", "uproar", "uproot", "upscale", "upside", "upstage", "upstairs", "upstart", "upstate", "upstream", "upstroke", "upswing", "uptake", "uptight", "uptown", "upturned", "upward", "upwind", "uranium", "urban", "urchin", "urethane", "urgency", "urgent", "urging", "urologist", "urology", "usable", "usage", "useable", "used", "uselessly", "user", "usher", "usual", "utensil", "utility", "utilize", "utmost", "utopia", "utter", "vacancy", "vacant", "vacate", "vacation", "vagabond", "vagrancy", "vagrantly", "vaguely", "vagueness", "valiant", "valid", "valium", "valley", "valuables", "value", "vanilla", "vanish", "vanity", "vanquish", "vantage", "vaporizer", "variable", "variably", "varied", "variety", "various", "varmint", "varnish", "varsity", "varying", "vascular", "vaseline", "vastly", "vastness", "veal", "vegan", "veggie", "vehicular", "velcro", "velocity", "velvet", "vendetta", "vending", "vendor", "veneering", "vengeful", "venomous", "ventricle", "venture", "venue", "venus", "verbalize", "verbally", "verbose", "verdict", "verify", "verse", "version", "versus", "vertebrae", "vertical", "vertigo", "very", "vessel", "vest", "veteran", "veto", "vexingly", "viability", "viable", "vibes", "vice", "vicinity", "victory", "video", "viewable", "viewer", "viewing", "viewless", "viewpoint", "vigorous", "village", "villain", "vindicate", "vineyard", "vintage", "violate", "violation", "violator", "violet", "violin", "viper", "viral", "virtual", "virtuous", "virus", "visa", "viscosity", "viscous", "viselike", "visible", "visibly", "vision", "visiting", "visitor", "visor", "vista", "vitality", "vitalize", "vitally", "vitamins", "vivacious", "vividly", "vividness", "vixen", "vocalist", "vocalize", "vocally", "vocation", "voice", "voicing", "void", "volatile", "volley", "voltage", "volumes", "voter", "voting", "voucher", "vowed", "vowel", "voyage", "wackiness", "wad", "wafer", "waffle", "waged", "wager", "wages", "waggle", "wagon", "wake", "waking", "walk", "walmart", "walnut", "walrus", "waltz", "wand", "wannabe", "wanted", "wanting", "wasabi", "washable", "washbasin", "washboard", "washbowl", "washcloth", "washday", "washed", "washer", "washhouse", "washing", "washout", "washroom", "washstand", "washtub", "wasp", "wasting", "watch", "water", "waviness", "waving", "wavy", "whacking", "whacky", "wham", "wharf", "wheat", "whenever", "whiff", "whimsical", "whinny", "whiny", "whisking", "whoever", "whole", "whomever", "whoopee", "whooping", "whoops", "why", "wick", "widely", "widen", "widget", "widow", "width", "wieldable", "wielder", "wife", "wifi", "wikipedia", "wildcard", "wildcat", "wilder", "wildfire", "wildfowl", "wildland", "wildlife", "wildly", "wildness", "willed", "willfully", "willing", "willow", "willpower", "wilt", "wimp", "wince", "wincing", "wind", "wing", "winking", "winner", "winnings", "winter", "wipe", "wired", "wireless", "wiring", "wiry", "wisdom", "wise", "wish", "wisplike", "wispy", "wistful", "wizard", "wobble", "wobbling", "wobbly", "wok", "wolf", "wolverine", "womanhood", "womankind", "womanless", "womanlike", "womanly", "womb", "woof", "wooing", "wool", "woozy", "word", "work", "worried", "worrier", "worrisome", "worry", "worsening", "worshiper", "worst", "wound", "woven", "wow", "wrangle", "wrath", "wreath", "wreckage", "wrecker", "wrecking", "wrench", "wriggle", "wriggly", "wrinkle", "wrinkly", "wrist", "writing", "written", "wrongdoer", "wronged", "wrongful", "wrongly", "wrongness", "wrought", "xbox", "xerox", "yahoo", "yam", "yanking", "yapping", "yard", "yarn", "yeah", "yearbook", "yearling", "yearly", "yearning", "yeast", "yelling", "yelp", "yen", "yesterday", "yiddish", "yield", "yin", "yippee", "yo-yo", "yodel", "yoga", "yogurt", "yonder", "yoyo", "yummy", "zap", "zealous", "zebra", "zen", "zeppelin", "zero", "zestfully", "zesty", "zigzagged", "zipfile", "zipping", "zippy", "zips", "zit", "zodiac", "zombie", "zone", "zoning", "zookeeper", "zoologist", "zoology", "zoom"];
Object.defineProperty(Ui, "__esModule", {
  value: !0
});
Ui.newSecureWords = void 0;
const wf = Mt,
  Eo = Ri;
async function vf(e = 6) {
  let t = [];
  for (let n = 0; n < e; n++) t.push(Eo.wordlist[await (0, wf.getSecureRandomNumber)(0, Eo.wordlist.length)]);
  return t
}
Ui.newSecureWords = vf;
var Ar = {},
  Oo;

function kf() {
  if (Oo) return Ar;
  Oo = 1, Object.defineProperty(Ar, "__esModule", {
    value: !0
  }), Ar.newSecurePassphrase = void 0;
  const e = Fa();
  async function t(n = 6) {
    return (await (0, e.newSecureWords)(n)).join("-")
  }
  return Ar.newSecurePassphrase = t, Ar
}
var $e = {},
  Yt = {};
Object.defineProperty(Yt, "__esModule", {
  value: !0
});
Yt.bitsToBytes = Yt.bytesToBits = Yt.lpad = void 0;

function Xs(e, t, n) {
  for (; e.length < n;) e = t + e;
  return e
}
Yt.lpad = Xs;

function Sf(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) {
    let r = e.at(n);
    t += Xs(r.toString(2), "0", 8)
  }
  return t
}
Yt.bytesToBits = Sf;

function Af(e) {
  if (e.length % 8 !== 0) throw Error("Uneven bits");
  let t = [];
  for (; e.length > 0;) t.push(parseInt(e.slice(0, 8), 2)), e = e.slice(8);
  return Buffer.from(t)
}
Yt.bitsToBytes = Af;
var Fr = {};
Object.defineProperty(Fr, "__esModule", {
  value: !0
});
Fr.wordlist = void 0;
const If = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"];
Fr.wordlist = If;
var Cf = pe && pe.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  }
};
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.mnemonicFromRandomSeed = $e.mnemonicIndexesToBytes = $e.bytesToMnemonics = $e.bytesToMnemonicIndexes = $e.mnemonicNew = $e.mnemonicValidate = $e.mnemonicToHDSeed = $e.mnemonicToWalletKey = $e.mnemonicToPrivateKey = $e.mnemonicToSeed = $e.mnemonicToEntropy = void 0;
const Js = Cf(Yo),
  Bf = Mt,
  Pf = Tt,
  ji = Dr,
  wa = Yt,
  ni = Fr,
  La = 1e5;
async function Qs(e) {
  const t = await Kr(e);
  return await Mf(t) && !await Na(t)
}

function za(e) {
  return e.map(t => t.toLowerCase().trim())
}
async function Na(e) {
  return (await (0, ji.pbkdf2_sha512)(e, "TON seed version", Math.max(1, Math.floor(La / 256)), 64))[0] == 0
}
async function Mf(e) {
  return (await (0, ji.pbkdf2_sha512)(e, "TON fast seed version", 1, 64))[0] == 1
}
async function Kr(e, t) {
  return await (0, Pf.hmac_sha512)(e.join(" "), t && t.length > 0 ? t : "")
}
$e.mnemonicToEntropy = Kr;
async function Da(e, t, n) {
  const r = await Kr(e, n);
  return await (0, ji.pbkdf2_sha512)(r, t, La, 64)
}
$e.mnemonicToSeed = Da;
async function qs(e, t) {
  e = za(e);
  const n = await Da(e, "TON default seed", t);
  let r = Js.default.sign.keyPair.fromSeed(n.slice(0, 32));
  return {
    publicKey: Buffer.from(r.publicKey),
    secretKey: Buffer.from(r.secretKey)
  }
}
$e.mnemonicToPrivateKey = qs;
async function Tf(e, t) {
  let r = (await qs(e, t)).secretKey.slice(0, 32);
  const i = Js.default.sign.keyPair.fromSeed(r);
  return {
    publicKey: Buffer.from(i.publicKey),
    secretKey: Buffer.from(i.secretKey)
  }
}
$e.mnemonicToWalletKey = Tf;
async function Ef(e, t) {
  return e = za(e), await Da(e, "TON HD Keys seed", t)
}
$e.mnemonicToHDSeed = Ef;
async function Zs(e, t) {
  e = za(e);
  for (let n of e)
    if (ni.wordlist.indexOf(n) < 0) return !1;
  return t && t.length > 0 && !await Qs(e) ? !1 : await Na(await Kr(e, t))
}
$e.mnemonicValidate = Zs;
async function Of(e = 24, t) {
  let n = [];
  for (;;) {
    n = [];
    for (let r = 0; r < e; r++) {
      let i = await (0, Bf.getSecureRandomNumber)(0, ni.wordlist.length);
      n.push(ni.wordlist[i])
    }
    if (!(t && t.length > 0 && !await Qs(n)) && await Na(await Kr(n, t))) break
  }
  return n
}
$e.mnemonicNew = Of;

function el(e, t) {
  let n = (0, wa.bytesToBits)(e),
    r = [];
  for (let i = 0; i < t; i++) {
    let o = n.slice(i * 11, i * 11 + 11);
    r.push(parseInt(o, 2))
  }
  return r
}
$e.bytesToMnemonicIndexes = el;

function tl(e, t) {
  let n = el(e, t),
    r = [];
  for (let i of n) r.push(ni.wordlist[i]);
  return r
}
$e.bytesToMnemonics = tl;

function xf(e) {
  let t = "";
  for (let n of e) {
    if (!Number.isSafeInteger(n) || n < 0 || n >= 2028) throw Error("Invalid input");
    t += (0, wa.lpad)(n.toString(2), "0", 11)
  }
  for (; t.length % 8 !== 0;) t = t + "0";
  return (0, wa.bitsToBytes)(t)
}
$e.mnemonicIndexesToBytes = xf;
async function Uf(e, t = 24, n) {
  const r = Math.ceil(t * 11 / 8);
  let i = e;
  for (;;) {
    let o = await (0, ji.pbkdf2_sha512)(i, "TON mnemonic seed", Math.max(1, Math.floor(La / 256)), r),
      a = tl(o, t);
    if (await Zs(a, n)) return a;
    i = o
  }
}
$e.mnemonicFromRandomSeed = Uf;
var ht = {},
  Rf = pe && pe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  };
Object.defineProperty(ht, "__esModule", {
  value: !0
});
ht.openBox = ht.sealBox = ht.signVerify = ht.sign = ht.keyPairFromSeed = ht.keyPairFromSecretKey = void 0;
const fr = Rf(Yo);

function jf(e) {
  let t = fr.default.sign.keyPair.fromSecretKey(new Uint8Array(e));
  return {
    publicKey: Buffer.from(t.publicKey),
    secretKey: Buffer.from(t.secretKey)
  }
}
ht.keyPairFromSecretKey = jf;

function Lf(e) {
  let t = fr.default.sign.keyPair.fromSeed(new Uint8Array(e));
  return {
    publicKey: Buffer.from(t.publicKey),
    secretKey: Buffer.from(t.secretKey)
  }
}
ht.keyPairFromSeed = Lf;

function zf(e, t) {
  return Buffer.from(fr.default.sign.detached(new Uint8Array(e), new Uint8Array(t)))
}
ht.sign = zf;

function Nf(e, t, n) {
  return fr.default.sign.detached.verify(new Uint8Array(e), new Uint8Array(t), new Uint8Array(n))
}
ht.signVerify = Nf;

function Df(e, t, n) {
  return Buffer.from(fr.default.secretbox(e, t, n))
}
ht.sealBox = Df;

function Ff(e, t, n) {
  let r = fr.default.secretbox.open(e, t, n);
  return r ? Buffer.from(r) : null
}
ht.openBox = Ff;
var Xt = {};
Object.defineProperty(Xt, "__esModule", {
  value: !0
});
Xt.deriveEd25519Path = Xt.deriveED25519HardenedKey = Xt.getED25519MasterKeyFromSeed = void 0;
const nl = Tt,
  Kf = "ed25519 seed",
  xo = 2147483648;
async function rl(e) {
  const t = await (0, nl.hmac_sha512)(Kf, e),
    n = t.slice(0, 32),
    r = t.slice(32);
  return {
    key: n,
    chainCode: r
  }
}
Xt.getED25519MasterKeyFromSeed = rl;
async function il(e, t) {
  if (t >= xo) throw Error("Key index must be less than offset");
  const n = Buffer.alloc(4);
  n.writeUInt32BE(t + xo, 0);
  const r = Buffer.concat([Buffer.alloc(1, 0), e.key, n]),
    i = await (0, nl.hmac_sha512)(e.chainCode, r),
    o = i.slice(0, 32),
    a = i.slice(32);
  return {
    key: o,
    chainCode: a
  }
}
Xt.deriveED25519HardenedKey = il;
async function $f(e, t) {
  let n = await rl(e),
    r = [...t];
  for (; r.length > 0;) {
    let i = r[0];
    r = r.slice(1), n = await il(n, i)
  }
  return n.key
}
Xt.deriveEd25519Path = $f;
var Jt = {};
Object.defineProperty(Jt, "__esModule", {
  value: !0
});
Jt.deriveSymmetricPath = Jt.deriveSymmetricHardenedKey = Jt.getSymmetricMasterKeyFromSeed = void 0;
const al = Tt,
  Hf = "Symmetric key seed";
async function ol(e) {
  const t = await (0, al.hmac_sha512)(Hf, e),
    n = t.slice(32),
    r = t.slice(0, 32);
  return {
    key: n,
    chainCode: r
  }
}
Jt.getSymmetricMasterKeyFromSeed = ol;
async function sl(e, t) {
  const n = Buffer.concat([Buffer.alloc(1, 0), Buffer.from(t)]),
    r = await (0, al.hmac_sha512)(e.chainCode, n),
    i = r.slice(32),
    o = r.slice(0, 32);
  return {
    key: i,
    chainCode: o
  }
}
Jt.deriveSymmetricHardenedKey = sl;
async function Vf(e, t) {
  let n = await ol(e),
    r = [...t];
  for (; r.length > 0;) {
    let i = r[0];
    r = r.slice(1), n = await sl(n, i)
  }
  return n.key
}
Jt.deriveSymmetricPath = Vf;
var Qt = {};
Object.defineProperty(Qt, "__esModule", {
  value: !0
});
Qt.deriveMnemonicsPath = Qt.deriveMnemonicHardenedKey = Qt.getMnemonicsMasterKeyFromSeed = void 0;
const Gf = $e,
  ll = Tt,
  Uo = 2147483648,
  Wf = "TON Mnemonics HD seed";
async function cl(e) {
  const t = await (0, ll.hmac_sha512)(Wf, e),
    n = t.slice(0, 32),
    r = t.slice(32);
  return {
    key: n,
    chainCode: r
  }
}
Qt.getMnemonicsMasterKeyFromSeed = cl;
async function ul(e, t) {
  if (t >= Uo) throw Error("Key index must be less than offset");
  const n = Buffer.alloc(4);
  n.writeUInt32BE(t + Uo, 0);
  const r = Buffer.concat([Buffer.alloc(1, 0), e.key, n]),
    i = await (0, ll.hmac_sha512)(e.chainCode, r),
    o = i.slice(0, 32),
    a = i.slice(32);
  return {
    key: o,
    chainCode: a
  }
}
Qt.deriveMnemonicHardenedKey = ul;
async function Yf(e, t, n = 24, r) {
  let i = await cl(e),
    o = [...t];
  for (; o.length > 0;) {
    let a = o[0];
    o = o.slice(1), i = await ul(i, a)
  }
  return await (0, Gf.mnemonicFromRandomSeed)(i.key, n, r)
}
Qt.deriveMnemonicsPath = Yf;
var Ro;

function Fa() {
  return Ro || (Ro = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getMnemonicsMasterKeyFromSeed = e.deriveMnemonicHardenedKey = e.deriveMnemonicsPath = e.deriveSymmetricPath = e.deriveSymmetricHardenedKey = e.getSymmetricMasterKeyFromSeed = e.deriveEd25519Path = e.deriveED25519HardenedKey = e.getED25519MasterKeyFromSeed = e.signVerify = e.sign = e.keyPairFromSecretKey = e.keyPairFromSeed = e.openBox = e.sealBox = e.mnemonicWordList = e.mnemonicToHDSeed = e.mnemonicToSeed = e.mnemonicToWalletKey = e.mnemonicToPrivateKey = e.mnemonicValidate = e.mnemonicNew = e.newSecurePassphrase = e.newSecureWords = e.getSecureRandomNumber = e.getSecureRandomWords = e.getSecureRandomBytes = e.hmac_sha512 = e.pbkdf2_sha512 = e.sha512_sync = e.sha512 = e.sha256_sync = e.sha256 = void 0;
    var t = Gt;
    Object.defineProperty(e, "sha256", {
      enumerable: !0,
      get: function() {
        return t.sha256
      }
    }), Object.defineProperty(e, "sha256_sync", {
      enumerable: !0,
      get: function() {
        return t.sha256_sync
      }
    });
    var n = Wt;
    Object.defineProperty(e, "sha512", {
      enumerable: !0,
      get: function() {
        return n.sha512
      }
    }), Object.defineProperty(e, "sha512_sync", {
      enumerable: !0,
      get: function() {
        return n.sha512_sync
      }
    });
    var r = Dr;
    Object.defineProperty(e, "pbkdf2_sha512", {
      enumerable: !0,
      get: function() {
        return r.pbkdf2_sha512
      }
    });
    var i = Tt;
    Object.defineProperty(e, "hmac_sha512", {
      enumerable: !0,
      get: function() {
        return i.hmac_sha512
      }
    });
    var o = Mt;
    Object.defineProperty(e, "getSecureRandomBytes", {
      enumerable: !0,
      get: function() {
        return o.getSecureRandomBytes
      }
    }), Object.defineProperty(e, "getSecureRandomWords", {
      enumerable: !0,
      get: function() {
        return o.getSecureRandomWords
      }
    }), Object.defineProperty(e, "getSecureRandomNumber", {
      enumerable: !0,
      get: function() {
        return o.getSecureRandomNumber
      }
    });
    var a = Ui;
    Object.defineProperty(e, "newSecureWords", {
      enumerable: !0,
      get: function() {
        return a.newSecureWords
      }
    });
    var s = kf();
    Object.defineProperty(e, "newSecurePassphrase", {
      enumerable: !0,
      get: function() {
        return s.newSecurePassphrase
      }
    });
    var c = $e;
    Object.defineProperty(e, "mnemonicNew", {
      enumerable: !0,
      get: function() {
        return c.mnemonicNew
      }
    }), Object.defineProperty(e, "mnemonicValidate", {
      enumerable: !0,
      get: function() {
        return c.mnemonicValidate
      }
    }), Object.defineProperty(e, "mnemonicToPrivateKey", {
      enumerable: !0,
      get: function() {
        return c.mnemonicToPrivateKey
      }
    }), Object.defineProperty(e, "mnemonicToWalletKey", {
      enumerable: !0,
      get: function() {
        return c.mnemonicToWalletKey
      }
    }), Object.defineProperty(e, "mnemonicToSeed", {
      enumerable: !0,
      get: function() {
        return c.mnemonicToSeed
      }
    }), Object.defineProperty(e, "mnemonicToHDSeed", {
      enumerable: !0,
      get: function() {
        return c.mnemonicToHDSeed
      }
    });
    var f = Fr;
    Object.defineProperty(e, "mnemonicWordList", {
      enumerable: !0,
      get: function() {
        return f.wordlist
      }
    });
    var u = ht;
    Object.defineProperty(e, "sealBox", {
      enumerable: !0,
      get: function() {
        return u.sealBox
      }
    }), Object.defineProperty(e, "openBox", {
      enumerable: !0,
      get: function() {
        return u.openBox
      }
    });
    var _ = ht;
    Object.defineProperty(e, "keyPairFromSeed", {
      enumerable: !0,
      get: function() {
        return _.keyPairFromSeed
      }
    }), Object.defineProperty(e, "keyPairFromSecretKey", {
      enumerable: !0,
      get: function() {
        return _.keyPairFromSecretKey
      }
    }), Object.defineProperty(e, "sign", {
      enumerable: !0,
      get: function() {
        return _.sign
      }
    }), Object.defineProperty(e, "signVerify", {
      enumerable: !0,
      get: function() {
        return _.signVerify
      }
    });
    var B = Xt;
    Object.defineProperty(e, "getED25519MasterKeyFromSeed", {
      enumerable: !0,
      get: function() {
        return B.getED25519MasterKeyFromSeed
      }
    }), Object.defineProperty(e, "deriveED25519HardenedKey", {
      enumerable: !0,
      get: function() {
        return B.deriveED25519HardenedKey
      }
    }), Object.defineProperty(e, "deriveEd25519Path", {
      enumerable: !0,
      get: function() {
        return B.deriveEd25519Path
      }
    });
    var y = Jt;
    Object.defineProperty(e, "getSymmetricMasterKeyFromSeed", {
      enumerable: !0,
      get: function() {
        return y.getSymmetricMasterKeyFromSeed
      }
    }), Object.defineProperty(e, "deriveSymmetricHardenedKey", {
      enumerable: !0,
      get: function() {
        return y.deriveSymmetricHardenedKey
      }
    }), Object.defineProperty(e, "deriveSymmetricPath", {
      enumerable: !0,
      get: function() {
        return y.deriveSymmetricPath
      }
    });
    var S = Qt;
    Object.defineProperty(e, "deriveMnemonicsPath", {
      enumerable: !0,
      get: function() {
        return S.deriveMnemonicsPath
      }
    }), Object.defineProperty(e, "deriveMnemonicHardenedKey", {
      enumerable: !0,
      get: function() {
        return S.deriveMnemonicHardenedKey
      }
    }), Object.defineProperty(e, "getMnemonicsMasterKeyFromSeed", {
      enumerable: !0,
      get: function() {
        return S.getMnemonicsMasterKeyFromSeed
      }
    })
  }(qi)), qi
}
var jo;

function Xf() {
  if (jo) return Sr;
  jo = 1, Object.defineProperty(Sr, "__esModule", {
    value: !0
  }), Sr.wonderCalculator = void 0;
  const e = rn(),
    t = an,
    n = ur,
    r = cr,
    i = Bi(),
    o = Nt,
    a = Fa(),
    s = lr,
    c = Nr;

  function f(u, _, B) {
    let y, S = null;
    if (u === t.CellType.Ordinary) {
      let k = 0;
      for (let T of B) k = k | T.mask.value;
      y = new n.LevelMask(k)
    } else if (u === t.CellType.PrunedBranch) S = (0, r.exoticPruned)(_, B), y = new n.LevelMask(S.mask);
    else if (u === t.CellType.MerkleProof)(0, i.exoticMerkleProof)(_, B), y = new n.LevelMask(B[0].mask.value >> 1);
    else if (u === t.CellType.MerkleUpdate)(0, s.exoticMerkleUpdate)(_, B), y = new n.LevelMask((B[0].mask.value | B[1].mask.value) >> 1);
    else if (u === t.CellType.Library)(0, c.exoticLibrary)(_, B), y = new n.LevelMask;
    else throw new Error("Unsupported exotic type");
    let m = [],
      v = [],
      x = u === t.CellType.PrunedBranch ? 1 : y.hashCount,
      p = y.hashCount - x;
    for (let k = 0, T = 0; k <= y.level; k++) {
      if (!y.isSignificant(k)) continue;
      if (T < p) {
        T++;
        continue
      }
      let J;
      if (T === p) {
        if (!(k === 0 || u === t.CellType.PrunedBranch)) throw Error("Invalid");
        J = _
      } else {
        if (!(k !== 0 && u !== t.CellType.PrunedBranch)) throw Error("Invalid: " + k + ", " + u);
        J = new e.BitString(v[T - p - 1], 0, 256)
      }
      let ne = 0;
      for (let V of B) {
        let z;
        u == t.CellType.MerkleProof || u == t.CellType.MerkleUpdate ? z = V.depth(k + 1) : z = V.depth(k), ne = Math.max(ne, z)
      }
      B.length > 0 && ne++;
      let q = (0, o.getRepr)(_, J, B, k, y.apply(k).value, u),
        we = (0, a.sha256_sync)(q),
        ke = T - p;
      m[ke] = ne, v[ke] = we, T++
    }
    let h = [],
      P = [];
    if (S)
      for (let k = 0; k < 4; k++) {
        const {
          hashIndex: T
        } = y.apply(k), {
          hashIndex: J
        } = y;
        T !== J ? (h.push(S.pruned[T].hash), P.push(S.pruned[T].depth)) : (h.push(v[0]), P.push(m[0]))
      } else
        for (let k = 0; k < 4; k++) h.push(v[y.apply(k).hashIndex]), P.push(m[y.apply(k).hashIndex]);
    return {
      mask: y,
      hashes: h,
      depths: P
    }
  }
  return Sr.wonderCalculator = f, Sr
}
var jt = {},
  Li = {};
Object.defineProperty(Li, "__esModule", {
  value: !0
});
Li.topologicalSort = void 0;

function Jf(e) {
  let t = [e],
    n = new Map,
    r = new Set,
    i = [];
  for (; t.length > 0;) {
    const f = [...t];
    t = [];
    for (let u of f) {
      const _ = u.hash().toString("hex");
      if (!n.has(_)) {
        r.add(_), n.set(_, {
          cell: u,
          refs: u.refs.map(B => B.hash().toString("hex"))
        });
        for (let B of u.refs) t.push(B)
      }
    }
  }
  let o = new Set;

  function a(f) {
    if (!r.has(f)) return;
    if (o.has(f)) throw Error("Not a DAG");
    o.add(f);
    let u = n.get(f).refs;
    for (let _ = u.length - 1; _ >= 0; _--) a(u[_]);
    i.push(f), o.delete(f), r.delete(f)
  }
  for (; r.size > 0;) {
    const f = Array.from(r)[0];
    a(f)
  }
  let s = new Map;
  for (let f = 0; f < i.length; f++) s.set(i[i.length - f - 1], f);
  let c = [];
  for (let f = i.length - 1; f >= 0; f--) {
    let u = i[f];
    const _ = n.get(u);
    c.push({
      cell: _.cell,
      refs: _.refs.map(B => s.get(B))
    })
  }
  return c
}
Li.topologicalSort = Jf;
var zi = {};
Object.defineProperty(zi, "__esModule", {
  value: !0
});
zi.bitsForNumber = void 0;

function Qf(e, t) {
  let n = BigInt(e);
  if (t === "int") return n === 0n || n === -1n ? 1 : (n > 0 ? n : -n).toString(2).length + 1;
  if (t === "uint") {
    if (n < 0) throw Error(`value is negative. Got ${e}`);
    return n.toString(2).length
  } else throw Error(`invalid mode. Got ${t}`)
}
zi.bitsForNumber = Qf;
var $r = {};
Object.defineProperty($r, "__esModule", {
  value: !0
});
$r.crc32c = void 0;
const Ht = 2197175160;

function qf(e) {
  let t = -1;
  for (let r = 0; r < e.length; r++) t ^= e[r], t = t & 1 ? t >>> 1 ^ Ht : t >>> 1, t = t & 1 ? t >>> 1 ^ Ht : t >>> 1, t = t & 1 ? t >>> 1 ^ Ht : t >>> 1, t = t & 1 ? t >>> 1 ^ Ht : t >>> 1, t = t & 1 ? t >>> 1 ^ Ht : t >>> 1, t = t & 1 ? t >>> 1 ^ Ht : t >>> 1, t = t & 1 ? t >>> 1 ^ Ht : t >>> 1, t = t & 1 ? t >>> 1 ^ Ht : t >>> 1;
  t = t ^ 4294967295;
  let n = Buffer.alloc(4);
  return n.writeInt32LE(t), n
}
$r.crc32c = qf;
var Lo;

function Zf() {
  if (Lo) return jt;
  Lo = 1, Object.defineProperty(jt, "__esModule", {
    value: !0
  }), jt.serializeBoc = jt.deserializeBoc = jt.parseBoc = void 0;
  const e = Bt,
    t = rn(),
    n = Gn(),
    r = Li,
    i = zi,
    o = Ii(),
    a = Nt,
    s = Ai(),
    c = $r;

  function f(x) {
    return u(x & 7)
  }

  function u(x) {
    let M = 0;
    for (let p = 0; p < 3; p++) M += x & 1, x = x >> 1;
    return M + 1
  }

  function _(x, M) {
    const p = x.loadUint(8),
      h = p % 8,
      P = !!(p & 8),
      k = x.loadUint(8),
      T = Math.ceil(k / 2),
      J = !!(k % 2),
      ne = p >> 5,
      q = (p & 16) != 0,
      ke = q ? f(ne) * 32 : 0,
      V = q ? f(ne) * 2 : 0;
    x.skip(ke * 8), x.skip(V * 8);
    let z = t.BitString.EMPTY;
    T > 0 && (J ? z = x.loadPaddedBits(T * 8) : z = x.loadBits(T * 8));
    let ie = [];
    for (let ve = 0; ve < h; ve++) ie.push(x.loadUint(M * 8));
    return {
      bits: z,
      refs: ie,
      exotic: P
    }
  }

  function B(x, M) {
    return 2 + Math.ceil(x.bits.length / 8) + x.refs.length * M
  }

  function y(x) {
    let M = new e.BitReader(new t.BitString(x, 0, x.length * 8)),
      p = M.loadUint(32);
    if (p === 1761568243) {
      let h = M.loadUint(8),
        P = M.loadUint(8),
        k = M.loadUint(h * 8),
        T = M.loadUint(h * 8),
        J = M.loadUint(h * 8),
        ne = M.loadUint(P * 8),
        q = M.loadBuffer(k * P),
        we = M.loadBuffer(ne);
      return {
        size: h,
        offBytes: P,
        cells: k,
        roots: T,
        absent: J,
        totalCellSize: ne,
        index: q,
        cellData: we,
        root: [0]
      }
    } else if (p === 2898503464) {
      let h = M.loadUint(8),
        P = M.loadUint(8),
        k = M.loadUint(h * 8),
        T = M.loadUint(h * 8),
        J = M.loadUint(h * 8),
        ne = M.loadUint(P * 8),
        q = M.loadBuffer(k * P),
        we = M.loadBuffer(ne),
        ke = M.loadBuffer(4);
      if (!(0, c.crc32c)(x.subarray(0, x.length - 4)).equals(ke)) throw Error("Invalid CRC32C");
      return {
        size: h,
        offBytes: P,
        cells: k,
        roots: T,
        absent: J,
        totalCellSize: ne,
        index: q,
        cellData: we,
        root: [0]
      }
    } else if (p === 3052313714) {
      let h = M.loadUint(1),
        P = M.loadUint(1);
      M.loadUint(1), M.loadUint(2);
      let k = M.loadUint(3),
        T = M.loadUint(8),
        J = M.loadUint(k * 8),
        ne = M.loadUint(k * 8),
        q = M.loadUint(k * 8),
        we = M.loadUint(T * 8),
        ke = [];
      for (let ie = 0; ie < ne; ie++) ke.push(M.loadUint(k * 8));
      let V = null;
      h && (V = M.loadBuffer(J * T));
      let z = M.loadBuffer(we);
      if (P) {
        let ie = M.loadBuffer(4);
        if (!(0, c.crc32c)(x.subarray(0, x.length - 4)).equals(ie)) throw Error("Invalid CRC32C")
      }
      return {
        size: k,
        offBytes: T,
        cells: J,
        roots: ne,
        absent: q,
        totalCellSize: we,
        index: V,
        cellData: z,
        root: ke
      }
    } else throw Error("Invalid magic")
  }
  jt.parseBoc = y;

  function S(x) {
    let M = y(x),
      p = new e.BitReader(new t.BitString(M.cellData, 0, M.cellData.length * 8)),
      h = [];
    for (let k = 0; k < M.cells; k++) {
      let T = _(p, M.size);
      h.push({
        ...T,
        result: null
      })
    }
    for (let k = h.length - 1; k >= 0; k--) {
      if (h[k].result) throw Error("Impossible");
      let T = [];
      for (let J of h[k].refs) {
        if (!h[J].result) throw Error("Invalid BOC file");
        T.push(h[J].result)
      }
      h[k].result = new n.Cell({
        bits: h[k].bits,
        refs: T,
        exotic: h[k].exotic
      })
    }
    let P = [];
    for (let k = 0; k < M.root.length; k++) P.push(h[M.root[k]].result);
    return P
  }
  jt.deserializeBoc = S;

  function m(x, M, p, h) {
    let P = (0, a.getRefsDescriptor)(x.refs, x.mask.value, x.type),
      k = (0, a.getBitsDescriptor)(x.bits);
    h.writeUint(P, 8), h.writeUint(k, 8), h.writeBuffer((0, s.bitsToPaddedBuffer)(x.bits));
    for (let T of M) h.writeUint(T, p * 8)
  }

  function v(x, M) {
    let p = (0, r.topologicalSort)(x),
      h = p.length,
      P = M.idx,
      k = M.crc32,
      T = !1,
      J = 0,
      ne = Math.max(Math.ceil((0, i.bitsForNumber)(h, "uint") / 8), 1),
      q = 0,
      we = [];
    for (let ve of p) {
      let Ce = B(ve.cell, ne);
      q += Ce, we.push(q)
    }
    let ke = Math.max(Math.ceil((0, i.bitsForNumber)(q, "uint") / 8), 1),
      V = (6 + 3 * ne + ke + 1 * ne + (P ? h * ke : 0) + q + (k ? 4 : 0)) * 8,
      z = new o.BitBuilder(V);
    if (z.writeUint(3052313714, 32), z.writeBit(P), z.writeBit(k), z.writeBit(T), z.writeUint(J, 2), z.writeUint(ne, 3), z.writeUint(ke, 8), z.writeUint(h, ne * 8), z.writeUint(1, ne * 8), z.writeUint(0, ne * 8), z.writeUint(q, ke * 8), z.writeUint(0, ne * 8), P)
      for (let ve = 0; ve < h; ve++) z.writeUint(we[ve], ke * 8);
    for (let ve = 0; ve < h; ve++) m(p[ve].cell, p[ve].refs, ne, z);
    if (k) {
      let ve = (0, c.crc32c)(z.buffer());
      z.writeBuffer(ve)
    }
    let ie = z.buffer();
    if (ie.length !== V / 8) throw Error("Internal error");
    return ie
  }
  return jt.serializeBoc = v, jt
}
var zo;

function Gn() {
  if (zo) return yr;
  zo = 1;
  var e = pe && pe.__importDefault || function(B) {
      return B && B.__esModule ? B : {
        default: B
      }
    },
    t;
  Object.defineProperty(yr, "__esModule", {
    value: !0
  }), yr.Cell = void 0;
  const n = e(ar),
    r = rn(),
    i = an,
    o = Ua(),
    a = Vd(),
    s = Xf(),
    c = Zf(),
    f = Bt,
    u = qe();
  let _ = class va {
    static fromBoc(y) {
      return (0, c.deserializeBoc)(y)
    }
    static fromBase64(y) {
      let S = va.fromBoc(Buffer.from(y, "base64"));
      if (S.length !== 1) throw new Error("Deserialized more than one cell");
      return S[0]
    }
    static fromHex(y) {
      let S = va.fromBoc(Buffer.from(y, "hex"));
      if (S.length !== 1) throw new Error("Deserialized more than one cell");
      return S[0]
    }
    constructor(y) {
      this._hashes = [], this._depths = [], this.beginParse = (h = !1) => {
        if (this.isExotic && !h) throw new Error("Exotic cells cannot be parsed");
        return new o.Slice(new f.BitReader(this.bits), this.refs)
      }, this.hash = (h = 3) => this._hashes[Math.min(this._hashes.length - 1, h)], this.depth = (h = 3) => this._depths[Math.min(this._depths.length - 1, h)], this.level = () => this.mask.level, this.equals = h => this.hash().equals(h.hash()), this[t] = () => this.toString();
      let S = r.BitString.EMPTY;
      y && y.bits && (S = y.bits);
      let m = [];
      y && y.refs && (m = [...y.refs]);
      let v, x, M, p = i.CellType.Ordinary;
      if (y && y.exotic) {
        let h = (0, a.resolveExotic)(S, m),
          P = (0, s.wonderCalculator)(h.type, S, m);
        M = P.mask, x = P.depths, v = P.hashes, p = h.type
      } else {
        if (m.length > 4) throw new Error("Invalid number of references");
        if (S.length > 1023) throw new Error(`Bits overflow: ${S.length} > 1023`);
        let h = (0, s.wonderCalculator)(i.CellType.Ordinary, S, m);
        M = h.mask, x = h.depths, v = h.hashes, p = i.CellType.Ordinary
      }
      this.type = p, this.bits = S, this.refs = m, this.mask = M, this._depths = x, this._hashes = v, Object.freeze(this), Object.freeze(this.refs), Object.freeze(this.bits), Object.freeze(this.mask), Object.freeze(this._depths), Object.freeze(this._hashes)
    }
    get isExotic() {
      return this.type !== i.CellType.Ordinary
    }
    toBoc(y) {
      let S = y && y.idx !== null && y.idx !== void 0 ? y.idx : !1,
        m = y && y.crc32 !== null && y.crc32 !== void 0 ? y.crc32 : !0;
      return (0, c.serializeBoc)(this, {
        idx: S,
        crc32: m
      })
    }
    toString(y) {
      let S = y || "",
        m = "x";
      this.isExotic && (this.type === i.CellType.MerkleProof ? m = "p" : this.type === i.CellType.MerkleUpdate ? m = "u" : this.type === i.CellType.PrunedBranch && (m = "p"));
      let v = S + (this.isExotic ? m : "x") + "{" + this.bits.toString() + "}";
      for (let x in this.refs) {
        const M = this.refs[x];
        v += `
` + M.toString(S + " ")
      }
      return v
    }
    asSlice() {
      return this.beginParse()
    }
    asBuilder() {
      return (0, u.beginCell)().storeSlice(this.asSlice())
    }
  };
  return yr.Cell = _, t = n.default, _.EMPTY = new _, yr
}
var No;

function qe() {
  if (No) return cn;
  No = 1, Object.defineProperty(cn, "__esModule", {
    value: !0
  }), cn.Builder = cn.beginCell = void 0;
  const e = Ii(),
    t = Gn(),
    n = Fs();

  function r() {
    return new i
  }
  cn.beginCell = r;
  let i = class dl {
    constructor() {
      this._bits = new e.BitBuilder, this._refs = []
    }
    get bits() {
      return this._bits.length
    }
    get refs() {
      return this._refs.length
    }
    get availableBits() {
      return 1023 - this.bits
    }
    get availableRefs() {
      return 4 - this.refs
    }
    storeBit(a) {
      return this._bits.writeBit(a), this
    }
    storeBits(a) {
      return this._bits.writeBits(a), this
    }
    storeBuffer(a, s) {
      if (s != null && a.length !== s) throw Error(`Buffer length ${a.length} is not equal to ${s}`);
      return this._bits.writeBuffer(a), this
    }
    storeMaybeBuffer(a, s) {
      return a !== null ? (this.storeBit(1), this.storeBuffer(a, s)) : this.storeBit(0), this
    }
    storeUint(a, s) {
      return this._bits.writeUint(a, s), this
    }
    storeMaybeUint(a, s) {
      return a != null ? (this.storeBit(1), this.storeUint(a, s)) : this.storeBit(0), this
    }
    storeInt(a, s) {
      return this._bits.writeInt(a, s), this
    }
    storeMaybeInt(a, s) {
      return a != null ? (this.storeBit(1), this.storeInt(a, s)) : this.storeBit(0), this
    }
    storeVarUint(a, s) {
      return this._bits.writeVarUint(a, s), this
    }
    storeMaybeVarUint(a, s) {
      return a != null ? (this.storeBit(1), this.storeVarUint(a, s)) : this.storeBit(0), this
    }
    storeVarInt(a, s) {
      return this._bits.writeVarInt(a, s), this
    }
    storeMaybeVarInt(a, s) {
      return a != null ? (this.storeBit(1), this.storeVarInt(a, s)) : this.storeBit(0), this
    }
    storeCoins(a) {
      return this._bits.writeCoins(a), this
    }
    storeMaybeCoins(a) {
      return a != null ? (this.storeBit(1), this.storeCoins(a)) : this.storeBit(0), this
    }
    storeAddress(a) {
      return this._bits.writeAddress(a), this
    }
    storeRef(a) {
      if (this._refs.length >= 4) throw new Error("Too many references");
      if (a instanceof t.Cell) this._refs.push(a);
      else if (a instanceof dl) this._refs.push(a.endCell());
      else throw new Error("Invalid argument");
      return this
    }
    storeMaybeRef(a) {
      return a ? (this.storeBit(1), this.storeRef(a)) : this.storeBit(0), this
    }
    storeSlice(a) {
      let s = a.clone();
      for (s.remainingBits > 0 && this.storeBits(s.loadBits(s.remainingBits)); s.remainingRefs > 0;) this.storeRef(s.loadRef());
      return this
    }
    storeMaybeSlice(a) {
      return a ? (this.storeBit(1), this.storeSlice(a)) : this.storeBit(0), this
    }
    storeBuilder(a) {
      return this.storeSlice(a.endCell().beginParse())
    }
    storeMaybeBuilder(a) {
      return a ? (this.storeBit(1), this.storeBuilder(a)) : this.storeBit(0), this
    }
    storeWritable(a) {
      return typeof a == "object" ? a.writeTo(this) : a(this), this
    }
    storeMaybeWritable(a) {
      return a ? (this.storeBit(1), this.storeWritable(a)) : this.storeBit(0), this
    }
    store(a) {
      return this.storeWritable(a), this
    }
    storeStringTail(a) {
      return (0, n.writeString)(a, this), this
    }
    storeMaybeStringTail(a) {
      return a != null ? (this.storeBit(1), (0, n.writeString)(a, this)) : this.storeBit(0), this
    }
    storeStringRefTail(a) {
      return this.storeRef(r().storeStringTail(a)), this
    }
    storeMaybeStringRefTail(a) {
      return a != null ? (this.storeBit(1), this.storeStringRefTail(a)) : this.storeBit(0), this
    }
    storeDict(a, s, c) {
      return a ? a.store(this, s, c) : this.storeBit(0), this
    }
    storeDictDirect(a, s, c) {
      return a.storeDirect(this, s, c), this
    }
    endCell(a) {
      return new t.Cell({
        bits: this._bits.build(),
        refs: this._refs,
        exotic: a == null ? void 0 : a.exotic
      })
    }
    asCell() {
      return this.endCell()
    }
    asSlice() {
      return this.endCell().beginParse()
    }
  };
  return cn.Builder = i, cn
}
var Et = {},
  Dt = {};
Object.defineProperty(Dt, "__esModule", {
  value: !0
});
Dt.SimpleLibraryValue = Dt.storeSimpleLibrary = Dt.loadSimpleLibrary = void 0;

function fl(e) {
  return {
    public: e.loadBit(),
    root: e.loadRef()
  }
}
Dt.loadSimpleLibrary = fl;

function hl(e) {
  return t => {
    t.storeBit(e.public), t.storeRef(e.root)
  }
}
Dt.storeSimpleLibrary = hl;
Dt.SimpleLibraryValue = {
  serialize(e, t) {
    hl(e)(t)
  },
  parse(e) {
    return fl(e)
  }
};
var kn = {};
Object.defineProperty(kn, "__esModule", {
  value: !0
});
kn.storeTickTock = kn.loadTickTock = void 0;

function eh(e) {
  return {
    tick: e.loadBit(),
    tock: e.loadBit()
  }
}
kn.loadTickTock = eh;

function th(e) {
  return t => {
    t.storeBit(e.tick), t.storeBit(e.tock)
  }
}
kn.storeTickTock = th;
Object.defineProperty(Et, "__esModule", {
  value: !0
});
Et.storeStateInit = Et.loadStateInit = void 0;
const nh = Vn(),
  rh = Dt,
  pl = kn;

function ih(e) {
  let t;
  e.loadBit() && (t = e.loadUint(5));
  let n;
  e.loadBit() && (n = (0, pl.loadTickTock)(e));
  let r = e.loadMaybeRef(),
    i = e.loadMaybeRef(),
    o = e.loadDict(nh.Dictionary.Keys.BigUint(256), rh.SimpleLibraryValue);
  return o.size === 0 && (o = void 0), {
    splitDepth: t,
    special: n,
    code: r,
    data: i,
    libraries: o
  }
}
Et.loadStateInit = ih;

function ah(e) {
  return t => {
    e.splitDepth !== null && e.splitDepth !== void 0 ? (t.storeBit(!0), t.storeUint(e.splitDepth, 5)) : t.storeBit(!1), e.special !== null && e.special !== void 0 ? (t.storeBit(!0), t.store((0, pl.storeTickTock)(e.special))) : t.storeBit(!1), t.storeMaybeRef(e.code), t.storeMaybeRef(e.data), t.storeDict(e.libraries)
  }
}
Et.storeStateInit = ah;
Object.defineProperty(Si, "__esModule", {
  value: !0
});
Si.contractAddress = void 0;
const oh = qe(),
  sh = Et,
  lh = kt;

function ch(e, t) {
  let n = (0, oh.beginCell)().store((0, sh.storeStateInit)(t)).endCell().hash();
  return new lh.Address(e, n)
}
Si.contractAddress = ch;
var rr = {};
Object.defineProperty(rr, "__esModule", {
  value: !0
});
rr.parseTuple = rr.serializeTuple = void 0;
const zr = qe(),
  uh = BigInt("-9223372036854775808"),
  dh = BigInt("9223372036854775807");

function gl(e, t) {
  if (e.type === "null") t.storeUint(0, 8);
  else if (e.type === "int") e.value <= dh && e.value >= uh ? (t.storeUint(1, 8), t.storeInt(e.value, 64)) : (t.storeUint(256, 15), t.storeInt(e.value, 257));
  else if (e.type === "nan") t.storeInt(767, 16);
  else if (e.type === "cell") t.storeUint(3, 8), t.storeRef(e.cell);
  else if (e.type === "slice") t.storeUint(4, 8), t.storeUint(0, 10), t.storeUint(e.cell.bits.length, 10), t.storeUint(0, 3), t.storeUint(e.cell.refs.length, 3), t.storeRef(e.cell);
  else if (e.type === "builder") t.storeUint(5, 8), t.storeRef(e.cell);
  else if (e.type === "tuple") {
    let n = null,
      r = null;
    for (let i = 0; i < e.items.length; i++) {
      let o = n;
      n = r, r = o, i > 1 && (n = (0, zr.beginCell)().storeRef(r).storeRef(n).endCell());
      let a = (0, zr.beginCell)();
      gl(e.items[i], a), r = a.endCell()
    }
    t.storeUint(7, 8), t.storeUint(e.items.length, 16), n && t.storeRef(n), r && t.storeRef(r)
  } else throw Error("Invalid value")
}

function Mr(e) {
  let t = e.loadUint(8);
  if (t === 0) return {
    type: "null"
  };
  if (t === 1) return {
    type: "int",
    value: e.loadIntBig(64)
  };
  if (t === 2) return e.loadUint(7) === 0 ? {
    type: "int",
    value: e.loadIntBig(257)
  } : (e.loadBit(), {
    type: "nan"
  });
  if (t === 3) return {
    type: "cell",
    cell: e.loadRef()
  };
  if (t === 4) {
    let n = e.loadUint(10),
      r = e.loadUint(10),
      i = e.loadUint(3),
      o = e.loadUint(3),
      a = e.loadRef().beginParse();
    a.skip(n);
    let s = a.loadBits(r - n),
      c = (0, zr.beginCell)().storeBits(s);
    if (i < o) {
      for (let f = 0; f < i; f++) a.loadRef();
      for (let f = 0; f < o - i; f++) c.storeRef(a.loadRef())
    }
    return {
      type: "slice",
      cell: c.endCell()
    }
  } else {
    if (t === 5) return {
      type: "builder",
      cell: e.loadRef()
    };
    if (t === 7) {
      let n = e.loadUint(16),
        r = [];
      if (n > 1) {
        let i = e.loadRef().beginParse(),
          o = e.loadRef().beginParse();
        r.unshift(Mr(o));
        for (let a = 0; a < n - 2; a++) {
          let s = i;
          i = s.loadRef().beginParse(), o = s.loadRef().beginParse(), r.unshift(Mr(o))
        }
        r.unshift(Mr(i))
      } else n === 1 && r.push(Mr(e.loadRef().beginParse()));
      return {
        type: "tuple",
        items: r
      }
    } else throw Error("Unsupported stack item")
  }
}

function ml(e, t) {
  if (e.length > 0) {
    let n = (0, zr.beginCell)();
    ml(e.slice(0, e.length - 1), n), t.storeRef(n.endCell()), gl(e[e.length - 1], t)
  }
}

function fh(e) {
  let t = (0, zr.beginCell)();
  t.storeUint(e.length, 24);
  let n = [...e];
  return ml(n, t), t.endCell()
}
rr.serializeTuple = fh;

function hh(e) {
  let t = [],
    n = e.beginParse(),
    r = n.loadUint(24);
  for (let i = 0; i < r; i++) {
    let o = n.loadRef();
    t.unshift(Mr(n)), n = o.beginParse()
  }
  return t
}
rr.parseTuple = hh;
var Ni = {};
Object.defineProperty(Ni, "__esModule", {
  value: !0
});
Ni.TupleReader = void 0;
class Xn {
  constructor(t) {
    this.items = [...t]
  }
  get remaining() {
    return this.items.length
  }
  peek() {
    if (this.items.length === 0) throw Error("EOF");
    return this.items[0]
  }
  pop() {
    if (this.items.length === 0) throw Error("EOF");
    let t = this.items[0];
    return this.items.splice(0, 1), t
  }
  skip(t = 1) {
    for (let n = 0; n < t; n++) this.pop();
    return this
  }
  readBigNumber() {
    let t = this.pop();
    if (t.type !== "int") throw Error("Not a number");
    return t.value
  }
  readBigNumberOpt() {
    let t = this.pop();
    if (t.type === "null") return null;
    if (t.type !== "int") throw Error("Not a number");
    return t.value
  }
  readNumber() {
    return Number(this.readBigNumber())
  }
  readNumberOpt() {
    let t = this.readBigNumberOpt();
    return t !== null ? Number(t) : null
  }
  readBoolean() {
    return this.readNumber() !== 0
  }
  readBooleanOpt() {
    let t = this.readNumberOpt();
    return t !== null ? t !== 0 : null
  }
  readAddress() {
    let t = this.readCell().beginParse().loadAddress();
    if (t !== null) return t;
    throw Error("Not an address")
  }
  readAddressOpt() {
    let t = this.readCellOpt();
    return t !== null ? t.beginParse().loadMaybeAddress() : null
  }
  readCell() {
    let t = this.pop();
    if (t.type !== "cell" && t.type !== "slice" && t.type !== "builder") throw Error("Not a cell: " + t.type);
    return t.cell
  }
  readCellOpt() {
    let t = this.pop();
    if (t.type === "null") return null;
    if (t.type !== "cell" && t.type !== "slice" && t.type !== "builder") throw Error("Not a cell");
    return t.cell
  }
  readTuple() {
    let t = this.pop();
    if (t.type !== "tuple") throw Error("Not a tuple");
    return new Xn(t.items)
  }
  readTupleOpt() {
    let t = this.pop();
    if (t.type === "null") return null;
    if (t.type !== "tuple") throw Error("Not a tuple");
    return new Xn(t.items)
  }
  static readLispList(t) {
    const n = [];
    let r = t;
    for (; r !== null;) {
      var i = r.pop();
      if (r.items.length === 0 || r.items[0].type !== "tuple" && r.items[0].type !== "null") throw Error("Lisp list consists only from (any, tuple) elements and ends with null");
      r = r.readTupleOpt(), n.push(i)
    }
    return n
  }
  readLispListDirect() {
    return this.items.length === 1 && this.items[0].type === "null" ? [] : Xn.readLispList(this)
  }
  readLispList() {
    return Xn.readLispList(this.readTupleOpt())
  }
  readBuffer() {
    let t = this.readCell().beginParse();
    if (t.remainingRefs !== 0 || t.remainingBits % 8 !== 0) throw Error("Not a buffer");
    return t.loadBuffer(t.remainingBits / 8)
  }
  readBufferOpt() {
    let t = this.readCellOpt();
    if (t !== null) {
      let n = t.beginParse();
      if (n.remainingRefs !== 0 || n.remainingBits % 8 !== 0) throw Error("Not a buffer");
      return n.loadBuffer(n.remainingBits / 8)
    } else return null
  }
  readString() {
    return this.readCell().beginParse().loadStringTail()
  }
  readStringOpt() {
    let t = this.readCellOpt();
    return t !== null ? t.beginParse().loadStringTail() : null
  }
}
Ni.TupleReader = Xn;
var Di = {};
Object.defineProperty(Di, "__esModule", {
  value: !0
});
Di.TupleBuilder = void 0;
const Zi = qe(),
  ea = Gn(),
  ta = Ua();
class ph {
  constructor() {
    this._tuple = []
  }
  writeNumber(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : this._tuple.push({
      type: "int",
      value: BigInt(t)
    })
  }
  writeBoolean(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : this._tuple.push({
      type: "int",
      value: t ? -1n : 0n
    })
  }
  writeBuffer(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : this._tuple.push({
      type: "slice",
      cell: (0, Zi.beginCell)().storeBuffer(t).endCell()
    })
  }
  writeString(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : this._tuple.push({
      type: "slice",
      cell: (0, Zi.beginCell)().storeStringTail(t).endCell()
    })
  }
  writeCell(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : t instanceof ea.Cell ? this._tuple.push({
      type: "cell",
      cell: t
    }) : t instanceof ta.Slice && this._tuple.push({
      type: "cell",
      cell: t.asCell()
    })
  }
  writeSlice(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : t instanceof ea.Cell ? this._tuple.push({
      type: "slice",
      cell: t
    }) : t instanceof ta.Slice && this._tuple.push({
      type: "slice",
      cell: t.asCell()
    })
  }
  writeBuilder(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : t instanceof ea.Cell ? this._tuple.push({
      type: "builder",
      cell: t
    }) : t instanceof ta.Slice && this._tuple.push({
      type: "builder",
      cell: t.asCell()
    })
  }
  writeTuple(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : this._tuple.push({
      type: "tuple",
      items: t
    })
  }
  writeAddress(t) {
    t == null ? this._tuple.push({
      type: "null"
    }) : this._tuple.push({
      type: "slice",
      cell: (0, Zi.beginCell)().storeAddress(t).endCell()
    })
  }
  build() {
    return [...this._tuple]
  }
}
Di.TupleBuilder = ph;
var bl = {},
  qt = {},
  Sn = {};
Object.defineProperty(Sn, "__esModule", {
  value: !0
});
Sn.fromNano = Sn.toNano = void 0;

function gh(e) {
  if (typeof e == "bigint") return e * 1000000000n;
  {
    if (typeof e == "number") {
      if (!Number.isFinite(e)) throw Error("Invalid number");
      if (Math.log10(e) <= 6) e = e.toLocaleString("en", {
        minimumFractionDigits: 9,
        useGrouping: !1
      });
      else if (e - Math.trunc(e) === 0) e = e.toLocaleString("en", {
        maximumFractionDigits: 0,
        useGrouping: !1
      });
      else throw Error("Not enough precision for a number value. Use string value instead")
    }
    let t = !1;
    for (; e.startsWith("-");) t = !t, e = e.slice(1);
    if (e === ".") throw Error("Invalid number");
    let n = e.split(".");
    if (n.length > 2) throw Error("Invalid number");
    let r = n[0],
      i = n[1];
    if (r || (r = "0"), i || (i = "0"), i.length > 9) throw Error("Invalid number");
    for (; i.length < 9;) i += "0";
    let o = BigInt(r) * 1000000000n + BigInt(i);
    return t && (o = -o), o
  }
}
Sn.toNano = gh;

function mh(e) {
  let t = BigInt(e),
    n = !1;
  t < 0 && (n = !0, t = -t);
  let i = (t % 1000000000n).toString();
  for (; i.length < 9;) i = "0" + i;
  i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  let s = `${(t/1000000000n).toString()}${i==="0"?"":`.${i}`}`;
  return n && (s = "-" + s), s
}
Sn.fromNano = mh;
Object.defineProperty(qt, "__esModule", {
  value: !0
});
qt.comment = qt.external = qt.internal = void 0;
const ri = kt,
  yl = Gn(),
  _l = qe(),
  bh = Sn;

function yh(e) {
  let t = !0;
  e.bounce !== null && e.bounce !== void 0 && (t = e.bounce);
  let n;
  if (typeof e.to == "string") n = ri.Address.parse(e.to);
  else if (ri.Address.isAddress(e.to)) n = e.to;
  else throw new Error(`Invalid address ${e.to}`);
  let r;
  typeof e.value == "string" ? r = (0, bh.toNano)(e.value) : r = e.value;
  let i = yl.Cell.EMPTY;
  return typeof e.body == "string" ? i = (0, _l.beginCell)().storeUint(0, 32).storeStringTail(e.body).endCell() : e.body && (i = e.body), {
    info: {
      type: "internal",
      dest: n,
      value: {
        coins: r
      },
      bounce: t,
      ihrDisabled: !0,
      bounced: !1,
      ihrFee: 0n,
      forwardFee: 0n,
      createdAt: 0,
      createdLt: 0n
    },
    init: e.init ?? void 0,
    body: i
  }
}
qt.internal = yh;

function _h(e) {
  let t;
  if (typeof e.to == "string") t = ri.Address.parse(e.to);
  else if (ri.Address.isAddress(e.to)) t = e.to;
  else throw new Error(`Invalid address ${e.to}`);
  return {
    info: {
      type: "external-in",
      dest: t,
      importFee: 0n
    },
    init: e.init ?? void 0,
    body: e.body || yl.Cell.EMPTY
  }
}
qt.external = _h;

function wh(e) {
  return (0, _l.beginCell)().storeUint(0, 32).storeStringTail(e).endCell()
}
qt.comment = wh;
var An = {},
  In = {},
  Cn = {};
Object.defineProperty(Cn, "__esModule", {
  value: !0
});
Cn.storeAccountState = Cn.loadAccountState = void 0;
const wl = Et;

function vh(e) {
  return e.loadBit() ? {
    type: "active",
    state: (0, wl.loadStateInit)(e)
  } : e.loadBit() ? {
    type: "frozen",
    stateHash: e.loadUintBig(256)
  } : {
    type: "uninit"
  }
}
Cn.loadAccountState = vh;

function kh(e) {
  return t => {
    e.type === "active" ? (t.storeBit(!0), t.store((0, wl.storeStateInit)(e.state))) : e.type === "frozen" ? (t.storeBit(!1), t.storeBit(!0), t.storeUint(e.stateHash, 256)) : e.type === "uninit" && (t.storeBit(!1), t.storeBit(!1))
  }
}
Cn.storeAccountState = kh;
var yt = {};
Object.defineProperty(yt, "__esModule", {
  value: !0
});
yt.storeCurrencyCollection = yt.loadCurrencyCollection = void 0;
const Do = Vn();

function Sh(e) {
  const t = e.loadCoins(),
    n = e.loadDict(Do.Dictionary.Keys.Uint(32), Do.Dictionary.Values.BigVarUint(5));
  return n.size === 0 ? {
    coins: t
  } : {
    other: n,
    coins: t
  }
}
yt.loadCurrencyCollection = Sh;

function Ah(e) {
  return t => {
    t.storeCoins(e.coins), e.other ? t.storeDict(e.other) : t.storeBit(0)
  }
}
yt.storeCurrencyCollection = Ah;
Object.defineProperty(In, "__esModule", {
  value: !0
});
In.storeAccountStorage = In.loadAccountStorage = void 0;
const vl = Cn,
  kl = yt;

function Ih(e) {
  return {
    lastTransLt: e.loadUintBig(64),
    balance: (0, kl.loadCurrencyCollection)(e),
    state: (0, vl.loadAccountState)(e)
  }
}
In.loadAccountStorage = Ih;

function Ch(e) {
  return t => {
    t.storeUint(e.lastTransLt, 64), t.store((0, kl.storeCurrencyCollection)(e.balance)), t.store((0, vl.storeAccountState)(e.state))
  }
}
In.storeAccountStorage = Ch;
var Bn = {},
  Pn = {};
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.storeStorageUsed = Pn.loadStorageUsed = void 0;

function Bh(e) {
  return {
    cells: e.loadVarUintBig(3),
    bits: e.loadVarUintBig(3),
    publicCells: e.loadVarUintBig(3)
  }
}
Pn.loadStorageUsed = Bh;

function Ph(e) {
  return t => {
    t.storeVarUint(e.cells, 3), t.storeVarUint(e.bits, 3), t.storeVarUint(e.publicCells, 3)
  }
}
Pn.storeStorageUsed = Ph;
Object.defineProperty(Bn, "__esModule", {
  value: !0
});
Bn.storeStorageInfo = Bn.loadStorageInfo = void 0;
const Sl = Pn;

function Mh(e) {
  return {
    used: (0, Sl.loadStorageUsed)(e),
    lastPaid: e.loadUint(32),
    duePayment: e.loadMaybeCoins()
  }
}
Bn.loadStorageInfo = Mh;

function Th(e) {
  return t => {
    t.store((0, Sl.storeStorageUsed)(e.used)), t.storeUint(e.lastPaid, 32), t.storeMaybeCoins(e.duePayment)
  }
}
Bn.storeStorageInfo = Th;
Object.defineProperty(An, "__esModule", {
  value: !0
});
An.storeAccount = An.loadAccount = void 0;
const Al = In,
  Il = Bn;

function Eh(e) {
  return {
    addr: e.loadAddress(),
    storageStats: (0, Il.loadStorageInfo)(e),
    storage: (0, Al.loadAccountStorage)(e)
  }
}
An.loadAccount = Eh;

function Oh(e) {
  return t => {
    t.storeAddress(e.addr), t.store((0, Il.storeStorageInfo)(e.storageStats)), t.store((0, Al.storeAccountStorage)(e.storage))
  }
}
An.storeAccount = Oh;
var Mn = {};
Object.defineProperty(Mn, "__esModule", {
  value: !0
});
Mn.storeAccountStatus = Mn.loadAccountStatus = void 0;

function xh(e) {
  const t = e.loadUint(2);
  if (t === 0) return "uninitialized";
  if (t === 1) return "frozen";
  if (t === 2) return "active";
  if (t === 3) return "non-existing";
  throw Error("Invalid data")
}
Mn.loadAccountStatus = xh;

function Uh(e) {
  return t => {
    if (e === "uninitialized") t.storeUint(0, 2);
    else if (e === "frozen") t.storeUint(1, 2);
    else if (e === "active") t.storeUint(2, 2);
    else if (e === "non-existing") t.storeUint(3, 2);
    else throw Error("Invalid data");
    return t
  }
}
Mn.storeAccountStatus = Uh;
var en = {};
Object.defineProperty(en, "__esModule", {
  value: !0
});
en.storeAccountStatusChange = en.loadAccountStatusChange = void 0;

function Rh(e) {
  return e.loadBit() ? e.loadBit() ? "deleted" : "frozen" : "unchanged"
}
en.loadAccountStatusChange = Rh;

function jh(e) {
  return t => {
    if (e == "unchanged") t.storeBit(0);
    else if (e === "frozen") t.storeBit(1), t.storeBit(0);
    else if (e === "deleted") t.storeBit(1), t.storeBit(1);
    else throw Error("Invalid account status change")
  }
}
en.storeAccountStatusChange = jh;
var Pt = {},
  Tn = {},
  En = {};
Object.defineProperty(En, "__esModule", {
  value: !0
});
En.storeCommonMessageInfoRelaxed = En.loadCommonMessageInfoRelaxed = void 0;
const Cl = yt;

function Lh(e) {
  if (!e.loadBit()) {
    const o = e.loadBit(),
      a = e.loadBit(),
      s = e.loadBit(),
      c = e.loadMaybeAddress(),
      f = e.loadAddress(),
      u = (0, Cl.loadCurrencyCollection)(e),
      _ = e.loadCoins(),
      B = e.loadCoins(),
      y = e.loadUintBig(64),
      S = e.loadUint(32);
    return {
      type: "internal",
      ihrDisabled: o,
      bounce: a,
      bounced: s,
      src: c,
      dest: f,
      value: u,
      ihrFee: _,
      forwardFee: B,
      createdLt: y,
      createdAt: S
    }
  }
  if (!e.loadBit()) throw Error("External In message is not possible for CommonMessageInfoRelaxed");
  const t = e.loadMaybeAddress(),
    n = e.loadMaybeExternalAddress(),
    r = e.loadUintBig(64),
    i = e.loadUint(32);
  return {
    type: "external-out",
    src: t,
    dest: n,
    createdLt: r,
    createdAt: i
  }
}
En.loadCommonMessageInfoRelaxed = Lh;

function zh(e) {
  return t => {
    if (e.type === "internal") t.storeBit(0), t.storeBit(e.ihrDisabled), t.storeBit(e.bounce), t.storeBit(e.bounced), t.storeAddress(e.src), t.storeAddress(e.dest), t.store((0, Cl.storeCurrencyCollection)(e.value)), t.storeCoins(e.ihrFee), t.storeCoins(e.forwardFee), t.storeUint(e.createdLt, 64), t.storeUint(e.createdAt, 32);
    else if (e.type === "external-out") t.storeBit(1), t.storeBit(1), t.storeAddress(e.src), t.storeAddress(e.dest), t.storeUint(e.createdLt, 64), t.storeUint(e.createdAt, 32);
    else throw new Error("Unknown CommonMessageInfo type")
  }
}
En.storeCommonMessageInfoRelaxed = zh;
Object.defineProperty(Tn, "__esModule", {
  value: !0
});
Tn.storeMessageRelaxed = Tn.loadMessageRelaxed = void 0;
const Nh = qe(),
  Bl = En,
  ka = Et;

function Dh(e) {
  const t = (0, Bl.loadCommonMessageInfoRelaxed)(e);
  let n = null;
  e.loadBit() && (e.loadBit() ? n = (0, ka.loadStateInit)(e.loadRef().beginParse()) : n = (0, ka.loadStateInit)(e));
  const r = e.loadBit() ? e.loadRef() : e.asCell();
  return {
    info: t,
    init: n,
    body: r
  }
}
Tn.loadMessageRelaxed = Dh;

function Fh(e, t) {
  return n => {
    if (n.store((0, Bl.storeCommonMessageInfoRelaxed)(e.info)), e.init) {
      n.storeBit(!0);
      let i = (0, Nh.beginCell)().store((0, ka.storeStateInit)(e.init)),
        o = !1;
      t && t.forceRef ? o = !0 : n.availableBits - 2 >= i.bits ? o = !1 : o = !0, o ? (n.storeBit(!0), n.storeRef(i)) : (n.storeBit(!1), n.storeBuilder(i))
    } else n.storeBit(!1);
    let r = !1;
    t && t.forceRef ? r = !0 : n.availableBits - 1 >= e.body.bits.length && n.refs + e.body.refs.length <= 4 && !e.body.isExotic ? r = !1 : r = !0, r ? (n.storeBit(!0), n.storeRef(e.body)) : (n.storeBit(!1), n.storeBuilder(e.body.asBuilder()))
  }
}
Tn.storeMessageRelaxed = Fh;
var On = {};
Object.defineProperty(On, "__esModule", {
  value: !0
});
On.storeLibRef = On.loadLibRef = void 0;

function Kh(e) {
  return e.loadUint(1) === 0 ? {
    type: "hash",
    libHash: e.loadBuffer(32)
  } : {
    type: "ref",
    library: e.loadRef()
  }
}
On.loadLibRef = Kh;

function $h(e) {
  return t => {
    e.type === "hash" ? (t.storeUint(0, 1), t.storeBuffer(e.libHash)) : (t.storeUint(1, 1), t.storeRef(e.library))
  }
}
On.storeLibRef = $h;
Object.defineProperty(Pt, "__esModule", {
  value: !0
});
Pt.loadOutList = Pt.storeOutList = Pt.loadOutAction = Pt.storeOutAction = void 0;
const Pl = Tn,
  Sa = qe(),
  Ml = yt,
  Tl = On;

function El(e) {
  switch (e.type) {
    case "sendMsg":
      return Hh(e);
    case "setCode":
      return Vh(e);
    case "reserve":
      return Gh(e);
    case "changeLibrary":
      return Wh(e);
    default:
      throw new Error(`Unknown action type ${e.type}`)
  }
}
Pt.storeOutAction = El;
const Ol = 247711853;

function Hh(e) {
  return t => {
    t.storeUint(Ol, 32).storeUint(e.mode, 8).storeRef((0, Sa.beginCell)().store((0, Pl.storeMessageRelaxed)(e.outMsg)).endCell())
  }
}
const xl = 2907562126;

function Vh(e) {
  return t => {
    t.storeUint(xl, 32).storeRef(e.newCode)
  }
}
const Ul = 921090057;

function Gh(e) {
  return t => {
    t.storeUint(Ul, 32).storeUint(e.mode, 8).store((0, Ml.storeCurrencyCollection)(e.currency))
  }
}
const Rl = 653925844;

function Wh(e) {
  return t => {
    t.storeUint(Rl, 32).storeUint(e.mode, 7).store((0, Tl.storeLibRef)(e.libRef))
  }
}

function jl(e) {
  const t = e.loadUint(32);
  if (t === Ol) {
    const n = e.loadUint(8),
      r = (0, Pl.loadMessageRelaxed)(e.loadRef().beginParse());
    return {
      type: "sendMsg",
      mode: n,
      outMsg: r
    }
  }
  if (t === xl) return {
    type: "setCode",
    newCode: e.loadRef()
  };
  if (t === Ul) {
    const n = e.loadUint(8),
      r = (0, Ml.loadCurrencyCollection)(e);
    return {
      type: "reserve",
      mode: n,
      currency: r
    }
  }
  if (t === Rl) {
    const n = e.loadUint(7),
      r = (0, Tl.loadLibRef)(e);
    return {
      type: "changeLibrary",
      mode: n,
      libRef: r
    }
  }
  throw new Error(`Unknown out action tag 0x${t.toString(16)}`)
}
Pt.loadOutAction = jl;

function Yh(e) {
  const t = e.reduce((n, r) => (0, Sa.beginCell)().storeRef(n).store(El(r)).endCell(), (0, Sa.beginCell)().endCell());
  return n => {
    n.storeSlice(t.beginParse())
  }
}
Pt.storeOutList = Yh;

function Xh(e) {
  const t = [];
  for (; e.remainingRefs;) {
    const n = e.loadRef();
    t.push(jl(e)), e = n.beginParse()
  }
  return t.reverse()
}
Pt.loadOutList = Xh;
var xn = {};
Object.defineProperty(xn, "__esModule", {
  value: !0
});
xn.storeCommonMessageInfo = xn.loadCommonMessageInfo = void 0;
const Ll = yt;

function Jh(e) {
  if (!e.loadBit()) {
    const o = e.loadBit(),
      a = e.loadBit(),
      s = e.loadBit(),
      c = e.loadAddress(),
      f = e.loadAddress(),
      u = (0, Ll.loadCurrencyCollection)(e),
      _ = e.loadCoins(),
      B = e.loadCoins(),
      y = e.loadUintBig(64),
      S = e.loadUint(32);
    return {
      type: "internal",
      ihrDisabled: o,
      bounce: a,
      bounced: s,
      src: c,
      dest: f,
      value: u,
      ihrFee: _,
      forwardFee: B,
      createdLt: y,
      createdAt: S
    }
  }
  if (!e.loadBit()) {
    const o = e.loadMaybeExternalAddress(),
      a = e.loadAddress(),
      s = e.loadCoins();
    return {
      type: "external-in",
      src: o,
      dest: a,
      importFee: s
    }
  }
  const t = e.loadAddress(),
    n = e.loadMaybeExternalAddress(),
    r = e.loadUintBig(64),
    i = e.loadUint(32);
  return {
    type: "external-out",
    src: t,
    dest: n,
    createdLt: r,
    createdAt: i
  }
}
xn.loadCommonMessageInfo = Jh;

function Qh(e) {
  return t => {
    if (e.type === "internal") t.storeBit(0), t.storeBit(e.ihrDisabled), t.storeBit(e.bounce), t.storeBit(e.bounced), t.storeAddress(e.src), t.storeAddress(e.dest), t.store((0, Ll.storeCurrencyCollection)(e.value)), t.storeCoins(e.ihrFee), t.storeCoins(e.forwardFee), t.storeUint(e.createdLt, 64), t.storeUint(e.createdAt, 32);
    else if (e.type === "external-in") t.storeBit(1), t.storeBit(0), t.storeAddress(e.src), t.storeAddress(e.dest), t.storeCoins(e.importFee);
    else if (e.type === "external-out") t.storeBit(1), t.storeBit(1), t.storeAddress(e.src), t.storeAddress(e.dest), t.storeUint(e.createdLt, 64), t.storeUint(e.createdAt, 32);
    else throw new Error("Unknown CommonMessageInfo type")
  }
}
xn.storeCommonMessageInfo = Qh;
var Un = {};
Object.defineProperty(Un, "__esModule", {
  value: !0
});
Un.storeComputeSkipReason = Un.loadComputeSkipReason = void 0;

function qh(e) {
  let t = e.loadUint(2);
  if (t === 0) return "no-state";
  if (t === 1) return "bad-state";
  if (t === 2) return "no-gas";
  throw new Error(`Unknown ComputeSkipReason: ${t}`)
}
Un.loadComputeSkipReason = qh;

function Zh(e) {
  return t => {
    if (e === "no-state") t.storeUint(0, 2);
    else if (e === "bad-state") t.storeUint(1, 2);
    else if (e === "no-gas") t.storeUint(2, 2);
    else throw new Error(`Unknown ComputeSkipReason: ${e}`)
  }
}
Un.storeComputeSkipReason = Zh;
var Rn = {};
Object.defineProperty(Rn, "__esModule", {
  value: !0
});
Rn.storeDepthBalanceInfo = Rn.loadDepthBalanceInfo = void 0;
const zl = yt;

function ep(e) {
  return {
    splitDepth: e.loadUint(5),
    balance: (0, zl.loadCurrencyCollection)(e)
  }
}
Rn.loadDepthBalanceInfo = ep;

function tp(e) {
  return t => {
    t.storeUint(e.splitDepth, 5), t.store((0, zl.storeCurrencyCollection)(e.balance))
  }
}
Rn.storeDepthBalanceInfo = tp;
var jn = {};
Object.defineProperty(jn, "__esModule", {
  value: !0
});
jn.storeHashUpdate = jn.loadHashUpdate = void 0;

function np(e) {
  if (e.loadUint(8) !== 114) throw Error("Invalid data");
  const t = e.loadBuffer(32),
    n = e.loadBuffer(32);
  return {
    oldHash: t,
    newHash: n
  }
}
jn.loadHashUpdate = np;

function rp(e) {
  return t => {
    t.storeUint(114, 8), t.storeBuffer(e.oldHash), t.storeBuffer(e.newHash)
  }
}
jn.storeHashUpdate = rp;
var Hr = {};
Object.defineProperty(Hr, "__esModule", {
  value: !0
});
Hr.loadMasterchainStateExtra = void 0;
const na = Vn(),
  ip = yt;

function ap(e) {
  if (e.loadUint(16) !== 52262) throw Error("Invalid data");
  e.loadBit() && e.loadRef();
  let t = e.loadUintBig(256),
    n = na.Dictionary.load(na.Dictionary.Keys.Int(32), na.Dictionary.Values.Cell(), e);
  const r = (0, ip.loadCurrencyCollection)(e);
  return {
    config: n,
    configAddress: t,
    globalBalance: r
  }
}
Hr.loadMasterchainStateExtra = ap;
var Ft = {};
Object.defineProperty(Ft, "__esModule", {
  value: !0
});
Ft.MessageValue = Ft.storeMessage = Ft.loadMessage = void 0;
const Nl = qe(),
  Dl = xn,
  Aa = Et;

function Fl(e) {
  const t = (0, Dl.loadCommonMessageInfo)(e);
  let n = null;
  e.loadBit() && (e.loadBit() ? n = (0, Aa.loadStateInit)(e.loadRef().beginParse()) : n = (0, Aa.loadStateInit)(e));
  const r = e.loadBit() ? e.loadRef() : e.asCell();
  return {
    info: t,
    init: n,
    body: r
  }
}
Ft.loadMessage = Fl;

function Kl(e, t) {
  return n => {
    if (n.store((0, Dl.storeCommonMessageInfo)(e.info)), e.init) {
      n.storeBit(!0);
      let i = (0, Nl.beginCell)().store((0, Aa.storeStateInit)(e.init)),
        o = !1;
      t && t.forceRef ? o = !0 : o = n.availableBits - 2 < i.bits + e.body.bits.length, o ? (n.storeBit(!0), n.storeRef(i)) : (n.storeBit(!1), n.storeBuilder(i))
    } else n.storeBit(!1);
    let r = !1;
    t && t.forceRef ? r = !0 : r = n.availableBits - 1 < e.body.bits.length || n.refs + e.body.refs.length > 4, r ? (n.storeBit(!0), n.storeRef(e.body)) : (n.storeBit(!1), n.storeBuilder(e.body.asBuilder()))
  }
}
Ft.storeMessage = Kl;
Ft.MessageValue = {
  serialize(e, t) {
    t.storeRef((0, Nl.beginCell)().store(Kl(e)))
  },
  parse(e) {
    return Fl(e.loadRef().beginParse())
  }
};
var Fi = {};
Object.defineProperty(Fi, "__esModule", {
  value: !0
});
Fi.SendMode = void 0;
var Fo;
(function(e) {
  e[e.CARRY_ALL_REMAINING_BALANCE = 128] = "CARRY_ALL_REMAINING_BALANCE", e[e.CARRY_ALL_REMAINING_INCOMING_VALUE = 64] = "CARRY_ALL_REMAINING_INCOMING_VALUE", e[e.DESTROY_ACCOUNT_IF_ZERO = 32] = "DESTROY_ACCOUNT_IF_ZERO", e[e.PAY_GAS_SEPARATELY = 1] = "PAY_GAS_SEPARATELY", e[e.IGNORE_ERRORS = 2] = "IGNORE_ERRORS", e[e.NONE = 0] = "NONE"
})(Fo || (Fi.SendMode = Fo = {}));
var Ki = {};
Object.defineProperty(Ki, "__esModule", {
  value: !0
});
Ki.ReserveMode = void 0;
var Ko;
(function(e) {
  e[e.THIS_AMOUNT = 0] = "THIS_AMOUNT", e[e.LEAVE_THIS_AMOUNT = 1] = "LEAVE_THIS_AMOUNT", e[e.AT_MOST_THIS_AMOUNT = 2] = "AT_MOST_THIS_AMOUNT", e[e.LEAVE_MAX_THIS_AMOUNT = 3] = "LEAVE_MAX_THIS_AMOUNT", e[e.BEFORE_BALANCE_PLUS_THIS_AMOUNT = 4] = "BEFORE_BALANCE_PLUS_THIS_AMOUNT", e[e.LEAVE_BBALANCE_PLUS_THIS_AMOUNT = 5] = "LEAVE_BBALANCE_PLUS_THIS_AMOUNT", e[e.BEFORE_BALANCE_MINUS_THIS_AMOUNT = 12] = "BEFORE_BALANCE_MINUS_THIS_AMOUNT", e[e.LEAVE_BEFORE_BALANCE_MINUS_THIS_AMOUNT = 13] = "LEAVE_BEFORE_BALANCE_MINUS_THIS_AMOUNT"
})(Ko || (Ki.ReserveMode = Ko = {}));
var Ln = {};
Object.defineProperty(Ln, "__esModule", {
  value: !0
});
Ln.storeShardAccount = Ln.loadShardAccount = void 0;
const $o = qe(),
  $l = An;

function op(e) {
  let t = e.loadRef(),
    n;
  if (!t.isExotic) {
    let r = t.beginParse();
    r.loadBit() && (n = (0, $l.loadAccount)(r))
  }
  return {
    account: n,
    lastTransactionHash: e.loadUintBig(256),
    lastTransactionLt: e.loadUintBig(64)
  }
}
Ln.loadShardAccount = op;

function sp(e) {
  return t => {
    e.account ? t.storeRef((0, $o.beginCell)().storeBit(!0).store((0, $l.storeAccount)(e.account))) : t.storeRef((0, $o.beginCell)().storeBit(!1)), t.storeUint(e.lastTransactionHash, 256), t.storeUint(e.lastTransactionLt, 64)
  }
}
Ln.storeShardAccount = sp;
var Ka = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.storeShardAccounts = e.loadShardAccounts = e.ShardAccountRefValue = void 0;
  const t = Vn(),
    n = Rn,
    r = Ln;
  e.ShardAccountRefValue = {
    parse: a => {
      let s = (0, n.loadDepthBalanceInfo)(a),
        c = (0, r.loadShardAccount)(a);
      return {
        depthBalanceInfo: s,
        shardAccount: c
      }
    },
    serialize(a, s) {
      s.store((0, n.storeDepthBalanceInfo)(a.depthBalanceInfo)), s.store((0, r.storeShardAccount)(a.shardAccount))
    }
  };

  function i(a) {
    return t.Dictionary.load(t.Dictionary.Keys.BigUint(256), e.ShardAccountRefValue, a)
  }
  e.loadShardAccounts = i;

  function o(a) {
    return s => {
      s.storeDict(a)
    }
  }
  e.storeShardAccounts = o
})(Ka);
var zn = {};
Object.defineProperty(zn, "__esModule", {
  value: !0
});
zn.storeShardIdent = zn.loadShardIdent = void 0;

function lp(e) {
  if (e.loadUint(2) !== 0) throw Error("Invalid data");
  return {
    shardPrefixBits: e.loadUint(6),
    workchainId: e.loadInt(32),
    shardPrefix: e.loadUintBig(64)
  }
}
zn.loadShardIdent = lp;

function cp(e) {
  return t => {
    t.storeUint(0, 2), t.storeUint(e.shardPrefixBits, 6), t.storeInt(e.workchainId, 32), t.storeUint(e.shardPrefix, 64)
  }
}
zn.storeShardIdent = cp;
var $i = {};
Object.defineProperty($i, "__esModule", {
  value: !0
});
$i.loadShardStateUnsplit = void 0;
const up = Hr,
  dp = Ka,
  fp = zn;

function hp(e) {
  if (e.loadUint(32) !== 2418257890) throw Error("Invalid data");
  let t = e.loadInt(32),
    n = (0, fp.loadShardIdent)(e),
    r = e.loadUint(32),
    i = e.loadUint(32),
    o = e.loadUint(32),
    a = e.loadUintBig(64),
    s = e.loadUint(32);
  e.loadRef();
  let c = e.loadBit(),
    f = e.loadRef(),
    u;
  f.isExotic || (u = (0, dp.loadShardAccounts)(f.beginParse())), e.loadRef();
  let _ = e.loadBit(),
    B = null;
  if (_) {
    let y = e.loadRef();
    y.isExotic || (B = (0, up.loadMasterchainStateExtra)(y.beginParse()))
  }
  return {
    globalId: t,
    shardId: n,
    seqno: r,
    vertSeqNo: i,
    genUtime: o,
    genLt: a,
    minRefMcSeqno: s,
    beforeSplit: c,
    accounts: u,
    extras: B
  }
}
$i.loadShardStateUnsplit = hp;
var Nn = {};
Object.defineProperty(Nn, "__esModule", {
  value: !0
});
Nn.storeSplitMergeInfo = Nn.loadSplitMergeInfo = void 0;

function pp(e) {
  let t = e.loadUint(6),
    n = e.loadUint(6),
    r = e.loadUintBig(256),
    i = e.loadUintBig(256);
  return {
    currentShardPrefixLength: t,
    accountSplitDepth: n,
    thisAddress: r,
    siblingAddress: i
  }
}
Nn.loadSplitMergeInfo = pp;

function gp(e) {
  return t => {
    t.storeUint(e.currentShardPrefixLength, 6), t.storeUint(e.accountSplitDepth, 6), t.storeUint(e.thisAddress, 256), t.storeUint(e.siblingAddress, 256)
  }
}
Nn.storeSplitMergeInfo = gp;
var tn = {};
Object.defineProperty(tn, "__esModule", {
  value: !0
});
tn.storeStorageUsedShort = tn.loadStorageUsedShort = void 0;

function mp(e) {
  let t = e.loadVarUintBig(3),
    n = e.loadVarUintBig(3);
  return {
    cells: t,
    bits: n
  }
}
tn.loadStorageUsedShort = mp;

function bp(e) {
  return t => {
    t.storeVarUint(e.cells, 3), t.storeVarUint(e.bits, 3)
  }
}
tn.storeStorageUsedShort = bp;
var hn = {},
  pn = {},
  Dn = {};
Object.defineProperty(Dn, "__esModule", {
  value: !0
});
Dn.storeTransactionActionPhase = Dn.loadTransactionActionPhase = void 0;
const Hl = en,
  Vl = tn;

function yp(e) {
  let t = e.loadBit(),
    n = e.loadBit(),
    r = e.loadBit(),
    i = (0, Hl.loadAccountStatusChange)(e),
    o = e.loadBit() ? e.loadCoins() : void 0,
    a = e.loadBit() ? e.loadCoins() : void 0,
    s = e.loadInt(32),
    c = e.loadBit() ? e.loadInt(32) : void 0,
    f = e.loadUint(16),
    u = e.loadUint(16),
    _ = e.loadUint(16),
    B = e.loadUint(16),
    y = e.loadUintBig(256),
    S = (0, Vl.loadStorageUsedShort)(e);
  return {
    success: t,
    valid: n,
    noFunds: r,
    statusChange: i,
    totalFwdFees: o,
    totalActionFees: a,
    resultCode: s,
    resultArg: c,
    totalActions: f,
    specActions: u,
    skippedActions: _,
    messagesCreated: B,
    actionListHash: y,
    totalMessageSize: S
  }
}
Dn.loadTransactionActionPhase = yp;

function _p(e) {
  return t => {
    t.storeBit(e.success), t.storeBit(e.valid), t.storeBit(e.noFunds), t.store((0, Hl.storeAccountStatusChange)(e.statusChange)), t.storeMaybeCoins(e.totalFwdFees), t.storeMaybeCoins(e.totalActionFees), t.storeInt(e.resultCode, 32), t.storeMaybeInt(e.resultArg, 32), t.storeUint(e.totalActions, 16), t.storeUint(e.specActions, 16), t.storeUint(e.skippedActions, 16), t.storeUint(e.messagesCreated, 16), t.storeUint(e.actionListHash, 256), t.store((0, Vl.storeStorageUsedShort)(e.totalMessageSize))
  }
}
Dn.storeTransactionActionPhase = _p;
var Fn = {};
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
Fn.storeTransactionBouncePhase = Fn.loadTransactionBouncePhase = void 0;
const ii = tn;

function wp(e) {
  if (e.loadBit()) {
    let t = (0, ii.loadStorageUsedShort)(e),
      n = e.loadCoins(),
      r = e.loadCoins();
    return {
      type: "ok",
      messageSize: t,
      messageFees: n,
      forwardFees: r
    }
  }
  if (e.loadBit()) {
    let t = (0, ii.loadStorageUsedShort)(e),
      n = e.loadCoins();
    return {
      type: "no-funds",
      messageSize: t,
      requiredForwardFees: n
    }
  }
  return {
    type: "negative-funds"
  }
}
Fn.loadTransactionBouncePhase = wp;

function vp(e) {
  return t => {
    if (e.type === "ok") t.storeBit(!0), t.store((0, ii.storeStorageUsedShort)(e.messageSize)), t.storeCoins(e.messageFees), t.storeCoins(e.forwardFees);
    else if (e.type === "negative-funds") t.storeBit(!1), t.storeBit(!1);
    else if (e.type === "no-funds") t.storeBit(!1), t.storeBit(!0), t.store((0, ii.storeStorageUsedShort)(e.messageSize)), t.storeCoins(e.requiredForwardFees);
    else throw new Error("Invalid TransactionBouncePhase type")
  }
}
Fn.storeTransactionBouncePhase = vp;
var Kn = {};
Object.defineProperty(Kn, "__esModule", {
  value: !0
});
Kn.storeTransactionComputePhase = Kn.loadTransactionComputePhase = void 0;
const kp = qe(),
  Gl = Un;

function Sp(e) {
  if (!e.loadBit()) return {
    type: "skipped",
    reason: (0, Gl.loadComputeSkipReason)(e)
  };
  let t = e.loadBit(),
    n = e.loadBit(),
    r = e.loadBit(),
    i = e.loadCoins();
  const o = e.loadRef().beginParse();
  let a = o.loadVarUintBig(3),
    s = o.loadVarUintBig(3),
    c = o.loadBit() ? o.loadVarUintBig(2) : void 0,
    f = o.loadUint(8),
    u = o.loadInt(32),
    _ = o.loadBit() ? o.loadInt(32) : void 0,
    B = o.loadUint(32),
    y = o.loadUintBig(256),
    S = o.loadUintBig(256);
  return {
    type: "vm",
    success: t,
    messageStateUsed: n,
    accountActivated: r,
    gasFees: i,
    gasUsed: a,
    gasLimit: s,
    gasCredit: c,
    mode: f,
    exitCode: u,
    exitArg: _,
    vmSteps: B,
    vmInitStateHash: y,
    vmFinalStateHash: S
  }
}
Kn.loadTransactionComputePhase = Sp;

function Ap(e) {
  return t => {
    if (e.type === "skipped") {
      t.storeBit(0), t.store((0, Gl.storeComputeSkipReason)(e.reason));
      return
    }
    t.storeBit(1), t.storeBit(e.success), t.storeBit(e.messageStateUsed), t.storeBit(e.accountActivated), t.storeCoins(e.gasFees), t.storeRef((0, kp.beginCell)().storeVarUint(e.gasUsed, 3).storeVarUint(e.gasLimit, 3).store(n => e.gasCredit !== void 0 && e.gasCredit !== null ? n.storeBit(1).storeVarUint(e.gasCredit, 2) : n.storeBit(0)).storeUint(e.mode, 8).storeInt(e.exitCode, 32).store(n => e.exitArg !== void 0 && e.exitArg !== null ? n.storeBit(1).storeInt(e.exitArg, 32) : n.storeBit(0)).storeUint(e.vmSteps, 32).storeUint(e.vmInitStateHash, 256).storeUint(e.vmFinalStateHash, 256).endCell())
  }
}
Kn.storeTransactionComputePhase = Ap;
var $n = {};
Object.defineProperty($n, "__esModule", {
  value: !0
});
$n.storeTransactionCreditPhase = $n.loadTransactionCreditPhase = void 0;
const Wl = yt;

function Ip(e) {
  const t = e.loadBit() ? e.loadCoins() : void 0,
    n = (0, Wl.loadCurrencyCollection)(e);
  return {
    dueFeesColelcted: t,
    credit: n
  }
}
$n.loadTransactionCreditPhase = Ip;

function Cp(e) {
  return t => {
    e.dueFeesColelcted === null || e.dueFeesColelcted === void 0 ? t.storeBit(!1) : (t.storeBit(!0), t.storeCoins(e.dueFeesColelcted)), t.store((0, Wl.storeCurrencyCollection)(e.credit))
  }
}
$n.storeTransactionCreditPhase = Cp;
var Hn = {};
Object.defineProperty(Hn, "__esModule", {
  value: !0
});
Hn.storeTransactionsStoragePhase = Hn.loadTransactionStoragePhase = void 0;
const Yl = en;

function Bp(e) {
  const t = e.loadCoins();
  let n;
  e.loadBit() && (n = e.loadCoins());
  const r = (0, Yl.loadAccountStatusChange)(e);
  return {
    storageFeesCollected: t,
    storageFeesDue: n,
    statusChange: r
  }
}
Hn.loadTransactionStoragePhase = Bp;

function Pp(e) {
  return t => {
    t.storeCoins(e.storageFeesCollected), e.storageFeesDue === null || e.storageFeesDue === void 0 ? t.storeBit(!1) : (t.storeBit(!0), t.storeCoins(e.storageFeesDue)), t.store((0, Yl.storeAccountStatusChange)(e.statusChange))
  }
}
Hn.storeTransactionsStoragePhase = Pp;
var Ho;

function Xl() {
  if (Ho) return pn;
  Ho = 1, Object.defineProperty(pn, "__esModule", {
    value: !0
  }), pn.storeTransactionDescription = pn.loadTransactionDescription = void 0;
  const e = qe(),
    t = Nn,
    n = Jl(),
    r = Dn,
    i = Fn,
    o = Kn,
    a = $n,
    s = Hn;

  function c(u) {
    let _ = u.loadUint(4);
    if (_ === 0) {
      const B = u.loadBit();
      let y;
      u.loadBit() && (y = (0, s.loadTransactionStoragePhase)(u));
      let S;
      u.loadBit() && (S = (0, a.loadTransactionCreditPhase)(u));
      let m = (0, o.loadTransactionComputePhase)(u),
        v;
      u.loadBit() && (v = (0, r.loadTransactionActionPhase)(u.loadRef().beginParse()));
      let x = u.loadBit(),
        M;
      u.loadBit() && (M = (0, i.loadTransactionBouncePhase)(u));
      const p = u.loadBit();
      return {
        type: "generic",
        creditFirst: B,
        storagePhase: y,
        creditPhase: S,
        computePhase: m,
        actionPhase: v,
        bouncePhase: M,
        aborted: x,
        destroyed: p
      }
    }
    if (_ === 1) return {
      type: "storage",
      storagePhase: (0, s.loadTransactionStoragePhase)(u)
    };
    if (_ === 2 || _ === 3) {
      const B = _ === 3;
      let y = (0, s.loadTransactionStoragePhase)(u),
        S = (0, o.loadTransactionComputePhase)(u),
        m;
      u.loadBit() && (m = (0, r.loadTransactionActionPhase)(u.loadRef().beginParse()));
      const v = u.loadBit(),
        x = u.loadBit();
      return {
        type: "tick-tock",
        isTock: B,
        storagePhase: y,
        computePhase: S,
        actionPhase: m,
        aborted: v,
        destroyed: x
      }
    }
    if (_ === 4) {
      let B = (0, t.loadSplitMergeInfo)(u),
        y;
      u.loadBit() && (y = (0, s.loadTransactionStoragePhase)(u));
      let S = (0, o.loadTransactionComputePhase)(u),
        m;
      u.loadBit() && (m = (0, r.loadTransactionActionPhase)(u.loadRef().beginParse()));
      const v = u.loadBit(),
        x = u.loadBit();
      return {
        type: "split-prepare",
        splitInfo: B,
        storagePhase: y,
        computePhase: S,
        actionPhase: m,
        aborted: v,
        destroyed: x
      }
    }
    if (_ === 5) {
      let B = (0, t.loadSplitMergeInfo)(u),
        y = (0, n.loadTransaction)(u.loadRef().beginParse());
      const S = u.loadBit();
      return {
        type: "split-install",
        splitInfo: B,
        prepareTransaction: y,
        installed: S
      }
    }
    throw Error(`Unsupported transaction description type ${_}`)
  }
  pn.loadTransactionDescription = c;

  function f(u) {
    return _ => {
      if (u.type === "generic") _.storeUint(0, 4), _.storeBit(u.creditFirst), u.storagePhase ? (_.storeBit(!0), _.store((0, s.storeTransactionsStoragePhase)(u.storagePhase))) : _.storeBit(!1), u.creditPhase ? (_.storeBit(!0), _.store((0, a.storeTransactionCreditPhase)(u.creditPhase))) : _.storeBit(!1), _.store((0, o.storeTransactionComputePhase)(u.computePhase)), u.actionPhase ? (_.storeBit(!0), _.storeRef((0, e.beginCell)().store((0, r.storeTransactionActionPhase)(u.actionPhase)))) : _.storeBit(!1), _.storeBit(u.aborted), u.bouncePhase ? (_.storeBit(!0), _.store((0, i.storeTransactionBouncePhase)(u.bouncePhase))) : _.storeBit(!1), _.storeBit(u.destroyed);
      else if (u.type === "storage") _.storeUint(1, 4), _.store((0, s.storeTransactionsStoragePhase)(u.storagePhase));
      else if (u.type === "tick-tock") _.storeUint(u.isTock ? 3 : 2, 4), _.store((0, s.storeTransactionsStoragePhase)(u.storagePhase)), _.store((0, o.storeTransactionComputePhase)(u.computePhase)), u.actionPhase ? (_.storeBit(!0), _.storeRef((0, e.beginCell)().store((0, r.storeTransactionActionPhase)(u.actionPhase)))) : _.storeBit(!1), _.storeBit(u.aborted), _.storeBit(u.destroyed);
      else if (u.type === "split-prepare") _.storeUint(4, 4), _.store((0, t.storeSplitMergeInfo)(u.splitInfo)), u.storagePhase ? (_.storeBit(!0), _.store((0, s.storeTransactionsStoragePhase)(u.storagePhase))) : _.storeBit(!1), _.store((0, o.storeTransactionComputePhase)(u.computePhase)), u.actionPhase ? (_.storeBit(!0), _.store((0, r.storeTransactionActionPhase)(u.actionPhase))) : _.storeBit(!1), _.storeBit(u.aborted), _.storeBit(u.destroyed);
      else if (u.type === "split-install") _.storeUint(5, 4), _.store((0, t.storeSplitMergeInfo)(u.splitInfo)), _.storeRef((0, e.beginCell)().store((0, n.storeTransaction)(u.prepareTransaction))), _.storeBit(u.installed);
      else throw Error(`Unsupported transaction description type ${u.type}`)
    }
  }
  return pn.storeTransactionDescription = f, pn
}
var Vo;

function Jl() {
  if (Vo) return hn;
  Vo = 1, Object.defineProperty(hn, "__esModule", {
    value: !0
  }), hn.storeTransaction = hn.loadTransaction = void 0;
  const e = qe(),
    t = Vn(),
    n = Mn,
    r = yt,
    i = jn,
    o = Ft,
    a = Xl();

  function s(f) {
    let u = f.asCell();
    if (f.loadUint(4) !== 7) throw Error("Invalid data");
    let _ = f.loadUintBig(256),
      B = f.loadUintBig(64),
      y = f.loadUintBig(256),
      S = f.loadUintBig(64),
      m = f.loadUint(32),
      v = f.loadUint(15),
      x = (0, n.loadAccountStatus)(f),
      M = (0, n.loadAccountStatus)(f),
      h = f.loadRef().beginParse(),
      P = h.loadBit() ? (0, o.loadMessage)(h.loadRef().beginParse()) : void 0,
      k = h.loadDict(t.Dictionary.Keys.Uint(15), o.MessageValue);
    h.endParse();
    let T = (0, r.loadCurrencyCollection)(f),
      J = (0, i.loadHashUpdate)(f.loadRef().beginParse()),
      ne = (0, a.loadTransactionDescription)(f.loadRef().beginParse());
    return {
      address: _,
      lt: B,
      prevTransactionHash: y,
      prevTransactionLt: S,
      now: m,
      outMessagesCount: v,
      oldStatus: x,
      endStatus: M,
      inMessage: P,
      outMessages: k,
      totalFees: T,
      stateUpdate: J,
      description: ne,
      raw: u,
      hash: () => u.hash()
    }
  }
  hn.loadTransaction = s;

  function c(f) {
    return u => {
      u.storeUint(7, 4), u.storeUint(f.address, 256), u.storeUint(f.lt, 64), u.storeUint(f.prevTransactionHash, 256), u.storeUint(f.prevTransactionLt, 64), u.storeUint(f.now, 32), u.storeUint(f.outMessagesCount, 15), u.store((0, n.storeAccountStatus)(f.oldStatus)), u.store((0, n.storeAccountStatus)(f.endStatus));
      let _ = (0, e.beginCell)();
      f.inMessage ? (_.storeBit(!0), _.storeRef((0, e.beginCell)().store((0, o.storeMessage)(f.inMessage)))) : _.storeBit(!1), _.storeDict(f.outMessages), u.storeRef(_), u.store((0, r.storeCurrencyCollection)(f.totalFees)), u.storeRef((0, e.beginCell)().store((0, i.storeHashUpdate)(f.stateUpdate))), u.storeRef((0, e.beginCell)().store((0, a.storeTransactionDescription)(f.description)))
    }
  }
  return hn.storeTransaction = c, hn
}(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.storeSplitMergeInfo = e.loadSplitMergeInfo = e.storeLibRef = e.loadLibRef = e.storeSimpleLibrary = e.loadSimpleLibrary = e.loadShardStateUnsplit = e.storeShardIdent = e.loadShardIdent = e.storeShardAccounts = e.loadShardAccounts = e.ShardAccountRefValue = e.storeShardAccount = e.loadShardAccount = e.ReserveMode = e.SendMode = e.storeMessageRelaxed = e.loadMessageRelaxed = e.storeMessage = e.loadMessage = e.loadMasterchainStateExtra = e.storeHashUpdate = e.loadHashUpdate = e.storeDepthBalanceInfo = e.loadDepthBalanceInfo = e.storeCurrencyCollection = e.loadCurrencyCollection = e.storeComputeSkipReason = e.loadComputeSkipReason = e.storeCommonMessageInfoRelaxed = e.loadCommonMessageInfoRelaxed = e.storeCommonMessageInfo = e.loadCommonMessageInfo = e.storeOutList = e.loadOutList = e.storeOutAction = e.loadOutAction = e.storeAccountStorage = e.loadAccountStorage = e.storeAccountStatusChange = e.loadAccountStatusChange = e.storeAccountStatus = e.loadAccountStatus = e.storeAccountState = e.loadAccountState = e.storeAccount = e.loadAccount = e.comment = e.external = e.internal = void 0, e.storeTransactionsStoragePhase = e.loadTransactionStoragePhase = e.storeTransactionDescription = e.loadTransactionDescription = e.storeTransactionCreditPhase = e.loadTransactionCreditPhase = e.storeTransactionComputePhase = e.loadTransactionComputePhase = e.storeTransactionBouncePhase = e.loadTransactionBouncePhase = e.storeTransactionActionPhase = e.loadTransactionActionPhase = e.storeTransaction = e.loadTransaction = e.storeTickTock = e.loadTickTock = e.storeStorageUsedShort = e.loadStorageUsedShort = e.storeStorageUsed = e.loadStorageUsed = e.storeStorageInfo = e.loadStorageInfo = e.storeStateInit = e.loadStateInit = void 0;
  var t = qt;
  Object.defineProperty(e, "internal", {
    enumerable: !0,
    get: function() {
      return t.internal
    }
  }), Object.defineProperty(e, "external", {
    enumerable: !0,
    get: function() {
      return t.external
    }
  }), Object.defineProperty(e, "comment", {
    enumerable: !0,
    get: function() {
      return t.comment
    }
  });
  var n = An;
  Object.defineProperty(e, "loadAccount", {
    enumerable: !0,
    get: function() {
      return n.loadAccount
    }
  }), Object.defineProperty(e, "storeAccount", {
    enumerable: !0,
    get: function() {
      return n.storeAccount
    }
  });
  var r = Cn;
  Object.defineProperty(e, "loadAccountState", {
    enumerable: !0,
    get: function() {
      return r.loadAccountState
    }
  }), Object.defineProperty(e, "storeAccountState", {
    enumerable: !0,
    get: function() {
      return r.storeAccountState
    }
  });
  var i = Mn;
  Object.defineProperty(e, "loadAccountStatus", {
    enumerable: !0,
    get: function() {
      return i.loadAccountStatus
    }
  }), Object.defineProperty(e, "storeAccountStatus", {
    enumerable: !0,
    get: function() {
      return i.storeAccountStatus
    }
  });
  var o = en;
  Object.defineProperty(e, "loadAccountStatusChange", {
    enumerable: !0,
    get: function() {
      return o.loadAccountStatusChange
    }
  }), Object.defineProperty(e, "storeAccountStatusChange", {
    enumerable: !0,
    get: function() {
      return o.storeAccountStatusChange
    }
  });
  var a = In;
  Object.defineProperty(e, "loadAccountStorage", {
    enumerable: !0,
    get: function() {
      return a.loadAccountStorage
    }
  }), Object.defineProperty(e, "storeAccountStorage", {
    enumerable: !0,
    get: function() {
      return a.storeAccountStorage
    }
  });
  var s = Pt;
  Object.defineProperty(e, "loadOutAction", {
    enumerable: !0,
    get: function() {
      return s.loadOutAction
    }
  }), Object.defineProperty(e, "storeOutAction", {
    enumerable: !0,
    get: function() {
      return s.storeOutAction
    }
  }), Object.defineProperty(e, "loadOutList", {
    enumerable: !0,
    get: function() {
      return s.loadOutList
    }
  }), Object.defineProperty(e, "storeOutList", {
    enumerable: !0,
    get: function() {
      return s.storeOutList
    }
  });
  var c = xn;
  Object.defineProperty(e, "loadCommonMessageInfo", {
    enumerable: !0,
    get: function() {
      return c.loadCommonMessageInfo
    }
  }), Object.defineProperty(e, "storeCommonMessageInfo", {
    enumerable: !0,
    get: function() {
      return c.storeCommonMessageInfo
    }
  });
  var f = En;
  Object.defineProperty(e, "loadCommonMessageInfoRelaxed", {
    enumerable: !0,
    get: function() {
      return f.loadCommonMessageInfoRelaxed
    }
  }), Object.defineProperty(e, "storeCommonMessageInfoRelaxed", {
    enumerable: !0,
    get: function() {
      return f.storeCommonMessageInfoRelaxed
    }
  });
  var u = Un;
  Object.defineProperty(e, "loadComputeSkipReason", {
    enumerable: !0,
    get: function() {
      return u.loadComputeSkipReason
    }
  }), Object.defineProperty(e, "storeComputeSkipReason", {
    enumerable: !0,
    get: function() {
      return u.storeComputeSkipReason
    }
  });
  var _ = yt;
  Object.defineProperty(e, "loadCurrencyCollection", {
    enumerable: !0,
    get: function() {
      return _.loadCurrencyCollection
    }
  }), Object.defineProperty(e, "storeCurrencyCollection", {
    enumerable: !0,
    get: function() {
      return _.storeCurrencyCollection
    }
  });
  var B = Rn;
  Object.defineProperty(e, "loadDepthBalanceInfo", {
    enumerable: !0,
    get: function() {
      return B.loadDepthBalanceInfo
    }
  }), Object.defineProperty(e, "storeDepthBalanceInfo", {
    enumerable: !0,
    get: function() {
      return B.storeDepthBalanceInfo
    }
  });
  var y = jn;
  Object.defineProperty(e, "loadHashUpdate", {
    enumerable: !0,
    get: function() {
      return y.loadHashUpdate
    }
  }), Object.defineProperty(e, "storeHashUpdate", {
    enumerable: !0,
    get: function() {
      return y.storeHashUpdate
    }
  });
  var S = Hr;
  Object.defineProperty(e, "loadMasterchainStateExtra", {
    enumerable: !0,
    get: function() {
      return S.loadMasterchainStateExtra
    }
  });
  var m = Ft;
  Object.defineProperty(e, "loadMessage", {
    enumerable: !0,
    get: function() {
      return m.loadMessage
    }
  }), Object.defineProperty(e, "storeMessage", {
    enumerable: !0,
    get: function() {
      return m.storeMessage
    }
  });
  var v = Tn;
  Object.defineProperty(e, "loadMessageRelaxed", {
    enumerable: !0,
    get: function() {
      return v.loadMessageRelaxed
    }
  }), Object.defineProperty(e, "storeMessageRelaxed", {
    enumerable: !0,
    get: function() {
      return v.storeMessageRelaxed
    }
  });
  var x = Fi;
  Object.defineProperty(e, "SendMode", {
    enumerable: !0,
    get: function() {
      return x.SendMode
    }
  });
  var M = Ki;
  Object.defineProperty(e, "ReserveMode", {
    enumerable: !0,
    get: function() {
      return M.ReserveMode
    }
  });
  var p = Ln;
  Object.defineProperty(e, "loadShardAccount", {
    enumerable: !0,
    get: function() {
      return p.loadShardAccount
    }
  }), Object.defineProperty(e, "storeShardAccount", {
    enumerable: !0,
    get: function() {
      return p.storeShardAccount
    }
  });
  var h = Ka;
  Object.defineProperty(e, "ShardAccountRefValue", {
    enumerable: !0,
    get: function() {
      return h.ShardAccountRefValue
    }
  }), Object.defineProperty(e, "loadShardAccounts", {
    enumerable: !0,
    get: function() {
      return h.loadShardAccounts
    }
  }), Object.defineProperty(e, "storeShardAccounts", {
    enumerable: !0,
    get: function() {
      return h.storeShardAccounts
    }
  });
  var P = zn;
  Object.defineProperty(e, "loadShardIdent", {
    enumerable: !0,
    get: function() {
      return P.loadShardIdent
    }
  }), Object.defineProperty(e, "storeShardIdent", {
    enumerable: !0,
    get: function() {
      return P.storeShardIdent
    }
  });
  var k = $i;
  Object.defineProperty(e, "loadShardStateUnsplit", {
    enumerable: !0,
    get: function() {
      return k.loadShardStateUnsplit
    }
  });
  var T = Dt;
  Object.defineProperty(e, "loadSimpleLibrary", {
    enumerable: !0,
    get: function() {
      return T.loadSimpleLibrary
    }
  }), Object.defineProperty(e, "storeSimpleLibrary", {
    enumerable: !0,
    get: function() {
      return T.storeSimpleLibrary
    }
  });
  var J = On;
  Object.defineProperty(e, "loadLibRef", {
    enumerable: !0,
    get: function() {
      return J.loadLibRef
    }
  }), Object.defineProperty(e, "storeLibRef", {
    enumerable: !0,
    get: function() {
      return J.storeLibRef
    }
  });
  var ne = Nn;
  Object.defineProperty(e, "loadSplitMergeInfo", {
    enumerable: !0,
    get: function() {
      return ne.loadSplitMergeInfo
    }
  }), Object.defineProperty(e, "storeSplitMergeInfo", {
    enumerable: !0,
    get: function() {
      return ne.storeSplitMergeInfo
    }
  });
  var q = Et;
  Object.defineProperty(e, "loadStateInit", {
    enumerable: !0,
    get: function() {
      return q.loadStateInit
    }
  }), Object.defineProperty(e, "storeStateInit", {
    enumerable: !0,
    get: function() {
      return q.storeStateInit
    }
  });
  var we = Bn;
  Object.defineProperty(e, "loadStorageInfo", {
    enumerable: !0,
    get: function() {
      return we.loadStorageInfo
    }
  }), Object.defineProperty(e, "storeStorageInfo", {
    enumerable: !0,
    get: function() {
      return we.storeStorageInfo
    }
  });
  var ke = Pn;
  Object.defineProperty(e, "loadStorageUsed", {
    enumerable: !0,
    get: function() {
      return ke.loadStorageUsed
    }
  }), Object.defineProperty(e, "storeStorageUsed", {
    enumerable: !0,
    get: function() {
      return ke.storeStorageUsed
    }
  });
  var V = tn;
  Object.defineProperty(e, "loadStorageUsedShort", {
    enumerable: !0,
    get: function() {
      return V.loadStorageUsedShort
    }
  }), Object.defineProperty(e, "storeStorageUsedShort", {
    enumerable: !0,
    get: function() {
      return V.storeStorageUsedShort
    }
  });
  var z = kn;
  Object.defineProperty(e, "loadTickTock", {
    enumerable: !0,
    get: function() {
      return z.loadTickTock
    }
  }), Object.defineProperty(e, "storeTickTock", {
    enumerable: !0,
    get: function() {
      return z.storeTickTock
    }
  });
  var ie = Jl();
  Object.defineProperty(e, "loadTransaction", {
    enumerable: !0,
    get: function() {
      return ie.loadTransaction
    }
  }), Object.defineProperty(e, "storeTransaction", {
    enumerable: !0,
    get: function() {
      return ie.storeTransaction
    }
  });
  var ve = Dn;
  Object.defineProperty(e, "loadTransactionActionPhase", {
    enumerable: !0,
    get: function() {
      return ve.loadTransactionActionPhase
    }
  }), Object.defineProperty(e, "storeTransactionActionPhase", {
    enumerable: !0,
    get: function() {
      return ve.storeTransactionActionPhase
    }
  });
  var Ce = Fn;
  Object.defineProperty(e, "loadTransactionBouncePhase", {
    enumerable: !0,
    get: function() {
      return Ce.loadTransactionBouncePhase
    }
  }), Object.defineProperty(e, "storeTransactionBouncePhase", {
    enumerable: !0,
    get: function() {
      return Ce.storeTransactionBouncePhase
    }
  });
  var Ee = Kn;
  Object.defineProperty(e, "loadTransactionComputePhase", {
    enumerable: !0,
    get: function() {
      return Ee.loadTransactionComputePhase
    }
  }), Object.defineProperty(e, "storeTransactionComputePhase", {
    enumerable: !0,
    get: function() {
      return Ee.storeTransactionComputePhase
    }
  });
  var F = $n;
  Object.defineProperty(e, "loadTransactionCreditPhase", {
    enumerable: !0,
    get: function() {
      return F.loadTransactionCreditPhase
    }
  }), Object.defineProperty(e, "storeTransactionCreditPhase", {
    enumerable: !0,
    get: function() {
      return F.storeTransactionCreditPhase
    }
  });
  var Ve = Xl();
  Object.defineProperty(e, "loadTransactionDescription", {
    enumerable: !0,
    get: function() {
      return Ve.loadTransactionDescription
    }
  }), Object.defineProperty(e, "storeTransactionDescription", {
    enumerable: !0,
    get: function() {
      return Ve.storeTransactionDescription
    }
  });
  var Fe = Hn;
  Object.defineProperty(e, "loadTransactionStoragePhase", {
    enumerable: !0,
    get: function() {
      return Fe.loadTransactionStoragePhase
    }
  }), Object.defineProperty(e, "storeTransactionsStoragePhase", {
    enumerable: !0,
    get: function() {
      return Fe.storeTransactionsStoragePhase
    }
  })
})(bl);
var Hi = {};
Object.defineProperty(Hi, "__esModule", {
  value: !0
});
Hi.openContract = void 0;
const Mp = kt,
  Go = Gn();

function Tp(e, t) {
  let n, r = null;
  if (!Mp.Address.isAddress(e.address)) throw Error("Invalid address");
  if (n = e.address, e.init) {
    if (!(e.init.code instanceof Go.Cell)) throw Error("Invalid init.code");
    if (!(e.init.data instanceof Go.Cell)) throw Error("Invalid init.data");
    r = e.init
  }
  let i = t({
    address: n,
    init: r
  });
  return new Proxy(e, {
    get(o, a) {
      const s = o[a];
      return typeof a == "string" && (a.startsWith("get") || a.startsWith("send") || a.startsWith("is")) && typeof s == "function" ? (...c) => s.apply(o, [i, ...c]) : s
    }
  })
}
Hi.openContract = Tp;
var Vi = {};
Object.defineProperty(Vi, "__esModule", {
  value: !0
});
Vi.ComputeError = void 0;
class $a extends Error {
  constructor(t, n, r) {
    super(t), this.exitCode = n, this.debugLogs = r && r.debugLogs ? r.debugLogs : null, this.logs = r && r.logs ? r.logs : null, Object.setPrototypeOf(this, $a.prototype)
  }
}
Vi.ComputeError = $a;
var Gi = {};
Object.defineProperty(Gi, "__esModule", {
  value: !0
});
Gi.getMethodId = void 0;
const Ep = new Int16Array([0, 4129, 8258, 12387, 16516, 20645, 24774, 28903, 33032, 37161, 41290, 45419, 49548, 53677, 57806, 61935, 4657, 528, 12915, 8786, 21173, 17044, 29431, 25302, 37689, 33560, 45947, 41818, 54205, 50076, 62463, 58334, 9314, 13379, 1056, 5121, 25830, 29895, 17572, 21637, 42346, 46411, 34088, 38153, 58862, 62927, 50604, 54669, 13907, 9842, 5649, 1584, 30423, 26358, 22165, 18100, 46939, 42874, 38681, 34616, 63455, 59390, 55197, 51132, 18628, 22757, 26758, 30887, 2112, 6241, 10242, 14371, 51660, 55789, 59790, 63919, 35144, 39273, 43274, 47403, 23285, 19156, 31415, 27286, 6769, 2640, 14899, 10770, 56317, 52188, 64447, 60318, 39801, 35672, 47931, 43802, 27814, 31879, 19684, 23749, 11298, 15363, 3168, 7233, 60846, 64911, 52716, 56781, 44330, 48395, 36200, 40265, 32407, 28342, 24277, 20212, 15891, 11826, 7761, 3696, 65439, 61374, 57309, 53244, 48923, 44858, 40793, 36728, 37256, 33193, 45514, 41451, 53516, 49453, 61774, 57711, 4224, 161, 12482, 8419, 20484, 16421, 28742, 24679, 33721, 37784, 41979, 46042, 49981, 54044, 58239, 62302, 689, 4752, 8947, 13010, 16949, 21012, 25207, 29270, 46570, 42443, 38312, 34185, 62830, 58703, 54572, 50445, 13538, 9411, 5280, 1153, 29798, 25671, 21540, 17413, 42971, 47098, 34713, 38840, 59231, 63358, 50973, 55100, 9939, 14066, 1681, 5808, 26199, 30326, 17941, 22068, 55628, 51565, 63758, 59695, 39368, 35305, 47498, 43435, 22596, 18533, 30726, 26663, 6336, 2273, 14466, 10403, 52093, 56156, 60223, 64286, 35833, 39896, 43963, 48026, 19061, 23124, 27191, 31254, 2801, 6864, 10931, 14994, 64814, 60687, 56684, 52557, 48554, 44427, 40424, 36297, 31782, 27655, 23652, 19525, 15522, 11395, 7392, 3265, 61215, 65342, 53085, 57212, 44955, 49082, 36825, 40952, 28183, 32310, 20053, 24180, 11923, 16050, 3793, 7920]);

function Op(e) {
  e instanceof Buffer || (e = Buffer.from(e));
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t = (Ep[(t >> 8 ^ r) & 255] ^ t << 8) & 65535
  }
  return t
}

function xp(e) {
  return Op(e) & 65535 | 65536
}
Gi.getMethodId = xp;
var ir = {};
Object.defineProperty(ir, "__esModule", {
  value: !0
});
ir.safeSignVerify = ir.safeSign = void 0;
const Ha = Fa(),
  Up = 8,
  Rp = 64;

function Ql(e, t) {
  let n = Buffer.from(t);
  if (n.length > Rp) throw Error("Seed can	 be longer than 64 bytes");
  if (n.length < Up) throw Error("Seed must be at least 8 bytes");
  return (0, Ha.sha256_sync)(Buffer.concat([Buffer.from([255, 255]), n, e.hash()]))
}

function jp(e, t, n = "ton-safe-sign-magic") {
  return (0, Ha.sign)(Ql(e, n), t)
}
ir.safeSign = jp;

function Lp(e, t, n, r = "ton-safe-sign-magic") {
  return (0, Ha.signVerify)(Ql(e, r), t, n)
}
ir.safeSignVerify = Lp;
(function(e) {
  var t = pe && pe.__createBinding || (Object.create ? function(ie, ve, Ce, Ee) {
      Ee === void 0 && (Ee = Ce);
      var F = Object.getOwnPropertyDescriptor(ve, Ce);
      (!F || ("get" in F ? !ve.__esModule : F.writable || F.configurable)) && (F = {
        enumerable: !0,
        get: function() {
          return ve[Ce]
        }
      }), Object.defineProperty(ie, Ee, F)
    } : function(ie, ve, Ce, Ee) {
      Ee === void 0 && (Ee = Ce), ie[Ee] = ve[Ce]
    }),
    n = pe && pe.__exportStar || function(ie, ve) {
      for (var Ce in ie) Ce !== "default" && !Object.prototype.hasOwnProperty.call(ve, Ce) && t(ve, ie, Ce)
    };
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.safeSignVerify = e.safeSign = e.getMethodId = e.base32Encode = e.base32Decode = e.crc32c = e.crc16 = e.fromNano = e.toNano = e.ComputeError = e.openContract = e.TupleBuilder = e.TupleReader = e.serializeTuple = e.parseTuple = e.generateMerkleUpdate = e.generateMerkleProofDirect = e.generateMerkleProof = e.exoticPruned = e.exoticMerkleUpdate = e.convertToMerkleProof = e.exoticMerkleProof = e.Dictionary = e.Cell = e.CellType = e.Slice = e.beginCell = e.Builder = e.BitBuilder = e.BitReader = e.BitString = e.contractAddress = e.ADNLAddress = e.ExternalAddress = e.address = e.Address = void 0;
  var r = kt;
  Object.defineProperty(e, "Address", {
    enumerable: !0,
    get: function() {
      return r.Address
    }
  }), Object.defineProperty(e, "address", {
    enumerable: !0,
    get: function() {
      return r.address
    }
  });
  var i = sr;
  Object.defineProperty(e, "ExternalAddress", {
    enumerable: !0,
    get: function() {
      return i.ExternalAddress
    }
  });
  var o = ki;
  Object.defineProperty(e, "ADNLAddress", {
    enumerable: !0,
    get: function() {
      return o.ADNLAddress
    }
  });
  var a = Si;
  Object.defineProperty(e, "contractAddress", {
    enumerable: !0,
    get: function() {
      return a.contractAddress
    }
  });
  var s = rn();
  Object.defineProperty(e, "BitString", {
    enumerable: !0,
    get: function() {
      return s.BitString
    }
  });
  var c = Bt;
  Object.defineProperty(e, "BitReader", {
    enumerable: !0,
    get: function() {
      return c.BitReader
    }
  });
  var f = Ii();
  Object.defineProperty(e, "BitBuilder", {
    enumerable: !0,
    get: function() {
      return f.BitBuilder
    }
  });
  var u = qe();
  Object.defineProperty(e, "Builder", {
    enumerable: !0,
    get: function() {
      return u.Builder
    }
  }), Object.defineProperty(e, "beginCell", {
    enumerable: !0,
    get: function() {
      return u.beginCell
    }
  });
  var _ = Ua();
  Object.defineProperty(e, "Slice", {
    enumerable: !0,
    get: function() {
      return _.Slice
    }
  });
  var B = an;
  Object.defineProperty(e, "CellType", {
    enumerable: !0,
    get: function() {
      return B.CellType
    }
  });
  var y = Gn();
  Object.defineProperty(e, "Cell", {
    enumerable: !0,
    get: function() {
      return y.Cell
    }
  });
  var S = Vn();
  Object.defineProperty(e, "Dictionary", {
    enumerable: !0,
    get: function() {
      return S.Dictionary
    }
  });
  var m = Bi();
  Object.defineProperty(e, "exoticMerkleProof", {
    enumerable: !0,
    get: function() {
      return m.exoticMerkleProof
    }
  }), Object.defineProperty(e, "convertToMerkleProof", {
    enumerable: !0,
    get: function() {
      return m.convertToMerkleProof
    }
  });
  var v = lr;
  Object.defineProperty(e, "exoticMerkleUpdate", {
    enumerable: !0,
    get: function() {
      return v.exoticMerkleUpdate
    }
  });
  var x = cr;
  Object.defineProperty(e, "exoticPruned", {
    enumerable: !0,
    get: function() {
      return x.exoticPruned
    }
  });
  var M = xa();
  Object.defineProperty(e, "generateMerkleProof", {
    enumerable: !0,
    get: function() {
      return M.generateMerkleProof
    }
  }), Object.defineProperty(e, "generateMerkleProofDirect", {
    enumerable: !0,
    get: function() {
      return M.generateMerkleProofDirect
    }
  });
  var p = Ns();
  Object.defineProperty(e, "generateMerkleUpdate", {
    enumerable: !0,
    get: function() {
      return p.generateMerkleUpdate
    }
  });
  var h = rr;
  Object.defineProperty(e, "parseTuple", {
    enumerable: !0,
    get: function() {
      return h.parseTuple
    }
  }), Object.defineProperty(e, "serializeTuple", {
    enumerable: !0,
    get: function() {
      return h.serializeTuple
    }
  });
  var P = Ni;
  Object.defineProperty(e, "TupleReader", {
    enumerable: !0,
    get: function() {
      return P.TupleReader
    }
  });
  var k = Di;
  Object.defineProperty(e, "TupleBuilder", {
    enumerable: !0,
    get: function() {
      return k.TupleBuilder
    }
  }), n(bl, e);
  var T = Hi;
  Object.defineProperty(e, "openContract", {
    enumerable: !0,
    get: function() {
      return T.openContract
    }
  });
  var J = Vi;
  Object.defineProperty(e, "ComputeError", {
    enumerable: !0,
    get: function() {
      return J.ComputeError
    }
  });
  var ne = Sn;
  Object.defineProperty(e, "toNano", {
    enumerable: !0,
    get: function() {
      return ne.toNano
    }
  }), Object.defineProperty(e, "fromNano", {
    enumerable: !0,
    get: function() {
      return ne.fromNano
    }
  });
  var q = or;
  Object.defineProperty(e, "crc16", {
    enumerable: !0,
    get: function() {
      return q.crc16
    }
  });
  var we = $r;
  Object.defineProperty(e, "crc32c", {
    enumerable: !0,
    get: function() {
      return we.crc32c
    }
  });
  var ke = vn;
  Object.defineProperty(e, "base32Decode", {
    enumerable: !0,
    get: function() {
      return ke.base32Decode
    }
  }), Object.defineProperty(e, "base32Encode", {
    enumerable: !0,
    get: function() {
      return ke.base32Encode
    }
  });
  var V = Gi;
  Object.defineProperty(e, "getMethodId", {
    enumerable: !0,
    get: function() {
      return V.getMethodId
    }
  });
  var z = ir;
  Object.defineProperty(e, "safeSign", {
    enumerable: !0,
    get: function() {
      return z.safeSign
    }
  }), Object.defineProperty(e, "safeSignVerify", {
    enumerable: !0,
    get: function() {
      return z.safeSignVerify
    }
  })
})(vi);
var ql = {},
  Kt = {};
Object.defineProperty(Kt, "__esModule", {
  value: !0
});
Kt.AirdropAbi = Kt.AirdropFactoryAbiV2 = Kt.AirdropFactoryAbiV1 = void 0;
Kt.AirdropFactoryAbiV1 = {
  "ABI version": 2,
  version: "2.3",
  header: ["pubkey", "time", "expire"],
  functions: [{
    name: "constructor",
    inputs: [{
      name: "_initCodeAirdrop",
      type: "cell"
    }, {
      name: "_initManager",
      type: "address"
    }, {
      name: "_initSignaturePubkey",
      type: "uint256"
    }, {
      name: "_initClaimMinGas",
      type: "uint128"
    }, {
      name: "_initJettonMinter",
      type: "address"
    }],
    outputs: []
  }, {
    name: "takeWalletAddress",
    id: "0xD1735400",
    inputs: [{
      name: "value0",
      type: "uint64"
    }, {
      name: "_wallet",
      type: "address"
    }, {
      name: "value2",
      type: "optional(cell)"
    }],
    outputs: []
  }, {
    name: "getSuccessClaimsCount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getWithdrawnFeesCount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getTotalTokenAmount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getClaimedTokenAmount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "triggerEnable",
    inputs: [],
    outputs: []
  }, {
    name: "increaseTotalTokenAmount",
    inputs: [{
      name: "_depositAmount",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "decreaseTotalTokenAmount",
    inputs: [{
      name: "_withdrawnAmount",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "setClaimMinGas",
    inputs: [{
      name: "_minGas",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "transferOwnership",
    inputs: [{
      name: "_newOwner",
      type: "address"
    }],
    outputs: []
  }, {
    name: "expectedAirdropAddress",
    inputs: [{
      name: "answerId",
      type: "uint32"
    }, {
      name: "_data",
      type: "cell"
    }],
    outputs: [{
      name: "value0",
      type: "address"
    }]
  }, {
    name: "onAirdropCreated",
    inputs: [{
      name: "_airdropNonce",
      type: "uint64"
    }, {
      name: "_data",
      type: "cell"
    }, {
      name: "_signature",
      type: "bytes"
    }],
    outputs: []
  }, {
    name: "withdraw",
    inputs: [{
      name: "_recipient",
      type: "address"
    }, {
      name: "_amount",
      type: "varuint16"
    }],
    outputs: []
  }, {
    name: "withdrawFees",
    inputs: [{
      name: "_recipient",
      type: "address"
    }],
    outputs: []
  }, {
    name: "upgrade",
    inputs: [{
      name: "_code",
      type: "cell"
    }, {
      name: "_version",
      type: "optional(uint32)"
    }, {
      name: "_remainingGasTo",
      type: "optional(address)"
    }],
    outputs: []
  }, {
    name: "getVersion",
    inputs: [{
      name: "answerId",
      type: "uint32"
    }],
    outputs: [{
      name: "value0",
      type: "uint32"
    }]
  }],
  data: [{
    key: 1,
    name: "_nonce",
    type: "uint256"
  }],
  events: [{
    name: "EnableChanged",
    inputs: [{
      name: "current",
      type: "bool"
    }],
    outputs: []
  }, {
    name: "AirdropClaimed",
    inputs: [{
      name: "recipient",
      type: "address"
    }, {
      name: "reward",
      type: "uint128"
    }, {
      name: "deployment",
      type: "address"
    }, {
      name: "claimId",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "VersionChanged",
    inputs: [{
      name: "current",
      type: "uint32"
    }, {
      name: "previous",
      type: "uint32"
    }],
    outputs: []
  }],
  fields: [{
    name: "_pubkey",
    type: "uint256"
  }, {
    name: "_timestamp",
    type: "uint64"
  }, {
    name: "_constructorFlag",
    type: "bool"
  }, {
    name: "_currentVersion",
    type: "uint32"
  }, {
    name: "_nonce",
    type: "uint256"
  }, {
    name: "_codeAirdrop",
    type: "cell"
  }, {
    name: "_manager",
    type: "address"
  }, {
    name: "_signaturePubkey",
    type: "uint256"
  }, {
    name: "_claimMinGas",
    type: "uint128"
  }, {
    name: "_jettonMinter",
    type: "address"
  }, {
    name: "_jettonWallet",
    type: "address"
  }, {
    name: "_enable",
    type: "bool"
  }, {
    name: "_successfulClaimsCount",
    type: "uint128"
  }, {
    name: "_withdrawnFeesCount",
    type: "uint128"
  }, {
    name: "_totalTokenAmount",
    type: "uint128"
  }, {
    name: "_claimedTokenAmount",
    type: "uint128"
  }]
};
Kt.AirdropFactoryAbiV2 = {
  "ABI version": 2,
  version: "2.3",
  header: ["pubkey", "time", "expire"],
  functions: [{
    name: "constructor",
    inputs: [{
      name: "_initCodeAirdrop",
      type: "cell"
    }, {
      name: "_initManager",
      type: "address"
    }, {
      name: "_initSignaturePubkey",
      type: "uint256"
    }, {
      name: "_initClaimMinGas",
      type: "uint128"
    }, {
      name: "_initJettonMinter",
      type: "address"
    }, {
      name: "_initWithdrawRecipient",
      type: "address"
    }, {
      name: "_initFixedClaimFee",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "takeWalletAddress",
    id: "0xD1735400",
    inputs: [{
      name: "value0",
      type: "uint64"
    }, {
      name: "_wallet",
      type: "address"
    }, {
      name: "value2",
      type: "optional(cell)"
    }],
    outputs: []
  }, {
    name: "getSuccessClaimsCount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getWithdrawnFeesCount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getTotalTokenAmount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getClaimedTokenAmount",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getFixedClaimFee",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getClaimMinGas",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "uint128"
    }]
  }, {
    name: "getAirdropCode",
    inputs: [],
    outputs: [{
      name: "value0",
      type: "cell"
    }]
  }, {
    name: "triggerEnable",
    inputs: [],
    outputs: []
  }, {
    name: "increaseTotalTokenAmount",
    inputs: [{
      name: "_depositAmount",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "decreaseTotalTokenAmount",
    inputs: [{
      name: "_withdrawnAmount",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "setClaimMinGas",
    inputs: [{
      name: "_minGas",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "transferOwnership",
    inputs: [{
      name: "_newOwner",
      type: "address"
    }],
    outputs: []
  }, {
    name: "expectedAirdropAddress",
    inputs: [{
      name: "answerId",
      type: "uint32"
    }, {
      name: "_data",
      type: "cell"
    }],
    outputs: [{
      name: "value0",
      type: "address"
    }]
  }, {
    name: "onAirdropCreated",
    inputs: [{
      name: "_airdropNonce",
      type: "uint64"
    }, {
      name: "_data",
      type: "cell"
    }, {
      name: "_signature",
      type: "bytes"
    }],
    outputs: []
  }, {
    name: "withdraw",
    inputs: [{
      name: "_remainingGasTo",
      type: "address"
    }, {
      name: "_amount",
      type: "varuint16"
    }],
    outputs: []
  }, {
    name: "withdrawFees",
    inputs: [{
      name: "_recipient",
      type: "address"
    }],
    outputs: []
  }, {
    name: "upgrade",
    inputs: [{
      name: "_code",
      type: "cell"
    }, {
      name: "_version",
      type: "optional(uint32)"
    }, {
      name: "_remainingGasTo",
      type: "optional(address)"
    }],
    outputs: []
  }, {
    name: "getVersion",
    inputs: [{
      name: "answerId",
      type: "uint32"
    }],
    outputs: [{
      name: "value0",
      type: "uint32"
    }]
  }],
  data: [{
    key: 1,
    name: "_nonce",
    type: "uint256"
  }],
  events: [{
    name: "EnableChanged",
    inputs: [{
      name: "current",
      type: "bool"
    }],
    outputs: []
  }, {
    name: "AirdropClaimed",
    inputs: [{
      name: "recipient",
      type: "address"
    }, {
      name: "reward",
      type: "uint128"
    }, {
      name: "deployment",
      type: "address"
    }, {
      name: "claimId",
      type: "uint128"
    }],
    outputs: []
  }, {
    name: "VersionChanged",
    inputs: [{
      name: "current",
      type: "uint32"
    }, {
      name: "previous",
      type: "uint32"
    }],
    outputs: []
  }],
  fields: [{
    name: "_pubkey",
    type: "uint256"
  }, {
    name: "_timestamp",
    type: "uint64"
  }, {
    name: "_constructorFlag",
    type: "bool"
  }, {
    name: "_currentVersion",
    type: "uint32"
  }, {
    name: "_nonce",
    type: "uint256"
  }, {
    name: "_codeAirdrop",
    type: "cell"
  }, {
    name: "_manager",
    type: "address"
  }, {
    name: "_signaturePubkey",
    type: "uint256"
  }, {
    name: "_claimMinGas",
    type: "uint128"
  }, {
    name: "_withdrawRecipient",
    type: "address"
  }, {
    name: "_fixedClaimFee",
    type: "uint128"
  }, {
    name: "_jettonMinter",
    type: "address"
  }, {
    name: "_jettonWallet",
    type: "address"
  }, {
    name: "_enable",
    type: "bool"
  }, {
    name: "_successfulClaimsCount",
    type: "uint128"
  }, {
    name: "_withdrawnFeesCount",
    type: "uint128"
  }, {
    name: "_totalTokenAmount",
    type: "uint128"
  }, {
    name: "_claimedTokenAmount",
    type: "uint128"
  }]
};
Kt.AirdropAbi = {
  "ABI version": 2,
  version: "2.3",
  header: ["pubkey", "time", "expire"],
  functions: [{
    name: "constructor",
    inputs: [{
      name: "_signature",
      type: "bytes"
    }],
    outputs: []
  }],
  data: [{
    key: 1,
    name: "_nonce",
    type: "uint64"
  }, {
    key: 2,
    name: "_data",
    type: "cell"
  }],
  events: [],
  fields: [{
    name: "_pubkey",
    type: "uint256"
  }, {
    name: "_timestamp",
    type: "uint64"
  }, {
    name: "_constructorFlag",
    type: "bool"
  }, {
    name: "_nonce",
    type: "uint64"
  }, {
    name: "_data",
    type: "cell"
  }]
};
var Wi = {};
Object.defineProperty(Wi, "__esModule", {
  value: !0
});
Wi.AirdropStatus = void 0;
var Wo;
(function(e) {
  e.NoClaimId = "NoClaimId", e.NoUser = "NoUser", e.HasClaimed = "HasClaimed", e.CanClaim = "CanClaim", e.InQueue = "InQueue", e.NoReward = "NoReward", e.NoAirdrop = "NoAirdrop", e.Loading = "Loading"
})(Wo || (Wi.AirdropStatus = Wo = {}));
var Ia = {};
(function(e) {
  var t = pe && pe.__awaiter || function(u, _, B, y) {
      function S(m) {
        return m instanceof B ? m : new B(function(v) {
          v(m)
        })
      }
      return new(B || (B = Promise))(function(m, v) {
        function x(h) {
          try {
            p(y.next(h))
          } catch (P) {
            v(P)
          }
        }

        function M(h) {
          try {
            p(y.throw(h))
          } catch (P) {
            v(P)
          }
        }

        function p(h) {
          h.done ? m(h.value) : S(h.value).then(x, M)
        }
        p((y = y.apply(u, _ || [])).next())
      })
    },
    n = pe && pe.__generator || function(u, _) {
      var B = {
          label: 0,
          sent: function() {
            if (m[0] & 1) throw m[1];
            return m[1]
          },
          trys: [],
          ops: []
        },
        y, S, m, v = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
      return v.next = x(0), v.throw = x(1), v.return = x(2), typeof Symbol == "function" && (v[Symbol.iterator] = function() {
        return this
      }), v;

      function x(p) {
        return function(h) {
          return M([p, h])
        }
      }

      function M(p) {
        if (y) throw new TypeError("Generator is already executing.");
        for (; v && (v = 0, p[0] && (B = 0)), B;) try {
          if (y = 1, S && (m = p[0] & 2 ? S.return : p[0] ? S.throw || ((m = S.return) && m.call(S), 0) : S.next) && !(m = m.call(S, p[1])).done) return m;
          switch (S = 0, m && (p = [p[0] & 2, m.value]), p[0]) {
            case 0:
            case 1:
              m = p;
              break;
            case 4:
              return B.label++, {
                value: p[1],
                done: !1
              };
            case 5:
              B.label++, S = p[1], p = [0];
              continue;
            case 7:
              p = B.ops.pop(), B.trys.pop();
              continue;
            default:
              if (m = B.trys, !(m = m.length > 0 && m[m.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                B = 0;
                continue
              }
              if (p[0] === 3 && (!m || p[1] > m[0] && p[1] < m[3])) {
                B.label = p[1];
                break
              }
              if (p[0] === 6 && B.label < m[1]) {
                B.label = m[1], m = p;
                break
              }
              if (m && B.label < m[2]) {
                B.label = m[2], B.ops.push(p);
                break
              }
              m[2] && B.ops.pop(), B.trys.pop();
              continue
          }
          p = _.call(u, B)
        } catch (h) {
          p = [6, h], S = 0
        } finally {
          y = m = 0
        }
        if (p[0] & 5) throw p[1];
        return {
          value: p[0] ? p[1] : void 0,
          done: !0
        }
      }
    },
    r = pe && pe.__spreadArray || function(u, _, B) {
      if (B || arguments.length === 2)
        for (var y = 0, S = _.length, m; y < S; y++)(m || !(y in _)) && (m || (m = Array.prototype.slice.call(_, 0, y)), m[y] = _[y]);
      return u.concat(m || Array.prototype.slice.call(_))
    };
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.buildTransaction = e.getCodeAirdropAndAmount = e.checkQueue = void 0;
  var i = vi,
    o = nn,
    a = Kt,
    s = function(u, _, B) {
      return t(void 0, void 0, void 0, function() {
        var y, S;
        return n(this, function(m) {
          switch (m.label) {
            case 0:
              return [4, fetch("".concat(u, "/v2/").concat(_, "/").concat(B, "/claim_data"))];
            case 1:
              return y = m.sent(), [4, y.json()];
            case 2:
              return S = m.sent(), [2, S]
          }
        })
      })
    };
  e.checkQueue = s;
  var c = function(u, _) {
    for (var B = [], y = 2; y < arguments.length; y++) B[y - 2] = arguments[y];
    return t(void 0, r([u, _], B, !0), void 0, function(S, m, v) {
      var x, p, h, P, M, p, h, P;
      return v === void 0 && (v = "10000000"), n(this, function(k) {
        switch (k.label) {
          case 0:
            x = i.Address.parseFriendly(S).address.toRawString(), k.label = 1;
          case 1:
            return k.trys.push([1, 4, , 7]), p = new m.Contract(a.AirdropFactoryAbiV1, new o.Address(x)), [4, p.fields._codeAirdrop()];
          case 2:
            return h = k.sent(), [4, p.fields._claimMinGas()];
          case 3:
            return P = k.sent(), [2, {
              codeAirdrop: h,
              amount: (parseInt(v, 10) + parseInt(P, 10)).toString()
            }];
          case 4:
            return M = k.sent(), console.warn(M), p = new m.Contract(a.AirdropFactoryAbiV2, new o.Address(x)), [4, p.methods.getAirdropCode().call()];
          case 5:
            return h = k.sent().value0, [4, p.methods.getClaimMinGas().call()];
          case 6:
            return P = k.sent().value0, [2, {
              codeAirdrop: h,
              amount: (parseInt(v, 10) + parseInt(P, 10)).toString()
            }];
          case 7:
            return [2]
        }
      })
    })
  };
  e.getCodeAirdropAndAmount = c;
  var f = function(u, _, B) {
    for (var y = [], S = 3; S < arguments.length; S++) y[S - 3] = arguments[S];
    return t(void 0, r([u, _, B], y, !0), void 0, function(m, v, x, M) {
      var p, h, P, k, T, J, ne, q;
      return M === void 0 && (M = "10000000"), n(this, function(we) {
        switch (we.label) {
          case 0:
            return [4, v.packIntoCell({
              abiVersion: "2.3",
              structure: [{
                type: "uint32",
                name: "functionId"
              }, {
                type: "bytes",
                name: "_signature"
              }],
              data: {
                functionId: "0x0bda4e15",
                _signature: m.signature
              }
            })];
          case 1:
            return p = we.sent(), [4, (0, e.getCodeAirdropAndAmount)(m.factory, v, M)];
          case 2:
            return h = we.sent(), P = h.amount, k = h.codeAirdrop, [4, v.mergeTvc({
              code: k,
              data: "te6ccgEBAgEAKAABAcABAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg"
            })];
          case 3:
            return T = we.sent(), [4, v.getStateInit(a.AirdropAbi, {
              workchain: 0,
              initParams: {
                _data: m.data,
                _nonce: m.nonce
              },
              tvc: T.tvc
            })];
          case 4:
            return J = we.sent(), ne = J.stateInit, q = J.address, [2, {
              messages: [{
                amount: P,
                address: i.Address.parse(q.toString()).toString({
                  bounceable: !0
                }),
                payload: p.boc,
                stateInit: ne
              }],
              validUntil: Math.ceil((x.time + 6e5) / 1e3)
            }]
        }
      })
    })
  };
  e.buildTransaction = f
})(Ia);
(function(e) {
  var t = pe && pe.__assign || function() {
      return t = Object.assign || function(S) {
        for (var m, v = 1, x = arguments.length; v < x; v++) {
          m = arguments[v];
          for (var M in m) Object.prototype.hasOwnProperty.call(m, M) && (S[M] = m[M])
        }
        return S
      }, t.apply(this, arguments)
    },
    n = pe && pe.__createBinding || (Object.create ? function(S, m, v, x) {
      x === void 0 && (x = v);
      var M = Object.getOwnPropertyDescriptor(m, v);
      (!M || ("get" in M ? !m.__esModule : M.writable || M.configurable)) && (M = {
        enumerable: !0,
        get: function() {
          return m[v]
        }
      }), Object.defineProperty(S, x, M)
    } : function(S, m, v, x) {
      x === void 0 && (x = v), S[x] = m[v]
    }),
    r = pe && pe.__exportStar || function(S, m) {
      for (var v in S) v !== "default" && !Object.prototype.hasOwnProperty.call(m, v) && n(m, S, v)
    },
    i = pe && pe.__awaiter || function(S, m, v, x) {
      function M(p) {
        return p instanceof v ? p : new v(function(h) {
          h(p)
        })
      }
      return new(v || (v = Promise))(function(p, h) {
        function P(J) {
          try {
            T(x.next(J))
          } catch (ne) {
            h(ne)
          }
        }

        function k(J) {
          try {
            T(x.throw(J))
          } catch (ne) {
            h(ne)
          }
        }

        function T(J) {
          J.done ? p(J.value) : M(J.value).then(P, k)
        }
        T((x = x.apply(S, m || [])).next())
      })
    },
    o = pe && pe.__generator || function(S, m) {
      var v = {
          label: 0,
          sent: function() {
            if (p[0] & 1) throw p[1];
            return p[1]
          },
          trys: [],
          ops: []
        },
        x, M, p, h = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
      return h.next = P(0), h.throw = P(1), h.return = P(2), typeof Symbol == "function" && (h[Symbol.iterator] = function() {
        return this
      }), h;

      function P(T) {
        return function(J) {
          return k([T, J])
        }
      }

      function k(T) {
        if (x) throw new TypeError("Generator is already executing.");
        for (; h && (h = 0, T[0] && (v = 0)), v;) try {
          if (x = 1, M && (p = T[0] & 2 ? M.return : T[0] ? M.throw || ((p = M.return) && p.call(M), 0) : M.next) && !(p = p.call(M, T[1])).done) return p;
          switch (M = 0, p && (T = [T[0] & 2, p.value]), T[0]) {
            case 0:
            case 1:
              p = T;
              break;
            case 4:
              return v.label++, {
                value: T[1],
                done: !1
              };
            case 5:
              v.label++, M = T[1], T = [0];
              continue;
            case 7:
              T = v.ops.pop(), v.trys.pop();
              continue;
            default:
              if (p = v.trys, !(p = p.length > 0 && p[p.length - 1]) && (T[0] === 6 || T[0] === 2)) {
                v = 0;
                continue
              }
              if (T[0] === 3 && (!p || T[1] > p[0] && T[1] < p[3])) {
                v.label = T[1];
                break
              }
              if (T[0] === 6 && v.label < p[1]) {
                v.label = p[1], p = T;
                break
              }
              if (p && v.label < p[2]) {
                v.label = p[2], v.ops.push(T);
                break
              }
              p[2] && v.ops.pop(), v.trys.pop();
              continue
          }
          T = m.call(S, v)
        } catch (J) {
          T = [6, J], M = 0
        } finally {
          x = p = 0
        }
        if (T[0] & 5) throw T[1];
        return {
          value: T[0] ? T[1] : void 0,
          done: !0
        }
      }
    };
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.AirdropUI = void 0;
  var a = vi,
    s = nn,
    c = Kt,
    f = Wi,
    u = Ia;
  r(Ia, e);
  var _ = function() {
      function S(m) {
        this.subscribers = [], this.value = m
      }
      return S.prototype.set = function(m, v) {
        var x, M = this,
          p = t({}, this.value),
          h = t(t({}, p), (x = {}, x[m] = v, x));
        this.value = h, this.subscribers.filter(function(P) {
          P[0];
          var k = P[1];
          return k.length === 0 || k.includes(m)
        }).forEach(function(P) {
          var k = P[0],
            T = P[1];
          if (T.length === 0) k(M.value);
          else
            for (var J = 0; J < T.length; J++) p[T[J]] !== h[T[J]] && k(M.value)
        })
      }, S.prototype.getState = function() {
        return t({}, this.value)
      }, S.prototype.subscribe = function(m) {
        for (var v = this, x = [], M = 1; M < arguments.length; M++) x[M - 1] = arguments[M];
        var p = this.subscribers.push([m, x]);
        return m(this.value),
          function() {
            v.subscribers.splice(p - 1, 1)
          }
      }, S.prototype.unsubscribeAll = function() {
        this.subscribers = []
      }, S
    }(),
    B = {
      claimApiBaseUrl: "https://claim-api-test.d3mo.org",
      deployValue: "10000000"
    },
    y = function() {
      function S(m, v, x, M) {
        M === void 0 && (M = {});
        var p = this,
          h;
        this.tonConnect = m, this.rpc = v, this.clock = x, this.subscribers = [], this.state = new _({
          claimId: null,
          airdropName: null,
          claimData: null,
          storageData: null,
          claimed: null,
          loading: !1,
          userAddress: null,
          factoryAddress: null,
          airdropAddress: null,
          storageKey: null,
          claimLoading: !1,
          status: f.AirdropStatus.Loading
        }), this.getState = this.state.getState.bind(this.state), this.subscribe = this.state.subscribe.bind(this.state), this.options = t(t({}, B), M), this.syncStorageData = this.syncStorageData.bind(this), window.addEventListener("storage", this.syncStorageData), this.state.subscribe(this.initSyncClaimData.bind(this), "airdropName", "userAddress"), this.state.subscribe(this.syncStorageKey.bind(this), "airdropName", "userAddress", "claimId"), this.state.subscribe(this.syncFactoryAddress.bind(this), "claimData", "storageData", "claimId"), this.state.subscribe(this.syncAirdropAddress.bind(this), "claimData", "storageData", "claimId"), this.state.subscribe(this.initClaimListener.bind(this), "userAddress", "factoryAddress"), this.state.subscribe(this.syncRemoveStorageTimer.bind(this), "storageKey", "storageData"), this.state.subscribe(this.syncStorageData.bind(this), "storageKey", "claimed"), this.state.subscribe(this.syncClaimed.bind(this), "airdropAddress"), this.state.subscribe(this.syncClaimLoading.bind(this), "storageData"), this.state.subscribe(this.syncStatus.bind(this), "userAddress", "claimed", "claimData", "storageKey", "airdropName", "claimId"), this.state.set("userAddress", (h = this.tonConnect.account) === null || h === void 0 ? void 0 : h.address), this.tonConnectUnsubscribe = this.tonConnect.onStatusChange(function(P) {
          p.state.set("userAddress", P == null ? void 0 : P.account.address)
        })
      }
      return S.prototype.destory = function() {
        var m, v;
        this.state.unsubscribeAll(), clearTimeout(this.removeStorageTimeout), clearTimeout(this.claimDataTimeout), window.removeEventListener("storage", this.syncStorageData), (m = this.tonConnectUnsubscribe) === null || m === void 0 || m.call(this), (v = this.rpcSubscriber) === null || v === void 0 || v.unsubscribe()
      }, S.prototype.setAirdropName = function(m) {
        this.state.set("airdropName", m)
      }, S.prototype.setClaimId = function(m) {
        this.state.set("claimId", m)
      }, S.prototype.claim = function() {
        return i(this, void 0, void 0, function() {
          var m, v, x, M, p, h, P, k, T, J, ne, q, we, ke, V, z;
          return o(this, function(ie) {
            switch (ie.label) {
              case 0:
                if (m = this.getState(), v = m.claimData, x = m.storageKey, M = m.claimId, !M) throw new Error("claimId must defined");
                if ((v == null ? void 0 : v.status) !== "signed") throw new Error("claimData.status must be signed");
                if (p = v.rewards.find(function(ve) {
                    return ve.claimId === M
                  }), !p) throw new Error("rewardData must defined");
                if (!x) throw new Error("storageKey must be defined");
                this.state.set("loading", !0), ie.label = 1;
              case 1:
                return ie.trys.push([1, 7, , 8]), [4, this.rpc.packIntoCell({
                  abiVersion: "2.3",
                  structure: [{
                    type: "uint32",
                    name: "functionId"
                  }, {
                    type: "bytes",
                    name: "_signature"
                  }],
                  data: {
                    functionId: "0x0bda4e15",
                    _signature: p.signature
                  }
                })];
              case 2:
                return h = ie.sent(), [4, (0, u.getCodeAirdropAndAmount)(p.factory, this.rpc, this.options.deployValue)];
              case 3:
                return P = ie.sent(), k = P.codeAirdrop, T = P.amount, [4, this.rpc.mergeTvc({
                  code: k ?? "",
                  data: "te6ccgEBAgEAKAABAcABAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg"
                })];
              case 4:
                return J = ie.sent(), [4, this.rpc.getStateInit(c.AirdropAbi, {
                  workchain: 0,
                  initParams: {
                    _data: p.data,
                    _nonce: p.nonce
                  },
                  tvc: J.tvc
                })];
              case 5:
                return ne = ie.sent(), q = ne.stateInit, we = ne.address, ke = this.clock.time, [4, this.tonConnect.sendTransaction({
                  messages: [{
                    amount: T,
                    address: a.Address.parse(we.toString()).toString({
                      bounceable: !0
                    }),
                    payload: h.boc,
                    stateInit: q
                  }],
                  validUntil: Math.ceil((ke + 6e5) / 1e3)
                })];
              case 6:
                return ie.sent(), V = {
                  airdrop: p.airdrop,
                  factory: p.factory,
                  until: ke + 12e4
                }, localStorage.setItem(x, JSON.stringify(V)), this.state.set("storageData", V), [3, 8];
              case 7:
                return z = ie.sent(), console.error(z), [3, 8];
              case 8:
                return this.state.set("loading", !1), [2]
            }
          })
        })
      }, S.prototype.syncFactoryAddress = function() {
        var m, v = this.state.getState(),
          x = v.claimData,
          M = v.storageData,
          p = v.claimId,
          h = void 0;
        (x == null ? void 0 : x.status) === "signed" && p ? h = (m = x.rewards.find(function(P) {
          return P.claimId === p
        })) === null || m === void 0 ? void 0 : m.factory : h = M == null ? void 0 : M.factory, this.state.set("factoryAddress", h)
      }, S.prototype.syncAirdropAddress = function() {
        var m, v = this.state.getState(),
          x = v.claimData,
          M = v.storageData,
          p = v.claimId,
          h = void 0;
        (x == null ? void 0 : x.status) === "signed" && p ? h = (m = x.rewards.find(function(P) {
          return P.claimId === p
        })) === null || m === void 0 ? void 0 : m.airdrop : h = M == null ? void 0 : M.airdrop, this.state.set("airdropAddress", h)
      }, S.prototype.syncStorageKey = function() {
        var m = this.state.getState(),
          v = m.airdropName,
          x = m.userAddress,
          M = m.claimId,
          p = v && x && M ? S.getStorageKey(v, x, M) : null;
        this.state.set("storageKey", p)
      }, S.prototype.syncStorageData = function() {
        var m = this.state.getState(),
          v = m.storageKey,
          x = m.claimed;
        if (x) this.state.set("storageData", null);
        else {
          var M = v ? localStorage.getItem(v) : null;
          if (M) try {
            var p = JSON.parse(M),
              h = this.clock.time < p.until ? p : null;
            this.state.set("storageData", h)
          } catch (P) {
            console.error(P)
          }
        }
      }, S.prototype.syncRemoveStorageTimer = function() {
        var m = this,
          v = this.clock.time,
          x = this.state.getState(),
          M = x.storageKey,
          p = x.storageData;
        clearTimeout(this.removeStorageTimeout), M && p && v < p.until && (this.removeStorageTimeout = setTimeout(function() {
          localStorage.removeItem(M), m.state.set("storageData", null)
        }, p.until - v))
      }, S.prototype.syncClaimed = function() {
        return i(this, void 0, void 0, function() {
          var m, v, x, M;
          return o(this, function(p) {
            switch (p.label) {
              case 0:
                if (m = this.state.getState().airdropAddress, this.state.set("claimed", null), !m) return [2];
                this.state.set("loading", !0), p.label = 1;
              case 1:
                return p.trys.push([1, 3, , 4]), v = a.Address.parseFriendly(m).address.toRawString(), [4, this.rpc.getFullContractState({
                  address: new s.Address(v)
                })];
              case 2:
                return x = p.sent(), this.state.set("claimed", !!x.state), [3, 4];
              case 3:
                return M = p.sent(), console.error(M), [3, 4];
              case 4:
                return this.state.set("loading", !1), [2]
            }
          })
        })
      }, S.prototype.syncClaimLoading = function() {
        var m = this.state.getState().storageData;
        this.state.set("claimLoading", !!m)
      }, S.prototype.syncStatus = function() {
        var m, v, x, M = f.AirdropStatus.Loading,
          p = this.getState();
        p.userAddress ? p.claimed === !0 ? M = f.AirdropStatus.HasClaimed : p.claimed === !1 && ((m = p.claimData) === null || m === void 0 ? void 0 : m.status) === "signed" && p.storageKey ? M = f.AirdropStatus.CanClaim : ((v = p.claimData) === null || v === void 0 ? void 0 : v.status) === "inQueue" ? M = f.AirdropStatus.InQueue : ((x = p.claimData) === null || x === void 0 ? void 0 : x.status) === "noReward" ? M = f.AirdropStatus.NoReward : p.airdropName ? p.claimId || (M = f.AirdropStatus.NoClaimId) : M = f.AirdropStatus.NoAirdrop : M = f.AirdropStatus.NoUser, this.state.set("status", M)
      }, S.prototype.initSyncClaimData = function() {
        var m = this;
        clearInterval(this.claimDataTimeout), this.state.set("claimData", null);
        var v = this.state.getState(),
          x = v.airdropName,
          M = v.userAddress;
        if (!(!x || !M)) {
          var p = function() {
            return i(m, void 0, void 0, function() {
              var h, P, k, T;
              return o(this, function(J) {
                switch (J.label) {
                  case 0:
                    this.state.set("loading", !0), J.label = 1;
                  case 1:
                    return J.trys.push([1, 4, , 5]), h = this.options.claimApiBaseUrl, [4, fetch("".concat(h, "/v2/").concat(x, "/").concat(M, "/claim_data"))];
                  case 2:
                    return P = J.sent(), [4, P.json()];
                  case 3:
                    return k = J.sent(), this.state.set("claimData", k), [3, 5];
                  case 4:
                    return T = J.sent(), console.error(T), [3, 5];
                  case 5:
                    return this.state.set("loading", !1), [2]
                }
              })
            })
          };
          this.claimDataTimeout = setInterval(p, 2e4), p()
        }
      }, S.prototype.initClaimListener = function() {
        return i(this, void 0, void 0, function() {
          var m, v, x, M, p, h = this,
            P;
          return o(this, function(k) {
            switch (k.label) {
              case 0:
                return (P = this.rpcSubscriber) === null || P === void 0 || P.unsubscribe(), m = this.state.getState(), v = m.factoryAddress, x = m.userAddress, !v || !x ? [2] : (M = a.Address.parseFriendly(v).address.toRawString(), p = new this.rpc.Contract(c.AirdropFactoryAbiV2, new s.Address(M)), this.rpcSubscriber = new this.rpc.Subscriber, [4, this.rpcSubscriber.transactions(p.address).flatMap(function(T) {
                  return T.transactions
                }).flatMap(function(T) {
                  return p.decodeTransactionEvents({
                    transaction: T
                  })
                }).filterMap(function(T) {
                  if (T.event === "AirdropClaimed" && T.data.recipient.toString() === x) return h.state.set("claimed", !0), !0
                }).first()]);
              case 1:
                return k.sent(), [2]
            }
          })
        })
      }, S.getStorageKey = function(m, v, x) {
        return "airdrop-v2-".concat(m, "-").concat(v, "-").concat(x)
      }, S
    }();
  e.AirdropUI = y
})(ql);
const zp = {
    async mounted() {
      this.stores.state.setPageSettings({
        isNoBg: !0
      }), this.rpc = new nn.ProviderRpcClient({
        fallback: () => ra.EverscaleStandaloneClient.create({
          clock: this.clock,
          connection: {
            data: {
              endpoint: "https://jrpc-ton.broxus.com/rpc"
            },
            id: Number(ec.MAINNET),
            type: "jrpc"
          }
        }),
        forceUseFallback: !0
      }), this.tonConnectUI = await window.tonConnectUI(), this.airdropUI = new ql.AirdropUI(this.tonConnectUI, this.rpc, this.clock), this.state = this.airdropUI.getState(), this.airdropUI.subscribe(e => {
        this.state = e
      }), this.state = this.airdropUI.getState()
    },
    data() {
      return {
        clock: new ra.Clock,
        rpc: null,
        tonConnectUI: null,
        airdropUI: null,
        state: {},
        isShowAirdropPicker: !1,
        selectedAirdrop: "",
        airdropOptions: [{
          text: "Airdrop #1",
          value: "zoo-batch1"
        }]
      }
    },
    computed: {
      isAddressAvailable() {
        var e;
        return !!((e = this.state) != null && e.userAddress)
      },
      yourPlace() {
        var t;
        const e = (t = this.state.claimData) == null ? void 0 : t.place;
        return e < 100 ? "~100" : e < 1e3 ? "~1000" : ">1000"
      }
    },
    methods: {
      handleConnect() {
        if (this.state.userAddress) try {
          this.tonConnectUI.disconnect()
        } catch (e) {
          this._catchError(e)
        } else if (!this.state.userAddress) try {
          this.tonConnectUI.openModal()
        } catch (e) {
          this._catchError(e)
        }
      },
      claimReward() {
        this.airdropUI.claim(this.state.claimData, this.state.storageKey)
      },
      parseNonBounceable(e) {
        return vi.Address.parseRaw(e).toString({
          bounceable: !1
        })
      },
      handlePickerConfirm(e) {
        this.isShowAirdropPicker = !1;
        const t = e.selectedOptions[0];
        this.airdropUI.setAirdropName(t.value), this.selectedAirdrop = t.text
      }
    }
  },
  Np = {
    class: "container onChainAirdrop",
    style: {
      "padding-top": "30px",
      "padding-bottom": "30px"
    }
  },
  Dp = {
    class: "center goldText"
  },
  Fp = {
    class: "connect"
  },
  Kp = {
    class: "statusInfo center"
  },
  $p = {
    style: {
      margin: "0 10px"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "29",
    viewBox: "0 0 28 29",
    fill: "none"
  },
  Hp = {
    key: 0,
    class: "addresses"
  },
  Vp = {
    class: "addressField"
  },
  Gp = {
    class: "address"
  },
  Wp = {
    class: "statusInfo center",
    style: {
      margin: "30px 0"
    }
  },
  Yp = {
    key: 0,
    class: "center goldText"
  },
  Xp = {
    key: 3,
    class: "center claimStatus",
    style: {
      color: "#0bc15f"
    }
  },
  Jp = {
    key: 4,
    class: "claimButton"
  },
  Qp = {
    key: 5,
    class: "claimStatus"
  },
  qp = {
    key: 6,
    class: "claimStatus"
  };

function Zp(e, t, n, r, i, o) {
  var m, v, x, M, p;
  const a = Ut("van-icon"),
    s = Ut("van-button"),
    c = Ut("van-notice-bar"),
    f = Ut("van-field"),
    u = Ut("van-picker"),
    _ = Ut("van-popup"),
    B = Ut("van-loading"),
    y = Ut("van-cell"),
    S = Ut("van-cell-group");
  return bt(), Ot("div", Np, [t[6] || (t[6] = tt("h1", {
    class: "center"
  }, "Airdrop on-chain claim", -1)), tt("p", null, wt(e.t("To claim on-chain, you must select the airdrop listed on your balance page from the dropdown menu.")), 1), tt("p", null, wt(e.t("Due to blockchain technical limitations, the distribution speed is restricted and follows a queue system. In the first few hours, the wait time may be longer due to the high number of participants.")), 1), tt("p", null, wt(e.t("If you leave the page for more than 10 minute, your position in the queue will be lost.")), 1), tt("p", null, wt(e.t("If you see tokens listed in the airdrop on your balance page, but no rewards are available on this page, please wait a few minutes.")), 1), tt("h3", Dp, wt(e.t("Your wallet")), 1), tt("div", Fp, [tt("div", Kp, [vt(s, {
    round: "",
    type: o.isAddressAvailable ? "danger" : "primary",
    size: "normal",
    onClick: o.handleConnect
  }, {
    icon: $t(() => [(bt(), Ot("svg", $p, t[5] || (t[5] = [tt("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z",
      fill: "#FFFFFF"
    }, null, -1)])))]),
    default: $t(() => [pr(" " + wt(o.isAddressAvailable ? e.t("Disconnect wallet") : e.t("Connect wallet")) + " ", 1), vt(a, {
      name: "arrow"
    })]),
    _: 1
  }, 8, ["type", "onClick"]), o.isAddressAvailable ? (bt(), Ot("div", Hp, [tt("div", Vp, [tt("div", Gp, wt(o.parseNonBounceable(i.state.userAddress)), 1), vt(a, {
    size: "20px",
    name: "description",
    onClick: t[0] || (t[0] = h => e._copyToClipboard(o.parseNonBounceable(i.state.userAddress)))
  })])])) : xt("", !0), vt(c, {
    wrapable: "",
    scrollable: !1,
    "left-icon": "warning",
    style: {
      "border-radius": "10px",
      "margin-top": "10px",
      "line-height": "normal"
    }
  }, {
    default: $t(() => [pr(wt(e.t("To claim the airdrop, connect the wallet specified for the airdrop on the previous page.")), 1)]),
    _: 1
  })])]), t[7] || (t[7] = tt("h3", {
    class: "center goldText"
  }, "Airdrop", -1)), tt("div", Wp, [o.isAddressAvailable ? (bt(), hr(f, {
    key: 0,
    modelValue: i.selectedAirdrop,
    "onUpdate:modelValue": t[1] || (t[1] = h => i.selectedAirdrop = h),
    class: "airdropPicker",
    "is-link": "",
    readonly: "",
    label: e.t("Airdrop"),
    placeholder: e.t("Choose Airdrop"),
    onClick: t[2] || (t[2] = h => i.isShowAirdropPicker = !0)
  }, null, 8, ["modelValue", "label", "placeholder"])) : xt("", !0), vt(_, {
    show: i.isShowAirdropPicker,
    "onUpdate:show": t[4] || (t[4] = h => i.isShowAirdropPicker = h),
    round: "",
    position: "bottom"
  }, {
    default: $t(() => [vt(u, {
      title: e.t("Choose Airdrop"),
      columns: i.airdropOptions,
      onCancel: t[3] || (t[3] = h => i.isShowAirdropPicker = !1),
      "cancel-button-text": e.t("Cancel"),
      "confirm-button-text": e.t("Confirm"),
      onConfirm: o.handlePickerConfirm
    }, null, 8, ["title", "columns", "cancel-button-text", "confirm-button-text", "onConfirm"])]),
    _: 1
  }, 8, ["show"])]), o.isAddressAvailable ? (bt(), Ot("h3", Yp, wt(e.t("Status")), 1)) : xt("", !0), i.state.loading || i.state.claimLoading ? (bt(), hr(B, {
    key: 1,
    size: "12"
  })) : xt("", !0), i.state.claimData ? (bt(), Ot(nc, {
    key: 2
  }, [((m = i.state.claimData) == null ? void 0 : m.status) === "signed" ? (bt(), hr(S, {
    key: 0,
    inset: "",
    style: {
      margin: "0"
    }
  }, {
    default: $t(() => [vt(y, {
      size: "normal",
      center: "",
      title: e.t("Reward"),
      value: `${i.state.claimData.reward/1e9} $ZOO`
    }, null, 8, ["title", "value"])]),
    _: 1
  })) : xt("", !0), ((v = i.state.claimData) == null ? void 0 : v.status) === "inQueue" ? (bt(), hr(S, {
    key: 1,
    inset: "",
    style: {
      margin: "0"
    }
  }, {
    default: $t(() => [vt(y, {
      size: "normal",
      center: "",
      title: e.t("Status"),
      value: e.t("In queue")
    }, null, 8, ["title", "value"]), vt(y, {
      size: "normal",
      center: "",
      title: e.t("Place"),
      value: o.yourPlace
    }, null, 8, ["title", "value"])]),
    _: 1
  })) : xt("", !0), ((x = i.state.claimData) == null ? void 0 : x.status) === "noReward" ? (bt(), hr(S, {
    key: 2,
    inset: "",
    style: {
      margin: "0"
    }
  }, {
    default: $t(() => [vt(y, {
      size: "normal",
      center: "",
      title: e.t("Status"),
      value: e.t("No reward")
    }, null, 8, ["title", "value"])]),
    _: 1
  })) : xt("", !0)], 64)) : xt("", !0), i.state.claimed === !0 ? (bt(), Ot("h3", Xp, [vt(a, {
    name: "checked"
  }), pr(wt(e.t("Reward claimed")), 1)])) : i.state.claimed === !1 && ((M = i.state.claimData) == null ? void 0 : M.status) === "signed" && i.state.storageKey ? (bt(), Ot("div", Jp, [vt(s, {
    loading: i.state.loading || i.state.claimLoading,
    round: "",
    size: "large",
    type: "primary",
    onClick: o.claimReward
  }, {
    default: $t(() => [pr(wt(e.t("Claim")), 1)]),
    _: 1
  }, 8, ["loading", "onClick"])])) : ((p = i.state.claimData) == null ? void 0 : p.status) === "inQueue" ? (bt(), Ot("div", Qp, wt(e.t("In queue")), 1)) : !i.state.airdropName && o.isAddressAvailable ? (bt(), Ot("div", qp, [pr(wt(e.t("Select airdrop")) + " ", 1), vt(a, {
    size: "20px",
    color: "#ffbb00",
    name: "warning-o"
  })])) : xt("", !0), t[8] || (t[8] = tt("br", null, null, -1)), t[9] || (t[9] = tt("br", null, null, -1)), t[10] || (t[10] = tt("br", null, null, -1)), t[11] || (t[11] = tt("br", null, null, -1)), t[12] || (t[12] = tt("br", null, null, -1))])
}
const rg = tc(zp, [
  ["render", Zp],
  ["__scopeId", "data-v-e406dad2"]
]);
export {
  rg as
  default
};