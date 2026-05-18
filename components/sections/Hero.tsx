"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";
import { asset } from "@/lib/asset";
import { Cursor } from "@/components/terminal/Cursor";
import { Prompt } from "@/components/terminal/Prompt";
import { Typewriter } from "@/components/terminal/Typewriter";

// Rotating role tagline - cycles through Fares' real role labels.
function RoleRotator({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative inline-block min-w-[12ch] text-amber text-glow-amber">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="inline-block"
      >
        {roles[index]}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <header className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-16 md:pt-24">
      {/* Faint terminal grid backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      {/* Phosphor halo behind the hero */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-[600px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,227,139,0.18), rgba(92,207,230,0.07) 60%, transparent 80%)",
        }}
        aria-hidden
      />

      {/* Identity card - top-aligned on mobile (less space above, more breathing room below the buttons), centred on desktop */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-start px-4 pt-4 md:justify-center md:px-6 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid items-start gap-6 md:grid-cols-12 md:gap-8"
        >
          {/* Avatar - Fares' real photo, framed like a terminal asset */}
          <div className="md:col-span-3">
            <div className="group relative mx-auto w-fit md:mx-0">
              {/* Decorative corner brackets */}
              <CornerBrackets />
              <div className="relative overflow-hidden rounded border border-phosphor/40 bg-bg-raised p-1.5 shadow-glow">
                <Image
                  src={asset(profile.avatar.src)}
                  alt={profile.avatar.alt}
                  width={220}
                  height={220}
                  className="size-[220px] rounded-sm object-cover object-top sm:size-[200px] md:size-[200px]"
                  priority
                />
              </div>
              <div className="mt-2 text-center text-[10px] uppercase tracking-widest text-ink-mute md:text-left">
                ./avatar.jpg
              </div>
            </div>
          </div>

          {/* Name + title + actions */}
          <div className="md:col-span-9">
            <div className="mb-3 text-xs text-ink-mute md:text-sm">
              <Prompt path="~" command="whoami" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
              <Typewriter text={profile.name} speed={42} showCursor={false} />
            </h1>
            <div className="mt-3 text-base text-ink-dim md:text-lg">
              <span className="text-ink-mute">{">"} role: </span>
              <RoleRotator roles={profile.taglineRoles} />
            </div>
            <p className="mt-4 max-w-2xl text-sm text-ink-dim md:text-base">
              {profile.taglineLong}
            </p>

            {/* Action row */}
            <div className="mt-7 flex flex-wrap gap-2 md:gap-3">
              <ActionLink href={profile.contact.cv} icon={FileText} accent="phosphor">
                cat resume.pdf
              </ActionLink>
              <ActionLink href={`mailto:${profile.contact.email}`} icon={Mail} accent="amber">
                send mail
              </ActionLink>
              <ActionLink href={profile.contact.github} icon={Github} accent="mute">
                git remote
              </ActionLink>
              <ActionLink href={profile.contact.linkedin} icon={Linkedin} accent="cyan">
                linkedin
              </ActionLink>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll hint anchored to bottom of viewport */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mx-auto w-full max-w-6xl px-4 pb-6 md:px-6 md:pb-10"
      >
        <a
          href="#about"
          className="group inline-flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-phosphor"
        >
          <span>
            <span className="text-ink-mute">$ </span>
            cd ./about
          </span>
          <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" />
          <Cursor variant="underscore" />
        </a>
      </motion.div>
    </header>
  );
}

// Four small corner brackets that "frame" the avatar like a CCTV/console asset.
function CornerBrackets() {
  const base =
    "pointer-events-none absolute size-3 border-phosphor opacity-70 transition-opacity group-hover:opacity-100";
  return (
    <>
      <span className={`${base} -left-1 -top-1 border-l border-t`} aria-hidden />
      <span className={`${base} -right-1 -top-1 border-r border-t`} aria-hidden />
      <span className={`${base} -bottom-1 -left-1 border-b border-l`} aria-hidden />
      <span className={`${base} -bottom-1 -right-1 border-b border-r`} aria-hidden />
    </>
  );
}

// CTA button - looks like a clickable shell command.
function ActionLink({
  href,
  icon: Icon,
  accent,
  children,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: "phosphor" | "amber" | "cyan" | "mute";
  children: React.ReactNode;
}) {
  const accentClasses = {
    phosphor:
      "border-phosphor/30 text-phosphor hover:border-phosphor hover:bg-phosphor/5 hover:shadow-glow",
    amber:
      "border-amber/30 text-amber hover:border-amber hover:bg-amber/5 hover:shadow-glow-amber",
    cyan:
      "border-cyan/30 text-cyan hover:border-cyan hover:bg-cyan/5 hover:shadow-glow-cyan",
    mute:
      "border-ink-mute/30 text-ink hover:border-ink hover:bg-ink/5 hover:shadow-glow-ink",
  }[accent];

  return (
    <a
      href={href}
      target={href.startsWith("http") || href.startsWith("mailto") ? "_blank" : undefined}
      rel="noreferrer"
      className={`group inline-flex min-h-[44px] items-center gap-2 rounded border bg-bg-raised/40 px-4 py-2.5 text-sm font-medium tracking-tight transition-all ${accentClasses}`}
    >
      <Icon className="size-4" />
      <span>{children}</span>
      <span className="text-ink-mute transition-transform group-hover:translate-x-0.5">↗</span>
    </a>
  );
}
