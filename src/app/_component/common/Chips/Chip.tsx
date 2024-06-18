import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

import { cn } from "@/utils/function/cn";

import { chipVariants } from "./Chip.variants";

interface ChipProps extends VariantProps<typeof chipVariants> {
  value: string;
  isSelected?: boolean;
  onChange?: () => void;
  style?: string;
  type?: string;
  children: ReactNode;
  size?: number;
  selectedStyle?: string;
  className?: string;
}

export const Chip = ({
  value,
  isSelected,
  onChange,
  type,
  rounded,
  size,
  children,
  style = "noneBorder",
  selectedStyle = "bg-[#96E4FF]",
  className,
  ...props
}: ChipProps) => {
  return (
    <div
      style={{
        width: size ? `${size}px` : "auto",
        height: size ? `${size}px` : "auto"
      }}>
      <input
        id={value}
        type={type}
        value={value}
        checked={isSelected}
        onChange={onChange}
        className={cn("hidden")}
      />
      <label
        htmlFor={value}
        className={cn(
          chipVariants({ rounded }),
          className,
          isSelected ? `${selectedStyle}` : ""
        )}
        {...props}>
        {children}
      </label>
    </div>
  );
};
