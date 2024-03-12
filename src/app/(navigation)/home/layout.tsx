import { cookies } from "next/headers";

import Header from "@/app/_component/common/Header";
import Icon from "@/app/_component/common/Icon";

import RegionSelect from "./_component/RegionSelect";
import ThemeButton from "@/app/_component/common/ThemeButton";

export default function MainPageLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const HeaderRightSection = (
    <div className="flex items-center justify-end">
      <Icon
        id="search"
        fill="black"
      />
      <ThemeButton />
    </div>
  );
  const cookieStore = cookies();
  const savedRegion = cookieStore.get("region");

  //TODO: 현재 위치 데이터 fetch해야함
  const fetchRegion = () => {
    //...
    return "서초구";
  };
  const currentRegion =
    savedRegion === undefined ? fetchRegion() : savedRegion.value;

  return (
    <section>
      <header>
        <Header
          left={<RegionSelect currentRegion={currentRegion} />}
          right={HeaderRightSection}
        />
      </header>
      {children}
    </section>
  );
}
