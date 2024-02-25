"use client";

import ProgressBar from "@/app/_component/common/ProgressBar";
import Icon from "@/app/_component/common/Icon";

interface SignupHeaderProps {
  nowPage: number;
  nowNavigate?: "Residence" | "Category" | "Profile";
  onClickRightButton: () => void;
}

const SignupHeader = ({ nowPage, onClickRightButton }: SignupHeaderProps) => {
  const getProgressbarPercentage = () => {
    if (nowPage === 0) {
      return 33;
    } else if (nowPage === 1) {
      return 66;
    } else {
      return 100;
    }
  };

  return (
    <header className="w-full h-[4rem]">
      <ProgressBar
        className="mx-auto mt-6 b-4"
        width={300}
        height={15}
        percent={getProgressbarPercentage()}
      />
      <div className="flex justify-end w-[300px] mx-auto my-4">
        <button onClick={onClickRightButton}>
          <Icon
            id="arrow-back"
            className="rotate-180"
            size={20}
          />
        </button>
      </div>
    </header>
  );
};

export default SignupHeader;
