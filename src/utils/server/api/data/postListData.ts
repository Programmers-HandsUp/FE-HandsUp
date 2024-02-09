interface PostType {
  id: number;
  authorId: string;
  authorName: string;
  postName: string;
  titleImage?: string;
  startPrice: number;
  nowPrice: number;
  postDetail: string;
  bidRecord?: bidRecordType[];
  comments: CommentType[];
}

interface CommentType {
  authorName: string;
  authorId: string;
  detail: string;
  id: string;
}

interface bidRecordType {
  bidderName: string;
  bidderId: string;
  biddingPrice: number;
  id: string;
}
export const postListData: PostType[] = [
  {
    id: 1,
    authorId: "id1",
    authorName: "경매왕",
    postName: "아주 많이 비싼 옷",
    startPrice: 300,
    nowPrice: 400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      { authorId: "1", authorName: "jjg", detail: "안삼ㅋ", id: "fakfsdkke1" },
    ],
    bidRecord: [
      { bidderName: "jjg", bidderId: "id1", biddingPrice: 400, id: "123fdsf1" },
    ],
  },
  {
    id: 2,
    authorId: "id2",
    authorName: "악마",
    postName: "싸구려 장난감",
    startPrice: 5000,
    nowPrice: 14400,
    postDetail: "아주 비싸고 많이 비싸고 좋고 몰라 그냥 좋고 사지마 그냥아아아",
    comments: [
      {
        authorId: "1",
        authorName: "jjg",
        detail: "상태가 어떤가요",
        id: "fakfsdkafske1",
      },
      {
        authorId: "2",
        authorName: "장사꾼",
        detail: "좋아요",
        id: "faksdfsfsdkke1",
      },
      {
        authorId: "1",
        authorName: "jjg",
        detail: "그럼 안삼ㅋ",
        id: "fakfssdfsdfdkke1",
      },
    ],
    bidRecord: [
      {
        bidderName: "구매왕",
        bidderId: "id3",
        biddingPrice: 6000,
        id: "13423fdsf1",
      },
      {
        bidderName: "판매왕",
        bidderId: "id2",
        biddingPrice: 7000,
        id: "1423fdsf1",
      },
      {
        bidderName: "jjg",
        bidderId: "id1",
        biddingPrice: 14400,
        id: "123fdsf1",
      },
    ],
  },
];
