"use client";

import { PostForm } from "@/features/post/components/PostFrom";
import { Timeline } from "@/features/timeline/components/Timeline";
import { TimelineProvider } from "../features/timeline/context/TimelineContext";

export default function HomePage() {
  return (
    <TimelineProvider>
      <main>
        <h1>🐤 Mini Twitter Clone</h1>
        <PostForm />
        <Timeline />
      </main>
    </TimelineProvider>
  );
}
