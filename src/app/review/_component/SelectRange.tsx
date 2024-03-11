import Image from "next/image";
import { useEffect, useState } from "react";

import { Chip, Chips } from "../../_component/common/Chips";

interface SelectRangeProps {
  onSelected: (value: string) => void;
}

const SelectRange = ({ onSelected }: SelectRangeProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    onSelected(selectedItems);
  }, [selectedItems, onSelected]);

  return (
    <Chips
      Items={selectedItems}
      setItems={setSelectedItems}
      multiple={false}
      size={48}>
      <Chip value="worst">
        <div>
          <Image
            src="https://www.emojiall.com/images/60/apple/1f635.png"
            alt="worst"
            width={30}
            height={30}
          />
        </div>
        최악
      </Chip>
      <Chip value="bad">
        <div>
          <Image
            src="https://www.emojiall.com/images/60/apple/1f61e.png"
            alt="bad"
            width={30}
            height={30}
          />
        </div>
        불만
      </Chip>
      <Chip value="average">
        <div>
          <Image
            src="https://www.emojiall.com/images/60/apple/1f610.png"
            alt="average"
            width={30}
            height={30}
          />
        </div>
        보통
      </Chip>
      <Chip value="good">
        <div>
          <Image
            src="https://www.emojiall.com/images/60/apple/1f642.png"
            alt="good"
            width={30}
            height={30}
          />
        </div>
        만족
      </Chip>
      <Chip value="best">
        <div>
          <Image
            src="https://www.emojiall.com/images/60/apple/1f604.png"
            alt="best"
            width={30}
            height={30}
          />
        </div>
        최고
      </Chip>
    </Chips>
  );
};

export default SelectRange;
