import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";
import Icon from "../Icon";
import { IconName } from "../Icon/type";
import { ButtonVariants } from "./Button.variants";
import { VariantProps } from "class-variance-authority";

interface Props extends VariantProps<typeof ButtonVariants>, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  icon?: IconName;
  color: "primary" | "gray" | "yellow";
  text: string;
}

function Button({ size, rounded, icon, color, text, ...props }: Props) {
  return (
    <button className={cn(ButtonVariants({ size, rounded, color }))} {...props}>
      {icon && <Icon id={icon} size={24} className="mr-2" />}
      {text}
    </button>
  );
}

export default Button;
