import { useEffect, useRef, useState } from "react";

import ChatMessage from "@/app/_component/common/ChatMessage";
import useSession from "@/app/_hooks/queries/useSession";
import useInfiniteScroll from "@/app/_hooks/useInfiniteScroll";

import useGetChatData from "../_hooks/useGetChatData";
import ChatMessageInput, { FormDataType } from "./ChatMessageInput";

interface ChatRoomContentProps {
  chatRoomId: number;
  receiverNickName: string;
  receiverImageUrl: string;
}

const ChatRoomContent = ({
  chatRoomId,
  receiverNickName,
  receiverImageUrl
}: ChatRoomContentProps) => {
  const {
    data: chatData,
    isFetched,
    isLoading,
    fetchNextPage,
    hasNextPage
  } = useGetChatData({ chatRoomId });

  const onSubmit = (data: FormDataType) => {
    console.log(data);
  };

  const { data: currentUser, isLoading: userIsLoading } = useSession();

  const refetch = () => {
    if (isScroll) return;
    if (hasNextPage) {
      const prevScrollTop = messagesEndRef.current?.scrollTop;
      const prevScrollHeight = messagesEndRef.current?.scrollHeight;
      setIsScroll(true);
      fetchNextPage().then(() => {
        if (prevScrollTop !== undefined && prevScrollHeight !== undefined) {
          setTimeout(() => {
            if (messagesEndRef.current) {
              messagesEndRef.current.scrollTop =
                prevScrollTop +
                (messagesEndRef.current.scrollHeight - prevScrollHeight);
            }
            setIsScroll(false);
          }, 0);
        }
      });
    }
  };

  const [isScroll, setIsScroll] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { ref } = useInfiniteScroll<HTMLDivElement>(refetch);

  const scrollToBottom = () => {
    if (!messagesEndRef.current) return;

    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  };

  useEffect(() => {
    if (isFetched) {
      scrollToBottom();
    }
  }, [isFetched]);

  if (isLoading || userIsLoading) return <div>Loading</div>;
  if (!currentUser) return <div>다시 로그인 해주세요.</div>;

  return (
    <div>
      <div
        ref={messagesEndRef}
        className="bg-[#96e5ff8f] rounded-lg p-2 h-[calc(100vh-155px)] overflow-auto">
        <div ref={ref}></div>
        {chatData.reverse().map((item, idx) => (
          <div key={item.chatRoomId + idx}>
            <ChatMessage
              avatar={receiverImageUrl}
              nickname={receiverNickName}
              message={item.content}
              createdAt={new Date(item.createdAt)}
              sender={item.senderId === currentUser?.userId ? "me" : "you"}
              previousSender={
                idx > 0
                  ? chatData[idx - 1].senderId === item.senderId
                    ? "me"
                    : "you"
                  : null
              }
            />
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 h-[49px] w-[344px]">
        <ChatMessageInput onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default ChatRoomContent;
