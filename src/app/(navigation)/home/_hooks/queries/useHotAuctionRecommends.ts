import { useQuery } from "@tanstack/react-query";

import { getHotAuctionRecommends } from "@/app/(navigation)/home/_api/getAuctionRecommends";
import { RecommendAuctionsResponse } from "@/utils/types/auction/recommendAuction";

const useHotAuctionRecommends = () => {
  const { data, isPending } = useQuery<RecommendAuctionsResponse>({
    queryKey: ["auction"],
    queryFn: getHotAuctionRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000
  });

  return { data: data?.content, isPending };
};

export default useHotAuctionRecommends;
