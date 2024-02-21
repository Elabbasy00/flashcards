"use client";
import { TopicType } from "@/src/types/data-types";
import { FormControl, FormLabel, Option, Select, Skeleton } from "@mui/joy";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

function TopicSelect({
  topics = [],
  onChange,
  value,
  ...params
}: {
  topics: TopicType[];
  value?: string;
  onChange?: Function;
}) {
  const router = useRouter();
  const search = useSearchParams();

  const serverOnChange = (e: string) => {
    router.push(`?topic=${e}`);
  };

  return (
    <Suspense fallback={<Skeleton variant="text" level="h2" />}>
      <FormControl>
        <FormLabel>Topic</FormLabel>
        <Select
          placeholder="Select a topic"
          name="topic"
          {...params}
          value={value}
          defaultValue={search.get("topic") ?? topics?.[0]?._id}
          // @ts-ignore
          onChange={(_, e: string) =>
            onChange ? onChange(e) : serverOnChange(e)
          }
        >
          {topics.map((topic) => (
            <Option key={topic?._id} value={topic?._id}>
              {topic.name}
            </Option>
          ))}
        </Select>
      </FormControl>
    </Suspense>
  );
}

export default TopicSelect;
