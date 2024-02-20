import Icon from "../../Icon";

function EmptyResults({ children }: { children: string }) {
  return (
    <div className="flex flex-col items-center mt-14">
      <Icon id="search" stroke="black" fill="none" />
      <span>{children}</span>
    </div>
  );
}

export default EmptyResults;
