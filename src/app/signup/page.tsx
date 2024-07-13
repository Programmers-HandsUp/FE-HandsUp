"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { useFunnel } from "../_hooks/useFunnel";
import EmailForm from "./_component/funnel/EmailForm";
import NickNameForm from "./_component/funnel/NickNameForm";
import PassWordForm from "./_component/funnel/PasswordForm";
import ProfileImageForm from "./_component/funnel/ProfileImageForm";
import SelectCategoryForm from "./_component/funnel/SelectCategoryForm";
import SelectResidenceForm from "./_component/funnel/SelectResidenceForm";
import SignUpFinishPage from "./_component/funnel/SignUpFinishPage";
import SignUpHeader from "./_component/SignUpHeader";
import { SignUpFormSchema } from "./utils/validation";

const SignUp = () => {
  const formMethods = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    mode: "onBlur"
  });

  const [Funnel, setStep] = useFunnel(
    [
      "emailForm",
      "NickNameForm",
      "PassWordForm",
      "ProfileImageForm",
      "SelectResidenceForm",
      "SelectCategoryForm",
      "SignUpFinish"
    ],
    "ProfileImageForm"
  );

  return (
    <div className="">
      <SignUpHeader />
      <FormProvider {...formMethods}>
        <Funnel>
          <Funnel.Step name="emailForm">
            <EmailForm setStep={() => setStep("PassWordForm")} />
          </Funnel.Step>
          <Funnel.Step name="PassWordForm">
            <PassWordForm setStep={() => setStep("NickNameForm")} />
          </Funnel.Step>
          <Funnel.Step name="NickNameForm">
            <NickNameForm setStep={() => setStep("ProfileImageForm")} />
          </Funnel.Step>
          <Funnel.Step name="ProfileImageForm">
            <ProfileImageForm setStep={() => setStep("SelectResidenceForm")} />
          </Funnel.Step>
          <Funnel.Step name="SelectResidenceForm">
            <SelectResidenceForm
              setStep={() => setStep("SelectCategoryForm")}
            />
          </Funnel.Step>
          <Funnel.Step name="SelectCategoryForm">
            <SelectCategoryForm setStep={() => setStep("SignUpFinish")} />
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
