import { getUserByEmail } from "@/data/user";

export async function useUserData(email: string) {
  const userData = await getUserByEmail(email);

  return {
    name: userData?.name,
    email: userData?.email,
    image: userData?.image,
    balance: userData?.balance,
  };
}
