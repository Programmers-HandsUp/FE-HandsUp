import { cn } from "@/utils/cn";
import { ChatMessageVariants } from "./Chatmessage.variants";
import { VariantProps } from "class-variance-authority";
import Avatar from "../Avatar";

interface Props extends VariantProps<typeof ChatMessageVariants> {
  avatar: string;
  message: string;
  sender: "me" | "you";
  previousSender: "me" | "you" | null;
}

const ChatMessage = ({
  avatar,
  message,
  sender,
  previousSender,
  ...props
}: Props) => {
  return (
    <>
      <div {...props} className='flex flex-col'>
        <div className='absolute'>
          {sender === "you" && previousSender !== "you" && (
            <Avatar src={avatar} alt='Avatar' rounded='full' />
          )}
        </div>
        <div className={cn(ChatMessageVariants({ sender }))}>
          <span>{message}</span>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
