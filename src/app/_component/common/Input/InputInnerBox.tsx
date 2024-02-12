interface InputInnerBox {
  className?: string;
}

const InputInnerBox = ({
  className,
  children,
}: React.PropsWithChildren<InputInnerBox>) => {
  return <div className={`${className} flex`}>{children}</div>;
};

export default InputInnerBox;
