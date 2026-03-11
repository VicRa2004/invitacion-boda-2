import type { Metadata } from "next";
import { Great_Vibes, Lato, Playfair_Display } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

const lato = Lato({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Boda Homero y Larissa",
  description: "Invitación de boda de Homero y Larissa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${greatVibes.variable} ${lato.variable} ${playfair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
