import { StaticImageData } from "next/image";

import mockingTempImage1 from "~/images/devil.webp";

interface sellerType {
  userId: number;
  nickname: string;
  profileImageUrl: string | StaticImageData;
  dong: string;
  score: number;
}

export const sellerInfoMockData: sellerType[] = [
  {
    userId: 123,
    nickname: "안뇽",
    profileImageUrl: mockingTempImage1,
    dong: "강남동",
    score: 150
  }
];
