import { useSuspenseQuery } from "@tanstack/react-query";

import { StatusEn } from "@/utils/types/user/mypage";

import { saleList } from "../../_api/mypage";

const useSaleStatusList = (userId: number, status: StatusEn) => {
  return useSuspenseQuery({
    queryKey: ["saleList", userId, status],
    queryFn: () => saleList(userId, status),
    select: (data) => data.content
  });
};

export default useSaleStatusList;
