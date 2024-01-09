"use server";

import { z } from "zod";

import { RegisterSchema } from "@/schema";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { seedsCategories } from "./expenses";

const expenseCategories = [
  { value: "Alimentação" },
  { value: "Transporte" },
  { value: "Moradia" },
  { value: "Compras" },
  { value: "Educação" },
  { value: "Academia" },
  { value: "Saúde" },
  { value: "Finanças" },
  { value: "Entretenimento" },
  { value: "Filmes" },
  { value: "Animais de Estimação" },
  { value: "Supermercado" },
  { value: "Viagem" },
  { value: "Carro" },
  { value: "Esportes" },
  { value: "Trabalho" },
  { value: "Tecnologia" },
  { value: "Livros" },
  { value: "Café" },
  { value: "Eventos" },
  { value: "Banheiro" },
  { value: "Lavanderia" },
  { value: "Internet" },
  { value: "Praia" },
  { value: "Natureza" },
];

type ExpenseCategory = {
  value: string;
};

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos de entrada invalídos!" };
  }

  const { email, password, name } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "E-Mail ja esta cadastrado" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error: any) {
    return error;
  }

  return { sucess: "Usuario criado com sucesso" };
};
