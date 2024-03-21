import { LabelContent, ReviewContent, Status } from "@/utils/types/user/mypage";

import BoxLayout from "../BoxLayout";
import ReviewItem from "../ReviewItem";
import TransactionStatus from "../TransactionStatus";

interface InfoProps {
  saleStatusCounts: Record<Status, number>;
  reviewLabelList: LabelContent[];
  reviewList: ReviewContent[];
  children: React.ReactNode;
  userId?: number;
}

function Info({
  children,
  saleStatusCounts,
  reviewLabelList,
  reviewList,
  userId
}: InfoProps) {
  const sellingUrl = userId
    ? `/user/${userId}/selling?status=BIDDING`
    : "/my/selling?status=BIDDING";
  const reviewUrl = userId ? `/user/${userId}/review` : "/my/review";

  return (
    <>
      {children}
      <BoxLayout
        title="판매 내역"
        url={sellingUrl}>
        <TransactionStatus
          type="판매"
          statusCounts={saleStatusCounts}
        />
      </BoxLayout>
      <BoxLayout title="이런 점이 좋았어요">
        <div className="my-2 flex flex-wrap gap-2">
          {reviewLabelList.length === 0 ? (
            <div>받은 거래 후기가 아직 없어요. </div>
          ) : (
            reviewLabelList.map(({ label, count }, index) => (
              <span
                key={index}
                className="rounded-3xl px-2 border border-[#96E4FF] ">
                {label} {count}
              </span>
            ))
          )}
        </div>
      </BoxLayout>
      <BoxLayout
        title={
          <div className="flex gap-2">
            <p>상세한후기도 있어요</p>
            <p className="text-[#96E4FF]">{reviewList.length}</p>
          </div>
        }
        url={reviewUrl}>
        {reviewList.length === 0 ? (
          <div className="my-2">받은 거래 후기가 아직 없어요.</div>
        ) : (
          <div className="my-2 flex flex-col gap-2">
            {reviewList.slice(0, 3).map((review) => (
              <ReviewItem
                key={review.reviewId}
                review={review}
              />
            ))}
          </div>
        )}
      </BoxLayout>
    </>
  );
}

export default Info;
