import {
  ImageUrl,
} from "../products/new/_utils/productType";

export const imageUpload = async (formData: FormData): Promise<ImageUrl[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/images`, {
    method: "POST",
    body: formData
  });

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message);
  }

  const data = await res.json();
  return data.imageUrls;
};

