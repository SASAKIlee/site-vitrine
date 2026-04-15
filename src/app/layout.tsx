import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Fonte Inter otimizada com preconnect
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "CAJ TECH - Sistema de Gestão para Barbearias | Agenda, Lembretes e Comissão",
    template: "%s | CAJ TECH",
  },
  description:
    "Sua barbearia no automático: agenda inteligente, lembretes de WhatsApp e comissão automática. Teste grátis por 7 dias, sem cartão de crédito.",
  keywords: [
    "barbearia",
    "gestão de barbearia",
    "agenda barbearia",
    "lembretes WhatsApp",
    "comissão barbeiro",
    "sistema barbearia",
    "agendamento online",
    "CAJ TECH",
  ],
  authors: [{ name: "CAJ TECH" }],
  creator: "CAJ TECH",
  publisher: "CAJ TECH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cajtech.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "CAJ TECH - Sistema de Gestão para Barbearias",
    description:
      "Sua barbearia no automático: agenda, lembretes e comissão em um só lugar. Teste grátis por 7 dias.",
    siteName: "CAJ TECH",
    // TODO: Substituir por imagem real de OG (1200x630px)
    // images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CAJ TECH" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAJ TECH - Sistema de Gestão para Barbearias",
    description:
      "Sua barbearia no automático: agenda, lembretes e comissão em um só lugar.",
    // TODO: Substituir por imagem real
    // images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* TODO: Adicionar Google Analytics GA4 */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" /> */}
        {/* <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        ` }} /> */}
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
