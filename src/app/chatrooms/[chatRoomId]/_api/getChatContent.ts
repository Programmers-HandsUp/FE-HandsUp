import { authCheck } from "@/utils/function/authCheck";
import { ChatContentResponse } from "@/utils/types/chat/chatRooms";

const getChatContent = async ({
  pageParam,
  chatRoomId
}: {
  pageParam: number;
  chatRoomId: number;
}): Promise<ChatContentResponse> => {
  const isTokenValid = authCheck();

  if (!isTokenValid) throw new Error("401");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/chat-rooms/${chatRoomId}/messages?page=${pageParam}&size=20`,
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
export default getChatContent;
