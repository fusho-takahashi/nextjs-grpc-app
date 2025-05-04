"use client";

import { GetTimelineRequest } from "@/proto/twitter_pb";
import type { Tweet } from "@/shared/types/tweet";
import { createContext, useContext, useEffect, useState } from "react";
import { TwitterCloneClient } from "../../../proto/TwitterServiceClientPb";

const client = new TwitterCloneClient("http://localhost:8080");

interface TimelineContextValue {
  tweets: Tweet[];
  fetchTimeline: () => void;
}

const TimelineContext = createContext<TimelineContextValue | undefined>(undefined);

export const TimelineProvider = ({ children }: { children: React.ReactNode }) => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const fetchTimeline = () => {
    client.getTimeline(new GetTimelineRequest(), {}, (err, res) => {
      if (err) return console.error(err);
      setTweets(res?.getTweetsList().map((t) => t.toObject()) || []);
    });
  };

  useEffect(() => {
    fetchTimeline();
  }, []);

  return <TimelineContext.Provider value={{ tweets, fetchTimeline }}>{children}</TimelineContext.Provider>;
};

export const useTimelineContext = (): TimelineContextValue => {
  const ctx = useContext(TimelineContext);
  if (!ctx) throw new Error("useTimelineContext must be used inside a TimelineProvider");
  return ctx;
};
