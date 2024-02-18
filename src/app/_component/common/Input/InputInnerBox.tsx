import { cn } from "@/utils/cn";
import { InputInnerBoxVariants } from "./InputInnerBox.variants";
import { VariantProps } from "class-variance-authority";

interface InputInnerBoxProps
  extends VariantProps<typeof InputInnerBoxVariants> {
  className?: string;
}

const InputInnerBox = ({
  className,
  children,
  fontSize,
  rounded,
}: React.PropsWithChildren<InputInnerBoxProps>) => {
  return (
    <div
      className={cn(InputInnerBoxVariants({ fontSize, rounded }), className)}
    >
      {children}
    </div>
  );
};

export default InputInnerBox;
