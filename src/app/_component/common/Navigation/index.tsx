"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import useSession from "@/app/_hooks/queries/useSession";
import { cn } from "@/utils/function/cn";
import { CheckLoginUserResponse } from "@/utils/types/user/users";

import Icon from "../Icon";
import ThemeButton from "../ThemeButton";
import LoginLink from "./LoginLink";

interface NavigationProps {
  user: CheckLoginUserResponse | undefined;
}

const Navigation = ({ user }: NavigationProps) => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const userData = user || session;

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
            size={25}
            className="hover:bg-[#72dbfe]rounded-full transition-colors"
          />
          <span className="text-[11px]">홈</span>
        </div>
      </Link>
      <LoginLink
        userId={userData?.userId}
        href="/chatrooms">
        <div
          className={cn(
            "flex flex-col items-center",
            `${pathname.includes("chatrooms") ? "text-[#96E4FF]" : "text-inherit"}`
          )}>
          <Icon
            id="chat-comment"
            size={25}
            className="hover:bg-[#72dbfe] rounded-full transition-colors fill-white"
          />
          <span className="text-[11px]">채팅</span>
        </div>
      </LoginLink>

      <LoginLink
        userId={userData?.userId}
        href="/auctions/new">
        <div
          className={cn(
            "flex flex-col items-center",
            `${pathname.includes("create") ? "text-[#96E4FF]" : "text-inherit"}`
          )}>
          <Icon
            id="box-add"
            size={25}
            className="hover:bg-[#72dbfe] dark:fill-white rounded-full transition-colors fill-black"
          />
          <span className="text-[11px]">경매 등록</span>
        </div>
      </LoginLink>

      <LoginLink
        userId={userData?.userId}
        href="/bookmark">
        <div
          className={cn(
            "flex flex-col items-center",
            `${pathname.includes("bookmark") ? "text-[#96E4FF]" : "text-inherit"}`
          )}>
          <Icon
            id="bookmark-fill-none"
            size={25}
            className="hover:bg-[#72dbfe]  rounded-full transition-colors"
          />
          <span className="text-[11px]">북마크</span>
        </div>
      </LoginLink>
      <LoginLink
        userId={userData?.userId}
        href={"/my"}>
        <div
          className={cn(
            "flex flex-col items-center",
            `${pathname.includes("account") ? "text-[#96E4FF]" : "text-inherit"}`
          )}>
          {userData ? (
            <div className="w-[25px] h-[25px] relative rounded-full overflow-hidden">
              <Image
                src={userData.profileImageUrl}
                fill
                alt="프로필이미지"
              />
            </div>
          ) : (
            <Icon
              id="user-alt-fill"
              size={25}
              className="hover:bg-[#72dbfe] rounded-full transition-colors fill-black"
            />
          )}

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
