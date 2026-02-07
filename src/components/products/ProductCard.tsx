import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/item/${product.id}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-[3/4] overflow-hidden bg-gray-50">
          <Image
            src={product.imagen}
            alt={product.nombre}
            width={400}
            height={533}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider">{product.categoria}</p>
          <h3 className="font-playfair text-lg mt-1 text-gray-900">
            {product.nombre}
          </h3>
          <p className="text-gray-900 font-semibold mt-2">${product.precio.toLocaleString("es-AR")}</p>
        </div>
      </div>
    </Link>
  );
}
