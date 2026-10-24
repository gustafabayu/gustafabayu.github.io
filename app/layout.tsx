import type { Metadata } from "next";
import "../src/input.css";

export const metadata: Metadata = {
  title: "Gustafa Bayu — Software Engineer & SaaS Builder",
  description: "Gustafa Bayu builds backend systems, APIs, and web applications for businesses while exploring SaaS products of his own.",
  keywords: ["software engineer", "backend developer", "API development", "web applications", "SaaS", "freelance developer"],
  authors: [{ name: "Gustafa Bayu" }],
  openGraph: {
    title: "Gustafa Bayu — Software Engineer & SaaS Builder",
    description: "Gustafa Bayu builds backend systems, APIs, and web applications for businesses while exploring SaaS products of his own.",
    url: "https://gustafabayu.github.io/",
    siteName: "Gustafa Bayu",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
