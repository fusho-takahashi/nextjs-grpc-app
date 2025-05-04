import { PostTweetRequest } from "@/proto/twitter_pb";
import { useState } from "react";
import { TwitterCloneClient } from "../../../proto/TwitterServiceClientPb";

const client = new TwitterCloneClient("http://localhost:8080");

export function usePostTweet() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const submitTweet = () => {
    const req = new PostTweetRequest();
    req.setAuthor(author);
    req.setContent(content);
    client.postTweet(req, {}, (err) => {
      if (err) return console.error(err);
      setContent("");
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
