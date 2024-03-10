import { IAuctionDetail } from "@/app/types/product";
import { Auction, CommentType } from "../types";

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

export const auctionHotList: Auction[] = [
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당!",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c0c434c-9802-4556-89c7-a8600b2828d8/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%A1%9C%EC%9A%B0-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-a90z6F77.png",
        product_id: 214124214
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://blog.kakaocdn.net/dn/Ew4ZL/btqMOyXuOdr/KFu7mNJ9p5BCkROTDyKaFk/img.jpg",
        product_id: 2141242141
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://blog.kakaocdn.net/dn/Ew4ZL/btqMOyXuOdr/KFu7mNJ9p5BCkROTDyKaFk/img.jpg",
        product_id: generateRandomNumberId()
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSh8aN8-9rsn3H-geOi_r5QucMD7vhD5QGPg&usqp=CAU",
        product_id: generateRandomNumberId()
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    createdAt: new Date("2024-02-22T03:24:00"),
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNanTb2m1UTgZQ7CPHmP4nG_Ry5rfn3OJ1scSjY7oC0QMRjU-rE2pXqhCxnMHCjBFEeA&usqp=CAU",
        product_id: generateRandomNumberId()
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c0c434c-9802-4556-89c7-a8600b2828d8/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%A1%9C%EC%9A%B0-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-a90z6F77.png",
        product_id: 214124214
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Llgnpo2RNnmQW0Kdp4vx6mFWftEUiDwH_xiEiL4r9TAYgZWCSCbm5rUwqeceJfjinNU&usqp=CAU",
        product_id: 2141242141
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://blog.kakaocdn.net/dn/Ew4ZL/btqMOyXuOdr/KFu7mNJ9p5BCkROTDyKaFk/img.jpg",
        product_id: generateRandomNumberId()
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSh8aN8-9rsn3H-geOi_r5QucMD7vhD5QGPg&usqp=CAU",
        product_id: generateRandomNumberId()
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    createdAt: new Date("2024-02-22T03:24:00"),
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNanTb2m1UTgZQ7CPHmP4nG_Ry5rfn3OJ1scSjY7oC0QMRjU-rE2pXqhCxnMHCjBFEeA&usqp=CAU",
        product_id: generateRandomNumberId()
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c0c434c-9802-4556-89c7-a8600b2828d8/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%A1%9C%EC%9A%B0-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-a90z6F77.png",
        product_id: 214124214
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Llgnpo2RNnmQW0Kdp4vx6mFWftEUiDwH_xiEiL4r9TAYgZWCSCbm5rUwqeceJfjinNU&usqp=CAU",
        product_id: 2141242141
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Llgnpo2RNnmQW0Kdp4vx6mFWftEUiDwH_xiEiL4r9TAYgZWCSCbm5rUwqeceJfjinNU&usqp=CAU",
        product_id: generateRandomNumberId()
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSh8aN8-9rsn3H-geOi_r5QucMD7vhD5QGPg&usqp=CAU",
        product_id: generateRandomNumberId()
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    createdAt: new Date("2024-02-22T03:24:00"),
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNanTb2m1UTgZQ7CPHmP4nG_Ry5rfn3OJ1scSjY7oC0QMRjU-rE2pXqhCxnMHCjBFEeA&usqp=CAU",
        product_id: generateRandomNumberId()
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c0c434c-9802-4556-89c7-a8600b2828d8/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%A1%9C%EC%9A%B0-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-a90z6F77.png",
        product_id: 214124214
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Llgnpo2RNnmQW0Kdp4vx6mFWftEUiDwH_xiEiL4r9TAYgZWCSCbm5rUwqeceJfjinNU&usqp=CAU",
        product_id: 2141242141
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Llgnpo2RNnmQW0Kdp4vx6mFWftEUiDwH_xiEiL4r9TAYgZWCSCbm5rUwqeceJfjinNU&usqp=CAU",
        product_id: generateRandomNumberId()
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    createdAt: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSh8aN8-9rsn3H-geOi_r5QucMD7vhD5QGPg&usqp=CAU",
        product_id: generateRandomNumberId()
      }
    }
  },
  {
    seller_id: generateRandomNumberId(),
    buyer_id: generateRandomNumberId(),
    product_id: generateRandomNumberId(),
    title: "팝니당~~",
    init_price: 15000,
    end_date: new Date("2024-02-22T03:24:00"),
    si: "Seoul",
    gu: "GangDong",
    dong: "dunchondong",
    bookmark_count: 12,
    bidding_user_count: 20,
    trade_method: "JIK",
    auction_status: "bidding",
    trading_order: 15,
    createdAt: new Date("2024-02-22T03:24:00"),
    product: {
      status: "bidding",
      description: "JIC",
      purchase_time: "1month",
      product_category_id: generateRandomNumberId(),
      category: {
        product_category_value: "digital"
      },
      product_image: {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNanTb2m1UTgZQ7CPHmP4nG_Ry5rfn3OJ1scSjY7oC0QMRjU-rE2pXqhCxnMHCjBFEeA&usqp=CAU",
        product_id: generateRandomNumberId()
      }
    }
  }
];

export const auctionDetail: IAuctionDetail = {
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
