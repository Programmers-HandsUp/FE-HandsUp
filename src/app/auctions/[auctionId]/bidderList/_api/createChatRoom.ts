export interface createChatRoomParams {
  auctionId: number;
  biddingId: number;
}

interface createChatRoomResponse {
  chatRoomId: number;
}

const createChatRoom = async ({
  auctionId,
  biddingId
}: createChatRoomParams): Promise<createChatRoomResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/chat-rooms&?auctionId=${auctionId}&biddingId=${biddingId}`,
    {
      next: {
        tags: ["chat", auctionId.toString(), biddingId.toString()]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [AuctionDetail] ");

  const jsonData = await res.json();
  return jsonData;
};

export default createChatRoom;
