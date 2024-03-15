import { useQuery } from "@tanstack/react-query";

interface AuctionData {
  startPrice: number;
  maxPrice: number;
}

const fetchAuctionData = async (): Promise<AuctionData> => {
  const response = await fetch("http://13.209.236.54:8080/api/auctions/3");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useAuctionData = () => {
  const { data, isLoading } = useQuery({
    queryFn: fetchAuctionData,
    queryKey: ["auction"]
  });
  return { data, isLoading };
};

// AuctionBanner 컴포넌트
const AuctionBanner = ({ startPrice, maxPrice }: AuctionData) => {
  const { data, isLoading } = useAuctionData();

  // 로딩 중이거나 에러 발생 시 처리
  if (isLoading) return <div>Loading...</div>;

  // API 응답을 사용하여 경매 정보 표시
  const commaStart = data?.startPrice.toLocaleString();
  const commaMax = data?.maxPrice.toLocaleString();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "space-between",
        border: "4px solid red",
        padding: "10px"
      }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>시작가</div>
        <div>₩{commaStart}</div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>최고가</div>
        <div>₩{commaMax}</div>
      </div>
    </div>
  );
};

export default AuctionBanner;
