import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import usePurchaseList from "@/app/(userpage)/_hooks/queries/usePurchaseList";
import useSaleList from "@/app/(userpage)/_hooks/queries/useSaleList";
import { cn } from "@/utils/function/cn";
import { statusMap } from "@/utils/mocks/api/mypageApis";
import { StatusEn } from "@/utils/types/user/mypage";

import { TabVariants } from "./Tab.variants";

interface TabProps {
  children: React.ReactNode;
  status: StatusEn;
}

type Path = "/my/buying" | "/my/selling";

function Tab({ children, status }: TabProps) {
  const basePath = usePathname() as Path;
  const searchParams = useSearchParams();
  const selectStatus = searchParams.get("status")?.toUpperCase() as StatusEn;

  const { data: purchaseCounts } = usePurchaseList();
  const { data: saleCounts } = useSaleList(5);

  const selectTab = selectStatus === status;
  const count = basePath === "/my/buying" ? purchaseCounts : saleCounts;

  return (
    <Link
      href={`${basePath}?status=${status}`}
      className="flex flex-col items-center relative">
      <p className={selectTab ? cn(TabVariants({ basePath })) : ""}>
        {count ? count[statusMap[status]] : 0}
      </p>
      <p className="pb-2">{children}</p>
      <p className={cn(TabVariants({ selectTab }))}></p>
    </Link>
  );
}

export default Tab;
