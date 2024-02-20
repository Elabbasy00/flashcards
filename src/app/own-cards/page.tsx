import RequireAuth from "@/src/components/RequireAuth/RequireAuth";
import CardRender from "@/src/components/card-render/CardRender";
import FlashCard from "@/src/components/flash-card/FlashCard";
import LoadingCards from "@/src/components/loading/LoadingCards";
import { getAllCards } from "@/src/lib/mongo_db";
import { authOptions } from "@/src/server/auth";
import { Container, Grid } from "@mui/joy";
import { getServerSession } from "next-auth";
import React from "react";

async function getCards(userId: string) {
  const userCards = await getAllCards({ user: userId });
  return userCards;
}
async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <RequireAuth></RequireAuth>;
  const cards = await getCards(session?.user?.userId);
  return (
    <Container>
      <Grid container spacing={2}>
        <CardRender cards={JSON.parse(JSON.stringify(cards))} />
      </Grid>
    </Container>
  );
}

export default Page;
