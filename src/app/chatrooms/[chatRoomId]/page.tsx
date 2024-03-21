"use client";

import { useParams } from "next/navigation";

import ChatRoomInfoHeader from "./_component/ChatRoomInfoHeader";

const ChatRoomPage = () => {
  const params = useParams<{ chatRoomId: string }>();
  return (
    <section>
      <ChatRoomInfoHeader chatRoomId={Number(params.chatRoomId)} />
    </section>
  );
};

export default ChatRoomPage;
