export interface PopularKeywordResponse {
  keywords: PopularKeyword[];
}

export interface PopularKeyword {
  keyword: string;
  count: number;
}
