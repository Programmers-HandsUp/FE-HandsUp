import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";
import Icon from "../Icon";
import { IconName } from "../Icon/type";
import { ButtonVariants } from "./Button.variants";
import { VariantProps } from "class-variance-authority";

interface Props extends VariantProps<typeof ButtonVariants>, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  icon?: IconName;
  color: "primary" | "gray" | "darkGray" | "yellow";
  loading?: boolean;
  children: ReactNode;
}

const Button = ({ size, rounded, icon, color, loading, children, ...props }: Props) => {
  return (
    loading ? 
    <button className={cn(ButtonVariants({ size, rounded, color }))} {...props} disabled>
      Loading
    </button>
    :
    <button className={cn(ButtonVariants({ size, rounded, color }))} {...props}>
      {icon && <Icon id={icon} size={24} className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;
