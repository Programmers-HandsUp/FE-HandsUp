import { useEffect, useState } from "react";

import { Chip, Chips } from "@/app/_component/common/Chips";
interface SelectedReviewProps {
  onSelected: (value: string[]) => void;
}

const SelectReview = ({ onSelected }: SelectedReviewProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    onSelected(selectedItems);
  }, [selectedItems, onSelected]);

  return (
    <Chips
      Items={selectedItems}
      setItems={setSelectedItems}
      multiple={true}>
      <Chip value="1R">응답이 빨라요</Chip>
      <Chip value="2R">저렴하게 구매했어요</Chip>
      <Chip value="3R">친절하고 매너 있어요</Chip>
      <Chip value="4R">시간 약속을 잘 지켜요</Chip>
      <Chip value="5R">물품 설명이 자세해요</Chip>
      <Chip value="6R">물품 상태가 설명한 것과 같아요</Chip>
    </Chips>
  );
};

export default SelectReview;
