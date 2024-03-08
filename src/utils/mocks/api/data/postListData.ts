import { Auction } from "../types";
import { v4 } from "uuid";

export const postListData: PostType[] = [
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
const generateRandomNumberId = (length = 8) => {
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 10); // 0부터 9까지의 랜덤한 정수
    randomId += randomNumber;
  }

  return parseInt(randomId, 10); // 문자열을 숫자로 변환
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
