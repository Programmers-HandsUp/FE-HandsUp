import { ComponentProps } from "react";
import { IconName } from "./type";

interface IconProps extends Omit<ComponentProps<"svg">, "width" | "height"> {
  size?: number;
  id: IconName;
}

const Icon = ({ id, size = 24, ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill="currentColor"
      {...props}>
      <use href={`/assets/icon-sprite.svg#icon-${id}`} />
    </svg>
  );
};

export default Icon;
