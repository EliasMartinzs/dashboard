import Image from "next/image";
import { Button } from "../ui/button";

export function Center() {
  return (
    <>
      <div className="flex items-center justify-center text-white flex-col max-lg:gap-y-5 lg:gap-y-10 overflow-hidden">
        <div className="lg:w-3/4 text-center max-lg:pt-20 lg:pt-32 max-lg:px-5">
          <h1 className="text-2xl lg:text-7xl font-black">
            Domine suas finanças, conquiste seus objetivos.
          </h1>
          <h4 className="text-slate-300/80 lg:text-xl my-3">
            Organize seu dinheiro, liberte sua vida.
          </h4>
        </div>
        <div className="flex-center gap-x-5">
          <Button variant="gradient" rounded="full" className="max-lg:text-sm">
            Confira nossos Planos
          </Button>
          <Button variant="outline" rounded="full">
            Confira nossos Recursos
          </Button>
        </div>
      </div>

      <div className="w-full bg-white mt-60">
        <div className="w-full lg:h-[500px] relative -translate-y-40">
          <Image
            src="/dashboard-image.webp"
            fill
            alt="main image"
            priority
            className="object-contain object-center drop-shadow-2xl max-lg:hidden"
            sizes="100vw"
          />
          <Image
            src="/dashboard-image-mobile.png"
            alt="main image"
            width={0}
            height={0}
            priority
            className="object-cover w-full h-full rounded-lg shadow-lg px-5 lg:hidden"
          />
        </div>
      </div>
    </>
  );
}
