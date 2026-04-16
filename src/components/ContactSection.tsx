"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type SocialLink = { label: string; href: string };

type Props = {
  whatsappHref: string;
  mailHref: string;
  contactEmail: string;
  phoneDisplay: string;
  socialLinks: readonly SocialLink[];
};

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 6h16v12H4V6z" strokeLinejoin="round" />
      <path d="M4 7l8 6 8-6" strokeLinecap="round" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 00-2.12-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.58A3 3 0 00.5 6.2 31.7 31.7 0 000 12a31.7 31.7 0 00.5 5.8 3 3 0 002.12 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.58a3 3 0 002.12-2.12A31.7 31.7 0 0024 12a31.7 31.7 0 00-.5-5.8zM9.6 15.5v-7L15.8 12l-6.2 3.5z" />
    </svg>
  );
}

function IconArrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function socialIcon(label: string): ReactNode {
  const cls = "h-5 w-5";
  switch (label) {
    case "Instagram":
      return <IconInstagram className={cls} />;
    case "Facebook":
      return <IconFacebook className={cls} />;
    case "TikTok":
      return <IconTikTok className={cls} />;
    case "X":
      return <IconX className={cls} />;
    case "YouTube":
      return <IconYouTube className={cls} />;
    default:
      return null;
  }
}

function accentForSocial(label: string): string {
  switch (label) {
    case "Instagram":
      return "from-fuchsia-500/25 via-rose-500/15 to-amber-400/10";
    case "Facebook":
      return "from-blue-500/25 to-indigo-500/15";
    case "TikTok":
      return "from-cyan-400/20 to-fuchsia-500/15";
    case "X":
      return "from-zinc-300/15 to-sky-400/15";
    case "YouTube":
      return "from-red-500/25 to-rose-500/15";
    default:
      return "from-sky-500/20 to-violet-500/15";
  }
}

