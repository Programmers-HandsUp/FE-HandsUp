interface InputProps {
  label?: string;
  block: boolean;
  invalid: boolean;
  required: boolean;
  disabled: boolean;
  wrapperProps: string;
}

const Input = ({
  label,
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  wrapperProps,
  ...props
}: InputProps) => {
  return (
    <div>
      <input required={required} disabled={disabled} {...props} />
    </div>
  );
};

export default Input;
