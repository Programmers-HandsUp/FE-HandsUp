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
    <header className="w-[325px] h-[4rem] flex mx-[1.5rem] justify-between ">
      <ProgressBar
        className="mt-6"
        round={"little"}
        width={300}
        height={18}
        percent={PAGE_PERCENTAGES[nowPage]}
      />
      {nowPage < 3 && (
        <button onClick={onClickRightButton}>
          <Icon
            id="arrow-back"
            className="rotate-180"
            size={20}
          />
        </button>
      )}
    </header>
  );
};

export default SignupHeader;
