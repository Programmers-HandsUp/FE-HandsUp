"use client";

import { useFunnel } from "../_hooks/useFunnel";
import FinishFunnel from "./_component/funnel/FinishFunnel";
import SelectCategory from "./_component/funnel/SelectCategory";
import SelectResidence from "./_component/funnel/SelectResidence";
import UserProfileSetting from "./_component/funnel/UserProfileSetting";
import SignUpForm from "./_component/SignupForm";

const OnBoarding = () => {
  const [Funnel, setStep] = useFunnel(
    [
      "emailForm",
      "userProfileSetting",
      "selectResidence",
      "SelectCategory",
      "Finish"
    ],
    "emailForm"
  );

  return (
    <div className="">
      <Funnel>
        <Funnel.Step name="emailForm">
          <SignUpForm />
        </Funnel.Step>
        <Funnel.Step name="userProfileSetting">
          <UserProfileSetting />
        </Funnel.Step>
        <Funnel.Step name="selectResidence">
          <SelectResidence />
        </Funnel.Step>
        <Funnel.Step name="SelectCategory">
          <SelectCategory />
        </Funnel.Step>
        <Funnel.Step name="Finish">
          <FinishFunnel />
        </Funnel.Step>
      </Funnel>
    </div>
  );
};

export default OnBoarding;
