import "@/styles/tailwind.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// basePath needs to be reflected in the OG image URL because absolute social
// preview URLs are required (LinkedIn, Twitter, Slack won't resolve relative).
// Reads NEXT_PUBLIC_BASE_PATH so deploys at root (Vercel) and at a sub-path
// (GitHub Pages) both produce correct URLs without code changes.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const OG_IMAGE = `${BASE_PATH}/assets/og.png`;

// Site URL used as metadataBase for OG/Twitter cards.
//   - Vercel sets VERCEL_URL automatically (hostname only, we add scheme)
//   - Otherwise honour NEXT_PUBLIC_SITE_URL if set
//   - Final fallback is the GitHub Pages canonical
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://faresfouzinz.github.io");

export const metadata: Metadata = {
  title: "fares:~$ whoami",
  description:
    "Fares Alnzlawe - Software Engineer building end-to-end data-driven applications. Data engineering, Flutter, and scalable backends.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Fares Alnzlawe - Software Engineer",
    description:
      "Data engineering, Flutter, and scalable backends. KFUPM '24.",
    type: "website",
    url: `${BASE_PATH}/`,
    siteName: "Fares Alnzlawe",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Fares Alnzlawe - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fares Alnzlawe - Software Engineer",
    description:
      "Data engineering, Flutter, and scalable backends. KFUPM '24.",
    images: [OG_IMAGE],
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230a0e14'/%3E%3Ctext x='50%25' y='58%25' font-family='monospace' font-size='18' font-weight='700' fill='%237ce38b' text-anchor='middle'%3E%3E_%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body className="min-h-screen bg-bg-deep text-ink antialiased">
        {/* CRT overlay stack */}
        <div className="crt-vignette" aria-hidden />
        <div className="crt-scanlines animate-flicker" aria-hidden />
        <div className="crt-beam" aria-hidden />
        {children}
      </body>
    </html>
  );
}
