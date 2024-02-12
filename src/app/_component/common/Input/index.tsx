import React from "react";

import Label from "./Label";
import InputInnerBox from "./InputInnerBox";
import SubmitButton from "./SubmitButton";
import InputForm from "./InputForm";

interface InputWrapperProps {
  className?: string;
}

const InputWrapper = ({
  className,
}: React.PropsWithChildren<InputWrapperProps>) => {
  return <div className={`${className} flex`}>{children}</div>;
};

const Input = Object.assign(InputWrapper, {
  Label,
  InputInnerBox,
  SubmitButton,
  InputForm,
});

export default Input;
