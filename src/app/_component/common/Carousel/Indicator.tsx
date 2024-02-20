interface IndicatorProps {
  imageNum: number;
  selectedScene: number;
  onClickIndicatorIcon: (index: number) => void;
}

const Indicator = ({
  imageNum,
  selectedScene,
  onClickIndicatorIcon,
}: IndicatorProps) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-1 flex gap-2">
      {Array.from(Array(imageNum), (_, index) => (
        <button
          key={index}
          onClick={() => onClickIndicatorIcon(index)}
          className={`w-[0.8rem] h-[0.8rem] ${index === selectedScene ? "bg-white" : " bg-gray-400"} rounded-full`}
        />
      ))}
    </div>
  );
};

export default Indicator;
