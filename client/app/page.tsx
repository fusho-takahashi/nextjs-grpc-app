"use client";

import { TwitterCloneClient } from "@/proto/TwitterServiceClientPb";
import { GetTimelineRequest, PostTweetRequest, Tweet } from "@/proto/twitter_pb";
import { useEffect, useState } from "react";

const client = new TwitterCloneClient("http://localhost:8080");

export default function Page() {
  const [tweets, setTweets] = useState<Tweet.AsObject[]>([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const fetchTimeline = () => {
    client.getTimeline(new GetTimelineRequest(), {}, (err, res) => {
      if (err) {
        console.error(err.message);
        return;
      }
      setTweets(res?.getTweetsList().map((t) => t.toObject()) || []);
    });
  };

  const submitTweet = () => {
    const req = new PostTweetRequest();
    req.setAuthor(author);
    req.setContent(content);

    client.postTweet(req, {}, (err, res) => {
      if (err) {
        console.error(err.message);
        return;
      }
      fetchTimeline(); // 投稿後に再取得
    });
  };

  useEffect(() => {
    fetchTimeline();
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>🐤 Mini Twitter Clone (App Router)</h1>
      <input placeholder="Name" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <br />
      <textarea placeholder="What's happening?" value={content} onChange={(e) => setContent(e.target.value)} />
      <br />
      <button onClick={submitTweet}>Tweet</button>

      <h2>Timeline</h2>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <strong>{tweet.author}</strong>: {tweet.content} <em>({tweet.timestamp})</em>
          </li>
        ))}
      </ul>
    </main>
  );
}
