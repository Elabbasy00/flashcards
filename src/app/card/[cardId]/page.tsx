import MarkdownView from "@/src/components/markdown/MarkdownView";
import { getCardById } from "@/src/lib/mongo_db";
import { CardType } from "@/src/types/data-types";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Typography,
} from "@mui/joy";
import Link from "next/link";

import React from "react";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { cardId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.cardId;
  const card = await getCardById(id);

  return {
    title: card.term,
    description: card.description,
  };
}

async function getSingleCard(Id: string) {
  const card = await getCardById(Id);
  return card;
}

async function CardId({ params }: { params: { cardId: string } }) {
  const card: CardType = await getSingleCard(params?.cardId);
  return (
    <Container>
      <Card color="primary">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Chip color="primary" size="md">
            {card.lang}
          </Chip>
          <Chip color="primary" size="md">
            {card.topic.name}
          </Chip>
        </Box>
        <CardContent>
          <Typography level="title-lg">{card.term}</Typography>
          <Typography level="body-sm">{card.description}</Typography>
          <Divider sx={{ my: 1 }} />
        </CardContent>
        <MarkdownView source={card?.definition} />

        <CardActions buttonFlex="1 1">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar src={card?.user?.image}></Avatar>
            <Typography level="body-sm"> {card?.user?.name}</Typography>
          </Box>
          <Link href={`/card/${card?._id}/quiz`}>
            <Button>Take a Quiz</Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
}

export default CardId;
