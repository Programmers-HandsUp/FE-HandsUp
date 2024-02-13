import Link from "next/link";
import { MouseEvent, ReactNode, TouchEvent } from "react";
import Toast from "../Toast";

interface LoginLinkProps {
  userId: string | undefined;
  href: string;
  children: ReactNode;
}

const LoginLink = ({ userId, href, children }: LoginLinkProps) => {
  const { show } = Toast();

  const handleLinkClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!userId) show("로그인이 필요한 서비스입니다.", "warn-solid");
  };

  return userId ? (
    <Link href={href}>{children}</Link>
  ) : (
    <button onClick={handleLinkClick}>{children}</button>
  );
};
export default LoginLink;
