import { authCheck } from "@/utils/function/authCheck";
import {
  Purchase,
  Review,
  ReviewLabel,
  Sale,
  Status
} from "@/utils/types/user/mypage";
import { UserProfile } from "@/utils/types/user/users";

const isTokenValid = authCheck();

export const purchaseList = async (status?: Status): Promise<Purchase[]> => {
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/buy`;
  const url = status ? `${baseUrl}?status=${status}` : baseUrl;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${isTokenValid}`
    }
  });

  if (!res.ok) throw new Error("Fail!");

  return res.json();
};

export const saleList = async (
  userId: number,
  status?: Status
): Promise<Sale[]> => {
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/sales`;
  const url = status ? `${baseUrl}?status=${status}` : baseUrl;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${isTokenValid}`
    }
  });

  if (!res.ok) throw new Error("Fail!");

  return res.json();
};

export const reviewLabelList = async (userId: number): Promise<ReviewLabel> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/reviews/labels`,
    {
      headers: {
        Authorization: `Bearer ${isTokenValid}`
      }
    }
  );

  if (!res.ok) throw new Error("Fail");

  return res.json();
};

export const reviewList = async (userId: number): Promise<Review> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/reviews`,
    {
      headers: {
        Authorization: `Bearer ${isTokenValid}`
      }
    }
  );

  if (!res.ok) throw new Error("Fail");

  return res.json();
};

export const userProfile = async (userId: number): Promise<UserProfile> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/profiles`,
    {
      headers: {
        Authorization: `Bearer ${isTokenValid}`
      }
    }
  );

  if (!res.ok) {
    console.log(res);
  }

  return res.json();
};
