import { db } from "@/lib/db";

export const getUserByEmail = async (email: string | undefined) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
      include: {
        creditCard: true,
        transactions: true,
        categories: true,
      },
    });

    return user;
  } catch (error: any) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
      include: {
        creditCard: true,
        transactions: true,
        categories: true,
      },
    });

    return user;
  } catch (error: any) {
    return null;
  }
};

export const getUserCategories = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
      include: {
        categories: true,
      },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return user.categories;
  } catch (error) {
    console.error("Erro ao buscar categorias do usuário:", error);
    throw new Error("Erro ao buscar categorias do usuário");
  }
};
