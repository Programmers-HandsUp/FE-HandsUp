import { authCheck } from "@/utils/function/authCheck";
import { ChatRoomInfoResponse } from "@/utils/types/chat/checkChatRoomInfrom";

const getChatRoomInfo = async ({
  chatRoomId
}: {
  chatRoomId: number;
}): Promise<ChatRoomInfoResponse> => {
  const isTokenValid = authCheck();

  if (!isTokenValid) throw new Error("401");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/chat-rooms/${chatRoomId}`,
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

export default getChatRoomInfo;
