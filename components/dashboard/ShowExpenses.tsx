import { CategoryProps } from "@/types";

export function ShowExpenses({ category }: CategoryProps) {
  return (
    <div>
      {category?.map((item) => (
        <div key={item.nome}>
          <p>{item.nome}</p>
          <div>
            <p className="bg-red-500">
              {item.expenses.map((exp) => exp.value)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
