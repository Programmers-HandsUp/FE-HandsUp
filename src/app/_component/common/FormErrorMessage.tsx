import { ReactNode } from "react";
import { FieldError, FieldErrors } from "react-hook-form";

interface FormErrorsMessageProps {
  errors: FieldErrors;
  render: (errorMessageList: (string | undefined)[]) => ReactNode;
}

function getErrorMessage(error: FieldError | undefined): string | undefined {
  if (!error) return;
  return error.message;
}

export default function FormErrorsMessage({
  errors,
  render
}: FormErrorsMessageProps) {
  const errorList = Object.entries(errors).map(([_, error]) =>
    getErrorMessage(error as FieldError)
  );
  return errorList.length > 0 ? render(errorList) : null;
}
