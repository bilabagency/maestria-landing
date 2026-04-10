"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "@phosphor-icons/react";
import { useModal } from "./ModalProvider";
import FormFields from "./FormFields";

export default function Modal() {
  const { isOpen, close } = useModal();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-zinc-950/40 backdrop-blur-sm p-4 pt-16 md:pt-24"
          onClick={(e) => {
            if (e.target === overlayRef.current) close();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-slate-100 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-brand-dark">
                  Descargar programa academico
                </h2>
                <p className="text-brand-muted text-sm mt-1">
                  Completa tus datos y recibilo en tu email.
                </p>
              </div>
              <button
                onClick={close}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-brand-muted transition-colors duration-200 hover:bg-slate-100 hover:text-brand-dark"
              >
                <X size={22} weight="bold" />
              </button>
            </div>
            <FormFields
              onSuccess={() => {
                setTimeout(close, 3000);
              }}
              submitLabel="Descargar programa"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
