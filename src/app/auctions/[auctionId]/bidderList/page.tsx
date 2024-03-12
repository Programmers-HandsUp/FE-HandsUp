import ArrowBackButton from "@/app/_component/common/ArrowBackButton";
import BidderStatusItem from "@/app/_component/common/BidderStatusItem";
import Header from "@/app/_component/common/Header";

export interface BidderContent {
  biddingPrice: number;
  auctionId: number;
  bidderId: number;
  bidderNickname: string;
  imgUrl: string;
  createdAt: string;
  status: "WAITING" | "PREPARING" | "PROGRESSING" | "CANCELED" | "COMPLETED";
}
export interface dataType {
  content: BidderContent[];
  size: number;
  hasNext: boolean;
}

const data: dataType = {
  content: [
    {
      biddingPrice: 15000,
      auctionId: 214,
      bidderId: 1,
      bidderNickname: "토낑",
      imgUrl:
        "https://img.freepik.com/premium-photo/adorable-rabbit-character_398492-14609.jpg",
      createdAt: "2024-03-12",
      status: "PROGRESSING"
    },
    {
      biddingPrice: 14000,
      auctionId: 214,
      bidderId: 2,
      bidderNickname: "도리",
      imgUrl:
        "https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg",
      createdAt: "2024-03-12",
      status: "WAITING"
    },
    {
      biddingPrice: 13000,
      auctionId: 214,
      bidderId: 3,
      bidderNickname: "하하",
      imgUrl:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      createdAt: "2024-03-12",
      status: "WAITING"
    }
  ],
  size: 0,
  hasNext: false
};

interface BidderListPageProps {
  params: { auctionId: number };
}

const BidderListPage = ({ params }: BidderListPageProps) => {
  const { auctionId } = params;
  const auctionSellerId = 24242;
  const currentID = 24242;

  //TODO: 다음입찰자 선택하기 mutation 생성

  return (
    <main className="">
      <Header
        left={<ArrowBackButton />}
        center={<h1 className="text-lg">입찰자 목록</h1>}
      />
      {data.content.map((data) => (
        <BidderStatusItem
          key={data.bidderId}
          profileImage={data.imgUrl}
          biddingPrice={data.biddingPrice}
          nickName={data.bidderNickname}
          status={data.status}
          isSeller={auctionSellerId === currentID}
        />
      ))}
      <div className="flex justify-center items-center mt-12">
        <button className="bg-[#96E4FF] p-2 rounded-lg">
          다음 입찰자 선택하기
        </button>
      </div>
    </main>
  );
};

export default BidderListPage;
