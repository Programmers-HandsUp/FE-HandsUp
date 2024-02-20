import { cva } from "class-variance-authority";

export const ChatMessageVariants = cva(
  "px-4 py-2 mt-2 max-w-56 whitespace-pre-line",
  {
    variants: {
      sender: {
        me: "bg-[#96E4FF] rounded-l-3xl rounded-br-2xl hover:bg-[#96E4FF]/50 self-end",
        you: "bg-[#D9D9D9] ml-14 rounded-r-3xl rounded-bl-2xl hover:bg-[#D9D9D9]/50 self-start",
      }
    },
    defaultVariants: {
      sender: "me"
    }
  }
);
