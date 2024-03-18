"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import ArrowBackButton from "@/app/_component/common/ArrowBackButton";
import Header from "@/app/_component/common/Header";

import getChatRoomInfo from "../_api/getchatRoomInfo";

const ChatRoomInfoHeader = () => {
  const params = useParams<{ chatRoomId: string }>();

  const { data } = useQuery({
    queryKey: ["chatRooms", params.chatRoomId],
    queryFn: () => getChatRoomInfo({ chatRoomId: Number(params.chatRoomId) })
  });

  return (
    <div>
      <Header
        left={
          <div className="flex items-center">
            <ArrowBackButton />
            <span>{data?.receiverNickName}</span>
            <div>선함 {data?.receiverScore}</div>
          </div>
        }
      />
    </div>
  );
};

export default ChatRoomInfoHeader;
