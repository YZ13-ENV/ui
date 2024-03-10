"use client";
import { jsxs as M, jsx as p, Fragment as le } from "react/jsx-runtime";
import Zt from "next/image.js";
import * as C from "react";
import ae, { memo as ro, useCallback as j, createContext as mt, useMemo as Ke, createElement as g, useContext as qt, forwardRef as P, Children as Oe, isValidElement as ht, cloneElement as Qt, Fragment as Jt, useEffect as I, useRef as k, useState as W, useLayoutEffect as en, useReducer as Hr } from "react";
import { BiUser as co, BiTrashAlt as Gr, BiCheck as Yr, BiX as Xr, BiCog as Zr, BiLogOut as io, BiMenu as qr } from "react-icons/bi/index.esm.js";
import { PiCrownSimpleBold as Qr, PiBellBold as Jr } from "react-icons/pi/index.esm.js";
import { MdGridView as ec, MdOpenInNew as ao } from "react-icons/md/index.esm.js";
import * as tc from "react-dom";
import nc, { flushSync as so } from "react-dom";
import { clsx as oc } from "clsx";
import { twMerge as rc } from "tailwind-merge";
import { cva as cc } from "class-variance-authority";
import ic from "next/dynamic.js";
import { notifications as Bt, user as ac, cdn as sc, speed_insights as lc } from "api";
import { useAuthState as dc } from "react-firebase-hooks/auth/dist/index.esm.js";
import { DateTime as lo } from "luxon";
import { useInViewport as uc } from "ahooks";
import fc from "next/link.js";
import { io as pc } from "socket.io-client";
import { motion as mc } from "framer-motion";
import { TiDocumentText as hc } from "react-icons/ti/index.esm.js";
import { usePathname as vc } from "next/navigation.js";
import { useReportWebVitals as gc } from "next/web-vitals.js";
import { useMediaQuery as bc } from "react-responsive";
const $c = ({ size: e = 24, isSubscriber: t = !1, src: n, className: o = "" }) => {
  const r = e * 0.5, c = r * 0.5;
  return /* @__PURE__ */ M(
    "div",
    {
      style: { width: `${e}px`, height: `${e}px` },
      className: `relative flex items-center justify-center overflow-visible border rounded-full shrink-0 bg-background border-inherit ${o}`,
      children: [
        n ? /* @__PURE__ */ p(Zt, { src: n, className: "rounded-full !relative", fill: !0, alt: "@avatar" }) : /* @__PURE__ */ p(co, { size: e / 2 }),
        t && /* @__PURE__ */ p("div", { style: {
          // maxWidth: '64px',
          // maxHeight: '64px',
          top: `-${r * 0.25}px`,
          left: `-${r * 0.25}px`,
          width: `${r}px`,
          height: `${r}px`
        }, className: "absolute flex items-center justify-center border-2 rounded-full text-muted-foreground border-background bg-muted", children: /* @__PURE__ */ p(Qr, { size: c }) })
      ]
    }
  );
}, kd = ro($c);
function _() {
  return _ = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, _.apply(this, arguments);
}
function R(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function wc(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function yt(...e) {
  return (t) => e.forEach(
    (n) => wc(n, t)
  );
}
function G(...e) {
  return j(yt(...e), e);
}
function Me(e, t = []) {
  let n = [];
  function o(c, i) {
    const a = /* @__PURE__ */ mt(i), s = n.length;
    n = [
      ...n,
      i
    ];
    function l(d) {
      const { scope: h, children: f, ...v } = d, m = (h == null ? void 0 : h[e][s]) || a, b = Ke(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ g(m.Provider, {
        value: b
      }, f);
    }
    function u(d, h) {
      const f = (h == null ? void 0 : h[e][s]) || a, v = qt(f);
      if (v)
        return v;
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
    const c = n.map((i) => /* @__PURE__ */ mt(i));
    return function(a) {
      const s = (a == null ? void 0 : a[e]) || c;
      return Ke(
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
    xc(r, ...t)
  ];
}
function xc(...e) {
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
      return Ke(
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
const xe = /* @__PURE__ */ P((e, t) => {
  const { children: n, ...o } = e, r = Oe.toArray(n), c = r.find(Cc);
  if (c) {
    const i = c.props.children, a = r.map((s) => s === c ? Oe.count(i) > 1 ? Oe.only(null) : /* @__PURE__ */ ht(i) ? i.props.children : null : s);
    return /* @__PURE__ */ g(Wt, _({}, o, {
      ref: t
    }), /* @__PURE__ */ ht(i) ? /* @__PURE__ */ Qt(i, void 0, a) : null);
  }
  return /* @__PURE__ */ g(Wt, _({}, o, {
    ref: t
  }), n);
});
xe.displayName = "Slot";
const Wt = /* @__PURE__ */ P((e, t) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ ht(n) ? /* @__PURE__ */ Qt(n, {
    ...Ec(o, n.props),
    ref: t ? yt(t, n.ref) : n.ref
  }) : Oe.count(n) > 1 ? Oe.only(null) : null;
});
Wt.displayName = "SlotClone";
const yc = ({ children: e }) => /* @__PURE__ */ g(Jt, null, e);
function Cc(e) {
  return /* @__PURE__ */ ht(e) && e.type === yc;
}
function Ec(e, t) {
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
const _c = [
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
], K = _c.reduce((e, t) => {
  const n = /* @__PURE__ */ P((o, r) => {
    const { asChild: c, ...i } = o, a = c ? xe : t;
    return I(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ g(a, _({}, i, {
      ref: r
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function uo(e, t) {
  e && so(
    () => e.dispatchEvent(t)
  );
}
function de(e) {
  const t = k(e);
  return I(() => {
    t.current = e;
  }), Ke(
    () => (...n) => {
      var o;
      return (o = t.current) === null || o === void 0 ? void 0 : o.call(t, ...n);
    },
    []
  );
}
function Pc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = de(e);
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
const zt = "dismissableLayer.update", Oc = "dismissableLayer.pointerDownOutside", Sc = "dismissableLayer.focusOutside";
let _n;
const Nc = /* @__PURE__ */ mt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), tn = /* @__PURE__ */ P((e, t) => {
  var n;
  const { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: r, onPointerDownOutside: c, onFocusOutside: i, onInteractOutside: a, onDismiss: s, ...l } = e, u = qt(Nc), [d, h] = W(null), f = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, v] = W({}), m = G(
    t,
    (N) => h(N)
  ), b = Array.from(u.layers), [$] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = b.indexOf($), x = d ? b.indexOf(d) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, E = x >= w, D = Mc((N) => {
    const A = N.target, z = [
      ...u.branches
    ].some(
      (V) => V.contains(A)
    );
    !E || z || (c == null || c(N), a == null || a(N), N.defaultPrevented || s == null || s());
  }, f), O = Dc((N) => {
    const A = N.target;
    [
      ...u.branches
    ].some(
      (V) => V.contains(A)
    ) || (i == null || i(N), a == null || a(N), N.defaultPrevented || s == null || s());
  }, f);
  return Pc((N) => {
    x === u.layers.size - 1 && (r == null || r(N), !N.defaultPrevented && s && (N.preventDefault(), s()));
  }, f), I(() => {
    if (d)
      return o && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (_n = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Pn(), () => {
        o && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = _n);
      };
  }, [
    d,
    f,
    o,
    u
  ]), I(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Pn());
  }, [
    d,
    u
  ]), I(() => {
    const N = () => v({});
    return document.addEventListener(zt, N), () => document.removeEventListener(zt, N);
  }, []), /* @__PURE__ */ g(K.div, _({}, l, {
    ref: m,
    style: {
      pointerEvents: y ? E ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: R(e.onFocusCapture, O.onFocusCapture),
    onBlurCapture: R(e.onBlurCapture, O.onBlurCapture),
    onPointerDownCapture: R(e.onPointerDownCapture, D.onPointerDownCapture)
  }));
});
function Mc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = de(e), o = k(!1), r = k(() => {
  });
  return I(() => {
    const c = (a) => {
      if (a.target && !o.current) {
        let l = function() {
          fo(Oc, n, s, {
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
function Dc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = de(e), o = k(!1);
  return I(() => {
    const r = (c) => {
      c.target && !o.current && fo(Sc, n, {
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
function Pn() {
  const e = new CustomEvent(zt);
  document.dispatchEvent(e);
}
function fo(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, c = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, {
    once: !0
  }), o ? uo(r, c) : r.dispatchEvent(c);
}
let Dt = 0;
function nn() {
  I(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : On()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : On()), Dt++, () => {
      Dt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (o) => o.remove()
      ), Dt--;
    };
  }, []);
}
function On() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const kt = "focusScope.autoFocusOnMount", Rt = "focusScope.autoFocusOnUnmount", Sn = {
  bubbles: !1,
  cancelable: !0
}, on = /* @__PURE__ */ P((e, t) => {
  const { loop: n = !1, trapped: o = !1, onMountAutoFocus: r, onUnmountAutoFocus: c, ...i } = e, [a, s] = W(null), l = de(r), u = de(c), d = k(null), h = G(
    t,
    (m) => s(m)
  ), f = k({
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
      let m = function(x) {
        if (f.paused || !a)
          return;
        const y = x.target;
        a.contains(y) ? d.current = y : we(d.current, {
          select: !0
        });
      }, b = function(x) {
        if (f.paused || !a)
          return;
        const y = x.relatedTarget;
        y !== null && (a.contains(y) || we(d.current, {
          select: !0
        }));
      }, $ = function(x) {
        if (document.activeElement === document.body)
          for (const E of x)
            E.removedNodes.length > 0 && we(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", b);
      const w = new MutationObserver($);
      return a && w.observe(a, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [
    o,
    a,
    f.paused
  ]), I(() => {
    if (a) {
      Mn.add(f);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const $ = new CustomEvent(kt, Sn);
        a.addEventListener(kt, l), a.dispatchEvent($), $.defaultPrevented || (kc(Fc(po(a)), {
          select: !0
        }), document.activeElement === m && we(a));
      }
      return () => {
        a.removeEventListener(kt, l), setTimeout(() => {
          const $ = new CustomEvent(Rt, Sn);
          a.addEventListener(Rt, u), a.dispatchEvent($), $.defaultPrevented || we(m ?? document.body, {
            select: !0
          }), a.removeEventListener(Rt, u), Mn.remove(f);
        }, 0);
      };
    }
  }, [
    a,
    l,
    u,
    f
  ]);
  const v = j((m) => {
    if (!n && !o || f.paused)
      return;
    const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, $ = document.activeElement;
    if (b && $) {
      const w = m.currentTarget, [x, y] = Rc(w);
      x && y ? !m.shiftKey && $ === y ? (m.preventDefault(), n && we(x, {
        select: !0
      })) : m.shiftKey && $ === x && (m.preventDefault(), n && we(y, {
        select: !0
      })) : $ === w && m.preventDefault();
    }
  }, [
    n,
    o,
    f.paused
  ]);
  return /* @__PURE__ */ g(K.div, _({
    tabIndex: -1
  }, i, {
    ref: h,
    onKeyDown: v
  }));
});
function kc(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (we(o, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Rc(e) {
  const t = po(e), n = Nn(t, e), o = Nn(t.reverse(), e);
  return [
    n,
    o
  ];
}
function po(e) {
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
function Nn(e, t) {
  for (const n of e)
    if (!Ac(n, {
      upTo: t
    }))
      return n;
}
function Ac(e, { upTo: t }) {
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
function Tc(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function we(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Tc(e) && t && e.select();
  }
}
const Mn = Ic();
function Ic() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Dn(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Dn(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Dn(e, t) {
  const n = [
    ...e
  ], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Fc(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Fe = globalThis != null && globalThis.document ? en : () => {
}, Lc = C["useId".toString()] || (() => {
});
let Bc = 0;
function Se(e) {
  const [t, n] = C.useState(Lc());
  return Fe(() => {
    e || n(
      (o) => o ?? String(Bc++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Wc = ["top", "right", "bottom", "left"], ye = Math.min, J = Math.max, vt = Math.round, rt = Math.floor, Ce = (e) => ({
  x: e,
  y: e
}), zc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Uc = {
  start: "end",
  end: "start"
};
function Ut(e, t, n) {
  return J(e, ye(t, n));
}
function me(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function he(e) {
  return e.split("-")[0];
}
function We(e) {
  return e.split("-")[1];
}
function rn(e) {
  return e === "x" ? "y" : "x";
}
function cn(e) {
  return e === "y" ? "height" : "width";
}
function ze(e) {
  return ["top", "bottom"].includes(he(e)) ? "y" : "x";
}
function an(e) {
  return rn(ze(e));
}
function jc(e, t, n) {
  n === void 0 && (n = !1);
  const o = We(e), r = an(e), c = cn(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (i = gt(i)), [i, gt(i)];
}
function Vc(e) {
  const t = gt(e);
  return [jt(e), t, jt(t)];
}
function jt(e) {
  return e.replace(/start|end/g, (t) => Uc[t]);
}
function Kc(e, t, n) {
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
function Hc(e, t, n, o) {
  const r = We(e);
  let c = Kc(he(e), n === "start", o);
  return r && (c = c.map((i) => i + "-" + r), t && (c = c.concat(c.map(jt)))), c;
}
function gt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => zc[t]);
}
function Gc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function mo(e) {
  return typeof e != "number" ? Gc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function bt(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function kn(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const c = ze(t), i = an(t), a = cn(i), s = he(t), l = c === "y", u = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, h = o[a] / 2 - r[a] / 2;
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
  switch (We(t)) {
    case "start":
      f[i] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      f[i] += h * (n && l ? -1 : 1);
      break;
  }
  return f;
}
const Yc = async (e, t, n) => {
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
  } = kn(l, o, s), h = o, f = {}, v = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: b,
      fn: $
    } = a[m], {
      x: w,
      y: x,
      data: y,
      reset: E
    } = await $({
      x: u,
      y: d,
      initialPlacement: o,
      placement: h,
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
      [b]: {
        ...f[b],
        ...y
      }
    }, E && v <= 50 && (v++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (l = E.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : E.rects), {
      x: u,
      y: d
    } = kn(l, h, s)), m = -1);
  }
  return {
    x: u,
    y: d,
    placement: h,
    strategy: r,
    middlewareData: f
  };
};
async function He(e, t) {
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
    altBoundary: h = !1,
    padding: f = 0
  } = me(t, e), v = mo(f), b = a[h ? d === "floating" ? "reference" : "floating" : d], $ = bt(await c.getClippingRect({
    element: (n = await (c.isElement == null ? void 0 : c.isElement(b))) == null || n ? b : b.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(a.floating)),
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
  }, E = bt(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: x,
    strategy: s
  }) : w);
  return {
    top: ($.top - E.top + v.top) / y.y,
    bottom: (E.bottom - $.bottom + v.bottom) / y.y,
    left: ($.left - E.left + v.left) / y.x,
    right: (E.right - $.right + v.right) / y.x
  };
}
const Xc = (e) => ({
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
    } = me(e, t) || {};
    if (l == null)
      return {};
    const d = mo(u), h = {
      x: n,
      y: o
    }, f = an(r), v = cn(f), m = await i.getDimensions(l), b = f === "y", $ = b ? "top" : "left", w = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", y = c.reference[v] + c.reference[f] - h[f] - c.floating[v], E = h[f] - c.reference[f], D = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let O = D ? D[x] : 0;
    (!O || !await (i.isElement == null ? void 0 : i.isElement(D))) && (O = a.floating[x] || c.floating[v]);
    const N = y / 2 - E / 2, A = O / 2 - m[v] / 2 - 1, z = ye(d[$], A), V = ye(d[w], A), B = z, Z = O - m[v] - V, F = O / 2 - m[v] / 2 + N, T = Ut(B, F, Z), H = !s.arrow && We(r) != null && F !== T && c.reference[v] / 2 - (F < B ? z : V) - m[v] / 2 < 0, L = H ? F < B ? F - B : F - Z : 0;
    return {
      [f]: h[f] + L,
      data: {
        [f]: T,
        centerOffset: F - T - L,
        ...H && {
          alignmentOffset: L
        }
      },
      reset: H
    };
  }
}), Zc = function(e) {
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
        fallbackPlacements: h,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...b
      } = me(e, t);
      if ((n = c.arrow) != null && n.alignmentOffset)
        return {};
      const $ = he(r), w = he(a) === a, x = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), y = h || (w || !m ? [gt(a)] : Vc(a));
      !h && v !== "none" && y.push(...Hc(a, m, v, x));
      const E = [a, ...y], D = await He(t, b), O = [];
      let N = ((o = c.flip) == null ? void 0 : o.overflows) || [];
      if (u && O.push(D[$]), d) {
        const B = jc(r, i, x);
        O.push(D[B[0]], D[B[1]]);
      }
      if (N = [...N, {
        placement: r,
        overflows: O
      }], !O.every((B) => B <= 0)) {
        var A, z;
        const B = (((A = c.flip) == null ? void 0 : A.index) || 0) + 1, Z = E[B];
        if (Z)
          return {
            data: {
              index: B,
              overflows: N
            },
            reset: {
              placement: Z
            }
          };
        let F = (z = N.filter((T) => T.overflows[0] <= 0).sort((T, H) => T.overflows[1] - H.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!F)
          switch (f) {
            case "bestFit": {
              var V;
              const T = (V = N.map((H) => [H.placement, H.overflows.filter((L) => L > 0).reduce((L, q) => L + q, 0)]).sort((H, L) => H[1] - L[1])[0]) == null ? void 0 : V[0];
              T && (F = T);
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
function Rn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function An(e) {
  return Wc.some((t) => e[t] >= 0);
}
const qc = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = me(e, t);
      switch (o) {
        case "referenceHidden": {
          const c = await He(t, {
            ...r,
            elementContext: "reference"
          }), i = Rn(c, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: An(i)
            }
          };
        }
        case "escaped": {
          const c = await He(t, {
            ...r,
            altBoundary: !0
          }), i = Rn(c, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: An(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Qc(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, c = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = he(n), a = We(n), s = ze(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = c && s ? -1 : 1, d = me(t, e);
  let {
    mainAxis: h,
    crossAxis: f,
    alignmentAxis: v
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
  return a && typeof v == "number" && (f = a === "end" ? v * -1 : v), s ? {
    x: f * u,
    y: h * l
  } : {
    x: h * l,
    y: f * u
  };
}
const Jc = function(e) {
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
      } = t, s = await Qc(t, e);
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
}, ei = function(e) {
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
          fn: (b) => {
            let {
              x: $,
              y: w
            } = b;
            return {
              x: $,
              y: w
            };
          }
        },
        ...s
      } = me(e, t), l = {
        x: n,
        y: o
      }, u = await He(t, s), d = ze(he(r)), h = rn(d);
      let f = l[h], v = l[d];
      if (c) {
        const b = h === "y" ? "top" : "left", $ = h === "y" ? "bottom" : "right", w = f + u[b], x = f - u[$];
        f = Ut(w, f, x);
      }
      if (i) {
        const b = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", w = v + u[b], x = v - u[$];
        v = Ut(w, v, x);
      }
      const m = a.fn({
        ...t,
        [h]: f,
        [d]: v
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - o
        }
      };
    }
  };
}, ti = function(e) {
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
      } = me(e, t), u = {
        x: n,
        y: o
      }, d = ze(r), h = rn(d);
      let f = u[h], v = u[d];
      const m = me(a, t), b = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (s) {
        const x = h === "y" ? "height" : "width", y = c.reference[h] - c.floating[x] + b.mainAxis, E = c.reference[h] + c.reference[x] - b.mainAxis;
        f < y ? f = y : f > E && (f = E);
      }
      if (l) {
        var $, w;
        const x = h === "y" ? "width" : "height", y = ["top", "left"].includes(he(r)), E = c.reference[d] - c.floating[x] + (y && (($ = i.offset) == null ? void 0 : $[d]) || 0) + (y ? 0 : b.crossAxis), D = c.reference[d] + c.reference[x] + (y ? 0 : ((w = i.offset) == null ? void 0 : w[d]) || 0) - (y ? b.crossAxis : 0);
        v < E ? v = E : v > D && (v = D);
      }
      return {
        [h]: f,
        [d]: v
      };
    }
  };
}, ni = function(e) {
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
      } = me(e, t), s = await He(t, a), l = he(n), u = We(n), d = ze(n) === "y", {
        width: h,
        height: f
      } = o.floating;
      let v, m;
      l === "top" || l === "bottom" ? (v = l, m = u === (await (r.isRTL == null ? void 0 : r.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (m = l, v = u === "end" ? "top" : "bottom");
      const b = f - s[v], $ = h - s[m], w = !t.middlewareData.shift;
      let x = b, y = $;
      if (d) {
        const D = h - s.left - s.right;
        y = u || w ? ye($, D) : D;
      } else {
        const D = f - s.top - s.bottom;
        x = u || w ? ye(b, D) : D;
      }
      if (w && !u) {
        const D = J(s.left, 0), O = J(s.right, 0), N = J(s.top, 0), A = J(s.bottom, 0);
        d ? y = h - 2 * (D !== 0 || O !== 0 ? D + O : J(s.left, s.right)) : x = f - 2 * (N !== 0 || A !== 0 ? N + A : J(s.top, s.bottom));
      }
      await i({
        ...t,
        availableWidth: y,
        availableHeight: x
      });
      const E = await r.getDimensions(c.floating);
      return h !== E.width || f !== E.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ee(e) {
  return ho(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ee(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ge(e) {
  var t;
  return (t = (ho(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ho(e) {
  return e instanceof Node || e instanceof ee(e).Node;
}
function ve(e) {
  return e instanceof Element || e instanceof ee(e).Element;
}
function ue(e) {
  return e instanceof HTMLElement || e instanceof ee(e).HTMLElement;
}
function Tn(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ee(e).ShadowRoot;
}
function Je(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = te(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function oi(e) {
  return ["table", "td", "th"].includes(Ee(e));
}
function sn(e) {
  const t = ln(), n = te(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function ri(e) {
  let t = Le(e);
  for (; ue(t) && !Ct(t); ) {
    if (sn(t))
      return t;
    t = Le(t);
  }
  return null;
}
function ln() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ct(e) {
  return ["html", "body", "#document"].includes(Ee(e));
}
function te(e) {
  return ee(e).getComputedStyle(e);
}
function Et(e) {
  return ve(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Le(e) {
  if (Ee(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Tn(e) && e.host || // Fallback.
    ge(e)
  );
  return Tn(t) ? t.host : t;
}
function vo(e) {
  const t = Le(e);
  return Ct(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ue(t) && Je(t) ? t : vo(t);
}
function Ge(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = vo(e), c = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = ee(r);
  return c ? t.concat(i, i.visualViewport || [], Je(r) ? r : [], i.frameElement && n ? Ge(i.frameElement) : []) : t.concat(r, Ge(r, [], n));
}
function go(e) {
  const t = te(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = ue(e), c = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, a = vt(n) !== c || vt(o) !== i;
  return a && (n = c, o = i), {
    width: n,
    height: o,
    $: a
  };
}
function dn(e) {
  return ve(e) ? e : e.contextElement;
}
function Ie(e) {
  const t = dn(e);
  if (!ue(t))
    return Ce(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: c
  } = go(t);
  let i = (c ? vt(n.width) : n.width) / o, a = (c ? vt(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const ci = /* @__PURE__ */ Ce(0);
function bo(e) {
  const t = ee(e);
  return !ln() || !t.visualViewport ? ci : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ii(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ee(e) ? !1 : t;
}
function Ne(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), c = dn(e);
  let i = Ce(1);
  t && (o ? ve(o) && (i = Ie(o)) : i = Ie(e));
  const a = ii(c, n, o) ? bo(c) : Ce(0);
  let s = (r.left + a.x) / i.x, l = (r.top + a.y) / i.y, u = r.width / i.x, d = r.height / i.y;
  if (c) {
    const h = ee(c), f = o && ve(o) ? ee(o) : o;
    let v = h, m = v.frameElement;
    for (; m && o && f !== v; ) {
      const b = Ie(m), $ = m.getBoundingClientRect(), w = te(m), x = $.left + (m.clientLeft + parseFloat(w.paddingLeft)) * b.x, y = $.top + (m.clientTop + parseFloat(w.paddingTop)) * b.y;
      s *= b.x, l *= b.y, u *= b.x, d *= b.y, s += x, l += y, v = ee(m), m = v.frameElement;
    }
  }
  return bt({
    width: u,
    height: d,
    x: s,
    y: l
  });
}
const ai = [":popover-open", ":modal"];
function $o(e) {
  return ai.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function si(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const c = r === "fixed", i = ge(o), a = t ? $o(t.floating) : !1;
  if (o === i || a && c)
    return n;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Ce(1);
  const u = Ce(0), d = ue(o);
  if ((d || !d && !c) && ((Ee(o) !== "body" || Je(i)) && (s = Et(o)), ue(o))) {
    const h = Ne(o);
    l = Ie(o), u.x = h.x + o.clientLeft, u.y = h.y + o.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - s.scrollLeft * l.x + u.x,
    y: n.y * l.y - s.scrollTop * l.y + u.y
  };
}
function li(e) {
  return Array.from(e.getClientRects());
}
function wo(e) {
  return Ne(ge(e)).left + Et(e).scrollLeft;
}
function di(e) {
  const t = ge(e), n = Et(e), o = e.ownerDocument.body, r = J(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), c = J(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + wo(e);
  const a = -n.scrollTop;
  return te(o).direction === "rtl" && (i += J(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: c,
    x: i,
    y: a
  };
}
function ui(e, t) {
  const n = ee(e), o = ge(e), r = n.visualViewport;
  let c = o.clientWidth, i = o.clientHeight, a = 0, s = 0;
  if (r) {
    c = r.width, i = r.height;
    const l = ln();
    (!l || l && t === "fixed") && (a = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: c,
    height: i,
    x: a,
    y: s
  };
}
function fi(e, t) {
  const n = Ne(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, c = ue(e) ? Ie(e) : Ce(1), i = e.clientWidth * c.x, a = e.clientHeight * c.y, s = r * c.x, l = o * c.y;
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function In(e, t, n) {
  let o;
  if (t === "viewport")
    o = ui(e, n);
  else if (t === "document")
    o = di(ge(e));
  else if (ve(t))
    o = fi(t, n);
  else {
    const r = bo(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return bt(o);
}
function xo(e, t) {
  const n = Le(e);
  return n === t || !ve(n) || Ct(n) ? !1 : te(n).position === "fixed" || xo(n, t);
}
function pi(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Ge(e, [], !1).filter((a) => ve(a) && Ee(a) !== "body"), r = null;
  const c = te(e).position === "fixed";
  let i = c ? Le(e) : e;
  for (; ve(i) && !Ct(i); ) {
    const a = te(i), s = sn(i);
    !s && a.position === "fixed" && (r = null), (c ? !s && !r : !s && a.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Je(i) && !s && xo(e, i)) ? o = o.filter((u) => u !== i) : r = a, i = Le(i);
  }
  return t.set(e, o), o;
}
function mi(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? pi(t, this._c) : [].concat(n), o], a = i[0], s = i.reduce((l, u) => {
    const d = In(t, u, r);
    return l.top = J(d.top, l.top), l.right = ye(d.right, l.right), l.bottom = ye(d.bottom, l.bottom), l.left = J(d.left, l.left), l;
  }, In(t, a, r));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function hi(e) {
  const {
    width: t,
    height: n
  } = go(e);
  return {
    width: t,
    height: n
  };
}
function vi(e, t, n) {
  const o = ue(t), r = ge(t), c = n === "fixed", i = Ne(e, !0, c, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = Ce(0);
  if (o || !o && !c)
    if ((Ee(t) !== "body" || Je(r)) && (a = Et(t)), o) {
      const d = Ne(t, !0, c, t);
      s.x = d.x + t.clientLeft, s.y = d.y + t.clientTop;
    } else
      r && (s.x = wo(r));
  const l = i.left + a.scrollLeft - s.x, u = i.top + a.scrollTop - s.y;
  return {
    x: l,
    y: u,
    width: i.width,
    height: i.height
  };
}
function Fn(e, t) {
  return !ue(e) || te(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function yo(e, t) {
  const n = ee(e);
  if (!ue(e) || $o(e))
    return n;
  let o = Fn(e, t);
  for (; o && oi(o) && te(o).position === "static"; )
    o = Fn(o, t);
  return o && (Ee(o) === "html" || Ee(o) === "body" && te(o).position === "static" && !sn(o)) ? n : o || ri(e) || n;
}
const gi = async function(e) {
  const t = this.getOffsetParent || yo, n = this.getDimensions;
  return {
    reference: vi(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await n(e.floating)
    }
  };
};
function bi(e) {
  return te(e).direction === "rtl";
}
const $i = {
  convertOffsetParentRelativeRectToViewportRelativeRect: si,
  getDocumentElement: ge,
  getClippingRect: mi,
  getOffsetParent: yo,
  getElementRects: gi,
  getClientRects: li,
  getDimensions: hi,
  getScale: Ie,
  isElement: ve,
  isRTL: bi
};
function wi(e, t) {
  let n = null, o;
  const r = ge(e);
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
      height: h
    } = e.getBoundingClientRect();
    if (a || t(), !d || !h)
      return;
    const f = rt(u), v = rt(r.clientWidth - (l + d)), m = rt(r.clientHeight - (u + h)), b = rt(l), w = {
      rootMargin: -f + "px " + -v + "px " + -m + "px " + -b + "px",
      threshold: J(0, ye(1, s)) || 1
    };
    let x = !0;
    function y(E) {
      const D = E[0].intersectionRatio;
      if (D !== s) {
        if (!x)
          return i();
        D ? i(!1, D) : o = setTimeout(() => {
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
function xi(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: c = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = o, l = dn(e), u = r || c ? [...l ? Ge(l) : [], ...Ge(t)] : [];
  u.forEach(($) => {
    r && $.addEventListener("scroll", n, {
      passive: !0
    }), c && $.addEventListener("resize", n);
  });
  const d = l && a ? wi(l, n) : null;
  let h = -1, f = null;
  i && (f = new ResizeObserver(($) => {
    let [w] = $;
    w && w.target === l && f && (f.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var x;
      (x = f) == null || x.observe(t);
    })), n();
  }), l && !s && f.observe(l), f.observe(t));
  let v, m = s ? Ne(e) : null;
  s && b();
  function b() {
    const $ = Ne(e);
    m && ($.x !== m.x || $.y !== m.y || $.width !== m.width || $.height !== m.height) && n(), m = $, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var $;
    u.forEach((w) => {
      r && w.removeEventListener("scroll", n), c && w.removeEventListener("resize", n);
    }), d == null || d(), ($ = f) == null || $.disconnect(), f = null, s && cancelAnimationFrame(v);
  };
}
const yi = ei, Ci = Zc, Ei = ni, _i = qc, Ln = Xc, Pi = ti, Oi = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: $i,
    ...n
  }, c = {
    ...r.platform,
    _c: o
  };
  return Yc(e, t, {
    ...r,
    platform: c
  });
}, Si = (e) => {
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
      return o && t(o) ? o.current != null ? Ln({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Ln({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
};
var ut = typeof document < "u" ? en : I;
function $t(e, t) {
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
        if (!$t(e[o], t[o]))
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
      if (!(c === "_owner" && e.$$typeof) && !$t(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Co(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Bn(e, t) {
  const n = Co(e);
  return Math.round(t * n) / n;
}
function Wn(e) {
  const t = C.useRef(e);
  return ut(() => {
    t.current = e;
  }), t;
}
function Ni(e) {
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
  } = e, [u, d] = C.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, f] = C.useState(o);
  $t(h, o) || f(o);
  const [v, m] = C.useState(null), [b, $] = C.useState(null), w = C.useCallback((L) => {
    L !== D.current && (D.current = L, m(L));
  }, []), x = C.useCallback((L) => {
    L !== O.current && (O.current = L, $(L));
  }, []), y = c || v, E = i || b, D = C.useRef(null), O = C.useRef(null), N = C.useRef(u), A = s != null, z = Wn(s), V = Wn(r), B = C.useCallback(() => {
    if (!D.current || !O.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: h
    };
    V.current && (L.platform = V.current), Oi(D.current, O.current, L).then((q) => {
      const S = {
        ...q,
        isPositioned: !0
      };
      Z.current && !$t(N.current, S) && (N.current = S, tc.flushSync(() => {
        d(S);
      }));
    });
  }, [h, t, n, V]);
  ut(() => {
    l === !1 && N.current.isPositioned && (N.current.isPositioned = !1, d((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [l]);
  const Z = C.useRef(!1);
  ut(() => (Z.current = !0, () => {
    Z.current = !1;
  }), []), ut(() => {
    if (y && (D.current = y), E && (O.current = E), y && E) {
      if (z.current)
        return z.current(y, E, B);
      B();
    }
  }, [y, E, B, z, A]);
  const F = C.useMemo(() => ({
    reference: D,
    floating: O,
    setReference: w,
    setFloating: x
  }), [w, x]), T = C.useMemo(() => ({
    reference: y,
    floating: E
  }), [y, E]), H = C.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return L;
    const q = Bn(T.floating, u.x), S = Bn(T.floating, u.y);
    return a ? {
      ...L,
      transform: "translate(" + q + "px, " + S + "px)",
      ...Co(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: q,
      top: S
    };
  }, [n, a, T.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: B,
    refs: F,
    elements: T,
    floatingStyles: H
  }), [u, B, F, T, H]);
}
function Mi(e) {
  const [t, n] = W(void 0);
  return Fe(() => {
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
const Eo = "Popper", [_o, _t] = Me(Eo), [Di, Po] = _o(Eo), ki = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = W(null);
  return /* @__PURE__ */ g(Di, {
    scope: t,
    anchor: o,
    onAnchorChange: r
  }, n);
}, Ri = "PopperAnchor", Ai = /* @__PURE__ */ P((e, t) => {
  const { __scopePopper: n, virtualRef: o, ...r } = e, c = Po(Ri, n), i = k(null), a = G(t, i);
  return I(() => {
    c.onAnchorChange((o == null ? void 0 : o.current) || i.current);
  }), o ? null : /* @__PURE__ */ g(K.div, _({}, r, {
    ref: a
  }));
}), Oo = "PopperContent", [Ti, Rd] = _o(Oo), Ii = /* @__PURE__ */ P((e, t) => {
  var n, o, r, c, i, a, s, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: h = 0, align: f = "center", alignOffset: v = 0, arrowPadding: m = 0, avoidCollisions: b = !0, collisionBoundary: $ = [], collisionPadding: w = 0, sticky: x = "partial", hideWhenDetached: y = !1, updatePositionStrategy: E = "optimized", onPlaced: D, ...O } = e, N = Po(Oo, u), [A, z] = W(null), V = G(
    t,
    (Ve) => z(Ve)
  ), [B, Z] = W(null), F = Mi(B), T = (n = F == null ? void 0 : F.width) !== null && n !== void 0 ? n : 0, H = (o = F == null ? void 0 : F.height) !== null && o !== void 0 ? o : 0, L = d + (f !== "center" ? "-" + f : ""), q = typeof w == "number" ? w : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...w
  }, S = Array.isArray($) ? $ : [
    $
  ], U = S.length > 0, X = {
    padding: q,
    boundary: S.filter(Fi),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: U
  }, { refs: pe, floatingStyles: be, placement: je, isPositioned: _e, middlewareData: re } = Ni({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: L,
    whileElementsMounted: (...Ve) => xi(...Ve, {
      animationFrame: E === "always"
    }),
    elements: {
      reference: N.anchor
    },
    middleware: [
      Jc({
        mainAxis: h + H,
        alignmentAxis: v
      }),
      b && yi({
        mainAxis: !0,
        crossAxis: !1,
        limiter: x === "partial" ? Pi() : void 0,
        ...X
      }),
      b && Ci({
        ...X
      }),
      Ei({
        ...X,
        apply: ({ elements: Ve, rects: En, availableWidth: Ur, availableHeight: jr }) => {
          const { width: Vr, height: Kr } = En.reference, ot = Ve.floating.style;
          ot.setProperty("--radix-popper-available-width", `${Ur}px`), ot.setProperty("--radix-popper-available-height", `${jr}px`), ot.setProperty("--radix-popper-anchor-width", `${Vr}px`), ot.setProperty("--radix-popper-anchor-height", `${Kr}px`);
        }
      }),
      B && Si({
        element: B,
        padding: m
      }),
      Li({
        arrowWidth: T,
        arrowHeight: H
      }),
      y && _i({
        strategy: "referenceHidden",
        ...X
      })
    ]
  }), [$e, tt] = So(je), Q = de(D);
  Fe(() => {
    _e && (Q == null || Q());
  }, [
    _e,
    Q
  ]);
  const nt = (r = re.arrow) === null || r === void 0 ? void 0 : r.x, Lr = (c = re.arrow) === null || c === void 0 ? void 0 : c.y, Br = ((i = re.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !== 0, [Wr, zr] = W();
  return Fe(() => {
    A && zr(window.getComputedStyle(A).zIndex);
  }, [
    A
  ]), /* @__PURE__ */ g("div", {
    ref: pe.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...be,
      transform: _e ? be.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Wr,
      "--radix-popper-transform-origin": [
        (a = re.transformOrigin) === null || a === void 0 ? void 0 : a.x,
        (s = re.transformOrigin) === null || s === void 0 ? void 0 : s.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ g(Ti, {
    scope: u,
    placedSide: $e,
    onArrowChange: Z,
    arrowX: nt,
    arrowY: Lr,
    shouldHideArrow: Br
  }, /* @__PURE__ */ g(K.div, _({
    "data-side": $e,
    "data-align": tt
  }, O, {
    ref: V,
    style: {
      ...O.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: _e ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = re.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function Fi(e) {
  return e !== null;
}
const Li = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, o, r, c, i;
    const { placement: a, rects: s, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, h = d ? 0 : e.arrowWidth, f = d ? 0 : e.arrowHeight, [v, m] = So(a), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[m], $ = ((o = (r = l.arrow) === null || r === void 0 ? void 0 : r.x) !== null && o !== void 0 ? o : 0) + h / 2, w = ((c = (i = l.arrow) === null || i === void 0 ? void 0 : i.y) !== null && c !== void 0 ? c : 0) + f / 2;
    let x = "", y = "";
    return v === "bottom" ? (x = d ? b : `${$}px`, y = `${-f}px`) : v === "top" ? (x = d ? b : `${$}px`, y = `${s.floating.height + f}px`) : v === "right" ? (x = `${-f}px`, y = d ? b : `${w}px`) : v === "left" && (x = `${s.floating.width + f}px`, y = d ? b : `${w}px`), {
      data: {
        x,
        y
      }
    };
  }
});
function So(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const No = ki, Mo = Ai, Do = Ii, un = /* @__PURE__ */ P((e, t) => {
  var n;
  const { container: o = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...r } = e;
  return o ? /* @__PURE__ */ nc.createPortal(/* @__PURE__ */ g(K.div, _({}, r, {
    ref: t
  })), o) : null;
});
function Bi(e, t) {
  return Hr((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const fe = (e) => {
  const { present: t, children: n } = e, o = Wi(t), r = typeof n == "function" ? n({
    present: o.isPresent
  }) : Oe.only(n), c = G(o.ref, r.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ Qt(r, {
    ref: c
  }) : null;
};
fe.displayName = "Presence";
function Wi(e) {
  const [t, n] = W(), o = k({}), r = k(e), c = k("none"), i = e ? "mounted" : "unmounted", [a, s] = Bi(i, {
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
    const l = ct(o.current);
    c.current = a === "mounted" ? l : "none";
  }, [
    a
  ]), Fe(() => {
    const l = o.current, u = r.current;
    if (u !== e) {
      const h = c.current, f = ct(l);
      e ? s("MOUNT") : f === "none" || (l == null ? void 0 : l.display) === "none" ? s("UNMOUNT") : s(u && h !== f ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [
    e,
    s
  ]), Fe(() => {
    if (t) {
      const l = (d) => {
        const f = ct(o.current).includes(d.animationName);
        d.target === t && f && so(
          () => s("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (c.current = ct(o.current));
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
    ref: j((l) => {
      l && (o.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function ct(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Pt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [o, r] = zi({
    defaultProp: t,
    onChange: n
  }), c = e !== void 0, i = c ? e : o, a = de(n), s = j((l) => {
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
function zi({ defaultProp: e, onChange: t }) {
  const n = W(e), [o] = n, r = k(o), c = de(t);
  return I(() => {
    r.current !== o && (c(o), r.current = o);
  }, [
    o,
    r,
    c
  ]), n;
}
var Ui = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Re = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), at = {}, At = 0, ko = function(e) {
  return e && (e.host || ko(e.parentNode));
}, ji = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = ko(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Vi = function(e, t, n, o) {
  var r = ji(t, Array.isArray(e) ? e : [e]);
  at[n] || (at[n] = /* @__PURE__ */ new WeakMap());
  var c = at[n], i = [], a = /* @__PURE__ */ new Set(), s = new Set(r), l = function(d) {
    !d || a.has(d) || (a.add(d), l(d.parentNode));
  };
  r.forEach(l);
  var u = function(d) {
    !d || s.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (a.has(h))
        u(h);
      else {
        var f = h.getAttribute(o), v = f !== null && f !== "false", m = (Re.get(h) || 0) + 1, b = (c.get(h) || 0) + 1;
        Re.set(h, m), c.set(h, b), i.push(h), m === 1 && v && it.set(h, !0), b === 1 && h.setAttribute(n, "true"), v || h.setAttribute(o, "true");
      }
    });
  };
  return u(t), a.clear(), At++, function() {
    i.forEach(function(d) {
      var h = Re.get(d) - 1, f = c.get(d) - 1;
      Re.set(d, h), c.set(d, f), h || (it.has(d) || d.removeAttribute(o), it.delete(d)), f || d.removeAttribute(n);
    }), At--, At || (Re = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), at = {});
  };
}, fn = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = t || Ui(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), Vi(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, se = function() {
  return se = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var c in n)
        Object.prototype.hasOwnProperty.call(n, c) && (t[c] = n[c]);
    }
    return t;
  }, se.apply(this, arguments);
};
function Ro(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Ki(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, c; o < r; o++)
      (c || !(o in t)) && (c || (c = Array.prototype.slice.call(t, 0, o)), c[o] = t[o]);
  return e.concat(c || Array.prototype.slice.call(t));
}
var ft = "right-scroll-bar-position", pt = "width-before-scroll-bar", Hi = "with-scroll-bars-hidden", Gi = "--removed-body-scroll-bar-size";
function Tt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Yi(e, t) {
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
var zn = /* @__PURE__ */ new WeakMap();
function Xi(e, t) {
  var n = Yi(t || null, function(o) {
    return e.forEach(function(r) {
      return Tt(r, o);
    });
  });
  return C.useLayoutEffect(function() {
    var o = zn.get(n);
    if (o) {
      var r = new Set(o), c = new Set(e), i = n.current;
      r.forEach(function(a) {
        c.has(a) || Tt(a, null);
      }), c.forEach(function(a) {
        r.has(a) || Tt(a, i);
      });
    }
    zn.set(n, e);
  }, [e]), n;
}
function Zi(e) {
  return e;
}
function qi(e, t) {
  t === void 0 && (t = Zi);
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
function Qi(e) {
  e === void 0 && (e = {});
  var t = qi(null);
  return t.options = se({ async: !0, ssr: !1 }, e), t;
}
var Ao = function(e) {
  var t = e.sideCar, n = Ro(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return C.createElement(o, se({}, n));
};
Ao.isSideCarExport = !0;
function Ji(e, t) {
  return e.useMedium(t), Ao;
}
var To = Qi(), It = function() {
}, Ot = C.forwardRef(function(e, t) {
  var n = C.useRef(null), o = C.useState({
    onScrollCapture: It,
    onWheelCapture: It,
    onTouchMoveCapture: It
  }), r = o[0], c = o[1], i = e.forwardProps, a = e.children, s = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, h = e.sideCar, f = e.noIsolation, v = e.inert, m = e.allowPinchZoom, b = e.as, $ = b === void 0 ? "div" : b, w = Ro(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = h, y = Xi([n, t]), E = se(se({}, w), r);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(x, { sideCar: To, removeScrollBar: l, shards: d, noIsolation: f, inert: v, setCallbacks: c, allowPinchZoom: !!m, lockRef: n }),
    i ? C.cloneElement(C.Children.only(a), se(se({}, E), { ref: y })) : C.createElement($, se({}, E, { className: s, ref: y }), a)
  );
});
Ot.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ot.classNames = {
  fullWidth: pt,
  zeroRight: ft
};
var Un, ea = function() {
  if (Un)
    return Un;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ta() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ea();
  return t && e.setAttribute("nonce", t), e;
}
function na(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function oa(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ra = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ta()) && (na(t, n), oa(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ca = function() {
  var e = ra();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Io = function() {
  var e = ca(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, ia = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ft = function(e) {
  return parseInt(e || "", 10) || 0;
}, aa = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ft(n), Ft(o), Ft(r)];
}, sa = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ia;
  var t = aa(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, la = Io(), wt = "data-scroll-locked", da = function(e, t, n, o) {
  var r = e.left, c = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Hi, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(a, "px ").concat(o, `;
  }
  body[`).concat(wt, `] {
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
  
  .`).concat(ft, ` {
    right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(pt, ` {
    margin-right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(ft, " .").concat(ft, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(pt, " .").concat(pt, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(wt, `] {
    `).concat(Gi, ": ").concat(a, `px;
  }
`);
}, ua = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o, c = C.useMemo(function() {
    return sa(r);
  }, [r]);
  return C.useEffect(function() {
    return document.body.setAttribute(wt, ""), function() {
      document.body.removeAttribute(wt);
    };
  }, []), C.createElement(la, { styles: da(c, !t, r, n ? "" : "!important") });
}, Vt = !1;
if (typeof window < "u")
  try {
    var st = Object.defineProperty({}, "passive", {
      get: function() {
        return Vt = !0, !0;
      }
    });
    window.addEventListener("test", st, st), window.removeEventListener("test", st, st);
  } catch {
    Vt = !1;
  }
var Ae = Vt ? { passive: !1 } : !1, fa = function(e) {
  return e.tagName === "TEXTAREA";
}, Fo = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !fa(e) && n[t] === "visible")
  );
}, pa = function(e) {
  return Fo(e, "overflowY");
}, ma = function(e) {
  return Fo(e, "overflowX");
}, jn = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Lo(e, n);
    if (o) {
      var r = Bo(e, n), c = r[1], i = r[2];
      if (c > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, ha = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, va = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, Lo = function(e, t) {
  return e === "v" ? pa(t) : ma(t);
}, Bo = function(e, t) {
  return e === "v" ? ha(t) : va(t);
}, ga = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ba = function(e, t, n, o, r) {
  var c = ga(e, window.getComputedStyle(t).direction), i = c * o, a = n.target, s = t.contains(a), l = !1, u = i > 0, d = 0, h = 0;
  do {
    var f = Bo(e, a), v = f[0], m = f[1], b = f[2], $ = m - b - c * v;
    (v || $) && Lo(e, a) && (d += $, h += v), a = a.parentNode;
  } while (
    // portaled content
    !s && a !== document.body || // self content
    s && (t.contains(a) || t === a)
  );
  return (u && (r && d === 0 || !r && i > d) || !u && (r && h === 0 || !r && -i > h)) && (l = !0), l;
}, lt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Vn = function(e) {
  return [e.deltaX, e.deltaY];
}, Kn = function(e) {
  return e && "current" in e ? e.current : e;
}, $a = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, wa = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, xa = 0, Te = [];
function ya(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), o = C.useRef(), r = C.useState(xa++)[0], c = C.useState(function() {
    return Io();
  })[0], i = C.useRef(e);
  C.useEffect(function() {
    i.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var m = Ki([e.lockRef.current], (e.shards || []).map(Kn), !0).filter(Boolean);
      return m.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), m.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = C.useCallback(function(m, b) {
    if ("touches" in m && m.touches.length === 2)
      return !i.current.allowPinchZoom;
    var $ = lt(m), w = n.current, x = "deltaX" in m ? m.deltaX : w[0] - $[0], y = "deltaY" in m ? m.deltaY : w[1] - $[1], E, D = m.target, O = Math.abs(x) > Math.abs(y) ? "h" : "v";
    if ("touches" in m && O === "h" && D.type === "range")
      return !1;
    var N = jn(O, D);
    if (!N)
      return !0;
    if (N ? E = O : (E = O === "v" ? "h" : "v", N = jn(O, D)), !N)
      return !1;
    if (!o.current && "changedTouches" in m && (x || y) && (o.current = E), !E)
      return !0;
    var A = o.current || E;
    return ba(A, b, m, A === "h" ? x : y, !0);
  }, []), s = C.useCallback(function(m) {
    var b = m;
    if (!(!Te.length || Te[Te.length - 1] !== c)) {
      var $ = "deltaY" in b ? Vn(b) : lt(b), w = t.current.filter(function(E) {
        return E.name === b.type && E.target === b.target && $a(E.delta, $);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var x = (i.current.shards || []).map(Kn).filter(Boolean).filter(function(E) {
          return E.contains(b.target);
        }), y = x.length > 0 ? a(b, x[0]) : !i.current.noIsolation;
        y && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(m, b, $, w) {
    var x = { name: m, delta: b, target: $, should: w };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== x;
      });
    }, 1);
  }, []), u = C.useCallback(function(m) {
    n.current = lt(m), o.current = void 0;
  }, []), d = C.useCallback(function(m) {
    l(m.type, Vn(m), m.target, a(m, e.lockRef.current));
  }, []), h = C.useCallback(function(m) {
    l(m.type, lt(m), m.target, a(m, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Te.push(c), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", s, Ae), document.addEventListener("touchmove", s, Ae), document.addEventListener("touchstart", u, Ae), function() {
      Te = Te.filter(function(m) {
        return m !== c;
      }), document.removeEventListener("wheel", s, Ae), document.removeEventListener("touchmove", s, Ae), document.removeEventListener("touchstart", u, Ae);
    };
  }, []);
  var f = e.removeScrollBar, v = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    v ? C.createElement(c, { styles: wa(r) }) : null,
    f ? C.createElement(ua, { gapMode: "margin" }) : null
  );
}
const Ca = Ji(To, ya);
var Wo = C.forwardRef(function(e, t) {
  return C.createElement(Ot, se({}, e, { ref: t, sideCar: Ca }));
});
Wo.classNames = Ot.classNames;
const pn = Wo, zo = "Popover", [Uo, Ad] = Me(zo, [
  _t
]), mn = _t(), [Ea, Ue] = Uo(zo), _a = (e) => {
  const { __scopePopover: t, children: n, open: o, defaultOpen: r, onOpenChange: c, modal: i = !1 } = e, a = mn(t), s = k(null), [l, u] = W(!1), [d = !1, h] = Pt({
    prop: o,
    defaultProp: r,
    onChange: c
  });
  return /* @__PURE__ */ g(No, a, /* @__PURE__ */ g(Ea, {
    scope: t,
    contentId: Se(),
    triggerRef: s,
    open: d,
    onOpenChange: h,
    onOpenToggle: j(
      () => h(
        (f) => !f
      ),
      [
        h
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: j(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: j(
      () => u(!1),
      []
    ),
    modal: i
  }, n));
}, Pa = "PopoverTrigger", Oa = /* @__PURE__ */ P((e, t) => {
  const { __scopePopover: n, ...o } = e, r = Ue(Pa, n), c = mn(n), i = G(t, r.triggerRef), a = /* @__PURE__ */ g(K.button, _({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": Ko(r.open)
  }, o, {
    ref: i,
    onClick: R(e.onClick, r.onOpenToggle)
  }));
  return r.hasCustomAnchor ? a : /* @__PURE__ */ g(Mo, _({
    asChild: !0
  }, c), a);
}), jo = "PopoverPortal", [Sa, Na] = Uo(jo, {
  forceMount: void 0
}), Ma = (e) => {
  const { __scopePopover: t, forceMount: n, children: o, container: r } = e, c = Ue(jo, t);
  return /* @__PURE__ */ g(Sa, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ g(fe, {
    present: n || c.open
  }, /* @__PURE__ */ g(un, {
    asChild: !0,
    container: r
  }, o)));
}, Ye = "PopoverContent", Da = /* @__PURE__ */ P((e, t) => {
  const n = Na(Ye, e.__scopePopover), { forceMount: o = n.forceMount, ...r } = e, c = Ue(Ye, e.__scopePopover);
  return /* @__PURE__ */ g(fe, {
    present: o || c.open
  }, c.modal ? /* @__PURE__ */ g(ka, _({}, r, {
    ref: t
  })) : /* @__PURE__ */ g(Ra, _({}, r, {
    ref: t
  })));
}), ka = /* @__PURE__ */ P((e, t) => {
  const n = Ue(Ye, e.__scopePopover), o = k(null), r = G(t, o), c = k(!1);
  return I(() => {
    const i = o.current;
    if (i)
      return fn(i);
  }, []), /* @__PURE__ */ g(pn, {
    as: xe,
    allowPinchZoom: !0
  }, /* @__PURE__ */ g(Vo, _({}, e, {
    ref: r,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: R(e.onCloseAutoFocus, (i) => {
      var a;
      i.preventDefault(), c.current || (a = n.triggerRef.current) === null || a === void 0 || a.focus();
    }),
    onPointerDownOutside: R(e.onPointerDownOutside, (i) => {
      const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0, l = a.button === 2 || s;
      c.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: R(
      e.onFocusOutside,
      (i) => i.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), Ra = /* @__PURE__ */ P((e, t) => {
  const n = Ue(Ye, e.__scopePopover), o = k(!1), r = k(!1);
  return /* @__PURE__ */ g(Vo, _({}, e, {
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
}), Vo = /* @__PURE__ */ P((e, t) => {
  const { __scopePopover: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: c, disableOutsidePointerEvents: i, onEscapeKeyDown: a, onPointerDownOutside: s, onFocusOutside: l, onInteractOutside: u, ...d } = e, h = Ue(Ye, n), f = mn(n);
  return nn(), /* @__PURE__ */ g(on, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: c
  }, /* @__PURE__ */ g(tn, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onInteractOutside: u,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: l,
    onDismiss: () => h.onOpenChange(!1)
  }, /* @__PURE__ */ g(Do, _({
    "data-state": Ko(h.open),
    role: "dialog",
    id: h.contentId
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
function Ko(e) {
  return e ? "open" : "closed";
}
const Aa = _a, Ta = Oa, Ia = Ma, Ho = Da;
function Y(...e) {
  return rc(oc(e));
}
const Go = Aa, Yo = Ta, hn = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...o }, r) => /* @__PURE__ */ p(Ia, { children: /* @__PURE__ */ p(
  Ho,
  {
    ref: r,
    align: t,
    sideOffset: n,
    className: Y(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...o
  }
) }));
hn.displayName = Ho.displayName;
const Fa = [
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
], La = cc(
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
), ne = C.forwardRef(
  ({ className: e, variant: t, size: n, asChild: o = !1, ...r }, c) => /* @__PURE__ */ p(
    o ? xe : "button",
    {
      className: Y(La({ variant: t, size: n, className: e })),
      ref: c,
      ...r
    }
  )
);
ne.displayName = "Button";
const Ba = (e) => e ? e.cookie.split("; ").map((r) => {
  const c = r.split("=");
  return { [c[0]]: c[1] };
}).reduce((r, c) => ({
  ...r,
  ...c
})) : null, Td = () => {
  const [e, t] = W(null), n = e ? e.theme : "dark";
  return I(() => {
    if (typeof document < "u") {
      const o = Ba(document);
      t(o);
    }
  }, [typeof document]), /* @__PURE__ */ M(Go, { children: [
    /* @__PURE__ */ p(Yo, { asChild: !0, className: "rounded-full border w-9 h-9 flex items-center bg-background justify-center", children: /* @__PURE__ */ p(ne, { size: "icon", variant: "ghost", children: /* @__PURE__ */ p(ec, { size: 20 }) }) }),
    /* @__PURE__ */ p(hn, { className: "projects-grid", children: Fa.map(
      (o) => /* @__PURE__ */ M("a", { href: o.link, className: "w-full h-full flex flex-col items-center justify-center gap-2 rounded-md hover:bg-muted p-1", children: [
        /* @__PURE__ */ p("div", { className: "w-7 h-7 relative", children: /* @__PURE__ */ p("img", { src: o.themedIcon ? o.themedIcon[n] : o.icon, className: "w-full h-full", alt: "project-icon" }) }),
        /* @__PURE__ */ p("span", { className: "text-xs text-center", children: o.name })
      ] }, o.key)
    ) })
  ] });
}, Pe = {
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
}, Wa = {
  resize: "none",
  outline: "none",
  display: "block",
  overflow: "hidden",
  backgroundColor: "transparent"
}, Id = (e) => {
  const t = k(null), n = (o) => {
    if (e.onChange && e.onChange(o), t.current) {
      t.current.style.height = "40px";
      const r = t.current.scrollHeight;
      t.current.style.height = r + "px";
    }
  };
  return en(() => {
    const o = t.current;
    if (e.value && o) {
      t.current.style.height = "40px";
      const r = t.current.scrollHeight;
      t.current.style.height = r + "px";
    }
  }, [e.value, t]), /* @__PURE__ */ p("textarea", { ...e, ref: t, onChange: n, style: { ...Wa } });
}, za = ic(() => import("./markdown-e5d6ecc8.mjs"), {
  // Make sure we turn SSR off
  ssr: !1
}), Ua = P(
  (e, t) => /* @__PURE__ */ p(za, { ...e, editorRef: t })
);
Ua.displayName = "ForwardRefEditor";
const ja = ({ notification: e }) => {
  const t = k(null), [n] = uc(t), { fromSeconds: o } = lo, r = o(e.createdAt);
  return I(() => {
    !e.isViewed && n && Bt.patch(e.receiver, e.doc_id, { isViewed: !0 });
  }, [e.isViewed, n]), /* @__PURE__ */ M("div", { ref: t, className: "w-full h-fit flex justify-between group cursor-pointer hover:bg-card transition-colors", children: [
    e.link ? /* @__PURE__ */ M("div", { className: "w-fit h-fit flex items-center relative", children: [
      /* @__PURE__ */ p(fc, { href: e.link, className: "absolute w-full h-full left-0 top-0" }),
      /* @__PURE__ */ p("div", { className: "p-4", children: /* @__PURE__ */ p("div", { className: "w-9 h-9 rounded-full bg-muted" }) }),
      /* @__PURE__ */ M("div", { className: "w-full h-fit flex flex-col py-4", children: [
        /* @__PURE__ */ p("span", { className: "text-sm", children: e.message }),
        /* @__PURE__ */ p("span", { className: "text-xs text-muted-foreground", children: r.setLocale("ru").toRelative() })
      ] })
    ] }) : /* @__PURE__ */ M("div", { className: "w-fit h-fit flex items-center", children: [
      /* @__PURE__ */ p("div", { className: "p-4", children: /* @__PURE__ */ p("div", { className: "w-9 h-9 rounded-full bg-muted" }) }),
      /* @__PURE__ */ M("div", { className: "w-full h-fit flex flex-col py-4", children: [
        /* @__PURE__ */ p("span", { className: "text-sm", children: e.message }),
        /* @__PURE__ */ p("span", { className: "text-xs text-muted-foreground", children: r.setLocale("ru").toRelative() })
      ] })
    ] }),
    /* @__PURE__ */ p("div", { className: "p-4", children: /* @__PURE__ */ p(
      ne,
      {
        size: "icon",
        variant: "ghost",
        className: "opacity-0 group-hover:opacity-100 transition-opacity rounded-full",
        onClick: () => Bt.delete(e.receiver, e.doc_id),
        children: /* @__PURE__ */ p(Gr, {})
      }
    ) })
  ] });
}, Va = ro(ja), Ka = (
  // process.env.NEXT_PUBLIC_API_HOST_PROD as string
  process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_API_HOST_DEV : process.env.NEXT_PUBLIC_API_HOST_PROD
), Kt = "horizontal", Ha = [
  "horizontal",
  "vertical"
], Xo = /* @__PURE__ */ P((e, t) => {
  const { decorative: n, orientation: o = Kt, ...r } = e, c = Zo(o) ? o : Kt, a = n ? {
    role: "none"
  } : {
    "aria-orientation": c === "vertical" ? c : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ g(K.div, _({
    "data-orientation": c
  }, a, r, {
    ref: t
  }));
});
Xo.propTypes = {
  orientation(e, t, n) {
    const o = e[t], r = String(o);
    return o && !Zo(o) ? new Error(Ga(r, n)) : null;
  }
};
function Ga(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Kt}\`.`;
}
function Zo(e) {
  return Ha.includes(e);
}
const qo = Xo, Be = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, r) => /* @__PURE__ */ p(
    qo,
    {
      ref: r,
      decorative: n,
      orientation: t,
      className: Y(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...o
    }
  )
);
Be.displayName = qo.displayName;
const Fd = ({ auth: e }) => {
  const [t, n] = W(!1), [o] = dc(e), [r, c] = W([]), i = r.filter((s) => !s.isViewed), a = () => {
    r.length && o && r.forEach(
      (s) => Bt.delete(o.uid, s.doc_id)
    );
  };
  return I(() => {
    const s = pc(Ka);
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
  }, [o == null ? void 0 : o.uid]), !o || !e ? null : /* @__PURE__ */ M(Go, { open: o ? t : !1, onOpenChange: (s) => n(s), children: [
    /* @__PURE__ */ M(Yo, { className: "relative w-9 h-9 rounded-full flex items-center justify-center border bg-background", children: [
      i.length !== 0 && /* @__PURE__ */ p("div", { className: "absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-primary" }),
      /* @__PURE__ */ p(Jr, { size: 16 })
    ] }),
    /* @__PURE__ */ M(hn, { className: "w-96 p-0 flex flex-col bg-background", children: [
      /* @__PURE__ */ p("div", { className: "w-full border-b p-3 flex items-center", children: /* @__PURE__ */ p("div", { className: "w-fit h-fit flex items-center gap-4", children: /* @__PURE__ */ p("span", { className: "text-sm text-muted-foreground", children: "Входящие" }) }) }),
      /* @__PURE__ */ p("div", { className: "w-full h-full flex flex-col", children: r.length ? r.map(
        (s, l) => /* @__PURE__ */ M(le, { children: [
          /* @__PURE__ */ p(Va, { notification: s }, s.doc_id),
          l !== r.length - 1 && /* @__PURE__ */ p(Be, {}, s.doc_id + "-separator")
        ] })
      ) : /* @__PURE__ */ p("div", { className: "w-full h-64 flex items-center justify-center", children: /* @__PURE__ */ p("span", { className: "text-center text-sm text-muted-foreground", children: "Нет новых уведомлений" }) }) }),
      /* @__PURE__ */ p("div", { className: "w-full h-fit p-2 border-t flex items-center justify-center", children: /* @__PURE__ */ p(ne, { size: "sm", onClick: a, variant: "ghost", children: "Очистить" }) })
    ] })
  ] });
}, Ya = ({ onSelect: e, isCurrent: t = !1, isSelected: n = !1, uid: o, noBorder: r = !1 }) => {
  const [c, i] = W(null);
  return I(() => {
    ac.byId.short(o).then((a) => i(a));
  }, [o]), c ? /* @__PURE__ */ M(
    "div",
    {
      onClick: () => c && e && e(c),
      className: Y(
        r ? "border-b-0" : "border-b",
        "w-full p-3 flex items-center gap-2 hover:bg-card transition-colors cursor-pointer"
      ),
      children: [
        /* @__PURE__ */ M("div", { className: "w-10 aspect-square relative flex items-center justify-center", children: [
          t && /* @__PURE__ */ p("div", { className: "absolute z-10 w-full h-full flex items-center justify-center rounded-full bg-green-600", children: /* @__PURE__ */ p(Yr, { className: "text-accent-foreground", size: 24 }) }),
          c.photoUrl ? /* @__PURE__ */ p(Zt, { className: "rounded-full", src: c.photoUrl, width: 40, height: 40, alt: "profile-photo" }) : /* @__PURE__ */ p("div", { className: "w-10 rounded-full aspect-square bg-muted" })
        ] }),
        /* @__PURE__ */ M("div", { className: "h-full flex flex-col justify-center", children: [
          /* @__PURE__ */ p("span", { className: "font-medium leading-6", children: c.displayName || "Пользователь" }),
          /* @__PURE__ */ p("span", { className: "text-xs text-muted-foreground", children: c.position || c.email })
        ] })
      ]
    }
  ) : null;
}, Ld = ({ position: e = "absolute", onUser: t, members: n = [], user: o = null }) => {
  const [r, c] = W(!1), [i, a] = W(null), s = () => {
    i && t && t(i.uid);
  };
  return r ? null : /* @__PURE__ */ p(
    "div",
    {
      className: Y(
        e,
        "md:!top-4 -top-2.5 md:!right-4 -right-6 md:!w-96 w-screen h-fit rounded-lg bg-background border z-50"
      ),
      children: /* @__PURE__ */ M("div", { className: "w-full h-fit p-4 space-y-2", children: [
        /* @__PURE__ */ M("div", { className: "flex items-center w-full justify-between", children: [
          /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ p(Zt, { src: sc("/dm/icons/dm-star-dark.svg"), width: 24, height: 24, alt: "star-logo" }),
            /* @__PURE__ */ p("span", { className: "text-base font-medium", children: "Darkmaterial" })
          ] }),
          /* @__PURE__ */ p(ne, { size: "icon", variant: "ghost", onClick: () => c(!0), children: /* @__PURE__ */ p(Xr, { size: 18 }) })
        ] }),
        /* @__PURE__ */ p("div", { className: "w-full flex flex-col", children: n.map((l, u, d) => /* @__PURE__ */ p(
          Ya,
          {
            uid: l,
            noBorder: u === d.length - 1,
            onSelect: a,
            isSelected: i ? l === i.uid : !1,
            isCurrent: o ? l === o.uid : !1
          },
          l + "-fast-pick"
        )) }),
        i && /* @__PURE__ */ M(ne, { className: "w-full", onClick: s, children: [
          "Продолжить как ",
          i.nickname || i.displayName || "Пользователь"
        ] })
      ] })
    }
  );
}, Xa = ({ index: e, height: t, width: n }) => {
  const o = Pe.randomNum(0, 10), r = Pe.randomNum(0, 2), c = Pe.randomNum(1, 3), i = Pe.randomNum(1, 3), a = [
    { min: 0.25, max: 0.5 },
    { min: 0.5, max: 0.7 },
    { min: 0.6, max: 1 }
  ];
  return /* @__PURE__ */ p(
    mc.div,
    {
      initial: { opacity: a[r].min },
      animate: { opacity: a[r].max },
      transition: { repeat: 1 / 0, repeatType: "mirror", duration: c, delay: o },
      style: {
        width: `${i}px`,
        height: `${i}px`,
        top: Pe.randomNum(0 + 10, t - 10),
        left: Pe.randomNum(0 + 10, n - 10)
      },
      className: "absolute w-0.5 h-0.5 rounded-full bg-primary"
    },
    "star-" + e
  );
}, Bd = ({ starsCount: e = 50 }) => {
  const t = Ke(() => Array.from({ length: e }).map((l, u) => u), []), n = k(null), [o, r] = W(0), [c, i] = W(0), [a, s] = W(!1);
  return I(() => {
    const l = n.current;
    if (l) {
      const { offsetWidth: u, offsetHeight: d } = l;
      r(u), i(d), s(!0);
    }
  }, [n]), /* @__PURE__ */ p("div", { ref: n, className: Y(
    a ? "opacity-100" : "opacity-0",
    "absolute w-full h-full z-[-1]"
  ), children: t.map(
    (l) => /* @__PURE__ */ p(Xa, { width: o, height: c, index: l }, "star-" + l + "-" + Pe.generateId(6))
  ) });
};
function Qo(e) {
  const t = e + "CollectionProvider", [n, o] = Me(t), [r, c] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), i = (f) => {
    const { scope: v, children: m } = f, b = ae.useRef(null), $ = ae.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ ae.createElement(r, {
      scope: v,
      itemMap: $,
      collectionRef: b
    }, m);
  }, a = e + "CollectionSlot", s = /* @__PURE__ */ ae.forwardRef((f, v) => {
    const { scope: m, children: b } = f, $ = c(a, m), w = G(v, $.collectionRef);
    return /* @__PURE__ */ ae.createElement(xe, {
      ref: w
    }, b);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ ae.forwardRef((f, v) => {
    const { scope: m, children: b, ...$ } = f, w = ae.useRef(null), x = G(v, w), y = c(l, m);
    return ae.useEffect(() => (y.itemMap.set(w, {
      ref: w,
      ...$
    }), () => void y.itemMap.delete(w))), /* @__PURE__ */ ae.createElement(xe, {
      [u]: "",
      ref: x
    }, b);
  });
  function h(f) {
    const v = c(e + "CollectionConsumer", f);
    return ae.useCallback(() => {
      const b = v.collectionRef.current;
      if (!b)
        return [];
      const $ = Array.from(b.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort(
        (y, E) => $.indexOf(y.ref.current) - $.indexOf(E.ref.current)
      );
    }, [
      v.collectionRef,
      v.itemMap
    ]);
  }
  return [
    {
      Provider: i,
      Slot: s,
      ItemSlot: d
    },
    h,
    o
  ];
}
const Za = /* @__PURE__ */ mt(void 0);
function Jo(e) {
  const t = qt(Za);
  return e || t || "ltr";
}
const Lt = "rovingFocusGroup.onEntryFocus", qa = {
  bubbles: !1,
  cancelable: !0
}, vn = "RovingFocusGroup", [Ht, er, Qa] = Qo(vn), [Ja, tr] = Me(vn, [
  Qa
]), [es, ts] = Ja(vn), ns = /* @__PURE__ */ P((e, t) => /* @__PURE__ */ g(Ht.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ g(Ht.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ g(os, _({}, e, {
  ref: t
}))))), os = /* @__PURE__ */ P((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: o, loop: r = !1, dir: c, currentTabStopId: i, defaultCurrentTabStopId: a, onCurrentTabStopIdChange: s, onEntryFocus: l, ...u } = e, d = k(null), h = G(t, d), f = Jo(c), [v = null, m] = Pt({
    prop: i,
    defaultProp: a,
    onChange: s
  }), [b, $] = W(!1), w = de(l), x = er(n), y = k(!1), [E, D] = W(0);
  return I(() => {
    const O = d.current;
    if (O)
      return O.addEventListener(Lt, w), () => O.removeEventListener(Lt, w);
  }, [
    w
  ]), /* @__PURE__ */ g(es, {
    scope: n,
    orientation: o,
    dir: f,
    loop: r,
    currentTabStopId: v,
    onItemFocus: j(
      (O) => m(O),
      [
        m
      ]
    ),
    onItemShiftTab: j(
      () => $(!0),
      []
    ),
    onFocusableItemAdd: j(
      () => D(
        (O) => O + 1
      ),
      []
    ),
    onFocusableItemRemove: j(
      () => D(
        (O) => O - 1
      ),
      []
    )
  }, /* @__PURE__ */ g(K.div, _({
    tabIndex: b || E === 0 ? -1 : 0,
    "data-orientation": o
  }, u, {
    ref: h,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: R(e.onMouseDown, () => {
      y.current = !0;
    }),
    onFocus: R(e.onFocus, (O) => {
      const N = !y.current;
      if (O.target === O.currentTarget && N && !b) {
        const A = new CustomEvent(Lt, qa);
        if (O.currentTarget.dispatchEvent(A), !A.defaultPrevented) {
          const z = x().filter(
            (T) => T.focusable
          ), V = z.find(
            (T) => T.active
          ), B = z.find(
            (T) => T.id === v
          ), F = [
            V,
            B,
            ...z
          ].filter(Boolean).map(
            (T) => T.ref.current
          );
          nr(F);
        }
      }
      y.current = !1;
    }),
    onBlur: R(
      e.onBlur,
      () => $(!1)
    )
  })));
}), rs = "RovingFocusGroupItem", cs = /* @__PURE__ */ P((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: o = !0, active: r = !1, tabStopId: c, ...i } = e, a = Se(), s = c || a, l = ts(rs, n), u = l.currentTabStopId === s, d = er(n), { onFocusableItemAdd: h, onFocusableItemRemove: f } = l;
  return I(() => {
    if (o)
      return h(), () => f();
  }, [
    o,
    h,
    f
  ]), /* @__PURE__ */ g(Ht.ItemSlot, {
    scope: n,
    id: s,
    focusable: o,
    active: r
  }, /* @__PURE__ */ g(K.span, _({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, i, {
    ref: t,
    onMouseDown: R(e.onMouseDown, (v) => {
      o ? l.onItemFocus(s) : v.preventDefault();
    }),
    onFocus: R(
      e.onFocus,
      () => l.onItemFocus(s)
    ),
    onKeyDown: R(e.onKeyDown, (v) => {
      if (v.key === "Tab" && v.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (v.target !== v.currentTarget)
        return;
      const m = ss(v, l.orientation, l.dir);
      if (m !== void 0) {
        v.preventDefault();
        let $ = d().filter(
          (w) => w.focusable
        ).map(
          (w) => w.ref.current
        );
        if (m === "last")
          $.reverse();
        else if (m === "prev" || m === "next") {
          m === "prev" && $.reverse();
          const w = $.indexOf(v.currentTarget);
          $ = l.loop ? ls($, w + 1) : $.slice(w + 1);
        }
        setTimeout(
          () => nr($)
        );
      }
    })
  })));
}), is = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function as(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ss(e, t, n) {
  const o = as(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(o)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(o)))
    return is[o];
}
function nr(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function ls(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
const ds = ns, us = cs, Gt = [
  "Enter",
  " "
], fs = [
  "ArrowDown",
  "PageUp",
  "Home"
], or = [
  "ArrowUp",
  "PageDown",
  "End"
], ps = [
  ...fs,
  ...or
], ms = {
  ltr: [
    ...Gt,
    "ArrowRight"
  ],
  rtl: [
    ...Gt,
    "ArrowLeft"
  ]
}, hs = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, St = "Menu", [Xe, vs, gs] = Qo(St), [De, rr] = Me(St, [
  gs,
  _t,
  tr
]), gn = _t(), cr = tr(), [bs, ke] = De(St), [$s, et] = De(St), ws = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: c, modal: i = !0 } = e, a = gn(t), [s, l] = W(null), u = k(!1), d = de(c), h = Jo(r);
  return I(() => {
    const f = () => {
      u.current = !0, document.addEventListener("pointerdown", v, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", v, {
        capture: !0,
        once: !0
      });
    }, v = () => u.current = !1;
    return document.addEventListener("keydown", f, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", f, {
        capture: !0
      }), document.removeEventListener("pointerdown", v, {
        capture: !0
      }), document.removeEventListener("pointermove", v, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ g(No, a, /* @__PURE__ */ g(bs, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: s,
    onContentChange: l
  }, /* @__PURE__ */ g($s, {
    scope: t,
    onClose: j(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: h,
    modal: i
  }, o)));
}, ir = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenu: n, ...o } = e, r = gn(n);
  return /* @__PURE__ */ g(Mo, _({}, r, o, {
    ref: t
  }));
}), ar = "MenuPortal", [xs, sr] = De(ar, {
  forceMount: void 0
}), ys = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, c = ke(ar, t);
  return /* @__PURE__ */ g(xs, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ g(fe, {
    present: n || c.open
  }, /* @__PURE__ */ g(un, {
    asChild: !0,
    container: r
  }, o)));
}, ce = "MenuContent", [Cs, bn] = De(ce), Es = /* @__PURE__ */ P((e, t) => {
  const n = sr(ce, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, c = ke(ce, e.__scopeMenu), i = et(ce, e.__scopeMenu);
  return /* @__PURE__ */ g(Xe.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ g(fe, {
    present: o || c.open
  }, /* @__PURE__ */ g(Xe.Slot, {
    scope: e.__scopeMenu
  }, i.modal ? /* @__PURE__ */ g(_s, _({}, r, {
    ref: t
  })) : /* @__PURE__ */ g(Ps, _({}, r, {
    ref: t
  })))));
}), _s = /* @__PURE__ */ P((e, t) => {
  const n = ke(ce, e.__scopeMenu), o = k(null), r = G(t, o);
  return I(() => {
    const c = o.current;
    if (c)
      return fn(c);
  }, []), /* @__PURE__ */ g($n, _({}, e, {
    ref: r,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: R(
      e.onFocusOutside,
      (c) => c.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Ps = /* @__PURE__ */ P((e, t) => {
  const n = ke(ce, e.__scopeMenu);
  return /* @__PURE__ */ g($n, _({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), $n = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenu: n, loop: o = !1, trapFocus: r, onOpenAutoFocus: c, onCloseAutoFocus: i, disableOutsidePointerEvents: a, onEntryFocus: s, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: h, onDismiss: f, disableOutsideScroll: v, ...m } = e, b = ke(ce, n), $ = et(ce, n), w = gn(n), x = cr(n), y = vs(n), [E, D] = W(null), O = k(null), N = G(t, O, b.onContentChange), A = k(0), z = k(""), V = k(0), B = k(null), Z = k("right"), F = k(0), T = v ? pn : Jt, H = v ? {
    as: xe,
    allowPinchZoom: !0
  } : void 0, L = (S) => {
    var U, X;
    const pe = z.current + S, be = y().filter(
      (Q) => !Q.disabled
    ), je = document.activeElement, _e = (U = be.find(
      (Q) => Q.ref.current === je
    )) === null || U === void 0 ? void 0 : U.textValue, re = be.map(
      (Q) => Q.textValue
    ), $e = Us(re, pe, _e), tt = (X = be.find(
      (Q) => Q.textValue === $e
    )) === null || X === void 0 ? void 0 : X.ref.current;
    (function Q(nt) {
      z.current = nt, window.clearTimeout(A.current), nt !== "" && (A.current = window.setTimeout(
        () => Q(""),
        1e3
      ));
    })(pe), tt && setTimeout(
      () => tt.focus()
    );
  };
  I(() => () => window.clearTimeout(A.current), []), nn();
  const q = j((S) => {
    var U, X;
    return Z.current === ((U = B.current) === null || U === void 0 ? void 0 : U.side) && Vs(S, (X = B.current) === null || X === void 0 ? void 0 : X.area);
  }, []);
  return /* @__PURE__ */ g(Cs, {
    scope: n,
    searchRef: z,
    onItemEnter: j((S) => {
      q(S) && S.preventDefault();
    }, [
      q
    ]),
    onItemLeave: j((S) => {
      var U;
      q(S) || ((U = O.current) === null || U === void 0 || U.focus(), D(null));
    }, [
      q
    ]),
    onTriggerLeave: j((S) => {
      q(S) && S.preventDefault();
    }, [
      q
    ]),
    pointerGraceTimerRef: V,
    onPointerGraceIntentChange: j((S) => {
      B.current = S;
    }, [])
  }, /* @__PURE__ */ g(T, H, /* @__PURE__ */ g(on, {
    asChild: !0,
    trapped: r,
    onMountAutoFocus: R(c, (S) => {
      var U;
      S.preventDefault(), (U = O.current) === null || U === void 0 || U.focus();
    }),
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ g(tn, {
    asChild: !0,
    disableOutsidePointerEvents: a,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: h,
    onDismiss: f
  }, /* @__PURE__ */ g(ds, _({
    asChild: !0
  }, x, {
    dir: $.dir,
    orientation: "vertical",
    loop: o,
    currentTabStopId: E,
    onCurrentTabStopIdChange: D,
    onEntryFocus: R(s, (S) => {
      $.isUsingKeyboardRef.current || S.preventDefault();
    })
  }), /* @__PURE__ */ g(Do, _({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": pr(b.open),
    "data-radix-menu-content": "",
    dir: $.dir
  }, w, m, {
    ref: N,
    style: {
      outline: "none",
      ...m.style
    },
    onKeyDown: R(m.onKeyDown, (S) => {
      const X = S.target.closest("[data-radix-menu-content]") === S.currentTarget, pe = S.ctrlKey || S.altKey || S.metaKey, be = S.key.length === 1;
      X && (S.key === "Tab" && S.preventDefault(), !pe && be && L(S.key));
      const je = O.current;
      if (S.target !== je || !ps.includes(S.key))
        return;
      S.preventDefault();
      const re = y().filter(
        ($e) => !$e.disabled
      ).map(
        ($e) => $e.ref.current
      );
      or.includes(S.key) && re.reverse(), Ws(re);
    }),
    onBlur: R(e.onBlur, (S) => {
      S.currentTarget.contains(S.target) || (window.clearTimeout(A.current), z.current = "");
    }),
    onPointerMove: R(e.onPointerMove, Ze((S) => {
      const U = S.target, X = F.current !== S.clientX;
      if (S.currentTarget.contains(U) && X) {
        const pe = S.clientX > F.current ? "right" : "left";
        Z.current = pe, F.current = S.clientX;
      }
    }))
  })))))));
}), Os = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return /* @__PURE__ */ g(K.div, _({}, o, {
    ref: t
  }));
}), Yt = "MenuItem", Hn = "menu.itemSelect", wn = /* @__PURE__ */ P((e, t) => {
  const { disabled: n = !1, onSelect: o, ...r } = e, c = k(null), i = et(Yt, e.__scopeMenu), a = bn(Yt, e.__scopeMenu), s = G(t, c), l = k(!1), u = () => {
    const d = c.current;
    if (!n && d) {
      const h = new CustomEvent(Hn, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        Hn,
        (f) => o == null ? void 0 : o(f),
        {
          once: !0
        }
      ), uo(d, h), h.defaultPrevented ? l.current = !1 : i.onClose();
    }
  };
  return /* @__PURE__ */ g(lr, _({}, r, {
    ref: s,
    disabled: n,
    onClick: R(e.onClick, u),
    onPointerDown: (d) => {
      var h;
      (h = e.onPointerDown) === null || h === void 0 || h.call(e, d), l.current = !0;
    },
    onPointerUp: R(e.onPointerUp, (d) => {
      var h;
      l.current || (h = d.currentTarget) === null || h === void 0 || h.click();
    }),
    onKeyDown: R(e.onKeyDown, (d) => {
      const h = a.searchRef.current !== "";
      n || h && d.key === " " || Gt.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), lr = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenu: n, disabled: o = !1, textValue: r, ...c } = e, i = bn(Yt, n), a = cr(n), s = k(null), l = G(t, s), [u, d] = W(!1), [h, f] = W("");
  return I(() => {
    const v = s.current;
    if (v) {
      var m;
      f(((m = v.textContent) !== null && m !== void 0 ? m : "").trim());
    }
  }, [
    c.children
  ]), /* @__PURE__ */ g(Xe.ItemSlot, {
    scope: n,
    disabled: o,
    textValue: r ?? h
  }, /* @__PURE__ */ g(us, _({
    asChild: !0
  }, a, {
    focusable: !o
  }), /* @__PURE__ */ g(K.div, _({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0
  }, c, {
    ref: l,
    onPointerMove: R(e.onPointerMove, Ze((v) => {
      o ? i.onItemLeave(v) : (i.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus());
    })),
    onPointerLeave: R(e.onPointerLeave, Ze(
      (v) => i.onItemLeave(v)
    )),
    onFocus: R(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: R(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), Ss = /* @__PURE__ */ P((e, t) => {
  const { checked: n = !1, onCheckedChange: o, ...r } = e;
  return /* @__PURE__ */ g(ur, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ g(wn, _({
    role: "menuitemcheckbox",
    "aria-checked": xt(n) ? "mixed" : n
  }, r, {
    ref: t,
    "data-state": xn(n),
    onSelect: R(
      r.onSelect,
      () => o == null ? void 0 : o(xt(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), Ns = "MenuRadioGroup", [Wd, Ms] = De(Ns, {
  value: void 0,
  onValueChange: () => {
  }
}), Ds = "MenuRadioItem", ks = /* @__PURE__ */ P((e, t) => {
  const { value: n, ...o } = e, r = Ms(Ds, e.__scopeMenu), c = n === r.value;
  return /* @__PURE__ */ g(ur, {
    scope: e.__scopeMenu,
    checked: c
  }, /* @__PURE__ */ g(wn, _({
    role: "menuitemradio",
    "aria-checked": c
  }, o, {
    ref: t,
    "data-state": xn(c),
    onSelect: R(o.onSelect, () => {
      var i;
      return (i = r.onValueChange) === null || i === void 0 ? void 0 : i.call(r, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), dr = "MenuItemIndicator", [ur, Rs] = De(dr, {
  checked: !1
}), As = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenu: n, forceMount: o, ...r } = e, c = Rs(dr, n);
  return /* @__PURE__ */ g(fe, {
    present: o || xt(c.checked) || c.checked === !0
  }, /* @__PURE__ */ g(K.span, _({}, r, {
    ref: t,
    "data-state": xn(c.checked)
  })));
}), Ts = /* @__PURE__ */ P((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return /* @__PURE__ */ g(K.div, _({
    role: "separator",
    "aria-orientation": "horizontal"
  }, o, {
    ref: t
  }));
}), Is = "MenuSub", [zd, fr] = De(Is), dt = "MenuSubTrigger", Fs = /* @__PURE__ */ P((e, t) => {
  const n = ke(dt, e.__scopeMenu), o = et(dt, e.__scopeMenu), r = fr(dt, e.__scopeMenu), c = bn(dt, e.__scopeMenu), i = k(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: s } = c, l = {
    __scopeMenu: e.__scopeMenu
  }, u = j(() => {
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
  ]), /* @__PURE__ */ g(ir, _({
    asChild: !0
  }, l), /* @__PURE__ */ g(lr, _({
    id: r.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": r.contentId,
    "data-state": pr(n.open)
  }, e, {
    ref: yt(t, r.onTriggerChange),
    onClick: (d) => {
      var h;
      (h = e.onClick) === null || h === void 0 || h.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: R(e.onPointerMove, Ze((d) => {
      c.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !i.current && (c.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: R(e.onPointerLeave, Ze((d) => {
      var h;
      u();
      const f = (h = n.content) === null || h === void 0 ? void 0 : h.getBoundingClientRect();
      if (f) {
        var v;
        const m = (v = n.content) === null || v === void 0 ? void 0 : v.dataset.side, b = m === "right", $ = b ? -5 : 5, w = f[b ? "left" : "right"], x = f[b ? "right" : "left"];
        c.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: d.clientX + $,
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
          side: m
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
    onKeyDown: R(e.onKeyDown, (d) => {
      const h = c.searchRef.current !== "";
      if (!(e.disabled || h && d.key === " ") && ms[o.dir].includes(d.key)) {
        var f;
        n.onOpenChange(!0), (f = n.content) === null || f === void 0 || f.focus(), d.preventDefault();
      }
    })
  })));
}), Ls = "MenuSubContent", Bs = /* @__PURE__ */ P((e, t) => {
  const n = sr(ce, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, c = ke(ce, e.__scopeMenu), i = et(ce, e.__scopeMenu), a = fr(Ls, e.__scopeMenu), s = k(null), l = G(t, s);
  return /* @__PURE__ */ g(Xe.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ g(fe, {
    present: o || c.open
  }, /* @__PURE__ */ g(Xe.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ g($n, _({
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
    onFocusOutside: R(e.onFocusOutside, (u) => {
      u.target !== a.trigger && c.onOpenChange(!1);
    }),
    onEscapeKeyDown: R(e.onEscapeKeyDown, (u) => {
      i.onClose(), u.preventDefault();
    }),
    onKeyDown: R(e.onKeyDown, (u) => {
      const d = u.currentTarget.contains(u.target), h = hs[i.dir].includes(u.key);
      if (d && h) {
        var f;
        c.onOpenChange(!1), (f = a.trigger) === null || f === void 0 || f.focus(), u.preventDefault();
      }
    })
  })))));
});
function pr(e) {
  return e ? "open" : "closed";
}
function xt(e) {
  return e === "indeterminate";
}
function xn(e) {
  return xt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Ws(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function zs(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
function Us(e, t, n) {
  const r = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, c = n ? e.indexOf(n) : -1;
  let i = zs(e, Math.max(c, 0));
  r.length === 1 && (i = i.filter(
    (l) => l !== n
  ));
  const s = i.find(
    (l) => l.toLowerCase().startsWith(r.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function js(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let c = 0, i = t.length - 1; c < t.length; i = c++) {
    const a = t[c].x, s = t[c].y, l = t[i].x, u = t[i].y;
    s > o != u > o && n < (l - a) * (o - s) / (u - s) + a && (r = !r);
  }
  return r;
}
function Vs(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return js(n, t);
}
function Ze(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Ks = ws, Hs = ir, Gs = ys, Ys = Es, Xs = Os, Zs = wn, qs = Ss, Qs = ks, Js = As, el = Ts, tl = Fs, nl = Bs, mr = "DropdownMenu", [ol, Ud] = Me(mr, [
  rr
]), oe = rr(), [rl, hr] = ol(mr), cl = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: o, open: r, defaultOpen: c, onOpenChange: i, modal: a = !0 } = e, s = oe(t), l = k(null), [u = !1, d] = Pt({
    prop: r,
    defaultProp: c,
    onChange: i
  });
  return /* @__PURE__ */ g(rl, {
    scope: t,
    triggerId: Se(),
    triggerRef: l,
    contentId: Se(),
    open: u,
    onOpenChange: d,
    onOpenToggle: j(
      () => d(
        (h) => !h
      ),
      [
        d
      ]
    ),
    modal: a
  }, /* @__PURE__ */ g(Ks, _({}, s, {
    open: u,
    onOpenChange: d,
    dir: o,
    modal: a
  }), n));
}, il = "DropdownMenuTrigger", al = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, c = hr(il, n), i = oe(n);
  return /* @__PURE__ */ g(Hs, _({
    asChild: !0
  }, i), /* @__PURE__ */ g(K.button, _({
    type: "button",
    id: c.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": c.open,
    "aria-controls": c.open ? c.contentId : void 0,
    "data-state": c.open ? "open" : "closed",
    "data-disabled": o ? "" : void 0,
    disabled: o
  }, r, {
    ref: yt(t, c.triggerRef),
    onPointerDown: R(e.onPointerDown, (a) => {
      !o && a.button === 0 && a.ctrlKey === !1 && (c.onOpenToggle(), c.open || a.preventDefault());
    }),
    onKeyDown: R(e.onKeyDown, (a) => {
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
}), sl = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = oe(t);
  return /* @__PURE__ */ g(Gs, _({}, o, n));
}, ll = "DropdownMenuContent", dl = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = hr(ll, n), c = oe(n), i = k(!1);
  return /* @__PURE__ */ g(Ys, _({
    id: r.contentId,
    "aria-labelledby": r.triggerId
  }, c, o, {
    ref: t,
    onCloseAutoFocus: R(e.onCloseAutoFocus, (a) => {
      var s;
      i.current || (s = r.triggerRef.current) === null || s === void 0 || s.focus(), i.current = !1, a.preventDefault();
    }),
    onInteractOutside: R(e.onInteractOutside, (a) => {
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
}), ul = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(Xs, _({}, r, o, {
    ref: t
  }));
}), fl = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(Zs, _({}, r, o, {
    ref: t
  }));
}), pl = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(qs, _({}, r, o, {
    ref: t
  }));
}), ml = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(Qs, _({}, r, o, {
    ref: t
  }));
}), hl = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(Js, _({}, r, o, {
    ref: t
  }));
}), vl = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(el, _({}, r, o, {
    ref: t
  }));
}), gl = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(tl, _({}, r, o, {
    ref: t
  }));
}), bl = /* @__PURE__ */ P((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(nl, _({}, r, o, {
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
}), $l = cl, wl = al, xl = sl, vr = dl, gr = ul, br = fl, $r = pl, wr = ml, xr = hl, yr = vl, Cr = gl, Er = bl;
function Nt(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, c;
  for (c = 0; c < o.length; c++)
    r = o[c], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var yl = ["color"], Cl = /* @__PURE__ */ P(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = Nt(e, yl);
  return g("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), g("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), El = ["color"], _l = /* @__PURE__ */ P(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = Nt(e, El);
  return g("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), g("path", {
    d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Pl = ["color"], Ol = /* @__PURE__ */ P(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = Nt(e, Pl);
  return g("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), g("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Sl = ["color"], Nl = /* @__PURE__ */ P(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = Nt(e, Sl);
  return g("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), g("path", {
    d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
    fill: o
  }));
});
const Ml = $l, Dl = wl, kl = C.forwardRef(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ M(
  Cr,
  {
    ref: r,
    className: Y(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ p(_l, { className: "ml-auto h-4 w-4" })
    ]
  }
));
kl.displayName = Cr.displayName;
const Rl = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Er,
  {
    ref: n,
    className: Y(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Rl.displayName = Er.displayName;
const _r = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ p(xl, { children: /* @__PURE__ */ p(
  vr,
  {
    ref: o,
    sideOffset: t,
    className: Y(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
_r.displayName = vr.displayName;
const Mt = C.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ p(
  br,
  {
    ref: o,
    className: Y(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Mt.displayName = br.displayName;
const Al = C.forwardRef(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ M(
  $r,
  {
    ref: r,
    className: Y(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(xr, { children: /* @__PURE__ */ p(Cl, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Al.displayName = $r.displayName;
const Tl = C.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ M(
  wr,
  {
    ref: o,
    className: Y(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(xr, { children: /* @__PURE__ */ p(Nl, { className: "h-4 w-4 fill-current" }) }) }),
      t
    ]
  }
));
Tl.displayName = wr.displayName;
const Pr = C.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ p(
  gr,
  {
    ref: o,
    className: Y(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Pr.displayName = gr.displayName;
const qe = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  yr,
  {
    ref: n,
    className: Y("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
qe.displayName = yr.displayName;
const yn = [
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
            icon: hc,
            text: "Документация",
            link: "https://docs.darkmaterial.space"
          },
          {
            icon: Zr,
            text: "Настройки",
            link: "/settings"
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
          inactive: /* @__PURE__ */ p(ne, { variant: "outline", className: "w-full", children: /* @__PURE__ */ p("a", { href: "/plus", children: "Получить Плюс" }) })
        }
      }
    ]
  }
], Gn = ({ description: e, displayName: t }) => /* @__PURE__ */ M("div", { className: "w-full h-fit pb-4 flex flex-col justify-start", children: [
  /* @__PURE__ */ p("span", { className: "text-lg font-semibold text-accent-foreground", children: t }),
  /* @__PURE__ */ p("span", { className: "text-sm font-normal text-muted-foreground", children: e })
] }), Yn = ({ section: e }) => {
  const t = e.items.length === 0;
  if (!!e.title || !t)
    return /* @__PURE__ */ M(le, { children: [
      /* @__PURE__ */ p("span", { children: e.title }),
      /* @__PURE__ */ p(qe, {}),
      e.items && e.items.map(
        (o) => /* @__PURE__ */ p(Mt, { asChild: !0, children: /* @__PURE__ */ M("a", { href: o.link, className: "flex items-center py-2 justify-start gap-2", children: [
          o.icon && o.icon({}),
          o.text
        ] }) })
      )
    ] });
}, Xn = ({ section: e }) => /* @__PURE__ */ M(le, { children: [
  /* @__PURE__ */ p(qe, {}),
  /* @__PURE__ */ p(Pr, { children: "Проекты" }),
  e.projects && e.projects.map(
    (t) => /* @__PURE__ */ p(Mt, { asChild: !0, children: /* @__PURE__ */ M("a", { href: t.link, className: "flex px-0 items-center justify-between w-full", children: [
      /* @__PURE__ */ p("span", { className: "text-base", children: t.name }),
      /* @__PURE__ */ p(ao, { size: 18, className: "ml-auto" })
    ] }) }, t.key + "-menu")
  )
] }), Zn = ({ section: e }) => typeof e.state[e.activeState] == "string" ? /* @__PURE__ */ M(le, { children: [
  /* @__PURE__ */ p(qe, {}),
  /* @__PURE__ */ p("div", { className: "w-full h-fit pt-5 flex items-center justify-center", children: /* @__PURE__ */ p("span", { className: "text-sm text-muted-foreground", children: e.state[e.activeState] }) })
] }) : /* @__PURE__ */ M(le, { children: [
  /* @__PURE__ */ p(qe, {}),
  e.state[e.activeState]
] }), qn = ({ section: e }) => /* @__PURE__ */ M(Mt, { className: "gap-2 py-2", onClick: e.action && e.action, children: [
  /* @__PURE__ */ p(io, {}),
  "Выйти из профиля"
] }), Il = ({ user: e, size: t = 36, buttonSize: n, loginLink: o = "https://darkmaterial.space", menuMap: r = yn }) => {
  const c = "https://auth.darkmaterial.space/login?continue=";
  return e ? /* @__PURE__ */ M(Ml, { children: [
    /* @__PURE__ */ p(Dl, { asChild: !0, children: e.photoURL ? /* @__PURE__ */ p("div", { style: { width: `${t}px`, height: `${t}px` }, children: /* @__PURE__ */ p("img", { src: e.photoURL, alt: "user-profile-img", className: "w-full h-full rounded-full object-cover" }) }) : /* @__PURE__ */ p(
      "div",
      {
        style: { width: `${t}px`, height: `${t}px` },
        className: "w-9 h-9 rounded-full bg-muted border shrink-0 flex items-center justify-center",
        children: /* @__PURE__ */ p(co, { size: 18 })
      }
    ) }),
    /* @__PURE__ */ p(_r, { className: "p-4 w-60 rounded-xl", children: r && r.map((i, a) => i.type === "user" ? /* @__PURE__ */ p(Gn, { displayName: e.displayName || "Пользователь", description: e.email || "Не указано" }, a + "-item-no-wrapper") : i.type === "links" ? /* @__PURE__ */ p(Yn, { section: i }, a + "-item-no-wrapper") : i.type === "projects" ? /* @__PURE__ */ p(Xn, { section: i }, a + "-item-no-wrapper") : i.type === "membership" ? /* @__PURE__ */ p(Zn, { section: i }, a + "-item-no-wrapper") : i.type === "sign-out" ? /* @__PURE__ */ p(qn, { section: i }, a + "-item-no-wrapper") : i.type === "wrapper" ? /* @__PURE__ */ p("div", { className: i.className || "", children: i.items && i.items.map((s, l) => {
      if (s.type === "user")
        return /* @__PURE__ */ p(Gn, { displayName: e.displayName || "Пользователь", description: e.email || "Не указано" }, a + "-" + l + "item-with-wrapper");
      if (s.type === "links")
        return /* @__PURE__ */ p(Yn, { section: s }, a + "-" + l + "item-with-wrapper");
      if (s.type === "projects")
        return /* @__PURE__ */ p(Xn, { section: s }, a + "-" + l + "item-with-wrapper");
      if (s.type === "membership")
        return /* @__PURE__ */ p(Zn, { section: s }, a + "-" + l + "item-with-wrapper");
      if (s.type === "sign-out")
        return /* @__PURE__ */ p(qn, { section: s }, a + "-" + l + "item-with-wrapper");
    }) }, a + "-item-wrapper") : null) })
  ] }) : /* @__PURE__ */ p(ne, { size: n, variant: "outline", asChild: !0, children: /* @__PURE__ */ p("a", { href: `${c}${o}`, children: "Войти" }) });
}, Or = "Dialog", [Sr, jd] = Me(Or), [Fl, ie] = Sr(Or), Ll = (e) => {
  const { __scopeDialog: t, children: n, open: o, defaultOpen: r, onOpenChange: c, modal: i = !0 } = e, a = k(null), s = k(null), [l = !1, u] = Pt({
    prop: o,
    defaultProp: r,
    onChange: c
  });
  return /* @__PURE__ */ g(Fl, {
    scope: t,
    triggerRef: a,
    contentRef: s,
    contentId: Se(),
    titleId: Se(),
    descriptionId: Se(),
    open: l,
    onOpenChange: u,
    onOpenToggle: j(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: i
  }, n);
}, Bl = "DialogTrigger", Wl = /* @__PURE__ */ P((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ie(Bl, n), c = G(t, r.triggerRef);
  return /* @__PURE__ */ g(K.button, _({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": Cn(r.open)
  }, o, {
    ref: c,
    onClick: R(e.onClick, r.onOpenToggle)
  }));
}), Nr = "DialogPortal", [zl, Mr] = Sr(Nr, {
  forceMount: void 0
}), Ul = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, c = ie(Nr, t);
  return /* @__PURE__ */ g(zl, {
    scope: t,
    forceMount: n
  }, Oe.map(
    o,
    (i) => /* @__PURE__ */ g(fe, {
      present: n || c.open
    }, /* @__PURE__ */ g(un, {
      asChild: !0,
      container: r
    }, i))
  ));
}, Xt = "DialogOverlay", jl = /* @__PURE__ */ P((e, t) => {
  const n = Mr(Xt, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, c = ie(Xt, e.__scopeDialog);
  return c.modal ? /* @__PURE__ */ g(fe, {
    present: o || c.open
  }, /* @__PURE__ */ g(Vl, _({}, r, {
    ref: t
  }))) : null;
}), Vl = /* @__PURE__ */ P((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ie(Xt, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ g(pn, {
      as: xe,
      allowPinchZoom: !0,
      shards: [
        r.contentRef
      ]
    }, /* @__PURE__ */ g(K.div, _({
      "data-state": Cn(r.open)
    }, o, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...o.style
      }
    })))
  );
}), Qe = "DialogContent", Kl = /* @__PURE__ */ P((e, t) => {
  const n = Mr(Qe, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, c = ie(Qe, e.__scopeDialog);
  return /* @__PURE__ */ g(fe, {
    present: o || c.open
  }, c.modal ? /* @__PURE__ */ g(Hl, _({}, r, {
    ref: t
  })) : /* @__PURE__ */ g(Gl, _({}, r, {
    ref: t
  })));
}), Hl = /* @__PURE__ */ P((e, t) => {
  const n = ie(Qe, e.__scopeDialog), o = k(null), r = G(t, n.contentRef, o);
  return I(() => {
    const c = o.current;
    if (c)
      return fn(c);
  }, []), /* @__PURE__ */ g(Dr, _({}, e, {
    ref: r,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: R(e.onCloseAutoFocus, (c) => {
      var i;
      c.preventDefault(), (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: R(e.onPointerDownOutside, (c) => {
      const i = c.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
      (i.button === 2 || a) && c.preventDefault();
    }),
    onFocusOutside: R(
      e.onFocusOutside,
      (c) => c.preventDefault()
    )
  }));
}), Gl = /* @__PURE__ */ P((e, t) => {
  const n = ie(Qe, e.__scopeDialog), o = k(!1), r = k(!1);
  return /* @__PURE__ */ g(Dr, _({}, e, {
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
}), Dr = /* @__PURE__ */ P((e, t) => {
  const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: c, ...i } = e, a = ie(Qe, n), s = k(null), l = G(t, s);
  return nn(), /* @__PURE__ */ g(Jt, null, /* @__PURE__ */ g(on, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: c
  }, /* @__PURE__ */ g(tn, _({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": Cn(a.open)
  }, i, {
    ref: l,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
}), Yl = "DialogTitle", Xl = /* @__PURE__ */ P((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ie(Yl, n);
  return /* @__PURE__ */ g(K.h2, _({
    id: r.titleId
  }, o, {
    ref: t
  }));
}), Zl = "DialogDescription", ql = /* @__PURE__ */ P((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ie(Zl, n);
  return /* @__PURE__ */ g(K.p, _({
    id: r.descriptionId
  }, o, {
    ref: t
  }));
}), Ql = "DialogClose", Jl = /* @__PURE__ */ P((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ie(Ql, n);
  return /* @__PURE__ */ g(K.button, _({
    type: "button"
  }, o, {
    ref: t,
    onClick: R(
      e.onClick,
      () => r.onOpenChange(!1)
    )
  }));
});
function Cn(e) {
  return e ? "open" : "closed";
}
const ed = Ll, td = Wl, nd = Ul, kr = jl, Rr = Kl, Ar = Xl, Tr = ql, od = Jl, rd = ed, cd = td, id = nd, Ir = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  kr,
  {
    ref: n,
    className: Y(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Ir.displayName = kr.displayName;
const Fr = C.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ M(id, { children: [
  /* @__PURE__ */ p(Ir, {}),
  /* @__PURE__ */ M(
    Rr,
    {
      ref: o,
      className: Y(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ M(od, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ p(Ol, { className: "h-4 w-4" }),
          /* @__PURE__ */ p("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Fr.displayName = Rr.displayName;
const ad = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Ar,
  {
    ref: n,
    className: Y(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
ad.displayName = Ar.displayName;
const sd = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Tr,
  {
    ref: n,
    className: Y("text-sm text-muted-foreground", e),
    ...t
  }
));
sd.displayName = Tr.displayName;
const Qn = ({ section: e }) => {
  const t = e.items.length === 0;
  if (!!e.title || !t)
    return /* @__PURE__ */ M(le, { children: [
      /* @__PURE__ */ p("span", { children: e.title }),
      /* @__PURE__ */ p(Be, { className: "my-2" }),
      e.items && e.items.map(
        (o) => /* @__PURE__ */ M("a", { href: o.link, className: "flex items-center py-2 justify-start gap-2", children: [
          o.icon && o.icon({}),
          o.text
        ] })
      )
    ] });
}, Jn = ({ section: e }) => typeof e.state[e.activeState] == "string" ? /* @__PURE__ */ M(le, { children: [
  /* @__PURE__ */ p(Be, {}),
  /* @__PURE__ */ p("div", { className: "w-full h-fit pt-5 flex items-center justify-center", children: /* @__PURE__ */ p("span", { className: "text-sm text-muted-foreground", children: e.state[e.activeState] }) })
] }) : /* @__PURE__ */ M(le, { children: [
  /* @__PURE__ */ p(Be, { className: "my-2" }),
  e.state[e.activeState]
] }), eo = ({ section: e }) => /* @__PURE__ */ M(le, { children: [
  /* @__PURE__ */ p(Be, {}),
  /* @__PURE__ */ M("div", { className: "w-full h-fit flex flex-col my-4", children: [
    /* @__PURE__ */ p("span", { className: "text-base font-medium mb-2", children: "Проекты" }),
    e.projects && e.projects.map(
      (t) => /* @__PURE__ */ p(ne, { asChild: !0, variant: "ghost", children: /* @__PURE__ */ M("a", { href: t.link, className: "flex px-0 items-center justify-between w-full", children: [
        /* @__PURE__ */ p("span", { className: "text-base", children: t.name }),
        /* @__PURE__ */ p(ao, { size: 18, className: "ml-auto" })
      ] }) }, t.key + "-menu")
    )
  ] })
] }), to = ({ section: e }) => /* @__PURE__ */ M(ne, { className: "gap-2 py-2", variant: "ghost", onClick: e.action && e.action, children: [
  /* @__PURE__ */ p(io, {}),
  "Выйти из профиля"
] }), no = ({ description: e, displayName: t }) => /* @__PURE__ */ M("div", { className: "w-full h-fit pb-4 flex flex-col justify-start", children: [
  /* @__PURE__ */ p("span", { className: "text-lg font-semibold text-accent-foreground", children: t }),
  /* @__PURE__ */ p("span", { className: "text-sm font-normal text-muted-foreground", children: e })
] }), oo = ({ loginLink: e = "https://darkmaterial.space" }) => {
  const t = "https://auth.darkmaterial.space/login?continue=", n = "https://auth.darkmaterial.space/signup?continue=", o = `${t}${e}`, r = `${n}${e}`;
  return /* @__PURE__ */ M("div", { className: "w-full h-fit flex flex-col gap-2 mb-4", children: [
    /* @__PURE__ */ p(ne, { asChild: !0, variant: "outline", children: /* @__PURE__ */ p("a", { href: o, children: "Войти" }) }),
    /* @__PURE__ */ p(ne, { asChild: !0, variant: "default", children: /* @__PURE__ */ p("a", { href: r, children: "Зарегистрироваться" }) })
  ] });
}, ld = ({ user: e, loginLink: t = "https://darkmaterial.space", menuMap: n = yn }) => /* @__PURE__ */ M(rd, { children: [
  /* @__PURE__ */ p(cd, { asChild: !0, children: /* @__PURE__ */ p("div", { className: "w-9 h-9 rounded-full border shrink-0 bg-background flex items-center justify-center", children: /* @__PURE__ */ p(qr, { size: 20 }) }) }),
  /* @__PURE__ */ p(Fr, { className: "rounded-none w-full h-full", children: n && n.map((o, r) => o.type === "user" ? e ? /* @__PURE__ */ p(
    no,
    {
      displayName: e.displayName || "Пользователь",
      description: e.email || "Не указано"
    },
    r + "mobile-item-no-wrapper"
  ) : /* @__PURE__ */ p(oo, { loginLink: t }, r + "mobile-item-no-wrapper") : o.type === "links" ? /* @__PURE__ */ p(Qn, { section: o }, r + "mobile-item-no-wrapper") : o.type === "projects" ? /* @__PURE__ */ p(eo, { section: o }, r + "mobile-item-no-wrapper") : o.type === "membership" ? /* @__PURE__ */ p(Jn, { section: o }, r + "mobile-item-no-wrapper") : o.type === "sign-out" && e ? /* @__PURE__ */ p(to, { section: o }, r + "mobile-item-no-wrapper") : o.type === "wrapper" ? /* @__PURE__ */ p("div", { className: o.className || "", children: o.items && o.items.map((c, i) => {
    if (c.type === "user")
      return e ? /* @__PURE__ */ p(
        no,
        {
          displayName: e.displayName || "Пользователь",
          description: e.email || "Не указано"
        },
        r + "-" + i + "mobile-item-with-wrapper"
      ) : /* @__PURE__ */ p(oo, { loginLink: t }, r + "mobile-item-no-wrapper");
    if (c.type === "links")
      return /* @__PURE__ */ p(Qn, { section: c }, r + "-" + i + "mobile-item-with-wrapper");
    if (c.type === "projects")
      return /* @__PURE__ */ p(eo, { section: c }, r + "-" + i + "mobile-item-with-wrapper");
    if (c.type === "membership")
      return /* @__PURE__ */ p(Jn, { section: c }, r + "-" + i + "mobile-item-with-wrapper");
    if (c.type === "sign-out" && e)
      return /* @__PURE__ */ p(to, { section: c }, r + "-" + i + "mobile-item-with-wrapper");
  }) }, r + "-mobile-item-wrapper") : null) })
] }), Vd = ({
  user: e,
  size: t = 36,
  loginLink: n = "https://darkmaterial.space",
  activeMenu: o = "desktop",
  buttonSize: r = "default",
  map: c = yn
}) => o === "desktop" ? /* @__PURE__ */ p(
  Il,
  {
    buttonSize: r,
    user: e,
    size: t,
    menuMap: c,
    loginLink: n
  }
) : /* @__PURE__ */ p(
  ld,
  {
    user: e,
    menuMap: c,
    loginLink: n
  }
);
function Kd({ appId: e }) {
  const t = vc(), n = bc({ query: "(max-width: 786px)" });
  return gc((o) => {
    if (e) {
      const r = {
        path: t,
        createdAt: lo.now().toSeconds(),
        metric: o,
        type: n ? "mobile" : "desktop"
      };
      process.env.NODE_ENV === "production" && lc.upload(e, r);
    }
  }), /* @__PURE__ */ p(le, {});
}
export {
  kd as Avatar,
  Ua as ForwardRefEditor,
  Fd as Notifications,
  Ld as OneClickAuth,
  Td as ProjectsGrid,
  Bd as StarField,
  Id as Textarea,
  Vd as UserCircle,
  Kd as WebVitals,
  Fa as projects
};
