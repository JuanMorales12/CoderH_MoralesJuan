export interface Product {
  id: string;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  stock: number;
}

export interface Category {
  id: string;
  categoria: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

export interface Buyer {
  name: string;
  email: string;
  phone: string;
}

export interface OrderData {
  buyer: Buyer;
  items: { id: string; name: string; price: number }[];
  total: number;
}
