"use client";
import { CardType } from "@/src/types/data-types";
import { Box, Button, Grid } from "@mui/joy";
import React from "react";
import FlashCard from "../flash-card/FlashCard";
import { useLoadMore } from "@/src/hooks/useLoadMore";
import { MdDownloadForOffline } from "react-icons/md";

function CardRender({ cards }: { cards: CardType[] }) {
  const { loadMore, more, isLoading } = useLoadMore(cards, false);

  return (
    <>
      <Grid container spacing={2}>
        {(more || []).map((card: any) => (
          <Grid xs={12} sm={6} md={4} key={card?._id}>
            <FlashCard card={card} />
          </Grid>
        ))}
        <Grid xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              color="neutral"
              variant="outlined"
              endDecorator={<MdDownloadForOffline />}
              onClick={loadMore}
              disabled={isLoading}
            >
              Load More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default CardRender;
