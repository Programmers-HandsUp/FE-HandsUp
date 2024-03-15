import { VariantProps } from "class-variance-authority";

import { cn } from "@/utils/function/cn";

import { ParagraphSkeletonVariants } from "./ParagraphSkeleton.variants";

interface SkeletonProps
  extends Partial<VariantProps<typeof ParagraphSkeletonVariants>> {
  line: number;
}

function ParagraphSkeleton({ size, shape, line }: SkeletonProps) {
  return (
    <div className="flex flex-col gap-2">
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
