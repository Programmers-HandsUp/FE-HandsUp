import Button from "@/app/_component/common/Button";

const LoginSelectionContainer = () => {
  return (
    <div>
      <h1>Hands Up!</h1>
      <h2>다양한 중고 물품 경매에 참여하고 싶다면 Hands up을 찾아주세요</h2>
      <div className="flex flex-col">
        <Button size="small">구글 로그인</Button>
        <Button>카카오 로그인</Button>
        <Button>이메일 로그s인</Button>
      </div>
    </div>
  );
};

export default LoginSelectionContainer;
