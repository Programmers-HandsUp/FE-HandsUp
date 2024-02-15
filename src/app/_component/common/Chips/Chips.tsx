import { ChangeEvent } from "react";
import Chip from "./Chip";

interface ChipsProps {
  items: string[];
  selectedItems: string[];
  onSelectionChange: (updatedSelection: string[]) => void;
  multiple?: boolean;
}

const Chips = ({
  items,
  selectedItems,
  onSelectionChange,
  multiple,
}: ChipsProps) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const updatedSelection = selectedItems.includes(value)
      ? selectedItems.filter((item) => item !== value)
      : [...selectedItems, value];

    onSelectionChange(updatedSelection);
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <Chip
          key={`${item}+${index}`}
          id={`${item}+${index}`}
          value={item}
          isSelected={selectedItems.includes(item)}
          onChange={handleCheckboxChange}
          type={multiple ? "checkbox" : "radio"}
        />
      ))}
    </div>
  );
};

export default Chips;
