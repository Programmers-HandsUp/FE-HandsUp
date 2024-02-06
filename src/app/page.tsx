import Carousel from "./_component/common/carousel";
import tempImage from "../public/tempImage.png";
import tempImage2 from "../public/tempLeftButton.svg";

export default function Home() {
  return (
    <main className="">
      <Carousel
        changeDelay={3000}
        imageArray={[tempImage.src, tempImage2.src, tempImage.src]}
        className="w-[12rem] h-[12rem]"
      />
    </main>
  );
}
