import React from "react";

import dynamic from "next/dynamic";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { Sheet } from "@mui/joy";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);
type Props = {
  value?: string;
  onChange?(e: React.ChangeEvent): void;
  [x: string]: any;
};

export default function Markdown({ value, onChange, ...params }: Props) {
  return (
    <Sheet variant="outlined">
      <MarkdownEditor
        value={value}
        height="200px"
        toolbarsMode={["preview"]}
        onChange={(newVal, viewUpdate) =>
          // @ts-ignore
          onChange?.({ target: { name: params?.name, value: newVal } })
        }
      />
    </Sheet>
  );
}
