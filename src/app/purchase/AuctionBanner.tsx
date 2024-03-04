const AuctionBanner = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "space-between",
        border: "4px solid red",
        margin: "10px",
        padding: "10px"
      }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>시작가</div>
        <div>₩10,000</div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>최고가</div>
        <div>₩30,000</div>
      </div>
    </div>
  );
};

export default AuctionBanner;
