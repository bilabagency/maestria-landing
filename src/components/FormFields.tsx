"use client";

import { useState, useCallback } from "react";

function generateMathChallenge() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { a, b, answer: a + b };
}

interface FormFieldsProps {
  onSuccess?: () => void;
  submitLabel?: string;
}

export default function FormFields({
  onSuccess,
  submitLabel = "Enviar consulta",
}: FormFieldsProps) {
  const [challenge, setChallenge] = useState(generateMathChallenge);
  const [captchaInput, setCaptchaInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = useCallback(
    (form: FormData): Record<string, string> => {
      const errs: Record<string, string> = {};
      if (!form.get("nombre")) errs.nombre = "Ingresa tu nombre completo";
      if (!form.get("email")) errs.email = "Ingresa tu email";
      else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.get("email") as string)
      )
        errs.email = "Formato de email invalido";
      if (!form.get("telefono")) errs.telefono = "Ingresa tu telefono";
      if (!form.get("titulo")) errs.titulo = "Selecciona una opcion";
      if (!form.get("ocupacion")) errs.ocupacion = "Selecciona una opcion";
      if (!form.get("objetivo")) errs.objetivo = "Selecciona una opcion";
      if (!form.get("socio")) errs.socio = "Selecciona una opcion";
      if (parseInt(captchaInput) !== challenge.answer)
        errs.captcha = "Respuesta incorrecta";
      return errs;
    },
    [captchaInput, challenge.answer]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const errs = validate(form);
      setErrors(errs);
      if (Object.keys(errs).length > 0) return;

      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        onSuccess?.();
      }, 800);
    },
    [validate, onSuccess]
  );

  if (submitted) {
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
          Listo! Te enviamos el programa a tu email.
        </h3>
        <p className="text-brand-muted">
          Revisalo en tu bandeja de entrada. Si no lo encontras, revisa spam.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-dark placeholder:text-slate-400 transition-colors duration-200 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20";
  const labelBase = "block text-sm font-medium text-brand-dark mb-1.5";
  const errorBase = "text-sm text-rose-500 mt-1";

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
            placeholder="Ej: Maria Gonzalez"
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
            Telefono / WhatsApp
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
            className={inputBase}
            placeholder="Ej: Santa Fe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="titulo" className={labelBase}>
          Titulo de grado
        </label>
        <select id="titulo" name="titulo" required className={inputBase}>
          <option value="">Selecciona una opcion</option>
          <option value="4+">4+ anios</option>
          <option value="menos-con">Menos de 4 anios con postitulo</option>
          <option value="menos-sin">Menos de 4 anios sin postitulo</option>
        </select>
        {errors.titulo && <p className={errorBase}>{errors.titulo}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ocupacion" className={labelBase}>
            Ocupacion actual
          </label>
          <select
            id="ocupacion"
            name="ocupacion"
            required
            className={inputBase}
          >
            <option value="">Selecciona una opcion</option>
            <option value="docente">Docente frente a aula</option>
            <option value="directivo">Directivo/Coordinador</option>
            <option value="educativo">Otro rol educativo</option>
            <option value="otro">Otro</option>
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
            <option value="">Selecciona una opcion</option>
            <option value="puntaje">Sumar puntaje docente</option>
            <option value="gestion">Profesionalizar mi gestion</option>
            <option value="ambos">Ambos</option>
          </select>
          {errors.objetivo && <p className={errorBase}>{errors.objetivo}</p>}
        </div>
      </div>

      <div>
        <span className={labelBase}>Sos socio de Mutual Jerarquicos?</span>
        <div className="flex gap-6 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="socio"
              value="si"
              className="h-4 w-4 text-brand-primary accent-brand-primary"
            />
            <span className="text-brand-dark">Si</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="socio"
              value="no"
              className="h-4 w-4 text-brand-primary accent-brand-primary"
            />
            <span className="text-brand-dark">No</span>
          </label>
        </div>
        {errors.socio && <p className={errorBase}>{errors.socio}</p>}
      </div>

      <div>
        <label htmlFor="captcha" className={labelBase}>
          Verificacion: Cuanto es {challenge.a} + {challenge.b}?
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

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-brand-primary px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-primary-hover active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
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
