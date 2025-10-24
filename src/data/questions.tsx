"use client";
import { Highlighter } from "@/components/ui/highlighter"
import { SparklesText } from "@/components/ui/sparkles-text"
import { LineShadowText } from "@/components/ui/line-shadow-text"
import { AuroraText } from "@/components/ui/aurora-text"

export const questions = [
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
        <SparklesText className="text-[20px] inline" sparklesCount={7}>polish</SparklesText>?
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
