"use client";
import { useEffect, useState } from "react";

const useVisibilityOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      setLastScrollTop((prevScrollTop) => {
        setIsVisible(currentScrollTop < prevScrollTop);

        return currentScrollTop <= 0 ? 0 : currentScrollTop;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
};

export default useVisibilityOnScroll;
