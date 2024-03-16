"use client";

import BidderStatusItem from "./_component/BidderStatusItem";
import useCreateChatRoom from "./_hooks/useCreateChatRoom";
import useGetBids from "./_hooks/useGetBids";
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

  const loginId = "10";
  console.log(typeof auctionId);

  const { data, isLoading, isError } = useGetBids({
    auctionId: numberOfAuctionId
  });

  const { mutation: completeMutation } = usePatchTransactionComplete({
    auctionId: numberOfAuctionId
  });
  const { mutation: cancelMutation } = usePatchTransactionCancel({
    auctionId: numberOfAuctionId
  });
  const { mutation: createChatRoomMutation } = useCreateChatRoom({
    auctionId: numberOfAuctionId
  });

  //TODO: 현재 채팅방 생성하기 API로 받아오는 chatRoomId를 이용해서 채팅하기에도 활용가능한지 테스트해야함
  //TODO : 왜냐하면 입찰아이디로 채팅방 상세조회를 get 해오려면 useQuery를 사용해야하는데 그럼 전체 입찰자 목록에서 현재 "진행중"인 입찰자를 찾고, 그 입찰자의 id를 넣어서 chatRoomId를 값으로 저장해야함
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>에러 발생</div>;
  if (!data) return <div>입찰자가 없음</div>;

  return (
    <main className="">
      {data.content.map((data) => (
        <BidderStatusItem
          key={data.biddingId}
          biddingId={data.biddingId}
          profileImage={data.imgUrl}
          biddingPrice={data.biddingPrice}
          nickName={data.bidderNickname}
          status={data.tradingStatus}
          isSeller={sellerId === loginId}
          chatRoomId={createChatRoomMutation.data?.chatRoomId}
          createChatRoom={createChatRoomMutation.mutate}
          patchComplete={cancelMutation.mutate}
          patchCompleteIsLoading={cancelMutation.isPending}
        />
      ))}
      <div className="flex justify-center items-center mt-12">
        <button
          onClick={() => completeMutation.mutate}
          className="bg-[#96E4FF] p-2 rounded-lg">
          다음 입찰자 선택하기
        </button>
      </div>
    </main>
  );
};

export default BidderListPage;
