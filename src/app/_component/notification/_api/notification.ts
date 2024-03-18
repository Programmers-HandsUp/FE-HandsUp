export const sendFCMToken = async (fcmToken: string) => {
  const res = await fetch(
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
