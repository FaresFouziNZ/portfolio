"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronRight,
  Trophy,
  GraduationCap,
  Users,
} from "lucide-react";
import { extras, type Extra } from "@/lib/data";
import { asset } from "@/lib/asset";
import { Window } from "@/components/terminal/Window";
import { SectionHeader } from "./About";
import { cn } from "@/lib/utils";

// Extras render as `tail -f achievements.log` - a stacked list of expandable
// rows, same horizontal pattern as the Projects section.
// Each entry has a log-level tag, an icon, a logo, and a chevron toggle.
const LEVELS = [
  { label: "LEAD", icon: Users },
  { label: "WIN", icon: Trophy },
  { label: "CERT", icon: GraduationCap },
] as const;

export function Extras() {
  return (
    <section id="extras" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader label="extras" />

        <Window title="extras.md" path="~/extras">
          <ul className="space-y-2">
            {extras.map((entry, i) => (
              <ExtraRow
                key={entry.title}
                entry={entry}
                level={LEVELS[i % LEVELS.length]}
                defaultOpen={i === 0}
              />
            ))}
          </ul>
        </Window>
      </div>
    </section>
  );
}

function ExtraRow({
  entry,
  level,
  defaultOpen,
}: {
  entry: Extra;
  level: (typeof LEVELS)[number];
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const Icon = level.icon;

  return (
    <li className="rounded-md border border-phosphor/20 bg-bg-deep/40 transition-colors hover:border-phosphor/60">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group flex w-full items-center gap-3 px-3 py-3 text-left md:px-4"
      >
        <ChevronRight
          className={cn(
            "size-4 shrink-0 text-ink-mute transition-transform",
            open && "rotate-90 text-phosphor",
          )}
        />
        <div className="grid flex-1 grid-cols-[auto_1fr_auto] items-center gap-3 md:grid-cols-[auto_auto_1fr_auto]">
          {/* Logo - same neutral framed style as Experience and Projects */}
          <span
            className="grid size-9 shrink-0 place-items-center overflow-hidden rounded border border-line bg-bg-deep p-1 md:size-10"
            aria-hidden
          >
            <Image
              src={asset(entry.logo.src)}
              alt={entry.logo.alt}
              width={40}
              height={40}
              className="size-full object-contain"
            />
          </span>
          {/* Level badge (md+) */}
          <span className="hidden items-center gap-1.5 text-[11px] text-ink-mute md:flex">
            <span className="text-ink-dim">[</span>
            <span className="text-phosphor">{level.label}</span>
            <span className="text-ink-dim">]</span>
          </span>
          {/* Title + entity - wrap up to two lines instead of truncating */}
          <div className="min-w-0">
            <div className="line-clamp-2 text-sm font-medium leading-snug text-ink md:text-base">
              {entry.title}
            </div>
            <div className="mt-0.5 line-clamp-2 text-xs leading-snug text-ink-dim md:text-[13px]">
              {entry.entity}
            </div>
          </div>
          {/* Type chip - icon only */}
          <span className="grid size-7 place-items-center rounded border border-line text-phosphor md:size-8">
            <Icon className="size-3.5" />
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-line px-3 py-4 md:px-5 md:py-6">
              <div className="mb-3 flex items-center gap-2 text-[11px] text-ink-mute md:text-xs">
                <span className="text-phosphor">$</span>
                <span>cat</span>
                <span className="text-amber">./{slugify(entry.title)}.log</span>
              </div>

              <ul className="space-y-1.5 text-[15px] leading-relaxed text-ink-dim">
                {entry.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="shrink-0 select-none text-phosphor">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {entry.link && (
                <a
                  href={entry.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded border border-line bg-bg-raised/40 px-3 py-2 text-xs font-medium text-ink-dim transition-all hover:border-phosphor hover:text-phosphor hover:shadow-glow md:text-sm"
                >
                  <ExternalLink className="size-3.5" />
                  <span>{entry.link.label}</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

// Quick slugify for filename-style log labels.
function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[-–]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}
