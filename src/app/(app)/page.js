import { SectionEvents } from "./_components/section-events";
import { HeroSection } from "./_components/hero-section";
import React from "react";
import { SectionEventsSkeleton } from "./_components/section-events-skeleton";
import { SectionCategories } from "./_components/section-categories";

export default function Page() {
  return (
    <>
      <HeroSection />
      <React.Suspense fallback={<SectionEventsSkeleton />}>
        <SectionEvents />
      </React.Suspense>
      <SectionCategories />
    </>
  );
}
