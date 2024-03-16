import { VariantProps } from "class-variance-authority";

import { cn } from "@/utils/function/cn";

import { SkeletonVariants } from "./Skeleton.variants";

interface SkeletonProps
  extends Partial<VariantProps<typeof SkeletonVariants>> {}

function Skeleton({ size, shape }: SkeletonProps) {
  return <div className={cn(SkeletonVariants({ size, shape }))}></div>;
}

export default Skeleton;
