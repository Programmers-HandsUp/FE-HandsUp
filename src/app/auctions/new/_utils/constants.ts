export const TRADEMETHOD_LIST = ["직거래", "택배"] as const;
export const STATE_LIST = ["미개봉", "깨끗해요", "사용감 있음"] as const;

export const PURCHASE_TIME_LIST = [
  {
    value: "1개월 이하",
    title: "1개월 ▼"
  },
  {
    value: "3개월 이하",
    title: "3개월 ▼"
  },
  {
    value: "6개월 이하",
    title: "6개월 ▼"
  },
  {
    value: "1년 이하",
    title: "1년 ▼"
  },
  {
    value: "1년 이상",
    title: "1년 ▲"
  },
  {
    value: "모름",
    title: "모름"
  }
] as const;

export const PURCHASE_TIME_VALUE = [
  "1개월 이하",
  "3개월 이하",
  "6개월 이하",
  "1년 이하",
  "1년 이상",
  "모름"
] as const;

export const CATEGORY_LIST = [
  "디지털 기기",
  "가구/인테리어",
  "패션/잡화",
  "생활가전",
  "생활/주방",
  "스포츠/레저",
  "취미/게임/음반",
  "뷰티/미용",
  "반려동물용품",
  "티켓/교환권",
  "도서",
  "유아도서",
  "기타중고물품"
] as const;

export const ERRORS = {
  IMAGE_MIN: "사진은 1장 이상 첨부해주세요",
  TITLE_LENGTH: "상품명은 1자 이상 30자 이하로 입력해주세요",
  CATEGORY_REQUIRED: "카테고리를 선택해주세요",
  STATUS_REQUIRED: "상품 상태를 선택해주세요",
  PURCHASE_TIME_REQUIRED: "상품 구매 시기를 선택해주세요",
  PRICE_MAX: "가격은 최대 1억원까지 입력가능해요",
  PRICE_MIN: "가격은 최소 1000원부터 입력가능해요",
  PRICE_UNIT: "금액은 100원 단위로 입력 가능해요",
  TRADE_METHOD_REQUIRED: "상품 거래 방식을 선택해주세요",
  AUCTION_DATE_REQUIRED: "경매 마감일을 선택해주세요.",
  DESCRIPTION_LENGTH: "상세 설명은 5자 이상 1000자 이하로 입력해주세요",
  ADDRESS_REQUIRED: "직거래를 선택하셨다면, 거래 희망 장소를 선택해주세요."
} as const;
