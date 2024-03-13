import { useQuery } from "@tanstack/react-query";

import { Status } from "@/utils/types/user/mypage";

import { saleList } from "../../_api/mypage";

const useSaleStatusList = (userId: number, status: Status) => {
  return useQuery({
    queryKey: ["saleList", userId, status],
    queryFn: () => saleList(userId, status),
    staleTime: 60 * 1000
  });
};

export default useSaleStatusList;
