import { PostTweetRequest } from "@/proto/twitter_pb";
import { useState } from "react";
import { TwitterCloneClient } from "../../../proto/TwitterServiceClientPb";
import { useTimelineContext } from "../../timeline/context/TimelineContext";

const client = new TwitterCloneClient("http://localhost:8080");

export function usePostTweet() {
  const { fetchTimeline } = useTimelineContext();

  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const submitTweet = () => {
    const req = new PostTweetRequest();
    req.setAuthor(author);
    req.setContent(content);
    client.postTweet(req, {}, (err) => {
      if (err) return console.error(err);
      setContent("");
      fetchTimeline();
    });
  };

  return {
    author,
    content,
    setAuthor,
    setContent,
    submitTweet,
  };
}
