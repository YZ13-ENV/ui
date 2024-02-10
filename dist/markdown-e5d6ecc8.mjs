"use client";
import { jsx as n } from "react/jsx-runtime";
import { MDXEditor as e, headingsPlugin as l, listsPlugin as o, linkPlugin as r, quotePlugin as u, thematicBreakPlugin as a, markdownShortcutPlugin as d } from "@mdxeditor/editor";
function m({
  editorRef: i,
  ...t
}) {
  return /* @__PURE__ */ n(
    e,
    {
      contentEditableClassName: "!ring-0 !border-0 !outline-none md-layout",
      plugins: [
        l(),
        o(),
        r({ disableAutoLink: !0 }),
        u(),
        a(),
        d()
      ],
      ...t,
      ref: i
    }
  );
}
export {
  m as default
};
