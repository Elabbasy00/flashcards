import { extendTheme } from "@mui/joy/styles";
import { Inter, Source_Code_Pro, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
  adjustFontFallback: false, // prevent NextJS from adding its own fallback font
  fallback: ["var(--joy-fontFamily-fallback)"], // use Joy UI's fallback font
  display: "swap",
});

const inter = Inter({
  weight: "600",
  subsets: ["latin"],
  adjustFontFallback: false, // prevent NextJS from adding its own fallback font
  fallback: ["var(--joy-fontFamily-fallback)"], // use Joy UI's fallback font
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  adjustFontFallback: false, // prevent NextJS from adding its own fallback font
  fallback: [
    // the default theme's fallback for monospace fonts
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
  display: "swap",
});

const theme = extendTheme({
  fontFamily: {
    body: montserrat.style.fontFamily,
    display: montserrat.style.fontFamily,
    code: sourceCodePro.style.fontFamily,
  },
  colorSchemes: {
    light: {
      palette: {
        background: {},
      },
    },
    dark: {
      palette: {
        background: {
          body: "rgb(16, 20, 24)",
          surface: "rgba(16, 20, 24, 0.8)",
        },
      },
    },
  },

  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === "primary" &&
            {
              // background: "linear-gradient(to right, #56ccf2, #2f80ed)",
            }),
        }),
      },
    },
  },
});

export default theme;
