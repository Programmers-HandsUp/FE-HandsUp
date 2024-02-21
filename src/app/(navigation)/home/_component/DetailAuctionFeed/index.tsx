import Image from "next/image";

const AuctionData = {
  seller_id: 12324215,
  buyer_id: 124124215,
  product_id: 214124,
  title: "이거 팔아용",
  init_price: 15000,
  end_date: new Date("2024-02-22T03:24:00"),
  si: "서울시",
  gu: "강동구",
  dong: "둔촌동",
  bookmark_count: 12,
  bidding_user_count: 20,
  trade_method: "직거래",
  auction_status: "진행 중",
  trading_order: 15,
  product: {
    status: "진행 중",
    description: "직거래만 팔고 있숨당",
    purchase_time: "1개월",
    product_catrgory_id: 4124214,
    category: {
      product_category_value: "디지털 기기",
    },
    product_image: {
      image_url:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c0c434c-9802-4556-89c7-a8600b2828d8/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%A1%9C%EC%9A%B0-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-a90z6F77.png",
      product_id: 214124214,
    },
  },
};

export interface DetailAuctionFeed {
  seller_id: number;
  buyer_id: number;
  product_id: number;
  title: string;
  init_price: number;
  end_date: string;
  si: string;
  gu: string;
  dong: string;
  bookmark_count: number;
  bidding_user_count: number;
  trade_method: string;
  auction_status: string;
  trading_order: number;
}

const DetailAuctionFeed = () => {
  return (
    <div className="w-[200px] h-[200px]">
      <div className="relative w-[200px] h-[200px] border rounded-lg overflow-hidden">
        <Image
          src={AuctionData.product.product_image.image_url}
          width={100}
          height={100}
          alt="상품 이미지"
          className="w-full h-full"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute flex justify-center bottom-0 w-full h-[30px] bg-gradient-to-t from-[rgba(0,0,0,0.7)]">
          00:12:32
        </div>
      </div>
      <div className="text-xs text-end">
        <span>
          🔥{AuctionData.bidding_user_count}명이 치열하게 참여하고있어요!
        </span>
      </div>
    </div>
  );
};

export default DetailAuctionFeed;
