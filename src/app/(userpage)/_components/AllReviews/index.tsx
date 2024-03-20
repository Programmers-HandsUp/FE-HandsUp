"use client";

import useReviewList from "../../../(userpage)/_hooks/queries/useReviewList";
import ReviewItem from "../ReviewItem";

function AllReviews({ userId }: { userId: number }) {
  const { data: reviewList } = useReviewList(userId);

  return (
    <>
      {reviewList &&
        reviewList.map((review) => (
          <ReviewItem
            key={review.reviewId}
            review={review}
          />
        ))}
    </>
  );
}

export default AllReviews;
