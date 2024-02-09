import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeButton from "./_component/common/ThemeButton";

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
  const themeInitializerScript = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
  })()
  `;
  function setInitialColorMode() {
    function getInitialColorMode() {
      const savedDarkMode = localStorage.getItem("darkMode");
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const initialDarkMode =
        savedDarkMode === null
          ? prefersDarkMode
          : JSON.parse(savedDarkMode) === "dark";
      return initialDarkMode;
    }

    const currentColorMode = getInitialColorMode();

    if (currentColorMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializerScript,
          }}
        />
        <main className="relative mx-auto h-[100dvh] max-w-[360px] overscroll-y-none px">
          {children}
          <ThemeButton />
        </main>
      </body>
    </html>
  );
}
