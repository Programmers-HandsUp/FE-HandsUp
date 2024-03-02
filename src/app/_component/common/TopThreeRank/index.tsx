import { TopThreeRankDataType } from "@/utils/mocks/api/types";
import Avatar from "../Avatar";
import Image from "next/image";
import TransparentMan from "/public/assets/images/transparentMan.png";

const TopThreeRank = ({ content }: { content: TopThreeRankDataType[] }) => {
  // 최대 입찰 가격을 찾습니다.
  const maxBiddingPrice = Math.max(...content.map((item) => item.biddingPrice));

  // Y축의 최댓값을 정합니다. 여기서는 최대 입찰 가격에 10%를 더했습니다.
  const maxYValue = maxBiddingPrice + maxBiddingPrice * 0.1;

  // 각 입찰 가격의 백분율을 계산합니다.sssssss
  const biddingPercentages = content.map((item, index) => ({
    ...item,
    percentage: (item.biddingPrice / maxYValue) * 100,
    image:
      "https://image.idus.com/image/files/e73b6a43a167418c9409d04ae49874e3_512.jpg",
    color: index === 0 ? "#9f63ff" : index === 1 ? "#6569FF" : "#96E4FF"
  }));

  return (
    <div className="border-b-2 w-full h-[200px] flex items-end justify-around">
      {biddingPercentages.map((item, idx) => (
        <div
          key={item.bidderId}
          className="w-[45px] flex items-end"
          style={{
            height: `${item.percentage}%`
          }}>
          <div
            className="relative animate-chartUp"
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopThreeRank;
