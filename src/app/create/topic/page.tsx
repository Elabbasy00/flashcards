import TopicForm from "@/src/components/topic-form/TopicForm";
import { createTopic } from "@/src/lib/mongo_db";
import { TopicType } from "@/src/types/data-types";

import { Container } from "@mui/joy";
import { redirect } from "next/navigation";
import React from "react";

function page() {
  const handelSubmit = async (topic: TopicType) => {
    "use server";
    if (!topic.name) return;
    topic.slug = topic.name.toLocaleLowerCase();
    try {
      await createTopic(topic);
    } catch (e: any) {
      return { message: e?.message };
    }
    redirect("/create");
  };

  return (
    <Container>
      <TopicForm handelSubmit={handelSubmit} />
    </Container>
  );
}

export default page;
