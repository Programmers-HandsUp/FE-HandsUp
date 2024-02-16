import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

interface SubmitButtonProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
  buttonText?: string;
}

const SubmitButton = ({
  className,
  children,
  buttonText,
  ...props
}: PropsWithChildren<SubmitButtonProps>) => {
  return children ? (
    <button {...props} className={className}>
      {children}
    </button>
  ) : (
    <button {...props} className={className}>
      {buttonText ? buttonText : "확인"}
    </button>
  );
};

export default SubmitButton;
