import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";
import { ChatContentResponse } from "@/utils/types/chat/chatRooms";

const getChatContent = async ({
  pageParam,
  chatRoomId
}: {
  pageParam: number;
  chatRoomId: number;
}): Promise<ChatContentResponse> => {
  const res = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/chat-rooms/${chatRoomId}/messages?page=${pageParam}&size=20`
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  return res.json();
};
export default getChatContent;
