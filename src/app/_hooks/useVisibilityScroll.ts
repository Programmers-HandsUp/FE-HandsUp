"use client";

import { useEffect, useState } from "react";

import { throttle } from "@/utils/function/throttle";

const useVisibilityOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      setLastScrollTop((prevScrollTop) => {
        setIsVisible(currentScrollTop < prevScrollTop);

        return currentScrollTop <= 0 ? 0 : currentScrollTop;
      });
    }, 500);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
};

export default useVisibilityOnScroll;
