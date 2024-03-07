import { InfoComponentProps } from ".";

export const Title = ({ children }: InfoComponentProps) => {
  return (
    <div className="text-3xl">
      <h1>{children}</h1>
    </div>
  );
};

export const Category = ({ children }: InfoComponentProps) => {
  return (
    <div className="text-sm text-gray-300">
      <span>카테고리: {children}</span>
    </div>
  );
};

export const TagWrapper = ({ children }: InfoComponentProps) => {
  return <div className="flex gap-2 py-5 text-sm">{children}</div>;
};

export const Tag = ({ children }: InfoComponentProps) => {
  return (
    <div className="inline-block bg-[#6569FF] rounded-2xl border text-center px-2">
      {children}
    </div>
  );
};

export const Description = ({ children }: InfoComponentProps) => {
  return (
    <div className="text-lg py-5">
      <div>{children}</div>
    </div>
  );
};

export const TradeWrapper = ({ children }: InfoComponentProps) => {
  return <div className="text-sm py-2">{children}</div>;
};

export const TradeMethod = ({ children }: InfoComponentProps) => {
  return (
    <div className="text-sm py-2">
      <div className="flex gap-9">
        <span className="font-bold">거래 선호 방식</span>
        {children}
      </div>
    </div>
  );
};

export const TradeRegion = ({ children }: InfoComponentProps) => {
  return (
    <div className="text-sm py-2">
      <div className="flex gap-9">
        <span className="font-bold">거래 희망 장소</span>
        {children}
      </div>
    </div>
  );
};
