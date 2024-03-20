import Link from "next/link";

import Icon from "@/app/_component/common/Icon";

import { Title } from "../../[...slug]/page";

interface LayoutProps {
  id: number;
  title: Title;
  children: React.ReactNode;
}
function Layout({ title, id, children }: LayoutProps) {
  return (
    <>
      <div className="flex items-center py-3">
        <Link
          href={`/user/${id}`}
          className="absolute left-0">
          <Icon id="arrow-back" />
        </Link>
        <p className="mx-auto text-semibold  text-lg">{title}</p>
      </div>
      {children}
    </>
  );
}

export default Layout;
