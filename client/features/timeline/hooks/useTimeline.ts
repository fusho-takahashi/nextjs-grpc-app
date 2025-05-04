import { GetTimelineRequest, Tweet } from "@/proto/twitter_pb";
import { TwitterCloneClient } from "@/proto/TwitterServiceClientPb";
import { useEffect, useState } from "react";

const client = new TwitterCloneClient("http://localhost:8080");

export function useTimeline() {
  const [tweets, setTweets] = useState<Tweet.AsObject[]>([]);

  const fetchTimeline = () => {
    client.getTimeline(new GetTimelineRequest(), {}, (err, res) => {
      if (err) return console.error(err);
      setTweets(res?.getTweetsList().map((t) => t.toObject()) || []);
    });
  };

  useEffect(() => {
    fetchTimeline();
  }, []);

  return {
    tweets,
  };
}
