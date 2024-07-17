interface EmailErrorTextProps {
  emailInputStatus: string;
}

const EmailErrorText = ({ emailInputStatus }: EmailErrorTextProps) => {
  if (emailInputStatus === "Warn") {
    return (
      <p className="ml-2 text-red-400 text-[0.8rem] font-bold">
        이미 사용중인 이메일입니다.
      </p>
    );
  } else if (emailInputStatus === "Ok") {
    return (
      <p className="ml-2 text-green-400 text-[0.8rem] font-bold">
        사용가능한 이메일입니다!
      </p>
    );
  } else return <></>;
};

export default EmailErrorText;
