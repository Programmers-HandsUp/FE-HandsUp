import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import { ImgHTMLAttributes } from "react";

interface Props extends VariantProps<typeof AvatarVariants>, Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> {
  src: string;
}

function Avatar({ size, rounded, src, ...props }: Props) {
  return (
    <div className={cn(AvatarVariants({ size, rounded }))}>
      <Image
        alt={props.alt || ""}
        src="/images1.webp"
        width={100}
        height={100}
        className="w-full h-full object-cover"
        {...props}
      />
    </div>
  );
}

export default Avatar;

export const AvatarVariants = cva(
  "relative overflow-hidden",
  {
    variants: {
      size: {
        small: "w-8 h-8",
        medium: "w-12 h-12",
        large: "w-24 h-24",
      },
      rounded: {
        none: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      size: "medium",
      rounded: "full",
    }
  }
);
