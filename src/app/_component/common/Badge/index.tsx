import { cn } from "@/utils/cn";
import { VariantProps } from "class-variance-authority";
import { BadgeVariants } from "./Badge.variants";

interface BadgeProps extends VariantProps<typeof BadgeVariants> {
  children: React.ReactNode;
  content?: React.ReactNode;
  maxCount?: number;
  className?: string;
}

const Badge = ({
  position,
  size,
  badgeType,
  children,
  content,
  maxCount,
  className,
  ...props
}: BadgeProps) => {
  const badgeContent =
    typeof content === "number" && maxCount && content > maxCount
      ? `${maxCount}+`
      : content;

  return (
    <div className="relative inline-block" {...props}>
      {children}
      <span
        className={cn(BadgeVariants({ position, size, badgeType }), className)}
      >
        {badgeContent}
      </span>
    </div>
  );
};

export default Badge;
