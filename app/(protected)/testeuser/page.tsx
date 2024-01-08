import { auth } from "@/auth";
import { getUserCategories } from "@/data/user";
import { useUserData } from "@/hooks/useUserData";
import React from "react";

export default async function page() {
  const userAuth = await auth();
  const { category } = await useUserData(userAuth?.user?.email ?? "");
  console.log(category);

  return <div>page</div>;
}
