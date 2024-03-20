"use client";

import Link from "next/link";

import useVisibilityOnScroll from "@/app/_hooks/useVisibilityScroll";
import { BidsResponse } from "@/utils/types/bid/bids";

import Icon from "../Icon";

interface AuctionDetailDataProps {
  auctionStatus: "입찰 중" | "거래 중" | "거래 완료";
  bookmarkCount: number;
  auctionId: number;
  bidsData: BidsResponse;
  sellerId: number;
}

const AuctionDetailFooterBar = ({
  auctionStatus,
  bidsData,
  auctionId,
  sellerId,
  bookmarkCount
}: AuctionDetailDataProps) => {
  const isVisible = useVisibilityOnScroll();
  return (
    <div
      className="fixed flex justify-between bottom-0 border-t-2 border-t-gray-400 min-w-[360px] py-4 dark:bg-black bg-white"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s ease-in-out"
      }}>
      <div className="flex">
        <div className="flex">
          <Icon id="bookmark" />
          {bookmarkCount}
        </div>
        <div className="flex">
          <Icon id="user-alt-fill" />
          {bidsData.content.length}
        </div>
      </div>
      <div>
        {auctionStatus !== "입찰 중" && (
          <Link
            href={`${auctionId}/bidderList?sellerId=${sellerId}`}
            className="bg-[#96E4FF] rounded-lg px-2 hover:bg-[#55d4ff]">
            입찰자 목록으로 이동
          </Link>
        )}
      </div>
    </div>
  );
};

export default AuctionDetailFooterBar;
