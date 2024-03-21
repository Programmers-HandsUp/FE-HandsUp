import Link from "next/link";

import BoxLayout from "@/app/(userpage)/_components/BoxLayout";
import Info from "@/app/(userpage)/_components/Info";
import Profile from "@/app/(userpage)/_components/Profile";
import TransactionStatus from "@/app/(userpage)/_components/TransactionStatus";
import useMyInfo from "@/app/(userpage)/_hooks/queries/useMyInfo";
import { CheckLoginUserResponse } from "@/utils/types/user/users";

function MyInfo({ user }: { user: CheckLoginUserResponse }) {
  const {
    purchaseStatusCounts,
    saleStatusCounts,
    reviewLabels: reviewLabelList,
    reviews: reviewList
  } = useMyInfo(user.userId);

  return (
    <>
      <Info
        saleStatusCounts={saleStatusCounts}
        reviewLabelList={reviewLabelList}
        reviewList={reviewList}>
        <Profile user={user}>
          <p className="text-sm">{user.address.dong}</p>
          <Link href="/my/profile-edit">
            <button
              type="button"
              className="border py-1 px-3 rounded-lg text-sm mt-2">
              프로필 관리
            </button>
          </Link>
        </Profile>
        <BoxLayout
          title="구매 내역"
          url="/my/buying?status=BIDDING">
          <TransactionStatus
            type="구매"
            statusCounts={purchaseStatusCounts}
          />
        </BoxLayout>
      </Info>
    </>
  );
}

export default MyInfo;
