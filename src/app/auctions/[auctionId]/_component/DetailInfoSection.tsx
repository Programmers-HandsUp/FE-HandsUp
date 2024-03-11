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

import useBidsQuery from "../_hooks/queries/useBidsQuery";
import useGetAuctionDetail from "../_hooks/queries/useGetAuctionDetail";

interface DetailInfoSectionProps {
  auctionId: number;
}

const DetailInfoSection = ({ auctionId }: DetailInfoSectionProps) => {
  const { data } = useGetAuctionDetail({ auctionId });
  const { top3, bids } = useBidsQuery({ auctionId });
  if (!data) return <div>데이터가 없습니다!</div>;

  return (
    <>
      <header>
        <Header
          left={<ArrowBackButton />}
          center={
            <Timer
              createdAt={data.createdAt}
              deadline={data.endDate}
            />
          }
        />
      </header>
      <div className="flex flex-col gap-6">
        <AuctionBidsSection
          auctionId={data.auctionId}
          currentBiddingPrice={data.currentBiddingPrice}
        />
        <CarouselDetailImage
          imageUrls={data.imageUrls}
          auctionStatus={data.auctionStatus}
        />
        <div>
          <UserCard className="gap-4 items-center">
            <UserCard.Avatar
              src="/assets/logo.webp"
              size="medium"
              rounded="full"
              className="bg-slate-100"
              alt="판매자 프로필 이미지"
            />
            <UserCard.ContentArea className="my-1">
              <div className="flex flex-col">
                <p className="text-lg">오리도리</p>
                <p className="text-sm">성수동</p>
              </div>
            </UserCard.ContentArea>
          </UserCard>
          <ReliabilityBar score={140} />
        </div>
        <hr />
        <DefaultAuctionDetailInfo
          title={data.title}
          productCategory={data.productCategory}
          description={data.description}
          si={data.si}
          gu={data.gu}
          dong={data.dong}
          tradeMethod={data.tradeMethod}
          productStatus={data.productStatus}
          purchaseTime={data.purchaseTime}
        />
        <hr />
        <LineChart bids={bids} />
        <TopThreeRank content={top3.content} />
        <Comment auctionId={auctionId} />
        <AuctionDetailFooterBar
          bidsData={bids}
          auctionId={auctionId}
          bookmarkCount={data.bookmarkCount}
        />
      </div>
    </>
  );
};

export default DetailInfoSection;
