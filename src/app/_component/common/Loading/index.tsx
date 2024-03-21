import Image from "next/image";

import { cn } from "@/utils/function/cn";

interface LoadingProps {
  className?: string;
}

function Loading({ className }: LoadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-3 h-svh m-auto",
        className
      )}>
      <div className="animate-bounce">
        <Image
          src="/assets/images/logo.webp"
          width={200}
          height={200}
          alt="Hands Up Logo"
        />
      </div>
      <p>잠시만 기다려주세요 :)</p>
    </div>
  );
}

export default Loading;
