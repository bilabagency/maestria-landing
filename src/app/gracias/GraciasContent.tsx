"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Buildings,
  CaretDown,
  Certificate,
  CheckCircle,
  Clock,
  DownloadSimple,
  FilePdf,
  GraduationCap,
  MapPin,
  Scroll,
  User,
  WhatsappLogo,
} from "@phosphor-icons/react";

const PDF_HREF = "/programa-maestria-2026.pdf";
const WHATSAPP_HREF = "https://wa.me/543425551234";
const PHONE_HREF = "https://wa.me/5493424050099";

const curricular: Array<{ label: string; value: string }> = [
  { label: "Nivel", value: "Posgrado" },
  { label: "Tipo de maestría", value: "Profesional" },
  { label: "Título oficial", value: "Magíster (UNR)" },
  { label: "Modalidad", value: "Presencial — Santa Fe Capital" },
  { label: "Universidad responsable", value: "Universidad Nacional de Rosario" },
  { label: "Duración", value: "2 años · 720 horas" },
  { label: "Estructura", value: "3 áreas · 16 seminarios" },
  { label: "Reconocimiento", value: "CONEAU · Decreto 3029" },
];

const competencias: string[] = [
  "Investigación en sistemas y organizaciones educativas",
  "Formulación de políticas públicas en educación",
  "Gestión de instituciones de nivel inicial, medio y superior",
  "Coordinación de equipos docentes y de conducción",
  "Asesoramiento pedagógico dentro y fuera del aula",
  "Evaluación institucional y de programas educativos",
];

type Seminario = { nombre: string; tipo: "obligatorio" | "electivo" };
type Area = {
  index: string;
  titulo: string;
  descripcion: string;
  seminarios: Seminario[];
};

const plan: Area[] = [
  {
    index: "01",
    titulo: "Formación teórico-metodológica",
    descripcion: "Bases epistemológicas y producción académica.",
    seminarios: [
      { nombre: "Epistemología", tipo: "obligatorio" },
      { nombre: "Lectura y escritura académica", tipo: "obligatorio" },
      { nombre: "Teorías Curriculares", tipo: "obligatorio" },
    ],
  },
  {
    index: "02",
    titulo: "Formación disciplinar",
    descripcion:
      "Nueve seminarios obligatorios sobre gestión, política, evaluación y psicosociología, más cinco electivos que completa la UNR.",
    seminarios: [
      { nombre: "Análisis de las Instituciones Educativas", tipo: "obligatorio" },
      { nombre: "Políticas públicas y legislación", tipo: "obligatorio" },
      {
        nombre: "Políticas y administración de las instituciones educativas",
        tipo: "obligatorio",
      },
      {
        nombre: "Asesoramiento pedagógico de las organizaciones educativas",
        tipo: "obligatorio",
      },
      {
        nombre: "Evaluación de las organizaciones educativas",
        tipo: "obligatorio",
      },
      {
        nombre: "Administración de las organizaciones educativas",
        tipo: "obligatorio",
      },
      {
        nombre: "Psicosociología de las organizaciones educativas",
        tipo: "obligatorio",
      },
      {
        nombre: "Gestión y administración de las instituciones educativas",
        tipo: "obligatorio",
      },
      { nombre: "Sistemas educativos", tipo: "obligatorio" },
      { nombre: "Planificación estratégica", tipo: "electivo" },
      { nombre: "Sistemas tutoriales", tipo: "electivo" },
      {
        nombre: "Uso de TIC en las instituciones educativas",
        tipo: "electivo",
      },
      { nombre: "Mediación educativa", tipo: "electivo" },
      { nombre: "Educación no formal", tipo: "electivo" },
    ],
  },
  {
    index: "03",
    titulo: "Prácticas profesionales",
    descripcion:
      "Dos talleres donde diseñás e implementás el Proyecto de Intervención en tu propia institución.",
    seminarios: [
      { nombre: "Taller de Elaboración de Proyectos I", tipo: "obligatorio" },
      { nombre: "Taller de Elaboración de Proyectos II", tipo: "obligatorio" },
    ],
  },
];

