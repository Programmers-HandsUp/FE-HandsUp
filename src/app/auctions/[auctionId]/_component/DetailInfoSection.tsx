"use client";

import Link from "next/link";
import { MouseEvent } from "react";

import ArrowBackButton from "@/app/_component/common/ArrowBackButton";
import Bookmark from "@/app/_component/common/Bookmark";
import Header from "@/app/_component/common/Header";
import ReliabilityBar from "@/app/_component/common/Reliabilitybar";
import Timer from "@/app/_component/common/Timer";
import Toast from "@/app/_component/common/Toast";
import UserCard from "@/app/_component/common/UserCard";
import useBookmark from "@/app/_hooks/mutations/useBookmark";
import useSession from "@/app/_hooks/queries/useSession";
import AuctionBidsSection from "@/app/auctions/[auctionId]/_component/AuctionBidsSection";
import AuctionDetailFooterBar from "@/app/auctions/[auctionId]/_component/AuctionDetailFooterBar";
import { DefaultAuctionDetailInfo } from "@/app/auctions/[auctionId]/_component/AuctionDetailInfo/DefaultCase";
import CarouselDetailImage from "@/app/auctions/[auctionId]/_component/CarouselDetailImage";
import LineChart from "@/app/auctions/[auctionId]/_component/LineChart";
import TopThreeRank from "@/app/auctions/[auctionId]/_component/TopThreeRank";

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
  const toast = Toast();

  const { data: bookmark } = useGetCheckBookmark({ auctionId });

  const { data: user, isLoading: userLoading } = useSession();

  const bookmarkMutation = useBookmark({
    auctionId,
    remove: bookmark?.isBookmarked
  });

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!user) {
      toast.show("로그인 후 이용해주세요.", "warn-solid");
      return;
    }
    if (auction.sellerInfo.userId === user.userId) {
      toast.show("자신의 게시글에는 북마크를 할 수 없습니다.", "warn-solid");
      return;
    }
    bookmarkMutation.mutate();
  };

  return (
    <div className="mb-[58px]">
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
          isLoginLoading={userLoading}
          isLogin={user ? true : false}
          isSeller={user?.userId === auction.sellerInfo.userId}
          auctionStatus={auction.auctionStatus}
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
          <Link href={`/user/${auction.sellerInfo.userId}`}>
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
          </Link>
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
        <TopThreeRank content={top3.content} />
        <Comment
          auctionStatus={auction.auctionStatus}
          auctionId={auctionId}
          sellerId={auction.sellerInfo.userId}
          user={user ? user : undefined}
          userLoading={userLoading}
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
