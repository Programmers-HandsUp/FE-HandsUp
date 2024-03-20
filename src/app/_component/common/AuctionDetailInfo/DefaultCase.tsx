import AuctionDetailInfo from ".";

interface DefaultAuctionDetailInfoProps {
  title: string;
  productCategory: string;
  productStatus: string;
  purchaseTime: string;
  description: string;
  tradeMethod: string;
  si: string;
  gu: string;
  dong: string;
}

export const DefaultAuctionDetailInfo = ({
  title,
  productCategory,
  productStatus,
  purchaseTime,
  description,
  si,
  gu,
  dong,
  tradeMethod
}: DefaultAuctionDetailInfoProps) => {
  return (
    <AuctionDetailInfo className="px-2">
      <AuctionDetailInfo.Title>{title}</AuctionDetailInfo.Title>

      <AuctionDetailInfo.Category>{productCategory}</AuctionDetailInfo.Category>

      <AuctionDetailInfo.TagWrapper>
        <AuctionDetailInfo.Tag>{productStatus}</AuctionDetailInfo.Tag>
        <AuctionDetailInfo.Tag>{purchaseTime}</AuctionDetailInfo.Tag>
      </AuctionDetailInfo.TagWrapper>

      <AuctionDetailInfo.Description>
        {description}
      </AuctionDetailInfo.Description>

      <AuctionDetailInfo.TradeWrapper>
        <AuctionDetailInfo.TradeRegion>{dong}</AuctionDetailInfo.TradeRegion>
        <AuctionDetailInfo.TradeMethod>
          {tradeMethod}
        </AuctionDetailInfo.TradeMethod>
      </AuctionDetailInfo.TradeWrapper>
    </AuctionDetailInfo>
  );
};
