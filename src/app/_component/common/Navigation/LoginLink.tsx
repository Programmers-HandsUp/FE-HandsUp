import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

interface NavigationProps {
  userId: string | undefined;
  href: string;
  children: ReactNode;
  toastShow?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const LoginLink = ({ userId, href, children, toastShow }: NavigationProps) => {
  return userId ? (
    <Link href={href}>{children}</Link>
  ) : (
    <button onClick={toastShow}>{children}</button>
  );
};
export default LoginLink;
