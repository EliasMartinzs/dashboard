import { db } from "@/lib/db";

export const getUserByEmail = async (email: string | undefined) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
      include: {
        creditCard: true,
        transactions: true,
        accounts: true,
        categories: true,
      },
    });

    return JSON.parse(JSON.stringify(user));
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
        accounts: true,
      },
    });

    return user;
  } catch (error: any) {
    return null;
  }
};
