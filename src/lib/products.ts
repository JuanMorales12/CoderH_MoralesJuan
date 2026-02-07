import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "./firebase";
import { getLocalImage } from "./images";
import type { Product } from "@/types";

function toProduct(id: string, data: Record<string, unknown>): Product {
  const p = { id, ...data } as Product;
  p.imagen = getLocalImage(p.imagen);
  return p;
}

export async function getAllProducts(): Promise<Product[]> {
  const snapshot = await getDocs(collection(db, "productos"));
  return snapshot.docs.map((d) => toProduct(d.id, d.data()));
}

export async function getProductsByCategory(categoryName: string): Promise<Product[]> {
  const q = query(collection(db, "productos"), where("categoria", "==", categoryName));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => toProduct(d.id, d.data()));
}

export async function getProductById(id: string): Promise<Product | null> {
  const ref = doc(db, "productos", id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) return null;
  return toProduct(snapshot.id, snapshot.data());
}
