interface SpinnerProps {
  width?: number;
}

const Spinner = ({ width = 25 }: SpinnerProps) => {
  return (
    <svg
      className="spinner"
      viewBox="0 0 50 50"
      width={`${width}px`}>
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
      />
    </svg>
  );
};

export default Spinner;
