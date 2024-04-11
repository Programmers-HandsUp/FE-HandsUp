import { authCheck } from "@/utils/function/authCheck";
import { Notifications } from "@/utils/types/notification";

export const sendFCMToken = async (fcmToken: string) => {
  const isTokenValid = authCheck();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/notifications/fcm-tokens`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${isTokenValid}`
      },
      body: JSON.stringify({
        fcmToken
      })
    }
  );

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message);
  }
};

export const notificationList = async ({
  pageParam
}: {
  pageParam: number;
}): Promise<Notifications> => {
  const isTokenValid = authCheck();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/notifications?page=${pageParam}&size=10`,
    {
      headers: {
        Authorization: `Bearer ${isTokenValid}`
      }
    }
  );
  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message);
  }

  return res.json();
};

export const notificationBadge = async (): Promise<{ count: number }> => {
  const isTokenValid = authCheck();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/notifications/count`,
    {
      headers: {
        Authorization: `Bearer ${isTokenValid}`
      }
    }
  );

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message);
  }

  return res.json();
};
