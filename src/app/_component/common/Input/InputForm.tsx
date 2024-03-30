import { useContext } from "react";

import { InputContext } from ".";

interface InputFormProps {
  className?: string;
}

const InputForm = ({ className, ...props }: InputFormProps) => {
  const { inputText, setInputText } = useContext(InputContext);

  return (
    <input
      value={inputText}
      onChange={(event) => setInputText(event.target.value)}
      className={className}
      {...props}
    />
  );
};

export default InputForm;
