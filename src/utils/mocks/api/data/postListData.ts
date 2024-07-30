import mockingTempImage1 from "~/images/devil.webp";
import mockingTempImage2 from "~/images/soso.webp";

import { CommentType } from "../types";

export const postListData = [
  {
    auctionId: 1,
    authorId: "id1",
    authorName: "경매왕",
    title: "아주 많이 비싼 옷",
    endtime: "2024.03.04",
    startPrice: 300,
    tradePlace: "서울 어딘가",
    currentBiddingPrice: 400,
    imageUrl: null,
    bookmarkCount: 5,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" }
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" }
    ],
    dong: "항동",
    si: "서울",
    gu: "구로",
    createdAt: "2024.05.06"
  }
];

export const auctionDetail = [
  {
    biddingCount: 1,
    auctionId: 353256236,
    title: "(mock)모킹1",
    productCategory: "신발",
    initPrice: 5000,
    currentBiddingPrice: 12000,
    endDate: "2024-08-04",
    productStatus: "깨끗해요",
    purchaseTime: "3개월 이하",
    auctionStatus: "입찰 중",
    description:
      "2개월 정도 신었나? 잘 인신게 돼서 경매에 올려용. 상태는 깨끗합니다!",
    tradeMethod: "직접 만나서",
    imageUrls: [mockingTempImage1, mockingTempImage2],
    sellerInfo: {
      userId: 123,
      nickname: "안뇽",
      profileImageUrl: "~/images/angel.webp",
      dong: "강남동",
      score: 150
    },
    si: "서울시",
    gu: "강남구",
    dong: "논현동",
    bookmarkCount: 0,
    createdAt: "2024-02-12"
  },
  {
    biddingCount: 1,
    auctionId: 353256236,
    title: "(mock)모킹2",
    productCategory: "신발",
    initPrice: 5000,
    currentBiddingPrice: 16000,
    endDate: "2024-08-12",
    productStatus: "깨끗해요",
    purchaseTime: "3개월 이하",
    auctionStatus: "입찰 중",
    description:
      "2개월 정도 신었나? 잘 인신게 돼서 경매에 올려용. 상태는 깨끗합니다!",
    tradeMethod: "직접 만나서",
    imageUrls: [mockingTempImage2, mockingTempImage1],
    sellerInfo: {
      userId: 123,
      nickname: "김김",
      profileImageUrl: "~/images/angel.webp",
      dong: "강남동",
      score: 150
    },
    si: "서울시",
    gu: "강남구",
    dong: "논현동",
    bookmarkCount: 0,
    createdAt: "2024-02-12"
  }
];

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
