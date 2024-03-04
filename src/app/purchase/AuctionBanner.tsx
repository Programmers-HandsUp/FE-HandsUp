interface AuctionBannerProps {
  startPrice: number;
  maxPrice: number;
}

const AuctionBanner = (props: AuctionBannerProps) => {
  const commaStart = props.startPrice.toLocaleString();
  const commaMax = props.maxPrice.toLocaleString();

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
        <div>₩{commaStart}</div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>최고가</div>
        <div>₩{commaMax}</div>
      </div>
    </div>
  );
};

export default AuctionBanner;