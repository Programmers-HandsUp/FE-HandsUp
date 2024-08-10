import Navigation from "../_component/common/Navigation";

export default async function UserPageLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="px-2">{children}</div>
      <nav className="fixed w-full bottom-0 max-w-[360px] h-[56px]">
        <Navigation />
      </nav>
    </section>
  );
}
