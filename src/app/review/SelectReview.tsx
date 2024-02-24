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
        약속을 잘 지켜요
      </Chip>
      <Chip
        value="option3"
        rounded="large">
        친절하고 매너 있어요
      </Chip>
      <Chip
        value="option4"
        rounded="large">
        직접 와서 거래해요
      </Chip>
      <Chip
        value="option5"
        rounded="large">
        설명을 잘 해줘요
      </Chip>
      <Chip
        value="option6"
        rounded="large">
        물품 상태 사진과 같아요
      </Chip>
      <Chip
        value="option7"
        rounded="large">
        가격이 착해요
      </Chip>
    </Chips>
  );
};

export default SelectReview;
