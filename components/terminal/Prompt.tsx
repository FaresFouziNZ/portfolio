import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

// Renders a terminal prompt prefix: `fares:~/path $ command`.
// Colour-coded by shell convention - user in phosphor, path in amber.
export function Prompt({
  path = "~",
  command,
  className,
  showDollar = true,
}: {
  path?: string;
  command?: React.ReactNode;
  className?: string;
  showDollar?: boolean;
}) {
  return (
    <span className={cn("font-mono text-sm md:text-base", className)}>
      <span className="text-phosphor">{profile.handle}</span>
      <span className="text-ink-dim">:</span>
      <span className="text-amber">{path}</span>
      {showDollar && <span className="text-ink-dim"> $ </span>}
      {command && <span className="text-ink">{command}</span>}
    </span>
  );
}
