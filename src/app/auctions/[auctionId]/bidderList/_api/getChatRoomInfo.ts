import { authCheck } from "@/utils/function/authCheck";
import { CheckChatRoomInfoResponse } from "@/utils/types/chat/checkChatRoomInfrom";

const getChatRoomInfo = async ({
  biddingId
}: {
  biddingId: number | undefined;
}): Promise<CheckChatRoomInfoResponse> => {
  if (biddingId === undefined) {
    throw new Error("400");
  }

  const isTokenValid = authCheck();

  if (!isTokenValid) {
    throw new Error("401");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/chat-rooms/biddings/${biddingId}`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${isTokenValid}`
      }
    }
  );
  return await res.json();
};

export default getChatRoomInfo;
