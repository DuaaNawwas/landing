"use client";

import HeroSection from "@/sections/section1";
import ProgramsSection from "@/sections/section2";
import ValuesSection from "@/sections/section3";
import BannerSection from "@/sections/section4";
import MenuSection from "@/sections/section5";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ProgramsSection />
      <ValuesSection />
      <BannerSection />
      <MenuSection />
    </div>
  );
}