const docentes: Array<{ rol: string; nombre: string; destacado?: boolean }> = [
  { rol: "Director", nombre: "Dr. Gerardo Kahan", destacado: true },
  { rol: "Docente", nombre: "Dr. Adolfo Stubrin" },
  { rol: "Docente", nombre: "Dra. Carolina Tramallino" },
  { rol: "Docente", nombre: "Dr. Félix Temporetti" },
  { rol: "Docente", nombre: "Dra. Patricia Mendez" },
  { rol: "Docente", nombre: "Dra. Mónica Yema" },
  { rol: "Docente", nombre: "Dr. Pedro Dabin" },
  { rol: "Docente", nombre: "Dra. Lila Puig" },
  { rol: "Docente", nombre: "Dra. Patricia Guzmán" },
  { rol: "Docente", nombre: "Mgr. Jorgelina Chale" },
  { rol: "Docente", nombre: "Mgr. Yanina Chale" },
  { rol: "Docente", nombre: "Mgr. Alberto Perozzi" },
  { rol: "Docente", nombre: "Dra. Marisa Zelaya" },
  { rol: "Docente", nombre: "Dra. María Eugenia Mena" },
  { rol: "Docente", nombre: "Dr. Francisco Arri" },
  { rol: "Docente", nombre: "Mgr. Ana Laura García" },
  { rol: "Docente", nombre: "Dra. Silvina Brunno" },
  { rol: "Docente", nombre: "Dr. Amaneció Vázquez" },
];

const requisitos: Array<{ titulo: string; detalle: string }> = [
  {
    titulo: "Título de grado",
    detalle:
      "Universitario o de nivel superior no universitario, de cuatro años de duración.",
  },
  {
    titulo: "Si tu carrera es más corta",
    detalle:
      "Se admite con postítulo, posgrado o ciclo de complementación de al menos un año, más CV actualizado.",
  },
  {
    titulo: "Idioma extranjero",
    detalle:
      "Acreditación de inglés al momento de presentar el trabajo final. Fundación Jerárquicos Educa ofrece un curso para aprenderlo y certificarlo.",
  },
];

const heroStats = [
  { icon: Clock, label: "720 hs" },
  { icon: GraduationCap, label: "UNR" },
  { icon: Certificate, label: "CONEAU" },
  { icon: MapPin, label: "Santa Fe" },
  { icon: Scroll, label: "Decreto 3029" },
];

