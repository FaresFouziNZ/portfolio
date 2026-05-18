"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { asset } from "@/lib/asset";
import { Window } from "@/components/terminal/Window";
import { SectionHeader } from "./About";

// Experience renders as a `git log` output - one commit per role.
// Just the date and body, without commit hashes or branch tags.
export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader label="experience" />

        <Window title="experience.md" path="~/experience">
          <ol className="relative">
            {/* Vertical timeline line */}
            <span
              className="absolute left-[11px] top-1 bottom-1 w-px bg-gradient-to-b from-cyan via-line to-transparent md:left-[15px]"
              aria-hidden
            />

            {experiences.map((exp, i) => {
              return (
                <motion.li
                  key={exp.position + exp.entity}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative pl-8 pb-7 md:pl-12"
                >
                  {/* Commit node */}
                  <span
                    className="absolute left-[5px] top-1.5 size-3 rounded-full border-2 border-phosphor bg-bg-deep shadow-glow md:left-[9px]"
                    aria-hidden
                  />

                  {/* Date line */}
                  <div className="text-xs text-ink-mute md:text-sm">
                    {exp.date}
                  </div>

                  {/* Commit title + entity with logo */}
                  <div className="mt-1 flex items-start gap-3">
                    <span
                      className="grid size-10 shrink-0 place-items-center overflow-hidden rounded border border-line bg-bg-deep p-1"
                      aria-hidden
                    >
                      <Image
                        src={asset(exp.logo.src)}
                        alt={exp.logo.alt}
                        width={40}
                        height={40}
                        className="size-full object-contain"
                      />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-ink md:text-lg">
                        {exp.position}
                      </h3>
                      <div className="text-sm text-cyan">{exp.entity}</div>
                    </div>
                  </div>

                  {/* Commit body */}
                  <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-ink-dim">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="shrink-0 text-cyan/70 select-none">+</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.li>
              );
            })}

            {/* Tail marker - current pointer */}
            <li className="relative pl-8 md:pl-12">
              <span
                className="absolute left-[3px] top-1 size-4 rounded-full border-2 border-phosphor bg-bg-deep shadow-glow md:left-[7px]"
                aria-hidden
              />
              <div className="text-xs text-ink-mute md:text-sm">
                <span className="text-phosphor">HEAD</span>
                <span> → </span>
                <span className="text-ink">main</span>
                <span className="text-ink-dim"> - what comes next?</span>
              </div>
            </li>
          </ol>
        </Window>
      </div>
    </section>
  );
}
