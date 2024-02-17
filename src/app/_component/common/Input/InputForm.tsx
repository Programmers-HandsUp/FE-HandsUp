import { cn } from "@/utils/cn";
import { InputVariants } from "./Input.variants";
import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

interface InputFormProps
  extends VariantProps<typeof InputVariants>,
    ComponentPropsWithoutRef<"input"> {
  wrapperStyle?: React.CSSProperties;
  className: string;
}

const InputForm = ({
  verticalAlign = "right",
  fontSize,
  wrapperStyle,
  className,
  ...props
}: InputFormProps) => {
  return (
    <div style={wrapperStyle}>
      <input
        className={cn(InputVariants({ fontSize, verticalAlign }), className)}
        {...props}
      />
    </div>
  );
};

export default InputForm;
