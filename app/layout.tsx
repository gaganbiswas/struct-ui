import Header from "@/components/shared/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Crimson_Pro, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
export const crimson = Crimson_Pro({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Recon Icons",
  description:
    "A set of 16x16 pixel-perfect icons designed by the designers & developers for the designers & developers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
