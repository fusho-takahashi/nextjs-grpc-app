"use client";

import { useTimeline } from "../hooks/useTimeline";
import { TweetItem } from "./TweetItem";

export const Timeline = () => {
  const { tweets } = useTimeline();

  return (
    <>
      <ul>
        {tweets.map((tweet) => (
          <TweetItem key={tweet.id} tweet={tweet} />
        ))}
      </ul>
    </>
  );
};
