import { cn } from "@/utils/cn";
import { ChatMessageVariants } from "./Chatmessage.variants";
import { VariantProps } from "class-variance-authority";

interface Props extends VariantProps<typeof ChatMessageVariants> {
  avatar?: string;
  message: string;
  sender: "me" | "you";
}

const ChatMessage = ({ avatar, message, sender, ...props }: Props) => {
  return (
    <div className={cn(ChatMessageVariants({ sender }))} {...props}>
      {avatar && <img src={avatar} alt="Avatar" className="mr-2" />}
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
