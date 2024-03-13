import InputForm from "./InputForm";
import InputInnerBox from "./InputInnerBox";
import SubmitButton from "./SubmitButton";

interface InputWrapperProps {
  className?: string;
}
const InputWrapper = ({
  className,
  children
}: React.PropsWithChildren<InputWrapperProps>) => {
  return <div className={`${className} flex`}>{children}</div>;
};

const Input = Object.assign(InputWrapper, {
  InputInnerBox,
  SubmitButton,
  InputForm
});

export default Input;
