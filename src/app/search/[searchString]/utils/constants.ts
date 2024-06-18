export const ERRORS = {
  PRICE_MAX: "최대 99,999,999원까지 검색 가능합니다.",
  PRICE_MIN: "최소 0원부터 검색 가능합니다.",
  MINPRICE_OVERTHEN_MAXPRICE: "최대 가격은 최소 가격보다 크거나 같아야 합니다."
} as const;

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
  "기타중고물품"
] as const;
