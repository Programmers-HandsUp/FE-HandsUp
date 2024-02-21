import { useState } from "react";
import { Chip, Chips } from "../_component/common/Chips";

const SelectReview = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <Chips
      Items={selectedItems}
      setItems={setSelectedItems}
      multiple={true}
      spacing="small"
      >
      <Chip
        value="option1"
        rounded="large">
        응답이 빨라요
      </Chip>
      <Chip
        value="option2"
        rounded="large">
        시간 약속을 잘 지켜요
      </Chip>
      <Chip
        value="option3"
        rounded="large">
        친절하고 매너있어요
      </Chip>
      <Chip
        value="option4"
        rounded="large">
        제가 있는 곳까지 와서 거래했어요
      </Chip>
      <Chip
        value="option5"
        rounded="large">
        물품설명이 자세해요
      </Chip>
      <Chip
        value="option6"
        rounded="large">
        물품 상태가 설명한 것과 같아요
      </Chip>
      <Chip
        value="option7"
        rounded="large">
        저렴하게 구매했어요
      </Chip>
    </Chips>
  );
};

export default SelectReview;
