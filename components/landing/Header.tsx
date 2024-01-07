"use client";

import { linksHeaderLanding } from "@/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { RiMenu5Fill } from "react-icons/ri";
import { Sheeet } from "../reusable/Sheeet";
import { Separator } from "../reusable/Separator";

export function Header() {
  return (
    <header className="text-white w-full h-20 flex items-center justify-start max-sm:px-5 lg:px-10">
      <div className="flex items-center max-sm:justify-center w-full">
        <Link href="/" className="text-2xl font-black">
          Dashboard
        </Link>
      </div>

      <div className="lg:hidden">
        <Sheeet
          iconOpen={<RiMenu5Fill className="text-2xl cursor-pointer" />}
          side="right"
        >
          <div className="w-full flex-center gap-x-5 mt-10">
            <Link
              className="bg-[#121212] text-white p-2 rounded-full hover:shadow-2xl"
              href="/auth/login"
            >
              Login
            </Link>
            <Link
              className="border rounded-full p-2 hover:bg-slate-100 transition-colors"
              href="/auth/register"
            >
              Criar uma conta
            </Link>
          </div>
          <Separator />
          <div className="space-y-6">
            <ul className="flex-start flex-col gap-y-5">
              {linksHeaderLanding.map((link, i) => {
                const Icon = link.icon;
                return (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="flex-center gap-x-5 text-xl font-medium hover:font-semibold hover:underline underline-offset-4"
                    >
                      <Icon className="text-2xl" /> {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Sheeet>
      </div>

      <div className="flex items-center gap-x-10 max-lg:hidden">
        <ul className="w-full flex items-center justify-center gap-x-5">
          {linksHeaderLanding.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="flex items-center text-slate-300/90 justify-center gap-x-1 text-lg font-light hover:underline underline-offset-4 transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button variant="outline" size="lg" rounded="full">
          <Link href="/auth/login">Login</Link>
        </Button>
      </div>
    </header>
  );
}
