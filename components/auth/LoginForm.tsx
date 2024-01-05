"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schema";
import { useSearchParams } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FormState } from "./FormState";
import { CgDanger } from "react-icons/cg";
import { LoginButton } from "./LoginButton";
import { CiCircleCheck } from "react-icons/ci";
import { CardWrapper } from "./CardWrapper";
import { TfiEmail } from "react-icons/tfi";
import { Label } from "../ui/label";

export function LoginForm() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email ja esta sendo usado em outra conta"
      : "";
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setError("");
    setSucess("");

    startTransition(() => {
      login(data).then((data) => {
        setError(data?.error);
        // setSucess(data.sucess);
      });
    });
  };

  return (
    <div className="max-sm:h-[100svh] h-screen grid place-items-center background-login-page">
      <Form {...form}>
        <CardWrapper
          href="/auth/register"
          redirect="Nao tem uma conta? Registre-se"
          title="Login"
          social
        >
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4"
          >
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
                      disabled={isPending}
                      type="email"
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
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="******"
                        type="password"
                        className="form-outlined"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Label>
            {error && (
              <FormState
                icon={<CgDanger className="text-2xl" />}
                style="bg-danger-500"
                message={error || urlError}
              />
            )}
            {sucess && (
              <FormState
                icon={<CiCircleCheck className="text-2xl" />}
                style="bg-danger-500"
                message={sucess || urlError}
              />
            )}
            {urlError && (
              <FormState
                icon={<TfiEmail className="text-2xl" />}
                style="bg-danger-500"
                message={urlError}
              />
            )}
            <LoginButton>Entrar</LoginButton>
          </form>
        </CardWrapper>
      </Form>
    </div>
  );
}
