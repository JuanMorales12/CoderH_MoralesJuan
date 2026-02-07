import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="font-playfair text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-gray-500 text-lg mb-8">La pagina que buscas no existe.</p>
      <Link href="/" className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
        Volver al inicio
      </Link>
    </div>
  );
}
