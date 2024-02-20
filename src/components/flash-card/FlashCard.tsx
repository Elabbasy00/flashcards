import React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { CardType } from "@/src/types/data-types";

import Link from "next/link";
import { Box, Chip } from "@mui/joy";

function FlashCard({ card }: { card?: CardType }) {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        boxShadow: "lg",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Chip size="sm" color="primary">
          {card?.topic.name}
        </Chip>
        <Chip size="sm" variant="soft" color="primary">
          {card?.lang.toLocaleUpperCase()}
        </Chip>
      </Box>
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Typography sx={{ mb: 2 }} level="title-lg">
          {card?.term}
        </Typography>
        <Typography noWrap level="body-sm" sx={{ maxWidth: "24ch" }}>
          {card?.description}
        </Typography>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level1" }}>
        <CardActions buttonFlex="1">
          <Link href={`/card/${card?._id}/quiz`}>
            <Button variant="outlined">Take Quiz?</Button>
          </Link>
          <Link href={`/card/${card?._id}`}>
            <Button variant="soft">View</Button>
          </Link>
        </CardActions>
      </CardOverflow>
    </Card>
  );
}

export default FlashCard;
