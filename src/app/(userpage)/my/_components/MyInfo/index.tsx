import BoxLayout from "@/app/(userpage)/_components/BoxLayout";
import Info from "@/app/(userpage)/_components/Info";
import Profile from "@/app/(userpage)/_components/Profile";
import TransactionStatus from "@/app/(userpage)/_components/TransactionStatus";
import { useLogout } from "@/app/(userpage)/_hooks/mutations/useLogout";
import useMyInfo from "@/app/(userpage)/_hooks/queries/useMyInfo";
import { CheckLoginUserResponse } from "@/utils/types/user/users";

function MyInfo({ user }: { user: CheckLoginUserResponse }) {
  const {
    purchaseStatusCounts,
    saleStatusCounts,
    reviewLabels: reviewLabelList,
    reviews: reviewList
  } = useMyInfo(user.userId);

  const { mutateLogout } = useLogout();

  return (
    <>
      <Info
        saleStatusCounts={saleStatusCounts}
        reviewLabelList={reviewLabelList}
        reviewList={reviewList}>
        <Profile user={user}>
          <p className="text-sm">{user.address.dong}</p>
          <button
            type="button"
            onClick={() => mutateLogout()}
            className="border py-1 px-3 rounded-lg text-sm mt-2">
            로그아웃
          </button>
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
