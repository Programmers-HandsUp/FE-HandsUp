"use client";

import { useQuery } from "@tanstack/react-query";

import getChatRoomInfo from "../_api/getChatRoomInfo";

const useGetChatRoomInfo = ({
  biddingId
}: {
  biddingId: number | undefined;
}) => {
  const { data, refetch } = useQuery({
    queryKey: ["chat", "chat-room-info"],
    queryFn: () => getChatRoomInfo({ biddingId }),
    enabled: biddingId !== undefined
  });

  return { data, refetch };
};

export default useGetChatRoomInfo;
