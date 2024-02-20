import { Container, Grid } from "@mui/joy";
import React from "react";
import CardLoading from "../card-loading/CardLoading";

function LoadingCards() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={4}>
          <CardLoading />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <CardLoading />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <CardLoading />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <CardLoading />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <CardLoading />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <CardLoading />
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoadingCards;
