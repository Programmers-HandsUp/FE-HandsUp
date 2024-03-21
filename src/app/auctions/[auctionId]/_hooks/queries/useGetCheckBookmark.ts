import { useQuery } from "@tanstack/react-query";

import { getCheckBookmark } from "@/app/_api/bookmark";
import { authCheck } from "@/utils/function/authCheck";

const useGetCheckBookmark = ({ auctionId }: { auctionId: number }) => {
  const isCheckValid = authCheck();

  const { data } = useQuery({
    queryKey: ["auction", auctionId, "bookmark"],
    queryFn: () => getCheckBookmark({ auctionId }),
    enabled: isCheckValid !== undefined
  });

  return { data };
};

export default useGetCheckBookmark;
