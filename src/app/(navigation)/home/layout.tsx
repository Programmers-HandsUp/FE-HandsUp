import Header from "@/app/_component/common/Header";
import Icon from "@/app/_component/common/Icon";
import RegionSelect from "./_component/RegionSelect";

export default function MainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const HeaderRightSection = <Icon id="search" fill="black" />;

  return (
    <section>
      <header>
        <Header left={<RegionSelect />} right={HeaderRightSection} />
      </header>
      {children}
    </section>
  );
}
