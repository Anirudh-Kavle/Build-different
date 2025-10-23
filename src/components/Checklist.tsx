"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Highlighter } from "@/components/ui/highlighter"
import { SparklesText } from "@/components/ui/sparkles-text"
import { LineShadowText } from "@/components/ui/line-shadow-text"
import { AuroraText } from "@/components/ui/aurora-text"

interface ChecklistProps {
  checked: Record<string, boolean>;
  setChecked: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}


const questions = [
  {
    category: "Problem Originality",
    items: [
      <>
      Is this idea <Highlighter action="circle" color="#4CAF50">weird, specific, or underserved</Highlighter> ?
      </>,
        "Can you clearly roast what's wrong with existing versions, without sounding like a Reddit rant?",
      "Even if it exists, do you have a distinctly different angle (UX, tech, or sheer spite-driven innovation)?",
    ],
  },
  {
    category: "Difficulty & Depth",
    items: [
      'Would a senior dev look at it, tilt their head, and say, “Okay… that’s not trivial,” before pretending not to care?',
      <>
      Does it require research, experimentation, or architectural design beyond <Highlighter action="strike-through" color="#C0A0D0">API stitching</Highlighter> ? 
      </>,
      "Will you learn new systems, algorithms, or stacks doing it?",
    ],
  },
  {
    category: "Creativity Quotient",
    items: [
      "Does it involve a personal twist, new domain crossover, or unconventional integration?",
      "Are you solving the problem in a clever or slightly feral way?",
      <>
      Is it expressive — something that shows <Highlighter action="highlight" color="#87CEFA">how you think</Highlighter>, not just  <Highlighter action="strike-through" color="#FF9800">what you can code</Highlighter>?
      </>,
     ],
  },
  {
    category: "Independence from AI / Boilerplate",
    items: [
      "Is this idea free from being directly based on YouTube tutorials, Medium articles, or GitHub repositories?",
      <>
      Does it demand <Highlighter action="underline" color="red">custom logic or architecture</Highlighter> instead of templates?
      </>,
      "If you asked an AI to build it, would it choke or give you a half-baked MVP?",
    ],
  },
  {
    category: "Effort-to-Impact Ratio",
    items: [
      <>
        Does the time and pain investment translate into visible complexity or{" "}
        <SparklesText className="text-[20px] inline" sparklesCount="7">polish</SparklesText>?
      </>,
      <>
      Would the result reflect <AuroraText>craftsmanship</AuroraText> or long-term iteration?
      </>,
      "Is the final payoff so clean or over-engineered it feels like a power move?",
    ],
  },
  {
    category: "Original Process",
    items: [
      <>
      Are you building from <Highlighter action="highlight" color="#B29CD2">first principles</Highlighter> instead of following a script?
      </>,
      "Have you mapped out what tools or methods you'll invent or customize yourself?",
      <>
      Is your <LineShadowText className="text-[23px]" shadowColor="red">workflow</LineShadowText> part of the innovation (e.g., new data collection, training method, or interaction model)?
      </>,
    ],
  },
  {
    category: '"Would I Respect This?" Test',
    items: [
      "If you saw this online, would you be impressed or curious about how it was made?",
      "Would you want to reverse-engineer it instead of scrolling past?",
    ],
  },
];

export const getScoreZone = (score: number) => {
    if (score === 0) return null;
    
    if (score <= 7) {
      return {
        icon: "🧊",
        title: "Cold Idea (0–7)",
        description:
          "This idea is giving strong Capstone Project Week 2 energy. It’s functionally fine, emotionally absent, and spiritually outsourced to ChatGPT. If this were a startup, your pitch deck would start with ‘So basically it’s like Notion, but…’ and never recover.",
        color: "bg-blue-100",
      };
    } else if (score <= 12) {
      return {
        icon: "⚙️",
        title: "Warm Idea (8–12)",
        description:
          "You’re hovering in that dangerous middle ground: competent, but not unhinged enough to be interesting. The idea is promising, but right now it’s the tech equivalent of an unseasoned chicken breast — fine, but the only upvote it’s getting is from your alt account.",
        color: "bg-yellow-100",
      };
    } else if (score <= 16) {
      return {
        icon: "🔥",
        title: "Hot Idea (13–16)",
        description:
          "This idea is actually worth your time. It’s distinct, non-trivial, and forces you to make real architectural choices instead of just assembling APIs like Lego. You’ll hit a few gnarly spots, learn enough to feel slightly dangerous, and end up with something that actually looks like you thought about it, not just Ctrl+C, Ctrl+V-ed from a tutorial.",
        color: "bg-orange-100",
      };
    } else {
      return {
        icon: "🧠",
        title: "Mad Idea (17–20)",
        description:
          'This isn’t a project. It’s a manifesto written in code. You’ve gone full mad scientist, dangerously creative, fueled by sweat, caffeine, and mild existential dread, and learning you actually care about.',
        color: "bg-red-100",
      };
    }
  };

export default function Checklist({ checked, setChecked }: ChecklistProps) {

  const handleCheck = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalChecked = Object.values(checked).filter(Boolean).length;

  

  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Project Ideation Checklist
          </h2>
          <p className="text-lg text-foreground/80">
            A checklist to ensure your next project isn&apos;t a clone, a template, or AI slop.
          </p>
        </div>

        <div className="space-y-10">
          {questions.map((section, sectionIdx) => (
            <div key={sectionIdx} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">
                {sectionIdx + 1}. {section.category}
              </h3>
              <div className="space-y-3">
                {section.items.map((item, itemIdx) => {
                  const id = `${sectionIdx}-${itemIdx}`;
                  return (
                    <div key={id} className="flex items-center gap-3 group">
                      <div className="shrink-0 pt-0.5">
                        <Checkbox
                          id={id}
                          checked={checked[id] || false}
                          onCheckedChange={() => handleCheck(id)}
                        />
                      </div>
                      <label
                        htmlFor={id}
                        className="text-base md:text-lg cursor-pointer flex-1"
                      >
                        {item}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}