"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface AddCategoryProps {
  name: string;
  email?: string;
}
export const createCategory = async ({ email, name }: AddCategoryProps) => {
  const user = await getUserByEmail(email);

  if (!user) return { error: "Usuario nao encontrado" };

  const existingCategories = user.categories.find(
    (category) => category.nome === name
  );

  if (existingCategories) return null;

  try {
    const categoryCreated = await db.category.create({
      data: {
        nome: name,
        User: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    revalidatePath("/dashboard");

    return categoryCreated;
  } catch (error) {}
};
