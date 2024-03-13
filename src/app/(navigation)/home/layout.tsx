import { cookies } from "next/headers";
import Link from "next/link";

import Header from "@/app/_component/common/Header";
import Icon from "@/app/_component/common/Icon";

import RegionSelect from "./_component/RegionSelect";

export default function MainPageLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const HeaderRightSection = (
    <div className="flex items-center justify-end gap-2">
      <Link href="/search">
        <Icon
          id="search"
          fill="black"
        />
      </Link>
      <Link href="/notification">
        <Icon id="bell-fill" />
      </Link>
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
