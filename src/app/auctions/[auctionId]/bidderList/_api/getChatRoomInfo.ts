import { CheckChatRoomInfoResponse } from "@/utils/types/chat/checkChatRoomInfrom";

const getChatRoomInfo = async ({
  biddingId
}: {
  biddingId: number | undefined;
}): Promise<CheckChatRoomInfoResponse | null> => {
  if (biddingId === undefined) return null;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/chat-rooms/biddings/${biddingId}`,
    {
      cache: "no-store",
      headers: {
        Authorization:
          "Bearer eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjUsImlhdCI6MTcxMDMyNzk2MCwiZXhwIjoxNzExMTkxOTYwfQ.8IjNQwUpFplOcmUQO6LbtDk2Z8owwUiIGiO3f46rieM"
      }
    }
  );
  return await res.json();
};

export default getChatRoomInfo;
