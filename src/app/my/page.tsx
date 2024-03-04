"use client";

import BoxLayout from "./_components/BoxLayout";
import Profile from "./_components/Profile";
import useReviewLabelList from "../hooks/queries/useReviewLabelList";
import useReviewList from "../hooks/queries/useReviewList";
import TransactionStatus from "./_components/TransactionStatus";
import usePurchaseList from "../hooks/queries/usePurchaseList";
import useSaleList from "../hooks/queries/useSaleList";
import ReviewItem from "./_components/ReviewItem";

function MyPage() {
  // 사용자 정보 받아오는 API 필요
  // 해당 정보를 통해서 userId 사용하기
  const { data: reviewLabelList } = useReviewLabelList(5);
  const { data: reviewList } = useReviewList(5);
  const { data: purchaseStatusCounts } = usePurchaseList();
  const { data: saleStatusCounts } = useSaleList(5);

  return (
    <div>
      <Profile />
      <BoxLayout
        title="구매 내역"
        url="buying">
        <TransactionStatus
          type="구매"
          statusCounts={purchaseStatusCounts}
        />
      </BoxLayout>
      <BoxLayout
        title="판매 내역"
        url="selling">
        <TransactionStatus
          type="판매"
          statusCounts={saleStatusCounts}
        />
      </BoxLayout>
      <BoxLayout title="이런 점이 좋았어요">
        <div className="my-2 flex flex-wrap gap-2">
          {reviewLabelList &&
            reviewLabelList.map(({ label, count }, index) =>
              count > 0 ? (
                <span
                  key={index}
                  className="rounded-3xl px-2 border border-[#96E4FF] ">
                  {label} {count}
                </span>
              ) : null
            )}
        </div>
      </BoxLayout>
      <BoxLayout
        title={
          <div className="flex gap-2">
            <p>상세한후기도 있어요</p>
            <p className="text-[#96E4FF]">{reviewList?.length}</p>
          </div>
        }
        url="review">
        <div className="my-2 flex flex-col gap-2">
          {reviewList &&
            reviewList.slice(0, 3).map((review) => (
              <ReviewItem
                key={review.reviewId}
                review={review}
              />
            ))}
        </div>
      </BoxLayout>
    </div>
  );
}

export default MyPage;
