import { PropsWithChildren } from "react";

type PriceButtonProps = PropsWithChildren<{
  handleClickEvent: () => void;
}>;

function PriceButton({ children, handleClickEvent }: PriceButtonProps) {
  return (
    <button
      type="button"
      className="border w-16 rounded-full hover:bg-[#96E4FF] transition-all"
      onClick={handleClickEvent}>
      {children}
    </button>
  );
}

export default PriceButton;
