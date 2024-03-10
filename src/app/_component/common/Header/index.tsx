import { ReactNode } from "react";

interface HeaderProps {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}

const Header = ({ left, center, right }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center p-3 gap-4">
      <div style={{ flex: 1 }}>{left || <div></div>}</div>
      <div style={{ flex: 1, textAlign: "center" }}>
        {center || <div></div>}
      </div>
      <div style={{ flex: 1, textAlign: "right" }}>{right || <div></div>}</div>
    </div>
  );
};
export default Header;
