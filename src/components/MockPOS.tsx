"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

function NeonTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/20 bg-sky-500/5 px-3 py-1 text-xs text-sky-100/90 shadow-[0_0_24px_rgba(56,189,248,0.18)]">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/90 shadow-[0_0_12px_rgba(56,189,248,0.55)]" />
      {children}
    </span>
  );
}

export default function MockPOS() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-2xl"
    >
      {/* Marco holografico */}
      <div className="absolute -inset-0.5 rounded-3xl bg-[conic-gradient(from_220deg,rgba(56,189,248,0.35),rgba(167,139,250,0.35),rgba(56,189,248,0.35))] opacity-30 blur-lg" />
      <div className="relative overflow-hidden rounded-3xl border border-sky-200/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-sky-500/15 ring-1 ring-sky-200/20 shadow-[0_0_30px_rgba(56,189,248,0.18)]" />
            <div>
              <p className="text-sm font-semibold text-sky-50">VENDAPP</p>
              <p className="text-xs text-sky-100/70">POS Inteligente</p>
            </div>
          </div>
          <NeonTag>Ventas inteligentes activas</NeonTag>
        </div>

        <div className="grid grid-cols-12 gap-0">
          {/* Panel productos */}
          <div className="col-span-7 border-r border-white/10 p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold tracking-wide text-sky-100/80">Catálogo sugerido</p>
              <p className="text-[11px] text-sky-100/60">Autocompletar</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { title: "Pizza", price: "$199" },
                { title: "Tacos", price: "$99" },
                { title: "Bebida", price: "$49" },
                { title: "Postre", price: "$79" },
              ].map((it, idx) => (
                <motion.button
                  key={it.title}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left shadow-[0_0_18px_rgba(0,0,0,0.25)]"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-sky-50">{it.title}</p>
                    <span className="text-[11px] text-sky-100/70">{it.price}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-sky-100/55">Sugerido para aumentar ticket</p>
                </motion.button>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-sky-500/5 p-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-sky-100/80">Auto-combos</p>
                <p className="text-[11px] text-sky-100/60">IA</p>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Combo 2x1", "Bebida + Postre", "Descuento futuro"].map((t, idx) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    className="rounded-full border border-sky-200/20 bg-sky-500/5 px-2.5 py-1 text-[11px] text-sky-100/75"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Panel ticket */}
          <div className="col-span-5 p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold tracking-wide text-sky-100/80">Ticket</p>
              <p className="text-[11px] text-sky-100/60">Tiempo real</p>
            </div>

            <div className="mt-4 space-y-3">
              {[
                { name: "Pizza Pepperoni", qty: 1, subtotal: "$199" },
                { name: "Bebida Jamaica", qty: 2, subtotal: "$98" },
                { name: "Postre Brownie", qty: 1, subtotal: "$79" },
              ].map((row, idx) => (
                <motion.div
                  key={row.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="flex items-start justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                >
                  <div>
                    <p className="text-[12px] font-semibold text-sky-50">{row.name}</p>
                    <p className="text-[11px] text-sky-100/60">Cantidad: {row.qty}</p>
                  </div>
                  <p className="text-sm font-semibold text-sky-100/90">{row.subtotal}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/7 to-white/3 p-4">
              <div className="flex items-center justify-between text-xs text-sky-100/70">
                <span>Subtotal</span>
                <span>$376</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm font-semibold text-sky-50">
                <span>Total</span>
                <span className="text-lg">$453</span>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-xl bg-sky-400/15 px-3 py-2 text-sm font-semibold text-sky-100 ring-1 ring-sky-200/25">
                  Cobrar
                </button>
                <button className="w-12 rounded-xl bg-violet-400/15 ring-1 ring-violet-200/25">...</button>
              </div>
            </div>

            <p className="mt-3 text-[11px] leading-relaxed text-sky-100/55">
              Recomendaciones adaptadas al inventario y al patrón de compra del cliente.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

