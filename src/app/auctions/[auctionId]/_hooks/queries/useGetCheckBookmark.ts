import { useQuery } from "@tanstack/react-query";

import { getCheckBookmark } from "@/app/_api/bookmark";

const useGetCheckBookmark = ({ auctionId }: { auctionId: number }) => {
  const { data } = useQuery({
    queryKey: ["auction", auctionId, "bookmark"],
    queryFn: () => getCheckBookmark({ auctionId })
  });

  return { data };
};

export default useGetCheckBookmark;
