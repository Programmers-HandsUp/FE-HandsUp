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
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

const InputForm = ({
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  type,
  verticalAlign = "right",
  fontSize,
  placeHolder,
  wrapperStyle,
  value,
  onChange,
  className,
  ...props
}: InputFormProps) => {
  return (
    <div style={wrapperStyle}>
      <input
        value={value}
        onChange={onChange}
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
