import Link from "next/link";
import { CartIcon } from "@/components/ui/icons";

export function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <CartIcon className="w-16 h-16 text-gray-300 mb-4" />
      <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
      <p className="text-gray-500 mb-6">Add some products to start shopping.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        Browse products
      </Link>
    </div>
  );
}
