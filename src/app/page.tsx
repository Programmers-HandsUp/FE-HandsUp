import Carousel from "./_component/common/Carousel";
import temp from "../public/tempImage.png";
export default function Home() {
  return (
    <main className="">
      <Carousel imageArray={[temp, temp, temp]} size="xxlarge" />
    </main>
  );
}
