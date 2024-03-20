import { useEffect, useState } from "react";

import { Top3BidResponse } from "@/utils/types/bid/top3Bid";

interface AuctionRankingProps {
  top3: Top3BidResponse;
}

const AuctionRanking = ({ top3 }: AuctionRankingProps) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleString());
  }, []);

  const bidderElements = top3.content.map((data, index) => (
    <div
      key={index}
      className="flex justify-between">
      <div className="w-[100px] whitespace-nowrap overflow-hidden text-ellipsis">
        <span>{data.bidderNickname}</span>
      </div>
      <div className="text-[#96c0ff]">
        {index === 0 && "🔥"}
        {data.biddingPrice.toLocaleString()}원
      </div>
    </div>
  ));

  return (
    <div className="p-[20px] border-t-2 border-b-2 border-t-gray-400 border-b-gray-400 flex flex-col justify-between">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <span className="font-bold text-lg">경매 진행중!</span>
        <span className="text-[12px] text-gray-500">업데이트 시간 {time}</span>
      </div>
      <div className="w-full flex flex-col">{bidderElements}</div>
    </div>
  );
};

export default AuctionRanking;
