import { AuctionDetailType } from "@/app/types/product";
import { RecommendAuctionsResponse } from "@/utils/types/auction/recommendAuction";

import { CommentType } from "../types";

export const postListData = [
  {
    id: 1,
    authorId: "id1",
    authorName: "경매왕",
    postName: "아주 많이 비싼 옷",
    endtime: "2024.03.04",
    startPrice: 300,
    tradePlace: "서울 어딘가",
    nowPrice: 400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" }
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" }
    ]
  },
  {
    id: 2,
    authorId: "id2",
    authorName: "악마",
    postName: "싸구려 장난감",
    startPrice: 5000,
    nowPrice: 14400,
    endtime: "2024.03.04",
    tradePlace: "서울 어딘가",
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      {
        authorId: "1",
        authorName: "jjg",
        detail: "상태가 어떤가요",
        id: "fakfsdkafske1"
      },
      {
        authorId: "2",
        authorName: "장사꾼",
        detail: "좋아요",
        id: "faksdfsfsdkke1"
      },
      {
        authorId: "1",
        authorName: "jjg",
        detail: "그럼 안삼ㅋ",
        id: "fakfssdfsdfdkke1"
      }
    ],
    bidRecord: [
      {
        bidderName: "구매왕",
        bidderId: "id3",
        biddingPrice: 6000,
        id: "13423fdsf1"
      },
      {
        bidderName: "판매왕",
        bidderId: "id2",
        biddingPrice: 7000,
        id: "1423fdsf1"
      },
      {
        bidderName: "jjg",
        bidderId: "id1",
        biddingPrice: 14400,
        id: "123fdsf1"
      }
    ]
  },
  {
    id: 3,
    authorId: "id1",
    authorName: "경매d왕",
    postName: "아주 비싼 옷",
    endtime: "2024.03.04",
    startPrice: 300,
    tradePlace: "서울 어딘가",
    nowPrice: 400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" }
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" }
    ]
  },
  {
    id: 4,
    authorId: "id1",
    authorName: "경매왕",
    postName: "옷사세요",
    endtime: "2024.03.04",
    startPrice: 300,
    tradePlace: "서울 어딘가",
    nowPrice: 400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" }
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" }
    ]
  },
  {
    id: 5,
    authorId: "id1",
    authorName: "경매왕",
    postName: "그냥 옷",
    endtime: "2024.03.04",
    startPrice: 3500,
    tradePlace: "서울 어딘가",
    nowPrice: 400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" }
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" }
    ]
  },
  {
    id: 6,
    authorId: "id1",
    authorName: "경매왕",
    postName: "매우 싼 옷",
    endtime: "2024.03.04",
    startPrice: 300,
    tradePlace: "서울 어딘가",
    nowPrice: 400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" }
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" }
    ]
  },
  {
    id: 7,
    authorId: "id1",
    authorName: "경매왕",
    postName: "옷",
    endtime: "2024.03.04",
    startPrice: 300,
    tradePlace: "서울 어딘가",
    nowPrice: 400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" }
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" }
    ]
  },
  {
    id: 8,
    authorId: "id1",
    authorName: "경매왕",
    postName: "마니마니 비싼 옷",
    endtime: "2024.03.04",
    startPrice: 300,
    tradePlace: "서울 어딘가",
    nowPrice: 400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" }
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" }
    ]
  },
  {
    id: 9,
    authorId: "id1",
    authorName: "경매왕",
    postName: "그냥 매우 비싼 옷",
    endtime: "2024.03.04",
    startPrice: 300,
    tradePlace: "서울 어딘가",
    nowPrice: 400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" }
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" }
    ]
  },
  {
    id: 10,
    authorId: "id1",
    authorName: "경매왕",
    postName: "드디어 10번째 ... 비싼 옷",
    endtime: "2024.03.04",
    startPrice: 300,
    tradePlace: "서울 어딘가",
    nowPrice: 400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" }
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" }
    ]
  },
  {
    id: 11,
    authorId: "id1",
    authorName: "3경매왕",
    postName: "아주 많이 비싼 옷",
    endtime: "2024.03.04",
    startPrice: 3040,
    tradePlace: "서울 어딘가",
    nowPrice: 400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" }
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" }
    ]
  },
  {
    id: 12,
    authorId: "id1",
    authorName: "3경매왕",
    postName: "아주 많이 비싼 옷",
    endtime: "2024.03.04",
    startPrice: 3040,
    tradePlace: "서울 어딘가",
    nowPrice: 400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" }
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" }
    ]
  },
  {
    id: 13,
    authorId: "id1",
    authorName: "3경매왕",
    postName: "아주 많이 비싼 옷",
    endtime: "2024.03.04",
    startPrice: 3040,
    tradePlace: "서울 어딘가",
    nowPrice: 400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" }
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" }
    ]
  },
  {
    id: 14,
    authorId: "id1",
    authorName: "3경매왕",
    postName: "아주 많이 비싼 옷",
    endtime: "2024.03.04",
    startPrice: 3040,
    tradePlace: "서울 어딘가",
    nowPrice: 400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" }
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" }
    ]
  }
];

