import { useForm } from "react-hook-form";
import Button from "../_component/common/Button";
import InputPrice from "../_component/common/InputPrice";
import ProductCard from "../_component/common/ProductCard";
import Timer from "../_component/common/Timer";
import AuctionBanner from "./AuctionBanner";
import AuctionRanking from "./AuctionRanking";
import tempImage from "../../public/tempImage.png";

const page = () => {
  const createdAt = new Date("2024-02-16T10:59:59");
  const deadline = new Date("2024-02-17T16:59:59");

  const { register, handleSubmit, setValue, reset } = useForm();

  return (
    <div style={{ margin: "0 auto" }}>
      <Timer
        deadline={deadline}
        createdAt={createdAt}
      />
      <AuctionBanner />
      <ProductCard
        titleImage={tempImage}
        productName="상품명"
        createDate={new Date("2024-02-26T21:29:00")}
        price={100000}
      />
      <AuctionRanking />
      <form>
        <InputPrice
          {...register("price")}
          title="제안 가격"
          setValue={setValue}
          reset={reset}
          price={100000}
        />
        <Button color="primary">입찰하기</Button>
      </form>
    </div>
  );
};

export default page;
