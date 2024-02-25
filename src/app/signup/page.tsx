"use client";
import useFunnel from "../hooks/useFunnel";

import SignupHeader from "./component/SignupHeader";
import SelectCategory from "./component/SelectCategory";
import SelectResidence from "./component/SelectResidence";
import UserProfileSetting from "./component/UserProfileSetting";

const Login = () => {
  const { topComponent, topFunnelPage, pushFunnel, popFunnel } = useFunnel([
    <UserProfileSetting key="1" />,
    <SelectResidence key="2" />,
    <SelectCategory key="3" />
  ]);
  return (
    <div className="">
      <SignupHeader
        nowPage={topFunnelPage}
        onClickLeftButton={popFunnel}
        onClickRightButton={pushFunnel}
      />
      {topComponent}
    </div>
  );
};

export default Login;
