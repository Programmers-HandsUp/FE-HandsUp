type WidthType = `w-${string}` | `w-${number}`;
type HeightType = `h-${string}` | `h-${number}`;

interface Props {
  width: WidthType;
  height: HeightType;
  round: "rounded-full" | "rounded-md";
}

function Skeleton({ width, height, round }: Props) {
  return (
    <div
      className={`${width} ${height} ${round} animate-pulse bg-gray-300`}></div>
  );
}

export default Skeleton;
