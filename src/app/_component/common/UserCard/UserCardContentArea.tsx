import { PropsWithChildren } from "react";

interface UserCardContentAreaProps {
  className?: string;
  onClickContentArea?: () => void;
}

export const UserCardContentArea = ({
  className,
  children,
  onClickContentArea
}: PropsWithChildren<UserCardContentAreaProps>) => {
  return (
    <div
      onClick={onClickContentArea}
      className={className}>
      {children}
    </div>
  );
};
