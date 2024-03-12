import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { MSWComponent } from "@/utils/MSWComponent";
import Providers from "@/utils/provider";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "#ffffff"
};

export const metadata: Metadata = {
  title: "Hands Up",
  description: "Used goods traded at auction",
  manifest: "/manifest.json",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const savedDarkMode = cookieStore.get("theme");

  const initialDarkMode =
    savedDarkMode === undefined ? "dark" : savedDarkMode.value;

  return (
    <html
      lang="en"
      className={initialDarkMode}>
      <body className={inter.className}>
        <MSWComponent />
        <main
          id="global-modal"
          className="relative mx-auto max-w-[360px] overscroll-y-none px">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
