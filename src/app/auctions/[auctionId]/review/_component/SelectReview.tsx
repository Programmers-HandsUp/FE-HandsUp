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
      <Chip value="응답이 빨라요">응답이 빨라요</Chip>
      <Chip value="약속을 잘 지켜요">약속을 잘 지켜요</Chip>
      <Chip value="친절하고 매너 있어요">친절하고 매너 있어요</Chip>
      <Chip value="직접 와서 거래해요">직접 와서 거래해요</Chip>
      <Chip value="설명을 잘 해줘요">설명을 잘 해줘요</Chip>
      <Chip value="물품 상태 사진과 같아요">물품 상태 사진과 같아요</Chip>
      <Chip value="가격이 착해요">가격이 착해요</Chip>
    </Chips>
  );
};

export default SelectReview;
