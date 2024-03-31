import { VariantProps } from "class-variance-authority";
import { createContext, useState } from "react";

import { cn } from "@/utils/function/cn";

import ClearButton from "./_components/ClearButton";
import InputForm from "./_components/InputForm";
import SubmitButton from "./_components/SubmitButton";
import { InputWrapperVariants } from "./InputWrapper.variants";

interface InputContextType {
  inputText: string;
  setInputText: (text: string) => void;
}

export const InputContext = createContext<InputContextType>({
  inputText: "",
  setInputText: () => {}
});

interface InputInnerBoxProps extends VariantProps<typeof InputWrapperVariants> {
  className?: string;
}

const InputWrapper = ({
  className,
  children,
  fontSize,
  rounded,
  variant,
  backgroundColor,
  borderColor
}: React.PropsWithChildren<InputInnerBoxProps>) => {
  const [inputText, setInputText] = useState("");

  const providerValue = { inputText, setInputText };

  return (
    <InputContext.Provider value={providerValue}>
      <div
        className={cn(
          InputWrapperVariants({
            backgroundColor,
            borderColor,
            variant,
            fontSize,
            rounded
          }),
          className
        )}>
        {children}
      </div>
    </InputContext.Provider>
  );
};

const Input = Object.assign(InputWrapper, {
  SubmitButton,
  InputForm,
  ClearButton
});

export default Input;
