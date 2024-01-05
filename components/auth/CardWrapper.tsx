import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Social } from "./Social";
import Link from "next/link";

interface CardWrapperProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  social?: boolean;
  redirect: string;
  href: string;
}

export function CardWrapper({
  children,
  title,
  description,
  social,
  href,
  redirect,
}: CardWrapperProps) {
  return (
    <Card className="shadow-2xl min-w-96 min-h-96 bg-white text-black">
      <CardHeader>
        <CardTitle className="text-xl text-center">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex-center flex-col gap-y-3 w-full">
        {social && <Social />}
        <Link href={href}>{redirect}</Link>
      </CardFooter>
    </Card>
  );
}
