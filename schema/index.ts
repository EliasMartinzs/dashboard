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

export const AddAmountSchema = z.object({
  amount: z.string().refine((val) => val !== "", {
    message: "O campo não pode estar vazio",
  }),
});

export const categorySchema = z.object({
  category: z.string().min(1, {
    message: "Categoria invalida",
  }),
});
