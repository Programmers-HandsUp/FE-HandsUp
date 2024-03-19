"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Header from "@/app/_component/common/Header";
import Icon from "@/app/_component/common/Icon";

import useRecommendedAuction from "../../_hooks/queries/useRecommendAuction";
import AuctionFeedList from "../AuctionFeedList";
import DetailAuctionFeed from "../DetailAuctionFeed";
import RegionSelect from "../RegionSelect";

export interface AddressState {
  si: string | null;
  gu: string | null;
  dong: string | null;
}

interface MainContentSectionProps {
  userSi: string;
  userGu: string;
  userDong: string;
}

const MainContentSection = ({
  userSi,
  userGu,
  userDong
}: MainContentSectionProps) => {
  const [currentRegion, setCurrentRegion] = useState("전국");
  const [address, setAddress] = useState<AddressState>({
    si: "",
    gu: "",
    dong: ""
  });
  const result = useRecommendedAuction({ address });

  useEffect(() => {
    const updateAddress = (region: string): AddressState => {
      if (region === "전국") {
        return { si: "", gu: "", dong: "" };
      }

      const regionEndsWith = (suffix: string) => region.endsWith(suffix);

      if (regionEndsWith("시")) {
        return { si: region, gu: "", dong: "" };
      } else if (regionEndsWith("구")) {
        return { si: "", gu: region, dong: "" };
      } else if (regionEndsWith("동")) {
        return { si: "", gu: "", dong: region };
      }

      return { si: "", gu: "", dong: "" };
    };

    setAddress(updateAddress(currentRegion));
  }, [currentRegion]);

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

  return (
    <>
      <header>
        <Header
          left={
            <RegionSelect
              si={userSi}
              gu={userGu}
              dong={userDong}
              currentRegion={currentRegion}
              setState={setCurrentRegion}
            />
          }
          right={HeaderRightSection}
        />
      </header>
      <div className="flex flex-col gap-10">
        <section>
          <div className="text-2xl">
            <h1>지금 핫한 경매를 구경하세요!</h1>
          </div>
          {result[2].data.content.length !== 0 ? (
            <DetailAuctionFeed data={result[2].data} />
          ) : (
            "지금은 경매가 없네요.."
          )}
        </section>

        <section>
          <div className="text-2xl">
            <h1>많은 사람들이 눈여겨보고있는 경매</h1>
          </div>
          {result[2].data.content.length !== 0 ? (
            <AuctionFeedList
              data={result[3].data}
              divideNum={4}
            />
          ) : (
            "지금은 경매가 없네요.."
          )}
        </section>

        <section>
          <div className="text-2xl">
            <h1>💣마감 임박 경매 </h1>
          </div>
          {result[1].data.content.length !== 0 ? (
            <AuctionFeedList
              data={result[1].data}
              divideNum={1}
            />
          ) : (
            "지금은 경매가 없네요.."
          )}
        </section>

        <section>
          <div className="text-2xl">
            <h1>✨따끈따끈한 최신 경매</h1>
          </div>
          {result[0].data.content.length !== 0 ? (
            <AuctionFeedList
              data={result[0].data}
              divideNum={8}
            />
          ) : (
            "지금은 경매가 없네요.."
          )}
        </section>

        {result[4].data && (
          <section>
            <div className="text-2xl">
              <h1>💌당신만을 위한 추천 경매! </h1>
            </div>
            {result[4].data.content.length !== 0 ? (
              <AuctionFeedList
                data={result[4].data}
                divideNum={4}
              />
            ) : (
              "지금은 진행 중인 경매가 없네요.."
            )}
          </section>
        )}
      </div>
    </>
  );
};

export default MainContentSection;
