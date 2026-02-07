'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/lib/products";
import { ProductDetail } from "@/components/products/ProductDetail";
import { ArrowLeftIcon } from "@/components/ui/icons";
import type { Product } from "@/types";

export default function ProductDetailPage() {
  const params = useParams();
  const idProduct = params.idProduct as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(idProduct)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [idProduct]);

  if (loading) {
    return (
      <div className="flex justify-center py-32">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-800 rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 text-lg">Product not found.</p>
        <Link href="/" className="text-brand-600 hover:underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gray-50">
          <Image
            src={product.imagen}
            alt={product.nombre}
            width={600}
            height={800}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <ProductDetail product={product} />
      </div>
    </section>
  );
}
