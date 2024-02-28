import { useEffect, useState } from "react";
import { Chip, Chips } from "../_component/common/Chips";

const SelectReview = ({ onSelected }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    onSelected(selectedItems);
  }, [selectedItems]);

  return (
    <Chips
      Items={selectedItems}
      setItems={setSelectedItems}
      multiple={true}>
      <Chip value="option1">응답이 빨라요</Chip>
      <Chip value="option2">약속을 잘 지켜요</Chip>
      <Chip value="option3">친절하고 매너 있어요</Chip>
      <Chip value="option4">직접 와서 거래해요</Chip>
      <Chip value="option5">설명을 잘 해줘요</Chip>
      <Chip value="option6">물품 상태 사진과 같아요</Chip>
      <Chip value="option7">가격이 착해요</Chip>
    </Chips>
  );
};

export default SelectReview;
