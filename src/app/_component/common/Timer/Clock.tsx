const Clock = ({
  rotation,
  className,
}: {
  rotation: number;
  className: string;
}) => {
  return (
    <div className={className}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-none dark:fill-transparent"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="14" r="8" stroke="currentColor" strokeWidth="2" />
        <g transform={`translate(12, 13) rotate(${rotation})`}>
          <path
            d="M0 0L0 -3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <path
          d="M17.5 7.5L19 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10.0681 2.37059C10.1821 2.26427 10.4332 2.17033 10.7825 2.10332C11.1318 2.03632 11.5597 2 12 2C12.4403 2 12.8682 2.03632 13.2175 2.10332C13.5668 2.17033 13.8179 2.26427 13.9319 2.37059"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Clock;
