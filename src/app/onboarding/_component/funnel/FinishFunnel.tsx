import Link from "next/link";
import { useEffect } from "react";

import { useImageUpload } from "@/app/_hooks/mutations/useImageUpload";
import { useSignUp } from "@/app/signup/_hooks/mutations/useSignup";

interface FinishFunnelProps {
  profileImage: File | undefined;
  category: string[];
  address: { si: string; dong: string; gu: string };
  nickName: string;
  id: string | null;
  passWord: string | null;
}

const FinishFunnel = ({
  id,
  passWord,
  profileImage,
  category,
  address,
  nickName
}: FinishFunnelProps) => {
  const { mutateImageUpload } = useImageUpload();
  const { mutate, isPending } = useSignUp();
  const setOnboardingPost = async () => {
    if (id && passWord) {
      try {
        const newImgForm = new FormData();
        if (profileImage) {
          newImgForm.append("images", profileImage);
        }
        const imgUrl = await mutateImageUpload(newImgForm);
        const newArr: number[] = [];
        category.map((item) => {
          newArr.push(parseInt(item));
        });
        mutate({
          email: id,
          password: passWord,
          nickname: nickName,
          profileImageUrl: imgUrl[0],
          si: address.si,
          gu: address.gu,
          dong: address.dong,
          productCategoryIds: [...newArr]
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    setOnboardingPost();
  }, []);

  return (
    <div>
      {isPending ? (
        <div className="flex justify-center items-center my-[8rem]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <div className="w-full h-full">
          <h1 className="text-2xl mt-[8rem] w-fit mx-auto text-center h-fit">
            등록이 완료되었습니다.
          </h1>
          <div className="mt-[6rem] h-fit w-fit mx-auto">
            <Link
              className="rounded-md border-2 text-center mx-auto w-fit h-fit px-2 py-1 border-white bg-[#96E4FF]"
              href="/">
              홈으로 가기
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinishFunnel;
