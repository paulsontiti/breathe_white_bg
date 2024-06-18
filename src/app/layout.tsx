import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Breathe",
  description:
    "Discover a breath of fresh air with Breathe, the all-natural lung supplement designed to support healthy respiratory function. Whether you or your loved ones experience occasional breathing difficulties or chronic respiratory issues, Breathe is here to help. Formulated with a blend of powerful herbs and nutrients, our supplement aims to enhance lung capacity, reduce inflammation, and promote overall respiratory health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
