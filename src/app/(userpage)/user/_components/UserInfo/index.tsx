"use client";

import Info from "@/app/(userpage)/_components/Info";
import Profile from "@/app/(userpage)/_components/Profile";
import useUserInfo from "@/app/(userpage)/_hooks/queries/useUserInfo";

function UserInfo({ userId }: { userId: number }) {
  const {
    profile: user,
    saleStatusCounts,
    reviewLabels: reviewLabelList,
    reviews: reviewList
  } = useUserInfo(userId);

  return (
    <div className="py-3">
      <Info
        saleStatusCounts={saleStatusCounts}
        reviewLabelList={reviewLabelList}
        reviewList={reviewList}
        userId={userId}>
        <Profile user={user}>
          <p className="text-sm">{user.dong}</p>
        </Profile>
      </Info>
    </div>
  );
}

export default UserInfo;
