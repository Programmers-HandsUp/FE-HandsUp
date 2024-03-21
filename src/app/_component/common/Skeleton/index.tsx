import { VariantProps } from "class-variance-authority";

import { cn } from "@/utils/function/cn";

import { SkeletonVariants } from "./Skeleton.variants";

interface SkeletonProps extends Partial<VariantProps<typeof SkeletonVariants>> {
  className?: string;
}

function Skeleton({ size, shape, className }: SkeletonProps) {
  return (
    <div className={cn(SkeletonVariants({ size, shape }), className)}></div>
  );
}

export default Skeleton;
