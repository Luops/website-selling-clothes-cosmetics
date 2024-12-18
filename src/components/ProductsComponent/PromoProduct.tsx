"use client";
import Link from "next/link";
import Image from "next/image";

// Components

type Product = {
  id: string;
  title: string;
  price: number;
  promoPrice?: number;
  permalink: string;
  thumbnail: string;
  affiliate_link: string;
};

function PromoProduct({ product }: { product: Product }) {
  return (
    <Link
      href={product.permalink}
      target="_blank"
      rel="noopener noreferrer"
      key={product.id}
      className="flex flex-col justify-evenly items-start max-[813px]:w-[100%] w-[250px] max-[1440px]:h-[322px] h-[360px] p-2 font-oswald max-[360px]:text-center text-start"
    >
      <div>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={100}
          height={0}
          className="w-full max-[1440px]:h-48 h-56 object-contain"
        />
        <h4 className="max-[480px]:text-sm text-md font-semibold text-gray-700 mt-2 line-clamp-2">
          {product.title}
        </h4>
      </div>
      <p className="w-full text-md text-black/85 font-semibold line-through max-[360px]:text-center text-start">
        R$ {product.price.toFixed(2).replace(".", ",")}
      </p>
      <p className="w-full text-2xl text-orange-500 font-semibold max-[360px]:text-center text-start">R$ 1000,00</p>
    </Link>
  );
}

export default PromoProduct;
