"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Checklist from "@/components/Checklist";
import ProjectRadar from "@/components/Radar";
import { getScoreZone } from "@/components/Checklist";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function Home() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const totalChecked = Object.values(checked).filter(Boolean).length;
  const zone = getScoreZone(totalChecked);

  return (
    <div className="relative min-h-screen w-screen bg-[#f8fafc] overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0000001a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      {/* Navbar + Hero */}
      <Hero />

      {/* Split-screen layout */}
      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:h-screen border-t-4 border-black overflow-hidden">
        {/* Left: Checklist */}
        <section className="bg-[#FFF686] border-r-4 border-black overflow-y-auto h-[70vh] sm:h-[80vh] lg:h-screen">
          <Checklist checked={checked} setChecked={setChecked} />
        </section>

        {/* Right: Results + Radar */}
        <section className="bg-[#868EFF] overflow-y-auto flex flex-col items-center px-8 py-12 text-white h-[70vh] sm:h-[80vh] lg:h-screen">
          <div className="flex flex-col items-center w-full max-w-3xl mt-4 sm:mt-8 space-y-8 sm:space-y-12 px-2 sm:px-0">
            {/* Score zone / Alert box */}
            {totalChecked > 0 && zone && (
                <Alert className={`${zone.color} border-4 border-black text-center px-4 sm:px-8 py-4 sm:py-6 w-[95%] sm:w-[90%] max-w-2xl`}>
                <AlertTitle className="text-2xl font-bold">
                  {zone.icon} {zone.title}
                </AlertTitle>
                <AlertDescription className="text-lg mt-2">
                  You checked {totalChecked} out of 20 boxes. {zone.description}
                </AlertDescription>
              </Alert>
            )}

            {/* Radar chart */}
            <div className="w-[95%] sm:w-[90%] max-w-2xl">
                <ProjectRadar checked={checked} />
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}
