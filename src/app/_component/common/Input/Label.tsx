interface LabelProps {
  className?: string;
}

const Label = ({
  className,
  children,
}: React.PropsWithChildren<LabelProps>) => {
  return <label className={className}>{children}</label>;
};

export default Label;
