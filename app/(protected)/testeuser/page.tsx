import { auth } from "@/auth";
import { useUserData } from "@/hooks/useUserData";
import React from "react";

export default async function page() {
  const userAuth = await auth();
  return <div>page</div>;
}
