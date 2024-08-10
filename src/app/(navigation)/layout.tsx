import Navigation from "../_component/common/Navigation";

export default async function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <main>
      {children}
      <nav className="fixed w-full bottom-0 max-w-[360px] h-[56px]">
        <Navigation />
      </nav>
    </main>
  );
}
