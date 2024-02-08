import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hands Up",
  description: "중고물품을 실제 경매장처럼 사고 팔 수 있다?!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative mx-auto h-[100dvh] max-w-[360px] overscroll-y-none px">
          {children}
        </main>
      </body>
    </html>
  );
}
