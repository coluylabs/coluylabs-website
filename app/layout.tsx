import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Coluy Labs | Defishard MPC",
  description: "DeFiShard: Web3 Asset Protection. Powered by threshold cryptography and multi-party computation.",
  metadataBase: new URL('https://coluylabs.org'),
  openGraph: {
    title: "Coluy Labs | Defishard MPC",
    description: "DeFiShard: Web3 Asset Protection. Powered by threshold cryptography and multi-party computation.",
    url: 'https://coluylabs.org',
    siteName: 'Coluy Labs',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
