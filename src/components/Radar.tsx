"use client";

import { useMemo } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const categories = [
  { name: "Problem Originality", questions: 3 },
  { name: "Difficulty & Depth", questions: 3 },
  { name: "Creativity Quotient", questions: 3 },
  { name: "Independence", questions: 3 },
  { name: "Effort-to-Impact", questions: 3 },
  { name: "Original Process", questions: 3 },
  { name: "Respect Test", questions: 2 },
];

interface RadarProps {
  checked: Record<string, boolean>;
  // optional: let parent override width/height if desired later
  height?: number;
}

export default function ProjectRadar({ checked, height = 400 }: RadarProps) {
  const chartData = useMemo(() => {
    return categories.map((category, categoryIndex) => {
      const checkedInCategory = Array.from(
        { length: category.questions },
        (_, i) => `${categoryIndex}-${i}`
      ).filter((id) => checked[id]).length;

      const percentage = (checkedInCategory / category.questions) * 100;

      return {
        category: category.name,
        score: Math.round(percentage),
      };
    });
  }, [checked]);

  const totalChecked = Object.values(checked).filter(Boolean).length;

  const getScoreColor = (score: number) => {
    if (score <= 7) return "#3B82F6"; // Cold - Blue
    if (score <= 12) return "#EAB308"; // Warm - Yellow
    if (score <= 16) return "#F97316"; // Hot - Orange
    return "#EF4444"; // Mad - Red
  };

  const getScoreLabel = (score: number) => {
    if (score === 0) return "";
    if (score <= 7) return "Cold Idea 🧊";
    if (score <= 12) return "Warm Idea ⚙️";
    if (score <= 16) return "Hot Idea 🔥";
    return "Mad Idea 🧠";
  };

  const currentColor = getScoreColor(totalChecked);
  const scoreLabel = getScoreLabel(totalChecked);

  return (
    // keep the white card / bold border / shadow look inside the component so it is theme independent
    <section className="w-full max-w-3xl mx-auto">
      <div className="bg-white border-4 border-black p-6 space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-bold text-black">
            Project Viability Radar
          </h3>
          <p className="text-sm md:text-base text-gray-700">
            Visual breakdown of your project idea across key dimensions
          </p>

          {scoreLabel && (
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xl font-bold text-black">{scoreLabel}</span>
              <span className="text-sm text-gray-600">({totalChecked}/20 checks)</span>
            </div>
          )}
        </div>

        <div style={{ width: "100%", height }} className="min-h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData}>
              {/* grid lines: dark but subtle */}
              <PolarGrid stroke="#000000" strokeWidth={1} opacity={0.12} />
              <PolarAngleAxis
                dataKey="category"
                tick={{
                  fill: "#000000",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "3px solid #000000",
                  borderRadius: 0,
                  boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
                  fontWeight: 700,
                  color: "#000000",
                }}
                formatter={(value: number) => [`${value}%`, "Score"]}
              />
              <Radar
                dataKey="score"
                stroke={currentColor}
                fill={currentColor}
                fillOpacity={0.35}
                strokeWidth={3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
