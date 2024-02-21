import { getAllCards, getAllTopics } from "@/src/lib/mongo_db";
import { Box, Container } from "@mui/joy";
import React from "react";

import CardRender from "@/src/components/card-render/CardRender";
import TopicSelect from "@/src/components/topic-select/TopicSelect";

export const revalidate = 60;

async function getPublic(topic: string | string[] | undefined) {
  const filter: any = { private: false };
  if (topic && topic !== "null") filter["topic"] = topic;

  const cards = await getAllCards(filter);

  return cards;
}

async function getTopics() {
  const topics = await getAllTopics({});
  return topics;
}

async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const topic = searchParams?.topic;
  const cards = await getPublic(topic);
  const topics = await getTopics();

  return (
    <Container>
      <Box sx={{ width: "200px", mb: 2 }}>
        <TopicSelect topics={JSON.parse(JSON.stringify(topics))} />
      </Box>
      <CardRender cards={JSON.parse(JSON.stringify(cards))} />
    </Container>
  );
}

export default Page;
