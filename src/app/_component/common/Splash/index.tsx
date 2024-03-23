"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex flex-col justify-center items-center h-dvh">
      <div className="text-center">
        <p className="text-xl mb-4">경매로 진행하는 중고 물품 거래</p>
        <Image
          src="/assets/images/textLogo.webp"
          width={250}
          height={100}
          alt="textLogo-handsup"
        />
      </div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2">
        <Image
          src="/assets/images/hans.webp"
          width={300}
          height={200}
          alt="로고"
        />
      </div>
    </main>
  );
}

export default Splash;
