"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { StatusProps } from "@/types";
import { expenseCategories } from "@/constants";

interface NewCategoryProps {
  selectedStatus: StatusProps | null;
  setSelectedStatus: (status: StatusProps | null) => void;
}

export function NewCategory({
  selectedStatus,
  setSelectedStatus,
}: NewCategoryProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full text-foreground justify-start border-b">
            {selectedStatus ? (
              <h3 className="flex-center gap-x-3 text-xl">
                <selectedStatus.label />{" "}
                <p className="text-sm">{selectedStatus.value}</p>
              </h3>
            ) : (
              <>Selecionar Categoria</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  setOpen,
  setSelectedStatus,
}: {
  setOpen: (open: boolean) => void;
  setSelectedStatus: (status: StatusProps | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Buscar categorias..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        <CommandGroup>
          {expenseCategories.map((category) => (
            <CommandItem
              className="flex gap-x-3 text-lg"
              key={category.value}
              value={category.value}
              onSelect={() => {
                setSelectedStatus(category);
                setOpen(false);
              }}
            >
              <category.label />
              <small className="text-sm">{category.value}</small>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
