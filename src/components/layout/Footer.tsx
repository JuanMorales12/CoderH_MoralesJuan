import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <span className="font-playfair text-2xl font-bold text-white tracking-tight">GZ</span>
            <span className="ml-2 text-xs text-gray-500 uppercase tracking-widest">Indumentaria</span>
            <p className="mt-3 text-sm text-gray-400">
              Ropa de calidad a precios accesibles.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contacto</h4>
            <p className="text-sm">Calle Rivadavia 1326</p>
            <p className="text-sm">Buenos Aires, Argentina</p>
            <p className="text-sm mt-2">+54 11 6885-6953</p>
          </div>

          {/* Medios de pago */}
          <div>
            <h4 className="text-white font-semibold mb-3">Medios de Pago</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-800 rounded text-xs font-medium">Visa</span>
              <span className="px-3 py-1 bg-gray-800 rounded text-xs font-medium">Banelco</span>
              <span className="px-3 py-1 bg-gray-800 rounded text-xs font-medium">Naranja</span>
            </div>
          </div>

          {/* Redes */}
          <div>
            <h4 className="text-white font-semibold mb-3">Redes</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Indumentaria GZ. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
