'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { getAllProducts } from "@/lib/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/banner1.jpg"
          alt="GZ Clothing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="font-playfair text-5xl md:text-7xl mb-4">
              GZ Clothing
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide">
              Quality clothing at affordable prices
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-playfair text-3xl text-center mb-12">
          Our Products
        </h2>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-800 rounded-full animate-spin" />
          </div>
        ) : products.length > 0 ? (
          <ProductGrid>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </section>
    </>
  );
}
