import axios from "axios";
import { AddrType } from "../types/address";

const searchAddr = async (addr: string): Promise<AddrType> => {
  const { data } = await axios.get(
    `https://dapi.kakao.com/v2/local/search/address?query=${addr}`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_KEY}`
      }
    }
  );
  return data;
};

export default searchAddr;
