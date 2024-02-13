import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import Icon from "../Icon";
import { IconName } from "../Icon/type";

interface Props extends VariantProps<typeof ButtonVariants>, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  icon?: IconName;
  color: "primary" | "gray" | "yellow";
  text: string;
}

function Button({ size, rounded, icon, color, text, ...props }: Props) {
  return (
    <button className={cn(ButtonVariants({ size, rounded, color }), rounded ? "rounded-full" : "rounded-md")} {...props}>
      {icon && <Icon id={icon} size={24} className="mr-2" />}
      {text}
    </button>
  );
}

export default Button;

export const ButtonVariants = cva(
  "inline-flex items-center justify-center",
  {
    variants: {
      size: {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2",
        large: "px-6 py-3 text-lg",
      },
      rounded: {
        none: "rounded-md",
        full: "rounded-full",
      },
      color: {
        primary: "bg-[#96E4FF] text-black hover:bg-[#96E4FF]-dark",
        gray: "bg-[#D9D9D9] text-white hover:bg-[#D9D9D9]-dark",
        yellow: "bg-[#FFE604] text-white hover:bg-[#D9D9D9]-dark",
      }
    },
    defaultVariants: {
      size: "medium",
      rounded: "none",
      color: "primary"
    }
  }
);
