"use client";

import { useEffect, useRef, useState } from "react";
import { Cursor } from "./Cursor";
import { cn } from "@/lib/utils";

// Character-by-character typewriter with configurable speed.
// Triggers on mount or on `start` prop flip - useful for chained reveals.
export function Typewriter({
  text,
  speed = 28,
  start = true,
  startDelay = 0,
  showCursor = true,
  cursorOnEnd = true,
  onDone,
  className,
  preserveWhitespace = false,
}: {
  text: string;
  speed?: number;
  start?: boolean;
  startDelay?: number;
  showCursor?: boolean;
  cursorOnEnd?: boolean;
  onDone?: () => void;
  className?: string;
  preserveWhitespace?: boolean;
}) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    if (!start) {
      setOut("");
      setDone(false);
      return;
    }

    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) {
        setDone(true);
        doneRef.current?.();
        return;
      }
      // Mild jitter for human cadence; slowdown on punctuation.
      const ch = text[i - 1];
      const jitter = Math.random() * 18;
      const punct = /[.,;:!?\n]/.test(ch ?? "") ? 90 : 0;
      timer = setTimeout(tick, speed + jitter + punct);
    };

    const startTimer = setTimeout(tick, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      clearTimeout(startTimer);
    };
  }, [text, speed, start, startDelay]);

  return (
    <span
      className={cn(
        preserveWhitespace ? "whitespace-pre-wrap" : "",
        className,
      )}
    >
      {out}
      {showCursor && (!done || cursorOnEnd) && <Cursor className="ml-[1px]" />}
    </span>
  );
}
