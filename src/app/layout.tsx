import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Almeidas Comunicaciones SAS - Internet y Televisión",
  description: "Empresa dedicada a la venta de servicio de internet y televisión, a personas que viven en el casco urbano y rurales a través de redes alámbricas e inalámbricas.",
  keywords: "internet, televisión, servicios de internet, internet rural, internet urbano, televisión por cable, conectividad, Almeidas Comunicaciones",
  authors: [{ name: "Almeidas Comunicaciones SAS" }],
  openGraph: {
    title: "Almeidas Comunicaciones SAS - Internet y Televisión",
    description: "Empresa dedicada a la venta de servicio de internet y televisión, a personas que viven en el casco urbano y rurales a través de redes alámbricas e inalámbricas.",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Almeidas Comunicaciones SAS - Internet y Televisión",
    description: "Empresa dedicada a la venta de servicio de internet y televisión, a personas que viven en el casco urbano y rurales a través de redes alámbricas e inalámbricas.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
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
