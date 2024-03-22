import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getLoginUserInfo } from "./app/_api/user";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const auth = await getLoginUserInfo();
  if (!auth) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/notification",
    "/my",
    "/auctions/:auctionId*/purchase",
    "/auctions/:auctionId*/bidderList",
    "/auctions/:auctionId*/review",
    "/auctions/:auctionId*/successful-bid",
    "/auctions/:auctionId*/new",
    "/chatrooms",
    "/chatrooms/:chatRoomId*",
    "/report",
    "/user"
  ]
};

// 알림, 채팅, 북마크목록, 마이페이지,입찰, 입찰 목록, 낙찰완료, 거래완료, report, user
