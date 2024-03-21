import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";
import { ChatRoomsResponse } from "@/utils/types/chat/chatRooms";

const getChatRooms = async (): Promise<ChatRoomsResponse> => {
  const res = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/chat-rooms`
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  return res.json();
};

export default getChatRooms;
