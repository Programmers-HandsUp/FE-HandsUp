import { authCheck } from "@/utils/function/authCheck";

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
  const isTokenValid = authCheck();

  if (!isTokenValid) {
    throw new Error("401");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/chat-rooms?auctionId=${auctionId}&biddingId=${biddingId}`,
    {
      method: "POST",
      next: {
        tags: ["chat", auctionId.toString(), biddingId.toString()]
      },
      headers: {
        Authorization: `Bearer ${isTokenValid}`
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [AuctionDetail] ");

  const jsonData = await res.json();
  return jsonData;
};

export default createChatRoom;
