import useRecommendedAuction from "../../_hooks/queries/useRecommendAuction";
import AuctionFeedList from "../AuctionFeedList";
import DetailAuctionFeed from "../DetailAuctionFeed";
import { AddressState } from ".";

interface AuctionListSectionProps {
  address: AddressState;
}

const AuctionListSection = ({ address }: AuctionListSectionProps) => {
  const result = useRecommendedAuction({ address });

  return (
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
  );
};

export default AuctionListSection;
