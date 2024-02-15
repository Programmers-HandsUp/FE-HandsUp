interface ChipProps {
  id: string;
  value: string;
  isSelected: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "checkbox" | "radio";
}

const Chip = ({ id, value, isSelected, onChange, type }: ChipProps) => (
  <>
    <input
      id={id}
      type={type}
      value={value}
      checked={isSelected}
      onChange={onChange}
    />
    <label htmlFor={id}></label>
    <span>{value}</span>
  </>
);

export default Chip;
