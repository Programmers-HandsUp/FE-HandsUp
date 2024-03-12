import Image from "next/image";
import Avatar from "../Avatar";
import Button from "../Button";

export interface BidderStatusItemProps {
  profileImage: string;
  nickName: string;
  biddingPrice: number;
  status: "WAITING" | "PREPARING" | "PROGRESSING" | "CANCELED" | "COMPLETED";
  isSeller: boolean;
}

const BidderStatusItem = ({
  profileImage,
  nickName,
  biddingPrice,
  status,
  isSeller
}: BidderStatusItemProps) => {
  const renderStatus = () => {
    const baseClass = "bg-[#96E4FF] p-2 rounded-lg transition-colors";
    const hoverClass = "hover:opacity-60";

    //TODO: 채팅방 생성하기 mutation 생성
    //TODO: 채팅하기 Link 태그로 채팅방 이동
    //TODO: 거래완료하기 mutation 생성
    if (isSeller) {
      switch (status) {
        case "WAITING":
          return <span className="text-slate-500 font-bold">대기중</span>;
        case "PREPARING":
          return (
            <button className={`${baseClass} ${hoverClass}`}>
              채팅방 생성하기
            </button>
          );
        case "PROGRESSING":
          return (
            <div className="flex gap-2">
              <button className={`${baseClass} ${hoverClass}`}>채팅하기</button>
              <button className={`${baseClass} ${hoverClass} bg-blue-500`}>
                완료 하기
              </button>
              <button className={`${baseClass} ${hoverClass} bg-red-500`}>
                취소 하기
              </button>
            </div>
          );
        case "CANCELED":
          return <span className="text-slate-500 font-bold">취소됨</span>;
        case "COMPLETED":
          return <span className={`${baseClass} font-bold`}>거래 완료</span>;
        default:
          return null;
      }
    } else {
      switch (status) {
        case "WAITING":
          return <span className="text-slate-500 font-bold">대기중</span>;
        case "PREPARING":
          return <span className="text-slate-500 font-bold">거래 준비 중</span>;
        case "PROGRESSING":
          return <span className="text-slate-500 font-bold">얘기하는 중</span>;
        case "CANCELED":
          return <span className="text-slate-500 font-bold">취소됨</span>;
        case "COMPLETED":
          return <span className={`${baseClass} font-bold`}>거래 완료</span>;
        default:
          return null;
      }
    }
  };
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="flex flex-col items-center">
        <Avatar src={profileImage} />
        <span className="text-xs">{nickName}</span>
      </div>
      <div>
        <span>{biddingPrice}</span>
      </div>
      <div className="grow flex justify-center">{renderStatus()}</div>
    </div>
  );
};

export default BidderStatusItem;
