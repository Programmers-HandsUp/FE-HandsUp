"use client";

import { Suspense } from "react";

import ArrowBackButton from "../_component/common/ArrowBackButton";
import Header from "../_component/common/Header";
import Navigation from "../_component/common/Navigation";
import Spinner from "../_component/common/Spinner";
import useSession from "../_hooks/queries/useSession";
import ChatRoomList from "./_component/ChatRoomList";

const ChatRooms = () => {
  const { data: user, isLoading } = useSession();

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (!user) return <div>다시 로그인을 해주세요.</div>;
  return (
    <>
      <Header
        left={
          <div>
            <ArrowBackButton />
            <span>채팅</span>
          </div>
        }
      />
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <ChatRoomList userId={user?.userId} />
        </Suspense>
      </section>
      <nav className="fixed w-full bottom-0 max-w-[360px] h-[56px]">
        <Navigation user={user} />
      </nav>
    </>
  );
};

export default ChatRooms;
