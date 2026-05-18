"use client";

import { motion } from "framer-motion";
import { skills, type SkillGroup } from "@/lib/data";
import { Window } from "@/components/terminal/Window";
import { ASCIIBox } from "@/components/terminal/ASCIIBox";
import { SectionHeader } from "./About";
import { cn } from "@/lib/utils";

// Skills render as a grid of ASCII-boxed clusters.
// Each item is listed with a small `[+]` glyph - reads like apt/pacman output.
// We deliberately avoid fake proficiency bars (no fabricated numbers).
// Accent colour comes from each skill in data.ts so reordering is safe.
export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader label="skills" />

        <Window title="skills.md" path="~/skills">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, i) => (
              <SkillCard key={group.name} group={group} index={i} />
            ))}
          </div>
        </Window>
      </div>
    </section>
  );
}

function SkillCard({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
}) {
  const accentText = {
    phosphor: "text-phosphor",
    amber: "text-amber",
    cyan: "text-cyan",
  }[group.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <ASCIIBox label={group.name} accent={group.accent}>
        <ul className="space-y-1.5 text-[15px]">
          {group.items.map((item, j) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.02 * j }}
              className="group flex items-baseline gap-2 leading-snug"
            >
              <span className={cn("shrink-0 select-none", accentText)}>
                [+]
              </span>
              <span className="text-ink transition-colors group-hover:text-ink">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </ASCIIBox>
    </motion.div>
  );
}
