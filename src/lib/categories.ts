import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import type { Category } from "@/types";

export async function getAllCategories(): Promise<Category[]> {
  const snapshot = await getDocs(collection(db, "categorias"));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Category));
}
