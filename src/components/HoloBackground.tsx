"use client";

import { motion } from "framer-motion";

export default function HoloBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Cubierta de gradiente base */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(900px_circle_at_70%_30%,rgba(167,139,250,0.18),transparent_50%),radial-gradient(700px_circle_at_50%_80%,rgba(34,211,238,0.10),transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.65))]" />

      {/* Grid holografico */}
      <motion.div
        className="absolute left-1/2 top-[-30%] h-[140%] w-[120%] -translate-x-1/2 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.18) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          transformPerspective: "800px",
          filter: "drop-shadow(0 0 12px rgba(56,189,248,0.25))",
        }}
        initial={{ rotateX: 70, translateY: 40, opacity: 0.2 }}
        animate={{ rotateX: 70, translateY: 0, opacity: 0.35 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Brillos */}
      <motion.div
        className="absolute -top-40 left-[10%] h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl"
        initial={{ x: 0, y: 0, opacity: 0.3 }}
        animate={{ x: 120, y: 80, opacity: 0.55 }}
        transition={{ duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[20%] right-[8%] h-96 w-96 rounded-full bg-violet-300/10 blur-3xl"
        initial={{ x: 0, y: 0, opacity: 0.25 }}
        animate={{ x: -120, y: 60, opacity: 0.5 }}
        transition={{ duration: 11, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      {/* Particulas (fake) */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        {Array.from({ length: 26 }).map((_, i) => {
          const left = (i * 37) % 100;
          const top = (i * 53) % 100;
          const delay = (i % 7) * 0.18;
          const size = 2 + ((i * 13) % 3);
          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-sky-300/60"
              style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 24, opacity: [0, 0.75, 0] }}
              transition={{
                duration: 2.6 + (i % 5) * 0.25,
                delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

