import Image from "next/image";

import TransparentMan from "/public/assets/images/transparentMan.png";
import setMoneyUnitString from "@/utils/function/setMoneyUnitString";
import { Top3BidData } from "@/utils/types/bid/top3Bid";

import Avatar from "../Avatar";
//@TODO: map으로 뿌릴 때 id 오류 생김
const TopThreeRank = ({ content }: { content: Top3BidData[] }) => {
  const maxBiddingPrice = Math.max(...content.map((item) => item.biddingPrice));

  const maxYValue = maxBiddingPrice + maxBiddingPrice * 0.1;

  const biddingPercentages = content.reverse().map((item, index) => ({
    ...item,
    percentage: (item.biddingPrice / maxYValue) * 100,
    image:
      "https://image.idus.com/image/files/e73b6a43a167418c9409d04ae49874e3_512.jpg",
    color: index === 0 ? "#9f63ff" : index === 1 ? "#6569FF" : "#96E4FF"
  }));

  return (
    <div className="relative mt-[112px] mb-[20px] px-2">
      <div className="relative bottom-20">
        <h1>입찰가 TOP 3🏆</h1>
      </div>
      {content.length > 0 ? (
        <div className="relative border-b-2 w-full h-[200px] flex items-end justify-around">
          {biddingPercentages.map((item, idx) => (
            <div
              key={item.bidderId + idx}
              className="w-[45px] flex items-end"
              style={{
                height: `${item.percentage}%`
              }}>
              <div
                className="relative h-full"
                style={{
                  backgroundColor: item.color
                }}>
                <div className="relative bottom-[66px]">
                  <div className="absolute w-full bottom-[70px] text-[10px] flex justify-center px-2">
                    <span className="text-[8px] absolute -translate-y-1/2 translate-x-full rotate-12 animate-pumping">
                      {idx === 2 && "현재 1등!"}
                    </span>
                    <span className="text-[10px] absolute -translate-y-1/2 -translate-x-full -rotate-[20deg] animate-shaking">
                      {idx === 2 && "👑"}
                    </span>
                    <span>{item.bidderNickname}</span>
                  </div>
                  <div className="relative top-1">
                    <Image
                      src={TransparentMan}
                      alt="마스코트"
                    />
                  </div>
                  <div className="absolute top-0 left-[7px]">
                    <Avatar
                      rounded="full"
                      size="small"
                      src={item.image}
                    />
                  </div>
                  <div className="absolute left-12 text-[0.5rem]">
                    {setMoneyUnitString(item.biddingPrice)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <span className="relative -top-14 text-sm text-gray-500">
          상위 3명의 입찰내역이 안보이네요..
        </span>
      )}
    </div>
  );
};

export default TopThreeRank;
