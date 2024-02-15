function ReliabilityBar({ score = 100 }) {
  const width = Math.floor(score / 2);
  const text = score === 100 ? "첫 매너 100%" : `${score}% 선해요`;

  return (
    <div>
      <div className="flex justify-between p-2">
        <span>😈</span>
        <span className="text-sm text-gray-600">{text}</span>
        <span>😇</span>
      </div>

      <div className="relative w-full h-3 rounded-full bg-[#96E4FF] z-10">
        <div
          className="absolute h-3 z-100"
          style={{ width: `${width}%` }}>
          <div className="w-full bg-white border border-[#96E4FF] h-full animate-fill rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default ReliabilityBar;
