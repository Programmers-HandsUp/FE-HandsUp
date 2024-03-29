import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { useContext } from "react";

import { cn } from "@/utils/function/cn";

import { InputContext } from ".";
import { SubmitButtonVariants } from "./SubmitButton.variants";

interface SubmitButtonProps
  extends VariantProps<typeof SubmitButtonVariants>,
    Omit<ComponentPropsWithoutRef<"button">, "color"> {
  onButtonClick: (inputText: string) => void;
  className?: string;
  buttonText?: string;
}

const SubmitButton = ({
  className,
  children,
  buttonText,
  onButtonClick,
  color,
  size,
  fontSize,
  ...props
}: PropsWithChildren<SubmitButtonProps>) => {
  const { inputText } = useContext(InputContext);
  return children ? (
    <button
      onClick={() => onButtonClick(inputText)}
      {...props}
      className={className}>
      {children}
    </button>
  ) : (
    <button
      onClick={() => onButtonClick(inputText)}
      {...props}
      className={cn(
        SubmitButtonVariants({ color, size, fontSize }),
        className
      )}>
      {buttonText ? buttonText : "확인"}
    </button>
  );
};

export default SubmitButton;
