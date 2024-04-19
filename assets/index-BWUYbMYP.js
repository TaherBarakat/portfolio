(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
var _r =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Zf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var cs = { exports: {} },
  zl = {},
  fs = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sr = Symbol.for("react.element"),
  Jf = Symbol.for("react.portal"),
  qf = Symbol.for("react.fragment"),
  bf = Symbol.for("react.strict_mode"),
  ed = Symbol.for("react.profiler"),
  td = Symbol.for("react.provider"),
  nd = Symbol.for("react.context"),
  rd = Symbol.for("react.forward_ref"),
  ld = Symbol.for("react.suspense"),
  id = Symbol.for("react.memo"),
  od = Symbol.for("react.lazy"),
  Mu = Symbol.iterator;
function ud(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mu && e[Mu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ds = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ps = Object.assign,
  hs = {};
function Sn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hs),
    (this.updater = n || ds);
}
Sn.prototype.isReactComponent = {};
Sn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Sn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ms() {}
ms.prototype = Sn.prototype;
function zo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hs),
    (this.updater = n || ds);
}
var Oo = (zo.prototype = new ms());
Oo.constructor = zo;
ps(Oo, Sn.prototype);
Oo.isPureReactComponent = !0;
var Ru = Array.isArray,
  vs = Object.prototype.hasOwnProperty,
  Lo = { current: null },
  gs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ys(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      vs.call(t, r) && !gs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: sr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Lo.current,
  };
}
function ad(e, t) {
  return {
    $$typeof: sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Mo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sr;
}
function sd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Iu = /\/+/g;
function ri(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? sd("" + e.key)
    : t.toString(36);
}
function Yr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case sr:
          case Jf:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + ri(o, 0) : r),
      Ru(l)
        ? ((n = ""),
          e != null && (n = e.replace(Iu, "$&/") + "/"),
          Yr(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (Mo(l) &&
            (l = ad(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Iu, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ru(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = r + ri(i, u);
      o += Yr(i, t, n, a, l);
    }
  else if (((a = ud(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + ri(i, u++)), (o += Yr(i, t, n, a, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function Er(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Yr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function cd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  Kr = { transition: null },
  fd = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: Kr,
    ReactCurrentOwner: Lo,
  };
O.Children = {
  map: Er,
  forEach: function (e, t, n) {
    Er(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Er(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Er(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Mo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
O.Component = Sn;
O.Fragment = qf;
O.Profiler = ed;
O.PureComponent = zo;
O.StrictMode = bf;
O.Suspense = ld;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fd;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = ps({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Lo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      vs.call(t, a) &&
        !gs.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: sr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: nd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: td, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = ys;
O.createFactory = function (e) {
  var t = ys.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: rd, render: e };
};
O.isValidElement = Mo;
O.lazy = function (e) {
  return { $$typeof: od, _payload: { _status: -1, _result: e }, _init: cd };
};
O.memo = function (e, t) {
  return { $$typeof: id, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Kr.transition;
  Kr.transition = {};
  try {
    e();
  } finally {
    Kr.transition = t;
  }
};
O.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
O.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
O.useContext = function (e) {
  return de.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
O.useId = function () {
  return de.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return de.current.useRef(e);
};
O.useState = function (e) {
  return de.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return de.current.useTransition();
};
O.version = "18.2.0";
fs.exports = O;
var Ye = fs.exports;
const ht = Zf(Ye);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dd = Ye,
  pd = Symbol.for("react.element"),
  hd = Symbol.for("react.fragment"),
  md = Object.prototype.hasOwnProperty,
  vd = dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ws(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) md.call(t, r) && !gd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: pd,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: vd.current,
  };
}
zl.Fragment = hd;
zl.jsx = ws;
zl.jsxs = ws;
cs.exports = zl;
var v = cs.exports,
  Ri = {},
  Ss = { exports: {} },
  Ee = {},
  ks = { exports: {} },
  xs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, j) {
    var z = P.length;
    P.push(j);
    e: for (; 0 < z; ) {
      var X = (z - 1) >>> 1,
        b = P[X];
      if (0 < l(b, j)) (P[X] = j), (P[z] = b), (z = X);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var j = P[0],
      z = P.pop();
    if (z !== j) {
      P[0] = z;
      e: for (var X = 0, b = P.length, kr = b >>> 1; X < kr; ) {
        var zt = 2 * (X + 1) - 1,
          ni = P[zt],
          Ot = zt + 1,
          xr = P[Ot];
        if (0 > l(ni, z))
          Ot < b && 0 > l(xr, ni)
            ? ((P[X] = xr), (P[Ot] = z), (X = Ot))
            : ((P[X] = ni), (P[zt] = z), (X = zt));
        else if (Ot < b && 0 > l(xr, z)) (P[X] = xr), (P[Ot] = z), (X = Ot);
        else break e;
      }
    }
    return j;
  }
  function l(P, j) {
    var z = P.sortIndex - j.sortIndex;
    return z !== 0 ? z : P.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var a = [],
    s = [],
    h = 1,
    m = null,
    p = 3,
    w = !1,
    S = !1,
    x = !1,
    L = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(P) {
    for (var j = n(s); j !== null; ) {
      if (j.callback === null) r(s);
      else if (j.startTime <= P)
        r(s), (j.sortIndex = j.expirationTime), t(a, j);
      else break;
      j = n(s);
    }
  }
  function g(P) {
    if (((x = !1), d(P), !S))
      if (n(a) !== null) (S = !0), ei(_);
      else {
        var j = n(s);
        j !== null && ti(g, j.startTime - P);
      }
  }
  function _(P, j) {
    (S = !1), x && ((x = !1), f(T), (T = -1)), (w = !0);
    var z = p;
    try {
      for (
        d(j), m = n(a);
        m !== null && (!(m.expirationTime > j) || (P && !he()));

      ) {
        var X = m.callback;
        if (typeof X == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var b = X(m.expirationTime <= j);
          (j = e.unstable_now()),
            typeof b == "function" ? (m.callback = b) : m === n(a) && r(a),
            d(j);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var kr = !0;
      else {
        var zt = n(s);
        zt !== null && ti(g, zt.startTime - j), (kr = !1);
      }
      return kr;
    } finally {
      (m = null), (p = z), (w = !1);
    }
  }
  var k = !1,
    E = null,
    T = -1,
    I = 5,
    N = -1;
  function he() {
    return !(e.unstable_now() - N < I);
  }
  function lt() {
    if (E !== null) {
      var P = e.unstable_now();
      N = P;
      var j = !0;
      try {
        j = E(!0, P);
      } finally {
        j ? Nt() : ((k = !1), (E = null));
      }
    } else k = !1;
  }
  var Nt;
  if (typeof c == "function")
    Nt = function () {
      c(lt);
    };
  else if (typeof MessageChannel < "u") {
    var En = new MessageChannel(),
      bl = En.port2;
    (En.port1.onmessage = lt),
      (Nt = function () {
        bl.postMessage(null);
      });
  } else
    Nt = function () {
      L(lt, 0);
    };
  function ei(P) {
    (E = P), k || ((k = !0), Nt());
  }
  function ti(P, j) {
    T = L(function () {
      P(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || w || ((S = !0), ei(_));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (P) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = p;
      }
      var z = p;
      p = j;
      try {
        return P();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, j) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = p;
      p = P;
      try {
        return j();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (P, j, z) {
      var X = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? X + z : X))
          : (z = X),
        P)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = z + b),
        (P = {
          id: h++,
          callback: j,
          priorityLevel: P,
          startTime: z,
          expirationTime: b,
          sortIndex: -1,
        }),
        z > X
          ? ((P.sortIndex = z),
            t(s, P),
            n(a) === null &&
              P === n(s) &&
              (x ? (f(T), (T = -1)) : (x = !0), ti(g, z - X)))
          : ((P.sortIndex = b), t(a, P), S || w || ((S = !0), ei(_))),
        P
      );
    }),
    (e.unstable_shouldYield = he),
    (e.unstable_wrapCallback = function (P) {
      var j = p;
      return function () {
        var z = p;
        p = j;
        try {
          return P.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(xs);
ks.exports = xs;
var yd = ks.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _s = Ye,
  _e = yd;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Es = new Set(),
  Yn = {};
function Qt(e, t) {
  pn(e, t), pn(e + "Capture", t);
}
function pn(e, t) {
  for (Yn[e] = t, e = 0; e < t.length; e++) Es.add(t[e]);
}
var be = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ii = Object.prototype.hasOwnProperty,
  wd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Du = {},
  Fu = {};
function Sd(e) {
  return Ii.call(Fu, e)
    ? !0
    : Ii.call(Du, e)
      ? !1
      : wd.test(e)
        ? (Fu[e] = !0)
        : ((Du[e] = !0), !1);
}
function kd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function xd(e, t, n, r) {
  if (t === null || typeof t > "u" || kd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ro = /[\-:]([a-z])/g;
function Io(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ro, Io);
    le[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ro, Io);
    le[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ro, Io);
  le[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Do(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (xd(t, n, l, r) && (n = null),
    r || l === null
      ? Sd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = _s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Cr = Symbol.for("react.element"),
  Xt = Symbol.for("react.portal"),
  Gt = Symbol.for("react.fragment"),
  Fo = Symbol.for("react.strict_mode"),
  Di = Symbol.for("react.profiler"),
  Cs = Symbol.for("react.provider"),
  Ps = Symbol.for("react.context"),
  Ho = Symbol.for("react.forward_ref"),
  Fi = Symbol.for("react.suspense"),
  Hi = Symbol.for("react.suspense_list"),
  $o = Symbol.for("react.memo"),
  at = Symbol.for("react.lazy"),
  Ts = Symbol.for("react.offscreen"),
  Hu = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hu && e[Hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  li;
function Mn(e) {
  if (li === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      li = (t && t[1]) || "";
    }
  return (
    `
` +
    li +
    e
  );
}
var ii = !1;
function oi(e, t) {
  if (!e || ii) return "";
  ii = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (ii = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Mn(e) : "";
}
function _d(e) {
  switch (e.tag) {
    case 5:
      return Mn(e.type);
    case 16:
      return Mn("Lazy");
    case 13:
      return Mn("Suspense");
    case 19:
      return Mn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = oi(e.type, !1)), e;
    case 11:
      return (e = oi(e.type.render, !1)), e;
    case 1:
      return (e = oi(e.type, !0)), e;
    default:
      return "";
  }
}
function $i(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gt:
      return "Fragment";
    case Xt:
      return "Portal";
    case Di:
      return "Profiler";
    case Fo:
      return "StrictMode";
    case Fi:
      return "Suspense";
    case Hi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ps:
        return (e.displayName || "Context") + ".Consumer";
      case Cs:
        return (e._context.displayName || "Context") + ".Provider";
      case Ho:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case $o:
        return (
          (t = e.displayName || null), t !== null ? t : $i(e.type) || "Memo"
        );
      case at:
        (t = e._payload), (e = e._init);
        try {
          return $i(e(t));
        } catch {}
    }
  return null;
}
function Ed(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return $i(t);
    case 8:
      return t === Fo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Et(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function js(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Cd(e) {
  var t = js(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Pr(e) {
  e._valueTracker || (e._valueTracker = Cd(e));
}
function Ns(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = js(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function il(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bi(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function $u(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Et(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function zs(e, t) {
  (t = t.checked), t != null && Do(e, "checked", t, !1);
}
function Ui(e, t) {
  zs(e, t);
  var n = Et(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ai(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ai(e, t.type, Et(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ai(e, t, n) {
  (t !== "number" || il(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rn = Array.isArray;
function un(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Et(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Uu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Et(n) };
}
function Os(e, t) {
  var n = Et(t.value),
    r = Et(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ls(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Vi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ls(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Tr,
  Ms = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Tr = Tr || document.createElement("div"),
          Tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Tr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Kn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Pd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function (e) {
  Pd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]);
  });
});
function Rs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
      ? ("" + t).trim()
      : t + "px";
}
function Is(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Rs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Td = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Qi(e, t) {
  if (t) {
    if (Td[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function Yi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ki = null;
function Bo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Xi = null,
  an = null,
  sn = null;
function Wu(e) {
  if ((e = dr(e))) {
    if (typeof Xi != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = Il(t)), Xi(e.stateNode, e.type, t));
  }
}
function Ds(e) {
  an ? (sn ? sn.push(e) : (sn = [e])) : (an = e);
}
function Fs() {
  if (an) {
    var e = an,
      t = sn;
    if (((sn = an = null), Wu(e), t)) for (e = 0; e < t.length; e++) Wu(t[e]);
  }
}
function Hs(e, t) {
  return e(t);
}
function $s() {}
var ui = !1;
function Bs(e, t, n) {
  if (ui) return e(t, n);
  ui = !0;
  try {
    return Hs(e, t, n);
  } finally {
    (ui = !1), (an !== null || sn !== null) && ($s(), Fs());
  }
}
function Xn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Il(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var Gi = !1;
if (be)
  try {
    var Pn = {};
    Object.defineProperty(Pn, "passive", {
      get: function () {
        Gi = !0;
      },
    }),
      window.addEventListener("test", Pn, Pn),
      window.removeEventListener("test", Pn, Pn);
  } catch {
    Gi = !1;
  }
function jd(e, t, n, r, l, i, o, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (h) {
    this.onError(h);
  }
}
var Hn = !1,
  ol = null,
  ul = !1,
  Zi = null,
  Nd = {
    onError: function (e) {
      (Hn = !0), (ol = e);
    },
  };
function zd(e, t, n, r, l, i, o, u, a) {
  (Hn = !1), (ol = null), jd.apply(Nd, arguments);
}
function Od(e, t, n, r, l, i, o, u, a) {
  if ((zd.apply(this, arguments), Hn)) {
    if (Hn) {
      var s = ol;
      (Hn = !1), (ol = null);
    } else throw Error(y(198));
    ul || ((ul = !0), (Zi = s));
  }
}
function Yt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Us(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Vu(e) {
  if (Yt(e) !== e) throw Error(y(188));
}
function Ld(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Vu(l), e;
        if (i === r) return Vu(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function As(e) {
  return (e = Ld(e)), e !== null ? Ws(e) : null;
}
function Ws(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ws(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Vs = _e.unstable_scheduleCallback,
  Qu = _e.unstable_cancelCallback,
  Md = _e.unstable_shouldYield,
  Rd = _e.unstable_requestPaint,
  G = _e.unstable_now,
  Id = _e.unstable_getCurrentPriorityLevel,
  Uo = _e.unstable_ImmediatePriority,
  Qs = _e.unstable_UserBlockingPriority,
  al = _e.unstable_NormalPriority,
  Dd = _e.unstable_LowPriority,
  Ys = _e.unstable_IdlePriority,
  Ol = null,
  Ve = null;
function Fd(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : Bd,
  Hd = Math.log,
  $d = Math.LN2;
function Bd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Hd(e) / $d) | 0)) | 0;
}
var jr = 64,
  Nr = 4194304;
function In(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function sl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = In(u)) : ((i &= o), i !== 0 && (r = In(i)));
  } else (o = n & ~l), o !== 0 ? (r = In(o)) : i !== 0 && (r = In(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Fe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Ud(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ad(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Fe(i),
      u = 1 << o,
      a = l[o];
    a === -1
      ? (!(u & n) || u & r) && (l[o] = Ud(u, t))
      : a <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Ji(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ks() {
  var e = jr;
  return (jr <<= 1), !(jr & 4194240) && (jr = 64), e;
}
function ai(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Fe(t)),
    (e[t] = n);
}
function Wd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Fe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Ao(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function Xs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Gs,
  Wo,
  Zs,
  Js,
  qs,
  qi = !1,
  zr = [],
  mt = null,
  vt = null,
  gt = null,
  Gn = new Map(),
  Zn = new Map(),
  ct = [],
  Vd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Yu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mt = null;
      break;
    case "dragenter":
    case "dragleave":
      vt = null;
      break;
    case "mouseover":
    case "mouseout":
      gt = null;
      break;
    case "pointerover":
    case "pointerout":
      Gn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function Tn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = dr(t)), t !== null && Wo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Qd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (mt = Tn(mt, e, t, n, r, l)), !0;
    case "dragenter":
      return (vt = Tn(vt, e, t, n, r, l)), !0;
    case "mouseover":
      return (gt = Tn(gt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Gn.set(i, Tn(Gn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Zn.set(i, Tn(Zn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function bs(e) {
  var t = It(e.target);
  if (t !== null) {
    var n = Yt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Us(n)), t !== null)) {
          (e.blockedOn = t),
            qs(e.priority, function () {
              Zs(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = bi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ki = r), n.target.dispatchEvent(r), (Ki = null);
    } else return (t = dr(n)), t !== null && Wo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ku(e, t, n) {
  Xr(e) && n.delete(t);
}
function Yd() {
  (qi = !1),
    mt !== null && Xr(mt) && (mt = null),
    vt !== null && Xr(vt) && (vt = null),
    gt !== null && Xr(gt) && (gt = null),
    Gn.forEach(Ku),
    Zn.forEach(Ku);
}
function jn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qi ||
      ((qi = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, Yd)));
}
function Jn(e) {
  function t(l) {
    return jn(l, e);
  }
  if (0 < zr.length) {
    jn(zr[0], e);
    for (var n = 1; n < zr.length; n++) {
      var r = zr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    mt !== null && jn(mt, e),
      vt !== null && jn(vt, e),
      gt !== null && jn(gt, e),
      Gn.forEach(t),
      Zn.forEach(t),
      n = 0;
    n < ct.length;
    n++
  )
    (r = ct[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ct.length && ((n = ct[0]), n.blockedOn === null); )
    bs(n), n.blockedOn === null && ct.shift();
}
var cn = rt.ReactCurrentBatchConfig,
  cl = !0;
function Kd(e, t, n, r) {
  var l = R,
    i = cn.transition;
  cn.transition = null;
  try {
    (R = 1), Vo(e, t, n, r);
  } finally {
    (R = l), (cn.transition = i);
  }
}
function Xd(e, t, n, r) {
  var l = R,
    i = cn.transition;
  cn.transition = null;
  try {
    (R = 4), Vo(e, t, n, r);
  } finally {
    (R = l), (cn.transition = i);
  }
}
function Vo(e, t, n, r) {
  if (cl) {
    var l = bi(e, t, n, r);
    if (l === null) yi(e, t, r, fl, n), Yu(e, r);
    else if (Qd(l, e, t, n, r)) r.stopPropagation();
    else if ((Yu(e, r), t & 4 && -1 < Vd.indexOf(e))) {
      for (; l !== null; ) {
        var i = dr(l);
        if (
          (i !== null && Gs(i),
          (i = bi(e, t, n, r)),
          i === null && yi(e, t, r, fl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else yi(e, t, r, null, n);
  }
}
var fl = null;
function bi(e, t, n, r) {
  if (((fl = null), (e = Bo(r)), (e = It(e)), e !== null))
    if (((t = Yt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Us(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (fl = e), null;
}
function ec(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Id()) {
        case Uo:
          return 1;
        case Qs:
          return 4;
        case al:
        case Dd:
          return 16;
        case Ys:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dt = null,
  Qo = null,
  Gr = null;
function tc() {
  if (Gr) return Gr;
  var e,
    t = Qo,
    n = t.length,
    r,
    l = "value" in dt ? dt.value : dt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Gr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Zr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Or() {
  return !0;
}
function Xu() {
  return !1;
}
function Ce(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Or
        : Xu),
      (this.isPropagationStopped = Xu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Or));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Or));
      },
      persist: function () {},
      isPersistent: Or,
    }),
    t
  );
}
var kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Yo = Ce(kn),
  fr = Q({}, kn, { view: 0, detail: 0 }),
  Gd = Ce(fr),
  si,
  ci,
  Nn,
  Ll = Q({}, fr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ko,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Nn &&
            (Nn && e.type === "mousemove"
              ? ((si = e.screenX - Nn.screenX), (ci = e.screenY - Nn.screenY))
              : (ci = si = 0),
            (Nn = e)),
          si);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ci;
    },
  }),
  Gu = Ce(Ll),
  Zd = Q({}, Ll, { dataTransfer: 0 }),
  Jd = Ce(Zd),
  qd = Q({}, fr, { relatedTarget: 0 }),
  fi = Ce(qd),
  bd = Q({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ep = Ce(bd),
  tp = Q({}, kn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  np = Ce(tp),
  rp = Q({}, kn, { data: 0 }),
  Zu = Ce(rp),
  lp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ip = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  op = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function up(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = op[e]) ? !!t[e] : !1;
}
function Ko() {
  return up;
}
var ap = Q({}, fr, {
    key: function (e) {
      if (e.key) {
        var t = lp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? ip[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ko,
    charCode: function (e) {
      return e.type === "keypress" ? Zr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Zr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  sp = Ce(ap),
  cp = Q({}, Ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ju = Ce(cp),
  fp = Q({}, fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ko,
  }),
  dp = Ce(fp),
  pp = Q({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hp = Ce(pp),
  mp = Q({}, Ll, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vp = Ce(mp),
  gp = [9, 13, 27, 32],
  Xo = be && "CompositionEvent" in window,
  $n = null;
be && "documentMode" in document && ($n = document.documentMode);
var yp = be && "TextEvent" in window && !$n,
  nc = be && (!Xo || ($n && 8 < $n && 11 >= $n)),
  qu = " ",
  bu = !1;
function rc(e, t) {
  switch (e) {
    case "keyup":
      return gp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function lc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Zt = !1;
function wp(e, t) {
  switch (e) {
    case "compositionend":
      return lc(t);
    case "keypress":
      return t.which !== 32 ? null : ((bu = !0), qu);
    case "textInput":
      return (e = t.data), e === qu && bu ? null : e;
    default:
      return null;
  }
}
function Sp(e, t) {
  if (Zt)
    return e === "compositionend" || (!Xo && rc(e, t))
      ? ((e = tc()), (Gr = Qo = dt = null), (Zt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return nc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var kp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ea(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!kp[e.type] : t === "textarea";
}
function ic(e, t, n, r) {
  Ds(r),
    (t = dl(t, "onChange")),
    0 < t.length &&
      ((n = new Yo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Bn = null,
  qn = null;
function xp(e) {
  vc(e, 0);
}
function Ml(e) {
  var t = bt(e);
  if (Ns(t)) return e;
}
function _p(e, t) {
  if (e === "change") return t;
}
var oc = !1;
if (be) {
  var di;
  if (be) {
    var pi = "oninput" in document;
    if (!pi) {
      var ta = document.createElement("div");
      ta.setAttribute("oninput", "return;"),
        (pi = typeof ta.oninput == "function");
    }
    di = pi;
  } else di = !1;
  oc = di && (!document.documentMode || 9 < document.documentMode);
}
function na() {
  Bn && (Bn.detachEvent("onpropertychange", uc), (qn = Bn = null));
}
function uc(e) {
  if (e.propertyName === "value" && Ml(qn)) {
    var t = [];
    ic(t, qn, e, Bo(e)), Bs(xp, t);
  }
}
function Ep(e, t, n) {
  e === "focusin"
    ? (na(), (Bn = t), (qn = n), Bn.attachEvent("onpropertychange", uc))
    : e === "focusout" && na();
}
function Cp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ml(qn);
}
function Pp(e, t) {
  if (e === "click") return Ml(t);
}
function Tp(e, t) {
  if (e === "input" || e === "change") return Ml(t);
}
function jp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $e = typeof Object.is == "function" ? Object.is : jp;
function bn(e, t) {
  if ($e(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ii.call(t, l) || !$e(e[l], t[l])) return !1;
  }
  return !0;
}
function ra(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function la(e, t) {
  var n = ra(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ra(n);
  }
}
function ac(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? ac(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function sc() {
  for (var e = window, t = il(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = il(e.document);
  }
  return t;
}
function Go(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Np(e) {
  var t = sc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ac(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Go(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = la(n, i));
        var o = la(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var zp = be && "documentMode" in document && 11 >= document.documentMode,
  Jt = null,
  eo = null,
  Un = null,
  to = !1;
function ia(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  to ||
    Jt == null ||
    Jt !== il(r) ||
    ((r = Jt),
    "selectionStart" in r && Go(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Un && bn(Un, r)) ||
      ((Un = r),
      (r = dl(eo, "onSelect")),
      0 < r.length &&
        ((t = new Yo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jt))));
}
function Lr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var qt = {
    animationend: Lr("Animation", "AnimationEnd"),
    animationiteration: Lr("Animation", "AnimationIteration"),
    animationstart: Lr("Animation", "AnimationStart"),
    transitionend: Lr("Transition", "TransitionEnd"),
  },
  hi = {},
  cc = {};
be &&
  ((cc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete qt.animationend.animation,
    delete qt.animationiteration.animation,
    delete qt.animationstart.animation),
  "TransitionEvent" in window || delete qt.transitionend.transition);
function Rl(e) {
  if (hi[e]) return hi[e];
  if (!qt[e]) return e;
  var t = qt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in cc) return (hi[e] = t[n]);
  return e;
}
var fc = Rl("animationend"),
  dc = Rl("animationiteration"),
  pc = Rl("animationstart"),
  hc = Rl("transitionend"),
  mc = new Map(),
  oa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Pt(e, t) {
  mc.set(e, t), Qt(t, [e]);
}
for (var mi = 0; mi < oa.length; mi++) {
  var vi = oa[mi],
    Op = vi.toLowerCase(),
    Lp = vi[0].toUpperCase() + vi.slice(1);
  Pt(Op, "on" + Lp);
}
Pt(fc, "onAnimationEnd");
Pt(dc, "onAnimationIteration");
Pt(pc, "onAnimationStart");
Pt("dblclick", "onDoubleClick");
Pt("focusin", "onFocus");
Pt("focusout", "onBlur");
Pt(hc, "onTransitionEnd");
pn("onMouseEnter", ["mouseout", "mouseover"]);
pn("onMouseLeave", ["mouseout", "mouseover"]);
pn("onPointerEnter", ["pointerout", "pointerover"]);
pn("onPointerLeave", ["pointerout", "pointerover"]);
Qt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Qt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Qt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Qt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Dn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Mp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));
function ua(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Od(r, t, void 0, e), (e.currentTarget = null);
}
function vc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== i && l.isPropagationStopped())) break e;
          ua(l, u, s), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          ua(l, u, s), (i = a);
        }
    }
  }
  if (ul) throw ((e = Zi), (ul = !1), (Zi = null), e);
}
function F(e, t) {
  var n = t[oo];
  n === void 0 && (n = t[oo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (gc(t, e, 2, !1), n.add(r));
}
function gi(e, t, n) {
  var r = 0;
  t && (r |= 4), gc(n, e, r, t);
}
var Mr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Mr]) {
    (e[Mr] = !0),
      Es.forEach(function (n) {
        n !== "selectionchange" && (Mp.has(n) || gi(n, !1, e), gi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Mr] || ((t[Mr] = !0), gi("selectionchange", !1, t));
  }
}
function gc(e, t, n, r) {
  switch (ec(t)) {
    case 1:
      var l = Kd;
      break;
    case 4:
      l = Xd;
      break;
    default:
      l = Vo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Gi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function yi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = It(u)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Bs(function () {
    var s = i,
      h = Bo(n),
      m = [];
    e: {
      var p = mc.get(e);
      if (p !== void 0) {
        var w = Yo,
          S = e;
        switch (e) {
          case "keypress":
            if (Zr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = sp;
            break;
          case "focusin":
            (S = "focus"), (w = fi);
            break;
          case "focusout":
            (S = "blur"), (w = fi);
            break;
          case "beforeblur":
          case "afterblur":
            w = fi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Gu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Jd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = dp;
            break;
          case fc:
          case dc:
          case pc:
            w = ep;
            break;
          case hc:
            w = hp;
            break;
          case "scroll":
            w = Gd;
            break;
          case "wheel":
            w = vp;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = np;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Ju;
        }
        var x = (t & 4) !== 0,
          L = !x && e === "scroll",
          f = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var c = s, d; c !== null; ) {
          d = c;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              f !== null && ((g = Xn(c, f)), g != null && x.push(tr(c, g, d)))),
            L)
          )
            break;
          c = c.return;
        }
        0 < x.length &&
          ((p = new w(p, S, null, n, h)), m.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Ki &&
            (S = n.relatedTarget || n.fromElement) &&
            (It(S) || S[et]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          w
            ? ((S = n.relatedTarget || n.toElement),
              (w = s),
              (S = S ? It(S) : null),
              S !== null &&
                ((L = Yt(S)), S !== L || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((w = null), (S = s)),
          w !== S)
        ) {
          if (
            ((x = Gu),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Ju),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (L = w == null ? p : bt(w)),
            (d = S == null ? p : bt(S)),
            (p = new x(g, c + "leave", w, n, h)),
            (p.target = L),
            (p.relatedTarget = d),
            (g = null),
            It(h) === s &&
              ((x = new x(f, c + "enter", S, n, h)),
              (x.target = d),
              (x.relatedTarget = L),
              (g = x)),
            (L = g),
            w && S)
          )
            t: {
              for (x = w, f = S, c = 0, d = x; d; d = Kt(d)) c++;
              for (d = 0, g = f; g; g = Kt(g)) d++;
              for (; 0 < c - d; ) (x = Kt(x)), c--;
              for (; 0 < d - c; ) (f = Kt(f)), d--;
              for (; c--; ) {
                if (x === f || (f !== null && x === f.alternate)) break t;
                (x = Kt(x)), (f = Kt(f));
              }
              x = null;
            }
          else x = null;
          w !== null && aa(m, p, w, x, !1),
            S !== null && L !== null && aa(m, L, S, x, !0);
        }
      }
      e: {
        if (
          ((p = s ? bt(s) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var _ = _p;
        else if (ea(p))
          if (oc) _ = Tp;
          else {
            _ = Cp;
            var k = Ep;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (_ = Pp);
        if (_ && (_ = _(e, s))) {
          ic(m, _, n, h);
          break e;
        }
        k && k(e, p, s),
          e === "focusout" &&
            (k = p._wrapperState) &&
            k.controlled &&
            p.type === "number" &&
            Ai(p, "number", p.value);
      }
      switch (((k = s ? bt(s) : window), e)) {
        case "focusin":
          (ea(k) || k.contentEditable === "true") &&
            ((Jt = k), (eo = s), (Un = null));
          break;
        case "focusout":
          Un = eo = Jt = null;
          break;
        case "mousedown":
          to = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (to = !1), ia(m, n, h);
          break;
        case "selectionchange":
          if (zp) break;
        case "keydown":
        case "keyup":
          ia(m, n, h);
      }
      var E;
      if (Xo)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Zt
          ? rc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (nc &&
          n.locale !== "ko" &&
          (Zt || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Zt && (E = tc())
            : ((dt = h),
              (Qo = "value" in dt ? dt.value : dt.textContent),
              (Zt = !0))),
        (k = dl(s, T)),
        0 < k.length &&
          ((T = new Zu(T, e, null, n, h)),
          m.push({ event: T, listeners: k }),
          E ? (T.data = E) : ((E = lc(n)), E !== null && (T.data = E)))),
        (E = yp ? wp(e, n) : Sp(e, n)) &&
          ((s = dl(s, "onBeforeInput")),
          0 < s.length &&
            ((h = new Zu("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: s }),
            (h.data = E)));
    }
    vc(m, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function dl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Xn(e, n)),
      i != null && r.unshift(tr(e, i, l)),
      (i = Xn(e, t)),
      i != null && r.push(tr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Kt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function aa(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Xn(n, i)), a != null && o.unshift(tr(n, a, u)))
        : l || ((a = Xn(n, i)), a != null && o.push(tr(n, a, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Rp = /\r\n?/g,
  Ip = /\u0000|\uFFFD/g;
function sa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Rp,
      `
`,
    )
    .replace(Ip, "");
}
function Rr(e, t, n) {
  if (((t = sa(t)), sa(e) !== t && n)) throw Error(y(425));
}
function pl() {}
var no = null,
  ro = null;
function lo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var io = typeof setTimeout == "function" ? setTimeout : void 0,
  Dp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ca = typeof Promise == "function" ? Promise : void 0,
  Fp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ca < "u"
        ? function (e) {
            return ca.resolve(null).then(e).catch(Hp);
          }
        : io;
function Hp(e) {
  setTimeout(function () {
    throw e;
  });
}
function wi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Jn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Jn(t);
}
function yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var xn = Math.random().toString(36).slice(2),
  We = "__reactFiber$" + xn,
  nr = "__reactProps$" + xn,
  et = "__reactContainer$" + xn,
  oo = "__reactEvents$" + xn,
  $p = "__reactListeners$" + xn,
  Bp = "__reactHandles$" + xn;
function It(e) {
  var t = e[We];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[et] || n[We])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fa(e); e !== null; ) {
          if ((n = e[We])) return n;
          e = fa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function dr(e) {
  return (
    (e = e[We] || e[et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function Il(e) {
  return e[nr] || null;
}
var uo = [],
  en = -1;
function Tt(e) {
  return { current: e };
}
function H(e) {
  0 > en || ((e.current = uo[en]), (uo[en] = null), en--);
}
function D(e, t) {
  en++, (uo[en] = e.current), (e.current = t);
}
var Ct = {},
  ae = Tt(Ct),
  ge = Tt(!1),
  Bt = Ct;
function hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ct;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function hl() {
  H(ge), H(ae);
}
function da(e, t, n) {
  if (ae.current !== Ct) throw Error(y(168));
  D(ae, t), D(ge, n);
}
function yc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Ed(e) || "Unknown", l));
  return Q({}, n, r);
}
function ml(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ct),
    (Bt = ae.current),
    D(ae, e),
    D(ge, ge.current),
    !0
  );
}
function pa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = yc(e, t, Bt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(ge),
      H(ae),
      D(ae, e))
    : H(ge),
    D(ge, n);
}
var Ge = null,
  Dl = !1,
  Si = !1;
function wc(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
function Up(e) {
  (Dl = !0), wc(e);
}
function jt() {
  if (!Si && Ge !== null) {
    Si = !0;
    var e = 0,
      t = R;
    try {
      var n = Ge;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ge = null), (Dl = !1);
    } catch (l) {
      throw (Ge !== null && (Ge = Ge.slice(e + 1)), Vs(Uo, jt), l);
    } finally {
      (R = t), (Si = !1);
    }
  }
  return null;
}
var tn = [],
  nn = 0,
  vl = null,
  gl = 0,
  Te = [],
  je = 0,
  Ut = null,
  Ze = 1,
  Je = "";
function Mt(e, t) {
  (tn[nn++] = gl), (tn[nn++] = vl), (vl = e), (gl = t);
}
function Sc(e, t, n) {
  (Te[je++] = Ze), (Te[je++] = Je), (Te[je++] = Ut), (Ut = e);
  var r = Ze;
  e = Je;
  var l = 32 - Fe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Fe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ze = (1 << (32 - Fe(t) + l)) | (n << l) | r),
      (Je = i + e);
  } else (Ze = (1 << i) | (n << l) | r), (Je = e);
}
function Zo(e) {
  e.return !== null && (Mt(e, 1), Sc(e, 1, 0));
}
function Jo(e) {
  for (; e === vl; )
    (vl = tn[--nn]), (tn[nn] = null), (gl = tn[--nn]), (tn[nn] = null);
  for (; e === Ut; )
    (Ut = Te[--je]),
      (Te[je] = null),
      (Je = Te[--je]),
      (Te[je] = null),
      (Ze = Te[--je]),
      (Te[je] = null);
}
var xe = null,
  ke = null,
  B = !1,
  De = null;
function kc(e, t) {
  var n = Ne(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ha(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xe = e), (ke = yt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xe = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ut !== null ? { id: Ze, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ne(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xe = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ao(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function so(e) {
  if (B) {
    var t = ke;
    if (t) {
      var n = t;
      if (!ha(e, t)) {
        if (ao(e)) throw Error(y(418));
        t = yt(n.nextSibling);
        var r = xe;
        t && ha(e, t)
          ? kc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (xe = e));
      }
    } else {
      if (ao(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (xe = e);
    }
  }
}
function ma(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function Ir(e) {
  if (e !== xe) return !1;
  if (!B) return ma(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !lo(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (ao(e)) throw (xc(), Error(y(418)));
    for (; t; ) kc(e, t), (t = yt(t.nextSibling));
  }
  if ((ma(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = yt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = xe ? yt(e.stateNode.nextSibling) : null;
  return !0;
}
function xc() {
  for (var e = ke; e; ) e = yt(e.nextSibling);
}
function mn() {
  (ke = xe = null), (B = !1);
}
function qo(e) {
  De === null ? (De = [e]) : De.push(e);
}
var Ap = rt.ReactCurrentBatchConfig;
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var yl = Tt(null),
  wl = null,
  rn = null,
  bo = null;
function eu() {
  bo = rn = wl = null;
}
function tu(e) {
  var t = yl.current;
  H(yl), (e._currentValue = t);
}
function co(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function fn(e, t) {
  (wl = e),
    (bo = rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null));
}
function Oe(e) {
  var t = e._currentValue;
  if (bo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), rn === null)) {
      if (wl === null) throw Error(y(308));
      (rn = e), (wl.dependencies = { lanes: 0, firstContext: e });
    } else rn = rn.next = e;
  return t;
}
var Dt = null;
function nu(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function _c(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), nu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    tt(e, r)
  );
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var st = !1;
function ru(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ec(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      tt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), nu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    tt(e, n)
  );
}
function Jr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ao(e, n);
  }
}
function va(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Sl(e, t, n, r) {
  var l = e.updateQueue;
  st = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), o === null ? (i = s) : (o.next = s), (o = a);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = s) : (u.next = s),
        (h.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (h = s = a = null), (u = i);
    do {
      var p = u.lane,
        w = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            x = u;
          switch (((p = t), (w = n), x.tag)) {
            case 1:
              if (((S = x.payload), typeof S == "function")) {
                m = S.call(w, m, p);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = x.payload),
                (p = typeof S == "function" ? S.call(w, m, p) : S),
                p == null)
              )
                break e;
              m = Q({}, m, p);
              break e;
            case 2:
              st = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((s = h = w), (a = m)) : (h = h.next = w),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (a = m),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Wt |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function ga(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var Cc = new _s.Component().refs;
function fo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Fl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Yt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = kt(e),
      i = qe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = wt(e, i, l)),
      t !== null && (He(t, e, l, r), Jr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = kt(e),
      i = qe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = wt(e, i, l)),
      t !== null && (He(t, e, l, r), Jr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = kt(e),
      l = qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = wt(e, l, r)),
      t !== null && (He(t, e, r, n), Jr(t, e, r));
  },
};
function ya(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !bn(n, r) || !bn(l, i)
        : !0
  );
}
function Pc(e, t, n) {
  var r = !1,
    l = Ct,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Oe(i))
      : ((l = ye(t) ? Bt : ae.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? hn(e, l) : Ct)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Fl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function wa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Fl.enqueueReplaceState(t, t.state, null);
}
function po(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Cc), ru(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Oe(i))
    : ((i = ye(t) ? Bt : ae.current), (l.context = hn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (fo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Fl.enqueueReplaceState(l, l.state, null),
      Sl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === Cc && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function Dr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Sa(e) {
  var t = e._init;
  return t(e._payload);
}
function Tc(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = xt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, g) {
    return c === null || c.tag !== 6
      ? ((c = Ti(d, f.mode, g)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function a(f, c, d, g) {
    var _ = d.type;
    return _ === Gt
      ? h(f, c, d.props.children, g, d.key)
      : c !== null &&
          (c.elementType === _ ||
            (typeof _ == "object" &&
              _ !== null &&
              _.$$typeof === at &&
              Sa(_) === c.type))
        ? ((g = l(c, d.props)), (g.ref = zn(f, c, d)), (g.return = f), g)
        : ((g = rl(d.type, d.key, d.props, null, f.mode, g)),
          (g.ref = zn(f, c, d)),
          (g.return = f),
          g);
  }
  function s(f, c, d, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = ji(d, f.mode, g)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function h(f, c, d, g, _) {
    return c === null || c.tag !== 7
      ? ((c = $t(d, f.mode, g, _)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function m(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Ti("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Cr:
          return (
            (d = rl(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = zn(f, null, c)),
            (d.return = f),
            d
          );
        case Xt:
          return (c = ji(c, f.mode, d)), (c.return = f), c;
        case at:
          var g = c._init;
          return m(f, g(c._payload), d);
      }
      if (Rn(c) || Cn(c))
        return (c = $t(c, f.mode, d, null)), (c.return = f), c;
      Dr(f, c);
    }
    return null;
  }
  function p(f, c, d, g) {
    var _ = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return _ !== null ? null : u(f, c, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Cr:
          return d.key === _ ? a(f, c, d, g) : null;
        case Xt:
          return d.key === _ ? s(f, c, d, g) : null;
        case at:
          return (_ = d._init), p(f, c, _(d._payload), g);
      }
      if (Rn(d) || Cn(d)) return _ !== null ? null : h(f, c, d, g, null);
      Dr(f, d);
    }
    return null;
  }
  function w(f, c, d, g, _) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(d) || null), u(c, f, "" + g, _);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Cr:
          return (f = f.get(g.key === null ? d : g.key) || null), a(c, f, g, _);
        case Xt:
          return (f = f.get(g.key === null ? d : g.key) || null), s(c, f, g, _);
        case at:
          var k = g._init;
          return w(f, c, d, k(g._payload), _);
      }
      if (Rn(g) || Cn(g)) return (f = f.get(d) || null), h(c, f, g, _, null);
      Dr(c, g);
    }
    return null;
  }
  function S(f, c, d, g) {
    for (
      var _ = null, k = null, E = c, T = (c = 0), I = null;
      E !== null && T < d.length;
      T++
    ) {
      E.index > T ? ((I = E), (E = null)) : (I = E.sibling);
      var N = p(f, E, d[T], g);
      if (N === null) {
        E === null && (E = I);
        break;
      }
      e && E && N.alternate === null && t(f, E),
        (c = i(N, c, T)),
        k === null ? (_ = N) : (k.sibling = N),
        (k = N),
        (E = I);
    }
    if (T === d.length) return n(f, E), B && Mt(f, T), _;
    if (E === null) {
      for (; T < d.length; T++)
        (E = m(f, d[T], g)),
          E !== null &&
            ((c = i(E, c, T)), k === null ? (_ = E) : (k.sibling = E), (k = E));
      return B && Mt(f, T), _;
    }
    for (E = r(f, E); T < d.length; T++)
      (I = w(E, f, T, d[T], g)),
        I !== null &&
          (e && I.alternate !== null && E.delete(I.key === null ? T : I.key),
          (c = i(I, c, T)),
          k === null ? (_ = I) : (k.sibling = I),
          (k = I));
    return (
      e &&
        E.forEach(function (he) {
          return t(f, he);
        }),
      B && Mt(f, T),
      _
    );
  }
  function x(f, c, d, g) {
    var _ = Cn(d);
    if (typeof _ != "function") throw Error(y(150));
    if (((d = _.call(d)), d == null)) throw Error(y(151));
    for (
      var k = (_ = null), E = c, T = (c = 0), I = null, N = d.next();
      E !== null && !N.done;
      T++, N = d.next()
    ) {
      E.index > T ? ((I = E), (E = null)) : (I = E.sibling);
      var he = p(f, E, N.value, g);
      if (he === null) {
        E === null && (E = I);
        break;
      }
      e && E && he.alternate === null && t(f, E),
        (c = i(he, c, T)),
        k === null ? (_ = he) : (k.sibling = he),
        (k = he),
        (E = I);
    }
    if (N.done) return n(f, E), B && Mt(f, T), _;
    if (E === null) {
      for (; !N.done; T++, N = d.next())
        (N = m(f, N.value, g)),
          N !== null &&
            ((c = i(N, c, T)), k === null ? (_ = N) : (k.sibling = N), (k = N));
      return B && Mt(f, T), _;
    }
    for (E = r(f, E); !N.done; T++, N = d.next())
      (N = w(E, f, T, N.value, g)),
        N !== null &&
          (e && N.alternate !== null && E.delete(N.key === null ? T : N.key),
          (c = i(N, c, T)),
          k === null ? (_ = N) : (k.sibling = N),
          (k = N));
    return (
      e &&
        E.forEach(function (lt) {
          return t(f, lt);
        }),
      B && Mt(f, T),
      _
    );
  }
  function L(f, c, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Gt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case Cr:
          e: {
            for (var _ = d.key, k = c; k !== null; ) {
              if (k.key === _) {
                if (((_ = d.type), _ === Gt)) {
                  if (k.tag === 7) {
                    n(f, k.sibling),
                      (c = l(k, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  k.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === at &&
                    Sa(_) === k.type)
                ) {
                  n(f, k.sibling),
                    (c = l(k, d.props)),
                    (c.ref = zn(f, k, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, k);
                break;
              } else t(f, k);
              k = k.sibling;
            }
            d.type === Gt
              ? ((c = $t(d.props.children, f.mode, g, d.key)),
                (c.return = f),
                (f = c))
              : ((g = rl(d.type, d.key, d.props, null, f.mode, g)),
                (g.ref = zn(f, c, d)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case Xt:
          e: {
            for (k = d.key; c !== null; ) {
              if (c.key === k)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = ji(d, f.mode, g)), (c.return = f), (f = c);
          }
          return o(f);
        case at:
          return (k = d._init), L(f, c, k(d._payload), g);
      }
      if (Rn(d)) return S(f, c, d, g);
      if (Cn(d)) return x(f, c, d, g);
      Dr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = Ti(d, f.mode, g)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return L;
}
var vn = Tc(!0),
  jc = Tc(!1),
  pr = {},
  Qe = Tt(pr),
  rr = Tt(pr),
  lr = Tt(pr);
function Ft(e) {
  if (e === pr) throw Error(y(174));
  return e;
}
function lu(e, t) {
  switch ((D(lr, t), D(rr, e), D(Qe, pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Vi(t, e));
  }
  H(Qe), D(Qe, t);
}
function gn() {
  H(Qe), H(rr), H(lr);
}
function Nc(e) {
  Ft(lr.current);
  var t = Ft(Qe.current),
    n = Vi(t, e.type);
  t !== n && (D(rr, e), D(Qe, n));
}
function iu(e) {
  rr.current === e && (H(Qe), H(rr));
}
var W = Tt(0);
function kl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ki = [];
function ou() {
  for (var e = 0; e < ki.length; e++)
    ki[e]._workInProgressVersionPrimary = null;
  ki.length = 0;
}
var qr = rt.ReactCurrentDispatcher,
  xi = rt.ReactCurrentBatchConfig,
  At = 0,
  V = null,
  J = null,
  ee = null,
  xl = !1,
  An = !1,
  ir = 0,
  Wp = 0;
function ie() {
  throw Error(y(321));
}
function uu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!$e(e[n], t[n])) return !1;
  return !0;
}
function au(e, t, n, r, l, i) {
  if (
    ((At = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (qr.current = e === null || e.memoizedState === null ? Kp : Xp),
    (e = n(r, l)),
    An)
  ) {
    i = 0;
    do {
      if (((An = !1), (ir = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (ee = J = null),
        (t.updateQueue = null),
        (qr.current = Gp),
        (e = n(r, l));
    } while (An);
  }
  if (
    ((qr.current = _l),
    (t = J !== null && J.next !== null),
    (At = 0),
    (ee = J = V = null),
    (xl = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function su() {
  var e = ir !== 0;
  return (ir = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (V.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function Le() {
  if (J === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = ee === null ? V.memoizedState : ee.next;
  if (t !== null) (ee = t), (J = e);
  else {
    if (e === null) throw Error(y(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      ee === null ? (V.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _i(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      a = null,
      s = i;
    do {
      var h = s.lane;
      if ((At & h) === h)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var m = {
          lane: h,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = m), (o = r)) : (a = a.next = m),
          (V.lanes |= h),
          (Wt |= h);
      }
      s = s.next;
    } while (s !== null && s !== i);
    a === null ? (o = r) : (a.next = u),
      $e(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (Wt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ei(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    $e(i, t.memoizedState) || (ve = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function zc() {}
function Oc(e, t) {
  var n = V,
    r = Le(),
    l = t(),
    i = !$e(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ve = !0)),
    (r = r.queue),
    cu(Rc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ur(9, Mc.bind(null, n, r, l, t), void 0, null),
      te === null)
    )
      throw Error(y(349));
    At & 30 || Lc(n, t, l);
  }
  return l;
}
function Lc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Mc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ic(t) && Dc(e);
}
function Rc(e, t, n) {
  return n(function () {
    Ic(t) && Dc(e);
  });
}
function Ic(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$e(e, n);
  } catch {
    return !0;
  }
}
function Dc(e) {
  var t = tt(e, 1);
  t !== null && He(t, e, 1, -1);
}
function ka(e) {
  var t = Ue();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: or,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Yp.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function ur(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Fc() {
  return Le().memoizedState;
}
function br(e, t, n, r) {
  var l = Ue();
  (V.flags |= e),
    (l.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r));
}
function Hl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (J !== null) {
    var o = J.memoizedState;
    if (((i = o.destroy), r !== null && uu(r, o.deps))) {
      l.memoizedState = ur(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = ur(1 | t, n, i, r));
}
function xa(e, t) {
  return br(8390656, 8, e, t);
}
function cu(e, t) {
  return Hl(2048, 8, e, t);
}
function Hc(e, t) {
  return Hl(4, 2, e, t);
}
function $c(e, t) {
  return Hl(4, 4, e, t);
}
function Bc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Uc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Hl(4, 4, Bc.bind(null, t, e), n)
  );
}
function fu() {}
function Ac(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && uu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Wc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && uu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vc(e, t, n) {
  return At & 21
    ? ($e(n, t) || ((n = Ks()), (V.lanes |= n), (Wt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function Vp(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = xi.transition;
  xi.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), (xi.transition = r);
  }
}
function Qc() {
  return Le().memoizedState;
}
function Qp(e, t, n) {
  var r = kt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yc(e))
  )
    Kc(t, n);
  else if (((n = _c(e, t, n, r)), n !== null)) {
    var l = fe();
    He(n, e, r, l), Xc(n, t, r);
  }
}
function Yp(e, t, n) {
  var r = kt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yc(e)) Kc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), $e(u, o))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), nu(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = _c(e, t, l, r)),
      n !== null && ((l = fe()), He(n, e, r, l), Xc(n, t, r));
  }
}
function Yc(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function Kc(e, t) {
  An = xl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Xc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ao(e, n);
  }
}
var _l = {
    readContext: Oe,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  Kp = {
    readContext: Oe,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Oe,
    useEffect: xa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        br(4194308, 4, Bc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return br(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return br(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ue();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Qp.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ka,
    useDebugValue: fu,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = ka(!1),
        t = e[0];
      return (e = Vp.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = Ue();
      if (B) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(y(349));
        At & 30 || Lc(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        xa(Rc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ur(9, Mc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = te.identifierPrefix;
      if (B) {
        var n = Je,
          r = Ze;
        (n = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Wp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xp = {
    readContext: Oe,
    useCallback: Ac,
    useContext: Oe,
    useEffect: cu,
    useImperativeHandle: Uc,
    useInsertionEffect: Hc,
    useLayoutEffect: $c,
    useMemo: Wc,
    useReducer: _i,
    useRef: Fc,
    useState: function () {
      return _i(or);
    },
    useDebugValue: fu,
    useDeferredValue: function (e) {
      var t = Le();
      return Vc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = _i(or)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: zc,
    useSyncExternalStore: Oc,
    useId: Qc,
    unstable_isNewReconciler: !1,
  },
  Gp = {
    readContext: Oe,
    useCallback: Ac,
    useContext: Oe,
    useEffect: cu,
    useImperativeHandle: Uc,
    useInsertionEffect: Hc,
    useLayoutEffect: $c,
    useMemo: Wc,
    useReducer: Ei,
    useRef: Fc,
    useState: function () {
      return Ei(or);
    },
    useDebugValue: fu,
    useDeferredValue: function (e) {
      var t = Le();
      return J === null ? (t.memoizedState = e) : Vc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Ei(or)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: zc,
    useSyncExternalStore: Oc,
    useId: Qc,
    unstable_isNewReconciler: !1,
  };
function yn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += _d(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ci(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ho(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Zp = typeof WeakMap == "function" ? WeakMap : Map;
function Gc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Cl || ((Cl = !0), (Eo = r)), ho(e, t);
    }),
    n
  );
}
function Zc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ho(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ho(e, t),
          typeof r != "function" &&
            (St === null ? (St = new Set([this])) : St.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function _a(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = c1.bind(null, e, t, n)), t.then(e, e));
}
function Ea(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ca(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qe(-1, 1)), (t.tag = 2), wt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Jp = rt.ReactCurrentOwner,
  ve = !1;
function ce(e, t, n, r) {
  t.child = e === null ? jc(t, null, n, r) : vn(t, e.child, n, r);
}
function Pa(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    fn(t, l),
    (r = au(e, t, n, r, i, l)),
    (n = su()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : (B && n && Zo(t), (t.flags |= 1), ce(e, t, r, l), t.child)
  );
}
function Ta(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !wu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Jc(e, t, i, r, l))
      : ((e = rl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(o, r) && e.ref === t.ref)
    )
      return nt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = xt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Jc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bn(i, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), nt(e, t, l);
  }
  return mo(e, t, n, r, l);
}
function qc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(on, Se),
        (Se |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(on, Se),
          (Se |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        D(on, Se),
        (Se |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(on, Se),
      (Se |= r);
  return ce(e, t, l, n), t.child;
}
function bc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function mo(e, t, n, r, l) {
  var i = ye(n) ? Bt : ae.current;
  return (
    (i = hn(t, i)),
    fn(t, l),
    (n = au(e, t, n, r, i, l)),
    (r = su()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : (B && r && Zo(t), (t.flags |= 1), ce(e, t, n, l), t.child)
  );
}
function ja(e, t, n, r, l) {
  if (ye(n)) {
    var i = !0;
    ml(t);
  } else i = !1;
  if ((fn(t, l), t.stateNode === null))
    el(e, t), Pc(t, n, r), po(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var a = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Oe(s))
      : ((s = ye(n) ? Bt : ae.current), (s = hn(t, s)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && wa(t, o, r, s)),
      (st = !1);
    var p = t.memoizedState;
    (o.state = p),
      Sl(t, r, o, l),
      (a = t.memoizedState),
      u !== r || p !== a || ge.current || st
        ? (typeof h == "function" && (fo(t, n, h, r), (a = t.memoizedState)),
          (u = st || ya(t, n, u, r, p, a, s))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = s),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Ec(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : Re(t.type, u)),
      (o.props = s),
      (m = t.pendingProps),
      (p = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Oe(a))
        : ((a = ye(n) ? Bt : ae.current), (a = hn(t, a)));
    var w = n.getDerivedStateFromProps;
    (h =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== m || p !== a) && wa(t, o, r, a)),
      (st = !1),
      (p = t.memoizedState),
      (o.state = p),
      Sl(t, r, o, l);
    var S = t.memoizedState;
    u !== m || p !== S || ge.current || st
      ? (typeof w == "function" && (fo(t, n, w, r), (S = t.memoizedState)),
        (s = st || ya(t, n, s, r, p, S, a) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, S, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = a),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vo(e, t, n, r, i, l);
}
function vo(e, t, n, r, l, i) {
  bc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && pa(t, n, !1), nt(e, t, i);
  (r = t.stateNode), (Jp.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = vn(t, e.child, null, i)), (t.child = vn(t, null, u, i)))
      : ce(e, t, u, i),
    (t.memoizedState = r.state),
    l && pa(t, n, !0),
    t.child
  );
}
function ef(e) {
  var t = e.stateNode;
  t.pendingContext
    ? da(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && da(e, t.context, !1),
    lu(e, t.containerInfo);
}
function Na(e, t, n, r, l) {
  return mn(), qo(l), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var go = { dehydrated: null, treeContext: null, retryLane: 0 };
function yo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tf(e, t, n) {
  var r = t.pendingProps,
    l = W.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(W, l & 1),
    e === null)
  )
    return (
      so(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Ul(o, r, 0, null)),
              (e = $t(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = yo(n)),
              (t.memoizedState = go),
              e)
            : du(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return qp(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = xt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = xt(u, i)) : ((i = $t(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? yo(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = go),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = xt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function du(e, t) {
  return (
    (t = Ul({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Fr(e, t, n, r) {
  return (
    r !== null && qo(r),
    vn(t, e.child, null, n),
    (e = du(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function qp(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ci(Error(y(422)))), Fr(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Ul({ mode: "visible", children: r.children }, l, 0, null)),
          (i = $t(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && vn(t, e.child, null, o),
          (t.child.memoizedState = yo(o)),
          (t.memoizedState = go),
          i);
  if (!(t.mode & 1)) return Fr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Ci(i, r, void 0)), Fr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ve || u)) {
    if (((r = te), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), tt(e, l), He(r, e, l, -1));
    }
    return yu(), (r = Ci(Error(y(421)))), Fr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = f1.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ke = yt(l.nextSibling)),
      (xe = t),
      (B = !0),
      (De = null),
      e !== null &&
        ((Te[je++] = Ze),
        (Te[je++] = Je),
        (Te[je++] = Ut),
        (Ze = e.id),
        (Je = e.overflow),
        (Ut = t)),
      (t = du(t, r.children)),
      (t.flags |= 4096),
      t);
}
function za(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), co(e.return, t, n);
}
function Pi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function nf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ce(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && za(e, n, t);
        else if (e.tag === 19) za(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && kl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Pi(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && kl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Pi(t, !0, n, null, i);
        break;
      case "together":
        Pi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function el(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Wt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function bp(e, t, n) {
  switch (t.tag) {
    case 3:
      ef(t), mn();
      break;
    case 5:
      Nc(t);
      break;
    case 1:
      ye(t.type) && ml(t);
      break;
    case 4:
      lu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(yl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? tf(e, t, n)
            : (D(W, W.current & 1),
              (e = nt(e, t, n)),
              e !== null ? e.sibling : null);
      D(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return nf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), qc(e, t, n);
  }
  return nt(e, t, n);
}
var rf, wo, lf, of;
rf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
wo = function () {};
lf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ft(Qe.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Bi(e, l)), (r = Bi(e, r)), (i = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Wi(e, l)), (r = Wi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = pl);
    }
    Qi(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Yn.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                u[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(s, a))
            : s === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (i = i || []).push(s, "" + a)
              : s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                (Yn.hasOwnProperty(s)
                  ? (a != null && s === "onScroll" && F("scroll", e),
                    i || u === a || (i = []))
                  : (i = i || []).push(s, a));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
of = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function On(e, t) {
  if (!B)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function e1(e, t, n) {
  var r = t.pendingProps;
  switch ((Jo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return ye(t.type) && hl(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        gn(),
        H(ge),
        H(ae),
        ou(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ir(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (To(De), (De = null)))),
        wo(e, t),
        oe(t),
        null
      );
    case 5:
      iu(t);
      var l = Ft(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        lf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return oe(t), null;
        }
        if (((e = Ft(Qe.current)), Ir(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[We] = t), (r[nr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Dn.length; l++) F(Dn[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              $u(r, i), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              Uu(r, i), F("invalid", r);
          }
          Qi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Rr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Rr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Yn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              Pr(r), Bu(r, i, !0);
              break;
            case "textarea":
              Pr(r), Au(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = pl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ls(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[We] = t),
            (e[nr] = r),
            rf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Yi(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Dn.length; l++) F(Dn[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                $u(e, r), (l = Bi(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                Uu(e, r), (l = Wi(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            Qi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style"
                  ? Is(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Ms(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Kn(e, a)
                        : typeof a == "number" && Kn(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Yn.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && F("scroll", e)
                          : a != null && Do(e, i, a, o));
              }
            switch (n) {
              case "input":
                Pr(e), Bu(e, r, !1);
                break;
              case "textarea":
                Pr(e), Au(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Et(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? un(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      un(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = pl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) of(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Ft(lr.current)), Ft(Qe.current), Ir(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[We] = t),
            (i = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Rr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[We] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (H(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && ke !== null && t.mode & 1 && !(t.flags & 128))
          xc(), mn(), (t.flags |= 98560), (i = !1);
        else if (((i = Ir(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[We] = t;
          } else
            mn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (i = !1);
        } else De !== null && (To(De), (De = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? q === 0 && (q = 3) : yu())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        gn(), wo(e, t), e === null && er(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return tu(t.type._context), oe(t), null;
    case 17:
      return ye(t.type) && hl(), oe(t), null;
    case 19:
      if ((H(W), (i = t.memoizedState), i === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) On(i, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = kl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    On(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            G() > wn &&
            ((t.flags |= 128), (r = !0), On(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = kl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              On(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !B)
            )
              return oe(t), null;
          } else
            2 * G() - i.renderingStartTime > wn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), On(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = G()),
          (t.sibling = null),
          (n = W.current),
          D(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        gu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Se & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function t1(e, t) {
  switch ((Jo(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && hl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        gn(),
        H(ge),
        H(ae),
        ou(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return iu(t), null;
    case 13:
      if ((H(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        mn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(W), null;
    case 4:
      return gn(), null;
    case 10:
      return tu(t.type._context), null;
    case 22:
    case 23:
      return gu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hr = !1,
  ue = !1,
  n1 = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function ln(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function So(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var Oa = !1;
function r1(e, t) {
  if (((no = cl), (e = sc()), Go(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            a = -1,
            s = 0,
            h = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (a = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (p = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++s === l && (u = o),
                p === i && ++h === r && (a = o),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = w;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ro = { focusedElem: e, selectionRange: n }, cl = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var x = S.memoizedProps,
                    L = S.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Re(t.type, x),
                      L,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          K(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (S = Oa), (Oa = !1), S;
}
function Wn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && So(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function $l(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ko(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function uf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), uf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[We], delete t[nr], delete t[oo], delete t[$p], delete t[Bp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function af(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function La(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || af(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function xo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = pl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xo(e, t, n), e = e.sibling; e !== null; ) xo(e, t, n), (e = e.sibling);
}
function _o(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_o(e, t, n), e = e.sibling; e !== null; ) _o(e, t, n), (e = e.sibling);
}
var ne = null,
  Ie = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) sf(e, t, n), (n = n.sibling);
}
function sf(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(Ol, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || ln(n, t);
    case 6:
      var r = ne,
        l = Ie;
      (ne = null),
        it(e, t, n),
        (ne = r),
        (Ie = l),
        ne !== null &&
          (Ie
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (Ie
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? wi(e.parentNode, n)
              : e.nodeType === 1 && wi(e, n),
            Jn(e))
          : wi(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (l = Ie),
        (ne = n.stateNode.containerInfo),
        (Ie = !0),
        it(e, t, n),
        (ne = r),
        (Ie = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && So(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      it(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (ln(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          K(n, t, u);
        }
      it(e, t, n);
      break;
    case 21:
      it(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), it(e, t, n), (ue = r))
        : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function Ma(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new n1()),
      t.forEach(function (r) {
        var l = d1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Me(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ne = u.stateNode), (Ie = !1);
              break e;
            case 3:
              (ne = u.stateNode.containerInfo), (Ie = !0);
              break e;
            case 4:
              (ne = u.stateNode.containerInfo), (Ie = !0);
              break e;
          }
          u = u.return;
        }
        if (ne === null) throw Error(y(160));
        sf(i, o, l), (ne = null), (Ie = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        K(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cf(t, e), (t = t.sibling);
}
function cf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Me(t, e), Be(e), r & 4)) {
        try {
          Wn(3, e, e.return), $l(3, e);
        } catch (x) {
          K(e, e.return, x);
        }
        try {
          Wn(5, e, e.return);
        } catch (x) {
          K(e, e.return, x);
        }
      }
      break;
    case 1:
      Me(t, e), Be(e), r & 512 && n !== null && ln(n, n.return);
      break;
    case 5:
      if (
        (Me(t, e),
        Be(e),
        r & 512 && n !== null && ln(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Kn(l, "");
        } catch (x) {
          K(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && zs(l, i),
              Yi(u, o);
            var s = Yi(u, i);
            for (o = 0; o < a.length; o += 2) {
              var h = a[o],
                m = a[o + 1];
              h === "style"
                ? Is(l, m)
                : h === "dangerouslySetInnerHTML"
                  ? Ms(l, m)
                  : h === "children"
                    ? Kn(l, m)
                    : Do(l, h, m, s);
            }
            switch (u) {
              case "input":
                Ui(l, i);
                break;
              case "textarea":
                Os(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? un(l, !!i.multiple, w, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? un(l, !!i.multiple, i.defaultValue, !0)
                      : un(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[nr] = i;
          } catch (x) {
            K(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Me(t, e), Be(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (x) {
          K(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Me(t, e), Be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jn(t.containerInfo);
        } catch (x) {
          K(e, e.return, x);
        }
      break;
    case 4:
      Me(t, e), Be(e);
      break;
    case 13:
      Me(t, e),
        Be(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (mu = G())),
        r & 4 && Ma(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (s = ue) || h), Me(t, e), (ue = s)) : Me(t, e),
        Be(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !h && e.mode & 1)
        )
          for (C = e, h = e.child; h !== null; ) {
            for (m = C = h; C !== null; ) {
              switch (((p = C), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wn(4, p, p.return);
                  break;
                case 1:
                  ln(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (x) {
                      K(r, n, x);
                    }
                  }
                  break;
                case 5:
                  ln(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ia(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (C = w)) : Ia(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = m.stateNode),
                      (a = m.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = Rs("display", o)));
              } catch (x) {
                K(e, e.return, x);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = s ? "" : m.memoizedProps;
              } catch (x) {
                K(e, e.return, x);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Me(t, e), Be(e), r & 4 && Ma(e);
      break;
    case 21:
      break;
    default:
      Me(t, e), Be(e);
  }
}
function Be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (af(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Kn(l, ""), (r.flags &= -33));
          var i = La(e);
          _o(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = La(e);
          xo(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (a) {
      K(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function l1(e, t, n) {
  (C = e), ff(e);
}
function ff(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Hr;
      if (!o) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || ue;
        u = Hr;
        var s = ue;
        if (((Hr = o), (ue = a) && !s))
          for (C = l; C !== null; )
            (o = C),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Da(l)
                : a !== null
                  ? ((a.return = o), (C = a))
                  : Da(l);
        for (; i !== null; ) (C = i), ff(i), (i = i.sibling);
        (C = l), (Hr = u), (ue = s);
      }
      Ra(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (C = i)) : Ra(e);
  }
}
function Ra(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || $l(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && ga(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ga(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var h = s.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Jn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        ue || (t.flags & 512 && ko(t));
      } catch (p) {
        K(t, t.return, p);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Ia(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Da(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            $l(4, t);
          } catch (a) {
            K(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              K(t, l, a);
            }
          }
          var i = t.return;
          try {
            ko(t);
          } catch (a) {
            K(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ko(t);
          } catch (a) {
            K(t, o, a);
          }
      }
    } catch (a) {
      K(t, t.return, a);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (C = u);
      break;
    }
    C = t.return;
  }
}
var i1 = Math.ceil,
  El = rt.ReactCurrentDispatcher,
  pu = rt.ReactCurrentOwner,
  ze = rt.ReactCurrentBatchConfig,
  M = 0,
  te = null,
  Z = null,
  re = 0,
  Se = 0,
  on = Tt(0),
  q = 0,
  ar = null,
  Wt = 0,
  Bl = 0,
  hu = 0,
  Vn = null,
  me = null,
  mu = 0,
  wn = 1 / 0,
  Xe = null,
  Cl = !1,
  Eo = null,
  St = null,
  $r = !1,
  pt = null,
  Pl = 0,
  Qn = 0,
  Co = null,
  tl = -1,
  nl = 0;
function fe() {
  return M & 6 ? G() : tl !== -1 ? tl : (tl = G());
}
function kt(e) {
  return e.mode & 1
    ? M & 2 && re !== 0
      ? re & -re
      : Ap.transition !== null
        ? (nl === 0 && (nl = Ks()), nl)
        : ((e = R),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ec(e.type))),
          e)
    : 1;
}
function He(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (Co = null), Error(y(185)));
  cr(e, n, r),
    (!(M & 2) || e !== te) &&
      (e === te && (!(M & 2) && (Bl |= n), q === 4 && ft(e, re)),
      we(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((wn = G() + 500), Dl && jt()));
}
function we(e, t) {
  var n = e.callbackNode;
  Ad(e, t);
  var r = sl(e, e === te ? re : 0);
  if (r === 0)
    n !== null && Qu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Qu(n), t === 1))
      e.tag === 0 ? Up(Fa.bind(null, e)) : wc(Fa.bind(null, e)),
        Fp(function () {
          !(M & 6) && jt();
        }),
        (n = null);
    else {
      switch (Xs(r)) {
        case 1:
          n = Uo;
          break;
        case 4:
          n = Qs;
          break;
        case 16:
          n = al;
          break;
        case 536870912:
          n = Ys;
          break;
        default:
          n = al;
      }
      n = wf(n, df.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function df(e, t) {
  if (((tl = -1), (nl = 0), M & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (dn() && e.callbackNode !== n) return null;
  var r = sl(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Tl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = hf();
    (te !== e || re !== t) && ((Xe = null), (wn = G() + 500), Ht(e, t));
    do
      try {
        a1();
        break;
      } catch (u) {
        pf(e, u);
      }
    while (!0);
    eu(),
      (El.current = i),
      (M = l),
      Z !== null ? (t = 0) : ((te = null), (re = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ji(e)), l !== 0 && ((r = l), (t = Po(e, l)))), t === 1)
    )
      throw ((n = ar), Ht(e, 0), ft(e, r), we(e, G()), n);
    if (t === 6) ft(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !o1(l) &&
          ((t = Tl(e, r)),
          t === 2 && ((i = Ji(e)), i !== 0 && ((r = i), (t = Po(e, i)))),
          t === 1))
      )
        throw ((n = ar), Ht(e, 0), ft(e, r), we(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Rt(e, me, Xe);
          break;
        case 3:
          if (
            (ft(e, r), (r & 130023424) === r && ((t = mu + 500 - G()), 10 < t))
          ) {
            if (sl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = io(Rt.bind(null, e, me, Xe), t);
            break;
          }
          Rt(e, me, Xe);
          break;
        case 4:
          if ((ft(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Fe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * i1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = io(Rt.bind(null, e, me, Xe), r);
            break;
          }
          Rt(e, me, Xe);
          break;
        case 5:
          Rt(e, me, Xe);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return we(e, G()), e.callbackNode === n ? df.bind(null, e) : null;
}
function Po(e, t) {
  var n = Vn;
  return (
    e.current.memoizedState.isDehydrated && (Ht(e, t).flags |= 256),
    (e = Tl(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && To(t)),
    e
  );
}
function To(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function o1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!$e(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ft(e, t) {
  for (
    t &= ~hu,
      t &= ~Bl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Fe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Fa(e) {
  if (M & 6) throw Error(y(327));
  dn();
  var t = sl(e, 0);
  if (!(t & 1)) return we(e, G()), null;
  var n = Tl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ji(e);
    r !== 0 && ((t = r), (n = Po(e, r)));
  }
  if (n === 1) throw ((n = ar), Ht(e, 0), ft(e, t), we(e, G()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rt(e, me, Xe),
    we(e, G()),
    null
  );
}
function vu(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((wn = G() + 500), Dl && jt());
  }
}
function Vt(e) {
  pt !== null && pt.tag === 0 && !(M & 6) && dn();
  var t = M;
  M |= 1;
  var n = ze.transition,
    r = R;
  try {
    if (((ze.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (ze.transition = n), (M = t), !(M & 6) && jt();
  }
}
function gu() {
  (Se = on.current), H(on);
}
function Ht(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Dp(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((Jo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && hl();
          break;
        case 3:
          gn(), H(ge), H(ae), ou();
          break;
        case 5:
          iu(r);
          break;
        case 4:
          gn();
          break;
        case 13:
          H(W);
          break;
        case 19:
          H(W);
          break;
        case 10:
          tu(r.type._context);
          break;
        case 22:
        case 23:
          gu();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (Z = e = xt(e.current, null)),
    (re = Se = t),
    (q = 0),
    (ar = null),
    (hu = Bl = Wt = 0),
    (me = Vn = null),
    Dt !== null)
  ) {
    for (t = 0; t < Dt.length; t++)
      if (((n = Dt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Dt = null;
  }
  return e;
}
function pf(e, t) {
  do {
    var n = Z;
    try {
      if ((eu(), (qr.current = _l), xl)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        xl = !1;
      }
      if (
        ((At = 0),
        (ee = J = V = null),
        (An = !1),
        (ir = 0),
        (pu.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (ar = t), (Z = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          a = t;
        if (
          ((t = re),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var w = Ea(o);
          if (w !== null) {
            (w.flags &= -257),
              Ca(w, o, u, i, t),
              w.mode & 1 && _a(i, s, t),
              (t = w),
              (a = s);
            var S = t.updateQueue;
            if (S === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              _a(i, s, t), yu();
              break e;
            }
            a = Error(y(426));
          }
        } else if (B && u.mode & 1) {
          var L = Ea(o);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              Ca(L, o, u, i, t),
              qo(yn(a, u));
            break e;
          }
        }
        (i = a = yn(a, u)),
          q !== 4 && (q = 2),
          Vn === null ? (Vn = [i]) : Vn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Gc(i, a, t);
              va(i, f);
              break e;
            case 1:
              u = a;
              var c = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (St === null || !St.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Zc(i, u, t);
                va(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      vf(n);
    } catch (_) {
      (t = _), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function hf() {
  var e = El.current;
  return (El.current = _l), e === null ? _l : e;
}
function yu() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    te === null || (!(Wt & 268435455) && !(Bl & 268435455)) || ft(te, re);
}
function Tl(e, t) {
  var n = M;
  M |= 2;
  var r = hf();
  (te !== e || re !== t) && ((Xe = null), Ht(e, t));
  do
    try {
      u1();
      break;
    } catch (l) {
      pf(e, l);
    }
  while (!0);
  if ((eu(), (M = n), (El.current = r), Z !== null)) throw Error(y(261));
  return (te = null), (re = 0), q;
}
function u1() {
  for (; Z !== null; ) mf(Z);
}
function a1() {
  for (; Z !== null && !Md(); ) mf(Z);
}
function mf(e) {
  var t = yf(e.alternate, e, Se);
  (e.memoizedProps = e.pendingProps),
    t === null ? vf(e) : (Z = t),
    (pu.current = null);
}
function vf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = t1(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (Z = null);
        return;
      }
    } else if (((n = e1(n, t, Se)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function Rt(e, t, n) {
  var r = R,
    l = ze.transition;
  try {
    (ze.transition = null), (R = 1), s1(e, t, n, r);
  } finally {
    (ze.transition = l), (R = r);
  }
  return null;
}
function s1(e, t, n, r) {
  do dn();
  while (pt !== null);
  if (M & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Wd(e, i),
    e === te && ((Z = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      $r ||
      (($r = !0),
      wf(al, function () {
        return dn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ze.transition), (ze.transition = null);
    var o = R;
    R = 1;
    var u = M;
    (M |= 4),
      (pu.current = null),
      r1(e, n),
      cf(n, e),
      Np(ro),
      (cl = !!no),
      (ro = no = null),
      (e.current = n),
      l1(n),
      Rd(),
      (M = u),
      (R = o),
      (ze.transition = i);
  } else e.current = n;
  if (
    ($r && (($r = !1), (pt = e), (Pl = l)),
    (i = e.pendingLanes),
    i === 0 && (St = null),
    Fd(n.stateNode),
    we(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Cl) throw ((Cl = !1), (e = Eo), (Eo = null), e);
  return (
    Pl & 1 && e.tag !== 0 && dn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Co ? Qn++ : ((Qn = 0), (Co = e))) : (Qn = 0),
    jt(),
    null
  );
}
function dn() {
  if (pt !== null) {
    var e = Xs(Pl),
      t = ze.transition,
      n = R;
    try {
      if (((ze.transition = null), (R = 16 > e ? 16 : e), pt === null))
        var r = !1;
      else {
        if (((e = pt), (pt = null), (Pl = 0), M & 6)) throw Error(y(331));
        var l = M;
        for (M |= 4, C = e.current; C !== null; ) {
          var i = C,
            o = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (C = s; C !== null; ) {
                  var h = C;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wn(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (C = m);
                  else
                    for (; C !== null; ) {
                      h = C;
                      var p = h.sibling,
                        w = h.return;
                      if ((uf(h), h === s)) {
                        C = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (C = p);
                        break;
                      }
                      C = w;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var x = S.child;
                if (x !== null) {
                  S.child = null;
                  do {
                    var L = x.sibling;
                    (x.sibling = null), (x = L);
                  } while (x !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (C = o);
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (C = f);
                break e;
              }
              C = i.return;
            }
        }
        var c = e.current;
        for (C = c; C !== null; ) {
          o = C;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (C = d);
          else
            e: for (o = c; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $l(9, u);
                  }
                } catch (_) {
                  K(u, u.return, _);
                }
              if (u === o) {
                C = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (C = g);
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((M = l), jt(), Ve && typeof Ve.onPostCommitFiberRoot == "function")
        )
          try {
            Ve.onPostCommitFiberRoot(Ol, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (ze.transition = t);
    }
  }
  return !1;
}
function Ha(e, t, n) {
  (t = yn(n, t)),
    (t = Gc(e, t, 1)),
    (e = wt(e, t, 1)),
    (t = fe()),
    e !== null && (cr(e, 1, t), we(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) Ha(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ha(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (St === null || !St.has(r)))
        ) {
          (e = yn(n, e)),
            (e = Zc(t, e, 1)),
            (t = wt(t, e, 1)),
            (e = fe()),
            t !== null && (cr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function c1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (q === 4 || (q === 3 && (re & 130023424) === re && 500 > G() - mu)
        ? Ht(e, 0)
        : (hu |= n)),
    we(e, t);
}
function gf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Nr), (Nr <<= 1), !(Nr & 130023424) && (Nr = 4194304))
      : (t = 1));
  var n = fe();
  (e = tt(e, t)), e !== null && (cr(e, t, n), we(e, n));
}
function f1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), gf(e, n);
}
function d1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), gf(e, n);
}
var yf;
yf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ge.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ve = !1), bp(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), B && t.flags & 1048576 && Sc(t, gl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      el(e, t), (e = t.pendingProps);
      var l = hn(t, ae.current);
      fn(t, n), (l = au(null, t, r, e, l, n));
      var i = su();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((i = !0), ml(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ru(t),
            (l.updater = Fl),
            (t.stateNode = l),
            (l._reactInternals = t),
            po(t, r, e, n),
            (t = vo(null, t, r, !0, i, n)))
          : ((t.tag = 0), B && i && Zo(t), ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (el(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = h1(r)),
          (e = Re(r, e)),
          l)
        ) {
          case 0:
            t = mo(null, t, r, e, n);
            break e;
          case 1:
            t = ja(null, t, r, e, n);
            break e;
          case 11:
            t = Pa(null, t, r, e, n);
            break e;
          case 14:
            t = Ta(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        mo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        ja(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ef(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Ec(e, t),
          Sl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = yn(Error(y(423)), t)), (t = Na(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = yn(Error(y(424)), t)), (t = Na(e, t, r, n, l));
            break e;
          } else
            for (
              ke = yt(t.stateNode.containerInfo.firstChild),
                xe = t,
                B = !0,
                De = null,
                n = jc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((mn(), r === l)) {
            t = nt(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Nc(t),
        e === null && so(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        lo(r, l) ? (o = null) : i !== null && lo(r, i) && (t.flags |= 32),
        bc(e, t),
        ce(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && so(t), null;
    case 13:
      return tf(e, t, n);
    case 4:
      return (
        lu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Pa(e, t, r, l, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          D(yl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if ($e(i.value, o)) {
            if (i.children === l.children && !ge.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = qe(-1, n & -n)), (a.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var h = s.pending;
                        h === null
                          ? (a.next = a)
                          : ((a.next = h.next), (h.next = a)),
                          (s.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      co(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  co(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ce(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        fn(t, n),
        (l = Oe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Re(r, t.pendingProps)),
        (l = Re(r.type, l)),
        Ta(e, t, r, l, n)
      );
    case 15:
      return Jc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        el(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), ml(t)) : (e = !1),
        fn(t, n),
        Pc(t, r, l),
        po(t, r, l, n),
        vo(null, t, r, !0, e, n)
      );
    case 19:
      return nf(e, t, n);
    case 22:
      return qc(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function wf(e, t) {
  return Vs(e, t);
}
function p1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ne(e, t, n, r) {
  return new p1(e, t, n, r);
}
function wu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function h1(e) {
  if (typeof e == "function") return wu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ho)) return 11;
    if (e === $o) return 14;
  }
  return 2;
}
function xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ne(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function rl(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) wu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Gt:
        return $t(n.children, l, i, t);
      case Fo:
        (o = 8), (l |= 8);
        break;
      case Di:
        return (
          (e = Ne(12, n, t, l | 2)), (e.elementType = Di), (e.lanes = i), e
        );
      case Fi:
        return (e = Ne(13, n, t, l)), (e.elementType = Fi), (e.lanes = i), e;
      case Hi:
        return (e = Ne(19, n, t, l)), (e.elementType = Hi), (e.lanes = i), e;
      case Ts:
        return Ul(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Cs:
              o = 10;
              break e;
            case Ps:
              o = 9;
              break e;
            case Ho:
              o = 11;
              break e;
            case $o:
              o = 14;
              break e;
            case at:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ne(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function $t(e, t, n, r) {
  return (e = Ne(7, e, r, t)), (e.lanes = n), e;
}
function Ul(e, t, n, r) {
  return (
    (e = Ne(22, e, r, t)),
    (e.elementType = Ts),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ti(e, t, n) {
  return (e = Ne(6, e, null, t)), (e.lanes = n), e;
}
function ji(e, t, n) {
  return (
    (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function m1(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ai(0)),
    (this.expirationTimes = ai(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ai(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Su(e, t, n, r, l, i, o, u, a) {
  return (
    (e = new m1(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ne(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ru(i),
    e
  );
}
function v1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Xt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Sf(e) {
  if (!e) return Ct;
  e = e._reactInternals;
  e: {
    if (Yt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return yc(e, n, t);
  }
  return t;
}
function kf(e, t, n, r, l, i, o, u, a) {
  return (
    (e = Su(n, r, !0, e, l, i, o, u, a)),
    (e.context = Sf(null)),
    (n = e.current),
    (r = fe()),
    (l = kt(n)),
    (i = qe(r, l)),
    (i.callback = t ?? null),
    wt(n, i, l),
    (e.current.lanes = l),
    cr(e, l, r),
    we(e, r),
    e
  );
}
function Al(e, t, n, r) {
  var l = t.current,
    i = fe(),
    o = kt(l);
  return (
    (n = Sf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = wt(l, t, o)),
    e !== null && (He(e, l, o, i), Jr(e, l, o)),
    o
  );
}
function jl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $a(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ku(e, t) {
  $a(e, t), (e = e.alternate) && $a(e, t);
}
function g1() {
  return null;
}
var xf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function xu(e) {
  this._internalRoot = e;
}
Wl.prototype.render = xu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  Al(e, t, null, null);
};
Wl.prototype.unmount = xu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Vt(function () {
      Al(null, e, null, null);
    }),
      (t[et] = null);
  }
};
function Wl(e) {
  this._internalRoot = e;
}
Wl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Js();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++);
    ct.splice(n, 0, e), n === 0 && bs(e);
  }
};
function _u(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Vl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ba() {}
function y1(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = jl(o);
        i.call(s);
      };
    }
    var o = kf(t, r, e, 0, null, !1, !1, "", Ba);
    return (
      (e._reactRootContainer = o),
      (e[et] = o.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      Vt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = jl(a);
      u.call(s);
    };
  }
  var a = Su(e, 0, !1, null, null, !1, !1, "", Ba);
  return (
    (e._reactRootContainer = a),
    (e[et] = a.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    Vt(function () {
      Al(t, a, n, r);
    }),
    a
  );
}
function Ql(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = jl(o);
        u.call(a);
      };
    }
    Al(t, o, e, l);
  } else o = y1(n, t, e, l, r);
  return jl(o);
}
Gs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = In(t.pendingLanes);
        n !== 0 &&
          (Ao(t, n | 1), we(t, G()), !(M & 6) && ((wn = G() + 500), jt()));
      }
      break;
    case 13:
      Vt(function () {
        var r = tt(e, 1);
        if (r !== null) {
          var l = fe();
          He(r, e, 1, l);
        }
      }),
        ku(e, 1);
  }
};
Wo = function (e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = fe();
      He(t, e, 134217728, n);
    }
    ku(e, 134217728);
  }
};
Zs = function (e) {
  if (e.tag === 13) {
    var t = kt(e),
      n = tt(e, t);
    if (n !== null) {
      var r = fe();
      He(n, e, t, r);
    }
    ku(e, t);
  }
};
Js = function () {
  return R;
};
qs = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
Xi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ui(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Il(r);
            if (!l) throw Error(y(90));
            Ns(r), Ui(r, l);
          }
        }
      }
      break;
    case "textarea":
      Os(e, n);
      break;
    case "select":
      (t = n.value), t != null && un(e, !!n.multiple, t, !1);
  }
};
Hs = vu;
$s = Vt;
var w1 = { usingClientEntryPoint: !1, Events: [dr, bt, Il, Ds, Fs, vu] },
  Ln = {
    findFiberByHostInstance: It,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  S1 = {
    bundleType: Ln.bundleType,
    version: Ln.version,
    rendererPackageName: Ln.rendererPackageName,
    rendererConfig: Ln.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = As(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ln.findFiberByHostInstance || g1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Br = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Br.isDisabled && Br.supportsFiber)
    try {
      (Ol = Br.inject(S1)), (Ve = Br);
    } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w1;
Ee.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_u(t)) throw Error(y(200));
  return v1(e, t, null, n);
};
Ee.createRoot = function (e, t) {
  if (!_u(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = xf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Su(e, 1, !1, null, null, n, !1, r, l)),
    (e[et] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new xu(t)
  );
};
Ee.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = As(t)), (e = e === null ? null : e.stateNode), e;
};
Ee.flushSync = function (e) {
  return Vt(e);
};
Ee.hydrate = function (e, t, n) {
  if (!Vl(t)) throw Error(y(200));
  return Ql(null, e, t, !0, n);
};
Ee.hydrateRoot = function (e, t, n) {
  if (!_u(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = xf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = kf(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[et] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Wl(t);
};
Ee.render = function (e, t, n) {
  if (!Vl(t)) throw Error(y(200));
  return Ql(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function (e) {
  if (!Vl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Vt(function () {
        Ql(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[et] = null);
        });
      }),
      !0)
    : !1;
};
Ee.unstable_batchedUpdates = vu;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Vl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return Ql(e, t, n, !1, r);
};
Ee.version = "18.2.0-next-9e3b772b8-20220608";
function _f() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_f);
    } catch (e) {
      console.error(e);
    }
}
_f(), (Ss.exports = Ee);
var Ef = Ss.exports,
  Ua = Ef;
(Ri.createRoot = Ua.createRoot), (Ri.hydrateRoot = Ua.hydrateRoot);
const k1 = () =>
  v.jsx("div", {
    name: "about",
    className:
      " mb-10 flex h-auto min-h-[90vh] w-full items-center bg-[#0a192f]  text-gray-300  ",
    children: v.jsxs("div", {
      className:
        "flex h-full min-h-full w-full flex-col items-center justify-center",
      children: [
        v.jsxs("div", {
          className: "grid w-full max-w-[1000px] grid-cols-2 gap-8",
          children: [
            v.jsx("div", {
              className: " pb-8 pl-4",
              children: v.jsx("p", {
                className:
                  "inline border-b-4 border-pink-600 text-4xl font-bold",
                children: "About",
              }),
            }),
            v.jsx("div", {}),
          ],
        }),
        v.jsxs("div", {
          className: "grid w-full max-w-[1000px] gap-8 px-4 sm:grid-cols-2",
          children: [
            v.jsx("div", {
              className: "text-4xl font-bold sm:text-right",
              children: v.jsx("p", {
                children:
                  "Hi. I'm Taher Barakat, nice to meet you. Please take a look around.",
              }),
            }),
            v.jsx("div", {
              children: v.jsx("p", {
                children:
                  "I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?",
              }),
            }),
          ],
        }),
      ],
    }),
  });
var Cf = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Aa = ht.createContext && ht.createContext(Cf),
  _t = function () {
    return (
      (_t =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var l in t)
              Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
          }
          return e;
        }),
      _t.apply(this, arguments)
    );
  },
  x1 = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
        t.indexOf(r[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
          (n[r[l]] = e[r[l]]);
    return n;
  };
function Pf(e) {
  return (
    e &&
    e.map(function (t, n) {
      return ht.createElement(t.tag, _t({ key: n }, t.attr), Pf(t.child));
    })
  );
}
function se(e) {
  return function (t) {
    return ht.createElement(_1, _t({ attr: _t({}, e.attr) }, t), Pf(e.child));
  };
}
function _1(e) {
  var t = function (n) {
    var r = e.attr,
      l = e.size,
      i = e.title,
      o = x1(e, ["attr", "size", "title"]),
      u = l || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      ht.createElement(
        "svg",
        _t(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: a,
            style: _t(_t({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        i && ht.createElement("title", null, i),
        e.children,
      )
    );
  };
  return Aa !== void 0
    ? ht.createElement(Aa.Consumer, null, function (n) {
        return t(n);
      })
    : t(Cf);
}
function E1(e) {
  return se({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z",
        },
      },
    ],
  })(e);
}
function C1(e) {
  return se({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z",
        },
      },
    ],
  })(e);
}
function P1(e) {
  return se({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z",
        },
      },
    ],
  })(e);
}
function Eu(e) {
  return se({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
      },
    ],
  })(e);
}
function T1(e) {
  return se({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
        },
      },
    ],
  })(e);
}
function j1(e) {
  return se({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z",
        },
      },
    ],
  })(e);
}
function Tf(e) {
  return se({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
      },
    ],
  })(e);
}
function N1(e) {
  return se({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z",
        },
      },
    ],
  })(e);
}
function z1(e) {
  return se({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
        },
      },
    ],
  })(e);
}
function O1(e) {
  return se({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z",
        },
      },
    ],
  })(e);
}
function Wa(e) {
  return se({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",
        },
      },
    ],
  })(e);
}
function L1(e) {
  return se({
    tag: "svg",
    attr: { viewBox: "0 0 352 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
        },
      },
    ],
  })(e);
}
function jf(e) {
  return se({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z",
        },
      },
    ],
  })(e);
}
const M1 = () =>
  v.jsxs("div", {
    name: "contact",
    className:
      " flex h-auto min-h-[100vh] w-full  flex-col items-center justify-end bg-[#0a192f] p-4 pt-[10vh]",
    children: [
      v.jsxs("form", {
        method: "POST",
        action: "https://getform.io/f/panvkqka",
        className: "flex w-full max-w-[600px] flex-col",
        children: [
          v.jsxs("div", {
            className: "pb-8",
            children: [
              v.jsx("p", {
                className:
                  "inline border-b-4 border-pink-600 text-4xl font-bold text-gray-300",
                children: "Contact",
              }),
              v.jsxs("p", {
                className: "py-4 text-gray-300",
                children: [
                  "Shoot me an email at",
                  " ",
                  v.jsxs("a", {
                    className:
                      "  font-semibold text-pink-600 duration-500 hover:text-[1.015rem] hover:text-pink-700",
                    href: "mailto:Taher.Barakat12223@gmail.com",
                    children: [
                      "Taher.Barakat12223@gmail.com",
                      " ",
                      v.jsx(Wa, { size: 12, className: "inline" }),
                    ],
                  }),
                  " ",
                  "or just call me at this number",
                  " ",
                  v.jsxs("a", {
                    className:
                      "  font-semibold text-pink-600 duration-500 hover:text-[1.015rem] hover:text-pink-700",
                    href: "tel:+963938907414",
                    children: [
                      " ",
                      "+963 938 907 414",
                      " ",
                      v.jsx(Wa, { size: 12, className: "inline" }),
                    ],
                  }),
                  " ",
                  ",also you can submit the form below",
                  v.jsx("br", {}),
                ],
              }),
            ],
          }),
          v.jsx("input", {
            type: "hidden",
            name: "_gotcha",
            style: { display: "none !important" },
          }),
          v.jsx("input", {
            className: "bg-[#ccd6f6] p-2",
            type: "text",
            placeholder: "Name",
            name: "name",
          }),
          v.jsx("input", {
            className: "my-4 bg-[#ccd6f6] p-2",
            type: "email",
            placeholder: "Email",
            name: "email",
          }),
          v.jsx("textarea", {
            className: "bg-[#ccd6f6] p-2",
            name: "message",
            rows: "10",
            placeholder: "Message",
          }),
          v.jsx("button", {
            className:
              "mx-auto my-8 flex items-center border-2 px-4 py-3 text-white hover:border-pink-600 hover:bg-pink-600",
            children: "Let's Collaborate",
          }),
        ],
      }),
      " ",
      v.jsxs("div", {
        className:
          " mx:10 my:5  flex w-[80vw] flex-col justify-center align-bottom lg:hidden ",
        children: [
          v.jsx("p", {
            className: "m-8: text-[#8892b0]",
            children: " For more info:",
          }),
          v.jsxs("ul", {
            className: "my-5 flex w-full items-center justify-between ",
            children: [
              v.jsx("li", {
                className:
                  "flex h-[60px] w-[20vw] items-center justify-between    ",
                children: v.jsxs("a", {
                  className:
                    "flex w-full  flex-col items-center justify-between text-[#8892b0] ",
                  href: "https://www.linkedin.com/in/Taher-Barakat",
                  target: "_blank",
                  children: [v.jsx(Tf, { size: 25 }), " Linkedin"],
                }),
              }),
              v.jsx("li", {
                className:
                  "flex h-[60px] w-[20vw] items-center justify-between    ",
                children: v.jsxs("a", {
                  className:
                    "flex w-full  flex-col items-center  justify-between text-[#8892b0]",
                  href: "https://github.com/TaherBarakat",
                  target: "_blank",
                  children: [v.jsx(Eu, { size: 25 }), "Github"],
                }),
              }),
              v.jsx("li", {
                className:
                  "flex h-[60px] w-[20vw] items-center justify-between",
                children: v.jsxs("a", {
                  className:
                    "flex w-full flex-col items-center justify-between text-[#8892b0]",
                  href: "https://cdn2.cvdesignr.com/u/cv/pdf/62e8113a68805_38f3f6ea9b9ec4d0d6df92b4b6b973fd28fffce4_e1eeb.pdf",
                  target: "_blank",
                  download: !0,
                  children: [v.jsx(jf, { size: 25 }), "Resume"],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
function R1(e) {
  return se({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
          clipRule: "evenodd",
        },
      },
    ],
  })(e);
}
var Y = {},
  Cu = {},
  hr = {},
  mr = {},
  Nf = "Expected a function",
  Va = NaN,
  I1 = "[object Symbol]",
  D1 = /^\s+|\s+$/g,
  F1 = /^[-+]0x[0-9a-f]+$/i,
  H1 = /^0b[01]+$/i,
  $1 = /^0o[0-7]+$/i,
  B1 = parseInt,
  U1 = typeof _r == "object" && _r && _r.Object === Object && _r,
  A1 = typeof self == "object" && self && self.Object === Object && self,
  W1 = U1 || A1 || Function("return this")(),
  V1 = Object.prototype,
  Q1 = V1.toString,
  Y1 = Math.max,
  K1 = Math.min,
  Ni = function () {
    return W1.Date.now();
  };
function X1(e, t, n) {
  var r,
    l,
    i,
    o,
    u,
    a,
    s = 0,
    h = !1,
    m = !1,
    p = !0;
  if (typeof e != "function") throw new TypeError(Nf);
  (t = Qa(t) || 0),
    Nl(n) &&
      ((h = !!n.leading),
      (m = "maxWait" in n),
      (i = m ? Y1(Qa(n.maxWait) || 0, t) : i),
      (p = "trailing" in n ? !!n.trailing : p));
  function w(k) {
    var E = r,
      T = l;
    return (r = l = void 0), (s = k), (o = e.apply(T, E)), o;
  }
  function S(k) {
    return (s = k), (u = setTimeout(f, t)), h ? w(k) : o;
  }
  function x(k) {
    var E = k - a,
      T = k - s,
      I = t - E;
    return m ? K1(I, i - T) : I;
  }
  function L(k) {
    var E = k - a,
      T = k - s;
    return a === void 0 || E >= t || E < 0 || (m && T >= i);
  }
  function f() {
    var k = Ni();
    if (L(k)) return c(k);
    u = setTimeout(f, x(k));
  }
  function c(k) {
    return (u = void 0), p && r ? w(k) : ((r = l = void 0), o);
  }
  function d() {
    u !== void 0 && clearTimeout(u), (s = 0), (r = a = l = u = void 0);
  }
  function g() {
    return u === void 0 ? o : c(Ni());
  }
  function _() {
    var k = Ni(),
      E = L(k);
    if (((r = arguments), (l = this), (a = k), E)) {
      if (u === void 0) return S(a);
      if (m) return (u = setTimeout(f, t)), w(a);
    }
    return u === void 0 && (u = setTimeout(f, t)), o;
  }
  return (_.cancel = d), (_.flush = g), _;
}
function G1(e, t, n) {
  var r = !0,
    l = !0;
  if (typeof e != "function") throw new TypeError(Nf);
  return (
    Nl(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (l = "trailing" in n ? !!n.trailing : l)),
    X1(e, t, { leading: r, maxWait: t, trailing: l })
  );
}
function Nl(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Z1(e) {
  return !!e && typeof e == "object";
}
function J1(e) {
  return typeof e == "symbol" || (Z1(e) && Q1.call(e) == I1);
}
function Qa(e) {
  if (typeof e == "number") return e;
  if (J1(e)) return Va;
  if (Nl(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Nl(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(D1, "");
  var n = H1.test(e);
  return n || $1.test(e) ? B1(e.slice(2), n ? 2 : 8) : F1.test(e) ? Va : +e;
}
var q1 = G1,
  vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
vr.addPassiveEventListener = function (t, n, r) {
  var l = r.name;
  l || ((l = n), console.warn("Listener must be a named function.")),
    ll.has(n) || ll.set(n, new Set());
  var i = ll.get(n);
  if (!i.has(l)) {
    var o = (function () {
      var u = !1;
      try {
        var a = Object.defineProperty({}, "passive", {
          get: function () {
            u = !0;
          },
        });
        window.addEventListener("test", null, a);
      } catch {}
      return u;
    })();
    t.addEventListener(n, r, o ? { passive: !0 } : !1), i.add(l);
  }
};
vr.removePassiveEventListener = function (t, n, r) {
  t.removeEventListener(n, r), ll.get(n).delete(r.name || n);
};
var ll = new Map();
Object.defineProperty(mr, "__esModule", { value: !0 });
var b1 = q1,
  e0 = n0(b1),
  t0 = vr;
function n0(e) {
  return e && e.__esModule ? e : { default: e };
}
var r0 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
    return (0, e0.default)(t, n);
  },
  U = {
    spyCallbacks: [],
    spySetState: [],
    scrollSpyContainers: [],
    mount: function (t, n) {
      if (t) {
        var r = r0(function (l) {
          U.scrollHandler(t);
        }, n);
        U.scrollSpyContainers.push(t),
          (0, t0.addPassiveEventListener)(t, "scroll", r);
      }
    },
    isMounted: function (t) {
      return U.scrollSpyContainers.indexOf(t) !== -1;
    },
    currentPositionX: function (t) {
      if (t === document) {
        var n = window.pageYOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return n
          ? window.pageXOffset
          : r
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft;
      } else return t.scrollLeft;
    },
    currentPositionY: function (t) {
      if (t === document) {
        var n = window.pageXOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return n
          ? window.pageYOffset
          : r
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
      } else return t.scrollTop;
    },
    scrollHandler: function (t) {
      var n =
        U.scrollSpyContainers[U.scrollSpyContainers.indexOf(t)].spyCallbacks ||
        [];
      n.forEach(function (r) {
        return r(U.currentPositionX(t), U.currentPositionY(t));
      });
    },
    addStateHandler: function (t) {
      U.spySetState.push(t);
    },
    addSpyHandler: function (t, n) {
      var r = U.scrollSpyContainers[U.scrollSpyContainers.indexOf(n)];
      r.spyCallbacks || (r.spyCallbacks = []),
        r.spyCallbacks.push(t),
        t(U.currentPositionX(n), U.currentPositionY(n));
    },
    updateStates: function () {
      U.spySetState.forEach(function (t) {
        return t();
      });
    },
    unmount: function (t, n) {
      U.scrollSpyContainers.forEach(function (r) {
        return (
          r.spyCallbacks &&
          r.spyCallbacks.length &&
          r.spyCallbacks.indexOf(n) > -1 &&
          r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
        );
      }),
        U.spySetState &&
          U.spySetState.length &&
          U.spySetState.indexOf(t) > -1 &&
          U.spySetState.splice(U.spySetState.indexOf(t), 1),
        document.removeEventListener("scroll", U.scrollHandler);
    },
    update: function () {
      return U.scrollSpyContainers.forEach(function (t) {
        return U.scrollHandler(t);
      });
    },
  };
mr.default = U;
var _n = {},
  gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
var l0 = function (t, n) {
    var r = t.indexOf("#") === 0 ? t.substring(1) : t,
      l = r ? "#" + r : "",
      i = window && window.location,
      o = l ? i.pathname + i.search + l : i.pathname + i.search;
    n
      ? history.pushState(history.state, "", o)
      : history.replaceState(history.state, "", o);
  },
  i0 = function () {
    return window.location.hash.replace(/^#/, "");
  },
  o0 = function (t) {
    return function (n) {
      return t.contains
        ? t != n && t.contains(n)
        : !!(t.compareDocumentPosition(n) & 16);
    };
  },
  u0 = function (t) {
    return getComputedStyle(t).position !== "static";
  },
  zi = function (t, n) {
    for (var r = t.offsetTop, l = t.offsetParent; l && !n(l); )
      (r += l.offsetTop), (l = l.offsetParent);
    return { offsetTop: r, offsetParent: l };
  },
  a0 = function (t, n, r) {
    if (r)
      return t === document
        ? n.getBoundingClientRect().left +
            (window.scrollX || window.pageXOffset)
        : getComputedStyle(t).position !== "static"
          ? n.offsetLeft
          : n.offsetLeft - t.offsetLeft;
    if (t === document)
      return (
        n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset)
      );
    if (u0(t)) {
      if (n.offsetParent !== t) {
        var l = function (h) {
            return h === t || h === document;
          },
          i = zi(n, l),
          o = i.offsetTop,
          u = i.offsetParent;
        if (u !== t)
          throw new Error(
            "Seems containerElement is not an ancestor of the Element",
          );
        return o;
      }
      return n.offsetTop;
    }
    if (n.offsetParent === t.offsetParent) return n.offsetTop - t.offsetTop;
    var a = function (h) {
      return h === document;
    };
    return zi(n, a).offsetTop - zi(t, a).offsetTop;
  };
gr.default = {
  updateHash: l0,
  getHash: i0,
  filterElementInContainer: o0,
  scrollOffset: a0,
};
var Yl = {},
  Pu = {};
Object.defineProperty(Pu, "__esModule", { value: !0 });
Pu.default = {
  defaultEasing: function (t) {
    return t < 0.5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2;
  },
  linear: function (t) {
    return t;
  },
  easeInQuad: function (t) {
    return t * t;
  },
  easeOutQuad: function (t) {
    return t * (2 - t);
  },
  easeInOutQuad: function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function (t) {
    return t * t * t;
  },
  easeOutCubic: function (t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function (t) {
    return t * t * t * t;
  },
  easeOutQuart: function (t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function (t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function (t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function (t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function (t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  },
};
var Tu = {};
Object.defineProperty(Tu, "__esModule", { value: !0 });
var s0 = vr,
  c0 = ["mousedown", "mousewheel", "touchmove", "keydown"];
Tu.default = {
  subscribe: function (t) {
    return (
      typeof document < "u" &&
      c0.forEach(function (n) {
        return (0, s0.addPassiveEventListener)(document, n, t);
      })
    );
  },
};
var yr = {};
Object.defineProperty(yr, "__esModule", { value: !0 });
var jo = {
  registered: {},
  scrollEvent: {
    register: function (t, n) {
      jo.registered[t] = n;
    },
    remove: function (t) {
      jo.registered[t] = null;
    },
  },
};
yr.default = jo;
Object.defineProperty(Yl, "__esModule", { value: !0 });
var f0 =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  d0 = gr;
Kl(d0);
var p0 = Pu,
  Ya = Kl(p0),
  h0 = Tu,
  m0 = Kl(h0),
  v0 = yr,
  Ae = Kl(v0);
function Kl(e) {
  return e && e.__esModule ? e : { default: e };
}
var zf = function (t) {
    return Ya.default[t.smooth] || Ya.default.defaultEasing;
  },
  g0 = function (t) {
    return typeof t == "function"
      ? t
      : function () {
          return t;
        };
  },
  y0 = function () {
    if (typeof window < "u")
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  },
  No = (function () {
    return (
      y0() ||
      function (e, t, n) {
        window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
      }
    );
  })(),
  Of = function () {
    return {
      currentPosition: 0,
      startPosition: 0,
      targetPosition: 0,
      progress: 0,
      duration: 0,
      cancel: !1,
      target: null,
      containerElement: null,
      to: null,
      start: null,
      delta: null,
      percent: null,
      delayTimeout: null,
    };
  },
  Lf = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body) return n.scrollLeft;
    var r = window.pageXOffset !== void 0,
      l = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageXOffset
      : l
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft;
  },
  Mf = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body) return n.scrollTop;
    var r = window.pageXOffset !== void 0,
      l = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageYOffset
      : l
        ? document.documentElement.scrollTop
        : document.body.scrollTop;
  },
  w0 = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
      return n.scrollWidth - n.offsetWidth;
    var r = document.body,
      l = document.documentElement;
    return Math.max(
      r.scrollWidth,
      r.offsetWidth,
      l.clientWidth,
      l.scrollWidth,
      l.offsetWidth,
    );
  },
  S0 = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
      return n.scrollHeight - n.offsetHeight;
    var r = document.body,
      l = document.documentElement;
    return Math.max(
      r.scrollHeight,
      r.offsetHeight,
      l.clientHeight,
      l.scrollHeight,
      l.offsetHeight,
    );
  },
  k0 = function e(t, n, r) {
    var l = n.data;
    if (!n.ignoreCancelEvents && l.cancel) {
      Ae.default.registered.end &&
        Ae.default.registered.end(l.to, l.target, l.currentPositionY);
      return;
    }
    if (
      ((l.delta = Math.round(l.targetPosition - l.startPosition)),
      l.start === null && (l.start = r),
      (l.progress = r - l.start),
      (l.percent = l.progress >= l.duration ? 1 : t(l.progress / l.duration)),
      (l.currentPosition = l.startPosition + Math.ceil(l.delta * l.percent)),
      l.containerElement &&
      l.containerElement !== document &&
      l.containerElement !== document.body
        ? n.horizontal
          ? (l.containerElement.scrollLeft = l.currentPosition)
          : (l.containerElement.scrollTop = l.currentPosition)
        : n.horizontal
          ? window.scrollTo(l.currentPosition, 0)
          : window.scrollTo(0, l.currentPosition),
      l.percent < 1)
    ) {
      var i = e.bind(null, t, n);
      No.call(window, i);
      return;
    }
    Ae.default.registered.end &&
      Ae.default.registered.end(l.to, l.target, l.currentPosition);
  },
  ju = function (t) {
    t.data.containerElement = t
      ? t.containerId
        ? document.getElementById(t.containerId)
        : t.container && t.container.nodeType
          ? t.container
          : document
      : null;
  },
  wr = function (t, n, r, l) {
    (n.data = n.data || Of()), window.clearTimeout(n.data.delayTimeout);
    var i = function () {
      n.data.cancel = !0;
    };
    if (
      (m0.default.subscribe(i),
      ju(n),
      (n.data.start = null),
      (n.data.cancel = !1),
      (n.data.startPosition = n.horizontal ? Lf(n) : Mf(n)),
      (n.data.targetPosition = n.absolute ? t : t + n.data.startPosition),
      n.data.startPosition === n.data.targetPosition)
    ) {
      Ae.default.registered.end &&
        Ae.default.registered.end(
          n.data.to,
          n.data.target,
          n.data.currentPosition,
        );
      return;
    }
    (n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition)),
      (n.data.duration = g0(n.duration)(n.data.delta)),
      (n.data.duration = isNaN(parseFloat(n.data.duration))
        ? 1e3
        : parseFloat(n.data.duration)),
      (n.data.to = r),
      (n.data.target = l);
    var o = zf(n),
      u = k0.bind(null, o, n);
    if (n && n.delay > 0) {
      n.data.delayTimeout = window.setTimeout(function () {
        Ae.default.registered.begin &&
          Ae.default.registered.begin(n.data.to, n.data.target),
          No.call(window, u);
      }, n.delay);
      return;
    }
    Ae.default.registered.begin &&
      Ae.default.registered.begin(n.data.to, n.data.target),
      No.call(window, u);
  },
  Xl = function (t) {
    return (t = f0({}, t)), (t.data = t.data || Of()), (t.absolute = !0), t;
  },
  x0 = function (t) {
    wr(0, Xl(t));
  },
  _0 = function (t, n) {
    wr(t, Xl(n));
  },
  E0 = function (t) {
    (t = Xl(t)), ju(t), wr(t.horizontal ? w0(t) : S0(t), t);
  },
  C0 = function (t, n) {
    (n = Xl(n)), ju(n);
    var r = n.horizontal ? Lf(n) : Mf(n);
    wr(t + r, n);
  };
Yl.default = {
  animateTopScroll: wr,
  getAnimationType: zf,
  scrollToTop: x0,
  scrollToBottom: E0,
  scrollTo: _0,
  scrollMore: C0,
};
Object.defineProperty(_n, "__esModule", { value: !0 });
var P0 =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  T0 = gr,
  j0 = Nu(T0),
  N0 = Yl,
  z0 = Nu(N0),
  O0 = yr,
  Ur = Nu(O0);
function Nu(e) {
  return e && e.__esModule ? e : { default: e };
}
var Ar = {},
  Ka = void 0;
_n.default = {
  unmount: function () {
    Ar = {};
  },
  register: function (t, n) {
    Ar[t] = n;
  },
  unregister: function (t) {
    delete Ar[t];
  },
  get: function (t) {
    return (
      Ar[t] ||
      document.getElementById(t) ||
      document.getElementsByName(t)[0] ||
      document.getElementsByClassName(t)[0]
    );
  },
  setActiveLink: function (t) {
    return (Ka = t);
  },
  getActiveLink: function () {
    return Ka;
  },
  scrollTo: function (t, n) {
    var r = this.get(t);
    if (!r) {
      console.warn("target Element not found");
      return;
    }
    n = P0({}, n, { absolute: !1 });
    var l = n.containerId,
      i = n.container,
      o = void 0;
    l
      ? (o = document.getElementById(l))
      : i && i.nodeType
        ? (o = i)
        : (o = document),
      (n.absolute = !0);
    var u = n.horizontal,
      a = j0.default.scrollOffset(o, r, u) + (n.offset || 0);
    if (!n.smooth) {
      Ur.default.registered.begin && Ur.default.registered.begin(t, r),
        o === document
          ? n.horizontal
            ? window.scrollTo(a, 0)
            : window.scrollTo(0, a)
          : (o.scrollTop = a),
        Ur.default.registered.end && Ur.default.registered.end(t, r);
      return;
    }
    z0.default.animateTopScroll(a, n, t, r);
  },
};
var Rf = { exports: {} },
  L0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  M0 = L0,
  R0 = M0;
function If() {}
function Df() {}
Df.resetWarningCache = If;
var I0 = function () {
  function e(r, l, i, o, u, a) {
    if (a !== R0) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Df,
    resetWarningCache: If,
  };
  return (n.PropTypes = n), n;
};
Rf.exports = I0();
var Gl = Rf.exports,
  Zl = {};
Object.defineProperty(Zl, "__esModule", { value: !0 });
var D0 = gr,
  Oi = F0(D0);
function F0(e) {
  return e && e.__esModule ? e : { default: e };
}
var H0 = {
  mountFlag: !1,
  initialized: !1,
  scroller: null,
  containers: {},
  mount: function (t) {
    (this.scroller = t),
      (this.handleHashChange = this.handleHashChange.bind(this)),
      window.addEventListener("hashchange", this.handleHashChange),
      this.initStateFromHash(),
      (this.mountFlag = !0);
  },
  mapContainer: function (t, n) {
    this.containers[t] = n;
  },
  isMounted: function () {
    return this.mountFlag;
  },
  isInitialized: function () {
    return this.initialized;
  },
  initStateFromHash: function () {
    var t = this,
      n = this.getHash();
    n
      ? window.setTimeout(function () {
          t.scrollTo(n, !0), (t.initialized = !0);
        }, 10)
      : (this.initialized = !0);
  },
  scrollTo: function (t, n) {
    var r = this.scroller,
      l = r.get(t);
    if (l && (n || t !== r.getActiveLink())) {
      var i = this.containers[t] || document;
      r.scrollTo(t, { container: i });
    }
  },
  getHash: function () {
    return Oi.default.getHash();
  },
  changeHash: function (t, n) {
    this.isInitialized() &&
      Oi.default.getHash() !== t &&
      Oi.default.updateHash(t, n);
  },
  handleHashChange: function () {
    this.scrollTo(this.getHash());
  },
  unmount: function () {
    (this.scroller = null),
      (this.containers = null),
      window.removeEventListener("hashchange", this.handleHashChange);
  },
};
Zl.default = H0;
Object.defineProperty(hr, "__esModule", { value: !0 });
var Wr =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  $0 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  B0 = Ye,
  Xa = Sr(B0),
  U0 = mr,
  Vr = Sr(U0),
  A0 = _n,
  W0 = Sr(A0),
  V0 = Gl,
  $ = Sr(V0),
  Q0 = Zl,
  ot = Sr(Q0);
function Sr(e) {
  return e && e.__esModule ? e : { default: e };
}
function Y0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function K0(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function X0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t,
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Ga = {
  to: $.default.string.isRequired,
  containerId: $.default.string,
  container: $.default.object,
  activeClass: $.default.string,
  activeStyle: $.default.object,
  spy: $.default.bool,
  horizontal: $.default.bool,
  smooth: $.default.oneOfType([$.default.bool, $.default.string]),
  offset: $.default.number,
  delay: $.default.number,
  isDynamic: $.default.bool,
  onClick: $.default.func,
  duration: $.default.oneOfType([$.default.number, $.default.func]),
  absolute: $.default.bool,
  onSetActive: $.default.func,
  onSetInactive: $.default.func,
  ignoreCancelEvents: $.default.bool,
  hashSpy: $.default.bool,
  saveHashHistory: $.default.bool,
  spyThrottle: $.default.number,
};
hr.default = function (e, t) {
  var n = t || W0.default,
    r = (function (i) {
      X0(o, i);
      function o(u) {
        Y0(this, o);
        var a = K0(
          this,
          (o.__proto__ || Object.getPrototypeOf(o)).call(this, u),
        );
        return l.call(a), (a.state = { active: !1 }), a;
      }
      return (
        $0(o, [
          {
            key: "getScrollSpyContainer",
            value: function () {
              var a = this.props.containerId,
                s = this.props.container;
              return a && !s
                ? document.getElementById(a)
                : s && s.nodeType
                  ? s
                  : document;
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              if (this.props.spy || this.props.hashSpy) {
                var a = this.getScrollSpyContainer();
                Vr.default.isMounted(a) ||
                  Vr.default.mount(a, this.props.spyThrottle),
                  this.props.hashSpy &&
                    (ot.default.isMounted() || ot.default.mount(n),
                    ot.default.mapContainer(this.props.to, a)),
                  Vr.default.addSpyHandler(this.spyHandler, a),
                  this.setState({ container: a });
              }
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              Vr.default.unmount(this.stateHandler, this.spyHandler);
            },
          },
          {
            key: "render",
            value: function () {
              var a = "";
              this.state && this.state.active
                ? (a = (
                    (this.props.className || "") +
                    " " +
                    (this.props.activeClass || "active")
                  ).trim())
                : (a = this.props.className);
              var s = {};
              this.state && this.state.active
                ? (s = Wr({}, this.props.style, this.props.activeStyle))
                : (s = Wr({}, this.props.style));
              var h = Wr({}, this.props);
              for (var m in Ga) h.hasOwnProperty(m) && delete h[m];
              return (
                (h.className = a),
                (h.style = s),
                (h.onClick = this.handleClick),
                Xa.default.createElement(e, h)
              );
            },
          },
        ]),
        o
      );
    })(Xa.default.PureComponent),
    l = function () {
      var o = this;
      (this.scrollTo = function (u, a) {
        n.scrollTo(u, Wr({}, o.state, a));
      }),
        (this.handleClick = function (u) {
          o.props.onClick && o.props.onClick(u),
            u.stopPropagation && u.stopPropagation(),
            u.preventDefault && u.preventDefault(),
            o.scrollTo(o.props.to, o.props);
        }),
        (this.spyHandler = function (u, a) {
          var s = o.getScrollSpyContainer();
          if (!(ot.default.isMounted() && !ot.default.isInitialized())) {
            var h = o.props.horizontal,
              m = o.props.to,
              p = null,
              w = void 0,
              S = void 0;
            if (h) {
              var x = 0,
                L = 0,
                f = 0;
              if (s.getBoundingClientRect) {
                var c = s.getBoundingClientRect();
                f = c.left;
              }
              if (!p || o.props.isDynamic) {
                if (((p = n.get(m)), !p)) return;
                var d = p.getBoundingClientRect();
                (x = d.left - f + u), (L = x + d.width);
              }
              var g = u - o.props.offset;
              (w = g >= Math.floor(x) && g < Math.floor(L)),
                (S = g < Math.floor(x) || g >= Math.floor(L));
            } else {
              var _ = 0,
                k = 0,
                E = 0;
              if (s.getBoundingClientRect) {
                var T = s.getBoundingClientRect();
                E = T.top;
              }
              if (!p || o.props.isDynamic) {
                if (((p = n.get(m)), !p)) return;
                var I = p.getBoundingClientRect();
                (_ = I.top - E + a), (k = _ + I.height);
              }
              var N = a - o.props.offset;
              (w = N >= Math.floor(_) && N < Math.floor(k)),
                (S = N < Math.floor(_) || N >= Math.floor(k));
            }
            var he = n.getActiveLink();
            if (S) {
              if (
                (m === he && n.setActiveLink(void 0),
                o.props.hashSpy && ot.default.getHash() === m)
              ) {
                var lt = o.props.saveHashHistory,
                  Nt = lt === void 0 ? !1 : lt;
                ot.default.changeHash("", Nt);
              }
              o.props.spy &&
                o.state.active &&
                (o.setState({ active: !1 }),
                o.props.onSetInactive && o.props.onSetInactive(m, p));
            }
            if (w && (he !== m || o.state.active === !1)) {
              n.setActiveLink(m);
              var En = o.props.saveHashHistory,
                bl = En === void 0 ? !1 : En;
              o.props.hashSpy && ot.default.changeHash(m, bl),
                o.props.spy &&
                  (o.setState({ active: !0 }),
                  o.props.onSetActive && o.props.onSetActive(m, p));
            }
          }
        });
    };
  return (r.propTypes = Ga), (r.defaultProps = { offset: 0 }), r;
};
Object.defineProperty(Cu, "__esModule", { value: !0 });
var G0 = Ye,
  Za = Ff(G0),
  Z0 = hr,
  J0 = Ff(Z0);
function Ff(e) {
  return e && e.__esModule ? e : { default: e };
}
function q0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ja(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function b0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t,
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var eh = (function (e) {
  b0(t, e);
  function t() {
    var n, r, l, i;
    q0(this, t);
    for (var o = arguments.length, u = Array(o), a = 0; a < o; a++)
      u[a] = arguments[a];
    return (
      (i =
        ((r =
          ((l = Ja(
            this,
            (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              n,
              [this].concat(u),
            ),
          )),
          l)),
        (l.render = function () {
          return Za.default.createElement("a", l.props, l.props.children);
        }),
        r)),
      Ja(l, i)
    );
  }
  return t;
})(Za.default.Component);
Cu.default = (0, J0.default)(eh);
var zu = {};
Object.defineProperty(zu, "__esModule", { value: !0 });
var th = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  nh = Ye,
  qa = Hf(nh),
  rh = hr,
  lh = Hf(rh);
function Hf(e) {
  return e && e.__esModule ? e : { default: e };
}
function ih(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oh(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function uh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t,
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var ah = (function (e) {
  uh(t, e);
  function t() {
    return (
      ih(this, t),
      oh(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    th(t, [
      {
        key: "render",
        value: function () {
          return qa.default.createElement(
            "button",
            this.props,
            this.props.children,
          );
        },
      },
    ]),
    t
  );
})(qa.default.Component);
zu.default = (0, lh.default)(ah);
var Ou = {},
  Jl = {};
Object.defineProperty(Jl, "__esModule", { value: !0 });
var sh =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  ch = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  fh = Ye,
  ba = ql(fh),
  dh = Ef;
ql(dh);
var ph = _n,
  es = ql(ph),
  hh = Gl,
  ts = ql(hh);
function ql(e) {
  return e && e.__esModule ? e : { default: e };
}
function mh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vh(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function gh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t,
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
Jl.default = function (e) {
  var t = (function (n) {
    gh(r, n);
    function r(l) {
      mh(this, r);
      var i = vh(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, l));
      return (i.childBindings = { domNode: null }), i;
    }
    return (
      ch(r, [
        {
          key: "componentDidMount",
          value: function () {
            if (typeof window > "u") return !1;
            this.registerElems(this.props.name);
          },
        },
        {
          key: "componentDidUpdate",
          value: function (i) {
            this.props.name !== i.name && this.registerElems(this.props.name);
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            if (typeof window > "u") return !1;
            es.default.unregister(this.props.name);
          },
        },
        {
          key: "registerElems",
          value: function (i) {
            es.default.register(i, this.childBindings.domNode);
          },
        },
        {
          key: "render",
          value: function () {
            return ba.default.createElement(
              e,
              sh({}, this.props, { parentBindings: this.childBindings }),
            );
          },
        },
      ]),
      r
    );
  })(ba.default.Component);
  return (t.propTypes = { name: ts.default.string, id: ts.default.string }), t;
};
Object.defineProperty(Ou, "__esModule", { value: !0 });
var ns =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  yh = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  wh = Ye,
  rs = Lu(wh),
  Sh = Jl,
  kh = Lu(Sh),
  xh = Gl,
  ls = Lu(xh);
function Lu(e) {
  return e && e.__esModule ? e : { default: e };
}
function _h(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Eh(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Ch(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t,
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var $f = (function (e) {
  Ch(t, e);
  function t() {
    return (
      _h(this, t),
      Eh(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    yh(t, [
      {
        key: "render",
        value: function () {
          var r = this,
            l = ns({}, this.props);
          return (
            delete l.name,
            l.parentBindings && delete l.parentBindings,
            rs.default.createElement(
              "div",
              ns({}, l, {
                ref: function (o) {
                  r.props.parentBindings.domNode = o;
                },
              }),
              this.props.children,
            )
          );
        },
      },
    ]),
    t
  );
})(rs.default.Component);
$f.propTypes = { name: ls.default.string, id: ls.default.string };
Ou.default = (0, kh.default)($f);
var Li =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  is = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function os(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function us(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function as(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t,
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Qr = Ye,
  Lt = mr,
  Mi = _n,
  A = Gl,
  ut = Zl,
  ss = {
    to: A.string.isRequired,
    containerId: A.string,
    container: A.object,
    activeClass: A.string,
    spy: A.bool,
    smooth: A.oneOfType([A.bool, A.string]),
    offset: A.number,
    delay: A.number,
    isDynamic: A.bool,
    onClick: A.func,
    duration: A.oneOfType([A.number, A.func]),
    absolute: A.bool,
    onSetActive: A.func,
    onSetInactive: A.func,
    ignoreCancelEvents: A.bool,
    hashSpy: A.bool,
    spyThrottle: A.number,
  },
  Ph = {
    Scroll: function (t, n) {
      console.warn("Helpers.Scroll is deprecated since v1.7.0");
      var r = n || Mi,
        l = (function (o) {
          as(u, o);
          function u(a) {
            os(this, u);
            var s = us(
              this,
              (u.__proto__ || Object.getPrototypeOf(u)).call(this, a),
            );
            return i.call(s), (s.state = { active: !1 }), s;
          }
          return (
            is(u, [
              {
                key: "getScrollSpyContainer",
                value: function () {
                  var s = this.props.containerId,
                    h = this.props.container;
                  return s
                    ? document.getElementById(s)
                    : h && h.nodeType
                      ? h
                      : document;
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.spy || this.props.hashSpy) {
                    var s = this.getScrollSpyContainer();
                    Lt.isMounted(s) || Lt.mount(s, this.props.spyThrottle),
                      this.props.hashSpy &&
                        (ut.isMounted() || ut.mount(r),
                        ut.mapContainer(this.props.to, s)),
                      this.props.spy && Lt.addStateHandler(this.stateHandler),
                      Lt.addSpyHandler(this.spyHandler, s),
                      this.setState({ container: s });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  Lt.unmount(this.stateHandler, this.spyHandler);
                },
              },
              {
                key: "render",
                value: function () {
                  var s = "";
                  this.state && this.state.active
                    ? (s = (
                        (this.props.className || "") +
                        " " +
                        (this.props.activeClass || "active")
                      ).trim())
                    : (s = this.props.className);
                  var h = Li({}, this.props);
                  for (var m in ss) h.hasOwnProperty(m) && delete h[m];
                  return (
                    (h.className = s),
                    (h.onClick = this.handleClick),
                    Qr.createElement(t, h)
                  );
                },
              },
            ]),
            u
          );
        })(Qr.Component),
        i = function () {
          var u = this;
          (this.scrollTo = function (a, s) {
            r.scrollTo(a, Li({}, u.state, s));
          }),
            (this.handleClick = function (a) {
              u.props.onClick && u.props.onClick(a),
                a.stopPropagation && a.stopPropagation(),
                a.preventDefault && a.preventDefault(),
                u.scrollTo(u.props.to, u.props);
            }),
            (this.stateHandler = function () {
              r.getActiveLink() !== u.props.to &&
                (u.state !== null &&
                  u.state.active &&
                  u.props.onSetInactive &&
                  u.props.onSetInactive(),
                u.setState({ active: !1 }));
            }),
            (this.spyHandler = function (a) {
              var s = u.getScrollSpyContainer();
              if (!(ut.isMounted() && !ut.isInitialized())) {
                var h = u.props.to,
                  m = null,
                  p = 0,
                  w = 0,
                  S = 0;
                if (s.getBoundingClientRect) {
                  var x = s.getBoundingClientRect();
                  S = x.top;
                }
                if (!m || u.props.isDynamic) {
                  if (((m = r.get(h)), !m)) return;
                  var L = m.getBoundingClientRect();
                  (p = L.top - S + a), (w = p + L.height);
                }
                var f = a - u.props.offset,
                  c = f >= Math.floor(p) && f < Math.floor(w),
                  d = f < Math.floor(p) || f >= Math.floor(w),
                  g = r.getActiveLink();
                if (d)
                  return (
                    h === g && r.setActiveLink(void 0),
                    u.props.hashSpy && ut.getHash() === h && ut.changeHash(),
                    u.props.spy &&
                      u.state.active &&
                      (u.setState({ active: !1 }),
                      u.props.onSetInactive && u.props.onSetInactive()),
                    Lt.updateStates()
                  );
                if (c && g !== h)
                  return (
                    r.setActiveLink(h),
                    u.props.hashSpy && ut.changeHash(h),
                    u.props.spy &&
                      (u.setState({ active: !0 }),
                      u.props.onSetActive && u.props.onSetActive(h)),
                    Lt.updateStates()
                  );
              }
            });
        };
      return (l.propTypes = ss), (l.defaultProps = { offset: 0 }), l;
    },
    Element: function (t) {
      console.warn("Helpers.Element is deprecated since v1.7.0");
      var n = (function (r) {
        as(l, r);
        function l(i) {
          os(this, l);
          var o = us(
            this,
            (l.__proto__ || Object.getPrototypeOf(l)).call(this, i),
          );
          return (o.childBindings = { domNode: null }), o;
        }
        return (
          is(l, [
            {
              key: "componentDidMount",
              value: function () {
                if (typeof window > "u") return !1;
                this.registerElems(this.props.name);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (o) {
                this.props.name !== o.name &&
                  this.registerElems(this.props.name);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                if (typeof window > "u") return !1;
                Mi.unregister(this.props.name);
              },
            },
            {
              key: "registerElems",
              value: function (o) {
                Mi.register(o, this.childBindings.domNode);
              },
            },
            {
              key: "render",
              value: function () {
                return Qr.createElement(
                  t,
                  Li({}, this.props, { parentBindings: this.childBindings }),
                );
              },
            },
          ]),
          l
        );
      })(Qr.Component);
      return (n.propTypes = { name: A.string, id: A.string }), n;
    },
  },
  Th = Ph;
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.Helpers =
  Y.ScrollElement =
  Y.ScrollLink =
  Y.animateScroll =
  Y.scrollSpy =
  Y.Events =
  Y.scroller =
  Y.Element =
  Y.Button =
  Pe =
  Y.Link =
    void 0;
var jh = Cu,
  Bf = Ke(jh),
  Nh = zu,
  Uf = Ke(Nh),
  zh = Ou,
  Af = Ke(zh),
  Oh = _n,
  Wf = Ke(Oh),
  Lh = yr,
  Vf = Ke(Lh),
  Mh = mr,
  Qf = Ke(Mh),
  Rh = Yl,
  Yf = Ke(Rh),
  Ih = hr,
  Kf = Ke(Ih),
  Dh = Jl,
  Xf = Ke(Dh),
  Fh = Th,
  Gf = Ke(Fh);
function Ke(e) {
  return e && e.__esModule ? e : { default: e };
}
var Pe = (Y.Link = Bf.default);
Y.Button = Uf.default;
Y.Element = Af.default;
Y.scroller = Wf.default;
Y.Events = Vf.default;
Y.scrollSpy = Qf.default;
Y.animateScroll = Yf.default;
Y.ScrollLink = Kf.default;
Y.ScrollElement = Xf.default;
Y.Helpers = Gf.default;
Y.default = {
  Link: Bf.default,
  Button: Uf.default,
  Element: Af.default,
  scroller: Wf.default,
  Events: Vf.default,
  scrollSpy: Qf.default,
  animateScroll: Yf.default,
  ScrollLink: Kf.default,
  ScrollElement: Xf.default,
  Helpers: Gf.default,
};
const Hh = () =>
    v.jsx("div", {
      name: "home",
      className:
        " mb-10 flex  h-auto min-h-[100vh] w-full items-center bg-[#0a192f]  pt-10",
      children: v.jsxs("div", {
        className:
          "mx-auto flex h-full max-w-[1000px] flex-col justify-center  px-8",
        children: [
          v.jsx("p", {
            className: "text-pink-600",
            children: "Hi, my name is",
          }),
          v.jsx("h1", {
            className: "text-4xl font-bold text-[#ccd6f6] sm:text-7xl",
            children: "Taher Barakat.",
          }),
          v.jsx("h2", {
            className: "text-4xl font-bold text-[#8892b0] sm:text-7xl",
            children: "I can center a div.",
          }),
          v.jsx("p", {
            className: "max-w-[700px] py-4 text-[#8892b0]",
            children:
              "I’m a front-end developer/data analyst specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.",
          }),
          v.jsx(Pe, {
            to: "work",
            smooth: !0,
            duration: 500,
            children: v.jsx("div", {
              children: v.jsxs("button", {
                className:
                  "group my-2 flex items-center border-2 px-6 py-3 text-white hover:border-pink-600 hover:bg-pink-600",
                children: [
                  "View Work",
                  v.jsx("span", {
                    className: "duration-300 group-hover:rotate-90",
                    children: v.jsx(R1, { className: "ml-3 " }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  $h = "./logo.svg",
  Bh = () => {
    const [e, t] = Ye.useState(!1),
      n = () => t(!e);
    return v.jsxs("div", {
      className:
        "fixed z-10 flex h-[9vh] min-h-[40px] w-full items-center justify-between bg-[#0a192f] px-[5vw] text-gray-300 md:px-10",
      children: [
        v.jsx("div", {
          children: v.jsx("img", {
            src: $h,
            alt: "Logo Image",
            style: { width: "3.5vmax", maxWidth: "4.5rem", minWidth: "3rem" },
          }),
        }),
        v.jsxs("ul", {
          className: "hidden md:flex",
          children: [
            v.jsx("li", {
              children: v.jsx(Pe, {
                to: "home",
                smooth: !0,
                duration: 500,
                children: "Home",
              }),
            }),
            v.jsx("li", {
              children: v.jsx(Pe, {
                to: "about",
                smooth: !0,
                duration: 500,
                children: "About",
              }),
            }),
            v.jsx("li", {
              children: v.jsx(Pe, {
                to: "skills",
                smooth: !0,
                duration: 500,
                children: "Skills",
              }),
            }),
            v.jsx("li", {
              children: v.jsx(Pe, {
                to: "work",
                smooth: !0,
                duration: 500,
                children: "Work",
              }),
            }),
            v.jsx("li", {
              children: v.jsx(Pe, {
                to: "contact",
                smooth: !0,
                duration: 500,
                children: "Contact",
              }),
            }),
          ],
        }),
        v.jsx("div", {
          onClick: n,
          className: "z-10 md:hidden",
          children: e ? v.jsx(L1, {}) : v.jsx(z1, {}),
        }),
        v.jsxs("ul", {
          className: e
            ? "absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-[#0a192f]"
            : "hidden",
          children: [
            v.jsx("li", {
              className: "py-6 text-4xl",
              children: v.jsx(Pe, {
                onClick: n,
                to: "home",
                smooth: !0,
                duration: 500,
                children: "Home",
              }),
            }),
            v.jsxs("li", {
              className: "py-6 text-4xl",
              children: [
                " ",
                v.jsx(Pe, {
                  onClick: n,
                  to: "about",
                  smooth: !0,
                  duration: 500,
                  children: "About",
                }),
              ],
            }),
            v.jsxs("li", {
              className: "py-6 text-4xl",
              children: [
                " ",
                v.jsx(Pe, {
                  onClick: n,
                  to: "skills",
                  smooth: !0,
                  duration: 500,
                  children: "Skills",
                }),
              ],
            }),
            v.jsxs("li", {
              className: "py-6 text-4xl",
              children: [
                " ",
                v.jsx(Pe, {
                  onClick: n,
                  to: "work",
                  smooth: !0,
                  duration: 500,
                  children: "Work",
                }),
              ],
            }),
            v.jsxs("li", {
              className: "py-6 text-4xl",
              children: [
                " ",
                v.jsx(Pe, {
                  onClick: n,
                  to: "contact",
                  smooth: !0,
                  duration: 500,
                  children: "Contact",
                }),
              ],
            }),
          ],
        }),
        v.jsx("div", {
          className: "fixed left-0 top-[35%] hidden flex-col lg:flex",
          children: v.jsxs("ul", {
            children: [
              v.jsx("li", {
                className:
                  "ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#ccd6f6] duration-300 hover:ml-[-10px] ",
                children: v.jsxs("a", {
                  className:
                    "flex w-full items-center justify-between text-[#0a192f] ",
                  href: "https://www.linkedin.com/in/Taher-Barakat",
                  target: "_blank",
                  children: ["Linkedin ", v.jsx(Tf, { size: 30 })],
                }),
              }),
              v.jsx("li", {
                className:
                  "ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#ccd6f6] duration-300 hover:ml-[-10px]",
                children: v.jsxs("a", {
                  className:
                    "flex w-full items-center justify-between text-[#0a192f]",
                  href: "https://github.com/TaherBarakat",
                  target: "_blank",
                  children: ["Github ", v.jsx(Eu, { size: 30 })],
                }),
              }),
              v.jsx("li", {
                className:
                  "ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#ccd6f6] duration-300 hover:ml-[-10px]",
                children: v.jsxs("a", {
                  className:
                    "flex w-full items-center justify-between text-[#0a192f] ",
                  href: "https://cdn2.cvdesignr.com/u/cv/pdf/62e8113a68805_38f3f6ea9b9ec4d0d6df92b4b6b973fd28fffce4_e1eeb.pdf",
                  target: "_blank",
                  download: !0,
                  children: ["Resume ", v.jsx(jf, { size: 30 })],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  };
function Uh(e) {
  return se({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z",
        },
      },
    ],
  })(e);
}
function Ah(e) {
  return se({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
        },
      },
    ],
  })(e);
}
const Wh = () => {
  let e = [
    v.jsx(N1, { size: 50, title: "React", color: "#ccd6f6" }, 1),
    v.jsx(Uh, { size: 50, title: "Redux", color: "#ccd6f6" }, 2),
    v.jsx(Eu, { size: 50, title: "Github", color: "#ccd6f6" }, 3),
    v.jsx(E1, { size: 50, title: "Angular", color: "#ccd6f6" }, 4),
    v.jsx(j1, { size: 50, title: "Java Script", color: "#ccd6f6" }, 5),
    v.jsx(O1, { size: 50, title: "OracleDB", color: "#ccd6f6" }, 6),
    v.jsx(T1, { size: 50, title: "HTML", color: "#ccd6f6" }, 7),
    v.jsx(P1, { size: 50, title: "CSS", color: "#ccd6f6" }, 8),
    v.jsx(C1, { size: 50, title: "Bootstrap", color: "#ccd6f6" }, 9),
    v.jsx(Ah, { size: 50, title: "Tailwind", color: "#ccd6f6" }, 10),
  ];
  return v.jsx(v.Fragment, {
    children: v.jsx("div", {
      name: "skills",
      className:
        "mb-10 flex h-auto min-h-[100vh] w-full items-center bg-[#0a192f]   text-gray-300 ",
      children: v.jsxs("div", {
        className:
          " mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4",
        children: [
          v.jsxs("div", {
            children: [
              v.jsx("p", {
                className:
                  "inline border-b-4 border-pink-600 text-4xl font-bold ",
                children: "Skills",
              }),
              v.jsx("p", {
                className: "py-4",
                children: "These are the technologies I've worked with",
              }),
            ],
          }),
          v.jsx("div", {
            className:
              "grid w-full grid-cols-2 gap-[1rem] py-8 text-center sm:grid-cols-3 sm:grid-cols-4",
            children: e.map((t) =>
              v.jsxs(
                "div",
                {
                  className:
                    "flex flex-col items-center justify-center  shadow-[#040c16] duration-500 hover:scale-110",
                  children: [
                    t,
                    v.jsx("p", { className: "my-4", children: t.props.title }),
                  ],
                },
                t.props.title,
              ),
            ),
          }),
        ],
      }),
    }),
  });
};
let Vh = [
  {
    id: 771508690,
    name: "React Flashcard App",
    github: "https://github.com/TaherBarakat/react-flashcard-app",
    topics: ["React", "JavaScript"],
    live: "https://taherbarakat.github.io/react-flashcard-app/",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    id: 771518694,
    name: "React Google Clone",
    github: "https://github.com/TaherBarakat/react-google-docs-clone",
    topics: [
      "React",
      "JavaScript",
      "MongoDB",
      "Socket.io",
      "JavaScript",
      "NodeJs",
    ],
    live: "",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    id: 771508694,
    name: "React Food Order App",
    github: "https://github.com/TaherBarakat/food-order-app",
    topics: ["React", "JavaScript", "ExpressJs"],
    live: "",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    id: 777730625,
    name: "Ng Food App",
    github: "https://github.com/TaherBarakat/ng-food-app",
    topics: ["Angular", "MaterialUi", "TypeScript"],
    live: "",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    id: 759979761,
    name: "Note App",
    github: "https://github.com/TaherBarakat/note-app",
    topics: ["Nextjs", "TypeScript"],
    live: "",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    id: 783237412,
    name: "React Budget App",
    github: "https://github.com/TaherBarakat/react-budget-app",
    topics: ["React", "JavaScript", "Bootstrap"],
    live: "https://taherbarakat.github.io/react-budget-app/",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
];
const Qh = () =>
  v.jsx("div", {
    name: "work",
    className:
      " mb-10 flex h-auto min-h-[100vh] w-full items-center  bg-[#0a192f]  text-gray-300 ",
    children: v.jsxs("div", {
      className:
        "mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4",
      children: [
        v.jsxs("div", {
          className: "pb-8",
          children: [
            v.jsx("p", {
              className:
                "inline border-b-4 border-pink-600 text-4xl font-bold text-gray-300",
              children: "Work",
            }),
            v.jsx("p", {
              className: "py-6",
              children: "// Check out some of my recent work",
            }),
          ],
        }),
        v.jsx("div", {
          className: "grid gap-4 sm:grid-cols-2 md:grid-cols-3",
          children: Vh.map((e, t) =>
            v.jsx(
              "div",
              {
                style: { backgroundImage: `url(${e.image})` },
                className: `content-div group container mx-auto flex 
              items-center justify-center rounded-md text-center shadow-lg shadow-[#040c16] `,
                children: v.jsxs("div", {
                  className:
                    "opacity-0 duration-500  group-hover:opacity-100  ",
                  children: [
                    v.jsx("span", {
                      className:
                        "font bold text-2xl tracking-wider text-white ",
                      children: e.name,
                    }),
                    v.jsx("div", {
                      children: e.topics.map((n, r, l) =>
                        v.jsxs(
                          "span",
                          {
                            className: "text-[0.8rem]",
                            children: [n, r === l.length - 1 ? "" : " | "],
                          },
                          r,
                        ),
                      ),
                    }),
                    v.jsxs("div", {
                      className: "pt-8 text-center ",
                      children: [
                        v.jsx("a", {
                          href: e.github,
                          target: "_blank",
                          children: v.jsx("button", {
                            className: `m-2 rounded-lg bg-white px-4 py-3
                       text-center text-lg font-bold text-gray-700`,
                            children: "Code",
                          }),
                        }),
                        e.live &&
                          v.jsx("a", {
                            href: e.live,
                            target: "_blank",
                            children: v.jsx("button", {
                              className: `m-2 rounded-lg bg-white px-4 py-3
                       text-center text-lg font-bold text-gray-700`,
                              children: "Live",
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              },
              t,
            ),
          ),
        }),
      ],
    }),
  });
function Yh() {
  return v.jsx(v.Fragment, {
    children: v.jsxs("div", {
      children: [
        v.jsx(Bh, {}),
        v.jsx(Hh, {}),
        v.jsx(k1, {}),
        v.jsx(Wh, {}),
        v.jsx(Qh, {}),
        v.jsx(M1, {}),
      ],
    }),
  });
}
Ri.createRoot(document.getElementById("root")).render(
  v.jsx(ht.StrictMode, { children: v.jsx(Yh, {}) }),
);
