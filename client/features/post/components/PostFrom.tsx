"use client";

import { TextInput } from "@/shared/components/TextInput";
import { usePostTweet } from "../hooks/usePostTweet";

export const PostForm = () => {
  const { author, content, setAuthor, setContent, submitTweet } = usePostTweet();

  return (
    <div>
      <TextInput label="Name" value={author} onChange={setAuthor} />
      <TextInput label="Tweet" value={content} onChange={setContent} multiline />
      <button onClick={submitTweet}>Tweet</button>
    </div>
  );
};
