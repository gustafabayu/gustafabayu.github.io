import type { Metadata } from "next";
import "../src/input.css";

export const metadata: Metadata = {
  title: "Portofolio - Gustafa",
  description: "Portofolio Gustafa Bayu, app developer.",
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
