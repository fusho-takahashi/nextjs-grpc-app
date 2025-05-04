"use client";

import { useTimelineContext } from "../context/TimelineContext";
import { TweetItem } from "./TweetItem";

export const Timeline = () => {
  const { tweets } = useTimelineContext();

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
