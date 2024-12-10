'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

// Services
import getProducts from "@/api/mercadoLivreProducts";

// Components
import Search from "../components/Search/Search";

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

  useEffect(() => {
    const fetchProducts = async () => {
      const results = await getProducts("Iphone");
      setProducts(results);
    };

    fetchProducts();
  }, [products]);

  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between bg-[#f3f3f3]">
      <Search />
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
    </main>
  );
}
