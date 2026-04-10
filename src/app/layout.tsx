import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ModalProvider } from "@/components/ModalProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "Maestria en Gestion y Asesoramiento Pedagogico — UNR | Fundacion Jerarquicos Educa",
  description:
    "Maestria en Gestion y Asesoramiento Pedagogico de las Organizaciones Educativas. Dictada por la UNR, presencial en Santa Fe. 16 seminarios, 720 horas, puntaje docente.",
  openGraph: {
    title:
      "Maestria en Gestion y Asesoramiento Pedagogico — UNR",
    description:
      "Titulo oficial de la UNR dictado en Santa Fe Capital. Reconocida por CONEAU. Inicio mayo 2025.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
