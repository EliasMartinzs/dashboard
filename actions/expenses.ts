"use server";

import { expenseCategories } from "@/constants";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface CreateExpenseProps {
  amount: string;
  description: string;
  categoryId: number;
}

export const createExpenses = async ({
  amount,
  categoryId,
  description,
}: CreateExpenseProps) => {
  const currentDate = new Date();
  try {
    await db.expense.create({
      data: {
        description,
        date: currentDate,
        value: parseFloat(amount),
        category: { connect: { id: categoryId } },
      },
    });

    revalidatePath("/");
  } catch (error: any) {
    console.error("Erro ao criar despesa:", error);
  }
};

export const seedsCategories = async (userId?: string) => {
  try {
    // const expenseCategories = [
    //   { value: "Alimentação", userId: userId },
    //   { value: "Transporte", userId: userId },
    //   { value: "Moradia", userId: userId },
    //   { value: "Compras", userId: userId },
    //   { value: "Educação", userId: userId },
    //   { value: "Academia", userId: userId },
    //   { value: "Saúde", userId: userId },
    //   { value: "Finanças", userId: userId },
    //   { value: "Entretenimento", userId: userId },
    //   { value: "Filmes", userId: userId },
    //   { value: "Animais de Estimação", userId: userId },
    //   { value: "Supermercado", userId: userId },
    //   { value: "Viagem", userId: userId },
    //   { value: "Carro", userId: userId },
    //   { value: "Esportes", userId: userId },
    //   { value: "Trabalho", userId: userId },
    //   { value: "Tecnologia", userId: userId },
    //   { value: "Livros", userId: userId },
    //   { value: "Café", userId: userId },
    //   { value: "Eventos", userId: userId },
    //   { value: "Banheiro", userId: userId },
    //   { value: "Lavanderia", userId: userId },
    //   { value: "Internet", userId: userId },
    //   { value: "Praia", userId: userId },
    //   { value: "Natureza", userId: userId },
    // ];
    // const categoriesData = expenseCategories.map(({ value }) => ({
    //   name: value,
    // }));
    // await db.category.createMany({
    //   data: categoriesData,
    //   skipDuplicates: true,
    // });
  } catch (error) {
    console.log("error", error);
  }
};
