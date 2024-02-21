import { Container, Grid, Typography } from "@mui/joy";
import Hero from "../components/hero/Hero";
import TopicCard from "../components/topic-card/TopicCard";
import { getAllTopics } from "../lib/mongo_db";

async function getTopics() {
  const topics = await getAllTopics({});
  return topics;
}

export const revalidate = 1;

export default async function Home() {
  const topics = await getTopics();
  return (
    <main>
      <Hero />
      <Container>
        <Typography
          sx={{ textAlign: "center", my: 5 }}
          variant="soft"
          color="primary"
          level="h1"
        >
          Topics
        </Typography>
        <Grid container spacing={2}>
          {topics.map((topic) => (
            <Grid xs={12} md={6} key={topic.id}>
              <TopicCard topic={topic} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
