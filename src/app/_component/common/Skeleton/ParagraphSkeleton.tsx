import { VariantProps } from "class-variance-authority";

import { cn } from "@/utils/function/cn";

import { ParagraphSkeletonVariants } from "./ParagraphSkeleton.variants";

interface SkeletonProps
  extends Partial<VariantProps<typeof ParagraphSkeletonVariants>> {
  line?: number;
  className?: string;
}

function ParagraphSkeleton({
  size,
  shape,
  line = 1,
  className
}: SkeletonProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {Array.from(Array(line), (_, index) =>
        index !== line - 1 ? (
          <div
            key={index}
            className={cn(ParagraphSkeletonVariants({ size, shape }))}></div>
        ) : (
          <div
            key={index}
            className={cn(ParagraphSkeletonVariants({ size, shape }))}></div>
        )
      )}
    </div>
  );
}

export default ParagraphSkeleton;
