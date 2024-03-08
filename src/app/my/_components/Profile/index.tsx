import ReliabilityBar from "@/app/_component/common/Reliabilitybar";
import UserCard from "@/app/_component/common/UserCard";
import Link from "next/link";

function Profile() {
  return (
    <>
      <UserCard className="gap-4 items-center">
        <UserCard.Avatar
          src="/assets/temp.png"
          size="large"
          rounded={"full"}
          className="bg-slate-100"
        />
        <UserCard.ContentArea className="my-1">
          <div className="flex flex-col">
            <p className="text-lg">오리도리</p>
            <p className="text-sm">성수동</p>
            <Link href="/account/profile-edit">
              <button
                type="button"
                className="border py-1 px-3 rounded-lg text-sm mt-2">
                프로필 관리
              </button>
            </Link>
          </div>
        </UserCard.ContentArea>
      </UserCard>
      <ReliabilityBar score={140} />
    </>
  );
}

export default Profile;
