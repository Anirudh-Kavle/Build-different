"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { questions } from "@/data/questions";
import type { ChecklistState } from "@/types/global";

interface ChecklistProps {
  checked: ChecklistState;
  setChecked: React.Dispatch<React.SetStateAction<ChecklistState>>;
}

export default function Checklist({ checked, setChecked }: ChecklistProps) {
  const handleCheck = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Project Ideation Checklist
          </h2>
          <p className="text-lg text-foreground/80">
            A checklist to ensure your next project isn&apos;t a clone, a template, or AI slop.
          </p>
        </header>

        <div className="space-y-10">
          {questions.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">
                {sIdx + 1}. {section.category}
              </h3>
              <div className="space-y-3">
                {section.items.map((item, iIdx) => {
                  const id = `${sIdx}-${iIdx}`;
                  return (
                    <div key={id} className="flex items-center gap-3 group">
                      <Checkbox
                        id={id}
                        checked={checked[id] || false}
                        onCheckedChange={() => handleCheck(id)}
                      />
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
