"use client";

import ChatMessage from "../ChatMessage";
import {
  InfiniteData,
  useMutation,
  useQueryClient
} from "@tanstack/react-query";
import { ICreateComment, createComment } from "@/app/api/createComment";
import { useEffect, useRef, useState } from "react";
import useGetCommentList, { ICommentListAPI } from "./useGetCommentList";
import useInfiniteScroll from "@/app/hooks/useInfiniteScroll";
import CommentInput, { IForm } from "./CommentInput";

interface CommentProps {
  auctionId: number;
}

const Comment = ({ auctionId = 12342 }: CommentProps) => {
  const mutation = useMutation({
    mutationFn: ({ comment, auctionId }: ICreateComment) =>
      createComment({ comment, auctionId })
  });

  const {
    data: commentsData,
    isFetched,
    isLoading,
    fetchNextPage,
    hasNextPage
  } = useGetCommentList({ auctionId });
  const queryClient = useQueryClient();

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
  const MY_ID = 12342; //더미데이터

  const [isScroll, setIsScroll] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { ref } = useInfiniteScroll<HTMLDivElement>(refetch);

  const onSubmit = (data: IForm) => {
    mutation.mutate({ comment: data.comment, auctionId });
    const exMessages = queryClient.getQueryData([
      "comment",
      auctionId
    ]) as InfiniteData<ICommentListAPI>;

    //더미데이터
    const newComment = {
      messageId: 12412412,
      content: data.comment,
      auctionId: 353256236,
      userId: 12342,
      userNickname: "도리도리",
      userProfileImage: "",
      createdAt: new Date("2024-03-05")
    };

    exMessages.pages[0].content.unshift(newComment);

    queryClient.setQueryData(["comment", auctionId], exMessages);
  };

  const scrollToBottom = () => {
    if (!messagesEndRef.current) return;

    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  };

  useEffect(() => {
    if (isFetched) {
      scrollToBottom();
    }
  }, [isFetched]);

  useEffect(() => {
    if (mutation.isPending) {
      scrollToBottom();
    }
  }, [mutation.isPending]);

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      <div
        ref={messagesEndRef}
        className="bg-[#96e5ff8f] rounded-lg p-2 h-[300px] overflow-auto">
        <div ref={ref}></div>
        {commentsData.reverse().map((item, idx) => (
          <ChatMessage
            avatar={item.userProfileImage}
            nickname={item.userNickname}
            key={item.userId + idx}
            message={item.content}
            createdAt={item.createdAt}
            sender={item.userId === MY_ID ? "me" : "you"}
            previousSender={
              idx > 0
                ? commentsData[idx - 1].userId === item.userId
                  ? "me"
                  : "you"
                : null
            }
          />
        ))}
      </div>
      <CommentInput onSubmit={onSubmit} />
    </div>
  );
};

export default Comment;
