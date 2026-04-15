import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CAJ TECH - Sistema de Gestão para Barbearias",
  description: "Sua barbearia no automático: agenda, lembretes e comissão em um só lugar. Teste grátis por 7 dias.",
  keywords: "barbearia, gestão, agenda, lembretes, comissão, sistema",
  openGraph: {
    title: "CAJ TECH - Sistema de Gestão para Barbearias",
    description: "Sua barbearia no automático: agenda, lembretes e comissão em um só lugar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
