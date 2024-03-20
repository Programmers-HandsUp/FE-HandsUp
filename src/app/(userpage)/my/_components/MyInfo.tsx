import Link from "next/link";

import { CheckLoginUserResponse } from "@/utils/types/user/users";

import BoxLayout from "../../_components/BoxLayout";
import Info from "../../_components/Info";
import Profile from "../../_components/Profile";
import TransactionStatus from "../../_components/TransactionStatus";
import useMyInfo from "../../_hooks/queries/useMyInfo";

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
          url="/my/buying?status=bidding">
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
