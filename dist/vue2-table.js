function mt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Lt } = Object.prototype, { getPrototypeOf: tt } = Object, U = ((e) => (t) => {
  const n = Lt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), P = (e) => (e = e.toLowerCase(), (t) => U(t) === e), j = (e) => (t) => typeof t === e, { isArray: T } = Array, F = j("undefined");
function $t(e) {
  return e !== null && !F(e) && e.constructor !== null && !F(e.constructor) && w(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const bt = P("ArrayBuffer");
function Mt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && bt(e.buffer), t;
}
const Ht = j("string"), w = j("function"), gt = j("number"), q = (e) => e !== null && typeof e == "object", Ut = (e) => e === !0 || e === !1, B = (e) => {
  if (U(e) !== "object")
    return !1;
  const t = tt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, jt = P("Date"), qt = P("File"), Vt = P("Blob"), It = P("FileList"), zt = (e) => q(e) && w(e.pipe), Jt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || w(e.append) && ((t = U(e)) === "formdata" || // detect form-data instance
  t === "object" && w(e.toString) && e.toString() === "[object FormData]"));
}, Wt = P("URLSearchParams"), Kt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function D(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, a;
  if (typeof e != "object" && (e = [e]), T(e))
    for (s = 0, a = e.length; s < a; s++)
      t.call(null, e[s], s, e);
  else {
    const r = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = r.length;
    let l;
    for (s = 0; s < i; s++)
      l = r[s], t.call(null, e[l], l, e);
  }
}
function yt(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, a;
  for (; s-- > 0; )
    if (a = n[s], t === a.toLowerCase())
      return a;
  return null;
}
const wt = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), _t = (e) => !F(e) && e !== wt;
function X() {
  const { caseless: e } = _t(this) && this || {}, t = {}, n = (s, a) => {
    const r = e && yt(t, a) || a;
    B(t[r]) && B(s) ? t[r] = X(t[r], s) : B(s) ? t[r] = X({}, s) : T(s) ? t[r] = s.slice() : t[r] = s;
  };
  for (let s = 0, a = arguments.length; s < a; s++)
    arguments[s] && D(arguments[s], n);
  return t;
}
const Gt = (e, t, n, { allOwnKeys: s } = {}) => (D(t, (a, r) => {
  n && w(a) ? e[r] = mt(a, n) : e[r] = a;
}, { allOwnKeys: s }), e), Xt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Qt = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Yt = (e, t, n, s) => {
  let a, r, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), r = a.length; r-- > 0; )
      i = a[r], (!s || s(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && tt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Zt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, te = (e) => {
  if (!e)
    return null;
  if (T(e))
    return e;
  let t = e.length;
  if (!gt(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ee = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && tt(Uint8Array)), ne = (e, t) => {
  const s = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = s.next()) && !a.done; ) {
    const r = a.value;
    t.call(e, r[0], r[1]);
  }
}, se = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, re = P("HTMLFormElement"), ae = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, a) {
    return s.toUpperCase() + a;
  }
), at = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ie = P("RegExp"), Ct = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  D(n, (a, r) => {
    t(a, r, e) !== !1 && (s[r] = a);
  }), Object.defineProperties(e, s);
}, oe = (e) => {
  Ct(e, (t, n) => {
    if (w(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = e[n];
    if (w(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, le = (e, t) => {
  const n = {}, s = (a) => {
    a.forEach((r) => {
      n[r] = !0;
    });
  };
  return T(e) ? s(e) : s(String(e).split(t)), n;
}, ce = () => {
}, ue = (e, t) => (e = +e, Number.isFinite(e) ? e : t), J = "abcdefghijklmnopqrstuvwxyz", it = "0123456789", Pt = {
  DIGIT: it,
  ALPHA: J,
  ALPHA_DIGIT: J + J.toUpperCase() + it
}, he = (e = 16, t = Pt.ALPHA_DIGIT) => {
  let n = "";
  const { length: s } = t;
  for (; e--; )
    n += t[Math.random() * s | 0];
  return n;
};
function de(e) {
  return !!(e && w(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const fe = (e) => {
  const t = new Array(10), n = (s, a) => {
    if (q(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[a] = s;
        const r = T(s) ? [] : {};
        return D(s, (i, l) => {
          const u = n(i, a + 1);
          !F(u) && (r[l] = u);
        }), t[a] = void 0, r;
      }
    }
    return s;
  };
  return n(e, 0);
}, pe = P("AsyncFunction"), me = (e) => e && (q(e) || w(e)) && w(e.then) && w(e.catch), o = {
  isArray: T,
  isArrayBuffer: bt,
  isBuffer: $t,
  isFormData: Jt,
  isArrayBufferView: Mt,
  isString: Ht,
  isNumber: gt,
  isBoolean: Ut,
  isObject: q,
  isPlainObject: B,
  isUndefined: F,
  isDate: jt,
  isFile: qt,
  isBlob: Vt,
  isRegExp: ie,
  isFunction: w,
  isStream: zt,
  isURLSearchParams: Wt,
  isTypedArray: ee,
  isFileList: It,
  forEach: D,
  merge: X,
  extend: Gt,
  trim: Kt,
  stripBOM: Xt,
  inherits: Qt,
  toFlatObject: Yt,
  kindOf: U,
  kindOfTest: P,
  endsWith: Zt,
  toArray: te,
  forEachEntry: ne,
  matchAll: se,
  isHTMLForm: re,
  hasOwnProperty: at,
  hasOwnProp: at,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ct,
  freezeMethods: oe,
  toObjectSet: le,
  toCamelCase: ae,
  noop: ce,
  toFiniteNumber: ue,
  findKey: yt,
  global: wt,
  isContextDefined: _t,
  ALPHABET: Pt,
  generateString: he,
  isSpecCompliantForm: de,
  toJSONObject: fe,
  isAsyncFn: pe,
  isThenable: me
};
function m(e, t, n, s, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), a && (this.response = a);
}
o.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: o.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const St = m.prototype, kt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  kt[e] = { value: e };
});
Object.defineProperties(m, kt);
Object.defineProperty(St, "isAxiosError", { value: !0 });
m.from = (e, t, n, s, a, r) => {
  const i = Object.create(St);
  return o.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError"), m.call(i, e.message, t, n, s, a), i.cause = e, i.name = e.name, r && Object.assign(i, r), i;
};
const be = null;
function Q(e) {
  return o.isPlainObject(e) || o.isArray(e);
}
function Et(e) {
  return o.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ot(e, t, n) {
  return e ? e.concat(t).map(function(a, r) {
    return a = Et(a), !n && r ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function ge(e) {
  return o.isArray(e) && !e.some(Q);
}
const ye = o.toFlatObject(o, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function V(e, t, n) {
  if (!o.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = o.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, S) {
    return !o.isUndefined(S[p]);
  });
  const s = n.metaTokens, a = n.visitor || h, r = n.dots, i = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && o.isSpecCompliantForm(t);
  if (!o.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null)
      return "";
    if (o.isDate(d))
      return d.toISOString();
    if (!u && o.isBlob(d))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return o.isArrayBuffer(d) || o.isTypedArray(d) ? u && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function h(d, p, S) {
    let _ = d;
    if (d && !S && typeof d == "object") {
      if (o.endsWith(p, "{}"))
        p = s ? p : p.slice(0, -2), d = JSON.stringify(d);
      else if (o.isArray(d) && ge(d) || (o.isFileList(d) || o.endsWith(p, "[]")) && (_ = o.toArray(d)))
        return p = Et(p), _.forEach(function(N, Bt) {
          !(o.isUndefined(N) || N === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? ot([p], Bt, r) : i === null ? p : p + "[]",
            c(N)
          );
        }), !1;
    }
    return Q(d) ? !0 : (t.append(ot(S, p, r), c(d)), !1);
  }
  const f = [], b = Object.assign(ye, {
    defaultVisitor: h,
    convertValue: c,
    isVisitable: Q
  });
  function g(d, p) {
    if (!o.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(d), o.forEach(d, function(_, O) {
        (!(o.isUndefined(_) || _ === null) && a.call(
          t,
          _,
          o.isString(O) ? O.trim() : O,
          p,
          b
        )) === !0 && g(_, p ? p.concat(O) : [O]);
      }), f.pop();
    }
  }
  if (!o.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function lt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
    return t[s];
  });
}
function et(e, t) {
  this._pairs = [], e && V(e, this, t);
}
const Ot = et.prototype;
Ot.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ot.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, lt);
  } : lt;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function we(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Rt(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || we, a = n && n.serialize;
  let r;
  if (a ? r = a(t, n) : r = o.isURLSearchParams(t) ? t.toString() : new et(t, n).toString(s), r) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return e;
}
class _e {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, s) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    o.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const ct = _e, Tt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ce = typeof URLSearchParams < "u" ? URLSearchParams : et, Pe = typeof FormData < "u" ? FormData : null, Se = typeof Blob < "u" ? Blob : null, ke = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Ee = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), C = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ce,
    FormData: Pe,
    Blob: Se
  },
  isStandardBrowserEnv: ke,
  isStandardBrowserWebWorkerEnv: Ee,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Oe(e, t) {
  return V(e, new C.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, a, r) {
      return C.isNode && o.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Re(e) {
  return o.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Te(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const a = n.length;
  let r;
  for (s = 0; s < a; s++)
    r = n[s], t[r] = e[r];
  return t;
}
function vt(e) {
  function t(n, s, a, r) {
    let i = n[r++];
    const l = Number.isFinite(+i), u = r >= n.length;
    return i = !i && o.isArray(a) ? a.length : i, u ? (o.hasOwnProp(a, i) ? a[i] = [a[i], s] : a[i] = s, !l) : ((!a[i] || !o.isObject(a[i])) && (a[i] = []), t(n, s, a[i], r) && o.isArray(a[i]) && (a[i] = Te(a[i])), !l);
  }
  if (o.isFormData(e) && o.isFunction(e.entries)) {
    const n = {};
    return o.forEachEntry(e, (s, a) => {
      t(Re(s), a, n, 0);
    }), n;
  }
  return null;
}
const ve = {
  "Content-Type": void 0
};
function xe(e, t, n) {
  if (o.isString(e))
    try {
      return (t || JSON.parse)(e), o.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const I = {
  transitional: Tt,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", a = s.indexOf("application/json") > -1, r = o.isObject(t);
    if (r && o.isHTMLForm(t) && (t = new FormData(t)), o.isFormData(t))
      return a && a ? JSON.stringify(vt(t)) : t;
    if (o.isArrayBuffer(t) || o.isBuffer(t) || o.isStream(t) || o.isFile(t) || o.isBlob(t))
      return t;
    if (o.isArrayBufferView(t))
      return t.buffer;
    if (o.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (r) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return Oe(t, this.formSerializer).toString();
      if ((l = o.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return V(
          l ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return r || a ? (n.setContentType("application/json", !1), xe(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || I.transitional, s = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (t && o.isString(t) && (s && !this.responseType || a)) {
      const i = !(n && n.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? m.from(l, m.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: C.classes.FormData,
    Blob: C.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
o.forEach(["delete", "get", "head"], function(t) {
  I.headers[t] = {};
});
o.forEach(["post", "put", "patch"], function(t) {
  I.headers[t] = o.merge(ve);
});
const nt = I, Fe = o.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), De = (e) => {
  const t = {};
  let n, s, a;
  return e && e.split(`
`).forEach(function(i) {
    a = i.indexOf(":"), n = i.substring(0, a).trim().toLowerCase(), s = i.substring(a + 1).trim(), !(!n || t[n] && Fe[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, ut = Symbol("internals");
function x(e) {
  return e && String(e).trim().toLowerCase();
}
function L(e) {
  return e === !1 || e == null ? e : o.isArray(e) ? e.map(L) : String(e);
}
function Ae(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const Ne = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function W(e, t, n, s, a) {
  if (o.isFunction(s))
    return s.call(this, t, n);
  if (a && (t = n), !!o.isString(t)) {
    if (o.isString(s))
      return t.indexOf(s) !== -1;
    if (o.isRegExp(s))
      return s.test(t);
  }
}
function Be(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function Le(e, t) {
  const n = o.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function(a, r, i) {
        return this[s].call(this, t, a, r, i);
      },
      configurable: !0
    });
  });
}
class z {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const a = this;
    function r(l, u, c) {
      const h = x(u);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const f = o.findKey(a, h);
      (!f || a[f] === void 0 || c === !0 || c === void 0 && a[f] !== !1) && (a[f || u] = L(l));
    }
    const i = (l, u) => o.forEach(l, (c, h) => r(c, h, u));
    return o.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : o.isString(t) && (t = t.trim()) && !Ne(t) ? i(De(t), n) : t != null && r(n, t, s), this;
  }
  get(t, n) {
    if (t = x(t), t) {
      const s = o.findKey(this, t);
      if (s) {
        const a = this[s];
        if (!n)
          return a;
        if (n === !0)
          return Ae(a);
        if (o.isFunction(n))
          return n.call(this, a, s);
        if (o.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = x(t), t) {
      const s = o.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || W(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let a = !1;
    function r(i) {
      if (i = x(i), i) {
        const l = o.findKey(s, i);
        l && (!n || W(s, s[l], l, n)) && (delete s[l], a = !0);
      }
    }
    return o.isArray(t) ? t.forEach(r) : r(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, a = !1;
    for (; s--; ) {
      const r = n[s];
      (!t || W(this, this[r], r, t, !0)) && (delete this[r], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, s = {};
    return o.forEach(this, (a, r) => {
      const i = o.findKey(s, r);
      if (i) {
        n[i] = L(a), delete n[r];
        return;
      }
      const l = t ? Be(r) : String(r).trim();
      l !== r && delete n[r], n[l] = L(a), s[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return o.forEach(this, (s, a) => {
      s != null && s !== !1 && (n[a] = t && o.isArray(s) ? s.join(", ") : s);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((a) => s.set(a)), s;
  }
  static accessor(t) {
    const s = (this[ut] = this[ut] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function r(i) {
      const l = x(i);
      s[l] || (Le(a, i), s[l] = !0);
    }
    return o.isArray(t) ? t.forEach(r) : r(t), this;
  }
}
z.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
o.freezeMethods(z.prototype);
o.freezeMethods(z);
const k = z;
function K(e, t) {
  const n = this || nt, s = t || n, a = k.from(s.headers);
  let r = s.data;
  return o.forEach(e, function(l) {
    r = l.call(n, r, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), r;
}
function xt(e) {
  return !!(e && e.__CANCEL__);
}
function A(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
o.inherits(A, m, {
  __CANCEL__: !0
});
function $e(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Me = C.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, s, a, r, i, l) {
        const u = [];
        u.push(n + "=" + encodeURIComponent(s)), o.isNumber(a) && u.push("expires=" + new Date(a).toGMTString()), o.isString(r) && u.push("path=" + r), o.isString(i) && u.push("domain=" + i), l === !0 && u.push("secure"), document.cookie = u.join("; ");
      },
      read: function(n) {
        const s = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return s ? decodeURIComponent(s[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function He(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ue(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ft(e, t) {
  return e && !He(t) ? Ue(e, t) : t;
}
const je = C.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let s;
    function a(r) {
      let i = r;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return s = a(window.location.href), function(i) {
      const l = o.isString(i) ? a(i) : i;
      return l.protocol === s.protocol && l.host === s.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function qe(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ve(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let a = 0, r = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const c = Date.now(), h = s[r];
    i || (i = c), n[a] = u, s[a] = c;
    let f = r, b = 0;
    for (; f !== a; )
      b += n[f++], f = f % e;
    if (a = (a + 1) % e, a === r && (r = (r + 1) % e), c - i < t)
      return;
    const g = h && c - h;
    return g ? Math.round(b * 1e3 / g) : void 0;
  };
}
function ht(e, t) {
  let n = 0;
  const s = Ve(50, 250);
  return (a) => {
    const r = a.loaded, i = a.lengthComputable ? a.total : void 0, l = r - n, u = s(l), c = r <= i;
    n = r;
    const h = {
      loaded: r,
      total: i,
      progress: i ? r / i : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && i && c ? (i - r) / u : void 0,
      event: a
    };
    h[t ? "download" : "upload"] = !0, e(h);
  };
}
const Ie = typeof XMLHttpRequest < "u", ze = Ie && function(e) {
  return new Promise(function(n, s) {
    let a = e.data;
    const r = k.from(e.headers).normalize(), i = e.responseType;
    let l;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    o.isFormData(a) && (C.isStandardBrowserEnv || C.isStandardBrowserWebWorkerEnv ? r.setContentType(!1) : r.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      r.set("Authorization", "Basic " + btoa(g + ":" + d));
    }
    const h = Ft(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Rt(h, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function f() {
      if (!c)
        return;
      const g = k.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), p = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: g,
        config: e,
        request: c
      };
      $e(function(_) {
        n(_), u();
      }, function(_) {
        s(_), u();
      }, p), c = null;
    }
    if ("onloadend" in c ? c.onloadend = f : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, c.onabort = function() {
      c && (s(new m("Request aborted", m.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      s(new m("Network Error", m.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const p = e.transitional || Tt;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), s(new m(
        d,
        p.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        c
      )), c = null;
    }, C.isStandardBrowserEnv) {
      const g = (e.withCredentials || je(h)) && e.xsrfCookieName && Me.read(e.xsrfCookieName);
      g && r.set(e.xsrfHeaderName, g);
    }
    a === void 0 && r.setContentType(null), "setRequestHeader" in c && o.forEach(r.toJSON(), function(d, p) {
      c.setRequestHeader(p, d);
    }), o.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", ht(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", ht(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (g) => {
      c && (s(!g || g.type ? new A(null, e, c) : g), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const b = qe(h);
    if (b && C.protocols.indexOf(b) === -1) {
      s(new m("Unsupported protocol " + b + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(a || null);
  });
}, $ = {
  http: be,
  xhr: ze
};
o.forEach($, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Je = {
  getAdapter: (e) => {
    e = o.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, s;
    for (let a = 0; a < t && (n = e[a], !(s = o.isString(n) ? $[n.toLowerCase()] : n)); a++)
      ;
    if (!s)
      throw s === !1 ? new m(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        o.hasOwnProp($, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!o.isFunction(s))
      throw new TypeError("adapter is not a function");
    return s;
  },
  adapters: $
};
function G(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new A(null, e);
}
function dt(e) {
  return G(e), e.headers = k.from(e.headers), e.data = K.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Je.getAdapter(e.adapter || nt.adapter)(e).then(function(s) {
    return G(e), s.data = K.call(
      e,
      e.transformResponse,
      s
    ), s.headers = k.from(s.headers), s;
  }, function(s) {
    return xt(s) || (G(e), s && s.response && (s.response.data = K.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = k.from(s.response.headers))), Promise.reject(s);
  });
}
const ft = (e) => e instanceof k ? e.toJSON() : e;
function R(e, t) {
  t = t || {};
  const n = {};
  function s(c, h, f) {
    return o.isPlainObject(c) && o.isPlainObject(h) ? o.merge.call({ caseless: f }, c, h) : o.isPlainObject(h) ? o.merge({}, h) : o.isArray(h) ? h.slice() : h;
  }
  function a(c, h, f) {
    if (o.isUndefined(h)) {
      if (!o.isUndefined(c))
        return s(void 0, c, f);
    } else
      return s(c, h, f);
  }
  function r(c, h) {
    if (!o.isUndefined(h))
      return s(void 0, h);
  }
  function i(c, h) {
    if (o.isUndefined(h)) {
      if (!o.isUndefined(c))
        return s(void 0, c);
    } else
      return s(void 0, h);
  }
  function l(c, h, f) {
    if (f in t)
      return s(c, h);
    if (f in e)
      return s(void 0, c);
  }
  const u = {
    url: r,
    method: r,
    data: r,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (c, h) => a(ft(c), ft(h), !0)
  };
  return o.forEach(Object.keys(Object.assign({}, e, t)), function(h) {
    const f = u[h] || a, b = f(e[h], t[h], h);
    o.isUndefined(b) && f !== l || (n[h] = b);
  }), n;
}
const Dt = "1.4.0", st = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  st[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const pt = {};
st.transitional = function(t, n, s) {
  function a(r, i) {
    return "[Axios v" + Dt + "] Transitional option '" + r + "'" + i + (s ? ". " + s : "");
  }
  return (r, i, l) => {
    if (t === !1)
      throw new m(
        a(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !pt[i] && (pt[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(r, i, l) : !0;
  };
};
function We(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let a = s.length;
  for (; a-- > 0; ) {
    const r = s[a], i = t[r];
    if (i) {
      const l = e[r], u = l === void 0 || i(l, r, e);
      if (u !== !0)
        throw new m("option " + r + " must be " + u, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + r, m.ERR_BAD_OPTION);
  }
}
const Y = {
  assertOptions: We,
  validators: st
}, E = Y.validators;
class H {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ct(),
      response: new ct()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = R(this.defaults, n);
    const { transitional: s, paramsSerializer: a, headers: r } = n;
    s !== void 0 && Y.assertOptions(s, {
      silentJSONParsing: E.transitional(E.boolean),
      forcedJSONParsing: E.transitional(E.boolean),
      clarifyTimeoutError: E.transitional(E.boolean)
    }, !1), a != null && (o.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : Y.assertOptions(a, {
      encode: E.function,
      serialize: E.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = r && o.merge(
      r.common,
      r[n.method]
    ), i && o.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete r[d];
      }
    ), n.headers = k.concat(i, r);
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (u = u && p.synchronous, l.unshift(p.fulfilled, p.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(p) {
      c.push(p.fulfilled, p.rejected);
    });
    let h, f = 0, b;
    if (!u) {
      const d = [dt.bind(this), void 0];
      for (d.unshift.apply(d, l), d.push.apply(d, c), b = d.length, h = Promise.resolve(n); f < b; )
        h = h.then(d[f++], d[f++]);
      return h;
    }
    b = l.length;
    let g = n;
    for (f = 0; f < b; ) {
      const d = l[f++], p = l[f++];
      try {
        g = d(g);
      } catch (S) {
        p.call(this, S);
        break;
      }
    }
    try {
      h = dt.call(this, g);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, b = c.length; f < b; )
      h = h.then(c[f++], c[f++]);
    return h;
  }
  getUri(t) {
    t = R(this.defaults, t);
    const n = Ft(t.baseURL, t.url);
    return Rt(n, t.params, t.paramsSerializer);
  }
}
o.forEach(["delete", "get", "head", "options"], function(t) {
  H.prototype[t] = function(n, s) {
    return this.request(R(s || {}, {
      method: t,
      url: n,
      data: (s || {}).data
    }));
  };
});
o.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(r, i, l) {
      return this.request(R(l || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: i
      }));
    };
  }
  H.prototype[t] = n(), H.prototype[t + "Form"] = n(!0);
});
const M = H;
class rt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(r) {
      n = r;
    });
    const s = this;
    this.promise.then((a) => {
      if (!s._listeners)
        return;
      let r = s._listeners.length;
      for (; r-- > 0; )
        s._listeners[r](a);
      s._listeners = null;
    }), this.promise.then = (a) => {
      let r;
      const i = new Promise((l) => {
        s.subscribe(l), r = l;
      }).then(a);
      return i.cancel = function() {
        s.unsubscribe(r);
      }, i;
    }, t(function(r, i, l) {
      s.reason || (s.reason = new A(r, i, l), n(s.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new rt(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
const Ke = rt;
function Ge(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Xe(e) {
  return o.isObject(e) && e.isAxiosError === !0;
}
const Z = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Z).forEach(([e, t]) => {
  Z[t] = e;
});
const Qe = Z;
function At(e) {
  const t = new M(e), n = mt(M.prototype.request, t);
  return o.extend(n, M.prototype, t, { allOwnKeys: !0 }), o.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return At(R(e, a));
  }, n;
}
const y = At(nt);
y.Axios = M;
y.CanceledError = A;
y.CancelToken = Ke;
y.isCancel = xt;
y.VERSION = Dt;
y.toFormData = V;
y.AxiosError = m;
y.Cancel = y.CanceledError;
y.all = function(t) {
  return Promise.all(t);
};
y.spread = Ge;
y.isAxiosError = Xe;
y.mergeConfig = R;
y.AxiosHeaders = k;
y.formToJSON = (e) => vt(o.isHTMLForm(e) ? new FormData(e) : e);
y.HttpStatusCode = Qe;
y.default = y;
const Ye = y;
function v(e, t, n, s, a, r, i, l) {
  var u = typeof e == "function" ? e.options : e;
  t && (u.render = t, u.staticRenderFns = n, u._compiled = !0), s && (u.functional = !0), r && (u._scopeId = "data-v-" + r);
  var c;
  if (i ? (c = function(b) {
    b = b || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !b && typeof __VUE_SSR_CONTEXT__ < "u" && (b = __VUE_SSR_CONTEXT__), a && a.call(this, b), b && b._registeredComponents && b._registeredComponents.add(i);
  }, u._ssrRegister = c) : a && (c = l ? function() {
    a.call(
      this,
      (u.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), c)
    if (u.functional) {
      u._injectStyles = c;
      var h = u.render;
      u.render = function(g, d) {
        return c.call(d), h(g, d);
      };
    } else {
      var f = u.beforeCreate;
      u.beforeCreate = f ? [].concat(f, c) : [c];
    }
  return {
    exports: e,
    options: u
  };
}
const Ze = {
  props: {
    fields: {
      type: Array,
      required: !0
    },
    loadOnStart: {
      type: Boolean,
      default: !0
    },
    apiUrl: {
      type: String,
      default: ""
    },
    httpMethod: {
      type: String,
      default: "get",
      validator: (e) => ["get", "post"].indexOf(e) > -1
    },
    reactiveApiUrl: {
      type: Boolean,
      default: !0
    },
    apiMode: {
      type: Boolean,
      default: !0
    },
    data: {
      type: [Array, Object],
      default: null
    },
    dataTotal: {
      type: Number,
      default: 0
    },
    dataManager: {
      type: Function,
      default: null
    },
    dataPath: {
      type: String,
      default: "data"
    },
    paginationPath: {
      type: [String],
      default: "links.pagination"
    },
    queryParams: {
      type: [Object, Function],
      default() {
        return {
          sort: "sort",
          page: "page",
          perPage: "per_page"
        };
      }
    },
    appendParams: {
      type: Object,
      default() {
        return {};
      }
    },
    httpOptions: {
      type: Object,
      default() {
        return {};
      }
    },
    httpFetch: {
      type: Function,
      default: null
    },
    perPage: {
      type: Number,
      default: 10
    },
    initialPage: {
      type: Number,
      default: 1
    },
    sortOrder: {
      type: Array,
      default() {
        return [];
      }
    },
    multiSort: {
      type: Boolean,
      default() {
        return !1;
      }
    },
    tableHeight: {
      type: String,
      default: null
    },
    /*
     * physical key that will trigger multi-sort option
     * possible values: 'alt', 'ctrl', 'meta', 'shift'
     * 'ctrl' might not work as expected on Mac
     */
    multiSortKey: {
      type: String,
      default: "alt"
    },
    /* deprecated */
    rowClassCallback: {
      type: [String, Function],
      default: ""
    },
    rowClass: {
      type: [String, Function],
      default: ""
    },
    detailRowComponent: {
      type: String,
      default: ""
    },
    detailRowTransition: {
      type: String,
      default: ""
    },
    trackBy: {
      type: String,
      default: "id"
    },
    css: {
      type: Object,
      default() {
        return {
          tableClass: "ui blue selectable celled stackable attached table",
          loadingClass: "loading",
          ascendingIcon: "blue chevron up icon",
          descendingIcon: "blue chevron down icon",
          ascendingClass: "sorted-asc",
          descendingClass: "sorted-desc",
          sortableIcon: "",
          detailRowClass: "vue2-table-detail-row",
          handleIcon: "grey sidebar icon",
          tableBodyClass: "vue2-table-semantic-no-top vue2-table-fixed-layout",
          tableHeaderClass: "vue2-table-fixed-layout"
        };
      }
    },
    minRows: {
      type: Number,
      default: 0
    },
    silent: {
      type: Boolean,
      default: !1
    },
    noDataTemplate: {
      type: String,
      default() {
        return "No Data Available";
      }
    },
    showSortIcons: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      eventPrefix: "vue2-table:",
      tableFields: [],
      tableData: null,
      tablePagination: null,
      currentPage: this.initialPage,
      selectedTo: [],
      visibleDetailRows: [],
      lastScrollPosition: 0,
      scrollBarWidth: "17px",
      //chrome default
      scrollVisible: !1
    };
  },
  mounted() {
    if (this.normalizeFields(), this.normalizeSortOrder(), this.isFixedHeader && (this.scrollBarWidth = this.getScrollBarWidth() + "px"), this.$nextTick(function() {
      this.fireEvent("initialized", this.tableFields);
    }), this.loadOnStart && this.loadData(), this.isFixedHeader) {
      let e = this.$el.getElementsByClassName("vue2-table-body-wrapper")[0];
      e != null && e.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    let e = this.$el.getElementsByClassName("vue2-table-body-wrapper")[0];
    e != null && e.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    version: () => VERSION,
    useDetailRow() {
      return this.tableData && this.tableData[0] && this.detailRowComponent !== "" && typeof this.tableData[0][this.trackBy] > "u" ? (this.warn("You need to define unique row identifier in order for detail-row feature to work. Use `track-by` prop to define one!"), !1) : this.detailRowComponent !== "";
    },
    countVisibleFields() {
      return this.tableFields.filter(function(e) {
        return e.visible;
      }).length;
    },
    countTableData() {
      return this.tableData === null ? 0 : this.tableData.length;
    },
    displayEmptyDataRow() {
      return this.countTableData === 0 && this.noDataTemplate.length > 0;
    },
    lessThanMinRows() {
      return this.tableData === null || this.tableData.length === 0 ? !0 : this.tableData.length < this.minRows;
    },
    blankRows() {
      return this.tableData === null || this.tableData.length === 0 ? this.minRows : this.tableData.length >= this.minRows ? 0 : this.minRows - this.tableData.length;
    },
    isApiMode() {
      return this.apiMode;
    },
    isDataMode() {
      return !this.apiMode;
    },
    isFixedHeader() {
      return this.tableHeight != null;
    }
  },
  methods: {
    getScrollBarWidth() {
      const e = document.createElement("div"), t = document.createElement("div");
      e.style.visibility = "hidden", e.style.width = "100px", t.style.width = "100%", e.appendChild(t), document.body.appendChild(e);
      const n = e.offsetWidth;
      e.style.overflow = "scroll";
      const s = t.offsetWidth;
      return document.body.removeChild(e), n - s;
    },
    handleScroll(e) {
      const t = e.currentTarget.scrollLeft;
      if (t != this.lastScrollPosition) {
        let n = this.$el.getElementsByClassName("vue2-table-head-wrapper")[0];
        n != null && (n.scrollLeft = t), this.lastScrollPosition = t;
      }
    },
    normalizeFields() {
      if (typeof this.fields > "u") {
        this.warn('You need to provide "fields" prop.');
        return;
      }
      this.tableFields = [];
      let e = this, t;
      this.fields.forEach(function(n, s) {
        typeof n == "string" ? t = {
          name: n,
          title: e.setTitle(n),
          titleClass: "",
          dataClass: "",
          callback: null,
          visible: !0
        } : t = {
          name: n.name,
          width: n.width,
          title: n.title === void 0 ? e.setTitle(n.name) : n.title,
          sortField: n.sortField,
          titleClass: n.titleClass === void 0 ? "" : n.titleClass,
          dataClass: n.dataClass === void 0 ? "" : n.dataClass,
          callback: n.callback === void 0 ? "" : n.callback,
          visible: n.visible === void 0 ? !0 : n.visible
        }, e.tableFields.push(t);
      });
    },
    setData(e) {
      if (!(e === null || typeof e > "u")) {
        if (this.fireEvent("loading"), Array.isArray(e)) {
          this.tableData = e, this.fireEvent("loaded");
          return;
        }
        this.tableData = this.getObjectValue(e, this.dataPath, null), this.tablePagination = this.getObjectValue(e, this.paginationPath, null), this.$nextTick(function() {
          this.fixHeader(), this.fireEvent("pagination-data", this.tablePagination), this.fireEvent("loaded");
        });
      }
    },
    setTitle(e) {
      return this.isSpecialField(e) ? "" : this.titleCase(e);
    },
    getTitle(e) {
      return typeof e.title == "function" ? e.title() : typeof e.title > "u" ? e.name.replace(".", " ") : e.title;
    },
    renderTitle(e) {
      let t = this.getTitle(e);
      if (t.length > 0 && this.isInCurrentSortGroup(e) || this.hasSortableIcon(e)) {
        let n = `opacity:${this.sortIconOpacity(e)};position:relative;float:right`, s = this.showSortIcons ? this.renderIconTag(["sort-icon", this.sortIcon(e)], `style="${n}"`) : "";
        return t + " " + s;
      }
      return t;
    },
    renderSequence(e) {
      return this.tablePagination ? this.tablePagination.from + e : e;
    },
    renderNormalField(e, t) {
      return this.hasCallback(e) ? this.callCallback(e, t) : this.getObjectValue(t, e.name, "");
    },
    isSpecialField(e) {
      return e.slice(0, 2) === "__";
    },
    titleCase(e) {
      return e.replace(/\w+/g, function(t) {
        return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
      });
    },
    camelCase(e, t = "_") {
      return e.split(t).map((n) => this.titleCase(n)).join("");
    },
    notIn(e, t) {
      return t.indexOf(e) === -1;
    },
    loadData(e = this.loadSuccess, t = this.loadFailed) {
      if (this.isDataMode) {
        this.callDataManager();
        return;
      }
      return this.fireEvent("loading"), this.httpOptions.params = this.getAppendParams(this.getAllQueryParams()), this.fetch(this.apiUrl, this.httpOptions).then(
        e,
        t
      ).catch(() => t());
    },
    fetch(e, t) {
      return this.httpFetch ? this.httpFetch(e, t) : Ye[this.httpMethod](e, t);
    },
    loadSuccess(e) {
      this.fireEvent("load-success", e);
      let t = this.transform(e.data);
      this.tableData = this.getObjectValue(t, this.dataPath, null), this.tablePagination = this.getObjectValue(t, this.paginationPath, null), this.tablePagination === null && this.warn(
        'vue2-table: pagination-path "' + this.paginationPath + `" not found. It looks like the data returned from the sever does not have pagination information or you may have set it incorrectly.
You can explicitly suppress this warning by setting pagination-path="".`
      ), this.$nextTick(function() {
        this.fixHeader(), this.fireEvent("pagination-data", this.tablePagination), this.fireEvent("loaded");
      });
    },
    fixHeader() {
      if (!this.isFixedHeader)
        return;
      let e = this.$el.getElementsByClassName("vue2-table-body-wrapper")[0];
      e != null && (this.scrollVisible = e.scrollHeight > e.clientHeight);
    },
    loadFailed(e) {
      console.error("load-error", e), this.fireEvent("load-error", e), this.fireEvent("loaded");
    },
    transform(e) {
      let t = "transform";
      return this.parentFunctionExists(t) ? this.$parent[t].call(this.$parent, e) : e;
    },
    parentFunctionExists(e) {
      return e !== "" && typeof this.$parent[e] == "function";
    },
    callParentFunction(e, t, n = null) {
      return this.parentFunctionExists(e) ? this.$parent[e].call(this.$parent, t) : n;
    },
    fireEvent(e, t) {
      this.$emit(this.eventPrefix + e, t);
    },
    warn(e) {
      this.silent || console.warn(e);
    },
    getAllQueryParams() {
      let e = {};
      return typeof this.queryParams == "function" ? (e = this.queryParams(this.sortOrder, this.currentPage, this.perPage), typeof e != "object" ? {} : e) : (e[this.queryParams.sort] = this.getSortParam(), e[this.queryParams.page] = this.currentPage, e[this.queryParams.perPage] = this.perPage, e);
    },
    getSortParam() {
      return !this.sortOrder || this.sortOrder.field == "" ? "" : typeof this.$parent.getSortParam == "function" ? this.$parent.getSortParam.call(this.$parent, this.sortOrder) : this.getDefaultSortParam();
    },
    getDefaultSortParam() {
      let e = "";
      for (let t = 0; t < this.sortOrder.length; t++) {
        let n = typeof this.sortOrder[t].sortField > "u" ? this.sortOrder[t].field : this.sortOrder[t].sortField;
        e += n + "|" + this.sortOrder[t].direction + (t + 1 < this.sortOrder.length ? "," : "");
      }
      return e;
    },
    getAppendParams(e) {
      for (let t in this.appendParams)
        e[t] = this.appendParams[t];
      return e;
    },
    extractName(e) {
      return e.split(":")[0].trim();
    },
    extractArgs(e) {
      return e.split(":")[1];
    },
    isSortable(e) {
      return !(typeof e.sortField > "u");
    },
    isInCurrentSortGroup(e) {
      return this.currentSortOrderPosition(e) !== !1;
    },
    hasSortableIcon(e) {
      return this.isSortable(e) && this.css.sortableIcon != "";
    },
    currentSortOrderPosition(e) {
      if (!this.isSortable(e))
        return !1;
      for (let t = 0; t < this.sortOrder.length; t++)
        if (this.fieldIsInSortOrderPosition(e, t))
          return t;
      return !1;
    },
    fieldIsInSortOrderPosition(e, t) {
      return this.sortOrder[t].field === e.name && this.sortOrder[t].sortField === e.sortField;
    },
    orderBy(e, t) {
      if (!this.isSortable(e))
        return;
      let n = this.multiSortKey.toLowerCase() + "Key";
      this.multiSort && t[n] ? this.multiColumnSort(e) : this.singleColumnSort(e), this.currentPage = 1, (this.apiMode || this.dataManager) && this.loadData();
    },
    multiColumnSort(e) {
      let t = this.currentSortOrderPosition(e);
      t === !1 ? this.sortOrder.push({
        field: e.name,
        sortField: e.sortField,
        direction: "asc"
      }) : this.sortOrder[t].direction === "asc" ? this.sortOrder[t].direction = "desc" : this.sortOrder.splice(t, 1);
    },
    singleColumnSort(e) {
      this.sortOrder.length === 0 && this.clearSortOrder(), this.sortOrder.splice(1), this.fieldIsInSortOrderPosition(e, 0) ? this.sortOrder[0].direction = this.sortOrder[0].direction === "asc" ? "desc" : "asc" : this.sortOrder[0].direction = "asc", this.sortOrder[0].field = e.name, this.sortOrder[0].sortField = e.sortField;
    },
    clearSortOrder() {
      this.sortOrder.push({
        field: "",
        sortField: "",
        direction: "asc"
      });
    },
    sortClass(e) {
      let t = "", n = this.currentSortOrderPosition(e);
      return n !== !1 && (t = this.sortOrder[n].direction == "asc" ? this.css.ascendingClass : this.css.descendingClass), t;
    },
    sortIcon(e) {
      let t = this.css.sortableIcon, n = this.currentSortOrderPosition(e);
      return n !== !1 && (t = this.sortOrder[n].direction == "asc" ? this.css.ascendingIcon : this.css.descendingIcon), t;
    },
    sortIconOpacity(e) {
      let t = 1, n = 0.3, s = 0.3, a = this.sortOrder.length, r = this.currentSortOrderPosition(e);
      return t - a * s < n && (s = (t - n) / (a - 1)), t - r * s;
    },
    hasCallback(e) {
      return !!e.callback;
    },
    callCallback(e, t) {
      if (!this.hasCallback(e))
        return;
      if (typeof e.callback == "function")
        return e.callback(this.getObjectValue(t, e.name));
      let n = e.callback.split("|"), s = n.shift();
      if (typeof this.$parent[s] == "function") {
        let a = this.getObjectValue(t, e.name);
        return n.length > 0 ? this.$parent[s].apply(this.$parent, [a].concat(n)) : this.$parent[s].call(this.$parent, a);
      }
      return null;
    },
    getObjectValue(e, t, n) {
      n = typeof n > "u" ? null : n;
      let s = e;
      return t.trim() != "" && t.split(".").forEach((r) => {
        if (s !== null && typeof s[r] < "u" && s[r] !== null)
          s = s[r];
        else {
          s = n;
          return;
        }
      }), s;
    },
    toggleCheckbox(e, t, n) {
      let s = n.target.checked, a = this.trackBy;
      if (e[a] === void 0) {
        this.warn('__checkbox field: The "' + this.trackBy + '" field does not exist! Make sure the field you specify in "track-by" prop does exist.');
        return;
      }
      let r = e[a];
      s ? this.selectId(r) : this.unselectId(r), this.$emit("vue2-table:checkbox-toggled", s, e);
    },
    selectId(e) {
      this.isSelectedRow(e) || this.selectedTo.push(e);
    },
    unselectId(e) {
      this.selectedTo = this.selectedTo.filter(function(t) {
        return t !== e;
      });
    },
    isSelectedRow(e) {
      return this.selectedTo.indexOf(e) >= 0;
    },
    rowSelected(e, t) {
      let n = this.trackBy, s = e[n];
      return this.isSelectedRow(s);
    },
    checkCheckboxesState(e) {
      if (!this.tableData)
        return;
      let t = this.trackBy, n = "th.vue2-table-th-checkbox-" + t + " input[type=checkbox]", s = document.querySelectorAll(n);
      s.forEach === void 0 && (s.forEach = (r) => {
        [].forEach.call(s, r);
      });
      let a = this.tableData.filter((r) => this.selectedTo.indexOf(r[t]) >= 0);
      return a.length <= 0 ? (s.forEach((r) => {
        r.indeterminate = !1;
      }), !1) : a.length < this.perPage ? (s.forEach((r) => {
        r.indeterminate = !0;
      }), !0) : (s.forEach((r) => {
        r.indeterminate = !1;
      }), !0);
    },
    toggleAllCheckboxes(e, t) {
      let n = t.target.checked, s = this.trackBy;
      this.tableData.forEach((a) => {
        n ? this.selectId(a[s]) : this.unselectId(a[s]);
      }), this.$emit("vue2-table:checkbox-toggled-all", n);
    },
    gotoPreviousPage() {
      this.currentPage > 1 && (this.currentPage--, this.loadData());
    },
    gotoNextPage() {
      this.currentPage < this.tablePagination.last_page && (this.currentPage++, this.loadData());
    },
    gotoPage(e) {
      e != this.currentPage && e > 0 && e <= this.tablePagination.last_page && (this.currentPage = e, this.loadData());
    },
    isVisibleDetailRow(e) {
      return this.visibleDetailRows.indexOf(e) >= 0;
    },
    showDetailRow(e) {
      this.isVisibleDetailRow(e) || this.visibleDetailRows.push(e);
    },
    hideDetailRow(e) {
      this.isVisibleDetailRow(e) && this.visibleDetailRows.splice(
        this.visibleDetailRows.indexOf(e),
        1
      );
    },
    toggleDetailRow(e) {
      this.isVisibleDetailRow(e) ? this.hideDetailRow(e) : this.showDetailRow(e);
    },
    showField(e) {
      e < 0 || e > this.tableFields.length || (this.tableFields[e].visible = !0);
    },
    hideField(e) {
      e < 0 || e > this.tableFields.length || (this.tableFields[e].visible = !1);
    },
    toggleField(e) {
      e < 0 || e > this.tableFields.length || (this.tableFields[e].visible = !this.tableFields[e].visible);
    },
    renderIconTag(e, t = "") {
      return typeof this.css.renderIcon > "u" ? `<i class="${e.join(" ")}" ${t}></i>` : this.css.renderIcon(e, t);
    },
    makePagination(e = null, t = null, n = null) {
      return e = e === null ? this.dataTotal : e, t = t === null ? this.perPage : t, n = n === null ? this.currentPage : n, {
        total: e,
        per_page: t,
        current_page: n,
        last_page: Math.ceil(e / t) || 0,
        next_page_url: "",
        prev_page_url: "",
        from: (n - 1) * t + 1,
        to: Math.min(n * t, e)
      };
    },
    normalizeSortOrder() {
      this.sortOrder.forEach((e) => {
        e.sortField = e.sortField || e.field;
      });
    },
    callDataManager() {
      if (!(this.dataManager === null && this.data === null))
        return Array.isArray(this.data) ? this.setData(this.data) : (this.normalizeSortOrder(), this.setData(
          this.dataManager ? this.dataManager(this.sortOrder, this.makePagination()) : this.data
        ));
    },
    onRowClass(e, t) {
      if (this.rowClassCallback !== "") {
        this.warn('"row-class-callback" prop is deprecated, please use "row-class" prop instead.');
        return;
      }
      return typeof this.rowClass == "function" ? this.rowClass(e, t) : this.rowClass;
    },
    onRowChanged(e) {
      return this.fireEvent("row-changed", e), !0;
    },
    onRowClicked(e, t) {
      return this.$emit(this.eventPrefix + "row-clicked", e, t), !0;
    },
    onRowDoubleClicked(e, t) {
      this.$emit(this.eventPrefix + "row-dblclicked", e, t);
    },
    onDetailRowClick(e, t) {
      this.$emit(this.eventPrefix + "detail-row-clicked", e, t);
    },
    onCellClicked(e, t, n) {
      this.$emit(this.eventPrefix + "cell-clicked", e, t, n);
    },
    onCellDoubleClicked(e, t, n) {
      this.$emit(this.eventPrefix + "cell-dblclicked", e, t, n);
    },
    onCellRightClicked(e, t, n) {
      this.$emit(this.eventPrefix + "cell-rightclicked", e, t, n);
    },
    /*
     * API for externals
     */
    changePage(e) {
      e === "prev" ? this.gotoPreviousPage() : e === "next" ? this.gotoNextPage() : this.gotoPage(e);
    },
    reload() {
      return this.loadData();
    },
    refresh() {
      return this.currentPage = 1, this.loadData();
    },
    resetData() {
      this.tableData = null, this.tablePagination = null, this.fireEvent("data-reset");
    }
  },
  watch: {
    multiSort(e, t) {
      e === !1 && this.sortOrder.length > 1 && (this.sortOrder.splice(1), this.loadData());
    },
    apiUrl(e, t) {
      this.reactiveApiUrl && e !== t && this.refresh();
    },
    data(e, t) {
      this.setData(e);
    },
    tableHeight(e, t) {
      this.fixHeader();
    }
  }
};
var tn = function() {
  var t = this, n = t._self._c;
  return t.isFixedHeader ? n("div", [n("div", { staticClass: "vue2-table-head-wrapper" }, [n("table", { class: ["vue2-table", t.css.tableClass, t.css.tableHeaderClass] }, [n("thead", [n("tr", [t._l(t.tableFields, function(s, a) {
    return [s.visible ? [t.isSpecialField(s.name) ? [t.extractName(s.name) == "__checkbox" ? n("th", { key: a, class: ["vue2-table-th-checkbox-" + t.trackBy, s.titleClass], style: { width: s.width } }, [n("input", { attrs: { type: "checkbox" }, domProps: { checked: t.checkCheckboxesState(s.name) }, on: { change: function(r) {
      return t.toggleAllCheckboxes(s.name, r);
    } } })]) : t._e(), t.extractName(s.name) == "__component" ? n("th", { key: a, class: ["vue2-table-th-component-" + t.trackBy, s.titleClass, t.sortClass(s), { sortable: t.isSortable(s) }], style: { width: s.width }, domProps: { innerHTML: t._s(t.renderTitle(s)) }, on: { click: function(r) {
      return t.orderBy(s, r);
    } } }) : t._e(), t.extractName(s.name) == "__slot" ? n("th", { key: a, class: ["vue2-table-th-slot-" + t.extractArgs(s.name), s.titleClass, t.sortClass(s), { sortable: t.isSortable(s) }], style: { width: s.width }, domProps: { innerHTML: t._s(t.renderTitle(s)) }, on: { click: function(r) {
      return t.orderBy(s, r);
    } } }) : t._e(), t.extractName(s.name) == "__sequence" ? n("th", { key: a, class: ["vue2-table-th-sequence", s.titleClass || ""], style: { width: s.width }, domProps: { innerHTML: t._s(t.renderTitle(s)) } }) : t._e(), t.notIn(t.extractName(s.name), ["__sequence", "__checkbox", "__component", "__slot"]) ? n("th", { key: a, class: ["vue2-table-th-" + s.name, s.titleClass || ""], style: { width: s.width }, domProps: { innerHTML: t._s(t.renderTitle(s)) } }) : t._e()] : [n("th", { key: a, class: ["vue2-table-th-" + s.name, s.titleClass, t.sortClass(s), { sortable: t.isSortable(s) }], style: { width: s.width }, attrs: { id: "_" + s.name }, domProps: { innerHTML: t._s(t.renderTitle(s)) }, on: { click: function(r) {
      return t.orderBy(s, r);
    } } })]] : t._e()];
  }), t.scrollVisible ? n("th", { staticClass: "vue2-table-gutter-col", style: { width: t.scrollBarWidth } }) : t._e()], 2)])])]), n("div", { staticClass: "vue2-table-body-wrapper", style: { height: t.tableHeight } }, [n("table", { class: ["vue2-table", t.css.tableClass, t.css.tableBodyClass] }, [n("colgroup", [t._l(t.tableFields, function(s, a) {
    return [s.visible ? [n("col", { key: a, class: ["vue2-table-th-" + s.name, s.titleClass], style: { width: s.width }, attrs: { id: "_col_" + s.name } })] : t._e()];
  })], 2), n("tbody", { staticClass: "vue2-table-body" }, [t._l(t.tableData, function(s, a) {
    return [n("tr", { key: a, class: t.onRowClass(s, a), attrs: { "item-index": a, render: t.onRowChanged(s) }, on: { click: function(r) {
      return t.onRowClicked(s, r);
    }, dblclick: function(r) {
      return t.onRowDoubleClicked(s, r);
    } } }, [t._l(t.tableFields, function(r, i) {
      return [r.visible ? [t.isSpecialField(r.name) ? [t.extractName(r.name) == "__sequence" ? n("td", { key: i, class: ["vue2-table-sequence", r.dataClass], domProps: { innerHTML: t._s(t.renderSequence(a)) } }) : t._e(), t.extractName(r.name) == "__handle" ? n("td", { key: i, class: ["vue2-table-handle", r.dataClass], domProps: { innerHTML: t._s(t.renderIconTag(["handle-icon", t.css.handleIcon])) } }) : t._e(), t.extractName(r.name) == "__checkbox" ? n("td", { key: i, class: ["vue2-table-checkboxes", r.dataClass] }, [n("input", { attrs: { type: "checkbox" }, domProps: { checked: t.rowSelected(s, r.name) }, on: { change: function(l) {
        return t.toggleCheckbox(s, r.name, l);
      } } })]) : t._e(), t.extractName(r.name) === "__component" ? n("td", { key: i, class: ["vue2-table-component", r.dataClass] }, [n(t.extractArgs(r.name), { tag: "component", attrs: { "row-data": s, "row-index": a, "row-field": r.sortField } })], 1) : t._e(), t.extractName(r.name) === "__slot" ? n("td", { key: i, class: ["vue2-table-slot", r.dataClass] }, [t._t(t.extractArgs(r.name), null, { rowData: s, rowIndex: a, rowField: r.sortField })], 2) : t._e()] : [n("td", { key: i, class: r.dataClass, domProps: { innerHTML: t._s(t.renderNormalField(r, s)) }, on: { click: function(l) {
        return t.onCellClicked(s, r, l);
      }, dblclick: function(l) {
        return t.onCellDoubleClicked(s, r, l);
      }, contextmenu: function(l) {
        return t.onCellRightClicked(s, r, l);
      } } })]] : t._e()];
    })], 2), t.useDetailRow ? [n("transition", { key: a, attrs: { name: t.detailRowTransition } }, [t.isVisibleDetailRow(s[t.trackBy]) ? n("tr", { class: [t.css.detailRowClass], on: { click: function(r) {
      return t.onDetailRowClick(s, r);
    } } }, [n("td", { attrs: { colspan: t.countVisibleFields } }, [n(t.detailRowComponent, { tag: "component", attrs: { "row-data": s, "row-index": a } })], 1)]) : t._e()])] : t._e()];
  }), t.displayEmptyDataRow ? [n("tr", [n("td", { staticClass: "vue2-table-empty-result", attrs: { colspan: t.countVisibleFields }, domProps: { innerHTML: t._s(t.noDataTemplate) } })])] : t._e(), t.lessThanMinRows ? t._l(t.blankRows, function(s) {
    return n("tr", { key: s, staticClass: "blank-row" }, [t._l(t.tableFields, function(a, r) {
      return [a.visible ? n("td", { key: r }, [t._v(" ")]) : t._e()];
    })], 2);
  }) : t._e()], 2)])])]) : n("table", { class: ["vue2-table", t.css.tableClass] }, [n("thead", [n("tr", [t._l(t.tableFields, function(s, a) {
    return [s.visible ? [t.isSpecialField(s.name) ? [t.extractName(s.name) == "__checkbox" ? n("th", { key: a, class: ["vue2-table-th-checkbox-" + t.trackBy, s.titleClass], style: { width: s.width } }, [n("input", { attrs: { type: "checkbox" }, domProps: { checked: t.checkCheckboxesState(s.name) }, on: { change: function(r) {
      return t.toggleAllCheckboxes(s.name, r);
    } } })]) : t._e(), t.extractName(s.name) == "__component" ? n("th", { key: a, class: ["vue2-table-th-component-" + t.trackBy, s.titleClass, t.sortClass(s), { sortable: t.isSortable(s) }], style: { width: s.width }, domProps: { innerHTML: t._s(t.renderTitle(s)) }, on: { click: function(r) {
      return t.orderBy(s, r);
    } } }) : t._e(), t.extractName(s.name) == "__slot" ? n("th", { key: a, class: ["vue2-table-th-slot-" + t.extractArgs(s.name), s.titleClass, t.sortClass(s), { sortable: t.isSortable(s) }], style: { width: s.width }, domProps: { innerHTML: t._s(t.renderTitle(s)) }, on: { click: function(r) {
      return t.orderBy(s, r);
    } } }) : t._e(), t.extractName(s.name) == "__sequence" ? n("th", { key: a, class: ["vue2-table-th-sequence", s.titleClass || "", t.sortClass(s)], style: { width: s.width }, domProps: { innerHTML: t._s(t.renderTitle(s)) } }) : t._e(), t.notIn(t.extractName(s.name), ["__sequence", "__checkbox", "__component", "__slot"]) ? n("th", { key: a, class: ["vue2-table-th-" + s.name, s.titleClass || "", t.sortClass(s)], style: { width: s.width }, domProps: { innerHTML: t._s(t.renderTitle(s)) } }) : t._e()] : [n("th", { key: a, class: ["vue2-table-th-" + s.name, s.titleClass, t.sortClass(s), { sortable: t.isSortable(s) }], style: { width: s.width }, attrs: { id: "_" + s.name }, domProps: { innerHTML: t._s(t.renderTitle(s)) }, on: { click: function(r) {
      return t.orderBy(s, r);
    } } })]] : t._e()];
  })], 2)]), n("tbody", { staticClass: "vue2-table-body" }, [t._l(t.tableData, function(s, a) {
    return [n("tr", { key: a, class: t.onRowClass(s, a), attrs: { "item-index": a, render: t.onRowChanged(s) }, on: { click: function(r) {
      return t.onRowClicked(s, r);
    }, dblclick: function(r) {
      return t.onRowDoubleClicked(s, r);
    } } }, [t._l(t.tableFields, function(r, i) {
      return [r.visible ? [t.isSpecialField(r.name) ? [t.extractName(r.name) == "__sequence" ? n("td", { key: i, class: ["vue2-table-sequence", r.dataClass], domProps: { innerHTML: t._s(t.renderSequence(a)) } }) : t._e(), t.extractName(r.name) == "__handle" ? n("td", { key: i, class: ["vue2-table-handle", r.dataClass], domProps: { innerHTML: t._s(t.renderIconTag(["handle-icon", t.css.handleIcon])) } }) : t._e(), t.extractName(r.name) == "__checkbox" ? n("td", { key: i, class: ["vue2-table-checkboxes", r.dataClass] }, [n("input", { attrs: { type: "checkbox" }, domProps: { checked: t.rowSelected(s, r.name) }, on: { change: function(l) {
        return t.toggleCheckbox(s, r.name, l);
      } } })]) : t._e(), t.extractName(r.name) === "__component" ? n("td", { key: i, class: ["vue2-table-component", r.dataClass] }, [n(t.extractArgs(r.name), { tag: "component", attrs: { "row-data": s, "row-index": a, "row-field": r.sortField } })], 1) : t._e(), t.extractName(r.name) === "__slot" ? n("td", { key: i, class: ["vue2-table-slot", r.dataClass] }, [t._t(t.extractArgs(r.name), null, { rowData: s, rowIndex: a, rowField: r.sortField })], 2) : t._e()] : [t.hasCallback(r) ? n("td", { key: i, class: r.dataClass, domProps: { innerHTML: t._s(t.callCallback(r, s)) }, on: { click: function(l) {
        return t.onCellClicked(s, r, l);
      }, dblclick: function(l) {
        return t.onCellDoubleClicked(s, r, l);
      }, contextmenu: function(l) {
        return t.onCellRightClicked(s, r, l);
      } } }) : n("td", { key: i, class: r.dataClass, domProps: { innerHTML: t._s(t.getObjectValue(s, r.name, "")) }, on: { click: function(l) {
        return t.onCellClicked(s, r, l);
      }, dblclick: function(l) {
        return t.onCellDoubleClicked(s, r, l);
      }, contextmenu: function(l) {
        return t.onCellRightClicked(s, r, l);
      } } })]] : t._e()];
    })], 2), t.useDetailRow ? [n("transition", { key: a, attrs: { name: t.detailRowTransition } }, [t.isVisibleDetailRow(s[t.trackBy]) ? n("tr", { class: [t.css.detailRowClass], on: { click: function(r) {
      return t.onDetailRowClick(s, r);
    } } }, [n("td", { attrs: { colspan: t.countVisibleFields } }, [n(t.detailRowComponent, { tag: "component", attrs: { "row-data": s, "row-index": a } })], 1)]) : t._e()])] : t._e()];
  }), t.displayEmptyDataRow ? [n("tr", [n("td", { staticClass: "vue2-table-empty-result", attrs: { colspan: t.countVisibleFields }, domProps: { innerHTML: t._s(t.noDataTemplate) } })])] : t._e(), t.lessThanMinRows ? t._l(t.blankRows, function(s) {
    return n("tr", { key: s, staticClass: "blank-row" }, [t._l(t.tableFields, function(a, r) {
      return [a.visible ? n("td", { key: r }, [t._v(" ")]) : t._e()];
    })], 2);
  }) : t._e()], 2)]);
}, en = [], nn = /* @__PURE__ */ v(
  Ze,
  tn,
  en,
  !1,
  null,
  "b0617acf",
  null,
  null
);
const En = nn.exports, sn = {
  props: {
    css: {
      type: Object,
      default() {
        return {
          wrapperClass: "ui right floated pagination menu",
          activeClass: "active large",
          disabledClass: "disabled",
          pageClass: "item",
          linkClass: "icon item",
          paginationClass: "ui bottom attached segment grid",
          paginationInfoClass: "left floated left aligned six wide column",
          dropdownClass: "ui search dropdown",
          icons: {
            first: "angle double left icon",
            prev: "left chevron icon",
            next: "right chevron icon",
            last: "angle double right icon"
          }
        };
      }
    },
    onEachSide: {
      type: Number,
      default() {
        return 2;
      }
    }
  },
  data: function() {
    return {
      eventPrefix: "vue2-table-pagination:",
      tablePagination: null
    };
  },
  computed: {
    totalPage() {
      return this.tablePagination === null ? 0 : this.tablePagination.last_page;
    },
    isOnFirstPage() {
      return this.tablePagination === null ? !1 : this.tablePagination.current_page === 1;
    },
    isOnLastPage() {
      return this.tablePagination === null ? !1 : this.tablePagination.current_page === this.tablePagination.last_page;
    },
    notEnoughPages() {
      return this.totalPage < this.onEachSide * 2 + 4;
    },
    windowSize() {
      return this.onEachSide * 2 + 1;
    },
    windowStart() {
      return !this.tablePagination || this.tablePagination.current_page <= this.onEachSide ? 1 : this.tablePagination.current_page >= this.totalPage - this.onEachSide ? this.totalPage - this.onEachSide * 2 : this.tablePagination.current_page - this.onEachSide;
    }
  },
  methods: {
    loadPage(e) {
      this.$emit(this.eventPrefix + "change-page", e);
    },
    isCurrentPage(e) {
      return e === this.tablePagination.current_page;
    },
    setPaginationData(e) {
      this.tablePagination = e;
    },
    resetData() {
      this.tablePagination = null;
    }
  }
}, rn = null, an = null;
var on = /* @__PURE__ */ v(
  sn,
  rn,
  an,
  !1,
  null,
  null,
  null,
  null
);
const Nt = on.exports, ln = {
  mixins: [Nt]
};
var cn = function() {
  var t = this, n = t._self._c;
  return n("div", { directives: [{ name: "show", rawName: "v-show", value: t.tablePagination && t.tablePagination.last_page > 1, expression: "tablePagination && tablePagination.last_page > 1" }], class: t.css.wrapperClass }, [n("a", { class: ["btn-nav", t.css.linkClass, t.isOnFirstPage ? t.css.disabledClass : ""], on: { click: function(s) {
    return t.loadPage(1);
  } } }, [t.css.icons.first != "" ? n("i", { class: [t.css.icons.first] }) : n("span", [t._v("«")])]), n("a", { class: ["btn-nav", t.css.linkClass, t.isOnFirstPage ? t.css.disabledClass : ""], on: { click: function(s) {
    return t.loadPage("prev");
  } } }, [t.css.icons.next != "" ? n("i", { class: [t.css.icons.prev] }) : n("span", [t._v(" ‹")])]), t.notEnoughPages ? [t._l(t.totalPage, function(s) {
    return [n("a", { class: [t.css.pageClass, t.isCurrentPage(s) ? t.css.activeClass : ""], domProps: { innerHTML: t._s(s) }, on: { click: function(a) {
      return t.loadPage(s);
    } } })];
  })] : [t._l(t.windowSize, function(s) {
    return [n("a", { class: [t.css.pageClass, t.isCurrentPage(t.windowStart + s - 1) ? t.css.activeClass : ""], domProps: { innerHTML: t._s(t.windowStart + s - 1) }, on: { click: function(a) {
      return t.loadPage(t.windowStart + s - 1);
    } } })];
  })], n("a", { class: ["btn-nav", t.css.linkClass, t.isOnLastPage ? t.css.disabledClass : ""], on: { click: function(s) {
    return t.loadPage("next");
  } } }, [t.css.icons.next != "" ? n("i", { class: [t.css.icons.next] }) : n("span", [t._v("› ")])]), n("a", { class: ["btn-nav", t.css.linkClass, t.isOnLastPage ? t.css.disabledClass : ""], on: { click: function(s) {
    return t.loadPage(t.totalPage);
  } } }, [t.css.icons.last != "" ? n("i", { class: [t.css.icons.last] }) : n("span", [t._v("»")])])], 2);
}, un = [], hn = /* @__PURE__ */ v(
  ln,
  cn,
  un,
  !1,
  null,
  null,
  null,
  null
);
const On = hn.exports, dn = {
  mixins: [Nt],
  props: {
    pageText: {
      type: String,
      default() {
        return "Page";
      }
    }
  },
  methods: {
    updatePagination(e) {
      this.setPaginationData(e);
    }
  },
  created() {
    this.$on("vue2-table:pagination-data", this.updatePagination);
  },
  destroyed() {
    this.$off("vue2-table:pagination-data", this.updatePagination);
  }
};
var fn = function() {
  var t = this, n = t._self._c;
  return n("div", { class: [t.css.wrapperClass] }, [n("a", { class: [t.css.linkClass, { [t.css.disabledClass]: t.isOnFirstPage }], on: { click: function(s) {
    return t.loadPage("prev");
  } } }, [n("i", { class: t.css.icons.prev })]), n("select", { class: ["vue2-table-pagination-dropdown", t.css.dropdownClass], on: { change: function(s) {
    return t.loadPage(s.target.selectedIndex + 1);
  } } }, t._l(t.totalPage, function(s) {
    return n("option", { class: [t.css.pageClass], domProps: { value: s, selected: t.isCurrentPage(s) } }, [t._v(" " + t._s(t.pageText) + " " + t._s(s) + " ")]);
  }), 0), n("a", { class: [t.css.linkClass, { [t.css.disabledClass]: t.isOnLastPage }], on: { click: function(s) {
    return t.loadPage("next");
  } } }, [n("i", { class: t.css.icons.next })])]);
}, pn = [], mn = /* @__PURE__ */ v(
  dn,
  fn,
  pn,
  !1,
  null,
  null,
  null,
  null
);
const Rn = mn.exports, bn = {
  props: {
    css: {
      type: Object,
      default() {
        return {
          infoClass: "left floated left aligned six wide column"
        };
      }
    },
    infoTemplate: {
      type: String,
      default() {
        return "Displaying {from} to {to} of {total} items";
      }
    },
    noDataTemplate: {
      type: String,
      default() {
        return "No relevant data";
      }
    }
  },
  data: function() {
    return {
      tablePagination: null
    };
  },
  computed: {
    paginationInfo() {
      return this.tablePagination == null || this.tablePagination.total == 0 ? this.noDataTemplate : this.infoTemplate.replace("{from}", this.tablePagination.from || 0).replace("{to}", this.tablePagination.to || 0).replace("{total}", this.tablePagination.total || 0);
    }
  },
  methods: {
    setPaginationData(e) {
      this.tablePagination = e;
    },
    resetData() {
      this.tablePagination = null;
    }
  }
}, gn = null, yn = null;
var wn = /* @__PURE__ */ v(
  bn,
  gn,
  yn,
  !1,
  null,
  null,
  null,
  null
);
const _n = wn.exports, Cn = {
  mixins: [_n]
};
var Pn = function() {
  var t = this, n = t._self._c;
  return n("div", { class: ["vue2-table-pagination-info", t.css.infoClass], domProps: { innerHTML: t._s(t.paginationInfo) } });
}, Sn = [], kn = /* @__PURE__ */ v(
  Cn,
  Pn,
  Sn,
  !1,
  null,
  null,
  null,
  null
);
const Tn = kn.exports;
export {
  En as Vue2Table,
  On as Vue2TablePagination,
  Rn as Vue2TablePaginationDropdown,
  Tn as Vue2TablePaginationInfo,
  _n as Vue2TablePaginationInfoMixin,
  Nt as Vue2TablePaginationMixin
};
