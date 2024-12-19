"use client";

import React from "react";

// Next
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

// Images

// Components
import { Skeleton } from "../ui/skeleton";

// Icons
import { Menu, X, Truck } from "lucide-react";

// Components
import Search from "./Search/Search";
import { useRouter } from "next/navigation";

function Header() {
  // Abrir e fechar o aside
  const [isWideAside, setIsWideAside] = React.useState(false);

  // Estado para controlar o Skeleton
  const [showSkeleton, setShowSkeleton] = React.useState(true);

  const navigator = useRouter();

  //Variáveis que retornam os dados do usuário e sessão se houver
  const { data, status } = useSession();

  const handleLogout = () => {
    signOut();
  };

  const handleLogin = () => {
    navigator.replace("/login");
  };

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

  // Controle de exibição do Skeleton
  React.useEffect(() => {
    const timer = setTimeout(() => setShowSkeleton(false), 500); // 500 milisegundos

    return () => clearTimeout(timer); // Limpeza do timer
  }, []);

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
    <header className="w-full flex z-50 sticky top-0 flex-col items-center pb-4 justify-between gap-5 bg-white">
      <div className="w-full flex items-center justify-between bg-[#010101] text-white px-4 py-2">
        <h4 className="flex w-full gap-1 flex-row justify-between max-[480px]:text-[0.6rem] text-xs text-gray-200">
          <div className="flex flex-row gap-1">
            <i>
              <Truck size={16} />
            </i>
            Entrega grátis para compras apartir de R$ 199,00
          </div>
          {status === "authenticated" && data !== null ? (
            <div className="flex flex-row gap-1">
              <p>{data.user?.name}</p>{" "}
              <button
                className="p-0 m-0 border-none text-blue-400"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="p-0 m-0 border-none text-blue-400"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </h4>
      </div>
      <div className="w-full max-[480px]:px-2 max-[860px]:px-4 px-12">
        <div className="w-full flex flex-row items-center justify-between py-2 px-4 border border-[#dadada]">
          {showSkeleton ? (
            <div className="w-full flex items-center justify-between">
              <Skeleton className="h-10 w-20" />
              <Skeleton className="h-10 w-40" />
              <Skeleton className="h-10 w-20" />
            </div>
          ) : (
            <>
              <h2 className="font-bold text-2xl w-28">LOGO</h2>
              {/*Desktop*/}
              <nav
                className={`max-[860px]:hidden max-[1440px]:-mr-[7%] -mr-[9%]`}
              >
                <ul className="flex flex-row justify-between gap-3">
                  {links.map((el, index) => (
                    <li
                      key={index}
                      className="font-semibold max-[1440px]:text-sm text-md transition ease-in-out duration-300 hover:text-gray-500 border-b-2 border-transparent hover:border-black"
                    >
                      <Link href={el.url}>{el.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Search />
              {/*Mobile*/}
              <nav className="hidden max-[860px]:block">
                <button
                  onClick={toggleAsideWidth}
                  className={`top-[68px] right-6 ${
                    windowWidth < 861
                      ? isWideAside
                        ? "fixed h-screen text-xl z-[51]"
                        : "absolute text-xl z-[51]"
                      : "hidden"
                  }`}
                >
                  {isWideAside ? (
                    <X
                      className={`absolute top-0 right-0 ${
                        isWideAside && "text-white"
                      }  border border-gray-500`}
                      size={30}
                    />
                  ) : (
                    <Menu className="border border-gray-500" size={30} />
                  )}
                </button>
                <ul
                  className={`transition-all duration-500 ease-in-out z-[50] fixed font-source text-white right-0 top-0 py-16 h-screen flex flex-col justify-start drop-shadow-lg tracking-widest gap-10 bg-[#252525] ${
                    isWideAside
                      ? "w-[100%]"
                      : "w-[0%] transition-all translate-x-full"
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
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
