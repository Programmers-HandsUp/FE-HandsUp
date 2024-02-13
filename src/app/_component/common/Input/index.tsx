import { cn } from "@/utils/cn";
import { ReactNode } from "react";
import { VariantProps } from "class-variance-authority";
import { InputVariants } from "./Input.variants";

interface InputProps extends VariantProps<typeof InputVariants> {
  block?: boolean;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  wrapperStyle?: React.CSSProperties;
  placeHolder?: string;
  type?: string;
  className: string;
}

interface InputWrapperProps {
  className?: string;
}

interface OuterLabelProps {
  className?: string;
}

interface SubmitButtonProps {
  className?: string;
}

const InputArea = ({
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
}: InputProps) => {
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

const InputWrapper = ({
  className,
  children,
}: React.PropsWithChildren<InputWrapperProps>) => {
  return <div className={`${className} flex`}>{children}</div>;
};

const InputBox = ({
  className,
  children,
}: React.PropsWithChildren<InputWrapperProps>) => {
  return <div className={`${className} flex`}>{children}</div>;
};

const Label = ({
  className,
  children,
}: React.PropsWithChildren<OuterLabelProps>) => {
  return <label className={className}>{children}</label>;
};

const SubmitButton = ({
  className,
  children,
}: React.PropsWithChildren<SubmitButtonProps>) => {
  return <label className={className}>{children}</label>;
};

const Input = Object.assign(InputWrapper, {
  Label: Label,
  InputArea: InputArea,
  InputBox: InputBox,
  SubmitButton: SubmitButton,
});

export default Input;
