import { PropsWithChildren } from "react";
import Avatar from "../Avatar";

interface UserCardProps {
  className?: string;
  onClickUserCard?: () => void;
}

interface ContentAreaProps {
  className?: string;
  onClickContentArea?: () => void;
}

const UserCardWrapper = ({
  className,
  children,
  onClickUserCard,
}: PropsWithChildren<UserCardProps>) => {
  return (
    <div onClick={onClickUserCard} className={`flex ${className}`}>
      {children}
    </div>
  );
};

const ContentArea = ({
  className,
  children,
  onClickContentArea,
}: PropsWithChildren<ContentAreaProps>) => {
  return (
    <div onClick={onClickContentArea} className={className}>
      {children}
    </div>
  );
};

const UserCard = Object.assign(UserCardWrapper, {
  Avatar,
  ContentArea,
});

export default UserCard;
