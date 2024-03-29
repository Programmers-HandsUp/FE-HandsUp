"use client";

import { useQuery } from "@tanstack/react-query";

import getChatRoomInfo from "../_api/getChatRoomInfo";

const useGetChatRoomInfo = ({
  biddingId
}: {
  biddingId: number | undefined;
}) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["chat", "chat-room-info"],
    queryFn: () => getChatRoomInfo({ biddingId })
  });

  return { data, refetch, isLoading };
};

export default useGetChatRoomInfo;
