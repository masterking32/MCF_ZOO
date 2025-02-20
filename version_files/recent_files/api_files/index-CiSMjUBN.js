var xa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function qr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Fl(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
    };
    n.prototype = t.prototype
  } else n = {};
  return Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r]
      }
    })
  }), n
}
var ar = {},
  Ui = {};
Ui.byteLength = jl;
Ui.toByteArray = Kl;
Ui.fromByteArray = Gl;
var fn = [],
  on = [],
  Dl = typeof Uint8Array < "u" ? Uint8Array : Array,
  eo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var or = 0, Ol = eo.length; or < Ol; ++or) fn[or] = eo[or], on[eo.charCodeAt(or)] = or;
on[45] = 62;
on[95] = 63;

function ba(e) {
  var t = e.length;
  if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var r = n === t ? 0 : 4 - n % 4;
  return [n, r]
}

function jl(e) {
  var t = ba(e),
    n = t[0],
    r = t[1];
  return (n + r) * 3 / 4 - r
}

function Hl(e, t, n) {
  return (t + n) * 3 / 4 - n
}

function Kl(e) {
  var t, n = ba(e),
    r = n[0],
    i = n[1],
    o = new Dl(Hl(e, r, i)),
    c = 0,
    a = i > 0 ? r - 4 : r,
    p;
  for (p = 0; p < a; p += 4) t = on[e.charCodeAt(p)] << 18 | on[e.charCodeAt(p + 1)] << 12 | on[e.charCodeAt(p + 2)] << 6 | on[e.charCodeAt(p + 3)], o[c++] = t >> 16 & 255, o[c++] = t >> 8 & 255, o[c++] = t & 255;
  return i === 2 && (t = on[e.charCodeAt(p)] << 2 | on[e.charCodeAt(p + 1)] >> 4, o[c++] = t & 255), i === 1 && (t = on[e.charCodeAt(p)] << 10 | on[e.charCodeAt(p + 1)] << 4 | on[e.charCodeAt(p + 2)] >> 2, o[c++] = t >> 8 & 255, o[c++] = t & 255), o
}

function Vl(e) {
  return fn[e >> 18 & 63] + fn[e >> 12 & 63] + fn[e >> 6 & 63] + fn[e & 63]
}

function ql(e, t, n) {
  for (var r, i = [], o = t; o < n; o += 3) r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(Vl(r));
  return i.join("")
}

function Gl(e) {
  for (var t, n = e.length, r = n % 3, i = [], o = 16383, c = 0, a = n - r; c < a; c += o) i.push(ql(e, c, c + o > a ? a : c + o));
  return r === 1 ? (t = e[n - 1], i.push(fn[t >> 2] + fn[t << 4 & 63] + "==")) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1], i.push(fn[t >> 10] + fn[t >> 4 & 63] + fn[t << 2 & 63] + "=")), i.join("")
}
var Ro = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ro.read = function(e, t, n, r, i) {
  var o, c, a = i * 8 - r - 1,
    p = (1 << a) - 1,
    m = p >> 1,
    y = -7,
    E = n ? i - 1 : 0,
    b = n ? -1 : 1,
    A = e[t + E];
  for (E += b, o = A & (1 << -y) - 1, A >>= -y, y += a; y > 0; o = o * 256 + e[t + E], E += b, y -= 8);
  for (c = o & (1 << -y) - 1, o >>= -y, y += r; y > 0; c = c * 256 + e[t + E], E += b, y -= 8);
  if (o === 0) o = 1 - m;
  else {
    if (o === p) return c ? NaN : (A ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, r), o = o - m
  }
  return (A ? -1 : 1) * c * Math.pow(2, o - r)
};
Ro.write = function(e, t, n, r, i, o) {
  var c, a, p, m = o * 8 - i - 1,
    y = (1 << m) - 1,
    E = y >> 1,
    b = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    A = r ? 0 : o - 1,
    _ = r ? 1 : -1,
    T = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, c = y) : (c = Math.floor(Math.log(t) / Math.LN2), t * (p = Math.pow(2, -c)) < 1 && (c--, p *= 2), c + E >= 1 ? t += b / p : t += b * Math.pow(2, 1 - E), t * p >= 2 && (c++, p /= 2), c + E >= y ? (a = 0, c = y) : c + E >= 1 ? (a = (t * p - 1) * Math.pow(2, i), c = c + E) : (a = t * Math.pow(2, E - 1) * Math.pow(2, i), c = 0)); i >= 8; e[n + A] = a & 255, A += _, a /= 256, i -= 8);
  for (c = c << i | a, m += i; m > 0; e[n + A] = c & 255, A += _, c /= 256, m -= 8);
  e[n + A - _] |= T * 128
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = Ui,
    n = Ro,
    r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = a, e.SlowBuffer = J, e.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  e.kMaxLength = i, a.TYPED_ARRAY_SUPPORT = o(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

  function o() {
    try {
      const d = new Uint8Array(1),
        l = {
          foo: function() {
            return 42
          }
        };
      return Object.setPrototypeOf(l, Uint8Array.prototype), Object.setPrototypeOf(d, l), d.foo() === 42
    } catch {
      return !1
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this)) return this.buffer
    }
  }), Object.defineProperty(a.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this)) return this.byteOffset
    }
  });

  function c(d) {
    if (d > i) throw new RangeError('The value "' + d + '" is invalid for option "size"');
    const l = new Uint8Array(d);
    return Object.setPrototypeOf(l, a.prototype), l
  }

  function a(d, l, u) {
    if (typeof d == "number") {
      if (typeof l == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
      return E(d)
    }
    return p(d, l, u)
  }
  a.poolSize = 8192;

  function p(d, l, u) {
    if (typeof d == "string") return b(d, l);
    if (ArrayBuffer.isView(d)) return _(d);
    if (d == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d);
    if ($t(d, ArrayBuffer) || d && $t(d.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && ($t(d, SharedArrayBuffer) || d && $t(d.buffer, SharedArrayBuffer))) return T(d, l, u);
    if (typeof d == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const x = d.valueOf && d.valueOf();
    if (x != null && x !== d) return a.from(x, l, u);
    const S = U(d);
    if (S) return S;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof d[Symbol.toPrimitive] == "function") return a.from(d[Symbol.toPrimitive]("string"), l, u);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d)
  }
  a.from = function(d, l, u) {
    return p(d, l, u)
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);

  function m(d) {
    if (typeof d != "number") throw new TypeError('"size" argument must be of type number');
    if (d < 0) throw new RangeError('The value "' + d + '" is invalid for option "size"')
  }

  function y(d, l, u) {
    return m(d), d <= 0 ? c(d) : l !== void 0 ? typeof u == "string" ? c(d).fill(l, u) : c(d).fill(l) : c(d)
  }
  a.alloc = function(d, l, u) {
    return y(d, l, u)
  };

  function E(d) {
    return m(d), c(d < 0 ? 0 : ae(d) | 0)
  }
  a.allocUnsafe = function(d) {
    return E(d)
  }, a.allocUnsafeSlow = function(d) {
    return E(d)
  };

  function b(d, l) {
    if ((typeof l != "string" || l === "") && (l = "utf8"), !a.isEncoding(l)) throw new TypeError("Unknown encoding: " + l);
    const u = q(d, l) | 0;
    let x = c(u);
    const S = x.write(d, l);
    return S !== u && (x = x.slice(0, S)), x
  }

  function A(d) {
    const l = d.length < 0 ? 0 : ae(d.length) | 0,
      u = c(l);
    for (let x = 0; x < l; x += 1) u[x] = d[x] & 255;
    return u
  }

  function _(d) {
    if ($t(d, Uint8Array)) {
      const l = new Uint8Array(d);
      return T(l.buffer, l.byteOffset, l.byteLength)
    }
    return A(d)
  }

  function T(d, l, u) {
    if (l < 0 || d.byteLength < l) throw new RangeError('"offset" is outside of buffer bounds');
    if (d.byteLength < l + (u || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let x;
    return l === void 0 && u === void 0 ? x = new Uint8Array(d) : u === void 0 ? x = new Uint8Array(d, l) : x = new Uint8Array(d, l, u), Object.setPrototypeOf(x, a.prototype), x
  }

  function U(d) {
    if (a.isBuffer(d)) {
      const l = ae(d.length) | 0,
        u = c(l);
      return u.length === 0 || d.copy(u, 0, 0, l), u
    }
    if (d.length !== void 0) return typeof d.length != "number" || At(d.length) ? c(0) : A(d);
    if (d.type === "Buffer" && Array.isArray(d.data)) return A(d.data)
  }

  function ae(d) {
    if (d >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return d | 0
  }

  function J(d) {
    return +d != d && (d = 0), a.alloc(+d)
  }
  a.isBuffer = function(l) {
    return l != null && l._isBuffer === !0 && l !== a.prototype
  }, a.compare = function(l, u) {
    if ($t(l, Uint8Array) && (l = a.from(l, l.offset, l.byteLength)), $t(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), !a.isBuffer(l) || !a.isBuffer(u)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (l === u) return 0;
    let x = l.length,
      S = u.length;
    for (let B = 0, R = Math.min(x, S); B < R; ++B)
      if (l[B] !== u[B]) {
        x = l[B], S = u[B];
        break
      } return x < S ? -1 : S < x ? 1 : 0
  }, a.isEncoding = function(l) {
    switch (String(l).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1
    }
  }, a.concat = function(l, u) {
    if (!Array.isArray(l)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (l.length === 0) return a.alloc(0);
    let x;
    if (u === void 0)
      for (u = 0, x = 0; x < l.length; ++x) u += l[x].length;
    const S = a.allocUnsafe(u);
    let B = 0;
    for (x = 0; x < l.length; ++x) {
      let R = l[x];
      if ($t(R, Uint8Array)) B + R.length > S.length ? (a.isBuffer(R) || (R = a.from(R)), R.copy(S, B)) : Uint8Array.prototype.set.call(S, R, B);
      else if (a.isBuffer(R)) R.copy(S, B);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      B += R.length
    }
    return S
  };

  function q(d, l) {
    if (a.isBuffer(d)) return d.length;
    if (ArrayBuffer.isView(d) || $t(d, ArrayBuffer)) return d.byteLength;
    if (typeof d != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof d);
    const u = d.length,
      x = arguments.length > 2 && arguments[2] === !0;
    if (!x && u === 0) return 0;
    let S = !1;
    for (;;) switch (l) {
      case "ascii":
      case "latin1":
      case "binary":
        return u;
      case "utf8":
      case "utf-8":
        return dt(d).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return u * 2;
      case "hex":
        return u >>> 1;
      case "base64":
        return _t(d).length;
      default:
        if (S) return x ? -1 : dt(d).length;
        l = ("" + l).toLowerCase(), S = !0
    }
  }
  a.byteLength = q;

  function te(d, l, u) {
    let x = !1;
    if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, l >>>= 0, u <= l)) return "";
    for (d || (d = "utf8");;) switch (d) {
      case "hex":
        return tt(this, l, u);
      case "utf8":
      case "utf-8":
        return ee(this, l, u);
      case "ascii":
        return Le(this, l, u);
      case "latin1":
      case "binary":
        return Ze(this, l, u);
      case "base64":
        return ie(this, l, u);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return xt(this, l, u);
      default:
        if (x) throw new TypeError("Unknown encoding: " + d);
        d = (d + "").toLowerCase(), x = !0
    }
  }
  a.prototype._isBuffer = !0;

  function N(d, l, u) {
    const x = d[l];
    d[l] = d[u], d[u] = x
  }
  a.prototype.swap16 = function() {
    const l = this.length;
    if (l % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let u = 0; u < l; u += 2) N(this, u, u + 1);
    return this
  }, a.prototype.swap32 = function() {
    const l = this.length;
    if (l % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let u = 0; u < l; u += 4) N(this, u, u + 3), N(this, u + 1, u + 2);
    return this
  }, a.prototype.swap64 = function() {
    const l = this.length;
    if (l % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let u = 0; u < l; u += 8) N(this, u, u + 7), N(this, u + 1, u + 6), N(this, u + 2, u + 5), N(this, u + 3, u + 4);
    return this
  }, a.prototype.toString = function() {
    const l = this.length;
    return l === 0 ? "" : arguments.length === 0 ? ee(this, 0, l) : te.apply(this, arguments)
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(l) {
    if (!a.isBuffer(l)) throw new TypeError("Argument must be a Buffer");
    return this === l ? !0 : a.compare(this, l) === 0
  }, a.prototype.inspect = function() {
    let l = "";
    const u = e.INSPECT_MAX_BYTES;
    return l = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (l += " ... "), "<Buffer " + l + ">"
  }, r && (a.prototype[r] = a.prototype.inspect), a.prototype.compare = function(l, u, x, S, B) {
    if ($t(l, Uint8Array) && (l = a.from(l, l.offset, l.byteLength)), !a.isBuffer(l)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof l);
    if (u === void 0 && (u = 0), x === void 0 && (x = l ? l.length : 0), S === void 0 && (S = 0), B === void 0 && (B = this.length), u < 0 || x > l.length || S < 0 || B > this.length) throw new RangeError("out of range index");
    if (S >= B && u >= x) return 0;
    if (S >= B) return -1;
    if (u >= x) return 1;
    if (u >>>= 0, x >>>= 0, S >>>= 0, B >>>= 0, this === l) return 0;
    let R = B - S,
      Ae = x - u;
    const nt = Math.min(R, Ae),
      rt = this.slice(S, B),
      mt = l.slice(u, x);
    for (let it = 0; it < nt; ++it)
      if (rt[it] !== mt[it]) {
        R = rt[it], Ae = mt[it];
        break
      } return R < Ae ? -1 : Ae < R ? 1 : 0
  };

  function X(d, l, u, x, S) {
    if (d.length === 0) return -1;
    if (typeof u == "string" ? (x = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, At(u) && (u = S ? 0 : d.length - 1), u < 0 && (u = d.length + u), u >= d.length) {
      if (S) return -1;
      u = d.length - 1
    } else if (u < 0)
      if (S) u = 0;
      else return -1;
    if (typeof l == "string" && (l = a.from(l, x)), a.isBuffer(l)) return l.length === 0 ? -1 : H(d, l, u, x, S);
    if (typeof l == "number") return l = l & 255, typeof Uint8Array.prototype.indexOf == "function" ? S ? Uint8Array.prototype.indexOf.call(d, l, u) : Uint8Array.prototype.lastIndexOf.call(d, l, u) : H(d, [l], u, x, S);
    throw new TypeError("val must be string, number or Buffer")
  }

  function H(d, l, u, x, S) {
    let B = 1,
      R = d.length,
      Ae = l.length;
    if (x !== void 0 && (x = String(x).toLowerCase(), x === "ucs2" || x === "ucs-2" || x === "utf16le" || x === "utf-16le")) {
      if (d.length < 2 || l.length < 2) return -1;
      B = 2, R /= 2, Ae /= 2, u /= 2
    }

    function nt(mt, it) {
      return B === 1 ? mt[it] : mt.readUInt16BE(it * B)
    }
    let rt;
    if (S) {
      let mt = -1;
      for (rt = u; rt < R; rt++)
        if (nt(d, rt) === nt(l, mt === -1 ? 0 : rt - mt)) {
          if (mt === -1 && (mt = rt), rt - mt + 1 === Ae) return mt * B
        } else mt !== -1 && (rt -= rt - mt), mt = -1
    } else
      for (u + Ae > R && (u = R - Ae), rt = u; rt >= 0; rt--) {
        let mt = !0;
        for (let it = 0; it < Ae; it++)
          if (nt(d, rt + it) !== nt(l, it)) {
            mt = !1;
            break
          } if (mt) return rt
      }
    return -1
  }
  a.prototype.includes = function(l, u, x) {
    return this.indexOf(l, u, x) !== -1
  }, a.prototype.indexOf = function(l, u, x) {
    return X(this, l, u, x, !0)
  }, a.prototype.lastIndexOf = function(l, u, x) {
    return X(this, l, u, x, !1)
  };

  function D(d, l, u, x) {
    u = Number(u) || 0;
    const S = d.length - u;
    x ? (x = Number(x), x > S && (x = S)) : x = S;
    const B = l.length;
    x > B / 2 && (x = B / 2);
    let R;
    for (R = 0; R < x; ++R) {
      const Ae = parseInt(l.substr(R * 2, 2), 16);
      if (At(Ae)) return R;
      d[u + R] = Ae
    }
    return R
  }

  function M(d, l, u, x) {
    return Jt(dt(l, d.length - u), d, u, x)
  }

  function K(d, l, u, x) {
    return Jt(_e(l), d, u, x)
  }

  function I(d, l, u, x) {
    return Jt(_t(l), d, u, x)
  }

  function k(d, l, u, x) {
    return Jt(pt(l, d.length - u), d, u, x)
  }
  a.prototype.write = function(l, u, x, S) {
    if (u === void 0) S = "utf8", x = this.length, u = 0;
    else if (x === void 0 && typeof u == "string") S = u, x = this.length, u = 0;
    else if (isFinite(u)) u = u >>> 0, isFinite(x) ? (x = x >>> 0, S === void 0 && (S = "utf8")) : (S = x, x = void 0);
    else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const B = this.length - u;
    if ((x === void 0 || x > B) && (x = B), l.length > 0 && (x < 0 || u < 0) || u > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    S || (S = "utf8");
    let R = !1;
    for (;;) switch (S) {
      case "hex":
        return D(this, l, u, x);
      case "utf8":
      case "utf-8":
        return M(this, l, u, x);
      case "ascii":
      case "latin1":
      case "binary":
        return K(this, l, u, x);
      case "base64":
        return I(this, l, u, x);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return k(this, l, u, x);
      default:
        if (R) throw new TypeError("Unknown encoding: " + S);
        S = ("" + S).toLowerCase(), R = !0
    }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    }
  };

  function ie(d, l, u) {
    return l === 0 && u === d.length ? t.fromByteArray(d) : t.fromByteArray(d.slice(l, u))
  }

  function ee(d, l, u) {
    u = Math.min(d.length, u);
    const x = [];
    let S = l;
    for (; S < u;) {
      const B = d[S];
      let R = null,
        Ae = B > 239 ? 4 : B > 223 ? 3 : B > 191 ? 2 : 1;
      if (S + Ae <= u) {
        let nt, rt, mt, it;
        switch (Ae) {
          case 1:
            B < 128 && (R = B);
            break;
          case 2:
            nt = d[S + 1], (nt & 192) === 128 && (it = (B & 31) << 6 | nt & 63, it > 127 && (R = it));
            break;
          case 3:
            nt = d[S + 1], rt = d[S + 2], (nt & 192) === 128 && (rt & 192) === 128 && (it = (B & 15) << 12 | (nt & 63) << 6 | rt & 63, it > 2047 && (it < 55296 || it > 57343) && (R = it));
            break;
          case 4:
            nt = d[S + 1], rt = d[S + 2], mt = d[S + 3], (nt & 192) === 128 && (rt & 192) === 128 && (mt & 192) === 128 && (it = (B & 15) << 18 | (nt & 63) << 12 | (rt & 63) << 6 | mt & 63, it > 65535 && it < 1114112 && (R = it))
        }
      }
      R === null ? (R = 65533, Ae = 1) : R > 65535 && (R -= 65536, x.push(R >>> 10 & 1023 | 55296), R = 56320 | R & 1023), x.push(R), S += Ae
    }
    return Se(x)
  }
  const re = 4096;

  function Se(d) {
    const l = d.length;
    if (l <= re) return String.fromCharCode.apply(String, d);
    let u = "",
      x = 0;
    for (; x < l;) u += String.fromCharCode.apply(String, d.slice(x, x += re));
    return u
  }

  function Le(d, l, u) {
    let x = "";
    u = Math.min(d.length, u);
    for (let S = l; S < u; ++S) x += String.fromCharCode(d[S] & 127);
    return x
  }

  function Ze(d, l, u) {
    let x = "";
    u = Math.min(d.length, u);
    for (let S = l; S < u; ++S) x += String.fromCharCode(d[S]);
    return x
  }

  function tt(d, l, u) {
    const x = d.length;
    (!l || l < 0) && (l = 0), (!u || u < 0 || u > x) && (u = x);
    let S = "";
    for (let B = l; B < u; ++B) S += Ot[d[B]];
    return S
  }

  function xt(d, l, u) {
    const x = d.slice(l, u);
    let S = "";
    for (let B = 0; B < x.length - 1; B += 2) S += String.fromCharCode(x[B] + x[B + 1] * 256);
    return S
  }
  a.prototype.slice = function(l, u) {
    const x = this.length;
    l = ~~l, u = u === void 0 ? x : ~~u, l < 0 ? (l += x, l < 0 && (l = 0)) : l > x && (l = x), u < 0 ? (u += x, u < 0 && (u = 0)) : u > x && (u = x), u < l && (u = l);
    const S = this.subarray(l, u);
    return Object.setPrototypeOf(S, a.prototype), S
  };

  function ze(d, l, u) {
    if (d % 1 !== 0 || d < 0) throw new RangeError("offset is not uint");
    if (d + l > u) throw new RangeError("Trying to access beyond buffer length")
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(l, u, x) {
    l = l >>> 0, u = u >>> 0, x || ze(l, u, this.length);
    let S = this[l],
      B = 1,
      R = 0;
    for (; ++R < u && (B *= 256);) S += this[l + R] * B;
    return S
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(l, u, x) {
    l = l >>> 0, u = u >>> 0, x || ze(l, u, this.length);
    let S = this[l + --u],
      B = 1;
    for (; u > 0 && (B *= 256);) S += this[l + --u] * B;
    return S
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(l, u) {
    return l = l >>> 0, u || ze(l, 1, this.length), this[l]
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(l, u) {
    return l = l >>> 0, u || ze(l, 2, this.length), this[l] | this[l + 1] << 8
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(l, u) {
    return l = l >>> 0, u || ze(l, 2, this.length), this[l] << 8 | this[l + 1]
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(l, u) {
    return l = l >>> 0, u || ze(l, 4, this.length), (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + this[l + 3] * 16777216
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(l, u) {
    return l = l >>> 0, u || ze(l, 4, this.length), this[l] * 16777216 + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3])
  }, a.prototype.readBigUInt64LE = kt(function(l) {
    l = l >>> 0, le(l, "offset");
    const u = this[l],
      x = this[l + 7];
    (u === void 0 || x === void 0) && xe(l, this.length - 8);
    const S = u + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24,
      B = this[++l] + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + x * 2 ** 24;
    return BigInt(S) + (BigInt(B) << BigInt(32))
  }), a.prototype.readBigUInt64BE = kt(function(l) {
    l = l >>> 0, le(l, "offset");
    const u = this[l],
      x = this[l + 7];
    (u === void 0 || x === void 0) && xe(l, this.length - 8);
    const S = u * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l],
      B = this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + x;
    return (BigInt(S) << BigInt(32)) + BigInt(B)
  }), a.prototype.readIntLE = function(l, u, x) {
    l = l >>> 0, u = u >>> 0, x || ze(l, u, this.length);
    let S = this[l],
      B = 1,
      R = 0;
    for (; ++R < u && (B *= 256);) S += this[l + R] * B;
    return B *= 128, S >= B && (S -= Math.pow(2, 8 * u)), S
  }, a.prototype.readIntBE = function(l, u, x) {
    l = l >>> 0, u = u >>> 0, x || ze(l, u, this.length);
    let S = u,
      B = 1,
      R = this[l + --S];
    for (; S > 0 && (B *= 256);) R += this[l + --S] * B;
    return B *= 128, R >= B && (R -= Math.pow(2, 8 * u)), R
  }, a.prototype.readInt8 = function(l, u) {
    return l = l >>> 0, u || ze(l, 1, this.length), this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l]
  }, a.prototype.readInt16LE = function(l, u) {
    l = l >>> 0, u || ze(l, 2, this.length);
    const x = this[l] | this[l + 1] << 8;
    return x & 32768 ? x | 4294901760 : x
  }, a.prototype.readInt16BE = function(l, u) {
    l = l >>> 0, u || ze(l, 2, this.length);
    const x = this[l + 1] | this[l] << 8;
    return x & 32768 ? x | 4294901760 : x
  }, a.prototype.readInt32LE = function(l, u) {
    return l = l >>> 0, u || ze(l, 4, this.length), this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24
  }, a.prototype.readInt32BE = function(l, u) {
    return l = l >>> 0, u || ze(l, 4, this.length), this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]
  }, a.prototype.readBigInt64LE = kt(function(l) {
    l = l >>> 0, le(l, "offset");
    const u = this[l],
      x = this[l + 7];
    (u === void 0 || x === void 0) && xe(l, this.length - 8);
    const S = this[l + 4] + this[l + 5] * 2 ** 8 + this[l + 6] * 2 ** 16 + (x << 24);
    return (BigInt(S) << BigInt(32)) + BigInt(u + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24)
  }), a.prototype.readBigInt64BE = kt(function(l) {
    l = l >>> 0, le(l, "offset");
    const u = this[l],
      x = this[l + 7];
    (u === void 0 || x === void 0) && xe(l, this.length - 8);
    const S = (u << 24) + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l];
    return (BigInt(S) << BigInt(32)) + BigInt(this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + x)
  }), a.prototype.readFloatLE = function(l, u) {
    return l = l >>> 0, u || ze(l, 4, this.length), n.read(this, l, !0, 23, 4)
  }, a.prototype.readFloatBE = function(l, u) {
    return l = l >>> 0, u || ze(l, 4, this.length), n.read(this, l, !1, 23, 4)
  }, a.prototype.readDoubleLE = function(l, u) {
    return l = l >>> 0, u || ze(l, 8, this.length), n.read(this, l, !0, 52, 8)
  }, a.prototype.readDoubleBE = function(l, u) {
    return l = l >>> 0, u || ze(l, 8, this.length), n.read(this, l, !1, 52, 8)
  };

  function Qe(d, l, u, x, S, B) {
    if (!a.isBuffer(d)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (l > S || l < B) throw new RangeError('"value" argument is out of bounds');
    if (u + x > d.length) throw new RangeError("Index out of range")
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(l, u, x, S) {
    if (l = +l, u = u >>> 0, x = x >>> 0, !S) {
      const Ae = Math.pow(2, 8 * x) - 1;
      Qe(this, l, u, x, Ae, 0)
    }
    let B = 1,
      R = 0;
    for (this[u] = l & 255; ++R < x && (B *= 256);) this[u + R] = l / B & 255;
    return u + x
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(l, u, x, S) {
    if (l = +l, u = u >>> 0, x = x >>> 0, !S) {
      const Ae = Math.pow(2, 8 * x) - 1;
      Qe(this, l, u, x, Ae, 0)
    }
    let B = x - 1,
      R = 1;
    for (this[u + B] = l & 255; --B >= 0 && (R *= 256);) this[u + B] = l / R & 255;
    return u + x
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(l, u, x) {
    return l = +l, u = u >>> 0, x || Qe(this, l, u, 1, 255, 0), this[u] = l & 255, u + 1
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(l, u, x) {
    return l = +l, u = u >>> 0, x || Qe(this, l, u, 2, 65535, 0), this[u] = l & 255, this[u + 1] = l >>> 8, u + 2
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(l, u, x) {
    return l = +l, u = u >>> 0, x || Qe(this, l, u, 2, 65535, 0), this[u] = l >>> 8, this[u + 1] = l & 255, u + 2
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(l, u, x) {
    return l = +l, u = u >>> 0, x || Qe(this, l, u, 4, 4294967295, 0), this[u + 3] = l >>> 24, this[u + 2] = l >>> 16, this[u + 1] = l >>> 8, this[u] = l & 255, u + 4
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(l, u, x) {
    return l = +l, u = u >>> 0, x || Qe(this, l, u, 4, 4294967295, 0), this[u] = l >>> 24, this[u + 1] = l >>> 16, this[u + 2] = l >>> 8, this[u + 3] = l & 255, u + 4
  };

  function ft(d, l, u, x, S) {
    Q(l, x, S, d, u, 7);
    let B = Number(l & BigInt(4294967295));
    d[u++] = B, B = B >> 8, d[u++] = B, B = B >> 8, d[u++] = B, B = B >> 8, d[u++] = B;
    let R = Number(l >> BigInt(32) & BigInt(4294967295));
    return d[u++] = R, R = R >> 8, d[u++] = R, R = R >> 8, d[u++] = R, R = R >> 8, d[u++] = R, u
  }

  function bt(d, l, u, x, S) {
    Q(l, x, S, d, u, 7);
    let B = Number(l & BigInt(4294967295));
    d[u + 7] = B, B = B >> 8, d[u + 6] = B, B = B >> 8, d[u + 5] = B, B = B >> 8, d[u + 4] = B;
    let R = Number(l >> BigInt(32) & BigInt(4294967295));
    return d[u + 3] = R, R = R >> 8, d[u + 2] = R, R = R >> 8, d[u + 1] = R, R = R >> 8, d[u] = R, u + 8
  }
  a.prototype.writeBigUInt64LE = kt(function(l, u = 0) {
    return ft(this, l, u, BigInt(0), BigInt("0xffffffffffffffff"))
  }), a.prototype.writeBigUInt64BE = kt(function(l, u = 0) {
    return bt(this, l, u, BigInt(0), BigInt("0xffffffffffffffff"))
  }), a.prototype.writeIntLE = function(l, u, x, S) {
    if (l = +l, u = u >>> 0, !S) {
      const nt = Math.pow(2, 8 * x - 1);
      Qe(this, l, u, x, nt - 1, -nt)
    }
    let B = 0,
      R = 1,
      Ae = 0;
    for (this[u] = l & 255; ++B < x && (R *= 256);) l < 0 && Ae === 0 && this[u + B - 1] !== 0 && (Ae = 1), this[u + B] = (l / R >> 0) - Ae & 255;
    return u + x
  }, a.prototype.writeIntBE = function(l, u, x, S) {
    if (l = +l, u = u >>> 0, !S) {
      const nt = Math.pow(2, 8 * x - 1);
      Qe(this, l, u, x, nt - 1, -nt)
    }
    let B = x - 1,
      R = 1,
      Ae = 0;
    for (this[u + B] = l & 255; --B >= 0 && (R *= 256);) l < 0 && Ae === 0 && this[u + B + 1] !== 0 && (Ae = 1), this[u + B] = (l / R >> 0) - Ae & 255;
    return u + x
  }, a.prototype.writeInt8 = function(l, u, x) {
    return l = +l, u = u >>> 0, x || Qe(this, l, u, 1, 127, -128), l < 0 && (l = 255 + l + 1), this[u] = l & 255, u + 1
  }, a.prototype.writeInt16LE = function(l, u, x) {
    return l = +l, u = u >>> 0, x || Qe(this, l, u, 2, 32767, -32768), this[u] = l & 255, this[u + 1] = l >>> 8, u + 2
  }, a.prototype.writeInt16BE = function(l, u, x) {
    return l = +l, u = u >>> 0, x || Qe(this, l, u, 2, 32767, -32768), this[u] = l >>> 8, this[u + 1] = l & 255, u + 2
  }, a.prototype.writeInt32LE = function(l, u, x) {
    return l = +l, u = u >>> 0, x || Qe(this, l, u, 4, 2147483647, -2147483648), this[u] = l & 255, this[u + 1] = l >>> 8, this[u + 2] = l >>> 16, this[u + 3] = l >>> 24, u + 4
  }, a.prototype.writeInt32BE = function(l, u, x) {
    return l = +l, u = u >>> 0, x || Qe(this, l, u, 4, 2147483647, -2147483648), l < 0 && (l = 4294967295 + l + 1), this[u] = l >>> 24, this[u + 1] = l >>> 16, this[u + 2] = l >>> 8, this[u + 3] = l & 255, u + 4
  }, a.prototype.writeBigInt64LE = kt(function(l, u = 0) {
    return ft(this, l, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
  }), a.prototype.writeBigInt64BE = kt(function(l, u = 0) {
    return bt(this, l, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
  });

  function Pe(d, l, u, x, S, B) {
    if (u + x > d.length) throw new RangeError("Index out of range");
    if (u < 0) throw new RangeError("Index out of range")
  }

  function yt(d, l, u, x, S) {
    return l = +l, u = u >>> 0, S || Pe(d, l, u, 4), n.write(d, l, u, x, 23, 4), u + 4
  }
  a.prototype.writeFloatLE = function(l, u, x) {
    return yt(this, l, u, !0, x)
  }, a.prototype.writeFloatBE = function(l, u, x) {
    return yt(this, l, u, !1, x)
  };

  function an(d, l, u, x, S) {
    return l = +l, u = u >>> 0, S || Pe(d, l, u, 8), n.write(d, l, u, x, 52, 8), u + 8
  }
  a.prototype.writeDoubleLE = function(l, u, x) {
    return an(this, l, u, !0, x)
  }, a.prototype.writeDoubleBE = function(l, u, x) {
    return an(this, l, u, !1, x)
  }, a.prototype.copy = function(l, u, x, S) {
    if (!a.isBuffer(l)) throw new TypeError("argument should be a Buffer");
    if (x || (x = 0), !S && S !== 0 && (S = this.length), u >= l.length && (u = l.length), u || (u = 0), S > 0 && S < x && (S = x), S === x || l.length === 0 || this.length === 0) return 0;
    if (u < 0) throw new RangeError("targetStart out of bounds");
    if (x < 0 || x >= this.length) throw new RangeError("Index out of range");
    if (S < 0) throw new RangeError("sourceEnd out of bounds");
    S > this.length && (S = this.length), l.length - u < S - x && (S = l.length - u + x);
    const B = S - x;
    return this === l && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(u, x, S) : Uint8Array.prototype.set.call(l, this.subarray(x, S), u), B
  }, a.prototype.fill = function(l, u, x, S) {
    if (typeof l == "string") {
      if (typeof u == "string" ? (S = u, u = 0, x = this.length) : typeof x == "string" && (S = x, x = this.length), S !== void 0 && typeof S != "string") throw new TypeError("encoding must be a string");
      if (typeof S == "string" && !a.isEncoding(S)) throw new TypeError("Unknown encoding: " + S);
      if (l.length === 1) {
        const R = l.charCodeAt(0);
        (S === "utf8" && R < 128 || S === "latin1") && (l = R)
      }
    } else typeof l == "number" ? l = l & 255 : typeof l == "boolean" && (l = Number(l));
    if (u < 0 || this.length < u || this.length < x) throw new RangeError("Out of range index");
    if (x <= u) return this;
    u = u >>> 0, x = x === void 0 ? this.length : x >>> 0, l || (l = 0);
    let B;
    if (typeof l == "number")
      for (B = u; B < x; ++B) this[B] = l;
    else {
      const R = a.isBuffer(l) ? l : a.from(l, S),
        Ae = R.length;
      if (Ae === 0) throw new TypeError('The value "' + l + '" is invalid for argument "value"');
      for (B = 0; B < x - u; ++B) this[B + u] = R[B % Ae]
    }
    return this
  };
  const j = {};

  function V(d, l, u) {
    j[d] = class extends u {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: l.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${d}]`, this.stack, delete this.name
      }
      get code() {
        return d
      }
      set code(S) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: S,
          writable: !0
        })
      }
      toString() {
        return `${this.name} [${d}]: ${this.message}`
      }
    }
  }
  V("ERR_BUFFER_OUT_OF_BOUNDS", function(d) {
    return d ? `${d} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
  }, RangeError), V("ERR_INVALID_ARG_TYPE", function(d, l) {
    return `The "${d}" argument must be of type number. Received type ${typeof l}`
  }, TypeError), V("ERR_OUT_OF_RANGE", function(d, l, u) {
    let x = `The value of "${d}" is out of range.`,
      S = u;
    return Number.isInteger(u) && Math.abs(u) > 2 ** 32 ? S = F(String(u)) : typeof u == "bigint" && (S = String(u), (u > BigInt(2) ** BigInt(32) || u < -(BigInt(2) ** BigInt(32))) && (S = F(S)), S += "n"), x += ` It must be ${l}. Received ${S}`, x
  }, RangeError);

  function F(d) {
    let l = "",
      u = d.length;
    const x = d[0] === "-" ? 1 : 0;
    for (; u >= x + 4; u -= 3) l = `_${d.slice(u-3,u)}${l}`;
    return `${d.slice(0,u)}${l}`
  }

  function Z(d, l, u) {
    le(l, "offset"), (d[l] === void 0 || d[l + u] === void 0) && xe(l, d.length - (u + 1))
  }

  function Q(d, l, u, x, S, B) {
    if (d > u || d < l) {
      const R = typeof l == "bigint" ? "n" : "";
      let Ae;
      throw l === 0 || l === BigInt(0) ? Ae = `>= 0${R} and < 2${R} ** ${(B+1)*8}${R}` : Ae = `>= -(2${R} ** ${(B+1)*8-1}${R}) and < 2 ** ${(B+1)*8-1}${R}`, new j.ERR_OUT_OF_RANGE("value", Ae, d)
    }
    Z(x, S, B)
  }

  function le(d, l) {
    if (typeof d != "number") throw new j.ERR_INVALID_ARG_TYPE(l, "number", d)
  }

  function xe(d, l, u) {
    throw Math.floor(d) !== d ? (le(d, u), new j.ERR_OUT_OF_RANGE("offset", "an integer", d)) : l < 0 ? new j.ERR_BUFFER_OUT_OF_BOUNDS : new j.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${l}`, d)
  }
  const me = /[^+/0-9A-Za-z-_]/g;

  function ct(d) {
    if (d = d.split("=")[0], d = d.trim().replace(me, ""), d.length < 2) return "";
    for (; d.length % 4 !== 0;) d = d + "=";
    return d
  }

  function dt(d, l) {
    l = l || 1 / 0;
    let u;
    const x = d.length;
    let S = null;
    const B = [];
    for (let R = 0; R < x; ++R) {
      if (u = d.charCodeAt(R), u > 55295 && u < 57344) {
        if (!S) {
          if (u > 56319) {
            (l -= 3) > -1 && B.push(239, 191, 189);
            continue
          } else if (R + 1 === x) {
            (l -= 3) > -1 && B.push(239, 191, 189);
            continue
          }
          S = u;
          continue
        }
        if (u < 56320) {
          (l -= 3) > -1 && B.push(239, 191, 189), S = u;
          continue
        }
        u = (S - 55296 << 10 | u - 56320) + 65536
      } else S && (l -= 3) > -1 && B.push(239, 191, 189);
      if (S = null, u < 128) {
        if ((l -= 1) < 0) break;
        B.push(u)
      } else if (u < 2048) {
        if ((l -= 2) < 0) break;
        B.push(u >> 6 | 192, u & 63 | 128)
      } else if (u < 65536) {
        if ((l -= 3) < 0) break;
        B.push(u >> 12 | 224, u >> 6 & 63 | 128, u & 63 | 128)
      } else if (u < 1114112) {
        if ((l -= 4) < 0) break;
        B.push(u >> 18 | 240, u >> 12 & 63 | 128, u >> 6 & 63 | 128, u & 63 | 128)
      } else throw new Error("Invalid code point")
    }
    return B
  }

  function _e(d) {
    const l = [];
    for (let u = 0; u < d.length; ++u) l.push(d.charCodeAt(u) & 255);
    return l
  }

  function pt(d, l) {
    let u, x, S;
    const B = [];
    for (let R = 0; R < d.length && !((l -= 2) < 0); ++R) u = d.charCodeAt(R), x = u >> 8, S = u % 256, B.push(S), B.push(x);
    return B
  }

  function _t(d) {
    return t.toByteArray(ct(d))
  }

  function Jt(d, l, u, x) {
    let S;
    for (S = 0; S < x && !(S + u >= l.length || S >= d.length); ++S) l[S + u] = d[S];
    return S
  }

  function $t(d, l) {
    return d instanceof l || d != null && d.constructor != null && d.constructor.name != null && d.constructor.name === l.name
  }

  function At(d) {
    return d !== d
  }
  const Ot = function() {
    const d = "0123456789abcdef",
      l = new Array(256);
    for (let u = 0; u < 16; ++u) {
      const x = u * 16;
      for (let S = 0; S < 16; ++S) l[x + S] = d[u] + d[S]
    }
    return l
  }();

  function kt(d) {
    return typeof BigInt > "u" ? Fe : d
  }

  function Fe() {
    throw new Error("BigInt not supported")
  }
})(ar);
var Ca = {
  exports: {}
};
(function(e) {
  (function(t, n) {
    e.exports ? e.exports = n() : (t.nacl || (t.nacl = {}), t.nacl.util = n())
  })(xa, function() {
    var t = {};

    function n(r) {
      if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(r)) throw new TypeError("invalid encoding")
    }
    return t.decodeUTF8 = function(r) {
      if (typeof r != "string") throw new TypeError("expected string");
      var i, o = unescape(encodeURIComponent(r)),
        c = new Uint8Array(o.length);
      for (i = 0; i < o.length; i++) c[i] = o.charCodeAt(i);
      return c
    }, t.encodeUTF8 = function(r) {
      var i, o = [];
      for (i = 0; i < r.length; i++) o.push(String.fromCharCode(r[i]));
      return decodeURIComponent(escape(o.join("")))
    }, typeof atob > "u" ? typeof ar.Buffer.from < "u" ? (t.encodeBase64 = function(r) {
      return ar.Buffer.from(r).toString("base64")
    }, t.decodeBase64 = function(r) {
      return n(r), new Uint8Array(Array.prototype.slice.call(ar.Buffer.from(r, "base64"), 0))
    }) : (t.encodeBase64 = function(r) {
      return new ar.Buffer(r).toString("base64")
    }, t.decodeBase64 = function(r) {
      return n(r), new Uint8Array(Array.prototype.slice.call(new ar.Buffer(r, "base64"), 0))
    }) : (t.encodeBase64 = function(r) {
      var i, o = [],
        c = r.length;
      for (i = 0; i < c; i++) o.push(String.fromCharCode(r[i]));
      return btoa(o.join(""))
    }, t.decodeBase64 = function(r) {
      n(r);
      var i, o = atob(r),
        c = new Uint8Array(o.length);
      for (i = 0; i < o.length; i++) c[i] = o.charCodeAt(i);
      return c
    }), t
  })
})(Ca);
var Zl = Ca.exports;
const Ur = qr(Zl);

function Yl(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Ea = {
  exports: {}
};
const zl = {},
  Ql = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: zl
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Jl = Fl(Ql);
(function(e) {
  (function(t) {
    var n = function(f) {
        var w, h = new Float64Array(16);
        if (f)
          for (w = 0; w < f.length; w++) h[w] = f[w];
        return h
      },
      r = function() {
        throw new Error("no PRNG")
      },
      i = new Uint8Array(16),
      o = new Uint8Array(32);
    o[0] = 9;
    var c = n(),
      a = n([1]),
      p = n([56129, 1]),
      m = n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
      y = n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
      E = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
      b = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
      A = n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

    function _(f, w, h, s) {
      f[w] = h >> 24 & 255, f[w + 1] = h >> 16 & 255, f[w + 2] = h >> 8 & 255, f[w + 3] = h & 255, f[w + 4] = s >> 24 & 255, f[w + 5] = s >> 16 & 255, f[w + 6] = s >> 8 & 255, f[w + 7] = s & 255
    }

    function T(f, w, h, s, v) {
      var L, $ = 0;
      for (L = 0; L < v; L++) $ |= f[w + L] ^ h[s + L];
      return (1 & $ - 1 >>> 8) - 1
    }

    function U(f, w, h, s) {
      return T(f, w, h, s, 16)
    }

    function ae(f, w, h, s) {
      return T(f, w, h, s, 32)
    }

    function J(f, w, h, s) {
      for (var v = s[0] & 255 | (s[1] & 255) << 8 | (s[2] & 255) << 16 | (s[3] & 255) << 24, L = h[0] & 255 | (h[1] & 255) << 8 | (h[2] & 255) << 16 | (h[3] & 255) << 24, $ = h[4] & 255 | (h[5] & 255) << 8 | (h[6] & 255) << 16 | (h[7] & 255) << 24, Y = h[8] & 255 | (h[9] & 255) << 8 | (h[10] & 255) << 16 | (h[11] & 255) << 24, se = h[12] & 255 | (h[13] & 255) << 8 | (h[14] & 255) << 16 | (h[15] & 255) << 24, ye = s[4] & 255 | (s[5] & 255) << 8 | (s[6] & 255) << 16 | (s[7] & 255) << 24, ue = w[0] & 255 | (w[1] & 255) << 8 | (w[2] & 255) << 16 | (w[3] & 255) << 24, ot = w[4] & 255 | (w[5] & 255) << 8 | (w[6] & 255) << 16 | (w[7] & 255) << 24, ge = w[8] & 255 | (w[9] & 255) << 8 | (w[10] & 255) << 16 | (w[11] & 255) << 24, Me = w[12] & 255 | (w[13] & 255) << 8 | (w[14] & 255) << 16 | (w[15] & 255) << 24, Re = s[8] & 255 | (s[9] & 255) << 8 | (s[10] & 255) << 16 | (s[11] & 255) << 24, De = h[16] & 255 | (h[17] & 255) << 8 | (h[18] & 255) << 16 | (h[19] & 255) << 24, Ne = h[20] & 255 | (h[21] & 255) << 8 | (h[22] & 255) << 16 | (h[23] & 255) << 24, $e = h[24] & 255 | (h[25] & 255) << 8 | (h[26] & 255) << 16 | (h[27] & 255) << 24, We = h[28] & 255 | (h[29] & 255) << 8 | (h[30] & 255) << 16 | (h[31] & 255) << 24, Ue = s[12] & 255 | (s[13] & 255) << 8 | (s[14] & 255) << 16 | (s[15] & 255) << 24, we = v, be = L, fe = $, pe = Y, ve = se, ce = ye, P = ue, W = ot, ne = ge, G = Me, z = Re, oe = De, Te = Ne, Oe = $e, He = We, je = Ue, C, Ye = 0; Ye < 20; Ye += 2) C = we + Te | 0, ve ^= C << 7 | C >>> 25, C = ve + we | 0, ne ^= C << 9 | C >>> 23, C = ne + ve | 0, Te ^= C << 13 | C >>> 19, C = Te + ne | 0, we ^= C << 18 | C >>> 14, C = ce + be | 0, G ^= C << 7 | C >>> 25, C = G + ce | 0, Oe ^= C << 9 | C >>> 23, C = Oe + G | 0, be ^= C << 13 | C >>> 19, C = be + Oe | 0, ce ^= C << 18 | C >>> 14, C = z + P | 0, He ^= C << 7 | C >>> 25, C = He + z | 0, fe ^= C << 9 | C >>> 23, C = fe + He | 0, P ^= C << 13 | C >>> 19, C = P + fe | 0, z ^= C << 18 | C >>> 14, C = je + oe | 0, pe ^= C << 7 | C >>> 25, C = pe + je | 0, W ^= C << 9 | C >>> 23, C = W + pe | 0, oe ^= C << 13 | C >>> 19, C = oe + W | 0, je ^= C << 18 | C >>> 14, C = we + pe | 0, be ^= C << 7 | C >>> 25, C = be + we | 0, fe ^= C << 9 | C >>> 23, C = fe + be | 0, pe ^= C << 13 | C >>> 19, C = pe + fe | 0, we ^= C << 18 | C >>> 14, C = ce + ve | 0, P ^= C << 7 | C >>> 25, C = P + ce | 0, W ^= C << 9 | C >>> 23, C = W + P | 0, ve ^= C << 13 | C >>> 19, C = ve + W | 0, ce ^= C << 18 | C >>> 14, C = z + G | 0, oe ^= C << 7 | C >>> 25, C = oe + z | 0, ne ^= C << 9 | C >>> 23, C = ne + oe | 0, G ^= C << 13 | C >>> 19, C = G + ne | 0, z ^= C << 18 | C >>> 14, C = je + He | 0, Te ^= C << 7 | C >>> 25, C = Te + je | 0, Oe ^= C << 9 | C >>> 23, C = Oe + Te | 0, He ^= C << 13 | C >>> 19, C = He + Oe | 0, je ^= C << 18 | C >>> 14;
      we = we + v | 0, be = be + L | 0, fe = fe + $ | 0, pe = pe + Y | 0, ve = ve + se | 0, ce = ce + ye | 0, P = P + ue | 0, W = W + ot | 0, ne = ne + ge | 0, G = G + Me | 0, z = z + Re | 0, oe = oe + De | 0, Te = Te + Ne | 0, Oe = Oe + $e | 0, He = He + We | 0, je = je + Ue | 0, f[0] = we >>> 0 & 255, f[1] = we >>> 8 & 255, f[2] = we >>> 16 & 255, f[3] = we >>> 24 & 255, f[4] = be >>> 0 & 255, f[5] = be >>> 8 & 255, f[6] = be >>> 16 & 255, f[7] = be >>> 24 & 255, f[8] = fe >>> 0 & 255, f[9] = fe >>> 8 & 255, f[10] = fe >>> 16 & 255, f[11] = fe >>> 24 & 255, f[12] = pe >>> 0 & 255, f[13] = pe >>> 8 & 255, f[14] = pe >>> 16 & 255, f[15] = pe >>> 24 & 255, f[16] = ve >>> 0 & 255, f[17] = ve >>> 8 & 255, f[18] = ve >>> 16 & 255, f[19] = ve >>> 24 & 255, f[20] = ce >>> 0 & 255, f[21] = ce >>> 8 & 255, f[22] = ce >>> 16 & 255, f[23] = ce >>> 24 & 255, f[24] = P >>> 0 & 255, f[25] = P >>> 8 & 255, f[26] = P >>> 16 & 255, f[27] = P >>> 24 & 255, f[28] = W >>> 0 & 255, f[29] = W >>> 8 & 255, f[30] = W >>> 16 & 255, f[31] = W >>> 24 & 255, f[32] = ne >>> 0 & 255, f[33] = ne >>> 8 & 255, f[34] = ne >>> 16 & 255, f[35] = ne >>> 24 & 255, f[36] = G >>> 0 & 255, f[37] = G >>> 8 & 255, f[38] = G >>> 16 & 255, f[39] = G >>> 24 & 255, f[40] = z >>> 0 & 255, f[41] = z >>> 8 & 255, f[42] = z >>> 16 & 255, f[43] = z >>> 24 & 255, f[44] = oe >>> 0 & 255, f[45] = oe >>> 8 & 255, f[46] = oe >>> 16 & 255, f[47] = oe >>> 24 & 255, f[48] = Te >>> 0 & 255, f[49] = Te >>> 8 & 255, f[50] = Te >>> 16 & 255, f[51] = Te >>> 24 & 255, f[52] = Oe >>> 0 & 255, f[53] = Oe >>> 8 & 255, f[54] = Oe >>> 16 & 255, f[55] = Oe >>> 24 & 255, f[56] = He >>> 0 & 255, f[57] = He >>> 8 & 255, f[58] = He >>> 16 & 255, f[59] = He >>> 24 & 255, f[60] = je >>> 0 & 255, f[61] = je >>> 8 & 255, f[62] = je >>> 16 & 255, f[63] = je >>> 24 & 255
    }

    function q(f, w, h, s) {
      for (var v = s[0] & 255 | (s[1] & 255) << 8 | (s[2] & 255) << 16 | (s[3] & 255) << 24, L = h[0] & 255 | (h[1] & 255) << 8 | (h[2] & 255) << 16 | (h[3] & 255) << 24, $ = h[4] & 255 | (h[5] & 255) << 8 | (h[6] & 255) << 16 | (h[7] & 255) << 24, Y = h[8] & 255 | (h[9] & 255) << 8 | (h[10] & 255) << 16 | (h[11] & 255) << 24, se = h[12] & 255 | (h[13] & 255) << 8 | (h[14] & 255) << 16 | (h[15] & 255) << 24, ye = s[4] & 255 | (s[5] & 255) << 8 | (s[6] & 255) << 16 | (s[7] & 255) << 24, ue = w[0] & 255 | (w[1] & 255) << 8 | (w[2] & 255) << 16 | (w[3] & 255) << 24, ot = w[4] & 255 | (w[5] & 255) << 8 | (w[6] & 255) << 16 | (w[7] & 255) << 24, ge = w[8] & 255 | (w[9] & 255) << 8 | (w[10] & 255) << 16 | (w[11] & 255) << 24, Me = w[12] & 255 | (w[13] & 255) << 8 | (w[14] & 255) << 16 | (w[15] & 255) << 24, Re = s[8] & 255 | (s[9] & 255) << 8 | (s[10] & 255) << 16 | (s[11] & 255) << 24, De = h[16] & 255 | (h[17] & 255) << 8 | (h[18] & 255) << 16 | (h[19] & 255) << 24, Ne = h[20] & 255 | (h[21] & 255) << 8 | (h[22] & 255) << 16 | (h[23] & 255) << 24, $e = h[24] & 255 | (h[25] & 255) << 8 | (h[26] & 255) << 16 | (h[27] & 255) << 24, We = h[28] & 255 | (h[29] & 255) << 8 | (h[30] & 255) << 16 | (h[31] & 255) << 24, Ue = s[12] & 255 | (s[13] & 255) << 8 | (s[14] & 255) << 16 | (s[15] & 255) << 24, we = v, be = L, fe = $, pe = Y, ve = se, ce = ye, P = ue, W = ot, ne = ge, G = Me, z = Re, oe = De, Te = Ne, Oe = $e, He = We, je = Ue, C, Ye = 0; Ye < 20; Ye += 2) C = we + Te | 0, ve ^= C << 7 | C >>> 25, C = ve + we | 0, ne ^= C << 9 | C >>> 23, C = ne + ve | 0, Te ^= C << 13 | C >>> 19, C = Te + ne | 0, we ^= C << 18 | C >>> 14, C = ce + be | 0, G ^= C << 7 | C >>> 25, C = G + ce | 0, Oe ^= C << 9 | C >>> 23, C = Oe + G | 0, be ^= C << 13 | C >>> 19, C = be + Oe | 0, ce ^= C << 18 | C >>> 14, C = z + P | 0, He ^= C << 7 | C >>> 25, C = He + z | 0, fe ^= C << 9 | C >>> 23, C = fe + He | 0, P ^= C << 13 | C >>> 19, C = P + fe | 0, z ^= C << 18 | C >>> 14, C = je + oe | 0, pe ^= C << 7 | C >>> 25, C = pe + je | 0, W ^= C << 9 | C >>> 23, C = W + pe | 0, oe ^= C << 13 | C >>> 19, C = oe + W | 0, je ^= C << 18 | C >>> 14, C = we + pe | 0, be ^= C << 7 | C >>> 25, C = be + we | 0, fe ^= C << 9 | C >>> 23, C = fe + be | 0, pe ^= C << 13 | C >>> 19, C = pe + fe | 0, we ^= C << 18 | C >>> 14, C = ce + ve | 0, P ^= C << 7 | C >>> 25, C = P + ce | 0, W ^= C << 9 | C >>> 23, C = W + P | 0, ve ^= C << 13 | C >>> 19, C = ve + W | 0, ce ^= C << 18 | C >>> 14, C = z + G | 0, oe ^= C << 7 | C >>> 25, C = oe + z | 0, ne ^= C << 9 | C >>> 23, C = ne + oe | 0, G ^= C << 13 | C >>> 19, C = G + ne | 0, z ^= C << 18 | C >>> 14, C = je + He | 0, Te ^= C << 7 | C >>> 25, C = Te + je | 0, Oe ^= C << 9 | C >>> 23, C = Oe + Te | 0, He ^= C << 13 | C >>> 19, C = He + Oe | 0, je ^= C << 18 | C >>> 14;
      f[0] = we >>> 0 & 255, f[1] = we >>> 8 & 255, f[2] = we >>> 16 & 255, f[3] = we >>> 24 & 255, f[4] = ce >>> 0 & 255, f[5] = ce >>> 8 & 255, f[6] = ce >>> 16 & 255, f[7] = ce >>> 24 & 255, f[8] = z >>> 0 & 255, f[9] = z >>> 8 & 255, f[10] = z >>> 16 & 255, f[11] = z >>> 24 & 255, f[12] = je >>> 0 & 255, f[13] = je >>> 8 & 255, f[14] = je >>> 16 & 255, f[15] = je >>> 24 & 255, f[16] = P >>> 0 & 255, f[17] = P >>> 8 & 255, f[18] = P >>> 16 & 255, f[19] = P >>> 24 & 255, f[20] = W >>> 0 & 255, f[21] = W >>> 8 & 255, f[22] = W >>> 16 & 255, f[23] = W >>> 24 & 255, f[24] = ne >>> 0 & 255, f[25] = ne >>> 8 & 255, f[26] = ne >>> 16 & 255, f[27] = ne >>> 24 & 255, f[28] = G >>> 0 & 255, f[29] = G >>> 8 & 255, f[30] = G >>> 16 & 255, f[31] = G >>> 24 & 255
    }

    function te(f, w, h, s) {
      J(f, w, h, s)
    }

    function N(f, w, h, s) {
      q(f, w, h, s)
    }
    var X = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

    function H(f, w, h, s, v, L, $) {
      var Y = new Uint8Array(16),
        se = new Uint8Array(64),
        ye, ue;
      for (ue = 0; ue < 16; ue++) Y[ue] = 0;
      for (ue = 0; ue < 8; ue++) Y[ue] = L[ue];
      for (; v >= 64;) {
        for (te(se, Y, $, X), ue = 0; ue < 64; ue++) f[w + ue] = h[s + ue] ^ se[ue];
        for (ye = 1, ue = 8; ue < 16; ue++) ye = ye + (Y[ue] & 255) | 0, Y[ue] = ye & 255, ye >>>= 8;
        v -= 64, w += 64, s += 64
      }
      if (v > 0)
        for (te(se, Y, $, X), ue = 0; ue < v; ue++) f[w + ue] = h[s + ue] ^ se[ue];
      return 0
    }

    function D(f, w, h, s, v) {
      var L = new Uint8Array(16),
        $ = new Uint8Array(64),
        Y, se;
      for (se = 0; se < 16; se++) L[se] = 0;
      for (se = 0; se < 8; se++) L[se] = s[se];
      for (; h >= 64;) {
        for (te($, L, v, X), se = 0; se < 64; se++) f[w + se] = $[se];
        for (Y = 1, se = 8; se < 16; se++) Y = Y + (L[se] & 255) | 0, L[se] = Y & 255, Y >>>= 8;
        h -= 64, w += 64
      }
      if (h > 0)
        for (te($, L, v, X), se = 0; se < h; se++) f[w + se] = $[se];
      return 0
    }

    function M(f, w, h, s, v) {
      var L = new Uint8Array(32);
      N(L, s, v, X);
      for (var $ = new Uint8Array(8), Y = 0; Y < 8; Y++) $[Y] = s[Y + 16];
      return D(f, w, h, $, L)
    }

    function K(f, w, h, s, v, L, $) {
      var Y = new Uint8Array(32);
      N(Y, L, $, X);
      for (var se = new Uint8Array(8), ye = 0; ye < 8; ye++) se[ye] = L[ye + 16];
      return H(f, w, h, s, v, se, Y)
    }
    var I = function(f) {
      this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0;
      var w, h, s, v, L, $, Y, se;
      w = f[0] & 255 | (f[1] & 255) << 8, this.r[0] = w & 8191, h = f[2] & 255 | (f[3] & 255) << 8, this.r[1] = (w >>> 13 | h << 3) & 8191, s = f[4] & 255 | (f[5] & 255) << 8, this.r[2] = (h >>> 10 | s << 6) & 7939, v = f[6] & 255 | (f[7] & 255) << 8, this.r[3] = (s >>> 7 | v << 9) & 8191, L = f[8] & 255 | (f[9] & 255) << 8, this.r[4] = (v >>> 4 | L << 12) & 255, this.r[5] = L >>> 1 & 8190, $ = f[10] & 255 | (f[11] & 255) << 8, this.r[6] = (L >>> 14 | $ << 2) & 8191, Y = f[12] & 255 | (f[13] & 255) << 8, this.r[7] = ($ >>> 11 | Y << 5) & 8065, se = f[14] & 255 | (f[15] & 255) << 8, this.r[8] = (Y >>> 8 | se << 8) & 8191, this.r[9] = se >>> 5 & 127, this.pad[0] = f[16] & 255 | (f[17] & 255) << 8, this.pad[1] = f[18] & 255 | (f[19] & 255) << 8, this.pad[2] = f[20] & 255 | (f[21] & 255) << 8, this.pad[3] = f[22] & 255 | (f[23] & 255) << 8, this.pad[4] = f[24] & 255 | (f[25] & 255) << 8, this.pad[5] = f[26] & 255 | (f[27] & 255) << 8, this.pad[6] = f[28] & 255 | (f[29] & 255) << 8, this.pad[7] = f[30] & 255 | (f[31] & 255) << 8
    };
    I.prototype.blocks = function(f, w, h) {
      for (var s = this.fin ? 0 : 2048, v, L, $, Y, se, ye, ue, ot, ge, Me, Re, De, Ne, $e, We, Ue, we, be, fe, pe = this.h[0], ve = this.h[1], ce = this.h[2], P = this.h[3], W = this.h[4], ne = this.h[5], G = this.h[6], z = this.h[7], oe = this.h[8], Te = this.h[9], Oe = this.r[0], He = this.r[1], je = this.r[2], C = this.r[3], Ye = this.r[4], st = this.r[5], at = this.r[6], Ve = this.r[7], Je = this.r[8], Xe = this.r[9]; h >= 16;) v = f[w + 0] & 255 | (f[w + 1] & 255) << 8, pe += v & 8191, L = f[w + 2] & 255 | (f[w + 3] & 255) << 8, ve += (v >>> 13 | L << 3) & 8191, $ = f[w + 4] & 255 | (f[w + 5] & 255) << 8, ce += (L >>> 10 | $ << 6) & 8191, Y = f[w + 6] & 255 | (f[w + 7] & 255) << 8, P += ($ >>> 7 | Y << 9) & 8191, se = f[w + 8] & 255 | (f[w + 9] & 255) << 8, W += (Y >>> 4 | se << 12) & 8191, ne += se >>> 1 & 8191, ye = f[w + 10] & 255 | (f[w + 11] & 255) << 8, G += (se >>> 14 | ye << 2) & 8191, ue = f[w + 12] & 255 | (f[w + 13] & 255) << 8, z += (ye >>> 11 | ue << 5) & 8191, ot = f[w + 14] & 255 | (f[w + 15] & 255) << 8, oe += (ue >>> 8 | ot << 8) & 8191, Te += ot >>> 5 | s, ge = 0, Me = ge, Me += pe * Oe, Me += ve * (5 * Xe), Me += ce * (5 * Je), Me += P * (5 * Ve), Me += W * (5 * at), ge = Me >>> 13, Me &= 8191, Me += ne * (5 * st), Me += G * (5 * Ye), Me += z * (5 * C), Me += oe * (5 * je), Me += Te * (5 * He), ge += Me >>> 13, Me &= 8191, Re = ge, Re += pe * He, Re += ve * Oe, Re += ce * (5 * Xe), Re += P * (5 * Je), Re += W * (5 * Ve), ge = Re >>> 13, Re &= 8191, Re += ne * (5 * at), Re += G * (5 * st), Re += z * (5 * Ye), Re += oe * (5 * C), Re += Te * (5 * je), ge += Re >>> 13, Re &= 8191, De = ge, De += pe * je, De += ve * He, De += ce * Oe, De += P * (5 * Xe), De += W * (5 * Je), ge = De >>> 13, De &= 8191, De += ne * (5 * Ve), De += G * (5 * at), De += z * (5 * st), De += oe * (5 * Ye), De += Te * (5 * C), ge += De >>> 13, De &= 8191, Ne = ge, Ne += pe * C, Ne += ve * je, Ne += ce * He, Ne += P * Oe, Ne += W * (5 * Xe), ge = Ne >>> 13, Ne &= 8191, Ne += ne * (5 * Je), Ne += G * (5 * Ve), Ne += z * (5 * at), Ne += oe * (5 * st), Ne += Te * (5 * Ye), ge += Ne >>> 13, Ne &= 8191, $e = ge, $e += pe * Ye, $e += ve * C, $e += ce * je, $e += P * He, $e += W * Oe, ge = $e >>> 13, $e &= 8191, $e += ne * (5 * Xe), $e += G * (5 * Je), $e += z * (5 * Ve), $e += oe * (5 * at), $e += Te * (5 * st), ge += $e >>> 13, $e &= 8191, We = ge, We += pe * st, We += ve * Ye, We += ce * C, We += P * je, We += W * He, ge = We >>> 13, We &= 8191, We += ne * Oe, We += G * (5 * Xe), We += z * (5 * Je), We += oe * (5 * Ve), We += Te * (5 * at), ge += We >>> 13, We &= 8191, Ue = ge, Ue += pe * at, Ue += ve * st, Ue += ce * Ye, Ue += P * C, Ue += W * je, ge = Ue >>> 13, Ue &= 8191, Ue += ne * He, Ue += G * Oe, Ue += z * (5 * Xe), Ue += oe * (5 * Je), Ue += Te * (5 * Ve), ge += Ue >>> 13, Ue &= 8191, we = ge, we += pe * Ve, we += ve * at, we += ce * st, we += P * Ye, we += W * C, ge = we >>> 13, we &= 8191, we += ne * je, we += G * He, we += z * Oe, we += oe * (5 * Xe), we += Te * (5 * Je), ge += we >>> 13, we &= 8191, be = ge, be += pe * Je, be += ve * Ve, be += ce * at, be += P * st, be += W * Ye, ge = be >>> 13, be &= 8191, be += ne * C, be += G * je, be += z * He, be += oe * Oe, be += Te * (5 * Xe), ge += be >>> 13, be &= 8191, fe = ge, fe += pe * Xe, fe += ve * Je, fe += ce * Ve, fe += P * at, fe += W * st, ge = fe >>> 13, fe &= 8191, fe += ne * Ye, fe += G * C, fe += z * je, fe += oe * He, fe += Te * Oe, ge += fe >>> 13, fe &= 8191, ge = (ge << 2) + ge | 0, ge = ge + Me | 0, Me = ge & 8191, ge = ge >>> 13, Re += ge, pe = Me, ve = Re, ce = De, P = Ne, W = $e, ne = We, G = Ue, z = we, oe = be, Te = fe, w += 16, h -= 16;
      this.h[0] = pe, this.h[1] = ve, this.h[2] = ce, this.h[3] = P, this.h[4] = W, this.h[5] = ne, this.h[6] = G, this.h[7] = z, this.h[8] = oe, this.h[9] = Te
    }, I.prototype.finish = function(f, w) {
      var h = new Uint16Array(10),
        s, v, L, $;
      if (this.leftover) {
        for ($ = this.leftover, this.buffer[$++] = 1; $ < 16; $++) this.buffer[$] = 0;
        this.fin = 1, this.blocks(this.buffer, 0, 16)
      }
      for (s = this.h[1] >>> 13, this.h[1] &= 8191, $ = 2; $ < 10; $++) this.h[$] += s, s = this.h[$] >>> 13, this.h[$] &= 8191;
      for (this.h[0] += s * 5, s = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += s, s = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += s, h[0] = this.h[0] + 5, s = h[0] >>> 13, h[0] &= 8191, $ = 1; $ < 10; $++) h[$] = this.h[$] + s, s = h[$] >>> 13, h[$] &= 8191;
      for (h[9] -= 8192, v = (s ^ 1) - 1, $ = 0; $ < 10; $++) h[$] &= v;
      for (v = ~v, $ = 0; $ < 10; $++) this.h[$] = this.h[$] & v | h[$];
      for (this.h[0] = (this.h[0] | this.h[1] << 13) & 65535, this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535, this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535, this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535, this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535, this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535, this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535, this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535, L = this.h[0] + this.pad[0], this.h[0] = L & 65535, $ = 1; $ < 8; $++) L = (this.h[$] + this.pad[$] | 0) + (L >>> 16) | 0, this.h[$] = L & 65535;
      f[w + 0] = this.h[0] >>> 0 & 255, f[w + 1] = this.h[0] >>> 8 & 255, f[w + 2] = this.h[1] >>> 0 & 255, f[w + 3] = this.h[1] >>> 8 & 255, f[w + 4] = this.h[2] >>> 0 & 255, f[w + 5] = this.h[2] >>> 8 & 255, f[w + 6] = this.h[3] >>> 0 & 255, f[w + 7] = this.h[3] >>> 8 & 255, f[w + 8] = this.h[4] >>> 0 & 255, f[w + 9] = this.h[4] >>> 8 & 255, f[w + 10] = this.h[5] >>> 0 & 255, f[w + 11] = this.h[5] >>> 8 & 255, f[w + 12] = this.h[6] >>> 0 & 255, f[w + 13] = this.h[6] >>> 8 & 255, f[w + 14] = this.h[7] >>> 0 & 255, f[w + 15] = this.h[7] >>> 8 & 255
    }, I.prototype.update = function(f, w, h) {
      var s, v;
      if (this.leftover) {
        for (v = 16 - this.leftover, v > h && (v = h), s = 0; s < v; s++) this.buffer[this.leftover + s] = f[w + s];
        if (h -= v, w += v, this.leftover += v, this.leftover < 16) return;
        this.blocks(this.buffer, 0, 16), this.leftover = 0
      }
      if (h >= 16 && (v = h - h % 16, this.blocks(f, w, v), w += v, h -= v), h) {
        for (s = 0; s < h; s++) this.buffer[this.leftover + s] = f[w + s];
        this.leftover += h
      }
    };

    function k(f, w, h, s, v, L) {
      var $ = new I(L);
      return $.update(h, s, v), $.finish(f, w), 0
    }

    function ie(f, w, h, s, v, L) {
      var $ = new Uint8Array(16);
      return k($, 0, h, s, v, L), U(f, w, $, 0)
    }

    function ee(f, w, h, s, v) {
      var L;
      if (h < 32) return -1;
      for (K(f, 0, w, 0, h, s, v), k(f, 16, f, 32, h - 32, f), L = 0; L < 16; L++) f[L] = 0;
      return 0
    }

    function re(f, w, h, s, v) {
      var L, $ = new Uint8Array(32);
      if (h < 32 || (M($, 0, 32, s, v), ie(w, 16, w, 32, h - 32, $) !== 0)) return -1;
      for (K(f, 0, w, 0, h, s, v), L = 0; L < 32; L++) f[L] = 0;
      return 0
    }

    function Se(f, w) {
      var h;
      for (h = 0; h < 16; h++) f[h] = w[h] | 0
    }

    function Le(f) {
      var w, h, s = 1;
      for (w = 0; w < 16; w++) h = f[w] + s + 65535, s = Math.floor(h / 65536), f[w] = h - s * 65536;
      f[0] += s - 1 + 37 * (s - 1)
    }

    function Ze(f, w, h) {
      for (var s, v = ~(h - 1), L = 0; L < 16; L++) s = v & (f[L] ^ w[L]), f[L] ^= s, w[L] ^= s
    }

    function tt(f, w) {
      var h, s, v, L = n(),
        $ = n();
      for (h = 0; h < 16; h++) $[h] = w[h];
      for (Le($), Le($), Le($), s = 0; s < 2; s++) {
        for (L[0] = $[0] - 65517, h = 1; h < 15; h++) L[h] = $[h] - 65535 - (L[h - 1] >> 16 & 1), L[h - 1] &= 65535;
        L[15] = $[15] - 32767 - (L[14] >> 16 & 1), v = L[15] >> 16 & 1, L[14] &= 65535, Ze($, L, 1 - v)
      }
      for (h = 0; h < 16; h++) f[2 * h] = $[h] & 255, f[2 * h + 1] = $[h] >> 8
    }

    function xt(f, w) {
      var h = new Uint8Array(32),
        s = new Uint8Array(32);
      return tt(h, f), tt(s, w), ae(h, 0, s, 0)
    }

    function ze(f) {
      var w = new Uint8Array(32);
      return tt(w, f), w[0] & 1
    }

    function Qe(f, w) {
      var h;
      for (h = 0; h < 16; h++) f[h] = w[2 * h] + (w[2 * h + 1] << 8);
      f[15] &= 32767
    }

    function ft(f, w, h) {
      for (var s = 0; s < 16; s++) f[s] = w[s] + h[s]
    }

    function bt(f, w, h) {
      for (var s = 0; s < 16; s++) f[s] = w[s] - h[s]
    }

    function Pe(f, w, h) {
      var s, v, L = 0,
        $ = 0,
        Y = 0,
        se = 0,
        ye = 0,
        ue = 0,
        ot = 0,
        ge = 0,
        Me = 0,
        Re = 0,
        De = 0,
        Ne = 0,
        $e = 0,
        We = 0,
        Ue = 0,
        we = 0,
        be = 0,
        fe = 0,
        pe = 0,
        ve = 0,
        ce = 0,
        P = 0,
        W = 0,
        ne = 0,
        G = 0,
        z = 0,
        oe = 0,
        Te = 0,
        Oe = 0,
        He = 0,
        je = 0,
        C = h[0],
        Ye = h[1],
        st = h[2],
        at = h[3],
        Ve = h[4],
        Je = h[5],
        Xe = h[6],
        Mt = h[7],
        ht = h[8],
        Tt = h[9],
        Bt = h[10],
        Lt = h[11],
        Ut = h[12],
        Vt = h[13],
        qt = h[14],
        Gt = h[15];
      s = w[0], L += s * C, $ += s * Ye, Y += s * st, se += s * at, ye += s * Ve, ue += s * Je, ot += s * Xe, ge += s * Mt, Me += s * ht, Re += s * Tt, De += s * Bt, Ne += s * Lt, $e += s * Ut, We += s * Vt, Ue += s * qt, we += s * Gt, s = w[1], $ += s * C, Y += s * Ye, se += s * st, ye += s * at, ue += s * Ve, ot += s * Je, ge += s * Xe, Me += s * Mt, Re += s * ht, De += s * Tt, Ne += s * Bt, $e += s * Lt, We += s * Ut, Ue += s * Vt, we += s * qt, be += s * Gt, s = w[2], Y += s * C, se += s * Ye, ye += s * st, ue += s * at, ot += s * Ve, ge += s * Je, Me += s * Xe, Re += s * Mt, De += s * ht, Ne += s * Tt, $e += s * Bt, We += s * Lt, Ue += s * Ut, we += s * Vt, be += s * qt, fe += s * Gt, s = w[3], se += s * C, ye += s * Ye, ue += s * st, ot += s * at, ge += s * Ve, Me += s * Je, Re += s * Xe, De += s * Mt, Ne += s * ht, $e += s * Tt, We += s * Bt, Ue += s * Lt, we += s * Ut, be += s * Vt, fe += s * qt, pe += s * Gt, s = w[4], ye += s * C, ue += s * Ye, ot += s * st, ge += s * at, Me += s * Ve, Re += s * Je, De += s * Xe, Ne += s * Mt, $e += s * ht, We += s * Tt, Ue += s * Bt, we += s * Lt, be += s * Ut, fe += s * Vt, pe += s * qt, ve += s * Gt, s = w[5], ue += s * C, ot += s * Ye, ge += s * st, Me += s * at, Re += s * Ve, De += s * Je, Ne += s * Xe, $e += s * Mt, We += s * ht, Ue += s * Tt, we += s * Bt, be += s * Lt, fe += s * Ut, pe += s * Vt, ve += s * qt, ce += s * Gt, s = w[6], ot += s * C, ge += s * Ye, Me += s * st, Re += s * at, De += s * Ve, Ne += s * Je, $e += s * Xe, We += s * Mt, Ue += s * ht, we += s * Tt, be += s * Bt, fe += s * Lt, pe += s * Ut, ve += s * Vt, ce += s * qt, P += s * Gt, s = w[7], ge += s * C, Me += s * Ye, Re += s * st, De += s * at, Ne += s * Ve, $e += s * Je, We += s * Xe, Ue += s * Mt, we += s * ht, be += s * Tt, fe += s * Bt, pe += s * Lt, ve += s * Ut, ce += s * Vt, P += s * qt, W += s * Gt, s = w[8], Me += s * C, Re += s * Ye, De += s * st, Ne += s * at, $e += s * Ve, We += s * Je, Ue += s * Xe, we += s * Mt, be += s * ht, fe += s * Tt, pe += s * Bt, ve += s * Lt, ce += s * Ut, P += s * Vt, W += s * qt, ne += s * Gt, s = w[9], Re += s * C, De += s * Ye, Ne += s * st, $e += s * at, We += s * Ve, Ue += s * Je, we += s * Xe, be += s * Mt, fe += s * ht, pe += s * Tt, ve += s * Bt, ce += s * Lt, P += s * Ut, W += s * Vt, ne += s * qt, G += s * Gt, s = w[10], De += s * C, Ne += s * Ye, $e += s * st, We += s * at, Ue += s * Ve, we += s * Je, be += s * Xe, fe += s * Mt, pe += s * ht, ve += s * Tt, ce += s * Bt, P += s * Lt, W += s * Ut, ne += s * Vt, G += s * qt, z += s * Gt, s = w[11], Ne += s * C, $e += s * Ye, We += s * st, Ue += s * at, we += s * Ve, be += s * Je, fe += s * Xe, pe += s * Mt, ve += s * ht, ce += s * Tt, P += s * Bt, W += s * Lt, ne += s * Ut, G += s * Vt, z += s * qt, oe += s * Gt, s = w[12], $e += s * C, We += s * Ye, Ue += s * st, we += s * at, be += s * Ve, fe += s * Je, pe += s * Xe, ve += s * Mt, ce += s * ht, P += s * Tt, W += s * Bt, ne += s * Lt, G += s * Ut, z += s * Vt, oe += s * qt, Te += s * Gt, s = w[13], We += s * C, Ue += s * Ye, we += s * st, be += s * at, fe += s * Ve, pe += s * Je, ve += s * Xe, ce += s * Mt, P += s * ht, W += s * Tt, ne += s * Bt, G += s * Lt, z += s * Ut, oe += s * Vt, Te += s * qt, Oe += s * Gt, s = w[14], Ue += s * C, we += s * Ye, be += s * st, fe += s * at, pe += s * Ve, ve += s * Je, ce += s * Xe, P += s * Mt, W += s * ht, ne += s * Tt, G += s * Bt, z += s * Lt, oe += s * Ut, Te += s * Vt, Oe += s * qt, He += s * Gt, s = w[15], we += s * C, be += s * Ye, fe += s * st, pe += s * at, ve += s * Ve, ce += s * Je, P += s * Xe, W += s * Mt, ne += s * ht, G += s * Tt, z += s * Bt, oe += s * Lt, Te += s * Ut, Oe += s * Vt, He += s * qt, je += s * Gt, L += 38 * be, $ += 38 * fe, Y += 38 * pe, se += 38 * ve, ye += 38 * ce, ue += 38 * P, ot += 38 * W, ge += 38 * ne, Me += 38 * G, Re += 38 * z, De += 38 * oe, Ne += 38 * Te, $e += 38 * Oe, We += 38 * He, Ue += 38 * je, v = 1, s = L + v + 65535, v = Math.floor(s / 65536), L = s - v * 65536, s = $ + v + 65535, v = Math.floor(s / 65536), $ = s - v * 65536, s = Y + v + 65535, v = Math.floor(s / 65536), Y = s - v * 65536, s = se + v + 65535, v = Math.floor(s / 65536), se = s - v * 65536, s = ye + v + 65535, v = Math.floor(s / 65536), ye = s - v * 65536, s = ue + v + 65535, v = Math.floor(s / 65536), ue = s - v * 65536, s = ot + v + 65535, v = Math.floor(s / 65536), ot = s - v * 65536, s = ge + v + 65535, v = Math.floor(s / 65536), ge = s - v * 65536, s = Me + v + 65535, v = Math.floor(s / 65536), Me = s - v * 65536, s = Re + v + 65535, v = Math.floor(s / 65536), Re = s - v * 65536, s = De + v + 65535, v = Math.floor(s / 65536), De = s - v * 65536, s = Ne + v + 65535, v = Math.floor(s / 65536), Ne = s - v * 65536, s = $e + v + 65535, v = Math.floor(s / 65536), $e = s - v * 65536, s = We + v + 65535, v = Math.floor(s / 65536), We = s - v * 65536, s = Ue + v + 65535, v = Math.floor(s / 65536), Ue = s - v * 65536, s = we + v + 65535, v = Math.floor(s / 65536), we = s - v * 65536, L += v - 1 + 37 * (v - 1), v = 1, s = L + v + 65535, v = Math.floor(s / 65536), L = s - v * 65536, s = $ + v + 65535, v = Math.floor(s / 65536), $ = s - v * 65536, s = Y + v + 65535, v = Math.floor(s / 65536), Y = s - v * 65536, s = se + v + 65535, v = Math.floor(s / 65536), se = s - v * 65536, s = ye + v + 65535, v = Math.floor(s / 65536), ye = s - v * 65536, s = ue + v + 65535, v = Math.floor(s / 65536), ue = s - v * 65536, s = ot + v + 65535, v = Math.floor(s / 65536), ot = s - v * 65536, s = ge + v + 65535, v = Math.floor(s / 65536), ge = s - v * 65536, s = Me + v + 65535, v = Math.floor(s / 65536), Me = s - v * 65536, s = Re + v + 65535, v = Math.floor(s / 65536), Re = s - v * 65536, s = De + v + 65535, v = Math.floor(s / 65536), De = s - v * 65536, s = Ne + v + 65535, v = Math.floor(s / 65536), Ne = s - v * 65536, s = $e + v + 65535, v = Math.floor(s / 65536), $e = s - v * 65536, s = We + v + 65535, v = Math.floor(s / 65536), We = s - v * 65536, s = Ue + v + 65535, v = Math.floor(s / 65536), Ue = s - v * 65536, s = we + v + 65535, v = Math.floor(s / 65536), we = s - v * 65536, L += v - 1 + 37 * (v - 1), f[0] = L, f[1] = $, f[2] = Y, f[3] = se, f[4] = ye, f[5] = ue, f[6] = ot, f[7] = ge, f[8] = Me, f[9] = Re, f[10] = De, f[11] = Ne, f[12] = $e, f[13] = We, f[14] = Ue, f[15] = we
    }

    function yt(f, w) {
      Pe(f, w, w)
    }

    function an(f, w) {
      var h = n(),
        s;
      for (s = 0; s < 16; s++) h[s] = w[s];
      for (s = 253; s >= 0; s--) yt(h, h), s !== 2 && s !== 4 && Pe(h, h, w);
      for (s = 0; s < 16; s++) f[s] = h[s]
    }

    function j(f, w) {
      var h = n(),
        s;
      for (s = 0; s < 16; s++) h[s] = w[s];
      for (s = 250; s >= 0; s--) yt(h, h), s !== 1 && Pe(h, h, w);
      for (s = 0; s < 16; s++) f[s] = h[s]
    }

    function V(f, w, h) {
      var s = new Uint8Array(32),
        v = new Float64Array(80),
        L, $, Y = n(),
        se = n(),
        ye = n(),
        ue = n(),
        ot = n(),
        ge = n();
      for ($ = 0; $ < 31; $++) s[$] = w[$];
      for (s[31] = w[31] & 127 | 64, s[0] &= 248, Qe(v, h), $ = 0; $ < 16; $++) se[$] = v[$], ue[$] = Y[$] = ye[$] = 0;
      for (Y[0] = ue[0] = 1, $ = 254; $ >= 0; --$) L = s[$ >>> 3] >>> ($ & 7) & 1, Ze(Y, se, L), Ze(ye, ue, L), ft(ot, Y, ye), bt(Y, Y, ye), ft(ye, se, ue), bt(se, se, ue), yt(ue, ot), yt(ge, Y), Pe(Y, ye, Y), Pe(ye, se, ot), ft(ot, Y, ye), bt(Y, Y, ye), yt(se, Y), bt(ye, ue, ge), Pe(Y, ye, p), ft(Y, Y, ue), Pe(ye, ye, Y), Pe(Y, ue, ge), Pe(ue, se, v), yt(se, ot), Ze(Y, se, L), Ze(ye, ue, L);
      for ($ = 0; $ < 16; $++) v[$ + 16] = Y[$], v[$ + 32] = ye[$], v[$ + 48] = se[$], v[$ + 64] = ue[$];
      var Me = v.subarray(32),
        Re = v.subarray(16);
      return an(Me, Me), Pe(Re, Re, Me), tt(f, Re), 0
    }

    function F(f, w) {
      return V(f, w, o)
    }

    function Z(f, w) {
      return r(w, 32), F(f, w)
    }

    function Q(f, w, h) {
      var s = new Uint8Array(32);
      return V(s, h, w), N(f, i, s, X)
    }
    var le = ee,
      xe = re;

    function me(f, w, h, s, v, L) {
      var $ = new Uint8Array(32);
      return Q($, v, L), le(f, w, h, s, $)
    }

    function ct(f, w, h, s, v, L) {
      var $ = new Uint8Array(32);
      return Q($, v, L), xe(f, w, h, s, $)
    }
    var dt = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

    function _e(f, w, h, s) {
      for (var v = new Int32Array(16), L = new Int32Array(16), $, Y, se, ye, ue, ot, ge, Me, Re, De, Ne, $e, We, Ue, we, be, fe, pe, ve, ce, P, W, ne, G, z, oe, Te = f[0], Oe = f[1], He = f[2], je = f[3], C = f[4], Ye = f[5], st = f[6], at = f[7], Ve = w[0], Je = w[1], Xe = w[2], Mt = w[3], ht = w[4], Tt = w[5], Bt = w[6], Lt = w[7], Ut = 0; s >= 128;) {
        for (ve = 0; ve < 16; ve++) ce = 8 * ve + Ut, v[ve] = h[ce + 0] << 24 | h[ce + 1] << 16 | h[ce + 2] << 8 | h[ce + 3], L[ve] = h[ce + 4] << 24 | h[ce + 5] << 16 | h[ce + 6] << 8 | h[ce + 7];
        for (ve = 0; ve < 80; ve++)
          if ($ = Te, Y = Oe, se = He, ye = je, ue = C, ot = Ye, ge = st, Me = at, Re = Ve, De = Je, Ne = Xe, $e = Mt, We = ht, Ue = Tt, we = Bt, be = Lt, P = at, W = Lt, ne = W & 65535, G = W >>> 16, z = P & 65535, oe = P >>> 16, P = (C >>> 14 | ht << 18) ^ (C >>> 18 | ht << 14) ^ (ht >>> 9 | C << 23), W = (ht >>> 14 | C << 18) ^ (ht >>> 18 | C << 14) ^ (C >>> 9 | ht << 23), ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, P = C & Ye ^ ~C & st, W = ht & Tt ^ ~ht & Bt, ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, P = dt[ve * 2], W = dt[ve * 2 + 1], ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, P = v[ve % 16], W = L[ve % 16], ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, G += ne >>> 16, z += G >>> 16, oe += z >>> 16, fe = z & 65535 | oe << 16, pe = ne & 65535 | G << 16, P = fe, W = pe, ne = W & 65535, G = W >>> 16, z = P & 65535, oe = P >>> 16, P = (Te >>> 28 | Ve << 4) ^ (Ve >>> 2 | Te << 30) ^ (Ve >>> 7 | Te << 25), W = (Ve >>> 28 | Te << 4) ^ (Te >>> 2 | Ve << 30) ^ (Te >>> 7 | Ve << 25), ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, P = Te & Oe ^ Te & He ^ Oe & He, W = Ve & Je ^ Ve & Xe ^ Je & Xe, ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, G += ne >>> 16, z += G >>> 16, oe += z >>> 16, Me = z & 65535 | oe << 16, be = ne & 65535 | G << 16, P = ye, W = $e, ne = W & 65535, G = W >>> 16, z = P & 65535, oe = P >>> 16, P = fe, W = pe, ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, G += ne >>> 16, z += G >>> 16, oe += z >>> 16, ye = z & 65535 | oe << 16, $e = ne & 65535 | G << 16, Oe = $, He = Y, je = se, C = ye, Ye = ue, st = ot, at = ge, Te = Me, Je = Re, Xe = De, Mt = Ne, ht = $e, Tt = We, Bt = Ue, Lt = we, Ve = be, ve % 16 === 15)
            for (ce = 0; ce < 16; ce++) P = v[ce], W = L[ce], ne = W & 65535, G = W >>> 16, z = P & 65535, oe = P >>> 16, P = v[(ce + 9) % 16], W = L[(ce + 9) % 16], ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, fe = v[(ce + 1) % 16], pe = L[(ce + 1) % 16], P = (fe >>> 1 | pe << 31) ^ (fe >>> 8 | pe << 24) ^ fe >>> 7, W = (pe >>> 1 | fe << 31) ^ (pe >>> 8 | fe << 24) ^ (pe >>> 7 | fe << 25), ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, fe = v[(ce + 14) % 16], pe = L[(ce + 14) % 16], P = (fe >>> 19 | pe << 13) ^ (pe >>> 29 | fe << 3) ^ fe >>> 6, W = (pe >>> 19 | fe << 13) ^ (fe >>> 29 | pe << 3) ^ (pe >>> 6 | fe << 26), ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, G += ne >>> 16, z += G >>> 16, oe += z >>> 16, v[ce] = z & 65535 | oe << 16, L[ce] = ne & 65535 | G << 16;
        P = Te, W = Ve, ne = W & 65535, G = W >>> 16, z = P & 65535, oe = P >>> 16, P = f[0], W = w[0], ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, G += ne >>> 16, z += G >>> 16, oe += z >>> 16, f[0] = Te = z & 65535 | oe << 16, w[0] = Ve = ne & 65535 | G << 16, P = Oe, W = Je, ne = W & 65535, G = W >>> 16, z = P & 65535, oe = P >>> 16, P = f[1], W = w[1], ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, G += ne >>> 16, z += G >>> 16, oe += z >>> 16, f[1] = Oe = z & 65535 | oe << 16, w[1] = Je = ne & 65535 | G << 16, P = He, W = Xe, ne = W & 65535, G = W >>> 16, z = P & 65535, oe = P >>> 16, P = f[2], W = w[2], ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, G += ne >>> 16, z += G >>> 16, oe += z >>> 16, f[2] = He = z & 65535 | oe << 16, w[2] = Xe = ne & 65535 | G << 16, P = je, W = Mt, ne = W & 65535, G = W >>> 16, z = P & 65535, oe = P >>> 16, P = f[3], W = w[3], ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, G += ne >>> 16, z += G >>> 16, oe += z >>> 16, f[3] = je = z & 65535 | oe << 16, w[3] = Mt = ne & 65535 | G << 16, P = C, W = ht, ne = W & 65535, G = W >>> 16, z = P & 65535, oe = P >>> 16, P = f[4], W = w[4], ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, G += ne >>> 16, z += G >>> 16, oe += z >>> 16, f[4] = C = z & 65535 | oe << 16, w[4] = ht = ne & 65535 | G << 16, P = Ye, W = Tt, ne = W & 65535, G = W >>> 16, z = P & 65535, oe = P >>> 16, P = f[5], W = w[5], ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, G += ne >>> 16, z += G >>> 16, oe += z >>> 16, f[5] = Ye = z & 65535 | oe << 16, w[5] = Tt = ne & 65535 | G << 16, P = st, W = Bt, ne = W & 65535, G = W >>> 16, z = P & 65535, oe = P >>> 16, P = f[6], W = w[6], ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, G += ne >>> 16, z += G >>> 16, oe += z >>> 16, f[6] = st = z & 65535 | oe << 16, w[6] = Bt = ne & 65535 | G << 16, P = at, W = Lt, ne = W & 65535, G = W >>> 16, z = P & 65535, oe = P >>> 16, P = f[7], W = w[7], ne += W & 65535, G += W >>> 16, z += P & 65535, oe += P >>> 16, G += ne >>> 16, z += G >>> 16, oe += z >>> 16, f[7] = at = z & 65535 | oe << 16, w[7] = Lt = ne & 65535 | G << 16, Ut += 128, s -= 128
      }
      return s
    }

    function pt(f, w, h) {
      var s = new Int32Array(8),
        v = new Int32Array(8),
        L = new Uint8Array(256),
        $, Y = h;
      for (s[0] = 1779033703, s[1] = 3144134277, s[2] = 1013904242, s[3] = 2773480762, s[4] = 1359893119, s[5] = 2600822924, s[6] = 528734635, s[7] = 1541459225, v[0] = 4089235720, v[1] = 2227873595, v[2] = 4271175723, v[3] = 1595750129, v[4] = 2917565137, v[5] = 725511199, v[6] = 4215389547, v[7] = 327033209, _e(s, v, w, h), h %= 128, $ = 0; $ < h; $++) L[$] = w[Y - h + $];
      for (L[h] = 128, h = 256 - 128 * (h < 112 ? 1 : 0), L[h - 9] = 0, _(L, h - 8, Y / 536870912 | 0, Y << 3), _e(s, v, L, h), $ = 0; $ < 8; $++) _(f, 8 * $, s[$], v[$]);
      return 0
    }

    function _t(f, w) {
      var h = n(),
        s = n(),
        v = n(),
        L = n(),
        $ = n(),
        Y = n(),
        se = n(),
        ye = n(),
        ue = n();
      bt(h, f[1], f[0]), bt(ue, w[1], w[0]), Pe(h, h, ue), ft(s, f[0], f[1]), ft(ue, w[0], w[1]), Pe(s, s, ue), Pe(v, f[3], w[3]), Pe(v, v, y), Pe(L, f[2], w[2]), ft(L, L, L), bt($, s, h), bt(Y, L, v), ft(se, L, v), ft(ye, s, h), Pe(f[0], $, Y), Pe(f[1], ye, se), Pe(f[2], se, Y), Pe(f[3], $, ye)
    }

    function Jt(f, w, h) {
      var s;
      for (s = 0; s < 4; s++) Ze(f[s], w[s], h)
    }

    function $t(f, w) {
      var h = n(),
        s = n(),
        v = n();
      an(v, w[2]), Pe(h, w[0], v), Pe(s, w[1], v), tt(f, s), f[31] ^= ze(h) << 7
    }

    function At(f, w, h) {
      var s, v;
      for (Se(f[0], c), Se(f[1], a), Se(f[2], a), Se(f[3], c), v = 255; v >= 0; --v) s = h[v / 8 | 0] >> (v & 7) & 1, Jt(f, w, s), _t(w, f), _t(f, f), Jt(f, w, s)
    }

    function Ot(f, w) {
      var h = [n(), n(), n(), n()];
      Se(h[0], E), Se(h[1], b), Se(h[2], a), Pe(h[3], E, b), At(f, h, w)
    }

    function kt(f, w, h) {
      var s = new Uint8Array(64),
        v = [n(), n(), n(), n()],
        L;
      for (h || r(w, 32), pt(s, w, 32), s[0] &= 248, s[31] &= 127, s[31] |= 64, Ot(v, s), $t(f, v), L = 0; L < 32; L++) w[L + 32] = f[L];
      return 0
    }
    var Fe = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

    function d(f, w) {
      var h, s, v, L;
      for (s = 63; s >= 32; --s) {
        for (h = 0, v = s - 32, L = s - 12; v < L; ++v) w[v] += h - 16 * w[s] * Fe[v - (s - 32)], h = Math.floor((w[v] + 128) / 256), w[v] -= h * 256;
        w[v] += h, w[s] = 0
      }
      for (h = 0, v = 0; v < 32; v++) w[v] += h - (w[31] >> 4) * Fe[v], h = w[v] >> 8, w[v] &= 255;
      for (v = 0; v < 32; v++) w[v] -= h * Fe[v];
      for (s = 0; s < 32; s++) w[s + 1] += w[s] >> 8, f[s] = w[s] & 255
    }

    function l(f) {
      var w = new Float64Array(64),
        h;
      for (h = 0; h < 64; h++) w[h] = f[h];
      for (h = 0; h < 64; h++) f[h] = 0;
      d(f, w)
    }

    function u(f, w, h, s) {
      var v = new Uint8Array(64),
        L = new Uint8Array(64),
        $ = new Uint8Array(64),
        Y, se, ye = new Float64Array(64),
        ue = [n(), n(), n(), n()];
      pt(v, s, 32), v[0] &= 248, v[31] &= 127, v[31] |= 64;
      var ot = h + 64;
      for (Y = 0; Y < h; Y++) f[64 + Y] = w[Y];
      for (Y = 0; Y < 32; Y++) f[32 + Y] = v[32 + Y];
      for (pt($, f.subarray(32), h + 32), l($), Ot(ue, $), $t(f, ue), Y = 32; Y < 64; Y++) f[Y] = s[Y];
      for (pt(L, f, h + 64), l(L), Y = 0; Y < 64; Y++) ye[Y] = 0;
      for (Y = 0; Y < 32; Y++) ye[Y] = $[Y];
      for (Y = 0; Y < 32; Y++)
        for (se = 0; se < 32; se++) ye[Y + se] += L[Y] * v[se];
      return d(f.subarray(32), ye), ot
    }

    function x(f, w) {
      var h = n(),
        s = n(),
        v = n(),
        L = n(),
        $ = n(),
        Y = n(),
        se = n();
      return Se(f[2], a), Qe(f[1], w), yt(v, f[1]), Pe(L, v, m), bt(v, v, f[2]), ft(L, f[2], L), yt($, L), yt(Y, $), Pe(se, Y, $), Pe(h, se, v), Pe(h, h, L), j(h, h), Pe(h, h, v), Pe(h, h, L), Pe(h, h, L), Pe(f[0], h, L), yt(s, f[0]), Pe(s, s, L), xt(s, v) && Pe(f[0], f[0], A), yt(s, f[0]), Pe(s, s, L), xt(s, v) ? -1 : (ze(f[0]) === w[31] >> 7 && bt(f[0], c, f[0]), Pe(f[3], f[0], f[1]), 0)
    }

    function S(f, w, h, s) {
      var v, L = new Uint8Array(32),
        $ = new Uint8Array(64),
        Y = [n(), n(), n(), n()],
        se = [n(), n(), n(), n()];
      if (h < 64 || x(se, s)) return -1;
      for (v = 0; v < h; v++) f[v] = w[v];
      for (v = 0; v < 32; v++) f[v + 32] = s[v];
      if (pt($, f, h), l($), At(Y, se, $), Ot(se, w.subarray(32)), _t(Y, se), $t(L, Y), h -= 64, ae(w, 0, L, 0)) {
        for (v = 0; v < h; v++) f[v] = 0;
        return -1
      }
      for (v = 0; v < h; v++) f[v] = w[v + 64];
      return h
    }
    var B = 32,
      R = 24,
      Ae = 32,
      nt = 16,
      rt = 32,
      mt = 32,
      it = 32,
      br = 32,
      Qi = 32,
      vs = R,
      Pl = Ae,
      Wl = nt,
      Cn = 64,
      Zn = 32,
      ir = 64,
      Ji = 32,
      Xi = 64;
    t.lowlevel = {
      crypto_core_hsalsa20: N,
      crypto_stream_xor: K,
      crypto_stream: M,
      crypto_stream_salsa20_xor: H,
      crypto_stream_salsa20: D,
      crypto_onetimeauth: k,
      crypto_onetimeauth_verify: ie,
      crypto_verify_16: U,
      crypto_verify_32: ae,
      crypto_secretbox: ee,
      crypto_secretbox_open: re,
      crypto_scalarmult: V,
      crypto_scalarmult_base: F,
      crypto_box_beforenm: Q,
      crypto_box_afternm: le,
      crypto_box: me,
      crypto_box_open: ct,
      crypto_box_keypair: Z,
      crypto_hash: pt,
      crypto_sign: u,
      crypto_sign_keypair: kt,
      crypto_sign_open: S,
      crypto_secretbox_KEYBYTES: B,
      crypto_secretbox_NONCEBYTES: R,
      crypto_secretbox_ZEROBYTES: Ae,
      crypto_secretbox_BOXZEROBYTES: nt,
      crypto_scalarmult_BYTES: rt,
      crypto_scalarmult_SCALARBYTES: mt,
      crypto_box_PUBLICKEYBYTES: it,
      crypto_box_SECRETKEYBYTES: br,
      crypto_box_BEFORENMBYTES: Qi,
      crypto_box_NONCEBYTES: vs,
      crypto_box_ZEROBYTES: Pl,
      crypto_box_BOXZEROBYTES: Wl,
      crypto_sign_BYTES: Cn,
      crypto_sign_PUBLICKEYBYTES: Zn,
      crypto_sign_SECRETKEYBYTES: ir,
      crypto_sign_SEEDBYTES: Ji,
      crypto_hash_BYTES: Xi,
      gf: n,
      D: m,
      L: Fe,
      pack25519: tt,
      unpack25519: Qe,
      M: Pe,
      A: ft,
      S: yt,
      Z: bt,
      pow2523: j,
      add: _t,
      set25519: Se,
      modL: d,
      scalarmult: At,
      scalarbase: Ot
    };

    function ys(f, w) {
      if (f.length !== B) throw new Error("bad key size");
      if (w.length !== R) throw new Error("bad nonce size")
    }

    function Nl(f, w) {
      if (f.length !== it) throw new Error("bad public key size");
      if (w.length !== br) throw new Error("bad secret key size")
    }

    function Xt() {
      for (var f = 0; f < arguments.length; f++)
        if (!(arguments[f] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array")
    }

    function xs(f) {
      for (var w = 0; w < f.length; w++) f[w] = 0
    }
    t.randomBytes = function(f) {
        var w = new Uint8Array(f);
        return r(w, f), w
      }, t.secretbox = function(f, w, h) {
        Xt(f, w, h), ys(h, w);
        for (var s = new Uint8Array(Ae + f.length), v = new Uint8Array(s.length), L = 0; L < f.length; L++) s[L + Ae] = f[L];
        return ee(v, s, s.length, w, h), v.subarray(nt)
      }, t.secretbox.open = function(f, w, h) {
        Xt(f, w, h), ys(h, w);
        for (var s = new Uint8Array(nt + f.length), v = new Uint8Array(s.length), L = 0; L < f.length; L++) s[L + nt] = f[L];
        return s.length < 32 || re(v, s, s.length, w, h) !== 0 ? null : v.subarray(Ae)
      }, t.secretbox.keyLength = B, t.secretbox.nonceLength = R, t.secretbox.overheadLength = nt, t.scalarMult = function(f, w) {
        if (Xt(f, w), f.length !== mt) throw new Error("bad n size");
        if (w.length !== rt) throw new Error("bad p size");
        var h = new Uint8Array(rt);
        return V(h, f, w), h
      }, t.scalarMult.base = function(f) {
        if (Xt(f), f.length !== mt) throw new Error("bad n size");
        var w = new Uint8Array(rt);
        return F(w, f), w
      }, t.scalarMult.scalarLength = mt, t.scalarMult.groupElementLength = rt, t.box = function(f, w, h, s) {
        var v = t.box.before(h, s);
        return t.secretbox(f, w, v)
      }, t.box.before = function(f, w) {
        Xt(f, w), Nl(f, w);
        var h = new Uint8Array(Qi);
        return Q(h, f, w), h
      }, t.box.after = t.secretbox, t.box.open = function(f, w, h, s) {
        var v = t.box.before(h, s);
        return t.secretbox.open(f, w, v)
      }, t.box.open.after = t.secretbox.open, t.box.keyPair = function() {
        var f = new Uint8Array(it),
          w = new Uint8Array(br);
        return Z(f, w), {
          publicKey: f,
          secretKey: w
        }
      }, t.box.keyPair.fromSecretKey = function(f) {
        if (Xt(f), f.length !== br) throw new Error("bad secret key size");
        var w = new Uint8Array(it);
        return F(w, f), {
          publicKey: w,
          secretKey: new Uint8Array(f)
        }
      }, t.box.publicKeyLength = it, t.box.secretKeyLength = br, t.box.sharedKeyLength = Qi, t.box.nonceLength = vs, t.box.overheadLength = t.secretbox.overheadLength, t.sign = function(f, w) {
        if (Xt(f, w), w.length !== ir) throw new Error("bad secret key size");
        var h = new Uint8Array(Cn + f.length);
        return u(h, f, f.length, w), h
      }, t.sign.open = function(f, w) {
        if (Xt(f, w), w.length !== Zn) throw new Error("bad public key size");
        var h = new Uint8Array(f.length),
          s = S(h, f, f.length, w);
        if (s < 0) return null;
        for (var v = new Uint8Array(s), L = 0; L < v.length; L++) v[L] = h[L];
        return v
      }, t.sign.detached = function(f, w) {
        for (var h = t.sign(f, w), s = new Uint8Array(Cn), v = 0; v < s.length; v++) s[v] = h[v];
        return s
      }, t.sign.detached.verify = function(f, w, h) {
        if (Xt(f, w, h), w.length !== Cn) throw new Error("bad signature size");
        if (h.length !== Zn) throw new Error("bad public key size");
        var s = new Uint8Array(Cn + f.length),
          v = new Uint8Array(Cn + f.length),
          L;
        for (L = 0; L < Cn; L++) s[L] = w[L];
        for (L = 0; L < f.length; L++) s[L + Cn] = f[L];
        return S(v, s, s.length, h) >= 0
      }, t.sign.keyPair = function() {
        var f = new Uint8Array(Zn),
          w = new Uint8Array(ir);
        return kt(f, w), {
          publicKey: f,
          secretKey: w
        }
      }, t.sign.keyPair.fromSecretKey = function(f) {
        if (Xt(f), f.length !== ir) throw new Error("bad secret key size");
        for (var w = new Uint8Array(Zn), h = 0; h < w.length; h++) w[h] = f[32 + h];
        return {
          publicKey: w,
          secretKey: new Uint8Array(f)
        }
      }, t.sign.keyPair.fromSeed = function(f) {
        if (Xt(f), f.length !== Ji) throw new Error("bad seed size");
        for (var w = new Uint8Array(Zn), h = new Uint8Array(ir), s = 0; s < 32; s++) h[s] = f[s];
        return kt(w, h, !0), {
          publicKey: w,
          secretKey: h
        }
      }, t.sign.publicKeyLength = Zn, t.sign.secretKeyLength = ir, t.sign.seedLength = Ji, t.sign.signatureLength = Cn, t.hash = function(f) {
        Xt(f);
        var w = new Uint8Array(Xi);
        return pt(w, f, f.length), w
      }, t.hash.hashLength = Xi, t.verify = function(f, w) {
        return Xt(f, w), f.length === 0 || w.length === 0 || f.length !== w.length ? !1 : T(f, 0, w, 0, f.length) === 0
      }, t.setPRNG = function(f) {
        r = f
      },
      function() {
        var f = typeof self < "u" ? self.crypto || self.msCrypto : null;
        if (f && f.getRandomValues) {
          var w = 65536;
          t.setPRNG(function(h, s) {
            var v, L = new Uint8Array(s);
            for (v = 0; v < s; v += w) f.getRandomValues(L.subarray(v, v + Math.min(s - v, w)));
            for (v = 0; v < s; v++) h[v] = L[v];
            xs(L)
          })
        } else typeof Yl < "u" && (f = Jl, f && f.randomBytes && t.setPRNG(function(h, s) {
          var v, L = f.randomBytes(s);
          for (v = 0; v < s; v++) h[v] = L[v];
          xs(L)
        }))
      }()
  })(e.exports ? e.exports : self.nacl = self.nacl || {})
})(Ea);
var Xl = Ea.exports;
const si = qr(Xl);
var Sn;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", e[e.MANIFEST_NOT_FOUND_ERROR = 2] = "MANIFEST_NOT_FOUND_ERROR", e[e.MANIFEST_CONTENT_ERROR = 3] = "MANIFEST_CONTENT_ERROR", e[e.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", e[e.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(Sn || (Sn = {}));
var po;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(po || (po = {}));
var zn;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", e[e.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", e[e.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(zn || (zn = {}));
var bs;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", e[e.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", e[e.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(bs || (bs = {}));
var Cs;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", e[e.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(Cs || (Cs = {}));
var Pr;
(function(e) {
  e.MAINNET = "-239", e.TESTNET = "-3"
})(Pr || (Pr = {}));

function e0(e, t) {
  const n = Ur.encodeBase64(e);
  return t ? encodeURIComponent(n) : n
}

function t0(e, t) {
  return t && (e = decodeURIComponent(e)), Ur.decodeBase64(e)
}

function n0(e, t = !1) {
  let n;
  return e instanceof Uint8Array ? n = e : (typeof e != "string" && (e = JSON.stringify(e)), n = Ur.decodeUTF8(e)), e0(n, t)
}

function r0(e, t = !1) {
  const n = t0(e, t);
  return {
    toString() {
      return Ur.encodeUTF8(n)
    },
    toObject() {
      try {
        return JSON.parse(Ur.encodeUTF8(n))
      } catch {
        return null
      }
    },
    toUint8Array() {
      return n
    }
  }
}
const $o = {
  encode: n0,
  decode: r0
};

function i0(e, t) {
  const n = new Uint8Array(e.length + t.length);
  return n.set(e), n.set(t, e.length), n
}

function o0(e, t) {
  if (t >= e.length) throw new Error("Index is out of buffer");
  const n = e.slice(0, t),
    r = e.slice(t);
  return [n, r]
}

function to(e) {
  let t = "";
  return e.forEach(n => {
    t += ("0" + (n & 255).toString(16)).slice(-2)
  }), t
}

function vi(e) {
  if (e.length % 2 !== 0) throw new Error(`Cannot convert ${e} to bytesArray`);
  const t = new Uint8Array(e.length / 2);
  for (let n = 0; n < e.length; n += 2) t[n / 2] = parseInt(e.slice(n, n + 2), 16);
  return t
}
class mo {
  constructor(t) {
    this.nonceLength = 24, this.keyPair = t ? this.createKeypairFromString(t) : this.createKeypair(), this.sessionId = to(this.keyPair.publicKey)
  }
  createKeypair() {
    return si.box.keyPair()
  }
  createKeypairFromString(t) {
    return {
      publicKey: vi(t.publicKey),
      secretKey: vi(t.secretKey)
    }
  }
  createNonce() {
    return si.randomBytes(this.nonceLength)
  }
  encrypt(t, n) {
    const r = new TextEncoder().encode(t),
      i = this.createNonce(),
      o = si.box(r, i, n, this.keyPair.secretKey);
    return i0(i, o)
  }
  decrypt(t, n) {
    const [r, i] = o0(t, this.nonceLength), o = si.box.open(i, r, n, this.keyPair.secretKey);
    if (!o) throw new Error(`Decryption error: 
 message: ${t.toString()} 
 sender pubkey: ${n.toString()} 
 keypair pubkey: ${this.keyPair.publicKey.toString()} 
 keypair secretkey: ${this.keyPair.secretKey.toString()}`);
    return new TextDecoder().decode(o)
  }
  stringifyKeypair() {
    return {
      publicKey: to(this.keyPair.publicKey),
      secretKey: to(this.keyPair.secretKey)
    }
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function s0(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n
}

function he(e, t, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(c) {
      c(o)
    })
  }
  return new(n || (n = Promise))(function(o, c) {
    function a(y) {
      try {
        m(r.next(y))
      } catch (E) {
        c(E)
      }
    }

    function p(y) {
      try {
        m(r.throw(y))
      } catch (E) {
        c(E)
      }
    }

    function m(y) {
      y.done ? o(y.value) : i(y.value).then(a, p)
    }
    m((r = r.apply(e, [])).next())
  })
}
class Ce extends Error {
  constructor(t, n) {
    super(t, n), this.message = `${Ce.prefix} ${this.constructor.name}${this.info?": "+this.info:""}${t?`
`+t:""}`, Object.setPrototypeOf(this, Ce.prototype)
  }
  get info() {
    return ""
  }
}
Ce.prefix = "[TON_CONNECT_SDK_ERROR]";
class Uo extends Ce {
  get info() {
    return "Passed DappMetadata is in incorrect format."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Uo.prototype)
  }
}
class Pi extends Ce {
  get info() {
    return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Pi.prototype)
  }
}
class Wi extends Ce {
  get info() {
    return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Wi.prototype)
  }
}
class Ni extends Ce {
  get info() {
    return "Wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ni.prototype)
  }
}
class Wr extends Ce {
  get info() {
    return "Send transaction or other protocol methods called while wallet is not connected."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Wr.prototype)
  }
}

function a0(e) {
  return "jsBridgeKey" in e
}
class Gr extends Ce {
  get info() {
    return "User rejects the action in the wallet."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Gr.prototype)
  }
}
class Zr extends Ce {
  get info() {
    return "Request to the wallet contains errors."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Zr.prototype)
  }
}
class Yr extends Ce {
  get info() {
    return "App tries to send rpc request to the injected wallet while not connected."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Yr.prototype)
  }
}
class Fi extends Ce {
  get info() {
    return "There is an attempt to connect to the injected wallet while it is not exists in the webpage."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Fi.prototype)
  }
}
class Di extends Ce {
  get info() {
    return "An error occurred while fetching the wallets list."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Di.prototype)
  }
}
class Qn extends Ce {
  get info() {
    return "Passed address is in incorrect format."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Qn.prototype)
  }
}
class Nr extends Ce {
  get info() {
    return "Passed hex is in incorrect format."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Nr.prototype)
  }
}
class Mn extends Ce {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Mn.prototype)
  }
}
const Es = {
  [Sn.UNKNOWN_ERROR]: Mn,
  [Sn.USER_REJECTS_ERROR]: Gr,
  [Sn.BAD_REQUEST_ERROR]: Zr,
  [Sn.UNKNOWN_APP_ERROR]: Yr,
  [Sn.MANIFEST_NOT_FOUND_ERROR]: Wi,
  [Sn.MANIFEST_CONTENT_ERROR]: Pi
};
class l0 {
  parseError(t) {
    let n = Mn;
    return t.code in Es && (n = Es[t.code] || Mn), new n(t.message)
  }
}
const c0 = new l0;
class u0 {
  isError(t) {
    return "error" in t
  }
}
const Ss = {
  [zn.UNKNOWN_ERROR]: Mn,
  [zn.USER_REJECTS_ERROR]: Gr,
  [zn.BAD_REQUEST_ERROR]: Zr,
  [zn.UNKNOWN_APP_ERROR]: Yr
};
class f0 extends u0 {
  convertToRpcRequest(t) {
    return {
      method: "sendTransaction",
      params: [JSON.stringify(t)]
    }
  }
  parseAndThrowError(t) {
    let n = Mn;
    throw t.error.code in Ss && (n = Ss[t.error.code] || Mn), new n(t.error.message)
  }
  convertFromRpcResponse(t) {
    return {
      boc: t.result
    }
  }
}
const ai = new f0;
class d0 {
  constructor(t, n) {
    this.storage = t, this.storeKey = "ton-connect-storage_http-bridge-gateway::" + n
  }
  storeLastEventId(t) {
    return he(this, void 0, void 0, function*() {
      return this.storage.setItem(this.storeKey, t)
    })
  }
  removeLastEventId() {
    return he(this, void 0, void 0, function*() {
      return this.storage.removeItem(this.storeKey)
    })
  }
  getLastEventId() {
    return he(this, void 0, void 0, function*() {
      const t = yield this.storage.getItem(this.storeKey);
      return t || null
    })
  }
}

function h0(e) {
  return e.slice(-1) === "/" ? e.slice(0, -1) : e
}

function Sa(e, t) {
  return h0(e) + "/" + t
}

function kn(e) {
  if (!e) return !1;
  const t = new URL(e);
  return t.protocol === "tg:" || t.hostname === "t.me"
}

function Po(e) {
  return e.replaceAll(".", "%2E").replaceAll("-", "%2D").replaceAll("_", "%5F").replaceAll("&", "-").replaceAll("=", "__").replaceAll("%", "--")
}

function _a(e, t) {
  return he(this, void 0, void 0, function*() {
    return new Promise((n, r) => {
      var i, o;
      if (!((i = void 0) === null || i === void 0) && i.aborted) {
        r(new Ce("Delay aborted"));
        return
      }
      const c = setTimeout(() => n(), e);
      (o = void 0) === null || o === void 0 || o.addEventListener("abort", () => {
        clearTimeout(c), r(new Ce("Delay aborted"))
      })
    })
  })
}

function cn(e) {
  const t = new AbortController;
  return e != null && e.aborted ? t.abort() : e == null || e.addEventListener("abort", () => t.abort(), {
    once: !0
  }), t
}

function kr(e, t) {
  var n, r;
  return he(this, void 0, void 0, function*() {
    const i = (n = t == null ? void 0 : t.attempts) !== null && n !== void 0 ? n : 10,
      o = (r = t == null ? void 0 : t.delayMs) !== null && r !== void 0 ? r : 200,
      c = cn(t == null ? void 0 : t.signal);
    if (typeof e != "function") throw new Ce(`Expected a function, got ${typeof e}`);
    let a = 0,
      p;
    for (; a < i;) {
      if (c.signal.aborted) throw new Ce(`Aborted after attempts ${a}`);
      try {
        return yield e({
          signal: c.signal
        })
      } catch (m) {
        p = m, a++, a < i && (yield _a(o))
      }
    }
    throw p
  })
}

function Pt(...e) {
  try {
    console.debug("[TON_CONNECT_SDK]", ...e)
  } catch {}
}

function Tn(...e) {
  try {
    console.error("[TON_CONNECT_SDK]", ...e)
  } catch {}
}

function g0(...e) {
  try {
    console.warn("[TON_CONNECT_SDK]", ...e)
  } catch {}
}

function w0(e, t) {
  let n = null,
    r = null,
    i = null,
    o = null,
    c = null;
  const a = (E, ...b) => he(this, void 0, void 0, function*() {
    if (o = E ?? null, c == null || c.abort(), c = cn(E), c.signal.aborted) throw new Ce("Resource creation was aborted");
    r = b ?? null;
    const A = e(c.signal, ...b);
    i = A;
    const _ = yield A;
    if (i !== A && _ !== n) throw yield t(_), new Ce("Resource creation was aborted by a new resource creation");
    return n = _, n
  });
  return {
    create: a,
    current: () => n ?? null,
    dispose: () => he(this, void 0, void 0, function*() {
      try {
        const E = n;
        n = null;
        const b = i;
        i = null;
        try {
          c == null || c.abort()
        } catch {}
        yield Promise.allSettled([E ? t(E) : Promise.resolve(), b ? t(yield b) : Promise.resolve()])
      } catch {}
    }),
    recreate: E => he(this, void 0, void 0, function*() {
      const b = n,
        A = i,
        _ = r,
        T = o;
      if (yield _a(E), b === n && A === i && _ === r && T === o) return yield a(o, ..._ ?? []);
      throw new Ce("Resource recreation was aborted by a new resource creation")
    })
  }
}

function p0(e, t) {
  const n = t == null ? void 0 : t.timeout,
    r = t == null ? void 0 : t.signal,
    i = cn(r);
  return new Promise((o, c) => he(this, void 0, void 0, function*() {
    if (i.signal.aborted) {
      c(new Ce("Operation aborted"));
      return
    }
    let a;
    typeof n < "u" && (a = setTimeout(() => {
      i.abort(), c(new Ce(`Timeout after ${n}ms`))
    }, n)), i.signal.addEventListener("abort", () => {
      clearTimeout(a), c(new Ce("Operation aborted"))
    }, {
      once: !0
    });
    const p = {
      timeout: n,
      abort: i.signal
    };
    yield e((...m) => {
      clearTimeout(a), o(...m)
    }, () => {
      clearTimeout(a), c()
    }, p)
  }))
}
class no {
  constructor(t, n, r, i, o) {
    this.bridgeUrl = n, this.sessionId = r, this.listener = i, this.errorsListener = o, this.ssePath = "events", this.postPath = "message", this.heartbeatMessage = "heartbeat", this.defaultTtl = 300, this.defaultReconnectDelay = 2e3, this.defaultResendDelay = 5e3, this.eventSource = w0((c, a) => he(this, void 0, void 0, function*() {
      const p = {
        bridgeUrl: this.bridgeUrl,
        ssePath: this.ssePath,
        sessionId: this.sessionId,
        bridgeGatewayStorage: this.bridgeGatewayStorage,
        errorHandler: this.errorsHandler.bind(this),
        messageHandler: this.messagesHandler.bind(this),
        signal: c,
        openingDeadlineMS: a
      };
      return yield m0(p)
    }), c => he(this, void 0, void 0, function*() {
      c.close()
    })), this.bridgeGatewayStorage = new d0(t, n)
  }
  get isReady() {
    const t = this.eventSource.current();
    return (t == null ? void 0 : t.readyState) === EventSource.OPEN
  }
  get isClosed() {
    const t = this.eventSource.current();
    return (t == null ? void 0 : t.readyState) !== EventSource.OPEN
  }
  get isConnecting() {
    const t = this.eventSource.current();
    return (t == null ? void 0 : t.readyState) === EventSource.CONNECTING
  }
  registerSession(t) {
    return he(this, void 0, void 0, function*() {
      yield this.eventSource.create(t == null ? void 0 : t.signal, t == null ? void 0 : t.openingDeadlineMS)
    })
  }
  send(t, n, r, i) {
    var o;
    return he(this, void 0, void 0, function*() {
      const c = {};
      typeof i == "number" ? c.ttl = i : (c.ttl = i == null ? void 0 : i.ttl, c.signal = i == null ? void 0 : i.signal, c.attempts = i == null ? void 0 : i.attempts);
      const a = new URL(Sa(this.bridgeUrl, this.postPath));
      a.searchParams.append("client_id", this.sessionId), a.searchParams.append("to", n), a.searchParams.append("ttl", ((c == null ? void 0 : c.ttl) || this.defaultTtl).toString()), a.searchParams.append("topic", r);
      const p = $o.encode(t);
      yield kr(m => he(this, void 0, void 0, function*() {
        const y = yield this.post(a, p, m.signal);
        if (!y.ok) throw new Ce(`Bridge send failed, status ${y.status}`)
      }), {
        attempts: (o = c == null ? void 0 : c.attempts) !== null && o !== void 0 ? o : Number.MAX_SAFE_INTEGER,
        delayMs: this.defaultResendDelay,
        signal: c == null ? void 0 : c.signal
      })
    })
  }
  pause() {
    this.eventSource.dispose().catch(t => Tn(`Bridge pause failed, ${t}`))
  }
  unPause() {
    return he(this, void 0, void 0, function*() {
      yield this.eventSource.recreate(0)
    })
  }
  close() {
    return he(this, void 0, void 0, function*() {
      yield this.eventSource.dispose().catch(t => Tn(`Bridge close failed, ${t}`))
    })
  }
  setListener(t) {
    this.listener = t
  }
  setErrorsListener(t) {
    this.errorsListener = t
  }
  post(t, n, r) {
    return he(this, void 0, void 0, function*() {
      const i = yield fetch(t, {
        method: "post",
        body: n,
        signal: r
      });
      if (!i.ok) throw new Ce(`Bridge send failed, status ${i.status}`);
      return i
    })
  }
  errorsHandler(t, n) {
    return he(this, void 0, void 0, function*() {
      if (this.isConnecting) throw t.close(), new Ce("Bridge error, failed to connect");
      if (this.isReady) {
        try {
          this.errorsListener(n)
        } catch {}
        return
      }
      if (this.isClosed) return t.close(), Pt(`Bridge reconnecting, ${this.defaultReconnectDelay}ms delay`), yield this.eventSource.recreate(this.defaultReconnectDelay);
      throw new Ce("Bridge error, unknown state")
    })
  }
  messagesHandler(t) {
    return he(this, void 0, void 0, function*() {
      if (t.data === this.heartbeatMessage || (yield this.bridgeGatewayStorage.storeLastEventId(t.lastEventId), this.isClosed)) return;
      let n;
      try {
        n = JSON.parse(t.data)
      } catch (r) {
        throw new Ce(`Bridge message parse failed, message ${r.data}`)
      }
      this.listener(n)
    })
  }
}

function m0(e) {
  return he(this, void 0, void 0, function*() {
    return yield p0((t, n, r) => he(this, void 0, void 0, function*() {
      var i;
      const c = cn(r.signal).signal;
      if (c.aborted) {
        n(new Ce("Bridge connection aborted"));
        return
      }
      const a = new URL(Sa(e.bridgeUrl, e.ssePath));
      a.searchParams.append("client_id", e.sessionId);
      const p = yield e.bridgeGatewayStorage.getLastEventId();
      if (p && a.searchParams.append("last_event_id", p), c.aborted) {
        n(new Ce("Bridge connection aborted"));
        return
      }
      const m = new EventSource(a.toString());
      m.onerror = y => he(this, void 0, void 0, function*() {
        if (c.aborted) {
          m.close(), n(new Ce("Bridge connection aborted"));
          return
        }
        try {
          const E = yield e.errorHandler(m, y);
          E !== m && m.close(), E && E !== m && t(E)
        } catch (E) {
          m.close(), n(E)
        }
      }), m.onopen = () => {
        if (c.aborted) {
          m.close(), n(new Ce("Bridge connection aborted"));
          return
        }
        t(m)
      }, m.onmessage = y => {
        if (c.aborted) {
          m.close(), n(new Ce("Bridge connection aborted"));
          return
        }
        e.messageHandler(y)
      }, (i = e.signal) === null || i === void 0 || i.addEventListener("abort", () => {
        m.close(), n(new Ce("Bridge connection aborted"))
      })
    }), {
      timeout: e.openingDeadlineMS,
      signal: e.signal
    })
  })
}

function Tr(e) {
  return !("connectEvent" in e)
}
class Fr {
  constructor(t) {
    this.storage = t, this.storeKey = "ton-connect-storage_bridge-connection"
  }
  storeConnection(t) {
    return he(this, void 0, void 0, function*() {
      if (t.type === "injected") return this.storage.setItem(this.storeKey, JSON.stringify(t));
      if (!Tr(t)) {
        const r = {
            sessionKeyPair: t.session.sessionCrypto.stringifyKeypair(),
            walletPublicKey: t.session.walletPublicKey,
            bridgeUrl: t.session.bridgeUrl
          },
          i = {
            type: "http",
            connectEvent: t.connectEvent,
            session: r,
            lastWalletEventId: t.lastWalletEventId,
            nextRpcRequestId: t.nextRpcRequestId
          };
        return this.storage.setItem(this.storeKey, JSON.stringify(i))
      }
      const n = {
        type: "http",
        connectionSource: t.connectionSource,
        sessionCrypto: t.sessionCrypto.stringifyKeypair()
      };
      return this.storage.setItem(this.storeKey, JSON.stringify(n))
    })
  }
  removeConnection() {
    return he(this, void 0, void 0, function*() {
      return this.storage.removeItem(this.storeKey)
    })
  }
  getConnection() {
    return he(this, void 0, void 0, function*() {
      const t = yield this.storage.getItem(this.storeKey);
      if (!t) return null;
      const n = JSON.parse(t);
      if (n.type === "injected") return n;
      if ("connectEvent" in n) {
        const r = new mo(n.session.sessionKeyPair);
        return {
          type: "http",
          connectEvent: n.connectEvent,
          lastWalletEventId: n.lastWalletEventId,
          nextRpcRequestId: n.nextRpcRequestId,
          session: {
            sessionCrypto: r,
            bridgeUrl: n.session.bridgeUrl,
            walletPublicKey: n.session.walletPublicKey
          }
        }
      }
      return {
        type: "http",
        sessionCrypto: new mo(n.sessionCrypto),
        connectionSource: n.connectionSource
      }
    })
  }
  getHttpConnection() {
    return he(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (!t) throw new Ce("Trying to read HTTP connection source while nothing is stored");
      if (t.type === "injected") throw new Ce("Trying to read HTTP connection source while injected connection is stored");
      return t
    })
  }
  getHttpPendingConnection() {
    return he(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (!t) throw new Ce("Trying to read HTTP connection source while nothing is stored");
      if (t.type === "injected") throw new Ce("Trying to read HTTP connection source while injected connection is stored");
      if (!Tr(t)) throw new Ce("Trying to read HTTP-pending connection while http connection is stored");
      return t
    })
  }
  getInjectedConnection() {
    return he(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (!t) throw new Ce("Trying to read Injected bridge connection source while nothing is stored");
      if ((t == null ? void 0 : t.type) === "http") throw new Ce("Trying to read Injected bridge connection source while HTTP connection is stored");
      return t
    })
  }
  storedConnectionType() {
    return he(this, void 0, void 0, function*() {
      const t = yield this.storage.getItem(this.storeKey);
      return t ? JSON.parse(t).type : null
    })
  }
  storeLastWalletEventId(t) {
    return he(this, void 0, void 0, function*() {
      const n = yield this.getConnection();
      if (n && n.type === "http" && !Tr(n)) return n.lastWalletEventId = t, this.storeConnection(n)
    })
  }
  getLastWalletEventId() {
    return he(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (t && "lastWalletEventId" in t) return t.lastWalletEventId
    })
  }
  increaseNextRpcRequestId() {
    return he(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (t && "nextRpcRequestId" in t) {
        const n = t.nextRpcRequestId || 0;
        return t.nextRpcRequestId = n + 1, this.storeConnection(t)
      }
    })
  }
  getNextRpcRequestId() {
    return he(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      return t && "nextRpcRequestId" in t && t.nextRpcRequestId || 0
    })
  }
}
const Aa = 2;
class Dr {
  constructor(t, n) {
    this.storage = t, this.walletConnectionSource = n, this.type = "http", this.standardUniversalLink = "tc://", this.pendingRequests = new Map, this.session = null, this.gateway = null, this.pendingGateways = [], this.listeners = [], this.defaultOpeningDeadlineMS = 12e3, this.defaultRetryTimeoutMS = 2e3, this.connectionStorage = new Fr(t)
  }
  static fromStorage(t) {
    return he(this, void 0, void 0, function*() {
      const r = yield new Fr(t).getHttpConnection();
      return Tr(r) ? new Dr(t, r.connectionSource) : new Dr(t, {
        bridgeUrl: r.session.bridgeUrl
      })
    })
  }
  connect(t, n) {
    var r;
    const i = cn(n == null ? void 0 : n.signal);
    (r = this.abortController) === null || r === void 0 || r.abort(), this.abortController = i, this.closeGateways();
    const o = new mo;
    this.session = {
      sessionCrypto: o,
      bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
    }, this.connectionStorage.storeConnection({
      type: "http",
      connectionSource: this.walletConnectionSource,
      sessionCrypto: o
    }).then(() => he(this, void 0, void 0, function*() {
      i.signal.aborted || (yield kr(a => {
        var p;
        return this.openGateways(o, {
          openingDeadlineMS: (p = n == null ? void 0 : n.openingDeadlineMS) !== null && p !== void 0 ? p : this.defaultOpeningDeadlineMS,
          signal: a == null ? void 0 : a.signal
        })
      }, {
        attempts: Number.MAX_SAFE_INTEGER,
        delayMs: this.defaultRetryTimeoutMS,
        signal: i.signal
      }))
    }));
    const c = "universalLink" in this.walletConnectionSource && this.walletConnectionSource.universalLink ? this.walletConnectionSource.universalLink : this.standardUniversalLink;
    return this.generateUniversalLink(c, t)
  }
  restoreConnection(t) {
    var n, r;
    return he(this, void 0, void 0, function*() {
      const i = cn(t == null ? void 0 : t.signal);
      if ((n = this.abortController) === null || n === void 0 || n.abort(), this.abortController = i, i.signal.aborted) return;
      this.closeGateways();
      const o = yield this.connectionStorage.getHttpConnection();
      if (!o || i.signal.aborted) return;
      const c = (r = t == null ? void 0 : t.openingDeadlineMS) !== null && r !== void 0 ? r : this.defaultOpeningDeadlineMS;
      if (Tr(o)) return this.session = {
        sessionCrypto: o.sessionCrypto,
        bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
      }, yield this.openGateways(o.sessionCrypto, {
        openingDeadlineMS: c,
        signal: i == null ? void 0 : i.signal
      });
      if (Array.isArray(this.walletConnectionSource)) throw new Ce("Internal error. Connection source is array while WalletConnectionSourceHTTP was expected.");
      if (this.session = o.session, this.gateway && (Pt("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.gateway = new no(this.storage, this.walletConnectionSource.bridgeUrl, o.session.sessionCrypto.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)), !i.signal.aborted) {
        this.listeners.forEach(a => a(o.connectEvent));
        try {
          yield kr(a => this.gateway.registerSession({
            openingDeadlineMS: c,
            signal: a.signal
          }), {
            attempts: Number.MAX_SAFE_INTEGER,
            delayMs: this.defaultRetryTimeoutMS,
            signal: i.signal
          })
        } catch {
          yield this.disconnect({
            signal: i.signal
          });
          return
        }
      }
    })
  }
  sendRequest(t, n) {
    const r = {};
    return typeof n == "function" ? r.onRequestSent = n : (r.onRequestSent = n == null ? void 0 : n.onRequestSent, r.signal = n == null ? void 0 : n.signal, r.attempts = n == null ? void 0 : n.attempts), new Promise((i, o) => he(this, void 0, void 0, function*() {
      var c;
      if (!this.gateway || !this.session || !("walletPublicKey" in this.session)) throw new Ce("Trying to send bridge request without session");
      const a = (yield this.connectionStorage.getNextRpcRequestId()).toString();
      yield this.connectionStorage.increaseNextRpcRequestId(), Pt("Send http-bridge request:", Object.assign(Object.assign({}, t), {
        id: a
      }));
      const p = this.session.sessionCrypto.encrypt(JSON.stringify(Object.assign(Object.assign({}, t), {
        id: a
      })), vi(this.session.walletPublicKey));
      try {
        yield this.gateway.send(p, this.session.walletPublicKey, t.method, {
          attempts: r == null ? void 0 : r.attempts,
          signal: r == null ? void 0 : r.signal
        }), (c = r == null ? void 0 : r.onRequestSent) === null || c === void 0 || c.call(r), this.pendingRequests.set(a.toString(), i)
      } catch (m) {
        o(m)
      }
    }))
  }
  closeConnection() {
    this.closeGateways(), this.listeners = [], this.session = null, this.gateway = null
  }
  disconnect(t) {
    return he(this, void 0, void 0, function*() {
      return new Promise(n => he(this, void 0, void 0, function*() {
        let r = !1,
          i = null;
        const o = () => {
          r || (r = !0, this.removeBridgeAndSession().then(n))
        };
        try {
          this.closeGateways();
          const c = cn(t == null ? void 0 : t.signal);
          i = setTimeout(() => {
            c.abort()
          }, this.defaultOpeningDeadlineMS), yield this.sendRequest({
            method: "disconnect",
            params: []
          }, {
            onRequestSent: o,
            signal: c.signal,
            attempts: 1
          })
        } catch (c) {
          Pt("Disconnect error:", c), r || this.removeBridgeAndSession().then(n)
        } finally {
          i && clearTimeout(i), o()
        }
      }))
    })
  }
  listen(t) {
    return this.listeners.push(t), () => this.listeners = this.listeners.filter(n => n !== t)
  }
  pause() {
    var t;
    (t = this.gateway) === null || t === void 0 || t.pause(), this.pendingGateways.forEach(n => n.pause())
  }
  unPause() {
    return he(this, void 0, void 0, function*() {
      const t = this.pendingGateways.map(n => n.unPause());
      this.gateway && t.push(this.gateway.unPause()), yield Promise.all(t)
    })
  }
  pendingGatewaysListener(t, n, r) {
    return he(this, void 0, void 0, function*() {
      if (!this.pendingGateways.includes(t)) {
        yield t.close();
        return
      }
      return this.closeGateways({
        except: t
      }), this.gateway && (Pt("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.session.bridgeUrl = n, this.gateway = t, this.gateway.setErrorsListener(this.gatewayErrorsListener.bind(this)), this.gateway.setListener(this.gatewayListener.bind(this)), this.gatewayListener(r)
    })
  }
  gatewayListener(t) {
    return he(this, void 0, void 0, function*() {
      const n = JSON.parse(this.session.sessionCrypto.decrypt($o.decode(t.message).toUint8Array(), vi(t.from)));
      if (Pt("Wallet message received:", n), !("event" in n)) {
        const i = n.id.toString(),
          o = this.pendingRequests.get(i);
        if (!o) {
          Pt(`Response id ${i} doesn't match any request's id`);
          return
        }
        o(n), this.pendingRequests.delete(i);
        return
      }
      if (n.id !== void 0) {
        const i = yield this.connectionStorage.getLastWalletEventId();
        if (i !== void 0 && n.id <= i) {
          Tn(`Received event id (=${n.id}) must be greater than stored last wallet event id (=${i}) `);
          return
        }
        n.event !== "connect" && (yield this.connectionStorage.storeLastWalletEventId(n.id))
      }
      const r = this.listeners;
      n.event === "connect" && (yield this.updateSession(n, t.from)), n.event === "disconnect" && (Pt("Removing bridge and session: received disconnect event"), yield this.removeBridgeAndSession()), r.forEach(i => i(n))
    })
  }
  gatewayErrorsListener(t) {
    return he(this, void 0, void 0, function*() {
      throw new Ce(`Bridge error ${JSON.stringify(t)}`)
    })
  }
  updateSession(t, n) {
    return he(this, void 0, void 0, function*() {
      this.session = Object.assign(Object.assign({}, this.session), {
        walletPublicKey: n
      });
      const r = t.payload.items.find(o => o.name === "ton_addr"),
        i = Object.assign(Object.assign({}, t), {
          payload: Object.assign(Object.assign({}, t.payload), {
            items: [r]
          })
        });
      yield this.connectionStorage.storeConnection({
        type: "http",
        session: this.session,
        lastWalletEventId: t.id,
        connectEvent: i,
        nextRpcRequestId: 0
      })
    })
  }
  removeBridgeAndSession() {
    return he(this, void 0, void 0, function*() {
      this.closeConnection(), yield this.connectionStorage.removeConnection()
    })
  }
  generateUniversalLink(t, n) {
    return kn(t) ? this.generateTGUniversalLink(t, n) : this.generateRegularUniversalLink(t, n)
  }
  generateRegularUniversalLink(t, n) {
    const r = new URL(t);
    return r.searchParams.append("v", Aa.toString()), r.searchParams.append("id", this.session.sessionCrypto.sessionId), r.searchParams.append("r", JSON.stringify(n)), r.toString()
  }
  generateTGUniversalLink(t, n) {
    const i = this.generateRegularUniversalLink("about:blank", n).split("?")[1],
      o = "tonconnect-" + Po(i),
      c = this.convertToDirectLink(t),
      a = new URL(c);
    return a.searchParams.append("startapp", o), a.toString()
  }
  convertToDirectLink(t) {
    const n = new URL(t);
    return n.searchParams.has("attach") && (n.searchParams.delete("attach"), n.pathname += "/start"), n.toString()
  }
  openGateways(t, n) {
    return he(this, void 0, void 0, function*() {
      if (Array.isArray(this.walletConnectionSource)) {
        this.pendingGateways.map(r => r.close().catch()), this.pendingGateways = this.walletConnectionSource.map(r => {
          const i = new no(this.storage, r.bridgeUrl, t.sessionId, () => {}, () => {});
          return i.setListener(o => this.pendingGatewaysListener(i, r.bridgeUrl, o)), i
        }), yield Promise.allSettled(this.pendingGateways.map(r => kr(i => {
          var o;
          return this.pendingGateways.some(c => c === r) ? r.registerSession({
            openingDeadlineMS: (o = n == null ? void 0 : n.openingDeadlineMS) !== null && o !== void 0 ? o : this.defaultOpeningDeadlineMS,
            signal: i.signal
          }) : r.close()
        }, {
          attempts: Number.MAX_SAFE_INTEGER,
          delayMs: this.defaultRetryTimeoutMS,
          signal: n == null ? void 0 : n.signal
        })));
        return
      } else return this.gateway && (Pt("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.gateway = new no(this.storage, this.walletConnectionSource.bridgeUrl, t.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)), yield this.gateway.registerSession({
        openingDeadlineMS: n == null ? void 0 : n.openingDeadlineMS,
        signal: n == null ? void 0 : n.signal
      })
    })
  }
  closeGateways(t) {
    var n;
    (n = this.gateway) === null || n === void 0 || n.close(), this.pendingGateways.filter(r => r !== (t == null ? void 0 : t.except)).forEach(r => r.close()), this.pendingGateways = []
  }
}

function _s(e, t) {
  return ka(e, [t])
}

function ka(e, t) {
  return !e || typeof e != "object" ? !1 : t.every(n => n in e)
}

function v0(e) {
  try {
    return !_s(e, "tonconnect") || !_s(e.tonconnect, "walletInfo") ? !1 : ka(e.tonconnect.walletInfo, ["name", "app_name", "image", "about_url", "platforms"])
  } catch {
    return !1
  }
}
let y0 = class Cr {
  constructor() {
    this.storage = {}
  }
  static getInstance() {
    return Cr.instance || (Cr.instance = new Cr), Cr.instance
  }
  get length() {
    return Object.keys(this.storage).length
  }
  clear() {
    this.storage = {}
  }
  getItem(t) {
    var n;
    return (n = this.storage[t]) !== null && n !== void 0 ? n : null
  }
  key(t) {
    var n;
    const r = Object.keys(this.storage);
    return t < 0 || t >= r.length ? null : (n = r[t]) !== null && n !== void 0 ? n : null
  }
  removeItem(t) {
    delete this.storage[t]
  }
  setItem(t, n) {
    this.storage[t] = n
  }
};

function Oi() {
  if (!(typeof window > "u")) return window
}

function x0() {
  const e = Oi();
  if (!e) return [];
  try {
    return Object.keys(e)
  } catch {
    return []
  }
}

function b0() {
  if (!(typeof document > "u")) return document
}

function C0() {
  var e;
  const t = (e = Oi()) === null || e === void 0 ? void 0 : e.location.origin;
  return t ? t + "/tonconnect-manifest.json" : ""
}

function E0() {
  if (S0()) return localStorage;
  if (_0()) throw new Ce("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
  return y0.getInstance()
}

function S0() {
  try {
    return typeof localStorage < "u"
  } catch {
    return !1
  }
}

function _0() {
  return typeof process < "u" && process.versions != null && process.versions.node != null
}
class Qt {
  constructor(t, n) {
    this.injectedWalletKey = n, this.type = "injected", this.unsubscribeCallback = null, this.listenSubscriptions = !1, this.listeners = [];
    const r = Qt.window;
    if (!Qt.isWindowContainsWallet(r, n)) throw new Fi;
    this.connectionStorage = new Fr(t), this.injectedWallet = r[n].tonconnect
  }
  static fromStorage(t) {
    return he(this, void 0, void 0, function*() {
      const r = yield new Fr(t).getInjectedConnection();
      return new Qt(t, r.jsBridgeKey)
    })
  }
  static isWalletInjected(t) {
    return Qt.isWindowContainsWallet(this.window, t)
  }
  static isInsideWalletBrowser(t) {
    return Qt.isWindowContainsWallet(this.window, t) ? this.window[t].tonconnect.isWalletBrowser : !1
  }
  static getCurrentlyInjectedWallets() {
    return this.window ? x0().filter(([r, i]) => v0(i)).map(([r, i]) => ({
      name: i.tonconnect.walletInfo.name,
      appName: i.tonconnect.walletInfo.app_name,
      aboutUrl: i.tonconnect.walletInfo.about_url,
      imageUrl: i.tonconnect.walletInfo.image,
      tondns: i.tonconnect.walletInfo.tondns,
      jsBridgeKey: r,
      injected: !0,
      embedded: i.tonconnect.isWalletBrowser,
      platforms: i.tonconnect.walletInfo.platforms
    })) : []
  }
  static isWindowContainsWallet(t, n) {
    return !!t && n in t && typeof t[n] == "object" && "tonconnect" in t[n]
  }
  connect(t) {
    this._connect(Aa, t)
  }
  restoreConnection() {
    return he(this, void 0, void 0, function*() {
      try {
        Pt("Injected Provider restoring connection...");
        const t = yield this.injectedWallet.restoreConnection();
        Pt("Injected Provider restoring connection response", t), t.event === "connect" ? (this.makeSubscriptions(), this.listeners.forEach(n => n(t))) : yield this.connectionStorage.removeConnection()
      } catch (t) {
        yield this.connectionStorage.removeConnection(), console.error(t)
      }
    })
  }
  closeConnection() {
    this.listenSubscriptions && this.injectedWallet.disconnect(), this.closeAllListeners()
  }
  disconnect() {
    return he(this, void 0, void 0, function*() {
      return new Promise(t => {
        const n = () => {
          this.closeAllListeners(), this.connectionStorage.removeConnection().then(t)
        };
        try {
          this.injectedWallet.disconnect(), n()
        } catch (r) {
          Pt(r), this.sendRequest({
            method: "disconnect",
            params: []
          }, n)
        }
      })
    })
  }
  closeAllListeners() {
    var t;
    this.listenSubscriptions = !1, this.listeners = [], (t = this.unsubscribeCallback) === null || t === void 0 || t.call(this)
  }
  listen(t) {
    return this.listeners.push(t), () => this.listeners = this.listeners.filter(n => n !== t)
  }
  sendRequest(t, n) {
    var r;
    return he(this, void 0, void 0, function*() {
      const i = {};
      typeof n == "function" ? i.onRequestSent = n : (i.onRequestSent = n == null ? void 0 : n.onRequestSent, i.signal = n == null ? void 0 : n.signal);
      const o = (yield this.connectionStorage.getNextRpcRequestId()).toString();
      yield this.connectionStorage.increaseNextRpcRequestId(), Pt("Send injected-bridge request:", Object.assign(Object.assign({}, t), {
        id: o
      }));
      const c = this.injectedWallet.send(Object.assign(Object.assign({}, t), {
        id: o
      }));
      return c.then(a => Pt("Wallet message received:", a)), (r = i == null ? void 0 : i.onRequestSent) === null || r === void 0 || r.call(i), c
    })
  }
  _connect(t, n) {
    return he(this, void 0, void 0, function*() {
      try {
        Pt(`Injected Provider connect request: protocolVersion: ${t}, message:`, n);
        const r = yield this.injectedWallet.connect(t, n);
        Pt("Injected Provider connect response:", r), r.event === "connect" && (yield this.updateSession(), this.makeSubscriptions()), this.listeners.forEach(i => i(r))
      } catch (r) {
        Pt("Injected Provider connect error:", r);
        const i = {
          event: "connect_error",
          payload: {
            code: 0,
            message: r == null ? void 0 : r.toString()
          }
        };
        this.listeners.forEach(o => o(i))
      }
    })
  }
  makeSubscriptions() {
    this.listenSubscriptions = !0, this.unsubscribeCallback = this.injectedWallet.listen(t => {
      Pt("Wallet message received:", t), this.listenSubscriptions && this.listeners.forEach(n => n(t)), t.event === "disconnect" && this.disconnect()
    })
  }
  updateSession() {
    return this.connectionStorage.storeConnection({
      type: "injected",
      jsBridgeKey: this.injectedWalletKey,
      nextRpcRequestId: 0
    })
  }
}
Qt.window = Oi();
class A0 {
  constructor() {
    this.localStorage = E0()
  }
  getItem(t) {
    return he(this, void 0, void 0, function*() {
      return this.localStorage.getItem(t)
    })
  }
  removeItem(t) {
    return he(this, void 0, void 0, function*() {
      this.localStorage.removeItem(t)
    })
  }
  setItem(t, n) {
    return he(this, void 0, void 0, function*() {
      this.localStorage.setItem(t, n)
    })
  }
}

function Nn(e) {
  return Ta(e) && e.injected
}

function zr(e) {
  return Nn(e) && e.embedded
}

function Ta(e) {
  return "jsBridgeKey" in e
}

function ji(e) {
  return "bridgeUrl" in e
}
const k0 = [{
  app_name: "telegram-wallet",
  name: "Wallet",
  image: "https://wallet.tg/images/logo-288.png",
  about_url: "https://wallet.tg/",
  universal_url: "https://t.me/wallet?attach=wallet",
  bridge: [{
    type: "sse",
    url: "https://bridge.ton.space/bridge"
  }],
  platforms: ["ios", "android", "macos", "windows", "linux"]
}, {
  app_name: "tonkeeper",
  name: "Tonkeeper",
  image: "https://tonkeeper.com/assets/tonconnect-icon.png",
  tondns: "tonkeeper.ton",
  about_url: "https://tonkeeper.com",
  universal_url: "https://app.tonkeeper.com/ton-connect",
  deepLink: "tonkeeper-tc://",
  bridge: [{
    type: "sse",
    url: "https://bridge.tonapi.io/bridge"
  }, {
    type: "js",
    key: "tonkeeper"
  }],
  platforms: ["ios", "android", "chrome", "firefox", "macos"]
}, {
  app_name: "mytonwallet",
  name: "MyTonWallet",
  image: "https://static.mytonwallet.io/icon-256.png",
  about_url: "https://mytonwallet.io",
  universal_url: "https://connect.mytonwallet.org",
  bridge: [{
    type: "js",
    key: "mytonwallet"
  }, {
    type: "sse",
    url: "https://tonconnectbridge.mytonwallet.org/bridge/"
  }],
  platforms: ["chrome", "windows", "macos", "linux", "ios", "android", "firefox"]
}, {
  app_name: "openmask",
  name: "OpenMask",
  image: "https://raw.githubusercontent.com/OpenProduct/openmask-extension/main/public/openmask-logo-288.png",
  about_url: "https://www.openmask.app/",
  bridge: [{
    type: "js",
    key: "openmask"
  }],
  platforms: ["chrome"]
}, {
  app_name: "tonhub",
  name: "Tonhub",
  image: "https://tonhub.com/tonconnect_logo.png",
  about_url: "https://tonhub.com",
  universal_url: "https://tonhub.com/ton-connect",
  bridge: [{
    type: "js",
    key: "tonhub"
  }, {
    type: "sse",
    url: "https://connect.tonhubapi.com/tonconnect"
  }],
  platforms: ["ios", "android"]
}, {
  app_name: "dewallet",
  name: "DeWallet",
  image: "https://raw.githubusercontent.com/delab-team/manifests-images/main/WalletAvatar.png",
  about_url: "https://delabwallet.com",
  universal_url: "https://t.me/dewallet?attach=wallet",
  bridge: [{
    type: "sse",
    url: "https://sse-bridge.delab.team/bridge"
  }],
  platforms: ["ios", "android"]
}, {
  app_name: "xtonwallet",
  name: "XTONWallet",
  image: "https://xtonwallet.com/assets/img/icon-256-back.png",
  about_url: "https://xtonwallet.com",
  bridge: [{
    type: "js",
    key: "xtonwallet"
  }],
  platforms: ["chrome", "firefox"]
}, {
  app_name: "tonwallet",
  name: "TON Wallet",
  image: "https://wallet.ton.org/assets/ui/qr-logo.png",
  about_url: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
  bridge: [{
    type: "js",
    key: "tonwallet"
  }],
  platforms: ["chrome"]
}, {
  app_name: "bitgetTonWallet",
  name: "Bitget Wallet",
  image: "https://raw.githubusercontent.com/bitkeepwallet/download/main/logo/png/bitget_wallet_logo_0_gas_fee.png",
  about_url: "https://web3.bitget.com",
  deepLink: "bitkeep://",
  bridge: [{
    type: "js",
    key: "bitgetTonWallet"
  }, {
    type: "sse",
    url: "https://bridge.tonapi.io/bridge"
  }],
  platforms: ["ios", "android", "chrome"],
  universal_url: "https://bkcode.vip/ton-connect"
}, {
  app_name: "safepalwallet",
  name: "SafePal",
  image: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
  tondns: "",
  about_url: "https://www.safepal.com",
  universal_url: "https://link.safepal.io/ton-connect",
  deepLink: "safepal-tc://",
  bridge: [{
    type: "sse",
    url: "https://ton-bridge.safepal.com/tonbridge/v1/bridge"
  }, {
    type: "js",
    key: "safepalwallet"
  }],
  platforms: ["ios", "android", "chrome", "firefox"]
}, {
  app_name: "okxTonWallet",
  name: "OKX Wallet",
  image: "https://static.okx.com/cdn/assets/imgs/247/58E63FEA47A2B7D7.png",
  about_url: "https://www.okx.com/web3",
  universal_url: "https://www.okx.com/download?appendQuery=true&deeplink=okx://web3/wallet/tonconnect",
  bridge: [{
    type: "js",
    key: "okxTonWallet"
  }, {
    type: "sse",
    url: "https://www.okx.com/tonbridge/discover/rpc/bridge"
  }],
  platforms: ["chrome", "safari", "firefox", "ios", "android"]
}, {
  app_name: "okxTonWalletTr",
  name: "OKX TR Wallet",
  image: "https://static.okx.com/cdn/assets/imgs/247/587A8296F0BB640F.png",
  about_url: "https://tr.okx.com/web3",
  universal_url: "https://tr.okx.com/download?appendQuery=true&deeplink=okxtr://web3/wallet/tonconnect",
  bridge: [{
    type: "js",
    key: "okxTonWallet"
  }, {
    type: "sse",
    url: "https://www.okx.com/tonbridge/discover/rpc/bridge"
  }],
  platforms: ["chrome", "safari", "firefox", "ios", "android"]
}];
class yi {
  constructor(t) {
    this.walletsListCache = null, this.walletsListCacheCreationTimestamp = null, this.walletsListSource = "https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json", t != null && t.walletsListSource && (this.walletsListSource = t.walletsListSource), t != null && t.cacheTTLMs && (this.cacheTTLMs = t.cacheTTLMs)
  }
  getWallets() {
    return he(this, void 0, void 0, function*() {
      return this.cacheTTLMs && this.walletsListCacheCreationTimestamp && Date.now() > this.walletsListCacheCreationTimestamp + this.cacheTTLMs && (this.walletsListCache = null), this.walletsListCache || (this.walletsListCache = this.fetchWalletsList(), this.walletsListCache.then(() => {
        this.walletsListCacheCreationTimestamp = Date.now()
      }).catch(() => {
        this.walletsListCache = null, this.walletsListCacheCreationTimestamp = null
      })), this.walletsListCache
    })
  }
  getEmbeddedWallet() {
    return he(this, void 0, void 0, function*() {
      const n = (yield this.getWallets()).filter(zr);
      return n.length !== 1 ? null : n[0]
    })
  }
  fetchWalletsList() {
    return he(this, void 0, void 0, function*() {
      let t = [];
      try {
        if (t = yield(yield fetch(this.walletsListSource)).json(), !Array.isArray(t)) throw new Di("Wrong wallets list format, wallets list must be an array.");
        const i = t.filter(o => !this.isCorrectWalletConfigDTO(o));
        i.length && (Tn(`Wallet(s) ${i.map(o=>o.name).join(", ")} config format is wrong. They were removed from the wallets list.`), t = t.filter(o => this.isCorrectWalletConfigDTO(o)))
      } catch (r) {
        Tn(r), t = k0
      }
      let n = [];
      try {
        n = Qt.getCurrentlyInjectedWallets()
      } catch (r) {
        Tn(r)
      }
      return this.mergeWalletsLists(this.walletConfigDTOListToWalletConfigList(t), n)
    })
  }
  walletConfigDTOListToWalletConfigList(t) {
    return t.map(n => {
      const i = {
        name: n.name,
        appName: n.app_name,
        imageUrl: n.image,
        aboutUrl: n.about_url,
        tondns: n.tondns,
        platforms: n.platforms
      };
      return n.bridge.forEach(o => {
        if (o.type === "sse" && (i.bridgeUrl = o.url, i.universalLink = n.universal_url, i.deepLink = n.deepLink), o.type === "js") {
          const c = o.key;
          i.jsBridgeKey = c, i.injected = Qt.isWalletInjected(c), i.embedded = Qt.isInsideWalletBrowser(c)
        }
      }), i
    })
  }
  mergeWalletsLists(t, n) {
    return [...new Set(t.concat(n).map(i => i.name)).values()].map(i => {
      const o = t.find(a => a.name === i),
        c = n.find(a => a.name === i);
      return Object.assign(Object.assign({}, o && Object.assign({}, o)), c && Object.assign({}, c))
    })
  }
  isCorrectWalletConfigDTO(t) {
    if (!t || typeof t != "object") return !1;
    const n = "name" in t,
      r = "app_name" in t,
      i = "image" in t,
      o = "about_url" in t,
      c = "platforms" in t;
    if (!n || !i || !o || !c || !r || !t.platforms || !Array.isArray(t.platforms) || !t.platforms.length || !("bridge" in t) || !Array.isArray(t.bridge) || !t.bridge.length) return !1;
    const a = t.bridge;
    if (a.some(y => !y || typeof y != "object" || !("type" in y))) return !1;
    const p = a.find(y => y.type === "sse");
    if (p && (!("url" in p) || !p.url || !t.universal_url)) return !1;
    const m = a.find(y => y.type === "js");
    return !(m && (!("key" in m) || !m.key))
  }
}
class xi extends Ce {
  get info() {
    return "Wallet doesn't support requested feature method."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, xi.prototype)
  }
}

function T0(e, t) {
  const n = e.includes("SendTransaction"),
    r = e.find(i => i && typeof i == "object" && i.name === "SendTransaction");
  if (!n && !r) throw new xi("Wallet doesn't support SendTransaction feature.");
  if (r && r.maxMessages !== void 0) {
    if (r.maxMessages < t.requiredMessagesNumber) throw new xi(`Wallet is not able to handle such SendTransaction request. Max support messages number is ${r.maxMessages}, but ${t.requiredMessagesNumber} is required.`);
    return
  }
  g0("Connected wallet didn't provide information about max allowed messages in the SendTransaction request. Request may be rejected by the wallet.")
}

function Wo() {
  return {
    type: "request-version"
  }
}

function No(e) {
  return {
    type: "response-version",
    version: e
  }
}

function Kn(e) {
  return {
    ton_connect_sdk_lib: e.ton_connect_sdk_lib,
    ton_connect_ui_lib: e.ton_connect_ui_lib
  }
}

function vr(e, t) {
  var n, r, i, o, c, a, p, m;
  const E = ((n = t == null ? void 0 : t.connectItems) === null || n === void 0 ? void 0 : n.tonProof) && "proof" in t.connectItems.tonProof ? "ton_proof" : "ton_addr";
  return {
    wallet_address: (i = (r = t == null ? void 0 : t.account) === null || r === void 0 ? void 0 : r.address) !== null && i !== void 0 ? i : null,
    wallet_type: (o = t == null ? void 0 : t.device.appName) !== null && o !== void 0 ? o : null,
    wallet_version: (c = t == null ? void 0 : t.device.appVersion) !== null && c !== void 0 ? c : null,
    auth_type: E,
    custom_data: Object.assign({
      chain_id: (p = (a = t == null ? void 0 : t.account) === null || a === void 0 ? void 0 : a.chain) !== null && p !== void 0 ? p : null,
      provider: (m = t == null ? void 0 : t.provider) !== null && m !== void 0 ? m : null
    }, Kn(e))
  }
}

function Fo(e) {
  return {
    type: "connection-started",
    custom_data: Kn(e)
  }
}

function Do(e, t) {
  return Object.assign({
    type: "connection-completed",
    is_success: !0
  }, vr(e, t))
}

function Oo(e, t, n) {
  return {
    type: "connection-error",
    is_success: !1,
    error_message: t,
    error_code: n ?? null,
    custom_data: Kn(e)
  }
}

function jo(e) {
  return {
    type: "connection-restoring-started",
    custom_data: Kn(e)
  }
}

function Ho(e, t) {
  return Object.assign({
    type: "connection-restoring-completed",
    is_success: !0
  }, vr(e, t))
}

function Ko(e, t) {
  return {
    type: "connection-restoring-error",
    is_success: !1,
    error_message: t,
    custom_data: Kn(e)
  }
}

function Vo(e, t) {
  var n, r, i, o;
  return {
    valid_until: (n = String(t.validUntil)) !== null && n !== void 0 ? n : null,
    from: (o = (r = t.from) !== null && r !== void 0 ? r : (i = e == null ? void 0 : e.account) === null || i === void 0 ? void 0 : i.address) !== null && o !== void 0 ? o : null,
    messages: t.messages.map(c => {
      var a, p;
      return {
        address: (a = c.address) !== null && a !== void 0 ? a : null,
        amount: (p = c.amount) !== null && p !== void 0 ? p : null
      }
    })
  }
}

function qo(e, t, n) {
  return Object.assign(Object.assign({
    type: "transaction-sent-for-signature"
  }, vr(e, t)), Vo(t, n))
}

function Go(e, t, n, r) {
  return Object.assign(Object.assign({
    type: "transaction-signed",
    is_success: !0,
    signed_transaction: r.boc
  }, vr(e, t)), Vo(t, n))
}

function Zo(e, t, n, r, i) {
  return Object.assign(Object.assign({
    type: "transaction-signing-failed",
    is_success: !1,
    error_message: r,
    error_code: i ?? null
  }, vr(e, t)), Vo(t, n))
}

function Yo(e, t, n) {
  return Object.assign({
    type: "disconnection",
    scope: n
  }, vr(e, t))
}
class zo {
  constructor() {
    this.window = Oi()
  }
  dispatchEvent(t, n) {
    var r;
    return he(this, void 0, void 0, function*() {
      const i = new CustomEvent(t, {
        detail: n
      });
      (r = this.window) === null || r === void 0 || r.dispatchEvent(i)
    })
  }
  addEventListener(t, n, r) {
    var i;
    return he(this, void 0, void 0, function*() {
      return (i = this.window) === null || i === void 0 || i.addEventListener(t, n, r), () => {
        var o;
        return (o = this.window) === null || o === void 0 ? void 0 : o.removeEventListener(t, n)
      }
    })
  }
}
class B0 {
  constructor(t) {
    var n;
    this.eventPrefix = "ton-connect-", this.tonConnectUiVersion = null, this.eventDispatcher = (n = t == null ? void 0 : t.eventDispatcher) !== null && n !== void 0 ? n : new zo, this.tonConnectSdkVersion = t.tonConnectSdkVersion, this.init().catch()
  }
  get version() {
    return Kn({
      ton_connect_sdk_lib: this.tonConnectSdkVersion,
      ton_connect_ui_lib: this.tonConnectUiVersion
    })
  }
  init() {
    return he(this, void 0, void 0, function*() {
      try {
        yield this.setRequestVersionHandler(), this.tonConnectUiVersion = yield this.requestTonConnectUiVersion()
      } catch {}
    })
  }
  setRequestVersionHandler() {
    return he(this, void 0, void 0, function*() {
      yield this.eventDispatcher.addEventListener("ton-connect-request-version", () => he(this, void 0, void 0, function*() {
        yield this.eventDispatcher.dispatchEvent("ton-connect-response-version", No(this.tonConnectSdkVersion))
      }))
    })
  }
  requestTonConnectUiVersion() {
    return he(this, void 0, void 0, function*() {
      return new Promise((t, n) => he(this, void 0, void 0, function*() {
        try {
          yield this.eventDispatcher.addEventListener("ton-connect-ui-response-version", r => {
            t(r.detail.version)
          }, {
            once: !0
          }), yield this.eventDispatcher.dispatchEvent("ton-connect-ui-request-version", Wo())
        } catch (r) {
          n(r)
        }
      }))
    })
  }
  dispatchUserActionEvent(t) {
    try {
      this.eventDispatcher.dispatchEvent(`${this.eventPrefix}${t.type}`, t).catch()
    } catch {}
  }
  trackConnectionStarted(...t) {
    try {
      const n = Fo(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionCompleted(...t) {
    try {
      const n = Do(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionError(...t) {
    try {
      const n = Oo(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringStarted(...t) {
    try {
      const n = jo(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringCompleted(...t) {
    try {
      const n = Ho(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringError(...t) {
    try {
      const n = Ko(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackDisconnection(...t) {
    try {
      const n = Yo(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSentForSignature(...t) {
    try {
      const n = qo(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSigned(...t) {
    try {
      const n = Go(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSigningFailed(...t) {
    try {
      const n = Zo(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
}
const L0 = "3.0.5";
class Dn {
  constructor(t) {
    if (this.walletsList = new yi, this._wallet = null, this.provider = null, this.statusChangeSubscriptions = [], this.statusChangeErrorSubscriptions = [], this.dappSettings = {
        manifestUrl: (t == null ? void 0 : t.manifestUrl) || C0(),
        storage: (t == null ? void 0 : t.storage) || new A0
      }, this.walletsList = new yi({
        walletsListSource: t == null ? void 0 : t.walletsListSource,
        cacheTTLMs: t == null ? void 0 : t.walletsListCacheTTLMs
      }), this.tracker = new B0({
        eventDispatcher: t == null ? void 0 : t.eventDispatcher,
        tonConnectSdkVersion: L0
      }), !this.dappSettings.manifestUrl) throw new Uo("Dapp tonconnect-manifest.json must be specified if window.location.origin is undefined. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest");
    this.bridgeConnectionStorage = new Fr(this.dappSettings.storage), t != null && t.disableAutoPauseConnection || this.addWindowFocusAndBlurSubscriptions()
  }
  static getWallets() {
    return this.walletsList.getWallets()
  }
  get connected() {
    return this._wallet !== null
  }
  get account() {
    var t;
    return ((t = this._wallet) === null || t === void 0 ? void 0 : t.account) || null
  }
  get wallet() {
    return this._wallet
  }
  set wallet(t) {
    this._wallet = t, this.statusChangeSubscriptions.forEach(n => n(this._wallet))
  }
  getWallets() {
    return this.walletsList.getWallets()
  }
  onStatusChange(t, n) {
    return this.statusChangeSubscriptions.push(t), n && this.statusChangeErrorSubscriptions.push(n), () => {
      this.statusChangeSubscriptions = this.statusChangeSubscriptions.filter(r => r !== t), n && (this.statusChangeErrorSubscriptions = this.statusChangeErrorSubscriptions.filter(r => r !== n))
    }
  }
  connect(t, n) {
    var r, i;
    const o = {};
    if (typeof n == "object" && "tonProof" in n && (o.request = n), typeof n == "object" && ("openingDeadlineMS" in n || "signal" in n || "request" in n) && (o.request = n == null ? void 0 : n.request, o.openingDeadlineMS = n == null ? void 0 : n.openingDeadlineMS, o.signal = n == null ? void 0 : n.signal), this.connected) throw new Ni;
    const c = cn(o == null ? void 0 : o.signal);
    if ((r = this.abortController) === null || r === void 0 || r.abort(), this.abortController = c, c.signal.aborted) throw new Ce("Connection was aborted");
    return (i = this.provider) === null || i === void 0 || i.closeConnection(), this.provider = this.createProvider(t), c.signal.addEventListener("abort", () => {
      var a;
      (a = this.provider) === null || a === void 0 || a.closeConnection(), this.provider = null
    }), this.tracker.trackConnectionStarted(), this.provider.connect(this.createConnectRequest(o == null ? void 0 : o.request), {
      openingDeadlineMS: o == null ? void 0 : o.openingDeadlineMS,
      signal: c.signal
    })
  }
  restoreConnection(t) {
    var n, r;
    return he(this, void 0, void 0, function*() {
      this.tracker.trackConnectionRestoringStarted();
      const i = cn(t == null ? void 0 : t.signal);
      if ((n = this.abortController) === null || n === void 0 || n.abort(), this.abortController = i, i.signal.aborted) {
        this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
        return
      }
      const [o, c] = yield Promise.all([this.bridgeConnectionStorage.storedConnectionType(), this.walletsList.getEmbeddedWallet()]);
      if (i.signal.aborted) {
        this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
        return
      }
      let a = null;
      try {
        switch (o) {
          case "http":
            a = yield Dr.fromStorage(this.dappSettings.storage);
            break;
          case "injected":
            a = yield Qt.fromStorage(this.dappSettings.storage);
            break;
          default:
            if (c) a = this.createProvider(c);
            else return
        }
      } catch {
        this.tracker.trackConnectionRestoringError("Provider is not restored"), yield this.bridgeConnectionStorage.removeConnection(), a == null || a.closeConnection(), a = null;
        return
      }
      if (i.signal.aborted) {
        a == null || a.closeConnection(), this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
        return
      }
      if (!a) {
        Tn("Provider is not restored"), this.tracker.trackConnectionRestoringError("Provider is not restored");
        return
      }(r = this.provider) === null || r === void 0 || r.closeConnection(), this.provider = a, a.listen(this.walletEventsListener.bind(this));
      const p = () => {
        this.tracker.trackConnectionRestoringError("Connection restoring was aborted"), a == null || a.closeConnection(), a = null
      };
      i.signal.addEventListener("abort", p);
      const m = kr(E => he(this, void 0, void 0, function*() {
          yield a == null ? void 0 : a.restoreConnection({
            openingDeadlineMS: t == null ? void 0 : t.openingDeadlineMS,
            signal: E.signal
          }), i.signal.removeEventListener("abort", p), this.connected ? this.tracker.trackConnectionRestoringCompleted(this.wallet) : this.tracker.trackConnectionRestoringError("Connection restoring failed")
        }), {
          attempts: Number.MAX_SAFE_INTEGER,
          delayMs: 2e3,
          signal: t == null ? void 0 : t.signal
        }),
        y = new Promise(E => setTimeout(() => E(), 12e3));
      return Promise.race([m, y])
    })
  }
  sendTransaction(t, n) {
    return he(this, void 0, void 0, function*() {
      const r = {};
      typeof n == "function" ? r.onRequestSent = n : (r.onRequestSent = n == null ? void 0 : n.onRequestSent, r.signal = n == null ? void 0 : n.signal);
      const i = cn(r == null ? void 0 : r.signal);
      if (i.signal.aborted) throw new Ce("Transaction sending was aborted");
      this.checkConnection(), T0(this.wallet.device.features, {
        requiredMessagesNumber: t.messages.length
      }), this.tracker.trackTransactionSentForSignature(this.wallet, t);
      const {
        validUntil: o
      } = t, c = s0(t, ["validUntil"]), a = t.from || this.account.address, p = t.network || this.account.chain, m = yield this.provider.sendRequest(ai.convertToRpcRequest(Object.assign(Object.assign({}, c), {
        valid_until: o,
        from: a,
        network: p
      })), {
        onRequestSent: r.onRequestSent,
        signal: i.signal
      });
      if (ai.isError(m)) return this.tracker.trackTransactionSigningFailed(this.wallet, t, m.error.message, m.error.code), ai.parseAndThrowError(m);
      const y = ai.convertFromRpcResponse(m);
      return this.tracker.trackTransactionSigned(this.wallet, t, y), y
    })
  }
  disconnect(t) {
    var n;
    return he(this, void 0, void 0, function*() {
      if (!this.connected) throw new Wr;
      const r = cn(t == null ? void 0 : t.signal),
        i = this.abortController;
      if (this.abortController = r, r.signal.aborted) throw new Ce("Disconnect was aborted");
      this.onWalletDisconnected("dapp"), yield(n = this.provider) === null || n === void 0 ? void 0 : n.disconnect({
        signal: r.signal
      }), i == null || i.abort()
    })
  }
  pauseConnection() {
    var t;
    ((t = this.provider) === null || t === void 0 ? void 0 : t.type) === "http" && this.provider.pause()
  }
  unPauseConnection() {
    var t;
    return ((t = this.provider) === null || t === void 0 ? void 0 : t.type) !== "http" ? Promise.resolve() : this.provider.unPause()
  }
  addWindowFocusAndBlurSubscriptions() {
    const t = b0();
    if (t) try {
      t.addEventListener("visibilitychange", () => {
        t.hidden ? this.pauseConnection() : this.unPauseConnection().catch()
      })
    } catch (n) {
      Tn("Cannot subscribe to the document.visibilitychange: ", n)
    }
  }
  createProvider(t) {
    let n;
    return !Array.isArray(t) && a0(t) ? n = new Qt(this.dappSettings.storage, t.jsBridgeKey) : n = new Dr(this.dappSettings.storage, t), n.listen(this.walletEventsListener.bind(this)), n
  }
  walletEventsListener(t) {
    switch (t.event) {
      case "connect":
        this.onWalletConnected(t.payload);
        break;
      case "connect_error":
        this.onWalletConnectError(t.payload);
        break;
      case "disconnect":
        this.onWalletDisconnected("wallet")
    }
  }
  onWalletConnected(t) {
    const n = t.items.find(o => o.name === "ton_addr"),
      r = t.items.find(o => o.name === "ton_proof");
    if (!n) throw new Ce("ton_addr connection item was not found");
    const i = {
      device: t.device,
      provider: this.provider.type,
      account: {
        address: n.address,
        chain: n.network,
        walletStateInit: n.walletStateInit,
        publicKey: n.publicKey
      }
    };
    r && (i.connectItems = {
      tonProof: r
    }), this.wallet = i, this.tracker.trackConnectionCompleted(i)
  }
  onWalletConnectError(t) {
    const n = c0.parseError(t);
    if (this.statusChangeErrorSubscriptions.forEach(r => r(n)), Pt(n), this.tracker.trackConnectionError(t.message, t.code), n instanceof Wi || n instanceof Pi) throw Tn(n), n
  }
  onWalletDisconnected(t) {
    this.tracker.trackDisconnection(this.wallet, t), this.wallet = null
  }
  checkConnection() {
    if (!this.connected) throw new Wr
  }
  createConnectRequest(t) {
    const n = [{
      name: "ton_addr"
    }];
    return t != null && t.tonProof && n.push({
      name: "ton_proof",
      payload: t.tonProof
    }), {
      manifestUrl: this.dappSettings.manifestUrl,
      items: n
    }
  }
}
Dn.walletsList = new yi;
Dn.isWalletInjected = e => Qt.isWalletInjected(e);
Dn.isInsideWalletBrowser = e => Qt.isInsideWalletBrowser(e);
const M0 = 81,
  I0 = 128;

function Qo(e, t = !1) {
  const {
    wc: n,
    hex: r
  } = R0(e);
  let i = M0;
  t && (i |= I0);
  const o = new Int8Array(34);
  o[0] = i, o[1] = n, o.set(r, 2);
  const c = new Uint8Array(36);
  return c.set(o), c.set($0(o), 34), $o.encode(c).replace(/\+/g, "-").replace(/\//g, "_")
}

function R0(e) {
  if (!e.includes(":")) throw new Qn(`Wrong address ${e}. Address must include ":".`);
  const t = e.split(":");
  if (t.length !== 2) throw new Qn(`Wrong address ${e}. Address must include ":" only once.`);
  const n = parseInt(t[0]);
  if (n !== 0 && n !== -1) throw new Qn(`Wrong address ${e}. WC must be eq 0 or -1, but ${n} received.`);
  const r = t[1];
  if ((r == null ? void 0 : r.length) !== 64) throw new Qn(`Wrong address ${e}. Hex part must be 64bytes length, but ${r==null?void 0:r.length} received.`);
  return {
    wc: n,
    hex: U0(r)
  }
}

function $0(e) {
  let n = 0;
  const r = new Uint8Array(e.length + 2);
  r.set(e);
  for (let i of r) {
    let o = 128;
    for (; o > 0;) n <<= 1, i & o && (n += 1), o >>= 1, n > 65535 && (n &= 65535, n ^= 4129)
  }
  return new Uint8Array([Math.floor(n / 256), n % 256])
}
const vo = {};
for (let e = 0; e <= 255; e++) {
  let t = e.toString(16);
  t.length < 2 && (t = "0" + t), vo[t] = e
}

function U0(e) {
  e = e.toLowerCase();
  const t = e.length;
  if (t % 2 !== 0) throw new Nr("Hex string must have length a multiple of 2: " + e);
  const n = t / 2,
    r = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    const o = i * 2,
      c = e.substring(o, o + 2);
    if (!vo.hasOwnProperty(c)) throw new Nr("Invalid hex character: " + c);
    r[i] = vo[c]
  }
  return r
}
var yo = {
  exports: {}
};
(function(e, t) {
  (function(n, r) {
    var i = "1.0.39",
      o = "",
      c = "?",
      a = "function",
      p = "undefined",
      m = "object",
      y = "string",
      E = "major",
      b = "model",
      A = "name",
      _ = "type",
      T = "vendor",
      U = "version",
      ae = "architecture",
      J = "console",
      q = "mobile",
      te = "tablet",
      N = "smarttv",
      X = "wearable",
      H = "embedded",
      D = 500,
      M = "Amazon",
      K = "Apple",
      I = "ASUS",
      k = "BlackBerry",
      ie = "Browser",
      ee = "Chrome",
      re = "Edge",
      Se = "Firefox",
      Le = "Google",
      Ze = "Huawei",
      tt = "LG",
      xt = "Microsoft",
      ze = "Motorola",
      Qe = "Opera",
      ft = "Samsung",
      bt = "Sharp",
      Pe = "Sony",
      yt = "Xiaomi",
      an = "Zebra",
      j = "Facebook",
      V = "Chromium OS",
      F = "Mac OS",
      Z = " Browser",
      Q = function(Fe, d) {
        var l = {};
        for (var u in Fe) d[u] && d[u].length % 2 === 0 ? l[u] = d[u].concat(Fe[u]) : l[u] = Fe[u];
        return l
      },
      le = function(Fe) {
        for (var d = {}, l = 0; l < Fe.length; l++) d[Fe[l].toUpperCase()] = Fe[l];
        return d
      },
      xe = function(Fe, d) {
        return typeof Fe === y ? me(d).indexOf(me(Fe)) !== -1 : !1
      },
      me = function(Fe) {
        return Fe.toLowerCase()
      },
      ct = function(Fe) {
        return typeof Fe === y ? Fe.replace(/[^\d\.]/g, o).split(".")[0] : r
      },
      dt = function(Fe, d) {
        if (typeof Fe === y) return Fe = Fe.replace(/^\s\s*/, o), typeof d === p ? Fe : Fe.substring(0, D)
      },
      _e = function(Fe, d) {
        for (var l = 0, u, x, S, B, R, Ae; l < d.length && !R;) {
          var nt = d[l],
            rt = d[l + 1];
          for (u = x = 0; u < nt.length && !R && nt[u];)
            if (R = nt[u++].exec(Fe), R)
              for (S = 0; S < rt.length; S++) Ae = R[++x], B = rt[S], typeof B === m && B.length > 0 ? B.length === 2 ? typeof B[1] == a ? this[B[0]] = B[1].call(this, Ae) : this[B[0]] = B[1] : B.length === 3 ? typeof B[1] === a && !(B[1].exec && B[1].test) ? this[B[0]] = Ae ? B[1].call(this, Ae, B[2]) : r : this[B[0]] = Ae ? Ae.replace(B[1], B[2]) : r : B.length === 4 && (this[B[0]] = Ae ? B[3].call(this, Ae.replace(B[1], B[2])) : r) : this[B] = Ae || r;
          l += 2
        }
      },
      pt = function(Fe, d) {
        for (var l in d)
          if (typeof d[l] === m && d[l].length > 0) {
            for (var u = 0; u < d[l].length; u++)
              if (xe(d[l][u], Fe)) return l === c ? r : l
          } else if (xe(d[l], Fe)) return l === c ? r : l;
        return d.hasOwnProperty("*") ? d["*"] : Fe
      },
      _t = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      },
      Jt = {
        ME: "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        2e3: "NT 5.0",
        XP: ["NT 5.1", "NT 5.2"],
        Vista: "NT 6.0",
        7: "NT 6.1",
        8: "NT 6.2",
        "8.1": "NT 6.3",
        10: ["NT 6.4", "NT 10.0"],
        RT: "ARM"
      },
      $t = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [U, [A, "Chrome"]],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [U, [A, "Edge"]],
          [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
          [A, U],
          [/opios[\/ ]+([\w\.]+)/i],
          [U, [A, Qe + " Mini"]],
          [/\bop(?:rg)?x\/([\w\.]+)/i],
          [U, [A, Qe + " GX"]],
          [/\bopr\/([\w\.]+)/i],
          [U, [A, Qe]],
          [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
          [U, [A, "Baidu"]],
          [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
          [A, U],
          [/quark(?:pc)?\/([-\w\.]+)/i],
          [U, [A, "Quark"]],
          [/\bddg\/([\w\.]+)/i],
          [U, [A, "DuckDuckGo"]],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [U, [A, "UC" + ie]],
          [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
          [U, [A, "WeChat"]],
          [/konqueror\/([\w\.]+)/i],
          [U, [A, "Konqueror"]],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [U, [A, "IE"]],
          [/ya(?:search)?browser\/([\w\.]+)/i],
          [U, [A, "Yandex"]],
          [/slbrowser\/([\w\.]+)/i],
          [U, [A, "Smart Lenovo " + ie]],
          [/(avast|avg)\/([\w\.]+)/i],
          [
            [A, /(.+)/, "$1 Secure " + ie], U
          ],
          [/\bfocus\/([\w\.]+)/i],
          [U, [A, Se + " Focus"]],
          [/\bopt\/([\w\.]+)/i],
          [U, [A, Qe + " Touch"]],
          [/coc_coc\w+\/([\w\.]+)/i],
          [U, [A, "Coc Coc"]],
          [/dolfin\/([\w\.]+)/i],
          [U, [A, "Dolphin"]],
          [/coast\/([\w\.]+)/i],
          [U, [A, Qe + " Coast"]],
          [/miuibrowser\/([\w\.]+)/i],
          [U, [A, "MIUI " + ie]],
          [/fxios\/([-\w\.]+)/i],
          [U, [A, Se]],
          [/\bqihu|(qi?ho?o?|360)browser/i],
          [
            [A, "360" + Z]
          ],
          [/\b(qq)\/([\w\.]+)/i],
          [
            [A, /(.+)/, "$1Browser"], U
          ],
          [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
          [
            [A, /(.+)/, "$1" + Z], U
          ],
          [/samsungbrowser\/([\w\.]+)/i],
          [U, [A, ft + " Internet"]],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [
            [A, /_/g, " "], U
          ],
          [/metasr[\/ ]?([\d\.]+)/i],
          [U, [A, "Sogou Explorer"]],
          [/(sogou)mo\w+\/([\d\.]+)/i],
          [
            [A, "Sogou Mobile"], U
          ],
          [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
          [A, U],
          [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
          [A],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [
            [A, j], U
          ],
          [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
          [A, U],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [U, [A, "GSA"]],
          [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
          [U, [A, "TikTok"]],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [U, [A, ee + " Headless"]],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [
            [A, ee + " WebView"], U
          ],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [U, [A, "Android " + ie]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [A, U],
          [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
          [U, [A, "Mobile Safari"]],
          [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
          [U, A],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [A, [U, pt, _t]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [A, U],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [
            [A, "Netscape"], U
          ],
          [/(wolvic)\/([\w\.]+)/i],
          [A, U],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [U, [A, Se + " Reality"]],
          [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
          [A, [U, /_/g, "."]],
          [/(cobalt)\/([\w\.]+)/i],
          [A, [U, /master.|lts./, ""]]
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
          [
            [ae, "amd64"]
          ],
          [/(ia32(?=;))/i],
          [
            [ae, me]
          ],
          [/((?:i[346]|x)86)[;\)]/i],
          [
            [ae, "ia32"]
          ],
          [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
          [
            [ae, "arm64"]
          ],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [
            [ae, "armhf"]
          ],
          [/windows (ce|mobile); ppc;/i],
          [
            [ae, "arm"]
          ],
          [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
          [
            [ae, /ower/, o, me]
          ],
          [/(sun4\w)[;\)]/i],
          [
            [ae, "sparc"]
          ],
          [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
          [
            [ae, me]
          ]
        ],
        device: [
          [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
          [b, [T, ft],
            [_, te]
          ],
          [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
          [b, [T, ft],
            [_, q]
          ],
          [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
          [b, [T, K],
            [_, q]
          ],
          [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
          [b, [T, K],
            [_, te]
          ],
          [/(macintosh);/i],
          [b, [T, K]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [b, [T, bt],
            [_, q]
          ],
          [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
          [b, [T, Ze],
            [_, te]
          ],
          [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
          [b, [T, Ze],
            [_, q]
          ],
          [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
          [
            [b, /_/g, " "],
            [T, yt],
            [_, q]
          ],
          [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
          [
            [b, /_/g, " "],
            [T, yt],
            [_, te]
          ],
          [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
          [b, [T, "OPPO"],
            [_, q]
          ],
          [/\b(opd2\d{3}a?) bui/i],
          [b, [T, "OPPO"],
            [_, te]
          ],
          [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [b, [T, "Vivo"],
            [_, q]
          ],
          [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
          [b, [T, "Realme"],
            [_, q]
          ],
          [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
          [b, [T, ze],
            [_, q]
          ],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [b, [T, ze],
            [_, te]
          ],
          [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [b, [T, tt],
            [_, te]
          ],
          [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
          [b, [T, tt],
            [_, q]
          ],
          [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
          [b, [T, "Lenovo"],
            [_, te]
          ],
          [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
          [
            [b, /_/g, " "],
            [T, "Nokia"],
            [_, q]
          ],
          [/(pixel c)\b/i],
          [b, [T, Le],
            [_, te]
          ],
          [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
          [b, [T, Le],
            [_, q]
          ],
          [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
          [b, [T, Pe],
            [_, q]
          ],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [b, "Xperia Tablet"],
            [T, Pe],
            [_, te]
          ],
          [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
          [b, [T, "OnePlus"],
            [_, q]
          ],
          [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
          [b, [T, M],
            [_, te]
          ],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [b, /(.+)/g, "Fire Phone $1"],
            [T, M],
            [_, q]
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [b, T, [_, te]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
          [b, [T, k],
            [_, q]
          ],
          [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
          [b, [T, I],
            [_, te]
          ],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [b, [T, I],
            [_, q]
          ],
          [/(nexus 9)/i],
          [b, [T, "HTC"],
            [_, te]
          ],
          [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
          [T, [b, /_/g, " "],
            [_, q]
          ],
          [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
          [b, [T, "TCL"],
            [_, te]
          ],
          [/(itel) ((\w+))/i],
          [
            [T, me], b, [_, pt, {
              tablet: ["p10001l", "w7001"],
              "*": "mobile"
            }]
          ],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [b, [T, "Acer"],
            [_, te]
          ],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [b, [T, "Meizu"],
            [_, q]
          ],
          [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
          [b, [T, "Ulefone"],
            [_, q]
          ],
          [/droid.+; (a(?:015|06[35]|142p?))/i],
          [b, [T, "Nothing"],
            [_, q]
          ],
          [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
          [T, b, [_, q]],
          [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
          [T, b, [_, te]],
          [/(surface duo)/i],
          [b, [T, xt],
            [_, te]
          ],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [b, [T, "Fairphone"],
            [_, q]
          ],
          [/(u304aa)/i],
          [b, [T, "AT&T"],
            [_, q]
          ],
          [/\bsie-(\w*)/i],
          [b, [T, "Siemens"],
            [_, q]
          ],
          [/\b(rct\w+) b/i],
          [b, [T, "RCA"],
            [_, te]
          ],
          [/\b(venue[\d ]{2,7}) b/i],
          [b, [T, "Dell"],
            [_, te]
          ],
          [/\b(q(?:mv|ta)\w+) b/i],
          [b, [T, "Verizon"],
            [_, te]
          ],
          [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
          [b, [T, "Barnes & Noble"],
            [_, te]
          ],
          [/\b(tm\d{3}\w+) b/i],
          [b, [T, "NuVision"],
            [_, te]
          ],
          [/\b(k88) b/i],
          [b, [T, "ZTE"],
            [_, te]
          ],
          [/\b(nx\d{3}j) b/i],
          [b, [T, "ZTE"],
            [_, q]
          ],
          [/\b(gen\d{3}) b.+49h/i],
          [b, [T, "Swiss"],
            [_, q]
          ],
          [/\b(zur\d{3}) b/i],
          [b, [T, "Swiss"],
            [_, te]
          ],
          [/\b((zeki)?tb.*\b) b/i],
          [b, [T, "Zeki"],
            [_, te]
          ],
          [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
          [
            [T, "Dragon Touch"], b, [_, te]
          ],
          [/\b(ns-?\w{0,9}) b/i],
          [b, [T, "Insignia"],
            [_, te]
          ],
          [/\b((nxa|next)-?\w{0,9}) b/i],
          [b, [T, "NextBook"],
            [_, te]
          ],
          [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
          [
            [T, "Voice"], b, [_, q]
          ],
          [/\b(lvtel\-)?(v1[12]) b/i],
          [
            [T, "LvTel"], b, [_, q]
          ],
          [/\b(ph-1) /i],
          [b, [T, "Essential"],
            [_, q]
          ],
          [/\b(v(100md|700na|7011|917g).*\b) b/i],
          [b, [T, "Envizen"],
            [_, te]
          ],
          [/\b(trio[-\w\. ]+) b/i],
          [b, [T, "MachSpeed"],
            [_, te]
          ],
          [/\btu_(1491) b/i],
          [b, [T, "Rotor"],
            [_, te]
          ],
          [/(shield[\w ]+) b/i],
          [b, [T, "Nvidia"],
            [_, te]
          ],
          [/(sprint) (\w+)/i],
          [T, b, [_, q]],
          [/(kin\.[onetw]{3})/i],
          [
            [b, /\./g, " "],
            [T, xt],
            [_, q]
          ],
          [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [b, [T, an],
            [_, te]
          ],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [b, [T, an],
            [_, q]
          ],
          [/smart-tv.+(samsung)/i],
          [T, [_, N]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [b, /^/, "SmartTV"],
            [T, ft],
            [_, N]
          ],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [T, tt],
            [_, N]
          ],
          [/(apple) ?tv/i],
          [T, [b, K + " TV"],
            [_, N]
          ],
          [/crkey/i],
          [
            [b, ee + "cast"],
            [T, Le],
            [_, N]
          ],
          [/droid.+aft(\w+)( bui|\))/i],
          [b, [T, M],
            [_, N]
          ],
          [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
          [b, [T, bt],
            [_, N]
          ],
          [/(bravia[\w ]+)( bui|\))/i],
          [b, [T, Pe],
            [_, N]
          ],
          [/(mitv-\w{5}) bui/i],
          [b, [T, yt],
            [_, N]
          ],
          [/Hbbtv.*(technisat) (.*);/i],
          [T, b, [_, N]],
          [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
          [
            [T, dt],
            [b, dt],
            [_, N]
          ],
          [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
          [
            [_, N]
          ],
          [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
          [T, b, [_, J]],
          [/droid.+; (shield) bui/i],
          [b, [T, "Nvidia"],
            [_, J]
          ],
          [/(playstation [345portablevi]+)/i],
          [b, [T, Pe],
            [_, J]
          ],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [b, [T, xt],
            [_, J]
          ],
          [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
          [b, [T, ft],
            [_, X]
          ],
          [/((pebble))app/i],
          [T, b, [_, X]],
          [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
          [b, [T, K],
            [_, X]
          ],
          [/droid.+; (glass) \d/i],
          [b, [T, Le],
            [_, X]
          ],
          [/droid.+; (wt63?0{2,3})\)/i],
          [b, [T, an],
            [_, X]
          ],
          [/(quest( \d| pro)?)/i],
          [b, [T, j],
            [_, X]
          ],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [T, [_, H]],
          [/(aeobc)\b/i],
          [b, [T, M],
            [_, H]
          ],
          [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
          [b, [_, q]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
          [b, [_, te]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [
            [_, te]
          ],
          [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
          [
            [_, q]
          ],
          [/(android[-\w\. ]{0,9});.+buil/i],
          [b, [T, "Generic"]]
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [U, [A, re + "HTML"]],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [U, [A, "Blink"]],
          [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
          [A, U],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [U, A]
        ],
        os: [
          [/microsoft (windows) (vista|xp)/i],
          [A, U],
          [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
          [A, [U, pt, Jt]],
          [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
          [
            [U, pt, Jt],
            [A, "Windows"]
          ],
          [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
          [
            [U, /_/g, "."],
            [A, "iOS"]
          ],
          [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
          [
            [A, F],
            [U, /_/g, "."]
          ],
          [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
          [U, A],
          [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
          [A, U],
          [/\(bb(10);/i],
          [U, [A, k]],
          [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
          [U, [A, "Symbian"]],
          [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
          [U, [A, Se + " OS"]],
          [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
          [U, [A, "webOS"]],
          [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
          [U, [A, "watchOS"]],
          [/crkey\/([\d\.]+)/i],
          [U, [A, ee + "cast"]],
          [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
          [
            [A, V], U
          ],
          [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
          [A, U],
          [/(sunos) ?([\w\.\d]*)/i],
          [
            [A, "Solaris"], U
          ],
          [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
          [A, U]
        ]
      },
      At = function(Fe, d) {
        if (typeof Fe === m && (d = Fe, Fe = r), !(this instanceof At)) return new At(Fe, d).getResult();
        var l = typeof n !== p && n.navigator ? n.navigator : r,
          u = Fe || (l && l.userAgent ? l.userAgent : o),
          x = l && l.userAgentData ? l.userAgentData : r,
          S = d ? Q($t, d) : $t,
          B = l && l.userAgent == u;
        return this.getBrowser = function() {
          var R = {};
          return R[A] = r, R[U] = r, _e.call(R, u, S.browser), R[E] = ct(R[U]), B && l && l.brave && typeof l.brave.isBrave == a && (R[A] = "Brave"), R
        }, this.getCPU = function() {
          var R = {};
          return R[ae] = r, _e.call(R, u, S.cpu), R
        }, this.getDevice = function() {
          var R = {};
          return R[T] = r, R[b] = r, R[_] = r, _e.call(R, u, S.device), B && !R[_] && x && x.mobile && (R[_] = q), B && R[b] == "Macintosh" && l && typeof l.standalone !== p && l.maxTouchPoints && l.maxTouchPoints > 2 && (R[b] = "iPad", R[_] = te), R
        }, this.getEngine = function() {
          var R = {};
          return R[A] = r, R[U] = r, _e.call(R, u, S.engine), R
        }, this.getOS = function() {
          var R = {};
          return R[A] = r, R[U] = r, _e.call(R, u, S.os), B && !R[A] && x && x.platform && x.platform != "Unknown" && (R[A] = x.platform.replace(/chrome os/i, V).replace(/macos/i, F)), R
        }, this.getResult = function() {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          }
        }, this.getUA = function() {
          return u
        }, this.setUA = function(R) {
          return u = typeof R === y && R.length > D ? dt(R, D) : R, this
        }, this.setUA(u), this
      };
    At.VERSION = i, At.BROWSER = le([A, U, E]), At.CPU = le([ae]), At.DEVICE = le([b, T, _, J, q, N, te, X, H]), At.ENGINE = At.OS = le([A, U]), e.exports && (t = e.exports = At), t.UAParser = At;
    var Ot = typeof n !== p && (n.jQuery || n.Zepto);
    if (Ot && !Ot.ua) {
      var kt = new At;
      Ot.ua = kt.getResult(), Ot.ua.get = function() {
        return kt.getUA()
      }, Ot.ua.set = function(Fe) {
        kt.setUA(Fe);
        var d = kt.getResult();
        for (var l in d) Ot.ua[l] = d[l]
      }
    }
  })(typeof window == "object" ? window : xa)
})(yo, yo.exports);
var P0 = yo.exports;
const W0 = qr(P0);
var N0 = function(t) {
  return F0(t) && !D0(t)
};

function F0(e) {
  return !!e && typeof e == "object"
}

function D0(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || H0(e)
}
var O0 = typeof Symbol == "function" && Symbol.for,
  j0 = O0 ? Symbol.for("react.element") : 60103;

function H0(e) {
  return e.$$typeof === j0
}

function K0(e) {
  return Array.isArray(e) ? [] : {}
}

function Or(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? hr(K0(e), e, t) : e
}

function V0(e, t, n) {
  return e.concat(t).map(function(r) {
    return Or(r, n)
  })
}

function q0(e, t) {
  if (!t.customMerge) return hr;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : hr
}

function G0(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t)
  }) : []
}

function As(e) {
  return Object.keys(e).concat(G0(e))
}

function Ba(e, t) {
  try {
    return t in e
  } catch {
    return !1
  }
}

function Z0(e, t) {
  return Ba(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
}

function Y0(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && As(e).forEach(function(i) {
    r[i] = Or(e[i], n)
  }), As(t).forEach(function(i) {
    Z0(e, i) || (Ba(e, i) && n.isMergeableObject(t[i]) ? r[i] = q0(i, n)(e[i], t[i], n) : r[i] = Or(t[i], n))
  }), r
}

function hr(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || V0, n.isMergeableObject = n.isMergeableObject || N0, n.cloneUnlessOtherwiseSpecified = Or;
  var r = Array.isArray(t),
    i = Array.isArray(e),
    o = r === i;
  return o ? r ? n.arrayMerge(e, t, n) : Y0(e, t, n) : Or(t, n)
}
hr.all = function(t, n) {
  if (!Array.isArray(t)) throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return hr(r, i, n)
  }, {})
};
var z0 = hr,
  Q0 = z0;
const J0 = qr(Q0);
var La = {
  exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;

    function n() {
      for (var o = "", c = 0; c < arguments.length; c++) {
        var a = arguments[c];
        a && (o = i(o, r(a)))
      }
      return o
    }

    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) return o.toString();
      var c = "";
      for (var a in o) t.call(o, a) && o[a] && (c = i(c, a));
      return c
    }

    function i(o, c) {
      return c ? o ? o + " " + c : o + c : o
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n
  })()
})(La);
var X0 = La.exports;
const wi = qr(X0);
var ec = Object.defineProperty,
  tc = Object.defineProperties,
  nc = Object.getOwnPropertyDescriptors,
  ks = Object.getOwnPropertySymbols,
  rc = Object.prototype.hasOwnProperty,
  ic = Object.prototype.propertyIsEnumerable,
  xo = (e, t, n) => t in e ? ec(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : e[t] = n,
  ut = (e, t) => {
    for (var n in t || (t = {})) rc.call(t, n) && xo(e, n, t[n]);
    if (ks)
      for (var n of ks(t)) ic.call(t, n) && xo(e, n, t[n]);
    return e
  },
  tn = (e, t) => tc(e, nc(t)),
  ke = (e, t, n) => (xo(e, typeof t != "symbol" ? t + "" : t, n), n),
  lt = (e, t, n) => new Promise((r, i) => {
    var o = p => {
        try {
          a(n.next(p))
        } catch (m) {
          i(m)
        }
      },
      c = p => {
        try {
          a(n.throw(p))
        } catch (m) {
          i(m)
        }
      },
      a = p => p.done ? r(p.value) : Promise.resolve(p.value).then(o, c);
    a((n = n.apply(e, t)).next())
  }),
  Ts, Bs, Ls, Ms, Is, Rs, $s, Us;
const Et = {};

function oc(e) {
  Et.context = e
}
const sc = (e, t) => e === t,
  un = Symbol("solid-proxy"),
  bo = Symbol("solid-track"),
  bi = {
    equals: sc
  };
let Ma = Na;
const Rn = 1,
  Ci = 2,
  Ia = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  },
  ro = {};
var Wt = null;
let er = null,
  St = null,
  Zt = null,
  Bn = null,
  Jo = 0;

function Br(e, t) {
  const n = St,
    r = Wt,
    i = e.length === 0,
    o = i ? Ia : {
      owned: null,
      cleanups: null,
      context: null,
      owner: t === void 0 ? r : t
    },
    c = i ? e : () => e(() => Dt(() => qi(o)));
  Wt = o, St = null;
  try {
    return On(c, !0)
  } finally {
    St = n, Wt = r
  }
}

function Be(e, t) {
  t = t ? Object.assign({}, bi, t) : bi;
  const n = {
      value: e,
      observers: null,
      observerSlots: null,
      comparator: t.equals || void 0
    },
    r = i => (typeof i == "function" && (i = i(n.value)), Wa(n, i));
  return [Pa.bind(n), r]
}

function Ei(e, t, n) {
  const r = Vi(e, t, !0, Rn);
  yr(r)
}

function qe(e, t, n) {
  const r = Vi(e, t, !1, Rn);
  yr(r)
}

function Nt(e, t, n) {
  Ma = hc;
  const r = Vi(e, t, !1, Rn);
  r.user = !0, Bn ? Bn.push(r) : yr(r)
}

function de(e, t, n) {
  n = n ? Object.assign({}, bi, n) : bi;
  const r = Vi(e, t, !0, 0);
  return r.observers = null, r.observerSlots = null, r.comparator = n.equals || void 0, yr(r), Pa.bind(r)
}

function ac(e, t, n) {
  let r, i, o;
  arguments.length === 2 && typeof t == "object" || arguments.length === 1 ? (r = !0, i = e, o = {}) : (r = e, i = t, o = {});
  let c = null,
    a = ro,
    p = null,
    m = !1,
    y = "initialValue" in o,
    E = typeof r == "function" && de(r);
  const b = new Set,
    [A, _] = (o.storage || Be)(o.initialValue),
    [T, U] = Be(void 0),
    [ae, J] = Be(void 0, {
      equals: !1
    }),
    [q, te] = Be(y ? "ready" : "unresolved");
  if (Et.context) {
    p = `${Et.context.id}${Et.context.count++}`;
    let M;
    o.ssrLoadFrom === "initial" ? a = o.initialValue : Et.load && (M = Et.load(p)) && (a = M[0])
  }

  function N(M, K, I, k) {
    return c === M && (c = null, y = !0, (M === a || K === a) && o.onHydrated && queueMicrotask(() => o.onHydrated(k, {
      value: K
    })), a = ro, X(K, I)), K
  }

  function X(M, K) {
    On(() => {
      K === void 0 && _(() => M), te(K !== void 0 ? "errored" : "ready"), U(K);
      for (const I of b.keys()) I.decrement();
      b.clear()
    }, !1)
  }

  function H() {
    const M = uc,
      K = A(),
      I = T();
    if (I !== void 0 && !c) throw I;
    return St && !St.user && M && Ei(() => {
      ae(), c && (M.resolved || b.has(M) || (M.increment(), b.add(M)))
    }), K
  }

  function D(M = !0) {
    if (M !== !1 && m) return;
    m = !1;
    const K = E ? E() : r;
    if (K == null || K === !1) {
      N(c, Dt(A));
      return
    }
    const I = a !== ro ? a : Dt(() => i(K, {
      value: A(),
      refetching: M
    }));
    return typeof I != "object" || !(I && "then" in I) ? (N(c, I, void 0, K), I) : (c = I, m = !0, queueMicrotask(() => m = !1), On(() => {
      te(y ? "refreshing" : "pending"), J()
    }, !1), I.then(k => N(I, k, void 0, K), k => N(I, void 0, Da(k), K)))
  }
  return Object.defineProperties(H, {
    state: {
      get: () => q()
    },
    error: {
      get: () => T()
    },
    loading: {
      get() {
        const M = q();
        return M === "pending" || M === "refreshing"
      }
    },
    latest: {
      get() {
        if (!y) return H();
        const M = T();
        if (M && !c) throw M;
        return A()
      }
    }
  }), E ? Ei(() => D(!1)) : D(!1), [H, {
    refetch: D,
    mutate: _
  }]
}

function Ra(e) {
  return On(e, !1)
}

function Dt(e) {
  if (St === null) return e();
  const t = St;
  St = null;
  try {
    return e()
  } finally {
    St = t
  }
}

function lc(e, t, n) {
  const r = Array.isArray(e);
  let i;
  return o => {
    let c;
    if (r) {
      c = Array(e.length);
      for (let p = 0; p < e.length; p++) c[p] = e[p]()
    } else c = e();
    const a = Dt(() => t(c, i, o));
    return i = c, a
  }
}

function $a(e) {
  Nt(() => Dt(e))
}

function Yt(e) {
  return Wt === null || (Wt.cleanups === null ? Wt.cleanups = [e] : Wt.cleanups.push(e)), e
}

function Ua() {
  return St
}

function cc() {
  return Wt
}

function Hi(e, t) {
  const n = Symbol("context");
  return {
    id: n,
    Provider: gc(n),
    defaultValue: e
  }
}

function zt(e) {
  let t;
  return (t = ja(Wt, e.id)) !== void 0 ? t : e.defaultValue
}

function Ki(e) {
  const t = de(e),
    n = de(() => Co(t()));
  return n.toArray = () => {
    const r = n();
    return Array.isArray(r) ? r : r != null ? [r] : []
  }, n
}
let uc;

function Pa() {
  const e = er;
  if (this.sources && (this.state || e))
    if (this.state === Rn || e) yr(this);
    else {
      const t = Zt;
      Zt = null, On(() => _i(this), !1), Zt = t
    } if (St) {
    const t = this.observers ? this.observers.length : 0;
    St.sources ? (St.sources.push(this), St.sourceSlots.push(t)) : (St.sources = [this], St.sourceSlots = [t]), this.observers ? (this.observers.push(St), this.observerSlots.push(St.sources.length - 1)) : (this.observers = [St], this.observerSlots = [St.sources.length - 1])
  }
  return this.value
}

function Wa(e, t, n) {
  let r = e.value;
  return (!e.comparator || !e.comparator(r, t)) && (e.value = t, e.observers && e.observers.length && On(() => {
    for (let i = 0; i < e.observers.length; i += 1) {
      const o = e.observers[i],
        c = er && er.running;
      c && er.disposed.has(o), (c && !o.tState || !c && !o.state) && (o.pure ? Zt.push(o) : Bn.push(o), o.observers && Fa(o)), c || (o.state = Rn)
    }
    if (Zt.length > 1e6) throw Zt = [], new Error
  }, !1)), t
}

function yr(e) {
  if (!e.fn) return;
  qi(e);
  const t = Wt,
    n = St,
    r = Jo;
  St = Wt = e, fc(e, e.value, r), St = n, Wt = t
}

function fc(e, t, n) {
  let r;
  try {
    r = e.fn(t)
  } catch (i) {
    e.pure && (e.state = Rn, e.owned && e.owned.forEach(qi), e.owned = null), Oa(i)
  }(!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? Wa(e, r) : e.value = r, e.updatedAt = n)
}

function Vi(e, t, n, r = Rn, i) {
  const o = {
    fn: e,
    state: r,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: Wt,
    context: null,
    pure: n
  };
  return Wt === null || Wt !== Ia && (Wt.owned ? Wt.owned.push(o) : Wt.owned = [o]), o
}

function Si(e) {
  const t = er;
  if (e.state === 0 || t) return;
  if (e.state === Ci || t) return _i(e);
  if (e.suspense && Dt(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const n = [e];
  for (;
    (e = e.owner) && (!e.updatedAt || e.updatedAt < Jo);)(e.state || t) && n.push(e);
  for (let r = n.length - 1; r >= 0; r--)
    if (e = n[r], e.state === Rn || t) yr(e);
    else if (e.state === Ci || t) {
    const i = Zt;
    Zt = null, On(() => _i(e, n[0]), !1), Zt = i
  }
}

function On(e, t) {
  if (Zt) return e();
  let n = !1;
  t || (Zt = []), Bn ? n = !0 : Bn = [], Jo++;
  try {
    const r = e();
    return dc(n), r
  } catch (r) {
    n || (Bn = null), Zt = null, Oa(r)
  }
}

function dc(e) {
  if (Zt && (Na(Zt), Zt = null), e) return;
  const t = Bn;
  Bn = null, t.length && On(() => Ma(t), !1)
}

function Na(e) {
  for (let t = 0; t < e.length; t++) Si(e[t])
}

function hc(e) {
  let t, n = 0;
  for (t = 0; t < e.length; t++) {
    const r = e[t];
    r.user ? e[n++] = r : Si(r)
  }
  for (Et.context && oc(), t = 0; t < n; t++) Si(e[t])
}

function _i(e, t) {
  const n = er;
  e.state = 0;
  for (let r = 0; r < e.sources.length; r += 1) {
    const i = e.sources[r];
    i.sources && (i.state === Rn || n ? i !== t && Si(i) : (i.state === Ci || n) && _i(i, t))
  }
}

function Fa(e) {
  const t = er;
  for (let n = 0; n < e.observers.length; n += 1) {
    const r = e.observers[n];
    (!r.state || t) && (r.state = Ci, r.pure ? Zt.push(r) : Bn.push(r), r.observers && Fa(r))
  }
}

function qi(e) {
  let t;
  if (e.sources)
    for (; e.sources.length;) {
      const n = e.sources.pop(),
        r = e.sourceSlots.pop(),
        i = n.observers;
      if (i && i.length) {
        const o = i.pop(),
          c = n.observerSlots.pop();
        r < i.length && (o.sourceSlots[c] = r, i[r] = o, n.observerSlots[r] = c)
      }
    }
  if (e.owned) {
    for (t = 0; t < e.owned.length; t++) qi(e.owned[t]);
    e.owned = null
  }
  if (e.cleanups) {
    for (t = 0; t < e.cleanups.length; t++) e.cleanups[t]();
    e.cleanups = null
  }
  e.state = 0, e.context = null
}

function Da(e) {
  return e instanceof Error || typeof e == "string" ? e : new Error("Unknown error")
}

function Oa(e) {
  throw e = Da(e), e
}

function ja(e, t) {
  return e ? e.context && e.context[t] !== void 0 ? e.context[t] : ja(e.owner, t) : void 0
}

function Co(e) {
  if (typeof e == "function" && !e.length) return Co(e());
  if (Array.isArray(e)) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const r = Co(e[n]);
      Array.isArray(r) ? t.push.apply(t, r) : t.push(r)
    }
    return t
  }
  return e
}

function gc(e, t) {
  return function(r) {
    let i;
    return qe(() => i = Dt(() => (Wt.context = {
      [e]: r.value
    }, Ki(() => r.children))), void 0), i
  }
}
const wc = Symbol("fallback");

function Ps(e) {
  for (let t = 0; t < e.length; t++) e[t]()
}

function pc(e, t, n = {}) {
  let r = [],
    i = [],
    o = [],
    c = 0,
    a = t.length > 1 ? [] : null;
  return Yt(() => Ps(o)), () => {
    let p = e() || [],
      m, y;
    return p[bo], Dt(() => {
      let b = p.length,
        A, _, T, U, ae, J, q, te, N;
      if (b === 0) c !== 0 && (Ps(o), o = [], r = [], i = [], c = 0, a && (a = [])), n.fallback && (r = [wc], i[0] = Br(X => (o[0] = X, n.fallback())), c = 1);
      else if (c === 0) {
        for (i = new Array(b), y = 0; y < b; y++) r[y] = p[y], i[y] = Br(E);
        c = b
      } else {
        for (T = new Array(b), U = new Array(b), a && (ae = new Array(b)), J = 0, q = Math.min(c, b); J < q && r[J] === p[J]; J++);
        for (q = c - 1, te = b - 1; q >= J && te >= J && r[q] === p[te]; q--, te--) T[te] = i[q], U[te] = o[q], a && (ae[te] = a[q]);
        for (A = new Map, _ = new Array(te + 1), y = te; y >= J; y--) N = p[y], m = A.get(N), _[y] = m === void 0 ? -1 : m, A.set(N, y);
        for (m = J; m <= q; m++) N = r[m], y = A.get(N), y !== void 0 && y !== -1 ? (T[y] = i[m], U[y] = o[m], a && (ae[y] = a[m]), y = _[y], A.set(N, y)) : o[m]();
        for (y = J; y < b; y++) y in T ? (i[y] = T[y], o[y] = U[y], a && (a[y] = ae[y], a[y](y))) : i[y] = Br(E);
        i = i.slice(0, c = b), r = p.slice(0)
      }
      return i
    });

    function E(b) {
      if (o[y] = b, a) {
        const [A, _] = Be(y);
        return a[y] = _, t(p[y], A)
      }
      return t(p[y])
    }
  }
}

function g(e, t) {
  return Dt(() => e(t || {}))
}

function li() {
  return !0
}
const Eo = {
  get(e, t, n) {
    return t === un ? n : e.get(t)
  },
  has(e, t) {
    return t === un ? !0 : e.has(t)
  },
  set: li,
  deleteProperty: li,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t)
      },
      set: li,
      deleteProperty: li
    }
  },
  ownKeys(e) {
    return e.keys()
  }
};

function io(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {}
}

function gn(...e) {
  let t = !1;
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    t = t || !!i && un in i, e[r] = typeof i == "function" ? (t = !0, de(i)) : i
  }
  if (t) return new Proxy({
    get(r) {
      for (let i = e.length - 1; i >= 0; i--) {
        const o = io(e[i])[r];
        if (o !== void 0) return o
      }
    },
    has(r) {
      for (let i = e.length - 1; i >= 0; i--)
        if (r in io(e[i])) return !0;
      return !1
    },
    keys() {
      const r = [];
      for (let i = 0; i < e.length; i++) r.push(...Object.keys(io(e[i])));
      return [...new Set(r)]
    }
  }, Eo);
  const n = {};
  for (let r = e.length - 1; r >= 0; r--)
    if (e[r]) {
      const i = Object.getOwnPropertyDescriptors(e[r]);
      for (const o in i) o in n || Object.defineProperty(n, o, {
        enumerable: !0,
        get() {
          for (let c = e.length - 1; c >= 0; c--) {
            const a = (e[c] || {})[o];
            if (a !== void 0) return a
          }
        }
      })
    } return n
}

function Xo(e, ...t) {
  const n = new Set(t.flat());
  if (un in e) {
    const i = t.map(o => new Proxy({
      get(c) {
        return o.includes(c) ? e[c] : void 0
      },
      has(c) {
        return o.includes(c) && c in e
      },
      keys() {
        return o.filter(c => c in e)
      }
    }, Eo));
    return i.push(new Proxy({
      get(o) {
        return n.has(o) ? void 0 : e[o]
      },
      has(o) {
        return n.has(o) ? !1 : o in e
      },
      keys() {
        return Object.keys(e).filter(o => !n.has(o))
      }
    }, Eo)), i
  }
  const r = Object.getOwnPropertyDescriptors(e);
  return t.push(Object.keys(r).filter(i => !n.has(i))), t.map(i => {
    const o = {};
    for (let c = 0; c < i.length; c++) {
      const a = i[c];
      a in e && Object.defineProperty(o, a, r[a] ? r[a] : {
        get() {
          return e[a]
        },
        set() {
          return !0
        },
        enumerable: !0
      })
    }
    return o
  })
}

function Qr(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return de(pc(() => e.each, e.children, t || void 0))
}

function Ie(e) {
  let t = !1;
  const n = e.keyed,
    r = de(() => e.when, void 0, {
      equals: (i, o) => t ? i === o : !i == !o
    });
  return de(() => {
    const i = r();
    if (i) {
      const o = e.children,
        c = typeof o == "function" && o.length > 0;
      return t = n || c, c ? Dt(() => o(i)) : o
    }
    return e.fallback
  }, void 0, void 0)
}

function Jr(e) {
  let t = !1,
    n = !1;
  const r = (c, a) => c[0] === a[0] && (t ? c[1] === a[1] : !c[1] == !a[1]) && c[2] === a[2],
    i = Ki(() => e.children),
    o = de(() => {
      let c = i();
      Array.isArray(c) || (c = [c]);
      for (let a = 0; a < c.length; a++) {
        const p = c[a].when;
        if (p) return n = !!c[a].keyed, [a, p, c[a]]
      }
      return [-1]
    }, void 0, {
      equals: r
    });
  return de(() => {
    const [c, a, p] = o();
    if (c < 0) return e.fallback;
    const m = p.children,
      y = typeof m == "function" && m.length > 0;
    return t = n || y, y ? Dt(() => m(a)) : m
  }, void 0, void 0)
}

function jt(e) {
  return e
}
const mc = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"],
  vc = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...mc]),
  yc = new Set(["innerHTML", "textContent", "innerText", "children"]),
  xc = Object.assign(Object.create(null), {
    className: "class",
    htmlFor: "for"
  }),
  Ws = Object.assign(Object.create(null), {
    class: "className",
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly"
  }),
  bc = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]),
  Cc = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]),
  Ec = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace"
  };

function Sc(e, t, n) {
  let r = n.length,
    i = t.length,
    o = r,
    c = 0,
    a = 0,
    p = t[i - 1].nextSibling,
    m = null;
  for (; c < i || a < o;) {
    if (t[c] === n[a]) {
      c++, a++;
      continue
    }
    for (; t[i - 1] === n[o - 1];) i--, o--;
    if (i === c) {
      const y = o < r ? a ? n[a - 1].nextSibling : n[o - a] : p;
      for (; a < o;) e.insertBefore(n[a++], y)
    } else if (o === a)
      for (; c < i;)(!m || !m.has(t[c])) && t[c].remove(), c++;
    else if (t[c] === n[o - 1] && n[a] === t[i - 1]) {
      const y = t[--i].nextSibling;
      e.insertBefore(n[a++], t[c++].nextSibling), e.insertBefore(n[--o], y), t[i] = n[o]
    } else {
      if (!m) {
        m = new Map;
        let E = a;
        for (; E < o;) m.set(n[E], E++)
      }
      const y = m.get(t[c]);
      if (y != null)
        if (a < y && y < o) {
          let E = c,
            b = 1,
            A;
          for (; ++E < i && E < o && !((A = m.get(t[E])) == null || A !== y + b);) b++;
          if (b > y - a) {
            const _ = t[c];
            for (; a < y;) e.insertBefore(n[a++], _)
          } else e.replaceChild(n[a++], t[c++])
        } else c++;
      else t[c++].remove()
    }
  }
}
const Ns = "_$DX_DELEGATE";

function _c(e, t, n, r = {}) {
  let i;
  return Br(o => {
    i = o, t === document ? e() : Ht(t, e(), t.firstChild ? null : void 0, n)
  }, r.owner), () => {
    i(), t.textContent = ""
  }
}

function Ge(e, t, n) {
  if (typeof window > "u") return null;
  const r = document.createElement("template");
  r.innerHTML = e;
  let i = r.content.firstChild;
  return n && (i = i.firstChild), i
}

function Ac(e, t = window.document) {
  const n = t[Ns] || (t[Ns] = new Set);
  for (let r = 0, i = e.length; r < i; r++) {
    const o = e[r];
    n.has(o) || (n.add(o), t.addEventListener(o, $c))
  }
}

function Ee(e, t, n) {
  n == null ? e.removeAttribute(t) : e.setAttribute(t, n)
}

function kc(e, t, n, r) {
  r == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, r)
}

function es(e, t) {
  t == null ? e.removeAttribute("class") : e.className = t
}

function Tc(e, t, n, r) {
  if (r) Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
  else if (Array.isArray(n)) {
    const i = n[0];
    e.addEventListener(t, n[0] = o => i.call(e, n[1], o))
  } else e.addEventListener(t, n)
}

function Bc(e, t, n = {}) {
  const r = Object.keys(t || {}),
    i = Object.keys(n);
  let o, c;
  for (o = 0, c = i.length; o < c; o++) {
    const a = i[o];
    !a || a === "undefined" || t[a] || (Fs(e, a, !1), delete n[a])
  }
  for (o = 0, c = r.length; o < c; o++) {
    const a = r[o],
      p = !!t[a];
    !a || a === "undefined" || n[a] === p || !p || (Fs(e, a, !0), n[a] = p)
  }
  return n
}

function Lc(e, t, n) {
  if (!t) return n ? Ee(e, "style") : t;
  const r = e.style;
  if (typeof t == "string") return r.cssText = t;
  typeof n == "string" && (r.cssText = n = void 0), n || (n = {}), t || (t = {});
  let i, o;
  for (o in n) t[o] == null && r.removeProperty(o), delete n[o];
  for (o in t) i = t[o], i !== n[o] && (r.setProperty(o, i), n[o] = i);
  return n
}

function Ha(e, t = {}, n, r) {
  const i = {};
  return qe(() => i.children = jr(e, t.children, i.children)), qe(() => t.ref && t.ref(e)), qe(() => Mc(e, t, n, !0, i, !0)), i
}

function fr(e, t, n) {
  return Dt(() => e(t, n))
}

function Ht(e, t, n, r) {
  if (n !== void 0 && !r && (r = []), typeof t != "function") return jr(e, t, r, n);
  qe(i => jr(e, t(), i, n), r)
}

function Mc(e, t, n, r, i = {}, o = !1) {
  t || (t = {});
  for (const c in i)
    if (!(c in t)) {
      if (c === "children") continue;
      i[c] = Ds(e, c, null, i[c], n, o)
    } for (const c in t) {
    if (c === "children") continue;
    const a = t[c];
    i[c] = Ds(e, c, a, i[c], n, o)
  }
}

function Ic(e) {
  let t, n;
  return !Et.context || !(t = Et.registry.get(n = Uc())) ? e.cloneNode(!0) : (Et.completed && Et.completed.add(t), Et.registry.delete(n), t)
}

function Rc(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase())
}

function Fs(e, t, n) {
  const r = t.trim().split(/\s+/);
  for (let i = 0, o = r.length; i < o; i++) e.classList.toggle(r[i], n)
}

function Ds(e, t, n, r, i, o) {
  let c, a, p;
  if (t === "style") return Lc(e, n, r);
  if (t === "classList") return Bc(e, n, r);
  if (n === r) return r;
  if (t === "ref") o || n(e);
  else if (t.slice(0, 3) === "on:") {
    const m = t.slice(3);
    r && e.removeEventListener(m, r), n && e.addEventListener(m, n)
  } else if (t.slice(0, 10) === "oncapture:") {
    const m = t.slice(10);
    r && e.removeEventListener(m, r, !0), n && e.addEventListener(m, n, !0)
  } else if (t.slice(0, 2) === "on") {
    const m = t.slice(2).toLowerCase(),
      y = bc.has(m);
    if (!y && r) {
      const E = Array.isArray(r) ? r[0] : r;
      e.removeEventListener(m, E)
    }(y || n) && (Tc(e, m, n, y), y && Ac([m]))
  } else if ((p = yc.has(t)) || !i && (Ws[t] || (a = vc.has(t))) || (c = e.nodeName.includes("-"))) t === "class" || t === "className" ? es(e, n) : c && !a && !p ? e[Rc(t)] = n : e[Ws[t] || t] = n;
  else {
    const m = i && t.indexOf(":") > -1 && Ec[t.split(":")[0]];
    m ? kc(e, m, t, n) : Ee(e, xc[t] || t, n)
  }
  return n
}

function $c(e) {
  const t = `$$${e.type}`;
  let n = e.composedPath && e.composedPath()[0] || e.target;
  for (e.target !== n && Object.defineProperty(e, "target", {
      configurable: !0,
      value: n
    }), Object.defineProperty(e, "currentTarget", {
      configurable: !0,
      get() {
        return n || document
      }
    }), Et.registry && !Et.done && (Et.done = !0, document.querySelectorAll("[id^=pl-]").forEach(r => {
      for (; r && r.nodeType !== 8 && r.nodeValue !== "pl-" + e;) {
        let i = r.nextSibling;
        r.remove(), r = i
      }
      r && r.remove()
    })); n;) {
    const r = n[t];
    if (r && !n.disabled) {
      const i = n[`${t}Data`];
      if (i !== void 0 ? r.call(n, i, e) : r.call(n, e), e.cancelBubble) return
    }
    n = n._$host || n.parentNode || n.host
  }
}

function jr(e, t, n, r, i) {
  for (Et.context && !n && (n = [...e.childNodes]); typeof n == "function";) n = n();
  if (t === n) return n;
  const o = typeof t,
    c = r !== void 0;
  if (e = c && n[0] && n[0].parentNode || e, o === "string" || o === "number") {
    if (Et.context) return n;
    if (o === "number" && (t = t.toString()), c) {
      let a = n[0];
      a && a.nodeType === 3 ? a.data = t : a = document.createTextNode(t), n = sr(e, n, r, a)
    } else n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t
  } else if (t == null || o === "boolean") {
    if (Et.context) return n;
    n = sr(e, n, r)
  } else {
    if (o === "function") return qe(() => {
      let a = t();
      for (; typeof a == "function";) a = a();
      n = jr(e, a, n, r)
    }), () => n;
    if (Array.isArray(t)) {
      const a = [],
        p = n && Array.isArray(n);
      if (So(a, t, n, i)) return qe(() => n = jr(e, a, n, r, !0)), () => n;
      if (Et.context) {
        if (!a.length) return n;
        for (let m = 0; m < a.length; m++)
          if (a[m].parentNode) return n = a
      }
      if (a.length === 0) {
        if (n = sr(e, n, r), c) return n
      } else p ? n.length === 0 ? Os(e, a, r) : Sc(e, n, a) : (n && sr(e), Os(e, a));
      n = a
    } else if (t instanceof Node) {
      if (Et.context && t.parentNode) return n = c ? [t] : t;
      if (Array.isArray(n)) {
        if (c) return n = sr(e, n, r, t);
        sr(e, n, null, t)
      } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t
    }
  }
  return n
}

function So(e, t, n, r) {
  let i = !1;
  for (let o = 0, c = t.length; o < c; o++) {
    let a = t[o],
      p = n && n[o];
    if (a instanceof Node) e.push(a);
    else if (!(a == null || a === !0 || a === !1))
      if (Array.isArray(a)) i = So(e, a, p) || i;
      else if (typeof a == "function")
      if (r) {
        for (; typeof a == "function";) a = a();
        i = So(e, Array.isArray(a) ? a : [a], Array.isArray(p) ? p : [p]) || i
      } else e.push(a), i = !0;
    else {
      const m = String(a);
      p && p.nodeType === 3 && p.data === m ? e.push(p) : e.push(document.createTextNode(m))
    }
  }
  return i
}

function Os(e, t, n = null) {
  for (let r = 0, i = t.length; r < i; r++) e.insertBefore(t[r], n)
}

function sr(e, t, n, r) {
  if (n === void 0) return e.textContent = "";
  const i = r || document.createTextNode("");
  if (t.length) {
    let o = !1;
    for (let c = t.length - 1; c >= 0; c--) {
      const a = t[c];
      if (i !== a) {
        const p = a.parentNode === e;
        !o && !c ? p ? e.replaceChild(i, a) : e.insertBefore(i, n) : p && a.remove()
      } else o = !0
    }
  } else e.insertBefore(i, n);
  return [i]
}

function Uc() {
  const e = Et.context;
  return `${e.id}${e.count++}`
}
const Pc = "http://www.w3.org/2000/svg";

function Ka(e, t = !1) {
  return t ? document.createElementNS(Pc, e) : document.createElement(e)
}

function Va(e) {
  const {
    useShadow: t
  } = e, n = document.createTextNode(""), r = e.mount || document.body;

  function i() {
    if (Et.context) {
      const [o, c] = Be(!1);
      return queueMicrotask(() => c(!0)), () => o() && e.children
    } else return () => e.children
  }
  if (r instanceof HTMLHeadElement) {
    const [o, c] = Be(!1), a = () => c(!0);
    Br(p => Ht(r, () => o() ? p() : i()(), null)), Yt(() => {
      Et.context ? queueMicrotask(a) : a()
    })
  } else {
    const o = Ka(e.isSVG ? "g" : "div", e.isSVG),
      c = t && o.attachShadow ? o.attachShadow({
        mode: "open"
      }) : o;
    Object.defineProperty(o, "_$host", {
      get() {
        return n.parentNode
      },
      configurable: !0
    }), Ht(c, i()), r.appendChild(o), e.ref && e.ref(o), Yt(() => r.removeChild(o))
  }
  return n
}

function gr(e) {
  const [t, n] = Xo(e, ["component"]), r = de(() => t.component);
  return de(() => {
    const i = r();
    switch (typeof i) {
      case "function":
        return Dt(() => i(n));
      case "string":
        const o = Cc.has(i),
          c = Et.context ? Ic() : Ka(i, o);
        return Ha(c, n, o), c
    }
  })
}
var Ct = (e => (e.DARK = "DARK", e.LIGHT = "LIGHT", e))(Ct || {});
let Wc = {
    data: ""
  },
  Nc = e => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
    innerHTML: " ",
    id: "_goober"
  })).firstChild : e || Wc,
  Fc = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Dc = /\/\*[^]*?\*\/|  +/g,
  js = /\n+/g,
  Yn = (e, t) => {
    let n = "",
      r = "",
      i = "";
    for (let o in e) {
      let c = e[o];
      o[0] == "@" ? o[1] == "i" ? n = o + " " + c + ";" : r += o[1] == "f" ? Yn(c, o) : o + "{" + Yn(c, o[1] == "k" ? "" : t) + "}" : typeof c == "object" ? r += Yn(c, t ? t.replace(/([^,])+/g, a => o.replace(/(^:.*)|([^,])+/g, p => /&/.test(p) ? p.replace(/&/g, a) : a ? a + " " + p : p)) : o) : c != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), i += Yn.p ? Yn.p(o, c) : o + ":" + c + ";")
    }
    return n + (t && i ? t + "{" + i + "}" : i) + r
  },
  En = {},
  qa = e => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + qa(e[n]);
      return t
    }
    return e
  },
  Oc = (e, t, n, r, i) => {
    let o = qa(e),
      c = En[o] || (En[o] = (p => {
        let m = 0,
          y = 11;
        for (; m < p.length;) y = 101 * y + p.charCodeAt(m++) >>> 0;
        return "go" + y
      })(o));
    if (!En[c]) {
      let p = o !== e ? e : (m => {
        let y, E, b = [{}];
        for (; y = Fc.exec(m.replace(Dc, ""));) y[4] ? b.shift() : y[3] ? (E = y[3].replace(js, " ").trim(), b.unshift(b[0][E] = b[0][E] || {})) : b[0][y[1]] = y[2].replace(js, " ").trim();
        return b[0]
      })(e);
      En[c] = Yn(i ? {
        ["@keyframes " + c]: p
      } : p, n ? "" : "." + c)
    }
    let a = n && En.g ? En.g : null;
    return n && (En.g = En[c]), ((p, m, y, E) => {
      E ? m.data = m.data.replace(E, p) : m.data.indexOf(p) === -1 && (m.data = y ? p + m.data : m.data + p)
    })(En[c], t, r, a), c
  },
  jc = (e, t, n) => e.reduce((r, i, o) => {
    let c = t[o];
    if (c && c.call) {
      let a = c(n),
        p = a && a.props && a.props.className || /^go/.test(a) && a;
      c = p ? "." + p : a && typeof a == "object" ? a.props ? "" : Yn(a, "") : a === !1 ? "" : a
    }
    return r + i + (c ?? "")
  }, "");

function In(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return Oc(n.unshift ? n.raw ? jc(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {}) : n, Nc(t.target), t.g, t.o, t.k)
}
In.bind({
  g: 1
});
let Hc = In.bind({
  k: 1
});
const ts = Hi();

function Kc(e) {
  return g(ts.Provider, {
    value: e.theme,
    get children() {
      return e.children
    }
  })
}

function wt() {
  return zt(ts)
}

function Ga(e) {
  let t = this || {};
  return (...n) => {
    const r = i => {
      const o = zt(ts),
        c = gn(i, {
          theme: o
        }),
        a = gn(c, {
          get class() {
            const A = c.class,
              _ = "class" in c && /^go[0-9]+/.test(A);
            let T = In.apply({
              target: t.target,
              o: _,
              p: c,
              g: t.g
            }, n);
            return [A, T].filter(Boolean).join(" ")
          }
        }),
        [p, m] = Xo(a, ["as", "theme"]),
        y = m,
        E = p.as || e;
      let b;
      return typeof E == "function" ? b = E(y) : t.g == 1 ? (b = document.createElement(E), Ha(b, y)) : b = gr(gn({
        component: E
      }, y)), b
    };
    return r.class = i => Dt(() => In.apply({
      target: t.target,
      p: i,
      g: t.g
    }, n)), r
  }
}
const O = new Proxy(Ga, {
  get(e, t) {
    return e(t)
  }
});

function Vc() {
  const e = Ga.call({
    g: 1
  }, "div").apply(null, arguments);
  return function(n) {
    return e(n), null
  }
}
const _n = "tc-root",
  ns = "tc-disable-scroll",
  oo = "tc-using-mouse",
  qc = () => {
    document.body.addEventListener("mousedown", () => document.body.classList.add(oo)), document.body.addEventListener("keydown", t => {
      t.key === "Tab" && document.body.classList.remove(oo)
    });
    const e = Vc`
    ${_n} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${_n} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${_n} *:focus {
        outline: #08f auto 2px;
    }
    
    ${_n} li {
        list-style: none;
    }
    
    ${_n} button {
        outline: none;
    }
    
    body.${ns} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${oo} ${_n} *:focus {
        outline: none;
    }
`;
    return g(e, {})
  };

function Gc(e) {
  e[0] === "#" && (e = e.slice(1));
  const t = parseInt(e, 16),
    n = t >> 16 & 255,
    r = t >> 8 & 255,
    i = t & 255;
  return [n, r, i].join(",")
}

function Xr(e, t) {
  return e[0] === "#" && (e = Gc(e)), `rgba(${e}, ${t})`
}

function wn(e) {
  return e.toString() + "px"
}
const Er = class {
  constructor() {
    ke(this, "storage", {})
  }
  static getInstance() {
    return Er.instance || (Er.instance = new Er), Er.instance
  }
  get length() {
    return Object.keys(this.storage).length
  }
  clear() {
    this.storage = {}
  }
  getItem(e) {
    var t;
    return (t = this.storage[e]) != null ? t : null
  }
  key(e) {
    var t;
    const n = Object.keys(this.storage);
    return e < 0 || e >= n.length ? null : (t = n[e]) != null ? t : null
  }
  removeItem(e) {
    delete this.storage[e]
  }
  setItem(e, t) {
    this.storage[e] = t
  }
};
let Za = Er;
ke(Za, "instance");
class It extends Ce {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, It.prototype)
  }
}

function pi(...e) {
  try {
    console.debug("[TON_CONNECT_UI]", ...e)
  } catch {}
}

function Zc(...e) {
  try {
    console.error("[TON_CONNECT_UI]", ...e)
  } catch {}
}

function Yc(...e) {
  try {
    console.warn("[TON_CONNECT_UI]", ...e)
  } catch {}
}

function Lr(e, t = "_self") {
  pi("openLink", e, t), window.open(e, t, "noopener noreferrer")
}

function vt(e) {
  Lr(e, "_blank")
}

function Wn(e, t) {
  const n = () => {
      Ke("safari") || ln("android") && Ke("firefox") || t()
    },
    r = setTimeout(() => n(), 200);
  window.addEventListener("blur", () => clearTimeout(r), {
    once: !0
  }), Lr(e, "_self")
}

function zc() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? Ct.LIGHT : Ct.DARK
}

function Qc(e) {
  const t = n => e(n.matches ? Ct.DARK : Ct.LIGHT);
  return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", t), () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", t)
}

function Jc() {
  document.documentElement.scrollHeight !== document.documentElement.clientHeight && (document.body.style.top = wn(-document.documentElement.scrollTop), document.body.classList.add(ns))
}

function Xc() {
  document.body.classList.remove(ns), document.documentElement.scrollTo({
    top: -parseFloat(getComputedStyle(document.body).top)
  }), document.body.style.top = "auto"
}

function eu() {
  document.body.hasAttribute("ontouchstart") || document.body.setAttribute("ontouchstart", "")
}

function tu() {
  customElements.define(_n, class extends HTMLElement {})
}

function Ya(e) {
  return lt(this, null, function*() {
    yield new Promise(t => requestAnimationFrame(t)), e()
  })
}

function nu(e) {
  return lt(this, null, function*() {
    return yield new Promise(t => requestAnimationFrame(t)), e()
  })
}

function za(e) {
  document.readyState !== "complete" ? window.addEventListener("load", () => Ya(() => za(e)), {
    once: !0
  }) : e.forEach(t => {
    const n = new window.Image;
    n.src = t
  })
}

function yn() {
  if (typeof window < "u") return window
}

function rs() {
  if (ru()) return localStorage;
  if (iu()) throw new It("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
  return Za.getInstance()
}

function ru() {
  try {
    return typeof localStorage < "u"
  } catch {
    return !1
  }
}

function iu() {
  return typeof process < "u" && process.versions != null && process.versions.node != null
}

function is() {
  var e, t, n;
  const r = new W0().getResult(),
    i = (e = r.os.name) == null ? void 0 : e.toLowerCase(),
    o = (t = r.device.model) == null ? void 0 : t.toLowerCase();
  let c;
  switch (!0) {
    case o === "ipad":
      c = "ipad";
      break;
    case i === "ios":
      c = "ios";
      break;
    case i === "android":
      c = "android";
      break;
    case i === "mac os":
      c = "macos";
      break;
    case i === "linux":
      c = "linux";
      break;
    case (i == null ? void 0 : i.includes("windows")):
      c = "windows";
      break
  }
  const a = (n = r.browser.name) == null ? void 0 : n.toLowerCase();
  let p;
  switch (!0) {
    case a === "chrome":
      p = "chrome";
      break;
    case a === "firefox":
      p = "firefox";
      break;
    case (a == null ? void 0 : a.includes("safari")):
      p = "safari";
      break;
    case (a == null ? void 0 : a.includes("opera")):
      p = "opera";
      break
  }
  return {
    os: c,
    browser: p
  }
}

function ln(...e) {
  return e.includes(is().os)
}

function Ke(...e) {
  return e.includes(is().browser)
}

function ci(e, t) {
  const n = new URL(e);
  return t + n.search
}
class ou {
  constructor() {
    ke(this, "localStorage"), ke(this, "storageKey", "ton-connect-ui_wallet-info"), this.localStorage = rs()
  }
  setWalletInfo(t) {
    this.localStorage.setItem(this.storageKey, JSON.stringify(t))
  }
  getWalletInfo() {
    const t = this.localStorage.getItem(this.storageKey);
    return t ? JSON.parse(t) : null
  }
  removeWalletInfo() {
    this.localStorage.removeItem(this.storageKey)
  }
}
class su {
  constructor() {
    ke(this, "localStorage"), ke(this, "storageKey", "ton-connect-ui_preferred-wallet"), this.localStorage = rs()
  }
  setPreferredWalletAppName(t) {
    this.localStorage.setItem(this.storageKey, t)
  }
  getPreferredWalletAppName() {
    return this.localStorage.getItem(this.storageKey) || void 0
  }
}
class Qa {
  constructor() {
    ke(this, "localStorage"), ke(this, "storageKey", "ton-connect-ui_last-selected-wallet-info"), this.localStorage = rs()
  }
  setLastSelectedWalletInfo(t) {
    this.localStorage.setItem(this.storageKey, JSON.stringify(t))
  }
  getLastSelectedWalletInfo() {
    const t = this.localStorage.getItem(this.storageKey);
    return t ? JSON.parse(t) : null
  }
  removeLastSelectedWalletInfo() {
    this.localStorage.removeItem(this.storageKey)
  }
}
const [_o, Hs] = Be({
  status: "closed",
  closeReason: null
}), Ks = de(() => _o().status === "opened"), [Ai, Vs] = Be({
  status: "closed",
  closeReason: null
}), qs = de(() => Ai().status === "opened"), au = de(() => {
  const e = Ai();
  return e.status === "opened" ? e.walletInfo : null
});
let lr = typeof window < "u" ? new Qa : void 0;
const [lu, cu] = Be((lr == null ? void 0 : lr.getLastSelectedWalletInfo()) || null), Kt = e => {
  lr || (lr = new Qa), e ? lr.setLastSelectedWalletInfo(e) : lr.removeLastSelectedWalletInfo(), cu(e)
}, [An, cr] = Be(null), uu = {
  close: "Close",
  openWallet: "Open wallet",
  copyLink: "Copy Link",
  linkCopied: "Link Copied",
  copied: "Copied",
  yourWallet: "Your Wallet",
  retry: "Retry",
  get: "GET",
  mobile: "Mobile",
  browserExtension: "Browser Extension",
  desktop: "Desktop"
}, fu = {
  connectWallet: "Connect Wallet",
  dropdown: {
    copy: "Copy address",
    copied: "Address copied!",
    disconnect: "Disconnect"
  }
}, du = {
  confirm: {
    header: "Open {{ name }} to confirm the transaction."
  },
  transactionSent: {
    header: "Transaction sent",
    text: "Your transaction will be processed in a few seconds."
  },
  transactionCanceled: {
    header: "Transaction canceled",
    text: "There will be no changes to your account."
  }
}, hu = {
  walletOn: "Wallet On",
  recent: "Recent",
  installed: "Installed",
  popular: "Popular"
}, gu = {
  loading: "Loading wallets",
  wallets: "Wallets",
  mobileUniversalModal: {
    connectYourWallet: "Connect your wallet",
    openWalletOnTelegramOrSelect: "Open Wallet in Telegram or select your wallet to connect",
    openWalletOnTelegram: "Open Wallet in Telegram",
    openLink: "Open Link",
    scan: "Scan with your mobile wallet"
  },
  desktopUniversalModal: {
    connectYourWallet: "Connect your wallet",
    scan: "Scan with your mobile wallet",
    availableWallets: "Available wallets"
  },
  mobileConnectionModal: {
    showQR: "Show QR Code",
    scanQR: "Scan the QR code below with your phone’s or {{ name }}’s camera",
    continueIn: "Continue in {{ name }}…",
    connectionDeclined: "Connection declined"
  },
  desktopConnectionModal: {
    scanQR: "Scan the QR code below with your phone’s or {{ name }}’s camera",
    continueInExtension: "Continue in {{ name }} browser extension…",
    dontHaveExtension: "Seems you don't have installed {{ name }} browser extension",
    getWallet: "Get {{ name }}",
    continueOnDesktop: "Continue in {{ name }} on desktop…",
    openWalletOnTelegram: "Open Wallet in Telegram on desktop",
    connectionDeclined: "Connection declined"
  },
  infoModal: {
    whatIsAWallet: "What is a wallet",
    secureDigitalAssets: "Secure digital assets storage",
    walletProtects: "A wallet protects and manages your digital assets including TON, tokens and collectables.",
    controlIdentity: "Control your Web3 identity",
    manageIdentity: "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem.",
    effortlessCryptoTransactions: "Effortless crypto transactions",
    easilySend: "Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications.",
    getAWallet: "Get a Wallet"
  }
}, wu = {
  confirmTransaction: {
    header: "Confirm the transaction in {{ name }}",
    text: "It will only take a moment."
  },
  transactionSent: "$notifications.transactionSent",
  transactionCanceled: "$notifications.transactionCanceled"
}, pu = {
  common: uu,
  button: fu,
  notifications: du,
  walletItem: hu,
  walletModal: gu,
  actionModal: wu
}, mu = {
  close: "Закрыть",
  openWallet: "Открыть кошелёк",
  copyLink: "Копировать ссылку",
  linkCopied: "Ссылка скопирована",
  copied: "Ссылка скопирована",
  yourWallet: "Ваш кошелёк",
  retry: "Повторить",
  get: "Скачать",
  mobile: "Мобильный",
  browserExtension: "Расширение",
  desktop: "Десктоп"
}, vu = {
  connectWallet: "Подключить кошелёк",
  dropdown: {
    copy: "Скопировать адрес",
    copied: "Адрес скопирован!",
    disconnect: "Отключить кошелёк"
  }
}, yu = {
  confirm: {
    header: "Откройте {{ name }}, чтобы подтвердить транзакцию."
  },
  transactionSent: {
    header: "Транзакция отправлена",
    text: "Ваша транзакция будет обработана через несколько секунд."
  },
  transactionCanceled: {
    header: "Транзакция отменена",
    text: "Состояние вашего счёта не изменится."
  }
}, xu = {
  walletOn: "Wallet в",
  recent: "Недавний",
  installed: "Установлен",
  popular: "Популярен"
}, bu = {
  loading: "Кошельки загружаются",
  wallets: "Кошельки",
  mobileUniversalModal: {
    connectYourWallet: "Подключите кошелёк",
    openWalletOnTelegramOrSelect: "Подключите Wallet в Telegram или выберете кошелёк для подключения",
    openWalletOnTelegram: "Открыть Wallet в Telegram",
    openLink: "Открыть ссылку",
    scan: "Отсканируйте камерой вашего телефона"
  },
  desktopUniversalModal: {
    connectYourWallet: "Подключите кошелёк",
    scan: "Отсканируйте QR-код камерой вашего телефона",
    availableWallets: "Доступные кошельки"
  },
  mobileConnectionModal: {
    showQR: "Показать QR-код",
    scanQR: "Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",
    continueIn: "Продолжите в {{ name }}…",
    connectionDeclined: "Подключение отклонено"
  },
  desktopConnectionModal: {
    scanQR: "Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",
    continueInExtension: "Откройте браузерное расширение {{ name }}",
    dontHaveExtension: "Похоже, у вас не установлено браузерное расширение {{ name }}",
    getWallet: "Скачать {{ name }}",
    continueOnDesktop: "Откройте {{ name }} на компьютере…",
    openWalletOnTelegram: "Открыть Wallet в Telegram",
    connectionDeclined: "Подключение отклонено"
  },
  infoModal: {
    whatIsAWallet: "Что такое кошелёк?",
    secureDigitalAssets: "Надежное хранилище цифровых активов",
    walletProtects: "Кошелёк защищает ваши цифровые активы, включая TON, токены и предметы коллекционирования, и управляет ими.",
    controlIdentity: "Контроль своей личности Web3",
    manageIdentity: "Управляйте своей цифровой идентификацией и с легкостью получайте доступ к децентрализованным приложениям. Сохраняйте контроль над своими данными и безопасно участвуйте в экосистеме блокчейна.",
    effortlessCryptoTransactions: "Простые криптотранзакции",
    easilySend: "Легко отправляйте, получайте и отслеживайте свои криптовалюты. Оптимизируйте свои операции с помощью децентрализованных приложений.",
    getAWallet: "Скачать кошелёк"
  }
}, Cu = {
  confirmTransaction: {
    header: "Подтвердите действие в {{ name }}",
    text: "Это займет пару секунд."
  },
  transactionSent: "$notifications.transactionSent",
  transactionCanceled: "$notifications.transactionCanceled"
}, Eu = {
  common: mu,
  button: vu,
  notifications: yu,
  walletItem: xu,
  walletModal: bu,
  actionModal: Cu
}, Su = {
  en: Gs(pu),
  ru: Gs(Eu)
};

function Gs(e) {
  const t = "$",
    n = r => {
      Object.entries(r).forEach(([i, o]) => {
        if (typeof o == "object" && o) return n(o);
        if (typeof o == "string") {
          if (o[0] === t) {
            const c = o.slice(1).split(".");
            let a = e;
            c.forEach(p => {
              if (p in a) a = a[p];
              else throw new Error(`Cannot parse translations: there is no property ${p} in translation`)
            }), r[i] = a
          }
          o.slice(0, 2) === `\\${t}` && (r[i] = o.slice(1))
        }
      })
    };
  return n(e), e
}
const xr = Hi(),
  Ao = Symbol("store-raw"),
  Hr = Symbol("store-node"),
  _u = Symbol("store-name");

function Ja(e, t) {
  let n = e[un];
  if (!n && (Object.defineProperty(e, un, {
      value: n = new Proxy(e, Tu)
    }), !Array.isArray(e))) {
    const r = Object.keys(e),
      i = Object.getOwnPropertyDescriptors(e);
    for (let o = 0, c = r.length; o < c; o++) {
      const a = r[o];
      i[a].get && Object.defineProperty(e, a, {
        enumerable: i[a].enumerable,
        get: i[a].get.bind(n)
      })
    }
  }
  return n
}

function ki(e) {
  let t;
  return e != null && typeof e == "object" && (e[un] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e))
}

function wr(e, t = new Set) {
  let n, r, i, o;
  if (n = e != null && e[Ao]) return n;
  if (!ki(e) || t.has(e)) return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? e = e.slice(0) : t.add(e);
    for (let c = 0, a = e.length; c < a; c++) i = e[c], (r = wr(i, t)) !== i && (e[c] = r)
  } else {
    Object.isFrozen(e) ? e = Object.assign({}, e) : t.add(e);
    const c = Object.keys(e),
      a = Object.getOwnPropertyDescriptors(e);
    for (let p = 0, m = c.length; p < m; p++) o = c[p], !a[o].get && (i = e[o], (r = wr(i, t)) !== i && (e[o] = r))
  }
  return e
}

function os(e) {
  let t = e[Hr];
  return t || Object.defineProperty(e, Hr, {
    value: t = {}
  }), t
}

function ko(e, t, n) {
  return e[t] || (e[t] = el(n))
}

function Au(e, t) {
  const n = Reflect.getOwnPropertyDescriptor(e, t);
  return !n || n.get || !n.configurable || t === un || t === Hr || t === _u || (delete n.value, delete n.writable, n.get = () => e[un][t]), n
}

function Xa(e) {
  if (Ua()) {
    const t = os(e);
    (t._ || (t._ = el()))()
  }
}

function ku(e) {
  return Xa(e), Reflect.ownKeys(e)
}

function el(e) {
  const [t, n] = Be(e, {
    equals: !1,
    internal: !0
  });
  return t.$ = n, t
}
const Tu = {
  get(e, t, n) {
    if (t === Ao) return e;
    if (t === un) return n;
    if (t === bo) return Xa(e), n;
    const r = os(e),
      i = r.hasOwnProperty(t);
    let o = i ? r[t]() : e[t];
    if (t === Hr || t === "__proto__") return o;
    if (!i) {
      const c = Object.getOwnPropertyDescriptor(e, t);
      Ua() && (typeof o != "function" || e.hasOwnProperty(t)) && !(c && c.get) && (o = ko(r, t, o)())
    }
    return ki(o) ? Ja(o) : o
  },
  has(e, t) {
    return t === Ao || t === un || t === bo || t === Hr || t === "__proto__" ? !0 : (this.get(e, t, e), t in e)
  },
  set() {
    return !0
  },
  deleteProperty() {
    return !0
  },
  ownKeys: ku,
  getOwnPropertyDescriptor: Au
};

function Ti(e, t, n, r = !1) {
  if (!r && e[t] === n) return;
  const i = e[t],
    o = e.length;
  n === void 0 ? delete e[t] : e[t] = n;
  let c = os(e),
    a;
  (a = ko(c, t, i)) && a.$(() => n), Array.isArray(e) && e.length !== o && (a = ko(c, "length", o)) && a.$(e.length), (a = c._) && a.$()
}

function tl(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r += 1) {
    const i = n[r];
    Ti(e, i, t[i])
  }
}

function Bu(e, t) {
  if (typeof t == "function" && (t = t(e)), t = wr(t), Array.isArray(t)) {
    if (e === t) return;
    let n = 0,
      r = t.length;
    for (; n < r; n++) {
      const i = t[n];
      e[n] !== i && Ti(e, n, i)
    }
    Ti(e, "length", r)
  } else tl(e, t)
}

function Sr(e, t, n = []) {
  let r, i = e;
  if (t.length > 1) {
    r = t.shift();
    const c = typeof r,
      a = Array.isArray(e);
    if (Array.isArray(r)) {
      for (let p = 0; p < r.length; p++) Sr(e, [r[p]].concat(t), n);
      return
    } else if (a && c === "function") {
      for (let p = 0; p < e.length; p++) r(e[p], p) && Sr(e, [p].concat(t), n);
      return
    } else if (a && c === "object") {
      const {
        from: p = 0,
        to: m = e.length - 1,
        by: y = 1
      } = r;
      for (let E = p; E <= m; E += y) Sr(e, [E].concat(t), n);
      return
    } else if (t.length > 1) {
      Sr(e[r], t, [r].concat(n));
      return
    }
    i = e[r], n = [r].concat(n)
  }
  let o = t[0];
  typeof o == "function" && (o = o(i, n), o === i) || r === void 0 && o == null || (o = wr(o), r === void 0 || ki(i) && ki(o) && !Array.isArray(o) ? tl(i, o) : Ti(e, r, o))
}

function ss(...[e, t]) {
  const n = wr(e || {}),
    r = Array.isArray(n),
    i = Ja(n);

  function o(...c) {
    Ra(() => {
      r && c.length === 1 ? Bu(n, c[0]) : Sr(n, c)
    })
  }
  return [i, o]
}
const nl = {
    constant: {
      black: "#000000",
      white: "#FFFFFF"
    },
    connectButton: {
      background: "#0098EA",
      foreground: "#FFFFFF"
    },
    accent: "#0098EA",
    telegramButton: "#0098EA",
    icon: {
      primary: "#0F0F0F",
      secondary: "#7A8999",
      tertiary: "#C1CAD2",
      success: "#29CC6A",
      error: "#F5A73B"
    },
    background: {
      primary: "#FFFFFF",
      secondary: "#F1F3F5",
      segment: "#FFFFFF",
      tint: "#F1F3F5",
      qr: "#F1F3F5"
    },
    text: {
      primary: "#0F0F0F",
      secondary: "#6A7785"
    }
  },
  Lu = {
    constant: {
      black: "#000000",
      white: "#FFFFFF"
    },
    connectButton: {
      background: "#0098EA",
      foreground: "#FFFFFF"
    },
    accent: "#E5E5EA",
    telegramButton: "#31A6F5",
    icon: {
      primary: "#E5E5EA",
      secondary: "#909099",
      tertiary: "#434347",
      success: "#29CC6A",
      error: "#F5A73B"
    },
    background: {
      primary: "#121214",
      secondary: "#18181A",
      segment: "#262629",
      tint: "#222224",
      qr: "#FFFFFF"
    },
    text: {
      primary: "#E5E5EA",
      secondary: "#7D7D85"
    }
  };
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Zs(e) {
  return Object.prototype.toString.call(e) === "[object Object]"
}

function Mu(e) {
  var t, n;
  return Zs(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (n = t.prototype, !(Zs(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)))
}

function Fn(e, t) {
  return e ? J0(t, e, {
    arrayMerge: (r, i, o) => i,
    isMergeableObject: Mu
  }) : t
}
const [Iu, as] = ss({
  theme: Ct.LIGHT,
  colors: nl,
  borderRadius: "m"
}), rl = {
  [Ct.LIGHT]: nl,
  [Ct.DARK]: Lu
}, dn = {
  [Ct.LIGHT]: void 0,
  [Ct.DARK]: void 0
};

function so(e, t) {
  t && (dn[Ct.DARK] = Fn(t[Ct.DARK], dn[Ct.DARK]), dn[Ct.LIGHT] = Fn(t[Ct.LIGHT], dn[Ct.LIGHT])), as({
    theme: e,
    colors: Fn(dn[e], rl[e])
  })
}

function Ru(e) {
  as({
    borderRadius: e
  })
}

function $u(e) {
  dn[Ct.DARK] = Fn(e[Ct.DARK], dn[Ct.DARK]), dn[Ct.LIGHT] = Fn(e[Ct.LIGHT], dn[Ct.LIGHT]), as(t => ({
    colors: Fn(dn[t.theme], rl[t.theme])
  }))
}
const Uu = O.div`
    background-color: ${e=>e.theme.colors.background.secondary};
`,
  nr = e => {
    let t;
    const [n, r] = Be(null);
    return Nt(() => {
      const i = new window.Image;
      return i.src = e.src, i.alt = e.alt || "", i.setAttribute("draggable", "false"), e.class && i.classList.add(e.class), i.complete ? r(i) : (i.addEventListener("load", () => r(i)), () => i.removeEventListener("load", () => r(i)))
    }), [g(Ie, {
      get when() {
        return n()
      },
      get children() {
        return n()
      }
    }), g(Ie, {
      get when() {
        return !n()
      },
      get children() {
        return g(Uu, {
          get class() {
            return e.class
          },
          ref(i) {
            const o = t;
            typeof o == "function" ? o(i) : t = i
          }
        })
      }
    })]
  };
let tr = {};
try {
  let e = location.hash.toString();
  tr = Pu(e)
} catch {}
let pr = "unknown";
tr != null && tr.tgWebAppPlatform && (pr = (Ts = tr.tgWebAppPlatform) != null ? Ts : "unknown");
if (pr === "unknown") {
  const e = yn();
  pr = (Ms = (Ls = (Bs = e == null ? void 0 : e.Telegram) == null ? void 0 : Bs.WebApp) == null ? void 0 : Ls.platform) != null ? Ms : "unknown"
}
let Bi = "6.0";
tr != null && tr.tgWebAppVersion && (Bi = tr.tgWebAppVersion);
if (!Bi) {
  const e = yn();
  Bi = ($s = (Rs = (Is = e == null ? void 0 : e.Telegram) == null ? void 0 : Is.WebApp) == null ? void 0 : Rs.version) != null ? $s : "6.0"
}

function Jn(...e) {
  return e.includes(pr)
}

function pn() {
  var e;
  return pr !== "unknown" || !!((e = yn()) != null && e.TelegramWebviewProxy)
}

function il() {
  var e;
  const t = !!((e = yn()) != null && e.TelegramWebview);
  return (pn() || t) && pr === "unknown"
}

function ls() {
  sl("web_app_expand", {})
}

function To(e, t) {
  const n = new URL(e);
  if (n.protocol !== "http:" && n.protocol !== "https:") {
    if (t) return t();
    throw new It(`Url protocol is not supported: ${n}`)
  }
  if (n.hostname !== "t.me") {
    if (t) return t();
    throw new It(`Url host is not supported: ${n}`)
  }
  const r = n.pathname + n.search;
  ol() || Fu("6.1") ? sl("web_app_open_tg_link", {
    path_full: r
  }) : vt("https://t.me" + r)
}

function ol() {
  try {
    const e = yn();
    return e ? e.parent != null && e !== e.parent : !1
  } catch {
    return !1
  }
}

function sl(e, t) {
  try {
    const n = yn();
    if (!n) throw new It("Can't post event to parent window: window is not defined");
    if (n.TelegramWebviewProxy !== void 0) pi("postEvent", e, t), n.TelegramWebviewProxy.postEvent(e, JSON.stringify(t));
    else if (n.external && "notify" in n.external) pi("postEvent", e, t), n.external.notify(JSON.stringify({
      eventType: e,
      eventData: t
    }));
    else if (ol()) {
      const r = "*",
        i = JSON.stringify({
          eventType: e,
          eventData: t
        });
      pi("postEvent", e, t), n.parent.postMessage(i, r)
    } else throw new It("Can't post event to TMA")
  } catch (n) {
    Zc(`Can't post event to parent window: ${n}`)
  }
}

function Pu(e) {
  e = e.replace(/^#/, "");
  let t = {};
  if (!e.length) return t;
  if (e.indexOf("=") < 0 && e.indexOf("?") < 0) return t._path = Li(e), t;
  let n = e.indexOf("?");
  if (n >= 0) {
    let i = e.substr(0, n);
    t._path = Li(i), e = e.substr(n + 1)
  }
  let r = Wu(e);
  for (let i in r) t[i] = r[i];
  return t
}

function Li(e) {
  try {
    return e = e.replace(/\+/g, "%20"), decodeURIComponent(e)
  } catch {
    return e
  }
}

function Wu(e) {
  let t = {};
  if (!e.length) return t;
  let n = e.split("&"),
    r, i, o, c;
  for (r = 0; r < n.length; r++) i = n[r].split("="), o = Li(i[0]), c = i[1] == null ? null : Li(i[1]), t[o] = c;
  return t
}

function Nu(e, t) {
  typeof e != "string" && (e = "");
  let n = e.replace(/^\s+|\s+$/g, "").split("."),
    r = t.replace(/^\s+|\s+$/g, "").split("."),
    i, o, c, a;
  for (i = Math.max(n.length, r.length), o = 0; o < i; o++)
    if (c = parseInt(n[o]) || 0, a = parseInt(r[o]) || 0, c !== a) return c > a ? 1 : -1;
  return 0
}

function Fu(e) {
  return Nu(Bi, e) >= 0
}
const Xn = {
  mobile: 440,
  tablet: 1020
};

function ur(e) {
  const t = yn();
  if (!t) return e === "desktop";
  if (Jn("weba")) return !0;
  const n = t.innerWidth;
  switch (e) {
    case "desktop":
      return n > Xn.tablet;
    case "tablet":
      return n > Xn.mobile;
    default:
    case "mobile":
      return n <= Xn.mobile || ln("ios", "android", "ipad")
  }
}

function rn(e) {
  switch (e) {
    case "mobile":
      return `@media (max-width: ${Xn.mobile}px)`;
    case "tablet":
      return `@media (max-width: ${Xn.tablet}px) (min-width: ${Xn.mobile}px)`;
    default:
    case "desktop":
      return `@media (min-width: ${Xn.tablet}px)`
  }
}
const ei = "@media (hover: none)",
  ti = "@media not all and (hover: none)",
  Du = {
    m: "100vh",
    s: "8px",
    none: "0"
  },
  ao = {
    s: .02,
    m: .04
  },
  Ou = O.button`
    display: ${e=>e.leftIcon||e.rightIcon?"flex":"inline-block"};
    gap: ${e=>e.leftIcon||e.rightIcon?"6px":"unset"};
    align-items: ${e=>e.leftIcon||e.rightIcon?"center":"unset"};
    justify-content: ${e=>e.leftIcon||e.rightIcon?"space-between":"unset"};
    background-color: ${e=>e.appearance==="flat"?"transparent":e.appearance==="secondary"?e.theme.colors.background.tint:Xr(e.theme.colors.accent,.12)};
    color: ${e=>e.appearance==="secondary"?e.theme.colors.text.primary:e.theme.colors.accent};

    padding: ${e=>e.appearance==="flat"?"0":"9px 16px"};
    padding-left: ${e=>e.leftIcon&&e.appearance!=="flat"?"12px":"16px"};
    padding-right: ${e=>e.rightIcon&&e.appearance!=="flat"?"12px":"16px"};
    border: none;
    border-radius: ${e=>Du[e.theme.borderRadius]};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    font-size: 14px;
    font-weight: 510;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${ti} {
        &:hover {
            transform: ${e=>e.disabled?"unset":`scale(${1+ao[e.scale]})`};
        }
    }

    &:active {
        transform: ${e=>e.disabled?"unset":`scale(${1-ao[e.scale]})`};
    }

    ${ei} {
        &:active {
            transform: ${e=>e.disabled?"unset":`scale(${1-ao[e.scale]*2})`};
        }
    }
`;

function ni(e) {
  const t = Dt(() => Object.keys(e).filter(r => r.startsWith("data-"))),
    [n] = Xo(e, t);
  return n
}
const Rt = e => {
  const t = ni(e);
  return g(Ou, gn({
    get appearance() {
      return e.appearance || "primary"
    },
    get class() {
      return e.class
    },
    onClick: n => {
      var r;
      return (r = e.onClick) == null ? void 0 : r.call(e, n)
    },
    onMouseEnter: n => {
      var r;
      return (r = e.onMouseEnter) == null ? void 0 : r.call(e, n)
    },
    onMouseLeave: n => {
      var r;
      return (r = e.onMouseLeave) == null ? void 0 : r.call(e, n)
    },
    ref(n) {
      const r = e.ref;
      typeof r == "function" ? r(n) : e.ref = n
    },
    get disabled() {
      return e.disabled
    },
    get scale() {
      return e.scale || "m"
    },
    get leftIcon() {
      return !!e.leftIcon
    },
    get rightIcon() {
      return !!e.rightIcon
    },
    "data-tc-button": "true"
  }, t, {
    get children() {
      return [de(() => e.leftIcon), de(() => e.children), de(() => e.rightIcon)]
    }
  }))
};

function Mi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
const cs = e => {
  let t, n = !0;
  const [r, i] = Be(), [o, c] = Be(), a = Ki(() => e.children), {
    onBeforeEnter: p,
    onEnter: m,
    onAfterEnter: y,
    onBeforeExit: E,
    onExit: b,
    onAfterExit: A
  } = e, _ = de(() => {
    const ae = e.name || "s";
    return {
      enterActiveClass: e.enterActiveClass || ae + "-enter-active",
      enterClass: e.enterClass || ae + "-enter",
      enterToClass: e.enterToClass || ae + "-enter-to",
      exitActiveClass: e.exitActiveClass || ae + "-exit-active",
      exitClass: e.exitClass || ae + "-exit",
      exitToClass: e.exitToClass || ae + "-exit-to"
    }
  });

  function T(ae, J) {
    if (!n || e.appear) {
      let q = function(H) {
        ae && (!H || H.target === ae) && (ae.removeEventListener("transitionend", q), ae.removeEventListener("animationend", q), ae.classList.remove(...N), ae.classList.remove(...X), Ra(() => {
          r() !== ae && i(ae), o() === ae && c(void 0)
        }), y && y(ae), e.mode === "inout" && U(ae, J))
      };
      const te = _().enterClass.split(" "),
        N = _().enterActiveClass.split(" "),
        X = _().enterToClass.split(" ");
      p && p(ae), ae.classList.add(...te), ae.classList.add(...N), Mi(() => {
        ae.classList.remove(...te), ae.classList.add(...X), m && m(ae, () => q()), (!m || m.length < 2) && (ae.addEventListener("transitionend", q), ae.addEventListener("animationend", q))
      })
    }
    J && !e.mode ? c(ae) : i(ae)
  }

  function U(ae, J) {
    const q = _().exitClass.split(" "),
      te = _().exitActiveClass.split(" "),
      N = _().exitToClass.split(" ");
    if (!J.parentNode) return X();
    E && E(J), J.classList.add(...q), J.classList.add(...te), Mi(() => {
      J.classList.remove(...q), J.classList.add(...N)
    }), b && b(J, () => X()), (!b || b.length < 2) && (J.addEventListener("transitionend", X), J.addEventListener("animationend", X));

    function X(H) {
      (!H || H.target === J) && (J.removeEventListener("transitionend", X), J.removeEventListener("animationend", X), J.classList.remove(...te), J.classList.remove(...N), r() === J && i(void 0), A && A(J), e.mode === "outin" && T(ae, J))
    }
  }
  return Ei(ae => {
    for (t = a(); typeof t == "function";) t = t();
    return Dt(() => (t && t !== ae && (e.mode !== "outin" ? T(t, ae) : n && i(t)), ae && ae !== t && e.mode !== "inout" && U(t, ae), n = !1, t))
  }), [r, o]
};

function ui(e) {
  const {
    top: t,
    bottom: n,
    left: r,
    right: i,
    width: o,
    height: c
  } = e.getBoundingClientRect(), a = e.parentNode.getBoundingClientRect();
  return {
    top: t - a.top,
    bottom: n,
    left: r - a.left,
    right: i,
    width: o,
    height: c
  }
}
const ju = e => {
  const t = Ki(() => e.children),
    n = de(() => {
      const A = e.name || "s";
      return {
        enterActiveClass: e.enterActiveClass || A + "-enter-active",
        enterClass: e.enterClass || A + "-enter",
        enterToClass: e.enterToClass || A + "-enter-to",
        exitActiveClass: e.exitActiveClass || A + "-exit-active",
        exitClass: e.exitClass || A + "-exit",
        exitToClass: e.exitToClass || A + "-exit-to",
        moveClass: e.moveClass || A + "-move"
      }
    }),
    {
      onBeforeEnter: r,
      onEnter: i,
      onAfterEnter: o,
      onBeforeExit: c,
      onExit: a,
      onAfterExit: p
    } = e,
    [m, y] = Be();
  let E = [],
    b = !0;
  return Ei(() => {
    const A = t(),
      _ = [...A],
      T = new Set(A),
      U = new Set(E),
      ae = n().enterClass.split(" "),
      J = n().enterActiveClass.split(" "),
      q = n().enterToClass.split(" "),
      te = n().exitClass.split(" "),
      N = n().exitActiveClass.split(" "),
      X = n().exitToClass.split(" ");
    for (let H = 0; H < A.length; H++) {
      const D = A[H];
      if (!b && !U.has(D)) {
        let M = function(K) {
          D && (!K || K.target === D) && (D.removeEventListener("transitionend", M), D.removeEventListener("animationend", M), D.classList.remove(...J), D.classList.remove(...q), o && o(D))
        };
        r && r(D), D.classList.add(...ae), D.classList.add(...J), Mi(() => {
          D.classList.remove(...ae), D.classList.add(...q), i && i(D, () => M()), (!i || i.length < 2) && (D.addEventListener("transitionend", M), D.addEventListener("animationend", M))
        })
      }
    }
    for (let H = 0; H < E.length; H++) {
      const D = E[H];
      if (!T.has(D) && D.parentNode) {
        let M = function(K) {
          (!K || K.target === D) && (D.removeEventListener("transitionend", M), D.removeEventListener("animationend", M), D.classList.remove(...N), D.classList.remove(...X), p && p(D), E = E.filter(I => I !== D), y(E))
        };
        _.splice(H, 0, D), c && c(D), D.classList.add(...te), D.classList.add(...N), Mi(() => {
          D.classList.remove(...te), D.classList.add(...X)
        }), a && a(D, () => M()), (!a || a.length < 2) && (D.addEventListener("transitionend", M), D.addEventListener("animationend", M))
      }
    }
    E = _, y(_)
  }), Nt(A => {
    const _ = m();
    return _.forEach(T => {
      let U;
      (U = A.get(T)) ? U.new && (U.new = !1, U.newPos = ui(T)): A.set(T, U = {
        pos: ui(T),
        new: !b
      }), U.new && T.addEventListener("transitionend", () => {
        U.new = !1, T.parentNode && (U.newPos = ui(T))
      }, {
        once: !0
      }), U.newPos && (U.pos = U.newPos), U.newPos = ui(T)
    }), b ? (b = !1, A) : (_.forEach(T => {
      const U = A.get(T),
        ae = U.pos,
        J = U.newPos,
        q = ae.left - J.left,
        te = ae.top - J.top;
      if (q || te) {
        U.moved = !0;
        const N = T.style;
        N.transform = `translate(${q}px,${te}px)`, N.transitionDuration = "0s"
      }
    }), document.body.offsetHeight, _.forEach(T => {
      const U = A.get(T);
      if (U.moved) {
        let ae = function(te) {
          te && te.target !== T || !T.parentNode || (!te || /transform$/.test(te.propertyName)) && (T.removeEventListener("transitionend", ae), T.classList.remove(...q))
        };
        U.moved = !1;
        const J = T.style,
          q = n().moveClass.split(" ");
        T.classList.add(...q), J.transform = J.transitionDuration = "", T.addEventListener("transitionend", ae)
      }
    }), A)
  }, new Map), m
};

function Hu(e, t) {
  const n = r => {
    var i;
    return !e.contains(r.target) && ((i = t()) == null ? void 0 : i())
  };
  document.body.addEventListener("click", n), Yt(() => document.body.removeEventListener("click", n))
}

function Ku(e, t) {
  const n = r => {
    var i, o;
    r.key === "Escape" && ((i = document.activeElement) == null || i.blur(), (o = t()) == null || o())
  };
  document.body.addEventListener("keydown", n), Yt(() => document.body.removeEventListener("keydown", n))
}

function Vu(e, t) {
  const {
    isEnabled: n,
    onClose: r
  } = t();
  if (!n || !(is().os === "android")) return;
  window.history.pushState(qu, "");
  const o = c => {
    c.preventDefault(), r()
  };
  window.addEventListener("popstate", o, {
    once: !0
  }), Yt(() => {
    window.removeEventListener("popstate", o), Ya(() => {
      var c;
      ((c = window.history.state) == null ? void 0 : c[al]) === !0 && window.history.back()
    })
  })
}
const al = "androidBackHandler",
  qu = {
    [al]: !0
  },
  Gu = Ge('<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></path></svg>', 4, !0),
  Zu = {
    left: 0,
    top: 90,
    right: 180,
    bottom: 270
  },
  ll = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.secondary,
      r = () => e.direction || "left",
      i = O("svg")`
        transform: rotate(${o=>Zu[o.svgDirection]}deg);
        transition: transform 0.1s ease-in-out;
    `;
    return g(i, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      get svgDirection() {
        return r()
      },
      get children() {
        const o = Gu.cloneNode(!0);
        return qe(() => Ee(o, "fill", n())), o
      }
    })
  },
  Yu = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z"></path></svg>'),
  zu = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = Yu.cloneNode(!0),
        i = r.firstChild;
      return qe(() => Ee(i, "fill", n())), r
    })()
  },
  Qu = O.button`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${e=>e.theme.colors.background.tint};
    border: none;
    cursor: pointer;

    transition: transform 0.125s ease-in-out;

    ${ti} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${ei} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
  rr = e => {
    const t = ni(e),
      n = () => e.icon || "close";
    return g(Qu, gn({
      get class() {
        return e.class
      },
      onClick: () => e.onClick(),
      "data-tc-icon-button": "true"
    }, t, {
      get children() {
        return [g(Ie, {
          get when() {
            return !!e.children
          },
          get children() {
            return e.children
          }
        }), g(Ie, {
          get when() {
            return !e.children
          },
          get children() {
            return g(Jr, {
              get children() {
                return [g(jt, {
                  get when() {
                    return n() === "close"
                  },
                  get children() {
                    return g(zu, {
                      get fill() {
                        return e.fill
                      }
                    })
                  }
                }), g(jt, {
                  get when() {
                    return n() === "arrow"
                  },
                  get children() {
                    return g(ll, {
                      get fill() {
                        return e.fill
                      }
                    })
                  }
                }), g(jt, {
                  get when() {
                    return n() === "question"
                  },
                  get children() {
                    return g(nf, {
                      get fill() {
                        return e.fill
                      }
                    })
                  }
                }), g(jt, {
                  get when() {
                    return typeof n() != "string"
                  },
                  get children() {
                    return n()
                  }
                })]
              }
            })
          }
        })]
      }
    }))
  },
  dr = {
    m: "24px",
    s: "16px",
    none: "0"
  },
  Ju = O.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 0;
    overflow-y: auto;

    ${rn("mobile")} {
        padding-bottom: 0;
    }
`,
  Xu = In`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
    width: fit-content;
    margin: auto;

    ${rn("mobile")} {
        width: 100%;
        height: fit-content;
        margin: auto 0 0 0;
    }
`,
  e1 = O.div`
    position: relative;
    min-height: 100px;
    width: 416px;
    padding: 44px 56px 24px;

    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>dr[e.theme.borderRadius]};

    ${rn("mobile")} {
        width: 100%;
    }
`,
  t1 = O(rr)`
    position: absolute;
    right: 16px;
    top: 16px;
`,
  n1 = O.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 18px;
    border-radius: 0 0 ${e=>dr[e.theme.borderRadius]}
        ${e=>dr[e.theme.borderRadius]};
`,
  r1 = O(rr)`
    background-color: ${e=>Xr(e.theme.colors.icon.secondary,.12)};
`;
class i1 {
  constructor() {
    ke(this, "currentTime", 0)
  }
}
const _r = class {
  constructor() {
    ke(this, "currentTime", 0), ke(this, "playbackRate", 1), ke(this, "startTime", null), ke(this, "timeline", new i1), ke(this, "finished", Promise.resolve(this)), ke(this, "effect", null), ke(this, "id", ""), ke(this, "pending", !1), ke(this, "playState", "finished"), ke(this, "replaceState", "active"), ke(this, "ready", Promise.resolve(this)), ke(this, "oncancel", null), ke(this, "onfinish", null), ke(this, "onremove", null)
  }
  static create() {
    return _r._instance || (Yc("Animation is not supported in this environment: please consider using the `web-animations-js` polyfill to provide a fallback implementation of the Web Animations API."), _r._instance = new _r), _r._instance
  }
  cancel() {}
  finish() {}
  pause() {}
  play() {}
  reverse() {}
  addEventListener(e, t, n) {}
  dispatchEvent(e) {
    return !1
  }
  removeEventListener(e, t, n) {}
  updatePlaybackRate(e) {}
  commitStyles() {}
  persist() {}
};
let cl = _r;
ke(cl, "_instance", null);

function hn(e, t, n) {
  return "animate" in e ? e.animate(t, n) : cl.create()
}
const o1 = Ge("<div></div>"),
  s1 = Hu,
  a1 = Ku,
  l1 = Vu,
  ul = e => {
    const t = wt(),
      n = ni(e);
    return Nt(() => {
      e.opened ? Jc() : Xc()
    }), g(cs, {
      onBeforeEnter: r => {
        const i = ur("mobile") ? 200 : 100;
        hn(r, [{
          opacity: 0
        }, {
          opacity: 1
        }], {
          duration: i
        }), ur("mobile") && hn(r.firstElementChild, [{
          transform: "translateY(390px)"
        }, {
          transform: "translateY(0)"
        }], {
          duration: i
        })
      },
      onExit: (r, i) => {
        const o = ur("mobile") ? 200 : 100,
          c = hn(r, [{
            opacity: 1
          }, {
            opacity: 0
          }], {
            duration: o
          });
        if (ur("mobile")) {
          const a = hn(r.firstElementChild, [{
            transform: "translateY(0)"
          }, {
            transform: "translateY(390px)"
          }], {
            duration: o
          });
          Promise.all([c.finished, a.finished]).then(i)
        } else c.finished.then(i)
      },
      get children() {
        return g(Ie, {
          get when() {
            return e.opened
          },
          get children() {
            return g(Ju, gn({
              "data-tc-modal": "true"
            }, n, {
              get children() {
                const r = o1.cloneNode(!0);
                return fr(l1, r, () => ({
                  isEnabled: e.enableAndroidBackHandler,
                  onClose: () => e.onClose()
                })), fr(a1, r, () => () => e.onClose()), fr(s1, r, () => () => e.onClose()), Ht(r, g(e1, {
                  get class() {
                    return e.class
                  },
                  get children() {
                    return [g(t1, {
                      icon: "close",
                      onClick: () => e.onClose()
                    }), de(() => e.children)]
                  }
                }), null), Ht(r, g(Ie, {
                  get when() {
                    return e.onClickQuestion
                  },
                  get children() {
                    return g(n1, {
                      get children() {
                        return [g(ef, {}), g(r1, {
                          get onClick() {
                            return e.onClickQuestion
                          },
                          icon: "question"
                        })]
                      }
                    })
                  }
                }), null), qe(() => es(r, wi(Xu, In`
                                border-radius: ${dr[t.borderRadius]};
                                background-color: ${t.colors.background.tint};

                                ${rn("mobile")} {
                                    border-radius: ${dr[t.borderRadius]}
                                        ${dr[t.borderRadius]} 0 0;
                                }
                            `))), r
              }
            }))
          }
        })
      }
    })
  },
  c1 = {
    m: "22px",
    s: "12px",
    none: "0"
  },
  u1 = {
    m: "18px",
    s: "8px",
    none: "0"
  },
  f1 = O.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: fit-content;
    justify-items: center;
    gap: 4px;

    position: relative;
    padding: 4px;
    border-radius: ${e=>c1[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.secondary};
`,
  d1 = O.div`
    position: absolute;
    top: 4px;
    left: 4px;

    height: calc(100% - 8px);
    width: calc(50% - 4px);

    border-radius: ${e=>u1[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.segment};

    transform: ${e=>e.right?"translateX(100%)":"translateX(0)"};

    transition: transform 0.13s ease-in-out;
`,
  Ys = O.input`
    display: none;
`,
  zs = O.label`
    padding: 9px 12px;
    z-index: 1;

    cursor: ${e=>e.isActive?"default":"pointer"};

    transition: transform 0.13s ease-in-out;

    &:hover {
        transform: ${e=>e.isActive?"none":"scale(1.025)"};
    }

    > * {
        ${e=>e.isActive?"":`color: ${e.theme.colors.text.secondary};`}
    }
`,
  h1 = e => {
    const t = "tabBar" + Math.floor(Math.random() * 1e4);
    return g(f1, {
      get class() {
        return e.class
      },
      "data-tc-tab-bar": "true",
      get children() {
        return [g(d1, {
          get right() {
            return e.selectedTabIndex === 1
          }
        }), g(zs, {
          get isActive() {
            return e.selectedTabIndex === 0
          },
          get children() {
            return [g(Ys, {
              type: "radio",
              name: t,
              get checked() {
                return e.selectedTabIndex === 0
              },
              onInput: () => {
                var n;
                return (n = e.onSelectedTabIndexChange) == null ? void 0 : n.call(e, 0)
              }
            }), de(() => e.tab1)]
          }
        }), g(zs, {
          get isActive() {
            return e.selectedTabIndex === 1
          },
          get children() {
            return [g(Ys, {
              type: "radio",
              get checked() {
                return e.selectedTabIndex === 1
              },
              name: t,
              onInput: () => {
                var n;
                return (n = e.onSelectedTabIndexChange) == null ? void 0 : n.call(e, 1)
              }
            }), de(() => e.tab2)]
          }
        })]
      }
    })
  },
  g1 = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  w1 = {
    m: "12px",
    s: "8px",
    none: "0"
  },
  fl = 256,
  Bo = 60,
  Qs = 48,
  Js = 24,
  mi = O.div`
    width: 52px;
    height: 52px;
    background: transparent;
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.125s ease-in-out;
`,
  p1 = O.button`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${e=>e.theme.colors.background.qr};
    border-radius: ${e=>g1[e.theme.borderRadius]};
    padding: ${wn(Js)} 0;
    height: ${wn(fl+Js*2)};
    width: 100%;

    overflow: hidden;
    cursor: pointer;
    border: none;

    ${ti} {
        &:hover {
            ${mi.class} {
                transform: scale(1.04);
            }
        }
    }

    &:active {
        ${mi.class} {
            transform: scale(0.96);
        }
    }

    ${ei} {
        &:active {
            ${mi.class} {
                transform: scale(0.92);
            }
        }
    }
`,
  m1 = O.div`
    position: relative;

    width: fit-content;
    margin: 0 auto;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    rect {
        fill: transparent;
    }

    path {
        fill: ${e=>e.theme.colors.constant.black};
    }
`,
  v1 = O.div`
    position: absolute;
    width: ${wn(Bo)};
    height: ${wn(Bo)};
    background: ${e=>e.theme.colors.background.qr};

    display: flex;
    align-items: center;
    justify-content: center;
`,
  y1 = O(nr)`
    width: ${e=>wn(e.size)};
    height: ${e=>wn(e.size)};
    border-radius: ${e=>w1[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.qr};
`,
  x1 = O.div`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${e=>e.theme.colors.background.segment};
`;
var dl = {
  exports: {}
};
(function(e, t) {
  var n = function() {
    var r = function(N, X) {
      var H = 236,
        D = 17,
        M = N,
        K = o[X],
        I = null,
        k = 0,
        ie = null,
        ee = [],
        re = {},
        Se = function(j, V) {
          k = M * 4 + 17, I = function(F) {
            for (var Z = new Array(F), Q = 0; Q < F; Q += 1) {
              Z[Q] = new Array(F);
              for (var le = 0; le < F; le += 1) Z[Q][le] = null
            }
            return Z
          }(k), Le(0, 0), Le(k - 7, 0), Le(0, k - 7), xt(), tt(), Qe(j, V), M >= 7 && ze(j), ie == null && (ie = Pe(M, K, ee)), ft(ie, V)
        },
        Le = function(j, V) {
          for (var F = -1; F <= 7; F += 1)
            if (!(j + F <= -1 || k <= j + F))
              for (var Z = -1; Z <= 7; Z += 1) V + Z <= -1 || k <= V + Z || (0 <= F && F <= 6 && (Z == 0 || Z == 6) || 0 <= Z && Z <= 6 && (F == 0 || F == 6) || 2 <= F && F <= 4 && 2 <= Z && Z <= 4 ? I[j + F][V + Z] = !0 : I[j + F][V + Z] = !1)
        },
        Ze = function() {
          for (var j = 0, V = 0, F = 0; F < 8; F += 1) {
            Se(!0, F);
            var Z = a.getLostPoint(re);
            (F == 0 || j > Z) && (j = Z, V = F)
          }
          return V
        },
        tt = function() {
          for (var j = 8; j < k - 8; j += 1) I[j][6] == null && (I[j][6] = j % 2 == 0);
          for (var V = 8; V < k - 8; V += 1) I[6][V] == null && (I[6][V] = V % 2 == 0)
        },
        xt = function() {
          for (var j = a.getPatternPosition(M), V = 0; V < j.length; V += 1)
            for (var F = 0; F < j.length; F += 1) {
              var Z = j[V],
                Q = j[F];
              if (I[Z][Q] == null)
                for (var le = -2; le <= 2; le += 1)
                  for (var xe = -2; xe <= 2; xe += 1) le == -2 || le == 2 || xe == -2 || xe == 2 || le == 0 && xe == 0 ? I[Z + le][Q + xe] = !0 : I[Z + le][Q + xe] = !1
            }
        },
        ze = function(j) {
          for (var V = a.getBCHTypeNumber(M), F = 0; F < 18; F += 1) {
            var Z = !j && (V >> F & 1) == 1;
            I[Math.floor(F / 3)][F % 3 + k - 8 - 3] = Z
          }
          for (var F = 0; F < 18; F += 1) {
            var Z = !j && (V >> F & 1) == 1;
            I[F % 3 + k - 8 - 3][Math.floor(F / 3)] = Z
          }
        },
        Qe = function(j, V) {
          for (var F = K << 3 | V, Z = a.getBCHTypeInfo(F), Q = 0; Q < 15; Q += 1) {
            var le = !j && (Z >> Q & 1) == 1;
            Q < 6 ? I[Q][8] = le : Q < 8 ? I[Q + 1][8] = le : I[k - 15 + Q][8] = le
          }
          for (var Q = 0; Q < 15; Q += 1) {
            var le = !j && (Z >> Q & 1) == 1;
            Q < 8 ? I[8][k - Q - 1] = le : Q < 9 ? I[8][15 - Q - 1 + 1] = le : I[8][15 - Q - 1] = le
          }
          I[k - 8][8] = !j
        },
        ft = function(j, V) {
          for (var F = -1, Z = k - 1, Q = 7, le = 0, xe = a.getMaskFunction(V), me = k - 1; me > 0; me -= 2)
            for (me == 6 && (me -= 1);;) {
              for (var ct = 0; ct < 2; ct += 1)
                if (I[Z][me - ct] == null) {
                  var dt = !1;
                  le < j.length && (dt = (j[le] >>> Q & 1) == 1);
                  var _e = xe(Z, me - ct);
                  _e && (dt = !dt), I[Z][me - ct] = dt, Q -= 1, Q == -1 && (le += 1, Q = 7)
                } if (Z += F, Z < 0 || k <= Z) {
                Z -= F, F = -F;
                break
              }
            }
        },
        bt = function(j, V) {
          for (var F = 0, Z = 0, Q = 0, le = new Array(V.length), xe = new Array(V.length), me = 0; me < V.length; me += 1) {
            var ct = V[me].dataCount,
              dt = V[me].totalCount - ct;
            Z = Math.max(Z, ct), Q = Math.max(Q, dt), le[me] = new Array(ct);
            for (var _e = 0; _e < le[me].length; _e += 1) le[me][_e] = 255 & j.getBuffer()[_e + F];
            F += ct;
            var pt = a.getErrorCorrectPolynomial(dt),
              _t = m(le[me], pt.getLength() - 1),
              Jt = _t.mod(pt);
            xe[me] = new Array(pt.getLength() - 1);
            for (var _e = 0; _e < xe[me].length; _e += 1) {
              var $t = _e + Jt.getLength() - xe[me].length;
              xe[me][_e] = $t >= 0 ? Jt.getAt($t) : 0
            }
          }
          for (var At = 0, _e = 0; _e < V.length; _e += 1) At += V[_e].totalCount;
          for (var Ot = new Array(At), kt = 0, _e = 0; _e < Z; _e += 1)
            for (var me = 0; me < V.length; me += 1) _e < le[me].length && (Ot[kt] = le[me][_e], kt += 1);
          for (var _e = 0; _e < Q; _e += 1)
            for (var me = 0; me < V.length; me += 1) _e < xe[me].length && (Ot[kt] = xe[me][_e], kt += 1);
          return Ot
        },
        Pe = function(j, V, F) {
          for (var Z = y.getRSBlocks(j, V), Q = E(), le = 0; le < F.length; le += 1) {
            var xe = F[le];
            Q.put(xe.getMode(), 4), Q.put(xe.getLength(), a.getLengthInBits(xe.getMode(), j)), xe.write(Q)
          }
          for (var me = 0, le = 0; le < Z.length; le += 1) me += Z[le].dataCount;
          if (Q.getLengthInBits() > me * 8) throw "code length overflow. (" + Q.getLengthInBits() + ">" + me * 8 + ")";
          for (Q.getLengthInBits() + 4 <= me * 8 && Q.put(0, 4); Q.getLengthInBits() % 8 != 0;) Q.putBit(!1);
          for (; !(Q.getLengthInBits() >= me * 8 || (Q.put(H, 8), Q.getLengthInBits() >= me * 8));) Q.put(D, 8);
          return bt(Q, Z)
        };
      re.addData = function(j, V) {
        V = V || "Byte";
        var F = null;
        switch (V) {
          case "Numeric":
            F = b(j);
            break;
          case "Alphanumeric":
            F = A(j);
            break;
          case "Byte":
            F = _(j);
            break;
          case "Kanji":
            F = T(j);
            break;
          default:
            throw "mode:" + V
        }
        ee.push(F), ie = null
      }, re.isDark = function(j, V) {
        if (j < 0 || k <= j || V < 0 || k <= V) throw j + "," + V;
        return I[j][V]
      }, re.getModuleCount = function() {
        return k
      }, re.make = function() {
        if (M < 1) {
          for (var j = 1; j < 40; j++) {
            for (var V = y.getRSBlocks(j, K), F = E(), Z = 0; Z < ee.length; Z++) {
              var Q = ee[Z];
              F.put(Q.getMode(), 4), F.put(Q.getLength(), a.getLengthInBits(Q.getMode(), j)), Q.write(F)
            }
            for (var le = 0, Z = 0; Z < V.length; Z++) le += V[Z].dataCount;
            if (F.getLengthInBits() <= le * 8) break
          }
          M = j
        }
        Se(!1, Ze())
      }, re.createTableTag = function(j, V) {
        j = j || 2, V = typeof V > "u" ? j * 4 : V;
        var F = "";
        F += '<table style="', F += " border-width: 0px; border-style: none;", F += " border-collapse: collapse;", F += " padding: 0px; margin: " + V + "px;", F += '">', F += "<tbody>";
        for (var Z = 0; Z < re.getModuleCount(); Z += 1) {
          F += "<tr>";
          for (var Q = 0; Q < re.getModuleCount(); Q += 1) F += '<td style="', F += " border-width: 0px; border-style: none;", F += " border-collapse: collapse;", F += " padding: 0px; margin: 0px;", F += " width: " + j + "px;", F += " height: " + j + "px;", F += " background-color: ", F += re.isDark(Z, Q) ? "#000000" : "#ffffff", F += ";", F += '"/>';
          F += "</tr>"
        }
        return F += "</tbody>", F += "</table>", F
      }, re.createSvgTag = function(j, V, F, Z) {
        var Q = {};
        typeof arguments[0] == "object" && (Q = arguments[0], j = Q.cellSize, V = Q.margin, F = Q.alt, Z = Q.title), j = j || 2, V = typeof V > "u" ? j * 4 : V, F = typeof F == "string" ? {
          text: F
        } : F || {}, F.text = F.text || null, F.id = F.text ? F.id || "qrcode-description" : null, Z = typeof Z == "string" ? {
          text: Z
        } : Z || {}, Z.text = Z.text || null, Z.id = Z.text ? Z.id || "qrcode-title" : null;
        var le = re.getModuleCount() * j + V * 2,
          xe, me, ct, dt, _e = "",
          pt;
        for (pt = "l" + j + ",0 0," + j + " -" + j + ",0 0,-" + j + "z ", _e += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', _e += Q.scalable ? "" : ' width="' + le + 'px" height="' + le + 'px"', _e += ' viewBox="0 0 ' + le + " " + le + '" ', _e += ' preserveAspectRatio="xMinYMin meet"', _e += Z.text || F.text ? ' role="img" aria-labelledby="' + yt([Z.id, F.id].join(" ").trim()) + '"' : "", _e += ">", _e += Z.text ? '<title id="' + yt(Z.id) + '">' + yt(Z.text) + "</title>" : "", _e += F.text ? '<description id="' + yt(F.id) + '">' + yt(F.text) + "</description>" : "", _e += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', _e += '<path d="', ct = 0; ct < re.getModuleCount(); ct += 1)
          for (dt = ct * j + V, xe = 0; xe < re.getModuleCount(); xe += 1) re.isDark(ct, xe) && (me = xe * j + V, _e += "M" + me + "," + dt + pt);
        return _e += '" stroke="transparent" fill="black"/>', _e += "</svg>", _e
      }, re.createDataURL = function(j, V) {
        j = j || 2, V = typeof V > "u" ? j * 4 : V;
        var F = re.getModuleCount() * j + V * 2,
          Z = V,
          Q = F - V;
        return te(F, F, function(le, xe) {
          if (Z <= le && le < Q && Z <= xe && xe < Q) {
            var me = Math.floor((le - Z) / j),
              ct = Math.floor((xe - Z) / j);
            return re.isDark(ct, me) ? 0 : 1
          } else return 1
        })
      }, re.createImgTag = function(j, V, F) {
        j = j || 2, V = typeof V > "u" ? j * 4 : V;
        var Z = re.getModuleCount() * j + V * 2,
          Q = "";
        return Q += "<img", Q += ' src="', Q += re.createDataURL(j, V), Q += '"', Q += ' width="', Q += Z, Q += '"', Q += ' height="', Q += Z, Q += '"', F && (Q += ' alt="', Q += yt(F), Q += '"'), Q += "/>", Q
      };
      var yt = function(j) {
          for (var V = "", F = 0; F < j.length; F += 1) {
            var Z = j.charAt(F);
            switch (Z) {
              case "<":
                V += "&lt;";
                break;
              case ">":
                V += "&gt;";
                break;
              case "&":
                V += "&amp;";
                break;
              case '"':
                V += "&quot;";
                break;
              default:
                V += Z;
                break
            }
          }
          return V
        },
        an = function(j) {
          var V = 1;
          j = typeof j > "u" ? V * 2 : j;
          var F = re.getModuleCount() * V + j * 2,
            Z = j,
            Q = F - j,
            le, xe, me, ct, dt, _e = {
              "██": "█",
              "█ ": "▀",
              " █": "▄",
              "  ": " "
            },
            pt = {
              "██": "▀",
              "█ ": "▀",
              " █": " ",
              "  ": " "
            },
            _t = "";
          for (le = 0; le < F; le += 2) {
            for (me = Math.floor((le - Z) / V), ct = Math.floor((le + 1 - Z) / V), xe = 0; xe < F; xe += 1) dt = "█", Z <= xe && xe < Q && Z <= le && le < Q && re.isDark(me, Math.floor((xe - Z) / V)) && (dt = " "), Z <= xe && xe < Q && Z <= le + 1 && le + 1 < Q && re.isDark(ct, Math.floor((xe - Z) / V)) ? dt += " " : dt += "█", _t += j < 1 && le + 1 >= Q ? pt[dt] : _e[dt];
            _t += `
`
          }
          return F % 2 && j > 0 ? _t.substring(0, _t.length - F - 1) + Array(F + 1).join("▀") : _t.substring(0, _t.length - 1)
        };
      return re.createASCII = function(j, V) {
        if (j = j || 1, j < 2) return an(V);
        j -= 1, V = typeof V > "u" ? j * 2 : V;
        var F = re.getModuleCount() * j + V * 2,
          Z = V,
          Q = F - V,
          le, xe, me, ct, dt = Array(j + 1).join("██"),
          _e = Array(j + 1).join("  "),
          pt = "",
          _t = "";
        for (le = 0; le < F; le += 1) {
          for (me = Math.floor((le - Z) / j), _t = "", xe = 0; xe < F; xe += 1) ct = 1, Z <= xe && xe < Q && Z <= le && le < Q && re.isDark(me, Math.floor((xe - Z) / j)) && (ct = 0), _t += ct ? dt : _e;
          for (me = 0; me < j; me += 1) pt += _t + `
`
        }
        return pt.substring(0, pt.length - 1)
      }, re.renderTo2dContext = function(j, V) {
        V = V || 2;
        for (var F = re.getModuleCount(), Z = 0; Z < F; Z++)
          for (var Q = 0; Q < F; Q++) j.fillStyle = re.isDark(Z, Q) ? "black" : "white", j.fillRect(Z * V, Q * V, V, V)
      }, re
    };
    r.stringToBytesFuncs = {
      default: function(N) {
        for (var X = [], H = 0; H < N.length; H += 1) {
          var D = N.charCodeAt(H);
          X.push(D & 255)
        }
        return X
      }
    }, r.stringToBytes = r.stringToBytesFuncs.default, r.createStringToBytes = function(N, X) {
      var H = function() {
          for (var M = J(N), K = function() {
              var tt = M.read();
              if (tt == -1) throw "eof";
              return tt
            }, I = 0, k = {};;) {
            var ie = M.read();
            if (ie == -1) break;
            var ee = K(),
              re = K(),
              Se = K(),
              Le = String.fromCharCode(ie << 8 | ee),
              Ze = re << 8 | Se;
            k[Le] = Ze, I += 1
          }
          if (I != X) throw I + " != " + X;
          return k
        }(),
        D = 63;
      return function(M) {
        for (var K = [], I = 0; I < M.length; I += 1) {
          var k = M.charCodeAt(I);
          if (k < 128) K.push(k);
          else {
            var ie = H[M.charAt(I)];
            typeof ie == "number" ? (ie & 255) == ie ? K.push(ie) : (K.push(ie >>> 8), K.push(ie & 255)) : K.push(D)
          }
        }
        return K
      }
    };
    var i = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
      },
      o = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
      },
      c = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
      },
      a = function() {
        var N = [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
          ],
          X = 1335,
          H = 7973,
          D = 21522,
          M = {},
          K = function(I) {
            for (var k = 0; I != 0;) k += 1, I >>>= 1;
            return k
          };
        return M.getBCHTypeInfo = function(I) {
          for (var k = I << 10; K(k) - K(X) >= 0;) k ^= X << K(k) - K(X);
          return (I << 10 | k) ^ D
        }, M.getBCHTypeNumber = function(I) {
          for (var k = I << 12; K(k) - K(H) >= 0;) k ^= H << K(k) - K(H);
          return I << 12 | k
        }, M.getPatternPosition = function(I) {
          return N[I - 1]
        }, M.getMaskFunction = function(I) {
          switch (I) {
            case c.PATTERN000:
              return function(k, ie) {
                return (k + ie) % 2 == 0
              };
            case c.PATTERN001:
              return function(k, ie) {
                return k % 2 == 0
              };
            case c.PATTERN010:
              return function(k, ie) {
                return ie % 3 == 0
              };
            case c.PATTERN011:
              return function(k, ie) {
                return (k + ie) % 3 == 0
              };
            case c.PATTERN100:
              return function(k, ie) {
                return (Math.floor(k / 2) + Math.floor(ie / 3)) % 2 == 0
              };
            case c.PATTERN101:
              return function(k, ie) {
                return k * ie % 2 + k * ie % 3 == 0
              };
            case c.PATTERN110:
              return function(k, ie) {
                return (k * ie % 2 + k * ie % 3) % 2 == 0
              };
            case c.PATTERN111:
              return function(k, ie) {
                return (k * ie % 3 + (k + ie) % 2) % 2 == 0
              };
            default:
              throw "bad maskPattern:" + I
          }
        }, M.getErrorCorrectPolynomial = function(I) {
          for (var k = m([1], 0), ie = 0; ie < I; ie += 1) k = k.multiply(m([1, p.gexp(ie)], 0));
          return k
        }, M.getLengthInBits = function(I, k) {
          if (1 <= k && k < 10) switch (I) {
            case i.MODE_NUMBER:
              return 10;
            case i.MODE_ALPHA_NUM:
              return 9;
            case i.MODE_8BIT_BYTE:
              return 8;
            case i.MODE_KANJI:
              return 8;
            default:
              throw "mode:" + I
          } else if (k < 27) switch (I) {
            case i.MODE_NUMBER:
              return 12;
            case i.MODE_ALPHA_NUM:
              return 11;
            case i.MODE_8BIT_BYTE:
              return 16;
            case i.MODE_KANJI:
              return 10;
            default:
              throw "mode:" + I
          } else if (k < 41) switch (I) {
            case i.MODE_NUMBER:
              return 14;
            case i.MODE_ALPHA_NUM:
              return 13;
            case i.MODE_8BIT_BYTE:
              return 16;
            case i.MODE_KANJI:
              return 12;
            default:
              throw "mode:" + I
          } else throw "type:" + k
        }, M.getLostPoint = function(I) {
          for (var k = I.getModuleCount(), ie = 0, ee = 0; ee < k; ee += 1)
            for (var re = 0; re < k; re += 1) {
              for (var Se = 0, Le = I.isDark(ee, re), Ze = -1; Ze <= 1; Ze += 1)
                if (!(ee + Ze < 0 || k <= ee + Ze))
                  for (var tt = -1; tt <= 1; tt += 1) re + tt < 0 || k <= re + tt || Ze == 0 && tt == 0 || Le == I.isDark(ee + Ze, re + tt) && (Se += 1);
              Se > 5 && (ie += 3 + Se - 5)
            }
          for (var ee = 0; ee < k - 1; ee += 1)
            for (var re = 0; re < k - 1; re += 1) {
              var xt = 0;
              I.isDark(ee, re) && (xt += 1), I.isDark(ee + 1, re) && (xt += 1), I.isDark(ee, re + 1) && (xt += 1), I.isDark(ee + 1, re + 1) && (xt += 1), (xt == 0 || xt == 4) && (ie += 3)
            }
          for (var ee = 0; ee < k; ee += 1)
            for (var re = 0; re < k - 6; re += 1) I.isDark(ee, re) && !I.isDark(ee, re + 1) && I.isDark(ee, re + 2) && I.isDark(ee, re + 3) && I.isDark(ee, re + 4) && !I.isDark(ee, re + 5) && I.isDark(ee, re + 6) && (ie += 40);
          for (var re = 0; re < k; re += 1)
            for (var ee = 0; ee < k - 6; ee += 1) I.isDark(ee, re) && !I.isDark(ee + 1, re) && I.isDark(ee + 2, re) && I.isDark(ee + 3, re) && I.isDark(ee + 4, re) && !I.isDark(ee + 5, re) && I.isDark(ee + 6, re) && (ie += 40);
          for (var ze = 0, re = 0; re < k; re += 1)
            for (var ee = 0; ee < k; ee += 1) I.isDark(ee, re) && (ze += 1);
          var Qe = Math.abs(100 * ze / k / k - 50) / 5;
          return ie += Qe * 10, ie
        }, M
      }(),
      p = function() {
        for (var N = new Array(256), X = new Array(256), H = 0; H < 8; H += 1) N[H] = 1 << H;
        for (var H = 8; H < 256; H += 1) N[H] = N[H - 4] ^ N[H - 5] ^ N[H - 6] ^ N[H - 8];
        for (var H = 0; H < 255; H += 1) X[N[H]] = H;
        var D = {};
        return D.glog = function(M) {
          if (M < 1) throw "glog(" + M + ")";
          return X[M]
        }, D.gexp = function(M) {
          for (; M < 0;) M += 255;
          for (; M >= 256;) M -= 255;
          return N[M]
        }, D
      }();

    function m(N, X) {
      if (typeof N.length > "u") throw N.length + "/" + X;
      var H = function() {
          for (var M = 0; M < N.length && N[M] == 0;) M += 1;
          for (var K = new Array(N.length - M + X), I = 0; I < N.length - M; I += 1) K[I] = N[I + M];
          return K
        }(),
        D = {};
      return D.getAt = function(M) {
        return H[M]
      }, D.getLength = function() {
        return H.length
      }, D.multiply = function(M) {
        for (var K = new Array(D.getLength() + M.getLength() - 1), I = 0; I < D.getLength(); I += 1)
          for (var k = 0; k < M.getLength(); k += 1) K[I + k] ^= p.gexp(p.glog(D.getAt(I)) + p.glog(M.getAt(k)));
        return m(K, 0)
      }, D.mod = function(M) {
        if (D.getLength() - M.getLength() < 0) return D;
        for (var K = p.glog(D.getAt(0)) - p.glog(M.getAt(0)), I = new Array(D.getLength()), k = 0; k < D.getLength(); k += 1) I[k] = D.getAt(k);
        for (var k = 0; k < M.getLength(); k += 1) I[k] ^= p.gexp(p.glog(M.getAt(k)) + K);
        return m(I, 0).mod(M)
      }, D
    }
    var y = function() {
        var N = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12, 7, 37, 13],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16]
          ],
          X = function(M, K) {
            var I = {};
            return I.totalCount = M, I.dataCount = K, I
          },
          H = {},
          D = function(M, K) {
            switch (K) {
              case o.L:
                return N[(M - 1) * 4 + 0];
              case o.M:
                return N[(M - 1) * 4 + 1];
              case o.Q:
                return N[(M - 1) * 4 + 2];
              case o.H:
                return N[(M - 1) * 4 + 3];
              default:
                return
            }
          };
        return H.getRSBlocks = function(M, K) {
          var I = D(M, K);
          if (typeof I > "u") throw "bad rs block @ typeNumber:" + M + "/errorCorrectionLevel:" + K;
          for (var k = I.length / 3, ie = [], ee = 0; ee < k; ee += 1)
            for (var re = I[ee * 3 + 0], Se = I[ee * 3 + 1], Le = I[ee * 3 + 2], Ze = 0; Ze < re; Ze += 1) ie.push(X(Se, Le));
          return ie
        }, H
      }(),
      E = function() {
        var N = [],
          X = 0,
          H = {};
        return H.getBuffer = function() {
          return N
        }, H.getAt = function(D) {
          var M = Math.floor(D / 8);
          return (N[M] >>> 7 - D % 8 & 1) == 1
        }, H.put = function(D, M) {
          for (var K = 0; K < M; K += 1) H.putBit((D >>> M - K - 1 & 1) == 1)
        }, H.getLengthInBits = function() {
          return X
        }, H.putBit = function(D) {
          var M = Math.floor(X / 8);
          N.length <= M && N.push(0), D && (N[M] |= 128 >>> X % 8), X += 1
        }, H
      },
      b = function(N) {
        var X = i.MODE_NUMBER,
          H = N,
          D = {};
        D.getMode = function() {
          return X
        }, D.getLength = function(I) {
          return H.length
        }, D.write = function(I) {
          for (var k = H, ie = 0; ie + 2 < k.length;) I.put(M(k.substring(ie, ie + 3)), 10), ie += 3;
          ie < k.length && (k.length - ie == 1 ? I.put(M(k.substring(ie, ie + 1)), 4) : k.length - ie == 2 && I.put(M(k.substring(ie, ie + 2)), 7))
        };
        var M = function(I) {
            for (var k = 0, ie = 0; ie < I.length; ie += 1) k = k * 10 + K(I.charAt(ie));
            return k
          },
          K = function(I) {
            if ("0" <= I && I <= "9") return I.charCodeAt(0) - 48;
            throw "illegal char :" + I
          };
        return D
      },
      A = function(N) {
        var X = i.MODE_ALPHA_NUM,
          H = N,
          D = {};
        D.getMode = function() {
          return X
        }, D.getLength = function(K) {
          return H.length
        }, D.write = function(K) {
          for (var I = H, k = 0; k + 1 < I.length;) K.put(M(I.charAt(k)) * 45 + M(I.charAt(k + 1)), 11), k += 2;
          k < I.length && K.put(M(I.charAt(k)), 6)
        };
        var M = function(K) {
          if ("0" <= K && K <= "9") return K.charCodeAt(0) - 48;
          if ("A" <= K && K <= "Z") return K.charCodeAt(0) - 65 + 10;
          switch (K) {
            case " ":
              return 36;
            case "$":
              return 37;
            case "%":
              return 38;
            case "*":
              return 39;
            case "+":
              return 40;
            case "-":
              return 41;
            case ".":
              return 42;
            case "/":
              return 43;
            case ":":
              return 44;
            default:
              throw "illegal char :" + K
          }
        };
        return D
      },
      _ = function(N) {
        var X = i.MODE_8BIT_BYTE,
          H = r.stringToBytes(N),
          D = {};
        return D.getMode = function() {
          return X
        }, D.getLength = function(M) {
          return H.length
        }, D.write = function(M) {
          for (var K = 0; K < H.length; K += 1) M.put(H[K], 8)
        }, D
      },
      T = function(N) {
        var X = i.MODE_KANJI,
          H = r.stringToBytesFuncs.SJIS;
        if (!H) throw "sjis not supported.";
        (function(K, I) {
          var k = H(K);
          if (k.length != 2 || (k[0] << 8 | k[1]) != I) throw "sjis not supported."
        })("友", 38726);
        var D = H(N),
          M = {};
        return M.getMode = function() {
          return X
        }, M.getLength = function(K) {
          return ~~(D.length / 2)
        }, M.write = function(K) {
          for (var I = D, k = 0; k + 1 < I.length;) {
            var ie = (255 & I[k]) << 8 | 255 & I[k + 1];
            if (33088 <= ie && ie <= 40956) ie -= 33088;
            else if (57408 <= ie && ie <= 60351) ie -= 49472;
            else throw "illegal char at " + (k + 1) + "/" + ie;
            ie = (ie >>> 8 & 255) * 192 + (ie & 255), K.put(ie, 13), k += 2
          }
          if (k < I.length) throw "illegal char at " + (k + 1)
        }, M
      },
      U = function() {
        var N = [],
          X = {};
        return X.writeByte = function(H) {
          N.push(H & 255)
        }, X.writeShort = function(H) {
          X.writeByte(H), X.writeByte(H >>> 8)
        }, X.writeBytes = function(H, D, M) {
          D = D || 0, M = M || H.length;
          for (var K = 0; K < M; K += 1) X.writeByte(H[K + D])
        }, X.writeString = function(H) {
          for (var D = 0; D < H.length; D += 1) X.writeByte(H.charCodeAt(D))
        }, X.toByteArray = function() {
          return N
        }, X.toString = function() {
          var H = "";
          H += "[";
          for (var D = 0; D < N.length; D += 1) D > 0 && (H += ","), H += N[D];
          return H += "]", H
        }, X
      },
      ae = function() {
        var N = 0,
          X = 0,
          H = 0,
          D = "",
          M = {},
          K = function(k) {
            D += String.fromCharCode(I(k & 63))
          },
          I = function(k) {
            if (!(k < 0)) {
              if (k < 26) return 65 + k;
              if (k < 52) return 97 + (k - 26);
              if (k < 62) return 48 + (k - 52);
              if (k == 62) return 43;
              if (k == 63) return 47
            }
            throw "n:" + k
          };
        return M.writeByte = function(k) {
          for (N = N << 8 | k & 255, X += 8, H += 1; X >= 6;) K(N >>> X - 6), X -= 6
        }, M.flush = function() {
          if (X > 0 && (K(N << 6 - X), N = 0, X = 0), H % 3 != 0)
            for (var k = 3 - H % 3, ie = 0; ie < k; ie += 1) D += "="
        }, M.toString = function() {
          return D
        }, M
      },
      J = function(N) {
        var X = N,
          H = 0,
          D = 0,
          M = 0,
          K = {};
        K.read = function() {
          for (; M < 8;) {
            if (H >= X.length) {
              if (M == 0) return -1;
              throw "unexpected end of file./" + M
            }
            var k = X.charAt(H);
            if (H += 1, k == "=") return M = 0, -1;
            if (k.match(/^\s$/)) continue;
            D = D << 6 | I(k.charCodeAt(0)), M += 6
          }
          var ie = D >>> M - 8 & 255;
          return M -= 8, ie
        };
        var I = function(k) {
          if (65 <= k && k <= 90) return k - 65;
          if (97 <= k && k <= 122) return k - 97 + 26;
          if (48 <= k && k <= 57) return k - 48 + 52;
          if (k == 43) return 62;
          if (k == 47) return 63;
          throw "c:" + k
        };
        return K
      },
      q = function(N, X) {
        var H = N,
          D = X,
          M = new Array(N * X),
          K = {};
        K.setPixel = function(ee, re, Se) {
          M[re * H + ee] = Se
        }, K.write = function(ee) {
          ee.writeString("GIF87a"), ee.writeShort(H), ee.writeShort(D), ee.writeByte(128), ee.writeByte(0), ee.writeByte(0), ee.writeByte(0), ee.writeByte(0), ee.writeByte(0), ee.writeByte(255), ee.writeByte(255), ee.writeByte(255), ee.writeString(","), ee.writeShort(0), ee.writeShort(0), ee.writeShort(H), ee.writeShort(D), ee.writeByte(0);
          var re = 2,
            Se = k(re);
          ee.writeByte(re);
          for (var Le = 0; Se.length - Le > 255;) ee.writeByte(255), ee.writeBytes(Se, Le, 255), Le += 255;
          ee.writeByte(Se.length - Le), ee.writeBytes(Se, Le, Se.length - Le), ee.writeByte(0), ee.writeString(";")
        };
        var I = function(ee) {
            var re = ee,
              Se = 0,
              Le = 0,
              Ze = {};
            return Ze.write = function(tt, xt) {
              if (tt >>> xt) throw "length over";
              for (; Se + xt >= 8;) re.writeByte(255 & (tt << Se | Le)), xt -= 8 - Se, tt >>>= 8 - Se, Le = 0, Se = 0;
              Le = tt << Se | Le, Se = Se + xt
            }, Ze.flush = function() {
              Se > 0 && re.writeByte(Le)
            }, Ze
          },
          k = function(ee) {
            for (var re = 1 << ee, Se = (1 << ee) + 1, Le = ee + 1, Ze = ie(), tt = 0; tt < re; tt += 1) Ze.add(String.fromCharCode(tt));
            Ze.add(String.fromCharCode(re)), Ze.add(String.fromCharCode(Se));
            var xt = U(),
              ze = I(xt);
            ze.write(re, Le);
            var Qe = 0,
              ft = String.fromCharCode(M[Qe]);
            for (Qe += 1; Qe < M.length;) {
              var bt = String.fromCharCode(M[Qe]);
              Qe += 1, Ze.contains(ft + bt) ? ft = ft + bt : (ze.write(Ze.indexOf(ft), Le), Ze.size() < 4095 && (Ze.size() == 1 << Le && (Le += 1), Ze.add(ft + bt)), ft = bt)
            }
            return ze.write(Ze.indexOf(ft), Le), ze.write(Se, Le), ze.flush(), xt.toByteArray()
          },
          ie = function() {
            var ee = {},
              re = 0,
              Se = {};
            return Se.add = function(Le) {
              if (Se.contains(Le)) throw "dup key:" + Le;
              ee[Le] = re, re += 1
            }, Se.size = function() {
              return re
            }, Se.indexOf = function(Le) {
              return ee[Le]
            }, Se.contains = function(Le) {
              return typeof ee[Le] < "u"
            }, Se
          };
        return K
      },
      te = function(N, X, H) {
        for (var D = q(N, X), M = 0; M < X; M += 1)
          for (var K = 0; K < N; K += 1) D.setPixel(K, M, H(K, M));
        var I = U();
        D.write(I);
        for (var k = ae(), ie = I.toByteArray(), ee = 0; ee < ie.length; ee += 1) k.writeByte(ie[ee]);
        return k.flush(), "data:image/gif;base64," + k
      };
    return r
  }();
  (function() {
    n.stringToBytesFuncs["UTF-8"] = function(r) {
      function i(o) {
        for (var c = [], a = 0; a < o.length; a++) {
          var p = o.charCodeAt(a);
          p < 128 ? c.push(p) : p < 2048 ? c.push(192 | p >> 6, 128 | p & 63) : p < 55296 || p >= 57344 ? c.push(224 | p >> 12, 128 | p >> 6 & 63, 128 | p & 63) : (a++, p = 65536 + ((p & 1023) << 10 | o.charCodeAt(a) & 1023), c.push(240 | p >> 18, 128 | p >> 12 & 63, 128 | p >> 6 & 63, 128 | p & 63))
        }
        return c
      }
      return i(r)
    }
  })(),
  function(r) {
    e.exports = r()
  }(function() {
    return n
  })
})(dl);
const b1 = dl.exports;

function us(e) {
  return lt(this, null, function*() {
    try {
      if (!(navigator != null && navigator.clipboard)) throw new It("Clipboard API not available");
      return yield navigator.clipboard.writeText(e)
    } catch {}
    C1(e)
  })
}

function C1(e) {
  const t = document.createElement("textarea");
  t.value = e, t.style.top = "0", t.style.left = "0", t.style.position = "fixed", document.body.appendChild(t), t.focus(), t.select();
  try {
    document.execCommand("copy")
  } finally {
    document.body.removeChild(t)
  }
}
const E1 = Ge("<div></div>"),
  Gi = e => {
    let t, n, r;
    const [i, o] = Be(!1), [c, a] = Be(Qs);
    Nt(() => {
      const b = b1(0, "L");
      b.addData(e.sourceUrl), b.make(), t.innerHTML = b.createSvgTag(4, 0);
      const A = t.firstElementChild.clientWidth,
        _ = Math.round(fl / A * 1e5) / 1e5;
      if (r) {
        const T = Math.ceil(Bo / (_ * 4)) * 4,
          U = wn(Math.ceil((A - T) / (2 * 4)) * 4);
        r.style.top = U, r.style.left = U, r.style.height = wn(T), r.style.width = wn(T), a(Math.round(Qs / _))
      }
      n.style.transform = `scale(${_})`
    });
    let p = null;
    return g(p1, {
      get class() {
        return e.class
      },
      onClick: () => {
        o(!0), us(e.sourceUrl), p != null && clearTimeout(p), p = setTimeout(() => o(!1), 1500)
      },
      get children() {
        return [g(m1, {
          ref(y) {
            const E = n;
            typeof E == "function" ? E(y) : n = y
          },
          get children() {
            return [(() => {
              const y = E1.cloneNode(!0),
                E = t;
              return typeof E == "function" ? fr(E, y) : t = y, y
            })(), g(Ie, {
              get when() {
                return e.imageUrl
              },
              get children() {
                return g(v1, {
                  ref(y) {
                    const E = r;
                    typeof E == "function" ? E(y) : r = y
                  },
                  get children() {
                    return g(y1, {
                      get src() {
                        return e.imageUrl
                      },
                      alt: "",
                      get size() {
                        return c()
                      }
                    })
                  }
                })
              }
            })]
          }
        }), g(cs, {
          onBeforeEnter: y => {
            hn(y, [{
              opacity: 0,
              transform: "translate(-50%, 44px)"
            }, {
              opacity: 1,
              transform: "translate(-50%, 0)"
            }], {
              duration: 150,
              easing: "ease-out"
            })
          },
          onExit: (y, E) => {
            hn(y, [{
              opacity: 1,
              transform: "translate(-50%, 0)"
            }, {
              opacity: 0,
              transform: "translate(-50%, 44px)"
            }], {
              duration: 150,
              easing: "ease-out"
            }).finished.then(() => {
              E()
            })
          },
          get children() {
            return g(Ie, {
              get when() {
                return i() && !e.disableCopy
              },
              get children() {
                return g(x1, {
                  get children() {
                    return [g(ds, {
                      size: "xs"
                    }), g(nn, {
                      translationKey: "common.linkCopied",
                      children: "Link Copied"
                    })]
                  }
                })
              }
            })
          }
        }), g(Ie, {
          get when() {
            return !e.disableCopy
          },
          get children() {
            return g(mi, {
              get children() {
                return g(wl, {})
              }
            })
          }
        })]
      }
    })
  };
var Lo = (e, t, n) => {
    const r = t.trim().split(".").reduce((i, o) => i ? i[o] : void 0, e);
    return r !== void 0 ? r : n
  },
  S1 = (e, t, n = /{{(.*?)}}/g) => e.replace(n, (r, i) => Lo(t, i, "")),
  _1 = (e = {}, t = navigator.language in e ? navigator.language : Object.keys(e)[0]) => {
    const [n, r] = Be(t), [i, o] = ss(e);
    return [(p, m, y) => {
      const E = Lo(i[n()], p, y || "");
      return typeof E == "function" ? E(m) : typeof E == "string" ? S1(E, m || {}) : E
    }, {
      add(p, m) {
        o(p, y => Object.assign(y || {}, m))
      },
      locale: p => p ? r(p) : n(),
      dict: p => Lo(i, p)
    }]
  },
  hl = Hi({}),
  xn = () => zt(hl);
const A1 = O.div`
    font-style: normal;
    font-weight: ${e=>e.fontWeight};
    font-size: ${e=>e.fontSize};
    line-height: ${e=>e.lineHeight};

    color: ${e=>e.color};
`,
  nn = e => {
    const t = wt(),
      [n] = xn();
    let r;
    const i = () => e.color || t.colors.text.primary,
      o = gn({
        fontSize: "14px",
        fontWeight: "510",
        lineHeight: "130%"
      }, e);
    return Nt(() => {
      r && o.cursor !== "unset" && getComputedStyle(r).cursor !== "pointer" && (r.style.cursor = "default")
    }), g(A1, {
      get fontSize() {
        return o.fontSize
      },
      get fontWeight() {
        return o.fontWeight
      },
      get lineHeight() {
        return o.lineHeight
      },
      get color() {
        return i()
      },
      get class() {
        return o.class
      },
      ref(c) {
        const a = r;
        typeof a == "function" ? a(c) : r = c
      },
      "data-tc-text": "true",
      get children() {
        var c;
        return de(() => !!o.translationKey)() ? n(o.translationKey, o.translationValues, (c = o.children) == null ? void 0 : c.toString()) : o.children
      }
    })
  },
  k1 = O.div`
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 0.5px solid rgba(0, 0, 0, 0.08);

        border-radius: inherit;
    }
`,
  T1 = O(nr)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`,
  gl = e => g(k1, {
    get class() {
      return e.class
    },
    get children() {
      return g(T1, {
        get src() {
          return e.src
        }
      })
    }
  }),
  B1 = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  L1 = {
    m: "6px",
    s: "6px",
    none: "0"
  },
  M1 = O.button`
    position: relative;
    cursor: pointer;
    border: none;
    background-color: unset;
    padding: 8px 4px;
    width: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform 0.125s ease-in-out;

    ${ti} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${rn("mobile")} {
        padding: 8px 4px;
        width: 82px;
    }

    ${ei} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
  I1 = O(gl)`
    width: 60px;
    height: 60px;
    border-radius: ${e=>B1[e.theme.borderRadius]};

    margin-bottom: 8px;
`,
  R1 = O(nr)`
    position: absolute;
    right: 10px;
    top: 50px;
    width: 24px;
    height: 24px;
    border-radius: ${e=>L1[e.theme.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`,
  $1 = O(nn)`
    max-width: 90px;
    font-weight: 510;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${rn("mobile")} {
        max-width: 80px;
    }
`,
  U1 = O(nn)`
    font-weight: ${e=>e.colorPrimary?"510":"400"};
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${e=>e.colorPrimary?e.theme.colors.text.primary:e.theme.colors.text.secondary};

    ${rn("mobile")} {
        max-width: 80px;
    }
`,
  P1 = Ge("<div></div>"),
  Ii = e => {
    let t = null;
    const n = () => {
      const r = t == null ? void 0 : t.querySelector("div");
      if (r && r.scrollWidth > r.clientWidth) {
        let i = 0;
        const o = -.4,
          c = .05;
        for (; r.scrollWidth > r.clientWidth && i >= o;) i -= c, r.style.letterSpacing = `${i}px`;
        i !== 0 && (i -= c, r.style.letterSpacing = `${i}px`)
      }
    };
    return $a(() => n()), Nt(() => {
      n()
    }), g(M1, {
      get class() {
        return e.class
      },
      onClick: () => e.onClick(),
      "data-tc-wallet-item": "true",
      get children() {
        return [de(() => de(() => typeof e.icon == "string")() ? g(I1, {
          get src() {
            return e.icon
          }
        }) : e.icon), de(() => de(() => !!e.badgeUrl)() && g(R1, {
          get src() {
            return e.badgeUrl
          }
        })), (() => {
          const r = P1.cloneNode(!0);
          return fr(i => t = i, r), Ht(r, g($1, {
            get children() {
              return e.name
            }
          })), r
        })(), de(() => de(() => !!e.secondLine)() && g(U1, {
          get colorPrimary() {
            var r;
            return (r = e.secondLineColorPrimary) != null ? r : !0
          },
          get children() {
            return e.secondLine
          }
        }))]
      }
    })
  },
  W1 = O.h1`
    font-style: normal;
    font-weight: 590;
    font-size: 20px;
    line-height: 28px;

    text-align: center;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,
  bn = e => {
    const [t] = xn();
    return g(W1, {
      get class() {
        return e.class
      },
      "data-tc-h1": "true",
      get children() {
        var n;
        return de(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString()) : e.children
      }
    })
  },
  N1 = O.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    text-align: center;

    color: ${e=>e.theme.colors.text.secondary};

    margin-top: 0;
    margin-bottom: 32px;

    cursor: default;
`,
  Vn = e => {
    const [t] = xn();
    return g(N1, {
      get class() {
        return e.class
      },
      "data-tc-h2": "true",
      get children() {
        var n;
        return de(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString()) : e.children
      }
    })
  },
  F1 = O.h3`
    font-style: normal;
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,
  fs = e => {
    const [t] = xn();
    return g(F1, {
      "data-tc-h3": "true",
      get class() {
        return e.class
      },
      get children() {
        var n;
        return de(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString()) : e.children
      }
    })
  },
  D1 = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 7.5C9.33579 7.5 9 7.16421 9 6.75C9 6.33579 9.33579 6 9.75 6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 18.6642 21.6642 19 21.25 19C20.8358 19 20.5 18.6642 20.5 18.25V8.56066L6.28033 22.7803C5.98744 23.0732 5.51256 23.0732 5.21967 22.7803C4.92678 22.4874 4.92678 22.0126 5.21967 21.7197L19.4393 7.5H9.75Z"></path></svg>'),
  O1 = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = D1.cloneNode(!0),
        i = r.firstChild;
      return qe(o => {
        const c = n(),
          a = n();
        return c !== o._v$ && Ee(r, "fill", o._v$ = c), a !== o._v$2 && Ee(i, "fill", o._v$2 = a), o
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  j1 = Ge('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z"></path></svg>'),
  H1 = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = j1.cloneNode(!0),
        i = r.firstChild;
      return qe(() => Ee(i, "fill", n())), r
    })()
  },
  K1 = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_3783_2045)"><circle cx="8" cy="8.00098" r="8"></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3783_2045"><rect width="16" height="16" fill="white" transform="translate(0 0.000976562)"></rect></clipPath></defs></svg>'),
  V1 = Ge('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z"></path></svg>'),
  q1 = Ge('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z"></path></svg>'),
  ds = e => {
    const t = wt(),
      n = () => e.size || "s",
      r = () => e.fill || t.colors.icon.success;
    return de((() => {
      const i = de(() => n() === "xs");
      return () => i() ? (() => {
        const o = K1.cloneNode(!0),
          c = o.firstChild,
          a = c.firstChild,
          p = a.nextSibling;
        return qe(m => {
          const y = e.class,
            E = r(),
            b = t.colors.constant.white;
          return y !== m._v$ && Ee(o, "class", m._v$ = y), E !== m._v$2 && Ee(a, "fill", m._v$2 = E), b !== m._v$3 && Ee(p, "stroke", m._v$3 = b), m
        }, {
          _v$: void 0,
          _v$2: void 0,
          _v$3: void 0
        }), o
      })() : (() => {
        const o = de(() => n() === "s");
        return () => o() ? (() => {
          const c = V1.cloneNode(!0),
            a = c.firstChild,
            p = a.nextSibling;
          return qe(m => {
            const y = e.class,
              E = r(),
              b = t.colors.constant.white;
            return y !== m._v$4 && Ee(c, "class", m._v$4 = y), E !== m._v$5 && Ee(a, "fill", m._v$5 = E), b !== m._v$6 && Ee(p, "fill", m._v$6 = b), m
          }, {
            _v$4: void 0,
            _v$5: void 0,
            _v$6: void 0
          }), c
        })() : (() => {
          const c = q1.cloneNode(!0),
            a = c.firstChild,
            p = a.nextSibling;
          return qe(m => {
            const y = e.class,
              E = r(),
              b = t.colors.constant.white;
            return y !== m._v$7 && Ee(c, "class", m._v$7 = y), E !== m._v$8 && Ee(a, "fill", m._v$8 = E), b !== m._v$9 && Ee(p, "fill", m._v$9 = b), m
          }, {
            _v$7: void 0,
            _v$8: void 0,
            _v$9: void 0
          }), c
        })()
      })()
    })())
  },
  G1 = Ge('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z"></path></svg>'),
  Z1 = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24.001" r="22"></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),
  Y1 = Ge('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z"></path></svg>'),
  Zi = e => {
    const t = wt(),
      n = () => e.size || "m",
      r = () => e.fill || t.colors.icon.error;
    return de((() => {
      const i = de(() => n() === "m");
      return () => i() ? (() => {
        const o = G1.cloneNode(!0),
          c = o.firstChild,
          a = c.nextSibling;
        return qe(p => {
          const m = e.class,
            y = r(),
            E = t.colors.constant.white;
          return m !== p._v$ && Ee(o, "class", p._v$ = m), y !== p._v$2 && Ee(c, "fill", p._v$2 = y), E !== p._v$3 && Ee(a, "fill", p._v$3 = E), p
        }, {
          _v$: void 0,
          _v$2: void 0,
          _v$3: void 0
        }), o
      })() : (() => {
        const o = de(() => n() === "s");
        return () => o() ? (() => {
          const c = Z1.cloneNode(!0),
            a = c.firstChild,
            p = a.nextSibling;
          return qe(m => {
            const y = e.class,
              E = r(),
              b = t.colors.constant.white;
            return y !== m._v$4 && Ee(c, "class", m._v$4 = y), E !== m._v$5 && Ee(a, "fill", m._v$5 = E), b !== m._v$6 && Ee(p, "stroke", m._v$6 = b), m
          }, {
            _v$4: void 0,
            _v$5: void 0,
            _v$6: void 0
          }), c
        })() : (() => {
          const c = Y1.cloneNode(!0),
            a = c.firstChild,
            p = a.nextSibling;
          return qe(m => {
            const y = e.class,
              E = r(),
              b = t.colors.constant.white;
            return y !== m._v$7 && Ee(c, "class", m._v$7 = y), E !== m._v$8 && Ee(a, "fill", m._v$8 = E), b !== m._v$9 && Ee(p, "fill", m._v$9 = b), m
          }, {
            _v$7: void 0,
            _v$8: void 0,
            _v$9: void 0
          }), c
        })()
      })()
    })())
  },
  z1 = Ge('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"></path></svg>'),
  Q1 = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z"></path></svg>'),
  J1 = Ge('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),
  $n = e => {
    const t = wt(),
      n = () => e.size || "xs",
      r = () => e.fill || t.colors.icon.tertiary,
      i = Hc`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `,
      o = In`
        animation: ${i} 1s linear infinite;
    `;
    return de((() => {
      const c = de(() => n() === "xs");
      return () => c() ? (() => {
        const a = z1.cloneNode(!0),
          p = a.firstChild;
        return qe(m => {
          const y = wi(o, e.class),
            E = r();
          return y !== m._v$ && Ee(a, "class", m._v$ = y), E !== m._v$2 && Ee(p, "fill", m._v$2 = E), m
        }, {
          _v$: void 0,
          _v$2: void 0
        }), a
      })() : (() => {
        const a = de(() => n() === "s");
        return () => a() ? (() => {
          const p = Q1.cloneNode(!0),
            m = p.firstChild;
          return qe(y => {
            const E = wi(o, e.class),
              b = r();
            return E !== y._v$3 && Ee(p, "class", y._v$3 = E), b !== y._v$4 && Ee(m, "fill", y._v$4 = b), y
          }, {
            _v$3: void 0,
            _v$4: void 0
          }), p
        })() : (() => {
          const p = J1.cloneNode(!0),
            m = p.firstChild;
          return qe(y => {
            const E = wi(o, e.class),
              b = r();
            return E !== y._v$5 && Ee(p, "class", y._v$5 = E), b !== y._v$6 && Ee(m, "stroke", y._v$6 = b), y
          }, {
            _v$5: void 0,
            _v$6: void 0
          }), p
        })()
      })()
    })())
  },
  X1 = Ge('<svg width="158" height="28" viewBox="0 0 158 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z" fill="#0098EA"></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z"></path></svg>'),
  ef = () => {
    const e = wt(),
      t = () => e.theme === Ct.DARK ? e.colors.constant.white : e.colors.constant.black;
    return (() => {
      const n = X1.cloneNode(!0),
        r = n.firstChild,
        i = r.nextSibling,
        o = i.nextSibling;
      return qe(() => Ee(o, "fill", t())), n
    })()
  },
  tf = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z"></path></svg>'),
  nf = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = tf.cloneNode(!0),
        i = r.firstChild;
      return qe(() => Ee(i, "fill", n())), r
    })()
  },
  rf = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"></path></svg>'),
  of = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = rf.cloneNode(!0),
        i = r.firstChild;
      return qe(() => Ee(i, "fill", n())), r
    })()
  },
  sf = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z"></path></svg>'),
  af = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = sf.cloneNode(!0),
        i = r.firstChild;
      return qe(() => Ee(i, "fill", n())), r
    })()
  },
  lf = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z"></path></svg>'),
  cf = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = lf.cloneNode(!0),
        i = r.firstChild;
      return qe(() => Ee(i, "fill", n())), r
    })()
  },
  uf = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id="clip0_3676_1603"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000488281)"></rect></clipPath></defs></svg>'),
  Mr = e => {
    const t = wt(),
      n = () => e.fill || t.colors.accent;
    return (() => {
      const r = uf.cloneNode(!0),
        i = r.firstChild,
        o = i.firstChild;
      return qe(() => Ee(o, "fill", n())), r
    })()
  },
  ff = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z"></path></svg>'),
  Xs = e => {
    const t = wt(),
      n = () => e.fill || t.colors.accent;
    return (() => {
      const r = ff.cloneNode(!0),
        i = r.firstChild;
      return qe(() => Ee(i, "fill", n())), r
    })()
  },
  df = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1274)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id="clip0_3676_1274"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect></clipPath></defs></svg>'),
  hf = e => {
    const t = wt(),
      n = () => e.fill || t.colors.accent;
    return (() => {
      const r = df.cloneNode(!0),
        i = r.firstChild,
        o = i.firstChild;
      return qe(() => Ee(o, "fill", n())), r
    })()
  },
  gf = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z"></path></svg>'),
  wf = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = gf.cloneNode(!0),
        i = r.firstChild;
      return qe(o => {
        const c = e.class,
          a = n();
        return c !== o._v$ && Ee(r, "class", o._v$ = c), a !== o._v$2 && Ee(i, "fill", o._v$2 = a), o
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  pf = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.485 37.3849C40.894 33.9506 43 29.2212 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 29.2213 7.1061 33.9507 10.5151 37.385C13.3583 32.9438 18.3354 30 24.0001 30C29.6647 30 34.6418 32.9437 37.485 37.3849ZM35.1809 39.3635C32.9143 35.5532 28.7554 33 24.0001 33C19.2448 33 15.0858 35.5533 12.8193 39.3636C15.9564 41.6506 19.8206 43 24 43C28.1795 43 32.0437 41.6505 35.1809 39.3635ZM24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"></path></svg>'),
  mf = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = pf.cloneNode(!0),
        i = r.firstChild;
      return qe(o => {
        const c = e.class,
          a = n();
        return c !== o._v$ && Ee(r, "class", o._v$ = c), a !== o._v$2 && Ee(i, "fill", o._v$2 = a), o
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  vf = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z"></path></svg>'),
  yf = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = vf.cloneNode(!0),
        i = r.firstChild;
      return qe(o => {
        const c = e.class,
          a = n();
        return c !== o._v$ && Ee(r, "class", o._v$ = c), a !== o._v$2 && Ee(i, "fill", o._v$2 = a), o
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  xf = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z"></path></svg>'),
  bf = e => {
    const t = wt(),
      n = () => e.fill || t.colors.constant.white;
    return (() => {
      const r = xf.cloneNode(!0),
        i = r.firstChild;
      return qe(o => {
        const c = e.class,
          a = n();
        return c !== o._v$ && Ee(r, "class", o._v$ = c), a !== o._v$2 && Ee(i, "fill", o._v$2 = a), o
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  Cf = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7803 7.21967C25.0732 7.51256 25.0732 7.98744 24.7803 8.28033L11.5303 21.5303C11.2374 21.8232 10.7626 21.8232 10.4697 21.5303L4.21967 15.2803C3.92678 14.9874 3.92678 14.5126 4.21967 14.2197C4.51256 13.9268 4.98744 13.9268 5.28033 14.2197L11 19.9393L23.7197 7.21967C24.0126 6.92678 24.4874 6.92678 24.7803 7.21967Z"></path></svg>'),
  Ef = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = Cf.cloneNode(!0),
        i = r.firstChild;
      return qe(o => {
        const c = e.class,
          a = n();
        return c !== o._v$ && Ee(r, "class", o._v$ = c), a !== o._v$2 && Ee(i, "fill", o._v$2 = a), o
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  Sf = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z"></path></svg>'),
  wl = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = Sf.cloneNode(!0),
        i = r.firstChild;
      return qe(o => {
        const c = n(),
          a = n();
        return c !== o._v$ && Ee(r, "fill", o._v$ = c), a !== o._v$2 && Ee(i, "fill", o._v$2 = a), o
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  _f = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z"></path></svg>'),
  Mo = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = _f.cloneNode(!0),
        i = r.firstChild;
      return qe(() => Ee(i, "fill", n())), r
    })()
  },
  Af = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  kf = {
    m: "6px",
    s: "6px",
    none: "0"
  },
  Tf = O.div`
    width: 60px;
    height: 60px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: ${e=>Af[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.tint};
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 4px;
`,
  Bf = O(gl)`
    width: 20px;
    height: 20px;
    border-radius: ${e=>kf[e.theme.borderRadius]};
`,
  pl = e => g(Ii, {
    get name() {
      return e.labelLine1
    },
    get secondLine() {
      return e.labelLine2
    },
    get icon() {
      return g(Tf, {
        get children() {
          return g(Qr, {
            each: [0, 1, 2, 3],
            children: t => g(Bf, {
              get src() {
                return e.images[t]
              }
            })
          })
        }
      })
    },
    onClick: () => e.onClick()
  }),
  Ln = "telegram-wallet",
  ri = {
    TON: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png",
    TG: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png"
  },
  ml = e => {
    const [t] = xn(), n = () => {
      if (e.wallet.appName !== Ln) {
        if ("isPreferred" in e.wallet && e.wallet.isPreferred) return t("walletItem.recent", {}, "Recent");
        if (Nn(e.wallet)) return t("walletItem.installed", {}, "Installed");
        if (e.wallet.name === "Tonkeeper") return t("walletItem.popular", {}, "Popular")
      }
    };
    return de((() => {
      const r = de(() => e.wallet.appName === Ln);
      return () => r() ? g(Ii, {
        get icon() {
          return e.wallet.imageUrl
        },
        get name() {
          return t("walletItem.walletOn", {}, "Wallet On")
        },
        secondLine: "Telegram",
        get badgeUrl() {
          return ri.TG
        },
        onClick: () => e.onClick()
      }) : g(Ii, {
        get icon() {
          return e.wallet.imageUrl
        },
        get name() {
          return e.wallet.name
        },
        get secondLine() {
          return n()
        },
        secondLineColorPrimary: !1,
        onClick: () => e.onClick()
      })
    })())
  },
  Lf = O.div`
    width: 100%;
    overflow-y: auto;
    max-height: ${e=>e.maxHeight};

    scrollbar-width: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    &&::-webkit-scrollbar-track {
        background: transparent;
    }

    &&::-webkit-scrollbar-thumb {
        display: none;
    }
`,
  Mf = O.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.08;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${rn("mobile")} {
        width: 100%;
        margin: 0;
    }
`,
  [If, Rf] = Be(((Us = yn()) == null ? void 0 : Us.innerHeight) || 0);
yn() && window.addEventListener("resize", () => Rf(window.innerHeight));
const [mr, $f] = Be(ur("mobile")), Ri = () => $f(ur("mobile"));
yn() && (window.addEventListener("resize", () => Ri()), window.addEventListener("load", () => Ri(), {
  once: !0
}));
const vl = e => {
    const [t, n] = Be(!1), r = c => {
      n(c.target.scrollTop > 0)
    }, i = () => mr() ? 150 : 200, o = () => e.maxHeight !== void 0 ? `${e.maxHeight}px` : `${If()-i()}px`;
    return [g(Mf, {
      get isShown() {
        return t()
      }
    }), g(Lf, {
      get maxHeight() {
        return o()
      },
      onScroll: r,
      get class() {
        return e.class
      },
      get children() {
        return e.children
      }
    })]
  },
  Uf = O.a`
    display: block;
    text-decoration: unset;
`,
  $i = e => g(Uf, gn({
    get href() {
      return e.href
    },
    get target() {
      return e.blank ? "_blank" : "_self"
    },
    get class() {
      return e.class
    }
  }, () => e.blank ? {
    rel: "noreferrer noopener"
  } : {}, {
    get children() {
      return e.children
    }
  })),
  qn = Hi(),
  Pf = Ge('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z"></path></svg>'),
  Wf = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = Pf.cloneNode(!0),
        i = r.firstChild;
      return qe(o => {
        const c = e.class,
          a = n();
        return c !== o._v$ && Ee(r, "class", o._v$ = c), a !== o._v$2 && Ee(i, "fill", o._v$2 = a), o
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  Nf = Ge('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z"></path></svg>'),
  Ff = e => {
    const t = wt(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = Nf.cloneNode(!0),
        i = r.firstChild,
        o = i.nextSibling;
      return qe(c => {
        const a = n(),
          p = n();
        return a !== c._v$ && Ee(i, "fill", c._v$ = a), p !== c._v$2 && Ee(o, "fill", c._v$2 = p), c
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  Df = {
    m: "8px",
    s: "4px",
    none: "0"
  },
  Of = {
    m: "16px",
    s: "8px",
    none: "0"
  },
  jf = O.div`
    width: 256px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>Of[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.primary}
           
    color: ${e=>e.theme.colors.text.primary}
`,
  Hf = O.ul`
    background-color: ${e=>e.theme.colors.background.primary};
    padding: 8px;
`,
  ea = O.button`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding-left: 8px;
    width: 100%;

    background-color: ${e=>e.theme.colors.background.primary};
    border: none;
    border-radius: ${e=>Df[e.theme.borderRadius]};
    cursor: pointer;

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,
  ta = Ge("<li></li>"),
  lo = e => g(nn, {
    get translationKey() {
      return e.translationKey
    },
    fontSize: "15px",
    fontWeight: "590",
    get children() {
      return e.children
    }
  }),
  Kf = e => {
    const t = zt(qn),
      [n, r] = Be(!1),
      i = () => lt(void 0, null, function*() {
        const c = Qo(t.account.address, t.account.chain === Pr.TESTNET);
        yield us(c), r(!0), setTimeout(() => r(!1), 1e3)
      }),
      o = () => {
        t.disconnect(), e.onClose()
      };
    return g(jf, {
      ref(c) {
        const a = e.ref;
        typeof a == "function" ? a(c) : e.ref = c
      },
      get class() {
        return e.class
      },
      "data-tc-dropdown": "true",
      get children() {
        return g(Hf, {
          get children() {
            return [(() => {
              const c = ta.cloneNode(!0);
              return Ht(c, g(ea, {
                onClick: () => i(),
                get children() {
                  return [g(Wf, {}), g(Ie, {
                    get when() {
                      return !n()
                    },
                    get children() {
                      return g(lo, {
                        translationKey: "button.dropdown.copy",
                        children: "Copy address"
                      })
                    }
                  }), g(Ie, {
                    get when() {
                      return n()
                    },
                    get children() {
                      return g(lo, {
                        translationKey: "button.dropdown.copied",
                        children: "Address copied!"
                      })
                    }
                  })]
                }
              })), c
            })(), (() => {
              const c = ta.cloneNode(!0);
              return Ht(c, g(ea, {
                onClick: () => o(),
                get children() {
                  return [g(Ff, {}), g(lo, {
                    translationKey: "button.dropdown.disconnect",
                    children: "Disconnect"
                  })]
                }
              })), c
            })()]
          }
        })
      }
    })
  },
  Vf = {
    m: "16px",
    s: "8px",
    none: "0"
  },
  qf = O.div`
    width: 256px;
    padding: 12px 16px;
    display: flex;
    gap: 9px;

    background-color: ${e=>e.theme.colors.background.primary};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>Vf[e.theme.borderRadius]};
`,
  Gf = O.div`
    width: 192px;

    > h3 {
        font-size: 15px;
    }
`,
  Zf = O(nn)`
    margin-top: 4px;
    color: ${e=>e.theme.colors.text.secondary};
`,
  hs = e => {
    const t = ni(e);
    return g(qf, gn({
      get class() {
        return e.class
      },
      "data-tc-notification": "true"
    }, t, {
      get children() {
        return [g(Gf, {
          get children() {
            return [g(fs, {
              get translationKey() {
                return e.header.translationKey
              },
              get translationValues() {
                return e.header.translationValues
              },
              get children() {
                return e.children
              }
            }), g(Ie, {
              get when() {
                return e.text
              },
              get children() {
                return g(Zf, {
                  get translationKey() {
                    return e.text.translationKey
                  },
                  get translationValues() {
                    return e.text.translationValues
                  }
                })
              }
            })]
          }
        }), de(() => e.icon)]
      }
    }))
  },
  Yf = O($n)`
    align-self: center;
`,
  zf = e => {
    const t = zt(qn),
      [n] = xn(),
      r = () => t.wallet && "name" in t.wallet ? t.wallet.name : n("common.yourWallet", {}, "Your wallet");
    return g(hs, {
      get header() {
        return {
          translationKey: "notifications.confirm.header",
          translationValues: {
            name: r()
          }
        }
      },
      get class() {
        return e.class
      },
      get icon() {
        return g(Yf, {})
      },
      "data-tc-notification-confirm": "true",
      children: "Confirm operation in your wallet"
    })
  },
  Qf = O(Zi)`
    margin-top: 2px;
`,
  Jf = e => g(hs, {
    header: {
      translationKey: "notifications.transactionCanceled.header"
    },
    text: {
      translationKey: "notifications.transactionCanceled.text"
    },
    get icon() {
      return g(Qf, {
        size: "xs"
      })
    },
    get class() {
      return e.class
    },
    "data-tc-notification-tx-cancelled": "true",
    children: "Transaction cancelled"
  }),
  Xf = O(ds)`
    margin-top: 2px;
`,
  ed = e => g(hs, {
    header: {
      translationKey: "notifications.transactionSent.header"
    },
    text: {
      translationKey: "notifications.transactionSent.text"
    },
    get icon() {
      return g(Xf, {})
    },
    get class() {
      return e.class
    },
    "data-tc-notification-tx-sent": "true",
    children: "Transaction sent"
  }),
  co = In`
    transform: translateY(-8px);
    margin-bottom: 12px;
`,
  td = {
    timeout: 4500
  },
  [na, nd] = Be(null);

function rd(e) {
  const {
    timeout: t
  } = ut(ut({}, td), e), [n, r] = Be([]), [i, o] = Be([]);
  return Nt(lc(An, c => {
    var a;
    if (!c || !c.showNotification || na() === c || ((a = na()) == null ? void 0 : a.name) === "confirm-transaction" && c.name === "confirm-transaction") return;
    nd(c), r(y => y.filter(E => E.action !== "confirm-transaction"));
    const p = {
      action: c.name
    };
    r(y => [...y, p]);
    const m = setTimeout(() => {
      r(y => y.filter(E => E !== p)), o(y => y.filter(E => E !== m))
    }, t);
    o(y => [...y, m])
  })), Yt(() => {
    i().forEach(c => clearTimeout(c))
  }), n
}
const id = Ge('<div data-tc-list-notifications="true"></div>'),
  od = e => {
    const t = rd();
    return (() => {
      const n = id.cloneNode(!0);
      return Ht(n, g(ju, {
        onBeforeEnter: r => {
          hn(r, [{
            opacity: 0,
            transform: "translateY(0)"
          }, {
            opacity: 1,
            transform: "translateY(-8px)"
          }], {
            duration: 200
          })
        },
        onExit: (r, i) => {
          hn(r, [{
            opacity: 1,
            transform: "translateY(-8px)"
          }, {
            opacity: 0,
            transform: "translateY(-30px)"
          }], {
            duration: 200
          }).finished.then(i)
        },
        get children() {
          return g(Qr, {
            get each() {
              return t()
            },
            children: r => g(Jr, {
              get children() {
                return [g(jt, {
                  get when() {
                    return r.action === "transaction-sent"
                  },
                  get children() {
                    return g(ed, {
                      class: co
                    })
                  }
                }), g(jt, {
                  get when() {
                    return r.action === "transaction-canceled"
                  },
                  get children() {
                    return g(Jf, {
                      class: co
                    })
                  }
                }), g(jt, {
                  get when() {
                    return r.action === "confirm-transaction"
                  },
                  get children() {
                    return g(zf, {
                      class: co
                    })
                  }
                })]
              }
            })
          })
        }
      })), qe(() => es(n, e.class)), n
    })()
  },
  yl = O(Rt)`
    background-color: ${e=>e.theme.colors.connectButton.background};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${Xr(e.theme.colors.constant.black,.16)}`};
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
`,
  sd = O(yl)`
    padding: 12px 16px;
    min-width: 148px;
    justify-content: center;
    background-color: ${e=>e.theme.colors.background.primary};
`,
  ad = O(Rt)`
    min-width: 148px;
    height: 40px;

    background-color: ${e=>e.theme.colors.background.primary};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${Xr(e.theme.colors.constant.black,.16)}`};

    display: flex;
    align-items: center;
    justify-content: center;
`,
  ld = O($n)`
    height: 18px;
    width: 18px;
`,
  cd = O.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,
  ud = O(Kf)`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`,
  fd = O(od)`
    > div:first-child {
        margin-top: 20px;
    }
`;

function xl(e) {
  return e.split("-")[0]
}

function dd(e) {
  return e.split("-")[1]
}

function hd(e) {
  return ["top", "bottom"].includes(xl(e)) ? "x" : "y"
}

function gd(e) {
  return e === "y" ? "height" : "width"
}

function ra(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const o = r.x + r.width / 2 - i.width / 2,
    c = r.y + r.height / 2 - i.height / 2,
    a = hd(t),
    p = gd(a),
    m = r[p] / 2 - i[p] / 2,
    y = xl(t),
    E = a === "x";
  let b;
  switch (y) {
    case "top":
      b = {
        x: o,
        y: r.y - i.height
      };
      break;
    case "bottom":
      b = {
        x: o,
        y: r.y + r.height
      };
      break;
    case "right":
      b = {
        x: r.x + r.width,
        y: c
      };
      break;
    case "left":
      b = {
        x: r.x - i.width,
        y: c
      };
      break;
    default:
      b = {
        x: r.x,
        y: r.y
      }
  }
  switch (dd(t)) {
    case "start":
      b[a] -= m * (n && E ? -1 : 1);
      break;
    case "end":
      b[a] += m * (n && E ? -1 : 1);
      break
  }
  return b
}
const wd = (e, t, n) => lt(void 0, null, function*() {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: c
  } = n, a = o.filter(Boolean), p = yield c.isRTL == null ? void 0 : c.isRTL(t);
  if ({}.NODE_ENV !== "production") {
    if (c == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), a.filter(T => {
        let {
          name: U
        } = T;
        return U === "autoPlacement" || U === "flip"
      }).length > 1) throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!e || !t) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "))
  }
  let m = yield c.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: y,
    y: E
  } = ra(m, r, p), b = r, A = {}, _ = 0;
  for (let T = 0; T < a.length; T++) {
    const {
      name: U,
      fn: ae
    } = a[T], {
      x: J,
      y: q,
      data: te,
      reset: N
    } = yield ae({
      x: y,
      y: E,
      initialPlacement: r,
      placement: b,
      strategy: i,
      middlewareData: A,
      rects: m,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (y = J ?? y, E = q ?? E, A = tn(ut({}, A), {
        [U]: ut(ut({}, A[U]), te)
      }), {}.NODE_ENV !== "production" && _ > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), N && _ <= 50) {
      _++, typeof N == "object" && (N.placement && (b = N.placement), N.rects && (m = N.rects === !0 ? yield c.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }): N.rects), {
        x: y,
        y: E
      } = ra(m, b, p)), T = -1;
      continue
    }
  }
  return {
    x: y,
    y: E,
    placement: b,
    strategy: i,
    middlewareData: A
  }
});

function ia(e) {
  return tn(ut({}, e), {
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  })
}

function Un(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function mn(e) {
  return Un(e).getComputedStyle(e)
}

function jn(e) {
  return Cl(e) ? (e.nodeName || "").toLowerCase() : ""
}
let fi;

function bl() {
  if (fi) return fi;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (fi = e.brands.map(t => t.brand + "/" + t.version).join(" "), fi) : navigator.userAgent
}

function vn(e) {
  return e instanceof Un(e).HTMLElement
}

function sn(e) {
  return e instanceof Un(e).Element
}

function Cl(e) {
  return e instanceof Un(e).Node
}

function oa(e) {
  if (typeof ShadowRoot > "u") return !1;
  const t = Un(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot
}

function Yi(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = mn(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n) && !["inline", "contents"].includes(i)
}

function pd(e) {
  return ["table", "td", "th"].includes(jn(e))
}

function gs(e) {
  const t = /firefox/i.test(bl()),
    n = mn(e),
    r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some(i => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(i => {
    const o = n.contain;
    return o != null ? o.includes(i) : !1
  })
}

function El() {
  return !/^((?!chrome|android).)*safari/i.test(bl())
}

function ws(e) {
  return ["html", "body", "#document"].includes(jn(e))
}
const sa = Math.min,
  Ir = Math.max,
  aa = Math.round,
  Io = {
    x: 1,
    y: 1
  };

function Kr(e) {
  const t = !sn(e) && e.contextElement ? e.contextElement : sn(e) ? e : null;
  if (!t) return Io;
  const n = t.getBoundingClientRect(),
    r = mn(t);
  if (r.boxSizing !== "border-box") return vn(t) ? {
    x: t.offsetWidth > 0 && aa(n.width) / t.offsetWidth || 1,
    y: t.offsetHeight > 0 && aa(n.height) / t.offsetHeight || 1
  } : Io;
  let i = n.width / parseFloat(r.width),
    o = n.height / parseFloat(r.height);
  return (!i || !Number.isFinite(i)) && (i = 1), (!o || !Number.isFinite(o)) && (o = 1), {
    x: i,
    y: o
  }
}

function Hn(e, t, n, r) {
  var i, o, c, a;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const p = e.getBoundingClientRect();
  let m = Io;
  t && (r ? sn(r) && (m = Kr(r)) : m = Kr(e));
  const y = sn(e) ? Un(e) : window,
    E = !El() && n,
    b = (p.left + (E && (i = (o = y.visualViewport) == null ? void 0 : o.offsetLeft) != null ? i : 0)) / m.x,
    A = (p.top + (E && (c = (a = y.visualViewport) == null ? void 0 : a.offsetTop) != null ? c : 0)) / m.y,
    _ = p.width / m.x,
    T = p.height / m.y;
  return {
    width: _,
    height: T,
    top: A,
    right: b + _,
    bottom: A + T,
    left: b,
    x: b,
    y: A
  }
}

function Gn(e) {
  return ((Cl(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function zi(e) {
  return sn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  }
}

function Sl(e) {
  return Hn(Gn(e)).left + zi(e).scrollLeft
}

function md(e, t, n) {
  const r = vn(t),
    i = Gn(t),
    o = Hn(e, !0, n === "fixed", t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((jn(t) !== "body" || Yi(i)) && (c = zi(t)), vn(t)) {
      const p = Hn(t, !0);
      a.x = p.x + t.clientLeft, a.y = p.y + t.clientTop
    } else i && (a.x = Sl(i));
  return {
    x: o.left + c.scrollLeft - a.x,
    y: o.top + c.scrollTop - a.y,
    width: o.width,
    height: o.height
  }
}

function Vr(e) {
  if (jn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (oa(e) ? e.host : null) || Gn(e);
  return oa(t) ? t.host : t
}

function la(e) {
  return !vn(e) || mn(e).position === "fixed" ? null : e.offsetParent
}

function vd(e) {
  let t = Vr(e);
  for (; vn(t) && !ws(t);) {
    if (gs(t)) return t;
    t = Vr(t)
  }
  return null
}

function ca(e) {
  const t = Un(e);
  let n = la(e);
  for (; n && pd(n) && mn(n).position === "static";) n = la(n);
  return n && (jn(n) === "html" || jn(n) === "body" && mn(n).position === "static" && !gs(n)) ? t : n || vd(e) || t
}

function yd(e) {
  if (vn(e)) return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
  const t = Hn(e);
  return {
    width: t.width,
    height: t.height
  }
}

function xd(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const i = vn(n),
    o = Gn(n);
  if (n === o) return t;
  let c = {
      scrollLeft: 0,
      scrollTop: 0
    },
    a = {
      x: 1,
      y: 1
    };
  const p = {
    x: 0,
    y: 0
  };
  if ((i || !i && r !== "fixed") && ((jn(n) !== "body" || Yi(o)) && (c = zi(n)), vn(n))) {
    const m = Hn(n);
    a = Kr(n), p.x = m.x + n.clientLeft, p.y = m.y + n.clientTop
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - c.scrollLeft * a.x + p.x,
    y: t.y * a.y - c.scrollTop * a.y + p.y
  }
}

function bd(e, t) {
  const n = Un(e),
    r = Gn(e),
    i = n.visualViewport;
  let o = r.clientWidth,
    c = r.clientHeight,
    a = 0,
    p = 0;
  if (i) {
    o = i.width, c = i.height;
    const m = El();
    (m || !m && t === "fixed") && (a = i.offsetLeft, p = i.offsetTop)
  }
  return {
    width: o,
    height: c,
    x: a,
    y: p
  }
}

function Cd(e) {
  var t;
  const n = Gn(e),
    r = zi(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = Ir(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
    c = Ir(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let a = -r.scrollLeft + Sl(e);
  const p = -r.scrollTop;
  return mn(i || n).direction === "rtl" && (a += Ir(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: c,
    x: a,
    y: p
  }
}

function _l(e) {
  const t = Vr(e);
  return ws(t) ? e.ownerDocument.body : vn(t) && Yi(t) ? t : _l(t)
}

function Rr(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = _l(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = Un(r);
  return i ? t.concat(o, o.visualViewport || [], Yi(r) ? r : []) : t.concat(r, Rr(r))
}

function Ed(e, t) {
  const n = Hn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    o = vn(e) ? Kr(e) : {
      x: 1,
      y: 1
    },
    c = e.clientWidth * o.x,
    a = e.clientHeight * o.y,
    p = i * o.x,
    m = r * o.y;
  return {
    top: m,
    left: p,
    right: p + c,
    bottom: m + a,
    x: p,
    y: m,
    width: c,
    height: a
  }
}

function ua(e, t, n) {
  return t === "viewport" ? ia(bd(e, n)) : sn(t) ? Ed(t, n) : ia(Cd(Gn(e)))
}

function Sd(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Rr(e).filter(a => sn(a) && jn(a) !== "body"),
    i = null;
  const o = mn(e).position === "fixed";
  let c = o ? Vr(e) : e;
  for (; sn(c) && !ws(c);) {
    const a = mn(c),
      p = gs(c);
    (o ? !p && !i : !p && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? r = r.filter(y => y !== c): i = a, c = Vr(c)
  }
  return t.set(e, r), r
}

function _d(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const c = [...n === "clippingAncestors" ? Sd(t, this._c) : [].concat(n), r],
    a = c[0],
    p = c.reduce((m, y) => {
      const E = ua(t, y, i);
      return m.top = Ir(E.top, m.top), m.right = sa(E.right, m.right), m.bottom = sa(E.bottom, m.bottom), m.left = Ir(E.left, m.left), m
    }, ua(t, a, i));
  return {
    width: p.right - p.left,
    height: p.bottom - p.top,
    x: p.left,
    y: p.top
  }
}
const Ad = {
  getClippingRect: _d,
  convertOffsetParentRelativeRectToViewportRelativeRect: xd,
  isElement: sn,
  getDimensions: yd,
  getOffsetParent: ca,
  getDocumentElement: Gn,
  getScale: Kr,
  getElementRects(e) {
    return lt(this, null, function*() {
      let {
        reference: t,
        floating: n,
        strategy: r
      } = e;
      const i = this.getOffsetParent || ca,
        o = this.getDimensions;
      return {
        reference: md(t, yield i(n), r),
        floating: ut({
          x: 0,
          y: 0
        }, yield o(n))
      }
    })
  },
  getClientRects: e => Array.from(e.getClientRects()),
  isRTL: e => mn(e).direction === "rtl"
};

function kd(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: c = !0,
    animationFrame: a = !1
  } = r, p = i && !a, m = p || o ? [...sn(e) ? Rr(e) : e.contextElement ? Rr(e.contextElement) : [], ...Rr(t)] : [];
  m.forEach(_ => {
    p && _.addEventListener("scroll", n, {
      passive: !0
    }), o && _.addEventListener("resize", n)
  });
  let y = null;
  if (c) {
    let _ = !0;
    y = new ResizeObserver(() => {
      _ || n(), _ = !1
    }), sn(e) && !a && y.observe(e), !sn(e) && e.contextElement && !a && y.observe(e.contextElement), y.observe(t)
  }
  let E, b = a ? Hn(e) : null;
  a && A();

  function A() {
    const _ = Hn(e);
    b && (_.x !== b.x || _.y !== b.y || _.width !== b.width || _.height !== b.height) && n(), b = _, E = requestAnimationFrame(A)
  }
  return n(), () => {
    var _;
    m.forEach(T => {
      p && T.removeEventListener("scroll", n), o && T.removeEventListener("resize", n)
    }), (_ = y) == null || _.disconnect(), y = null, a && cancelAnimationFrame(E)
  }
}
const Td = (e, t, n) => {
  const r = new Map,
    i = ut({
      platform: Ad
    }, n),
    o = tn(ut({}, i.platform), {
      _c: r
    });
  return wd(e, t, tn(ut({}, i), {
    platform: o
  }))
};

function Bd(e, t, n) {
  let r = () => {
      var E;
      return (E = n == null ? void 0 : n.placement) != null ? E : "bottom"
    },
    i = () => {
      var E;
      return (E = n == null ? void 0 : n.strategy) != null ? E : "absolute"
    },
    [o, c] = Be({
      x: null,
      y: null,
      placement: r(),
      strategy: i(),
      middlewareData: {}
    }),
    [a, p] = Be();
  Nt(() => {
    let E = a();
    if (E) throw E.value
  });
  let m = de(() => (e(), t(), {}));

  function y() {
    let E = e(),
      b = t();
    if (E && b) {
      let A = m();
      Td(E, b, {
        middleware: n == null ? void 0 : n.middleware,
        placement: r(),
        strategy: i()
      }).then(_ => {
        A === m() && c(_)
      }, _ => {
        p(_)
      })
    }
  }
  return Nt(() => {
    let E = e(),
      b = t();
    if (n == null || n.middleware, r(), i(), E && b)
      if (n != null && n.whileElementsMounted) {
        let A = n.whileElementsMounted(E, b, y);
        A && Yt(A)
      } else y()
  }), {
    get x() {
      return o().x
    },
    get y() {
      return o().y
    },
    get placement() {
      return o().placement
    },
    get strategy() {
      return o().strategy
    },
    get middlewareData() {
      return o().middlewareData
    },
    update: y
  }
}
const Ld = Ge('<tc-root data-tc-dropdown-container="true"></tc-root>'),
  Md = () => {
    const e = wt(),
      t = zt(xr),
      n = zt(qn),
      [r, i] = Be(!1),
      [o, c] = Be(t.account),
      [a, p] = Be(!t.account);
    let m;
    const [y, E] = Be(), [b, A] = Be(), _ = Bd(b, y, {
      whileElementsMounted: kd,
      placement: "bottom-end"
    }), T = () => {
      const J = o();
      if (J) {
        const q = Qo(J.address, J.chain === Pr.TESTNET);
        return q.slice(0, 4) + "…" + q.slice(-4)
      }
      return ""
    };
    n.connectionRestored.then(() => p(!1));
    const U = t.onStatusChange(J => {
        if (!J) {
          i(!1), c(null), p(!1);
          return
        }
        c(J.account), p(!1)
      }),
      ae = J => {
        if (!o() || !r()) return;
        const q = b().contains(J.target),
          te = m.contains(J.target);
        !q && !te && i(!1)
      };
    return $a(() => {
      document.body.addEventListener("click", ae)
    }), Yt(() => {
      document.body.removeEventListener("click", ae), U()
    }), g(gr, {
      component: _n,
      get children() {
        return [g(Ie, {
          get when() {
            return a()
          },
          get children() {
            return g(ad, {
              disabled: !0,
              "data-tc-connect-button-loading": "true",
              get children() {
                return g(ld, {})
              }
            })
          }
        }), g(Ie, {
          get when() {
            return !a()
          },
          get children() {
            return [g(Ie, {
              get when() {
                return !o()
              },
              get children() {
                return g(yl, {
                  onClick: () => n.openModal(),
                  "data-tc-connect-button": "true",
                  scale: "s",
                  get children() {
                    return [g(H1, {
                      get fill() {
                        return e.colors.connectButton.foreground
                      }
                    }), g(nn, {
                      translationKey: "button.connectWallet",
                      fontSize: "15px",
                      lineHeight: "18px",
                      fontWeight: "590",
                      get color() {
                        return e.colors.connectButton.foreground
                      },
                      children: "Connect wallet"
                    })]
                  }
                })
              }
            }), g(Ie, {
              get when() {
                return o()
              },
              get children() {
                return g(cd, {
                  get children() {
                    return [g(sd, {
                      onClick: () => i(J => !J),
                      ref: A,
                      "data-tc-dropdown-button": "true",
                      scale: "s",
                      get children() {
                        return [g(nn, {
                          fontSize: "15px",
                          fontWeight: "590",
                          lineHeight: "18px",
                          get children() {
                            return T()
                          }
                        }), g(ll, {
                          direction: "bottom"
                        })]
                      }
                    }), g(Va, {
                      get children() {
                        const J = Dt(() => document.importNode(Ld, !0));
                        return fr(E, J), J.style.setProperty("z-index", "999"), J._$owner = cc(), Ht(J, g(cs, {
                          onBeforeEnter: q => {
                            hn(q, [{
                              opacity: 0,
                              transform: "translateY(-8px)"
                            }, {
                              opacity: 1,
                              transform: "translateY(0)"
                            }], {
                              duration: 150
                            })
                          },
                          onExit: (q, te) => {
                            hn(q, [{
                              opacity: 1,
                              transform: "translateY(0)"
                            }, {
                              opacity: 0,
                              transform: "translateY(-8px)"
                            }], {
                              duration: 150
                            }).finished.then(te)
                          },
                          get children() {
                            return g(Ie, {
                              get when() {
                                return r()
                              },
                              get children() {
                                return g(ud, {
                                  get hidden() {
                                    return !r()
                                  },
                                  onClose: () => i(!1),
                                  ref(q) {
                                    const te = m;
                                    typeof te == "function" ? te(q) : m = q
                                  }
                                })
                              }
                            })
                          }
                        }), null), Ht(J, g(fd, {}), null), qe(q => {
                          var te, N;
                          const X = _.strategy,
                            H = `${(te=_.y)!=null?te:0}px`,
                            D = `${(N=_.x)!=null?N:0}px`;
                          return X !== q._v$ && J.style.setProperty("position", q._v$ = X), H !== q._v$2 && J.style.setProperty("top", q._v$2 = H), D !== q._v$3 && J.style.setProperty("left", q._v$3 = D), q
                        }, {
                          _v$: void 0,
                          _v$2: void 0,
                          _v$3: void 0
                        }), J
                      }
                    })]
                  }
                })
              }
            })]
          }
        })]
      }
    })
  },
  Al = O(ul)`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 0;

    ${rn("mobile")} {
        padding-left: 0;
        padding-right: 0;

        min-height: 364px;
    }
`,
  kl = O(bn)`
    margin-top: 12px;

    ${rn("mobile")} {
        padding: 0 10px;
    }
`,
  Tl = O.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    ${rn("mobile")} {
        height: 160px;
        align-items: center;
    }
`;
O(nn)`
    min-width: 84px;
    text-align: center;
    font-weight: 590;
`;
O(h1)`
    margin: 0 auto 22px;
`;
const [et, di] = ss({
  buttonRootId: null,
  language: "en",
  returnStrategy: "back",
  twaReturnUrl: void 0,
  walletsListConfiguration: {},
  enableAndroidBackHandler: !0
});

function Id(e) {
  return [...new Set(e)]
}

function Rd(e, t, n) {
  return t.map(r => {
    const i = n.find(o => o[e] === r[e]);
    return n = n.filter(o => o[e] !== r[e]), i === void 0 ? r : i
  }).concat(n)
}

function $d(e) {
  return "jsBridgeKey" in e ? tn(ut({}, e), {
    injected: Dn.isWalletInjected(e.jsBridgeKey),
    embedded: Dn.isInsideWalletBrowser(e.jsBridgeKey)
  }) : e
}

function ps(e, t) {
  var n;
  return t && (n = t.includeWallets) != null && n.length && (e = Rd("name", e, t.includeWallets.map($d))), e
}

function fa(e) {
  return e.platforms.some(t => ["macos", "linux", "windows"].includes(t))
}

function $r(e) {
  return e.platforms.some(t => ["ios", "android"].includes(t))
}

function da(e) {
  return e.platforms.some(t => ["chrome", "firefox", "safari"].includes(t))
}

function Pn(e, t) {
  return t ? e.name.toLowerCase() === t.toLowerCase() || e.appName.toLowerCase() === t.toLowerCase() : !1
}
const Ud = O.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,
  Pd = O(bn)`
    margin-bottom: 18px;
`;
O.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.12;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${rn("mobile")} {
        width: 100%;
    }
`;
const Wd = O.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 92px);
    grid-template-rows: auto;
    align-content: flex-start;
    justify-content: center;
    row-gap: 8px;
    width: 100%;
    padding: 0 0 16px;
    align-self: flex-start;
    max-width: 400px;
    margin: 0 auto;

    > li {
        display: block;
        height: fit-content;
    }

    ${rn("mobile")} {
        grid-template-columns: repeat(auto-fit, 82px);
    }
`;
O(Rt)`
    display: block;
    margin: 0 auto 1px;
    font-size: 15px;
`;
const Nd = O(rr)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  Fd = O(ml)`
    height: 100%;
`,
  Dd = Ge("<li></li>"),
  Od = e => {
    const t = () => mr() ? void 0 : 510,
      n = () => mr() ? e.walletsList.filter($r) : e.walletsList;
    return g(Ud, {
      "data-tc-wallets-modal-list": "true",
      get children() {
        return [g(Nd, {
          icon: "arrow",
          onClick: () => e.onBack()
        }), g(Pd, {
          translationKey: "walletModal.wallets",
          children: "Wallets"
        }), g(vl, {
          get maxHeight() {
            return t()
          },
          get children() {
            return g(Wd, {
              get children() {
                return g(Qr, {
                  get each() {
                    return n()
                  },
                  children: r => (() => {
                    const i = Dd.cloneNode(!0);
                    return Ht(i, g(Fd, {
                      wallet: r,
                      onClick: () => e.onSelect(r)
                    })), i
                  })()
                })
              }
            })
          }
        })]
      }
    })
  },
  jd = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  Hd = {
    m: "6px",
    s: "6px",
    none: "0"
  },
  Kd = O.div`
    display: flex;
    flex-direction: column;
`,
  Vd = O.div`
    flex: 1;
    margin-top: ${e=>e.qr?"0":"18px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,
  qd = O(Gi)`
    margin-bottom: 24px;
`,
  Gd = O(bn)`
    max-width: 288px;
    margin: 0 auto 2px;
`,
  Zd = O(Vn)`
    max-width: 288px;
    text-align: center;
    margin: 0 auto 20px;
`,
  Yd = O(rr)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  Ar = O.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,
  zd = O(Ar)`
    padding-bottom: 0;
`,
  uo = O(Rt)`
    margin-bottom: 24px;
`,
  Qd = O($n)`
    margin-bottom: 18px;
    margin-top: 2px;
`,
  Jd = O(Zi)`
    margin-bottom: 16px;
`,
  hi = O(Vn)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,
  Xd = O(Rt)`
    margin-top: -8px;
    margin-bottom: 24px;
    width: 100%;
    padding: 12px 12px 12px 20px;
    border-radius: ${e=>jd[e.theme.borderRadius]};
    font-size: 16px;
    line-height: 20px;
`,
  e4 = O(nr)`
    width: 32px;
    height: 32px;
    border-radius: ${e=>Hd[e.theme.borderRadius]};
`,
  Ft = e => {
    const [t] = xn();
    return de(() => {
      var n;
      return t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString())
    })
  };

function gt(e, t) {
  let n;
  typeof t == "string" ? n = t : n = pn() ? t.twaReturnUrl || t.returnStrategy : "none";
  const r = t4(e, "ret", n);
  if (!kn(e)) return r;
  const i = r.slice(r.lastIndexOf("&") + 1);
  return r.slice(0, r.lastIndexOf("&")) + "-" + Po(i)
}

function ii(e, t) {
  t = ut({}, t);
  const n = n4(e),
    r = new URL(n);
  if (r.searchParams.has("startapp") || r.searchParams.append("startapp", "tonconnect"), il()) {
    t.returnStrategy = "back";
    const i = gt(r.toString(), t.returnStrategy);
    vt(i)
  } else if (pn())
    if (Jn("ios", "android", "macos", "tdesktop", "web")) {
      t.returnStrategy = "back";
      const i = gt(r.toString(), t.returnStrategy);
      To(i)
    } else Jn("weba") ? To(gt(r.toString(), t)) : vt(gt(r.toString(), t));
  else if (ln("ios")) {
    t.returnStrategy === "back" && (Ke("safari") ? t.returnStrategy = "back" : Ke("chrome") ? t.returnStrategy = "googlechrome://" : Ke("firefox") ? t.returnStrategy = "firefox://" : Ke("opera") ? t.returnStrategy = "opera-http://" : t.returnStrategy = location.href);
    const i = Ke("chrome"),
      o = Ke("firefox");
    if ((i || o) && !t.forceRedirect) {
      const a = gt(r.toString(), t.returnStrategy),
        p = gi(a);
      Wn(p, () => vt(a))
    } else {
      const a = gt(r.toString(), t.returnStrategy);
      vt(a)
    }
  } else if (ln("android")) {
    t.returnStrategy = "back";
    const i = Ke("chrome"),
      o = Ke("firefox");
    if ((i || o) && !t.forceRedirect) {
      const a = gt(r.toString(), t.returnStrategy),
        p = gi(a);
      Wn(p, () => vt(a))
    } else {
      const a = gt(r.toString(), t.returnStrategy);
      vt(a)
    }
  } else if (ln("ipad")) {
    t.returnStrategy === "back" && (Ke("safari") ? t.returnStrategy = "back" : Ke("chrome") ? t.returnStrategy = "googlechrome://" : Ke("firefox") ? t.returnStrategy = "firefox://" : Ke("opera") ? t.returnStrategy = "opera-http://" : t.returnStrategy = location.href);
    const i = Ke("chrome"),
      o = Ke("firefox"),
      c = (i || o) && !t.forceRedirect,
      a = gt(r.toString(), t.returnStrategy);
    if (c) {
      const p = gi(a);
      Wn(p, () => vt(a))
    } else vt(a)
  } else if (ln("macos", "windows", "linux")) {
    t.returnStrategy = "back", t.twaReturnUrl = void 0;
    const i = gt(r.toString(), t.returnStrategy);
    if (t.forceRedirect) vt(i);
    else {
      const o = gi(i);
      Wn(o, () => vt(i))
    }
  } else vt(gt(r.toString(), t))
}

function oi(e, t, n, r) {
  if (n = ut({}, n), il())
    if (ln("ios", "android")) n.returnStrategy === "back" && (n.returnStrategy = "tg://resolve"), r("universal-link"), Lr(gt(e, n.returnStrategy), "_self");
    else {
      r("universal-link");
      const i = gt(e, n.returnStrategy);
      vt(i)
    }
  else if (pn())
    if (Jn("ios", "android")) {
      n.returnStrategy === "back" && (n.returnStrategy = "tg://resolve"), r("universal-link");
      const i = gt(e, n.returnStrategy);
      To(i, () => {
        r("universal-link"), vt(i)
      })
    } else if (Jn("macos", "tdesktop")) {
    n.returnStrategy === "back" && (n.returnStrategy = "tg://resolve");
    const i = gt(e, n.returnStrategy);
    !!t && !n.forceRedirect ? (r("custom-deeplink"), Wn(ci(i, t), () => {
      r("universal-link"), vt(i)
    })) : (r("universal-link"), vt(i))
  } else if (Jn("weba")) {
    n.returnStrategy === "back" && (Ke("safari") ? n.returnStrategy = location.href : Ke("chrome") ? n.returnStrategy = "googlechrome://" : Ke("firefox") ? n.returnStrategy = "firefox://" : Ke("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href);
    const i = gt(e, n.returnStrategy);
    !!t && !n.forceRedirect ? (r("custom-deeplink"), Wn(ci(i, t), () => {
      r("universal-link"), vt(i)
    })) : (r("universal-link"), vt(i))
  } else if (Jn("web")) {
    n.returnStrategy === "back" && (Ke("safari") ? n.returnStrategy = location.href : Ke("chrome") ? n.returnStrategy = "googlechrome://" : Ke("firefox") ? n.returnStrategy = "firefox://" : Ke("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href);
    const i = gt(e, n.returnStrategy);
    !!t && !n.forceRedirect ? (r("custom-deeplink"), Wn(ci(i, t), () => {
      r("universal-link"), vt(i)
    })) : (r("universal-link"), vt(i))
  } else {
    r("universal-link");
    const i = gt(e, n.returnStrategy);
    vt(i)
  } else if (ln("ios")) n.returnStrategy === "back" && (Ke("safari") ? n.returnStrategy = "none" : Ke("chrome") ? n.returnStrategy = "googlechrome://" : Ke("firefox") ? n.returnStrategy = "firefox://" : Ke("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), Ke("chrome") ? (r("universal-link"), Lr(gt(e, n.returnStrategy), "_self")) : (r("universal-link"), vt(gt(e, n.returnStrategy)));
  else if (ln("android")) n.returnStrategy === "back" && (Ke("chrome") ? n.returnStrategy = "googlechrome://" : Ke("firefox") ? n.returnStrategy = "firefox://" : Ke("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), r("universal-link"), vt(gt(e, n.returnStrategy));
  else if (ln("ipad")) n.returnStrategy === "back" && (Ke("safari") ? n.returnStrategy = "none" : Ke("chrome") ? n.returnStrategy = "googlechrome://" : Ke("firefox") ? n.returnStrategy = "firefox://" : Ke("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), Ke("chrome") ? (r("universal-link"), Lr(gt(e, n.returnStrategy), "_self")) : (r("universal-link"), vt(gt(e, n.returnStrategy)));
  else if (ln("macos", "windows", "linux")) {
    n.returnStrategy === "back" && (Ke("safari") ? n.returnStrategy = "none" : Ke("chrome") ? n.returnStrategy = "googlechrome://" : Ke("firefox") ? n.returnStrategy = "firefox://" : Ke("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = "none");
    const i = gt(e, n.returnStrategy);
    !!t && !n.forceRedirect ? (r("custom-deeplink"), Wn(ci(i, t), () => {
      r("universal-link"), vt(i)
    })) : (r("universal-link"), vt(i))
  } else r("universal-link"), vt(gt(e, n.returnStrategy))
}

function t4(e, t, n) {
  const r = new URL(e);
  return r.searchParams.append(t, n), r.toString()
}

function n4(e) {
  const t = new URL(e);
  return t.searchParams.has("attach") && (t.searchParams.delete("attach"), t.pathname += "/start"), t.toString()
}

function gi(e) {
  const t = new URL(e),
    [, n, r] = t.pathname.split("/"),
    i = t.searchParams.get("startapp");
  return `tg://resolve?domain=${n}&appname=${r}&startapp=${i}`
}
const Bl = e => {
    const [t, n] = Be("mobile"), [r, i] = Be(!1), [o, c] = Be(), [a, p] = Be(!0), m = zt(xr), y = m.onStatusChange(() => {}, () => {
      e.wallet.appName !== Ln && i(!0)
    });
    Yt(y);
    const E = () => {
      try {
        const U = m.connect({
          universalLink: e.wallet.universalLink,
          bridgeUrl: e.wallet.bridgeUrl
        }, e.additionalRequest);
        c(U)
      } catch {}
    };
    Nt(() => {
      Dt(t) !== "extension" && ($r(e.wallet) || fa(e.wallet)) && E()
    });
    const b = () => {
        i(!1), t() === "extension" && E(), n("mobile"), Kt(tn(ut({}, e.wallet), {
          openMethod: "qrcode"
        }))
      },
      A = () => {
        if (i(!1), t() === "extension" && E(), n("desktop"), kn(o())) _();
        else {
          const U = !a();
          p(!1), oi(o(), e.wallet.deepLink, {
            returnStrategy: et.returnStrategy,
            forceRedirect: U
          }, ae => {
            Kt(tn(ut({}, e.wallet), {
              openMethod: ae
            }))
          })
        }
      },
      _ = () => {
        const U = !a();
        p(!1), Kt(tn(ut({}, e.wallet), {
          openMethod: "universal-link"
        })), ii(o(), {
          returnStrategy: et.returnStrategy,
          twaReturnUrl: et.twaReturnUrl,
          forceRedirect: U
        })
      },
      T = () => {
        i(!1), n("extension"), Nn(e.wallet) && (Kt(e.wallet), m.connect({
          jsBridgeKey: e.wallet.jsBridgeKey
        }, e.additionalRequest))
      };
    return $r(e.wallet) ? b() : da(e.wallet) ? T() : A(), g(Kd, {
      "data-tc-wallets-modal-connection-desktop": "true",
      get children() {
        return [g(Ie, {
          get when() {
            return !e.backDisabled
          },
          get children() {
            return g(Yd, {
              icon: "arrow",
              onClick: () => e.onBackClick()
            })
          }
        }), g(Gd, {
          get children() {
            return e.wallet.name
          }
        }), g(Ie, {
          get when() {
            return t() === "mobile"
          },
          get children() {
            return g(Zd, {
              translationKey: "walletModal.desktopConnectionModal.scanQR",
              get translationValues() {
                return {
                  name: e.wallet.name
                }
              },
              get children() {
                return ["Scan the QR code below with your phone’s or ", de(() => e.wallet.name), "’s camera"]
              }
            })
          }
        }), g(Vd, {
          get qr() {
            return t() === "mobile"
          },
          get children() {
            return g(Jr, {
              get children() {
                return [g(jt, {
                  get when() {
                    return t() === "mobile"
                  },
                  get children() {
                    return g(qd, {
                      disableCopy: !1,
                      get sourceUrl() {
                        return gt(o(), "none")
                      },
                      get imageUrl() {
                        return e.wallet.imageUrl
                      }
                    })
                  }
                }), g(jt, {
                  get when() {
                    return r()
                  },
                  get children() {
                    return [g(Jd, {
                      size: "s"
                    }), g(hi, {
                      translationKey: "walletModal.desktopConnectionModal.connectionDeclined",
                      children: "Connection declined"
                    }), g(Ar, {
                      get children() {
                        return g(Rt, {
                          get leftIcon() {
                            return g(Mr, {})
                          },
                          get onClick() {
                            return t() === "extension" ? T : A
                          },
                          get children() {
                            return g(Ft, {
                              translationKey: "common.retry",
                              children: "Retry"
                            })
                          }
                        })
                      }
                    })]
                  }
                }), g(jt, {
                  get when() {
                    return t() === "extension"
                  },
                  get children() {
                    return [g(Ie, {
                      get when() {
                        return Nn(e.wallet)
                      },
                      get children() {
                        return [g(Qd, {
                          size: "s"
                        }), g(hi, {
                          translationKey: "walletModal.desktopConnectionModal.continueInExtension",
                          get translationValues() {
                            return {
                              name: e.wallet.name
                            }
                          },
                          get children() {
                            return ["Continue in ", de(() => e.wallet.name), " browser extension…"]
                          }
                        }), g(Ar, {
                          get children() {
                            return g(Rt, {
                              get leftIcon() {
                                return g(Mr, {})
                              },
                              onClick: T,
                              get children() {
                                return g(Ft, {
                                  translationKey: "common.retry",
                                  children: "Retry"
                                })
                              }
                            })
                          }
                        })]
                      }
                    }), g(Ie, {
                      get when() {
                        return !Nn(e.wallet)
                      },
                      get children() {
                        return [g(hi, {
                          translationKey: "walletModal.desktopConnectionModal.dontHaveExtension",
                          get translationValues() {
                            return {
                              name: e.wallet.name
                            }
                          },
                          get children() {
                            return ["Seems you don't have installed ", de(() => e.wallet.name), " browser extension"]
                          }
                        }), g(Ar, {
                          get children() {
                            return g($i, {
                              get href() {
                                return e.wallet.aboutUrl
                              },
                              blank: !0,
                              get children() {
                                return g(Rt, {
                                  get rightIcon() {
                                    return g(Xs, {})
                                  },
                                  onClick: T,
                                  get children() {
                                    return g(Ft, {
                                      translationKey: "walletModal.desktopConnectionModal.getWallet",
                                      get translationValues() {
                                        return {
                                          name: e.wallet.name
                                        }
                                      },
                                      get children() {
                                        return ["Get ", de(() => e.wallet.name)]
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                        })]
                      }
                    })]
                  }
                }), g(jt, {
                  get when() {
                    return t() === "desktop"
                  },
                  get children() {
                    return [g($n, {
                      size: "m"
                    }), g(hi, {
                      translationKey: "walletModal.desktopConnectionModal.continueOnDesktop",
                      get translationValues() {
                        return {
                          name: e.wallet.name
                        }
                      },
                      get children() {
                        return ["Continue in ", de(() => e.wallet.name), " on desktop…"]
                      }
                    }), g(Ar, {
                      get children() {
                        return [g(Rt, {
                          get leftIcon() {
                            return g(Mr, {})
                          },
                          onClick: A,
                          get children() {
                            return g(Ft, {
                              translationKey: "common.retry",
                              children: "Retry"
                            })
                          }
                        }), g($i, {
                          get href() {
                            return e.wallet.aboutUrl
                          },
                          blank: !0,
                          get children() {
                            return g(Rt, {
                              get rightIcon() {
                                return g(Xs, {})
                              },
                              get children() {
                                return g(Ft, {
                                  translationKey: "walletModal.desktopConnectionModal.getWallet",
                                  get translationValues() {
                                    return {
                                      name: e.wallet.name
                                    }
                                  },
                                  get children() {
                                    return ["Get ", de(() => e.wallet.name)]
                                  }
                                })
                              }
                            })
                          }
                        })]
                      }
                    })]
                  }
                })]
              }
            })
          }
        }), g(Ie, {
          get when() {
            return e.wallet.appName === Ln
          },
          get children() {
            return g(Xd, {
              get rightIcon() {
                return g(e4, {
                  get src() {
                    return ri.TG
                  }
                })
              },
              scale: "s",
              onClick: _,
              get children() {
                return g(Ft, {
                  translationKey: "walletModal.desktopConnectionModal.openWalletOnTelegram",
                  children: "Open Wallet in Telegram on desktop"
                })
              }
            })
          }
        }), g(Ie, {
          get when() {
            return e.wallet.appName !== Ln
          },
          get children() {
            return g(zd, {
              get children() {
                return [g(Ie, {
                  get when() {
                    return de(() => t() !== "mobile")() && $r(e.wallet)
                  },
                  get children() {
                    return g(uo, {
                      appearance: "secondary",
                      get leftIcon() {
                        return g(af, {})
                      },
                      onClick: b,
                      get children() {
                        return g(Ft, {
                          translationKey: "common.mobile",
                          children: "Mobile"
                        })
                      }
                    })
                  }
                }), g(Ie, {
                  get when() {
                    return de(() => t() !== "extension")() && da(e.wallet)
                  },
                  get children() {
                    return g(uo, {
                      appearance: "secondary",
                      get leftIcon() {
                        return g(of, {})
                      },
                      onClick: T,
                      get children() {
                        return g(Ft, {
                          translationKey: "common.browserExtension",
                          children: "Browser Extension"
                        })
                      }
                    })
                  }
                }), g(Ie, {
                  get when() {
                    return de(() => t() !== "desktop")() && fa(e.wallet)
                  },
                  get children() {
                    return g(uo, {
                      appearance: "secondary",
                      get leftIcon() {
                        return g(cf, {})
                      },
                      onClick: A,
                      get children() {
                        return g(Ft, {
                          translationKey: "common.desktop",
                          children: "Desktop"
                        })
                      }
                    })
                  }
                })]
              }
            })
          }
        })]
      }
    })
  },
  r4 = O.div``,
  i4 = O(rr)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  o4 = O(bn)`
    margin-bottom: 18px;
`,
  fo = O.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`,
  ho = In`
    margin-bottom: 12px;
`,
  go = O(fs)`
    text-align: center;
    margin-bottom: 4px;
`,
  wo = O(nn)`
    text-align: center;
    max-width: 352px;
    color: ${e=>e.theme.colors.text.secondary};
`,
  s4 = O.div`
    padding: 16px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`,
  a4 = {
    GET_A_WALLET: "https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1"
  },
  Ll = e => g(r4, {
    "data-tc-wallets-modal-info": "true",
    get children() {
      return [g(i4, {
        icon: "arrow",
        onClick: () => e.onBackClick()
      }), g(o4, {
        translationKey: "walletModal.infoModal.whatIsAWallet",
        children: "What is a wallet"
      }), g(vl, {
        get children() {
          return [g(fo, {
            get children() {
              return [g(wf, {
                class: ho
              }), g(go, {
                translationKey: "walletModal.infoModal.secureDigitalAssets",
                children: "Secure digital assets storage"
              }), g(wo, {
                translationKey: "walletModal.infoModal.walletProtects",
                children: "A wallet protects and manages your digital assets including TON, tokens and collectables."
              })]
            }
          }), g(fo, {
            get children() {
              return [g(mf, {
                class: ho
              }), g(go, {
                translationKey: "walletModal.infoModal.controlIdentity",
                children: "Control your Web3 identity"
              }), g(wo, {
                translationKey: "walletModal.infoModal.manageIdentity",
                children: "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem."
              })]
            }
          }), g(fo, {
            get children() {
              return [g(yf, {
                class: ho
              }), g(go, {
                translationKey: "walletModal.infoModal.effortlessCryptoTransactions",
                children: "Effortless crypto transactions"
              }), g(wo, {
                translationKey: "walletModal.infoModal.easilySend",
                children: "Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications."
              })]
            }
          }), g(s4, {
            get children() {
              return g($i, {
                get href() {
                  return a4.GET_A_WALLET
                },
                blank: !0,
                get children() {
                  return g(Rt, {
                    get rightIcon() {
                      return g(hf, {})
                    },
                    get children() {
                      return g(Ft, {
                        translationKey: "walletModal.infoModal.getAWallet",
                        children: "Get a Wallet"
                      })
                    }
                  })
                }
              })
            }
          })]
        }
      })]
    }
  }),
  l4 = O.div``,
  c4 = O.div`
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,
  u4 = O(bn)`
    max-width: 262px;
    margin: 0 auto 8px;
`,
  f4 = O(rr)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  d4 = O.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 0.5px solid ${e=>Xr(e.theme.colors.icon.secondary,.2)};
`,
  h4 = O(nr)`
    width: 36px;
    height: 36px;
    border-radius: 10px;
`,
  g4 = O($i)`
    margin-left: auto;
`,
  w4 = O($n)`
    margin-bottom: 18px;
    margin-top: 2px;
`,
  p4 = O(Zi)`
    margin-bottom: 16px;
`,
  ha = O(Vn)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,
  ga = O.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,
  m4 = O(bn)`
    margin-bottom: 2px;
    padding: 0 64px;
`,
  v4 = O(Vn)`
    margin-bottom: 20px;
    padding: 0 64px;
    min-height: 44px;
`,
  y4 = O.div`
    padding: 0 24px 24px;
`,
  x4 = e => [g(m4, {
    get children() {
      return e.walletInfo.name
    }
  }), g(v4, {
    translationKey: "walletModal.mobileConnectionModal.scanQR",
    get translationValues() {
      return {
        name: e.walletInfo.name
      }
    },
    get children() {
      return ["Scan the QR code below with your phone’s or ", de(() => e.walletInfo.name), "’s camera"]
    }
  }), g(y4, {
    get children() {
      return g(Gi, {
        get imageUrl() {
          return e.walletInfo.imageUrl
        },
        get sourceUrl() {
          return gt(e.universalLink, "none")
        },
        disableCopy: !0
      })
    }
  })],
  Ml = e => {
    const t = wt(),
      [n, r] = Be(!0),
      [i, o] = Be(!1),
      [c, a] = Be(!1),
      p = zt(xr),
      m = p.onStatusChange(() => {}, () => {
        a(!0)
      }),
      y = de(() => p.connect({
        universalLink: e.wallet.universalLink,
        bridgeUrl: e.wallet.bridgeUrl
      }, e.additionalRequest)),
      E = () => {
        Kt(tn(ut({}, e.wallet), {
          openMethod: "universal-link"
        })), ii(y(), {
          returnStrategy: et.returnStrategy,
          twaReturnUrl: et.twaReturnUrl,
          forceRedirect: !0
        })
      },
      b = () => {
        const U = y();
        if (kn(U)) return E();
        a(!1);
        const ae = !n();
        r(!1), oi(y(), e.wallet.deepLink, {
          returnStrategy: et.returnStrategy,
          forceRedirect: ae
        }, J => {
          Kt(tn(ut({}, e.wallet), {
            openMethod: J
          }))
        })
      },
      A = () => {
        a(!1), o(!0), Kt(tn(ut({}, e.wallet), {
          openMethod: "qrcode"
        }))
      },
      _ = () => {
        o(!1), Kt(tn(ut({}, e.wallet), {
          openMethod: "universal-link"
        }))
      },
      T = () => {
        i() ? _() : e.onBackClick()
      };
    return Yt(m), b(), g(l4, {
      "data-tc-wallets-modal-connection-mobile": "true",
      get children() {
        return [g(Ie, {
          get when() {
            return !e.backDisabled || i()
          },
          get children() {
            return g(f4, {
              icon: "arrow",
              onClick: T
            })
          }
        }), g(Ie, {
          get when() {
            return i()
          },
          get children() {
            return g(x4, {
              get universalLink() {
                return y()
              },
              get walletInfo() {
                return e.wallet
              }
            })
          }
        }), g(Ie, {
          get when() {
            return !i()
          },
          get children() {
            return [g(u4, {
              get children() {
                return e.wallet.name
              }
            }), g(c4, {
              get children() {
                return [g(Ie, {
                  get when() {
                    return c()
                  },
                  get children() {
                    return [g(p4, {
                      size: "s"
                    }), g(ha, {
                      translationKey: "walletModal.mobileConnectionModal.connectionDeclined",
                      children: "Connection declined"
                    }), g(ga, {
                      get children() {
                        return [g(Rt, {
                          get leftIcon() {
                            return g(Mr, {})
                          },
                          onClick: b,
                          get children() {
                            return g(Ft, {
                              translationKey: "common.retry",
                              children: "Retry"
                            })
                          }
                        }), g(Rt, {
                          get leftIcon() {
                            return g(Mo, {
                              get fill() {
                                return t.colors.accent
                              }
                            })
                          },
                          onClick: A,
                          get children() {
                            return g(Ft, {
                              translationKey: "walletModal.mobileConnectionModal.showQR",
                              children: "Show QR Code"
                            })
                          }
                        })]
                      }
                    })]
                  }
                }), g(Ie, {
                  get when() {
                    return !c()
                  },
                  get children() {
                    return [g(w4, {
                      size: "s"
                    }), g(ha, {
                      translationKey: "walletModal.mobileConnectionModal.continueIn",
                      get translationValues() {
                        return {
                          name: e.wallet.name
                        }
                      },
                      get children() {
                        return ["Continue in ", de(() => e.wallet.name), "…"]
                      }
                    }), g(ga, {
                      get children() {
                        return [g(Rt, {
                          get leftIcon() {
                            return g(Mr, {})
                          },
                          onClick: b,
                          get children() {
                            return g(Ft, {
                              translationKey: "common.retry",
                              children: "Retry"
                            })
                          }
                        }), g(Rt, {
                          get leftIcon() {
                            return g(Mo, {
                              get fill() {
                                return t.colors.accent
                              }
                            })
                          },
                          onClick: A,
                          get children() {
                            return g(Ft, {
                              translationKey: "walletModal.mobileConnectionModal.showQR",
                              children: "Show QR Code"
                            })
                          }
                        })]
                      }
                    })]
                  }
                })]
              }
            }), g(d4, {
              get children() {
                return [g(h4, {
                  get src() {
                    return e.wallet.imageUrl
                  }
                }), g(fs, {
                  get children() {
                    return e.wallet.name
                  }
                }), g(g4, {
                  get href() {
                    return e.wallet.aboutUrl
                  },
                  blank: !0,
                  get children() {
                    return g(Rt, {
                      get children() {
                        return g(Ft, {
                          translationKey: "common.get",
                          children: "GET"
                        })
                      }
                    })
                  }
                })]
              }
            })]
          }
        })]
      }
    })
  },
  Il = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  b4 = {
    m: "6px",
    s: "6px",
    none: "0"
  },
  C4 = O.ul`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: fit-content;
    max-width: 100%;
    min-width: 100%;
    height: fit-content;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 13px 24px;

    &&::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    > li {
        height: fit-content;
    }
`,
  wa = O.li`
    width: 82px;
    min-width: 82px;
    height: 124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 4px;

    text-align: center;
    cursor: pointer;

    transition: transform 0.1s ease-in-out;

    ${ti} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${ei} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
  E4 = O.div`
    width: 1px;
    margin: 0 10px;
    height: 24px;
    position: relative;
    top: 26px;

    background-color: ${e=>e.theme.colors.icon.secondary};
    opacity: 0.2;
`,
  pa = O.div`
    width: 60px;
    height: 60px;
    border-radius: ${e=>Il[e.theme.borderRadius]};
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${e=>e.theme.colors.background.tint};
    margin-bottom: 8px;
`,
  S4 = O(bn)`
    margin-top: 38px;
    margin-bottom: 4px;
    padding: 0 24px;
`,
  _4 = O(Vn)`
    margin-bottom: 24px;
    padding: 0 24px;
    min-height: 44px;
    max-width: ${e=>e.maxWidth}px;
    margin-left: ${e=>e.maxWidth?"auto":"0px"};
    margin-right: ${e=>e.maxWidth?"auto":"0px"};
`;
O(Rt)`
    display: block;
    margin: 0 auto;
`;
const A4 = O(Rt)`
    margin: 0 24px 24px;
    width: calc(100% - 48px);
    border-radius: ${e=>Il[e.theme.borderRadius]};
    padding: 14px 16px 14px 14px;
    background-color: ${e=>e.theme.colors.telegramButton};

    color: ${e=>e.theme.colors.constant.white};
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
`,
  k4 = O(nr)`
    background-color: transparent;
    border-radius: ${e=>b4[e.theme.borderRadius]};
    width: 24px;
    height: 24px;
`,
  ma = O(rr)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  T4 = O(bn)`
    margin-bottom: 2px;
    padding: 0 64px;
`,
  B4 = O(Vn)`
    margin-bottom: 20px;
    padding: 0 64px;
`,
  L4 = O.div`
    padding: 0 24px 24px;
`,
  M4 = e => [g(T4, {
    translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
    children: "Connect your wallet"
  }), g(B4, {
    translationKey: "walletModal.mobileUniversalModal.scan",
    children: "Scan with your mobile wallet"
  }), g(L4, {
    get children() {
      return g(Gi, {
        get imageUrl() {
          return ri.TON
        },
        get sourceUrl() {
          return gt(e.universalLink, "none")
        },
        disableCopy: !0
      })
    }
  })];

function Rl(e) {
  const t = new Set(e.filter(ji).map(n => n.bridgeUrl));
  return Array.from(t).map(n => ({
    bridgeUrl: n
  }))
}

function $l(e, t) {
  const n = new Set(e == null ? void 0 : e.map(i => i.bridgeUrl)),
    r = new Set(t == null ? void 0 : t.map(i => i.bridgeUrl));
  return n.size === r.size && [...n].every(i => r.has(i))
}
const va = Ge("<li></li>"),
  I4 = Ge('<div data-tc-wallets-modal-universal-mobile="true"></div>'),
  R4 = e => {
    const [t, n] = Be(!1), [r, i] = Be(!0), [o, c] = Be(null), a = et.connector, p = () => e.walletsList.filter(q => $r(q) && q.appName !== Ln), m = () => p().length > 7, y = de(() => Rl(e.walletsList), null, {
      equals: $l
    }), E = () => (o() || c(a.connect(y(), e.additionalRequest)), o());
    Kt({
      openMethod: "universal-link"
    });
    const [b, A] = Be(void 0), _ = () => lt(void 0, null, function*() {
      b() !== void 0 && clearTimeout(b()), yield us(E());
      const q = setTimeout(() => A(void 0), 1500);
      A(q)
    }), T = () => {
      const q = !r();
      i(!1), oi(E(), void 0, {
        returnStrategy: et.returnStrategy,
        forceRedirect: q
      }, te => {
        Kt({
          openMethod: te
        })
      })
    }, U = () => {
      c(null);
      const q = e.walletsList.find(X => X.appName === Ln);
      if (!q || !ji(q)) throw new It("@wallet bot not found in the wallets list");
      const te = a.connect({
          bridgeUrl: q.bridgeUrl,
          universalLink: q.universalLink
        }, e.additionalRequest),
        N = !r();
      i(!1), ii(te, {
        returnStrategy: et.returnStrategy,
        twaReturnUrl: et.twaReturnUrl,
        forceRedirect: N
      })
    }, ae = () => {
      n(!0), Kt({
        openMethod: "qrcode"
      })
    }, J = () => {
      n(!1), Kt({
        openMethod: "universal-link"
      })
    };
    return (() => {
      const q = I4.cloneNode(!0);
      return Ht(q, g(Ie, {
        get when() {
          return t()
        },
        get children() {
          return [g(ma, {
            icon: "arrow",
            onClick: J
          }), g(M4, {
            get universalLink() {
              return E()
            }
          })]
        }
      }), null), Ht(q, g(Ie, {
        get when() {
          return !t()
        },
        get children() {
          return [g(ma, {
            get icon() {
              return g(Mo, {})
            },
            onClick: ae
          }), g(S4, {
            translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
            children: "Connect your wallet"
          }), g(_4, {
            translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect",
            maxWidth: 342,
            children: "Open Wallet in Telegram or select your wallet to connect"
          }), g(A4, {
            get leftIcon() {
              return g(bf, {})
            },
            get rightIcon() {
              return g(k4, {
                get src() {
                  return ri.TG
                }
              })
            },
            onClick: U,
            scale: "s",
            get children() {
              return g(Ft, {
                translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegram",
                children: "Open Wallet in Telegram"
              })
            }
          }), g(C4, {
            get children() {
              return [g(Qr, {
                get each() {
                  return de(() => !!m())() ? p().slice(0, 4) : p()
                },
                children: te => (() => {
                  const N = va.cloneNode(!0);
                  return Ht(N, g(Ii, {
                    get icon() {
                      return te.imageUrl
                    },
                    get name() {
                      return te.name
                    },
                    onClick: () => e.onSelect(te)
                  })), N
                })()
              }), g(Ie, {
                get when() {
                  return m()
                },
                get children() {
                  const te = va.cloneNode(!0);
                  return Ht(te, g(pl, {
                    labelLine1: "View all",
                    labelLine2: "wallets",
                    get images() {
                      return p().slice(3, 7).map(N => N.imageUrl)
                    },
                    onClick: () => e.onSelectAllWallets()
                  })), te
                }
              }), g(E4, {
                children: " "
              }), g(wa, {
                onClick: T,
                get children() {
                  return [g(pa, {
                    get children() {
                      return g(O1, {})
                    }
                  }), g(nn, {
                    fontWeight: 590,
                    translationKey: "walletModal.mobileUniversalModal.openLink",
                    children: "Open Link"
                  })]
                }
              }), g(wa, {
                onClick: _,
                get children() {
                  return [g(pa, {
                    get children() {
                      return de(() => b() !== void 0)() ? g(Ef, {}) : g(wl, {})
                    }
                  }), g(nn, {
                    fontWeight: 590,
                    get translationKey() {
                      return b() !== void 0 ? "common.copied" : "common.copyLink"
                    },
                    get children() {
                      return b() !== void 0 ? "Copied" : "Copy Link"
                    }
                  })]
                }
              })]
            }
          })]
        }
      }), null), q
    })()
  },
  Ul = {
    m: "16px",
    s: "8px",
    none: "0"
  },
  $4 = {
    m: "8px",
    s: "4px",
    none: "0"
  },
  U4 = O.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`,
  P4 = O(Vn)`
    max-width: 320px;
    margin-top: 2px;
    margin-bottom: 20px;
`,
  W4 = O(Vn)`
    margin-bottom: 16px;
`,
  N4 = O(Gi)`
    margin-bottom: 24px;
`,
  F4 = O.ul`
    display: flex;
`;
O.div`
    display: flex;
    gap: 16px;
    width: 100%;
`;
O(Rt)`
    position: relative;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    padding: 0 16px;
    height: 56px;
    border-radius: ${e=>Ul[e.theme.borderRadius]};

    &:hover {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }

    &:active {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }
`;
O.ul`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin: 0;
    padding: 8px;
    width: 188px;
    transform: translateY(-16px);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>Ul[e.theme.borderRadius]};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
`;
O.li`
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    border-radius: ${e=>$4[e.theme.borderRadius]};

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`;
O(nr)`
    width: 24px;
    height: 24px;

    border-radius: 6px;
`;
O.div`
    margin-top: 23px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
O(nn)`
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 16px;
`;
const D4 = Ge("<li></li>"),
  O4 = e => {
    const [t, n] = Be(!1), r = et.connector, i = de(() => Rl(e.walletsList), null, {
      equals: $l
    });
    Kt({
      openMethod: "qrcode"
    });
    const o = de(() => r.connect(i(), e.additionalRequest));
    return g(U4, {
      onClick: () => n(!1),
      "data-tc-wallets-modal-universal-desktop": "true",
      get children() {
        return [g(bn, {
          translationKey: "walletModal.desktopUniversalModal.connectYourWallet",
          children: "Connect your wallet"
        }), g(P4, {
          translationKey: "walletModal.desktopUniversalModal.scan",
          children: "Scan with your mobile wallet"
        }), g(N4, {
          get sourceUrl() {
            return gt(o(), "none")
          },
          get disableCopy() {
            return t()
          },
          get imageUrl() {
            return ri.TON
          }
        }), g(W4, {
          translationKey: "walletModal.desktopUniversalModal.availableWallets",
          children: "Available wallets"
        }), g(F4, {
          get children() {
            return [g(Qr, {
              get each() {
                return e.walletsList.slice(0, 3)
              },
              children: c => (() => {
                const a = D4.cloneNode(!0);
                return Ht(a, g(ml, {
                  wallet: c,
                  onClick: () => e.onSelect(c)
                })), a
              })()
            }), g(pl, {
              labelLine1: "View all",
              labelLine2: "wallets",
              get images() {
                return e.walletsList.slice(3, 7).map(c => c.imageUrl)
              },
              onClick: () => e.onSelectAllWallets()
            })]
          }
        })]
      }
    })
  },
  j4 = () => {
    const {
      locale: e
    } = xn()[1];
    Nt(() => e(et.language)), Nt(() => {
      Ks() ? Ri() : (o(null), a("universal"), m(!1))
    });
    const t = zt(xr),
      n = zt(qn),
      [r] = ac(() => n.getWallets()),
      [i, o] = Be(null),
      [c, a] = Be("universal"),
      [p, m] = Be(!1),
      y = de(() => {
        if (r.state !== "ready") return null;
        let J = ps(r(), et.walletsListConfiguration);
        const q = J.filter(Nn),
          te = J.filter(M => !Nn(M));
        J = (q || []).concat(te);
        const N = et.preferredWalletAppName,
          X = J.find(M => Pn(M, N)),
          H = J.filter(M => Pn(M, N)).length >= 2;
        N && X && !H && (J = [tn(ut({}, X), {
          isPreferred: !0
        })].concat(J.filter(M => !Pn(M, N))));
        const D = J.find(M => Pn(M, Ln));
        return D && (J = [D].concat(J.filter(M => !Pn(M, Ln)))), J
      }),
      E = () => {
        var J;
        return ((J = et.connectRequestParameters) == null ? void 0 : J.state) === "loading"
      },
      b = de(() => {
        var J;
        if (!E()) return (J = et.connectRequestParameters) == null ? void 0 : J.value
      }),
      A = J => {
        n.closeModal(J)
      },
      _ = t.onStatusChange(J => {
        J && A("wallet-selected")
      }),
      T = () => {
        a("all-wallets")
      },
      U = () => {
        a("universal")
      },
      ae = () => {
        o(null)
      };
    return Yt(() => {
      o(null), m(!1)
    }), Yt(_), g(Al, {
      get opened() {
        return Ks()
      },
      get enableAndroidBackHandler() {
        return et.enableAndroidBackHandler
      },
      onClose: () => A("action-cancelled"),
      onClickQuestion: () => m(J => !J),
      "data-tc-wallets-modal-container": "true",
      get children() {
        return [g(Ie, {
          get when() {
            return p()
          },
          get children() {
            return g(Ll, {
              onBackClick: () => m(!1)
            })
          }
        }), g(Ie, {
          get when() {
            return !p()
          },
          get children() {
            return [g(Ie, {
              get when() {
                return E() || !y()
              },
              get children() {
                return [g(kl, {
                  translationKey: "walletModal.loading",
                  children: "Wallets list is loading"
                }), g(Tl, {
                  get children() {
                    return g($n, {
                      size: "m"
                    })
                  }
                })]
              }
            }), g(Ie, {
              get when() {
                return de(() => !E())() && y()
              },
              get children() {
                return g(Jr, {
                  get children() {
                    return [g(jt, {
                      get when() {
                        return i()
                      },
                      get children() {
                        return g(gr, {
                          get component() {
                            return mr() ? Ml : Bl
                          },
                          get wallet() {
                            return i()
                          },
                          get additionalRequest() {
                            return b()
                          },
                          onBackClick: ae
                        })
                      }
                    }), g(jt, {
                      get when() {
                        return c() === "universal"
                      },
                      get children() {
                        return g(gr, {
                          get component() {
                            return mr() ? R4 : O4
                          },
                          onSelect: o,
                          get walletsList() {
                            return y()
                          },
                          get additionalRequest() {
                            return b()
                          },
                          onSelectAllWallets: T
                        })
                      }
                    }), g(jt, {
                      get when() {
                        return c() === "all-wallets"
                      },
                      get children() {
                        return g(Od, {
                          get walletsList() {
                            return y()
                          },
                          onBack: U,
                          onSelect: o
                        })
                      }
                    })]
                  }
                })
              }
            })]
          }
        })]
      }
    })
  },
  H4 = O.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
`,
  K4 = O(bn)`
    margin-top: 16px;
`,
  V4 = O(nn)`
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 250px;

    color: ${e=>e.theme.colors.text.secondary};
`,
  q4 = O(Rt)`
    min-width: 112px;
    margin-top: 32px;
`,
  G4 = O($n)`
    height: 16px;
    width: 16px;
`,
  ya = O(Rt)`
    margin-top: 32px;
`,
  ms = e => {
    const t = ni(e),
      n = zt(qn),
      [r, i] = Be(!0),
      [o, c] = Be(!1);
    Nt(() => {
      const y = An();
      c(!!y && "sent" in y && y.sent)
    });
    let a;
    n != null && n.wallet && "universalLink" in n.wallet && (n.wallet.openMethod === "universal-link" || kn(n.wallet.universalLink) && pn()) && (a = n.wallet.universalLink);
    let p;
    n != null && n.wallet && "deepLink" in n.wallet && (n.wallet.openMethod === "custom-deeplink" || kn(n.wallet.deepLink) && pn()) && (p = n.wallet.deepLink);
    const m = () => {
      const y = An(),
        E = "returnStrategy" in y ? y.returnStrategy : et.returnStrategy,
        b = !r();
      i(!1), kn(a) ? ii(a, {
        returnStrategy: E,
        twaReturnUrl: "twaReturnUrl" in y ? y.twaReturnUrl : et.twaReturnUrl,
        forceRedirect: b
      }) : oi(a, p, {
        returnStrategy: E,
        forceRedirect: b
      }, () => {})
    };
    return g(H4, gn(t, {
      get children() {
        return [de(() => e.icon), g(K4, {
          get translationKey() {
            return e.headerTranslationKey
          },
          get translationValues() {
            return e.headerTranslationValues
          }
        }), g(V4, {
          get translationKey() {
            return e.textTranslationKey
          },
          get translationValues() {
            return e.textTranslationValues
          }
        }), g(Ie, {
          get when() {
            return !o() && (e.showButton === "open-wallet" && a || e.showButton !== "open-wallet")
          },
          get children() {
            return g(q4, {
              disabled: !0,
              "data-tc-connect-button-loading": "true",
              get children() {
                return g(G4, {})
              }
            })
          }
        }), g(Ie, {
          get when() {
            return o()
          },
          get children() {
            return [g(Ie, {
              get when() {
                return e.showButton !== "open-wallet"
              },
              get children() {
                return g(ya, {
                  onClick: () => e.onClose(),
                  get children() {
                    return g(Ft, {
                      translationKey: "common.close",
                      children: "Close"
                    })
                  }
                })
              }
            }), g(Ie, {
              get when() {
                return e.showButton === "open-wallet" && a
              },
              get children() {
                return g(ya, {
                  onClick: m,
                  get children() {
                    return g(Ft, {
                      translationKey: "common.openWallet",
                      children: "Open wallet"
                    })
                  }
                })
              }
            })]
          }
        })]
      }
    }))
  },
  Z4 = e => {
    const t = zt(qn),
      [n] = xn(),
      r = () => t.wallet && "name" in t.wallet ? t.wallet.name : n("common.yourWallet", {}, "Your wallet");
    return g(ms, {
      headerTranslationKey: "actionModal.confirmTransaction.header",
      get headerTranslationValues() {
        return {
          name: r()
        }
      },
      textTranslationKey: "actionModal.confirmTransaction.text",
      get icon() {
        return g($n, {
          size: "m"
        })
      },
      onClose: () => e.onClose(),
      showButton: "open-wallet",
      "data-tc-confirm-modal": "true"
    })
  },
  Y4 = e => g(ms, {
    headerTranslationKey: "actionModal.transactionCanceled.header",
    textTranslationKey: "actionModal.transactionCanceled.text",
    get icon() {
      return g(Zi, {
        size: "m"
      })
    },
    onClose: () => e.onClose(),
    "data-tc-transaction-canceled-modal": "true"
  }),
  z4 = e => g(ms, {
    headerTranslationKey: "actionModal.transactionSent.header",
    textTranslationKey: "actionModal.transactionSent.text",
    get icon() {
      return g(ds, {
        size: "m"
      })
    },
    onClose: () => e.onClose(),
    "data-tc-transaction-sent-modal": "true"
  }),
  Q4 = () => g(ul, {
    get opened() {
      var e;
      return de(() => An() !== null)() && ((e = An()) == null ? void 0 : e.openModal) === !0
    },
    get enableAndroidBackHandler() {
      return et.enableAndroidBackHandler
    },
    onClose: () => cr(null),
    "data-tc-actions-modal-container": "true",
    get children() {
      return g(Jr, {
        get children() {
          return [g(jt, {
            get when() {
              return An().name === "transaction-sent"
            },
            get children() {
              return g(z4, {
                onClose: () => cr(null)
              })
            }
          }), g(jt, {
            get when() {
              return An().name === "transaction-canceled"
            },
            get children() {
              return g(Y4, {
                onClose: () => cr(null)
              })
            }
          }), g(jt, {
            get when() {
              return An().name === "confirm-transaction"
            },
            get children() {
              return g(Z4, {
                onClose: () => cr(null)
              })
            }
          })]
        }
      })
    }
  }),
  J4 = () => {
    const {
      locale: e
    } = xn()[1];
    Nt(() => e(et.language)), Nt(() => {
      qs() && Ri()
    });
    const t = zt(xr),
      n = zt(qn),
      [r, i] = Be(!1),
      o = () => {
        var m;
        return ((m = et.connectRequestParameters) == null ? void 0 : m.state) === "loading"
      },
      c = de(() => {
        var m;
        if (!o()) return (m = et.connectRequestParameters) == null ? void 0 : m.value
      }),
      a = m => {
        n.closeSingleWalletModal(m)
      },
      p = t.onStatusChange(m => {
        m && a("wallet-selected")
      });
    return Yt(p), Yt(() => {
      i(!1)
    }), g(Al, {
      get opened() {
        return qs()
      },
      get enableAndroidBackHandler() {
        return et.enableAndroidBackHandler
      },
      onClose: () => a("action-cancelled"),
      onClickQuestion: () => i(m => !m),
      "data-tc-wallets-modal-container": "true",
      get children() {
        return [g(Ie, {
          get when() {
            return r()
          },
          get children() {
            return g(Ll, {
              onBackClick: () => i(!1)
            })
          }
        }), g(Ie, {
          get when() {
            return !r()
          },
          get children() {
            return [g(Ie, {
              get when() {
                return o()
              },
              get children() {
                return [g(kl, {
                  translationKey: "walletModal.loading",
                  children: "Wallets list is loading"
                }), g(Tl, {
                  get children() {
                    return g($n, {
                      size: "m"
                    })
                  }
                })]
              }
            }), g(Ie, {
              get when() {
                return !o()
              },
              get children() {
                return g(gr, {
                  get component() {
                    return mr() ? Ml : Bl
                  },
                  get wallet() {
                    return au()
                  },
                  get additionalRequest() {
                    return c()
                  },
                  onBackClick: () => {},
                  backDisabled: !0
                })
              }
            })]
          }
        })]
      }
    })
  },
  X4 = e => {
    const t = _1(Su, et.language);
    return tu(), eu(), g(hl.Provider, {
      value: t,
      get children() {
        return g(qn.Provider, {
          get value() {
            return e.tonConnectUI
          },
          get children() {
            return g(xr.Provider, {
              get value() {
                return et.connector
              },
              get children() {
                return [g(qc, {}), g(Kc, {
                  theme: Iu,
                  get children() {
                    return [g(Ie, {
                      get when() {
                        return et.buttonRootId
                      },
                      get children() {
                        return g(Va, {
                          get mount() {
                            return document.getElementById(et.buttonRootId)
                          },
                          get children() {
                            return g(Md, {})
                          }
                        })
                      }
                    }), g(gr, {
                      component: _n,
                      get children() {
                        return [g(j4, {}), g(J4, {}), g(Q4, {})]
                      }
                    })]
                  }
                })]
              }
            })
          }
        })
      }
    })
  },
  en = {
    openWalletsModal: () => void setTimeout(() => Hs({
      status: "opened",
      closeReason: null
    })),
    closeWalletsModal: e => void setTimeout(() => Hs({
      status: "closed",
      closeReason: e
    })),
    openSingleWalletModal: e => {
      setTimeout(() => Vs({
        status: "opened",
        closeReason: null,
        walletInfo: e
      }))
    },
    closeSingleWalletModal: e => void setTimeout(() => Vs({
      status: "closed",
      closeReason: e
    })),
    setAction: e => void setTimeout(() => cr(e)),
    clearAction: () => void setTimeout(() => cr(null)),
    getSelectedWalletInfo: () => lu(),
    removeSelectedWalletInfo: () => Kt(null),
    renderApp: (e, t) => _c(() => g(X4, {
      tonConnectUI: t
    }), document.getElementById(e))
  };
class e2 {
  constructor(t) {
    ke(this, "connector"), ke(this, "setConnectRequestParametersCallback"), ke(this, "consumers", []), ke(this, "tracker"), ke(this, "state", _o()), this.connector = t.connector, this.tracker = t.tracker, this.setConnectRequestParametersCallback = t.setConnectRequestParametersCallback, Nt(() => {
      const n = _o();
      this.state = n, this.consumers.forEach(r => r(n))
    })
  }
  open() {
    return lt(this, null, function*() {
      this.tracker.trackConnectionStarted();
      const n = (yield this.connector.getWallets()).find(zr);
      return n ? this.connectEmbeddedWallet(n) : this.openWalletsModal()
    })
  }
  close(t = "action-cancelled") {
    t === "action-cancelled" && this.tracker.trackConnectionError("Connection was cancelled"), en.closeWalletsModal(t)
  }
  onStateChange(t) {
    return this.consumers.push(t), () => {
      this.consumers = this.consumers.filter(n => n !== t)
    }
  }
  connectEmbeddedWallet(t) {
    const n = i => {
        Kt(t), this.connector.connect({
          jsBridgeKey: t.jsBridgeKey
        }, i)
      },
      r = et.connectRequestParameters;
    (r == null ? void 0 : r.state) === "loading" ? this.setConnectRequestParametersCallback(n): n(r == null ? void 0 : r.value)
  }
  openWalletsModal() {
    return lt(this, null, function*() {
      return pn() && ls(), en.openWalletsModal(), new Promise(t => {
        const n = this.onStateChange(r => {
          const {
            status: i
          } = r;
          i === "opened" && (n(), t())
        })
      })
    })
  }
}
class t2 {
  constructor(t) {
    ke(this, "connector"), ke(this, "consumers", []), this.connector = t.connector, Nt(() => {
      const n = An();
      this.consumers.forEach(r => r(n))
    })
  }
  onStateChange(t) {
    return this.consumers.push(t), () => {
      this.consumers = this.consumers.filter(n => n !== t)
    }
  }
}
class n2 {
  constructor(t) {
    ke(this, "connector"), ke(this, "setConnectRequestParametersCallback"), ke(this, "consumers", []), ke(this, "tracker"), ke(this, "state", Ai()), this.connector = t.connector, this.tracker = t.tracker, this.setConnectRequestParametersCallback = t.setConnectRequestParametersCallback, Nt(() => {
      const n = Ai();
      this.state = n, this.consumers.forEach(r => r(n))
    })
  }
  open(t) {
    return lt(this, null, function*() {
      this.tracker.trackConnectionStarted();
      const n = yield this.connector.getWallets(), r = ps(n, et.walletsListConfiguration), i = r.find(zr);
      if (!!i) return this.connectEmbeddedWallet(i);
      const a = r.filter(ji).find(y => Pn(y, t));
      if (!!a) return this.openSingleWalletModal(a);
      const m = `Trying to open modal window with unknown wallet "${t}".`;
      throw this.tracker.trackConnectionError(m), new It(m)
    })
  }
  close(t = "action-cancelled") {
    t === "action-cancelled" && this.tracker.trackConnectionError("Connection was cancelled"), en.closeSingleWalletModal("action-cancelled")
  }
  onStateChange(t) {
    return this.consumers.push(t), () => {
      this.consumers = this.consumers.filter(n => n !== t)
    }
  }
  connectEmbeddedWallet(t) {
    const n = i => {
        Kt(t), this.connector.connect({
          jsBridgeKey: t.jsBridgeKey
        }, i)
      },
      r = et.connectRequestParameters;
    (r == null ? void 0 : r.state) === "loading" ? this.setConnectRequestParametersCallback(n): n(r == null ? void 0 : r.value)
  }
  openSingleWalletModal(t) {
    return lt(this, null, function*() {
      return pn() && ls(), en.openSingleWalletModal(t), new Promise(n => {
        const r = this.onStateChange(i => {
          const {
            status: o
          } = i;
          o === "opened" && (r(), n())
        })
      })
    })
  }
}
class r2 {
  constructor(t) {
    ke(this, "eventPrefix", "ton-connect-ui-"), ke(this, "tonConnectUiVersion"), ke(this, "tonConnectSdkVersion", null), ke(this, "eventDispatcher");
    var n;
    this.eventDispatcher = (n = t == null ? void 0 : t.eventDispatcher) != null ? n : new zo, this.tonConnectUiVersion = t.tonConnectUiVersion, this.init().catch()
  }
  get version() {
    return Kn({
      ton_connect_sdk_lib: this.tonConnectSdkVersion,
      ton_connect_ui_lib: this.tonConnectUiVersion
    })
  }
  init() {
    return lt(this, null, function*() {
      try {
        yield this.setRequestVersionHandler(), this.tonConnectSdkVersion = yield this.requestTonConnectSdkVersion()
      } catch {}
    })
  }
  setRequestVersionHandler() {
    return lt(this, null, function*() {
      yield this.eventDispatcher.addEventListener("ton-connect-ui-request-version", () => lt(this, null, function*() {
        yield this.eventDispatcher.dispatchEvent("ton-connect-ui-response-version", No(this.tonConnectUiVersion))
      }))
    })
  }
  requestTonConnectSdkVersion() {
    return lt(this, null, function*() {
      return new Promise((t, n) => lt(this, null, function*() {
        try {
          yield this.eventDispatcher.addEventListener("ton-connect-response-version", r => {
            t(r.detail.version)
          }, {
            once: !0
          }), yield this.eventDispatcher.dispatchEvent("ton-connect-request-version", Wo())
        } catch (r) {
          n(r)
        }
      }))
    })
  }
  dispatchUserActionEvent(t) {
    var n;
    try {
      (n = this.eventDispatcher) == null || n.dispatchEvent(`${this.eventPrefix}${t.type}`, t).catch()
    } catch {}
  }
  trackConnectionStarted(...t) {
    try {
      const n = Fo(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionCompleted(...t) {
    try {
      const n = Do(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionError(...t) {
    try {
      const n = Oo(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringStarted(...t) {
    try {
      const n = jo(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringCompleted(...t) {
    try {
      const n = Ho(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringError(...t) {
    try {
      const n = Ko(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackDisconnection(...t) {
    try {
      const n = Yo(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSentForSignature(...t) {
    try {
      const n = qo(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSigned(...t) {
    try {
      const n = Go(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSigningFailed(...t) {
    try {
      const n = Zo(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
}
const i2 = "2.0.9";
class o2 {
  constructor(t) {
    if (ke(this, "walletInfoStorage", new ou), ke(this, "preferredWalletStorage", new su), ke(this, "tracker"), ke(this, "walletInfo", null), ke(this, "systemThemeChangeUnsubscribe", null), ke(this, "actionsConfiguration"), ke(this, "walletsList"), ke(this, "connectRequestParametersCallback"), ke(this, "connector"), ke(this, "modal"), ke(this, "singleWalletModal"), ke(this, "transactionModal"), ke(this, "connectionRestored", Promise.resolve(!1)), t && "connector" in t && t.connector) this.connector = t.connector;
    else if (t && "manifestUrl" in t && t.manifestUrl) this.connector = new Dn({
      manifestUrl: t.manifestUrl,
      eventDispatcher: t == null ? void 0 : t.eventDispatcher
    });
    else throw new It("You have to specify a `manifestUrl` or a `connector` in the options.");
    this.tracker = new r2({
      eventDispatcher: t == null ? void 0 : t.eventDispatcher,
      tonConnectUiVersion: i2
    }), this.modal = new e2({
      connector: this.connector,
      tracker: this.tracker,
      setConnectRequestParametersCallback: i => {
        this.connectRequestParametersCallback = i
      }
    }), this.singleWalletModal = new n2({
      connector: this.connector,
      tracker: this.tracker,
      setConnectRequestParametersCallback: i => {
        this.connectRequestParametersCallback = i
      }
    }), this.transactionModal = new t2({
      connector: this.connector
    }), this.walletsList = this.getWallets(), this.walletsList.then(i => za(Id(i.map(o => o.imageUrl))));
    const n = this.normalizeWidgetRoot(t == null ? void 0 : t.widgetRootId);
    this.subscribeToWalletChange(), (t == null ? void 0 : t.restoreConnection) !== !1 && (this.connectionRestored = nu(() => lt(this, null, function*() {
      return this.tracker.trackConnectionRestoringStarted(), yield this.connector.restoreConnection(), this.connector.connected ? this.tracker.trackConnectionRestoringCompleted(this.wallet) : (this.tracker.trackConnectionRestoringError("Connection was not restored"), this.walletInfoStorage.removeWalletInfo()), this.connector.connected
    }))), this.uiOptions = Fn(t, {
      uiPreferences: {
        theme: "SYSTEM"
      }
    });
    const r = this.preferredWalletStorage.getPreferredWalletAppName();
    di({
      connector: this.connector,
      preferredWalletAppName: r
    }), en.renderApp(n, this)
  }
  static getWallets() {
    return Dn.getWallets()
  }
  get connected() {
    return this.connector.connected
  }
  get account() {
    return this.connector.account
  }
  get wallet() {
    return this.connector.wallet ? ut(ut({}, this.connector.wallet), this.walletInfo) : null
  }
  set uiOptions(t) {
    var n, r, i, o, c;
    this.checkButtonRootExist(t.buttonRootId), this.actionsConfiguration = t.actionsConfiguration, (n = t.uiPreferences) != null && n.theme ? ((r = t.uiPreferences) == null ? void 0 : r.theme) !== "SYSTEM" ? ((i = this.systemThemeChangeUnsubscribe) == null || i.call(this), so(t.uiPreferences.theme, t.uiPreferences.colorsSet)) : (so(zc(), t.uiPreferences.colorsSet), this.systemThemeChangeUnsubscribe || (this.systemThemeChangeUnsubscribe = Qc(so))) : (o = t.uiPreferences) != null && o.colorsSet && $u(t.uiPreferences.colorsSet), (c = t.uiPreferences) != null && c.borderRadius && Ru(t.uiPreferences.borderRadius), di(a => {
      var p, m;
      const y = Fn(ut(ut(ut(ut({}, t.language && {
        language: t.language
      }), !!((p = t.actionsConfiguration) != null && p.returnStrategy) && {
        returnStrategy: t.actionsConfiguration.returnStrategy
      }), !!((m = t.actionsConfiguration) != null && m.twaReturnUrl) && {
        twaReturnUrl: t.actionsConfiguration.twaReturnUrl
      }), !!t.walletsListConfiguration && {
        walletsListConfiguration: t.walletsListConfiguration
      }), wr(a));
      return t.buttonRootId !== void 0 && (y.buttonRootId = t.buttonRootId), t.enableAndroidBackHandler !== void 0 && (y.enableAndroidBackHandler = t.enableAndroidBackHandler), y
    })
  }
  setConnectRequestParameters(t) {
    var n;
    di({
      connectRequestParameters: t
    }), ((t == null ? void 0 : t.state) === "ready" || !t) && ((n = this.connectRequestParametersCallback) == null || n.call(this, t == null ? void 0 : t.value))
  }
  getWallets() {
    return lt(this, null, function*() {
      return this.connector.getWallets()
    })
  }
  onStatusChange(t, n) {
    return this.connector.onStatusChange(r => lt(this, null, function*() {
      if (r) {
        const i = yield this.getSelectedWalletInfo(r);
        t(ut(ut({}, r), i || this.walletInfoStorage.getWalletInfo()))
      } else t(r)
    }), n)
  }
  openModal() {
    return lt(this, null, function*() {
      return this.modal.open()
    })
  }
  closeModal(t) {
    this.modal.close(t)
  }
  onModalStateChange(t) {
    return this.modal.onStateChange(t)
  }
  get modalState() {
    return this.modal.state
  }
  openSingleWalletModal(t) {
    return lt(this, null, function*() {
      return this.singleWalletModal.open(t)
    })
  }
  closeSingleWalletModal(t) {
    this.singleWalletModal.close(t)
  }
  onSingleWalletModalStateChange(t) {
    return this.singleWalletModal.onStateChange(t)
  }
  get singleWalletModalState() {
    return this.singleWalletModal.state
  }
  connectWallet() {
    return lt(this, null, function*() {
      const n = (yield this.getWallets()).find(zr);
      return n ? yield this.connectEmbeddedWallet(n): yield this.connectExternalWallet()
    })
  }
  disconnect() {
    return this.tracker.trackDisconnection(this.wallet, "dapp"), en.clearAction(), en.removeSelectedWalletInfo(), this.walletInfoStorage.removeWalletInfo(), this.connector.disconnect()
  }
  sendTransaction(t, n) {
    return lt(this, null, function*() {
      if (this.tracker.trackTransactionSentForSignature(this.wallet, t), !this.connected) throw this.tracker.trackTransactionSigningFailed(this.wallet, t, "Wallet was not connected"), new It("Connect wallet to send a transaction.");
      pn() && ls();
      const {
        notifications: r,
        modals: i,
        returnStrategy: o,
        twaReturnUrl: c,
        skipRedirectToWallet: a
      } = this.getModalsAndNotificationsConfiguration(n);
      en.setAction({
        name: "confirm-transaction",
        showNotification: r.includes("before"),
        openModal: i.includes("before"),
        sent: !1
      });
      const p = () => {
          m.signal.aborted || (en.setAction({
            name: "confirm-transaction",
            showNotification: r.includes("before"),
            openModal: i.includes("before"),
            sent: !0
          }), this.walletInfo && "universalLink" in this.walletInfo && (this.walletInfo.openMethod === "universal-link" || this.walletInfo.openMethod === "custom-deeplink") && (kn(this.walletInfo.universalLink) ? ii(this.walletInfo.universalLink, {
            returnStrategy: o,
            twaReturnUrl: c || et.twaReturnUrl,
            forceRedirect: !1
          }) : oi(this.walletInfo.universalLink, this.walletInfo.deepLink, {
            returnStrategy: o,
            forceRedirect: !1
          }, () => {})))
        },
        m = new AbortController,
        y = this.onTransactionModalStateChange(E => {
          E != null && E.openModal || (y(), E || m.abort())
        });
      try {
        const E = yield this.waitForSendTransaction({
          transaction: t,
          signal: m.signal
        }, p);
        return this.tracker.trackTransactionSigned(this.wallet, t, E), en.setAction({
          name: "transaction-sent",
          showNotification: r.includes("success"),
          openModal: i.includes("success")
        }), E
      } catch (E) {
        throw en.setAction({
          name: "transaction-canceled",
          showNotification: r.includes("error"),
          openModal: i.includes("error")
        }), E instanceof Ce ? E : (console.error(E), new It("Unhandled error:" + E))
      } finally {
        y()
      }
    })
  }
  connectEmbeddedWallet(t) {
    return lt(this, null, function*() {
      const n = i => {
          Kt(t), this.connector.connect({
            jsBridgeKey: t.jsBridgeKey
          }, i)
        },
        r = et.connectRequestParameters;
      return (r == null ? void 0 : r.state) === "loading" ? this.connectRequestParametersCallback = n : n(r == null ? void 0 : r.value), yield this.waitForWalletConnection({
        ignoreErrors: !1
      })
    })
  }
  connectExternalWallet() {
    return lt(this, null, function*() {
      const t = new AbortController;
      en.openWalletsModal();
      const n = this.onModalStateChange(r => {
        const {
          status: i,
          closeReason: o
        } = r;
        i !== "opened" && (n(), o === "action-cancelled" && t.abort())
      });
      return yield this.waitForWalletConnection({
        ignoreErrors: !0,
        signal: t.signal
      })
    })
  }
  waitForWalletConnection(t) {
    return lt(this, null, function*() {
      return new Promise((n, r) => {
        this.tracker.trackConnectionStarted();
        const {
          ignoreErrors: i = !1,
          signal: o = null
        } = t;
        if (o && o.aborted) return this.tracker.trackConnectionError("Connection was cancelled"), r(new It("Wallet was not connected"));
        const c = m => lt(this, null, function*() {
            if (m) this.tracker.trackConnectionCompleted(m), p(), n(m);
            else {
              if (this.tracker.trackConnectionError("Connection was cancelled"), i) return;
              p(), r(new It("Wallet was not connected"))
            }
          }),
          a = m => {
            this.tracker.trackConnectionError(m.message), !i && (p(), r(m))
          },
          p = this.onStatusChange(m => c(m), m => a(m));
        o && o.addEventListener("abort", () => {
          p(), r(new It("Wallet was not connected"))
        }, {
          once: !0
        })
      })
    })
  }
  waitForSendTransaction(t, n) {
    return lt(this, null, function*() {
      return new Promise((r, i) => {
        const {
          transaction: o,
          signal: c
        } = t;
        if (c.aborted) return this.tracker.trackTransactionSigningFailed(this.wallet, o, "Transaction was cancelled"), i(new It("Transaction was not sent"));
        const a = y => lt(this, null, function*() {
            r(y)
          }),
          p = y => {
            i(y)
          },
          m = () => {
            this.tracker.trackTransactionSigningFailed(this.wallet, o, "Transaction was cancelled"), i(new It("Transaction was not sent"))
          };
        c.addEventListener("abort", m, {
          once: !0
        }), this.connector.sendTransaction(o, {
          onRequestSent: n,
          signal: c
        }).then(y => (c.removeEventListener("abort", m), a(y))).catch(y => (c.removeEventListener("abort", m), p(y)))
      })
    })
  }
  onTransactionModalStateChange(t) {
    return this.transactionModal.onStateChange(t)
  }
  subscribeToWalletChange() {
    this.connector.onStatusChange(t => lt(this, null, function*() {
      var n;
      t ? (yield this.updateWalletInfo(t), this.setPreferredWalletAppName(((n = this.walletInfo) == null ? void 0 : n.appName) || t.device.appName)) : this.walletInfoStorage.removeWalletInfo()
    }))
  }
  setPreferredWalletAppName(t) {
    this.preferredWalletStorage.setPreferredWalletAppName(t), di({
      preferredWalletAppName: t
    })
  }
  getSelectedWalletInfo(t) {
    return lt(this, null, function*() {
      let n = en.getSelectedWalletInfo();
      if (!n) return null;
      let r;
      if ("name" in n) r = n;
      else {
        const o = ps(yield this.walletsList, et.walletsListConfiguration).find(c => Pn(c, t.device.appName));
        if (!o) throw new It(`Cannot find WalletInfo for the '${t.device.appName}' wallet`);
        r = ut(ut({}, o), n)
      }
      return r
    })
  }
  updateWalletInfo(t) {
    return lt(this, null, function*() {
      const n = yield this.getSelectedWalletInfo(t);
      if (n) {
        this.walletInfo = n, this.walletInfoStorage.setWalletInfo(n);
        return
      }
      const r = this.walletInfoStorage.getWalletInfo();
      if (r) {
        this.walletInfo = r;
        return
      }
      this.walletInfo = (yield this.walletsList).find(i => Pn(i, t.device.appName)) || null
    })
  }
  normalizeWidgetRoot(t) {
    if (!t || !document.getElementById(t)) {
      t = "tc-widget-root";
      const n = document.createElement("div");
      n.id = t, document.body.appendChild(n)
    }
    return t
  }
  checkButtonRootExist(t) {
    if (t != null && !document.getElementById(t)) throw new It(`${t} element not found in the document.`)
  }
  getModalsAndNotificationsConfiguration(t) {
    var n, r, i, o, c, a;
    const p = ["before", "success", "error"];
    let m = p;
    (n = this.actionsConfiguration) != null && n.notifications && ((r = this.actionsConfiguration) == null ? void 0 : r.notifications) !== "all" && (m = this.actionsConfiguration.notifications), t != null && t.notifications && (t.notifications === "all" ? m = p : m = t.notifications);
    let y = ["before"];
    (i = this.actionsConfiguration) != null && i.modals && (this.actionsConfiguration.modals === "all" ? y = p : y = this.actionsConfiguration.modals), t != null && t.modals && (t.modals === "all" ? y = p : y = t.modals);
    const E = (t == null ? void 0 : t.returnStrategy) || ((o = this.actionsConfiguration) == null ? void 0 : o.returnStrategy) || "back",
      b = (t == null ? void 0 : t.twaReturnUrl) || ((c = this.actionsConfiguration) == null ? void 0 : c.twaReturnUrl);
    let A = (t == null ? void 0 : t.skipRedirectToWallet) || ((a = this.actionsConfiguration) == null ? void 0 : a.skipRedirectToWallet) || "ios";
    return pn() && (A = "never"), {
      notifications: m,
      modals: y,
      returnStrategy: E,
      twaReturnUrl: b,
      skipRedirectToWallet: A
    }
  }
}
const l2 = Object.freeze(Object.defineProperty({
  __proto__: null,
  BadRequestError: Zr,
  BrowserEventDispatcher: zo,
  get CHAIN() {
    return Pr
  },
  get CONNECT_EVENT_ERROR_CODES() {
    return Sn
  },
  get CONNECT_ITEM_ERROR_CODES() {
    return po
  },
  FetchWalletsError: Di,
  ParseHexError: Nr,
  get SEND_TRANSACTION_ERROR_CODES() {
    return zn
  },
  THEME: Ct,
  TonConnect: Dn,
  TonConnectError: Ce,
  TonConnectUI: o2,
  TonConnectUIError: It,
  UnknownAppError: Yr,
  UnknownError: Mn,
  UserRejectsError: Gr,
  WalletAlreadyConnectedError: Ni,
  WalletNotConnectedError: Wr,
  WalletNotInjectedError: Fi,
  WalletsListManager: yi,
  WrongAddressError: Qn,
  createConnectionCompletedEvent: Do,
  createConnectionErrorEvent: Oo,
  createConnectionRestoringCompletedEvent: Ho,
  createConnectionRestoringErrorEvent: Ko,
  createConnectionRestoringStartedEvent: jo,
  createConnectionStartedEvent: Fo,
  createDisconnectionEvent: Yo,
  createRequestVersionEvent: Wo,
  createResponseVersionEvent: No,
  createTransactionSentForSignatureEvent: qo,
  createTransactionSignedEvent: Go,
  createTransactionSigningFailedEvent: Zo,
  createVersionInfo: Kn,
  encodeTelegramUrlParameters: Po,
  isTelegramUrl: kn,
  isWalletInfoCurrentlyEmbedded: zr,
  isWalletInfoCurrentlyInjected: Nn,
  isWalletInfoInjectable: Ta,
  isWalletInfoRemote: ji,
  toUserFriendlyAddress: Qo
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  Pr as C, ar as b, xa as c, Fl as g, l2 as i, Xl as n
};