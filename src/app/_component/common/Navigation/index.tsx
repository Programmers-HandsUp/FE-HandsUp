"use client";

import Link from "next/link";

import useVisibilityOnScroll from "@/app/_hooks/useVisibilityScroll";

import Icon from "../Icon";
import ThemeButton from "../ThemeButton";
import LoginLink from "./LoginLink";

const Navigation = () => {
  const isVisible = useVisibilityOnScroll();
  //TODO: 유저아이디 가져오는 함수 구현 후 추가
  const userId = "sfasfasf";
  return (
    <div
      className="flex justify-around items-center h-[56px] border-t border-l border-r  bg-white dark:bg-black border-[#96E4FF] rounded-t-2xl"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(200%)",
        transition: "transform 0.3s ease-in-out"
      }}>
      <Link href="/">
        <div className="flex flex-col items-center">
          <Icon
            id="home"
            fill="none"
            size={20}
            className="hover:bg-[#72dbfe] hover:text-gray-200 rounded-full transition-colors"
          />
          <span className="text-[11px]">홈</span>
        </div>
      </Link>
      <LoginLink
        userId={userId}
        href="/chatrooms">
        <div className="flex flex-col items-center">
          <Icon
            id="chat"
            size={20}
            className="hover:bg-[#72dbfe] hover:text-gray-200 hover:stroke-gray-200 rounded-full transition-colors"
          />
          <span className="text-[11px]">채팅</span>
        </div>
      </LoginLink>

      <LoginLink
        userId={userId}
        href="/create">
        <div className="flex flex-col items-center">
          <Icon
            id="box-add"
            size={20}
            className="hover:bg-[#72dbfe] hover:fill-gray-200 hover:stroke-gray-200 dark:fill-white rounded-full transition-colors fill-black"
          />
          <span className="text-[11px]">상품 등록</span>
        </div>
      </LoginLink>

      <LoginLink
        userId={userId}
        href="/bookmark">
        <div className="flex flex-col items-center">
          <Icon
            id="bookmark"
            size={20}
            className="hover:bg-[#72dbfe] hover:fill-gray-200 hover:stroke-gray-200 rounded-full transition-colors"
          />
          <span className="text-[11px]">북마크</span>
        </div>
      </LoginLink>
      <LoginLink
        userId={userId}
        href={`/account/${userId}`}>
        <div className="flex flex-col items-center">
          <Icon
            id="user-alt-fill"
            size={20}
            className="hover:bg-[#72dbfe] hover:fill-gray-200 hover:stroke-gray-200 rounded-full transition-colors fill-black"
          />
          <span className="text-[11px]">마이페이지</span>
        </div>
      </LoginLink>
      <div className="absolute -top-12 right-0">
        <ThemeButton />
      </div>
    </div>
  );
};

export default Navigation;