const generateRandomNumberId = (length = 8) => {
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    randomId += randomNumber;
  }

  return parseInt(randomId, 10);
};

export const auctionHotList: RecommendAuctionsResponse = {
  content: [
    {
      auctionId: 4532,
      title: "adsfds",
      dong: "ASfdsfa",
      currentBiddingPrice: 2314512,
      imgUrl:
        "data:image/jpeg;base64,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",
      bookmarkCount: 12,
      biddingCount: 535353,
      createdAt: "2024-03-05",
      endDate: "2024-03-05"
    }
  ],
  size: 6,
  hasNext: false
};

export const auctionDetail: AuctionDetailType = {
  auctionId: 353256236,
  sellerId: 12342,
  title: "나이키 덩크 로우 팔아영",
  productCategory: "신발",
  initPrice: 5000,
  currentBiddingPrice: 12000,
  endDate: "2024-03-12",
  productStatus: "깨끗해요",
  purchaseTime: "3개월 이하",
  description:
    "2개월 정도 신었나? 잘 인신게 돼서 경매에 올려용. 상태는 깨끗합니다!",
  tradeMethod: "직접 만나서",
  imageUrls: [
    "https://static.shoeprize.com/uploads/2022-12-30/defc77d1-320d-46ff-b29c-617cde450d3b.webp",
    "https://static.shoeprize.com/uploads/2022-12-30/defc77d1-320d-46ff-b29c-617cde450d3b.webp",
    "https://static.shoeprize.com/uploads/2022-12-30/defc77d1-320d-46ff-b29c-617cde450d3b.webp"
  ],
  si: "서울시",
  gu: "강동구",
  dong: "둔촌동",
  bookmarkCount: 20,
  createdAt: "2024-03-05",
  auctionStatus: "경매중"
};

