import { useState } from "react";
import useFunnel from "../hooks/useFunnel";

import SignupHeader from "./component/SignupHeader";
import SelectCategory from "./component/SelectCategory";
import SelectResidence from "./component/SelectResidence";
import UserProfileSetting from "./component/UserProfileSetting";

const Login = () => {
  return (
    <div className="bg-white text-black">
      {
        <div>
          <SelectCategory />
          <SelectResidence />
          <UserProfileSetting />
        </div>
      }
    </div>
  );
};

export default Login;
