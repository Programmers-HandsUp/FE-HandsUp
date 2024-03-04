import { Purchase, Review, ReviewLabel, Sale, Status } from "../my/types";

export const purchaseList = async (status?: Status): Promise<Purchase[]> => {
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/buy`;
  const url = status ? `${baseUrl}?status=${status}` : baseUrl;

  const res = await fetch(url);

  if (!res.ok) throw new Error("Fail!");

  return res.json();
};

export const saleList = async (
  userId: number,
  status?: Status
): Promise<Sale[]> => {
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/sales`;
  const url = status ? `${baseUrl}?status=${status}` : baseUrl;

  const res = await fetch(url);

  if (!res.ok) throw new Error("Fail!");

  return res.json();
};

export const reviewLabelList = async (
  userId: number
): Promise<ReviewLabel[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/reviews/labels`
  );

  if (!res.ok) throw new Error("Fail");

  return res.json();
};

export const reviewList = async (userId: number): Promise<Review[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/reviews`
  );

  if (!res.ok) throw new Error("Fail");

  return res.json();
};
