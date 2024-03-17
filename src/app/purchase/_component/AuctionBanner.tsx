"use client";

import { useQuery } from "@tanstack/react-query";

import { getAuctionData } from "../_api/getAuctionData";

export const useAuctionData = () => {
  const { data, isLoading } = useQuery({
    queryFn: getAuctionData,
    queryKey: ["auction", auctionId]
  });
  return { data, isLoading };
};

const AuctionBanner = () => {
  const { data: auction } = useAuctionData();

  const commaStart = auction?.initPrice;
  const commaMax = auction?.currentBiddingPrice;

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
