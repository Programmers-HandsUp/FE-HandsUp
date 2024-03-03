import { BidsType, TopThreeRankType } from "../types";

export const topThreeRank: TopThreeRankType = {
  content: [
    {
      biddingPrice: 12000,
      auctionId: 12513,
      bidderId: 22321321,
      bidderNickname: "오리도리"
    },
    {
      biddingPrice: 15000,
      auctionId: 12513,
      bidderId: 22321322,
      bidderNickname: "오리도리"
    },
    {
      biddingPrice: 27000,
      auctionId: 12513,
      bidderId: 22321323,
      bidderNickname: "오리도리"
    }
  ],

  size: 3,
  hasNext: true
};

export const bidsData: BidsType = {
  content: [
    {
      biddingPrice: 12000,
      auctionId: 12513,
      bidderId: 22321321,
      bidderNickname: "오리도리",
      createdAt: new Date("2024-03-04")
    },
    {
      biddingPrice: 15000,
      auctionId: 12513,
      bidderId: 22321322,
      bidderNickname: "오리도리",
      createdAt: new Date("2024-03-06")
    },
    {
      biddingPrice: 27000,
      auctionId: 12513,
      bidderId: 22321323,
      bidderNickname: "오리도리",
      createdAt: new Date("2024-03-07")
    },
    {
      biddingPrice: 28000,
      auctionId: 12513,
      bidderId: 22321321,
      bidderNickname: "오리도리",
      createdAt: new Date("2024-03-12")
    },
    {
      biddingPrice: 32000,
      auctionId: 12513,
      bidderId: 22321322,
      bidderNickname: "오리도리",
      createdAt: new Date("2024-03-14")
    },
    {
      biddingPrice: 45000,
      auctionId: 12513,
      bidderId: 22321323,
      bidderNickname: "오리도리",
      createdAt: new Date("2024-03-15")
    }
  ],

  size: 3,
  hasNext: true
};
