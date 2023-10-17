import Header from "@/components/shared/Header";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { cn } from "@/lib/utils";
import { inter } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nsctwa.com"),
  title: "Struct Icons",
  description:
    "A set of 16x16 pixel-perfect icons designed by the designers & developers for the designers & developers.",
  openGraph: {
    title: "Struct Icons",
    description:
      "A set of 16x16 pixel-perfect icons designed by the designers & developers for the designers & developers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-gray-50 relative font-sans", inter.className)}>
        <Header />
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GETBPKXGDR" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-GETBPKXGDR');
          `}
        </Script>
      </body>
    </html>
  );
}
