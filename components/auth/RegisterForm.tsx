"use client";

import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import { CardWrapper } from "./CardWrapper";
import { RegisterSchema } from "@/schema";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { register } from "@/actions/register";
import { useState, useTransition } from "react";
import { FormState } from "./FormState";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { CgDanger } from "react-icons/cg";

export function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const [sucess, setSucess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSucess("");

    form.reset();

    startTransition(() => {
      register(values).then((data) => {
        setSucess(data?.sucess);
        setError(data?.error);
      });
    });
  };

  return (
    <div className="text-black">
      <CardWrapper
        redirect="Ja tem uma conta? Entrar"
        href="/auth/login"
        title="Criar uma conta"
        social
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4"
          >
            <Label>
              Nome:
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Input
                      {...field}
                      placeholder="jonh doe"
                      className="border rounded-lg focus:border-slate-500 outline-none mt-2"
                      disabled={isPending}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Label>

            <Label>
              E-Mail:
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Input
                      {...field}
                      placeholder="jonhdoe@gmail.com"
                      className="border rounded-lg focus:border-slate-500 outline-none mt-2"
                      type="email"
                      disabled={isPending}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Label>

            <Label>
              Senha:
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Input
                      {...field}
                      placeholder="*****"
                      type="password"
                      className="border rounded-lg focus:border-slate-500 outline-none mt-2"
                      disabled={isPending}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Label>
            {sucess && (
              <FormState
                icon={<CheckCircledIcon className="w-7 h-7" />}
                style="bg-success-500"
                message={sucess}
              />
            )}
            {error && (
              <FormState
                icon={<CgDanger className="w-7 h-7" />}
                style="bg-danger-500"
                message={error}
              />
            )}
            <Button
              variant="gradient"
              className="border rounded-md font-semibold"
              disabled={isPending}
            >
              Enviar
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
}
