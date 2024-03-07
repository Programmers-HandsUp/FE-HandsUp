import { cn } from "@/utils/cn";

const FireAnimation = ({
  size = 12,
  className
}: {
  size: number;
  className?: string;
}) => {
  const parts = 15;
  const particles = Array.from({ length: parts }).map((_, index) => {
    const delay = Math.random() + "s";
    const left = `calc((100% - 5em) * ${index / parts})`;
    return (
      <div
        className="particle"
        key={index}
        style={{
          animationDelay: delay,
          left: left
        }}
      />
    );
  });
  return (
    <div
      className={cn(className, "fire")}
      style={{ fontSize: `${size}px` }}>
      {particles}
    </div>
  );
};

export default FireAnimation;
