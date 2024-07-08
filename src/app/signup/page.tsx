"use client";

import { FormProvider, useForm } from "react-hook-form";

import { useFunnel } from "../_hooks/useFunnel";
import EmailForm from "./_component/funnel/EmailForm";
import SelectCategoryForm from "./_component/funnel/SelectCategoryForm";
import SelectResidenceForm from "./_component/funnel/SelectResidenceForm";
import SignUpFinishPage from "./_component/funnel/SignUpFinishPage";
import UserProfileForm from "./_component/funnel/UserProfileForm";


const SignUp = () => {
  const formMethods = useForm<SignUpFormProps>();

  const [Funnel, setStep] = useFunnel(
    [
      "emailForm",
      "UserProfileForm",
      "SelectResidenceForm",
      "SelectCategoryForm",
      "SignUpFinish"
    ],
    "emailForm"
  );

  return (
    <div className="">
      <FormProvider {...formMethods}>
        <Funnel>
          <Funnel.Step name="emailForm">
            <EmailForm />
          </Funnel.Step>
          <Funnel.Step name="UserProfileForm">
            <UserProfileForm />
          </Funnel.Step>
          <Funnel.Step name="SelectResidenceForm">
            <SelectResidenceForm />
          </Funnel.Step>
          <Funnel.Step name="SelectCategoryForm">
            <SelectCategoryForm />
          </Funnel.Step>
          <Funnel.Step name="SignUpFinish">
            <SignUpFinishPage />
          </Funnel.Step>
        </Funnel>
      </FormProvider>
    </div>
  );
};

export default SignUp;
