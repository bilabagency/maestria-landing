export interface HeroVariant {
  slug: "a" | "b" | "c";
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

export const variants: Record<string, HeroVariant> = {
  a: {
    slug: "a",
    title: "El titulo que te separa de tu proximo ascenso en educacion.",
    subtitle: "Maestria en Gestion Pedagogica · UNR · Presencial en Santa Fe",
    image:
      "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Docente en aula de clases",
  },
  b: {
    slug: "b",
    title: "Tu proximo cargo directivo empieza aca.",
    subtitle:
      "Maestria en Gestion y Asesoramiento Pedagogico · UNR · Santa Fe",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Equipo directivo en reunion de trabajo",
  },
  c: {
    slug: "c",
    title: "Competi con respaldo. Lidera con fundamentos.",
    subtitle:
      "Maestria en Gestion y Asesoramiento Pedagogico · UNR · Presencial en Santa Fe",
    image:
      "https://images.pexels.com/photos/5553050/pexels-photo-5553050.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Profesional de la educacion estudiando",
  },
};
