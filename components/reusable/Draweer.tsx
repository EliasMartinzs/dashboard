import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface DraweerProps {
  iconOpen: React.ReactNode;
  children: React.ReactNode;
  title?: string;
  description?: string;
  styles?: string;
}

export function Draweer({
  children,
  description,
  iconOpen,
  title,
  styles,
}: DraweerProps) {
  return (
    <Drawer>
      <DrawerTrigger>{iconOpen}</DrawerTrigger>
      <DrawerContent className={styles}>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          {children}
          <DrawerClose></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
