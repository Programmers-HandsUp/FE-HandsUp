import { useCallback, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import Loading from "@/app/_component/common/Loading";
import { useImageUpload } from "@/app/_hooks/mutations/useImageUpload";
import { useSignUp } from "@/app/signup/_hooks/mutations/useSignup";

import OnBoardingFail from "./_component/OnBoardingFail";
import OnBoardingSuccess from "./_component/OnBoardingSuccess";

const SignUpFinishPage = () => {
  const { getValues } = useFormContext();
  const { mutateImageUpload } = useImageUpload();
  const { isSignUpSuccess, mutate } = useSignUp();

  const UploadImageToS3 = useCallback(async () => {
    const newImgForm = new FormData();
    const profileImage = getValues("profileImageUrl");
    if (!profileImage) {
      return "";
    }
    newImgForm.append("images", profileImage);
    const imgUrl = await mutateImageUpload(newImgForm);
    return imgUrl[0];
  }, [getValues, mutateImageUpload]);

  const setOnboardingPost = useCallback(async () => {
    let category = getValues("selectedCategories");
    category = category.map((categoryItem: string) => parseInt(categoryItem));

    const imgUrl = await UploadImageToS3();
    mutate({
      email: getValues("email"),
      password: getValues("password"),
      nickname: getValues("nickname"),
      profileImageUrl: imgUrl,
      si: getValues("si"),
      gu: getValues("gu"),
      dong: getValues("dong"),
      productCategoryIds: [...category]
    });
  }, [getValues, UploadImageToS3, mutate]);

  useEffect(() => {
    setOnboardingPost();
  }, [setOnboardingPost]);

  return (
    <div>
      {isSignUpSuccess === "success" && (
        <OnBoardingSuccess userNickName={getValues("nickname")} />
      )}
      {isSignUpSuccess === "fail" && <OnBoardingFail />}
      {isSignUpSuccess === "none" && <Loading className="pb-[10rem]" />}
    </div>
  );
};

export default SignUpFinishPage;
