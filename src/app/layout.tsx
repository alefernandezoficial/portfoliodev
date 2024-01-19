import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import MenuNavegation from "./components/MenuNavegation";
import Header from "./components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ale Fernandez v2",
  description: "Diseñador, Desarrollador & Programador Web & Apps. Diseño la pagina a tu estilo o uno nuevo. Desarrollo lo importante, lo escencial, lo de calidad. Programo lo que la gente no quiere.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        {/* Menu Navegation */}
        <MenuNavegation />

        {/* Header */}
        <Header />

        {/* Children */}
        {children}

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" async />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
