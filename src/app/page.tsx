import Carousel from "./_component/common/carousel";
import tempImage from "../public/tempImage.png";

export default function Home() {
  return (
    <main className="">
      <Carousel
        imageArray={[tempImage.src, tempImage.src, tempImage.src]}
        className="w-[12rem] h-[12rem]"
      />
    </main>
  );
}