export default function ContactSection({
  whatsappHref,
  mailHref,
  contactEmail,
  phoneDisplay,
  socialLinks,
}: Props) {
  const checklist = [
    "Operación actual (turnos/picos)",
    "Tipo de negocio (cocina/cafetería/etc.)",
    "Objetivo (ticket/tiempo/inventario)",
    "Horarios y volumen de pedidos",
  ];

  return (
    <section id="contacto" className="scroll-mt-24 pb-16 pt-16 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_45%,rgba(167,139,250,0.06)_100%)] p-px shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_24px_80px_-20px_rgba(56,189,248,0.12)] backdrop-blur-xl md:rounded-[2.25rem]"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] md:rounded-[2.25rem]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
          <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-violet-500/12 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <div className="relative rounded-[calc(2rem-1px)] bg-[linear-gradient(180deg,rgba(5,3,13,0.55)_0%,rgba(5,3,13,0.35)_100%)] p-6 md:p-10 lg:p-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-100/90"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                </span>
                Canal directo
              </motion.span>
              <h2 className="mt-4 text-3xl font-black leading-tight text-sky-50 md:text-4xl lg:text-[2.75rem]">
                Hablemos de tu{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                  próximo POS
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-sky-100/65 md:text-base">
                Agenda una demo, cuéntanos tu operación y te mostramos cómo VENDAPP acelera ventas, ordena el carrito y potencia la experiencia con IA.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden shrink-0 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-right md:block"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-100/50">Respuesta</p>
              <p className="mt-1 text-sm font-bold text-sky-50">Prioridad demo</p>
              <p className="text-xs text-sky-100/55">WhatsApp · Correo · Redes</p>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-8 lg:col-span-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-100/55">Canales directos</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <motion.a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="group relative overflow-hidden rounded-2xl border border-emerald-400/25 bg-[linear-gradient(135deg,rgba(16,185,129,0.18)_0%,rgba(5,3,13,0.6)_55%)] p-5 shadow-[0_0_40px_-8px_rgba(16,185,129,0.35)]"
                  >
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="relative flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-100 ring-1 ring-emerald-300/30">
                        <IconWhatsApp className="h-6 w-6" />
                      </div>
                      <IconArrow className="h-5 w-5 text-emerald-200/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-100" />
                    </div>
                    <p className="relative mt-4 text-lg font-bold text-white">WhatsApp</p>
                    <p className="relative mt-1 font-mono text-sm text-emerald-100/90">{phoneDisplay}</p>
                    <p className="relative mt-3 text-xs text-emerald-100/60">Toca para abrir chat · Demo y cotización</p>
                  </motion.a>

                  <motion.a
                    href={mailHref}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="group relative overflow-hidden rounded-2xl border border-sky-300/20 bg-[linear-gradient(135deg,rgba(56,189,248,0.14)_0%,rgba(5,3,13,0.65)_50%)] p-5 shadow-[0_0_36px_-10px_rgba(56,189,248,0.3)]"
                  >
                    <div className="absolute -right-8 top-0 h-28 w-28 rounded-full bg-sky-400/15 blur-2xl" />
                    <div className="relative flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/20 text-sky-100 ring-1 ring-sky-200/25">
                        <IconMail className="h-6 w-6" />
                      </div>
                      <IconArrow className="h-5 w-5 text-sky-200/45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-100" />
                    </div>
                    <p className="relative mt-4 text-lg font-bold text-sky-50">Correo</p>
                    <p className="relative mt-1 break-all text-sm font-medium text-sky-100/85">{contactEmail}</p>
                    <p className="relative mt-3 text-xs text-sky-100/55">Asunto sugerido: solicitud de demo</p>
                  </motion.a>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-100/55">Redes sociales</p>
                <p className="mt-1 text-sm text-sky-100/50">Síguenos y conoce novedades del producto.</p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {socialLinks.map((s, idx) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.06 }}
                      whileHover={{ y: -2 }}
                      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${accentForSocial(s.label)} p-4 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.5)]`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/25 text-sky-50 ring-1 ring-white/10">
                          {socialIcon(s.label)}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold text-sky-50">{s.label}</p>
                          <p className="text-[10px] text-sky-100/50">Abrir perfil</p>
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-cyan-400 to-violet-400 transition-transform group-hover:scale-x-100" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-full overflow-hidden rounded-2xl border border-violet-300/15 bg-[linear-gradient(160deg,rgba(167,139,250,0.12)_0%,rgba(5,3,13,0.75)_40%)] p-6 shadow-[0_0_48px_-12px_rgba(167,139,250,0.25)]"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-violet-400/10" />
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-violet-200/80">Checklist</p>
                    <p className="mt-1 text-lg font-bold text-sky-50">Antes de escribirnos</p>
                  </div>
                  <span className="rounded-full bg-violet-400/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-violet-100 ring-1 ring-violet-200/25">
                    4 tips
                  </span>
                </div>

                <ul className="relative mt-6 space-y-0">
                  {checklist.map((t, i) => (
                    <li key={t} className="relative flex gap-4 pb-6 last:pb-0">
                      {i < checklist.length - 1 ? (
                        <div className="absolute left-[15px] top-8 bottom-0 w-px bg-gradient-to-b from-violet-400/40 to-transparent" aria-hidden />
                      ) : null}
                      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/25 text-xs font-black text-violet-100 ring-2 ring-violet-300/30">
                        {i + 1}
                      </div>
                      <p className="pt-1 text-sm leading-relaxed text-sky-100/70">{t}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-semibold text-sky-100/80">¿Listo?</p>
                  <p className="mt-1 text-sm text-sky-100/55">
                    Envíanos un mensaje con estos datos y armamos una propuesta clara para tu negocio.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col items-center gap-2 border-t border-white/5 pt-8 text-center"
      >
        <p className="text-xs text-sky-100/45">
          © {new Date().getFullYear()} VENDAPP · Punto de venta con ventas inteligentes
        </p>
        <p className="text-[11px] text-sky-100/35">Diseño futurista · Experiencia premium</p>
      </motion.footer>
    </section>
  );
}
