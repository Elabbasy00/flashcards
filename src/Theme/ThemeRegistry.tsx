"use client";
import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import theme from "./theme";
import { GlobalStyles } from "@mui/joy";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "joy" }}>
      <CssVarsProvider
        theme={theme}
        defaultMode="light"
        disableTransitionOnChange
      >
        <CssBaseline />
        <GlobalStyles
          styles={{
            ":root": {
              "--custom-bg": "linear-gradient(to right, #56ccf2, #2f80ed)",
              "--custom-bg-1":
                "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
              "--custom-bg-2": "linear-gradient(to left, #ffd89b, #19547b);",
            },
          }}
        />
        {children}
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
