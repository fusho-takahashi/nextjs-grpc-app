"use client";

import { PostForm } from "@/features/post/components/PostFrom";
import { Timeline } from "@/features/timeline/components/Timeline";

export default function HomePage() {
  return (
    <main>
      <h1>🐤 Mini Twitter Clone</h1>
      <PostForm />
      <Timeline />
    </main>
  );
}
