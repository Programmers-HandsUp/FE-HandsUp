interface SubmitButtonProps {
  className?: string;
}

const SubmitButton = ({
  className,
  children,
}: React.PropsWithChildren<SubmitButtonProps>) => {
  return <label className={className}>{children}</label>;
};

export default SubmitButton;
