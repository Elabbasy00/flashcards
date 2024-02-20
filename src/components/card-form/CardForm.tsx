"use client";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Option,
  Select,
  Textarea,
} from "@mui/joy";
import React, { useState } from "react";
import { TopicType } from "@/src/types/data-types";
import { supportLang } from "@/src/utils/utils";
import { fetcher } from "@/src/utils/fetcher";
import toast from "react-hot-toast";
import TopicSelect from "../topic-select/TopicSelect";
import CodeEditorComponent from "../code-editor/CodeEditor";

import Markdown from "../markdown/Markdown";

function CardForm({ topics = [] }: { topics: TopicType[] }) {
  const [card, setCard] = useState({
    term: "",
    definition: "",
    private: true,
    topic: "",
    lang: "",
    description: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | any): void => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handelSubmit: any = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!card.definition || !card.term || !card.topic) return;

    const response = await fetcher("api/card", {
      method: "post",
      body: JSON.stringify(card),
    });

    if (response.ok) {
      setCard({
        term: "",
        definition: "# HI Am a MarkDown ",
        private: true,
        topic: "",
        lang: "text",
        description: "",
      });
      toast.success("Card Added");
    } else {
      toast.error(response.statusText);
    }
  };

  return (
    <Box component="form" onSubmit={handelSubmit}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6}>
          <TopicSelect
            topics={topics}
            onChange={(e: string) => setCard({ ...card, topic: e })}
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl>
            <FormLabel>Language</FormLabel>
            <Select
              placeholder="Select Language"
              value={card.lang}
              name="lang"
              // @ts-ignore
              onChange={(_, e: string) => setCard({ ...card, lang: e })}
            >
              {supportLang.map((lang) => (
                <Option key={lang.name} value={lang.value}>
                  {lang.name}
                </Option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              minRows={3}
              name="description"
              placeholder="A small description for the card"
              onChange={onChange}
              value={card.description}
            />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl>
            <FormLabel>Term</FormLabel>
            <Input
              placeholder="eg. bit"
              name="term"
              value={card.term}
              onChange={onChange}
            />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl>
            <FormLabel>Definition</FormLabel>

            <Markdown
              placeholder="MarkDown Editor, use #,**,--,etc.. to adjust the text"
              name="definition"
              onChange={onChange}
              value={card.definition}
            />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl>
            <Checkbox
              label="Private"
              name="private"
              checked={card.private}
              onChange={(e) =>
                onChange({
                  target: { name: "private", value: e.target.checked },
                })
              }
            />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <Button sx={{ my: 2 }} type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardForm;
