"use client";

import { Suspense } from "react";

import ArrowBackButton from "../_component/common/ArrowBackButton";
import Header from "../_component/common/Header";
import Navigation from "../_component/common/Navigation";
import useSession from "../_hooks/queries/useSession";
import ChatRoomList from "./_component/ChatRoomList";

const ChatRooms = () => {
  const { data: user } = useSession();

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
          <ChatRoomList />
        </Suspense>
      </section>
      <nav className="fixed w-full bottom-0 max-w-[360px] h-[56px]">
        <Navigation userId={user?.userId} />
      </nav>
    </>
  );
};

export default ChatRooms;
