import { MouseEvent } from "react";

import Icon from "../Icon";

interface LikeButtonProps {
  initialState: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const BookmarkButton = ({ initialState = false, onClick }: LikeButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className="outline-none">
      {initialState ? (
        <Icon
          id="book-mark-fill"
          className="animate-beat fill-[#96E4FF]"
        />
      ) : (
        <Icon id="book-mark" />
      )}
    </button>
  );
};

export default BookmarkButton;
