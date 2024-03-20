"use client";

import { useEffect, useState } from "react";

import { getCookie, setCookie } from "@/utils/function/cookie";

const useDarkMode = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = getCookie({ name: "theme" });

      return savedDarkMode === null ? false : savedDarkMode === "dark";
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
