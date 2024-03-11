import { useEffect, useState } from "react";

interface AuctionRankingProps {
  maxPrice: number;
}

const AuctionRanking = ({ maxPrice }: AuctionRankingProps) => {
  const [updateTime, setUpdateTime] = useState("");

  const commaPrice = maxPrice.toLocaleString();
  const padNumber = (num: number) => num.toString().padStart(2, "0");

  useEffect(() => {
    const currentTime = new Date();
    const updateTime = `${currentTime.getFullYear()}.${padNumber(currentTime.getMonth() + 1)}.${padNumber(currentTime.getDate())} ${padNumber(currentTime.getHours())}:${padNumber(currentTime.getMinutes())}:${padNumber(currentTime.getSeconds())}`;
    setUpdateTime(updateTime);
  }, []);

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
          업데이트 시간 {updateTime}
        </span>
      </div>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch"
        }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <div>최고 입찰가</div>
          <div>{commaPrice}</div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div>닉네임AA</div>
          <div>{commaPrice}원</div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div>닉네임BB</div>
          <div>29,000원</div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div>닉네임CC</div>
          <div>25,000원</div>
        </div>
      </div>
    </div>
  );
};

export default AuctionRanking;
