"use client";

import Image from "next/image";

import { cn } from "@/utils/function/cn";
import hans from "~/images/hans/hans.webp";
import hansHands from "~/images/hans/hansHands.webp";

interface HansProps {
  hansHandsAnimate: "raiseUpHands" | "raiseDownHands" | "none";
  className?: string;
}

const Hans = ({ hansHandsAnimate, className }: HansProps) => {
  const getHansAnimateType = () => {
    if (hansHandsAnimate === "raiseUpHands") {
      return "animate-slideUp";
    } else if (hansHandsAnimate === "raiseDownHands") {
      return "animate-slideDown";
    }
  };

  return (
    <div className="w-[130px] h-[130px] overflow-hidden mx-auto">
      <Image
        width={130}
        height={130}
        src={hans}
        alt="d"
      />
      <Image
        className={cn(getHansAnimateType(), className)}
        width={200}
        height={150}
        src={hansHands}
        alt="d"
      />
    </div>
  );
};

export default Hans;
