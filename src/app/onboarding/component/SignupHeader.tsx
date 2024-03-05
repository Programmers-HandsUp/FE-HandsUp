"use client";

import ProgressBar from "@/app/_component/common/ProgressBar";
import Icon from "@/app/_component/common/Icon";

interface SignupHeaderProps {
  nowPage: number;
  onClickRightButton: () => void;
}

const PAGE_PERCENTAGES = [20, 50, 75, 100];

const SignupHeader = ({ nowPage, onClickRightButton }: SignupHeaderProps) => {
  const getProgressbarPercentage = () => {
    if (nowPage === 0) {
      return 20;
    } else if (nowPage === 1) {
      return 50;
    } else if (nowPage === 2) {
      return 75;
    }
    return 100;
  };

  return (
    <header className="w-full h-[4rem]">
      <ProgressBar
        className="mx-auto mt-6 b-4"
        width={300}
        height={15}
        percent={PAGE_PERCENTAGES[nowPage]}
      />
      <div className="flex justify-end w-[300px] mx-auto my-4">
        {nowPage < 3 && (
          <button onClick={onClickRightButton}>
            <Icon
              id="arrow-back"
              className="rotate-180"
              size={20}
            />
          </button>
        )}
      </div>
    </header>
  );
};

export default SignupHeader;
