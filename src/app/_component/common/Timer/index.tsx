import TimerContainer from "./TimerContainer";
import Time from "./Time";

interface TimerProps {
  deadline: Date;
  createdAt: Date;
  className?: string;
  isIcon?: boolean;
}

const Timer = ({
  createdAt,
  deadline,
  isIcon = true,
  className
}: TimerProps) => {
  return (
    <TimerContainer
      deadline={deadline}
      createdAt={createdAt}
      className={className}
      isIcon={isIcon}>
      <Time deadline={deadline} />
    </TimerContainer>
  );
};

export default Timer;
