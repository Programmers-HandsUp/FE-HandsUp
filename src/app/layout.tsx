import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeButton from "./_component/common/ThemeButton";
import { cookies } from "next/headers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hands Up",
  description: "Used goods traded at auction",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const savedDarkMode = cookieStore.get("theme");

  const initialDarkMode =
    savedDarkMode === undefined ? "dark" : savedDarkMode.value;
  return (
    <html lang="en" className={initialDarkMode}>
      <body className={inter.className}>
        <main className="relative mx-auto h-[100dvh] max-w-[360px] overscroll-y-none px">
          {children}
        </main>
      </body>
    </html>
  );
}
