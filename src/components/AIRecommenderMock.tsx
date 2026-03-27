"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type Suggestion = {
  title: string;
  steps: string[];
  ingredients: string[];
};

function buildSuggestions(query: string): Suggestion {
  const q = query.toLowerCase().trim();

  const base: Suggestion = {
    title: "Sugerencia inteligente (demo)",
    steps: [
      "Verifica tiempos de cocción y mise en place.",
      "Ordena el flujo por tiempos: preparación -> cocción -> emplatado.",
      "Ajusta cantidades para que el ticket sea eficiente.",
    ],
    ingredients: ["Base", "Complementos", "Toques finales"],
  };

  const match = (keywords: string[]) => keywords.some((k) => q.includes(k));

  if (match(["pizza", "pepperoni"])) {
    return {
      title: "Pizza lista en flujo corto",
      steps: [
        "Descongela/dispón la base y precalienta horno a 220C.",
        "Arma en capas: salsa -> queso -> ingredientes.",
        "Hornea 10-12 min y termina con toque de especias.",
      ],
      ingredients: ["Masa para Pizza", "Salsa de Tomate", "Mozzarella", "Pepperoni", "Vegetales mixtos"],
    };
  }

  if (match(["taco", "tacos"])) {
    return {
      title: "Tacos con empaque eficiente",
      steps: [
        "Calienta tortillas en lotes para mantener temperatura.",
        "Saltea relleno y ajusta sal/condimentos al final.",
        "Arma rápido: relleno -> salsa -> topping fresco.",
      ],
      ingredients: ["Tortillas de maíz", "Carne molida estilo taco", "Frijoles refritos", "Salsa picante", "Vegetales mixtos"],
    };
  }

  if (match(["brownie", "postre", "chocolate"])) {
    return {
      title: "Brownie con textura perfecta",
      steps: [
        "Mezcla lo seco, luego integra ingredientes sin sobrebatir.",
        "Hornea el punto medio para corazón suave.",
        "Enfría para mejorar corte y presentación.",
      ],
      ingredients: ["Brownie de chocolate (base)", "Toque de cacao", "Fruta o nuez (opcional)"],
    };
  }

  if (match(["horchata", "jamaica", "agua fresca", "bebida"])) {
    return {
      title: "Bebidas con rotación rápida",
      steps: [
        "Enfría base y mantiene porciones listas.",
        "Filtra/ajusta dulzor al iniciar servicio.",
        "Sirve con hielo y etiqueta rotativa (fecha).",
      ],
      ingredients: ["Agua fresca base (jamaica u horchata)", "Hielo", "Fruta (opcional)"],
    };
  }

  return base;
}

export default function AIRecommenderMock() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Suggestion | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const suggestions = useMemo(() => buildSuggestions(query), [query]);

  async function generate() {
    const q = query.trim();
    if (!q) return;
    setIsGenerating(true);
    setActive(null);

    // Demo: simula generación
    await new Promise((r) => setTimeout(r, 950));
    setActive(suggestions);
    setIsGenerating(false);
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 backdrop-blur">
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-52 w-52 rounded-full bg-violet-400/10 blur-3xl" />

      <div className="relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-sky-100/70">IA culinaria</p>
            <h3 className="mt-2 text-xl font-bold text-sky-50 md:text-2xl">
              Métodos de preparación sugeridos
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-sky-100/60">
              Escribe un plato y VENDAPP te sugiere un flujo de preparación + alimentos para mantener una compra eficiente.
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 md:max-w-md">
            <label className="text-xs text-sky-100/60">¿Qué quieres preparar?</label>
            <div className="flex gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ej: pizza pepperoni, tacos, brownie..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-sky-50 placeholder:text-sky-100/35 outline-none focus:ring-2 focus:ring-sky-400/30"
              />
              <button
                onClick={generate}
                disabled={isGenerating}
                className="shrink-0 rounded-2xl bg-gradient-to-r from-sky-400/30 to-violet-400/30 px-4 py-3 text-sm font-semibold text-sky-50 ring-1 ring-white/10 disabled:opacity-60"
              >
                {isGenerating ? "Generando..." : "Analizar"}
              </button>
            </div>
            <p className="text-xs text-sky-100/45">
              Demo interactiva (marketing). No conecta a datos reales.
            </p>
          </div>
        </div>

        <motion.div
          className="mt-6 grid gap-3 md:grid-cols-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : 12 }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-xs font-semibold text-sky-100/70">Flujo sugerido</p>
            <h4 className="mt-1 text-base font-bold text-sky-50">{active?.title ?? ""}</h4>
            <ol className="mt-3 space-y-2">
              {(active?.steps ?? []).map((s, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-sky-100/70">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-400/15 text-xs font-bold text-sky-100/90 ring-1 ring-sky-200/20">
                    {idx + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-xs font-semibold text-sky-100/70">Alimentos a comprar</p>
            <h4 className="mt-1 text-base font-bold text-sky-50">Lista inteligente</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {(active?.ingredients ?? []).map((ing) => (
                <motion.span
                  key={ing}
                  className="rounded-full border border-sky-200/20 bg-sky-500/5 px-3 py-1 text-xs text-sky-100/75"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.15 }}
                >
                  {ing}
                </motion.span>
              ))}
            </div>
            <p className="mt-3 text-xs text-sky-100/45">
              VENDAPP prioriza cantidades para reducir tiempos entre pedidos.
            </p>
          </motion.div>
        </motion.div>

        {!active && !isGenerating ? (
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-sky-50">Ejemplo rápido</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Pizza pepperoni", "Tacos", "Brownie de chocolate", "Horchata"].map((t) => (
                <button
                  key={t}
                  onClick={() => setQuery(t)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-sky-100/75 hover:bg-white/10 transition-colors"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

