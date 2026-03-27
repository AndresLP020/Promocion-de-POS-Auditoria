"use client";

import { motion } from "framer-motion";
import HoloBackground from "@/components/HoloBackground";
import MockPOS from "@/components/MockPOS";
import AIRecommenderMock from "@/components/AIRecommenderMock";
import type { ReactNode } from "react";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-2xl bg-[linear-gradient(180deg,rgba(56,189,248,0.30),rgba(167,139,250,0.22))] ring-1 ring-white/10 shadow-[0_0_36px_rgba(56,189,248,0.22)]" />
      <div className="leading-tight">
        <p className="text-sm font-bold tracking-wide text-sky-50">VENDAPP</p>
        <p className="text-[11px] text-sky-100/60">Punto de venta con IA</p>
      </div>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="rounded-full px-3 py-2 text-sm text-sky-100/70 transition-colors hover:text-sky-50 hover:bg-white/5"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const whatsappHref = "https://wa.me/5210000000000?text=Hola%20VENDAPP%2C%20quiero%20solicitar%20una%20demo%20del%20Punto%20de%20Venta%20inteligente.";
  const mailHref = "mailto:ventas@vendapp.com?subject=Solicitud%20de%20demo%20VENDAPP";

  return (
    <div className="relative min-h-screen">
      <HoloBackground />

      <header className="sticky top-0 z-20 border-b border-white/5 bg-black/30 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex">
            <NavLink href="#funciona">Funciona</NavLink>
            <NavLink href="#beneficios">Beneficios</NavLink>
            <NavLink href="#ia">IA</NavLink>
            <NavLink href="#precios">Precios</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={mailHref}
              className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-sky-50 transition-colors hover:bg-white/10 md:inline-flex"
            >
              Email
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-sky-400/30 to-violet-400/30 px-4 py-2 text-sm font-semibold text-sky-50 ring-1 ring-white/10 shadow-[0_0_34px_rgba(56,189,248,0.18)] transition-transform hover:scale-[1.02]"
            >
              Solicitar demo
            </a>
          </div>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-6xl px-4">
        {/* Hero */}
        <section className="relative pt-16 md:pt-24">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-sky-100/80 shadow-[0_0_26px_rgba(56,189,248,0.10)]">
                  <span className="h-2 w-2 rounded-full bg-cyan-300/90 shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
                  Software futurista para ventas inteligentes
                </div>

                <h1 className="mt-5 text-4xl font-black leading-[1.05] text-sky-50 md:text-6xl">
                  VENDAPP
                  <span className="block bg-gradient-to-r from-sky-300 via-violet-300 to-sky-200 bg-clip-text text-transparent">
                    Punto de Venta con IA
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-sky-100/65 md:text-lg">
                  Más velocidad en la atención, sugerencias inteligentes para elevar tu ticket y una experiencia moderna que tus clientes van a notar.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-400/35 to-violet-400/35 px-6 py-3 text-sm font-bold text-sky-50 ring-1 ring-white/10 shadow-[0_0_42px_rgba(56,189,248,0.16)] transition-transform hover:scale-[1.02]"
                  >
                    Solicitar demo
                  </a>
                  <a
                    href="#funciona"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-sky-50 transition-colors hover:bg-white/10"
                  >
                    Ver cómo funciona
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
                  {[
                    { k: "tiempos", v: "menores" },
                    { k: "ventas", v: "mejoradas" },
                    { k: "clientes", v: "satisfechos" },
                  ].map((s, idx) => (
                    <motion.div
                      key={s.k}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.12 }}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <p className="text-xs text-sky-100/60">{s.k}</p>
                      <p className="text-lg font-extrabold text-sky-50">{s.v}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
                  className="rounded-3xl"
                >
                  <MockPOS />
                </motion.div>
                <div className="pointer-events-none absolute -bottom-8 -left-10 h-28 w-28 rounded-full bg-sky-500/10 blur-xl" />
                <div className="pointer-events-none absolute -top-10 -right-12 h-28 w-28 rounded-full bg-violet-500/10 blur-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Funciona */}
        <section id="funciona" className="scroll-mt-24 pt-16 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold tracking-widest text-sky-100/70">Flujo VENDAPP</p>
            <h2 className="mt-2 text-2xl font-bold text-sky-50 md:text-3xl">
              Tus ventas, en modo inteligente
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sky-100/60">
              Diseñado para ofrecer una experiencia futurista: rapidez en caja, sugerencias para elevar ticket y una compra eficiente.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "1. Atendemos más rápido",
                desc: "Interfaz clara y sugerencias instantáneas para reducir tiempos entre pedidos.",
                badge: "Velocidad",
              },
              {
                title: "2. Ventas inteligentes",
                desc: "Recomendaciones que elevan el ticket con base en patrones de compra.",
                badge: "IA",
              },
              {
                title: "3. Compra eficiente",
                desc: "Carritos y listas pensadas para que todo esté listo en menos pasos.",
                badge: "Optimización",
              },
            ].map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-sky-100/70">{c.badge}</p>
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-300 to-violet-300 shadow-[0_0_22px_rgba(56,189,248,0.25)]" />
                </div>
                <h3 className="mt-3 text-lg font-bold text-sky-50">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sky-100/60">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="scroll-mt-24 pt-16 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold tracking-widest text-sky-100/70">Beneficios</p>
            <h2 className="mt-2 text-2xl font-bold text-sky-50 md:text-3xl">Lo que notarás desde el primer día</h2>
          </motion.div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {[
              {
                title: "Caja con flujo inteligente",
                desc: "Sugerencias y atajos para hacer la operación más fluida.",
              },
              {
                title: "Recomendaciones que elevan el ticket",
                desc: "Propuestas de combos y productos complementarios.",
              },
              {
                title: "Experiencia futurista",
                desc: "Diseño moderno con animaciones y sensación tecnológica.",
              },
              {
                title: "Lista de alimentos y preparación",
                desc: "Ayuda a decidir métodos y qué comprar para preparar mejor.",
              },
            ].map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-11 w-11 rounded-2xl bg-[linear-gradient(180deg,rgba(56,189,248,0.22),rgba(167,139,250,0.18))] ring-1 ring-white/10" />
                  <div>
                    <h3 className="text-lg font-bold text-sky-50">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-sky-100/60">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* IA */}
        <section id="ia" className="scroll-mt-24 pt-16 md:pt-20">
          <AIRecommenderMock />
        </section>

        {/* Precios */}
        <section id="precios" className="scroll-mt-24 pt-16 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold tracking-widest text-sky-100/70">Precios</p>
            <h2 className="mt-2 text-2xl font-bold text-sky-50 md:text-3xl">Empieza con una demo</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sky-100/60">
              El precio depende del tamaño de tu negocio y del flujo de operación. Solicita una demo y te asesoramos.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Básico",
                price: "Ideal para iniciar",
                perks: ["Instalación y capacitación", "Interfaz POS inteligente", "Soporte inicial"],
              },
              {
                name: "Pro",
                price: "Recomendado",
                perks: ["Ventas inteligentes con sugerencias", "Flujo más rápido de atención", "Optimización operativa"],
                featured: true,
              },
              {
                name: "Enterprise",
                price: "Escala tu operación",
                perks: ["Personalización de flujos", "Soporte extendido", "Acompañamiento continuo"],
              },
            ].map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className={[
                  "rounded-3xl border p-6 backdrop-blur",
                  p.featured ? "border-sky-200/20 bg-[linear-gradient(180deg,rgba(56,189,248,0.12),rgba(167,139,250,0.06))]" : "border-white/10 bg-white/5",
                ].join(" ")}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold text-sky-100/70">{p.name}</p>
                    <p className="mt-2 text-xl font-extrabold text-sky-50">{p.price}</p>
                  </div>
                  {p.featured ? (
                    <span className="rounded-full bg-sky-400/15 px-3 py-1 text-xs font-semibold text-sky-100/90 ring-1 ring-sky-200/25">
                      Más elegido
                    </span>
                  ) : null}
                </div>
                <div className="mt-4 space-y-2">
                  {p.perks.map((perk) => (
                    <div key={perk} className="flex items-start gap-2 text-sm text-sky-100/65">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300/85 shadow-[0_0_14px_rgba(56,189,248,0.45)]" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    "mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold ring-1 transition-transform hover:scale-[1.02]",
                    p.featured
                      ? "bg-gradient-to-r from-sky-400/35 to-violet-400/35 text-sky-50 ring-white/10 shadow-[0_0_40px_rgba(56,189,248,0.14)]"
                      : "bg-white/5 text-sky-50 ring-white/10 hover:bg-white/10",
                  ].join(" ")}
                >
                  Solicitar demo
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 pb-16 pt-16 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur relative overflow-hidden"
          >
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <p className="text-xs font-semibold tracking-widest text-sky-100/70">Contacto</p>
                <h2 className="mt-2 text-2xl font-bold text-sky-50 md:text-3xl">
                  ¿Listo para vender más rápido?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-sky-100/60">
                  Solicita tu demo de VENDAPP y te mostramos cómo se integra a tu operación para acelerar ventas y mejorar sugerencias.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-400/35 to-violet-400/35 px-6 py-3 text-sm font-bold text-sky-50 ring-1 ring-white/10 shadow-[0_0_42px_rgba(56,189,248,0.14)] transition-transform hover:scale-[1.02]"
                  >
                    WhatsApp (demo)
                  </a>
                  <a
                    href={mailHref}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-sky-50 transition-colors hover:bg-white/10"
                  >
                    Enviar correo
                  </a>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-3xl border border-white/10 bg-black/15 p-5">
                  <p className="text-sm font-bold text-sky-50">Checklist rápido</p>
                  <div className="mt-3 space-y-2">
                    {[
                      "Operación actual (turnos/picos)",
                      "Tipo de negocio (cocina/cafetería/etc.)",
                      "Objetivo (ticket/tiempo/inventario)",
                      "Horarios y volumen de pedidos",
                    ].map((t) => (
                      <div key={t} className="flex items-start gap-2 text-sm text-sky-100/65">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300/85 shadow-[0_0_14px_rgba(56,189,248,0.45)]" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-sky-100/45">
                    Responde por WhatsApp o correo y te proponemos la mejor configuración.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 text-center text-xs text-sky-100/45">
            © {new Date().getFullYear()} VENDAPP. Futurista, rápido y listo para vender.
          </div>
        </section>
      </main>
    </div>
  );
}
