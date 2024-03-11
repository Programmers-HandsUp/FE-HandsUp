export const calculateTimeRemaining = (deadline: Date) => {
  const now = new Date().getTime();
  const remainingTime = deadline.getTime() - now;

  if (remainingTime <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};
