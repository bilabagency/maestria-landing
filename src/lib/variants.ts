export interface HeroVariant {
  slug: "a" | "b" | "c";
  title: string;
  subtitle: string;
}

export const variants: Record<string, HeroVariant> = {
  a: {
    slug: "a",
    title: "El titulo que te separa de tu proximo ascenso en educacion.",
    subtitle: "Maestria en Gestion Pedagogica · UNR · Presencial en Santa Fe",
  },
  b: {
    slug: "b",
    title: "Tu proximo cargo directivo empieza aca.",
    subtitle:
      "Maestria en Gestion y Asesoramiento Pedagogico · UNR · Santa Fe",
  },
  c: {
    slug: "c",
    title: "Competi con respaldo. Lidera con fundamentos.",
    subtitle:
      "Maestria en Gestion y Asesoramiento Pedagogico · UNR · Presencial en Santa Fe",
  },
};
