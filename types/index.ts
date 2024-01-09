interface Expense {
  id: number;
  description: string;
  value: number;
  categoryId: number;
}

interface Category {
  id: number;
  nome: string;
  userId: string | null;
  expenses: Expense[];
}

interface CategoryProps {
  category?: Category[];
}

type StatusProps = {
  value: string;
  label: string;
  id: number;
};

export type { CategoryProps, StatusProps };
