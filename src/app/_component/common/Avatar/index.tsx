import { cn } from "@/utils/cn";
import { VariantProps } from "class-variance-authority";
import Image from "next/image";
import { ImgHTMLAttributes } from "react";
import { AvatarVariants } from "./Avatar.variants";

interface Props extends VariantProps<typeof AvatarVariants>, Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> {
  src: string;
}

function Avatar({ size, rounded, src, ...props }: Props) {
  return (
    <div className={cn(AvatarVariants({ size, rounded }))}>
      <Image
        alt={props.alt || ""}
        src={src}
        width={100}
        height={100}
        className="w-full h-full object-cover"
        {...props}
      />
    </div>
  );
}

export default Avatar;
