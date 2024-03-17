import ArrowBackButton from "@/app/_component/common/ArrowBackButton";
import Header from "@/app/_component/common/Header";

export default function ProductsDetail({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="px-2">
      <Header
        left={
          <div>
            <ArrowBackButton />
            <span>채팅</span>
          </div>
        }
      />
      {children}
    </main>
  );
}
