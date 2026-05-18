"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { profile } from "@/lib/data";
import { Window } from "@/components/terminal/Window";
import { SectionHeader } from "./About";
import { Prompt } from "@/components/terminal/Prompt";
import { Cursor } from "@/components/terminal/Cursor";

// Contact reads like an interactive prompt - `connect --to fares`.
// Each channel is a button that simulates "opening" the connection.
const channels = [
  {
    key: "email",
    label: "email",
    value: "fares.alnzlawe@gmail.com",
    href: `mailto:${profile.contact.email}`,
    icon: Mail,
  },
  {
    key: "linkedin",
    label: "linkedin",
    value: "/in/fares-alnzlawe",
    href: profile.contact.linkedin,
    icon: Linkedin,
  },
  {
    key: "github",
    label: "github",
    value: "@FaresFouziNZ",
    href: profile.contact.github,
    icon: Github,
  },
  {
    key: "cv",
    label: "resume",
    value: "Fares_Alnzlawe_CV.pdf",
    href: profile.contact.cv,
    icon: FileText,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader label="contact" />

        <Window title="contact.md" path="~/contact">
          {/* Channel grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            {channels.map((c, i) => (
              <ChannelCard channel={c} key={c.key} index={i} />
            ))}
          </div>

          {/* Footer prompt */}
          <div className="mt-8 flex items-center gap-2 border-t border-line pt-5 text-xs text-ink-dim md:text-sm">
            <Prompt path="~" command="" />
            <Cursor />
          </div>
        </Window>

        {/* Page footer line */}
        <div className="mt-10 text-center text-[11px] text-ink-mute md:text-xs">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </section>
  );
}

function ChannelCard({
  channel,
  index,
}: {
  channel: (typeof channels)[number];
  index: number;
}) {
  const Icon = channel.icon;

  return (
    <motion.a
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.05 * index }}
      href={channel.href}
      target={channel.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center justify-between gap-3 rounded-md border border-phosphor/20 bg-bg-deep/40 p-3 transition-all hover:border-phosphor hover:shadow-glow md:p-4"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded border border-line bg-bg-raised/40 text-phosphor">
          <Icon className="size-4" />
        </span>
        <div className="min-w-0">
          <div className="text-[11px] uppercase tracking-widest text-ink-mute">
            ./{channel.label}
          </div>
          <div className="truncate text-sm font-medium text-ink md:text-[15px]">
            {channel.value}
          </div>
        </div>
      </div>
      <span className="text-xs text-phosphor transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </motion.a>
  );
}
