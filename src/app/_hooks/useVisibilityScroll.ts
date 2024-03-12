"use client";
import { useState, useEffect } from "react";

const useVisibilityOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      setLastScrollTop((prevScrollTop) => {
        // 사용자가 아래로 스크롤할 때는 요소를 숨기고, 위로 스크롤할 때는 보이게 함
        setIsVisible(currentScrollTop < prevScrollTop);

        // 스크롤 위치가 맨 위일 때는 스크롤 위치를 0으로 설정
        return currentScrollTop <= 0 ? 0 : currentScrollTop;
      });
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
};

export default useVisibilityOnScroll;
