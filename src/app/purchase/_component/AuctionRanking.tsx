import { useEffect, useState } from "react";

import { useGetTopThreeRank } from "../_hooks/useGetTopThreeRank";

interface AuctionRankingProps {
  auctionId: number;
}

const AuctionRanking = ({ auctionId }: AuctionRankingProps) => {
  const { data: top3, isLoading } = useGetTopThreeRank({ auctionId });
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleString());
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (top3) return <div>오류 발생</div>;

  const bidderElements = top3.map((data, index) => (
    <div
      key={index}
      style={{ display: "flex", gap: "10px" }}>
      <div>{data.bidderNickname}</div>
      <div>{data.biddingPrice.toLocaleString()}원</div>
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