export default function GraciasContent() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portada />
        <Curricular />
        <Perfil />
        <Plan />
        <Equipo />
        <Requisitos />
        <CierreCTA />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://fundacionjerarquicos.org.ar/wp-content/uploads/2024/11/logo-jerarquicos-educa_menu.svg"
            alt="Fundación Jerárquicos Educa"
            className="h-10 w-auto"
          />
          <Link
            href="/"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-brand-muted transition-colors duration-200 hover:text-brand-primary"
          >
            <ArrowLeft size={16} weight="bold" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand-violet/20 blur-3xl" />
        <div className="absolute top-1/2 -left-48 h-[400px] w-[400px] rounded-full bg-brand-mint/25 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-[350px] w-[350px] rounded-full bg-brand-violet-deep/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-mint/30 border border-brand-mint-deep/40 px-4 py-1.5 text-sm font-medium text-emerald-700">
              <CheckCircle size={16} weight="fill" />
              Consulta recibida — gracias por contactarnos
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tighter leading-[1.05] text-brand-dark mb-6 text-balance">
              Descargalo o miralo en esta página.
            </h1>

            <p className="text-lg text-brand-muted leading-relaxed max-w-[58ch] mb-10">
              Tenés el PDF del programa a un clic. Y si preferís no bajarlo,
              todo el plan está desplegado acá abajo: áreas de formación, los
              16 seminarios, el equipo docente y los requisitos para
              inscribirte.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={PDF_HREF}
                download="Programa-Maestria-UNR-2026.pdf"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-7 py-4 text-base font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-brand-primary-hover active:scale-[0.98] active:-translate-y-[1px]"
              >
                <DownloadSimple
                  size={20}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                />
                Descargar programa (PDF)
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-7 py-4 text-base font-semibold text-brand-dark transition-[border-color,color,transform] duration-200 hover:border-emerald-500 hover:text-emerald-600 active:scale-[0.98]"
              >
                <WhatsappLogo size={20} weight="fill" />
                Escribinos por WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="inline-flex items-center gap-2 text-sm text-brand-muted"
                >
                  <s.icon
                    size={18}
                    weight="duotone"
                    className="text-brand-primary"
                  />
                  <span className="font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.1,
            }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-violet/25 via-brand-mint/15 to-brand-primary/15 blur-md" />

              <div className="relative rounded-[2rem] bg-white border border-slate-100 p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                    <FilePdf size={28} weight="duotone" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-muted uppercase tracking-wider">
                      Programa 2026
                    </p>
                    <p className="text-base font-semibold text-brand-dark">
                      Plan de estudios completo
                    </p>
                  </div>
                </div>

                <dl className="space-y-3 mb-6 border-t border-slate-100 pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-brand-muted">Páginas</dt>
                    <dd className="text-sm font-medium text-brand-dark font-mono">
                      10
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-brand-muted">Peso</dt>
                    <dd className="text-sm font-medium text-brand-dark font-mono">
                      1.4 MB
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-brand-muted">Formato</dt>
                    <dd className="text-sm font-medium text-brand-dark">
                      PDF descargable
                    </dd>
                  </div>
                </dl>

                <a
                  href={PDF_HREF}
                  download="Programa-Maestria-UNR-2026.pdf"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-dark px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-zinc-900 active:scale-[0.98]"
                >
                  <DownloadSimple size={18} weight="bold" />
                  Abrir PDF
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#programa"
        aria-label="Ver el programa en esta página"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-brand-muted transition-colors duration-200 hover:text-brand-primary"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
          Programa completo abajo
        </span>
        <CaretDown
          size={18}
          weight="bold"
          className="animate-bounce"
        />
      </a>
    </section>
  );
}

