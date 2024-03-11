"use client";

import { ComponentProps, useEffect, useState } from "react";
import useDarkMode from "./useDarkMode";
import { cn } from "@/utils/function/cn";
import Icon from "../Icon";

interface ThemeButtonProps extends ComponentProps<"button"> {}

const ThemeButton = ({ className }: ThemeButtonProps) => {
  const { dark, toggleDarkMode } = useDarkMode();
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <button
      className={cn(
        "z-10 rounded-full shadow-md dark:bg-black dark:fill-primary dark:shadow-gray-800",
        className
      )}
      onClick={toggleDarkMode}>
      {dark ? (
        <Icon
          id="dark"
          className="text-yellow-300"
        />
      ) : (
        <Icon
          id="light"
          className="text-red-400 fill-red-400"
        />
      )}
    </button>
  );
};

export default ThemeButton;
