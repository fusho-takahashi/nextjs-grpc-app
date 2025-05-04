"use client";

import { PostForm } from "@/features/post/components/PostFrom";
import { Timeline } from "@/features/timeline/components/Timeline";
import { MainLayout } from "../features/layouts/MainLayout";
import { TimelineProvider } from "../features/timeline/context/TimelineContext";

export default function HomePage() {
  return (
    <TimelineProvider>
      <MainLayout>
        <PostForm />
        <Timeline />
      </MainLayout>
    </TimelineProvider>
  );
}
