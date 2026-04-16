"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HoloBackground from "@/components/HoloBackground";
import MockPOS from "@/components/MockPOS";
import AIRecommenderMock from "@/components/AIRecommenderMock";
import ContactSection from "@/components/ContactSection";
import type { ReactNode } from "react";

function Logo() {
  return (
    <div className="flex items-center gap-8">
      <div className="relative h-10 w-10 overflow-visible">
        <Image
          src="/op1%20(1).png"
          alt="Logo de VENDAPP"
          fill
          sizes="112px"
          className="-translate-x-3 scale-[2.8] object-contain"
          priority
        />
      </div>
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
  const whatsappHref =
    "https://wa.me/527226183651?text=Hola%20VENDAPP%2C%20quiero%20solicitar%20una%20demo%20del%20Punto%20de%20Venta%20inteligente.";
  const contactEmail = "vendappsoftw@gmail.com";
  const mailHref = `mailto:${contactEmail}?subject=Solicitud%20de%20demo%20VENDAPP`;
  const phoneDisplay = "+52 722 618 3651";
  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/vendappemprem?igsh=MXMwd3hxOGNhZGN0Yg==",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/Vendaap/61573341094706/?rdid=z64RgC4MPyK7KBJT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18TLLxkBdR%2F",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@vendapp2",
    },
    {
      label: "X",
      href: "https://x.com/VendApp0",
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@vendapp-g9z?si=lZxfDfgsYpoRusGQ",
    },
  ] as const;

  return (
    <div className="relative min-h-screen">
      <HoloBackground />

      <header className="sticky top-0 z-20 border-b border-white/5 bg-black/30 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex">
            <NavLink href="#conocenos">Conócenos</NavLink>
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

        {/* Conócenos */}
        <section id="conocenos" className="scroll-mt-24 pt-16 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold tracking-widest text-sky-100/70">Conócenos</p>
            <h2 className="mt-2 text-2xl font-bold text-sky-50 md:text-3xl">Sobre nosotros</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8"
          >
            <h3 className="text-xl font-extrabold text-sky-50">VENDAPP</h3>
            <p className="mt-4 text-sm leading-relaxed text-sky-100/65">
              VENDAPP es una empresa virtual dedicada al desarrollo y comercialización de sistemas de punto de venta para el sector de la alimentación.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-sky-100/65">
              La empresa ofrece herramientas digitales innovadoras que optimizan los procesos operativos, mejoran la atención al cliente y facilitan la toma de decisiones mediante informes y análisis de datos en tiempo real.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(167,139,250,0.04))] p-6 backdrop-blur"
            >
              <p className="text-xs font-semibold tracking-widest text-sky-100/70">Visión</p>
              <p className="mt-3 text-sm leading-relaxed text-sky-100/70">
                Ser una empresa reconocida por ofrecer soluciones tecnológicas innovadoras para el sector de la alimentación, ayudando a las empresas a modernizar su gestión, ampliar sus servicios y mejorar la atención al cliente mediante herramientas digitales como los asistentes virtuales.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-xs font-semibold tracking-widest text-sky-100/70">Misión</p>
              <p className="mt-3 text-sm leading-relaxed text-sky-100/70">
                Desarrollar soluciones de software eficientes para la gestión y administración de ventas minoristas y mayoristas en el sector de la alimentación, facilitando el control de inventario, la gestión de ventas y el servicio al cliente mediante herramientas tecnológicas innovadoras.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8"
          >
            <p className="text-xs font-semibold tracking-widest text-sky-100/70">Objetivos</p>
            <p className="mt-2 text-sm font-bold text-sky-50">Objetivo general</p>
            <p className="mt-3 text-sm leading-relaxed text-sky-100/65">
              Desarrollar e implementar software especializado que optimice la gestión administrativa y las ventas en negocios de alimentación, mejorando la eficiencia operativa y el servicio al cliente.
            </p>
            <p className="mt-6 text-sm font-bold text-sky-50">Objetivos específicos</p>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-sky-100/65">
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400/15 text-xs font-bold text-sky-100 ring-1 ring-sky-200/20">
                  1
                </span>
                <span>Diseñar sistemas de software que faciliten el control de inventario, ventas y compras en supermercados.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400/15 text-xs font-bold text-sky-100 ring-1 ring-sky-200/20">
                  2
                </span>
                <span>Implementar herramientas digitales que ayuden a mejorar el servicio al cliente, como los asistentes virtuales.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400/15 text-xs font-bold text-sky-100 ring-1 ring-sky-200/20">
                  3
                </span>
                <span>Desarrollar soluciones tecnológicas que permitan la gestión de las ventas minoristas y mayoristas.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400/15 text-xs font-bold text-sky-100 ring-1 ring-sky-200/20">
                  4
                </span>
                <span>Facilitar la toma de decisiones mediante informes y análisis de información empresarial.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400/15 text-xs font-bold text-sky-100 ring-1 ring-sky-200/20">
                  5
                </span>
                <span>Contribuir a la modernización y al crecimiento de las empresas del sector de la alimentación mediante el uso de la tecnología.</span>
              </li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mt-12"
          >
            <p className="text-xs font-semibold tracking-widest text-sky-100/70">Una plataforma, tres ventajas</p>
            <h3 className="mt-2 text-xl font-bold text-sky-50 md:text-2xl">
              Diseñada para comercios que quieren vender más, con menos fricción y experiencias memorables.
            </h3>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "POS y tienda web unificados",
                  desc: "Tu negocio en mostrador y en línea con el mismo inventario, precios y pedidos en tiempo real.",
                },
                {
                  title: "Carrito que optimiza tu compra",
                  desc: "Los clientes compran desde casa; el carrito organiza productos para una compra más rápida y eficiente.",
                },
                {
                  title: "IA para cocinar y planificar",
                  desc: "Recetas paso a paso, métodos de preparación y sugerencias de platos según lo que quieran cocinar.",
                },
              ].map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <h4 className="text-base font-bold text-sky-50">{card.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-sky-100/60">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mt-12 rounded-3xl border border-sky-200/15 bg-[linear-gradient(180deg,rgba(56,189,248,0.10),rgba(167,139,250,0.05))] p-6 backdrop-blur md:p-8"
          >
            <p className="text-xs font-semibold tracking-widest text-sky-100/70">Inteligencia en la cocina</p>
            <h3 className="mt-2 text-xl font-bold text-sky-50 md:text-2xl">IA que habla el idioma de tu cocina</h3>
            <p className="mt-4 text-sm leading-relaxed text-sky-100/65">
              Los clientes descubren qué pueden cocinar con lo que encuentran en tu tienda: métodos de preparación, sustitutos útiles y recetas alineadas con el carrito para una compra enfocada.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-sky-100/70">
              {[
                "Guía de pasos para cada plato",
                "Ideas según ingredientes disponibles",
                "Menos dudas, más conversión",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-200 ring-1 ring-emerald-200/25">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h4 className="text-lg font-bold text-sky-50">Receta con lo que ya agregué al carrito</h4>
              <p className="mt-2 text-sm text-sky-100/60">Síntesis de pasos y tiempos estimados.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h4 className="text-lg font-bold text-sky-50">Platos vegetarianos con tus productos</h4>
              <p className="mt-2 text-sm text-sky-100/60">Sugerencias filtradas por categoría.</p>
            </motion.div>
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

        <ContactSection
          whatsappHref={whatsappHref}
          mailHref={mailHref}
          contactEmail={contactEmail}
          phoneDisplay={phoneDisplay}
          socialLinks={socialLinks}
        />
      </main>
    </div>
  );
}
