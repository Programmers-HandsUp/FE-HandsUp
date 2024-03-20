"use client";

import Info from "../../_components/Info";
import Profile from "../../_components/Profile";
import useUserInfo from "../../_hooks/queries/useUserInfo";

function UserInfo({ userId }: { userId: number }) {
  const {
    profile: user,
    saleStatusCounts,
    reviewLabels: reviewLabelList,
    reviews: reviewList
  } = useUserInfo(userId);

  return (
    <>
      <Info
        saleStatusCounts={saleStatusCounts}
        reviewLabelList={reviewLabelList}
        reviewList={reviewList}
        userId={userId}>
        <Profile user={user}>
          <p className="text-sm">{user.dong}</p>
        </Profile>
      </Info>
    </>
  );
}

export default UserInfo;
