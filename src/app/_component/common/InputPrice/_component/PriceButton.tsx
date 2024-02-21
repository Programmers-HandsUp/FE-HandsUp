import { PropsWithChildren } from "react";

type PriceButtonProps = PropsWithChildren<{
  handleClickEvent: () => void;
}>;

function PriceButton({ children, handleClickEvent }: PriceButtonProps) {
  return (
    <button
      type="button"
      className="border w-16 h-9 rounded-full border-[#96E4FF] bg-[#FAFAFA]"
      onClick={handleClickEvent}>
      {children}
    </button>
  );
}

export default PriceButton;
