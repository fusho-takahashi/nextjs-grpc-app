"use client";

import { Tweet } from "@/shared/types/tweet";
import { formatDate } from "@/shared/utils/formatDate";

type Props = {
  tweet: Tweet;
};

export const TweetItem = ({ tweet }: Props) => (
  <li key={tweet.id}>
    <strong>{tweet.author}</strong>: {tweet.content}
    <em style={{ marginLeft: 8 }}>({formatDate(tweet.timestamp)})</em>
  </li>
);
