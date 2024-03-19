"use client";

import { Suspense } from "react";

import ArrowBackButton from "../common/ArrowBackButton";
import Header from "../common/Header";
import LoadingSkeleton from "./_component/LoadingSkeleton";
import NotificationList from "./_component/NotificationList";
import CheckPermission from "./CheckPermission";

function Notification() {
  return (
    <>
      <Header
        left={
          <div className="flex items-center gap-3">
            <ArrowBackButton />
            <span>알림</span>
          </div>
        }
      />

      <CheckPermission />

      <Suspense fallback={<LoadingSkeleton />}>
        <div className="px-2 w-full max-w-screen mx-auto mt-4">
          <NotificationList />
        </div>
      </Suspense>
    </>
  );
}

export default Notification;
