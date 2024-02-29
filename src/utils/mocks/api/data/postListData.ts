import { Auction } from "../types";
import { v4 } from "uuid";

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
