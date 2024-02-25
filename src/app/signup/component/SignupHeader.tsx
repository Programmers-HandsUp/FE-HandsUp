"use client";

import Icon from "@/app/_component/common/Icon";

interface SignupHeaderProps {
  nowPage: number;
  nowNavigate?: "Residence" | "Category" | "Profile";
  onClickLeftButton: () => void;
  onClickRightButton: () => void;
}

const SignupHeader = ({
  nowPage,
  onClickLeftButton,
  onClickRightButton
}: SignupHeaderProps) => {
  return (
    <header className="w-full h-[4rem]">
      <div className="w-3/4 h-[1rem] mx-auto bg-blue-200" />
      <div className="flex justify-between">
        <button onClick={onClickLeftButton}>
          <Icon id="arrow-back" />
        </button>
        <button onClick={onClickRightButton}>
          <Icon
            id="arrow-back"
            className="rotate-180"
          />
        </button>
      </div>
    </header>
  );
};

export default SignupHeader;
