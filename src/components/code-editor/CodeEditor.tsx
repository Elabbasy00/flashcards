"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Card } from "@mui/joy";
import "@uiw/react-textarea-code-editor/dist.css";
const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

type Props = {
  lang: string;
  value?: string;
  onChange?(e: React.ChangeEvent): void;
  [x: string]: any;
};

function CodeEditorComponent({ lang, value, onChange, ...params }: Props) {
  return (
    <Card>
      <CodeEditor
        value={value}
        language={lang}
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
        onChange={onChange}
        padding={5}
        style={{
          background: "var(--joy-palette-neutral-softBg)",
        }}
        {...params}
      />
    </Card>
  );
}

export default CodeEditorComponent;
