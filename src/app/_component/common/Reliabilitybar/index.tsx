import { cn } from "@/utils/function/cn";

import { TextVariants, ThemeVariants } from "./Reliability.variants";

type Theme = "default" | "main" | "terrible" | "poor" | "good";

function ReliabilityBar({ score = 100 }) {
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
      <div className="flex justify-between p-2">
        <span>😈</span>
        <span className={cn(TextVariants({ theme }))}>{text}</span>
        <span>😇</span>
      </div>

      <div className="relative w-full h-3 rounded-full bg-gray-100 z-10">
        <div
          className="absolute h-3 z-100"
          style={{ width: `${width}%` }}>
          <div className={cn(ThemeVariants({ theme }))}></div>
        </div>
      </div>
    </div>
  );
}

export default ReliabilityBar;
