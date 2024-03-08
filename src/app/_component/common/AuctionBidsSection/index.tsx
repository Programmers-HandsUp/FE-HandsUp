import setMoneyUnitString from "@/utils/setMoneyUnitString";

interface AuctionBidsSectionProps {
  currentBiddingPrice: number;
  auctionId: number;
}

const AuctionBidsSection = ({
  currentBiddingPrice,
  auctionId
}: AuctionBidsSectionProps) => {
  return (
    <div className="flex justify-between items-center border-t-2 border-b-2 border-gray-400 py-2 px-4">
      <div className="flex flex-col">
        <span className="text-[13px]">현재 최고 입찰 금액</span>
        <span className="text-right font-semibold">
          ₩ {setMoneyUnitString(currentBiddingPrice)}원
        </span>
      </div>
      {/*TODO 구매페이지 이동 추가 */}
      <button className="bg-[#96E4FF] p-2 rounded-lg hover:bg-[#55d4ff]">
        입찰 하기
      </button>
    </div>
  );
};

export default AuctionBidsSection;