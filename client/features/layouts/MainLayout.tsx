"use client";

import { Container, Heading, VStack } from "@yamada-ui/react";

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <Container maxW="lg" py="10">
    <VStack align="stretch" gap="6">
      <Heading size="xl">🐤 Mini Twitter</Heading>
      {children}
    </VStack>
  </Container>
);
