import { cn } from "@/utils/cn";
import { InputVariants } from "./Input.variants";
import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

interface InputFormProps
  extends VariantProps<typeof InputVariants>,
    Omit<ComponentPropsWithoutRef<"input">, "size"> {
  wrapperStyle?: React.CSSProperties;
  className?: string;
}

const InputForm = ({
  verticalAlign,
  fontSize,
  wrapperStyle,
  size,
  className,
  ...props
}: InputFormProps) => {
  return (
    <div style={wrapperStyle}>
      <input
        className={cn(
          InputVariants({ size, fontSize, verticalAlign }),
          className
        )}
        {...props}
      />
    </div>
  );
};

export default InputForm;
