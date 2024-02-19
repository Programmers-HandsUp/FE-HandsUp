"use client";

import Link from "next/link";
import { MouseEvent, ReactNode } from "react";
import Toast from "../Toast";
import { useRouter } from "next/navigation";

interface LoginLinkProps {
  userId: string | undefined;
  href: string;
  children: ReactNode;
}

const LoginLink = ({ userId, href, children }: LoginLinkProps) => {
  const { show } = Toast();
  const router = useRouter();

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!userId) {
      e.preventDefault();
      show("로그인이 필요한 서비스입니다.", "warn-solid");
      if (href.includes("account")) router.push("/login");
    }
  };

  return (
    <Link href={href} onClick={handleLinkClick}>
      {children}
    </Link>
  );
};
export default LoginLink;
