import Skeleton from ".";

function Paragraph({ line = 3 }) {
  return (
    <div className="flex flex-col gap-4">
      {Array.from(Array(line), (_, index) =>
        index !== line - 1 ? (
          <Skeleton
            key={index}
            width="w-full"
            height="h-11"
            round="rounded-md"
          />
        ) : (
          <Skeleton
            key={index}
            width="w-7/12"
            height="h-11"
            round="rounded-md"
          />
        )
      )}
    </div>
  );
}

export default Paragraph;
