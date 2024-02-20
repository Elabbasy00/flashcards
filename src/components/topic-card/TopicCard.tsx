import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";

import Typography from "@mui/joy/Typography";
import { TopicType } from "@/src/types/data-types";
import Link from "next/link";

export default function TopicCard({ topic }: { topic: TopicType }) {
  return (
    <Card variant="outlined" color="primary" sx={{ height: "100%" }}>
      <CardContent orientation="horizontal">
        <CardContent>
          <Typography level="h2">{topic.name}</Typography>
          <Typography level="body-lg">{topic.description}</Typography>
        </CardContent>
      </CardContent>
      <CardActions buttonFlex="0 auto 0">
        <Link href={`/public?topic=${topic._id}`}>
          <Button color="primary" variant="soft" size="sm">
            Show Cards
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
