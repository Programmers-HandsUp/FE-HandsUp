import Skeleton from "../../common/Skeleton";
import ParagraphSkeleton from "../../common/Skeleton/ParagraphSkeleton";

function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          className="flex justify-between items-center"
          key={index}>
          <Skeleton
            shape="circle"
            size="xsmall"
          />
          <ParagraphSkeleton
            size="medium"
            line={1}
          />
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;
