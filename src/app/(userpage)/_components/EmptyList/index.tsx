import Link from "next/link";

function EmptyList({ type }: { type: "구매" | "판매" }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-64 text-gray-700">
      <p>{type} 내역이 없습니다.</p>
      <Link
        href="/home"
        className="border border-gray-300 rounded-md py-1 px-3">
        SHOP 바로가기
      </Link>
    </div>
  );
}

export default EmptyList;
