import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Donia Salaoui - Ingénieure Logiciel Spécialisée en Développement",
  description: "Portfolio professionnel de Donia Salaoui, ingénieure en génie logiciel. Expertise en développement full-stack, architectures cloud et solutions logicielles innovantes.",
  keywords: [
    "ingénieure logiciel", 
    "développement web", 
    "génie logiciel",
    "Donia Salaoui",
    "portfolio développeur",
    "full-stack",
    "solutions logicielles"
  ],
  authors: [{ name: "Donia Salaoui" }],
  creator: "Donia Salaoui",
  openGraph: {
    title: "Donia Salaoui - Ingénieure Logiciel",
    description: "Portfolio professionnel présentant mes compétences",
    type: "website",
    url: "https://votreportfolio.com",
    images: "/og-image.png",
  },

  icons: {
    icon: '/sd-icon.svg', // SVG scalable
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
