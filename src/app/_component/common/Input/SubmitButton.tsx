import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import { cn } from "@/utils/function/cn";

import { SubmitButtonVariants } from "./SubmitButton.variants";

interface SubmitButtonProps
  extends VariantProps<typeof SubmitButtonVariants>,
    Omit<ComponentPropsWithoutRef<"button">, "color"> {
  className?: string;
  buttonText?: string;
}

const SubmitButton = ({
  className,
  children,
  buttonText,
  color,
  size,
  fontSize,
  ...props
}: PropsWithChildren<SubmitButtonProps>) => {
  return children ? (
    <button
      {...props}
      className={className}>
      {children}
    </button>
  ) : (
    <button
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
