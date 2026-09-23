import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ParticleBackground from "@/components/particle-background";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import FloatingContact from "@/components/FloatingContact";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import TawkChat from "@/components/TawkChat";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BIMMERPARTSAUTO | Quality Automotive Parts Marketplace",
  description:
    "Discover an exclusive collection of car parts. get quality parts for hypercars to electric marvels, find your next masterpiece at BimmerPartAuto.",
  keywords: [
    "luxury cars",
    "hypercar parts",
    "sports cars",
    "premium car parts",
    "car marketplace",
    "automotive",
    "supercar",
    "electric parts",
  ],
  openGraph: {
    title: "BIMMERPARTS | Premium Automotive Marketplace",
    description:
      "Discover the world's most extraordinary car parts at BimmerParts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-surface text-white antialiased">
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        {/* <FloatingContact /> */}
        <Footer />
        <TawkChat />
      </body>
    </html>
  );
}