"use client";

import { getCookie, setCookie } from "@/utils/cookie";
import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [dark, setDark] = useState<boolean | undefined>(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = getCookie({ name: "theme" });
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const initialDarkMode =
        savedDarkMode === null ? prefersDarkMode : savedDarkMode === "dark";
      return initialDarkMode;
    }
  });

  const toggleDarkMode = () => {
    setDark((state) => {
      const update = !state;
      setCookie({ name: "theme", value: update ? "dark" : "light" });
      return update;
    });
  };

  useEffect(() => {
    if (dark === undefined) return;
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return { dark, toggleDarkMode };
};

export default useDarkMode;
