"use client";

import { Button, Input, Textarea, VStack } from "@yamada-ui/react";
import { usePostTweet } from "../hooks/usePostTweet";

export const PostForm = () => {
  const { author, content, setAuthor, setContent, submitTweet } = usePostTweet();

  return (
    <VStack gap="4">
      <Input placeholder="Name" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <Textarea placeholder="Tweet" value={content} onChange={(e) => setContent(e.target.value)} />
      <Button onClick={submitTweet} colorScheme="primary">
        Tweet
      </Button>
    </VStack>
  );
};
