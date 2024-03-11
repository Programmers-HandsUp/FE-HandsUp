import { useQuery } from "@tanstack/react-query";

import { getAuctionDetail } from "@/app/api/getAuctionDetail";

const useGetAuctionDetail = ({ auctionId }: { auctionId: number }) => {
  const { data } = useQuery({
    queryKey: ["product", auctionId],
    queryFn: () => getAuctionDetail({ auctionId })
  });

  return { data };
};

export default useGetAuctionDetail;
