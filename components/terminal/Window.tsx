"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Terminal window chrome - title bar with file path on top, body underneath.
// Wraps any block of content in a consistent phosphor-bordered frame.
export function Window({
  title = "session",
  path = "~",
  children,
  className,
  glow = true,
}: {
  title?: string;
  path?: string;
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "ascii-box rounded-lg border border-phosphor/30 transition-all duration-300",
        glow && "hover:border-phosphor/60 hover:shadow-glow",
        className,
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-phosphor/20 px-3 py-2 md:px-4">
        <div className="flex min-w-0 flex-1 items-center gap-2 text-xs text-ink-mute">
          <span className="truncate">
            <span className="text-ink-dim">{title}</span>
            <span className="text-ink-mute"> - </span>
            <span className="text-amber">{path}</span>
          </span>
        </div>
      </div>

      {/* Content body */}
      <div className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
        <div className="relative p-4 md:p-6">{children}</div>
      </div>
    </motion.div>
  );
}
