"use client";

import HeroSection from "@/sections/section1";
import ProgramsSection from "@/sections/section2";
import ValuesSection from "@/sections/section3";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ProgramsSection />
      <ValuesSection />
    </div>
  );
}
