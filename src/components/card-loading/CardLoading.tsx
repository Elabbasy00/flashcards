import * as React from "react";

import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Skeleton from "@mui/joy/Skeleton";
import Typography from "@mui/joy/Typography";
import { Box, CardActions } from "@mui/joy";

export default function CardLoading() {
  return (
    <Card variant="outlined">
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 5 }}>
        <Skeleton variant="text" level="title-lg" />
        <Skeleton variant="text" level="title-lg" />
      </Box>
      <CardContent
        sx={{
          py: 3,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ overflow: "hidden", mb: 2 }}>
          <Skeleton animation="wave">Lorem ipsum Lorem ipsum</Skeleton>
        </Typography>

        <Typography sx={{ overflow: "hidden" }}>
          <Skeleton animation="wave">Lorem ipsum</Skeleton>
        </Typography>
      </CardContent>
      <CardActions buttonFlex="1">
        <Button>
          Read more
          <Skeleton animation="wave" />
        </Button>
        <Button>
          Read more
          <Skeleton animation="wave" />
        </Button>
      </CardActions>
    </Card>
  );
}
