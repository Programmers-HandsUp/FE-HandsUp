import { PropsWithChildren } from "react";

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const SubmitButton = ({
  className,
  children,
  ...props
}: PropsWithChildren<SubmitButtonProps>) => {
  return (
    <button
      {...props}
      className={className}>
      {children}
    </button>
  );
};

export default SubmitButton;
