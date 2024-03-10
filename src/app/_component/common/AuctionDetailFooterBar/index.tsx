"use client";

import { Bids } from "@/app/types/product";
import Icon from "../Icon";
import { useEffect, useState } from "react";

interface AuctionDetailDataProps {
  bookmarkCount: number;
  auctionId: number;
  bidsData: Bids;
}

const AuctionDetailFooterBar = ({
  bidsData,
  auctionId,
  bookmarkCount
}: AuctionDetailDataProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      setLastScrollTop((prevScrollTop) => {
        if (currentScrollTop > prevScrollTop) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        return currentScrollTop <= 0 ? 0 : currentScrollTop;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed flex justify-between bottom-0 border-t-2 border-t-gray-400 min-w-[360px] py-4"
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
