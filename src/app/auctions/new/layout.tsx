import ArrowBackButton from "@/app/_component/common/ArrowBackButton";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2">
      <div className="flex items-center px-2 py-3">
        <ArrowBackButton />
        <p className="mx-auto text-semibold text-lg">상품 등록</p>
      </div>
      {children}
    </div>
  );
}

export default Layout;
