import { cn } from "@/lib/utils";

// Blinking block cursor used inline anywhere a "live" caret is needed.
export function Cursor({
  className,
  variant = "block",
}: {
  className?: string;
  variant?: "block" | "bar" | "underscore";
}) {
  const shapes = {
    block: "inline-block w-[0.55em] h-[1.05em] align-text-bottom translate-y-[1px]",
    bar: "inline-block w-[2px] h-[1.05em] align-text-bottom translate-y-[1px]",
    underscore: "inline-block w-[0.6em] h-[2px] align-baseline",
  } as const;

  return (
    <span
      aria-hidden
      className={cn(
        "bg-phosphor shadow-glow animate-blink",
        shapes[variant],
        className,
      )}
    />
  );
}
