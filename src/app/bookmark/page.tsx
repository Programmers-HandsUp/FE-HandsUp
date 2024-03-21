import Image from "next/image";
import Link from "next/link";

function BookMarkPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-svh m-auto ">
      <div className="animate-bounce">
        <Image
          src="/assets/images/logo.webp"
          width={200}
          height={200}
          alt="Hands Up Logo"
        />
      </div>
      <p>페이지 작업 중입니다.</p>
      <Link
        href="/home"
        className="border border-gray-300 rounded-md py-1 px-3">
        SHOP 바로가기
      </Link>
    </div>
  );
}

export default BookMarkPage;
