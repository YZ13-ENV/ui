"use client";
import { jsxs as N, jsx as p, Fragment as pe } from "react/jsx-runtime";
import Xt from "next/image.js";
import * as C from "react";
import ae, { memo as oo, useCallback as K, createContext as mt, useMemo as Ve, createElement as g, useContext as Zt, forwardRef as _, Children as Oe, isValidElement as ht, cloneElement as qt, Fragment as Qt, useEffect as F, useRef as k, useState as L, useLayoutEffect as Jt, useReducer as jr } from "react";
import { BiUser as ro, BiCog as Kr, BiLogOut as co, BiMenu as Vr, BiTrashAlt as Hr, BiCheck as Gr, BiX as Yr } from "react-icons/bi/index.esm.js";
import { PiCrownSimpleBold as Xr, PiBellBold as Zr } from "react-icons/pi/index.esm.js";
import { MdGridView as qr, MdOpenInNew as io } from "react-icons/md/index.esm.js";
import * as Qr from "react-dom";
import Jr, { flushSync as ao } from "react-dom";
import { clsx as ec } from "clsx";
import { twMerge as tc } from "tailwind-merge";
import { cva as nc } from "class-variance-authority";
import oc from "next/dynamic.js";
import { TiDocumentText as rc } from "react-icons/ti/index.esm.js";
import { notifications as Lt, user as cc, cdn as ic } from "api";
import { useAuthState as ac } from "react-firebase-hooks/auth/dist/index.esm.js";
import { DateTime as sc } from "luxon";
import { useInViewport as lc } from "ahooks";
import dc from "next/link.js";
import { io as uc } from "socket.io-client";
import { motion as fc } from "framer-motion";
const pc = [
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
], mc = ({ size: e = 24, isSubscriber: t = !1, src: n, className: o = "" }) => {
  const r = e * 0.5, c = r * 0.5;
  return /* @__PURE__ */ N(
    "div",
    {
      style: { width: `${e}px`, height: `${e}px` },
      className: `relative flex items-center justify-center overflow-visible border rounded-full shrink-0 bg-background border-inherit ${o}`,
      children: [
        n ? /* @__PURE__ */ p(Xt, { src: n, className: "rounded-full !relative", fill: !0, alt: "@avatar" }) : /* @__PURE__ */ p(ro, { size: e / 2 }),
        t && /* @__PURE__ */ p("div", { style: {
          // maxWidth: '64px',
          // maxHeight: '64px',
          top: `-${r * 0.25}px`,
          left: `-${r * 0.25}px`,
          width: `${r}px`,
          height: `${r}px`
        }, className: "absolute flex items-center justify-center border-2 rounded-full text-muted-foreground border-background bg-muted", children: /* @__PURE__ */ p(Xr, { size: c }) })
      ]
    }
  );
}, yd = oo(mc);
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
function R(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function hc(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function xt(...e) {
  return (t) => e.forEach(
    (n) => hc(n, t)
  );
}
function G(...e) {
  return K(xt(...e), e);
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
      const { scope: h, children: f, ...v } = d, m = (h == null ? void 0 : h[e][s]) || a, b = Ve(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ g(m.Provider, {
        value: b
      }, f);
    }
    function u(d, h) {
      const f = (h == null ? void 0 : h[e][s]) || a, v = Zt(f);
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
    vc(r, ...t)
  ];
}
function vc(...e) {
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
const xe = /* @__PURE__ */ _((e, t) => {
  const { children: n, ...o } = e, r = Oe.toArray(n), c = r.find(bc);
  if (c) {
    const i = c.props.children, a = r.map((s) => s === c ? Oe.count(i) > 1 ? Oe.only(null) : /* @__PURE__ */ ht(i) ? i.props.children : null : s);
    return /* @__PURE__ */ g(Bt, P({}, o, {
      ref: t
    }), /* @__PURE__ */ ht(i) ? /* @__PURE__ */ qt(i, void 0, a) : null);
  }
  return /* @__PURE__ */ g(Bt, P({}, o, {
    ref: t
  }), n);
});
xe.displayName = "Slot";
const Bt = /* @__PURE__ */ _((e, t) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ ht(n) ? /* @__PURE__ */ qt(n, {
    ...$c(o, n.props),
    ref: t ? xt(t, n.ref) : n.ref
  }) : Oe.count(n) > 1 ? Oe.only(null) : null;
});
Bt.displayName = "SlotClone";
const gc = ({ children: e }) => /* @__PURE__ */ g(Qt, null, e);
function bc(e) {
  return /* @__PURE__ */ ht(e) && e.type === gc;
}
function $c(e, t) {
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
const wc = [
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
], V = wc.reduce((e, t) => {
  const n = /* @__PURE__ */ _((o, r) => {
    const { asChild: c, ...i } = o, a = c ? xe : t;
    return F(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ g(a, P({}, i, {
      ref: r
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function so(e, t) {
  e && ao(
    () => e.dispatchEvent(t)
  );
}
function le(e) {
  const t = k(e);
  return F(() => {
    t.current = e;
  }), Ve(
    () => (...n) => {
      var o;
      return (o = t.current) === null || o === void 0 ? void 0 : o.call(t, ...n);
    },
    []
  );
}
function xc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = le(e);
  F(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o), () => t.removeEventListener("keydown", o);
  }, [
    n,
    t
  ]);
}
const Ut = "dismissableLayer.update", yc = "dismissableLayer.pointerDownOutside", Cc = "dismissableLayer.focusOutside";
let En;
const Ec = /* @__PURE__ */ mt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), en = /* @__PURE__ */ _((e, t) => {
  var n;
  const { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: r, onPointerDownOutside: c, onFocusOutside: i, onInteractOutside: a, onDismiss: s, ...l } = e, u = Zt(Ec), [d, h] = L(null), f = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, v] = L({}), m = G(
    t,
    (S) => h(S)
  ), b = Array.from(u.layers), [$] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = b.indexOf($), y = d ? b.indexOf(d) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, E = y >= w, M = Pc((S) => {
    const T = S.target, W = [
      ...u.branches
    ].some(
      (z) => z.contains(T)
    );
    !E || W || (c == null || c(S), a == null || a(S), S.defaultPrevented || s == null || s());
  }, f), O = _c((S) => {
    const T = S.target;
    [
      ...u.branches
    ].some(
      (z) => z.contains(T)
    ) || (i == null || i(S), a == null || a(S), S.defaultPrevented || s == null || s());
  }, f);
  return xc((S) => {
    y === u.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && s && (S.preventDefault(), s()));
  }, f), F(() => {
    if (d)
      return o && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (En = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Pn(), () => {
        o && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = En);
      };
  }, [
    d,
    f,
    o,
    u
  ]), F(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Pn());
  }, [
    d,
    u
  ]), F(() => {
    const S = () => v({});
    return document.addEventListener(Ut, S), () => document.removeEventListener(Ut, S);
  }, []), /* @__PURE__ */ g(V.div, P({}, l, {
    ref: m,
    style: {
      pointerEvents: x ? E ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: R(e.onFocusCapture, O.onFocusCapture),
    onBlurCapture: R(e.onBlurCapture, O.onBlurCapture),
    onPointerDownCapture: R(e.onPointerDownCapture, M.onPointerDownCapture)
  }));
});
function Pc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = le(e), o = k(!1), r = k(() => {
  });
  return F(() => {
    const c = (a) => {
      if (a.target && !o.current) {
        let l = function() {
          lo(yc, n, s, {
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
function _c(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = le(e), o = k(!1);
  return F(() => {
    const r = (c) => {
      c.target && !o.current && lo(Cc, n, {
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
  const e = new CustomEvent(Ut);
  document.dispatchEvent(e);
}
function lo(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, c = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, {
    once: !0
  }), o ? so(r, c) : r.dispatchEvent(c);
}
let Mt = 0;
function tn() {
  F(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : _n()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : _n()), Mt++, () => {
      Mt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (o) => o.remove()
      ), Mt--;
    };
  }, []);
}
function _n() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Dt = "focusScope.autoFocusOnMount", kt = "focusScope.autoFocusOnUnmount", On = {
  bubbles: !1,
  cancelable: !0
}, nn = /* @__PURE__ */ _((e, t) => {
  const { loop: n = !1, trapped: o = !1, onMountAutoFocus: r, onUnmountAutoFocus: c, ...i } = e, [a, s] = L(null), l = le(r), u = le(c), d = k(null), h = G(
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
  F(() => {
    if (o) {
      let m = function(y) {
        if (f.paused || !a)
          return;
        const x = y.target;
        a.contains(x) ? d.current = x : we(d.current, {
          select: !0
        });
      }, b = function(y) {
        if (f.paused || !a)
          return;
        const x = y.relatedTarget;
        x !== null && (a.contains(x) || we(d.current, {
          select: !0
        }));
      }, $ = function(y) {
        if (document.activeElement === document.body)
          for (const E of y)
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
  ]), F(() => {
    if (a) {
      Nn.add(f);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const $ = new CustomEvent(Dt, On);
        a.addEventListener(Dt, l), a.dispatchEvent($), $.defaultPrevented || (Oc(kc(uo(a)), {
          select: !0
        }), document.activeElement === m && we(a));
      }
      return () => {
        a.removeEventListener(Dt, l), setTimeout(() => {
          const $ = new CustomEvent(kt, On);
          a.addEventListener(kt, u), a.dispatchEvent($), $.defaultPrevented || we(m ?? document.body, {
            select: !0
          }), a.removeEventListener(kt, u), Nn.remove(f);
        }, 0);
      };
    }
  }, [
    a,
    l,
    u,
    f
  ]);
  const v = K((m) => {
    if (!n && !o || f.paused)
      return;
    const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, $ = document.activeElement;
    if (b && $) {
      const w = m.currentTarget, [y, x] = Sc(w);
      y && x ? !m.shiftKey && $ === x ? (m.preventDefault(), n && we(y, {
        select: !0
      })) : m.shiftKey && $ === y && (m.preventDefault(), n && we(x, {
        select: !0
      })) : $ === w && m.preventDefault();
    }
  }, [
    n,
    o,
    f.paused
  ]);
  return /* @__PURE__ */ g(V.div, P({
    tabIndex: -1
  }, i, {
    ref: h,
    onKeyDown: v
  }));
});
function Oc(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (we(o, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Sc(e) {
  const t = uo(e), n = Sn(t, e), o = Sn(t.reverse(), e);
  return [
    n,
    o
  ];
}
function uo(e) {
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
function Sn(e, t) {
  for (const n of e)
    if (!Nc(n, {
      upTo: t
    }))
      return n;
}
function Nc(e, { upTo: t }) {
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
function Mc(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function we(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Mc(e) && t && e.select();
  }
}
const Nn = Dc();
function Dc() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Mn(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Mn(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Mn(e, t) {
  const n = [
    ...e
  ], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function kc(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Fe = globalThis != null && globalThis.document ? Jt : () => {
}, Rc = C["useId".toString()] || (() => {
});
let Ac = 0;
function Se(e) {
  const [t, n] = C.useState(Rc());
  return Fe(() => {
    e || n(
      (o) => o ?? String(Ac++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Tc = ["top", "right", "bottom", "left"], ye = Math.min, J = Math.max, vt = Math.round, rt = Math.floor, Ce = (e) => ({
  x: e,
  y: e
}), Ic = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Fc = {
  start: "end",
  end: "start"
};
function Wt(e, t, n) {
  return J(e, ye(t, n));
}
function me(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function he(e) {
  return e.split("-")[0];
}
function Ue(e) {
  return e.split("-")[1];
}
function on(e) {
  return e === "x" ? "y" : "x";
}
function rn(e) {
  return e === "y" ? "height" : "width";
}
function We(e) {
  return ["top", "bottom"].includes(he(e)) ? "y" : "x";
}
function cn(e) {
  return on(We(e));
}
function Lc(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ue(e), r = cn(e), c = rn(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (i = gt(i)), [i, gt(i)];
}
function Bc(e) {
  const t = gt(e);
  return [zt(e), t, zt(t)];
}
function zt(e) {
  return e.replace(/start|end/g, (t) => Fc[t]);
}
function Uc(e, t, n) {
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
function Wc(e, t, n, o) {
  const r = Ue(e);
  let c = Uc(he(e), n === "start", o);
  return r && (c = c.map((i) => i + "-" + r), t && (c = c.concat(c.map(zt)))), c;
}
function gt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ic[t]);
}
function zc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function fo(e) {
  return typeof e != "number" ? zc(e) : {
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
function Dn(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const c = We(t), i = cn(t), a = rn(i), s = he(t), l = c === "y", u = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, h = o[a] / 2 - r[a] / 2;
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
  switch (Ue(t)) {
    case "start":
      f[i] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      f[i] += h * (n && l ? -1 : 1);
      break;
  }
  return f;
}
const jc = async (e, t, n) => {
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
  } = Dn(l, o, s), h = o, f = {}, v = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: b,
      fn: $
    } = a[m], {
      x: w,
      y,
      data: x,
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
    if (u = w ?? u, d = y ?? d, f = {
      ...f,
      [b]: {
        ...f[b],
        ...x
      }
    }, E && v <= 50) {
      v++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (l = E.rects === !0 ? await i.getElementRects({
        reference: e,
        floating: t,
        strategy: r
      }) : E.rects), {
        x: u,
        y: d
      } = Dn(l, h, s)), m = -1;
      continue;
    }
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
  } = me(t, e), v = fo(f), b = a[h ? d === "floating" ? "reference" : "floating" : d], $ = bt(await c.getClippingRect({
    element: (n = await (c.isElement == null ? void 0 : c.isElement(b))) == null || n ? b : b.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: s
  })), w = d === "floating" ? {
    ...i.floating,
    x: o,
    y: r
  } : i.reference, y = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(a.floating)), x = await (c.isElement == null ? void 0 : c.isElement(y)) ? await (c.getScale == null ? void 0 : c.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = bt(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: y,
    strategy: s
  }) : w);
  return {
    top: ($.top - E.top + v.top) / x.y,
    bottom: (E.bottom - $.bottom + v.bottom) / x.y,
    left: ($.left - E.left + v.left) / x.x,
    right: (E.right - $.right + v.right) / x.x
  };
}
const Kc = (e) => ({
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
    const d = fo(u), h = {
      x: n,
      y: o
    }, f = cn(r), v = rn(f), m = await i.getDimensions(l), b = f === "y", $ = b ? "top" : "left", w = b ? "bottom" : "right", y = b ? "clientHeight" : "clientWidth", x = c.reference[v] + c.reference[f] - h[f] - c.floating[v], E = h[f] - c.reference[f], M = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let O = M ? M[y] : 0;
    (!O || !await (i.isElement == null ? void 0 : i.isElement(M))) && (O = a.floating[y] || c.floating[v]);
    const S = x / 2 - E / 2, T = O / 2 - m[v] / 2 - 1, W = ye(d[$], T), z = ye(d[w], T), B = W, q = O - m[v] - z, A = O / 2 - m[v] / 2 + S, U = Wt(B, A, q), I = !s.arrow && Ue(r) != null && A != U && c.reference[v] / 2 - (A < B ? W : z) - m[v] / 2 < 0, H = I ? A < B ? A - B : A - q : 0;
    return {
      [f]: h[f] + H,
      data: {
        [f]: U,
        centerOffset: A - U - H,
        ...I && {
          alignmentOffset: H
        }
      },
      reset: I
    };
  }
}), Vc = function(e) {
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
      const $ = he(r), w = he(a) === a, y = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), x = h || (w || !m ? [gt(a)] : Bc(a));
      !h && v !== "none" && x.push(...Wc(a, m, v, y));
      const E = [a, ...x], M = await He(t, b), O = [];
      let S = ((o = c.flip) == null ? void 0 : o.overflows) || [];
      if (u && O.push(M[$]), d) {
        const B = Lc(r, i, y);
        O.push(M[B[0]], M[B[1]]);
      }
      if (S = [...S, {
        placement: r,
        overflows: O
      }], !O.every((B) => B <= 0)) {
        var T, W;
        const B = (((T = c.flip) == null ? void 0 : T.index) || 0) + 1, q = E[B];
        if (q)
          return {
            data: {
              index: B,
              overflows: S
            },
            reset: {
              placement: q
            }
          };
        let A = (W = S.filter((U) => U.overflows[0] <= 0).sort((U, I) => U.overflows[1] - I.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!A)
          switch (f) {
            case "bestFit": {
              var z;
              const U = (z = S.map((I) => [I.placement, I.overflows.filter((H) => H > 0).reduce((H, Y) => H + Y, 0)]).sort((I, H) => I[1] - H[1])[0]) == null ? void 0 : z[0];
              U && (A = U);
              break;
            }
            case "initialPlacement":
              A = a;
              break;
          }
        if (r !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
function kn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Rn(e) {
  return Tc.some((t) => e[t] >= 0);
}
const Hc = function(e) {
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
          }), i = kn(c, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Rn(i)
            }
          };
        }
        case "escaped": {
          const c = await He(t, {
            ...r,
            altBoundary: !0
          }), i = kn(c, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Rn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Gc(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, c = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = he(n), a = Ue(n), s = We(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = c && s ? -1 : 1, d = me(t, e);
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
const Yc = function(e) {
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
      } = t, s = await Gc(t, e);
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
}, Xc = function(e) {
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
      }, u = await He(t, s), d = We(he(r)), h = on(d);
      let f = l[h], v = l[d];
      if (c) {
        const b = h === "y" ? "top" : "left", $ = h === "y" ? "bottom" : "right", w = f + u[b], y = f - u[$];
        f = Wt(w, f, y);
      }
      if (i) {
        const b = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", w = v + u[b], y = v - u[$];
        v = Wt(w, v, y);
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
}, Zc = function(e) {
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
      }, d = We(r), h = on(d);
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
        const y = h === "y" ? "height" : "width", x = c.reference[h] - c.floating[y] + b.mainAxis, E = c.reference[h] + c.reference[y] - b.mainAxis;
        f < x ? f = x : f > E && (f = E);
      }
      if (l) {
        var $, w;
        const y = h === "y" ? "width" : "height", x = ["top", "left"].includes(he(r)), E = c.reference[d] - c.floating[y] + (x && (($ = i.offset) == null ? void 0 : $[d]) || 0) + (x ? 0 : b.crossAxis), M = c.reference[d] + c.reference[y] + (x ? 0 : ((w = i.offset) == null ? void 0 : w[d]) || 0) - (x ? b.crossAxis : 0);
        v < E ? v = E : v > M && (v = M);
      }
      return {
        [h]: f,
        [d]: v
      };
    }
  };
}, qc = function(e) {
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
      } = me(e, t), s = await He(t, a), l = he(n), u = Ue(n), d = We(n) === "y", {
        width: h,
        height: f
      } = o.floating;
      let v, m;
      l === "top" || l === "bottom" ? (v = l, m = u === (await (r.isRTL == null ? void 0 : r.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (m = l, v = u === "end" ? "top" : "bottom");
      const b = f - s[v], $ = h - s[m], w = !t.middlewareData.shift;
      let y = b, x = $;
      if (d) {
        const M = h - s.left - s.right;
        x = u || w ? ye($, M) : M;
      } else {
        const M = f - s.top - s.bottom;
        y = u || w ? ye(b, M) : M;
      }
      if (w && !u) {
        const M = J(s.left, 0), O = J(s.right, 0), S = J(s.top, 0), T = J(s.bottom, 0);
        d ? x = h - 2 * (M !== 0 || O !== 0 ? M + O : J(s.left, s.right)) : y = f - 2 * (S !== 0 || T !== 0 ? S + T : J(s.top, s.bottom));
      }
      await i({
        ...t,
        availableWidth: x,
        availableHeight: y
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
  return po(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ee(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ge(e) {
  var t;
  return (t = (po(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function po(e) {
  return e instanceof Node || e instanceof ee(e).Node;
}
function ve(e) {
  return e instanceof Element || e instanceof ee(e).Element;
}
function de(e) {
  return e instanceof HTMLElement || e instanceof ee(e).HTMLElement;
}
function An(e) {
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
function Qc(e) {
  return ["table", "td", "th"].includes(Ee(e));
}
function an(e) {
  const t = sn(), n = te(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Jc(e) {
  let t = Le(e);
  for (; de(t) && !yt(t); ) {
    if (an(t))
      return t;
    t = Le(t);
  }
  return null;
}
function sn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function yt(e) {
  return ["html", "body", "#document"].includes(Ee(e));
}
function te(e) {
  return ee(e).getComputedStyle(e);
}
function Ct(e) {
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
    An(e) && e.host || // Fallback.
    ge(e)
  );
  return An(t) ? t.host : t;
}
function mo(e) {
  const t = Le(e);
  return yt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : de(t) && Je(t) ? t : mo(t);
}
function Ge(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = mo(e), c = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = ee(r);
  return c ? t.concat(i, i.visualViewport || [], Je(r) ? r : [], i.frameElement && n ? Ge(i.frameElement) : []) : t.concat(r, Ge(r, [], n));
}
function ho(e) {
  const t = te(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = de(e), c = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, a = vt(n) !== c || vt(o) !== i;
  return a && (n = c, o = i), {
    width: n,
    height: o,
    $: a
  };
}
function ln(e) {
  return ve(e) ? e : e.contextElement;
}
function Ie(e) {
  const t = ln(e);
  if (!de(t))
    return Ce(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: c
  } = ho(t);
  let i = (c ? vt(n.width) : n.width) / o, a = (c ? vt(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const ei = /* @__PURE__ */ Ce(0);
function vo(e) {
  const t = ee(e);
  return !sn() || !t.visualViewport ? ei : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ti(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ee(e) ? !1 : t;
}
function Ne(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), c = ln(e);
  let i = Ce(1);
  t && (o ? ve(o) && (i = Ie(o)) : i = Ie(e));
  const a = ti(c, n, o) ? vo(c) : Ce(0);
  let s = (r.left + a.x) / i.x, l = (r.top + a.y) / i.y, u = r.width / i.x, d = r.height / i.y;
  if (c) {
    const h = ee(c), f = o && ve(o) ? ee(o) : o;
    let v = h.frameElement;
    for (; v && o && f !== h; ) {
      const m = Ie(v), b = v.getBoundingClientRect(), $ = te(v), w = b.left + (v.clientLeft + parseFloat($.paddingLeft)) * m.x, y = b.top + (v.clientTop + parseFloat($.paddingTop)) * m.y;
      s *= m.x, l *= m.y, u *= m.x, d *= m.y, s += w, l += y, v = ee(v).frameElement;
    }
  }
  return bt({
    width: u,
    height: d,
    x: s,
    y: l
  });
}
function ni(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const r = de(n), c = ge(n);
  if (n === c)
    return t;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Ce(1);
  const s = Ce(0);
  if ((r || !r && o !== "fixed") && ((Ee(n) !== "body" || Je(c)) && (i = Ct(n)), de(n))) {
    const l = Ne(n);
    a = Ie(n), s.x = l.x + n.clientLeft, s.y = l.y + n.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - i.scrollLeft * a.x + s.x,
    y: t.y * a.y - i.scrollTop * a.y + s.y
  };
}
function oi(e) {
  return Array.from(e.getClientRects());
}
function go(e) {
  return Ne(ge(e)).left + Ct(e).scrollLeft;
}
function ri(e) {
  const t = ge(e), n = Ct(e), o = e.ownerDocument.body, r = J(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), c = J(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + go(e);
  const a = -n.scrollTop;
  return te(o).direction === "rtl" && (i += J(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: c,
    x: i,
    y: a
  };
}
function ci(e, t) {
  const n = ee(e), o = ge(e), r = n.visualViewport;
  let c = o.clientWidth, i = o.clientHeight, a = 0, s = 0;
  if (r) {
    c = r.width, i = r.height;
    const l = sn();
    (!l || l && t === "fixed") && (a = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: c,
    height: i,
    x: a,
    y: s
  };
}
function ii(e, t) {
  const n = Ne(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, c = de(e) ? Ie(e) : Ce(1), i = e.clientWidth * c.x, a = e.clientHeight * c.y, s = r * c.x, l = o * c.y;
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Tn(e, t, n) {
  let o;
  if (t === "viewport")
    o = ci(e, n);
  else if (t === "document")
    o = ri(ge(e));
  else if (ve(t))
    o = ii(t, n);
  else {
    const r = vo(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return bt(o);
}
function bo(e, t) {
  const n = Le(e);
  return n === t || !ve(n) || yt(n) ? !1 : te(n).position === "fixed" || bo(n, t);
}
function ai(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Ge(e, [], !1).filter((a) => ve(a) && Ee(a) !== "body"), r = null;
  const c = te(e).position === "fixed";
  let i = c ? Le(e) : e;
  for (; ve(i) && !yt(i); ) {
    const a = te(i), s = an(i);
    !s && a.position === "fixed" && (r = null), (c ? !s && !r : !s && a.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Je(i) && !s && bo(e, i)) ? o = o.filter((u) => u !== i) : r = a, i = Le(i);
  }
  return t.set(e, o), o;
}
function si(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? ai(t, this._c) : [].concat(n), o], a = i[0], s = i.reduce((l, u) => {
    const d = Tn(t, u, r);
    return l.top = J(d.top, l.top), l.right = ye(d.right, l.right), l.bottom = ye(d.bottom, l.bottom), l.left = J(d.left, l.left), l;
  }, Tn(t, a, r));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function li(e) {
  const {
    width: t,
    height: n
  } = ho(e);
  return {
    width: t,
    height: n
  };
}
function di(e, t, n) {
  const o = de(t), r = ge(t), c = n === "fixed", i = Ne(e, !0, c, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = Ce(0);
  if (o || !o && !c)
    if ((Ee(t) !== "body" || Je(r)) && (a = Ct(t)), o) {
      const l = Ne(t, !0, c, t);
      s.x = l.x + t.clientLeft, s.y = l.y + t.clientTop;
    } else
      r && (s.x = go(r));
  return {
    x: i.left + a.scrollLeft - s.x,
    y: i.top + a.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function In(e, t) {
  return !de(e) || te(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function $o(e, t) {
  const n = ee(e);
  if (!de(e))
    return n;
  let o = In(e, t);
  for (; o && Qc(o) && te(o).position === "static"; )
    o = In(o, t);
  return o && (Ee(o) === "html" || Ee(o) === "body" && te(o).position === "static" && !an(o)) ? n : o || Jc(e) || n;
}
const ui = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: o
  } = e;
  const r = this.getOffsetParent || $o, c = this.getDimensions;
  return {
    reference: di(t, await r(n), o),
    floating: {
      x: 0,
      y: 0,
      ...await c(n)
    }
  };
};
function fi(e) {
  return te(e).direction === "rtl";
}
const pi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ni,
  getDocumentElement: ge,
  getClippingRect: si,
  getOffsetParent: $o,
  getElementRects: ui,
  getClientRects: oi,
  getDimensions: li,
  getScale: Ie,
  isElement: ve,
  isRTL: fi
};
function mi(e, t) {
  let n = null, o;
  const r = ge(e);
  function c() {
    clearTimeout(o), n && n.disconnect(), n = null;
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
    let y = !0;
    function x(E) {
      const M = E[0].intersectionRatio;
      if (M !== s) {
        if (!y)
          return i();
        M ? i(!1, M) : o = setTimeout(() => {
          i(!1, 1e-7);
        }, 100);
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...w,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, w);
    }
    n.observe(e);
  }
  return i(!0), c;
}
function hi(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: c = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = o, l = ln(e), u = r || c ? [...l ? Ge(l) : [], ...Ge(t)] : [];
  u.forEach(($) => {
    r && $.addEventListener("scroll", n, {
      passive: !0
    }), c && $.addEventListener("resize", n);
  });
  const d = l && a ? mi(l, n) : null;
  let h = -1, f = null;
  i && (f = new ResizeObserver(($) => {
    let [w] = $;
    w && w.target === l && f && (f.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      f && f.observe(t);
    })), n();
  }), l && !s && f.observe(l), f.observe(t));
  let v, m = s ? Ne(e) : null;
  s && b();
  function b() {
    const $ = Ne(e);
    m && ($.x !== m.x || $.y !== m.y || $.width !== m.width || $.height !== m.height) && n(), m = $, v = requestAnimationFrame(b);
  }
  return n(), () => {
    u.forEach(($) => {
      r && $.removeEventListener("scroll", n), c && $.removeEventListener("resize", n);
    }), d && d(), f && f.disconnect(), f = null, s && cancelAnimationFrame(v);
  };
}
const vi = Xc, gi = Vc, bi = qc, $i = Hc, Fn = Kc, wi = Zc, xi = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: pi,
    ...n
  }, c = {
    ...r.platform,
    _c: o
  };
  return jc(e, t, {
    ...r,
    platform: c
  });
}, yi = (e) => {
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
      return o && t(o) ? o.current != null ? Fn({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Fn({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
};
var ut = typeof document < "u" ? Jt : F;
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
      if (n = e.length, n != t.length)
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
function wo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ln(e, t) {
  const n = wo(e);
  return Math.round(t * n) / n;
}
function Bn(e) {
  const t = C.useRef(e);
  return ut(() => {
    t.current = e;
  }), t;
}
function Ci(e) {
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
  const [v, m] = C.useState(null), [b, $] = C.useState(null), w = C.useCallback((I) => {
    I != M.current && (M.current = I, m(I));
  }, [m]), y = C.useCallback((I) => {
    I !== O.current && (O.current = I, $(I));
  }, [$]), x = c || v, E = i || b, M = C.useRef(null), O = C.useRef(null), S = C.useRef(u), T = Bn(s), W = Bn(r), z = C.useCallback(() => {
    if (!M.current || !O.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: h
    };
    W.current && (I.platform = W.current), xi(M.current, O.current, I).then((H) => {
      const Y = {
        ...H,
        isPositioned: !0
      };
      B.current && !$t(S.current, Y) && (S.current = Y, Qr.flushSync(() => {
        d(Y);
      }));
    });
  }, [h, t, n, W]);
  ut(() => {
    l === !1 && S.current.isPositioned && (S.current.isPositioned = !1, d((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [l]);
  const B = C.useRef(!1);
  ut(() => (B.current = !0, () => {
    B.current = !1;
  }), []), ut(() => {
    if (x && (M.current = x), E && (O.current = E), x && E) {
      if (T.current)
        return T.current(x, E, z);
      z();
    }
  }, [x, E, z, T]);
  const q = C.useMemo(() => ({
    reference: M,
    floating: O,
    setReference: w,
    setFloating: y
  }), [w, y]), A = C.useMemo(() => ({
    reference: x,
    floating: E
  }), [x, E]), U = C.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!A.floating)
      return I;
    const H = Ln(A.floating, u.x), Y = Ln(A.floating, u.y);
    return a ? {
      ...I,
      transform: "translate(" + H + "px, " + Y + "px)",
      ...wo(A.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: H,
      top: Y
    };
  }, [n, a, A.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: z,
    refs: q,
    elements: A,
    floatingStyles: U
  }), [u, z, q, A, U]);
}
function Ei(e) {
  const [t, n] = L(void 0);
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
const xo = "Popper", [yo, Et] = Me(xo), [Pi, Co] = yo(xo), _i = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = L(null);
  return /* @__PURE__ */ g(Pi, {
    scope: t,
    anchor: o,
    onAnchorChange: r
  }, n);
}, Oi = "PopperAnchor", Si = /* @__PURE__ */ _((e, t) => {
  const { __scopePopper: n, virtualRef: o, ...r } = e, c = Co(Oi, n), i = k(null), a = G(t, i);
  return F(() => {
    c.onAnchorChange((o == null ? void 0 : o.current) || i.current);
  }), o ? null : /* @__PURE__ */ g(V.div, P({}, r, {
    ref: a
  }));
}), Eo = "PopperContent", [Ni, Cd] = yo(Eo), Mi = /* @__PURE__ */ _((e, t) => {
  var n, o, r, c, i, a, s, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: h = 0, align: f = "center", alignOffset: v = 0, arrowPadding: m = 0, avoidCollisions: b = !0, collisionBoundary: $ = [], collisionPadding: w = 0, sticky: y = "partial", hideWhenDetached: x = !1, updatePositionStrategy: E = "optimized", onPlaced: M, ...O } = e, S = Co(Eo, u), [T, W] = L(null), z = G(
    t,
    (Ke) => W(Ke)
  ), [B, q] = L(null), A = Ei(B), U = (n = A == null ? void 0 : A.width) !== null && n !== void 0 ? n : 0, I = (o = A == null ? void 0 : A.height) !== null && o !== void 0 ? o : 0, H = d + (f !== "center" ? "-" + f : ""), Y = typeof w == "number" ? w : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...w
  }, D = Array.isArray($) ? $ : [
    $
  ], j = D.length > 0, Z = {
    padding: Y,
    boundary: D.filter(Di),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: j
  }, { refs: fe, floatingStyles: be, placement: je, isPositioned: Pe, middlewareData: re } = Ci({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: H,
    whileElementsMounted: (...Ke) => hi(...Ke, {
      animationFrame: E === "always"
    }),
    elements: {
      reference: S.anchor
    },
    middleware: [
      Yc({
        mainAxis: h + I,
        alignmentAxis: v
      }),
      b && vi({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? wi() : void 0,
        ...Z
      }),
      b && gi({
        ...Z
      }),
      bi({
        ...Z,
        apply: ({ elements: Ke, rects: Cn, availableWidth: Br, availableHeight: Ur }) => {
          const { width: Wr, height: zr } = Cn.reference, ot = Ke.floating.style;
          ot.setProperty("--radix-popper-available-width", `${Br}px`), ot.setProperty("--radix-popper-available-height", `${Ur}px`), ot.setProperty("--radix-popper-anchor-width", `${Wr}px`), ot.setProperty("--radix-popper-anchor-height", `${zr}px`);
        }
      }),
      B && yi({
        element: B,
        padding: m
      }),
      ki({
        arrowWidth: U,
        arrowHeight: I
      }),
      x && $i({
        strategy: "referenceHidden",
        ...Z
      })
    ]
  }), [$e, tt] = Po(je), Q = le(M);
  Fe(() => {
    Pe && (Q == null || Q());
  }, [
    Pe,
    Q
  ]);
  const nt = (r = re.arrow) === null || r === void 0 ? void 0 : r.x, Tr = (c = re.arrow) === null || c === void 0 ? void 0 : c.y, Ir = ((i = re.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !== 0, [Fr, Lr] = L();
  return Fe(() => {
    T && Lr(window.getComputedStyle(T).zIndex);
  }, [
    T
  ]), /* @__PURE__ */ g("div", {
    ref: fe.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...be,
      transform: Pe ? be.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Fr,
      "--radix-popper-transform-origin": [
        (a = re.transformOrigin) === null || a === void 0 ? void 0 : a.x,
        (s = re.transformOrigin) === null || s === void 0 ? void 0 : s.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ g(Ni, {
    scope: u,
    placedSide: $e,
    onArrowChange: q,
    arrowX: nt,
    arrowY: Tr,
    shouldHideArrow: Ir
  }, /* @__PURE__ */ g(V.div, P({
    "data-side": $e,
    "data-align": tt
  }, O, {
    ref: z,
    style: {
      ...O.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: Pe ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = re.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function Di(e) {
  return e !== null;
}
const ki = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, o, r, c, i;
    const { placement: a, rects: s, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, h = d ? 0 : e.arrowWidth, f = d ? 0 : e.arrowHeight, [v, m] = Po(a), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[m], $ = ((o = (r = l.arrow) === null || r === void 0 ? void 0 : r.x) !== null && o !== void 0 ? o : 0) + h / 2, w = ((c = (i = l.arrow) === null || i === void 0 ? void 0 : i.y) !== null && c !== void 0 ? c : 0) + f / 2;
    let y = "", x = "";
    return v === "bottom" ? (y = d ? b : `${$}px`, x = `${-f}px`) : v === "top" ? (y = d ? b : `${$}px`, x = `${s.floating.height + f}px`) : v === "right" ? (y = `${-f}px`, x = d ? b : `${w}px`) : v === "left" && (y = `${s.floating.width + f}px`, x = d ? b : `${w}px`), {
      data: {
        x: y,
        y: x
      }
    };
  }
});
function Po(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const _o = _i, Oo = Si, So = Mi, dn = /* @__PURE__ */ _((e, t) => {
  var n;
  const { container: o = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...r } = e;
  return o ? /* @__PURE__ */ Jr.createPortal(/* @__PURE__ */ g(V.div, P({}, r, {
    ref: t
  })), o) : null;
});
function Ri(e, t) {
  return jr((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const ue = (e) => {
  const { present: t, children: n } = e, o = Ai(t), r = typeof n == "function" ? n({
    present: o.isPresent
  }) : Oe.only(n), c = G(o.ref, r.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ qt(r, {
    ref: c
  }) : null;
};
ue.displayName = "Presence";
function Ai(e) {
  const [t, n] = L(), o = k({}), r = k(e), c = k("none"), i = e ? "mounted" : "unmounted", [a, s] = Ri(i, {
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
  return F(() => {
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
        d.target === t && f && ao(
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
    ref: K((l) => {
      l && (o.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function ct(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Pt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [o, r] = Ti({
    defaultProp: t,
    onChange: n
  }), c = e !== void 0, i = c ? e : o, a = le(n), s = K((l) => {
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
function Ti({ defaultProp: e, onChange: t }) {
  const n = L(e), [o] = n, r = k(o), c = le(t);
  return F(() => {
    r.current !== o && (c(o), r.current = o);
  }, [
    o,
    r,
    c
  ]), n;
}
var Ii = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Re = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), at = {}, Rt = 0, No = function(e) {
  return e && (e.host || No(e.parentNode));
}, Fi = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = No(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Li = function(e, t, n, o) {
  var r = Fi(t, Array.isArray(e) ? e : [e]);
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
  return u(t), a.clear(), Rt++, function() {
    i.forEach(function(d) {
      var h = Re.get(d) - 1, f = c.get(d) - 1;
      Re.set(d, h), c.set(d, f), h || (it.has(d) || d.removeAttribute(o), it.delete(d)), f || d.removeAttribute(n);
    }), Rt--, Rt || (Re = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), at = {});
  };
}, un = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = t || Ii(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), Li(o, r, n, "aria-hidden")) : function() {
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
function Mo(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Bi(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, c; o < r; o++)
      (c || !(o in t)) && (c || (c = Array.prototype.slice.call(t, 0, o)), c[o] = t[o]);
  return e.concat(c || Array.prototype.slice.call(t));
}
var ft = "right-scroll-bar-position", pt = "width-before-scroll-bar", Ui = "with-scroll-bars-hidden", Wi = "--removed-body-scroll-bar-size";
function At(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function zi(e, t) {
  var n = L(function() {
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
var Un = /* @__PURE__ */ new WeakMap();
function ji(e, t) {
  var n = zi(t || null, function(o) {
    return e.forEach(function(r) {
      return At(r, o);
    });
  });
  return C.useLayoutEffect(function() {
    var o = Un.get(n);
    if (o) {
      var r = new Set(o), c = new Set(e), i = n.current;
      r.forEach(function(a) {
        c.has(a) || At(a, null);
      }), c.forEach(function(a) {
        r.has(a) || At(a, i);
      });
    }
    Un.set(n, e);
  }, [e]), n;
}
function Ki(e) {
  return e;
}
function Vi(e, t) {
  t === void 0 && (t = Ki);
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
function Hi(e) {
  e === void 0 && (e = {});
  var t = Vi(null);
  return t.options = se({ async: !0, ssr: !1 }, e), t;
}
var Do = function(e) {
  var t = e.sideCar, n = Mo(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return C.createElement(o, se({}, n));
};
Do.isSideCarExport = !0;
function Gi(e, t) {
  return e.useMedium(t), Do;
}
var ko = Hi(), Tt = function() {
}, _t = C.forwardRef(function(e, t) {
  var n = C.useRef(null), o = C.useState({
    onScrollCapture: Tt,
    onWheelCapture: Tt,
    onTouchMoveCapture: Tt
  }), r = o[0], c = o[1], i = e.forwardProps, a = e.children, s = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, h = e.sideCar, f = e.noIsolation, v = e.inert, m = e.allowPinchZoom, b = e.as, $ = b === void 0 ? "div" : b, w = Mo(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = h, x = ji([n, t]), E = se(se({}, w), r);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(y, { sideCar: ko, removeScrollBar: l, shards: d, noIsolation: f, inert: v, setCallbacks: c, allowPinchZoom: !!m, lockRef: n }),
    i ? C.cloneElement(C.Children.only(a), se(se({}, E), { ref: x })) : C.createElement($, se({}, E, { className: s, ref: x }), a)
  );
});
_t.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
_t.classNames = {
  fullWidth: pt,
  zeroRight: ft
};
var Wn, Yi = function() {
  if (Wn)
    return Wn;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Xi() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Yi();
  return t && e.setAttribute("nonce", t), e;
}
function Zi(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function qi(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Qi = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Xi()) && (Zi(t, n), qi(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ji = function() {
  var e = Qi();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ro = function() {
  var e = Ji(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, ea = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, It = function(e) {
  return parseInt(e || "", 10) || 0;
}, ta = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [It(n), It(o), It(r)];
}, na = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ea;
  var t = ta(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, oa = Ro(), ra = function(e, t, n, o) {
  var r = e.left, c = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Ui, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(a, "px ").concat(o, `;
  }
  body {
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
  
  body {
    `).concat(Wi, ": ").concat(a, `px;
  }
`);
}, ca = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o, c = C.useMemo(function() {
    return na(r);
  }, [r]);
  return C.createElement(oa, { styles: ra(c, !t, r, n ? "" : "!important") });
}, jt = !1;
if (typeof window < "u")
  try {
    var st = Object.defineProperty({}, "passive", {
      get: function() {
        return jt = !0, !0;
      }
    });
    window.addEventListener("test", st, st), window.removeEventListener("test", st, st);
  } catch {
    jt = !1;
  }
var Ae = jt ? { passive: !1 } : !1, ia = function(e) {
  return e.tagName === "TEXTAREA";
}, Ao = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ia(e) && n[t] === "visible")
  );
}, aa = function(e) {
  return Ao(e, "overflowY");
}, sa = function(e) {
  return Ao(e, "overflowX");
}, zn = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = To(e, n);
    if (o) {
      var r = Io(e, n), c = r[1], i = r[2];
      if (c > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, la = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, da = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, To = function(e, t) {
  return e === "v" ? aa(t) : sa(t);
}, Io = function(e, t) {
  return e === "v" ? la(t) : da(t);
}, ua = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, fa = function(e, t, n, o, r) {
  var c = ua(e, window.getComputedStyle(t).direction), i = c * o, a = n.target, s = t.contains(a), l = !1, u = i > 0, d = 0, h = 0;
  do {
    var f = Io(e, a), v = f[0], m = f[1], b = f[2], $ = m - b - c * v;
    (v || $) && To(e, a) && (d += $, h += v), a = a.parentNode;
  } while (
    // portaled content
    !s && a !== document.body || // self content
    s && (t.contains(a) || t === a)
  );
  return (u && (r && d === 0 || !r && i > d) || !u && (r && h === 0 || !r && -i > h)) && (l = !0), l;
}, lt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, jn = function(e) {
  return [e.deltaX, e.deltaY];
}, Kn = function(e) {
  return e && "current" in e ? e.current : e;
}, pa = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ma = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ha = 0, Te = [];
function va(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), o = C.useRef(), r = C.useState(ha++)[0], c = C.useState(function() {
    return Ro();
  })[0], i = C.useRef(e);
  C.useEffect(function() {
    i.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var m = Bi([e.lockRef.current], (e.shards || []).map(Kn), !0).filter(Boolean);
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
    var $ = lt(m), w = n.current, y = "deltaX" in m ? m.deltaX : w[0] - $[0], x = "deltaY" in m ? m.deltaY : w[1] - $[1], E, M = m.target, O = Math.abs(y) > Math.abs(x) ? "h" : "v";
    if ("touches" in m && O === "h" && M.type === "range")
      return !1;
    var S = zn(O, M);
    if (!S)
      return !0;
    if (S ? E = O : (E = O === "v" ? "h" : "v", S = zn(O, M)), !S)
      return !1;
    if (!o.current && "changedTouches" in m && (y || x) && (o.current = E), !E)
      return !0;
    var T = o.current || E;
    return fa(T, b, m, T === "h" ? y : x, !0);
  }, []), s = C.useCallback(function(m) {
    var b = m;
    if (!(!Te.length || Te[Te.length - 1] !== c)) {
      var $ = "deltaY" in b ? jn(b) : lt(b), w = t.current.filter(function(E) {
        return E.name === b.type && E.target === b.target && pa(E.delta, $);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var y = (i.current.shards || []).map(Kn).filter(Boolean).filter(function(E) {
          return E.contains(b.target);
        }), x = y.length > 0 ? a(b, y[0]) : !i.current.noIsolation;
        x && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(m, b, $, w) {
    var y = { name: m, delta: b, target: $, should: w };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== y;
      });
    }, 1);
  }, []), u = C.useCallback(function(m) {
    n.current = lt(m), o.current = void 0;
  }, []), d = C.useCallback(function(m) {
    l(m.type, jn(m), m.target, a(m, e.lockRef.current));
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
    v ? C.createElement(c, { styles: ma(r) }) : null,
    f ? C.createElement(ca, { gapMode: "margin" }) : null
  );
}
const ga = Gi(ko, va);
var Fo = C.forwardRef(function(e, t) {
  return C.createElement(_t, se({}, e, { ref: t, sideCar: ga }));
});
Fo.classNames = _t.classNames;
const fn = Fo, Lo = "Popover", [Bo, Ed] = Me(Lo, [
  Et
]), pn = Et(), [ba, ze] = Bo(Lo), $a = (e) => {
  const { __scopePopover: t, children: n, open: o, defaultOpen: r, onOpenChange: c, modal: i = !1 } = e, a = pn(t), s = k(null), [l, u] = L(!1), [d = !1, h] = Pt({
    prop: o,
    defaultProp: r,
    onChange: c
  });
  return /* @__PURE__ */ g(_o, a, /* @__PURE__ */ g(ba, {
    scope: t,
    contentId: Se(),
    triggerRef: s,
    open: d,
    onOpenChange: h,
    onOpenToggle: K(
      () => h(
        (f) => !f
      ),
      [
        h
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
}, wa = "PopoverTrigger", xa = /* @__PURE__ */ _((e, t) => {
  const { __scopePopover: n, ...o } = e, r = ze(wa, n), c = pn(n), i = G(t, r.triggerRef), a = /* @__PURE__ */ g(V.button, P({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": zo(r.open)
  }, o, {
    ref: i,
    onClick: R(e.onClick, r.onOpenToggle)
  }));
  return r.hasCustomAnchor ? a : /* @__PURE__ */ g(Oo, P({
    asChild: !0
  }, c), a);
}), Uo = "PopoverPortal", [ya, Ca] = Bo(Uo, {
  forceMount: void 0
}), Ea = (e) => {
  const { __scopePopover: t, forceMount: n, children: o, container: r } = e, c = ze(Uo, t);
  return /* @__PURE__ */ g(ya, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ g(ue, {
    present: n || c.open
  }, /* @__PURE__ */ g(dn, {
    asChild: !0,
    container: r
  }, o)));
}, Ye = "PopoverContent", Pa = /* @__PURE__ */ _((e, t) => {
  const n = Ca(Ye, e.__scopePopover), { forceMount: o = n.forceMount, ...r } = e, c = ze(Ye, e.__scopePopover);
  return /* @__PURE__ */ g(ue, {
    present: o || c.open
  }, c.modal ? /* @__PURE__ */ g(_a, P({}, r, {
    ref: t
  })) : /* @__PURE__ */ g(Oa, P({}, r, {
    ref: t
  })));
}), _a = /* @__PURE__ */ _((e, t) => {
  const n = ze(Ye, e.__scopePopover), o = k(null), r = G(t, o), c = k(!1);
  return F(() => {
    const i = o.current;
    if (i)
      return un(i);
  }, []), /* @__PURE__ */ g(fn, {
    as: xe,
    allowPinchZoom: !0
  }, /* @__PURE__ */ g(Wo, P({}, e, {
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
}), Oa = /* @__PURE__ */ _((e, t) => {
  const n = ze(Ye, e.__scopePopover), o = k(!1), r = k(!1);
  return /* @__PURE__ */ g(Wo, P({}, e, {
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
}), Wo = /* @__PURE__ */ _((e, t) => {
  const { __scopePopover: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: c, disableOutsidePointerEvents: i, onEscapeKeyDown: a, onPointerDownOutside: s, onFocusOutside: l, onInteractOutside: u, ...d } = e, h = ze(Ye, n), f = pn(n);
  return tn(), /* @__PURE__ */ g(nn, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: c
  }, /* @__PURE__ */ g(en, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onInteractOutside: u,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: l,
    onDismiss: () => h.onOpenChange(!1)
  }, /* @__PURE__ */ g(So, P({
    "data-state": zo(h.open),
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
function zo(e) {
  return e ? "open" : "closed";
}
const Sa = $a, Na = xa, Ma = Ea, jo = Pa;
function X(...e) {
  return tc(ec(e));
}
const Ko = Sa, Vo = Na, mn = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...o }, r) => /* @__PURE__ */ p(Ma, { children: /* @__PURE__ */ p(
  jo,
  {
    ref: r,
    align: t,
    sideOffset: n,
    className: X(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...o
  }
) }));
mn.displayName = jo.displayName;
const Da = nc(
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
      className: X(Da({ variant: t, size: n, className: e })),
      ref: c,
      ...r
    }
  )
);
ne.displayName = "Button";
const ka = (e) => e ? e.cookie.split("; ").map((r) => {
  const c = r.split("=");
  return { [c[0]]: c[1] };
}).reduce((r, c) => ({
  ...r,
  ...c
})) : null, Pd = () => {
  const [e, t] = L(null), n = e ? e.theme : "dark";
  return F(() => {
    if (typeof document < "u") {
      const o = ka(document);
      t(o);
    }
  }, [typeof document]), /* @__PURE__ */ N(Ko, { children: [
    /* @__PURE__ */ p(Vo, { asChild: !0, className: "rounded-full border w-9 h-9 flex items-center bg-background justify-center", children: /* @__PURE__ */ p(ne, { size: "icon", variant: "ghost", children: /* @__PURE__ */ p(qr, { size: 20 }) }) }),
    /* @__PURE__ */ p(mn, { className: "projects-grid", children: pc.map(
      (o) => /* @__PURE__ */ N("a", { href: o.link, className: "w-full h-full flex flex-col items-center justify-center gap-2 rounded-md hover:bg-muted p-1", children: [
        /* @__PURE__ */ p("div", { className: "w-7 h-7 relative", children: /* @__PURE__ */ p("img", { src: o.themedIcon ? o.themedIcon[n] : o.icon, className: "w-full h-full", alt: "project-icon" }) }),
        /* @__PURE__ */ p("span", { className: "text-xs text-center", children: o.name })
      ] }, o.key)
    ) })
  ] });
}, _e = {
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
}, Ra = {
  resize: "none",
  outline: "none",
  display: "block",
  overflow: "hidden",
  backgroundColor: "transparent"
}, _d = (e) => {
  const t = k(null), n = (o) => {
    if (e.onChange && e.onChange(o), t.current) {
      t.current.style.height = "40px";
      const r = t.current.scrollHeight;
      t.current.style.height = r + "px";
    }
  };
  return Jt(() => {
    const o = t.current;
    if (e.value && o) {
      t.current.style.height = "40px";
      const r = t.current.scrollHeight;
      t.current.style.height = r + "px";
    }
  }, [e.value, t]), /* @__PURE__ */ p("textarea", { ...e, ref: t, onChange: n, style: { ...Ra } });
}, Aa = oc(() => import("./markdown-e5d6ecc8.mjs"), {
  // Make sure we turn SSR off
  ssr: !1
}), Ta = _(
  (e, t) => /* @__PURE__ */ p(Aa, { ...e, editorRef: t })
);
Ta.displayName = "ForwardRefEditor";
function Ho(e) {
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
    const { scope: m, children: b, ...$ } = f, w = ae.useRef(null), y = G(v, w), x = c(l, m);
    return ae.useEffect(() => (x.itemMap.set(w, {
      ref: w,
      ...$
    }), () => void x.itemMap.delete(w))), /* @__PURE__ */ ae.createElement(xe, {
      [u]: "",
      ref: y
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
        (x, E) => $.indexOf(x.ref.current) - $.indexOf(E.ref.current)
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
const Ia = /* @__PURE__ */ mt(void 0);
function Go(e) {
  const t = Zt(Ia);
  return e || t || "ltr";
}
const Ft = "rovingFocusGroup.onEntryFocus", Fa = {
  bubbles: !1,
  cancelable: !0
}, hn = "RovingFocusGroup", [Kt, Yo, La] = Ho(hn), [Ba, Xo] = Me(hn, [
  La
]), [Ua, Wa] = Ba(hn), za = /* @__PURE__ */ _((e, t) => /* @__PURE__ */ g(Kt.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ g(Kt.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ g(ja, P({}, e, {
  ref: t
}))))), ja = /* @__PURE__ */ _((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: o, loop: r = !1, dir: c, currentTabStopId: i, defaultCurrentTabStopId: a, onCurrentTabStopIdChange: s, onEntryFocus: l, ...u } = e, d = k(null), h = G(t, d), f = Go(c), [v = null, m] = Pt({
    prop: i,
    defaultProp: a,
    onChange: s
  }), [b, $] = L(!1), w = le(l), y = Yo(n), x = k(!1), [E, M] = L(0);
  return F(() => {
    const O = d.current;
    if (O)
      return O.addEventListener(Ft, w), () => O.removeEventListener(Ft, w);
  }, [
    w
  ]), /* @__PURE__ */ g(Ua, {
    scope: n,
    orientation: o,
    dir: f,
    loop: r,
    currentTabStopId: v,
    onItemFocus: K(
      (O) => m(O),
      [
        m
      ]
    ),
    onItemShiftTab: K(
      () => $(!0),
      []
    ),
    onFocusableItemAdd: K(
      () => M(
        (O) => O + 1
      ),
      []
    ),
    onFocusableItemRemove: K(
      () => M(
        (O) => O - 1
      ),
      []
    )
  }, /* @__PURE__ */ g(V.div, P({
    tabIndex: b || E === 0 ? -1 : 0,
    "data-orientation": o
  }, u, {
    ref: h,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: R(e.onMouseDown, () => {
      x.current = !0;
    }),
    onFocus: R(e.onFocus, (O) => {
      const S = !x.current;
      if (O.target === O.currentTarget && S && !b) {
        const T = new CustomEvent(Ft, Fa);
        if (O.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
          const W = y().filter(
            (U) => U.focusable
          ), z = W.find(
            (U) => U.active
          ), B = W.find(
            (U) => U.id === v
          ), A = [
            z,
            B,
            ...W
          ].filter(Boolean).map(
            (U) => U.ref.current
          );
          Zo(A);
        }
      }
      x.current = !1;
    }),
    onBlur: R(
      e.onBlur,
      () => $(!1)
    )
  })));
}), Ka = "RovingFocusGroupItem", Va = /* @__PURE__ */ _((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: o = !0, active: r = !1, tabStopId: c, ...i } = e, a = Se(), s = c || a, l = Wa(Ka, n), u = l.currentTabStopId === s, d = Yo(n), { onFocusableItemAdd: h, onFocusableItemRemove: f } = l;
  return F(() => {
    if (o)
      return h(), () => f();
  }, [
    o,
    h,
    f
  ]), /* @__PURE__ */ g(Kt.ItemSlot, {
    scope: n,
    id: s,
    focusable: o,
    active: r
  }, /* @__PURE__ */ g(V.span, P({
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
      const m = Ya(v, l.orientation, l.dir);
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
          $ = l.loop ? Xa($, w + 1) : $.slice(w + 1);
        }
        setTimeout(
          () => Zo($)
        );
      }
    })
  })));
}), Ha = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ga(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ya(e, t, n) {
  const o = Ga(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(o)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(o)))
    return Ha[o];
}
function Zo(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Xa(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
const Za = za, qa = Va, Vt = [
  "Enter",
  " "
], Qa = [
  "ArrowDown",
  "PageUp",
  "Home"
], qo = [
  "ArrowUp",
  "PageDown",
  "End"
], Ja = [
  ...Qa,
  ...qo
], es = {
  ltr: [
    ...Vt,
    "ArrowRight"
  ],
  rtl: [
    ...Vt,
    "ArrowLeft"
  ]
}, ts = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Ot = "Menu", [Xe, ns, os] = Ho(Ot), [De, Qo] = Me(Ot, [
  os,
  Et,
  Xo
]), vn = Et(), Jo = Xo(), [rs, ke] = De(Ot), [cs, et] = De(Ot), is = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: c, modal: i = !0 } = e, a = vn(t), [s, l] = L(null), u = k(!1), d = le(c), h = Go(r);
  return F(() => {
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
  }, []), /* @__PURE__ */ g(_o, a, /* @__PURE__ */ g(rs, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: s,
    onContentChange: l
  }, /* @__PURE__ */ g(cs, {
    scope: t,
    onClose: K(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: h,
    modal: i
  }, o)));
}, er = /* @__PURE__ */ _((e, t) => {
  const { __scopeMenu: n, ...o } = e, r = vn(n);
  return /* @__PURE__ */ g(Oo, P({}, r, o, {
    ref: t
  }));
}), tr = "MenuPortal", [as, nr] = De(tr, {
  forceMount: void 0
}), ss = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, c = ke(tr, t);
  return /* @__PURE__ */ g(as, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ g(ue, {
    present: n || c.open
  }, /* @__PURE__ */ g(dn, {
    asChild: !0,
    container: r
  }, o)));
}, ce = "MenuContent", [ls, gn] = De(ce), ds = /* @__PURE__ */ _((e, t) => {
  const n = nr(ce, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, c = ke(ce, e.__scopeMenu), i = et(ce, e.__scopeMenu);
  return /* @__PURE__ */ g(Xe.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ g(ue, {
    present: o || c.open
  }, /* @__PURE__ */ g(Xe.Slot, {
    scope: e.__scopeMenu
  }, i.modal ? /* @__PURE__ */ g(us, P({}, r, {
    ref: t
  })) : /* @__PURE__ */ g(fs, P({}, r, {
    ref: t
  })))));
}), us = /* @__PURE__ */ _((e, t) => {
  const n = ke(ce, e.__scopeMenu), o = k(null), r = G(t, o);
  return F(() => {
    const c = o.current;
    if (c)
      return un(c);
  }, []), /* @__PURE__ */ g(bn, P({}, e, {
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
}), fs = /* @__PURE__ */ _((e, t) => {
  const n = ke(ce, e.__scopeMenu);
  return /* @__PURE__ */ g(bn, P({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), bn = /* @__PURE__ */ _((e, t) => {
  const { __scopeMenu: n, loop: o = !1, trapFocus: r, onOpenAutoFocus: c, onCloseAutoFocus: i, disableOutsidePointerEvents: a, onEntryFocus: s, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: h, onDismiss: f, disableOutsideScroll: v, ...m } = e, b = ke(ce, n), $ = et(ce, n), w = vn(n), y = Jo(n), x = ns(n), [E, M] = L(null), O = k(null), S = G(t, O, b.onContentChange), T = k(0), W = k(""), z = k(0), B = k(null), q = k("right"), A = k(0), U = v ? fn : Qt, I = v ? {
    as: xe,
    allowPinchZoom: !0
  } : void 0, H = (D) => {
    var j, Z;
    const fe = W.current + D, be = x().filter(
      (Q) => !Q.disabled
    ), je = document.activeElement, Pe = (j = be.find(
      (Q) => Q.ref.current === je
    )) === null || j === void 0 ? void 0 : j.textValue, re = be.map(
      (Q) => Q.textValue
    ), $e = Ss(re, fe, Pe), tt = (Z = be.find(
      (Q) => Q.textValue === $e
    )) === null || Z === void 0 ? void 0 : Z.ref.current;
    (function Q(nt) {
      W.current = nt, window.clearTimeout(T.current), nt !== "" && (T.current = window.setTimeout(
        () => Q(""),
        1e3
      ));
    })(fe), tt && setTimeout(
      () => tt.focus()
    );
  };
  F(() => () => window.clearTimeout(T.current), []), tn();
  const Y = K((D) => {
    var j, Z;
    return q.current === ((j = B.current) === null || j === void 0 ? void 0 : j.side) && Ms(D, (Z = B.current) === null || Z === void 0 ? void 0 : Z.area);
  }, []);
  return /* @__PURE__ */ g(ls, {
    scope: n,
    searchRef: W,
    onItemEnter: K((D) => {
      Y(D) && D.preventDefault();
    }, [
      Y
    ]),
    onItemLeave: K((D) => {
      var j;
      Y(D) || ((j = O.current) === null || j === void 0 || j.focus(), M(null));
    }, [
      Y
    ]),
    onTriggerLeave: K((D) => {
      Y(D) && D.preventDefault();
    }, [
      Y
    ]),
    pointerGraceTimerRef: z,
    onPointerGraceIntentChange: K((D) => {
      B.current = D;
    }, [])
  }, /* @__PURE__ */ g(U, I, /* @__PURE__ */ g(nn, {
    asChild: !0,
    trapped: r,
    onMountAutoFocus: R(c, (D) => {
      var j;
      D.preventDefault(), (j = O.current) === null || j === void 0 || j.focus();
    }),
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ g(en, {
    asChild: !0,
    disableOutsidePointerEvents: a,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: h,
    onDismiss: f
  }, /* @__PURE__ */ g(Za, P({
    asChild: !0
  }, y, {
    dir: $.dir,
    orientation: "vertical",
    loop: o,
    currentTabStopId: E,
    onCurrentTabStopIdChange: M,
    onEntryFocus: R(s, (D) => {
      $.isUsingKeyboardRef.current || D.preventDefault();
    })
  }), /* @__PURE__ */ g(So, P({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": ar(b.open),
    "data-radix-menu-content": "",
    dir: $.dir
  }, w, m, {
    ref: S,
    style: {
      outline: "none",
      ...m.style
    },
    onKeyDown: R(m.onKeyDown, (D) => {
      const Z = D.target.closest("[data-radix-menu-content]") === D.currentTarget, fe = D.ctrlKey || D.altKey || D.metaKey, be = D.key.length === 1;
      Z && (D.key === "Tab" && D.preventDefault(), !fe && be && H(D.key));
      const je = O.current;
      if (D.target !== je || !Ja.includes(D.key))
        return;
      D.preventDefault();
      const re = x().filter(
        ($e) => !$e.disabled
      ).map(
        ($e) => $e.ref.current
      );
      qo.includes(D.key) && re.reverse(), _s(re);
    }),
    onBlur: R(e.onBlur, (D) => {
      D.currentTarget.contains(D.target) || (window.clearTimeout(T.current), W.current = "");
    }),
    onPointerMove: R(e.onPointerMove, Ze((D) => {
      const j = D.target, Z = A.current !== D.clientX;
      if (D.currentTarget.contains(j) && Z) {
        const fe = D.clientX > A.current ? "right" : "left";
        q.current = fe, A.current = D.clientX;
      }
    }))
  })))))));
}), ps = /* @__PURE__ */ _((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return /* @__PURE__ */ g(V.div, P({}, o, {
    ref: t
  }));
}), Ht = "MenuItem", Vn = "menu.itemSelect", $n = /* @__PURE__ */ _((e, t) => {
  const { disabled: n = !1, onSelect: o, ...r } = e, c = k(null), i = et(Ht, e.__scopeMenu), a = gn(Ht, e.__scopeMenu), s = G(t, c), l = k(!1), u = () => {
    const d = c.current;
    if (!n && d) {
      const h = new CustomEvent(Vn, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        Vn,
        (f) => o == null ? void 0 : o(f),
        {
          once: !0
        }
      ), so(d, h), h.defaultPrevented ? l.current = !1 : i.onClose();
    }
  };
  return /* @__PURE__ */ g(or, P({}, r, {
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
      n || h && d.key === " " || Vt.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), or = /* @__PURE__ */ _((e, t) => {
  const { __scopeMenu: n, disabled: o = !1, textValue: r, ...c } = e, i = gn(Ht, n), a = Jo(n), s = k(null), l = G(t, s), [u, d] = L(!1), [h, f] = L("");
  return F(() => {
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
  }, /* @__PURE__ */ g(qa, P({
    asChild: !0
  }, a, {
    focusable: !o
  }), /* @__PURE__ */ g(V.div, P({
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
}), ms = /* @__PURE__ */ _((e, t) => {
  const { checked: n = !1, onCheckedChange: o, ...r } = e;
  return /* @__PURE__ */ g(cr, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ g($n, P({
    role: "menuitemcheckbox",
    "aria-checked": wt(n) ? "mixed" : n
  }, r, {
    ref: t,
    "data-state": wn(n),
    onSelect: R(
      r.onSelect,
      () => o == null ? void 0 : o(wt(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), hs = "MenuRadioGroup", [Od, vs] = De(hs, {
  value: void 0,
  onValueChange: () => {
  }
}), gs = "MenuRadioItem", bs = /* @__PURE__ */ _((e, t) => {
  const { value: n, ...o } = e, r = vs(gs, e.__scopeMenu), c = n === r.value;
  return /* @__PURE__ */ g(cr, {
    scope: e.__scopeMenu,
    checked: c
  }, /* @__PURE__ */ g($n, P({
    role: "menuitemradio",
    "aria-checked": c
  }, o, {
    ref: t,
    "data-state": wn(c),
    onSelect: R(o.onSelect, () => {
      var i;
      return (i = r.onValueChange) === null || i === void 0 ? void 0 : i.call(r, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), rr = "MenuItemIndicator", [cr, $s] = De(rr, {
  checked: !1
}), ws = /* @__PURE__ */ _((e, t) => {
  const { __scopeMenu: n, forceMount: o, ...r } = e, c = $s(rr, n);
  return /* @__PURE__ */ g(ue, {
    present: o || wt(c.checked) || c.checked === !0
  }, /* @__PURE__ */ g(V.span, P({}, r, {
    ref: t,
    "data-state": wn(c.checked)
  })));
}), xs = /* @__PURE__ */ _((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return /* @__PURE__ */ g(V.div, P({
    role: "separator",
    "aria-orientation": "horizontal"
  }, o, {
    ref: t
  }));
}), ys = "MenuSub", [Sd, ir] = De(ys), dt = "MenuSubTrigger", Cs = /* @__PURE__ */ _((e, t) => {
  const n = ke(dt, e.__scopeMenu), o = et(dt, e.__scopeMenu), r = ir(dt, e.__scopeMenu), c = gn(dt, e.__scopeMenu), i = k(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: s } = c, l = {
    __scopeMenu: e.__scopeMenu
  }, u = K(() => {
    i.current && window.clearTimeout(i.current), i.current = null;
  }, []);
  return F(
    () => u,
    [
      u
    ]
  ), F(() => {
    const d = a.current;
    return () => {
      window.clearTimeout(d), s(null);
    };
  }, [
    a,
    s
  ]), /* @__PURE__ */ g(er, P({
    asChild: !0
  }, l), /* @__PURE__ */ g(or, P({
    id: r.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": r.contentId,
    "data-state": ar(n.open)
  }, e, {
    ref: xt(t, r.onTriggerChange),
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
        const m = (v = n.content) === null || v === void 0 ? void 0 : v.dataset.side, b = m === "right", $ = b ? -5 : 5, w = f[b ? "left" : "right"], y = f[b ? "right" : "left"];
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
              x: y,
              y: f.top
            },
            {
              x: y,
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
      if (!(e.disabled || h && d.key === " ") && es[o.dir].includes(d.key)) {
        var f;
        n.onOpenChange(!0), (f = n.content) === null || f === void 0 || f.focus(), d.preventDefault();
      }
    })
  })));
}), Es = "MenuSubContent", Ps = /* @__PURE__ */ _((e, t) => {
  const n = nr(ce, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, c = ke(ce, e.__scopeMenu), i = et(ce, e.__scopeMenu), a = ir(Es, e.__scopeMenu), s = k(null), l = G(t, s);
  return /* @__PURE__ */ g(Xe.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ g(ue, {
    present: o || c.open
  }, /* @__PURE__ */ g(Xe.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ g(bn, P({
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
      const d = u.currentTarget.contains(u.target), h = ts[i.dir].includes(u.key);
      if (d && h) {
        var f;
        c.onOpenChange(!1), (f = a.trigger) === null || f === void 0 || f.focus(), u.preventDefault();
      }
    })
  })))));
});
function ar(e) {
  return e ? "open" : "closed";
}
function wt(e) {
  return e === "indeterminate";
}
function wn(e) {
  return wt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function _s(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Os(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
function Ss(e, t, n) {
  const r = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, c = n ? e.indexOf(n) : -1;
  let i = Os(e, Math.max(c, 0));
  r.length === 1 && (i = i.filter(
    (l) => l !== n
  ));
  const s = i.find(
    (l) => l.toLowerCase().startsWith(r.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function Ns(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let c = 0, i = t.length - 1; c < t.length; i = c++) {
    const a = t[c].x, s = t[c].y, l = t[i].x, u = t[i].y;
    s > o != u > o && n < (l - a) * (o - s) / (u - s) + a && (r = !r);
  }
  return r;
}
function Ms(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return Ns(n, t);
}
function Ze(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Ds = is, ks = er, Rs = ss, As = ds, Ts = ps, Is = $n, Fs = ms, Ls = bs, Bs = ws, Us = xs, Ws = Cs, zs = Ps, sr = "DropdownMenu", [js, Nd] = Me(sr, [
  Qo
]), oe = Qo(), [Ks, lr] = js(sr), Vs = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: o, open: r, defaultOpen: c, onOpenChange: i, modal: a = !0 } = e, s = oe(t), l = k(null), [u = !1, d] = Pt({
    prop: r,
    defaultProp: c,
    onChange: i
  });
  return /* @__PURE__ */ g(Ks, {
    scope: t,
    triggerId: Se(),
    triggerRef: l,
    contentId: Se(),
    open: u,
    onOpenChange: d,
    onOpenToggle: K(
      () => d(
        (h) => !h
      ),
      [
        d
      ]
    ),
    modal: a
  }, /* @__PURE__ */ g(Ds, P({}, s, {
    open: u,
    onOpenChange: d,
    dir: o,
    modal: a
  }), n));
}, Hs = "DropdownMenuTrigger", Gs = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, c = lr(Hs, n), i = oe(n);
  return /* @__PURE__ */ g(ks, P({
    asChild: !0
  }, i), /* @__PURE__ */ g(V.button, P({
    type: "button",
    id: c.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": c.open,
    "aria-controls": c.open ? c.contentId : void 0,
    "data-state": c.open ? "open" : "closed",
    "data-disabled": o ? "" : void 0,
    disabled: o
  }, r, {
    ref: xt(t, c.triggerRef),
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
}), Ys = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = oe(t);
  return /* @__PURE__ */ g(Rs, P({}, o, n));
}, Xs = "DropdownMenuContent", Zs = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = lr(Xs, n), c = oe(n), i = k(!1);
  return /* @__PURE__ */ g(As, P({
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
}), qs = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(Ts, P({}, r, o, {
    ref: t
  }));
}), Qs = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(Is, P({}, r, o, {
    ref: t
  }));
}), Js = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(Fs, P({}, r, o, {
    ref: t
  }));
}), el = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(Ls, P({}, r, o, {
    ref: t
  }));
}), tl = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(Bs, P({}, r, o, {
    ref: t
  }));
}), nl = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(Us, P({}, r, o, {
    ref: t
  }));
}), ol = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(Ws, P({}, r, o, {
    ref: t
  }));
}), rl = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ g(zs, P({}, r, o, {
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
}), cl = Vs, il = Gs, al = Ys, dr = Zs, ur = qs, fr = Qs, pr = Js, mr = el, hr = tl, vr = nl, gr = ol, br = rl;
function St(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, c;
  for (c = 0; c < o.length; c++)
    r = o[c], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var sl = ["color"], ll = /* @__PURE__ */ _(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = St(e, sl);
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
}), dl = ["color"], ul = /* @__PURE__ */ _(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = St(e, dl);
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
}), fl = ["color"], pl = /* @__PURE__ */ _(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = St(e, fl);
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
}), ml = ["color"], hl = /* @__PURE__ */ _(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = St(e, ml);
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
const vl = cl, gl = il, bl = C.forwardRef(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ N(
  gr,
  {
    ref: r,
    className: X(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ p(ul, { className: "ml-auto h-4 w-4" })
    ]
  }
));
bl.displayName = gr.displayName;
const $l = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  br,
  {
    ref: n,
    className: X(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
$l.displayName = br.displayName;
const $r = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ p(al, { children: /* @__PURE__ */ p(
  dr,
  {
    ref: o,
    sideOffset: t,
    className: X(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
$r.displayName = dr.displayName;
const Nt = C.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ p(
  fr,
  {
    ref: o,
    className: X(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Nt.displayName = fr.displayName;
const wl = C.forwardRef(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ N(
  pr,
  {
    ref: r,
    className: X(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(hr, { children: /* @__PURE__ */ p(ll, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
wl.displayName = pr.displayName;
const xl = C.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ N(
  mr,
  {
    ref: o,
    className: X(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p(hr, { children: /* @__PURE__ */ p(hl, { className: "h-4 w-4 fill-current" }) }) }),
      t
    ]
  }
));
xl.displayName = mr.displayName;
const wr = C.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ p(
  ur,
  {
    ref: o,
    className: X(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
wr.displayName = ur.displayName;
const qe = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  vr,
  {
    ref: n,
    className: X("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
qe.displayName = vr.displayName;
const xn = [
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
            icon: rc,
            text: "Документация",
            link: "https://docs.darkmaterial.space"
          },
          {
            icon: Kr,
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
], Hn = ({ description: e, displayName: t }) => /* @__PURE__ */ N("div", { className: "w-full h-fit pb-4 flex flex-col justify-start", children: [
  /* @__PURE__ */ p("span", { className: "text-lg font-semibold text-accent-foreground", children: t }),
  /* @__PURE__ */ p("span", { className: "text-sm font-normal text-muted-foreground", children: e })
] }), Gn = ({ section: e }) => {
  const t = e.items.length === 0;
  if (!!e.title || !t)
    return /* @__PURE__ */ N(pe, { children: [
      /* @__PURE__ */ p("span", { children: e.title }),
      /* @__PURE__ */ p(qe, {}),
      e.items && e.items.map(
        (o) => /* @__PURE__ */ p(Nt, { asChild: !0, children: /* @__PURE__ */ N("a", { href: o.link, className: "flex items-center py-2 justify-start gap-2", children: [
          o.icon && o.icon({}),
          o.text
        ] }) })
      )
    ] });
}, Yn = ({ section: e }) => /* @__PURE__ */ N(pe, { children: [
  /* @__PURE__ */ p(qe, {}),
  /* @__PURE__ */ p(wr, { children: "Проекты" }),
  e.projects && e.projects.map(
    (t) => /* @__PURE__ */ p(Nt, { asChild: !0, children: /* @__PURE__ */ N("a", { href: t.link, className: "flex px-0 items-center justify-between w-full", children: [
      /* @__PURE__ */ p("span", { className: "text-base", children: t.name }),
      /* @__PURE__ */ p(io, { size: 18, className: "ml-auto" })
    ] }) }, t.key + "-menu")
  )
] }), Xn = ({ section: e }) => typeof e.state[e.activeState] == "string" ? /* @__PURE__ */ N(pe, { children: [
  /* @__PURE__ */ p(qe, {}),
  /* @__PURE__ */ p("div", { className: "w-full h-fit pt-5 flex items-center justify-center", children: /* @__PURE__ */ p("span", { className: "text-sm text-muted-foreground", children: e.state[e.activeState] }) })
] }) : /* @__PURE__ */ N(pe, { children: [
  /* @__PURE__ */ p(qe, {}),
  e.state[e.activeState]
] }), Zn = ({ section: e }) => /* @__PURE__ */ N(Nt, { className: "gap-2 py-2", onClick: e.action && e.action, children: [
  /* @__PURE__ */ p(co, {}),
  "Выйти из профиля"
] }), yl = ({ user: e, size: t = 36, buttonSize: n, loginLink: o = "https://darkmaterial.space", menuMap: r = xn }) => {
  const c = "https://auth.darkmaterial.space/login?continue=";
  return e ? /* @__PURE__ */ N(vl, { children: [
    /* @__PURE__ */ p(gl, { asChild: !0, children: e.photoURL ? /* @__PURE__ */ p("div", { style: { width: `${t}px`, height: `${t}px` }, children: /* @__PURE__ */ p("img", { src: e.photoURL, alt: "user-profile-img", className: "w-full h-full rounded-full object-cover" }) }) : /* @__PURE__ */ p(
      "div",
      {
        style: { width: `${t}px`, height: `${t}px` },
        className: "w-9 h-9 rounded-full bg-muted border shrink-0 flex items-center justify-center",
        children: /* @__PURE__ */ p(ro, { size: 18 })
      }
    ) }),
    /* @__PURE__ */ p($r, { className: "p-4 w-60 rounded-xl", children: r && r.map((i, a) => i.type === "user" ? /* @__PURE__ */ p(Hn, { displayName: e.displayName || "Пользователь", description: e.email || "Не указано" }, a + "-item-no-wrapper") : i.type === "links" ? /* @__PURE__ */ p(Gn, { section: i }, a + "-item-no-wrapper") : i.type === "projects" ? /* @__PURE__ */ p(Yn, { section: i }, a + "-item-no-wrapper") : i.type === "membership" ? /* @__PURE__ */ p(Xn, { section: i }, a + "-item-no-wrapper") : i.type === "sign-out" ? /* @__PURE__ */ p(Zn, { section: i }, a + "-item-no-wrapper") : i.type === "wrapper" ? /* @__PURE__ */ p("div", { className: i.className || "", children: i.items && i.items.map((s, l) => {
      if (s.type === "user")
        return /* @__PURE__ */ p(Hn, { displayName: e.displayName || "Пользователь", description: e.email || "Не указано" }, a + "-" + l + "item-with-wrapper");
      if (s.type === "links")
        return /* @__PURE__ */ p(Gn, { section: s }, a + "-" + l + "item-with-wrapper");
      if (s.type === "projects")
        return /* @__PURE__ */ p(Yn, { section: s }, a + "-" + l + "item-with-wrapper");
      if (s.type === "membership")
        return /* @__PURE__ */ p(Xn, { section: s }, a + "-" + l + "item-with-wrapper");
      if (s.type === "sign-out")
        return /* @__PURE__ */ p(Zn, { section: s }, a + "-" + l + "item-with-wrapper");
    }) }, a + "-item-wrapper") : null) })
  ] }) : /* @__PURE__ */ p(ne, { size: n, variant: "outline", asChild: !0, children: /* @__PURE__ */ p("a", { href: `${c}${o}`, children: "Войти" }) });
}, xr = "Dialog", [yr, Md] = Me(xr), [Cl, ie] = yr(xr), El = (e) => {
  const { __scopeDialog: t, children: n, open: o, defaultOpen: r, onOpenChange: c, modal: i = !0 } = e, a = k(null), s = k(null), [l = !1, u] = Pt({
    prop: o,
    defaultProp: r,
    onChange: c
  });
  return /* @__PURE__ */ g(Cl, {
    scope: t,
    triggerRef: a,
    contentRef: s,
    contentId: Se(),
    titleId: Se(),
    descriptionId: Se(),
    open: l,
    onOpenChange: u,
    onOpenToggle: K(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: i
  }, n);
}, Pl = "DialogTrigger", _l = /* @__PURE__ */ _((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ie(Pl, n), c = G(t, r.triggerRef);
  return /* @__PURE__ */ g(V.button, P({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": yn(r.open)
  }, o, {
    ref: c,
    onClick: R(e.onClick, r.onOpenToggle)
  }));
}), Cr = "DialogPortal", [Ol, Er] = yr(Cr, {
  forceMount: void 0
}), Sl = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, c = ie(Cr, t);
  return /* @__PURE__ */ g(Ol, {
    scope: t,
    forceMount: n
  }, Oe.map(
    o,
    (i) => /* @__PURE__ */ g(ue, {
      present: n || c.open
    }, /* @__PURE__ */ g(dn, {
      asChild: !0,
      container: r
    }, i))
  ));
}, Gt = "DialogOverlay", Nl = /* @__PURE__ */ _((e, t) => {
  const n = Er(Gt, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, c = ie(Gt, e.__scopeDialog);
  return c.modal ? /* @__PURE__ */ g(ue, {
    present: o || c.open
  }, /* @__PURE__ */ g(Ml, P({}, r, {
    ref: t
  }))) : null;
}), Ml = /* @__PURE__ */ _((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ie(Gt, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ g(fn, {
      as: xe,
      allowPinchZoom: !0,
      shards: [
        r.contentRef
      ]
    }, /* @__PURE__ */ g(V.div, P({
      "data-state": yn(r.open)
    }, o, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...o.style
      }
    })))
  );
}), Qe = "DialogContent", Dl = /* @__PURE__ */ _((e, t) => {
  const n = Er(Qe, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, c = ie(Qe, e.__scopeDialog);
  return /* @__PURE__ */ g(ue, {
    present: o || c.open
  }, c.modal ? /* @__PURE__ */ g(kl, P({}, r, {
    ref: t
  })) : /* @__PURE__ */ g(Rl, P({}, r, {
    ref: t
  })));
}), kl = /* @__PURE__ */ _((e, t) => {
  const n = ie(Qe, e.__scopeDialog), o = k(null), r = G(t, n.contentRef, o);
  return F(() => {
    const c = o.current;
    if (c)
      return un(c);
  }, []), /* @__PURE__ */ g(Pr, P({}, e, {
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
}), Rl = /* @__PURE__ */ _((e, t) => {
  const n = ie(Qe, e.__scopeDialog), o = k(!1), r = k(!1);
  return /* @__PURE__ */ g(Pr, P({}, e, {
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
}), Pr = /* @__PURE__ */ _((e, t) => {
  const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: c, ...i } = e, a = ie(Qe, n), s = k(null), l = G(t, s);
  return tn(), /* @__PURE__ */ g(Qt, null, /* @__PURE__ */ g(nn, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: c
  }, /* @__PURE__ */ g(en, P({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": yn(a.open)
  }, i, {
    ref: l,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
}), Al = "DialogTitle", Tl = /* @__PURE__ */ _((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ie(Al, n);
  return /* @__PURE__ */ g(V.h2, P({
    id: r.titleId
  }, o, {
    ref: t
  }));
}), Il = "DialogDescription", Fl = /* @__PURE__ */ _((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ie(Il, n);
  return /* @__PURE__ */ g(V.p, P({
    id: r.descriptionId
  }, o, {
    ref: t
  }));
}), Ll = "DialogClose", Bl = /* @__PURE__ */ _((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ie(Ll, n);
  return /* @__PURE__ */ g(V.button, P({
    type: "button"
  }, o, {
    ref: t,
    onClick: R(
      e.onClick,
      () => r.onOpenChange(!1)
    )
  }));
});
function yn(e) {
  return e ? "open" : "closed";
}
const Ul = El, Wl = _l, zl = Sl, _r = Nl, Or = Dl, Sr = Tl, Nr = Fl, jl = Bl, Kl = Ul, Vl = Wl, Hl = zl, Mr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  _r,
  {
    ref: n,
    className: X(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Mr.displayName = _r.displayName;
const Dr = C.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ N(Hl, { children: [
  /* @__PURE__ */ p(Mr, {}),
  /* @__PURE__ */ N(
    Or,
    {
      ref: o,
      className: X(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ N(jl, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ p(pl, { className: "h-4 w-4" }),
          /* @__PURE__ */ p("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Dr.displayName = Or.displayName;
const Gl = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Sr,
  {
    ref: n,
    className: X(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Gl.displayName = Sr.displayName;
const Yl = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Nr,
  {
    ref: n,
    className: X("text-sm text-muted-foreground", e),
    ...t
  }
));
Yl.displayName = Nr.displayName;
const Yt = "horizontal", Xl = [
  "horizontal",
  "vertical"
], kr = /* @__PURE__ */ _((e, t) => {
  const { decorative: n, orientation: o = Yt, ...r } = e, c = Rr(o) ? o : Yt, a = n ? {
    role: "none"
  } : {
    "aria-orientation": c === "vertical" ? c : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ g(V.div, P({
    "data-orientation": c
  }, a, r, {
    ref: t
  }));
});
kr.propTypes = {
  orientation(e, t, n) {
    const o = e[t], r = String(o);
    return o && !Rr(o) ? new Error(Zl(r, n)) : null;
  }
};
function Zl(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Yt}\`.`;
}
function Rr(e) {
  return Xl.includes(e);
}
const Ar = kr, Be = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, r) => /* @__PURE__ */ p(
    Ar,
    {
      ref: r,
      decorative: n,
      orientation: t,
      className: X(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...o
    }
  )
);
Be.displayName = Ar.displayName;
const qn = ({ section: e }) => {
  const t = e.items.length === 0;
  if (!!e.title || !t)
    return /* @__PURE__ */ N(pe, { children: [
      /* @__PURE__ */ p("span", { children: e.title }),
      /* @__PURE__ */ p(Be, { className: "my-2" }),
      e.items && e.items.map(
        (o) => /* @__PURE__ */ N("a", { href: o.link, className: "flex items-center py-2 justify-start gap-2", children: [
          o.icon && o.icon({}),
          o.text
        ] })
      )
    ] });
}, Qn = ({ section: e }) => typeof e.state[e.activeState] == "string" ? /* @__PURE__ */ N(pe, { children: [
  /* @__PURE__ */ p(Be, {}),
  /* @__PURE__ */ p("div", { className: "w-full h-fit pt-5 flex items-center justify-center", children: /* @__PURE__ */ p("span", { className: "text-sm text-muted-foreground", children: e.state[e.activeState] }) })
] }) : /* @__PURE__ */ N(pe, { children: [
  /* @__PURE__ */ p(Be, { className: "my-2" }),
  e.state[e.activeState]
] }), Jn = ({ section: e }) => /* @__PURE__ */ N(pe, { children: [
  /* @__PURE__ */ p(Be, {}),
  /* @__PURE__ */ N("div", { className: "w-full h-fit flex flex-col my-4", children: [
    /* @__PURE__ */ p("span", { className: "text-base font-medium mb-2", children: "Проекты" }),
    e.projects && e.projects.map(
      (t) => /* @__PURE__ */ p(ne, { asChild: !0, variant: "ghost", children: /* @__PURE__ */ N("a", { href: t.link, className: "flex px-0 items-center justify-between w-full", children: [
        /* @__PURE__ */ p("span", { className: "text-base", children: t.name }),
        /* @__PURE__ */ p(io, { size: 18, className: "ml-auto" })
      ] }) }, t.key + "-menu")
    )
  ] })
] }), eo = ({ section: e }) => /* @__PURE__ */ N(ne, { className: "gap-2 py-2", variant: "ghost", onClick: e.action && e.action, children: [
  /* @__PURE__ */ p(co, {}),
  "Выйти из профиля"
] }), to = ({ description: e, displayName: t }) => /* @__PURE__ */ N("div", { className: "w-full h-fit pb-4 flex flex-col justify-start", children: [
  /* @__PURE__ */ p("span", { className: "text-lg font-semibold text-accent-foreground", children: t }),
  /* @__PURE__ */ p("span", { className: "text-sm font-normal text-muted-foreground", children: e })
] }), no = ({ loginLink: e = "https://darkmaterial.space" }) => {
  const t = "https://auth.darkmaterial.space/login?continue=", n = "https://auth.darkmaterial.space/signup?continue=", o = `${t}${e}`, r = `${n}${e}`;
  return /* @__PURE__ */ N("div", { className: "w-full h-fit flex flex-col gap-2 mb-4", children: [
    /* @__PURE__ */ p(ne, { asChild: !0, variant: "outline", children: /* @__PURE__ */ p("a", { href: o, children: "Войти" }) }),
    /* @__PURE__ */ p(ne, { asChild: !0, variant: "default", children: /* @__PURE__ */ p("a", { href: r, children: "Зарегистрироваться" }) })
  ] });
}, ql = ({ user: e, loginLink: t = "https://darkmaterial.space", menuMap: n = xn }) => /* @__PURE__ */ N(Kl, { children: [
  /* @__PURE__ */ p(Vl, { asChild: !0, children: /* @__PURE__ */ p("div", { className: "w-9 h-9 rounded-full border shrink-0 bg-background flex items-center justify-center", children: /* @__PURE__ */ p(Vr, { size: 20 }) }) }),
  /* @__PURE__ */ p(Dr, { className: "rounded-none w-full h-full", children: n && n.map((o, r) => o.type === "user" ? e ? /* @__PURE__ */ p(
    to,
    {
      displayName: e.displayName || "Пользователь",
      description: e.email || "Не указано"
    },
    r + "mobile-item-no-wrapper"
  ) : /* @__PURE__ */ p(no, { loginLink: t }, r + "mobile-item-no-wrapper") : o.type === "links" ? /* @__PURE__ */ p(qn, { section: o }, r + "mobile-item-no-wrapper") : o.type === "projects" ? /* @__PURE__ */ p(Jn, { section: o }, r + "mobile-item-no-wrapper") : o.type === "membership" ? /* @__PURE__ */ p(Qn, { section: o }, r + "mobile-item-no-wrapper") : o.type === "sign-out" && e ? /* @__PURE__ */ p(eo, { section: o }, r + "mobile-item-no-wrapper") : o.type === "wrapper" ? /* @__PURE__ */ p("div", { className: o.className || "", children: o.items && o.items.map((c, i) => {
    if (c.type === "user")
      return e ? /* @__PURE__ */ p(
        to,
        {
          displayName: e.displayName || "Пользователь",
          description: e.email || "Не указано"
        },
        r + "-" + i + "mobile-item-with-wrapper"
      ) : /* @__PURE__ */ p(no, { loginLink: t }, r + "mobile-item-no-wrapper");
    if (c.type === "links")
      return /* @__PURE__ */ p(qn, { section: c }, r + "-" + i + "mobile-item-with-wrapper");
    if (c.type === "projects")
      return /* @__PURE__ */ p(Jn, { section: c }, r + "-" + i + "mobile-item-with-wrapper");
    if (c.type === "membership")
      return /* @__PURE__ */ p(Qn, { section: c }, r + "-" + i + "mobile-item-with-wrapper");
    if (c.type === "sign-out" && e)
      return /* @__PURE__ */ p(eo, { section: c }, r + "-" + i + "mobile-item-with-wrapper");
  }) }, r + "-mobile-item-wrapper") : null) })
] }), Dd = ({
  user: e,
  size: t = 36,
  loginLink: n = "https://darkmaterial.space",
  activeMenu: o = "desktop",
  buttonSize: r = "default",
  map: c = xn
}) => o === "desktop" ? /* @__PURE__ */ p(
  yl,
  {
    buttonSize: r,
    user: e,
    size: t,
    menuMap: c,
    loginLink: n
  }
) : /* @__PURE__ */ p(
  ql,
  {
    user: e,
    menuMap: c,
    loginLink: n
  }
), Ql = ({ notification: e }) => {
  const t = k(null), [n] = lc(t), { fromSeconds: o } = sc, r = o(e.createdAt);
  return F(() => {
    !e.isViewed && n && Lt.patch(e.receiver, e.doc_id, { isViewed: !0 });
  }, [e.isViewed, n]), /* @__PURE__ */ N("div", { ref: t, className: "w-full h-fit flex justify-between group cursor-pointer hover:bg-card transition-colors", children: [
    e.link ? /* @__PURE__ */ N("div", { className: "w-fit h-fit flex items-center relative", children: [
      /* @__PURE__ */ p(dc, { href: e.link, className: "absolute w-full h-full left-0 top-0" }),
      /* @__PURE__ */ p("div", { className: "p-4", children: /* @__PURE__ */ p("div", { className: "w-9 h-9 rounded-full bg-muted" }) }),
      /* @__PURE__ */ N("div", { className: "w-full h-fit flex flex-col py-4", children: [
        /* @__PURE__ */ p("span", { className: "text-sm", children: e.message }),
        /* @__PURE__ */ p("span", { className: "text-xs text-muted-foreground", children: r.setLocale("ru").toRelative() })
      ] })
    ] }) : /* @__PURE__ */ N("div", { className: "w-fit h-fit flex items-center", children: [
      /* @__PURE__ */ p("div", { className: "p-4", children: /* @__PURE__ */ p("div", { className: "w-9 h-9 rounded-full bg-muted" }) }),
      /* @__PURE__ */ N("div", { className: "w-full h-fit flex flex-col py-4", children: [
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
        onClick: () => Lt.delete(e.receiver, e.doc_id),
        children: /* @__PURE__ */ p(Hr, {})
      }
    ) })
  ] });
}, Jl = oo(Ql), ed = (
  // process.env.NEXT_PUBLIC_API_HOST_PROD as string
  process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_API_HOST_DEV : process.env.NEXT_PUBLIC_API_HOST_PROD
), kd = ({ auth: e }) => {
  const [t, n] = L(!1), [o] = ac(e), [r, c] = L([]), i = r.filter((s) => !s.isViewed), a = () => {
    r.length && o && r.forEach(
      (s) => Lt.delete(o.uid, s.doc_id)
    );
  };
  return F(() => {
    const s = uc(ed);
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
  }, [o == null ? void 0 : o.uid]), !o || !e ? null : /* @__PURE__ */ N(Ko, { open: o ? t : !1, onOpenChange: (s) => n(s), children: [
    /* @__PURE__ */ N(Vo, { className: "relative w-9 h-9 rounded-full flex items-center justify-center border bg-background", children: [
      i.length !== 0 && /* @__PURE__ */ p("div", { className: "absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-primary" }),
      /* @__PURE__ */ p(Zr, { size: 16 })
    ] }),
    /* @__PURE__ */ N(mn, { className: "w-96 p-0 flex flex-col bg-background", children: [
      /* @__PURE__ */ p("div", { className: "w-full border-b p-3 flex items-center", children: /* @__PURE__ */ p("div", { className: "w-fit h-fit flex items-center gap-4", children: /* @__PURE__ */ p("span", { className: "text-sm text-muted-foreground", children: "Входящие" }) }) }),
      /* @__PURE__ */ p("div", { className: "w-full h-full flex flex-col", children: r.length ? r.map(
        (s, l) => /* @__PURE__ */ N(pe, { children: [
          /* @__PURE__ */ p(Jl, { notification: s }, s.doc_id),
          l !== r.length - 1 && /* @__PURE__ */ p(Be, {}, s.doc_id + "-separator")
        ] })
      ) : /* @__PURE__ */ p("div", { className: "w-full h-64 flex items-center justify-center", children: /* @__PURE__ */ p("span", { className: "text-center text-sm text-muted-foreground", children: "Нет новых уведомлений" }) }) }),
      /* @__PURE__ */ p("div", { className: "w-full h-fit p-2 border-t flex items-center justify-center", children: /* @__PURE__ */ p(ne, { size: "sm", onClick: a, variant: "ghost", children: "Очистить" }) })
    ] })
  ] });
}, td = ({ index: e, height: t, width: n }) => {
  const o = _e.randomNum(0, 10), r = _e.randomNum(0, 2), c = _e.randomNum(1, 3), i = _e.randomNum(1, 3), a = [
    { min: 0.25, max: 0.5 },
    { min: 0.5, max: 0.7 },
    { min: 0.6, max: 1 }
  ];
  return /* @__PURE__ */ p(
    fc.div,
    {
      initial: { opacity: a[r].min },
      animate: { opacity: a[r].max },
      transition: { repeat: 1 / 0, repeatType: "mirror", duration: c, delay: o },
      style: {
        width: `${i}px`,
        height: `${i}px`,
        top: _e.randomNum(0 + 10, t - 10),
        left: _e.randomNum(0 + 10, n - 10)
      },
      className: "absolute w-0.5 h-0.5 rounded-full bg-primary"
    },
    "star-" + e
  );
}, Rd = ({ starsCount: e = 50 }) => {
  const t = Ve(() => Array.from({ length: e }).map((l, u) => u), []), n = k(null), [o, r] = L(0), [c, i] = L(0), [a, s] = L(!1);
  return F(() => {
    const l = n.current;
    if (l) {
      const { offsetWidth: u, offsetHeight: d } = l;
      r(u), i(d), s(!0);
    }
  }, [n]), /* @__PURE__ */ p("div", { ref: n, className: X(
    a ? "opacity-100" : "opacity-0",
    "absolute w-full h-full z-[-1]"
  ), children: t.map(
    (l) => /* @__PURE__ */ p(td, { width: o, height: c, index: l }, "star-" + l + "-" + _e.generateId(6))
  ) });
}, nd = ({ onSelect: e, isCurrent: t = !1, isSelected: n = !1, uid: o, noBorder: r = !1 }) => {
  const [c, i] = L(null);
  return F(() => {
    cc.byId.short(o).then((a) => i(a));
  }, [o]), c ? /* @__PURE__ */ N(
    "div",
    {
      onClick: () => c && e && e(c),
      className: X(
        r ? "border-b-0" : "border-b",
        "w-full p-3 flex items-center gap-2 hover:bg-card transition-colors cursor-pointer"
      ),
      children: [
        /* @__PURE__ */ N("div", { className: "w-10 aspect-square relative flex items-center justify-center", children: [
          t && /* @__PURE__ */ p("div", { className: "absolute z-10 w-full h-full flex items-center justify-center rounded-full bg-green-600", children: /* @__PURE__ */ p(Gr, { className: "text-accent-foreground", size: 24 }) }),
          c.photoUrl ? /* @__PURE__ */ p(Xt, { className: "rounded-full", src: c.photoUrl, width: 40, height: 40, alt: "profile-photo" }) : /* @__PURE__ */ p("div", { className: "w-10 rounded-full aspect-square bg-muted" })
        ] }),
        /* @__PURE__ */ N("div", { className: "h-full flex flex-col justify-center", children: [
          /* @__PURE__ */ p("span", { className: "font-medium leading-6", children: c.displayName || "Пользователь" }),
          /* @__PURE__ */ p("span", { className: "text-xs text-muted-foreground", children: c.position || c.email })
        ] })
      ]
    }
  ) : null;
}, Ad = ({ onUser: e, members: t = [], user: n = null }) => {
  const [o, r] = L(!1), [c, i] = L(null), a = () => {
    c && e && e(c.uid);
  };
  return o ? null : /* @__PURE__ */ p("div", { className: "absolute md:!top-4 -top-2.5 md:!right-4 -right-6 md:!w-96 w-screen h-fit rounded-lg bg-background border z-50", children: /* @__PURE__ */ N("div", { className: "w-full h-fit p-4 space-y-2", children: [
    /* @__PURE__ */ N("div", { className: "flex items-center w-full justify-between", children: [
      /* @__PURE__ */ N("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ p(Xt, { src: ic("/dm/icons/dm-star-dark.svg"), width: 24, height: 24, alt: "star-logo" }),
        /* @__PURE__ */ p("span", { className: "text-base font-medium", children: "Darkmaterial" })
      ] }),
      /* @__PURE__ */ p(ne, { size: "icon", variant: "ghost", onClick: () => r(!0), children: /* @__PURE__ */ p(Yr, { size: 18 }) })
    ] }),
    /* @__PURE__ */ p("div", { className: "w-full flex flex-col", children: t.map(
      (s, l, u) => /* @__PURE__ */ p(
        nd,
        {
          uid: s,
          noBorder: l === u.length - 1,
          onSelect: i,
          isSelected: c ? s === c.uid : !1,
          isCurrent: n ? s === n.uid : !1
        },
        s + "-fast-pick"
      )
    ) }),
    c && /* @__PURE__ */ N(ne, { className: "w-full", onClick: a, children: [
      "Продолжить как ",
      c.nickname || c.displayName || "Пользователь"
    ] })
  ] }) });
};
export {
  yd as Avatar,
  Ta as ForwardRefEditor,
  kd as Notifications,
  Ad as OneClickAuth,
  Pd as ProjectsGrid,
  Rd as StarField,
  _d as Textarea,
  Dd as UserCircle,
  pc as projects
};
