import { LoginForm } from "@/components/auth/LoginForm";
import Image from "next/image";

export default function Login() {
  return (
    <div className="h-screen background-gradient-mobile grid place-items-center lg:grid-cols-2">
      <LoginForm />
      <div className="w-full h-96 relative max-lg:hidden">
        <Image
          src="/login-3.jpg"
          alt="login image"
          fill
          loading="lazy"
          className="object-cover object-center saturate-200"
        />
      </div>
    </div>
  );
}
