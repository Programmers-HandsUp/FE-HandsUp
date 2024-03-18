import ArrowBackButton from "@/app/_component/common/ArrowBackButton";
import Header from "@/app/_component/common/Header";

export default function SuccessfulBidLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header left={<ArrowBackButton />} />
      {children}
    </main>
  );
}
