import { authCheck } from "@/utils/function/authCheck";
import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";
import { Notifications } from "@/utils/types/notification";

export const sendFCMToken = async (fcmToken: string) => {
  const isTokenValid = authCheck();

  if (!isTokenValid) return "";

  const res = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/notifications/fcm-tokens`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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

  return res.json();
};

export const notificationList = async ({
  pageParam
}: {
  pageParam: number;
}): Promise<Notifications> => {
  const isTokenValid = authCheck();

  if (!isTokenValid) return { content: [], size: 0, hasNext: false };

  const res = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/notifications?page=${pageParam}&size=10`
  );

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message);
  }

  return res.json();
};

export const notificationBadge = async (): Promise<{ count: number }> => {
  const isTokenValid = authCheck();

  if (!isTokenValid) return { count: 0 };
  const res = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/notifications/count`
  );

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message);
  }

  return res.json();
};
