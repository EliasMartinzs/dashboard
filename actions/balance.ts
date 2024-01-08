"use server";

import { db } from "@/lib/db";
import { AddAmountSchema } from "@/schema";
import { revalidatePath } from "next/cache";
import * as z from "zod";

export const addMoney = async (
  values: z.infer<typeof AddAmountSchema>,
  email: string
) => {
  const validatedField = AddAmountSchema.safeParse(values);

  if (!validatedField.success) return { error: "Valores invalidos!" };

  const { amount } = validatedField.data;

  try {
    const parsedAmount = parseFloat(amount.replace(",", ""));

    await db.user.update({
      where: { email: email },
      data: {
        balance: {
          increment: parsedAmount,
        },
      },
    });

    revalidatePath("/dashboard");

    return { sucess: true };
  } catch (error) {
    return null;
  }
};
