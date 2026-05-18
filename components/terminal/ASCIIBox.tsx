import { cn } from "@/lib/utils";

// Renders a labelled bordered region using box-drawing characters.
// Used for skill tables, project file previews, etc. Reads as terminal output.
export function ASCIIBox({
  label,
  badge,
  children,
  className,
  accent = "phosphor",
}: {
  label: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
  accent?: "phosphor" | "amber" | "cyan" | "magenta";
}) {
  const accentColor: Record<string, string> = {
    phosphor: "text-phosphor",
    amber: "text-amber",
    cyan: "text-cyan",
    magenta: "text-magenta",
  };

  return (
    <div
      className={cn(
        "relative rounded-md border border-phosphor/20 bg-bg-raised/60 backdrop-blur-sm transition-colors hover:border-phosphor/50",
        className,
      )}
    >
      {/* Top border with label */}
      <div className="absolute -top-2.5 left-3 flex items-center gap-2 px-2">
        <span className="bg-bg-deep px-1.5 text-[11px] uppercase tracking-[0.18em] text-ink-mute">
          -[
        </span>
        <span
          className={cn(
            "bg-bg-deep px-1 text-xs font-semibold uppercase tracking-widest",
            accentColor[accent],
          )}
        >
          {label}
        </span>
        <span className="bg-bg-deep px-1.5 text-[11px] uppercase tracking-[0.18em] text-ink-mute">
          ]-
        </span>
        {badge && (
          <span className="bg-bg-deep px-1 text-[10px] uppercase tracking-widest text-ink-mute">
            {badge}
          </span>
        )}
      </div>

      <div className="p-4 pt-5 md:p-5 md:pt-6">{children}</div>
    </div>
  );
}
