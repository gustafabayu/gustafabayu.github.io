import type { Metadata, Viewport } from "next";
import { DM_Sans, Saira_Semi_Condensed } from "next/font/google";
import "../src/input.css";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Saira_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gustafa Bayu — Application Developer",
  description: "Gustafa Bayu is an application developer focused on backend systems, APIs, and web applications, with more than 10 years of professional experience.",
  keywords: ["application developer", "backend systems", "API development", "web applications"],
  authors: [{ name: "Gustafa Bayu" }],
  openGraph: {
    title: "Gustafa Bayu — Application Developer",
    description: "Gustafa Bayu is an application developer focused on backend systems, APIs, and web applications, with more than 10 years of professional experience.",
    url: "https://gustafabayu.github.io/",
    siteName: "Gustafa Bayu",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e45d6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
