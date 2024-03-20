"use client";

import {
  InfiniteData,
  useMutation,
  useQueryClient
} from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

import Spinner from "@/app/_component/common/Spinner";
import useInfiniteScroll from "@/app/_hooks/useInfiniteScroll";
import { createComment } from "@/app/auctions/[auctionId]/_api/createComment";
import useGetCommentList from "@/app/auctions/[auctionId]/_hooks/queries/useGetCommentList";
import { CommentListResponse } from "@/utils/types/comment/commentData";
import { CheckLoginUserResponse } from "@/utils/types/user/users";

import ChatMessage from "../../../../_component/common/ChatMessage";
import CommentInput, { FormDataType } from "./CommentInput";

export interface CreateComment {
  content: string;
  auctionId: number;
}

interface CommentProps {
  auctionId: number;
  sellerId: number;
  user: CheckLoginUserResponse | undefined;
  userLoading: boolean;
  auctionStatus: "입찰 중" | "거래 중" | "거래 완료";
}

const Comment = ({
  auctionId,
  sellerId,
  user,
  userLoading,
  auctionStatus
}: CommentProps) => {
  const mutation = useMutation({
    mutationFn: ({ content, auctionId }: CreateComment) =>
      createComment({ content, auctionId })
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

  const [isScroll, setIsScroll] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { ref } = useInfiniteScroll<HTMLDivElement>(refetch);

  const onSubmit = (data: FormDataType) => {
    mutation.mutate({ content: data.comment, auctionId });
    const exMessages = queryClient.getQueryData([
      "auction",
      auctionId,
      "comments"
    ]) as InfiniteData<CommentListResponse>;

    const newComment = {
      writerId: user!.userId,
      nickname: user!.nickname,
      profileImageUrl: user!.profileImageUrl,
      content: data.comment,
      isSeller: user!.userId === sellerId
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
  }, [isFetched, userLoading]);

  useEffect(() => {
    if (mutation.isPending) {
      scrollToBottom();
    }
  }, [mutation.isPending]);

  if (isLoading || userLoading)
    return (
      <div>
        <div>
          <div className="text-xl p-2">
            <h1>경매에 대해서 얘기를 나눠봐요!</h1>
          </div>
          <div
            ref={messagesEndRef}
            className="bg-[#96e5ff8f] rounded-lg p-2 h-[300px] overflow-auto">
            <Spinner />
          </div>
        </div>
      </div>
    );
  return (
    <div>
      <div className="text-xl p-2">
        <h1>경매에 대해서 얘기를 나눠봐요!</h1>
      </div>
      <div
        ref={messagesEndRef}
        className="bg-[#96e5ff8f] rounded-lg p-2 h-[300px] overflow-auto">
        <div ref={ref}></div>
        {commentsData.reverse().map((item, idx) => (
          <div key={item.writerId + idx}>
            <ChatMessage
              avatar={item.profileImageUrl}
              nickname={item.nickname}
              message={item.content}
              createdAt={new Date("2024-03-20")}
              sender={item.writerId === user?.userId ? "me" : "you"}
              isSeller={item.isSeller}
              previousSender={
                idx > 0
                  ? commentsData[idx - 1].writerId === item.writerId
                    ? "me"
                    : "you"
                  : null
              }
            />
          </div>
        ))}
      </div>
      <CommentInput
        auctionStatus={auctionStatus}
        isLogin={user ? true : false}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Comment;
