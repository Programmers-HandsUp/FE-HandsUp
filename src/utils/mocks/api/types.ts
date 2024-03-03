export interface Auction {
  seller_id: number;
  buyer_id: number;
  product_id: number;
  title: string;
  init_price: number;
  end_date: Date;
  createdAt: Date;
  si: string;
  gu: string;
  dong: string;
  bookmark_count: number;
  bidding_user_count: number;
  trade_method: string;
  auction_status: "pending" | "bidding" | "finished";
  trading_order: number;
  product: Product;
}

export interface Product {
  status: string;
  description: string;
  purchase_time: string;
  product_category_id: number;
  category: Category;
  product_image: ProductImage;
}

export interface Category {
  product_category_value: string;
}

export interface ProductImage {
  image_url: string;
  product_id: number;
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
