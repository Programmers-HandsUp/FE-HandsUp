"use client";

import { useFunnel } from "../_hooks/useFunnel";
import EmailForm from "./_component/funnel/EmailForm";
import FinishFunnel from "./_component/funnel/FinishFunnel";
import SelectCategoryForm from "./_component/funnel/SelectCategoryForm";
import SelectResidenceForm from "./_component/funnel/SelectResidenceForm";
import UserProfileSetting from "./_component/funnel/UserProfileSetting";

const OnBoarding = () => {
  const [Funnel, setStep] = useFunnel(
    [
      "emailForm",
      "userProfileSetting",
      "SelectResidenceForm",
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
        <Funnel.Step name="SelectResidenceForm">
          <SelectResidenceForm />
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
