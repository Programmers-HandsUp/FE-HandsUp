"use client";

import ArrowBackButton from "@/app/_component/common/ArrowBackButton";
import AuctionBidsSection from "@/app/_component/common/AuctionBidsSection";
import AuctionDetailFooterBar from "@/app/_component/common/AuctionDetailFooterBar";
import { DefaultAuctionDetailInfo } from "@/app/_component/common/AuctionDetailInfo/DefaultCase";
import CarouselDetailImage from "@/app/_component/common/CarouselDetailImage";
import Comment from "@/app/_component/common/Comment";
import Header from "@/app/_component/common/Header";
import LineChart from "@/app/_component/common/LineChart";
import ReliabilityBar from "@/app/_component/common/Reliabilitybar";
import Timer from "@/app/_component/common/Timer";
import TopThreeRank from "@/app/_component/common/TopThreeRank";
import UserCard from "@/app/_component/common/UserCard";

import useGetAuctionDetail from "../_hooks/queries/useGetAuctionDetail";

interface DetailInfoSectionProps {
  auctionId: number;
}

const DetailInfoSection = ({ auctionId }: DetailInfoSectionProps) => {
  const { top3, bids, auction } = useGetAuctionDetail({ auctionId });

  return (
    <>
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
        <div>
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
          si={auction.si}
          gu={auction.gu}
          dong={auction.dong}
          tradeMethod={auction.tradeMethod}
          productStatus={auction.productStatus}
          purchaseTime={auction.purchaseTime}
        />
        <hr />
        <LineChart bids={bids} />
        <TopThreeRank content={top3.content} />
        <Comment auctionId={auctionId} />
        <AuctionDetailFooterBar
          bidsData={bids}
          auctionId={auctionId}
          bookmarkCount={auction.bookmarkCount}
        />
      </div>
    </>
  );
};

export default DetailInfoSection;
