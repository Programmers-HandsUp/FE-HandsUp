import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";

interface BadgeProps extends VariantProps<typeof BadgeVariants> {
  children: React.ReactElement;
  content?: React.ReactElement;
  maxCount?: number;
}

const Badge = ({
  position,
  size,
}: BadgeProps) => {
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
