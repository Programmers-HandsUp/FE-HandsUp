"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/function/cn";

import Icon from "../Icon";
import ThemeButton from "../ThemeButton";
import LoginLink from "./LoginLink";

interface NavigationProps {
  userId: number | undefined;
  initialVisible?: boolean;
}

const Navigation = ({ userId, initialVisible = false }: NavigationProps) => {
  const pathname = usePathname();
  return (
    <div className="flex justify-around items-center h-[56px] border-t border-l border-r  bg-white dark:bg-black border-[#96E4FF] rounded-t-2xl">
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
        href="auctions/new">
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
          <span className="text-[11px]">경매 등록</span>
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
            id="bookmark-fill-none"
            size={20}
            className="hover:bg-[#72dbfe]  rounded-full transition-colors"
          />
          <span className="text-[11px]">북마크</span>
        </div>
      </LoginLink>
      <LoginLink
        userId={userId}
        href={"/my"}>
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
