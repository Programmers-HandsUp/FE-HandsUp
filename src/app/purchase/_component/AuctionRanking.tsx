import { useEffect, useState } from "react";

import { useBidders } from "../_hooks/useBidders";

const AuctionRanking = () => {
  const { data: bidders, error } = useBidders();
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleString());
  }, []);

  if (error) return <div> {error.message}</div>;

  const bidderElements = bidders?.map((bidder, index) => (
    <div
      key={index}
      style={{ display: "flex", gap: "10px" }}>
      <div>{bidder.bidderNickname}</div>
      <div>{bidder.biddingPrice.toLocaleString()}원</div>
    </div>
  ));

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid",
        borderColor: "lightgray transparent lightgray transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        alignContent: "space-between"
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <span>경매 진행중!</span>
        <span style={{ fontSize: "12px", color: "lightgray" }}>
          업데이트 시간 {time}
        </span>
      </div>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch"
        }}>
        {bidderElements}
      </div>
    </div>
  );
};

export default AuctionRanking;
