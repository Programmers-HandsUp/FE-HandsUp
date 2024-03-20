import Link from "next/link";
import { PropsWithChildren } from "react";

import Icon from "@/app/_component/common/Icon";

interface LayoutProps {
  title: React.ReactNode;
  url?: "buying?status=bidding" | "selling?status=bidding" | "review";
}

function BoxLayout({ title, url, children }: PropsWithChildren<LayoutProps>) {
  return (
    <div className="my-6">
      {url ? (
        <Link href={`/my/${url}`}>
          <div className="flex justify-between items-center text-lg font-semibold">
            <div>{title}</div>
            <Icon id="arrow-right" />
          </div>
        </Link>
      ) : (
        <p className="text-lg font-semibold">{title}</p>
      )}
      {children}
    </div>
  );
}

export default BoxLayout;