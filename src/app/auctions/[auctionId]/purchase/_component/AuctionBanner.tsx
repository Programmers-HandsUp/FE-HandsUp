import setMoneyUnitString from "@/utils/function/setMoneyUnitString";

interface AuctionBanner {
  initPrice: number;
  currentBiddingPrice: number;
}

const AuctionBanner = ({ initPrice, currentBiddingPrice }: AuctionBanner) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "space-between",
        border: "4px solid red",
        padding: "10px"
      }}>
      <div className="flex gap-3 text-sm">
        <div>시작가</div>
        <div>₩{setMoneyUnitString(initPrice)}</div>
      </div>
      <div className="flex gap-3 text-xl">
        <div>현재 최고가</div>
        <div className="text-red-400">
          <strong>₩{setMoneyUnitString(currentBiddingPrice)}</strong>
        </div>
      </div>
    </div>
  );
};

export default AuctionBanner;
