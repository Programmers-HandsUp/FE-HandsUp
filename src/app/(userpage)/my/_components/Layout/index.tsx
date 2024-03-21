import Link from "next/link";

import Icon from "@/app/_component/common/Icon";

import { Title } from "../../[slug]/page";

interface LayoutProps {
  title: Title;
  children: React.ReactNode;
}
function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <div className="flex items-center py-3">
        <Link
          href="/my"
          className="absolute text-left">
          <Icon id="arrow-back" />
        </Link>
        <p className="mx-auto text-semibold  text-lg">{title}</p>
      </div>
      {children}
    </>
  );
}

export default Layout;
