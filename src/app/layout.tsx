import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeScript from "./_component/ThemeScript";
import Providers from "@/utils/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hands Up",
  description: "Used goods traded at auction"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeScript />
        <main className="relative mx-auto h-[100dvh] max-w-[360px] overscroll-y-none px">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
