import ArrowBackButton from "@/app/_component/common/ArrowBackButton";
import Header from "@/app/_component/common/Header";

export default function BidderListLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header
        left={<ArrowBackButton />}
        center={<h1 className="text-lg">입찰자 목록</h1>}
      />
      {children}
    </main>
  );
}
