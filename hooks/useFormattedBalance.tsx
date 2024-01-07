"use client";

import { useEffect, useState } from "react";
import Decimal from "decimal.js";

const useFormattedBalance = (balance: Decimal | null | undefined) => {
  const [formattedBalance, setFormattedBalance] = useState<string>("");

  console.log(formattedBalance);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      balance !== null &&
      balance !== undefined
    ) {
      const formatted = new Decimal(balance)
        .toNumber()
        .toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      setFormattedBalance(formatted);
    } else {
      setFormattedBalance("Valor não disponível");
    }
  }, [balance]);

  return formattedBalance;
};

export default useFormattedBalance;
