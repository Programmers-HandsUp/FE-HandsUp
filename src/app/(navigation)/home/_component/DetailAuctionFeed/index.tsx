"use client";

import Image from "next/image";
import Link from "next/link";

import SlideCarousel from "@/app/_component/common/SlideCarousel";
import Timer from "@/app/_component/common/Timer";
import { RecommendAuctionsResponse } from "@/utils/types/auction/recommendAuction";

interface DetailAuctionFeedProps {
  data: RecommendAuctionsResponse;
}

const DetailAuctionFeed = ({ data }: DetailAuctionFeedProps) => {
  return (
    <div>
      <SlideCarousel
        childSize={328}
        groupGap={16}
        className="py-5"
        itemsToShow={1}
        height={360}
        useNav>
        {data.content?.slice(0, 6).map((auction) => (
          <Link
            href={`auctions/${auction.auctionId}`}
            key={auction.auctionId}
            className="group">
            <div className="relative w-full h-full border rounded-lg overflow-hidden">
              {auction.imgUrl ? (
                <Image
                  src={auction.imgUrl}
                  width={328}
                  height={360}
                  alt="상품 이미지"
                  priority
                />
              ) : null}
              <div className="absolute flex justify-center flex-col items-center bottom-0 w-full h-[30px] bg-gradient-to-t from-[rgba(0,0,0,0.7)] transition-all group-hover:h-[80px]">
                <div>
                  <Timer
                    createdAt={new Date(auction.createdAt)}
                    deadline={new Date(auction.endDate)}
                  />
                </div>
                <div className="hidden group-hover:block">
                  현재 입찰 가격 : {auction.currentBiddingPrice}
                </div>
              </div>
            </div>
            <div className="text-xs text-center">
              <span>🔥{auction.biddingCount}명이 치열하게 참여하고있어요!</span>
            </div>
          </Link>
        ))}
      </SlideCarousel>
    </div>
  );
};

export default DetailAuctionFeed;
