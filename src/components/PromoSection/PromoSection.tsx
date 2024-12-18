import React, { useState, useEffect } from "react";

// Services
import getProducts from "@/api/mercadoLivreProducts";

// Components
import PromoProduct from "../ProductsComponent/PromoProduct";
import Loading from "../Loading/Loading";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../app/globals.css";

// import required modules
import { Navigation } from "swiper/modules";

type Product = {
  id: string;
  title: string;
  price: number;
  promoPrice?: number;
  permalink: string;
  thumbnail: string;
  affiliate_link: string;
};

function PromoSection() {
  const [promoProducts, setPromoProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromoProducts = async () => {
      try {
        setLoading(true);
        const results = await getProducts("Iphone");
        setPromoProducts(results.slice(0, 7)); // Como é teste, será mostrado os 7 primeiros produtos
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setLoading(false);
      }
    };

    fetchPromoProducts();
  }, []);

  return (
    <section className="w-full max-[480px]:px-2 max-[860px]:px-4 px-12">
      <div className="w-full flex flex-col items-start justify-center bg-[#f5f5f5] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.05)] border border-[#f2f2f2] pb-4">
        <h4 className="w-full flex items-center h-20 text-white text-3xl font-oswald bg-black px-3 uppercase tracking-[1px]">
          Promoções
        </h4>
        <>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              360: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1366: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="mySwiper w-full"
          >
            {loading ? (
              <div className="flex flex-col h-screen text-center items-center justify-center">
                <h4 className="">Carregando...</h4>
                <Loading size={50} color="#3498db" />
              </div>
            ) : (
              <>
                {promoProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <PromoProduct product={product} />
                  </SwiperSlide>
                ))}
              </>
            )}
          </Swiper>
        </>
      </div>
    </section>
  );
}

export default PromoSection;
