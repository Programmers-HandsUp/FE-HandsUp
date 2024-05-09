import { VariantProps } from "class-variance-authority";
import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode
} from "react";

import { cn } from "@/utils/function/cn";

import { chipsVariants } from "./Chips.variants";

interface ChipsProps<T extends string | string[]>
  extends VariantProps<typeof chipsVariants> {
  children: React.ReactNode;
  Items: T;
  setItems: React.Dispatch<React.SetStateAction<T>> | ((items: T) => void);
  multiple?: boolean;
  size?: number;
  limit?: number;
  className?: string;
}

export const Chips = <T extends string | string[]>({
  children,
  spacing,
  rounded,
  limit,
  size,
  Items,
  setItems,
  multiple,
  className
}: ChipsProps<T>) => {
  const handleCheckboxChange = (value: string) => {
    if (multiple && Array.isArray(Items)) {
      const updatedSelection = Items.includes(value)
        ? Items.filter((item) => item !== value)
        : [...Items, value];
      if (!(limit && updatedSelection.length <= limit)) return;
      setItems(updatedSelection as T);
    } else {
      setItems(value as T);
    }
  };

  const renderChips = Children.map(
    children,
    (child: ReactNode, index: number) => {
      if (isValidElement(child)) {
        return cloneElement(child as ReactElement, {
          key: index,
          rounded,
          size,
          isSelected: Items?.includes(child.props.value),
          onChange: () => handleCheckboxChange(child.props.value),
          type: multiple ? "checkbox" : "radio"
        });
      }
      return null;
    }
  );

  return (
    <div className={cn(chipsVariants({ spacing }), className)}>
      {renderChips}
    </div>
  );
};
