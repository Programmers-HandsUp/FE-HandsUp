import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";
import { ChatRoomInfoResponse } from "@/utils/types/chat/checkChatRoomInfrom";

const getChatRoomInfo = async ({
  chatRoomId
}: {
  chatRoomId: number;
}): Promise<ChatRoomInfoResponse> => {
  const res = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/chat-rooms/${chatRoomId}`
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  return res.json();
};

export default getChatRoomInfo;
