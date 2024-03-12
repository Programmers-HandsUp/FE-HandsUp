"use client";

import { useEffect, useState } from "react";

import { BidRequest } from "@/utils/types/bid/bids";

import Icon from "../Icon";
import useVisibilityOnScroll from "@/app/_hooks/useVisibilityScroll";

interface AuctionDetailDataProps {
  bookmarkCount: number;
  auctionId: number;
  bidsData: BidRequest;
}

const AuctionDetailFooterBar = ({
  bidsData,
  auctionId,
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
          <Icon id="book-mark" />
          {/*TODO: 좋아요 클릭 가능하게 구현 */}
          {bookmarkCount}
        </div>
        <div className="flex">
          <Icon id="user-alt-fill" />
          {bidsData.content.length}
        </div>
      </div>
      <div>
        {/* TODO: 입찰자 목록 페이지 이동 Link 태그 추가 */}
        <button className="bg-[#96E4FF] rounded-lg px-2 hover:bg-[#55d4ff]">
          입찰자 목록으로 이동
        </button>
      </div>
    </div>
  );
};

export default AuctionDetailFooterBar;
