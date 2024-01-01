(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react/jsx-runtime"), require("react-responsive"), require("react-firebase-hooks/auth/dist/index.esm.js"), require("react"), require("class-variance-authority"), require("clsx"), require("tailwind-merge")) : typeof define === "function" && define.amd ? define(["exports", "react/jsx-runtime", "react-responsive", "react-firebase-hooks/auth/dist/index.esm.js", "react", "class-variance-authority", "clsx", "tailwind-merge"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.ui = {}, global["react/jsx-runtime"], global.reactResponsive, global.index_esm_js, global.React, global.classVarianceAuthority, global.clsx, global.tailwindMerge));
})(this, function(exports2, jsxRuntime, reactResponsive, index_esm_js, React, classVarianceAuthority, clsx, tailwindMerge) {
  "use strict";"use client";

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      for (const k in e) {
        if (k !== "default") {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }
  const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
  const globals = "";
  const DesktopMenu = ({ auth }) => {
    index_esm_js.useAuthState(auth);
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-9 h-9 rounded-full bg-muted shrink-0" });
  };
  const MobileMenu = ({ auth }) => {
    index_esm_js.useAuthState(auth);
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-9 h-9 rounded-full bg-muted shrink-0" });
  };
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function $6ed0406888f73fc4$var$setRef(ref, value) {
    if (typeof ref === "function")
      ref(value);
    else if (ref !== null && ref !== void 0)
      ref.current = value;
  }
  function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
    return (node) => refs.forEach(
      (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
    );
  }
  const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React.Children.toArray(children);
    const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React.Children.count(newElement) > 1)
            return React.Children.only(null);
          return /* @__PURE__ */ React.isValidElement(newElement) ? newElement.props.children : null;
        } else
          return child;
      });
      return /* @__PURE__ */ React.createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
        ref: forwardedRef
      }), /* @__PURE__ */ React.isValidElement(newElement) ? /* @__PURE__ */ React.cloneElement(newElement, void 0, newChildren) : null);
    }
    return /* @__PURE__ */ React.createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), children);
  });
  $5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
  const $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (/* @__PURE__ */ React.isValidElement(children))
      return /* @__PURE__ */ React.cloneElement(children, {
        ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
        ref: forwardedRef ? $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref) : children.ref
      });
    return React.Children.count(children) > 1 ? React.Children.only(null) : null;
  });
  $5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
  const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
  };
  function $5e63c961fc1ce211$var$isSlottable(child) {
    return /* @__PURE__ */ React.isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
  }
  function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
    const overrideProps = {
      ...childProps
    };
    for (const propName in childProps) {
      const slotPropValue = slotProps[propName];
      const childPropValue = childProps[propName];
      const isHandler = /^on[A-Z]/.test(propName);
      if (isHandler) {
        if (slotPropValue && childPropValue)
          overrideProps[propName] = (...args) => {
            childPropValue(...args);
            slotPropValue(...args);
          };
        else if (slotPropValue)
          overrideProps[propName] = slotPropValue;
      } else if (propName === "style")
        overrideProps[propName] = {
          ...slotPropValue,
          ...childPropValue
        };
      else if (propName === "className")
        overrideProps[propName] = [
          slotPropValue,
          childPropValue
        ].filter(Boolean).join(" ");
    }
    return {
      ...slotProps,
      ...overrideProps
    };
  }
  function cn(...inputs) {
    return tailwindMerge.twMerge(clsx.clsx(inputs));
  }
  const buttonVariants = classVarianceAuthority.cva(
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
  );
  const Button = React__namespace.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "button";
      return /* @__PURE__ */ jsxRuntime.jsx(
        Comp,
        {
          className: cn(buttonVariants({ variant, size, className })),
          ref,
          ...props
        }
      );
    }
  );
  Button.displayName = "Button";
  const UserCircle = ({ auth }) => {
    const isTabletOrMobile = reactResponsive.useMediaQuery({ query: "(max-width: 786px)" });
    const [user, loading] = index_esm_js.useAuthState(auth);
    if (!user || !loading)
      return /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "outline", children: "Войти" });
    if (!isTabletOrMobile)
      return /* @__PURE__ */ jsxRuntime.jsx(DesktopMenu, { auth });
    return /* @__PURE__ */ jsxRuntime.jsx(MobileMenu, { auth });
  };
  exports2.UserCircle = UserCircle;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
