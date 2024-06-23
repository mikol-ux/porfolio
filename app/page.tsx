"use client";

import Approach from "@/component/Approach";
import Clients from "@/component/Clients";
import Experience from "@/component/Experience";
import Footer from "@/component/Footer";
import Grid from "@/component/Grid";
import Hero from "@/component/Hero";
import RecentProject from "@/component/RecentProject";
import { FloatingNav } from "@/component/ui/Floating";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className=" bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <div className=" w-full">
        <FloatingNav navItems={navItems} />
        <div>
          <Hero />
        </div>
        <Grid />
        <RecentProject />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
