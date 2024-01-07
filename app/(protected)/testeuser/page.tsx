import { auth } from "@/auth";
import { getUserByEmail } from "@/data/user";
import React from "react";

export default async function page() {
  const user = await auth();
  const userDb = await getUserByEmail(user?.user?.email ?? "");

  console.log(user);

  return <div>page</div>;
}
