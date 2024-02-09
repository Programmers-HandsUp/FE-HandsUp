"use client";

import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialDarkMode =
      savedDarkMode === null
        ? prefersDarkMode
        : JSON.parse(savedDarkMode) === "dark";

    setDark(initialDarkMode);
  }, []);

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
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return { dark, toggleDarkMode };
};

export default useDarkMode;
