import { Product, ProductData } from "@/utils/types/auction/registerAuction";

export const registerProduct = async (
  productData: ProductData
): Promise<Product> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auctions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(productData)
  });

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message);
  }

  return await res.json();
};
