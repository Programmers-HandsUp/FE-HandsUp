import { VariantProps } from "class-variance-authority";

import { cn } from "@/utils/function/cn";
import getPastTime from "@/utils/function/getPastTime";

import Avatar from "../Avatar";
import {
  chatMessageBoxVariants,
  chatMessageLayoutVariants
} from "./Chatmessage.variants";

interface Props
  extends VariantProps<typeof chatMessageLayoutVariants>,
    VariantProps<typeof chatMessageBoxVariants> {
  avatar: string;
  message: string;
  sender: "me" | "you";
  previousSender: "me" | "you" | null;
  nickname: string;
  createdAt: Date;
  isSeller?: boolean;
}

const ChatMessage = ({
  avatar,
  message,
  sender,
  nickname,
  createdAt,
  previousSender,
  isSeller = false,
  ...props
}: Props) => {
  return (
    <>
      <div
        {...props}
        className="relative flex flex-col text-black">
        <div className="absolute">
          {sender === "you" && previousSender !== "me" && (
            <div className="flex flex-col items-center w-[48px]">
              <Avatar
                src={avatar}
                alt="Avatar"
                rounded="full"
              />
              <div className="w-[48px]">
                {isSeller ? (
                  <div className="flex flex-col items-center">
                    <strong className="text-[13px]">👑주인장</strong>
                    <span className="w-[48px] text-[12px] overflow-hidden text-ellipsis whitespace-nowrap text-center">
                      {nickname}
                    </span>
                  </div>
                ) : (
                  nickname
                )}
              </div>
            </div>
          )}
        </div>

        <div className={cn(chatMessageLayoutVariants({ sender }))}>
          <div className={cn(chatMessageBoxVariants({ sender }))}>
            <span>{message}</span>
          </div>
          <div className="text-[8px] self-end">
            <span>{getPastTime(createdAt)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
