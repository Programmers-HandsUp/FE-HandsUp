"use client";

import Icon from "../Icon";
import LoginLink from "./LoginLink";
import Link from "next/link";

interface NavigationProps {
  userId?: string;
}

const Navigation = ({ userId }: NavigationProps) => {
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

      <LoginLink userId={userId} href={`/account/${userId}`}>
        <Icon
          id="user-alt-fill"
          size={35}
          className="hover:bg-[#72dbfe] hover:fill-gray-200 hover:stroke-gray-200 rounded-full transition-colors"
        />
      </LoginLink>
      <LoginLink userId={userId} href="/create">
        <Icon
          id="box-add"
          size={35}
          className="hover:bg-[#72dbfe] hover:fill-gray-200 hover:stroke-gray-200 dark:fill-white rounded-full transition-colors"
        />
      </LoginLink>
      <LoginLink userId={userId} href="/chat">
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
