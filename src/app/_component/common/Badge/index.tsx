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
