"use client";
import useRecommendedAuction from "../../_hooks/queries/useRecommendAuction";
import AuctionFeedList from "../AuctionFeedList";
import DetailAuctionFeed from "../DetailAuctionFeed";

const MainContentSection = () => {
  const result = useRecommendedAuction();

  //TODO: 안보이는 타이머는 최적화
  return (
    <div className="flex flex-col gap-10">
      <section>
        <div className="text-2xl">
          <h1>지금 핫한 경매를 구경하세요!</h1>
        </div>
        {result[2].data ? (
          <DetailAuctionFeed data={result[2].data} />
        ) : (
          "경매 없음"
        )}
      </section>

      <section>
        <div className="text-2xl">
          <h1>많은 사람들이 눈여겨보고있는 경매</h1>
        </div>
        {result[2].data ? (
          <AuctionFeedList
            data={result[3].data}
            divideNum={4}
          />
        ) : (
          "경매 없음"
        )}
      </section>

      <section>
        <div className="text-2xl">
          <h1>💣마감 임박 경매 </h1>
        </div>
        {result[1] ? (
          <AuctionFeedList
            data={result[1].data}
            divideNum={1}
          />
        ) : (
          "경매 없음"
        )}
      </section>

      <section>
        <div className="text-2xl">
          <h1>✨따끈따끈한 최신 경매</h1>
        </div>
        {result[0] ? (
          <AuctionFeedList
            data={result[0].data}
            divideNum={8}
          />
        ) : (
          "경매 없음"
        )}
      </section>

      {/* <section>
        <div className="text-2xl">
          <h1>💌당신을 위한 추천 경매! </h1>
        </div>
        <AuctionFeedList  divideNum={4} />
      </section> */}
    </div>
  );
};

export default MainContentSection;
