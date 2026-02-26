import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const metadataBase = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : undefined;

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: "SwiftDrip | Comprehensive Wellness",
  description:
    "Philadelphia's physician-owned destination for IV therapy, lab testing, and rapid diagnostics. Recharge. Recover. Rejuvenate.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "SwiftDrip | Comprehensive Wellness",
    description:
      "Philadelphia's physician-owned destination for IV therapy, lab testing, and rapid diagnostics.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "SwiftDrip logo",
      },
    ],
    siteName: "SwiftDrip",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftDrip | Comprehensive Wellness",
    description:
      "Philadelphia's physician-owned destination for IV therapy, lab testing, and rapid diagnostics.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-blue-mist font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
