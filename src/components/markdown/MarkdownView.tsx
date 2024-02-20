"use client";
import React from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
function MarkdownView({ source }: { source: string }) {
  return <MarkdownEditor.Markdown source={source} />;
}

export default MarkdownView;
