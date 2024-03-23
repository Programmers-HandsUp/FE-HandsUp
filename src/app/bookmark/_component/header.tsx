import { useRouter } from "next/router";

import Icon from "@/app/_component/common/Icon";

const BookmarkPageHeader = () => {
  const router = useRouter();
  return (
    <header className="flex gap-[2rem] my-6">
      <button onClick={() => router.back()}>
        <Icon id="arrow-back" />
      </button>
      <p className="text-xl font-semibold">관심 목록</p>
    </header>
  );
};

export default BookmarkPageHeader;
