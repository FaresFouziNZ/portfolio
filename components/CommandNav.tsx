"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Cursor } from "@/components/terminal/Cursor";

// Sticky top bar styled as a tabbed terminal session.
// Desktop: section tabs render inline as terminal commands.
// Mobile: collapses to a `[ ≡ ]` button that opens a full-screen
// terminal-style command palette.
export function CommandNav() {
  const [active, setActive] = useState<string>(sections[0].id);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Track which section is centred in view → active highlight.
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Glassy backdrop appears once user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on viewport widening or escape key.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // Lock body scroll while overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || open
            ? "border-b border-phosphor/20 bg-bg-deep/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-3 py-2.5 md:px-6 md:py-3">
          {/* Session label - handle + portfolio path */}
          <div className="flex shrink-0 items-center gap-1 text-sm">
            <span className="text-phosphor">{profile.handle}</span>
            <span className="text-ink-dim">:</span>
            <span className="text-amber">~/portfolio</span>
            <span className="text-ink-dim">$</span>
          </div>

          {/* Desktop tabs */}
          <ul className="hidden flex-1 items-center gap-1 md:flex">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id} className="shrink-0">
                  <a
                    href={`#${s.id}`}
                    className={cn(
                      "group relative inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-sm transition-colors",
                      isActive
                        ? "text-phosphor"
                        : "text-ink-dim hover:text-ink",
                    )}
                  >
                    <span
                      className={cn(
                        "text-ink-mute transition-colors",
                        isActive && "text-phosphor",
                      )}
                    >
                      {isActive ? ">" : "·"}
                    </span>
                    <span className="font-medium tracking-tight">{s.label}</span>
                    {isActive && <Cursor variant="underscore" className="ml-0.5" />}
                    <span
                      className={cn(
                        "pointer-events-none absolute inset-x-1 -bottom-0.5 h-px transition-all",
                        isActive ? "bg-phosphor shadow-glow" : "bg-transparent",
                      )}
                      aria-hidden
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile burger trigger - styled as a borderless bracket button */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-command-palette"
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "group ml-auto flex h-10 items-center gap-1.5 rounded px-2 font-mono text-sm transition-colors md:hidden",
              "hover:text-phosphor",
              open && "text-phosphor",
            )}
          >
            <span className="text-ink-mute">[</span>
            <BurgerGlyph open={open} />
            <span className="text-ink-mute">]</span>
          </button>
        </div>
      </nav>

      {/* Mobile command palette overlay */}
      <MobilePalette
        open={open}
        active={active}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

// Three-stroke glyph that morphs into an X when the menu is open.
// Pure SVG so it lines up crisply with the surrounding monospace text.
function BurgerGlyph({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
      className="text-phosphor"
      aria-hidden
    >
      <motion.line
        x1="1"
        y1="3"
        x2="17"
        y2="3"
        animate={open ? { x1: 2, y1: 2, x2: 16, y2: 12 } : { x1: 1, y1: 3, x2: 17, y2: 3 }}
        transition={{ duration: 0.25 }}
      />
      <motion.line
        x1="1"
        y1="7"
        x2="17"
        y2="7"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.line
        x1="1"
        y1="11"
        x2="17"
        y2="11"
        animate={open ? { x1: 2, y1: 12, x2: 16, y2: 2 } : { x1: 1, y1: 11, x2: 17, y2: 11 }}
        transition={{ duration: 0.25 }}
      />
    </svg>
  );
}

// Full-screen mobile command palette.
// Renders each section as a `$ cd ./section` line; tapping scrolls + closes.
function MobilePalette({
  open,
  active,
  onClose,
}: {
  open: boolean;
  active: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop - taps close the palette */}
          <motion.button
            type="button"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-bg-deep/70 backdrop-blur-sm md:hidden"
          />

          {/* Panel slides down from the top under the nav */}
          <motion.div
            id="mobile-command-palette"
            role="dialog"
            aria-modal="true"
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-2 top-[58px] z-40 origin-top overflow-hidden rounded-lg border border-phosphor/40 bg-bg-deep/95 shadow-glow backdrop-blur-md md:hidden"
          >
            {/* Section list as commands */}
            <ul className="p-2">
              {sections.map((s, i) => {
                const isActive = active === s.id;
                return (
                  <motion.li
                    key={s.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.22, delay: 0.04 * i }}
                  >
                    <a
                      href={`#${s.id}`}
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-3 font-mono text-base transition-colors active:bg-phosphor/10",
                        isActive
                          ? "bg-phosphor/5 text-phosphor"
                          : "text-ink hover:bg-phosphor/5",
                      )}
                    >
                      <span
                        className={cn(
                          "shrink-0",
                          isActive ? "text-phosphor" : "text-ink-mute",
                        )}
                      >
                        {isActive ? ">" : "$"}
                      </span>
                      <span className="text-ink-dim">cd</span>
                      <span className={isActive ? "text-phosphor" : "text-amber"}>
                        {s.cmd}
                      </span>
                      {isActive && <Cursor variant="block" className="ml-1" />}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
