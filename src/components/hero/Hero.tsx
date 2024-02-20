import React from "react";

import { Box, Container, Typography } from "@mui/joy";
import AutoType from "../auto-type/AutoType";

function Hero() {
  return (
    <Container
      sx={{
        position: "relative",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        margin: "auto",
        py: 2,
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "150px",
          top: "25%",
          left: "0%",
          opacity: 1,
          zIndex: -1,
          height: "150px",
          borderRadius: "50%",
          background: "var(--custom-bg)",
        }}
      ></Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "inter",

            // background: (theme) => theme.palette.background.level1,
            // backgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          }}
        >
          <AutoType text="My journey started with creating flashcards to aid my own computer science learning. Since then, I've broadened their scope to empower friends, family, and anyone in the community to learn whatever sparks their curiosity. It's now fully open source on GitHub." />
        </Typography>
      </Box>
    </Container>
  );
}

export default Hero;
