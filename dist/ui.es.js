import { jsx as G } from "react/jsx-runtime";
import se from "react";
var ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ie = { exports: {} };
(function(re, ve) {
  (function(ae, F) {
    re.exports = F(se);
  })(ce, (ne) => (
    /******/
    (() => {
      var ae = {
        /***/
        "./node_modules/css-mediaquery/index.js": (
          /*!**********************************************!*\
            !*** ./node_modules/css-mediaquery/index.js ***!
            \**********************************************/
          /***/
          (E, t) => {
            t.match = a, t.parse = o;
            var n = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, p = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, h = /^(?:(min|max)-)?(.+)/, v = /(em|rem|px|cm|mm|in|pt|pc)?$/, r = /(dpi|dpcm|dppx)?$/;
            function a(y, u) {
              return o(y).some(function(m) {
                var A = m.inverse, _ = m.type === "all" || u.type === m.type;
                if (_ && A || !(_ || A))
                  return !1;
                var D = m.expressions.every(function(l) {
                  var O = l.feature, C = l.modifier, w = l.value, b = u[O];
                  if (!b)
                    return !1;
                  switch (O) {
                    case "orientation":
                    case "scan":
                      return b.toLowerCase() === w.toLowerCase();
                    case "width":
                    case "height":
                    case "device-width":
                    case "device-height":
                      w = c(w), b = c(b);
                      break;
                    case "resolution":
                      w = i(w), b = i(b);
                      break;
                    case "aspect-ratio":
                    case "device-aspect-ratio":
                    case /* Deprecated */
                    "device-pixel-ratio":
                      w = d(w), b = d(b);
                      break;
                    case "grid":
                    case "color":
                    case "color-index":
                    case "monochrome":
                      w = parseInt(w, 10) || 1, b = parseInt(b, 10) || 0;
                      break;
                  }
                  switch (C) {
                    case "min":
                      return b >= w;
                    case "max":
                      return b <= w;
                    default:
                      return b === w;
                  }
                });
                return D && !A || !D && A;
              });
            }
            function o(y) {
              return y.split(",").map(function(u) {
                u = u.trim();
                var m = u.match(n), A = m[1], _ = m[2], D = m[3] || "", l = {};
                return l.inverse = !!A && A.toLowerCase() === "not", l.type = _ ? _.toLowerCase() : "all", D = D.match(/\([^\)]+\)/g) || [], l.expressions = D.map(function(O) {
                  var C = O.match(p), w = C[1].toLowerCase().match(h);
                  return {
                    modifier: w[1],
                    feature: w[2],
                    value: C[2]
                  };
                }), l;
              });
            }
            function d(y) {
              var u = Number(y), m;
              return u || (m = y.match(/^(\d+)\s*\/\s*(\d+)$/), u = m[1] / m[2]), u;
            }
            function i(y) {
              var u = parseFloat(y), m = String(y).match(r)[1];
              switch (m) {
                case "dpcm":
                  return u / 2.54;
                case "dppx":
                  return u * 96;
                default:
                  return u;
              }
            }
            function c(y) {
              var u = parseFloat(y), m = String(y).match(v)[1];
              switch (m) {
                case "em":
                  return u * 16;
                case "rem":
                  return u * 16;
                case "cm":
                  return u * 96 / 2.54;
                case "mm":
                  return u * 96 / 2.54 / 10;
                case "in":
                  return u * 96;
                case "pt":
                  return u * 72;
                case "pc":
                  return u * 72 / 12;
                default:
                  return u;
              }
            }
          }
        ),
        /***/
        "./node_modules/hyphenate-style-name/index.js": (
          /*!****************************************************!*\
            !*** ./node_modules/hyphenate-style-name/index.js ***!
            \****************************************************/
          /***/
          (E, t, n) => {
            n.r(t), n.d(t, {
              /* harmony export */
              default: () => o
              /* harmony export */
            });
            var p = /[A-Z]/g, h = /^ms-/, v = {};
            function r(d) {
              return "-" + d.toLowerCase();
            }
            function a(d) {
              if (v.hasOwnProperty(d))
                return v[d];
              var i = d.replace(p, r);
              return v[d] = h.test(i) ? "-" + i : i;
            }
            const o = a;
          }
        ),
        /***/
        "./node_modules/matchmediaquery/index.js": (
          /*!***********************************************!*\
            !*** ./node_modules/matchmediaquery/index.js ***!
            \***********************************************/
          /***/
          (E, t, n) => {
            var p = n(
              /*! css-mediaquery */
              "./node_modules/css-mediaquery/index.js"
            ).match, h = typeof window < "u" ? window.matchMedia : null;
            function v(a, o, d) {
              var i = this;
              if (h && !d) {
                var c = h.call(window, a);
                this.matches = c.matches, this.media = c.media, c.addListener(m);
              } else
                this.matches = p(a, o), this.media = a;
              this.addListener = y, this.removeListener = u, this.dispose = A;
              function y(_) {
                c && c.addListener(_);
              }
              function u(_) {
                c && c.removeListener(_);
              }
              function m(_) {
                i.matches = _.matches, i.media = _.media;
              }
              function A() {
                c && c.removeListener(m);
              }
            }
            function r(a, o, d) {
              return new v(a, o, d);
            }
            E.exports = r;
          }
        ),
        /***/
        "./node_modules/object-assign/index.js": (
          /*!*********************************************!*\
            !*** ./node_modules/object-assign/index.js ***!
            \*********************************************/
          /***/
          (E) => {
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
            var t = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
            function h(r) {
              if (r == null)
                throw new TypeError("Object.assign cannot be called with null or undefined");
              return Object(r);
            }
            function v() {
              try {
                if (!Object.assign)
                  return !1;
                var r = new String("abc");
                if (r[5] = "de", Object.getOwnPropertyNames(r)[0] === "5")
                  return !1;
                for (var a = {}, o = 0; o < 10; o++)
                  a["_" + String.fromCharCode(o)] = o;
                var d = Object.getOwnPropertyNames(a).map(function(c) {
                  return a[c];
                });
                if (d.join("") !== "0123456789")
                  return !1;
                var i = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(c) {
                  i[c] = c;
                }), Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst";
              } catch {
                return !1;
              }
            }
            E.exports = v() ? Object.assign : function(r, a) {
              for (var o, d = h(r), i, c = 1; c < arguments.length; c++) {
                o = Object(arguments[c]);
                for (var y in o)
                  n.call(o, y) && (d[y] = o[y]);
                if (t) {
                  i = t(o);
                  for (var u = 0; u < i.length; u++)
                    p.call(o, i[u]) && (d[i[u]] = o[i[u]]);
                }
              }
              return d;
            };
          }
        ),
        /***/
        "./node_modules/prop-types/checkPropTypes.js": (
          /*!***************************************************!*\
            !*** ./node_modules/prop-types/checkPropTypes.js ***!
            \***************************************************/
          /***/
          (E, t, n) => {
            var p = function() {
            };
            {
              var h = n(
                /*! ./lib/ReactPropTypesSecret */
                "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
              ), v = {}, r = n(
                /*! ./lib/has */
                "./node_modules/prop-types/lib/has.js"
              );
              p = function(o) {
                var d = "Warning: " + o;
                typeof console < "u" && console.error(d);
                try {
                  throw new Error(d);
                } catch {
                }
              };
            }
            function a(o, d, i, c, y) {
              for (var u in o)
                if (r(o, u)) {
                  var m;
                  try {
                    if (typeof o[u] != "function") {
                      var A = Error(
                        (c || "React class") + ": " + i + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                      );
                      throw A.name = "Invariant Violation", A;
                    }
                    m = o[u](d, u, c, i, null, h);
                  } catch (D) {
                    m = D;
                  }
                  if (m && !(m instanceof Error) && p(
                    (c || "React class") + ": type specification of " + i + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                  ), m instanceof Error && !(m.message in v)) {
                    v[m.message] = !0;
                    var _ = y ? y() : "";
                    p(
                      "Failed " + i + " type: " + m.message + (_ ?? "")
                    );
                  }
                }
            }
            a.resetWarningCache = function() {
              v = {};
            }, E.exports = a;
          }
        ),
        /***/
        "./node_modules/prop-types/factoryWithTypeCheckers.js": (
          /*!************************************************************!*\
            !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
            \************************************************************/
          /***/
          (E, t, n) => {
            var p = n(
              /*! react-is */
              "./node_modules/react-is/index.js"
            ), h = n(
              /*! object-assign */
              "./node_modules/object-assign/index.js"
            ), v = n(
              /*! ./lib/ReactPropTypesSecret */
              "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
            ), r = n(
              /*! ./lib/has */
              "./node_modules/prop-types/lib/has.js"
            ), a = n(
              /*! ./checkPropTypes */
              "./node_modules/prop-types/checkPropTypes.js"
            ), o = function() {
            };
            o = function(i) {
              var c = "Warning: " + i;
              typeof console < "u" && console.error(c);
              try {
                throw new Error(c);
              } catch {
              }
            };
            function d() {
              return null;
            }
            E.exports = function(i, c) {
              var y = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
              function m(e) {
                var f = e && (y && e[y] || e[u]);
                if (typeof f == "function")
                  return f;
              }
              var A = "<<anonymous>>", _ = {
                array: C("array"),
                bigint: C("bigint"),
                bool: C("boolean"),
                func: C("function"),
                number: C("number"),
                object: C("object"),
                string: C("string"),
                symbol: C("symbol"),
                any: w(),
                arrayOf: b,
                element: Q(),
                elementType: Y(),
                instanceOf: U,
                node: q(),
                objectOf: Z,
                oneOf: J,
                oneOfType: B,
                shape: V,
                exact: N
              };
              function D(e, f) {
                return e === f ? e !== 0 || 1 / e === 1 / f : e !== e && f !== f;
              }
              function l(e, f) {
                this.message = e, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
              }
              l.prototype = Error.prototype;
              function O(e) {
                var f = {}, j = 0;
                function P(R, T, x, S, I, M, s) {
                  if (S = S || A, M = M || x, s !== v) {
                    if (c) {
                      var L = new Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                      );
                      throw L.name = "Invariant Violation", L;
                    } else if (typeof console < "u") {
                      var k = S + ":" + x;
                      !f[k] && // Avoid spamming the console because they are often not actionable except for lib authors
                      j < 3 && (o(
                        "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + S + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                      ), f[k] = !0, j++);
                    }
                  }
                  return T[x] == null ? R ? T[x] === null ? new l("The " + I + " `" + M + "` is marked as required " + ("in `" + S + "`, but its value is `null`.")) : new l("The " + I + " `" + M + "` is marked as required in " + ("`" + S + "`, but its value is `undefined`.")) : null : e(T, x, S, I, M);
                }
                var g = P.bind(null, !1);
                return g.isRequired = P.bind(null, !0), g;
              }
              function C(e) {
                function f(j, P, g, R, T, x) {
                  var S = j[P], I = $(S);
                  if (I !== e) {
                    var M = W(S);
                    return new l(
                      "Invalid " + R + " `" + T + "` of type " + ("`" + M + "` supplied to `" + g + "`, expected ") + ("`" + e + "`."),
                      { expectedType: e }
                    );
                  }
                  return null;
                }
                return O(f);
              }
              function w() {
                return O(d);
              }
              function b(e) {
                function f(j, P, g, R, T) {
                  if (typeof e != "function")
                    return new l("Property `" + T + "` of component `" + g + "` has invalid PropType notation inside arrayOf.");
                  var x = j[P];
                  if (!Array.isArray(x)) {
                    var S = $(x);
                    return new l("Invalid " + R + " `" + T + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected an array."));
                  }
                  for (var I = 0; I < x.length; I++) {
                    var M = e(x, I, g, R, T + "[" + I + "]", v);
                    if (M instanceof Error)
                      return M;
                  }
                  return null;
                }
                return O(f);
              }
              function Q() {
                function e(f, j, P, g, R) {
                  var T = f[j];
                  if (!i(T)) {
                    var x = $(T);
                    return new l("Invalid " + g + " `" + R + "` of type " + ("`" + x + "` supplied to `" + P + "`, expected a single ReactElement."));
                  }
                  return null;
                }
                return O(e);
              }
              function Y() {
                function e(f, j, P, g, R) {
                  var T = f[j];
                  if (!p.isValidElementType(T)) {
                    var x = $(T);
                    return new l("Invalid " + g + " `" + R + "` of type " + ("`" + x + "` supplied to `" + P + "`, expected a single ReactElement type."));
                  }
                  return null;
                }
                return O(e);
              }
              function U(e) {
                function f(j, P, g, R, T) {
                  if (!(j[P] instanceof e)) {
                    var x = e.name || A, S = X(j[P]);
                    return new l("Invalid " + R + " `" + T + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected ") + ("instance of `" + x + "`."));
                  }
                  return null;
                }
                return O(f);
              }
              function J(e) {
                if (!Array.isArray(e))
                  return arguments.length > 1 ? o(
                    "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                  ) : o("Invalid argument supplied to oneOf, expected an array."), d;
                function f(j, P, g, R, T) {
                  for (var x = j[P], S = 0; S < e.length; S++)
                    if (D(x, e[S]))
                      return null;
                  var I = JSON.stringify(e, function(s, L) {
                    var k = W(L);
                    return k === "symbol" ? String(L) : L;
                  });
                  return new l("Invalid " + R + " `" + T + "` of value `" + String(x) + "` " + ("supplied to `" + g + "`, expected one of " + I + "."));
                }
                return O(f);
              }
              function Z(e) {
                function f(j, P, g, R, T) {
                  if (typeof e != "function")
                    return new l("Property `" + T + "` of component `" + g + "` has invalid PropType notation inside objectOf.");
                  var x = j[P], S = $(x);
                  if (S !== "object")
                    return new l("Invalid " + R + " `" + T + "` of type " + ("`" + S + "` supplied to `" + g + "`, expected an object."));
                  for (var I in x)
                    if (r(x, I)) {
                      var M = e(x, I, g, R, T + "." + I, v);
                      if (M instanceof Error)
                        return M;
                    }
                  return null;
                }
                return O(f);
              }
              function B(e) {
                if (!Array.isArray(e))
                  return o("Invalid argument supplied to oneOfType, expected an instance of array."), d;
                for (var f = 0; f < e.length; f++) {
                  var j = e[f];
                  if (typeof j != "function")
                    return o(
                      "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(j) + " at index " + f + "."
                    ), d;
                }
                function P(g, R, T, x, S) {
                  for (var I = [], M = 0; M < e.length; M++) {
                    var s = e[M], L = s(g, R, T, x, S, v);
                    if (L == null)
                      return null;
                    L.data && r(L.data, "expectedType") && I.push(L.data.expectedType);
                  }
                  var k = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
                  return new l("Invalid " + x + " `" + S + "` supplied to " + ("`" + T + "`" + k + "."));
                }
                return O(P);
              }
              function q() {
                function e(f, j, P, g, R) {
                  return z(f[j]) ? null : new l("Invalid " + g + " `" + R + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
                }
                return O(e);
              }
              function K(e, f, j, P, g) {
                return new l(
                  (e || "React class") + ": " + f + " type `" + j + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + g + "`."
                );
              }
              function V(e) {
                function f(j, P, g, R, T) {
                  var x = j[P], S = $(x);
                  if (S !== "object")
                    return new l("Invalid " + R + " `" + T + "` of type `" + S + "` " + ("supplied to `" + g + "`, expected `object`."));
                  for (var I in e) {
                    var M = e[I];
                    if (typeof M != "function")
                      return K(g, R, T, I, W(M));
                    var s = M(x, I, g, R, T + "." + I, v);
                    if (s)
                      return s;
                  }
                  return null;
                }
                return O(f);
              }
              function N(e) {
                function f(j, P, g, R, T) {
                  var x = j[P], S = $(x);
                  if (S !== "object")
                    return new l("Invalid " + R + " `" + T + "` of type `" + S + "` " + ("supplied to `" + g + "`, expected `object`."));
                  var I = h({}, j[P], e);
                  for (var M in I) {
                    var s = e[M];
                    if (r(e, M) && typeof s != "function")
                      return K(g, R, T, M, W(s));
                    if (!s)
                      return new l(
                        "Invalid " + R + " `" + T + "` key `" + M + "` supplied to `" + g + "`.\nBad object: " + JSON.stringify(j[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
                      );
                    var L = s(x, M, g, R, T + "." + M, v);
                    if (L)
                      return L;
                  }
                  return null;
                }
                return O(f);
              }
              function z(e) {
                switch (typeof e) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;
                  case "boolean":
                    return !e;
                  case "object":
                    if (Array.isArray(e))
                      return e.every(z);
                    if (e === null || i(e))
                      return !0;
                    var f = m(e);
                    if (f) {
                      var j = f.call(e), P;
                      if (f !== e.entries) {
                        for (; !(P = j.next()).done; )
                          if (!z(P.value))
                            return !1;
                      } else
                        for (; !(P = j.next()).done; ) {
                          var g = P.value;
                          if (g && !z(g[1]))
                            return !1;
                        }
                    } else
                      return !1;
                    return !0;
                  default:
                    return !1;
                }
              }
              function ee(e, f) {
                return e === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
              }
              function $(e) {
                var f = typeof e;
                return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : ee(f, e) ? "symbol" : f;
              }
              function W(e) {
                if (typeof e > "u" || e === null)
                  return "" + e;
                var f = $(e);
                if (f === "object") {
                  if (e instanceof Date)
                    return "date";
                  if (e instanceof RegExp)
                    return "regexp";
                }
                return f;
              }
              function te(e) {
                var f = W(e);
                switch (f) {
                  case "array":
                  case "object":
                    return "an " + f;
                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + f;
                  default:
                    return f;
                }
              }
              function X(e) {
                return !e.constructor || !e.constructor.name ? A : e.constructor.name;
              }
              return _.checkPropTypes = a, _.resetWarningCache = a.resetWarningCache, _.PropTypes = _, _;
            };
          }
        ),
        /***/
        "./node_modules/prop-types/index.js": (
          /*!******************************************!*\
            !*** ./node_modules/prop-types/index.js ***!
            \******************************************/
          /***/
          (E, t, n) => {
            {
              var p = n(
                /*! react-is */
                "./node_modules/react-is/index.js"
              ), h = !0;
              E.exports = n(
                /*! ./factoryWithTypeCheckers */
                "./node_modules/prop-types/factoryWithTypeCheckers.js"
              )(p.isElement, h);
            }
          }
        ),
        /***/
        "./node_modules/prop-types/lib/ReactPropTypesSecret.js": (
          /*!*************************************************************!*\
            !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
            \*************************************************************/
          /***/
          (E) => {
            var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            E.exports = t;
          }
        ),
        /***/
        "./node_modules/prop-types/lib/has.js": (
          /*!********************************************!*\
            !*** ./node_modules/prop-types/lib/has.js ***!
            \********************************************/
          /***/
          (E) => {
            E.exports = Function.call.bind(Object.prototype.hasOwnProperty);
          }
        ),
        /***/
        "./node_modules/react-is/cjs/react-is.development.js": (
          /*!***********************************************************!*\
            !*** ./node_modules/react-is/cjs/react-is.development.js ***!
            \***********************************************************/
          /***/
          (E, t) => {
            /** @license React v16.13.1
             * react-is.development.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            (function() {
              var n = typeof Symbol == "function" && Symbol.for, p = n ? Symbol.for("react.element") : 60103, h = n ? Symbol.for("react.portal") : 60106, v = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, a = n ? Symbol.for("react.profiler") : 60114, o = n ? Symbol.for("react.provider") : 60109, d = n ? Symbol.for("react.context") : 60110, i = n ? Symbol.for("react.async_mode") : 60111, c = n ? Symbol.for("react.concurrent_mode") : 60111, y = n ? Symbol.for("react.forward_ref") : 60112, u = n ? Symbol.for("react.suspense") : 60113, m = n ? Symbol.for("react.suspense_list") : 60120, A = n ? Symbol.for("react.memo") : 60115, _ = n ? Symbol.for("react.lazy") : 60116, D = n ? Symbol.for("react.block") : 60121, l = n ? Symbol.for("react.fundamental") : 60117, O = n ? Symbol.for("react.responder") : 60118, C = n ? Symbol.for("react.scope") : 60119;
              function w(s) {
                return typeof s == "string" || typeof s == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                s === v || s === c || s === a || s === r || s === u || s === m || typeof s == "object" && s !== null && (s.$$typeof === _ || s.$$typeof === A || s.$$typeof === o || s.$$typeof === d || s.$$typeof === y || s.$$typeof === l || s.$$typeof === O || s.$$typeof === C || s.$$typeof === D);
              }
              function b(s) {
                if (typeof s == "object" && s !== null) {
                  var L = s.$$typeof;
                  switch (L) {
                    case p:
                      var k = s.type;
                      switch (k) {
                        case i:
                        case c:
                        case v:
                        case a:
                        case r:
                        case u:
                          return k;
                        default:
                          var oe = k && k.$$typeof;
                          switch (oe) {
                            case d:
                            case y:
                            case _:
                            case A:
                            case o:
                              return oe;
                            default:
                              return L;
                          }
                      }
                    case h:
                      return L;
                  }
                }
              }
              var Q = i, Y = c, U = d, J = o, Z = p, B = y, q = v, K = _, V = A, N = h, z = a, ee = r, $ = u, W = !1;
              function te(s) {
                return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), X(s) || b(s) === i;
              }
              function X(s) {
                return b(s) === c;
              }
              function e(s) {
                return b(s) === d;
              }
              function f(s) {
                return b(s) === o;
              }
              function j(s) {
                return typeof s == "object" && s !== null && s.$$typeof === p;
              }
              function P(s) {
                return b(s) === y;
              }
              function g(s) {
                return b(s) === v;
              }
              function R(s) {
                return b(s) === _;
              }
              function T(s) {
                return b(s) === A;
              }
              function x(s) {
                return b(s) === h;
              }
              function S(s) {
                return b(s) === a;
              }
              function I(s) {
                return b(s) === r;
              }
              function M(s) {
                return b(s) === u;
              }
              t.AsyncMode = Q, t.ConcurrentMode = Y, t.ContextConsumer = U, t.ContextProvider = J, t.Element = Z, t.ForwardRef = B, t.Fragment = q, t.Lazy = K, t.Memo = V, t.Portal = N, t.Profiler = z, t.StrictMode = ee, t.Suspense = $, t.isAsyncMode = te, t.isConcurrentMode = X, t.isContextConsumer = e, t.isContextProvider = f, t.isElement = j, t.isForwardRef = P, t.isFragment = g, t.isLazy = R, t.isMemo = T, t.isPortal = x, t.isProfiler = S, t.isStrictMode = I, t.isSuspense = M, t.isValidElementType = w, t.typeOf = b;
            })();
          }
        ),
        /***/
        "./node_modules/react-is/index.js": (
          /*!****************************************!*\
            !*** ./node_modules/react-is/index.js ***!
            \****************************************/
          /***/
          (E, t, n) => {
            E.exports = n(
              /*! ./cjs/react-is.development.js */
              "./node_modules/react-is/cjs/react-is.development.js"
            );
          }
        ),
        /***/
        "./node_modules/shallow-equal/dist/index.esm.js": (
          /*!******************************************************!*\
            !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
            \******************************************************/
          /***/
          (E, t, n) => {
            n.r(t), n.d(t, {
              /* harmony export */
              shallowEqualArrays: () => (
                /* binding */
                h
              ),
              /* harmony export */
              shallowEqualObjects: () => (
                /* binding */
                p
              )
              /* harmony export */
            });
            function p(v, r) {
              if (v === r)
                return !0;
              if (!v || !r)
                return !1;
              var a = Object.keys(v), o = Object.keys(r), d = a.length;
              if (o.length !== d)
                return !1;
              for (var i = 0; i < d; i++) {
                var c = a[i];
                if (v[c] !== r[c] || !Object.prototype.hasOwnProperty.call(r, c))
                  return !1;
              }
              return !0;
            }
            function h(v, r) {
              if (v === r)
                return !0;
              if (!v || !r)
                return !1;
              var a = v.length;
              if (r.length !== a)
                return !1;
              for (var o = 0; o < a; o++)
                if (v[o] !== r[o])
                  return !1;
              return !0;
            }
          }
        ),
        /***/
        "./src/Component.ts": (
          /*!**************************!*\
            !*** ./src/Component.ts ***!
            \**************************/
          /***/
          function(E, t, n) {
            var p = this && this.__rest || function(a, o) {
              var d = {};
              for (var i in a)
                Object.prototype.hasOwnProperty.call(a, i) && o.indexOf(i) < 0 && (d[i] = a[i]);
              if (a != null && typeof Object.getOwnPropertySymbols == "function")
                for (var c = 0, i = Object.getOwnPropertySymbols(a); c < i.length; c++)
                  o.indexOf(i[c]) < 0 && Object.prototype.propertyIsEnumerable.call(a, i[c]) && (d[i[c]] = a[i[c]]);
              return d;
            }, h = this && this.__importDefault || function(a) {
              return a && a.__esModule ? a : { default: a };
            };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var v = h(n(
              /*! ./useMediaQuery */
              "./src/useMediaQuery.ts"
            )), r = function(a) {
              var o = a.children, d = a.device, i = a.onChange, c = p(a, ["children", "device", "onChange"]), y = (0, v.default)(c, d, i);
              return typeof o == "function" ? o(y) : y ? o : null;
            };
            t.default = r;
          }
        ),
        /***/
        "./src/Context.ts": (
          /*!************************!*\
            !*** ./src/Context.ts ***!
            \************************/
          /***/
          (E, t, n) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var p = n(
              /*! react */
              "react"
            ), h = (0, p.createContext)(void 0);
            t.default = h;
          }
        ),
        /***/
        "./src/index.ts": (
          /*!**********************!*\
            !*** ./src/index.ts ***!
            \**********************/
          /***/
          function(E, t, n) {
            var p = this && this.__importDefault || function(o) {
              return o && o.__esModule ? o : { default: o };
            };
            Object.defineProperty(t, "__esModule", { value: !0 }), t.Context = t.toQuery = t.useMediaQuery = t.default = void 0;
            var h = p(n(
              /*! ./useMediaQuery */
              "./src/useMediaQuery.ts"
            ));
            t.useMediaQuery = h.default;
            var v = p(n(
              /*! ./Component */
              "./src/Component.ts"
            ));
            t.default = v.default;
            var r = p(n(
              /*! ./toQuery */
              "./src/toQuery.ts"
            ));
            t.toQuery = r.default;
            var a = p(n(
              /*! ./Context */
              "./src/Context.ts"
            ));
            t.Context = a.default;
          }
        ),
        /***/
        "./src/mediaQuery.ts": (
          /*!***************************!*\
            !*** ./src/mediaQuery.ts ***!
            \***************************/
          /***/
          function(E, t, n) {
            var p = this && this.__assign || function() {
              return p = Object.assign || function(u) {
                for (var m, A = 1, _ = arguments.length; A < _; A++) {
                  m = arguments[A];
                  for (var D in m)
                    Object.prototype.hasOwnProperty.call(m, D) && (u[D] = m[D]);
                }
                return u;
              }, p.apply(this, arguments);
            }, h = this && this.__rest || function(u, m) {
              var A = {};
              for (var _ in u)
                Object.prototype.hasOwnProperty.call(u, _) && m.indexOf(_) < 0 && (A[_] = u[_]);
              if (u != null && typeof Object.getOwnPropertySymbols == "function")
                for (var D = 0, _ = Object.getOwnPropertySymbols(u); D < _.length; D++)
                  m.indexOf(_[D]) < 0 && Object.prototype.propertyIsEnumerable.call(u, _[D]) && (A[_[D]] = u[_[D]]);
              return A;
            }, v = this && this.__importDefault || function(u) {
              return u && u.__esModule ? u : { default: u };
            };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = v(n(
              /*! prop-types */
              "./node_modules/prop-types/index.js"
            )), a = r.default.oneOfType([
              r.default.string,
              r.default.number
            ]), o = {
              all: r.default.bool,
              grid: r.default.bool,
              aural: r.default.bool,
              braille: r.default.bool,
              handheld: r.default.bool,
              print: r.default.bool,
              projection: r.default.bool,
              screen: r.default.bool,
              tty: r.default.bool,
              tv: r.default.bool,
              embossed: r.default.bool
            }, d = {
              orientation: r.default.oneOf([
                "portrait",
                "landscape"
              ]),
              scan: r.default.oneOf([
                "progressive",
                "interlace"
              ]),
              aspectRatio: r.default.string,
              deviceAspectRatio: r.default.string,
              height: a,
              deviceHeight: a,
              width: a,
              deviceWidth: a,
              color: r.default.bool,
              colorIndex: r.default.bool,
              monochrome: r.default.bool,
              resolution: a,
              type: Object.keys(o)
            };
            d.type;
            var i = h(
              d,
              ["type"]
            ), c = p({ minAspectRatio: r.default.string, maxAspectRatio: r.default.string, minDeviceAspectRatio: r.default.string, maxDeviceAspectRatio: r.default.string, minHeight: a, maxHeight: a, minDeviceHeight: a, maxDeviceHeight: a, minWidth: a, maxWidth: a, minDeviceWidth: a, maxDeviceWidth: a, minColor: r.default.number, maxColor: r.default.number, minColorIndex: r.default.number, maxColorIndex: r.default.number, minMonochrome: r.default.number, maxMonochrome: r.default.number, minResolution: a, maxResolution: a }, i), y = p(p({}, o), c);
            t.default = {
              all: y,
              types: o,
              matchers: d,
              features: c
            };
          }
        ),
        /***/
        "./src/toQuery.ts": (
          /*!************************!*\
            !*** ./src/toQuery.ts ***!
            \************************/
          /***/
          function(E, t, n) {
            var p = this && this.__importDefault || function(i) {
              return i && i.__esModule ? i : { default: i };
            };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var h = p(n(
              /*! hyphenate-style-name */
              "./node_modules/hyphenate-style-name/index.js"
            )), v = p(n(
              /*! ./mediaQuery */
              "./src/mediaQuery.ts"
            )), r = function(i) {
              return "not ".concat(i);
            }, a = function(i, c) {
              var y = (0, h.default)(i);
              return typeof c == "number" && (c = "".concat(c, "px")), c === !0 ? y : c === !1 ? r(y) : "(".concat(y, ": ").concat(c, ")");
            }, o = function(i) {
              return i.join(" and ");
            }, d = function(i) {
              var c = [];
              return Object.keys(v.default.all).forEach(function(y) {
                var u = i[y];
                u != null && c.push(a(y, u));
              }), o(c);
            };
            t.default = d;
          }
        ),
        /***/
        "./src/useMediaQuery.ts": (
          /*!******************************!*\
            !*** ./src/useMediaQuery.ts ***!
            \******************************/
          /***/
          function(E, t, n) {
            var p = this && this.__importDefault || function(l) {
              return l && l.__esModule ? l : { default: l };
            };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var h = n(
              /*! react */
              "react"
            ), v = p(n(
              /*! matchmediaquery */
              "./node_modules/matchmediaquery/index.js"
            )), r = p(n(
              /*! hyphenate-style-name */
              "./node_modules/hyphenate-style-name/index.js"
            )), a = n(
              /*! shallow-equal */
              "./node_modules/shallow-equal/dist/index.esm.js"
            ), o = p(n(
              /*! ./toQuery */
              "./src/toQuery.ts"
            )), d = p(n(
              /*! ./Context */
              "./src/Context.ts"
            )), i = function(l) {
              return l.query || (0, o.default)(l);
            }, c = function(l) {
              if (l) {
                var O = Object.keys(l);
                return O.reduce(function(C, w) {
                  return C[(0, r.default)(w)] = l[w], C;
                }, {});
              }
            }, y = function() {
              var l = (0, h.useRef)(!1);
              return (0, h.useEffect)(function() {
                l.current = !0;
              }, []), l.current;
            }, u = function(l) {
              var O = (0, h.useContext)(d.default), C = function() {
                return c(l) || c(O);
              }, w = (0, h.useState)(C), b = w[0], Q = w[1];
              return (0, h.useEffect)(function() {
                var Y = C();
                (0, a.shallowEqualObjects)(b, Y) || Q(Y);
              }, [l, O]), b;
            }, m = function(l) {
              var O = function() {
                return i(l);
              }, C = (0, h.useState)(O), w = C[0], b = C[1];
              return (0, h.useEffect)(function() {
                var Q = O();
                w !== Q && b(Q);
              }, [l]), w;
            }, A = function(l, O) {
              var C = function() {
                return (0, v.default)(l, O || {}, !!O);
              }, w = (0, h.useState)(C), b = w[0], Q = w[1], Y = y();
              return (0, h.useEffect)(function() {
                if (Y) {
                  var U = C();
                  return Q(U), function() {
                    U && U.dispose();
                  };
                }
              }, [l, O]), b;
            }, _ = function(l) {
              var O = (0, h.useState)(l.matches), C = O[0], w = O[1];
              return (0, h.useEffect)(function() {
                var b = function(Q) {
                  w(Q.matches);
                };
                return l.addListener(b), w(l.matches), function() {
                  l.removeListener(b);
                };
              }, [l]), C;
            }, D = function(l, O, C) {
              var w = u(O), b = m(l);
              if (!b)
                throw new Error("Invalid or missing MediaQuery!");
              var Q = A(b, w), Y = _(Q), U = y();
              return (0, h.useEffect)(function() {
                U && C && C(Y);
              }, [Y]), (0, h.useEffect)(function() {
                return function() {
                  Q && Q.dispose();
                };
              }, []), Y;
            };
            t.default = D;
          }
        ),
        /***/
        react: (
          /*!**************************************************************************************!*\
            !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
            \**************************************************************************************/
          /***/
          (E) => {
            E.exports = ne;
          }
        )
        /******/
      }, F = {};
      function H(E) {
        var t = F[E];
        if (t !== void 0)
          return t.exports;
        var n = F[E] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        return ae[E].call(n.exports, n, n.exports, H), n.exports;
      }
      H.d = (E, t) => {
        for (var n in t)
          H.o(t, n) && !H.o(E, n) && Object.defineProperty(E, n, { enumerable: !0, get: t[n] });
      }, H.o = (E, t) => Object.prototype.hasOwnProperty.call(E, t), H.r = (E) => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(E, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(E, "__esModule", { value: !0 });
      };
      var ue = H("./src/index.ts");
      return ue;
    })()
  ));
})(ie);
var fe = ie.exports;
const le = () => /* @__PURE__ */ G("div", { className: "w-9 h-9 rounded-full bg-muted shrink-0" }), de = () => /* @__PURE__ */ G("div", { className: "w-9 h-9 rounded-full bg-muted shrink-0" }), he = ({}) => fe.useMediaQuery({ query: "(max-width: 786px)" }) ? /* @__PURE__ */ G(de, {}) : /* @__PURE__ */ G(le, {});
export {
  he as UserCircle
};
