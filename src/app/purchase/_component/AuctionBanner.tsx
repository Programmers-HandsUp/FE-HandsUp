"use client";

import { useQuery } from "@tanstack/react-query";

import { AuctionData } from "@/utils/types/auction/registerAuction";

const fetchAuctionData = async (): Promise<AuctionData> => {
  const response = await fetch("http://13.209.236.54:8080/api/auctions/3");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useAuctionData = () => {
  const { data, isLoading } = useQuery({
    queryFn: fetchAuctionData,
    queryKey: ["auction"]
  });
  return { data, isLoading };
};

const AuctionBanner = () => {
  const { data: auction, isLoading } = useAuctionData();

  if (isLoading) return <div>Loading...</div>;

  const commaStart = auction?.initPrice;
  const commaMax = auction?.initPrice;

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
