import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("accessToken");

  if (!cookie) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

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
