"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CaretDown, X } from "@phosphor-icons/react";
import {
  PINNED_LOCALITIES,
  OTHER_LOCALITIES,
} from "@/lib/localities";

interface LocalitySelectProps {
  id: string;
  name: string;
  placeholder?: string;
  inputClassName: string;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

const ALL_ORDERED = [...PINNED_LOCALITIES, ...OTHER_LOCALITIES];

export default function LocalitySelect({
  id,
  name,
  placeholder = "Buscá tu localidad",
  inputClassName,
}: LocalitySelectProps) {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    if (!q || query === value) return null;
    return ALL_ORDERED.filter((l) => normalize(l).includes(q));
  }, [query, value]);

  const displayed = filtered ?? ALL_ORDERED;

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const el = listRef.current?.querySelector<HTMLElement>(
      `#${id}-option-${activeIndex}`
    );
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, isOpen, id]);

  const select = useCallback((loc: string) => {
    setValue(loc);
    setQuery(loc);
    setIsOpen(false);
    inputRef.current?.blur();
  }, []);

  const clear = useCallback(() => {
    setValue("");
    setQuery("");
    setActiveIndex(0);
    setIsOpen(true);
    inputRef.current?.focus();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) setIsOpen(true);
      setActiveIndex((i) => Math.min(displayed.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) setIsOpen(true);
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      if (isOpen && displayed[activeIndex]) {
        e.preventDefault();
        select(displayed[activeIndex]);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />

      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          type="text"
          autoComplete="off"
          role="combobox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-controls={`${id}-list`}
          aria-activedescendant={
            isOpen ? `${id}-option-${activeIndex}` : undefined
          }
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setValue("");
            setIsOpen(true);
            setActiveIndex(0);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className={`${inputClassName} pr-10`}
        />
        <div className="absolute inset-y-0 right-3 flex items-center">
          {query ? (
            <button
              type="button"
              onClick={clear}
              aria-label="Limpiar localidad"
              className="text-brand-muted transition-colors duration-200 hover:text-brand-dark"
            >
              <X size={16} weight="bold" />
            </button>
          ) : (
            <CaretDown
              size={16}
              weight="bold"
              className={`pointer-events-none text-brand-muted transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div
          ref={listRef}
          id={`${id}-list`}
          role="listbox"
          className="absolute z-20 mt-2 max-h-72 w-full overflow-auto rounded-xl border border-slate-200 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]"
        >
          {filtered === null ? (
            <>
              <SectionLabel>Santa Fe y localidades cercanas</SectionLabel>
              {PINNED_LOCALITIES.map((l, i) => (
                <Option
                  key={l}
                  id={`${id}-option-${i}`}
                  value={l}
                  active={activeIndex === i}
                  onClick={() => select(l)}
                  onMouseEnter={() => setActiveIndex(i)}
                />
              ))}
              <SectionLabel>Otras localidades de Santa Fe</SectionLabel>
              {OTHER_LOCALITIES.map((l, i) => {
                const idx = i + PINNED_LOCALITIES.length;
                return (
                  <Option
                    key={l}
                    id={`${id}-option-${idx}`}
                    value={l}
                    active={activeIndex === idx}
                    onClick={() => select(l)}
                    onMouseEnter={() => setActiveIndex(idx)}
                  />
                );
              })}
            </>
          ) : filtered.length > 0 ? (
            filtered.map((l, i) => (
              <Option
                key={l}
                id={`${id}-option-${i}`}
                value={l}
                active={activeIndex === i}
                onClick={() => select(l)}
                onMouseEnter={() => setActiveIndex(i)}
              />
            ))
          ) : (
            <div className="px-4 py-6 text-center text-sm text-brand-muted">
              No encontramos esa localidad.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky top-0 z-10 border-b border-slate-100 bg-white px-4 py-2">
      <p className="text-[10px] font-semibold text-brand-muted uppercase tracking-[0.15em]">
        {children}
      </p>
    </div>
  );
}

function Option({
  id,
  value,
  active,
  onClick,
  onMouseEnter,
}: {
  id: string;
  value: string;
  active: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}) {
  return (
    <button
      type="button"
      role="option"
      id={id}
      aria-selected={active}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors duration-150 ${
        active
          ? "bg-brand-primary/10 text-brand-primary"
          : "text-brand-dark hover:bg-slate-50"
      }`}
    >
      {value}
    </button>
  );
}
