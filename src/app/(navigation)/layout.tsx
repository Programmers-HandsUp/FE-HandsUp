import Navigation from "../_component/common/Navigation";

export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <nav className="fixed w-full bottom-0 max-w-[360px] h-[56px]">
        <Navigation />
      </nav>
    </section>
  );
}
