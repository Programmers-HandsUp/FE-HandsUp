"use client";

import Link from "next/link";

import Avatar from "@/app/_component/common/Avatar";

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
          className="relative w-[60%] h-full group"
          key={content.chatRoomId}>
          <div className="absolute top-0 bg-[#547d8d] rounded-full w-full h-full pr-2 transition-all duration-500 group-hover:scale-x-150 origin-left"></div>
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
            <div className="absolute -right-[45%] opacity-0 group-hover:opacity-90 transition-opacity duration-500 text-black">
              <Link
                href={`/chatrooms/${content.chatRoomId}`}
                className="hover:bg-gray-500 px-2 rounded-xl">
                들어가기
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ChatRooms;
