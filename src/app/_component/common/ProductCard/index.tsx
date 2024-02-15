import Image from "next/image";

interface ProductCard {
  titleImage: File;
  productName: string;
  createDate: Date;
  price: number;
  tradeState: "취소" | "완료" | "거래중";
}

const ProductCard = ({
  titleImage,
  productName,
  createDate,
  price,
}: ProductCard) => {
  return (
    <div className="flex">
      <Image src={URL.createObjectURL(titleImage)} alt="titleImage" />
      <div>
        <p>{productName}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
