"use client";

import useReviewList from "../../../hooks/queries/useReviewList";
import ReviewItem from "../ReviewItem";

function AllReviews() {
  const { data: reviewList } = useReviewList(5);

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
