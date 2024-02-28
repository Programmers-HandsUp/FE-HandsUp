import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";

import { cn } from "@/utils/function/cn";

import { InputVariants } from "./Input.variants";

interface InputFormProps
  extends VariantProps<typeof InputVariants>,
    Omit<ComponentPropsWithoutRef<"input">, "size"> {
  wrapperStyle?: React.CSSProperties;
  className?: string;
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  (
    { verticalAlign, fontSize, wrapperStyle, size, className, ...props },
    ref
  ) => {
    return (
      <div style={wrapperStyle}>
        <input
          ref={ref}
          className={cn(
            InputVariants({ size, fontSize, verticalAlign }),
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
InputForm.displayName = "InputForm";
export default InputForm;
