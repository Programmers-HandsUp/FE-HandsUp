interface getCheckBookmarkParams {
  auctionId: number;
}

type getCheckBookmarkResponse = { isBookmarked: boolean };

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
