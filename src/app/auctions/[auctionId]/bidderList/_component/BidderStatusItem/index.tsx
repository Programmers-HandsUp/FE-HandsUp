import Link from "next/link";

import Avatar from "@/app/_component/common/Avatar";

export interface BidderStatusItemProps {
  profileImage: string;
  nickName: string;
  biddingPrice: number;
  status: "대기중" | "준비중" | "진행중" | "취소됨" | "완료됨";
  isSeller: boolean;
  chatRoomId: number | undefined;
  biddingId: number;
  createChatRoom: ({ biddingId }: { biddingId: number }) => void;
  patchComplete: () => void;
  patchCompleteIsLoading: boolean;
  userId: number;
}

const BidderStatusItem = ({
  profileImage,
  nickName,
  biddingId,
  userId,
  chatRoomId,
  biddingPrice,
  status,
  isSeller,
  createChatRoom,
  patchComplete,
  patchCompleteIsLoading
}: BidderStatusItemProps) => {
  const renderStatus = () => {
    const baseClass = "bg-[#96E4FF] p-2 rounded-lg transition-colors";
    const hoverClass = "hover:opacity-60";

    if (isSeller) {
      switch (status) {
        case "대기중":
          return <span className="text-slate-500 font-bold">대기중</span>;
        case "준비중":
          return (
            <button
              onClick={() => createChatRoom({ biddingId })}
              className={`${baseClass} ${hoverClass}`}>
              채팅방 생성하기
            </button>
          );
        case "진행중":
          return (
            <div className="flex gap-2">
              <Link
                href={`/chatrooms/${chatRoomId}/?senderId=${userId}`}
                className={`${baseClass} ${hoverClass}`}>
                채팅하기
              </Link>
              <button
                onClick={patchComplete}
                disabled={patchCompleteIsLoading}
                className={`${baseClass} ${hoverClass} bg-blue-500`}>
                완료 하기
              </button>
            </div>
          );
        case "취소됨":
          return <span className="text-slate-500 font-bold">취소됨</span>;
        case "완료됨":
          return <span className={`${baseClass} font-bold`}>거래 완료</span>;
        default:
          return null;
      }
    } else {
      switch (status) {
        case "대기중":
          return <span className="text-slate-500 font-bold">대기중</span>;
        case "준비중":
          return <span className="text-slate-500 font-bold">거래 준비 중</span>;
        case "진행중":
          return <span className="text-slate-500 font-bold">얘기하는 중</span>;
        case "취소됨":
          return <span className="text-slate-500 font-bold">취소됨</span>;
        case "완료됨":
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
        <span>{biddingPrice}원</span>
      </div>
      <div className="grow flex justify-center">{renderStatus()}</div>
    </div>
  );
};

export default BidderStatusItem;
