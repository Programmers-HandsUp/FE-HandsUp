"use client";

import { ComponentProps, ReactElement } from "react";
import useDarkMode from "./useDarkMode";
import { cn } from "@/utils/cn";

interface ThemeButtonProps extends ComponentProps<"button"> {
  darkIcon: ReactElement;
  lightIcon: ReactElement;
}

const ThemeButton = ({ className, darkIcon, lightIcon }: ThemeButtonProps) => {
  const { dark, toggleDarkMode } = useDarkMode();

  return (
    <button
      className={cn(
        "z-10 rounded-full shadow-md dark:bg-black dark:fill-primary dark:shadow-gray-800",
        className
      )}
      onClick={toggleDarkMode}
    >
      {dark ? darkIcon : lightIcon}
    </button>
  );
};

export default ThemeButton;
