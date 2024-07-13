"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { useFunnel } from "../_hooks/useFunnel";
import EmailForm from "./_component/funnel/EmailForm";
import PassWordForm from "./_component/funnel/PasswordForm";
import SelectCategoryForm from "./_component/funnel/SelectCategoryForm";
import SelectResidenceForm from "./_component/funnel/SelectResidenceForm";
import SignUpFinishPage from "./_component/funnel/SignUpFinishPage";
import UserProfileForm from "./_component/funnel/UserProfileForm";
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
      "UserProfileForm",
      "PassWordForm",
      "SelectResidenceForm",
      "SelectCategoryForm",
      "SignUpFinish"
    ],
    "NickNameForm"
  );

  return (
    <div className="">
      <FormProvider {...formMethods}>
        <Funnel>
          <Funnel.Step name="emailForm">
            <EmailForm setStep={() => setStep("PassWordForm")} />
          </Funnel.Step>
          <Funnel.Step name="PassWordForm">
            <PassWordForm setStep={() => setStep("NickNameForm")} />
          </Funnel.Step>
          <Funnel.Step name="NickNameForm">
            <UserProfileForm setStep={() => setStep("UserProfileForm")} />
          </Funnel.Step>
          <Funnel.Step name="UserProfileForm">
            <UserProfileForm setStep={() => setStep("SelectResidenceForm")} />
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
