'use client';

import { useRef, useState } from "react";
import type { Buyer } from "@/types";

interface Props {
  onSubmit: (buyer: Buyer) => void;
  loading: boolean;
}

export function CheckoutForm({ onSubmit, loading }: Props) {
  const [form, setForm] = useState<Buyer>({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");
  const confirmEmailRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmEmailRef.current?.value !== form.email) {
      setError("Los emails no coinciden");
      confirmEmailRef.current?.focus();
      return;
    }
    setError("");
    onSubmit(form);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <h2 className="font-playfair text-2xl mb-6">Datos de compra</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            required
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
            placeholder="Tu nombre completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="confirm-email" className="block text-sm font-medium text-gray-700 mb-1">
            Confirmar Email
          </label>
          <input
            type="email"
            id="confirm-email"
            required
            ref={confirmEmailRef}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
            placeholder="Confirma tu email"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefono
          </label>
          <input
            type="tel"
            id="phone"
            required
            pattern="[0-9]{10}"
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
            placeholder="10 digitos"
          />
          <p className="text-xs text-gray-400 mt-1">Ingresa un numero de 10 digitos.</p>
        </div>

        {error && (
          <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Procesando...
            </span>
          ) : (
            "Confirmar compra"
          )}
        </button>
      </form>
    </div>
  );
}
