import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { chipVariants } from "./Chip.variants";

interface ChipProps extends VariantProps<typeof chipVariants> {
  value: string;
  isSelected?: boolean;
  onChange?: () => void;
  type?: string;
  children: ReactNode;
  size?: number;
}

export const Chip = ({
  value,
  isSelected,
  onChange,
  type,
  rounded,
  size,
  children,
  ...props
}: ChipProps) => {
  return (
    <div style={{ width: size ? `${size}px` : "auto" }}>
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
          isSelected ? "bg-[#96E4FF]" : ""
        )}
        {...props}
      >
        {children}
      </label>
    </div>
  );
};
