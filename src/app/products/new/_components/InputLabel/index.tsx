import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors } from "react-hook-form";
import { RegisterProduct } from "../../page";
import { PropsWithChildren } from "react";

interface InputLabelProps {
  title?: React.ReactNode;
  errors: FieldErrors<RegisterProduct>;
  name: keyof RegisterProduct;
  className?: string;
}

function InputLabel({ title, errors, name, children, className }: PropsWithChildren<InputLabelProps>) {
  return (
    <div className="my-3">
      <p className={`${title} ? my-2 : ""`}>{title}</p>
      {children}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className={`text-red-600 mt-2 ${className}`}>{message}</p>}
      />
    </div>
  );
}

export default InputLabel;
