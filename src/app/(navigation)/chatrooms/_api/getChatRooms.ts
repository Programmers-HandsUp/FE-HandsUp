import { ChatRoomsResponse } from "@/utils/types/chat/chatRooms";

const getChatRooms = async (): Promise<ChatRoomsResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/chat-rooms`,
    {
      headers: {
        Authorization:
          "Bearer eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjExLCJpYXQiOjE3MTA2OTQ4MjMsImV4cCI6MTcxMTU1ODgyM30.gJDji8MWsTYri6TyjMfEM1HCrUiCbRFYUkiRyX8e25s"
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  const jsonData = await res.json();
  return jsonData;
};

export default getChatRooms;
