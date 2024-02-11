"use client";

import { MouseEvent } from "react";
import Icon from "../Icon";
import Toast from "../Toast";
import LoginLink from "./LoginLink";
import Link from "next/link";

interface NavigationProps {
  userId?: string;
}

const Navigation = ({ userId = undefined }: NavigationProps) => {
  const { show } = Toast();
  const handleLinkClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!userId) show("로그인이 필요한 서비스입니다.", "warn-solid");
  };

  return (
    <div className="flex justify-around items-center h-[56px] bg-[#96e4ff] rounded-t-2xl ">
      <Link href="/">
        <Icon
          id="home"
          fill="none"
          size={35}
          className="hover:bg-[#72dbfe] hover:text-gray-200 rounded-full transition-colors"
        />
      </Link>
      <LoginLink
        userId={userId}
        href={`/account/${userId}`}
        toastShow={handleLinkClick}
      >
        <Icon
          id="user-alt-fill"
          size={35}
          className="hover:bg-[#72dbfe] hover:fill-gray-200 hover:stroke-gray-200 rounded-full transition-colors"
        />
      </LoginLink>
      <LoginLink userId={userId} href="/create" toastShow={handleLinkClick}>
        <Icon
          id="box-add"
          size={35}
          className="hover:bg-[#72dbfe] hover:fill-gray-200 hover:stroke-gray-200 dark:fill-white rounded-full transition-colors"
        />
      </LoginLink>
      <LoginLink userId={userId} href="/chat" toastShow={handleLinkClick}>
        <Icon
          id="chat"
          size={35}
          className="hover:bg-[#72dbfe] hover:text-gray-200 hover:stroke-gray-200 rounded-full transition-colors"
        />
      </LoginLink>
    </div>
  );
};

export default Navigation;
