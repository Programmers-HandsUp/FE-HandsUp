import InputInnerBox from "./InputInnerBox";
import SubmitButton from "./SubmitButton";
import InputForm from "./InputForm";

interface InputWrapperProps {
  className?: string;
}
const InputWrapper = ({
  className,
  children,
}: React.PropsWithChildren<InputWrapperProps>) => {
  return <div className={`${className} flex`}>{children}</div>;
};

const Input = Object.assign(InputWrapper, {
  InputInnerBox,
  SubmitButton,
  InputForm,
});

export default Input;
