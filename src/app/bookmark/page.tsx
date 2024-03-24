"use client";

import getPastTime from "@/utils/function/getPastTime";
import { BookMarkedAllCheckContent } from "@/utils/types/bookmark/allCheck";
import tempLogoImage from "~/images/logoIcon.png";

import ProductCard from "../_component/common/ProductCard";
import useInfiniteScroll from "../_hooks/useInfiniteScroll";
import useGetUserBookmarkList from "./_hooks/queries/useGetUserBookmarkList";

const BookMarkPage = () => {
  const {
    data: bookmarks,
    isFetched,
    fetchNextPage,
    hasNextPage
  } = useGetUserBookmarkList();

  const refetch = () => {
    if (hasNextPage && isFetched) fetchNextPage();
  };
  const { ref } = useInfiniteScroll<HTMLDivElement>(refetch);

  return (
    <div className="flex flex-col justify-center items-center gap-3 h-svh m-auto ">
      {bookmarks.map(
        ({
          auctionId,
          title,
          auctionStatus,
          imageUrl,
          createdDate
        }: BookMarkedAllCheckContent) => (
          <div key={auctionId}>
            <ProductCard
              className="my-2"
              id={auctionId}>
              <ProductCard.CardImage
                className="mr-4"
                titleImage={imageUrl ? imageUrl : tempLogoImage.src}
                width={104}
                height={104}
              />
              <ProductCard.CardTitle width={200}>
                <div className="text-2xl">{title}</div>
                <div className="flex gap-4 text-[0.85rem]">
                  <span>{getPastTime(createdDate)}</span>
                </div>
                <div className="flex justify-between"></div>
              </ProductCard.CardTitle>
            </ProductCard>
            <hr />
          </div>
        )
      )}
      <div ref={ref}></div>
    </div>
  );
};

export default BookMarkPage;
