import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const geistHeading = Geist({ subsets: ["latin"], variable: "--font-heading" });

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanvir | CSE Undergraduate & Full-Stack Developer",
  description:
    "Final-year CSE student at BRAC University, passionate about backend development and competitive programming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full scroll-smooth", "antialiased", geistMono.variable, "font-sans", inter.variable, geistHeading.variable)}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="flex min-h-full flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
