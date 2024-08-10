import Navigation from "../_component/common/Navigation";
import BookmarkPageHeader from "./_component/header";

export default async function UserPageLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="w-[95%] mx-auto">
        <BookmarkPageHeader />
        {children}
      </div>
      <nav className="fixed w-full bottom-0 max-w-[360px] h-[56px]">
        <Navigation />
      </nav>
    </section>
  );  
}
