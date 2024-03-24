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

  const getBookmarkStatusIcon = (auctionStatus: string) => {
    switch (auctionStatus) {
      case "입찰 중":
        return "진행중";
        break;
      case "거래 중":
        return "대기중";
        break;
      case "거래 완료":
        return "완료됨";
        break;
      case "취소":
        return "취소됨";
        break;
      default:
        return "취소됨";
        break;
    }
  };

  return (
    <div className="flex flex-col items-center m-auto ">
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
                className="mr-4 ml-1"
                titleImage={imageUrl ? imageUrl : tempLogoImage.src}
                width={100}
                height={100}
              />
              <ProductCard.CardTitle width={200}>
                <div className="text-lg text-ellipsis overflow-hidden">
                  {title}
                </div>
                <div className="flex gap-4 text-[0.8rem] mx-1">
                  <span>{getPastTime(createdDate)}</span>
                </div>
                <ProductCard.CardTag
                  tradeState={getBookmarkStatusIcon(auctionStatus)}
                  className="w-[2rem] text-[0.7rem] mx-1"
                />
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
