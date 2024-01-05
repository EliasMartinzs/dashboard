import { auth } from "@/auth";
import { UserButton } from "@/components/reusable/UserButton";
import { ToggleTheme } from "@/components/settings/ToggleTheme";
import { Settings } from "lucide-react";

export default async function page() {
  const user = await auth();
  return (
    <div className="flex flex-col lg:flex-row h-screen gap-x-5 lg:p-5">
      <div className="bg-cardColor w-full lg:w-32 p-4 rounded-xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-cardColor shadow-lg ring-1 ring-black/5 p-4 rounded-lg">
            Card 1
          </div>
          <div className="bg-cardColor shadow-lg ring-1 ring-black/5 p-4 rounded-lg">
            Card 2
          </div>
        </div>

        <div className="bg-cardColor shadow-lg ring-1 ring-black/5 p-4 mt-4 rounded-lg">
          Gráfico ou Tabela de Finanças
        </div>
      </div>
    </div>
  );
}
