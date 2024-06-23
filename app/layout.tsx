import type { Metadata } from "next";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rifahad's Portfolio",
  description: "Modern And Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider></body>
    </html>
  );
}
