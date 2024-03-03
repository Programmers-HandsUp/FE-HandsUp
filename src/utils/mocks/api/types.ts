export interface PostType {
  id: number;
  authorId: string;
  authorName: string;
  postName: string;
  titleImage?: string;
  startPrice: number;
  nowPrice: number;
  images?: File[];
  endtime: Date | String;
  tradePlace: string;
  postDetail: string;
  bidRecord?: bidRecordType[];
  comments?: CommentType[];
}
export interface CommentType {
  authorName: string;
  authorId: string;
  detail: string;
  id: string;
}

export interface bidRecordType {
  bidderName: string;
  bidderId: string;
  biddingPrice: number;
  id: string;
}

export interface userAuthType {
  email: string;
  password: string;
}

export interface tokenType {
  accessToken: string;
  refreshToken: string;
}

export interface userDataType {
  role: "admin" | "user";
  nickName: string;
  residence: string;
  profileImag?: string | null;
  interetedcategory: string[];
}

export interface TopThreeRankType {
  content: TopThreeRankDataType[];
  size: number;
  hasNext: boolean;
}

export interface TopThreeRankDataType {
  biddingPrice: number;
  auctionId: number;
  bidderId: number;
  bidderNickname: string;
}

export interface BidsType {
  content: BidsDataType[];
  size: number;
  hasNext: boolean;
}

export interface BidsDataType {
  biddingPrice: number;
  auctionId: number;
  bidderId: number;
  bidderNickname: string;
  createdAt: Date;
}
