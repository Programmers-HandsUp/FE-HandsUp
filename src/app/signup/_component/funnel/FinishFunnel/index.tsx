import { useCallback, useEffect } from "react";

import Loading from "@/app/_component/common/Loading";
import { useImageUpload } from "@/app/_hooks/mutations/useImageUpload";
import { useSignUp } from "@/app/signup/_hooks/mutations/useSignup";

import OnBoardingFail from "./_component/OnBoardingFail";
import OnBoardingSuccess from "./_component/OnBoardingSuccess";

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
  const { isSignUpSuccess, mutate } = useSignUp();

  const setOnboardingPost = useCallback(async () => {
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
  }, [
    id,
    passWord,
    profileImage,
    category,
    address,
    nickName,
    mutateImageUpload,
    mutate
  ]);

  useEffect(() => {
    setOnboardingPost();
  }, [setOnboardingPost]);

  return (
    <div>
      {isSignUpSuccess === "success" && (
        <OnBoardingSuccess userNickName={nickName} />
      )}
      {isSignUpSuccess === "fail" && <OnBoardingFail />}
      {isSignUpSuccess === "none" && <Loading className="pb-[10rem]" />}
    </div>
  );
};

export default FinishFunnel;
