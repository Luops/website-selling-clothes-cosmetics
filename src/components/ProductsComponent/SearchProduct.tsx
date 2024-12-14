"use client";
import Link from "next/link";
import Image from "next/image";

// Components
import RatingStars from "@/components/RatingStars/RatingStars";

type Product = {
  id: string;
  title: string;
  price: number;
  permalink: string;
  thumbnail: string;
  affiliate_link: string;
};

function SearchProduct({ product }: { product: Product }) {
  return (
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
  );
}

export default SearchProduct;
