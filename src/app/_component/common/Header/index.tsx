import { ReactNode } from "react";

interface HeaderProps {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  leftFlex?: boolean;
  rightFlex?: boolean;
  centerFlex?: boolean;
}

const Header = ({
  left,
  center,
  right,
  leftFlex,
  centerFlex,
  rightFlex,
}: HeaderProps) => {
  return (
    <div className="flex justify-between items-center p-3 gap-4">
      {left && <div className={leftFlex ? "flex-1" : ""}>{left}</div>}
      {center && <div className={centerFlex ? "flex-1" : ""}>{center}</div>}
      {right && <div className={rightFlex ? "flex-1" : ""}>{right}</div>}
    </div>
  );
};
export default Header;
