export type ImageUrl =
  `https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/${string}`;

export interface Image {
  imageUrls: ImageUrl[];
}
