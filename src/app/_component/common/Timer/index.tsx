import TimerContainer from "./TimerContainer";
import Time from "./Time";

interface TimerProps {
  deadline: Date | string;
  createdAt: Date | string;
  className?: string;
  isIcon?: boolean;
}

const Timer = ({
  createdAt,
  deadline,
  isIcon = true,
  className
}: TimerProps) => {
  if (deadline instanceof Date) {
    deadline = deadline.toString();
  }
  if (createdAt instanceof Date) {
    createdAt = createdAt.toString();
  }
  const processedDeadLine = new Date(deadline);
  const processedCreatedAt = new Date(createdAt);
  return (
    <TimerContainer
      deadline={processedDeadLine}
      createdAt={processedCreatedAt}
      className={className}
      isIcon={isIcon}>
      <Time deadline={processedDeadLine} />
    </TimerContainer>
  );
};

export default Timer;
