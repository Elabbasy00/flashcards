import CardQuiz from "@/src/components/card-quiz/CardQuiz";

import { getCardById } from "@/src/lib/mongo_db";
import { CardType } from "@/src/types/data-types";
import { Container } from "@mui/joy";
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

async function getCard(cardId: string) {
  try {
    const card = await getCardById(cardId);
    return card;
  } catch (e) {
    return null;
  }
}
async function page({ params }: { params: { cardId: string } }) {
  const card: CardType = await getCard(params?.cardId);

  if (!card) return <h1>Not Found</h1>;

  return (
    <Container>
      <CardQuiz card={JSON.parse(JSON.stringify(card))} />
    </Container>
  );
}

export default page;
