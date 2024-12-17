import React from "react";
import Image from "next/image";
import Link from "next/link";

// Shadcn UI
import { Button } from "../ui/button";

// Images
import ManWithShirtMadrid from "@/assets/images/Camiseta-Masculina.png";
import WomanWithShirt from "@/assets/images/Camiseta-Feminina.png";
import Perfume212 from "@/assets/images/212-VIP.png";
import PerfumeFerrari from "@/assets/images/Ferrari-Black.png";

function FeaturedSection() {
  return (
    <section className="w-full max-[480px]:px-2 max-[860px]:px-4 px-12">
      <Link
        href="/"
        target="_blank"
        className="w-full min-[300px]:!h-[500px] min-[360px]:!h-[550px] min-[861px]:!h-[450px] min-[1441px]:!h-[500px] flex max-[860px]:flex-col-reverse items-center justify-between bg-[#f5f5f5] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.05)] border border-[#f2f2f2]"
      >
        <div className="max-[860px]:w-full w-1/2 h-full relative flex max-[860px]:justify-center justify-end">
          <Image
            src={ManWithShirtMadrid}
            alt="Camisa Masculina"
            className="absolute bottom-0 max-[860px]:w-[350px] w-[400px] max-[480px]:ml-3 max-[860px]:ml-10"
          />
        </div>
        <div className="max-[860px]:w-full w-1/2 flex max-[860px]:items-center items-start max-[860px]:justify-center justify-start max-[860px]:pt-4">
          <div className="flex items-center justify-center flex-col gap-2">
            <h3 className="font-semibold uppercase max-[480px]:text-3xl max-[1440px]:text-4xl text-6xl max-[1440px]:max-w-[350px] max-w-[450px] text-center font-oswald tracking-[1.5px]">
              Camisas de Futebol Masculinas
            </h3>
            <p className="text-center font-oswald tracking-[1px] max-[480px]:text-sm max-[1440px]:text-md text-lg">
              Aqui você encontra a camisa perfeita do seu time.
            </p>
            <Button className="rounded-none font-oswald tracking-[2px]">
              Ver mais
            </Button>
          </div>
        </div>
      </Link>
      <div className="w-full flex max-[860px]:flex-col items-center justify-center gap-4 mt-4">
        <Link
          href="/"
          target="_blank"
          className="w-full flex max-[860px]:flex-col-reverse max-[860px]:justify-between justify-center gap-0 max-[1440px]:h-[200px] h-[300px] max-[360px]:!h-[500px] max-[860px]:!h-[550px] bg-[#f5f5f5] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.05)] border border-[#f2f2f2]"
        >
          <div className="w-full relative flex max-[860px]:justify-center justify-end">
            <Image
              src={WomanWithShirt}
              alt="Camisa Feminina"
              className="absolute bottom-0 max-[360px]:w-[250px] max-[860px]:w-[280px] max-[1440px]:w-[150px] w-[220px] bg-contain"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full h-full flex flex-col items-center justify-between py-6">
              <h3 className="max-[480px]:!text-3xl max-[860px]:!text-4xl max-[1440px]:!text-2xl !text-6xl max-[1440px]:max-w-[400px] max-w-[450px] text-center font-semibold uppercase font-oswald tracking-[1.5px]">
                Camisas de Futebol Femininas
              </h3>
              <Button className="rounded-none font-oswald tracking-[2px]">
                Ver mais
              </Button>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          target="_blank"
          className="w-full flex justify-center gap-5 max-[1440px]:h-[200px] h-[300px] bg-[#f5f5f5] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.05)] border border-[#f2f2f2]"
        >
          <div className="flex items-center justify-center">
            <Image
              src={Perfume212}
              alt="Perfume Feminino 212 VIP"
              className="max-[1440px]:w-[180px] w-[200px] bg-contain"
            />
            <Image
              src={PerfumeFerrari}
              alt="Perfume Masculino Ferrari Black"
              className="max-[1440px]:w-[180px] w-[200px] max-[640px]:-ml-20 max-[860px]:ml-0 -ml-20 bg-contain rotate-6"
            />
          </div>
          <div className="pr-2">
            <div className="h-full flex flex-col justify-between py-8">
              <h3 className="max-[480px]:text-3xl max-[1440px]:text-4xl text-6xl max-[1440px]:max-w-[350px] max-w-[450px] font-semibold uppercase font-oswald tracking-[1.5px]">
                Perfumes
              </h3>
              <Button className="w-fit self-center rounded-none font-oswald tracking-[2px]">
                Ver mais
              </Button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedSection;
