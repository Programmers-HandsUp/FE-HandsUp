"use client";

import { getCookie, setCookie } from "@/utils/function/cookie";
import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = getCookie({ name: "theme" });
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return savedDarkMode === null
        ? prefersDarkMode
        : savedDarkMode === "dark";
    }
  });

  const toggleDarkMode = () => {
    const updatedDarkMode = !dark;
    setCookie({ name: "theme", value: updatedDarkMode ? "dark" : "light" });
    setDark(updatedDarkMode);
  };

  useEffect(() => {
    if (dark === undefined) return;
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return { dark, toggleDarkMode };
};

export default useDarkMode;
