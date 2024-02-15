"use client";
import UserCard from "./_component/common/UserCard";
import temp from "../../public/logoIcon.png";

if (process.env.NODE_ENV === "development") {
  import("@/utils/mockServer");
}

export default function Home() {
  return (
    <main className="">
      <UserCard className="gap-2 border-2 border-black">
        <UserCard.Avatar
          src={temp.src}
          size="large"
          rounded={"full"}
          className="bg-black"
        />
        <UserCard.ContentArea className="my-auto">
          <p>text</p>
          <p>text</p>
        </UserCard.ContentArea>
      </UserCard>
    </main>
  );
}
