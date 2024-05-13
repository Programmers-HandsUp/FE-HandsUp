import { PropsWithChildren } from "react";
import { useContext } from "react";

import { InputContext } from "..";

interface SubmitButtonProps {
  onButtonClick: (inputText: string) => void;
  className?: string;
}

const SubmitButton = ({
  className,
  children,
  onButtonClick,
  ...props
}: PropsWithChildren<SubmitButtonProps>) => {
  const { inputText } = useContext(InputContext);
  return (
    <button
      onClick={() => onButtonClick(inputText)}
      {...props}
      className={className}>
      {children}
    </button>
  );
};

export default SubmitButton;
