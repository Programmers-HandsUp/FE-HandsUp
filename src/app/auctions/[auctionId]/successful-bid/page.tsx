"use client";

import Link from "next/link";

import DefaultComponent from "./_component/DefaultComponent";
import useGetSuccessfulData from "./_hooks/useGetSuccessfulData";

interface SuccessFulBidPageProps {
  params: { auctionId: string };
}

const SuccessfulBidPage = ({ params }: SuccessFulBidPageProps) => {
  const { auctionId } = params;

  const { auction, bids } = useGetSuccessfulData({
    auctionId: Number(auctionId)
  });

  const loginNickname = "오리";

  const currentBidding = bids.content.find((x) => x.tradingStatus === "진행중");

  return (
    <div className="flex flex-col gap-16">
      <DefaultComponent
        biddingCount={bids.content.length}
        bookmarkCount={auction.bookmarkCount}
        buyerNickName={loginNickname}
        currentBiddingPrice={currentBidding?.biddingPrice}
        initialBiddingPrice={auction.initPrice}
        sellerNickName={auction.sellerInfo.nickname}
        imgUrl={auction.imageUrls[0]}
      />
      <div className="relative flex justify-center">
        <Link
          href={`/auctions/${auctionId}/bidderList?sellerId=${auction.sellerInfo.userId}`}
          className="bg-[#96E4FF] rounded-lg p-2 hover:bg-[#55d4ff] w-full text-center text-black">
          입찰자 목록 페이지로 가기
        </Link>
      </div>
    </div>
  );
};

export default SuccessfulBidPage;
