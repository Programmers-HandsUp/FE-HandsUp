interface BookmarkResponse {
  bookmarkCount: number;
}

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
