"use client";

import SlideCarousel from "@/app/_component/common/SlideCarousel";
import Timer from "@/app/_component/common/Timer";
import { getHotAuctionRecommends } from "@/app/api/auctionRecommends";
import { Auction } from "@/utils/mocks/api/types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const DetailAuctionFeed = () => {
  const { data, isPending } = useQuery<Auction[]>({
    queryKey: ["auction"],
    queryFn: getHotAuctionRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000
  });

  if (isPending) return <div>Loading...</div>;
  return (
    <div>
      <SlideCarousel
        childSize={360}
        groupGap={15}
        className="py-5"
        height={360}
        useNav>
        {data?.slice(0, 6).map((auction) => (
          <Link
            href={`auction/${auction.product_id}`}
            key={auction.product_id}
            className="group">
            <div className="relative w-full h-full border rounded-lg overflow-hidden">
              <Image
                src={auction.product.product_image.image_url}
                width={0}
                height={0}
                alt="상품 이미지"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="absolute flex justify-center flex-col items-center bottom-0 w-full h-[30px] bg-gradient-to-t from-[rgba(0,0,0,0.7)] transition-all group-hover:h-[80px]">
                <div>
                  <Timer
                    createdAt={new Date(auction.createdAt)}
                    deadline={new Date(auction.end_date)}
                  />
                </div>
                <div className="hidden group-hover:block">
                  현재 입찰 가격 : {auction.init_price}
                </div>
              </div>
            </div>
            <div className="text-xs text-center">
              <span>
                🔥{auction.bidding_user_count}명이 치열하게 참여하고있어요!
              </span>
            </div>
          </Link>
        ))}
      </SlideCarousel>
    </div>
  );
};

export default DetailAuctionFeed;
