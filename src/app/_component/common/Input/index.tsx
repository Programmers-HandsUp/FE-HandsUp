import { createContext, useState } from "react";

import ClearButton from "./ClearButton";
import InputForm from "./InputForm";
import InputInnerBox from "./InputInnerBox";
import SubmitButton from "./SubmitButton";

interface InputContextType {
  inputText: string;
  setInputText: (text: string) => void;
}

export const InputContext = createContext<InputContextType>({
  inputText: "",
  setInputText: () => {}
});

interface InputWrapperProps {
  className?: string;
}

const InputWrapper = ({
  className,
  children
}: React.PropsWithChildren<InputWrapperProps>) => {
  const [inputText, setInputText] = useState("");

  const providerValue = { inputText, setInputText };
  return (
    <InputContext.Provider value={providerValue}>
      <div className={`${className} flex`}>{children}</div>
    </InputContext.Provider>
  );
};

const Input = Object.assign(InputWrapper, {
  InputInnerBox,
  SubmitButton,
  InputForm,
  ClearButton
});

export default Input;
