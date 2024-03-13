import { getAuctionDetail } from "@/app/_api/getAuctionDetail";
import { useQuery } from "@tanstack/react-query";

interface SuccessFulBidPageProps {
  params: { auctionId: number };
}

const SuccessfulBidPage = ({ params }: SuccessFulBidPageProps) => {
  const { auctionId } = params;
  const { data, isFetching } = useQuery({
    queryKey: ["product", auctionId],
    queryFn: () => getAuctionDetail({ auctionId })
  });

  if (isFetching) return <div>로딩 중</div>;

  return <div></div>;
};

export default SuccessfulBidPage;
