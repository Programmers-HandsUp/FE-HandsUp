import { authCheck } from "@/utils/function/authCheck";
import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";
import { ChatRoomInfoResponse } from "@/utils/types/chat/checkChatRoomInfrom";

const getChatRoomInfo = async ({
  biddingId
}: {
  biddingId: number | undefined;
}): Promise<ChatRoomInfoResponse> => {
  if (biddingId === undefined) {
    throw new Error("400");
  }

  const isTokenValid = authCheck();

  if (!isTokenValid) {
    throw new Error("401");
  }

  const res = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/chat-rooms/biddings/${biddingId}`
  );
  return await res.json();
};

export default getChatRoomInfo;
