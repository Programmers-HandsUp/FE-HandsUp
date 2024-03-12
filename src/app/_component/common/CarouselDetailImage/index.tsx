import Image from "next/image";

import SlideCarousel from "../SlideCarousel";

interface CarouselDetailImageProps {
  imageUrls: string[];
  auctionStatus: "입찰중" | "거래중" | "거래완료";
}

const CarouselDetailImage = ({
  imageUrls,
  auctionStatus
}: CarouselDetailImageProps) => {
  return (
    <div className="relative">
      {auctionStatus !== "입찰중" && (
        <div className="absolute w-full h-full bg-[rgba(255,255,255,0.5)] z-20 flex justify-center items-center">
          <div className="relative z-30 font-semibold">
            <span className="text-black text-2xl">{auctionStatus}</span>
          </div>
        </div>
      )}
      <SlideCarousel
        childSize={300}
        height={300}
        itemsToShow={1}
        groupGap={14}
        useButton
        useNav
        className="first:pl-2 last:pr-2">
        {imageUrls.map((item, idx) => (
          <div
            className="relative"
            key={item + idx}>
            <Image
              src={item}
              fill
              alt="상품이미지"
              className="object-cover"
            />
          </div>
        ))}
      </SlideCarousel>
    </div>
  );
};

export default CarouselDetailImage;
