import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ethan Diedericks | Software Developer & Entrepreneur",
  description:
    "Full-stack developer specializing in Next.js, React, Python, and mobile app development. Founder of a software development company.",
  keywords: [
    "software developer",
    "full-stack",
    "Next.js",
    "React",
    ".NET",
    "C#",
    "Python",
    "mobile apps",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
