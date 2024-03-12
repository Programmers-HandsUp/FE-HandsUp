import { PropsWithChildren } from "react";

import Avatar from "../Avatar";
import { UserCardContentArea as ContentArea } from "./UserCardContentArea";

interface UserCardWrapperProps {
  className?: string;
  onClickUserCard?: () => void;
}

const UserCardWrapper = ({
  className,
  children,
  onClickUserCard
}: PropsWithChildren<UserCardWrapperProps>) => {
  return (
    <div
      onClick={onClickUserCard}
      className={`flex ${className}`}>
      {children}
    </div>
  );
};

const UserCard = Object.assign(UserCardWrapper, {
  Avatar,
  ContentArea
});

export default UserCard;
