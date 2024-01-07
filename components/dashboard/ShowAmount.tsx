"use client";
import useFormattedBalance from "@/hooks/useFormattedBalance";
import Decimal from "decimal.js";

export function ShowAmount({
  balance,
}: {
  balance: Decimal | null | undefined;
}) {
  const formattedBalance = useFormattedBalance(balance);
  return <div>{formattedBalance}</div>;
}
