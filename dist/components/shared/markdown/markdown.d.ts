import type { ForwardedRef } from "react";
import { type MDXEditorMethods, type MDXEditorProps } from "@mdxeditor/editor";
export default function InitializedMDXEditor({ editorRef, ...props }: {
    editorRef: ForwardedRef<MDXEditorMethods> | null;
} & MDXEditorProps): import("react/jsx-runtime").JSX.Element;
