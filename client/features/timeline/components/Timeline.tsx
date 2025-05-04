"use client";

import { VStack } from "@yamada-ui/react";
import { useTimelineContext } from "../context/TimelineContext";
import { TweetItem } from "./TweetItem";

export const Timeline = () => {
  const { tweets } = useTimelineContext();

  return (
    <VStack gap="3" mt="6">
      {tweets.map((tweet) => (
        <TweetItem key={tweet.id} tweet={tweet} />
      ))}
    </VStack>
  );
};
