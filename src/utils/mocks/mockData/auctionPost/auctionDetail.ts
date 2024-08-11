import { AuctionDetailResponse } from "@/utils/types/auction/auctionDetail";
import mockingTempImage6 from "~/images/angel.webp";
import mockingTempImage5 from "~/images/bad.webp";
import mockingTempImage1 from "~/images/devil.webp";
import mockingTempImage3 from "~/images/good.webp";
import mockingTempImage2 from "~/images/soso.webp";
import mockingTempImage4 from "~/images/veryGood.webp";

import { sellerInfoMockData } from "../sellerData";

export const auctionDetails: AuctionDetailResponse[] = [
  {
    auctionId: 353256236,
    title: "(mock)모킹1",
    productCategory: "신발",
    initPrice: 5000,
    currentBiddingPrice: 12000,
    endDate: "2024-12-01",
    productStatus: "깨끗해요",
    purchaseTime: "3개월 이하",
    auctionStatus: "입찰 중",
    description:
      "2개월 정도 신었나? 잘 인신게 돼서 경매에 올려용. 상태는 깨끗합니다!",
    tradeMethod: "직접 만나서",
    sellerInfo: sellerInfoMockData[0],
    imageUrls: [mockingTempImage1.src, mockingTempImage2.src],
    si: "서울시",
    gu: "강남구",
    dong: "논현동",
    bookmarkCount: 0,
    createdAt: "2024-02-12"
  },
  {
    auctionId: 353256237,
    title: "(mock)모킹2",
    productCategory: "신발",
    initPrice: 5000,
    currentBiddingPrice: 16000,
    endDate: "2024-12-01",
    productStatus: "깨끗해요",
    purchaseTime: "3개월 이하",
    auctionStatus: "입찰 중",
    description:
      "2개월 정도 신었나? 잘 인신게 돼서 경매에 올려용. 상태는 깨끗합니다!",
    tradeMethod: "직접 만나서",
    imageUrls: [mockingTempImage2.src, mockingTempImage1.src],
    sellerInfo: sellerInfoMockData[0],
    si: "서울시",
    gu: "강남구",
    dong: "논현동",
    bookmarkCount: 0,
    createdAt: "2024-02-12"
  },
  {
    auctionId: 353256238,
    title: "(mock)모킹3",
    productCategory: "신발",
    initPrice: 5000,
    currentBiddingPrice: 12000,
    endDate: "2024-12-01",
    productStatus: "깨끗해요",
    purchaseTime: "3개월 이하",
    auctionStatus: "입찰 중",
    description:
      "2개월 정도 신었나? 잘 인신게 돼서 경매에 올려용. 상태는 깨끗합니다!",
    tradeMethod: "직접 만나서",
    sellerInfo: sellerInfoMockData[0],
    imageUrls: [mockingTempImage3.src, mockingTempImage3.src],
    si: "서울시",
    gu: "강남구",
    dong: "논현동",
    bookmarkCount: 0,
    createdAt: "2024-02-12"
  },
  {
    auctionId: 353256239,
    title: "(mock)모킹4",
    productCategory: "신발",
    initPrice: 5000,
    currentBiddingPrice: 16000,
    endDate: "2024-12-01",
    productStatus: "깨끗해요",
    purchaseTime: "3개월 이하",
    auctionStatus: "입찰 중",
    description:
      "2개월 정도 신었나? 잘 인신게 돼서 경매에 올려용. 상태는 깨끗합니다!",
    tradeMethod: "직접 만나서",
    imageUrls: [mockingTempImage4.src, mockingTempImage4.src],
    sellerInfo: sellerInfoMockData[0],
    si: "서울시",
    gu: "강남구",
    dong: "논현동",
    bookmarkCount: 0,
    createdAt: "2024-02-12"
  },
  {
    auctionId: 3532562381,
    title: "(mock)모킹5",
    productCategory: "신발",
    initPrice: 5000,
    currentBiddingPrice: 12000,
    endDate: "2024-12-01",
    productStatus: "깨끗해요",
    purchaseTime: "3개월 이하",
    auctionStatus: "입찰 중",
    description:
      "2개월 정도 신었나? 잘 인신게 돼서 경매에 올려용. 상태는 깨끗합니다!",
    tradeMethod: "직접 만나서",
    sellerInfo: sellerInfoMockData[0],
    imageUrls: [mockingTempImage5.src, mockingTempImage5.src],
    si: "서울시",
    gu: "강남구",
    dong: "논현동",
    bookmarkCount: 0,
    createdAt: "2024-02-12"
  },
  {
    auctionId: 3532562392,
    title: "(mock)모킹6",
    productCategory: "신발",
    initPrice: 5000,
    currentBiddingPrice: 16000,
    endDate: "2024-12-01",
    productStatus: "깨끗해요",
    purchaseTime: "3개월 이하",
    auctionStatus: "입찰 중",
    description:
      "2개월 정도 신었나? 잘 인신게 돼서 경매에 올려용. 상태는 깨끗합니다!",
    tradeMethod: "직접 만나서",
    imageUrls: [mockingTempImage6.src, mockingTempImage6.src],
    sellerInfo: sellerInfoMockData[0],
    si: "서울시",
    gu: "강남구",
    dong: "논현동",
    bookmarkCount: 0,
    createdAt: "2024-02-12"
  }
];
