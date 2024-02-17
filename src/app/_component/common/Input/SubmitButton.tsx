import { cn } from "@/utils/cn";
import { SubmitButtonVariants } from "./SubmitButton.variants";
import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

interface SubmitButtonProps
  extends VariantProps<typeof SubmitButtonVariants>,
    ComponentPropsWithoutRef<"button"> {
  className?: string;
  buttonText?: string;
}

const SubmitButton = ({
  className,
  children,
  buttonText,
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
      className={cn(SubmitButtonVariants({ size, fontSize }), className)}
    >
      {buttonText ? buttonText : "확인"}
    </button>
  );
};

export default SubmitButton;
