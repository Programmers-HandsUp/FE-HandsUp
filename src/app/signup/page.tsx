"use client";

import { useFunnel } from "../_hooks/useFunnel";
import EmailForm from "./_component/funnel/EmailForm";
import FinishFunnel from "./_component/funnel/FinishFunnel";
import SelectCategoryForm from "./_component/funnel/SelectCategoryForm";
import SelectResidence from "./_component/funnel/SelectResidence";
import UserProfileSetting from "./_component/funnel/UserProfileSetting";

const OnBoarding = () => {
  const [Funnel, setStep] = useFunnel(
    [
      "emailForm",
      "userProfileSetting",
      "selectResidence",
      "SelectCategoryForm",
      "Finish"
    ],
    "emailForm"
  );

  return (
    <div className="">
      <Funnel>
        <Funnel.Step name="emailForm">
          <EmailForm />
        </Funnel.Step>
        <Funnel.Step name="userProfileSetting">
          <UserProfileSetting />
        </Funnel.Step>
        <Funnel.Step name="selectResidence">
          <SelectResidence />
        </Funnel.Step>
        <Funnel.Step name="SelectCategoryForm">
          <SelectCategoryForm />
        </Funnel.Step>
        <Funnel.Step name="Finish">
          <FinishFunnel />
        </Funnel.Step>
      </Funnel>
    </div>
  );
};

export default OnBoarding;
