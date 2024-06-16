import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo Base",
  description: "Basic Todo app built with Supabase",
  icons: [
    {
      rel: "icon",
      url: "/icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('h-full', inter.className)}>{children}</body>
    </html>
  );
}
