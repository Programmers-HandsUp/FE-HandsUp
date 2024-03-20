import UserCard from "@/app/_component/common/UserCard";
import { Review } from "@/utils/types/user/mypage";

function ReviewItem({ review }: { review: Review }) {
  const { reviewId, nickname, content } = review;

  return (
    <>
      <UserCard
        className="gap-4 items-center pb-2 border-b"
        key={reviewId}>
        <UserCard.Avatar
          src="/assets/images/normal.webp"
          size="small"
          rounded={"full"}
          className="bg-slate-100"
        />
        <div>
          <UserCard.ContentArea className="my-1">
            <p className="text-sm">{nickname}</p>
          </UserCard.ContentArea>
          <p className="">{content}</p>
        </div>
      </UserCard>
    </>
  );
}

export default ReviewItem;