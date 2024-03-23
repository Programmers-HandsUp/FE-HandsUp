"use client";
import { useQuery } from "@tanstack/react-query";

import ArrowBackButton from "@/app/_component/common/ArrowBackButton";
import Header from "@/app/_component/common/Header";
import ProductCard from "@/app/_component/common/ProductCard";

import getChatRoomInfo from "../_api/getchatRoomInfo";
import ChatRoomContent from "./ChatRoomContent";

interface ChatRoomInfoHeaderProps {
  chatRoomId: number;
}

const ChatRoomInfoHeader = ({ chatRoomId }: ChatRoomInfoHeaderProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["chatRooms", chatRoomId],
    queryFn: () => getChatRoomInfo({ chatRoomId })
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>오류 발생</div>;
  return (
    <div>
      <Header
        left={
          <div className="flex items-center">
            <ArrowBackButton />
            <div className="flex-none flex gap-2 items-center">
              <div>{data?.receiverNickName}</div>
              <div className="text-[#96E4FF] rounded-xl ring-2 ring-[#96E4FF] text-xs px-1 w-fit h-fit">
                선함 {data?.receiverScore}
              </div>
            </div>
          </div>
        }
      />
      <div className="pl-5 pb-2">
        <ProductCard id={data.auctionId}>
          <div className="overflow-hidden rounded-xl">
            <ProductCard.CardImage
              titleImage={data.auctionImageUrl}
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col pl-2">
            <ProductCard.CardTitle
              width={150}
              className="text-base">
              {data.auctionTitle}
            </ProductCard.CardTitle>

            <div>
              <ProductCard.CardTag tradeState={data.tradingStatus} />
            </div>
          </div>
        </ProductCard>
      </div>
      <ChatRoomContent
        chatRoomId={chatRoomId}
        receiverImageUrl={data.receiverProfileImageUrl}
        receiverNickName={data.receiverNickName}
      />
    </div>
  );
};

export default ChatRoomInfoHeader;
