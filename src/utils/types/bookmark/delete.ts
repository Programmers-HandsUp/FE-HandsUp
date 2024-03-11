export interface BookMarkedDeleteRequest {
  message: string;
  code: string;
}

export interface BookMarkedDeleteResponse {
  bookmarkCount: number;
}
