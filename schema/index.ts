import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Forneça um e-mail válido.",
  }),
  password: z.string(),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Forneça um nome válido.",
  }),
  email: z.string().email({
    message: "Forneça um e-mail válido.",
  }),
  password: z.string().min(1, {
    message: "Senha deve conter no minimo 6 caracteres",
  }),
});
