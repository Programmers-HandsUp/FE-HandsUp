import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";

interface Props extends VariantProps<typeof BadgeVariants> {
  children: React.ReactElement;
  content?: React.ReactElement;
  maxCount?: number;
}

function Badge({
  children,
  badgeType,
  content,
  position,
  size,
  maxCount
}: Props) {
  return (
    <div className="relative inline-block">
      {children}
      <span className={cn(BadgeVariants({ position, size, badgeType }))}>
        {typeof content === "number" && maxCount && content > maxCount
          ? `${maxCount}+`
          : content}
      </span>
    </div>
  );
}

export default Badge;

export const BadgeVariants = cva(
  "absolute text-sm inline-flex justify-center items-center rounded-full",
  {
    variants: {
      position: {
        "top-left": "left-0 top-[5%] -translate-x-1/2 -translate-y-1/2",
        "top-right": "right-0 top-[5%] translate-x-1/2 -translate-y-1/2",
        "bottom-left": "bottom-[5%] left-0 -translate-x-1/2 translate-y-1/2",
        "bottom-right": "bottom-[5%] right-0 translate-x-1/2 translate-y-1/2"
      },
      size: {
        xs: "h-2 w-2 text-xs",
        sm: "h-3 w-3 text-xs",
        md: "w-auto min-w-5 px-[2px]",
        lg: "w-auto min-w-6 py-[2px]"
      },
      badgeType: {
        icon: "",
        number: "bg-[#96E4FF] text-white"
      }
    },
    defaultVariants: {
      position: "top-right",
      size: "lg",
      badgeType: "number"
    }
  }
);
