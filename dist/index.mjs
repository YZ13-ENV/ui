"use client";
import { jsxs as k, jsx as v, Fragment as Te } from "react/jsx-runtime";
import Kt from "next/image.js";
import * as E from "react";
import ce, { memo as Wn, useCallback as K, forwardRef as M, Children as Ae, isValidElement as ut, createElement as $, cloneElement as jt, Fragment as Un, createContext as ft, useMemo as Ve, useContext as Ht, useEffect as I, useRef as R, useState as W, useLayoutEffect as Gt, useReducer as Pr } from "react";
import { BiUser as zn, BiTrashAlt as Sr, BiCheck as _r, BiX as Or, BiCog as Mr, BiLogOut as Nr } from "react-icons/bi/index.esm.js";
import { PiCrownSimpleBold as Ar, PiBellBold as Rr } from "react-icons/pi/index.esm.js";
import { default_api as kr, notifications as Tt, user as Vn, cdn as Tr, speed_insights as Dr } from "@darkmaterial/api";
import { MdGridView as Ir, MdOpenInNew as Fr } from "react-icons/md/index.esm.js";
import { cva as Lr } from "class-variance-authority";
import { clsx as Br } from "clsx";
import { twMerge as Wr } from "tailwind-merge";
import * as Ur from "react-dom";
import zr, { flushSync as Kn } from "react-dom";
import Vr from "next/dynamic.js";
import { useAuthState as Kr } from "react-firebase-hooks/auth/dist/index.esm.js";
import { DateTime as jn } from "luxon";
import { useInViewport as jr } from "ahooks";
import Hr from "next/link.js";
import { io as Gr } from "socket.io-client";
import { motion as Yr } from "framer-motion";
import { usePathname as Xr } from "next/navigation.js";
import { useReportWebVitals as Zr } from "next/web-vitals.js";
import { useMediaQuery as qr } from "react-responsive";
const Qr = ({ size: e = 24, isSubscriber: t = !1, src: n, className: o = "" }) => {
  const r = e * 0.5, c = r * 0.5;
  return /* @__PURE__ */ k(
    "div",
    {
      style: { width: `${e}px`, height: `${e}px` },
      className: `relative flex items-center justify-center overflow-visible border rounded-full shrink-0 bg-background border-inherit ${o}`,
      children: [
        n ? /* @__PURE__ */ v(Kt, { src: n, className: "rounded-full !relative", fill: !0, alt: "@avatar" }) : /* @__PURE__ */ v(zn, { size: e / 2 }),
        t && /* @__PURE__ */ v("div", { style: {
          // maxWidth: '64px',
          // maxHeight: '64px',
          top: `-${r * 0.25}px`,
          left: `-${r * 0.25}px`,
          width: `${r}px`,
          height: `${r}px`
        }, className: "absolute flex items-center justify-center border-2 rounded-full text-muted-foreground border-background bg-muted", children: /* @__PURE__ */ v(Ar, { size: c }) })
      ]
    }
  );
}, Tl = Wn(Qr);
function P() {
  return P = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, P.apply(this, arguments);
}
function Jr(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function $t(...e) {
  return (t) => e.forEach(
    (n) => Jr(n, t)
  );
}
function X(...e) {
  return K($t(...e), e);
}
const Ce = /* @__PURE__ */ M((e, t) => {
  const { children: n, ...o } = e, r = Ae.toArray(n), c = r.find(tc);
  if (c) {
    const i = c.props.children, a = r.map((s) => s === c ? Ae.count(i) > 1 ? Ae.only(null) : /* @__PURE__ */ ut(i) ? i.props.children : null : s);
    return /* @__PURE__ */ $(Dt, P({}, o, {
      ref: t
    }), /* @__PURE__ */ ut(i) ? /* @__PURE__ */ jt(i, void 0, a) : null);
  }
  return /* @__PURE__ */ $(Dt, P({}, o, {
    ref: t
  }), n);
});
Ce.displayName = "Slot";
const Dt = /* @__PURE__ */ M((e, t) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ ut(n) ? /* @__PURE__ */ jt(n, {
    ...nc(o, n.props),
    ref: t ? $t(t, n.ref) : n.ref
  }) : Ae.count(n) > 1 ? Ae.only(null) : null;
});
Dt.displayName = "SlotClone";
const ec = ({ children: e }) => /* @__PURE__ */ $(Un, null, e);
function tc(e) {
  return /* @__PURE__ */ ut(e) && e.type === ec;
}
function nc(e, t) {
  const n = {
    ...t
  };
  for (const o in t) {
    const r = e[o], c = t[o];
    /^on[A-Z]/.test(o) ? r && c ? n[o] = (...a) => {
      c(...a), r(...a);
    } : r && (n[o] = r) : o === "style" ? n[o] = {
      ...r,
      ...c
    } : o === "className" && (n[o] = [
      r,
      c
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function q(...e) {
  return Wr(Br(e));
}
const oc = Lr(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ge = E.forwardRef(
  ({ className: e, variant: t, size: n, asChild: o = !1, ...r }, c) => /* @__PURE__ */ v(
    o ? Ce : "button",
    {
      className: q(oc({ variant: t, size: n, className: e })),
      ref: c,
      ...r
    }
  )
);
ge.displayName = "Button";
function A(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function Fe(e, t = []) {
  let n = [];
  function o(c, i) {
    const a = /* @__PURE__ */ ft(i), s = n.length;
    n = [
      ...n,
      i
    ];
    function l(d) {
      const { scope: m, children: f, ...h } = d, p = (m == null ? void 0 : m[e][s]) || a, g = Ve(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ $(p.Provider, {
        value: g
      }, f);
    }
    function u(d, m) {
      const f = (m == null ? void 0 : m[e][s]) || a, h = Ht(f);
      if (h)
        return h;
      if (i !== void 0)
        return i;
      throw new Error(`\`${d}\` must be used within \`${c}\``);
    }
    return l.displayName = c + "Provider", [
      l,
      u
    ];
  }
  const r = () => {
    const c = n.map((i) => /* @__PURE__ */ ft(i));
    return function(a) {
      const s = (a == null ? void 0 : a[e]) || c;
      return Ve(
        () => ({
          [`__scope${e}`]: {
            ...a,
            [e]: s
          }
        }),
        [
          a,
          s
        ]
      );
    };
  };
  return r.scopeName = e, [
    o,
    rc(r, ...t)
  ];
}
function rc(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map(
      (r) => ({
        useScope: r(),
        scopeName: r.scopeName
      })
    );
    return function(c) {
      const i = o.reduce((a, { useScope: s, scopeName: l }) => {
        const d = s(c)[`__scope${l}`];
        return {
          ...a,
          ...d
        };
      }, {});
      return Ve(
        () => ({
          [`__scope${t.scopeName}`]: i
        }),
        [
          i
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const cc = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Q = cc.reduce((e, t) => {
  const n = /* @__PURE__ */ M((o, r) => {
    const { asChild: c, ...i } = o, a = c ? Ce : t;
    return I(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ $(a, P({}, i, {
      ref: r
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Hn(e, t) {
  e && Kn(
    () => e.dispatchEvent(t)
  );
}
function ae(e) {
  const t = R(e);
  return I(() => {
    t.current = e;
  }), Ve(
    () => (...n) => {
      var o;
      return (o = t.current) === null || o === void 0 ? void 0 : o.call(t, ...n);
    },
    []
  );
}
function ic(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ae(e);
  I(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o), () => t.removeEventListener("keydown", o);
  }, [
    n,
    t
  ]);
}
const It = "dismissableLayer.update", ac = "dismissableLayer.pointerDownOutside", sc = "dismissableLayer.focusOutside";
let fn;
const lc = /* @__PURE__ */ ft({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Gn = /* @__PURE__ */ M((e, t) => {
  var n;
  const { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: r, onPointerDownOutside: c, onFocusOutside: i, onInteractOutside: a, onDismiss: s, ...l } = e, u = Ht(lc), [d, m] = W(null), f = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = W({}), p = X(
    t,
    (O) => m(O)
  ), g = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = g.indexOf(b), x = d ? g.indexOf(d) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= w, N = dc((O) => {
    const T = O.target, U = [
      ...u.branches
    ].some(
      (V) => V.contains(T)
    );
    !C || U || (c == null || c(O), a == null || a(O), O.defaultPrevented || s == null || s());
  }, f), S = uc((O) => {
    const T = O.target;
    [
      ...u.branches
    ].some(
      (V) => V.contains(T)
    ) || (i == null || i(O), a == null || a(O), O.defaultPrevented || s == null || s());
  }, f);
  return ic((O) => {
    x === u.layers.size - 1 && (r == null || r(O), !O.defaultPrevented && s && (O.preventDefault(), s()));
  }, f), I(() => {
    if (d)
      return o && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (fn = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), pn(), () => {
        o && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = fn);
      };
  }, [
    d,
    f,
    o,
    u
  ]), I(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), pn());
  }, [
    d,
    u
  ]), I(() => {
    const O = () => h({});
    return document.addEventListener(It, O), () => document.removeEventListener(It, O);
  }, []), /* @__PURE__ */ $(Q.div, P({}, l, {
    ref: p,
    style: {
      pointerEvents: y ? C ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: A(e.onFocusCapture, S.onFocusCapture),
    onBlurCapture: A(e.onBlurCapture, S.onBlurCapture),
    onPointerDownCapture: A(e.onPointerDownCapture, N.onPointerDownCapture)
  }));
});
function dc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ae(e), o = R(!1), r = R(() => {
  });
  return I(() => {
    const c = (a) => {
      if (a.target && !o.current) {
        let l = function() {
          Yn(ac, n, s, {
            discrete: !0
          });
        };
        const s = {
          originalEvent: a
        };
        a.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", c);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", c), t.removeEventListener("click", r.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function uc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ae(e), o = R(!1);
  return I(() => {
    const r = (c) => {
      c.target && !o.current && Yn(sc, n, {
        originalEvent: c
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function pn() {
  const e = new CustomEvent(It);
  document.dispatchEvent(e);
}
function Yn(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, c = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, {
    once: !0
  }), o ? Hn(r, c) : r.dispatchEvent(c);
}
let St = 0;
function Xn() {
  I(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : mn()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : mn()), St++, () => {
      St === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (o) => o.remove()
      ), St--;
    };
  }, []);
}
function mn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const _t = "focusScope.autoFocusOnMount", Ot = "focusScope.autoFocusOnUnmount", hn = {
  bubbles: !1,
  cancelable: !0
}, Zn = /* @__PURE__ */ M((e, t) => {
  const { loop: n = !1, trapped: o = !1, onMountAutoFocus: r, onUnmountAutoFocus: c, ...i } = e, [a, s] = W(null), l = ae(r), u = ae(c), d = R(null), m = X(
    t,
    (p) => s(p)
  ), f = R({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  I(() => {
    if (o) {
      let p = function(x) {
        if (f.paused || !a)
          return;
        const y = x.target;
        a.contains(y) ? d.current = y : ve(d.current, {
          select: !0
        });
      }, g = function(x) {
        if (f.paused || !a)
          return;
        const y = x.relatedTarget;
        y !== null && (a.contains(y) || ve(d.current, {
          select: !0
        }));
      }, b = function(x) {
        if (document.activeElement === document.body)
          for (const C of x)
            C.removedNodes.length > 0 && ve(a);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", g);
      const w = new MutationObserver(b);
      return a && w.observe(a, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", g), w.disconnect();
      };
    }
  }, [
    o,
    a,
    f.paused
  ]), I(() => {
    if (a) {
      gn.add(f);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const b = new CustomEvent(_t, hn);
        a.addEventListener(_t, l), a.dispatchEvent(b), b.defaultPrevented || (fc(gc(qn(a)), {
          select: !0
        }), document.activeElement === p && ve(a));
      }
      return () => {
        a.removeEventListener(_t, l), setTimeout(() => {
          const b = new CustomEvent(Ot, hn);
          a.addEventListener(Ot, u), a.dispatchEvent(b), b.defaultPrevented || ve(p ?? document.body, {
            select: !0
          }), a.removeEventListener(Ot, u), gn.remove(f);
        }, 0);
      };
    }
  }, [
    a,
    l,
    u,
    f
  ]);
  const h = K((p) => {
    if (!n && !o || f.paused)
      return;
    const g = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, b = document.activeElement;
    if (g && b) {
      const w = p.currentTarget, [x, y] = pc(w);
      x && y ? !p.shiftKey && b === y ? (p.preventDefault(), n && ve(x, {
        select: !0
      })) : p.shiftKey && b === x && (p.preventDefault(), n && ve(y, {
        select: !0
      })) : b === w && p.preventDefault();
    }
  }, [
    n,
    o,
    f.paused
  ]);
  return /* @__PURE__ */ $(Q.div, P({
    tabIndex: -1
  }, i, {
    ref: m,
    onKeyDown: h
  }));
});
function fc(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (ve(o, {
      select: t
    }), document.activeElement !== n)
      return;
}
function pc(e) {
  const t = qn(e), n = vn(t, e), o = vn(t.reverse(), e);
  return [
    n,
    o
  ];
}
function qn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function vn(e, t) {
  for (const n of e)
    if (!mc(n, {
      upTo: t
    }))
      return n;
}
function mc(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function hc(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ve(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && hc(e) && t && e.select();
  }
}
const gn = vc();
function vc() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = bn(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = bn(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function bn(e, t) {
  const n = [
    ...e
  ], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function gc(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const De = globalThis != null && globalThis.document ? Gt : () => {
}, bc = E["useId".toString()] || (() => {
});
let $c = 0;
function pt(e) {
  const [t, n] = E.useState(bc());
  return De(() => {
    e || n(
      (o) => o ?? String($c++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const wc = ["top", "right", "bottom", "left"], be = Math.min, J = Math.max, mt = Math.round, tt = Math.floor, $e = (e) => ({
  x: e,
  y: e
}), xc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, yc = {
  start: "end",
  end: "start"
};
function Ft(e, t, n) {
  return J(e, be(t, n));
}
function de(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ue(e) {
  return e.split("-")[0];
}
function Le(e) {
  return e.split("-")[1];
}
function Yt(e) {
  return e === "x" ? "y" : "x";
}
function Xt(e) {
  return e === "y" ? "height" : "width";
}
function Be(e) {
  return ["top", "bottom"].includes(ue(e)) ? "y" : "x";
}
function Zt(e) {
  return Yt(Be(e));
}
function Cc(e, t, n) {
  n === void 0 && (n = !1);
  const o = Le(e), r = Zt(e), c = Xt(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (i = ht(i)), [i, ht(i)];
}
function Ec(e) {
  const t = ht(e);
  return [Lt(e), t, Lt(t)];
}
function Lt(e) {
  return e.replace(/start|end/g, (t) => yc[t]);
}
function Pc(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], c = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? c : i;
    default:
      return [];
  }
}
function Sc(e, t, n, o) {
  const r = Le(e);
  let c = Pc(ue(e), n === "start", o);
  return r && (c = c.map((i) => i + "-" + r), t && (c = c.concat(c.map(Lt)))), c;
}
function ht(e) {
  return e.replace(/left|right|bottom|top/g, (t) => xc[t]);
}
function _c(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Qn(e) {
  return typeof e != "number" ? _c(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function vt(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function $n(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const c = Be(t), i = Zt(t), a = Xt(i), s = ue(t), l = c === "y", u = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, m = o[a] / 2 - r[a] / 2;
  let f;
  switch (s) {
    case "top":
      f = {
        x: u,
        y: o.y - r.height
      };
      break;
    case "bottom":
      f = {
        x: u,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: o.x - r.width,
        y: d
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Le(t)) {
    case "start":
      f[i] -= m * (n && l ? -1 : 1);
      break;
    case "end":
      f[i] += m * (n && l ? -1 : 1);
      break;
  }
  return f;
}
const Oc = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: c = [],
    platform: i
  } = n, a = c.filter(Boolean), s = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: u,
    y: d
  } = $n(l, o, s), m = o, f = {}, h = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: g,
      fn: b
    } = a[p], {
      x: w,
      y: x,
      data: y,
      reset: C
    } = await b({
      x: u,
      y: d,
      initialPlacement: o,
      placement: m,
      strategy: r,
      middlewareData: f,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = w ?? u, d = x ?? d, f = {
      ...f,
      [g]: {
        ...f[g],
        ...y
      }
    }, C && h <= 50 && (h++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (l = C.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : C.rects), {
      x: u,
      y: d
    } = $n(l, m, s)), p = -1);
  }
  return {
    x: u,
    y: d,
    placement: m,
    strategy: r,
    middlewareData: f
  };
};
async function Ke(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: c,
    rects: i,
    elements: a,
    strategy: s
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: f = 0
  } = de(t, e), h = Qn(f), g = a[m ? d === "floating" ? "reference" : "floating" : d], b = vt(await c.getClippingRect({
    element: (n = await (c.isElement == null ? void 0 : c.isElement(g))) == null || n ? g : g.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: s
  })), w = d === "floating" ? {
    ...i.floating,
    x: o,
    y: r
  } : i.reference, x = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(a.floating)), y = await (c.isElement == null ? void 0 : c.isElement(x)) ? await (c.getScale == null ? void 0 : c.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = vt(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: x,
    strategy: s
  }) : w);
  return {
    top: (b.top - C.top + h.top) / y.y,
    bottom: (C.bottom - b.bottom + h.bottom) / y.y,
    left: (b.left - C.left + h.left) / y.x,
    right: (C.right - b.right + h.right) / y.x
  };
}
const Mc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: c,
      platform: i,
      elements: a,
      middlewareData: s
    } = t, {
      element: l,
      padding: u = 0
    } = de(e, t) || {};
    if (l == null)
      return {};
    const d = Qn(u), m = {
      x: n,
      y: o
    }, f = Zt(r), h = Xt(f), p = await i.getDimensions(l), g = f === "y", b = g ? "top" : "left", w = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", y = c.reference[h] + c.reference[f] - m[f] - c.floating[h], C = m[f] - c.reference[f], N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let S = N ? N[x] : 0;
    (!S || !await (i.isElement == null ? void 0 : i.isElement(N))) && (S = a.floating[x] || c.floating[h]);
    const O = y / 2 - C / 2, T = S / 2 - p[h] / 2 - 1, U = be(d[b], T), V = be(d[w], T), B = U, G = S - p[h] - V, F = S / 2 - p[h] / 2 + O, D = Ft(B, F, G), j = !s.arrow && Le(r) != null && F !== D && c.reference[h] / 2 - (F < B ? U : V) - p[h] / 2 < 0, L = j ? F < B ? F - B : F - G : 0;
    return {
      [f]: m[f] + L,
      data: {
        [f]: D,
        centerOffset: F - D - L,
        ...j && {
          alignmentOffset: L
        }
      },
      reset: j
    };
  }
}), Nc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: c,
        rects: i,
        initialPlacement: a,
        platform: s,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: p = !0,
        ...g
      } = de(e, t);
      if ((n = c.arrow) != null && n.alignmentOffset)
        return {};
      const b = ue(r), w = ue(a) === a, x = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), y = m || (w || !p ? [ht(a)] : Ec(a));
      !m && h !== "none" && y.push(...Sc(a, p, h, x));
      const C = [a, ...y], N = await Ke(t, g), S = [];
      let O = ((o = c.flip) == null ? void 0 : o.overflows) || [];
      if (u && S.push(N[b]), d) {
        const B = Cc(r, i, x);
        S.push(N[B[0]], N[B[1]]);
      }
      if (O = [...O, {
        placement: r,
        overflows: S
      }], !S.every((B) => B <= 0)) {
        var T, U;
        const B = (((T = c.flip) == null ? void 0 : T.index) || 0) + 1, G = C[B];
        if (G)
          return {
            data: {
              index: B,
              overflows: O
            },
            reset: {
              placement: G
            }
          };
        let F = (U = O.filter((D) => D.overflows[0] <= 0).sort((D, j) => D.overflows[1] - j.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!F)
          switch (f) {
            case "bestFit": {
              var V;
              const D = (V = O.map((j) => [j.placement, j.overflows.filter((L) => L > 0).reduce((L, Y) => L + Y, 0)]).sort((j, L) => j[1] - L[1])[0]) == null ? void 0 : V[0];
              D && (F = D);
              break;
            }
            case "initialPlacement":
              F = a;
              break;
          }
        if (r !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
};
function wn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function xn(e) {
  return wc.some((t) => e[t] >= 0);
}
const Ac = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = de(e, t);
      switch (o) {
        case "referenceHidden": {
          const c = await Ke(t, {
            ...r,
            elementContext: "reference"
          }), i = wn(c, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: xn(i)
            }
          };
        }
        case "escaped": {
          const c = await Ke(t, {
            ...r,
            altBoundary: !0
          }), i = wn(c, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: xn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Rc(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, c = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = ue(n), a = Le(n), s = Be(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = c && s ? -1 : 1, d = de(t, e);
  let {
    mainAxis: m,
    crossAxis: f,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return a && typeof h == "number" && (f = a === "end" ? h * -1 : h), s ? {
    x: f * u,
    y: m * l
  } : {
    x: m * l,
    y: f * u
  };
}
const kc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: c,
        placement: i,
        middlewareData: a
      } = t, s = await Rc(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (o = a.arrow) != null && o.alignmentOffset ? {} : {
        x: r + s.x,
        y: c + s.y,
        data: {
          ...s,
          placement: i
        }
      };
    }
  };
}, Tc = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: c = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (g) => {
            let {
              x: b,
              y: w
            } = g;
            return {
              x: b,
              y: w
            };
          }
        },
        ...s
      } = de(e, t), l = {
        x: n,
        y: o
      }, u = await Ke(t, s), d = Be(ue(r)), m = Yt(d);
      let f = l[m], h = l[d];
      if (c) {
        const g = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", w = f + u[g], x = f - u[b];
        f = Ft(w, f, x);
      }
      if (i) {
        const g = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", w = h + u[g], x = h - u[b];
        h = Ft(w, h, x);
      }
      const p = a.fn({
        ...t,
        [m]: f,
        [d]: h
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - o
        }
      };
    }
  };
}, Dc = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: c,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: s = !0,
        crossAxis: l = !0
      } = de(e, t), u = {
        x: n,
        y: o
      }, d = Be(r), m = Yt(d);
      let f = u[m], h = u[d];
      const p = de(a, t), g = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (s) {
        const x = m === "y" ? "height" : "width", y = c.reference[m] - c.floating[x] + g.mainAxis, C = c.reference[m] + c.reference[x] - g.mainAxis;
        f < y ? f = y : f > C && (f = C);
      }
      if (l) {
        var b, w;
        const x = m === "y" ? "width" : "height", y = ["top", "left"].includes(ue(r)), C = c.reference[d] - c.floating[x] + (y && ((b = i.offset) == null ? void 0 : b[d]) || 0) + (y ? 0 : g.crossAxis), N = c.reference[d] + c.reference[x] + (y ? 0 : ((w = i.offset) == null ? void 0 : w[d]) || 0) - (y ? g.crossAxis : 0);
        h < C ? h = C : h > N && (h = N);
      }
      return {
        [m]: f,
        [d]: h
      };
    }
  };
}, Ic = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: c
      } = t, {
        apply: i = () => {
        },
        ...a
      } = de(e, t), s = await Ke(t, a), l = ue(n), u = Le(n), d = Be(n) === "y", {
        width: m,
        height: f
      } = o.floating;
      let h, p;
      l === "top" || l === "bottom" ? (h = l, p = u === (await (r.isRTL == null ? void 0 : r.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (p = l, h = u === "end" ? "top" : "bottom");
      const g = f - s[h], b = m - s[p], w = !t.middlewareData.shift;
      let x = g, y = b;
      if (d) {
        const N = m - s.left - s.right;
        y = u || w ? be(b, N) : N;
      } else {
        const N = f - s.top - s.bottom;
        x = u || w ? be(g, N) : N;
      }
      if (w && !u) {
        const N = J(s.left, 0), S = J(s.right, 0), O = J(s.top, 0), T = J(s.bottom, 0);
        d ? y = m - 2 * (N !== 0 || S !== 0 ? N + S : J(s.left, s.right)) : x = f - 2 * (O !== 0 || T !== 0 ? O + T : J(s.top, s.bottom));
      }
      await i({
        ...t,
        availableWidth: y,
        availableHeight: x
      });
      const C = await r.getDimensions(c.floating);
      return m !== C.width || f !== C.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function we(e) {
  return Jn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ee(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function pe(e) {
  var t;
  return (t = (Jn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Jn(e) {
  return e instanceof Node || e instanceof ee(e).Node;
}
function fe(e) {
  return e instanceof Element || e instanceof ee(e).Element;
}
function se(e) {
  return e instanceof HTMLElement || e instanceof ee(e).HTMLElement;
}
function yn(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ee(e).ShadowRoot;
}
function Ze(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = te(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Fc(e) {
  return ["table", "td", "th"].includes(we(e));
}
function qt(e) {
  const t = Qt(), n = te(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Lc(e) {
  let t = Ie(e);
  for (; se(t) && !wt(t); ) {
    if (qt(t))
      return t;
    t = Ie(t);
  }
  return null;
}
function Qt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function wt(e) {
  return ["html", "body", "#document"].includes(we(e));
}
function te(e) {
  return ee(e).getComputedStyle(e);
}
function xt(e) {
  return fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Ie(e) {
  if (we(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    yn(e) && e.host || // Fallback.
    pe(e)
  );
  return yn(t) ? t.host : t;
}
function eo(e) {
  const t = Ie(e);
  return wt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : se(t) && Ze(t) ? t : eo(t);
}
function je(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = eo(e), c = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = ee(r);
  return c ? t.concat(i, i.visualViewport || [], Ze(r) ? r : [], i.frameElement && n ? je(i.frameElement) : []) : t.concat(r, je(r, [], n));
}
function to(e) {
  const t = te(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = se(e), c = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, a = mt(n) !== c || mt(o) !== i;
  return a && (n = c, o = i), {
    width: n,
    height: o,
    $: a
  };
}
function Jt(e) {
  return fe(e) ? e : e.contextElement;
}
function Re(e) {
  const t = Jt(e);
  if (!se(t))
    return $e(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: c
  } = to(t);
  let i = (c ? mt(n.width) : n.width) / o, a = (c ? mt(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Bc = /* @__PURE__ */ $e(0);
function no(e) {
  const t = ee(e);
  return !Qt() || !t.visualViewport ? Bc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Wc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ee(e) ? !1 : t;
}
function Ee(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), c = Jt(e);
  let i = $e(1);
  t && (o ? fe(o) && (i = Re(o)) : i = Re(e));
  const a = Wc(c, n, o) ? no(c) : $e(0);
  let s = (r.left + a.x) / i.x, l = (r.top + a.y) / i.y, u = r.width / i.x, d = r.height / i.y;
  if (c) {
    const m = ee(c), f = o && fe(o) ? ee(o) : o;
    let h = m, p = h.frameElement;
    for (; p && o && f !== h; ) {
      const g = Re(p), b = p.getBoundingClientRect(), w = te(p), x = b.left + (p.clientLeft + parseFloat(w.paddingLeft)) * g.x, y = b.top + (p.clientTop + parseFloat(w.paddingTop)) * g.y;
      s *= g.x, l *= g.y, u *= g.x, d *= g.y, s += x, l += y, h = ee(p), p = h.frameElement;
    }
  }
  return vt({
    width: u,
    height: d,
    x: s,
    y: l
  });
}
const Uc = [":popover-open", ":modal"];
function oo(e) {
  return Uc.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function zc(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const c = r === "fixed", i = pe(o), a = t ? oo(t.floating) : !1;
  if (o === i || a && c)
    return n;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = $e(1);
  const u = $e(0), d = se(o);
  if ((d || !d && !c) && ((we(o) !== "body" || Ze(i)) && (s = xt(o)), se(o))) {
    const m = Ee(o);
    l = Re(o), u.x = m.x + o.clientLeft, u.y = m.y + o.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - s.scrollLeft * l.x + u.x,
    y: n.y * l.y - s.scrollTop * l.y + u.y
  };
}
function Vc(e) {
  return Array.from(e.getClientRects());
}
function ro(e) {
  return Ee(pe(e)).left + xt(e).scrollLeft;
}
function Kc(e) {
  const t = pe(e), n = xt(e), o = e.ownerDocument.body, r = J(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), c = J(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + ro(e);
  const a = -n.scrollTop;
  return te(o).direction === "rtl" && (i += J(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: c,
    x: i,
    y: a
  };
}
function jc(e, t) {
  const n = ee(e), o = pe(e), r = n.visualViewport;
  let c = o.clientWidth, i = o.clientHeight, a = 0, s = 0;
  if (r) {
    c = r.width, i = r.height;
    const l = Qt();
    (!l || l && t === "fixed") && (a = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: c,
    height: i,
    x: a,
    y: s
  };
}
function Hc(e, t) {
  const n = Ee(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, c = se(e) ? Re(e) : $e(1), i = e.clientWidth * c.x, a = e.clientHeight * c.y, s = r * c.x, l = o * c.y;
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Cn(e, t, n) {
  let o;
  if (t === "viewport")
    o = jc(e, n);
  else if (t === "document")
    o = Kc(pe(e));
  else if (fe(t))
    o = Hc(t, n);
  else {
    const r = no(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return vt(o);
}
function co(e, t) {
  const n = Ie(e);
  return n === t || !fe(n) || wt(n) ? !1 : te(n).position === "fixed" || co(n, t);
}
function Gc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = je(e, [], !1).filter((a) => fe(a) && we(a) !== "body"), r = null;
  const c = te(e).position === "fixed";
  let i = c ? Ie(e) : e;
  for (; fe(i) && !wt(i); ) {
    const a = te(i), s = qt(i);
    !s && a.position === "fixed" && (r = null), (c ? !s && !r : !s && a.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Ze(i) && !s && co(e, i)) ? o = o.filter((u) => u !== i) : r = a, i = Ie(i);
  }
  return t.set(e, o), o;
}
function Yc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? Gc(t, this._c) : [].concat(n), o], a = i[0], s = i.reduce((l, u) => {
    const d = Cn(t, u, r);
    return l.top = J(d.top, l.top), l.right = be(d.right, l.right), l.bottom = be(d.bottom, l.bottom), l.left = J(d.left, l.left), l;
  }, Cn(t, a, r));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function Xc(e) {
  const {
    width: t,
    height: n
  } = to(e);
  return {
    width: t,
    height: n
  };
}
function Zc(e, t, n) {
  const o = se(t), r = pe(t), c = n === "fixed", i = Ee(e, !0, c, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = $e(0);
  if (o || !o && !c)
    if ((we(t) !== "body" || Ze(r)) && (a = xt(t)), o) {
      const d = Ee(t, !0, c, t);
      s.x = d.x + t.clientLeft, s.y = d.y + t.clientTop;
    } else
      r && (s.x = ro(r));
  const l = i.left + a.scrollLeft - s.x, u = i.top + a.scrollTop - s.y;
  return {
    x: l,
    y: u,
    width: i.width,
    height: i.height
  };
}
function En(e, t) {
  return !se(e) || te(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function io(e, t) {
  const n = ee(e);
  if (!se(e) || oo(e))
    return n;
  let o = En(e, t);
  for (; o && Fc(o) && te(o).position === "static"; )
    o = En(o, t);
  return o && (we(o) === "html" || we(o) === "body" && te(o).position === "static" && !qt(o)) ? n : o || Lc(e) || n;
}
const qc = async function(e) {
  const t = this.getOffsetParent || io, n = this.getDimensions;
  return {
    reference: Zc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await n(e.floating)
    }
  };
};
function Qc(e) {
  return te(e).direction === "rtl";
}
const Jc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: zc,
  getDocumentElement: pe,
  getClippingRect: Yc,
  getOffsetParent: io,
  getElementRects: qc,
  getClientRects: Vc,
  getDimensions: Xc,
  getScale: Re,
  isElement: fe,
  isRTL: Qc
};
function ei(e, t) {
  let n = null, o;
  const r = pe(e);
  function c() {
    var a;
    clearTimeout(o), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, s) {
    a === void 0 && (a = !1), s === void 0 && (s = 1), c();
    const {
      left: l,
      top: u,
      width: d,
      height: m
    } = e.getBoundingClientRect();
    if (a || t(), !d || !m)
      return;
    const f = tt(u), h = tt(r.clientWidth - (l + d)), p = tt(r.clientHeight - (u + m)), g = tt(l), w = {
      rootMargin: -f + "px " + -h + "px " + -p + "px " + -g + "px",
      threshold: J(0, be(1, s)) || 1
    };
    let x = !0;
    function y(C) {
      const N = C[0].intersectionRatio;
      if (N !== s) {
        if (!x)
          return i();
        N ? i(!1, N) : o = setTimeout(() => {
          i(!1, 1e-7);
        }, 100);
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(y, {
        ...w,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(y, w);
    }
    n.observe(e);
  }
  return i(!0), c;
}
function ti(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: c = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = o, l = Jt(e), u = r || c ? [...l ? je(l) : [], ...je(t)] : [];
  u.forEach((b) => {
    r && b.addEventListener("scroll", n, {
      passive: !0
    }), c && b.addEventListener("resize", n);
  });
  const d = l && a ? ei(l, n) : null;
  let m = -1, f = null;
  i && (f = new ResizeObserver((b) => {
    let [w] = b;
    w && w.target === l && f && (f.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = f) == null || x.observe(t);
    })), n();
  }), l && !s && f.observe(l), f.observe(t));
  let h, p = s ? Ee(e) : null;
  s && g();
  function g() {
    const b = Ee(e);
    p && (b.x !== p.x || b.y !== p.y || b.width !== p.width || b.height !== p.height) && n(), p = b, h = requestAnimationFrame(g);
  }
  return n(), () => {
    var b;
    u.forEach((w) => {
      r && w.removeEventListener("scroll", n), c && w.removeEventListener("resize", n);
    }), d == null || d(), (b = f) == null || b.disconnect(), f = null, s && cancelAnimationFrame(h);
  };
}
const ni = Tc, oi = Nc, ri = Ic, ci = Ac, Pn = Mc, ii = Dc, ai = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Jc,
    ...n
  }, c = {
    ...r.platform,
    _c: o
  };
  return Oc(e, t, {
    ...r,
    platform: c
  });
}, si = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? Pn({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Pn({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
};
var st = typeof document < "u" ? Gt : I;
function gt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (o = n; o-- !== 0; )
        if (!gt(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const c = r[o];
      if (!(c === "_owner" && e.$$typeof) && !gt(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ao(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Sn(e, t) {
  const n = ao(e);
  return Math.round(t * n) / n;
}
function _n(e) {
  const t = E.useRef(e);
  return st(() => {
    t.current = e;
  }), t;
}
function li(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: c,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: s,
    open: l
  } = e, [u, d] = E.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, f] = E.useState(o);
  gt(m, o) || f(o);
  const [h, p] = E.useState(null), [g, b] = E.useState(null), w = E.useCallback((L) => {
    L !== N.current && (N.current = L, p(L));
  }, []), x = E.useCallback((L) => {
    L !== S.current && (S.current = L, b(L));
  }, []), y = c || h, C = i || g, N = E.useRef(null), S = E.useRef(null), O = E.useRef(u), T = s != null, U = _n(s), V = _n(r), B = E.useCallback(() => {
    if (!N.current || !S.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: m
    };
    V.current && (L.platform = V.current), ai(N.current, S.current, L).then((Y) => {
      const _ = {
        ...Y,
        isPositioned: !0
      };
      G.current && !gt(O.current, _) && (O.current = _, Ur.flushSync(() => {
        d(_);
      }));
    });
  }, [m, t, n, V]);
  st(() => {
    l === !1 && O.current.isPositioned && (O.current.isPositioned = !1, d((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [l]);
  const G = E.useRef(!1);
  st(() => (G.current = !0, () => {
    G.current = !1;
  }), []), st(() => {
    if (y && (N.current = y), C && (S.current = C), y && C) {
      if (U.current)
        return U.current(y, C, B);
      B();
    }
  }, [y, C, B, U, T]);
  const F = E.useMemo(() => ({
    reference: N,
    floating: S,
    setReference: w,
    setFloating: x
  }), [w, x]), D = E.useMemo(() => ({
    reference: y,
    floating: C
  }), [y, C]), j = E.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return L;
    const Y = Sn(D.floating, u.x), _ = Sn(D.floating, u.y);
    return a ? {
      ...L,
      transform: "translate(" + Y + "px, " + _ + "px)",
      ...ao(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: Y,
      top: _
    };
  }, [n, a, D.floating, u.x, u.y]);
  return E.useMemo(() => ({
    ...u,
    update: B,
    refs: F,
    elements: D,
    floatingStyles: j
  }), [u, B, F, D, j]);
}
function di(e) {
  const [t, n] = W(void 0);
  return De(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const c = r[0];
        let i, a;
        if ("borderBoxSize" in c) {
          const s = c.borderBoxSize, l = Array.isArray(s) ? s[0] : s;
          i = l.inlineSize, a = l.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({
          width: i,
          height: a
        });
      });
      return o.observe(e, {
        box: "border-box"
      }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const so = "Popper", [lo, yt] = Fe(so), [ui, uo] = lo(so), fi = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = W(null);
  return /* @__PURE__ */ $(ui, {
    scope: t,
    anchor: o,
    onAnchorChange: r
  }, n);
}, pi = "PopperAnchor", mi = /* @__PURE__ */ M((e, t) => {
  const { __scopePopper: n, virtualRef: o, ...r } = e, c = uo(pi, n), i = R(null), a = X(t, i);
  return I(() => {
    c.onAnchorChange((o == null ? void 0 : o.current) || i.current);
  }), o ? null : /* @__PURE__ */ $(Q.div, P({}, r, {
    ref: a
  }));
}), fo = "PopperContent", [hi, Dl] = lo(fo), vi = /* @__PURE__ */ M((e, t) => {
  var n, o, r, c, i, a, s, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: m = 0, align: f = "center", alignOffset: h = 0, arrowPadding: p = 0, avoidCollisions: g = !0, collisionBoundary: b = [], collisionPadding: w = 0, sticky: x = "partial", hideWhenDetached: y = !1, updatePositionStrategy: C = "optimized", onPlaced: N, ...S } = e, O = uo(fo, u), [T, U] = W(null), V = X(
    t,
    (ze) => U(ze)
  ), [B, G] = W(null), F = di(B), D = (n = F == null ? void 0 : F.width) !== null && n !== void 0 ? n : 0, j = (o = F == null ? void 0 : F.height) !== null && o !== void 0 ? o : 0, L = d + (f !== "center" ? "-" + f : ""), Y = typeof w == "number" ? w : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...w
  }, _ = Array.isArray(b) ? b : [
    b
  ], z = _.length > 0, H = {
    padding: Y,
    boundary: _.filter(gi),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: z
  }, { refs: le, floatingStyles: me, placement: Ue, isPositioned: xe, middlewareData: oe } = li({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: L,
    whileElementsMounted: (...ze) => ti(...ze, {
      animationFrame: C === "always"
    }),
    elements: {
      reference: O.anchor
    },
    middleware: [
      kc({
        mainAxis: m + j,
        alignmentAxis: h
      }),
      g && ni({
        mainAxis: !0,
        crossAxis: !1,
        limiter: x === "partial" ? ii() : void 0,
        ...H
      }),
      g && oi({
        ...H
      }),
      ri({
        ...H,
        apply: ({ elements: ze, rects: un, availableWidth: xr, availableHeight: yr }) => {
          const { width: Cr, height: Er } = un.reference, et = ze.floating.style;
          et.setProperty("--radix-popper-available-width", `${xr}px`), et.setProperty("--radix-popper-available-height", `${yr}px`), et.setProperty("--radix-popper-anchor-width", `${Cr}px`), et.setProperty("--radix-popper-anchor-height", `${Er}px`);
        }
      }),
      B && si({
        element: B,
        padding: p
      }),
      bi({
        arrowWidth: D,
        arrowHeight: j
      }),
      y && ci({
        strategy: "referenceHidden",
        ...H
      })
    ]
  }), [he, Qe] = po(Ue), Z = ae(N);
  De(() => {
    xe && (Z == null || Z());
  }, [
    xe,
    Z
  ]);
  const Je = (r = oe.arrow) === null || r === void 0 ? void 0 : r.x, gr = (c = oe.arrow) === null || c === void 0 ? void 0 : c.y, br = ((i = oe.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !== 0, [$r, wr] = W();
  return De(() => {
    T && wr(window.getComputedStyle(T).zIndex);
  }, [
    T
  ]), /* @__PURE__ */ $("div", {
    ref: le.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...me,
      transform: xe ? me.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: $r,
      "--radix-popper-transform-origin": [
        (a = oe.transformOrigin) === null || a === void 0 ? void 0 : a.x,
        (s = oe.transformOrigin) === null || s === void 0 ? void 0 : s.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ $(hi, {
    scope: u,
    placedSide: he,
    onArrowChange: G,
    arrowX: Je,
    arrowY: gr,
    shouldHideArrow: br
  }, /* @__PURE__ */ $(Q.div, P({
    "data-side": he,
    "data-align": Qe
  }, S, {
    ref: V,
    style: {
      ...S.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: xe ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = oe.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function gi(e) {
  return e !== null;
}
const bi = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, o, r, c, i;
    const { placement: a, rects: s, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, m = d ? 0 : e.arrowWidth, f = d ? 0 : e.arrowHeight, [h, p] = po(a), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[p], b = ((o = (r = l.arrow) === null || r === void 0 ? void 0 : r.x) !== null && o !== void 0 ? o : 0) + m / 2, w = ((c = (i = l.arrow) === null || i === void 0 ? void 0 : i.y) !== null && c !== void 0 ? c : 0) + f / 2;
    let x = "", y = "";
    return h === "bottom" ? (x = d ? g : `${b}px`, y = `${-f}px`) : h === "top" ? (x = d ? g : `${b}px`, y = `${s.floating.height + f}px`) : h === "right" ? (x = `${-f}px`, y = d ? g : `${w}px`) : h === "left" && (x = `${s.floating.width + f}px`, y = d ? g : `${w}px`), {
      data: {
        x,
        y
      }
    };
  }
});
function po(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const mo = fi, ho = mi, vo = vi, go = /* @__PURE__ */ M((e, t) => {
  var n;
  const { container: o = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...r } = e;
  return o ? /* @__PURE__ */ zr.createPortal(/* @__PURE__ */ $(Q.div, P({}, r, {
    ref: t
  })), o) : null;
});
function $i(e, t) {
  return Pr((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const Pe = (e) => {
  const { present: t, children: n } = e, o = wi(t), r = typeof n == "function" ? n({
    present: o.isPresent
  }) : Ae.only(n), c = X(o.ref, r.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ jt(r, {
    ref: c
  }) : null;
};
Pe.displayName = "Presence";
function wi(e) {
  const [t, n] = W(), o = R({}), r = R(e), c = R("none"), i = e ? "mounted" : "unmounted", [a, s] = $i(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return I(() => {
    const l = nt(o.current);
    c.current = a === "mounted" ? l : "none";
  }, [
    a
  ]), De(() => {
    const l = o.current, u = r.current;
    if (u !== e) {
      const m = c.current, f = nt(l);
      e ? s("MOUNT") : f === "none" || (l == null ? void 0 : l.display) === "none" ? s("UNMOUNT") : s(u && m !== f ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [
    e,
    s
  ]), De(() => {
    if (t) {
      const l = (d) => {
        const f = nt(o.current).includes(d.animationName);
        d.target === t && f && Kn(
          () => s("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (c.current = nt(o.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      s("ANIMATION_END");
  }, [
    t,
    s
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(a),
    ref: K((l) => {
      l && (o.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function nt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function en({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [o, r] = xi({
    defaultProp: t,
    onChange: n
  }), c = e !== void 0, i = c ? e : o, a = ae(n), s = K((l) => {
    if (c) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && a(d);
    } else
      r(l);
  }, [
    c,
    e,
    r,
    a
  ]);
  return [
    i,
    s
  ];
}
function xi({ defaultProp: e, onChange: t }) {
  const n = W(e), [o] = n, r = R(o), c = ae(t);
  return I(() => {
    r.current !== o && (c(o), r.current = o);
  }, [
    o,
    r,
    c
  ]), n;
}
var yi = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Oe = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakMap(), rt = {}, Mt = 0, bo = function(e) {
  return e && (e.host || bo(e.parentNode));
}, Ci = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = bo(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ei = function(e, t, n, o) {
  var r = Ci(t, Array.isArray(e) ? e : [e]);
  rt[n] || (rt[n] = /* @__PURE__ */ new WeakMap());
  var c = rt[n], i = [], a = /* @__PURE__ */ new Set(), s = new Set(r), l = function(d) {
    !d || a.has(d) || (a.add(d), l(d.parentNode));
  };
  r.forEach(l);
  var u = function(d) {
    !d || s.has(d) || Array.prototype.forEach.call(d.children, function(m) {
      if (a.has(m))
        u(m);
      else {
        var f = m.getAttribute(o), h = f !== null && f !== "false", p = (Oe.get(m) || 0) + 1, g = (c.get(m) || 0) + 1;
        Oe.set(m, p), c.set(m, g), i.push(m), p === 1 && h && ot.set(m, !0), g === 1 && m.setAttribute(n, "true"), h || m.setAttribute(o, "true");
      }
    });
  };
  return u(t), a.clear(), Mt++, function() {
    i.forEach(function(d) {
      var m = Oe.get(d) - 1, f = c.get(d) - 1;
      Oe.set(d, m), c.set(d, f), m || (ot.has(d) || d.removeAttribute(o), ot.delete(d)), f || d.removeAttribute(n);
    }), Mt--, Mt || (Oe = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakMap(), rt = {});
  };
}, $o = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = t || yi(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), Ei(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, ie = function() {
  return ie = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var c in n)
        Object.prototype.hasOwnProperty.call(n, c) && (t[c] = n[c]);
    }
    return t;
  }, ie.apply(this, arguments);
};
function wo(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Pi(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, c; o < r; o++)
      (c || !(o in t)) && (c || (c = Array.prototype.slice.call(t, 0, o)), c[o] = t[o]);
  return e.concat(c || Array.prototype.slice.call(t));
}
var lt = "right-scroll-bar-position", dt = "width-before-scroll-bar", Si = "with-scroll-bars-hidden", _i = "--removed-body-scroll-bar-size";
function Nt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Oi(e, t) {
  var n = W(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && (n.value = o, n.callback(o, r));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var On = /* @__PURE__ */ new WeakMap();
function Mi(e, t) {
  var n = Oi(t || null, function(o) {
    return e.forEach(function(r) {
      return Nt(r, o);
    });
  });
  return E.useLayoutEffect(function() {
    var o = On.get(n);
    if (o) {
      var r = new Set(o), c = new Set(e), i = n.current;
      r.forEach(function(a) {
        c.has(a) || Nt(a, null);
      }), c.forEach(function(a) {
        r.has(a) || Nt(a, i);
      });
    }
    On.set(n, e);
  }, [e]), n;
}
function Ni(e) {
  return e;
}
function Ai(e, t) {
  t === void 0 && (t = Ni);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(c) {
      var i = t(c, o);
      return n.push(i), function() {
        n = n.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(c) {
      for (o = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(c);
      }
      n = {
        push: function(a) {
          return c(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(c) {
      o = !0;
      var i = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(c), i = n;
      }
      var s = function() {
        var u = i;
        i = [], u.forEach(c);
      }, l = function() {
        return Promise.resolve().then(s);
      };
      l(), n = {
        push: function(u) {
          i.push(u), l();
        },
        filter: function(u) {
          return i = i.filter(u), n;
        }
      };
    }
  };
  return r;
}
function Ri(e) {
  e === void 0 && (e = {});
  var t = Ai(null);
  return t.options = ie({ async: !0, ssr: !1 }, e), t;
}
var xo = function(e) {
  var t = e.sideCar, n = wo(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return E.createElement(o, ie({}, n));
};
xo.isSideCarExport = !0;
function ki(e, t) {
  return e.useMedium(t), xo;
}
var yo = Ri(), At = function() {
}, Ct = E.forwardRef(function(e, t) {
  var n = E.useRef(null), o = E.useState({
    onScrollCapture: At,
    onWheelCapture: At,
    onTouchMoveCapture: At
  }), r = o[0], c = o[1], i = e.forwardProps, a = e.children, s = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, m = e.sideCar, f = e.noIsolation, h = e.inert, p = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, w = wo(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = m, y = Mi([n, t]), C = ie(ie({}, w), r);
  return E.createElement(
    E.Fragment,
    null,
    u && E.createElement(x, { sideCar: yo, removeScrollBar: l, shards: d, noIsolation: f, inert: h, setCallbacks: c, allowPinchZoom: !!p, lockRef: n }),
    i ? E.cloneElement(E.Children.only(a), ie(ie({}, C), { ref: y })) : E.createElement(b, ie({}, C, { className: s, ref: y }), a)
  );
});
Ct.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ct.classNames = {
  fullWidth: dt,
  zeroRight: lt
};
var Mn, Ti = function() {
  if (Mn)
    return Mn;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Di() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ti();
  return t && e.setAttribute("nonce", t), e;
}
function Ii(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Fi(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Li = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Di()) && (Ii(t, n), Fi(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Bi = function() {
  var e = Li();
  return function(t, n) {
    E.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Co = function() {
  var e = Bi(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, Wi = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Rt = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ui = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Rt(n), Rt(o), Rt(r)];
}, zi = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Wi;
  var t = Ui(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, Vi = Co(), ke = "data-scroll-locked", Ki = function(e, t, n, o) {
  var r = e.left, c = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Si, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(a, "px ").concat(o, `;
  }
  body[`).concat(ke, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(c, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(lt, ` {
    right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(dt, ` {
    margin-right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(lt, " .").concat(lt, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(dt, " .").concat(dt, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(ke, `] {
    `).concat(_i, ": ").concat(a, `px;
  }
`);
}, Nn = function() {
  var e = parseInt(document.body.getAttribute(ke) || "0", 10);
  return isFinite(e) ? e : 0;
}, ji = function() {
  E.useEffect(function() {
    return document.body.setAttribute(ke, (Nn() + 1).toString()), function() {
      var e = Nn() - 1;
      e <= 0 ? document.body.removeAttribute(ke) : document.body.setAttribute(ke, e.toString());
    };
  }, []);
}, Hi = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  ji();
  var c = E.useMemo(function() {
    return zi(r);
  }, [r]);
  return E.createElement(Vi, { styles: Ki(c, !t, r, n ? "" : "!important") });
}, Bt = !1;
if (typeof window < "u")
  try {
    var ct = Object.defineProperty({}, "passive", {
      get: function() {
        return Bt = !0, !0;
      }
    });
    window.addEventListener("test", ct, ct), window.removeEventListener("test", ct, ct);
  } catch {
    Bt = !1;
  }
var Me = Bt ? { passive: !1 } : !1, Gi = function(e) {
  return e.tagName === "TEXTAREA";
}, Eo = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Gi(e) && n[t] === "visible")
  );
}, Yi = function(e) {
  return Eo(e, "overflowY");
}, Xi = function(e) {
  return Eo(e, "overflowX");
}, An = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Po(e, n);
    if (o) {
      var r = So(e, n), c = r[1], i = r[2];
      if (c > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, Zi = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, qi = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, Po = function(e, t) {
  return e === "v" ? Yi(t) : Xi(t);
}, So = function(e, t) {
  return e === "v" ? Zi(t) : qi(t);
}, Qi = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Ji = function(e, t, n, o, r) {
  var c = Qi(e, window.getComputedStyle(t).direction), i = c * o, a = n.target, s = t.contains(a), l = !1, u = i > 0, d = 0, m = 0;
  do {
    var f = So(e, a), h = f[0], p = f[1], g = f[2], b = p - g - c * h;
    (h || b) && Po(e, a) && (d += b, m += h), a = a.parentNode;
  } while (
    // portaled content
    !s && a !== document.body || // self content
    s && (t.contains(a) || t === a)
  );
  return (u && (r && d === 0 || !r && i > d) || !u && (r && m === 0 || !r && -i > m)) && (l = !0), l;
}, it = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Rn = function(e) {
  return [e.deltaX, e.deltaY];
}, kn = function(e) {
  return e && "current" in e ? e.current : e;
}, ea = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ta = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, na = 0, Ne = [];
function oa(e) {
  var t = E.useRef([]), n = E.useRef([0, 0]), o = E.useRef(), r = E.useState(na++)[0], c = E.useState(function() {
    return Co();
  })[0], i = E.useRef(e);
  E.useEffect(function() {
    i.current = e;
  }, [e]), E.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var p = Pi([e.lockRef.current], (e.shards || []).map(kn), !0).filter(Boolean);
      return p.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), p.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = E.useCallback(function(p, g) {
    if ("touches" in p && p.touches.length === 2)
      return !i.current.allowPinchZoom;
    var b = it(p), w = n.current, x = "deltaX" in p ? p.deltaX : w[0] - b[0], y = "deltaY" in p ? p.deltaY : w[1] - b[1], C, N = p.target, S = Math.abs(x) > Math.abs(y) ? "h" : "v";
    if ("touches" in p && S === "h" && N.type === "range")
      return !1;
    var O = An(S, N);
    if (!O)
      return !0;
    if (O ? C = S : (C = S === "v" ? "h" : "v", O = An(S, N)), !O)
      return !1;
    if (!o.current && "changedTouches" in p && (x || y) && (o.current = C), !C)
      return !0;
    var T = o.current || C;
    return Ji(T, g, p, T === "h" ? x : y, !0);
  }, []), s = E.useCallback(function(p) {
    var g = p;
    if (!(!Ne.length || Ne[Ne.length - 1] !== c)) {
      var b = "deltaY" in g ? Rn(g) : it(g), w = t.current.filter(function(C) {
        return C.name === g.type && C.target === g.target && ea(C.delta, b);
      })[0];
      if (w && w.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!w) {
        var x = (i.current.shards || []).map(kn).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), y = x.length > 0 ? a(g, x[0]) : !i.current.noIsolation;
        y && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = E.useCallback(function(p, g, b, w) {
    var x = { name: p, delta: g, target: b, should: w };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== x;
      });
    }, 1);
  }, []), u = E.useCallback(function(p) {
    n.current = it(p), o.current = void 0;
  }, []), d = E.useCallback(function(p) {
    l(p.type, Rn(p), p.target, a(p, e.lockRef.current));
  }, []), m = E.useCallback(function(p) {
    l(p.type, it(p), p.target, a(p, e.lockRef.current));
  }, []);
  E.useEffect(function() {
    return Ne.push(c), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", s, Me), document.addEventListener("touchmove", s, Me), document.addEventListener("touchstart", u, Me), function() {
      Ne = Ne.filter(function(p) {
        return p !== c;
      }), document.removeEventListener("wheel", s, Me), document.removeEventListener("touchmove", s, Me), document.removeEventListener("touchstart", u, Me);
    };
  }, []);
  var f = e.removeScrollBar, h = e.inert;
  return E.createElement(
    E.Fragment,
    null,
    h ? E.createElement(c, { styles: ta(r) }) : null,
    f ? E.createElement(Hi, { gapMode: "margin" }) : null
  );
}
const ra = ki(yo, oa);
var _o = E.forwardRef(function(e, t) {
  return E.createElement(Ct, ie({}, e, { ref: t, sideCar: ra }));
});
_o.classNames = Ct.classNames;
const Oo = _o, Mo = "Popover", [No, Il] = Fe(Mo, [
  yt
]), tn = yt(), [ca, We] = No(Mo), ia = (e) => {
  const { __scopePopover: t, children: n, open: o, defaultOpen: r, onOpenChange: c, modal: i = !1 } = e, a = tn(t), s = R(null), [l, u] = W(!1), [d = !1, m] = en({
    prop: o,
    defaultProp: r,
    onChange: c
  });
  return /* @__PURE__ */ $(mo, a, /* @__PURE__ */ $(ca, {
    scope: t,
    contentId: pt(),
    triggerRef: s,
    open: d,
    onOpenChange: m,
    onOpenToggle: K(
      () => m(
        (f) => !f
      ),
      [
        m
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: K(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: K(
      () => u(!1),
      []
    ),
    modal: i
  }, n));
}, aa = "PopoverTrigger", sa = /* @__PURE__ */ M((e, t) => {
  const { __scopePopover: n, ...o } = e, r = We(aa, n), c = tn(n), i = X(t, r.triggerRef), a = /* @__PURE__ */ $(Q.button, P({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": ko(r.open)
  }, o, {
    ref: i,
    onClick: A(e.onClick, r.onOpenToggle)
  }));
  return r.hasCustomAnchor ? a : /* @__PURE__ */ $(ho, P({
    asChild: !0
  }, c), a);
}), Ao = "PopoverPortal", [la, da] = No(Ao, {
  forceMount: void 0
}), ua = (e) => {
  const { __scopePopover: t, forceMount: n, children: o, container: r } = e, c = We(Ao, t);
  return /* @__PURE__ */ $(la, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ $(Pe, {
    present: n || c.open
  }, /* @__PURE__ */ $(go, {
    asChild: !0,
    container: r
  }, o)));
}, He = "PopoverContent", fa = /* @__PURE__ */ M((e, t) => {
  const n = da(He, e.__scopePopover), { forceMount: o = n.forceMount, ...r } = e, c = We(He, e.__scopePopover);
  return /* @__PURE__ */ $(Pe, {
    present: o || c.open
  }, c.modal ? /* @__PURE__ */ $(pa, P({}, r, {
    ref: t
  })) : /* @__PURE__ */ $(ma, P({}, r, {
    ref: t
  })));
}), pa = /* @__PURE__ */ M((e, t) => {
  const n = We(He, e.__scopePopover), o = R(null), r = X(t, o), c = R(!1);
  return I(() => {
    const i = o.current;
    if (i)
      return $o(i);
  }, []), /* @__PURE__ */ $(Oo, {
    as: Ce,
    allowPinchZoom: !0
  }, /* @__PURE__ */ $(Ro, P({}, e, {
    ref: r,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: A(e.onCloseAutoFocus, (i) => {
      var a;
      i.preventDefault(), c.current || (a = n.triggerRef.current) === null || a === void 0 || a.focus();
    }),
    onPointerDownOutside: A(e.onPointerDownOutside, (i) => {
      const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0, l = a.button === 2 || s;
      c.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: A(
      e.onFocusOutside,
      (i) => i.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), ma = /* @__PURE__ */ M((e, t) => {
  const n = We(He, e.__scopePopover), o = R(!1), r = R(!1);
  return /* @__PURE__ */ $(Ro, P({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (c) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, c), !c.defaultPrevented) {
        var a;
        o.current || (a = n.triggerRef.current) === null || a === void 0 || a.focus(), c.preventDefault();
      }
      o.current = !1, r.current = !1;
    },
    onInteractOutside: (c) => {
      var i, a;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, c), c.defaultPrevented || (o.current = !0, c.detail.originalEvent.type === "pointerdown" && (r.current = !0));
      const s = c.target;
      ((a = n.triggerRef.current) === null || a === void 0 ? void 0 : a.contains(s)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r.current && c.preventDefault();
    }
  }));
}), Ro = /* @__PURE__ */ M((e, t) => {
  const { __scopePopover: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: c, disableOutsidePointerEvents: i, onEscapeKeyDown: a, onPointerDownOutside: s, onFocusOutside: l, onInteractOutside: u, ...d } = e, m = We(He, n), f = tn(n);
  return Xn(), /* @__PURE__ */ $(Zn, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: c
  }, /* @__PURE__ */ $(Gn, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onInteractOutside: u,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: l,
    onDismiss: () => m.onOpenChange(!1)
  }, /* @__PURE__ */ $(vo, P({
    "data-state": ko(m.open),
    role: "dialog",
    id: m.contentId
  }, f, d, {
    ref: t,
    style: {
      ...d.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function ko(e) {
  return e ? "open" : "closed";
}
const ha = ia, va = sa, ga = ua, To = fa, Do = ha, Io = va, nn = E.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...o }, r) => /* @__PURE__ */ v(ga, { children: /* @__PURE__ */ v(
  To,
  {
    ref: r,
    align: t,
    sideOffset: n,
    className: q(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...o
  }
) }));
nn.displayName = To.displayName;
const Fl = () => {
  const [e, t] = W([]);
  return I(() => {
    kr.all().then((n) => t(n));
  }, []), /* @__PURE__ */ k(Do, { children: [
    /* @__PURE__ */ v(Io, { asChild: !0, className: "rounded-full border w-9 h-9 flex items-center bg-background justify-center", children: /* @__PURE__ */ v(ge, { size: "icon", variant: "ghost", children: /* @__PURE__ */ v(Ir, { size: 20 }) }) }),
    /* @__PURE__ */ v(nn, { className: "projects-grid", children: e.map(
      (n) => /* @__PURE__ */ k("a", { href: n.link, className: "w-full h-full flex flex-col items-center justify-center gap-2 rounded-md hover:bg-muted p-1", children: [
        /* @__PURE__ */ v("div", { className: "w-7 h-7 relative", children: /* @__PURE__ */ v("img", { src: n.iconUrl, className: "w-full h-full", alt: "project-icon" }) }),
        /* @__PURE__ */ v("span", { className: "text-xs text-center", children: n.name })
      ] }, "popover-" + n.doc_id)
    ) })
  ] });
}, ye = {
  numbers: (e) => e < 999 ? e : e >= 1e3 && e <= 999999 ? (e / 1e3).toFixed(1) + " тыс." : (e / 1e6).toFixed(1) + " млн.",
  random: (e, t) => {
    t = t || "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var n = "", o = 0; o < e; o++) {
      var r = Math.floor(Math.random() * t.length);
      n += t.substring(r, r + 1);
    }
    return n;
  },
  generateId: (e, t) => {
    const n = t ? "0123456789" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let o = "";
    for (let r = 0; r < e; r++) {
      const c = Math.floor(Math.random() * n.length);
      o += n.substring(c, c + 1);
    }
    return t ? parseInt(o) : o;
  },
  randomNum: (e = 0, t = 100) => Math.floor(Math.random() * (t - e + 1) + e)
}, ba = {
  resize: "none",
  outline: "none",
  display: "block",
  overflow: "hidden",
  backgroundColor: "transparent"
}, Ll = (e) => {
  const t = R(null), n = (o) => {
    if (e.onChange && e.onChange(o), t.current) {
      t.current.style.height = "40px";
      const r = t.current.scrollHeight;
      t.current.style.height = r + "px";
    }
  };
  return Gt(() => {
    const o = t.current;
    if (e.value && o) {
      t.current.style.height = "40px";
      const r = t.current.scrollHeight;
      t.current.style.height = r + "px";
    }
  }, [e.value, t]), /* @__PURE__ */ v("textarea", { ...e, ref: t, onChange: n, style: { ...ba } });
}, $a = Vr(() => import("./markdown-e5d6ecc8.mjs"), {
  // Make sure we turn SSR off
  ssr: !1
}), wa = M(
  (e, t) => /* @__PURE__ */ v($a, { ...e, editorRef: t })
);
wa.displayName = "ForwardRefEditor";
const xa = ({ notification: e }) => {
  const t = R(null), [n] = jr(t), { fromSeconds: o } = jn, r = o(e.createdAt);
  return I(() => {
    !e.isViewed && n && Tt.patch(e.receiver, e.doc_id, { isViewed: !0 });
  }, [e.isViewed, n]), /* @__PURE__ */ k("div", { ref: t, className: "w-full h-fit flex justify-between group cursor-pointer hover:bg-card transition-colors", children: [
    e.link ? /* @__PURE__ */ k("div", { className: "w-fit h-fit flex items-center relative", children: [
      /* @__PURE__ */ v(Hr, { href: e.link, className: "absolute w-full h-full left-0 top-0" }),
      /* @__PURE__ */ v("div", { className: "p-4", children: /* @__PURE__ */ v("div", { className: "w-9 h-9 rounded-full bg-muted" }) }),
      /* @__PURE__ */ k("div", { className: "w-full h-fit flex flex-col py-4", children: [
        /* @__PURE__ */ v("span", { className: "text-sm", children: e.message }),
        /* @__PURE__ */ v("span", { className: "text-xs text-muted-foreground", children: r.setLocale("ru").toRelative() })
      ] })
    ] }) : /* @__PURE__ */ k("div", { className: "w-fit h-fit flex items-center", children: [
      /* @__PURE__ */ v("div", { className: "p-4", children: /* @__PURE__ */ v("div", { className: "w-9 h-9 rounded-full bg-muted" }) }),
      /* @__PURE__ */ k("div", { className: "w-full h-fit flex flex-col py-4", children: [
        /* @__PURE__ */ v("span", { className: "text-sm", children: e.message }),
        /* @__PURE__ */ v("span", { className: "text-xs text-muted-foreground", children: r.setLocale("ru").toRelative() })
      ] })
    ] }),
    /* @__PURE__ */ v("div", { className: "p-4", children: /* @__PURE__ */ v(
      ge,
      {
        size: "icon",
        variant: "ghost",
        className: "opacity-0 group-hover:opacity-100 transition-opacity rounded-full",
        onClick: () => Tt.delete(e.receiver, e.doc_id),
        children: /* @__PURE__ */ v(Sr, {})
      }
    ) })
  ] });
}, ya = Wn(xa), Ca = (
  // process.env.NEXT_PUBLIC_API_HOST_PROD as string
  process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_API_HOST_DEV : process.env.NEXT_PUBLIC_API_HOST_PROD
), Wt = "horizontal", Ea = [
  "horizontal",
  "vertical"
], Fo = /* @__PURE__ */ M((e, t) => {
  const { decorative: n, orientation: o = Wt, ...r } = e, c = Lo(o) ? o : Wt, a = n ? {
    role: "none"
  } : {
    "aria-orientation": c === "vertical" ? c : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ $(Q.div, P({
    "data-orientation": c
  }, a, r, {
    ref: t
  }));
});
Fo.propTypes = {
  orientation(e, t, n) {
    const o = e[t], r = String(o);
    return o && !Lo(o) ? new Error(Pa(r, n)) : null;
  }
};
function Pa(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Wt}\`.`;
}
function Lo(e) {
  return Ea.includes(e);
}
const Bo = Fo, Wo = E.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, r) => /* @__PURE__ */ v(
    Bo,
    {
      ref: r,
      decorative: n,
      orientation: t,
      className: q(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...o
    }
  )
);
Wo.displayName = Bo.displayName;
const Bl = ({ auth: e }) => {
  const [t, n] = W(!1), [o] = Kr(e), [r, c] = W([]), i = r.filter((s) => !s.isViewed), a = () => {
    r.length && o && r.forEach((s) => Tt.delete(o.uid, s.doc_id));
  };
  return I(() => {
    const s = Gr(Ca);
    return s.on("connect", () => {
      console.log("Connected to notifications"), o && s.emit("notifications", o.uid);
    }), s.on("notifications", (l) => {
      c(l);
    }), s.on("exception", (l) => {
      console.log("event", l);
    }), s.on("disconnect", () => {
      console.log("Disconnected");
    }), () => {
      s.close();
    };
  }, [o == null ? void 0 : o.uid]), !o || !e ? null : /* @__PURE__ */ k(Do, { open: o ? t : !1, onOpenChange: (s) => n(s), children: [
    /* @__PURE__ */ k(Io, { className: "relative w-9 h-9 rounded-full flex items-center justify-center border bg-background", children: [
      i.length !== 0 && /* @__PURE__ */ v("div", { className: "absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-primary" }),
      /* @__PURE__ */ v(Rr, { size: 16 })
    ] }),
    /* @__PURE__ */ k(nn, { className: "w-96 p-0 flex flex-col bg-background", children: [
      /* @__PURE__ */ v("div", { className: "w-full border-b p-3 flex items-center", children: /* @__PURE__ */ v("div", { className: "w-fit h-fit flex items-center gap-4", children: /* @__PURE__ */ v("span", { className: "text-sm text-muted-foreground", children: "Входящие" }) }) }),
      /* @__PURE__ */ v("div", { className: "w-full h-full flex flex-col", children: r.length ? r.map((s, l) => /* @__PURE__ */ k(Te, { children: [
        /* @__PURE__ */ v(ya, { notification: s }, s.doc_id),
        l !== r.length - 1 && /* @__PURE__ */ v(Wo, {}, s.doc_id + "-separator")
      ] })) : /* @__PURE__ */ v("div", { className: "w-full h-64 flex items-center justify-center", children: /* @__PURE__ */ v("span", { className: "text-center text-sm text-muted-foreground", children: "Нет новых уведомлений" }) }) }),
      /* @__PURE__ */ v("div", { className: "w-full h-fit p-2 border-t flex items-center justify-center", children: /* @__PURE__ */ v(ge, { size: "sm", onClick: a, variant: "ghost", children: "Очистить" }) })
    ] })
  ] });
}, Sa = ({ onSelect: e, isCurrent: t = !1, isSelected: n = !1, uid: o, noBorder: r = !1 }) => {
  const [c, i] = W(null);
  return I(() => {
    Vn.byId.short(o).then((a) => i(a));
  }, [o]), c ? /* @__PURE__ */ k(
    "div",
    {
      onClick: () => c && e && e(c),
      className: q(
        r ? "border-b-0" : "border-b",
        "w-full p-3 flex items-center gap-2 hover:bg-card transition-colors cursor-pointer"
      ),
      children: [
        /* @__PURE__ */ k("div", { className: "w-10 aspect-square relative flex items-center justify-center", children: [
          t && /* @__PURE__ */ v("div", { className: "absolute z-10 w-full h-full flex items-center justify-center rounded-full bg-green-600", children: /* @__PURE__ */ v(_r, { className: "text-accent-foreground", size: 24 }) }),
          c.photoUrl ? /* @__PURE__ */ v(Kt, { className: "rounded-full", src: c.photoUrl, width: 40, height: 40, alt: "profile-photo" }) : /* @__PURE__ */ v("div", { className: "w-10 rounded-full aspect-square bg-muted" })
        ] }),
        /* @__PURE__ */ k("div", { className: "h-full flex flex-col justify-center", children: [
          /* @__PURE__ */ v("span", { className: "font-medium leading-6", children: c.displayName || "Пользователь" }),
          /* @__PURE__ */ v("span", { className: "text-xs text-muted-foreground", children: c.position || c.email })
        ] })
      ]
    }
  ) : null;
}, Wl = ({ position: e = "absolute", onUser: t, members: n = [], user: o = null }) => {
  const [r, c] = W(!1), [i, a] = W(null), s = () => {
    i && t && t(i.uid);
  };
  return r ? null : /* @__PURE__ */ v(
    "div",
    {
      className: q(
        e,
        "md:!top-4 -top-2.5 md:!right-4 -right-6 md:!w-96 w-screen h-fit rounded-lg bg-background border z-50"
      ),
      children: /* @__PURE__ */ k("div", { className: "w-full h-fit p-4 space-y-2", children: [
        /* @__PURE__ */ k("div", { className: "flex items-center w-full justify-between", children: [
          /* @__PURE__ */ k("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ v(Kt, { src: Tr("/dm/icons/dm-star-dark.svg"), width: 24, height: 24, alt: "star-logo" }),
            /* @__PURE__ */ v("span", { className: "text-base font-medium", children: "Darkmaterial" })
          ] }),
          /* @__PURE__ */ v(ge, { size: "icon", variant: "ghost", onClick: () => c(!0), children: /* @__PURE__ */ v(Or, { size: 18 }) })
        ] }),
        /* @__PURE__ */ v("div", { className: "w-full flex flex-col", children: n.map((l, u, d) => /* @__PURE__ */ v(
          Sa,
          {
            uid: l,
            noBorder: u === d.length - 1,
            onSelect: a,
            isSelected: i ? l === i.uid : !1,
            isCurrent: o ? l === o.uid : !1
          },
          l + "-fast-pick"
        )) }),
        i && /* @__PURE__ */ k(ge, { className: "w-full", onClick: s, children: [
          "Продолжить как ",
          i.nickname || i.displayName || "Пользователь"
        ] })
      ] })
    }
  );
}, _a = ({ index: e, height: t, width: n }) => {
  const o = ye.randomNum(0, 10), r = ye.randomNum(0, 2), c = ye.randomNum(1, 3), i = ye.randomNum(1, 3), a = [
    { min: 0.25, max: 0.5 },
    { min: 0.5, max: 0.7 },
    { min: 0.6, max: 1 }
  ];
  return /* @__PURE__ */ v(
    Yr.div,
    {
      initial: { opacity: a[r].min },
      animate: { opacity: a[r].max },
      transition: { repeat: 1 / 0, repeatType: "mirror", duration: c, delay: o },
      style: {
        width: `${i}px`,
        height: `${i}px`,
        top: ye.randomNum(0 + 10, t - 10),
        left: ye.randomNum(0 + 10, n - 10)
      },
      className: "absolute w-0.5 h-0.5 rounded-full bg-primary"
    },
    "star-" + e
  );
}, Ul = ({ starsCount: e = 50 }) => {
  const t = Ve(() => Array.from({ length: e }).map((l, u) => u), []), n = R(null), [o, r] = W(0), [c, i] = W(0), [a, s] = W(!1);
  return I(() => {
    const l = n.current;
    if (l) {
      const { offsetWidth: u, offsetHeight: d } = l;
      r(u), i(d), s(!0);
    }
  }, [n]), /* @__PURE__ */ v("div", { ref: n, className: q(
    a ? "opacity-100" : "opacity-0",
    "absolute w-full h-full z-[-1]"
  ), children: t.map(
    (l) => /* @__PURE__ */ v(_a, { width: o, height: c, index: l }, "star-" + l + "-" + ye.generateId(6))
  ) });
}, Uo = [
  {
    type: "wrapper",
    className: "flex flex-col w-full h-fit",
    items: [
      {
        type: "user"
      },
      {
        type: "links",
        items: [
          {
            icon: Mr,
            text: "Настройки",
            link: "https://id.darkmaterial.space/"
          }
        ]
      }
    ]
  },
  {
    type: "wrapper",
    className: "flex flex-col w-full h-fit mt-auto",
    items: [
      {
        type: "sign-out"
      },
      {
        type: "membership",
        activeState: "inactive",
        state: {
          active: "У вас уже есть Плюс",
          inactive: /* @__PURE__ */ v(ge, { variant: "outline", className: "w-full", children: /* @__PURE__ */ v("a", { href: "/plus", children: "Получить Плюс" }) })
        }
      }
    ]
  }
];
function zo(e) {
  const t = e + "CollectionProvider", [n, o] = Fe(t), [r, c] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), i = (f) => {
    const { scope: h, children: p } = f, g = ce.useRef(null), b = ce.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ ce.createElement(r, {
      scope: h,
      itemMap: b,
      collectionRef: g
    }, p);
  }, a = e + "CollectionSlot", s = /* @__PURE__ */ ce.forwardRef((f, h) => {
    const { scope: p, children: g } = f, b = c(a, p), w = X(h, b.collectionRef);
    return /* @__PURE__ */ ce.createElement(Ce, {
      ref: w
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ ce.forwardRef((f, h) => {
    const { scope: p, children: g, ...b } = f, w = ce.useRef(null), x = X(h, w), y = c(l, p);
    return ce.useEffect(() => (y.itemMap.set(w, {
      ref: w,
      ...b
    }), () => void y.itemMap.delete(w))), /* @__PURE__ */ ce.createElement(Ce, {
      [u]: "",
      ref: x
    }, g);
  });
  function m(f) {
    const h = c(e + "CollectionConsumer", f);
    return ce.useCallback(() => {
      const g = h.collectionRef.current;
      if (!g)
        return [];
      const b = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(h.itemMap.values()).sort(
        (y, C) => b.indexOf(y.ref.current) - b.indexOf(C.ref.current)
      );
    }, [
      h.collectionRef,
      h.itemMap
    ]);
  }
  return [
    {
      Provider: i,
      Slot: s,
      ItemSlot: d
    },
    m,
    o
  ];
}
const Oa = /* @__PURE__ */ ft(void 0);
function Vo(e) {
  const t = Ht(Oa);
  return e || t || "ltr";
}
const kt = "rovingFocusGroup.onEntryFocus", Ma = {
  bubbles: !1,
  cancelable: !0
}, on = "RovingFocusGroup", [Ut, Ko, Na] = zo(on), [Aa, jo] = Fe(on, [
  Na
]), [Ra, ka] = Aa(on), Ta = /* @__PURE__ */ M((e, t) => /* @__PURE__ */ $(Ut.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ $(Ut.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ $(Da, P({}, e, {
  ref: t
}))))), Da = /* @__PURE__ */ M((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: o, loop: r = !1, dir: c, currentTabStopId: i, defaultCurrentTabStopId: a, onCurrentTabStopIdChange: s, onEntryFocus: l, ...u } = e, d = R(null), m = X(t, d), f = Vo(c), [h = null, p] = en({
    prop: i,
    defaultProp: a,
    onChange: s
  }), [g, b] = W(!1), w = ae(l), x = Ko(n), y = R(!1), [C, N] = W(0);
  return I(() => {
    const S = d.current;
    if (S)
      return S.addEventListener(kt, w), () => S.removeEventListener(kt, w);
  }, [
    w
  ]), /* @__PURE__ */ $(Ra, {
    scope: n,
    orientation: o,
    dir: f,
    loop: r,
    currentTabStopId: h,
    onItemFocus: K(
      (S) => p(S),
      [
        p
      ]
    ),
    onItemShiftTab: K(
      () => b(!0),
      []
    ),
    onFocusableItemAdd: K(
      () => N(
        (S) => S + 1
      ),
      []
    ),
    onFocusableItemRemove: K(
      () => N(
        (S) => S - 1
      ),
      []
    )
  }, /* @__PURE__ */ $(Q.div, P({
    tabIndex: g || C === 0 ? -1 : 0,
    "data-orientation": o
  }, u, {
    ref: m,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: A(e.onMouseDown, () => {
      y.current = !0;
    }),
    onFocus: A(e.onFocus, (S) => {
      const O = !y.current;
      if (S.target === S.currentTarget && O && !g) {
        const T = new CustomEvent(kt, Ma);
        if (S.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
          const U = x().filter(
            (D) => D.focusable
          ), V = U.find(
            (D) => D.active
          ), B = U.find(
            (D) => D.id === h
          ), F = [
            V,
            B,
            ...U
          ].filter(Boolean).map(
            (D) => D.ref.current
          );
          Ho(F);
        }
      }
      y.current = !1;
    }),
    onBlur: A(
      e.onBlur,
      () => b(!1)
    )
  })));
}), Ia = "RovingFocusGroupItem", Fa = /* @__PURE__ */ M((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: o = !0, active: r = !1, tabStopId: c, ...i } = e, a = pt(), s = c || a, l = ka(Ia, n), u = l.currentTabStopId === s, d = Ko(n), { onFocusableItemAdd: m, onFocusableItemRemove: f } = l;
  return I(() => {
    if (o)
      return m(), () => f();
  }, [
    o,
    m,
    f
  ]), /* @__PURE__ */ $(Ut.ItemSlot, {
    scope: n,
    id: s,
    focusable: o,
    active: r
  }, /* @__PURE__ */ $(Q.span, P({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, i, {
    ref: t,
    onMouseDown: A(e.onMouseDown, (h) => {
      o ? l.onItemFocus(s) : h.preventDefault();
    }),
    onFocus: A(
      e.onFocus,
      () => l.onItemFocus(s)
    ),
    onKeyDown: A(e.onKeyDown, (h) => {
      if (h.key === "Tab" && h.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (h.target !== h.currentTarget)
        return;
      const p = Wa(h, l.orientation, l.dir);
      if (p !== void 0) {
        h.preventDefault();
        let b = d().filter(
          (w) => w.focusable
        ).map(
          (w) => w.ref.current
        );
        if (p === "last")
          b.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && b.reverse();
          const w = b.indexOf(h.currentTarget);
          b = l.loop ? Ua(b, w + 1) : b.slice(w + 1);
        }
        setTimeout(
          () => Ho(b)
        );
      }
    })
  })));
}), La = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ba(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Wa(e, t, n) {
  const o = Ba(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(o)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(o)))
    return La[o];
}
function Ho(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Ua(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
const za = Ta, Va = Fa, zt = [
  "Enter",
  " "
], Ka = [
  "ArrowDown",
  "PageUp",
  "Home"
], Go = [
  "ArrowUp",
  "PageDown",
  "End"
], ja = [
  ...Ka,
  ...Go
], Ha = {
  ltr: [
    ...zt,
    "ArrowRight"
  ],
  rtl: [
    ...zt,
    "ArrowLeft"
  ]
}, Ga = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Et = "Menu", [Ge, Ya, Xa] = zo(Et), [Se, Yo] = Fe(Et, [
  Xa,
  yt,
  jo
]), rn = yt(), Xo = jo(), [Za, _e] = Se(Et), [qa, qe] = Se(Et), Qa = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: c, modal: i = !0 } = e, a = rn(t), [s, l] = W(null), u = R(!1), d = ae(c), m = Vo(r);
  return I(() => {
    const f = () => {
      u.current = !0, document.addEventListener("pointerdown", h, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", h, {
        capture: !0,
        once: !0
      });
    }, h = () => u.current = !1;
    return document.addEventListener("keydown", f, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", f, {
        capture: !0
      }), document.removeEventListener("pointerdown", h, {
        capture: !0
      }), document.removeEventListener("pointermove", h, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ $(mo, a, /* @__PURE__ */ $(Za, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: s,
    onContentChange: l
  }, /* @__PURE__ */ $(qa, {
    scope: t,
    onClose: K(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: m,
    modal: i
  }, o)));
}, Zo = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, ...o } = e, r = rn(n);
  return /* @__PURE__ */ $(ho, P({}, r, o, {
    ref: t
  }));
}), qo = "MenuPortal", [Ja, Qo] = Se(qo, {
  forceMount: void 0
}), es = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, c = _e(qo, t);
  return /* @__PURE__ */ $(Ja, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ $(Pe, {
    present: n || c.open
  }, /* @__PURE__ */ $(go, {
    asChild: !0,
    container: r
  }, o)));
}, re = "MenuContent", [ts, cn] = Se(re), ns = /* @__PURE__ */ M((e, t) => {
  const n = Qo(re, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, c = _e(re, e.__scopeMenu), i = qe(re, e.__scopeMenu);
  return /* @__PURE__ */ $(Ge.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(Pe, {
    present: o || c.open
  }, /* @__PURE__ */ $(Ge.Slot, {
    scope: e.__scopeMenu
  }, i.modal ? /* @__PURE__ */ $(os, P({}, r, {
    ref: t
  })) : /* @__PURE__ */ $(rs, P({}, r, {
    ref: t
  })))));
}), os = /* @__PURE__ */ M((e, t) => {
  const n = _e(re, e.__scopeMenu), o = R(null), r = X(t, o);
  return I(() => {
    const c = o.current;
    if (c)
      return $o(c);
  }, []), /* @__PURE__ */ $(an, P({}, e, {
    ref: r,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: A(
      e.onFocusOutside,
      (c) => c.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), rs = /* @__PURE__ */ M((e, t) => {
  const n = _e(re, e.__scopeMenu);
  return /* @__PURE__ */ $(an, P({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), an = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, loop: o = !1, trapFocus: r, onOpenAutoFocus: c, onCloseAutoFocus: i, disableOutsidePointerEvents: a, onEntryFocus: s, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: m, onDismiss: f, disableOutsideScroll: h, ...p } = e, g = _e(re, n), b = qe(re, n), w = rn(n), x = Xo(n), y = Ya(n), [C, N] = W(null), S = R(null), O = X(t, S, g.onContentChange), T = R(0), U = R(""), V = R(0), B = R(null), G = R("right"), F = R(0), D = h ? Oo : Un, j = h ? {
    as: Ce,
    allowPinchZoom: !0
  } : void 0, L = (_) => {
    var z, H;
    const le = U.current + _, me = y().filter(
      (Z) => !Z.disabled
    ), Ue = document.activeElement, xe = (z = me.find(
      (Z) => Z.ref.current === Ue
    )) === null || z === void 0 ? void 0 : z.textValue, oe = me.map(
      (Z) => Z.textValue
    ), he = ws(oe, le, xe), Qe = (H = me.find(
      (Z) => Z.textValue === he
    )) === null || H === void 0 ? void 0 : H.ref.current;
    (function Z(Je) {
      U.current = Je, window.clearTimeout(T.current), Je !== "" && (T.current = window.setTimeout(
        () => Z(""),
        1e3
      ));
    })(le), Qe && setTimeout(
      () => Qe.focus()
    );
  };
  I(() => () => window.clearTimeout(T.current), []), Xn();
  const Y = K((_) => {
    var z, H;
    return G.current === ((z = B.current) === null || z === void 0 ? void 0 : z.side) && ys(_, (H = B.current) === null || H === void 0 ? void 0 : H.area);
  }, []);
  return /* @__PURE__ */ $(ts, {
    scope: n,
    searchRef: U,
    onItemEnter: K((_) => {
      Y(_) && _.preventDefault();
    }, [
      Y
    ]),
    onItemLeave: K((_) => {
      var z;
      Y(_) || ((z = S.current) === null || z === void 0 || z.focus(), N(null));
    }, [
      Y
    ]),
    onTriggerLeave: K((_) => {
      Y(_) && _.preventDefault();
    }, [
      Y
    ]),
    pointerGraceTimerRef: V,
    onPointerGraceIntentChange: K((_) => {
      B.current = _;
    }, [])
  }, /* @__PURE__ */ $(D, j, /* @__PURE__ */ $(Zn, {
    asChild: !0,
    trapped: r,
    onMountAutoFocus: A(c, (_) => {
      var z;
      _.preventDefault(), (z = S.current) === null || z === void 0 || z.focus();
    }),
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ $(Gn, {
    asChild: !0,
    disableOutsidePointerEvents: a,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: m,
    onDismiss: f
  }, /* @__PURE__ */ $(za, P({
    asChild: !0
  }, x, {
    dir: b.dir,
    orientation: "vertical",
    loop: o,
    currentTabStopId: C,
    onCurrentTabStopIdChange: N,
    onEntryFocus: A(s, (_) => {
      b.isUsingKeyboardRef.current || _.preventDefault();
    })
  }), /* @__PURE__ */ $(vo, P({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": or(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, w, p, {
    ref: O,
    style: {
      outline: "none",
      ...p.style
    },
    onKeyDown: A(p.onKeyDown, (_) => {
      const H = _.target.closest("[data-radix-menu-content]") === _.currentTarget, le = _.ctrlKey || _.altKey || _.metaKey, me = _.key.length === 1;
      H && (_.key === "Tab" && _.preventDefault(), !le && me && L(_.key));
      const Ue = S.current;
      if (_.target !== Ue || !ja.includes(_.key))
        return;
      _.preventDefault();
      const oe = y().filter(
        (he) => !he.disabled
      ).map(
        (he) => he.ref.current
      );
      Go.includes(_.key) && oe.reverse(), bs(oe);
    }),
    onBlur: A(e.onBlur, (_) => {
      _.currentTarget.contains(_.target) || (window.clearTimeout(T.current), U.current = "");
    }),
    onPointerMove: A(e.onPointerMove, Ye((_) => {
      const z = _.target, H = F.current !== _.clientX;
      if (_.currentTarget.contains(z) && H) {
        const le = _.clientX > F.current ? "right" : "left";
        G.current = le, F.current = _.clientX;
      }
    }))
  })))))));
}), cs = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return /* @__PURE__ */ $(Q.div, P({}, o, {
    ref: t
  }));
}), Vt = "MenuItem", Tn = "menu.itemSelect", sn = /* @__PURE__ */ M((e, t) => {
  const { disabled: n = !1, onSelect: o, ...r } = e, c = R(null), i = qe(Vt, e.__scopeMenu), a = cn(Vt, e.__scopeMenu), s = X(t, c), l = R(!1), u = () => {
    const d = c.current;
    if (!n && d) {
      const m = new CustomEvent(Tn, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        Tn,
        (f) => o == null ? void 0 : o(f),
        {
          once: !0
        }
      ), Hn(d, m), m.defaultPrevented ? l.current = !1 : i.onClose();
    }
  };
  return /* @__PURE__ */ $(Jo, P({}, r, {
    ref: s,
    disabled: n,
    onClick: A(e.onClick, u),
    onPointerDown: (d) => {
      var m;
      (m = e.onPointerDown) === null || m === void 0 || m.call(e, d), l.current = !0;
    },
    onPointerUp: A(e.onPointerUp, (d) => {
      var m;
      l.current || (m = d.currentTarget) === null || m === void 0 || m.click();
    }),
    onKeyDown: A(e.onKeyDown, (d) => {
      const m = a.searchRef.current !== "";
      n || m && d.key === " " || zt.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), Jo = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, disabled: o = !1, textValue: r, ...c } = e, i = cn(Vt, n), a = Xo(n), s = R(null), l = X(t, s), [u, d] = W(!1), [m, f] = W("");
  return I(() => {
    const h = s.current;
    if (h) {
      var p;
      f(((p = h.textContent) !== null && p !== void 0 ? p : "").trim());
    }
  }, [
    c.children
  ]), /* @__PURE__ */ $(Ge.ItemSlot, {
    scope: n,
    disabled: o,
    textValue: r ?? m
  }, /* @__PURE__ */ $(Va, P({
    asChild: !0
  }, a, {
    focusable: !o
  }), /* @__PURE__ */ $(Q.div, P({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0
  }, c, {
    ref: l,
    onPointerMove: A(e.onPointerMove, Ye((h) => {
      o ? i.onItemLeave(h) : (i.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus());
    })),
    onPointerLeave: A(e.onPointerLeave, Ye(
      (h) => i.onItemLeave(h)
    )),
    onFocus: A(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: A(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), is = /* @__PURE__ */ M((e, t) => {
  const { checked: n = !1, onCheckedChange: o, ...r } = e;
  return /* @__PURE__ */ $(tr, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ $(sn, P({
    role: "menuitemcheckbox",
    "aria-checked": bt(n) ? "mixed" : n
  }, r, {
    ref: t,
    "data-state": ln(n),
    onSelect: A(
      r.onSelect,
      () => o == null ? void 0 : o(bt(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), as = "MenuRadioGroup", [zl, ss] = Se(as, {
  value: void 0,
  onValueChange: () => {
  }
}), ls = "MenuRadioItem", ds = /* @__PURE__ */ M((e, t) => {
  const { value: n, ...o } = e, r = ss(ls, e.__scopeMenu), c = n === r.value;
  return /* @__PURE__ */ $(tr, {
    scope: e.__scopeMenu,
    checked: c
  }, /* @__PURE__ */ $(sn, P({
    role: "menuitemradio",
    "aria-checked": c
  }, o, {
    ref: t,
    "data-state": ln(c),
    onSelect: A(o.onSelect, () => {
      var i;
      return (i = r.onValueChange) === null || i === void 0 ? void 0 : i.call(r, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), er = "MenuItemIndicator", [tr, us] = Se(er, {
  checked: !1
}), fs = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, forceMount: o, ...r } = e, c = us(er, n);
  return /* @__PURE__ */ $(Pe, {
    present: o || bt(c.checked) || c.checked === !0
  }, /* @__PURE__ */ $(Q.span, P({}, r, {
    ref: t,
    "data-state": ln(c.checked)
  })));
}), ps = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return /* @__PURE__ */ $(Q.div, P({
    role: "separator",
    "aria-orientation": "horizontal"
  }, o, {
    ref: t
  }));
}), ms = "MenuSub", [Vl, nr] = Se(ms), at = "MenuSubTrigger", hs = /* @__PURE__ */ M((e, t) => {
  const n = _e(at, e.__scopeMenu), o = qe(at, e.__scopeMenu), r = nr(at, e.__scopeMenu), c = cn(at, e.__scopeMenu), i = R(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: s } = c, l = {
    __scopeMenu: e.__scopeMenu
  }, u = K(() => {
    i.current && window.clearTimeout(i.current), i.current = null;
  }, []);
  return I(
    () => u,
    [
      u
    ]
  ), I(() => {
    const d = a.current;
    return () => {
      window.clearTimeout(d), s(null);
    };
  }, [
    a,
    s
  ]), /* @__PURE__ */ $(Zo, P({
    asChild: !0
  }, l), /* @__PURE__ */ $(Jo, P({
    id: r.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": r.contentId,
    "data-state": or(n.open)
  }, e, {
    ref: $t(t, r.onTriggerChange),
    onClick: (d) => {
      var m;
      (m = e.onClick) === null || m === void 0 || m.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: A(e.onPointerMove, Ye((d) => {
      c.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !i.current && (c.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: A(e.onPointerLeave, Ye((d) => {
      var m;
      u();
      const f = (m = n.content) === null || m === void 0 ? void 0 : m.getBoundingClientRect();
      if (f) {
        var h;
        const p = (h = n.content) === null || h === void 0 ? void 0 : h.dataset.side, g = p === "right", b = g ? -5 : 5, w = f[g ? "left" : "right"], x = f[g ? "right" : "left"];
        c.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: d.clientX + b,
              y: d.clientY
            },
            {
              x: w,
              y: f.top
            },
            {
              x,
              y: f.top
            },
            {
              x,
              y: f.bottom
            },
            {
              x: w,
              y: f.bottom
            }
          ],
          side: p
        }), window.clearTimeout(a.current), a.current = window.setTimeout(
          () => c.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (c.onTriggerLeave(d), d.defaultPrevented)
          return;
        c.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: A(e.onKeyDown, (d) => {
      const m = c.searchRef.current !== "";
      if (!(e.disabled || m && d.key === " ") && Ha[o.dir].includes(d.key)) {
        var f;
        n.onOpenChange(!0), (f = n.content) === null || f === void 0 || f.focus(), d.preventDefault();
      }
    })
  })));
}), vs = "MenuSubContent", gs = /* @__PURE__ */ M((e, t) => {
  const n = Qo(re, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, c = _e(re, e.__scopeMenu), i = qe(re, e.__scopeMenu), a = nr(vs, e.__scopeMenu), s = R(null), l = X(t, s);
  return /* @__PURE__ */ $(Ge.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(Pe, {
    present: o || c.open
  }, /* @__PURE__ */ $(Ge.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(an, P({
    id: a.contentId,
    "aria-labelledby": a.triggerId
  }, r, {
    ref: l,
    align: "start",
    side: i.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    trapFocus: !1,
    onOpenAutoFocus: (u) => {
      var d;
      i.isUsingKeyboardRef.current && ((d = s.current) === null || d === void 0 || d.focus()), u.preventDefault();
    },
    onCloseAutoFocus: (u) => u.preventDefault(),
    onFocusOutside: A(e.onFocusOutside, (u) => {
      u.target !== a.trigger && c.onOpenChange(!1);
    }),
    onEscapeKeyDown: A(e.onEscapeKeyDown, (u) => {
      i.onClose(), u.preventDefault();
    }),
    onKeyDown: A(e.onKeyDown, (u) => {
      const d = u.currentTarget.contains(u.target), m = Ga[i.dir].includes(u.key);
      if (d && m) {
        var f;
        c.onOpenChange(!1), (f = a.trigger) === null || f === void 0 || f.focus(), u.preventDefault();
      }
    })
  })))));
});
function or(e) {
  return e ? "open" : "closed";
}
function bt(e) {
  return e === "indeterminate";
}
function ln(e) {
  return bt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function bs(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function $s(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
function ws(e, t, n) {
  const r = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, c = n ? e.indexOf(n) : -1;
  let i = $s(e, Math.max(c, 0));
  r.length === 1 && (i = i.filter(
    (l) => l !== n
  ));
  const s = i.find(
    (l) => l.toLowerCase().startsWith(r.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function xs(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let c = 0, i = t.length - 1; c < t.length; i = c++) {
    const a = t[c].x, s = t[c].y, l = t[i].x, u = t[i].y;
    s > o != u > o && n < (l - a) * (o - s) / (u - s) + a && (r = !r);
  }
  return r;
}
function ys(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return xs(n, t);
}
function Ye(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Cs = Qa, Es = Zo, Ps = es, Ss = ns, _s = cs, Os = sn, Ms = is, Ns = ds, As = fs, Rs = ps, ks = hs, Ts = gs, rr = "DropdownMenu", [Ds, Kl] = Fe(rr, [
  Yo
]), ne = Yo(), [Is, cr] = Ds(rr), Fs = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: o, open: r, defaultOpen: c, onOpenChange: i, modal: a = !0 } = e, s = ne(t), l = R(null), [u = !1, d] = en({
    prop: r,
    defaultProp: c,
    onChange: i
  });
  return /* @__PURE__ */ $(Is, {
    scope: t,
    triggerId: pt(),
    triggerRef: l,
    contentId: pt(),
    open: u,
    onOpenChange: d,
    onOpenToggle: K(
      () => d(
        (m) => !m
      ),
      [
        d
      ]
    ),
    modal: a
  }, /* @__PURE__ */ $(Cs, P({}, s, {
    open: u,
    onOpenChange: d,
    dir: o,
    modal: a
  }), n));
}, Ls = "DropdownMenuTrigger", Bs = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, c = cr(Ls, n), i = ne(n);
  return /* @__PURE__ */ $(Es, P({
    asChild: !0
  }, i), /* @__PURE__ */ $(Q.button, P({
    type: "button",
    id: c.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": c.open,
    "aria-controls": c.open ? c.contentId : void 0,
    "data-state": c.open ? "open" : "closed",
    "data-disabled": o ? "" : void 0,
    disabled: o
  }, r, {
    ref: $t(t, c.triggerRef),
    onPointerDown: A(e.onPointerDown, (a) => {
      !o && a.button === 0 && a.ctrlKey === !1 && (c.onOpenToggle(), c.open || a.preventDefault());
    }),
    onKeyDown: A(e.onKeyDown, (a) => {
      o || ([
        "Enter",
        " "
      ].includes(a.key) && c.onOpenToggle(), a.key === "ArrowDown" && c.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(a.key) && a.preventDefault());
    })
  })));
}), Ws = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = ne(t);
  return /* @__PURE__ */ $(Ps, P({}, o, n));
}, Us = "DropdownMenuContent", zs = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = cr(Us, n), c = ne(n), i = R(!1);
  return /* @__PURE__ */ $(Ss, P({
    id: r.contentId,
    "aria-labelledby": r.triggerId
  }, c, o, {
    ref: t,
    onCloseAutoFocus: A(e.onCloseAutoFocus, (a) => {
      var s;
      i.current || (s = r.triggerRef.current) === null || s === void 0 || s.focus(), i.current = !1, a.preventDefault();
    }),
    onInteractOutside: A(e.onInteractOutside, (a) => {
      const s = a.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0, u = s.button === 2 || l;
      (!r.modal || u) && (i.current = !0);
    }),
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), Vs = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ $(_s, P({}, r, o, {
    ref: t
  }));
}), Ks = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ $(Os, P({}, r, o, {
    ref: t
  }));
}), js = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ $(Ms, P({}, r, o, {
    ref: t
  }));
}), Hs = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ $(Ns, P({}, r, o, {
    ref: t
  }));
}), Gs = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ $(As, P({}, r, o, {
    ref: t
  }));
}), Ys = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ $(Rs, P({}, r, o, {
    ref: t
  }));
}), Xs = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ $(ks, P({}, r, o, {
    ref: t
  }));
}), Zs = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ $(Ts, P({}, r, o, {
    ref: t,
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), qs = Fs, Qs = Bs, Js = Ws, ir = zs, ar = Vs, sr = Ks, lr = js, dr = Hs, ur = Gs, fr = Ys, pr = Xs, mr = Zs;
function dn(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, c;
  for (c = 0; c < o.length; c++)
    r = o[c], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var el = ["color"], tl = /* @__PURE__ */ M(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = dn(e, el);
  return $("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), $("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), nl = ["color"], ol = /* @__PURE__ */ M(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = dn(e, nl);
  return $("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), $("path", {
    d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), rl = ["color"], cl = /* @__PURE__ */ M(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = dn(e, rl);
  return $("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), $("path", {
    d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
    fill: o
  }));
});
const il = qs, al = Qs, sl = E.forwardRef(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ k(
  pr,
  {
    ref: r,
    className: q(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ v(ol, { className: "ml-auto h-4 w-4" })
    ]
  }
));
sl.displayName = pr.displayName;
const ll = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  mr,
  {
    ref: n,
    className: q(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
ll.displayName = mr.displayName;
const hr = E.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ v(Js, { children: /* @__PURE__ */ v(
  ir,
  {
    ref: o,
    sideOffset: t,
    className: q(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
hr.displayName = ir.displayName;
const Pt = E.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ v(
  sr,
  {
    ref: o,
    className: q(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Pt.displayName = sr.displayName;
const dl = E.forwardRef(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ k(
  lr,
  {
    ref: r,
    className: q(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ v("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v(ur, { children: /* @__PURE__ */ v(tl, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
dl.displayName = lr.displayName;
const ul = E.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ k(
  dr,
  {
    ref: o,
    className: q(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ v("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v(ur, { children: /* @__PURE__ */ v(cl, { className: "h-4 w-4 fill-current" }) }) }),
      t
    ]
  }
));
ul.displayName = dr.displayName;
const vr = E.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ v(
  ar,
  {
    ref: o,
    className: q(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
vr.displayName = ar.displayName;
const Xe = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(
  fr,
  {
    ref: n,
    className: q("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Xe.displayName = fr.displayName;
const Dn = ({ section: e }) => {
  const t = e.items.length === 0;
  if (!!e.title || !t)
    return /* @__PURE__ */ k(Te, { children: [
      /* @__PURE__ */ v("span", { children: e.title }),
      /* @__PURE__ */ v(Xe, { className: "my-2" }),
      e.items && e.items.map(
        (o) => /* @__PURE__ */ v(Pt, { asChild: !0, className: "rounded-none", children: /* @__PURE__ */ k("a", { href: o.link, className: "flex items-center py-2 px-3 justify-start gap-2", children: [
          o.icon && o.icon({}),
          o.text
        ] }) })
      )
    ] });
}, In = ({ section: e }) => typeof e.state[e.activeState] == "string" ? /* @__PURE__ */ k(Te, { children: [
  /* @__PURE__ */ v(Xe, { className: "my-2" }),
  /* @__PURE__ */ v("div", { className: "w-full h-fit p-3 flex items-center justify-center", children: /* @__PURE__ */ v("span", { className: "text-sm text-muted-foreground", children: e.state[e.activeState] }) })
] }) : /* @__PURE__ */ k(Te, { children: [
  /* @__PURE__ */ v(Xe, { className: "my-2" }),
  /* @__PURE__ */ v("div", { className: "w-full p-3", children: e.state[e.activeState] })
] }), Fn = ({ section: e }) => /* @__PURE__ */ k(Te, { children: [
  /* @__PURE__ */ v(Xe, {}),
  /* @__PURE__ */ v(vr, { children: "Проекты" }),
  e.projects && e.projects.map(
    (t) => /* @__PURE__ */ v(Pt, { asChild: !0, children: /* @__PURE__ */ k("a", { href: t.link, className: "flex px-0 items-center justify-between w-full", children: [
      /* @__PURE__ */ v("span", { className: "text-base", children: t.name }),
      /* @__PURE__ */ v(Fr, { size: 18, className: "ml-auto" })
    ] }) }, t.key + "-menu")
  )
] }), Ln = ({ section: e }) => /* @__PURE__ */ k(Pt, { className: "gap-2 py-2 px-3 rounded-none", onClick: e.action && e.action, children: [
  /* @__PURE__ */ v(Nr, {}),
  "Выйти из профиля"
] }), Bn = ({ description: e, displayName: t }) => /* @__PURE__ */ k("div", { className: "w-full h-fit px-3 py-2 flex flex-col justify-start", children: [
  /* @__PURE__ */ v("span", { className: "text-lg font-semibold text-accent-foreground", children: t }),
  /* @__PURE__ */ v("span", { className: "text-sm font-normal text-muted-foreground", children: e })
] }), fl = ({ user: e, size: t = 36, buttonSize: n, loginLink: o = "https://darkmaterial.space", menuMap: r = Uo }) => {
  const [c, i] = W(null), a = "https://auth.darkmaterial.space/login?continue=";
  return I(() => {
    e && Vn.byId.short(e.uid).then((s) => i(s));
  }, [e]), e ? /* @__PURE__ */ k(il, { children: [
    /* @__PURE__ */ v(al, { asChild: !0, children: e.photoURL ? /* @__PURE__ */ v("div", { style: { width: `${t}px`, height: `${t}px` }, children: /* @__PURE__ */ v("img", { src: e.photoURL, alt: "user-profile-img", className: "w-full h-full rounded-full object-cover" }) }) : /* @__PURE__ */ v(
      "div",
      {
        style: { width: `${t}px`, height: `${t}px` },
        className: "w-9 h-9 rounded-full bg-muted border shrink-0 flex items-center justify-center",
        children: /* @__PURE__ */ v(zn, { size: 18 })
      }
    ) }),
    /* @__PURE__ */ v(hr, { className: "p-0 w-60 rounded-xl", children: r && r.map((s, l) => s.type === "user" ? /* @__PURE__ */ v(Bn, { displayName: e.displayName || "Пользователь", description: c && c.position ? c.position : e.email || "Не указано" }, l + "-item-no-wrapper") : s.type === "links" ? /* @__PURE__ */ v(Dn, { section: s }, l + "-item-no-wrapper") : s.type === "projects" ? /* @__PURE__ */ v(Fn, { section: s }, l + "-item-no-wrapper") : s.type === "membership" ? /* @__PURE__ */ v(In, { section: s }, l + "-item-no-wrapper") : s.type === "sign-out" ? /* @__PURE__ */ v(Ln, { section: s }, l + "-item-no-wrapper") : s.type === "wrapper" ? /* @__PURE__ */ v("div", { className: s.className || "", children: s.items && s.items.map((u, d) => {
      if (u.type === "user")
        return /* @__PURE__ */ v(Bn, { displayName: e.displayName || "Пользователь", description: e.email || "Не указано" }, l + "-" + d + "item-with-wrapper");
      if (u.type === "links")
        return /* @__PURE__ */ v(Dn, { section: u }, l + "-" + d + "item-with-wrapper");
      if (u.type === "projects")
        return /* @__PURE__ */ v(Fn, { section: u }, l + "-" + d + "item-with-wrapper");
      if (u.type === "membership")
        return /* @__PURE__ */ v(In, { section: u }, l + "-" + d + "item-with-wrapper");
      if (u.type === "sign-out")
        return /* @__PURE__ */ v(Ln, { section: u }, l + "-" + d + "item-with-wrapper");
    }) }, l + "-item-wrapper") : null) })
  ] }) : /* @__PURE__ */ v(ge, { size: n, variant: "outline", asChild: !0, children: /* @__PURE__ */ v("a", { href: `${a}${o}`, children: "Войти" }) });
}, jl = ({
  user: e,
  size: t = 36,
  loginLink: n = "https://darkmaterial.space",
  activeMenu: o = "desktop",
  buttonSize: r = "default",
  map: c = Uo
}) => /* @__PURE__ */ v(
  fl,
  {
    buttonSize: r,
    user: e,
    size: t,
    menuMap: c,
    loginLink: n
  }
);
function Hl({ appId: e }) {
  const t = Xr(), n = qr({ query: "(max-width: 786px)" });
  return Zr((o) => {
    if (e) {
      const r = {
        path: t,
        createdAt: jn.now().toSeconds(),
        metric: o,
        type: n ? "mobile" : "desktop"
      };
      process.env.NODE_ENV === "production" && Dr.upload(e, r);
    }
  }), /* @__PURE__ */ v(Te, {});
}
const Gl = [
  {
    key: 2,
    name: "DM",
    link: "https://darkmaterial.space",
    themedIcon: {
      dark: "https://cdn.darkmaterial.space/dm/icons/DM-dark.svg",
      light: "https://cdn.darkmaterial.space/dm/icons/DM-light.svg"
    },
    icon: "https://cdn.darkmaterial.space/dm/icons/DM-dark.svg"
  },
  {
    key: 1,
    name: "YZ13",
    link: "https://yz13.darkmaterial.space",
    themedIcon: {
      dark: "https://cdn.darkmaterial.space/dm/icons/YZ13-dark.svg",
      light: "https://cdn.darkmaterial.space/dm/icons/YZ13-light.svg"
    },
    icon: "https://cdn.darkmaterial.space/dm/icons/YZ13-dark.svg"
  },
  {
    key: 3,
    name: "Frame",
    link: "https://frame.darkmaterial.space",
    themedIcon: {
      dark: "https://cdn.darkmaterial.space/dm/icons/frame-dark.svg",
      light: "https://cdn.darkmaterial.space/dm/icons/frame-light.svg"
    },
    icon: "https://cdn.darkmaterial.space/dm/icons/frame-dark.svg"
  },
  {
    key: 4,
    name: "Keeper",
    link: "https://notes.darkmaterial.space",
    themedIcon: {
      dark: "https://cdn.darkmaterial.space/dm/icons/keeper-dark.svg",
      light: "https://cdn.darkmaterial.space/dm/icons/keeper-light.svg"
    },
    icon: "https://cdn.darkmaterial.space/dm/icons/keeper-dark.svg"
  },
  {
    key: 6,
    name: "Team",
    link: "https://team.darkmaterial.space",
    themedIcon: {
      dark: "https://cdn.darkmaterial.space/dm/icons/team-dark.svg",
      light: "https://cdn.darkmaterial.space/dm/icons/team-dark.svg"
    },
    icon: "https://cdn.darkmaterial.space/dm/icons/team-dark.svg"
  },
  {
    key: 8,
    name: "Calendar",
    link: "https://calendar.darkmaterial.space",
    themedIcon: {
      dark: "https://cdn.darkmaterial.space/dm/icons/calendar-dark.svg",
      light: "https://cdn.darkmaterial.space/dm/icons/calendar-dark.svg"
    },
    icon: "https://cdn.darkmaterial.space/dm/icons/calendar-dark.svg"
  },
  {
    key: 9,
    name: "Weecode Play",
    link: "https://play.darkmaterial.space",
    themedIcon: {
      dark: "https://cdn.darkmaterial.space/dm/icons/weecode-dark.svg",
      light: "https://cdn.darkmaterial.space/dm/icons/Weecode-light.svg"
    },
    icon: "https://cdn.darkmaterial.space/dm/icons/weecode-dark.svg"
  },
  {
    key: 5,
    name: "Docs",
    link: "https://docs.darkmaterial.space",
    themedIcon: {
      dark: "https://cdn.darkmaterial.space/dm/icons/dm-star-dark.svg",
      light: "https://cdn.darkmaterial.space/dm/icons/dm-star-light.svg"
    },
    icon: "https://cdn.darkmaterial.space/dm/icons/dm-star-dark.svg"
  },
  {
    key: 7,
    name: "Plus",
    link: "https://plus.darkmaterial.space",
    themedIcon: {
      dark: "https://cdn.darkmaterial.space/dm/icons/DM-dark.svg",
      light: "https://cdn.darkmaterial.space/dm/icons/DM-light.svg"
    },
    icon: "https://cdn.darkmaterial.space/dm/icons/DM-dark.svg"
  }
];
export {
  Tl as Avatar,
  wa as ForwardRefEditor,
  Bl as Notifications,
  Wl as OneClickAuth,
  Fl as ProjectsGrid,
  Ul as StarField,
  Ll as Textarea,
  jl as UserCircle,
  Hl as WebVitals,
  Gl as projects
};
