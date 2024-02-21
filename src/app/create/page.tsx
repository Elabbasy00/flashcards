import CardForm from "@/src/components/card-form/CardForm";

import { getAllTopics } from "@/src/lib/mongo_db";

import { Box, Button, Container, Typography } from "@mui/joy";
import Link from "next/link";

import React from "react";

export const revalidate = 1;

async function getTopics() {
  const topics = await getAllTopics({});
  return topics;
}
async function Page() {
  const topics = await getTopics();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography> Create Card</Typography>
        <Link href="create/topic">
          <Button fullWidth>Create Topic</Button>
        </Link>
      </Box>
      <CardForm topics={JSON.parse(JSON.stringify(topics))} />
    </Container>
  );
}

export default Page;
