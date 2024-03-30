import { useContext } from "react";

import { InputContext } from ".";

interface InputFormProps {
  className?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputForm = ({
  type,
  onKeyDown,
  className,
  ...props
}: InputFormProps) => {
  const { inputText, setInputText } = useContext(InputContext);

  return (
    <input
      value={inputText}
      onKeyDown={onKeyDown}
      onChange={(event) => setInputText(event.target.value)}
      className={className}
      {...props}
    />
  );
};

export default InputForm;
