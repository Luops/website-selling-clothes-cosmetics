"use client";

import React from "react";

// Next
import Link from "next/link";

// Images

// Icons
import { Menu, X } from "lucide-react";

function Header() {
  // Abrir e fechar o aside
  const [isWideAside, setIsWideAside] = React.useState(false);
  // Função para abrir e fechar o aside
  const toggleAsideWidth = () => {
    setIsWideAside(!isWideAside);
  };
  const links = [
    {
      name: "Home",
      url: "/",
      key: "home",
    },
    {
      name: "Serviços",
      url: "/servicos",
      key: "services",
    },
    {
      name: "Sobre Nós",
      url: "/sobre",
      key: "about",
    },
    {
      name: "Contato",
      url: "/contato",
      key: "contact",
    },
  ];

  // Resolução da tela
  const [windowWidth, setWindowWidth] = React.useState(0);
  // Função para atualizar o state com a largura atual da janela em pixels
  const updateWindowWidth = () => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  };

  // Atualizar a largura da janela quando a janela for redimensionada
  React.useEffect(() => {
    // Verifica se o código está sendo executado no navegador antes de adicionar o listener
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth); // Define o valor inicial
      window.addEventListener("resize", updateWindowWidth); // Adiciona um listener de evento de redimensionamento da janela
    }

    return () => {
      // Remove o listener de evento de redimensionamento da janela quando o componente for desmontado
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateWindowWidth);
      }
    };
  }, []);
  return (
    <header className="w-full flex z-50 sticky top-0 bg-primaryBlue bg-[#101D3B] text-white flex-row items-center py-4 justify-between">
      <h2 className="w-28 ml-14">Busque</h2>
      {/*Desktop*/}
      <nav className={`max-[860px]:hidden`}>
        <ul className="mr-14 flex flex-row justify-between">
          {links.map((el, index) => (
            <li
              key={index}
              className="mx-3 transition ease-in-out duration-300 hover:text-blue-300 border-b-2 border-transparent hover:border-blue-300"
            >
              <Link href={el.url}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/*Mobile*/}
      <nav className="hidden max-[860px]:block">
        <button
          onClick={toggleAsideWidth}
          className={`top-6 right-4 ${
            windowWidth < 861
              ? isWideAside
                ? "fixed h-screen text-xl z-[51]"
                : "absolute text-xl z-[51]"
              : "hidden"
          }`}
        >
          {isWideAside ? (
            <X className="absolute top-0 right-0" size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
        <ul
          className={`transition-all duration-500 ease-in-out z-[50] fixed font-source text-white right-0 top-0 py-16 h-screen flex flex-col justify-start drop-shadow-lg tracking-widest gap-10 bg-[#252525] ${
            isWideAside ? "w-[95%]" : "w-[0%] transition-all translate-x-full"
          } overflow-hidden`}
        >
          {links.map((el, index) => (
            <li
              key={index}
              className={`w-full text-center px-4 text-2xl`}
              onClick={() => {
                toggleAsideWidth();
              }}
            >
              <Link href={el.url}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
