"use client";

import { Tweet } from "@/shared/types/tweet";
import { formatDate } from "@/shared/utils/formatDate";
import { Box, Text } from "@yamada-ui/react";

type Props = {
  tweet: Tweet;
};

export const TweetItem = ({ tweet }: Props) => (
  <Box key={tweet.id} p="4" shadow="md" borderWidth="1px" borderRadius="md">
    <Text fontWeight="bold">{tweet.author}</Text>
    <Text>{tweet.content}</Text>
    <Text fontSize="sm" color="gray.500">
      {formatDate(tweet.timestamp)}
    </Text>
  </Box>
);
