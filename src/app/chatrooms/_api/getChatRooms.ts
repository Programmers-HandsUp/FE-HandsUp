import { authCheck } from "@/utils/function/authCheck";
import { ChatRoomsResponse } from "@/utils/types/chat/chatRooms";

const getChatRooms = async (): Promise<ChatRoomsResponse> => {
  const isTokenValid = authCheck();

  if (!isTokenValid) throw new Error("401");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/chat-rooms`,
    {
      headers: {
        Authorization: `Bearer ${isTokenValid}`
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  return res.json();
};

export default getChatRooms;
