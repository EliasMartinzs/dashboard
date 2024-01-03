import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

interface SheetProps {
  iconOpen: React.ReactNode;
  children: React.ReactNode;
  side: SheetSide;
  style?: string;
}

export function Sheeet({ children, iconOpen, side, style }: SheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{iconOpen}</SheetTrigger>
      <SheetContent className={style} side={side}>
        {children}
      </SheetContent>
    </Sheet>
  );
}
