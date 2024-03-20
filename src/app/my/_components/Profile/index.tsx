import Link from "next/link";

import ReliabilityBar from "@/app/_component/common/Reliabilitybar";
import UserCard from "@/app/_component/common/UserCard";
import { CheckLoginUserResponse } from "@/utils/types/user/users";

function Profile({ user }: { user: CheckLoginUserResponse }) {
  const { nickname, address, profileImageUrl, score } = user;

  return (
    <>
      <UserCard className="gap-4 items-center">
        <UserCard.Avatar
          src={profileImageUrl}
          size="large"
          rounded={"full"}
          className="bg-slate-100"
        />
        <UserCard.ContentArea className="my-1">
          <div className="flex flex-col">
            <p className="text-lg">{nickname}</p>
            <p className="text-sm">{address.dong}</p>
            <Link href="/my/profile-edit">
              <button
                type="button"
                className="border py-1 px-3 rounded-lg text-sm mt-2">
                프로필 관리
              </button>
            </Link>
          </div>
        </UserCard.ContentArea>
      </UserCard>
      <ReliabilityBar score={score} />
    </>
  );
}

export default Profile;
