"use client";

import { useEffect, useState } from "react";

import BidderStatusItem from "./_component/BidderStatusItem";
import useCreateChatRoom from "./_hooks/useCreateChatRoom";
import useGetBids from "./_hooks/useGetBids";
import useGetChatRoomInfo from "./_hooks/useGetChatRoomInfo";
import usePatchTransactionComplete from "./_hooks/usePatchTransactionComplete";
import usePatchTransactionCancel from "./_hooks/usePatchTranscationCancel";

interface BidderListPageProps {
  params: { auctionId: string };
  searchParams: { sellerId: string };
}

const BidderListPage = ({ params, searchParams }: BidderListPageProps) => {
  const { auctionId } = params;
  const numberOfAuctionId = Number(auctionId);
  const { sellerId } = searchParams;
  const [progressingBiddingId, setProgressingBiddingId] = useState<
    number | undefined
  >();

  const loginId = "10";

  const {
    data: bidsData,
    isLoading: bidsDataLoading,
    isError: bidsDataError
  } = useGetBids({
    auctionId: numberOfAuctionId
  });

  const { mutation: completeMutation } = usePatchTransactionComplete({
    auctionId: numberOfAuctionId,
    biddingId: progressingBiddingId
  });
  const { mutation: cancelMutation } = usePatchTransactionCancel({
    auctionId: numberOfAuctionId,
    biddingId: progressingBiddingId
  });
  const { mutation: createChatRoomMutation } = useCreateChatRoom({
    auctionId: numberOfAuctionId
  });

  const { data: chatRoomInfo } = useGetChatRoomInfo({
    biddingId: progressingBiddingId
  });

  useEffect(() => {
    setProgressingBiddingId(
      bidsData?.content.find((x) => x.tradingStatus === "진행중")?.biddingId
    );
  }, [bidsData]);

  if (bidsDataLoading) return <div>Loading...</div>;
  if (bidsDataError) return <div>에러 발생</div>;
  if (!bidsData) return <div>입찰자가 없음</div>;

  return (
    <main className="">
      {bidsData.content.map((data) => (
        <BidderStatusItem
          key={data.biddingId}
          biddingId={data.biddingId}
          profileImage={data.imgUrl}
          biddingPrice={data.biddingPrice}
          nickName={data.bidderNickname}
          status={data.tradingStatus}
          isSeller={sellerId === loginId}
          chatRoomId={chatRoomInfo?.chatRoomId}
          createChatRoom={createChatRoomMutation.mutate}
          patchComplete={completeMutation.mutate}
          patchCompleteIsLoading={completeMutation.isPending}
        />
      ))}
      <div className="flex justify-center items-center mt-12">
        <button
          onClick={() => cancelMutation.mutate()}
          className="bg-[#96E4FF] p-2 rounded-lg">
          다음 입찰자 선택하기
        </button>
      </div>
    </main>
  );
};

export default BidderListPage;
