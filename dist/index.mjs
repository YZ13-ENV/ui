"use client";
import { jsxs as A, jsx as h, Fragment as pe } from "react/jsx-runtime";
import zr from "next/image.js";
import * as C from "react";
import ie, { memo as no, useCallback as j, createContext as mt, useMemo as Ve, createElement as g, useContext as Xt, forwardRef as _, Children as Oe, isValidElement as ht, cloneElement as Zt, Fragment as qt, useEffect as F, useRef as D, useState as U, useLayoutEffect as Qt, useReducer as Kr } from "react";
import { BiUser as oo, BiCog as jr, BiLogOut as ro, BiMenu as Vr, BiTrashAlt as Hr } from "react-icons/bi/index.esm.js";
import { PiCrownSimpleBold as Gr, PiBellBold as Yr } from "react-icons/pi/index.esm.js";
import { MdGridView as Xr, MdOpenInNew as co } from "react-icons/md/index.esm.js";
import * as Zr from "react-dom";
import qr, { flushSync as io } from "react-dom";
import { clsx as Qr } from "clsx";
import { twMerge as Jr } from "tailwind-merge";
import { cva as ec } from "class-variance-authority";
import tc from "next/dynamic.js";
import { TiDocumentText as nc } from "react-icons/ti/index.esm.js";
import { notifications as Lt } from "api";
import { useAuthState as oc } from "react-firebase-hooks/auth/dist/index.esm.js";
import { DateTime as rc } from "luxon";
import { useInViewport as cc } from "ahooks";
import ic from "next/link.js";
import { io as ac } from "socket.io-client";
import { motion as sc } from "framer-motion";
const lc = [
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
    key: 6,
    name: "Team",
    link: "https://team.darkmaterial.space",
    themedIcon: {
      dark: "https://cdn.darkmaterial.space/dm/icons/team-dark.svg",
      light: "https://cdn.darkmaterial.space/dm/icons/team-dark.svg"
    },
    icon: "https://cdn.darkmaterial.space/dm/icons/team-dark.svg"
  }
], dc = ({ size: e = 24, isSubscriber: t = !1, src: n, className: o = "" }) => {
  const r = e * 0.5, c = r * 0.5;
  return /* @__PURE__ */ A(
    "div",
    {
      style: { width: `${e}px`, height: `${e}px` },
      className: `relative flex items-center justify-center overflow-visible border rounded-full shrink-0 bg-background border-inherit ${o}`,
      children: [
        n ? /* @__PURE__ */ h(zr, { src: n, className: "rounded-full !relative", fill: !0, alt: "@avatar" }) : /* @__PURE__ */ h(oo, { size: e / 2 }),
        t && /* @__PURE__ */ h("div", { style: {
          // maxWidth: '64px',
          // maxHeight: '64px',
          top: `-${r * 0.25}px`,
          left: `-${r * 0.25}px`,
          width: `${r}px`,
          height: `${r}px`
        }, className: "absolute flex items-center justify-center border-2 rounded-full text-muted-foreground border-background bg-muted", children: /* @__PURE__ */ h(Gr, { size: c }) })
      ]
    }
  );
}, gd = no(dc);
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
function uc(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function xt(...e) {
  return (t) => e.forEach(
    (n) => uc(n, t)
  );
}
function G(...e) {
  return j(xt(...e), e);
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
      const { scope: m, children: f, ...v } = d, p = (m == null ? void 0 : m[e][s]) || a, b = Ve(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ g(p.Provider, {
        value: b
      }, f);
    }
    function u(d, m) {
      const f = (m == null ? void 0 : m[e][s]) || a, v = Xt(f);
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
    fc(r, ...t)
  ];
}
function fc(...e) {
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
  const { children: n, ...o } = e, r = Oe.toArray(n), c = r.find(mc);
  if (c) {
    const i = c.props.children, a = r.map((s) => s === c ? Oe.count(i) > 1 ? Oe.only(null) : /* @__PURE__ */ ht(i) ? i.props.children : null : s);
    return /* @__PURE__ */ g(Bt, P({}, o, {
      ref: t
    }), /* @__PURE__ */ ht(i) ? /* @__PURE__ */ Zt(i, void 0, a) : null);
  }
  return /* @__PURE__ */ g(Bt, P({}, o, {
    ref: t
  }), n);
});
xe.displayName = "Slot";
const Bt = /* @__PURE__ */ _((e, t) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ ht(n) ? /* @__PURE__ */ Zt(n, {
    ...hc(o, n.props),
    ref: t ? xt(t, n.ref) : n.ref
  }) : Oe.count(n) > 1 ? Oe.only(null) : null;
});
Bt.displayName = "SlotClone";
const pc = ({ children: e }) => /* @__PURE__ */ g(qt, null, e);
function mc(e) {
  return /* @__PURE__ */ ht(e) && e.type === pc;
}
function hc(e, t) {
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
const vc = [
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
], V = vc.reduce((e, t) => {
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
function ao(e, t) {
  e && io(
    () => e.dispatchEvent(t)
  );
}
function se(e) {
  const t = D(e);
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
function gc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = se(e);
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
const Ut = "dismissableLayer.update", bc = "dismissableLayer.pointerDownOutside", $c = "dismissableLayer.focusOutside";
let Cn;
const wc = /* @__PURE__ */ mt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Jt = /* @__PURE__ */ _((e, t) => {
  var n;
  const { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: r, onPointerDownOutside: c, onFocusOutside: i, onInteractOutside: a, onDismiss: s, ...l } = e, u = Xt(wc), [d, m] = U(null), f = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, v] = U({}), p = G(
    t,
    (S) => m(S)
  ), b = Array.from(u.layers), [$] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = b.indexOf($), y = d ? b.indexOf(d) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, E = y >= w, N = xc((S) => {
    const k = S.target, W = [
      ...u.branches
    ].some(
      (z) => z.contains(k)
    );
    !E || W || (c == null || c(S), a == null || a(S), S.defaultPrevented || s == null || s());
  }, f), O = yc((S) => {
    const k = S.target;
    [
      ...u.branches
    ].some(
      (z) => z.contains(k)
    ) || (i == null || i(S), a == null || a(S), S.defaultPrevented || s == null || s());
  }, f);
  return gc((S) => {
    y === u.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && s && (S.preventDefault(), s()));
  }, f), F(() => {
    if (d)
      return o && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Cn = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), En(), () => {
        o && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Cn);
      };
  }, [
    d,
    f,
    o,
    u
  ]), F(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), En());
  }, [
    d,
    u
  ]), F(() => {
    const S = () => v({});
    return document.addEventListener(Ut, S), () => document.removeEventListener(Ut, S);
  }, []), /* @__PURE__ */ g(V.div, P({}, l, {
    ref: p,
    style: {
      pointerEvents: x ? E ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: R(e.onFocusCapture, O.onFocusCapture),
    onBlurCapture: R(e.onBlurCapture, O.onBlurCapture),
    onPointerDownCapture: R(e.onPointerDownCapture, N.onPointerDownCapture)
  }));
});
function xc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = se(e), o = D(!1), r = D(() => {
  });
  return F(() => {
    const c = (a) => {
      if (a.target && !o.current) {
        let l = function() {
          so(bc, n, s, {
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
function yc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = se(e), o = D(!1);
  return F(() => {
    const r = (c) => {
      c.target && !o.current && so($c, n, {
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
function En() {
  const e = new CustomEvent(Ut);
  document.dispatchEvent(e);
}
function so(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, c = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, {
    once: !0
  }), o ? ao(r, c) : r.dispatchEvent(c);
}
let Mt = 0;
function en() {
  F(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Pn()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Pn()), Mt++, () => {
      Mt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (o) => o.remove()
      ), Mt--;
    };
  }, []);
}
function Pn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Dt = "focusScope.autoFocusOnMount", Rt = "focusScope.autoFocusOnUnmount", _n = {
  bubbles: !1,
  cancelable: !0
}, tn = /* @__PURE__ */ _((e, t) => {
  const { loop: n = !1, trapped: o = !1, onMountAutoFocus: r, onUnmountAutoFocus: c, ...i } = e, [a, s] = U(null), l = se(r), u = se(c), d = D(null), m = G(
    t,
    (p) => s(p)
  ), f = D({
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
      let p = function(y) {
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
      document.addEventListener("focusin", p), document.addEventListener("focusout", b);
      const w = new MutationObserver($);
      return a && w.observe(a, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [
    o,
    a,
    f.paused
  ]), F(() => {
    if (a) {
      Sn.add(f);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const $ = new CustomEvent(Dt, _n);
        a.addEventListener(Dt, l), a.dispatchEvent($), $.defaultPrevented || (Cc(Sc(lo(a)), {
          select: !0
        }), document.activeElement === p && we(a));
      }
      return () => {
        a.removeEventListener(Dt, l), setTimeout(() => {
          const $ = new CustomEvent(Rt, _n);
          a.addEventListener(Rt, u), a.dispatchEvent($), $.defaultPrevented || we(p ?? document.body, {
            select: !0
          }), a.removeEventListener(Rt, u), Sn.remove(f);
        }, 0);
      };
    }
  }, [
    a,
    l,
    u,
    f
  ]);
  const v = j((p) => {
    if (!n && !o || f.paused)
      return;
    const b = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, $ = document.activeElement;
    if (b && $) {
      const w = p.currentTarget, [y, x] = Ec(w);
      y && x ? !p.shiftKey && $ === x ? (p.preventDefault(), n && we(y, {
        select: !0
      })) : p.shiftKey && $ === y && (p.preventDefault(), n && we(x, {
        select: !0
      })) : $ === w && p.preventDefault();
    }
  }, [
    n,
    o,
    f.paused
  ]);
  return /* @__PURE__ */ g(V.div, P({
    tabIndex: -1
  }, i, {
    ref: m,
    onKeyDown: v
  }));
});
function Cc(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (we(o, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Ec(e) {
  const t = lo(e), n = On(t, e), o = On(t.reverse(), e);
  return [
    n,
    o
  ];
}
function lo(e) {
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
function On(e, t) {
  for (const n of e)
    if (!Pc(n, {
      upTo: t
    }))
      return n;
}
function Pc(e, { upTo: t }) {
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
function _c(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function we(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && _c(e) && t && e.select();
  }
}
const Sn = Oc();
function Oc() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Nn(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Nn(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Nn(e, t) {
  const n = [
    ...e
  ], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Sc(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Fe = globalThis != null && globalThis.document ? Qt : () => {
}, Nc = C["useId".toString()] || (() => {
});
let Mc = 0;
function Se(e) {
  const [t, n] = C.useState(Nc());
  return Fe(() => {
    e || n(
      (o) => o ?? String(Mc++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Dc = ["top", "right", "bottom", "left"], ye = Math.min, J = Math.max, vt = Math.round, rt = Math.floor, Ce = (e) => ({
  x: e,
  y: e
}), Rc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ac = {
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
function nn(e) {
  return e === "x" ? "y" : "x";
}
function on(e) {
  return e === "y" ? "height" : "width";
}
function We(e) {
  return ["top", "bottom"].includes(he(e)) ? "y" : "x";
}
function rn(e) {
  return nn(We(e));
}
function Tc(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ue(e), r = rn(e), c = on(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (i = gt(i)), [i, gt(i)];
}
function kc(e) {
  const t = gt(e);
  return [zt(e), t, zt(t)];
}
function zt(e) {
  return e.replace(/start|end/g, (t) => Ac[t]);
}
function Ic(e, t, n) {
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
function Fc(e, t, n, o) {
  const r = Ue(e);
  let c = Ic(he(e), n === "start", o);
  return r && (c = c.map((i) => i + "-" + r), t && (c = c.concat(c.map(zt)))), c;
}
function gt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Rc[t]);
}
function Lc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function uo(e) {
  return typeof e != "number" ? Lc(e) : {
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
function Mn(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const c = We(t), i = rn(t), a = on(i), s = he(t), l = c === "y", u = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, m = o[a] / 2 - r[a] / 2;
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
      f[i] -= m * (n && l ? -1 : 1);
      break;
    case "end":
      f[i] += m * (n && l ? -1 : 1);
      break;
  }
  return f;
}
const Bc = async (e, t, n) => {
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
  } = Mn(l, o, s), m = o, f = {}, v = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: b,
      fn: $
    } = a[p], {
      x: w,
      y,
      data: x,
      reset: E
    } = await $({
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
    if (u = w ?? u, d = y ?? d, f = {
      ...f,
      [b]: {
        ...f[b],
        ...x
      }
    }, E && v <= 50) {
      v++, typeof E == "object" && (E.placement && (m = E.placement), E.rects && (l = E.rects === !0 ? await i.getElementRects({
        reference: e,
        floating: t,
        strategy: r
      }) : E.rects), {
        x: u,
        y: d
      } = Mn(l, m, s)), p = -1;
      continue;
    }
  }
  return {
    x: u,
    y: d,
    placement: m,
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
    altBoundary: m = !1,
    padding: f = 0
  } = me(t, e), v = uo(f), b = a[m ? d === "floating" ? "reference" : "floating" : d], $ = bt(await c.getClippingRect({
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
const Uc = (e) => ({
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
    const d = uo(u), m = {
      x: n,
      y: o
    }, f = rn(r), v = on(f), p = await i.getDimensions(l), b = f === "y", $ = b ? "top" : "left", w = b ? "bottom" : "right", y = b ? "clientHeight" : "clientWidth", x = c.reference[v] + c.reference[f] - m[f] - c.floating[v], E = m[f] - c.reference[f], N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let O = N ? N[y] : 0;
    (!O || !await (i.isElement == null ? void 0 : i.isElement(N))) && (O = a.floating[y] || c.floating[v]);
    const S = x / 2 - E / 2, k = O / 2 - p[v] / 2 - 1, W = ye(d[$], k), z = ye(d[w], k), L = W, q = O - p[v] - z, T = O / 2 - p[v] / 2 + S, B = Wt(L, T, q), I = !s.arrow && Ue(r) != null && T != B && c.reference[v] / 2 - (T < L ? W : z) - p[v] / 2 < 0, H = I ? T < L ? T - L : T - q : 0;
    return {
      [f]: m[f] + H,
      data: {
        [f]: B,
        centerOffset: T - B - H,
        ...I && {
          alignmentOffset: H
        }
      },
      reset: I
    };
  }
}), Wc = function(e) {
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
        fallbackAxisSideDirection: v = "none",
        flipAlignment: p = !0,
        ...b
      } = me(e, t);
      if ((n = c.arrow) != null && n.alignmentOffset)
        return {};
      const $ = he(r), w = he(a) === a, y = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), x = m || (w || !p ? [gt(a)] : kc(a));
      !m && v !== "none" && x.push(...Fc(a, p, v, y));
      const E = [a, ...x], N = await He(t, b), O = [];
      let S = ((o = c.flip) == null ? void 0 : o.overflows) || [];
      if (u && O.push(N[$]), d) {
        const L = Tc(r, i, y);
        O.push(N[L[0]], N[L[1]]);
      }
      if (S = [...S, {
        placement: r,
        overflows: O
      }], !O.every((L) => L <= 0)) {
        var k, W;
        const L = (((k = c.flip) == null ? void 0 : k.index) || 0) + 1, q = E[L];
        if (q)
          return {
            data: {
              index: L,
              overflows: S
            },
            reset: {
              placement: q
            }
          };
        let T = (W = S.filter((B) => B.overflows[0] <= 0).sort((B, I) => B.overflows[1] - I.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!T)
          switch (f) {
            case "bestFit": {
              var z;
              const B = (z = S.map((I) => [I.placement, I.overflows.filter((H) => H > 0).reduce((H, Y) => H + Y, 0)]).sort((I, H) => I[1] - H[1])[0]) == null ? void 0 : z[0];
              B && (T = B);
              break;
            }
            case "initialPlacement":
              T = a;
              break;
          }
        if (r !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
function Dn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Rn(e) {
  return Dc.some((t) => e[t] >= 0);
}
const zc = function(e) {
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
          }), i = Dn(c, n.reference);
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
          }), i = Dn(c, n.floating);
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
async function Kc(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, c = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = he(n), a = Ue(n), s = We(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = c && s ? -1 : 1, d = me(t, e);
  let {
    mainAxis: m,
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
    y: m * l
  } : {
    x: m * l,
    y: f * u
  };
}
const jc = function(e) {
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
      } = t, s = await Kc(t, e);
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
}, Vc = function(e) {
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
      }, u = await He(t, s), d = We(he(r)), m = nn(d);
      let f = l[m], v = l[d];
      if (c) {
        const b = m === "y" ? "top" : "left", $ = m === "y" ? "bottom" : "right", w = f + u[b], y = f - u[$];
        f = Wt(w, f, y);
      }
      if (i) {
        const b = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", w = v + u[b], y = v - u[$];
        v = Wt(w, v, y);
      }
      const p = a.fn({
        ...t,
        [m]: f,
        [d]: v
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
}, Hc = function(e) {
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
      }, d = We(r), m = nn(d);
      let f = u[m], v = u[d];
      const p = me(a, t), b = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (s) {
        const y = m === "y" ? "height" : "width", x = c.reference[m] - c.floating[y] + b.mainAxis, E = c.reference[m] + c.reference[y] - b.mainAxis;
        f < x ? f = x : f > E && (f = E);
      }
      if (l) {
        var $, w;
        const y = m === "y" ? "width" : "height", x = ["top", "left"].includes(he(r)), E = c.reference[d] - c.floating[y] + (x && (($ = i.offset) == null ? void 0 : $[d]) || 0) + (x ? 0 : b.crossAxis), N = c.reference[d] + c.reference[y] + (x ? 0 : ((w = i.offset) == null ? void 0 : w[d]) || 0) - (x ? b.crossAxis : 0);
        v < E ? v = E : v > N && (v = N);
      }
      return {
        [m]: f,
        [d]: v
      };
    }
  };
}, Gc = function(e) {
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
        width: m,
        height: f
      } = o.floating;
      let v, p;
      l === "top" || l === "bottom" ? (v = l, p = u === (await (r.isRTL == null ? void 0 : r.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (p = l, v = u === "end" ? "top" : "bottom");
      const b = f - s[v], $ = m - s[p], w = !t.middlewareData.shift;
      let y = b, x = $;
      if (d) {
        const N = m - s.left - s.right;
        x = u || w ? ye($, N) : N;
      } else {
        const N = f - s.top - s.bottom;
        y = u || w ? ye(b, N) : N;
      }
      if (w && !u) {
        const N = J(s.left, 0), O = J(s.right, 0), S = J(s.top, 0), k = J(s.bottom, 0);
        d ? x = m - 2 * (N !== 0 || O !== 0 ? N + O : J(s.left, s.right)) : y = f - 2 * (S !== 0 || k !== 0 ? S + k : J(s.top, s.bottom));
      }
      await i({
        ...t,
        availableWidth: x,
        availableHeight: y
      });
      const E = await r.getDimensions(c.floating);
      return m !== E.width || f !== E.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ee(e) {
  return fo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ee(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ge(e) {
  var t;
  return (t = (fo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function fo(e) {
  return e instanceof Node || e instanceof ee(e).Node;
}
function ve(e) {
  return e instanceof Element || e instanceof ee(e).Element;
}
function le(e) {
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
function Yc(e) {
  return ["table", "td", "th"].includes(Ee(e));
}
function cn(e) {
  const t = an(), n = te(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Xc(e) {
  let t = Le(e);
  for (; le(t) && !yt(t); ) {
    if (cn(t))
      return t;
    t = Le(t);
  }
  return null;
}
function an() {
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
function po(e) {
  const t = Le(e);
  return yt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : le(t) && Je(t) ? t : po(t);
}
function Ge(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = po(e), c = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = ee(r);
  return c ? t.concat(i, i.visualViewport || [], Je(r) ? r : [], i.frameElement && n ? Ge(i.frameElement) : []) : t.concat(r, Ge(r, [], n));
}
function mo(e) {
  const t = te(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = le(e), c = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, a = vt(n) !== c || vt(o) !== i;
  return a && (n = c, o = i), {
    width: n,
    height: o,
    $: a
  };
}
function sn(e) {
  return ve(e) ? e : e.contextElement;
}
function Ie(e) {
  const t = sn(e);
  if (!le(t))
    return Ce(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: c
  } = mo(t);
  let i = (c ? vt(n.width) : n.width) / o, a = (c ? vt(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Zc = /* @__PURE__ */ Ce(0);
function ho(e) {
  const t = ee(e);
  return !an() || !t.visualViewport ? Zc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function qc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ee(e) ? !1 : t;
}
function Ne(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), c = sn(e);
  let i = Ce(1);
  t && (o ? ve(o) && (i = Ie(o)) : i = Ie(e));
  const a = qc(c, n, o) ? ho(c) : Ce(0);
  let s = (r.left + a.x) / i.x, l = (r.top + a.y) / i.y, u = r.width / i.x, d = r.height / i.y;
  if (c) {
    const m = ee(c), f = o && ve(o) ? ee(o) : o;
    let v = m.frameElement;
    for (; v && o && f !== m; ) {
      const p = Ie(v), b = v.getBoundingClientRect(), $ = te(v), w = b.left + (v.clientLeft + parseFloat($.paddingLeft)) * p.x, y = b.top + (v.clientTop + parseFloat($.paddingTop)) * p.y;
      s *= p.x, l *= p.y, u *= p.x, d *= p.y, s += w, l += y, v = ee(v).frameElement;
    }
  }
  return bt({
    width: u,
    height: d,
    x: s,
    y: l
  });
}
function Qc(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const r = le(n), c = ge(n);
  if (n === c)
    return t;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Ce(1);
  const s = Ce(0);
  if ((r || !r && o !== "fixed") && ((Ee(n) !== "body" || Je(c)) && (i = Ct(n)), le(n))) {
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
function Jc(e) {
  return Array.from(e.getClientRects());
}
function vo(e) {
  return Ne(ge(e)).left + Ct(e).scrollLeft;
}
function ei(e) {
  const t = ge(e), n = Ct(e), o = e.ownerDocument.body, r = J(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), c = J(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + vo(e);
  const a = -n.scrollTop;
  return te(o).direction === "rtl" && (i += J(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: c,
    x: i,
    y: a
  };
}
function ti(e, t) {
  const n = ee(e), o = ge(e), r = n.visualViewport;
  let c = o.clientWidth, i = o.clientHeight, a = 0, s = 0;
  if (r) {
    c = r.width, i = r.height;
    const l = an();
    (!l || l && t === "fixed") && (a = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: c,
    height: i,
    x: a,
    y: s
  };
}
function ni(e, t) {
  const n = Ne(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, c = le(e) ? Ie(e) : Ce(1), i = e.clientWidth * c.x, a = e.clientHeight * c.y, s = r * c.x, l = o * c.y;
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
    o = ti(e, n);
  else if (t === "document")
    o = ei(ge(e));
  else if (ve(t))
    o = ni(t, n);
  else {
    const r = ho(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return bt(o);
}
function go(e, t) {
  const n = Le(e);
  return n === t || !ve(n) || yt(n) ? !1 : te(n).position === "fixed" || go(n, t);
}
function oi(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Ge(e, [], !1).filter((a) => ve(a) && Ee(a) !== "body"), r = null;
  const c = te(e).position === "fixed";
  let i = c ? Le(e) : e;
  for (; ve(i) && !yt(i); ) {
    const a = te(i), s = cn(i);
    !s && a.position === "fixed" && (r = null), (c ? !s && !r : !s && a.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Je(i) && !s && go(e, i)) ? o = o.filter((u) => u !== i) : r = a, i = Le(i);
  }
  return t.set(e, o), o;
}
function ri(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? oi(t, this._c) : [].concat(n), o], a = i[0], s = i.reduce((l, u) => {
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
function ci(e) {
  const {
    width: t,
    height: n
  } = mo(e);
  return {
    width: t,
    height: n
  };
}
function ii(e, t, n) {
  const o = le(t), r = ge(t), c = n === "fixed", i = Ne(e, !0, c, t);
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
      r && (s.x = vo(r));
  return {
    x: i.left + a.scrollLeft - s.x,
    y: i.top + a.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function kn(e, t) {
  return !le(e) || te(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function bo(e, t) {
  const n = ee(e);
  if (!le(e))
    return n;
  let o = kn(e, t);
  for (; o && Yc(o) && te(o).position === "static"; )
    o = kn(o, t);
  return o && (Ee(o) === "html" || Ee(o) === "body" && te(o).position === "static" && !cn(o)) ? n : o || Xc(e) || n;
}
const ai = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: o
  } = e;
  const r = this.getOffsetParent || bo, c = this.getDimensions;
  return {
    reference: ii(t, await r(n), o),
    floating: {
      x: 0,
      y: 0,
      ...await c(n)
    }
  };
};
function si(e) {
  return te(e).direction === "rtl";
}
const li = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Qc,
  getDocumentElement: ge,
  getClippingRect: ri,
  getOffsetParent: bo,
  getElementRects: ai,
  getClientRects: Jc,
  getDimensions: ci,
  getScale: Ie,
  isElement: ve,
  isRTL: si
};
function di(e, t) {
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
      height: m
    } = e.getBoundingClientRect();
    if (a || t(), !d || !m)
      return;
    const f = rt(u), v = rt(r.clientWidth - (l + d)), p = rt(r.clientHeight - (u + m)), b = rt(l), w = {
      rootMargin: -f + "px " + -v + "px " + -p + "px " + -b + "px",
      threshold: J(0, ye(1, s)) || 1
    };
    let y = !0;
    function x(E) {
      const N = E[0].intersectionRatio;
      if (N !== s) {
        if (!y)
          return i();
        N ? i(!1, N) : o = setTimeout(() => {
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
function ui(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: c = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = o, l = sn(e), u = r || c ? [...l ? Ge(l) : [], ...Ge(t)] : [];
  u.forEach(($) => {
    r && $.addEventListener("scroll", n, {
      passive: !0
    }), c && $.addEventListener("resize", n);
  });
  const d = l && a ? di(l, n) : null;
  let m = -1, f = null;
  i && (f = new ResizeObserver(($) => {
    let [w] = $;
    w && w.target === l && f && (f.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      f && f.observe(t);
    })), n();
  }), l && !s && f.observe(l), f.observe(t));
  let v, p = s ? Ne(e) : null;
  s && b();
  function b() {
    const $ = Ne(e);
    p && ($.x !== p.x || $.y !== p.y || $.width !== p.width || $.height !== p.height) && n(), p = $, v = requestAnimationFrame(b);
  }
  return n(), () => {
    u.forEach(($) => {
      r && $.removeEventListener("scroll", n), c && $.removeEventListener("resize", n);
    }), d && d(), f && f.disconnect(), f = null, s && cancelAnimationFrame(v);
  };
}
const fi = Vc, pi = Wc, mi = Gc, hi = zc, In = Uc, vi = Hc, gi = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: li,
    ...n
  }, c = {
    ...r.platform,
    _c: o
  };
  return Bc(e, t, {
    ...r,
    platform: c
  });
}, bi = (e) => {
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
      return o && t(o) ? o.current != null ? In({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? In({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
};
var ut = typeof document < "u" ? Qt : F;
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
function $o(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fn(e, t) {
  const n = $o(e);
  return Math.round(t * n) / n;
}
function Ln(e) {
  const t = C.useRef(e);
  return ut(() => {
    t.current = e;
  }), t;
}
function $i(e) {
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
  }), [m, f] = C.useState(o);
  $t(m, o) || f(o);
  const [v, p] = C.useState(null), [b, $] = C.useState(null), w = C.useCallback((I) => {
    I != N.current && (N.current = I, p(I));
  }, [p]), y = C.useCallback((I) => {
    I !== O.current && (O.current = I, $(I));
  }, [$]), x = c || v, E = i || b, N = C.useRef(null), O = C.useRef(null), S = C.useRef(u), k = Ln(s), W = Ln(r), z = C.useCallback(() => {
    if (!N.current || !O.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: m
    };
    W.current && (I.platform = W.current), gi(N.current, O.current, I).then((H) => {
      const Y = {
        ...H,
        isPositioned: !0
      };
      L.current && !$t(S.current, Y) && (S.current = Y, Zr.flushSync(() => {
        d(Y);
      }));
    });
  }, [m, t, n, W]);
  ut(() => {
    l === !1 && S.current.isPositioned && (S.current.isPositioned = !1, d((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [l]);
  const L = C.useRef(!1);
  ut(() => (L.current = !0, () => {
    L.current = !1;
  }), []), ut(() => {
    if (x && (N.current = x), E && (O.current = E), x && E) {
      if (k.current)
        return k.current(x, E, z);
      z();
    }
  }, [x, E, z, k]);
  const q = C.useMemo(() => ({
    reference: N,
    floating: O,
    setReference: w,
    setFloating: y
  }), [w, y]), T = C.useMemo(() => ({
    reference: x,
    floating: E
  }), [x, E]), B = C.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return I;
    const H = Fn(T.floating, u.x), Y = Fn(T.floating, u.y);
    return a ? {
      ...I,
      transform: "translate(" + H + "px, " + Y + "px)",
      ...$o(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: H,
      top: Y
    };
  }, [n, a, T.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: z,
    refs: q,
    elements: T,
    floatingStyles: B
  }), [u, z, q, T, B]);
}
function wi(e) {
  const [t, n] = U(void 0);
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
const wo = "Popper", [xo, Et] = Me(wo), [xi, yo] = xo(wo), yi = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = U(null);
  return /* @__PURE__ */ g(xi, {
    scope: t,
    anchor: o,
    onAnchorChange: r
  }, n);
}, Ci = "PopperAnchor", Ei = /* @__PURE__ */ _((e, t) => {
  const { __scopePopper: n, virtualRef: o, ...r } = e, c = yo(Ci, n), i = D(null), a = G(t, i);
  return F(() => {
    c.onAnchorChange((o == null ? void 0 : o.current) || i.current);
  }), o ? null : /* @__PURE__ */ g(V.div, P({}, r, {
    ref: a
  }));
}), Co = "PopperContent", [Pi, bd] = xo(Co), _i = /* @__PURE__ */ _((e, t) => {
  var n, o, r, c, i, a, s, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: m = 0, align: f = "center", alignOffset: v = 0, arrowPadding: p = 0, avoidCollisions: b = !0, collisionBoundary: $ = [], collisionPadding: w = 0, sticky: y = "partial", hideWhenDetached: x = !1, updatePositionStrategy: E = "optimized", onPlaced: N, ...O } = e, S = yo(Co, u), [k, W] = U(null), z = G(
    t,
    (je) => W(je)
  ), [L, q] = U(null), T = wi(L), B = (n = T == null ? void 0 : T.width) !== null && n !== void 0 ? n : 0, I = (o = T == null ? void 0 : T.height) !== null && o !== void 0 ? o : 0, H = d + (f !== "center" ? "-" + f : ""), Y = typeof w == "number" ? w : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...w
  }, M = Array.isArray($) ? $ : [
    $
  ], K = M.length > 0, X = {
    padding: Y,
    boundary: M.filter(Oi),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: K
  }, { refs: fe, floatingStyles: be, placement: Ke, isPositioned: Pe, middlewareData: oe } = $i({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: H,
    whileElementsMounted: (...je) => ui(...je, {
      animationFrame: E === "always"
    }),
    elements: {
      reference: S.anchor
    },
    middleware: [
      jc({
        mainAxis: m + I,
        alignmentAxis: v
      }),
      b && fi({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? vi() : void 0,
        ...X
      }),
      b && pi({
        ...X
      }),
      mi({
        ...X,
        apply: ({ elements: je, rects: yn, availableWidth: Lr, availableHeight: Br }) => {
          const { width: Ur, height: Wr } = yn.reference, ot = je.floating.style;
          ot.setProperty("--radix-popper-available-width", `${Lr}px`), ot.setProperty("--radix-popper-available-height", `${Br}px`), ot.setProperty("--radix-popper-anchor-width", `${Ur}px`), ot.setProperty("--radix-popper-anchor-height", `${Wr}px`);
        }
      }),
      L && bi({
        element: L,
        padding: p
      }),
      Si({
        arrowWidth: B,
        arrowHeight: I
      }),
      x && hi({
        strategy: "referenceHidden",
        ...X
      })
    ]
  }), [$e, tt] = Eo(Ke), Q = se(N);
  Fe(() => {
    Pe && (Q == null || Q());
  }, [
    Pe,
    Q
  ]);
  const nt = (r = oe.arrow) === null || r === void 0 ? void 0 : r.x, Tr = (c = oe.arrow) === null || c === void 0 ? void 0 : c.y, kr = ((i = oe.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !== 0, [Ir, Fr] = U();
  return Fe(() => {
    k && Fr(window.getComputedStyle(k).zIndex);
  }, [
    k
  ]), /* @__PURE__ */ g("div", {
    ref: fe.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...be,
      transform: Pe ? be.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Ir,
      "--radix-popper-transform-origin": [
        (a = oe.transformOrigin) === null || a === void 0 ? void 0 : a.x,
        (s = oe.transformOrigin) === null || s === void 0 ? void 0 : s.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ g(Pi, {
    scope: u,
    placedSide: $e,
    onArrowChange: q,
    arrowX: nt,
    arrowY: Tr,
    shouldHideArrow: kr
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
      opacity: (l = oe.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function Oi(e) {
  return e !== null;
}
const Si = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, o, r, c, i;
    const { placement: a, rects: s, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, m = d ? 0 : e.arrowWidth, f = d ? 0 : e.arrowHeight, [v, p] = Eo(a), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[p], $ = ((o = (r = l.arrow) === null || r === void 0 ? void 0 : r.x) !== null && o !== void 0 ? o : 0) + m / 2, w = ((c = (i = l.arrow) === null || i === void 0 ? void 0 : i.y) !== null && c !== void 0 ? c : 0) + f / 2;
    let y = "", x = "";
    return v === "bottom" ? (y = d ? b : `${$}px`, x = `${-f}px`) : v === "top" ? (y = d ? b : `${$}px`, x = `${s.floating.height + f}px`) : v === "right" ? (y = `${-f}px`, x = d ? b : `${w}px`) : v === "left" && (y = `${s.floating.width + f}px`, x = d ? b : `${w}px`), {
      data: {
        x: y,
        y: x
      }
    };
  }
});
function Eo(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Po = yi, _o = Ei, Oo = _i, ln = /* @__PURE__ */ _((e, t) => {
  var n;
  const { container: o = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...r } = e;
  return o ? /* @__PURE__ */ qr.createPortal(/* @__PURE__ */ g(V.div, P({}, r, {
    ref: t
  })), o) : null;
});
function Ni(e, t) {
  return Kr((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const ue = (e) => {
  const { present: t, children: n } = e, o = Mi(t), r = typeof n == "function" ? n({
    present: o.isPresent
  }) : Oe.only(n), c = G(o.ref, r.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ Zt(r, {
    ref: c
  }) : null;
};
ue.displayName = "Presence";
function Mi(e) {
  const [t, n] = U(), o = D({}), r = D(e), c = D("none"), i = e ? "mounted" : "unmounted", [a, s] = Ni(i, {
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
      const m = c.current, f = ct(l);
      e ? s("MOUNT") : f === "none" || (l == null ? void 0 : l.display) === "none" ? s("UNMOUNT") : s(u && m !== f ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [
    e,
    s
  ]), Fe(() => {
    if (t) {
      const l = (d) => {
        const f = ct(o.current).includes(d.animationName);
        d.target === t && f && io(
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
  const [o, r] = Di({
    defaultProp: t,
    onChange: n
  }), c = e !== void 0, i = c ? e : o, a = se(n), s = j((l) => {
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
function Di({ defaultProp: e, onChange: t }) {
  const n = U(e), [o] = n, r = D(o), c = se(t);
  return F(() => {
    r.current !== o && (c(o), r.current = o);
  }, [
    o,
    r,
    c
  ]), n;
}
var Ri = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ae = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), at = {}, At = 0, So = function(e) {
  return e && (e.host || So(e.parentNode));
}, Ai = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = So(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ti = function(e, t, n, o) {
  var r = Ai(t, Array.isArray(e) ? e : [e]);
  at[n] || (at[n] = /* @__PURE__ */ new WeakMap());
  var c = at[n], i = [], a = /* @__PURE__ */ new Set(), s = new Set(r), l = function(d) {
    !d || a.has(d) || (a.add(d), l(d.parentNode));
  };
  r.forEach(l);
  var u = function(d) {
    !d || s.has(d) || Array.prototype.forEach.call(d.children, function(m) {
      if (a.has(m))
        u(m);
      else {
        var f = m.getAttribute(o), v = f !== null && f !== "false", p = (Ae.get(m) || 0) + 1, b = (c.get(m) || 0) + 1;
        Ae.set(m, p), c.set(m, b), i.push(m), p === 1 && v && it.set(m, !0), b === 1 && m.setAttribute(n, "true"), v || m.setAttribute(o, "true");
      }
    });
  };
  return u(t), a.clear(), At++, function() {
    i.forEach(function(d) {
      var m = Ae.get(d) - 1, f = c.get(d) - 1;
      Ae.set(d, m), c.set(d, f), m || (it.has(d) || d.removeAttribute(o), it.delete(d)), f || d.removeAttribute(n);
    }), At--, At || (Ae = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), at = {});
  };
}, dn = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = t || Ri(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), Ti(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, ae = function() {
  return ae = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var c in n)
        Object.prototype.hasOwnProperty.call(n, c) && (t[c] = n[c]);
    }
    return t;
  }, ae.apply(this, arguments);
};
function No(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function ki(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, c; o < r; o++)
      (c || !(o in t)) && (c || (c = Array.prototype.slice.call(t, 0, o)), c[o] = t[o]);
  return e.concat(c || Array.prototype.slice.call(t));
}
var ft = "right-scroll-bar-position", pt = "width-before-scroll-bar", Ii = "with-scroll-bars-hidden", Fi = "--removed-body-scroll-bar-size";
function Tt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Li(e, t) {
  var n = U(function() {
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
var Bn = /* @__PURE__ */ new WeakMap();
function Bi(e, t) {
  var n = Li(t || null, function(o) {
    return e.forEach(function(r) {
      return Tt(r, o);
    });
  });
  return C.useLayoutEffect(function() {
    var o = Bn.get(n);
    if (o) {
      var r = new Set(o), c = new Set(e), i = n.current;
      r.forEach(function(a) {
        c.has(a) || Tt(a, null);
      }), c.forEach(function(a) {
        r.has(a) || Tt(a, i);
      });
    }
    Bn.set(n, e);
  }, [e]), n;
}
function Ui(e) {
  return e;
}
function Wi(e, t) {
  t === void 0 && (t = Ui);
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
function zi(e) {
  e === void 0 && (e = {});
  var t = Wi(null);
  return t.options = ae({ async: !0, ssr: !1 }, e), t;
}
var Mo = function(e) {
  var t = e.sideCar, n = No(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return C.createElement(o, ae({}, n));
};
Mo.isSideCarExport = !0;
function Ki(e, t) {
  return e.useMedium(t), Mo;
}
var Do = zi(), kt = function() {
}, _t = C.forwardRef(function(e, t) {
  var n = C.useRef(null), o = C.useState({
    onScrollCapture: kt,
    onWheelCapture: kt,
    onTouchMoveCapture: kt
  }), r = o[0], c = o[1], i = e.forwardProps, a = e.children, s = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, m = e.sideCar, f = e.noIsolation, v = e.inert, p = e.allowPinchZoom, b = e.as, $ = b === void 0 ? "div" : b, w = No(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = m, x = Bi([n, t]), E = ae(ae({}, w), r);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(y, { sideCar: Do, removeScrollBar: l, shards: d, noIsolation: f, inert: v, setCallbacks: c, allowPinchZoom: !!p, lockRef: n }),
    i ? C.cloneElement(C.Children.only(a), ae(ae({}, E), { ref: x })) : C.createElement($, ae({}, E, { className: s, ref: x }), a)
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
var Un, ji = function() {
  if (Un)
    return Un;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Vi() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ji();
  return t && e.setAttribute("nonce", t), e;
}
function Hi(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Gi(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Yi = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Vi()) && (Hi(t, n), Gi(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Xi = function() {
  var e = Yi();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ro = function() {
  var e = Xi(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, Zi = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, It = function(e) {
  return parseInt(e || "", 10) || 0;
}, qi = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [It(n), It(o), It(r)];
}, Qi = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Zi;
  var t = qi(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, Ji = Ro(), ea = function(e, t, n, o) {
  var r = e.left, c = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Ii, ` {
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
    `).concat(Fi, ": ").concat(a, `px;
  }
`);
}, ta = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o, c = C.useMemo(function() {
    return Qi(r);
  }, [r]);
  return C.createElement(Ji, { styles: ea(c, !t, r, n ? "" : "!important") });
}, Kt = !1;
if (typeof window < "u")
  try {
    var st = Object.defineProperty({}, "passive", {
      get: function() {
        return Kt = !0, !0;
      }
    });
    window.addEventListener("test", st, st), window.removeEventListener("test", st, st);
  } catch {
    Kt = !1;
  }
var Te = Kt ? { passive: !1 } : !1, na = function(e) {
  return e.tagName === "TEXTAREA";
}, Ao = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !na(e) && n[t] === "visible")
  );
}, oa = function(e) {
  return Ao(e, "overflowY");
}, ra = function(e) {
  return Ao(e, "overflowX");
}, Wn = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = To(e, n);
    if (o) {
      var r = ko(e, n), c = r[1], i = r[2];
      if (c > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, ca = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, ia = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, To = function(e, t) {
  return e === "v" ? oa(t) : ra(t);
}, ko = function(e, t) {
  return e === "v" ? ca(t) : ia(t);
}, aa = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, sa = function(e, t, n, o, r) {
  var c = aa(e, window.getComputedStyle(t).direction), i = c * o, a = n.target, s = t.contains(a), l = !1, u = i > 0, d = 0, m = 0;
  do {
    var f = ko(e, a), v = f[0], p = f[1], b = f[2], $ = p - b - c * v;
    (v || $) && To(e, a) && (d += $, m += v), a = a.parentNode;
  } while (
    // portaled content
    !s && a !== document.body || // self content
    s && (t.contains(a) || t === a)
  );
  return (u && (r && d === 0 || !r && i > d) || !u && (r && m === 0 || !r && -i > m)) && (l = !0), l;
}, lt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, zn = function(e) {
  return [e.deltaX, e.deltaY];
}, Kn = function(e) {
  return e && "current" in e ? e.current : e;
}, la = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, da = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ua = 0, ke = [];
function fa(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), o = C.useRef(), r = C.useState(ua++)[0], c = C.useState(function() {
    return Ro();
  })[0], i = C.useRef(e);
  C.useEffect(function() {
    i.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var p = ki([e.lockRef.current], (e.shards || []).map(Kn), !0).filter(Boolean);
      return p.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), p.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = C.useCallback(function(p, b) {
    if ("touches" in p && p.touches.length === 2)
      return !i.current.allowPinchZoom;
    var $ = lt(p), w = n.current, y = "deltaX" in p ? p.deltaX : w[0] - $[0], x = "deltaY" in p ? p.deltaY : w[1] - $[1], E, N = p.target, O = Math.abs(y) > Math.abs(x) ? "h" : "v";
    if ("touches" in p && O === "h" && N.type === "range")
      return !1;
    var S = Wn(O, N);
    if (!S)
      return !0;
    if (S ? E = O : (E = O === "v" ? "h" : "v", S = Wn(O, N)), !S)
      return !1;
    if (!o.current && "changedTouches" in p && (y || x) && (o.current = E), !E)
      return !0;
    var k = o.current || E;
    return sa(k, b, p, k === "h" ? y : x, !0);
  }, []), s = C.useCallback(function(p) {
    var b = p;
    if (!(!ke.length || ke[ke.length - 1] !== c)) {
      var $ = "deltaY" in b ? zn(b) : lt(b), w = t.current.filter(function(E) {
        return E.name === b.type && E.target === b.target && la(E.delta, $);
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
  }, []), l = C.useCallback(function(p, b, $, w) {
    var y = { name: p, delta: b, target: $, should: w };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== y;
      });
    }, 1);
  }, []), u = C.useCallback(function(p) {
    n.current = lt(p), o.current = void 0;
  }, []), d = C.useCallback(function(p) {
    l(p.type, zn(p), p.target, a(p, e.lockRef.current));
  }, []), m = C.useCallback(function(p) {
    l(p.type, lt(p), p.target, a(p, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return ke.push(c), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", s, Te), document.addEventListener("touchmove", s, Te), document.addEventListener("touchstart", u, Te), function() {
      ke = ke.filter(function(p) {
        return p !== c;
      }), document.removeEventListener("wheel", s, Te), document.removeEventListener("touchmove", s, Te), document.removeEventListener("touchstart", u, Te);
    };
  }, []);
  var f = e.removeScrollBar, v = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    v ? C.createElement(c, { styles: da(r) }) : null,
    f ? C.createElement(ta, { gapMode: "margin" }) : null
  );
}
const pa = Ki(Do, fa);
var Io = C.forwardRef(function(e, t) {
  return C.createElement(_t, ae({}, e, { ref: t, sideCar: pa }));
});
Io.classNames = _t.classNames;
const un = Io, Fo = "Popover", [Lo, $d] = Me(Fo, [
  Et
]), fn = Et(), [ma, ze] = Lo(Fo), ha = (e) => {
  const { __scopePopover: t, children: n, open: o, defaultOpen: r, onOpenChange: c, modal: i = !1 } = e, a = fn(t), s = D(null), [l, u] = U(!1), [d = !1, m] = Pt({
    prop: o,
    defaultProp: r,
    onChange: c
  });
  return /* @__PURE__ */ g(Po, a, /* @__PURE__ */ g(ma, {
    scope: t,
    contentId: Se(),
    triggerRef: s,
    open: d,
    onOpenChange: m,
    onOpenToggle: j(
      () => m(
        (f) => !f
      ),
      [
        m
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
}, va = "PopoverTrigger", ga = /* @__PURE__ */ _((e, t) => {
  const { __scopePopover: n, ...o } = e, r = ze(va, n), c = fn(n), i = G(t, r.triggerRef), a = /* @__PURE__ */ g(V.button, P({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": Wo(r.open)
  }, o, {
    ref: i,
    onClick: R(e.onClick, r.onOpenToggle)
  }));
  return r.hasCustomAnchor ? a : /* @__PURE__ */ g(_o, P({
    asChild: !0
  }, c), a);
}), Bo = "PopoverPortal", [ba, $a] = Lo(Bo, {
  forceMount: void 0
}), wa = (e) => {
  const { __scopePopover: t, forceMount: n, children: o, container: r } = e, c = ze(Bo, t);
  return /* @__PURE__ */ g(ba, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ g(ue, {
    present: n || c.open
  }, /* @__PURE__ */ g(ln, {
    asChild: !0,
    container: r
  }, o)));
}, Ye = "PopoverContent", xa = /* @__PURE__ */ _((e, t) => {
  const n = $a(Ye, e.__scopePopover), { forceMount: o = n.forceMount, ...r } = e, c = ze(Ye, e.__scopePopover);
  return /* @__PURE__ */ g(ue, {
    present: o || c.open
  }, c.modal ? /* @__PURE__ */ g(ya, P({}, r, {
    ref: t
  })) : /* @__PURE__ */ g(Ca, P({}, r, {
    ref: t
  })));
}), ya = /* @__PURE__ */ _((e, t) => {
  const n = ze(Ye, e.__scopePopover), o = D(null), r = G(t, o), c = D(!1);
  return F(() => {
    const i = o.current;
    if (i)
      return dn(i);
  }, []), /* @__PURE__ */ g(un, {
    as: xe,
    allowPinchZoom: !0
  }, /* @__PURE__ */ g(Uo, P({}, e, {
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
}), Ca = /* @__PURE__ */ _((e, t) => {
  const n = ze(Ye, e.__scopePopover), o = D(!1), r = D(!1);
  return /* @__PURE__ */ g(Uo, P({}, e, {
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
}), Uo = /* @__PURE__ */ _((e, t) => {
  const { __scopePopover: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: c, disableOutsidePointerEvents: i, onEscapeKeyDown: a, onPointerDownOutside: s, onFocusOutside: l, onInteractOutside: u, ...d } = e, m = ze(Ye, n), f = fn(n);
  return en(), /* @__PURE__ */ g(tn, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: c
  }, /* @__PURE__ */ g(Jt, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onInteractOutside: u,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: l,
    onDismiss: () => m.onOpenChange(!1)
  }, /* @__PURE__ */ g(Oo, P({
    "data-state": Wo(m.open),
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
function Wo(e) {
  return e ? "open" : "closed";
}
const Ea = ha, Pa = ga, _a = wa, zo = xa;
function Z(...e) {
  return Jr(Qr(e));
}
const Ko = Ea, jo = Pa, pn = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...o }, r) => /* @__PURE__ */ h(_a, { children: /* @__PURE__ */ h(
  zo,
  {
    ref: r,
    align: t,
    sideOffset: n,
    className: Z(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...o
  }
) }));
pn.displayName = zo.displayName;
const Oa = ec(
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
), de = C.forwardRef(
  ({ className: e, variant: t, size: n, asChild: o = !1, ...r }, c) => /* @__PURE__ */ h(
    o ? xe : "button",
    {
      className: Z(Oa({ variant: t, size: n, className: e })),
      ref: c,
      ...r
    }
  )
);
de.displayName = "Button";
const Sa = (e) => e ? e.cookie.split("; ").map((r) => {
  const c = r.split("=");
  return { [c[0]]: c[1] };
}).reduce((r, c) => ({
  ...r,
  ...c
})) : null, wd = () => {
  const [e, t] = U(null), n = e ? e.theme : "dark";
  return F(() => {
    if (typeof document < "u") {
      const o = Sa(document);
      t(o);
    }
  }, [typeof document]), /* @__PURE__ */ A(Ko, { children: [
    /* @__PURE__ */ h(jo, { asChild: !0, className: "rounded-full border w-9 h-9 flex items-center bg-background justify-center", children: /* @__PURE__ */ h(de, { size: "icon", variant: "ghost", children: /* @__PURE__ */ h(Xr, { size: 20 }) }) }),
    /* @__PURE__ */ h(pn, { className: "projects-grid", children: lc.map(
      (o) => /* @__PURE__ */ A("a", { href: o.link, className: "w-full h-full flex flex-col items-center justify-center gap-2 rounded-md hover:bg-muted p-1", children: [
        /* @__PURE__ */ h("div", { className: "w-7 h-7 relative", children: /* @__PURE__ */ h("img", { src: o.themedIcon ? o.themedIcon[n] : o.icon, className: "w-full h-full", alt: "project-icon" }) }),
        /* @__PURE__ */ h("span", { className: "text-xs text-center", children: o.name })
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
}, Na = {
  resize: "none",
  outline: "none",
  display: "block",
  overflow: "hidden",
  backgroundColor: "transparent"
}, xd = (e) => {
  const t = D(null), n = (o) => {
    if (e.onChange && e.onChange(o), t.current) {
      t.current.style.height = "40px";
      const r = t.current.scrollHeight;
      t.current.style.height = r + "px";
    }
  };
  return Qt(() => {
    const o = t.current;
    if (e.value && o) {
      t.current.style.height = "40px";
      const r = t.current.scrollHeight;
      t.current.style.height = r + "px";
    }
  }, [e.value, t]), /* @__PURE__ */ h("textarea", { ...e, ref: t, onChange: n, style: { ...Na } });
}, Ma = tc(() => import("./markdown-e5d6ecc8.mjs"), {
  // Make sure we turn SSR off
  ssr: !1
}), Da = _(
  (e, t) => /* @__PURE__ */ h(Ma, { ...e, editorRef: t })
);
Da.displayName = "ForwardRefEditor";
function Vo(e) {
  const t = e + "CollectionProvider", [n, o] = Me(t), [r, c] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), i = (f) => {
    const { scope: v, children: p } = f, b = ie.useRef(null), $ = ie.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ ie.createElement(r, {
      scope: v,
      itemMap: $,
      collectionRef: b
    }, p);
  }, a = e + "CollectionSlot", s = /* @__PURE__ */ ie.forwardRef((f, v) => {
    const { scope: p, children: b } = f, $ = c(a, p), w = G(v, $.collectionRef);
    return /* @__PURE__ */ ie.createElement(xe, {
      ref: w
    }, b);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ ie.forwardRef((f, v) => {
    const { scope: p, children: b, ...$ } = f, w = ie.useRef(null), y = G(v, w), x = c(l, p);
    return ie.useEffect(() => (x.itemMap.set(w, {
      ref: w,
      ...$
    }), () => void x.itemMap.delete(w))), /* @__PURE__ */ ie.createElement(xe, {
      [u]: "",
      ref: y
    }, b);
  });
  function m(f) {
    const v = c(e + "CollectionConsumer", f);
    return ie.useCallback(() => {
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
    m,
    o
  ];
}
const Ra = /* @__PURE__ */ mt(void 0);
function Ho(e) {
  const t = Xt(Ra);
  return e || t || "ltr";
}
const Ft = "rovingFocusGroup.onEntryFocus", Aa = {
  bubbles: !1,
  cancelable: !0
}, mn = "RovingFocusGroup", [jt, Go, Ta] = Vo(mn), [ka, Yo] = Me(mn, [
  Ta
]), [Ia, Fa] = ka(mn), La = /* @__PURE__ */ _((e, t) => /* @__PURE__ */ g(jt.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ g(jt.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ g(Ba, P({}, e, {
  ref: t
}))))), Ba = /* @__PURE__ */ _((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: o, loop: r = !1, dir: c, currentTabStopId: i, defaultCurrentTabStopId: a, onCurrentTabStopIdChange: s, onEntryFocus: l, ...u } = e, d = D(null), m = G(t, d), f = Ho(c), [v = null, p] = Pt({
    prop: i,
    defaultProp: a,
    onChange: s
  }), [b, $] = U(!1), w = se(l), y = Go(n), x = D(!1), [E, N] = U(0);
  return F(() => {
    const O = d.current;
    if (O)
      return O.addEventListener(Ft, w), () => O.removeEventListener(Ft, w);
  }, [
    w
  ]), /* @__PURE__ */ g(Ia, {
    scope: n,
    orientation: o,
    dir: f,
    loop: r,
    currentTabStopId: v,
    onItemFocus: j(
      (O) => p(O),
      [
        p
      ]
    ),
    onItemShiftTab: j(
      () => $(!0),
      []
    ),
    onFocusableItemAdd: j(
      () => N(
        (O) => O + 1
      ),
      []
    ),
    onFocusableItemRemove: j(
      () => N(
        (O) => O - 1
      ),
      []
    )
  }, /* @__PURE__ */ g(V.div, P({
    tabIndex: b || E === 0 ? -1 : 0,
    "data-orientation": o
  }, u, {
    ref: m,
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
        const k = new CustomEvent(Ft, Aa);
        if (O.currentTarget.dispatchEvent(k), !k.defaultPrevented) {
          const W = y().filter(
            (B) => B.focusable
          ), z = W.find(
            (B) => B.active
          ), L = W.find(
            (B) => B.id === v
          ), T = [
            z,
            L,
            ...W
          ].filter(Boolean).map(
            (B) => B.ref.current
          );
          Xo(T);
        }
      }
      x.current = !1;
    }),
    onBlur: R(
      e.onBlur,
      () => $(!1)
    )
  })));
}), Ua = "RovingFocusGroupItem", Wa = /* @__PURE__ */ _((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: o = !0, active: r = !1, tabStopId: c, ...i } = e, a = Se(), s = c || a, l = Fa(Ua, n), u = l.currentTabStopId === s, d = Go(n), { onFocusableItemAdd: m, onFocusableItemRemove: f } = l;
  return F(() => {
    if (o)
      return m(), () => f();
  }, [
    o,
    m,
    f
  ]), /* @__PURE__ */ g(jt.ItemSlot, {
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
      const p = ja(v, l.orientation, l.dir);
      if (p !== void 0) {
        v.preventDefault();
        let $ = d().filter(
          (w) => w.focusable
        ).map(
          (w) => w.ref.current
        );
        if (p === "last")
          $.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && $.reverse();
          const w = $.indexOf(v.currentTarget);
          $ = l.loop ? Va($, w + 1) : $.slice(w + 1);
        }
        setTimeout(
          () => Xo($)
        );
      }
    })
  })));
}), za = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ka(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ja(e, t, n) {
  const o = Ka(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(o)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(o)))
    return za[o];
}
function Xo(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Va(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
const Ha = La, Ga = Wa, Vt = [
  "Enter",
  " "
], Ya = [
  "ArrowDown",
  "PageUp",
  "Home"
], Zo = [
  "ArrowUp",
  "PageDown",
  "End"
], Xa = [
  ...Ya,
  ...Zo
], Za = {
  ltr: [
    ...Vt,
    "ArrowRight"
  ],
  rtl: [
    ...Vt,
    "ArrowLeft"
  ]
}, qa = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Ot = "Menu", [Xe, Qa, Ja] = Vo(Ot), [De, qo] = Me(Ot, [
  Ja,
  Et,
  Yo
]), hn = Et(), Qo = Yo(), [es, Re] = De(Ot), [ts, et] = De(Ot), ns = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: c, modal: i = !0 } = e, a = hn(t), [s, l] = U(null), u = D(!1), d = se(c), m = Ho(r);
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
  }, []), /* @__PURE__ */ g(Po, a, /* @__PURE__ */ g(es, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: s,
    onContentChange: l
  }, /* @__PURE__ */ g(ts, {
    scope: t,
    onClose: j(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: m,
    modal: i
  }, o)));
}, Jo = /* @__PURE__ */ _((e, t) => {
  const { __scopeMenu: n, ...o } = e, r = hn(n);
  return /* @__PURE__ */ g(_o, P({}, r, o, {
    ref: t
  }));
}), er = "MenuPortal", [os, tr] = De(er, {
  forceMount: void 0
}), rs = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, c = Re(er, t);
  return /* @__PURE__ */ g(os, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ g(ue, {
    present: n || c.open
  }, /* @__PURE__ */ g(ln, {
    asChild: !0,
    container: r
  }, o)));
}, re = "MenuContent", [cs, vn] = De(re), is = /* @__PURE__ */ _((e, t) => {
  const n = tr(re, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, c = Re(re, e.__scopeMenu), i = et(re, e.__scopeMenu);
  return /* @__PURE__ */ g(Xe.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ g(ue, {
    present: o || c.open
  }, /* @__PURE__ */ g(Xe.Slot, {
    scope: e.__scopeMenu
  }, i.modal ? /* @__PURE__ */ g(as, P({}, r, {
    ref: t
  })) : /* @__PURE__ */ g(ss, P({}, r, {
    ref: t
  })))));
}), as = /* @__PURE__ */ _((e, t) => {
  const n = Re(re, e.__scopeMenu), o = D(null), r = G(t, o);
  return F(() => {
    const c = o.current;
    if (c)
      return dn(c);
  }, []), /* @__PURE__ */ g(gn, P({}, e, {
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
}), ss = /* @__PURE__ */ _((e, t) => {
  const n = Re(re, e.__scopeMenu);
  return /* @__PURE__ */ g(gn, P({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), gn = /* @__PURE__ */ _((e, t) => {
  const { __scopeMenu: n, loop: o = !1, trapFocus: r, onOpenAutoFocus: c, onCloseAutoFocus: i, disableOutsidePointerEvents: a, onEntryFocus: s, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: m, onDismiss: f, disableOutsideScroll: v, ...p } = e, b = Re(re, n), $ = et(re, n), w = hn(n), y = Qo(n), x = Qa(n), [E, N] = U(null), O = D(null), S = G(t, O, b.onContentChange), k = D(0), W = D(""), z = D(0), L = D(null), q = D("right"), T = D(0), B = v ? un : qt, I = v ? {
    as: xe,
    allowPinchZoom: !0
  } : void 0, H = (M) => {
    var K, X;
    const fe = W.current + M, be = x().filter(
      (Q) => !Q.disabled
    ), Ke = document.activeElement, Pe = (K = be.find(
      (Q) => Q.ref.current === Ke
    )) === null || K === void 0 ? void 0 : K.textValue, oe = be.map(
      (Q) => Q.textValue
    ), $e = Es(oe, fe, Pe), tt = (X = be.find(
      (Q) => Q.textValue === $e
    )) === null || X === void 0 ? void 0 : X.ref.current;
    (function Q(nt) {
      W.current = nt, window.clearTimeout(k.current), nt !== "" && (k.current = window.setTimeout(
        () => Q(""),
        1e3
      ));
    })(fe), tt && setTimeout(
      () => tt.focus()
    );
  };
  F(() => () => window.clearTimeout(k.current), []), en();
  const Y = j((M) => {
    var K, X;
    return q.current === ((K = L.current) === null || K === void 0 ? void 0 : K.side) && _s(M, (X = L.current) === null || X === void 0 ? void 0 : X.area);
  }, []);
  return /* @__PURE__ */ g(cs, {
    scope: n,
    searchRef: W,
    onItemEnter: j((M) => {
      Y(M) && M.preventDefault();
    }, [
      Y
    ]),
    onItemLeave: j((M) => {
      var K;
      Y(M) || ((K = O.current) === null || K === void 0 || K.focus(), N(null));
    }, [
      Y
    ]),
    onTriggerLeave: j((M) => {
      Y(M) && M.preventDefault();
    }, [
      Y
    ]),
    pointerGraceTimerRef: z,
    onPointerGraceIntentChange: j((M) => {
      L.current = M;
    }, [])
  }, /* @__PURE__ */ g(B, I, /* @__PURE__ */ g(tn, {
    asChild: !0,
    trapped: r,
    onMountAutoFocus: R(c, (M) => {
      var K;
      M.preventDefault(), (K = O.current) === null || K === void 0 || K.focus();
    }),
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ g(Jt, {
    asChild: !0,
    disableOutsidePointerEvents: a,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: m,
    onDismiss: f
  }, /* @__PURE__ */ g(Ha, P({
    asChild: !0
  }, y, {
    dir: $.dir,
    orientation: "vertical",
    loop: o,
    currentTabStopId: E,
    onCurrentTabStopIdChange: N,
    onEntryFocus: R(s, (M) => {
      $.isUsingKeyboardRef.current || M.preventDefault();
    })
  }), /* @__PURE__ */ g(Oo, P({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": ir(b.open),
    "data-radix-menu-content": "",
    dir: $.dir
  }, w, p, {
    ref: S,
    style: {
      outline: "none",
      ...p.style
    },
    onKeyDown: R(p.onKeyDown, (M) => {
      const X = M.target.closest("[data-radix-menu-content]") === M.currentTarget, fe = M.ctrlKey || M.altKey || M.metaKey, be = M.key.length === 1;
      X && (M.key === "Tab" && M.preventDefault(), !fe && be && H(M.key));
      const Ke = O.current;
      if (M.target !== Ke || !Xa.includes(M.key))
        return;
      M.preventDefault();
      const oe = x().filter(
        ($e) => !$e.disabled
      ).map(
        ($e) => $e.ref.current
      );
      Zo.includes(M.key) && oe.reverse(), ys(oe);
    }),
    onBlur: R(e.onBlur, (M) => {
      M.currentTarget.contains(M.target) || (window.clearTimeout(k.current), W.current = "");
    }),
    onPointerMove: R(e.onPointerMove, Ze((M) => {
      const K = M.target, X = T.current !== M.clientX;
      if (M.currentTarget.contains(K) && X) {
        const fe = M.clientX > T.current ? "right" : "left";
        q.current = fe, T.current = M.clientX;
      }
    }))
  })))))));
}), ls = /* @__PURE__ */ _((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return /* @__PURE__ */ g(V.div, P({}, o, {
    ref: t
  }));
}), Ht = "MenuItem", jn = "menu.itemSelect", bn = /* @__PURE__ */ _((e, t) => {
  const { disabled: n = !1, onSelect: o, ...r } = e, c = D(null), i = et(Ht, e.__scopeMenu), a = vn(Ht, e.__scopeMenu), s = G(t, c), l = D(!1), u = () => {
    const d = c.current;
    if (!n && d) {
      const m = new CustomEvent(jn, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        jn,
        (f) => o == null ? void 0 : o(f),
        {
          once: !0
        }
      ), ao(d, m), m.defaultPrevented ? l.current = !1 : i.onClose();
    }
  };
  return /* @__PURE__ */ g(nr, P({}, r, {
    ref: s,
    disabled: n,
    onClick: R(e.onClick, u),
    onPointerDown: (d) => {
      var m;
      (m = e.onPointerDown) === null || m === void 0 || m.call(e, d), l.current = !0;
    },
    onPointerUp: R(e.onPointerUp, (d) => {
      var m;
      l.current || (m = d.currentTarget) === null || m === void 0 || m.click();
    }),
    onKeyDown: R(e.onKeyDown, (d) => {
      const m = a.searchRef.current !== "";
      n || m && d.key === " " || Vt.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), nr = /* @__PURE__ */ _((e, t) => {
  const { __scopeMenu: n, disabled: o = !1, textValue: r, ...c } = e, i = vn(Ht, n), a = Qo(n), s = D(null), l = G(t, s), [u, d] = U(!1), [m, f] = U("");
  return F(() => {
    const v = s.current;
    if (v) {
      var p;
      f(((p = v.textContent) !== null && p !== void 0 ? p : "").trim());
    }
  }, [
    c.children
  ]), /* @__PURE__ */ g(Xe.ItemSlot, {
    scope: n,
    disabled: o,
    textValue: r ?? m
  }, /* @__PURE__ */ g(Ga, P({
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
}), ds = /* @__PURE__ */ _((e, t) => {
  const { checked: n = !1, onCheckedChange: o, ...r } = e;
  return /* @__PURE__ */ g(rr, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ g(bn, P({
    role: "menuitemcheckbox",
    "aria-checked": wt(n) ? "mixed" : n
  }, r, {
    ref: t,
    "data-state": $n(n),
    onSelect: R(
      r.onSelect,
      () => o == null ? void 0 : o(wt(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), us = "MenuRadioGroup", [yd, fs] = De(us, {
  value: void 0,
  onValueChange: () => {
  }
}), ps = "MenuRadioItem", ms = /* @__PURE__ */ _((e, t) => {
  const { value: n, ...o } = e, r = fs(ps, e.__scopeMenu), c = n === r.value;
  return /* @__PURE__ */ g(rr, {
    scope: e.__scopeMenu,
    checked: c
  }, /* @__PURE__ */ g(bn, P({
    role: "menuitemradio",
    "aria-checked": c
  }, o, {
    ref: t,
    "data-state": $n(c),
    onSelect: R(o.onSelect, () => {
      var i;
      return (i = r.onValueChange) === null || i === void 0 ? void 0 : i.call(r, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), or = "MenuItemIndicator", [rr, hs] = De(or, {
  checked: !1
}), vs = /* @__PURE__ */ _((e, t) => {
  const { __scopeMenu: n, forceMount: o, ...r } = e, c = hs(or, n);
  return /* @__PURE__ */ g(ue, {
    present: o || wt(c.checked) || c.checked === !0
  }, /* @__PURE__ */ g(V.span, P({}, r, {
    ref: t,
    "data-state": $n(c.checked)
  })));
}), gs = /* @__PURE__ */ _((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return /* @__PURE__ */ g(V.div, P({
    role: "separator",
    "aria-orientation": "horizontal"
  }, o, {
    ref: t
  }));
}), bs = "MenuSub", [Cd, cr] = De(bs), dt = "MenuSubTrigger", $s = /* @__PURE__ */ _((e, t) => {
  const n = Re(dt, e.__scopeMenu), o = et(dt, e.__scopeMenu), r = cr(dt, e.__scopeMenu), c = vn(dt, e.__scopeMenu), i = D(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: s } = c, l = {
    __scopeMenu: e.__scopeMenu
  }, u = j(() => {
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
  ]), /* @__PURE__ */ g(Jo, P({
    asChild: !0
  }, l), /* @__PURE__ */ g(nr, P({
    id: r.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": r.contentId,
    "data-state": ir(n.open)
  }, e, {
    ref: xt(t, r.onTriggerChange),
    onClick: (d) => {
      var m;
      (m = e.onClick) === null || m === void 0 || m.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: R(e.onPointerMove, Ze((d) => {
      c.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !i.current && (c.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: R(e.onPointerLeave, Ze((d) => {
      var m;
      u();
      const f = (m = n.content) === null || m === void 0 ? void 0 : m.getBoundingClientRect();
      if (f) {
        var v;
        const p = (v = n.content) === null || v === void 0 ? void 0 : v.dataset.side, b = p === "right", $ = b ? -5 : 5, w = f[b ? "left" : "right"], y = f[b ? "right" : "left"];
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
    onKeyDown: R(e.onKeyDown, (d) => {
      const m = c.searchRef.current !== "";
      if (!(e.disabled || m && d.key === " ") && Za[o.dir].includes(d.key)) {
        var f;
        n.onOpenChange(!0), (f = n.content) === null || f === void 0 || f.focus(), d.preventDefault();
      }
    })
  })));
}), ws = "MenuSubContent", xs = /* @__PURE__ */ _((e, t) => {
  const n = tr(re, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, c = Re(re, e.__scopeMenu), i = et(re, e.__scopeMenu), a = cr(ws, e.__scopeMenu), s = D(null), l = G(t, s);
  return /* @__PURE__ */ g(Xe.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ g(ue, {
    present: o || c.open
  }, /* @__PURE__ */ g(Xe.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ g(gn, P({
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
      const d = u.currentTarget.contains(u.target), m = qa[i.dir].includes(u.key);
      if (d && m) {
        var f;
        c.onOpenChange(!1), (f = a.trigger) === null || f === void 0 || f.focus(), u.preventDefault();
      }
    })
  })))));
});
function ir(e) {
  return e ? "open" : "closed";
}
function wt(e) {
  return e === "indeterminate";
}
function $n(e) {
  return wt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ys(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Cs(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
function Es(e, t, n) {
  const r = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, c = n ? e.indexOf(n) : -1;
  let i = Cs(e, Math.max(c, 0));
  r.length === 1 && (i = i.filter(
    (l) => l !== n
  ));
  const s = i.find(
    (l) => l.toLowerCase().startsWith(r.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function Ps(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let c = 0, i = t.length - 1; c < t.length; i = c++) {
    const a = t[c].x, s = t[c].y, l = t[i].x, u = t[i].y;
    s > o != u > o && n < (l - a) * (o - s) / (u - s) + a && (r = !r);
  }
  return r;
}
function _s(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return Ps(n, t);
}
function Ze(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Os = ns, Ss = Jo, Ns = rs, Ms = is, Ds = ls, Rs = bn, As = ds, Ts = ms, ks = vs, Is = gs, Fs = $s, Ls = xs, ar = "DropdownMenu", [Bs, Ed] = Me(ar, [
  qo
]), ne = qo(), [Us, sr] = Bs(ar), Ws = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: o, open: r, defaultOpen: c, onOpenChange: i, modal: a = !0 } = e, s = ne(t), l = D(null), [u = !1, d] = Pt({
    prop: r,
    defaultProp: c,
    onChange: i
  });
  return /* @__PURE__ */ g(Us, {
    scope: t,
    triggerId: Se(),
    triggerRef: l,
    contentId: Se(),
    open: u,
    onOpenChange: d,
    onOpenToggle: j(
      () => d(
        (m) => !m
      ),
      [
        d
      ]
    ),
    modal: a
  }, /* @__PURE__ */ g(Os, P({}, s, {
    open: u,
    onOpenChange: d,
    dir: o,
    modal: a
  }), n));
}, zs = "DropdownMenuTrigger", Ks = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, c = sr(zs, n), i = ne(n);
  return /* @__PURE__ */ g(Ss, P({
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
}), js = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = ne(t);
  return /* @__PURE__ */ g(Ns, P({}, o, n));
}, Vs = "DropdownMenuContent", Hs = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = sr(Vs, n), c = ne(n), i = D(!1);
  return /* @__PURE__ */ g(Ms, P({
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
}), Gs = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ g(Ds, P({}, r, o, {
    ref: t
  }));
}), Ys = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ g(Rs, P({}, r, o, {
    ref: t
  }));
}), Xs = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ g(As, P({}, r, o, {
    ref: t
  }));
}), Zs = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ g(Ts, P({}, r, o, {
    ref: t
  }));
}), qs = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ g(ks, P({}, r, o, {
    ref: t
  }));
}), Qs = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ g(Is, P({}, r, o, {
    ref: t
  }));
}), Js = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ g(Fs, P({}, r, o, {
    ref: t
  }));
}), el = /* @__PURE__ */ _((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ne(n);
  return /* @__PURE__ */ g(Ls, P({}, r, o, {
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
}), tl = Ws, nl = Ks, ol = js, lr = Hs, dr = Gs, ur = Ys, fr = Xs, pr = Zs, mr = qs, hr = Qs, vr = Js, gr = el;
function St(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, c;
  for (c = 0; c < o.length; c++)
    r = o[c], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var rl = ["color"], cl = /* @__PURE__ */ _(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = St(e, rl);
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
}), il = ["color"], al = /* @__PURE__ */ _(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = St(e, il);
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
}), sl = ["color"], ll = /* @__PURE__ */ _(function(e, t) {
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
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
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
    d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
    fill: o
  }));
});
const fl = tl, pl = nl, ml = C.forwardRef(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ A(
  vr,
  {
    ref: r,
    className: Z(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ h(al, { className: "ml-auto h-4 w-4" })
    ]
  }
));
ml.displayName = vr.displayName;
const hl = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h(
  gr,
  {
    ref: n,
    className: Z(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
hl.displayName = gr.displayName;
const br = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ h(ol, { children: /* @__PURE__ */ h(
  lr,
  {
    ref: o,
    sideOffset: t,
    className: Z(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
br.displayName = lr.displayName;
const Nt = C.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ h(
  ur,
  {
    ref: o,
    className: Z(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Nt.displayName = ur.displayName;
const vl = C.forwardRef(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ A(
  fr,
  {
    ref: r,
    className: Z(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ h("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ h(mr, { children: /* @__PURE__ */ h(cl, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
vl.displayName = fr.displayName;
const gl = C.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ A(
  pr,
  {
    ref: o,
    className: Z(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ h("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ h(mr, { children: /* @__PURE__ */ h(ul, { className: "h-4 w-4 fill-current" }) }) }),
      t
    ]
  }
));
gl.displayName = pr.displayName;
const $r = C.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ h(
  dr,
  {
    ref: o,
    className: Z(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
$r.displayName = dr.displayName;
const qe = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h(
  hr,
  {
    ref: n,
    className: Z("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
qe.displayName = hr.displayName;
const wn = [
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
            icon: nc,
            text: "Документация",
            link: "https://docs.darkmaterial.space"
          },
          {
            icon: jr,
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
          inactive: /* @__PURE__ */ h(de, { variant: "outline", className: "w-full", children: /* @__PURE__ */ h("a", { href: "/plus", children: "Получить Плюс" }) })
        }
      }
    ]
  }
], Vn = ({ description: e, displayName: t }) => /* @__PURE__ */ A("div", { className: "w-full h-fit pb-4 flex flex-col justify-start", children: [
  /* @__PURE__ */ h("span", { className: "text-lg font-semibold text-accent-foreground", children: t }),
  /* @__PURE__ */ h("span", { className: "text-sm font-normal text-muted-foreground", children: e })
] }), Hn = ({ section: e }) => {
  const t = e.items.length === 0;
  if (!!e.title || !t)
    return /* @__PURE__ */ A(pe, { children: [
      /* @__PURE__ */ h("span", { children: e.title }),
      /* @__PURE__ */ h(qe, {}),
      e.items && e.items.map(
        (o) => /* @__PURE__ */ h(Nt, { asChild: !0, children: /* @__PURE__ */ A("a", { href: o.link, className: "flex items-center py-2 justify-start gap-2", children: [
          o.icon && o.icon({}),
          o.text
        ] }) })
      )
    ] });
}, Gn = ({ section: e }) => /* @__PURE__ */ A(pe, { children: [
  /* @__PURE__ */ h(qe, {}),
  /* @__PURE__ */ h($r, { children: "Проекты" }),
  e.projects && e.projects.map(
    (t) => /* @__PURE__ */ h(Nt, { asChild: !0, children: /* @__PURE__ */ A("a", { href: t.link, className: "flex px-0 items-center justify-between w-full", children: [
      /* @__PURE__ */ h("span", { className: "text-base", children: t.name }),
      /* @__PURE__ */ h(co, { size: 18, className: "ml-auto" })
    ] }) }, t.key + "-menu")
  )
] }), Yn = ({ section: e }) => typeof e.state[e.activeState] == "string" ? /* @__PURE__ */ A(pe, { children: [
  /* @__PURE__ */ h(qe, {}),
  /* @__PURE__ */ h("div", { className: "w-full h-fit pt-5 flex items-center justify-center", children: /* @__PURE__ */ h("span", { className: "text-sm text-muted-foreground", children: e.state[e.activeState] }) })
] }) : /* @__PURE__ */ A(pe, { children: [
  /* @__PURE__ */ h(qe, {}),
  e.state[e.activeState]
] }), Xn = ({ section: e }) => /* @__PURE__ */ A(Nt, { className: "gap-2 py-2", onClick: e.action && e.action, children: [
  /* @__PURE__ */ h(ro, {}),
  "Выйти из профиля"
] }), bl = ({ user: e, size: t = 36, buttonSize: n, loginLink: o = "https://darkmaterial.space", menuMap: r = wn }) => {
  const c = "https://auth.darkmaterial.space/login?continue=";
  return e ? /* @__PURE__ */ A(fl, { children: [
    /* @__PURE__ */ h(pl, { asChild: !0, children: e.photoURL ? /* @__PURE__ */ h("div", { style: { width: `${t}px`, height: `${t}px` }, children: /* @__PURE__ */ h("img", { src: e.photoURL, alt: "user-profile-img", className: "w-full h-full rounded-full object-cover" }) }) : /* @__PURE__ */ h(
      "div",
      {
        style: { width: `${t}px`, height: `${t}px` },
        className: "w-9 h-9 rounded-full bg-muted border shrink-0 flex items-center justify-center",
        children: /* @__PURE__ */ h(oo, { size: 18 })
      }
    ) }),
    /* @__PURE__ */ h(br, { className: "p-4 w-60 rounded-xl", children: r && r.map((i, a) => i.type === "user" ? /* @__PURE__ */ h(Vn, { displayName: e.displayName || "Пользователь", description: e.email || "Не указано" }, a + "-item-no-wrapper") : i.type === "links" ? /* @__PURE__ */ h(Hn, { section: i }, a + "-item-no-wrapper") : i.type === "projects" ? /* @__PURE__ */ h(Gn, { section: i }, a + "-item-no-wrapper") : i.type === "membership" ? /* @__PURE__ */ h(Yn, { section: i }, a + "-item-no-wrapper") : i.type === "sign-out" ? /* @__PURE__ */ h(Xn, { section: i }, a + "-item-no-wrapper") : i.type === "wrapper" ? /* @__PURE__ */ h("div", { className: i.className || "", children: i.items && i.items.map((s, l) => {
      if (s.type === "user")
        return /* @__PURE__ */ h(Vn, { displayName: e.displayName || "Пользователь", description: e.email || "Не указано" }, a + "-" + l + "item-with-wrapper");
      if (s.type === "links")
        return /* @__PURE__ */ h(Hn, { section: s }, a + "-" + l + "item-with-wrapper");
      if (s.type === "projects")
        return /* @__PURE__ */ h(Gn, { section: s }, a + "-" + l + "item-with-wrapper");
      if (s.type === "membership")
        return /* @__PURE__ */ h(Yn, { section: s }, a + "-" + l + "item-with-wrapper");
      if (s.type === "sign-out")
        return /* @__PURE__ */ h(Xn, { section: s }, a + "-" + l + "item-with-wrapper");
    }) }, a + "-item-wrapper") : null) })
  ] }) : /* @__PURE__ */ h(de, { size: n, variant: "outline", asChild: !0, children: /* @__PURE__ */ h("a", { href: `${c}${o}`, children: "Войти" }) });
}, wr = "Dialog", [xr, Pd] = Me(wr), [$l, ce] = xr(wr), wl = (e) => {
  const { __scopeDialog: t, children: n, open: o, defaultOpen: r, onOpenChange: c, modal: i = !0 } = e, a = D(null), s = D(null), [l = !1, u] = Pt({
    prop: o,
    defaultProp: r,
    onChange: c
  });
  return /* @__PURE__ */ g($l, {
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
}, xl = "DialogTrigger", yl = /* @__PURE__ */ _((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ce(xl, n), c = G(t, r.triggerRef);
  return /* @__PURE__ */ g(V.button, P({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": xn(r.open)
  }, o, {
    ref: c,
    onClick: R(e.onClick, r.onOpenToggle)
  }));
}), yr = "DialogPortal", [Cl, Cr] = xr(yr, {
  forceMount: void 0
}), El = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, c = ce(yr, t);
  return /* @__PURE__ */ g(Cl, {
    scope: t,
    forceMount: n
  }, Oe.map(
    o,
    (i) => /* @__PURE__ */ g(ue, {
      present: n || c.open
    }, /* @__PURE__ */ g(ln, {
      asChild: !0,
      container: r
    }, i))
  ));
}, Gt = "DialogOverlay", Pl = /* @__PURE__ */ _((e, t) => {
  const n = Cr(Gt, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, c = ce(Gt, e.__scopeDialog);
  return c.modal ? /* @__PURE__ */ g(ue, {
    present: o || c.open
  }, /* @__PURE__ */ g(_l, P({}, r, {
    ref: t
  }))) : null;
}), _l = /* @__PURE__ */ _((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ce(Gt, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ g(un, {
      as: xe,
      allowPinchZoom: !0,
      shards: [
        r.contentRef
      ]
    }, /* @__PURE__ */ g(V.div, P({
      "data-state": xn(r.open)
    }, o, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...o.style
      }
    })))
  );
}), Qe = "DialogContent", Ol = /* @__PURE__ */ _((e, t) => {
  const n = Cr(Qe, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, c = ce(Qe, e.__scopeDialog);
  return /* @__PURE__ */ g(ue, {
    present: o || c.open
  }, c.modal ? /* @__PURE__ */ g(Sl, P({}, r, {
    ref: t
  })) : /* @__PURE__ */ g(Nl, P({}, r, {
    ref: t
  })));
}), Sl = /* @__PURE__ */ _((e, t) => {
  const n = ce(Qe, e.__scopeDialog), o = D(null), r = G(t, n.contentRef, o);
  return F(() => {
    const c = o.current;
    if (c)
      return dn(c);
  }, []), /* @__PURE__ */ g(Er, P({}, e, {
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
}), Nl = /* @__PURE__ */ _((e, t) => {
  const n = ce(Qe, e.__scopeDialog), o = D(!1), r = D(!1);
  return /* @__PURE__ */ g(Er, P({}, e, {
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
}), Er = /* @__PURE__ */ _((e, t) => {
  const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: c, ...i } = e, a = ce(Qe, n), s = D(null), l = G(t, s);
  return en(), /* @__PURE__ */ g(qt, null, /* @__PURE__ */ g(tn, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: c
  }, /* @__PURE__ */ g(Jt, P({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": xn(a.open)
  }, i, {
    ref: l,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
}), Ml = "DialogTitle", Dl = /* @__PURE__ */ _((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ce(Ml, n);
  return /* @__PURE__ */ g(V.h2, P({
    id: r.titleId
  }, o, {
    ref: t
  }));
}), Rl = "DialogDescription", Al = /* @__PURE__ */ _((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ce(Rl, n);
  return /* @__PURE__ */ g(V.p, P({
    id: r.descriptionId
  }, o, {
    ref: t
  }));
}), Tl = "DialogClose", kl = /* @__PURE__ */ _((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ce(Tl, n);
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
function xn(e) {
  return e ? "open" : "closed";
}
const Il = wl, Fl = yl, Ll = El, Pr = Pl, _r = Ol, Or = Dl, Sr = Al, Bl = kl, Ul = Il, Wl = Fl, zl = Ll, Nr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h(
  Pr,
  {
    ref: n,
    className: Z(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Nr.displayName = Pr.displayName;
const Mr = C.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ A(zl, { children: [
  /* @__PURE__ */ h(Nr, {}),
  /* @__PURE__ */ A(
    _r,
    {
      ref: o,
      className: Z(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ A(Bl, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ h(ll, { className: "h-4 w-4" }),
          /* @__PURE__ */ h("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Mr.displayName = _r.displayName;
const Kl = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h(
  Or,
  {
    ref: n,
    className: Z(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Kl.displayName = Or.displayName;
const jl = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h(
  Sr,
  {
    ref: n,
    className: Z("text-sm text-muted-foreground", e),
    ...t
  }
));
jl.displayName = Sr.displayName;
const Yt = "horizontal", Vl = [
  "horizontal",
  "vertical"
], Dr = /* @__PURE__ */ _((e, t) => {
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
Dr.propTypes = {
  orientation(e, t, n) {
    const o = e[t], r = String(o);
    return o && !Rr(o) ? new Error(Hl(r, n)) : null;
  }
};
function Hl(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Yt}\`.`;
}
function Rr(e) {
  return Vl.includes(e);
}
const Ar = Dr, Be = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, r) => /* @__PURE__ */ h(
    Ar,
    {
      ref: r,
      decorative: n,
      orientation: t,
      className: Z(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...o
    }
  )
);
Be.displayName = Ar.displayName;
const Zn = ({ section: e }) => {
  const t = e.items.length === 0;
  if (!!e.title || !t)
    return /* @__PURE__ */ A(pe, { children: [
      /* @__PURE__ */ h("span", { children: e.title }),
      /* @__PURE__ */ h(Be, { className: "my-2" }),
      e.items && e.items.map(
        (o) => /* @__PURE__ */ A("a", { href: o.link, className: "flex items-center py-2 justify-start gap-2", children: [
          o.icon && o.icon({}),
          o.text
        ] })
      )
    ] });
}, qn = ({ section: e }) => typeof e.state[e.activeState] == "string" ? /* @__PURE__ */ A(pe, { children: [
  /* @__PURE__ */ h(Be, {}),
  /* @__PURE__ */ h("div", { className: "w-full h-fit pt-5 flex items-center justify-center", children: /* @__PURE__ */ h("span", { className: "text-sm text-muted-foreground", children: e.state[e.activeState] }) })
] }) : /* @__PURE__ */ A(pe, { children: [
  /* @__PURE__ */ h(Be, { className: "my-2" }),
  e.state[e.activeState]
] }), Qn = ({ section: e }) => /* @__PURE__ */ A(pe, { children: [
  /* @__PURE__ */ h(Be, {}),
  /* @__PURE__ */ A("div", { className: "w-full h-fit flex flex-col my-4", children: [
    /* @__PURE__ */ h("span", { className: "text-base font-medium mb-2", children: "Проекты" }),
    e.projects && e.projects.map(
      (t) => /* @__PURE__ */ h(de, { asChild: !0, variant: "ghost", children: /* @__PURE__ */ A("a", { href: t.link, className: "flex px-0 items-center justify-between w-full", children: [
        /* @__PURE__ */ h("span", { className: "text-base", children: t.name }),
        /* @__PURE__ */ h(co, { size: 18, className: "ml-auto" })
      ] }) }, t.key + "-menu")
    )
  ] })
] }), Jn = ({ section: e }) => /* @__PURE__ */ A(de, { className: "gap-2 py-2", variant: "ghost", onClick: e.action && e.action, children: [
  /* @__PURE__ */ h(ro, {}),
  "Выйти из профиля"
] }), eo = ({ description: e, displayName: t }) => /* @__PURE__ */ A("div", { className: "w-full h-fit pb-4 flex flex-col justify-start", children: [
  /* @__PURE__ */ h("span", { className: "text-lg font-semibold text-accent-foreground", children: t }),
  /* @__PURE__ */ h("span", { className: "text-sm font-normal text-muted-foreground", children: e })
] }), to = ({ loginLink: e = "https://darkmaterial.space" }) => {
  const t = "https://auth.darkmaterial.space/login?continue=", n = "https://auth.darkmaterial.space/signup?continue=", o = `${t}${e}`, r = `${n}${e}`;
  return /* @__PURE__ */ A("div", { className: "w-full h-fit flex flex-col gap-2 mb-4", children: [
    /* @__PURE__ */ h(de, { asChild: !0, variant: "outline", children: /* @__PURE__ */ h("a", { href: o, children: "Войти" }) }),
    /* @__PURE__ */ h(de, { asChild: !0, variant: "default", children: /* @__PURE__ */ h("a", { href: r, children: "Зарегистрироваться" }) })
  ] });
}, Gl = ({ user: e, loginLink: t = "https://darkmaterial.space", menuMap: n = wn }) => /* @__PURE__ */ A(Ul, { children: [
  /* @__PURE__ */ h(Wl, { asChild: !0, children: /* @__PURE__ */ h("div", { className: "w-9 h-9 rounded-full border shrink-0 bg-background flex items-center justify-center", children: /* @__PURE__ */ h(Vr, { size: 20 }) }) }),
  /* @__PURE__ */ h(Mr, { className: "rounded-none w-full h-full", children: n && n.map((o, r) => o.type === "user" ? e ? /* @__PURE__ */ h(
    eo,
    {
      displayName: e.displayName || "Пользователь",
      description: e.email || "Не указано"
    },
    r + "mobile-item-no-wrapper"
  ) : /* @__PURE__ */ h(to, { loginLink: t }, r + "mobile-item-no-wrapper") : o.type === "links" ? /* @__PURE__ */ h(Zn, { section: o }, r + "mobile-item-no-wrapper") : o.type === "projects" ? /* @__PURE__ */ h(Qn, { section: o }, r + "mobile-item-no-wrapper") : o.type === "membership" ? /* @__PURE__ */ h(qn, { section: o }, r + "mobile-item-no-wrapper") : o.type === "sign-out" && e ? /* @__PURE__ */ h(Jn, { section: o }, r + "mobile-item-no-wrapper") : o.type === "wrapper" ? /* @__PURE__ */ h("div", { className: o.className || "", children: o.items && o.items.map((c, i) => {
    if (c.type === "user")
      return e ? /* @__PURE__ */ h(
        eo,
        {
          displayName: e.displayName || "Пользователь",
          description: e.email || "Не указано"
        },
        r + "-" + i + "mobile-item-with-wrapper"
      ) : /* @__PURE__ */ h(to, { loginLink: t }, r + "mobile-item-no-wrapper");
    if (c.type === "links")
      return /* @__PURE__ */ h(Zn, { section: c }, r + "-" + i + "mobile-item-with-wrapper");
    if (c.type === "projects")
      return /* @__PURE__ */ h(Qn, { section: c }, r + "-" + i + "mobile-item-with-wrapper");
    if (c.type === "membership")
      return /* @__PURE__ */ h(qn, { section: c }, r + "-" + i + "mobile-item-with-wrapper");
    if (c.type === "sign-out" && e)
      return /* @__PURE__ */ h(Jn, { section: c }, r + "-" + i + "mobile-item-with-wrapper");
  }) }, r + "-mobile-item-wrapper") : null) })
] }), _d = ({
  user: e,
  size: t = 36,
  loginLink: n = "https://darkmaterial.space",
  activeMenu: o = "desktop",
  buttonSize: r = "default",
  map: c = wn
}) => o === "desktop" ? /* @__PURE__ */ h(
  bl,
  {
    buttonSize: r,
    user: e,
    size: t,
    menuMap: c,
    loginLink: n
  }
) : /* @__PURE__ */ h(
  Gl,
  {
    user: e,
    menuMap: c,
    loginLink: n
  }
), Yl = ({ notification: e }) => {
  const t = D(null), [n] = cc(t), { fromSeconds: o } = rc, r = o(e.createdAt);
  return F(() => {
    !e.isViewed && n && Lt.patch(e.receiver, e.doc_id, { isViewed: !0 });
  }, [e.isViewed, n]), /* @__PURE__ */ A("div", { ref: t, className: "w-full h-fit flex justify-between group cursor-pointer hover:bg-card transition-colors", children: [
    e.link ? /* @__PURE__ */ A("div", { className: "w-fit h-fit flex items-center relative", children: [
      /* @__PURE__ */ h(ic, { href: e.link, className: "absolute w-full h-full left-0 top-0" }),
      /* @__PURE__ */ h("div", { className: "p-4", children: /* @__PURE__ */ h("div", { className: "w-9 h-9 rounded-full bg-muted" }) }),
      /* @__PURE__ */ A("div", { className: "w-full h-fit flex flex-col py-4", children: [
        /* @__PURE__ */ h("span", { className: "text-sm", children: e.message }),
        /* @__PURE__ */ h("span", { className: "text-xs text-muted-foreground", children: r.setLocale("ru").toRelative() })
      ] })
    ] }) : /* @__PURE__ */ A("div", { className: "w-fit h-fit flex items-center", children: [
      /* @__PURE__ */ h("div", { className: "p-4", children: /* @__PURE__ */ h("div", { className: "w-9 h-9 rounded-full bg-muted" }) }),
      /* @__PURE__ */ A("div", { className: "w-full h-fit flex flex-col py-4", children: [
        /* @__PURE__ */ h("span", { className: "text-sm", children: e.message }),
        /* @__PURE__ */ h("span", { className: "text-xs text-muted-foreground", children: r.setLocale("ru").toRelative() })
      ] })
    ] }),
    /* @__PURE__ */ h("div", { className: "p-4", children: /* @__PURE__ */ h(
      de,
      {
        size: "icon",
        variant: "ghost",
        className: "opacity-0 group-hover:opacity-100 transition-opacity rounded-full",
        onClick: () => Lt.delete(e.receiver, e.doc_id),
        children: /* @__PURE__ */ h(Hr, {})
      }
    ) })
  ] });
}, Xl = no(Yl), Zl = (
  // process.env.NEXT_PUBLIC_API_HOST_PROD as string
  process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_API_HOST_DEV : process.env.NEXT_PUBLIC_API_HOST_PROD
), Od = ({ auth: e }) => {
  const [t, n] = U(!1), [o] = oc(e), [r, c] = U([]), i = r.filter((s) => !s.isViewed), a = () => {
    r.length && o && r.forEach(
      (s) => Lt.delete(o.uid, s.doc_id)
    );
  };
  return F(() => {
    const s = ac(Zl);
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
  }, [o == null ? void 0 : o.uid]), !o || !e ? null : /* @__PURE__ */ A(Ko, { open: o ? t : !1, onOpenChange: (s) => n(s), children: [
    /* @__PURE__ */ A(jo, { className: "relative w-9 h-9 rounded-full flex items-center justify-center border bg-background", children: [
      i.length !== 0 && /* @__PURE__ */ h("div", { className: "absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-primary" }),
      /* @__PURE__ */ h(Yr, { size: 16 })
    ] }),
    /* @__PURE__ */ A(pn, { className: "w-96 p-0 flex flex-col bg-background", children: [
      /* @__PURE__ */ h("div", { className: "w-full border-b p-3 flex items-center", children: /* @__PURE__ */ h("div", { className: "w-fit h-fit flex items-center gap-4", children: /* @__PURE__ */ h("span", { className: "text-sm text-muted-foreground", children: "Входящие" }) }) }),
      /* @__PURE__ */ h("div", { className: "w-full h-full flex flex-col", children: r.length ? r.map(
        (s, l) => /* @__PURE__ */ A(pe, { children: [
          /* @__PURE__ */ h(Xl, { notification: s }, s.doc_id),
          l !== r.length - 1 && /* @__PURE__ */ h(Be, {}, s.doc_id + "-separator")
        ] })
      ) : /* @__PURE__ */ h("div", { className: "w-full h-64 flex items-center justify-center", children: /* @__PURE__ */ h("span", { className: "text-center text-sm text-muted-foreground", children: "Нет новых уведомлений" }) }) }),
      /* @__PURE__ */ h("div", { className: "w-full h-fit p-2 border-t flex items-center justify-center", children: /* @__PURE__ */ h(de, { size: "sm", onClick: a, variant: "ghost", children: "Очистить" }) })
    ] })
  ] });
}, ql = ({ index: e, height: t, width: n }) => {
  const o = _e.randomNum(0, 10), r = _e.randomNum(0, 2), c = _e.randomNum(1, 3), i = _e.randomNum(1, 3), a = [
    { min: 0.25, max: 0.5 },
    { min: 0.5, max: 0.7 },
    { min: 0.6, max: 1 }
  ];
  return /* @__PURE__ */ h(
    sc.div,
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
}, Sd = ({ starsCount: e = 50 }) => {
  const t = Ve(() => Array.from({ length: e }).map((l, u) => u), []), n = D(null), [o, r] = U(0), [c, i] = U(0), [a, s] = U(!1);
  return F(() => {
    const l = n.current;
    if (l) {
      const { offsetWidth: u, offsetHeight: d } = l;
      r(u), i(d), s(!0);
    }
  }, [n]), /* @__PURE__ */ h("div", { ref: n, className: Z(
    a ? "opacity-100" : "opacity-0",
    "absolute w-full h-full z-[-1]"
  ), children: t.map(
    (l) => /* @__PURE__ */ h(ql, { width: o, height: c, index: l }, "star-" + l + "-" + _e.generateId(6))
  ) });
};
export {
  gd as Avatar,
  Da as ForwardRefEditor,
  Od as Notifications,
  wd as ProjectsGrid,
  Sd as StarField,
  xd as Textarea,
  _d as UserCircle,
  lc as projects
};
