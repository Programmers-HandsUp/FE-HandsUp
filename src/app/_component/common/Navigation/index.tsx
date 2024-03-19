"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import useSession from "@/app/_hooks/queries/useSession";
import useVisibilityOnScroll from "@/app/_hooks/useVisibilityScroll";
import { cn } from "@/utils/function/cn";

import Icon from "../Icon";
import ThemeButton from "../ThemeButton";
import LoginLink from "./LoginLink";

const Navigation = () => {
  const isVisible = useVisibilityOnScroll();
  const pathname = usePathname();

  const { data, isLoading } = useSession();
  if (isLoading) return <div>로딩 중</div>;
  const userId = data?.userId;

  return (
    <div
      className="flex justify-around items-center h-[56px] border-t border-l border-r  bg-white dark:bg-black border-[#96E4FF] rounded-t-2xl"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(200%)",
        transition: "transform 0.3s ease-in-out"
      }}>
      <Link href="/home">
        <div
          className={cn(
            "flex flex-col items-center",
            `${pathname.includes("home") ? "text-[#96E4FF]" : "text-inherit"}`
          )}>
          <Icon
            id="home"
            fill="none"
            size={20}
            className="hover:bg-[#72dbfe]rounded-full transition-colors"
          />
          <span className="text-[11px]">홈</span>
        </div>
      </Link>
      <LoginLink
        userId={userId}
        href="/chatrooms">
        <div
          className={cn(
            "flex flex-col items-center",
            `${pathname.includes("chatrooms") ? "text-[#96E4FF]" : "text-inherit"}`
          )}>
          <Icon
            id="chat-comment"
            size={20}
            className="hover:bg-[#72dbfe] rounded-full transition-colors fill-white"
          />
          <span className="text-[11px]">채팅</span>
        </div>
      </LoginLink>

      <LoginLink
        userId={userId}
        href="/create">
        <div
          className={cn(
            "flex flex-col items-center",
            `${pathname.includes("create") ? "text-[#96E4FF]" : "text-inherit"}`
          )}>
          <Icon
            id="box-add"
            size={20}
            className="hover:bg-[#72dbfe] dark:fill-white rounded-full transition-colors fill-black"
          />
          <span className="text-[11px]">상품 등록</span>
        </div>
      </LoginLink>

      <LoginLink
        userId={userId}
        href="/bookmark">
        <div
          className={cn(
            "flex flex-col items-center",
            `${pathname.includes("bookmark") ? "text-[#96E4FF]" : "text-inherit"}`
          )}>
          <Icon
            id="bookmark"
            size={20}
            className="hover:bg-[#72dbfe]  rounded-full transition-colors"
          />
          <span className="text-[11px]">북마크</span>
        </div>
      </LoginLink>
      <LoginLink
        userId={userId}
        href={`/account/${userId}`}>
        <div
          className={cn(
            "flex flex-col items-center",
            `${pathname.includes("account") ? "text-[#96E4FF]" : "text-inherit"}`
          )}>
          <Icon
            id="user-alt-fill"
            size={20}
            className="hover:bg-[#72dbfe] rounded-full transition-colors fill-black"
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
