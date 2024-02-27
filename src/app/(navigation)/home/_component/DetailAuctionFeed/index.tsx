"use client";

import { getHotAuctionRecommends } from "@/app/api/auctionRecommends";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export interface Auction {
  seller_id: number;
  buyer_id: number;
  product_id: number;
  title: string;
  init_price: number;
  end_date: string;
  si: string;
  gu: string;
  dong: string;
  bookmark_count: number;
  bidding_user_count: number;
  trade_method: string;
  auction_status: string;
  trading_order: number;
  product: Product;
}

export interface Product {
  status: string;
  description: string;
  purchase_time: string;
  product_category_id: number;
  category: Category;
  product_image: ProductImage;
}

export interface Category {
  product_category_value: string;
}

export interface ProductImage {
  image_url: string;
  product_id: number;
}

const DetailAuctionFeed = () => {
  const { data, isPending } = useQuery<Auction[]>({
    queryKey: ["auction", "hot"],
    queryFn: getHotAuctionRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000
  });
  console.log(data);
  if (isPending) return <div>Loading...</div>;
  return (
    <>
      {data?.map((auction) => (
        <div
          className="w-[200px] h-[200px]"
          key={auction.product_id}>
          <div className="relative w-[200px] h-[200px] border rounded-lg overflow-hidden">
            <Image
              src={auction.product.product_image.image_url}
              width={100}
              height={100}
              alt="상품 이미지"
              className="w-full h-full"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute flex justify-center bottom-0 w-full h-[30px] bg-gradient-to-t from-[rgba(0,0,0,0.7)]">
              00:12:32
            </div>
          </div>
          <div className="text-xs text-end">
            <span>
              🔥{auction.bidding_user_count}명이 치열하게 참여하고있어요!
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailAuctionFeed;
