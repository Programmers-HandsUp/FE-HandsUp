import AuctionDetailInfo from ".";

interface IAuctionDetailData {
  auctionData: {
    auctionId: number;
    sellerId: number;
    title: string;
    productCategory: string;
    initPrice: number;
    currentBiddingPrice: number;
    endDate: string;
    productStatus: string;
    purchaseTime: string;
    description: string;
    tradeMethod: string;
    imageUrls: string[];
    si: string;
    gu: string;
    dong: string;
    bookmarkCount: number;
    createdAt: string;
  };
}

export const DefaultAuctionDetailInfo = ({
  auctionData
}: IAuctionDetailData) => {
  return (
    <AuctionDetailInfo>
      <AuctionDetailInfo.Title>{auctionData.title}</AuctionDetailInfo.Title>

      <AuctionDetailInfo.Category>
        {auctionData.productCategory}
      </AuctionDetailInfo.Category>

      <AuctionDetailInfo.TagWrapper>
        <AuctionDetailInfo.Tag>
          {auctionData.productStatus}
        </AuctionDetailInfo.Tag>
        <AuctionDetailInfo.Tag>
          {auctionData.purchaseTime}
        </AuctionDetailInfo.Tag>
      </AuctionDetailInfo.TagWrapper>

      <AuctionDetailInfo.Description>
        {auctionData.description}
      </AuctionDetailInfo.Description>

      <AuctionDetailInfo.TradeWrapper>
        <AuctionDetailInfo.TradeRegion>
          {auctionData.dong}
        </AuctionDetailInfo.TradeRegion>
        <AuctionDetailInfo.TradeMethod>
          {auctionData.tradeMethod}
        </AuctionDetailInfo.TradeMethod>
      </AuctionDetailInfo.TradeWrapper>
    </AuctionDetailInfo>
  );
};
