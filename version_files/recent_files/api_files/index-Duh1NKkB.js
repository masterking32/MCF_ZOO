var ha = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function jr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function $l(e) {
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
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r]
      }
    })
  }), n
}
var ga = {
  exports: {}
};
(function(e) {
  (function(t, n) {
    e.exports ? e.exports = n() : (t.nacl || (t.nacl = {}), t.nacl.util = n())
  })(ha, function() {
    var t = {};

    function n(r) {
      if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(r)) throw new TypeError("invalid encoding")
    }
    return t.decodeUTF8 = function(r) {
      if (typeof r != "string") throw new TypeError("expected string");
      var o, i = unescape(encodeURIComponent(r)),
        a = new Uint8Array(i.length);
      for (o = 0; o < i.length; o++) a[o] = i.charCodeAt(o);
      return a
    }, t.encodeUTF8 = function(r) {
      var o, i = [];
      for (o = 0; o < r.length; o++) i.push(String.fromCharCode(r[o]));
      return decodeURIComponent(escape(i.join("")))
    }, typeof atob > "u" ? typeof Buffer.from < "u" ? (t.encodeBase64 = function(r) {
      return Buffer.from(r).toString("base64")
    }, t.decodeBase64 = function(r) {
      return n(r), new Uint8Array(Array.prototype.slice.call(Buffer.from(r, "base64"), 0))
    }) : (t.encodeBase64 = function(r) {
      return new Buffer(r).toString("base64")
    }, t.decodeBase64 = function(r) {
      return n(r), new Uint8Array(Array.prototype.slice.call(new Buffer(r, "base64"), 0))
    }) : (t.encodeBase64 = function(r) {
      var o, i = [],
        a = r.length;
      for (o = 0; o < a; o++) i.push(String.fromCharCode(r[o]));
      return btoa(i.join(""))
    }, t.decodeBase64 = function(r) {
      n(r);
      var o, i = atob(r),
        a = new Uint8Array(i.length);
      for (o = 0; o < i.length; o++) a[o] = i.charCodeAt(o);
      return a
    }), t
  })
})(ga);
var Rl = ga.exports;
const Mr = jr(Rl);

function Bl(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var va = {
  exports: {}
};
const Il = {},
  Pl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Il
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Wl = $l(Pl);
(function(e) {
  (function(t) {
    var n = function(c) {
        var f, u = new Float64Array(16);
        if (c)
          for (f = 0; f < c.length; f++) u[f] = c[f];
        return u
      },
      r = function() {
        throw new Error("no PRNG")
      },
      o = new Uint8Array(16),
      i = new Uint8Array(32);
    i[0] = 9;
    var a = n(),
      l = n([1]),
      h = n([56129, 1]),
      v = n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
      m = n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
      y = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
      w = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
      C = n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

    function b(c, f, u, s) {
      c[f] = u >> 24 & 255, c[f + 1] = u >> 16 & 255, c[f + 2] = u >> 8 & 255, c[f + 3] = u & 255, c[f + 4] = s >> 24 & 255, c[f + 5] = s >> 16 & 255, c[f + 6] = s >> 8 & 255, c[f + 7] = s & 255
    }

    function S(c, f, u, s, g) {
      var _, A = 0;
      for (_ = 0; _ < g; _++) A |= c[f + _] ^ u[s + _];
      return (1 & A - 1 >>> 8) - 1
    }

    function M(c, f, u, s) {
      return S(c, f, u, s, 16)
    }

    function ee(c, f, u, s) {
      return S(c, f, u, s, 32)
    }

    function V(c, f, u, s) {
      for (var g = s[0] & 255 | (s[1] & 255) << 8 | (s[2] & 255) << 16 | (s[3] & 255) << 24, _ = u[0] & 255 | (u[1] & 255) << 8 | (u[2] & 255) << 16 | (u[3] & 255) << 24, A = u[4] & 255 | (u[5] & 255) << 8 | (u[6] & 255) << 16 | (u[7] & 255) << 24, j = u[8] & 255 | (u[9] & 255) << 8 | (u[10] & 255) << 16 | (u[11] & 255) << 24, X = u[12] & 255 | (u[13] & 255) << 8 | (u[14] & 255) << 16 | (u[15] & 255) << 24, de = s[4] & 255 | (s[5] & 255) << 8 | (s[6] & 255) << 16 | (s[7] & 255) << 24, re = f[0] & 255 | (f[1] & 255) << 8 | (f[2] & 255) << 16 | (f[3] & 255) << 24, ze = f[4] & 255 | (f[5] & 255) << 8 | (f[6] & 255) << 16 | (f[7] & 255) << 24, ae = f[8] & 255 | (f[9] & 255) << 8 | (f[10] & 255) << 16 | (f[11] & 255) << 24, Se = f[12] & 255 | (f[13] & 255) << 8 | (f[14] & 255) << 16 | (f[15] & 255) << 24, Ae = s[8] & 255 | (s[9] & 255) << 8 | (s[10] & 255) << 16 | (s[11] & 255) << 24, Be = u[16] & 255 | (u[17] & 255) << 8 | (u[18] & 255) << 16 | (u[19] & 255) << 24, $e = u[20] & 255 | (u[21] & 255) << 8 | (u[22] & 255) << 16 | (u[23] & 255) << 24, Te = u[24] & 255 | (u[25] & 255) << 8 | (u[26] & 255) << 16 | (u[27] & 255) << 24, Me = u[28] & 255 | (u[29] & 255) << 8 | (u[30] & 255) << 16 | (u[31] & 255) << 24, Le = s[12] & 255 | (s[13] & 255) << 8 | (s[14] & 255) << 16 | (s[15] & 255) << 24, le = g, he = _, oe = A, ce = j, ue = X, ne = de, T = re, L = ze, Z = ae, O = Se, H = Ae, Y = Be, be = $e, Ie = Te, We = Me, Pe = Le, p, He = 0; He < 20; He += 2) p = le + be | 0, ue ^= p << 7 | p >>> 25, p = ue + le | 0, Z ^= p << 9 | p >>> 23, p = Z + ue | 0, be ^= p << 13 | p >>> 19, p = be + Z | 0, le ^= p << 18 | p >>> 14, p = ne + he | 0, O ^= p << 7 | p >>> 25, p = O + ne | 0, Ie ^= p << 9 | p >>> 23, p = Ie + O | 0, he ^= p << 13 | p >>> 19, p = he + Ie | 0, ne ^= p << 18 | p >>> 14, p = H + T | 0, We ^= p << 7 | p >>> 25, p = We + H | 0, oe ^= p << 9 | p >>> 23, p = oe + We | 0, T ^= p << 13 | p >>> 19, p = T + oe | 0, H ^= p << 18 | p >>> 14, p = Pe + Y | 0, ce ^= p << 7 | p >>> 25, p = ce + Pe | 0, L ^= p << 9 | p >>> 23, p = L + ce | 0, Y ^= p << 13 | p >>> 19, p = Y + L | 0, Pe ^= p << 18 | p >>> 14, p = le + ce | 0, he ^= p << 7 | p >>> 25, p = he + le | 0, oe ^= p << 9 | p >>> 23, p = oe + he | 0, ce ^= p << 13 | p >>> 19, p = ce + oe | 0, le ^= p << 18 | p >>> 14, p = ne + ue | 0, T ^= p << 7 | p >>> 25, p = T + ne | 0, L ^= p << 9 | p >>> 23, p = L + T | 0, ue ^= p << 13 | p >>> 19, p = ue + L | 0, ne ^= p << 18 | p >>> 14, p = H + O | 0, Y ^= p << 7 | p >>> 25, p = Y + H | 0, Z ^= p << 9 | p >>> 23, p = Z + Y | 0, O ^= p << 13 | p >>> 19, p = O + Z | 0, H ^= p << 18 | p >>> 14, p = Pe + We | 0, be ^= p << 7 | p >>> 25, p = be + Pe | 0, Ie ^= p << 9 | p >>> 23, p = Ie + be | 0, We ^= p << 13 | p >>> 19, p = We + Ie | 0, Pe ^= p << 18 | p >>> 14;
      le = le + g | 0, he = he + _ | 0, oe = oe + A | 0, ce = ce + j | 0, ue = ue + X | 0, ne = ne + de | 0, T = T + re | 0, L = L + ze | 0, Z = Z + ae | 0, O = O + Se | 0, H = H + Ae | 0, Y = Y + Be | 0, be = be + $e | 0, Ie = Ie + Te | 0, We = We + Me | 0, Pe = Pe + Le | 0, c[0] = le >>> 0 & 255, c[1] = le >>> 8 & 255, c[2] = le >>> 16 & 255, c[3] = le >>> 24 & 255, c[4] = he >>> 0 & 255, c[5] = he >>> 8 & 255, c[6] = he >>> 16 & 255, c[7] = he >>> 24 & 255, c[8] = oe >>> 0 & 255, c[9] = oe >>> 8 & 255, c[10] = oe >>> 16 & 255, c[11] = oe >>> 24 & 255, c[12] = ce >>> 0 & 255, c[13] = ce >>> 8 & 255, c[14] = ce >>> 16 & 255, c[15] = ce >>> 24 & 255, c[16] = ue >>> 0 & 255, c[17] = ue >>> 8 & 255, c[18] = ue >>> 16 & 255, c[19] = ue >>> 24 & 255, c[20] = ne >>> 0 & 255, c[21] = ne >>> 8 & 255, c[22] = ne >>> 16 & 255, c[23] = ne >>> 24 & 255, c[24] = T >>> 0 & 255, c[25] = T >>> 8 & 255, c[26] = T >>> 16 & 255, c[27] = T >>> 24 & 255, c[28] = L >>> 0 & 255, c[29] = L >>> 8 & 255, c[30] = L >>> 16 & 255, c[31] = L >>> 24 & 255, c[32] = Z >>> 0 & 255, c[33] = Z >>> 8 & 255, c[34] = Z >>> 16 & 255, c[35] = Z >>> 24 & 255, c[36] = O >>> 0 & 255, c[37] = O >>> 8 & 255, c[38] = O >>> 16 & 255, c[39] = O >>> 24 & 255, c[40] = H >>> 0 & 255, c[41] = H >>> 8 & 255, c[42] = H >>> 16 & 255, c[43] = H >>> 24 & 255, c[44] = Y >>> 0 & 255, c[45] = Y >>> 8 & 255, c[46] = Y >>> 16 & 255, c[47] = Y >>> 24 & 255, c[48] = be >>> 0 & 255, c[49] = be >>> 8 & 255, c[50] = be >>> 16 & 255, c[51] = be >>> 24 & 255, c[52] = Ie >>> 0 & 255, c[53] = Ie >>> 8 & 255, c[54] = Ie >>> 16 & 255, c[55] = Ie >>> 24 & 255, c[56] = We >>> 0 & 255, c[57] = We >>> 8 & 255, c[58] = We >>> 16 & 255, c[59] = We >>> 24 & 255, c[60] = Pe >>> 0 & 255, c[61] = Pe >>> 8 & 255, c[62] = Pe >>> 16 & 255, c[63] = Pe >>> 24 & 255
    }

    function D(c, f, u, s) {
      for (var g = s[0] & 255 | (s[1] & 255) << 8 | (s[2] & 255) << 16 | (s[3] & 255) << 24, _ = u[0] & 255 | (u[1] & 255) << 8 | (u[2] & 255) << 16 | (u[3] & 255) << 24, A = u[4] & 255 | (u[5] & 255) << 8 | (u[6] & 255) << 16 | (u[7] & 255) << 24, j = u[8] & 255 | (u[9] & 255) << 8 | (u[10] & 255) << 16 | (u[11] & 255) << 24, X = u[12] & 255 | (u[13] & 255) << 8 | (u[14] & 255) << 16 | (u[15] & 255) << 24, de = s[4] & 255 | (s[5] & 255) << 8 | (s[6] & 255) << 16 | (s[7] & 255) << 24, re = f[0] & 255 | (f[1] & 255) << 8 | (f[2] & 255) << 16 | (f[3] & 255) << 24, ze = f[4] & 255 | (f[5] & 255) << 8 | (f[6] & 255) << 16 | (f[7] & 255) << 24, ae = f[8] & 255 | (f[9] & 255) << 8 | (f[10] & 255) << 16 | (f[11] & 255) << 24, Se = f[12] & 255 | (f[13] & 255) << 8 | (f[14] & 255) << 16 | (f[15] & 255) << 24, Ae = s[8] & 255 | (s[9] & 255) << 8 | (s[10] & 255) << 16 | (s[11] & 255) << 24, Be = u[16] & 255 | (u[17] & 255) << 8 | (u[18] & 255) << 16 | (u[19] & 255) << 24, $e = u[20] & 255 | (u[21] & 255) << 8 | (u[22] & 255) << 16 | (u[23] & 255) << 24, Te = u[24] & 255 | (u[25] & 255) << 8 | (u[26] & 255) << 16 | (u[27] & 255) << 24, Me = u[28] & 255 | (u[29] & 255) << 8 | (u[30] & 255) << 16 | (u[31] & 255) << 24, Le = s[12] & 255 | (s[13] & 255) << 8 | (s[14] & 255) << 16 | (s[15] & 255) << 24, le = g, he = _, oe = A, ce = j, ue = X, ne = de, T = re, L = ze, Z = ae, O = Se, H = Ae, Y = Be, be = $e, Ie = Te, We = Me, Pe = Le, p, He = 0; He < 20; He += 2) p = le + be | 0, ue ^= p << 7 | p >>> 25, p = ue + le | 0, Z ^= p << 9 | p >>> 23, p = Z + ue | 0, be ^= p << 13 | p >>> 19, p = be + Z | 0, le ^= p << 18 | p >>> 14, p = ne + he | 0, O ^= p << 7 | p >>> 25, p = O + ne | 0, Ie ^= p << 9 | p >>> 23, p = Ie + O | 0, he ^= p << 13 | p >>> 19, p = he + Ie | 0, ne ^= p << 18 | p >>> 14, p = H + T | 0, We ^= p << 7 | p >>> 25, p = We + H | 0, oe ^= p << 9 | p >>> 23, p = oe + We | 0, T ^= p << 13 | p >>> 19, p = T + oe | 0, H ^= p << 18 | p >>> 14, p = Pe + Y | 0, ce ^= p << 7 | p >>> 25, p = ce + Pe | 0, L ^= p << 9 | p >>> 23, p = L + ce | 0, Y ^= p << 13 | p >>> 19, p = Y + L | 0, Pe ^= p << 18 | p >>> 14, p = le + ce | 0, he ^= p << 7 | p >>> 25, p = he + le | 0, oe ^= p << 9 | p >>> 23, p = oe + he | 0, ce ^= p << 13 | p >>> 19, p = ce + oe | 0, le ^= p << 18 | p >>> 14, p = ne + ue | 0, T ^= p << 7 | p >>> 25, p = T + ne | 0, L ^= p << 9 | p >>> 23, p = L + T | 0, ue ^= p << 13 | p >>> 19, p = ue + L | 0, ne ^= p << 18 | p >>> 14, p = H + O | 0, Y ^= p << 7 | p >>> 25, p = Y + H | 0, Z ^= p << 9 | p >>> 23, p = Z + Y | 0, O ^= p << 13 | p >>> 19, p = O + Z | 0, H ^= p << 18 | p >>> 14, p = Pe + We | 0, be ^= p << 7 | p >>> 25, p = be + Pe | 0, Ie ^= p << 9 | p >>> 23, p = Ie + be | 0, We ^= p << 13 | p >>> 19, p = We + Ie | 0, Pe ^= p << 18 | p >>> 14;
      c[0] = le >>> 0 & 255, c[1] = le >>> 8 & 255, c[2] = le >>> 16 & 255, c[3] = le >>> 24 & 255, c[4] = ne >>> 0 & 255, c[5] = ne >>> 8 & 255, c[6] = ne >>> 16 & 255, c[7] = ne >>> 24 & 255, c[8] = H >>> 0 & 255, c[9] = H >>> 8 & 255, c[10] = H >>> 16 & 255, c[11] = H >>> 24 & 255, c[12] = Pe >>> 0 & 255, c[13] = Pe >>> 8 & 255, c[14] = Pe >>> 16 & 255, c[15] = Pe >>> 24 & 255, c[16] = T >>> 0 & 255, c[17] = T >>> 8 & 255, c[18] = T >>> 16 & 255, c[19] = T >>> 24 & 255, c[20] = L >>> 0 & 255, c[21] = L >>> 8 & 255, c[22] = L >>> 16 & 255, c[23] = L >>> 24 & 255, c[24] = Z >>> 0 & 255, c[25] = Z >>> 8 & 255, c[26] = Z >>> 16 & 255, c[27] = Z >>> 24 & 255, c[28] = O >>> 0 & 255, c[29] = O >>> 8 & 255, c[30] = O >>> 16 & 255, c[31] = O >>> 24 & 255
    }

    function z(c, f, u, s) {
      V(c, f, u, s)
    }

    function B(c, f, u, s) {
      D(c, f, u, s)
    }
    var q = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

    function P(c, f, u, s, g, _, A) {
      var j = new Uint8Array(16),
        X = new Uint8Array(64),
        de, re;
      for (re = 0; re < 16; re++) j[re] = 0;
      for (re = 0; re < 8; re++) j[re] = _[re];
      for (; g >= 64;) {
        for (z(X, j, A, q), re = 0; re < 64; re++) c[f + re] = u[s + re] ^ X[re];
        for (de = 1, re = 8; re < 16; re++) de = de + (j[re] & 255) | 0, j[re] = de & 255, de >>>= 8;
        g -= 64, f += 64, s += 64
      }
      if (g > 0)
        for (z(X, j, A, q), re = 0; re < g; re++) c[f + re] = u[s + re] ^ X[re];
      return 0
    }

    function R(c, f, u, s, g) {
      var _ = new Uint8Array(16),
        A = new Uint8Array(64),
        j, X;
      for (X = 0; X < 16; X++) _[X] = 0;
      for (X = 0; X < 8; X++) _[X] = s[X];
      for (; u >= 64;) {
        for (z(A, _, g, q), X = 0; X < 64; X++) c[f + X] = A[X];
        for (j = 1, X = 8; X < 16; X++) j = j + (_[X] & 255) | 0, _[X] = j & 255, j >>>= 8;
        u -= 64, f += 64
      }
      if (u > 0)
        for (z(A, _, g, q), X = 0; X < u; X++) c[f + X] = A[X];
      return 0
    }

    function E(c, f, u, s, g) {
      var _ = new Uint8Array(32);
      B(_, s, g, q);
      for (var A = new Uint8Array(8), j = 0; j < 8; j++) A[j] = s[j + 16];
      return R(c, f, u, A, _)
    }

    function W(c, f, u, s, g, _, A) {
      var j = new Uint8Array(32);
      B(j, _, A, q);
      for (var X = new Uint8Array(8), de = 0; de < 8; de++) X[de] = _[de + 16];
      return P(c, f, u, s, g, X, j)
    }
    var k = function(c) {
      this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0;
      var f, u, s, g, _, A, j, X;
      f = c[0] & 255 | (c[1] & 255) << 8, this.r[0] = f & 8191, u = c[2] & 255 | (c[3] & 255) << 8, this.r[1] = (f >>> 13 | u << 3) & 8191, s = c[4] & 255 | (c[5] & 255) << 8, this.r[2] = (u >>> 10 | s << 6) & 7939, g = c[6] & 255 | (c[7] & 255) << 8, this.r[3] = (s >>> 7 | g << 9) & 8191, _ = c[8] & 255 | (c[9] & 255) << 8, this.r[4] = (g >>> 4 | _ << 12) & 255, this.r[5] = _ >>> 1 & 8190, A = c[10] & 255 | (c[11] & 255) << 8, this.r[6] = (_ >>> 14 | A << 2) & 8191, j = c[12] & 255 | (c[13] & 255) << 8, this.r[7] = (A >>> 11 | j << 5) & 8065, X = c[14] & 255 | (c[15] & 255) << 8, this.r[8] = (j >>> 8 | X << 8) & 8191, this.r[9] = X >>> 5 & 127, this.pad[0] = c[16] & 255 | (c[17] & 255) << 8, this.pad[1] = c[18] & 255 | (c[19] & 255) << 8, this.pad[2] = c[20] & 255 | (c[21] & 255) << 8, this.pad[3] = c[22] & 255 | (c[23] & 255) << 8, this.pad[4] = c[24] & 255 | (c[25] & 255) << 8, this.pad[5] = c[26] & 255 | (c[27] & 255) << 8, this.pad[6] = c[28] & 255 | (c[29] & 255) << 8, this.pad[7] = c[30] & 255 | (c[31] & 255) << 8
    };
    k.prototype.blocks = function(c, f, u) {
      for (var s = this.fin ? 0 : 2048, g, _, A, j, X, de, re, ze, ae, Se, Ae, Be, $e, Te, Me, Le, le, he, oe, ce = this.h[0], ue = this.h[1], ne = this.h[2], T = this.h[3], L = this.h[4], Z = this.h[5], O = this.h[6], H = this.h[7], Y = this.h[8], be = this.h[9], Ie = this.r[0], We = this.r[1], Pe = this.r[2], p = this.r[3], He = this.r[4], Ye = this.r[5], Qe = this.r[6], De = this.r[7], qe = this.r[8], Ze = this.r[9]; u >= 16;) g = c[f + 0] & 255 | (c[f + 1] & 255) << 8, ce += g & 8191, _ = c[f + 2] & 255 | (c[f + 3] & 255) << 8, ue += (g >>> 13 | _ << 3) & 8191, A = c[f + 4] & 255 | (c[f + 5] & 255) << 8, ne += (_ >>> 10 | A << 6) & 8191, j = c[f + 6] & 255 | (c[f + 7] & 255) << 8, T += (A >>> 7 | j << 9) & 8191, X = c[f + 8] & 255 | (c[f + 9] & 255) << 8, L += (j >>> 4 | X << 12) & 8191, Z += X >>> 1 & 8191, de = c[f + 10] & 255 | (c[f + 11] & 255) << 8, O += (X >>> 14 | de << 2) & 8191, re = c[f + 12] & 255 | (c[f + 13] & 255) << 8, H += (de >>> 11 | re << 5) & 8191, ze = c[f + 14] & 255 | (c[f + 15] & 255) << 8, Y += (re >>> 8 | ze << 8) & 8191, be += ze >>> 5 | s, ae = 0, Se = ae, Se += ce * Ie, Se += ue * (5 * Ze), Se += ne * (5 * qe), Se += T * (5 * De), Se += L * (5 * Qe), ae = Se >>> 13, Se &= 8191, Se += Z * (5 * Ye), Se += O * (5 * He), Se += H * (5 * p), Se += Y * (5 * Pe), Se += be * (5 * We), ae += Se >>> 13, Se &= 8191, Ae = ae, Ae += ce * We, Ae += ue * Ie, Ae += ne * (5 * Ze), Ae += T * (5 * qe), Ae += L * (5 * De), ae = Ae >>> 13, Ae &= 8191, Ae += Z * (5 * Qe), Ae += O * (5 * Ye), Ae += H * (5 * He), Ae += Y * (5 * p), Ae += be * (5 * Pe), ae += Ae >>> 13, Ae &= 8191, Be = ae, Be += ce * Pe, Be += ue * We, Be += ne * Ie, Be += T * (5 * Ze), Be += L * (5 * qe), ae = Be >>> 13, Be &= 8191, Be += Z * (5 * De), Be += O * (5 * Qe), Be += H * (5 * Ye), Be += Y * (5 * He), Be += be * (5 * p), ae += Be >>> 13, Be &= 8191, $e = ae, $e += ce * p, $e += ue * Pe, $e += ne * We, $e += T * Ie, $e += L * (5 * Ze), ae = $e >>> 13, $e &= 8191, $e += Z * (5 * qe), $e += O * (5 * De), $e += H * (5 * Qe), $e += Y * (5 * Ye), $e += be * (5 * He), ae += $e >>> 13, $e &= 8191, Te = ae, Te += ce * He, Te += ue * p, Te += ne * Pe, Te += T * We, Te += L * Ie, ae = Te >>> 13, Te &= 8191, Te += Z * (5 * Ze), Te += O * (5 * qe), Te += H * (5 * De), Te += Y * (5 * Qe), Te += be * (5 * Ye), ae += Te >>> 13, Te &= 8191, Me = ae, Me += ce * Ye, Me += ue * He, Me += ne * p, Me += T * Pe, Me += L * We, ae = Me >>> 13, Me &= 8191, Me += Z * Ie, Me += O * (5 * Ze), Me += H * (5 * qe), Me += Y * (5 * De), Me += be * (5 * Qe), ae += Me >>> 13, Me &= 8191, Le = ae, Le += ce * Qe, Le += ue * Ye, Le += ne * He, Le += T * p, Le += L * Pe, ae = Le >>> 13, Le &= 8191, Le += Z * We, Le += O * Ie, Le += H * (5 * Ze), Le += Y * (5 * qe), Le += be * (5 * De), ae += Le >>> 13, Le &= 8191, le = ae, le += ce * De, le += ue * Qe, le += ne * Ye, le += T * He, le += L * p, ae = le >>> 13, le &= 8191, le += Z * Pe, le += O * We, le += H * Ie, le += Y * (5 * Ze), le += be * (5 * qe), ae += le >>> 13, le &= 8191, he = ae, he += ce * qe, he += ue * De, he += ne * Qe, he += T * Ye, he += L * He, ae = he >>> 13, he &= 8191, he += Z * p, he += O * Pe, he += H * We, he += Y * Ie, he += be * (5 * Ze), ae += he >>> 13, he &= 8191, oe = ae, oe += ce * Ze, oe += ue * qe, oe += ne * De, oe += T * Qe, oe += L * Ye, ae = oe >>> 13, oe &= 8191, oe += Z * He, oe += O * p, oe += H * Pe, oe += Y * We, oe += be * Ie, ae += oe >>> 13, oe &= 8191, ae = (ae << 2) + ae | 0, ae = ae + Se | 0, Se = ae & 8191, ae = ae >>> 13, Ae += ae, ce = Se, ue = Ae, ne = Be, T = $e, L = Te, Z = Me, O = Le, H = le, Y = he, be = oe, f += 16, u -= 16;
      this.h[0] = ce, this.h[1] = ue, this.h[2] = ne, this.h[3] = T, this.h[4] = L, this.h[5] = Z, this.h[6] = O, this.h[7] = H, this.h[8] = Y, this.h[9] = be
    }, k.prototype.finish = function(c, f) {
      var u = new Uint16Array(10),
        s, g, _, A;
      if (this.leftover) {
        for (A = this.leftover, this.buffer[A++] = 1; A < 16; A++) this.buffer[A] = 0;
        this.fin = 1, this.blocks(this.buffer, 0, 16)
      }
      for (s = this.h[1] >>> 13, this.h[1] &= 8191, A = 2; A < 10; A++) this.h[A] += s, s = this.h[A] >>> 13, this.h[A] &= 8191;
      for (this.h[0] += s * 5, s = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += s, s = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += s, u[0] = this.h[0] + 5, s = u[0] >>> 13, u[0] &= 8191, A = 1; A < 10; A++) u[A] = this.h[A] + s, s = u[A] >>> 13, u[A] &= 8191;
      for (u[9] -= 8192, g = (s ^ 1) - 1, A = 0; A < 10; A++) u[A] &= g;
      for (g = ~g, A = 0; A < 10; A++) this.h[A] = this.h[A] & g | u[A];
      for (this.h[0] = (this.h[0] | this.h[1] << 13) & 65535, this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535, this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535, this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535, this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535, this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535, this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535, this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535, _ = this.h[0] + this.pad[0], this.h[0] = _ & 65535, A = 1; A < 8; A++) _ = (this.h[A] + this.pad[A] | 0) + (_ >>> 16) | 0, this.h[A] = _ & 65535;
      c[f + 0] = this.h[0] >>> 0 & 255, c[f + 1] = this.h[0] >>> 8 & 255, c[f + 2] = this.h[1] >>> 0 & 255, c[f + 3] = this.h[1] >>> 8 & 255, c[f + 4] = this.h[2] >>> 0 & 255, c[f + 5] = this.h[2] >>> 8 & 255, c[f + 6] = this.h[3] >>> 0 & 255, c[f + 7] = this.h[3] >>> 8 & 255, c[f + 8] = this.h[4] >>> 0 & 255, c[f + 9] = this.h[4] >>> 8 & 255, c[f + 10] = this.h[5] >>> 0 & 255, c[f + 11] = this.h[5] >>> 8 & 255, c[f + 12] = this.h[6] >>> 0 & 255, c[f + 13] = this.h[6] >>> 8 & 255, c[f + 14] = this.h[7] >>> 0 & 255, c[f + 15] = this.h[7] >>> 8 & 255
    }, k.prototype.update = function(c, f, u) {
      var s, g;
      if (this.leftover) {
        for (g = 16 - this.leftover, g > u && (g = u), s = 0; s < g; s++) this.buffer[this.leftover + s] = c[f + s];
        if (u -= g, f += g, this.leftover += g, this.leftover < 16) return;
        this.blocks(this.buffer, 0, 16), this.leftover = 0
      }
      if (u >= 16 && (g = u - u % 16, this.blocks(c, f, g), f += g, u -= g), u) {
        for (s = 0; s < u; s++) this.buffer[this.leftover + s] = c[f + s];
        this.leftover += u
      }
    };

    function x(c, f, u, s, g, _) {
      var A = new k(_);
      return A.update(u, s, g), A.finish(c, f), 0
    }

    function J(c, f, u, s, g, _) {
      var A = new Uint8Array(16);
      return x(A, 0, u, s, g, _), M(c, f, A, 0)
    }

    function G(c, f, u, s, g) {
      var _;
      if (u < 32) return -1;
      for (W(c, 0, f, 0, u, s, g), x(c, 16, c, 32, u - 32, c), _ = 0; _ < 16; _++) c[_] = 0;
      return 0
    }

    function Q(c, f, u, s, g) {
      var _, A = new Uint8Array(32);
      if (u < 32 || (E(A, 0, 32, s, g), J(f, 16, f, 32, u - 32, A) !== 0)) return -1;
      for (W(c, 0, f, 0, u, s, g), _ = 0; _ < 32; _++) c[_] = 0;
      return 0
    }

    function me(c, f) {
      var u;
      for (u = 0; u < 16; u++) c[u] = f[u] | 0
    }

    function Ee(c) {
      var f, u, s = 1;
      for (f = 0; f < 16; f++) u = c[f] + s + 65535, s = Math.floor(u / 65536), c[f] = u - s * 65536;
      c[0] += s - 1 + 37 * (s - 1)
    }

    function Fe(c, f, u) {
      for (var s, g = ~(u - 1), _ = 0; _ < 16; _++) s = g & (c[_] ^ f[_]), c[_] ^= s, f[_] ^= s
    }

    function Xe(c, f) {
      var u, s, g, _ = n(),
        A = n();
      for (u = 0; u < 16; u++) A[u] = f[u];
      for (Ee(A), Ee(A), Ee(A), s = 0; s < 2; s++) {
        for (_[0] = A[0] - 65517, u = 1; u < 15; u++) _[u] = A[u] - 65535 - (_[u - 1] >> 16 & 1), _[u - 1] &= 65535;
        _[15] = A[15] - 32767 - (_[14] >> 16 & 1), g = _[15] >> 16 & 1, _[14] &= 65535, Fe(A, _, 1 - g)
      }
      for (u = 0; u < 16; u++) c[2 * u] = A[u] & 255, c[2 * u + 1] = A[u] >> 8
    }

    function ft(c, f) {
      var u = new Uint8Array(32),
        s = new Uint8Array(32);
      return Xe(u, c), Xe(s, f), ee(u, 0, s, 0)
    }

    function It(c) {
      var f = new Uint8Array(32);
      return Xe(f, c), f[0] & 1
    }

    function Ct(c, f) {
      var u;
      for (u = 0; u < 16; u++) c[u] = f[2 * u] + (f[2 * u + 1] << 8);
      c[15] &= 32767
    }

    function st(c, f, u) {
      for (var s = 0; s < 16; s++) c[s] = f[s] + u[s]
    }

    function pt(c, f, u) {
      for (var s = 0; s < 16; s++) c[s] = f[s] - u[s]
    }

    function Re(c, f, u) {
      var s, g, _ = 0,
        A = 0,
        j = 0,
        X = 0,
        de = 0,
        re = 0,
        ze = 0,
        ae = 0,
        Se = 0,
        Ae = 0,
        Be = 0,
        $e = 0,
        Te = 0,
        Me = 0,
        Le = 0,
        le = 0,
        he = 0,
        oe = 0,
        ce = 0,
        ue = 0,
        ne = 0,
        T = 0,
        L = 0,
        Z = 0,
        O = 0,
        H = 0,
        Y = 0,
        be = 0,
        Ie = 0,
        We = 0,
        Pe = 0,
        p = u[0],
        He = u[1],
        Ye = u[2],
        Qe = u[3],
        De = u[4],
        qe = u[5],
        Ze = u[6],
        yt = u[7],
        rt = u[8],
        vt = u[9],
        mt = u[10],
        wt = u[11],
        _t = u[12],
        Wt = u[13],
        Ut = u[14],
        Nt = u[15];
      s = f[0], _ += s * p, A += s * He, j += s * Ye, X += s * Qe, de += s * De, re += s * qe, ze += s * Ze, ae += s * yt, Se += s * rt, Ae += s * vt, Be += s * mt, $e += s * wt, Te += s * _t, Me += s * Wt, Le += s * Ut, le += s * Nt, s = f[1], A += s * p, j += s * He, X += s * Ye, de += s * Qe, re += s * De, ze += s * qe, ae += s * Ze, Se += s * yt, Ae += s * rt, Be += s * vt, $e += s * mt, Te += s * wt, Me += s * _t, Le += s * Wt, le += s * Ut, he += s * Nt, s = f[2], j += s * p, X += s * He, de += s * Ye, re += s * Qe, ze += s * De, ae += s * qe, Se += s * Ze, Ae += s * yt, Be += s * rt, $e += s * vt, Te += s * mt, Me += s * wt, Le += s * _t, le += s * Wt, he += s * Ut, oe += s * Nt, s = f[3], X += s * p, de += s * He, re += s * Ye, ze += s * Qe, ae += s * De, Se += s * qe, Ae += s * Ze, Be += s * yt, $e += s * rt, Te += s * vt, Me += s * mt, Le += s * wt, le += s * _t, he += s * Wt, oe += s * Ut, ce += s * Nt, s = f[4], de += s * p, re += s * He, ze += s * Ye, ae += s * Qe, Se += s * De, Ae += s * qe, Be += s * Ze, $e += s * yt, Te += s * rt, Me += s * vt, Le += s * mt, le += s * wt, he += s * _t, oe += s * Wt, ce += s * Ut, ue += s * Nt, s = f[5], re += s * p, ze += s * He, ae += s * Ye, Se += s * Qe, Ae += s * De, Be += s * qe, $e += s * Ze, Te += s * yt, Me += s * rt, Le += s * vt, le += s * mt, he += s * wt, oe += s * _t, ce += s * Wt, ue += s * Ut, ne += s * Nt, s = f[6], ze += s * p, ae += s * He, Se += s * Ye, Ae += s * Qe, Be += s * De, $e += s * qe, Te += s * Ze, Me += s * yt, Le += s * rt, le += s * vt, he += s * mt, oe += s * wt, ce += s * _t, ue += s * Wt, ne += s * Ut, T += s * Nt, s = f[7], ae += s * p, Se += s * He, Ae += s * Ye, Be += s * Qe, $e += s * De, Te += s * qe, Me += s * Ze, Le += s * yt, le += s * rt, he += s * vt, oe += s * mt, ce += s * wt, ue += s * _t, ne += s * Wt, T += s * Ut, L += s * Nt, s = f[8], Se += s * p, Ae += s * He, Be += s * Ye, $e += s * Qe, Te += s * De, Me += s * qe, Le += s * Ze, le += s * yt, he += s * rt, oe += s * vt, ce += s * mt, ue += s * wt, ne += s * _t, T += s * Wt, L += s * Ut, Z += s * Nt, s = f[9], Ae += s * p, Be += s * He, $e += s * Ye, Te += s * Qe, Me += s * De, Le += s * qe, le += s * Ze, he += s * yt, oe += s * rt, ce += s * vt, ue += s * mt, ne += s * wt, T += s * _t, L += s * Wt, Z += s * Ut, O += s * Nt, s = f[10], Be += s * p, $e += s * He, Te += s * Ye, Me += s * Qe, Le += s * De, le += s * qe, he += s * Ze, oe += s * yt, ce += s * rt, ue += s * vt, ne += s * mt, T += s * wt, L += s * _t, Z += s * Wt, O += s * Ut, H += s * Nt, s = f[11], $e += s * p, Te += s * He, Me += s * Ye, Le += s * Qe, le += s * De, he += s * qe, oe += s * Ze, ce += s * yt, ue += s * rt, ne += s * vt, T += s * mt, L += s * wt, Z += s * _t, O += s * Wt, H += s * Ut, Y += s * Nt, s = f[12], Te += s * p, Me += s * He, Le += s * Ye, le += s * Qe, he += s * De, oe += s * qe, ce += s * Ze, ue += s * yt, ne += s * rt, T += s * vt, L += s * mt, Z += s * wt, O += s * _t, H += s * Wt, Y += s * Ut, be += s * Nt, s = f[13], Me += s * p, Le += s * He, le += s * Ye, he += s * Qe, oe += s * De, ce += s * qe, ue += s * Ze, ne += s * yt, T += s * rt, L += s * vt, Z += s * mt, O += s * wt, H += s * _t, Y += s * Wt, be += s * Ut, Ie += s * Nt, s = f[14], Le += s * p, le += s * He, he += s * Ye, oe += s * Qe, ce += s * De, ue += s * qe, ne += s * Ze, T += s * yt, L += s * rt, Z += s * vt, O += s * mt, H += s * wt, Y += s * _t, be += s * Wt, Ie += s * Ut, We += s * Nt, s = f[15], le += s * p, he += s * He, oe += s * Ye, ce += s * Qe, ue += s * De, ne += s * qe, T += s * Ze, L += s * yt, Z += s * rt, O += s * vt, H += s * mt, Y += s * wt, be += s * _t, Ie += s * Wt, We += s * Ut, Pe += s * Nt, _ += 38 * he, A += 38 * oe, j += 38 * ce, X += 38 * ue, de += 38 * ne, re += 38 * T, ze += 38 * L, ae += 38 * Z, Se += 38 * O, Ae += 38 * H, Be += 38 * Y, $e += 38 * be, Te += 38 * Ie, Me += 38 * We, Le += 38 * Pe, g = 1, s = _ + g + 65535, g = Math.floor(s / 65536), _ = s - g * 65536, s = A + g + 65535, g = Math.floor(s / 65536), A = s - g * 65536, s = j + g + 65535, g = Math.floor(s / 65536), j = s - g * 65536, s = X + g + 65535, g = Math.floor(s / 65536), X = s - g * 65536, s = de + g + 65535, g = Math.floor(s / 65536), de = s - g * 65536, s = re + g + 65535, g = Math.floor(s / 65536), re = s - g * 65536, s = ze + g + 65535, g = Math.floor(s / 65536), ze = s - g * 65536, s = ae + g + 65535, g = Math.floor(s / 65536), ae = s - g * 65536, s = Se + g + 65535, g = Math.floor(s / 65536), Se = s - g * 65536, s = Ae + g + 65535, g = Math.floor(s / 65536), Ae = s - g * 65536, s = Be + g + 65535, g = Math.floor(s / 65536), Be = s - g * 65536, s = $e + g + 65535, g = Math.floor(s / 65536), $e = s - g * 65536, s = Te + g + 65535, g = Math.floor(s / 65536), Te = s - g * 65536, s = Me + g + 65535, g = Math.floor(s / 65536), Me = s - g * 65536, s = Le + g + 65535, g = Math.floor(s / 65536), Le = s - g * 65536, s = le + g + 65535, g = Math.floor(s / 65536), le = s - g * 65536, _ += g - 1 + 37 * (g - 1), g = 1, s = _ + g + 65535, g = Math.floor(s / 65536), _ = s - g * 65536, s = A + g + 65535, g = Math.floor(s / 65536), A = s - g * 65536, s = j + g + 65535, g = Math.floor(s / 65536), j = s - g * 65536, s = X + g + 65535, g = Math.floor(s / 65536), X = s - g * 65536, s = de + g + 65535, g = Math.floor(s / 65536), de = s - g * 65536, s = re + g + 65535, g = Math.floor(s / 65536), re = s - g * 65536, s = ze + g + 65535, g = Math.floor(s / 65536), ze = s - g * 65536, s = ae + g + 65535, g = Math.floor(s / 65536), ae = s - g * 65536, s = Se + g + 65535, g = Math.floor(s / 65536), Se = s - g * 65536, s = Ae + g + 65535, g = Math.floor(s / 65536), Ae = s - g * 65536, s = Be + g + 65535, g = Math.floor(s / 65536), Be = s - g * 65536, s = $e + g + 65535, g = Math.floor(s / 65536), $e = s - g * 65536, s = Te + g + 65535, g = Math.floor(s / 65536), Te = s - g * 65536, s = Me + g + 65535, g = Math.floor(s / 65536), Me = s - g * 65536, s = Le + g + 65535, g = Math.floor(s / 65536), Le = s - g * 65536, s = le + g + 65535, g = Math.floor(s / 65536), le = s - g * 65536, _ += g - 1 + 37 * (g - 1), c[0] = _, c[1] = A, c[2] = j, c[3] = X, c[4] = de, c[5] = re, c[6] = ze, c[7] = ae, c[8] = Se, c[9] = Ae, c[10] = Be, c[11] = $e, c[12] = Te, c[13] = Me, c[14] = Le, c[15] = le
    }

    function ht(c, f) {
      Re(c, f, f)
    }

    function Ln(c, f) {
      var u = n(),
        s;
      for (s = 0; s < 16; s++) u[s] = f[s];
      for (s = 253; s >= 0; s--) ht(u, u), s !== 2 && s !== 4 && Re(u, u, f);
      for (s = 0; s < 16; s++) c[s] = u[s]
    }

    function U(c, f) {
      var u = n(),
        s;
      for (s = 0; s < 16; s++) u[s] = f[s];
      for (s = 250; s >= 0; s--) ht(u, u), s !== 1 && Re(u, u, f);
      for (s = 0; s < 16; s++) c[s] = u[s]
    }

    function N(c, f, u) {
      var s = new Uint8Array(32),
        g = new Float64Array(80),
        _, A, j = n(),
        X = n(),
        de = n(),
        re = n(),
        ze = n(),
        ae = n();
      for (A = 0; A < 31; A++) s[A] = f[A];
      for (s[31] = f[31] & 127 | 64, s[0] &= 248, Ct(g, u), A = 0; A < 16; A++) X[A] = g[A], re[A] = j[A] = de[A] = 0;
      for (j[0] = re[0] = 1, A = 254; A >= 0; --A) _ = s[A >>> 3] >>> (A & 7) & 1, Fe(j, X, _), Fe(de, re, _), st(ze, j, de), pt(j, j, de), st(de, X, re), pt(X, X, re), ht(re, ze), ht(ae, j), Re(j, de, j), Re(de, X, ze), st(ze, j, de), pt(j, j, de), ht(X, j), pt(de, re, ae), Re(j, de, h), st(j, j, re), Re(de, de, j), Re(j, re, ae), Re(re, X, g), ht(X, ze), Fe(j, X, _), Fe(de, re, _);
      for (A = 0; A < 16; A++) g[A + 16] = j[A], g[A + 32] = de[A], g[A + 48] = X[A], g[A + 64] = re[A];
      var Se = g.subarray(32),
        Ae = g.subarray(16);
      return Ln(Se, Se), Re(Ae, Ae, Se), Xe(c, Ae), 0
    }

    function $(c, f) {
      return N(c, f, i)
    }

    function F(c, f) {
      return r(f, 32), $(c, f)
    }

    function K(c, f, u) {
      var s = new Uint8Array(32);
      return N(s, u, f), B(c, o, s, q)
    }
    var te = G,
      we = Q;

    function fe(c, f, u, s, g, _) {
      var A = new Uint8Array(32);
      return K(A, g, _), te(c, f, u, s, A)
    }

    function tt(c, f, u, s, g, _) {
      var A = new Uint8Array(32);
      return K(A, g, _), we(c, f, u, s, A)
    }
    var lt = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

    function pe(c, f, u, s) {
      for (var g = new Int32Array(16), _ = new Int32Array(16), A, j, X, de, re, ze, ae, Se, Ae, Be, $e, Te, Me, Le, le, he, oe, ce, ue, ne, T, L, Z, O, H, Y, be = c[0], Ie = c[1], We = c[2], Pe = c[3], p = c[4], He = c[5], Ye = c[6], Qe = c[7], De = f[0], qe = f[1], Ze = f[2], yt = f[3], rt = f[4], vt = f[5], mt = f[6], wt = f[7], _t = 0; s >= 128;) {
        for (ue = 0; ue < 16; ue++) ne = 8 * ue + _t, g[ue] = u[ne + 0] << 24 | u[ne + 1] << 16 | u[ne + 2] << 8 | u[ne + 3], _[ue] = u[ne + 4] << 24 | u[ne + 5] << 16 | u[ne + 6] << 8 | u[ne + 7];
        for (ue = 0; ue < 80; ue++)
          if (A = be, j = Ie, X = We, de = Pe, re = p, ze = He, ae = Ye, Se = Qe, Ae = De, Be = qe, $e = Ze, Te = yt, Me = rt, Le = vt, le = mt, he = wt, T = Qe, L = wt, Z = L & 65535, O = L >>> 16, H = T & 65535, Y = T >>> 16, T = (p >>> 14 | rt << 18) ^ (p >>> 18 | rt << 14) ^ (rt >>> 9 | p << 23), L = (rt >>> 14 | p << 18) ^ (rt >>> 18 | p << 14) ^ (p >>> 9 | rt << 23), Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, T = p & He ^ ~p & Ye, L = rt & vt ^ ~rt & mt, Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, T = lt[ue * 2], L = lt[ue * 2 + 1], Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, T = g[ue % 16], L = _[ue % 16], Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, O += Z >>> 16, H += O >>> 16, Y += H >>> 16, oe = H & 65535 | Y << 16, ce = Z & 65535 | O << 16, T = oe, L = ce, Z = L & 65535, O = L >>> 16, H = T & 65535, Y = T >>> 16, T = (be >>> 28 | De << 4) ^ (De >>> 2 | be << 30) ^ (De >>> 7 | be << 25), L = (De >>> 28 | be << 4) ^ (be >>> 2 | De << 30) ^ (be >>> 7 | De << 25), Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, T = be & Ie ^ be & We ^ Ie & We, L = De & qe ^ De & Ze ^ qe & Ze, Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, O += Z >>> 16, H += O >>> 16, Y += H >>> 16, Se = H & 65535 | Y << 16, he = Z & 65535 | O << 16, T = de, L = Te, Z = L & 65535, O = L >>> 16, H = T & 65535, Y = T >>> 16, T = oe, L = ce, Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, O += Z >>> 16, H += O >>> 16, Y += H >>> 16, de = H & 65535 | Y << 16, Te = Z & 65535 | O << 16, Ie = A, We = j, Pe = X, p = de, He = re, Ye = ze, Qe = ae, be = Se, qe = Ae, Ze = Be, yt = $e, rt = Te, vt = Me, mt = Le, wt = le, De = he, ue % 16 === 15)
            for (ne = 0; ne < 16; ne++) T = g[ne], L = _[ne], Z = L & 65535, O = L >>> 16, H = T & 65535, Y = T >>> 16, T = g[(ne + 9) % 16], L = _[(ne + 9) % 16], Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, oe = g[(ne + 1) % 16], ce = _[(ne + 1) % 16], T = (oe >>> 1 | ce << 31) ^ (oe >>> 8 | ce << 24) ^ oe >>> 7, L = (ce >>> 1 | oe << 31) ^ (ce >>> 8 | oe << 24) ^ (ce >>> 7 | oe << 25), Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, oe = g[(ne + 14) % 16], ce = _[(ne + 14) % 16], T = (oe >>> 19 | ce << 13) ^ (ce >>> 29 | oe << 3) ^ oe >>> 6, L = (ce >>> 19 | oe << 13) ^ (oe >>> 29 | ce << 3) ^ (ce >>> 6 | oe << 26), Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, O += Z >>> 16, H += O >>> 16, Y += H >>> 16, g[ne] = H & 65535 | Y << 16, _[ne] = Z & 65535 | O << 16;
        T = be, L = De, Z = L & 65535, O = L >>> 16, H = T & 65535, Y = T >>> 16, T = c[0], L = f[0], Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, O += Z >>> 16, H += O >>> 16, Y += H >>> 16, c[0] = be = H & 65535 | Y << 16, f[0] = De = Z & 65535 | O << 16, T = Ie, L = qe, Z = L & 65535, O = L >>> 16, H = T & 65535, Y = T >>> 16, T = c[1], L = f[1], Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, O += Z >>> 16, H += O >>> 16, Y += H >>> 16, c[1] = Ie = H & 65535 | Y << 16, f[1] = qe = Z & 65535 | O << 16, T = We, L = Ze, Z = L & 65535, O = L >>> 16, H = T & 65535, Y = T >>> 16, T = c[2], L = f[2], Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, O += Z >>> 16, H += O >>> 16, Y += H >>> 16, c[2] = We = H & 65535 | Y << 16, f[2] = Ze = Z & 65535 | O << 16, T = Pe, L = yt, Z = L & 65535, O = L >>> 16, H = T & 65535, Y = T >>> 16, T = c[3], L = f[3], Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, O += Z >>> 16, H += O >>> 16, Y += H >>> 16, c[3] = Pe = H & 65535 | Y << 16, f[3] = yt = Z & 65535 | O << 16, T = p, L = rt, Z = L & 65535, O = L >>> 16, H = T & 65535, Y = T >>> 16, T = c[4], L = f[4], Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, O += Z >>> 16, H += O >>> 16, Y += H >>> 16, c[4] = p = H & 65535 | Y << 16, f[4] = rt = Z & 65535 | O << 16, T = He, L = vt, Z = L & 65535, O = L >>> 16, H = T & 65535, Y = T >>> 16, T = c[5], L = f[5], Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, O += Z >>> 16, H += O >>> 16, Y += H >>> 16, c[5] = He = H & 65535 | Y << 16, f[5] = vt = Z & 65535 | O << 16, T = Ye, L = mt, Z = L & 65535, O = L >>> 16, H = T & 65535, Y = T >>> 16, T = c[6], L = f[6], Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, O += Z >>> 16, H += O >>> 16, Y += H >>> 16, c[6] = Ye = H & 65535 | Y << 16, f[6] = mt = Z & 65535 | O << 16, T = Qe, L = wt, Z = L & 65535, O = L >>> 16, H = T & 65535, Y = T >>> 16, T = c[7], L = f[7], Z += L & 65535, O += L >>> 16, H += T & 65535, Y += T >>> 16, O += Z >>> 16, H += O >>> 16, Y += H >>> 16, c[7] = Qe = H & 65535 | Y << 16, f[7] = wt = Z & 65535 | O << 16, _t += 128, s -= 128
      }
      return s
    }

    function ct(c, f, u) {
      var s = new Int32Array(8),
        g = new Int32Array(8),
        _ = new Uint8Array(256),
        A, j = u;
      for (s[0] = 1779033703, s[1] = 3144134277, s[2] = 1013904242, s[3] = 2773480762, s[4] = 1359893119, s[5] = 2600822924, s[6] = 528734635, s[7] = 1541459225, g[0] = 4089235720, g[1] = 2227873595, g[2] = 4271175723, g[3] = 1595750129, g[4] = 2917565137, g[5] = 725511199, g[6] = 4215389547, g[7] = 327033209, pe(s, g, f, u), u %= 128, A = 0; A < u; A++) _[A] = f[j - u + A];
      for (_[u] = 128, u = 256 - 128 * (u < 112 ? 1 : 0), _[u - 9] = 0, b(_, u - 8, j / 536870912 | 0, j << 3), pe(s, g, _, u), A = 0; A < 8; A++) b(c, 8 * A, s[A], g[A]);
      return 0
    }

    function St(c, f) {
      var u = n(),
        s = n(),
        g = n(),
        _ = n(),
        A = n(),
        j = n(),
        X = n(),
        de = n(),
        re = n();
      pt(u, c[1], c[0]), pt(re, f[1], f[0]), Re(u, u, re), st(s, c[0], c[1]), st(re, f[0], f[1]), Re(s, s, re), Re(g, c[3], f[3]), Re(g, g, m), Re(_, c[2], f[2]), st(_, _, _), pt(A, s, u), pt(j, _, g), st(X, _, g), st(de, s, u), Re(c[0], A, j), Re(c[1], de, X), Re(c[2], X, j), Re(c[3], A, de)
    }

    function Mn(c, f, u) {
      var s;
      for (s = 0; s < 4; s++) Fe(c[s], f[s], u)
    }

    function gn(c, f) {
      var u = n(),
        s = n(),
        g = n();
      Ln(g, f[2]), Re(u, f[0], g), Re(s, f[1], g), Xe(c, s), c[31] ^= It(u) << 7
    }

    function Tt(c, f, u) {
      var s, g;
      for (me(c[0], a), me(c[1], l), me(c[2], l), me(c[3], a), g = 255; g >= 0; --g) s = u[g / 8 | 0] >> (g & 7) & 1, Mn(c, f, s), St(f, c), St(c, c), Mn(c, f, s)
    }

    function Ot(c, f) {
      var u = [n(), n(), n(), n()];
      me(u[0], y), me(u[1], w), me(u[2], l), Re(u[3], y, w), Tt(c, u, f)
    }

    function Vt(c, f, u) {
      var s = new Uint8Array(64),
        g = [n(), n(), n(), n()],
        _;
      for (u || r(f, 32), ct(s, f, 32), s[0] &= 248, s[31] &= 127, s[31] |= 64, Ot(g, s), gn(c, g), _ = 0; _ < 32; _++) f[_ + 32] = c[_];
      return 0
    }
    var Ne = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

    function Ke(c, f) {
      var u, s, g, _;
      for (s = 63; s >= 32; --s) {
        for (u = 0, g = s - 32, _ = s - 12; g < _; ++g) f[g] += u - 16 * f[s] * Ne[g - (s - 32)], u = Math.floor((f[g] + 128) / 256), f[g] -= u * 256;
        f[g] += u, f[s] = 0
      }
      for (u = 0, g = 0; g < 32; g++) f[g] += u - (f[31] >> 4) * Ne[g], u = f[g] >> 8, f[g] &= 255;
      for (g = 0; g < 32; g++) f[g] -= u * Ne[g];
      for (s = 0; s < 32; s++) f[s + 1] += f[s] >> 8, c[s] = f[s] & 255
    }

    function ke(c) {
      var f = new Float64Array(64),
        u;
      for (u = 0; u < 64; u++) f[u] = c[u];
      for (u = 0; u < 64; u++) c[u] = 0;
      Ke(c, f)
    }

    function nt(c, f, u, s) {
      var g = new Uint8Array(64),
        _ = new Uint8Array(64),
        A = new Uint8Array(64),
        j, X, de = new Float64Array(64),
        re = [n(), n(), n(), n()];
      ct(g, s, 32), g[0] &= 248, g[31] &= 127, g[31] |= 64;
      var ze = u + 64;
      for (j = 0; j < u; j++) c[64 + j] = f[j];
      for (j = 0; j < 32; j++) c[32 + j] = g[32 + j];
      for (ct(A, c.subarray(32), u + 32), ke(A), Ot(re, A), gn(c, re), j = 32; j < 64; j++) c[j] = s[j];
      for (ct(_, c, u + 64), ke(_), j = 0; j < 64; j++) de[j] = 0;
      for (j = 0; j < 32; j++) de[j] = A[j];
      for (j = 0; j < 32; j++)
        for (X = 0; X < 32; X++) de[j + X] += _[j] * g[X];
      return Ke(c.subarray(32), de), ze
    }

    function Jt(c, f) {
      var u = n(),
        s = n(),
        g = n(),
        _ = n(),
        A = n(),
        j = n(),
        X = n();
      return me(c[2], l), Ct(c[1], f), ht(g, c[1]), Re(_, g, v), pt(g, g, c[2]), st(_, c[2], _), ht(A, _), ht(j, A), Re(X, j, A), Re(u, X, g), Re(u, u, _), U(u, u), Re(u, u, g), Re(u, u, _), Re(u, u, _), Re(c[0], u, _), ht(s, c[0]), Re(s, s, _), ft(s, g) && Re(c[0], c[0], C), ht(s, c[0]), Re(s, s, _), ft(s, g) ? -1 : (It(c[0]) === f[31] >> 7 && pt(c[0], a, c[0]), Re(c[3], c[0], c[1]), 0)
    }

    function Ft(c, f, u, s) {
      var g, _ = new Uint8Array(32),
        A = new Uint8Array(64),
        j = [n(), n(), n(), n()],
        X = [n(), n(), n(), n()];
      if (u < 64 || Jt(X, s)) return -1;
      for (g = 0; g < u; g++) c[g] = f[g];
      for (g = 0; g < 32; g++) c[g + 32] = s[g];
      if (ct(A, c, u), ke(A), Tt(j, X, A), Ot(X, f.subarray(32)), St(j, X), gn(_, j), u -= 64, ee(f, 0, _, 0)) {
        for (g = 0; g < u; g++) c[g] = 0;
        return -1
      }
      for (g = 0; g < u; g++) c[g] = f[g + 64];
      return u
    }
    var Ve = 32,
      Ce = 24,
      Pt = 32,
      nn = 16,
      $n = 32,
      to = 32,
      vr = 32,
      mr = 32,
      Zo = 32,
      ds = Ce,
      Tl = Pt,
      Ll = nn,
      vn = 64,
      Kn = 32,
      er = 64,
      Go = 32,
      zo = 64;
    t.lowlevel = {
      crypto_core_hsalsa20: B,
      crypto_stream_xor: W,
      crypto_stream: E,
      crypto_stream_salsa20_xor: P,
      crypto_stream_salsa20: R,
      crypto_onetimeauth: x,
      crypto_onetimeauth_verify: J,
      crypto_verify_16: M,
      crypto_verify_32: ee,
      crypto_secretbox: G,
      crypto_secretbox_open: Q,
      crypto_scalarmult: N,
      crypto_scalarmult_base: $,
      crypto_box_beforenm: K,
      crypto_box_afternm: te,
      crypto_box: fe,
      crypto_box_open: tt,
      crypto_box_keypair: F,
      crypto_hash: ct,
      crypto_sign: nt,
      crypto_sign_keypair: Vt,
      crypto_sign_open: Ft,
      crypto_secretbox_KEYBYTES: Ve,
      crypto_secretbox_NONCEBYTES: Ce,
      crypto_secretbox_ZEROBYTES: Pt,
      crypto_secretbox_BOXZEROBYTES: nn,
      crypto_scalarmult_BYTES: $n,
      crypto_scalarmult_SCALARBYTES: to,
      crypto_box_PUBLICKEYBYTES: vr,
      crypto_box_SECRETKEYBYTES: mr,
      crypto_box_BEFORENMBYTES: Zo,
      crypto_box_NONCEBYTES: ds,
      crypto_box_ZEROBYTES: Tl,
      crypto_box_BOXZEROBYTES: Ll,
      crypto_sign_BYTES: vn,
      crypto_sign_PUBLICKEYBYTES: Kn,
      crypto_sign_SECRETKEYBYTES: er,
      crypto_sign_SEEDBYTES: Go,
      crypto_hash_BYTES: zo,
      gf: n,
      D: v,
      L: Ne,
      pack25519: Xe,
      unpack25519: Ct,
      M: Re,
      A: st,
      S: ht,
      Z: pt,
      pow2523: U,
      add: St,
      set25519: me,
      modL: Ke,
      scalarmult: Tt,
      scalarbase: Ot
    };

    function fs(c, f) {
      if (c.length !== Ve) throw new Error("bad key size");
      if (f.length !== Ce) throw new Error("bad nonce size")
    }

    function Ml(c, f) {
      if (c.length !== vr) throw new Error("bad public key size");
      if (f.length !== mr) throw new Error("bad secret key size")
    }

    function qt() {
      for (var c = 0; c < arguments.length; c++)
        if (!(arguments[c] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array")
    }

    function hs(c) {
      for (var f = 0; f < c.length; f++) c[f] = 0
    }
    t.randomBytes = function(c) {
        var f = new Uint8Array(c);
        return r(f, c), f
      }, t.secretbox = function(c, f, u) {
        qt(c, f, u), fs(u, f);
        for (var s = new Uint8Array(Pt + c.length), g = new Uint8Array(s.length), _ = 0; _ < c.length; _++) s[_ + Pt] = c[_];
        return G(g, s, s.length, f, u), g.subarray(nn)
      }, t.secretbox.open = function(c, f, u) {
        qt(c, f, u), fs(u, f);
        for (var s = new Uint8Array(nn + c.length), g = new Uint8Array(s.length), _ = 0; _ < c.length; _++) s[_ + nn] = c[_];
        return s.length < 32 || Q(g, s, s.length, f, u) !== 0 ? null : g.subarray(Pt)
      }, t.secretbox.keyLength = Ve, t.secretbox.nonceLength = Ce, t.secretbox.overheadLength = nn, t.scalarMult = function(c, f) {
        if (qt(c, f), c.length !== to) throw new Error("bad n size");
        if (f.length !== $n) throw new Error("bad p size");
        var u = new Uint8Array($n);
        return N(u, c, f), u
      }, t.scalarMult.base = function(c) {
        if (qt(c), c.length !== to) throw new Error("bad n size");
        var f = new Uint8Array($n);
        return $(f, c), f
      }, t.scalarMult.scalarLength = to, t.scalarMult.groupElementLength = $n, t.box = function(c, f, u, s) {
        var g = t.box.before(u, s);
        return t.secretbox(c, f, g)
      }, t.box.before = function(c, f) {
        qt(c, f), Ml(c, f);
        var u = new Uint8Array(Zo);
        return K(u, c, f), u
      }, t.box.after = t.secretbox, t.box.open = function(c, f, u, s) {
        var g = t.box.before(u, s);
        return t.secretbox.open(c, f, g)
      }, t.box.open.after = t.secretbox.open, t.box.keyPair = function() {
        var c = new Uint8Array(vr),
          f = new Uint8Array(mr);
        return F(c, f), {
          publicKey: c,
          secretKey: f
        }
      }, t.box.keyPair.fromSecretKey = function(c) {
        if (qt(c), c.length !== mr) throw new Error("bad secret key size");
        var f = new Uint8Array(vr);
        return $(f, c), {
          publicKey: f,
          secretKey: new Uint8Array(c)
        }
      }, t.box.publicKeyLength = vr, t.box.secretKeyLength = mr, t.box.sharedKeyLength = Zo, t.box.nonceLength = ds, t.box.overheadLength = t.secretbox.overheadLength, t.sign = function(c, f) {
        if (qt(c, f), f.length !== er) throw new Error("bad secret key size");
        var u = new Uint8Array(vn + c.length);
        return nt(u, c, c.length, f), u
      }, t.sign.open = function(c, f) {
        if (qt(c, f), f.length !== Kn) throw new Error("bad public key size");
        var u = new Uint8Array(c.length),
          s = Ft(u, c, c.length, f);
        if (s < 0) return null;
        for (var g = new Uint8Array(s), _ = 0; _ < g.length; _++) g[_] = u[_];
        return g
      }, t.sign.detached = function(c, f) {
        for (var u = t.sign(c, f), s = new Uint8Array(vn), g = 0; g < s.length; g++) s[g] = u[g];
        return s
      }, t.sign.detached.verify = function(c, f, u) {
        if (qt(c, f, u), f.length !== vn) throw new Error("bad signature size");
        if (u.length !== Kn) throw new Error("bad public key size");
        var s = new Uint8Array(vn + c.length),
          g = new Uint8Array(vn + c.length),
          _;
        for (_ = 0; _ < vn; _++) s[_] = f[_];
        for (_ = 0; _ < c.length; _++) s[_ + vn] = c[_];
        return Ft(g, s, s.length, u) >= 0
      }, t.sign.keyPair = function() {
        var c = new Uint8Array(Kn),
          f = new Uint8Array(er);
        return Vt(c, f), {
          publicKey: c,
          secretKey: f
        }
      }, t.sign.keyPair.fromSecretKey = function(c) {
        if (qt(c), c.length !== er) throw new Error("bad secret key size");
        for (var f = new Uint8Array(Kn), u = 0; u < f.length; u++) f[u] = c[32 + u];
        return {
          publicKey: f,
          secretKey: new Uint8Array(c)
        }
      }, t.sign.keyPair.fromSeed = function(c) {
        if (qt(c), c.length !== Go) throw new Error("bad seed size");
        for (var f = new Uint8Array(Kn), u = new Uint8Array(er), s = 0; s < 32; s++) u[s] = c[s];
        return Vt(f, u, !0), {
          publicKey: f,
          secretKey: u
        }
      }, t.sign.publicKeyLength = Kn, t.sign.secretKeyLength = er, t.sign.seedLength = Go, t.sign.signatureLength = vn, t.hash = function(c) {
        qt(c);
        var f = new Uint8Array(zo);
        return ct(f, c, c.length), f
      }, t.hash.hashLength = zo, t.verify = function(c, f) {
        return qt(c, f), c.length === 0 || f.length === 0 || c.length !== f.length ? !1 : S(c, 0, f, 0, c.length) === 0
      }, t.setPRNG = function(c) {
        r = c
      },
      function() {
        var c = typeof self < "u" ? self.crypto || self.msCrypto : null;
        if (c && c.getRandomValues) {
          var f = 65536;
          t.setPRNG(function(u, s) {
            var g, _ = new Uint8Array(s);
            for (g = 0; g < s; g += f) c.getRandomValues(_.subarray(g, g + Math.min(s - g, f)));
            for (g = 0; g < s; g++) u[g] = _[g];
            hs(_)
          })
        } else typeof Bl < "u" && (c = Wl, c && c.randomBytes && t.setPRNG(function(u, s) {
          var g, _ = c.randomBytes(s);
          for (g = 0; g < s; g++) u[g] = _[g];
          hs(_)
        }))
      }()
  })(e.exports ? e.exports : self.nacl = self.nacl || {})
})(va);
var Ul = va.exports;
const no = jr(Ul);
var wn;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", e[e.MANIFEST_NOT_FOUND_ERROR = 2] = "MANIFEST_NOT_FOUND_ERROR", e[e.MANIFEST_CONTENT_ERROR = 3] = "MANIFEST_CONTENT_ERROR", e[e.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", e[e.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(wn || (wn = {}));
var ui;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(ui || (ui = {}));
var qn;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", e[e.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", e[e.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(qn || (qn = {}));
var gs;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", e[e.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", e[e.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(gs || (gs = {}));
var vs;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", e[e.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(vs || (vs = {}));
var $r;
(function(e) {
  e.MAINNET = "-239", e.TESTNET = "-3"
})($r || ($r = {}));

function Nl(e, t) {
  const n = Mr.encodeBase64(e);
  return t ? encodeURIComponent(n) : n
}

function Dl(e, t) {
  return t && (e = decodeURIComponent(e)), Mr.decodeBase64(e)
}

function Ol(e, t = !1) {
  let n;
  return e instanceof Uint8Array ? n = e : (typeof e != "string" && (e = JSON.stringify(e)), n = Mr.decodeUTF8(e)), Nl(n, t)
}

function jl(e, t = !1) {
  const n = Dl(e, t);
  return {
    toString() {
      return Mr.encodeUTF8(n)
    },
    toObject() {
      try {
        return JSON.parse(Mr.encodeUTF8(n))
      } catch {
        return null
      }
    },
    toUint8Array() {
      return n
    }
  }
}
const Ai = {
  encode: Ol,
  decode: jl
};

function Hl(e, t) {
  const n = new Uint8Array(e.length + t.length);
  return n.set(e), n.set(t, e.length), n
}

function Fl(e, t) {
  if (t >= e.length) throw new Error("Index is out of buffer");
  const n = e.slice(0, t),
    r = e.slice(t);
  return [n, r]
}

function Yo(e) {
  let t = "";
  return e.forEach(n => {
    t += ("0" + (n & 255).toString(16)).slice(-2)
  }), t
}

function vo(e) {
  if (e.length % 2 !== 0) throw new Error(`Cannot convert ${e} to bytesArray`);
  const t = new Uint8Array(e.length / 2);
  for (let n = 0; n < e.length; n += 2) t[n / 2] = parseInt(e.slice(n, n + 2), 16);
  return t
}
class di {
  constructor(t) {
    this.nonceLength = 24, this.keyPair = t ? this.createKeypairFromString(t) : this.createKeypair(), this.sessionId = Yo(this.keyPair.publicKey)
  }
  createKeypair() {
    return no.box.keyPair()
  }
  createKeypairFromString(t) {
    return {
      publicKey: vo(t.publicKey),
      secretKey: vo(t.secretKey)
    }
  }
  createNonce() {
    return no.randomBytes(this.nonceLength)
  }
  encrypt(t, n) {
    const r = new TextEncoder().encode(t),
      o = this.createNonce(),
      i = no.box(r, o, n, this.keyPair.secretKey);
    return Hl(o, i)
  }
  decrypt(t, n) {
    const [r, o] = Fl(t, this.nonceLength), i = no.box.open(o, r, n, this.keyPair.secretKey);
    if (!i) throw new Error(`Decryption error: 
 message: ${t.toString()} 
 sender pubkey: ${n.toString()} 
 keypair pubkey: ${this.keyPair.publicKey.toString()} 
 keypair secretkey: ${this.keyPair.secretKey.toString()}`);
    return new TextDecoder().decode(i)
  }
  stringifyKeypair() {
    return {
      publicKey: Yo(this.keyPair.publicKey),
      secretKey: Yo(this.keyPair.secretKey)
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
function Kl(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
}

function se(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i)
    })
  }
  return new(n || (n = Promise))(function(i, a) {
    function l(m) {
      try {
        v(r.next(m))
      } catch (y) {
        a(y)
      }
    }

    function h(m) {
      try {
        v(r.throw(m))
      } catch (y) {
        a(y)
      }
    }

    function v(m) {
      m.done ? i(m.value) : o(m.value).then(l, h)
    }
    v((r = r.apply(e, [])).next())
  })
}
class ge extends Error {
  constructor(t, n) {
    super(t, n), this.message = `${ge.prefix} ${this.constructor.name}${this.info?": "+this.info:""}${t?`
`+t:""}`, Object.setPrototypeOf(this, ge.prototype)
  }
  get info() {
    return ""
  }
}
ge.prefix = "[TON_CONNECT_SDK_ERROR]";
class Ti extends ge {
  get info() {
    return "Passed DappMetadata is in incorrect format."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ti.prototype)
  }
}
class Ro extends ge {
  get info() {
    return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ro.prototype)
  }
}
class Bo extends ge {
  get info() {
    return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Bo.prototype)
  }
}
class Io extends ge {
  get info() {
    return "Wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Io.prototype)
  }
}
class Rr extends ge {
  get info() {
    return "Send transaction or other protocol methods called while wallet is not connected."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Rr.prototype)
  }
}

function Vl(e) {
  return "jsBridgeKey" in e
}
class Hr extends ge {
  get info() {
    return "User rejects the action in the wallet."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Hr.prototype)
  }
}
class Fr extends ge {
  get info() {
    return "Request to the wallet contains errors."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Fr.prototype)
  }
}
class Kr extends ge {
  get info() {
    return "App tries to send rpc request to the injected wallet while not connected."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Kr.prototype)
  }
}
class Po extends ge {
  get info() {
    return "There is an attempt to connect to the injected wallet while it is not exists in the webpage."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Po.prototype)
  }
}
class Wo extends ge {
  get info() {
    return "An error occurred while fetching the wallets list."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Wo.prototype)
  }
}
class Zn extends ge {
  get info() {
    return "Passed address is in incorrect format."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Zn.prototype)
  }
}
class Br extends ge {
  get info() {
    return "Passed hex is in incorrect format."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Br.prototype)
  }
}
class _n extends ge {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, _n.prototype)
  }
}
const ms = {
  [wn.UNKNOWN_ERROR]: _n,
  [wn.USER_REJECTS_ERROR]: Hr,
  [wn.BAD_REQUEST_ERROR]: Fr,
  [wn.UNKNOWN_APP_ERROR]: Kr,
  [wn.MANIFEST_NOT_FOUND_ERROR]: Bo,
  [wn.MANIFEST_CONTENT_ERROR]: Ro
};
class ql {
  parseError(t) {
    let n = _n;
    return t.code in ms && (n = ms[t.code] || _n), new n(t.message)
  }
}
const Zl = new ql;
class Gl {
  isError(t) {
    return "error" in t
  }
}
const ws = {
  [qn.UNKNOWN_ERROR]: _n,
  [qn.USER_REJECTS_ERROR]: Hr,
  [qn.BAD_REQUEST_ERROR]: Fr,
  [qn.UNKNOWN_APP_ERROR]: Kr
};
class zl extends Gl {
  convertToRpcRequest(t) {
    return {
      method: "sendTransaction",
      params: [JSON.stringify(t)]
    }
  }
  parseAndThrowError(t) {
    let n = _n;
    throw t.error.code in ws && (n = ws[t.error.code] || _n), new n(t.error.message)
  }
  convertFromRpcResponse(t) {
    return {
      boc: t.result
    }
  }
}
const ro = new zl;
class Yl {
  constructor(t, n) {
    this.storage = t, this.storeKey = "ton-connect-storage_http-bridge-gateway::" + n
  }
  storeLastEventId(t) {
    return se(this, void 0, void 0, function*() {
      return this.storage.setItem(this.storeKey, t)
    })
  }
  removeLastEventId() {
    return se(this, void 0, void 0, function*() {
      return this.storage.removeItem(this.storeKey)
    })
  }
  getLastEventId() {
    return se(this, void 0, void 0, function*() {
      const t = yield this.storage.getItem(this.storeKey);
      return t || null
    })
  }
}

function Ql(e) {
  return e.slice(-1) === "/" ? e.slice(0, -1) : e
}

function ma(e, t) {
  return Ql(e) + "/" + t
}

function bn(e) {
  if (!e) return !1;
  const t = new URL(e);
  return t.protocol === "tg:" || t.hostname === "t.me"
}

function Li(e) {
  return e.replaceAll(".", "%2E").replaceAll("-", "%2D").replaceAll("_", "%5F").replaceAll("&", "-").replaceAll("=", "__").replaceAll("%", "--")
}

function wa(e, t) {
  return se(this, void 0, void 0, function*() {
    return new Promise((n, r) => {
      var o, i;
      if (!((o = void 0) === null || o === void 0) && o.aborted) {
        r(new ge("Delay aborted"));
        return
      }
      const a = setTimeout(() => n(), e);
      (i = void 0) === null || i === void 0 || i.addEventListener("abort", () => {
        clearTimeout(a), r(new ge("Delay aborted"))
      })
    })
  })
}

function en(e) {
  const t = new AbortController;
  return e != null && e.aborted ? t.abort() : e == null || e.addEventListener("abort", () => t.abort(), {
    once: !0
  }), t
}

function Cr(e, t) {
  var n, r;
  return se(this, void 0, void 0, function*() {
    const o = (n = t == null ? void 0 : t.attempts) !== null && n !== void 0 ? n : 10,
      i = (r = t == null ? void 0 : t.delayMs) !== null && r !== void 0 ? r : 200,
      a = en(t == null ? void 0 : t.signal);
    if (typeof e != "function") throw new ge(`Expected a function, got ${typeof e}`);
    let l = 0,
      h;
    for (; l < o;) {
      if (a.signal.aborted) throw new ge(`Aborted after attempts ${l}`);
      try {
        return yield e({
          signal: a.signal
        })
      } catch (v) {
        h = v, l++, l < o && (yield wa(i))
      }
    }
    throw h
  })
}

function Et(...e) {
  try {
    console.debug("[TON_CONNECT_SDK]", ...e)
  } catch {}
}

function xn(...e) {
  try {
    console.error("[TON_CONNECT_SDK]", ...e)
  } catch {}
}

function Jl(...e) {
  try {
    console.warn("[TON_CONNECT_SDK]", ...e)
  } catch {}
}

function Xl(e, t) {
  let n = null,
    r = null,
    o = null,
    i = null,
    a = null;
  const l = (y, ...w) => se(this, void 0, void 0, function*() {
    if (i = y ?? null, a == null || a.abort(), a = en(y), a.signal.aborted) throw new ge("Resource creation was aborted");
    r = w ?? null;
    const C = e(a.signal, ...w);
    o = C;
    const b = yield C;
    if (o !== C && b !== n) throw yield t(b), new ge("Resource creation was aborted by a new resource creation");
    return n = b, n
  });
  return {
    create: l,
    current: () => n ?? null,
    dispose: () => se(this, void 0, void 0, function*() {
      try {
        const y = n;
        n = null;
        const w = o;
        o = null;
        try {
          a == null || a.abort()
        } catch {}
        yield Promise.allSettled([y ? t(y) : Promise.resolve(), w ? t(yield w) : Promise.resolve()])
      } catch {}
    }),
    recreate: y => se(this, void 0, void 0, function*() {
      const w = n,
        C = o,
        b = r,
        S = i;
      if (yield wa(y), w === n && C === o && b === r && S === i) return yield l(i, ...b ?? []);
      throw new ge("Resource recreation was aborted by a new resource creation")
    })
  }
}

function ec(e, t) {
  const n = t == null ? void 0 : t.timeout,
    r = t == null ? void 0 : t.signal,
    o = en(r);
  return new Promise((i, a) => se(this, void 0, void 0, function*() {
    if (o.signal.aborted) {
      a(new ge("Operation aborted"));
      return
    }
    let l;
    typeof n < "u" && (l = setTimeout(() => {
      o.abort(), a(new ge(`Timeout after ${n}ms`))
    }, n)), o.signal.addEventListener("abort", () => {
      clearTimeout(l), a(new ge("Operation aborted"))
    }, {
      once: !0
    });
    const h = {
      timeout: n,
      abort: o.signal
    };
    yield e((...v) => {
      clearTimeout(l), i(...v)
    }, () => {
      clearTimeout(l), a()
    }, h)
  }))
}
class Qo {
  constructor(t, n, r, o, i) {
    this.bridgeUrl = n, this.sessionId = r, this.listener = o, this.errorsListener = i, this.ssePath = "events", this.postPath = "message", this.heartbeatMessage = "heartbeat", this.defaultTtl = 300, this.defaultReconnectDelay = 2e3, this.defaultResendDelay = 5e3, this.eventSource = Xl((a, l) => se(this, void 0, void 0, function*() {
      const h = {
        bridgeUrl: this.bridgeUrl,
        ssePath: this.ssePath,
        sessionId: this.sessionId,
        bridgeGatewayStorage: this.bridgeGatewayStorage,
        errorHandler: this.errorsHandler.bind(this),
        messageHandler: this.messagesHandler.bind(this),
        signal: a,
        openingDeadlineMS: l
      };
      return yield tc(h)
    }), a => se(this, void 0, void 0, function*() {
      a.close()
    })), this.bridgeGatewayStorage = new Yl(t, n)
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
    return se(this, void 0, void 0, function*() {
      yield this.eventSource.create(t == null ? void 0 : t.signal, t == null ? void 0 : t.openingDeadlineMS)
    })
  }
  send(t, n, r, o) {
    var i;
    return se(this, void 0, void 0, function*() {
      const a = {};
      typeof o == "number" ? a.ttl = o : (a.ttl = o == null ? void 0 : o.ttl, a.signal = o == null ? void 0 : o.signal, a.attempts = o == null ? void 0 : o.attempts);
      const l = new URL(ma(this.bridgeUrl, this.postPath));
      l.searchParams.append("client_id", this.sessionId), l.searchParams.append("to", n), l.searchParams.append("ttl", ((a == null ? void 0 : a.ttl) || this.defaultTtl).toString()), l.searchParams.append("topic", r);
      const h = Ai.encode(t);
      yield Cr(v => se(this, void 0, void 0, function*() {
        const m = yield this.post(l, h, v.signal);
        if (!m.ok) throw new ge(`Bridge send failed, status ${m.status}`)
      }), {
        attempts: (i = a == null ? void 0 : a.attempts) !== null && i !== void 0 ? i : Number.MAX_SAFE_INTEGER,
        delayMs: this.defaultResendDelay,
        signal: a == null ? void 0 : a.signal
      })
    })
  }
  pause() {
    this.eventSource.dispose().catch(t => xn(`Bridge pause failed, ${t}`))
  }
  unPause() {
    return se(this, void 0, void 0, function*() {
      yield this.eventSource.recreate(0)
    })
  }
  close() {
    return se(this, void 0, void 0, function*() {
      yield this.eventSource.dispose().catch(t => xn(`Bridge close failed, ${t}`))
    })
  }
  setListener(t) {
    this.listener = t
  }
  setErrorsListener(t) {
    this.errorsListener = t
  }
  post(t, n, r) {
    return se(this, void 0, void 0, function*() {
      const o = yield fetch(t, {
        method: "post",
        body: n,
        signal: r
      });
      if (!o.ok) throw new ge(`Bridge send failed, status ${o.status}`);
      return o
    })
  }
  errorsHandler(t, n) {
    return se(this, void 0, void 0, function*() {
      if (this.isConnecting) throw t.close(), new ge("Bridge error, failed to connect");
      if (this.isReady) {
        try {
          this.errorsListener(n)
        } catch {}
        return
      }
      if (this.isClosed) return t.close(), Et(`Bridge reconnecting, ${this.defaultReconnectDelay}ms delay`), yield this.eventSource.recreate(this.defaultReconnectDelay);
      throw new ge("Bridge error, unknown state")
    })
  }
  messagesHandler(t) {
    return se(this, void 0, void 0, function*() {
      if (t.data === this.heartbeatMessage || (yield this.bridgeGatewayStorage.storeLastEventId(t.lastEventId), this.isClosed)) return;
      let n;
      try {
        n = JSON.parse(t.data)
      } catch (r) {
        throw new ge(`Bridge message parse failed, message ${r.data}`)
      }
      this.listener(n)
    })
  }
}

function tc(e) {
  return se(this, void 0, void 0, function*() {
    return yield ec((t, n, r) => se(this, void 0, void 0, function*() {
      var o;
      const a = en(r.signal).signal;
      if (a.aborted) {
        n(new ge("Bridge connection aborted"));
        return
      }
      const l = new URL(ma(e.bridgeUrl, e.ssePath));
      l.searchParams.append("client_id", e.sessionId);
      const h = yield e.bridgeGatewayStorage.getLastEventId();
      if (h && l.searchParams.append("last_event_id", h), a.aborted) {
        n(new ge("Bridge connection aborted"));
        return
      }
      const v = new EventSource(l.toString());
      v.onerror = m => se(this, void 0, void 0, function*() {
        if (a.aborted) {
          v.close(), n(new ge("Bridge connection aborted"));
          return
        }
        try {
          const y = yield e.errorHandler(v, m);
          y !== v && v.close(), y && y !== v && t(y)
        } catch (y) {
          v.close(), n(y)
        }
      }), v.onopen = () => {
        if (a.aborted) {
          v.close(), n(new ge("Bridge connection aborted"));
          return
        }
        t(v)
      }, v.onmessage = m => {
        if (a.aborted) {
          v.close(), n(new ge("Bridge connection aborted"));
          return
        }
        e.messageHandler(m)
      }, (o = e.signal) === null || o === void 0 || o.addEventListener("abort", () => {
        v.close(), n(new ge("Bridge connection aborted"))
      })
    }), {
      timeout: e.openingDeadlineMS,
      signal: e.signal
    })
  })
}

function Sr(e) {
  return !("connectEvent" in e)
}
class Ir {
  constructor(t) {
    this.storage = t, this.storeKey = "ton-connect-storage_bridge-connection"
  }
  storeConnection(t) {
    return se(this, void 0, void 0, function*() {
      if (t.type === "injected") return this.storage.setItem(this.storeKey, JSON.stringify(t));
      if (!Sr(t)) {
        const r = {
            sessionKeyPair: t.session.sessionCrypto.stringifyKeypair(),
            walletPublicKey: t.session.walletPublicKey,
            bridgeUrl: t.session.bridgeUrl
          },
          o = {
            type: "http",
            connectEvent: t.connectEvent,
            session: r,
            lastWalletEventId: t.lastWalletEventId,
            nextRpcRequestId: t.nextRpcRequestId
          };
        return this.storage.setItem(this.storeKey, JSON.stringify(o))
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
    return se(this, void 0, void 0, function*() {
      return this.storage.removeItem(this.storeKey)
    })
  }
  getConnection() {
    return se(this, void 0, void 0, function*() {
      const t = yield this.storage.getItem(this.storeKey);
      if (!t) return null;
      const n = JSON.parse(t);
      if (n.type === "injected") return n;
      if ("connectEvent" in n) {
        const r = new di(n.session.sessionKeyPair);
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
        sessionCrypto: new di(n.sessionCrypto),
        connectionSource: n.connectionSource
      }
    })
  }
  getHttpConnection() {
    return se(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (!t) throw new ge("Trying to read HTTP connection source while nothing is stored");
      if (t.type === "injected") throw new ge("Trying to read HTTP connection source while injected connection is stored");
      return t
    })
  }
  getHttpPendingConnection() {
    return se(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (!t) throw new ge("Trying to read HTTP connection source while nothing is stored");
      if (t.type === "injected") throw new ge("Trying to read HTTP connection source while injected connection is stored");
      if (!Sr(t)) throw new ge("Trying to read HTTP-pending connection while http connection is stored");
      return t
    })
  }
  getInjectedConnection() {
    return se(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (!t) throw new ge("Trying to read Injected bridge connection source while nothing is stored");
      if ((t == null ? void 0 : t.type) === "http") throw new ge("Trying to read Injected bridge connection source while HTTP connection is stored");
      return t
    })
  }
  storedConnectionType() {
    return se(this, void 0, void 0, function*() {
      const t = yield this.storage.getItem(this.storeKey);
      return t ? JSON.parse(t).type : null
    })
  }
  storeLastWalletEventId(t) {
    return se(this, void 0, void 0, function*() {
      const n = yield this.getConnection();
      if (n && n.type === "http" && !Sr(n)) return n.lastWalletEventId = t, this.storeConnection(n)
    })
  }
  getLastWalletEventId() {
    return se(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (t && "lastWalletEventId" in t) return t.lastWalletEventId
    })
  }
  increaseNextRpcRequestId() {
    return se(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (t && "nextRpcRequestId" in t) {
        const n = t.nextRpcRequestId || 0;
        return t.nextRpcRequestId = n + 1, this.storeConnection(t)
      }
    })
  }
  getNextRpcRequestId() {
    return se(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      return t && "nextRpcRequestId" in t && t.nextRpcRequestId || 0
    })
  }
}
const pa = 2;
class Pr {
  constructor(t, n) {
    this.storage = t, this.walletConnectionSource = n, this.type = "http", this.standardUniversalLink = "tc://", this.pendingRequests = new Map, this.session = null, this.gateway = null, this.pendingGateways = [], this.listeners = [], this.defaultOpeningDeadlineMS = 12e3, this.defaultRetryTimeoutMS = 2e3, this.connectionStorage = new Ir(t)
  }
  static fromStorage(t) {
    return se(this, void 0, void 0, function*() {
      const r = yield new Ir(t).getHttpConnection();
      return Sr(r) ? new Pr(t, r.connectionSource) : new Pr(t, {
        bridgeUrl: r.session.bridgeUrl
      })
    })
  }
  connect(t, n) {
    var r;
    const o = en(n == null ? void 0 : n.signal);
    (r = this.abortController) === null || r === void 0 || r.abort(), this.abortController = o, this.closeGateways();
    const i = new di;
    this.session = {
      sessionCrypto: i,
      bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
    }, this.connectionStorage.storeConnection({
      type: "http",
      connectionSource: this.walletConnectionSource,
      sessionCrypto: i
    }).then(() => se(this, void 0, void 0, function*() {
      o.signal.aborted || (yield Cr(l => {
        var h;
        return this.openGateways(i, {
          openingDeadlineMS: (h = n == null ? void 0 : n.openingDeadlineMS) !== null && h !== void 0 ? h : this.defaultOpeningDeadlineMS,
          signal: l == null ? void 0 : l.signal
        })
      }, {
        attempts: Number.MAX_SAFE_INTEGER,
        delayMs: this.defaultRetryTimeoutMS,
        signal: o.signal
      }))
    }));
    const a = "universalLink" in this.walletConnectionSource && this.walletConnectionSource.universalLink ? this.walletConnectionSource.universalLink : this.standardUniversalLink;
    return this.generateUniversalLink(a, t)
  }
  restoreConnection(t) {
    var n, r;
    return se(this, void 0, void 0, function*() {
      const o = en(t == null ? void 0 : t.signal);
      if ((n = this.abortController) === null || n === void 0 || n.abort(), this.abortController = o, o.signal.aborted) return;
      this.closeGateways();
      const i = yield this.connectionStorage.getHttpConnection();
      if (!i || o.signal.aborted) return;
      const a = (r = t == null ? void 0 : t.openingDeadlineMS) !== null && r !== void 0 ? r : this.defaultOpeningDeadlineMS;
      if (Sr(i)) return this.session = {
        sessionCrypto: i.sessionCrypto,
        bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
      }, yield this.openGateways(i.sessionCrypto, {
        openingDeadlineMS: a,
        signal: o == null ? void 0 : o.signal
      });
      if (Array.isArray(this.walletConnectionSource)) throw new ge("Internal error. Connection source is array while WalletConnectionSourceHTTP was expected.");
      if (this.session = i.session, this.gateway && (Et("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.gateway = new Qo(this.storage, this.walletConnectionSource.bridgeUrl, i.session.sessionCrypto.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)), !o.signal.aborted) {
        this.listeners.forEach(l => l(i.connectEvent));
        try {
          yield Cr(l => this.gateway.registerSession({
            openingDeadlineMS: a,
            signal: l.signal
          }), {
            attempts: Number.MAX_SAFE_INTEGER,
            delayMs: this.defaultRetryTimeoutMS,
            signal: o.signal
          })
        } catch {
          yield this.disconnect({
            signal: o.signal
          });
          return
        }
      }
    })
  }
  sendRequest(t, n) {
    const r = {};
    return typeof n == "function" ? r.onRequestSent = n : (r.onRequestSent = n == null ? void 0 : n.onRequestSent, r.signal = n == null ? void 0 : n.signal, r.attempts = n == null ? void 0 : n.attempts), new Promise((o, i) => se(this, void 0, void 0, function*() {
      var a;
      if (!this.gateway || !this.session || !("walletPublicKey" in this.session)) throw new ge("Trying to send bridge request without session");
      const l = (yield this.connectionStorage.getNextRpcRequestId()).toString();
      yield this.connectionStorage.increaseNextRpcRequestId(), Et("Send http-bridge request:", Object.assign(Object.assign({}, t), {
        id: l
      }));
      const h = this.session.sessionCrypto.encrypt(JSON.stringify(Object.assign(Object.assign({}, t), {
        id: l
      })), vo(this.session.walletPublicKey));
      try {
        yield this.gateway.send(h, this.session.walletPublicKey, t.method, {
          attempts: r == null ? void 0 : r.attempts,
          signal: r == null ? void 0 : r.signal
        }), (a = r == null ? void 0 : r.onRequestSent) === null || a === void 0 || a.call(r), this.pendingRequests.set(l.toString(), o)
      } catch (v) {
        i(v)
      }
    }))
  }
  closeConnection() {
    this.closeGateways(), this.listeners = [], this.session = null, this.gateway = null
  }
  disconnect(t) {
    return se(this, void 0, void 0, function*() {
      return new Promise(n => se(this, void 0, void 0, function*() {
        let r = !1,
          o = null;
        const i = () => {
          r || (r = !0, this.removeBridgeAndSession().then(n))
        };
        try {
          this.closeGateways();
          const a = en(t == null ? void 0 : t.signal);
          o = setTimeout(() => {
            a.abort()
          }, this.defaultOpeningDeadlineMS), yield this.sendRequest({
            method: "disconnect",
            params: []
          }, {
            onRequestSent: i,
            signal: a.signal,
            attempts: 1
          })
        } catch (a) {
          Et("Disconnect error:", a), r || this.removeBridgeAndSession().then(n)
        } finally {
          o && clearTimeout(o), i()
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
    return se(this, void 0, void 0, function*() {
      const t = this.pendingGateways.map(n => n.unPause());
      this.gateway && t.push(this.gateway.unPause()), yield Promise.all(t)
    })
  }
  pendingGatewaysListener(t, n, r) {
    return se(this, void 0, void 0, function*() {
      if (!this.pendingGateways.includes(t)) {
        yield t.close();
        return
      }
      return this.closeGateways({
        except: t
      }), this.gateway && (Et("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.session.bridgeUrl = n, this.gateway = t, this.gateway.setErrorsListener(this.gatewayErrorsListener.bind(this)), this.gateway.setListener(this.gatewayListener.bind(this)), this.gatewayListener(r)
    })
  }
  gatewayListener(t) {
    return se(this, void 0, void 0, function*() {
      const n = JSON.parse(this.session.sessionCrypto.decrypt(Ai.decode(t.message).toUint8Array(), vo(t.from)));
      if (Et("Wallet message received:", n), !("event" in n)) {
        const o = n.id.toString(),
          i = this.pendingRequests.get(o);
        if (!i) {
          Et(`Response id ${o} doesn't match any request's id`);
          return
        }
        i(n), this.pendingRequests.delete(o);
        return
      }
      if (n.id !== void 0) {
        const o = yield this.connectionStorage.getLastWalletEventId();
        if (o !== void 0 && n.id <= o) {
          xn(`Received event id (=${n.id}) must be greater than stored last wallet event id (=${o}) `);
          return
        }
        n.event !== "connect" && (yield this.connectionStorage.storeLastWalletEventId(n.id))
      }
      const r = this.listeners;
      n.event === "connect" && (yield this.updateSession(n, t.from)), n.event === "disconnect" && (Et("Removing bridge and session: received disconnect event"), yield this.removeBridgeAndSession()), r.forEach(o => o(n))
    })
  }
  gatewayErrorsListener(t) {
    return se(this, void 0, void 0, function*() {
      throw new ge(`Bridge error ${JSON.stringify(t)}`)
    })
  }
  updateSession(t, n) {
    return se(this, void 0, void 0, function*() {
      this.session = Object.assign(Object.assign({}, this.session), {
        walletPublicKey: n
      });
      const r = t.payload.items.find(i => i.name === "ton_addr"),
        o = Object.assign(Object.assign({}, t), {
          payload: Object.assign(Object.assign({}, t.payload), {
            items: [r]
          })
        });
      yield this.connectionStorage.storeConnection({
        type: "http",
        session: this.session,
        lastWalletEventId: t.id,
        connectEvent: o,
        nextRpcRequestId: 0
      })
    })
  }
  removeBridgeAndSession() {
    return se(this, void 0, void 0, function*() {
      this.closeConnection(), yield this.connectionStorage.removeConnection()
    })
  }
  generateUniversalLink(t, n) {
    return bn(t) ? this.generateTGUniversalLink(t, n) : this.generateRegularUniversalLink(t, n)
  }
  generateRegularUniversalLink(t, n) {
    const r = new URL(t);
    return r.searchParams.append("v", pa.toString()), r.searchParams.append("id", this.session.sessionCrypto.sessionId), r.searchParams.append("r", JSON.stringify(n)), r.toString()
  }
  generateTGUniversalLink(t, n) {
    const o = this.generateRegularUniversalLink("about:blank", n).split("?")[1],
      i = "tonconnect-" + Li(o),
      a = this.convertToDirectLink(t),
      l = new URL(a);
    return l.searchParams.append("startapp", i), l.toString()
  }
  convertToDirectLink(t) {
    const n = new URL(t);
    return n.searchParams.has("attach") && (n.searchParams.delete("attach"), n.pathname += "/start"), n.toString()
  }
  openGateways(t, n) {
    return se(this, void 0, void 0, function*() {
      if (Array.isArray(this.walletConnectionSource)) {
        this.pendingGateways.map(r => r.close().catch()), this.pendingGateways = this.walletConnectionSource.map(r => {
          const o = new Qo(this.storage, r.bridgeUrl, t.sessionId, () => {}, () => {});
          return o.setListener(i => this.pendingGatewaysListener(o, r.bridgeUrl, i)), o
        }), yield Promise.allSettled(this.pendingGateways.map(r => Cr(o => {
          var i;
          return this.pendingGateways.some(a => a === r) ? r.registerSession({
            openingDeadlineMS: (i = n == null ? void 0 : n.openingDeadlineMS) !== null && i !== void 0 ? i : this.defaultOpeningDeadlineMS,
            signal: o.signal
          }) : r.close()
        }, {
          attempts: Number.MAX_SAFE_INTEGER,
          delayMs: this.defaultRetryTimeoutMS,
          signal: n == null ? void 0 : n.signal
        })));
        return
      } else return this.gateway && (Et("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.gateway = new Qo(this.storage, this.walletConnectionSource.bridgeUrl, t.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)), yield this.gateway.registerSession({
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

function ps(e, t) {
  return ya(e, [t])
}

function ya(e, t) {
  return !e || typeof e != "object" ? !1 : t.every(n => n in e)
}

function nc(e) {
  try {
    return !ps(e, "tonconnect") || !ps(e.tonconnect, "walletInfo") ? !1 : ya(e.tonconnect.walletInfo, ["name", "app_name", "image", "about_url", "platforms"])
  } catch {
    return !1
  }
}
let rc = class wr {
  constructor() {
    this.storage = {}
  }
  static getInstance() {
    return wr.instance || (wr.instance = new wr), wr.instance
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

function Uo() {
  if (!(typeof window > "u")) return window
}

function oc() {
  const e = Uo();
  if (!e) return [];
  try {
    return Object.keys(e)
  } catch {
    return []
  }
}

function ic() {
  if (!(typeof document > "u")) return document
}

function sc() {
  var e;
  const t = (e = Uo()) === null || e === void 0 ? void 0 : e.location.origin;
  return t ? t + "/tonconnect-manifest.json" : ""
}

function ac() {
  if (lc()) return localStorage;
  if (cc()) throw new ge("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
  return rc.getInstance()
}

function lc() {
  try {
    return typeof localStorage < "u"
  } catch {
    return !1
  }
}

function cc() {
  return typeof process < "u" && process.versions != null && process.versions.node != null
}
class Kt {
  constructor(t, n) {
    this.injectedWalletKey = n, this.type = "injected", this.unsubscribeCallback = null, this.listenSubscriptions = !1, this.listeners = [];
    const r = Kt.window;
    if (!Kt.isWindowContainsWallet(r, n)) throw new Po;
    this.connectionStorage = new Ir(t), this.injectedWallet = r[n].tonconnect
  }
  static fromStorage(t) {
    return se(this, void 0, void 0, function*() {
      const r = yield new Ir(t).getInjectedConnection();
      return new Kt(t, r.jsBridgeKey)
    })
  }
  static isWalletInjected(t) {
    return Kt.isWindowContainsWallet(this.window, t)
  }
  static isInsideWalletBrowser(t) {
    return Kt.isWindowContainsWallet(this.window, t) ? this.window[t].tonconnect.isWalletBrowser : !1
  }
  static getCurrentlyInjectedWallets() {
    return this.window ? oc().filter(([r, o]) => nc(o)).map(([r, o]) => ({
      name: o.tonconnect.walletInfo.name,
      appName: o.tonconnect.walletInfo.app_name,
      aboutUrl: o.tonconnect.walletInfo.about_url,
      imageUrl: o.tonconnect.walletInfo.image,
      tondns: o.tonconnect.walletInfo.tondns,
      jsBridgeKey: r,
      injected: !0,
      embedded: o.tonconnect.isWalletBrowser,
      platforms: o.tonconnect.walletInfo.platforms
    })) : []
  }
  static isWindowContainsWallet(t, n) {
    return !!t && n in t && typeof t[n] == "object" && "tonconnect" in t[n]
  }
  connect(t) {
    this._connect(pa, t)
  }
  restoreConnection() {
    return se(this, void 0, void 0, function*() {
      try {
        Et("Injected Provider restoring connection...");
        const t = yield this.injectedWallet.restoreConnection();
        Et("Injected Provider restoring connection response", t), t.event === "connect" ? (this.makeSubscriptions(), this.listeners.forEach(n => n(t))) : yield this.connectionStorage.removeConnection()
      } catch (t) {
        yield this.connectionStorage.removeConnection(), console.error(t)
      }
    })
  }
  closeConnection() {
    this.listenSubscriptions && this.injectedWallet.disconnect(), this.closeAllListeners()
  }
  disconnect() {
    return se(this, void 0, void 0, function*() {
      return new Promise(t => {
        const n = () => {
          this.closeAllListeners(), this.connectionStorage.removeConnection().then(t)
        };
        try {
          this.injectedWallet.disconnect(), n()
        } catch (r) {
          Et(r), this.sendRequest({
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
    return se(this, void 0, void 0, function*() {
      const o = {};
      typeof n == "function" ? o.onRequestSent = n : (o.onRequestSent = n == null ? void 0 : n.onRequestSent, o.signal = n == null ? void 0 : n.signal);
      const i = (yield this.connectionStorage.getNextRpcRequestId()).toString();
      yield this.connectionStorage.increaseNextRpcRequestId(), Et("Send injected-bridge request:", Object.assign(Object.assign({}, t), {
        id: i
      }));
      const a = this.injectedWallet.send(Object.assign(Object.assign({}, t), {
        id: i
      }));
      return a.then(l => Et("Wallet message received:", l)), (r = o == null ? void 0 : o.onRequestSent) === null || r === void 0 || r.call(o), a
    })
  }
  _connect(t, n) {
    return se(this, void 0, void 0, function*() {
      try {
        Et(`Injected Provider connect request: protocolVersion: ${t}, message:`, n);
        const r = yield this.injectedWallet.connect(t, n);
        Et("Injected Provider connect response:", r), r.event === "connect" && (yield this.updateSession(), this.makeSubscriptions()), this.listeners.forEach(o => o(r))
      } catch (r) {
        Et("Injected Provider connect error:", r);
        const o = {
          event: "connect_error",
          payload: {
            code: 0,
            message: r == null ? void 0 : r.toString()
          }
        };
        this.listeners.forEach(i => i(o))
      }
    })
  }
  makeSubscriptions() {
    this.listenSubscriptions = !0, this.unsubscribeCallback = this.injectedWallet.listen(t => {
      Et("Wallet message received:", t), this.listenSubscriptions && this.listeners.forEach(n => n(t)), t.event === "disconnect" && this.disconnect()
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
Kt.window = Uo();
class uc {
  constructor() {
    this.localStorage = ac()
  }
  getItem(t) {
    return se(this, void 0, void 0, function*() {
      return this.localStorage.getItem(t)
    })
  }
  removeItem(t) {
    return se(this, void 0, void 0, function*() {
      this.localStorage.removeItem(t)
    })
  }
  setItem(t, n) {
    return se(this, void 0, void 0, function*() {
      this.localStorage.setItem(t, n)
    })
  }
}

function In(e) {
  return ba(e) && e.injected
}

function Vr(e) {
  return In(e) && e.embedded
}

function ba(e) {
  return "jsBridgeKey" in e
}

function No(e) {
  return "bridgeUrl" in e
}
const dc = [{
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
class mo {
  constructor(t) {
    this.walletsListCache = null, this.walletsListCacheCreationTimestamp = null, this.walletsListSource = "https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json", t != null && t.walletsListSource && (this.walletsListSource = t.walletsListSource), t != null && t.cacheTTLMs && (this.cacheTTLMs = t.cacheTTLMs)
  }
  getWallets() {
    return se(this, void 0, void 0, function*() {
      return this.cacheTTLMs && this.walletsListCacheCreationTimestamp && Date.now() > this.walletsListCacheCreationTimestamp + this.cacheTTLMs && (this.walletsListCache = null), this.walletsListCache || (this.walletsListCache = this.fetchWalletsList(), this.walletsListCache.then(() => {
        this.walletsListCacheCreationTimestamp = Date.now()
      }).catch(() => {
        this.walletsListCache = null, this.walletsListCacheCreationTimestamp = null
      })), this.walletsListCache
    })
  }
  getEmbeddedWallet() {
    return se(this, void 0, void 0, function*() {
      const n = (yield this.getWallets()).filter(Vr);
      return n.length !== 1 ? null : n[0]
    })
  }
  fetchWalletsList() {
    return se(this, void 0, void 0, function*() {
      let t = [];
      try {
        if (t = yield(yield fetch(this.walletsListSource)).json(), !Array.isArray(t)) throw new Wo("Wrong wallets list format, wallets list must be an array.");
        const o = t.filter(i => !this.isCorrectWalletConfigDTO(i));
        o.length && (xn(`Wallet(s) ${o.map(i=>i.name).join(", ")} config format is wrong. They were removed from the wallets list.`), t = t.filter(i => this.isCorrectWalletConfigDTO(i)))
      } catch (r) {
        xn(r), t = dc
      }
      let n = [];
      try {
        n = Kt.getCurrentlyInjectedWallets()
      } catch (r) {
        xn(r)
      }
      return this.mergeWalletsLists(this.walletConfigDTOListToWalletConfigList(t), n)
    })
  }
  walletConfigDTOListToWalletConfigList(t) {
    return t.map(n => {
      const o = {
        name: n.name,
        appName: n.app_name,
        imageUrl: n.image,
        aboutUrl: n.about_url,
        tondns: n.tondns,
        platforms: n.platforms
      };
      return n.bridge.forEach(i => {
        if (i.type === "sse" && (o.bridgeUrl = i.url, o.universalLink = n.universal_url, o.deepLink = n.deepLink), i.type === "js") {
          const a = i.key;
          o.jsBridgeKey = a, o.injected = Kt.isWalletInjected(a), o.embedded = Kt.isInsideWalletBrowser(a)
        }
      }), o
    })
  }
  mergeWalletsLists(t, n) {
    return [...new Set(t.concat(n).map(o => o.name)).values()].map(o => {
      const i = t.find(l => l.name === o),
        a = n.find(l => l.name === o);
      return Object.assign(Object.assign({}, i && Object.assign({}, i)), a && Object.assign({}, a))
    })
  }
  isCorrectWalletConfigDTO(t) {
    if (!t || typeof t != "object") return !1;
    const n = "name" in t,
      r = "app_name" in t,
      o = "image" in t,
      i = "about_url" in t,
      a = "platforms" in t;
    if (!n || !o || !i || !a || !r || !t.platforms || !Array.isArray(t.platforms) || !t.platforms.length || !("bridge" in t) || !Array.isArray(t.bridge) || !t.bridge.length) return !1;
    const l = t.bridge;
    if (l.some(m => !m || typeof m != "object" || !("type" in m))) return !1;
    const h = l.find(m => m.type === "sse");
    if (h && (!("url" in h) || !h.url || !t.universal_url)) return !1;
    const v = l.find(m => m.type === "js");
    return !(v && (!("key" in v) || !v.key))
  }
}
class wo extends ge {
  get info() {
    return "Wallet doesn't support requested feature method."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, wo.prototype)
  }
}

function fc(e, t) {
  const n = e.includes("SendTransaction"),
    r = e.find(o => o && typeof o == "object" && o.name === "SendTransaction");
  if (!n && !r) throw new wo("Wallet doesn't support SendTransaction feature.");
  if (r && r.maxMessages !== void 0) {
    if (r.maxMessages < t.requiredMessagesNumber) throw new wo(`Wallet is not able to handle such SendTransaction request. Max support messages number is ${r.maxMessages}, but ${t.requiredMessagesNumber} is required.`);
    return
  }
  Jl("Connected wallet didn't provide information about max allowed messages in the SendTransaction request. Request may be rejected by the wallet.")
}

function Mi() {
  return {
    type: "request-version"
  }
}

function $i(e) {
  return {
    type: "response-version",
    version: e
  }
}

function On(e) {
  return {
    ton_connect_sdk_lib: e.ton_connect_sdk_lib,
    ton_connect_ui_lib: e.ton_connect_ui_lib
  }
}

function fr(e, t) {
  var n, r, o, i, a, l, h, v;
  const y = ((n = t == null ? void 0 : t.connectItems) === null || n === void 0 ? void 0 : n.tonProof) && "proof" in t.connectItems.tonProof ? "ton_proof" : "ton_addr";
  return {
    wallet_address: (o = (r = t == null ? void 0 : t.account) === null || r === void 0 ? void 0 : r.address) !== null && o !== void 0 ? o : null,
    wallet_type: (i = t == null ? void 0 : t.device.appName) !== null && i !== void 0 ? i : null,
    wallet_version: (a = t == null ? void 0 : t.device.appVersion) !== null && a !== void 0 ? a : null,
    auth_type: y,
    custom_data: Object.assign({
      chain_id: (h = (l = t == null ? void 0 : t.account) === null || l === void 0 ? void 0 : l.chain) !== null && h !== void 0 ? h : null,
      provider: (v = t == null ? void 0 : t.provider) !== null && v !== void 0 ? v : null
    }, On(e))
  }
}

function Ri(e) {
  return {
    type: "connection-started",
    custom_data: On(e)
  }
}

function Bi(e, t) {
  return Object.assign({
    type: "connection-completed",
    is_success: !0
  }, fr(e, t))
}

function Ii(e, t, n) {
  return {
    type: "connection-error",
    is_success: !1,
    error_message: t,
    error_code: n ?? null,
    custom_data: On(e)
  }
}

function Pi(e) {
  return {
    type: "connection-restoring-started",
    custom_data: On(e)
  }
}

function Wi(e, t) {
  return Object.assign({
    type: "connection-restoring-completed",
    is_success: !0
  }, fr(e, t))
}

function Ui(e, t) {
  return {
    type: "connection-restoring-error",
    is_success: !1,
    error_message: t,
    custom_data: On(e)
  }
}

function Ni(e, t) {
  var n, r, o, i;
  return {
    valid_until: (n = String(t.validUntil)) !== null && n !== void 0 ? n : null,
    from: (i = (r = t.from) !== null && r !== void 0 ? r : (o = e == null ? void 0 : e.account) === null || o === void 0 ? void 0 : o.address) !== null && i !== void 0 ? i : null,
    messages: t.messages.map(a => {
      var l, h;
      return {
        address: (l = a.address) !== null && l !== void 0 ? l : null,
        amount: (h = a.amount) !== null && h !== void 0 ? h : null
      }
    })
  }
}

function Di(e, t, n) {
  return Object.assign(Object.assign({
    type: "transaction-sent-for-signature"
  }, fr(e, t)), Ni(t, n))
}

function Oi(e, t, n, r) {
  return Object.assign(Object.assign({
    type: "transaction-signed",
    is_success: !0,
    signed_transaction: r.boc
  }, fr(e, t)), Ni(t, n))
}

function ji(e, t, n, r, o) {
  return Object.assign(Object.assign({
    type: "transaction-signing-failed",
    is_success: !1,
    error_message: r,
    error_code: o ?? null
  }, fr(e, t)), Ni(t, n))
}

function Hi(e, t, n) {
  return Object.assign({
    type: "disconnection",
    scope: n
  }, fr(e, t))
}
class Fi {
  constructor() {
    this.window = Uo()
  }
  dispatchEvent(t, n) {
    var r;
    return se(this, void 0, void 0, function*() {
      const o = new CustomEvent(t, {
        detail: n
      });
      (r = this.window) === null || r === void 0 || r.dispatchEvent(o)
    })
  }
  addEventListener(t, n, r) {
    var o;
    return se(this, void 0, void 0, function*() {
      return (o = this.window) === null || o === void 0 || o.addEventListener(t, n, r), () => {
        var i;
        return (i = this.window) === null || i === void 0 ? void 0 : i.removeEventListener(t, n)
      }
    })
  }
}
class hc {
  constructor(t) {
    var n;
    this.eventPrefix = "ton-connect-", this.tonConnectUiVersion = null, this.eventDispatcher = (n = t == null ? void 0 : t.eventDispatcher) !== null && n !== void 0 ? n : new Fi, this.tonConnectSdkVersion = t.tonConnectSdkVersion, this.init().catch()
  }
  get version() {
    return On({
      ton_connect_sdk_lib: this.tonConnectSdkVersion,
      ton_connect_ui_lib: this.tonConnectUiVersion
    })
  }
  init() {
    return se(this, void 0, void 0, function*() {
      try {
        yield this.setRequestVersionHandler(), this.tonConnectUiVersion = yield this.requestTonConnectUiVersion()
      } catch {}
    })
  }
  setRequestVersionHandler() {
    return se(this, void 0, void 0, function*() {
      yield this.eventDispatcher.addEventListener("ton-connect-request-version", () => se(this, void 0, void 0, function*() {
        yield this.eventDispatcher.dispatchEvent("ton-connect-response-version", $i(this.tonConnectSdkVersion))
      }))
    })
  }
  requestTonConnectUiVersion() {
    return se(this, void 0, void 0, function*() {
      return new Promise((t, n) => se(this, void 0, void 0, function*() {
        try {
          yield this.eventDispatcher.addEventListener("ton-connect-ui-response-version", r => {
            t(r.detail.version)
          }, {
            once: !0
          }), yield this.eventDispatcher.dispatchEvent("ton-connect-ui-request-version", Mi())
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
      const n = Ri(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionCompleted(...t) {
    try {
      const n = Bi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionError(...t) {
    try {
      const n = Ii(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringStarted(...t) {
    try {
      const n = Pi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringCompleted(...t) {
    try {
      const n = Wi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringError(...t) {
    try {
      const n = Ui(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackDisconnection(...t) {
    try {
      const n = Hi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSentForSignature(...t) {
    try {
      const n = Di(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSigned(...t) {
    try {
      const n = Oi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSigningFailed(...t) {
    try {
      const n = ji(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
}
const gc = "3.0.5";
class Wn {
  constructor(t) {
    if (this.walletsList = new mo, this._wallet = null, this.provider = null, this.statusChangeSubscriptions = [], this.statusChangeErrorSubscriptions = [], this.dappSettings = {
        manifestUrl: (t == null ? void 0 : t.manifestUrl) || sc(),
        storage: (t == null ? void 0 : t.storage) || new uc
      }, this.walletsList = new mo({
        walletsListSource: t == null ? void 0 : t.walletsListSource,
        cacheTTLMs: t == null ? void 0 : t.walletsListCacheTTLMs
      }), this.tracker = new hc({
        eventDispatcher: t == null ? void 0 : t.eventDispatcher,
        tonConnectSdkVersion: gc
      }), !this.dappSettings.manifestUrl) throw new Ti("Dapp tonconnect-manifest.json must be specified if window.location.origin is undefined. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest");
    this.bridgeConnectionStorage = new Ir(this.dappSettings.storage), t != null && t.disableAutoPauseConnection || this.addWindowFocusAndBlurSubscriptions()
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
    var r, o;
    const i = {};
    if (typeof n == "object" && "tonProof" in n && (i.request = n), typeof n == "object" && ("openingDeadlineMS" in n || "signal" in n || "request" in n) && (i.request = n == null ? void 0 : n.request, i.openingDeadlineMS = n == null ? void 0 : n.openingDeadlineMS, i.signal = n == null ? void 0 : n.signal), this.connected) throw new Io;
    const a = en(i == null ? void 0 : i.signal);
    if ((r = this.abortController) === null || r === void 0 || r.abort(), this.abortController = a, a.signal.aborted) throw new ge("Connection was aborted");
    return (o = this.provider) === null || o === void 0 || o.closeConnection(), this.provider = this.createProvider(t), a.signal.addEventListener("abort", () => {
      var l;
      (l = this.provider) === null || l === void 0 || l.closeConnection(), this.provider = null
    }), this.tracker.trackConnectionStarted(), this.provider.connect(this.createConnectRequest(i == null ? void 0 : i.request), {
      openingDeadlineMS: i == null ? void 0 : i.openingDeadlineMS,
      signal: a.signal
    })
  }
  restoreConnection(t) {
    var n, r;
    return se(this, void 0, void 0, function*() {
      this.tracker.trackConnectionRestoringStarted();
      const o = en(t == null ? void 0 : t.signal);
      if ((n = this.abortController) === null || n === void 0 || n.abort(), this.abortController = o, o.signal.aborted) {
        this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
        return
      }
      const [i, a] = yield Promise.all([this.bridgeConnectionStorage.storedConnectionType(), this.walletsList.getEmbeddedWallet()]);
      if (o.signal.aborted) {
        this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
        return
      }
      let l = null;
      try {
        switch (i) {
          case "http":
            l = yield Pr.fromStorage(this.dappSettings.storage);
            break;
          case "injected":
            l = yield Kt.fromStorage(this.dappSettings.storage);
            break;
          default:
            if (a) l = this.createProvider(a);
            else return
        }
      } catch {
        this.tracker.trackConnectionRestoringError("Provider is not restored"), yield this.bridgeConnectionStorage.removeConnection(), l == null || l.closeConnection(), l = null;
        return
      }
      if (o.signal.aborted) {
        l == null || l.closeConnection(), this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
        return
      }
      if (!l) {
        xn("Provider is not restored"), this.tracker.trackConnectionRestoringError("Provider is not restored");
        return
      }(r = this.provider) === null || r === void 0 || r.closeConnection(), this.provider = l, l.listen(this.walletEventsListener.bind(this));
      const h = () => {
        this.tracker.trackConnectionRestoringError("Connection restoring was aborted"), l == null || l.closeConnection(), l = null
      };
      o.signal.addEventListener("abort", h);
      const v = Cr(y => se(this, void 0, void 0, function*() {
          yield l == null ? void 0 : l.restoreConnection({
            openingDeadlineMS: t == null ? void 0 : t.openingDeadlineMS,
            signal: y.signal
          }), o.signal.removeEventListener("abort", h), this.connected ? this.tracker.trackConnectionRestoringCompleted(this.wallet) : this.tracker.trackConnectionRestoringError("Connection restoring failed")
        }), {
          attempts: Number.MAX_SAFE_INTEGER,
          delayMs: 2e3,
          signal: t == null ? void 0 : t.signal
        }),
        m = new Promise(y => setTimeout(() => y(), 12e3));
      return Promise.race([v, m])
    })
  }
  sendTransaction(t, n) {
    return se(this, void 0, void 0, function*() {
      const r = {};
      typeof n == "function" ? r.onRequestSent = n : (r.onRequestSent = n == null ? void 0 : n.onRequestSent, r.signal = n == null ? void 0 : n.signal);
      const o = en(r == null ? void 0 : r.signal);
      if (o.signal.aborted) throw new ge("Transaction sending was aborted");
      this.checkConnection(), fc(this.wallet.device.features, {
        requiredMessagesNumber: t.messages.length
      }), this.tracker.trackTransactionSentForSignature(this.wallet, t);
      const {
        validUntil: i
      } = t, a = Kl(t, ["validUntil"]), l = t.from || this.account.address, h = t.network || this.account.chain, v = yield this.provider.sendRequest(ro.convertToRpcRequest(Object.assign(Object.assign({}, a), {
        valid_until: i,
        from: l,
        network: h
      })), {
        onRequestSent: r.onRequestSent,
        signal: o.signal
      });
      if (ro.isError(v)) return this.tracker.trackTransactionSigningFailed(this.wallet, t, v.error.message, v.error.code), ro.parseAndThrowError(v);
      const m = ro.convertFromRpcResponse(v);
      return this.tracker.trackTransactionSigned(this.wallet, t, m), m
    })
  }
  disconnect(t) {
    var n;
    return se(this, void 0, void 0, function*() {
      if (!this.connected) throw new Rr;
      const r = en(t == null ? void 0 : t.signal),
        o = this.abortController;
      if (this.abortController = r, r.signal.aborted) throw new ge("Disconnect was aborted");
      this.onWalletDisconnected("dapp"), yield(n = this.provider) === null || n === void 0 ? void 0 : n.disconnect({
        signal: r.signal
      }), o == null || o.abort()
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
    const t = ic();
    if (t) try {
      t.addEventListener("visibilitychange", () => {
        t.hidden ? this.pauseConnection() : this.unPauseConnection().catch()
      })
    } catch (n) {
      xn("Cannot subscribe to the document.visibilitychange: ", n)
    }
  }
  createProvider(t) {
    let n;
    return !Array.isArray(t) && Vl(t) ? n = new Kt(this.dappSettings.storage, t.jsBridgeKey) : n = new Pr(this.dappSettings.storage, t), n.listen(this.walletEventsListener.bind(this)), n
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
    const n = t.items.find(i => i.name === "ton_addr"),
      r = t.items.find(i => i.name === "ton_proof");
    if (!n) throw new ge("ton_addr connection item was not found");
    const o = {
      device: t.device,
      provider: this.provider.type,
      account: {
        address: n.address,
        chain: n.network,
        walletStateInit: n.walletStateInit,
        publicKey: n.publicKey
      }
    };
    r && (o.connectItems = {
      tonProof: r
    }), this.wallet = o, this.tracker.trackConnectionCompleted(o)
  }
  onWalletConnectError(t) {
    const n = Zl.parseError(t);
    if (this.statusChangeErrorSubscriptions.forEach(r => r(n)), Et(n), this.tracker.trackConnectionError(t.message, t.code), n instanceof Bo || n instanceof Ro) throw xn(n), n
  }
  onWalletDisconnected(t) {
    this.tracker.trackDisconnection(this.wallet, t), this.wallet = null
  }
  checkConnection() {
    if (!this.connected) throw new Rr
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
Wn.walletsList = new mo;
Wn.isWalletInjected = e => Kt.isWalletInjected(e);
Wn.isInsideWalletBrowser = e => Kt.isInsideWalletBrowser(e);
const vc = 81,
  mc = 128;

function Ki(e, t = !1) {
  const {
    wc: n,
    hex: r
  } = wc(e);
  let o = vc;
  t && (o |= mc);
  const i = new Int8Array(34);
  i[0] = o, i[1] = n, i.set(r, 2);
  const a = new Uint8Array(36);
  return a.set(i), a.set(pc(i), 34), Ai.encode(a).replace(/\+/g, "-").replace(/\//g, "_")
}

function wc(e) {
  if (!e.includes(":")) throw new Zn(`Wrong address ${e}. Address must include ":".`);
  const t = e.split(":");
  if (t.length !== 2) throw new Zn(`Wrong address ${e}. Address must include ":" only once.`);
  const n = parseInt(t[0]);
  if (n !== 0 && n !== -1) throw new Zn(`Wrong address ${e}. WC must be eq 0 or -1, but ${n} received.`);
  const r = t[1];
  if ((r == null ? void 0 : r.length) !== 64) throw new Zn(`Wrong address ${e}. Hex part must be 64bytes length, but ${r==null?void 0:r.length} received.`);
  return {
    wc: n,
    hex: yc(r)
  }
}

function pc(e) {
  let n = 0;
  const r = new Uint8Array(e.length + 2);
  r.set(e);
  for (let o of r) {
    let i = 128;
    for (; i > 0;) n <<= 1, o & i && (n += 1), i >>= 1, n > 65535 && (n &= 65535, n ^= 4129)
  }
  return new Uint8Array([Math.floor(n / 256), n % 256])
}
const fi = {};
for (let e = 0; e <= 255; e++) {
  let t = e.toString(16);
  t.length < 2 && (t = "0" + t), fi[t] = e
}

function yc(e) {
  e = e.toLowerCase();
  const t = e.length;
  if (t % 2 !== 0) throw new Br("Hex string must have length a multiple of 2: " + e);
  const n = t / 2,
    r = new Uint8Array(n);
  for (let o = 0; o < n; o++) {
    const i = o * 2,
      a = e.substring(i, i + 2);
    if (!fi.hasOwnProperty(a)) throw new Br("Invalid hex character: " + a);
    r[o] = fi[a]
  }
  return r
}
var hi = {
  exports: {}
};
(function(e, t) {
  (function(n, r) {
    var o = "1.0.39",
      i = "",
      a = "?",
      l = "function",
      h = "undefined",
      v = "object",
      m = "string",
      y = "major",
      w = "model",
      C = "name",
      b = "type",
      S = "vendor",
      M = "version",
      ee = "architecture",
      V = "console",
      D = "mobile",
      z = "tablet",
      B = "smarttv",
      q = "wearable",
      P = "embedded",
      R = 500,
      E = "Amazon",
      W = "Apple",
      k = "ASUS",
      x = "BlackBerry",
      J = "Browser",
      G = "Chrome",
      Q = "Edge",
      me = "Firefox",
      Ee = "Google",
      Fe = "Huawei",
      Xe = "LG",
      ft = "Microsoft",
      It = "Motorola",
      Ct = "Opera",
      st = "Samsung",
      pt = "Sharp",
      Re = "Sony",
      ht = "Xiaomi",
      Ln = "Zebra",
      U = "Facebook",
      N = "Chromium OS",
      $ = "Mac OS",
      F = " Browser",
      K = function(Ne, Ke) {
        var ke = {};
        for (var nt in Ne) Ke[nt] && Ke[nt].length % 2 === 0 ? ke[nt] = Ke[nt].concat(Ne[nt]) : ke[nt] = Ne[nt];
        return ke
      },
      te = function(Ne) {
        for (var Ke = {}, ke = 0; ke < Ne.length; ke++) Ke[Ne[ke].toUpperCase()] = Ne[ke];
        return Ke
      },
      we = function(Ne, Ke) {
        return typeof Ne === m ? fe(Ke).indexOf(fe(Ne)) !== -1 : !1
      },
      fe = function(Ne) {
        return Ne.toLowerCase()
      },
      tt = function(Ne) {
        return typeof Ne === m ? Ne.replace(/[^\d\.]/g, i).split(".")[0] : r
      },
      lt = function(Ne, Ke) {
        if (typeof Ne === m) return Ne = Ne.replace(/^\s\s*/, i), typeof Ke === h ? Ne : Ne.substring(0, R)
      },
      pe = function(Ne, Ke) {
        for (var ke = 0, nt, Jt, Ft, Ve, Ce, Pt; ke < Ke.length && !Ce;) {
          var nn = Ke[ke],
            $n = Ke[ke + 1];
          for (nt = Jt = 0; nt < nn.length && !Ce && nn[nt];)
            if (Ce = nn[nt++].exec(Ne), Ce)
              for (Ft = 0; Ft < $n.length; Ft++) Pt = Ce[++Jt], Ve = $n[Ft], typeof Ve === v && Ve.length > 0 ? Ve.length === 2 ? typeof Ve[1] == l ? this[Ve[0]] = Ve[1].call(this, Pt) : this[Ve[0]] = Ve[1] : Ve.length === 3 ? typeof Ve[1] === l && !(Ve[1].exec && Ve[1].test) ? this[Ve[0]] = Pt ? Ve[1].call(this, Pt, Ve[2]) : r : this[Ve[0]] = Pt ? Pt.replace(Ve[1], Ve[2]) : r : Ve.length === 4 && (this[Ve[0]] = Pt ? Ve[3].call(this, Pt.replace(Ve[1], Ve[2])) : r) : this[Ve] = Pt || r;
          ke += 2
        }
      },
      ct = function(Ne, Ke) {
        for (var ke in Ke)
          if (typeof Ke[ke] === v && Ke[ke].length > 0) {
            for (var nt = 0; nt < Ke[ke].length; nt++)
              if (we(Ke[ke][nt], Ne)) return ke === a ? r : ke
          } else if (we(Ke[ke], Ne)) return ke === a ? r : ke;
        return Ke.hasOwnProperty("*") ? Ke["*"] : Ne
      },
      St = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      },
      Mn = {
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
      gn = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [M, [C, "Chrome"]],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [M, [C, "Edge"]],
          [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
          [C, M],
          [/opios[\/ ]+([\w\.]+)/i],
          [M, [C, Ct + " Mini"]],
          [/\bop(?:rg)?x\/([\w\.]+)/i],
          [M, [C, Ct + " GX"]],
          [/\bopr\/([\w\.]+)/i],
          [M, [C, Ct]],
          [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
          [M, [C, "Baidu"]],
          [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
          [C, M],
          [/quark(?:pc)?\/([-\w\.]+)/i],
          [M, [C, "Quark"]],
          [/\bddg\/([\w\.]+)/i],
          [M, [C, "DuckDuckGo"]],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [M, [C, "UC" + J]],
          [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
          [M, [C, "WeChat"]],
          [/konqueror\/([\w\.]+)/i],
          [M, [C, "Konqueror"]],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [M, [C, "IE"]],
          [/ya(?:search)?browser\/([\w\.]+)/i],
          [M, [C, "Yandex"]],
          [/slbrowser\/([\w\.]+)/i],
          [M, [C, "Smart Lenovo " + J]],
          [/(avast|avg)\/([\w\.]+)/i],
          [
            [C, /(.+)/, "$1 Secure " + J], M
          ],
          [/\bfocus\/([\w\.]+)/i],
          [M, [C, me + " Focus"]],
          [/\bopt\/([\w\.]+)/i],
          [M, [C, Ct + " Touch"]],
          [/coc_coc\w+\/([\w\.]+)/i],
          [M, [C, "Coc Coc"]],
          [/dolfin\/([\w\.]+)/i],
          [M, [C, "Dolphin"]],
          [/coast\/([\w\.]+)/i],
          [M, [C, Ct + " Coast"]],
          [/miuibrowser\/([\w\.]+)/i],
          [M, [C, "MIUI " + J]],
          [/fxios\/([-\w\.]+)/i],
          [M, [C, me]],
          [/\bqihu|(qi?ho?o?|360)browser/i],
          [
            [C, "360" + F]
          ],
          [/\b(qq)\/([\w\.]+)/i],
          [
            [C, /(.+)/, "$1Browser"], M
          ],
          [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
          [
            [C, /(.+)/, "$1" + F], M
          ],
          [/samsungbrowser\/([\w\.]+)/i],
          [M, [C, st + " Internet"]],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [
            [C, /_/g, " "], M
          ],
          [/metasr[\/ ]?([\d\.]+)/i],
          [M, [C, "Sogou Explorer"]],
          [/(sogou)mo\w+\/([\d\.]+)/i],
          [
            [C, "Sogou Mobile"], M
          ],
          [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
          [C, M],
          [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
          [C],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [
            [C, U], M
          ],
          [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
          [C, M],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [M, [C, "GSA"]],
          [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
          [M, [C, "TikTok"]],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [M, [C, G + " Headless"]],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [
            [C, G + " WebView"], M
          ],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [M, [C, "Android " + J]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [C, M],
          [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
          [M, [C, "Mobile Safari"]],
          [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
          [M, C],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [C, [M, ct, St]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [C, M],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [
            [C, "Netscape"], M
          ],
          [/(wolvic)\/([\w\.]+)/i],
          [C, M],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [M, [C, me + " Reality"]],
          [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
          [C, [M, /_/g, "."]],
          [/(cobalt)\/([\w\.]+)/i],
          [C, [M, /master.|lts./, ""]]
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
          [
            [ee, "amd64"]
          ],
          [/(ia32(?=;))/i],
          [
            [ee, fe]
          ],
          [/((?:i[346]|x)86)[;\)]/i],
          [
            [ee, "ia32"]
          ],
          [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
          [
            [ee, "arm64"]
          ],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [
            [ee, "armhf"]
          ],
          [/windows (ce|mobile); ppc;/i],
          [
            [ee, "arm"]
          ],
          [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
          [
            [ee, /ower/, i, fe]
          ],
          [/(sun4\w)[;\)]/i],
          [
            [ee, "sparc"]
          ],
          [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
          [
            [ee, fe]
          ]
        ],
        device: [
          [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
          [w, [S, st],
            [b, z]
          ],
          [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
          [w, [S, st],
            [b, D]
          ],
          [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
          [w, [S, W],
            [b, D]
          ],
          [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
          [w, [S, W],
            [b, z]
          ],
          [/(macintosh);/i],
          [w, [S, W]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [w, [S, pt],
            [b, D]
          ],
          [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
          [w, [S, Fe],
            [b, z]
          ],
          [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
          [w, [S, Fe],
            [b, D]
          ],
          [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
          [
            [w, /_/g, " "],
            [S, ht],
            [b, D]
          ],
          [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
          [
            [w, /_/g, " "],
            [S, ht],
            [b, z]
          ],
          [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
          [w, [S, "OPPO"],
            [b, D]
          ],
          [/\b(opd2\d{3}a?) bui/i],
          [w, [S, "OPPO"],
            [b, z]
          ],
          [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [w, [S, "Vivo"],
            [b, D]
          ],
          [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
          [w, [S, "Realme"],
            [b, D]
          ],
          [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
          [w, [S, It],
            [b, D]
          ],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [w, [S, It],
            [b, z]
          ],
          [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [w, [S, Xe],
            [b, z]
          ],
          [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
          [w, [S, Xe],
            [b, D]
          ],
          [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
          [w, [S, "Lenovo"],
            [b, z]
          ],
          [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
          [
            [w, /_/g, " "],
            [S, "Nokia"],
            [b, D]
          ],
          [/(pixel c)\b/i],
          [w, [S, Ee],
            [b, z]
          ],
          [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
          [w, [S, Ee],
            [b, D]
          ],
          [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
          [w, [S, Re],
            [b, D]
          ],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [w, "Xperia Tablet"],
            [S, Re],
            [b, z]
          ],
          [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
          [w, [S, "OnePlus"],
            [b, D]
          ],
          [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
          [w, [S, E],
            [b, z]
          ],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [w, /(.+)/g, "Fire Phone $1"],
            [S, E],
            [b, D]
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [w, S, [b, z]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
          [w, [S, x],
            [b, D]
          ],
          [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
          [w, [S, k],
            [b, z]
          ],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [w, [S, k],
            [b, D]
          ],
          [/(nexus 9)/i],
          [w, [S, "HTC"],
            [b, z]
          ],
          [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
          [S, [w, /_/g, " "],
            [b, D]
          ],
          [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
          [w, [S, "TCL"],
            [b, z]
          ],
          [/(itel) ((\w+))/i],
          [
            [S, fe], w, [b, ct, {
              tablet: ["p10001l", "w7001"],
              "*": "mobile"
            }]
          ],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [w, [S, "Acer"],
            [b, z]
          ],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [w, [S, "Meizu"],
            [b, D]
          ],
          [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
          [w, [S, "Ulefone"],
            [b, D]
          ],
          [/droid.+; (a(?:015|06[35]|142p?))/i],
          [w, [S, "Nothing"],
            [b, D]
          ],
          [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
          [S, w, [b, D]],
          [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
          [S, w, [b, z]],
          [/(surface duo)/i],
          [w, [S, ft],
            [b, z]
          ],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [w, [S, "Fairphone"],
            [b, D]
          ],
          [/(u304aa)/i],
          [w, [S, "AT&T"],
            [b, D]
          ],
          [/\bsie-(\w*)/i],
          [w, [S, "Siemens"],
            [b, D]
          ],
          [/\b(rct\w+) b/i],
          [w, [S, "RCA"],
            [b, z]
          ],
          [/\b(venue[\d ]{2,7}) b/i],
          [w, [S, "Dell"],
            [b, z]
          ],
          [/\b(q(?:mv|ta)\w+) b/i],
          [w, [S, "Verizon"],
            [b, z]
          ],
          [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
          [w, [S, "Barnes & Noble"],
            [b, z]
          ],
          [/\b(tm\d{3}\w+) b/i],
          [w, [S, "NuVision"],
            [b, z]
          ],
          [/\b(k88) b/i],
          [w, [S, "ZTE"],
            [b, z]
          ],
          [/\b(nx\d{3}j) b/i],
          [w, [S, "ZTE"],
            [b, D]
          ],
          [/\b(gen\d{3}) b.+49h/i],
          [w, [S, "Swiss"],
            [b, D]
          ],
          [/\b(zur\d{3}) b/i],
          [w, [S, "Swiss"],
            [b, z]
          ],
          [/\b((zeki)?tb.*\b) b/i],
          [w, [S, "Zeki"],
            [b, z]
          ],
          [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
          [
            [S, "Dragon Touch"], w, [b, z]
          ],
          [/\b(ns-?\w{0,9}) b/i],
          [w, [S, "Insignia"],
            [b, z]
          ],
          [/\b((nxa|next)-?\w{0,9}) b/i],
          [w, [S, "NextBook"],
            [b, z]
          ],
          [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
          [
            [S, "Voice"], w, [b, D]
          ],
          [/\b(lvtel\-)?(v1[12]) b/i],
          [
            [S, "LvTel"], w, [b, D]
          ],
          [/\b(ph-1) /i],
          [w, [S, "Essential"],
            [b, D]
          ],
          [/\b(v(100md|700na|7011|917g).*\b) b/i],
          [w, [S, "Envizen"],
            [b, z]
          ],
          [/\b(trio[-\w\. ]+) b/i],
          [w, [S, "MachSpeed"],
            [b, z]
          ],
          [/\btu_(1491) b/i],
          [w, [S, "Rotor"],
            [b, z]
          ],
          [/(shield[\w ]+) b/i],
          [w, [S, "Nvidia"],
            [b, z]
          ],
          [/(sprint) (\w+)/i],
          [S, w, [b, D]],
          [/(kin\.[onetw]{3})/i],
          [
            [w, /\./g, " "],
            [S, ft],
            [b, D]
          ],
          [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [w, [S, Ln],
            [b, z]
          ],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [w, [S, Ln],
            [b, D]
          ],
          [/smart-tv.+(samsung)/i],
          [S, [b, B]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [w, /^/, "SmartTV"],
            [S, st],
            [b, B]
          ],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [S, Xe],
            [b, B]
          ],
          [/(apple) ?tv/i],
          [S, [w, W + " TV"],
            [b, B]
          ],
          [/crkey/i],
          [
            [w, G + "cast"],
            [S, Ee],
            [b, B]
          ],
          [/droid.+aft(\w+)( bui|\))/i],
          [w, [S, E],
            [b, B]
          ],
          [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
          [w, [S, pt],
            [b, B]
          ],
          [/(bravia[\w ]+)( bui|\))/i],
          [w, [S, Re],
            [b, B]
          ],
          [/(mitv-\w{5}) bui/i],
          [w, [S, ht],
            [b, B]
          ],
          [/Hbbtv.*(technisat) (.*);/i],
          [S, w, [b, B]],
          [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
          [
            [S, lt],
            [w, lt],
            [b, B]
          ],
          [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
          [
            [b, B]
          ],
          [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
          [S, w, [b, V]],
          [/droid.+; (shield) bui/i],
          [w, [S, "Nvidia"],
            [b, V]
          ],
          [/(playstation [345portablevi]+)/i],
          [w, [S, Re],
            [b, V]
          ],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [w, [S, ft],
            [b, V]
          ],
          [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
          [w, [S, st],
            [b, q]
          ],
          [/((pebble))app/i],
          [S, w, [b, q]],
          [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
          [w, [S, W],
            [b, q]
          ],
          [/droid.+; (glass) \d/i],
          [w, [S, Ee],
            [b, q]
          ],
          [/droid.+; (wt63?0{2,3})\)/i],
          [w, [S, Ln],
            [b, q]
          ],
          [/(quest( \d| pro)?)/i],
          [w, [S, U],
            [b, q]
          ],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [S, [b, P]],
          [/(aeobc)\b/i],
          [w, [S, E],
            [b, P]
          ],
          [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
          [w, [b, D]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
          [w, [b, z]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [
            [b, z]
          ],
          [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
          [
            [b, D]
          ],
          [/(android[-\w\. ]{0,9});.+buil/i],
          [w, [S, "Generic"]]
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [M, [C, Q + "HTML"]],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [M, [C, "Blink"]],
          [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
          [C, M],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [M, C]
        ],
        os: [
          [/microsoft (windows) (vista|xp)/i],
          [C, M],
          [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
          [C, [M, ct, Mn]],
          [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
          [
            [M, ct, Mn],
            [C, "Windows"]
          ],
          [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
          [
            [M, /_/g, "."],
            [C, "iOS"]
          ],
          [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
          [
            [C, $],
            [M, /_/g, "."]
          ],
          [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
          [M, C],
          [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
          [C, M],
          [/\(bb(10);/i],
          [M, [C, x]],
          [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
          [M, [C, "Symbian"]],
          [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
          [M, [C, me + " OS"]],
          [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
          [M, [C, "webOS"]],
          [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
          [M, [C, "watchOS"]],
          [/crkey\/([\d\.]+)/i],
          [M, [C, G + "cast"]],
          [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
          [
            [C, N], M
          ],
          [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
          [C, M],
          [/(sunos) ?([\w\.\d]*)/i],
          [
            [C, "Solaris"], M
          ],
          [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
          [C, M]
        ]
      },
      Tt = function(Ne, Ke) {
        if (typeof Ne === v && (Ke = Ne, Ne = r), !(this instanceof Tt)) return new Tt(Ne, Ke).getResult();
        var ke = typeof n !== h && n.navigator ? n.navigator : r,
          nt = Ne || (ke && ke.userAgent ? ke.userAgent : i),
          Jt = ke && ke.userAgentData ? ke.userAgentData : r,
          Ft = Ke ? K(gn, Ke) : gn,
          Ve = ke && ke.userAgent == nt;
        return this.getBrowser = function() {
          var Ce = {};
          return Ce[C] = r, Ce[M] = r, pe.call(Ce, nt, Ft.browser), Ce[y] = tt(Ce[M]), Ve && ke && ke.brave && typeof ke.brave.isBrave == l && (Ce[C] = "Brave"), Ce
        }, this.getCPU = function() {
          var Ce = {};
          return Ce[ee] = r, pe.call(Ce, nt, Ft.cpu), Ce
        }, this.getDevice = function() {
          var Ce = {};
          return Ce[S] = r, Ce[w] = r, Ce[b] = r, pe.call(Ce, nt, Ft.device), Ve && !Ce[b] && Jt && Jt.mobile && (Ce[b] = D), Ve && Ce[w] == "Macintosh" && ke && typeof ke.standalone !== h && ke.maxTouchPoints && ke.maxTouchPoints > 2 && (Ce[w] = "iPad", Ce[b] = z), Ce
        }, this.getEngine = function() {
          var Ce = {};
          return Ce[C] = r, Ce[M] = r, pe.call(Ce, nt, Ft.engine), Ce
        }, this.getOS = function() {
          var Ce = {};
          return Ce[C] = r, Ce[M] = r, pe.call(Ce, nt, Ft.os), Ve && !Ce[C] && Jt && Jt.platform && Jt.platform != "Unknown" && (Ce[C] = Jt.platform.replace(/chrome os/i, N).replace(/macos/i, $)), Ce
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
          return nt
        }, this.setUA = function(Ce) {
          return nt = typeof Ce === m && Ce.length > R ? lt(Ce, R) : Ce, this
        }, this.setUA(nt), this
      };
    Tt.VERSION = o, Tt.BROWSER = te([C, M, y]), Tt.CPU = te([ee]), Tt.DEVICE = te([w, S, b, V, D, B, z, q, P]), Tt.ENGINE = Tt.OS = te([C, M]), e.exports && (t = e.exports = Tt), t.UAParser = Tt;
    var Ot = typeof n !== h && (n.jQuery || n.Zepto);
    if (Ot && !Ot.ua) {
      var Vt = new Tt;
      Ot.ua = Vt.getResult(), Ot.ua.get = function() {
        return Vt.getUA()
      }, Ot.ua.set = function(Ne) {
        Vt.setUA(Ne);
        var Ke = Vt.getResult();
        for (var ke in Ke) Ot.ua[ke] = Ke[ke]
      }
    }
  })(typeof window == "object" ? window : ha)
})(hi, hi.exports);
var bc = hi.exports;
const xc = jr(bc);
var Cc = function(t) {
  return Sc(t) && !_c(t)
};

function Sc(e) {
  return !!e && typeof e == "object"
}

function _c(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Ac(e)
}
var Ec = typeof Symbol == "function" && Symbol.for,
  kc = Ec ? Symbol.for("react.element") : 60103;

function Ac(e) {
  return e.$$typeof === kc
}

function Tc(e) {
  return Array.isArray(e) ? [] : {}
}

function Wr(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? ar(Tc(e), e, t) : e
}

function Lc(e, t, n) {
  return e.concat(t).map(function(r) {
    return Wr(r, n)
  })
}

function Mc(e, t) {
  if (!t.customMerge) return ar;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : ar
}

function $c(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t)
  }) : []
}

function ys(e) {
  return Object.keys(e).concat($c(e))
}

function xa(e, t) {
  try {
    return t in e
  } catch {
    return !1
  }
}

function Rc(e, t) {
  return xa(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
}

function Bc(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && ys(e).forEach(function(o) {
    r[o] = Wr(e[o], n)
  }), ys(t).forEach(function(o) {
    Rc(e, o) || (xa(e, o) && n.isMergeableObject(t[o]) ? r[o] = Mc(o, n)(e[o], t[o], n) : r[o] = Wr(t[o], n))
  }), r
}

function ar(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Lc, n.isMergeableObject = n.isMergeableObject || Cc, n.cloneUnlessOtherwiseSpecified = Wr;
  var r = Array.isArray(t),
    o = Array.isArray(e),
    i = r === o;
  return i ? r ? n.arrayMerge(e, t, n) : Bc(e, t, n) : Wr(t, n)
}
ar.all = function(t, n) {
  if (!Array.isArray(t)) throw new Error("first argument should be an array");
  return t.reduce(function(r, o) {
    return ar(r, o, n)
  }, {})
};
var Ic = ar,
  Pc = Ic;
const Wc = jr(Pc);
var Ca = {
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
      for (var i = "", a = 0; a < arguments.length; a++) {
        var l = arguments[a];
        l && (i = o(i, r(l)))
      }
      return i
    }

    function r(i) {
      if (typeof i == "string" || typeof i == "number") return i;
      if (typeof i != "object") return "";
      if (Array.isArray(i)) return n.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) return i.toString();
      var a = "";
      for (var l in i) t.call(i, l) && i[l] && (a = o(a, l));
      return a
    }

    function o(i, a) {
      return a ? i ? i + " " + a : i + a : i
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n
  })()
})(Ca);
var Uc = Ca.exports;
const fo = jr(Uc);
var Nc = Object.defineProperty,
  Dc = Object.defineProperties,
  Oc = Object.getOwnPropertyDescriptors,
  bs = Object.getOwnPropertySymbols,
  jc = Object.prototype.hasOwnProperty,
  Hc = Object.prototype.propertyIsEnumerable,
  gi = (e, t, n) => t in e ? Nc(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : e[t] = n,
  et = (e, t) => {
    for (var n in t || (t = {})) jc.call(t, n) && gi(e, n, t[n]);
    if (bs)
      for (var n of bs(t)) Hc.call(t, n) && gi(e, n, t[n]);
    return e
  },
  Gt = (e, t) => Dc(e, Oc(t)),
  ye = (e, t, n) => (gi(e, typeof t != "symbol" ? t + "" : t, n), n),
  Je = (e, t, n) => new Promise((r, o) => {
    var i = h => {
        try {
          l(n.next(h))
        } catch (v) {
          o(v)
        }
      },
      a = h => {
        try {
          l(n.throw(h))
        } catch (v) {
          o(v)
        }
      },
      l = h => h.done ? r(h.value) : Promise.resolve(h.value).then(i, a);
    l((n = n.apply(e, t)).next())
  }),
  xs, Cs, Ss, _s, Es, ks, As, Ts;
const dt = {};

function Fc(e) {
  dt.context = e
}
const Kc = (e, t) => e === t,
  tn = Symbol("solid-proxy"),
  vi = Symbol("solid-track"),
  po = {
    equals: Kc
  };
let Sa = Ma;
const kn = 1,
  yo = 2,
  _a = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  },
  Jo = {};
var kt = null;
let Yn = null,
  gt = null,
  Dt = null,
  Cn = null,
  Vi = 0;

function _r(e, t) {
  const n = gt,
    r = kt,
    o = e.length === 0,
    i = o ? _a : {
      owned: null,
      cleanups: null,
      context: null,
      owner: t === void 0 ? r : t
    },
    a = o ? e : () => e(() => Mt(() => Ho(i)));
  kt = i, gt = null;
  try {
    return Un(a, !0)
  } finally {
    gt = n, kt = r
  }
}

function xe(e, t) {
  t = t ? Object.assign({}, po, t) : po;
  const n = {
      value: e,
      observers: null,
      observerSlots: null,
      comparator: t.equals || void 0
    },
    r = o => (typeof o == "function" && (o = o(n.value)), La(n, o));
  return [Ta.bind(n), r]
}

function bo(e, t, n) {
  const r = jo(e, t, !0, kn);
  hr(r)
}

function Oe(e, t, n) {
  const r = jo(e, t, !1, kn);
  hr(r)
}

function At(e, t, n) {
  Sa = Qc;
  const r = jo(e, t, !1, kn);
  r.user = !0, Cn ? Cn.push(r) : hr(r)
}

function ie(e, t, n) {
  n = n ? Object.assign({}, po, n) : po;
  const r = jo(e, t, !0, 0);
  return r.observers = null, r.observerSlots = null, r.comparator = n.equals || void 0, hr(r), Ta.bind(r)
}

function Vc(e, t, n) {
  let r, o, i;
  arguments.length === 2 && typeof t == "object" || arguments.length === 1 ? (r = !0, o = e, i = {}) : (r = e, o = t, i = {});
  let a = null,
    l = Jo,
    h = null,
    v = !1,
    m = "initialValue" in i,
    y = typeof r == "function" && ie(r);
  const w = new Set,
    [C, b] = (i.storage || xe)(i.initialValue),
    [S, M] = xe(void 0),
    [ee, V] = xe(void 0, {
      equals: !1
    }),
    [D, z] = xe(m ? "ready" : "unresolved");
  if (dt.context) {
    h = `${dt.context.id}${dt.context.count++}`;
    let E;
    i.ssrLoadFrom === "initial" ? l = i.initialValue : dt.load && (E = dt.load(h)) && (l = E[0])
  }

  function B(E, W, k, x) {
    return a === E && (a = null, m = !0, (E === l || W === l) && i.onHydrated && queueMicrotask(() => i.onHydrated(x, {
      value: W
    })), l = Jo, q(W, k)), W
  }

  function q(E, W) {
    Un(() => {
      W === void 0 && b(() => E), z(W !== void 0 ? "errored" : "ready"), M(W);
      for (const k of w.keys()) k.decrement();
      w.clear()
    }, !1)
  }

  function P() {
    const E = Gc,
      W = C(),
      k = S();
    if (k !== void 0 && !a) throw k;
    return gt && !gt.user && E && bo(() => {
      ee(), a && (E.resolved || w.has(E) || (E.increment(), w.add(E)))
    }), W
  }

  function R(E = !0) {
    if (E !== !1 && v) return;
    v = !1;
    const W = y ? y() : r;
    if (W == null || W === !1) {
      B(a, Mt(C));
      return
    }
    const k = l !== Jo ? l : Mt(() => o(W, {
      value: C(),
      refetching: E
    }));
    return typeof k != "object" || !(k && "then" in k) ? (B(a, k, void 0, W), k) : (a = k, v = !0, queueMicrotask(() => v = !1), Un(() => {
      z(m ? "refreshing" : "pending"), V()
    }, !1), k.then(x => B(k, x, void 0, W), x => B(k, void 0, Ra(x), W)))
  }
  return Object.defineProperties(P, {
    state: {
      get: () => D()
    },
    error: {
      get: () => S()
    },
    loading: {
      get() {
        const E = D();
        return E === "pending" || E === "refreshing"
      }
    },
    latest: {
      get() {
        if (!m) return P();
        const E = S();
        if (E && !a) throw E;
        return C()
      }
    }
  }), y ? bo(() => R(!1)) : R(!1), [P, {
    refetch: R,
    mutate: b
  }]
}

function Ea(e) {
  return Un(e, !1)
}

function Mt(e) {
  if (gt === null) return e();
  const t = gt;
  gt = null;
  try {
    return e()
  } finally {
    gt = t
  }
}

function qc(e, t, n) {
  const r = Array.isArray(e);
  let o;
  return i => {
    let a;
    if (r) {
      a = Array(e.length);
      for (let h = 0; h < e.length; h++) a[h] = e[h]()
    } else a = e();
    const l = Mt(() => t(a, o, i));
    return o = a, l
  }
}

function ka(e) {
  At(() => Mt(e))
}

function jt(e) {
  return kt === null || (kt.cleanups === null ? kt.cleanups = [e] : kt.cleanups.push(e)), e
}

function Aa() {
  return gt
}

function Zc() {
  return kt
}

function Do(e, t) {
  const n = Symbol("context");
  return {
    id: n,
    Provider: Jc(n),
    defaultValue: e
  }
}

function Ht(e) {
  let t;
  return (t = Ia(kt, e.id)) !== void 0 ? t : e.defaultValue
}

function Oo(e) {
  const t = ie(e),
    n = ie(() => mi(t()));
  return n.toArray = () => {
    const r = n();
    return Array.isArray(r) ? r : r != null ? [r] : []
  }, n
}
let Gc;

function Ta() {
  const e = Yn;
  if (this.sources && (this.state || e))
    if (this.state === kn || e) hr(this);
    else {
      const t = Dt;
      Dt = null, Un(() => Co(this), !1), Dt = t
    } if (gt) {
    const t = this.observers ? this.observers.length : 0;
    gt.sources ? (gt.sources.push(this), gt.sourceSlots.push(t)) : (gt.sources = [this], gt.sourceSlots = [t]), this.observers ? (this.observers.push(gt), this.observerSlots.push(gt.sources.length - 1)) : (this.observers = [gt], this.observerSlots = [gt.sources.length - 1])
  }
  return this.value
}

function La(e, t, n) {
  let r = e.value;
  return (!e.comparator || !e.comparator(r, t)) && (e.value = t, e.observers && e.observers.length && Un(() => {
    for (let o = 0; o < e.observers.length; o += 1) {
      const i = e.observers[o],
        a = Yn && Yn.running;
      a && Yn.disposed.has(i), (a && !i.tState || !a && !i.state) && (i.pure ? Dt.push(i) : Cn.push(i), i.observers && $a(i)), a || (i.state = kn)
    }
    if (Dt.length > 1e6) throw Dt = [], new Error
  }, !1)), t
}

function hr(e) {
  if (!e.fn) return;
  Ho(e);
  const t = kt,
    n = gt,
    r = Vi;
  gt = kt = e, zc(e, e.value, r), gt = n, kt = t
}

function zc(e, t, n) {
  let r;
  try {
    r = e.fn(t)
  } catch (o) {
    e.pure && (e.state = kn, e.owned && e.owned.forEach(Ho), e.owned = null), Ba(o)
  }(!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? La(e, r) : e.value = r, e.updatedAt = n)
}

function jo(e, t, n, r = kn, o) {
  const i = {
    fn: e,
    state: r,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: kt,
    context: null,
    pure: n
  };
  return kt === null || kt !== _a && (kt.owned ? kt.owned.push(i) : kt.owned = [i]), i
}

function xo(e) {
  const t = Yn;
  if (e.state === 0 || t) return;
  if (e.state === yo || t) return Co(e);
  if (e.suspense && Mt(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const n = [e];
  for (;
    (e = e.owner) && (!e.updatedAt || e.updatedAt < Vi);)(e.state || t) && n.push(e);
  for (let r = n.length - 1; r >= 0; r--)
    if (e = n[r], e.state === kn || t) hr(e);
    else if (e.state === yo || t) {
    const o = Dt;
    Dt = null, Un(() => Co(e, n[0]), !1), Dt = o
  }
}

function Un(e, t) {
  if (Dt) return e();
  let n = !1;
  t || (Dt = []), Cn ? n = !0 : Cn = [], Vi++;
  try {
    const r = e();
    return Yc(n), r
  } catch (r) {
    n || (Cn = null), Dt = null, Ba(r)
  }
}

function Yc(e) {
  if (Dt && (Ma(Dt), Dt = null), e) return;
  const t = Cn;
  Cn = null, t.length && Un(() => Sa(t), !1)
}

function Ma(e) {
  for (let t = 0; t < e.length; t++) xo(e[t])
}

function Qc(e) {
  let t, n = 0;
  for (t = 0; t < e.length; t++) {
    const r = e[t];
    r.user ? e[n++] = r : xo(r)
  }
  for (dt.context && Fc(), t = 0; t < n; t++) xo(e[t])
}

function Co(e, t) {
  const n = Yn;
  e.state = 0;
  for (let r = 0; r < e.sources.length; r += 1) {
    const o = e.sources[r];
    o.sources && (o.state === kn || n ? o !== t && xo(o) : (o.state === yo || n) && Co(o, t))
  }
}

function $a(e) {
  const t = Yn;
  for (let n = 0; n < e.observers.length; n += 1) {
    const r = e.observers[n];
    (!r.state || t) && (r.state = yo, r.pure ? Dt.push(r) : Cn.push(r), r.observers && $a(r))
  }
}

function Ho(e) {
  let t;
  if (e.sources)
    for (; e.sources.length;) {
      const n = e.sources.pop(),
        r = e.sourceSlots.pop(),
        o = n.observers;
      if (o && o.length) {
        const i = o.pop(),
          a = n.observerSlots.pop();
        r < o.length && (i.sourceSlots[a] = r, o[r] = i, n.observerSlots[r] = a)
      }
    }
  if (e.owned) {
    for (t = 0; t < e.owned.length; t++) Ho(e.owned[t]);
    e.owned = null
  }
  if (e.cleanups) {
    for (t = 0; t < e.cleanups.length; t++) e.cleanups[t]();
    e.cleanups = null
  }
  e.state = 0, e.context = null
}

function Ra(e) {
  return e instanceof Error || typeof e == "string" ? e : new Error("Unknown error")
}

function Ba(e) {
  throw e = Ra(e), e
}

function Ia(e, t) {
  return e ? e.context && e.context[t] !== void 0 ? e.context[t] : Ia(e.owner, t) : void 0
}

function mi(e) {
  if (typeof e == "function" && !e.length) return mi(e());
  if (Array.isArray(e)) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const r = mi(e[n]);
      Array.isArray(r) ? t.push.apply(t, r) : t.push(r)
    }
    return t
  }
  return e
}

function Jc(e, t) {
  return function(r) {
    let o;
    return Oe(() => o = Mt(() => (kt.context = {
      [e]: r.value
    }, Oo(() => r.children))), void 0), o
  }
}
const Xc = Symbol("fallback");

function Ls(e) {
  for (let t = 0; t < e.length; t++) e[t]()
}

function e0(e, t, n = {}) {
  let r = [],
    o = [],
    i = [],
    a = 0,
    l = t.length > 1 ? [] : null;
  return jt(() => Ls(i)), () => {
    let h = e() || [],
      v, m;
    return h[vi], Mt(() => {
      let w = h.length,
        C, b, S, M, ee, V, D, z, B;
      if (w === 0) a !== 0 && (Ls(i), i = [], r = [], o = [], a = 0, l && (l = [])), n.fallback && (r = [Xc], o[0] = _r(q => (i[0] = q, n.fallback())), a = 1);
      else if (a === 0) {
        for (o = new Array(w), m = 0; m < w; m++) r[m] = h[m], o[m] = _r(y);
        a = w
      } else {
        for (S = new Array(w), M = new Array(w), l && (ee = new Array(w)), V = 0, D = Math.min(a, w); V < D && r[V] === h[V]; V++);
        for (D = a - 1, z = w - 1; D >= V && z >= V && r[D] === h[z]; D--, z--) S[z] = o[D], M[z] = i[D], l && (ee[z] = l[D]);
        for (C = new Map, b = new Array(z + 1), m = z; m >= V; m--) B = h[m], v = C.get(B), b[m] = v === void 0 ? -1 : v, C.set(B, m);
        for (v = V; v <= D; v++) B = r[v], m = C.get(B), m !== void 0 && m !== -1 ? (S[m] = o[v], M[m] = i[v], l && (ee[m] = l[v]), m = b[m], C.set(B, m)) : i[v]();
        for (m = V; m < w; m++) m in S ? (o[m] = S[m], i[m] = M[m], l && (l[m] = ee[m], l[m](m))) : o[m] = _r(y);
        o = o.slice(0, a = w), r = h.slice(0)
      }
      return o
    });

    function y(w) {
      if (i[m] = w, l) {
        const [C, b] = xe(m);
        return l[m] = b, t(h[m], C)
      }
      return t(h[m])
    }
  }
}

function d(e, t) {
  return Mt(() => e(t || {}))
}

function oo() {
  return !0
}
const wi = {
  get(e, t, n) {
    return t === tn ? n : e.get(t)
  },
  has(e, t) {
    return t === tn ? !0 : e.has(t)
  },
  set: oo,
  deleteProperty: oo,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t)
      },
      set: oo,
      deleteProperty: oo
    }
  },
  ownKeys(e) {
    return e.keys()
  }
};

function Xo(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {}
}

function sn(...e) {
  let t = !1;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    t = t || !!o && tn in o, e[r] = typeof o == "function" ? (t = !0, ie(o)) : o
  }
  if (t) return new Proxy({
    get(r) {
      for (let o = e.length - 1; o >= 0; o--) {
        const i = Xo(e[o])[r];
        if (i !== void 0) return i
      }
    },
    has(r) {
      for (let o = e.length - 1; o >= 0; o--)
        if (r in Xo(e[o])) return !0;
      return !1
    },
    keys() {
      const r = [];
      for (let o = 0; o < e.length; o++) r.push(...Object.keys(Xo(e[o])));
      return [...new Set(r)]
    }
  }, wi);
  const n = {};
  for (let r = e.length - 1; r >= 0; r--)
    if (e[r]) {
      const o = Object.getOwnPropertyDescriptors(e[r]);
      for (const i in o) i in n || Object.defineProperty(n, i, {
        enumerable: !0,
        get() {
          for (let a = e.length - 1; a >= 0; a--) {
            const l = (e[a] || {})[i];
            if (l !== void 0) return l
          }
        }
      })
    } return n
}

function qi(e, ...t) {
  const n = new Set(t.flat());
  if (tn in e) {
    const o = t.map(i => new Proxy({
      get(a) {
        return i.includes(a) ? e[a] : void 0
      },
      has(a) {
        return i.includes(a) && a in e
      },
      keys() {
        return i.filter(a => a in e)
      }
    }, wi));
    return o.push(new Proxy({
      get(i) {
        return n.has(i) ? void 0 : e[i]
      },
      has(i) {
        return n.has(i) ? !1 : i in e
      },
      keys() {
        return Object.keys(e).filter(i => !n.has(i))
      }
    }, wi)), o
  }
  const r = Object.getOwnPropertyDescriptors(e);
  return t.push(Object.keys(r).filter(o => !n.has(o))), t.map(o => {
    const i = {};
    for (let a = 0; a < o.length; a++) {
      const l = o[a];
      l in e && Object.defineProperty(i, l, r[l] ? r[l] : {
        get() {
          return e[l]
        },
        set() {
          return !0
        },
        enumerable: !0
      })
    }
    return i
  })
}

function qr(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return ie(e0(() => e.each, e.children, t || void 0))
}

function _e(e) {
  let t = !1;
  const n = e.keyed,
    r = ie(() => e.when, void 0, {
      equals: (o, i) => t ? o === i : !o == !i
    });
  return ie(() => {
    const o = r();
    if (o) {
      const i = e.children,
        a = typeof i == "function" && i.length > 0;
      return t = n || a, a ? Mt(() => i(o)) : i
    }
    return e.fallback
  }, void 0, void 0)
}

function Zr(e) {
  let t = !1,
    n = !1;
  const r = (a, l) => a[0] === l[0] && (t ? a[1] === l[1] : !a[1] == !l[1]) && a[2] === l[2],
    o = Oo(() => e.children),
    i = ie(() => {
      let a = o();
      Array.isArray(a) || (a = [a]);
      for (let l = 0; l < a.length; l++) {
        const h = a[l].when;
        if (h) return n = !!a[l].keyed, [l, h, a[l]]
      }
      return [-1]
    }, void 0, {
      equals: r
    });
  return ie(() => {
    const [a, l, h] = i();
    if (a < 0) return e.fallback;
    const v = h.children,
      m = typeof v == "function" && v.length > 0;
    return t = n || m, m ? Mt(() => v(l)) : v
  }, void 0, void 0)
}

function $t(e) {
  return e
}
const t0 = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"],
  n0 = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...t0]),
  r0 = new Set(["innerHTML", "textContent", "innerText", "children"]),
  o0 = Object.assign(Object.create(null), {
    className: "class",
    htmlFor: "for"
  }),
  Ms = Object.assign(Object.create(null), {
    class: "className",
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly"
  }),
  i0 = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]),
  s0 = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]),
  a0 = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace"
  };

function l0(e, t, n) {
  let r = n.length,
    o = t.length,
    i = r,
    a = 0,
    l = 0,
    h = t[o - 1].nextSibling,
    v = null;
  for (; a < o || l < i;) {
    if (t[a] === n[l]) {
      a++, l++;
      continue
    }
    for (; t[o - 1] === n[i - 1];) o--, i--;
    if (o === a) {
      const m = i < r ? l ? n[l - 1].nextSibling : n[i - l] : h;
      for (; l < i;) e.insertBefore(n[l++], m)
    } else if (i === l)
      for (; a < o;)(!v || !v.has(t[a])) && t[a].remove(), a++;
    else if (t[a] === n[i - 1] && n[l] === t[o - 1]) {
      const m = t[--o].nextSibling;
      e.insertBefore(n[l++], t[a++].nextSibling), e.insertBefore(n[--i], m), t[o] = n[i]
    } else {
      if (!v) {
        v = new Map;
        let y = l;
        for (; y < i;) v.set(n[y], y++)
      }
      const m = v.get(t[a]);
      if (m != null)
        if (l < m && m < i) {
          let y = a,
            w = 1,
            C;
          for (; ++y < o && y < i && !((C = v.get(t[y])) == null || C !== m + w);) w++;
          if (w > m - l) {
            const b = t[a];
            for (; l < m;) e.insertBefore(n[l++], b)
          } else e.replaceChild(n[l++], t[a++])
        } else a++;
      else t[a++].remove()
    }
  }
}
const $s = "_$DX_DELEGATE";

function c0(e, t, n, r = {}) {
  let o;
  return _r(i => {
    o = i, t === document ? e() : Rt(t, e(), t.firstChild ? null : void 0, n)
  }, r.owner), () => {
    o(), t.textContent = ""
  }
}

function je(e, t, n) {
  if (typeof window > "u") return null;
  const r = document.createElement("template");
  r.innerHTML = e;
  let o = r.content.firstChild;
  return n && (o = o.firstChild), o
}

function u0(e, t = window.document) {
  const n = t[$s] || (t[$s] = new Set);
  for (let r = 0, o = e.length; r < o; r++) {
    const i = e[r];
    n.has(i) || (n.add(i), t.addEventListener(i, p0))
  }
}

function ve(e, t, n) {
  n == null ? e.removeAttribute(t) : e.setAttribute(t, n)
}

function d0(e, t, n, r) {
  r == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, r)
}

function Zi(e, t) {
  t == null ? e.removeAttribute("class") : e.className = t
}

function f0(e, t, n, r) {
  if (r) Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
  else if (Array.isArray(n)) {
    const o = n[0];
    e.addEventListener(t, n[0] = i => o.call(e, n[1], i))
  } else e.addEventListener(t, n)
}

function h0(e, t, n = {}) {
  const r = Object.keys(t || {}),
    o = Object.keys(n);
  let i, a;
  for (i = 0, a = o.length; i < a; i++) {
    const l = o[i];
    !l || l === "undefined" || t[l] || (Rs(e, l, !1), delete n[l])
  }
  for (i = 0, a = r.length; i < a; i++) {
    const l = r[i],
      h = !!t[l];
    !l || l === "undefined" || n[l] === h || !h || (Rs(e, l, !0), n[l] = h)
  }
  return n
}

function g0(e, t, n) {
  if (!t) return n ? ve(e, "style") : t;
  const r = e.style;
  if (typeof t == "string") return r.cssText = t;
  typeof n == "string" && (r.cssText = n = void 0), n || (n = {}), t || (t = {});
  let o, i;
  for (i in n) t[i] == null && r.removeProperty(i), delete n[i];
  for (i in t) o = t[i], o !== n[i] && (r.setProperty(i, o), n[i] = o);
  return n
}

function Pa(e, t = {}, n, r) {
  const o = {};
  return Oe(() => o.children = Ur(e, t.children, o.children)), Oe(() => t.ref && t.ref(e)), Oe(() => v0(e, t, n, !0, o, !0)), o
}

function ir(e, t, n) {
  return Mt(() => e(t, n))
}

function Rt(e, t, n, r) {
  if (n !== void 0 && !r && (r = []), typeof t != "function") return Ur(e, t, r, n);
  Oe(o => Ur(e, t(), o, n), r)
}

function v0(e, t, n, r, o = {}, i = !1) {
  t || (t = {});
  for (const a in o)
    if (!(a in t)) {
      if (a === "children") continue;
      o[a] = Bs(e, a, null, o[a], n, i)
    } for (const a in t) {
    if (a === "children") continue;
    const l = t[a];
    o[a] = Bs(e, a, l, o[a], n, i)
  }
}

function m0(e) {
  let t, n;
  return !dt.context || !(t = dt.registry.get(n = y0())) ? e.cloneNode(!0) : (dt.completed && dt.completed.add(t), dt.registry.delete(n), t)
}

function w0(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase())
}

function Rs(e, t, n) {
  const r = t.trim().split(/\s+/);
  for (let o = 0, i = r.length; o < i; o++) e.classList.toggle(r[o], n)
}

function Bs(e, t, n, r, o, i) {
  let a, l, h;
  if (t === "style") return g0(e, n, r);
  if (t === "classList") return h0(e, n, r);
  if (n === r) return r;
  if (t === "ref") i || n(e);
  else if (t.slice(0, 3) === "on:") {
    const v = t.slice(3);
    r && e.removeEventListener(v, r), n && e.addEventListener(v, n)
  } else if (t.slice(0, 10) === "oncapture:") {
    const v = t.slice(10);
    r && e.removeEventListener(v, r, !0), n && e.addEventListener(v, n, !0)
  } else if (t.slice(0, 2) === "on") {
    const v = t.slice(2).toLowerCase(),
      m = i0.has(v);
    if (!m && r) {
      const y = Array.isArray(r) ? r[0] : r;
      e.removeEventListener(v, y)
    }(m || n) && (f0(e, v, n, m), m && u0([v]))
  } else if ((h = r0.has(t)) || !o && (Ms[t] || (l = n0.has(t))) || (a = e.nodeName.includes("-"))) t === "class" || t === "className" ? Zi(e, n) : a && !l && !h ? e[w0(t)] = n : e[Ms[t] || t] = n;
  else {
    const v = o && t.indexOf(":") > -1 && a0[t.split(":")[0]];
    v ? d0(e, v, t, n) : ve(e, o0[t] || t, n)
  }
  return n
}

function p0(e) {
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
    }), dt.registry && !dt.done && (dt.done = !0, document.querySelectorAll("[id^=pl-]").forEach(r => {
      for (; r && r.nodeType !== 8 && r.nodeValue !== "pl-" + e;) {
        let o = r.nextSibling;
        r.remove(), r = o
      }
      r && r.remove()
    })); n;) {
    const r = n[t];
    if (r && !n.disabled) {
      const o = n[`${t}Data`];
      if (o !== void 0 ? r.call(n, o, e) : r.call(n, e), e.cancelBubble) return
    }
    n = n._$host || n.parentNode || n.host
  }
}

function Ur(e, t, n, r, o) {
  for (dt.context && !n && (n = [...e.childNodes]); typeof n == "function";) n = n();
  if (t === n) return n;
  const i = typeof t,
    a = r !== void 0;
  if (e = a && n[0] && n[0].parentNode || e, i === "string" || i === "number") {
    if (dt.context) return n;
    if (i === "number" && (t = t.toString()), a) {
      let l = n[0];
      l && l.nodeType === 3 ? l.data = t : l = document.createTextNode(t), n = tr(e, n, r, l)
    } else n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t
  } else if (t == null || i === "boolean") {
    if (dt.context) return n;
    n = tr(e, n, r)
  } else {
    if (i === "function") return Oe(() => {
      let l = t();
      for (; typeof l == "function";) l = l();
      n = Ur(e, l, n, r)
    }), () => n;
    if (Array.isArray(t)) {
      const l = [],
        h = n && Array.isArray(n);
      if (pi(l, t, n, o)) return Oe(() => n = Ur(e, l, n, r, !0)), () => n;
      if (dt.context) {
        if (!l.length) return n;
        for (let v = 0; v < l.length; v++)
          if (l[v].parentNode) return n = l
      }
      if (l.length === 0) {
        if (n = tr(e, n, r), a) return n
      } else h ? n.length === 0 ? Is(e, l, r) : l0(e, n, l) : (n && tr(e), Is(e, l));
      n = l
    } else if (t instanceof Node) {
      if (dt.context && t.parentNode) return n = a ? [t] : t;
      if (Array.isArray(n)) {
        if (a) return n = tr(e, n, r, t);
        tr(e, n, null, t)
      } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t
    }
  }
  return n
}

function pi(e, t, n, r) {
  let o = !1;
  for (let i = 0, a = t.length; i < a; i++) {
    let l = t[i],
      h = n && n[i];
    if (l instanceof Node) e.push(l);
    else if (!(l == null || l === !0 || l === !1))
      if (Array.isArray(l)) o = pi(e, l, h) || o;
      else if (typeof l == "function")
      if (r) {
        for (; typeof l == "function";) l = l();
        o = pi(e, Array.isArray(l) ? l : [l], Array.isArray(h) ? h : [h]) || o
      } else e.push(l), o = !0;
    else {
      const v = String(l);
      h && h.nodeType === 3 && h.data === v ? e.push(h) : e.push(document.createTextNode(v))
    }
  }
  return o
}

function Is(e, t, n = null) {
  for (let r = 0, o = t.length; r < o; r++) e.insertBefore(t[r], n)
}

function tr(e, t, n, r) {
  if (n === void 0) return e.textContent = "";
  const o = r || document.createTextNode("");
  if (t.length) {
    let i = !1;
    for (let a = t.length - 1; a >= 0; a--) {
      const l = t[a];
      if (o !== l) {
        const h = l.parentNode === e;
        !i && !a ? h ? e.replaceChild(o, l) : e.insertBefore(o, n) : h && l.remove()
      } else i = !0
    }
  } else e.insertBefore(o, n);
  return [o]
}

function y0() {
  const e = dt.context;
  return `${e.id}${e.count++}`
}
const b0 = "http://www.w3.org/2000/svg";

function Wa(e, t = !1) {
  return t ? document.createElementNS(b0, e) : document.createElement(e)
}

function Ua(e) {
  const {
    useShadow: t
  } = e, n = document.createTextNode(""), r = e.mount || document.body;

  function o() {
    if (dt.context) {
      const [i, a] = xe(!1);
      return queueMicrotask(() => a(!0)), () => i() && e.children
    } else return () => e.children
  }
  if (r instanceof HTMLHeadElement) {
    const [i, a] = xe(!1), l = () => a(!0);
    _r(h => Rt(r, () => i() ? h() : o()(), null)), jt(() => {
      dt.context ? queueMicrotask(l) : l()
    })
  } else {
    const i = Wa(e.isSVG ? "g" : "div", e.isSVG),
      a = t && i.attachShadow ? i.attachShadow({
        mode: "open"
      }) : i;
    Object.defineProperty(i, "_$host", {
      get() {
        return n.parentNode
      },
      configurable: !0
    }), Rt(a, o()), r.appendChild(i), e.ref && e.ref(i), jt(() => r.removeChild(i))
  }
  return n
}

function lr(e) {
  const [t, n] = qi(e, ["component"]), r = ie(() => t.component);
  return ie(() => {
    const o = r();
    switch (typeof o) {
      case "function":
        return Mt(() => o(n));
      case "string":
        const i = s0.has(o),
          a = dt.context ? m0() : Wa(o, i);
        return Pa(a, n, i), a
    }
  })
}
var ut = (e => (e.DARK = "DARK", e.LIGHT = "LIGHT", e))(ut || {});
let x0 = {
    data: ""
  },
  C0 = e => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
    innerHTML: " ",
    id: "_goober"
  })).firstChild : e || x0,
  S0 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  _0 = /\/\*[^]*?\*\/|  +/g,
  Ps = /\n+/g,
  Vn = (e, t) => {
    let n = "",
      r = "",
      o = "";
    for (let i in e) {
      let a = e[i];
      i[0] == "@" ? i[1] == "i" ? n = i + " " + a + ";" : r += i[1] == "f" ? Vn(a, i) : i + "{" + Vn(a, i[1] == "k" ? "" : t) + "}" : typeof a == "object" ? r += Vn(a, t ? t.replace(/([^,])+/g, l => i.replace(/(^:.*)|([^,])+/g, h => /&/.test(h) ? h.replace(/&/g, l) : l ? l + " " + h : h)) : i) : a != null && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(), o += Vn.p ? Vn.p(i, a) : i + ":" + a + ";")
    }
    return n + (t && o ? t + "{" + o + "}" : o) + r
  },
  mn = {},
  Na = e => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + Na(e[n]);
      return t
    }
    return e
  },
  E0 = (e, t, n, r, o) => {
    let i = Na(e),
      a = mn[i] || (mn[i] = (h => {
        let v = 0,
          m = 11;
        for (; v < h.length;) m = 101 * m + h.charCodeAt(v++) >>> 0;
        return "go" + m
      })(i));
    if (!mn[a]) {
      let h = i !== e ? e : (v => {
        let m, y, w = [{}];
        for (; m = S0.exec(v.replace(_0, ""));) m[4] ? w.shift() : m[3] ? (y = m[3].replace(Ps, " ").trim(), w.unshift(w[0][y] = w[0][y] || {})) : w[0][m[1]] = m[2].replace(Ps, " ").trim();
        return w[0]
      })(e);
      mn[a] = Vn(o ? {
        ["@keyframes " + a]: h
      } : h, n ? "" : "." + a)
    }
    let l = n && mn.g ? mn.g : null;
    return n && (mn.g = mn[a]), ((h, v, m, y) => {
      y ? v.data = v.data.replace(y, h) : v.data.indexOf(h) === -1 && (v.data = m ? h + v.data : v.data + h)
    })(mn[a], t, r, l), a
  },
  k0 = (e, t, n) => e.reduce((r, o, i) => {
    let a = t[i];
    if (a && a.call) {
      let l = a(n),
        h = l && l.props && l.props.className || /^go/.test(l) && l;
      a = h ? "." + h : l && typeof l == "object" ? l.props ? "" : Vn(l, "") : l === !1 ? "" : l
    }
    return r + o + (a ?? "")
  }, "");

function En(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return E0(n.unshift ? n.raw ? k0(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {}) : n, C0(t.target), t.g, t.o, t.k)
}
En.bind({
  g: 1
});
let A0 = En.bind({
  k: 1
});
const Gi = Do();

function T0(e) {
  return d(Gi.Provider, {
    value: e.theme,
    get children() {
      return e.children
    }
  })
}

function it() {
  return Ht(Gi)
}

function Da(e) {
  let t = this || {};
  return (...n) => {
    const r = o => {
      const i = Ht(Gi),
        a = sn(o, {
          theme: i
        }),
        l = sn(a, {
          get class() {
            const C = a.class,
              b = "class" in a && /^go[0-9]+/.test(C);
            let S = En.apply({
              target: t.target,
              o: b,
              p: a,
              g: t.g
            }, n);
            return [C, S].filter(Boolean).join(" ")
          }
        }),
        [h, v] = qi(l, ["as", "theme"]),
        m = v,
        y = h.as || e;
      let w;
      return typeof y == "function" ? w = y(m) : t.g == 1 ? (w = document.createElement(y), Pa(w, m)) : w = lr(sn({
        component: y
      }, m)), w
    };
    return r.class = o => Mt(() => En.apply({
      target: t.target,
      p: o,
      g: t.g
    }, n)), r
  }
}
const I = new Proxy(Da, {
  get(e, t) {
    return e(t)
  }
});

function L0() {
  const e = Da.call({
    g: 1
  }, "div").apply(null, arguments);
  return function(n) {
    return e(n), null
  }
}
const pn = "tc-root",
  zi = "tc-disable-scroll",
  ei = "tc-using-mouse",
  M0 = () => {
    document.body.addEventListener("mousedown", () => document.body.classList.add(ei)), document.body.addEventListener("keydown", t => {
      t.key === "Tab" && document.body.classList.remove(ei)
    });
    const e = L0`
    ${pn} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${pn} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${pn} *:focus {
        outline: #08f auto 2px;
    }
    
    ${pn} li {
        list-style: none;
    }
    
    ${pn} button {
        outline: none;
    }
    
    body.${zi} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${ei} ${pn} *:focus {
        outline: none;
    }
`;
    return d(e, {})
  };

function $0(e) {
  e[0] === "#" && (e = e.slice(1));
  const t = parseInt(e, 16),
    n = t >> 16 & 255,
    r = t >> 8 & 255,
    o = t & 255;
  return [n, r, o].join(",")
}

function Gr(e, t) {
  return e[0] === "#" && (e = $0(e)), `rgba(${e}, ${t})`
}

function an(e) {
  return e.toString() + "px"
}
const pr = class {
  constructor() {
    ye(this, "storage", {})
  }
  static getInstance() {
    return pr.instance || (pr.instance = new pr), pr.instance
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
let Oa = pr;
ye(Oa, "instance");
class bt extends ge {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, bt.prototype)
  }
}

function ho(...e) {
  try {
    console.debug("[TON_CONNECT_UI]", ...e)
  } catch {}
}

function R0(...e) {
  try {
    console.error("[TON_CONNECT_UI]", ...e)
  } catch {}
}

function B0(...e) {
  try {
    console.warn("[TON_CONNECT_UI]", ...e)
  } catch {}
}

function Er(e, t = "_self") {
  ho("openLink", e, t), window.open(e, t, "noopener noreferrer")
}

function at(e) {
  Er(e, "_blank")
}

function Bn(e, t) {
  const n = () => {
      Ue("safari") || Xt("android") && Ue("firefox") || t()
    },
    r = setTimeout(() => n(), 200);
  window.addEventListener("blur", () => clearTimeout(r), {
    once: !0
  }), Er(e, "_self")
}

function I0() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? ut.LIGHT : ut.DARK
}

function P0(e) {
  const t = n => e(n.matches ? ut.DARK : ut.LIGHT);
  return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", t), () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", t)
}

function W0() {
  document.documentElement.scrollHeight !== document.documentElement.clientHeight && (document.body.style.top = an(-document.documentElement.scrollTop), document.body.classList.add(zi))
}

function U0() {
  document.body.classList.remove(zi), document.documentElement.scrollTo({
    top: -parseFloat(getComputedStyle(document.body).top)
  }), document.body.style.top = "auto"
}

function N0() {
  document.body.hasAttribute("ontouchstart") || document.body.setAttribute("ontouchstart", "")
}

function D0() {
  customElements.define(pn, class extends HTMLElement {})
}

function ja(e) {
  return Je(this, null, function*() {
    yield new Promise(t => requestAnimationFrame(t)), e()
  })
}

function O0(e) {
  return Je(this, null, function*() {
    return yield new Promise(t => requestAnimationFrame(t)), e()
  })
}

function Ha(e) {
  document.readyState !== "complete" ? window.addEventListener("load", () => ja(() => Ha(e)), {
    once: !0
  }) : e.forEach(t => {
    const n = new window.Image;
    n.src = t
  })
}

function dn() {
  if (typeof window < "u") return window
}

function Yi() {
  if (j0()) return localStorage;
  if (H0()) throw new bt("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
  return Oa.getInstance()
}

function j0() {
  try {
    return typeof localStorage < "u"
  } catch {
    return !1
  }
}

function H0() {
  return typeof process < "u" && process.versions != null && process.versions.node != null
}

function Qi() {
  var e, t, n;
  const r = new xc().getResult(),
    o = (e = r.os.name) == null ? void 0 : e.toLowerCase(),
    i = (t = r.device.model) == null ? void 0 : t.toLowerCase();
  let a;
  switch (!0) {
    case i === "ipad":
      a = "ipad";
      break;
    case o === "ios":
      a = "ios";
      break;
    case o === "android":
      a = "android";
      break;
    case o === "mac os":
      a = "macos";
      break;
    case o === "linux":
      a = "linux";
      break;
    case (o == null ? void 0 : o.includes("windows")):
      a = "windows";
      break
  }
  const l = (n = r.browser.name) == null ? void 0 : n.toLowerCase();
  let h;
  switch (!0) {
    case l === "chrome":
      h = "chrome";
      break;
    case l === "firefox":
      h = "firefox";
      break;
    case (l == null ? void 0 : l.includes("safari")):
      h = "safari";
      break;
    case (l == null ? void 0 : l.includes("opera")):
      h = "opera";
      break
  }
  return {
    os: a,
    browser: h
  }
}

function Xt(...e) {
  return e.includes(Qi().os)
}

function Ue(...e) {
  return e.includes(Qi().browser)
}

function io(e, t) {
  const n = new URL(e);
  return t + n.search
}
class F0 {
  constructor() {
    ye(this, "localStorage"), ye(this, "storageKey", "ton-connect-ui_wallet-info"), this.localStorage = Yi()
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
class K0 {
  constructor() {
    ye(this, "localStorage"), ye(this, "storageKey", "ton-connect-ui_preferred-wallet"), this.localStorage = Yi()
  }
  setPreferredWalletAppName(t) {
    this.localStorage.setItem(this.storageKey, t)
  }
  getPreferredWalletAppName() {
    return this.localStorage.getItem(this.storageKey) || void 0
  }
}
class Fa {
  constructor() {
    ye(this, "localStorage"), ye(this, "storageKey", "ton-connect-ui_last-selected-wallet-info"), this.localStorage = Yi()
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
const [yi, Ws] = xe({
  status: "closed",
  closeReason: null
}), Us = ie(() => yi().status === "opened"), [So, Ns] = xe({
  status: "closed",
  closeReason: null
}), Ds = ie(() => So().status === "opened"), V0 = ie(() => {
  const e = So();
  return e.status === "opened" ? e.walletInfo : null
});
let nr = typeof window < "u" ? new Fa : void 0;
const [q0, Z0] = xe((nr == null ? void 0 : nr.getLastSelectedWalletInfo()) || null), Bt = e => {
  nr || (nr = new Fa), e ? nr.setLastSelectedWalletInfo(e) : nr.removeLastSelectedWalletInfo(), Z0(e)
}, [yn, rr] = xe(null), G0 = {
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
}, z0 = {
  connectWallet: "Connect Wallet",
  dropdown: {
    copy: "Copy address",
    copied: "Address copied!",
    disconnect: "Disconnect"
  }
}, Y0 = {
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
}, Q0 = {
  walletOn: "Wallet On",
  recent: "Recent",
  installed: "Installed",
  popular: "Popular"
}, J0 = {
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
}, X0 = {
  confirmTransaction: {
    header: "Confirm the transaction in {{ name }}",
    text: "It will only take a moment."
  },
  transactionSent: "$notifications.transactionSent",
  transactionCanceled: "$notifications.transactionCanceled"
}, e1 = {
  common: G0,
  button: z0,
  notifications: Y0,
  walletItem: Q0,
  walletModal: J0,
  actionModal: X0
}, t1 = {
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
}, n1 = {
  connectWallet: "Подключить кошелёк",
  dropdown: {
    copy: "Скопировать адрес",
    copied: "Адрес скопирован!",
    disconnect: "Отключить кошелёк"
  }
}, r1 = {
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
}, o1 = {
  walletOn: "Wallet в",
  recent: "Недавний",
  installed: "Установлен",
  popular: "Популярен"
}, i1 = {
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
}, s1 = {
  confirmTransaction: {
    header: "Подтвердите действие в {{ name }}",
    text: "Это займет пару секунд."
  },
  transactionSent: "$notifications.transactionSent",
  transactionCanceled: "$notifications.transactionCanceled"
}, a1 = {
  common: t1,
  button: n1,
  notifications: r1,
  walletItem: o1,
  walletModal: i1,
  actionModal: s1
}, l1 = {
  en: Os(e1),
  ru: Os(a1)
};

function Os(e) {
  const t = "$",
    n = r => {
      Object.entries(r).forEach(([o, i]) => {
        if (typeof i == "object" && i) return n(i);
        if (typeof i == "string") {
          if (i[0] === t) {
            const a = i.slice(1).split(".");
            let l = e;
            a.forEach(h => {
              if (h in l) l = l[h];
              else throw new Error(`Cannot parse translations: there is no property ${h} in translation`)
            }), r[o] = l
          }
          i.slice(0, 2) === `\\${t}` && (r[o] = i.slice(1))
        }
      })
    };
  return n(e), e
}
const gr = Do(),
  bi = Symbol("store-raw"),
  Nr = Symbol("store-node"),
  c1 = Symbol("store-name");

function Ka(e, t) {
  let n = e[tn];
  if (!n && (Object.defineProperty(e, tn, {
      value: n = new Proxy(e, f1)
    }), !Array.isArray(e))) {
    const r = Object.keys(e),
      o = Object.getOwnPropertyDescriptors(e);
    for (let i = 0, a = r.length; i < a; i++) {
      const l = r[i];
      o[l].get && Object.defineProperty(e, l, {
        enumerable: o[l].enumerable,
        get: o[l].get.bind(n)
      })
    }
  }
  return n
}

function _o(e) {
  let t;
  return e != null && typeof e == "object" && (e[tn] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e))
}

function cr(e, t = new Set) {
  let n, r, o, i;
  if (n = e != null && e[bi]) return n;
  if (!_o(e) || t.has(e)) return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? e = e.slice(0) : t.add(e);
    for (let a = 0, l = e.length; a < l; a++) o = e[a], (r = cr(o, t)) !== o && (e[a] = r)
  } else {
    Object.isFrozen(e) ? e = Object.assign({}, e) : t.add(e);
    const a = Object.keys(e),
      l = Object.getOwnPropertyDescriptors(e);
    for (let h = 0, v = a.length; h < v; h++) i = a[h], !l[i].get && (o = e[i], (r = cr(o, t)) !== o && (e[i] = r))
  }
  return e
}

function Ji(e) {
  let t = e[Nr];
  return t || Object.defineProperty(e, Nr, {
    value: t = {}
  }), t
}

function xi(e, t, n) {
  return e[t] || (e[t] = qa(n))
}

function u1(e, t) {
  const n = Reflect.getOwnPropertyDescriptor(e, t);
  return !n || n.get || !n.configurable || t === tn || t === Nr || t === c1 || (delete n.value, delete n.writable, n.get = () => e[tn][t]), n
}

function Va(e) {
  if (Aa()) {
    const t = Ji(e);
    (t._ || (t._ = qa()))()
  }
}

function d1(e) {
  return Va(e), Reflect.ownKeys(e)
}

function qa(e) {
  const [t, n] = xe(e, {
    equals: !1,
    internal: !0
  });
  return t.$ = n, t
}
const f1 = {
  get(e, t, n) {
    if (t === bi) return e;
    if (t === tn) return n;
    if (t === vi) return Va(e), n;
    const r = Ji(e),
      o = r.hasOwnProperty(t);
    let i = o ? r[t]() : e[t];
    if (t === Nr || t === "__proto__") return i;
    if (!o) {
      const a = Object.getOwnPropertyDescriptor(e, t);
      Aa() && (typeof i != "function" || e.hasOwnProperty(t)) && !(a && a.get) && (i = xi(r, t, i)())
    }
    return _o(i) ? Ka(i) : i
  },
  has(e, t) {
    return t === bi || t === tn || t === vi || t === Nr || t === "__proto__" ? !0 : (this.get(e, t, e), t in e)
  },
  set() {
    return !0
  },
  deleteProperty() {
    return !0
  },
  ownKeys: d1,
  getOwnPropertyDescriptor: u1
};

function Eo(e, t, n, r = !1) {
  if (!r && e[t] === n) return;
  const o = e[t],
    i = e.length;
  n === void 0 ? delete e[t] : e[t] = n;
  let a = Ji(e),
    l;
  (l = xi(a, t, o)) && l.$(() => n), Array.isArray(e) && e.length !== i && (l = xi(a, "length", i)) && l.$(e.length), (l = a._) && l.$()
}

function Za(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    Eo(e, o, t[o])
  }
}

function h1(e, t) {
  if (typeof t == "function" && (t = t(e)), t = cr(t), Array.isArray(t)) {
    if (e === t) return;
    let n = 0,
      r = t.length;
    for (; n < r; n++) {
      const o = t[n];
      e[n] !== o && Eo(e, n, o)
    }
    Eo(e, "length", r)
  } else Za(e, t)
}

function yr(e, t, n = []) {
  let r, o = e;
  if (t.length > 1) {
    r = t.shift();
    const a = typeof r,
      l = Array.isArray(e);
    if (Array.isArray(r)) {
      for (let h = 0; h < r.length; h++) yr(e, [r[h]].concat(t), n);
      return
    } else if (l && a === "function") {
      for (let h = 0; h < e.length; h++) r(e[h], h) && yr(e, [h].concat(t), n);
      return
    } else if (l && a === "object") {
      const {
        from: h = 0,
        to: v = e.length - 1,
        by: m = 1
      } = r;
      for (let y = h; y <= v; y += m) yr(e, [y].concat(t), n);
      return
    } else if (t.length > 1) {
      yr(e[r], t, [r].concat(n));
      return
    }
    o = e[r], n = [r].concat(n)
  }
  let i = t[0];
  typeof i == "function" && (i = i(o, n), i === o) || r === void 0 && i == null || (i = cr(i), r === void 0 || _o(o) && _o(i) && !Array.isArray(i) ? Za(o, i) : Eo(e, r, i))
}

function Xi(...[e, t]) {
  const n = cr(e || {}),
    r = Array.isArray(n),
    o = Ka(n);

  function i(...a) {
    Ea(() => {
      r && a.length === 1 ? h1(n, a[0]) : yr(n, a)
    })
  }
  return [o, i]
}
const Ga = {
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
  g1 = {
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
function js(e) {
  return Object.prototype.toString.call(e) === "[object Object]"
}

function v1(e) {
  var t, n;
  return js(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (n = t.prototype, !(js(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)))
}

function Pn(e, t) {
  return e ? Wc(t, e, {
    arrayMerge: (r, o, i) => o,
    isMergeableObject: v1
  }) : t
}
const [m1, es] = Xi({
  theme: ut.LIGHT,
  colors: Ga,
  borderRadius: "m"
}), za = {
  [ut.LIGHT]: Ga,
  [ut.DARK]: g1
}, rn = {
  [ut.LIGHT]: void 0,
  [ut.DARK]: void 0
};

function ti(e, t) {
  t && (rn[ut.DARK] = Pn(t[ut.DARK], rn[ut.DARK]), rn[ut.LIGHT] = Pn(t[ut.LIGHT], rn[ut.LIGHT])), es({
    theme: e,
    colors: Pn(rn[e], za[e])
  })
}

function w1(e) {
  es({
    borderRadius: e
  })
}

function p1(e) {
  rn[ut.DARK] = Pn(e[ut.DARK], rn[ut.DARK]), rn[ut.LIGHT] = Pn(e[ut.LIGHT], rn[ut.LIGHT]), es(t => ({
    colors: Pn(rn[t.theme], za[t.theme])
  }))
}
const y1 = I.div`
    background-color: ${e=>e.theme.colors.background.secondary};
`,
  Jn = e => {
    let t;
    const [n, r] = xe(null);
    return At(() => {
      const o = new window.Image;
      return o.src = e.src, o.alt = e.alt || "", o.setAttribute("draggable", "false"), e.class && o.classList.add(e.class), o.complete ? r(o) : (o.addEventListener("load", () => r(o)), () => o.removeEventListener("load", () => r(o)))
    }), [d(_e, {
      get when() {
        return n()
      },
      get children() {
        return n()
      }
    }), d(_e, {
      get when() {
        return !n()
      },
      get children() {
        return d(y1, {
          get class() {
            return e.class
          },
          ref(o) {
            const i = t;
            typeof i == "function" ? i(o) : t = o
          }
        })
      }
    })]
  };
let Qn = {};
try {
  let e = location.hash.toString();
  Qn = b1(e)
} catch {}
let ur = "unknown";
Qn != null && Qn.tgWebAppPlatform && (ur = (xs = Qn.tgWebAppPlatform) != null ? xs : "unknown");
if (ur === "unknown") {
  const e = dn();
  ur = (_s = (Ss = (Cs = e == null ? void 0 : e.Telegram) == null ? void 0 : Cs.WebApp) == null ? void 0 : Ss.platform) != null ? _s : "unknown"
}
let ko = "6.0";
Qn != null && Qn.tgWebAppVersion && (ko = Qn.tgWebAppVersion);
if (!ko) {
  const e = dn();
  ko = (As = (ks = (Es = e == null ? void 0 : e.Telegram) == null ? void 0 : Es.WebApp) == null ? void 0 : ks.version) != null ? As : "6.0"
}

function Gn(...e) {
  return e.includes(ur)
}

function ln() {
  var e;
  return ur !== "unknown" || !!((e = dn()) != null && e.TelegramWebviewProxy)
}

function Ya() {
  var e;
  const t = !!((e = dn()) != null && e.TelegramWebview);
  return (ln() || t) && ur === "unknown"
}

function ts() {
  Ja("web_app_expand", {})
}

function Ci(e, t) {
  const n = new URL(e);
  if (n.protocol !== "http:" && n.protocol !== "https:") {
    if (t) return t();
    throw new bt(`Url protocol is not supported: ${n}`)
  }
  if (n.hostname !== "t.me") {
    if (t) return t();
    throw new bt(`Url host is not supported: ${n}`)
  }
  const r = n.pathname + n.search;
  Qa() || S1("6.1") ? Ja("web_app_open_tg_link", {
    path_full: r
  }) : at("https://t.me" + r)
}

function Qa() {
  try {
    const e = dn();
    return e ? e.parent != null && e !== e.parent : !1
  } catch {
    return !1
  }
}

function Ja(e, t) {
  try {
    const n = dn();
    if (!n) throw new bt("Can't post event to parent window: window is not defined");
    if (n.TelegramWebviewProxy !== void 0) ho("postEvent", e, t), n.TelegramWebviewProxy.postEvent(e, JSON.stringify(t));
    else if (n.external && "notify" in n.external) ho("postEvent", e, t), n.external.notify(JSON.stringify({
      eventType: e,
      eventData: t
    }));
    else if (Qa()) {
      const r = "*",
        o = JSON.stringify({
          eventType: e,
          eventData: t
        });
      ho("postEvent", e, t), n.parent.postMessage(o, r)
    } else throw new bt("Can't post event to TMA")
  } catch (n) {
    R0(`Can't post event to parent window: ${n}`)
  }
}

function b1(e) {
  e = e.replace(/^#/, "");
  let t = {};
  if (!e.length) return t;
  if (e.indexOf("=") < 0 && e.indexOf("?") < 0) return t._path = Ao(e), t;
  let n = e.indexOf("?");
  if (n >= 0) {
    let o = e.substr(0, n);
    t._path = Ao(o), e = e.substr(n + 1)
  }
  let r = x1(e);
  for (let o in r) t[o] = r[o];
  return t
}

function Ao(e) {
  try {
    return e = e.replace(/\+/g, "%20"), decodeURIComponent(e)
  } catch {
    return e
  }
}

function x1(e) {
  let t = {};
  if (!e.length) return t;
  let n = e.split("&"),
    r, o, i, a;
  for (r = 0; r < n.length; r++) o = n[r].split("="), i = Ao(o[0]), a = o[1] == null ? null : Ao(o[1]), t[i] = a;
  return t
}

function C1(e, t) {
  typeof e != "string" && (e = "");
  let n = e.replace(/^\s+|\s+$/g, "").split("."),
    r = t.replace(/^\s+|\s+$/g, "").split("."),
    o, i, a, l;
  for (o = Math.max(n.length, r.length), i = 0; i < o; i++)
    if (a = parseInt(n[i]) || 0, l = parseInt(r[i]) || 0, a !== l) return a > l ? 1 : -1;
  return 0
}

function S1(e) {
  return C1(ko, e) >= 0
}
const zn = {
  mobile: 440,
  tablet: 1020
};

function or(e) {
  const t = dn();
  if (!t) return e === "desktop";
  if (Gn("weba")) return !0;
  const n = t.innerWidth;
  switch (e) {
    case "desktop":
      return n > zn.tablet;
    case "tablet":
      return n > zn.mobile;
    default:
    case "mobile":
      return n <= zn.mobile || Xt("ios", "android", "ipad")
  }
}

function Yt(e) {
  switch (e) {
    case "mobile":
      return `@media (max-width: ${zn.mobile}px)`;
    case "tablet":
      return `@media (max-width: ${zn.tablet}px) (min-width: ${zn.mobile}px)`;
    default:
    case "desktop":
      return `@media (min-width: ${zn.tablet}px)`
  }
}
const zr = "@media (hover: none)",
  Yr = "@media not all and (hover: none)",
  _1 = {
    m: "100vh",
    s: "8px",
    none: "0"
  },
  ni = {
    s: .02,
    m: .04
  },
  E1 = I.button`
    display: ${e=>e.leftIcon||e.rightIcon?"flex":"inline-block"};
    gap: ${e=>e.leftIcon||e.rightIcon?"6px":"unset"};
    align-items: ${e=>e.leftIcon||e.rightIcon?"center":"unset"};
    justify-content: ${e=>e.leftIcon||e.rightIcon?"space-between":"unset"};
    background-color: ${e=>e.appearance==="flat"?"transparent":e.appearance==="secondary"?e.theme.colors.background.tint:Gr(e.theme.colors.accent,.12)};
    color: ${e=>e.appearance==="secondary"?e.theme.colors.text.primary:e.theme.colors.accent};

    padding: ${e=>e.appearance==="flat"?"0":"9px 16px"};
    padding-left: ${e=>e.leftIcon&&e.appearance!=="flat"?"12px":"16px"};
    padding-right: ${e=>e.rightIcon&&e.appearance!=="flat"?"12px":"16px"};
    border: none;
    border-radius: ${e=>_1[e.theme.borderRadius]};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    font-size: 14px;
    font-weight: 510;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${Yr} {
        &:hover {
            transform: ${e=>e.disabled?"unset":`scale(${1+ni[e.scale]})`};
        }
    }

    &:active {
        transform: ${e=>e.disabled?"unset":`scale(${1-ni[e.scale]})`};
    }

    ${zr} {
        &:active {
            transform: ${e=>e.disabled?"unset":`scale(${1-ni[e.scale]*2})`};
        }
    }
`;

function Qr(e) {
  const t = Mt(() => Object.keys(e).filter(r => r.startsWith("data-"))),
    [n] = qi(e, t);
  return n
}
const xt = e => {
  const t = Qr(e);
  return d(E1, sn({
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
      return [ie(() => e.leftIcon), ie(() => e.children), ie(() => e.rightIcon)]
    }
  }))
};

function To(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
const ns = e => {
  let t, n = !0;
  const [r, o] = xe(), [i, a] = xe(), l = Oo(() => e.children), {
    onBeforeEnter: h,
    onEnter: v,
    onAfterEnter: m,
    onBeforeExit: y,
    onExit: w,
    onAfterExit: C
  } = e, b = ie(() => {
    const ee = e.name || "s";
    return {
      enterActiveClass: e.enterActiveClass || ee + "-enter-active",
      enterClass: e.enterClass || ee + "-enter",
      enterToClass: e.enterToClass || ee + "-enter-to",
      exitActiveClass: e.exitActiveClass || ee + "-exit-active",
      exitClass: e.exitClass || ee + "-exit",
      exitToClass: e.exitToClass || ee + "-exit-to"
    }
  });

  function S(ee, V) {
    if (!n || e.appear) {
      let D = function(P) {
        ee && (!P || P.target === ee) && (ee.removeEventListener("transitionend", D), ee.removeEventListener("animationend", D), ee.classList.remove(...B), ee.classList.remove(...q), Ea(() => {
          r() !== ee && o(ee), i() === ee && a(void 0)
        }), m && m(ee), e.mode === "inout" && M(ee, V))
      };
      const z = b().enterClass.split(" "),
        B = b().enterActiveClass.split(" "),
        q = b().enterToClass.split(" ");
      h && h(ee), ee.classList.add(...z), ee.classList.add(...B), To(() => {
        ee.classList.remove(...z), ee.classList.add(...q), v && v(ee, () => D()), (!v || v.length < 2) && (ee.addEventListener("transitionend", D), ee.addEventListener("animationend", D))
      })
    }
    V && !e.mode ? a(ee) : o(ee)
  }

  function M(ee, V) {
    const D = b().exitClass.split(" "),
      z = b().exitActiveClass.split(" "),
      B = b().exitToClass.split(" ");
    if (!V.parentNode) return q();
    y && y(V), V.classList.add(...D), V.classList.add(...z), To(() => {
      V.classList.remove(...D), V.classList.add(...B)
    }), w && w(V, () => q()), (!w || w.length < 2) && (V.addEventListener("transitionend", q), V.addEventListener("animationend", q));

    function q(P) {
      (!P || P.target === V) && (V.removeEventListener("transitionend", q), V.removeEventListener("animationend", q), V.classList.remove(...z), V.classList.remove(...B), r() === V && o(void 0), C && C(V), e.mode === "outin" && S(ee, V))
    }
  }
  return bo(ee => {
    for (t = l(); typeof t == "function";) t = t();
    return Mt(() => (t && t !== ee && (e.mode !== "outin" ? S(t, ee) : n && o(t)), ee && ee !== t && e.mode !== "inout" && M(t, ee), n = !1, t))
  }), [r, i]
};

function so(e) {
  const {
    top: t,
    bottom: n,
    left: r,
    right: o,
    width: i,
    height: a
  } = e.getBoundingClientRect(), l = e.parentNode.getBoundingClientRect();
  return {
    top: t - l.top,
    bottom: n,
    left: r - l.left,
    right: o,
    width: i,
    height: a
  }
}
const k1 = e => {
  const t = Oo(() => e.children),
    n = ie(() => {
      const C = e.name || "s";
      return {
        enterActiveClass: e.enterActiveClass || C + "-enter-active",
        enterClass: e.enterClass || C + "-enter",
        enterToClass: e.enterToClass || C + "-enter-to",
        exitActiveClass: e.exitActiveClass || C + "-exit-active",
        exitClass: e.exitClass || C + "-exit",
        exitToClass: e.exitToClass || C + "-exit-to",
        moveClass: e.moveClass || C + "-move"
      }
    }),
    {
      onBeforeEnter: r,
      onEnter: o,
      onAfterEnter: i,
      onBeforeExit: a,
      onExit: l,
      onAfterExit: h
    } = e,
    [v, m] = xe();
  let y = [],
    w = !0;
  return bo(() => {
    const C = t(),
      b = [...C],
      S = new Set(C),
      M = new Set(y),
      ee = n().enterClass.split(" "),
      V = n().enterActiveClass.split(" "),
      D = n().enterToClass.split(" "),
      z = n().exitClass.split(" "),
      B = n().exitActiveClass.split(" "),
      q = n().exitToClass.split(" ");
    for (let P = 0; P < C.length; P++) {
      const R = C[P];
      if (!w && !M.has(R)) {
        let E = function(W) {
          R && (!W || W.target === R) && (R.removeEventListener("transitionend", E), R.removeEventListener("animationend", E), R.classList.remove(...V), R.classList.remove(...D), i && i(R))
        };
        r && r(R), R.classList.add(...ee), R.classList.add(...V), To(() => {
          R.classList.remove(...ee), R.classList.add(...D), o && o(R, () => E()), (!o || o.length < 2) && (R.addEventListener("transitionend", E), R.addEventListener("animationend", E))
        })
      }
    }
    for (let P = 0; P < y.length; P++) {
      const R = y[P];
      if (!S.has(R) && R.parentNode) {
        let E = function(W) {
          (!W || W.target === R) && (R.removeEventListener("transitionend", E), R.removeEventListener("animationend", E), R.classList.remove(...B), R.classList.remove(...q), h && h(R), y = y.filter(k => k !== R), m(y))
        };
        b.splice(P, 0, R), a && a(R), R.classList.add(...z), R.classList.add(...B), To(() => {
          R.classList.remove(...z), R.classList.add(...q)
        }), l && l(R, () => E()), (!l || l.length < 2) && (R.addEventListener("transitionend", E), R.addEventListener("animationend", E))
      }
    }
    y = b, m(b)
  }), At(C => {
    const b = v();
    return b.forEach(S => {
      let M;
      (M = C.get(S)) ? M.new && (M.new = !1, M.newPos = so(S)): C.set(S, M = {
        pos: so(S),
        new: !w
      }), M.new && S.addEventListener("transitionend", () => {
        M.new = !1, S.parentNode && (M.newPos = so(S))
      }, {
        once: !0
      }), M.newPos && (M.pos = M.newPos), M.newPos = so(S)
    }), w ? (w = !1, C) : (b.forEach(S => {
      const M = C.get(S),
        ee = M.pos,
        V = M.newPos,
        D = ee.left - V.left,
        z = ee.top - V.top;
      if (D || z) {
        M.moved = !0;
        const B = S.style;
        B.transform = `translate(${D}px,${z}px)`, B.transitionDuration = "0s"
      }
    }), document.body.offsetHeight, b.forEach(S => {
      const M = C.get(S);
      if (M.moved) {
        let ee = function(z) {
          z && z.target !== S || !S.parentNode || (!z || /transform$/.test(z.propertyName)) && (S.removeEventListener("transitionend", ee), S.classList.remove(...D))
        };
        M.moved = !1;
        const V = S.style,
          D = n().moveClass.split(" ");
        S.classList.add(...D), V.transform = V.transitionDuration = "", S.addEventListener("transitionend", ee)
      }
    }), C)
  }, new Map), v
};

function A1(e, t) {
  const n = r => {
    var o;
    return !e.contains(r.target) && ((o = t()) == null ? void 0 : o())
  };
  document.body.addEventListener("click", n), jt(() => document.body.removeEventListener("click", n))
}

function T1(e, t) {
  const n = r => {
    var o, i;
    r.key === "Escape" && ((o = document.activeElement) == null || o.blur(), (i = t()) == null || i())
  };
  document.body.addEventListener("keydown", n), jt(() => document.body.removeEventListener("keydown", n))
}

function L1(e, t) {
  const {
    isEnabled: n,
    onClose: r
  } = t();
  if (!n || !(Qi().os === "android")) return;
  window.history.pushState(M1, "");
  const i = a => {
    a.preventDefault(), r()
  };
  window.addEventListener("popstate", i, {
    once: !0
  }), jt(() => {
    window.removeEventListener("popstate", i), ja(() => {
      var a;
      ((a = window.history.state) == null ? void 0 : a[Xa]) === !0 && window.history.back()
    })
  })
}
const Xa = "androidBackHandler",
  M1 = {
    [Xa]: !0
  },
  $1 = je('<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></path></svg>', 4, !0),
  R1 = {
    left: 0,
    top: 90,
    right: 180,
    bottom: 270
  },
  el = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.secondary,
      r = () => e.direction || "left",
      o = I("svg")`
        transform: rotate(${i=>R1[i.svgDirection]}deg);
        transition: transform 0.1s ease-in-out;
    `;
    return d(o, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      get svgDirection() {
        return r()
      },
      get children() {
        const i = $1.cloneNode(!0);
        return Oe(() => ve(i, "fill", n())), i
      }
    })
  },
  B1 = je('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z"></path></svg>'),
  I1 = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = B1.cloneNode(!0),
        o = r.firstChild;
      return Oe(() => ve(o, "fill", n())), r
    })()
  },
  P1 = I.button`
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

    ${Yr} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${zr} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
  Xn = e => {
    const t = Qr(e),
      n = () => e.icon || "close";
    return d(P1, sn({
      get class() {
        return e.class
      },
      onClick: () => e.onClick(),
      "data-tc-icon-button": "true"
    }, t, {
      get children() {
        return [d(_e, {
          get when() {
            return !!e.children
          },
          get children() {
            return e.children
          }
        }), d(_e, {
          get when() {
            return !e.children
          },
          get children() {
            return d(Zr, {
              get children() {
                return [d($t, {
                  get when() {
                    return n() === "close"
                  },
                  get children() {
                    return d(I1, {
                      get fill() {
                        return e.fill
                      }
                    })
                  }
                }), d($t, {
                  get when() {
                    return n() === "arrow"
                  },
                  get children() {
                    return d(el, {
                      get fill() {
                        return e.fill
                      }
                    })
                  }
                }), d($t, {
                  get when() {
                    return n() === "question"
                  },
                  get children() {
                    return d(Ou, {
                      get fill() {
                        return e.fill
                      }
                    })
                  }
                }), d($t, {
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
  sr = {
    m: "24px",
    s: "16px",
    none: "0"
  },
  W1 = I.div`
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

    ${Yt("mobile")} {
        padding-bottom: 0;
    }
`,
  U1 = En`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
    width: fit-content;
    margin: auto;

    ${Yt("mobile")} {
        width: 100%;
        height: fit-content;
        margin: auto 0 0 0;
    }
`,
  N1 = I.div`
    position: relative;
    min-height: 100px;
    width: 416px;
    padding: 44px 56px 24px;

    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>sr[e.theme.borderRadius]};

    ${Yt("mobile")} {
        width: 100%;
    }
`,
  D1 = I(Xn)`
    position: absolute;
    right: 16px;
    top: 16px;
`,
  O1 = I.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 18px;
    border-radius: 0 0 ${e=>sr[e.theme.borderRadius]}
        ${e=>sr[e.theme.borderRadius]};
`,
  j1 = I(Xn)`
    background-color: ${e=>Gr(e.theme.colors.icon.secondary,.12)};
`;
class H1 {
  constructor() {
    ye(this, "currentTime", 0)
  }
}
const br = class {
  constructor() {
    ye(this, "currentTime", 0), ye(this, "playbackRate", 1), ye(this, "startTime", null), ye(this, "timeline", new H1), ye(this, "finished", Promise.resolve(this)), ye(this, "effect", null), ye(this, "id", ""), ye(this, "pending", !1), ye(this, "playState", "finished"), ye(this, "replaceState", "active"), ye(this, "ready", Promise.resolve(this)), ye(this, "oncancel", null), ye(this, "onfinish", null), ye(this, "onremove", null)
  }
  static create() {
    return br._instance || (B0("Animation is not supported in this environment: please consider using the `web-animations-js` polyfill to provide a fallback implementation of the Web Animations API."), br._instance = new br), br._instance
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
let tl = br;
ye(tl, "_instance", null);

function on(e, t, n) {
  return "animate" in e ? e.animate(t, n) : tl.create()
}
const F1 = je("<div></div>"),
  K1 = A1,
  V1 = T1,
  q1 = L1,
  nl = e => {
    const t = it(),
      n = Qr(e);
    return At(() => {
      e.opened ? W0() : U0()
    }), d(ns, {
      onBeforeEnter: r => {
        const o = or("mobile") ? 200 : 100;
        on(r, [{
          opacity: 0
        }, {
          opacity: 1
        }], {
          duration: o
        }), or("mobile") && on(r.firstElementChild, [{
          transform: "translateY(390px)"
        }, {
          transform: "translateY(0)"
        }], {
          duration: o
        })
      },
      onExit: (r, o) => {
        const i = or("mobile") ? 200 : 100,
          a = on(r, [{
            opacity: 1
          }, {
            opacity: 0
          }], {
            duration: i
          });
        if (or("mobile")) {
          const l = on(r.firstElementChild, [{
            transform: "translateY(0)"
          }, {
            transform: "translateY(390px)"
          }], {
            duration: i
          });
          Promise.all([a.finished, l.finished]).then(o)
        } else a.finished.then(o)
      },
      get children() {
        return d(_e, {
          get when() {
            return e.opened
          },
          get children() {
            return d(W1, sn({
              "data-tc-modal": "true"
            }, n, {
              get children() {
                const r = F1.cloneNode(!0);
                return ir(q1, r, () => ({
                  isEnabled: e.enableAndroidBackHandler,
                  onClose: () => e.onClose()
                })), ir(V1, r, () => () => e.onClose()), ir(K1, r, () => () => e.onClose()), Rt(r, d(N1, {
                  get class() {
                    return e.class
                  },
                  get children() {
                    return [d(D1, {
                      icon: "close",
                      onClick: () => e.onClose()
                    }), ie(() => e.children)]
                  }
                }), null), Rt(r, d(_e, {
                  get when() {
                    return e.onClickQuestion
                  },
                  get children() {
                    return d(O1, {
                      get children() {
                        return [d(Nu, {}), d(j1, {
                          get onClick() {
                            return e.onClickQuestion
                          },
                          icon: "question"
                        })]
                      }
                    })
                  }
                }), null), Oe(() => Zi(r, fo(U1, En`
                                border-radius: ${sr[t.borderRadius]};
                                background-color: ${t.colors.background.tint};

                                ${Yt("mobile")} {
                                    border-radius: ${sr[t.borderRadius]}
                                        ${sr[t.borderRadius]} 0 0;
                                }
                            `))), r
              }
            }))
          }
        })
      }
    })
  },
  Z1 = {
    m: "22px",
    s: "12px",
    none: "0"
  },
  G1 = {
    m: "18px",
    s: "8px",
    none: "0"
  },
  z1 = I.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: fit-content;
    justify-items: center;
    gap: 4px;

    position: relative;
    padding: 4px;
    border-radius: ${e=>Z1[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.secondary};
`,
  Y1 = I.div`
    position: absolute;
    top: 4px;
    left: 4px;

    height: calc(100% - 8px);
    width: calc(50% - 4px);

    border-radius: ${e=>G1[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.segment};

    transform: ${e=>e.right?"translateX(100%)":"translateX(0)"};

    transition: transform 0.13s ease-in-out;
`,
  Hs = I.input`
    display: none;
`,
  Fs = I.label`
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
  Q1 = e => {
    const t = "tabBar" + Math.floor(Math.random() * 1e4);
    return d(z1, {
      get class() {
        return e.class
      },
      "data-tc-tab-bar": "true",
      get children() {
        return [d(Y1, {
          get right() {
            return e.selectedTabIndex === 1
          }
        }), d(Fs, {
          get isActive() {
            return e.selectedTabIndex === 0
          },
          get children() {
            return [d(Hs, {
              type: "radio",
              name: t,
              get checked() {
                return e.selectedTabIndex === 0
              },
              onInput: () => {
                var n;
                return (n = e.onSelectedTabIndexChange) == null ? void 0 : n.call(e, 0)
              }
            }), ie(() => e.tab1)]
          }
        }), d(Fs, {
          get isActive() {
            return e.selectedTabIndex === 1
          },
          get children() {
            return [d(Hs, {
              type: "radio",
              get checked() {
                return e.selectedTabIndex === 1
              },
              name: t,
              onInput: () => {
                var n;
                return (n = e.onSelectedTabIndexChange) == null ? void 0 : n.call(e, 1)
              }
            }), ie(() => e.tab2)]
          }
        })]
      }
    })
  },
  J1 = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  X1 = {
    m: "12px",
    s: "8px",
    none: "0"
  },
  rl = 256,
  Si = 60,
  Ks = 48,
  Vs = 24,
  go = I.div`
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
  eu = I.button`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${e=>e.theme.colors.background.qr};
    border-radius: ${e=>J1[e.theme.borderRadius]};
    padding: ${an(Vs)} 0;
    height: ${an(rl+Vs*2)};
    width: 100%;

    overflow: hidden;
    cursor: pointer;
    border: none;

    ${Yr} {
        &:hover {
            ${go.class} {
                transform: scale(1.04);
            }
        }
    }

    &:active {
        ${go.class} {
            transform: scale(0.96);
        }
    }

    ${zr} {
        &:active {
            ${go.class} {
                transform: scale(0.92);
            }
        }
    }
`,
  tu = I.div`
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
  nu = I.div`
    position: absolute;
    width: ${an(Si)};
    height: ${an(Si)};
    background: ${e=>e.theme.colors.background.qr};

    display: flex;
    align-items: center;
    justify-content: center;
`,
  ru = I(Jn)`
    width: ${e=>an(e.size)};
    height: ${e=>an(e.size)};
    border-radius: ${e=>X1[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.qr};
`,
  ou = I.div`
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
var ol = {
  exports: {}
};
(function(e, t) {
  var n = function() {
    var r = function(B, q) {
      var P = 236,
        R = 17,
        E = B,
        W = i[q],
        k = null,
        x = 0,
        J = null,
        G = [],
        Q = {},
        me = function(U, N) {
          x = E * 4 + 17, k = function($) {
            for (var F = new Array($), K = 0; K < $; K += 1) {
              F[K] = new Array($);
              for (var te = 0; te < $; te += 1) F[K][te] = null
            }
            return F
          }(x), Ee(0, 0), Ee(x - 7, 0), Ee(0, x - 7), ft(), Xe(), Ct(U, N), E >= 7 && It(U), J == null && (J = Re(E, W, G)), st(J, N)
        },
        Ee = function(U, N) {
          for (var $ = -1; $ <= 7; $ += 1)
            if (!(U + $ <= -1 || x <= U + $))
              for (var F = -1; F <= 7; F += 1) N + F <= -1 || x <= N + F || (0 <= $ && $ <= 6 && (F == 0 || F == 6) || 0 <= F && F <= 6 && ($ == 0 || $ == 6) || 2 <= $ && $ <= 4 && 2 <= F && F <= 4 ? k[U + $][N + F] = !0 : k[U + $][N + F] = !1)
        },
        Fe = function() {
          for (var U = 0, N = 0, $ = 0; $ < 8; $ += 1) {
            me(!0, $);
            var F = l.getLostPoint(Q);
            ($ == 0 || U > F) && (U = F, N = $)
          }
          return N
        },
        Xe = function() {
          for (var U = 8; U < x - 8; U += 1) k[U][6] == null && (k[U][6] = U % 2 == 0);
          for (var N = 8; N < x - 8; N += 1) k[6][N] == null && (k[6][N] = N % 2 == 0)
        },
        ft = function() {
          for (var U = l.getPatternPosition(E), N = 0; N < U.length; N += 1)
            for (var $ = 0; $ < U.length; $ += 1) {
              var F = U[N],
                K = U[$];
              if (k[F][K] == null)
                for (var te = -2; te <= 2; te += 1)
                  for (var we = -2; we <= 2; we += 1) te == -2 || te == 2 || we == -2 || we == 2 || te == 0 && we == 0 ? k[F + te][K + we] = !0 : k[F + te][K + we] = !1
            }
        },
        It = function(U) {
          for (var N = l.getBCHTypeNumber(E), $ = 0; $ < 18; $ += 1) {
            var F = !U && (N >> $ & 1) == 1;
            k[Math.floor($ / 3)][$ % 3 + x - 8 - 3] = F
          }
          for (var $ = 0; $ < 18; $ += 1) {
            var F = !U && (N >> $ & 1) == 1;
            k[$ % 3 + x - 8 - 3][Math.floor($ / 3)] = F
          }
        },
        Ct = function(U, N) {
          for (var $ = W << 3 | N, F = l.getBCHTypeInfo($), K = 0; K < 15; K += 1) {
            var te = !U && (F >> K & 1) == 1;
            K < 6 ? k[K][8] = te : K < 8 ? k[K + 1][8] = te : k[x - 15 + K][8] = te
          }
          for (var K = 0; K < 15; K += 1) {
            var te = !U && (F >> K & 1) == 1;
            K < 8 ? k[8][x - K - 1] = te : K < 9 ? k[8][15 - K - 1 + 1] = te : k[8][15 - K - 1] = te
          }
          k[x - 8][8] = !U
        },
        st = function(U, N) {
          for (var $ = -1, F = x - 1, K = 7, te = 0, we = l.getMaskFunction(N), fe = x - 1; fe > 0; fe -= 2)
            for (fe == 6 && (fe -= 1);;) {
              for (var tt = 0; tt < 2; tt += 1)
                if (k[F][fe - tt] == null) {
                  var lt = !1;
                  te < U.length && (lt = (U[te] >>> K & 1) == 1);
                  var pe = we(F, fe - tt);
                  pe && (lt = !lt), k[F][fe - tt] = lt, K -= 1, K == -1 && (te += 1, K = 7)
                } if (F += $, F < 0 || x <= F) {
                F -= $, $ = -$;
                break
              }
            }
        },
        pt = function(U, N) {
          for (var $ = 0, F = 0, K = 0, te = new Array(N.length), we = new Array(N.length), fe = 0; fe < N.length; fe += 1) {
            var tt = N[fe].dataCount,
              lt = N[fe].totalCount - tt;
            F = Math.max(F, tt), K = Math.max(K, lt), te[fe] = new Array(tt);
            for (var pe = 0; pe < te[fe].length; pe += 1) te[fe][pe] = 255 & U.getBuffer()[pe + $];
            $ += tt;
            var ct = l.getErrorCorrectPolynomial(lt),
              St = v(te[fe], ct.getLength() - 1),
              Mn = St.mod(ct);
            we[fe] = new Array(ct.getLength() - 1);
            for (var pe = 0; pe < we[fe].length; pe += 1) {
              var gn = pe + Mn.getLength() - we[fe].length;
              we[fe][pe] = gn >= 0 ? Mn.getAt(gn) : 0
            }
          }
          for (var Tt = 0, pe = 0; pe < N.length; pe += 1) Tt += N[pe].totalCount;
          for (var Ot = new Array(Tt), Vt = 0, pe = 0; pe < F; pe += 1)
            for (var fe = 0; fe < N.length; fe += 1) pe < te[fe].length && (Ot[Vt] = te[fe][pe], Vt += 1);
          for (var pe = 0; pe < K; pe += 1)
            for (var fe = 0; fe < N.length; fe += 1) pe < we[fe].length && (Ot[Vt] = we[fe][pe], Vt += 1);
          return Ot
        },
        Re = function(U, N, $) {
          for (var F = m.getRSBlocks(U, N), K = y(), te = 0; te < $.length; te += 1) {
            var we = $[te];
            K.put(we.getMode(), 4), K.put(we.getLength(), l.getLengthInBits(we.getMode(), U)), we.write(K)
          }
          for (var fe = 0, te = 0; te < F.length; te += 1) fe += F[te].dataCount;
          if (K.getLengthInBits() > fe * 8) throw "code length overflow. (" + K.getLengthInBits() + ">" + fe * 8 + ")";
          for (K.getLengthInBits() + 4 <= fe * 8 && K.put(0, 4); K.getLengthInBits() % 8 != 0;) K.putBit(!1);
          for (; !(K.getLengthInBits() >= fe * 8 || (K.put(P, 8), K.getLengthInBits() >= fe * 8));) K.put(R, 8);
          return pt(K, F)
        };
      Q.addData = function(U, N) {
        N = N || "Byte";
        var $ = null;
        switch (N) {
          case "Numeric":
            $ = w(U);
            break;
          case "Alphanumeric":
            $ = C(U);
            break;
          case "Byte":
            $ = b(U);
            break;
          case "Kanji":
            $ = S(U);
            break;
          default:
            throw "mode:" + N
        }
        G.push($), J = null
      }, Q.isDark = function(U, N) {
        if (U < 0 || x <= U || N < 0 || x <= N) throw U + "," + N;
        return k[U][N]
      }, Q.getModuleCount = function() {
        return x
      }, Q.make = function() {
        if (E < 1) {
          for (var U = 1; U < 40; U++) {
            for (var N = m.getRSBlocks(U, W), $ = y(), F = 0; F < G.length; F++) {
              var K = G[F];
              $.put(K.getMode(), 4), $.put(K.getLength(), l.getLengthInBits(K.getMode(), U)), K.write($)
            }
            for (var te = 0, F = 0; F < N.length; F++) te += N[F].dataCount;
            if ($.getLengthInBits() <= te * 8) break
          }
          E = U
        }
        me(!1, Fe())
      }, Q.createTableTag = function(U, N) {
        U = U || 2, N = typeof N > "u" ? U * 4 : N;
        var $ = "";
        $ += '<table style="', $ += " border-width: 0px; border-style: none;", $ += " border-collapse: collapse;", $ += " padding: 0px; margin: " + N + "px;", $ += '">', $ += "<tbody>";
        for (var F = 0; F < Q.getModuleCount(); F += 1) {
          $ += "<tr>";
          for (var K = 0; K < Q.getModuleCount(); K += 1) $ += '<td style="', $ += " border-width: 0px; border-style: none;", $ += " border-collapse: collapse;", $ += " padding: 0px; margin: 0px;", $ += " width: " + U + "px;", $ += " height: " + U + "px;", $ += " background-color: ", $ += Q.isDark(F, K) ? "#000000" : "#ffffff", $ += ";", $ += '"/>';
          $ += "</tr>"
        }
        return $ += "</tbody>", $ += "</table>", $
      }, Q.createSvgTag = function(U, N, $, F) {
        var K = {};
        typeof arguments[0] == "object" && (K = arguments[0], U = K.cellSize, N = K.margin, $ = K.alt, F = K.title), U = U || 2, N = typeof N > "u" ? U * 4 : N, $ = typeof $ == "string" ? {
          text: $
        } : $ || {}, $.text = $.text || null, $.id = $.text ? $.id || "qrcode-description" : null, F = typeof F == "string" ? {
          text: F
        } : F || {}, F.text = F.text || null, F.id = F.text ? F.id || "qrcode-title" : null;
        var te = Q.getModuleCount() * U + N * 2,
          we, fe, tt, lt, pe = "",
          ct;
        for (ct = "l" + U + ",0 0," + U + " -" + U + ",0 0,-" + U + "z ", pe += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', pe += K.scalable ? "" : ' width="' + te + 'px" height="' + te + 'px"', pe += ' viewBox="0 0 ' + te + " " + te + '" ', pe += ' preserveAspectRatio="xMinYMin meet"', pe += F.text || $.text ? ' role="img" aria-labelledby="' + ht([F.id, $.id].join(" ").trim()) + '"' : "", pe += ">", pe += F.text ? '<title id="' + ht(F.id) + '">' + ht(F.text) + "</title>" : "", pe += $.text ? '<description id="' + ht($.id) + '">' + ht($.text) + "</description>" : "", pe += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', pe += '<path d="', tt = 0; tt < Q.getModuleCount(); tt += 1)
          for (lt = tt * U + N, we = 0; we < Q.getModuleCount(); we += 1) Q.isDark(tt, we) && (fe = we * U + N, pe += "M" + fe + "," + lt + ct);
        return pe += '" stroke="transparent" fill="black"/>', pe += "</svg>", pe
      }, Q.createDataURL = function(U, N) {
        U = U || 2, N = typeof N > "u" ? U * 4 : N;
        var $ = Q.getModuleCount() * U + N * 2,
          F = N,
          K = $ - N;
        return z($, $, function(te, we) {
          if (F <= te && te < K && F <= we && we < K) {
            var fe = Math.floor((te - F) / U),
              tt = Math.floor((we - F) / U);
            return Q.isDark(tt, fe) ? 0 : 1
          } else return 1
        })
      }, Q.createImgTag = function(U, N, $) {
        U = U || 2, N = typeof N > "u" ? U * 4 : N;
        var F = Q.getModuleCount() * U + N * 2,
          K = "";
        return K += "<img", K += ' src="', K += Q.createDataURL(U, N), K += '"', K += ' width="', K += F, K += '"', K += ' height="', K += F, K += '"', $ && (K += ' alt="', K += ht($), K += '"'), K += "/>", K
      };
      var ht = function(U) {
          for (var N = "", $ = 0; $ < U.length; $ += 1) {
            var F = U.charAt($);
            switch (F) {
              case "<":
                N += "&lt;";
                break;
              case ">":
                N += "&gt;";
                break;
              case "&":
                N += "&amp;";
                break;
              case '"':
                N += "&quot;";
                break;
              default:
                N += F;
                break
            }
          }
          return N
        },
        Ln = function(U) {
          var N = 1;
          U = typeof U > "u" ? N * 2 : U;
          var $ = Q.getModuleCount() * N + U * 2,
            F = U,
            K = $ - U,
            te, we, fe, tt, lt, pe = {
              "██": "█",
              "█ ": "▀",
              " █": "▄",
              "  ": " "
            },
            ct = {
              "██": "▀",
              "█ ": "▀",
              " █": " ",
              "  ": " "
            },
            St = "";
          for (te = 0; te < $; te += 2) {
            for (fe = Math.floor((te - F) / N), tt = Math.floor((te + 1 - F) / N), we = 0; we < $; we += 1) lt = "█", F <= we && we < K && F <= te && te < K && Q.isDark(fe, Math.floor((we - F) / N)) && (lt = " "), F <= we && we < K && F <= te + 1 && te + 1 < K && Q.isDark(tt, Math.floor((we - F) / N)) ? lt += " " : lt += "█", St += U < 1 && te + 1 >= K ? ct[lt] : pe[lt];
            St += `
`
          }
          return $ % 2 && U > 0 ? St.substring(0, St.length - $ - 1) + Array($ + 1).join("▀") : St.substring(0, St.length - 1)
        };
      return Q.createASCII = function(U, N) {
        if (U = U || 1, U < 2) return Ln(N);
        U -= 1, N = typeof N > "u" ? U * 2 : N;
        var $ = Q.getModuleCount() * U + N * 2,
          F = N,
          K = $ - N,
          te, we, fe, tt, lt = Array(U + 1).join("██"),
          pe = Array(U + 1).join("  "),
          ct = "",
          St = "";
        for (te = 0; te < $; te += 1) {
          for (fe = Math.floor((te - F) / U), St = "", we = 0; we < $; we += 1) tt = 1, F <= we && we < K && F <= te && te < K && Q.isDark(fe, Math.floor((we - F) / U)) && (tt = 0), St += tt ? lt : pe;
          for (fe = 0; fe < U; fe += 1) ct += St + `
`
        }
        return ct.substring(0, ct.length - 1)
      }, Q.renderTo2dContext = function(U, N) {
        N = N || 2;
        for (var $ = Q.getModuleCount(), F = 0; F < $; F++)
          for (var K = 0; K < $; K++) U.fillStyle = Q.isDark(F, K) ? "black" : "white", U.fillRect(F * N, K * N, N, N)
      }, Q
    };
    r.stringToBytesFuncs = {
      default: function(B) {
        for (var q = [], P = 0; P < B.length; P += 1) {
          var R = B.charCodeAt(P);
          q.push(R & 255)
        }
        return q
      }
    }, r.stringToBytes = r.stringToBytesFuncs.default, r.createStringToBytes = function(B, q) {
      var P = function() {
          for (var E = V(B), W = function() {
              var Xe = E.read();
              if (Xe == -1) throw "eof";
              return Xe
            }, k = 0, x = {};;) {
            var J = E.read();
            if (J == -1) break;
            var G = W(),
              Q = W(),
              me = W(),
              Ee = String.fromCharCode(J << 8 | G),
              Fe = Q << 8 | me;
            x[Ee] = Fe, k += 1
          }
          if (k != q) throw k + " != " + q;
          return x
        }(),
        R = 63;
      return function(E) {
        for (var W = [], k = 0; k < E.length; k += 1) {
          var x = E.charCodeAt(k);
          if (x < 128) W.push(x);
          else {
            var J = P[E.charAt(k)];
            typeof J == "number" ? (J & 255) == J ? W.push(J) : (W.push(J >>> 8), W.push(J & 255)) : W.push(R)
          }
        }
        return W
      }
    };
    var o = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
      },
      i = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
      },
      a = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
      },
      l = function() {
        var B = [
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
          q = 1335,
          P = 7973,
          R = 21522,
          E = {},
          W = function(k) {
            for (var x = 0; k != 0;) x += 1, k >>>= 1;
            return x
          };
        return E.getBCHTypeInfo = function(k) {
          for (var x = k << 10; W(x) - W(q) >= 0;) x ^= q << W(x) - W(q);
          return (k << 10 | x) ^ R
        }, E.getBCHTypeNumber = function(k) {
          for (var x = k << 12; W(x) - W(P) >= 0;) x ^= P << W(x) - W(P);
          return k << 12 | x
        }, E.getPatternPosition = function(k) {
          return B[k - 1]
        }, E.getMaskFunction = function(k) {
          switch (k) {
            case a.PATTERN000:
              return function(x, J) {
                return (x + J) % 2 == 0
              };
            case a.PATTERN001:
              return function(x, J) {
                return x % 2 == 0
              };
            case a.PATTERN010:
              return function(x, J) {
                return J % 3 == 0
              };
            case a.PATTERN011:
              return function(x, J) {
                return (x + J) % 3 == 0
              };
            case a.PATTERN100:
              return function(x, J) {
                return (Math.floor(x / 2) + Math.floor(J / 3)) % 2 == 0
              };
            case a.PATTERN101:
              return function(x, J) {
                return x * J % 2 + x * J % 3 == 0
              };
            case a.PATTERN110:
              return function(x, J) {
                return (x * J % 2 + x * J % 3) % 2 == 0
              };
            case a.PATTERN111:
              return function(x, J) {
                return (x * J % 3 + (x + J) % 2) % 2 == 0
              };
            default:
              throw "bad maskPattern:" + k
          }
        }, E.getErrorCorrectPolynomial = function(k) {
          for (var x = v([1], 0), J = 0; J < k; J += 1) x = x.multiply(v([1, h.gexp(J)], 0));
          return x
        }, E.getLengthInBits = function(k, x) {
          if (1 <= x && x < 10) switch (k) {
            case o.MODE_NUMBER:
              return 10;
            case o.MODE_ALPHA_NUM:
              return 9;
            case o.MODE_8BIT_BYTE:
              return 8;
            case o.MODE_KANJI:
              return 8;
            default:
              throw "mode:" + k
          } else if (x < 27) switch (k) {
            case o.MODE_NUMBER:
              return 12;
            case o.MODE_ALPHA_NUM:
              return 11;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 10;
            default:
              throw "mode:" + k
          } else if (x < 41) switch (k) {
            case o.MODE_NUMBER:
              return 14;
            case o.MODE_ALPHA_NUM:
              return 13;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 12;
            default:
              throw "mode:" + k
          } else throw "type:" + x
        }, E.getLostPoint = function(k) {
          for (var x = k.getModuleCount(), J = 0, G = 0; G < x; G += 1)
            for (var Q = 0; Q < x; Q += 1) {
              for (var me = 0, Ee = k.isDark(G, Q), Fe = -1; Fe <= 1; Fe += 1)
                if (!(G + Fe < 0 || x <= G + Fe))
                  for (var Xe = -1; Xe <= 1; Xe += 1) Q + Xe < 0 || x <= Q + Xe || Fe == 0 && Xe == 0 || Ee == k.isDark(G + Fe, Q + Xe) && (me += 1);
              me > 5 && (J += 3 + me - 5)
            }
          for (var G = 0; G < x - 1; G += 1)
            for (var Q = 0; Q < x - 1; Q += 1) {
              var ft = 0;
              k.isDark(G, Q) && (ft += 1), k.isDark(G + 1, Q) && (ft += 1), k.isDark(G, Q + 1) && (ft += 1), k.isDark(G + 1, Q + 1) && (ft += 1), (ft == 0 || ft == 4) && (J += 3)
            }
          for (var G = 0; G < x; G += 1)
            for (var Q = 0; Q < x - 6; Q += 1) k.isDark(G, Q) && !k.isDark(G, Q + 1) && k.isDark(G, Q + 2) && k.isDark(G, Q + 3) && k.isDark(G, Q + 4) && !k.isDark(G, Q + 5) && k.isDark(G, Q + 6) && (J += 40);
          for (var Q = 0; Q < x; Q += 1)
            for (var G = 0; G < x - 6; G += 1) k.isDark(G, Q) && !k.isDark(G + 1, Q) && k.isDark(G + 2, Q) && k.isDark(G + 3, Q) && k.isDark(G + 4, Q) && !k.isDark(G + 5, Q) && k.isDark(G + 6, Q) && (J += 40);
          for (var It = 0, Q = 0; Q < x; Q += 1)
            for (var G = 0; G < x; G += 1) k.isDark(G, Q) && (It += 1);
          var Ct = Math.abs(100 * It / x / x - 50) / 5;
          return J += Ct * 10, J
        }, E
      }(),
      h = function() {
        for (var B = new Array(256), q = new Array(256), P = 0; P < 8; P += 1) B[P] = 1 << P;
        for (var P = 8; P < 256; P += 1) B[P] = B[P - 4] ^ B[P - 5] ^ B[P - 6] ^ B[P - 8];
        for (var P = 0; P < 255; P += 1) q[B[P]] = P;
        var R = {};
        return R.glog = function(E) {
          if (E < 1) throw "glog(" + E + ")";
          return q[E]
        }, R.gexp = function(E) {
          for (; E < 0;) E += 255;
          for (; E >= 256;) E -= 255;
          return B[E]
        }, R
      }();

    function v(B, q) {
      if (typeof B.length > "u") throw B.length + "/" + q;
      var P = function() {
          for (var E = 0; E < B.length && B[E] == 0;) E += 1;
          for (var W = new Array(B.length - E + q), k = 0; k < B.length - E; k += 1) W[k] = B[k + E];
          return W
        }(),
        R = {};
      return R.getAt = function(E) {
        return P[E]
      }, R.getLength = function() {
        return P.length
      }, R.multiply = function(E) {
        for (var W = new Array(R.getLength() + E.getLength() - 1), k = 0; k < R.getLength(); k += 1)
          for (var x = 0; x < E.getLength(); x += 1) W[k + x] ^= h.gexp(h.glog(R.getAt(k)) + h.glog(E.getAt(x)));
        return v(W, 0)
      }, R.mod = function(E) {
        if (R.getLength() - E.getLength() < 0) return R;
        for (var W = h.glog(R.getAt(0)) - h.glog(E.getAt(0)), k = new Array(R.getLength()), x = 0; x < R.getLength(); x += 1) k[x] = R.getAt(x);
        for (var x = 0; x < E.getLength(); x += 1) k[x] ^= h.gexp(h.glog(E.getAt(x)) + W);
        return v(k, 0).mod(E)
      }, R
    }
    var m = function() {
        var B = [
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
          q = function(E, W) {
            var k = {};
            return k.totalCount = E, k.dataCount = W, k
          },
          P = {},
          R = function(E, W) {
            switch (W) {
              case i.L:
                return B[(E - 1) * 4 + 0];
              case i.M:
                return B[(E - 1) * 4 + 1];
              case i.Q:
                return B[(E - 1) * 4 + 2];
              case i.H:
                return B[(E - 1) * 4 + 3];
              default:
                return
            }
          };
        return P.getRSBlocks = function(E, W) {
          var k = R(E, W);
          if (typeof k > "u") throw "bad rs block @ typeNumber:" + E + "/errorCorrectionLevel:" + W;
          for (var x = k.length / 3, J = [], G = 0; G < x; G += 1)
            for (var Q = k[G * 3 + 0], me = k[G * 3 + 1], Ee = k[G * 3 + 2], Fe = 0; Fe < Q; Fe += 1) J.push(q(me, Ee));
          return J
        }, P
      }(),
      y = function() {
        var B = [],
          q = 0,
          P = {};
        return P.getBuffer = function() {
          return B
        }, P.getAt = function(R) {
          var E = Math.floor(R / 8);
          return (B[E] >>> 7 - R % 8 & 1) == 1
        }, P.put = function(R, E) {
          for (var W = 0; W < E; W += 1) P.putBit((R >>> E - W - 1 & 1) == 1)
        }, P.getLengthInBits = function() {
          return q
        }, P.putBit = function(R) {
          var E = Math.floor(q / 8);
          B.length <= E && B.push(0), R && (B[E] |= 128 >>> q % 8), q += 1
        }, P
      },
      w = function(B) {
        var q = o.MODE_NUMBER,
          P = B,
          R = {};
        R.getMode = function() {
          return q
        }, R.getLength = function(k) {
          return P.length
        }, R.write = function(k) {
          for (var x = P, J = 0; J + 2 < x.length;) k.put(E(x.substring(J, J + 3)), 10), J += 3;
          J < x.length && (x.length - J == 1 ? k.put(E(x.substring(J, J + 1)), 4) : x.length - J == 2 && k.put(E(x.substring(J, J + 2)), 7))
        };
        var E = function(k) {
            for (var x = 0, J = 0; J < k.length; J += 1) x = x * 10 + W(k.charAt(J));
            return x
          },
          W = function(k) {
            if ("0" <= k && k <= "9") return k.charCodeAt(0) - 48;
            throw "illegal char :" + k
          };
        return R
      },
      C = function(B) {
        var q = o.MODE_ALPHA_NUM,
          P = B,
          R = {};
        R.getMode = function() {
          return q
        }, R.getLength = function(W) {
          return P.length
        }, R.write = function(W) {
          for (var k = P, x = 0; x + 1 < k.length;) W.put(E(k.charAt(x)) * 45 + E(k.charAt(x + 1)), 11), x += 2;
          x < k.length && W.put(E(k.charAt(x)), 6)
        };
        var E = function(W) {
          if ("0" <= W && W <= "9") return W.charCodeAt(0) - 48;
          if ("A" <= W && W <= "Z") return W.charCodeAt(0) - 65 + 10;
          switch (W) {
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
              throw "illegal char :" + W
          }
        };
        return R
      },
      b = function(B) {
        var q = o.MODE_8BIT_BYTE,
          P = r.stringToBytes(B),
          R = {};
        return R.getMode = function() {
          return q
        }, R.getLength = function(E) {
          return P.length
        }, R.write = function(E) {
          for (var W = 0; W < P.length; W += 1) E.put(P[W], 8)
        }, R
      },
      S = function(B) {
        var q = o.MODE_KANJI,
          P = r.stringToBytesFuncs.SJIS;
        if (!P) throw "sjis not supported.";
        (function(W, k) {
          var x = P(W);
          if (x.length != 2 || (x[0] << 8 | x[1]) != k) throw "sjis not supported."
        })("友", 38726);
        var R = P(B),
          E = {};
        return E.getMode = function() {
          return q
        }, E.getLength = function(W) {
          return ~~(R.length / 2)
        }, E.write = function(W) {
          for (var k = R, x = 0; x + 1 < k.length;) {
            var J = (255 & k[x]) << 8 | 255 & k[x + 1];
            if (33088 <= J && J <= 40956) J -= 33088;
            else if (57408 <= J && J <= 60351) J -= 49472;
            else throw "illegal char at " + (x + 1) + "/" + J;
            J = (J >>> 8 & 255) * 192 + (J & 255), W.put(J, 13), x += 2
          }
          if (x < k.length) throw "illegal char at " + (x + 1)
        }, E
      },
      M = function() {
        var B = [],
          q = {};
        return q.writeByte = function(P) {
          B.push(P & 255)
        }, q.writeShort = function(P) {
          q.writeByte(P), q.writeByte(P >>> 8)
        }, q.writeBytes = function(P, R, E) {
          R = R || 0, E = E || P.length;
          for (var W = 0; W < E; W += 1) q.writeByte(P[W + R])
        }, q.writeString = function(P) {
          for (var R = 0; R < P.length; R += 1) q.writeByte(P.charCodeAt(R))
        }, q.toByteArray = function() {
          return B
        }, q.toString = function() {
          var P = "";
          P += "[";
          for (var R = 0; R < B.length; R += 1) R > 0 && (P += ","), P += B[R];
          return P += "]", P
        }, q
      },
      ee = function() {
        var B = 0,
          q = 0,
          P = 0,
          R = "",
          E = {},
          W = function(x) {
            R += String.fromCharCode(k(x & 63))
          },
          k = function(x) {
            if (!(x < 0)) {
              if (x < 26) return 65 + x;
              if (x < 52) return 97 + (x - 26);
              if (x < 62) return 48 + (x - 52);
              if (x == 62) return 43;
              if (x == 63) return 47
            }
            throw "n:" + x
          };
        return E.writeByte = function(x) {
          for (B = B << 8 | x & 255, q += 8, P += 1; q >= 6;) W(B >>> q - 6), q -= 6
        }, E.flush = function() {
          if (q > 0 && (W(B << 6 - q), B = 0, q = 0), P % 3 != 0)
            for (var x = 3 - P % 3, J = 0; J < x; J += 1) R += "="
        }, E.toString = function() {
          return R
        }, E
      },
      V = function(B) {
        var q = B,
          P = 0,
          R = 0,
          E = 0,
          W = {};
        W.read = function() {
          for (; E < 8;) {
            if (P >= q.length) {
              if (E == 0) return -1;
              throw "unexpected end of file./" + E
            }
            var x = q.charAt(P);
            if (P += 1, x == "=") return E = 0, -1;
            if (x.match(/^\s$/)) continue;
            R = R << 6 | k(x.charCodeAt(0)), E += 6
          }
          var J = R >>> E - 8 & 255;
          return E -= 8, J
        };
        var k = function(x) {
          if (65 <= x && x <= 90) return x - 65;
          if (97 <= x && x <= 122) return x - 97 + 26;
          if (48 <= x && x <= 57) return x - 48 + 52;
          if (x == 43) return 62;
          if (x == 47) return 63;
          throw "c:" + x
        };
        return W
      },
      D = function(B, q) {
        var P = B,
          R = q,
          E = new Array(B * q),
          W = {};
        W.setPixel = function(G, Q, me) {
          E[Q * P + G] = me
        }, W.write = function(G) {
          G.writeString("GIF87a"), G.writeShort(P), G.writeShort(R), G.writeByte(128), G.writeByte(0), G.writeByte(0), G.writeByte(0), G.writeByte(0), G.writeByte(0), G.writeByte(255), G.writeByte(255), G.writeByte(255), G.writeString(","), G.writeShort(0), G.writeShort(0), G.writeShort(P), G.writeShort(R), G.writeByte(0);
          var Q = 2,
            me = x(Q);
          G.writeByte(Q);
          for (var Ee = 0; me.length - Ee > 255;) G.writeByte(255), G.writeBytes(me, Ee, 255), Ee += 255;
          G.writeByte(me.length - Ee), G.writeBytes(me, Ee, me.length - Ee), G.writeByte(0), G.writeString(";")
        };
        var k = function(G) {
            var Q = G,
              me = 0,
              Ee = 0,
              Fe = {};
            return Fe.write = function(Xe, ft) {
              if (Xe >>> ft) throw "length over";
              for (; me + ft >= 8;) Q.writeByte(255 & (Xe << me | Ee)), ft -= 8 - me, Xe >>>= 8 - me, Ee = 0, me = 0;
              Ee = Xe << me | Ee, me = me + ft
            }, Fe.flush = function() {
              me > 0 && Q.writeByte(Ee)
            }, Fe
          },
          x = function(G) {
            for (var Q = 1 << G, me = (1 << G) + 1, Ee = G + 1, Fe = J(), Xe = 0; Xe < Q; Xe += 1) Fe.add(String.fromCharCode(Xe));
            Fe.add(String.fromCharCode(Q)), Fe.add(String.fromCharCode(me));
            var ft = M(),
              It = k(ft);
            It.write(Q, Ee);
            var Ct = 0,
              st = String.fromCharCode(E[Ct]);
            for (Ct += 1; Ct < E.length;) {
              var pt = String.fromCharCode(E[Ct]);
              Ct += 1, Fe.contains(st + pt) ? st = st + pt : (It.write(Fe.indexOf(st), Ee), Fe.size() < 4095 && (Fe.size() == 1 << Ee && (Ee += 1), Fe.add(st + pt)), st = pt)
            }
            return It.write(Fe.indexOf(st), Ee), It.write(me, Ee), It.flush(), ft.toByteArray()
          },
          J = function() {
            var G = {},
              Q = 0,
              me = {};
            return me.add = function(Ee) {
              if (me.contains(Ee)) throw "dup key:" + Ee;
              G[Ee] = Q, Q += 1
            }, me.size = function() {
              return Q
            }, me.indexOf = function(Ee) {
              return G[Ee]
            }, me.contains = function(Ee) {
              return typeof G[Ee] < "u"
            }, me
          };
        return W
      },
      z = function(B, q, P) {
        for (var R = D(B, q), E = 0; E < q; E += 1)
          for (var W = 0; W < B; W += 1) R.setPixel(W, E, P(W, E));
        var k = M();
        R.write(k);
        for (var x = ee(), J = k.toByteArray(), G = 0; G < J.length; G += 1) x.writeByte(J[G]);
        return x.flush(), "data:image/gif;base64," + x
      };
    return r
  }();
  (function() {
    n.stringToBytesFuncs["UTF-8"] = function(r) {
      function o(i) {
        for (var a = [], l = 0; l < i.length; l++) {
          var h = i.charCodeAt(l);
          h < 128 ? a.push(h) : h < 2048 ? a.push(192 | h >> 6, 128 | h & 63) : h < 55296 || h >= 57344 ? a.push(224 | h >> 12, 128 | h >> 6 & 63, 128 | h & 63) : (l++, h = 65536 + ((h & 1023) << 10 | i.charCodeAt(l) & 1023), a.push(240 | h >> 18, 128 | h >> 12 & 63, 128 | h >> 6 & 63, 128 | h & 63))
        }
        return a
      }
      return o(r)
    }
  })(),
  function(r) {
    e.exports = r()
  }(function() {
    return n
  })
})(ol);
const iu = ol.exports;

function rs(e) {
  return Je(this, null, function*() {
    try {
      if (!(navigator != null && navigator.clipboard)) throw new bt("Clipboard API not available");
      return yield navigator.clipboard.writeText(e)
    } catch {}
    su(e)
  })
}

function su(e) {
  const t = document.createElement("textarea");
  t.value = e, t.style.top = "0", t.style.left = "0", t.style.position = "fixed", document.body.appendChild(t), t.focus(), t.select();
  try {
    document.execCommand("copy")
  } finally {
    document.body.removeChild(t)
  }
}
const au = je("<div></div>"),
  Fo = e => {
    let t, n, r;
    const [o, i] = xe(!1), [a, l] = xe(Ks);
    At(() => {
      const w = iu(0, "L");
      w.addData(e.sourceUrl), w.make(), t.innerHTML = w.createSvgTag(4, 0);
      const C = t.firstElementChild.clientWidth,
        b = Math.round(rl / C * 1e5) / 1e5;
      if (r) {
        const S = Math.ceil(Si / (b * 4)) * 4,
          M = an(Math.ceil((C - S) / (2 * 4)) * 4);
        r.style.top = M, r.style.left = M, r.style.height = an(S), r.style.width = an(S), l(Math.round(Ks / b))
      }
      n.style.transform = `scale(${b})`
    });
    let h = null;
    return d(eu, {
      get class() {
        return e.class
      },
      onClick: () => {
        i(!0), rs(e.sourceUrl), h != null && clearTimeout(h), h = setTimeout(() => i(!1), 1500)
      },
      get children() {
        return [d(tu, {
          ref(m) {
            const y = n;
            typeof y == "function" ? y(m) : n = m
          },
          get children() {
            return [(() => {
              const m = au.cloneNode(!0),
                y = t;
              return typeof y == "function" ? ir(y, m) : t = m, m
            })(), d(_e, {
              get when() {
                return e.imageUrl
              },
              get children() {
                return d(nu, {
                  ref(m) {
                    const y = r;
                    typeof y == "function" ? y(m) : r = m
                  },
                  get children() {
                    return d(ru, {
                      get src() {
                        return e.imageUrl
                      },
                      alt: "",
                      get size() {
                        return a()
                      }
                    })
                  }
                })
              }
            })]
          }
        }), d(ns, {
          onBeforeEnter: m => {
            on(m, [{
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
          onExit: (m, y) => {
            on(m, [{
              opacity: 1,
              transform: "translate(-50%, 0)"
            }, {
              opacity: 0,
              transform: "translate(-50%, 44px)"
            }], {
              duration: 150,
              easing: "ease-out"
            }).finished.then(() => {
              y()
            })
          },
          get children() {
            return d(_e, {
              get when() {
                return o() && !e.disableCopy
              },
              get children() {
                return d(ou, {
                  get children() {
                    return [d(is, {
                      size: "xs"
                    }), d(zt, {
                      translationKey: "common.linkCopied",
                      children: "Link Copied"
                    })]
                  }
                })
              }
            })
          }
        }), d(_e, {
          get when() {
            return !e.disableCopy
          },
          get children() {
            return d(go, {
              get children() {
                return d(al, {})
              }
            })
          }
        })]
      }
    })
  };
var _i = (e, t, n) => {
    const r = t.trim().split(".").reduce((o, i) => o ? o[i] : void 0, e);
    return r !== void 0 ? r : n
  },
  lu = (e, t, n = /{{(.*?)}}/g) => e.replace(n, (r, o) => _i(t, o, "")),
  cu = (e = {}, t = navigator.language in e ? navigator.language : Object.keys(e)[0]) => {
    const [n, r] = xe(t), [o, i] = Xi(e);
    return [(h, v, m) => {
      const y = _i(o[n()], h, m || "");
      return typeof y == "function" ? y(v) : typeof y == "string" ? lu(y, v || {}) : y
    }, {
      add(h, v) {
        i(h, m => Object.assign(m || {}, v))
      },
      locale: h => h ? r(h) : n(),
      dict: h => _i(o, h)
    }]
  },
  il = Do({}),
  fn = () => Ht(il);
const uu = I.div`
    font-style: normal;
    font-weight: ${e=>e.fontWeight};
    font-size: ${e=>e.fontSize};
    line-height: ${e=>e.lineHeight};

    color: ${e=>e.color};
`,
  zt = e => {
    const t = it(),
      [n] = fn();
    let r;
    const o = () => e.color || t.colors.text.primary,
      i = sn({
        fontSize: "14px",
        fontWeight: "510",
        lineHeight: "130%"
      }, e);
    return At(() => {
      r && i.cursor !== "unset" && getComputedStyle(r).cursor !== "pointer" && (r.style.cursor = "default")
    }), d(uu, {
      get fontSize() {
        return i.fontSize
      },
      get fontWeight() {
        return i.fontWeight
      },
      get lineHeight() {
        return i.lineHeight
      },
      get color() {
        return o()
      },
      get class() {
        return i.class
      },
      ref(a) {
        const l = r;
        typeof l == "function" ? l(a) : r = a
      },
      "data-tc-text": "true",
      get children() {
        var a;
        return ie(() => !!i.translationKey)() ? n(i.translationKey, i.translationValues, (a = i.children) == null ? void 0 : a.toString()) : i.children
      }
    })
  },
  du = I.div`
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
  fu = I(Jn)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`,
  sl = e => d(du, {
    get class() {
      return e.class
    },
    get children() {
      return d(fu, {
        get src() {
          return e.src
        }
      })
    }
  }),
  hu = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  gu = {
    m: "6px",
    s: "6px",
    none: "0"
  },
  vu = I.button`
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

    ${Yr} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${Yt("mobile")} {
        padding: 8px 4px;
        width: 82px;
    }

    ${zr} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
  mu = I(sl)`
    width: 60px;
    height: 60px;
    border-radius: ${e=>hu[e.theme.borderRadius]};

    margin-bottom: 8px;
`,
  wu = I(Jn)`
    position: absolute;
    right: 10px;
    top: 50px;
    width: 24px;
    height: 24px;
    border-radius: ${e=>gu[e.theme.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`,
  pu = I(zt)`
    max-width: 90px;
    font-weight: 510;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${Yt("mobile")} {
        max-width: 80px;
    }
`,
  yu = I(zt)`
    font-weight: ${e=>e.colorPrimary?"510":"400"};
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${e=>e.colorPrimary?e.theme.colors.text.primary:e.theme.colors.text.secondary};

    ${Yt("mobile")} {
        max-width: 80px;
    }
`,
  bu = je("<div></div>"),
  Lo = e => {
    let t = null;
    const n = () => {
      const r = t == null ? void 0 : t.querySelector("div");
      if (r && r.scrollWidth > r.clientWidth) {
        let o = 0;
        const i = -.4,
          a = .05;
        for (; r.scrollWidth > r.clientWidth && o >= i;) o -= a, r.style.letterSpacing = `${o}px`;
        o !== 0 && (o -= a, r.style.letterSpacing = `${o}px`)
      }
    };
    return ka(() => n()), At(() => {
      n()
    }), d(vu, {
      get class() {
        return e.class
      },
      onClick: () => e.onClick(),
      "data-tc-wallet-item": "true",
      get children() {
        return [ie(() => ie(() => typeof e.icon == "string")() ? d(mu, {
          get src() {
            return e.icon
          }
        }) : e.icon), ie(() => ie(() => !!e.badgeUrl)() && d(wu, {
          get src() {
            return e.badgeUrl
          }
        })), (() => {
          const r = bu.cloneNode(!0);
          return ir(o => t = o, r), Rt(r, d(pu, {
            get children() {
              return e.name
            }
          })), r
        })(), ie(() => ie(() => !!e.secondLine)() && d(yu, {
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
  xu = I.h1`
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
  hn = e => {
    const [t] = fn();
    return d(xu, {
      get class() {
        return e.class
      },
      "data-tc-h1": "true",
      get children() {
        var n;
        return ie(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString()) : e.children
      }
    })
  },
  Cu = I.h2`
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
  jn = e => {
    const [t] = fn();
    return d(Cu, {
      get class() {
        return e.class
      },
      "data-tc-h2": "true",
      get children() {
        var n;
        return ie(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString()) : e.children
      }
    })
  },
  Su = I.h3`
    font-style: normal;
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,
  os = e => {
    const [t] = fn();
    return d(Su, {
      "data-tc-h3": "true",
      get class() {
        return e.class
      },
      get children() {
        var n;
        return ie(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString()) : e.children
      }
    })
  },
  _u = je('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 7.5C9.33579 7.5 9 7.16421 9 6.75C9 6.33579 9.33579 6 9.75 6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 18.6642 21.6642 19 21.25 19C20.8358 19 20.5 18.6642 20.5 18.25V8.56066L6.28033 22.7803C5.98744 23.0732 5.51256 23.0732 5.21967 22.7803C4.92678 22.4874 4.92678 22.0126 5.21967 21.7197L19.4393 7.5H9.75Z"></path></svg>'),
  Eu = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = _u.cloneNode(!0),
        o = r.firstChild;
      return Oe(i => {
        const a = n(),
          l = n();
        return a !== i._v$ && ve(r, "fill", i._v$ = a), l !== i._v$2 && ve(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  ku = je('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z"></path></svg>'),
  Au = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = ku.cloneNode(!0),
        o = r.firstChild;
      return Oe(() => ve(o, "fill", n())), r
    })()
  },
  Tu = je('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_3783_2045)"><circle cx="8" cy="8.00098" r="8"></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3783_2045"><rect width="16" height="16" fill="white" transform="translate(0 0.000976562)"></rect></clipPath></defs></svg>'),
  Lu = je('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z"></path></svg>'),
  Mu = je('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z"></path></svg>'),
  is = e => {
    const t = it(),
      n = () => e.size || "s",
      r = () => e.fill || t.colors.icon.success;
    return ie((() => {
      const o = ie(() => n() === "xs");
      return () => o() ? (() => {
        const i = Tu.cloneNode(!0),
          a = i.firstChild,
          l = a.firstChild,
          h = l.nextSibling;
        return Oe(v => {
          const m = e.class,
            y = r(),
            w = t.colors.constant.white;
          return m !== v._v$ && ve(i, "class", v._v$ = m), y !== v._v$2 && ve(l, "fill", v._v$2 = y), w !== v._v$3 && ve(h, "stroke", v._v$3 = w), v
        }, {
          _v$: void 0,
          _v$2: void 0,
          _v$3: void 0
        }), i
      })() : (() => {
        const i = ie(() => n() === "s");
        return () => i() ? (() => {
          const a = Lu.cloneNode(!0),
            l = a.firstChild,
            h = l.nextSibling;
          return Oe(v => {
            const m = e.class,
              y = r(),
              w = t.colors.constant.white;
            return m !== v._v$4 && ve(a, "class", v._v$4 = m), y !== v._v$5 && ve(l, "fill", v._v$5 = y), w !== v._v$6 && ve(h, "fill", v._v$6 = w), v
          }, {
            _v$4: void 0,
            _v$5: void 0,
            _v$6: void 0
          }), a
        })() : (() => {
          const a = Mu.cloneNode(!0),
            l = a.firstChild,
            h = l.nextSibling;
          return Oe(v => {
            const m = e.class,
              y = r(),
              w = t.colors.constant.white;
            return m !== v._v$7 && ve(a, "class", v._v$7 = m), y !== v._v$8 && ve(l, "fill", v._v$8 = y), w !== v._v$9 && ve(h, "fill", v._v$9 = w), v
          }, {
            _v$7: void 0,
            _v$8: void 0,
            _v$9: void 0
          }), a
        })()
      })()
    })())
  },
  $u = je('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z"></path></svg>'),
  Ru = je('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24.001" r="22"></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),
  Bu = je('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z"></path></svg>'),
  Ko = e => {
    const t = it(),
      n = () => e.size || "m",
      r = () => e.fill || t.colors.icon.error;
    return ie((() => {
      const o = ie(() => n() === "m");
      return () => o() ? (() => {
        const i = $u.cloneNode(!0),
          a = i.firstChild,
          l = a.nextSibling;
        return Oe(h => {
          const v = e.class,
            m = r(),
            y = t.colors.constant.white;
          return v !== h._v$ && ve(i, "class", h._v$ = v), m !== h._v$2 && ve(a, "fill", h._v$2 = m), y !== h._v$3 && ve(l, "fill", h._v$3 = y), h
        }, {
          _v$: void 0,
          _v$2: void 0,
          _v$3: void 0
        }), i
      })() : (() => {
        const i = ie(() => n() === "s");
        return () => i() ? (() => {
          const a = Ru.cloneNode(!0),
            l = a.firstChild,
            h = l.nextSibling;
          return Oe(v => {
            const m = e.class,
              y = r(),
              w = t.colors.constant.white;
            return m !== v._v$4 && ve(a, "class", v._v$4 = m), y !== v._v$5 && ve(l, "fill", v._v$5 = y), w !== v._v$6 && ve(h, "stroke", v._v$6 = w), v
          }, {
            _v$4: void 0,
            _v$5: void 0,
            _v$6: void 0
          }), a
        })() : (() => {
          const a = Bu.cloneNode(!0),
            l = a.firstChild,
            h = l.nextSibling;
          return Oe(v => {
            const m = e.class,
              y = r(),
              w = t.colors.constant.white;
            return m !== v._v$7 && ve(a, "class", v._v$7 = m), y !== v._v$8 && ve(l, "fill", v._v$8 = y), w !== v._v$9 && ve(h, "fill", v._v$9 = w), v
          }, {
            _v$7: void 0,
            _v$8: void 0,
            _v$9: void 0
          }), a
        })()
      })()
    })())
  },
  Iu = je('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"></path></svg>'),
  Pu = je('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z"></path></svg>'),
  Wu = je('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),
  An = e => {
    const t = it(),
      n = () => e.size || "xs",
      r = () => e.fill || t.colors.icon.tertiary,
      o = A0`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `,
      i = En`
        animation: ${o} 1s linear infinite;
    `;
    return ie((() => {
      const a = ie(() => n() === "xs");
      return () => a() ? (() => {
        const l = Iu.cloneNode(!0),
          h = l.firstChild;
        return Oe(v => {
          const m = fo(i, e.class),
            y = r();
          return m !== v._v$ && ve(l, "class", v._v$ = m), y !== v._v$2 && ve(h, "fill", v._v$2 = y), v
        }, {
          _v$: void 0,
          _v$2: void 0
        }), l
      })() : (() => {
        const l = ie(() => n() === "s");
        return () => l() ? (() => {
          const h = Pu.cloneNode(!0),
            v = h.firstChild;
          return Oe(m => {
            const y = fo(i, e.class),
              w = r();
            return y !== m._v$3 && ve(h, "class", m._v$3 = y), w !== m._v$4 && ve(v, "fill", m._v$4 = w), m
          }, {
            _v$3: void 0,
            _v$4: void 0
          }), h
        })() : (() => {
          const h = Wu.cloneNode(!0),
            v = h.firstChild;
          return Oe(m => {
            const y = fo(i, e.class),
              w = r();
            return y !== m._v$5 && ve(h, "class", m._v$5 = y), w !== m._v$6 && ve(v, "stroke", m._v$6 = w), m
          }, {
            _v$5: void 0,
            _v$6: void 0
          }), h
        })()
      })()
    })())
  },
  Uu = je('<svg width="158" height="28" viewBox="0 0 158 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z" fill="#0098EA"></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z"></path></svg>'),
  Nu = () => {
    const e = it(),
      t = () => e.theme === ut.DARK ? e.colors.constant.white : e.colors.constant.black;
    return (() => {
      const n = Uu.cloneNode(!0),
        r = n.firstChild,
        o = r.nextSibling,
        i = o.nextSibling;
      return Oe(() => ve(i, "fill", t())), n
    })()
  },
  Du = je('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z"></path></svg>'),
  Ou = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = Du.cloneNode(!0),
        o = r.firstChild;
      return Oe(() => ve(o, "fill", n())), r
    })()
  },
  ju = je('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"></path></svg>'),
  Hu = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = ju.cloneNode(!0),
        o = r.firstChild;
      return Oe(() => ve(o, "fill", n())), r
    })()
  },
  Fu = je('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z"></path></svg>'),
  Ku = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = Fu.cloneNode(!0),
        o = r.firstChild;
      return Oe(() => ve(o, "fill", n())), r
    })()
  },
  Vu = je('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z"></path></svg>'),
  qu = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = Vu.cloneNode(!0),
        o = r.firstChild;
      return Oe(() => ve(o, "fill", n())), r
    })()
  },
  Zu = je('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id="clip0_3676_1603"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000488281)"></rect></clipPath></defs></svg>'),
  kr = e => {
    const t = it(),
      n = () => e.fill || t.colors.accent;
    return (() => {
      const r = Zu.cloneNode(!0),
        o = r.firstChild,
        i = o.firstChild;
      return Oe(() => ve(i, "fill", n())), r
    })()
  },
  Gu = je('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z"></path></svg>'),
  qs = e => {
    const t = it(),
      n = () => e.fill || t.colors.accent;
    return (() => {
      const r = Gu.cloneNode(!0),
        o = r.firstChild;
      return Oe(() => ve(o, "fill", n())), r
    })()
  },
  zu = je('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1274)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id="clip0_3676_1274"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect></clipPath></defs></svg>'),
  Yu = e => {
    const t = it(),
      n = () => e.fill || t.colors.accent;
    return (() => {
      const r = zu.cloneNode(!0),
        o = r.firstChild,
        i = o.firstChild;
      return Oe(() => ve(i, "fill", n())), r
    })()
  },
  Qu = je('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z"></path></svg>'),
  Ju = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = Qu.cloneNode(!0),
        o = r.firstChild;
      return Oe(i => {
        const a = e.class,
          l = n();
        return a !== i._v$ && ve(r, "class", i._v$ = a), l !== i._v$2 && ve(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  Xu = je('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.485 37.3849C40.894 33.9506 43 29.2212 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 29.2213 7.1061 33.9507 10.5151 37.385C13.3583 32.9438 18.3354 30 24.0001 30C29.6647 30 34.6418 32.9437 37.485 37.3849ZM35.1809 39.3635C32.9143 35.5532 28.7554 33 24.0001 33C19.2448 33 15.0858 35.5533 12.8193 39.3636C15.9564 41.6506 19.8206 43 24 43C28.1795 43 32.0437 41.6505 35.1809 39.3635ZM24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"></path></svg>'),
  ed = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = Xu.cloneNode(!0),
        o = r.firstChild;
      return Oe(i => {
        const a = e.class,
          l = n();
        return a !== i._v$ && ve(r, "class", i._v$ = a), l !== i._v$2 && ve(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  td = je('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z"></path></svg>'),
  nd = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = td.cloneNode(!0),
        o = r.firstChild;
      return Oe(i => {
        const a = e.class,
          l = n();
        return a !== i._v$ && ve(r, "class", i._v$ = a), l !== i._v$2 && ve(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  rd = je('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z"></path></svg>'),
  od = e => {
    const t = it(),
      n = () => e.fill || t.colors.constant.white;
    return (() => {
      const r = rd.cloneNode(!0),
        o = r.firstChild;
      return Oe(i => {
        const a = e.class,
          l = n();
        return a !== i._v$ && ve(r, "class", i._v$ = a), l !== i._v$2 && ve(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  id = je('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7803 7.21967C25.0732 7.51256 25.0732 7.98744 24.7803 8.28033L11.5303 21.5303C11.2374 21.8232 10.7626 21.8232 10.4697 21.5303L4.21967 15.2803C3.92678 14.9874 3.92678 14.5126 4.21967 14.2197C4.51256 13.9268 4.98744 13.9268 5.28033 14.2197L11 19.9393L23.7197 7.21967C24.0126 6.92678 24.4874 6.92678 24.7803 7.21967Z"></path></svg>'),
  sd = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = id.cloneNode(!0),
        o = r.firstChild;
      return Oe(i => {
        const a = e.class,
          l = n();
        return a !== i._v$ && ve(r, "class", i._v$ = a), l !== i._v$2 && ve(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  ad = je('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z"></path></svg>'),
  al = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = ad.cloneNode(!0),
        o = r.firstChild;
      return Oe(i => {
        const a = n(),
          l = n();
        return a !== i._v$ && ve(r, "fill", i._v$ = a), l !== i._v$2 && ve(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  ld = je('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z"></path></svg>'),
  Ei = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = ld.cloneNode(!0),
        o = r.firstChild;
      return Oe(() => ve(o, "fill", n())), r
    })()
  },
  cd = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  ud = {
    m: "6px",
    s: "6px",
    none: "0"
  },
  dd = I.div`
    width: 60px;
    height: 60px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: ${e=>cd[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.tint};
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 4px;
`,
  fd = I(sl)`
    width: 20px;
    height: 20px;
    border-radius: ${e=>ud[e.theme.borderRadius]};
`,
  ll = e => d(Lo, {
    get name() {
      return e.labelLine1
    },
    get secondLine() {
      return e.labelLine2
    },
    get icon() {
      return d(dd, {
        get children() {
          return d(qr, {
            each: [0, 1, 2, 3],
            children: t => d(fd, {
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
  Sn = "telegram-wallet",
  Jr = {
    TON: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png",
    TG: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png"
  },
  cl = e => {
    const [t] = fn(), n = () => {
      if (e.wallet.appName !== Sn) {
        if ("isPreferred" in e.wallet && e.wallet.isPreferred) return t("walletItem.recent", {}, "Recent");
        if (In(e.wallet)) return t("walletItem.installed", {}, "Installed");
        if (e.wallet.name === "Tonkeeper") return t("walletItem.popular", {}, "Popular")
      }
    };
    return ie((() => {
      const r = ie(() => e.wallet.appName === Sn);
      return () => r() ? d(Lo, {
        get icon() {
          return e.wallet.imageUrl
        },
        get name() {
          return t("walletItem.walletOn", {}, "Wallet On")
        },
        secondLine: "Telegram",
        get badgeUrl() {
          return Jr.TG
        },
        onClick: () => e.onClick()
      }) : d(Lo, {
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
  hd = I.div`
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
  gd = I.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.08;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${Yt("mobile")} {
        width: 100%;
        margin: 0;
    }
`,
  [vd, md] = xe(((Ts = dn()) == null ? void 0 : Ts.innerHeight) || 0);
dn() && window.addEventListener("resize", () => md(window.innerHeight));
const [dr, wd] = xe(or("mobile")), Mo = () => wd(or("mobile"));
dn() && (window.addEventListener("resize", () => Mo()), window.addEventListener("load", () => Mo(), {
  once: !0
}));
const ul = e => {
    const [t, n] = xe(!1), r = a => {
      n(a.target.scrollTop > 0)
    }, o = () => dr() ? 150 : 200, i = () => e.maxHeight !== void 0 ? `${e.maxHeight}px` : `${vd()-o()}px`;
    return [d(gd, {
      get isShown() {
        return t()
      }
    }), d(hd, {
      get maxHeight() {
        return i()
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
  pd = I.a`
    display: block;
    text-decoration: unset;
`,
  $o = e => d(pd, sn({
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
  Hn = Do(),
  yd = je('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z"></path></svg>'),
  bd = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = yd.cloneNode(!0),
        o = r.firstChild;
      return Oe(i => {
        const a = e.class,
          l = n();
        return a !== i._v$ && ve(r, "class", i._v$ = a), l !== i._v$2 && ve(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  xd = je('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z"></path></svg>'),
  Cd = e => {
    const t = it(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = xd.cloneNode(!0),
        o = r.firstChild,
        i = o.nextSibling;
      return Oe(a => {
        const l = n(),
          h = n();
        return l !== a._v$ && ve(o, "fill", a._v$ = l), h !== a._v$2 && ve(i, "fill", a._v$2 = h), a
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  Sd = {
    m: "8px",
    s: "4px",
    none: "0"
  },
  _d = {
    m: "16px",
    s: "8px",
    none: "0"
  },
  Ed = I.div`
    width: 256px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>_d[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.primary}
           
    color: ${e=>e.theme.colors.text.primary}
`,
  kd = I.ul`
    background-color: ${e=>e.theme.colors.background.primary};
    padding: 8px;
`,
  Zs = I.button`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding-left: 8px;
    width: 100%;

    background-color: ${e=>e.theme.colors.background.primary};
    border: none;
    border-radius: ${e=>Sd[e.theme.borderRadius]};
    cursor: pointer;

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,
  Gs = je("<li></li>"),
  ri = e => d(zt, {
    get translationKey() {
      return e.translationKey
    },
    fontSize: "15px",
    fontWeight: "590",
    get children() {
      return e.children
    }
  }),
  Ad = e => {
    const t = Ht(Hn),
      [n, r] = xe(!1),
      o = () => Je(void 0, null, function*() {
        const a = Ki(t.account.address, t.account.chain === $r.TESTNET);
        yield rs(a), r(!0), setTimeout(() => r(!1), 1e3)
      }),
      i = () => {
        t.disconnect(), e.onClose()
      };
    return d(Ed, {
      ref(a) {
        const l = e.ref;
        typeof l == "function" ? l(a) : e.ref = a
      },
      get class() {
        return e.class
      },
      "data-tc-dropdown": "true",
      get children() {
        return d(kd, {
          get children() {
            return [(() => {
              const a = Gs.cloneNode(!0);
              return Rt(a, d(Zs, {
                onClick: () => o(),
                get children() {
                  return [d(bd, {}), d(_e, {
                    get when() {
                      return !n()
                    },
                    get children() {
                      return d(ri, {
                        translationKey: "button.dropdown.copy",
                        children: "Copy address"
                      })
                    }
                  }), d(_e, {
                    get when() {
                      return n()
                    },
                    get children() {
                      return d(ri, {
                        translationKey: "button.dropdown.copied",
                        children: "Address copied!"
                      })
                    }
                  })]
                }
              })), a
            })(), (() => {
              const a = Gs.cloneNode(!0);
              return Rt(a, d(Zs, {
                onClick: () => i(),
                get children() {
                  return [d(Cd, {}), d(ri, {
                    translationKey: "button.dropdown.disconnect",
                    children: "Disconnect"
                  })]
                }
              })), a
            })()]
          }
        })
      }
    })
  },
  Td = {
    m: "16px",
    s: "8px",
    none: "0"
  },
  Ld = I.div`
    width: 256px;
    padding: 12px 16px;
    display: flex;
    gap: 9px;

    background-color: ${e=>e.theme.colors.background.primary};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>Td[e.theme.borderRadius]};
`,
  Md = I.div`
    width: 192px;

    > h3 {
        font-size: 15px;
    }
`,
  $d = I(zt)`
    margin-top: 4px;
    color: ${e=>e.theme.colors.text.secondary};
`,
  ss = e => {
    const t = Qr(e);
    return d(Ld, sn({
      get class() {
        return e.class
      },
      "data-tc-notification": "true"
    }, t, {
      get children() {
        return [d(Md, {
          get children() {
            return [d(os, {
              get translationKey() {
                return e.header.translationKey
              },
              get translationValues() {
                return e.header.translationValues
              },
              get children() {
                return e.children
              }
            }), d(_e, {
              get when() {
                return e.text
              },
              get children() {
                return d($d, {
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
        }), ie(() => e.icon)]
      }
    }))
  },
  Rd = I(An)`
    align-self: center;
`,
  Bd = e => {
    const t = Ht(Hn),
      [n] = fn(),
      r = () => t.wallet && "name" in t.wallet ? t.wallet.name : n("common.yourWallet", {}, "Your wallet");
    return d(ss, {
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
        return d(Rd, {})
      },
      "data-tc-notification-confirm": "true",
      children: "Confirm operation in your wallet"
    })
  },
  Id = I(Ko)`
    margin-top: 2px;
`,
  Pd = e => d(ss, {
    header: {
      translationKey: "notifications.transactionCanceled.header"
    },
    text: {
      translationKey: "notifications.transactionCanceled.text"
    },
    get icon() {
      return d(Id, {
        size: "xs"
      })
    },
    get class() {
      return e.class
    },
    "data-tc-notification-tx-cancelled": "true",
    children: "Transaction cancelled"
  }),
  Wd = I(is)`
    margin-top: 2px;
`,
  Ud = e => d(ss, {
    header: {
      translationKey: "notifications.transactionSent.header"
    },
    text: {
      translationKey: "notifications.transactionSent.text"
    },
    get icon() {
      return d(Wd, {})
    },
    get class() {
      return e.class
    },
    "data-tc-notification-tx-sent": "true",
    children: "Transaction sent"
  }),
  oi = En`
    transform: translateY(-8px);
    margin-bottom: 12px;
`,
  Nd = {
    timeout: 4500
  },
  [zs, Dd] = xe(null);

function Od(e) {
  const {
    timeout: t
  } = et(et({}, Nd), e), [n, r] = xe([]), [o, i] = xe([]);
  return At(qc(yn, a => {
    var l;
    if (!a || !a.showNotification || zs() === a || ((l = zs()) == null ? void 0 : l.name) === "confirm-transaction" && a.name === "confirm-transaction") return;
    Dd(a), r(m => m.filter(y => y.action !== "confirm-transaction"));
    const h = {
      action: a.name
    };
    r(m => [...m, h]);
    const v = setTimeout(() => {
      r(m => m.filter(y => y !== h)), i(m => m.filter(y => y !== v))
    }, t);
    i(m => [...m, v])
  })), jt(() => {
    o().forEach(a => clearTimeout(a))
  }), n
}
const jd = je('<div data-tc-list-notifications="true"></div>'),
  Hd = e => {
    const t = Od();
    return (() => {
      const n = jd.cloneNode(!0);
      return Rt(n, d(k1, {
        onBeforeEnter: r => {
          on(r, [{
            opacity: 0,
            transform: "translateY(0)"
          }, {
            opacity: 1,
            transform: "translateY(-8px)"
          }], {
            duration: 200
          })
        },
        onExit: (r, o) => {
          on(r, [{
            opacity: 1,
            transform: "translateY(-8px)"
          }, {
            opacity: 0,
            transform: "translateY(-30px)"
          }], {
            duration: 200
          }).finished.then(o)
        },
        get children() {
          return d(qr, {
            get each() {
              return t()
            },
            children: r => d(Zr, {
              get children() {
                return [d($t, {
                  get when() {
                    return r.action === "transaction-sent"
                  },
                  get children() {
                    return d(Ud, {
                      class: oi
                    })
                  }
                }), d($t, {
                  get when() {
                    return r.action === "transaction-canceled"
                  },
                  get children() {
                    return d(Pd, {
                      class: oi
                    })
                  }
                }), d($t, {
                  get when() {
                    return r.action === "confirm-transaction"
                  },
                  get children() {
                    return d(Bd, {
                      class: oi
                    })
                  }
                })]
              }
            })
          })
        }
      })), Oe(() => Zi(n, e.class)), n
    })()
  },
  dl = I(xt)`
    background-color: ${e=>e.theme.colors.connectButton.background};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${Gr(e.theme.colors.constant.black,.16)}`};
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
`,
  Fd = I(dl)`
    padding: 12px 16px;
    min-width: 148px;
    justify-content: center;
    background-color: ${e=>e.theme.colors.background.primary};
`,
  Kd = I(xt)`
    min-width: 148px;
    height: 40px;

    background-color: ${e=>e.theme.colors.background.primary};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${Gr(e.theme.colors.constant.black,.16)}`};

    display: flex;
    align-items: center;
    justify-content: center;
`,
  Vd = I(An)`
    height: 18px;
    width: 18px;
`,
  qd = I.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,
  Zd = I(Ad)`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`,
  Gd = I(Hd)`
    > div:first-child {
        margin-top: 20px;
    }
`;

function fl(e) {
  return e.split("-")[0]
}

function zd(e) {
  return e.split("-")[1]
}

function Yd(e) {
  return ["top", "bottom"].includes(fl(e)) ? "x" : "y"
}

function Qd(e) {
  return e === "y" ? "height" : "width"
}

function Ys(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = r.x + r.width / 2 - o.width / 2,
    a = r.y + r.height / 2 - o.height / 2,
    l = Yd(t),
    h = Qd(l),
    v = r[h] / 2 - o[h] / 2,
    m = fl(t),
    y = l === "x";
  let w;
  switch (m) {
    case "top":
      w = {
        x: i,
        y: r.y - o.height
      };
      break;
    case "bottom":
      w = {
        x: i,
        y: r.y + r.height
      };
      break;
    case "right":
      w = {
        x: r.x + r.width,
        y: a
      };
      break;
    case "left":
      w = {
        x: r.x - o.width,
        y: a
      };
      break;
    default:
      w = {
        x: r.x,
        y: r.y
      }
  }
  switch (zd(t)) {
    case "start":
      w[l] -= v * (n && y ? -1 : 1);
      break;
    case "end":
      w[l] += v * (n && y ? -1 : 1);
      break
  }
  return w
}
const Jd = (e, t, n) => Je(void 0, null, function*() {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, l = i.filter(Boolean), h = yield a.isRTL == null ? void 0 : a.isRTL(t);
  if ({}.NODE_ENV !== "production") {
    if (a == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), l.filter(S => {
        let {
          name: M
        } = S;
        return M === "autoPlacement" || M === "flip"
      }).length > 1) throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!e || !t) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "))
  }
  let v = yield a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: m,
    y
  } = Ys(v, r, h), w = r, C = {}, b = 0;
  for (let S = 0; S < l.length; S++) {
    const {
      name: M,
      fn: ee
    } = l[S], {
      x: V,
      y: D,
      data: z,
      reset: B
    } = yield ee({
      x: m,
      y,
      initialPlacement: r,
      placement: w,
      strategy: o,
      middlewareData: C,
      rects: v,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (m = V ?? m, y = D ?? y, C = Gt(et({}, C), {
        [M]: et(et({}, C[M]), z)
      }), {}.NODE_ENV !== "production" && b > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), B && b <= 50) {
      b++, typeof B == "object" && (B.placement && (w = B.placement), B.rects && (v = B.rects === !0 ? yield a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }): B.rects), {
        x: m,
        y
      } = Ys(v, w, h)), S = -1;
      continue
    }
  }
  return {
    x: m,
    y,
    placement: w,
    strategy: o,
    middlewareData: C
  }
});

function Qs(e) {
  return Gt(et({}, e), {
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  })
}

function Tn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function cn(e) {
  return Tn(e).getComputedStyle(e)
}

function Nn(e) {
  return gl(e) ? (e.nodeName || "").toLowerCase() : ""
}
let ao;

function hl() {
  if (ao) return ao;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ao = e.brands.map(t => t.brand + "/" + t.version).join(" "), ao) : navigator.userAgent
}

function un(e) {
  return e instanceof Tn(e).HTMLElement
}

function Qt(e) {
  return e instanceof Tn(e).Element
}

function gl(e) {
  return e instanceof Tn(e).Node
}

function Js(e) {
  if (typeof ShadowRoot > "u") return !1;
  const t = Tn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot
}

function Vo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = cn(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n) && !["inline", "contents"].includes(o)
}

function Xd(e) {
  return ["table", "td", "th"].includes(Nn(e))
}

function as(e) {
  const t = /firefox/i.test(hl()),
    n = cn(e),
    r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some(o => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(o => {
    const i = n.contain;
    return i != null ? i.includes(o) : !1
  })
}

function vl() {
  return !/^((?!chrome|android).)*safari/i.test(hl())
}

function ls(e) {
  return ["html", "body", "#document"].includes(Nn(e))
}
const Xs = Math.min,
  Ar = Math.max,
  ea = Math.round,
  ki = {
    x: 1,
    y: 1
  };

function Dr(e) {
  const t = !Qt(e) && e.contextElement ? e.contextElement : Qt(e) ? e : null;
  if (!t) return ki;
  const n = t.getBoundingClientRect(),
    r = cn(t);
  if (r.boxSizing !== "border-box") return un(t) ? {
    x: t.offsetWidth > 0 && ea(n.width) / t.offsetWidth || 1,
    y: t.offsetHeight > 0 && ea(n.height) / t.offsetHeight || 1
  } : ki;
  let o = n.width / parseFloat(r.width),
    i = n.height / parseFloat(r.height);
  return (!o || !Number.isFinite(o)) && (o = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: o,
    y: i
  }
}

function Dn(e, t, n, r) {
  var o, i, a, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const h = e.getBoundingClientRect();
  let v = ki;
  t && (r ? Qt(r) && (v = Dr(r)) : v = Dr(e));
  const m = Qt(e) ? Tn(e) : window,
    y = !vl() && n,
    w = (h.left + (y && (o = (i = m.visualViewport) == null ? void 0 : i.offsetLeft) != null ? o : 0)) / v.x,
    C = (h.top + (y && (a = (l = m.visualViewport) == null ? void 0 : l.offsetTop) != null ? a : 0)) / v.y,
    b = h.width / v.x,
    S = h.height / v.y;
  return {
    width: b,
    height: S,
    top: C,
    right: w + b,
    bottom: C + S,
    left: w,
    x: w,
    y: C
  }
}

function Fn(e) {
  return ((gl(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function qo(e) {
  return Qt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  }
}

function ml(e) {
  return Dn(Fn(e)).left + qo(e).scrollLeft
}

function ef(e, t, n) {
  const r = un(t),
    o = Fn(t),
    i = Dn(e, !0, n === "fixed", t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((Nn(t) !== "body" || Vo(o)) && (a = qo(t)), un(t)) {
      const h = Dn(t, !0);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop
    } else o && (l.x = ml(o));
  return {
    x: i.left + a.scrollLeft - l.x,
    y: i.top + a.scrollTop - l.y,
    width: i.width,
    height: i.height
  }
}

function Or(e) {
  if (Nn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Js(e) ? e.host : null) || Fn(e);
  return Js(t) ? t.host : t
}

function ta(e) {
  return !un(e) || cn(e).position === "fixed" ? null : e.offsetParent
}

function tf(e) {
  let t = Or(e);
  for (; un(t) && !ls(t);) {
    if (as(t)) return t;
    t = Or(t)
  }
  return null
}

function na(e) {
  const t = Tn(e);
  let n = ta(e);
  for (; n && Xd(n) && cn(n).position === "static";) n = ta(n);
  return n && (Nn(n) === "html" || Nn(n) === "body" && cn(n).position === "static" && !as(n)) ? t : n || tf(e) || t
}

function nf(e) {
  if (un(e)) return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
  const t = Dn(e);
  return {
    width: t.width,
    height: t.height
  }
}

function rf(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = un(n),
    i = Fn(n);
  if (n === i) return t;
  let a = {
      scrollLeft: 0,
      scrollTop: 0
    },
    l = {
      x: 1,
      y: 1
    };
  const h = {
    x: 0,
    y: 0
  };
  if ((o || !o && r !== "fixed") && ((Nn(n) !== "body" || Vo(i)) && (a = qo(n)), un(n))) {
    const v = Dn(n);
    l = Dr(n), h.x = v.x + n.clientLeft, h.y = v.y + n.clientTop
  }
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - a.scrollLeft * l.x + h.x,
    y: t.y * l.y - a.scrollTop * l.y + h.y
  }
}

function of(e, t) {
  const n = Tn(e),
    r = Fn(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    a = r.clientHeight,
    l = 0,
    h = 0;
  if (o) {
    i = o.width, a = o.height;
    const v = vl();
    (v || !v && t === "fixed") && (l = o.offsetLeft, h = o.offsetTop)
  }
  return {
    width: i,
    height: a,
    x: l,
    y: h
  }
}

function sf(e) {
  var t;
  const n = Fn(e),
    r = qo(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Ar(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
    a = Ar(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let l = -r.scrollLeft + ml(e);
  const h = -r.scrollTop;
  return cn(o || n).direction === "rtl" && (l += Ar(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: l,
    y: h
  }
}

function wl(e) {
  const t = Or(e);
  return ls(t) ? e.ownerDocument.body : un(t) && Vo(t) ? t : wl(t)
}

function Tr(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = wl(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Tn(r);
  return o ? t.concat(i, i.visualViewport || [], Vo(r) ? r : []) : t.concat(r, Tr(r))
}

function af(e, t) {
  const n = Dn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = un(e) ? Dr(e) : {
      x: 1,
      y: 1
    },
    a = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    h = o * i.x,
    v = r * i.y;
  return {
    top: v,
    left: h,
    right: h + a,
    bottom: v + l,
    x: h,
    y: v,
    width: a,
    height: l
  }
}

function ra(e, t, n) {
  return t === "viewport" ? Qs(of(e, n)) : Qt(t) ? af(t, n) : Qs(sf(Fn(e)))
}

function lf(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Tr(e).filter(l => Qt(l) && Nn(l) !== "body"),
    o = null;
  const i = cn(e).position === "fixed";
  let a = i ? Or(e) : e;
  for (; Qt(a) && !ls(a);) {
    const l = cn(a),
      h = as(a);
    (i ? !h && !o : !h && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) ? r = r.filter(m => m !== a): o = l, a = Or(a)
  }
  return t.set(e, r), r
}

function cf(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? lf(t, this._c) : [].concat(n), r],
    l = a[0],
    h = a.reduce((v, m) => {
      const y = ra(t, m, o);
      return v.top = Ar(y.top, v.top), v.right = Xs(y.right, v.right), v.bottom = Xs(y.bottom, v.bottom), v.left = Ar(y.left, v.left), v
    }, ra(t, l, o));
  return {
    width: h.right - h.left,
    height: h.bottom - h.top,
    x: h.left,
    y: h.top
  }
}
const uf = {
  getClippingRect: cf,
  convertOffsetParentRelativeRectToViewportRelativeRect: rf,
  isElement: Qt,
  getDimensions: nf,
  getOffsetParent: na,
  getDocumentElement: Fn,
  getScale: Dr,
  getElementRects(e) {
    return Je(this, null, function*() {
      let {
        reference: t,
        floating: n,
        strategy: r
      } = e;
      const o = this.getOffsetParent || na,
        i = this.getDimensions;
      return {
        reference: ef(t, yield o(n), r),
        floating: et({
          x: 0,
          y: 0
        }, yield i(n))
      }
    })
  },
  getClientRects: e => Array.from(e.getClientRects()),
  isRTL: e => cn(e).direction === "rtl"
};

function df(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = !0,
    animationFrame: l = !1
  } = r, h = o && !l, v = h || i ? [...Qt(e) ? Tr(e) : e.contextElement ? Tr(e.contextElement) : [], ...Tr(t)] : [];
  v.forEach(b => {
    h && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n)
  });
  let m = null;
  if (a) {
    let b = !0;
    m = new ResizeObserver(() => {
      b || n(), b = !1
    }), Qt(e) && !l && m.observe(e), !Qt(e) && e.contextElement && !l && m.observe(e.contextElement), m.observe(t)
  }
  let y, w = l ? Dn(e) : null;
  l && C();

  function C() {
    const b = Dn(e);
    w && (b.x !== w.x || b.y !== w.y || b.width !== w.width || b.height !== w.height) && n(), w = b, y = requestAnimationFrame(C)
  }
  return n(), () => {
    var b;
    v.forEach(S => {
      h && S.removeEventListener("scroll", n), i && S.removeEventListener("resize", n)
    }), (b = m) == null || b.disconnect(), m = null, l && cancelAnimationFrame(y)
  }
}
const ff = (e, t, n) => {
  const r = new Map,
    o = et({
      platform: uf
    }, n),
    i = Gt(et({}, o.platform), {
      _c: r
    });
  return Jd(e, t, Gt(et({}, o), {
    platform: i
  }))
};

function hf(e, t, n) {
  let r = () => {
      var y;
      return (y = n == null ? void 0 : n.placement) != null ? y : "bottom"
    },
    o = () => {
      var y;
      return (y = n == null ? void 0 : n.strategy) != null ? y : "absolute"
    },
    [i, a] = xe({
      x: null,
      y: null,
      placement: r(),
      strategy: o(),
      middlewareData: {}
    }),
    [l, h] = xe();
  At(() => {
    let y = l();
    if (y) throw y.value
  });
  let v = ie(() => (e(), t(), {}));

  function m() {
    let y = e(),
      w = t();
    if (y && w) {
      let C = v();
      ff(y, w, {
        middleware: n == null ? void 0 : n.middleware,
        placement: r(),
        strategy: o()
      }).then(b => {
        C === v() && a(b)
      }, b => {
        h(b)
      })
    }
  }
  return At(() => {
    let y = e(),
      w = t();
    if (n == null || n.middleware, r(), o(), y && w)
      if (n != null && n.whileElementsMounted) {
        let C = n.whileElementsMounted(y, w, m);
        C && jt(C)
      } else m()
  }), {
    get x() {
      return i().x
    },
    get y() {
      return i().y
    },
    get placement() {
      return i().placement
    },
    get strategy() {
      return i().strategy
    },
    get middlewareData() {
      return i().middlewareData
    },
    update: m
  }
}
const gf = je('<tc-root data-tc-dropdown-container="true"></tc-root>'),
  vf = () => {
    const e = it(),
      t = Ht(gr),
      n = Ht(Hn),
      [r, o] = xe(!1),
      [i, a] = xe(t.account),
      [l, h] = xe(!t.account);
    let v;
    const [m, y] = xe(), [w, C] = xe(), b = hf(w, m, {
      whileElementsMounted: df,
      placement: "bottom-end"
    }), S = () => {
      const V = i();
      if (V) {
        const D = Ki(V.address, V.chain === $r.TESTNET);
        return D.slice(0, 4) + "…" + D.slice(-4)
      }
      return ""
    };
    n.connectionRestored.then(() => h(!1));
    const M = t.onStatusChange(V => {
        if (!V) {
          o(!1), a(null), h(!1);
          return
        }
        a(V.account), h(!1)
      }),
      ee = V => {
        if (!i() || !r()) return;
        const D = w().contains(V.target),
          z = v.contains(V.target);
        !D && !z && o(!1)
      };
    return ka(() => {
      document.body.addEventListener("click", ee)
    }), jt(() => {
      document.body.removeEventListener("click", ee), M()
    }), d(lr, {
      component: pn,
      get children() {
        return [d(_e, {
          get when() {
            return l()
          },
          get children() {
            return d(Kd, {
              disabled: !0,
              "data-tc-connect-button-loading": "true",
              get children() {
                return d(Vd, {})
              }
            })
          }
        }), d(_e, {
          get when() {
            return !l()
          },
          get children() {
            return [d(_e, {
              get when() {
                return !i()
              },
              get children() {
                return d(dl, {
                  onClick: () => n.openModal(),
                  "data-tc-connect-button": "true",
                  scale: "s",
                  get children() {
                    return [d(Au, {
                      get fill() {
                        return e.colors.connectButton.foreground
                      }
                    }), d(zt, {
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
            }), d(_e, {
              get when() {
                return i()
              },
              get children() {
                return d(qd, {
                  get children() {
                    return [d(Fd, {
                      onClick: () => o(V => !V),
                      ref: C,
                      "data-tc-dropdown-button": "true",
                      scale: "s",
                      get children() {
                        return [d(zt, {
                          fontSize: "15px",
                          fontWeight: "590",
                          lineHeight: "18px",
                          get children() {
                            return S()
                          }
                        }), d(el, {
                          direction: "bottom"
                        })]
                      }
                    }), d(Ua, {
                      get children() {
                        const V = Mt(() => document.importNode(gf, !0));
                        return ir(y, V), V.style.setProperty("z-index", "999"), V._$owner = Zc(), Rt(V, d(ns, {
                          onBeforeEnter: D => {
                            on(D, [{
                              opacity: 0,
                              transform: "translateY(-8px)"
                            }, {
                              opacity: 1,
                              transform: "translateY(0)"
                            }], {
                              duration: 150
                            })
                          },
                          onExit: (D, z) => {
                            on(D, [{
                              opacity: 1,
                              transform: "translateY(0)"
                            }, {
                              opacity: 0,
                              transform: "translateY(-8px)"
                            }], {
                              duration: 150
                            }).finished.then(z)
                          },
                          get children() {
                            return d(_e, {
                              get when() {
                                return r()
                              },
                              get children() {
                                return d(Zd, {
                                  get hidden() {
                                    return !r()
                                  },
                                  onClose: () => o(!1),
                                  ref(D) {
                                    const z = v;
                                    typeof z == "function" ? z(D) : v = D
                                  }
                                })
                              }
                            })
                          }
                        }), null), Rt(V, d(Gd, {}), null), Oe(D => {
                          var z, B;
                          const q = b.strategy,
                            P = `${(z=b.y)!=null?z:0}px`,
                            R = `${(B=b.x)!=null?B:0}px`;
                          return q !== D._v$ && V.style.setProperty("position", D._v$ = q), P !== D._v$2 && V.style.setProperty("top", D._v$2 = P), R !== D._v$3 && V.style.setProperty("left", D._v$3 = R), D
                        }, {
                          _v$: void 0,
                          _v$2: void 0,
                          _v$3: void 0
                        }), V
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
  pl = I(nl)`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 0;

    ${Yt("mobile")} {
        padding-left: 0;
        padding-right: 0;

        min-height: 364px;
    }
`,
  yl = I(hn)`
    margin-top: 12px;

    ${Yt("mobile")} {
        padding: 0 10px;
    }
`,
  bl = I.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    ${Yt("mobile")} {
        height: 160px;
        align-items: center;
    }
`;
I(zt)`
    min-width: 84px;
    text-align: center;
    font-weight: 590;
`;
I(Q1)`
    margin: 0 auto 22px;
`;
const [Ge, lo] = Xi({
  buttonRootId: null,
  language: "en",
  returnStrategy: "back",
  twaReturnUrl: void 0,
  walletsListConfiguration: {},
  enableAndroidBackHandler: !0
});

function mf(e) {
  return [...new Set(e)]
}

function wf(e, t, n) {
  return t.map(r => {
    const o = n.find(i => i[e] === r[e]);
    return n = n.filter(i => i[e] !== r[e]), o === void 0 ? r : o
  }).concat(n)
}

function pf(e) {
  return "jsBridgeKey" in e ? Gt(et({}, e), {
    injected: Wn.isWalletInjected(e.jsBridgeKey),
    embedded: Wn.isInsideWalletBrowser(e.jsBridgeKey)
  }) : e
}

function cs(e, t) {
  var n;
  return t && (n = t.includeWallets) != null && n.length && (e = wf("name", e, t.includeWallets.map(pf))), e
}

function oa(e) {
  return e.platforms.some(t => ["macos", "linux", "windows"].includes(t))
}

function Lr(e) {
  return e.platforms.some(t => ["ios", "android"].includes(t))
}

function ia(e) {
  return e.platforms.some(t => ["chrome", "firefox", "safari"].includes(t))
}

function Rn(e, t) {
  return t ? e.name.toLowerCase() === t.toLowerCase() || e.appName.toLowerCase() === t.toLowerCase() : !1
}
const yf = I.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,
  bf = I(hn)`
    margin-bottom: 18px;
`;
I.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.12;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${Yt("mobile")} {
        width: 100%;
    }
`;
const xf = I.ul`
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

    ${Yt("mobile")} {
        grid-template-columns: repeat(auto-fit, 82px);
    }
`;
I(xt)`
    display: block;
    margin: 0 auto 1px;
    font-size: 15px;
`;
const Cf = I(Xn)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  Sf = I(cl)`
    height: 100%;
`,
  _f = je("<li></li>"),
  Ef = e => {
    const t = () => dr() ? void 0 : 510,
      n = () => dr() ? e.walletsList.filter(Lr) : e.walletsList;
    return d(yf, {
      "data-tc-wallets-modal-list": "true",
      get children() {
        return [d(Cf, {
          icon: "arrow",
          onClick: () => e.onBack()
        }), d(bf, {
          translationKey: "walletModal.wallets",
          children: "Wallets"
        }), d(ul, {
          get maxHeight() {
            return t()
          },
          get children() {
            return d(xf, {
              get children() {
                return d(qr, {
                  get each() {
                    return n()
                  },
                  children: r => (() => {
                    const o = _f.cloneNode(!0);
                    return Rt(o, d(Sf, {
                      wallet: r,
                      onClick: () => e.onSelect(r)
                    })), o
                  })()
                })
              }
            })
          }
        })]
      }
    })
  },
  kf = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  Af = {
    m: "6px",
    s: "6px",
    none: "0"
  },
  Tf = I.div`
    display: flex;
    flex-direction: column;
`,
  Lf = I.div`
    flex: 1;
    margin-top: ${e=>e.qr?"0":"18px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,
  Mf = I(Fo)`
    margin-bottom: 24px;
`,
  $f = I(hn)`
    max-width: 288px;
    margin: 0 auto 2px;
`,
  Rf = I(jn)`
    max-width: 288px;
    text-align: center;
    margin: 0 auto 20px;
`,
  Bf = I(Xn)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  xr = I.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,
  If = I(xr)`
    padding-bottom: 0;
`,
  ii = I(xt)`
    margin-bottom: 24px;
`,
  Pf = I(An)`
    margin-bottom: 18px;
    margin-top: 2px;
`,
  Wf = I(Ko)`
    margin-bottom: 16px;
`,
  co = I(jn)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,
  Uf = I(xt)`
    margin-top: -8px;
    margin-bottom: 24px;
    width: 100%;
    padding: 12px 12px 12px 20px;
    border-radius: ${e=>kf[e.theme.borderRadius]};
    font-size: 16px;
    line-height: 20px;
`,
  Nf = I(Jn)`
    width: 32px;
    height: 32px;
    border-radius: ${e=>Af[e.theme.borderRadius]};
`,
  Lt = e => {
    const [t] = fn();
    return ie(() => {
      var n;
      return t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString())
    })
  };

function ot(e, t) {
  let n;
  typeof t == "string" ? n = t : n = ln() ? t.twaReturnUrl || t.returnStrategy : "none";
  const r = Df(e, "ret", n);
  if (!bn(e)) return r;
  const o = r.slice(r.lastIndexOf("&") + 1);
  return r.slice(0, r.lastIndexOf("&")) + "-" + Li(o)
}

function Xr(e, t) {
  t = et({}, t);
  const n = Of(e),
    r = new URL(n);
  if (r.searchParams.has("startapp") || r.searchParams.append("startapp", "tonconnect"), Ya()) {
    t.returnStrategy = "back";
    const o = ot(r.toString(), t.returnStrategy);
    at(o)
  } else if (ln())
    if (Gn("ios", "android", "macos", "tdesktop", "web")) {
      t.returnStrategy = "back";
      const o = ot(r.toString(), t.returnStrategy);
      Ci(o)
    } else Gn("weba") ? Ci(ot(r.toString(), t)) : at(ot(r.toString(), t));
  else if (Xt("ios")) {
    t.returnStrategy === "back" && (Ue("safari") ? t.returnStrategy = "back" : Ue("chrome") ? t.returnStrategy = "googlechrome://" : Ue("firefox") ? t.returnStrategy = "firefox://" : Ue("opera") ? t.returnStrategy = "opera-http://" : t.returnStrategy = location.href);
    const o = Ue("chrome"),
      i = Ue("firefox");
    if ((o || i) && !t.forceRedirect) {
      const l = ot(r.toString(), t.returnStrategy),
        h = uo(l);
      Bn(h, () => at(l))
    } else {
      const l = ot(r.toString(), t.returnStrategy);
      at(l)
    }
  } else if (Xt("android")) {
    t.returnStrategy = "back";
    const o = Ue("chrome"),
      i = Ue("firefox");
    if ((o || i) && !t.forceRedirect) {
      const l = ot(r.toString(), t.returnStrategy),
        h = uo(l);
      Bn(h, () => at(l))
    } else {
      const l = ot(r.toString(), t.returnStrategy);
      at(l)
    }
  } else if (Xt("ipad")) {
    t.returnStrategy === "back" && (Ue("safari") ? t.returnStrategy = "back" : Ue("chrome") ? t.returnStrategy = "googlechrome://" : Ue("firefox") ? t.returnStrategy = "firefox://" : Ue("opera") ? t.returnStrategy = "opera-http://" : t.returnStrategy = location.href);
    const o = Ue("chrome"),
      i = Ue("firefox"),
      a = (o || i) && !t.forceRedirect,
      l = ot(r.toString(), t.returnStrategy);
    if (a) {
      const h = uo(l);
      Bn(h, () => at(l))
    } else at(l)
  } else if (Xt("macos", "windows", "linux")) {
    t.returnStrategy = "back", t.twaReturnUrl = void 0;
    const o = ot(r.toString(), t.returnStrategy);
    if (t.forceRedirect) at(o);
    else {
      const i = uo(o);
      Bn(i, () => at(o))
    }
  } else at(ot(r.toString(), t))
}

function eo(e, t, n, r) {
  if (n = et({}, n), Ya())
    if (Xt("ios", "android")) n.returnStrategy === "back" && (n.returnStrategy = "tg://resolve"), r("universal-link"), Er(ot(e, n.returnStrategy), "_self");
    else {
      r("universal-link");
      const o = ot(e, n.returnStrategy);
      at(o)
    }
  else if (ln())
    if (Gn("ios", "android")) {
      n.returnStrategy === "back" && (n.returnStrategy = "tg://resolve"), r("universal-link");
      const o = ot(e, n.returnStrategy);
      Ci(o, () => {
        r("universal-link"), at(o)
      })
    } else if (Gn("macos", "tdesktop")) {
    n.returnStrategy === "back" && (n.returnStrategy = "tg://resolve");
    const o = ot(e, n.returnStrategy);
    !!t && !n.forceRedirect ? (r("custom-deeplink"), Bn(io(o, t), () => {
      r("universal-link"), at(o)
    })) : (r("universal-link"), at(o))
  } else if (Gn("weba")) {
    n.returnStrategy === "back" && (Ue("safari") ? n.returnStrategy = location.href : Ue("chrome") ? n.returnStrategy = "googlechrome://" : Ue("firefox") ? n.returnStrategy = "firefox://" : Ue("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href);
    const o = ot(e, n.returnStrategy);
    !!t && !n.forceRedirect ? (r("custom-deeplink"), Bn(io(o, t), () => {
      r("universal-link"), at(o)
    })) : (r("universal-link"), at(o))
  } else if (Gn("web")) {
    n.returnStrategy === "back" && (Ue("safari") ? n.returnStrategy = location.href : Ue("chrome") ? n.returnStrategy = "googlechrome://" : Ue("firefox") ? n.returnStrategy = "firefox://" : Ue("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href);
    const o = ot(e, n.returnStrategy);
    !!t && !n.forceRedirect ? (r("custom-deeplink"), Bn(io(o, t), () => {
      r("universal-link"), at(o)
    })) : (r("universal-link"), at(o))
  } else {
    r("universal-link");
    const o = ot(e, n.returnStrategy);
    at(o)
  } else if (Xt("ios")) n.returnStrategy === "back" && (Ue("safari") ? n.returnStrategy = "none" : Ue("chrome") ? n.returnStrategy = "googlechrome://" : Ue("firefox") ? n.returnStrategy = "firefox://" : Ue("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), Ue("chrome") ? (r("universal-link"), Er(ot(e, n.returnStrategy), "_self")) : (r("universal-link"), at(ot(e, n.returnStrategy)));
  else if (Xt("android")) n.returnStrategy === "back" && (Ue("chrome") ? n.returnStrategy = "googlechrome://" : Ue("firefox") ? n.returnStrategy = "firefox://" : Ue("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), r("universal-link"), at(ot(e, n.returnStrategy));
  else if (Xt("ipad")) n.returnStrategy === "back" && (Ue("safari") ? n.returnStrategy = "none" : Ue("chrome") ? n.returnStrategy = "googlechrome://" : Ue("firefox") ? n.returnStrategy = "firefox://" : Ue("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), Ue("chrome") ? (r("universal-link"), Er(ot(e, n.returnStrategy), "_self")) : (r("universal-link"), at(ot(e, n.returnStrategy)));
  else if (Xt("macos", "windows", "linux")) {
    n.returnStrategy === "back" && (Ue("safari") ? n.returnStrategy = "none" : Ue("chrome") ? n.returnStrategy = "googlechrome://" : Ue("firefox") ? n.returnStrategy = "firefox://" : Ue("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = "none");
    const o = ot(e, n.returnStrategy);
    !!t && !n.forceRedirect ? (r("custom-deeplink"), Bn(io(o, t), () => {
      r("universal-link"), at(o)
    })) : (r("universal-link"), at(o))
  } else r("universal-link"), at(ot(e, n.returnStrategy))
}

function Df(e, t, n) {
  const r = new URL(e);
  return r.searchParams.append(t, n), r.toString()
}

function Of(e) {
  const t = new URL(e);
  return t.searchParams.has("attach") && (t.searchParams.delete("attach"), t.pathname += "/start"), t.toString()
}

function uo(e) {
  const t = new URL(e),
    [, n, r] = t.pathname.split("/"),
    o = t.searchParams.get("startapp");
  return `tg://resolve?domain=${n}&appname=${r}&startapp=${o}`
}
const xl = e => {
    const [t, n] = xe("mobile"), [r, o] = xe(!1), [i, a] = xe(), [l, h] = xe(!0), v = Ht(gr), m = v.onStatusChange(() => {}, () => {
      e.wallet.appName !== Sn && o(!0)
    });
    jt(m);
    const y = () => {
      try {
        const M = v.connect({
          universalLink: e.wallet.universalLink,
          bridgeUrl: e.wallet.bridgeUrl
        }, e.additionalRequest);
        a(M)
      } catch {}
    };
    At(() => {
      Mt(t) !== "extension" && (Lr(e.wallet) || oa(e.wallet)) && y()
    });
    const w = () => {
        o(!1), t() === "extension" && y(), n("mobile"), Bt(Gt(et({}, e.wallet), {
          openMethod: "qrcode"
        }))
      },
      C = () => {
        if (o(!1), t() === "extension" && y(), n("desktop"), bn(i())) b();
        else {
          const M = !l();
          h(!1), eo(i(), e.wallet.deepLink, {
            returnStrategy: Ge.returnStrategy,
            forceRedirect: M
          }, ee => {
            Bt(Gt(et({}, e.wallet), {
              openMethod: ee
            }))
          })
        }
      },
      b = () => {
        const M = !l();
        h(!1), Bt(Gt(et({}, e.wallet), {
          openMethod: "universal-link"
        })), Xr(i(), {
          returnStrategy: Ge.returnStrategy,
          twaReturnUrl: Ge.twaReturnUrl,
          forceRedirect: M
        })
      },
      S = () => {
        o(!1), n("extension"), In(e.wallet) && (Bt(e.wallet), v.connect({
          jsBridgeKey: e.wallet.jsBridgeKey
        }, e.additionalRequest))
      };
    return Lr(e.wallet) ? w() : ia(e.wallet) ? S() : C(), d(Tf, {
      "data-tc-wallets-modal-connection-desktop": "true",
      get children() {
        return [d(_e, {
          get when() {
            return !e.backDisabled
          },
          get children() {
            return d(Bf, {
              icon: "arrow",
              onClick: () => e.onBackClick()
            })
          }
        }), d($f, {
          get children() {
            return e.wallet.name
          }
        }), d(_e, {
          get when() {
            return t() === "mobile"
          },
          get children() {
            return d(Rf, {
              translationKey: "walletModal.desktopConnectionModal.scanQR",
              get translationValues() {
                return {
                  name: e.wallet.name
                }
              },
              get children() {
                return ["Scan the QR code below with your phone’s or ", ie(() => e.wallet.name), "’s camera"]
              }
            })
          }
        }), d(Lf, {
          get qr() {
            return t() === "mobile"
          },
          get children() {
            return d(Zr, {
              get children() {
                return [d($t, {
                  get when() {
                    return t() === "mobile"
                  },
                  get children() {
                    return d(Mf, {
                      disableCopy: !1,
                      get sourceUrl() {
                        return ot(i(), "none")
                      },
                      get imageUrl() {
                        return e.wallet.imageUrl
                      }
                    })
                  }
                }), d($t, {
                  get when() {
                    return r()
                  },
                  get children() {
                    return [d(Wf, {
                      size: "s"
                    }), d(co, {
                      translationKey: "walletModal.desktopConnectionModal.connectionDeclined",
                      children: "Connection declined"
                    }), d(xr, {
                      get children() {
                        return d(xt, {
                          get leftIcon() {
                            return d(kr, {})
                          },
                          get onClick() {
                            return t() === "extension" ? S : C
                          },
                          get children() {
                            return d(Lt, {
                              translationKey: "common.retry",
                              children: "Retry"
                            })
                          }
                        })
                      }
                    })]
                  }
                }), d($t, {
                  get when() {
                    return t() === "extension"
                  },
                  get children() {
                    return [d(_e, {
                      get when() {
                        return In(e.wallet)
                      },
                      get children() {
                        return [d(Pf, {
                          size: "s"
                        }), d(co, {
                          translationKey: "walletModal.desktopConnectionModal.continueInExtension",
                          get translationValues() {
                            return {
                              name: e.wallet.name
                            }
                          },
                          get children() {
                            return ["Continue in ", ie(() => e.wallet.name), " browser extension…"]
                          }
                        }), d(xr, {
                          get children() {
                            return d(xt, {
                              get leftIcon() {
                                return d(kr, {})
                              },
                              onClick: S,
                              get children() {
                                return d(Lt, {
                                  translationKey: "common.retry",
                                  children: "Retry"
                                })
                              }
                            })
                          }
                        })]
                      }
                    }), d(_e, {
                      get when() {
                        return !In(e.wallet)
                      },
                      get children() {
                        return [d(co, {
                          translationKey: "walletModal.desktopConnectionModal.dontHaveExtension",
                          get translationValues() {
                            return {
                              name: e.wallet.name
                            }
                          },
                          get children() {
                            return ["Seems you don't have installed ", ie(() => e.wallet.name), " browser extension"]
                          }
                        }), d(xr, {
                          get children() {
                            return d($o, {
                              get href() {
                                return e.wallet.aboutUrl
                              },
                              blank: !0,
                              get children() {
                                return d(xt, {
                                  get rightIcon() {
                                    return d(qs, {})
                                  },
                                  onClick: S,
                                  get children() {
                                    return d(Lt, {
                                      translationKey: "walletModal.desktopConnectionModal.getWallet",
                                      get translationValues() {
                                        return {
                                          name: e.wallet.name
                                        }
                                      },
                                      get children() {
                                        return ["Get ", ie(() => e.wallet.name)]
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
                }), d($t, {
                  get when() {
                    return t() === "desktop"
                  },
                  get children() {
                    return [d(An, {
                      size: "m"
                    }), d(co, {
                      translationKey: "walletModal.desktopConnectionModal.continueOnDesktop",
                      get translationValues() {
                        return {
                          name: e.wallet.name
                        }
                      },
                      get children() {
                        return ["Continue in ", ie(() => e.wallet.name), " on desktop…"]
                      }
                    }), d(xr, {
                      get children() {
                        return [d(xt, {
                          get leftIcon() {
                            return d(kr, {})
                          },
                          onClick: C,
                          get children() {
                            return d(Lt, {
                              translationKey: "common.retry",
                              children: "Retry"
                            })
                          }
                        }), d($o, {
                          get href() {
                            return e.wallet.aboutUrl
                          },
                          blank: !0,
                          get children() {
                            return d(xt, {
                              get rightIcon() {
                                return d(qs, {})
                              },
                              get children() {
                                return d(Lt, {
                                  translationKey: "walletModal.desktopConnectionModal.getWallet",
                                  get translationValues() {
                                    return {
                                      name: e.wallet.name
                                    }
                                  },
                                  get children() {
                                    return ["Get ", ie(() => e.wallet.name)]
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
        }), d(_e, {
          get when() {
            return e.wallet.appName === Sn
          },
          get children() {
            return d(Uf, {
              get rightIcon() {
                return d(Nf, {
                  get src() {
                    return Jr.TG
                  }
                })
              },
              scale: "s",
              onClick: b,
              get children() {
                return d(Lt, {
                  translationKey: "walletModal.desktopConnectionModal.openWalletOnTelegram",
                  children: "Open Wallet in Telegram on desktop"
                })
              }
            })
          }
        }), d(_e, {
          get when() {
            return e.wallet.appName !== Sn
          },
          get children() {
            return d(If, {
              get children() {
                return [d(_e, {
                  get when() {
                    return ie(() => t() !== "mobile")() && Lr(e.wallet)
                  },
                  get children() {
                    return d(ii, {
                      appearance: "secondary",
                      get leftIcon() {
                        return d(Ku, {})
                      },
                      onClick: w,
                      get children() {
                        return d(Lt, {
                          translationKey: "common.mobile",
                          children: "Mobile"
                        })
                      }
                    })
                  }
                }), d(_e, {
                  get when() {
                    return ie(() => t() !== "extension")() && ia(e.wallet)
                  },
                  get children() {
                    return d(ii, {
                      appearance: "secondary",
                      get leftIcon() {
                        return d(Hu, {})
                      },
                      onClick: S,
                      get children() {
                        return d(Lt, {
                          translationKey: "common.browserExtension",
                          children: "Browser Extension"
                        })
                      }
                    })
                  }
                }), d(_e, {
                  get when() {
                    return ie(() => t() !== "desktop")() && oa(e.wallet)
                  },
                  get children() {
                    return d(ii, {
                      appearance: "secondary",
                      get leftIcon() {
                        return d(qu, {})
                      },
                      onClick: C,
                      get children() {
                        return d(Lt, {
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
  jf = I.div``,
  Hf = I(Xn)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  Ff = I(hn)`
    margin-bottom: 18px;
`,
  si = I.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`,
  ai = En`
    margin-bottom: 12px;
`,
  li = I(os)`
    text-align: center;
    margin-bottom: 4px;
`,
  ci = I(zt)`
    text-align: center;
    max-width: 352px;
    color: ${e=>e.theme.colors.text.secondary};
`,
  Kf = I.div`
    padding: 16px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`,
  Vf = {
    GET_A_WALLET: "https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1"
  },
  Cl = e => d(jf, {
    "data-tc-wallets-modal-info": "true",
    get children() {
      return [d(Hf, {
        icon: "arrow",
        onClick: () => e.onBackClick()
      }), d(Ff, {
        translationKey: "walletModal.infoModal.whatIsAWallet",
        children: "What is a wallet"
      }), d(ul, {
        get children() {
          return [d(si, {
            get children() {
              return [d(Ju, {
                class: ai
              }), d(li, {
                translationKey: "walletModal.infoModal.secureDigitalAssets",
                children: "Secure digital assets storage"
              }), d(ci, {
                translationKey: "walletModal.infoModal.walletProtects",
                children: "A wallet protects and manages your digital assets including TON, tokens and collectables."
              })]
            }
          }), d(si, {
            get children() {
              return [d(ed, {
                class: ai
              }), d(li, {
                translationKey: "walletModal.infoModal.controlIdentity",
                children: "Control your Web3 identity"
              }), d(ci, {
                translationKey: "walletModal.infoModal.manageIdentity",
                children: "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem."
              })]
            }
          }), d(si, {
            get children() {
              return [d(nd, {
                class: ai
              }), d(li, {
                translationKey: "walletModal.infoModal.effortlessCryptoTransactions",
                children: "Effortless crypto transactions"
              }), d(ci, {
                translationKey: "walletModal.infoModal.easilySend",
                children: "Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications."
              })]
            }
          }), d(Kf, {
            get children() {
              return d($o, {
                get href() {
                  return Vf.GET_A_WALLET
                },
                blank: !0,
                get children() {
                  return d(xt, {
                    get rightIcon() {
                      return d(Yu, {})
                    },
                    get children() {
                      return d(Lt, {
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
  qf = I.div``,
  Zf = I.div`
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,
  Gf = I(hn)`
    max-width: 262px;
    margin: 0 auto 8px;
`,
  zf = I(Xn)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  Yf = I.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 0.5px solid ${e=>Gr(e.theme.colors.icon.secondary,.2)};
`,
  Qf = I(Jn)`
    width: 36px;
    height: 36px;
    border-radius: 10px;
`,
  Jf = I($o)`
    margin-left: auto;
`,
  Xf = I(An)`
    margin-bottom: 18px;
    margin-top: 2px;
`,
  e4 = I(Ko)`
    margin-bottom: 16px;
`,
  sa = I(jn)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,
  aa = I.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,
  t4 = I(hn)`
    margin-bottom: 2px;
    padding: 0 64px;
`,
  n4 = I(jn)`
    margin-bottom: 20px;
    padding: 0 64px;
    min-height: 44px;
`,
  r4 = I.div`
    padding: 0 24px 24px;
`,
  o4 = e => [d(t4, {
    get children() {
      return e.walletInfo.name
    }
  }), d(n4, {
    translationKey: "walletModal.mobileConnectionModal.scanQR",
    get translationValues() {
      return {
        name: e.walletInfo.name
      }
    },
    get children() {
      return ["Scan the QR code below with your phone’s or ", ie(() => e.walletInfo.name), "’s camera"]
    }
  }), d(r4, {
    get children() {
      return d(Fo, {
        get imageUrl() {
          return e.walletInfo.imageUrl
        },
        get sourceUrl() {
          return ot(e.universalLink, "none")
        },
        disableCopy: !0
      })
    }
  })],
  Sl = e => {
    const t = it(),
      [n, r] = xe(!0),
      [o, i] = xe(!1),
      [a, l] = xe(!1),
      h = Ht(gr),
      v = h.onStatusChange(() => {}, () => {
        l(!0)
      }),
      m = ie(() => h.connect({
        universalLink: e.wallet.universalLink,
        bridgeUrl: e.wallet.bridgeUrl
      }, e.additionalRequest)),
      y = () => {
        Bt(Gt(et({}, e.wallet), {
          openMethod: "universal-link"
        })), Xr(m(), {
          returnStrategy: Ge.returnStrategy,
          twaReturnUrl: Ge.twaReturnUrl,
          forceRedirect: !0
        })
      },
      w = () => {
        const M = m();
        if (bn(M)) return y();
        l(!1);
        const ee = !n();
        r(!1), eo(m(), e.wallet.deepLink, {
          returnStrategy: Ge.returnStrategy,
          forceRedirect: ee
        }, V => {
          Bt(Gt(et({}, e.wallet), {
            openMethod: V
          }))
        })
      },
      C = () => {
        l(!1), i(!0), Bt(Gt(et({}, e.wallet), {
          openMethod: "qrcode"
        }))
      },
      b = () => {
        i(!1), Bt(Gt(et({}, e.wallet), {
          openMethod: "universal-link"
        }))
      },
      S = () => {
        o() ? b() : e.onBackClick()
      };
    return jt(v), w(), d(qf, {
      "data-tc-wallets-modal-connection-mobile": "true",
      get children() {
        return [d(_e, {
          get when() {
            return !e.backDisabled || o()
          },
          get children() {
            return d(zf, {
              icon: "arrow",
              onClick: S
            })
          }
        }), d(_e, {
          get when() {
            return o()
          },
          get children() {
            return d(o4, {
              get universalLink() {
                return m()
              },
              get walletInfo() {
                return e.wallet
              }
            })
          }
        }), d(_e, {
          get when() {
            return !o()
          },
          get children() {
            return [d(Gf, {
              get children() {
                return e.wallet.name
              }
            }), d(Zf, {
              get children() {
                return [d(_e, {
                  get when() {
                    return a()
                  },
                  get children() {
                    return [d(e4, {
                      size: "s"
                    }), d(sa, {
                      translationKey: "walletModal.mobileConnectionModal.connectionDeclined",
                      children: "Connection declined"
                    }), d(aa, {
                      get children() {
                        return [d(xt, {
                          get leftIcon() {
                            return d(kr, {})
                          },
                          onClick: w,
                          get children() {
                            return d(Lt, {
                              translationKey: "common.retry",
                              children: "Retry"
                            })
                          }
                        }), d(xt, {
                          get leftIcon() {
                            return d(Ei, {
                              get fill() {
                                return t.colors.accent
                              }
                            })
                          },
                          onClick: C,
                          get children() {
                            return d(Lt, {
                              translationKey: "walletModal.mobileConnectionModal.showQR",
                              children: "Show QR Code"
                            })
                          }
                        })]
                      }
                    })]
                  }
                }), d(_e, {
                  get when() {
                    return !a()
                  },
                  get children() {
                    return [d(Xf, {
                      size: "s"
                    }), d(sa, {
                      translationKey: "walletModal.mobileConnectionModal.continueIn",
                      get translationValues() {
                        return {
                          name: e.wallet.name
                        }
                      },
                      get children() {
                        return ["Continue in ", ie(() => e.wallet.name), "…"]
                      }
                    }), d(aa, {
                      get children() {
                        return [d(xt, {
                          get leftIcon() {
                            return d(kr, {})
                          },
                          onClick: w,
                          get children() {
                            return d(Lt, {
                              translationKey: "common.retry",
                              children: "Retry"
                            })
                          }
                        }), d(xt, {
                          get leftIcon() {
                            return d(Ei, {
                              get fill() {
                                return t.colors.accent
                              }
                            })
                          },
                          onClick: C,
                          get children() {
                            return d(Lt, {
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
            }), d(Yf, {
              get children() {
                return [d(Qf, {
                  get src() {
                    return e.wallet.imageUrl
                  }
                }), d(os, {
                  get children() {
                    return e.wallet.name
                  }
                }), d(Jf, {
                  get href() {
                    return e.wallet.aboutUrl
                  },
                  blank: !0,
                  get children() {
                    return d(xt, {
                      get children() {
                        return d(Lt, {
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
  _l = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  i4 = {
    m: "6px",
    s: "6px",
    none: "0"
  },
  s4 = I.ul`
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
  la = I.li`
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

    ${Yr} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${zr} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
  a4 = I.div`
    width: 1px;
    margin: 0 10px;
    height: 24px;
    position: relative;
    top: 26px;

    background-color: ${e=>e.theme.colors.icon.secondary};
    opacity: 0.2;
`,
  ca = I.div`
    width: 60px;
    height: 60px;
    border-radius: ${e=>_l[e.theme.borderRadius]};
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${e=>e.theme.colors.background.tint};
    margin-bottom: 8px;
`,
  l4 = I(hn)`
    margin-top: 38px;
    margin-bottom: 4px;
    padding: 0 24px;
`,
  c4 = I(jn)`
    margin-bottom: 24px;
    padding: 0 24px;
    min-height: 44px;
    max-width: ${e=>e.maxWidth}px;
    margin-left: ${e=>e.maxWidth?"auto":"0px"};
    margin-right: ${e=>e.maxWidth?"auto":"0px"};
`;
I(xt)`
    display: block;
    margin: 0 auto;
`;
const u4 = I(xt)`
    margin: 0 24px 24px;
    width: calc(100% - 48px);
    border-radius: ${e=>_l[e.theme.borderRadius]};
    padding: 14px 16px 14px 14px;
    background-color: ${e=>e.theme.colors.telegramButton};

    color: ${e=>e.theme.colors.constant.white};
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
`,
  d4 = I(Jn)`
    background-color: transparent;
    border-radius: ${e=>i4[e.theme.borderRadius]};
    width: 24px;
    height: 24px;
`,
  ua = I(Xn)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  f4 = I(hn)`
    margin-bottom: 2px;
    padding: 0 64px;
`,
  h4 = I(jn)`
    margin-bottom: 20px;
    padding: 0 64px;
`,
  g4 = I.div`
    padding: 0 24px 24px;
`,
  v4 = e => [d(f4, {
    translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
    children: "Connect your wallet"
  }), d(h4, {
    translationKey: "walletModal.mobileUniversalModal.scan",
    children: "Scan with your mobile wallet"
  }), d(g4, {
    get children() {
      return d(Fo, {
        get imageUrl() {
          return Jr.TON
        },
        get sourceUrl() {
          return ot(e.universalLink, "none")
        },
        disableCopy: !0
      })
    }
  })];

function El(e) {
  const t = new Set(e.filter(No).map(n => n.bridgeUrl));
  return Array.from(t).map(n => ({
    bridgeUrl: n
  }))
}

function kl(e, t) {
  const n = new Set(e == null ? void 0 : e.map(o => o.bridgeUrl)),
    r = new Set(t == null ? void 0 : t.map(o => o.bridgeUrl));
  return n.size === r.size && [...n].every(o => r.has(o))
}
const da = je("<li></li>"),
  m4 = je('<div data-tc-wallets-modal-universal-mobile="true"></div>'),
  w4 = e => {
    const [t, n] = xe(!1), [r, o] = xe(!0), [i, a] = xe(null), l = Ge.connector, h = () => e.walletsList.filter(D => Lr(D) && D.appName !== Sn), v = () => h().length > 7, m = ie(() => El(e.walletsList), null, {
      equals: kl
    }), y = () => (i() || a(l.connect(m(), e.additionalRequest)), i());
    Bt({
      openMethod: "universal-link"
    });
    const [w, C] = xe(void 0), b = () => Je(void 0, null, function*() {
      w() !== void 0 && clearTimeout(w()), yield rs(y());
      const D = setTimeout(() => C(void 0), 1500);
      C(D)
    }), S = () => {
      const D = !r();
      o(!1), eo(y(), void 0, {
        returnStrategy: Ge.returnStrategy,
        forceRedirect: D
      }, z => {
        Bt({
          openMethod: z
        })
      })
    }, M = () => {
      a(null);
      const D = e.walletsList.find(q => q.appName === Sn);
      if (!D || !No(D)) throw new bt("@wallet bot not found in the wallets list");
      const z = l.connect({
          bridgeUrl: D.bridgeUrl,
          universalLink: D.universalLink
        }, e.additionalRequest),
        B = !r();
      o(!1), Xr(z, {
        returnStrategy: Ge.returnStrategy,
        twaReturnUrl: Ge.twaReturnUrl,
        forceRedirect: B
      })
    }, ee = () => {
      n(!0), Bt({
        openMethod: "qrcode"
      })
    }, V = () => {
      n(!1), Bt({
        openMethod: "universal-link"
      })
    };
    return (() => {
      const D = m4.cloneNode(!0);
      return Rt(D, d(_e, {
        get when() {
          return t()
        },
        get children() {
          return [d(ua, {
            icon: "arrow",
            onClick: V
          }), d(v4, {
            get universalLink() {
              return y()
            }
          })]
        }
      }), null), Rt(D, d(_e, {
        get when() {
          return !t()
        },
        get children() {
          return [d(ua, {
            get icon() {
              return d(Ei, {})
            },
            onClick: ee
          }), d(l4, {
            translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
            children: "Connect your wallet"
          }), d(c4, {
            translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect",
            maxWidth: 342,
            children: "Open Wallet in Telegram or select your wallet to connect"
          }), d(u4, {
            get leftIcon() {
              return d(od, {})
            },
            get rightIcon() {
              return d(d4, {
                get src() {
                  return Jr.TG
                }
              })
            },
            onClick: M,
            scale: "s",
            get children() {
              return d(Lt, {
                translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegram",
                children: "Open Wallet in Telegram"
              })
            }
          }), d(s4, {
            get children() {
              return [d(qr, {
                get each() {
                  return ie(() => !!v())() ? h().slice(0, 4) : h()
                },
                children: z => (() => {
                  const B = da.cloneNode(!0);
                  return Rt(B, d(Lo, {
                    get icon() {
                      return z.imageUrl
                    },
                    get name() {
                      return z.name
                    },
                    onClick: () => e.onSelect(z)
                  })), B
                })()
              }), d(_e, {
                get when() {
                  return v()
                },
                get children() {
                  const z = da.cloneNode(!0);
                  return Rt(z, d(ll, {
                    labelLine1: "View all",
                    labelLine2: "wallets",
                    get images() {
                      return h().slice(3, 7).map(B => B.imageUrl)
                    },
                    onClick: () => e.onSelectAllWallets()
                  })), z
                }
              }), d(a4, {
                children: " "
              }), d(la, {
                onClick: S,
                get children() {
                  return [d(ca, {
                    get children() {
                      return d(Eu, {})
                    }
                  }), d(zt, {
                    fontWeight: 590,
                    translationKey: "walletModal.mobileUniversalModal.openLink",
                    children: "Open Link"
                  })]
                }
              }), d(la, {
                onClick: b,
                get children() {
                  return [d(ca, {
                    get children() {
                      return ie(() => w() !== void 0)() ? d(sd, {}) : d(al, {})
                    }
                  }), d(zt, {
                    fontWeight: 590,
                    get translationKey() {
                      return w() !== void 0 ? "common.copied" : "common.copyLink"
                    },
                    get children() {
                      return w() !== void 0 ? "Copied" : "Copy Link"
                    }
                  })]
                }
              })]
            }
          })]
        }
      }), null), D
    })()
  },
  Al = {
    m: "16px",
    s: "8px",
    none: "0"
  },
  p4 = {
    m: "8px",
    s: "4px",
    none: "0"
  },
  y4 = I.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`,
  b4 = I(jn)`
    max-width: 320px;
    margin-top: 2px;
    margin-bottom: 20px;
`,
  x4 = I(jn)`
    margin-bottom: 16px;
`,
  C4 = I(Fo)`
    margin-bottom: 24px;
`,
  S4 = I.ul`
    display: flex;
`;
I.div`
    display: flex;
    gap: 16px;
    width: 100%;
`;
I(xt)`
    position: relative;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    padding: 0 16px;
    height: 56px;
    border-radius: ${e=>Al[e.theme.borderRadius]};

    &:hover {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }

    &:active {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }
`;
I.ul`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin: 0;
    padding: 8px;
    width: 188px;
    transform: translateY(-16px);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>Al[e.theme.borderRadius]};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
`;
I.li`
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    border-radius: ${e=>p4[e.theme.borderRadius]};

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`;
I(Jn)`
    width: 24px;
    height: 24px;

    border-radius: 6px;
`;
I.div`
    margin-top: 23px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
I(zt)`
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 16px;
`;
const _4 = je("<li></li>"),
  E4 = e => {
    const [t, n] = xe(!1), r = Ge.connector, o = ie(() => El(e.walletsList), null, {
      equals: kl
    });
    Bt({
      openMethod: "qrcode"
    });
    const i = ie(() => r.connect(o(), e.additionalRequest));
    return d(y4, {
      onClick: () => n(!1),
      "data-tc-wallets-modal-universal-desktop": "true",
      get children() {
        return [d(hn, {
          translationKey: "walletModal.desktopUniversalModal.connectYourWallet",
          children: "Connect your wallet"
        }), d(b4, {
          translationKey: "walletModal.desktopUniversalModal.scan",
          children: "Scan with your mobile wallet"
        }), d(C4, {
          get sourceUrl() {
            return ot(i(), "none")
          },
          get disableCopy() {
            return t()
          },
          get imageUrl() {
            return Jr.TON
          }
        }), d(x4, {
          translationKey: "walletModal.desktopUniversalModal.availableWallets",
          children: "Available wallets"
        }), d(S4, {
          get children() {
            return [d(qr, {
              get each() {
                return e.walletsList.slice(0, 3)
              },
              children: a => (() => {
                const l = _4.cloneNode(!0);
                return Rt(l, d(cl, {
                  wallet: a,
                  onClick: () => e.onSelect(a)
                })), l
              })()
            }), d(ll, {
              labelLine1: "View all",
              labelLine2: "wallets",
              get images() {
                return e.walletsList.slice(3, 7).map(a => a.imageUrl)
              },
              onClick: () => e.onSelectAllWallets()
            })]
          }
        })]
      }
    })
  },
  k4 = () => {
    const {
      locale: e
    } = fn()[1];
    At(() => e(Ge.language)), At(() => {
      Us() ? Mo() : (i(null), l("universal"), v(!1))
    });
    const t = Ht(gr),
      n = Ht(Hn),
      [r] = Vc(() => n.getWallets()),
      [o, i] = xe(null),
      [a, l] = xe("universal"),
      [h, v] = xe(!1),
      m = ie(() => {
        if (r.state !== "ready") return null;
        let V = cs(r(), Ge.walletsListConfiguration);
        const D = V.filter(In),
          z = V.filter(E => !In(E));
        V = (D || []).concat(z);
        const B = Ge.preferredWalletAppName,
          q = V.find(E => Rn(E, B)),
          P = V.filter(E => Rn(E, B)).length >= 2;
        B && q && !P && (V = [Gt(et({}, q), {
          isPreferred: !0
        })].concat(V.filter(E => !Rn(E, B))));
        const R = V.find(E => Rn(E, Sn));
        return R && (V = [R].concat(V.filter(E => !Rn(E, Sn)))), V
      }),
      y = () => {
        var V;
        return ((V = Ge.connectRequestParameters) == null ? void 0 : V.state) === "loading"
      },
      w = ie(() => {
        var V;
        if (!y()) return (V = Ge.connectRequestParameters) == null ? void 0 : V.value
      }),
      C = V => {
        n.closeModal(V)
      },
      b = t.onStatusChange(V => {
        V && C("wallet-selected")
      }),
      S = () => {
        l("all-wallets")
      },
      M = () => {
        l("universal")
      },
      ee = () => {
        i(null)
      };
    return jt(() => {
      i(null), v(!1)
    }), jt(b), d(pl, {
      get opened() {
        return Us()
      },
      get enableAndroidBackHandler() {
        return Ge.enableAndroidBackHandler
      },
      onClose: () => C("action-cancelled"),
      onClickQuestion: () => v(V => !V),
      "data-tc-wallets-modal-container": "true",
      get children() {
        return [d(_e, {
          get when() {
            return h()
          },
          get children() {
            return d(Cl, {
              onBackClick: () => v(!1)
            })
          }
        }), d(_e, {
          get when() {
            return !h()
          },
          get children() {
            return [d(_e, {
              get when() {
                return y() || !m()
              },
              get children() {
                return [d(yl, {
                  translationKey: "walletModal.loading",
                  children: "Wallets list is loading"
                }), d(bl, {
                  get children() {
                    return d(An, {
                      size: "m"
                    })
                  }
                })]
              }
            }), d(_e, {
              get when() {
                return ie(() => !y())() && m()
              },
              get children() {
                return d(Zr, {
                  get children() {
                    return [d($t, {
                      get when() {
                        return o()
                      },
                      get children() {
                        return d(lr, {
                          get component() {
                            return dr() ? Sl : xl
                          },
                          get wallet() {
                            return o()
                          },
                          get additionalRequest() {
                            return w()
                          },
                          onBackClick: ee
                        })
                      }
                    }), d($t, {
                      get when() {
                        return a() === "universal"
                      },
                      get children() {
                        return d(lr, {
                          get component() {
                            return dr() ? w4 : E4
                          },
                          onSelect: i,
                          get walletsList() {
                            return m()
                          },
                          get additionalRequest() {
                            return w()
                          },
                          onSelectAllWallets: S
                        })
                      }
                    }), d($t, {
                      get when() {
                        return a() === "all-wallets"
                      },
                      get children() {
                        return d(Ef, {
                          get walletsList() {
                            return m()
                          },
                          onBack: M,
                          onSelect: i
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
  A4 = I.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
`,
  T4 = I(hn)`
    margin-top: 16px;
`,
  L4 = I(zt)`
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 250px;

    color: ${e=>e.theme.colors.text.secondary};
`,
  M4 = I(xt)`
    min-width: 112px;
    margin-top: 32px;
`,
  $4 = I(An)`
    height: 16px;
    width: 16px;
`,
  fa = I(xt)`
    margin-top: 32px;
`,
  us = e => {
    const t = Qr(e),
      n = Ht(Hn),
      [r, o] = xe(!0),
      [i, a] = xe(!1);
    At(() => {
      const m = yn();
      a(!!m && "sent" in m && m.sent)
    });
    let l;
    n != null && n.wallet && "universalLink" in n.wallet && (n.wallet.openMethod === "universal-link" || bn(n.wallet.universalLink) && ln()) && (l = n.wallet.universalLink);
    let h;
    n != null && n.wallet && "deepLink" in n.wallet && (n.wallet.openMethod === "custom-deeplink" || bn(n.wallet.deepLink) && ln()) && (h = n.wallet.deepLink);
    const v = () => {
      const m = yn(),
        y = "returnStrategy" in m ? m.returnStrategy : Ge.returnStrategy,
        w = !r();
      o(!1), bn(l) ? Xr(l, {
        returnStrategy: y,
        twaReturnUrl: "twaReturnUrl" in m ? m.twaReturnUrl : Ge.twaReturnUrl,
        forceRedirect: w
      }) : eo(l, h, {
        returnStrategy: y,
        forceRedirect: w
      }, () => {})
    };
    return d(A4, sn(t, {
      get children() {
        return [ie(() => e.icon), d(T4, {
          get translationKey() {
            return e.headerTranslationKey
          },
          get translationValues() {
            return e.headerTranslationValues
          }
        }), d(L4, {
          get translationKey() {
            return e.textTranslationKey
          },
          get translationValues() {
            return e.textTranslationValues
          }
        }), d(_e, {
          get when() {
            return !i() && (e.showButton === "open-wallet" && l || e.showButton !== "open-wallet")
          },
          get children() {
            return d(M4, {
              disabled: !0,
              "data-tc-connect-button-loading": "true",
              get children() {
                return d($4, {})
              }
            })
          }
        }), d(_e, {
          get when() {
            return i()
          },
          get children() {
            return [d(_e, {
              get when() {
                return e.showButton !== "open-wallet"
              },
              get children() {
                return d(fa, {
                  onClick: () => e.onClose(),
                  get children() {
                    return d(Lt, {
                      translationKey: "common.close",
                      children: "Close"
                    })
                  }
                })
              }
            }), d(_e, {
              get when() {
                return e.showButton === "open-wallet" && l
              },
              get children() {
                return d(fa, {
                  onClick: v,
                  get children() {
                    return d(Lt, {
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
  R4 = e => {
    const t = Ht(Hn),
      [n] = fn(),
      r = () => t.wallet && "name" in t.wallet ? t.wallet.name : n("common.yourWallet", {}, "Your wallet");
    return d(us, {
      headerTranslationKey: "actionModal.confirmTransaction.header",
      get headerTranslationValues() {
        return {
          name: r()
        }
      },
      textTranslationKey: "actionModal.confirmTransaction.text",
      get icon() {
        return d(An, {
          size: "m"
        })
      },
      onClose: () => e.onClose(),
      showButton: "open-wallet",
      "data-tc-confirm-modal": "true"
    })
  },
  B4 = e => d(us, {
    headerTranslationKey: "actionModal.transactionCanceled.header",
    textTranslationKey: "actionModal.transactionCanceled.text",
    get icon() {
      return d(Ko, {
        size: "m"
      })
    },
    onClose: () => e.onClose(),
    "data-tc-transaction-canceled-modal": "true"
  }),
  I4 = e => d(us, {
    headerTranslationKey: "actionModal.transactionSent.header",
    textTranslationKey: "actionModal.transactionSent.text",
    get icon() {
      return d(is, {
        size: "m"
      })
    },
    onClose: () => e.onClose(),
    "data-tc-transaction-sent-modal": "true"
  }),
  P4 = () => d(nl, {
    get opened() {
      var e;
      return ie(() => yn() !== null)() && ((e = yn()) == null ? void 0 : e.openModal) === !0
    },
    get enableAndroidBackHandler() {
      return Ge.enableAndroidBackHandler
    },
    onClose: () => rr(null),
    "data-tc-actions-modal-container": "true",
    get children() {
      return d(Zr, {
        get children() {
          return [d($t, {
            get when() {
              return yn().name === "transaction-sent"
            },
            get children() {
              return d(I4, {
                onClose: () => rr(null)
              })
            }
          }), d($t, {
            get when() {
              return yn().name === "transaction-canceled"
            },
            get children() {
              return d(B4, {
                onClose: () => rr(null)
              })
            }
          }), d($t, {
            get when() {
              return yn().name === "confirm-transaction"
            },
            get children() {
              return d(R4, {
                onClose: () => rr(null)
              })
            }
          })]
        }
      })
    }
  }),
  W4 = () => {
    const {
      locale: e
    } = fn()[1];
    At(() => e(Ge.language)), At(() => {
      Ds() && Mo()
    });
    const t = Ht(gr),
      n = Ht(Hn),
      [r, o] = xe(!1),
      i = () => {
        var v;
        return ((v = Ge.connectRequestParameters) == null ? void 0 : v.state) === "loading"
      },
      a = ie(() => {
        var v;
        if (!i()) return (v = Ge.connectRequestParameters) == null ? void 0 : v.value
      }),
      l = v => {
        n.closeSingleWalletModal(v)
      },
      h = t.onStatusChange(v => {
        v && l("wallet-selected")
      });
    return jt(h), jt(() => {
      o(!1)
    }), d(pl, {
      get opened() {
        return Ds()
      },
      get enableAndroidBackHandler() {
        return Ge.enableAndroidBackHandler
      },
      onClose: () => l("action-cancelled"),
      onClickQuestion: () => o(v => !v),
      "data-tc-wallets-modal-container": "true",
      get children() {
        return [d(_e, {
          get when() {
            return r()
          },
          get children() {
            return d(Cl, {
              onBackClick: () => o(!1)
            })
          }
        }), d(_e, {
          get when() {
            return !r()
          },
          get children() {
            return [d(_e, {
              get when() {
                return i()
              },
              get children() {
                return [d(yl, {
                  translationKey: "walletModal.loading",
                  children: "Wallets list is loading"
                }), d(bl, {
                  get children() {
                    return d(An, {
                      size: "m"
                    })
                  }
                })]
              }
            }), d(_e, {
              get when() {
                return !i()
              },
              get children() {
                return d(lr, {
                  get component() {
                    return dr() ? Sl : xl
                  },
                  get wallet() {
                    return V0()
                  },
                  get additionalRequest() {
                    return a()
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
  U4 = e => {
    const t = cu(l1, Ge.language);
    return D0(), N0(), d(il.Provider, {
      value: t,
      get children() {
        return d(Hn.Provider, {
          get value() {
            return e.tonConnectUI
          },
          get children() {
            return d(gr.Provider, {
              get value() {
                return Ge.connector
              },
              get children() {
                return [d(M0, {}), d(T0, {
                  theme: m1,
                  get children() {
                    return [d(_e, {
                      get when() {
                        return Ge.buttonRootId
                      },
                      get children() {
                        return d(Ua, {
                          get mount() {
                            return document.getElementById(Ge.buttonRootId)
                          },
                          get children() {
                            return d(vf, {})
                          }
                        })
                      }
                    }), d(lr, {
                      component: pn,
                      get children() {
                        return [d(k4, {}), d(W4, {}), d(P4, {})]
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
  Zt = {
    openWalletsModal: () => void setTimeout(() => Ws({
      status: "opened",
      closeReason: null
    })),
    closeWalletsModal: e => void setTimeout(() => Ws({
      status: "closed",
      closeReason: e
    })),
    openSingleWalletModal: e => {
      setTimeout(() => Ns({
        status: "opened",
        closeReason: null,
        walletInfo: e
      }))
    },
    closeSingleWalletModal: e => void setTimeout(() => Ns({
      status: "closed",
      closeReason: e
    })),
    setAction: e => void setTimeout(() => rr(e)),
    clearAction: () => void setTimeout(() => rr(null)),
    getSelectedWalletInfo: () => q0(),
    removeSelectedWalletInfo: () => Bt(null),
    renderApp: (e, t) => c0(() => d(U4, {
      tonConnectUI: t
    }), document.getElementById(e))
  };
class N4 {
  constructor(t) {
    ye(this, "connector"), ye(this, "setConnectRequestParametersCallback"), ye(this, "consumers", []), ye(this, "tracker"), ye(this, "state", yi()), this.connector = t.connector, this.tracker = t.tracker, this.setConnectRequestParametersCallback = t.setConnectRequestParametersCallback, At(() => {
      const n = yi();
      this.state = n, this.consumers.forEach(r => r(n))
    })
  }
  open() {
    return Je(this, null, function*() {
      this.tracker.trackConnectionStarted();
      const n = (yield this.connector.getWallets()).find(Vr);
      return n ? this.connectEmbeddedWallet(n) : this.openWalletsModal()
    })
  }
  close(t = "action-cancelled") {
    t === "action-cancelled" && this.tracker.trackConnectionError("Connection was cancelled"), Zt.closeWalletsModal(t)
  }
  onStateChange(t) {
    return this.consumers.push(t), () => {
      this.consumers = this.consumers.filter(n => n !== t)
    }
  }
  connectEmbeddedWallet(t) {
    const n = o => {
        Bt(t), this.connector.connect({
          jsBridgeKey: t.jsBridgeKey
        }, o)
      },
      r = Ge.connectRequestParameters;
    (r == null ? void 0 : r.state) === "loading" ? this.setConnectRequestParametersCallback(n): n(r == null ? void 0 : r.value)
  }
  openWalletsModal() {
    return Je(this, null, function*() {
      return ln() && ts(), Zt.openWalletsModal(), new Promise(t => {
        const n = this.onStateChange(r => {
          const {
            status: o
          } = r;
          o === "opened" && (n(), t())
        })
      })
    })
  }
}
class D4 {
  constructor(t) {
    ye(this, "connector"), ye(this, "consumers", []), this.connector = t.connector, At(() => {
      const n = yn();
      this.consumers.forEach(r => r(n))
    })
  }
  onStateChange(t) {
    return this.consumers.push(t), () => {
      this.consumers = this.consumers.filter(n => n !== t)
    }
  }
}
class O4 {
  constructor(t) {
    ye(this, "connector"), ye(this, "setConnectRequestParametersCallback"), ye(this, "consumers", []), ye(this, "tracker"), ye(this, "state", So()), this.connector = t.connector, this.tracker = t.tracker, this.setConnectRequestParametersCallback = t.setConnectRequestParametersCallback, At(() => {
      const n = So();
      this.state = n, this.consumers.forEach(r => r(n))
    })
  }
  open(t) {
    return Je(this, null, function*() {
      this.tracker.trackConnectionStarted();
      const n = yield this.connector.getWallets(), r = cs(n, Ge.walletsListConfiguration), o = r.find(Vr);
      if (!!o) return this.connectEmbeddedWallet(o);
      const l = r.filter(No).find(m => Rn(m, t));
      if (!!l) return this.openSingleWalletModal(l);
      const v = `Trying to open modal window with unknown wallet "${t}".`;
      throw this.tracker.trackConnectionError(v), new bt(v)
    })
  }
  close(t = "action-cancelled") {
    t === "action-cancelled" && this.tracker.trackConnectionError("Connection was cancelled"), Zt.closeSingleWalletModal("action-cancelled")
  }
  onStateChange(t) {
    return this.consumers.push(t), () => {
      this.consumers = this.consumers.filter(n => n !== t)
    }
  }
  connectEmbeddedWallet(t) {
    const n = o => {
        Bt(t), this.connector.connect({
          jsBridgeKey: t.jsBridgeKey
        }, o)
      },
      r = Ge.connectRequestParameters;
    (r == null ? void 0 : r.state) === "loading" ? this.setConnectRequestParametersCallback(n): n(r == null ? void 0 : r.value)
  }
  openSingleWalletModal(t) {
    return Je(this, null, function*() {
      return ln() && ts(), Zt.openSingleWalletModal(t), new Promise(n => {
        const r = this.onStateChange(o => {
          const {
            status: i
          } = o;
          i === "opened" && (r(), n())
        })
      })
    })
  }
}
class j4 {
  constructor(t) {
    ye(this, "eventPrefix", "ton-connect-ui-"), ye(this, "tonConnectUiVersion"), ye(this, "tonConnectSdkVersion", null), ye(this, "eventDispatcher");
    var n;
    this.eventDispatcher = (n = t == null ? void 0 : t.eventDispatcher) != null ? n : new Fi, this.tonConnectUiVersion = t.tonConnectUiVersion, this.init().catch()
  }
  get version() {
    return On({
      ton_connect_sdk_lib: this.tonConnectSdkVersion,
      ton_connect_ui_lib: this.tonConnectUiVersion
    })
  }
  init() {
    return Je(this, null, function*() {
      try {
        yield this.setRequestVersionHandler(), this.tonConnectSdkVersion = yield this.requestTonConnectSdkVersion()
      } catch {}
    })
  }
  setRequestVersionHandler() {
    return Je(this, null, function*() {
      yield this.eventDispatcher.addEventListener("ton-connect-ui-request-version", () => Je(this, null, function*() {
        yield this.eventDispatcher.dispatchEvent("ton-connect-ui-response-version", $i(this.tonConnectUiVersion))
      }))
    })
  }
  requestTonConnectSdkVersion() {
    return Je(this, null, function*() {
      return new Promise((t, n) => Je(this, null, function*() {
        try {
          yield this.eventDispatcher.addEventListener("ton-connect-response-version", r => {
            t(r.detail.version)
          }, {
            once: !0
          }), yield this.eventDispatcher.dispatchEvent("ton-connect-request-version", Mi())
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
      const n = Ri(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionCompleted(...t) {
    try {
      const n = Bi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionError(...t) {
    try {
      const n = Ii(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringStarted(...t) {
    try {
      const n = Pi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringCompleted(...t) {
    try {
      const n = Wi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringError(...t) {
    try {
      const n = Ui(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackDisconnection(...t) {
    try {
      const n = Hi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSentForSignature(...t) {
    try {
      const n = Di(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSigned(...t) {
    try {
      const n = Oi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSigningFailed(...t) {
    try {
      const n = ji(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
}
const H4 = "2.0.9";
class F4 {
  constructor(t) {
    if (ye(this, "walletInfoStorage", new F0), ye(this, "preferredWalletStorage", new K0), ye(this, "tracker"), ye(this, "walletInfo", null), ye(this, "systemThemeChangeUnsubscribe", null), ye(this, "actionsConfiguration"), ye(this, "walletsList"), ye(this, "connectRequestParametersCallback"), ye(this, "connector"), ye(this, "modal"), ye(this, "singleWalletModal"), ye(this, "transactionModal"), ye(this, "connectionRestored", Promise.resolve(!1)), t && "connector" in t && t.connector) this.connector = t.connector;
    else if (t && "manifestUrl" in t && t.manifestUrl) this.connector = new Wn({
      manifestUrl: t.manifestUrl,
      eventDispatcher: t == null ? void 0 : t.eventDispatcher
    });
    else throw new bt("You have to specify a `manifestUrl` or a `connector` in the options.");
    this.tracker = new j4({
      eventDispatcher: t == null ? void 0 : t.eventDispatcher,
      tonConnectUiVersion: H4
    }), this.modal = new N4({
      connector: this.connector,
      tracker: this.tracker,
      setConnectRequestParametersCallback: o => {
        this.connectRequestParametersCallback = o
      }
    }), this.singleWalletModal = new O4({
      connector: this.connector,
      tracker: this.tracker,
      setConnectRequestParametersCallback: o => {
        this.connectRequestParametersCallback = o
      }
    }), this.transactionModal = new D4({
      connector: this.connector
    }), this.walletsList = this.getWallets(), this.walletsList.then(o => Ha(mf(o.map(i => i.imageUrl))));
    const n = this.normalizeWidgetRoot(t == null ? void 0 : t.widgetRootId);
    this.subscribeToWalletChange(), (t == null ? void 0 : t.restoreConnection) !== !1 && (this.connectionRestored = O0(() => Je(this, null, function*() {
      return this.tracker.trackConnectionRestoringStarted(), yield this.connector.restoreConnection(), this.connector.connected ? this.tracker.trackConnectionRestoringCompleted(this.wallet) : (this.tracker.trackConnectionRestoringError("Connection was not restored"), this.walletInfoStorage.removeWalletInfo()), this.connector.connected
    }))), this.uiOptions = Pn(t, {
      uiPreferences: {
        theme: "SYSTEM"
      }
    });
    const r = this.preferredWalletStorage.getPreferredWalletAppName();
    lo({
      connector: this.connector,
      preferredWalletAppName: r
    }), Zt.renderApp(n, this)
  }
  static getWallets() {
    return Wn.getWallets()
  }
  get connected() {
    return this.connector.connected
  }
  get account() {
    return this.connector.account
  }
  get wallet() {
    return this.connector.wallet ? et(et({}, this.connector.wallet), this.walletInfo) : null
  }
  set uiOptions(t) {
    var n, r, o, i, a;
    this.checkButtonRootExist(t.buttonRootId), this.actionsConfiguration = t.actionsConfiguration, (n = t.uiPreferences) != null && n.theme ? ((r = t.uiPreferences) == null ? void 0 : r.theme) !== "SYSTEM" ? ((o = this.systemThemeChangeUnsubscribe) == null || o.call(this), ti(t.uiPreferences.theme, t.uiPreferences.colorsSet)) : (ti(I0(), t.uiPreferences.colorsSet), this.systemThemeChangeUnsubscribe || (this.systemThemeChangeUnsubscribe = P0(ti))) : (i = t.uiPreferences) != null && i.colorsSet && p1(t.uiPreferences.colorsSet), (a = t.uiPreferences) != null && a.borderRadius && w1(t.uiPreferences.borderRadius), lo(l => {
      var h, v;
      const m = Pn(et(et(et(et({}, t.language && {
        language: t.language
      }), !!((h = t.actionsConfiguration) != null && h.returnStrategy) && {
        returnStrategy: t.actionsConfiguration.returnStrategy
      }), !!((v = t.actionsConfiguration) != null && v.twaReturnUrl) && {
        twaReturnUrl: t.actionsConfiguration.twaReturnUrl
      }), !!t.walletsListConfiguration && {
        walletsListConfiguration: t.walletsListConfiguration
      }), cr(l));
      return t.buttonRootId !== void 0 && (m.buttonRootId = t.buttonRootId), t.enableAndroidBackHandler !== void 0 && (m.enableAndroidBackHandler = t.enableAndroidBackHandler), m
    })
  }
  setConnectRequestParameters(t) {
    var n;
    lo({
      connectRequestParameters: t
    }), ((t == null ? void 0 : t.state) === "ready" || !t) && ((n = this.connectRequestParametersCallback) == null || n.call(this, t == null ? void 0 : t.value))
  }
  getWallets() {
    return Je(this, null, function*() {
      return this.connector.getWallets()
    })
  }
  onStatusChange(t, n) {
    return this.connector.onStatusChange(r => Je(this, null, function*() {
      if (r) {
        const o = yield this.getSelectedWalletInfo(r);
        t(et(et({}, r), o || this.walletInfoStorage.getWalletInfo()))
      } else t(r)
    }), n)
  }
  openModal() {
    return Je(this, null, function*() {
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
    return Je(this, null, function*() {
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
    return Je(this, null, function*() {
      const n = (yield this.getWallets()).find(Vr);
      return n ? yield this.connectEmbeddedWallet(n): yield this.connectExternalWallet()
    })
  }
  disconnect() {
    return this.tracker.trackDisconnection(this.wallet, "dapp"), Zt.clearAction(), Zt.removeSelectedWalletInfo(), this.walletInfoStorage.removeWalletInfo(), this.connector.disconnect()
  }
  sendTransaction(t, n) {
    return Je(this, null, function*() {
      if (this.tracker.trackTransactionSentForSignature(this.wallet, t), !this.connected) throw this.tracker.trackTransactionSigningFailed(this.wallet, t, "Wallet was not connected"), new bt("Connect wallet to send a transaction.");
      ln() && ts();
      const {
        notifications: r,
        modals: o,
        returnStrategy: i,
        twaReturnUrl: a,
        skipRedirectToWallet: l
      } = this.getModalsAndNotificationsConfiguration(n);
      Zt.setAction({
        name: "confirm-transaction",
        showNotification: r.includes("before"),
        openModal: o.includes("before"),
        sent: !1
      });
      const h = () => {
          v.signal.aborted || (Zt.setAction({
            name: "confirm-transaction",
            showNotification: r.includes("before"),
            openModal: o.includes("before"),
            sent: !0
          }), this.walletInfo && "universalLink" in this.walletInfo && (this.walletInfo.openMethod === "universal-link" || this.walletInfo.openMethod === "custom-deeplink") && (bn(this.walletInfo.universalLink) ? Xr(this.walletInfo.universalLink, {
            returnStrategy: i,
            twaReturnUrl: a || Ge.twaReturnUrl,
            forceRedirect: !1
          }) : eo(this.walletInfo.universalLink, this.walletInfo.deepLink, {
            returnStrategy: i,
            forceRedirect: !1
          }, () => {})))
        },
        v = new AbortController,
        m = this.onTransactionModalStateChange(y => {
          y != null && y.openModal || (m(), y || v.abort())
        });
      try {
        const y = yield this.waitForSendTransaction({
          transaction: t,
          signal: v.signal
        }, h);
        return this.tracker.trackTransactionSigned(this.wallet, t, y), Zt.setAction({
          name: "transaction-sent",
          showNotification: r.includes("success"),
          openModal: o.includes("success")
        }), y
      } catch (y) {
        throw Zt.setAction({
          name: "transaction-canceled",
          showNotification: r.includes("error"),
          openModal: o.includes("error")
        }), y instanceof ge ? y : (console.error(y), new bt("Unhandled error:" + y))
      } finally {
        m()
      }
    })
  }
  connectEmbeddedWallet(t) {
    return Je(this, null, function*() {
      const n = o => {
          Bt(t), this.connector.connect({
            jsBridgeKey: t.jsBridgeKey
          }, o)
        },
        r = Ge.connectRequestParameters;
      return (r == null ? void 0 : r.state) === "loading" ? this.connectRequestParametersCallback = n : n(r == null ? void 0 : r.value), yield this.waitForWalletConnection({
        ignoreErrors: !1
      })
    })
  }
  connectExternalWallet() {
    return Je(this, null, function*() {
      const t = new AbortController;
      Zt.openWalletsModal();
      const n = this.onModalStateChange(r => {
        const {
          status: o,
          closeReason: i
        } = r;
        o !== "opened" && (n(), i === "action-cancelled" && t.abort())
      });
      return yield this.waitForWalletConnection({
        ignoreErrors: !0,
        signal: t.signal
      })
    })
  }
  waitForWalletConnection(t) {
    return Je(this, null, function*() {
      return new Promise((n, r) => {
        this.tracker.trackConnectionStarted();
        const {
          ignoreErrors: o = !1,
          signal: i = null
        } = t;
        if (i && i.aborted) return this.tracker.trackConnectionError("Connection was cancelled"), r(new bt("Wallet was not connected"));
        const a = v => Je(this, null, function*() {
            if (v) this.tracker.trackConnectionCompleted(v), h(), n(v);
            else {
              if (this.tracker.trackConnectionError("Connection was cancelled"), o) return;
              h(), r(new bt("Wallet was not connected"))
            }
          }),
          l = v => {
            this.tracker.trackConnectionError(v.message), !o && (h(), r(v))
          },
          h = this.onStatusChange(v => a(v), v => l(v));
        i && i.addEventListener("abort", () => {
          h(), r(new bt("Wallet was not connected"))
        }, {
          once: !0
        })
      })
    })
  }
  waitForSendTransaction(t, n) {
    return Je(this, null, function*() {
      return new Promise((r, o) => {
        const {
          transaction: i,
          signal: a
        } = t;
        if (a.aborted) return this.tracker.trackTransactionSigningFailed(this.wallet, i, "Transaction was cancelled"), o(new bt("Transaction was not sent"));
        const l = m => Je(this, null, function*() {
            r(m)
          }),
          h = m => {
            o(m)
          },
          v = () => {
            this.tracker.trackTransactionSigningFailed(this.wallet, i, "Transaction was cancelled"), o(new bt("Transaction was not sent"))
          };
        a.addEventListener("abort", v, {
          once: !0
        }), this.connector.sendTransaction(i, {
          onRequestSent: n,
          signal: a
        }).then(m => (a.removeEventListener("abort", v), l(m))).catch(m => (a.removeEventListener("abort", v), h(m)))
      })
    })
  }
  onTransactionModalStateChange(t) {
    return this.transactionModal.onStateChange(t)
  }
  subscribeToWalletChange() {
    this.connector.onStatusChange(t => Je(this, null, function*() {
      var n;
      t ? (yield this.updateWalletInfo(t), this.setPreferredWalletAppName(((n = this.walletInfo) == null ? void 0 : n.appName) || t.device.appName)) : this.walletInfoStorage.removeWalletInfo()
    }))
  }
  setPreferredWalletAppName(t) {
    this.preferredWalletStorage.setPreferredWalletAppName(t), lo({
      preferredWalletAppName: t
    })
  }
  getSelectedWalletInfo(t) {
    return Je(this, null, function*() {
      let n = Zt.getSelectedWalletInfo();
      if (!n) return null;
      let r;
      if ("name" in n) r = n;
      else {
        const i = cs(yield this.walletsList, Ge.walletsListConfiguration).find(a => Rn(a, t.device.appName));
        if (!i) throw new bt(`Cannot find WalletInfo for the '${t.device.appName}' wallet`);
        r = et(et({}, i), n)
      }
      return r
    })
  }
  updateWalletInfo(t) {
    return Je(this, null, function*() {
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
      this.walletInfo = (yield this.walletsList).find(o => Rn(o, t.device.appName)) || null
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
    if (t != null && !document.getElementById(t)) throw new bt(`${t} element not found in the document.`)
  }
  getModalsAndNotificationsConfiguration(t) {
    var n, r, o, i, a, l;
    const h = ["before", "success", "error"];
    let v = h;
    (n = this.actionsConfiguration) != null && n.notifications && ((r = this.actionsConfiguration) == null ? void 0 : r.notifications) !== "all" && (v = this.actionsConfiguration.notifications), t != null && t.notifications && (t.notifications === "all" ? v = h : v = t.notifications);
    let m = ["before"];
    (o = this.actionsConfiguration) != null && o.modals && (this.actionsConfiguration.modals === "all" ? m = h : m = this.actionsConfiguration.modals), t != null && t.modals && (t.modals === "all" ? m = h : m = t.modals);
    const y = (t == null ? void 0 : t.returnStrategy) || ((i = this.actionsConfiguration) == null ? void 0 : i.returnStrategy) || "back",
      w = (t == null ? void 0 : t.twaReturnUrl) || ((a = this.actionsConfiguration) == null ? void 0 : a.twaReturnUrl);
    let C = (t == null ? void 0 : t.skipRedirectToWallet) || ((l = this.actionsConfiguration) == null ? void 0 : l.skipRedirectToWallet) || "ios";
    return ln() && (C = "never"), {
      notifications: v,
      modals: m,
      returnStrategy: y,
      twaReturnUrl: w,
      skipRedirectToWallet: C
    }
  }
}
const V4 = Object.freeze(Object.defineProperty({
  __proto__: null,
  BadRequestError: Fr,
  BrowserEventDispatcher: Fi,
  get CHAIN() {
    return $r
  },
  get CONNECT_EVENT_ERROR_CODES() {
    return wn
  },
  get CONNECT_ITEM_ERROR_CODES() {
    return ui
  },
  FetchWalletsError: Wo,
  ParseHexError: Br,
  get SEND_TRANSACTION_ERROR_CODES() {
    return qn
  },
  THEME: ut,
  TonConnect: Wn,
  TonConnectError: ge,
  TonConnectUI: F4,
  TonConnectUIError: bt,
  UnknownAppError: Kr,
  UnknownError: _n,
  UserRejectsError: Hr,
  WalletAlreadyConnectedError: Io,
  WalletNotConnectedError: Rr,
  WalletNotInjectedError: Po,
  WalletsListManager: mo,
  WrongAddressError: Zn,
  createConnectionCompletedEvent: Bi,
  createConnectionErrorEvent: Ii,
  createConnectionRestoringCompletedEvent: Wi,
  createConnectionRestoringErrorEvent: Ui,
  createConnectionRestoringStartedEvent: Pi,
  createConnectionStartedEvent: Ri,
  createDisconnectionEvent: Hi,
  createRequestVersionEvent: Mi,
  createResponseVersionEvent: $i,
  createTransactionSentForSignatureEvent: Di,
  createTransactionSignedEvent: Oi,
  createTransactionSigningFailedEvent: ji,
  createVersionInfo: On,
  encodeTelegramUrlParameters: Li,
  isTelegramUrl: bn,
  isWalletInfoCurrentlyEmbedded: Vr,
  isWalletInfoCurrentlyInjected: In,
  isWalletInfoInjectable: ba,
  isWalletInfoRemote: No,
  toUserFriendlyAddress: Ki
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  $r as C, ha as c, $l as g, V4 as i, Ul as n
};