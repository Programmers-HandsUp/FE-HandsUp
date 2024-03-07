"use client";

import useOnboardingStore from "../store/store";

import { Chips } from "@/app/_component/common/Chips";
import { Chip } from "@/app/_component/common/Chips";

const SelectCategory = () => {
  const category = useOnboardingStore((state) => state.category);
  const setCategory = useOnboardingStore((state) => state.setCategory);

  return (
    <main className="w-[300px] mx-auto mt-5 animate-slideInFromRight">
      <h1 className="text-xl">선호 카테고리 선택</h1>
      <h2 className="text-md text-gray-300 mb-4">최대 5가지 선택 가능</h2>
      <Chips
        Items={category}
        setItems={setCategory}
        multiple>
        <Chip value="digital-devices">디지털 기기</Chip>
        <Chip value="furniture-interior">가구/인테리어</Chip>
        <Chip value="fashion-accessories">패션/잡화</Chip>
        <Chip value="home-appliances">생활가전</Chip>
        <Chip value="home-kitchen">생활/주방</Chip>
        <Chip value="sports-leisure">스포츠/레저</Chip>
        <Chip value="hobby-games-music">취미/게임/음반</Chip>
        <Chip value="beauty-care">뷰티/미용</Chip>
        <Chip value="pet-supplies">반려동물용품</Chip>
        <Chip value="tickets-vouchers">티켓/교환권</Chip>
        <Chip value="books">도서</Chip>
        <Chip value="children-books">유아도서</Chip>
        <Chip value="other-used-items">기타중고물품</Chip>
      </Chips>
      <br />
    </main>
  );
};

export default SelectCategory;
