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
      <div style={{ display: "flex", gap: "10px" }}>
        <div>시작가</div>
        <div>₩{initPrice}</div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>최고가</div>
        <div>₩{currentBiddingPrice}</div>
      </div>
    </div>
  );
};

export default AuctionBanner;
