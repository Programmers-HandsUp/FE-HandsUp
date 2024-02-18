import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import { cn } from "@/utils/cn";
import { SubmitButtonVariants } from "./SubmitButton.variants";
import { VariantProps } from "class-variance-authority";

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
    <button {...props} className={className}>
      {children}
    </button>
  ) : (
    <button
      {...props}
      className={cn(SubmitButtonVariants({ color, size, fontSize }), className)}
    >
      {buttonText ? buttonText : "확인"}
    </button>
  );
};

export default SubmitButton;
