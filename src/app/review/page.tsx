"use client";

import Button from "../_component/common/Button";
import Icon from "../_component/common/Icon";
import ProductCard from "../_component/common/ProductCard";
import tempImage from "../../public/tempImage.png";
import SelectRange from "./SelectRange";
import SelectReview from "./SelectReview";

const index = () => {
  const mock = {
    image: tempImage,
    name: "상품 이름",
    date: 1708476794082,
    price: 10000,
  };

  return (
    <div style={{ padding: "10%", display: "flex", flexDirection: "column", gap: "20px" }}>
      <Icon id="arrow-back" />
      <div style={{ textAlign: "center" }}>
        <p>
          거니님, <br />
          오리님과의 거래는 어떠셨나요?
        </p>
      </div>
      <hr style={{ width: "30%", margin: "0 auto" }} />
      <ProductCard
        titleImage={mock.image}
        productName={mock.name}
        createDate={mock.date}
        price={mock.price}
      />
      <SelectRange />
      <SelectReview />
      <div>
        <p>남기고 싶은 후기가 있다면 적어주세요</p>
        <textarea
          style={{
            width: "100%",
            height: "150px",
            backgroundColor: "#f8f8f8",
            border: "2px solid #efefef",
            borderRadius: "12px",
            resize: "none",
            padding: "8px",
            scrollbarColor: "#96E4FF #ffffff",
            scrollbarWidth: "thin"
          }}
        />
      </div>
      <Button
        color="primary"
        rounded="full"
        size="large">
        후기 작성 완료하기
      </Button>
    </div>
  );
};

export default index;
