import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coluy Labs — Applied cryptography",
  description:
    "Notes and code from building MPC systems: multi-party computation, threshold signatures, post-quantum cryptography and tooling for cryptographic security review.",
  metadataBase: new URL("https://coluylabs.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://coluylabs.org/",
    title: "Coluy Labs — Applied cryptography",
    description: "Notes and code from building MPC systems.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Coluy Labs — Applied cryptography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  other: {
    "theme-color": "#FBFAF7",
  },
};

function MarkSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="mark" viewBox="0 0 100 100">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="30" strokeWidth="1.4" />
          <g strokeWidth="1.4">
            <line x1="50" y1="20" x2="50" y2="80" />
            <line x1="20" y1="50" x2="80" y2="50" />
            <line x1="28.8" y1="28.8" x2="71.2" y2="71.2" />
            <line x1="71.2" y1="28.8" x2="28.8" y2="71.2" />
            <line x1="35" y1="24" x2="65" y2="76" />
            <line x1="65" y1="24" x2="35" y2="76" />
            <line x1="24" y1="35" x2="76" y2="65" />
            <line x1="24" y1="65" x2="76" y2="35" />
          </g>
          <g strokeWidth="2">
            <rect x="45" y="4" width="10" height="9" rx="1" />
            <rect x="45" y="4" width="10" height="9" rx="1" transform="rotate(60 50 50)" />
            <rect x="45" y="4" width="10" height="9" rx="1" transform="rotate(120 50 50)" />
            <rect x="45" y="4" width="10" height="9" rx="1" transform="rotate(180 50 50)" />
            <rect x="45" y="4" width="10" height="9" rx="1" transform="rotate(240 50 50)" />
            <rect x="45" y="4" width="10" height="9" rx="1" transform="rotate(300 50 50)" />
          </g>
        </g>
        <circle cx="50" cy="50" r="5.5" fill="currentColor" />
      </symbol>
    </svg>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable}`}
      >
        <MarkSprite />
        {children}
      </body>
    </html>
  );
}
