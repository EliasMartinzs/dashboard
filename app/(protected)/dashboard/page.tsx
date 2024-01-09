import { auth } from "@/auth";
import { CardBalance } from "@/components/dashboard/CardBalance";
import ExpenseForm from "@/components/dashboard/ExpenseForm";
import { ShowExpenses } from "@/components/dashboard/ShowExpenses";
import { Sheeet } from "@/components/reusable/Sheeet";
import { UserButton } from "@/components/reusable/UserButton";
import { ToggleTheme } from "@/components/settings/ToggleTheme";
import { useUserData } from "@/hooks/useUserData";
import { Settings } from "lucide-react";
import { IoCreateOutline } from "react-icons/io5";

export default async function page() {
  const user = await auth();
  const { category } = await useUserData(user?.user?.email ?? "");

  return (
    <div className="flex flex-col lg:flex-row h-screen gap-x-5 lg:p-5">
      <div className="bg-[#121212] dark:bg-cardColor text-white dark:text-foreground w-full lg:w-32 p-4 rounded-xl max-lg:hidden">
        <h2 className="font-black text-center">Db</h2>
        <h2 className="font-extralight text-center">Finance</h2>
      </div>

      <div className="flex-1 p-4">
        <div className="flex items-center justify-between w-full mb-4">
          <div className="p-4">
            <div className="text-xl font-bold">Bom-dia, {user?.user?.name}</div>
          </div>

          <div className="flex items-center gap-5">
            <Settings />
            <ToggleTheme />
            <UserButton />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/3 p-4 space-y-5">
            <h2 className="font-bold text-xl lg:text-2xl">Minha carteira</h2>
            <CardBalance />
          </div>
          <div className="lg:flex-1 bg-cardColor shadow-lg ring-1 ring-black/5 p-4 rounded-lg">
            <div className="space-x-5 flex items-center">
              <h2 className="font-semibold">Despesas</h2>
              <Sheeet
                iconOpen={
                  <IoCreateOutline className="text-xl cursor-pointer" />
                }
                side="bottom"
              >
                <div className="w-full flex-center flex-col gap-y-5">
                  <h2 className="text-lg font-semibold">Minhas despesas</h2>
                  <ExpenseForm category={category} />
                </div>
              </Sheeet>
            </div>
            <ShowExpenses category={category} />
          </div>
        </div>

        <div className="bg-cardColor shadow-lg ring-1 ring-black/5 p-4 mt-4 rounded-lg">
          Gráfico ou Tabela de Finanças
        </div>
      </div>
    </div>
  );
}
