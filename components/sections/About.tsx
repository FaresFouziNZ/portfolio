"use client";

import { motion } from "framer-motion";
import { profile, sections } from "@/lib/data";
import { Window } from "@/components/terminal/Window";
import { Prompt } from "@/components/terminal/Prompt";

// "About" reads like the output of `cat about.md` inside a terminal window.
// Uses motion to fade content in as the user scrolls.
export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader label="about" />

        <Window title="about.md" path="~/about">
          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-8">
              <div className="mb-4 flex items-center gap-2 text-xs text-ink-mute">
                <span className="text-phosphor">#</span>
                <span>profile</span>
                <span>-</span>
                <span>{profile.title}</span>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="text-[15px] leading-relaxed text-ink md:text-[17px]"
              >
                {profile.bio}
              </motion.p>
            </div>

            {/* Side meta block */}
            <div className="md:col-span-4">
              <ul className="space-y-3 border-l border-line pl-4 text-sm text-ink-dim">
                <MetaRow label="role" value={profile.title} accent="phosphor" />
                <MetaRow label="based" value={profile.location} accent="cyan" />
                <MetaRow
                  label="school"
                  value="KFUPM"
                  accent="amber"
                  detail={profile.education.degree}
                />
                <MetaRow label="status" value="open to opportunities" accent="phosphor" />
              </ul>
            </div>
          </div>
        </Window>
      </div>
    </section>
  );
}

function MetaRow({
  label,
  value,
  detail,
  accent,
}: {
  label: string;
  value: string;
  detail?: string;
  accent: "phosphor" | "cyan" | "amber";
}) {
  const accentClass = {
    phosphor: "text-phosphor",
    cyan: "text-cyan",
    amber: "text-amber",
  }[accent];

  return (
    <li>
      <div className="text-xs uppercase tracking-widest text-ink-mute">
        {label}
      </div>
      <div className={`mt-0.5 text-sm font-medium ${accentClass}`}>{value}</div>
      {detail && <div className="text-xs text-ink-dim">{detail}</div>}
    </li>
  );
}

// Reusable header that appears above every section - keeps the page coherent.
// The command is auto-built as `cat ./{label}.md` so every section reads the
// same way, and the divider on the right is numbered by position in the
// sections registry (1..N).
export function SectionHeader({ label }: { label: string }) {
  const index = sections.findIndex((s) => s.id === label);
  const number = index >= 0 ? index + 1 : 0;
  const command = `cat ./${label}.md`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-5 flex items-center justify-between gap-3 md:mb-7"
    >
      <Prompt path={`~/${label}`} command={command} className="text-xs md:text-sm" />
      <div className="hidden flex-1 border-t border-dashed border-line/60 md:block" />
      <span className="hidden text-[10px] uppercase tracking-[0.25em] text-ink-mute md:inline">
        - section {number} -
      </span>
    </motion.div>
  );
}
