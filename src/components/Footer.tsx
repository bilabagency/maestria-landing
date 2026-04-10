"use client";

import { WhatsappLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://fundacionjerarquicos.org.ar/wp-content/uploads/2024/11/logo-jerarquicos-educa_menu.svg"
              alt="Fundacion Jerarquicos Educa"
              className="h-10 w-auto mb-4"
            />
            <p className="text-brand-muted text-sm max-w-[40ch] leading-relaxed">
              Fundacion Jerarquicos Educa — Formacion de posgrado para
              profesionales de la educacion en Santa Fe.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <a
              href="https://wa.me/543425551234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-700 active:scale-[0.98]"
            >
              <WhatsappLogo size={20} weight="fill" />
              Escribinos por WhatsApp
            </a>
            <p className="text-brand-muted text-xs">
              Santa Fe Capital, Argentina
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200/60">
          <p className="text-center text-xs text-brand-muted">
            Fundacion Jerarquicos Educa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
