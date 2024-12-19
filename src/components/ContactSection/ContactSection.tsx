import React from "react";
import Link from "next/link";

// Components

// Icons
import { FaWhatsapp } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";

function ContactSection() {
  return (
    <section className="w-full max-[680px]:h-auto h-[350px] flex max-[680px]:flex-col-reverse items-center justify-between gap-4 max-[480px]:px-2 max-[860px]:px-4 px-12">
      <div className="w-full max-[680px]:h-[350px] h-full flex flex-col items-center justify-center gap-2 border bg-[#070707] text-white border-[#f2f2f2] rounded-xl px-4 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
        <i>
          <IoIosPin className="max-[480px]:text-[100px] text-[150px]" />
        </i>
        <h4 className="font-bold uppercase font-sans text-4xl">Localização</h4>
        <p className="text-center">
          Rua Nossa Senhora das Dores, Rubem Berta, Porto Alegre - 91160-110
        </p>
      </div>
      <div className="w-full max-[680px]:h-[350px] h-full flex flex-col items-center justify-center gap-2 border border-[#f5f5f5] rounded-xl px-4 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
        <i>
          <FaWhatsapp className="max-[480px]:text-[100px] text-[150px]" />
        </i>
        <h4 className="font-bold uppercase font-sans text-4xl">Contatos</h4>
        <div className="flex gap-2 items-center">
          <p className="font-semibold text-lg">(51)9 9999-9999</p>
          <Link
            href={"/"}
            className="text-black hover:bg-gray-200 transition-all ease-in-out duration-300 border-[#d7d7d7] border-[2px] px-2 py-1 rounded font-semibold uppercase font-oswald"
          >
            Chamar
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <p className="font-semibold text-lg">(51)9 9999-9999</p>
          <Link
            href={"/"}
            className="text-black hover:bg-gray-200 transition-all ease-in-out duration-300 border-[#d7d7d7] border-[2px] px-2 py-1 rounded font-semibold uppercase font-oswald"
          >
            Chamar
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
