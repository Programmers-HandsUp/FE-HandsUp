"use client";

import { Chips } from "@/app/_component/common/Chips";
import { Chip } from "@/app/_component/common/Chips";

import useOnboardingStore from "../store/store";

const SelectCategory = () => {
  const category = useOnboardingStore((state) => state.category);
  const setCategory = useOnboardingStore((state) => state.setCategory);

  return (
    <main className="w-[300px] mx-auto mt-5 animate-slideInFromRight">
      <h1 className="text-xl">선호 카테고리 선택</h1>
      <h2 className="text-md text-gray-300 mb-4">최대 5가지 선택 가능</h2>
      <Chips
        limit={5}
        Items={category}
        setItems={setCategory}
        multiple>
        <Chip value="1">디지털 기기</Chip>
        <Chip value="2">가구/인테리어</Chip>
        <Chip value="3">패션/잡화</Chip>
        <Chip value="4">생활가전</Chip>
        <Chip value="5">생활/주방</Chip>
        <Chip value="6">스포츠/레저</Chip>
        <Chip value="7">취미/게임/음반</Chip>
        <Chip value="8">뷰티/미용</Chip>
        <Chip value="9">반려동물용품</Chip>
        <Chip value="10">티켓/교환권</Chip>
        <Chip value="11">도서</Chip>
        <Chip value="12">유아도서</Chip>
        <Chip value="13">기타중고물품</Chip>
      </Chips>
      <br />
    </main>
  );
};

export default SelectCategory;
