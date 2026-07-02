import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rabbani Shaik — Senior Product Manager, CRM & Customer Data Platforms",
  description:
    "Rabbani Mohammad Kuthubhe Shaik — Senior Product Manager specializing in CRM, Customer Data Platforms, identity resolution, and data governance at enterprise scale. Based in Dubai, UAE.",
  keywords: [
    "Rabbani Shaik",
    "Product Manager",
    "CRM",
    "Customer Data Platform",
    "CDP",
    "MoEngage",
    "Identity Resolution",
    "Data Governance",
    "Dubai",
  ],
  authors: [{ name: "Rabbani Mohammad Kuthubhe Shaik" }],
  openGraph: {
    title: "Rabbani Shaik — Senior Product Manager, CRM & Customer Data Platforms",
    description:
      "10+ years turning fragmented customer data into a unified, governed single source of truth across 85+ brands and 14 countries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
