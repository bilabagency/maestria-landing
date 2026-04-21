"use client";

import { useState, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";

function generateMathChallenge() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { a, b, answer: a + b };
}

type Status = "idle" | "submitting" | "success" | "error";

type Variant = "a" | "b" | "c";

function variantFromPath(pathname: string | null): Variant {
  if (pathname?.startsWith("/b")) return "b";
  if (pathname?.startsWith("/c")) return "c";
  return "a";
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

type UtmSnapshot = Partial<Record<(typeof UTM_KEYS)[number], string>>;

interface FormFieldsProps {
  onSuccess?: () => void;
  submitLabel?: string;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export default function FormFields({
  onSuccess,
  submitLabel = "Enviar consulta",
}: FormFieldsProps) {
  const pathname = usePathname();
  const variant = variantFromPath(pathname);

  const [challenge, setChallenge] = useState(generateMathChallenge);
  const [captchaInput, setCaptchaInput] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [utms, setUtms] = useState<UtmSnapshot>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const snapshot: UtmSnapshot = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) snapshot[key] = value;
    }
    setUtms(snapshot);
  }, []);

  const validate = useCallback(
    (form: FormData): Record<string, string> => {
      const errs: Record<string, string> = {};
      const nombre = (form.get("nombre") as string | null)?.trim() ?? "";
      const email = (form.get("email") as string | null)?.trim() ?? "";
      const telefono = (form.get("telefono") as string | null)?.trim() ?? "";
      const ciudad = (form.get("ciudad") as string | null)?.trim() ?? "";

      if (nombre.length < 2) errs.nombre = "Ingresá tu nombre completo";
      if (!email) errs.email = "Ingresá tu email";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        errs.email = "Formato de email inválido";
      if (telefono.length < 6) errs.telefono = "Ingresá tu teléfono";
      if (ciudad.length < 2) errs.ciudad = "Ingresá tu ciudad";
      if (!form.get("titulo")) errs.titulo = "Seleccioná una opción";
      if (!form.get("ocupacion")) errs.ocupacion = "Seleccioná una opción";
      if (!form.get("objetivo")) errs.objetivo = "Seleccioná una opción";
      if (!form.get("socio")) errs.socio = "Seleccioná una opción";
      if (parseInt(captchaInput) !== challenge.answer)
        errs.captcha = "Respuesta incorrecta";
      return errs;
    },
    [captchaInput, challenge.answer]
  );

  const submitLead = useCallback(
    async (form: FormData) => {
      const payload = {
        nombre_completo: (form.get("nombre") as string).trim(),
        email: (form.get("email") as string).trim(),
        telefono: (form.get("telefono") as string).trim(),
        ciudad_de_residencia: (form.get("ciudad") as string).trim(),
        titulo_de_grado: form.get("titulo") as string,
        ocupacion_actual: form.get("ocupacion") as string,
        objetivo_principal: form.get("objetivo") as string,
        socio_de_jerarquicos: form.get("socio") as string,
        variant,
        page_url:
          typeof window !== "undefined" ? window.location.href : "",
        ...utms,
        math_answer: captchaInput.trim(),
        math_expected: String(challenge.answer),
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        const code = data?.error ?? "unknown";
        throw new Error(code);
      }
    },
    [variant, utms, captchaInput, challenge.answer]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const errs = validate(form);
      setErrors(errs);
      if (Object.keys(errs).length > 0) return;

      setStatus("submitting");
      setErrorMessage("");

      try {
        await submitLead(form);
        setStatus("success");
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer ?? [];
          window.dataLayer.push({ event: "lead_submitted", variant });
        }
        onSuccess?.();
      } catch (err) {
        const code = err instanceof Error ? err.message : "unknown";
        const friendly =
          code === "captcha_failed"
            ? "La verificación no coincide. Intentalo de nuevo."
            : code === "upstream_timeout"
            ? "La conexión tardó demasiado. Probá de nuevo en unos segundos."
            : "No pudimos enviar tu consulta. Intentalo de nuevo.";
        setErrorMessage(friendly);
        setStatus("error");
      }
    },
    [validate, submitLead, onSuccess, variant]
  );

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-brand-mint/20 border border-brand-mint-deep/30 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-mint-deep/20">
          <svg
            className="h-8 w-8 text-emerald-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-brand-dark mb-2">
          ¡Listo! Te enviamos el programa académico al email.
        </h3>
        <p className="text-brand-muted">
          Revisalo en tu bandeja de entrada. Si no lo encontrás, revisá spam.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-dark placeholder:text-slate-400 transition-colors duration-200 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20";
  const labelBase = "block text-sm font-medium text-brand-dark mb-1.5";
  const errorBase = "text-sm text-rose-500 mt-1";
  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nombre" className={labelBase}>
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className={inputBase}
            placeholder="Ej: María González"
          />
          {errors.nombre && <p className={errorBase}>{errors.nombre}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelBase}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputBase}
            placeholder="tu@email.com"
          />
          {errors.email && <p className={errorBase}>{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="telefono" className={labelBase}>
            Teléfono / WhatsApp
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            className={inputBase}
            placeholder="+54 342 555 1234"
          />
          {errors.telefono && <p className={errorBase}>{errors.telefono}</p>}
        </div>
        <div>
          <label htmlFor="ciudad" className={labelBase}>
            Ciudad de residencia
          </label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            required
            className={inputBase}
            placeholder="Ej: Santa Fe"
          />
          {errors.ciudad && <p className={errorBase}>{errors.ciudad}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="titulo" className={labelBase}>
          Título de grado
        </label>
        <select id="titulo" name="titulo" required className={inputBase}>
          <option value="">Seleccioná una opción</option>
          <option value="4+ años">4+ años</option>
          <option value="Menos de 4 años con postítulo">
            Menos de 4 años con postítulo
          </option>
          <option value="Menos de 4 años sin postítulo">
            Menos de 4 años sin postítulo
          </option>
        </select>
        {errors.titulo && <p className={errorBase}>{errors.titulo}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ocupacion" className={labelBase}>
            Ocupación actual
          </label>
          <select
            id="ocupacion"
            name="ocupacion"
            required
            className={inputBase}
          >
            <option value="">Seleccioná una opción</option>
            <option value="Docente frente a aula">Docente frente a aula</option>
            <option value="Directivo/Coordinador">Directivo/Coordinador</option>
            <option value="Otro rol educativo">Otro rol educativo</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.ocupacion && <p className={errorBase}>{errors.ocupacion}</p>}
        </div>
        <div>
          <label htmlFor="objetivo" className={labelBase}>
            Objetivo principal
          </label>
          <select
            id="objetivo"
            name="objetivo"
            required
            className={inputBase}
          >
            <option value="">Seleccioná una opción</option>
            <option value="Sumar puntaje docente">Sumar puntaje docente</option>
            <option value="Profesionalizar mi gestión">
              Profesionalizar mi gestión
            </option>
            <option value="Ambos">Ambos</option>
          </select>
          {errors.objetivo && <p className={errorBase}>{errors.objetivo}</p>}
        </div>
      </div>

      <div>
        <span className={labelBase}>¿Sos socio de Mutual Jerárquicos?</span>
        <div className="flex gap-6 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="socio"
              value="Sí"
              className="h-4 w-4 text-brand-primary accent-brand-primary"
            />
            <span className="text-brand-dark">Sí</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="socio"
              value="No"
              className="h-4 w-4 text-brand-primary accent-brand-primary"
            />
            <span className="text-brand-dark">No</span>
          </label>
        </div>
        {errors.socio && <p className={errorBase}>{errors.socio}</p>}
      </div>

      <div>
        <label htmlFor="captcha" className={labelBase}>
          Verificación: ¿Cuánto es {challenge.a} + {challenge.b}?
        </label>
        <div className="flex items-center gap-3">
          <input
            type="number"
            id="captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            className={`${inputBase} max-w-[120px]`}
            placeholder="?"
          />
          <button
            type="button"
            onClick={() => {
              setChallenge(generateMathChallenge());
              setCaptchaInput("");
            }}
            className="text-sm text-brand-muted hover:text-brand-primary transition-colors"
          >
            Cambiar pregunta
          </button>
        </div>
        {errors.captcha && <p className={errorBase}>{errors.captcha}</p>}
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
          <p className="text-sm text-rose-700 mb-3">{errorMessage}</p>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setErrorMessage("");
            }}
            className="rounded-lg border border-rose-300 bg-white px-4 py-2 text-sm font-semibold text-rose-700 transition-colors hover:bg-rose-100"
          >
            Reintentar
          </button>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-brand-primary px-8 py-4 text-base font-semibold text-white transition-[background-color,transform,opacity] duration-200 hover:bg-brand-primary-hover active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Enviando...
          </span>
        ) : (
          submitLabel
        )}
      </button>
    </form>
  );
}
