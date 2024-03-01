export const purchaseList = async (status?: Status): Promise<Purchase[]> => {
  let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/buy`;
  status && (url += `?status=${status}`);

  const res = await fetch(url);

  if (!res.ok) throw new Error("Fail!");

  return res.json();
};
