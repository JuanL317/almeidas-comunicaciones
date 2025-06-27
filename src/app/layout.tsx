import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Almeidas Comunicaciones SAS - Internet y Televisión",
  description: "Servicios de internet y televisión de alta velocidad para hogares y empresas en zonas urbanas y rurales. Conectamos comunidades con tecnología avanzada.",
  keywords: "internet, televisión, servicios de internet, internet rural, internet urbano, televisión por cable, conectividad, Almeidas Comunicaciones",
  authors: [{ name: "Almeidas Comunicaciones SAS" }],
  openGraph: {
    title: "Almeidas Comunicaciones SAS - Internet y Televisión",
    description: "Servicios de internet y televisión de alta velocidad para hogares y empresas en zonas urbanas y rurales.",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Almeidas Comunicaciones SAS - Internet y Televisión",
    description: "Servicios de internet y televisión de alta velocidad para hogares y empresas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
