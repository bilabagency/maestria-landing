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
    title: "El título que te separa de tu próximo ascenso en educación.",
    subtitle: "Maestría en Gestión Pedagógica · UNR · Presencial en Santa Fe",
    image:
      "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Docente en aula de clases",
  },
  b: {
    slug: "b",
    title: "Tu próximo cargo directivo empieza acá.",
    subtitle:
      "Maestría en Gestión y Asesoramiento Pedagógico · UNR · Santa Fe",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Equipo directivo en reunión de trabajo",
  },
  c: {
    slug: "c",
    title: "Competí con respaldo. Liderá con fundamentos.",
    subtitle:
      "Maestría en Gestión y Asesoramiento Pedagógico · UNR · Presencial en Santa Fe",
    image:
      "https://images.pexels.com/photos/5553050/pexels-photo-5553050.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Profesional de la educación estudiando",
  },
};
