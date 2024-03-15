interface getCheckBookmarkParams {
  auctionId: number;
}

export type getCheckBookmarkResponse = { isBookmarked: boolean };

interface BookmarkResponse {
  bookmarkCount: number;
}

export interface BookmarkListContent {
  auctionId: number;
  title: string;
  auctionStatus: string;
  imageUrl: string;
  createdDate: string;
}

export interface BookmarkListResponse {
  content: BookmarkListContent[];
  size: number;
  hasNext: boolean;
}

//TODO: 토큰 없애기
export const getCheckBookmark = async ({
  auctionId
}: getCheckBookmarkParams): Promise<getCheckBookmarkResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/bookmarks/${auctionId}`,
    {
      headers: {
        Authorization:
          "Bearer eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjUsImlhdCI6MTcxMDMyNzk2MCwiZXhwIjoxNzExMTkxOTYwfQ.8IjNQwUpFplOcmUQO6LbtDk2Z8owwUiIGiO3f46rieM"
      }
    }
  );

  return await res.json();
};

export const addBookmark = async (
  auctionId: number
): Promise<BookmarkResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/bookmarks/${auctionId}`,
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjUsImlhdCI6MTcxMDMyNzk2MCwiZXhwIjoxNzExMTkxOTYwfQ.8IjNQwUpFplOcmUQO6LbtDk2Z8owwUiIGiO3f46rieM"
      }
    }
  );
  const result = await res.json();

  return result;
};

export const deleteBookmark = async (
  auctionId: number
): Promise<BookmarkResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/bookmarks/${auctionId}`,
    {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjUsImlhdCI6MTcxMDMyNzk2MCwiZXhwIjoxNzExMTkxOTYwfQ.8IjNQwUpFplOcmUQO6LbtDk2Z8owwUiIGiO3f46rieM"
      }
    }
  );
  const result = await res.json();

  return result;
};

export const getCheckBookmarkList = async (): Promise<BookmarkListResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/bookmarks`,
    {
      headers: {
        Authorization:
          "Bearer eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjUsImlhdCI6MTcxMDMyNzk2MCwiZXhwIjoxNzExMTkxOTYwfQ.8IjNQwUpFplOcmUQO6LbtDk2Z8owwUiIGiO3f46rieM"
      }
    }
  );
  const result = await res.json();

  return result;
};
