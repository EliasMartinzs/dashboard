"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AddAmountSchema } from "@/schema";
import { Draweer } from "../reusable/Draweer";
import { addMoney } from "@/actions/balance";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useState, useTransition } from "react";

export function AddAmount() {
  const [isPeding, startTransition] = useTransition();
  const user = useCurrentUser();
  const form = useForm<z.infer<typeof AddAmountSchema>>({
    resolver: zodResolver(AddAmountSchema),
    defaultValues: {
      amount: "",
    },
  });

  function onSubmit(values: z.infer<typeof AddAmountSchema>) {
    startTransition(() => {
      addMoney(values, user?.email ?? "").then((data) => {
        form.reset();
      });
    });
  }

  return (
    <Draweer
      title="Adicionar Saldo"
      iconOpen={"Adicionar Saldo"}
      styles="lg:flex lg:items-center lg:justify-center"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-center flex-col gap-y-8"
        >
          <div className="transition-all">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="max-lg:px-20">
                  <FormControl>
                    <Input
                      placeholder="R$ 25,00"
                      type="text"
                      className="form-outline"
                      {...field}
                      disabled={isPeding}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" variant="default" size="lg" rounded="full">
            Salvar
          </Button>
        </form>
      </Form>
    </Draweer>
  );
}
