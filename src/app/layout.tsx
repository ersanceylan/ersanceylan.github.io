import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import TopNavigation from "@/components/TopNavigation";
import { I18nProvider } from "@/components/I18nProvider";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ersan Ceylan",
  description: "Full-stack developer and software engineer portfolio",
  keywords: [
    "developer",
    "portfolio",
    "react",
    "react native",
    "nextjs",
    "typescript",
    "ersan",
    "ceylan",
    "full-stack",
    "software",
    "engineer",
  ],
  authors: [{ name: "Ersan Ceylan" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${robotoSlab.className} antialiased`}>
        <I18nProvider>
          <ThemeProvider>
            <TopNavigation />
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
