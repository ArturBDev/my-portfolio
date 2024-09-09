import { Header } from "@/components/Header";
import "../app/styles/global.css";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Portfólio - Artur Santos",
  description:
    "Engenheiro de Software e desenvolvedor apaixonado por inovação.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