export const commentData: CommentType[] = [
  {
    messageId: 1241241,
    content: ".나는 1번째",
    auctionId: 353256236,
    userId: 12342342,
    userNickname: "오리우리",
    userProfileImage:
      "https://image.idus.com/image/files/9e3e83f9ac8148078dd987587ad0272d_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 1241242,
    content: "호호",
    auctionId: 353256236,
    userId: 12342,
    userNickname: "도리도리",
    userProfileImage:
      "https://image.idus.com/image/files/74d1c4eef9114c56a9208a050cf41726_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 1241243,
    content: "호호",
    auctionId: 353256236,
    userId: 12342,
    userNickname: "도리도리",
    userProfileImage:
      "https://image.idus.com/image/files/74d1c4eef9114c56a9208a050cf41726_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 1241244,
    content: "호호",
    auctionId: 353256236,
    userId: 12342342,
    userNickname: "오리우리",
    userProfileImage:
      "https://image.idus.com/image/files/9e3e83f9ac8148078dd987587ad0272d_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 1241245,
    content: "호호",
    auctionId: 353256236,
    userId: 12342342,
    userNickname: "오리우리",
    userProfileImage:
      "https://image.idus.com/image/files/9e3e83f9ac8148078dd987587ad0272d_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 1241246,
    content: "호호",
    auctionId: 353256236,
    userId: 12342342,
    userNickname: "오리우리",
    userProfileImage:
      "https://image.idus.com/image/files/9e3e83f9ac8148078dd987587ad0272d_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 1241247,
    content: "호호",
    auctionId: 353256236,
    userId: 12342342,
    userNickname: "오리우리",
    userProfileImage:
      "https://image.idus.com/image/files/9e3e83f9ac8148078dd987587ad0272d_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 1241248,
    content: "호호",
    auctionId: 353256236,
    userId: 12342342,
    userNickname: "오리우리",
    userProfileImage:
      "https://image.idus.com/image/files/9e3e83f9ac8148078dd987587ad0272d_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 1241249,
    content: "호호",
    auctionId: 353256236,
    userId: 12342342,
    userNickname: "오리우리",
    userProfileImage:
      "https://image.idus.com/image/files/9e3e83f9ac8148078dd987587ad0272d_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 12412410,
    content: "호호",
    auctionId: 353256236,
    userId: 12342342,
    userNickname: "오리우리",
    userProfileImage:
      "https://image.idus.com/image/files/9e3e83f9ac8148078dd987587ad0272d_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 12412411,
    content: "나는 10번째",
    auctionId: 353256236,
    userId: 12342342,
    userNickname: "오리우리",
    userProfileImage:
      "https://image.idus.com/image/files/9e3e83f9ac8148078dd987587ad0272d_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 12412412,
    content: "호호",
    auctionId: 353256236,
    userId: 12342,
    userNickname: "도리도리",
    userProfileImage:
      "https://image.idus.com/image/files/74d1c4eef9114c56a9208a050cf41726_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 12412413,
    content: "호호",
    auctionId: 353256236,
    userId: 12342,
    userNickname: "도리도리",
    userProfileImage:
      "https://image.idus.com/image/files/74d1c4eef9114c56a9208a050cf41726_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 12412414,
    content: "호호",
    auctionId: 353256236,
    userId: 12342,
    userNickname: "도리도리",
    userProfileImage:
      "https://image.idus.com/image/files/74d1c4eef9114c56a9208a050cf41726_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 12412415,
    content: "호호",
    auctionId: 353256236,
    userId: 123,
    userNickname: "오잉",
    userProfileImage:
      "https://image.idus.com/image/files/c806631d414d4578a11b1760aad2633b.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 12412416,
    content: "호호",
    auctionId: 353256236,
    userId: 123,
    userNickname: "오잉",
    userProfileImage:
      "https://image.idus.com/image/files/c806631d414d4578a11b1760aad2633b.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 12412417,
    content: "이거 물건이네~",
    auctionId: 353256236,
    userId: 123,
    userNickname: "오잉",
    userProfileImage:
      "https://image.idus.com/image/files/c806631d414d4578a11b1760aad2633b.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 12412418,
    content: "호호",
    auctionId: 353256236,
    userId: 12311,
    userNickname: "경매의왕세자",
    userProfileImage:
      "https://image.idus.com/image/files/d2dd2f0da6674f34bbed72a80fb83a23_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 12412419,
    content: "호호",
    auctionId: 353256236,
    userId: 12311,
    userNickname: "경매의왕세자",
    userProfileImage:
      "https://image.idus.com/image/files/d2dd2f0da6674f34bbed72a80fb83a23_512.jpg",
    createdAt: new Date("2024-03-05")
  },
  {
    messageId: 12412420,
    content:
      "아니어떻게 이런일이 있을 수가!!??저는 이렇게 생각했었어요!! 근데 이런 거였었네요!!!!",
    auctionId: 353256236,
    userId: 12311,
    userNickname: "경매의왕세자",
    userProfileImage:
      "https://image.idus.com/image/files/d2dd2f0da6674f34bbed72a80fb83a23_512.jpg",
    createdAt: new Date("2024-03-05")
  }
];