function Portada() {
  const stats = [
    { value: "3", label: "Áreas de formación" },
    { value: "16", label: "Seminarios y talleres" },
    { value: "17", label: "Docentes" },
    { value: "720", label: "Horas totales" },
  ];
  const toc = [
    { href: "#curricular", label: "Características curriculares" },
    { href: "#perfil", label: "Perfil del título" },
    { href: "#plan", label: "Plan de estudios" },
    { href: "#equipo", label: "Equipo docente" },
    { href: "#requisitos", label: "Requisitos" },
  ];

  return (
    <section id="programa" className="py-20 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-brand-violet/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-violet/25 via-brand-mint/15 to-brand-primary/10 blur-md" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/60 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.12)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.ibb.co/jPGkCQtp/image-e-XOh0-VRQYy-SNe-MK077.jpg"
                  alt="Joven profesional de la educación"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-brand-dark/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                  <p className="text-[11px] font-semibold text-brand-muted uppercase tracking-[0.15em] mb-1">
                    Reconocimiento
                  </p>
                  <p className="text-sm font-semibold text-brand-dark leading-snug">
                    CONEAU · Dictamen del 7 de mayo de 2018 — Sesión No.&nbsp;481
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-brand-primary" />
              <span className="text-xs font-semibold text-brand-primary tracking-[0.2em] uppercase">
                Programa académico · Edición 2026
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl xl:text-[3.5rem] font-bold tracking-tighter text-brand-dark leading-[1.05] mb-6 text-balance">
              Maestría en Gestión y Asesoramiento Pedagógico de las
              Organizaciones Educativas.
            </h2>

            <p className="text-lg text-brand-muted leading-relaxed max-w-[58ch] mb-10">
              Una maestría profesional de la Universidad Nacional de Rosario,
              dictada de forma presencial en Santa Fe Capital por Fundación
              Jerárquicos Educa. Formación interdisciplinaria para gestionar,
              asesorar y transformar instituciones educativas.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10 pt-8 border-t border-slate-100">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tighter font-mono leading-none">
                    {s.value}
                  </p>
                  <p className="text-sm text-brand-muted mt-2 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[11px] font-semibold text-brand-muted uppercase tracking-[0.2em] mb-3">
                En esta página
              </p>
              <nav className="flex flex-wrap gap-2">
                {toc.map((a) => (
                  <a
                    key={a.href}
                    href={a.href}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-brand-muted transition-[border-color,color] duration-200 hover:border-brand-primary hover:text-brand-primary"
                  >
                    {a.label}
                    <ArrowUpRight size={12} weight="bold" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Curricular() {
  return (
    <section
      id="curricular"
      className="py-20 md:py-28 border-t border-slate-100 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-sm font-semibold text-brand-primary tracking-wide uppercase mb-3 block">
              Características curriculares
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark mb-5 text-balance">
              Los datos formales, sin vueltas.
            </h2>
            <p className="text-brand-muted leading-relaxed max-w-[38ch]">
              Todo lo que necesitás para saber exactamente qué tipo de título
              vas a obtener y cómo se reconoce.
            </p>
          </div>

          <div className="lg:col-span-8">
            <dl className="divide-y divide-slate-100 border-y border-slate-100">
              {curricular.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-5"
                >
                  <dt className="text-sm font-semibold text-brand-muted uppercase tracking-wider">
                    {row.label}
                  </dt>
                  <dd className="text-base text-brand-dark">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Perfil() {
  return (
    <section
      id="perfil"
      className="py-20 md:py-28 bg-slate-50/60 relative overflow-hidden scroll-mt-20"
    >
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-brand-violet/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <span className="text-sm font-semibold text-brand-primary tracking-wide uppercase mb-3 block">
              Perfil del título
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark mb-6 text-balance">
              Qué vas a poder hacer cuando termines.
            </h2>
            <div className="space-y-4 text-brand-muted leading-relaxed max-w-[60ch]">
              <p>
                Vas a tener una formación interdisciplinaria para comprender la
                problemática actual de la educación y competencias concretas
                para gestionar y asesorar sobre las transformaciones en el
                ámbito estatal y privado.
              </p>
              <p>
                El eje teórico-metodológico te prepara para desempeñarte como
                capacitador, docente o investigador académico, con herramientas
                para proponer y ejecutar proyectos que mejoren tu institución.
              </p>
              <p className="text-xs text-brand-muted/80 pt-2">
                Reconocimiento oficial provisorio según dictamen de la CONEAU
                del 7 de mayo de 2018, Sesión No. 481.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <ul className="space-y-3">
              {competencias.map((c, i) => (
                <li
                  key={c}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 transition-[border-color,transform] duration-200 hover:border-brand-primary/25 hover:-translate-y-[1px]"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary text-xs font-semibold font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] text-brand-dark leading-snug">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Plan() {
  return (
    <section id="plan" className="py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-semibold text-brand-primary tracking-wide uppercase mb-3 block">
            Plan de estudios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark mb-5 text-balance">
            Tres áreas, dieciséis espacios curriculares.
          </h2>
          <p className="text-brand-muted leading-relaxed">
            Cada área se compone de un corpus de seminarios y talleres que
            revisan y actualizan saberes previos, con aplicación directa en tu
            contexto profesional.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {plan.map((area) => (
            <div
              key={area.index}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-4">
                <div className="md:sticky md:top-24">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-5xl md:text-6xl font-bold text-brand-primary/15 tracking-tighter font-mono leading-none">
                      {area.index}
                    </span>
                    <span className="h-px w-10 bg-brand-primary/30" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-brand-dark mb-3 text-balance">
                    {area.titulo}
                  </h3>
                  <p className="text-brand-muted leading-relaxed text-[15px] max-w-[36ch]">
                    {area.descripcion}
                  </p>
                </div>
              </div>

              <div className="md:col-span-8">
                <ul className="divide-y divide-slate-100 border-y border-slate-100">
                  {area.seminarios.map((s, i) => (
                    <li
                      key={s.nombre}
                      className="flex items-center justify-between gap-5 py-4"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <span className="text-xs font-semibold text-brand-muted/60 font-mono shrink-0 w-8">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-base text-brand-dark leading-snug">
                          {s.nombre}
                        </span>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          s.tipo === "obligatorio"
                            ? "bg-brand-primary/10 text-brand-primary"
                            : "bg-brand-violet/25 text-brand-violet-deep"
                        }`}
                      >
                        {s.tipo}
                      </span>
                    </li>
                  ))}
                </ul>
                {area.seminarios.some((s) => s.tipo === "electivo") && (
                  <p className="mt-4 text-xs text-brand-muted/80">
                    * La oferta de seminarios electivos la determina la UNR en
                    función de la disponibilidad del cuerpo docente.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  const [director, ...resto] = docentes;
  return (
    <section
      id="equipo"
      className="py-20 md:py-28 bg-slate-50/60 relative overflow-hidden scroll-mt-20"
    >
      <div className="pointer-events-none absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-brand-mint/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-semibold text-brand-primary tracking-wide uppercase mb-3 block">
            Equipo docente
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark mb-5 text-balance">
            Diecisiete docentes, uno por seminario y con sobra.
          </h2>
          <p className="text-brand-muted leading-relaxed">
            Magísteres y doctores en educación, con práctica activa en gestión,
            investigación y asesoramiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="md:col-span-5">
            <DirectorCard docente={director} />
          </div>

          <div className="md:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resto.map((d) => (
                <li
                  key={d.nombre}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 transition-[border-color] duration-200 hover:border-brand-primary/20"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                    <User
                      size={18}
                      weight="duotone"
                      className="text-brand-muted"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-brand-muted uppercase tracking-wider">
                      {d.rol}
                    </p>
                    <p className="text-sm font-medium text-brand-dark truncate">
                      {d.nombre}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function DirectorCard({
  docente,
}: {
  docente: (typeof docentes)[number];
}) {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
          <User size={32} weight="duotone" />
        </div>
        <div>
          <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider">
            {docente.rol} de la maestría
          </p>
          <h3 className="text-xl font-semibold text-brand-dark mt-1">
            {docente.nombre}
          </h3>
        </div>
      </div>
      <p className="text-brand-muted leading-relaxed text-[15px]">
        Doctor por la UNR, Categoría II en el Programa de Incentivos.
        Especialista en gestión educativa y políticas institucionales. Dirige
        la maestría desde su reconocimiento por CONEAU.
      </p>
    </div>
  );
}

function Requisitos() {
  return (
    <section id="requisitos" className="py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-sm font-semibold text-brand-primary tracking-wide uppercase mb-3 block">
              Requisitos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-dark mb-5 text-balance">
              Qué hace falta para entrar.
            </h2>
            <p className="text-brand-muted leading-relaxed max-w-[36ch]">
              Tres condiciones formales. Si alguna no encaja con tu perfil,
              escribinos: casi siempre hay un camino.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ol className="divide-y divide-slate-100 border-y border-slate-100">
              {requisitos.map((r, i) => (
                <li key={r.titulo} className="py-6">
                  <div className="flex items-baseline gap-6">
                    <span className="text-xs font-semibold text-brand-primary font-mono tracking-wider shrink-0 pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-dark mb-1.5">
                        {r.titulo}
                      </h3>
                      <p className="text-brand-muted leading-relaxed">
                        {r.detalle}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function CierreCTA() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/60 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-brand-mint/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-brand-violet/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-100 bg-white p-10 md:p-14 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
              <Buildings size={28} weight="duotone" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-brand-dark mb-3 text-balance">
                ¿Tenés dudas sobre si encajás o cómo arrancar?
              </h2>
              <p className="text-brand-muted leading-relaxed mb-8 max-w-[58ch]">
                Respondemos por WhatsApp en menos de 24 hs. Contanos tu
                situación y te orientamos sobre puntaje, becas por referidos o
                documentación.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PHONE_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-emerald-700 active:scale-[0.98]"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  Escribir por WhatsApp
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark transition-[border-color,color,transform] duration-200 hover:border-brand-primary hover:text-brand-primary active:scale-[0.98]"
                >
                  Volver a la landing
                  <ArrowUpRight size={16} weight="bold" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://fundacionjerarquicos.org.ar/wp-content/uploads/2024/11/logo-jerarquicos-educa_menu.svg"
            alt="Fundación Jerárquicos Educa"
            className="h-8 w-auto"
          />
          <p className="text-xs text-brand-muted">
            Fundación Jerárquicos Educa · Santa Fe Capital, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
