import { useQuery } from "@tanstack/react-query";

import { getCheckBookmark } from "@/app/_api/bookmark";

const useGetCheckBookmark = ({
  auctionId,
  isLogin
}: {
  auctionId: number;
  isLogin: boolean;
}) => {
  const { data } = useQuery({
    queryKey: ["auction", auctionId, "bookmark"],
    queryFn: () => getCheckBookmark({ auctionId }),
    enabled: isLogin
  });

  return { data };
};

export default useGetCheckBookmark;
