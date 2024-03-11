import { getHotAuctionRecommends } from "@/app/api/getAuctionRecommends";
import { AuctionDetailType } from "@/app/types/product";
import { useQuery } from "@tanstack/react-query";
import { Root } from "../../_component/DetailAuctionFeed";

const useHotAuctionRecommends = () => {
  const { data, isPending } = useQuery<Root>({
    queryKey: ["auction"],
    queryFn: getHotAuctionRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000
  });

  return { data: data?.content, isPending };
};

export default useHotAuctionRecommends;
