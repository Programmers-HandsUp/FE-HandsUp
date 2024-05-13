"use client";

import { Suspense } from "react";

import { authCheck } from "@/utils/function/authCheck";

import Header from "../common/Header";
import Icon from "../common/Icon";
import Loading from "../common/Loading";
import NotificationList from "./_component/NotificationList";
import CheckPermission from "./CheckPermission";

interface NotificationProps {
  close: () => void;
}

function Notification({ close }: NotificationProps) {
  const auth = authCheck();

  return (
    <>
      <Header
        left={
          <div className="flex items-center gap-3">
            <button onClick={close}>
              <Icon id="arrow-back" />
            </button>
            <span>알림</span>
          </div>
        }
      />
      {auth && (
        <>
          <CheckPermission />

          <Suspense fallback={<Loading />}>
            <div className="px-2 w-full max-w-screen mx-auto mt-4">
              <NotificationList />
            </div>
          </Suspense>
        </>
      )}
    </>
  );
}

export default Notification;
