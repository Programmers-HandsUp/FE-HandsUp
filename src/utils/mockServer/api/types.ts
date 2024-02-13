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

export interface authDataType {
  id: string;
  passWord: string;
}
