"use client";

import useReviewList from "@/app/(userpage)/_hooks/queries/useReviewList";

import ReviewItem from "../ReviewItem";

function AllReviews({ userId }: { userId: number }) {
  const { data: reviewList } = useReviewList(userId);

  return (
    <>
      {reviewList.length === 0 ? (
        <div className="flex items-center justify-center h-screen">
          후기가 없어요
        </div>
      ) : (
        reviewList.map((review) => (
          <ReviewItem
            key={review.reviewId}
            review={review}
          />
        ))
      )}
    </>
  );
}

export default AllReviews;
