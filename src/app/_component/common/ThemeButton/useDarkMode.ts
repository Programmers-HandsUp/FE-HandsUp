"use client";

import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [dark, setDark] = useState<boolean | undefined>(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = window.localStorage.getItem("darkMode");
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const initialDarkMode =
        savedDarkMode === null
          ? prefersDarkMode
          : JSON.parse(savedDarkMode) === "dark";
      return initialDarkMode;
    }
  });

  const toggleDarkMode = () => {
    setDark((state) => {
      const update = !state;
      localStorage.setItem(
        "darkMode",
        JSON.stringify(update ? "dark" : "light")
      );
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
