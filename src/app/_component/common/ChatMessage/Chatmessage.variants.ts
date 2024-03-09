import { cva } from "class-variance-authority";

export const chatMessageLayoutVariants = cva("flex ", {
  variants: {
    sender: {
      me: "self-end flex-row-reverse",
      you: "self-start"
    }
  },
  defaultVariants: {
    sender: "me"
  }
});

export const chatMessageBoxVariants = cva(
  "px-4 py-2 mt-2 max-w-56 whitespace-pre-line",
  {
    variants: {
      sender: {
        me: "bg-[#96E4FF] rounded-l-3xl rounded-br-2xl hover:bg-[#96E4FF]/50",
        you: "bg-[#D9D9D9] ml-14 rounded-r-3xl rounded-bl-2xl hover:bg-[#D9D9D9]/50 "
      }
    }
  }
);
