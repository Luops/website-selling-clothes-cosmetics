"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

// Services
import getProducts from "@/api/mercadoLivreProducts";

// Components
import RatingStars from "@/components/RatingStars/RatingStars";
import Search from "@/components/Search/Search";

// Icons

type Product = {
  id: string;
  title: string;
  price: number;
  permalink: string;
  thumbnail: string;
  affiliate_link: string;
};

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!query) {
        setLoading(false);
        return;
      }

      setLoading(true);
      const results = await getProducts(query);
      setProducts(results);
      setLoading(false);
    };

    fetchProducts();
  }, [query]);

  if (loading) {
    return <p>Carregando resultados...</p>;
  }

  if (products.length === 0) {
    return <p>Nenhum produto encontrado para "{query}"</p>;
  }

  return (
    <main className="">
      <Search />
      <div className="max-[480px]:px-2 p-4">
        <h3 className="text-2xl font-bold">Resultados para: {query}</h3>
        <div className="flex items-center justify-center max-[813px]:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols- min-[814px]:flex-wrap max-[480px]:gap-2 gap-4">
          {products.map((product) => (
            <Link
              href={product.permalink}
              target="_blank"
              rel="noopener noreferrer"
              key={product.id}
              className="max-[813px]:w-[100%] w-[250px] max-[480px]:h-[250px] max-[813px]:h-[322px] border p-4 rounded bg-white"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full max-[480px]:h-32 h-48 object-contain"
              />
              <h4 className="max-[480px]:text-sm text-md font-semibold text-gray-700 mt-2 line-clamp-2">
                {product.title}
              </h4>
              <p className="text-sm text-black">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </p>
              <RatingStars rating={2.5} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default SearchResults;
