import Link from "next/link";

import setMoneyUnitString from "@/utils/function/setMoneyUnitString";

import Spinner from "../../../../_component/common/Spinner";

interface AuctionBidsSectionProps {
  currentBiddingPrice: number;
  auctionId: number;
  isLogin: boolean;
  isLoginLoading: boolean;
  isSeller: boolean;
  auctionStatus: "입찰 중" | "거래 중" | "거래 완료";
}

const AuctionBidsSection = ({
  currentBiddingPrice,
  auctionId,
  isLogin,
  isSeller,
  isLoginLoading,
  auctionStatus
}: AuctionBidsSectionProps) => {
  return (
    <div className="flex justify-between items-center border-t-2 border-b-2 border-gray-400 py-2 px-4">
      <div className="flex flex-col">
        <span className="text-[13px]">현재 최고 입찰 금액</span>
        <span className="text-right font-semibold">
          ₩ {setMoneyUnitString(currentBiddingPrice)}원
        </span>
      </div>
      {isLoginLoading ? (
        <Spinner />
      ) : isSeller ? (
        <div></div>
      ) : auctionStatus === "입찰 중" && isLogin ? (
        <Link
          href={`/auctions/${auctionId}/purchase`}
          className="bg-[#96E4FF] p-2 rounded-lg hover:bg-[#55d4ff]">
          입찰 하기
        </Link>
      ) : auctionStatus === "입찰 중" ? (
        <Link
          href={"/signin"}
          className="bg-gray-500 p-2 rounded-lg hover:bg-[#55d4ff]">
          로그인하고 입찰하기
        </Link>
      ) : (
        <div>입찰 마감</div>
      )}
    </div>
  );
};

export default AuctionBidsSection;
