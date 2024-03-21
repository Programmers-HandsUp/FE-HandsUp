import Icon from "../../common/Icon";

interface PermissionMessageProps {
  children: React.ReactNode;
  type: "notification-off" | "bell";
}

function PermissionMessage({ children, type }: PermissionMessageProps) {
  return (
    <div className="flex items-center border p-2 mt-2 rounded-md">
      <Icon
        id={type}
        className="w-6 h-6"
        fill="white"
        stroke="white"
      />
      <div className="pl-4">{children}</div>
    </div>
  );
}

export default PermissionMessage;
