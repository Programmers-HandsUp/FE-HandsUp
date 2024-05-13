import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { useContext } from "react";

import { cn } from "@/utils/function/cn";

import { InputContext } from "..";
import { ClearButtonVariants } from "./ClearButton.variants";

interface ClearButtonProps
  extends VariantProps<typeof ClearButtonVariants>,
    Omit<ComponentPropsWithoutRef<"button">, "color"> {
  className?: string;
  buttonText?: string;
}

const ClearButton = ({
  className,
  children,
  buttonText,
  color,
  size,
  fontSize,
  ...props
}: PropsWithChildren<ClearButtonProps>) => {
  const { setInputText } = useContext(InputContext);
  return children ? (
    <button
      onClick={() => setInputText("")}
      {...props}
      className={className}>
      {children}
    </button>
  ) : (
    <button
      onClick={() => setInputText("")}
      {...props}
      className={cn(ClearButtonVariants({ color, size, fontSize }), className)}>
      {buttonText ? buttonText : "X"}
    </button>
  );
};

export default ClearButton;
