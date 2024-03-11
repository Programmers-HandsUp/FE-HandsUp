import Image from "next/image";
import React from "react";

import tempLeftButton from "@/public/tempLeftButton.svg";

interface MoveButtonsUIProps {
  imageNum: number;
  moveButtonImage?: string;
  setSelectedScene: React.Dispatch<React.SetStateAction<number>>;
}

const MoveButtonsUI = ({
  imageNum,
  moveButtonImage = tempLeftButton,
  setSelectedScene
}: MoveButtonsUIProps) => {
  return (
    <div className="w-full absolute bottom-1/2 flex justify-between">
      <button
        onClick={() =>
          setSelectedScene((selectedNum) =>
            selectedNum ? selectedNum - 1 : selectedNum
          )
        }>
        <Image
          src={moveButtonImage}
          alt="leftButton"
        />
      </button>
      <button
        onClick={() =>
          setSelectedScene((selectedNum) =>
            selectedNum !== imageNum - 1 ? selectedNum + 1 : selectedNum
          )
        }>
        <Image
          className="rotate-180"
          src={moveButtonImage}
          alt="rightButton"
        />
      </button>
    </div>
  );
};

export default MoveButtonsUI;
