"use client";

import Link from "next/link";

import Avatar from "@/app/_component/common/Avatar";
import Icon from "@/app/_component/common/Icon";

import useGetChatRooms from "./_hooks/useGetChatRooms";

const ChatRooms = () => {
  const { data, isError, isLoading } = useGetChatRooms();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <div>얘기 중인 채팅방이 없네요..</div>;

  return (
    <section>
      {data.content.map((content) => (
        <div
          className="relative w-full h-full group"
          key={content.chatRoomId}>
          <div className="absolute top-0 overflow-hidden bg-transparent rounded-full w-full h-full pr-2 ">
            <div className="w-full h-full -translate-x-full bg-[#547d8d] transition-transform duration-500 origin-left rounded-full group-hover:translate-x-0"></div>
          </div>
          <div className="flex gap-2 items-center mb-4">
            <Avatar
              src={content.receiverImageUrl}
              rounded="full"
            />
            <span className="z-10">
              <strong className="text-[#96b7ff]">
                {content.receiverNickName}
              </strong>
              님과의 채팅방
            </span>
            <div className="absolute right-5 opacity-0 group-hover:opacity-90 transition-opacity text-white">
              <Link
                href={`/chatrooms/${content.chatRoomId}`}
                className="hover:text-[#96E4ff] px-2 rounded-xl">
                <Icon id="arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ChatRooms;
