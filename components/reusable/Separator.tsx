import { cn } from "@/lib/utils";

interface SeparatorProps {
  style?: string;
}

export function Separator({ style }: SeparatorProps) {
  return (
    <div className={cn("w-full h-[1px] bg-primary-500/30 my-10", style)} />
  );
}
