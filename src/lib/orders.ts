import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import type { OrderData } from "@/types";

export async function createOrder(order: OrderData): Promise<string> {
  const ref = await addDoc(collection(db, "ordenes"), order);
  return ref.id;
}
