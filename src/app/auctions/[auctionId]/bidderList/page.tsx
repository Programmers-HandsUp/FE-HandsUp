"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";

import useSession from "@/app/_hooks/queries/useSession";

import BidderStatusItem from "./_component/BidderStatusItem";
import useCreateChatRoom from "./_hooks/useCreateChatRoom";
import useGetBids from "./_hooks/useGetBids";
import useGetChatRoomInfo from "./_hooks/useGetChatRoomInfo";
import usePatchTransactionCancel from "./_hooks/usePatchTransactionCancel";
import usePatchTransactionComplete from "./_hooks/usePatchTransactionComplete";

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

  const { data: user, isLoading: userLoading } = useSession();

  const queryClient = useQueryClient();

  const invalidateChatRoomInfo = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ["chat", "chat-room-info"] });
  }, [queryClient]);

  const {
    data: bidsData,
    isLoading: bidsDataLoading,
    isError: bidsDataError
  } = useGetBids({
    auctionId: numberOfAuctionId
  });
  const { data: chatRoomInfo, isLoading: chatRoomInfoLoading } =
    useGetChatRoomInfo({
      biddingId: progressingBiddingId
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
    auctionId: numberOfAuctionId,
    userId: user?.userId
  });

  useEffect(() => {
    invalidateChatRoomInfo();
  }, [invalidateChatRoomInfo, progressingBiddingId]);

  useEffect(() => {
    setProgressingBiddingId(
      bidsData?.content.find((x) => x.tradingStatus === "진행중")?.biddingId
    );
    invalidateChatRoomInfo();
  }, [bidsData, invalidateChatRoomInfo]);

  if (bidsDataLoading || userLoading || chatRoomInfoLoading)
    return <div>Loading...</div>;
  if (bidsDataError) return <div>에러가 발생했어요.</div>;
  if (!bidsData) return <div>입찰자가 없어요.</div>;
  if (!user) return <div>다시 로그인을 해주세요.</div>;

  return (
    <main className="">
      {bidsData.content.map((data) => (
        <BidderStatusItem
          key={data.biddingId}
          biddingId={data.biddingId}
          profileImage={data.imgUrl}
          biddingPrice={data.biddingPrice}
          nickName={data.bidderNickname}
          userId={user.userId}
          status={data.tradingStatus}
          isSeller={Number(sellerId) === user.userId}
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
