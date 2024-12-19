"use client";

// Services

// Components
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import PromoSection from "@/components/PromoSection/PromoSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import ProductSection from "@/components/ProductSection/ProductSection";

export default function Home() {
  return (
    <main className="relative w-full flex min-h-screen flex-col items-center justify-start gap-10">
      <FeaturedSection />
      <PromoSection />
      <ProductSection />
      <ContactSection />
    </main>
  );
}
