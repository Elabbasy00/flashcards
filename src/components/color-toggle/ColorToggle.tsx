import React from "react";
import { useColorScheme } from "@mui/joy/styles";
import { IconButton } from "@mui/joy";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ColorToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="neutral" />;
  }

  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="soft"
      color="primary"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
          document.documentElement.setAttribute("data-color-mode", "dark");
        } else {
          setMode("light");
          document.documentElement.setAttribute("data-color-mode", "light");
        }
      }}
    >
      {mode === "light" ? <MdDarkMode /> : <MdLightMode />}
    </IconButton>
  );
}

export default ColorToggle;
