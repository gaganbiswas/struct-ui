import Header from "@/components/shared/Header";
import "./globals.css";
import type { Metadata } from "next";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Struct Icons",
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
      <body style={inter.style} className="bg-gray-50">
        <Header />
        {children}
      </body>
    </html>
  );
}
