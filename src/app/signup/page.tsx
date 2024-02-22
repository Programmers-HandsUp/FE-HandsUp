import SelectCategory from "./component/SelectCategory";
import SelectResidence from "./component/SelectResidence";

const Login = () => {
  return (
    <div className="bg-white text-black">
      <SelectCategory />
      <SelectResidence />
    </div>
  );
};

export default Login;
