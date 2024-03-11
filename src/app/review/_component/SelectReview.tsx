import { useEffect, useState } from "react";
import { Chip, Chips } from "../../_component/common/Chips";

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
      <Chip value="quickResponse">응답이 빨라요</Chip>
      <Chip value="keepPromise">약속을 잘 지켜요</Chip>
      <Chip value="kindMannered">친절하고 매너 있어요</Chip>
      <Chip value="directTrade">직접 와서 거래해요</Chip>
      <Chip value="goodExplanation">설명을 잘 해줘요</Chip>
      <Chip value="sameProduct">물품 상태 사진과 같아요</Chip>
      <Chip value="goodPrice">가격이 착해요</Chip>
    </Chips>
  );
};

export default SelectReview;
