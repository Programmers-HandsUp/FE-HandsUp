import { Purchase, Review, ReviewLabel, Sale } from "@/utils/types/user/mypage";

export const purchaseList: Purchase[] = [
  {
    auctionId: 1,
    auctionTitle: "범고래 팔아요",
    auctionImageUrl: null,
    tradeTime: "2024-02-27",
    auctionStatus: "finished",
    biddingPrice: 150000
  },
  {
    auctionId: 2,
    auctionTitle: "감자깡 팔아요",
    auctionImageUrl: null,
    tradeTime: "2024-02-27",
    auctionStatus: "finished",
    biddingPrice: 15000
  },
  {
    auctionId: 3,
    auctionTitle: "고구마깡 팔아요",
    auctionImageUrl: null,
    tradeTime: "2024-02-27",
    auctionStatus: "finished",
    biddingPrice: 5000
  },
  {
    auctionId: 4,
    auctionTitle: "감자칩 팔아요",
    auctionImageUrl: null,
    tradeTime: "2024-02-27",
    auctionStatus: "pending",
    biddingPrice: 150000
  },
  {
    auctionId: 5,
    auctionTitle: "고구마칩 팔아요",
    auctionImageUrl: null,
    tradeTime: "2024-02-27",
    auctionStatus: "pending",
    biddingPrice: 3000
  },
  {
    auctionId: 6,
    auctionTitle: "옥수수 팔아요",
    auctionImageUrl: null,
    tradeTime: "2024-02-27",
    auctionStatus: "pending",
    biddingPrice: 200000
  },
  {
    auctionId: 7,
    auctionTitle: "삼각김밥 팔아요",
    auctionImageUrl: null,
    tradeTime: "2024-02-27",
    auctionStatus: "bidding",
    biddingPrice: 1000
  },
  {
    auctionId: 8,
    auctionTitle: "먹태깡 팔아요",
    auctionImageUrl: null,
    tradeTime: "2024-02-27",
    auctionStatus: "bidding",
    biddingPrice: 5000000
  },
  {
    auctionId: 9,
    auctionTitle: "빼빼로 팔아요",
    auctionImageUrl: null,
    tradeTime: "2024-02-27",
    auctionStatus: "bidding",
    biddingPrice: 300000
  }
];

export const reviewLabelList: ReviewLabel = {
  content: [
  {
    label: "응답이 빨라요",
    count: 5
  },
  {
    label: "시간 약속을 잘 지켜요",
    count: 4
  },
  {
    label: "제가 있는 곳 까지 와서 거래했어요",
    count: 7
  },
  {
    label: "친절하고 매너있어요",
    count: 2
  },
  {
    label: "물품상태가 설명한 것과 같아요",
    count: 2
  },
  {
    label: "저렴하게 구매했어요",
    count: 3
  },
  {
    label: "물품설명이 자세해요",
    count: 5
  }
  ],
  size: 0,
  hasNext: false
};

export const reviewList: Review = {
  content: [
  {
    reviewId: 1,
      writerNickName: "세인",
      writerProfileImageUrl:
        "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/09bc80b7-963d-40f5-aa79-4afb5c44a0b1.png",
    content: "감사해요 잘 쓸게요!"
  },
  {
    reviewId: 2,
      writerNickName: "준혁",
      writerProfileImageUrl:
        "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/09bc80b7-963d-40f5-aa79-4afb5c44a0b1.png",
    content: "아주 좋은 물건이네요!"
  },
  {
    reviewId: 3,
      writerNickName: "지호",
      writerProfileImageUrl:
        "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/09bc80b7-963d-40f5-aa79-4afb5c44a0b1.png",
    content: "완전 좋아요"
  },
  {
    reviewId: 3,
      writerNickName: "장권",
      writerProfileImageUrl:
        "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/09bc80b7-963d-40f5-aa79-4afb5c44a0b1.png",
    content: "좋은 물건 잘쓸게요~~"
  }
  ],
  size: 0,
  hasNext: false
};

export const saleList: Sale[] = [
  {
    auctionId: 1,
    auctionTitle: "범고래 팔아요",
    auctionImageUrl: "/images/logoicon.png",
    auctionCompleteTime: "202024-03-01",
    auctionLeftTime: "2024-03-02",
    auctionStatus: "pending",
    maxBiddingPrice: 140000,
    completeBiddingPrice: 0
  },
  {
    auctionId: 2,
    auctionTitle: "감자깡 팔아요",
    auctionImageUrl: "/images/logoicon.png",
    auctionCompleteTime: "2024-03-01",
    auctionLeftTime: "2024-03-02",
    auctionStatus: "pending",
    maxBiddingPrice: 100000,
    completeBiddingPrice: 0
  },
  {
    auctionId: 3,
    auctionTitle: "매직마우스 팔아요",
    auctionImageUrl: "/images/logoicon.png",
    auctionCompleteTime: "2024-03-01",
    auctionLeftTime: "2024-03-02",
    auctionStatus: "finished",
    maxBiddingPrice: 140000,
    completeBiddingPrice: 130000
  },
  {
    auctionId: 4,
    auctionTitle: "트랙패드 팔아요",
    auctionImageUrl: "/images/logoicon.png",
    auctionCompleteTime: "2024-03-01",
    auctionLeftTime: "2024-03-02",
    auctionStatus: "finished",
    maxBiddingPrice: 160000,
    completeBiddingPrice: 160000
  },
  {
    auctionId: 5,
    auctionTitle: "맥북 팔아요",
    auctionImageUrl: "/images/logoicon.png",
    auctionCompleteTime: "2024-03-01",
    auctionLeftTime: "2024-03-02",
    auctionStatus: "bidding",
    maxBiddingPrice: 1500000,
    completeBiddingPrice: 0
  },
  {
    auctionId: 6,
    auctionTitle: "감자 팔아요",
    auctionImageUrl: "/images/logoicon.png",
    auctionCompleteTime: "2024-03-01",
    auctionLeftTime: "2024-03-02",
    auctionStatus: "bidding",
    maxBiddingPrice: 140000,
    completeBiddingPrice: 0
  }
];
