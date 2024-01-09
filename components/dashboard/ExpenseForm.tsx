"use client";

import React, { ChangeEvent, FormEvent, useState, useTransition } from "react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CategoryProps, StatusProps } from "@/types";

import { createExpenses, seedsCategories } from "@/actions/expenses";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Spinner } from "../reusable/Spinner";
import { FormState } from "../auth/FormState";
import { RiErrorWarningFill } from "react-icons/ri";
import { NewCategory } from "./NewCategory";

interface ExpensesState {
  [key: string]: string;
}

const ExpenseForm = ({ category }: CategoryProps) => {
  const [isPending, startTransition] = useTransition();
  const [expenses, setExpenses] = useState<ExpensesState>({});
  const [loadingCategory, setLoadingCategory] = useState(false);
  const [loadingExpense, setLoadingExpense] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [selectedStatus, setSelectedStatus] = useState<StatusProps | null>(
    null
  );
  const user = useCurrentUser();

  const createNewExpense = async () => {
    setLoadingExpense(true);
    try {
      if (selectedStatus?.value.length === 0) {
        setError("Por favor selecione uma categoria!");
      }

      const categoryId = selectedStatus?.id || 0;

      await createExpenses({
        amount: expenses.amount,
        categoryId,
        description: expenses.description,
      });
    } catch (error) {
    } finally {
      setLoadingExpense(false);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setExpenses((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-2 w-96 gap-4">
      <NewCategory
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <Input
        placeholder="Descrição"
        className="form-outline"
        name="description"
        onChange={handleChange}
      />

      <Input
        type="number"
        placeholder="R$ 99,00"
        className="form-outline"
        name="amount"
        onChange={handleChange}
      />

      <Button
        className="bg-primary-500 text-white dark:text-black font-medium"
        rounded="full"
        size="lg"
        disabled={isPending}
        onClick={createNewExpense}
      >
        {loadingExpense ? <Spinner /> : "Nova despesa"}
      </Button>
      {error && (
        <FormState
          style="bg-red-500 text-[10px]"
          message={error}
          icon={<RiErrorWarningFill className="w-7 h-7" />}
        />
      )}
    </form>
  );
};

export default ExpenseForm;
