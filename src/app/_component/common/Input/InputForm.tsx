import { cn } from "@/utils/cn";
import { InputVariants } from "./Input.variants";
import { VariantProps } from "class-variance-authority";

interface InputFormProps extends VariantProps<typeof InputVariants> {
  block?: boolean;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  wrapperStyle?: React.CSSProperties;
  placeHolder?: string;
  type?: string;
  className: string;
}

const InputForm = ({
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  type,
  verticalAlign = "center",
  fontSize,
  placeHolder = "가나다라마바사",
  wrapperStyle,
  className,
  ...props
}: InputFormProps) => {
  return (
    <div style={wrapperStyle}>
      <input
        className={cn(InputVariants({ verticalAlign }), className)}
        type={type}
        placeholder={placeHolder}
        required={required}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default InputForm;
