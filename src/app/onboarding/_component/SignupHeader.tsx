"use client";

import Icon from "@/app/_component/common/Icon";
import ProgressBar from "@/app/_component/common/ProgressBar";

interface SignupHeaderProps {
  nowPage: number;
  onClickRightButton: () => void;
}

const PAGE_PERCENTAGES = [20, 50, 75, 100];

const SignupHeader = ({ nowPage, onClickRightButton }: SignupHeaderProps) => {
  return (
    <header className="w-full h-[4rem]">
      <ProgressBar
        className="mx-auto mt-6 b-4"
        round={"little"}
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
