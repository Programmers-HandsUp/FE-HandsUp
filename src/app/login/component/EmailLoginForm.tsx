import { cookies } from "next/headers";
import { useForm } from "react-hook-form";
import Input from "@/app/_component/common/Input";
import Button from "@/app/_component/common/Button";
import { tokenType } from "@/utils/mocks/api/types";

type LoginFormValues = {
  email: string;
  password: string;
};

const EmailLoginForm = () => {
  const cookieStore = cookies();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>();

  const setCookie = (token: tokenType) => {
    cookieStore;
  };

  const onSubmit = async (data: LoginFormValues) => {
    const req = await fetch("http://localhost:9090/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const token = await req.json();
    setCookie(token);
  };
  return (
    <div className="">
      <h1>로그인</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input>
          <Input.InputInnerBox className="w-[10rem] text-black">
            <label> 이메일 </label>
            <Input.InputForm />
            {errors.email && <p>이메일은 필수 입니다.</p>}
          </Input.InputInnerBox>
        </Input>
        <Input>
          <Input.InputInnerBox className="w-[10rem] text-black">
            <label> 비밀번호 </label>
            <Input.InputForm {...register("password", { required: true })} />
            {errors.password && <p>비밀번호는 필수 입니다.</p>}
          </Input.InputInnerBox>
        </Input>
        <button type="submit">로그인</button>
        <Button>회원가입</Button>
      </form>
    </div>
  );
};
export default EmailLoginForm;
