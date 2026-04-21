import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LeadSchema = z.object({
  nombre_completo: z.string().min(2).max(100),
  email: z.string().email().max(120),
  telefono: z.string().min(6).max(20),
  ciudad_de_residencia: z.string().min(2).max(80),
  titulo_de_grado: z.enum([
    "4+ años",
    "Menos de 4 años con postítulo",
    "Menos de 4 años sin postítulo",
  ]),
  ocupacion_actual: z.enum([
    "Docente frente a aula",
    "Directivo/Coordinador",
    "Otro rol educativo",
    "Otro",
  ]),
  objetivo_principal: z.enum([
    "Sumar puntaje docente",
    "Profesionalizar mi gestión",
    "Ambos",
  ]),
  socio_de_jerarquicos: z.enum(["Sí", "No"]),
  variant: z.enum(["a", "b", "c"]),
  page_url: z.string().url(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  math_answer: z.string().optional(),
  math_expected: z.string().optional(),
  hcaptcha_token: z.string().optional(),
});

type Lead = z.infer<typeof LeadSchema>;

const NO_STORE = { "Cache-Control": "no-store" } as const;

function splitName(full: string) {
  const tokens = full.trim().split(/\s+/);
  const first_name = tokens[0] ?? "";
  const last_name = tokens.slice(1).join(" ") || ".";
  return { first_name, last_name };
}

function normalizePhone(raw: string) {
  const cleaned = raw.replace(/[\s\-()]/g, "");
  if (cleaned.startsWith("+")) return cleaned;
  return `+54${cleaned}`;
}

async function verifyCaptcha(lead: Lead): Promise<boolean> {
  if (lead.hcaptcha_token) {
    const secret = process.env.HCAPTCHA_SECRET;
    if (!secret) {
      console.error("[api/lead] hcaptcha_token received but HCAPTCHA_SECRET is missing");
      return false;
    }
    try {
      const body = new URLSearchParams({
        secret,
        response: lead.hcaptcha_token,
      });
      const res = await fetch("https://hcaptcha.com/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      const data = (await res.json()) as { success?: boolean };
      return data.success === true;
    } catch (err) {
      console.error("[api/lead] hcaptcha verify error", err);
      return false;
    }
  }

  if (lead.math_answer && lead.math_expected) {
    return lead.math_answer.trim() === lead.math_expected.trim();
  }

  return false;
}

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400, headers: NO_STORE }
    );
  }

  const parsed = LeadSchema.safeParse(raw);
  if (!parsed.success) {
    console.warn("[api/lead] validation failed", parsed.error.flatten());
    return NextResponse.json(
      { ok: false, error: "validation_failed", details: parsed.error.flatten() },
      { status: 400, headers: NO_STORE }
    );
  }

  const lead = parsed.data;

  const captchaOk = await verifyCaptcha(lead);
  if (!captchaOk) {
    return NextResponse.json(
      { ok: false, error: "captcha_failed" },
      { status: 400, headers: NO_STORE }
    );
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[api/lead] GHL_WEBHOOK_URL is not set");
    return NextResponse.json(
      { ok: false, error: "misconfigured" },
      { status: 500, headers: NO_STORE }
    );
  }

  const { first_name, last_name } = splitName(lead.nombre_completo);
  const phone = normalizePhone(lead.telefono);

  const ghlPayload = {
    first_name,
    last_name,
    email: lead.email,
    phone,
    ciudad_de_residencia: lead.ciudad_de_residencia,
    titulo_de_grado: lead.titulo_de_grado,
    ocupacion_actual: lead.ocupacion_actual,
    objetivo_principal: lead.objetivo_principal,
    socio_de_jerarquicos: lead.socio_de_jerarquicos,
    source: "Landing Maestría",
    tags: ["maestria-unr", "landing-pdf", `variant-${lead.variant}`],
    variant: lead.variant,
    page_url: lead.page_url,
    utm_source: lead.utm_source ?? "",
    utm_medium: lead.utm_medium ?? "",
    utm_campaign: lead.utm_campaign ?? "",
    utm_term: lead.utm_term ?? "",
    utm_content: lead.utm_content ?? "",
    submitted_at: new Date().toISOString(),
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const ghlRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ghlPayload),
      signal: controller.signal,
    });

    if (!ghlRes.ok) {
      const text = await ghlRes.text().catch(() => "");
      console.error(
        `[api/lead] GHL webhook responded ${ghlRes.status}`,
        text.slice(0, 500)
      );
      return NextResponse.json(
        { ok: false, error: "upstream_error" },
        { status: 502, headers: NO_STORE }
      );
    }

    console.log(
      `[api/lead] lead sent ok variant=${lead.variant} email=${lead.email}`
    );
    return NextResponse.json(
      { ok: true },
      { status: 200, headers: NO_STORE }
    );
  } catch (err) {
    const aborted =
      err instanceof Error && err.name === "AbortError";
    console.error(
      `[api/lead] GHL webhook ${aborted ? "timeout" : "error"}`,
      err
    );
    return NextResponse.json(
      { ok: false, error: aborted ? "upstream_timeout" : "upstream_error" },
      { status: 502, headers: NO_STORE }
    );
  } finally {
    clearTimeout(timeout);
  }
}
