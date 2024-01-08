interface Category {
  id: number;
  nome: string;
  userId: string | null;
}

interface CategoryProps {
  category?: Category[];
}

export type { CategoryProps };
