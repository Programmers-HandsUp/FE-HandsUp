import { VariantProps } from "class-variance-authority";

import { cn } from "@/utils/function/cn";

import { InputInnerBoxVariants } from "./InputInnerBox.variants";

interface InputInnerBoxProps
  extends VariantProps<typeof InputInnerBoxVariants> {
  className?: string;
}

const InputInnerBox = ({
  className,
  children,
  fontSize,
  rounded
}: React.PropsWithChildren<InputInnerBoxProps>) => {
  return (
    <div
      className={cn(InputInnerBoxVariants({ fontSize, rounded }), className)}>
      {children}
    </div>
  );
};

export default InputInnerBox;
