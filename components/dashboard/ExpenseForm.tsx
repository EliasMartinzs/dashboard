"use client";

import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  useTransition,
} from "react";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CategoryProps } from "@/types";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createCategory } from "@/actions/expenses";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useUserData } from "@/hooks/useUserData";
import { Spinner } from "../reusable/Spinner";

interface ExpensesState {
  [key: string]: string;
}

const ExpenseForm = ({ category }: CategoryProps) => {
  const [isPending, startTransition] = useTransition();
  const [expenses, setExpenses] = useState<ExpensesState>({});
  const [loading, setLoading] = useState(false);
  const user = useCurrentUser();

  const createNewCategory = async () => {
    setLoading(true);
    try {
      await createCategory({
        email: user?.email ?? "",
        name: expenses.category,
      });
    } catch (error) {
    } finally {
      setLoading(false);
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
      <Input
        placeholder="Categoria"
        className="form-outline"
        name="category"
        onChange={handleChange}
      />
      <Button
        className="bg-primary-500 text-white dark:text-black font-medium"
        rounded="full"
        onClick={createNewCategory}
        disabled={isPending}
        size="lg"
      >
        {loading ? <Spinner /> : "Nova categoria"}
      </Button>

      <Select>
        <SelectTrigger className="form-outline">
          <SelectValue placeholder="Selecione a categoria" />
        </SelectTrigger>
        <SelectContent>
          {category?.map((cat) => (
            <SelectItem key={cat.id} value={cat.id.toString()}>
              {cat.nome}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

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
        type="submit"
        size="lg"
        disabled={isPending}
      >
        Salvar
      </Button>
    </form>
  );
};

export default ExpenseForm;
