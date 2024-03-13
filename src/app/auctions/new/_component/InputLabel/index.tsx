import { ErrorMessage } from "@hookform/error-message";
import { PropsWithChildren } from "react";
import { FieldErrors } from "react-hook-form";

import { RegisterAuction } from "../../page";

interface InputLabelProps {
  title?: React.ReactNode;
  errors: FieldErrors<RegisterAuction>;
  name: keyof RegisterAuction;
  className?: string;
}

function InputLabel({
  title,
  errors,
  name,
  children,
  className
}: PropsWithChildren<InputLabelProps>) {
  return (
    <div className="my-3">
      <div className={`${title} ? my-2 : ""`}>{title}</div>
      {children}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className={`text-red-600 mt-2 ${className}`}>{message}</p>
        )}
      />
    </div>
  );
}

export default InputLabel;
