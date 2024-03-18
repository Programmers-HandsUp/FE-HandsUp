import { ChatRoomsResponse } from "@/utils/types/chat/chatRooms";

const getChatRooms = async (): Promise<ChatRoomsResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/chat-rooms`,
    {
      headers: {
        Authorization: "Bearer "
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  const jsonData = await res.json();
  return jsonData;
};

export default getChatRooms;
