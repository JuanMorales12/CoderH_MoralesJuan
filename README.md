# Indumentaria GZ - E-Commerce

E-commerce de ropa con carrito de compras, filtrado por categorias, checkout con generacion de ordenes y diseño responsive.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Firebase** Firestore — productos, categorias, ordenes
- **Tailwind CSS** — diseño responsive mobile-first
- **next/font** — Inter + Playfair Display

## Features

- Catalogo de productos con grid responsivo (1-4 columnas)
- Filtrado por categorias cargadas dinamicamente desde Firestore
- Detalle de producto con selector de cantidad y control de stock
- Carrito de compras con dropdown y pagina completa
- Checkout con validacion de formulario y creacion de ordenes en Firestore
- Navegacion mobile con menu hamburguesa
- Hero banner full-width con overlay

## Project Structure

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Home — hero + grid de productos
│   ├── category/[id]/      # Productos filtrados por categoria
│   ├── item/[idProduct]/   # Detalle de producto
│   ├── cart/               # Carrito completo
│   ├── checkout/           # Formulario + resumen de orden
│   └── about/              # Sobre nosotros
├── components/
│   ├── layout/             # Header, Footer, NavLinks
│   ├── cart/               # CartWidget, CartItem, EmptyCart
│   ├── products/           # ProductCard, ProductGrid, ProductDetail, ItemCount
│   ├── checkout/           # CheckoutForm, OrderSummary
│   └── ui/                 # SVG icons
├── lib/                    # Firebase init + queries (products, categories, orders)
├── context/                # CartContext (React Context)
└── types/                  # TypeScript interfaces
```

## Quick Start

```bash
git clone https://github.com/JuanMorales12/CoderH_MoralesJuan.git
cd CoderH_MoralesJuan
npm install
cp .env.local.example .env.local   # agregar credenciales de Firebase
npm run dev
```

## License

MIT
