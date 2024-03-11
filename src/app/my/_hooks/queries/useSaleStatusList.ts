import { useQuery } from "@tanstack/react-query";

import { saleList } from "../../../api/mypage";
import { Status } from "../../types";

const useSaleStatusList = (userId: number, status: Status) => {
  return useQuery({
    queryKey: ["saleList", userId, status],
    queryFn: () => saleList(userId, status),
    staleTime: 60 * 1000
  });
};

export default useSaleStatusList;
