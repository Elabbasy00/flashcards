"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function AutoType({
  text,
  style = { fontSize: "2em", display: "block", whiteSpace: "pre-line" },
}: {
  text: string;
  style?: {};
}) {
  return (
    <TypeAnimation
      sequence={[text, 1000]}
      cursor={true}
      repeat={Infinity}
      style={style}
    />
  );
}

export default AutoType;
