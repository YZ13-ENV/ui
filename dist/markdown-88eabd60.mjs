"use client";
import { jsx } from "react/jsx-runtime";
import { MDXEditor, headingsPlugin, listsPlugin, linkPlugin, quotePlugin, thematicBreakPlugin, markdownShortcutPlugin } from "@mdxeditor/editor";
function InitializedMDXEditor({
  editorRef,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    MDXEditor,
    {
      contentEditableClassName: "!ring-0 !border-0 !outline-none md-layout",
      plugins: [
        headingsPlugin(),
        listsPlugin(),
        linkPlugin({ disableAutoLink: true }),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin()
      ],
      ...props,
      ref: editorRef
    }
  );
}
export {
  InitializedMDXEditor as default
};
