"use client";
import React, { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Hooks para navegação e acesso à query

// React Hook Form
import { useForm } from "react-hook-form";

// Shadcn UI
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Icons
import { Search as SearchIcon } from "lucide-react";

type FormData = {
  product: string;
};

const SearchLabel = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || ""; // Obtém o valor atual da query ou vazio

  const form = useForm<FormData>({
    defaultValues: {
      product: query, // Define o valor inicial do campo como o query atual
    },
  });

  useEffect(() => {
    // Atualiza o valor do campo caso a query mude
    form.setValue("product", query);
  }, [query, form]);

  // Função de busca
  const handleSearch = (data: FormData) => {
    if (data.product.trim()) {
      router.push(`/search?query=${encodeURIComponent(data.product)}`); // Redireciona com a query
    } else {
      alert("Por favor, insira um termo para pesquisar.");
    }
  };
  return (
    <section className="w-full flex items-center justify-center py-6 max-[480px]:px-2 px-4 bg-white">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSearch)}
          className="w-full space-y-4"
        >
          {/* Campo do formulário */}
          <FormField
            control={form.control} // Configurando o contexto de formulário
            name="product"
            render={({ field }) => (
              <FormItem className="w-full flex items-center justify-between border px-3">
                <FormControl>
                  <Input
                    placeholder="Pesquise o produto que deseja comprar"
                    {...field}
                    className="py-8 border-none shadow-none focus-visible:ring-0 max-[480px]:text-sm"
                  />
                </FormControl>
                <FormMessage />

                {/* Botão para submeter */}
                <button
                  type="submit"
                  className="!h-fit p-2 bg-transparent hover:bg-transparent shadow-none"
                >
                  <SearchIcon size={32} className="text-black" />
                </button>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </section>
  );
};

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main className="w-full flex min-h-screen flex-col items-center justify-center">
          <p>Carregando...</p>
        </main>
      }
    >
      <SearchLabel />
    </Suspense>
  );
}