import ReliabilityBar from "@/app/_component/common/Reliabilitybar";
import UserCard from "@/app/_component/common/UserCard";
import { CheckLoginUserResponse, UserProfile } from "@/utils/types/user/users";

interface ProfileProps {
  user: CheckLoginUserResponse | UserProfile;
  children: React.ReactNode;
}

function Profile({ user, children }: ProfileProps) {
  const { nickname, profileImageUrl, score } = user;

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
            {children}
          </div>
        </UserCard.ContentArea>
      </UserCard>
      <ReliabilityBar score={score} />
    </>
  );
}

export default Profile;
