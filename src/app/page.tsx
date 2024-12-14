"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Services
import getProducts from "@/api/mercadoLivreProducts";

// Components
import Search from "../components/Search/Search";
import Loading from "@/components/Loading/Loading";

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
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

type Product = {
  id: string;
  title: string;
  price: number;
  permalink: string;
  thumbnail: string;
  affiliate_link: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const results = await getProducts("Iphone");
        setProducts(results);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false); // Também interrompa o carregamento em caso de erro
      }
    };

    fetchProducts();
  }, []);

  const form = useForm<FormData>({
    defaultValues: {},
  });
  return (
    <main className="relative w-full flex min-h-screen flex-col items-center justify-start bg-[#f3f3f3]">
      <Search />
      {loading ? (
        <div className="fixed flex flex-col h-screen text-center items-center justify-center">
          <h4 className="">Carregando...</h4>
          <Loading size={50} color="#3498db" />
        </div>
      ) : (
        <>
          {/* 
          <section>
            {products.map((product) => (
              <div key={product.id}>
                <h1>{product.title}</h1>
                <p>{product.price}</p>
                <Image
                  width={100}
                  height={0}
                  src={product.thumbnail}
                  alt={product.title}
                />
                <a href={product.affiliate_link} target="_blank">
                  Comprar
                </a>
              </div>
            ))}
          </section>*/}
          <section className="w-full flex">
            {/*Filtrar os produtos */}
            <aside className="bg-white w-1/5">
              {/* Campo do formulário */}
              <Form {...form}>
                <form className="w-full flex flex-col gap-3 space-y-4 px-3">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="category" className="font-semibold text-lg">
                      Categoria
                    </Label>
                    <FormField
                      name="shirts"
                      render={({ field }) => (
                        <FormItem className="w-full flex items-center justify-start gap-3 !mt-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <Label className="!mt-0">Camisetas</Label>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="shoes"
                      render={({ field }) => (
                        <FormItem className="w-full flex items-center justify-start gap-3 !mt-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <Label className="!mt-0">Tenis</Label>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>
            </aside>
            <div></div>
          </section>
        </>
      )}
    </main>
  );
}
