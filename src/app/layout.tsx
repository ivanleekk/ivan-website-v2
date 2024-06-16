import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Toaster} from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivan's Portfolio!",
  description: "Portfolio and Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={'scroll-smooth'}>
        <body className={`${inter.className}`}>
        <main>{children}</main>
        <Toaster />
        </body>
        </html>
    );
}
