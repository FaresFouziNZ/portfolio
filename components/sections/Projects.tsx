"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { asset } from "@/lib/asset";
import { Window } from "@/components/terminal/Window";
import { SectionHeader } from "./About";
import { cn } from "@/lib/utils";

// Projects render as an expandable file-tree.
// Each project = a "file" that opens to reveal a structured README.
// First project is expanded by default to anchor the user's eye.
export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader label="projects" />

        <Window title="projects.md" path="~/projects">
          <ul className="space-y-2">
            {projects.map((project, i) => (
              <ProjectRow
                key={project.slug}
                project={project}
                defaultOpen={i === 0}
              />
            ))}
          </ul>
        </Window>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  defaultOpen,
}: {
  project: Project;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  const accentText: Record<string, string> = {
    phosphor: "text-phosphor",
    amber: "text-amber",
    cyan: "text-cyan",
    magenta: "text-magenta",
  };

  return (
    <li className="rounded-md border border-phosphor/20 bg-bg-deep/40 transition-colors hover:border-phosphor/60">
      {/* Row header - clickable */}
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
        <div className="grid flex-1 grid-cols-[auto_1fr] items-center gap-3 md:grid-cols-[auto_1fr_auto]">
          {/* Project logo - square framed thumbnail, matches Experience style */}
          <span
            className="grid size-9 shrink-0 place-items-center overflow-hidden rounded border border-line bg-bg-deep p-1 md:size-10"
            aria-hidden
          >
            <Image
              src={asset(project.image.src)}
              alt={project.image.alt}
              width={40}
              height={40}
              className="size-full object-contain"
            />
          </span>
          {/* File name */}
          <div className="min-w-0">
            <div className="truncate text-sm font-medium text-ink md:text-base">
              <span className={accentText[project.accent]}>{project.slug}.md</span>
            </div>
            <div className="truncate text-xs text-ink-dim md:text-[13px]">
              {project.title}
            </div>
          </div>
          {/* Tech chips (md+) */}
          <div className="hidden flex-wrap items-center justify-end gap-1.5 md:flex">
            {project.techstack.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded border border-line bg-bg-raised/60 px-1.5 py-0.5 text-[11px] text-ink-dim"
              >
                {t}
              </span>
            ))}
            {project.techstack.length > 3 && (
              <span className="text-[11px] text-ink-mute">
                +{project.techstack.length - 3}
              </span>
            )}
          </div>
        </div>
      </button>

      {/* Expanded README */}
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
              {/* Cat-style README header */}
              <div className="mb-4 flex items-center gap-2 text-[11px] text-ink-mute md:text-xs">
                <span className="text-phosphor">$</span>
                <span>cat</span>
                <span className="text-amber">./{project.slug}/README.md</span>
              </div>

              <div className="grid items-start gap-5 md:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="text-lg font-semibold text-ink md:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-dim md:text-base">
                    {project.subtitle}
                  </p>
                </div>
                {/* Expanded preview image - framed as a terminal asset */}
                <div className="hidden shrink-0 md:block">
                  <div className="relative overflow-hidden rounded border border-line bg-bg-deep p-2">
                    <Image
                      src={asset(project.image.src)}
                      alt={project.image.alt}
                      width={120}
                      height={120}
                      className="size-[88px] object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Tech stack - full chip row */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.techstack.map((t) => (
                  <span
                    key={t}
                    className={cn(
                      "rounded border bg-bg-raised/60 px-2 py-0.5 text-[11px]",
                      "border-line text-ink-dim",
                    )}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Two-column bullets */}
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <BulletColumn
                  heading="## development"
                  items={project.development}
                  accent={project.accent}
                />
                <BulletColumn
                  heading="## impact"
                  items={project.impact}
                  accent={project.accent}
                />
              </div>

              {/* Repo link */}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "group mt-6 inline-flex items-center gap-2 rounded border bg-bg-raised/40 px-3 py-2 text-xs font-medium transition-all md:text-sm",
                    "border-line text-ink-dim hover:border-phosphor hover:text-phosphor hover:shadow-glow",
                  )}
                >
                  <span>git clone</span>
                  <ExternalLink className="size-3.5" />
                  <span className="text-ink-mute group-hover:text-phosphor">
                    {project.repo.replace("https://", "")}
                  </span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function BulletColumn({
  heading,
  items,
  accent,
}: {
  heading: string;
  items: string[];
  accent: Project["accent"];
}) {
  const accentClass = {
    phosphor: "text-phosphor",
    amber: "text-amber",
    cyan: "text-cyan",
    magenta: "text-magenta",
  }[accent];
  return (
    <div>
      <div className={cn("mb-2 text-xs font-semibold tracking-wide", accentClass)}>
        {heading}
      </div>
      <ul className="space-y-1.5 text-[15px] leading-relaxed text-ink-dim">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <span className={cn("shrink-0 select-none", accentClass)}>›</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
