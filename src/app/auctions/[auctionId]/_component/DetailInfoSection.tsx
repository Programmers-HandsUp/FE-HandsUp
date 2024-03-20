"use client";

import { MouseEvent } from "react";

import ArrowBackButton from "@/app/_component/common/ArrowBackButton";
import AuctionBidsSection from "@/app/_component/common/AuctionBidsSection";
import AuctionDetailFooterBar from "@/app/_component/common/AuctionDetailFooterBar";
import { DefaultAuctionDetailInfo } from "@/app/_component/common/AuctionDetailInfo/DefaultCase";
import Bookmark from "@/app/_component/common/Bookmark";
import CarouselDetailImage from "@/app/_component/common/CarouselDetailImage";
import Header from "@/app/_component/common/Header";
import LineChart from "@/app/_component/common/LineChart";
import ReliabilityBar from "@/app/_component/common/Reliabilitybar";
import Timer from "@/app/_component/common/Timer";
import TopThreeRank from "@/app/_component/common/TopThreeRank";
import UserCard from "@/app/_component/common/UserCard";
import useBookmark from "@/app/_hooks/mutations/useBookmark";

import useGetAuctionDetail from "../_hooks/queries/useGetAuctionDetail";
import useGetCheckBookmark from "../_hooks/queries/useGetCheckBookmark";
import Comment from "./Comment";

interface DetailInfoSectionProps {
  auctionId: number;
}

const DetailInfoSection = ({ auctionId }: DetailInfoSectionProps) => {
  const { top3, bids, auction } = useGetAuctionDetail({
    auctionId
  });

  const { data: bookmark } = useGetCheckBookmark({ auctionId });

  const bookmarkMutation = useBookmark({
    auctionId,
    remove: bookmark?.isBookmarked
  });

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    bookmarkMutation.mutate();
  };

  return (
    <div>
      <header>
        <Header
          left={<ArrowBackButton />}
          center={
            <Timer
              createdAt={auction.createdAt}
              deadline={auction.endDate}
            />
          }
        />
      </header>

      <div className="flex flex-col gap-6">
        <AuctionBidsSection
          auctionId={auction.auctionId}
          currentBiddingPrice={auction.currentBiddingPrice}
        />
        <CarouselDetailImage
          imageUrls={auction.imageUrls}
          auctionStatus={auction.auctionStatus}
        />
        <div className="flex justify-end">
          <Bookmark
            initialState={bookmark?.isBookmarked}
            onClick={handleClick}
          />
        </div>

        <div className="px-2">
          <UserCard className="gap-4 items-center">
            <UserCard.Avatar
              src={auction.sellerInfo.profileImageUrl}
              size="medium"
              rounded="full"
              className="bg-slate-100"
              alt="판매자 프로필 이미지"
            />
            <UserCard.ContentArea className="my-1">
              <div className="flex flex-col">
                <p className="text-lg">{auction.sellerInfo.nickname}</p>
                <p className="text-sm">{auction.sellerInfo.dong}</p>
              </div>
            </UserCard.ContentArea>
          </UserCard>
          <ReliabilityBar score={auction.sellerInfo.score} />
        </div>
        <hr />
        <DefaultAuctionDetailInfo
          title={auction.title}
          productCategory={auction.productCategory}
          description={auction.description}
          si={auction.tradeSi}
          gu={auction.tradeGu}
          dong={auction.tradeDong}
          tradeMethod={auction.tradeMethod}
          productStatus={auction.productStatus}
          purchaseTime={auction.purchaseTime}
        />
        <hr />
        <LineChart bids={bids} />
        <TopThreeRank content={top3.content.reverse()} />
        <Comment
          auctionId={auctionId}
          sellerId={auction.sellerInfo.userId}
        />
      </div>
      <AuctionDetailFooterBar
        bidsData={bids}
        sellerId={auction.sellerInfo.userId}
        auctionId={auctionId}
        bookmarkCount={auction.bookmarkCount}
        auctionStatus={auction.auctionStatus}
      />
    </div>
  );
};

export default DetailInfoSection;
