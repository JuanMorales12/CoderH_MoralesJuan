'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProductsByCategory } from "@/lib/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductCard } from "@/components/products/ProductCard";
import { ArrowLeftIcon } from "@/components/ui/icons";
import type { Product } from "@/types";

export default function CategoryPage() {
  const params = useParams();
  const id = decodeURIComponent(params.id as string);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory(id)
      .then(setProducts)
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Volver al inicio
      </Link>

      <h1 className="font-playfair text-3xl text-center mb-12 capitalize">{id}</h1>

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
        <p className="text-center text-gray-500">No se encontraron productos en esta categoria.</p>
      )}
    </section>
  );
}
