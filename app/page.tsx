"use client";

import Approach from "@/component/Approach";
import Clients from "@/component/Clients";
import Experience from "@/component/Experience";
import Footer from "@/component/Footer";
import Grid from "@/component/Grid";
import Hero from "@/component/Hero";
import RecentProject from "@/component/RecentProject";
import Skill from "@/component/Skills";
import { FloatingNav } from "@/component/ui/Floating";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className=" bg-blue-200 flex justify-center items-center flex-col overflow-hidden">
      <div className=" w-full">
        <FloatingNav navItems={navItems} />
        <div>
          <Hero />
        </div>
        <div className="max-w-[90%] lg:max-w-7xl mx-auto">
          <Skill />
          {/* <Grid /> */}
          {/* <RecentProject /> */}
          {/* <Clients /> */}
          <Experience />
          <Approach />
          <Footer />
        </div>
      </div>
    </main>
  );
}
