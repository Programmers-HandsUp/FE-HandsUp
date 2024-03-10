"use client";

import AuctionBidsSection from "@/app/_component/common/AuctionBidsSection";
import AuctionDetailFooterBar from "@/app/_component/common/AuctionDetailFooterBar";
import { DefaultAuctionDetailInfo } from "@/app/_component/common/AuctionDetailInfo/DefaultCase";
import CarouselDetailImage from "@/app/_component/common/CarouselDetailImage";
import Comment from "@/app/_component/common/Comment";
import Header from "@/app/_component/common/Header";
import Icon from "@/app/_component/common/Icon";
import LineChart from "@/app/_component/common/LineChart";
import Timer from "@/app/_component/common/Timer";
import TopThreeRank from "@/app/_component/common/TopThreeRank";
import useBidsQuery from "@/app/hooks/queries/useBidsQuery";
import useGetAuctionDetail from "@/app/hooks/queries/useGetAuctionDetail";

interface DetailInfoSectionProps {
  auctionId: number;
}

const DetailInfoSection = ({ auctionId }: DetailInfoSectionProps) => {
  const { data } = useGetAuctionDetail({ auctionId });
  const { top3, bids } = useBidsQuery({ auctionId });
  if (!data) return <div>데이터가 없습니다!</div>;

  //TODO : 뒤로가기 버튼 컴포넌트 만들기
  return (
    <>
      <header>
        <Header
          left={
            <Icon
              id="arrow-back"
              fill="white"
            />
          }
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
