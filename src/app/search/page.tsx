"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

// Services
import getProducts from "@/api/mercadoLivreProducts";

// Components
import RatingStars from "@/components/RatingStars/RatingStars";
import Search from "@/components/Search/Search";
import Loading from "@/components/Loading/Loading";

type Product = {
  id: string;
  title: string;
  price: number;
  permalink: string;
  thumbnail: string;
  affiliate_link: string;
};

const SearchResults = () => {
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
    return (
      <main className="w-full flex min-h-screen flex-col items-center justify-start">
        <Search />
        <div className="flex flex-col items-center justify-center">
          <h4 className="mt-10">Carregando resultados...</h4>
          <Loading size={50} color="#3498db" />
        </div>
      </main>
    );
  }

  if (products.length === 0) {
    return (
      <main className="w-full flex min-h-screen flex-col items-center justify-start">
        <Search />
        <p className="mt-10">
          Nenhum produto encontrado para &quot;{query}&quot;
        </p>
      </main>
    );
  }

  return (
    <main className="">
      <Search />
      <div className="max-[480px]:px-2 max-[480px]:p-0 max-[1024px]:p-4 p-6 px-10">
        <h3 className="w-full text-2xl font-bold min-[1024px]:pl-16">Resultados para: {query}</h3>
        <div className="flex items-center justify-center max-[813px]:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 min-[814px]:flex-wrap max-[480px]:gap-2 gap-4">
          {products.map((product) => (
            <Link
              href={product.permalink}
              target="_blank"
              rel="noopener noreferrer"
              key={product.id}
              className="max-[813px]:w-[100%] w-[250px] max-[480px]:h-[250px] h-[322px] border p-4 rounded bg-white"
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={100}
                height={0}
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
};

const SearchPage = () => {
  return (
    <Suspense fallback={<Loading size={50} color="#3498db" />}>
      <SearchResults />
    </Suspense>
  );
};

export default SearchPage;
