import Image from "next/image";

import { cn } from "@/utils/function/cn";

import { TextVariants, ThemeVariants } from "./Reliability.variants";

type Theme = "default" | "main" | "terrible" | "poor" | "good";

function ReliabilityBar({ score = 100, icons_padding = 2 }) {
  const width = Math.floor(score / 2);
  const text = score === 100 ? "첫 매너 100%" : `${score}% 선해요`;

  let theme: Theme = "default";

  if (score >= 0 && score < 50) {
    theme = "terrible";
  } else if (score < 100) {
    theme = "poor";
  } else if (score === 100) {
    theme = "default";
  } else if (score < 150) {
    theme = "main";
  } else if (score < 200) {
    theme = "good";
  }

  return (
    <div>
      <div className={cn(`flex justify-between p-${icons_padding}`)}>
        <Image
          src="/assets/images/devil.webp"
          width={25}
          height={25}
          alt="슬픈 로고"
        />
        <span className={cn(TextVariants({ theme }))}>{text}</span>
        <Image
          src="/assets/images/angel.webp"
          width={25}
          height={25}
          alt="슬픈 로고"
        />
      </div>

      <div className="relative w-full h-3 rounded-full bg-gray-100">
        <div className="absolute top-0 left-0 overflow-hidden bg-transparent rounded-full w-full h-full">
          <div
            className={cn(
              ThemeVariants({ theme }),
              "absolute h-full animate-fill origin-left -translate-x-full"
            )}
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default ReliabilityBar;
