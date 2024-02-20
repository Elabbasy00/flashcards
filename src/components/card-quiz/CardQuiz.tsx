"use client";
import { CardType } from "@/src/types/data-types";
import { Button, Grid, Typography, Box, Divider } from "@mui/joy";

import React, { useState } from "react";
import CodeEditorComponent from "../code-editor/CodeEditor";

function CardQuiz({ card }: { card: CardType }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Grid container alignContent="space-between">
        <Grid xs={12} md={6}>
          <Typography level="title-lg">{card?.term}</Typography>
          <Typography level="body-sm">{card?.description}</Typography>{" "}
        </Grid>
        <Grid xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="outlined" onClick={() => setShow(!show)}>
              Show Definition
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <CodeEditorComponent
        style={{ fontSize: "1.1em" }}
        lang={card.lang}
        placeholder="Type card definition here!!"
      />
      <Box mt={2}>
        {show ? (
          <CodeEditorComponent
            style={{ fontSize: "1.1em" }}
            lang={card.lang}
            value={card.definition}
            readOnly
            disabled
          />
        ) : null}
      </Box>
    </>
  );
}

export default CardQuiz;
