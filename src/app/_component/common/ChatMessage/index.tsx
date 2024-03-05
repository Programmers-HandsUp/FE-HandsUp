import { cn } from "@/utils/cn";
import {
  chatMessageBoxVariants,
  chatMessageLayoutVariants
} from "./Chatmessage.variants";
import { VariantProps } from "class-variance-authority";
import Avatar from "../Avatar";
import getPastTime from "@/utils/getPastTime";

interface Props
  extends VariantProps<typeof chatMessageLayoutVariants>,
    VariantProps<typeof chatMessageBoxVariants> {
  avatar: string;
  message: string;
  sender: "me" | "you";
  previousSender: "me" | "you" | null;
  nickname: string;
  createdAt: Date;
}

const ChatMessage = ({
  avatar,
  message,
  sender,
  nickname,
  createdAt,
  previousSender,
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
              <span className="w-[48px] overflow-hidden text-ellipsis whitespace-nowrap">
                {nickname}
              </span>
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
