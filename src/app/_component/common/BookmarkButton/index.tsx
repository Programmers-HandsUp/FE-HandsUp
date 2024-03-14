import { MouseEvent } from "react";

import Icon from "../Icon";

interface LikeButtonProps {
  initialState: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const BookmarkButton = ({ initialState = false, onClick }: LikeButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onClick && onClick(e);
  };
  const handleStopPropagation = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={handleStopPropagation}
      onMouseMove={handleStopPropagation}
      onMouseUp={handleStopPropagation}
      onMouseLeave={handleStopPropagation}
      className="outline-none hover:bg-black">
      {initialState ? (
        <Icon
          id="book-mark-fill"
          className="animate-beat fill-[#96E4FF]"
        />
      ) : (
        <Icon
          id="book-mark"
          className="text-[#96E4FF]"
        />
      )}
    </button>
  );
};

export default BookmarkButton;
