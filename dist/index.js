(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react/jsx-runtime"), require("next/image.js"), require("react"), require("react-icons/bi/index.esm.js"), require("react-icons/pi/index.esm.js"), require("react-icons/md/index.esm.js"), require("react-dom"), require("clsx"), require("tailwind-merge"), require("class-variance-authority"), require("react-icons/ti/index.esm.js"), require("api"), require("react-firebase-hooks/auth/dist/index.esm.js"), require("luxon"), require("ahooks"), require("socket.io-client")) : typeof define === "function" && define.amd ? define(["exports", "react/jsx-runtime", "next/image.js", "react", "react-icons/bi/index.esm.js", "react-icons/pi/index.esm.js", "react-icons/md/index.esm.js", "react-dom", "clsx", "tailwind-merge", "class-variance-authority", "react-icons/ti/index.esm.js", "api", "react-firebase-hooks/auth/dist/index.esm.js", "luxon", "ahooks", "socket.io-client"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.ui = {}, global["react/jsx-runtime"], global["next/image"], global.React, global["react-icons/bi"], global["react-icons/pi"], global["react-icons/md"], global.ReactDOM, global.clsx, global["tailwind-merge"], global["class-variance-authority"], global["react-icons/ti"], global.api, global["react-firebase-hooks/auth"], global.luxon, global.ahooks, global.socket["io-client"]));
})(this, function(exports2, jsxRuntime, Image, React, index_esm_js, index_esm_js$1, index_esm_js$2, ReactDOM, clsx, tailwindMerge, classVarianceAuthority, index_esm_js$3, api, index_esm_js$4, luxon, ahooks, socket_ioClient) {
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
  const ReactDOM__namespace = /* @__PURE__ */ _interopNamespaceDefault(ReactDOM);
  const globals = "";
  const projects = [
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
    }
  ];
  const Avatar = ({ size: size2 = 24, isSubscriber = false, src, className = "" }) => {
    const iconWrapperSize = size2 * 0.5;
    const iconSize = iconWrapperSize * 0.5;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        style: { width: `${size2}px`, height: `${size2}px` },
        className: `relative flex items-center justify-center overflow-visible border rounded-full shrink-0 bg-background border-inherit ${className}`,
        children: [
          src ? /* @__PURE__ */ jsxRuntime.jsx(Image, { src, className: "rounded-full !relative", fill: true, alt: "@avatar" }) : /* @__PURE__ */ jsxRuntime.jsx(index_esm_js.BiUser, { size: size2 / 2 }),
          isSubscriber && /* @__PURE__ */ jsxRuntime.jsx("div", { style: {
            // maxWidth: '64px',
            // maxHeight: '64px',
            top: `-${iconWrapperSize * 0.25}px`,
            left: `-${iconWrapperSize * 0.25}px`,
            width: `${iconWrapperSize}px`,
            height: `${iconWrapperSize}px`
          }, className: "absolute flex items-center justify-center border-2 rounded-full text-muted-foreground border-background bg-muted", children: /* @__PURE__ */ jsxRuntime.jsx(index_esm_js$1.PiCrownSimpleBold, { size: iconSize }) })
        ]
      }
    );
  };
  const avatar = React.memo(Avatar);
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
  function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
      originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
      if (checkForDefaultPrevented === false || !event.defaultPrevented)
        return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
    };
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
  function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
    return React.useCallback($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
  }
  function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
      const BaseContext = /* @__PURE__ */ React.createContext(defaultContext);
      const index2 = defaultContexts.length;
      defaultContexts = [
        ...defaultContexts,
        defaultContext
      ];
      function Provider(props) {
        const { scope, children, ...context } = props;
        const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
        const value = React.useMemo(
          () => context,
          Object.values(context)
        );
        return /* @__PURE__ */ React.createElement(Context.Provider, {
          value
        }, children);
      }
      function useContext(consumerName, scope) {
        const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
        const context = React.useContext(Context);
        if (context)
          return context;
        if (defaultContext !== void 0)
          return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
      }
      Provider.displayName = rootComponentName + "Provider";
      return [
        Provider,
        useContext
      ];
    }
    const createScope = () => {
      const scopeContexts = defaultContexts.map((defaultContext) => {
        return /* @__PURE__ */ React.createContext(defaultContext);
      });
      return function useScope(scope) {
        const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
        return React.useMemo(
          () => ({
            [`__scope${scopeName}`]: {
              ...scope,
              [scopeName]: contexts
            }
          }),
          [
            scope,
            contexts
          ]
        );
      };
    };
    createScope.scopeName = scopeName;
    return [
      $c512c27ab02ef895$export$fd42f52fd3ae1109,
      $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
    ];
  }
  function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1)
      return baseScope;
    const createScope1 = () => {
      const scopeHooks = scopes.map(
        (createScope) => ({
          useScope: createScope(),
          scopeName: createScope.scopeName
        })
      );
      return function useComposedScopes(overrideScopes) {
        const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
          const scopeProps = useScope(overrideScopes);
          const currentScope = scopeProps[`__scope${scopeName}`];
          return {
            ...nextScopes,
            ...currentScope
          };
        }, {});
        return React.useMemo(
          () => ({
            [`__scope${baseScope.scopeName}`]: nextScopes1
          }),
          [
            nextScopes1
          ]
        );
      };
    };
    createScope1.scopeName = baseScope.scopeName;
    return createScope1;
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
  const $8927f6f2acc4f386$var$NODES = [
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
  ];
  const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
    const Node2 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
      const { asChild, ...primitiveProps } = props;
      const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
      React.useEffect(() => {
        window[Symbol.for("radix-ui")] = true;
      }, []);
      return /* @__PURE__ */ React.createElement(Comp, _extends({}, primitiveProps, {
        ref: forwardedRef
      }));
    });
    Node2.displayName = `Primitive.${node}`;
    return {
      ...primitive,
      [node]: Node2
    };
  }, {});
  function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
    if (target)
      ReactDOM.flushSync(
        () => target.dispatchEvent(event)
      );
  }
  function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
    const callbackRef = React.useRef(callback);
    React.useEffect(() => {
      callbackRef.current = callback;
    });
    return React.useMemo(
      () => (...args) => {
        var _callbackRef$current;
        return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
      },
      []
    );
  }
  function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
    React.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === "Escape")
          onEscapeKeyDown(event);
      };
      ownerDocument.addEventListener("keydown", handleKeyDown);
      return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
    }, [
      onEscapeKeyDown,
      ownerDocument
    ]);
  }
  const $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
  const $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
  const $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
  let $5cb92bef7577960e$var$originalBodyPointerEvents;
  const $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ React.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  });
  const $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var _node$ownerDocument;
    const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
    const context = React.useContext($5cb92bef7577960e$var$DismissableLayerContext);
    const [node1, setNode] = React.useState(null);
    const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
    const [, force] = React.useState({});
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
      forwardedRef,
      (node) => setNode(node)
    );
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
      ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index2 = node1 ? layers.indexOf(node1) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [
        ...context.branches
      ].some(
        (branch) => branch.contains(target)
      );
      if (!isPointerEventsEnabled || isPointerDownOnBranch)
        return;
      onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
      onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
      if (!event.defaultPrevented)
        onDismiss === null || onDismiss === void 0 || onDismiss();
    }, ownerDocument);
    const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [
        ...context.branches
      ].some(
        (branch) => branch.contains(target)
      );
      if (isFocusInBranch)
        return;
      onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
      onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
      if (!event.defaultPrevented)
        onDismiss === null || onDismiss === void 0 || onDismiss();
    }, ownerDocument);
    $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
      const isHighestLayer = index2 === context.layers.size - 1;
      if (!isHighestLayer)
        return;
      onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    React.useEffect(() => {
      if (!node1)
        return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node1);
      }
      context.layers.add(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
          ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
      };
    }, [
      node1,
      ownerDocument,
      disableOutsidePointerEvents,
      context
    ]);
    React.useEffect(() => {
      return () => {
        if (!node1)
          return;
        context.layers.delete(node1);
        context.layersWithOutsidePointerEventsDisabled.delete(node1);
        $5cb92bef7577960e$var$dispatchUpdate();
      };
    }, [
      node1,
      context
    ]);
    React.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
      ref: composedRefs,
      style: {
        pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
        ...props.style
      },
      onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
      onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
      onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    }));
  });
  function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
    const isPointerInsideReactTreeRef = React.useRef(false);
    const handleClickRef = React.useRef(() => {
    });
    React.useEffect(() => {
      const handlePointerDown = (event) => {
        if (event.target && !isPointerInsideReactTreeRef.current) {
          let handleAndDispatchPointerDownOutsideEvent = function() {
            $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
              discrete: true
            });
          };
          const eventDetail = {
            originalEvent: event
          };
          if (event.pointerType === "touch") {
            ownerDocument.removeEventListener("click", handleClickRef.current);
            handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
            ownerDocument.addEventListener("click", handleClickRef.current, {
              once: true
            });
          } else
            handleAndDispatchPointerDownOutsideEvent();
        } else
          ownerDocument.removeEventListener("click", handleClickRef.current);
        isPointerInsideReactTreeRef.current = false;
      };
      const timerId = window.setTimeout(() => {
        ownerDocument.addEventListener("pointerdown", handlePointerDown);
      }, 0);
      return () => {
        window.clearTimeout(timerId);
        ownerDocument.removeEventListener("pointerdown", handlePointerDown);
        ownerDocument.removeEventListener("click", handleClickRef.current);
      };
    }, [
      ownerDocument,
      handlePointerDownOutside
    ]);
    return {
      // ensures we check React component tree (not just DOM tree)
      onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
    };
  }
  function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
    const isFocusInsideReactTreeRef = React.useRef(false);
    React.useEffect(() => {
      const handleFocus = (event) => {
        if (event.target && !isFocusInsideReactTreeRef.current) {
          const eventDetail = {
            originalEvent: event
          };
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
            discrete: false
          });
        }
      };
      ownerDocument.addEventListener("focusin", handleFocus);
      return () => ownerDocument.removeEventListener("focusin", handleFocus);
    }, [
      ownerDocument,
      handleFocusOutside
    ]);
    return {
      onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
      onBlurCapture: () => isFocusInsideReactTreeRef.current = false
    };
  }
  function $5cb92bef7577960e$var$dispatchUpdate() {
    const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
    document.dispatchEvent(event);
  }
  function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
      bubbles: false,
      cancelable: true,
      detail
    });
    if (handler)
      target.addEventListener(name, handler, {
        once: true
      });
    if (discrete)
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
    else
      target.dispatchEvent(event);
  }
  let $3db38b7d1fb3fe6a$var$count = 0;
  function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
    React.useEffect(() => {
      var _edgeGuards$, _edgeGuards$2;
      const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
      document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
      document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
      $3db38b7d1fb3fe6a$var$count++;
      return () => {
        if ($3db38b7d1fb3fe6a$var$count === 1)
          document.querySelectorAll("[data-radix-focus-guard]").forEach(
            (node) => node.remove()
          );
        $3db38b7d1fb3fe6a$var$count--;
      };
    }, []);
  }
  function $3db38b7d1fb3fe6a$var$createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
    return element;
  }
  const $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
  const $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
  const $d3863c46a17e8a28$var$EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
  };
  const $d3863c46a17e8a28$export$20e40289641fbbb6 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
    const [container1, setContainer] = React.useState(null);
    const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
    const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
    const lastFocusedElementRef = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
      forwardedRef,
      (node) => setContainer(node)
    );
    const focusScope = React.useRef({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }).current;
    React.useEffect(() => {
      if (trapped) {
        let handleFocusIn = function(event) {
          if (focusScope.paused || !container1)
            return;
          const target = event.target;
          if (container1.contains(target))
            lastFocusedElementRef.current = target;
          else
            $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
              select: true
            });
        }, handleFocusOut = function(event) {
          if (focusScope.paused || !container1)
            return;
          const relatedTarget = event.relatedTarget;
          if (relatedTarget === null)
            return;
          if (!container1.contains(relatedTarget))
            $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
              select: true
            });
        }, handleMutations = function(mutations) {
          const focusedElement = document.activeElement;
          if (focusedElement !== document.body)
            return;
          for (const mutation of mutations)
            if (mutation.removedNodes.length > 0)
              $d3863c46a17e8a28$var$focus(container1);
        };
        document.addEventListener("focusin", handleFocusIn);
        document.addEventListener("focusout", handleFocusOut);
        const mutationObserver = new MutationObserver(handleMutations);
        if (container1)
          mutationObserver.observe(container1, {
            childList: true,
            subtree: true
          });
        return () => {
          document.removeEventListener("focusin", handleFocusIn);
          document.removeEventListener("focusout", handleFocusOut);
          mutationObserver.disconnect();
        };
      }
    }, [
      trapped,
      container1,
      focusScope.paused
    ]);
    React.useEffect(() => {
      if (container1) {
        $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
        const previouslyFocusedElement = document.activeElement;
        const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
        if (!hasFocusedCandidate) {
          const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          container1.dispatchEvent(mountEvent);
          if (!mountEvent.defaultPrevented) {
            $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
              select: true
            });
            if (document.activeElement === previouslyFocusedElement)
              $d3863c46a17e8a28$var$focus(container1);
          }
        }
        return () => {
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          setTimeout(() => {
            const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
            container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            container1.dispatchEvent(unmountEvent);
            if (!unmountEvent.defaultPrevented)
              $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
                select: true
              });
            container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
          }, 0);
        };
      }
    }, [
      container1,
      onMountAutoFocus,
      onUnmountAutoFocus,
      focusScope
    ]);
    const handleKeyDown = React.useCallback((event) => {
      if (!loop && !trapped)
        return;
      if (focusScope.paused)
        return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container = event.currentTarget;
        const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container)
            event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop)
              $d3863c46a17e8a28$var$focus(first, {
                select: true
              });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop)
              $d3863c46a17e8a28$var$focus(last, {
                select: true
              });
          }
        }
      }
    }, [
      loop,
      trapped,
      focusScope.paused
    ]);
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      tabIndex: -1
    }, scopeProps, {
      ref: composedRefs,
      onKeyDown: handleKeyDown
    }));
  });
  function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates) {
      $d3863c46a17e8a28$var$focus(candidate, {
        select
      });
      if (document.activeElement !== previouslyFocusedElement)
        return;
    }
  }
  function $d3863c46a17e8a28$var$getTabbableEdges(container) {
    const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
    const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
    const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
    return [
      first,
      last
    ];
  }
  function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (node) => {
        const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
        if (node.disabled || node.hidden || isHiddenInput)
          return NodeFilter.FILTER_SKIP;
        return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    while (walker.nextNode())
      nodes.push(walker.currentNode);
    return nodes;
  }
  function $d3863c46a17e8a28$var$findVisible(elements, container) {
    for (const element of elements) {
      if (!$d3863c46a17e8a28$var$isHidden(element, {
        upTo: container
      }))
        return element;
    }
  }
  function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden")
      return true;
    while (node) {
      if (upTo !== void 0 && node === upTo)
        return false;
      if (getComputedStyle(node).display === "none")
        return true;
      node = node.parentElement;
    }
    return false;
  }
  function $d3863c46a17e8a28$var$isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
  }
  function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
    if (element && element.focus) {
      const previouslyFocusedElement = document.activeElement;
      element.focus({
        preventScroll: true
      });
      if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
        element.select();
    }
  }
  const $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
  function $d3863c46a17e8a28$var$createFocusScopesStack() {
    let stack = [];
    return {
      add(focusScope) {
        const activeFocusScope = stack[0];
        if (focusScope !== activeFocusScope)
          activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
        stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
        stack.unshift(focusScope);
      },
      remove(focusScope) {
        var _stack$;
        stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
        (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
      }
    };
  }
  function $d3863c46a17e8a28$var$arrayRemove(array, item) {
    const updatedArray = [
      ...array
    ];
    const index2 = updatedArray.indexOf(item);
    if (index2 !== -1)
      updatedArray.splice(index2, 1);
    return updatedArray;
  }
  function $d3863c46a17e8a28$var$removeLinks(items) {
    return items.filter(
      (item) => item.tagName !== "A"
    );
  }
  const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? React.useLayoutEffect : () => {
  };
  const $1746a345f3d73bb7$var$useReactId = React__namespace["useId".toString()] || (() => void 0);
  let $1746a345f3d73bb7$var$count = 0;
  function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
    const [id, setId] = React__namespace.useState($1746a345f3d73bb7$var$useReactId());
    $9f79659886946c16$export$e5c5a5f917a5871c(() => {
      if (!deterministicId)
        setId(
          (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
        );
    }, [
      deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : "");
  }
  const sides = ["top", "right", "bottom", "left"];
  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createCoords = (v) => ({
    x: v,
    y: v
  });
  const oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  const oppositeAlignmentMap = {
    start: "end",
    end: "start"
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  function getSideAxis(placement) {
    return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
  }
  function getSideList(side, isStart, rtl) {
    const lr = ["left", "right"];
    const rl = ["right", "left"];
    const tb = ["top", "bottom"];
    const bt = ["bottom", "top"];
    switch (side) {
      case "top":
      case "bottom":
        if (rtl)
          return isStart ? rl : lr;
        return isStart ? lr : rl;
      case "left":
      case "right":
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    return {
      ...rect,
      top: rect.y,
      left: rect.x,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    };
  }
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  const computePosition$1 = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
    let rects = await platform2.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x,
      y
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i = 0; i < validMiddleware.length; i++) {
      const {
        name,
        fn
      } = validMiddleware[i];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x,
        y,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: platform2,
        elements: {
          reference,
          floating
        }
      });
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform2.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x,
            y
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i = -1;
        continue;
      }
    }
    return {
      x,
      y,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  async function detectOverflow(state, options2) {
    var _await$platform$isEle;
    if (options2 === void 0) {
      options2 = {};
    }
    const {
      x,
      y,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options2, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
      element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      ...rects.floating,
      x,
      y
    } : rects.reference;
    const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
    const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  const arrow$2 = (options2) => ({
    name: "arrow",
    options: options2,
    async fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        platform: platform2,
        elements,
        middlewareData
      } = state;
      const {
        element,
        padding = 0
      } = evaluate(options2, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x,
        y
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = await platform2.getDimensions(element);
      const isYAxis = axis === "y";
      const minProp = isYAxis ? "top" : "left";
      const maxProp = isYAxis ? "bottom" : "right";
      const clientProp = isYAxis ? "clientHeight" : "clientWidth";
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
      if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
      const min$1 = minPadding;
      const max2 = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset2 = clamp(min$1, center, max2);
      const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset2,
          centerOffset: center - offset2 - alignmentOffset,
          ...shouldAddOffset && {
            alignmentOffset
          }
        },
        reset: shouldAddOffset
      };
    }
  });
  const flip$1 = function(options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    return {
      name: "flip",
      options: options2,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options2, state);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides2 = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$map$so;
                const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  function getSideOffsets(overflow, rect) {
    return {
      top: overflow.top - rect.height,
      right: overflow.right - rect.width,
      bottom: overflow.bottom - rect.height,
      left: overflow.left - rect.width
    };
  }
  function isAnySideFullyClipped(overflow) {
    return sides.some((side) => overflow[side] >= 0);
  }
  const hide$1 = function(options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    return {
      name: "hide",
      options: options2,
      async fn(state) {
        const {
          rects
        } = state;
        const {
          strategy = "referenceHidden",
          ...detectOverflowOptions
        } = evaluate(options2, state);
        switch (strategy) {
          case "referenceHidden": {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: "reference"
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
          case "escaped": {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
          default: {
            return {};
          }
        }
      }
    };
  };
  async function convertValueToCoords(state, options2) {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options2, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null,
      ...rawValue
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  const offset = function(options2) {
    if (options2 === void 0) {
      options2 = 0;
    }
    return {
      name: "offset",
      options: options2,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x,
          y,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options2);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };
  const shift$1 = function(options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    return {
      name: "shift",
      options: options2,
      async fn(state) {
        const {
          x,
          y,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x2,
                y: y2
              } = _ref;
              return {
                x: x2,
                y: y2
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options2, state);
        const coords = {
          x,
          y
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        };
      }
    };
  };
  const limitShift$1 = function(options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    return {
      options: options2,
      fn(state) {
        const {
          x,
          y,
          placement,
          rects,
          middlewareData
        } = state;
        const {
          offset: offset2 = 0,
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true
        } = evaluate(options2, state);
        const coords = {
          x,
          y
        };
        const crossAxis = getSideAxis(placement);
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        const rawOffset = evaluate(offset2, state);
        const computedOffset = typeof rawOffset === "number" ? {
          mainAxis: rawOffset,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...rawOffset
        };
        if (checkMainAxis) {
          const len = mainAxis === "y" ? "height" : "width";
          const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
          const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
          if (mainAxisCoord < limitMin) {
            mainAxisCoord = limitMin;
          } else if (mainAxisCoord > limitMax) {
            mainAxisCoord = limitMax;
          }
        }
        if (checkCrossAxis) {
          var _middlewareData$offse, _middlewareData$offse2;
          const len = mainAxis === "y" ? "width" : "height";
          const isOriginSide = ["top", "left"].includes(getSide(placement));
          const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
          const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
          if (crossAxisCoord < limitMin) {
            crossAxisCoord = limitMin;
          } else if (crossAxisCoord > limitMax) {
            crossAxisCoord = limitMax;
          }
        }
        return {
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        };
      }
    };
  };
  const size$1 = function(options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    return {
      name: "size",
      options: options2,
      async fn(state) {
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const {
          apply = () => {
          },
          ...detectOverflowOptions
        } = evaluate(options2, state);
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === "y";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const overflowAvailableHeight = height - overflow[heightSide];
        const overflowAvailableWidth = width - overflow[widthSide];
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if (isYAxis) {
          const maximumClippingWidth = width - overflow.left - overflow.right;
          availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
        } else {
          const maximumClippingHeight = height - overflow.top - overflow.bottom;
          availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = await platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].includes(getNodeName(element));
  }
  function isContainingBlock(element) {
    const webkit = isWebKit();
    const css = getComputedStyle$1(element);
    return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else {
        currentNode = getParentNode(currentNode);
      }
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports)
      return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
  }
  function isLastTraversableNode(node) {
    return ["html", "body", "#document"].includes(getNodeName(node));
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = (
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot || // DOM Element detected.
      node.parentNode || // ShadowRoot detected.
      isShadowRoot(node) && node.host || // Fallback.
      getDocumentElement(node)
    );
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getCssDimensions(element) {
    const css = getComputedStyle$1(element);
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;
    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }
  const noOffsets = /* @__PURE__ */ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentIFrame = win.frameElement;
      while (currentIFrame && offsetParent && offsetWin !== win) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle$1(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentIFrame = getWindow(currentIFrame).frameElement;
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      y
    });
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    if (offsetParent === documentElement) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle$1(body).direction === "rtl") {
      x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
      width,
      height,
      x,
      y
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        ...clippingAncestor,
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle$1(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle$1(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    return element.offsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const window2 = getWindow(element);
    if (!isHTMLElement(element)) {
      return window2;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }
  const getElementRects = async function(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...await getDimensionsFn(floating)
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle$1(element).direction === "rtl";
  }
  const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      clearTimeout(timeoutId);
      io && io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const {
        left,
        top,
        width,
        height
      } = element.getBoundingClientRect();
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options2 = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 100);
          } else {
            refresh(false, ratio);
          }
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options2,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (e) {
        io = new IntersectionObserver(handleObserve, options2);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }
  function autoUpdate(reference, floating, update, options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === "function",
      layoutShift = typeof IntersectionObserver === "function",
      animationFrame = false
    } = options2;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            resizeObserver && resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update);
        ancestorResize && ancestor.removeEventListener("resize", update);
      });
      cleanupIo && cleanupIo();
      resizeObserver && resizeObserver.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  const shift = shift$1;
  const flip = flip$1;
  const size = size$1;
  const hide = hide$1;
  const arrow$1 = arrow$2;
  const limitShift = limitShift$1;
  const computePosition = (reference, floating, options2) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = {
      platform,
      ...options2
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition$1(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };
  const arrow = (options2) => {
    function isRef(value) {
      return {}.hasOwnProperty.call(value, "current");
    }
    return {
      name: "arrow",
      options: options2,
      fn(state) {
        const {
          element,
          padding
        } = typeof options2 === "function" ? options2(state) : options2;
        if (element && isRef(element)) {
          if (element.current != null) {
            return arrow$1({
              element: element.current,
              padding
            }).fn(state);
          }
          return {};
        } else if (element) {
          return arrow$1({
            element,
            padding
          }).fn(state);
        }
        return {};
      }
    };
  };
  var index = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
    if (typeof a !== typeof b) {
      return false;
    }
    if (typeof a === "function" && a.toString() === b.toString()) {
      return true;
    }
    let length, i, keys;
    if (a && b && typeof a == "object") {
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length)
          return false;
        for (i = length; i-- !== 0; ) {
          if (!deepEqual(a[i], b[i])) {
            return false;
          }
        }
        return true;
      }
      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) {
        return false;
      }
      for (i = length; i-- !== 0; ) {
        if (!{}.hasOwnProperty.call(b, keys[i])) {
          return false;
        }
      }
      for (i = length; i-- !== 0; ) {
        const key = keys[i];
        if (key === "_owner" && a.$$typeof) {
          continue;
        }
        if (!deepEqual(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
    return a !== a && b !== b;
  }
  function getDPR(element) {
    if (typeof window === "undefined") {
      return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
  }
  function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
  }
  function useLatestRef(value) {
    const ref = React__namespace.useRef(value);
    index(() => {
      ref.current = value;
    });
    return ref;
  }
  function useFloating(options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2,
      elements: {
        reference: externalReference,
        floating: externalFloating
      } = {},
      transform = true,
      whileElementsMounted,
      open
    } = options2;
    const [data, setData] = React__namespace.useState({
      x: 0,
      y: 0,
      strategy,
      placement,
      middlewareData: {},
      isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = React__namespace.useState(middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
      setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = React__namespace.useState(null);
    const [_floating, _setFloating] = React__namespace.useState(null);
    const setReference = React__namespace.useCallback((node) => {
      if (node != referenceRef.current) {
        referenceRef.current = node;
        _setReference(node);
      }
    }, [_setReference]);
    const setFloating = React__namespace.useCallback((node) => {
      if (node !== floatingRef.current) {
        floatingRef.current = node;
        _setFloating(node);
      }
    }, [_setFloating]);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = React__namespace.useRef(null);
    const floatingRef = React__namespace.useRef(null);
    const dataRef = React__namespace.useRef(data);
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform2);
    const update = React__namespace.useCallback(() => {
      if (!referenceRef.current || !floatingRef.current) {
        return;
      }
      const config = {
        placement,
        strategy,
        middleware: latestMiddleware
      };
      if (platformRef.current) {
        config.platform = platformRef.current;
      }
      computePosition(referenceRef.current, floatingRef.current, config).then((data2) => {
        const fullData = {
          ...data2,
          isPositioned: true
        };
        if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
          dataRef.current = fullData;
          ReactDOM__namespace.flushSync(() => {
            setData(fullData);
          });
        }
      });
    }, [latestMiddleware, placement, strategy, platformRef]);
    index(() => {
      if (open === false && dataRef.current.isPositioned) {
        dataRef.current.isPositioned = false;
        setData((data2) => ({
          ...data2,
          isPositioned: false
        }));
      }
    }, [open]);
    const isMountedRef = React__namespace.useRef(false);
    index(() => {
      isMountedRef.current = true;
      return () => {
        isMountedRef.current = false;
      };
    }, []);
    index(() => {
      if (referenceEl)
        referenceRef.current = referenceEl;
      if (floatingEl)
        floatingRef.current = floatingEl;
      if (referenceEl && floatingEl) {
        if (whileElementsMountedRef.current) {
          return whileElementsMountedRef.current(referenceEl, floatingEl, update);
        } else {
          update();
        }
      }
    }, [referenceEl, floatingEl, update, whileElementsMountedRef]);
    const refs = React__namespace.useMemo(() => ({
      reference: referenceRef,
      floating: floatingRef,
      setReference,
      setFloating
    }), [setReference, setFloating]);
    const elements = React__namespace.useMemo(() => ({
      reference: referenceEl,
      floating: floatingEl
    }), [referenceEl, floatingEl]);
    const floatingStyles = React__namespace.useMemo(() => {
      const initialStyles = {
        position: strategy,
        left: 0,
        top: 0
      };
      if (!elements.floating) {
        return initialStyles;
      }
      const x = roundByDPR(elements.floating, data.x);
      const y = roundByDPR(elements.floating, data.y);
      if (transform) {
        return {
          ...initialStyles,
          transform: "translate(" + x + "px, " + y + "px)",
          ...getDPR(elements.floating) >= 1.5 && {
            willChange: "transform"
          }
        };
      }
      return {
        position: strategy,
        left: x,
        top: y
      };
    }, [strategy, transform, elements.floating, data.x, data.y]);
    return React__namespace.useMemo(() => ({
      ...data,
      update,
      refs,
      elements,
      floatingStyles
    }), [data, update, refs, elements, floatingStyles]);
  }
  function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
    const [size2, setSize] = React.useState(void 0);
    $9f79659886946c16$export$e5c5a5f917a5871c(() => {
      if (element) {
        setSize({
          width: element.offsetWidth,
          height: element.offsetHeight
        });
        const resizeObserver = new ResizeObserver((entries) => {
          if (!Array.isArray(entries))
            return;
          if (!entries.length)
            return;
          const entry = entries[0];
          let width;
          let height;
          if ("borderBoxSize" in entry) {
            const borderSizeEntry = entry["borderBoxSize"];
            const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
            width = borderSize["inlineSize"];
            height = borderSize["blockSize"];
          } else {
            width = element.offsetWidth;
            height = element.offsetHeight;
          }
          setSize({
            width,
            height
          });
        });
        resizeObserver.observe(element, {
          box: "border-box"
        });
        return () => resizeObserver.unobserve(element);
      } else
        setSize(void 0);
    }, [
      element
    ]);
    return size2;
  }
  const $cf1ac5d9fe0e8206$var$POPPER_NAME = "Popper";
  const [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
  const [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
  const $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props) => {
    const { __scopePopper, children } = props;
    const [anchor, setAnchor] = React.useState(null);
    return /* @__PURE__ */ React.createElement($cf1ac5d9fe0e8206$var$PopperProvider, {
      scope: __scopePopper,
      anchor,
      onAnchorChange: setAnchor
    }, children);
  };
  const $cf1ac5d9fe0e8206$var$ANCHOR_NAME = "PopperAnchor";
  const $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
    const ref = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    React.useEffect(() => {
      context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
    });
    return virtualRef ? null : /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, anchorProps, {
      ref: composedRefs
    }));
  });
  const $cf1ac5d9fe0e8206$var$CONTENT_NAME = "PopperContent";
  const [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
  const $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
    const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
    const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
    const [content, setContent] = React.useState(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
      forwardedRef,
      (node) => setContent(node)
    );
    const [arrow$12, setArrow] = React.useState(null);
    const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow$12);
    const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
    const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...collisionPaddingProp
    };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
      collisionBoundary
    ];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
      padding: collisionPadding,
      boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        const cleanup = autoUpdate(...args, {
          animationFrame: updatePositionStrategy === "always"
        });
        return cleanup;
      },
      elements: {
        reference: context.anchor
      },
      middleware: [
        offset({
          mainAxis: sideOffset + arrowHeight,
          alignmentAxis: alignOffset
        }),
        avoidCollisions && shift({
          mainAxis: true,
          crossAxis: false,
          limiter: sticky === "partial" ? limitShift() : void 0,
          ...detectOverflowOptions
        }),
        avoidCollisions && flip({
          ...detectOverflowOptions
        }),
        size({
          ...detectOverflowOptions,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
          }
        }),
        arrow$12 && arrow({
          element: arrow$12,
          padding: arrowPadding
        }),
        $cf1ac5d9fe0e8206$var$transformOrigin({
          arrowWidth,
          arrowHeight
        }),
        hideWhenDetached && hide({
          strategy: "referenceHidden",
          ...detectOverflowOptions
        })
      ]
    });
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
    $9f79659886946c16$export$e5c5a5f917a5871c(() => {
      if (isPositioned)
        handlePlaced === null || handlePlaced === void 0 || handlePlaced();
    }, [
      isPositioned,
      handlePlaced
    ]);
    const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
    const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
    const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
    const [contentZIndex, setContentZIndex] = React.useState();
    $9f79659886946c16$export$e5c5a5f917a5871c(() => {
      if (content)
        setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
      content
    ]);
    return /* @__PURE__ */ React.createElement("div", {
      ref: refs.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
        ...floatingStyles,
        transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
        // keep off the page when measuring
        minWidth: "max-content",
        zIndex: contentZIndex,
        ["--radix-popper-transform-origin"]: [
          (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
          (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
        ].join(" ")
      },
      dir: props.dir
    }, /* @__PURE__ */ React.createElement($cf1ac5d9fe0e8206$var$PopperContentProvider, {
      scope: __scopePopper,
      placedSide,
      onArrowChange: setArrow,
      arrowX,
      arrowY,
      shouldHideArrow: cannotCenterArrow
    }, /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-side": placedSide,
      "data-align": placedAlign
    }, contentProps, {
      ref: composedRefs,
      style: {
        ...contentProps.style,
        // if the PopperContent hasn't been placed yet (not all measurements done)
        // we prevent animations so that users's animation don't kick in too early referring wrong sides
        animation: !isPositioned ? "none" : void 0,
        // hide the content if using the hide middleware and should be hidden
        opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : void 0
      }
    }))));
  });
  function $cf1ac5d9fe0e8206$var$isNotNull(value) {
    return value !== null;
  }
  const $cf1ac5d9fe0e8206$var$transformOrigin = (options2) => ({
    name: "transformOrigin",
    options: options2,
    fn(data) {
      var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
      const { placement, rects, middlewareData } = data;
      const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
      const isArrowHidden = cannotCenterArrow;
      const arrowWidth = isArrowHidden ? 0 : options2.arrowWidth;
      const arrowHeight = isArrowHidden ? 0 : options2.arrowHeight;
      const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
      const noArrowAlign = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[placedAlign];
      const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
      const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
      let x = "";
      let y = "";
      if (placedSide === "bottom") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${-arrowHeight}px`;
      } else if (placedSide === "top") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${rects.floating.height + arrowHeight}px`;
      } else if (placedSide === "right") {
        x = `${-arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      } else if (placedSide === "left") {
        x = `${rects.floating.width + arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      }
      return {
        data: {
          x,
          y
        }
      };
    }
  });
  function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
    const [side, align = "center"] = placement.split("-");
    return [
      side,
      align
    ];
  }
  const $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
  const $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
  const $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;
  const $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var _globalThis$document;
    const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
    return container ? /* @__PURE__ */ ReactDOM.createPortal(/* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
      ref: forwardedRef
    })), container) : null;
  });
  function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
    return React.useReducer((state, event) => {
      const nextState = machine[state][event];
      return nextState !== null && nextState !== void 0 ? nextState : state;
    }, initialState);
  }
  const $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
    const { present, children } = props;
    const presence = $921a889cee6df7e8$var$usePresence(present);
    const child = typeof children === "function" ? children({
      present: presence.isPresent
    }) : React.Children.only(children);
    const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? /* @__PURE__ */ React.cloneElement(child, {
      ref
    }) : null;
  };
  $921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
  function $921a889cee6df7e8$var$usePresence(present) {
    const [node1, setNode] = React.useState();
    const stylesRef = React.useRef({});
    const prevPresentRef = React.useRef(present);
    const prevAnimationNameRef = React.useRef("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
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
    React.useEffect(() => {
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [
      state
    ]);
    $9f79659886946c16$export$e5c5a5f917a5871c(() => {
      const styles = stylesRef.current;
      const wasPresent = prevPresentRef.current;
      const hasPresentChanged = wasPresent !== present;
      if (hasPresentChanged) {
        const prevAnimationName = prevAnimationNameRef.current;
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
        if (present)
          send("MOUNT");
        else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
          send("UNMOUNT");
        else {
          const isAnimating = prevAnimationName !== currentAnimationName;
          if (wasPresent && isAnimating)
            send("ANIMATION_OUT");
          else
            send("UNMOUNT");
        }
        prevPresentRef.current = present;
      }
    }, [
      present,
      send
    ]);
    $9f79659886946c16$export$e5c5a5f917a5871c(() => {
      if (node1) {
        const handleAnimationEnd = (event) => {
          const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
          const isCurrentAnimation = currentAnimationName.includes(event.animationName);
          if (event.target === node1 && isCurrentAnimation)
            ReactDOM.flushSync(
              () => send("ANIMATION_END")
            );
        };
        const handleAnimationStart = (event) => {
          if (event.target === node1)
            prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        };
        node1.addEventListener("animationstart", handleAnimationStart);
        node1.addEventListener("animationcancel", handleAnimationEnd);
        node1.addEventListener("animationend", handleAnimationEnd);
        return () => {
          node1.removeEventListener("animationstart", handleAnimationStart);
          node1.removeEventListener("animationcancel", handleAnimationEnd);
          node1.removeEventListener("animationend", handleAnimationEnd);
        };
      } else
        send("ANIMATION_END");
    }, [
      node1,
      send
    ]);
    return {
      isPresent: [
        "mounted",
        "unmountSuspended"
      ].includes(state),
      ref: React.useCallback((node) => {
        if (node)
          stylesRef.current = getComputedStyle(node);
        setNode(node);
      }, [])
    };
  }
  function $921a889cee6df7e8$var$getAnimationName(styles) {
    return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
  }
  function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
  } }) {
    const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
      defaultProp,
      onChange
    });
    const isControlled = prop !== void 0;
    const value1 = isControlled ? prop : uncontrolledProp;
    const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
    const setValue = React.useCallback((nextValue) => {
      if (isControlled) {
        const setter = nextValue;
        const value = typeof nextValue === "function" ? setter(prop) : nextValue;
        if (value !== prop)
          handleChange(value);
      } else
        setUncontrolledProp(nextValue);
    }, [
      isControlled,
      prop,
      setUncontrolledProp,
      handleChange
    ]);
    return [
      value1,
      setValue
    ];
  }
  function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
    const uncontrolledState = React.useState(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = React.useRef(value);
    const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
    React.useEffect(() => {
      if (prevValueRef.current !== value) {
        handleChange(value);
        prevValueRef.current = value;
      }
    }, [
      value,
      prevValueRef,
      handleChange
    ]);
    return uncontrolledState;
  }
  var getDefaultParent = function(originalTarget) {
    if (typeof document === "undefined") {
      return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
  };
  var counterMap = /* @__PURE__ */ new WeakMap();
  var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
  var markerMap = {};
  var lockCount = 0;
  var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
  };
  var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
      if (parent.contains(target)) {
        return target;
      }
      var correctedTarget = unwrapHost(target);
      if (correctedTarget && parent.contains(correctedTarget)) {
        return correctedTarget;
      }
      console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
      return null;
    }).filter(function(x) {
      return Boolean(x);
    });
  };
  var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    if (!markerMap[markerName]) {
      markerMap[markerName] = /* @__PURE__ */ new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = /* @__PURE__ */ new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
      if (!el || elementsToKeep.has(el)) {
        return;
      }
      elementsToKeep.add(el);
      keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
      if (!parent || elementsToStop.has(parent)) {
        return;
      }
      Array.prototype.forEach.call(parent.children, function(node) {
        if (elementsToKeep.has(node)) {
          deep(node);
        } else {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        }
      });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
      hiddenNodes.forEach(function(node) {
        var counterValue = counterMap.get(node) - 1;
        var markerValue = markerCounter.get(node) - 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        if (!counterValue) {
          if (!uncontrolledNodes.has(node)) {
            node.removeAttribute(controlAttribute);
          }
          uncontrolledNodes.delete(node);
        }
        if (!markerValue) {
          node.removeAttribute(markerName);
        }
      });
      lockCount--;
      if (!lockCount) {
        counterMap = /* @__PURE__ */ new WeakMap();
        counterMap = /* @__PURE__ */ new WeakMap();
        uncontrolledNodes = /* @__PURE__ */ new WeakMap();
        markerMap = {};
      }
    };
  };
  var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
      markerName = "data-aria-hidden";
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
      return function() {
        return null;
      };
    }
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
    return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
  };
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  function __rest(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  var zeroRightClassName = "right-scroll-bar-position";
  var fullWidthClassName = "width-before-scroll-bar";
  var noScrollbarsClassName = "with-scroll-bars-hidden";
  var removedBarSizeVariable = "--removed-body-scroll-bar-size";
  function assignRef(ref, value) {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
    return ref;
  }
  function useCallbackRef(initialValue, callback) {
    var ref = React.useState(function() {
      return {
        // value
        value: initialValue,
        // last callback
        callback,
        // "memoized" public interface
        facade: {
          get current() {
            return ref.value;
          },
          set current(value) {
            var last = ref.value;
            if (last !== value) {
              ref.value = value;
              ref.callback(value, last);
            }
          }
        }
      };
    })[0];
    ref.callback = callback;
    return ref.facade;
  }
  var currentValues = /* @__PURE__ */ new WeakMap();
  function useMergeRefs(refs, defaultValue) {
    var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
      return refs.forEach(function(ref) {
        return assignRef(ref, newValue);
      });
    });
    React__namespace.useLayoutEffect(function() {
      var oldValue = currentValues.get(callbackRef);
      if (oldValue) {
        var prevRefs_1 = new Set(oldValue);
        var nextRefs_1 = new Set(refs);
        var current_1 = callbackRef.current;
        prevRefs_1.forEach(function(ref) {
          if (!nextRefs_1.has(ref)) {
            assignRef(ref, null);
          }
        });
        nextRefs_1.forEach(function(ref) {
          if (!prevRefs_1.has(ref)) {
            assignRef(ref, current_1);
          }
        });
      }
      currentValues.set(callbackRef, refs);
    }, [refs]);
    return callbackRef;
  }
  function ItoI(a) {
    return a;
  }
  function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
      middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
      read: function() {
        if (assigned) {
          throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        }
        if (buffer.length) {
          return buffer[buffer.length - 1];
        }
        return defaults;
      },
      useMedium: function(data) {
        var item = middleware(data, assigned);
        buffer.push(item);
        return function() {
          buffer = buffer.filter(function(x) {
            return x !== item;
          });
        };
      },
      assignSyncMedium: function(cb) {
        assigned = true;
        while (buffer.length) {
          var cbs = buffer;
          buffer = [];
          cbs.forEach(cb);
        }
        buffer = {
          push: function(x) {
            return cb(x);
          },
          filter: function() {
            return buffer;
          }
        };
      },
      assignMedium: function(cb) {
        assigned = true;
        var pendingQueue = [];
        if (buffer.length) {
          var cbs = buffer;
          buffer = [];
          cbs.forEach(cb);
          pendingQueue = buffer;
        }
        var executeQueue = function() {
          var cbs2 = pendingQueue;
          pendingQueue = [];
          cbs2.forEach(cb);
        };
        var cycle = function() {
          return Promise.resolve().then(executeQueue);
        };
        cycle();
        buffer = {
          push: function(x) {
            pendingQueue.push(x);
            cycle();
          },
          filter: function(filter) {
            pendingQueue = pendingQueue.filter(filter);
            return buffer;
          }
        };
      }
    };
    return medium;
  }
  function createSidecarMedium(options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = __assign({ async: true, ssr: false }, options2);
    return medium;
  }
  var SideCar$1 = function(_a) {
    var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
    if (!sideCar) {
      throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    }
    var Target = sideCar.read();
    if (!Target) {
      throw new Error("Sidecar medium not found");
    }
    return React__namespace.createElement(Target, __assign({}, rest));
  };
  SideCar$1.isSideCarExport = true;
  function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar$1;
  }
  var effectCar = createSidecarMedium();
  var nothing = function() {
    return;
  };
  var RemoveScroll = React__namespace.forwardRef(function(props, parentRef) {
    var ref = React__namespace.useRef(null);
    var _a = React__namespace.useState({
      onScrollCapture: nothing,
      onWheelCapture: nothing,
      onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
    var SideCar2 = sideCar;
    var containerRef = useMergeRefs([ref, parentRef]);
    var containerProps = __assign(__assign({}, rest), callbacks);
    return React__namespace.createElement(
      React__namespace.Fragment,
      null,
      enabled && React__namespace.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
      forwardProps ? React__namespace.cloneElement(React__namespace.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React__namespace.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
    );
  });
  RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
  };
  RemoveScroll.classNames = {
    fullWidth: fullWidthClassName,
    zeroRight: zeroRightClassName
  };
  var currentNonce;
  var getNonce = function() {
    if (currentNonce) {
      return currentNonce;
    }
    if (typeof __webpack_nonce__ !== "undefined") {
      return __webpack_nonce__;
    }
    return void 0;
  };
  function makeStyleTag() {
    if (!document)
      return null;
    var tag = document.createElement("style");
    tag.type = "text/css";
    var nonce = getNonce();
    if (nonce) {
      tag.setAttribute("nonce", nonce);
    }
    return tag;
  }
  function injectStyles(tag, css) {
    if (tag.styleSheet) {
      tag.styleSheet.cssText = css;
    } else {
      tag.appendChild(document.createTextNode(css));
    }
  }
  function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(tag);
  }
  var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
      add: function(style) {
        if (counter == 0) {
          if (stylesheet = makeStyleTag()) {
            injectStyles(stylesheet, style);
            insertStyleTag(stylesheet);
          }
        }
        counter++;
      },
      remove: function() {
        counter--;
        if (!counter && stylesheet) {
          stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
          stylesheet = null;
        }
      }
    };
  };
  var styleHookSingleton = function() {
    var sheet = stylesheetSingleton();
    return function(styles, isDynamic) {
      React__namespace.useEffect(function() {
        sheet.add(styles);
        return function() {
          sheet.remove();
        };
      }, [styles && isDynamic]);
    };
  };
  var styleSingleton = function() {
    var useStyle = styleHookSingleton();
    var Sheet = function(_a) {
      var styles = _a.styles, dynamic = _a.dynamic;
      useStyle(styles, dynamic);
      return null;
    };
    return Sheet;
  };
  var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  };
  var parse = function(x) {
    return parseInt(x || "", 10) || 0;
  };
  var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
    var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
    var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
    return [parse(left), parse(top), parse(right)];
  };
  var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
      gapMode = "margin";
    }
    if (typeof window === "undefined") {
      return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
      left: offsets[0],
      top: offsets[1],
      right: offsets[2],
      gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
    };
  };
  var Style = styleSingleton();
  var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
      gapMode = "margin";
    }
    return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
      allowRelative && "position: relative ".concat(important, ";"),
      gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
      gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
  };
  var RemoveScrollBar = function(props) {
    var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
    var gap = React__namespace.useMemo(function() {
      return getGapWidth(gapMode);
    }, [gapMode]);
    return React__namespace.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
  };
  var passiveSupported = false;
  if (typeof window !== "undefined") {
    try {
      var options = Object.defineProperty({}, "passive", {
        get: function() {
          passiveSupported = true;
          return true;
        }
      });
      window.addEventListener("test", options, options);
      window.removeEventListener("test", options, options);
    } catch (err) {
      passiveSupported = false;
    }
  }
  var nonPassive = passiveSupported ? { passive: false } : false;
  var alwaysContainsScroll = function(node) {
    return node.tagName === "TEXTAREA";
  };
  var elementCanBeScrolled = function(node, overflow) {
    var styles = window.getComputedStyle(node);
    return (
      // not-not-scrollable
      styles[overflow] !== "hidden" && // contains scroll inside self
      !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
    );
  };
  var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, "overflowY");
  };
  var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, "overflowX");
  };
  var locationCouldBeScrolled = function(axis, node) {
    var current = node;
    do {
      if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
        current = current.host;
      }
      var isScrollable = elementCouldBeScrolled(axis, current);
      if (isScrollable) {
        var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
        if (s > d) {
          return true;
        }
      }
      current = current.parentNode;
    } while (current && current !== document.body);
    return false;
  };
  var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
      scrollTop,
      scrollHeight,
      clientHeight
    ];
  };
  var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
      scrollLeft,
      scrollWidth,
      clientWidth
    ];
  };
  var elementCouldBeScrolled = function(axis, node) {
    return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
  };
  var getScrollVariables = function(axis, node) {
    return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
  };
  var getDirectionFactor = function(axis, direction) {
    return axis === "h" && direction === "rtl" ? -1 : 1;
  };
  var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
      var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
      var elementScroll = scroll_1 - capacity - directionFactor * position;
      if (position || elementScroll) {
        if (elementCouldBeScrolled(axis, target)) {
          availableScroll += elementScroll;
          availableScrollTop += position;
        }
      }
      target = target.parentNode;
    } while (
      // portaled content
      !targetInLock && target !== document.body || // self content
      targetInLock && (endTarget.contains(target) || endTarget === target)
    );
    if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
      shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
      shouldCancelScroll = true;
    }
    return shouldCancelScroll;
  };
  var getTouchXY = function(event) {
    return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
  };
  var getDeltaXY = function(event) {
    return [event.deltaX, event.deltaY];
  };
  var extractRef = function(ref) {
    return ref && "current" in ref ? ref.current : ref;
  };
  var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
  };
  var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
  };
  var idCounter = 0;
  var lockStack = [];
  function RemoveScrollSideCar(props) {
    var shouldPreventQueue = React__namespace.useRef([]);
    var touchStartRef = React__namespace.useRef([0, 0]);
    var activeAxis = React__namespace.useRef();
    var id = React__namespace.useState(idCounter++)[0];
    var Style2 = React__namespace.useState(function() {
      return styleSingleton();
    })[0];
    var lastProps = React__namespace.useRef(props);
    React__namespace.useEffect(function() {
      lastProps.current = props;
    }, [props]);
    React__namespace.useEffect(function() {
      if (props.inert) {
        document.body.classList.add("block-interactivity-".concat(id));
        var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
        allow_1.forEach(function(el) {
          return el.classList.add("allow-interactivity-".concat(id));
        });
        return function() {
          document.body.classList.remove("block-interactivity-".concat(id));
          allow_1.forEach(function(el) {
            return el.classList.remove("allow-interactivity-".concat(id));
          });
        };
      }
      return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = React__namespace.useCallback(function(event, parent) {
      if ("touches" in event && event.touches.length === 2) {
        return !lastProps.current.allowPinchZoom;
      }
      var touch = getTouchXY(event);
      var touchStart = touchStartRef.current;
      var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
      var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
      var currentAxis;
      var target = event.target;
      var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
      if ("touches" in event && moveDirection === "h" && target.type === "range") {
        return false;
      }
      var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
      if (!canBeScrolledInMainDirection) {
        return true;
      }
      if (canBeScrolledInMainDirection) {
        currentAxis = moveDirection;
      } else {
        currentAxis = moveDirection === "v" ? "h" : "v";
        canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
      }
      if (!canBeScrolledInMainDirection) {
        return false;
      }
      if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
        activeAxis.current = currentAxis;
      }
      if (!currentAxis) {
        return true;
      }
      var cancelingAxis = activeAxis.current || currentAxis;
      return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = React__namespace.useCallback(function(_event) {
      var event = _event;
      if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
        return;
      }
      var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
      var sourceEvent = shouldPreventQueue.current.filter(function(e) {
        return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
      })[0];
      if (sourceEvent && sourceEvent.should) {
        if (event.cancelable) {
          event.preventDefault();
        }
        return;
      }
      if (!sourceEvent) {
        var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
          return node.contains(event.target);
        });
        var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
        if (shouldStop) {
          if (event.cancelable) {
            event.preventDefault();
          }
        }
      }
    }, []);
    var shouldCancel = React__namespace.useCallback(function(name, delta, target, should) {
      var event = { name, delta, target, should };
      shouldPreventQueue.current.push(event);
      setTimeout(function() {
        shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
          return e !== event;
        });
      }, 1);
    }, []);
    var scrollTouchStart = React__namespace.useCallback(function(event) {
      touchStartRef.current = getTouchXY(event);
      activeAxis.current = void 0;
    }, []);
    var scrollWheel = React__namespace.useCallback(function(event) {
      shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = React__namespace.useCallback(function(event) {
      shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    React__namespace.useEffect(function() {
      lockStack.push(Style2);
      props.setCallbacks({
        onScrollCapture: scrollWheel,
        onWheelCapture: scrollWheel,
        onTouchMoveCapture: scrollTouchMove
      });
      document.addEventListener("wheel", shouldPrevent, nonPassive);
      document.addEventListener("touchmove", shouldPrevent, nonPassive);
      document.addEventListener("touchstart", scrollTouchStart, nonPassive);
      return function() {
        lockStack = lockStack.filter(function(inst) {
          return inst !== Style2;
        });
        document.removeEventListener("wheel", shouldPrevent, nonPassive);
        document.removeEventListener("touchmove", shouldPrevent, nonPassive);
        document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
      };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return React__namespace.createElement(
      React__namespace.Fragment,
      null,
      inert ? React__namespace.createElement(Style2, { styles: generateStyle(id) }) : null,
      removeScrollBar ? React__namespace.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
    );
  }
  const SideCar = exportSidecar(effectCar, RemoveScrollSideCar);
  var ReactRemoveScroll = React__namespace.forwardRef(function(props, ref) {
    return React__namespace.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: SideCar }));
  });
  ReactRemoveScroll.classNames = RemoveScroll.classNames;
  const $67UHm$RemoveScroll = ReactRemoveScroll;
  const $cb5cc270b50c6fcd$var$POPOVER_NAME = "Popover";
  const [$cb5cc270b50c6fcd$var$createPopoverContext, $cb5cc270b50c6fcd$export$c8393c9e73286932] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cb5cc270b50c6fcd$var$POPOVER_NAME, [
    $cf1ac5d9fe0e8206$export$722aac194ae923
  ]);
  const $cb5cc270b50c6fcd$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
  const [$cb5cc270b50c6fcd$var$PopoverProvider, $cb5cc270b50c6fcd$var$usePopoverContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$POPOVER_NAME);
  const $cb5cc270b50c6fcd$export$5b6b19405a83ff9d = (props) => {
    const { __scopePopover, children, open: openProp, defaultOpen, onOpenChange, modal = false } = props;
    const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
    const triggerRef = React.useRef(null);
    const [hasCustomAnchor, setHasCustomAnchor] = React.useState(false);
    const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    });
    return /* @__PURE__ */ React.createElement($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ React.createElement($cb5cc270b50c6fcd$var$PopoverProvider, {
      scope: __scopePopover,
      contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
      triggerRef,
      open,
      onOpenChange: setOpen,
      onOpenToggle: React.useCallback(
        () => setOpen(
          (prevOpen) => !prevOpen
        ),
        [
          setOpen
        ]
      ),
      hasCustomAnchor,
      onCustomAnchorAdd: React.useCallback(
        () => setHasCustomAnchor(true),
        []
      ),
      onCustomAnchorRemove: React.useCallback(
        () => setHasCustomAnchor(false),
        []
      ),
      modal
    }, children));
  };
  const $cb5cc270b50c6fcd$var$TRIGGER_NAME = "PopoverTrigger";
  const $cb5cc270b50c6fcd$export$7dacb05d26466c3 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopePopover, ...triggerProps } = props;
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$TRIGGER_NAME, __scopePopover);
    const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
    const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
    const trigger = /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": context.open,
      "aria-controls": context.contentId,
      "data-state": $cb5cc270b50c6fcd$var$getState(context.open)
    }, triggerProps, {
      ref: composedTriggerRef,
      onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
    }));
    return context.hasCustomAnchor ? trigger : /* @__PURE__ */ React.createElement($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
      asChild: true
    }, popperScope), trigger);
  });
  const $cb5cc270b50c6fcd$var$PORTAL_NAME = "PopoverPortal";
  const [$cb5cc270b50c6fcd$var$PortalProvider, $cb5cc270b50c6fcd$var$usePortalContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, {
    forceMount: void 0
  });
  const $cb5cc270b50c6fcd$export$dd679ffb4362d2d4 = (props) => {
    const { __scopePopover, forceMount, children, container } = props;
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, __scopePopover);
    return /* @__PURE__ */ React.createElement($cb5cc270b50c6fcd$var$PortalProvider, {
      scope: __scopePopover,
      forceMount
    }, /* @__PURE__ */ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ React.createElement($f1701beae083dbae$export$602eac185826482c, {
      asChild: true,
      container
    }, children)));
  };
  const $cb5cc270b50c6fcd$var$CONTENT_NAME = "PopoverContent";
  const $cb5cc270b50c6fcd$export$d7e1f420b25549ff = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const portalContext = $cb5cc270b50c6fcd$var$usePortalContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
    return /* @__PURE__ */ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, context.modal ? /* @__PURE__ */ React.createElement($cb5cc270b50c6fcd$var$PopoverContentModal, _extends({}, contentProps, {
      ref: forwardedRef
    })) : /* @__PURE__ */ React.createElement($cb5cc270b50c6fcd$var$PopoverContentNonModal, _extends({}, contentProps, {
      ref: forwardedRef
    })));
  });
  const $cb5cc270b50c6fcd$var$PopoverContentModal = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
    const contentRef = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
    const isRightClickOutsideRef = React.useRef(false);
    React.useEffect(() => {
      const content = contentRef.current;
      if (content)
        return hideOthers(content);
    }, []);
    return /* @__PURE__ */ React.createElement($67UHm$RemoveScroll, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
      allowPinchZoom: true
    }, /* @__PURE__ */ React.createElement($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends({}, props, {
      ref: composedRefs,
      trapFocus: context.open,
      disableOutsidePointerEvents: true,
      onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
        var _context$triggerRef$c;
        event.preventDefault();
        if (!isRightClickOutsideRef.current)
          (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
      }),
      onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
        const originalEvent = event.detail.originalEvent;
        const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
        const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
        isRightClickOutsideRef.current = isRightClick;
      }, {
        checkForDefaultPrevented: false
      }),
      onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        props.onFocusOutside,
        (event) => event.preventDefault(),
        {
          checkForDefaultPrevented: false
        }
      )
    })));
  });
  const $cb5cc270b50c6fcd$var$PopoverContentNonModal = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
    const hasInteractedOutsideRef = React.useRef(false);
    const hasPointerDownOutsideRef = React.useRef(false);
    return /* @__PURE__ */ React.createElement($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends({}, props, {
      ref: forwardedRef,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      onCloseAutoFocus: (event) => {
        var _props$onCloseAutoFoc;
        (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
        if (!event.defaultPrevented) {
          var _context$triggerRef$c2;
          if (!hasInteractedOutsideRef.current)
            (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
          event.preventDefault();
        }
        hasInteractedOutsideRef.current = false;
        hasPointerDownOutsideRef.current = false;
      },
      onInteractOutside: (event) => {
        var _props$onInteractOuts, _context$triggerRef$c3;
        (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
        if (!event.defaultPrevented) {
          hasInteractedOutsideRef.current = true;
          if (event.detail.originalEvent.type === "pointerdown")
            hasPointerDownOutsideRef.current = true;
        }
        const target = event.target;
        const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
        if (targetIsTrigger)
          event.preventDefault();
        if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
          event.preventDefault();
      }
    }));
  });
  const $cb5cc270b50c6fcd$var$PopoverContentImpl = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopePopover, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, __scopePopover);
    const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
    $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
    return /* @__PURE__ */ React.createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
      asChild: true,
      loop: true,
      trapped: trapFocus,
      onMountAutoFocus: onOpenAutoFocus,
      onUnmountAutoFocus: onCloseAutoFocus
    }, /* @__PURE__ */ React.createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, {
      asChild: true,
      disableOutsidePointerEvents,
      onInteractOutside,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onDismiss: () => context.onOpenChange(false)
    }, /* @__PURE__ */ React.createElement($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
      "data-state": $cb5cc270b50c6fcd$var$getState(context.open),
      role: "dialog",
      id: context.contentId
    }, popperScope, contentProps, {
      ref: forwardedRef,
      style: {
        ...contentProps.style,
        "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
        "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
        "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }))));
  });
  function $cb5cc270b50c6fcd$var$getState(open) {
    return open ? "open" : "closed";
  }
  const $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9 = $cb5cc270b50c6fcd$export$5b6b19405a83ff9d;
  const $cb5cc270b50c6fcd$export$41fb9f06171c75f4 = $cb5cc270b50c6fcd$export$7dacb05d26466c3;
  const $cb5cc270b50c6fcd$export$602eac185826482c = $cb5cc270b50c6fcd$export$dd679ffb4362d2d4;
  const $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2 = $cb5cc270b50c6fcd$export$d7e1f420b25549ff;
  function cn(...inputs) {
    return tailwindMerge.twMerge(clsx.clsx(inputs));
  }
  const Popover = $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9;
  const PopoverTrigger = $cb5cc270b50c6fcd$export$41fb9f06171c75f4;
  const PopoverContent = React__namespace.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx($cb5cc270b50c6fcd$export$602eac185826482c, { children: /* @__PURE__ */ jsxRuntime.jsx(
    $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2,
    {
      ref,
      align,
      sideOffset,
      className: cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      ),
      ...props
    }
  ) }));
  PopoverContent.displayName = $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2.displayName;
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
    ({ className, variant, size: size2, asChild = false, ...props }, ref) => {
      const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "button";
      return /* @__PURE__ */ jsxRuntime.jsx(
        Comp,
        {
          className: cn(buttonVariants({ variant, size: size2, className })),
          ref,
          ...props
        }
      );
    }
  );
  Button.displayName = "Button";
  const getCookies = (document2) => {
    if (!document2)
      return null;
    const cookies = document2.cookie.split("; ");
    const cookiesObj = cookies.map((item) => {
      const cookie = item.split("=");
      return { [cookie[0]]: cookie[1] };
    });
    const result = cookiesObj.reduce((a, b) => {
      return {
        ...a,
        ...b
      };
    });
    return result;
  };
  const ProjectsGrid = () => {
    const [cookies, setCookies] = React.useState(null);
    const themeCookie = cookies ? cookies["theme"] : "dark";
    React.useEffect(() => {
      if (typeof document !== "undefined") {
        const takenCookies = getCookies(document);
        setCookies(takenCookies);
      }
    }, [typeof document]);
    return /* @__PURE__ */ jsxRuntime.jsxs(Popover, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, className: "rounded-full border w-9 h-9 flex items-center bg-background justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(Button, { size: "icon", variant: "ghost", children: /* @__PURE__ */ jsxRuntime.jsx(index_esm_js$2.MdGridView, { size: 20 }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(PopoverContent, { className: "projects-grid", children: projects.map(
        (project) => /* @__PURE__ */ jsxRuntime.jsxs("a", { href: project.link, className: "w-full h-full flex flex-col items-center justify-center gap-2 rounded-md hover:bg-muted p-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-7 h-7 relative", children: /* @__PURE__ */ jsxRuntime.jsx("img", { src: project.themedIcon ? project.themedIcon[themeCookie] : project.icon, className: "w-full h-full", alt: "project-icon" }) }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs text-center", children: project.name })
        ] }, project.key)
      ) })
    ] });
  };
  const format = {
    numbers: (num) => {
      if (num < 999) {
        return num;
      } else if (num >= 1e3 && num <= 999999) {
        return (num / 1e3).toFixed(1) + " тыс.";
      } else
        return (num / 1e6).toFixed(1) + " млн.";
    },
    random: (len, charSet) => {
      charSet = charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var randomString = "";
      for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
      }
      return randomString;
    },
    generateId: (len, onlyNumbers) => {
      const charSet = onlyNumbers ? "0123456789" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let result = "";
      for (let i = 0; i < len; i++) {
        const randomPoz = Math.floor(Math.random() * charSet.length);
        result += charSet.substring(randomPoz, randomPoz + 1);
      }
      if (onlyNumbers)
        return parseInt(result);
      return result;
    },
    randomNum: (min2 = 0, max2 = 100) => Math.floor(Math.random() * (max2 - min2 + 1) + min2)
  };
  const StarField = ({ className = "", starsCount = 50 }) => {
    const stars = React.useMemo(() => {
      return Array.from({ length: starsCount }).map((_, i) => i);
    }, []);
    const ref = React.useRef(null);
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    const [visible, setVisible] = React.useState(false);
    React.useEffect(() => {
      const div = ref.current;
      if (div) {
        const { clientWidth, clientHeight } = div;
        setWidth(clientWidth);
        setHeight(clientHeight);
        setVisible(true);
      }
    }, [ref]);
    return /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn(
      visible ? "opacity-100" : "opacity-0",
      "absolute w-full h-full",
      className
    ), children: stars.map(
      (star) => /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          style: {
            top: format.randomNum(0 + 10, height - 10),
            left: format.randomNum(0 + 10, width - 10)
          },
          className: "absolute w-0.5 h-0.5 rounded-full bg-primary"
        },
        "star-" + star
      )
    ) });
  };
  function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
      collectionRef: {
        current: null
      },
      itemMap: /* @__PURE__ */ new Map()
    });
    const CollectionProvider = (props) => {
      const { scope, children } = props;
      const ref = React.useRef(null);
      const itemMap = React.useRef(/* @__PURE__ */ new Map()).current;
      return /* @__PURE__ */ React.createElement(CollectionProviderImpl, {
        scope,
        itemMap,
        collectionRef: ref
      }, children);
    };
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlot = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ React.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
        ref: composedRefs
      }, children);
    });
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlot = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = React.useRef(null);
      const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      React.useEffect(() => {
        context.itemMap.set(ref, {
          ref,
          ...itemData
        });
        return () => void context.itemMap.delete(ref);
      });
      return /* @__PURE__ */ React.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
        [ITEM_DATA_ATTR]: "",
        ref: composedRefs
      }, children);
    });
    function useCollection(scope) {
      const context = useCollectionContext(name + "CollectionConsumer", scope);
      const getItems = React.useCallback(() => {
        const collectionNode = context.collectionRef.current;
        if (!collectionNode)
          return [];
        const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
        const items = Array.from(context.itemMap.values());
        const orderedItems = items.sort(
          (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
        );
        return orderedItems;
      }, [
        context.collectionRef,
        context.itemMap
      ]);
      return getItems;
    }
    return [
      {
        Provider: CollectionProvider,
        Slot: CollectionSlot,
        ItemSlot: CollectionItemSlot
      },
      useCollection,
      createCollectionScope
    ];
  }
  const $f631663db3294ace$var$DirectionContext = /* @__PURE__ */ React.createContext(void 0);
  function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
    const globalDir = React.useContext($f631663db3294ace$var$DirectionContext);
    return localDir || globalDir || "ltr";
  }
  const $d7bdfb9eb0fdf311$var$ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
  const $d7bdfb9eb0fdf311$var$EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
  };
  const $d7bdfb9eb0fdf311$var$GROUP_NAME = "RovingFocusGroup";
  const [$d7bdfb9eb0fdf311$var$Collection, $d7bdfb9eb0fdf311$var$useCollection, $d7bdfb9eb0fdf311$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($d7bdfb9eb0fdf311$var$GROUP_NAME);
  const [$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext, $d7bdfb9eb0fdf311$export$c7109489551a4f4] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d7bdfb9eb0fdf311$var$GROUP_NAME, [
    $d7bdfb9eb0fdf311$var$createCollectionScope
  ]);
  const [$d7bdfb9eb0fdf311$var$RovingFocusProvider, $d7bdfb9eb0fdf311$var$useRovingFocusContext] = $d7bdfb9eb0fdf311$var$createRovingFocusGroupContext($d7bdfb9eb0fdf311$var$GROUP_NAME);
  const $d7bdfb9eb0fdf311$export$8699f7c8af148338 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    return /* @__PURE__ */ React.createElement($d7bdfb9eb0fdf311$var$Collection.Provider, {
      scope: props.__scopeRovingFocusGroup
    }, /* @__PURE__ */ React.createElement($d7bdfb9eb0fdf311$var$Collection.Slot, {
      scope: props.__scopeRovingFocusGroup
    }, /* @__PURE__ */ React.createElement($d7bdfb9eb0fdf311$var$RovingFocusGroupImpl, _extends({}, props, {
      ref: forwardedRef
    }))));
  });
  const $d7bdfb9eb0fdf311$var$RovingFocusGroupImpl = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, ...groupProps } = props;
    const ref = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
    const [currentTabStopId = null, setCurrentTabStopId] = $71cd76cc60e0454e$export$6f32135080cb4c3({
      prop: currentTabStopIdProp,
      defaultProp: defaultCurrentTabStopId,
      onChange: onCurrentTabStopIdChange
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = React.useState(false);
    const handleEntryFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEntryFocus);
    const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = React.useRef(false);
    const [focusableItemsCount, setFocusableItemsCount] = React.useState(0);
    React.useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
        return () => node.removeEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
      }
    }, [
      handleEntryFocus
    ]);
    return /* @__PURE__ */ React.createElement($d7bdfb9eb0fdf311$var$RovingFocusProvider, {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: React.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [
          setCurrentTabStopId
        ]
      ),
      onItemShiftTab: React.useCallback(
        () => setIsTabbingBackOut(true),
        []
      ),
      onFocusableItemAdd: React.useCallback(
        () => setFocusableItemsCount(
          (prevCount) => prevCount + 1
        ),
        []
      ),
      onFocusableItemRemove: React.useCallback(
        () => setFocusableItemsCount(
          (prevCount) => prevCount - 1
        ),
        []
      )
    }, /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
      "data-orientation": orientation
    }, groupProps, {
      ref: composedRefs,
      style: {
        outline: "none",
        ...props.style
      },
      onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, () => {
        isClickFocusRef.current = true;
      }),
      onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, (event) => {
        const isKeyboardFocus = !isClickFocusRef.current;
        if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
          const entryFocusEvent = new CustomEvent($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, $d7bdfb9eb0fdf311$var$EVENT_OPTIONS);
          event.currentTarget.dispatchEvent(entryFocusEvent);
          if (!entryFocusEvent.defaultPrevented) {
            const items = getItems().filter(
              (item) => item.focusable
            );
            const activeItem = items.find(
              (item) => item.active
            );
            const currentItem = items.find(
              (item) => item.id === currentTabStopId
            );
            const candidateItems = [
              activeItem,
              currentItem,
              ...items
            ].filter(Boolean);
            const candidateNodes = candidateItems.map(
              (item) => item.ref.current
            );
            $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes);
          }
        }
        isClickFocusRef.current = false;
      }),
      onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        props.onBlur,
        () => setIsTabbingBackOut(false)
      )
    })));
  });
  const $d7bdfb9eb0fdf311$var$ITEM_NAME = "RovingFocusGroupItem";
  const $d7bdfb9eb0fdf311$export$ab9df7c53fe8454 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, ...itemProps } = props;
    const autoId = $1746a345f3d73bb7$export$f680877a34711e37();
    const id = tabStopId || autoId;
    const context = $d7bdfb9eb0fdf311$var$useRovingFocusContext($d7bdfb9eb0fdf311$var$ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove } = context;
    React.useEffect(() => {
      if (focusable) {
        onFocusableItemAdd();
        return () => onFocusableItemRemove();
      }
    }, [
      focusable,
      onFocusableItemAdd,
      onFocusableItemRemove
    ]);
    return /* @__PURE__ */ React.createElement($d7bdfb9eb0fdf311$var$Collection.ItemSlot, {
      scope: __scopeRovingFocusGroup,
      id,
      focusable,
      active
    }, /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
      tabIndex: isCurrentTabStop ? 0 : -1,
      "data-orientation": context.orientation
    }, itemProps, {
      ref: forwardedRef,
      onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
        if (!focusable)
          event.preventDefault();
        else
          context.onItemFocus(id);
      }),
      onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        props.onFocus,
        () => context.onItemFocus(id)
      ),
      onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
        if (event.key === "Tab" && event.shiftKey) {
          context.onItemShiftTab();
          return;
        }
        if (event.target !== event.currentTarget)
          return;
        const focusIntent = $d7bdfb9eb0fdf311$var$getFocusIntent(event, context.orientation, context.dir);
        if (focusIntent !== void 0) {
          event.preventDefault();
          const items = getItems().filter(
            (item) => item.focusable
          );
          let candidateNodes = items.map(
            (item) => item.ref.current
          );
          if (focusIntent === "last")
            candidateNodes.reverse();
          else if (focusIntent === "prev" || focusIntent === "next") {
            if (focusIntent === "prev")
              candidateNodes.reverse();
            const currentIndex = candidateNodes.indexOf(event.currentTarget);
            candidateNodes = context.loop ? $d7bdfb9eb0fdf311$var$wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
          }
          setTimeout(
            () => $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes)
          );
        }
      })
    })));
  });
  const $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(key, dir) {
    if (dir !== "rtl")
      return key;
    return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
  }
  function $d7bdfb9eb0fdf311$var$getFocusIntent(event, orientation, dir) {
    const key = $d7bdfb9eb0fdf311$var$getDirectionAwareKey(event.key, dir);
    if (orientation === "vertical" && [
      "ArrowLeft",
      "ArrowRight"
    ].includes(key))
      return void 0;
    if (orientation === "horizontal" && [
      "ArrowUp",
      "ArrowDown"
    ].includes(key))
      return void 0;
    return $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[key];
  }
  function $d7bdfb9eb0fdf311$var$focusFirst(candidates) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
        return;
      candidate.focus();
      if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
        return;
    }
  }
  function $d7bdfb9eb0fdf311$var$wrapArray(array, startIndex) {
    return array.map(
      (_, index2) => array[(startIndex + index2) % array.length]
    );
  }
  const $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9 = $d7bdfb9eb0fdf311$export$8699f7c8af148338;
  const $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2 = $d7bdfb9eb0fdf311$export$ab9df7c53fe8454;
  const $6cc32821e9371a1c$var$SELECTION_KEYS = [
    "Enter",
    " "
  ];
  const $6cc32821e9371a1c$var$FIRST_KEYS = [
    "ArrowDown",
    "PageUp",
    "Home"
  ];
  const $6cc32821e9371a1c$var$LAST_KEYS = [
    "ArrowUp",
    "PageDown",
    "End"
  ];
  const $6cc32821e9371a1c$var$FIRST_LAST_KEYS = [
    ...$6cc32821e9371a1c$var$FIRST_KEYS,
    ...$6cc32821e9371a1c$var$LAST_KEYS
  ];
  const $6cc32821e9371a1c$var$SUB_OPEN_KEYS = {
    ltr: [
      ...$6cc32821e9371a1c$var$SELECTION_KEYS,
      "ArrowRight"
    ],
    rtl: [
      ...$6cc32821e9371a1c$var$SELECTION_KEYS,
      "ArrowLeft"
    ]
  };
  const $6cc32821e9371a1c$var$SUB_CLOSE_KEYS = {
    ltr: [
      "ArrowLeft"
    ],
    rtl: [
      "ArrowRight"
    ]
  };
  const $6cc32821e9371a1c$var$MENU_NAME = "Menu";
  const [$6cc32821e9371a1c$var$Collection, $6cc32821e9371a1c$var$useCollection, $6cc32821e9371a1c$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($6cc32821e9371a1c$var$MENU_NAME);
  const [$6cc32821e9371a1c$var$createMenuContext, $6cc32821e9371a1c$export$4027731b685e72eb] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6cc32821e9371a1c$var$MENU_NAME, [
    $6cc32821e9371a1c$var$createCollectionScope,
    $cf1ac5d9fe0e8206$export$722aac194ae923,
    $d7bdfb9eb0fdf311$export$c7109489551a4f4
  ]);
  const $6cc32821e9371a1c$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
  const $6cc32821e9371a1c$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
  const [$6cc32821e9371a1c$var$MenuProvider, $6cc32821e9371a1c$var$useMenuContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
  const [$6cc32821e9371a1c$var$MenuRootProvider, $6cc32821e9371a1c$var$useMenuRootContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
  const $6cc32821e9371a1c$export$d9b273488cd8ce6f = (props) => {
    const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
    const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
    const [content, setContent] = React.useState(null);
    const isUsingKeyboardRef = React.useRef(false);
    const handleOpenChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onOpenChange);
    const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
    React.useEffect(() => {
      const handleKeyDown = () => {
        isUsingKeyboardRef.current = true;
        document.addEventListener("pointerdown", handlePointer, {
          capture: true,
          once: true
        });
        document.addEventListener("pointermove", handlePointer, {
          capture: true,
          once: true
        });
      };
      const handlePointer = () => isUsingKeyboardRef.current = false;
      document.addEventListener("keydown", handleKeyDown, {
        capture: true
      });
      return () => {
        document.removeEventListener("keydown", handleKeyDown, {
          capture: true
        });
        document.removeEventListener("pointerdown", handlePointer, {
          capture: true
        });
        document.removeEventListener("pointermove", handlePointer, {
          capture: true
        });
      };
    }, []);
    return /* @__PURE__ */ React.createElement($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$MenuProvider, {
      scope: __scopeMenu,
      open,
      onOpenChange: handleOpenChange,
      content,
      onContentChange: setContent
    }, /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$MenuRootProvider, {
      scope: __scopeMenu,
      onClose: React.useCallback(
        () => handleOpenChange(false),
        [
          handleOpenChange
        ]
      ),
      isUsingKeyboardRef,
      dir: direction,
      modal
    }, children)));
  };
  const $6cc32821e9371a1c$export$9fa5ebd18bee4d43 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeMenu, ...anchorProps } = props;
    const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
    return /* @__PURE__ */ React.createElement($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({}, popperScope, anchorProps, {
      ref: forwardedRef
    }));
  });
  const $6cc32821e9371a1c$var$PORTAL_NAME = "MenuPortal";
  const [$6cc32821e9371a1c$var$PortalProvider, $6cc32821e9371a1c$var$usePortalContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, {
    forceMount: void 0
  });
  const $6cc32821e9371a1c$export$793392f970497feb = (props) => {
    const { __scopeMenu, forceMount, children, container } = props;
    const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, __scopeMenu);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$PortalProvider, {
      scope: __scopeMenu,
      forceMount
    }, /* @__PURE__ */ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ React.createElement($f1701beae083dbae$export$602eac185826482c, {
      asChild: true,
      container
    }, children)));
  };
  const $6cc32821e9371a1c$var$CONTENT_NAME = "MenuContent";
  const [$6cc32821e9371a1c$var$MenuContentProvider, $6cc32821e9371a1c$var$useMenuContentContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$CONTENT_NAME);
  const $6cc32821e9371a1c$export$479f0f2f71193efe = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$Collection.Provider, {
      scope: props.__scopeMenu
    }, /* @__PURE__ */ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$Collection.Slot, {
      scope: props.__scopeMenu
    }, rootContext.modal ? /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$MenuRootContentModal, _extends({}, contentProps, {
      ref: forwardedRef
    })) : /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$MenuRootContentNonModal, _extends({}, contentProps, {
      ref: forwardedRef
    })))));
  });
  const $6cc32821e9371a1c$var$MenuRootContentModal = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    const ref = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    React.useEffect(() => {
      const content = ref.current;
      if (content)
        return hideOthers(content);
    }, []);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$MenuContentImpl, _extends({}, props, {
      ref: composedRefs,
      trapFocus: context.open,
      disableOutsidePointerEvents: context.open,
      disableOutsideScroll: true,
      onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        props.onFocusOutside,
        (event) => event.preventDefault(),
        {
          checkForDefaultPrevented: false
        }
      ),
      onDismiss: () => context.onOpenChange(false)
    }));
  });
  const $6cc32821e9371a1c$var$MenuRootContentNonModal = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$MenuContentImpl, _extends({}, props, {
      ref: forwardedRef,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => context.onOpenChange(false)
    }));
  });
  const $6cc32821e9371a1c$var$MenuContentImpl = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeMenu, loop = false, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEntryFocus, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, disableOutsideScroll, ...contentProps } = props;
    const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
    const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
    const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
    const getItems = $6cc32821e9371a1c$var$useCollection(__scopeMenu);
    const [currentItemId, setCurrentItemId] = React.useState(null);
    const contentRef = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef, context.onContentChange);
    const timerRef = React.useRef(0);
    const searchRef = React.useRef("");
    const pointerGraceTimerRef = React.useRef(0);
    const pointerGraceIntentRef = React.useRef(null);
    const pointerDirRef = React.useRef("right");
    const lastPointerXRef = React.useRef(0);
    const ScrollLockWrapper = disableOutsideScroll ? $67UHm$RemoveScroll : React.Fragment;
    const scrollLockWrapperProps = disableOutsideScroll ? {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
      allowPinchZoom: true
    } : void 0;
    const handleTypeaheadSearch = (key) => {
      var _items$find, _items$find2;
      const search = searchRef.current + key;
      const items = getItems().filter(
        (item) => !item.disabled
      );
      const currentItem = document.activeElement;
      const currentMatch = (_items$find = items.find(
        (item) => item.ref.current === currentItem
      )) === null || _items$find === void 0 ? void 0 : _items$find.textValue;
      const values = items.map(
        (item) => item.textValue
      );
      const nextMatch = $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch);
      const newItem = (_items$find2 = items.find(
        (item) => item.textValue === nextMatch
      )) === null || _items$find2 === void 0 ? void 0 : _items$find2.ref.current;
      (function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "")
          timerRef.current = window.setTimeout(
            () => updateSearch(""),
            1e3
          );
      })(search);
      if (newItem)
        setTimeout(
          () => newItem.focus()
        );
    };
    React.useEffect(() => {
      return () => window.clearTimeout(timerRef.current);
    }, []);
    $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
    const isPointerMovingToSubmenu = React.useCallback((event) => {
      var _pointerGraceIntentRe, _pointerGraceIntentRe2;
      const isMovingTowards = pointerDirRef.current === ((_pointerGraceIntentRe = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe === void 0 ? void 0 : _pointerGraceIntentRe.side);
      return isMovingTowards && $6cc32821e9371a1c$var$isPointerInGraceArea(event, (_pointerGraceIntentRe2 = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe2 === void 0 ? void 0 : _pointerGraceIntentRe2.area);
    }, []);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$MenuContentProvider, {
      scope: __scopeMenu,
      searchRef,
      onItemEnter: React.useCallback((event) => {
        if (isPointerMovingToSubmenu(event))
          event.preventDefault();
      }, [
        isPointerMovingToSubmenu
      ]),
      onItemLeave: React.useCallback((event) => {
        var _contentRef$current;
        if (isPointerMovingToSubmenu(event))
          return;
        (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
        setCurrentItemId(null);
      }, [
        isPointerMovingToSubmenu
      ]),
      onTriggerLeave: React.useCallback((event) => {
        if (isPointerMovingToSubmenu(event))
          event.preventDefault();
      }, [
        isPointerMovingToSubmenu
      ]),
      pointerGraceTimerRef,
      onPointerGraceIntentChange: React.useCallback((intent) => {
        pointerGraceIntentRef.current = intent;
      }, [])
    }, /* @__PURE__ */ React.createElement(ScrollLockWrapper, scrollLockWrapperProps, /* @__PURE__ */ React.createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
      asChild: true,
      trapped: trapFocus,
      onMountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onOpenAutoFocus, (event) => {
        var _contentRef$current2;
        event.preventDefault();
        (_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 || _contentRef$current2.focus();
      }),
      onUnmountAutoFocus: onCloseAutoFocus
    }, /* @__PURE__ */ React.createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, {
      asChild: true,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss
    }, /* @__PURE__ */ React.createElement($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
      asChild: true
    }, rovingFocusGroupScope, {
      dir: rootContext.dir,
      orientation: "vertical",
      loop,
      currentTabStopId: currentItemId,
      onCurrentTabStopIdChange: setCurrentItemId,
      onEntryFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onEntryFocus, (event) => {
        if (!rootContext.isUsingKeyboardRef.current)
          event.preventDefault();
      })
    }), /* @__PURE__ */ React.createElement($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
      role: "menu",
      "aria-orientation": "vertical",
      "data-state": $6cc32821e9371a1c$var$getOpenState(context.open),
      "data-radix-menu-content": "",
      dir: rootContext.dir
    }, popperScope, contentProps, {
      ref: composedRefs,
      style: {
        outline: "none",
        ...contentProps.style
      },
      onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event) => {
        const target = event.target;
        const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
        const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
        const isCharacterKey = event.key.length === 1;
        if (isKeyDownInside) {
          if (event.key === "Tab")
            event.preventDefault();
          if (!isModifierKey && isCharacterKey)
            handleTypeaheadSearch(event.key);
        }
        const content = contentRef.current;
        if (event.target !== content)
          return;
        if (!$6cc32821e9371a1c$var$FIRST_LAST_KEYS.includes(event.key))
          return;
        event.preventDefault();
        const items = getItems().filter(
          (item) => !item.disabled
        );
        const candidateNodes = items.map(
          (item) => item.ref.current
        );
        if ($6cc32821e9371a1c$var$LAST_KEYS.includes(event.key))
          candidateNodes.reverse();
        $6cc32821e9371a1c$var$focusFirst(candidateNodes);
      }),
      onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, (event) => {
        if (!event.currentTarget.contains(event.target)) {
          window.clearTimeout(timerRef.current);
          searchRef.current = "";
        }
      }),
      onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
        const target = event.target;
        const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
        if (event.currentTarget.contains(target) && pointerXHasChanged) {
          const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
          pointerDirRef.current = newDir;
          lastPointerXRef.current = event.clientX;
        }
      }))
    })))))));
  });
  const $6cc32821e9371a1c$export$dd37bec0e8a99143 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeMenu, ...labelProps } = props;
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, labelProps, {
      ref: forwardedRef
    }));
  });
  const $6cc32821e9371a1c$var$ITEM_NAME = "MenuItem";
  const $6cc32821e9371a1c$var$ITEM_SELECT = "menu.itemSelect";
  const $6cc32821e9371a1c$export$2ce376c2cc3355c8 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { disabled = false, onSelect, ...itemProps } = props;
    const ref = React.useRef(null);
    const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
    const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const isPointerDownRef = React.useRef(false);
    const handleSelect = () => {
      const menuItem = ref.current;
      if (!disabled && menuItem) {
        const itemSelectEvent = new CustomEvent($6cc32821e9371a1c$var$ITEM_SELECT, {
          bubbles: true,
          cancelable: true
        });
        menuItem.addEventListener(
          $6cc32821e9371a1c$var$ITEM_SELECT,
          (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
          {
            once: true
          }
        );
        $8927f6f2acc4f386$export$6d1a0317bde7de7f(menuItem, itemSelectEvent);
        if (itemSelectEvent.defaultPrevented)
          isPointerDownRef.current = false;
        else
          rootContext.onClose();
      }
    };
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$MenuItemImpl, _extends({}, itemProps, {
      ref: composedRefs,
      disabled,
      onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, handleSelect),
      onPointerDown: (event) => {
        var _props$onPointerDown;
        (_props$onPointerDown = props.onPointerDown) === null || _props$onPointerDown === void 0 || _props$onPointerDown.call(props, event);
        isPointerDownRef.current = true;
      },
      onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event) => {
        var _event$currentTarget;
        if (!isPointerDownRef.current)
          (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || _event$currentTarget.click();
      }),
      onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
        const isTypingAhead = contentContext.searchRef.current !== "";
        if (disabled || isTypingAhead && event.key === " ")
          return;
        if ($6cc32821e9371a1c$var$SELECTION_KEYS.includes(event.key)) {
          event.currentTarget.click();
          event.preventDefault();
        }
      })
    }));
  });
  const $6cc32821e9371a1c$var$MenuItemImpl = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
    const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, __scopeMenu);
    const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
    const ref = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const [isFocused, setIsFocused] = React.useState(false);
    const [textContent, setTextContent] = React.useState("");
    React.useEffect(() => {
      const menuItem = ref.current;
      if (menuItem) {
        var _menuItem$textContent;
        setTextContent(((_menuItem$textContent = menuItem.textContent) !== null && _menuItem$textContent !== void 0 ? _menuItem$textContent : "").trim());
      }
    }, [
      itemProps.children
    ]);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$Collection.ItemSlot, {
      scope: __scopeMenu,
      disabled,
      textValue: textValue !== null && textValue !== void 0 ? textValue : textContent
    }, /* @__PURE__ */ React.createElement($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
      asChild: true
    }, rovingFocusGroupScope, {
      focusable: !disabled
    }), /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      role: "menuitem",
      "data-highlighted": isFocused ? "" : void 0,
      "aria-disabled": disabled || void 0,
      "data-disabled": disabled ? "" : void 0
    }, itemProps, {
      ref: composedRefs,
      onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
        if (disabled)
          contentContext.onItemLeave(event);
        else {
          contentContext.onItemEnter(event);
          if (!event.defaultPrevented) {
            const item = event.currentTarget;
            item.focus();
          }
        }
      })),
      onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse(
        (event) => contentContext.onItemLeave(event)
      )),
      onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        props.onFocus,
        () => setIsFocused(true)
      ),
      onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        props.onBlur,
        () => setIsFocused(false)
      )
    }))));
  });
  const $6cc32821e9371a1c$export$f6f243521332502d = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$ItemIndicatorProvider, {
      scope: props.__scopeMenu,
      checked
    }, /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends({
      role: "menuitemcheckbox",
      "aria-checked": $6cc32821e9371a1c$var$isIndeterminate(checked) ? "mixed" : checked
    }, checkboxItemProps, {
      ref: forwardedRef,
      "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
      onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        checkboxItemProps.onSelect,
        () => onCheckedChange === null || onCheckedChange === void 0 ? void 0 : onCheckedChange($6cc32821e9371a1c$var$isIndeterminate(checked) ? true : !checked),
        {
          checkForDefaultPrevented: false
        }
      )
    })));
  });
  const $6cc32821e9371a1c$var$RADIO_GROUP_NAME = "MenuRadioGroup";
  const [$6cc32821e9371a1c$var$RadioGroupProvider, $6cc32821e9371a1c$var$useRadioGroupContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$RADIO_GROUP_NAME, {
    value: void 0,
    onValueChange: () => {
    }
  });
  const $6cc32821e9371a1c$var$RADIO_ITEM_NAME = "MenuRadioItem";
  const $6cc32821e9371a1c$export$69bd225e9817f6d0 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { value, ...radioItemProps } = props;
    const context = $6cc32821e9371a1c$var$useRadioGroupContext($6cc32821e9371a1c$var$RADIO_ITEM_NAME, props.__scopeMenu);
    const checked = value === context.value;
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$ItemIndicatorProvider, {
      scope: props.__scopeMenu,
      checked
    }, /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends({
      role: "menuitemradio",
      "aria-checked": checked
    }, radioItemProps, {
      ref: forwardedRef,
      "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
      onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(radioItemProps.onSelect, () => {
        var _context$onValueChang;
        return (_context$onValueChang = context.onValueChange) === null || _context$onValueChang === void 0 ? void 0 : _context$onValueChang.call(context, value);
      }, {
        checkForDefaultPrevented: false
      })
    })));
  });
  const $6cc32821e9371a1c$var$ITEM_INDICATOR_NAME = "MenuItemIndicator";
  const [$6cc32821e9371a1c$var$ItemIndicatorProvider, $6cc32821e9371a1c$var$useItemIndicatorContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, {
    checked: false
  });
  const $6cc32821e9371a1c$export$a2593e23056970a3 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
    const indicatorContext = $6cc32821e9371a1c$var$useItemIndicatorContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, __scopeMenu);
    return /* @__PURE__ */ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || $6cc32821e9371a1c$var$isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true
    }, /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, itemIndicatorProps, {
      ref: forwardedRef,
      "data-state": $6cc32821e9371a1c$var$getCheckedState(indicatorContext.checked)
    })));
  });
  const $6cc32821e9371a1c$export$1cec7dcdd713e220 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeMenu, ...separatorProps } = props;
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      role: "separator",
      "aria-orientation": "horizontal"
    }, separatorProps, {
      ref: forwardedRef
    }));
  });
  const $6cc32821e9371a1c$var$SUB_NAME = "MenuSub";
  const [$6cc32821e9371a1c$var$MenuSubProvider, $6cc32821e9371a1c$var$useMenuSubContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$SUB_NAME);
  const $6cc32821e9371a1c$var$SUB_TRIGGER_NAME = "MenuSubTrigger";
  const $6cc32821e9371a1c$export$5fbbb3ba7297405f = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const openTimerRef = React.useRef(null);
    const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
    const scope = {
      __scopeMenu: props.__scopeMenu
    };
    const clearOpenTimer = React.useCallback(() => {
      if (openTimerRef.current)
        window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }, []);
    React.useEffect(
      () => clearOpenTimer,
      [
        clearOpenTimer
      ]
    );
    React.useEffect(() => {
      const pointerGraceTimer = pointerGraceTimerRef.current;
      return () => {
        window.clearTimeout(pointerGraceTimer);
        onPointerGraceIntentChange(null);
      };
    }, [
      pointerGraceTimerRef,
      onPointerGraceIntentChange
    ]);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$9fa5ebd18bee4d43, _extends({
      asChild: true
    }, scope), /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$MenuItemImpl, _extends({
      id: subContext.triggerId,
      "aria-haspopup": "menu",
      "aria-expanded": context.open,
      "aria-controls": subContext.contentId,
      "data-state": $6cc32821e9371a1c$var$getOpenState(context.open)
    }, props, {
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, subContext.onTriggerChange),
      onClick: (event) => {
        var _props$onClick;
        (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, event);
        if (props.disabled || event.defaultPrevented)
          return;
        event.currentTarget.focus();
        if (!context.open)
          context.onOpenChange(true);
      },
      onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
        contentContext.onItemEnter(event);
        if (event.defaultPrevented)
          return;
        if (!props.disabled && !context.open && !openTimerRef.current) {
          contentContext.onPointerGraceIntentChange(null);
          openTimerRef.current = window.setTimeout(() => {
            context.onOpenChange(true);
            clearOpenTimer();
          }, 100);
        }
      })),
      onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse((event) => {
        var _context$content;
        clearOpenTimer();
        const contentRect = (_context$content = context.content) === null || _context$content === void 0 ? void 0 : _context$content.getBoundingClientRect();
        if (contentRect) {
          var _context$content2;
          const side = (_context$content2 = context.content) === null || _context$content2 === void 0 ? void 0 : _context$content2.dataset.side;
          const rightSide = side === "right";
          const bleed = rightSide ? -5 : 5;
          const contentNearEdge = contentRect[rightSide ? "left" : "right"];
          const contentFarEdge = contentRect[rightSide ? "right" : "left"];
          contentContext.onPointerGraceIntentChange({
            area: [
              // consistently within polygon bounds
              {
                x: event.clientX + bleed,
                y: event.clientY
              },
              {
                x: contentNearEdge,
                y: contentRect.top
              },
              {
                x: contentFarEdge,
                y: contentRect.top
              },
              {
                x: contentFarEdge,
                y: contentRect.bottom
              },
              {
                x: contentNearEdge,
                y: contentRect.bottom
              }
            ],
            side
          });
          window.clearTimeout(pointerGraceTimerRef.current);
          pointerGraceTimerRef.current = window.setTimeout(
            () => contentContext.onPointerGraceIntentChange(null),
            300
          );
        } else {
          contentContext.onTriggerLeave(event);
          if (event.defaultPrevented)
            return;
          contentContext.onPointerGraceIntentChange(null);
        }
      })),
      onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
        const isTypingAhead = contentContext.searchRef.current !== "";
        if (props.disabled || isTypingAhead && event.key === " ")
          return;
        if ($6cc32821e9371a1c$var$SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
          var _context$content3;
          context.onOpenChange(true);
          (_context$content3 = context.content) === null || _context$content3 === void 0 || _context$content3.focus();
          event.preventDefault();
        }
      })
    })));
  });
  const $6cc32821e9371a1c$var$SUB_CONTENT_NAME = "MenuSubContent";
  const $6cc32821e9371a1c$export$e7142ab31822bde6 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...subContentProps } = props;
    const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_CONTENT_NAME, props.__scopeMenu);
    const ref = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$Collection.Provider, {
      scope: props.__scopeMenu
    }, /* @__PURE__ */ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$Collection.Slot, {
      scope: props.__scopeMenu
    }, /* @__PURE__ */ React.createElement($6cc32821e9371a1c$var$MenuContentImpl, _extends({
      id: subContext.contentId,
      "aria-labelledby": subContext.triggerId
    }, subContentProps, {
      ref: composedRefs,
      align: "start",
      side: rootContext.dir === "rtl" ? "left" : "right",
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      trapFocus: false,
      onOpenAutoFocus: (event) => {
        var _ref$current;
        if (rootContext.isUsingKeyboardRef.current)
          (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
        event.preventDefault();
      },
      onCloseAutoFocus: (event) => event.preventDefault(),
      onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
        if (event.target !== subContext.trigger)
          context.onOpenChange(false);
      }),
      onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
        rootContext.onClose();
        event.preventDefault();
      }),
      onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
        const isKeyDownInside = event.currentTarget.contains(event.target);
        const isCloseKey = $6cc32821e9371a1c$var$SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
        if (isKeyDownInside && isCloseKey) {
          var _subContext$trigger;
          context.onOpenChange(false);
          (_subContext$trigger = subContext.trigger) === null || _subContext$trigger === void 0 || _subContext$trigger.focus();
          event.preventDefault();
        }
      })
    })))));
  });
  function $6cc32821e9371a1c$var$getOpenState(open) {
    return open ? "open" : "closed";
  }
  function $6cc32821e9371a1c$var$isIndeterminate(checked) {
    return checked === "indeterminate";
  }
  function $6cc32821e9371a1c$var$getCheckedState(checked) {
    return $6cc32821e9371a1c$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
  }
  function $6cc32821e9371a1c$var$focusFirst(candidates) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
        return;
      candidate.focus();
      if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
        return;
    }
  }
  function $6cc32821e9371a1c$var$wrapArray(array, startIndex) {
    return array.map(
      (_, index2) => array[(startIndex + index2) % array.length]
    );
  }
  function $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch) {
    const isRepeated = search.length > 1 && Array.from(search).every(
      (char) => char === search[0]
    );
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
    let wrappedValues = $6cc32821e9371a1c$var$wrapArray(values, Math.max(currentMatchIndex, 0));
    const excludeCurrentMatch = normalizedSearch.length === 1;
    if (excludeCurrentMatch)
      wrappedValues = wrappedValues.filter(
        (v) => v !== currentMatch
      );
    const nextMatch = wrappedValues.find(
      (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
    );
    return nextMatch !== currentMatch ? nextMatch : void 0;
  }
  function $6cc32821e9371a1c$var$isPointInPolygon(point, polygon) {
    const { x, y } = point;
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i].x;
      const yi = polygon[i].y;
      const xj = polygon[j].x;
      const yj = polygon[j].y;
      const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
      if (intersect)
        inside = !inside;
    }
    return inside;
  }
  function $6cc32821e9371a1c$var$isPointerInGraceArea(event, area) {
    if (!area)
      return false;
    const cursorPos = {
      x: event.clientX,
      y: event.clientY
    };
    return $6cc32821e9371a1c$var$isPointInPolygon(cursorPos, area);
  }
  function $6cc32821e9371a1c$var$whenMouse(handler) {
    return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
  }
  const $6cc32821e9371a1c$export$be92b6f5f03c0fe9 = $6cc32821e9371a1c$export$d9b273488cd8ce6f;
  const $6cc32821e9371a1c$export$b688253958b8dfe7 = $6cc32821e9371a1c$export$9fa5ebd18bee4d43;
  const $6cc32821e9371a1c$export$602eac185826482c = $6cc32821e9371a1c$export$793392f970497feb;
  const $6cc32821e9371a1c$export$7c6e2c02157bb7d2 = $6cc32821e9371a1c$export$479f0f2f71193efe;
  const $6cc32821e9371a1c$export$b04be29aa201d4f5 = $6cc32821e9371a1c$export$dd37bec0e8a99143;
  const $6cc32821e9371a1c$export$6d08773d2e66f8f2 = $6cc32821e9371a1c$export$2ce376c2cc3355c8;
  const $6cc32821e9371a1c$export$16ce288f89fa631c = $6cc32821e9371a1c$export$f6f243521332502d;
  const $6cc32821e9371a1c$export$371ab307eab489c0 = $6cc32821e9371a1c$export$69bd225e9817f6d0;
  const $6cc32821e9371a1c$export$c3468e2714d175fa = $6cc32821e9371a1c$export$a2593e23056970a3;
  const $6cc32821e9371a1c$export$1ff3c3f08ae963c0 = $6cc32821e9371a1c$export$1cec7dcdd713e220;
  const $6cc32821e9371a1c$export$2ea8a7a591ac5eac = $6cc32821e9371a1c$export$5fbbb3ba7297405f;
  const $6cc32821e9371a1c$export$6d4de93b380beddf = $6cc32821e9371a1c$export$e7142ab31822bde6;
  const $d08ef79370b62062$var$DROPDOWN_MENU_NAME = "DropdownMenu";
  const [$d08ef79370b62062$var$createDropdownMenuContext, $d08ef79370b62062$export$c0623cd925aeb687] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d08ef79370b62062$var$DROPDOWN_MENU_NAME, [
    $6cc32821e9371a1c$export$4027731b685e72eb
  ]);
  const $d08ef79370b62062$var$useMenuScope = $6cc32821e9371a1c$export$4027731b685e72eb();
  const [$d08ef79370b62062$var$DropdownMenuProvider, $d08ef79370b62062$var$useDropdownMenuContext] = $d08ef79370b62062$var$createDropdownMenuContext($d08ef79370b62062$var$DROPDOWN_MENU_NAME);
  const $d08ef79370b62062$export$e44a253a59704894 = (props) => {
    const { __scopeDropdownMenu, children, dir, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    const triggerRef = React.useRef(null);
    const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    });
    return /* @__PURE__ */ React.createElement($d08ef79370b62062$var$DropdownMenuProvider, {
      scope: __scopeDropdownMenu,
      triggerId: $1746a345f3d73bb7$export$f680877a34711e37(),
      triggerRef,
      contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React.useCallback(
        () => setOpen(
          (prevOpen) => !prevOpen
        ),
        [
          setOpen
        ]
      ),
      modal
    }, /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$be92b6f5f03c0fe9, _extends({}, menuScope, {
      open,
      onOpenChange: setOpen,
      dir,
      modal
    }), children));
  };
  const $d08ef79370b62062$var$TRIGGER_NAME = "DropdownMenuTrigger";
  const $d08ef79370b62062$export$d2469213b3befba9 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
    const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$TRIGGER_NAME, __scopeDropdownMenu);
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$b688253958b8dfe7, _extends({
      asChild: true
    }, menuScope), /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
      type: "button",
      id: context.triggerId,
      "aria-haspopup": "menu",
      "aria-expanded": context.open,
      "aria-controls": context.open ? context.contentId : void 0,
      "data-state": context.open ? "open" : "closed",
      "data-disabled": disabled ? "" : void 0,
      disabled
    }, triggerProps, {
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, context.triggerRef),
      onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, (event) => {
        if (!disabled && event.button === 0 && event.ctrlKey === false) {
          context.onOpenToggle();
          if (!context.open)
            event.preventDefault();
        }
      }),
      onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
        if (disabled)
          return;
        if ([
          "Enter",
          " "
        ].includes(event.key))
          context.onOpenToggle();
        if (event.key === "ArrowDown")
          context.onOpenChange(true);
        if ([
          "Enter",
          " ",
          "ArrowDown"
        ].includes(event.key))
          event.preventDefault();
      })
    })));
  });
  const $d08ef79370b62062$export$cd369b4d4d54efc9 = (props) => {
    const { __scopeDropdownMenu, ...portalProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$602eac185826482c, _extends({}, menuScope, portalProps));
  };
  const $d08ef79370b62062$var$CONTENT_NAME = "DropdownMenuContent";
  const $d08ef79370b62062$export$6e76d93a37c01248 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDropdownMenu, ...contentProps } = props;
    const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$CONTENT_NAME, __scopeDropdownMenu);
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = React.useRef(false);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$7c6e2c02157bb7d2, _extends({
      id: context.contentId,
      "aria-labelledby": context.triggerId
    }, menuScope, contentProps, {
      ref: forwardedRef,
      onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
        var _context$triggerRef$c;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
        hasInteractedOutsideRef.current = false;
        event.preventDefault();
      }),
      onInteractOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onInteractOutside, (event) => {
        const originalEvent = event.detail.originalEvent;
        const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
        const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
        if (!context.modal || isRightClick)
          hasInteractedOutsideRef.current = true;
      }),
      style: {
        ...props.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }));
  });
  const $d08ef79370b62062$export$76e48c5b57f24495 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDropdownMenu, ...labelProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$b04be29aa201d4f5, _extends({}, menuScope, labelProps, {
      ref: forwardedRef
    }));
  });
  const $d08ef79370b62062$export$ed97964d1871885d = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDropdownMenu, ...itemProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$6d08773d2e66f8f2, _extends({}, menuScope, itemProps, {
      ref: forwardedRef
    }));
  });
  const $d08ef79370b62062$export$53a69729da201fa9 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDropdownMenu, ...checkboxItemProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$16ce288f89fa631c, _extends({}, menuScope, checkboxItemProps, {
      ref: forwardedRef
    }));
  });
  const $d08ef79370b62062$export$e4f69b41b1637536 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDropdownMenu, ...radioItemProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$371ab307eab489c0, _extends({}, menuScope, radioItemProps, {
      ref: forwardedRef
    }));
  });
  const $d08ef79370b62062$export$42355ae145153fb6 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$c3468e2714d175fa, _extends({}, menuScope, itemIndicatorProps, {
      ref: forwardedRef
    }));
  });
  const $d08ef79370b62062$export$da160178fd3bc7e9 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDropdownMenu, ...separatorProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$1ff3c3f08ae963c0, _extends({}, menuScope, separatorProps, {
      ref: forwardedRef
    }));
  });
  const $d08ef79370b62062$export$21dcb7ec56f874cf = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDropdownMenu, ...subTriggerProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$2ea8a7a591ac5eac, _extends({}, menuScope, subTriggerProps, {
      ref: forwardedRef
    }));
  });
  const $d08ef79370b62062$export$f34ec8bc2482cc5f = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDropdownMenu, ...subContentProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ React.createElement($6cc32821e9371a1c$export$6d4de93b380beddf, _extends({}, menuScope, subContentProps, {
      ref: forwardedRef,
      style: {
        ...props.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }));
  });
  const $d08ef79370b62062$export$be92b6f5f03c0fe9 = $d08ef79370b62062$export$e44a253a59704894;
  const $d08ef79370b62062$export$41fb9f06171c75f4 = $d08ef79370b62062$export$d2469213b3befba9;
  const $d08ef79370b62062$export$602eac185826482c = $d08ef79370b62062$export$cd369b4d4d54efc9;
  const $d08ef79370b62062$export$7c6e2c02157bb7d2 = $d08ef79370b62062$export$6e76d93a37c01248;
  const $d08ef79370b62062$export$b04be29aa201d4f5 = $d08ef79370b62062$export$76e48c5b57f24495;
  const $d08ef79370b62062$export$6d08773d2e66f8f2 = $d08ef79370b62062$export$ed97964d1871885d;
  const $d08ef79370b62062$export$16ce288f89fa631c = $d08ef79370b62062$export$53a69729da201fa9;
  const $d08ef79370b62062$export$371ab307eab489c0 = $d08ef79370b62062$export$e4f69b41b1637536;
  const $d08ef79370b62062$export$c3468e2714d175fa = $d08ef79370b62062$export$42355ae145153fb6;
  const $d08ef79370b62062$export$1ff3c3f08ae963c0 = $d08ef79370b62062$export$da160178fd3bc7e9;
  const $d08ef79370b62062$export$2ea8a7a591ac5eac = $d08ef79370b62062$export$21dcb7ec56f874cf;
  const $d08ef79370b62062$export$6d4de93b380beddf = $d08ef79370b62062$export$f34ec8bc2482cc5f;
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  var _excluded$T = ["color"];
  var CheckIcon = /* @__PURE__ */ React.forwardRef(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$T);
    return React.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), React.createElement("path", {
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$Y = ["color"];
  var ChevronRightIcon = /* @__PURE__ */ React.forwardRef(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$Y);
    return React.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), React.createElement("path", {
      d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$1r = ["color"];
  var Cross2Icon = /* @__PURE__ */ React.forwardRef(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$1r);
    return React.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), React.createElement("path", {
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var _excluded$1I = ["color"];
  var DotFilledIcon = /* @__PURE__ */ React.forwardRef(function(_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$1I);
    return React.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), React.createElement("path", {
      d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
      fill: color
    }));
  });
  const DropdownMenu = $d08ef79370b62062$export$be92b6f5f03c0fe9;
  const DropdownMenuTrigger = $d08ef79370b62062$export$41fb9f06171c75f4;
  const DropdownMenuSubTrigger = React__namespace.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    $d08ef79370b62062$export$2ea8a7a591ac5eac,
    {
      ref,
      className: cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        inset && "pl-8",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(ChevronRightIcon, { className: "ml-auto h-4 w-4" })
      ]
    }
  ));
  DropdownMenuSubTrigger.displayName = $d08ef79370b62062$export$2ea8a7a591ac5eac.displayName;
  const DropdownMenuSubContent = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    $d08ef79370b62062$export$6d4de93b380beddf,
    {
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      ),
      ...props
    }
  ));
  DropdownMenuSubContent.displayName = $d08ef79370b62062$export$6d4de93b380beddf.displayName;
  const DropdownMenuContent = React__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx($d08ef79370b62062$export$602eac185826482c, { children: /* @__PURE__ */ jsxRuntime.jsx(
    $d08ef79370b62062$export$7c6e2c02157bb7d2,
    {
      ref,
      sideOffset,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      ),
      ...props
    }
  ) }));
  DropdownMenuContent.displayName = $d08ef79370b62062$export$7c6e2c02157bb7d2.displayName;
  const DropdownMenuItem = React__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    $d08ef79370b62062$export$6d08773d2e66f8f2,
    {
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      ),
      ...props
    }
  ));
  DropdownMenuItem.displayName = $d08ef79370b62062$export$6d08773d2e66f8f2.displayName;
  const DropdownMenuCheckboxItem = React__namespace.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    $d08ef79370b62062$export$16ce288f89fa631c,
    {
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx($d08ef79370b62062$export$c3468e2714d175fa, { children: /* @__PURE__ */ jsxRuntime.jsx(CheckIcon, { className: "h-4 w-4" }) }) }),
        children
      ]
    }
  ));
  DropdownMenuCheckboxItem.displayName = $d08ef79370b62062$export$16ce288f89fa631c.displayName;
  const DropdownMenuRadioItem = React__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    $d08ef79370b62062$export$371ab307eab489c0,
    {
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx($d08ef79370b62062$export$c3468e2714d175fa, { children: /* @__PURE__ */ jsxRuntime.jsx(DotFilledIcon, { className: "h-4 w-4 fill-current" }) }) }),
        children
      ]
    }
  ));
  DropdownMenuRadioItem.displayName = $d08ef79370b62062$export$371ab307eab489c0.displayName;
  const DropdownMenuLabel = React__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    $d08ef79370b62062$export$b04be29aa201d4f5,
    {
      ref,
      className: cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      ),
      ...props
    }
  ));
  DropdownMenuLabel.displayName = $d08ef79370b62062$export$b04be29aa201d4f5.displayName;
  const DropdownMenuSeparator = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    $d08ef79370b62062$export$1ff3c3f08ae963c0,
    {
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className),
      ...props
    }
  ));
  DropdownMenuSeparator.displayName = $d08ef79370b62062$export$1ff3c3f08ae963c0.displayName;
  const defaultMenuMap = [
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
              icon: index_esm_js$3.TiDocumentText,
              text: "Документация",
              link: "https://docs.darkmaterial.space"
            },
            {
              icon: index_esm_js.BiCog,
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
            inactive: /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "outline", className: "w-full", children: /* @__PURE__ */ jsxRuntime.jsx("a", { href: "/plus", children: "Получить Плюс" }) })
          }
        }
      ]
    }
  ];
  const UserSection$1 = ({ description, displayName }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full h-fit pb-4 flex flex-col justify-start", children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-lg font-semibold text-accent-foreground", children: displayName }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: description })
    ] });
  };
  const LinksSection$1 = ({ section }) => {
    const isEmpty = section.items.length === 0;
    const noTitle = !section.title;
    if (!noTitle || !isEmpty)
      return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: section.title }),
        /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {}),
        section.items && section.items.map(
          (item) => /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs("a", { href: item.link, className: "flex items-center py-2 justify-start gap-2", children: [
            item.icon && item.icon({}),
            item.text
          ] }) })
        )
      ] });
  };
  const ProjectsSection$1 = ({ section }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuLabel, { children: "Проекты" }),
      section.projects && section.projects.map(
        (project) => /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs("a", { href: project.link, className: "flex px-0 items-center justify-between w-full", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-base", children: project.name }),
          /* @__PURE__ */ jsxRuntime.jsx(index_esm_js$2.MdOpenInNew, { size: 18, className: "ml-auto" })
        ] }) }, project.key + "-menu")
      )
    ] });
  };
  const MembershipSection$1 = ({ section }) => {
    if (typeof section.state[section.activeState] === "string")
      return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full h-fit pt-5 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-muted-foreground", children: section.state[section.activeState] }) })
      ] });
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {}),
      section.state[section.activeState]
    ] });
  };
  const SignOutSection$1 = ({ section }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { className: "gap-2 py-2", onClick: section.action && section.action, children: [
      /* @__PURE__ */ jsxRuntime.jsx(index_esm_js.BiLogOut, {}),
      "Выйти из профиля"
    ] });
  };
  const DesktopMenu = ({ user, size: size2 = 36, buttonSize, loginLink = "https://darkmaterial.space", menuMap = defaultMenuMap }) => {
    const defaultLoginLink = "https://auth.darkmaterial.space/login?continue=";
    if (!user)
      return /* @__PURE__ */ jsxRuntime.jsx(Button, { size: buttonSize, variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx("a", { href: `${defaultLoginLink}${loginLink}`, children: "Войти" }) });
    return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: user.photoURL ? /* @__PURE__ */ jsxRuntime.jsx("div", { style: { width: `${size2}px`, height: `${size2}px` }, children: /* @__PURE__ */ jsxRuntime.jsx("img", { src: user.photoURL, alt: "user-profile-img", className: "w-full h-full rounded-full object-cover" }) }) : /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          style: { width: `${size2}px`, height: `${size2}px` },
          className: "w-9 h-9 rounded-full bg-muted border shrink-0 flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntime.jsx(index_esm_js.BiUser, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuContent, { className: "p-4 w-60 rounded-xl", children: menuMap && menuMap.map((item, i) => {
        if (item.type === "user")
          return /* @__PURE__ */ jsxRuntime.jsx(UserSection$1, { displayName: user.displayName || "Пользователь", description: user.email || "Не указано" }, i + "-item-no-wrapper");
        if (item.type === "links")
          return /* @__PURE__ */ jsxRuntime.jsx(LinksSection$1, { section: item }, i + "-item-no-wrapper");
        if (item.type === "projects")
          return /* @__PURE__ */ jsxRuntime.jsx(ProjectsSection$1, { section: item }, i + "-item-no-wrapper");
        if (item.type === "membership")
          return /* @__PURE__ */ jsxRuntime.jsx(MembershipSection$1, { section: item }, i + "-item-no-wrapper");
        if (item.type === "sign-out")
          return /* @__PURE__ */ jsxRuntime.jsx(SignOutSection$1, { section: item }, i + "-item-no-wrapper");
        if (item.type === "wrapper") {
          return /* @__PURE__ */ jsxRuntime.jsx("div", { className: item.className || "", children: item.items && item.items.map((wrapperItem, index2) => {
            if (wrapperItem.type === "user")
              return /* @__PURE__ */ jsxRuntime.jsx(UserSection$1, { displayName: user.displayName || "Пользователь", description: user.email || "Не указано" }, i + "-" + index2 + "item-with-wrapper");
            if (wrapperItem.type === "links")
              return /* @__PURE__ */ jsxRuntime.jsx(LinksSection$1, { section: wrapperItem }, i + "-" + index2 + "item-with-wrapper");
            if (wrapperItem.type === "projects")
              return /* @__PURE__ */ jsxRuntime.jsx(ProjectsSection$1, { section: wrapperItem }, i + "-" + index2 + "item-with-wrapper");
            if (wrapperItem.type === "membership")
              return /* @__PURE__ */ jsxRuntime.jsx(MembershipSection$1, { section: wrapperItem }, i + "-" + index2 + "item-with-wrapper");
            if (wrapperItem.type === "sign-out")
              return /* @__PURE__ */ jsxRuntime.jsx(SignOutSection$1, { section: wrapperItem }, i + "-" + index2 + "item-with-wrapper");
          }) }, i + "-item-wrapper");
        }
        return null;
      }) })
    ] });
  };
  const $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
  const [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
  const [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
  const $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
    const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const triggerRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    });
    return /* @__PURE__ */ React.createElement($5d3850c4d0b4e6c7$var$DialogProvider, {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
      titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
      descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React.useCallback(
        () => setOpen(
          (prevOpen) => !prevOpen
        ),
        [
          setOpen
        ]
      ),
      modal
    }, children);
  };
  const $5d3850c4d0b4e6c7$var$TRIGGER_NAME = "DialogTrigger";
  const $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": context.open,
      "aria-controls": context.contentId,
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, triggerProps, {
      ref: composedTriggerRef,
      onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
    }));
  });
  const $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
  const [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
    forceMount: void 0
  });
  const $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
    const { __scopeDialog, forceMount, children, container } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
    return /* @__PURE__ */ React.createElement($5d3850c4d0b4e6c7$var$PortalProvider, {
      scope: __scopeDialog,
      forceMount
    }, React.Children.map(
      children,
      (child) => /* @__PURE__ */ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || context.open
      }, /* @__PURE__ */ React.createElement($f1701beae083dbae$export$602eac185826482c, {
        asChild: true,
        container
      }, child))
    ));
  };
  const $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
  const $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ React.createElement($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
      ref: forwardedRef
    }))) : null;
  });
  const $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ React.createElement($67UHm$RemoveScroll, {
        as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
        allowPinchZoom: true,
        shards: [
          context.contentRef
        ]
      }, /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
      }, overlayProps, {
        ref: forwardedRef,
        style: {
          pointerEvents: "auto",
          ...overlayProps.style
        }
      })))
    );
  });
  const $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
  const $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, context.modal ? /* @__PURE__ */ React.createElement($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
      ref: forwardedRef
    })) : /* @__PURE__ */ React.createElement($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
      ref: forwardedRef
    })));
  });
  const $5d3850c4d0b4e6c7$var$DialogContentModal = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const contentRef = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef);
    React.useEffect(() => {
      const content = contentRef.current;
      if (content)
        return hideOthers(content);
    }, []);
    return /* @__PURE__ */ React.createElement($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
      ref: composedRefs,
      trapFocus: context.open,
      disableOutsidePointerEvents: true,
      onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
        var _context$triggerRef$c;
        event.preventDefault();
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
      }),
      onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
        const originalEvent = event.detail.originalEvent;
        const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
        const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
        if (isRightClick)
          event.preventDefault();
      }),
      onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        props.onFocusOutside,
        (event) => event.preventDefault()
      )
    }));
  });
  const $5d3850c4d0b4e6c7$var$DialogContentNonModal = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = React.useRef(false);
    const hasPointerDownOutsideRef = React.useRef(false);
    return /* @__PURE__ */ React.createElement($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
      ref: forwardedRef,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      onCloseAutoFocus: (event) => {
        var _props$onCloseAutoFoc;
        (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
        if (!event.defaultPrevented) {
          var _context$triggerRef$c2;
          if (!hasInteractedOutsideRef.current)
            (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
          event.preventDefault();
        }
        hasInteractedOutsideRef.current = false;
        hasPointerDownOutsideRef.current = false;
      },
      onInteractOutside: (event) => {
        var _props$onInteractOuts, _context$triggerRef$c3;
        (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
        if (!event.defaultPrevented) {
          hasInteractedOutsideRef.current = true;
          if (event.detail.originalEvent.type === "pointerdown")
            hasPointerDownOutsideRef.current = true;
        }
        const target = event.target;
        const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
        if (targetIsTrigger)
          event.preventDefault();
        if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
          event.preventDefault();
      }
    }));
  });
  const $5d3850c4d0b4e6c7$var$DialogContentImpl = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
    const contentRef = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
    $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
      asChild: true,
      loop: true,
      trapped: trapFocus,
      onMountAutoFocus: onOpenAutoFocus,
      onUnmountAutoFocus: onCloseAutoFocus
    }, /* @__PURE__ */ React.createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
      role: "dialog",
      id: context.contentId,
      "aria-describedby": context.descriptionId,
      "aria-labelledby": context.titleId,
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, contentProps, {
      ref: composedRefs,
      onDismiss: () => context.onOpenChange(false)
    }))), false);
  });
  const $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
  const $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.h2, _extends({
      id: context.titleId
    }, titleProps, {
      ref: forwardedRef
    }));
  });
  const $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME = "DialogDescription";
  const $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.p, _extends({
      id: context.descriptionId
    }, descriptionProps, {
      ref: forwardedRef
    }));
  });
  const $5d3850c4d0b4e6c7$var$CLOSE_NAME = "DialogClose";
  const $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
      type: "button"
    }, closeProps, {
      ref: forwardedRef,
      onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        props.onClick,
        () => context.onOpenChange(false)
      )
    }));
  });
  function $5d3850c4d0b4e6c7$var$getState(open) {
    return open ? "open" : "closed";
  }
  const $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
  const $5d3850c4d0b4e6c7$export$41fb9f06171c75f4 = $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88;
  const $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
  const $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
  const $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;
  const $5d3850c4d0b4e6c7$export$f99233281efd08a0 = $5d3850c4d0b4e6c7$export$16f7638e4a34b909;
  const $5d3850c4d0b4e6c7$export$393edc798c47379d = $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5;
  const $5d3850c4d0b4e6c7$export$f39c2d165cd861fe = $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac;
  const Dialog = $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9;
  const DialogTrigger = $5d3850c4d0b4e6c7$export$41fb9f06171c75f4;
  const DialogPortal = $5d3850c4d0b4e6c7$export$602eac185826482c;
  const DialogOverlay = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
    {
      ref,
      className: cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  ));
  DialogOverlay.displayName = $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff.displayName;
  const DialogContent = React__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
      {
        ref,
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsxs($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Cross2Icon, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] }));
  DialogContent.displayName = $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2.displayName;
  const DialogTitle = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    $5d3850c4d0b4e6c7$export$f99233281efd08a0,
    {
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      ),
      ...props
    }
  ));
  DialogTitle.displayName = $5d3850c4d0b4e6c7$export$f99233281efd08a0.displayName;
  const DialogDescription = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    $5d3850c4d0b4e6c7$export$393edc798c47379d,
    {
      ref,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  ));
  DialogDescription.displayName = $5d3850c4d0b4e6c7$export$393edc798c47379d.displayName;
  const $89eedd556c436f6a$var$DEFAULT_ORIENTATION = "horizontal";
  const $89eedd556c436f6a$var$ORIENTATIONS = [
    "horizontal",
    "vertical"
  ];
  const $89eedd556c436f6a$export$1ff3c3f08ae963c0 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { decorative, orientation: orientationProp = $89eedd556c436f6a$var$DEFAULT_ORIENTATION, ...domProps } = props;
    const orientation = $89eedd556c436f6a$var$isValidOrientation(orientationProp) ? orientationProp : $89eedd556c436f6a$var$DEFAULT_ORIENTATION;
    const ariaOrientation = orientation === "vertical" ? orientation : void 0;
    const semanticProps = decorative ? {
      role: "none"
    } : {
      "aria-orientation": ariaOrientation,
      role: "separator"
    };
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-orientation": orientation
    }, semanticProps, domProps, {
      ref: forwardedRef
    }));
  });
  $89eedd556c436f6a$export$1ff3c3f08ae963c0.propTypes = {
    orientation(props, propName, componentName) {
      const propValue = props[propName];
      const strVal = String(propValue);
      if (propValue && !$89eedd556c436f6a$var$isValidOrientation(propValue))
        return new Error($89eedd556c436f6a$var$getInvalidOrientationError(strVal, componentName));
      return null;
    }
  };
  function $89eedd556c436f6a$var$getInvalidOrientationError(value, componentName) {
    return `Invalid prop \`orientation\` of value \`${value}\` supplied to \`${componentName}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${$89eedd556c436f6a$var$DEFAULT_ORIENTATION}\`.`;
  }
  function $89eedd556c436f6a$var$isValidOrientation(orientation) {
    return $89eedd556c436f6a$var$ORIENTATIONS.includes(orientation);
  }
  const $89eedd556c436f6a$export$be92b6f5f03c0fe9 = $89eedd556c436f6a$export$1ff3c3f08ae963c0;
  const Separator = React__namespace.forwardRef(
    ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
      $89eedd556c436f6a$export$be92b6f5f03c0fe9,
      {
        ref,
        decorative,
        orientation,
        className: cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        ),
        ...props
      }
    )
  );
  Separator.displayName = $89eedd556c436f6a$export$be92b6f5f03c0fe9.displayName;
  const LinksSection = ({ section }) => {
    const isEmpty = section.items.length === 0;
    const noTitle = !section.title;
    if (!noTitle || !isEmpty)
      return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: section.title }),
        /* @__PURE__ */ jsxRuntime.jsx(Separator, { className: "my-2" }),
        section.items && section.items.map(
          (item) => /* @__PURE__ */ jsxRuntime.jsxs("a", { href: item.link, className: "flex items-center py-2 justify-start gap-2", children: [
            item.icon && item.icon({}),
            item.text
          ] })
        )
      ] });
  };
  const MembershipSection = ({ section }) => {
    if (typeof section.state[section.activeState] === "string")
      return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full h-fit pt-5 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-muted-foreground", children: section.state[section.activeState] }) })
      ] });
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Separator, { className: "my-2" }),
      section.state[section.activeState]
    ] });
  };
  const ProjectsSection = ({ section }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Separator, {}),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full h-fit flex flex-col my-4", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-base font-medium mb-2", children: "Проекты" }),
        section.projects && section.projects.map(
          (project) => /* @__PURE__ */ jsxRuntime.jsx(Button, { asChild: true, variant: "ghost", children: /* @__PURE__ */ jsxRuntime.jsxs("a", { href: project.link, className: "flex px-0 items-center justify-between w-full", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-base", children: project.name }),
            /* @__PURE__ */ jsxRuntime.jsx(index_esm_js$2.MdOpenInNew, { size: 18, className: "ml-auto" })
          ] }) }, project.key + "-menu")
        )
      ] })
    ] });
  };
  const SignOutSection = ({ section }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(Button, { className: "gap-2 py-2", variant: "ghost", onClick: section.action && section.action, children: [
      /* @__PURE__ */ jsxRuntime.jsx(index_esm_js.BiLogOut, {}),
      "Выйти из профиля"
    ] });
  };
  const UserSection = ({ description, displayName }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full h-fit pb-4 flex flex-col justify-start", children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-lg font-semibold text-accent-foreground", children: displayName }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: description })
    ] });
  };
  const AuthSection = ({ loginLink = "https://darkmaterial.space" }) => {
    const defaultLoginLink = "https://auth.darkmaterial.space/login?continue=";
    const defaultSignUpLink = "https://auth.darkmaterial.space/signup?continue=";
    const sign_in_link = `${defaultLoginLink}${loginLink}`;
    const sign_up_link = `${defaultSignUpLink}${loginLink}`;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full h-fit flex flex-col gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntime.jsx("a", { href: sign_in_link, children: "Войти" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(Button, { asChild: true, variant: "default", children: /* @__PURE__ */ jsxRuntime.jsx("a", { href: sign_up_link, children: "Зарегистрироваться" }) })
    ] });
  };
  const MobileMenu = ({ user, loginLink = "https://darkmaterial.space", menuMap = defaultMenuMap }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(Dialog, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-9 h-9 rounded-full border shrink-0 bg-background flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(index_esm_js.BiMenu, { size: 20 }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { className: "rounded-none w-full h-full", children: menuMap && menuMap.map((item, i) => {
        if (item.type === "user") {
          if (user)
            return /* @__PURE__ */ jsxRuntime.jsx(
              UserSection,
              {
                displayName: user.displayName || "Пользователь",
                description: user.email || "Не указано"
              },
              i + "mobile-item-no-wrapper"
            );
          return /* @__PURE__ */ jsxRuntime.jsx(AuthSection, { loginLink }, i + "mobile-item-no-wrapper");
        }
        if (item.type === "links")
          return /* @__PURE__ */ jsxRuntime.jsx(LinksSection, { section: item }, i + "mobile-item-no-wrapper");
        if (item.type === "projects")
          return /* @__PURE__ */ jsxRuntime.jsx(ProjectsSection, { section: item }, i + "mobile-item-no-wrapper");
        if (item.type === "membership")
          return /* @__PURE__ */ jsxRuntime.jsx(MembershipSection, { section: item }, i + "mobile-item-no-wrapper");
        if (item.type === "sign-out" && user)
          return /* @__PURE__ */ jsxRuntime.jsx(SignOutSection, { section: item }, i + "mobile-item-no-wrapper");
        if (item.type === "wrapper") {
          return /* @__PURE__ */ jsxRuntime.jsx("div", { className: item.className || "", children: item.items && item.items.map((wrapperItem, index2) => {
            if (wrapperItem.type === "user") {
              if (user)
                return /* @__PURE__ */ jsxRuntime.jsx(
                  UserSection,
                  {
                    displayName: user.displayName || "Пользователь",
                    description: user.email || "Не указано"
                  },
                  i + "-" + index2 + "mobile-item-with-wrapper"
                );
              return /* @__PURE__ */ jsxRuntime.jsx(AuthSection, { loginLink }, i + "mobile-item-no-wrapper");
            }
            if (wrapperItem.type === "links")
              return /* @__PURE__ */ jsxRuntime.jsx(LinksSection, { section: wrapperItem }, i + "-" + index2 + "mobile-item-with-wrapper");
            if (wrapperItem.type === "projects")
              return /* @__PURE__ */ jsxRuntime.jsx(ProjectsSection, { section: wrapperItem }, i + "-" + index2 + "mobile-item-with-wrapper");
            if (wrapperItem.type === "membership")
              return /* @__PURE__ */ jsxRuntime.jsx(MembershipSection, { section: wrapperItem }, i + "-" + index2 + "mobile-item-with-wrapper");
            if (wrapperItem.type === "sign-out" && user)
              return /* @__PURE__ */ jsxRuntime.jsx(SignOutSection, { section: wrapperItem }, i + "-" + index2 + "mobile-item-with-wrapper");
          }) }, i + "-mobile-item-wrapper");
        }
        return null;
      }) })
    ] });
  };
  const UserCircle = ({
    user,
    size: size2 = 36,
    loginLink = "https://darkmaterial.space",
    activeMenu = "desktop",
    buttonSize = "default",
    map = defaultMenuMap
  }) => {
    if (activeMenu === "desktop")
      return /* @__PURE__ */ jsxRuntime.jsx(
        DesktopMenu,
        {
          buttonSize,
          user,
          size: size2,
          menuMap: map,
          loginLink
        }
      );
    return /* @__PURE__ */ jsxRuntime.jsx(
      MobileMenu,
      {
        user,
        menuMap: map,
        loginLink
      }
    );
  };
  const Notification = ({ notification }) => {
    const ref = React.useRef(null);
    const [isInView] = ahooks.useInViewport(ref);
    const { fromSeconds } = luxon.DateTime;
    const formattedDate = fromSeconds(notification.createdAt);
    React.useEffect(() => {
      if (!notification.isViewed && isInView)
        api.notifications.patch(notification.receiver, notification.doc_id, { isViewed: true });
    }, [notification.isViewed, isInView]);
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref, className: "w-full h-fit flex group cursor-pointer hover:bg-card transition-colors", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-9 h-9 rounded-full bg-muted" }) }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full h-fit flex flex-col py-4", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm", children: notification.message }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs text-muted-foreground", children: formattedDate.setLocale("ru").toRelative() })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          size: "icon",
          variant: "ghost",
          className: "opacity-0 group-hover:opacity-100 transition-opacity rounded-full",
          onClick: () => api.notifications.delete(notification.receiver, notification.doc_id),
          children: /* @__PURE__ */ jsxRuntime.jsx(index_esm_js.BiTrashAlt, {})
        }
      ) })
    ] });
  };
  const Notification$1 = React.memo(Notification);
  const api_host = (
    // process.env.NEXT_PUBLIC_API_HOST_PROD as string
    process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_API_HOST_DEV : process.env.NEXT_PUBLIC_API_HOST_PROD
  );
  const Notifications = ({ auth }) => {
    const [open, setOpen] = React.useState(false);
    const [user] = index_esm_js$4.useAuthState(auth);
    const [received, setReceived] = React.useState([]);
    const hasNoViewed = received.filter((notification) => !notification.isViewed);
    const clear = () => {
      if (received.length && user) {
        received.forEach(
          (item) => api.notifications.delete(user.uid, item.doc_id)
        );
      }
    };
    React.useEffect(() => {
      const socket = socket_ioClient.io(api_host);
      socket.on("connect", () => {
        console.log("Connected to notifications");
        if (user) {
          socket.emit("notifications", user.uid);
        }
      });
      socket.on("notifications", (data) => {
        setReceived(data);
      });
      socket.on("exception", (data) => {
        console.log("event", data);
      });
      socket.on("disconnect", () => {
        console.log("Disconnected");
      });
      return () => {
        socket.close();
      };
    }, [user == null ? void 0 : user.uid]);
    if (!user || !auth)
      return null;
    return /* @__PURE__ */ jsxRuntime.jsxs(Popover, { open: user ? open : false, onOpenChange: (state) => setOpen(state), children: [
      /* @__PURE__ */ jsxRuntime.jsxs(PopoverTrigger, { className: "relative w-9 h-9 rounded-full flex items-center justify-center border bg-background", children: [
        hasNoViewed.length !== 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-primary" }),
        /* @__PURE__ */ jsxRuntime.jsx(index_esm_js$1.PiBellBold, { size: 16 })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(PopoverContent, { className: "w-96 p-0 flex flex-col bg-background", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full border-b p-3 flex items-center", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-fit h-fit flex items-center gap-4", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-muted-foreground", children: "Входящие" }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full h-full flex flex-col", children: !received.length ? /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full h-64 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-center text-sm text-muted-foreground", children: "Нет новых уведомлений" }) }) : received.map(
          (notification, i) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(Notification$1, { notification }, notification.doc_id),
            i !== received.length - 1 && /* @__PURE__ */ jsxRuntime.jsx(Separator, {}, notification.doc_id + "-separator")
          ] })
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full h-fit p-2 border-t flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(Button, { size: "sm", onClick: clear, variant: "ghost", children: "Очистить" }) })
      ] })
    ] });
  };
  exports2.Avatar = avatar;
  exports2.Notifications = Notifications;
  exports2.ProjectsGrid = ProjectsGrid;
  exports2.StarField = StarField;
  exports2.UserCircle = UserCircle;
  exports2.projects = projects;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
