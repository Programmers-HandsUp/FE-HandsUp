import { AddrType } from "../types/address";

const searchAddr = async (addr: string): Promise<AddrType> => {
  const response = await fetch(
    `https://dapi.kakao.com/v2/local/search/address?query=${addr}`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_KEY}`
      }
    }
  );

  if (!response.ok) {
    throw new Error("에러가 발생했습니다.");
  }

  return response.json();
};

export default searchAddr;
