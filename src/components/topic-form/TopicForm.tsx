"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Textarea,
} from "@mui/joy";
import React from "react";

function TopicForm({ handelSubmit }: { handelSubmit: Function }) {
  const [topic, setTopic] = React.useState({
    name: "",
    description: "",
  });
  const onChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic({ ...topic, [e.target.name]: e.target.value });
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Topic Name"
              name="name"
              value={topic.name}
              onChange={onChange}
            />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Topic description"
              minRows={3}
              name="description"
              onChange={onChange}
              value={topic.description}
            />
          </FormControl>
        </Grid>

        <Grid xs={12}>
          <Button sx={{ my: 2 }} onClick={() => handelSubmit(topic)}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopicForm;
