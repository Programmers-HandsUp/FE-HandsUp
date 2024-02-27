import { VariantProps } from "class-variance-authority";
import {
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement
} from "react";
import { chipsVariants } from "./Chips.variants";
import { cn } from "@/utils/cn";

interface ChipsProps<T extends string | string[]>
  extends VariantProps<typeof chipsVariants> {
  children: React.ReactNode;
  Items: T;
  setItems: React.Dispatch<React.SetStateAction<T>> | ((items: T) => void);
  multiple?: boolean;
  size?: number;
}

export const Chips = <T extends string | string[]>({
  children,
  spacing,
  rounded,
  size,
  Items,
  setItems,
  multiple,
  ...props
}: ChipsProps<T>) => {
  const handleCheckboxChange = (value: string) => {
    if (multiple && Array.isArray(Items)) {
      const updatedSelection = Items.includes(value)
        ? Items.filter((item) => item !== value)
        : [...Items, value];

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
          isSelected: Items.includes(child.props.value),
          onChange: () => handleCheckboxChange(child.props.value),
          type: multiple ? "checkbox" : "radio"
        });
      }
      return null;
    }
  );

  return (
    <div
      className={cn(chipsVariants({ spacing }))}
      {...props}>
      {renderChips}
    </div>
  );
};
