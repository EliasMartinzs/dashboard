import { auth } from "@/auth";
import { useUserData } from "@/hooks/useUserData";
import { AddAmount } from "./AddAmount";
import { ShowAmount } from "./ShowAmount";

export async function CardBalance() {
  const userAuth = await auth();
  const { balance, name } = await useUserData(userAuth?.user?.email ?? "");

  return (
    <div className="flex flex-col items-start justify-center gap-y-2">
      <div className="w-full">
        <AddAmount />
      </div>

      <div className="w-3/4 p-4 flex items-start justify-center flex-col gap-y-5 border rounded-xl border-borderColor bg-[#121212] dark:bg-cardColor text-white dark:text-foreground">
        <h2 className="font-semibold text-xl lg:text-2xl">
          <ShowAmount
            balance={JSON.parse(
              JSON.stringify(balance !== undefined && balance)
            )}
          />
        </h2>

        <div className="flex flex-col gap-y-2 w-full">
          <div className="flex items-center justify-between w-full capitalize">
            <p>{name}</p>
            <div className="flex">
              <div className="bg-red-500 w-7 h-7 rounded-full translate-x-2 bg-opacity-80" />
              <div className="bg-yellow-500 w-7 h-7 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
