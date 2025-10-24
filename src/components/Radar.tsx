"use client";

import { useMemo } from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip,
} from "recharts";
import { categories } from "@/data/categories";
import { getScoreColor, getScoreLabel } from "@/lib/score";
import type { ChecklistState } from "@/types/global";

interface RadarProps {
  checked: ChecklistState;
  height?: number;
}

export default function ProjectRadar({ checked, height = 400 }: RadarProps) {
  const chartData = useMemo(() => {
    return categories.map((cat, cIdx) => {
      const checkedCount = Array.from({ length: cat.questions }, (_, i) => `${cIdx}-${i}`)
        .filter((id) => checked[id]).length;

      return {
        category: cat.name,
        score: Math.round((checkedCount / cat.questions) * 100),
      };
    });
  }, [checked]);

  const totalChecked = Object.values(checked).filter(Boolean).length;
  const currentColor = getScoreColor(totalChecked);
  const scoreLabel = getScoreLabel(totalChecked);

  return (
    <section className="w-full max-w-3xl mx-auto" role="img" aria-label="Project Viability Radar">
      <div className="bg-white border-4 border-black p-6 space-y-6">
        <header>
          <h3 className="text-2xl md:text-3xl font-bold text-black">
            Project Viability Radar
          </h3>
          {scoreLabel && (
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xl font-bold text-black">{scoreLabel}</span>
              <span className="text-sm text-gray-600">({totalChecked}/20 checks)</span>
            </div>
          )}
        </header>

        <div style={{ width: "100%", height }} className="min-h-[220px]">
          <ResponsiveContainer>
            <RadarChart data={chartData}>
              <PolarGrid stroke="#000" strokeWidth={1} opacity={0.12} />
              <PolarAngleAxis
                dataKey="category"
                tick={{ fill: "#000", fontSize: 12, fontWeight: 700 }}
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
