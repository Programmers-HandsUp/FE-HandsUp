import { cn } from "@/utils/cn";

interface InputInnerBox {
  className?: string;
}

const InputInnerBox = ({
  className,
  children,
}: React.PropsWithChildren<InputInnerBox>) => {
  return <div className={cn("px-1 flex bg-white", className)}>{children}</div>;
};

export default InputInnerBox;
