interface SubmitButtonProps {
  className?: string;
  buttonText?: string;
  onClickSubmitButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SubmitButton = ({
  className,
  children,
  onClickSubmitButton,
  buttonText,
}: React.PropsWithChildren<SubmitButtonProps>) => {
  return children ? (
    <button onClick={onClickSubmitButton} className={className}>
      {children}
    </button>
  ) : (
    <button onClick={onClickSubmitButton} className={className}>
      {buttonText ? buttonText : "확인"}
    </button>
  );
};

export default SubmitButton;
