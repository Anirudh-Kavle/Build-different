"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Checklist from "@/components/Checklist";
import ProjectRadar from "@/components/Radar";
import { getScoreZone } from "@/lib/score";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function Home() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const totalChecked = Object.values(checked).filter(Boolean).length;
  const zone = getScoreZone(totalChecked);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0000001a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Hero / Header */}
      <Hero />

      {/* Split Screen */}
      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen border-t-4 border-black overflow-hidden">
        {/* Checklist Side */}
        <section className="bg-[#FFF686] border-r-4 border-black overflow-y-auto h-[70vh] sm:h-[80vh] lg:h-screen">
          <Checklist checked={checked} setChecked={setChecked} />
        </section>

        {/* Radar + Results Side */}
        <section className="bg-[#868EFF] text-white flex flex-col items-center px-8 py-12 overflow-y-auto h-[70vh] sm:h-[80vh] lg:h-screen">
          <div className="w-full max-w-3xl flex flex-col items-center mt-4 sm:mt-8 space-y-8 sm:space-y-12">
            {/* Score Zone Alert */}
            {zone && (
              <Alert
                className={`${zone.color} border-4 border-black text-center px-4 sm:px-8 py-4 sm:py-6 w-[95%] sm:w-[90%] max-w-2xl`}
              >
                <AlertTitle className="text-2xl font-bold">
                  {zone.icon} {zone.title}
                </AlertTitle>
                <AlertDescription className="text-lg mt-2">
                  You checked {totalChecked} out of 20 boxes. {zone.description}
                </AlertDescription>
              </Alert>
            )}

            {/* Radar Chart */}
            <div className="w-[95%] sm:w-[90%] max-w-2xl">
              <ProjectRadar checked={checked} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
